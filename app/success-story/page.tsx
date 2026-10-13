import type { Metadata } from 'next'
import { SuccessStoryClient } from '@/components/stories/success-story-client'

export const metadata: Metadata = {
  title: 'Success Stories | Verified Founder Breakthroughs & Case Studies | Peers Global',
  description:
    'Explore verified real-world success stories from Peers Global. Discover how non-transactional peer collaboration, boardroom hot seats, and strategic alliances unlocked multi-crore joint ventures and cross-border scale.',
  keywords: [
    'peers global success stories',
    'entrepreneur success stories India',
    'founder collaboration case studies',
    'verified business breakthroughs',
    'joint ventures and strategic alliances',
    'real founder transformation stories',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/success-story',
  },
  openGraph: {
    title: 'Success Stories | Verified Founder Breakthroughs & Case Studies | Peers Global',
    description:
      'Explore verified real-world success stories from Peers Global. Discover how peer collaboration, boardroom trust, and strategic alliances unlocked multi-crore joint ventures and cross-border scale.',
    url: 'https://peersglobal.com/success-story',
    siteName: 'Peers Global',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Success Stories | Verified Founder Breakthroughs & Case Studies | Peers Global',
    description:
      'Explore verified real-world success stories from Peers Global. Discover how peer collaboration, boardroom trust, and strategic alliances unlocked multi-crore joint ventures and cross-border scale.',
  },
}

export default function SuccessStoryPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Peers Global Verified Success Stories & Collaboration Case Studies',
    description:
      'Verified real-world collaborations, joint ventures, and business breakthroughs between entrepreneurs across Circles, cities, and industries.',
    hasPart: [
      {
        '@type': 'VideoObject',
        name: 'Scaling Cross-Border Logistics by 400% — Apex Global Logistics',
        author: { '@type': 'Person', name: 'Vikram Singhania' },
      },
      {
        '@type': 'VideoObject',
        name: 'Securing Tier-1 Hospital Partnerships Across Asia — Nexus Healthcare AI',
        author: { '@type': 'Person', name: 'Sarah Jenkins' },
      },
      {
        '@type': 'VideoObject',
        name: 'From Regional Builder to Multi-State Developer — Kavita Infrastructure Ltd',
        author: { '@type': 'Person', name: 'Rajesh K. Mehta' },
      },
      {
        '@type': 'VideoObject',
        name: 'Unlocking Cross-Border Peer Advisory — Vanguard FinTech',
        author: { '@type': 'Person', name: 'Elena Rostova' },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SuccessStoryClient />
    </>
  )
}
