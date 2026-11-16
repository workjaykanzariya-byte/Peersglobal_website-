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
  Clock,
  ShieldCheck,
  HelpCircle,
  ExternalLink,
  RotateCcw,
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
}

interface RoleRow {
  role: string
  org: string
  years: string
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

  // 2. Role & Belonging Selection
  const [selectedRoleKey, setSelectedRoleKey] = useState<string>('ded')
  const [selectedBelongingId, setSelectedBelongingId] = useState<string>('')
  const [selectedBelongingName, setSelectedBelongingName] = useState<string>('')
  const [selectedCity, setSelectedCity] = useState<string>('Surat')
  const [selectedCityId, setSelectedCityId] = useState<string>('')

  // City Search Modal / Dropdown State
  const [citySearchOpen, setCitySearchOpen] = useState(false)
  const [citySearchQuery, setCitySearchQuery] = useState('')
  const [citySearchResults, setCitySearchResults] = useState<CityOption[]>([])
  const [isSearchingCities, setIsSearchingCities] = useState(false)

  // 3. Member Profile State
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [isCheckingMember, setIsCheckingMember] = useState(false)
  const [memberFound, setMemberFound] = useState<boolean | null>(null)
  const userModifiedFields = useRef<Set<string>>(new Set())

  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [designation, setDesignation] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [bio, setBio] = useState('')
  const [photoUrl, setPhotoUrl] = useState<string | null>(null)

  // 4. Experience State
  const [since, setSince] = useState('')
  const [rolesHeld, setRolesHeld] = useState<RoleRow[]>([
    { role: '', org: '', years: '' },
    { role: '', org: '', years: '' },
    { role: '', org: '', years: '' },
  ])
  const [roleCount, setRoleCount] = useState(1)
  const [noRole, setNoRole] = useState(false)

  // 5. Plan for the Year State
  const [goals, setGoals] = useState<string[]>(['', '', ''])
  const [hours, setHours] = useState<string>('10')
  const [showVideo, setShowVideo] = useState(false)
  const [videoUrl, setVideoUrl] = useState('')
  const [showManifesto, setShowManifesto] = useState(false)
  const [manifestoFile, setManifestoFile] = useState<string>('')

  // 6. Documents State
  const [idFile, setIdFile] = useState<string>('')
  const [letterFile, setLetterFile] = useState<string>('')
  const [deckFile, setDeckFile] = useState<string>('')
  const [agree, setAgree] = useState(false)

