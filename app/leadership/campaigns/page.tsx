import type { Metadata } from 'next'
import { leadershipApi } from '@/lib/api/leadership'
import { CampaignsClient } from './campaigns-client'

export const metadata: Metadata = {
  title: 'Leadership Selection & Elections | Peers Global',
  description:
    'Democratic selection and governed elections for District Executive Directors, Circle Chairs, and Industry Directors across Bharat.',
  keywords: [
    'Peers Global elections',
    'leadership selection portal',
    'district executive director election',
    'circle chair voting',
    'business community election',
  ],
}

export default async function CampaignsPage() {
  const { data: initialCampaigns, isLive } = await leadershipApi.getCampaigns()

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CampaignsClient initialCampaigns={initialCampaigns} isLive={isLive} />
      </div>
    </div>
  )
}
