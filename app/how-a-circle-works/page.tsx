import { Metadata } from 'next'
import { HowACircleWorksClient } from '@/components/how-a-circle-works/how-a-circle-works-client'

export const metadata: Metadata = {
  title: 'How a Circle Works | Peers Global',
  description:
    'How a Peers Global Circle is composed, how seats work, how it runs and how it grows. The mechanics behind the room.',
  keywords: [
    'how business circles work',
    'business circle structure',
    'entrepreneur group format',
    'business networking group how it works',
    'category exclusivity in business community',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/how-a-circle-works',
  },
  openGraph: {
    title: 'How a Circle Works | Peers Global',
    description:
      'How a Peers Global Circle is composed, how seats work, how it runs and how it grows. The mechanics behind the room.',
    url: 'https://peersglobal.com/how-a-circle-works',
    siteName: 'Peers Global',
    type: 'article',
  },
}

export default function HowACircleWorksPage() {
  return <HowACircleWorksClient />
}
