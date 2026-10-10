'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  Vote,
  FileCheck2,
  Trophy,
  ShieldCheck,
  Calendar,
  Users,
  MapPin,
  ArrowRight,
  ChevronLeft,
  Award,
  CheckCircle2,
  Clock,
  Sparkles,
  FileText,
  Lock,
} from 'lucide-react'
import {
  Campaign,
  CampaignScope,
  Candidate,
  calculateCampaignPhase,
  getPhaseDisplay,
} from '@/lib/api/leadership'
import { CountdownTimer } from '@/components/leadership/elections/countdown-timer'
import { PhaseStepper } from '@/components/leadership/elections/phase-stepper'
import { CandidateCard } from '@/components/leadership/elections/candidate-card'
import { VoteModal } from '@/components/leadership/elections/vote-modal'
import { GalaxyButton } from '@/components/ui/galaxy-button'

interface CampaignDetailClientProps {
  campaign: Campaign
  scopes: CampaignScope[]
  candidates: Candidate[]
}

export function CampaignDetailClient({
  campaign,
  scopes,
  candidates,
}: CampaignDetailClientProps) {
  const phase = calculateCampaignPhase(campaign)
  const phaseInfo = getPhaseDisplay(phase)

  const [selectedCandidateForVote, setSelectedCandidateForVote] = useState<Candidate | null>(null)
  const [isVoteModalOpen, setIsVoteModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<'overview' | 'candidates' | 'scopes' | 'rules'>('overview')

  const handleVoteClick = (cand: Candidate) => {
    setSelectedCandidateForVote(cand)
    setIsVoteModalOpen(true)
  }

  let targetDate = campaign.nomination_ends_at
  let countdownLabel = 'Nominations Close In'
  if (phase === 'voting_active') {
    targetDate = campaign.voting_ends_at
    countdownLabel = 'Public Voting Closes In'
  } else if (phase === 'jury_evaluation' && campaign.jury_ends_at) {
    targetDate = campaign.jury_ends_at
    countdownLabel = 'Jury Review Finalizes In'
  }

  return (
    <div className="space-y-8">
      {/* Back breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
        <Link
          href="/leadership/campaigns"
          className="hover:text-[#1D4ED8] flex items-center gap-1 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          All Campaigns
        </Link>
        <span>/</span>
        <span className="text-slate-800 font-bold truncate">{campaign.name}</span>
      </div>

      {/* Main Campaign Hero Header */}
      <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#1D4ED8] border border-blue-200/70">
                {campaign.role.name}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700">
                Year {campaign.campaign_year}
              </span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold border ${phaseInfo.badgeColor}`}
              >
                {phaseInfo.label}
              </span>
            </div>

            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              {campaign.name}
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {campaign.description}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="w-full lg:w-auto shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
            {phase === 'nominations_open' && (
              <GalaxyButton
                href={`/leadership/campaigns/${campaign.id}/nominate`}
                size="default"
              >
                Nominate for this Role
              </GalaxyButton>
            )}

            {phase === 'voting_active' && (
              <GalaxyButton
                href={`/leadership/campaigns/${campaign.id}/vote`}
                size="default"
              >
                Enter Voting Booth
              </GalaxyButton>
            )}

            {phase === 'winners_declared' && (
              <GalaxyButton
                href={`/leadership/campaigns/${campaign.id}/winners`}
                size="default"
              >
                View Official Winners
              </GalaxyButton>
            )}

            <Link
              href="/leadership/votes/verify"
              className="px-4 py-2.5 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              Verify Ballot
            </Link>
          </div>
        </div>

        {/* Phase Stepper */}
        <div className="pt-4 border-t border-slate-100">
          <PhaseStepper currentPhase={phase} />
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-slate-200 gap-2">
        <button
          type="button"
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-all ${
            activeTab === 'overview'
              ? 'border-[#1D4ED8] text-[#1D4ED8]'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          Timeline &amp; Overview
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('candidates')}
          className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-all ${
            activeTab === 'candidates'
              ? 'border-[#1D4ED8] text-[#1D4ED8]'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          Shortlisted Candidates ({candidates.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('scopes')}
          className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-all ${
            activeTab === 'scopes'
              ? 'border-[#1D4ED8] text-[#1D4ED8]'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          Jurisdictions &amp; Scopes ({scopes.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('rules')}
          className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-all ${
            activeTab === 'rules'
              ? 'border-[#1D4ED8] text-[#1D4ED8]'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          Rules of Election
        </button>
      </div>

      {/* ---------------- TAB 1: TIMELINE & OVERVIEW ---------------- */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
              <h3 className="font-serif text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#1D4ED8]" />
                Election Milestones &amp; Schedule
              </h3>

              <div className="space-y-3.5">
                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="p-2 rounded-lg bg-amber-50 text-amber-700 font-bold text-xs">
                    Phase 1
                  </div>
                  <div>
                    <div className="font-bold text-xs md:text-sm text-slate-900">
                      Nominations Window
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {new Date(campaign.nomination_starts_at).toLocaleDateString()} —{' '}
                      {new Date(campaign.nomination_ends_at).toLocaleDateString()}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 font-bold text-xs">
                    Phase 2
                  </div>
                  <div>
                    <div className="font-bold text-xs md:text-sm text-slate-900">
                      Public Peer Voting
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {new Date(campaign.voting_starts_at).toLocaleDateString()} —{' '}
                      {new Date(campaign.voting_ends_at).toLocaleDateString()}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="p-2 rounded-lg bg-blue-50 text-[#1D4ED8] font-bold text-xs">
                    Phase 3
                  </div>
                  <div>
                    <div className="font-bold text-xs md:text-sm text-slate-900">
                      Jury Scrutiny &amp; Evaluation
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {campaign.jury_starts_at
                        ? `${new Date(campaign.jury_starts_at).toLocaleDateString()} — ${new Date(campaign.jury_ends_at || '').toLocaleDateString()}`
                        : 'Following close of public voting'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mandate */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
              <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">
                About the {campaign.role.name} Mandate
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {campaign.role.description ||
                  'Carries the standard of service and collaboration across appointed chapter circles. Responsible for upholding attendance accountability and bilateral transactions.'}
              </p>
            </div>

            {/* Eligibility Requirements */}
            {campaign.eligibility_criteria && campaign.eligibility_criteria.length > 0 && (
              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  Candidate Eligibility Criteria
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  {campaign.eligibility_criteria.map((crit, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] mt-1.5 shrink-0" />
                      <span>{crit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right sidebar */}
          <div className="space-y-6">
            <CountdownTimer targetDate={targetDate} label={countdownLabel} />

            <div className="p-6 rounded-2xl bg-[#040F24] text-white border border-slate-800 shadow-md">
              <div className="flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-rose-400 text-xs font-bold mb-3 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                Governed Election Integrity
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>1-Member-1-Vote cryptographically verified via SMS OTP.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Zero commercial solicitation strictly enforced.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Jury members must declare conflict of interest prior to scoring.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ---------------- TAB 2: SHORTLISTED CANDIDATES ---------------- */}
      {activeTab === 'candidates' && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs text-slate-500 font-medium">
              Approved candidates eligible for public voting in this selection cycle.
            </p>
            {phase === 'voting_active' && (
              <Link
                href={`/leadership/campaigns/${campaign.id}/vote`}
                className="text-xs font-bold text-[#1D4ED8] flex items-center gap-1 hover:underline"
              >
                Go to Voting Booth <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {candidates.map((cand) => (
              <CandidateCard
                key={cand.id}
                candidate={cand}
                canVote={phase === 'voting_active'}
                onVoteClick={handleVoteClick}
              />
            ))}
          </div>
        </div>
      )}

      {/* ---------------- TAB 3: JURISDICTIONS & SCOPES ---------------- */}
      {activeTab === 'scopes' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {scopes.map((s) => (
            <div
              key={s.id}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-[#1D4ED8]">
                  {s.scope_type}
                </span>
                <span className="text-xs text-slate-400 font-medium">{s.seats_available || 1} Seat</span>
              </div>
              <h4 className="font-serif text-base font-bold text-slate-900">{s.name}</h4>
              <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-400" />
                {s.state || 'National'}, {s.district || s.name}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* ---------------- TAB 4: RULES OF ELECTION ---------------- */}
      {activeTab === 'rules' && (
        <div className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
          <div>
            <h3 className="font-serif text-xl font-bold text-slate-900 mb-1">
              Rules of Governance &amp; Voting Regulations
            </h3>
            <p className="text-xs text-slate-500">
              All candidates and voters agree to the Peers Global Unity Constitution.
            </p>
          </div>

          <div className="space-y-3.5">
            {(campaign.rules_summary || [
              'Must have minimum 2 years of active Peers Global membership.',
              'Only 1 vote per verified member per district campaign.',
              'Jury evaluation carries 40% weighting, public peer voting carries 60%.',
              'Candidates must adhere strictly to the Peers Global Non-Solicitation & Integrity Code.',
            ]).map((rule, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 leading-relaxed"
              >
                <div className="w-5 h-5 rounded-full bg-[#1D4ED8] text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div>{rule}</div>
              </div>
            ))}
          </div>

          {campaign.eligibility_criteria && (
            <div className="pt-4 border-t border-slate-100">
              <h4 className="font-serif text-base font-bold text-slate-900 mb-3">
                Candidate Eligibility Requirements
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                {campaign.eligibility_criteria.map((crit, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{crit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Voting Modal */}
      <VoteModal
        campaign={campaign}
        candidate={selectedCandidateForVote}
        isOpen={isVoteModalOpen}
        onClose={() => setIsVoteModalOpen(false)}
      />
    </div>
  )
}
