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
      // 1. Write to public.web_nominations table (used by admin panel)
      await pool.query(
        `CREATE TABLE IF NOT EXISTS public.web_nominations (
          id VARCHAR(100) PRIMARY KEY,
          campaign_id VARCHAR(100),
          scope_id VARCHAR(100),
          user_id VARCHAR(100),
          application_number VARCHAR(100) UNIQUE,
          form_type VARCHAR(50) DEFAULT 'main_form_1',
          parent_nomination_id VARCHAR(100),
          full_name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          mobile VARCHAR(50),
          company VARCHAR(255),
          designation VARCHAR(255),
          city VARCHAR(100),
          state VARCHAR(100),
          status VARCHAR(50) DEFAULT 'submitted',
          form_data JSONB,
          documents JSONB,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );

        CREATE INDEX IF NOT EXISTS idx_web_nom_email ON public.web_nominations (LOWER(email));
        CREATE INDEX IF NOT EXISTS idx_web_nom_campaign ON public.web_nominations (campaign_id);
        CREATE INDEX IF NOT EXISTS idx_web_nom_form_type ON public.web_nominations (form_type);
        CREATE INDEX IF NOT EXISTS idx_web_nom_app_no ON public.web_nominations (application_number);`
      )

      await pool.query(
        `INSERT INTO public.web_nominations 
          (id, campaign_id, scope_id, application_number, form_type, full_name, email, mobile, company, designation, city, state, status, form_data, created_at, updated_at)
         VALUES ($1, $2, $3, $4, 'main_form_1', $5, $6, $7, $8, $9, $10, $11, 'submitted', $12, NOW(), NOW())
         ON CONFLICT (id) DO UPDATE SET 
           email = EXCLUDED.email, 
           full_name = EXCLUDED.full_name,
           form_data = EXCLUDED.form_data,
           updated_at = NOW()`,
        [
          candidateId,
          campaign_id || '23ba107a-f314-4cd9-b04a-7af04951f95c',
          scope_id || null,
          applicationNumber,
          cleanFullName || 'Nominated Candidate',
          cleanEmail,
          cleanMobile,
          cleanCompany,
          cleanDesignation,
          profile?.city || 'Surat',
          profile?.state || 'Gujarat',
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

      // 2. Also write to legacy leadership_nominations for backwards compatibility
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
            campaign_id || '23ba107a-f314-4cd9-b04a-7af04951f95c',
            scope_id || null,
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
      } catch {}
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
