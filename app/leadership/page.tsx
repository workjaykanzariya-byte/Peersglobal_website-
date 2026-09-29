import type { Metadata } from 'next'
import { LeadershipLadderClient } from '@/components/leadership/leadership-ladder-client'

export const metadata: Metadata = {
  title: 'Leadership at Peers Global | Built and Led by Entrepreneurs',
  description:
    'Leadership at Peers Global is earned through contribution. Circle Founder, Circle Director, Industry Director, Regional Executive Director — and who you become in each.',
  keywords: [
    'business community leadership roles',
    'become a circle founder',
    'entrepreneur leadership development India',
    'business community director',
    'circle director roles',
    'regional executive director',
    'influence without authority',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/leadership',
  },
  openGraph: {
    title: 'Leadership at Peers Global | Built and Led by Entrepreneurs',
    description:
      'Influence is not given. It is built, one act of service at a time. Explore the leadership ladder at Peers Global.',
    url: 'https://peersglobal.com/leadership',
    type: 'website',
    images: [
      {
        url: '/images/leadership-mountain-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Leaders helping leaders climb the mountain ridge at sunrise',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leadership at Peers Global | Built and Led by Entrepreneurs',
    description:
      'Influence is not given. It is built, one act of service at a time. Explore the leadership ladder at Peers Global.',
    images: ['/images/leadership-mountain-hero.jpg'],
  },
}

export default function LeadershipPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Leadership at Peers Global',
    description:
      'Leadership at Peers Global is earned through contribution. Circle Founder, Circle Director, Industry Director, Regional Executive Director — and who you become in each.',
    url: 'https://peersglobal.com/leadership',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Circle Founder',
          description: 'You build the room that does not exist yet. Define purpose, convene founders, set culture.',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Circle Director',
          description: 'You hold the standard. Runs the Circle month on month, mentors Chairs and Leaders.',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Industry Director',
          description: 'Sector ecosystem owner for the city. Holds one industry across every Circle in it.',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Regional Executive Director',
          description: 'Regional ecosystem builder carrying an Area, District, State or Country territory.',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Global Leadership',
          description: 'Shape global strategy, represent Peers Global internationally, and build ecosystem partnerships.',
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
      <LeadershipLadderClient />
    </>
  )
}
