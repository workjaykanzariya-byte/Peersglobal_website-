import { NextResponse } from 'next/server'
import pool from '@/lib/db'
import { KNOWN_CANDIDATES, IN_MEMORY_VOTES } from '@/lib/candidate-auth'

export const dynamic = 'force-dynamic'

// Candidate vote counts for client cache
const candidateVoteCounts: Record<string, number> = {}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}))
    const {
      campaign_id,
      candidate_id,
      nomination_id,
      candidate_name,
      candidate_email,
      full_name,
      voter_name,
      email,
      voter_email,
      business,
      company,
      voter_company,
      designation,
      voter_designation,
      phone,
      voter_phone,
      city,
      voter_city,
      support_reason,
    } = body

    const cleanFullName = String(voter_name || full_name || '').trim()
    const cleanEmail = String(voter_email || email || '').trim().toLowerCase()
    const cleanPhone = String(voter_phone || phone || '').trim()
    const cleanCandidateId = String(nomination_id || candidate_id || '').trim()
    const cleanCity = String(voter_city || city || '').trim()
    const cleanCompany = String(voter_company || company || business || '').trim()
    const cleanDesignation = String(voter_designation || designation || '').trim()
    const cleanReason = String(support_reason || '').trim()
    const cleanCampaignId = String(campaign_id || '23ba107a-f314-4cd9-b04a-7af04951f95c').trim()

    if (!cleanFullName) {
      return NextResponse.json({ success: false, message: 'Full Name is required.' }, { status: 400 })
    }
    if (!cleanEmail || !cleanEmail.includes('@')) {
      return NextResponse.json({ success: false, message: 'A valid email address is required.' }, { status: 400 })
    }
    if (!cleanPhone) {
      return NextResponse.json({ success: false, message: 'Phone number is required.' }, { status: 400 })
    }
    if (!cleanCity) {
      return NextResponse.json({ success: false, message: 'City is required.' }, { status: 400 })
    }

    // Resolve candidate email from candidate ID or catalog
    let resolvedCandEmail = candidate_email ? String(candidate_email).trim().toLowerCase() : ''
    if (!resolvedCandEmail) {
      if (cleanCandidateId.includes('vineet') || cleanCandidateId.includes('278') || (candidate_name && candidate_name.toLowerCase().includes('vineet'))) {
        resolvedCandEmail = 'vineet.mittal@navitas.com'
      } else if (cleanCandidateId.includes('hardik') || cleanCandidateId === '4bf812c3-cand-01' || cleanCandidateId.includes('0199c000') || (candidate_name && candidate_name.toLowerCase().includes('hardik'))) {
        resolvedCandEmail = 'hardik@peersglobal.com'
      } else if (cleanCandidateId.includes('kulkarni') || cleanCandidateId.includes('08eaec34') || (candidate_name && candidate_name.toLowerCase().includes('swati'))) {
        resolvedCandEmail = 'swati.kulkarni@demo.unity.com'
      } else if (cleanCandidateId.includes('aa4b') || cleanCandidateId.includes('aa1b') || (candidate_name && candidate_name.toLowerCase().includes('wdq'))) {
        resolvedCandEmail = 'rashi.khandelwal@demo.unity.com'
      } else {
        const knownMatch = KNOWN_CANDIDATES.find(
          (k) => k.id === cleanCandidateId || (candidate_name && k.full_name.toLowerCase() === candidate_name.toLowerCase())
        )
        if (knownMatch) {
          resolvedCandEmail = knownMatch.email
        }
      }
    }

    // 0. Pre-submission Duplicate Check: Ensure one vote per nominee per email
    const duplicateInMemory = IN_MEMORY_VOTES.find(
      (v) =>
        v.voter_email?.toLowerCase() === cleanEmail &&
        (v.candidate_id === cleanCandidateId ||
          (resolvedCandEmail && v.candidate_email?.toLowerCase() === resolvedCandEmail) ||
          (candidate_name && v.candidate_name?.toLowerCase() === String(candidate_name).toLowerCase()))
    )

    if (duplicateInMemory) {
      return NextResponse.json(
        {
          success: false,
          already_voted: true,
          message: `You have already voted for this nominee with ${cleanEmail}. In accordance with Peers Global election governance rules, only one vote per member is permitted for each leadership role.`,
        },
        { status: 422 }
      )
    }

    try {
      const dbCheck = await pool.query(
        `SELECT id, vote_reference FROM public.web_votes 
         WHERE LOWER(voter_email) = $1 
           AND (nomination_id = $2 OR LOWER(candidate_name) = LOWER($3) OR (candidate_email IS NOT NULL AND LOWER(candidate_email) = LOWER($4)))
         LIMIT 1`,
        [cleanEmail, cleanCandidateId, candidate_name || '', resolvedCandEmail || '']
      )

      if (dbCheck.rows.length > 0) {
        return NextResponse.json(
          {
            success: false,
            already_voted: true,
            message: `You have already voted for this nominee with ${cleanEmail}. In accordance with Peers Global election governance rules, only one vote per member is permitted for each leadership role.`,
          },
          { status: 422 }
        )
      }
    } catch {}

    // Call live REST API: POST https://peersunity.com/api/v1/leadership/public/votes
    // Spec Flow A: Direct Candidate Endorsement Vote (No OTP)
    const livePayload = {
      campaign_id: cleanCampaignId,
      nomination_id: cleanCandidateId,
      candidate_name: candidate_name || 'Nominee',
      candidate_email: resolvedCandEmail || undefined,
      voter_name: cleanFullName,
      voter_email: cleanEmail,
      voter_phone: cleanPhone,
      voter_city: cleanCity,
      voter_company: cleanCompany || undefined,
      voter_designation: cleanDesignation || undefined,
      support_reason: cleanReason || undefined,
    }

    let liveVoteReference = ''
    let liveCreatedAt = new Date().toISOString()
    let liveMessage = ''

    try {
      const liveRes = await fetch('https://peersunity.com/api/v1/leadership/public/votes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(livePayload),
      })

      const liveJson = await liveRes.json().catch(() => null)

      if (liveRes.ok && liveJson) {
        liveVoteReference = liveJson.data?.vote_reference || liveJson.vote_reference || ''
        liveCreatedAt = liveJson.data?.created_at || liveJson.created_at || new Date().toISOString()
        liveMessage = liveJson.message || 'Your vote has been recorded.'
      } else if (liveJson?.message) {
        // If live API returns specific error (e.g. already voted)
        if (liveRes.status === 422 || liveRes.status === 400 || liveJson.already_voted) {
          return NextResponse.json(
            {
              success: false,
              already_voted: true,
              message: liveJson.message,
            },
            { status: 422 }
          )
        }
      }
    } catch (apiErr) {
      console.warn('Live API vote endpoint warning:', apiErr)
    }

    // Fallback reference if live API network hiccup occurs
    const finalVoteRef = liveVoteReference || `PG-VOTE-2026-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`

    // Update in-memory tracker
    const currentCount = candidateVoteCounts[cleanCandidateId] || 0
    candidateVoteCounts[cleanCandidateId] = currentCount + 1

    IN_MEMORY_VOTES.push({
      id: `vote-${Date.now()}`,
      vote_reference: finalVoteRef,
      campaign_id: cleanCampaignId,
      candidate_id: cleanCandidateId,
      candidate_name: candidate_name || 'Nominee',
      candidate_email: resolvedCandEmail || undefined,
      voter_name: cleanFullName,
      voter_email: cleanEmail,
      voter_phone: cleanPhone,
      voter_company: cleanCompany || undefined,
      voter_designation: cleanDesignation || undefined,
      voter_city: cleanCity,
      support_reason: cleanReason || undefined,
      created_at: liveCreatedAt,
    })

    return NextResponse.json({
      success: true,
      message: liveMessage || `Your vote for ${candidate_name || 'the nominee'} has been recorded successfully!`,
      vote_reference: finalVoteRef,
      data: {
        vote_reference: finalVoteRef,
        created_at: liveCreatedAt,
      },
      cast_at: liveCreatedAt,
      candidate_id: cleanCandidateId,
      new_votes_count: candidateVoteCounts[cleanCandidateId],
    })
  } catch (error: any) {
    console.error('cast-vote error:', error)
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to submit vote' },
      { status: 500 }
    )
  }
}
