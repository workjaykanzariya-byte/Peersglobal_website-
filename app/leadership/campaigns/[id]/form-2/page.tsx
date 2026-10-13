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
      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-md w-full rounded-3xl bg-white border border-slate-200 p-8 text-center space-y-5 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48]" />
          <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mx-auto shadow-xs">
            <ShieldAlert className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] brand-gradient-text">
              Leadership Selection Portal
            </div>
            <h1 className="text-xl font-extrabold text-slate-900">Missing Nomination Reference</h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Form 2 is accessible exclusively via your shortlisted invitation link containing a valid nomination token.
            </p>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600">
            Expected URL: .../form-2?nomination=[nomination_id]
          </div>
          <Link
            href={`/leadership/campaigns/${campaignId}`}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white font-bold text-xs shadow-md shadow-blue-500/15 transition cursor-pointer"
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
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      {/* Top breadcrumb navigation */}
      <div className="border-b border-slate-200/80 bg-white/90 backdrop-blur-md sticky top-0 z-30 shadow-2xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-500">
            <Link
              href={`/leadership/campaigns/${campaignId}`}
              className="hover:text-[#1D4ED8] flex items-center gap-1 transition font-semibold"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">{campaign?.name || 'Campaign'}</span>
              <span className="sm:hidden">Campaign</span>
            </Link>
            <span>/</span>
            <span className="font-bold brand-gradient-text truncate max-w-[200px] sm:max-w-none">
              Form 2: Jury Evaluation Data Form
            </span>
          </div>

          <div className="text-[11px] font-mono text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200 font-semibold shadow-2xs">
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
