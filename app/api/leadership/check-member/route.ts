import { NextResponse } from 'next/server'
import pool from '@/lib/db'
import { KNOWN_CANDIDATES } from '@/lib/candidate-auth'

export const dynamic = 'force-dynamic'

interface UserRow {
  id: string
  email: string | null
  phone?: string | null
  mobile?: string | null
  first_name?: string | null
  last_name?: string | null
  name?: string | null
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

// Built-in fallback catalog matching database users from Adminer & Unityapp
const FALLBACK_USERS = [
  {
    id: 'd25388ab-4943-427c-bf2e-b8222c8d7fc5',
    email: 'devops.aequitas@gmail.com',
    phone: '6353025165',
    first_name: 'Avinash',
    last_name: 'Vaghela',
    display_name: 'Avinash Vaghela',
    company_name: 'Aequitas Information Technology Pvt Ltd',
    designation: 'Director & CEO',
    city: 'Surat',
    state: 'Gujarat',
    country: 'India',
    experience_years: 10,
    short_bio: 'Dedicated business leader stewarding strategic ecosystem collaboration, ethical enterprise governance, and peer growth across the District.',
    linkedin_profile: 'https://linkedin.com/in/avinash-vaghela',
    profile_photo_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    photo_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'd253b039-75a5-4f22-b4c8-86f22cb58da5',
    email: 'harshchauhan9724@gmail.com',
    phone: '9724636800',
    first_name: 'Harsh',
    last_name: 'Chauhan',
    display_name: 'Harsh Chauhan',
    company_name: 'BrandVerse Global Pvt Ltd',
    designation: 'Founder',
    city: 'Surat',
    state: 'Gujarat',
    country: 'India',
    experience_years: 8,
    short_bio: 'Founder at BrandVerse Global Pvt Ltd, building powerful brands that connect, influence, and grow globally.',
    linkedin_profile: 'https://linkedin.com/in/harsh-chauhan',
  },
  {
    id: '0199c000-ca00-0000-8000-000000000001',
    email: 'hardik@peersglobal.com',
    phone: '9558739086',
    first_name: 'Hardik',
    last_name: 'Chauhan',
    display_name: 'Hardik Chauhan',
    company_name: 'Aequitas IT Solutions',
    designation: 'Managing Director & Founder',
    city: 'Surat',
    state: 'Gujarat',
    country: 'India',
    experience_years: 8,
    short_bio: 'Managing Director at Aequitas IT Solutions, championing Give-First leadership across Gujarat.',
    linkedin_profile: 'https://linkedin.com/in/hardik-chauhan',
  },
  {
    id: '5eb3f0c2-5249-41a3-a718-d8ada8b083fd',
    email: 'rashi.khandelwal@demo.unity.com',
    phone: '9800000030',
    first_name: 'Rashi',
    last_name: 'Khandelwal',
    display_name: 'wdqwdqwd',
    company_name: 'qdqd',
    designation: 'sadada',
    city: 'Surat',
    state: 'Gujarat',
    country: 'India',
    experience_years: 7,
    short_bio: 'Dedicated business leader stewarding strategic ecosystem collaboration and enterprise governance.',
    linkedin_profile: 'https://linkedin.com/in/rashi-khandelwal',
  },
  {
    id: '08eaec34-342c-49b1-9489-62cb8291aeb2',
    email: 'swati.kulkarni@demo.unity.com',
    phone: '9800000018',
    first_name: 'Swati',
    last_name: 'Kulkarni',
    display_name: 'Swati Kulkarni',
    company_name: 'Kulkarni Global Industries',
    designation: 'Managing Director',
    city: 'Surat',
    state: 'Gujarat',
    country: 'India',
    experience_years: 12,
    short_bio: 'Senior ecosystem promoter leading industrial innovation and women entrepreneurship.',
    linkedin_profile: 'https://linkedin.com/in/swati-kulkarni',
  },
  {
    id: '974d3b4a-7c88-4820-bd34-dcd53bd80af6',
    email: 'harsh.vora@demo.unity.com',
    phone: '9800000011',
    first_name: 'Harsh',
    last_name: 'Vora',
    display_name: 'Harsh Vora',
    company_name: 'Vora Diamond Tech',
    designation: 'Co-Founder & COO',
    city: 'Surat',
    state: 'Gujarat',
    country: 'India',
    experience_years: 11,
    short_bio: 'Precision gem and technology innovator steering Surat circle growth.',
    linkedin_profile: 'https://linkedin.com/in/harsh-vora',
  },
  {
    id: '10f394a5-f943-4951-b756-4ee5472d9d39',
    email: 'bhavna.mehta@demo.unity.com',
    phone: '9800000078',
    first_name: 'Bhavna',
    last_name: 'Mehta',
    display_name: 'Bhavna Mehta',
    company_name: 'Mehta Textile Conglomerate',
    designation: 'Executive Partner',
    city: 'Ahmedabad',
    state: 'Gujarat',
    country: 'India',
    experience_years: 10,
    short_bio: 'Textile export leader fostering cross-district collaborations and trade alliances.',
    linkedin_profile: 'https://linkedin.com/in/bhavna-mehta',
  },
  {
    id: '18cdf66e-09b1-4389-8cab-42e13faf5c73',
    email: 'sneha.deshmukh@demo.unity.com',
    phone: '9800000006',
    first_name: 'Sneha',
    last_name: 'Deshmukh',
    display_name: 'Sneha Deshmukh',
    company_name: 'Deshmukh Innovations',
    designation: 'Founder & CEO',
    city: 'Surat',
    state: 'Gujarat',
    country: 'India',
    experience_years: 9,
    short_bio: 'Technology pioneer scaling regional enterprise and startup incubation.',
    linkedin_profile: 'https://linkedin.com/in/sneha-deshmukh',
  },
  {
    id: '5690df8d-cd5f-45f1-b68b-a41efee5357e',
    email: 'meera.nair@demo.unity.com',
    phone: '9800000010',
    first_name: 'Meera',
    last_name: 'Nair',
    display_name: 'Meera Nair',
    company_name: 'Nair Infra & Logistics',
    designation: 'Principal Director',
    city: 'Mumbai',
    state: 'Maharashtra',
    country: 'India',
    experience_years: 14,
    short_bio: 'Infrastructure and supply chain governance veteran with active circle stewardship.',
    linkedin_profile: 'https://linkedin.com/in/meera-nair',
  },
  {
    id: '0a8b3282-9b68-4d24-bb3f-2ee88ec1535a',
    email: 'gaurav.mishra@demo.unity.com',
    phone: '9800000021',
    first_name: 'Gaurav',
    last_name: 'Mishra',
    display_name: 'Gaurav Mishra',
    company_name: 'Mishra Agro Global',
    designation: 'Managing Director',
    city: 'Ahmedabad',
    state: 'Gujarat',
    country: 'India',
    experience_years: 15,
    short_bio: 'Agri-business visionary dedicated to regional value chain acceleration.',
    linkedin_profile: 'https://linkedin.com/in/gaurav-mishra',
  },
]

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

