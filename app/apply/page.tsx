import type { Metadata } from 'next'
import { ApplyPageClient } from '@/components/membership/apply-page-client'

export const metadata: Metadata = {
  title: 'Apply for Membership | Peers Global — Enter the Inner Board',
  description:
    'Apply to join Peers Global, India’s premier governed community of collaboration for business founders and promoter-directors. Category exclusivity, verified peer standing, and the Unity Platform.',
  keywords: [
    'apply to peers global',
    'peers global membership registration',
    'business circle application India',
    'founder peer network join',
    'category exclusive business circle',
    'promoter network Ahmedabad Mumbai Delhi Bangalore',
    'unity app download peers global',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/apply',
  },
  openGraph: {
    title: 'Apply for Membership | Peers Global — Enter the Inner Board',
    description:
      'Apply to join Peers Global. Category exclusivity, verified peer standing, and the Unity Platform. Category seats are limited to 1 per Circle.',
    url: 'https://peersglobal.com/apply',
    type: 'website',
    images: [
      {
        url: '/images/who-we-are-inner-board.jpg',
        width: 1200,
        height: 630,
        alt: 'Peers Global Founders convening in an executive inner board meeting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apply for Membership | Peers Global',
    description:
      'Apply to join Peers Global. Category exclusivity, verified peer standing, and the Unity Platform.',
    images: ['/images/who-we-are-inner-board.jpg'],
  },
}

export default function ApplyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Apply for Peers Global Membership',
    description:
      'Official membership application and registration portal for Peers Global. Promoter-led, category-exclusive business circles.',
    url: 'https://peersglobal.com/apply',
    publisher: {
      '@type': 'Organization',
      name: 'Peers Global Business Media Private Limited',
      url: 'https://peersglobal.com',
      logo: 'https://peersglobal.com/images/logo-full.png',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ApplyPageClient />
    </>
  )
}