  // 7. Form UI State
  const [touched, setTouched] = useState(false)
  const [confirming, setConfirming] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submissionReceipt, setSubmissionReceipt] = useState<{
    applicationNumber: string
    candidateId: string
    timestamp: string
  } | null>(null)

  // Hidden File Inputs
  const idInputRef = useRef<HTMLInputElement>(null)
  const letterInputRef = useRef<HTMLInputElement>(null)
  const deckInputRef = useRef<HTMLInputElement>(null)
  const manifestoInputRef = useRef<HTMLInputElement>(null)
  const photoInputRef = useRef<HTMLInputElement>(null)

  // Fetch Meta (Roles, Circles, Industries, Committees)
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

  // Auto-select role based on URL query param (e.g. ?role=circle_founder, ?role=circle_director, etc.)
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
      ambassador: 'ded',
      ambassadors: 'ded',
    }

    const matched = roleMapping[clean]
    if (matched) {
      setSelectedRoleKey(matched)
      const roleMeta = roles.find((r) => r.key === matched)
      if (roleMeta) {
        if (roleMeta.belonging_type === 'industry' && industries.length > 0) {
          setSelectedBelongingId(industries[0].id)
          setSelectedBelongingName(industries[0].name)
        } else if (roleMeta.belonging_type === 'circle' && circles.length > 0) {
          setSelectedBelongingId(circles[0].id)
          setSelectedBelongingName(circles[0].name)
        } else if (roleMeta.belonging_type === 'committee' && committees.length > 0) {
          setSelectedBelongingId(committees[0].id)
          setSelectedBelongingName(committees[0].name)
        }
      }
    }
  }, [roleParam, roles, industries, circles, committees])

  // Search Cities with Debounce
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
    description: 'Lead executive governance.',
  }

  // Handle Role Change
  const handleRoleSelect = (key: string) => {
    setSelectedRoleKey(key)
    setTouched(true)
    const roleMeta = roles.find((r) => r.key === key)
    if (!roleMeta) return

    // Preselect first belonging if applicable
    if (roleMeta.belonging_type === 'industry' && industries.length > 0) {
      setSelectedBelongingId(industries[0].id)
      setSelectedBelongingName(industries[0].name)
    } else if (roleMeta.belonging_type === 'circle' && circles.length > 0) {
      setSelectedBelongingId(circles[0].id)
      setSelectedBelongingName(circles[0].name)
    } else if (roleMeta.belonging_type === 'committee' && committees.length > 0) {
      setSelectedBelongingId(committees[0].id)
      setSelectedBelongingName(committees[0].name)
    } else {
      setSelectedBelongingId('')
      setSelectedBelongingName('')
    }
  }

  // Live Member Lookup (Debounced 500ms after user pauses typing in email or mobile)
  useEffect(() => {
    const cleanE = email.trim().toLowerCase()
    const cleanM = mobile.trim().replace(/\D/g, '')

    const hasValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanE)
    const hasValidMobile = cleanM.length >= 10

    if (!hasValidEmail && !hasValidMobile) {
      setMemberFound(null)
      return
    }

    const timer = setTimeout(async () => {
      setIsCheckingMember(true)
      try {
        const queryBody: Record<string, string> = { campaign_id: campaignId }
        if (hasValidEmail) queryBody.email = cleanE
        if (hasValidMobile) queryBody.mobile = mobile.trim()

        const res = await fetch('/api/leadership/check-member', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(queryBody),
        })

        if (res.ok) {
          const json = await res.json()
          if (json.exists && json.profile) {
            const p = json.profile
            setMemberFound(true)
            if (!userModifiedFields.current.has('name') && (p.fullName || p.full_name)) {
              setName(p.fullName || p.full_name)
            }
            const fetchedMobile = p.mobile || p.phone || p.mobile_number || p.phone_number
            if (!userModifiedFields.current.has('mobile') && fetchedMobile && !mobile) {
              setMobile(fetchedMobile)
            }
            if (!userModifiedFields.current.has('email') && p.email && !email) {
              setEmail(p.email)
            }
            if (!userModifiedFields.current.has('company') && (p.company || p.company_name)) {
              setCompany(p.company || p.company_name)
            }
            if (!userModifiedFields.current.has('designation') && p.designation) {
              setDesignation(p.designation)
            }
            if (!userModifiedFields.current.has('city') && p.city) {
              setSelectedCity(p.city)
            }
            if (!userModifiedFields.current.has('photo') && (p.profile_photo_url || p.photo_url)) {
              setPhotoUrl(p.profile_photo_url || p.photo_url)
            }
            if (!userModifiedFields.current.has('bio') && p.bio) {
              setBio(p.bio)
            }
            if (!userModifiedFields.current.has('linkedin') && p.socialLinks) {
              setLinkedin(p.socialLinks)
            }
            if (!userModifiedFields.current.has('since') && p.yearsExperience) {
              const calculatedSince = String(new Date().getFullYear() - Number(p.yearsExperience))
              setSince(calculatedSince)
            }
          } else {
            setMemberFound(false)
          }
        }
      } catch (e) {
        console.warn('Member lookup note:', e)
      } finally {
        setIsCheckingMember(false)
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [email, mobile, campaignId])

  // Derived Validations (Matching Main.dc.html logic)
  const trim = (v: string) => (v || '').trim()
  const yearNow = new Date().getFullYear()
  const parsedSinceYear = parseInt(since, 10)
  const yearOk = /^\d{4}$/.test(since) && parsedSinceYear >= 1950 && parsedSinceYear <= yearNow
  const yearsElapsed = yearNow - parsedSinceYear
  const yearsText = yearOk
    ? yearsElapsed === 0
      ? 'Less than a year'
      : `About ${yearsElapsed} ${yearsElapsed === 1 ? 'year' : 'years'}`
    : ''

  const rolesOk = noRole || (trim(rolesHeld[0].role) !== '' && trim(rolesHeld[0].org) !== '')
  const profileDone = trim(name) !== '' && trim(company) !== '' && trim(designation) !== ''
  const experienceDone = yearOk && rolesOk
  const planDone = trim(goals[0]) !== '' && trim(goals[1]) !== '' && trim(goals[2]) !== '' && hours !== ''
  const docsDone = Boolean(idFile) && agree

  // Missing fields list for live sticky status bar
  const missingItems: Array<{ label: string; href: string }> = []
  if (!trim(name)) missingItems.push({ label: 'your full name', href: '#f-name' })
  if (!trim(company)) missingItems.push({ label: 'your company', href: '#f-company' })
  if (!trim(designation)) missingItems.push({ label: 'your title', href: '#f-designation' })
  if (!yearOk) missingItems.push({ label: 'the year you joined', href: '#f-since' })
  if (!rolesOk) missingItems.push({ label: 'a leadership role (or tick "none yet")', href: '#f-roles' })
  if (!trim(goals[0])) missingItems.push({ label: 'goal 1', href: '#f-goal1' })
  if (!trim(goals[1])) missingItems.push({ label: 'goal 2', href: '#f-goal2' })
  if (!trim(goals[2])) missingItems.push({ label: 'goal 3', href: '#f-goal3' })
  if (!hours) missingItems.push({ label: 'your monthly time', href: '#f-hours' })
  if (!idFile) missingItems.push({ label: 'your ID proof', href: '#f-id' })
  if (!agree) missingItems.push({ label: 'the confirmation', href: '#f-agree' })

  const isReadyToSubmit = missingItems.length === 0
  const shownMissing = missingItems.slice(0, 2).map((m) => m.label).join(', ')
  const statusTitle = isReadyToSubmit
    ? 'Ready to submit'
    : `${missingItems.length} ${missingItems.length === 1 ? 'thing left' : 'things left'}`
  const statusDetail = isReadyToSubmit
    ? 'Everything required is filled in.'
    : `Still needed: ${shownMissing}${missingItems.length > 2 ? ` and ${missingItems.length - 2} more` : ''}.`

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
        setTouched(true)
      }
      reader.readAsDataURL(file)
    }
  }

  // Final Submission Handler
  const handleFinalSubmit = async () => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const payload = {
        campaign_id: campaignId,
        email: email.trim().toLowerCase(),
        mobile: mobile.trim(),
        applied_role: selectedRoleKey,
        role_name: currentRole.name,
        belonging_type: currentRole.belonging_type,
        belonging_id: selectedBelongingId,
        belonging_name: selectedBelongingName,
        city_name: selectedCity,
        city_id: selectedCityId,
        since,
        leadership_roles: rolesHeld.slice(0, roleCount),
        goals,
        time_commitment: hours,
        video_url: videoUrl,
        manifesto_file: manifestoFile,
        id_file: idFile,
        letter_file: letterFile,
        deck_file: deckFile,
        profile: {
          full_name: name.trim(),
          fullName: name.trim(),
          email: email.trim().toLowerCase(),
          mobile: mobile.trim(),
          company_name: company.trim(),
          company: company.trim(),
          designation: designation.trim(),
          city: selectedCity,
          linkedin: linkedin.trim(),
          bio: bio.trim(),
          photo_url: photoUrl,
        },
        declarations: {
          dec_truthful_information: true,
          dec_no_solicitation: true,
          dec_code_of_conduct: agree,
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
        setConfirming(false)
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
        }
      } else {
        setSubmitError(data.message || 'Submission failed. Please check your connection and try again.')
        setConfirming(false)
      }
    } catch (err: any) {
      setSubmitError(err?.message || 'Network error occurred while submitting nomination.')
      setConfirming(false)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Scroll to top when submission succeeds so confirmation card is visible at the top
  useEffect(() => {
    if (submitted && typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }, [submitted])

  // Start Over Handler
  const handleStartOver = () => {
    userModifiedFields.current.clear()
    setMemberFound(null)
    setEmail('')
    setMobile('')
    setName('')
    setCompany('')
    setDesignation('')
    setLinkedin('')
    setBio('')
    setPhotoUrl(null)
    setSince('')
    setRolesHeld([
      { role: '', org: '', years: '' },
      { role: '', org: '', years: '' },
      { role: '', org: '', years: '' },
    ])
    setRoleCount(1)
    setNoRole(false)
    setGoals(['', '', ''])
    setHours('10')
    setIdFile('')
    setLetterFile('')
    setDeckFile('')
    setAgree(false)
    setTouched(false)
    setConfirming(false)
    setSubmitted(false)
    setSubmitError(null)
  }

  const initials = trim(name)
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('') || 'PG'

  return (
    <div className="min-h-screen bg-[#F3F5FA] font-sans text-[#0F172A] flex flex-col antialiased">
      <div className="w-full max-w-[760px] mx-auto px-4 py-8 sm:py-12 flex flex-col gap-6 flex-1">
        {/* ========================================================================= */}
        {/* SUCCESS VIEW (Matching Main.dc.html exactly)                               */}
        {/* ========================================================================= */}
        {submitted ? (
          <div className="bg-white border border-[#DDE3EE] rounded-2xl p-8 sm:p-12 flex flex-col items-center gap-5 text-center shadow-sm">
            <span className="w-16 h-16 rounded-full bg-[#047857] flex items-center justify-center text-white shadow-md">
              <Check className="w-8 h-8 stroke-[3]" />
            </span>
            <div className="space-y-2">
              <h1 className="text-3xl font-extrabold tracking-tight text-[#0F172A]">Nomination submitted</h1>
              <p className="text-base text-slate-600 max-w-lg leading-relaxed">
                Thank you, <strong className="text-slate-900">{name.split(' ')[0] || 'Peer'}</strong>. Your application
                for <strong className="text-[#1D4ED8]">{currentRole.name}</strong> representing{' '}
                <strong className="text-slate-900">{selectedCity}</strong> has been received and recorded in the official
                election registry.
              </p>
            </div>

            {/* Official Ballot / Application Filing Receipt */}
            <div className="w-full max-w-md bg-slate-50 border border-slate-200 rounded-xl p-5 text-left space-y-3 mt-2">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Official Filing Record</span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#047857] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5" /> VERIFIED
                </span>
              </div>
              <div className="space-y-1.5">
                <div className="text-xs text-slate-500">APPLICATION REFERENCE</div>
                <div className="text-xl font-extrabold text-[#1D4ED8] font-mono tracking-tight">
                  {submissionReceipt?.applicationNumber || 'PG-2026-PENDING'}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs pt-1 border-t border-slate-200">
                <div>
                  <span className="text-slate-500 block">Candidate:</span>
                  <span className="font-semibold text-slate-800">{name}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Applied Role:</span>
                  <span className="font-semibold text-slate-800">{currentRole.short_name}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">City:</span>
                  <span className="font-semibold text-slate-800">{selectedCity}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Time Filed:</span>
                  <span className="font-semibold text-slate-800">{submissionReceipt?.timestamp || 'Just now'}</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-500 max-w-md text-center">
              The Election Governance Committee reviews nominations within 5 business days. You will be notified via SMS
              and email once your candidate profile is approved.
            </p>

            <div className="flex flex-wrap gap-3 mt-4">
              <button
                type="button"
                onClick={handleStartOver}
                className="h-12 px-6 rounded-xl border border-slate-300 bg-white text-slate-800 font-semibold text-sm hover:bg-slate-50 transition-colors"
              >
                File another nomination
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
          /* MAIN ONE-PAGE FORM                                                        */
          /* ========================================================================= */
          <div className="flex flex-col gap-6">
            {/* Form Header */}
            <header className="flex flex-col gap-2.5 px-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                  Leadership Candidacy 2026
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
                Nominate yourself for {currentRole.short_name}
              </h1>
              <p className="text-base text-slate-600">
                National Leadership Selection 2026 · {selectedCity || 'All Cities'}
              </p>

              {/* Time & Autosave Banner */}
              <div className="flex flex-wrap gap-3 items-center justify-between mt-2 p-3.5 bg-white border border-[#DDE3EE] rounded-xl text-sm">
                <span className="inline-flex items-center gap-2 text-slate-700">
                  <Clock className="w-4 h-4 text-slate-500" />
                  Takes about 8 minutes. Your answers save automatically.
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#047857]">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                  {touched ? 'Saved just now' : 'Autosave is on'}
                </span>
              </div>
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
            {/* SECTION 0: ROLE & BELONGING SELECTION                               */}
            {/* =================================================================== */}
            <section
              id="f-role-selection"
              className="bg-white border border-[#DDE3EE] rounded-2xl p-6 sm:p-7 flex flex-col gap-5 shadow-sm scroll-mt-24"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <h2 className="text-xl font-bold text-[#0F172A]">Choose your leadership role</h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Select the role you wish to apply for, along with its specific city or belonging.
                  </p>
                </div>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#E3EAFD] text-[#1E3A8A]">
                  Required
                </span>
              </div>

              {/* Target Leadership Position: Dropdown Layout */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Target Leadership Position <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    value={selectedRoleKey}
                    onChange={(e) => handleRoleSelect(e.target.value)}
                    className="w-full h-12 px-3.5 pr-10 bg-white border border-[#8190A7] rounded-xl text-sm font-semibold text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] transition-all cursor-pointer appearance-none"
                  >
                    <option value="">-- Choose Target Leadership Role --</option>
                    {roles.map((r) => (
                      <option key={r.key} value={r.key}>
                        {r.name} ({r.short_name})
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3.5 top-4 pointer-events-none" />
                </div>
                <p className="text-xs text-slate-500 mt-0.5 italic">{currentRole.description}</p>
              </div>

              {/* Dynamic Belonging Selector Based on Selected Role */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* 1. Industry Belonging Dropdown */}
                {currentRole.belonging_type === 'industry' && (
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                      Select Your Industry <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={selectedBelongingId}
                      onChange={(e) => {
                        setSelectedBelongingId(e.target.value)
                        const ind = industries.find((i) => i.id === e.target.value)
                        if (ind) setSelectedBelongingName(ind.name)
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

                {/* 2. Circle Belonging Dropdown */}
                {currentRole.belonging_type === 'circle' && (
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                      Select Your Circle Chapter <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={selectedBelongingId}
                      onChange={(e) => {
                        setSelectedBelongingId(e.target.value)
                        const c = circles.find((item) => item.id === e.target.value)
                        if (c) {
                          setSelectedBelongingName(c.name)
                          if (c.city) setSelectedCity(c.city)
                        }
                        setTouched(true)
                      }}
                      className="h-12 px-3.5 bg-white border border-[#8190A7] rounded-xl text-sm font-medium text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                    >
                      <option value="">-- Choose Peer Circle --</option>
                      {circles.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name} {c.city ? `(${c.city})` : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* 3. Committee Belonging Dropdown */}
                {currentRole.belonging_type === 'committee' && (
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                      Select Committee <span className="text-red-500">*</span>
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

                {/* City Selection from cities table (11,273 cities searchable) */}
                <div className="flex flex-col gap-1.5 relative">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                    City <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search Indian City (e.g. Surat, Mumbai)..."
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

                  {/* Dropdown Results */}
                  {citySearchOpen && citySearchResults.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-1 max-h-56 overflow-y-auto bg-white border border-slate-200 rounded-xl shadow-xl z-50 divide-y divide-slate-100">
                      {citySearchResults.map((city) => (
                        <button
                          key={city.id}
                          type="button"
                          onClick={() => {
                            setSelectedCity(city.name)
                            setSelectedCityId(city.id)
                            setCitySearchOpen(false)
                            setTouched(true)
                          }}
                          className="w-full text-left px-3.5 py-2 hover:bg-blue-50 text-xs flex items-center justify-between transition-colors"
                        >
                          <span className="font-semibold text-slate-800">{city.name}</span>
                          <span className="text-slate-400 text-[11px]">{city.state || city.district || 'India'}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* =================================================================== */}
            {/* SECTION 1: YOUR PROFILE (With live DB check and auto-fill)          */}
            {/* =================================================================== */}
            <section
              id="f-profile"
              className="bg-white border border-[#DDE3EE] rounded-2xl p-6 sm:p-7 flex flex-col gap-5 shadow-sm scroll-mt-24"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <h2 className="text-xl font-bold text-[#0F172A]">1. Your profile</h2>
                  {profileDone && (
                    <span className="w-5 h-5 rounded-full bg-[#047857] flex items-center justify-center text-white">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                  )}
                </div>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#E3EAFD] text-[#1E3A8A]">
                  Required
                </span>
              </div>

              {/* Email & Mobile Number (Auto-fills member details silently in the background) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. name@company.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      userModifiedFields.current.add('email')
                      setTouched(true)
                    }}
                    className="w-full h-11 px-3.5 bg-white border border-[#8190A7] rounded-xl text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +91 95587 39086"
                    value={mobile}
                    onChange={(e) => {
                      setMobile(e.target.value)
                      userModifiedFields.current.add('mobile')
                      setTouched(true)
                    }}
                    className="w-full h-11 px-3.5 bg-white border border-[#8190A7] rounded-xl text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                  />
                </div>
              </div>

              {/* Candidate Card Preview / Photo Picker */}
              <div className="flex items-center gap-4 py-1">
                <div className="relative">
                  {photoUrl ? (
                    <img
                      src={photoUrl}
                      alt={name || 'Candidate'}
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
                    A clear headshot. Voters see this on your candidate card.
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => photoInputRef.current?.click()}
                      className="h-8 px-3 rounded-lg border border-[#8190A7] bg-white text-xs font-semibold text-slate-800 hover:bg-slate-50"
                    >
                      {photoUrl ? 'Change photo' : 'Add a photo'}
                    </button>
                    {photoUrl && (
                      <button
                        type="button"
                        onClick={() => {
                          setPhotoUrl(null)
                          userModifiedFields.current.add('photo')
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
                    onChange={(e) => {
                      userModifiedFields.current.add('photo')
                      handlePhotoUpload(e)
                    }}
                    className="hidden"
                  />
                </div>
              </div>

              {/* Profile Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div id="f-name" className="flex flex-col gap-1.5 scroll-mt-24">
                  <label htmlFor="in-name" className="text-sm font-semibold text-slate-800">
                    Full name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="in-name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value)
                      userModifiedFields.current.add('name')
                      setTouched(true)
                    }}
                    placeholder="e.g. Full Name"
                    className="h-12 px-3.5 bg-white border border-[#8190A7] rounded-xl text-base text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                  />
                </div>

                <div id="f-company" className="flex flex-col gap-1.5 scroll-mt-24">
                  <label htmlFor="in-company" className="text-sm font-semibold text-slate-800">
                    Company <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="in-company"
                    type="text"
                    value={company}
                    onChange={(e) => {
                      setCompany(e.target.value)
                      userModifiedFields.current.add('company')
                      setTouched(true)
                    }}
                    placeholder="e.g. Acme Corporation"
                    className="h-12 px-3.5 bg-white border border-[#8190A7] rounded-xl text-base text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                  />
                </div>

                <div id="f-designation" className="flex flex-col gap-1.5 scroll-mt-24">
                  <label htmlFor="in-designation" className="text-sm font-semibold text-slate-800">
                    Your title at the company <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="in-designation"
                    type="text"
                    value={designation}
                    onChange={(e) => {
                      setDesignation(e.target.value)
                      userModifiedFields.current.add('designation')
                      setTouched(true)
                    }}
                    placeholder="e.g. Managing Director & CEO"
                    className="h-12 px-3.5 bg-white border border-[#8190A7] rounded-xl text-base text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="in-linkedin" className="text-sm font-semibold text-slate-800">
                    LinkedIn profile <span className="text-xs font-normal text-slate-400">(Optional)</span>
                  </label>
                  <input
                    id="in-linkedin"
                    type="url"
                    value={linkedin}
                    onChange={(e) => {
                      setLinkedin(e.target.value)
                      userModifiedFields.current.add('linkedin')
                      setTouched(true)
                    }}
                    placeholder="https://linkedin.com/in/your-name"
                    className="h-12 px-3.5 bg-white border border-[#8190A7] rounded-xl text-base text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                  />
                </div>
              </div>

              {/* Short Bio */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label htmlFor="in-bio" className="text-sm font-semibold text-slate-800">
                    Short bio <span className="text-xs font-normal text-slate-400">(Optional)</span>
                  </label>
                  <span className="text-xs text-slate-400">{bio.length}/300</span>
                </div>
                <textarea
                  id="in-bio"
                  rows={3}
                  maxLength={300}
                  value={bio}
                  onChange={(e) => {
                    setBio(e.target.value)
                    userModifiedFields.current.add('bio')
                    setTouched(true)
                  }}
                  placeholder="e.g. Dedicated business leader championing ecosystem collaboration across the District."
                  className="p-3.5 bg-white border border-[#8190A7] rounded-xl text-base text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] resize-y"
                />
              </div>
            </section>

            {/* =================================================================== */}
            {/* SECTION 2: YOUR EXPERIENCE                                         */}
            {/* =================================================================== */}
            <section
              id="f-experience"
              className="bg-white border border-[#DDE3EE] rounded-2xl p-6 sm:p-7 flex flex-col gap-5 shadow-sm scroll-mt-24"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <h2 className="text-xl font-bold text-[#0F172A]">2. Your experience</h2>
                  {experienceDone && (
                    <span className="w-5 h-5 rounded-full bg-[#047857] flex items-center justify-center text-white">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                  )}
                </div>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#E3EAFD] text-[#1E3A8A]">
                  Required
                </span>
              </div>

              {/* Year Joined */}
              <div id="f-since" className="flex flex-col gap-2 scroll-mt-24">
                <label htmlFor="in-since" className="text-sm font-semibold text-slate-800">
                  Year you joined Peers Global <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap items-center gap-3">
                  <input
                    id="in-since"
                    type="text"
                    inputMode="numeric"
                    maxLength={4}
                    placeholder="e.g. 2021"
                    value={since}
                    onChange={(e) => {
                      setSince(e.target.value)
                      setTouched(true)
                    }}
                    className="w-36 h-12 px-3.5 bg-white border border-[#8190A7] rounded-xl text-base text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                  />
                  {yearsText && <span className="text-sm font-bold text-[#047857]">{yearsText}</span>}
                </div>
              </div>

              {/* Leadership roles held */}
              <div id="f-roles" className="flex flex-col gap-3 scroll-mt-24">
                <div>
                  <span className="text-sm font-semibold text-slate-800 block">
                    Leadership roles you've held <span className="text-red-500">*</span>
                  </span>
                  <span className="text-xs text-slate-500">
                    In Peers Global or other industry councils. Add one per row.
                  </span>
                </div>

                {/* Rows container with opacity toggle if noRole is checked */}
                <div className={`space-y-2.5 transition-opacity ${noRole ? 'opacity-40 pointer-events-none' : ''}`}>
                  {Array.from({ length: roleCount }).map((_, idx) => (
                    <div
                      key={idx}
                      className="grid grid-cols-1 sm:grid-cols-12 gap-2.5 p-3.5 bg-[#F6F8FC] border border-[#DDE3EE] rounded-xl"
                    >
                      <div className="sm:col-span-5 flex flex-col gap-1">
                        <label className="text-xs font-bold text-slate-600">Role</label>
                        <input
                          type="text"
                          placeholder="e.g. Circle Vice Chair"
                          disabled={noRole}
                          value={rolesHeld[idx]?.role || ''}
                          onChange={(e) => {
                            const newRoles = [...rolesHeld]
                            newRoles[idx].role = e.target.value
                            setRolesHeld(newRoles)
                            setTouched(true)
                          }}
                          className="h-11 px-3 bg-white border border-[#8190A7] rounded-xl text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                        />
                      </div>
                      <div className="sm:col-span-4 flex flex-col gap-1">
                        <label className="text-xs font-bold text-slate-600">Organisation</label>
                        <input
                          type="text"
                          placeholder="e.g. Peers Global"
                          disabled={noRole}
                          value={rolesHeld[idx]?.org || ''}
                          onChange={(e) => {
                            const newRoles = [...rolesHeld]
                            newRoles[idx].org = e.target.value
                            setRolesHeld(newRoles)
                            setTouched(true)
                          }}
                          className="h-11 px-3 bg-white border border-[#8190A7] rounded-xl text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                        />
                      </div>
                      <div className="sm:col-span-3 flex flex-col gap-1">
                        <label className="text-xs font-bold text-slate-600">Years</label>
                        <input
                          type="text"
                          placeholder="2024–2025"
                          disabled={noRole}
                          value={rolesHeld[idx]?.years || ''}
                          onChange={(e) => {
                            const newRoles = [...rolesHeld]
                            newRoles[idx].years = e.target.value
                            setRolesHeld(newRoles)
                            setTouched(true)
                          }}
                          className="h-11 px-3 bg-white border border-[#8190A7] rounded-xl text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add / Remove buttons */}
                {!noRole && (
                  <div className="flex gap-2">
                    {roleCount < 3 && (
                      <button
                        type="button"
                        onClick={() => setRoleCount((prev) => Math.min(3, prev + 1))}
                        className="h-9 px-3 rounded-lg border border-[#8190A7] bg-white text-xs font-semibold text-slate-800 hover:bg-slate-50"
                      >
                        + Add another role
                      </button>
                    )}
                    {roleCount > 1 && (
                      <button
                        type="button"
                        onClick={() => {
                          const n = roleCount - 1
                          const updated = [...rolesHeld]
                          updated[n] = { role: '', org: '', years: '' }
                          setRolesHeld(updated)
                          setRoleCount(n)
                        }}
                        className="h-9 px-3 rounded-lg border border-slate-300 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                      >
                        Remove role
                      </button>
                    )}
                  </div>
                )}

                {/* Checkbox: I haven't held a leadership role yet */}
                <label className="flex items-center gap-2.5 cursor-pointer pt-1 text-sm text-slate-700">
                  <input
                    type="checkbox"
                    checked={noRole}
                    onChange={(e) => {
                      setNoRole(e.target.checked)
                      setTouched(true)
                    }}
                    className="w-4 h-4 rounded text-[#1D4ED8] focus:ring-[#1D4ED8]"
                  />
                  <span>I haven't held a formal leadership role yet</span>
                </label>
              </div>
            </section>

            {/* =================================================================== */}
            {/* SECTION 3: YOUR PLAN FOR THE YEAR                                   */}
            {/* =================================================================== */}
            <section
              id="f-plan"
              className="bg-white border border-[#DDE3EE] rounded-2xl p-6 sm:p-7 flex flex-col gap-5 shadow-sm scroll-mt-24"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <h2 className="text-xl font-bold text-[#0F172A]">3. Your plan for the year</h2>
                  {planDone && (
                    <span className="w-5 h-5 rounded-full bg-[#047857] flex items-center justify-center text-white">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                  )}
                </div>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#E3EAFD] text-[#1E3A8A]">
                  Required
                </span>
              </div>

              {/* Goals */}
              <div className="space-y-4">
                <div>
                  <span className="text-sm font-semibold text-slate-800 block">
                    Your top 3 goals <span className="text-red-500">*</span>
                  </span>
                  <span className="text-xs text-slate-500">
                    For each one, say what you will do and how we'll know it worked. One or two sentences is plenty.
                  </span>
                </div>

                <div id="f-goal1" className="flex flex-col gap-1.5 scroll-mt-24">
                  <label htmlFor="in-goal1" className="text-xs font-bold text-slate-600">
                    Goal 1 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="in-goal1"
                    rows={2}
                    value={goals[0]}
                    onChange={(e) => {
                      const newGoals = [...goals]
                      newGoals[0] = e.target.value
                      setGoals(newGoals)
                      setTouched(true)
                    }}
                    placeholder="e.g. Hold 4 networking events and grow attendance by 20%."
                    className="p-3 bg-white border border-[#8190A7] rounded-xl text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] resize-y"
                  />
                </div>

                <div id="f-goal2" className="flex flex-col gap-1.5 scroll-mt-24">
                  <label htmlFor="in-goal2" className="text-xs font-bold text-slate-600">
                    Goal 2 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="in-goal2"
                    rows={2}
                    value={goals[1]}
                    onChange={(e) => {
                      const newGoals = [...goals]
                      newGoals[1] = e.target.value
                      setGoals(newGoals)
                      setTouched(true)
                    }}
                    placeholder="What will you do, and how will you measure it?"
                    className="p-3 bg-white border border-[#8190A7] rounded-xl text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] resize-y"
                  />
                </div>

                <div id="f-goal3" className="flex flex-col gap-1.5 scroll-mt-24">
                  <label htmlFor="in-goal3" className="text-xs font-bold text-slate-600">
                    Goal 3 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="in-goal3"
                    rows={2}
                    value={goals[2]}
                    onChange={(e) => {
                      const newGoals = [...goals]
                      newGoals[2] = e.target.value
                      setGoals(newGoals)
                      setTouched(true)
                    }}
                    placeholder="What will you do, and how will you measure it?"
                    className="p-3 bg-white border border-[#8190A7] rounded-xl text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] resize-y"
                  />
                </div>
              </div>

              {/* Monthly Time Commitment Pills */}
              <div id="f-hours" className="flex flex-col gap-2 scroll-mt-24 pt-2">
                <div>
                  <span className="text-sm font-semibold text-slate-800 block">
                    Time you can give each month <span className="text-red-500">*</span>
                  </span>
                  <span className="text-xs text-slate-500">Pick what you can honestly commit to.</span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    { val: '5', label: '5 hrs' },
                    { val: '10', label: '10 hrs' },
                    { val: '15', label: '15 hrs' },
                    { val: '25', label: '25+ hrs' },
                  ].map((p) => {
                    const isSelected = hours === p.val
                    return (
                      <button
                        key={p.val}
                        type="button"
                        onClick={() => {
                          setHours(p.val)
                          setTouched(true)
                        }}
                        className={`min-w-[96px] h-12 px-4 rounded-xl text-sm font-semibold transition-all ${
                          isSelected
                            ? 'bg-[#1D4ED8] text-white border-2 border-[#1D4ED8] shadow-sm'
                            : 'bg-white text-slate-800 border border-[#8190A7] hover:border-slate-500'
                        }`}
                      >
                        {p.label}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Optional Video & Manifesto Expanders */}
              <div className="pt-2 flex flex-col gap-3">
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setShowVideo(!showVideo)}
                    className="text-xs font-semibold text-[#1D4ED8] hover:underline inline-flex items-center gap-1"
                  >
                    {showVideo ? '− Hide intro video' : '+ Add an intro video (optional)'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowManifesto(!showManifesto)}
                    className="text-xs font-semibold text-[#1D4ED8] hover:underline inline-flex items-center gap-1"
                  >
                    {showManifesto ? '− Hide manifesto attachment' : '+ Attach a longer manifesto (optional)'}
                  </button>
                </div>

                {showVideo && (
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5 animate-fadeIn">
                    <label className="text-xs font-bold text-slate-700">Video pitch URL</label>
                    <input
                      type="url"
                      placeholder="https://youtube.com/watch?v=... or Loom / Drive link"
                      value={videoUrl}
                      onChange={(e) => {
                        setVideoUrl(e.target.value)
                        setTouched(true)
                      }}
                      className="w-full h-11 px-3.5 bg-white border border-[#8190A7] rounded-xl text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                    />
                  </div>
                )}

                {showManifesto && (
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between gap-3 animate-fadeIn">
                    <div className="space-y-0.5">
                      <span className="text-xs font-bold text-slate-700 block">Manifesto Document</span>
                      <span className="text-xs text-slate-500">
                        {manifestoFile ? `✓ ${manifestoFile}` : 'PDF format up to 5 MB.'}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => manifestoInputRef.current?.click()}
                      className="h-9 px-3 rounded-lg border border-[#8190A7] bg-white text-xs font-semibold text-slate-800 hover:bg-slate-50 shrink-0"
                    >
                      {manifestoFile ? 'Replace file' : 'Choose file'}
                    </button>
                    <input
                      ref={manifestoInputRef}
                      type="file"
                      accept=".pdf,.docx"
                      onChange={(e) => handleFileChange(e, setManifestoFile)}
                      className="hidden"
                    />
                  </div>
                )}
              </div>
            </section>

            {/* =================================================================== */}
            {/* SECTION 4: DOCUMENTS AND CONFIRMATION                               */}
            {/* =================================================================== */}
            <section
              id="f-documents"
              className="bg-white border border-[#DDE3EE] rounded-2xl p-6 sm:p-7 flex flex-col gap-5 shadow-sm scroll-mt-24"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <h2 className="text-xl font-bold text-[#0F172A]">4. Documents and confirmation</h2>
                  {docsDone && (
                    <span className="w-5 h-5 rounded-full bg-[#047857] flex items-center justify-center text-white">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                  )}
                </div>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#E3EAFD] text-[#1E3A8A]">
                  Required
                </span>
              </div>

              {/* ID Proof (Required) */}
              <div
                id="f-id"
                className="flex flex-wrap items-center justify-between gap-3 p-4 bg-[#F6F8FC] border border-[#DDE3EE] rounded-xl scroll-mt-24"
              >
                <div className="flex flex-col gap-1 flex-1 min-w-[240px]">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-slate-900">ID proof</span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#E3EAFD] text-[#1E3A8A]">
                      Required
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 leading-normal">
                    Aadhaar, Passport or Voter ID. PDF, PNG or JPG, up to 5 MB.
                  </span>
                  <span className="text-xs text-slate-600 flex items-center gap-1.5 mt-0.5">
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                    Only the election committee sees this. It's never shown to voters.
                  </span>
                  {idFile && <span className="text-xs font-bold text-[#047857] mt-1">✓ {idFile}</span>}
                </div>
                <button
                  type="button"
                  onClick={() => idInputRef.current?.click()}
                  className="h-11 px-4 rounded-xl border border-[#8190A7] bg-white text-slate-900 font-semibold text-xs inline-flex items-center gap-2 hover:bg-slate-50 shadow-sm"
                >
                  <UploadCloud className="w-4 h-4 text-slate-700" />
                  {idFile ? 'Replace file' : 'Choose file'}
                </button>
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
                    Signed by an existing Circle Chair, Executive Director, or advisory leader.
                  </span>
                  {letterFile && <span className="text-xs font-bold text-[#047857] mt-1">✓ {letterFile}</span>}
                </div>
                <button
                  type="button"
                  onClick={() => letterInputRef.current?.click()}
                  className="h-11 px-4 rounded-xl border border-[#8190A7] bg-white text-slate-900 font-semibold text-xs inline-flex items-center gap-2 hover:bg-slate-50 shadow-sm"
                >
                  <UploadCloud className="w-4 h-4 text-slate-700" />
                  {letterFile ? 'Replace file' : 'Choose file'}
                </button>
                <input
                  ref={letterInputRef}
                  type="file"
                  accept=".pdf,.docx,image/*"
                  onChange={(e) => handleFileChange(e, setLetterFile)}
                  className="hidden"
                />
              </div>

              {/* Company Profile Deck (Optional) */}
              <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-[#F6F8FC] border border-[#DDE3EE] rounded-xl">
                <div className="flex flex-col gap-1 flex-1 min-w-[240px]">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-slate-900">Company profile</span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#EAEEF4] text-slate-600">
                      Optional
                    </span>
                  </div>
                  <span className="text-xs text-slate-500">
                    A short deck or overview about your business and community work.
                  </span>
                  {deckFile && <span className="text-xs font-bold text-[#047857] mt-1">✓ {deckFile}</span>}
                </div>
                <button
                  type="button"
                  onClick={() => deckInputRef.current?.click()}
                  className="h-11 px-4 rounded-xl border border-[#8190A7] bg-white text-slate-900 font-semibold text-xs inline-flex items-center gap-2 hover:bg-slate-50 shadow-sm"
                >
                  <UploadCloud className="w-4 h-4 text-slate-700" />
                  {deckFile ? 'Replace file' : 'Choose file'}
                </button>
                <input
                  ref={deckInputRef}
                  type="file"
                  accept=".pdf,.ppt,.pptx"
                  onChange={(e) => handleFileChange(e, setDeckFile)}
                  className="hidden"
                />
              </div>

              {/* Code of Conduct & Declaration */}
              <div id="f-agree" className="flex flex-col gap-3 pt-3 border-t border-slate-200 scroll-mt-24">
                <h3 className="text-sm font-bold text-slate-900">Our code of conduct, in short</h3>
                <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-5 leading-relaxed">
                  <li>Everything you've written in this application is accurate, verifiable and true.</li>
                  <li>No pressuring members for business, votes, or transactional favours.</li>
                  <li>Treat every Peer Circle equally, maintain neutral governance, and accept the election committee's final decision.</li>
                </ul>

                <label className="flex items-start gap-3 p-3.5 border border-[#8190A7] rounded-xl cursor-pointer text-xs text-slate-800 bg-slate-50/50 hover:bg-slate-50">
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => {
                      setAgree(e.target.checked)
                      setTouched(true)
                    }}
                    className="w-4 h-4 mt-0.5 rounded text-[#1D4ED8] focus:ring-[#1D4ED8] shrink-0"
                  />
                  <span className="leading-relaxed">
                    I confirm everything is true and I commit to upholding the Peers Global Charter and code of conduct.{' '}
                    <Link href="/leadership" className="text-[#1D4ED8] underline font-semibold">
                      Read full charter
                    </Link>
                  </span>
                </label>
              </div>
            </section>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* STICKY BOTTOM SUBMIT BAR (Direct 1-Click Submission)                       */}
      {/* ========================================================================= */}
      {!submitted && (
        <div className="sticky bottom-0 bg-white border-t border-[#C9D2E3] shadow-[0_-4px_16px_rgba(15,23,42,0.08)] z-40">
          <div className="max-w-[760px] mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-col flex-1 min-w-[200px]">
              <span
                className={`text-sm font-bold ${
                  isReadyToSubmit ? 'text-[#047857]' : 'text-slate-900'
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
                href={missingItems[0]?.href || '#'}
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
