import { Metadata } from 'next'
import { MarketplaceClient } from '@/components/currency/marketplace-client'

export const metadata: Metadata = {
  title: 'Peers Global Marketplace',
  description:
    'Where Peers Coin is redeemed — growth tools, learning programmes, business resources, community experiences and official merchandise.',
  keywords: [
    'peers global marketplace',
    'redeem peers coin',
    'entrepreneur growth tools',
    'business community rewards',
    'peer learning masterclasses',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/marketplace',
  },
  openGraph: {
    title: 'Peers Global Marketplace',
    description:
      'Where Peers Coin is redeemed — growth tools, learning programmes, business resources, community experiences and official merchandise.',
    url: 'https://peersglobal.com/marketplace',
    siteName: 'Peers Global',
    type: 'website',
  },
}

export default function MarketplacePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Peers Global Marketplace',
    description:
      'Where Peers Coin is redeemed — growth tools, learning programmes, business resources, community experiences and official merchandise.',
    url: 'https://peersglobal.com/marketplace',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'The 10-Way Cross-Border JV Playbook',
        description: 'Comprehensive legal, financial and operational framework for executing joint ventures.',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Scaling from ₹5Cr to ₹25Cr Masterclass',
        description: 'Four intensive weekend sessions taught by veteran Peers who scaled multi-crore enterprises.',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Annual Peers Global Summit VIP Delegate Pass',
        description: 'Full 3-day access to the annual flagship summit, closed-door industry roundtables.',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Commercial IP & Trademark Protection Kit',
        description: 'Vetted filing templates, cease-and-desist protocols, and brand safety checklists.',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'The Official Heritage Blazer Lapel Pin',
        description: 'Cast in brushed gold antique finish, featuring the iconic Peers Global seal.',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MarketplaceClient />
    </>
  )
}
