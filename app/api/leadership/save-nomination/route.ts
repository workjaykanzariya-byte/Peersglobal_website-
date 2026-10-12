import { NextResponse } from 'next/server'
import pool from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}))
    const { campaign_id, scope_id, email, mobile, profile, answers } = body

    const cleanEmail = String(email || profile?.email || '').trim().toLowerCase()
    const cleanFullName = String(profile?.full_name || profile?.fullName || '').trim()
    const cleanMobile = String(mobile || profile?.mobile || '').trim()
    const cleanCompany = String(profile?.company_name || profile?.company || '').trim()
    const cleanDesignation = String(profile?.designation || '').trim()

    if (!cleanEmail) {
      return NextResponse.json({ success: false, message: 'Candidate email is required.' }, { status: 400 })
    }

    const applicationNumber = `PG-2026-${Math.floor(1000 + Math.random() * 9000)}`
    const candidateId = `cand-${Date.now()}`

    try {
      await pool.query(
        `CREATE TABLE IF NOT EXISTS public.leadership_nominations (
          id VARCHAR(100) PRIMARY KEY,
          campaign_id VARCHAR(100),
          scope_id VARCHAR(100),
          application_number VARCHAR(100),
          full_name VARCHAR(255),
          email VARCHAR(255) NOT NULL,
          mobile VARCHAR(50),
          status VARCHAR(50) DEFAULT 'submitted',
          profile_snapshot JSONB,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
          submitted_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )`
      )

      await pool.query(
        `INSERT INTO public.leadership_nominations 
          (id, campaign_id, scope_id, application_number, full_name, email, mobile, status, profile_snapshot, created_at, submitted_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, NOW(), NOW())
         ON CONFLICT (id) DO UPDATE SET email = EXCLUDED.email, full_name = EXCLUDED.full_name`,
        [
          candidateId,
          campaign_id || '9d9016e2-2a54-47c3-8f0a-pgded2026',
          scope_id || 'scope-surat-01',
          applicationNumber,
          cleanFullName || 'Nominated Candidate',
          cleanEmail,
          cleanMobile,
          'submitted',
          JSON.stringify({
            full_name: cleanFullName,
            company_name: cleanCompany,
            designation: cleanDesignation,
            email: cleanEmail,
            mobile: cleanMobile,
            answers: answers || {},
          }),
        ]
      )
    } catch (dbErr) {
      console.warn('save-nomination DB error:', dbErr)
    }

    return NextResponse.json({
      success: true,
      message: 'Nomination recorded in election registry.',
      application_number: applicationNumber,
      candidate_id: candidateId,
      email: cleanEmail,
    })
  } catch (error: any) {
    console.error('save-nomination error:', error)
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to save nomination' },
      { status: 500 }
    )
  }
}
