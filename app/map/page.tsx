import { Metadata } from 'next'
import { CircleMapClient } from '@/components/map/circle-map-client'

export const metadata: Metadata = {
  title: 'Where Peers Global Is | Circles, Cities & Countries',
  description:
    'Every live Circle, in every city and country. Find where this community meets.',
  keywords: [
    'business circles near me',
    'peers global map',
    'circle map India',
    'business networking cities',
    'entrepreneur circles India',
    'business community map',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/map',
  },
  openGraph: {
    title: 'Where Peers Global Is | Circles, Cities & Countries',
    description:
      'Every live Circle, in every city and country. Find where this community meets.',
    url: 'https://peersglobal.com/map',
    siteName: 'Peers Global',
    type: 'website',
  },
}

export default function MapPage() {
  return <CircleMapClient />
}
