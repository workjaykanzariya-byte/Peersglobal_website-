import type { Metadata } from 'next'
import { FindPageClient } from '@/components/circles/find-page-client'

export const metadata: Metadata = {
  title: {
    absolute: 'Find Your Circle | Peers Global',
  },
  description:
    'Tell us about your business and what you are looking for. We will connect you with the right Peers Global Circle. Download the Unity App to explore the community first.',
  keywords: [
    'find a business circle',
    'join business community India',
    'entrepreneur circle enquiry',
    'business networking group',
    'peers global find circle',
    'unity app peers global',
  ],
  openGraph: {
    title: 'Find Your Circle | Peers Global',
    description:
      'Tell us about your business and what you are looking for. We will connect you with the right Peers Global Circle.',
    type: 'website',
    url: 'https://peersglobal.com/circles/find',
  },
}

// Schema: FAQPage
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need an invitation to join Peers Global?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Submit the form or download the Unity App and start there.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there any cost to enquire or to visit a Circle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Both are free with no obligation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly will I hear back after submitting the enquiry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Within 48 hours, from a Circle Director.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if there is no Circle in my city yet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We will tell you honestly, and we will talk to you about what is possible — including starting a Circle where you are.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I explore Peers Global before committing to anything?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Download the Unity App and take as long as you need.',
      },
    },
  ],
}

export default function FindCirclePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FindPageClient />
    </>
  )
}
