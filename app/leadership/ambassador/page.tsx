import type { Metadata } from 'next'
import { AmbassadorClient } from '@/components/leadership/ambassador-client'

export const metadata: Metadata = {
  title: 'Ambassador | Peers Global',
  description:
    'Ambassadors carry Peers Global into rooms where it is not yet known. The role, the standing it builds, and who it is for.',
  keywords: [
    'peers global ambassador',
    'business community ambassador role',
    'entrepreneur network ambassador India',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/leadership/ambassadors',
  },
}

export default function AmbassadorAliasPage() {
  return <AmbassadorClient />
}
