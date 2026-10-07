import type { Metadata } from 'next'
import { InsightsPageClient } from '@/components/insights/insights-page-client'

export const metadata: Metadata = {
  title: 'Insights | Written by Entrepreneurs Who Have Done the Thing | Peers Global',
  description:
    'There is a difference between knowing something and having lived it. Practical writing on Business Growth, Collaboration, Leadership, Community, and Founder’s Desk.',
  keywords: [
    'insights peers global',
    'entrepreneur articles India',
    'business growth lessons',
    'real founder leadership articles',
    'collaboration and give first insights',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/insights',
  },
  openGraph: {
    title: 'Insights | Written by Entrepreneurs Who Have Done the Thing | Peers Global',
    description:
      'There is a difference between knowing something and having lived it. Practical writing on Business Growth, Collaboration, Leadership, Community, and Founder’s Desk.',
    url: 'https://peersglobal.com/insights',
    siteName: 'Peers Global',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insights | Written by Entrepreneurs Who Have Done the Thing | Peers Global',
    description:
      'There is a difference between knowing something and having lived it. Practical writing on Business Growth, Collaboration, Leadership, Community, and Founder’s Desk.',
  },
}

export default function InsightsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Peers Global Insights',
    description:
      'Written by entrepreneurs who have done the thing they are writing about. Experience that has been lived, lessons learned, and perspectives worth sharing.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <InsightsPageClient />
    </>
  )
}
