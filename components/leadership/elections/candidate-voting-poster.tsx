'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Vote,
  ShieldCheck,
  Award,
  MapPin,
  Building,
  CheckCircle2,
  Lock,
  QrCode,
  Share2,
  Copy,
  Check,
  Sparkles,
  Play,
  ExternalLink,
} from 'lucide-react'
import { Candidate, Campaign } from '@/lib/api/leadership'

interface CandidateVotingPosterProps {
  candidate: Candidate
  campaign: Campaign
  onVoteClick: (candidate: Candidate) => void
  onShareClick?: () => void
  showFullRosterToggle?: boolean
  onToggleFullRoster?: () => void
}

export function CandidateVotingPoster({
  candidate,
  campaign,
  onVoteClick,
  showFullRosterToggle = true,
  onToggleFullRoster,
}: CandidateVotingPosterProps) {
  const [copiedLink, setCopiedLink] = useState(false)
  const [imgError, setImgError] = useState(false)

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      const url = window.location.href
      navigator.clipboard.writeText(url)
      setCopiedLink(true)
      setTimeout(() => setCopiedLink(false), 2500)
    }
  }

  // Fallback high-res executive image if none provided
  const candidatePhoto =
    !imgError && candidate.photo_url
      ? candidate.photo_url
      : '/images/who-we-are-friends.jpg'

  return (
    <div className="w-full max-w-[500px] mx-auto">
      {/* Top Banner Navigation Pill if accessed via direct candidate link */}
      <div className="flex items-center justify-between gap-2 mb-4 px-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[11px] font-bold text-[#1D4ED8]">
          <span className="w-2 h-2 rounded-full bg-[#1D4ED8] animate-pulse" />
          <span>DIRECT CANDIDATE BALLOT</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs transition-colors"
            title="Share Candidate Voting Link"
          >
            {copiedLink ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">Link Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-slate-500" />
                <span>Share Link</span>
              </>
            )}
          </button>

          {showFullRosterToggle && onToggleFullRoster && (
            <button
              type="button"
              onClick={onToggleFullRoster}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium transition-colors"
            >
              All Nominees
            </button>
          )}
        </div>
      </div>

      {/* The Master Election Poster Card */}
      <div className="relative rounded-3xl overflow-hidden shadow-xl bg-white border border-slate-200/90 text-slate-900 transition-all duration-300">
        {/* Top brand gradient accent stripe */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48]" />

        {/* 1. Header Banner */}
        <div className="relative z-10 px-6 py-4 flex items-center justify-between border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#1D4ED8] to-[#E11D48] flex items-center justify-center p-0.5 shadow-xs">
              <span className="font-black text-xs text-white">PG</span>
            </div>
            <div>
              <div className="text-[11px] font-bold tracking-wider uppercase text-slate-900">
                Peers Global
              </div>
              <div className="text-[9px] font-medium tracking-widest uppercase text-slate-500">
                Community of Collaboration
              </div>
            </div>
          </div>

          <div className="text-right">
            <div className="text-[11px] font-extrabold tracking-widest uppercase brand-gradient-text">
              {campaign.campaign_year || '2026'} ELECTIONS
            </div>
            <div className="text-[9px] font-bold text-emerald-700 flex items-center justify-end gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              BALLOT ACTIVE
            </div>
          </div>
        </div>

        {/* 2. Candidate Portrait Section with Wave Divider */}
        <div className="relative w-full h-72 sm:h-80 bg-slate-100 overflow-hidden">
          <img
            src={candidatePhoto}
            alt={candidate.full_name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-top"
          />

          {/* Top overlay badge */}
          <div className="absolute top-4 left-4 z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-[10px] font-bold text-slate-900 shadow-md tracking-wider uppercase">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>OFFICIAL NOMINEE</span>
            </div>
          </div>

          {candidate.standing_score && (
            <div className="absolute top-4 right-4 z-10">
              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-[10px] font-black text-white shadow-md">
                <Award className="w-3.5 h-3.5 text-amber-300" />
                <span>{candidate.standing_score}/100 SCORE</span>
              </div>
            </div>
          )}

          {/* Smooth Decorative Wave Curve */}
          <div className="absolute bottom-0 inset-x-0 pointer-events-none z-10 leading-none">
            {/* Coral Accent Line */}
            <svg
              viewBox="0 0 500 45"
              preserveAspectRatio="none"
              className="w-full h-7 block text-[#E11D48] opacity-90 -mb-2.5"
            >
              <path
                d="M0,25 C150,45 350,5 500,28 L500,45 L0,45 Z"
                fill="currentColor"
              />
            </svg>
            {/* Clean White Body Fill */}
            <svg
              viewBox="0 0 500 40"
              preserveAspectRatio="none"
              className="w-full h-8 block text-white"
            >
              <path
                d="M0,20 C140,40 340,5 500,24 L500,40 L0,40 Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        {/* 3. High-Impact Typography & Nominee Details */}
        <div className="relative z-10 px-6 sm:px-8 pt-2 pb-8 space-y-5 bg-white">
          {/* VOTE + CANDIDATE NAME STACK */}
          <div className="flex items-start gap-3.5">
            {/* Left Accent "VOTE" Badge */}
            <div className="shrink-0 flex flex-col items-center justify-center pt-1">
              <span className="text-[#E11D48] font-black text-2xl sm:text-3xl tracking-tighter uppercase leading-none">
                VOTE
              </span>
              <div className="w-8 h-1 bg-[#E11D48] rounded-full mt-1.5" />
            </div>

            {/* Candidate Name in Tall Bold Capital Letters */}
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl sm:text-4xl font-black uppercase text-slate-900 tracking-tight leading-tight">
                {candidate.full_name}
              </h1>
              <div className="text-xs sm:text-sm font-bold tracking-widest uppercase brand-gradient-text mt-1">
                FOR {candidate.designation}
              </div>
            </div>
          </div>

          {/* Organization & Jurisdiction Badges */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              <span>{candidate.scope_name}</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
              <Building className="w-3.5 h-3.5 text-[#1D4ED8]" />
              <span>{candidate.company}</span>
            </div>

            {candidate.years_in_peers && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>{candidate.years_in_peers}+ Yrs in Peers</span>
              </div>
            )}
          </div>

          {/* Vision Statement Quote */}
          {candidate.vision_statement && (
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 relative overflow-hidden">
              <div className="text-[10px] font-bold uppercase tracking-widest mb-1.5 flex items-center gap-1.5 brand-gradient-text">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1D4ED8]" />
                <span>Candidate Leadership Vision</span>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-700 italic leading-relaxed font-normal">
                &ldquo;{candidate.vision_statement}&rdquo;
              </p>
            </div>
          )}

          {/* Cryptographic Verification Seal Box */}
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 text-[#1D4ED8]">
                <QrCode className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-bold text-slate-900 tracking-wide">
                  OFFICIAL 2026 DIGITAL BALLOT
                </div>
                <div className="text-[10px] text-slate-500 font-mono">
                  ID: #{candidate.id.slice(0, 8)}...{candidate.id.slice(-4)}
                </div>
              </div>
            </div>

            <div className="text-right shrink-0">
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold tracking-wider uppercase">
                <Lock className="w-3 h-3 text-emerald-600" />
                1-MEMBER-1-VOTE
              </div>
              <div className="text-[9px] text-slate-500 mt-0.5">
                Protected via SMS OTP
              </div>
            </div>
          </div>

          {/* 4. THE PROMINENT VOTING ACTION BUTTON */}
          <div className="pt-2 space-y-2.5">
            <button
              type="button"
              onClick={() => onVoteClick(candidate)}
              className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white font-bold text-sm sm:text-base shadow-md shadow-blue-500/15 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <Vote className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>Vote for {candidate.full_name}</span>
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 text-center font-medium">
              <Lock className="w-3 h-3 text-emerald-600 shrink-0" />
              <span>2-Factor mobile OTP authentication &amp; cryptographic receipt issued</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
