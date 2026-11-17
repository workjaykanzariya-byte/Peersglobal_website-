import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

const UNITY_API_BASE = 'https://peersunity.com'

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}))
    const contact = String(body.contact || body.email || '').trim().toLowerCase()
    const contactType = 'email'
    const campaignId = body.campaign_id || '23ba107a-f314-4cd9-b04a-7af04951f95c'

    if (!contact || !contact.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    // Call live backend OTP service
    const res = await fetch(`${UNITY_API_BASE}/api/v1/leadership/public/verification/nomination/request-otp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        campaign_id: campaignId,
        contact_type: contactType,
        contact: contact,
      }),
    })

    const data = await res.json().catch(() => ({}))

    if (res.ok && data?.success) {
      return NextResponse.json(data)
    }

    return NextResponse.json(
      {
        success: false,
        message: data?.message || 'Could not send verification code from server. Please try again.',
        errors: data?.errors || null,
      },
      { status: res.status || 400 }
    )
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err?.message || 'Server error sending verification code.' },
      { status: 500 }
    )
  }
}
