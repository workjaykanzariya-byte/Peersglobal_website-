import type { Metadata } from 'next'
import { GalleryPageClient } from '@/components/gallery/gallery-page-client'

export const metadata: Metadata = {
  title: 'Gallery | Peers Global',
  description:
    'Circle meetings, conclaves, summits and celebrations across the Peers Global community.',
  keywords: [
    'peers global gallery',
    'entrepreneur events gallery',
    'circle meetings photos',
    'Peers Global summits photos',
    'business conclave gallery India',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/gallery',
  },
  openGraph: {
    title: 'Gallery | Peers Global',
    description:
      'Circle meetings, conclaves, summits and celebrations across the Peers Global community.',
    url: 'https://peersglobal.com/gallery',
    siteName: 'Peers Global',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gallery | Peers Global',
    description:
      'Circle meetings, conclaves, summits and celebrations across the Peers Global community.',
  },
}

export default function GalleryPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Peers Global Community Gallery',
    description:
      'Circle meetings, conclaves, summits and celebrations across the Peers Global community.',
    url: 'https://peersglobal.com/gallery',
    publisher: {
      '@type': 'Organization',
      name: 'Peers Global',
      url: 'https://peersglobal.com',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GalleryPageClient />
    </>
  )
}
