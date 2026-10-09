import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'
import { leadershipApi } from '@/lib/api/leadership'
import { VoteClient } from './vote-client'

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const { data: campaign } = await leadershipApi.getCampaignById(id)

  return {
    title: `Cast Your Vote — ${campaign?.name || 'Election Voting Booth'} | Peers Global`,
    description: `Official public voting portal for ${campaign?.name}. Cast your verified peer vote using mobile OTP.`,
  }
}

export default async function CampaignVotePage({ params }: PageProps) {
  const { id } = await params
  const { data: campaign } = await leadershipApi.getCampaignById(id)
  const { data: candidates } = await leadershipApi.getCampaignCandidates(id)
  const { data: scopes } = await leadershipApi.getCampaignScopes(id)

  if (!campaign) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link
            href={`/leadership/campaigns/${campaign.id}`}
            className="hover:text-[#1D4ED8] flex items-center gap-1 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            {campaign.name}
          </Link>
          <span>/</span>
          <span className="text-slate-800 font-bold">Public Voting Booth</span>
        </div>

        <VoteClient campaign={campaign} candidates={candidates} scopes={scopes} />
      </div>
    </div>
  )
}
