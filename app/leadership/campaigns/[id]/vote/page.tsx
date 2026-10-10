import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'
import { leadershipApi } from '@/lib/api/leadership'
import { VoteClient } from './vote-client'

interface PageProps {
  params: Promise<{ id: string }>
  searchParams?: Promise<{ candidate?: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const { data: campaign } = await leadershipApi.getCampaignById(id)

  return {
    title: `Cast Your Vote — ${campaign?.name || 'Election Voting Booth'} | Peers Global`,
    description: `Official public voting portal for ${campaign?.name}. Cast your verified peer vote using mobile OTP.`,
  }
}

export default async function CampaignVotePage({ params, searchParams }: PageProps) {
  const { id } = await params
  const resolvedSearchParams = searchParams ? await searchParams : {}
  const candidateParam = resolvedSearchParams.candidate || ''

  const { data: campaign } = await leadershipApi.getCampaignById(id)
  const { data: candidates } = await leadershipApi.getCampaignCandidates(id)
  const { data: scopes } = await leadershipApi.getCampaignScopes(id)

  if (!campaign) {
    notFound()
  }

  let directCandidate = null
  if (candidateParam) {
    directCandidate = await leadershipApi.getCandidateById(id, candidateParam)
  }

  return (
    <div className="min-h-screen bg-[#020817] text-white py-8 sm:py-12 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-900/20 via-rose-900/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
          <Link
            href={`/leadership/campaigns/${campaign.id}`}
            className="hover:text-blue-400 flex items-center gap-1 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            {campaign.name}
          </Link>
          <span>/</span>
          <span className="text-white font-bold">
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
