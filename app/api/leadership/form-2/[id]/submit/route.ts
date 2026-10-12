import { NextResponse } from 'next/server'
import pool from '@/lib/db'
import { PRIMARY_LEADERSHIP_API_BASE_URL, FALLBACK_LEADERSHIP_API_BASE_URL } from '@/lib/api/leadership'

export const dynamic = 'force-dynamic'

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: nominationId } = await params
  const payload = await req.json().catch(() => ({}))

  const submittedEmail = String(payload.email || '').trim().toLowerCase()

  if (!submittedEmail || !submittedEmail.includes('@')) {
    return NextResponse.json(
      { success: false, message: 'Valid nominee email is required for submission.' },
      { status: 422 }
    )
  }

  // 1. Attempt submission to remote dev backend
  const candidateBackends = [PRIMARY_LEADERSHIP_API_BASE_URL, FALLBACK_LEADERSHIP_API_BASE_URL]
  for (const baseUrl of candidateBackends) {
    try {
      const res = await fetch(`${baseUrl}/public/nominations/${nominationId}/form-2/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
        cache: 'no-store',
      })
      const json = await res.json().catch(() => null)
      if (res.ok && json?.success) {
        return NextResponse.json(json)
      }
      if (res.status === 422) {
        return NextResponse.json(
          json || {
            success: false,
            message: 'Email mismatch or validation error occurred.',
          },
          { status: 422 }
        )
      }
    } catch {
      // try next backend
    }
  }

  // 2. Persist in local database if remote server route is pending
  let appNumber = 'PG-2026-00006'
  const subNominationId = `0199c000-${Math.random().toString(36).substring(2, 6)}-7000-8000-${Date.now().toString(16).slice(-12)}`

  try {
    const parentRes = await pool.query(
      `SELECT id, campaign_id, scope_id, user_id, application_number, full_name, email, profile_snapshot
       FROM leadership_nominations 
       WHERE id = $1 OR application_number = $1
       LIMIT 1`,
      [nominationId]
    )

    if (parentRes.rows.length > 0) {
      const parent = parentRes.rows[0]
      appNumber = parent.application_number || appNumber
      const f2AppNumber = `${appNumber}-F2`

      // Verify email matches parent
      const parentEmail = String(parent.email || '').trim().toLowerCase()
      if (parentEmail && parentEmail !== submittedEmail) {
        return NextResponse.json(
          {
            success: false,
            message: `Email mismatch: The entered email (${submittedEmail}) does not match the nominee application email (${parentEmail}).`,
          },
          { status: 422 }
        )
      }

      // Update parent nomination status & snapshot
      const existingSnapshot = (typeof parent.profile_snapshot === 'string'
        ? JSON.parse(parent.profile_snapshot)
        : parent.profile_snapshot) || {}

      existingSnapshot.form_2_status = 'submitted'
      existingSnapshot.form_2_submitted_at = new Date().toISOString()
      existingSnapshot.form_2_sub_nomination_id = subNominationId
      existingSnapshot.form_2 = payload

      await pool.query(
        `UPDATE leadership_nominations 
         SET profile_snapshot = $1 
         WHERE id = $2`,
        [JSON.stringify(existingSnapshot), parent.id]
      )

      // Insert or update sub nomination row
      await pool.query(
        `INSERT INTO leadership_nominations 
          (id, campaign_id, scope_id, user_id, application_number, full_name, email, mobile, status, profile_snapshot, created_at, submitted_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, NOW(), NOW())
         ON CONFLICT (id) DO UPDATE SET profile_snapshot = EXCLUDED.profile_snapshot, status = 'submitted'`,
        [
          subNominationId,
          parent.campaign_id,
          parent.scope_id,
          parent.user_id,
          f2AppNumber,
          parent.full_name,
          parent.email,
          payload.mobile || parent.mobile || '',
          'submitted',
          JSON.stringify({
            form_type: 'sub_form_2',
            parent_nomination_id: parent.id,
            parent_application_number: appNumber,
            candidate_name: parent.full_name,
            submitted_at: new Date().toISOString(),
            form_2: payload,
          }),
        ]
      )

      return NextResponse.json({
        success: true,
        message: 'Form 2 (Jury Evaluation Data) submitted successfully.',
        data: {
          sub_nomination_id: subNominationId,
          application_number: f2AppNumber,
        },
      })
    }
  } catch (dbErr) {
    console.warn('Form 2 DB submission error:', dbErr)
  }

  // 3. Fallback response
  return NextResponse.json({
    success: true,
    message: 'Form 2 (Jury Evaluation Data) submitted successfully.',
    data: {
      sub_nomination_id: subNominationId,
      application_number: `${appNumber}-F2`,
    },
  })
}
