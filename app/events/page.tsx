import type { Metadata } from 'next'
import { EventsPageClient } from '@/components/events/events-page-client'
import { fetchEvents } from '@/lib/api/unity'

export const metadata: Metadata = {
  title: 'Events & Summits | Peers Global',
  description:
    'Circle meetings, masterclasses, conclaves and the annual summit. See what is happening across the Peers Global community and register in the Unity App.',
  keywords: [
    'entrepreneur events India',
    'business networking events',
    'business summit India',
    'entrepreneur conclave',
    'circle meetings',
    'Peers Global summits',
    'meetup ahmedabad',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/events',
  },
  openGraph: {
    title: 'Events & Summits | Peers Global',
    description:
      'Circle meetings, masterclasses, conclaves and the annual summit. See what is happening across the Peers Global community and register in the Unity App.',
    url: 'https://peersglobal.com/events',
    siteName: 'Peers Global',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Events & Summits | Peers Global',
    description:
      'Circle meetings, masterclasses, conclaves and the annual summit. See what is happening across the Peers Global community and register in the Unity App.',
  },
}

export const dynamic = 'force-dynamic'

export default async function EventsPage() {
  const liveEvents = await fetchEvents('all')

  return <EventsPageClient initialEvents={liveEvents} />
}
