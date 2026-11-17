'use client'

import React, { useState, useEffect, useRef, useTransition } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import {
  Check,
  ChevronDown,
  UploadCloud,
  FileText,
  Lock,
  Search,
  Sparkles,
  ArrowRight,
  UserCheck,
  ShieldCheck,
  HelpCircle,
  ExternalLink,
  RotateCcw,
  X,
  AlertCircle,
  Clock,
  Building2,
  Award,
  Info,
} from 'lucide-react'

export interface LeadershipRoleOption {
  key: string
  name: string
  short_name: string
  category: string
  belonging_type: 'district' | 'ecosystem' | 'industry' | 'circle' | 'committee'
  description: string
}

export interface CircleOption {
  id: string
  name: string
  slug: string
  city?: string
}

export interface IndustryOption {
  id: string
  name: string
  slug: string
}

export interface CommitteeOption {
  id: string
  name: string
  description: string
}

export interface CityOption {
  id: string
  name: string
  state: string | null
  district: string | null
  country?: string | null
  formatted_location?: string
}

function countWords(str: string): number {
  return str.trim() ? str.trim().split(/\s+/).length : 0
}

export function NominationSingleForm() {
  const [isPending, startTransition] = useTransition()
  const searchParams = useSearchParams()
  const roleParam = searchParams.get('role') || searchParams.get('position')

  // 1. Meta data loaded from backend
  const [roles, setRoles] = useState<LeadershipRoleOption[]>([])
  const [circles, setCircles] = useState<CircleOption[]>([])
  const [industries, setIndustries] = useState<IndustryOption[]>([])
  const [committees, setCommittees] = useState<CommitteeOption[]>([])
  const [campaignId, setCampaignId] = useState<string>('23ba107a-f314-4cd9-b04a-7af04951f95c')

  // =========================================================================
  // SECTION 1: IDENTIFY STATE
  // =========================================================================
  const [selectedRoleKey, setSelectedRoleKey] = useState<string>('ded')
  const [selectedBelongingId, setSelectedBelongingId] = useState<string>('')
  const [selectedBelongingName, setSelectedBelongingName] = useState<string>('')
  const [selectedCity, setSelectedCity] = useState<string>('')
  const [selectedCityId, setSelectedCityId] = useState<string>('')

  // City Search Autocomplete
  const [citySearchOpen, setCitySearchOpen] = useState(false)
  const [citySearchQuery, setCitySearchQuery] = useState('')
  const [citySearchResults, setCitySearchResults] = useState<CityOption[]>([])
  const [isSearchingCities, setIsSearchingCities] = useState(false)

  // OTP Verification Gate
  const [contactInput, setContactInput] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const [verificationId, setVerificationId] = useState('')
  const [otpCode, setOtpCode] = useState('')
  const [isSendingOtp, setIsSendingOtp] = useState(false)
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false)
  const [isVerified, setIsVerified] = useState(false)
  const [isExistingMember, setIsExistingMember] = useState<boolean | null>(null)
  const [verificationMessage, setVerificationMessage] = useState<string | null>(null)
  const [verificationError, setVerificationError] = useState<string | null>(null)
  const masterProfileRef = useRef<any>(null)
  const cachedMemberProfileRef = useRef<any>(null)

  // =========================================================================
  // SECTION 2: YOUR PROFILE STATE
  // =========================================================================
  const [fullName, setFullName] = useState('')
  const [photoUrl, setPhotoUrl] = useState<string | null>(null)
  const [companyName, setCompanyName] = useState('')
  const [designation, setDesignation] = useState('')
  const [industryName, setIndustryName] = useState('')
  const [verifiedEmail, setVerifiedEmail] = useState('')
  const [verifiedMobile, setVerifiedMobile] = useState('')
  const [linkedinUrl, setLinkedinUrl] = useState('')
  const [websiteUrl, setWebsiteUrl] = useState('')

  // Read-only member details from verified master profile
  const [currentCircle, setCurrentCircle] = useState<string>('')
  const [currentRoleHeld, setCurrentRoleHeld] = useState<string>('')
  const [memberSince, setMemberSince] = useState<string>('')
  const [lifeImpactScore, setLifeImpactScore] = useState<number | null>(null)
  const [attendanceRate, setAttendanceRate] = useState<string>('')

  // Track modified fields so admin sees what changed from master profile
  const [profileChanges, setProfileChanges] = useState<string[]>([])

  // =========================================================================
  // SECTION 3: NOMINATION DETAILS STATE
  // =========================================================================
  const [experienceYears, setExperienceYears] = useState('')
  const [leadershipStatement, setLeadershipStatement] = useState('') // max 20 words ★
  const [whyRole, setWhyRole] = useState('') // max 150 words
  const [vision12Months, setVision12Months] = useState('') // max 150 words ★
  const [hoursPerWeek, setHoursPerWeek] = useState<string>('10-15 hours/week')
  const [hasOtherNetworkRole, setHasOtherNetworkRole] = useState<boolean | null>(null)
  const [otherNetworkDetails, setOtherNetworkDetails] = useState('')
  const [videoUrl, setVideoUrl] = useState('')

  // =========================================================================
  // SECTION 4: DECLARATIONS & DOCUMENTS STATE
  // =========================================================================
  const [decTruth, setDecTruth] = useState(false)
  const [decConduct, setDecConduct] = useState(false)
  const [decConsent, setDecConsent] = useState(false)
  const [decJury, setDecJury] = useState(false)

  const [idFile, setIdFile] = useState<string>('')
  const [letterFile, setLetterFile] = useState<string>('')
  const [deckFile, setDeckFile] = useState<string>('')

  // Hidden File Inputs
  const idInputRef = useRef<HTMLInputElement>(null)
  const letterInputRef = useRef<HTMLInputElement>(null)
  const deckInputRef = useRef<HTMLInputElement>(null)
  const photoInputRef = useRef<HTMLInputElement>(null)

  // Form Status State
  const [touched, setTouched] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submissionReceipt, setSubmissionReceipt] = useState<{
    applicationNumber: string
    candidateId: string
    timestamp: string
  } | null>(null)

  // 1. Fetch Meta (Roles, Circles, Industries, Committees)
  useEffect(() => {
    async function loadMeta() {
      try {
        const res = await fetch('/api/leadership/meta')
        if (res.ok) {
          const data = await res.json()
          if (data.roles) setRoles(data.roles)
          if (data.circles) setCircles(data.circles)
          if (data.industries) setIndustries(data.industries)
          if (data.committees) setCommittees(data.committees)
          if (data.campaign_id) setCampaignId(data.campaign_id)
        }
      } catch (err) {
        console.warn('Could not load leadership metadata:', err)
      }
    }
    loadMeta()
  }, [])

  // 2. Pre-select Role from URL Param
  useEffect(() => {
    if (!roleParam) return
    const clean = roleParam.toLowerCase().trim().replace(/[-\s]/g, '_')
    const roleMapping: Record<string, string> = {
      circle_founder: 'circle_founder',
      founder: 'circle_founder',
      circle_director: 'circle_director',
      director: 'circle_director',
      industry_director: 'industry_director',
      industry: 'industry_director',
      executive_director: 'ded',
      regional_ed: 'ded',
      ded: 'ded',
      eed: 'eed',
      chair: 'chair',
      circle_chair: 'chair',
      vice_chair: 'vice_chair',
      circle_leader: 'circle_leader',
      leader: 'circle_leader',
      secretary: 'secretary',
      committee_leader: 'committee_leader',
      committee: 'committee_leader',
    }

    const matched = roleMapping[clean]
    if (matched) {
      setSelectedRoleKey(matched)
      const roleMeta = roles.find((r) => r.key === matched)
      if (roleMeta) {
        if (roleMeta.belonging_type === 'industry' && industries.length > 0) {
          setSelectedBelongingId(industries[0].id)
          setSelectedBelongingName(industries[0].name)
        } else if (roleMeta.belonging_type === 'committee' && committees.length > 0) {
          setSelectedBelongingId(committees[0].id)
          setSelectedBelongingName(committees[0].name)
        } else {
          setSelectedBelongingId('')
          setSelectedBelongingName('')
        }
      }
    }
  }, [roleParam, roles, industries, circles, committees])

  // 3. Search Cities with Debounce
  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        setIsSearchingCities(true)
        const res = await fetch(`/api/leadership/cities?q=${encodeURIComponent(citySearchQuery)}&limit=30`)
        if (res.ok) {
          const data = await res.json()
          setCitySearchResults(data.cities || [])
        }
      } catch (err) {
        console.warn('City lookup error:', err)
      } finally {
        setIsSearchingCities(false)
      }
    }, 250)
    return () => clearTimeout(timer)
  }, [citySearchQuery])

  // Get active role object
  const currentRole = roles.find((r) => r.key === selectedRoleKey) || {
    key: selectedRoleKey,
    name: selectedRoleKey.toUpperCase(),
    short_name: selectedRoleKey.toUpperCase(),
    category: 'Leadership',
    belonging_type: 'district',
    description: 'Lead executive governance and strategic ecosystem growth.',
  }

  // Handle Role Change
  const handleRoleSelect = (key: string) => {
    setSelectedRoleKey(key)
    setTouched(true)
    const roleMeta = roles.find((r) => r.key === key)
    if (!roleMeta) return

    if (roleMeta.belonging_type === 'industry' && industries.length > 0) {
      setSelectedBelongingId(industries[0].id)
      setSelectedBelongingName(industries[0].name)
    } else if (roleMeta.belonging_type === 'committee' && committees.length > 0) {
      setSelectedBelongingId(committees[0].id)
      setSelectedBelongingName(committees[0].name)
    } else {
      setSelectedBelongingId('')
      setSelectedBelongingName('')
    }
  }

  // =========================================================================
  // IDENTITY CHECK & OTP HANDLERS (Seamless: Enter -> Check Member -> OTP or Direct Form)
  // =========================================================================
  const handleCheckAndProceed = async () => {
    const contact = contactInput.trim()
    if (!contact) {
      setVerificationError('Please enter your mobile number or email address.')
      return
    }

    setIsSendingOtp(true)
    setVerificationError(null)
    setVerificationMessage(null)

    try {
      // Step 1: Check in the background if this email/phone belongs to an existing member
      const checkRes = await fetch('/api/leadership/check-member', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: contact.includes('@') ? contact : undefined,
          phone: !contact.includes('@') ? contact : undefined,
          mobile: !contact.includes('@') ? contact : undefined,
        }),
      })

      const checkData = await checkRes.json()

      if (checkRes.ok && checkData.success && checkData.exists && checkData.is_existing_member) {
        // CASE A: User IS an existing member in our user table!
        // Show OTP box and dispatch code so their private profile is protected.
        cachedMemberProfileRef.current = checkData.profile || null

        const otpRes = await fetch('/api/leadership/nomination/request-otp', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contact,
            campaign_id: campaignId,
          }),
        })

        const otpData = await otpRes.json()
        if (otpRes.ok && otpData.success) {
          setOtpSent(true)
          setVerificationId(otpData.data?.verification_id || `vnom_${Date.now()}`)
          setVerificationMessage(
            otpData.message || `Peers Global member account found! A 6-digit verification code has been sent to ${contact}. Please enter it below to unlock your profile.`
          )
        } else {
          setVerificationError(otpData.message || 'Could not send verification code. Please check your contact and try again.')
        }
      } else {
        // CASE B: User is NOT in our user table -> Simply proceed directly to form!
        setIsVerified(true)
        setIsExistingMember(false)
        masterProfileRef.current = null
        cachedMemberProfileRef.current = null

        if (contact.includes('@')) {
          setVerifiedEmail(contact)
        } else {
          setVerifiedMobile(contact)
        }

        setVerificationMessage("You're not yet in Peers Global. Continue as a new nominee.")
      }
    } catch (e: any) {
      setVerificationError(e?.message || 'Network error while checking identity.')
    } finally {
      setIsSendingOtp(false)
    }
  }

  const handleResendOtp = async () => {
    const contact = contactInput.trim()
    if (!contact) return
    setIsSendingOtp(true)
    setVerificationError(null)
    try {
      const res = await fetch('/api/leadership/nomination/request-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contact,
          campaign_id: campaignId,
        }),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setVerificationId(data.data?.verification_id || `vnom_${Date.now()}`)
        setVerificationMessage(`A new 6-digit verification code has been sent to ${contact}.`)
      } else {
        setVerificationError(data.message || 'Could not resend verification code.')
      }
    } catch (e: any) {
      setVerificationError(e?.message || 'Error resending verification code.')
    } finally {
      setIsSendingOtp(false)
    }
  }

  const handleVerifyOtp = async () => {
    const code = otpCode.trim()
    if (!code || code.length < 6) {
      setVerificationError('Please enter the 6-digit verification code.')
      return
    }

    setIsVerifyingOtp(true)
    setVerificationError(null)

    try {
      const res = await fetch('/api/leadership/nomination/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          verification_id: verificationId,
          otp: code,
          contact: contactInput.trim(),
        }),
      })

      const data = await res.json()
      if (res.ok && data.success && data.verified) {
        setIsVerified(true)
        setIsExistingMember(true)

        const p = data.profile || cachedMemberProfileRef.current
        if (p) {
          masterProfileRef.current = p
          setFullName(p.full_name || p.fullName || '')
          setCompanyName(p.company_name || p.company || '')
          setDesignation(p.designation || '')
          setIndustryName(p.industry || p.industry_name || '')
          setVerifiedEmail(p.email || (contactInput.includes('@') ? contactInput : ''))
          setVerifiedMobile(p.mobile || p.phone || (!contactInput.includes('@') ? contactInput : ''))
          setLinkedinUrl(p.linkedin || p.socialLinks || '')
          setWebsiteUrl(p.website || '')
          setPhotoUrl(p.photo_url || p.profile_photo_url || null)
          if (p.city) {
            setSelectedCity(
              p.formatted_location ||
                `${p.city}, ${p.district || p.city}, ${p.state || ''}, ${p.country || 'India'}`
                  .replace(/,\s*,/g, ',')
                  .trim()
            )
          }
          setCurrentCircle(p.current_circle || 'Peers Global Community')
          setCurrentRoleHeld(p.current_role || 'Active Peer Member')
          setMemberSince(p.member_since || '2024')
          setLifeImpactScore(p.life_impact_score || 85)
          setAttendanceRate(p.attendance_rate || '94%')
          setVerificationMessage('Identity verified! Your profile data has been securely loaded.')
        } else {
          setVerificationMessage('Identity verified successfully!')
        }
      } else {
        setVerificationError(data.message || 'Invalid or expired verification code. Please check and try again.')
      }
    } catch (e: any) {
      setVerificationError(e?.message || 'Verification error occurred.')
    } finally {
      setIsVerifyingOtp(false)
    }
  }

  // Track profile changes from master
  const markProfileChanged = (fieldName: string) => {
    if (isExistingMember && masterProfileRef.current) {
      setProfileChanges((prev) => Array.from(new Set([...prev, fieldName])))
    }
  }

  // File Upload Helpers
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setter: (val: string) => void) => {
    const file = e.target.files?.[0]
    if (file) {
      const sizeMb = (file.size / (1024 * 1024)).toFixed(1)
      setter(`${file.name} · ${sizeMb} MB`)
      setTouched(true)
    }
  }

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (uploadEvent) => {
        setPhotoUrl(uploadEvent.target?.result as string)
        markProfileChanged('photo')
        setTouched(true)
      }
      reader.readAsDataURL(file)
    }
  }

  // =========================================================================
  // SUBMISSION LOGIC
  // =========================================================================
  const statementWords = countWords(leadershipStatement)
  const whyRoleWords = countWords(whyRole)
  const visionWords = countWords(vision12Months)

  const isIdentifyDone = isVerified && selectedRoleKey !== '' && selectedCity.trim() !== ''
  const isProfileDone =
    fullName.trim() !== '' &&
    companyName.trim() !== '' &&
    designation.trim() !== '' &&
    industryName.trim() !== '' &&
    Boolean(verifiedEmail || verifiedMobile)
  const isNominationDetailsDone =
    statementWords > 0 &&
    statementWords <= 20 &&
    visionWords > 0 &&
    visionWords <= 150 &&
    whyRoleWords <= 150 &&
    hasOtherNetworkRole !== null &&
    (hasOtherNetworkRole === false || otherNetworkDetails.trim() !== '') &&
    hoursPerWeek !== ''
  const isDeclarationsDone = decTruth && decConduct && decConsent && decJury && Boolean(idFile)

  // Missing items tracker for the sticky bottom bar
  const missingItems: Array<{ label: string; href: string }> = []
  if (!isVerified) missingItems.push({ label: 'identity verification (OTP)', href: '#sec-identify' })
  if (!selectedCity.trim()) missingItems.push({ label: 'target city/district', href: '#sec-identify' })
  if (!fullName.trim()) missingItems.push({ label: 'your full name', href: '#sec-profile' })
  if (!companyName.trim()) missingItems.push({ label: 'your company name', href: '#sec-profile' })
  if (!designation.trim()) missingItems.push({ label: 'your designation', href: '#sec-profile' })
  if (!industryName.trim()) missingItems.push({ label: 'your industry', href: '#sec-profile' })
  if (statementWords === 0) missingItems.push({ label: 'one-line leadership statement', href: '#sec-nomination' })
  if (statementWords > 20) missingItems.push({ label: 'leadership statement (max 20 words)', href: '#sec-nomination' })
  if (visionWords === 0) missingItems.push({ label: '12-month vision plan', href: '#sec-nomination' })
  if (visionWords > 150) missingItems.push({ label: '12-month vision (max 150 words)', href: '#sec-nomination' })
  if (whyRoleWords > 150) missingItems.push({ label: 'why role answer (max 150 words)', href: '#sec-nomination' })
  if (hasOtherNetworkRole === null) missingItems.push({ label: 'network association disclosure', href: '#sec-nomination' })
  if (hasOtherNetworkRole === true && !otherNetworkDetails.trim()) missingItems.push({ label: 'network association details', href: '#sec-nomination' })
  if (!idFile) missingItems.push({ label: 'ID proof document', href: '#sec-declarations' })
  if (!decTruth || !decConduct || !decConsent || !decJury) missingItems.push({ label: 'mandatory declarations', href: '#sec-declarations' })

  const isReadyToSubmit = missingItems.length === 0
  const shownMissing = missingItems.slice(0, 2).map((m) => m.label).join(', ')
  const statusTitle = isReadyToSubmit
    ? 'Ready to submit'
    : `${missingItems.length} ${missingItems.length === 1 ? 'item left' : 'items left'}`
  const statusDetail = isReadyToSubmit
    ? 'All required fields & declarations are completed.'
    : `Still needed: ${shownMissing}${missingItems.length > 2 ? ` and ${missingItems.length - 2} more` : ''}.`

  const handleFinalSubmit = async () => {
    if (!isReadyToSubmit) return

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const payload = {
        campaign_id: campaignId,
        email: verifiedEmail.trim().toLowerCase(),
        mobile: verifiedMobile.trim(),
        applied_role: selectedRoleKey,
        role_name: currentRole.name,
        belonging_type: currentRole.belonging_type,
        belonging_id: selectedBelongingId,
        belonging_name: selectedBelongingName,
        city_name: selectedCity,
        city_id: selectedCityId,
        industry: industryName.trim(),
        website: websiteUrl.trim(),
        since: experienceYears,
        video_url: videoUrl.trim(),
        // New nomination fields
        leadership_statement: leadershipStatement.trim(),
        why_role: whyRole.trim(),
        vision_12_months: vision12Months.trim(),
        hours_per_week: hoursPerWeek,
        other_network_involvement: Boolean(hasOtherNetworkRole),
        other_network_details: otherNetworkDetails.trim(),
        profile_changes: profileChanges,
        // Master member context
        current_circle: currentCircle,
        current_role: currentRoleHeld,
        member_since: memberSince,
        life_impact_score: lifeImpactScore,
        attendance_rate: attendanceRate,
        // Files
        id_file: idFile,
        letter_file: letterFile,
        deck_file: deckFile,
        profile: {
          full_name: fullName.trim(),
          fullName: fullName.trim(),
          email: verifiedEmail.trim().toLowerCase(),
          mobile: verifiedMobile.trim(),
          company_name: companyName.trim(),
          company: companyName.trim(),
          designation: designation.trim(),
          industry: industryName.trim(),
          city: selectedCity,
          linkedin: linkedinUrl.trim(),
          website: websiteUrl.trim(),
          photo_url: photoUrl,
        },
        declarations: {
          dec_truthful_information: decTruth,
          dec_code_of_conduct_no_incentives: decConduct,
          dec_public_profile_consent: decConsent,
          dec_jury_contact_consent: decJury,
          dec_code_of_conduct: decConduct,
        },
      }

      const res = await fetch('/api/leadership/save-nomination', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setSubmissionReceipt({
          applicationNumber: data.application_number || `PG-2026-${Math.floor(1000 + Math.random() * 9000)}`,
          candidateId: data.candidate_id || data.id || 'PG-CAND',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        })
        setSubmitted(true)
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
        }
      } else {
        setSubmitError(data.message || 'Submission failed. Please check your inputs and try again.')
      }
    } catch (err: any) {
      setSubmitError(err?.message || 'Network error occurred while submitting nomination.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Scroll to top on submit
  useEffect(() => {
    if (submitted && typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }, [submitted])

  // Auto-scroll to profile section smoothly once verified
  useEffect(() => {
    if (isVerified && typeof window !== 'undefined') {
      const timer = setTimeout(() => {
        const el = document.getElementById('sec-profile')
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 150)
      return () => clearTimeout(timer)
    }
  }, [isVerified])

  const initials = fullName
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('') || 'PG'

  return (
    <div className="min-h-screen bg-[#F3F5FA] font-sans text-[#0F172A] flex flex-col antialiased">
      <div className="w-full max-w-[760px] mx-auto px-4 py-8 sm:py-12 flex flex-col gap-6 flex-1">
        {/* ========================================================================= */}
        {/* SUCCESS VIEW                                                              */}
        {/* ========================================================================= */}
        {submitted ? (
          <div className="bg-white border border-[#DDE3EE] rounded-2xl p-8 sm:p-12 flex flex-col items-center gap-5 text-center shadow-sm">
            <span className="w-16 h-16 rounded-full bg-[#047857] flex items-center justify-center text-white shadow-md">
              <Check className="w-8 h-8 stroke-[3]" />
            </span>
            <div className="space-y-2">
              <h1 className="text-3xl font-extrabold tracking-tight text-[#0F172A]">Nomination submitted</h1>
              <p className="text-base text-slate-600 max-w-lg leading-relaxed">
                Thank you, <strong className="text-slate-900">{fullName.split(' ')[0] || 'Leader'}</strong>. Your application
                for <strong className="text-[#1D4ED8]">{currentRole.name}</strong> representing{' '}
                <strong className="text-slate-900">{selectedCity}</strong> has been received and securely forwarded to the
                Scrutiny Committee.
              </p>
            </div>

            <div className="w-full max-w-md bg-slate-50 border border-slate-200 rounded-xl p-5 text-left space-y-3 mt-2">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Official Filing Record</span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#047857] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5" /> VERIFIED
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                <div>
                  <span className="text-slate-500 block">Candidate:</span>
                  <span className="font-semibold text-slate-800">{fullName}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Applied Role:</span>
                  <span className="font-semibold text-slate-800">{currentRole.short_name}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-slate-500 block">Jurisdiction / Location:</span>
                  <span className="font-semibold text-slate-800">{selectedCity}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Time Filed:</span>
                  <span className="font-semibold text-slate-800">{submissionReceipt?.timestamp || 'Just now'}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false)
                  setIsVerified(false)
                  setOtpSent(false)
                  setContactInput('')
                  setOtpCode('')
                }}
                className="h-12 px-6 rounded-xl border border-slate-300 bg-white text-slate-800 font-semibold text-sm hover:bg-slate-50 transition-colors"
              >
                File another application
              </button>
              <Link
                href="/leadership"
                className="h-12 px-6 rounded-xl bg-[#1D4ED8] text-white font-semibold text-sm inline-flex items-center justify-center hover:bg-[#1E3A8A] transition-colors"
              >
                Back to Leadership
              </Link>
            </div>
          </div>
        ) : (
          /* ========================================================================= */
          /* MAIN FORM                                                                 */
          /* ========================================================================= */
          <div className="flex flex-col gap-6">
            {/* Form Header */}
            <header className="px-1">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
                Apply for Leadership
              </h1>
            </header>

            {/* Error Banner */}
            {submitError && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center justify-between">
                <span>{submitError}</span>
                <button
                  type="button"
                  onClick={() => setSubmitError(null)}
                  className="text-xs font-bold underline hover:text-red-900"
                >
                  Dismiss
                </button>
              </div>
            )}

            {/* =================================================================== */}
            {/* SECTION 1: IDENTIFY                                                 */}
            {/* =================================================================== */}
            <section
              id="sec-identify"
              className="bg-white border border-[#DDE3EE] rounded-2xl p-6 sm:p-7 flex flex-col gap-5 shadow-sm scroll-mt-24"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <h2 className="text-xl font-bold text-[#0F172A]">Identify</h2>
                  {isIdentifyDone && (
                    <span className="w-5 h-5 rounded-full bg-[#047857] flex items-center justify-center text-white">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                  )}
                </div>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#E3EAFD] text-[#1E3A8A]">
                  Required
                </span>
              </div>

              {/* Role applying for */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Role applying for <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    value={selectedRoleKey}
                    onChange={(e) => handleRoleSelect(e.target.value)}
                    className="w-full h-12 px-3.5 pr-10 bg-white border border-[#8190A7] rounded-xl text-sm font-semibold text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] transition-all cursor-pointer appearance-none"
                  >
                    <option value="">-- Choose Target Leadership Role --</option>
                    {roles.map((r) => {
                      const label = r.name.includes(`(${r.short_name})`)
                        ? r.name
                        : r.short_name && r.short_name !== r.name
                          ? `${r.name} (${r.short_name})`
                          : r.name
                      return (
                        <option key={r.key} value={r.key}>
                          {label}
                        </option>
                      )
                    })}
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3.5 top-4 pointer-events-none" />
                </div>
                <p className="text-xs text-slate-500 mt-0.5 italic">{currentRole.description}</p>
              </div>

              {/* Territory / Industry / Circle Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                {currentRole.belonging_type === 'industry' && (
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                      Industry Vertical <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={selectedBelongingId}
                      onChange={(e) => {
                        setSelectedBelongingId(e.target.value)
                        const ind = industries.find((i) => i.id === e.target.value)
                        if (ind) {
                          setSelectedBelongingName(ind.name)
                          setIndustryName(ind.name)
                        }
                        setTouched(true)
                      }}
                      className="h-12 px-3.5 bg-white border border-[#8190A7] rounded-xl text-sm font-medium text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                    >
                      <option value="">-- Choose Industry Vertical --</option>
                      {industries.map((ind) => (
                        <option key={ind.id} value={ind.id}>
                          {ind.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {currentRole.belonging_type === 'committee' && (
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                      Committee <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={selectedBelongingId}
                      onChange={(e) => {
                        setSelectedBelongingId(e.target.value)
                        const com = committees.find((item) => item.id === e.target.value)
                        if (com) setSelectedBelongingName(com.name)
                        setTouched(true)
                      }}
                      className="h-12 px-3.5 bg-white border border-[#8190A7] rounded-xl text-sm font-medium text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                    >
                      <option value="">-- Choose Committee --</option>
                      {committees.map((com) => (
                        <option key={com.id} value={com.id}>
                          {com.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* City / District with Country and District formatted */}
                <div className="flex flex-col gap-1.5 relative sm:col-span-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    City / District / Territory <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Type to search City, District, State or Country..."
                      value={selectedCity}
                      onFocus={() => setCitySearchOpen(true)}
                      onChange={(e) => {
                        setSelectedCity(e.target.value)
                        setCitySearchQuery(e.target.value)
                        setCitySearchOpen(true)
                        setTouched(true)
                      }}
                      className="w-full h-12 px-3.5 pr-10 bg-white border border-[#8190A7] rounded-xl text-sm font-semibold text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                    />
                    <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-4 pointer-events-none" />
                  </div>

                  {citySearchOpen && citySearchResults.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-1 max-h-56 overflow-y-auto bg-white border border-slate-200 rounded-xl shadow-xl z-50 divide-y divide-slate-100">
                      {citySearchResults.map((c) => {
                        const fullLoc =
                          c.formatted_location ||
                          `${c.name}, ${c.district || c.name} District, ${c.state || ''}, ${c.country || 'India'}`
                            .replace(/,\s*,/g, ',')
                            .trim()
                        return (
                          <button
                            key={c.id}
                            type="button"
                            onClick={() => {
                              setSelectedCity(fullLoc)
                              setSelectedCityId(c.id)
                              setCitySearchOpen(false)
                              setTouched(true)
                            }}
                            className="w-full text-left px-3.5 py-2.5 hover:bg-blue-50 text-xs flex items-center justify-between transition-colors"
                          >
                            <span className="font-semibold text-slate-800">{c.name}</span>
                            <span className="text-slate-500 text-[11px]">{c.district ? `${c.district} · ` : ''}{c.state || ''} {c.country ? `(${c.country})` : ''}</span>
                          </button>
                        )
                      })}
                    </div>
                  )}
                </div>
              </div>

              {/* Privacy Protection: OTP Verification Box */}
              <div className="mt-2 p-4 sm:p-5 bg-[#F6F8FC] border border-[#DDE3EE] rounded-xl flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#1D4ED8]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Identity Verification
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Enter your registered mobile number or email address. If you are an existing member, we will verify your identity with a 6-digit OTP before loading your profile.
                </p>

                {!isVerified ? (
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col sm:flex-row gap-2.5">
                      <input
                        type="text"
                        disabled={otpSent || isSendingOtp}
                        value={contactInput}
                        onChange={(e) => setContactInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && !otpSent && contactInput.trim()) {
                            e.preventDefault()
                            handleCheckAndProceed()
                          }
                        }}
                        placeholder="Mobile number (+91...) or Email address"
                        className="flex-1 h-11 px-3.5 bg-white border border-[#8190A7] rounded-xl text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] disabled:bg-slate-100"
                      />
                      {!otpSent ? (
                        <button
                          type="button"
                          disabled={isSendingOtp || !contactInput.trim()}
                          onClick={handleCheckAndProceed}
                          className="h-11 px-6 rounded-xl bg-[#1D4ED8] hover:bg-[#1E3A8A] text-white text-xs font-bold transition-all disabled:opacity-50 shrink-0"
                        >
                          {isSendingOtp ? 'Checking...' : 'Enter'}
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => {
                            setOtpSent(false)
                            setOtpCode('')
                            setVerificationError(null)
                            setVerificationMessage(null)
                          }}
                          className="h-11 px-3.5 rounded-xl border border-slate-300 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 shrink-0"
                        >
                          Change Contact
                        </button>
                      )}
                    </div>

                    {otpSent && (
                      <div className="flex flex-col sm:flex-row gap-2.5 items-start sm:items-center animate-fadeIn pt-1">
                        <input
                          type="text"
                          maxLength={6}
                          value={otpCode}
                          onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, ''))}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && otpCode.length >= 6) {
                              e.preventDefault()
                              handleVerifyOtp()
                            }
                          }}
                          placeholder="Enter 6-digit code"
                          className="w-44 h-11 px-3.5 bg-white border border-[#8190A7] rounded-xl text-center text-sm font-mono tracking-widest font-bold text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                        />
                        <button
                          type="button"
                          disabled={isVerifyingOtp || otpCode.length < 6}
                          onClick={handleVerifyOtp}
                          className="h-11 px-6 rounded-xl bg-[#047857] hover:bg-[#065F46] text-white text-xs font-bold transition-all disabled:opacity-50"
                        >
                          {isVerifyingOtp ? 'Verifying...' : 'Verify & Load Profile'}
                        </button>
                        <button
                          type="button"
                          onClick={handleResendOtp}
                          className="text-xs text-[#1D4ED8] hover:underline font-semibold ml-1"
                        >
                          Resend code
                        </button>
                      </div>
                    )}

                    {verificationMessage && !isVerified && (
                      <div className="text-xs font-medium text-blue-700 bg-blue-50/80 p-2.5 rounded-lg border border-blue-200/80 flex items-center gap-1.5 mt-1">
                        <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-blue-600" />
                        <span>{verificationMessage}</span>
                      </div>
                    )}

                    {verificationError && (
                      <div className="text-xs font-medium text-rose-600 flex items-center gap-1.5 mt-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {verificationError}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-emerald-50 border border-emerald-200">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#047857] stroke-[3]" />
                        <span className="text-xs font-bold text-[#047857]">
                          {isExistingMember ? 'Identity Verified: Peers Global Member' : 'Identity Verified: New Leadership Nominee'}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-slate-600">{contactInput}</span>
                    </div>

                    {!isExistingMember && (
                      <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-xs text-[#1E3A8A] leading-relaxed">
                        <strong>You're not yet in Peers Global. Continue as a new nominee.</strong> Fill in your professional profile below to complete your candidacy.
                      </div>
                    )}
                  </div>
                )}
              </div>
            </section>

            {/* =================================================================== */}
            {/* SECTIONS 2, 3 & 4: REVEALED ONLY AFTER SUCCESSFUL IDENTITY VERIFICATION */}
            {/* =================================================================== */}
            {isVerified && (
              <>
                {/* SECTION 2: YOUR PROFILE */}
                <section
                  id="sec-profile"
                  className="bg-white border border-[#DDE3EE] rounded-2xl p-6 sm:p-7 flex flex-col gap-5 shadow-sm scroll-mt-24 animate-in fade-in slide-in-from-bottom-3 duration-300"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <h2 className="text-xl font-bold text-[#0F172A]">Your profile</h2>
                      {isProfileDone && (
                        <span className="w-5 h-5 rounded-full bg-[#047857] flex items-center justify-center text-white">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#E3EAFD] text-[#1E3A8A]">
                      Required
                    </span>
                  </div>

                  {!isExistingMember && (
                    <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-[#1E3A8A] flex items-center gap-3">
                      <Info className="w-5 h-5 text-[#1D4ED8] shrink-0" />
                      <div>
                        <span className="font-bold text-sm text-[#1E3A8A] block">
                          You&apos;re not yet in Peers Global. Continue as a new nominee
                        </span>
                        <span className="text-slate-600 mt-0.5 block">
                          Please enter your professional profile details below to complete your candidacy.
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Headshot / Photograph ★ */}
                  <div className="flex items-center gap-4 py-1">
                    <div className="relative">
                      {photoUrl ? (
                        <img
                          src={photoUrl}
                          alt={fullName || 'Candidate'}
                          className="w-16 h-16 rounded-full object-cover border-2 border-[#1D4ED8] shadow-sm"
                        />
                      ) : (
                        <div className="w-16 h-16 rounded-full bg-slate-200 text-slate-600 font-extrabold text-lg flex items-center justify-center border border-slate-300">
                          {initials}
                        </div>
                      )}
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs text-slate-500">
                        Official Photograph <span className="text-red-500">*</span> (Displayed on your voter candidate creative)
                      </div>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => photoInputRef.current?.click()}
                          className="h-8 px-3 rounded-lg border border-[#8190A7] bg-white text-xs font-semibold text-slate-800 hover:bg-slate-50"
                        >
                          {photoUrl ? 'Change photo' : 'Upload photo'}
                        </button>
                        {photoUrl && (
                          <button
                            type="button"
                            onClick={() => {
                              setPhotoUrl(null)
                              markProfileChanged('photo')
                            }}
                            className="h-8 px-3 rounded-lg border border-red-200 text-xs font-semibold text-red-600 hover:bg-red-50"
                          >
                            Remove
                          </button>
                        )}
                      </div>
                      <input
                        ref={photoInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="hidden"
                      />
                    </div>
                  </div>

                  {/* Full Name ★, Company ★, Designation ★, Industry ★ */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-700">
                        Full name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value)
                          markProfileChanged('full_name')
                          setTouched(true)
                        }}
                        placeholder="e.g. Dr. Amit Agrawal"
                        className="h-12 px-3.5 bg-white border border-[#8190A7] rounded-xl text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-700">
                        Company name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={companyName}
                        onChange={(e) => {
                          setCompanyName(e.target.value)
                          markProfileChanged('company_name')
                          setTouched(true)
                        }}
                        placeholder="e.g. Acme Health Technologies"
                        className="h-12 px-3.5 bg-white border border-[#8190A7] rounded-xl text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-700">
                        Designation <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={designation}
                        onChange={(e) => {
                          setDesignation(e.target.value)
                          markProfileChanged('designation')
                          setTouched(true)
                        }}
                        placeholder="e.g. Founder & Managing Director"
                        className="h-12 px-3.5 bg-white border border-[#8190A7] rounded-xl text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-700">
                        Industry <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={industryName}
                        onChange={(e) => {
                          setIndustryName(e.target.value)
                          markProfileChanged('industry')
                          setTouched(true)
                        }}
                        placeholder="e.g. Manufacturing, Healthcare, IT..."
                        className="h-12 px-3.5 bg-white border border-[#8190A7] rounded-xl text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-700">
                        Email address <span className="text-xs font-normal text-slate-400">(Verified)</span>
                      </label>
                      <input
                        type="email"
                        value={verifiedEmail}
                        onChange={(e) => {
                          setVerifiedEmail(e.target.value)
                          markProfileChanged('email')
                          setTouched(true)
                        }}
                        placeholder="name@company.com"
                        className="h-12 px-3.5 bg-white border border-[#8190A7] rounded-xl text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-700">
                        Mobile number <span className="text-xs font-normal text-slate-400">(Verified)</span>
                      </label>
                      <input
                        type="tel"
                        value={verifiedMobile}
                        onChange={(e) => {
                          setVerifiedMobile(e.target.value)
                          markProfileChanged('mobile')
                          setTouched(true)
                        }}
                        placeholder="+91..."
                        className="h-12 px-3.5 bg-white border border-[#8190A7] rounded-xl text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-700">
                        LinkedIn URL <span className="text-xs font-normal text-slate-400">(Optional)</span>
                      </label>
                      <input
                        type="url"
                        value={linkedinUrl}
                        onChange={(e) => {
                          setLinkedinUrl(e.target.value)
                          markProfileChanged('linkedin')
                          setTouched(true)
                        }}
                        placeholder="https://linkedin.com/in/..."
                        className="h-12 px-3.5 bg-white border border-[#8190A7] rounded-xl text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-slate-700">
                        Company Website <span className="text-xs font-normal text-slate-400">(Optional)</span>
                      </label>
                      <input
                        type="url"
                        value={websiteUrl}
                        onChange={(e) => {
                          setWebsiteUrl(e.target.value)
                          markProfileChanged('website')
                          setTouched(true)
                        }}
                        placeholder="https://company.com"
                        className="h-12 px-3.5 bg-white border border-[#8190A7] rounded-xl text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                      />
                    </div>
                  </div>

                  {/* Read-Only Member Verification Badge Card */}
                  {isExistingMember && (
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 mt-1">
                      <div className="flex items-center justify-between pb-1.5 border-b border-slate-200 text-xs">
                        <span className="font-bold text-slate-600 uppercase tracking-wider">Peers Global Master Profile (Read-Only)</span>
                        <span className="text-[11px] font-semibold text-slate-500">For Admin & Jury Review</span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs pt-1">
                        <div>
                          <span className="text-slate-400 block">Current Circle:</span>
                          <span className="font-semibold text-slate-800">{currentCircle || 'Peers Global Community'}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block">Current Role:</span>
                          <span className="font-semibold text-slate-800">{currentRoleHeld || 'Active Peer Member'}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block">Member Since:</span>
                          <span className="font-semibold text-slate-800">{memberSince || '2024'}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block">Life Impact Score:</span>
                          <span className="font-semibold text-[#047857]">{lifeImpactScore || 85} / 100</span>
                        </div>
                      </div>
                      {profileChanges.length > 0 && (
                        <div className="text-[11px] text-amber-700 pt-1">
                          ✎ <strong>Flagged edits from master:</strong> {profileChanges.join(', ')} (Admin will review these updates)
                        </div>
                      )}
                    </div>
                  )}
                </section>

                {/* =================================================================== */}
                {/* SECTION 3: NOMINATION DETAILS                                       */}
                {/* =================================================================== */}
                <section
                  id="sec-nomination"
                  className="bg-white border border-[#DDE3EE] rounded-2xl p-6 sm:p-7 flex flex-col gap-5 shadow-sm scroll-mt-24"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <h2 className="text-xl font-bold text-[#0F172A]">Nomination details</h2>
                      {isNominationDetailsDone && (
                        <span className="w-5 h-5 rounded-full bg-[#047857] flex items-center justify-center text-white">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#E3EAFD] text-[#1E3A8A]">
                      Required
                    </span>
                  </div>

                  {/* Years in business / professional experience */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Years in business / professional experience
                    </label>
                    <input
                      type="text"
                      value={experienceYears}
                      onChange={(e) => {
                        setExperienceYears(e.target.value)
                        setTouched(true)
                      }}
                      placeholder="e.g. 12 years"
                      className="w-full sm:w-48 h-11 px-3.5 bg-white border border-[#8190A7] rounded-xl text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                    />
                  </div>

                  {/* One-line leadership statement ★ (max 20 words) */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-slate-700">
                        One-line leadership statement <span className="text-red-500">*</span>
                        <span className="text-xs font-normal text-slate-500 block">
                          This becomes the headline on your official candidate creative. (Max 20 words)
                        </span>
                      </label>
                      <span
                        className={`text-xs font-mono font-bold ${statementWords > 20 ? 'text-rose-600' : 'text-slate-500'
                          }`}
                      >
                        {statementWords} / 20 words
                      </span>
                    </div>
                    <input
                      type="text"
                      value={leadershipStatement}
                      onChange={(e) => {
                        setLeadershipStatement(e.target.value)
                        setTouched(true)
                      }}
                      placeholder="e.g. Scaling collaborative peer ecosystems to drive exponential cross-border industry growth."
                      className="h-12 px-3.5 bg-white border border-[#8190A7] rounded-xl text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                    />
                  </div>

                  {/* Why do you want this role? (max 150 words) */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-slate-700">
                        Why do you want this role? <span className="text-xs font-normal text-slate-400">(Max 150 words)</span>
                      </label>
                      <span
                        className={`text-xs font-mono font-bold ${whyRoleWords > 150 ? 'text-rose-600' : 'text-slate-500'
                          }`}
                      >
                        {whyRoleWords} / 150 words
                      </span>
                    </div>
                    <textarea
                      rows={3}
                      value={whyRole}
                      onChange={(e) => {
                        setWhyRole(e.target.value)
                        setTouched(true)
                      }}
                      placeholder="Describe your motivation to take on this leadership mantle in Peers Global..."
                      className="p-3 bg-white border border-[#8190A7] rounded-xl text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] resize-y"
                    />
                  </div>

                  {/* What will you build in the first 12 months? ★ (max 150 words) */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-slate-700">
                        What will you build in the first 12 months? <span className="text-red-500">*</span>
                        <span className="text-xs font-normal text-slate-500 block">
                          A concise summary will be highlighted on your public candidate profile page. (Max 150 words)
                        </span>
                      </label>
                      <span
                        className={`text-xs font-mono font-bold ${visionWords > 150 ? 'text-rose-600' : 'text-slate-500'
                          }`}
                      >
                        {visionWords} / 150 words
                      </span>
                    </div>
                    <textarea
                      rows={4}
                      value={vision12Months}
                      onChange={(e) => {
                        setVision12Months(e.target.value)
                        setTouched(true)
                      }}
                      placeholder="Key milestones: target circles launched, membership growth, mentorship forums, and governance outcomes..."
                      className="p-3 bg-white border border-[#8190A7] rounded-xl text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] resize-y"
                    />
                  </div>

                  {/* Hours per week commit dropdown */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Hours per week you can commit <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={hoursPerWeek}
                      onChange={(e) => {
                        setHoursPerWeek(e.target.value)
                        setTouched(true)
                      }}
                      className="w-full sm:w-64 h-11 px-3.5 bg-white border border-[#8190A7] rounded-xl text-sm font-semibold text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                    >
                      <option value="5-10 hours/week">5–10 hours / week</option>
                      <option value="10-15 hours/week">10–15 hours / week</option>
                      <option value="15-20 hours/week">15–20 hours / week</option>
                      <option value="20+ hours/week">20+ hours / week</option>
                    </select>
                  </div>

                  {/* Any role in another business network or association? (Yes/No + Details conflict check) */}
                  <div className="flex flex-col gap-2 pt-1 border-t border-slate-100">
                    <label className="text-xs font-bold text-slate-700">
                      Any role in another business network or association? <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer text-sm font-semibold text-slate-800">
                        <input
                          type="radio"
                          name="network_conflict"
                          checked={hasOtherNetworkRole === true}
                          onChange={() => {
                            setHasOtherNetworkRole(true)
                            setTouched(true)
                          }}
                          className="w-4 h-4 text-[#1D4ED8] focus:ring-[#1D4ED8]"
                        />
                        <span>Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer text-sm font-semibold text-slate-800">
                        <input
                          type="radio"
                          name="network_conflict"
                          checked={hasOtherNetworkRole === false}
                          onChange={() => {
                            setHasOtherNetworkRole(false)
                            setOtherNetworkDetails('')
                            setTouched(true)
                          }}
                          className="w-4 h-4 text-[#1D4ED8] focus:ring-[#1D4ED8]"
                        />
                        <span>No</span>
                      </label>
                    </div>

                    {hasOtherNetworkRole === true && (
                      <div className="mt-2 space-y-1 animate-fadeIn">
                        <label className="text-xs font-bold text-slate-700">
                          Please specify network names, roles held, and active terms: <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          rows={2}
                          value={otherNetworkDetails}
                          onChange={(e) => {
                            setOtherNetworkDetails(e.target.value)
                            setTouched(true)
                          }}
                          placeholder="e.g. Past President at BNI Surat (2023-2024), Regional Council Member at CII..."
                          className="w-full p-3 bg-white border border-[#8190A7] rounded-xl text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] resize-y"
                        />
                      </div>
                    )}
                  </div>

                  {/* Optional 60-second intro video link */}
                  <div className="flex flex-col gap-1.5 pt-1">
                    <label className="text-xs font-bold text-slate-700">
                      Optional 60-second intro video link
                      <span className="text-xs font-normal text-slate-400 ml-1">(YouTube, Vimeo, Loom or Drive URL)</span>
                    </label>
                    <input
                      type="url"
                      value={videoUrl}
                      onChange={(e) => {
                        setVideoUrl(e.target.value)
                        setTouched(true)
                      }}
                      placeholder="https://youtube.com/watch?v=... or Loom link"
                      className="h-11 px-3.5 bg-white border border-[#8190A7] rounded-xl text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                    />
                  </div>
                </section>

                {/* =================================================================== */}
                {/* SECTION 4: DECLARATIONS                                             */}
                {/* =================================================================== */}
                <section
                  id="sec-declarations"
                  className="bg-white border border-[#DDE3EE] rounded-2xl p-6 sm:p-7 flex flex-col gap-5 shadow-sm scroll-mt-24"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <h2 className="text-xl font-bold text-[#0F172A]">Declarations</h2>
                      {isDeclarationsDone && (
                        <span className="w-5 h-5 rounded-full bg-[#047857] flex items-center justify-center text-white">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#E3EAFD] text-[#1E3A8A]">
                      Required
                    </span>
                  </div>

                  {/* Four Checkboxes matching exact user specifications */}
                  <div className="space-y-3">
                    <label className="flex items-start gap-3 p-3.5 border border-[#8190A7] rounded-xl cursor-pointer text-xs text-slate-800 bg-slate-50/50 hover:bg-slate-50">
                      <input
                        type="checkbox"
                        checked={decTruth}
                        onChange={(e) => {
                          setDecTruth(e.target.checked)
                          setTouched(true)
                        }}
                        className="w-4 h-4 mt-0.5 rounded text-[#1D4ED8] focus:ring-[#1D4ED8] shrink-0"
                      />
                      <span className="leading-relaxed">
                        <strong>Information is true:</strong> I declare that all information and statements submitted in this application are accurate, verifiable, and true.
                      </span>
                    </label>

                    <label className="flex items-start gap-3 p-3.5 border border-[#8190A7] rounded-xl cursor-pointer text-xs text-slate-800 bg-slate-50/50 hover:bg-slate-50">
                      <input
                        type="checkbox"
                        checked={decConduct}
                        onChange={(e) => {
                          setDecConduct(e.target.checked)
                          setTouched(true)
                        }}
                        className="w-4 h-4 mt-0.5 rounded text-[#1D4ED8] focus:ring-[#1D4ED8] shrink-0"
                      />
                      <span className="leading-relaxed">
                        <strong>Accept Code of Conduct:</strong> I accept the Peers Global Code of Conduct, including strict prohibition of incentives, financial inducements, or transactional favours for votes.
                      </span>
                    </label>

                    <label className="flex items-start gap-3 p-3.5 border border-[#8190A7] rounded-xl cursor-pointer text-xs text-slate-800 bg-slate-50/50 hover:bg-slate-50">
                      <input
                        type="checkbox"
                        checked={decConsent}
                        onChange={(e) => {
                          setDecConsent(e.target.checked)
                          setTouched(true)
                        }}
                        className="w-4 h-4 mt-0.5 rounded text-[#1D4ED8] focus:ring-[#1D4ED8] shrink-0"
                      />
                      <span className="leading-relaxed">
                        <strong>Consent to Public Profile & Creative:</strong> I consent to the publication of my candidate profile, statement, and official creative if shortlisted.
                      </span>
                    </label>

                    <label className="flex items-start gap-3 p-3.5 border border-[#8190A7] rounded-xl cursor-pointer text-xs text-slate-800 bg-slate-50/50 hover:bg-slate-50">
                      <input
                        type="checkbox"
                        checked={decJury}
                        onChange={(e) => {
                          setDecJury(e.target.checked)
                          setTouched(true)
                        }}
                        className="w-4 h-4 mt-0.5 rounded text-[#1D4ED8] focus:ring-[#1D4ED8] shrink-0"
                      />
                      <span className="leading-relaxed">
                        <strong>Consent to Jury Evaluation:</strong> I consent to be contacted by the Scrutiny Committee and Jury Board for verification and evaluation interviews.
                      </span>
                    </label>
                  </div>

                  {/* Confidential Document Uploads with Clear / Deselect options */}
                  <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Verification Documents (Confidential Admin & Jury View)
                    </h3>

                    {/* ID Proof (Required) */}
                    <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-[#F6F8FC] border border-[#DDE3EE] rounded-xl">
                      <div className="flex flex-col gap-1 flex-1 min-w-[240px]">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-slate-900">ID proof</span>
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#E3EAFD] text-[#1E3A8A]">
                            Required
                          </span>
                        </div>
                        <span className="text-xs text-slate-500">
                          Masked Aadhaar, Passport or Driving License. PDF or Image up to 5 MB.
                        </span>
                        {idFile && <span className="text-xs font-bold text-[#047857] mt-0.5">✓ {idFile}</span>}
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={() => idInputRef.current?.click()}
                          className="h-10 px-4 rounded-xl border border-[#8190A7] bg-white text-slate-900 font-semibold text-xs inline-flex items-center gap-2 hover:bg-slate-50"
                        >
                          <UploadCloud className="w-4 h-4 text-slate-700" />
                          {idFile ? 'Replace file' : 'Choose file'}
                        </button>
                        {idFile && (
                          <button
                            type="button"
                            onClick={() => {
                              setIdFile('')
                              if (idInputRef.current) idInputRef.current.value = ''
                              setTouched(true)
                            }}
                            className="h-10 px-3 rounded-xl border border-rose-200 bg-rose-50 text-rose-700 font-semibold text-xs inline-flex items-center gap-1 hover:bg-rose-100"
                            title="Clear / Deselect file"
                          >
                            <X className="w-3.5 h-3.5 text-rose-600" />
                            Clear
                          </button>
                        )}
                      </div>
                      <input
                        ref={idInputRef}
                        type="file"
                        accept=".pdf,image/*"
                        onChange={(e) => handleFileChange(e, setIdFile)}
                        className="hidden"
                      />
                    </div>

                    {/* Recommendation Letter (Optional) */}
                    <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-[#F6F8FC] border border-[#DDE3EE] rounded-xl">
                      <div className="flex flex-col gap-1 flex-1 min-w-[240px]">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-slate-900">Recommendation letter</span>
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#EAEEF4] text-slate-600">
                            Optional
                          </span>
                        </div>
                        <span className="text-xs text-slate-500">
                          Signed by a Circle Chair, Director, or peer leader.
                        </span>
                        {letterFile && <span className="text-xs font-bold text-[#047857] mt-0.5">✓ {letterFile}</span>}
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={() => letterInputRef.current?.click()}
                          className="h-10 px-4 rounded-xl border border-[#8190A7] bg-white text-slate-900 font-semibold text-xs inline-flex items-center gap-2 hover:bg-slate-50"
                        >
                          <UploadCloud className="w-4 h-4 text-slate-700" />
                          {letterFile ? 'Replace file' : 'Choose file'}
                        </button>
                        {letterFile && (
                          <button
                            type="button"
                            onClick={() => {
                              setLetterFile('')
                              if (letterInputRef.current) letterInputRef.current.value = ''
                              setTouched(true)
                            }}
                            className="h-10 px-3 rounded-xl border border-rose-200 bg-rose-50 text-rose-700 font-semibold text-xs inline-flex items-center gap-1 hover:bg-rose-100"
                            title="Clear / Deselect file"
                          >
                            <X className="w-3.5 h-3.5 text-rose-600" />
                            Clear
                          </button>
                        )}
                      </div>
                      <input
                        ref={letterInputRef}
                        type="file"
                        accept=".pdf,.docx,image/*"
                        onChange={(e) => handleFileChange(e, setLetterFile)}
                        className="hidden"
                      />
                    </div>

                    {/* Company Profile / Pitch Deck (Optional) */}
                    <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-[#F6F8FC] border border-[#DDE3EE] rounded-xl">
                      <div className="flex flex-col gap-1 flex-1 min-w-[240px]">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-slate-900">Company profile / Pitch deck</span>
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#EAEEF4] text-slate-600">
                            Optional
                          </span>
                        </div>
                        <span className="text-xs text-slate-500">
                          Overview about your business and community footprint.
                        </span>
                        {deckFile && <span className="text-xs font-bold text-[#047857] mt-0.5">✓ {deckFile}</span>}
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={() => deckInputRef.current?.click()}
                          className="h-10 px-4 rounded-xl border border-[#8190A7] bg-white text-slate-900 font-semibold text-xs inline-flex items-center gap-2 hover:bg-slate-50"
                        >
                          <UploadCloud className="w-4 h-4 text-slate-700" />
                          {deckFile ? 'Replace file' : 'Choose file'}
                        </button>
                        {deckFile && (
                          <button
                            type="button"
                            onClick={() => {
                              setDeckFile('')
                              if (deckInputRef.current) deckInputRef.current.value = ''
                              setTouched(true)
                            }}
                            className="h-10 px-3 rounded-xl border border-rose-200 bg-rose-50 text-rose-700 font-semibold text-xs inline-flex items-center gap-1 hover:bg-rose-100"
                            title="Clear / Deselect file"
                          >
                            <X className="w-3.5 h-3.5 text-rose-600" />
                            Clear
                          </button>
                        )}
                      </div>
                      <input
                        ref={deckInputRef}
                        type="file"
                        accept=".pdf,.ppt,.pptx"
                        onChange={(e) => handleFileChange(e, setDeckFile)}
                        className="hidden"
                      />
                    </div>
                  </div>
                </section>
              </>
            )}
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* STICKY BOTTOM SUBMIT BAR (Only visible once verified)                    */}
      {/* ========================================================================= */}
      {!submitted && isVerified && (
        <div className="sticky bottom-0 bg-white border-t border-[#C9D2E3] shadow-[0_-4px_16px_rgba(15,23,42,0.08)] z-40 animate-in fade-in duration-200">
          <div className="max-w-[760px] mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-col flex-1 min-w-[200px]">
              <span
                className={`text-sm font-bold ${isReadyToSubmit ? 'text-[#047857]' : 'text-slate-900'
                  }`}
              >
                {statusTitle}
              </span>
              <span className="text-xs text-slate-500 leading-tight">{statusDetail}</span>
            </div>

            {isReadyToSubmit ? (
              <button
                type="button"
                disabled={isSubmitting}
                onClick={handleFinalSubmit}
                className="h-12 px-7 rounded-xl bg-[#1D4ED8] hover:bg-[#1E3A8A] text-white text-sm font-bold shadow-md transition-all active:scale-[0.98] disabled:opacity-60 flex items-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Submitting nomination...</span>
                  </>
                ) : (
                  <span>Submit my nomination</span>
                )}
              </button>
            ) : (
              <a
                href={missingItems[0]?.href || '#sec-identify'}
                className="h-12 px-5 rounded-xl bg-[#E3EAFD] text-[#1E3A8A] text-sm font-semibold inline-flex items-center justify-center hover:bg-blue-100 transition-colors"
              >
                Show what's left
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
