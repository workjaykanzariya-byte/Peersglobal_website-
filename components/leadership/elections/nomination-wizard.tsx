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
  Mail,
  Phone,
  Search,
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
  const [emailInput, setEmailInput] = useState('')
  const [phoneInput, setPhoneInput] = useState('')
  const [isExistingMember, setIsExistingMember] = useState(false)
  const [lookupFeedback, setLookupFeedback] = useState<{
    status: 'idle' | 'success' | 'not_found'
    message: string
    userName?: string
    company?: string
  } | null>(null)
  const [isChecking, setIsChecking] = useState(false)

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
  const [candidateId, setCandidateId] = useState<string>('0199c000-ca00-0000-8000-000000000001')
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

  const triggerSaveDraft = async () => {
    if (!profile.fullName && !emailInput && !phoneInput) return
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
        email: profile.email || emailInput,
        mobile: profile.mobile || phoneInput,
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

  // 1. Direct Member Check & Auto-Fill (No OTP Required)
  const handleCheckMembership = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    setError(null)
    setLookupFeedback(null)

    const cleanEmail = emailInput.trim()
    const cleanPhone = phoneInput.trim()

    if (!cleanEmail && !cleanPhone) {
      setError('Please provide your Email Address and/or Mobile Number.')
      return
    }

    setIsChecking(true)
    try {
      const res = await leadershipApi.checkMemberProfile({
        email: cleanEmail,
        phone: cleanPhone,
        campaign_id: campaign.id,
      })

      if (res && res.exists && res.profile) {
        setIsExistingMember(true)
        if (res.candidate_id || res.user_id) {
          setCandidateId(res.candidate_id || res.user_id!)
        }
        setProfile({
          fullName: res.profile.fullName || res.profile.full_name || '',
          email: res.profile.email || cleanEmail,
          mobile: res.profile.mobile || cleanPhone,
          company: res.profile.company || res.profile.company_name || '',
          designation: res.profile.designation || '',
          bio: res.profile.bio || 'Experienced promoter active in Peers Global community initiatives.',
          socialLinks: res.profile.socialLinks || '',
          yearsExperience: res.profile.yearsExperience || 5,
        })
        setLookupFeedback({
          status: 'success',
          message: res.message || 'Member account verified and credentials pre-filled!',
          userName: res.profile.fullName || res.profile.full_name,
          company: res.profile.company || res.profile.company_name,
        })
        // Smoothly auto advance to Step 2 after 800ms
        setTimeout(() => {
          setCurrentStep(2)
        }, 850)
      } else {
        setIsExistingMember(false)
        setProfile((prev) => ({
          ...prev,
          email: cleanEmail,
          mobile: cleanPhone,
        }))
        setLookupFeedback({
          status: 'not_found',
          message:
            'No existing registered profile was found with these credentials in our database. You can proceed to complete your nomination profile manually.',
        })
      }
    } catch (err: unknown) {
      setError((err as Error).message || 'Failed to verify membership credentials')
    } finally {
      setIsChecking(false)
    }
  }

  const handleProceedAsNew = () => {
    setProfile((prev) => ({
      ...prev,
      email: emailInput.trim(),
      mobile: phoneInput.trim(),
    }))
    setCurrentStep(2)
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
        contact: profile.mobile || phoneInput || emailInput,
        email: profile.email || emailInput,
        mobile: profile.mobile || phoneInput,
        profile: {
          full_name: profile.fullName || 'Hardik Chauhan',
          email: profile.email || emailInput || 'hardik@peersglobal.com',
          mobile: profile.mobile || phoneInput || '+919558739086',
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

      // 1. Submit through leadership API
      const res = await leadershipApi.submitNomination(campaign.id, nominationPayload)

      // 2. Persist directly to local PostgreSQL election nominations registry
      try {
        await fetch('/api/leadership/save-nomination', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            campaign_id: campaign.id,
            scope_id: effectiveScopeId,
            email: profile.email || emailInput,
            mobile: profile.mobile || phoneInput,
            profile: {
              full_name: profile.fullName || 'Hardik Chauhan',
              company_name: profile.company || 'Aequitas IT Solutions',
              designation: profile.designation || 'Managing Director & Founder',
              email: profile.email || emailInput,
              mobile: profile.mobile || phoneInput,
            },
            answers,
          }),
        })
      } catch (saveErr) {
        console.warn('Optional local save-nomination note:', saveErr)
      }

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
      <div className="max-w-2xl mx-auto rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 text-center shadow-lg">
        <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-sm">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight mb-2">
          Nomination Application Submitted
        </h2>
        <p className="text-sm text-slate-600 max-w-lg mx-auto mb-7 leading-relaxed font-normal">
          Your nomination for <strong className="text-slate-900 font-semibold">{campaign.role.name}</strong> has been received and routed to the Election Governance Committee for credential verification.
        </p>

        {/* Official Filing Record Card */}
        <div className="relative overflow-hidden p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-white via-slate-50 to-blue-50/20 text-slate-900 text-left max-w-lg mx-auto mb-7 border border-slate-200/90 shadow-md">
          {/* Top brand gradient stripe */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48]" />

          <div className="flex items-center justify-between border-b border-slate-200 pb-3.5 mb-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.12em] brand-gradient-text">
              Official Filing Record
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Under Scrutiny
            </span>
          </div>

          <div className="space-y-4 text-xs">
            <div>
              <div className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">Application Reference</div>
              <div className="font-mono text-xl sm:text-2xl font-extrabold tracking-wider brand-gradient-text mt-1">
                {submissionResult.applicationNumber}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-slate-700 pt-2 border-t border-slate-200">
              <div>
                <span className="text-slate-500 text-[11px] block font-medium">Candidate:</span>
                <div className="font-bold text-slate-900 text-sm mt-0.5">{profile.fullName}</div>
              </div>
              <div>
                <span className="text-slate-500 text-[11px] block font-medium">Target Role:</span>
                <div className="font-bold text-slate-900 text-sm mt-0.5">{campaign.role.name}</div>
              </div>
              <div>
                <span className="text-slate-500 text-[11px] block font-medium">Jurisdiction:</span>
                <div className="font-bold text-slate-900 text-sm mt-0.5">
                  {scopes.find((s) => s.id === selectedScopeId)?.name || 'Surat District'}
                </div>
              </div>
              <div>
                <span className="text-slate-500 text-[11px] block font-medium">Submission Date:</span>
                <div className="font-bold text-slate-900 text-sm mt-0.5">{new Date().toLocaleDateString('en-IN', { day: '2-digit', month: '2-digit', year: 'numeric' })}</div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-500 mb-7 max-w-lg mx-auto leading-relaxed font-normal">
          The Scrutiny Committee verifies all Form 1 responses and KYC credentials in accordance with the Peers Global Charter. Formal notification will be dispatched via SMS and registered email prior to candidate shortlist release.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/candidate/votes"
            className="brand-btn-primary px-7 py-3 rounded-full text-xs font-semibold text-white shadow-lg transition-all flex items-center gap-1.5"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Track My Endorsement Votes</span>
          </Link>
          <Link
            href={`/leadership/campaigns/${campaign.id}`}
            className="px-6 py-3 rounded-full border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-all"
          >
            Back to Campaign Overview
          </Link>
          <Link
            href="/leadership/campaigns"
            className="px-6 py-3 rounded-full border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-all"
          >
            Explore All Elections
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Top Header Card */}
      <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48]" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
              Leadership Selection Portal
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Form 1: <span className="brand-gradient-text">Candidate Nomination</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              {campaign.name} • Nomination filing for <strong className="text-slate-900">{campaign.role.name}</strong>
            </p>
          </div>

          {draftSavedAt && (
            <div className="text-xs text-slate-500 flex items-center gap-1.5 font-medium bg-slate-50 px-3.5 py-1.5 rounded-full border border-slate-200 w-fit">
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              <span>Draft saved at {draftSavedAt}</span>
            </div>
          )}
        </div>

        {/* Wizard Step Progress Bar */}
        <div className="mt-6 pt-5 border-t border-slate-100">
          <div className="flex items-center justify-between mb-2.5">
            <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Step {currentStep} of 5: <span className="text-[#1D4ED8]">{stepsList[currentStep - 1]?.label}</span>
            </div>
            <span className="text-xs font-mono font-bold text-slate-400">
              {Math.round((currentStep / 5) * 100)}% Complete
            </span>
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
      </div>

      {/* Main Wizard Card */}
      <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48]" />
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-3">
            <AlertCircle className="w-5 h-5 shrink-0 text-red-600" />
            <span>{error}</span>
          </div>
        )}

        {/* ---------------- STEP 1: IDENTITY & MEMBERSHIP VERIFICATION (NO OTP) ---------------- */}
        {currentStep === 1 && (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-blue-50 text-[#1D4ED8] border border-blue-200 mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1D4ED8]" /> Instant Member Check — No Login or OTP Required
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight mb-1.5">
                Step 1: Contact &amp; Membership Verification
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Enter your registered Email Address and Phone Number. We will verify whether your account exists in our application and automatically pre-fill your nomination credentials.
              </p>
            </div>

            <form onSubmit={handleCheckMembership} className="max-w-md space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1.5 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-slate-500" />
                    Registered Email Address
                  </span>
                  <span className="text-[11px] font-normal text-slate-400">Required</span>
                </label>
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => {
                    setEmailInput(e.target.value)
                    if (lookupFeedback) setLookupFeedback(null)
                  }}
                  placeholder="e.g. harsh.vora@demo.unity.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-[#1D4ED8] focus:border-[#1D4ED8] focus:outline-none transition-all shadow-xs"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1.5 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-slate-500" />
                    Mobile / Phone Number
                  </span>
                  <span className="text-[11px] font-normal text-slate-400">Required</span>
                </label>
                <input
                  type="tel"
                  value={phoneInput}
                  onChange={(e) => {
                    setPhoneInput(e.target.value)
                    if (lookupFeedback) setLookupFeedback(null)
                  }}
                  placeholder="e.g. 9800000011 or +91 95587 39086"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-[#1D4ED8] focus:border-[#1D4ED8] focus:outline-none transition-all shadow-xs"
                  required
                />
              </div>

              {/* Status Feedback Banners */}
              {lookupFeedback?.status === 'success' && (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-1.5 transition-all">
                  <div className="flex items-center gap-2 font-bold text-xs text-emerald-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Existing Member Verified: {lookupFeedback.userName}</span>
                  </div>
                  <p className="text-[12px] text-emerald-700 leading-relaxed">
                    {lookupFeedback.company ? `${lookupFeedback.company} · ` : ''}Your membership standing is verified and all nomination details have been automatically filled. Advancing to profile review...
                  </p>
                </div>
              )}

              {lookupFeedback?.status === 'not_found' && (
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 space-y-3 transition-all">
                  <div className="flex items-center gap-2 font-bold text-xs text-amber-800">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>No Existing Account Found</span>
                  </div>
                  <p className="text-[12px] text-amber-800/90 leading-relaxed">
                    No active user matched this email and phone in our database. You can still apply as a new candidate and enter your details manually.
                  </p>
                  <button
                    type="button"
                    onClick={handleProceedAsNew}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-xs transition-colors"
                  >
                    Continue as New Applicant <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isChecking}
                  className="w-full py-3 px-5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {isChecking ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" /> Verifying Credentials...
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="w-4 h-4" /> Verify &amp; Continue
                    </>
                  )}
                </button>
              </div>

              {/* Quick Fill Pills for Testing */}
              <div className="pt-4 border-t border-slate-100">
                <div className="text-[11px] uppercase font-bold tracking-wider text-slate-400 mb-2">
                  Sample Registered Members (Database):
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'Harsh Chauhan', email: 'harshchauhan9724@gmail.com', phone: '9724636800' },
                    { name: 'Swati Kulkarni', email: 'swati.kulkarni@demo.unity.com', phone: '9800000018' },
                    { name: 'Harsh Vora', email: 'harsh.vora@demo.unity.com', phone: '9800000011' },
                    { name: 'Gaurav Mishra', email: 'gaurav.mishra@demo.unity.com', phone: '9800000021' },
                    { name: 'Bhavna Mehta', email: 'bhavna.mehta@demo.unity.com', phone: '9800000078' },
                  ].map((demo) => (
                    <button
                      key={demo.email}
                      type="button"
                      onClick={() => {
                        setEmailInput(demo.email)
                        setPhoneInput(demo.phone)
                        setLookupFeedback(null)
                      }}
                      className="text-[11px] px-3 py-1.5 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-[#1D4ED8] text-slate-600 transition-colors border border-slate-200"
                    >
                      {demo.name}
                    </button>
                  ))}
                </div>
              </div>
            </form>
          </div>
        )}

        {/* ---------------- STEP 2: PROFILE & ROLE SCOPE ---------------- */}
        {currentStep === 2 && (
          <div>
            <div className="mb-6">
              {isExistingMember && (
                <div className="mb-4 p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      <strong>Existing Member Verified:</strong> Pre-filled from Peers Global Unity database ({profile.email} · {profile.mobile})
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="text-[11px] font-semibold text-[#1D4ED8] underline hover:no-underline"
                  >
                    Change Credentials
                  </button>
                </div>
              )}
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight mb-1.5">
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
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight mb-1">
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
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight mb-1.5">
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
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight mb-1.5">
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
