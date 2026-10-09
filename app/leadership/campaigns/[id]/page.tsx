import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { leadershipApi } from '@/lib/api/leadership'
import { CampaignDetailClient } from './campaign-detail-client'

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const { data: campaign } = await leadershipApi.getCampaignById(id)

  return {
    title: `${campaign?.name || 'Leadership Selection'} | Peers Global`,
    description: campaign?.description || 'Governed democratic leadership election at Peers Global.',
  }
}

export default async function CampaignDetailPage({ params }: PageProps) {
  const { id } = await params
  const { data: campaign } = await leadershipApi.getCampaignById(id)
  const { data: scopes } = await leadershipApi.getCampaignScopes(id)
  const { data: candidates } = await leadershipApi.getCampaignCandidates(id)

  if (!campaign) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CampaignDetailClient
          campaign={campaign}
          scopes={scopes}
          candidates={candidates}
        />
      </div>
    </div>
  )
}
