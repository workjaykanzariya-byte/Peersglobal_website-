import { Metadata } from 'next'
import { ImpactConfirmationClient } from '@/components/currency/impact-confirmation-client'

export const metadata: Metadata = {
  title: 'How Impact Is Confirmed | Peers Global',
  description:
    'You cannot award yourself impact. Every contribution at Peers Global is confirmed by the Peer who received it.',
  keywords: [
    'impact confirmation peers global',
    'bilateral confirmation unity app',
    'verified contribution record',
    'peer impact points',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/impact-confirmation',
  },
  openGraph: {
    title: 'How Impact Is Confirmed | Peers Global',
    description:
      'You cannot award yourself impact. Every contribution at Peers Global is confirmed by the Peer who received it.',
    url: 'https://peersglobal.com/impact-confirmation',
    siteName: 'Peers Global',
    type: 'article',
  },
}

export default function ImpactConfirmationPage() {
  return <ImpactConfirmationClient />
}
