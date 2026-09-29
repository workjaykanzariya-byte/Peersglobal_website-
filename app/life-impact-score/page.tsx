import { Metadata } from 'next'
import { LifeImpactScoreClient } from '@/components/currency/life-impact-score-client'

export const metadata: Metadata = {
  title: 'Life Impact Score | Peers Global',
  description:
    'Your Life Impact Score is the record of what you have given to other entrepreneurs — logged in the Unity App and confirmed by the Peer who received it.',
  keywords: [
    'life impact score',
    'contribution tracking business community',
    'business giving record',
    'Peers Global impact currency',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/life-impact-score',
  },
  openGraph: {
    title: 'Life Impact Score | Peers Global',
    description:
      'Your Life Impact Score is the record of what you have given to other entrepreneurs — logged in the Unity App and confirmed by the Peer who received it.',
    url: 'https://peersglobal.com/life-impact-score',
    siteName: 'Peers Global',
    type: 'article',
  },
}

export default function LifeImpactScorePage() {
  return <LifeImpactScoreClient />
}
