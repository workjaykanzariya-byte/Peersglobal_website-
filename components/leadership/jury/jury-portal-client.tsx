'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  ShieldCheck,
  Lock,
  Mail,
  Send,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Clock,
  User,
  Building,
  Award,
  ChevronRight,
  X,
  FileText,
  Sliders,
  Check,
  Briefcase,
  Layers,
  MapPin,
  ExternalLink,
  ChevronLeft,
  Users,
  Search,
  Filter,
  Eye,
  LogOut,
  Target,
  Sparkles,
  AlertTriangle,
} from 'lucide-react'
import { OtpSixBoxInput } from '../otp-six-box-input'

const API_BASE = process.env.NEXT_PUBLIC_LEADERSHIP_API_BASE_URL || 'https://peersunity.com/api/v1/leadership'

export interface CandidateDossier {
  id: string
  name: string
  avatar_url?: string
  application_number: string
  role: string
  scope: string
  company: string
  designation: string
  category: string
  contact_masked: string
  form_2_status: 'Submitted' | 'Awaiting Candidate'
  evaluation_status: 'Evaluation Pending' | 'Completed'
  score?: number
  // Form 2 details
  executive_bio?: string
  operational_blueprint?: string
  bench_value?: {
    name: string
    role: string
    relationship: string
    status: string
  }[]
  documents?: {
    title: string
    type: string
    url: string
  }[]
  // Saved evaluation if completed
  saved_evaluation?: {
    governance: number
    execution: number
    engagement: number
    vision: number
    strengths: string
    concerns: string
    conflict_of_interest: boolean
    conflict_disclosure?: string
    submitted_at: string
  }
}

const DEFAULT_CANDIDATES: CandidateDossier[] = [
  {
    id: 'e294394d-a868-49f9-8080-f05987139204',
    name: 'New user',
    avatar_url: '',
    application_number: 'PG-00014',
    role: 'Circle Director',
    scope: 'Ahmedabad, Silver Oak University',
    company: 'Silver Oak University',
    designation: 'ceo',
    category: 'Higher Education & Technology',
    contact_masked: '+91 95•••• ••86 · h•••••••••••@gmail.com',
    form_2_status: 'Awaiting Candidate',
    evaluation_status: 'Evaluation Pending',
    executive_bio: '',
    operational_blueprint: '',
    bench_value: [],
    documents: [],
  },
]

interface JuryPortalClientProps {
  initialView?: 'login' | 'dashboard' | 'auto'
}

