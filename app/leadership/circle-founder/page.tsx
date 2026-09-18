import type { Metadata } from 'next'
import { CircleFounderClient } from '@/components/leadership/circle-founder-client'

export const metadata: Metadata = {
  title: 'Circle Founder | Peers Global',
  description:
    'A Circle Founder convenes the entrepreneurs of a city or an industry and builds a room where none existed. The role, the influence, the platform.',
  keywords: [
    'become a circle founder',
    'start a business circle',
    'circle founder leadership',
    'convene entrepreneurs',
    'business community director',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/leadership/circle-founder',
  },
  openGraph: {
    title: 'Circle Founder | Peers Global',
    description:
      'A Circle Founder convenes the entrepreneurs of a city or an industry and builds a room where none existed. Structure starts from Day 1.',
    url: 'https://peersglobal.com/leadership/circle-founder',
    type: 'website',
    images: [
      {
        url: '/images/leadership-circle-founder.jpg',
        width: 1200,
        height: 630,
        alt: 'Circle Founders convening and shaping the future',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Circle Founder | Peers Global',
    description:
      'A Circle Founder convenes the entrepreneurs of a city or an industry and builds a room where none existed. Structure starts from Day 1.',
    images: ['/images/leadership-circle-founder.jpg'],
  },
}

export default function CircleFounderPage() {
  return <CircleFounderClient />
}
