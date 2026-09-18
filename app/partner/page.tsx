import { Metadata } from 'next'
import { PartnerPageClient } from '@/components/partner/partner-page-client'

export const metadata: Metadata = {
  title: 'Partner With Peers Global',
  description:
    'Partner with a national community of entrepreneurs. Institutions, associations, brands and organisations working with Peers Global.',
  keywords: [
    'business community partnership India',
    'partner with peers global',
    'MSME institutional partnerships',
    'chamber of commerce collaboration India',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/partner',
  },
  openGraph: {
    title: 'Partner With Peers Global',
    description:
      'Partner with a national community of entrepreneurs. Institutions, associations, brands and organisations working with Peers Global.',
    url: 'https://peersglobal.com/partner',
    siteName: 'Peers Global',
    type: 'website',
  },
}

export default function PartnerPage() {
  return <PartnerPageClient />
}