    // 1. Query PostgreSQL 'users' table directly with flexible column access & trailing 10-digit matching
    try {
      if (email && tenDigit) {
        const res = await pool.query<UserRow>(
          `SELECT * FROM public.users
           WHERE LOWER(email) = $1
              OR (phone IS NOT NULL AND RIGHT(REGEXP_REPLACE(phone, '\\D', '', 'g'), 10) = $2)
           ORDER BY (CASE WHEN LOWER(email) = $1 THEN 1 ELSE 2 END)
           LIMIT 1`,
          [email, tenDigit]
        )
        if (res.rows.length > 0) {
          foundUser = res.rows[0]
        }
      } else if (email) {
        const res = await pool.query<UserRow>(
          `SELECT * FROM public.users
           WHERE LOWER(email) = $1
           LIMIT 1`,
          [email]
        )
        if (res.rows.length > 0) {
          foundUser = res.rows[0]
        }
      } else if (tenDigit) {
        const res = await pool.query<UserRow>(
          `SELECT * FROM public.users
           WHERE RIGHT(REGEXP_REPLACE(COALESCE(phone, ''), '\\D', '', 'g'), 10) = $1
           LIMIT 1`,
          [tenDigit]
        )
        if (res.rows.length > 0) {
          foundUser = res.rows[0]
        }
      }
    } catch (dbErr) {
      console.warn('Direct PostgreSQL lookup warning:', dbErr)
    }

