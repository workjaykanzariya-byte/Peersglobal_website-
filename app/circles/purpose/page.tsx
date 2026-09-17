import type { Metadata } from 'next'
import { PurposePageClient } from '@/components/circles/purpose-page-client'

export const metadata: Metadata = {
  title: {
    absolute: 'Purpose Circles | Business Groups by Goal & Stage | Peers Global',
  },
  description:
    'Ten Purpose Circles at Peers Global — global trade, startup founders, SME IPO, investors, MSME, family business, young entrepreneurs and more. Find your Circle.',
  keywords: [
    'purpose business circles',
    'startup founders group India',
    'family business network',
    'MSME entrepreneurs community',
    'young entrepreneurs circle',
    'SME IPO group',
    'peers global purpose circles',
    'goal based entrepreneur group',
  ],
  openGraph: {
    title: 'Purpose Circles | Business Groups by Goal & Stage | Peers Global',
    description:
      'Ten Purpose Circles at Peers Global — global trade, startup founders, SME IPO, investors, MSME, family business, young entrepreneurs and more. Find your Circle.',
    type: 'website',
    url: 'https://peersglobal.com/circles/purpose',
  },
}

// Schema: FAQPage for common questions
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do Purpose Circles also follow one seat per category?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Industries are varied deliberately, and each business category still holds a single seat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will referrals still happen across different industries?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, and often more of them. Ten industries means ten separate customer bases, and a requirement one Peer cannot serve is usually served by another in the room.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I move between Circles as my business changes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Many Peers move from Startup Founders to Leadership & Transformation, or from MSME Entrepreneurs to SME IPO Goal, as they pass from one stage to the next.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I join both an Industry and a Purpose Circle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. This is the most common pattern among established Peers — an Industry Circle for depth in their sector, and a Purpose Circle for perspective from outside it.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if my purpose is not listed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Speak to a Circle Director. If enough entrepreneurs share the same ambition, that is a Circle worth founding.',
      },
    },
  ],
}

// Schema: ItemList for the ten purpose circles
const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Purpose Business Circles | Peers Global',
  description:
    'Ten Purpose Circles at Peers Global for entrepreneurs grouped by shared goal or stage of business.',
  itemListElement: [
    'Import, Export & Global Trade',
    'Startup Founders',
    'SME IPO Goal',
    'Investors',
    'Global Expansion (Cross-Border)',
    'MSME Entrepreneurs',
    'Family Business',
    'Young Entrepreneurs (Below 35)',
    'Leadership & Transformation',
    'Sustainable & ESG Goal',
  ].map((name, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    item: {
      '@type': 'Organization',
      name: `${name} Circle`,
      url: 'https://peersglobal.com/circles/purpose',
    },
  })),
}

export default function CirclesPurposePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <PurposePageClient />
    </>
  )
}
