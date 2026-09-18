import { Metadata } from 'next'
import { CitiesClient } from '@/components/map/cities-client'

export const metadata: Metadata = {
  title: 'Cities | Peers Global',
  description:
    'Where the community meets. Browse cities across India and internationally, view active Circle counts, and connect with local entrepreneurs.',
  keywords: [
    'peers global cities',
    'business networking cities',
    'entrepreneur groups Mumbai',
    'business circles Ahmedabad',
    'entrepreneur community Bengaluru',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/cities',
  },
  openGraph: {
    title: 'Cities | Peers Global',
    description:
      'Where the community meets. Browse cities across India and internationally, view active Circle counts, and connect with local entrepreneurs.',
    url: 'https://peersglobal.com/cities',
    siteName: 'Peers Global',
    type: 'website',
  },
}

export default function CitiesPage() {
  return <CitiesClient />
}