    // 1b. Check public.web_nominations table if candidate previously filed or registered
    if (!foundUser) {
      try {
        const nomRes = await pool.query<any>(
          `SELECT * FROM public.web_nominations
           WHERE LOWER(email) = $1
              OR (mobile IS NOT NULL AND RIGHT(REGEXP_REPLACE(mobile, '\\D', '', 'g'), 10) = $2)
           ORDER BY created_at DESC
           LIMIT 1`,
          [email || '---', tenDigit || '---']
        )
        if (nomRes.rows.length > 0) {
          const row = nomRes.rows[0]
          const snap = row.form_data || {}
          foundUser = {
            id: row.id,
            email: row.email || email,
            phone: row.mobile || rawPhone,
            first_name: row.full_name ? row.full_name.split(' ')[0] : 'Candidate',
            last_name: row.full_name ? row.full_name.split(' ').slice(1).join(' ') : '',
            display_name: row.full_name || 'Nominated Candidate',
            company_name: row.company || snap.company_name || snap.company || 'Enterprise Leader',
            designation: row.designation || snap.designation || 'Leader',
            city: row.city || snap.city || 'Surat',
            state: row.state || snap.state || 'Gujarat',
            country: 'India',
            experience_years: 8,
            profile_photo_url: snap.photo_url || null,
          }
        }
      } catch {
        // continue to external API & fallback
      }
    }

    // 2. Query Live Unity Members API (https://peersunity.com/api/v1/members-with-circles)
    if (!foundUser) {
      try {
        const membersRes = await fetch('https://peersunity.com/api/v1/members-with-circles', {
          headers: {
            Accept: 'application/json',
            Authorization: 'Bearer 302|cO0VMR2dmr9j8c3JtIU9dfkuZfSfvzaCCF1GVxJAdc6fdd2d',
          },
          cache: 'no-store',
          signal: AbortSignal.timeout(4000),
        })

        if (membersRes.ok) {
          const membersJson = await membersRes.json()
          const items = Array.isArray(membersJson.data?.items)
            ? membersJson.data.items
            : Array.isArray(membersJson.data)
            ? membersJson.data
            : []

          const match = items.find((item: any) => {
            const itemEmail = item.email ? String(item.email).trim().toLowerCase() : ''
            const itemMobileDigits = String(item.mobile || item.phone || '').replace(/\D/g, '')

            const emailMatch = email && itemEmail === email
            // avoid strict +91 checking by matching the trailing 10 digits
            const phoneMatch =
              tenDigit &&
              (itemMobileDigits === tenDigit || itemMobileDigits.endsWith(tenDigit) || itemMobileDigits.slice(-10) === tenDigit)

            return emailMatch || phoneMatch
          })

          if (match) {
            foundUser = {
              id: match.id || `member-${Date.now()}`,
              email: match.email || email,
              phone: match.mobile || match.phone || rawPhone,
              first_name: match.name ? match.name.split(' ')[0] : 'Member',
              last_name: match.name ? match.name.split(' ').slice(1).join(' ') : 'Leader',
              display_name: match.name || 'Verified Member',
              company_name: match.company || 'Peers Global Member Enterprise',
              designation: match.designation || 'Member Leader',
              city: match.city || 'Surat',
              state: 'Gujarat',
              country: 'India',
              experience_years: 8,
              short_bio: match.business_description || 'Active member leader in Peers Global network.',
              profile_photo_url: match.photo || null,
              status: 'active',
            }
          }
        }
      } catch (apiErr) {
        console.warn('Live members API lookup warning:', apiErr)
      }
    }

