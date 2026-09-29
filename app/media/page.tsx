import type { Metadata } from 'next'
import { PodcastMediaClient } from '@/components/media/podcast-media-client'

export const metadata: Metadata = {
  title: 'Podcast & Media | Peers Global',
  description:
    'The Peers Global podcast, Vyapaar Jagat TV, Circle magazines and media coverage of the community.',
  keywords: [
    'entrepreneur podcast India',
    'business podcast India',
    'MSME media platform',
    'Vyapaar Jagat TV',
    'Peers Global media',
    'Indian founders podcast',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/media',
  },
  openGraph: {
    title: 'Podcast & Media | Peers Global',
    description:
      'The Peers Global podcast, Vyapaar Jagat TV, Circle magazines and media coverage of the community.',
    url: 'https://peersglobal.com/media',
    siteName: 'Peers Global',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Podcast & Media | Peers Global',
    description:
      'The Peers Global podcast, Vyapaar Jagat TV, Circle magazines and media coverage of the community.',
  },
}

export default function MediaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'PodcastSeries',
        name: 'The Peers Global Podcast',
        description:
          'Conversations with entrepreneurs about what actually happened — the decisions, the mistakes and the years nobody talks about.',
        url: 'https://peersglobal.com/media',
        webFeed: 'https://peersglobal.com/podcast/feed.xml',
        author: {
          '@type': 'Organization',
          name: 'Peers Global',
          url: 'https://peersglobal.com',
        },
      },
      {
        '@type': 'MediaOrganization',
        name: 'Peers Global Media & Vyapaar Jagat',
        url: 'https://peersglobal.com/media',
        description:
          'Dedicated media network covering MSMEs, promoters and entrepreneurs across Bharat.',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PodcastMediaClient />
    </>
  )
}
