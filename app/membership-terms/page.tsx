import { Metadata } from 'next'
import { MembershipTermsClient } from '@/components/legal/membership-terms-client'

export const metadata: Metadata = {
  title: 'Membership Terms | Peers Global',
  description:
    'Rights, category exclusivity, attendance obligations, and formal covenants governing membership in Peers Global Circles.',
  keywords: [
    'membership terms peers global',
    'circle seat agreement',
    'category protection terms',
    'business networking membership agreement',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/membership-terms',
  },
  openGraph: {
    title: 'Membership Terms | Peers Global',
    description:
      'Rights, category exclusivity, and formal covenants governing membership in Peers Global Circles.',
    url: 'https://peersglobal.com/membership-terms',
    siteName: 'Peers Global',
    type: 'website',
  },
}

export default function MembershipTermsPage() {
  return <MembershipTermsClient />
}
