'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  Mail,
  Send,
  RotateCcw,
  UploadCloud,
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
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 py-8 sm:py-12 relative overflow-hidden font-sans">
      {/* Subtle brand ambient accents matching nomination & voting pages */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
          <Link
            href="/leadership/nominate"
            className="flex items-center gap-1 hover:text-[#1D4ED8] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Leadership Portal
          </Link>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1D4ED8] animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Jury Evaluation Dossier (Form 2)
            </span>
          </div>
        </div>

        {/* Candidate Banner Card */}
        <div className="bg-white border border-[#DDE3EE] rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1D4ED8] to-[#2563EB] flex items-center justify-center text-white font-extrabold text-2xl shadow-md shadow-blue-500/20">
              {candidate?.candidate_name ? candidate.candidate_name.charAt(0).toUpperCase() : 'C'}
            </div>
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <h1 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight">
                  {candidate?.candidate_name || 'Leadership Candidate'}
                </h1>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E3EAFD] text-[#1E3A8A] border border-blue-200">
                  {candidate?.role_name || 'District Executive Director'}
                </span>
              </div>
              <div className="text-xs text-slate-500 mt-1 flex items-center gap-3">
                <span>
                  App Ref: <strong className="text-slate-700">{candidate?.application_number || 'PG-2026-SHORTLIST'}</strong>
                </span>
                <span>•</span>
                <span>{candidate?.campaign_name || 'National Leadership Selection 2026'}</span>
              </div>
            </div>
          </div>

          <div>
            {isSubmittedSuccess || candidate?.is_submitted ? (
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Evaluation Dossier Submitted
              </span>
            ) : (
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                Jury Evaluation Pending
              </span>
            )}
          </div>
        </div>

        {/* =================================================================== */}
        {/* SUBMISSION SUCCESS SCREEN                                           */}
        {/* =================================================================== */}
        {isSubmittedSuccess ? (
          <div className="bg-white border border-emerald-200 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-md shadow-emerald-500/5">
            <div className="w-20 h-20 rounded-full bg-emerald-50 border-2 border-emerald-500/30 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <Check className="w-10 h-10 stroke-[2.5]" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                Jury Evaluation Dossier Successfully Submitted!
              </h2>
              <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-900">{candidate?.candidate_name}</strong>. Your operational metrics, strategic vision, and leadership bench details have been securely recorded in the official Jury Evaluation Dossier and forwarded to the Scrutiny Committee &amp; Jury Board.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Status: Under Scrutiny &amp; Jury Review
            </div>

            <div className="pt-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white font-bold text-sm shadow-md shadow-blue-500/15 hover:opacity-95 transition-all"
              >
                Return to Peers Global Homepage
              </Link>
            </div>
          </div>
        ) : !authToken ? (
          /* =================================================================== */
          /* FLOW 1: CANDIDATE IDENTITY & OTP VERIFICATION GATE                 */
          /* =================================================================== */
          <div className="bg-white border border-[#DDE3EE] rounded-2xl p-6 sm:p-8 shadow-sm max-w-xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 text-[#1D4ED8] flex items-center justify-center mx-auto mb-3 shadow-xs">
                <Lock className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-extrabold text-[#0F172A]">Identity &amp; OTP Verification</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                To protect candidate confidentiality, please verify your registered nomination email address for candidate{' '}
                <strong className="text-slate-900">{candidate?.candidate_name || 'Leader'}</strong>.
              </p>
            </div>

            {gateError && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2.5">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                <span>{gateError}</span>
              </div>
            )}

            {!otpSent ? (
              <form onSubmit={handleSendOtp} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Registered Candidate Email Address <span className="text-[#E11D48]">*</span>
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
                  <p className="text-[11px] text-slate-500">
                    Must match the email address provided in your initial candidate nomination.
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
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1">
                  <div className="text-xs text-slate-500">Verification code sent to:</div>
                  <div className="text-sm font-bold text-[#0F172A]">{candidateEmail}</div>
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
                    Check your inbox or spam folder for your 6-digit access code.
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
                      <span>Verifying OTP...</span>
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="w-4 h-4" />
                      <span>Verify OTP &amp; Unlock Evaluation Dossier</span>
                    </>
                  )}
                </button>

                <div className="flex items-center justify-between text-xs text-slate-600 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setOtpSent(false)
                      setOtpCode('')
                      setGateError(null)
                    }}
                    className="hover:text-slate-900 transition-colors flex items-center gap-1 font-semibold"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Change email
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSendOtp()}
                    disabled={resendTimer > 0 || isSendingOtp}
                    className="text-[#1D4ED8] hover:underline font-bold disabled:opacity-40"
                  >
                    {resendTimer > 0 ? `Resend code in ${resendTimer}s` : 'Resend code'}
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* =================================================================== */
          /* FLOW 2: UNLOCKED FORM 2 DOSSIER                                    */
          /* =================================================================== */
          <form onSubmit={handleSubmitForm} className="space-y-6">
            {submitError && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-3">
                <AlertCircle className="w-5 h-5 shrink-0 text-red-600" />
                <span>{submitError}</span>
              </div>
            )}

            {/* SECTION 1: LEADERSHIP & STRATEGIC VISION */}
            <div className="bg-white border border-[#DDE3EE] rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col gap-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">Section 1</span>
                  <h2 className="text-xl font-bold text-[#0F172A]">Leadership &amp; Strategic Vision</h2>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#E3EAFD] text-[#1E3A8A]">
                  Required
                </span>
              </div>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Executive Leadership Philosophy &amp; Vision Statement <span className="text-[#E11D48]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={visionStatement}
                    onChange={(e) => setVisionStatement(e.target.value)}
                    placeholder="Describe how you will cultivate trust, collaboration, and high-impact peer networks in your target role..."
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition-all shadow-2xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    1-Year Operational Roadmap &amp; Regional Objectives <span className="text-[#E11D48]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={roadmap}
                    onChange={(e) => setRoadmap(e.target.value)}
                    placeholder="Outline your milestones for Q1 through Q4: Circle launches, member onboarding targets, and flagship summits..."
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition-all shadow-2xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Proposed Ecosystem Initiatives &amp; Industry Collaboration
                  </label>
                  <textarea
                    rows={3}
                    value={initiatives}
                    onChange={(e) => setInitiatives(e.target.value)}
                    placeholder="Key strategic partnerships, enterprise collaborations, or cross-chapter initiatives you plan to execute..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition-all shadow-2xs"
                  />
                </div>
              </div>
            </div>

            {/* SECTION 2: EXECUTION RIGOR & TRACK RECORD */}
            <div className="bg-white border border-[#DDE3EE] rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col gap-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">Section 2</span>
                  <h2 className="text-xl font-bold text-[#0F172A]">Execution Rigor &amp; Track Record</h2>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#E3EAFD] text-[#1E3A8A]">
                  Required
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Business / Entity Structure <span className="text-[#E11D48]">*</span>
                  </label>
                  <input
                    type="text"
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    placeholder="e.g. Private Limited, LLP, Partnership"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition-all shadow-2xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Year Founded <span className="text-[#E11D48]">*</span>
                  </label>
                  <input
                    type="number"
                    value={yearFounded}
                    onChange={(e) => setYearFounded(e.target.value)}
                    placeholder="e.g. 2018"
                    min="1950"
                    max="2026"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition-all shadow-2xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Annual Turnover Band <span className="text-[#E11D48]">*</span>
                  </label>
                  <select
                    value={turnoverBand}
                    onChange={(e) => setTurnoverBand(e.target.value)}
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition-all shadow-2xs cursor-pointer"
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
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Team Size (Full-Time) <span className="text-[#E11D48]">*</span>
                  </label>
                  <input
                    type="text"
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                    placeholder="e.g. 24 full-time professionals"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition-all shadow-2xs"
                  />
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-3 pt-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Top 3 Major Business &amp; Community Milestones <span className="text-[#E11D48]">*</span>
                </label>
                <input
                  type="text"
                  value={achievement1}
                  onChange={(e) => setAchievement1(e.target.value)}
                  placeholder="1. Landmark client/ecosystem milestone..."
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition-all shadow-2xs"
                />
                <input
                  type="text"
                  value={achievement2}
                  onChange={(e) => setAchievement2(e.target.value)}
                  placeholder="2. Expansion, market penetration, or revenue scale..."
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition-all shadow-2xs"
                />
                <input
                  type="text"
                  value={achievement3}
                  onChange={(e) => setAchievement3(e.target.value)}
                  placeholder="3. Industry recognition, patent, or community leadership role..."
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition-all shadow-2xs"
                />
              </div>

              {/* Case Study */}
              <div className="space-y-1.5 pt-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Flagship Case Study / Problem Solved <span className="text-[#E11D48]">*</span>
                </label>
                <textarea
                  rows={4}
                  value={caseStudy}
                  onChange={(e) => setCaseStudy(e.target.value)}
                  placeholder="Detail a complex initiative you spearheaded: the initial friction, strategic intervention, and measurable outcome..."
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition-all shadow-2xs"
                />
              </div>
            </div>

            {/* SECTION 3: BENCH STRENGTH */}
            <div className="bg-white border border-[#DDE3EE] rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col gap-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">Section 3</span>
                  <h2 className="text-xl font-bold text-[#0F172A]">Bench Strength (Proposed Leadership Team)</h2>
                  <p className="text-slate-500 text-xs mt-0.5">
                    Leaders who are aligned with your vision and ready to support your district/industry initiatives.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleAddBenchLeader}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 text-[#1D4ED8] hover:bg-blue-100 text-xs font-bold transition-all cursor-pointer w-fit"
                >
                  <Plus className="w-4 h-4" /> Add Proposed Leader
                </button>
              </div>

              <div className="space-y-4">
                {benchLeaders.map((leader, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3 relative"
                  >
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
                      <span className="text-xs font-bold text-[#1D4ED8] uppercase tracking-wider">
                        #{idx + 1} Proposed Leader
                      </span>
                      {benchLeaders.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveBenchLeader(idx)}
                          className="text-slate-400 hover:text-red-600 transition-colors p-1"
                          title="Remove Leader"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="space-y-1">
                        <label className="text-[11px] font-bold uppercase text-slate-700">Full Name *</label>
                        <input
                          type="text"
                          value={leader.name}
                          onChange={(e) => handleBenchLeaderChange(idx, 'name', e.target.value)}
                          placeholder="Leader Name"
                          required
                          className="w-full h-10 px-3 bg-white border border-slate-300 rounded-lg text-slate-900 text-xs focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-bold uppercase text-slate-700">Mobile Number *</label>
                        <input
                          type="tel"
                          value={leader.mobile}
                          onChange={(e) => handleBenchLeaderChange(idx, 'mobile', e.target.value)}
                          placeholder="+91 9876543210"
                          required
                          className="w-full h-10 px-3 bg-white border border-slate-300 rounded-lg text-slate-900 text-xs focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-bold uppercase text-slate-700">City / District *</label>
                        <input
                          type="text"
                          value={leader.city}
                          onChange={(e) => handleBenchLeaderChange(idx, 'city', e.target.value)}
                          placeholder="City"
                          required
                          className="w-full h-10 px-3 bg-white border border-slate-300 rounded-lg text-slate-900 text-xs focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-bold uppercase text-slate-700">Company &amp; Role</label>
                        <input
                          type="text"
                          value={leader.industry}
                          onChange={(e) => handleBenchLeaderChange(idx, 'industry', e.target.value)}
                          placeholder="e.g. Apex Tech, Director"
                          className="w-full h-10 px-3 bg-white border border-slate-300 rounded-lg text-slate-900 text-xs focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-bold uppercase text-slate-700">Relationship *</label>
                        <input
                          type="text"
                          value={leader.relationship}
                          onChange={(e) => handleBenchLeaderChange(idx, 'relationship', e.target.value)}
                          placeholder="Client, peer, associate"
                          required
                          className="w-full h-10 px-3 bg-white border border-slate-300 rounded-lg text-slate-900 text-xs focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-bold uppercase text-slate-700">Onboarding Timeline</label>
                        <select
                          value={leader.timeline}
                          onChange={(e) => handleBenchLeaderChange(idx, 'timeline', e.target.value)}
                          className="w-full h-10 px-3 bg-white border border-slate-300 rounded-lg text-slate-900 text-xs focus:outline-none focus:border-[#1D4ED8] cursor-pointer"
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
            <div className="bg-white border border-[#DDE3EE] rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col gap-5">
              <div className="pb-3 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">Section 4</span>
                <h2 className="text-xl font-bold text-[#0F172A]">Supporting Attachments &amp; Proofs</h2>
                <p className="text-slate-500 text-xs mt-0.5">
                  Upload PDF, DOCX, or presentation decks for Jury committee verification (Max 10MB each).
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* File 1: Business Credibility */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="text-xs font-bold text-slate-800">1. Business Proof / Registration</div>
                  <div className="text-[11px] text-slate-500">GST, Incorporation, or Trade Certificate</div>
                  {businessProofUrl ? (
                    <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center justify-between">
                      <span className="truncate max-w-[140px] font-medium">Document Uploaded</span>
                      <button
                        type="button"
                        onClick={() => setBusinessProofUrl('')}
                        className="text-slate-400 hover:text-red-600"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ) : (
                    <label className="flex flex-col items-center justify-center p-4 border border-dashed border-slate-300 rounded-xl cursor-pointer hover:border-[#1D4ED8] bg-white hover:bg-blue-50/40 transition-all">
                      <UploadCloud className="w-6 h-6 text-slate-400 mb-1" />
                      <span className="text-xs text-slate-700 font-semibold">
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
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="text-xs font-bold text-slate-800">2. Identity Proof</div>
                  <div className="text-[11px] text-slate-500">Government Photo ID / Passport / Aadhaar</div>
                  {identityProofUrl ? (
                    <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center justify-between">
                      <span className="truncate max-w-[140px] font-medium">Document Uploaded</span>
                      <button
                        type="button"
                        onClick={() => setIdentityProofUrl('')}
                        className="text-slate-400 hover:text-red-600"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ) : (
                    <label className="flex flex-col items-center justify-center p-4 border border-dashed border-slate-300 rounded-xl cursor-pointer hover:border-[#1D4ED8] bg-white hover:bg-blue-50/40 transition-all">
                      <UploadCloud className="w-6 h-6 text-slate-400 mb-1" />
                      <span className="text-xs text-slate-700 font-semibold">
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
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="text-xs font-bold text-slate-800">3. Pitch Deck / Profile Presentation</div>
                  <div className="text-[11px] text-slate-500">Leadership Vision or Company Overview</div>
                  {deckUrl ? (
                    <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center justify-between">
                      <span className="truncate max-w-[140px] font-medium">Document Uploaded</span>
                      <button
                        type="button"
                        onClick={() => setDeckUrl('')}
                        className="text-slate-400 hover:text-red-600"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ) : (
                    <label className="flex flex-col items-center justify-center p-4 border border-dashed border-slate-300 rounded-xl cursor-pointer hover:border-[#1D4ED8] bg-white hover:bg-blue-50/40 transition-all">
                      <UploadCloud className="w-6 h-6 text-slate-400 mb-1" />
                      <span className="text-xs text-slate-700 font-semibold">
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
            <div className="bg-white border border-[#DDE3EE] rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col gap-5">
              <div className="pb-3 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">Section 5</span>
                <h2 className="text-xl font-bold text-[#0F172A]">Ethical Stewardship Declaration</h2>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed space-y-2">
                <p>
                  I solemnly declare that the facts and metrics stated in this Jury Evaluation Dossier are true and accurate to the best of my knowledge. I endorse the Peers Global Code of Ethical Stewardship, Zero Commercial Politics Mandate, and agree to uphold peer community governance unconditionally.
                </p>
              </div>

              <label className="flex items-start gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={declarationAgreed}
                  onChange={(e) => setDeclarationAgreed(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-slate-300 text-[#1D4ED8] focus:ring-[#1D4ED8] cursor-pointer"
                />
                <span className="text-xs text-slate-700 font-semibold leading-relaxed">
                  I agree to the declaration above and affirm that I am the authorized nominee completing this official dossier.
                </span>
              </label>

              <button
                type="submit"
                disabled={isSubmitting || !declarationAgreed}
                className="w-full py-4 px-8 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white font-bold text-base shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
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
