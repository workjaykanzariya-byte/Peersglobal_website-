import { Metadata } from 'next'
import { InitiativesPageClient } from '@/components/initiatives/initiatives-page-client'

export const metadata: Metadata = {
  title: 'Our Initiatives | Peers Global',
  description:
    'Peers Global, VyapaarJagat, Fempreneur, Greenpreneur and the 1 Million Entrepreneurs International Forum — one mission across several platforms.',
  keywords: [
    'peers global initiatives',
    'VyapaarJagat media',
    'Fempreneur community',
    'Greenpreneur ESG',
    '1 Million Entrepreneurs International Forum',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/initiatives',
  },
  openGraph: {
    title: 'Our Initiatives | Peers Global',
    description:
      'Peers Global, VyapaarJagat, Fempreneur, Greenpreneur and the 1 Million Entrepreneurs International Forum — one mission across several platforms.',
    url: 'https://peersglobal.com/initiatives',
    siteName: 'Peers Global',
    type: 'website',
  },
}

export default function InitiativesPage() {
  return <InitiativesPageClient />
}
