import { Metadata } from 'next'
import { SpeakClient } from '@/components/events/speak-client'

export const metadata: Metadata = {
  title: 'Speak at Peers Global',
  description:
    'Rooms of entrepreneurs who came to learn something usable. Share practical insights, masterclasses, and tactical lessons from the field.',
  keywords: [
    'speak at peers global',
    'entrepreneur speaker India',
    'business keynote speaker India',
    'impact mentor masterclasses',
    'practitioner speaking opportunities',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/events/speak',
  },
  openGraph: {
    title: 'Speak at Peers Global',
    description:
      'Rooms of entrepreneurs who came to learn something usable. Share practical insights, masterclasses, and tactical lessons from the field.',
    url: 'https://peersglobal.com/events/speak',
    siteName: 'Peers Global',
    type: 'website',
  },
}

export default function SpeakPage() {
  return <SpeakClient />
}
