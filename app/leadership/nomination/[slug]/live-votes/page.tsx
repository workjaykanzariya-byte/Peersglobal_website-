import type { Metadata } from 'next'
import { VoterLedgerClient } from '@/components/leadership/voter-ledger-client'

export const dynamic = 'force-dynamic'
export const revalidate = 0

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: 'Candidate Private Live Voter Ledger | Peers Global Leadership',
    description: 'Strictly confidential, unindexed real-time voter breakdown for approved Peers Global Leadership candidates.',
    robots: {
      index: false,
      follow: false,
      nocache: true,
      noarchive: true,
      nosnippet: true,
    },
  }
}

export default async function CandidateLiveVotesPage({ params }: PageProps) {
  const { slug } = await params

  return <VoterLedgerClient nominationId={slug} />
}
