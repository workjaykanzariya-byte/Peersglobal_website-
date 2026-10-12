import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronLeft, ShieldAlert } from 'lucide-react'
import { leadershipApi, Form2CandidateInfo } from '@/lib/api/leadership'
import { Form2Wizard } from '@/components/leadership/elections/form-2-wizard'

export const dynamic = 'force-dynamic'
export const revalidate = 0

interface PageProps {
  params: Promise<{ id: string }>
  searchParams: Promise<{ nomination?: string }>
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const { id } = await params
  const { nomination } = await searchParams
  const { data: campaign } = await leadershipApi.getCampaignById(id)

  return {
    title: `Form 2: Jury Evaluation Data Form — ${campaign?.name || 'Leadership Selection 2026'} | Peers Global`,
    description:
      'Confidential candidate submission portal for shortlisted nominees. Complete executive business credibility, leadership bench, and strategic roadmap.',
  }
}

export default async function Form2Page({ params, searchParams }: PageProps) {
  const { id: campaignId } = await params
  const { nomination: nominationId } = await searchParams

  const { data: campaign } = await leadershipApi.getCampaignById(campaignId)

  if (!nominationId) {
    return (
      <div className="min-h-screen bg-[#020817] text-slate-100 py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-md w-full rounded-3xl bg-slate-900/90 border border-slate-800 p-8 text-center space-y-5 shadow-2xl backdrop-blur-xl">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mx-auto">
            <ShieldAlert className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h1 className="text-xl font-bold text-white">Missing Nomination Reference</h1>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Form 2 is accessible exclusively via your shortlisted invitation link containing a valid nomination token.
            </p>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs font-mono text-slate-400">
            Expected URL: .../form-2?nomination=[nomination_id]
          </div>
          <Link
            href={`/leadership/campaigns/${campaignId}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Campaign
          </Link>
        </div>
      </div>
    )
  }

  // Fetch Form 2 & Candidate Info
  const { data: candidateInfo } = await leadershipApi.getForm2Info(nominationId)

  // Ensure campaign name and id match URL if available
  const mergedCandidateInfo: Form2CandidateInfo = {
    ...candidateInfo,
    campaign_id: campaign?.id || campaignId,
    campaign_name: campaign?.name || candidateInfo.campaign_name || 'Peers Global Leadership Selection 2026',
    role_name: campaign?.role?.name || candidateInfo.role_name || 'Leadership Role',
  }

  return (
    <div className="min-h-screen bg-[#020817] text-slate-100">
      {/* Top breadcrumb navigation */}
      <div className="border-b border-slate-800/80 bg-slate-950/60 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <Link
              href={`/leadership/campaigns/${campaignId}`}
              className="hover:text-white flex items-center gap-1 transition"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">{campaign?.name || 'Campaign'}</span>
              <span className="sm:hidden">Campaign</span>
            </Link>
            <span>/</span>
            <span className="text-amber-400 font-semibold truncate max-w-[200px] sm:max-w-none">
              Form 2: Jury Evaluation Data Form
            </span>
          </div>

          <div className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
            Nomination: {nominationId.slice(0, 8)}...
          </div>
        </div>
      </div>

      <Form2Wizard
        initialCandidateInfo={mergedCandidateInfo}
        campaignId={campaignId}
        nominationId={nominationId}
      />
    </div>
  )
}
