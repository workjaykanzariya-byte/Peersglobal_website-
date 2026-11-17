import { NextResponse } from 'next/server'
import pool from '@/lib/db'

export const dynamic = 'force-dynamic'

const UNITY_API_BASE = 'https://peersunity.com'

function normalizePhotoUrl(rawPhoto: string | null | undefined): string | null {
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
  return `${UNITY_API_BASE}/storage/${clean}`
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}))
    const verificationId = String(body.verification_id || '').trim()
    const otp = String(body.otp || '').trim()
    const contact = String(body.contact || '').trim()
    const contactType = body.contact_type || (contact.includes('@') ? 'email' : 'mobile')

    if (!verificationId || !otp) {
      return NextResponse.json(
        { success: false, message: 'Verification ID and OTP are required.' },
        { status: 400 }
      )
    }

    let isVerified = false
    let isExistingMember = false
    let memberProfile: any = null

    // 1. Strictly verify with live backend API (No mock or hardcoded bypasses)
    const res = await fetch(`${UNITY_API_BASE}/api/v1/leadership/public/verification/nomination/verify-otp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        verification_id: verificationId,
        otp: otp,
      }),
    })

    const data = await res.json().catch(() => ({}))

    if (!res.ok || !data?.success) {
      return NextResponse.json(
        {
          success: false,
          verified: false,
          message: data?.message || 'Invalid or expired verification code. Please check and try again.',
          errors: data?.errors || null,
        },
        { status: res.status || 400 }
      )
    }

    isVerified = true
    isExistingMember = Boolean(data.data?.is_existing_member ?? data.is_existing_member ?? true)
    if (data.data?.profile) {
      memberProfile = data.data.profile
    } else if (data.data && typeof data.data === 'object' && data.data.full_name) {
      memberProfile = data.data
    }

    // 3. If verified and contact is provided, lookup full profile from backend or database
    if (isVerified && contact) {
      const cleanContact = contact.toLowerCase().trim()
      const isEmail = cleanContact.includes('@')
      const digits = cleanContact.replace(/\D/g, '')
      const last10 = digits.length >= 10 ? digits.slice(-10) : digits

      // Priority A: Try backend check-member endpoint
      try {
        const liveRes = await fetch(`${UNITY_API_BASE}/api/v1/leadership/public/check-member`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            email: isEmail ? cleanContact : undefined,
            phone: !isEmail ? (digits || contact) : undefined,
            mobile: !isEmail ? (digits || contact) : undefined,
          }),
          cache: 'no-store',
        })

        if (liveRes.ok) {
          const liveJson = await liveRes.json()
          if (liveJson && (liveJson.exists || liveJson.profile)) {
            const p = liveJson.profile || liveJson.data || {}
            isExistingMember = true
            const resolvedPhoto = normalizePhotoUrl(p.photo_url || p.profile_photo_url || p.photo)

            // Enrich with members-with-circles if available
            let dynamicSince = p.member_since ? String(p.member_since) : (p.membership_starts_at ? `Since ${new Date(p.membership_starts_at).getFullYear()}` : (p.created_at ? `Since ${new Date(p.created_at).getFullYear()}` : ''))
            let dynamicScore = typeof p.life_impact_score === 'number' ? p.life_impact_score : (typeof p.lives_impacted === 'number' ? p.lives_impacted : (p.life_impact_score !== undefined && p.life_impact_score !== null ? Number(p.life_impact_score) : 0))

            if (p.user_id || p.id) {
              try {
                const enrichRes = await fetch(`${UNITY_API_BASE}/api/v1/members-with-circles/${p.user_id || p.id}`, {
                  headers: {
                    Authorization: `Bearer 302|cO0VMR2dmr9j8c3JtIU9dfkuZfSfvzaCCF1GVxJAdc6fdd2d`,
                    Accept: 'application/json',
                  },
                })
                if (enrichRes.ok) {
                  const enrichJson = await enrichRes.json()
                  const md = enrichJson.data || {}
                  if (!dynamicSince && (md.membership_starts_at || md.created_at)) {
                    dynamicSince = `Since ${new Date(md.membership_starts_at || md.created_at).getFullYear()}`
                  }
                  if (typeof md.lives_impacted === 'number') {
                    dynamicScore = md.lives_impacted
                  } else if (typeof md.life_impact_score === 'number') {
                    dynamicScore = md.life_impact_score
                  }
                }
              } catch (e) {
                // optional enrichment
              }
            }

            memberProfile = {
              user_id: p.user_id || p.id,
              full_name: p.full_name || p.fullName || p.name || 'Verified Member',
              email: p.email || (isEmail ? cleanContact : ''),
              mobile: p.mobile || p.phone || (!isEmail ? contact : ''),
              company_name: p.company_name || p.company || '',
              designation: p.designation || '',
              industry: p.industry || p.category || 'Business & Industry',
              city: p.city || '',
              district: p.district || p.city || '',
              state: p.state || '',
              country: p.country || 'India',
              photo_url: resolvedPhoto,
              profile_photo_url: resolvedPhoto,
              linkedin: p.linkedin_profile || p.social_links || p.linkedin || '',
              website: p.website || p.website_url || '',
              current_circle: p.circle_name || p.current_circle || '',
              current_role: 'Peers Global Member',
              member_since: dynamicSince,
              life_impact_score: dynamicScore,
            }
          }
        }
      } catch (checkErr) {
        console.warn('[verify-otp] check-member live warning:', checkErr)
      }

      // Priority B: Fallback to local PostgreSQL pool if not found via backend
      if (!isExistingMember && pool) {
        try {
          const dbQuery = `
            SELECT id, email, phone, first_name, last_name, display_name, company_name, designation, profile_photo_url, short_bio, city, state, country, created_at
            FROM public.users
            WHERE LOWER(email) = $1
               OR (phone IS NOT NULL AND RIGHT(REGEXP_REPLACE(phone, '\\D', '', 'g'), 10) = $2)
            ORDER BY (CASE WHEN LOWER(email) = $1 THEN 1 ELSE 2 END)
            LIMIT 1
          `
          const res = await pool.query(dbQuery, [isEmail ? cleanContact : '---', last10 || '---'])

          if (res.rows && res.rows.length > 0) {
            const u = res.rows[0]
            isExistingMember = true
            const fullName = [u.first_name, u.last_name].filter(Boolean).join(' ').trim() || u.display_name || 'Verified Member'
            const memberSinceYear = u.created_at ? new Date(u.created_at).getFullYear() : ''
            const photo = normalizePhotoUrl(u.profile_photo_url)

            memberProfile = {
              user_id: u.id,
              full_name: fullName,
              email: u.email || (isEmail ? cleanContact : ''),
              mobile: u.phone || (!isEmail ? contact : ''),
              company_name: u.company_name || '',
              designation: u.designation || '',
              industry: 'Business Leadership',
              city: u.city || '',
              district: u.district || u.city || '',
              state: u.state || '',
              country: u.country || 'India',
              photo_url: photo,
              profile_photo_url: photo,
              linkedin: '',
              website: '',
              current_circle: '',
              current_role: 'Peers Global Member',
              member_since: memberSinceYear ? `Since ${memberSinceYear}` : '',
              life_impact_score: 0,
            }
          }
        } catch (dbErr) {
          console.warn('[verify-otp] Database lookup notice:', dbErr)
        }
      }
    }

    if (isExistingMember && memberProfile) {
      return NextResponse.json({
        success: true,
        verified: true,
        is_existing_member: true,
        message: 'Identity verified successfully. Member profile loaded.',
        profile: memberProfile,
      })
    }

    // Non-member path
    return NextResponse.json({
      success: true,
      verified: true,
      is_existing_member: false,
      message: "You're not yet in Peers Global. Continue as a new nominee",
      profile: null,
    })
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err?.message || 'Verification failed.' },
      { status: 500 }
    )
  }
}

function trimName(str: string): string {
  return str.replace(/\s+/g, ' ').trim()
}
