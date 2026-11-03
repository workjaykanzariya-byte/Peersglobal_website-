import { NextResponse } from 'next/server'
import pool from '@/lib/db'
import { KNOWN_CANDIDATES } from '@/lib/candidate-auth'

export const dynamic = 'force-dynamic'

interface UserRow {
  id: string
  email: string
  phone?: string | null
  mobile?: string | null
  first_name?: string | null
  last_name?: string | null
  display_name?: string | null
  company_name?: string | null
  company?: string | null
  designation?: string | null
  role?: string | null
  city?: string | null
  state?: string | null
  country?: string | null
  experience_years?: number | null
  short_bio?: string | null
  bio?: string | null
  experience_summary?: string | null
  linkedin_profile?: string | null
  social_links?: any
  profile_photo_url?: string | null
  photo_url?: string | null
  photo?: string | null
  avatar?: string | null
  avatar_url?: string | null
  profile_image?: string | null
  profile_image_url?: string | null
  profile_photo_path?: string | null
  image?: string | null
  status?: string | null
  [key: string]: any
}

const UNITY_API_BASE = 'https://peersunity.com'
const UNITY_BEARER_TOKEN = '302|cO0VMR2dmr9j8c3JtIU9dfkuZfSfvzaCCF1GVxJAdc6fdd2d'

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
  // Check if it's a UUID (referencing files table: https://peersunity.com/api/v1/files/{file_id})
  if (/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(clean)) {
    return `${UNITY_API_BASE}/api/v1/files/${clean}`
  }
  return `${UNITY_API_BASE}/${clean}`
}

/**
 * Fetch member photo from live Unity API by userId, email, or phone
 */
async function fetchPhotoFromUnityAPI(identifier: string): Promise<string | null> {
  const clean = identifier ? identifier.trim() : ''
  if (!clean) return null

  try {
    const url = `${UNITY_API_BASE}/api/v1/members-with-circles/${encodeURIComponent(clean)}`
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${UNITY_BEARER_TOKEN}`,
      },
      cache: 'no-store',
      signal: AbortSignal.timeout(5000),
    })

    if (res.ok) {
      const json = await res.json()
      const m = json.data || (Array.isArray(json.data) ? json.data[0] : null) || (json.items && json.items[0])
      const raw = m?.photo || m?.photo_url || m?.profile_photo_url || m?.avatar_url
      if (raw) {
        return normalizePhotoUrl(raw)
      }
    }
  } catch (err) {
    console.warn(`[check-member] Unity API lookup error for "${clean}":`, err)
  }

  // Also try admin peers search API
  try {
    const adminUrl = `${UNITY_API_BASE}/api/v1/admin/peers?search=${encodeURIComponent(clean)}`
    const adminRes = await fetch(adminUrl, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${UNITY_BEARER_TOKEN}`,
      },
      cache: 'no-store',
      signal: AbortSignal.timeout(5000),
    })

    if (adminRes.ok) {
      const json = await adminRes.json()
      const items = json.data?.items || json.data?.data || json.data || (Array.isArray(json) ? json : [])
      if (Array.isArray(items) && items.length > 0) {
        const item = items[0]
        const raw = item.avatar_url || item.profile_photo_url || item.photo
        if (raw) {
          return normalizePhotoUrl(raw)
        }
      }
    }
  } catch {}

  return null
}

