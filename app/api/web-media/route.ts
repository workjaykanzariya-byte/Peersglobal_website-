import { NextResponse } from 'next/server'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://peersunity.com'

export async function GET() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/web-media`, {
      headers: { Accept: 'application/json' },
      cache: 'no-store',
    })

    if (res.ok) {
      const data = await res.json()
      return NextResponse.json(data.data || data)
    }
  } catch (error) {
    console.error('API /api/v1/web-media fetch failed:', error)
  }

  return NextResponse.json([], { status: 200 })
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const res = await fetch(`${API_BASE_URL}/api/v1/web-media`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    })

    const data = await res.json()
    return NextResponse.json(data, { status: res.status })
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 })
  }
}
