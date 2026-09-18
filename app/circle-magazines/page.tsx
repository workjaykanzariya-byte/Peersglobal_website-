import { Metadata } from 'next'
import { CircleMagazinesClient } from '@/components/circles/circle-magazines-client'

export const metadata: Metadata = {
  title: 'Circle Magazines | Peers Global',
  description:
    'Every Circle publishes its own magazine — its Peers, its collaborations, its year. Read them here.',
  keywords: [
    'circle magazines peers global',
    'business community magazine',
    'entrepreneur publication India',
    'peer collaboration archive',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/circle-magazines',
  },
  openGraph: {
    title: 'Circle Magazines | Peers Global',
    description:
      'Every Circle publishes its own magazine — its Peers, its collaborations, its year. Read them here.',
    url: 'https://peersglobal.com/circle-magazines',
    siteName: 'Peers Global',
    type: 'article',
  },
}

export default function CircleMagazinesPage() {
  return <CircleMagazinesClient />
}
