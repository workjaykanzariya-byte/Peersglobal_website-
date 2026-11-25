import { NextResponse } from 'next/server'
import pool from '@/lib/db'

export const dynamic = 'force-dynamic'

const UNITY_API_BASE = process.env.ADMIN_API_URL || 'https://peersunity.com'

export interface EcosystemMetrics {
  peers: {
    raw: number
    display: string
    label: string
  }
  cities: {
    raw: number
    display: string
    label: string
  }
  countries: {
    raw: number
    display: string
    label: string
  }
  liveImpacts: {
    raw: number
    display: string
    label: string
  }
  updatedAt: string
  source: 'admin-api' | 'db-direct' | 'fallback'
}

/**
 * Format raw numbers to clean milestone badges (e.g. 10420 -> 10,000+, 48 -> 45+, 1000000 -> 1M)
 */
function formatNumber(num: number, type: 'peers' | 'cities' | 'countries' | 'liveImpacts'): string {
  if (type === 'liveImpacts') {
    if (num >= 1_000_000) return `${Math.floor(num / 1_000_000)}M`
    if (num >= 1_000) return `${Math.floor(num / 1_000)}K+`
    return `${num}`
  }

  if (type === 'peers') {
    if (num >= 10_000) {
      const rounded = Math.floor(num / 1_000) * 1_000
      return `${rounded.toLocaleString('en-IN')}+`
    }
    if (num >= 1_000) {
      const rounded = Math.floor(num / 500) * 500
      return `${rounded.toLocaleString('en-IN')}+`
    }
    if (num > 0) return `${num}+`
    return '10,000+'
  }

  if (type === 'cities' || type === 'countries') {
    if (num >= 100) return `${Math.floor(num / 10) * 10}+`
    if (num >= 20) return `${Math.floor(num / 5) * 5}+`
    if (num > 0) return `${num}+`
    return type === 'cities' ? '45+' : '25+'
  }

  return `${num}`
}

export async function GET() {
  const fallbackData: EcosystemMetrics = {
    peers: { raw: 10450, display: '10,450+', label: 'Peers' },
    cities: { raw: 48, display: '48+', label: 'Cities' },
    countries: { raw: 26, display: '26+', label: 'Countries' },
    liveImpacts: { raw: 1000000, display: '1M', label: 'Live Impacts' },
    updatedAt: new Date().toISOString(),
    source: 'fallback',
  }

  // -------------------------------------------------------------------------
  // 1. Try to fetch from live Admin Panel / Unity Backend API
  // -------------------------------------------------------------------------
  const candidateUrls = [
    `${UNITY_API_BASE}/api/v1/public/ecosystem-metrics`,
    `${UNITY_API_BASE}/api/v1/web/ecosystem-metrics`,
  ]

  for (const url of candidateUrls) {
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 3500)

      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
        signal: controller.signal,
        cache: 'no-store',
      }).finally(() => clearTimeout(timeoutId))

      if (res.ok) {
        const json = await res.json()
        const data = json.data || json

        if (data && (data.peers !== undefined || data.formatted?.peers)) {
          const peersRaw = Number(data.peers?.raw ?? data.peers?.rawCount ?? data.peersCount ?? data.peers) || 10450
          const citiesRaw = Number(data.cities?.raw ?? data.cities?.rawCount ?? data.citiesCount ?? data.cities) || 48
          const countriesRaw = Number(data.countries?.raw ?? data.countries?.rawCount ?? data.countriesCount ?? data.countries) || 26
          const impactsRaw = Number(data.liveImpacts?.raw ?? data.liveImpacts?.rawCount ?? data.impactsCount ?? data.liveImpacts) || 1000000

          const peersDisplay = data.formatted?.peers || data.peers?.display || data.peers?.displayValue || formatNumber(peersRaw, 'peers')
          const citiesDisplay = data.formatted?.cities || data.cities?.display || data.cities?.displayValue || formatNumber(citiesRaw, 'cities')
          const countriesDisplay = data.formatted?.countries || data.countries?.display || data.countries?.displayValue || formatNumber(countriesRaw, 'countries')
          const rawImpactStr = String(data.formatted?.liveImpacts || '')
          const impactsDisplay = (rawImpactStr === '1.0M' ? '1M' : rawImpactStr) || data.liveImpacts?.display || data.liveImpacts?.displayValue || formatNumber(impactsRaw, 'liveImpacts')

          return NextResponse.json({
            success: true,
            data: {
              peers: {
                raw: peersRaw,
                display: peersDisplay,
                label: 'Peers',
              },
              cities: {
                raw: citiesRaw,
                display: citiesDisplay,
                label: 'Cities',
              },
              countries: {
                raw: countriesRaw,
                display: countriesDisplay,
                label: 'Countries',
              },
              liveImpacts: {
                raw: impactsRaw,
                display: impactsDisplay,
                label: 'Live Impacts',
              },
              updatedAt: data.updated_at || data.updatedAt || new Date().toISOString(),
              source: 'admin-api',
            },
          }, {
            headers: {
              'Cache-Control': 'public, s-maxage=180, stale-while-revalidate=300',
            },
          })
        }
      }
    } catch {
      // Continue to next URL or fallback
    }
  }

  // -------------------------------------------------------------------------
  // 2. Fallback to direct DB query if pool is available
  // -------------------------------------------------------------------------
  if (pool) {
    try {
      const [peersRes, citiesRes, countriesRes] = await Promise.all([
        pool.query(`SELECT COUNT(*)::int AS count FROM public.users`).catch(() => ({ rows: [] })),
        pool.query(`SELECT COUNT(DISTINCT LOWER(TRIM(city)))::int AS count FROM public.users WHERE city IS NOT NULL AND TRIM(city) != ''`).catch(() => ({ rows: [] })),
        pool.query(`SELECT COUNT(DISTINCT LOWER(TRIM(country)))::int AS count FROM public.users WHERE country IS NOT NULL AND TRIM(country) != ''`).catch(() => ({ rows: [] })),
      ])

      const peersCount = peersRes.rows[0]?.count || 0
      const citiesCount = citiesRes.rows[0]?.count || 0
      const countriesCount = countriesRes.rows[0]?.count || 0

      // Only use DB if meaningful data is present
      if (peersCount > 0) {
        const peersRaw = Math.max(peersCount, 10000)
        const citiesRaw = Math.max(citiesCount, 45)
        const countriesRaw = Math.max(countriesCount, 25)

        return NextResponse.json({
          success: true,
          data: {
            peers: {
              raw: peersRaw,
              display: formatNumber(peersRaw, 'peers'),
              label: 'Peers',
            },
            cities: {
              raw: citiesRaw,
              display: formatNumber(citiesRaw, 'cities'),
              label: 'Cities',
            },
            countries: {
              raw: countriesRaw,
              display: formatNumber(countriesRaw, 'countries'),
              label: 'Countries',
            },
            liveImpacts: {
              raw: 1000000,
              display: '1M',
              label: 'Live Impacts',
            },
            updatedAt: new Date().toISOString(),
            source: 'db-direct',
          },
        }, {
          headers: {
            'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
          },
        })
      }
    } catch {
      // Proceed to fallback
    }
  }

  // -------------------------------------------------------------------------
  // 3. Guaranteed Baseline Fallback
  // -------------------------------------------------------------------------
  return NextResponse.json({
    success: true,
    data: fallbackData,
  }, {
    headers: {
      'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
    },
  })
}
