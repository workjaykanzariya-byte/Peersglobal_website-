'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  Mail,
  Send,
  ArrowRight,
  RotateCcw,
  UploadCloud,
  FileText,
  Trash2,
  Plus,
  AlertCircle,
  Building2,
  Calendar,
  Sparkles,
  ChevronLeft,
  Check,
  Award,
} from 'lucide-react'
import { OtpSixBoxInput } from './otp-six-box-input'

const API_BASE = 'https://peersunity.com/api/v1/leadership'

interface BenchLeader {
  name: string
  mobile: string
  city: string
  industry: string
  relationship: string
  status: string
  proposed_role: string
  timeline: string
}

interface Form2ClientProps {
  nominationId: string
}

export function Form2Client({ nominationId }: Form2ClientProps) {
  // Candidate meta state
  const [candidate, setCandidate] = useState<{
    candidate_name: string
    role_name: string
    campaign_name: string
    application_number: string
    masked_email: string
    is_submitted: boolean
    status: string
    city?: string
  } | null>(null)
  const [isLoadingMeta, setIsLoadingMeta] = useState(true)

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

  // Form Dossier state
  const [businessType, setBusinessType] = useState('')
  const [yearFounded, setYearFounded] = useState('')
  const [turnoverBand, setTurnoverBand] = useState('')
  const [teamSize, setTeamSize] = useState('')
  const [achievement1, setAchievement1] = useState('')
  const [achievement2, setAchievement2] = useState('')
  const [achievement3, setAchievement3] = useState('')
  const [caseStudy, setCaseStudy] = useState('')
  const [visionStatement, setVisionStatement] = useState('')
  const [roadmap, setRoadmap] = useState('')
  const [initiatives, setInitiatives] = useState('')

  // Bench leaders repeater
  const [benchLeaders, setBenchLeaders] = useState<BenchLeader[]>([
    {
      name: '',
      mobile: '',
      city: '',
      industry: '',
      relationship: '',
      status: 'Committed',
      proposed_role: '',
      timeline: '30 days',
    },
  ])

  // Attachments
  const [businessProofUrl, setBusinessProofUrl] = useState('')
  const [identityProofUrl, setIdentityProofUrl] = useState('')
  const [deckUrl, setDeckUrl] = useState('')
  const [isUploading, setIsUploading] = useState<string | null>(null)

  // Submission state
  const [declarationAgreed, setDeclarationAgreed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [isSubmittedSuccess, setIsSubmittedSuccess] = useState(false)
  const [submissionReference, setSubmissionReference] = useState('')

  // 1. Fetch initial candidate & nomination details
  useEffect(() => {
    async function fetchCandidateDetails() {
      setIsLoadingMeta(true)
      try {
        const res = await fetch(`${API_BASE}/public/nominations/${nominationId}/form-2`, {
          headers: { Accept: 'application/json' },
        })
        const data = await res.json()
        if (res.ok && data.success && data.data) {
          setCandidate(data.data)
          if (data.data.is_submitted) {
            setIsSubmittedSuccess(true)
          }
        }
      } catch (err) {
        console.error('Error loading nomination details:', err)
      } finally {
        setIsLoadingMeta(false)
      }
    }

    if (nominationId) {
      fetchCandidateDetails()
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

  // Check saved token in sessionStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem(`f2_auth_${nominationId}`)
      if (saved) {
        setAuthToken(saved)
      }
    }
  }, [nominationId])

  // Send OTP handler
  const handleSendOtp = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (!candidateEmail.trim()) {
      setGateError('Please enter your registered candidate email address.')
      return
    }
    setGateError(null)
    setIsSendingOtp(true)

    try {
      const res = await fetch(`${API_BASE}/public/nominations/${nominationId}/form-2/request-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ email: candidateEmail.trim().toLowerCase() }),
      })
      const data = await res.json()

      if (res.ok && data.success) {
        setOtpSent(true)
        setVerificationId(data.data?.verification_id || '')
        setResendTimer(60)
      } else {
        setGateError(data.message || 'Email mismatch: Does not match this nomination application.')
      }
    } catch {
      setGateError('Failed to send verification code. Please check your network and try again.')
    } finally {
      setIsSendingOtp(false)
    }
  }

  // Verify OTP handler
  const handleVerifyOtp = async (codeToVerify?: string) => {
    const code = codeToVerify || otpCode
    if (!code || code.length !== 6) {
      setGateError('Please enter the complete 6-digit verification code.')
      return
    }
    setGateError(null)
    setIsVerifyingOtp(true)

    try {
      const res = await fetch(`${API_BASE}/public/nominations/${nominationId}/form-2/verify-otp`, {
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

      if (res.ok && data.success) {
        const token = data.data?.token || 'f2_verified_' + Date.now()
        setAuthToken(token)
        if (typeof window !== 'undefined') {
          sessionStorage.setItem(`f2_auth_${nominationId}`, token)
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

  // File upload handler
  const handleFileUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'business' | 'identity' | 'deck'
  ) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsUploading(type)
    setSubmitError(null)

    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('type', type)

      const res = await fetch(`${API_BASE}/public/nominations/${nominationId}/form-2/upload`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
        },
        body: formData,
      })

      const data = await res.json()
      if (res.ok && data.success && data.url) {
        if (type === 'business') setBusinessProofUrl(data.url)
        if (type === 'identity') setIdentityProofUrl(data.url)
        if (type === 'deck') setDeckUrl(data.url)
      } else {
        setSubmitError(data.message || 'File upload failed. Please try a valid PDF or document.')
      }
    } catch {
      setSubmitError('Network error uploading file. Please retry.')
    } finally {
      setIsUploading(null)
    }
  }

  // Bench leaders repeater helpers
  const handleAddBenchLeader = () => {
    setBenchLeaders([
      ...benchLeaders,
      {
        name: '',
        mobile: '',
        city: '',
        industry: '',
        relationship: '',
        status: 'Committed',
        proposed_role: '',
        timeline: '30 days',
      },
    ])
  }

  const handleRemoveBenchLeader = (index: number) => {
    if (benchLeaders.length <= 1) return
    setBenchLeaders(benchLeaders.filter((_, i) => i !== index))
  }

  const handleBenchLeaderChange = (index: number, field: keyof BenchLeader, val: string) => {
    const updated = [...benchLeaders]
    updated[index][field] = val
    setBenchLeaders(updated)
  }

  // Submit full Form 2
  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!declarationAgreed) {
      setSubmitError('Please review and check the declaration checkbox to confirm your submission.')
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

    const payload = {
      email: candidateEmail || candidate?.masked_email || '',
      business_type: businessType,
      year_founded: yearFounded,
      turnover_band: turnoverBand,
      team_size: teamSize,
      achievement_1: achievement1,
      achievement_2: achievement2,
      achievement_3: achievement3,
      case_study: caseStudy,
      vision_statement: visionStatement,
      roadmap: roadmap,
      initiatives: initiatives,
      bench: benchLeaders,
      business_proof_url: businessProofUrl,
      identity_proof_url: identityProofUrl,
      deck_url: deckUrl,
    }

    try {
      const res = await fetch(`${API_BASE}/public/nominations/${nominationId}/form-2/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          ...(authToken
            ? {
                Authorization: `Bearer ${authToken}`,
                'x-candidate-token': authToken,
              }
            : {}),
        },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setIsSubmittedSuccess(true)
        setSubmissionReference(data.data?.application_number || 'PG-2026-F2-CONFIRMED')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        setSubmitError(data.message || 'Error submitting Form 2. Please verify your fields.')
      }
    } catch {
      setSubmitError('Server connection error. Please try submitting again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      {/* Ambient Radial Glow Accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
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
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="uppercase tracking-widest text-[10px] text-slate-400">
              Jury Evaluation System
            </span>
          </div>
        </div>

        {/* Candidate Banner Card */}
        <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/75 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-extrabold text-2xl shadow-lg shadow-blue-500/25">
              {candidate?.candidate_name ? candidate.candidate_name.charAt(0).toUpperCase() : 'C'}
            </div>
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {candidate?.candidate_name || 'Leadership Candidate'}
                </h1>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/15 border border-blue-400/30 text-blue-400">
                  {candidate?.role_name || 'District Executive Director'}
                </span>
              </div>
              <div className="text-xs text-slate-400 mt-1 flex items-center gap-3">
                <span>
                  App Ref: <strong className="text-slate-200">{candidate?.application_number || 'PG-2026-SHORTLIST'}</strong>
                </span>
                <span>•</span>
                <span>{candidate?.campaign_name || 'National Leadership Selection 2026'}</span>
              </div>
            </div>
          </div>

          <div>
            {isSubmittedSuccess || candidate?.is_submitted ? (
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Evaluation Dossier Submitted
              </span>
            ) : (
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold bg-amber-500/15 border border-amber-500/30 text-amber-400 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                Jury Evaluation Pending
              </span>
            )}
          </div>
        </div>

        {/* =================================================================== */}
        {/* SUBMISSION SUCCESS SCREEN                                           */}
        {/* =================================================================== */}
        {isSubmittedSuccess ? (
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/80 backdrop-blur-2xl border border-emerald-500/20 text-center space-y-6 shadow-2xl">
            <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
              <Check className="w-10 h-10 stroke-[2.5]" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Jury Evaluation Dossier Successfully Submitted!
              </h2>
              <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-200">{candidate?.candidate_name}</strong>. Your operational metrics, strategic vision, and leadership bench details have been securely recorded in the official Jury Evaluation Dossier and forwarded to the Scrutiny Committee &amp; Jury Board.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-semibold">
              <ShieldCheck className="w-4 h-4" /> Status: Under Scrutiny &amp; Jury Review
            </div>

            <div className="pt-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 hover:opacity-95 transition-all"
              >
                Return to Peers Global Homepage
              </Link>
            </div>
          </div>
        ) : !authToken ? (
          <div className="max-w-xl mx-auto p-8 sm:p-10 rounded-3xl bg-slate-900/80 backdrop-blur-2xl border border-white/10 shadow-2xl space-y-6">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-extrabold text-white">Identity &amp; OTP Verification</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                To protect candidate confidentiality, please verify your registered nomination email address for candidate{' '}
                <strong className="text-slate-200">{candidate?.candidate_name || 'Leader'}</strong>.
              </p>
            </div>

            {gateError && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2.5">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{gateError}</span>
              </div>
            )}

            {!otpSent ? (
              <form onSubmit={handleSendOtp} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Registered Candidate Email Address
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
                  <p className="text-[11px] text-slate-500">
                    Must match the email address provided in your initial candidate nomination.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSendingOtp}
                  className="w-full h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all disabled:opacity-60 cursor-pointer"
                >
                  {isSendingOtp ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending 6-Digit OTP...</span>
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
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-center space-y-1">
                  <div className="text-xs text-slate-400">Verification code sent to:</div>
                  <div className="text-sm font-bold text-white">{candidateEmail}</div>
                </div>

                <div className="space-y-2 text-center">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Enter 6-Digit Verification Code
                  </label>
                  <OtpSixBoxInput
                    value={otpCode}
                    onChange={setOtpCode}
                    onComplete={(val) => handleVerifyOtp(val)}
                    disabled={isVerifyingOtp}
                  />
                  <p className="text-[11px] text-slate-500">
                    Check your inbox or spam folder for your 6-digit access code.
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
                      <span>Verifying OTP...</span>
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="w-4 h-4" />
                      <span>Verify OTP &amp; Unlock Evaluation Dossier</span>
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
          <form onSubmit={handleSubmitForm} className="space-y-8">
            {submitError && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-3">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>{submitError}</span>
              </div>
            )}

            {/* SECTION 1: LEADERSHIP & STRATEGIC VISION */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/75 backdrop-blur-xl border border-white/10 space-y-6 shadow-xl">
              <div className="border-b border-white/10 pb-4">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-400">Section 1</div>
                <h3 className="text-xl font-bold text-white mt-1">Leadership &amp; Strategic Vision</h3>
                <p className="text-slate-400 text-xs mt-0.5">
                  Articulate your governance philosophy, ecosystem impact, and 1-year roadmap for Peers Global.
                </p>
              </div>

              <div className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Executive Leadership Philosophy &amp; Vision Statement <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={visionStatement}
                    onChange={(e) => setVisionStatement(e.target.value)}
                    placeholder="Describe how you will cultivate trust, collaboration, and high-impact peer networks in your target role..."
                    required
                    className="w-full p-4 bg-slate-950/80 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    1-Year Operational Roadmap &amp; Regional Objectives <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={roadmap}
                    onChange={(e) => setRoadmap(e.target.value)}
                    placeholder="Outline your milestones for Q1 through Q4: Circle launches, member onboarding targets, and flagship summits..."
                    required
                    className="w-full p-4 bg-slate-950/80 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Proposed Ecosystem Initiatives &amp; Industry Collaboration
                  </label>
                  <textarea
                    rows={3}
                    value={initiatives}
                    onChange={(e) => setInitiatives(e.target.value)}
                    placeholder="Key strategic partnerships, enterprise collaborations, or cross-chapter initiatives you plan to execute..."
                    className="w-full p-4 bg-slate-950/80 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* SECTION 2: EXECUTION RIGOR & CASE STUDY */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/75 backdrop-blur-xl border border-white/10 space-y-6 shadow-xl">
              <div className="border-b border-white/10 pb-4">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-400">Section 2</div>
                <h3 className="text-xl font-bold text-white mt-1">Execution Rigor &amp; Track Record</h3>
                <p className="text-slate-400 text-xs mt-0.5">
                  Demonstrate enterprise stability, team leadership capacity, and tangible past outcomes.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Business / Entity Structure <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    placeholder="e.g. Private Limited, LLP, Partnership"
                    required
                    className="w-full h-12 px-4 bg-slate-950/80 border border-slate-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Year Founded <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="number"
                    value={yearFounded}
                    onChange={(e) => setYearFounded(e.target.value)}
                    placeholder="e.g. 2018"
                    min="1950"
                    max="2026"
                    required
                    className="w-full h-12 px-4 bg-slate-950/80 border border-slate-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Annual Turnover Band <span className="text-red-400">*</span>
                  </label>
                  <select
                    value={turnoverBand}
                    onChange={(e) => setTurnoverBand(e.target.value)}
                    required
                    className="w-full h-12 px-4 bg-slate-950/80 border border-slate-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all cursor-pointer"
                  >
                    <option value="">-- Select Turnover Band --</option>
                    <option value="Under ₹50 Lakhs">Under ₹50 Lakhs</option>
                    <option value="₹50 Lakhs - ₹1 Crore">₹50 Lakhs - ₹1 Crore</option>
                    <option value="₹1 Crore - ₹5 Crores">₹1 Crore - ₹5 Crores</option>
                    <option value="₹5 Crores - ₹25 Crores">₹5 Crores - ₹25 Crores</option>
                    <option value="₹25 Crores+">₹25 Crores+</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Team Size (Full-Time) <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                    placeholder="e.g. 24 full-time professionals"
                    required
                    className="w-full h-12 px-4 bg-slate-950/80 border border-slate-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-3 pt-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Top 3 Major Business &amp; Community Milestones <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={achievement1}
                  onChange={(e) => setAchievement1(e.target.value)}
                  placeholder="1. Landmark client/ecosystem milestone..."
                  required
                  className="w-full h-12 px-4 bg-slate-950/80 border border-slate-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
                <input
                  type="text"
                  value={achievement2}
                  onChange={(e) => setAchievement2(e.target.value)}
                  placeholder="2. Expansion, market penetration, or revenue scale..."
                  required
                  className="w-full h-12 px-4 bg-slate-950/80 border border-slate-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
                <input
                  type="text"
                  value={achievement3}
                  onChange={(e) => setAchievement3(e.target.value)}
                  placeholder="3. Industry recognition, patent, or community leadership role..."
                  required
                  className="w-full h-12 px-4 bg-slate-950/80 border border-slate-700/80 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>

              {/* Case Study */}
              <div className="space-y-1.5 pt-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Flagship Case Study / Problem Solved <span className="text-red-400">*</span>
                </label>
                <textarea
                  rows={4}
                  value={caseStudy}
                  onChange={(e) => setCaseStudy(e.target.value)}
                  placeholder="Detail a complex initiative you spearheaded: the initial friction, strategic intervention, and measurable outcome..."
                  required
                  className="w-full p-4 bg-slate-950/80 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>
            </div>

            {/* SECTION 3: BENCH STRENGTH */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/75 backdrop-blur-xl border border-white/10 space-y-6 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-400">Section 3</div>
                  <h3 className="text-xl font-bold text-white mt-1">Bench Strength (Proposed Leadership Team)</h3>
                  <p className="text-slate-400 text-xs mt-0.5">
                    Leaders who are aligned with your vision and ready to support your district/industry initiatives.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleAddBenchLeader}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 hover:bg-blue-600/30 text-xs font-bold transition-all cursor-pointer w-fit"
                >
                  <Plus className="w-4 h-4" /> Add Proposed Leader
                </button>
              </div>

              <div className="space-y-4">
                {benchLeaders.map((leader, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-4 relative"
                  >
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                      <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                        #{idx + 1} Proposed Leader
                      </span>
                      {benchLeaders.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveBenchLeader(idx)}
                          className="text-slate-500 hover:text-red-400 transition-colors p-1"
                          title="Remove Leader"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="space-y-1">
                        <label className="text-[11px] font-bold uppercase text-slate-400">Full Name *</label>
                        <input
                          type="text"
                          value={leader.name}
                          onChange={(e) => handleBenchLeaderChange(idx, 'name', e.target.value)}
                          placeholder="Leader Name"
                          required
                          className="w-full h-10 px-3 bg-slate-900 border border-slate-700/80 rounded-lg text-white text-xs focus:outline-none focus:border-blue-500"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-bold uppercase text-slate-400">Mobile Number *</label>
                        <input
                          type="tel"
                          value={leader.mobile}
                          onChange={(e) => handleBenchLeaderChange(idx, 'mobile', e.target.value)}
                          placeholder="+91 9876543210"
                          required
                          className="w-full h-10 px-3 bg-slate-900 border border-slate-700/80 rounded-lg text-white text-xs focus:outline-none focus:border-blue-500"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-bold uppercase text-slate-400">City / District *</label>
                        <input
                          type="text"
                          value={leader.city}
                          onChange={(e) => handleBenchLeaderChange(idx, 'city', e.target.value)}
                          placeholder="City"
                          required
                          className="w-full h-10 px-3 bg-slate-900 border border-slate-700/80 rounded-lg text-white text-xs focus:outline-none focus:border-blue-500"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-bold uppercase text-slate-400">Company &amp; Role</label>
                        <input
                          type="text"
                          value={leader.industry}
                          onChange={(e) => handleBenchLeaderChange(idx, 'industry', e.target.value)}
                          placeholder="e.g. Apex Tech, Director"
                          className="w-full h-10 px-3 bg-slate-900 border border-slate-700/80 rounded-lg text-white text-xs focus:outline-none focus:border-blue-500"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-bold uppercase text-slate-400">Relationship *</label>
                        <input
                          type="text"
                          value={leader.relationship}
                          onChange={(e) => handleBenchLeaderChange(idx, 'relationship', e.target.value)}
                          placeholder="Client, peer, associate"
                          required
                          className="w-full h-10 px-3 bg-slate-900 border border-slate-700/80 rounded-lg text-white text-xs focus:outline-none focus:border-blue-500"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-bold uppercase text-slate-400">Onboarding Timeline</label>
                        <select
                          value={leader.timeline}
                          onChange={(e) => handleBenchLeaderChange(idx, 'timeline', e.target.value)}
                          className="w-full h-10 px-3 bg-slate-900 border border-slate-700/80 rounded-lg text-white text-xs focus:outline-none focus:border-blue-500 cursor-pointer"
                        >
                          <option value="30 days">Within 30 Days</option>
                          <option value="90 days">Within 90 Days</option>
                          <option value="180 days">Within 180 Days</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 4: SUPPORTING ATTACHMENTS */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/75 backdrop-blur-xl border border-white/10 space-y-6 shadow-xl">
              <div className="border-b border-white/10 pb-4">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-400">Section 4</div>
                <h3 className="text-xl font-bold text-white mt-1">Supporting Attachments &amp; Proofs</h3>
                <p className="text-slate-400 text-xs mt-0.5">
                  Upload PDF, DOCX, or presentation decks for Jury committee verification (Max 10MB each).
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* File 1: Business Credibility */}
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3">
                  <div className="text-xs font-bold text-slate-300">1. Business Proof / Registration</div>
                  <div className="text-[11px] text-slate-500">GST, Incorporation, or Trade Certificate</div>
                  {businessProofUrl ? (
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center justify-between">
                      <span className="truncate max-w-[140px]">Document Uploaded</span>
                      <button
                        type="button"
                        onClick={() => setBusinessProofUrl('')}
                        className="text-slate-400 hover:text-red-400"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ) : (
                    <label className="flex flex-col items-center justify-center p-4 border border-dashed border-slate-700 rounded-xl cursor-pointer hover:border-blue-500 transition-colors">
                      <UploadCloud className="w-6 h-6 text-slate-400 mb-1" />
                      <span className="text-xs text-slate-300 font-semibold">
                        {isUploading === 'business' ? 'Uploading...' : 'Choose File'}
                      </span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx,.jpg,.png"
                        onChange={(e) => handleFileUpload(e, 'business')}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>

                {/* File 2: Identity Proof */}
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3">
                  <div className="text-xs font-bold text-slate-300">2. Identity Proof</div>
                  <div className="text-[11px] text-slate-500">Government Photo ID / Passport / Aadhaar</div>
                  {identityProofUrl ? (
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center justify-between">
                      <span className="truncate max-w-[140px]">Document Uploaded</span>
                      <button
                        type="button"
                        onClick={() => setIdentityProofUrl('')}
                        className="text-slate-400 hover:text-red-400"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ) : (
                    <label className="flex flex-col items-center justify-center p-4 border border-dashed border-slate-700 rounded-xl cursor-pointer hover:border-blue-500 transition-colors">
                      <UploadCloud className="w-6 h-6 text-slate-400 mb-1" />
                      <span className="text-xs text-slate-300 font-semibold">
                        {isUploading === 'identity' ? 'Uploading...' : 'Choose File'}
                      </span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx,.jpg,.png"
                        onChange={(e) => handleFileUpload(e, 'identity')}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>

                {/* File 3: Presentation Deck */}
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3">
                  <div className="text-xs font-bold text-slate-300">3. Pitch Deck / Profile Presentation</div>
                  <div className="text-[11px] text-slate-500">Leadership Vision or Company Overview</div>
                  {deckUrl ? (
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center justify-between">
                      <span className="truncate max-w-[140px]">Document Uploaded</span>
                      <button
                        type="button"
                        onClick={() => setDeckUrl('')}
                        className="text-slate-400 hover:text-red-400"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ) : (
                    <label className="flex flex-col items-center justify-center p-4 border border-dashed border-slate-700 rounded-xl cursor-pointer hover:border-blue-500 transition-colors">
                      <UploadCloud className="w-6 h-6 text-slate-400 mb-1" />
                      <span className="text-xs text-slate-300 font-semibold">
                        {isUploading === 'deck' ? 'Uploading...' : 'Choose File'}
                      </span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx,.ppt,.pptx"
                        onChange={(e) => handleFileUpload(e, 'deck')}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>
              </div>
            </div>

            {/* SECTION 5: FINAL DECLARATION & SUBMIT */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/75 backdrop-blur-xl border border-white/10 space-y-6 shadow-xl">
              <div className="border-b border-white/10 pb-4">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-400">Section 5</div>
                <h3 className="text-xl font-bold text-white mt-1">Ethical Stewardship Declaration</h3>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 leading-relaxed space-y-2">
                <p>
                  I solemnly declare that the facts and metrics stated in this Jury Evaluation Dossier are true and accurate to the best of my knowledge. I endorse the Peers Global Code of Ethical Stewardship, Zero Commercial Politics Mandate, and agree to uphold peer community governance unconditionally.
                </p>
              </div>

              <label className="flex items-start gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={declarationAgreed}
                  onChange={(e) => setDeclarationAgreed(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-slate-700 text-blue-600 focus:ring-blue-500 cursor-pointer"
                />
                <span className="text-xs text-slate-300 font-medium leading-relaxed">
                  I agree to the declaration above and affirm that I am the authorized nominee completing this official dossier.
                </span>
              </label>

              <button
                type="submit"
                disabled={isSubmitting || !declarationAgreed}
                className="w-full h-14 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-base flex items-center justify-center gap-2 shadow-xl shadow-blue-600/30 transition-all disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Submitting Dossier to Scrutiny Committee...</span>
                  </>
                ) : (
                  <>
                    <Award className="w-5 h-5" />
                    <span>Submit Jury Evaluation Dossier</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
