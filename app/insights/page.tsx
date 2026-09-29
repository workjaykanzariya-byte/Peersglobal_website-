import type { Metadata } from 'next'
import { InsightsPageClient } from '@/components/insights/insights-page-client'

export const metadata: Metadata = {
  title: 'Insights for Entrepreneurs | Peers Global',
  description:
    'Practical writing on business growth, collaboration, leadership and community — from entrepreneurs who have done the thing they are writing about.',
  keywords: [
    'business insights entrepreneurs India',
    'entrepreneur blog India',
    'MSME business advice',
    'business growth articles',
    'collaboration insights',
    'Peers Global blog',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/insights',
  },
  openGraph: {
    title: 'Insights for Entrepreneurs | Peers Global',
    description:
      'Practical writing on business growth, collaboration, leadership and community — from entrepreneurs who have done the thing they are writing about.',
    url: 'https://peersglobal.com/insights',
    siteName: 'Peers Global',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insights for Entrepreneurs | Peers Global',
    description:
      'Practical writing on business growth, collaboration, leadership and community — from entrepreneurs who have done the thing they are writing about.',
  },
}

export default function InsightsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        name: 'Peers Global Insights',
        description:
          'Practical writing on business growth, collaboration, leadership and community from entrepreneurs who have built the thing they are teaching.',
        url: 'https://peersglobal.com/insights',
        publisher: {
          '@type': 'Organization',
          name: 'Peers Global',
          url: 'https://peersglobal.com',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Who writes for Insights?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Peers, Circle Directors, Industry Directors and invited experts. Every writer has built and done the thing they are writing about.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I contribute?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. If you have solved a challenge or formulated a practical framework that would benefit other entrepreneurs, speak to your Circle Director.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do I need to be a member to read?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Insights is open to everyone across the global entrepreneurial ecosystem as part of our Give-First commitment.',
            },
          },
        ],
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <InsightsPageClient />
    </>
  )
}
