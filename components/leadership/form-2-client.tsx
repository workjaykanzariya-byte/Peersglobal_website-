'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  ShieldCheck,
  Lock,
  Mail,
  Send,
  RotateCcw,
  UploadCloud,
  Trash2,
  Plus,
  AlertCircle,
  ChevronLeft,
  Check,
  Award,
  Users,
  Briefcase,
  Globe2,
  Target,
  HeartHandshake,
  FileText,
  HelpCircle,
} from 'lucide-react'
import { OtpSixBoxInput } from './otp-six-box-input'

const API_BASE = 'https://peersunity.com/api/v1/leadership'

interface BenchLeader {
  name: string
  mobile: string
  city: string
  industry: string
  relationship: string
  status: 'Committed' | 'Spoken, interested' | 'Not yet approached'
  proposed_role: string
  timeline: '30 days' | '90 days' | '180 days'
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
  const [, setIsLoadingMeta] = useState(true)

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

  // 1. Business credibility
  const [businessType, setBusinessType] = useState('')
  const [yearFounded, setYearFounded] = useState('')
  const [turnoverBand, setTurnoverBand] = useState('')
  const [teamSize, setTeamSize] = useState('')
  const [achievement1, setAchievement1] = useState('')
  const [achievement2, setAchievement2] = useState('')
  const [achievement3, setAchievement3] = useState('')
  const [businessProofUrl, setBusinessProofUrl] = useState('')

  // 2. Leadership track record
  const [rolesHeld, setRolesHeld] = useState('')
  const [largestCommunity, setLargestCommunity] = useState('')
  const [developedLeader1, setDevelopedLeader1] = useState('')
  const [developedLeader2, setDevelopedLeader2] = useState('')
  const [leadershipFailure, setLeadershipFailure] = useState('')

  // 3. Network strength
  const [associations, setAssociations] = useState('')
  const [institutions, setInstitutions] = useState('')
  const [sponsorsPartners, setSponsorsPartners] = useState('')

  // 4. Leadership Bench ("Who will you bring?")
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
  const [benchContactDeclaration, setBenchContactDeclaration] = useState(false)

  // 5. 12-month plan (role-specific)
  const [targets6Months, setTargets6Months] = useState('')
  const [targets12Months, setTargets12Months] = useState('')
  const [action90Day1, setAction90Day1] = useState('')
  const [action90Day2, setAction90Day2] = useState('')
  const [action90Day3, setAction90Day3] = useState('')
  const [fundingPlan, setFundingPlan] = useState('')
  const [biggestRisk, setBiggestRisk] = useState('')

  // 6. Commitment and fit
  const [hoursPerWeek, setHoursPerWeek] = useState('')
  const [otherCommitments, setOtherCommitments] = useState('')
  const [whyPeersGlobal, setWhyPeersGlobal] = useState('')
  const [roleUnderstanding, setRoleUnderstanding] = useState('')
  const [noTenureAcceptance, setNoTenureAcceptance] = useState<'Yes' | 'No' | ''>('')

  // 7. References
  const [ref1Name, setRef1Name] = useState('')
  const [ref1Relationship, setRef1Relationship] = useState('')
  const [ref1Mobile, setRef1Mobile] = useState('')
  const [ref1YearsKnown, setRef1YearsKnown] = useState('')

  const [ref2Name, setRef2Name] = useState('')
  const [ref2Relationship, setRef2Relationship] = useState('')
  const [ref2Mobile, setRef2Mobile] = useState('')
  const [ref2YearsKnown, setRef2YearsKnown] = useState('')

  // 8. Documents (Admin view only)
  const [identityProofUrl, setIdentityProofUrl] = useState('')
  const [deckUrl, setDeckUrl] = useState('')
  const [isUploading, setIsUploading] = useState<string | null>(null)

  // Submission state
  const [declarationAgreed, setDeclarationAgreed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [isSubmittedSuccess, setIsSubmittedSuccess] = useState(false)

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
    updated[index] = { ...updated[index], [field]: val }
    setBenchLeaders(updated)
  }

