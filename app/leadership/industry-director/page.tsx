import type { Metadata } from 'next'
import { IndustryDirectorClient } from '@/components/leadership/industry-director-client'

export const metadata: Metadata = {
  title: 'Industry Director | PEERS GLOBAL Leadership',
  description:
    'Sector ecosystem owner for the city. An Industry Director carries responsibility for a sector—not simply for a Circle. One sector. One person responsible.',
  keywords: [
    'Industry Director',
    'PEERS GLOBAL Industry Director',
    'Sector ecosystem owner',
    'City-level industry leadership',
    'From Circle to Sector',
    'Industry collaboration India',
    'Ecosystem leadership',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/leadership/industry-director',
  },
  openGraph: {
    title: 'Industry Director | Sector Ecosystem Owner | PEERS GLOBAL',
    description:
      'An Industry Director carries responsibility for a sector—not simply for a Circle. Explore Industry Director leadership at PEERS GLOBAL.',
    url: 'https://peersglobal.com/leadership/industry-director',
    type: 'website',
    images: [
      {
        url: '/images/industry-director-speaker.jpg',
        width: 1200,
        height: 630,
        alt: 'Industry Director addressing entrepreneurs at an ecosystem gathering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industry Director | PEERS GLOBAL Leadership',
    description:
      'Sector ecosystem owner for the city. An Industry Director carries responsibility for a sector—not simply for a Circle.',
    images: ['/images/industry-director-speaker.jpg'],
  },
}

export default function IndustryDirectorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Industry Director | PEERS GLOBAL Leadership',
    description:
      'Sector ecosystem owner for the city. An Industry Director carries responsibility for a sector—not simply for a Circle.',
    url: 'https://peersglobal.com/leadership/industry-director',
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is an Industry Director responsible for a Circle?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Industry Director role looks beyond an individual Circle and carries a city-level sector perspective.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this a position of authority over other entrepreneurs?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "The role carries leadership responsibility, but PEERS GLOBAL's leadership philosophy is based on contribution, trust and service—not hierarchy.",
          },
        },
        {
          '@type': 'Question',
          name: 'Does the role guarantee recognition?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No guarantee should be implied. The role creates an opportunity for visibility and contribution; recognition should follow meaningful work.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need to be the biggest entrepreneur in my industry?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The source does not define the role through business size or market position. What matters is the willingness and ability to contribute to the sector ecosystem.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can leadership begin with a Circle?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The broader leadership pathway moves from contribution and Circle leadership toward ecosystem-level responsibility.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the heart of the role?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'To help an industry become more connected, collaborative and capable—within the city and within the wider PEERS GLOBAL community.',
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
      <IndustryDirectorClient />
    </>
  )
}
