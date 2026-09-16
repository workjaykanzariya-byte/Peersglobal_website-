import type { Metadata } from 'next'
import { EventsPageClient } from '@/components/events/events-page-client'

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Conclaves, city mixers, and open Circle meetings. Explorers welcome at everything marked open. Live attendance counts. Filter by city.',
}

export default function EventsPage() {
  return <EventsPageClient />
}
