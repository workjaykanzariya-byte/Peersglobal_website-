import { Metadata } from 'next'
import { SocialImpactClient } from '@/components/social-impact/social-impact-client'

export const metadata: Metadata = {
  title: 'Social Impact | Peers Global',
  description:
    'How Peers Global creates impact — entrepreneurs helping entrepreneurs, employment created, businesses sustained, and communities strengthened.',
  keywords: [
    'entrepreneurship social impact India',
    'MSME employment creation',
    '1 Million Entrepreneurs International Forum',
    'business collaboration impact',
    'Peers Global foundation',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/social-impact',
  },
  openGraph: {
    title: 'Social Impact | Peers Global',
    description:
      'How Peers Global creates impact — entrepreneurs helping entrepreneurs, employment created, businesses sustained, and communities strengthened.',
    url: 'https://peersglobal.com/social-impact',
    siteName: 'Peers Global',
    type: 'website',
  },
}

export default function SocialImpactPage() {
  return <SocialImpactClient />
}