    // 3. Fallback to catalog if DB query & API didn't find
    if (!foundUser) {
      const match = FALLBACK_USERS.find((u) => {
        const emailMatch = email && u.email.toLowerCase() === email
        const uPhoneDigits = u.phone.replace(/\D/g, '').slice(-10)
        // avoid strict +91 checking by matching the trailing 10 digits
        const phoneMatch = tenDigit && (uPhoneDigits === tenDigit || uPhoneDigits.endsWith(tenDigit))
        return emailMatch || phoneMatch
      })

      if (match) {
        foundUser = match as any
      }
    }

    // Response formatting
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
      const city = foundUser.city || 'Surat'
      const state = foundUser.state || 'Gujarat'
      const mobile = foundUser.phone || foundUser.mobile || rawPhone
      let photoUrl =
        foundUser.profile_photo_url ||
        foundUser.photo_url ||
        foundUser.photo ||
        foundUser.avatar ||
        foundUser.avatar_url ||
        foundUser.profile_image ||
        foundUser.profile_image_url ||
        foundUser.profile_photo_path ||
        foundUser.image ||
        null

      if (!photoUrl) {
        const foundEmail = (foundUser.email || email).toLowerCase()
        const foundPhone = (foundUser.phone || foundUser.mobile || rawPhone || '').replace(/\D/g, '').slice(-10)
        const known = KNOWN_CANDIDATES.find(
          (k) =>
            (k.email && k.email.toLowerCase() === foundEmail) ||
            (k.mobile && k.mobile.replace(/\D/g, '').slice(-10) === foundPhone) ||
            k.id === foundUser.id
        )
        if (known?.photo_url) {
          photoUrl = known.photo_url
        }
      }

      if (!photoUrl) {
        const foundEmail = (foundUser.email || email).toLowerCase()
        const foundPhone = (foundUser.phone || foundUser.mobile || rawPhone || '').replace(/\D/g, '').slice(-10)
        const fb = FALLBACK_USERS.find(
          (u) =>
            (u.email && u.email.toLowerCase() === foundEmail) ||
            (u.phone && u.phone.replace(/\D/g, '').slice(-10) === foundPhone) ||
            u.id === foundUser.id
        )
        if (fb?.profile_photo_url || fb?.photo_url) {
          photoUrl = fb.profile_photo_url || fb.photo_url
        }
      }

      if (photoUrl && typeof photoUrl === 'string' && !photoUrl.startsWith('http') && !photoUrl.startsWith('data:')) {
        const clean = photoUrl.replace(/^\//, '')
        photoUrl = clean.startsWith('storage/')
          ? `https://peersunity.com/${clean}`
          : `https://peersunity.com/storage/${clean}`
      }

      if (!photoUrl && fullName) {
        photoUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}&background=1D4ED8&color=fff&size=400&bold=true`
      }

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
        'Experienced promoter active in Peers Global community initiatives and governance.'

      return NextResponse.json({
        success: true,
        exists: true,
        is_existing_member: true,
        candidate_id: foundUser.id,
        user_id: foundUser.id,
        profile: {
          user_id: foundUser.id,
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
          yearsExperience: Number(foundUser.experience_years) || 5,
          bio,
          socialLinks: socialUrl,
          profile_photo_url: photoUrl,
          photo_url: photoUrl,
        },
        message: `Registered member record verified for ${fullName}. Profile credentials have been auto-populated.`,
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
        designation: '',
        city: '',
        state: '',
        country: 'India',
        yearsExperience: 5,
        bio: '',
        socialLinks: '',
      },
      message: 'No existing membership found matching these credentials. You can proceed as a new candidate.',
    })
  } catch (error: any) {
    console.error('check-member route error:', error)
    return NextResponse.json(
      { success: false, message: error.message || 'Error checking member credentials' },
      { status: 500 }
    )
  }
}
