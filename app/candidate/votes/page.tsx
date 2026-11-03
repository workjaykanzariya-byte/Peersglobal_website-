import type { Metadata } from 'next'
import { CandidateVotesClient } from './candidate-votes-client'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Track My Votes | Peers Global Leadership',
  description: 'Candidate private portal to track your verified votes and candidate metrics.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function CandidateVotesPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Standalone Brand Header */}
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] flex items-center justify-center text-white font-extrabold shadow-sm">
              PG
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 tracking-tight">Peers Global Leadership</div>
              <div className="text-[11px] text-slate-500 font-medium">Candidate Private Portal</div>
            </div>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Confidential
          </div>
        </div>

        {/* Client Portal */}
        <CandidateVotesClient />
      </div>
    </div>
  )
}
