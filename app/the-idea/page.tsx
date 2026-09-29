import type { Metadata } from 'next'
import { TheIdeaClient } from '@/components/our-world/the-idea-client'

export const metadata: Metadata = {
  title: "The Idea Behind Peers Global | World's First Community of Collaboration",
  description:
    'Why Peers Global exists. The loneliness entrepreneurs never talk about, and the belief that no one should have to build alone.',
  keywords: [
    'community of collaboration',
    'Peers Global',
    'the idea',
    'entrepreneurship',
    'MSME India',
    'Dr Pravin Parmar',
    'business networking',
    'inner board',
  ],
  openGraph: {
    title: "The Idea Behind Peers Global | World's First Community of Collaboration",
    description:
      'Why Peers Global exists. The loneliness entrepreneurs never talk about, and the belief that no one should have to build alone.',
    type: 'website',
    url: 'https://peersglobal.com/the-idea',
  },
}

export const dynamic = 'force-dynamic'

export default function TheIdeaPage() {
  return <TheIdeaClient />
}
