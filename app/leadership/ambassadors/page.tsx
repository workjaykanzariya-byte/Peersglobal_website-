import type { Metadata } from 'next'
import { AmbassadorClient } from '@/components/leadership/ambassador-client'

export const metadata: Metadata = {
  title: 'Ambassador | Peers Global',
  description:
    'Ambassadors carry Peers Global into rooms where it is not yet known. The role, the standing it builds, and who it is for.',
  keywords: [
    'peers global ambassador',
    'business community ambassador role',
    'entrepreneur network ambassador India',
    'community representation',
    'trusted leadership',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/leadership/ambassadors',
  },
  openGraph: {
    title: 'Ambassador | Peers Global',
    description:
      'You carry the name. Discover the Ambassador appointment at Peers Global.',
    url: 'https://peersglobal.com/leadership/ambassadors',
    type: 'website',
    images: [
      {
        url: '/images/ambassador-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Ambassador representing Peers Global in executive business conversation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ambassador | Peers Global',
    description:
      'You carry the name. Discover the Ambassador appointment at Peers Global.',
    images: ['/images/ambassador-hero.jpg'],
  },
}

export default function AmbassadorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Ambassador | Peers Global',
    description:
      'Ambassadors carry Peers Global into rooms where it is not yet known. The role, the standing it builds, and who it is for.',
    url: 'https://peersglobal.com/leadership/ambassadors',
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do I need to be a Peer already?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Peers Global membership is required, and Ambassadors are chosen from within the community based on their proven alignment with our culture and code.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much time does the role take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Considerably less than a Circle role. Ambassadors represent rather than operate, and the commitment is opportunistic and relational rather than fixed on a calendar.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I be an Ambassador alongside another leadership role?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'In select cases, an active Peer or Industry leader may carry Ambassador responsibilities. However, dedicated representation ensures unbiased introductions.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many Ambassadors are there?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The role is held by a limited number of respected Peers. It depends on trust, credibility and stature rather than on geographical coverage.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there a target for how many people I bring in?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. An Ambassador who introduces three entrepreneurs who genuinely belong here has done far more than one who introduces thirty who do not. Quality and culture come first.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if someone I introduce does not work out?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'That happens, and it is never held against you. Judgement is a practice, not a guarantee. The community values thoughtful introductions made in good faith.',
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
      <AmbassadorClient />
    </>
  )
}
