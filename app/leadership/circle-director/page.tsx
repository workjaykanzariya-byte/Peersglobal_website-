import type { Metadata } from 'next'
import { CircleDirectorClient } from '@/components/leadership/circle-director-client'

export const metadata: Metadata = {
  title: 'Circle Director | Peers Global',
  description:
    'The Circle Director builds and grows a Circle, mentors its Chairs and its Peers, and carries its culture. The role, the standing, and who it is for.',
  keywords: [
    'circle director role',
    'business community leadership India',
    'entrepreneur mentor role',
    'business circle leadership',
    'lead the leaders',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/leadership/circle-director',
  },
  openGraph: {
    title: 'Circle Director | Peers Global',
    description:
      'You grow the Circle, and everyone in it. Explore the Circle Director appointment at Peers Global.',
    url: 'https://peersglobal.com/leadership/circle-director',
    type: 'website',
    images: [
      {
        url: '/images/circle-director-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Circle Director chairing an executive leadership meeting with Chairs and Peers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Circle Director | Peers Global',
    description:
      'You grow the Circle, and everyone in it. Explore the Circle Director appointment at Peers Global.',
    images: ['/images/circle-director-hero.jpg'],
  },
}

export default function CircleDirectorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Circle Director | Peers Global',
    description:
      'The Circle Director builds and grows a Circle, mentors its Chairs and its Peers, and carries its culture. The role, the standing, and who it is for.',
    url: 'https://peersglobal.com/leadership/circle-director',
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do I need to be a Peer already?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Peers Global membership is required, and Directors are almost always drawn from within the Circle they go on to lead.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I be Director of a Circle I did not found?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. This is the standard route. The Founder builds and launches the room; a Director takes on its month-on-month running and growth.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much time does the role take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The monthly meeting, preparation, and time with your Chairs and Peers between meetings. The commitment is consistency rather than volume.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I direct a Circle while running my business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Every Director is a working business owner. The governance format is designed specifically for active founders.',
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
      <CircleDirectorClient />
    </>
  )
}
