import type { Metadata } from 'next'
import { StoriesPageClient } from '@/components/stories/stories-page-client'

export const metadata: Metadata = {
  title: 'Peer Stories | What Entrepreneurs Build When They Stop Building Alone',
  description:
    'Every story on this page belongs to real Peers. Real people, real businesses, real collaboration. Discover what exists today because Peers chose to collaborate.',
  keywords: [
    'peer stories peers global',
    'entrepreneur collaboration stories India',
    'real business partnership outcomes',
    'MSME joint ventures and referrals',
    'authentic founder stories',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/stories',
  },
  openGraph: {
    title: 'Peer Stories | What Entrepreneurs Build When They Stop Building Alone',
    description:
      'Every story on this page belongs to real Peers. Real people, real businesses, real collaboration. Discover what exists today because Peers chose to collaborate.',
    url: 'https://peersglobal.com/stories',
    siteName: 'Peers Global',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peer Stories | What Entrepreneurs Build When They Stop Building Alone',
    description:
      'Every story on this page belongs to real Peers. Real people, real businesses, real collaboration. Discover what exists today because Peers chose to collaborate.',
  },
}

export default function StoriesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Peers Global Approved Peer Collaboration Stories',
    description:
      'Verified real-world collaborations between entrepreneurs across Circles, cities and industries.',
    itemListElement: [
      {
        '@type': 'Article',
        position: 1,
        headline: 'A referral that became ₹1.2 Cr in recurring packaging business',
        author: [{ '@type': 'Person', name: 'Jignesh Shah' }, { '@type': 'Person', name: 'Rohit Mehta' }],
      },
      {
        '@type': 'Article',
        position: 2,
        headline: 'A joint export alliance unlocking 3 new international markets',
        author: [{ '@type': 'Person', name: 'Priya Desai' }, { '@type': 'Person', name: 'Karan Malhotra' }],
      },
      {
        '@type': 'Article',
        position: 3,
        headline: 'A confidential hot seat session saving 18 months of compliance delays',
        author: [{ '@type': 'Person', name: 'Amit Trivedi' }, { '@type': 'Person', name: 'Sandeep Kulkarni' }],
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StoriesPageClient />
    </>
  )
}
