import type { Metadata } from 'next'
import { IndustryDirectorClient } from '@/components/leadership/industry-director-client'

export const metadata: Metadata = {
  title: 'Industry Director | Peers Global',
  description:
    'An Industry Director brings together entrepreneurs from across cities and Circles, strengthens sector depth, and represents the voice of the industry within Peers Global and beyond.',
  keywords: [
    'industry director role',
    'business community leadership India',
    'entrepreneur mentor role',
    'business circle leadership',
    'sector leadership',
    'industry voice',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/leadership/industry-director',
  },
  openGraph: {
    title: 'Industry Director | Peers Global',
    description:
      'You carry an industry. Discover the Industry Director leadership appointment at Peers Global.',
    url: 'https://peersglobal.com/leadership/industry-director',
    type: 'website',
    images: [
      {
        url: '/images/industry-director-speaker.jpg',
        width: 1200,
        height: 630,
        alt: 'Industry Director addressing entrepreneurs at national conference',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industry Director | Peers Global',
    description:
      'You carry an industry. Discover the Industry Director leadership appointment at Peers Global.',
    images: ['/images/industry-director-speaker.jpg'],
  },
}

export default function IndustryDirectorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Industry Director | Peers Global',
    description:
      'An Industry Director brings together entrepreneurs from across cities and Circles, strengthens sector depth, and represents the voice of the industry within Peers Global and beyond.',
    url: 'https://peersglobal.com/leadership/industry-director',
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How is an Industry Director selected?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Industry Directors are appointed from established business owners with recognised domain authority, an active track record of contribution within Peers Global, and demonstrable integrity.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I be an Industry Director and a Circle Director?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Generally, no. Both roles require dedicated presence and focus. A Circle Director leads one room vertically every month, while an Industry Director moves horizontally across multiple cities and Circles within a specific sector.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many Industry Directors are there?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'There is typically one Industry Director per key sector nationally (e.g. Technology, Manufacturing, Healthcare, Real Estate, Retail).',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the time commitment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The commitment is estimated at 8 to 12 hours per month, encompassing national sector roundtables, collaboration with Circle Directors, and media coverage.',
          },
        },
        {
          '@type': 'Question',
          name: 'What kind of support does an Industry Director receive?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You receive direct support from the Peers Global Central Office, access to Unity App cross-city channel tools, executive media coverage via VyapaarJagat.com, and dedicated event coordination.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I nominate someone for this role?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Peers, Circle Directors, and Regional Executive Directors can nominate prominent entrepreneurs who embody generous leadership and deep sector commitment.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens after my term ends?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Industry Directors serve a defined two-year term. Upon completing their tenure, Directors transition into the Industry Advisory Council or may be invited into Regional and Global governance boards.',
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
