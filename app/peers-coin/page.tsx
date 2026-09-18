import { Metadata } from 'next'
import { PeersCoinClient } from '@/components/currency/peers-coin-client'

export const metadata: Metadata = {
  title: 'Peers Coin | Peers Global',
  description:
    'Peers Coin is earned by helping other entrepreneurs and redeemed in the Peers Global Marketplace. It cannot be purchased.',
  keywords: [
    'peers coin',
    'community rewards entrepreneurs',
    'business community rewards programme',
    'earn peers coin',
    'Peers Global marketplace currency',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/peers-coin',
  },
  openGraph: {
    title: 'Peers Coin | Peers Global',
    description:
      'Peers Coin is earned by helping other entrepreneurs and redeemed in the Peers Global Marketplace. It cannot be purchased.',
    url: 'https://peersglobal.com/peers-coin',
    siteName: 'Peers Global',
    type: 'article',
  },
}

export default function PeersCoinPage() {
  return <PeersCoinClient />
}
