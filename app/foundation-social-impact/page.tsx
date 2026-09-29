import type { Metadata } from 'next'
import { SocialImpactClient } from '@/components/social-impact/social-impact-client'

export const metadata: Metadata = {
  title: 'Foundation & Social Impact | Peers Global',
  description:
    'How Peers Global creates impact through its foundation: entrepreneurs helping entrepreneurs, employment created, businesses sustained, and communities strengthened.',
  keywords: [
    'Peers Global foundation',
    'entrepreneurship social impact India',
    'MSME employment creation',
    '1 Million Entrepreneurs International Forum',
    'business collaboration impact',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/foundation-social-impact',
  },
  openGraph: {
    title: 'Foundation & Social Impact | Peers Global',
    description:
      'How Peers Global creates impact through its foundation and entrepreneurial community.',
    url: 'https://peersglobal.com/foundation-social-impact',
    siteName: 'Peers Global',
    type: 'website',
  },
}

export default function FoundationSocialImpactPage() {
  return <SocialImpactClient />
}
