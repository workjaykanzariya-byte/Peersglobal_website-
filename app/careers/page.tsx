import { Metadata } from 'next'
import { CareersClient } from '@/components/company/careers-client'

export const metadata: Metadata = {
  title: 'Careers | Peers Global',
  description:
    'Building the infrastructure for how entrepreneurs collaborate. Explore open engineering, community operations, media, and design roles at our Ahmedabad headquarters.',
  keywords: [
    'careers peers global',
    'jobs peers global',
    'entrepreneurship community jobs Ahmedabad',
    'startup jobs Gujarat',
    'community operations careers India',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/careers',
  },
  openGraph: {
    title: 'Careers | Peers Global',
    description:
      'Building the infrastructure for how entrepreneurs collaborate.',
    url: 'https://peersglobal.com/careers',
    siteName: 'Peers Global',
    type: 'website',
  },
}

export default function CareersPage() {
  return <CareersClient />
}
