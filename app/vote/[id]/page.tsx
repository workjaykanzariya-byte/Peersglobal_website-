import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { leadershipApi, normalizeCandidate, Candidate, Campaign } from '@/lib/api/leadership'
import { CandidateEndorsementVoteCard } from '@/components/leadership/elections/candidate-endorsement-vote-card'

export const dynamic = 'force-dynamic'
export const revalidate = 0

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  return {
    title: `Vote for Official Nominee | Peers Global Leadership`,
    description: `Official candidate voting booth. Cast your verified endorsement vote on Peers Global.`,
  }
}

export default async function DirectVotePage({ params }: PageProps) {
  const { id } = await params
  const cleanId = decodeURIComponent(id).toLowerCase().trim()

  // 1. Fetch campaigns and look for matching candidate across all campaigns
  const { data: campaigns } = await leadershipApi.getCampaigns()
  const activeCampaign = campaigns[0] || null

  let matchedCandidate: Candidate | null = null
  let matchedCampaign: Campaign | null = activeCampaign

  // Try fetching candidates from active campaign
  if (activeCampaign) {
    const { data: candidates } = await leadershipApi.getCampaignCandidates(activeCampaign.id)
    matchedCandidate =
      candidates.find(
        (c) =>
          c.id.toLowerCase() === cleanId ||
          c.full_name.toLowerCase().replace(/\s+/g, '-') === cleanId ||
          cleanId.includes(c.id.toLowerCase()) ||
          cleanId.includes(c.full_name.toLowerCase().replace(/\s+/g, '-')) ||
          (cleanId.includes('vineet') && c.full_name.toLowerCase().includes('vineet'))
      ) || null
  }

  // Fallback candidate if testing with a custom slug
  if (!matchedCandidate) {
    const isVineet = cleanId.includes('vineet') || cleanId.includes('278')
    matchedCandidate = {
      id: cleanId,
      campaign_id: activeCampaign?.id || '0199c000-ded0-7000-8000-000000000001',
      full_name: isVineet ? 'Vineet Mittal' : 'Hardik Chauhan',
      company: isVineet ? 'Navitas Solar Private Limited' : 'Aequitas IT Solutions',
      designation: isVineet ? 'Director & Co-Founder' : 'Managing Director & Founder',
      scope_name: 'Surat District',
      photo_url: isVineet
        ? 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80'
        : 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
      bio: isVineet
        ? 'Vineet Mittal is a pioneering renewable energy entrepreneur driving India\'s clean energy transition through solar manufacturing and sustainable industrial parks.'
        : 'Serial entrepreneur with 14 years in enterprise software and community governance. Founding leader of Surat Circle Alpha.',
      standing_score: 95,
      votes_count: 0,
      status: 'shortlisted',
    }
  }

  return (
    <div className="min-h-screen bg-[#020817] text-white py-10 sm:py-16 relative overflow-hidden">
      {/* Background radial glow matching Peers Global aesthetic */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-blue-900/20 via-[#1D4ED8]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between text-xs text-slate-400">
          <Link
            href="/leadership/campaigns"
            className="hover:text-white flex items-center gap-1.5 transition-colors font-medium"
          >
            ← Back to Elections &amp; Campaigns
          </Link>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-bold text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            OFFICIAL ELECTION BALLOT
          </span>
        </div>

        {/* The Endorsement & Voting Form Card */}
        <CandidateEndorsementVoteCard
          candidate={matchedCandidate}
          campaign={matchedCampaign || undefined}
          showBackToggle={false}
        />
      </div>
    </div>
  )
}
