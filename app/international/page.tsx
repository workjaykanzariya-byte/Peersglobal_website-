import { Metadata } from 'next'
import { InternationalExpansionClient } from '@/components/map/international-expansion-client'

export const metadata: Metadata = {
  title: 'International | Peers Global',
  description:
    'Designed in Bharat. Built for the world. Explore our international presence across Dubai, Singapore, London, and global cross-border trade circles.',
  keywords: [
    'international business community',
    'peers global international',
    'cross border entrepreneur circle',
    'global MSME trade',
    'Dubai business networking',
    'Singapore entrepreneur circle',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/international',
  },
  openGraph: {
    title: 'International | Peers Global',
    description:
      'Designed in Bharat. Built for the world. Explore our international presence across Dubai, Singapore, London, and global cross-border trade circles.',
    url: 'https://peersglobal.com/international',
    siteName: 'Peers Global',
    type: 'website',
  },
}

export default function InternationalPage() {
  return <InternationalExpansionClient />
}
