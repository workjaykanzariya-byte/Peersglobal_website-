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
    '@type': 'WebPage',
    name: 'Peers Global Collaboration Stories',
    description:
      'The authentic framework of how entrepreneurs connect, collaborate, and grow together inside Circles.',
    url: 'https://peersglobal.com/stories',
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
