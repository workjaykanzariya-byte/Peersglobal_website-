import { NextResponse } from 'next/server'
import { generateAndSaveJurorOtp } from '@/lib/juror-auth'

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}))
    const rawEmail = body.email ? String(body.email).trim().toLowerCase() : ''

    if (!rawEmail || !rawEmail.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid jury email address.' },
        { status: 400 }
      )
    }

    // Generate 6-digit OTP
    const otpCode = await generateAndSaveJurorOtp(rawEmail)

    console.log(`[Jury Portal OTP] Dispatched code ${otpCode} to jury member (${rawEmail})`)

    return NextResponse.json({
      success: true,
      message: `A secure 6-digit OTP has been sent to ${rawEmail}.`,
      email: rawEmail,
      dev_otp: otpCode,
    })
  } catch (error: any) {
    console.error('juror request-otp error:', error)
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to dispatch jury OTP' },
      { status: 500 }
    )
  }
}

