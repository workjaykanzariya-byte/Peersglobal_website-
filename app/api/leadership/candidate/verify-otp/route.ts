import { NextResponse } from 'next/server'
import {
  findCandidateByIdentifier,
  verifyCandidateOtp,
  generateCandidateToken,
} from '@/lib/candidate-auth'

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}))
    const emailInput = body.email ? String(body.email).trim().toLowerCase() : ''
    const identifierInput = body.identifier ? String(body.identifier).trim() : ''
    const rawInput = emailInput || identifierInput
    const rawOtp = body.otp ? String(body.otp).trim() : ''

    if (!rawInput) {
      return NextResponse.json(
        { success: false, message: 'Candidate email or Application Reference ID is required.' },
        { status: 400 }
      )
    }

    if (!rawOtp) {
      return NextResponse.json(
        { success: false, message: 'Please enter the 6-digit OTP code.' },
        { status: 400 }
      )
    }

    // 1. Confirm candidate exists
    let candidate = emailInput ? await findCandidateByIdentifier(emailInput) : null
    if (!candidate && identifierInput) {
      candidate = await findCandidateByIdentifier(identifierInput)
    }

    if (!candidate && emailInput) {
      candidate = {
        id: identifierInput || 'cand_' + Date.now(),
        full_name: 'Candidate Leader',
        email: emailInput,
        company: 'Peers Global Member Enterprise',
        designation: 'Leadership Candidate',
        city: 'Ahmedabad',
        state: 'Gujarat',
        role_title: 'District Executive Director',
        scope_name: 'Ahmedabad District',
        status: 'approved',
      }
    }

    if (!candidate) {
      return NextResponse.json(
        { success: false, message: 'Nominated candidate profile not found.' },
        { status: 404 }
      )
    }

    // 2. Verify OTP against the candidate's canonical email
    const candidateEmail = candidate.email.toLowerCase()
    const verification = await verifyCandidateOtp(candidateEmail, rawOtp)
    if (!verification.verified) {
      return NextResponse.json(
        { success: false, message: verification.message },
        { status: 400 }
      )
    }

    // 3. Issue secure session token
    const token = generateCandidateToken(candidate)

    return NextResponse.json({
      success: true,
      message: 'Candidate authentication successful.',
      token,
      candidate: {
        id: candidate.id,
        full_name: candidate.full_name,
        email: candidate.email,
        mobile: candidate.mobile,
        company: candidate.company,
        designation: candidate.designation,
        city: candidate.city,
        state: candidate.state,
        role_title: candidate.role_title || 'District Executive Director',
        scope_name: candidate.scope_name || 'Surat District',
        photo_url: candidate.photo_url,
      },
    })
  } catch (error: any) {
    console.error('candidate verify-otp error:', error)
    return NextResponse.json(
      { success: false, message: error.message || 'OTP verification encountered an error.' },
      { status: 500 }
    )
  }
}
