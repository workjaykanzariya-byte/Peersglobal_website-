import type { Metadata } from 'next'
import { AdvisoryBoardClient } from '@/components/leadership/advisory-board-client'

export const metadata: Metadata = {
  title: 'The Peers Board of Advisory | PEERS GLOBAL Leadership',
  description:
    'Senior entrepreneurs whose experience is available to the whole community. When experience matters more than information.',
  keywords: [
    'The Peers Board of Advisory',
    'PEERS GLOBAL Board of Advisory',
    'Senior entrepreneurs experience',
    'Experience becomes legacy',
    'Circle Advisory Leader',
    'Advisory mindset',
    'Pattern recognition in business',
    'Leadership governance India',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/leadership/advisory-board',
  },
  openGraph: {
    title: 'The Peers Board of Advisory | PEERS GLOBAL Leadership',
    description:
      'Senior entrepreneurs whose experience is available to the whole community. Experience becomes legacy when it is shared.',
    url: 'https://peersglobal.com/leadership/advisory-board',
    type: 'website',
    images: [
      {
        url: '/images/who-we-are-boardroom.jpg',
        width: 1200,
        height: 630,
        alt: 'The Peers Board of Advisory senior leaders in session',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Peers Board of Advisory | PEERS GLOBAL Leadership',
    description:
      'Senior entrepreneurs whose experience is available to the whole community.',
    images: ['/images/who-we-are-boardroom.jpg'],
  },
}

export default function AdvisoryBoardPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'The Peers Board of Advisory | PEERS GLOBAL Leadership',
    description:
      'Senior entrepreneurs whose experience is available to the whole community. When experience matters more than information.',
    url: 'https://peersglobal.com/leadership/advisory-board',
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the Peers Board of Advisory?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It is a group of senior entrepreneurs whose experience is available to the wider PEERS GLOBAL community.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does the Board make decisions for Peers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The Board provides experience and perspective. The entrepreneur remains responsible for their own decisions.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does a Peer connect with the Board?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Every Circle has a Peers Board of Advisory Leader who connects Peers to the Board.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can every Circle access the Board?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Every Circle has a Peers Board of Advisory Leader who connects Peers directly to the Board of Advisory.',
          },
        },
        {
          '@type': 'Question',
          name: 'Who are the advisors?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Board comprises senior entrepreneurs with multi-decade leadership experience across industries, with profiles published as members are formally identified.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the Board only for business problems?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The source does not prescribe a narrow subject list. Its central purpose is to make the experience of senior entrepreneurs available to the community.',
          },
        },
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AdvisoryBoardClient />
    </>
  )
}
