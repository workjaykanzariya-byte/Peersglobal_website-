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

    // 1. Verify candidate and check scrutiny approval status
    const candidate = await findCandidateByEmail(rawEmail)
    const isApproved =
      candidate &&
      ['approved', 'shortlisted'].includes(String(candidate.status || '').toLowerCase())

    if (!candidate || !isApproved) {
      return NextResponse.json(
        {
          success: false,
          is_nominee: !!candidate,
          is_pending: true,
          status: candidate?.status || 'submitted',
          message:
            'Your application is submitted. After approval you will get the access to open the voting section.',
        },
        { status: 200 }
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
    })
  } catch (error: any) {
    console.error('candidate request-otp error:', error)
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to dispatch candidate OTP' },
      { status: 500 }
    )
  }
}
