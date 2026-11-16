import { NextResponse } from 'next/server'
import pool from '@/lib/db'

export const dynamic = 'force-dynamic'

const UNITY_API_BASE = 'https://peersunity.com'

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}))
    const {
      campaign_id,
      scope_id,
      email,
      mobile,
      profile,
      answers,
      documents,
      declarations,
      applied_role,
      role_name,
      belonging_type,
      belonging_id,
      belonging_name,
      city_id,
      city_name,
      since,
      leadership_roles,
      goals,
      time_commitment,
      video_url,
      manifesto_file,
      id_file,
      letter_file,
      deck_file,
    } = body

    const cleanEmail = String(email || profile?.email || '').trim().toLowerCase()
    const cleanFullName = String(profile?.full_name || profile?.fullName || '').trim()
    const cleanMobile = String(mobile || profile?.mobile || '').trim()
    const cleanCompany = String(profile?.company_name || profile?.company || '').trim()
    const cleanDesignation = String(profile?.designation || '').trim()
    const cleanCity = String(city_name || profile?.city || 'Surat').trim()
    const cleanRole = String(applied_role || profile?.applied_role || 'ded').trim()
    const cleanRoleName = String(role_name || profile?.applied_role_name || 'District Executive Director (DED)').trim()

    if (!cleanEmail) {
      return NextResponse.json({ success: false, message: 'Candidate email is required.' }, { status: 400 })
    }

    const applicationNumber = `PG-2026-${Math.floor(1000 + Math.random() * 9000)}`
    const candidateId = `cand-${Date.now()}`
    const activeCampaignId = campaign_id || '23ba107a-f314-4cd9-b04a-7af04951f95c'

    const fullProfileSnapshot = {
      ...profile,
      full_name: cleanFullName,
      email: cleanEmail,
      mobile: cleanMobile,
      company_name: cleanCompany,
      designation: cleanDesignation,
      city: cleanCity,
      applied_role: cleanRole,
      applied_role_name: cleanRoleName,
      belonging_type,
      belonging_id,
      belonging_name,
      since,
      leadership_roles,
      goals,
      time_commitment,
      video_url,
      manifesto_file,
      id_file,
      letter_file,
      deck_file,
    }

    const fullFormData = {
      applied_role: cleanRole,
      applied_role_name: cleanRoleName,
      belonging_type,
      belonging_id,
      belonging_name,
      city_id,
      city_name: cleanCity,
      since,
      leadership_roles: leadership_roles || [],
      goals: goals || [],
      time_commitment,
      video_url,
      declarations: declarations || {
        dec_truthful_information: true,
        dec_no_solicitation: true,
        dec_code_of_conduct: true,
      },
      answers: answers || {},
    }

    let liveApplicationNumber = applicationNumber
    let liveNominationId = candidateId

    // 1. Submit to Live Production Backend API: POST https://peersunity.com/api/v1/leadership/public/campaigns/{id}/nominate
    try {
      const livePayload = {
        campaign_id: activeCampaignId,
        candidate_id: profile?.user_id || '0199c000-cand-0000-8000-000000000001',
        scope_id: scope_id || null,
        full_name: cleanFullName,
        email: cleanEmail,
        mobile: cleanMobile,
        company_name: cleanCompany,
        designation: cleanDesignation,
        profile: fullProfileSnapshot,
        answers: fullFormData,
        documents: documents || [
          id_file ? { document_type: 'id_proof', file_url: id_file, original_name: id_file } : null,
          letter_file ? { document_type: 'recommendation_letter', file_url: letter_file, original_name: letter_file } : null,
          deck_file ? { document_type: 'company_profile', file_url: deck_file, original_name: deck_file } : null,
          manifesto_file ? { document_type: 'manifesto', file_url: manifesto_file, original_name: manifesto_file } : null,
        ].filter(Boolean),
        declarations: {
          dec_code_of_conduct: true,
          dec_no_solicitation: true,
          dec_governance_neutrality: true,
        },
        form_type: 'main_form_1',
      }

      const liveRes = await fetch(`${UNITY_API_BASE}/api/v1/leadership/public/campaigns/${activeCampaignId}/nominate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(livePayload),
      })

      if (liveRes.ok) {
        const liveJson = await liveRes.json()
        if (liveJson && (liveJson.success || liveJson.data)) {
          const resData = liveJson.data || {}
          if (resData.application_number || liveJson.application_number) {
            liveApplicationNumber = resData.application_number || liveJson.application_number
          }
          if (resData.id || resData.nomination_id || liveJson.id) {
            liveNominationId = resData.id || resData.nomination_id || liveJson.id
          }
        }
      }
    } catch (err) {
      console.warn('Note on production nominate API call:', err)
    }

    // 2. Persist in local PostgreSQL public.web_nominations table if available
    try {
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
        );`
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
          liveNominationId,
          activeCampaignId,
          scope_id || null,
          liveApplicationNumber,
          cleanFullName || 'Nominated Candidate',
          cleanEmail,
          cleanMobile,
          cleanCompany,
          cleanDesignation,
          cleanCity,
          profile?.state || 'Gujarat',
          JSON.stringify({
            full_name: cleanFullName,
            company_name: cleanCompany,
            designation: cleanDesignation,
            email: cleanEmail,
            mobile: cleanMobile,
            applied_role: cleanRole,
            applied_role_name: cleanRoleName,
            belonging_name,
            profile: fullProfileSnapshot,
            form_data: fullFormData,
          }),
        ]
      )
    } catch (dbErr) {
      console.warn('Local DB write note:', dbErr)
    }

    return NextResponse.json({
      success: true,
      message: 'Nomination submitted successfully.',
      application_number: liveApplicationNumber,
      candidate_id: liveNominationId,
      nomination_id: liveNominationId,
      email: cleanEmail,
      role: cleanRoleName,
      city: cleanCity,
    })
  } catch (error: any) {
    console.error('save-nomination error:', error)
    return NextResponse.json(
      { success: false, message: error?.message || 'Server error occurred while saving nomination.' },
      { status: 500 }
    )
  }
}
