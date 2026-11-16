import type { Metadata } from 'next'
import { Suspense } from 'react'
import { NominationSingleForm } from '@/components/leadership/nomination-single-form'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Apply for Leadership — File Your Nomination | Peers Global',
  description:
    'Nominate yourself for a leadership position at Peers Global. Democratic, high-trust election process for Circle Chairs, Industry Directors, Circle Leaders and Executive Directors.',
  alternates: {
    canonical: 'https://peersglobal.com/leadership/nominate',
  },
  openGraph: {
    title: 'Apply for Leadership — Candidate Nomination | Peers Global',
    description:
      'Nominate yourself for a leadership role at Peers Global. Apply for Circle Chair, Industry Director, Circle Founder or Executive Director across Bharat.',
    url: 'https://peersglobal.com/leadership/nominate',
    type: 'website',
  },
}

export default function NominatePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F3F5FA] flex items-center justify-center p-8 text-slate-500 text-sm">Loading nomination form...</div>}>
      <NominationSingleForm />
    </Suspense>
  )
}
