import { Metadata } from 'next'
import { WatchlistClient } from '@/components/watchlist/watchlist-client'

export const metadata: Metadata = {
  title: 'The Watchlist | A Working Library for Practitioners | Peers Global',
  description:
    'Every resource on The Watchlist is recommended by a named Peer who has actually used it to build their own business. Real experience, honest limitations, zero paid listings.',
  keywords: [
    'the watchlist peers global',
    'practitioner tools library',
    'business software recommended by founders',
    'honest MSME tool reviews',
    'zero paid listings business tools',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/watchlist',
  },
  openGraph: {
    title: 'The Watchlist | A Working Library for Practitioners | Peers Global',
    description:
      'Every resource on The Watchlist is recommended by a named Peer who has actually used it to build their own business. Real experience, honest limitations, zero paid listings.',
    url: 'https://peersglobal.com/watchlist',
    siteName: 'Peers Global',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Watchlist | A Working Library for Practitioners | Peers Global',
    description:
      'Every resource on The Watchlist is recommended by a named Peer who has actually used it to build their own business. Real experience, honest limitations, zero paid listings.',
  },
}

export default function WatchlistPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'The Watchlist - A Working Library for Practitioners',
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
