import { Metadata } from 'next'
import { LearningPillarClient } from '@/components/learning/learning-pillar-client'

export const metadata: Metadata = {
  title: 'Learning at Peers Global | Masterclasses, Playbooks & Mentorship',
  description:
    'Impact Mentor Masterclasses, business playbooks and mentorship — all from entrepreneurs who built the thing they are teaching. Not theory. What actually works.',
  keywords: [
    'business learning for entrepreneurs India',
    'impact mentor masterclasses',
    'business playbooks for entrepreneurs',
    'peer mentorship India',
    'LSR growth model',
    'practical entrepreneur learning',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/learning',
  },
  openGraph: {
    title: 'Learning at Peers Global | Masterclasses, Playbooks & Mentorship',
    description:
      'Impact Mentor Masterclasses, business playbooks and mentorship — all from entrepreneurs who built the thing they are teaching.',
    url: 'https://peersglobal.com/learning',
    siteName: 'Peers Global',
    type: 'website',
  },
}

export default function LearningPage() {
  return <LearningPillarClient />
}
