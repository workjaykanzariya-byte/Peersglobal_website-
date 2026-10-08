'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  Vote,
  ShieldCheck,
  Lock,
  Search,
  Filter,
  Users,
  CheckCircle2,
  Clock,
  Sparkles,
  MapPin,
  ExternalLink,
} from 'lucide-react'
import { Campaign, CampaignScope, Candidate } from '@/lib/api/leadership'
import { CandidateCard } from '@/components/leadership/elections/candidate-card'
import { VoteModal } from '@/components/leadership/elections/vote-modal'
import { CountdownTimer } from '@/components/leadership/elections/countdown-timer'

interface VoteClientProps {
  campaign: Campaign
  candidates: Candidate[]
  scopes: CampaignScope[]
}

export function VoteClient({ campaign, candidates, scopes }: VoteClientProps) {
  const [selectedScope, setSelectedScope] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null)
  const [isVoteModalOpen, setIsVoteModalOpen] = useState(false)
  const [lastVotedRef, setLastVotedRef] = useState<string | null>(null)

  const filteredCandidates = candidates.filter((cand) => {
    if (selectedScope !== 'all' && cand.scope_name !== selectedScope) {
      return false
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      const matchName = cand.full_name.toLowerCase().includes(q)
      const matchCompany = cand.company.toLowerCase().includes(q)
      const matchScope = cand.scope_name.toLowerCase().includes(q)
      if (!matchName && !matchCompany && !matchScope) return false
    }
    return true
  })

  const handleVoteClick = (candidate: Candidate) => {
    setSelectedCandidate(candidate)
    setIsVoteModalOpen(true)
  }

  return (
    <div className="space-y-8">
      {/* Master Voting Hero Banner */}
      <div className="relative rounded-3xl bg-[#040F24] text-white p-7 sm:p-10 lg:p-12 border border-slate-800 shadow-xl overflow-hidden">
        {/* Full Bleed Video Background */}
        <div className="absolute inset-0 size-full overflow-hidden pointer-events-none">
          <video
            src="/videos/homepage-hero-bg.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="size-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(2,8,23,0.92)_0%,rgba(4,15,36,0.85)_45%,rgba(4,15,36,0.70)_100%)]" />
        </div>

        {/* Brand Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1D4ED8]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#E11D48]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-rose-400">
              OFFICIAL PUBLIC VOTING BOOTH
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-white leading-tight">
            Cast Your Ballot: {campaign.name}
          </h1>

          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
            Review the shortlisted candidates, watch their 2-minute leadership pitch videos, and cast your verified vote.
            Every ballot is protected by 2-factor OTP verification and cryptographic ledger sealing.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-medium text-slate-200 backdrop-blur-sm">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              1 Vote Per Verified Member
            </div>
            <Link
              href="/leadership/votes/verify"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium border border-white/20 transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              Ballot Audit &amp; Verification
            </Link>
          </div>
        </div>

        {/* Countdown Box */}
        <div className="mt-6 lg:mt-0 lg:absolute lg:top-8 lg:right-8 w-full lg:w-72">
          <CountdownTimer
            targetDate={campaign.voting_ends_at}
            label="Voting Window Closes In"
          />
        </div>
      </div>

      {/* Filter and Candidate Search */}
      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-3.5 justify-between items-center">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search candidate by name or company..."
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-xs font-bold text-slate-500">Jurisdiction:</span>
          <select
            value={selectedScope}
            onChange={(e) => setSelectedScope(e.target.value)}
            className="flex-1 sm:flex-none px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
          >
            <option value="all">All Jurisdictions</option>
            {scopes.map((s) => (
              <option key={s.id} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Candidates Roster */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-serif text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Users className="w-5 h-5 text-[#1D4ED8]" />
            Shortlisted Candidates ({filteredCandidates.length})
          </h2>
          <span className="text-xs text-slate-500 font-medium">Select a candidate to cast your vote</span>
        </div>

        {filteredCandidates.length === 0 ? (
          <div className="text-center py-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <p className="text-xs text-slate-500">No candidates match your search filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCandidates.map((cand) => (
              <CandidateCard
                key={cand.id}
                candidate={cand}
                canVote={true}
                onVoteClick={handleVoteClick}
              />
            ))}
          </div>
        )}
      </div>

      {/* Voting Modal */}
      <VoteModal
        campaign={campaign}
        candidate={selectedCandidate}
        isOpen={isVoteModalOpen}
        onClose={() => setIsVoteModalOpen(false)}
        onVoteSuccess={(ref) => {
          setLastVotedRef(ref)
        }}
      />
    </div>
  )
}
