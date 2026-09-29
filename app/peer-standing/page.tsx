import { Metadata } from 'next'
import { PeerStandingClient } from '@/components/currency/peer-standing-client'

export const metadata: Metadata = {
  title: 'Peer Standing | Peers Global',
  description:
    'Peer Standing is the recognition you earn through contribution — conferred by the entrepreneurs you helped, never purchased.',
  keywords: [
    'peer standing',
    'peer standing tiers',
    'business community reputation',
    'conferred status entrepreneurs',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/peer-standing',
  },
  openGraph: {
    title: 'Peer Standing | Peers Global',
    description:
      'Peer Standing is the recognition you earn through contribution — conferred by the entrepreneurs you helped, never purchased.',
    url: 'https://peersglobal.com/peer-standing',
    siteName: 'Peers Global',
    type: 'article',
  },
}

export default function PeerStandingPage() {
  return <PeerStandingClient />
}
