import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'
import { leadershipApi } from '@/lib/api/leadership'
import { JurorEvaluationView } from '@/components/leadership/elections/juror-evaluation-view'

interface PageProps {
  params: Promise<{ assignmentId: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { assignmentId } = await params
  return {
    title: `Juror Evaluation (${assignmentId}) | Peers Global`,
    description: 'Juror evaluation and multi-criterion scoring interface.',
  }
}

export default async function JurorEvaluatePage({ params }: PageProps) {
  const { assignmentId } = await params
  const { data: assignment } = await leadershipApi.getJurorEvaluationForm(assignmentId, '')

  if (!assignment) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link
            href="/leadership/juror"
            className="hover:text-[#1D4ED8] flex items-center gap-1 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Juror Docket
          </Link>
          <span>/</span>
          <span className="text-slate-800 font-bold">
            Evaluating {assignment.candidate.full_name}
          </span>
        </div>

        <JurorEvaluationView
          assignment={assignment}
          token="demo_sanctum_juror_token_001"
        />
      </div>
    </div>
  )
}
