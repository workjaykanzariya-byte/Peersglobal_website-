import { NextResponse } from 'next/server'
import pool from '@/lib/db'
import { EVENTS, EventRecord } from '@/lib/data/events'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const UNITY_API_URL = 'https://peersunity.com/api/v1/events/all?status=upcoming'

export async function GET() {
  // 1. Try fetching live upcoming events from https://peersunity.com/api/v1/events/all?status=upcoming
  try {
    const remoteRes = await fetch(UNITY_API_URL, {
      headers: {
        Accept: 'application/json',
      },
      next: { revalidate: 0 },
      cache: 'no-store',
      signal: AbortSignal.timeout(6000),
    })

    if (remoteRes.ok) {
      const remoteJson = await remoteRes.json()
      const dataObj = remoteJson.data || remoteJson
      const upcomingList = dataObj.upcoming_events || dataObj.events || []

      if (Array.isArray(upcomingList) && upcomingList.length > 0) {
        const mappedEvents: EventRecord[] = upcomingList.map((item: any, idx: number) => {
          const rawDate = item.start_at || item.formatted_start_at
          const dateObj = rawDate ? new Date(rawDate) : new Date()
          const isoDate = !isNaN(dateObj.getTime()) ? dateObj.toISOString().split('T')[0] : new Date().toISOString().split('T')[0]
          
          const formattedDate = !isNaN(dateObj.getTime()) 
            ? dateObj.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
            : (item.formatted_start_at || 'Upcoming')

          const time = item.formatted_start_at ? item.formatted_start_at.split(' ').slice(3).join(' ') : '10:00 – 14:00 IST'
          const title = item.title || 'Peers Global Event'
          const baseSlug = (item.slug || title).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'event'
          const slug = item.event_id ? `${baseSlug}-${item.event_id}` : `${baseSlug}-${idx + 1}`

          let kind: EventRecord['kind'] = 'Circle Meeting'
          const rawType = (item.event_type || item.event_category || '').toLowerCase()
          if (rawType.includes('conclave')) kind = 'Conclave'
          else if (rawType.includes('summit') || rawType.includes('leadership')) kind = 'Leadership Summit'
          else if (rawType.includes('mixer')) kind = 'City Mixer'
          else if (rawType.includes('masterclass')) kind = 'Masterclass'
          else if (rawType.includes('circle') || rawType.includes('meeting')) kind = 'Circle Meeting'

          const city = item.location ? item.location.split(',').slice(-2, -1)[0]?.trim() || item.location.split(',')[0]?.trim() || 'Ahmedabad' : 'Ahmedabad'
          const venue = item.location || 'Peers Global House'
          const attending = item.registered_count || 45
          const capacity = item.capacity || 100
          const summary = item.description || `Join fellow promoters and business leaders for ${title} with Peers Global.`
          const imageUrl = item.image_url || '/images/conclave.png'

          return {
            slug,
            title,
            kind,
            date: formattedDate,
            isoDate,
            time: time || '06:00 AM IST',
            city,
            venue,
            status: 'upcoming' as const,
            priority: idx === 0,
            attending,
            capacity,
            price: 'Included for Members · Registration required',
            summary,
            body: [summary],
            agenda: [
              { time: '06:00 AM', title: 'Registration & Open Networking' },
              { time: '07:00 AM', title: 'Structured Meeting & Collaboration' },
              { time: '08:30 AM', title: 'Referral Exchange & Breakfast' },
            ],
            speakers: [
              { name: 'Dr. Pravin Parmar', role: 'Founder', company: 'Peers Global', city: 'Ahmedabad' },
            ],
            circles: item.circle_id ? [String(item.circle_id)] : [],
            faqs: [
              { q: 'Can non-members attend?', a: 'Guest passes are available by registering in advance.' },
            ],
            image_url: imageUrl,
          }
        })

        return NextResponse.json({
          success: true,
          total: mappedEvents.length,
          data: mappedEvents,
          allEvents: mappedEvents,
          source: 'peersunity_api',
        })
      }
    }
  } catch (err: any) {
    console.warn('Live Unity API fetch failed, trying local DB / fallback:', err.message)
  }

  // 2. Database fallback
  try {
    if (pool) {
      const eventsQuery = await pool.query(`
        SELECT 
          e.*,
          c.name as circle_name,
          ct.name as city_name
        FROM events e
        LEFT JOIN circles c ON e.circle_id = c.id
        LEFT JOIN cities ct ON e.city_id = ct.id
        WHERE (e.is_deleted = false OR e.is_deleted IS NULL)
        ORDER BY COALESCE(e.start_date, e.event_date, e.created_at) ASC;
      `).catch(async () => {
        return await pool.query(`SELECT * FROM events ORDER BY id DESC;`).catch(() => ({ rows: [] }))
      })

      if (eventsQuery.rows && eventsQuery.rows.length > 0) {
        const dbEvents = eventsQuery.rows
        const mappedEvents: EventRecord[] = dbEvents.map((row: any, idx: number) => {
          const rawDate = row.start_date || row.event_date || row.date || row.created_at
          const dateObj = rawDate ? new Date(rawDate) : new Date()
          const isoDate = dateObj.toISOString().split('T')[0]
          
          const formattedDate = dateObj.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })

          const now = new Date()
          const isUpcoming = row.status ? (row.status.toLowerCase() === 'upcoming' || row.status.toLowerCase() === 'published' || row.status.toLowerCase() === 'active') : (dateObj >= now)

          const title = row.title || row.name || row.event_name || 'Peers Global Event'
          const baseSlug = (row.slug || title).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || `event`
          const slug = row.id ? `${baseSlug}-${row.id}` : `${baseSlug}-${idx + 1}`
          
          let kind: EventRecord['kind'] = 'Circle Meeting'
          const rawKind = (row.event_type || row.type || row.kind || row.category || '').toLowerCase()
          if (rawKind.includes('conclave') || rawKind.includes('annual')) kind = 'Conclave'
          else if (rawKind.includes('summit') || rawKind.includes('leadership')) kind = 'Leadership Summit'
          else if (rawKind.includes('mixer') || rawKind.includes('city')) kind = 'City Mixer'
          else if (rawKind.includes('masterclass') || rawKind.includes('workshop')) kind = 'Masterclass'
          else if (rawKind.includes('circle') || rawKind.includes('meeting')) kind = 'Circle Meeting'

          const time = row.time || (row.start_time ? `${row.start_time} – ${row.end_time || ''} IST` : '10:00 – 14:00 IST')
          const city = row.city_name || row.city || 'Ahmedabad'
          const venue = row.venue || row.location || 'Peers Global House'
          const attending = parseInt(row.registered_count || row.attending || row.attendee_count || '45', 10)
          const capacity = parseInt(row.capacity || row.max_attendees || '100', 10)
          const price = row.price || row.fee || (row.is_paid ? `₹${row.ticket_price || '2,500'}` : 'Included for Members · Registration required')
          const summary = row.summary || row.description || row.short_description || 'Join entrepreneurs and promoters across industries for an exclusive Peers Global session.'
          const imageUrl = row.image_url || row.image || '/images/conclave.png'

          return {
            slug,
            title,
            kind,
            date: formattedDate,
            isoDate,
            time,
            city,
            venue,
            status: isUpcoming ? 'upcoming' : 'past',
            priority: Boolean(row.priority || row.is_featured || idx === 0),
            attending: isNaN(attending) ? 50 : attending,
            capacity: isNaN(capacity) ? 100 : capacity,
            price,
            summary,
            body: row.body ? (Array.isArray(row.body) ? row.body : [row.body]) : [summary],
            agenda: Array.isArray(row.agenda) ? row.agenda : [
              { time: '10:00', title: 'Registration & Welcome' },
              { time: '11:00', title: 'Keynote & Peer Collaboration Sessions' },
              { time: '13:00', title: 'Structured Networking & Lunch' },
            ],
            speakers: Array.isArray(row.speakers) ? row.speakers : [
              { name: 'Dr. Pravin Parmar', role: 'Founder', company: 'Peers Global', city: 'Ahmedabad' },
            ],
            circles: Array.isArray(row.circles) ? row.circles : [],
            faqs: Array.isArray(row.faqs) ? row.faqs : [
              { q: 'Can non-members attend?', a: 'Explorer passes are limited and subject to review.' },
            ],
            image_url: imageUrl,
          }
        })

        const upcomingOnly = mappedEvents.filter(e => {
          if (e.status === 'upcoming') return true
          const dateObj = new Date(e.isoDate)
          const now = new Date()
          return dateObj >= now
        })
        const finalEvents = upcomingOnly.length > 0 ? upcomingOnly : mappedEvents

        return NextResponse.json({
          success: true,
          total: finalEvents.length,
          data: finalEvents,
          allEvents: mappedEvents,
          source: 'database_events',
        })
      }
    }
  } catch (err: any) {
    console.warn('PostgreSQL events fetch failed:', err.message)
  }

  // 3. Fallback to static EVENTS (upcoming only)
  const upcomingEvents = EVENTS.filter(e => e.status === 'upcoming')
  return NextResponse.json({
    success: true,
    total: upcomingEvents.length,
    data: upcomingEvents,
    allEvents: EVENTS,
    source: 'fallback',
  })
}
