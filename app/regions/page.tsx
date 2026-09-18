import { Metadata } from 'next'
import { DistrictsRegionsClient } from '@/components/map/districts-regions-client'

export const metadata: Metadata = {
  title: 'Districts & Regions | Peers Global',
  description:
    'Cities that grow together. How Peers Global organizes territorial regions to help entrepreneurs unlock cross-city trade, supply chains, and joint ventures.',
  keywords: [
    'districts and regions peers global',
    'territorial business network',
    'regional entrepreneur clusters',
    'inter-city business networking',
    'MSME trade corridors',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/regions',
  },
  openGraph: {
    title: 'Districts & Regions | Peers Global',
    description:
      'Cities that grow together. How Peers Global organizes territorial regions to help entrepreneurs unlock cross-city trade, supply chains, and joint ventures.',
    url: 'https://peersglobal.com/regions',
    siteName: 'Peers Global',
    type: 'website',
  },
}

export default function RegionsPage() {
  return <DistrictsRegionsClient />
}
