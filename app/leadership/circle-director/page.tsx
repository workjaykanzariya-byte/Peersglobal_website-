import type { Metadata } from 'next'
import { CircleDirectorClient } from '@/components/leadership/circle-director-client'

export const metadata: Metadata = {
  title: 'Circle Director | PEERS GLOBAL Leadership',
  description:
    'Runs the Circle, month on month. You grow the Circle, and everyone in it. Stage 03 in the PEERS GLOBAL Leadership Pathway.',
  keywords: [
    'Circle Director',
    'PEERS GLOBAL Circle Director',
    'Stage 03 Lead the Circle',
    'Lead the leaders',
    'Chairs and Leaders mentorship',
    'Circle leadership India',
    'Entrepreneur leadership pathway',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/leadership/circle-director',
  },
  openGraph: {
    title: 'Circle Director | Runs the Circle, month on month | PEERS GLOBAL',
    description:
      'You grow the Circle, and everyone in it. Lead the leaders who lead the Circle at PEERS GLOBAL.',
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
    title: 'Circle Director | PEERS GLOBAL Leadership',
    description:
      'Runs the Circle, month on month. You grow the Circle, and everyone in it.',
    images: ['/images/circle-director-hero.jpg'],
  },
}

export default function CircleDirectorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Circle Director | PEERS GLOBAL Leadership',
    description:
      'Runs the Circle, month on month. You grow the Circle, and everyone in it. Stage 03 in the PEERS GLOBAL Leadership Pathway.',
    url: 'https://peersglobal.com/leadership/circle-director',
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is the Circle Director above the other members?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The role represents responsibility, not superiority. A Director is still a Peer — with an additional responsibility to help the Circle function and grow.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does the Director lead alone?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The Director mentors the 3 Chairs and 9 Leaders who form the leadership structure around the Circle.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this a full-time role?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The source material defines the role as a leadership responsibility within PEERS GLOBAL; it does not specify a separate employment arrangement.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if I have never held a community leadership role?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Leadership can begin with contribution. The important question is whether you are willing to accept responsibility and help others succeed.',
          },
        },
        {
          '@type': 'Question',
          name: 'What matters most in the role?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The role is built around the Circle and the people within it. Your success is not simply that the Circle meets. It is that the Circle becomes a stronger place for its entrepreneurs.',
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
