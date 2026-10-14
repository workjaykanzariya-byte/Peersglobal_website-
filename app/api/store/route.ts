import { NextRequest, NextResponse } from 'next/server'
import {
  fetchStoreProducts,
  fetchStoreCategories,
  fetchFeaturedStoreProducts,
  searchStoreProducts,
  fetchStoreConfig,
} from '@/lib/api/store'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const mode = searchParams.get('mode') // 'categories' | 'featured' | 'search' | 'config' | 'products'

  if (mode === 'categories') {
    const data = await fetchStoreCategories()
    return NextResponse.json({ success: true, data })
  }

  if (mode === 'featured') {
    const data = await fetchFeaturedStoreProducts()
    return NextResponse.json({ success: true, data })
  }

  if (mode === 'coin-image') {
    const fs = await import('fs')
    const path = await import('path')
    const possiblePaths = [
      'C:\\Users\\Abc\\.gemini\\antigravity-ide\\brain\\d0bd9749-46f0-4c3e-8a12-f925e8f9424c\\.user_uploaded\\media_1791961053249.jpg',
      'C:\\Users\\Abc\\.gemini\\antigravity-ide\\brain\\565f9187-1041-476a-8f10-9f8797258ee6\\.user_uploaded\\media_1791439643257.jpg',
      path.join(process.cwd(), 'public', 'images', 'peers-coin-gold.jpg'),
    ]

    for (const p of possiblePaths) {
      if (fs.existsSync(p)) {
        const fileBuffer = fs.readFileSync(p)
        // Also persist to public/images so it can be served statically in the future
        try {
          const publicDest = path.join(process.cwd(), 'public', 'images', 'peers-coin-gold.jpg')
          if (!fs.existsSync(publicDest)) {
            fs.writeFileSync(publicDest, fileBuffer)
          }
        } catch (e) {
          // ignore write error
        }
        return new NextResponse(fileBuffer, {
          headers: {
            'Content-Type': 'image/jpeg',
            'Cache-Control': 'public, max-age=31536000, immutable',
          },
        })
      }
    }
  }

  if (mode === 'config') {
    const data = await fetchStoreConfig()
    return NextResponse.json({ success: true, data })
  }

  if (mode === 'search') {
    const q = searchParams.get('q') || ''
    const page = Number(searchParams.get('page')) || 1
    const per_page = Number(searchParams.get('per_page')) || 20
    const data = await searchStoreProducts(q, page, per_page)
    return NextResponse.json({ success: true, data })
  }

  // Default: products listing with filters
  const page = Number(searchParams.get('page')) || 1
  const per_page = Number(searchParams.get('per_page')) || 20
  const category_id = searchParams.get('category_id') || undefined
  const type = searchParams.get('type') || undefined
  const min_coins = searchParams.get('min_coins') ? Number(searchParams.get('min_coins')) : undefined
  const max_coins = searchParams.get('max_coins') ? Number(searchParams.get('max_coins')) : undefined
  const sort = searchParams.get('sort') || undefined
  const search = searchParams.get('search') || undefined

  const data = await fetchStoreProducts({
    page,
    per_page,
    category_id,
    type,
    min_coins,
    max_coins,
    sort,
    search,
  })

  return NextResponse.json({ success: true, data })
}
