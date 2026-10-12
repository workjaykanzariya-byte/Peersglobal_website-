'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Vote,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Share2,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  MapPin,
  Building,
  RefreshCw,
  AlertCircle,
  ExternalLink,
} from 'lucide-react'
import { Candidate, Campaign } from '@/lib/api/leadership'

interface CandidateEndorsementVoteCardProps {
  candidate: Candidate
  campaign?: Campaign
  onBackToRoster?: () => void
  showBackToggle?: boolean
}

export function CandidateEndorsementVoteCard({
  candidate,
  campaign,
  onBackToRoster,
  showBackToggle = false,
}: CandidateEndorsementVoteCardProps) {
  // Form State
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [business, setBusiness] = useState('')
  const [designation, setDesignation] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')
  const [supportReason, setSupportReason] = useState('')

  // UI state
  const [isBioExpanded, setIsBioExpanded] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [copiedLink, setCopiedLink] = useState(false)
  const [votesCount, setVotesCount] = useState<number>(candidate.votes_count ?? 0)

  // Success Receipt State
  const [receipt, setReceipt] = useState<{
    reference: string
    timestamp: string
    voterName: string
  } | null>(null)

  // Share link handler
  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href)
      setCopiedLink(true)
      setTimeout(() => setCopiedLink(false), 2500)
    }
  }

  // Submit Vote
  const handleSubmitVote = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!fullName.trim()) {
      setError('Please enter your full name')
      return
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid email address')
      return
    }
    if (!phone.trim()) {
      setError('Please enter your phone number')
      return
    }
    if (!city.trim()) {
      setError('Please enter your city')
      return
    }

    setIsSubmitting(true)
    try {
      const res = await fetch('/api/leadership/cast-vote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          campaign_id: campaign?.id || candidate.campaign_id || 'pg-ded-2026',
          candidate_id: candidate.id,
          candidate_name: candidate.full_name,
          candidate_email:
            (candidate as any).email ||
            (candidate as any).profile?.email ||
            (candidate as any).profile_snapshot?.email ||
            '',
          full_name: fullName.trim(),
          email: email.trim(),
          business: business.trim(),
          company: business.trim(),
          designation: designation.trim(),
          phone: phone.trim(),
          city: city.trim(),
          support_reason: supportReason.trim(),
        }),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setReceipt({
          reference: data.vote_reference || `PG-VOTE-2026-${Date.now().toString(36).toUpperCase()}`,
          timestamp: data.cast_at || new Date().toISOString(),
          voterName: fullName.trim(),
        })
        setVotesCount((prev) => prev + 1)
      } else {
        setError(data.message || 'Unable to record your vote. Please try again.')
      }
    } catch (err: any) {
      setError(err?.message || 'Failed to submit vote. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const categoryName =
    candidate.scope_name ||
    campaign?.role?.name ||
    campaign?.title ||
    'District Executive Director (DED)'

  const shortBio = candidate.bio ||
    'Pioneering business leader driving enterprise expansion, regional innovation, and collaborative ecosystem impact in the Peers Global community.'

  return (
    <div className="w-full max-w-[620px] mx-auto">
      {/* Top action bar if back button enabled */}
      {showBackToggle && onBackToRoster && (
        <div className="flex items-center justify-between mb-4 px-1">
          <button
            type="button"
            onClick={onBackToRoster}
            className="text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
          >
            ← View All Nominees
          </button>
          <button
            type="button"
            onClick={handleCopyLink}
            className="text-xs font-medium text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
          >
            {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
            {copiedLink ? 'Link Copied' : 'Share Ballot'}
          </button>
        </div>
      )}

      {/* Main Container Card — Deep Luxury Theme with Peers Global Color Contrast */}
      <div className="relative rounded-[32px] overflow-hidden bg-[#040F24] border border-slate-800 text-white shadow-2xl transition-all">
        {/* Top glowing gradient stripe (Peers signature gradient) */}
        <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48]" />

        {/* Subtle Ambient Background Lighting */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#1D4ED8]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-[#E11D48]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 p-6 sm:p-9 space-y-6">
          {/* ================= SECTION 1: CANDIDATE PROFILE ================= */}
          <div className="space-y-4">
            {/* Header: OFFICIAL NOMINEE · 2026 */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.25em] uppercase text-amber-400/95 drop-shadow-xs">
                <span>✦</span>
                <span>OFFICIAL NOMINEE · {campaign?.campaign_year || '2026'}</span>
                <span>✦</span>
              </div>
            </div>

            {/* Candidate Header Row */}
            <div className="flex items-start gap-4 sm:gap-5 pt-1">
              {/* Circular Avatar with Glowing Ring */}
              <div className="relative shrink-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-amber-400/70 ring-4 ring-[#1D4ED8]/30 shadow-xl bg-slate-800">
                  <img
                    src={candidate.photo_url || '/images/who-we-are-friends.jpg'}
                    alt={candidate.full_name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Candidate Info Center */}
              <div className="flex-1 min-w-0 pt-0.5">
                <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                  {candidate.full_name}
                </h1>
                <div className="text-xs sm:text-sm font-medium text-amber-200/90 mt-1">
                  {candidate.company || 'Peers Global Member Enterprise'}
                </div>
                <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-sky-400 mt-1">
                  {categoryName}
                </div>

                {/* Candidate Bio with Read More toggle */}
                <div className="mt-2 text-xs text-slate-300 leading-relaxed font-normal">
                  <p className={isBioExpanded ? '' : 'line-clamp-2'}>
                    {shortBio}
                  </p>
                  {shortBio.length > 90 && (
                    <button
                      type="button"
                      onClick={() => setIsBioExpanded(!isBioExpanded)}
                      className="text-[11px] font-semibold text-amber-400 hover:text-amber-300 mt-0.5 underline hover:no-underline inline-block"
                    >
                      {isBioExpanded ? 'Read less' : 'Read more'}
                    </button>
                  )}
                </div>
              </div>

              {/* Votes Box on Right (as in reference screenshot) */}
              <div className="shrink-0">
                <div className="w-18 sm:w-20 py-2.5 px-2 rounded-2xl bg-[#030914] border border-amber-400/30 text-center shadow-inner">
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-white leading-none">
                    {votesCount}
                  </div>
                  <div className="text-[9px] font-bold tracking-widest text-slate-400 uppercase mt-1">
                    VOTES
                  </div>
                </div>
              </div>
            </div>

            {/* Dotted Divider Line with End Dots */}
            <div className="relative py-2 flex items-center justify-between">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0" />
              <div className="flex-1 border-t border-dotted border-slate-700/80 mx-2" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0" />
            </div>

            {/* Metadata 3-Column Grid */}
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2 rounded-xl bg-slate-900/40 border border-slate-800">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                  CATEGORY
                </div>
                <div className="font-semibold text-white truncate text-[11px] sm:text-xs">
                  {categoryName}
                </div>
              </div>

              <div className="p-2 rounded-xl bg-slate-900/40 border border-slate-800">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                  AWARD YEAR
                </div>
                <div className="font-semibold text-white text-[11px] sm:text-xs">
                  {campaign?.campaign_year || '2026'}
                </div>
              </div>

              <div className="p-2 rounded-xl bg-slate-900/40 border border-slate-800">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                  STATUS
                </div>
                <div className="font-semibold text-emerald-400 text-[11px] sm:text-xs flex items-center justify-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Voting open
                </div>
              </div>
            </div>
          </div>

          {/* ================= SECTION 2: CAST YOUR VOTE ================= */}
          {!receipt ? (
            <div className="pt-2 space-y-5">
              {/* Separator / Title Header */}
              <div className="text-center space-y-1.5">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.25em] uppercase text-amber-400">
                  <span>◆</span>
                  <span>CAST YOUR VOTE</span>
                  <span>◆</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-amber-100 tracking-tight">
                  Your endorsement matters
                </h2>
                <p className="text-xs text-slate-400 font-normal">
                  One vote per email · Official Election Audit Record
                </p>
              </div>

              {/* Error Alert */}
              {error && (
                <div className="p-3.5 rounded-2xl bg-red-950/60 border border-red-800 text-red-200 text-xs flex items-center gap-2.5">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Endorsement Form */}
              <form onSubmit={handleSubmitVote} className="space-y-4">
                {/* FULL NAME */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    FULL NAME <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Your full name"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-700/80 bg-[#071328] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:border-[#1D4ED8] transition-all"
                    required
                  />
                </div>

                {/* EMAIL ADDRESS */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    EMAIL ADDRESS <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-700/80 bg-[#071328] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:border-[#1D4ED8] transition-all"
                    required
                  />
                </div>

                {/* BUSINESS & DESIGNATION (2 columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      BUSINESS
                    </label>
                    <input
                      type="text"
                      value={business}
                      onChange={(e) => setBusiness(e.target.value)}
                      placeholder="Company"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-700/80 bg-[#071328] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:border-[#1D4ED8] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      DESIGNATION
                    </label>
                    <input
                      type="text"
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
                      placeholder="Your role"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-700/80 bg-[#071328] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:border-[#1D4ED8] transition-all"
                    />
                  </div>
                </div>

                {/* PHONE & CITY (2 columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      PHONE <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-700/80 bg-[#071328] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:border-[#1D4ED8] transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      CITY <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Your city"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-700/80 bg-[#071328] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:border-[#1D4ED8] transition-all"
                      required
                    />
                  </div>
                </div>

                {/* WHY YOU SUPPORT THIS NOMINEE */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    WHY YOU SUPPORT THIS NOMINEE
                  </label>
                  <textarea
                    rows={3}
                    value={supportReason}
                    onChange={(e) => setSupportReason(e.target.value)}
                    placeholder="Share your reason..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-700/80 bg-[#071328] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:border-[#1D4ED8] transition-all"
                  />
                </div>

                {/* SUBMIT BUTTON — Signature Peers Global Gradient */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#E11D48] hover:from-[#1E40AF] hover:to-[#BE123C] text-white font-bold text-sm sm:text-base shadow-xl shadow-blue-600/25 hover:shadow-rose-600/25 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-5 h-5 animate-spin" />
                        <span>Submitting Endorsement...</span>
                      </>
                    ) : (
                      <>
                        <Vote className="w-5 h-5" />
                        <span>SUBMIT MY VOTE</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Security Guarantee Footnote */}
                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 text-center pt-1">
                  <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Immutable audit ledger recording · 1 vote per verified email</span>
                </div>
              </form>
            </div>
          ) : (
            /* ================= SUCCESS RECEIPT STATE ================= */
            <div className="pt-4 pb-2 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Vote Successfully Recorded!
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-1.5 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{receipt.voterName}</strong>. Your endorsement for <strong>{candidate.full_name}</strong> has been sealed and logged in the election audit ledger.
                </p>
              </div>

              {/* Official Ballot Record Box */}
              <div className="p-5 rounded-2xl bg-[#030914] border border-slate-800 text-left space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    OFFICIAL BALLOT RECEIPT
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    <ShieldCheck className="w-3 h-3" /> VERIFIED
                  </span>
                </div>

                <div className="space-y-1.5 text-xs font-mono">
                  <div className="text-slate-400 text-[10px] uppercase">Reference ID:</div>
                  <div className="text-sm sm:text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-rose-400">
                    {receipt.reference}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-slate-800/80 text-slate-300">
                  <div>
                    <span className="text-slate-400 text-[10px] block">Nominee:</span>
                    <span className="font-semibold text-white">{candidate.full_name}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] block">Role:</span>
                    <span className="font-semibold text-white">{categoryName}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] block">Voter City:</span>
                    <span className="font-semibold text-white">{city || 'Gujarat'}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] block">Timestamp:</span>
                    <span className="font-semibold text-white">
                      {new Date(receipt.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/20 transition-all flex items-center gap-1.5"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share Nominee Link</span>
                </button>

                {onBackToRoster && (
                  <button
                    type="button"
                    onClick={onBackToRoster}
                    className="brand-btn-primary px-6 py-2.5 rounded-full text-white text-xs font-semibold shadow-md transition-all"
                  >
                    View All Candidates
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
