import { NextResponse } from 'next/server'
import pool from '@/lib/db'
import { CIRCLES, Circle } from '@/lib/data/circles'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const cityQuery = searchParams.get('city')?.toLowerCase().trim()

  let databaseCircles: Circle[] = []

  try {
    if (pool) {
      const res = await pool.query(`
        SELECT 
          c.id,
          c.name,
          c.slug,
          c.description,
          c.purpose,
          c.status,
          c.type,
          c.current_members,
          c.target_members,
          c.created_at,
          ci.name as city_name,
          ci.state as state_name
        FROM circles c
        LEFT JOIN cities ci ON c.city_id = ci.id
        WHERE c.deleted_at IS NULL
        ORDER BY c.created_at DESC
      `).catch(async () => {
        return pool.query(`
          SELECT 
            c.id,
            c.name,
            c.slug,
            c.description,
            c.purpose,
            c.status,
            c.type,
            c.created_at,
            ci.name as city_name
          FROM circles c
          LEFT JOIN cities ci ON c.city_id = ci.id
          WHERE c.deleted_at IS NULL
          ORDER BY c.created_at DESC
        `)
      })

      if (res && res.rows && res.rows.length > 0) {
        databaseCircles = res.rows.map((row: any) => {
          const matchedStatic = CIRCLES.find(
            (sc) =>
              sc.slug.toLowerCase() === (row.slug || '').toLowerCase() ||
              sc.name.toLowerCase() === (row.name || '').toLowerCase()
          )

          const cityName =
            row.city_name ||
            (row.name.toLowerCase().includes('ahmedabad')
              ? 'Ahmedabad'
              : row.name.toLowerCase().includes('vadodara')
              ? 'Vadodara'
              : row.name.toLowerCase().includes('mumbai')
              ? 'Mumbai'
              : row.name.toLowerCase().includes('bengaluru')
              ? 'Bengaluru'
              : row.name.toLowerCase().includes('delhi')
              ? 'Delhi'
              : row.name.toLowerCase().includes('rajkot')
              ? 'Rajkot'
              : row.name.toLowerCase().includes('surat')
              ? 'Surat'
              : 'Ahmedabad')

          const cities: string[] = matchedStatic ? [...matchedStatic.cities] : [cityName]
          if (row.city_name && !cities.some((c) => c.toLowerCase() === row.city_name.toLowerCase())) {
            cities.unshift(row.city_name)
          }

          return {
            slug: row.slug || row.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
            name: row.name,
            type: row.type === 'industry' || row.type === 'private' ? 'industry' : 'purpose',
            tagline: row.purpose || matchedStatic?.tagline || `Governed Circle for entrepreneurs and leaders in ${cityName}.`,
            summary: row.description || matchedStatic?.summary || `A platform designed for entrepreneurs and business leaders to connect, collaborate, and scale in ${cityName}.`,
            body: matchedStatic?.body || [row.description || 'Exclusive circle for business collaboration and peer exchange.'],
            members: row.current_members || matchedStatic?.members || 0,
            cities: cities,
            cadence: matchedStatic?.cadence || 'Monthly · In-person · 150 minutes',
            nextMeeting: matchedStatic?.nextMeeting || 'Third Thursday of every month',
            focus: matchedStatic?.focus || ['Business Growth', 'Peer Collaboration', 'Market Expansion'],
            eligibility: matchedStatic?.eligibility || ['Founder, Director or Promoter with decision authority'],
            founder: matchedStatic?.founder || {
              name: 'Peers Global Founder',
              role: 'Circle Founder',
              company: 'Peers Global',
              city: cityName,
            },
            testimonials: matchedStatic?.testimonials || [],
            faqs: matchedStatic?.faqs || [],
            seatsOpen: (row.target_members || 30) - (row.current_members || 0) || matchedStatic?.seatsOpen || 30,
          }
        })
      }
    }
  } catch (err) {
    console.warn('PostgreSQL circles query error:', (err as Error).message)
  }

  // Merge database circles with static CIRCLES (avoiding duplicates by slug)
  const combinedMap = new Map<string, Circle>()

  // 1. Add static circles first
  CIRCLES.forEach((c) => {
    combinedMap.set(c.slug.toLowerCase().trim(), c)
  })

  // 2. Add or overwrite with database circles
  databaseCircles.forEach((c) => {
    const existing = combinedMap.get(c.slug.toLowerCase().trim())
    if (existing) {
      combinedMap.set(c.slug.toLowerCase().trim(), {
        ...existing,
        ...c,
        cities: Array.from(new Set([...existing.cities, ...c.cities])),
      })
    } else {
      combinedMap.set(c.slug.toLowerCase().trim(), c)
    }
  })

  let allCircles = Array.from(combinedMap.values())

  if (cityQuery && cityQuery !== 'all' && cityQuery !== 'all cities') {
    allCircles = allCircles.filter(
      (c) =>
        c.cities.some((ci) => ci.toLowerCase() === cityQuery || ci.toLowerCase().includes(cityQuery)) ||
        c.name.toLowerCase().includes(cityQuery)
    )
  }

  return NextResponse.json({
    success: true,
    total: allCircles.length,
    circles: allCircles,
  })
}
