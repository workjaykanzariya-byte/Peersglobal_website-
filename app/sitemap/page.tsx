import { Metadata } from 'next'
import { SitemapClient } from '@/components/legal/sitemap-client'

export const metadata: Metadata = {
  title: 'Sitemap | Peers Global',
  description:
    'Comprehensive directory of all chapters, portals, pillars, governance frameworks, and resources across Peers Global.',
  keywords: [
    'sitemap peers global',
    'directory peers global',
    'peers global pages index',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/sitemap',
  },
  openGraph: {
    title: 'Sitemap | Peers Global',
    description:
      'Comprehensive directory of all chapters, portals, and resources across Peers Global.',
    url: 'https://peersglobal.com/sitemap',
    siteName: 'Peers Global',
    type: 'website',
  },
}

export default function SitemapPage() {
  return <SitemapClient />
}
