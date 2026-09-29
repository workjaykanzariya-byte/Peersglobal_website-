import { Metadata } from 'next'
import { WatchlistClient } from '@/components/watchlist/watchlist-client'

export const metadata: Metadata = {
  title: 'The Watchlist | Tools Peers Actually Use',
  description:
    'A working library of tools, books and resources — every one recommended by a Peer who has used it to build their own business.',
  keywords: [
    'business tools recommended by entrepreneurs',
    'best business tools India',
    'entrepreneur resources',
    'business software recommendations',
    'MSME software tools India',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/watchlist',
  },
  openGraph: {
    title: 'The Watchlist | Tools Peers Actually Use',
    description:
      'A working library of tools, books and resources — every one recommended by a Peer who has used it to build their own business.',
    url: 'https://peersglobal.com/watchlist',
    siteName: 'Peers Global',
    type: 'website',
  },
}

export default function WatchlistPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'The Watchlist - Tools Peers Actually Use',
    description:
      'Practitioner-verified tools, books and software recommended by verified business founders in the Peers Global community.',
    url: 'https://peersglobal.com/watchlist',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <WatchlistClient />
    </>
  )
}
