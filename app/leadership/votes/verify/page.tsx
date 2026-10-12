import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { BallotVerifyView } from '@/components/leadership/elections/ballot-verify-view'

export const metadata: Metadata = {
  title: 'Ballot Audit & Verification | Peers Global',
  description: 'Cryptographic ledger audit and vote receipt verification for Peers Global elections.',
}

interface PageProps {
  searchParams: Promise<{ ref?: string }>
}

export default async function BallotVerifyPage({ searchParams }: PageProps) {
  const { ref } = await searchParams

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link
            href="/leadership/campaigns"
            className="hover:text-[#1D4ED8] flex items-center gap-1 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Leadership Campaigns
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">Ballot Audit</span>
        </div>

        <BallotVerifyView initialReference={ref} />
      </div>
    </div>
  )
}
