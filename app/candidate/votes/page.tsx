import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronLeft, ShieldCheck, Vote } from 'lucide-react'
import { CandidateVotesClient } from './candidate-votes-client'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Candidate Private Votes Portal | Peers Global Leadership',
  description:
    'Confidential candidate portal. Verify your nomination email to track verified endorsement votes cast in your support.',
}

export default function CandidateVotesPage() {
  return (
    <div className="min-h-screen bg-[#020817] text-white py-8 sm:py-12 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-gradient-to-b from-blue-900/20 via-[#1D4ED8]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
        {/* Navigation Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Link
              href="/leadership/campaigns"
              className="hover:text-white flex items-center gap-1 transition-colors font-medium"
            >
              <ChevronLeft className="w-4 h-4" />
              Elections &amp; Campaigns
            </Link>
            <span>/</span>
            <span className="text-slate-200 font-bold">Candidate Private Portal</span>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/candidate/results"
              className="px-3 py-1 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-[11px] font-semibold text-slate-300 transition-colors"
            >
              Aggregate Results View
            </Link>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-bold text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              CONFIDENTIAL CANDIDATE ACCESS
            </span>
          </div>
        </div>

        {/* Client Portal */}
        <CandidateVotesClient />
      </div>
    </div>
  )
}
