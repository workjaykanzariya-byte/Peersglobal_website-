import { Metadata } from 'next'
import { CommunityGuidelinesClient } from '@/components/legal/community-guidelines-client'

export const metadata: Metadata = {
  title: 'Community Guidelines | Peers Global',
  description:
    'Standards for healthy rooms, category exclusivity, respectful interaction, and authentic contribution across all Circles and the Unity App.',
  keywords: [
    'peers global community guidelines',
    'circle rules and code',
    'no hard pitch networking policy',
    'category protection business circle',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/community-guidelines',
  },
  openGraph: {
    title: 'Community Guidelines | Peers Global',
    description:
      'Standards for healthy rooms, category exclusivity, and authentic collaboration.',
    url: 'https://peersglobal.com/community-guidelines',
    siteName: 'Peers Global',
    type: 'website',
  },
}

export default function CommunityGuidelinesPage() {
  return <CommunityGuidelinesClient />
}
