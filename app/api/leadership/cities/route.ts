import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

interface CityItem {
  id: string
  name: string
  state: string | null
  district: string | null
}

let cachedCities: CityItem[] | null = null
let lastFetchedTime = 0
const CACHE_TTL_MS = 24 * 60 * 60 * 1000 // 24 hours

const POPULAR_CITIES: CityItem[] = [
  { id: 'city-surat', name: 'Surat', state: 'Gujarat', district: 'Surat' },
  { id: 'city-ahmedabad', name: 'Ahmedabad', state: 'Gujarat', district: 'Ahmedabad' },
  { id: 'city-mumbai', name: 'Mumbai', state: 'Maharashtra', district: 'Mumbai' },
  { id: 'city-delhi', name: 'Delhi', state: 'Delhi', district: 'New Delhi' },
  { id: 'city-bengaluru', name: 'Bengaluru', state: 'Karnataka', district: 'Bengaluru Urban' },
  { id: 'city-pune', name: 'Pune', state: 'Maharashtra', district: 'Pune' },
  { id: 'city-vadodara', name: 'Vadodara', state: 'Gujarat', district: 'Vadodara' },
  { id: 'city-rajkot', name: 'Rajkot', state: 'Gujarat', district: 'Rajkot' },
  { id: 'city-hyderabad', name: 'Hyderabad', state: 'Telangana', district: 'Hyderabad' },
  { id: 'city-chennai', name: 'Chennai', state: 'Tamil Nadu', district: 'Chennai' },
  { id: 'city-kolkata', name: 'Kolkata', state: 'West Bengal', district: 'Kolkata' },
  { id: 'city-jaipur', name: 'Jaipur', state: 'Rajasthan', district: 'Jaipur' },
  { id: 'city-indore', name: 'Indore', state: 'Madhya Pradesh', district: 'Indore' },
  { id: 'city-chandigarh', name: 'Chandigarh', state: 'Chandigarh', district: 'Chandigarh' },
  { id: 'city-lucknow', name: 'Lucknow', state: 'Uttar Pradesh', district: 'Lucknow' },
  { id: 'city-nagpur', name: 'Nagpur', state: 'Maharashtra', district: 'Nagpur' },
  { id: 'city-bhavnagar', name: 'Bhavnagar', state: 'Gujarat', district: 'Bhavnagar' },
  { id: 'city-jamnagar', name: 'Jamnagar', state: 'Gujarat', district: 'Jamnagar' },
  { id: 'city-vapi', name: 'Vapi', state: 'Gujarat', district: 'Valsad' },
  { id: 'city-navsari', name: 'Navsari', state: 'Gujarat', district: 'Navsari' },
]

async function loadCities(): Promise<CityItem[]> {
  const now = Date.now()
  if (cachedCities && now - lastFetchedTime < CACHE_TTL_MS) {
    return cachedCities
  }

  try {
    const res = await fetch('https://peersunity.com/api/v1/leadership/public/cities', {
      headers: { Accept: 'application/json' },
    })
    if (res.ok) {
      const json = await res.json()
      const list = json?.data || json
      if (Array.isArray(list) && list.length > 0) {
        cachedCities = list.map((c: any) => ({
          id: String(c.id),
          name: String(c.name || '').trim(),
          state: c.state ? String(c.state).trim() : null,
          district: c.district ? String(c.district).trim() : null,
        }))
        lastFetchedTime = now
        return cachedCities
      }
    }
  } catch (err) {
    console.warn('Could not load live cities, using fallback:', err)
  }

  return cachedCities || POPULAR_CITIES
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const q = (searchParams.get('q') || '').trim().toLowerCase()
  const limit = Math.min(Number(searchParams.get('limit') || 50), 200)

  const allCities = await loadCities()

  if (!q) {
    // Return popular cities first + slice of list
    const combined = [...POPULAR_CITIES]
    const seenNames = new Set(POPULAR_CITIES.map((c) => c.name.toLowerCase()))

    for (const c of allCities) {
      if (!seenNames.has(c.name.toLowerCase())) {
        combined.push(c)
        seenNames.add(c.name.toLowerCase())
        if (combined.length >= limit) break
      }
    }

    return NextResponse.json({
      success: true,
      total: allCities.length,
      cities: combined,
    })
  }

  // Filter cities by search term
  const matched: CityItem[] = []
  const qLower = q.toLowerCase()

  // 1. Exact / prefix matches
  for (const c of allCities) {
    if (c.name.toLowerCase().startsWith(qLower)) {
      matched.push(c)
      if (matched.length >= limit) break
    }
  }

  // 2. Contains matches if not enough
  if (matched.length < limit) {
    const existingIds = new Set(matched.map((m) => m.id))
    for (const c of allCities) {
      if (!existingIds.has(c.id)) {
        if (
          c.name.toLowerCase().includes(qLower) ||
          (c.state && c.state.toLowerCase().includes(qLower)) ||
          (c.district && c.district.toLowerCase().includes(qLower))
        ) {
          matched.push(c)
          if (matched.length >= limit) break
        }
      }
    }
  }

  return NextResponse.json({
    success: true,
    query: q,
    count: matched.length,
    cities: matched,
  })
}
