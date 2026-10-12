import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { ResultsView } from '@/components/leadership/elections/results-view'

export const metadata: Metadata = {
  title: 'Candidate Private Results Portal | Peers Global',
  description: 'Confidential candidate live results tracking and ballot analytics.',
}

interface PageProps {
  searchParams: Promise<{ token?: string }>
}

export default async function CandidateDirectResultsPage({ searchParams }: PageProps) {
  const { token } = await searchParams

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link
            href="/leadership/campaigns"
            className="hover:text-[#1D4ED8] flex items-center gap-1 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Leadership Campaigns
          </Link>
          <span>/</span>
          <span className="text-slate-800 font-bold">Candidate Private Results</span>
        </div>

        <ResultsView initialToken={token} />
      </div>
    </div>
  )
}
