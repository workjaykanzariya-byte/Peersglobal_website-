'use client'

import React from 'react'
import Link from 'next/link'
import {
  Calendar,
  Vote,
  FileCheck2,
  Trophy,
  ArrowRight,
  ShieldCheck,
  Users,
} from 'lucide-react'
import { Campaign, calculateCampaignPhase, getPhaseDisplay } from '@/lib/api/leadership'
import { CountdownTimer } from './countdown-timer'

interface CampaignCardProps {
  campaign: Campaign
}

export function CampaignCard({ campaign }: CampaignCardProps) {
  const phase = calculateCampaignPhase(campaign)
  const phaseInfo = getPhaseDisplay(phase)

  let targetDate = campaign.nomination_ends_at
  let countdownLabel = 'Nominations Close In'
  if (phase === 'voting_active') {
    targetDate = campaign.voting_ends_at
    countdownLabel = 'Voting Closes In'
  } else if (phase === 'jury_evaluation' && campaign.jury_ends_at) {
    targetDate = campaign.jury_ends_at
    countdownLabel = 'Jury Review Closes In'
  } else if (phase === 'upcoming') {
    targetDate = campaign.nomination_starts_at
    countdownLabel = 'Nominations Open In'
  }

  return (
    <div className="group relative flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 p-6 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-[#1D4ED8] text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{campaign.role.name}</span>
          </div>

          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${phaseInfo.badgeColor}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            {phaseInfo.label}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-[#1D4ED8] transition-colors tracking-tight leading-snug mb-2">
          <Link href={`/leadership/campaigns/${campaign.id}`} className="focus:outline-none">
            {campaign.name}
          </Link>
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mb-4 leading-relaxed font-normal">
          {campaign.description || campaign.role.description}
        </p>

        {/* Metrics Strip */}
        <div className="grid grid-cols-3 gap-2 py-3 px-3.5 rounded-xl bg-slate-50/80 border border-slate-100 text-center mb-4">
          <div>
            <div className="text-[11px] text-slate-500 font-medium">Scope</div>
            <div className="text-xs font-bold text-slate-800 capitalize">
              {campaign.scope_type || 'District'}
            </div>
          </div>
          <div>
            <div className="text-[11px] text-slate-500 font-medium">Candidates</div>
            <div className="text-xs font-bold text-slate-800 flex items-center justify-center gap-1">
              <Users className="w-3 h-3 text-slate-400" />
              {campaign.total_candidates ?? 0}
            </div>
          </div>
          <div>
            <div className="text-[11px] text-slate-500 font-medium">Total Votes</div>
            <div className="text-xs font-bold text-[#1D4ED8]">
              {campaign.total_votes?.toLocaleString() ?? 0}
            </div>
          </div>
        </div>

        {/* Countdown Box */}
        {phase !== 'winners_declared' && (
          <div className="mb-5">
            <CountdownTimer targetDate={targetDate} label={countdownLabel} />
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
        <Link
          href={`/leadership/campaigns/${campaign.id}`}
          className="text-xs font-semibold text-slate-600 hover:text-[#1D4ED8] flex items-center gap-1 transition-colors"
        >
          View Details &amp; Rules
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        <div className="flex items-center gap-2">
          {phase === 'nominations_open' && (
            <Link
              href={`/leadership/campaigns/${campaign.id}/nominate`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white text-xs font-bold shadow-sm transition-all hover:scale-[1.02]"
            >
              <FileCheck2 className="w-3.5 h-3.5" />
              Nominate
            </Link>
          )}

          {phase === 'voting_active' && (
            <Link
              href={`/leadership/campaigns/${campaign.id}/vote`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white text-xs font-bold shadow-sm transition-all hover:scale-[1.02]"
            >
              <Vote className="w-3.5 h-3.5" />
              Cast Vote
            </Link>
          )}

          {phase === 'winners_declared' && (
            <Link
              href={`/leadership/campaigns/${campaign.id}/winners`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white text-xs font-bold shadow-sm transition-all hover:scale-[1.02]"
            >
              <Trophy className="w-3.5 h-3.5" />
              View Winners
            </Link>
          )}

          <Link
            href={`/leadership/campaigns/${campaign.id}`}
            className="inline-flex items-center px-3.5 py-2 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors"
          >
            Overview
          </Link>
        </div>
      </div>
    </div>
  )
}