  // Dynamic bench requirement guide
  const getBenchGuide = () => {
    const role = (candidate?.role_name || '').toUpperCase()
    if (role.includes('CED')) {
      return { mustName: 'SED candidates', minCount: 3 }
    }
    if (role.includes('SED')) {
      return { mustName: 'DED candidates', minCount: 5 }
    }
    if (role.includes('DED')) {
      return { mustName: 'Industry Directors', minCount: 7 }
    }
    if (role.includes('ED') || role.includes('EXECUTIVE DIRECTOR')) {
      return { mustName: 'Industry Directors for that area', minCount: 3 }
    }
    if (role.includes('ID') || role.includes('INDUSTRY DIRECTOR')) {
      return { mustName: 'Circle Founders', minCount: 3 }
    }
    return { mustName: 'New Peers and Leadership Team members', minCount: 5 }
  }

  const benchGuide = getBenchGuide()

  // Submit full Form 2
  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!declarationAgreed) {
      setSubmitError('Please review and agree to the declaration before submitting.')
      return
    }

    if (!benchContactDeclaration) {
      setSubmitError('Please check the acknowledgment confirming Peers Global may contact the leaders named in your Leadership Bench.')
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

    const payload = {
      email: candidateEmail || candidate?.masked_email || '',
      // Business credibility
      business_type: businessType,
      year_founded: yearFounded,
      turnover_band: turnoverBand,
      team_size: teamSize,
      achievement_1: achievement1,
      achievement_2: achievement2,
      achievement_3: achievement3,
      business_proof_url: businessProofUrl,

      // Leadership track record
      roles_held: rolesHeld,
      largest_community: largestCommunity,
      developed_leader_1: developedLeader1,
      developed_leader_2: developedLeader2,
      leadership_failure: leadershipFailure,

      // Network strength
      associations: associations,
      institutions: institutions,
      sponsors_partners: sponsorsPartners,

      // Leadership Bench
      bench: benchLeaders,
      bench_contact_acknowledged: benchContactDeclaration,

      // 12-month plan
      targets_6_months: targets6Months,
      targets_12_months: targets12Months,
      action_90_day_1: action90Day1,
      action_90_day_2: action90Day2,
      action_90_day_3: action90Day3,
      funding_plan: fundingPlan,
      biggest_risk: biggestRisk,

      // Commitment and fit
      hours_per_week: hoursPerWeek,
      other_commitments: otherCommitments,
      why_peers_global: whyPeersGlobal,
      role_understanding: roleUnderstanding,
      no_tenure_acceptance: noTenureAcceptance,

      // References
      references: [
        {
          name: ref1Name,
          relationship: ref1Relationship,
          mobile: ref1Mobile,
          years_known: ref1YearsKnown,
        },
        {
          name: ref2Name,
          relationship: ref2Relationship,
          mobile: ref2Mobile,
          years_known: ref2YearsKnown,
        },
      ],

      // Documents
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
      {/* Ambient background glow accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
        {/* Navigation Breadcrumb (Clean, pill badge removed as requested) */}
        <div className="flex items-center text-xs font-semibold text-slate-500">
          <Link
            href="/leadership/nominate"
            className="flex items-center gap-1 hover:text-[#1D4ED8] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Leadership Portal
          </Link>
        </div>

        {/* Candidate Banner Card - Applicant Name & Info Centered, Subtitle & Status Badge Removed */}
        <div className="bg-white border border-[#DDE3EE] rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1D4ED8] to-[#2563EB] flex items-center justify-center text-white font-extrabold text-2xl shadow-md shadow-blue-500/20 mb-3">
            {candidate?.candidate_name ? candidate.candidate_name.charAt(0).toUpperCase() : 'C'}
          </div>
          <div className="flex items-center gap-2.5 flex-wrap justify-center">
            <h1 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight">
              {candidate?.candidate_name || 'Leadership Candidate'}
            </h1>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E3EAFD] text-[#1E3A8A] border border-blue-200">
              {candidate?.role_name || 'District Executive Director'}
            </span>
          </div>
          <div className="text-xs text-slate-500 mt-1.5">
            App Ref: <strong className="text-slate-700">{candidate?.application_number || 'PG-2026-SHORTLIST'}</strong>
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
                Thank you, <strong className="text-slate-900">{candidate?.candidate_name}</strong>. Your business credibility, leadership track record, network strength, and leadership bench details have been securely recorded in the official Jury Evaluation Dossier and forwarded to the Scrutiny Committee &amp; Jury Board.
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
          /* FLOW 2: UNLOCKED FORM 2 DOSSIER (EXACT 8 SECTIONS IN CLEAN TITLES) */
          /* =================================================================== */
          <form onSubmit={handleSubmitForm} className="space-y-6">
            {submitError && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-3">
                <AlertCircle className="w-5 h-5 shrink-0 text-red-600" />
                <span>{submitError}</span>
              </div>
            )}

            {/* 1. BUSINESS CREDIBILITY */}
            <div className="bg-white border border-[#DDE3EE] rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col gap-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <Briefcase className="w-5 h-5 text-[#1D4ED8]" />
                  <h2 className="text-xl font-bold text-[#0F172A]">Business credibility</h2>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#E3EAFD] text-[#1E3A8A]">
                  Required
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Business type <span className="text-[#E11D48]">*</span>
                  </label>
                  <input
                    type="text"
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    placeholder="e.g. Private Limited, LLP, Partnership, Sole Prop."
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition-all shadow-2xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Year founded <span className="text-[#E11D48]">*</span>
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
                    Annual turnover band <span className="text-[#E11D48]">*</span>
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
                    Team size <span className="text-[#E11D48]">*</span>
                  </label>
                  <input
                    type="text"
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                    placeholder="e.g. 25 full-time professionals"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition-all shadow-2xs"
                  />
                </div>
              </div>

              {/* Top 3 business achievements */}
              <div className="space-y-3 pt-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Top 3 business achievements <span className="text-[#E11D48]">*</span>
                </label>
                <input
                  type="text"
                  value={achievement1}
                  onChange={(e) => setAchievement1(e.target.value)}
                  placeholder="Achievement 1: e.g. Scaled annual revenue by 250% across 3 states"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition-all shadow-2xs"
                />
                <input
                  type="text"
                  value={achievement2}
                  onChange={(e) => setAchievement2(e.target.value)}
                  placeholder="Achievement 2: e.g. Executed enterprise contracts with 15+ Fortune 500 brands"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition-all shadow-2xs"
                />
                <input
                  type="text"
                  value={achievement3}
                  onChange={(e) => setAchievement3(e.target.value)}
                  placeholder="Achievement 3: e.g. Recognized with State Innovation & Business Excellence Award"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition-all shadow-2xs"
                />
              </div>

              {/* Business registration proof upload */}
              <div className="space-y-2 pt-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Business registration proof (GST / incorporation)
                </label>
                {businessProofUrl ? (
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="font-semibold">Business registration proof uploaded</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setBusinessProofUrl('')}
                      className="text-slate-400 hover:text-red-600 p-1 transition-colors"
                      title="Remove file"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <label className="flex items-center gap-3 p-4 border border-dashed border-slate-300 rounded-xl cursor-pointer hover:border-[#1D4ED8] bg-slate-50/60 hover:bg-blue-50/30 transition-all">
                    <UploadCloud className="w-6 h-6 text-slate-400 shrink-0" />
                    <div className="flex-1">
                      <span className="text-xs font-bold text-slate-700 block">
                        {isUploading === 'business' ? 'Uploading document...' : 'Upload GST Certificate or Certificate of Incorporation'}
                      </span>
                      <span className="text-[11px] text-slate-500">PDF, PNG, JPG (Max 10MB)</span>
                    </div>
                    <input
                      type="file"
                      accept=".pdf,.png,.jpg,.jpeg,.doc,.docx"
                      onChange={(e) => handleFileUpload(e, 'business')}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
            </div>

            {/* 2. LEADERSHIP TRACK RECORD */}
            <div className="bg-white border border-[#DDE3EE] rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col gap-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <Award className="w-5 h-5 text-[#1D4ED8]" />
                  <h2 className="text-xl font-bold text-[#0F172A]">Leadership track record</h2>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#E3EAFD] text-[#1E3A8A]">
                  Required
                </span>
              </div>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Leadership roles held <span className="text-[#E11D48]">*</span>
                  </label>
                  <p className="text-[11px] text-slate-500">
                    Organisation, role, years, and team size led.
                  </p>
                  <textarea
                    rows={3}
                    value={rolesHeld}
                    onChange={(e) => setRolesHeld(e.target.value)}
                    placeholder="e.g. ABC Chamber of Commerce, Vice President, 2021-2024 (led 40-member council)&#10;XYZ Enterprise, Managing Director, 2018-Present (led 35-person team)"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition-all shadow-2xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    The largest community or group you have built or grown <span className="text-[#E11D48]">*</span>
                  </label>
                  <p className="text-[11px] text-slate-500">
                    What it was, its size, and your role.
                  </p>
                  <textarea
                    rows={3}
                    value={largestCommunity}
                    onChange={(e) => setLargestCommunity(e.target.value)}
                    placeholder="Describe the initiative or community, the starting vs peak size, and your exact hands-on contribution..."
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition-all shadow-2xs"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    The leaders you have developed <span className="text-[#E11D48]">*</span>
                  </label>
                  <p className="text-[11px] text-slate-500">
                    Name 2 people who grew because of you, their previous role, and what they achieved under your guidance.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      value={developedLeader1}
                      onChange={(e) => setDevelopedLeader1(e.target.value)}
                      placeholder="Leader 1: Full name, initial position & how they grew"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition-all shadow-2xs"
                    />
                    <input
                      type="text"
                      value={developedLeader2}
                      onChange={(e) => setDevelopedLeader2(e.target.value)}
                      placeholder="Leader 2: Full name, initial position & how they grew"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition-all shadow-2xs"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    A failure as a leader, and what you learned <span className="text-[#E11D48]">*</span>
                  </label>
                  <p className="text-[11px] text-slate-500">
                    This question reveals maturity fast. Be candid about what went wrong and your self-reflection.
                  </p>
                  <textarea
                    rows={3}
                    value={leadershipFailure}
                    onChange={(e) => setLeadershipFailure(e.target.value)}
                    placeholder="Explain a difficult leadership mistake or challenge, the outcome, and what fundamental principle you adopted going forward..."
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition-all shadow-2xs"
                  />
                </div>
              </div>
            </div>

            {/* 3. NETWORK STRENGTH */}
            <div className="bg-white border border-[#DDE3EE] rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col gap-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <Globe2 className="w-5 h-5 text-[#1D4ED8]" />
                  <h2 className="text-xl font-bold text-[#0F172A]">Network strength</h2>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#E3EAFD] text-[#1E3A8A]">
                  Required
                </span>
              </div>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Business associations / chambers you belong to <span className="text-[#E11D48]">*</span>
                  </label>
                  <textarea
                    rows={2}
                    value={associations}
                    onChange={(e) => setAssociations(e.target.value)}
                    placeholder="e.g. CII, FICCI, BNI, Rotary International, TiE, Young Indians, Local Chamber of Commerce..."
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition-all shadow-2xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Institutions you can access <span className="text-[#E11D48]">*</span>
                  </label>
                  <p className="text-[11px] text-slate-500">
                    Colleges, banks, government bodies, media.
                  </p>
                  <textarea
                    rows={2}
                    value={institutions}
                    onChange={(e) => setInstitutions(e.target.value)}
                    placeholder="List specific institutions and key decision-maker relationships you have access to..."
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition-all shadow-2xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Potential sponsors or partners you can bring <span className="text-[#E11D48]">*</span>
                  </label>
                  <p className="text-[11px] text-slate-500">
                    Names and type of partnership (corporate sponsors, event partners, venue hosts, ecosystem allies).
                  </p>
                  <textarea
                    rows={2}
                    value={sponsorsPartners}
                    onChange={(e) => setSponsorsPartners(e.target.value)}
                    placeholder="Specify names and engagement types..."
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition-all shadow-2xs"
                  />
                </div>
              </div>
            </div>

            {/* 4. LEADERSHIP BENCH: WHO WILL YOU BRING? */}
            <div className="bg-white border border-[#DDE3EE] rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col gap-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <Users className="w-5 h-5 text-[#1D4ED8]" />
                  <div>
                    <h2 className="text-xl font-bold text-[#0F172A]">Leadership Bench, &ldquo;Who will you bring?&rdquo;</h2>
                    <p className="text-slate-500 text-xs mt-0.5">
                      Name the leaders one level below your target role who will build with you.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleAddBenchLeader}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 text-[#1D4ED8] hover:bg-blue-100 text-xs font-bold transition-all cursor-pointer w-fit"
                >
                  <Plus className="w-4 h-4" /> Add Leader
                </button>
              </div>

              {/* Dynamic Role Bench Guidance Banner */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50/70 to-indigo-50/70 border border-blue-200 text-xs text-slate-700 space-y-1.5">
                <div className="font-bold text-[#1E3A8A] flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4 text-[#1D4ED8]" />
                  <span>Bench Requirement for {candidate?.role_name || 'Your Target Role'}:</span>
                </div>
                <p>
                  As an applicant for <strong>{candidate?.role_name || 'Leadership'}</strong>, you must name at least <strong>{benchGuide.minCount} {benchGuide.mustName}</strong>.
                </p>
                <p className="text-[11px] text-slate-500 italic">
                  Note: &ldquo;Committed&rdquo; means something only if it can be checked. Jurors weight Committed names heavily and &ldquo;Not yet approached&rdquo; names at almost nothing.
                </p>
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
                        <label className="text-[11px] font-bold uppercase text-slate-700">Name *</label>
                        <input
                          type="text"
                          value={leader.name}
                          onChange={(e) => handleBenchLeaderChange(idx, 'name', e.target.value)}
                          placeholder="Leader Full Name"
                          required
                          className="w-full h-10 px-3 bg-white border border-slate-300 rounded-lg text-slate-900 text-xs focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-bold uppercase text-slate-700">Mobile *</label>
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
                        <label className="text-[11px] font-bold uppercase text-slate-700">City *</label>
                        <input
                          type="text"
                          value={leader.city}
                          onChange={(e) => handleBenchLeaderChange(idx, 'city', e.target.value)}
                          placeholder="e.g. Ahmedabad, Mumbai"
                          required
                          className="w-full h-10 px-3 bg-white border border-slate-300 rounded-lg text-slate-900 text-xs focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-bold uppercase text-slate-700">Industry / business *</label>
                        <input
                          type="text"
                          value={leader.industry}
                          onChange={(e) => handleBenchLeaderChange(idx, 'industry', e.target.value)}
                          placeholder="e.g. IT Services, Apex Tech"
                          required
                          className="w-full h-10 px-3 bg-white border border-slate-300 rounded-lg text-slate-900 text-xs focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-bold uppercase text-slate-700">Relationship *</label>
                        <input
                          type="text"
                          value={leader.relationship}
                          onChange={(e) => handleBenchLeaderChange(idx, 'relationship', e.target.value)}
                          placeholder="Client, friend, colleague..."
                          required
                          className="w-full h-10 px-3 bg-white border border-slate-300 rounded-lg text-slate-900 text-xs focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-bold uppercase text-slate-700">Status with them *</label>
                        <select
                          value={leader.status}
                          onChange={(e) => handleBenchLeaderChange(idx, 'status', e.target.value as BenchLeader['status'])}
                          className="w-full h-10 px-3 bg-white border border-slate-300 rounded-lg text-slate-900 text-xs focus:outline-none focus:border-[#1D4ED8] cursor-pointer"
                        >
                          <option value="Committed">Committed</option>
                          <option value="Spoken, interested">Spoken, interested</option>
                          <option value="Not yet approached">Not yet approached</option>
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-bold uppercase text-slate-700">Proposed role or Circle</label>
                        <input
                          type="text"
                          value={leader.proposed_role}
                          onChange={(e) => handleBenchLeaderChange(idx, 'proposed_role', e.target.value)}
                          placeholder="e.g. Circle Chair or Tech ID"
                          className="w-full h-10 px-3 bg-white border border-slate-300 rounded-lg text-slate-900 text-xs focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15"
                        />
                      </div>

                      <div className="space-y-1 sm:col-span-2">
                        <label className="text-[11px] font-bold uppercase text-slate-700">Expected onboarding timeline *</label>
                        <select
                          value={leader.timeline}
                          onChange={(e) => handleBenchLeaderChange(idx, 'timeline', e.target.value as BenchLeader['timeline'])}
                          className="w-full h-10 px-3 bg-white border border-slate-300 rounded-lg text-slate-900 text-xs focus:outline-none focus:border-[#1D4ED8] cursor-pointer"
                        >
                          <option value="30 days">30 days</option>
                          <option value="90 days">90 days</option>
                          <option value="180 days">180 days</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bench contact declaration */}
              <label className="flex items-start gap-3 p-3.5 rounded-xl bg-blue-50/50 border border-blue-200 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={benchContactDeclaration}
                  onChange={(e) => setBenchContactDeclaration(e.target.checked)}
                  required
                  className="mt-0.5 w-4 h-4 rounded border-slate-300 text-[#1D4ED8] focus:ring-[#1D4ED8] cursor-pointer"
                />
                <span className="text-xs text-slate-700 font-semibold leading-relaxed">
                  I understand Peers Global may contact the people named here. <span className="text-[#E11D48]">*</span>
                </span>
              </label>
            </div>

            {/* 5. 12-MONTH PLAN (ROLE-SPECIFIC) */}
            <div className="bg-white border border-[#DDE3EE] rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col gap-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <Target className="w-5 h-5 text-[#1D4ED8]" />
                  <h2 className="text-xl font-bold text-[#0F172A]">12-month plan (role-specific)</h2>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#E3EAFD] text-[#1E3A8A]">
                  Required
                </span>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Targets: number of Circles / IDs / Peers in 6 and 12 months <span className="text-[#E11D48]">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      value={targets6Months}
                      onChange={(e) => setTargets6Months(e.target.value)}
                      placeholder="6-Month Target: e.g. 5 Circles, 15 IDs, 120 Peers"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition-all shadow-2xs"
                    />
                    <input
                      type="text"
                      value={targets12Months}
                      onChange={(e) => setTargets12Months(e.target.value)}
                      placeholder="12-Month Target: e.g. 12 Circles, 35 IDs, 350 Peers"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition-all shadow-2xs"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    First 90 days: three concrete actions <span className="text-[#E11D48]">*</span>
                  </label>
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={action90Day1}
                      onChange={(e) => setAction90Day1(e.target.value)}
                      placeholder="Action 1: e.g. Form initial advisory council of 5 business champions"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition-all shadow-2xs"
                    />
                    <input
                      type="text"
                      value={action90Day2}
                      onChange={(e) => setAction90Day2(e.target.value)}
                      placeholder="Action 2: e.g. Host flagship regional leadership convening for 40+ prospective Circle founders"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition-all shadow-2xs"
                    />
                    <input
                      type="text"
                      value={action90Day3}
                      onChange={(e) => setAction90Day3(e.target.value)}
                      placeholder="Action 3: e.g. Launch first 2 charter Circles with full category exclusivity"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition-all shadow-2xs"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    How you will fund your time and operations in Year 1 <span className="text-[#E11D48]">*</span>
                  </label>
                  <textarea
                    rows={3}
                    value={fundingPlan}
                    onChange={(e) => setFundingPlan(e.target.value)}
                    placeholder="Describe how your existing business or personal resources support your dedicated operational time for Peers Global..."
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition-all shadow-2xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Biggest risk to your plan, and how you will handle it <span className="text-[#E11D48]">*</span>
                  </label>
                  <textarea
                    rows={3}
                    value={biggestRisk}
                    onChange={(e) => setBiggestRisk(e.target.value)}
                    placeholder="Identify the main risk (e.g. member retention, event logistics, time conflicts) and your concrete backup strategy..."
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition-all shadow-2xs"
                  />
                </div>
              </div>
            </div>

            {/* 6. COMMITMENT AND FIT */}
            <div className="bg-white border border-[#DDE3EE] rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col gap-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <HeartHandshake className="w-5 h-5 text-[#1D4ED8]" />
                  <h2 className="text-xl font-bold text-[#0F172A]">Commitment and fit</h2>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#E3EAFD] text-[#1E3A8A]">
                  Required
                </span>
              </div>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Hours per week, and a typical week&apos;s availability <span className="text-[#E11D48]">*</span>
                  </label>
                  <input
                    type="text"
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(e.target.value)}
                    placeholder="e.g. 10-12 hours/week; Tuesday evenings & Saturday mornings"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition-all shadow-2xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Other commitments that compete for time <span className="text-[#E11D48]">*</span>
                  </label>
                  <textarea
                    rows={2}
                    value={otherCommitments}
                    onChange={(e) => setOtherCommitments(e.target.value)}
                    placeholder="Specify any active business ventures, advisory boards, or travel schedules that require your time..."
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition-all shadow-2xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Why Peers Global and not another network <span className="text-[#E11D48]">*</span>
                  </label>
                  <p className="text-[11px] text-slate-500">
                    This tests alignment with our Community of Collaboration ethos.
                  </p>
                  <textarea
                    rows={3}
                    value={whyPeersGlobal}
                    onChange={(e) => setWhyPeersGlobal(e.target.value)}
                    placeholder="Share why you choose Peers Global, and how you resonate with ethical peer collaboration over transaction-driven networking..."
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition-all shadow-2xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Understanding of the role: &ldquo;In your words, what does a [{candidate?.role_name || 'role'}] do?&rdquo; <span className="text-[#E11D48]">*</span>
                  </label>
                  <p className="text-[11px] text-slate-500">
                    This tests whether you have read and understood the Leadership Playbook.
                  </p>
                  <textarea
                    rows={3}
                    value={roleUnderstanding}
                    onChange={(e) => setRoleUnderstanding(e.target.value)}
                    placeholder="In your own words, summarize the core responsibility, member stewardship, and deliverables of this role..."
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition-all shadow-2xs"
                  />
                </div>

                <div className="space-y-2 pt-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Acceptance that the role is performance-based, with no fixed tenure <span className="text-[#E11D48]">*</span>
                  </label>
                  <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2 cursor-pointer text-sm font-semibold text-slate-800">
                      <input
                        type="radio"
                        name="tenure_acceptance"
                        value="Yes"
                        checked={noTenureAcceptance === 'Yes'}
                        onChange={() => setNoTenureAcceptance('Yes')}
                        required
                        className="w-4 h-4 text-[#1D4ED8] focus:ring-[#1D4ED8]"
                      />
                      Yes, I accept
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer text-sm font-semibold text-slate-800">
                      <input
                        type="radio"
                        name="tenure_acceptance"
                        value="No"
                        checked={noTenureAcceptance === 'No'}
                        onChange={() => setNoTenureAcceptance('No')}
                        required
                        className="w-4 h-4 text-[#1D4ED8] focus:ring-[#1D4ED8]"
                      />
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* 7. REFERENCES */}
            <div className="bg-white border border-[#DDE3EE] rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col gap-5">
              <div className="pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <Users className="w-5 h-5 text-[#1D4ED8]" />
                  <h2 className="text-xl font-bold text-[#0F172A]">References</h2>
                </div>
                <p className="text-slate-500 text-xs mt-0.5">
                  Two references: name, relationship, mobile, years known (at least one business reference, not a friend).
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Reference 1 */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="text-xs font-bold uppercase text-[#1D4ED8] tracking-wider">
                    Reference 1 (Business Reference) *
                  </div>
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={ref1Name}
                      onChange={(e) => setRef1Name(e.target.value)}
                      placeholder="Full Name *"
                      required
                      className="w-full h-10 px-3 bg-white border border-slate-300 rounded-lg text-slate-900 text-xs focus:outline-none focus:border-[#1D4ED8]"
                    />
                    <input
                      type="text"
                      value={ref1Relationship}
                      onChange={(e) => setRef1Relationship(e.target.value)}
                      placeholder="Relationship (e.g. Corporate Client, Board Partner) *"
                      required
                      className="w-full h-10 px-3 bg-white border border-slate-300 rounded-lg text-slate-900 text-xs focus:outline-none focus:border-[#1D4ED8]"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="tel"
                        value={ref1Mobile}
                        onChange={(e) => setRef1Mobile(e.target.value)}
                        placeholder="Mobile Number *"
                        required
                        className="w-full h-10 px-3 bg-white border border-slate-300 rounded-lg text-slate-900 text-xs focus:outline-none focus:border-[#1D4ED8]"
                      />
                      <input
                        type="text"
                        value={ref1YearsKnown}
                        onChange={(e) => setRef1YearsKnown(e.target.value)}
                        placeholder="Years Known (e.g. 5 yrs) *"
                        required
                        className="w-full h-10 px-3 bg-white border border-slate-300 rounded-lg text-slate-900 text-xs focus:outline-none focus:border-[#1D4ED8]"
                      />
                    </div>
                  </div>
                </div>

                {/* Reference 2 */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="text-xs font-bold uppercase text-[#1D4ED8] tracking-wider">
                    Reference 2 *
                  </div>
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={ref2Name}
                      onChange={(e) => setRef2Name(e.target.value)}
                      placeholder="Full Name *"
                      required
                      className="w-full h-10 px-3 bg-white border border-slate-300 rounded-lg text-slate-900 text-xs focus:outline-none focus:border-[#1D4ED8]"
                    />
                    <input
                      type="text"
                      value={ref2Relationship}
                      onChange={(e) => setRef2Relationship(e.target.value)}
                      placeholder="Relationship (e.g. Association Colleague, Mentor) *"
                      required
                      className="w-full h-10 px-3 bg-white border border-slate-300 rounded-lg text-slate-900 text-xs focus:outline-none focus:border-[#1D4ED8]"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="tel"
                        value={ref2Mobile}
                        onChange={(e) => setRef2Mobile(e.target.value)}
                        placeholder="Mobile Number *"
                        required
                        className="w-full h-10 px-3 bg-white border border-slate-300 rounded-lg text-slate-900 text-xs focus:outline-none focus:border-[#1D4ED8]"
                      />
                      <input
                        type="text"
                        value={ref2YearsKnown}
                        onChange={(e) => setRef2YearsKnown(e.target.value)}
                        placeholder="Years Known (e.g. 7 yrs) *"
                        required
                        className="w-full h-10 px-3 bg-white border border-slate-300 rounded-lg text-slate-900 text-xs focus:outline-none focus:border-[#1D4ED8]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 8. DOCUMENTS (ADMIN VIEW ONLY) */}
            <div className="bg-white border border-[#DDE3EE] rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col gap-5">
              <div className="pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <FileText className="w-5 h-5 text-[#1D4ED8]" />
                  <h2 className="text-xl font-bold text-[#0F172A]">Documents (admin view only)</h2>
                </div>
                <p className="text-slate-500 text-xs mt-0.5">
                  Confidential records accessible solely to the Scrutiny Committee &amp; Jury Board (Max 10MB each).
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Doc 1: Identity Proof */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="text-xs font-bold text-slate-800">1. Identity proof (masked)</div>
                  <div className="text-[11px] text-slate-500">Government Photo ID / Aadhaar / Passport</div>
                  {identityProofUrl ? (
                    <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center justify-between">
                      <span className="truncate max-w-[140px] font-medium">Uploaded</span>
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

                {/* Doc 2: Business Proof */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="text-xs font-bold text-slate-800">2. Business proof</div>
                  <div className="text-[11px] text-slate-500">GST, Trade License, Incorporation</div>
                  {businessProofUrl ? (
                    <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center justify-between">
                      <span className="truncate max-w-[140px] font-medium">Uploaded</span>
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

                {/* Doc 3: Optional Deck */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="text-xs font-bold text-slate-800">3. Company profile or deck (optional)</div>
                  <div className="text-[11px] text-slate-500">Overview Presentation or Portfolio</div>
                  {deckUrl ? (
                    <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center justify-between">
                      <span className="truncate max-w-[140px] font-medium">Uploaded</span>
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

            {/* FINAL DECLARATION & SUBMISSION */}
            <div className="bg-white border border-[#DDE3EE] rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col gap-5">
              <div className="pb-3 border-b border-slate-100">
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
                  I agree to the declaration above and affirm that I am the authorized nominee completing this official dossier. <span className="text-[#E11D48]">*</span>
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
