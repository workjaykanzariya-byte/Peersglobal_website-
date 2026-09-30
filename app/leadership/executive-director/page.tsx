import type { Metadata } from 'next'
import { ExecutiveDirectorClient } from '@/components/leadership/executive-director-client'

export const metadata: Metadata = {
  title: 'Executive Director | PEERS GLOBAL Leadership',
  description:
    'Regional ecosystem builder. An Executive Director helps an entire territory become more connected across Area, District, State, and Country levels.',
  keywords: [
    'Executive Director',
    'PEERS GLOBAL Executive Director',
    'Regional ecosystem builder',
    'Area ED',
    'District ED',
    'State ED',
    'Country ED',
    'Regional business leadership India',
    'Territory leadership',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/leadership/executive-director',
  },
  openGraph: {
    title: 'Executive Director | Regional Ecosystem Builder | PEERS GLOBAL',
    description:
      'An Executive Director helps an entire territory become more connected across Area, District, State, and Country levels.',
    url: 'https://peersglobal.com/leadership/executive-director',
    type: 'website',
    images: [
      {
        url: '/images/executive-director-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Executive Director overseeing regional business ecosystem',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Executive Director | PEERS GLOBAL Leadership',
    description:
      'Regional ecosystem builder. Leadership across Area, District, State, and Country levels.',
    images: ['/images/executive-director-hero.jpg'],
  },
}

export default function ExecutiveDirectorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Executive Director | PEERS GLOBAL Leadership',
    description:
      'Regional ecosystem builder. An Executive Director helps an entire territory become more connected across Area, District, State, and Country levels.',
    url: 'https://peersglobal.com/leadership/executive-director',
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is an Executive Director responsible for?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'An Executive Director carries responsibility for developing and connecting the PEERS GLOBAL ecosystem across an assigned geographic level.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the four levels?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The structure comprises: Area ED → District ED → State ED → Country ED. Each level represents a wider geographic responsibility.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does an Executive Director lead Circles directly?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The role operates at an ecosystem level rather than being limited to the day-to-day leadership of one Circle.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is this only about expansion?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Growth is meaningful only when relationships, culture and community remain strong as the ecosystem develops.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can an entrepreneur move through the leadership pathway?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The PEERS GLOBAL leadership architecture provides a progression from contribution and Circle leadership toward broader ecosystem responsibility.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the heart of the role?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'To help people, leaders, Circles, industries and territories become more connected—while protecting the culture and values of the community.',
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
      <ExecutiveDirectorClient />
    </>
  )
}