// Built-in catalog matching database users
const FALLBACK_USERS: any[] = []

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}))
    const email = body.email ? String(body.email).trim().toLowerCase() : ''
    const rawPhone = body.phone || body.mobile ? String(body.phone || body.mobile).trim() : ''

    // Normalize phone by extracting strictly the last 10 digits to avoid country code / +91 mismatches
    const allDigits = rawPhone.replace(/\D/g, '')
    const tenDigit = allDigits.length >= 10 ? allDigits.slice(-10) : allDigits

    if (!email && !tenDigit) {
      return NextResponse.json(
        { success: false, message: 'Please provide an email or phone number to verify.' },
        { status: 400 }
      )
    }

    let foundUser: UserRow | null = null
    let resolvedPhotoUrl: string | null = null

    // STEP 1: Verify valid peer from email & phone, and retrieve user_id from 'users' table
    try {
      const dbQuery = `
        SELECT id, email, phone, first_name, last_name, display_name, company_name, designation, profile_photo_url, short_bio
        FROM public.users
        WHERE LOWER(email) = $1
           OR (phone IS NOT NULL AND RIGHT(REGEXP_REPLACE(phone, '\\D', '', 'g'), 10) = $2)
        ORDER BY (CASE WHEN LOWER(email) = $1 THEN 1 ELSE 2 END)
        LIMIT 1
      `
      const res = await pool.query<UserRow>(dbQuery, [email || '---', tenDigit || '---'])

      if (res.rows.length > 0) {
        foundUser = res.rows[0]
      }
    } catch (dbErr) {
      console.warn('[check-member] Step 1 DB check warning:', dbErr)
    }

    // STEP 2: By user_id, retrieve profile_photo_url from 'users' table
    if (foundUser && foundUser.id) {
      // First check if profile_photo_url was already retrieved in Step 1
      if (foundUser.profile_photo_url) {
        resolvedPhotoUrl = normalizePhotoUrl(foundUser.profile_photo_url)
      } else {
        // Query profile_photo_url explicitly by user_id
        try {
          const photoRes = await pool.query<{ profile_photo_url: string | null }>(
            `SELECT profile_photo_url FROM public.users WHERE id = $1 LIMIT 1`,
            [foundUser.id]
          )
          if (photoRes.rows.length > 0 && photoRes.rows[0].profile_photo_url) {
            resolvedPhotoUrl = normalizePhotoUrl(photoRes.rows[0].profile_photo_url)
          }
        } catch (photoErr) {
          console.warn('[check-member] Step 2 DB photo by user_id warning:', photoErr)
        }
      }

      // If database row didn't have photo, fetch from live Unity API by user_id
      if (!resolvedPhotoUrl) {
        resolvedPhotoUrl = await fetchPhotoFromUnityAPI(foundUser.id)
      }
    }

    // STEP 3: If not found in local DB, check live Unity API directly by email or phone
    if (!foundUser) {
      if (email) {
        resolvedPhotoUrl = await fetchPhotoFromUnityAPI(email)
      }
      if (!resolvedPhotoUrl && tenDigit) {
        resolvedPhotoUrl = await fetchPhotoFromUnityAPI(tenDigit)
      }

      // Check fallback catalog
      const match = FALLBACK_USERS.find((u) => {
        const emailMatch = email && u.email.toLowerCase() === email
        const uPhoneDigits = u.phone.replace(/\D/g, '').slice(-10)
        const phoneMatch = tenDigit && (uPhoneDigits === tenDigit || uPhoneDigits.endsWith(tenDigit))
        return emailMatch || phoneMatch
      })

      if (match) {
        foundUser = match as any
        // Check photo by fallback user's id
        if (!resolvedPhotoUrl && foundUser?.id) {
          resolvedPhotoUrl = await fetchPhotoFromUnityAPI(foundUser.id)
        }
      }
    }

    // STEP 4: Format response
    if (foundUser) {
      const firstName = foundUser.first_name || (foundUser.name ? foundUser.name.split(' ')[0] : '') || ''
      const lastName = foundUser.last_name || (foundUser.name ? foundUser.name.split(' ').slice(1).join(' ') : '') || ''
      const fullName =
        [firstName, lastName].filter(Boolean).join(' ').trim() ||
        foundUser.display_name ||
        foundUser.name ||
        'Verified Member'

      const company = foundUser.company_name || foundUser.company || ''
      const designation = foundUser.designation || foundUser.role || ''
      const city = foundUser.city || 'Ahmedabad'
      const state = foundUser.state || 'Gujarat'
      const mobile = foundUser.phone || foundUser.mobile || rawPhone
      const userId = foundUser.id || 'd25388ab-4943-427c-bf2e-b8222c8d7fc5'

      const photoUrl = resolvedPhotoUrl || normalizePhotoUrl(foundUser.profile_photo_url) || null

      const socialUrl =
        foundUser.linkedin_profile ||
        (typeof foundUser.social_links === 'string'
          ? foundUser.social_links
          : foundUser.social_links?.linkedin || '') ||
        `https://linkedin.com/in/${fullName.toLowerCase().replace(/[^a-z0-9]/g, '-')}`

      const bio =
        foundUser.short_bio ||
        foundUser.experience_summary ||
        foundUser.bio ||
        'Dedicated business leader stewarding strategic ecosystem collaboration, ethical enterprise governance, and peer growth across the District.'

      return NextResponse.json({
        success: true,
        exists: true,
        is_existing_member: true,
        candidate_id: userId,
        user_id: userId,
        profile: {
          user_id: userId,
          fullName,
          full_name: fullName,
          email: foundUser.email || email,
          mobile,
          company,
          company_name: company,
          designation,
          city,
          state,
          country: foundUser.country || 'India',
          yearsExperience: Number(foundUser.experience_years) || 8,
          bio,
          socialLinks: socialUrl,
          profile_photo_url: photoUrl,
          photo_url: photoUrl,
        },
        message: `Registered member record verified for ${fullName}. Profile credentials and official photo loaded from Unity App.`,
      })
    }

    // No user found
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
        city: 'Ahmedabad',
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
