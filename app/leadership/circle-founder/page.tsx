import type { Metadata } from 'next'
import { CircleFounderClient } from '@/components/leadership/circle-founder-client'

export const metadata: Metadata = {
  title: 'Circle Founder | PEERS GLOBAL Leadership',
  description:
    'Launches new Circles. Every Circle begins because someone decides to bring the right people together. Circle starts from Day 1.',
  keywords: [
    'Circle Founder',
    'PEERS GLOBAL Circle Founder',
    'Launches new Circles',
    'Circle starts from Day 1',
    'Convene the industry',
    'Found a business circle',
    'Leadership pathway India',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/leadership/circle-founder',
  },
  openGraph: {
    title: 'Circle Founder | Launches New Circles | PEERS GLOBAL',
    description:
      'Every Circle begins because someone decides to bring the right people together. Explore the Circle Founder role at PEERS GLOBAL.',
    url: 'https://peersglobal.com/leadership/circle-founder',
    type: 'website',
    images: [
      {
        url: '/images/leadership-circle-founder.jpg',
        width: 1200,
        height: 630,
        alt: 'Circle Founders convening and shaping the future',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Circle Founder | PEERS GLOBAL Leadership',
    description:
      'Launches new Circles. Every Circle begins because someone decides to bring the right people together.',
    images: ['/images/leadership-circle-founder.jpg'],
  },
}

export default function CircleFounderPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Circle Founder | PEERS GLOBAL Leadership',
    description:
      'Launches new Circles. Every Circle begins because someone decides to bring the right people together. Circle starts from Day 1.',
    url: 'https://peersglobal.com/leadership/circle-founder',
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does a Circle need to be full before it begins?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Circle starts from Day 1. The first entrepreneur is already the beginning of the Circle.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need a large personal network?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Not necessarily. What matters is the willingness and ability to begin bringing relevant entrepreneurs together.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the Founder the permanent leader of the Circle?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Not necessarily. The Founder begins the Circle. As the community develops, leadership can become distributed through the Powerhouse and Circle leadership structure.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the biggest responsibility of a Founder?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'To create the conditions for the right entrepreneurs to meet, build relationships and begin contributing to one another.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens after the Circle is established?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Circle develops its rhythm, leadership and community. The Founder becomes part of a larger story: one that is no longer about starting a Circle, but about helping that Circle become a meaningful community.',
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
      <CircleFounderClient />
    </>
  )
}
