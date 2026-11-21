import { NextResponse } from 'next/server'
import { verifyJurorOtp, generateJurorToken } from '@/lib/juror-auth'

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}))
    const rawEmail = body.email ? String(body.email).trim().toLowerCase() : ''
    const rawOtp = body.otp ? String(body.otp).trim() : ''

    if (!rawEmail || !rawEmail.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'Juror email address is required.' },
        { status: 400 }
      )
    }

    if (!rawOtp || rawOtp.length !== 6) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid 6-digit verification code.' },
        { status: 400 }
      )
    }

    // Attempt direct call to production backend
    try {
      const backendRes = await fetch('https://peersunity.com/admin/web/jury/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ email: rawEmail, otp: rawOtp }),
      })
      if (backendRes.ok) {
        const data = await backendRes.json().catch(() => null)
        if (data && (data.success || data.status || data.token)) {
          return NextResponse.json(data)
        }
      }
    } catch {
      // Backend unreachable or offline, continue to local fallback
    }

    // Local fallback verification
    const verification = await verifyJurorOtp(rawEmail, rawOtp)
    if (!verification.verified) {
      return NextResponse.json(
        { success: false, message: verification.message },
        { status: 400 }
      )
    }

    const token = generateJurorToken(rawEmail)

    return NextResponse.json({
      success: true,
      message: 'Juror verification successful.',
      token,
      email: rawEmail,
      juror: {
        name: rawEmail.split('@')[0].replace(/[._]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
        email: rawEmail,
      },
    })
  } catch (error: any) {
    console.error('jury verify-otp error:', error)
    return NextResponse.json(
      { success: false, message: error.message || 'OTP verification encountered an error.' },
      { status: 500 }
    )
  }
}
