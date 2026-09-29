import { NextResponse } from 'next/server'
import { INITIAL_PAGE_MEDIA, PageMediaItem } from '@/lib/page-media-config'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://peersunity.com'

// In-memory cache for fast local persistence
let localCache: PageMediaItem[] = [...INITIAL_PAGE_MEDIA]

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const pageId = searchParams.get('pageId')
  const slug = searchParams.get('slug')

  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/web-media`, {
      headers: { Accept: 'application/json' },
      cache: 'no-store',
    })

    if (res.ok) {
      const data = await res.json()
      const items: PageMediaItem[] = data.data || data
      if (Array.isArray(items) && items.length > 0) {
        localCache = items
      }
    }
  } catch (error) {
    // Graceful fallback to local cache
  }

  let results = localCache
  if (pageId) {
    results = results.filter((i) => i.pageId === pageId)
  } else if (slug) {
    results = results.filter((i) => i.pageSlug === slug)
  }

  return NextResponse.json(results, { status: 200 })
}

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // Try external backend first
    try {
      const res = await fetch(`${API_BASE_URL}/api/v1/web-media`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(body),
      })

      if (res.ok) {
        const data = await res.json()
        if (Array.isArray(body)) {
          localCache = body
        } else if (body && body.id) {
          const idx = localCache.findIndex((i) => i.id === body.id)
          if (idx >= 0) localCache[idx] = body
          else localCache = [body, ...localCache]
        }
        return NextResponse.json(data, { status: res.status })
      }
    } catch {
      // Backend not running / offline - fallback to memory
    }

    // Local fallback save
    if (Array.isArray(body)) {
      localCache = body
    } else if (body && body.id) {
      const idx = localCache.findIndex((i) => i.id === body.id)
      if (idx >= 0) localCache[idx] = body
      else localCache = [body, ...localCache]
    }

    return NextResponse.json({ success: true, data: body }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 })
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    if (id) {
      localCache = localCache.filter((i) => i.id !== id)
    }
    return NextResponse.json({ success: true, message: 'Deleted' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 })
  }
}
