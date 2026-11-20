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
      // New fields from specification
      leadership_statement,
      why_role,
      vision_12_months,
      hours_per_week,
      other_network_involvement,
      other_network_details,
      profile_changes,
      industry,
      website,
      current_circle,
      current_role,
      member_since,
      life_impact_score,
      attendance_rate,
    } = body

    const cleanEmail = String(email || profile?.email || '').trim().toLowerCase()
    const cleanFullName = String(profile?.full_name || profile?.fullName || '').trim()
    const cleanMobile = String(mobile || profile?.mobile || '').trim()
    const cleanCompany = String(profile?.company_name || profile?.company || '').trim()
    const cleanDesignation = String(profile?.designation || '').trim()
    const cleanCity = String(city_name || profile?.city || '').trim()
    const cleanRole = String(applied_role || profile?.applied_role || 'ded').trim()
    const cleanRoleName = String(role_name || profile?.applied_role_name || 'District Executive Director (DED)').trim()

    if (!cleanEmail) {
      return NextResponse.json({ success: false, message: 'Candidate email is required.' }, { status: 400 })
    }

    const applicationNumber = `PG-2026-${Math.floor(1000 + Math.random() * 9000)}`
    const candidateId = `cand-${Date.now()}`
    const activeCampaignId = campaign_id || '23ba107a-f314-4cd9-b04a-7af04951f95c'

    const sanitizedGoals = Array.isArray(goals)
      ? goals.map((g) => String(g || '').trim()).filter(Boolean)
      : []

    const sanitizedRoles = Array.isArray(leadership_roles)
      ? leadership_roles
          .filter((r) => r && (r.role || r.org || r.years))
          .map((r) => ({
            role: String(r.role || '').trim(),
            org: String(r.org || '').trim(),
            years: String(r.years || '').trim(),
          }))
      : []

    const cleanTimeCommitment = hours_per_week
      ? String(hours_per_week)
      : time_commitment
        ? String(time_commitment).includes('hour')
          ? String(time_commitment)
          : `${time_commitment} hours a week`
        : '10-15 hours/week'

    const fullProfileSnapshot = {
      full_name: cleanFullName,
      email: cleanEmail,
      mobile: cleanMobile,
      company_name: cleanCompany,
      designation: cleanDesignation,
      industry: String(industry || profile?.industry || '').trim(),
      city: cleanCity,
      applied_role: cleanRole,
      since: String(since || '').trim(),
      time_commitment: cleanTimeCommitment,
      hours_per_week: cleanTimeCommitment,
      video_url: String(video_url || '').trim(),
      goals: sanitizedGoals,
      leadership_roles: sanitizedRoles,
      photo_url: profile?.photo_url || body?.photo_url || body?.photo || body?.profile_photo || null,
      bio: profile?.bio || '',
      linkedin: profile?.linkedin || '',
      website: String(website || profile?.website || '').trim(),
      // Leadership statement & vision
      leadership_statement: String(leadership_statement || '').trim(),
      why_role: String(why_role || '').trim(),
      vision_12_months: String(vision_12_months || '').trim(),
      other_network_involvement: Boolean(other_network_involvement),
      other_network_details: String(other_network_details || '').trim(),
      // Read-only member context & changes tracked
      current_circle: current_circle || profile?.current_circle || null,
      current_role: current_role || profile?.current_role || null,
      member_since: member_since || profile?.member_since || null,
      life_impact_score: life_impact_score || profile?.life_impact_score || null,
      attendance_rate: attendance_rate || profile?.attendance_rate || null,
      profile_changes: profile_changes || [],
    }

    const fullFormData = {
      applied_role: cleanRole,
      city_name: cleanCity,
      city: cleanCity,
      industry: String(industry || '').trim(),
      website: String(website || '').trim(),
      since: String(since || '').trim(),
      time_commitment: cleanTimeCommitment,
      hours_per_week: cleanTimeCommitment,
      video_url: String(video_url || '').trim(),
      goals: sanitizedGoals,
      leadership_roles: sanitizedRoles,
      leadership_statement: String(leadership_statement || '').trim(),
      why_role: String(why_role || '').trim(),
      vision_12_months: String(vision_12_months || '').trim(),
      other_network_involvement: Boolean(other_network_involvement),
      other_network_details: String(other_network_details || '').trim(),
      profile_changes: profile_changes || [],
    }

    let liveApplicationNumber = applicationNumber
    let liveNominationId = candidateId

    // 1. Submit to Live Production Backend API
    // PRIMARY ENDPOINT for Admin Panel: POST https://peersunity.com/api/v1/leadership/public/nominations
    try {
      const documentsList = (Array.isArray(documents) && documents.length > 0)
        ? documents
        : [
            id_file
              ? {
                  document_type: 'id_proof',
                  file_url: typeof id_file === 'string' && id_file.startsWith('http') ? id_file : `https://peersunity.com/storage/nominations/${cleanEmail.replace(/[^a-z0-9]/g, '_')}_id.pdf`,
                  original_name: typeof id_file === 'string' ? id_file.split(' · ')[0] : 'id_proof.pdf',
                }
              : null,
            letter_file
              ? {
                  document_type: 'recommendation_letter',
                  file_url: typeof letter_file === 'string' && letter_file.startsWith('http') ? letter_file : `https://peersunity.com/storage/nominations/${cleanEmail.replace(/[^a-z0-9]/g, '_')}_letter.pdf`,
                  original_name: typeof letter_file === 'string' ? letter_file.split(' · ')[0] : 'recommendation_letter.pdf',
                }
              : null,
            deck_file
              ? {
                  document_type: 'company_profile',
                  file_url: typeof deck_file === 'string' && deck_file.startsWith('http') ? deck_file : `https://peersunity.com/storage/nominations/${cleanEmail.replace(/[^a-z0-9]/g, '_')}_deck.pdf`,
                  original_name: typeof deck_file === 'string' ? deck_file.split(' · ')[0] : 'company_profile.pdf',
                }
              : null,
            manifesto_file
              ? {
                  document_type: 'manifesto',
                  file_url: typeof manifesto_file === 'string' && manifesto_file.startsWith('http') ? manifesto_file : `https://peersunity.com/storage/nominations/${cleanEmail.replace(/[^a-z0-9]/g, '_')}_manifesto.pdf`,
                  original_name: typeof manifesto_file === 'string' ? manifesto_file.split(' · ')[0] : 'leadership_manifesto.pdf',
                }
              : null,
          ].filter(Boolean)

      const primaryPayload = {
        campaign_id: activeCampaignId,
        scope_id: scope_id || null,
        form_type: 'main_form_1',
        full_name: cleanFullName,
        email: cleanEmail,
        mobile: cleanMobile,
        phone: cleanMobile,
        company_name: cleanCompany,
        company: cleanCompany,
        designation: cleanDesignation,
        applied_role: cleanRole,
        role: cleanRole,
        city: cleanCity,
        profile: fullProfileSnapshot,
        answers: fullFormData,
        documents: documentsList,
        declarations: {
          dec_truthful_information: Boolean(declarations?.dec_truthful_information ?? true),
          dec_code_of_conduct_no_incentives: Boolean(declarations?.dec_code_of_conduct_no_incentives ?? true),
          dec_public_profile_consent: Boolean(declarations?.dec_public_profile_consent ?? true),
          dec_jury_contact_consent: Boolean(declarations?.dec_jury_contact_consent ?? true),
          dec_code_of_conduct: true,
          dec_no_solicitation: true,
          dec_governance_neutrality: true,
        },
      }

      const resPrimary = await fetch(`${UNITY_API_BASE}/api/v1/leadership/public/nominations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(primaryPayload),
      })

      if (resPrimary.ok) {
        const jsonPrimary = await resPrimary.json()
        if (jsonPrimary && (jsonPrimary.success || jsonPrimary.data)) {
          const resData = jsonPrimary.data || {}
          if (resData.application_number || jsonPrimary.application_number) {
            liveApplicationNumber = resData.application_number || jsonPrimary.application_number
          }
          if (resData.id || resData.nomination_id || jsonPrimary.id) {
            liveNominationId = resData.id || resData.nomination_id || jsonPrimary.id
          }
        }
      } else {
        const errJson = await resPrimary.json().catch(() => ({}))
        console.error('[save-nomination] Primary backend error:', resPrimary.status, errJson)
        return NextResponse.json(
          {
            success: false,
            message: errJson.message || `Backend nomination rejected with status ${resPrimary.status}. Please check your inputs and try again.`,
            errors: errJson.errors || null,
          },
          { status: resPrimary.status }
        )
      }

      // Secondary sync removed: only dispatch one primary nomination to prevent duplicate creation
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
