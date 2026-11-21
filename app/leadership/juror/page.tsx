import type { Metadata } from 'next'
import { JuryPortalClient } from '@/components/leadership/jury/jury-portal-client'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Jury Portal Access | Peers Global',
  description: 'Confidential jury evaluation interface for Peers Global leadership selection.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
}

export default function JurorPortalPage() {
  return <JuryPortalClient initialView="auto" />
}
