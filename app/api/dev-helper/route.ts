import { NextResponse } from 'next/server'
import pool from '@/lib/db'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  try {
    if (!pool) {
      return NextResponse.json({ error: 'No pool' })
    }
    const tablesRes = await pool.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
      ORDER BY table_name;
    `)

    // Also check if any table contains event or meeting or calendar
    const allTables = tablesRes.rows.map(r => r.table_name)

    const eventColsRes = await pool.query(`
      SELECT column_name, data_type 
      FROM information_schema.columns 
      WHERE table_name = 'events'
      ORDER BY ordinal_position;
    `)
    const eventCols = eventColsRes.rows

    const eventsData = await pool.query(`
      SELECT * FROM events LIMIT 20;
    `).catch(err => ({ rows: [], error: err.message }))

    const occurrencesCols = await pool.query(`
      SELECT column_name, data_type 
      FROM information_schema.columns 
      WHERE table_name = 'event_occurrences'
      ORDER BY ordinal_position;
    `).catch(() => ({ rows: [] }))

    const occurrencesData = await pool.query(`
      SELECT * FROM event_occurrences LIMIT 20;
    `).catch(() => ({ rows: [] }))

    return NextResponse.json({
      eventCols,
      eventsCount: eventsData.rows ? eventsData.rows.length : 0,
      events: eventsData.rows,
      occurrencesCols: occurrencesCols.rows,
      occurrences: occurrencesData.rows,
    })
  } catch (err: any) {
    return NextResponse.json({ error: err.message })
  }
}


