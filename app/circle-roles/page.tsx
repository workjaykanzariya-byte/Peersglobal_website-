import { Metadata } from 'next'
import { CircleRolesClient } from '@/components/circle-roles/circle-roles-client'

export const metadata: Metadata = {
  title: 'Roles Inside a Circle | Peers Global',
  description:
    'Who runs a Peers Global Circle — the Founder, the Director, three committees, their Chairs and Leaders, and the Project Chairs.',
  keywords: [
    'circle roles peers global',
    'business circle leadership structure',
    'business community committee roles',
    'Circle Director role',
    'Circle Founder role',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/circle-roles',
  },
  openGraph: {
    title: 'Roles Inside a Circle | Peers Global',
    description:
      'Who runs a Peers Global Circle — the Founder, the Director, three committees, their Chairs and Leaders, and the Project Chairs.',
    url: 'https://peersglobal.com/circle-roles',
    siteName: 'Peers Global',
    type: 'article',
  },
}

export default function CircleRolesPage() {
  return <CircleRolesClient />
}
