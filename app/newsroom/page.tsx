import { Metadata } from 'next'
import { NewsroomPageClient } from '@/components/newsroom/newsroom-page-client'

export const metadata: Metadata = {
  title: 'Newsroom | Peers Global',
  description:
    'Announcements, press releases, media coverage and the Peers Global media kit.',
  keywords: [
    'peers global news',
    'peers global press releases',
    'peers global media kit',
    'entrepreneur community news India',
    'Dr Pravin Parmar media',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/newsroom',
  },
  openGraph: {
    title: 'Newsroom | Peers Global',
    description:
      'Announcements, press releases, media coverage and the Peers Global media kit.',
    url: 'https://peersglobal.com/newsroom',
    siteName: 'Peers Global',
    type: 'website',
  },
}

export default function NewsroomPage() {
  return <NewsroomPageClient />
}
