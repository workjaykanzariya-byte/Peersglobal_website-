import { Metadata } from 'next'
import { RefundPolicyClient } from '@/components/legal/refund-policy-client'

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy | Peers Global',
  description:
    'Policy regarding membership fees, event tickets, category reservations, and duplicate transaction handling.',
  keywords: [
    'refund policy peers global',
    'cancellation policy',
    'membership fee refund rules',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/refund-policy',
  },
  openGraph: {
    title: 'Refund & Cancellation Policy | Peers Global',
    description:
      'Policy regarding membership fees, event tickets, and transaction processing.',
    url: 'https://peersglobal.com/refund-policy',
    siteName: 'Peers Global',
    type: 'website',
  },
}

export default function RefundPolicyPage() {
  return <RefundPolicyClient />
}
