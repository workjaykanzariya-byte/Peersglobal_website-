import { redirect } from 'next/navigation'
import { leadershipApi } from '@/lib/api/leadership'

export const dynamic = 'force-dynamic'
export const revalidate = 0

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function NominationCandidateRoute({ params }: PageProps) {
  const { slug } = await params
  const decoded = decodeURIComponent(slug).trim().toLowerCase()
  const defaultCampaignId = '23ba107a-f314-4cd9-b04a-7af04951f95c'

  let targetUrl = `/leadership/campaigns/${defaultCampaignId}/vote?candidate=${encodeURIComponent(slug)}`

  try {
    const { data: candidates } = await leadershipApi.getCampaignCandidates(defaultCampaignId)
    if (Array.isArray(candidates)) {
      const found = candidates.find((c: any) => {
        if (c.id === slug || c.id === decoded) return true
        if (c.application_number === slug || c.application_number === decoded) return true
        const candSlug = (c.full_name || '').toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-')
        const decodedSlug = decoded.replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-')
        return candSlug === decodedSlug || (c.full_name || '').toLowerCase().trim() === decoded
      })

      if (found) {
        targetUrl = `/leadership/campaigns/${found.campaign_id || defaultCampaignId}/vote?candidate=${encodeURIComponent(found.id)}`
      }
    }
  } catch {
    // fallback redirect
  }

  redirect(targetUrl)
}
