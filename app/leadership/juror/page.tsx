import type { Metadata } from 'next'
import { JurorDashboardClient } from './juror-dashboard-client'

export const metadata: Metadata = {
  title: 'Juror Evaluation Portal | Peers Global',
  description: 'Confidential jury evaluation interface for Peers Global leadership selection.',
}

export default function JurorPortalPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <JurorDashboardClient />
      </div>
    </div>
  )
}
