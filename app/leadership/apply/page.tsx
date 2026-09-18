import type { Metadata } from 'next'
import { ApplyToLeadClient } from '@/components/leadership/apply-to-lead-client'

export const metadata: Metadata = {
  title: 'Apply to Lead | Peers Global',
  description:
    'Take a leadership role at Peers Global. Circle Founder, Circle Director, Industry Director, Executive Director or Ambassador — apply through the Unity App.',
  keywords: [
    'apply leadership role peers global',
    'become circle founder',
    'business community leadership application',
    'circle director application',
    'industry director application',
    'executive director appointment',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/leadership/apply',
  },
  openGraph: {
    title: 'Apply to Lead | Peers Global',
    description:
      'Every leadership role at Peers Global begins with a conversation. Express your interest in leading a Circle, an Industry, or a Territory.',
    url: 'https://peersglobal.com/leadership/apply',
    type: 'website',
    images: [
      {
        url: '/images/circle-director-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Peers Global leadership summit with engaging business owners',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apply to Lead | Peers Global',
    description:
      'Every leadership role at Peers Global begins with a conversation. Express your interest in leading a Circle, an Industry, or a Territory.',
    images: ['/images/circle-director-hero.jpg'],
  },
}

export default function ApplyToLeadPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Apply to Lead | Peers Global',
    description:
      'Take a leadership role at Peers Global. Circle Founder, Circle Director, Industry Director, Executive Director or Ambassador — apply through the Unity App.',
    url: 'https://peersglobal.com/leadership/apply',
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do I need to be a Peer first?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Peers Global membership is required for every leadership role. If you are not yet a member, start by downloading the Unity App.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need leadership experience in a community before?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Running a business, leading a team or holding a committee role all count. What matters most is your record of contribution and your standing among entrepreneurs.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I hold a leadership role while running my business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Every leader at Peers Global is a working business owner, and every role is designed around that reality.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if I am not sure which role fits?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Select "Not sure yet" on the form. That conversation is exactly what our leadership team is here for.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does the process take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It varies by role and territory. You will be contacted within 48 hours and given a clear timeline.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if I am not selected?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You will be told directly and honestly why. In many cases it is timing rather than suitability, and you are welcome to revisit it later.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there any cost to holding a leadership role?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. You maintain your Peers Global membership as any Peer does. The role itself carries no fee whatsoever.',
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
      <ApplyToLeadClient />
    </>
  )
}
