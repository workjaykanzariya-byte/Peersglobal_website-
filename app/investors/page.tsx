import { Metadata } from 'next'
import { InvestorsPageClient } from '@/components/investors/investors-page-client'

export const metadata: Metadata = {
  title: 'Investors | Peers Global',
  description:
    'Peers Global — building the infrastructure for entrepreneurial collaboration. Investor information and enquiries.',
  keywords: [
    'peers global investors',
    'entrepreneurial collaboration infrastructure',
    'MSME ecosystem investment',
    'community platform investment India',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/investors',
  },
  openGraph: {
    title: 'Investors | Peers Global',
    description:
      'Peers Global — building the infrastructure for entrepreneurial collaboration. Investor information and enquiries.',
    url: 'https://peersglobal.com/investors',
    siteName: 'Peers Global',
    type: 'website',
  },
}

export default function InvestorsPage() {
  return <InvestorsPageClient />
}
