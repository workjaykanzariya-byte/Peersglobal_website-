import type { Metadata } from 'next'
import { MemberFaqClient } from '@/components/membership/faq-client'

export const metadata: Metadata = {
  title: {
    absolute: 'Membership FAQ | Peers Global',
  },
  description:
    'Answers on Peers Global membership, Circles, subscriptions, payments, the Unity App, leadership, leaving and rejoining.',
  keywords: [
    'peers global membership questions',
    'business community FAQ',
    'entrepreneur membership questions India',
    'peers global faq',
    'circle membership questions',
  ],
  openGraph: {
    title: 'Membership FAQ | Peers Global',
    description:
      'Answers on Peers Global membership, Circles, subscriptions, payments, the Unity App, leadership, leaving and rejoining.',
    type: 'website',
    url: 'https://peersglobal.com/membership/faq',
  },
}

// Schema: FAQPage for SEO
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I try Peers Global before subscribing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Download the Unity App and look around. You can see the community, understand how collaboration works here and get a real sense of the culture before committing to anything.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this a business membership or an individual membership?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Individual. Always. Your membership belongs to you, not to your company. It follows the person, not the letterhead. Peers Global exists to grow entrepreneurs, not to list companies.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does my subscription include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your subscription makes you part of Peers Global — the platform, the Unity App, the community and the recognition system. Joining a Circle is a separate step with its own approval and its own fee.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Circle Experience Fee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A separate fee paid when you join a Circle, covering the hospitality and experience of that Circle's twelve meetings across your year.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is your refund policy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All fees are non-refundable. Membership here is access to a high-trust community. Decide before you pay.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I earn Peers Coins?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every contribution you make across the 10 Ways of Collaboration is logged and confirmed by the Peer who received it.',
      },
    },
  ],
}

export default function MemberFaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <MemberFaqClient />
    </>
  )
}
