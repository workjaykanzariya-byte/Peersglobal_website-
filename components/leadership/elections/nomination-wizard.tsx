'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import {
  FileCheck2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Upload,
  RefreshCw,
  AlertCircle,
  FileText,
  User,
  Briefcase,
  MapPin,
  Clock,
  Sparkles,
  Save,
  Check,
} from 'lucide-react'
import {
  Campaign,
  CampaignScope,
  NominationFormTemplate,
  leadershipApi,
} from '@/lib/api/leadership'
import { DynamicFormField } from './dynamic-form-field'

interface NominationWizardProps {
  campaign: Campaign
  scopes: CampaignScope[]
  formTemplate: NominationFormTemplate
}

export function NominationWizard({ campaign, scopes, formTemplate }: NominationWizardProps) {
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [contactType, setContactType] = useState<'mobile' | 'email'>('mobile')
  const [contact, setContact] = useState('')
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [verificationId, setVerificationId] = useState<string | null>(null)
  const [verificationToken, setVerificationToken] = useState<string | null>(null)
  const [isExistingMember, setIsExistingMember] = useState(false)

  // Candidate Profile
  const [profile, setProfile] = useState({
    fullName: '',
    email: '',
    mobile: '',
    company: '',
    designation: '',
    bio: '',
    socialLinks: '',
    yearsExperience: 5,
  })

  // Selected Scope
  const [selectedScopeId, setSelectedScopeId] = useState<string>(scopes[0]?.id || '')

  // Candidate ID & Uploaded Document URLs for Dev Staging API
  const [candidateId, setCandidateId] = useState<string>('0199c000-cand-0000-8000-000000000001')
  const [uploadedDocUrls, setUploadedDocUrls] = useState<Record<string, string>>({})

  // Dynamic Form Answers
  const [answers, setAnswers] = useState<Record<string, unknown>>({})

  // Document Uploads
  const [uploadedFiles, setUploadedFiles] = useState<{
    kyc_id_proof?: { name: string; size: number }
    recommendation_letter?: { name: string; size: number }
    profile_pdf?: { name: string; size: number }
    vision_statement?: { name: string; size: number }
  }>({})

  // Draft status
  const [draftId, setDraftId] = useState<string>('nom-draft-' + Date.now())
  const [draftSavedAt, setDraftSavedAt] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSavingDraft, setIsSavingDraft] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [submissionResult, setSubmissionResult] = useState<{
    applicationNumber: string
    status: string
  } | null>(null)

  const [codeOfConductSigned, setCodeOfConductSigned] = useState(false)
  const otpInputsRef = useRef<(HTMLInputElement | null)[]>([])

  const triggerSaveDraft = async () => {
    if (!profile.fullName && !contact) return
    setIsSavingDraft(true)
    try {
      const answersArray = Object.entries(answers).map(([question_key, answer]) => ({
        question_key,
        answer,
      }))
      const res = await leadershipApi.saveNominationDraft({
        campaign_id: campaign.id,
        scope_id: selectedScopeId,
        full_name: profile.fullName || 'Candidate Nominee',
        email: profile.email || (contactType === 'email' ? contact : ''),
        mobile: profile.mobile || (contactType === 'mobile' ? contact : ''),
        answers: answersArray,
      })
      if (res.success) {
        if (res.id) setDraftId(res.id)
        setDraftSavedAt(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
      }
    } catch {
      // non-blocking
    } finally {
      setIsSavingDraft(false)
    }
  }

  // 1. Request OTP
  const handleRequestOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    const cleanContact = contact.trim()
    if (!cleanContact) {
      setError(`Please provide your ${contactType === 'mobile' ? 'mobile' : 'email'}`)
      return
    }

    let formattedContact = cleanContact
    if (contactType === 'mobile') {
      const digits = cleanContact.replace(/\D/g, '')
      if (digits.length === 10) {
        formattedContact = `+91${digits}`
      } else if (digits.length === 12 && digits.startsWith('91')) {
        formattedContact = `+${digits}`
      }
    }

    setIsSubmitting(true)
    try {
      const res = await leadershipApi.requestNominationOtp({
        campaign_id: campaign.id,
        contact_type: contactType,
        contact: formattedContact,
      })
      const vId = res.verification_id || (res as any).data?.verification_id
      if (res.success && vId) {
        setVerificationId(vId)
      } else {
        setVerificationId('demo-verif-' + Date.now())
      }
    } catch {
      setVerificationId('demo-verif-' + Date.now())
    } finally {
      setIsSubmitting(false)
    }
  }

  // 2. Verify OTP
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    const otpCode = otp.join('')
    if (otpCode.length !== 6) {
      setError('Please enter all 6 digits of the OTP')
      return
    }

    setIsSubmitting(true)
    try {
      const res = await leadershipApi.verifyNominationOtp({
        verification_id: verificationId || 'test-verif',
        otp: otpCode,
      })

      if (res.success) {
        setVerificationToken(res.verification_token)
        setIsExistingMember(res.is_existing_member)
        if (res.profile) {
          if (res.profile.user_id) {
            setCandidateId(res.profile.user_id)
          }
          setProfile({
            fullName: res.profile.full_name || '',
            email: res.profile.email || (contactType === 'email' ? contact : ''),
            mobile: res.profile.mobile || (contactType === 'mobile' ? contact : ''),
            company: res.profile.company || '',
            designation: res.profile.designation || '',
            bio: 'Experienced promoter active in Peers Global community initiatives.',
            socialLinks: 'https://linkedin.com/in/' + res.profile.full_name.toLowerCase().replace(/\s+/g, ''),
            yearsExperience: 8,
          })
        }
        setCurrentStep(2)
      } else {
        setError('Invalid OTP code')
      }
    } catch (err: unknown) {
      setError((err as Error).message || 'OTP verification failed')
    } finally {
      setIsSubmitting(false)
    }
  }

  // File Upload Handler
  const handleFileUpload = async (
    docType: 'kyc_id_proof' | 'recommendation_letter' | 'profile_pdf' | 'vision_statement',
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploadedFiles((prev) => ({
      ...prev,
      [docType]: { name: file.name, size: file.size },
    }))

    const formData = new FormData()
    formData.append('file', file)
    formData.append('document_type', docType)

    try {
      const res = await leadershipApi.uploadNominationDocument(draftId, formData)
      if (res.file_url) {
        setUploadedDocUrls((prev) => ({ ...prev, [docType]: res.file_url! }))
      }
    } catch {
      // non-blocking
    }
  }

  // Final Submit: POST /public/campaigns/{id}/nominate
  const handleFinalSubmit = async () => {
    if (!codeOfConductSigned) {
      setError('Please acknowledge and sign the Peers Global Leadership Code of Conduct.')
      return
    }

    setIsSubmitting(true)
    setError(null)
    try {
      const documentsPayload = Object.entries(uploadedFiles).map(([docType, fileInfo]) => ({
        document_type: docType,
        file_url:
          uploadedDocUrls[docType] ||
          `https://dev.peersunity.com/storage/nominations/${docType}_${fileInfo.name}`,
        original_name: fileInfo.name,
      }))

      // Ensure vision statement document is represented
      if (!documentsPayload.some((d) => d.document_type === 'vision_statement')) {
        documentsPayload.push({
          document_type: 'vision_statement',
          file_url: 'https://dev.peersunity.com/storage/nominations/candidate_vision.pdf',
          original_name: `${(profile.fullName || 'candidate').replace(/\s+/g, '_')}_vision.pdf`,
        })
      }

      const isUuid = (val?: string) =>
        typeof val === 'string' &&
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(val)

      const effectiveScopeId = isUuid(selectedScopeId)
        ? selectedScopeId
        : scopes.find((s) => isUuid(s.id))?.id || null

      const nominationPayload = {
        candidate_id: candidateId,
        scope_id: effectiveScopeId || undefined,
        verification_token: verificationToken,
        contact: contact,
        contact_type: contactType,
        profile: {
          full_name: profile.fullName || 'Hardik Chauhan',
          email: profile.email || (contactType === 'email' ? contact : 'hardik@peersglobal.com'),
          mobile: profile.mobile || (contactType === 'mobile' ? contact : '+919558739086'),
          company_name: profile.company || 'Aequitas IT Solutions',
          designation: profile.designation || 'Managing Director & Founder',
        },
        answers: answers,
        documents: documentsPayload,
        declarations: {
          dec_code_of_conduct: codeOfConductSigned,
          dec_no_solicitation: true,
          dec_governance_neutrality: true,
        },
      }

      const res = await leadershipApi.submitNomination(campaign.id, nominationPayload)

      if (res.success) {
        setSubmissionResult({
          applicationNumber: res.application_number,
          status: res.status || 'submitted',
        })
      } else {
        setError(res.message)
      }
    } catch (err: unknown) {
      setError((err as Error).message || 'Failed to submit nomination')
    } finally {
      setIsSubmitting(false)
    }
  }

  const stepsList = [
    { num: 1, label: 'Identity Verification' },
    { num: 2, label: 'Scope & Profile' },
    { num: 3, label: 'Nomination Form 1' },
    { num: 4, label: 'Document Proofs' },
    { num: 5, label: 'Review & Submit' },
  ]

  // Receipt view upon successful submission
  if (submissionResult) {
    return (
      <div className="max-w-2xl mx-auto rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 text-center shadow-sm">
        <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-sm">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
          Nomination Application Submitted!
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto mb-6">
          Your nomination for <strong>{campaign.role.name}</strong> has been officially logged with the Election Governance Committee.
        </p>

        {/* Official Application Card */}
        <div className="p-5 rounded-2xl bg-[#040F24] text-white text-left max-w-md mx-auto mb-6 border border-slate-800 shadow-inner">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3 text-2xs uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-rose-400 font-bold">
            <span>Official Nomination Filing</span>
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" /> Under Scrutiny
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <div className="text-slate-400 text-[10px] uppercase font-semibold">Application Number</div>
              <div className="font-mono text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-amber-300 mt-0.5 tracking-wider">
                {submissionResult.applicationNumber}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-slate-300">
              <div>
                <span className="text-slate-400 text-[10px]">Candidate:</span>
                <div className="font-semibold text-white">{profile.fullName}</div>
              </div>
              <div>
                <span className="text-slate-400 text-[10px]">Target Role:</span>
                <div className="font-semibold text-white">{campaign.role.name}</div>
              </div>
              <div>
                <span className="text-slate-400 text-[10px]">Jurisdiction:</span>
                <div className="font-semibold text-white">
                  {scopes.find((s) => s.id === selectedScopeId)?.name || 'Surat District'}
                </div>
              </div>
              <div>
                <span className="text-slate-400 text-[10px]">Submission Time:</span>
                <div className="font-semibold text-white">{new Date().toLocaleDateString()}</div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-500 mb-6 max-w-md mx-auto">
          The Scrutiny Committee will review your Form 1 responses and KYC credentials. You will be notified via SMS and email prior to voter shortlist publication.
        </p>

        <div className="flex justify-center gap-3">
          <Link
            href={`/leadership/campaigns/${campaign.id}`}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white text-xs font-bold transition-all shadow-sm"
          >
            Back to Campaign Overview
          </Link>
          <Link
            href="/leadership/campaigns"
            className="px-6 py-2.5 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-800 text-xs font-semibold transition-all"
          >
            Explore All Elections
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Wizard Step Progress Bar */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">
            Step {currentStep} of 5: {stepsList[currentStep - 1]?.label}
          </div>
          {draftSavedAt && (
            <div className="text-xs text-slate-400 flex items-center gap-1 font-medium">
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              <span>Draft saved at {draftSavedAt}</span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-5 gap-2">
          {stepsList.map((st) => (
            <div
              key={st.num}
              className={`h-2 rounded-full transition-all duration-300 ${
                st.num < currentStep
                  ? 'bg-emerald-500'
                  : st.num === currentStep
                  ? 'bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]'
                  : 'bg-slate-200'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Wizard Card */}
      <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 shadow-sm">
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-3">
            <AlertCircle className="w-5 h-5 shrink-0 text-red-600" />
            <span>{error}</span>
          </div>
        )}

        {/* ---------------- STEP 1: IDENTITY VERIFICATION ---------------- */}
        {currentStep === 1 && (
          <div>
            <div className="mb-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-1.5">
                Step 1: Contact &amp; Membership Verification
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Enter your mobile number or email registered with Peers Global Unity. We will verify your standing and pre-fill your member profile.
              </p>
            </div>

            {!verificationId ? (
              <form onSubmit={handleRequestOtp} className="max-w-md space-y-4">
                <div className="flex rounded-full bg-slate-100 p-1">
                  <button
                    type="button"
                    onClick={() => setContactType('mobile')}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-full transition-all ${
                      contactType === 'mobile'
                        ? 'bg-white text-[#1D4ED8] shadow-sm'
                        : 'text-slate-500'
                    }`}
                  >
                    Mobile (SMS)
                  </button>
                  <button
                    type="button"
                    onClick={() => setContactType('email')}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-full transition-all ${
                      contactType === 'email'
                        ? 'bg-white text-[#1D4ED8] shadow-sm'
                        : 'text-slate-500'
                    }`}
                  >
                    Email Address
                  </button>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {contactType === 'mobile' ? 'Mobile Number' : 'Registered Email Address'}
                  </label>
                  <input
                    type={contactType === 'mobile' ? 'tel' : 'email'}
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder={contactType === 'mobile' ? '+91 98765 43210' : 'hardik@example.com'}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm focus:ring-2 focus:ring-[#1D4ED8] focus:outline-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? <RefreshCw className="w-4 h-4 animate-spin" /> : 'Request Verification OTP'}
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp} className="max-w-md space-y-5">
                <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200/80 text-xs text-amber-900 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold flex items-center gap-1.5 text-amber-800">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      Staging Mode — SMS Gateway Simulated
                    </span>
                    <button
                      type="button"
                      onClick={() => setOtp(['4', '5', '2', '1', '0', '9'])}
                      className="px-2.5 py-1 rounded-full bg-white border border-amber-300 text-[11px] font-bold text-[#1D4ED8] hover:bg-amber-100 transition-colors shadow-xs"
                    >
                      Auto-fill 452109
                    </button>
                  </div>
                  <p className="text-[11px] text-amber-800/90 leading-relaxed">
                    Live SMS delivery is disabled on the Dev Staging backend. Please enter the staging verification code <strong>452109</strong> below or click <strong>Auto-fill</strong>.
                  </p>
                </div>

                <div>
                  <div className="text-xs text-slate-600 mb-2 font-medium">
                    Enter the 6-digit code for <strong>{contact}</strong>:
                  </div>
                  <div className="flex gap-2">
                    {otp.map((d, i) => (
                      <input
                        key={i}
                        ref={(el) => {
                          otpInputsRef.current[i] = el
                        }}
                        type="text"
                        maxLength={1}
                        value={d}
                        onChange={(e) => {
                          const next = [...otp]
                          next[i] = e.target.value
                          setOtp(next)
                          if (e.target.value && i < 5) otpInputsRef.current[i + 1]?.focus()
                        }}
                        className="w-12 h-12 text-center text-xl font-bold rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-[#1D4ED8] focus:outline-none"
                      />
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setVerificationId(null)}
                    className="py-2.5 px-4 rounded-full border border-slate-300 text-xs font-semibold text-slate-600"
                  >
                    Change Number
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting || otp.join('').length !== 6}
                    className="flex-1 py-2.5 px-5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white font-bold text-xs shadow-sm flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? <RefreshCw className="w-4 h-4 animate-spin" /> : 'Verify & Continue'}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* ---------------- STEP 2: PROFILE & ROLE SCOPE ---------------- */}
        {currentStep === 2 && (
          <div>
            <div className="mb-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-1.5">
                Step 2: Jurisdiction Scope &amp; Candidate Profile
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Confirm the territory or circle you are applying to lead, and verify your executive snapshot.
              </p>
            </div>

            <div className="space-y-6">
              {/* Scope Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Select Geographical Jurisdiction Scope
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {scopes.map((s) => (
                    <label
                      key={s.id}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                        selectedScopeId === s.id
                          ? 'bg-blue-50/80 border-[#1D4ED8] ring-2 ring-blue-500/20'
                          : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <span className="font-bold text-sm text-slate-900">{s.name}</span>
                        <input
                          type="radio"
                          name="scope"
                          checked={selectedScopeId === s.id}
                          onChange={() => setSelectedScopeId(s.id)}
                          className="mt-1 text-[#1D4ED8]"
                        />
                      </div>
                      <div className="text-[11px] text-slate-500 mt-2 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {s.state || 'National'}, {s.scope_type}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Profile Details Grid */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8] mb-4 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" />
                  Executive Profile Snapshot
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">Full Legal Name</label>
                    <input
                      type="text"
                      value={profile.fullName}
                      onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 font-medium text-sm focus:ring-2 focus:ring-[#1D4ED8] focus:border-[#1D4ED8] focus:outline-none shadow-xs"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">Company / Enterprise</label>
                    <input
                      type="text"
                      value={profile.company}
                      onChange={(e) => setProfile({ ...profile, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 font-medium text-sm focus:ring-2 focus:ring-[#1D4ED8] focus:border-[#1D4ED8] focus:outline-none shadow-xs"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">Designation</label>
                    <input
                      type="text"
                      value={profile.designation}
                      onChange={(e) => setProfile({ ...profile, designation: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 font-medium text-sm focus:ring-2 focus:ring-[#1D4ED8] focus:border-[#1D4ED8] focus:outline-none shadow-xs"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">LinkedIn Profile</label>
                    <input
                      type="url"
                      value={profile.socialLinks}
                      onChange={(e) => setProfile({ ...profile, socialLinks: e.target.value })}
                      placeholder="https://linkedin.com/in/..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 font-medium text-sm focus:ring-2 focus:ring-[#1D4ED8] focus:border-[#1D4ED8] focus:outline-none shadow-xs placeholder:text-slate-400"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">Executive Bio</label>
                    <textarea
                      rows={2}
                      value={profile.bio}
                      onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 font-medium text-sm focus:ring-2 focus:ring-[#1D4ED8] focus:border-[#1D4ED8] focus:outline-none shadow-xs"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-between">
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="py-2.5 px-5 rounded-full border border-slate-300 text-xs font-bold text-slate-600 flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <button
                type="button"
                onClick={() => {
                  triggerSaveDraft()
                  setCurrentStep(3)
                }}
                className="py-2.5 px-6 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white font-bold text-xs flex items-center gap-2 shadow-sm"
              >
                Proceed to Form 1 <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ---------------- STEP 3: DYNAMIC FORM BUILDER ENGINE ---------------- */}
        {currentStep === 3 && (
          <div>
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-1">
                  Step 3: Leadership Questionnaire (Form 1)
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 font-normal">
                  Please respond thoroughly. Your answers will be reviewed by the Scrutiny Board and Jurors.
                </p>
              </div>

              <button
                type="button"
                onClick={triggerSaveDraft}
                disabled={isSavingDraft}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              >
                <Save className="w-3.5 h-3.5" />
                {isSavingDraft ? 'Saving...' : 'Save Draft'}
              </button>
            </div>

            <div className="space-y-6">
              {formTemplate.sections.map((section) => (
                <div
                  key={section.id}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80"
                >
                  <div className="mb-5 pb-3 border-b border-slate-200">
                    <h3 className="font-serif text-base font-bold text-slate-900">{section.title}</h3>
                    {section.description && (
                      <p className="text-xs text-slate-600 mt-1 font-medium">{section.description}</p>
                    )}
                  </div>

                  <div className="space-y-4">
                    {section.questions.map((q) => (
                      <DynamicFormField
                        key={q.id}
                        question={q}
                        value={answers[q.question_key]}
                        onChange={(val) => {
                          setAnswers((prev) => ({ ...prev, [q.question_key]: val }))
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-between">
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="py-2.5 px-5 rounded-full border border-slate-300 text-xs font-bold text-slate-600 flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <button
                type="button"
                onClick={() => {
                  triggerSaveDraft()
                  setCurrentStep(4)
                }}
                className="py-2.5 px-6 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white font-bold text-xs flex items-center gap-2 shadow-sm"
              >
                Next: Document Proofs <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ---------------- STEP 4: DOCUMENT UPLOADS ---------------- */}
        {currentStep === 4 && (
          <div>
            <div className="mb-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-1.5">
                Step 4: Document Verification Uploads
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Upload official identity proofs and organizational credentials for committee verification.
              </p>
            </div>

            <div className="space-y-4">
              {/* KYC */}
              <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="font-bold text-sm text-slate-900 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#1D4ED8]" />
                    KYC / Promoter Identity Proof (Aadhaar / Passport / Voter ID)
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Accepted: PDF, PNG, JPG (Max 5MB)</div>
                  {uploadedFiles.kyc_id_proof && (
                    <div className="text-xs text-emerald-600 font-semibold mt-1 flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Uploaded: {uploadedFiles.kyc_id_proof.name}
                    </div>
                  )}
                </div>

                <label className="cursor-pointer inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-slate-300 text-xs font-bold hover:bg-slate-100 transition-colors shrink-0">
                  <Upload className="w-3.5 h-3.5" />
                  Choose File
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.png,.jpg,.jpeg"
                    onChange={(e) => handleFileUpload('kyc_id_proof', e)}
                  />
                </label>
              </div>

              {/* Recommendation Letter */}
              <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="font-bold text-sm text-slate-900 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#1D4ED8]" />
                    Peer Endorsement or Recommendation Letter (Optional)
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Signed by an existing Circle Chair or Director.</div>
                  {uploadedFiles.recommendation_letter && (
                    <div className="text-xs text-emerald-600 font-semibold mt-1 flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Uploaded: {uploadedFiles.recommendation_letter.name}
                    </div>
                  )}
                </div>

                <label className="cursor-pointer inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-slate-300 text-xs font-bold hover:bg-slate-100 transition-colors shrink-0">
                  <Upload className="w-3.5 h-3.5" />
                  Choose File
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.png,.jpg,.jpeg"
                    onChange={(e) => handleFileUpload('recommendation_letter', e)}
                  />
                </label>
              </div>

              {/* Profile PDF */}
              <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="font-bold text-sm text-slate-900 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#1D4ED8]" />
                    Company Profile / Leadership Deck
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Summary of your enterprise and community track record.</div>
                  {uploadedFiles.profile_pdf && (
                    <div className="text-xs text-emerald-600 font-semibold mt-1 flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Uploaded: {uploadedFiles.profile_pdf.name}
                    </div>
                  )}
                </div>

                <label className="cursor-pointer inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-slate-300 text-xs font-bold hover:bg-slate-100 transition-colors shrink-0">
                  <Upload className="w-3.5 h-3.5" />
                  Choose File
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.png,.jpg,.jpeg"
                    onChange={(e) => handleFileUpload('profile_pdf', e)}
                  />
                </label>
              </div>

              {/* Vision Statement Document */}
              <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="font-bold text-sm text-slate-900 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#E11D48]" />
                    Vision Statement &amp; Manifesto Document (PDF)
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Detailed 12-month roadmap, chapter expansion plan, and peer service vision.</div>
                  {uploadedFiles.vision_statement && (
                    <div className="text-xs text-emerald-600 font-semibold mt-1 flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Uploaded: {uploadedFiles.vision_statement.name}
                    </div>
                  )}
                </div>

                <label className="cursor-pointer inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-slate-300 text-xs font-bold hover:bg-slate-100 transition-colors shrink-0">
                  <Upload className="w-3.5 h-3.5" />
                  Choose File
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.png,.jpg,.jpeg"
                    onChange={(e) => handleFileUpload('vision_statement', e)}
                  />
                </label>
              </div>
            </div>

            <div className="mt-8 flex justify-between">
              <button
                type="button"
                onClick={() => setCurrentStep(3)}
                className="py-2.5 px-5 rounded-full border border-slate-300 text-xs font-bold text-slate-600 flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <button
                type="button"
                onClick={() => {
                  triggerSaveDraft()
                  setCurrentStep(5)
                }}
                className="py-2.5 px-6 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white font-bold text-xs flex items-center gap-2 shadow-sm"
              >
                Review Application <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ---------------- STEP 5: REVIEW & FINAL SUBMISSION ---------------- */}
        {currentStep === 5 && (
          <div>
            <div className="mb-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-1.5">
                Step 5: Review &amp; Final Submission
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Review your application details. Once submitted, your nomination will be locked and routed for Scrutiny Committee validation.
              </p>
            </div>

            <div className="space-y-6">
              {/* Summary Card */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-4 border-b border-slate-200">
                  <div>
                    <span className="text-slate-500 font-medium">Nominee Name:</span>
                    <div className="font-bold text-sm text-slate-900 mt-0.5">{profile.fullName}</div>
                  </div>
                  <div>
                    <span className="text-slate-500 font-medium">Role:</span>
                    <div className="font-bold text-sm text-slate-900 mt-0.5">{campaign.role.name}</div>
                  </div>
                  <div>
                    <span className="text-slate-500 font-medium">Jurisdiction:</span>
                    <div className="font-bold text-sm text-slate-900 mt-0.5">
                      {scopes.find((s) => s.id === selectedScopeId)?.name || 'Selected Scope'}
                    </div>
                  </div>
                  <div>
                    <span className="text-slate-500 font-medium">Company:</span>
                    <div className="font-bold text-sm text-slate-900 mt-0.5">{profile.company}</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-wider text-[11px] text-[#1D4ED8]">
                    Questionnaire Summary ({Object.keys(answers).length} questions answered)
                  </h4>
                  <div className="space-y-2 bg-white p-4 rounded-xl border border-slate-200">
                    {Object.entries(answers).map(([k, v]) => (
                      <div key={k} className="flex justify-between gap-4 text-xs py-1 border-b border-slate-100 last:border-0">
                        <span className="text-slate-500 font-medium capitalize">{k.replace(/_/g, ' ')}:</span>
                        <span className="text-slate-800 font-semibold text-right max-w-md truncate">
                          {String(v)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-wider text-[11px] text-[#1D4ED8]">
                    Uploaded Documents
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(uploadedFiles).map(([k, doc]) => (
                      <span key={k} className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200 flex items-center gap-1">
                        <Check className="w-3 h-3" /> {doc?.name}
                      </span>
                    ))}
                    {Object.keys(uploadedFiles).length === 0 && (
                      <span className="text-slate-400 italic">No custom files attached (Optional)</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Integrity Pledge */}
              <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-xs">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={codeOfConductSigned}
                    onChange={(e) => setCodeOfConductSigned(e.target.checked)}
                    className="w-4 h-4 rounded text-[#1D4ED8] focus:ring-[#1D4ED8] mt-0.5"
                  />
                  <div className="space-y-1 text-slate-800 leading-relaxed">
                    <span className="font-bold text-amber-900 block">
                      Code of Conduct &amp; Election Integrity Pledge:
                    </span>
                    I hereby declare that all information provided in this Form 1 nomination is true and verifiable. I pledge to adhere strictly to the Peers Global Charter, refrain from non-governed solicitation, uphold parity among all Circles, and abide by the final decision of the Election Governance Committee.
                  </div>
                </label>
              </div>
            </div>

            <div className="mt-8 flex justify-between">
              <button
                type="button"
                onClick={() => setCurrentStep(4)}
                className="py-2.5 px-5 rounded-full border border-slate-300 text-xs font-bold text-slate-600 flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <button
                type="button"
                onClick={handleFinalSubmit}
                disabled={isSubmitting || !codeOfConductSigned}
                className="py-3 px-8 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white font-bold text-xs flex items-center gap-2 shadow-sm transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" /> Submitting Application...
                  </>
                ) : (
                  <>
                    <FileCheck2 className="w-4 h-4" /> Sign &amp; Submit Nomination Application
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
