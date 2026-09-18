import type { Metadata } from 'next'
import { CriteriaClient } from '@/components/membership/criteria-client'

export const metadata: Metadata = {
  title: {
    absolute: 'Membership Criteria & Process | Peers Global',
  },
  description:
    'How to join Peers Global. Subscription criteria open to all entrepreneurs, and the separate approval process for joining a Circle.',
  keywords: [
    'business community membership criteria',
    'how to join business circle',
    'entrepreneur membership application India',
    'peers global membership criteria',
    'circle approval process',
  ],
  openGraph: {
    title: 'Membership Criteria & Process | Peers Global',
    description:
      'How to join Peers Global. Subscription criteria open to all entrepreneurs, and the separate approval process for joining a Circle.',
    type: 'website',
    url: 'https://peersglobal.com/membership/criteria',
  },
}

// Schema: HowTo — The Two-Step Membership Process
const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Join Peers Global and a Governed Circle',
  description:
    'A transparent two-stage onboarding process: subscribing to the global platform, followed by applying for a category-locked seat in a Circle.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Join Peers Global Platform',
      text: 'Download the Unity App, choose your membership tier, and gain immediate access to the global entrepreneur directory and ecosystem.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Raise a Circle Request',
      text: 'Request to claim your business category in an Industry or Purpose Circle in your city.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Leadership & Committee Review',
      text: 'The Circle Director and Membership Committee evaluate category exclusivity and synergy.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Guest Meeting Visit',
      text: 'Attend a live monthly meeting as an invited guest to experience the room and peers.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Lock Category & Take Your Seat',
      text: 'Upon approval and Experience Fee settlement, your category seat is permanently locked for the year.',
    },
  ],
}

// Schema: FAQPage
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I join Peers Global without joining a Circle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Your subscription gives you the platform, the app, the directory and the global community. A Circle is an additional step you take when the right room is available.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Circle Experience Fee separate from my subscription?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Your subscription is for Peers Global platform access. The Circle Experience Fee covers the hospitality, venue and experience of that specific Circle's twelve meetings.",
      },
    },
    {
      '@type': 'Question',
      name: 'What if my Circle request is declined?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You are told why directly and shown the alternatives (such as adjacent Circles or the waitlist). Your platform subscription remains unaffected.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I request a specific Circle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You can name the exact Industry or Purpose Circle and city when you raise your request in the Unity App.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I am not sure which Circle suits me?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Raise it with a Circle Director or during onboarding. That consultation is exactly what our leadership team is here for.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does Circle approval take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Usually within 7 days. The Director and Chairs evaluate category exclusivity and schedule your guest visit for the upcoming monthly date.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I pay the Circle Experience Fee before or after approval?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'After. You are never asked to pay for a Circle seat until your application is formally approved and your category is ready to be locked.',
      },
    },
  ],
}

export default function MembershipCriteriaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CriteriaClient />
    </>
  )
}
