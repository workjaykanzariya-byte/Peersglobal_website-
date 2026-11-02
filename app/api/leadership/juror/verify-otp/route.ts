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
        { success: false, message: 'Jury email address is required.' },
        { status: 400 }
      )
    }

    if (!rawOtp) {
      return NextResponse.json(
        { success: false, message: 'Please enter the 6-digit OTP code.' },
        { status: 400 }
      )
    }

    // Verify OTP
    const verification = await verifyJurorOtp(rawEmail, rawOtp)
    if (!verification.verified) {
      return NextResponse.json(
        { success: false, message: verification.message },
        { status: 400 }
      )
    }

    // Generate session token
    const token = generateJurorToken(rawEmail)

    return NextResponse.json({
      success: true,
      message: 'Jury authentication successful.',
      token,
      email: rawEmail,
    })
  } catch (error: any) {
    console.error('juror verify-otp error:', error)
    return NextResponse.json(
      { success: false, message: error.message || 'OTP verification encountered an error.' },
      { status: 500 }
    )
  }
}

