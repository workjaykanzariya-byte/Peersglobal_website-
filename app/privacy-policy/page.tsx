import { Metadata } from 'next'
import { PrivacyPolicyClient } from '@/components/legal/privacy-policy-client'

export const metadata: Metadata = {
  title: 'Privacy Policy | Peers Global',
  description:
    'Information collection, DPDP Act 2023 compliance, data retention, and privacy safeguards for Peers Global members.',
  keywords: [
    'privacy policy peers global',
    'DPDP Act 2023 compliance',
    'data protection policy',
    'unity app privacy',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | Peers Global',
    description:
      'Information collection, DPDP Act compliance, and data safeguards for Peers Global members.',
    url: 'https://peersglobal.com/privacy-policy',
    siteName: 'Peers Global',
    type: 'website',
  },
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />
}
