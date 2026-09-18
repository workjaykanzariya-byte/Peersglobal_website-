import type { Metadata } from 'next'
import { CollaborationWinsClient } from '@/components/stories/collaboration-wins-client'

export const metadata: Metadata = {
  title: 'Collaboration Wins | Peers Global',
  description:
    'Every collaboration recorded at Peers Global, as it happens. Referrals, introductions, partnerships and support — logged by Peers, confirmed by Peers.',
  keywords: [
    'business collaboration examples',
    'entrepreneur referrals India',
    'business partnership wins',
    'collaboration wins',
    'peer collaborations live feed',
    'Unity app wins',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/stories/wins',
  },
  openGraph: {
    title: 'Collaboration Wins | Peers Global',
    description:
      'Every collaboration recorded at Peers Global, as it happens. Referrals, introductions, partnerships and support — logged by Peers, confirmed by Peers.',
    url: 'https://peersglobal.com/stories/wins',
    siteName: 'Peers Global',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Collaboration Wins | Peers Global',
    description:
      'Every collaboration recorded at Peers Global, as it happens. Referrals, introductions, partnerships and support — logged by Peers, confirmed by Peers.',
  },
}

export default function CollaborationWinsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Collaboration Wins | Peers Global',
    description:
      'Every collaboration recorded at Peers Global, as it happens. Referrals, introductions, partnerships and support — logged by Peers, confirmed by Peers.',
    url: 'https://peersglobal.com/stories/wins',
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
      <CollaborationWinsClient />
    </>
  )
}
