import { Metadata } from 'next'
import { BringToMyCityClient } from '@/components/circles/bring-to-my-city-client'

export const metadata: Metadata = {
  title: 'Bring Peers Global to Your City | Peers Global',
  description:
    'No Circle in your city yet? Tell us. The entrepreneurs who bring this community to a new city are the ones who shape it there.',
  keywords: [
    'start business community my city',
    'bring entrepreneur network to city',
    'business circle new city India',
    'circle founder application',
    'peers global city launch',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/bring-to-my-city',
  },
  openGraph: {
    title: 'Bring Peers Global to Your City | Peers Global',
    description:
      'No Circle in your city yet? Tell us. The entrepreneurs who bring this community to a new city are the ones who shape it there.',
    url: 'https://peersglobal.com/bring-to-my-city',
    siteName: 'Peers Global',
    type: 'website',
  },
}

export default function BringToMyCityPage() {
  return <BringToMyCityClient />
}
