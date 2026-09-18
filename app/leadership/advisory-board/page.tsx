import { Metadata } from 'next'
import { AdvisoryBoardClient } from '@/components/leadership/advisory-board-client'

export const metadata: Metadata = {
  title: 'The Peers Board of Advisory | Peers Global',
  description:
    'Senior entrepreneurs whose experience is available to the whole community. Guiding institutional standards and mentoring the next generation of founders.',
  keywords: [
    'peers board of advisory',
    'business advisory board India',
    'entrepreneur governance',
    'senior founder mentorship',
    'Peers Global leadership',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/leadership/advisory-board',
  },
  openGraph: {
    title: 'The Peers Board of Advisory | Peers Global',
    description:
      'Senior entrepreneurs whose experience is available to the whole community.',
    url: 'https://peersglobal.com/leadership/advisory-board',
    siteName: 'Peers Global',
    type: 'website',
  },
}

export default function AdvisoryBoardPage() {
  return <AdvisoryBoardClient />
}
