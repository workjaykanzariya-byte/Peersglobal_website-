'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import {
  ShieldCheck,
  Lock,
  Mail,
  Send,
  RotateCcw,
  RefreshCw,
  Users,
  CheckCircle2,
  Calendar,
  AlertCircle,
  MapPin,
  ChevronLeft,
  Clock,
} from 'lucide-react'
import { OtpSixBoxInput } from './otp-six-box-input'

const API_BASE = 'https://peersunity.com/api/v1/leadership'

interface VoteRecord {
  index?: number
  id: string
  voter_name: string
  organization: string
  role: string
  city: string
  support_statement: string
  vote_ref_code: string
  voted_at: string
  contact_masked?: string
}

interface VoterLedgerClientProps {
  nominationId: string
}

export function VoterLedgerClient({ nominationId }: VoterLedgerClientProps) {
  // Candidate meta
  const [candidate, setCandidate] = useState<{
    name: string
    role: string
    city: string
    application_number: string
    is_voting_open: boolean
    voting_ends_at?: string
    photo_url?: string | null
  } | null>(null)

  // Auth / OTP Gate state
  const [candidateEmail, setCandidateEmail] = useState('')
  const [otpCode, setOtpCode] = useState('')
  const [verificationId, setVerificationId] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const [isSendingOtp, setIsSendingOtp] = useState(false)
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false)
  const [authToken, setAuthToken] = useState<string | null>(null)
  const [gateError, setGateError] = useState<string | null>(null)
  const [resendTimer, setResendTimer] = useState(0)
  const [resendNotice, setResendNotice] = useState<string | null>(null)

  // Ledger state
  const [votes, setVotes] = useState<VoteRecord[]>([])
  const [totalVotes, setTotalVotes] = useState(0)
  const [isLoadingVotes, setIsLoadingVotes] = useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [isExpired, setIsExpired] = useState(false)
  const [lastRefreshedAt, setLastRefreshedAt] = useState<string>('')

  // Prefetch candidate public details on mount
  useEffect(() => {
    async function fetchCandidateInfo() {
      try {
        const cleanId = decodeURIComponent(nominationId).trim()
        const res = await fetch(`${API_BASE}/public/nomination/${encodeURIComponent(cleanId)}`, {
          headers: { Accept: 'application/json' },
        })
        const json = await res.json()
        if (res.ok && json) {
          const c = json.data || json.candidate || json
          if (c && (c.full_name || c.candidate_name || c.name)) {
            setCandidate({
              name: c.full_name || c.candidate_name || c.name,
              role: c.role_name || c.designation || c.role?.name || 'District Executive Director',
              city: c.city || c.scope_name || 'India',
              application_number: c.application_number ? c.application_number.replace(/-2026-/g, '-') : 'PG-SHORTLIST',
              is_voting_open: true,
              photo_url: c.photo_url || c.profile_photo_url || c.photo || null,
            })
          }
        }
      } catch {
        // Fallback or preview
      }
    }
    if (nominationId) {
      fetchCandidateInfo()
    }
  }, [nominationId])

  // Check saved auth token on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem(`ledger_auth_${nominationId}`)
      if (saved) {
        setAuthToken(saved)
      }
    }
  }, [nominationId])

  // Resend cooldown timer
  useEffect(() => {
    if (resendTimer <= 0) return
    const timer = setInterval(() => {
      setResendTimer((prev) => prev - 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [resendTimer])

  // Send OTP
  const handleSendOtp = async (e?: React.FormEvent, isResend = false) => {
    if (e) e.preventDefault()
    if (!candidateEmail.trim()) {
      setGateError('Please enter your registered candidate email address.')
      return
    }
    setGateError(null)
    if (!isResend) {
      setResendNotice(null)
    }
    setIsSendingOtp(true)

    try {
      // 1. Attempt remote backend call
      let res = await fetch(`${API_BASE}/public/nominations/${nominationId}/voter-ledger/send-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ email: candidateEmail.trim().toLowerCase() }),
      })
      let data = await res.json().catch(() => null)

      // 2. If remote returns false/concluded/error, seamlessly fallback to local candidate OTP route
      if (!res.ok || !data?.status || data?.message?.includes('concluded') || data?.message?.includes('closed')) {
        try {
          const fallbackRes = await fetch('/api/leadership/candidate/request-otp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify({ email: candidateEmail.trim().toLowerCase(), identifier: nominationId }),
          })
          const fallbackData = await fallbackRes.json().catch(() => null)
          if (fallbackRes.ok && fallbackData?.success) {
            data = {
              status: true,
              data: { verification_id: 'v_local_' + Date.now() },
            }
            res = { ok: true } as any
          }
        } catch {
          // continue with remote response
        }
      }

      if (res.ok && data?.status) {
        setOtpSent(true)
        setVerificationId(data.data?.verification_id || '')
        setResendTimer(60)
        if (isResend) {
          const nowTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
          setResendNotice(`A fresh 6-digit access code was dispatched to ${candidateEmail} at ${nowTime}.`)
        }
      } else {
        setGateError(data?.message || 'Email mismatch: Does not match this nomination profile.')
      }
    } catch {
      setGateError('Failed to send verification code. Please check your network and try again.')
    } finally {
      setIsSendingOtp(false)
    }
  }

  // Verify OTP
  const handleVerifyOtp = async (codeToVerify?: string) => {
    const code = codeToVerify || otpCode
    if (!code || code.length !== 6) {
      setGateError('Please enter the complete 6-digit access OTP.')
      return
    }
    setGateError(null)
    setIsVerifyingOtp(true)

    try {
      // 1. Attempt remote verify
      let res = await fetch(`${API_BASE}/public/nominations/${nominationId}/voter-ledger/verify-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email: candidateEmail.trim().toLowerCase(),
          otp: code,
          verification_id: verificationId,
        }),
      })
      let data = await res.json().catch(() => null)

      // 2. If remote verification fails or is local challenge, fallback to local verify route
      if (!res.ok || !data?.status) {
        try {
          const fallbackRes = await fetch('/api/leadership/candidate/verify-otp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify({ email: candidateEmail.trim().toLowerCase(), otp: code, identifier: nominationId }),
          })
          const fallbackData = await fallbackRes.json().catch(() => null)
          if (fallbackRes.ok && fallbackData?.success) {
            data = {
              status: true,
              access_token: fallbackData.token || 'ledger_token_' + Date.now(),
            }
            res = { ok: true } as any
          }
        } catch {
          // ignore
        }
      }

      if (res.ok && data?.status) {
        const token = data.access_token || 'ledger_token_' + Date.now()
        setAuthToken(token)
        if (typeof window !== 'undefined') {
          sessionStorage.setItem(`ledger_auth_${nominationId}`, token)
        }
      } else {
        setGateError(data?.message || 'Invalid or expired OTP code. Please try again.')
      }
    } catch {
      setGateError('Verification service error. Please try again.')
    } finally {
      setIsVerifyingOtp(false)
    }
  }

  // Fetch Votes Ledger
  const fetchLedger = useCallback(
    async (isManualRefresh = false) => {
      if (!authToken) return

      if (isManualRefresh) {
        setIsRefreshing(true)
      } else {
        setIsLoadingVotes(true)
      }

      try {
        let res = await fetch(`${API_BASE}/public/nominations/${nominationId}/voter-ledger`, {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${authToken}`,
            'x-candidate-token': authToken,
          },
        })

        let data = await res.json().catch(() => null)

        // Seamless fallback to candidate votes query
        if (!res.ok || !data?.status) {
          try {
            const fallbackRes = await fetch(`/api/leadership/candidate/my-votes?email=${encodeURIComponent(candidateEmail)}`, {
              headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${authToken}`,
              },
            })
            const fallbackData = await fallbackRes.json().catch(() => null)
            if (fallbackRes.ok && fallbackData?.success) {
              data = {
                status: true,
                candidate: {
                  name: fallbackData.candidate?.full_name,
                  role: fallbackData.candidate?.role_title,
                  city: fallbackData.candidate?.city || fallbackData.candidate?.scope_name,
                  application_number: fallbackData.candidate?.application_number ? fallbackData.candidate.application_number.replace(/-2026-/g, '-') : 'PG-SHORTLIST',
                  photo_url: fallbackData.candidate?.photo_url || null,
                  is_voting_open: true,
                },
                total_votes: fallbackData.summary?.total_votes || fallbackData.votes?.length || 0,
                votes: (fallbackData.votes || []).map((v: any, idx: number) => ({
                  index: idx + 1,
                  id: String(v.id || idx),
                  voter_name: v.voter_name || 'Verified Peer',
                  organization: v.voter_company || 'Peers Global Member Enterprise',
                  role: v.voter_designation || 'Member',
                  city: v.voter_city || 'India',
                  support_statement: v.support_reason || 'Verified community endorsement',
                  vote_ref_code: v.vote_reference || `PG-REF-${idx + 100}`,
                  voted_at: v.created_at || 'Recently',
                  contact_masked: v.voter_phone ? v.voter_phone.slice(0, 3) + '••••' + v.voter_phone.slice(-3) : undefined,
                })),
              }
              res = { ok: true } as any
            }
          } catch {
            // ignore
          }
        }

        if (res.ok && data?.status) {
          if (data.candidate) {
            setCandidate((prev) => ({
              ...prev,
              ...data.candidate,
              photo_url: data.candidate.photo_url || data.candidate.profile_photo_url || data.candidate.photo || prev?.photo_url || null,
            }))
          }
          setTotalVotes(data.total_votes || 0)
          setVotes(data.votes || [])
          setLastRefreshedAt(
            new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
          )
        } else if (res.status === 401) {
          setAuthToken(null)
          if (typeof window !== 'undefined') {
            sessionStorage.removeItem(`ledger_auth_${nominationId}`)
          }
          setGateError('Session expired. Please re-verify your OTP to access your ledger.')
        } else if (data?.expired) {
          setIsExpired(true)
        }
      } catch (err) {
        console.error('Error loading voter ledger:', err)
      } finally {
        setIsLoadingVotes(false)
        setIsRefreshing(false)
      }
    },
    [nominationId, authToken]
  )

  useEffect(() => {
    if (authToken) {
      fetchLedger()
    }
  }, [authToken, fetchLedger])

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 py-8 sm:py-12 relative overflow-hidden font-sans">
      {/* Subtle brand ambient accents matching nomination & voting pages */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center text-xs font-semibold text-slate-500">
          <Link
            href="/leadership/nominate"
            className="flex items-center gap-1 hover:text-[#1D4ED8] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Leadership Portal
          </Link>
        </div>

        {/* Candidate Banner Card - Clean & Centered */}
        <div className="bg-white border border-[#DDE3EE] rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col items-center justify-center text-center">
          {candidate?.photo_url ? (
            <img
              src={candidate.photo_url}
              alt={candidate.name || 'Candidate'}
              className="w-16 h-16 rounded-full object-cover shadow-md shadow-blue-500/10 mb-3 border border-slate-200"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1D4ED8] to-[#2563EB] flex items-center justify-center text-white font-extrabold text-2xl shadow-md shadow-blue-500/20 mb-3">
              {candidate?.name ? candidate.name.charAt(0).toUpperCase() : 'C'}
            </div>
          )}
          <div className="flex items-center gap-2.5 flex-wrap justify-center">
            <h1 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight">
              {candidate?.name || decodeURIComponent(nominationId).replace(/[-_]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
            </h1>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E3EAFD] text-[#1E3A8A] border border-blue-200">
              {candidate?.role || 'District Executive Director'}
            </span>
          </div>
        </div>

        {/* Expired Notice */}
        {isExpired ? (
          <div className="max-w-xl mx-auto p-8 rounded-3xl bg-white border border-amber-200 text-center space-y-4 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mx-auto">
              <Clock className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold text-[#0F172A]">Voting Concluded</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Voting for this candidacy has concluded. The private live voter ledger is now closed.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 text-left">
              In accordance with Peers Global governance protocols, live nominee voter ledgers automatically seal when voting concludes. Certified results will be released post-scrutiny.
            </div>
          </div>
        ) : !authToken ? (
          /* =================================================================== */
          /* FLOW 1: CANDIDATE OTP GATE                                          */
          /* =================================================================== */
          <div className="max-w-md mx-auto p-6 sm:p-8 rounded-2xl bg-white border border-[#DDE3EE] shadow-sm space-y-6">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-200 text-[#1D4ED8] flex items-center justify-center mx-auto mb-3 shadow-xs">
                <Lock className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-extrabold text-[#0F172A]">Candidate Voter Ledger Access</h2>
              <p className="text-slate-600 text-xs leading-relaxed">
                To protect candidate confidentiality, please verify your registered nomination email address for candidate{' '}
                <strong className="text-slate-900">{candidate?.name || 'Leader'}</strong>.
              </p>
            </div>

            {gateError && (
              <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2.5">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                <span>{gateError}</span>
              </div>
            )}

            {!otpSent ? (
              <form onSubmit={handleSendOtp} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Registered Candidate Email <span className="text-[#E11D48]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={candidateEmail}
                      onChange={(e) => setCandidateEmail(e.target.value)}
                      placeholder="name@example.com"
                      required
                      className="w-full h-12 px-4 pl-11 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition-all shadow-2xs"
                    />
                    <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-4" />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSendingOtp}
                  className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white font-bold text-sm shadow-md shadow-blue-500/15 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {isSendingOtp ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending OTP...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Access OTP</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="space-y-5">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1">
                  <div className="text-xs text-slate-500">Code dispatched to:</div>
                  <div className="text-sm font-bold text-[#0F172A]">{candidateEmail}</div>
                </div>

                <div className="space-y-2 text-center">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Enter 6-Digit Access Code
                  </label>
                  <OtpSixBoxInput
                    value={otpCode}
                    onChange={setOtpCode}
                    onComplete={(val) => handleVerifyOtp(val)}
                    disabled={isVerifyingOtp}
                    theme="white"
                  />
                  <p className="text-[11px] text-slate-500">
                    Code expires in 10 minutes. Check inbox and spam folders.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleVerifyOtp()}
                  disabled={isVerifyingOtp || otpCode.length !== 6}
                  className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white font-bold text-sm shadow-md shadow-blue-500/15 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isVerifyingOtp ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Verifying Code...</span>
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="w-4 h-4" />
                      <span>Verify &amp; Access Live Ledger</span>
                    </>
                  )}
                </button>

                {resendNotice && (
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{resendNotice}</span>
                  </div>
                )}

                <div className="flex items-center justify-between text-xs text-slate-600 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setOtpSent(false)
                      setOtpCode('')
                      setGateError(null)
                      setResendNotice(null)
                    }}
                    className="hover:text-slate-900 transition-colors flex items-center gap-1 font-semibold"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Change email
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSendOtp(undefined, true)}
                    disabled={resendTimer > 0 || isSendingOtp}
                    className="inline-flex items-center gap-1.5 text-[#1D4ED8] hover:underline font-bold disabled:opacity-50 disabled:no-underline cursor-pointer disabled:cursor-not-allowed"
                  >
                    {isSendingOtp ? (
                      <>
                        <div className="w-3 h-3 border-2 border-[#1D4ED8] border-t-transparent rounded-full animate-spin" />
                        <span>Resending code...</span>
                      </>
                    ) : resendTimer > 0 ? (
                      <span>Resend code in {resendTimer}s</span>
                    ) : (
                      <span>Resend code</span>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* =================================================================== */
          /* FLOW 2: LIVE VOTER LEDGER DASHBOARD                                */
          /* =================================================================== */
          <div className="space-y-6">
            {/* KPI Live Tally & Quick Refresh Bar */}
            <div className="bg-white border border-[#DDE3EE] rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Total Verified Peer Votes
                </div>
                <div className="flex items-baseline gap-3 mt-1">
                  <span className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
                    {totalVotes}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {lastRefreshedAt && (
                  <span className="text-xs text-slate-500 hidden sm:inline">
                    Refreshed at {lastRefreshedAt}
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => fetchLedger(true)}
                  disabled={isRefreshing}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-blue-200 bg-blue-50 text-[#1D4ED8] hover:bg-blue-100 text-xs font-bold transition-all disabled:opacity-50 cursor-pointer shadow-2xs"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
                  <span>Refresh Live Votes</span>
                </button>
              </div>
            </div>

            {/* Live Voter Ledger Table / Responsive Cards */}
            <div className="bg-white border border-[#DDE3EE] rounded-2xl shadow-sm overflow-hidden">
              <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-white">
                <div className="flex items-center gap-2.5">
                  <Users className="w-5 h-5 text-[#1D4ED8]" />
                  <h3 className="text-lg font-bold text-[#0F172A]">Verified Peer Voters Ledger</h3>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                  Real-Time Audit Trail
                </span>
              </div>

              {isLoadingVotes ? (
                <div className="p-12 text-center space-y-3">
                  <div className="w-8 h-8 border-3 border-[#1D4ED8] border-t-transparent rounded-full animate-spin mx-auto" />
                  <p className="text-xs text-slate-500">Fetching live authenticated voter breakdown...</p>
                </div>
              ) : votes.length === 0 ? (
                <div className="p-12 text-center space-y-3">
                  <div className="w-16 h-16 rounded-2xl bg-slate-100 border border-slate-200 text-slate-400 flex items-center justify-center mx-auto">
                    <Users className="w-8 h-8" />
                  </div>
                  <h4 className="text-base font-bold text-[#0F172A]">No Verified Votes Cast Yet</h4>
                  <p className="text-slate-500 text-xs max-w-md mx-auto leading-relaxed">
                    Share your official candidate page with your Circle and network. Each verified peer vote authenticated via OTP will immediately show here.
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-bold uppercase tracking-wider text-slate-600">
                        <th className="py-3.5 px-4 w-12 text-center">#</th>
                        <th className="py-3.5 px-4">Verified Voter Name</th>
                        <th className="py-3.5 px-4">Business / Org &amp; Role</th>
                        <th className="py-3.5 px-4">Chapter / City</th>
                        <th className="py-3.5 px-4">Voted At</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs text-slate-800">
                      {votes.map((v, idx) => (
                        <tr
                          key={v.id || idx}
                          className="hover:bg-slate-50/60 transition-colors"
                        >
                          <td className="py-4 px-4 text-center font-bold text-slate-400">
                            {v.index || idx + 1}
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-200 text-[#1D4ED8] flex items-center justify-center font-bold text-xs shrink-0">
                                {v.voter_name ? v.voter_name.charAt(0).toUpperCase() : 'P'}
                              </div>
                              <div>
                                <div className="font-bold text-slate-900">{v.voter_name}</div>
                                {v.contact_masked && (
                                  <div className="text-[11px] text-slate-500 font-mono">
                                    {v.contact_masked}
                                  </div>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="font-semibold text-slate-900">{v.organization || 'Peers Global Member'}</div>
                            <div className="text-[11px] text-slate-500">{v.role || 'Member'}</div>
                          </td>
                          <td className="py-4 px-4">
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-medium">
                              <MapPin className="w-3 h-3 text-slate-400" />
                              {v.city || 'India'}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-slate-500 text-nowrap">
                            <div className="flex items-center gap-1.5 text-[11px]">
                              <Calendar className="w-3.5 h-3.5 text-slate-400" />
                              <span>{v.voted_at}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
