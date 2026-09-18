import { Metadata } from 'next'
import { SecurityClient } from '@/components/legal/security-client'

export const metadata: Metadata = {
  title: 'Security & Data | Peers Global',
  description:
    'Technical safeguards, TLS 1.3 and AES-256 encryption, data residency, and platform security architecture for Peers Global.',
  keywords: [
    'security peers global',
    'data protection architecture',
    'encryption standards',
    'vulnerability disclosure',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/security',
  },
  openGraph: {
    title: 'Security & Data | Peers Global',
    description:
      'Technical safeguards and encryption standards for Peers Global platform.',
    url: 'https://peersglobal.com/security',
    siteName: 'Peers Global',
    type: 'website',
  },
}

export default function SecurityPage() {
  return <SecurityClient />
}
