import { NextResponse } from 'next/server'
import pool from '@/lib/db'

export const dynamic = 'force-dynamic'

const UNITY_API_BASE = 'https://peersunity.com'
const UNITY_BEARER_TOKEN = '302|cO0VMR2dmr9j8c3JtIU9dfkuZfSfvzaCCF1GVxJAdc6fdd2d'

export function normalizePhotoUrl(rawPhoto: string | null | undefined): string | null {
  if (!rawPhoto || typeof rawPhoto !== 'string') return null
  const trimmed = rawPhoto.trim()
  if (!trimmed) return null
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://') || trimmed.startsWith('data:')) {
    return trimmed
  }
  const clean = trimmed.replace(/^\//, '')
  if (clean.startsWith('storage/')) {
    return `${UNITY_API_BASE}/${clean}`
  }
  if (clean.startsWith('profile-photos/') || clean.startsWith('avatars/')) {
    return `${UNITY_API_BASE}/storage/${clean}`
  }
  if (clean.startsWith('api/')) {
    return `${UNITY_API_BASE}/${clean}`
  }
  // Check if it's a UUID (referencing files table)
  if (/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(clean)) {
    return `${UNITY_API_BASE}/api/v1/files/${clean}`
  }
  return `${UNITY_API_BASE}/${clean}`
}

/**
 * Endpoint to get genuine profile photo from public.users table by user ID, email, or phone.
 * GET /api/leadership/user-photo?userId=...
 */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const userId = searchParams.get('userId') || searchParams.get('user_id') || searchParams.get('id')
  const email = searchParams.get('email')?.toLowerCase()
  const phone = searchParams.get('phone')

  if (!userId && !email && !phone) {
    return NextResponse.json({ success: false, message: 'Missing userId, email, or phone' }, { status: 400 })
  }

  const cleanPhone = phone ? phone.replace(/\D/g, '').slice(-10) : null

  try {
    let photoUrl: string | null = null
    let foundUserId: string | null = userId || null

    // 1. Query users table directly by user ID (or email / phone)
    try {
      const res = await pool.query<{ id: string; profile_photo_url: string | null }>(
        `SELECT id, profile_photo_url FROM public.users
         WHERE ($1::text IS NOT NULL AND id::text = $1)
            OR ($2::text IS NOT NULL AND LOWER(email) = $2)
            OR ($3::text IS NOT NULL AND RIGHT(REGEXP_REPLACE(phone, '\\D', '', 'g'), 10) = $3)
         ORDER BY (CASE WHEN $1::text IS NOT NULL AND id::text = $1 THEN 1 ELSE 2 END)
         LIMIT 1`,
        [userId || null, email || null, cleanPhone]
      )

      if (res.rows.length > 0) {
        foundUserId = res.rows[0].id
        if (res.rows[0].profile_photo_url) {
          photoUrl = normalizePhotoUrl(res.rows[0].profile_photo_url)
        }
      }
    } catch (dbErr) {
      console.warn('[user-photo] PostgreSQL query error:', dbErr)
    }

    // 2. If not found in local DB, fetch from live Unity API by userId or email
    if (!photoUrl && (foundUserId || email)) {
      const idf = foundUserId || email!
      try {
        const apiRes = await fetch(`${UNITY_API_BASE}/api/v1/members-with-circles/${encodeURIComponent(idf)}`, {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${UNITY_BEARER_TOKEN}`,
          },
          cache: 'no-store',
          signal: AbortSignal.timeout(5000),
        })

        if (apiRes.ok) {
          const json = await apiRes.json()
          const m = json.data || (json.items && json.items[0])
          const raw = m?.photo || m?.photo_url || m?.profile_photo_url || m?.avatar_url
          if (raw) {
            photoUrl = normalizePhotoUrl(raw)
          }
        }
      } catch (apiErr) {
        console.warn('[user-photo] Unity API lookup warning:', apiErr)
      }
    }

    return NextResponse.json({
      success: true,
      userId: foundUserId,
      photoUrl,
      profile_photo_url: photoUrl,
    })
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 })
  }
}

