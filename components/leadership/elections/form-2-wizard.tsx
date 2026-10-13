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
      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="relative rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-12 shadow-xl text-center overflow-hidden">
            {/* Top brand gradient stripe */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48]" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-6 shadow-xs">
                <ShieldCheck className="w-10 h-10" />
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold tracking-wide uppercase mb-3">
                <Check className="w-3.5 h-3.5" />
                Form 2 Locked &amp; Under Jury Scrutiny
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Jury Evaluation Portfolio Submitted
              </h1>
              <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-lg">
                Thank you, <span className="font-bold text-slate-900">{candidateInfo.candidate_name}</span>. Your leadership bench and credibility portfolio have been recorded.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md text-left">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                    Application Reference
                  </div>
                  <div className="text-base font-extrabold brand-gradient-text mt-1 font-mono">
                    {finalAppNo}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                    Candidate Role
                  </div>
                  <div className="text-base font-bold text-slate-900 mt-1">
                    {candidateInfo.role_name}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 sm:col-span-2">
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                    Campaign Scope
                  </div>
                  <div className="text-sm font-semibold text-slate-800 mt-1">
                    {candidateInfo.campaign_name}
                  </div>
                </div>
              </div>

              <div className="mt-8 p-5 rounded-2xl bg-blue-50/70 border border-blue-200 text-xs sm:text-sm text-slate-700 text-left max-w-md space-y-2">
                <div className="font-bold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#1D4ED8]" />
                  What Happens Next?
                </div>
                <p className="text-slate-600 leading-relaxed font-normal">
                  The Central Jury Committee is evaluating your business credibility and verified leadership bench. Composite scores will be synthesized alongside the member endorsement registry.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href={`/leadership/campaigns/${campaignId}`}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/15 transition-all flex items-center gap-2"
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
      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto space-y-6">
          {/* Header pill */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#1D4ED8] text-xs font-bold tracking-wide uppercase">
              <Lock className="w-3.5 h-3.5 text-[#1D4ED8]" />
              Nominee Authentication Gate
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Form 2: <span className="brand-gradient-text">Jury Evaluation Data</span>
            </h1>
            <p className="text-sm text-slate-600">
              Exclusive submission portal for shortlisted leadership nominees.
            </p>
          </div>

          {/* Nominee Profile summary card */}
          <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 space-y-4 shadow-md relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48]" />

            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-slate-500">
                  Nominee Application
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                  {candidateInfo.candidate_name}
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 border border-amber-200 text-amber-700">
                {candidateInfo.status.toUpperCase()}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-100 text-xs">
              <div>
                <span className="text-slate-500 font-medium">Target Role</span>
                <p className="font-bold text-slate-800 mt-0.5">{candidateInfo.role_name}</p>
              </div>
              <div>
                <span className="text-slate-500 font-medium">Application Number</span>
                <p className="font-mono font-bold text-slate-800 mt-0.5">
                  {candidateInfo.application_number}
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center justify-between">
              <span className="text-slate-500 font-medium">Registered Email Hint:</span>
              <span className="font-mono font-bold brand-gradient-text">
                {candidateInfo.masked_email}
              </span>
            </div>
          </div>

          {/* Verification Challenge Card */}
          <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-md space-y-5">
            <div className="space-y-1">
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#1D4ED8]" />
                Confirm Registered Email Address
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                To prevent mismatch and safeguard evaluation integrity, enter the email address you registered during your initial nomination.
              </p>
            </div>

            {verifyError && (
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm flex items-start gap-3 animate-in fade-in">
                <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-rose-800">Email Verification Failed</p>
                  <p className="mt-0.5 text-rose-700">{verifyError}</p>
                </div>
              </div>
            )}

            {verifySuccessMsg && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span className="font-medium">{verifySuccessMsg}</span>
              </div>
            )}

            <form onSubmit={handleVerifyEmail} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5">
                  Nominee Registered Email <span className="text-[#E11D48]">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={verifyEmailInput}
                    onChange={(e) => setVerifyEmailInput(e.target.value)}
                    placeholder="e.g. harshchauhan9724@gmail.com"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition shadow-2xs"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isVerifying}
                className="w-full py-3 px-5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white font-bold text-sm shadow-md shadow-blue-500/15 transition-all flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
              >
                {isVerifying ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    Verifying Email...
                  </>
                ) : (
                  <>
                    Verify &amp; Unlock Form 2
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
                  className="text-[#1D4ED8] font-medium hover:underline"
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
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Top Header Card */}
        <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm relative overflow-hidden">
          {/* Top brand gradient line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48]" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 border border-emerald-200 text-emerald-700">
                  Email Verified: {verifyEmailInput || candidateInfo.masked_email}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-50 border border-blue-200 text-[#1D4ED8] font-mono">
                  App: {candidateInfo.application_number}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Form 2: <span className="brand-gradient-text">Jury Evaluation Data Form</span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-600">
                {candidateInfo.campaign_name} • Candidate:{' '}
                <span className="text-slate-900 font-bold">{candidateInfo.candidate_name}</span> (
                {candidateInfo.role_name})
              </p>
            </div>

            {/* Auto save indicator */}
            <div className="flex items-center gap-3">
              {draftSavedAt && (
                <div className="text-xs text-slate-500 flex items-center gap-1.5 bg-slate-50 px-3.5 py-1.5 rounded-full border border-slate-200">
                  <Save className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Draft saved at {draftSavedAt}</span>
                </div>
              )}
              <button
                type="button"
                onClick={saveDraft}
                className="px-4 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 transition cursor-pointer"
              >
                Save Draft
              </button>
            </div>
          </div>

          {/* Stepper Tabs */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-5 gap-2 border-t border-slate-100 pt-6">
            {stepTitles.map((step) => {
              const isActive = activeStep === step.id
              const isDone = activeStep > step.id
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`flex flex-col text-left p-3 rounded-2xl border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-50/90 to-rose-50/40 border-[#1D4ED8] text-[#1D4ED8] shadow-xs ring-1 ring-blue-500/20 font-bold'
                      : isDone
                      ? 'bg-white border-emerald-200 text-slate-700 hover:bg-slate-50'
                      : 'bg-white border-slate-200 text-slate-400 hover:text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-bold mb-1">
                    <span className={isActive ? 'text-[#1D4ED8]' : isDone ? 'text-emerald-600' : 'text-slate-400'}>
                      Step {step.id}
                    </span>
                    {isDone && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                  </div>
                  <span className={`text-xs truncate ${isActive ? 'font-bold text-slate-900' : 'font-medium'}`}>
                    {step.short}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Global Error Notice */}
        {submitError && (
          <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-sm flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-rose-800">Attention Required</p>
              <p className="mt-0.5 text-rose-700">{submitError}</p>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* STEP 1: SECTION A & SECTION B                                     */}
        {/* ================================================================= */}
        {activeStep === 1 && (
          <div className="space-y-6">
            {/* Section A */}
            <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-6 relative overflow-hidden">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-[#1D4ED8]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Section A: Business Credibility</h2>
                  <p className="text-xs text-slate-500">
                    Enterprise scale, incorporation details, and audited standing.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Business / Industry Sector <span className="text-[#E11D48]">*</span>
                  </label>
                  <input
                    type="text"
                    value={secA.business_type}
                    onChange={(e) => {
                      setSecA({ ...secA, business_type: e.target.value })
                      saveDraft()
                    }}
                    placeholder="e.g. IT Services / Consulting"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition shadow-2xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Year Founded <span className="text-[#E11D48]">*</span>
                  </label>
                  <input
                    type="number"
                    value={secA.year_founded}
                    onChange={(e) => {
                      setSecA({ ...secA, year_founded: e.target.value })
                      saveDraft()
                    }}
                    placeholder="e.g. 2018"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition shadow-2xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Annual Turnover Band <span className="text-[#E11D48]">*</span>
                  </label>
                  <select
                    value={secA.annual_turnover_band}
                    onChange={(e) => {
                      setSecA({ ...secA, annual_turnover_band: e.target.value })
                      saveDraft()
                    }}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition shadow-2xs"
                  >
                    <option value="< ₹1 Cr">&lt; ₹1 Cr</option>
                    <option value="₹1 Cr - ₹5 Cr">₹1 Cr - ₹5 Cr</option>
                    <option value="₹5 Cr - ₹25 Cr">₹5 Cr - ₹25 Cr</option>
                    <option value="₹25 Cr - ₹100 Cr">₹25 Cr - ₹100 Cr</option>
                    <option value="₹100 Cr+">₹100 Cr+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Core Team Size (Headcount) <span className="text-[#E11D48]">*</span>
                  </label>
                  <input
                    type="number"
                    value={secA.team_size}
                    onChange={(e) => {
                      setSecA({ ...secA, team_size: e.target.value })
                      saveDraft()
                    }}
                    placeholder="e.g. 25"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition shadow-2xs"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Key Business Milestones &amp; Scale Achievements <span className="text-[#E11D48]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={secA.achievements}
                    onChange={(e) => {
                      setSecA({ ...secA, achievements: e.target.value })
                      saveDraft()
                    }}
                    placeholder="1. Scaled across 3 states&#10;2. Over 100 enterprise clients&#10;3. ISO 9001 certified"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition shadow-2xs"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    GST / Incorporation Certificate Proof (PDF / Image up to 10MB)
                  </label>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                    <label className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs font-semibold text-slate-700 cursor-pointer transition flex items-center gap-2">
                      <Upload className="w-3.5 h-3.5 text-[#1D4ED8]" />
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
                      <div className="flex items-center gap-2 text-xs text-emerald-700 font-medium">
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span className="truncate max-w-xs">{secA.registration_doc_url}</span>
                      </div>
                    ) : (
                      <span className="text-xs text-slate-400 italic">No document uploaded yet</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Section B */}
            <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-6 relative overflow-hidden">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200/80 flex items-center justify-center text-indigo-600">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Section B: Leadership Track Record
                  </h2>
                  <p className="text-xs text-slate-500">
                    Governance experience, leaders mentored, and resilience history.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Past Leadership &amp; Executive Roles <span className="text-[#E11D48]">*</span>
                  </label>
                  <input
                    type="text"
                    value={secB.leadership_roles}
                    onChange={(e) => {
                      setSecB({ ...secB, leadership_roles: e.target.value })
                      saveDraft()
                    }}
                    placeholder="e.g. VP of Business Development (ABC Corp, 4 yrs, 15 members led)"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition shadow-2xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Largest Business Community or Network Led <span className="text-[#E11D48]">*</span>
                  </label>
                  <input
                    type="text"
                    value={secB.largest_community}
                    onChange={(e) => {
                      setSecB({ ...secB, largest_community: e.target.value })
                      saveDraft()
                    }}
                    placeholder="e.g. Tech Founders Gujarat - 450 founders, Co-founder & Convenor"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition shadow-2xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Specific Leaders Mentored / Developed <span className="text-[#E11D48]">*</span>
                  </label>
                  <textarea
                    rows={3}
                    value={secB.developed_leaders}
                    onChange={(e) => {
                      setSecB({ ...secB, developed_leaders: e.target.value })
                      saveDraft()
                    }}
                    placeholder="1. Rajesh Patel (now VP at FinTech)&#10;2. Priya Shah (Circle Lead)"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition shadow-2xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Crucial Leadership Failure &amp; Primary Learning <span className="text-[#E11D48]">*</span>
                  </label>
                  <textarea
                    rows={3}
                    value={secB.leadership_failure_learning}
                    onChange={(e) => {
                      setSecB({ ...secB, leadership_failure_learning: e.target.value })
                      saveDraft()
                    }}
                    placeholder="Describe a significant operational setback and what delegation or governance insight you gained..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition shadow-2xs"
                  />
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setActiveStep(2)}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/15 transition flex items-center gap-2 cursor-pointer"
              >
                Continue to Network &amp; Bench
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
            <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-6 relative overflow-hidden">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600">
                  <Network className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Section C: Network Strength</h2>
                  <p className="text-xs text-slate-500">
                    Industry bodies, institutional ties, and corporate partner ecosystems.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Industry Associations &amp; Chambers <span className="text-[#E11D48]">*</span>
                  </label>
                  <input
                    type="text"
                    value={secC.associations}
                    onChange={(e) => {
                      setSecC({ ...secC, associations: e.target.value })
                      saveDraft()
                    }}
                    placeholder="e.g. CII, TiE Ahmedabad, BNI Chapter President"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition shadow-2xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Institutional &amp; Alumni Access <span className="text-[#E11D48]">*</span>
                  </label>
                  <input
                    type="text"
                    value={secC.institutions_access}
                    onChange={(e) => {
                      setSecC({ ...secC, institutions_access: e.target.value })
                      saveDraft()
                    }}
                    placeholder="e.g. IIM Ahmedabad alumni network, HDFC corporate banking division"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition shadow-2xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Corporate Sponsors &amp; Strategic Partners <span className="text-[#E11D48]">*</span>
                  </label>
                  <input
                    type="text"
                    value={secC.sponsors_partners}
                    onChange={(e) => {
                      setSecC({ ...secC, sponsors_partners: e.target.value })
                      saveDraft()
                    }}
                    placeholder="e.g. TechVentures Capital, Reliance Retail regional logistics"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition shadow-2xs"
                  />
                </div>
              </div>
            </div>

            {/* Section D: Leadership Bench */}
            <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-rose-400 to-[#1D4ED8]" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      Section D: Leadership Bench Pipeline
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 font-bold">
                        Core Requirement
                      </span>
                    </h2>
                    <p className="text-xs text-slate-500">
                      Identify and nominate prospective leaders to govern under your tenure.
                    </p>
                  </div>
                </div>

                {/* Counter status badge */}
                <div
                  className={`px-3.5 py-1.5 rounded-full border text-xs font-bold flex items-center gap-2 ${
                    benchMembers.length >= minRequiredBench
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                      : 'bg-amber-50 border-amber-200 text-amber-800'
                  }`}
                >
                  {benchMembers.length >= minRequiredBench ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-amber-600" />
                  )}
                  <span>
                    {benchMembers.length} / {minRequiredBench} {targetRoleTitle} Added
                  </span>
                </div>
              </div>

              {/* Requirement Alert Banner */}
              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-1">
                <div className="font-bold text-amber-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  {candidateInfo.role_name} Minimum Bench Requirement:
                </div>
                <p className="text-amber-800/90 leading-relaxed font-normal">
                  {candidateInfo.bench_requirement?.description ||
                    `You must name at least ${minRequiredBench} prospective ${targetRoleTitle}.`}
                </p>
              </div>

              {/* Dynamic Leader Cards */}
              <div className="space-y-4">
                {benchMembers.map((member, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-slate-300 transition-all space-y-4"
                  >
                    <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1D4ED8] text-xs font-bold flex items-center justify-center">
                          {index + 1}
                        </span>
                        <span className="text-sm font-bold text-slate-900">
                          {member.name || `Leader Candidate #${index + 1}`}
                        </span>
                        {member.status && (
                          <span
                            className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${
                              member.status === 'Committed'
                                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                : member.status === 'Spoken, interested'
                                ? 'bg-blue-50 text-blue-700 border border-blue-200'
                                : 'bg-slate-100 text-slate-600 border border-slate-200'
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
                          className="text-xs text-rose-600 hover:text-rose-700 font-bold flex items-center gap-1 cursor-pointer transition"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          Remove
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Candidate Full Name <span className="text-[#E11D48]">*</span>
                        </label>
                        <input
                          type="text"
                          value={member.name}
                          onChange={(e) => handleUpdateBenchMember(index, 'name', e.target.value)}
                          placeholder="e.g. Amit Shah"
                          className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] shadow-2xs"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Mobile Number <span className="text-[#E11D48]">*</span>
                        </label>
                        <input
                          type="tel"
                          value={member.mobile}
                          onChange={(e) => handleUpdateBenchMember(index, 'mobile', e.target.value)}
                          placeholder="+91 9876543210"
                          className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] shadow-2xs"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          City / Region <span className="text-[#E11D48]">*</span>
                        </label>
                        <input
                          type="text"
                          value={member.city}
                          onChange={(e) => handleUpdateBenchMember(index, 'city', e.target.value)}
                          placeholder="e.g. Ahmedabad"
                          className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] shadow-2xs"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Industry Cluster <span className="text-[#E11D48]">*</span>
                        </label>
                        <input
                          type="text"
                          value={member.industry}
                          onChange={(e) =>
                            handleUpdateBenchMember(index, 'industry', e.target.value)
                          }
                          placeholder="e.g. Manufacturing / Textiles"
                          className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] shadow-2xs"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Relationship / Context <span className="text-[#E11D48]">*</span>
                        </label>
                        <input
                          type="text"
                          value={member.relationship}
                          onChange={(e) =>
                            handleUpdateBenchMember(index, 'relationship', e.target.value)
                          }
                          placeholder="e.g. Association Colleague"
                          className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] shadow-2xs"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Proposed Role / Circle <span className="text-[#E11D48]">*</span>
                        </label>
                        <input
                          type="text"
                          value={member.proposed_role}
                          onChange={(e) =>
                            handleUpdateBenchMember(index, 'proposed_role', e.target.value)
                          }
                          placeholder="e.g. Industry Director - Textiles"
                          className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] shadow-2xs"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Candidate Status <span className="text-[#E11D48]">*</span>
                        </label>
                        <select
                          value={member.status}
                          onChange={(e) => handleUpdateBenchMember(index, 'status', e.target.value)}
                          className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] shadow-2xs"
                        >
                          <option value="Committed">Committed</option>
                          <option value="Spoken, interested">Spoken, interested</option>
                          <option value="Not yet approached">Not yet approached</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Onboarding Timeline <span className="text-[#E11D48]">*</span>
                        </label>
                        <select
                          value={member.timeline}
                          onChange={(e) =>
                            handleUpdateBenchMember(index, 'timeline', e.target.value)
                          }
                          className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] shadow-2xs"
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
                className="w-full py-3 rounded-2xl bg-white border-2 border-dashed border-slate-300 hover:border-[#1D4ED8] hover:bg-blue-50/40 text-[#1D4ED8] text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
              >
                <Plus className="w-4 h-4" />
                Add Another {targetRoleTitle} Candidate
              </button>

              {/* Declaration Checkbox */}
              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={benchDeclaration}
                    onChange={(e) => {
                      setBenchDeclaration(e.target.checked)
                      saveDraft()
                    }}
                    className="mt-1 w-4 h-4 rounded border-slate-300 text-[#1D4ED8] focus:ring-[#1D4ED8]"
                  />
                  <span className="text-xs text-amber-900 leading-relaxed font-normal">
                    <strong className="text-amber-950 font-bold">Solemn Leadership Bench Declaration:</strong> I
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
                className="px-5 py-2.5 rounded-full bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold flex items-center gap-2 cursor-pointer transition shadow-2xs"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Credibility
              </button>

              <button
                type="button"
                onClick={() => setActiveStep(3)}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/15 transition flex items-center gap-2 cursor-pointer"
              >
                Continue to Roadmap &amp; Fit
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
            <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-6 relative overflow-hidden">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200/80 flex items-center justify-center text-purple-600">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Section E: 12-Month Execution Plan</h2>
                  <p className="text-xs text-slate-500">
                    Concrete milestones, first 90 days sprint, and risk mitigation.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Quantitative 6-Month &amp; 12-Month Targets <span className="text-[#E11D48]">*</span>
                  </label>
                  <textarea
                    rows={3}
                    value={secE.targets_6_12_months}
                    onChange={(e) => {
                      setSecE({ ...secE, targets_6_12_months: e.target.value })
                      saveDraft()
                    }}
                    placeholder="6 Months: 4 Circles, 12 IDs. 12 Months: 10 Circles, 30 IDs, 150 Peers."
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition shadow-2xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    First 90 Days High-Impact Action Plan <span className="text-[#E11D48]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={secE.first_90_days}
                    onChange={(e) => {
                      setSecE({ ...secE, first_90_days: e.target.value })
                      saveDraft()
                    }}
                    placeholder="1. Onboard 7 committed IDs&#10;2. Host 2 discovery conclaves&#10;3. Form Surat & Vadodara launch core teams"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition shadow-2xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Funding &amp; Resourcing Strategy <span className="text-[#E11D48]">*</span>
                  </label>
                  <textarea
                    rows={3}
                    value={secE.funding_plan}
                    onChange={(e) => {
                      setSecE({ ...secE, funding_plan: e.target.value })
                      saveDraft()
                    }}
                    placeholder="Outline how you will finance outreach events, meeting spaces, and administrative collateral..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition shadow-2xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Biggest Anticipated Risk &amp; Mitigation Strategy <span className="text-[#E11D48]">*</span>
                  </label>
                  <textarea
                    rows={3}
                    value={secE.biggest_risk}
                    onChange={(e) => {
                      setSecE({ ...secE, biggest_risk: e.target.value })
                      saveDraft()
                    }}
                    placeholder="e.g. Candidate drop-off during onboarding. Mitigation: structured weekly peer reviews and buddy system."
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition shadow-2xs"
                  />
                </div>
              </div>
            </div>

            {/* Section F */}
            <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-6 relative overflow-hidden">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200/80 flex items-center justify-center text-[#E11D48]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Section F: Commitment &amp; Cultural Fit</h2>
                  <p className="text-xs text-slate-500">
                    Dedicated weekly hours, conflict disclosure, and Give-First ethos alignment.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Weekly Time Commitment Dedicated to Role <span className="text-[#E11D48]">*</span>
                  </label>
                  <input
                    type="text"
                    value={secF.hours_per_week}
                    onChange={(e) => {
                      setSecF({ ...secF, hours_per_week: e.target.value })
                      saveDraft()
                    }}
                    placeholder="e.g. 10-12 hours / week (Tue & Sat availability)"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition shadow-2xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Competing Board or Business Commitments <span className="text-[#E11D48]">*</span>
                  </label>
                  <input
                    type="text"
                    value={secF.competing_commitments}
                    onChange={(e) => {
                      setSecF({ ...secF, competing_commitments: e.target.value })
                      saveDraft()
                    }}
                    placeholder="e.g. Quarterly board meetings of family trust."
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition shadow-2xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Why Peers Global? (Alignment with Give-First Ethos){' '}
                    <span className="text-[#E11D48]">*</span>
                  </label>
                  <textarea
                    rows={3}
                    value={secF.why_peers_global}
                    onChange={(e) => {
                      setSecF({ ...secF, why_peers_global: e.target.value })
                      saveDraft()
                    }}
                    placeholder="Contrast our ecosystem approach against purely transactional referral networks..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition shadow-2xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Understanding of Leadership Stewardship in this Role{' '}
                    <span className="text-[#E11D48]">*</span>
                  </label>
                  <textarea
                    rows={3}
                    value={secF.role_understanding}
                    onChange={(e) => {
                      setSecF({ ...secF, role_understanding: e.target.value })
                      saveDraft()
                    }}
                    placeholder="e.g. An orchestrator who identifies, grooms, and empowers Industry Directors to run thriving Circles."
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] transition shadow-2xs"
                  />
                </div>

                <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={secF.performance_tenure_accepted}
                      onChange={(e) => {
                        setSecF({ ...secF, performance_tenure_accepted: e.target.checked })
                        saveDraft()
                      }}
                      className="mt-1 w-4 h-4 rounded border-slate-300 text-[#1D4ED8] focus:ring-[#1D4ED8]"
                    />
                    <span className="text-xs text-slate-700 leading-relaxed font-normal">
                      <strong className="text-slate-900 font-bold">1-Year Stewardship Tenure:</strong> I
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
                className="px-5 py-2.5 rounded-full bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold flex items-center gap-2 cursor-pointer transition shadow-2xs"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Bench
              </button>

              <button
                type="button"
                onClick={() => setActiveStep(4)}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/15 transition flex items-center gap-2 cursor-pointer"
              >
                Continue to References &amp; Documents
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
            <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-6 relative overflow-hidden">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200/80 flex items-center justify-center text-cyan-600">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Section G: Professional References</h2>
                  <p className="text-xs text-slate-500">
                    Two established industry or chamber references who can vouch for your integrity.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Reference 1 */}
                <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200 space-y-3">
                  <div className="text-xs font-bold brand-gradient-text uppercase tracking-wider">
                    Reference 1
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name <span className="text-[#E11D48]">*</span>
                    </label>
                    <input
                      type="text"
                      value={secG.ref_1_name}
                      onChange={(e) => {
                        setSecG({ ...secG, ref_1_name: e.target.value })
                        saveDraft()
                      }}
                      placeholder="Dr. Sunil Mehta"
                      className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] shadow-2xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Relationship &amp; Designation <span className="text-[#E11D48]">*</span>
                    </label>
                    <input
                      type="text"
                      value={secG.ref_1_relationship}
                      onChange={(e) => {
                        setSecG({ ...secG, ref_1_relationship: e.target.value })
                        saveDraft()
                      }}
                      placeholder="Business Client &amp; Mentor"
                      className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] shadow-2xs"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Mobile <span className="text-[#E11D48]">*</span>
                      </label>
                      <input
                        type="tel"
                        value={secG.ref_1_mobile}
                        onChange={(e) => {
                          setSecG({ ...secG, ref_1_mobile: e.target.value })
                          saveDraft()
                        }}
                        placeholder="+91 9822001122"
                        className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] shadow-2xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Years Known <span className="text-[#E11D48]">*</span>
                      </label>
                      <input
                        type="number"
                        value={secG.ref_1_years}
                        onChange={(e) => {
                          setSecG({ ...secG, ref_1_years: e.target.value })
                          saveDraft()
                        }}
                        placeholder="6"
                        className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] shadow-2xs"
                      />
                    </div>
                  </div>
                </div>

                {/* Reference 2 */}
                <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200 space-y-3">
                  <div className="text-xs font-bold brand-gradient-text uppercase tracking-wider">
                    Reference 2
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name <span className="text-[#E11D48]">*</span>
                    </label>
                    <input
                      type="text"
                      value={secG.ref_2_name}
                      onChange={(e) => {
                        setSecG({ ...secG, ref_2_name: e.target.value })
                        saveDraft()
                      }}
                      placeholder="Sunita Trivedi"
                      className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] shadow-2xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Relationship &amp; Designation <span className="text-[#E11D48]">*</span>
                    </label>
                    <input
                      type="text"
                      value={secG.ref_2_relationship}
                      onChange={(e) => {
                        setSecG({ ...secG, ref_2_relationship: e.target.value })
                        saveDraft()
                      }}
                      placeholder="Chamber Director"
                      className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] shadow-2xs"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Mobile <span className="text-[#E11D48]">*</span>
                      </label>
                      <input
                        type="tel"
                        value={secG.ref_2_mobile}
                        onChange={(e) => {
                          setSecG({ ...secG, ref_2_mobile: e.target.value })
                          saveDraft()
                        }}
                        placeholder="+91 9822003344"
                        className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] shadow-2xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Years Known <span className="text-[#E11D48]">*</span>
                      </label>
                      <input
                        type="number"
                        value={secG.ref_2_years}
                        onChange={(e) => {
                          setSecG({ ...secG, ref_2_years: e.target.value })
                          saveDraft()
                        }}
                        placeholder="4"
                        className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/15 focus:border-[#1D4ED8] shadow-2xs"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section H */}
            <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-6 relative overflow-hidden">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Section H: Document Proofs</h2>
                  <p className="text-xs text-slate-500">
                    Upload official KYC proof, business certificates, or profile deck.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* ID Proof */}
                <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200 space-y-3">
                  <div className="text-xs font-bold text-slate-900">Identity Proof</div>
                  <p className="text-xs text-slate-500">
                    Aadhaar, Passport, or Voter ID (PDF/JPG up to 10MB)
                  </p>
                  <label className="w-full py-2 px-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-xs font-bold text-slate-700 cursor-pointer transition flex items-center justify-center gap-2 shadow-2xs">
                    <Upload className="w-3.5 h-3.5 text-[#1D4ED8]" />
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
                    <div className="text-xs text-emerald-700 font-medium flex items-center gap-1.5 truncate">
                      <Check className="w-3.5 h-3.5 flex-shrink-0 text-emerald-600" />
                      <span className="truncate">{secH.id_proof_url}</span>
                    </div>
                  ) : (
                    <span className="text-xs text-slate-400 italic block">Not uploaded</span>
                  )}
                </div>

                {/* Business Proof */}
                <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200 space-y-3">
                  <div className="text-xs font-bold text-slate-900">Business Proof</div>
                  <p className="text-xs text-slate-500">
                    GST Certificate or MCA Incorporation (PDF/JPG up to 10MB)
                  </p>
                  <label className="w-full py-2 px-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-xs font-bold text-slate-700 cursor-pointer transition flex items-center justify-center gap-2 shadow-2xs">
                    <Upload className="w-3.5 h-3.5 text-[#1D4ED8]" />
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
                    <div className="text-xs text-emerald-700 font-medium flex items-center gap-1.5 truncate">
                      <Check className="w-3.5 h-3.5 flex-shrink-0 text-emerald-600" />
                      <span className="truncate">{secH.business_proof_url}</span>
                    </div>
                  ) : (
                    <span className="text-xs text-slate-400 italic block">Not uploaded</span>
                  )}
                </div>

                {/* Presentation Deck */}
                <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200 space-y-3">
                  <div className="text-xs font-bold text-slate-900">Profile / Pitch Deck</div>
                  <p className="text-xs text-slate-500">
                    Candidate or Company Overview Deck (PDF/PPT up to 10MB)
                  </p>
                  <label className="w-full py-2 px-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-xs font-bold text-slate-700 cursor-pointer transition flex items-center justify-center gap-2 shadow-2xs">
                    <Upload className="w-3.5 h-3.5 text-[#1D4ED8]" />
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
                    <div className="text-xs text-emerald-700 font-medium flex items-center gap-1.5 truncate">
                      <Check className="w-3.5 h-3.5 flex-shrink-0 text-emerald-600" />
                      <span className="truncate">{secH.deck_url}</span>
                    </div>
                  ) : (
                    <span className="text-xs text-slate-400 italic block">Not uploaded</span>
                  )}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => setActiveStep(3)}
                className="px-5 py-2.5 rounded-full bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold flex items-center gap-2 cursor-pointer transition shadow-2xs"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Roadmap
              </button>

              <button
                type="button"
                onClick={() => setActiveStep(5)}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/15 transition flex items-center gap-2 cursor-pointer"
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
            <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48]" />

              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                  Final Scrutiny Check
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                  Review Your Form 2 Evaluation Portfolio
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5 font-normal">
                  Please inspect your entries before final submission to the Central Jury Panel.
                </p>
              </div>

              {/* Summary Cards */}
              <div className="space-y-4 text-xs sm:text-sm">
                {/* Summary: Section A */}
                <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#1D4ED8] uppercase text-xs tracking-wider">
                      Section A: Business Credibility
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveStep(1)}
                      className="text-xs text-[#1D4ED8] font-bold hover:underline cursor-pointer"
                    >
                      Edit
                    </button>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1 text-slate-700">
                    <div>
                      <span className="text-slate-500 text-xs block font-medium">Sector</span>
                      <strong className="text-slate-900 font-bold">{secA.business_type}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 text-xs block font-medium">Founded</span>
                      <strong className="text-slate-900 font-bold">{secA.year_founded}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 text-xs block font-medium">Turnover</span>
                      <strong className="text-slate-900 font-bold">{secA.annual_turnover_band}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 text-xs block font-medium">Headcount</span>
                      <strong className="text-slate-900 font-bold">{secA.team_size} members</strong>
                    </div>
                  </div>
                </div>

                {/* Summary: Section D Bench */}
                <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold brand-gradient-text uppercase text-xs tracking-wider">
                      Section D: Leadership Bench ({benchMembers.length} Leaders Added)
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveStep(2)}
                      className="text-xs text-[#1D4ED8] font-bold hover:underline cursor-pointer"
                    >
                      Edit
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-slate-700">
                    {benchMembers.map((m, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-white border border-slate-200 text-xs flex items-center justify-between shadow-2xs"
                      >
                        <div>
                          <p className="font-bold text-slate-900">{m.name}</p>
                          <p className="text-slate-500 text-[11px]">
                            {m.proposed_role} • {m.city}
                          </p>
                        </div>
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                            m.status === 'Committed'
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : 'bg-blue-50 text-blue-700 border border-blue-200'
                          }`}
                        >
                          {m.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Summary: Section E & F */}
                <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-purple-700 uppercase text-xs tracking-wider">
                      Section E &amp; F: Roadmap &amp; Commitment
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveStep(3)}
                      className="text-xs text-[#1D4ED8] font-bold hover:underline cursor-pointer"
                    >
                      Edit
                    </button>
                  </div>
                  <div className="text-slate-700 space-y-1.5">
                    <p>
                      <span className="text-slate-500 font-medium">Weekly Hours:</span>{' '}
                      <strong className="text-slate-900 font-bold">{secF.hours_per_week}</strong>
                    </p>
                    <p>
                      <span className="text-slate-500 font-medium">Targets:</span> {secE.targets_6_12_months}
                    </p>
                  </div>
                </div>

                {/* Summary: Section G & H */}
                <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-emerald-700 uppercase text-xs tracking-wider">
                      Section G &amp; H: References &amp; Documents
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveStep(4)}
                      className="text-xs text-[#1D4ED8] font-bold hover:underline cursor-pointer"
                    >
                      Edit
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
                    <div>
                      <span className="text-slate-500 text-xs block font-medium">References:</span>
                      <strong className="text-slate-900 font-bold block">{secG.ref_1_name} ({secG.ref_1_relationship})</strong>
                      <strong className="text-slate-900 font-bold block">{secG.ref_2_name} ({secG.ref_2_relationship})</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 text-xs block font-medium">Attached Proofs:</span>
                      <span className="text-xs text-slate-800 font-semibold block">
                        {secH.id_proof_url ? '✓ KYC ID Proof' : 'KYC ID Proof Pending'}
                      </span>
                      <span className="text-xs text-slate-800 font-semibold block">
                        {secH.business_proof_url ? '✓ Business Proof' : 'Business Proof Pending'}
                      </span>
                      {secH.deck_url && (
                        <span className="text-xs text-slate-800 font-semibold block">✓ Candidate Deck</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-slate-100 space-y-4">
                <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 text-xs text-slate-700 leading-relaxed font-normal">
                  <p>
                    <strong className="text-slate-900 font-bold">Submission Confirmation:</strong> Once submitted, your Form 2 answers
                    will be locked and forwarded directly to the Jury Scrutiny Panel. You will
                    receive a sub-nomination confirmation reference.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setActiveStep(4)}
                    className="px-5 py-2.5 rounded-full bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold flex items-center gap-2 cursor-pointer transition shadow-2xs w-full sm:w-auto justify-center"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Documents
                  </button>

                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={handleSubmitForm2}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white font-extrabold text-sm shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
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
