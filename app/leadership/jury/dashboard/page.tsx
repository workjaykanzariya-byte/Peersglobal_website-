import type { Metadata } from 'next'
import { JuryPortalClient } from '@/components/leadership/jury/jury-portal-client'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Jury Evaluation Dashboard & Scoring Workspace | Peers Global Leadership',
  description: 'Confidential leadership candidate scoring workspace and evaluation docket.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
}

export default function JuryDashboardPage() {
  return <JuryPortalClient initialView="dashboard" />
}
