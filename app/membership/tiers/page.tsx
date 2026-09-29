import type { Metadata } from 'next'
import { TiersClient } from '@/components/membership/tiers-client'

export const metadata: Metadata = {
  title: {
    absolute: 'Membership & Investment | Peers Global',
  },
  description:
    'Full transparency on what membership costs — platform charges, Circle experience charges, and the time it takes.',
  keywords: [
    'peers global membership cost',
    'charter membership entrepreneurs',
    'business community membership India',
    'entrepreneur membership cost',
    'peer membership price',
  ],
  openGraph: {
    title: 'Membership & Investment | Peers Global',
    description:
      'Full transparency on what membership costs — platform charges, Circle experience charges, and the time it takes.',
    type: 'website',
    url: 'https://peersglobal.com/membership/tiers',
  },
}

// Schema: Product / Offer for tiers
const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Peers Global Membership',
  description:
    'Annual membership for entrepreneurs with Unity App access, global directory, recognition, and category-exclusive Circle seats.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Peer Membership',
      price: '18000',
      priceCurrency: 'INR',
      description: 'Annual platform membership including Unity App, directory, recognition system and marketplace access.',
    },
    {
      '@type': 'Offer',
      name: 'Charter Peer',
      price: '100000',
      priceCurrency: 'INR',
      description: 'National and international scale membership with direct open contact access, priority leadership and media.',
    },
  ],
}

export default function MembershipTiersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <TiersClient />
    </>
  )
}
