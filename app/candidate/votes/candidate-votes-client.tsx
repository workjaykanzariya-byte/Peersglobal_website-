'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import {
  ShieldCheck,
  Mail,
  Lock,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  Users,
  Building2,
  MapPin,
  Quote,
  Copy,
  Check,
  LogOut,
  ExternalLink,
  Search,
  Award,
  Vote,
  Sparkles,
  Phone,
  Calendar,
  Filter,
  Clock,
} from 'lucide-react'

interface CandidateProfile {
  id: string
  full_name: string
  email: string
  mobile?: string
  company: string
  designation: string
  city: string
  state?: string
  role_title?: string
  scope_name?: string
  photo_url?: string
  status?: string
}

interface VoterEndorsement {
  id: number
  vote_reference: string
  campaign_id: string
  candidate_id: string
  candidate_name: string
  candidate_email?: string
  voter_name: string
  voter_email: string
  voter_phone?: string
  voter_company?: string
  voter_designation?: string
  voter_city: string
  support_reason?: string
  created_at: string
}

interface SummaryData {
  total_votes: number
  unique_companies: number
  unique_cities: number
  cities_breakdown: Record<string, number>
}

export function CandidateVotesClient() {
  // Step state: 'email' | 'otp' | 'dashboard'
  const [step, setStep] = useState<'email' | 'otp' | 'dashboard'>('email')

  // Form inputs
  const [emailInput, setEmailInput] = useState('')
  const [otpDigits, setOtpDigits] = useState(['', '', '', '', '', ''])
  const [devOtpHint, setDevOtpHint] = useState<string | null>(null)

  // Feedback & loaders
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isPendingApproval, setIsPendingApproval] = useState(false)
  const [pendingMessage, setPendingMessage] = useState<string | null>(null)
  const [successMsg, setSuccessMsg] = useState<string | null>(null)
  const [resendTimer, setResendTimer] = useState<number>(60)

  // Authenticated candidate data
  const [candidate, setCandidate] = useState<CandidateProfile | null>(null)
  const [sessionToken, setSessionToken] = useState<string | null>(null)
  const [summary, setSummary] = useState<SummaryData | null>(null)
  const [votes, setVotes] = useState<VoterEndorsement[]>([])

  // Dashboard filters
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCityFilter, setSelectedCityFilter] = useState('ALL')
  const [copiedLink, setCopiedLink] = useState(false)

  const otpInputRefs = useRef<(HTMLInputElement | null)[]>([])

  // Load existing session from localStorage if available
  useEffect(() => {
    try {
      const savedToken = localStorage.getItem('pg_candidate_session_token')
      if (savedToken) {
        setSessionToken(savedToken)
        fetchMyVotes(savedToken)
      }
    } catch { }
  }, [])

  // Timer countdown for resending OTP
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (step === 'otp' && resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prev) => prev - 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [step, resendTimer])

  // 1. Request OTP for Candidate Email
  const handleRequestOtp = async (e?: React.FormEvent, directEmail?: string) => {
    if (e) e.preventDefault()
    setError(null)
    setSuccessMsg(null)
    setIsPendingApproval(false)
    setPendingMessage(null)

    const inputToSend = (directEmail || emailInput).trim()
    if (!inputToSend) {
      setError('Please provide your nomination email address or Application Reference ID.')
      return
    }

    setIsLoading(true)
    try {
      const res = await fetch('/api/leadership/candidate/request-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier: inputToSend, email: inputToSend }),
      })

      const data = await res.json()

      if (!res.ok || !data.success) {
        if (data.is_pending) {
          setIsPendingApproval(true)
          setPendingMessage(
            data.message ||
            'Your application is submitted. After approval you will get the access to open the voting section.'
          )
        } else {
          setError(
            data.message ||
            'Your application is submitted. After approval you will get the access to open the voting section.'
          )
        }
        return
      }

      setCandidate(data.candidate)
      setEmailInput(emailToSend)
      setSuccessMsg(data.message)
      setStep('otp')
      setResendTimer(60)
      setOtpDigits(['', '', '', '', '', ''])

      // Auto-focus first digit
      setTimeout(() => {
        otpInputRefs.current[0]?.focus()
      }, 150)
    } catch (err: any) {
      setError(err.message || 'Network error while requesting verification OTP.')
    } finally {
      setIsLoading(false)
    }
  }

  // 2. Handle 6-Digit OTP Input
  const handleDigitChange = (index: number, value: string) => {
    const cleanVal = value.replace(/\D/g, '')
    if (cleanVal.length > 1) {
      // Paste handling
      const digits = cleanVal.slice(0, 6).split('')
      const nextDigits = [...otpDigits]
      digits.forEach((d, i) => {
        if (i < 6) nextDigits[i] = d
      })
      setOtpDigits(nextDigits)
      const focusIndex = Math.min(digits.length, 5)
      otpInputRefs.current[focusIndex]?.focus()
      return
    }

    const nextDigits = [...otpDigits]
    nextDigits[index] = cleanVal
    setOtpDigits(nextDigits)

    // Move to next input if filled
    if (cleanVal && index < 5) {
      otpInputRefs.current[index + 1]?.focus()
    }
  }

  const handleDigitKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otpDigits[index] && index > 0) {
      otpInputRefs.current[index - 1]?.focus()
    }
  }

  // Quick fill OTP code
  const fillCode = (code: string) => {
    const digits = code.split('').slice(0, 6)
    setOtpDigits(digits)
    setError(null)
  }

  // 3. Verify OTP & Log In
  const handleVerifyOtp = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    setError(null)

    const fullOtp = otpDigits.join('').trim()
    if (fullOtp.length < 6) {
      setError('Please enter all 6 digits of your one-time password.')
      return
    }

    setIsLoading(true)
    try {
      const res = await fetch('/api/leadership/candidate/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier: emailInput, email: emailInput, otp: fullOtp }),
      })

      const data = await res.json()

      if (!res.ok || !data.success) {
        setError(data.message || 'Invalid or expired verification code.')
        return
      }

      setSessionToken(data.token)
      setCandidate(data.candidate)
      try {
        localStorage.setItem('pg_candidate_session_token', data.token)
        localStorage.setItem('pg_candidate_session_email', emailInput)
      } catch { }

      // Fetch strictly isolated votes for this candidate
      await fetchMyVotes(data.token)
      setStep('dashboard')
    } catch (err: any) {
      setError(err.message || 'Encountered an error while verifying OTP.')
    } finally {
      setIsLoading(false)
    }
  }

  // 4. Fetch Strictly Isolated Votes for Authenticated Candidate
  const fetchMyVotes = async (token: string) => {
    setIsLoading(true)
    try {
      const res = await fetch('/api/leadership/candidate/my-votes', {
        headers: { Authorization: `Bearer ${token}` },
      })
      const data = await res.json()

      if (res.ok && data.success) {
        setCandidate(data.candidate)
        setSummary(data.summary)
        setVotes(data.votes || [])
        setStep('dashboard')
      } else {
        // Token might have expired
        try {
          localStorage.removeItem('pg_candidate_session_token')
          localStorage.removeItem('pg_candidate_session_email')
        } catch { }
        setSessionToken(null)
        setEmailInput('')
        setStep('email')
        setError('Please enter your email to view your votes.')
      }
    } catch {
      try {
        localStorage.removeItem('pg_candidate_session_token')
        localStorage.removeItem('pg_candidate_session_email')
      } catch { }
      setSessionToken(null)
      setEmailInput('')
      setStep('email')
      setError('Please enter your email to view your votes.')
    } finally {
      setIsLoading(false)
    }
  }

  // 5. Logout
  const handleLogout = () => {
    try {
      localStorage.removeItem('pg_candidate_session_token')
      localStorage.removeItem('pg_candidate_session_email')
    } catch { }
    setSessionToken(null)
    setCandidate(null)
    setVotes([])
    setSummary(null)
    setEmailInput('')
    setOtpDigits(['', '', '', '', '', ''])
    setDevOtpHint(null)
    setStep('email')
    setError(null)
    setSuccessMsg(null)
  }

  // Filtered endorsements in dashboard
  const filteredVotes = votes.filter((v) => {
    const matchesSearch =
      !searchQuery ||
      v.voter_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (v.voter_company && v.voter_company.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (v.voter_city && v.voter_city.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (v.support_reason && v.support_reason.toLowerCase().includes(searchQuery.toLowerCase())) ||
      v.vote_reference.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCity = selectedCityFilter === 'ALL' || v.voter_city.toUpperCase() === selectedCityFilter.toUpperCase()

    return matchesSearch && matchesCity
  })

  // Cities for filter pills
  const availableCities = summary?.cities_breakdown ? Object.keys(summary.cities_breakdown) : []

  // Public vote link copy
  const candidateVoteUrl = typeof window !== 'undefined' && candidate?.id
    ? `${window.location.origin}/vote/${candidate.id}`
    : ''

  const handleCopyLink = () => {
    if (candidateVoteUrl) {
      navigator.clipboard.writeText(candidateVoteUrl)
      setCopiedLink(true)
      setTimeout(() => setCopiedLink(false), 2500)
    }
  }

  return (
    <div className="w-full">
      {/* ---------------- LOGIN & OTP VERIFICATION VIEW ---------------- */}
      {step !== 'dashboard' && (
        <div className="max-w-xl mx-auto">
          <div className="relative rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-10 shadow-xl overflow-hidden">
            {/* Top signature gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48]" />

            {/* Step 1: Candidate Email Entry */}
            {step === 'email' && (
              <form onSubmit={handleRequestOtp} className="space-y-6">
                <div className="text-center space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-sky-400 text-xs font-bold tracking-wide uppercase">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Candidate Portal
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Track My Votes
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Enter your registered nomination email address to see your live votes and endorsements. We will send a 6-digit verification code to your email.
                  </p>
                </div>

                {isPendingApproval ? (
                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300 text-slate-800 text-xs flex items-start gap-3 animate-in fade-in duration-200 text-left shadow-xs">
                    <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5 border border-amber-200">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <div className="font-bold text-amber-900 text-sm">Nomination Under Review</div>
                      <p className="leading-relaxed text-amber-950 font-medium">
                        {pendingMessage ||
                          'Your nomination is submitted. You will be able to see your votes once your nomination is approved.'}
                      </p>
                    </div>
                  </div>
                ) : error ? (
                  <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 text-xs flex items-start gap-2.5 text-left shadow-xs">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-medium">{error}</span>
                  </div>
                ) : null}

                <div className="space-y-2 text-left">
                  <label className="text-xs font-semibold text-slate-700 flex items-center justify-between">
                    <span>Email Address or Application Reference</span>
                    <span className="text-[11px] text-slate-500">e.g. user@example.com or PG-2026-00008</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={emailInput}
                      onChange={(e) => {
                        setEmailInput(e.target.value)
                        if (error) setError(null)
                        if (isPendingApproval) setIsPendingApproval(false)
                      }}
                      placeholder="Enter registered email or PG-2026-XXXXX"
                      autoComplete="off"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:bg-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-sans"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 rounded-xl brand-btn-primary bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 font-semibold text-sm text-white shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Sending Verification Code...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Verification Code</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="text-center pt-2">
                  <p className="text-[11px] text-slate-500">
                    Not a candidate yet?{' '}
                    <Link
                      href="/leadership/campaigns"
                      className="text-sky-400 hover:underline font-medium"
                    >
                      Apply for nomination
                    </Link>
                  </p>
                </div>
              </form>
            )}

            {/* Step 2: 6-Digit OTP Verification */}
            {step === 'otp' && (
              <form onSubmit={handleVerifyOtp} className="space-y-6">
                <button
                  type="button"
                  onClick={() => {
                    setStep('email')
                    setError(null)
                  }}
                  className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 transition-colors font-medium"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Change email address
                </button>

                <div className="text-center space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold tracking-wide uppercase">
                    <Lock className="w-3.5 h-3.5" />
                    Verification
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                    Enter Verification Code
                  </h2>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                    We sent a 6-digit verification code to{' '}
                    <strong className="text-slate-900 font-mono">{emailInput}</strong>.
                  </p>
                </div>

                {/* Candidate preview snippet to confirm identity */}
                {candidate && (
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center font-bold text-blue-700 text-sm shrink-0">
                      {candidate.full_name.charAt(0)}
                    </div>
                    <div className="text-left overflow-hidden">
                      <div className="text-sm font-semibold text-slate-900 truncate">
                        {candidate.full_name}
                      </div>
                      <div className="text-[11px] text-slate-500 truncate">
                        {candidate.designation} · {candidate.company}
                      </div>
                    </div>
                    <span className="ml-auto text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                      Nominee
                    </span>
                  </div>
                )}

                {error && (
                  <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 text-xs flex items-start gap-2.5 shadow-xs">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-medium">{error}</span>
                  </div>
                )}

                {/* 6 Digit Inputs */}
                <div className="space-y-3">
                  <div className="flex justify-center gap-2 sm:gap-3">
                    {otpDigits.map((digit, idx) => (
                      <input
                        key={idx}
                        ref={(el) => {
                          otpInputRefs.current[idx] = el
                        }}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleDigitChange(idx, e.target.value)}
                        onKeyDown={(e) => handleDigitKeyDown(idx, e)}
                        className="w-11 h-13 sm:w-12 sm:h-14 text-center font-mono text-xl sm:text-2xl font-bold rounded-xl bg-white border border-slate-300 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all shadow-xs"
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span>Didn't receive code?</span>
                  {resendTimer > 0 ? (
                    <span className="text-slate-400">Resend in {resendTimer}s</span>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleRequestOtp()}
                      className="text-[#1D4ED8] hover:underline font-semibold"
                    >
                      Resend Code
                    </button>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 rounded-xl brand-btn-primary bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 font-semibold text-sm text-white shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Verifying Code...</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Verify &amp; Track My Votes</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ---------------- DASHBOARD: CANDIDATE PRIVATE VOTES VIEW ---------------- */}
      {step === 'dashboard' && candidate && (
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Executive Candidate Header */}
          <div className="relative rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm overflow-hidden">
            {/* Top signature gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48]" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start sm:items-center gap-4">
                {candidate.photo_url ? (
                  <img
                    src={candidate.photo_url}
                    alt={candidate.full_name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-blue-500/30 shadow-md shrink-0"
                  />
                ) : (
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#1D4ED8] to-indigo-700 border-2 border-blue-400/30 text-white font-bold text-2xl flex items-center justify-center shadow-md shrink-0">
                    {candidate.full_name.charAt(0)}
                  </div>
                )}

                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-bold uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Verified Nominee
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      ID: {candidate.id}
                    </span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    {candidate.full_name}
                  </h1>

                  <p className="text-xs sm:text-sm text-slate-600">
                    <strong className="text-slate-900 font-semibold">{candidate.designation}</strong> · {candidate.company}
                  </p>

                  <div className="text-[11px] text-slate-500 flex items-center gap-2 pt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#1D4ED8]" />
                    <span>Territory: {candidate.scope_name || 'Surat District'}</span>
                    <span>•</span>
                    <span>Role: {candidate.role_title || 'District Executive Director'}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                {candidateVoteUrl && (
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-[#1D4ED8] text-xs font-semibold transition-colors shadow-xs"
                  >
                    {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedLink ? 'Link Copied!' : 'Copy Voting Link'}</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => fetchMyVotes(sessionToken || '')}
                  disabled={isLoading}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold border border-slate-200 transition-colors"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-[#1D4ED8]' : ''}`} />
                  <span>Refresh</span>
                </button>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-rose-50 hover:text-rose-700 text-slate-600 text-xs font-semibold border border-slate-200 hover:border-rose-200 transition-colors"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Exit</span>
                </button>
              </div>
            </div>
          </div>

          {/* Key Metrics Cards (Strict Isolation) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Total Votes */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-blue-200 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between text-xs font-bold text-[#1D4ED8] uppercase tracking-wider mb-2">
                <span>Votes Received</span>
                <Vote className="w-4 h-4 text-[#1D4ED8]" />
              </div>
              <div className="font-mono text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                {summary?.total_votes ?? votes.length}
              </div>
              <div className="text-[11px] text-slate-500 mt-1.5">
                Verified member endorsements strictly isolated to your candidacy
              </div>
            </div>

            {/* Unique Companies */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between text-xs font-bold text-indigo-600 uppercase tracking-wider mb-2">
                <span>Unique Businesses</span>
                <Building2 className="w-4 h-4 text-indigo-600" />
              </div>
              <div className="font-mono text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                {summary?.unique_companies ?? 0}
              </div>
              <div className="text-[11px] text-slate-500 mt-1.5">
                Distinct enterprise organizations endorsing your leadership
              </div>
            </div>

            {/* Geographic Spread */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">
                <span>Territory Cities</span>
                <MapPin className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="font-mono text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                {summary?.unique_cities ?? 0}
              </div>
              <div className="text-[11px] text-slate-500 mt-1.5">
                {availableCities.join(', ') || 'District footprint'}
              </div>
            </div>

            {/* Candidate Privacy Guarantee */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-emerald-200 shadow-sm">
              <div className="flex items-center justify-between text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">
                <span>Data Isolation</span>
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="text-sm font-bold text-emerald-700">
                100% Isolated
              </div>
              <div className="text-[11px] text-slate-500 mt-1.5">
                Zero cross-candidate access. You see only endorsements for your profile.
              </div>
            </div>
          </div>

          {/* "Who Endorsed You" (From Whom) Endorsement Roster */}
          <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D4ED8] uppercase tracking-wider mb-1">
                  <Users className="w-3.5 h-3.5" />
                  Detailed Endorsement Roster
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Who Endorsed You ("From Whom")
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Complete profiles of verified peers and members who cast their vote in your support.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 self-start sm:self-auto">
                <span>Showing:</span>
                <strong className="text-slate-900 font-mono">{filteredVotes.length}</strong>
                <span>of</span>
                <strong className="text-slate-900 font-mono">{votes.length}</strong>
                <span>Total Votes</span>
              </div>
            </div>

            {/* Filter & Search Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search voter by name, company, city, or reference..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:bg-white text-xs focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>

              {/* City Filter Pills */}
              <div className="flex flex-wrap items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setSelectedCityFilter('ALL')}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${selectedCityFilter === 'ALL'
                      ? 'bg-[#1D4ED8] text-white shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 border border-slate-200'
                    }`}
                >
                  All ({votes.length})
                </button>

                {availableCities.map((city) => (
                  <button
                    key={city}
                    type="button"
                    onClick={() => setSelectedCityFilter(city)}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${selectedCityFilter.toUpperCase() === city.toUpperCase()
                        ? 'bg-[#1D4ED8] text-white shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 border border-slate-200'
                      }`}
                  >
                    {city} ({summary?.cities_breakdown[city] || 0})
                  </button>
                ))}
              </div>
            </div>

            {/* List of Voter Cards */}
            {filteredVotes.length > 0 ? (
              <div className="space-y-4">
                {filteredVotes.map((vote, idx) => (
                  <div
                    key={vote.id || vote.vote_reference}
                    className="p-5 sm:p-6 rounded-2xl bg-slate-50/70 hover:bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all space-y-4 shadow-xs"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                      <div className="flex items-start gap-3.5">
                        {/* Voter Avatar Initials */}
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1D4ED8] to-indigo-700 border border-blue-200 text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-xs">
                          {vote.voter_name
                            .split(' ')
                            .map((p) => p[0])
                            .slice(0, 2)
                            .join('')}
                        </div>

                        <div className="space-y-0.5">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-base font-bold text-slate-900 tracking-tight">
                              {vote.voter_name}
                            </h3>
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold">
                              <CheckCircle2 className="w-3 h-3" />
                              Verified Voter
                            </span>
                          </div>

                          <div className="text-xs text-slate-600 font-medium">
                            {vote.voter_designation && <span>{vote.voter_designation}</span>}
                            {vote.voter_designation && vote.voter_company && <span> · </span>}
                            {vote.voter_company && <strong className="text-slate-900 font-semibold">{vote.voter_company}</strong>}
                          </div>

                          <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-500 pt-0.5">
                            {vote.voter_city && (
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3 h-3 text-[#1D4ED8]" />
                                {vote.voter_city}
                              </span>
                            )}
                            {vote.voter_email && (
                              <span className="flex items-center gap-1">
                                <Mail className="w-3 h-3 text-slate-400" />
                                {vote.voter_email}
                              </span>
                            )}
                            {vote.voter_phone && (
                              <span className="flex items-center gap-1">
                                <Phone className="w-3 h-3 text-slate-400" />
                                {vote.voter_phone}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Vote Reference & Time */}
                      <div className="text-left sm:text-right shrink-0 pt-1 sm:pt-0">
                        <span className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white text-[#1D4ED8] border border-slate-200 font-bold block sm:inline-block shadow-2xs">
                          {vote.vote_reference}
                        </span>
                        <div className="text-[11px] text-slate-500 mt-1 flex items-center sm:justify-end gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>
                            {new Date(vote.created_at).toLocaleDateString('en-IN', {
                              day: '2-digit',
                              month: 'short',
                              year: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Support Reason / Endorsement Quote */}
                    {vote.support_reason && (
                      <div className="relative pl-4 sm:pl-5 pr-4 py-3 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-700 italic leading-relaxed shadow-2xs">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1D4ED8] to-[#E11D48] rounded-l-xl" />
                        <Quote className="w-4 h-4 text-[#1D4ED8]/60 inline-block mr-1.5 -mt-1 not-italic" />
                        "{vote.support_reason}"
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-12 rounded-2xl bg-slate-50 border border-dashed border-slate-200 text-center space-y-3">
                <Users className="w-10 h-10 text-slate-400 mx-auto" />
                <h3 className="text-base font-bold text-slate-800">No Endorsement Votes Found</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  {searchQuery || selectedCityFilter !== 'ALL'
                    ? 'No votes match your active search and city filters.'
                    : 'You have not received any endorsement votes yet. Share your direct voting link with your network!'}
                </p>
                {candidateVoteUrl && (
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl brand-btn-primary bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-xs font-semibold text-white shadow-sm transition-all mt-2 cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy My Voting Booth Link</span>
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Strict Data Isolation Guarantee Banner */}
          <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 text-xs text-slate-700 leading-relaxed flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#1D4ED8] shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 block mb-0.5">
                Peers Global Election Integrity &amp; Strict Data Isolation Policy
              </strong>
              <span>
                This dashboard is cryptographically scoped to candidate{' '}
                <strong className="text-slate-900">{candidate.full_name}</strong>. In accordance with the Peers Global Charter, you can only view endorsements cast specifically for your candidacy. Voting rosters and records of competing candidates remain strictly isolated and inaccessible.
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
