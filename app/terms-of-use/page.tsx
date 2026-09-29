import { Metadata } from 'next'
import { TermsOfUseClient } from '@/components/legal/terms-of-use-client'

export const metadata: Metadata = {
  title: 'Terms of Use | Peers Global',
  description:
    'Terms and legal conditions governing the use of Peers Global website, mobile applications, and digital platforms.',
  keywords: [
    'terms of use peers global',
    'peers global legal agreement',
    'terms and conditions',
    'unity app terms',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/terms-of-use',
  },
  openGraph: {
    title: 'Terms of Use | Peers Global',
    description:
      'Terms and legal conditions governing the use of Peers Global website and platform.',
    url: 'https://peersglobal.com/terms-of-use',
    siteName: 'Peers Global',
    type: 'website',
  },
}

export default function TermsOfUsePage() {
  return <TermsOfUseClient />
}
