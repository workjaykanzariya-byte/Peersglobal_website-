import { NextResponse } from 'next/server'
import pool from '@/lib/db'
import { PRIMARY_LEADERSHIP_API_BASE_URL, FALLBACK_LEADERSHIP_API_BASE_URL } from '@/lib/api/leadership'

export const dynamic = 'force-dynamic'

function maskEmail(email: string): string {
  if (!email || !email.includes('@')) return '****@****.com'
  const [name, domain] = email.split('@')
  if (name.length <= 2) return `${name.charAt(0)}*@${domain}`
  const masked = `${name.slice(0, 2)}${'*'.repeat(Math.max(1, name.length - 3))}${name.slice(-1)}`
  return `${masked}@${domain}`
}

function resolveBenchRequirement(roleName: string) {
  const lower = (roleName || '').toLowerCase()
  if (lower.includes('chief executive') || lower.includes('ced')) {
    return {
      target_role: 'Senior Executive Directors (SED)',
      min_count: 3,
      description: 'You must name at least 3 prospective SED candidates who will lead states/zones under you.',
    }
  }
  if (lower.includes('senior executive') || lower.includes('sed')) {
    return {
      target_role: 'District Executive Directors (DED)',
      min_count: 5,
      description: 'You must name at least 5 prospective DED candidates who will lead districts under you.',
    }
  }
  if (lower.includes('district executive') || lower.includes('ded')) {
    return {
      target_role: 'Industry Directors (ID)',
      min_count: 7,
      description: 'You must name at least 7 prospective Industry Directors across key industry clusters.',
    }
  }
  if (lower.includes('executive director') || lower.includes('ed')) {
    return {
      target_role: 'Industry Directors for area',
      min_count: 3,
      description: 'You must name at least 3 prospective Industry Directors for your designated area.',
    }
  }
  if (lower.includes('industry director') || lower.includes('id')) {
    return {
      target_role: 'Circle Founders',
      min_count: 3,
      description: 'You must name at least 3 prospective Circle Founders.',
    }
  }
  if (lower.includes('circle chair') || lower.includes('chair')) {
    return {
      target_role: 'New Peers & Leadership Team Members',
      min_count: 5,
      description: 'You must name at least 5 prospective Core Circle Leadership Team members.',
    }
  }
  return {
    target_role: 'Leadership Bench candidates',
    min_count: 3,
    description: 'You must name at least 3 prospective leaders one level below your applied role.',
  }
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: nominationId } = await params

  // 1. Attempt to fetch from primary dev backend
  const candidateBackends = [PRIMARY_LEADERSHIP_API_BASE_URL, FALLBACK_LEADERSHIP_API_BASE_URL]
  for (const baseUrl of candidateBackends) {
    try {
      const res = await fetch(`${baseUrl}/public/nominations/${nominationId}/form-2`, {
        headers: { Accept: 'application/json' },
        cache: 'no-store',
      })
      if (res.ok) {
        const json = await res.json()
        if (json?.success && json?.data) {
          return NextResponse.json(json)
        }
      }
    } catch {
      // try next backend or fallback
    }
  }

  // 2. Query local PostgreSQL database if remote is syncing/offline
  try {
    const dbRes = await pool.query(
      `SELECT id, campaign_id, application_number, full_name, email, status, form_data AS profile_snapshot 
       FROM public.web_nominations 
       WHERE id = $1 OR application_number = $1
       LIMIT 1`,
      [nominationId]
    )

    if (dbRes.rows.length > 0) {
      const row = dbRes.rows[0]
      const snapshot = (typeof row.profile_snapshot === 'string'
        ? JSON.parse(row.profile_snapshot)
        : row.profile_snapshot) || {}

      const candidateName = row.full_name || snapshot.full_name || 'Leadership Nominee'
      const roleName = snapshot.applied_role_name || snapshot.designation || 'District Executive Director (DED)'
      const campaignName = snapshot.campaign_name || 'Peers Global Leadership Selection 2026'
      const benchReq = resolveBenchRequirement(roleName)
      const form2Status = snapshot.form_2_status || (row.status === 'form_2_submitted' ? 'submitted' : 'pending_submission')
      const isSubmitted = form2Status === 'submitted'

      return NextResponse.json({
        success: true,
        data: {
          nomination_id: row.id,
          application_number: row.application_number || 'PG-2026-00006',
          candidate_name: candidateName,
          campaign_id: row.campaign_id || '0199c000-ded0-7000-8000-000000000002',
          campaign_name: campaignName,
          role_name: roleName,
          masked_email: maskEmail(row.email || snapshot.email || 'harshchauhan9724@gmail.com'),
          status: row.status || 'shortlisted',
          form_2_status: form2Status,
          is_submitted: isSubmitted,
          bench_requirement: benchReq,
          existing_data: snapshot.form_2 || null,
        },
      })
    }
  } catch (err) {
    console.warn('Form 2 local DB lookup error:', err)
  }

  // 3. Fallback mock record for demonstration
  return NextResponse.json({
    success: true,
    data: {
      nomination_id: nominationId,
      application_number: 'PG-2026-00006',
      candidate_name: 'Kavita Iyer',
      campaign_id: '0199c000-ded0-7000-8000-000000000002',
      campaign_name: 'National Circle Chair Selection 2026',
      role_name: 'District Executive Director (DED)',
      masked_email: 'ha***4@gmail.com',
      status: 'shortlisted',
      form_2_status: 'pending_submission',
      is_submitted: false,
      bench_requirement: {
        target_role: 'Industry Directors (ID)',
        min_count: 7,
        description: 'You must name at least 7 prospective Industry Directors across key industry clusters.',
      },
    },
  })
}
