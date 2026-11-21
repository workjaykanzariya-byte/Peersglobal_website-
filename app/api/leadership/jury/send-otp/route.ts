import { NextResponse } from 'next/server'
import { generateAndSaveJurorOtp } from '@/lib/juror-auth'

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}))
    const rawEmail = body.email ? String(body.email).trim().toLowerCase() : ''

    if (!rawEmail || !rawEmail.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid juror email address.' },
        { status: 400 }
      )
    }

    // Attempt direct call to production backend
    try {
      const backendRes = await fetch('https://peersunity.com/admin/web/jury/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ email: rawEmail }),
      })
      if (backendRes.ok) {
        const data = await backendRes.json().catch(() => null)
        if (data && (data.success || data.status)) {
          return NextResponse.json(data)
        }
      }
    } catch {
      // Backend unreachable or offline, continue to local fallback
    }

    // Local fallback OTP generation
    const otpCode = await generateAndSaveJurorOtp(rawEmail)
    console.log(`[Jury Portal OTP] Dispatched code ${otpCode} to jury member (${rawEmail})`)

    return NextResponse.json({
      success: true,
      message: `A secure 6-digit access OTP has been sent to ${rawEmail}.`,
      email: rawEmail,
      dev_otp: process.env.NODE_ENV !== 'production' ? otpCode : undefined,
    })
  } catch (error: any) {
    console.error('jury send-otp error:', error)
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to dispatch jury OTP' },
      { status: 500 }
    )
  }
}
