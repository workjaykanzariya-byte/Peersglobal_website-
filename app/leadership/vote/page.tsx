import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { leadershipApi } from '@/lib/api/leadership'
import { VoteClient } from '../campaigns/[id]/vote/vote-client'

export const dynamic = 'force-dynamic'
export const revalidate = 0

interface PageProps {
  searchParams?: Promise<{ candidate?: string; campaign?: string }>
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const resolved = searchParams ? await searchParams : {}
  return {
    title: 'Cast Your Vote — Candidate Endorsement | Peers Global',
    description: 'Official candidate voting booth. Cast your verified peer vote using mobile OTP on Peers Global.',
  }
}

export default async function LeadershipVotePage({ searchParams }: PageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : {}
  const candidateParam = resolvedSearchParams.candidate || ''
  const requestedCampaignId = resolvedSearchParams.campaign || '23ba107a-f314-4cd9-b04a-7af04951f95c'

  // Fetch campaign
  let { data: campaign } = await leadershipApi.getCampaignById(requestedCampaignId)
  if (!campaign) {
    const { data: allCampaigns } = await leadershipApi.getCampaigns()
    campaign = allCampaigns[0] || {
      id: requestedCampaignId,
      name: 'National Leadership Selection 2026',
      description: 'Democratic leadership election process for Peers Global.',
      status: 'active',
      phase: 'voting',
      role: { key: 'ded', name: 'District Executive Director' },
    } as any
  }

  const { data: candidates } = await leadershipApi.getCampaignCandidates(campaign.id)
  const { data: scopes } = await leadershipApi.getCampaignScopes(campaign.id)

  let directCandidate = null
  if (candidateParam) {
    directCandidate = await leadershipApi.getCandidateById(campaign.id, candidateParam)
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 py-8 sm:py-12 relative overflow-hidden">
      {/* Subtle brand ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link
            href="/leadership/nominate"
            className="hover:text-[#1D4ED8] flex items-center gap-1 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Leadership Portal
          </Link>
          <span>/</span>
          <span className="font-bold brand-gradient-text">
            {candidateParam && directCandidate
              ? `Vote for ${directCandidate.full_name}`
              : 'Public Voting Booth'}
          </span>
        </div>

        <VoteClient
          campaign={campaign}
          candidates={candidates}
          scopes={scopes}
          initialCandidate={directCandidate}
          initialCandidateId={candidateParam}
        />
      </div>
    </div>
  )
}