export function JuryPortalClient({ initialView = 'auto' }: JuryPortalClientProps) {
  // Juror Session State
  const [authToken, setAuthToken] = useState<string | null>(null)
  const [jurorName, setJurorName] = useState<string>('Distinguished Juror')
  const [jurorEmail, setJurorEmail] = useState<string>('')

  // Login Gate State
  const [loginEmail, setLoginEmail] = useState<string>('')
  const [otpCode, setOtpCode] = useState<string>('')
  const [otpSent, setOtpSent] = useState<boolean>(false)
  const [isSendingOtp, setIsSendingOtp] = useState<boolean>(false)
  const [isVerifyingOtp, setIsVerifyingOtp] = useState<boolean>(false)
  const [resendTimer, setResendTimer] = useState<number>(0)
  const [resendNotice, setResendNotice] = useState<string | null>(null)
  const [gateError, setGateError] = useState<string | null>(null)

  // Dashboard State
  const [candidates, setCandidates] = useState<CandidateDossier[]>(DEFAULT_CANDIDATES)
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [statusFilter, setStatusFilter] = useState<'All' | 'Pending' | 'Completed'>('All')

  // Drawer / Modal State
  const [selectedCandidate, setSelectedCandidate] = useState<CandidateDossier | null>(null)
  const [drawerTab, setDrawerTab] = useState<'profile' | 'form2' | 'scoring'>('profile')

  // Scoring Form State
  const [governanceScore, setGovernanceScore] = useState<number>(8)
  const [executionScore, setExecutionScore] = useState<number>(8)
  const [engagementScore, setEngagementScore] = useState<number>(8)
  const [visionScore, setVisionScore] = useState<number>(8)
  const [strengths, setStrengths] = useState<string>('')
  const [concerns, setConcerns] = useState<string>('')
  const [conflictType, setConflictType] = useState<'none' | 'disclosed'>('none')
  const [conflictDisclosure, setConflictDisclosure] = useState<string>('')
  const [isSubmittingScore, setIsSubmittingScore] = useState<boolean>(false)
  const [scoringError, setScoringError] = useState<string | null>(null)
  const [scoringSuccess, setScoringSuccess] = useState<boolean>(false)

  // Check saved session on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedToken = localStorage.getItem('pg_jury_session_token') || sessionStorage.getItem('pg_jury_session_token')
      const savedEmail = localStorage.getItem('pg_jury_session_email') || sessionStorage.getItem('pg_jury_session_email')
      const savedName = localStorage.getItem('pg_jury_session_name') || sessionStorage.getItem('pg_jury_session_name')

      if (savedToken && initialView !== 'login') {
        setAuthToken(savedToken)
        if (savedEmail) {
          setJurorEmail(savedEmail)
          if (savedEmail.toLowerCase() === 'plan.vishalparmar@gmail.com') {
            setJurorName('Payal Parmar')
          } else if (savedName) {
            setJurorName(savedName)
          }
        }
      }

      // Restore saved local evaluations
      const savedEvals = localStorage.getItem('pg_jury_evaluations')
      if (savedEvals) {
        try {
          const parsed = JSON.parse(savedEvals)
          setCandidates((prev) =>
            prev.map((c) => (parsed[c.id] ? { ...c, ...parsed[c.id] } : c))
          )
        } catch {}
      }
    }
  }, [initialView])

  // Fetch assigned candidates for logged-in juror
  useEffect(() => {
    async function loadJurorCandidates() {
      if (!jurorEmail) return
      try {
        const res = await fetch(`/api/leadership/jury/candidates?email=${encodeURIComponent(jurorEmail)}`, {
          headers: {
            Accept: 'application/json',
            ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
          },
        })
        const data = await res.json().catch(() => null)
        if (res.ok && data?.success) {
          if (data.juror?.name) {
            setJurorName(data.juror.name)
          }
          if (Array.isArray(data.candidates)) {
            const savedEvals = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('pg_jury_evaluations') || '{}') : {}
            setCandidates(data.candidates.map((c: any) => (savedEvals[c.id] ? { ...c, ...savedEvals[c.id] } : c)))
          }
        }
      } catch (err) {
        console.error('Failed to load juror candidates:', err)
      }
    }
    loadJurorCandidates()
  }, [jurorEmail, authToken])

  // Resend cooldown timer
  useEffect(() => {
    if (resendTimer <= 0) return
    const timer = setInterval(() => {
      setResendTimer((prev) => prev - 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [resendTimer])

  // 1. Send OTP
  const handleSendOtp = async (e?: React.FormEvent, isResend = false) => {
    if (e) e.preventDefault()
    const cleanEmail = loginEmail.trim().toLowerCase()
    if (!cleanEmail || !cleanEmail.includes('@')) {
      setGateError('Please enter a valid registered juror email address.')
      return
    }
    setGateError(null)
    if (!isResend) setResendNotice(null)
    setIsSendingOtp(true)

    try {
      // First attempt direct backend call or local proxy
      const res = await fetch('/api/leadership/jury/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email: cleanEmail }),
      })
      const data = await res.json().catch(() => null)

      if (res.ok && data?.success) {
        setOtpSent(true)
        setResendTimer(60)
        if (isResend) {
          const nowTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
          setResendNotice(`A fresh 6-digit access OTP was dispatched to ${cleanEmail} at ${nowTime}.`)
        }
      } else {
        setGateError(data?.message || 'Email verification error. Please ensure you are an accredited jury member.')
      }
    } catch {
      setGateError('Connection error sending OTP. Please check your network.')
    } finally {
      setIsSendingOtp(false)
    }
  }

  // 2. Verify OTP
  const handleVerifyOtp = async (codeToVerify?: string) => {
    const code = codeToVerify || otpCode
    if (!code || code.length !== 6) {
      setGateError('Please enter the complete 6-digit access OTP.')
      return
    }
    setGateError(null)
    setIsVerifyingOtp(true)

    try {
      const cleanEmail = loginEmail.trim().toLowerCase()
      const res = await fetch('/api/leadership/jury/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email: cleanEmail, otp: code }),
      })
      const data = await res.json().catch(() => null)

      if (res.ok && data?.success) {
        const token = data.token || 'jury_session_' + Date.now()
        let name = data.juror?.name
        if (!name && cleanEmail === 'plan.vishalparmar@gmail.com') {
          name = 'Payal Parmar'
        }
        if (!name) {
          name = cleanEmail.split('@')[0].replace(/[._]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
        }

        setAuthToken(token)
        setJurorEmail(cleanEmail)
        setJurorName(name)

        if (typeof window !== 'undefined') {
          localStorage.setItem('pg_jury_session_token', token)
          localStorage.setItem('pg_jury_session_email', cleanEmail)
          localStorage.setItem('pg_jury_session_name', name)
          sessionStorage.setItem('pg_jury_session_token', token)
        }
      } else {
        setGateError(data?.message || 'Invalid or expired 6-digit OTP code.')
      }
    } catch {
      setGateError('Verification service error. Please try again.')
    } finally {
      setIsVerifyingOtp(false)
    }
  }

  // Logout
  const handleLogout = () => {
    setAuthToken(null)
    setOtpSent(false)
    setOtpCode('')
    if (typeof window !== 'undefined') {
      localStorage.removeItem('pg_jury_session_token')
      localStorage.removeItem('pg_jury_session_email')
      sessionStorage.removeItem('pg_jury_session_token')
    }
  }

  // Open Drawer for Candidate
  const handleOpenEvaluate = (candidate: CandidateDossier) => {
    setSelectedCandidate(candidate)
    setScoringError(null)
    setScoringSuccess(false)

    // Attempt to resolve real photo if not already cached
    if (!candidate.avatar_url && candidate.id) {
      fetch(`${API_BASE}/public/nomination/${candidate.id}`, { headers: { Accept: 'application/json' } })
        .then((r) => r.json())
        .then((json) => {
          const c = json?.data || json?.candidate || json
          const p = c?.photo_url || c?.profile_photo_url || c?.photo || c?.avatar
          if (p) {
            setSelectedCandidate((prev) => (prev && prev.id === candidate.id ? { ...prev, avatar_url: p } : prev))
            setCandidates((all) => all.map((item) => (item.id === candidate.id ? { ...item, avatar_url: p } : item)))
          }
        })
        .catch(() => {})
    }

    if (candidate.saved_evaluation) {
      setGovernanceScore(candidate.saved_evaluation.governance)
      setExecutionScore(candidate.saved_evaluation.execution)
      setEngagementScore(candidate.saved_evaluation.engagement)
      setVisionScore(candidate.saved_evaluation.vision)
      setStrengths(candidate.saved_evaluation.strengths)
      setConcerns(candidate.saved_evaluation.concerns)
      setConflictType(candidate.saved_evaluation.conflict_of_interest ? 'disclosed' : 'none')
      setConflictDisclosure(candidate.saved_evaluation.conflict_disclosure || '')
      setDrawerTab('scoring')
    } else {
      setGovernanceScore(8)
      setExecutionScore(8)
      setEngagementScore(8)
      setVisionScore(8)
      setStrengths('')
      setConcerns('')
      setConflictType('none')
      setConflictDisclosure('')
      setDrawerTab('profile')
    }
  }

  // Calculate live weighted/average score
  const computedAverageScore = ((governanceScore + executionScore + engagementScore + visionScore) / 4).toFixed(1)

  // Submit Official Score
  const handleSubmitScore = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedCandidate) return

    if (!strengths.trim()) {
      setScoringError('Please enter the key strengths & merits for this candidate.')
      return
    }
    if (!concerns.trim()) {
      setScoringError('Please enter any key concerns, limitations, or risk considerations.')
      return
    }
    if (conflictType === 'disclosed' && !conflictDisclosure.trim()) {
      setScoringError('Please detail the potential conflict of interest disclosure.')
      return
    }

    setScoringError(null)
    setIsSubmittingScore(true)

    const payload = {
      candidate_id: selectedCandidate.id,
      application_number: selectedCandidate.application_number,
      juror_email: jurorEmail,
      scores: {
        governance_integrity: governanceScore,
        operational_execution: executionScore,
        community_engagement: engagementScore,
        strategic_vision: visionScore,
        overall_average: parseFloat(computedAverageScore),
      },
      key_strengths: strengths.trim(),
      key_concerns: concerns.trim(),
      conflict_of_interest: conflictType === 'disclosed',
      conflict_disclosure: conflictType === 'disclosed' ? conflictDisclosure.trim() : null,
      submitted_at: new Date().toISOString(),
    }

    try {
      const res = await fetch('/api/leadership/jury/submit-score', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
        },
        body: JSON.stringify(payload),
      })
      const data = await res.json().catch(() => null)

      if (res.ok && data?.success) {
        // Update local state
        const updatedCandidate: CandidateDossier = {
          ...selectedCandidate,
          evaluation_status: 'Completed',
          score: parseFloat(computedAverageScore),
          saved_evaluation: {
            governance: governanceScore,
            execution: executionScore,
            engagement: engagementScore,
            vision: visionScore,
            strengths: strengths.trim(),
            concerns: concerns.trim(),
            conflict_of_interest: conflictType === 'disclosed',
            conflict_disclosure: conflictDisclosure.trim(),
            submitted_at: new Date().toISOString(),
          },
        }

        setCandidates((prev) =>
          prev.map((c) => (c.id === selectedCandidate.id ? updatedCandidate : c))
        )
        // Close candidate evaluation drawer immediately
        setSelectedCandidate(null)
        setScoringSuccess(true)

        // Persist to localStorage
        if (typeof window !== 'undefined') {
          const savedEvals = JSON.parse(localStorage.getItem('pg_jury_evaluations') || '{}')
          savedEvals[selectedCandidate.id] = {
            evaluation_status: 'Completed',
            score: parseFloat(computedAverageScore),
            saved_evaluation: updatedCandidate.saved_evaluation,
          }
          localStorage.setItem('pg_jury_evaluations', JSON.stringify(savedEvals))
        }
      } else {
        setScoringError(data?.message || 'Error recording evaluation score. Please retry.')
      }
    } catch {
      setScoringError('Network error submitting score. Please check your connection.')
    } finally {
      setIsSubmittingScore(false)
    }
  }

  // Filter candidates
  const filteredCandidates = candidates.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.application_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.scope.toLowerCase().includes(searchTerm.toLowerCase())

    if (!matchesSearch) return false
    if (statusFilter === 'Pending') return c.evaluation_status === 'Evaluation Pending'
    if (statusFilter === 'Completed') return c.evaluation_status === 'Completed'
    return true
  })

  // Metrics summary
  const totalAssigned = candidates.length
  const completedCount = candidates.filter((c) => c.evaluation_status === 'Completed').length
  const pendingCount = totalAssigned - completedCount

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans py-8 sm:py-12 relative overflow-hidden">
      {/* Brand Ambient Accents matching nomination and voting pages */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
          <Link
            href="/leadership/nominate"
            className="flex items-center gap-1 hover:text-[#1D4ED8] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Leadership Portal
          </Link>

          {authToken && (
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 hover:text-red-600 transition-colors cursor-pointer text-xs font-semibold shadow-2xs"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Log out</span>
            </button>
          )}
        </div>

        {/* =================================================================== */}
        {/* VIEW 1: JUROR AUTHENTICATION SCREEN                                */}
        {/* =================================================================== */}
        {!authToken ? (
          <div className="max-w-md mx-auto py-6 sm:py-10">
            <div className="bg-white border border-[#DDE3EE] rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 text-[#1D4ED8] flex items-center justify-center mx-auto mb-3 shadow-xs">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h1 className="text-2xl font-extrabold text-[#0F172A] tracking-tight">
                  Jury Evaluation Portal
                </h1>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Confidential scoring workspace for accredited Peers Global Selection Jurors &amp; Scrutiny Board.
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
                      Registered Juror Email Address <span className="text-[#E11D48]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        placeholder="juror@example.com"
                        required
                        className="w-full h-12 px-4 pl-11 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition-all shadow-2xs"
                      />
                      <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-4" />
                    </div>
                    <p className="text-[11px] text-slate-500">
                      Please enter the email registered on your official jury appointment.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSendingOtp}
                    className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white font-bold text-sm shadow-md shadow-blue-500/15 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isSendingOtp ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending Access OTP...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send 6-Digit OTP</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="space-y-5">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1">
                    <div className="text-xs text-slate-500">Access OTP dispatched to:</div>
                    <div className="text-sm font-bold text-[#0F172A]">{loginEmail}</div>
                  </div>

                  <div className="space-y-2 text-center">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Enter 6-Digit Verification Code
                    </label>
                    <OtpSixBoxInput
                      value={otpCode}
                      onChange={setOtpCode}
                      onComplete={(val) => handleVerifyOtp(val)}
                      disabled={isVerifyingOtp}
                      theme="white"
                    />
                    <p className="text-[11px] text-slate-500">
                      Code valid for 10 minutes. Please check your inbox and spam folders.
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
                        <span>Verifying Juror Identity...</span>
                      </>
                    ) : (
                      <>
                        <ShieldCheck className="w-4 h-4" />
                        <span>Verify &amp; Enter Jury Workspace</span>
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
          </div>
        ) : (
          /* =================================================================== */
          /* VIEW 2: JUROR DASHBOARD ROSTER                                     */
          /* =================================================================== */
          <div className="space-y-6">
            {/* Juror Welcome Banner */}
            <div className="bg-white border border-[#DDE3EE] rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-1.5">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                  Welcome, {jurorName}
                </h1>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Confidential evaluation workspace for assigned leadership candidates across regional circles.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-left">
                  <div className="text-[11px] font-bold uppercase text-slate-500">Evaluation Docket</div>
                  <div className="text-sm font-extrabold text-emerald-700 flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Active Selection Round</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Metrics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white border border-[#DDE3EE] rounded-2xl p-5 shadow-sm space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Total Assigned Candidates
                </div>
                <div className="text-3xl font-extrabold text-[#0F172A]">{totalAssigned}</div>
                <div className="text-[11px] text-slate-500">Accredited nominee docket</div>
              </div>

              <div className="bg-white border border-[#DDE3EE] rounded-2xl p-5 shadow-sm space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  Completed Evaluations
                </div>
                <div className="text-3xl font-extrabold text-emerald-600">{completedCount}</div>
                <div className="text-[11px] text-emerald-700">Cryptographically recorded</div>
              </div>

              <div className="bg-white border border-[#DDE3EE] rounded-2xl p-5 shadow-sm space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
                  Pending Evaluations
                </div>
                <div className="text-3xl font-extrabold text-amber-600">{pendingCount}</div>
                <div className="text-[11px] text-amber-700">Awaiting your formal scoring</div>
              </div>
            </div>

            {/* Search & Filter Toolbar */}
            <div className="bg-white border border-[#DDE3EE] rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-80">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by candidate name, role, scope..."
                  className="w-full h-10 px-3 pl-9 rounded-xl border border-slate-300 text-xs text-slate-900 bg-white placeholder:text-slate-400 focus:outline-none focus:border-[#1D4ED8]"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-xs font-bold text-slate-600 flex items-center gap-1">
                  <Filter className="w-3.5 h-3.5" /> Filter:
                </span>
                {(['All', 'Pending', 'Completed'] as const).map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setStatusFilter(filter)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      statusFilter === filter
                        ? 'bg-[#1D4ED8] text-white shadow-2xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Candidate Roster Table */}
            <div className="bg-white border border-[#DDE3EE] rounded-3xl shadow-sm overflow-hidden">
              <div className="p-5 border-b border-slate-100 flex items-center justify-between">
                <h3 className="font-extrabold text-lg text-[#0F172A] flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#1D4ED8]" />
                  <span>Assigned Candidate Roster</span>
                </h3>
                <span className="text-xs text-slate-500 font-semibold">
                  Showing {filteredCandidates.length} of {totalAssigned} candidates
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50/70 text-[11px] font-bold uppercase tracking-wider text-slate-600">
                      <th className="py-4 px-5">Candidate</th>
                      <th className="py-4 px-5">Application Number</th>
                      <th className="py-4 px-5">Applied Role &amp; Scope</th>
                      <th className="py-4 px-5">Form 2 Dossier</th>
                      <th className="py-4 px-5">Evaluation Status</th>
                      <th className="py-4 px-5 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs">
                    {filteredCandidates.map((c) => (
                      <tr key={c.id} className="hover:bg-slate-50/60 transition-colors">
                        <td className="py-4 px-5">
                          <div className="flex items-center gap-3">
                            {c.avatar_url ? (
                              <img
                                src={c.avatar_url}
                                alt={c.name}
                                className="w-10 h-10 rounded-xl object-cover border border-slate-200"
                              />
                            ) : (
                              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1D4ED8] to-[#2563EB] text-white font-extrabold flex items-center justify-center text-sm shadow-xs">
                                {c.name.charAt(0)}
                              </div>
                            )}
                            <div>
                              <div className="font-bold text-[#0F172A] text-sm">{c.name}</div>
                              <div className="text-[11px] text-slate-500">
                                {c.designation} • {c.company}
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="py-4 px-5">
                          <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                            {c.application_number}
                          </span>
                        </td>

                        <td className="py-4 px-5">
                          <div className="font-bold text-slate-900">{c.role}</div>
                          <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                            <MapPin className="w-3 h-3 text-slate-400" />
                            <span>{c.scope}</span>
                          </div>
                        </td>

                        <td className="py-4 px-5">
                          {c.form_2_status === 'Submitted' ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#1E3A8A] font-bold text-[11px]">
                              <CheckCircle2 className="w-3 h-3 text-[#1D4ED8]" /> Submitted
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 font-semibold text-[11px]">
                              <Clock className="w-3 h-3 text-slate-400" /> Awaiting Candidate
                            </span>
                          )}
                        </td>

                        <td className="py-4 px-5">
                          {c.evaluation_status === 'Completed' ? (
                            <div className="space-y-0.5">
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-[11px]">
                                <Check className="w-3 h-3 text-emerald-600" /> Completed
                              </span>
                              {c.score && (
                                <div className="text-[11px] text-slate-500 font-semibold pl-1">
                                  Score: <strong className="text-emerald-700">{c.score} / 10</strong>
                                </div>
                              )}
                            </div>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 font-bold text-[11px]">
                              <Clock className="w-3 h-3 text-amber-600" /> Evaluation Pending
                            </span>
                          )}
                        </td>

                        <td className="py-4 px-5 text-right">
                          <button
                            type="button"
                            onClick={() => handleOpenEvaluate(c)}
                            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all shadow-xs cursor-pointer ${
                              c.evaluation_status === 'Completed'
                                ? 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300'
                                : 'bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white shadow-blue-500/15'
                            }`}
                          >
                            <Sliders className="w-3.5 h-3.5" />
                            <span>{c.evaluation_status === 'Completed' ? 'View Evaluation' : 'Evaluate Candidate'}</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* =================================================================== */}
      {/* VIEW 3: EVALUATION & SCORING DRAWER / MODAL                         */}
      {/* =================================================================== */}
      {selectedCandidate && (
        <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity"
            onClick={() => setSelectedCandidate(null)}
          />

          {/* Slide-over Drawer Panel */}
          <div className="relative w-full max-w-3xl bg-white h-full shadow-2xl flex flex-col z-10 overflow-hidden border-l border-[#DDE3EE]">
            {/* Drawer Header */}
            <div className="p-6 border-b border-slate-200 bg-slate-50/50 flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                {selectedCandidate.avatar_url ? (
                  <img
                    src={selectedCandidate.avatar_url}
                    alt={selectedCandidate.name}
                    className="w-14 h-14 rounded-2xl object-cover border border-slate-200"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1D4ED8] to-[#2563EB] text-white font-extrabold flex items-center justify-center text-xl shadow-xs">
                    {selectedCandidate.name.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-extrabold text-[#0F172A] tracking-tight">
                      {selectedCandidate.name}
                    </h2>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E3EAFD] text-[#1E3A8A] border border-blue-200">
                      {selectedCandidate.role}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5 flex items-center gap-2">
                    <span>{selectedCandidate.scope}</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCandidate(null)}
                className="p-2 rounded-full hover:bg-slate-200 text-slate-400 hover:text-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* 3 Clean Tabs Bar */}
            <div className="flex items-center border-b border-slate-200 px-6 bg-white gap-2">
              <button
                type="button"
                onClick={() => setDrawerTab('profile')}
                className={`py-3.5 px-4 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 ${
                  drawerTab === 'profile'
                    ? 'border-[#1D4ED8] text-[#1D4ED8]'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <User className="w-4 h-4" />
                <span>1. Candidate Profile</span>
              </button>

              <button
                type="button"
                onClick={() => setDrawerTab('form2')}
                className={`py-3.5 px-4 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 ${
                  drawerTab === 'form2'
                    ? 'border-[#1D4ED8] text-[#1D4ED8]'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>2. Form 2 Dossier</span>
                {selectedCandidate.form_2_status === 'Submitted' && (
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                )}
              </button>

              <button
                type="button"
                onClick={() => setDrawerTab('scoring')}
                className={`py-3.5 px-4 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 ${
                  drawerTab === 'scoring'
                    ? 'border-[#1D4ED8] text-[#1D4ED8]'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Sliders className="w-4 h-4" />
                <span>3. Scoring &amp; Recommendation</span>
                {selectedCandidate.evaluation_status === 'Completed' && (
                  <span className="px-1.5 py-0.2 rounded text-[10px] bg-emerald-100 text-emerald-800">
                    Scored
                  </span>
                )}
              </button>
            </div>

            {/* Drawer Body Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* ---------------- TAB 1: CANDIDATE PROFILE ---------------- */}
              {drawerTab === 'profile' && (
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                      <div className="text-[11px] font-bold uppercase text-slate-500">Candidate Name</div>
                      <div className="text-sm font-bold text-[#0F172A]">{selectedCandidate.name}</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                      <div className="text-[11px] font-bold uppercase text-slate-500">Application Number</div>
                      <div className="text-sm font-mono font-bold text-[#1D4ED8]">
                        {selectedCandidate.application_number}
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                      <div className="text-[11px] font-bold uppercase text-slate-500">Applied Role</div>
                      <div className="text-sm font-bold text-[#0F172A]">{selectedCandidate.role}</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                      <div className="text-[11px] font-bold uppercase text-slate-500">Circle / Scope</div>
                      <div className="text-sm font-bold text-[#0F172A]">{selectedCandidate.scope}</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                      <div className="text-[11px] font-bold uppercase text-slate-500">Company Name</div>
                      <div className="text-sm font-bold text-[#0F172A]">{selectedCandidate.company}</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                      <div className="text-[11px] font-bold uppercase text-slate-500">Executive Designation</div>
                      <div className="text-sm font-bold text-[#0F172A]">{selectedCandidate.designation}</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                      <div className="text-[11px] font-bold uppercase text-slate-500">Business Category</div>
                      <div className="text-sm font-bold text-[#0F172A]">{selectedCandidate.category}</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                      <div className="text-[11px] font-bold uppercase text-slate-500">Contact Information (Masked)</div>
                      <div className="text-sm font-mono text-slate-700">{selectedCandidate.contact_masked}</div>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200 text-xs text-slate-700 space-y-1.5">
                    <div className="font-bold text-[#1E3A8A]">Leadership Nomination Integrity Check</div>
                    <p>
                      Candidate is in good standing with zero ethics violations reported. Peer verification completed during voter endorsement window.
                    </p>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setDrawerTab('form2')}
                      className="px-6 py-2.5 rounded-full bg-[#1D4ED8] hover:bg-blue-700 text-white font-bold text-xs shadow-xs inline-flex items-center gap-1.5"
                    >
                      <span>Proceed to Form 2 Dossier</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* ---------------- TAB 2: FORM 2 DOSSIER ---------------- */}
              {drawerTab === 'form2' && (
                <div className="space-y-6">
                  {selectedCandidate.form_2_status !== 'Submitted' ? (
                    <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3">
                      <Clock className="w-10 h-10 text-slate-400 mx-auto" />
                      <h4 className="font-bold text-base text-[#0F172A]">Awaiting Form 2 Dossier</h4>
                      <p className="text-xs text-slate-500 max-w-md mx-auto">
                        This candidate has not yet submitted their official Form 2 Operational Dossier. Jurors may still evaluate based on Form 1 profile and executive credentials.
                      </p>
                    </div>
                  ) : (
                    <>
                      {/* Section 1: Executive Bio */}
                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                          Executive Bio &amp; Proven Track Record
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-line">
                          {selectedCandidate.executive_bio}
                        </p>
                      </div>

                      {/* Section 2: 12-Month Operational Blueprint */}
                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                          12-Month Operational Blueprint &amp; Goals
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-line">
                          {selectedCandidate.operational_blueprint}
                        </p>
                      </div>

                      {/* Section 3: Strategic Bench Value */}
                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                            Strategic Bench Value (&ldquo;Who will you bring?&rdquo;)
                          </h4>
                          <span className="text-[11px] font-semibold text-slate-500">
                            {selectedCandidate.bench_value?.length || 0} Leaders Named
                          </span>
                        </div>

                        <div className="divide-y divide-slate-200 bg-white rounded-xl border border-slate-200/80 overflow-hidden text-xs">
                          {selectedCandidate.bench_value && selectedCandidate.bench_value.length > 0 ? (
                            selectedCandidate.bench_value.map((member, idx) => (
                              <div key={idx} className="p-3 flex items-center justify-between gap-3">
                                <div>
                                  <div className="font-bold text-slate-900">{member.name}</div>
                                  <div className="text-[11px] text-slate-500">
                                    {member.role} • {member.relationship}
                                  </div>
                                </div>
                                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                                  {member.status}
                                </span>
                              </div>
                            ))
                          ) : (
                            <div className="p-4 text-center text-slate-400 text-xs">No bench members listed.</div>
                          )}
                        </div>
                      </div>

                      {/* Section 4: Supporting Documents */}
                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                          Document &amp; Presentation Uploads
                        </h4>
                        <div className="space-y-2">
                          {selectedCandidate.documents && selectedCandidate.documents.length > 0 ? (
                            selectedCandidate.documents.map((doc, idx) => (
                              <div
                                key={idx}
                                className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between"
                              >
                                <div className="flex items-center gap-2.5">
                                  <FileText className="w-4 h-4 text-[#1D4ED8]" />
                                  <div>
                                    <div className="font-bold text-xs text-slate-900">{doc.title}</div>
                                    <div className="text-[10px] text-slate-500">{doc.type}</div>
                                  </div>
                                </div>
                                <span className="text-xs font-bold text-[#1D4ED8] hover:underline cursor-pointer flex items-center gap-1">
                                  View Document <ExternalLink className="w-3 h-3" />
                                </span>
                              </div>
                            ))
                          ) : (
                            <div className="text-xs text-slate-400">No external documents attached.</div>
                          )}
                        </div>
                      </div>
                    </>
                  )}

                  <div className="pt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setDrawerTab('scoring')}
                      className="px-6 py-2.5 rounded-full bg-[#1D4ED8] hover:bg-blue-700 text-white font-bold text-xs shadow-xs inline-flex items-center gap-1.5"
                    >
                      <span>Proceed to Scoring &amp; Recommendation</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* ---------------- TAB 3: SCORING & RECOMMENDATION ---------------- */}
              {drawerTab === 'scoring' && (
                <form onSubmit={handleSubmitScore} className="space-y-6">
                  {scoringSuccess && (
                    <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <div>
                        <strong>Official Score Successfully Recorded!</strong> Candidate evaluation has been sealed and saved to the Jury Board docket.
                      </div>
                    </div>
                  )}

                  {scoringError && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2.5">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                      <span>{scoringError}</span>
                    </div>
                  )}

                  {/* Quantitative Criteria Sliders */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <div>
                        <h4 className="text-sm font-extrabold text-[#0F172A]">
                          Quantitative Evaluation Criteria (1–10)
                        </h4>
                        <p className="text-[11px] text-slate-500">
                          Rate candidate capability across core leadership competencies.
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-[11px] font-bold uppercase text-slate-500 block">Overall Score</span>
                        <span className="text-xl font-extrabold text-[#1D4ED8]">{computedAverageScore} / 10.0</span>
                      </div>
                    </div>

                    {/* Criterion 1: Governance & Integrity */}
                    <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-900 block">
                          1. Governance &amp; Integrity
                        </label>
                        <p className="text-[11px] text-slate-500 leading-relaxed max-w-lg">
                          Adherence to ethical peer standards, non-commercial community governance, and conflict-free stewardship.
                        </p>
                      </div>
                      <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                        <label className="text-xs font-semibold text-slate-500">Score:</label>
                        <input
                          type="number"
                          min="1"
                          max="10"
                          step="1"
                          value={governanceScore}
                          onChange={(e) => {
                            const val = parseInt(e.target.value) || 0
                            setGovernanceScore(Math.max(1, Math.min(10, val)))
                          }}
                          className="w-16 h-10 text-center font-extrabold text-base text-[#1D4ED8] bg-slate-50 border-2 border-slate-300 rounded-xl focus:border-[#1D4ED8] focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                        />
                        <span className="text-xs font-bold text-slate-400">/ 10</span>
                      </div>
                    </div>

                    {/* Criterion 2: Operational Execution */}
                    <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-900 block">
                          2. Operational Execution
                        </label>
                        <p className="text-[11px] text-slate-500 leading-relaxed max-w-lg">
                          Capability to deliver against targets, launch Circles, mobilize teams, and manage regional operations.
                        </p>
                      </div>
                      <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                        <label className="text-xs font-semibold text-slate-500">Score:</label>
                        <input
                          type="number"
                          min="1"
                          max="10"
                          step="1"
                          value={executionScore}
                          onChange={(e) => {
                            const val = parseInt(e.target.value) || 0
                            setExecutionScore(Math.max(1, Math.min(10, val)))
                          }}
                          className="w-16 h-10 text-center font-extrabold text-base text-[#1D4ED8] bg-slate-50 border-2 border-slate-300 rounded-xl focus:border-[#1D4ED8] focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                        />
                        <span className="text-xs font-bold text-slate-400">/ 10</span>
                      </div>
                    </div>

                    {/* Criterion 3: Community Engagement */}
                    <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-900 block">
                          3. Community Engagement
                        </label>
                        <p className="text-[11px] text-slate-500 leading-relaxed max-w-lg">
                          Relational standing, peer trust, collaborative give-first orientation, and ability to cultivate member loyalty.
                        </p>
                      </div>
                      <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                        <label className="text-xs font-semibold text-slate-500">Score:</label>
                        <input
                          type="number"
                          min="1"
                          max="10"
                          step="1"
                          value={engagementScore}
                          onChange={(e) => {
                            const val = parseInt(e.target.value) || 0
                            setEngagementScore(Math.max(1, Math.min(10, val)))
                          }}
                          className="w-16 h-10 text-center font-extrabold text-base text-[#1D4ED8] bg-slate-50 border-2 border-slate-300 rounded-xl focus:border-[#1D4ED8] focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                        />
                        <span className="text-xs font-bold text-slate-400">/ 10</span>
                      </div>
                    </div>

                    {/* Criterion 4: Strategic Vision */}
                    <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-900 block">
                          4. Strategic Vision
                        </label>
                        <p className="text-[11px] text-slate-500 leading-relaxed max-w-lg">
                          Strategic clarity, depth of bench leaders brought, and long-term ecosystem expansion roadmap.
                        </p>
                      </div>
                      <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                        <label className="text-xs font-semibold text-slate-500">Score:</label>
                        <input
                          type="number"
                          min="1"
                          max="10"
                          step="1"
                          value={visionScore}
                          onChange={(e) => {
                            const val = parseInt(e.target.value) || 0
                            setVisionScore(Math.max(1, Math.min(10, val)))
                          }}
                          className="w-16 h-10 text-center font-extrabold text-base text-[#1D4ED8] bg-slate-50 border-2 border-slate-300 rounded-xl focus:border-[#1D4ED8] focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                        />
                        <span className="text-xs font-bold text-slate-400">/ 10</span>
                      </div>
                    </div>
                  </div>

                  {/* Qualitative Feedback */}
                  <div className="space-y-4 pt-2">
                    <h4 className="text-sm font-extrabold text-[#0F172A] pb-1 border-b border-slate-100">
                      Qualitative Observations &amp; Rationale
                    </h4>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Key Strengths &amp; Merits <span className="text-[#E11D48]">*</span>
                      </label>
                      <textarea
                        rows={3}
                        value={strengths}
                        onChange={(e) => setStrengths(e.target.value)}
                        placeholder="Detail the candidate’s standout capabilities, proven leadership achievements, or strategic assets..."
                        required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition-all shadow-2xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Key Concerns or Limitations <span className="text-[#E11D48]">*</span>
                      </label>
                      <textarea
                        rows={3}
                        value={concerns}
                        onChange={(e) => setConcerns(e.target.value)}
                        placeholder="Highlight any execution bottlenecks, availability constraints, or areas requiring oversight..."
                        required
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition-all shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Conflict of Interest Check */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                      Conflict of Interest Check <span className="text-[#E11D48]">*</span>
                    </h4>

                    <div className="space-y-2">
                      <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-700">
                        <input
                          type="radio"
                          name="conflict_check"
                          checked={conflictType === 'none'}
                          onChange={() => setConflictType('none')}
                          className="mt-0.5 text-[#1D4ED8] focus:ring-[#1D4ED8]"
                        />
                        <span>
                          <strong>I confirm that I have no personal, business, or competitive conflict of interest</strong> with this candidate.
                        </span>
                      </label>

                      <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-700">
                        <input
                          type="radio"
                          name="conflict_check"
                          checked={conflictType === 'disclosed'}
                          onChange={() => setConflictType('disclosed')}
                          className="mt-0.5 text-[#1D4ED8] focus:ring-[#1D4ED8]"
                        />
                        <span>
                          <strong>I disclose a potential conflict of interest</strong> with this candidate (e.g. direct competitor, family relation, commercial partnership).
                        </span>
                      </label>
                    </div>

                    {conflictType === 'disclosed' && (
                      <div className="space-y-1.5 pt-2">
                        <label className="block text-[11px] font-bold uppercase text-amber-800">
                          Conflict Disclosure Note <span className="text-[#E11D48]">*</span>
                        </label>
                        <textarea
                          rows={2}
                          value={conflictDisclosure}
                          onChange={(e) => setConflictDisclosure(e.target.value)}
                          placeholder="Describe the nature of the relationship or conflict for the Governance Council review..."
                          required
                          className="w-full px-3 py-2 rounded-lg border border-amber-300 bg-white text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-[#1D4ED8]"
                        />
                      </div>
                    )}
                  </div>

                  {/* Submit Official Score Button */}
                  <button
                    type="submit"
                    disabled={isSubmittingScore}
                    className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white font-bold text-sm shadow-md shadow-blue-500/15 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isSubmittingScore ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <span>Submit</span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
