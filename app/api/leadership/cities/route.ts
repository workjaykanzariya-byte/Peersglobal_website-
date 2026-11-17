import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

interface CityItem {
  id: string
  name: string
  district: string | null
  state: string | null
  country: string
  full_location?: string
}

let cachedCities: CityItem[] | null = null
let lastFetchedTime = 0
const CACHE_TTL_MS = 24 * 60 * 60 * 1000 // 24 hours

function formatCityLocation(c: { name: string; district?: string | null; state?: string | null; country?: string | null }): string {
  const parts: string[] = [c.name]
  if (c.district && c.district.trim() !== c.name.trim()) {
    parts.push(c.district.includes('District') || c.district.includes('County') ? c.district : `${c.district} District`)
  }
  if (c.state && c.state.trim() !== c.name.trim()) {
    parts.push(c.state)
  }
  parts.push(c.country || 'India')
  return parts.join(', ')
}

const POPULAR_CITIES: CityItem[] = [
  // India Hubs
  { id: 'city-surat', name: 'Surat', district: 'Surat', state: 'Gujarat', country: 'India' },
  { id: 'city-ahmedabad', name: 'Ahmedabad', district: 'Ahmedabad', state: 'Gujarat', country: 'India' },
  { id: 'city-mumbai', name: 'Mumbai', district: 'Mumbai City', state: 'Maharashtra', country: 'India' },
  { id: 'city-delhi', name: 'Delhi', district: 'New Delhi', state: 'Delhi', country: 'India' },
  { id: 'city-bengaluru', name: 'Bengaluru', district: 'Bengaluru Urban', state: 'Karnataka', country: 'India' },
  { id: 'city-pune', name: 'Pune', district: 'Pune', state: 'Maharashtra', country: 'India' },
  { id: 'city-vadodara', name: 'Vadodara', district: 'Vadodara', state: 'Gujarat', country: 'India' },
  { id: 'city-rajkot', name: 'Rajkot', district: 'Rajkot', state: 'Gujarat', country: 'India' },
  { id: 'city-hyderabad', name: 'Hyderabad', district: 'Hyderabad', state: 'Telangana', country: 'India' },
  { id: 'city-chennai', name: 'Chennai', district: 'Chennai', state: 'Tamil Nadu', country: 'India' },
  { id: 'city-kolkata', name: 'Kolkata', district: 'Kolkata', state: 'West Bengal', country: 'India' },
  { id: 'city-jaipur', name: 'Jaipur', district: 'Jaipur', state: 'Rajasthan', country: 'India' },
  { id: 'city-indore', name: 'Indore', district: 'Indore', state: 'Madhya Pradesh', country: 'India' },
  { id: 'city-chandigarh', name: 'Chandigarh', district: 'Chandigarh', state: 'Chandigarh', country: 'India' },
  { id: 'city-lucknow', name: 'Lucknow', district: 'Lucknow', state: 'Uttar Pradesh', country: 'India' },
  { id: 'city-nagpur', name: 'Nagpur', district: 'Nagpur', state: 'Maharashtra', country: 'India' },
  { id: 'city-bhavnagar', name: 'Bhavnagar', district: 'Bhavnagar', state: 'Gujarat', country: 'India' },
  { id: 'city-jamnagar', name: 'Jamnagar', district: 'Jamnagar', state: 'Gujarat', country: 'India' },
  { id: 'city-vapi', name: 'Vapi', district: 'Valsad', state: 'Gujarat', country: 'India' },
  { id: 'city-navsari', name: 'Navsari', district: 'Navsari', state: 'Gujarat', country: 'India' },

  // Global Hubs
  { id: 'city-dubai', name: 'Dubai', district: 'Dubai Emirate', state: 'Dubai', country: 'United Arab Emirates' },
  { id: 'city-london', name: 'London', district: 'Greater London', state: 'England', country: 'United Kingdom' },
  { id: 'city-singapore', name: 'Singapore', district: 'Central Singapore', state: 'Singapore', country: 'Singapore' },
  { id: 'city-newyork', name: 'New York', district: 'New York County', state: 'New York', country: 'United States' },
  { id: 'city-sf', name: 'San Francisco', district: 'San Francisco County', state: 'California', country: 'United States' },
  { id: 'city-toronto', name: 'Toronto', district: 'Greater Toronto', state: 'Ontario', country: 'Canada' },
  { id: 'city-sydney', name: 'Sydney', district: 'Sydney Metropolitan', state: 'New South Wales', country: 'Australia' },
  { id: 'city-nairobi', name: 'Nairobi', district: 'Nairobi County', state: 'Nairobi', country: 'Kenya' },
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
        cachedCities = list.map((c: any) => {
          const item: CityItem = {
            id: String(c.id),
            name: String(c.name || '').trim(),
            district: c.district ? String(c.district).trim() : null,
            state: c.state ? String(c.state).trim() : null,
            country: c.country ? String(c.country).trim() : 'India',
          }
          item.full_location = formatCityLocation(item)
          return item
        })
        lastFetchedTime = now
        return cachedCities
      }
    }
  } catch (err) {
    console.warn('Could not load live cities, using fallback:', err)
  }

  return cachedCities || POPULAR_CITIES.map((c) => ({ ...c, full_location: formatCityLocation(c) }))
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

  // Filter cities by search term across Name, District, State, and Country
  const matched: CityItem[] = []
  const qLower = q.toLowerCase()

  // 1. Exact / prefix matches
  for (const c of allCities) {
    if (
      c.name.toLowerCase().startsWith(qLower) ||
      (c.district && c.district.toLowerCase().startsWith(qLower)) ||
      (c.country && c.country.toLowerCase().startsWith(qLower))
    ) {
      matched.push({
        ...c,
        full_location: c.full_location || formatCityLocation(c),
      })
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
          (c.district && c.district.toLowerCase().includes(qLower)) ||
          (c.state && c.state.toLowerCase().includes(qLower)) ||
          (c.country && c.country.toLowerCase().includes(qLower))
        ) {
          matched.push({
            ...c,
            full_location: c.full_location || formatCityLocation(c),
          })
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
