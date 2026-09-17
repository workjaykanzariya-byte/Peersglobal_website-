import type { Metadata } from 'next'
import { IndustryPageClient } from '@/components/circles/industry-page-client'

export const metadata: Metadata = {
  title: {
    absolute: 'Industry Circles | Business Groups by Sector | Peers Global',
  },
  description:
    'Nine Industry Circles at Peers Global — manufacturing, real estate, technology, healthcare, education, lifestyle, CSR, franchise and ESG. Find the Circle for your sector.',
  keywords: [
    'industry business circles',
    'manufacturing business group India',
    'real estate entrepreneur network',
    'technology business community',
    'healthcare business circle',
    'peers global industry circles',
    'category exclusivity business group',
  ],
  openGraph: {
    title: 'Industry Circles | Business Groups by Sector | Peers Global',
    description:
      'Nine Industry Circles at Peers Global — manufacturing, real estate, technology, healthcare, education, lifestyle, CSR, franchise and ESG. Find the Circle for your sector.',
    type: 'website',
    url: 'https://peersglobal.com/circles/industry',
  },
}

// Schema: ItemList for the nine industry circles
const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Industry Business Circles | Peers Global',
  description:
    'Nine Industry Circles at Peers Global for entrepreneurs across manufacturing, real estate, technology, healthcare, education, lifestyle, CSR, franchise and ESG sectors.',
  itemListElement: [
    'Manufacturing & Engineering',
    'Real Estate, Construction & Infrastructure',
    'Technology, IT & Digital Services',
    'Healthcare, Wellness & Life Sciences',
    'Education, Training & Skill Development',
    'Events, Fashion, Apparel & Lifestyle',
    'CSR, NGOs, Impact & Nation-Building',
    'Franchise & Licensing',
    'Sustainable & ESG Business',
  ].map((name, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    item: {
      '@type': 'Organization',
      name: `${name} Circle`,
      url: `https://peersglobal.com/circles/industry`,
    },
  })),
}

export default function CirclesIndustryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <IndustryPageClient />
    </>
  )
}
