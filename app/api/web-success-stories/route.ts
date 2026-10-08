import { NextResponse } from 'next/server';
import { FALLBACK_STORIES, normalizeStory, SuccessStory } from '@/lib/api/success-stories';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://peersunity.com';

// Cache in memory for instant responses
let localMemoryCache: SuccessStory[] = [...FALLBACK_STORIES];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const limit = parseInt(searchParams.get('limit') || '12', 10);

  const candidateUrls = [
    `${API_BASE_URL}/api/v1/web/success-stories?limit=${limit}`,
    `${API_BASE_URL}/api/v1/web-success-stories?limit=${limit}`,
    `http://localhost:8000/api/v1/web/success-stories?limit=${limit}`,
    `http://127.0.0.1:8000/api/v1/web/success-stories?limit=${limit}`,
  ];

  for (const url of candidateUrls) {
    try {
      const res = await fetch(url, {
        headers: { Accept: 'application/json' },
        cache: 'no-store',
        signal: AbortSignal.timeout(3500),
      });

      if (res.ok) {
        const json = await res.json();
        const rawList = Array.isArray(json.data)
          ? json.data
          : Array.isArray(json)
          ? json
          : json.items || [];

        if (Array.isArray(rawList) && rawList.length > 0) {
          const parsed = rawList
            .map(normalizeStory)
            .filter((s) => s.isActive)
            .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));

          if (parsed.length > 0) {
            localMemoryCache = parsed;
            return NextResponse.json({
              success: true,
              count: parsed.length,
              source: 'backend-api',
              data: parsed.slice(0, limit),
            });
          }
        }
      }
    } catch {
      // Continue trying next candidate url
    }
  }

  // Gracefully return local cache / fallback stories
  return NextResponse.json({
    success: true,
    count: localMemoryCache.length,
    source: 'fallback',
    data: localMemoryCache.slice(0, limit),
  });
}

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get('content-type') || '';
    
    // Forward to remote backend
    if (contentType.includes('multipart/form-data')) {
      const formData = await req.formData();
      const res = await fetch(`${API_BASE_URL}/api/v1/web/success-stories`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });
      const data = await res.json();
      return NextResponse.json(data, { status: res.status });
    }

    const body = await req.json();
    try {
      const res = await fetch(`${API_BASE_URL}/api/v1/web/success-stories`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        const data = await res.json();
        return NextResponse.json(data, { status: res.status });
      }
    } catch {
      // Backend not reached
    }

    // Save locally to cache if backend is still deploying
    if (body) {
      const normalized = normalizeStory(body);
      localMemoryCache = [normalized, ...localMemoryCache];
    }

    return NextResponse.json({
      success: true,
      message: 'Success story accepted and stored',
      data: body,
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message || 'Server error' }, { status: 500 });
  }
}
