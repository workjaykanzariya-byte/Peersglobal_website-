import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { EventDetailClient, EventDetailData } from '@/components/events/event-detail-client'
import { getEvent } from '@/lib/data/events'

export const dynamic = 'force-dynamic'

async function fetchEventDetails(slug: string): Promise<EventDetailData | null> {
  const decodedSlug = decodeURIComponent(slug).trim().toLowerCase()

  // 1. Fetch live from Unity backend API
  try {
    const res = await fetch(`https://peersunity.com/api/v1/events/all?status=all`, {
      headers: { Accept: 'application/json' },
      cache: 'no-store',
    })

    if (res.ok) {
      const json = await res.json()
      const dataObj = json.data || json
      const list = [
        ...(dataObj.upcoming_events || []),
        ...(dataObj.live_events || []),
        ...(dataObj.today_events || []),
        ...(dataObj.events || []),
      ]

      const matched = list.find((item: any) => {
        const itemTitleSlug = (item.title || '')
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '')
        const itemId = (item.event_id || item.id || '').toLowerCase()
        const itemOccId = (item.occurrence_id || '').toLowerCase()

        return (
          itemId === decodedSlug ||
          itemOccId === decodedSlug ||
          itemTitleSlug === decodedSlug ||
          decodedSlug.includes(itemId) ||
          itemId.includes(decodedSlug) ||
          itemTitleSlug.includes(decodedSlug)
        )
      })

      if (matched) {
        const title = matched.title || 'Peers Global Event'
        const rawDate = matched.start_at || matched.formatted_start_at
        const dateObj = rawDate ? new Date(rawDate) : new Date()
        const formattedDate = !isNaN(dateObj.getTime())
          ? dateObj.toLocaleDateString('en-US', {
              weekday: 'short',
              month: 'short',
              day: 'numeric',
            })
          : 'Upcoming'
        const fullDate = !isNaN(dateObj.getTime())
          ? dateObj.toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })
          : 'Upcoming'

        const time = matched.formatted_start_at
          ? matched.formatted_start_at.split(' ').slice(3).join(' ') || '08:00 AM – 11:30 AM IST'
          : '08:00 AM – 11:30 AM IST'
        const venue = matched.location ? matched.location.split(',')[0]?.trim() : 'Fortune Select SG Highway'
        const fullAddress = matched.location || 'Fortune Select SG Highway, Ahmedabad, Gujarat, India'
        const city = fullAddress.split(',').slice(-2, -1)[0]?.trim() || 'Ahmedabad'
        const circleName = matched.circle?.name || 'MSME ONE Ahmedabad'
        const circleSlug = matched.circle?.slug || 'msme-one-ahmedabad'
        const imageUrl = matched.image_url || '/images/executive-director-conclave.jpg'
        const summary =
          matched.description ||
          `Join validated business promoters, founders, and leaders for ${title} with ${circleName}. This circle meeting brings together entrepreneurs to build partnerships, discuss growth opportunities, and strengthen the business ecosystem.`

        return {
          slug: decodedSlug,
          event_id: matched.event_id || matched.id || decodedSlug,
          occurrence_id: matched.occurrence_id || null,
          title,
          subtitle: 'Connect. Collaborate. Create Opportunities.',
          kind: matched.event_type || 'Circle Meeting',
          date: formattedDate,
          fullDate,
          isoDate: !isNaN(dateObj.getTime()) ? dateObj.toISOString().split('T')[0] : '',
          time,
          formatted_start_at: `${fullDate} · ${time}`,
          city,
          venue,
          fullAddress,
          status: matched.status || 'upcoming',
          attending: matched.registered_count || 42,
          capacity: 120,
          price: matched.event_type?.toLowerCase().includes('conclave') ? '₹1,500' : 'Free for Members',
          summary,
          body: [
            `Join validated business promoters, founders, and leaders for ${title} with ${circleName}.`,
            `This circle meeting brings together business promoters, founders, and CXOs to build strategic partnerships, referral mandates, and peer-to-peer collaboration.`,
            `Attendance is strictly reserved for verified members and registered guests.`,
          ],
          agenda: [
            { time: '08:00 AM', title: 'Registration & Welcome Coffee', detail: 'Check-in and open networking' },
            { time: '08:30 AM', title: 'Structured Peer Collaboration & Circle Introduction', detail: 'Focus on strategic partnerships and synergies' },
            { time: '09:30 AM', title: 'Business Updates & Referral Mandates', detail: 'Actionable opportunities logged to Unity' },
            { time: '10:30 AM', title: 'Open Networking & 1-on-1 Meetings', detail: 'Pre-scheduled and on-spot meetings' },
            { time: '11:30 AM', title: 'Closing & Next Steps', detail: 'Direct 1-on-1 interaction' },
          ],
          speakers: [
            { name: 'Dr. Pravin Parmar', role: 'Founder & Convener', company: 'Peers Global', city: 'Ahmedabad' },
          ],
          hostName: 'Dr. Pravin Parmar',
          hostRole: 'Super Organizer',
          circleName,
          circleSlug,
          circleMembersCount: 120,
          rating: 4.8,
          reviewsCount: 814,
          image_url: imageUrl,
          sponsors: [
            { name: 'Peers Global Network', desc: 'Community of Collaboration & Enterprise Growth' },
          ],
          faqs: [
            { q: 'Can non-members attend as guests?', a: 'Yes, guest passes are permitted upon registration and organizer review.' },
            { q: 'What is the dress code?', a: 'Business formal / sharp business casual.' },
            { q: 'How do I submit referral mandates?', a: 'Referral mandates can be logged live through the Unity App during the session.' },
          ],
        }
      }
    }
  } catch (err) {
    console.warn('[events] fetchEventDetails error:', err)
  }

  // 2. Check catalog fallback
  const staticEv = getEvent(decodedSlug)
  if (staticEv) {
    return {
      slug: staticEv.slug,
      event_id: staticEv.slug,
      title: staticEv.title,
      kind: staticEv.kind,
      date: staticEv.date,
      isoDate: staticEv.isoDate,
      time: staticEv.time,
      formatted_start_at: `${staticEv.date} · ${staticEv.time}`,
      city: staticEv.city,
      venue: staticEv.venue,
      fullAddress: `${staticEv.venue}, ${staticEv.city}, Gujarat, India`,
      status: staticEv.status,
      attending: staticEv.attending,
      capacity: staticEv.capacity,
      price: staticEv.price,
      summary: staticEv.summary,
      body: staticEv.body,
      agenda: staticEv.agenda,
      speakers: staticEv.speakers,
      hostName: staticEv.speakers[0]?.name || 'Dr. Pravin Parmar',
      hostRole: staticEv.speakers[0]?.role || 'Circle Director',
      circleName: 'Peers Global Circle',
      circleSlug: 'peers-circle',
      circleMembersCount: 120,
      rating: 4.8,
      reviewsCount: 814,
      image_url: staticEv.image_url || '/images/executive-director-conclave.jpg',
      sponsors: [
        { name: 'Peers Global Network', desc: 'Community of Collaboration & Enterprise Growth' },
      ],
      faqs: staticEv.faqs,
    }
  }

  return null
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const event = await fetchEventDetails(slug)
  if (!event) return { title: 'Event Not Found | Peers Global' }

  return {
    title: `${event.title} | Peers Global Events`,
    description: event.summary,
    openGraph: {
      title: `${event.title} | Peers Global Events`,
      description: event.summary,
      images: [event.image_url],
    },
  }
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const event = await fetchEventDetails(slug)

  if (!event) return notFound()

  return <EventDetailClient event={event} />
}
