import { Metadata } from 'next'
import { PeersCoinClient } from '@/components/currency/peers-coin-client'

export const metadata: Metadata = {
  title: 'Peers Coin — Token of Recognition | Peers Global',
  description:
    'Peers Coin is one way Peers Global recognises the spirit of contribution. Earned through verified peer collaboration, never purchased.',
  keywords: [
    'peers coin',
    'community rewards entrepreneurs',
    'give first recognition',
    'earn peers coin',
    'Peers Global marketplace currency',
    'non-financial token of appreciation',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/peers-coin',
  },
  openGraph: {
    title: 'Peers Coin — Token of Recognition | Peers Global',
    description:
      'Peers Coin is one way Peers Global recognises the spirit of contribution. Earned through verified peer collaboration, never purchased.',
    url: 'https://peersglobal.com/peers-coin',
    siteName: 'Peers Global',
    type: 'article',
  },
}

export default function PeersCoinPage() {
  return <PeersCoinClient />
}
