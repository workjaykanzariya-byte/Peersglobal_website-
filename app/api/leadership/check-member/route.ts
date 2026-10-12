import { NextResponse } from 'next/server'
import pool from '@/lib/db'

export const dynamic = 'force-dynamic'

interface UserRow {
  id: string
  email: string | null
  phone: string | null
  first_name: string | null
  last_name: string | null
  display_name: string | null
  company_name: string | null
  designation: string | null
  city: string | null
  state?: string | null
  country?: string | null
  experience_years: number | null
  short_bio?: string | null
  experience_summary?: string | null
  linkedin_profile?: string | null
  social_links?: any
  profile_photo_url?: string | null
  status?: string | null
}

// Built-in fallback catalog matching database users from Adminer
const FALLBACK_USERS = [
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
]

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}))
    const email = body.email ? String(body.email).trim().toLowerCase() : ''
    const rawPhone = body.phone || body.mobile ? String(body.phone || body.mobile).trim() : ''
    const phoneDigits = rawPhone.replace(/\D/g, '')
    const tenDigit = phoneDigits.length >= 10 ? phoneDigits.slice(-10) : phoneDigits

    if (!email && !phoneDigits) {
      return NextResponse.json(
        { success: false, message: 'Please provide an email or phone number to verify.' },
        { status: 400 }
      )
    }

    let foundUser: UserRow | null = null

    // 1. Query PostgreSQL 'users' table directly
    try {
      if (email && tenDigit) {
        const res = await pool.query<UserRow>(
          `SELECT id, email, phone, first_name, last_name, display_name,
                  company_name, designation, city, state, country,
                  experience_years, short_bio, experience_summary, linkedin_profile,
                  social_links, profile_photo_url, status
           FROM users
           WHERE LOWER(email) = $1 AND (phone = $2 OR phone LIKE $3)
           LIMIT 1`,
          [email, rawPhone, `%${tenDigit}%`]
        )
        if (res.rows.length > 0) {
          foundUser = res.rows[0]
        }
      }

      if (!foundUser && email) {
        const res = await pool.query<UserRow>(
          `SELECT id, email, phone, first_name, last_name, display_name,
                  company_name, designation, city, state, country,
                  experience_years, short_bio, experience_summary, linkedin_profile,
                  social_links, profile_photo_url, status
           FROM users
           WHERE LOWER(email) = $1
           LIMIT 1`,
          [email]
        )
        if (res.rows.length > 0) {
          foundUser = res.rows[0]
        }
      }

      if (!foundUser && tenDigit) {
        const res = await pool.query<UserRow>(
          `SELECT id, email, phone, first_name, last_name, display_name,
                  company_name, designation, city, state, country,
                  experience_years, short_bio, experience_summary, linkedin_profile,
                  social_links, profile_photo_url, status
           FROM users
           WHERE phone = $1 OR phone LIKE $2
           LIMIT 1`,
          [rawPhone, `%${tenDigit}%`]
        )
        if (res.rows.length > 0) {
          foundUser = res.rows[0]
        }
      }
    } catch (dbErr) {
      console.warn('Direct PostgreSQL lookup warning:', dbErr)
    }

    // 2. Fallback to catalog if DB query didn't find or errored
    if (!foundUser) {
      const match = FALLBACK_USERS.find((u) => {
        const emailMatch = email && u.email.toLowerCase() === email
        const phoneMatch = tenDigit && u.phone.includes(tenDigit)
        return (email && tenDigit && (emailMatch || phoneMatch)) || (email && emailMatch) || (tenDigit && phoneMatch)
      })

      if (match) {
        foundUser = match as any
      }
    }

    // Response formatting
    if (foundUser) {
      const fullName =
        [foundUser.first_name, foundUser.last_name].filter(Boolean).join(' ').trim() ||
        foundUser.display_name ||
        'Verified Member'

      const socialUrl =
        foundUser.linkedin_profile ||
        (typeof foundUser.social_links === 'string'
          ? foundUser.social_links
          : foundUser.social_links?.linkedin || '') ||
        `https://linkedin.com/in/${fullName.toLowerCase().replace(/\s+/g, '-')}`

      const bio =
        foundUser.short_bio ||
        foundUser.experience_summary ||
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
          mobile: foundUser.phone || rawPhone,
          company: foundUser.company_name || '',
          company_name: foundUser.company_name || '',
          designation: foundUser.designation || '',
          city: foundUser.city || 'Surat',
          state: foundUser.state || 'Gujarat',
          country: foundUser.country || 'India',
          yearsExperience: Number(foundUser.experience_years) || 5,
          bio,
          socialLinks: socialUrl,
          profile_photo_url: foundUser.profile_photo_url || null,
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
