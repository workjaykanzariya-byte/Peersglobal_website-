import type { Metadata } from 'next'
import { JuryPortalClient } from '@/components/leadership/jury/jury-portal-client'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Jury Evaluation Portal | Peers Global Leadership',
  description: 'Confidential evaluation workspace for accredited Peers Global Selection Jurors & Scrutiny Board.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
}

export default function JuryPortalPage() {
  return <JuryPortalClient initialView="auto" />
}
