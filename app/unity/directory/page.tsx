import { Metadata } from 'next'
import { getAllMembers } from '@/lib/api/members'
import { PeerDirectoryClient } from '@/components/unity/peer-directory-client'

export const metadata: Metadata = {
  title: 'The Peer Directory | Peers Global',
  description:
    'Every entrepreneur in this community, searchable by industry, city, capability, and Circle. Search the way business actually works.',
  openGraph: {
    title: 'The Peer Directory | Peers Global',
    description:
      'Every entrepreneur in this community, searchable by industry, city, capability, and Circle.',
    images: ['/images/who-we-are-friends.jpg'],
  },
}

export const dynamic = 'force-dynamic'

export default async function PeerDirectoryPage() {
  const members = await getAllMembers()
  return <PeerDirectoryClient initialMembers={members} />
}
