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
  Building2,
  MapPin,
  ChevronLeft,
  Clock,
  Sparkles,
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

  // Ledger state
  const [votes, setVotes] = useState<VoteRecord[]>([])
  const [totalVotes, setTotalVotes] = useState(0)
  const [isLoadingVotes, setIsLoadingVotes] = useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [isExpired, setIsExpired] = useState(false)
  const [lastRefreshedAt, setLastRefreshedAt] = useState<string>('')

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
  const handleSendOtp = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (!candidateEmail.trim()) {
      setGateError('Please enter your registered candidate email address.')
      return
    }
    setGateError(null)
    setIsSendingOtp(true)

    try {
      const res = await fetch(`${API_BASE}/public/nominations/${nominationId}/voter-ledger/send-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ email: candidateEmail.trim().toLowerCase() }),
      })
      const data = await res.json()

      if (res.ok && data.status) {
        setOtpSent(true)
        setVerificationId(data.data?.verification_id || '')
        setResendTimer(60)
      } else {
        setGateError(data.message || 'Email mismatch: Does not match this approved nomination.')
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
      const res = await fetch(`${API_BASE}/public/nominations/${nominationId}/voter-ledger/verify-otp`, {
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
      const data = await res.json()

      if (res.ok && data.status) {
        const token = data.access_token || 'ledger_token_' + Date.now()
        setAuthToken(token)
        if (typeof window !== 'undefined') {
          sessionStorage.setItem(`ledger_auth_${nominationId}`, token)
        }
      } else {
        setGateError(data.message || 'Invalid or expired OTP code. Please try again.')
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
        const res = await fetch(`${API_BASE}/public/nominations/${nominationId}/voter-ledger`, {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${authToken}`,
            'x-candidate-token': authToken,
          },
        })

        const data = await res.json()

        if (res.ok && data.status) {
          setCandidate(data.candidate || null)
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
        } else if (data.expired) {
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
    <div className="min-h-screen bg-[#050811] text-slate-100 py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      {/* Ambient Radial Glow Accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-8 relative z-10">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
          <Link
            href="/leadership/nominate"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Leadership Portal
          </Link>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="uppercase tracking-widest text-[10px] text-slate-400">
              Candidate Private Access • Strictly Confidential
            </span>
          </div>
        </div>

        {/* Hero Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
            <Lock className="w-3.5 h-3.5 text-amber-400" />
            <span>Private Nominee Access &bull; Unindexed Page</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Candidate Private Voter Ledger
          </h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            Live, verified peer voting breakdown for your official leadership candidacy.
          </p>
        </div>

        {/* Expired Notice */}
        {isExpired ? (
          <div className="max-w-xl mx-auto p-8 rounded-3xl bg-slate-900/80 backdrop-blur-2xl border border-amber-500/30 text-center space-y-4 shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
              <Clock className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold text-white">Voting Concluded</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Voting for this candidacy has concluded. The private live voter ledger is now closed.
            </p>
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-400 text-left">
              In accordance with Peers Global governance protocols, live nominee voter ledgers automatically seal when voting concludes. Certified results will be released post-scrutiny.
            </div>
          </div>
        ) : !authToken ? (
          <div className="max-w-md mx-auto p-8 sm:p-10 rounded-3xl bg-slate-900/80 backdrop-blur-2xl border border-white/10 shadow-2xl space-y-6">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-extrabold text-white">Identity Verification</h2>
              <p className="text-slate-400 text-xs leading-relaxed">
                Enter your registered candidate email address to receive a secure 6-digit access code.
              </p>
            </div>

            {gateError && (
              <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2.5">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{gateError}</span>
              </div>
            )}

            {!otpSent ? (
              <form onSubmit={handleSendOtp} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Registered Candidate Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={candidateEmail}
                      onChange={(e) => setCandidateEmail(e.target.value)}
                      placeholder="name@example.com"
                      required
                      className="w-full h-12 px-4 pl-11 bg-slate-950/80 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-sm transition-all"
                    />
                    <Mail className="w-4 h-4 text-slate-500 absolute left-4 top-4" />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSendingOtp}
                  className="w-full h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all disabled:opacity-60 cursor-pointer"
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
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-center space-y-1">
                  <div className="text-xs text-slate-400">Code dispatched to:</div>
                  <div className="text-sm font-bold text-white">{candidateEmail}</div>
                </div>

                <div className="space-y-2 text-center">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Enter 6-Digit Access Code
                  </label>
                  <OtpSixBoxInput
                    value={otpCode}
                    onChange={setOtpCode}
                    onComplete={(val) => handleVerifyOtp(val)}
                    disabled={isVerifyingOtp}
                  />
                  <p className="text-[11px] text-slate-500">
                    Code expires in 10 minutes. Check inbox and spam folders.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleVerifyOtp()}
                  disabled={isVerifyingOtp || otpCode.length !== 6}
                  className="w-full h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all disabled:opacity-50 cursor-pointer"
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

                <div className="flex items-center justify-between text-xs text-slate-400 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setOtpSent(false)
                      setOtpCode('')
                      setGateError(null)
                    }}
                    className="hover:text-white transition-colors flex items-center gap-1"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Change email
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSendOtp()}
                    disabled={resendTimer > 0 || isSendingOtp}
                    className="text-blue-400 hover:text-blue-300 font-semibold disabled:opacity-40"
                  >
                    {resendTimer > 0 ? `Resend code in ${resendTimer}s` : 'Resend code'}
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-6">
            {/* Header Candidate Dossier Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/75 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-extrabold text-2xl shadow-lg shadow-blue-500/25">
                  {candidate?.name ? candidate.name.charAt(0).toUpperCase() : 'C'}
                </div>
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {candidate?.name || 'Leadership Nominee'}
                    </h2>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/15 border border-blue-400/30 text-blue-400">
                      {candidate?.role || 'District Executive Director'}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                      {candidate?.city || 'Ahmedabad, Gujarat'}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1 flex items-center gap-3">
                    <span>
                      App Ref: <strong className="text-slate-200">{candidate?.application_number || 'PG-2026-00003'}</strong>
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Voting Active &amp; Open
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-500/15 border border-blue-500/30 text-blue-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  100% Verified Peer OTP Votes
                </span>
              </div>
            </div>

            {/* KPI Live Tally & Quick Refresh Bar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-6 rounded-2xl bg-slate-900/75 backdrop-blur-xl border border-white/10 md:col-span-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Total Verified Peer Votes
                  </div>
                  <div className="flex items-baseline gap-3 mt-1">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                      {totalVotes}
                    </span>
                    <span className="text-sm font-semibold text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" /> Authenticated via OTP
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
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 hover:bg-blue-600/30 text-xs font-bold transition-all disabled:opacity-50 cursor-pointer"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
                    <span>Refresh Live Votes</span>
                  </button>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/75 backdrop-blur-xl border border-white/10 flex flex-col justify-center">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Privacy Compliance
                </div>
                <div className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Individual phone numbers &amp; emails are cryptographically masked in accordance with Peer Privacy Standards.
                </div>
              </div>
            </div>

            {/* Live Voter Ledger Table / Responsive Cards */}
            <div className="rounded-2xl bg-slate-900/75 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Users className="w-5 h-5 text-blue-400" />
                  <h3 className="text-lg font-bold text-white">Verified Peer Voters Ledger</h3>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                  Real-Time Audit Trail
                </span>
              </div>

              {isLoadingVotes ? (
                <div className="p-12 text-center space-y-3">
                  <div className="w-8 h-8 border-3 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto" />
                  <p className="text-xs text-slate-400">Fetching live authenticated voter breakdown...</p>
                </div>
              ) : votes.length === 0 ? (
                <div className="p-12 text-center space-y-3">
                  <div className="w-16 h-16 rounded-2xl bg-slate-950/60 border border-slate-800 text-slate-500 flex items-center justify-center mx-auto">
                    <Users className="w-8 h-8" />
                  </div>
                  <h4 className="text-base font-bold text-white">No Verified Votes Cast Yet</h4>
                  <p className="text-slate-400 text-xs max-w-md mx-auto leading-relaxed">
                    Share your official candidate page with your Circle and network. Each verified peer vote authenticated via OTP will immediately show here.
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/5 bg-slate-950/40 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        <th className="py-3.5 px-4 w-12 text-center">#</th>
                        <th className="py-3.5 px-4">Verified Voter Name</th>
                        <th className="py-3.5 px-4">Business / Org &amp; Role</th>
                        <th className="py-3.5 px-4">Chapter / City</th>
                        <th className="py-3.5 px-4">Support Statement</th>
                        <th className="py-3.5 px-4">Vote Ref Code</th>
                        <th className="py-3.5 px-4">Voted At</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-xs text-slate-300">
                      {votes.map((v, idx) => (
                        <tr
                          key={v.id || idx}
                          className="hover:bg-white/[0.02] transition-colors"
                        >
                          <td className="py-4 px-4 text-center font-bold text-slate-500">
                            {v.index || idx + 1}
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs shrink-0">
                                {v.voter_name ? v.voter_name.charAt(0).toUpperCase() : 'P'}
                              </div>
                              <div>
                                <div className="font-bold text-white">{v.voter_name}</div>
                                {v.contact_masked && (
                                  <div className="text-[11px] text-slate-500 font-mono">
                                    {v.contact_masked}
                                  </div>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="font-semibold text-slate-200">{v.organization || 'Peers Global Member'}</div>
                            <div className="text-[11px] text-slate-400">{v.role || 'Member'}</div>
                          </td>
                          <td className="py-4 px-4">
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 text-[11px]">
                              <MapPin className="w-3 h-3 text-slate-400" />
                              {v.city || 'India'}
                            </span>
                          </td>
                          <td className="py-4 px-4 max-w-xs">
                            <div className="p-2 rounded-lg bg-slate-950/60 border-l-2 border-blue-500 text-[11px] text-slate-300 italic">
                              &ldquo;{v.support_statement || 'Verified community support for circle growth'}&rdquo;
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <span className="font-mono text-[11px] px-2 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300">
                              {v.vote_ref_code}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-slate-400 text-nowrap">
                            <div className="flex items-center gap-1.5 text-[11px]">
                              <Calendar className="w-3.5 h-3.5 text-slate-500" />
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
