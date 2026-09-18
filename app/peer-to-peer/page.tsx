import { Metadata } from 'next'
import { PeerToPeerClient } from '@/components/peer-to-peer/peer-to-peer-client'

export const metadata: Metadata = {
  title: 'Peer-to-Peer Meetings | Peers Global',
  description:
    'The one-to-one meeting between two Peers is where most real collaboration at Peers Global begins. How they work and why they matter.',
  keywords: [
    'one to one business meetings',
    'business relationship building',
    'entrepreneur one to one',
    'peer meetings India',
    'Unity app 1-to-1 sync',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/peer-to-peer',
  },
  openGraph: {
    title: 'Peer-to-Peer Meetings | Peers Global',
    description:
      'The one-to-one meeting between two Peers is where most real collaboration at Peers Global begins. How they work and why they matter.',
    url: 'https://peersglobal.com/peer-to-peer',
    siteName: 'Peers Global',
    type: 'article',
  },
}

export default function PeerToPeerPage() {
  return <PeerToPeerClient />
}
