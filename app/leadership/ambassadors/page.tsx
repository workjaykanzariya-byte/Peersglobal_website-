import type { Metadata } from 'next'
import { AmbassadorClient } from '@/components/leadership/ambassador-client'

export const metadata: Metadata = {
  title: 'Ambassador | PEERS GLOBAL Leadership',
  description:
    'You carry the name. An Ambassador represents more than a community — you carry its spirit into conversations, relationships, cities, and industries.',
  keywords: [
    'Ambassador',
    'PEERS GLOBAL Ambassador',
    'You carry the name',
    'Community representation',
    'Built on trust',
    'Not a sales role',
    'Ambassador mindset',
    'Leadership pathway India',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/leadership/ambassadors',
  },
  openGraph: {
    title: 'Ambassador | You Carry The Name | PEERS GLOBAL',
    description:
      'The community travels through people. Explore the Ambassador appointment at PEERS GLOBAL.',
    url: 'https://peersglobal.com/leadership/ambassadors',
    type: 'website',
    images: [
      {
        url: '/images/leadership-ambassador.jpg',
        width: 1200,
        height: 630,
        alt: 'Ambassador representing Peers Global with authentic leadership and trust',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ambassador | PEERS GLOBAL Leadership',
    description:
      'You carry the name. An Ambassador represents more than a community.',
    images: ['/images/leadership-ambassador.jpg'],
  },
}

export default function AmbassadorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Ambassador | PEERS GLOBAL Leadership',
    description:
      'You carry the name. An Ambassador represents more than a community — you carry its spirit into conversations, relationships, cities, and industries.',
    url: 'https://peersglobal.com/leadership/ambassadors',
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is an Ambassador a salesperson for PEERS GLOBAL?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The role is about representing the community, creating understanding and opening meaningful conversations—not pressuring people to join.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does an Ambassador have to bring new members?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The source architecture does not define a specific membership quota or numerical target for the Ambassador role. The emphasis is on representing and carrying the community through people.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does an Ambassador represent PEERS GLOBAL everywhere?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'An Ambassador carries the name and spirit of the community in their interactions. The precise scope of formal representation should follow the approved Ambassador guidelines.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can anyone become an Ambassador?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The source architecture does not specify formal eligibility criteria. The role should therefore be assigned according to the approved leadership and Ambassador process rather than assumed eligibility.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the most important quality of an Ambassador?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Trust. People may forget what you told them. They remember how you made them feel.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should an Ambassador never do?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'An Ambassador should never misrepresent the community, make promises on its behalf, pressure people into joining, or use the relationship only as a business opportunity.',
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
