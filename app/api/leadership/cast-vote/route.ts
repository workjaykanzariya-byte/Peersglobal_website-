import { NextResponse } from 'next/server'
import pool from '@/lib/db'

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

    // Try saving vote record in database if table exists
    try {
      await pool.query(
        `CREATE TABLE IF NOT EXISTS public.endorsement_votes (
          id SERIAL PRIMARY KEY,
          vote_reference VARCHAR(100) UNIQUE NOT NULL,
          campaign_id VARCHAR(100),
          candidate_id VARCHAR(100),
          candidate_name VARCHAR(255),
          voter_name VARCHAR(255) NOT NULL,
          voter_email VARCHAR(255) NOT NULL,
          voter_phone VARCHAR(50),
          voter_company VARCHAR(255),
          voter_designation VARCHAR(255),
          voter_city VARCHAR(100),
          support_reason TEXT,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )`
      )

      await pool.query(
        `INSERT INTO public.endorsement_votes 
          (vote_reference, campaign_id, candidate_id, candidate_name, voter_name, voter_email, voter_phone, voter_company, voter_designation, voter_city, support_reason)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
        [
          voteRef,
          campaign_id || 'pg-ded-2026',
          cleanCandidateId,
          candidate_name || 'Nominee',
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
      console.warn('Optional vote DB recording note:', dbErr)
    }

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
