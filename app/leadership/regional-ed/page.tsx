import type { Metadata } from 'next'
import { ExecutiveDirectorClient } from '@/components/leadership/executive-director-client'

export const metadata: Metadata = {
  title: 'Executive Director | Peers Global',
  description:
    'Executive Directors carry territory at Peers Global — Area, District, State and Country. Building Circles, developing leaders and growing an entrepreneurial ecosystem.',
  keywords: [
    'executive director role',
    'regional business community leader',
    'state entrepreneur network head',
    'country director business community',
    'carry territory',
    'ecosystem leadership',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/leadership/regional-ed',
  },
  openGraph: {
    title: 'Executive Director | Peers Global',
    description:
      'You carry territory. Area, District, State, Country. Explore the Executive Director leadership role at Peers Global.',
    url: 'https://peersglobal.com/leadership/regional-ed',
    type: 'website',
    images: [
      {
        url: '/images/executive-director-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Executive Director overlooking city skyline from high-rise terrace',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Executive Director | Peers Global',
    description:
      'You carry territory. Area, District, State, Country. Explore the Executive Director leadership role at Peers Global.',
    images: ['/images/executive-director-hero.jpg'],
  },
}

export default function RegionalExecutiveDirectorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Executive Director | Peers Global',
    description:
      'Executive Directors carry territory at Peers Global — Area, District, State and Country. Building Circles, developing leaders and growing an entrepreneurial ecosystem.',
    url: 'https://peersglobal.com/leadership/regional-ed',
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do I need to be a Peer already?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Peers Global membership is required. Executive Directors lead the ecosystem from within, with a deep understanding of our core culture, values and the Peers Code.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need to have led a Circle first?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It is the usual path and the best preparation. Founding or directing a Circle teaches you what you will later be asking others to do and gives you first-hand credibility.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which level would I start at?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most Executive Directors begin at Area or District level and grow with the territory they build. State and Country appointments come from proven territory leadership.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is a territory defined?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Territories are agreed clearly with the global leadership, defined by business geography and commercial catchment areas rather than purely administrative boundaries.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I hold a territory while running my business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Every Executive Director is an active business owner. The role is built around leadership at one remove — empowering Founders and Directors rather than managing daily details yourself.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much time does it take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'More at the beginning when initial Circles are being founded, and progressively less as leaders mature under you. The commitment is discussed transparently before any appointment.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if there are no Circles in my territory yet?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Then you are building from the ground up. That is the most demanding version of this role and the one that leaves the deepest mark — every Circle in that territory will exist because you started it.',
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
