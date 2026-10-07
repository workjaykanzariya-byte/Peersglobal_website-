import { Metadata } from 'next'
import { SpeakClient } from '@/components/events/speak-client'

export const metadata: Metadata = {
  title: 'Speak at Peers Global | Bring Us Something You Have Lived',
  description:
    'PEERS GLOBAL is a community of entrepreneurs. We are interested in experience before performance. If you have built the thing you are speaking about, we want to hear from you.',
  keywords: [
    'speak at peers global',
    'entrepreneur speaker India',
    'business practitioner speaking opportunities',
    'real founder keynote',
    'apply to speak peers global',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/events/speak',
  },
  openGraph: {
    title: 'Speak at Peers Global | Bring Us Something You Have Lived',
    description:
      'PEERS GLOBAL is a community of entrepreneurs. We are interested in experience before performance. If you have built the thing you are speaking about, we want to hear from you.',
    url: 'https://peersglobal.com/events/speak',
    siteName: 'Peers Global',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Speak at Peers Global | Bring Us Something You Have Lived',
    description:
      'PEERS GLOBAL is a community of entrepreneurs. We are interested in experience before performance. If you have built the thing you are speaking about, we want to hear from you.',
  },
}

export default function SpeakPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Speak at Peers Global',
    description:
      'Bring us something you have lived. Practitioner speaking opportunities for entrepreneurs across PEERS GLOBAL summits and masterclasses.',
    url: 'https://peersglobal.com/events/speak',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SpeakClient />
    </>
  )
}
