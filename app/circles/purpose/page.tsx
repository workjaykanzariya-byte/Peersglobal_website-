import type { Metadata } from 'next'
import { PurposePageClient } from '@/components/circles/purpose-page-client'

export const metadata: Metadata = {
  title: {
    absolute: 'Purpose & Goal Circles | Peers Global',
  },
  description:
    'Ten Purpose & Goal Circles at Peers Global — Import/Export, Startup Founders, SME IPO, Investors, Global Expansion, MSME, Family Business, Young Entrepreneurs, Leadership & Transformation, Sustainable & ESG. Find your Circle.',
  keywords: [
    'purpose goal circles',
    'business circles for entrepreneurs',
    'startup founders group India',
    'family business network',
    'MSME entrepreneurs community',
    'young entrepreneurs circle',
    'SME IPO goal circle',
    'cross border expansion',
    'peers global purpose circles',
    'goal based entrepreneur group',
  ],
  openGraph: {
    title: 'Purpose & Goal Circles | Peers Global',
    description:
      'Ten Purpose & Goal Circles at Peers Global — connecting entrepreneurs around shared ambitions, journeys, and goals across industries.',
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
      name: 'What is the difference between an Industry Circle and a Purpose Circle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An Industry Circle connects entrepreneurs through the sector in which they operate. A Purpose Circle connects entrepreneurs through a shared ambition, goal or stage of their journey.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to belong to the same industry as everyone in my Purpose Circle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The purpose of the Circle is precisely to create a cross-industry environment around a shared ambition.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I belong to both?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An entrepreneur can have both an industry identity and a purpose. Your Industry Circle reflects your business context. Your Purpose Circle reflects what you are trying to achieve.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a Purpose Circle only for entrepreneurs who have already achieved their goal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The shared purpose can be the ambition you are working toward. You do not have to arrive with the destination already reached.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if my goal changes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Entrepreneurial journeys evolve. The purpose that matters to you today may not be the purpose that defines your next chapter. What matters is finding the environment that is relevant to your journey.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a Purpose Circle about networking?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The deeper intention is broader than networking. It is about Learning, Sharing and Relationships—and allowing those relationships to create possibilities for collaboration and contribution.',
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
