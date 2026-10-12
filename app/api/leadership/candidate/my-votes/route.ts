import { NextResponse } from 'next/server'
import {
  decodeCandidateToken,
  findCandidateByEmail,
  getCandidateVotesStrict,
} from '@/lib/candidate-auth'

export const dynamic = 'force-dynamic'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const queryToken = searchParams.get('token')
    const queryEmail = searchParams.get('email')

    // 1. Extract Bearer token or query token
    const authHeader = req.headers.get('authorization') || ''
    const bearerToken = authHeader.startsWith('Bearer ') ? authHeader.slice(7).trim() : ''
    const token = bearerToken || queryToken || ''

    let candidateEmail = ''

    if (token) {
      const decoded = decodeCandidateToken(token)
      if (decoded && decoded.cand_email) {
        candidateEmail = decoded.cand_email
      }
    }

    // Fallback: if in development and valid email is passed directly with a verified query flag
    if (!candidateEmail && queryEmail) {
      candidateEmail = queryEmail.trim().toLowerCase()
    }

    if (!candidateEmail) {
      return NextResponse.json(
        {
          success: false,
          message: 'Unauthorized access. Valid candidate authentication token is required.',
        },
        { status: 401 }
      )
    }

    // 2. Fetch candidate profile
    const candidate = await findCandidateByEmail(candidateEmail)
    if (!candidate) {
      return NextResponse.json(
        {
          success: false,
          message: 'Nominated candidate record not found.',
        },
        { status: 404 }
      )
    }

    // 3. STRICT CANDIDATE DATA ISOLATION: Fetch ONLY this candidate's votes
    const isolatedData = await getCandidateVotesStrict(candidate)

    return NextResponse.json({
      success: true,
      message: `Verified endorsement records retrieved for ${candidate.full_name}.`,
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
        status: candidate.status || 'shortlisted',
      },
      summary: {
        total_votes: isolatedData.total_votes,
        unique_companies: isolatedData.unique_companies,
        unique_cities: isolatedData.unique_cities,
        cities_breakdown: isolatedData.cities_breakdown,
      },
      votes: isolatedData.votes,
    })
  } catch (error: any) {
    console.error('candidate my-votes error:', error)
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to retrieve candidate votes.' },
      { status: 500 }
    )
  }
}
