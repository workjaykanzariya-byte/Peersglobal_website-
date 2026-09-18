import { Metadata } from 'next'
import { GiveFirstClient } from '@/components/give-first/give-first-client'

export const metadata: Metadata = {
  title: 'The Give-First Principle | Peers Global',
  description:
    'Give before you ask. The founding rule of Peers Global, why it works, and how it turns a room of strangers into a community that produces.',
  keywords: [
    'give first principle',
    'giving in business networking',
    'reciprocity in business',
    'business community culture',
    'Dr Pravin Parmar give first',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/give-first',
  },
  openGraph: {
    title: 'The Give-First Principle | Peers Global',
    description:
      'Give before you ask. The founding rule of Peers Global, why it works, and how it turns a room of strangers into a community that produces.',
    url: 'https://peersglobal.com/give-first',
    siteName: 'Peers Global',
    type: 'article',
  },
}

export default function GiveFirstPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Give-First Principle: You Contribute Before You Ask',
    description:
      'The founding rule of Peers Global, why it works, and how it turns a room of strangers into a community that produces.',
    url: 'https://peersglobal.com/give-first',
    author: {
      '@type': 'Person',
      name: 'Dr. Pravin Parmar',
      url: 'https://peersglobal.com/founder',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Peers Global',
      url: 'https://peersglobal.com',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <GiveFirstClient />
    </>
  )
}
