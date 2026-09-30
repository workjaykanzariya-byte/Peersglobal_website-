import type { Metadata } from 'next'
import { UnityPageClient } from '@/components/unity/unity-page-client'

export const metadata: Metadata = {
  title: 'Unity | A Global Community of Entrepreneurs in Your Pocket | Peers Global',
  description:
    'No advertising. No strangers. No algorithm deciding what you see. Unity is where the PEERS GLOBAL community continues between meetings.',
  keywords: [
    'peers global unity app',
    'unity entrepreneur community',
    'business networking app without ads',
    'peers global digital platform',
    'circle chat and messaging app',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/unity',
  },
  openGraph: {
    title: 'Unity | A Global Community of Entrepreneurs in Your Pocket | Peers Global',
    description:
      'No advertising. No strangers. No algorithm deciding what you see. Unity is where the PEERS GLOBAL community continues between meetings.',
    url: 'https://peersglobal.com/unity',
    type: 'website',
    images: [
      {
        url: '/images/unity-hero-phones.jpg',
        width: 1200,
        height: 630,
        alt: 'Peers Global Unity Mobile Application Interface Mockup',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unity | A Global Community of Entrepreneurs in Your Pocket | Peers Global',
    description:
      'No advertising. No strangers. No algorithm deciding what you see. Unity is where the PEERS GLOBAL community continues between meetings.',
    images: ['/images/unity-hero-phones.jpg'],
  },
}

export default function UnityPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Unity by Peers Global',
    operatingSystem: 'iOS, Android, Web',
    applicationCategory: 'BusinessApplication',
    description:
      'A global community of entrepreneurs in your pocket. No advertising, no strangers, no algorithm.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <UnityPageClient />
    </>
  )
}
