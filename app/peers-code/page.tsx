import { Metadata } from 'next'
import { PeersCodeClient } from '@/components/legal/peers-code-client'

export const metadata: Metadata = {
  title: 'The Peers Code | Peers Global',
  description:
    'Six commitments. Every Peer makes them. Every leader upholds them. Give first, show up, tell the truth, protect the room, respect every Peer, and carry the culture.',
  keywords: [
    'the peers code',
    'peers global code of conduct',
    'give first principle',
    'entrepreneur ethics',
    'business community culture',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/peers-code',
  },
  openGraph: {
    title: 'The Peers Code | Peers Global',
    description:
      'Six commitments. Every Peer makes them. Every leader upholds them.',
    url: 'https://peersglobal.com/peers-code',
    siteName: 'Peers Global',
    type: 'website',
  },
}

export default function PeersCodePage() {
  return <PeersCodeClient />
}
