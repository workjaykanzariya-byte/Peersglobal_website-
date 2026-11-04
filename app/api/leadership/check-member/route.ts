import { NextResponse } from 'next/server'
import pool from '@/lib/db'

export const dynamic = 'force-dynamic'

const UNITY_API_BASE = 'https://peersunity.com'

/**
 * Normalizes any profile_photo_url format from database / API to full public image URL
 */
export function normalizePhotoUrl(rawPhoto: string | null | undefined): string | null {
  if (!rawPhoto || typeof rawPhoto !== 'string') return null
  const trimmed = rawPhoto.trim()
  if (!trimmed || trimmed.includes('unsplash.com')) return null

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
  if (/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(clean)) {
    return `${UNITY_API_BASE}/api/v1/files/${clean}`
  }
  return `${UNITY_API_BASE}/${clean}`
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}))
    const email = body.email ? String(body.email).trim().toLowerCase() : ''
    const rawPhone = body.phone || body.mobile ? String(body.phone || body.mobile).trim() : ''

    const allDigits = rawPhone.replace(/\D/g, '')
    const tenDigit = allDigits.length >= 10 ? allDigits.slice(-10) : allDigits

    if (!email && !tenDigit) {
      return NextResponse.json(
        { success: false, message: 'Please provide an email or phone number to verify.' },
        { status: 400 }
      )
    }

    // -------------------------------------------------------------
    // PRIORITY 1: Call live backend API check-member endpoint
    // POST /api/v1/leadership/public/check-member
    // -------------------------------------------------------------
    try {
      const liveRes = await fetch(`${UNITY_API_BASE}/api/v1/leadership/public/check-member`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email: email || undefined,
          phone: rawPhone || tenDigit || undefined,
          mobile: rawPhone || tenDigit || undefined,
        }),
        cache: 'no-store',
      })

      if (liveRes.ok) {
        const liveJson = await liveRes.json()
        if (liveJson && liveJson.exists && (liveJson.profile || liveJson.data)) {
          const p = liveJson.profile || liveJson.data
          const resolvedPhoto = normalizePhotoUrl(p.photo_url || p.profile_photo_url || p.photo)

          return NextResponse.json({
            success: true,
            exists: true,
            is_existing_member: true,
            candidate_id: p.user_id || p.id,
            user_id: p.user_id || p.id,
            profile: {
              user_id: p.user_id || p.id,
              fullName: p.full_name || p.name || 'Verified Member',
              full_name: p.full_name || p.name || 'Verified Member',
              email: p.email || email,
              mobile: p.mobile || p.phone || rawPhone,
              phone: p.phone || p.mobile || rawPhone,
              company: p.company || p.company_name || '',
              company_name: p.company || p.company_name || '',
              designation: p.designation || '',
              city: p.city || 'Surat',
              state: p.state || 'Gujarat',
              country: p.country || 'India',
              yearsExperience: Number(p.experience_years) || 8,
              bio: p.bio || p.short_bio || 'Dedicated business leader championing ecosystem collaboration across the District.',
              socialLinks: p.linkedin_profile || p.social_links || `https://linkedin.com/in/${(p.full_name || 'member').toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
              profile_photo_url: resolvedPhoto,
              photo_url: resolvedPhoto,
            },
            message: liveJson.message || `Member profile verified successfully.`,
          })
        }
      }
    } catch (apiErr) {
      console.warn('[check-member] Live API check warning:', apiErr)
    }

    // -------------------------------------------------------------
    // PRIORITY 2: Fallback to local DB pool if available
    // -------------------------------------------------------------
    if (pool) {
      try {
        const dbQuery = `
          SELECT id, email, phone, first_name, last_name, display_name, company_name, designation, profile_photo_url, short_bio
          FROM public.users
          WHERE LOWER(email) = $1
             OR (phone IS NOT NULL AND RIGHT(REGEXP_REPLACE(phone, '\\D', '', 'g'), 10) = $2)
          ORDER BY (CASE WHEN LOWER(email) = $1 THEN 1 ELSE 2 END)
          LIMIT 1
        `
        const res = await pool.query<any>(dbQuery, [email || '---', tenDigit || '---'])

        if (res.rows.length > 0) {
          const u = res.rows[0]
          const fullName =
            [u.first_name, u.last_name].filter(Boolean).join(' ').trim() ||
            u.display_name ||
            'Verified Member'
          const photoUrl = normalizePhotoUrl(u.profile_photo_url)

          return NextResponse.json({
            success: true,
            exists: true,
            is_existing_member: true,
            candidate_id: u.id,
            user_id: u.id,
            profile: {
              user_id: u.id,
              fullName,
              full_name: fullName,
              email: u.email || email,
              mobile: u.phone || rawPhone,
              phone: u.phone || rawPhone,
              company: u.company_name || '',
              company_name: u.company_name || '',
              designation: u.designation || '',
              city: 'Surat',
              state: 'Gujarat',
              country: 'India',
              yearsExperience: 8,
              bio: u.short_bio || 'Dedicated business leader championing ecosystem collaboration across the District.',
              socialLinks: `https://linkedin.com/in/${fullName.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
              profile_photo_url: photoUrl,
              photo_url: photoUrl,
            },
            message: `Member profile verified successfully.`,
          })
        }
      } catch (dbErr) {
        // Pool not available
      }
    }

    // -------------------------------------------------------------
    // Not found
    // -------------------------------------------------------------
    return NextResponse.json({
      success: true,
      exists: false,
      is_existing_member: false,
      can_continue_as_new_nominee: true,
      profile: {
        fullName: '',
        full_name: '',
        email,
        mobile: rawPhone,
        company: '',
        company_name: '',
        designation: '',
        city: 'Surat',
        state: 'Gujarat',
        country: 'India',
        yearsExperience: 5,
        bio: '',
        socialLinks: '',
        profile_photo_url: null,
        photo_url: null,
      },
      message: 'No existing member record found matching these details. You may proceed as a new nominee.',
    })
  } catch (err: any) {
    console.error('Member lookup unexpected error:', err)
    return NextResponse.json(
      {
        success: false,
        exists: false,
        message: 'Member lookup service encountered an issue. Please try again.',
      },
      { status: 500 }
    )
  }
}
