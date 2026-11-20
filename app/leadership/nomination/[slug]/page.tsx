import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { leadershipApi, normalizeCandidate } from '@/lib/api/leadership'
import { CandidateVotingBooth } from '@/components/leadership/elections/candidate-voting-booth'

export const dynamic = 'force-dynamic'
export const revalidate = 0

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const candidate = await leadershipApi.getCandidateBySlug(slug)
  const candidateName =
    candidate?.full_name ||
    decodeURIComponent(slug)
      .replace(/[-_]+/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase())

  return {
    title: `Vote for ${candidateName} — Leadership Selection | Peers Global`,
    description: `Official public candidate voting booth. Cast your verified vote for ${candidateName} in the Peers Global Leadership Selection.`,
  }
}

export default async function NominationCandidateRoute({ params }: PageProps) {
  const { slug } = await params
  const decoded = decodeURIComponent(slug).trim()
  const defaultCampaignId = '23ba107a-f314-4cd9-b04a-7af04951f95c'

  // Fetch candidate details via public API: /leadership/public/nomination/{slug}
  const candidate = await leadershipApi.getCandidateBySlug(decoded)
  const campaignId = candidate?.campaign_id || defaultCampaignId

  // Retrieve campaign details
  let { data: campaign } = await leadershipApi.getCampaignById(campaignId)
  if (!campaign || !campaign.id) {
    campaign = {
      id: campaignId,
      name: 'National Leadership Selection 2026',
      description: 'Democratic leadership election process for Peers Global.',
      status: 'active',
      phase: 'voting',
      role: { key: 'ded', name: 'District Executive Director', id: 'ded' },
      slug: 'national-leadership-selection-2026',
      campaign_year: 2026,
      nomination_starts_at: '',
      nomination_ends_at: '',
      voting_starts_at: '',
      voting_ends_at: '',
      results_visibility: 'public',
    } as any
  }

  // Retrieve full candidate roster and scopes for the election
  const { data: candidates } = await leadershipApi.getCampaignCandidates(campaign.id)
  const { data: scopes } = await leadershipApi.getCampaignScopes(campaign.id)

  const effectiveCandidate =
    candidate ||
    normalizeCandidate(
      {
        id: decoded,
        full_name: decoded.replace(/[-_]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
        campaign_id: campaign.id,
      },
      campaign
    )

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
            Vote for {effectiveCandidate.full_name}
          </span>
        </div>

        {/* Candidate Voting Booth rendered directly — URL stays clean on /leadership/nomination/[slug] */}
        <CandidateVotingBooth
          campaignId={campaign.id}
          candidateId={effectiveCandidate.id}
          candidateData={effectiveCandidate}
          campaign={campaign}
          candidates={candidates}
          scopes={scopes}
        />
      </div>
    </div>
  )
}
