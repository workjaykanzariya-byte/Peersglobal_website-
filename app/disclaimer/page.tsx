import { Metadata } from 'next'
import { DisclaimerClient } from '@/components/legal/disclaimer-client'

export const metadata: Metadata = {
  title: 'Disclaimer | Peers Global',
  description:
    'Legal disclosures, general information terms, no guarantee of outcome, and member-to-member liability limitations for Peers Global.',
  keywords: [
    'disclaimer peers global',
    'peers global legal notice',
    'member to member dealings policy',
    'peers coin non monetary disclosure',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/disclaimer',
  },
  openGraph: {
    title: 'Disclaimer | Peers Global',
    description:
      'Legal disclosures, general information terms, and liability limitations for Peers Global.',
    url: 'https://peersglobal.com/disclaimer',
    siteName: 'Peers Global',
    type: 'website',
  },
}

export default function DisclaimerPage() {
  return <DisclaimerClient />
}
