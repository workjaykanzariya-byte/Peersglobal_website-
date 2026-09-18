import type { Metadata } from 'next'
import { StoriesPageClient } from '@/components/stories/stories-page-client'

export const metadata: Metadata = {
  title: 'Peer Stories | Real Collaborations at Peers Global',
  description:
    'Real entrepreneurs, real collaborations, real outcomes. What Peers have built together across Circles, cities and industries.',
  keywords: [
    'entrepreneur success stories India',
    'business collaboration stories',
    'MSME success stories',
    'business partnership examples',
    'peer stories',
    'Peers Global collaborations',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/stories',
  },
  openGraph: {
    title: 'Peer Stories | Real Collaborations at Peers Global',
    description:
      'Real entrepreneurs, real collaborations, real outcomes. What Peers have built together across Circles, cities and industries.',
    url: 'https://peersglobal.com/stories',
    siteName: 'Peers Global',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peer Stories | Real Collaborations at Peers Global',
    description:
      'Real entrepreneurs, real collaborations, real outcomes. What Peers have built together across Circles, cities and industries.',
  },
}

export default function StoriesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Peers Global Peer Stories & Collaborations',
    description:
      'Real entrepreneurs, real collaborations, real outcomes across Peers Global Circles.',
    itemListElement: [
      {
        '@type': 'Article',
        position: 1,
        headline: 'A referral that became ₹1.2 Cr in business',
        description:
          'Shah Packaging and Mehta Trading cross-Circle collaboration resulting in a continuous packaging supply contract.',
        author: [
          {
            '@type': 'Person',
            name: 'Jignesh Shah',
          },
          {
            '@type': 'Person',
            name: 'Rohit Mehta',
          },
        ],
      },
      {
        '@type': 'Article',
        position: 2,
        headline: 'A joint venture that opened 3 new markets',
        description:
          'Desai Exports and Malhotra Logistics structured a joint export corridor into European markets.',
        author: [
          {
            '@type': 'Person',
            name: 'Priya Desai',
          },
          {
            '@type': 'Person',
            name: 'Karan Malhotra',
          },
        ],
      },
      {
        '@type': 'Article',
        position: 3,
        headline: 'A conversation that saved 18 months',
        description:
          'Trivedi Chemicals and Kulkarni Solutions chemical plant solvent recovery compliance guidance.',
        author: [
          {
            '@type': 'Person',
            name: 'Amit Trivedi',
          },
          {
            '@type': 'Person',
            name: 'Sandeep Kulkarni',
          },
        ],
      },
      {
        '@type': 'Article',
        position: 4,
        headline: 'An introduction that led to a long-term partnership',
        description:
          'Patel HR Solutions and Kaur Tech engineering talent pipeline collaboration in Bengaluru.',
        author: [
          {
            '@type': 'Person',
            name: 'Neha Patel',
          },
          {
            '@type': 'Person',
            name: 'Simran Kaur',
          },
        ],
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
