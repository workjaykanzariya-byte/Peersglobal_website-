import { NextRequest, NextResponse } from 'next/server'
import {
  fetchStoreProducts,
  fetchStoreCategories,
  fetchFeaturedStoreProducts,
  searchStoreProducts,
  fetchStoreConfig,
} from '@/lib/api/store'

export const dynamic = 'force-dynamic'

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
