import { NextResponse } from 'next/server'
import pool from '@/lib/db'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://peersunity.com'

export interface CollaborationStory {
  id: string | number
  category: string
  location: string
  outcome: string
  outcomeLabel: string
  collab: string
  cornerGradient?: string
  peer1: {
    name: string
    company: string
    city: string
    avatar?: string
  }
  peer2: {
    name: string
    company: string
    city: string
    avatar?: string
  }
  badge: {
    text: string
    iconName?: string
  }
}

export async function GET() {
  // 1. Try fetching from Database (PostgreSQL) — Top 10 Records
  try {
    if (pool) {
      // Find matching collaboration tables in public schema
      const tablesResult = await pool.query(`
        SELECT table_name 
        FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name IN ('collaborations', 'partnerships', 'peer_collaborations', 'synergies', 'real_collaborations')
        LIMIT 1;
      `)

      if (tablesResult.rows && tablesResult.rows.length > 0) {
        const tableName = tablesResult.rows[0].table_name

        const result = await pool.query(`
          SELECT * FROM "${tableName}" 
          ORDER BY id DESC 
          LIMIT 10;
        `)

        if (result.rows && result.rows.length > 0) {
          const mapped: CollaborationStory[] = result.rows.map((row: any, idx: number) => {
            const val = row.outcome || row.value || row.amount || row.deal_size || '₹ 2.5 Cr'
            const formattedVal = typeof val === 'number' ? `₹ ${(val / 10000000).toFixed(1)} Cr` : String(val)

            return {
              id: row.id || idx + 1,
              category: (row.category || row.sector || row.industry || 'SUPPLY CHAIN').toUpperCase(),
              location: row.location || row.route || `${row.city_a || row.city1 || 'Ahmedabad'} ↔ ${row.city_b || row.city2 || 'Mumbai'}`,
              outcome: formattedVal.startsWith('₹') ? formattedVal : `₹ ${formattedVal}`,
              outcomeLabel: (row.outcome_label || row.outcomeLabel || row.label || 'IN CONTRACT VALUE GENERATED').toUpperCase(),
              collab: row.collab || row.description || row.title || '“Strategic peer collaboration delivering measurable enterprise growth.”',
              peer1: {
                name: row.peer1_name || row.promoter_a || row.promoter1 || row.partner_a || row.name1 || row.company_a || row.companya || 'Rajesh Shah',
                company: row.peer1_company || row.companya || row.company_a || row.company1 || 'Apex Logistics',
                city: row.peer1_city || row.city_a || row.city1 || 'Ahmedabad',
                avatar: row.peer1_avatar || row.avatar_a || '/images/peers-avatars/rajesh-shah.jpg',
              },
              peer2: {
                name: row.peer2_name || row.promoter_b || row.promoter2 || row.partner_b || row.name2 || row.company_b || row.companyb || 'Vikram Patel',
                company: row.peer2_company || row.companyb || row.company_b || row.company2 || 'Om Packaging',
                city: row.peer2_city || row.city_b || row.city2 || 'Surat',
                avatar: row.peer2_avatar || row.avatar_b || '/images/peers-avatars/vikram-patel.jpg',
              },
              badge: {
                text: row.badge_text || row.badgeText || row.status || 'Long-term partnership established',
                iconName: row.badge_icon || 'BarChart3',
              },
            }
          })

          return NextResponse.json({
            success: true,
            total: mapped.length,
            data: mapped,
            source: 'database',
          })
        }
      }
    }
  } catch (dbErr) {
    console.warn('PostgreSQL collaboration query failed or DB offline:', (dbErr as Error).message)
  }

  // 2. Try fetching from Unity API backend (Top 10)
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/collaborations?limit=10`, {
      headers: { Accept: 'application/json' },
      next: { revalidate: 10 },
    })

    if (res.ok) {
      const json = await res.json()
      const items = json.data?.data || json.data || json
      if (Array.isArray(items) && items.length > 0) {
        const top10 = items.slice(0, 10)
        return NextResponse.json({
          success: true,
          total: top10.length,
          data: top10,
          source: 'api',
        })
      }
    }
  } catch (apiErr) {
    console.warn('Unity API collaboration fetch failed:', (apiErr as Error).message)
  }

  // 3. If no database records found, return empty array
  return NextResponse.json({
    success: true,
    total: 0,
    data: [],
    source: 'empty',
  })
}

export async function POST(req: Request) {
  try {
    const body = await req.json()

    if (pool) {
      await pool.query(`
        CREATE TABLE IF NOT EXISTS collaborations (
          id SERIAL PRIMARY KEY,
          category VARCHAR(255),
          location VARCHAR(255),
          outcome VARCHAR(255),
          outcome_label VARCHAR(255),
          collab TEXT,
          peer1_name VARCHAR(255),
          peer1_company VARCHAR(255),
          peer1_city VARCHAR(255),
          peer1_avatar VARCHAR(500),
          peer2_name VARCHAR(255),
          peer2_company VARCHAR(255),
          peer2_city VARCHAR(255),
          peer2_avatar VARCHAR(500),
          badge_text VARCHAR(255),
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `)

      const insertQuery = `
        INSERT INTO collaborations (
          category, location, outcome, outcome_label, collab,
          peer1_name, peer1_company, peer1_city, peer1_avatar,
          peer2_name, peer2_company, peer2_city, peer2_avatar,
          badge_text
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
        RETURNING *;
      `
      const values = [
        body.category || 'SUPPLY CHAIN',
        body.location || 'India',
        body.outcome || '₹ 2.5 Cr',
        body.outcomeLabel || 'IN VALUE GENERATED',
        body.collab || '',
        body.peer1?.name || '',
        body.peer1?.company || '',
        body.peer1?.city || '',
        body.peer1?.avatar || '/images/peers-avatars/rajesh-shah.jpg',
        body.peer2?.name || '',
        body.peer2?.company || '',
        body.peer2?.city || '',
        body.peer2?.avatar || '/images/peers-avatars/vikram-patel.jpg',
        body.badge?.text || 'Partnership established',
      ]

      const result = await pool.query(insertQuery, values)
      return NextResponse.json({ success: true, data: result.rows[0] }, { status: 201 })
    }

    return NextResponse.json({ success: true, data: body, message: 'Saved' })
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 })
  }
}
