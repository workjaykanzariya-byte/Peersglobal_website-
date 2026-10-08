'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  Vote,
  Trophy,
  ShieldCheck,
  Search,
  Filter,
  Users,
  Award,
  Sparkles,
  ArrowRight,
  UserCheck,
  ExternalLink,
  SlidersHorizontal,
  Flame,
} from 'lucide-react'
import { Campaign, calculateCampaignPhase, CampaignPhase } from '@/lib/api/leadership'
import { CampaignCard } from '@/components/leadership/elections/campaign-card'
import { GalaxyButton } from '@/components/ui/galaxy-button'

interface CampaignsClientProps {
  initialCampaigns: Campaign[]
  isLive: boolean
}

export function CampaignsClient({ initialCampaigns, isLive }: CampaignsClientProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedYear, setSelectedYear] = useState<string>('all')
  const [selectedRole, setSelectedRole] = useState<string>('all')
  const [selectedScope, setSelectedScope] = useState<string>('all')
  const [selectedPhase, setSelectedPhase] = useState<string>('all')

  // Filter campaigns
  const filteredCampaigns = useMemo(() => {
    return initialCampaigns.filter((c) => {
      // Search
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const matchName = c.name.toLowerCase().includes(query)
        const matchRole = c.role.name.toLowerCase().includes(query)
        const matchDesc = (c.description || '').toLowerCase().includes(query)
        if (!matchName && !matchRole && !matchDesc) return false
      }

      // Year
      if (selectedYear !== 'all' && String(c.campaign_year) !== selectedYear) {
        return false
      }

      // Role
      if (selectedRole !== 'all' && c.role.key !== selectedRole) {
        return false
      }

      // Scope
      if (selectedScope !== 'all' && (c.scope_type || '').toLowerCase() !== selectedScope) {
        return false
      }

      // Phase
      if (selectedPhase !== 'all') {
        const phase = calculateCampaignPhase(c)
        if (selectedPhase === 'nominations' && phase !== 'nominations_open') return false
        if (selectedPhase === 'voting' && phase !== 'voting_active') return false
        if (selectedPhase === 'jury' && phase !== 'jury_evaluation') return false
        if (selectedPhase === 'winners' && phase !== 'winners_declared') return false
      }

      return true
    })
  }, [initialCampaigns, searchQuery, selectedYear, selectedRole, selectedScope, selectedPhase])

  // Aggregate stats
  const totalVotes = useMemo(() => {
    return initialCampaigns.reduce((acc, c) => acc + (c.total_votes || 0), 0)
  }, [initialCampaigns])

  const totalCandidates = useMemo(() => {
    return initialCampaigns.reduce((acc, c) => acc + (c.total_candidates || 0), 0)
  }, [initialCampaigns])

  return (
    <div className="space-y-8">
      {/* =========================================================================
          SECTION 1: HERO — Master Hero Banner matching Homepage & Leadership Ladder
          ========================================================================= */}
      <div className="relative rounded-3xl bg-[#040F24] text-white p-7 sm:p-10 lg:p-12 border border-slate-800 shadow-xl overflow-hidden">
        {/* Full Bleed Video Background matching Homepage & Leadership */}
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

        {/* Ambient Brand Gradient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1D4ED8]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#E11D48]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-rose-400">
              PEERS GLOBAL GOVERNANCE
            </span>
          </div>

          {/* Main Headline with font-serif matching homepage */}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight text-white leading-tight">
            Leadership Selection &amp; Elections
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed">
            Democratic, merit-based selection of District Executive Directors, Circle Chairs, and Industry Directors across Bharat. Governed by 1-member-1-vote cryptographic verification and expert peer jury evaluation.
          </p>

          {/* Promissory Motto Callout */}
          <p className="text-xs sm:text-sm text-white/95 font-medium italic border-l-2 border-[#E11D48] pl-3 py-0.5">
            Influence without authority. Leaders are Partners in Business and Friends in Life.
          </p>

          {/* Action Buttons using genuine GalaxyButtons matching homepage */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <GalaxyButton
              href="/leadership/votes/verify"
              size="default"
              className="text-xs sm:text-sm"
            >
              Verify Ballot
            </GalaxyButton>

            <GalaxyButton
              href="/leadership/juror"
              variant="transparent"
              size="default"
              className="text-xs sm:text-sm"
            >
              Juror Portal
            </GalaxyButton>

            <GalaxyButton
              href="/leadership/winners"
              variant="transparent"
              size="default"
              className="text-xs sm:text-sm"
            >
              Winners Showcase
            </GalaxyButton>
          </div>
        </div>
      </div>

      {/* =========================================================================
          SECTION 2: 4-ITEM STATS STRIP matching Homepage & Leadership Ladder
          ========================================================================= */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
        <div className="rounded-2xl bg-white border border-slate-200/90 p-4 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300">
          <div className="font-serif text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">
            {initialCampaigns.filter((c) => c.status === 'active').length}
          </div>
          <div className="text-xs font-bold text-slate-900 mt-1">Active Campaigns</div>
          <div className="text-[11px] text-slate-500 font-normal">Across Bharat chapters</div>
        </div>

        <div className="rounded-2xl bg-white border border-slate-200/90 p-4 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300">
          <div className="font-serif text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">
            {totalVotes.toLocaleString()}
          </div>
          <div className="text-xs font-bold text-slate-900 mt-1">Verified Ballots Cast</div>
          <div className="text-[11px] text-slate-500 font-normal">1-Member-1-Vote cryptographically verified</div>
        </div>

        <div className="rounded-2xl bg-white border border-slate-200/90 p-4 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300">
          <div className="font-serif text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">
            {totalCandidates}
          </div>
          <div className="text-xs font-bold text-slate-900 mt-1">Nominated Leaders</div>
          <div className="text-[11px] text-slate-500 font-normal">Vetted by Scrutiny Committee</div>
        </div>

        <div className="rounded-2xl bg-white border border-slate-200/90 p-4 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-emerald-700">Live API Connected</span>
          </div>
          <div className="text-xs font-bold text-slate-900 mt-1">dev.peersunity.com</div>
          <div className="text-[11px] text-slate-500 font-normal">Laravel 12 REST Engine</div>
        </div>
      </div>

      {/* =========================================================================
          SECTION 3: SEARCH & FILTER CONTROLS (Clean Executive White Canvas)
          ========================================================================= */}
      <div className="rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-6 shadow-sm space-y-4">
        <div className="flex flex-col lg:flex-row gap-3.5 justify-between">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by role, territory, or campaign keyword..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] transition-all placeholder:text-slate-400"
            />
          </div>

          {/* Dropdown Filters */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Year */}
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
            >
              <option value="all">All Years</option>
              <option value="2026">Year 2026</option>
              <option value="2025">Year 2025</option>
            </select>

            {/* Role */}
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
            >
              <option value="all">All Leadership Roles</option>
              <option value="ded">District Executive Director (DED)</option>
              <option value="circle_chair">Circle Chair</option>
              <option value="sed">State Executive Director (SED)</option>
              <option value="industry_director">Industry Director</option>
            </select>

            {/* Scope */}
            <select
              value={selectedScope}
              onChange={(e) => setSelectedScope(e.target.value)}
              className="px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
            >
              <option value="all">All Scopes</option>
              <option value="national">National</option>
              <option value="state">State</option>
              <option value="district">District</option>
              <option value="city">City</option>
              <option value="circle">Circle</option>
              <option value="industry">Industry</option>
            </select>
          </div>
        </div>

        {/* Phase Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-100">
          <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1">
            <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
            Phase:
          </span>
          {[
            { key: 'all', label: 'All Campaigns' },
            { key: 'nominations', label: 'Nominations Open' },
            { key: 'voting', label: 'Voting Active' },
            { key: 'jury', label: 'Jury Evaluation' },
            { key: 'winners', label: 'Winners Declared' },
          ].map((phase) => {
            const isActive = selectedPhase === phase.key
            return (
              <button
                key={phase.key}
                type="button"
                onClick={() => setSelectedPhase(phase.key)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/70'
                }`}
              >
                {phase.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* =========================================================================
          SECTION 4: CAMPAIGNS GRID (Clean Executive White Canvas)
          ========================================================================= */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-serif text-2xl font-bold text-slate-900 tracking-tight">
            Leadership Campaigns ({filteredCampaigns.length})
          </h2>
          <span className="text-xs text-slate-500 font-medium">
            Live Election Roster
          </span>
        </div>

        {filteredCampaigns.length === 0 ? (
          <div className="text-center py-16 p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <Search className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="font-serif text-lg font-bold text-slate-900 mb-1">
              No matching campaigns found
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Try adjusting your role or phase filter parameters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('')
                setSelectedYear('all')
                setSelectedRole('all')
                setSelectedScope('all')
                setSelectedPhase('all')
              }}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-xs font-bold hover:opacity-95 shadow-sm"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCampaigns.map((campaign) => (
              <CampaignCard key={campaign.id} campaign={campaign} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
