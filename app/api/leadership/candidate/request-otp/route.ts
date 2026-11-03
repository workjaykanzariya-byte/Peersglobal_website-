import { NextResponse } from 'next/server'
import { findCandidateByIdentifier, generateAndSaveCandidateOtp } from '@/lib/candidate-auth'

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}))
    const rawInput = body.identifier || body.email ? String(body.identifier || body.email).trim() : ''

    if (!rawInput) {
      return NextResponse.json(
        { success: false, message: 'Please enter your registered email address or Application Reference ID.' },
        { status: 400 }
      )
    }

    // 1. Verify candidate by application reference (e.g. PG-2026-00008) or email
    const candidate = await findCandidateByIdentifier(rawInput)
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

    // 2. Generate 6-digit OTP using the candidate's canonical email
    const candidateEmail = candidate.email.toLowerCase()
    const otpCode = await generateAndSaveCandidateOtp(candidateEmail)

    console.log(`[Candidate Portal OTP] Dispatched code ${otpCode} to candidate ${candidate.full_name} (${candidateEmail})`)

    return NextResponse.json({
      success: true,
      is_nominee: true,
      resolved_email: candidateEmail,
      message: `A secure 6-digit OTP has been sent to ${candidateEmail}.`,
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
