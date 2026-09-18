import { Metadata } from 'next'
import { HowToEarnImpactClient } from '@/components/currency/how-to-earn-impact-client'

export const metadata: Metadata = {
  title: 'How to Earn Impact | Peers Global',
  description:
    'Every way a Peer earns Life Impact at Peers Global, across the ten Ways of Collaboration.',
  keywords: [
    'how to earn impact peers global',
    'earn life impact score',
    'business collaboration ways',
    'peer contribution points',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/how-to-earn-impact',
  },
  openGraph: {
    title: 'How to Earn Impact | Peers Global',
    description:
      'Every way a Peer earns Life Impact at Peers Global, across the ten Ways of Collaboration.',
    url: 'https://peersglobal.com/how-to-earn-impact',
    siteName: 'Peers Global',
    type: 'article',
  },
}

export default function HowToEarnImpactPage() {
  return <HowToEarnImpactClient />
}
