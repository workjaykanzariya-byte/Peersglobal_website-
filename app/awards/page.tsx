import { Metadata } from 'next'
import { AwardsClient } from '@/components/community/awards-client'

export const metadata: Metadata = {
  title: 'Awards & Recognition | Peers Global',
  description:
    'We recognise contribution, not size. The Peers who gave the most, the collaborations that produced the most, the Circles that changed the most lives.',
  keywords: [
    'entrepreneur awards India',
    'business recognition',
    'life impactor of the year',
    'business collaboration awards',
    'circle of the year',
    'Peers Global recognition',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/awards',
  },
  openGraph: {
    title: 'Awards & Recognition | Peers Global',
    description:
      'We recognise contribution, not size. The Peers who gave the most, the collaborations that produced the most, the Circles that changed the most lives.',
    url: 'https://peersglobal.com/awards',
    siteName: 'Peers Global',
    type: 'website',
  },
}

export default function AwardsPage() {
  return <AwardsClient />
}
