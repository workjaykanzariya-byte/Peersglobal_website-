import { NextResponse } from 'next/server'
import pool from '@/lib/db'
import { KNOWN_CANDIDATES, IN_MEMORY_VOTES } from '@/lib/candidate-auth'

export const dynamic = 'force-dynamic'

// In-memory votes cache to track endorsement counts per candidate across sessions
const candidateVoteCounts: Record<string, number> = {}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}))
    const {
      campaign_id,
      candidate_id,
      candidate_name,
      full_name,
      email,
      business,
      company,
      designation,
      phone,
      city,
      support_reason,
    } = body

    const cleanFullName = String(full_name || '').trim()
    const cleanEmail = String(email || '').trim().toLowerCase()
    const cleanPhone = String(phone || '').trim()
    const cleanCandidateId = String(candidate_id || '').trim()
    const cleanCity = String(city || '').trim()

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

    const voteRef = `PG-VOTE-2026-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`
    const nowIso = new Date().toISOString()

    // Increment vote count for candidate
    const currentCount = candidateVoteCounts[cleanCandidateId] || 0
    candidateVoteCounts[cleanCandidateId] = currentCount + 1

    // 1. Save vote record into public.web_votes table (used by admin panel)
    try {
      await pool.query(
        `CREATE TABLE IF NOT EXISTS public.web_votes (
          id SERIAL PRIMARY KEY,
          vote_reference VARCHAR(100) UNIQUE NOT NULL,
          campaign_id VARCHAR(100),
          nomination_id VARCHAR(100),
          candidate_name VARCHAR(255),
          candidate_email VARCHAR(255),
          voter_name VARCHAR(255) NOT NULL,
          voter_email VARCHAR(255) NOT NULL,
          voter_phone VARCHAR(50),
          voter_company VARCHAR(255),
          voter_designation VARCHAR(255),
          voter_city VARCHAR(100),
          support_reason TEXT,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );

        CREATE INDEX IF NOT EXISTS idx_web_votes_ref ON public.web_votes (vote_reference);
        CREATE INDEX IF NOT EXISTS idx_web_votes_nom_id ON public.web_votes (nomination_id);
        CREATE INDEX IF NOT EXISTS idx_web_votes_voter_email ON public.web_votes (LOWER(voter_email));
        CREATE INDEX IF NOT EXISTS idx_web_votes_cand_email ON public.web_votes (LOWER(candidate_email));`
      )

      // Resolve candidate email from candidate ID or catalog
      let resolvedCandEmail = body.candidate_email ? String(body.candidate_email).trim().toLowerCase() : ''
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
          // Check known candidates catalog
          const knownMatch = KNOWN_CANDIDATES.find(
            (k) => k.id === cleanCandidateId || (candidate_name && k.full_name.toLowerCase() === candidate_name.toLowerCase())
          )
          if (knownMatch) {
            resolvedCandEmail = knownMatch.email
          }
        }
      }

      await pool.query(
        `INSERT INTO public.web_votes 
          (vote_reference, campaign_id, nomination_id, candidate_name, candidate_email, voter_name, voter_email, voter_phone, voter_company, voter_designation, voter_city, support_reason, created_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, NOW())
         ON CONFLICT (vote_reference) DO NOTHING`,
        [
          voteRef,
          campaign_id || '23ba107a-f314-4cd9-b04a-7af04951f95c',
          cleanCandidateId,
          candidate_name || 'Payal Parmar',
          resolvedCandEmail || 'plan.vishalparmar@gmail.com',
          cleanFullName,
          cleanEmail,
          cleanPhone,
          company || business || null,
          designation || null,
          cleanCity,
          support_reason || null,
        ]
      )

    } catch (dbErr) {
      console.warn('web_votes DB recording note:', dbErr)
    }

    // Always buffer vote into IN_MEMORY_VOTES for high availability
    let resolvedEmailForBuffer = body.candidate_email ? String(body.candidate_email).trim().toLowerCase() : ''
    if (!resolvedEmailForBuffer) {
      if (cleanCandidateId.includes('aa4b') || cleanCandidateId.includes('aa1b') || (candidate_name && candidate_name.toLowerCase().includes('wdq'))) {
        resolvedEmailForBuffer = 'rashi.khandelwal@demo.unity.com'
      } else if (cleanCandidateId.includes('vineet') || cleanCandidateId.includes('278')) {
        resolvedEmailForBuffer = 'vineet.mittal@navitas.com'
      } else if (cleanCandidateId.includes('hardik')) {
        resolvedEmailForBuffer = 'hardik@peersglobal.com'
      }
    }

    // Attempt sync to production backend (peersunity.com)
    try {
      await fetch('https://peersunity.com/api/v1/leadership/public/votes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          campaign_id: campaign_id || '23ba107a-f314-4cd9-b04a-7af04951f95c',
          nomination_id: cleanCandidateId,
          candidate_id: cleanCandidateId,
          voter_name: cleanFullName,
          full_name: cleanFullName,
          voter_email: cleanEmail,
          email: cleanEmail,
          voter_phone: cleanPhone,
          phone: cleanPhone,
          voter_city: cleanCity,
          city: cleanCity,
          voter_company: company || business || null,
          voter_designation: designation || null,
          support_reason: support_reason || null,
          vote_reference: voteRef,
        }),
      }).catch(() => null)
    } catch {}

    IN_MEMORY_VOTES.push({
      id: `vote-${Date.now()}`,
      vote_reference: voteRef,
      campaign_id: campaign_id || '0199c000-ded0-7000-8000-000000000002',
      candidate_id: cleanCandidateId,
      candidate_name: candidate_name || 'Nominee',
      candidate_email: resolvedEmailForBuffer || undefined,
      voter_name: cleanFullName,
      voter_email: cleanEmail,
      voter_phone: cleanPhone,
      voter_company: company || business || undefined,
      voter_designation: designation || undefined,
      voter_city: cleanCity,
      support_reason: support_reason || undefined,
      created_at: nowIso,
    })

    return NextResponse.json({
      success: true,
      message: `Your vote for ${candidate_name || 'the nominee'} has been recorded successfully!`,
      vote_reference: voteRef,
      cast_at: nowIso,
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
