import { Metadata } from 'next'
import { IndiaNetworkClient } from '@/components/map/india-network-client'

export const metadata: Metadata = {
  title: 'Peers Global India | National Entrepreneur Community',
  description:
    'Where this community began. Founded in India, built for entrepreneurs everywhere. Driving MSME collaboration, industry growth, and 1 Million lives impacted.',
  keywords: [
    'peers global india',
    'business community India',
    'entrepreneur network India',
    'MSME growth India',
    'business networking Bharat',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/india',
  },
  openGraph: {
    title: 'Peers Global India | National Entrepreneur Community',
    description:
      'Where this community began. Founded in India, built for entrepreneurs everywhere. Driving MSME collaboration, industry growth, and 1 Million lives impacted.',
    url: 'https://peersglobal.com/india',
    siteName: 'Peers Global',
    type: 'website',
  },
}

export default function IndiaPage() {
  return <IndiaNetworkClient />
}
