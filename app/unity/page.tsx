import type { Metadata } from 'next'
import { UnityPageClient } from '@/components/unity/unity-page-client'

export const metadata: Metadata = {
  title: 'Peers Global Unity App | A Global Community of Entrepreneurs',
  description:
    'Unity is where the Peers Global community lives — the feed, the Peers, messaging, Circle chat, one-to-one booking and the recognition system.',
  keywords: [
    'peers global unity app',
    'entrepreneur community app India',
    'business community app',
    'global entrepreneur community',
    'unity app download',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/unity',
  },
  openGraph: {
    title: 'Peers Global Unity App | A Global Community of Entrepreneurs',
    description:
      'A global community of entrepreneurs, in your pocket. No advertising. No strangers. No algorithm deciding what you see.',
    url: 'https://peersglobal.com/unity',
    type: 'website',
    images: [
      {
        url: '/images/unity-hero-phones.jpg',
        width: 1200,
        height: 630,
        alt: 'Peers Global Unity Mobile Application Interface',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peers Global Unity App | A Global Community of Entrepreneurs',
    description:
      'A global community of entrepreneurs, in your pocket. No advertising. No strangers. No algorithm deciding what you see.',
    images: ['/images/unity-hero-phones.jpg'],
  },
}

export default function UnityPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Peers Global Unity App | A Global Community of Entrepreneurs',
    description:
      'Unity is where the Peers Global community lives — the feed, the Peers, messaging, Circle chat, one-to-one booking and the recognition system.',
    url: 'https://peersglobal.com/unity',
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is the app free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, Unity is free to download and explore on iOS and Android. A Peers Global membership unlocks full interactive directory access, private direct messaging, and Circle participation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I explore before subscribing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. You can download the Unity App, explore public community feeds, see upcoming events, and review Circles across cities before committing.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is my information visible to everyone?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Your profile is private by default. Full contact details and direct booking become visible to a Peer only once a mutual connection is accepted.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there advertising in the app?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. There is no advertising anywhere in Unity, and nobody can pay to boost or promote themselves into your feed.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I message any Peer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can message any Peer you are mutually connected with. Charter Peers have priority capability to message any Peer across the global community directly.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is it available outside India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Unity is a global application serving entrepreneurs across India, the Middle East, Southeast Asia, North America, and Europe.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which devices does it support?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Unity is fully native and optimised for both Apple iOS (iPhone/iPad) and Google Android devices.',
          },
        },
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <UnityPageClient />
    </>
  )
}
