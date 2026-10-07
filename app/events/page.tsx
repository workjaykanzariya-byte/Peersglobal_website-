import type { Metadata } from 'next'
import { EventsPageClient } from '@/components/events/events-page-client'
import { fetchEvents } from '@/lib/api/unity'

export const metadata: Metadata = {
  title: 'Events | Membership is an Ongoing Journey | Peers Global',
  description:
    'Throughout the year, PEERS GLOBAL creates opportunities to meet beyond the regular Circle rhythm. Monthly Circle Meetings, Mega Networking, MindMeld, Retreats, Family Meetups, Awards and Summits.',
  keywords: [
    'peers global events',
    'entrepreneur events India',
    'mindmeld meetup',
    'circle director retreat',
    'regional conclave summit',
    'peers global awards ceremony',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/events',
  },
  openGraph: {
    title: 'Events | Membership is an Ongoing Journey | Peers Global',
    description:
      'Throughout the year, PEERS GLOBAL creates opportunities to meet beyond the regular Circle rhythm. Monthly Circle Meetings, Mega Networking, MindMeld, Retreats, Family Meetups, Awards and Summits.',
    url: 'https://peersglobal.com/events',
    siteName: 'Peers Global',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Events | Membership is an Ongoing Journey | Peers Global',
    description:
      'Throughout the year, PEERS GLOBAL creates opportunities to meet beyond the regular Circle rhythm. Monthly Circle Meetings, Mega Networking, MindMeld, Retreats, Family Meetups, Awards and Summits.',
  },
}

export const dynamic = 'force-dynamic'

export default async function EventsPage() {
  const liveEvents = await fetchEvents('all')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EventSeries',
    name: 'Peers Global Annual Events & Conclaves',
    description:
      'A global calendar of entrepreneur gatherings: Circle meetings, MindMeld, Mega Networking, Leadership Retreats, and Regional Summits.',
    organizer: {
      '@type': 'Organization',
      name: 'Peers Global',
      url: 'https://peersglobal.com',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EventsPageClient initialEvents={liveEvents} />
    </>
  )
}
