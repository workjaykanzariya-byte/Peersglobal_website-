import { NextResponse } from 'next/server'
import { findCandidateByEmail, generateAndSaveCandidateOtp } from '@/lib/candidate-auth'

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}))
    const rawEmail = body.email ? String(body.email).trim().toLowerCase() : ''

    if (!rawEmail || !rawEmail.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid nomination email address.' },
        { status: 400 }
      )
    }

    // 1. Verify that this email belongs to a nominated person
    const candidate = await findCandidateByEmail(rawEmail)
    if (!candidate) {
      return NextResponse.json(
        {
          success: false,
          is_nominee: false,
          message:
            'This email is not registered as a nominated candidate. Please enter the email address used when filing your nomination form (e.g. vineet.mittal@navitas.com, hardik@peersglobal.com, swati.kulkarni@demo.unity.com).',
        },
        { status: 404 }
      )
    }

    // 2. Generate 6-digit OTP
    const otpCode = await generateAndSaveCandidateOtp(rawEmail)

    console.log(`[Candidate Portal OTP] Dispatched code ${otpCode} to candidate ${candidate.full_name} (${rawEmail})`)

    return NextResponse.json({
      success: true,
      is_nominee: true,
      message: `A secure 6-digit OTP has been sent to ${rawEmail}.`,
      candidate: {
        id: candidate.id,
        full_name: candidate.full_name,
        company: candidate.company,
        designation: candidate.designation,
        scope_name: candidate.scope_name || 'Surat District',
        role_title: candidate.role_title || 'District Executive Director',
        photo_url: candidate.photo_url,
      },
      // Provide dev_otp for seamless demo & local testing
      dev_otp: otpCode,
    })
  } catch (error: any) {
    console.error('candidate request-otp error:', error)
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to dispatch candidate OTP' },
      { status: 500 }
    )
  }
}
