'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import {
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Lock,
  Mail,
  User,
  Briefcase,
  Building2,
  Network,
  Users,
  Target,
  Clock,
  FileText,
  Upload,
  Check,
  Plus,
  Trash2,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Sparkles,
  Award,
  Calendar,
  ExternalLink,
  Save,
  HelpCircle,
  FileCheck,
} from 'lucide-react'
import {
  Form2CandidateInfo,
  Form2BenchMember,
  Form2Payload,
  leadershipApi,
} from '@/lib/api/leadership'

interface Form2WizardProps {
  initialCandidateInfo: Form2CandidateInfo
  campaignId: string
  nominationId: string
}

export function Form2Wizard({
  initialCandidateInfo,
  campaignId,
  nominationId,
}: Form2WizardProps) {
  const [candidateInfo, setCandidateInfo] = useState<Form2CandidateInfo>(initialCandidateInfo)
  const [isVerified, setIsVerified] = useState<boolean>(false)
  const [verifyEmailInput, setVerifyEmailInput] = useState<string>('')
  const [isVerifying, setIsVerifying] = useState<boolean>(false)
  const [verifyError, setVerifyError] = useState<string | null>(null)
  const [verifySuccessMsg, setVerifySuccessMsg] = useState<string | null>(null)

  // Current wizard step
  // 1: Business Credibility & Track Record (Sec A & B)
  // 2: Network Strength & Leadership Bench (Sec C & D)
  // 3: 12-Month Plan & Commitment Fit (Sec E & F)
  // 4: References & Document Proofs (Sec G & H)
  // 5: Review & Submit
  const [activeStep, setActiveStep] = useState<number>(1)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submissionResult, setSubmissionResult] = useState<{
    sub_nomination_id: string
    application_number: string
  } | null>(null)

  const [draftSavedAt, setDraftSavedAt] = useState<string | null>(null)
  const [uploadingField, setUploadingField] = useState<string | null>(null)

  // Section A: Business Credibility
  const [secA, setSecA] = useState({
    business_type: 'IT Services / Consulting',
    year_founded: '2018',
    annual_turnover_band: '₹1 Cr - ₹5 Cr',
    team_size: '25',
    achievements: '1. Scaled across 3 states\n2. Over 100 enterprise clients\n3. ISO 9001 certified',
    registration_doc_url: '',
  })

  // Section B: Leadership Track Record
  const [secB, setSecB] = useState({
    leadership_roles: 'VP of Business Development (ABC Corp, 4 yrs, 15 members led)',
    largest_community: 'Tech Founders Gujarat - 450 founders, Co-founder & Convenor',
    developed_leaders: '1. Rajesh Patel (now VP at FinTech)\n2. Priya Shah (Circle Lead)',
    leadership_failure_learning: 'Expanded into retail too fast without regional heads; learned delegation and leadership benchmarking.',
  })

  // Section C: Network Strength
  const [secC, setSecC] = useState({
    associations: 'CII, TiE Ahmedabad, BNI Chapter President',
    institutions_access: 'IIM Ahmedabad alumni network, HDFC corporate banking division',
    sponsors_partners: 'TechVentures Capital, Reliance Retail regional logistics',
  })

  // Section D: Leadership Bench
  const minRequiredBench = candidateInfo.bench_requirement?.min_count || 7
  const targetRoleTitle = candidateInfo.bench_requirement?.target_role || 'Industry Directors'

  const [benchMembers, setBenchMembers] = useState<Form2BenchMember[]>([
    {
      name: 'Amit Shah',
      mobile: '+91 9876543210',
      city: 'Ahmedabad',
      industry: 'Manufacturing',
      relationship: 'Association Colleague',
      status: 'Committed',
      proposed_role: 'Industry Director - Textiles',
      timeline: '30',
    },
    {
      name: 'Dr. Rahul Desai',
      mobile: '+91 9822114455',
      city: 'Surat',
      industry: 'Healthcare & Pharma',
      relationship: 'Business Partner',
      status: 'Committed',
      proposed_role: 'Industry Director - Healthcare',
      timeline: '30',
    },
    {
      name: 'Neha Mehta',
      mobile: '+91 9909988776',
      city: 'Vadodara',
      industry: 'Chemicals & Specialty',
      relationship: 'Chamber Member',
      status: 'Spoken, interested',
      proposed_role: 'Industry Director - Chemicals',
      timeline: '90',
    },
    {
      name: 'Vikram Parekh',
      mobile: '+91 9825022334',
      city: 'Rajkot',
      industry: 'Engineering & Auto',
      relationship: 'Founding Peer',
      status: 'Committed',
      proposed_role: 'Industry Director - Auto Ancillaries',
      timeline: '30',
    },
    {
      name: 'Sonal Trivedi',
      mobile: '+91 9879011223',
      city: 'Surat',
      industry: 'Diamond & Luxury Gems',
      relationship: 'Client & Mentor',
      status: 'Spoken, interested',
      proposed_role: 'Industry Director - Gems & Jewellery',
      timeline: '90',
    },
    {
      name: 'Harshil Joshi',
      mobile: '+91 9824455667',
      city: 'Ahmedabad',
      industry: 'Real Estate & Infra',
      relationship: 'Fellow Promoter',
      status: 'Spoken, interested',
      proposed_role: 'Industry Director - Real Estate',
      timeline: '90',
    },
    {
      name: 'Pooja Bhatt',
      mobile: '+91 9724119900',
      city: 'Surat',
      industry: 'IT & Software SaaS',
      relationship: 'Alumni Network',
      status: 'Committed',
      proposed_role: 'Industry Director - Technology & AI',
      timeline: '30',
    },
  ])

  const [benchDeclaration, setBenchDeclaration] = useState<boolean>(true)

  // Section E: 12-Month Plan
  const [secE, setSecE] = useState({
    targets_6_12_months: '6 Months: 4 Circles, 12 IDs. 12 Months: 10 Circles, 30 IDs, 150 Peers.',
    first_90_days: '1. Onboard 7 committed IDs\n2. Host 2 discovery conclaves\n3. Form Surat & Vadodara launch core teams',
    funding_plan: 'Self-funded through consulting reserve and corporate sponsorship.',
    biggest_risk: 'Candidate drop-off during onboarding. Mitigation: structured weekly peer reviews.',
  })

  // Section F: Commitment & Fit
  const [secF, setSecF] = useState({
    hours_per_week: '10-12 hours / week (Tue & Sat availability)',
    competing_commitments: 'Quarterly board meetings of family trust.',
    why_peers_global: 'Alignment with collaborative ecosystem rather than purely transactional referral networks.',
    role_understanding: 'An orchestrator who identifies, grooms, and empowers Industry Directors to run thriving Circles.',
    performance_tenure_accepted: true,
  })

  // Section G: References
  const [secG, setSecG] = useState({
    ref_1_name: 'Dr. Sunil Mehta',
    ref_1_relationship: 'Business Client & Mentor',
    ref_1_mobile: '+91 9822001122',
    ref_1_years: '6',
    ref_2_name: 'Sunita Trivedi',
    ref_2_relationship: 'Chamber Director',
    ref_2_mobile: '+91 9822003344',
    ref_2_years: '4',
  })

  // Section H: Documents
  const [secH, setSecH] = useState({
    id_proof_url: '',
    business_proof_url: '',
    deck_url: '',
  })

  // Restore draft from localStorage on mount
  useEffect(() => {
    const draftKey = `peers_form2_draft_${nominationId}`
    try {
      const saved = localStorage.getItem(draftKey)
      if (saved) {
        const parsed = JSON.parse(saved)
        if (parsed.secA) setSecA(parsed.secA)
        if (parsed.secB) setSecB(parsed.secB)
        if (parsed.secC) setSecC(parsed.secC)
        if (parsed.benchMembers) setBenchMembers(parsed.benchMembers)
        if (parsed.benchDeclaration !== undefined) setBenchDeclaration(parsed.benchDeclaration)
        if (parsed.secE) setSecE(parsed.secE)
        if (parsed.secF) setSecF(parsed.secF)
        if (parsed.secG) setSecG(parsed.secG)
        if (parsed.secH) setSecH(parsed.secH)
        setDraftSavedAt(parsed.savedAt || 'Restored')
      }
    } catch {
      // ignore
    }

    // Check if session has verified email
    const sessionVerified = sessionStorage.getItem(`peers_form2_verified_${nominationId}`)
    if (sessionVerified) {
      setIsVerified(true)
      setVerifyEmailInput(sessionVerified)
    }
  }, [nominationId])

  // Auto-save draft
  const saveDraft = () => {
    const draftKey = `peers_form2_draft_${nominationId}`
    const nowStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    const dataToSave = {
      secA,
      secB,
      secC,
      benchMembers,
      benchDeclaration,
      secE,
      secF,
      secG,
      secH,
      savedAt: nowStr,
    }
    try {
      localStorage.setItem(draftKey, JSON.stringify(dataToSave))
      setDraftSavedAt(nowStr)
    } catch {
      // ignore
    }
  }

  // Handle email verification check
  const handleVerifyEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    setVerifyError(null)
    setVerifySuccessMsg(null)

    const clean = verifyEmailInput.trim().toLowerCase()
    if (!clean || !clean.includes('@')) {
      setVerifyError('Please enter a valid email address.')
      return
    }

    setIsVerifying(true)
    try {
      const res = await leadershipApi.verifyForm2Email(nominationId, clean)
      if (res.success) {
        setIsVerified(true)
        setVerifySuccessMsg('Email verified successfully. Form 2 unlocked.')
        sessionStorage.setItem(`peers_form2_verified_${nominationId}`, clean)
      } else {
        setVerifyError(res.message || 'Email mismatch: The entered email address does not match this nomination application.')
      }
    } catch (err: any) {
      setVerifyError(err.message || 'Verification failed. Please try again.')
    } finally {
      setIsVerifying(false)
    }
  }

  // Handle document upload
  const handleFileUpload = async (fieldKey: 'secA_registration' | 'id_proof' | 'business_proof' | 'deck', file: File) => {
    if (file.size > 10 * 1024 * 1024) {
      alert('File size exceeds the 10MB limit. Please upload a smaller file.')
      return
    }

    setUploadingField(fieldKey)
    try {
      const res = await leadershipApi.uploadForm2Document(nominationId, file, fieldKey)
      if (res.success && res.url) {
        if (fieldKey === 'secA_registration') {
          setSecA((prev) => ({ ...prev, registration_doc_url: res.url }))
        } else if (fieldKey === 'id_proof') {
          setSecH((prev) => ({ ...prev, id_proof_url: res.url }))
        } else if (fieldKey === 'business_proof') {
          setSecH((prev) => ({ ...prev, business_proof_url: res.url }))
        } else if (fieldKey === 'deck') {
          setSecH((prev) => ({ ...prev, deck_url: res.url }))
        }
        saveDraft()
      } else {
        alert(res.message || 'Upload failed. Please try again.')
      }
    } catch (err: any) {
      alert(err.message || 'Upload error. Please try again.')
    } finally {
      setUploadingField(null)
    }
  }

  // Add bench member card
  const handleAddBenchMember = () => {
    setBenchMembers((prev) => [
      ...prev,
      {
        name: '',
        mobile: '',
        city: '',
        industry: '',
        relationship: 'Association Colleague',
        status: 'Spoken, interested',
        proposed_role: targetRoleTitle,
        timeline: '90',
      },
    ])
    saveDraft()
  }

  // Remove bench member card
  const handleRemoveBenchMember = (index: number) => {
    setBenchMembers((prev) => prev.filter((_, i) => i !== index))
    saveDraft()
  }

  // Update bench member field
  const handleUpdateBenchMember = (index: number, key: keyof Form2BenchMember, value: string) => {
    setBenchMembers((prev) => {
      const updated = [...prev]
      updated[index] = { ...updated[index], [key]: value }
      return updated
    })
    saveDraft()
  }

  // Final submit Form 2
  const handleSubmitForm2 = async () => {
    setSubmitError(null)

    // Validation checks
    if (benchMembers.length < minRequiredBench) {
      setSubmitError(
        `Section D Requirement: You must nominate at least ${minRequiredBench} ${targetRoleTitle}. Currently you have added ${benchMembers.length}.`
      )
      setActiveStep(2)
      return
    }

    if (!benchDeclaration) {
      setSubmitError('Please accept the Section D Leadership Bench Declaration before submitting.')
      setActiveStep(2)
      return
    }

    if (!secF.performance_tenure_accepted) {
      setSubmitError('Please accept the Section F 1-Year Performance-Linked Stewardship Tenure.')
      setActiveStep(3)
      return
    }

    const payload: Form2Payload = {
      email: verifyEmailInput || candidateInfo.masked_email || 'candidate@peersglobal.com',
      section_a_business_credibility: secA,
      section_b_leadership_track_record: secB,
      section_c_network_strength: secC,
      section_d_leadership_bench: {
        declaration_confirmed: benchDeclaration,
        bench_members: benchMembers,
      },
      section_e_12_month_plan: secE,
      section_f_commitment_fit: secF,
      section_g_references: secG,
      section_h_documents: secH,
    }

    setIsSubmitting(true)
    try {
      const res = await leadershipApi.submitForm2(nominationId, payload)
      if (res.success && res.data) {
        setSubmissionResult({
          sub_nomination_id: res.data.sub_nomination_id,
          application_number: res.data.application_number,
        })
        // Clear local draft
        try {
          localStorage.removeItem(`peers_form2_draft_${nominationId}`)
        } catch {
          // ignore
        }
      } else {
        setSubmitError(res.message || 'Submission failed. Please review your entries and try again.')
      }
    } catch (err: any) {
      setSubmitError(err.message || 'An unexpected error occurred during submission.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // -------------------------------------------------------------------------
  // Case A: Candidate Already Submitted or Submission Complete
  // -------------------------------------------------------------------------
  if (candidateInfo.is_submitted || candidateInfo.form_2_status === 'submitted' || submissionResult) {
    const finalAppNo =
      submissionResult?.application_number ||
      `${candidateInfo.application_number || 'PG-2026-00006'}-F2`

    return (
      <div className="min-h-screen bg-[#020817] text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="relative rounded-3xl bg-slate-900/80 border border-amber-500/30 p-8 sm:p-12 shadow-2xl backdrop-blur-xl text-center overflow-hidden">
            {/* Ambient gold glow */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6 shadow-inner shadow-amber-500/20">
                <ShieldCheck className="w-10 h-10" />
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide uppercase mb-3">
                <Check className="w-3.5 h-3.5" />
                Form 2 Locked & Under Jury Scrutiny
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Jury Evaluation Portfolio Submitted
              </h1>
              <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-lg">
                Thank you, <span className="font-semibold text-white">{candidateInfo.candidate_name}</span>. Your leadership bench and credibility portfolio have been recorded.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md text-left">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                    Application Reference
                  </div>
                  <div className="text-base font-bold text-amber-400 mt-1 font-mono">
                    {finalAppNo}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                    Candidate Role
                  </div>
                  <div className="text-base font-bold text-white mt-1">
                    {candidateInfo.role_name}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 sm:col-span-2">
                  <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                    Campaign Scope
                  </div>
                  <div className="text-sm font-semibold text-slate-200 mt-1">
                    {candidateInfo.campaign_name}
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-xl bg-blue-950/40 border border-blue-800/50 text-xs sm:text-sm text-blue-200 text-left max-w-md space-y-2">
                <div className="font-bold text-blue-100 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  What Happens Next?
                </div>
                <p className="text-slate-300 leading-relaxed">
                  The Central Jury Committee is evaluating your business credibility and verified leadership bench. composite scores will be synthesized alongside the member endorsement registry.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href={`/leadership/campaigns/${campaignId}`}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Return to Campaign Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // -------------------------------------------------------------------------
  // Case B: Email Verification Gate (Mismatch Prevention)
  // -------------------------------------------------------------------------
  if (!isVerified) {
    return (
      <div className="min-h-screen bg-[#020817] text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto space-y-6">
          {/* Header pill */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-wide uppercase">
              <Lock className="w-3.5 h-3.5" />
              Nominee Authentication Gate
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Form 2: Jury Evaluation Data
            </h1>
            <p className="text-sm text-slate-400">
              Exclusive submission portal for shortlisted leadership nominees.
            </p>
          </div>

          {/* Nominee Profile summary card */}
          <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 backdrop-blur-xl space-y-4 shadow-xl">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
                  Nominee Application
                </span>
                <h3 className="text-lg font-bold text-white mt-0.5">
                  {candidateInfo.candidate_name}
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-400">
                {candidateInfo.status.toUpperCase()}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-800 text-xs">
              <div>
                <span className="text-slate-500">Target Role</span>
                <p className="font-semibold text-slate-200 mt-0.5">{candidateInfo.role_name}</p>
              </div>
              <div>
                <span className="text-slate-500">Application Number</span>
                <p className="font-mono font-semibold text-slate-200 mt-0.5">
                  {candidateInfo.application_number}
                </p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300 flex items-center justify-between">
              <span className="text-slate-400">Registered Email Hint:</span>
              <span className="font-mono font-semibold text-amber-400">
                {candidateInfo.masked_email}
              </span>
            </div>
          </div>

          {/* Verification Challenge Card */}
          <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-5">
            <div className="space-y-1">
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                Confirm Registered Email Address
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                To prevent mismatch and safeguard evaluation integrity, enter the email address you registered during your initial nomination.
              </p>
            </div>

            {verifyError && (
              <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs sm:text-sm flex items-start gap-3 animate-in fade-in">
                <AlertCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-rose-200">Email Verification Failed</p>
                  <p className="mt-0.5 text-rose-300/90">{verifyError}</p>
                </div>
              </div>
            )}

            {verifySuccessMsg && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{verifySuccessMsg}</span>
              </div>
            )}

            <form onSubmit={handleVerifyEmail} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Nominee Registered Email <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    type="email"
                    required
                    value={verifyEmailInput}
                    onChange={(e) => setVerifyEmailInput(e.target.value)}
                    placeholder="e.g. harshchauhan9724@gmail.com"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isVerifying}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
              >
                {isVerifying ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    Verifying Email...
                  </>
                ) : (
                  <>
                    Verify & Unlock Form 2
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            <div className="pt-2 text-center">
              <span className="text-xs text-slate-500">
                Having trouble accessing Form 2? Contact Leadership Secretariat at{' '}
                <a
                  href="mailto:secretariat@peersglobal.com"
                  className="text-blue-400 hover:underline"
                >
                  secretariat@peersglobal.com
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // -------------------------------------------------------------------------
  // Case C: Form 2 Questionnaire Wizard (Verified Nominee)
  // -------------------------------------------------------------------------
  const stepTitles = [
    { id: 1, title: 'Business & Track Record', short: 'A & B: Credibility' },
    { id: 2, title: 'Network & Leadership Bench', short: 'C & D: Bench Pipeline' },
    { id: 3, title: 'Roadmap & Commitment', short: 'E & F: 12-Mo Plan' },
    { id: 4, title: 'References & Documents', short: 'G & H: Proofs' },
    { id: 5, title: 'Review & Submit', short: 'Final Review' },
  ]

  return (
    <div className="min-h-screen bg-[#020817] text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Top Header Card */}
        <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  Email Verified: {verifyEmailInput || candidateInfo.masked_email}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-400">
                  App: {candidateInfo.application_number}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Form 2: Jury Evaluation Data Form
              </h1>
              <p className="text-xs sm:text-sm text-slate-400">
                {candidateInfo.campaign_name} • Candidate:{' '}
                <span className="text-white font-medium">{candidateInfo.candidate_name}</span> (
                {candidateInfo.role_name})
              </p>
            </div>

            {/* Auto save indicator */}
            <div className="flex items-center gap-3">
              {draftSavedAt && (
                <div className="text-xs text-slate-400 flex items-center gap-1.5 bg-slate-950/60 px-3 py-1.5 rounded-xl border border-slate-800">
                  <Save className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Draft saved at {draftSavedAt}</span>
                </div>
              )}
              <button
                type="button"
                onClick={saveDraft}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition"
              >
                Save Draft
              </button>
            </div>
          </div>

          {/* Stepper Tabs */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-5 gap-2 border-t border-slate-800/80 pt-6">
            {stepTitles.map((step) => {
              const isActive = activeStep === step.id
              const isDone = activeStep > step.id
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`flex flex-col text-left p-3 rounded-xl border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-blue-600/15 border-blue-500 text-white shadow-md shadow-blue-500/10'
                      : isDone
                      ? 'bg-slate-950/60 border-slate-700/60 text-slate-300 hover:bg-slate-800/40'
                      : 'bg-slate-950/30 border-slate-800/60 text-slate-500 hover:text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-bold mb-1">
                    <span className={isActive ? 'text-blue-400' : isDone ? 'text-emerald-400' : 'text-slate-500'}>
                      Step {step.id}
                    </span>
                    {isDone && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                  </div>
                  <span className="text-xs font-semibold truncate">{step.short}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Global Error Notice */}
        {submitError && (
          <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-rose-200">Attention Required</p>
              <p className="mt-0.5">{submitError}</p>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* STEP 1: SECTION A & SECTION B                                     */}
        {/* ================================================================= */}
        {activeStep === 1 && (
          <div className="space-y-6">
            {/* Section A */}
            <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl shadow-xl space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">Section A: Business Credibility</h2>
                  <p className="text-xs text-slate-400">
                    Enterprise scale, incorporation details, and audited standing.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Business / Industry Sector <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={secA.business_type}
                    onChange={(e) => {
                      setSecA({ ...secA, business_type: e.target.value })
                      saveDraft()
                    }}
                    placeholder="e.g. IT Services / Consulting"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Year Founded <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="number"
                    value={secA.year_founded}
                    onChange={(e) => {
                      setSecA({ ...secA, year_founded: e.target.value })
                      saveDraft()
                    }}
                    placeholder="e.g. 2018"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Annual Turnover Band <span className="text-rose-400">*</span>
                  </label>
                  <select
                    value={secA.annual_turnover_band}
                    onChange={(e) => {
                      setSecA({ ...secA, annual_turnover_band: e.target.value })
                      saveDraft()
                    }}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="< ₹1 Cr">&lt; ₹1 Cr</option>
                    <option value="₹1 Cr - ₹5 Cr">₹1 Cr - ₹5 Cr</option>
                    <option value="₹5 Cr - ₹25 Cr">₹5 Cr - ₹25 Cr</option>
                    <option value="₹25 Cr - ₹100 Cr">₹25 Cr - ₹100 Cr</option>
                    <option value="₹100 Cr+">₹100 Cr+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Core Team Size (Headcount) <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="number"
                    value={secA.team_size}
                    onChange={(e) => {
                      setSecA({ ...secA, team_size: e.target.value })
                      saveDraft()
                    }}
                    placeholder="e.g. 25"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Key Business Milestones & Scale Achievements <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={secA.achievements}
                    onChange={(e) => {
                      setSecA({ ...secA, achievements: e.target.value })
                      saveDraft()
                    }}
                    placeholder="1. Scaled across 3 states&#10;2. Over 100 enterprise clients&#10;3. ISO 9001 certified"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    GST / Incorporation Certificate Proof (PDF / Image up to 10MB)
                  </label>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                    <label className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-200 cursor-pointer transition flex items-center gap-2">
                      <Upload className="w-3.5 h-3.5" />
                      {uploadingField === 'secA_registration' ? 'Uploading...' : 'Upload Document'}
                      <input
                        type="file"
                        accept=".pdf,.png,.jpg,.jpeg"
                        className="hidden"
                        onChange={(e) => {
                          const f = e.target.files?.[0]
                          if (f) handleFileUpload('secA_registration', f)
                        }}
                      />
                    </label>
                    {secA.registration_doc_url ? (
                      <div className="flex items-center gap-2 text-xs text-emerald-400">
                        <Check className="w-4 h-4" />
                        <span className="truncate max-w-xs">{secA.registration_doc_url}</span>
                      </div>
                    ) : (
                      <span className="text-xs text-slate-500">No document uploaded yet</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Section B */}
            <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl shadow-xl space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">
                    Section B: Leadership Track Record
                  </h2>
                  <p className="text-xs text-slate-400">
                    Governance experience, leaders mentored, and resilience history.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Past Leadership & Executive Roles <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={secB.leadership_roles}
                    onChange={(e) => {
                      setSecB({ ...secB, leadership_roles: e.target.value })
                      saveDraft()
                    }}
                    placeholder="e.g. VP of Business Development (ABC Corp, 4 yrs, 15 members led)"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Largest Business Community or Network Led <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={secB.largest_community}
                    onChange={(e) => {
                      setSecB({ ...secB, largest_community: e.target.value })
                      saveDraft()
                    }}
                    placeholder="e.g. Tech Founders Gujarat - 450 founders, Co-founder & Convenor"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Specific Leaders Mentored / Developed <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={3}
                    value={secB.developed_leaders}
                    onChange={(e) => {
                      setSecB({ ...secB, developed_leaders: e.target.value })
                      saveDraft()
                    }}
                    placeholder="1. Rajesh Patel (now VP at FinTech)&#10;2. Priya Shah (Circle Lead)"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Crucial Leadership Failure & Primary Learning <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={3}
                    value={secB.leadership_failure_learning}
                    onChange={(e) => {
                      setSecB({ ...secB, leadership_failure_learning: e.target.value })
                      saveDraft()
                    }}
                    placeholder="Describe a significant operational setback and what delegation or governance insight you gained..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setActiveStep(2)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition flex items-center gap-2 cursor-pointer"
              >
                Continue to Network & Bench
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* STEP 2: SECTION C & SECTION D (LEADERSHIP BENCH PIPELINE)         */}
        {/* ================================================================= */}
        {activeStep === 2 && (
          <div className="space-y-6">
            {/* Section C */}
            <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl shadow-xl space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Network className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">Section C: Network Strength</h2>
                  <p className="text-xs text-slate-400">
                    Industry bodies, institutional ties, and corporate partner ecosystems.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Industry Associations & Chambers <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={secC.associations}
                    onChange={(e) => {
                      setSecC({ ...secC, associations: e.target.value })
                      saveDraft()
                    }}
                    placeholder="e.g. CII, TiE Ahmedabad, BNI Chapter President"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Institutional & Alumni Access <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={secC.institutions_access}
                    onChange={(e) => {
                      setSecC({ ...secC, institutions_access: e.target.value })
                      saveDraft()
                    }}
                    placeholder="e.g. IIM Ahmedabad alumni network, HDFC corporate banking division"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Corporate Sponsors & Strategic Partners <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={secC.sponsors_partners}
                    onChange={(e) => {
                      setSecC({ ...secC, sponsors_partners: e.target.value })
                      saveDraft()
                    }}
                    placeholder="e.g. TechVentures Capital, Reliance Retail regional logistics"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Section D: Leadership Bench */}
            <div className="rounded-3xl bg-slate-900/80 border border-amber-500/30 p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      Section D: Leadership Bench Pipeline
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-semibold">
                        Core Requirement
                      </span>
                    </h2>
                    <p className="text-xs text-slate-400">
                      Identify and nominate prospective leaders to govern under your tenure.
                    </p>
                  </div>
                </div>

                {/* Counter status badge */}
                <div
                  className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-2 ${
                    benchMembers.length >= minRequiredBench
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                      : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                  }`}
                >
                  {benchMembers.length >= minRequiredBench ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <AlertCircle className="w-4 h-4" />
                  )}
                  <span>
                    {benchMembers.length} / {minRequiredBench} {targetRoleTitle} Added
                  </span>
                </div>
              </div>

              {/* Requirement Alert Banner */}
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-amber-200/90 space-y-1">
                <div className="font-bold text-amber-200 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  {candidateInfo.role_name} Minimum Bench Requirement:
                </div>
                <p className="text-slate-300">
                  {candidateInfo.bench_requirement?.description ||
                    `You must name at least ${minRequiredBench} prospective ${targetRoleTitle}.`}
                </p>
              </div>

              {/* Dynamic Leader Cards */}
              <div className="space-y-4">
                {benchMembers.map((member, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-slate-700/80 transition-all space-y-4"
                  >
                    <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-bold flex items-center justify-center">
                          {index + 1}
                        </span>
                        <span className="text-sm font-bold text-slate-200">
                          {member.name || `Leader Candidate #${index + 1}`}
                        </span>
                        {member.status && (
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                              member.status === 'Committed'
                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                                : member.status === 'Spoken, interested'
                                ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30'
                                : 'bg-slate-800 text-slate-400'
                            }`}
                          >
                            {member.status}
                          </span>
                        )}
                      </div>

                      {benchMembers.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveBenchMember(index)}
                          className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1 cursor-pointer transition"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          Remove
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-1">
                          Candidate Full Name <span className="text-rose-400">*</span>
                        </label>
                        <input
                          type="text"
                          value={member.name}
                          onChange={(e) => handleUpdateBenchMember(index, 'name', e.target.value)}
                          placeholder="e.g. Amit Shah"
                          className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-1">
                          Mobile Number <span className="text-rose-400">*</span>
                        </label>
                        <input
                          type="tel"
                          value={member.mobile}
                          onChange={(e) => handleUpdateBenchMember(index, 'mobile', e.target.value)}
                          placeholder="+91 9876543210"
                          className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-1">
                          City / Region <span className="text-rose-400">*</span>
                        </label>
                        <input
                          type="text"
                          value={member.city}
                          onChange={(e) => handleUpdateBenchMember(index, 'city', e.target.value)}
                          placeholder="e.g. Ahmedabad"
                          className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-1">
                          Industry Cluster <span className="text-rose-400">*</span>
                        </label>
                        <input
                          type="text"
                          value={member.industry}
                          onChange={(e) =>
                            handleUpdateBenchMember(index, 'industry', e.target.value)
                          }
                          placeholder="e.g. Manufacturing / Textiles"
                          className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-1">
                          Relationship / Context <span className="text-rose-400">*</span>
                        </label>
                        <input
                          type="text"
                          value={member.relationship}
                          onChange={(e) =>
                            handleUpdateBenchMember(index, 'relationship', e.target.value)
                          }
                          placeholder="e.g. Association Colleague"
                          className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-1">
                          Proposed Role / Circle <span className="text-rose-400">*</span>
                        </label>
                        <input
                          type="text"
                          value={member.proposed_role}
                          onChange={(e) =>
                            handleUpdateBenchMember(index, 'proposed_role', e.target.value)
                          }
                          placeholder="e.g. Industry Director - Textiles"
                          className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-1">
                          Candidate Status <span className="text-rose-400">*</span>
                        </label>
                        <select
                          value={member.status}
                          onChange={(e) => handleUpdateBenchMember(index, 'status', e.target.value)}
                          className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                        >
                          <option value="Committed">Committed</option>
                          <option value="Spoken, interested">Spoken, interested</option>
                          <option value="Not yet approached">Not yet approached</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-1">
                          Onboarding Timeline <span className="text-rose-400">*</span>
                        </label>
                        <select
                          value={member.timeline}
                          onChange={(e) =>
                            handleUpdateBenchMember(index, 'timeline', e.target.value)
                          }
                          className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                        >
                          <option value="30">Within 30 Days</option>
                          <option value="90">Within 90 Days</option>
                          <option value="180">Within 180 Days</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add leader button */}
              <button
                type="button"
                onClick={handleAddBenchMember}
                className="w-full py-3 rounded-2xl bg-slate-950/80 border border-dashed border-slate-700 hover:border-blue-500 text-blue-400 hover:text-blue-300 text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                Add Another {targetRoleTitle} Candidate
              </button>

              {/* Declaration Checkbox */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={benchDeclaration}
                    onChange={(e) => {
                      setBenchDeclaration(e.target.checked)
                      saveDraft()
                    }}
                    className="mt-1 w-4 h-4 rounded border-slate-700 text-blue-600 focus:ring-blue-500 bg-slate-900"
                  />
                  <span className="text-xs text-slate-300 leading-relaxed">
                    <strong className="text-white">Solemn Leadership Bench Declaration:</strong> I
                    solemnly declare that I have spoken or identified these prospective leaders and
                    affirm their standing, willingness, and competence to serve under my leadership
                    tenure.
                  </span>
                </label>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => setActiveStep(1)}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-2 cursor-pointer transition"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Credibility
              </button>

              <button
                type="button"
                onClick={() => setActiveStep(3)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition flex items-center gap-2 cursor-pointer"
              >
                Continue to Roadmap & Fit
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* STEP 3: SECTION E & SECTION F                                     */}
        {/* ================================================================= */}
        {activeStep === 3 && (
          <div className="space-y-6">
            {/* Section E */}
            <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl shadow-xl space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">Section E: 12-Month Execution Plan</h2>
                  <p className="text-xs text-slate-400">
                    Concrete milestones, first 90 days sprint, and risk mitigation.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Quantitative 6-Month & 12-Month Targets <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={3}
                    value={secE.targets_6_12_months}
                    onChange={(e) => {
                      setSecE({ ...secE, targets_6_12_months: e.target.value })
                      saveDraft()
                    }}
                    placeholder="6 Months: 4 Circles, 12 IDs. 12 Months: 10 Circles, 30 IDs, 150 Peers."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    First 90 Days High-Impact Action Plan <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={secE.first_90_days}
                    onChange={(e) => {
                      setSecE({ ...secE, first_90_days: e.target.value })
                      saveDraft()
                    }}
                    placeholder="1. Onboard 7 committed IDs&#10;2. Host 2 discovery conclaves&#10;3. Form Surat & Vadodara launch core teams"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Funding & Resourcing Strategy <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={3}
                    value={secE.funding_plan}
                    onChange={(e) => {
                      setSecE({ ...secE, funding_plan: e.target.value })
                      saveDraft()
                    }}
                    placeholder="Outline how you will finance outreach events, meeting spaces, and administrative collateral..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Biggest Anticipated Risk & Mitigation Strategy <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={3}
                    value={secE.biggest_risk}
                    onChange={(e) => {
                      setSecE({ ...secE, biggest_risk: e.target.value })
                      saveDraft()
                    }}
                    placeholder="e.g. Candidate drop-off during onboarding. Mitigation: structured weekly peer reviews and buddy system."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Section F */}
            <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl shadow-xl space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">Section F: Commitment & Cultural Fit</h2>
                  <p className="text-xs text-slate-400">
                    Dedicated weekly hours, conflict disclosure, and Give-First ethos alignment.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Weekly Time Commitment Dedicated to Role <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={secF.hours_per_week}
                    onChange={(e) => {
                      setSecF({ ...secF, hours_per_week: e.target.value })
                      saveDraft()
                    }}
                    placeholder="e.g. 10-12 hours / week (Tue & Sat availability)"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Competing Board or Business Commitments <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={secF.competing_commitments}
                    onChange={(e) => {
                      setSecF({ ...secF, competing_commitments: e.target.value })
                      saveDraft()
                    }}
                    placeholder="e.g. Quarterly board meetings of family trust."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Why Peers Global? (Alignment with Give-First Ethos){' '}
                    <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={3}
                    value={secF.why_peers_global}
                    onChange={(e) => {
                      setSecF({ ...secF, why_peers_global: e.target.value })
                      saveDraft()
                    }}
                    placeholder="Contrast our ecosystem approach against purely transactional referral networks..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Understanding of Leadership Stewardship in this Role{' '}
                    <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={3}
                    value={secF.role_understanding}
                    onChange={(e) => {
                      setSecF({ ...secF, role_understanding: e.target.value })
                      saveDraft()
                    }}
                    placeholder="e.g. An orchestrator who identifies, grooms, and empowers Industry Directors to run thriving Circles."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={secF.performance_tenure_accepted}
                      onChange={(e) => {
                        setSecF({ ...secF, performance_tenure_accepted: e.target.checked })
                        saveDraft()
                      }}
                      className="mt-1 w-4 h-4 rounded border-slate-700 text-blue-600 focus:ring-blue-500 bg-slate-900"
                    />
                    <span className="text-xs text-slate-300 leading-relaxed">
                      <strong className="text-white">1-Year Stewardship Tenure:</strong> I
                      acknowledge and accept that Peers Global leadership positions are 1-year
                      tenures governed by quarterly peer milestones and performance benchmarks.
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => setActiveStep(2)}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-2 cursor-pointer transition"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Bench
              </button>

              <button
                type="button"
                onClick={() => setActiveStep(4)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition flex items-center gap-2 cursor-pointer"
              >
                Continue to References & Documents
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* STEP 4: SECTION G (REFERENCES) & SECTION H (DOCUMENTS)            */}
        {/* ================================================================= */}
        {activeStep === 4 && (
          <div className="space-y-6">
            {/* Section G */}
            <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl shadow-xl space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">Section G: Professional References</h2>
                  <p className="text-xs text-slate-400">
                    Two established industry or chamber references who can vouch for your integrity.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Reference 1 */}
                <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
                  <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                    Reference 1
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">
                      Full Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={secG.ref_1_name}
                      onChange={(e) => {
                        setSecG({ ...secG, ref_1_name: e.target.value })
                        saveDraft()
                      }}
                      placeholder="Dr. Sunil Mehta"
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">
                      Relationship & Designation <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={secG.ref_1_relationship}
                      onChange={(e) => {
                        setSecG({ ...secG, ref_1_relationship: e.target.value })
                        saveDraft()
                      }}
                      placeholder="Business Client & Mentor"
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1">
                        Mobile <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="tel"
                        value={secG.ref_1_mobile}
                        onChange={(e) => {
                          setSecG({ ...secG, ref_1_mobile: e.target.value })
                          saveDraft()
                        }}
                        placeholder="+91 9822001122"
                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1">
                        Years Known <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="number"
                        value={secG.ref_1_years}
                        onChange={(e) => {
                          setSecG({ ...secG, ref_1_years: e.target.value })
                          saveDraft()
                        }}
                        placeholder="6"
                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Reference 2 */}
                <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
                  <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                    Reference 2
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">
                      Full Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={secG.ref_2_name}
                      onChange={(e) => {
                        setSecG({ ...secG, ref_2_name: e.target.value })
                        saveDraft()
                      }}
                      placeholder="Sunita Trivedi"
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">
                      Relationship & Designation <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={secG.ref_2_relationship}
                      onChange={(e) => {
                        setSecG({ ...secG, ref_2_relationship: e.target.value })
                        saveDraft()
                      }}
                      placeholder="Chamber Director"
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1">
                        Mobile <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="tel"
                        value={secG.ref_2_mobile}
                        onChange={(e) => {
                          setSecG({ ...secG, ref_2_mobile: e.target.value })
                          saveDraft()
                        }}
                        placeholder="+91 9822003344"
                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1">
                        Years Known <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="number"
                        value={secG.ref_2_years}
                        onChange={(e) => {
                          setSecG({ ...secG, ref_2_years: e.target.value })
                          saveDraft()
                        }}
                        placeholder="4"
                        className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section H */}
            <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl shadow-xl space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">Section H: Document Proofs</h2>
                  <p className="text-xs text-slate-400">
                    Upload official KYC proof, business certificates, or profile deck.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* ID Proof */}
                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
                  <div className="text-xs font-bold text-white">Identity Proof</div>
                  <p className="text-xs text-slate-400">
                    Aadhaar, Passport, or Voter ID (PDF/JPG up to 10MB)
                  </p>
                  <label className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-200 cursor-pointer transition flex items-center justify-center gap-2">
                    <Upload className="w-3.5 h-3.5" />
                    {uploadingField === 'id_proof' ? 'Uploading...' : 'Choose File'}
                    <input
                      type="file"
                      accept=".pdf,.png,.jpg,.jpeg"
                      className="hidden"
                      onChange={(e) => {
                        const f = e.target.files?.[0]
                        if (f) handleFileUpload('id_proof', f)
                      }}
                    />
                  </label>
                  {secH.id_proof_url ? (
                    <div className="text-xs text-emerald-400 flex items-center gap-1.5 truncate">
                      <Check className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="truncate">{secH.id_proof_url}</span>
                    </div>
                  ) : (
                    <span className="text-xs text-slate-500 block">Not uploaded</span>
                  )}
                </div>

                {/* Business Proof */}
                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
                  <div className="text-xs font-bold text-white">Business Proof</div>
                  <p className="text-xs text-slate-400">
                    GST Certificate or MCA Incorporation (PDF/JPG up to 10MB)
                  </p>
                  <label className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-200 cursor-pointer transition flex items-center justify-center gap-2">
                    <Upload className="w-3.5 h-3.5" />
                    {uploadingField === 'business_proof' ? 'Uploading...' : 'Choose File'}
                    <input
                      type="file"
                      accept=".pdf,.png,.jpg,.jpeg"
                      className="hidden"
                      onChange={(e) => {
                        const f = e.target.files?.[0]
                        if (f) handleFileUpload('business_proof', f)
                      }}
                    />
                  </label>
                  {secH.business_proof_url ? (
                    <div className="text-xs text-emerald-400 flex items-center gap-1.5 truncate">
                      <Check className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="truncate">{secH.business_proof_url}</span>
                    </div>
                  ) : (
                    <span className="text-xs text-slate-500 block">Not uploaded</span>
                  )}
                </div>

                {/* Presentation Deck */}
                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
                  <div className="text-xs font-bold text-white">Profile / Pitch Deck</div>
                  <p className="text-xs text-slate-400">
                    Candidate or Company Overview Deck (PDF/PPT up to 10MB)
                  </p>
                  <label className="w-full py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-200 cursor-pointer transition flex items-center justify-center gap-2">
                    <Upload className="w-3.5 h-3.5" />
                    {uploadingField === 'deck' ? 'Uploading...' : 'Choose File'}
                    <input
                      type="file"
                      accept=".pdf,.ppt,.pptx"
                      className="hidden"
                      onChange={(e) => {
                        const f = e.target.files?.[0]
                        if (f) handleFileUpload('deck', f)
                      }}
                    />
                  </label>
                  {secH.deck_url ? (
                    <div className="text-xs text-emerald-400 flex items-center gap-1.5 truncate">
                      <Check className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="truncate">{secH.deck_url}</span>
                    </div>
                  ) : (
                    <span className="text-xs text-slate-500 block">Not uploaded</span>
                  )}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => setActiveStep(3)}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-2 cursor-pointer transition"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Roadmap
              </button>

              <button
                type="button"
                onClick={() => setActiveStep(5)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition flex items-center gap-2 cursor-pointer"
              >
                Review Application
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* STEP 5: REVIEW & FINAL SUBMISSION                                 */}
        {/* ================================================================= */}
        {activeStep === 5 && (
          <div className="space-y-6">
            <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Final Scrutiny Check
                </span>
                <h2 className="text-xl font-bold text-white mt-1">
                  Review Your Form 2 Evaluation Portfolio
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                  Please inspect your entries before final submission to the Central Jury Panel.
                </p>
              </div>

              {/* Summary Cards */}
              <div className="space-y-4 text-xs sm:text-sm">
                {/* Summary: Section A */}
                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-blue-400 uppercase text-xs">
                      Section A: Business Credibility
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveStep(1)}
                      className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
                    >
                      Edit
                    </button>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-slate-300">
                    <div>
                      <span className="text-slate-500 block">Sector</span>
                      <strong className="text-white">{secA.business_type}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Founded</span>
                      <strong className="text-white">{secA.year_founded}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Turnover</span>
                      <strong className="text-white">{secA.annual_turnover_band}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Headcount</span>
                      <strong className="text-white">{secA.team_size} members</strong>
                    </div>
                  </div>
                </div>

                {/* Summary: Section D Bench */}
                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-amber-400 uppercase text-xs">
                      Section D: Leadership Bench ({benchMembers.length} Leaders Added)
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveStep(2)}
                      className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
                    >
                      Edit
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-slate-300">
                    {benchMembers.map((m, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-slate-900 border border-slate-800/80 text-xs flex items-center justify-between"
                      >
                        <div>
                          <p className="font-bold text-white">{m.name}</p>
                          <p className="text-slate-400 text-[11px]">
                            {m.proposed_role} • {m.city}
                          </p>
                        </div>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20">
                          {m.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Summary: Section E & F */}
                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-purple-400 uppercase text-xs">
                      Section E & F: Roadmap & Commitment
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveStep(3)}
                      className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
                    >
                      Edit
                    </button>
                  </div>
                  <div className="text-slate-300 space-y-1">
                    <p>
                      <span className="text-slate-500">Weekly Hours:</span>{' '}
                      <strong className="text-white">{secF.hours_per_week}</strong>
                    </p>
                    <p>
                      <span className="text-slate-500">Targets:</span> {secE.targets_6_12_months}
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-slate-800 space-y-4">
                <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-800/50 text-xs text-blue-200">
                  <p>
                    <strong>Submission Confirmation:</strong> Once submitted, your Form 2 answers
                    will be locked and forwarded directly to the Jury Scrutiny Panel. You will
                    receive a sub-nomination confirmation reference.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setActiveStep(4)}
                    className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-2 cursor-pointer transition w-full sm:w-auto justify-center"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Documents
                  </button>

                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={handleSubmitForm2}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-600 hover:from-emerald-400 hover:to-blue-500 text-white font-extrabold text-sm shadow-xl shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        Submitting to Jury Panel...
                      </>
                    ) : (
                      <>
                        <ShieldCheck className="w-5 h-5 text-amber-300" />
                        Submit Completed Form 2 to Jury
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
