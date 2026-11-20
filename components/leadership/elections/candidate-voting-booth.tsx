'use client'

import React from 'react'
import { Campaign, CampaignScope, Candidate } from '@/lib/api/leadership'
import { VoteClient } from '@/app/leadership/campaigns/[id]/vote/vote-client'

export interface CandidateVotingBoothProps {
  campaignId?: string
  candidateId?: string
  candidateData?: Candidate | any
  campaign?: Campaign
  candidates?: Candidate[]
  scopes?: CampaignScope[]
}

/**
 * CandidateVotingBooth
 * Renders the candidate-specific voting booth directly inside the clean route:
 * /leadership/nomination/[slug]
 * without performing browser redirects or URL replacements.
 */
export function CandidateVotingBooth({
  campaignId,
  candidateId,
  candidateData,
  campaign,
  candidates = [],
  scopes = [],
}: CandidateVotingBoothProps) {
  const effectiveCampaign = campaign || {
    id: campaignId || candidateData?.campaign_id || '23ba107a-f314-4cd9-b04a-7af04951f95c',
    name: candidateData?.campaign_name || 'National Leadership Selection 2026',
    slug: 'national-leadership-selection-2026',
    campaign_year: 2026,
    status: 'active' as const,
    voting_open: true,
    role: { id: 'ded', name: 'District Executive Director', key: 'ded' },
    nomination_starts_at: '',
    nomination_ends_at: '',
    voting_starts_at: '',
    voting_ends_at: '',
    results_visibility: 'public' as const,
  }

  const effectiveCandidate = candidateData || null
  const effectiveCandidateId = candidateId || candidateData?.id || ''

  return (
    <VoteClient
      campaign={effectiveCampaign}
      candidates={
        candidates.length > 0
          ? candidates
          : effectiveCandidate
            ? [effectiveCandidate]
            : []
      }
      scopes={scopes}
      initialCandidate={effectiveCandidate}
      initialCandidateId={effectiveCandidateId}
    />
  )
}
