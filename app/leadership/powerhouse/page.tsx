import type { Metadata } from 'next'
import { PowerhouseClient } from '@/components/leadership/powerhouse-client'

export const metadata: Metadata = {
  title: 'The Powerhouse | Leadership Team of a Circle | Peers Global',
  description:
    'The Powerhouse is the leadership team of a Peers Global Circle — three committees, three Chairs, nine Leaders. Where leadership begins here.',
  keywords: [
    'business circle leadership team',
    'powerhouse committee roles',
    'circle leadership india',
    'entrepreneur committee roles',
    'peers global powerhouse',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/leadership/powerhouse',
  },
  openGraph: {
    title: 'The Powerhouse | Leadership Team of a Circle | Peers Global',
    description:
      'Fourteen entrepreneurs hold every Circle together. Explore the Powerhouse — where leadership at Peers Global begins.',
    url: 'https://peersglobal.com/leadership/powerhouse',
    type: 'website',
    images: [
      {
        url: '/images/leadership-entrepreneurs-meeting.jpg',
        width: 1200,
        height: 630,
        alt: 'The Powerhouse leadership team collaborating in a Circle',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Powerhouse | Leadership Team of a Circle | Peers Global',
    description:
      'Fourteen entrepreneurs hold every Circle together. Explore the Powerhouse — where leadership at Peers Global begins.',
    images: ['/images/leadership-entrepreneurs-meeting.jpg'],
  },
}

export default function PowerhousePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'The Powerhouse | Leadership Team of a Circle',
    description:
      'The Powerhouse is the leadership team of a Peers Global Circle — three committees, three Chairs, nine Leaders. Where leadership begins here.',
    url: 'https://peersglobal.com/leadership/powerhouse',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Business Growth Committee',
          description: 'Responsible for what the Circle produces: referrals, cross-border collaborations, and PR.',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Membership Experience Committee',
          description: 'Responsible for who is in the room and how they experience it: member success, advisory board, and brand showcases.',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Events & Impact Committee',
          description: 'Responsible for what the Circle does beyond the meeting: events experience, skill development masterclasses, and partnerships.',
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
      <PowerhouseClient />
    </>
  )
}
