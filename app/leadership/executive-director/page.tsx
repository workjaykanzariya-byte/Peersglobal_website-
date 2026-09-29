import type { Metadata } from 'next'
import { ExecutiveDirectorClient } from '@/components/leadership/executive-director-client'

export const metadata: Metadata = {
  title: 'Executive Director | Peers Global',
  description:
    'Executive Directors carry territory at Peers Global — Area, District, State and Country. Building Circles, developing leaders and growing an entrepreneurial ecosystem.',
  keywords: [
    'executive director role',
    'regional business community leader',
    'state entrepreneur network head',
    'country director business community',
    'carry territory',
    'ecosystem leadership',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/leadership/regional-ed',
  },
  openGraph: {
    title: 'Executive Director | Peers Global',
    description:
      'You carry territory. Area, District, State, Country. Explore the Executive Director leadership role at Peers Global.',
    url: 'https://peersglobal.com/leadership/regional-ed',
    type: 'website',
    images: [
      {
        url: '/images/executive-director-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Executive Director overlooking city skyline from high-rise terrace',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Executive Director | Peers Global',
    description:
      'You carry territory. Area, District, State, Country. Explore the Executive Director leadership role at Peers Global.',
    images: ['/images/executive-director-hero.jpg'],
  },
}

export default function ExecutiveDirectorAliasPage() {
  return <ExecutiveDirectorClient />
}
