'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GalaxyButton } from '@/components/ui/galaxy-button'
import { usePageMedia } from '@/lib/hooks/use-page-media'
import {
  ArrowRight,
  Users,
  Building2,
  Globe2,
  TrendingUp,
  Sparkles,
  Quote,
  CheckCircle2,
  MapPin,
  Send,
  Compass,
  Briefcase,
  Layers,
  Award,
  Check,
  ChevronDown,
  HelpCircle
} from 'lucide-react'

// ─── 9 Forms of Leadership Experience ─────────────────────────────────────────
const LEADERSHIP_FORMS = [
  'Built a business',
  'Led a team',
  'Founded an initiative',
  'Built a professional community',
  'Created an industry network',
  'Brought entrepreneurs together',
  'Led a project beyond your own organisation',
  'Helped develop other entrepreneurs',
  'Taken responsibility for something larger than your own role',
]

// ─── Ecosystem Routing Steps ──────────────────────────────────────────────────
const ROUTING_STRUCTURE = [
  {
    target: 'By City',
    leader: 'Executive Director',
    desc: 'Local territory & city-level ecosystem stewardship.',
    icon: MapPin,
    color: 'border-blue-200 bg-blue-50/70 text-[#0062D2]',
  },
  {
    target: 'By Industry',
    leader: 'Industry Director',
    desc: 'Sector-wide ecosystem orchestration & domain expertise.',
    icon: TrendingUp,
    color: 'border-purple-200 bg-purple-50/70 text-purple-700',
  },
  {
    target: 'Otherwise',
    leader: 'Central Team',
    desc: 'Global strategy, Advisory Board alignment & cross-regional synergy.',
    icon: Globe2,
    color: 'border-amber-200 bg-amber-50/70 text-amber-700',
  },
]

// ─── Before You Submit Reflection Questions ───────────────────────────────────
const REFLECTION_QUESTIONS = [
  'What have I built?',
  'Who have I helped?',
  'What responsibility have I taken beyond myself?',
  'What could I contribute to a community of entrepreneurs?',
  'What would I be willing to take responsibility for?',
]

export function ApplyToLeadClient() {
  const media = usePageMedia('apply-to-lead')

  // Form State
  const [formData, setFormData] = useState({
    // Tell us about yourself
    fullName: '',
    email: '',
    phone: '',
    city: '',
    // Your Business
    businessName: '',
    industry: '',
    businessDescription: '',
    yearsBuilding: '',
    // Leadership Experience
    selectedForms: [] as string[],
    leadershipExperienceDetails: '',
    // The Question that Matters
    whatYouBuilt: '',
    whatYouLed: '',
    whatYouLearned: '',
    peopleLesson: '',
    // Circle Founding (Optional)
    isFoundingCircle: 'No',
    foundingCity: '',
    foundingIndustry: '',
    networkSize: '',
    // Anything Else
    anythingElse: '',
  })

  const [currentStep, setCurrentStep] = useState(1)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateStep = (stepNumber: number): boolean => {
    const newErrors: Record<string, string> = {}

    if (stepNumber === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required'
      if (!formData.email.trim()) {
        newErrors.email = 'Contact Email is required'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address'
      }
      if (!formData.phone.trim()) {
        newErrors.phone = 'Contact Phone / Mobile is required'
      } else if (formData.phone.length !== 10) {
        newErrors.phone = 'Please enter a valid 10-digit mobile number'
      }
      if (!formData.city.trim()) newErrors.city = 'City of Residence is required'
    } else if (stepNumber === 2) {
      if (!formData.businessName.trim()) newErrors.businessName = 'Business Name is required'
      if (!formData.industry.trim()) newErrors.industry = 'Industry / Sector is required'
      if (!formData.businessDescription.trim()) newErrors.businessDescription = 'Please describe what your business does'
      if (!formData.yearsBuilding.trim()) newErrors.yearsBuilding = 'Years building is required'
    } else if (stepNumber === 3) {
      if (formData.selectedForms.length === 0) {
        newErrors.selectedForms = 'Please select at least one leadership experience'
      }
      if (!formData.leadershipExperienceDetails.trim()) {
        newErrors.leadershipExperienceDetails = 'Please share details about your leadership experience'
      }
    } else if (stepNumber === 4) {
      if (!formData.whatYouBuilt.trim()) newErrors.whatYouBuilt = 'This field is required'
      if (!formData.whatYouLed.trim()) newErrors.whatYouLed = 'This field is required'
      if (!formData.whatYouLearned.trim()) newErrors.whatYouLearned = 'This field is required'
      if (!formData.peopleLesson.trim()) newErrors.peopleLesson = 'This field is required'
    } else if (stepNumber === 5) {
      if (formData.isFoundingCircle === 'Yes') {
        if (!formData.foundingCity.trim()) newErrors.foundingCity = 'Target City is required'
        if (!formData.foundingIndustry.trim()) newErrors.foundingIndustry = 'Target Industry is required'
        if (!formData.networkSize) newErrors.networkSize = 'Please estimate your convene network size'
      }
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) {
      // Scroll to the first error input or top of the step
      const firstErrorKey = Object.keys(newErrors)[0]
      const inputEl = document.querySelector(`[name="${firstErrorKey}"]`) as HTMLElement | null
      if (inputEl) {
        inputEl.focus()
        inputEl.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      return false
    }

    return true
  }

  const goToNextStep = (targetStepNumber: number) => {
    // Validate current step before proceeding forward
    if (targetStepNumber > currentStep) {
      const isValid = validateStep(currentStep)
      if (!isValid) return
    }
    
    setErrors({})
    setCurrentStep(targetStepNumber)
    setTimeout(() => {
      const el = document.getElementById(`form-step-${targetStepNumber}`)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 50)
  }

  const goToPrevStep = (stepNumber: number) => {
    setErrors({})
    setCurrentStep(stepNumber)
    setTimeout(() => {
      const el = document.getElementById(`form-step-${stepNumber}`)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 50)
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target

    if (name === 'phone') {
      // Allow only numbers and limit to maximum 10 digits
      const numericValue = value.replace(/\D/g, '').slice(0, 10)
      setFormData((prev) => ({ ...prev, phone: numericValue }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }

    // Clear error for this field if user types
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev }
        delete updated[name]
        return updated
      })
    }
  }

  const toggleLeadershipForm = (form: string) => {
    setFormData((prev) => {
      const exists = prev.selectedForms.includes(form)
      const updated = exists
        ? prev.selectedForms.filter((item) => item !== form)
        : [...prev.selectedForms, form]
      return {
        ...prev,
        selectedForms: updated,
      }
    })
    if (errors.selectedForms) {
      setErrors((prev) => {
        const updated = { ...prev }
        delete updated.selectedForms
        return updated
      })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Validate all previous steps
    for (let step = 1; step <= 5; step++) {
      if (!validateStep(step)) {
        setCurrentStep(step)
        return
      }
    }
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      const formTop = document.getElementById('application-form')
      if (formTop) {
        formTop.scrollIntoView({ behavior: 'smooth' })
      }
    }, 800)
  }

  const handleScrollToForm = () => {
    const el = document.getElementById('application-form')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-[#FAFBFD] text-slate-900 font-sans selection:bg-[#EFF6FF] selection:text-[#0062D2]">
      
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronDown className="size-3.5 -rotate-90 text-slate-400" />
          <Link href="/leadership/leadership-ladder" className="hover:text-slate-900 transition-colors">
            Leadership
          </Link>
          <ChevronDown className="size-3.5 -rotate-90 text-slate-400" />
          <span className="text-slate-900 font-semibold">Apply to Lead</span>
        </div>
      </div>

      {/* ─── HERO SECTION ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#040F24] text-white pt-0 pb-12 sm:pb-16 border-b border-slate-800">
        {/* Home-style looping video backdrop with dark scrim */}
        <video
          className="absolute inset-0 size-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
          src="/videos/homepage-hero-bg.mp4"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(100deg,rgba(2,8,23,0.92)_0%,rgba(4,15,36,0.78)_45%,rgba(4,15,36,0.55)_100%)] pointer-events-none"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Home-style full-bleed hero */}
          <div className="min-h-[480px] lg:min-h-[520px] py-10 sm:py-14 flex items-center">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
              
              {/* Left Column: Manifesto & Value */}
              <div className="lg:col-span-12 max-w-3xl space-y-6">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold tracking-[0.22em] uppercase text-white/90">
                    LEADERSHIP APPLICATION
                  </span>
                </div>

                <div className="space-y-2.5">
                  <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-rose-400 tracking-tight leading-[1.14]">
                    Apply to Lead
                  </h1>
                  <p className="text-base sm:text-xl text-slate-200 font-normal leading-relaxed">
                    Leadership begins when contribution becomes responsibility.
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  <p>
                    Leadership at <strong className="text-white font-semibold">PEERS GLOBAL</strong> is not simply about receiving a title.
                    It begins with a willingness to take responsibility for something beyond your own business.
                  </p>

                  {/* Scope Badges */}
                  <div className="flex flex-wrap gap-2 pt-0.5">
                    {[
                      'A Circle',
                      'A group of entrepreneurs',
                      'An industry',
                      'A city',
                      'A wider community',
                    ].map((scope) => (
                      <span
                        key={scope}
                        className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-white backdrop-blur-sm"
                      >
                        {scope}
                      </span>
                    ))}
                  </div>

                  <p className="pt-0.5">
                    If you have built something, led something, brought people together, or created meaningful contribution beyond your own business, there is a place for that experience here.
                  </p>
                  <div className="border-l-2 border-[#E11D48] pl-3 py-0.5 text-xs sm:text-sm font-medium text-white/95 italic flex items-center gap-2">
                    <Sparkles className="size-4 shrink-0 text-sky-400" />
                    <span>This form is the beginning of that conversation.</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <GalaxyButton
                    onClick={handleScrollToForm}
                    variant="primary"
                    size="md"
                  >
                    Begin Application
                  </GalaxyButton>

                  <GalaxyButton
                    href="https://unity.peersglobal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="transparent"
                    size="md"
                  >
                    Open Unity App
                  </GalaxyButton>
                </div>
              </div>


            </div>
          </div>

          {/* Floating Stats Bar */}
          <div className="relative z-10 mt-5 grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 items-center">
            <div className="rounded-2xl bg-white border border-slate-200/90 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300">
              <div className="size-10 rounded-xl bg-blue-50 text-[#0062D2] border border-blue-100 flex items-center justify-center shrink-0 shadow-2xs">
                <Users className="size-5" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-slate-900 leading-tight">6 Roles</div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Pathway Levels</div>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200/90 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300">
              <div className="size-10 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center shrink-0 shadow-2xs">
                <Building2 className="size-5" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-slate-900 leading-tight">18 Circles</div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">City Ecosystems</div>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200/90 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300">
              <div className="size-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0 shadow-2xs">
                <Award className="size-5" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-slate-900 leading-tight">100%</div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Service Driven</div>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200/90 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300">
              <div className="size-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center shrink-0 shadow-2xs">
                <Globe2 className="size-5" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-slate-900 leading-tight">National</div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Network Reach</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── APPLICATION FORM CONTAINER ─────────────────────────── */}
      <section id="application-form" className="py-16 sm:py-20 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/80 scroll-mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {submitted ? (
            /* Success State */
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xl text-center space-y-6">
              <div className="size-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
                <Check className="size-8" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Application Received
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed max-w-xl mx-auto">
                Thank you, <strong className="text-slate-900 font-semibold">{formData.fullName}</strong>. Your leadership application has been submitted. 
                Your journey begins with a conversation, and our leadership team will review your submission according to your city and industry routing.
              </p>
              
              <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-100 max-w-md mx-auto text-left space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-900 block">
                  What to expect next:
                </span>
                <p className="text-xs text-blue-950/80 leading-relaxed font-light">
                  • <strong>City Routing:</strong> Executive Director review<br />
                  • <strong>Industry Routing:</strong> Industry Director review<br />
                  • <strong>Direct Contact:</strong> A conversation within 48-72 hours
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-white text-slate-800 text-xs font-semibold border border-slate-300 hover:bg-slate-50 cursor-pointer shadow-2xs"
                >
                  Edit or submit another response
                </button>
              </div>
            </div>
          ) : (
            /* Main Comprehensive Application Form */
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">

              {/* ── STEP PROGRESS BAR ── */}
              <div className="bg-white rounded-2xl p-3 sm:p-4 border border-slate-200/90 shadow-2xs">
                <div className="flex items-center justify-between gap-1 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
                  {[
                    { step: 1, label: '01 Personal' },
                    { step: 2, label: '02 Business' },
                    { step: 3, label: '03 Experience' },
                    { step: 4, label: '04 Reflection' },
                    { step: 5, label: '05 Founding' },
                    { step: 6, label: '06 Review & Send' },
                  ].map((s) => {
                    const isActive = currentStep === s.step
                    const isPassed = currentStep > s.step
                    return (
                      <button
                        type="button"
                        key={s.step}
                        onClick={() => {
                          if (currentStep >= s.step || s.step <= currentStep + 1) {
                            goToNextStep(s.step)
                          }
                        }}
                        className={`px-3 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                          isActive
                            ? 'bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white shadow-sm'
                            : isPassed
                            ? 'bg-blue-50 text-[#0062D2] border border-blue-100'
                            : 'text-slate-400 hover:text-slate-700 bg-slate-50'
                        }`}
                      >
                        {isPassed && <Check className="size-3 stroke-[3]" />}
                        <span>{s.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
              
              {/* ── PART 1: TELL US ABOUT YOURSELF ── */}
              {currentStep === 1 && (
                <div id="form-step-1" className="group relative flex flex-col justify-between p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:border-slate-300 transition-all duration-300 space-y-6 scroll-mt-24">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="size-6 rounded-full bg-blue-50 text-[#0062D2] border border-blue-100 flex items-center justify-center text-xs font-bold font-mono">
                          01
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                          PERSONAL BACKGROUND
                        </span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                        Tell Us About Yourself
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 font-normal">
                        We would like to understand the entrepreneur behind the application.
                      </p>
                    </div>
                    <div className="size-11 rounded-2xl bg-blue-50 border border-blue-100 text-[#0062D2] flex items-center justify-center shrink-0 shadow-2xs hidden sm:flex">
                      <Users className="size-5" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Vikram Malhotra"
                        className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm text-slate-900 focus:outline-none transition-all placeholder:text-slate-400 ${
                          errors.fullName
                            ? 'border-rose-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-100 bg-rose-50/20'
                            : 'border-slate-200 bg-slate-50/80 focus:bg-white focus:border-[#0062D2] focus:ring-2 focus:ring-blue-100'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-rose-500 font-semibold mt-1.5 flex items-center gap-1">
                          <span>•</span> {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                        Contact Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="vikram@company.com"
                        className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm text-slate-900 focus:outline-none transition-all placeholder:text-slate-400 ${
                          errors.email
                            ? 'border-rose-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-100 bg-rose-50/20'
                            : 'border-slate-200 bg-slate-50/80 focus:bg-white focus:border-[#0062D2] focus:ring-2 focus:ring-blue-100'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-500 font-semibold mt-1.5 flex items-center gap-1">
                          <span>•</span> {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                        Contact Phone / Mobile <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        inputMode="numeric"
                        maxLength={10}
                        pattern="[0-9]{10}"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="9876543210"
                        className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm text-slate-900 focus:outline-none transition-all placeholder:text-slate-400 ${
                          errors.phone
                            ? 'border-rose-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-100 bg-rose-50/20'
                            : 'border-slate-200 bg-slate-50/80 focus:bg-white focus:border-[#0062D2] focus:ring-2 focus:ring-blue-100'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-rose-500 font-semibold mt-1.5 flex items-center gap-1">
                          <span>•</span> {errors.phone}
                        </p>
                      )}
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                        City of Residence / Base <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="e.g. Mumbai, Bangalore, Dubai, London"
                        className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm text-slate-900 focus:outline-none transition-all placeholder:text-slate-400 ${
                          errors.city
                            ? 'border-rose-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-100 bg-rose-50/20'
                            : 'border-slate-200 bg-slate-50/80 focus:bg-white focus:border-[#0062D2] focus:ring-2 focus:ring-blue-100'
                        }`}
                      />
                      {errors.city && (
                        <p className="text-[11px] text-rose-500 font-semibold mt-1.5 flex items-center gap-1">
                          <span>•</span> {errors.city}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Step 01 of 06
                    </span>
                    <button
                      type="button"
                      onClick={() => goToNextStep(2)}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] hover:opacity-95 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span>Proceed to Step 02</span>
                      <ArrowRight className="size-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* ── PART 2: YOUR BUSINESS ── */}
              {currentStep === 2 && (
                <div id="form-step-2" className="group relative flex flex-col justify-between p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:border-slate-300 transition-all duration-300 space-y-6 scroll-mt-24">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="size-6 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center text-xs font-bold font-mono">
                          02
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                          ENTERPRISE OVERVIEW
                        </span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                        Your Business
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 font-normal">
                        Tell us about the enterprise you have built.
                      </p>
                    </div>
                    <div className="size-11 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 shadow-2xs hidden sm:flex">
                      <Building2 className="size-5" />
                    </div>
                  </div>

                  <div className="text-xs text-slate-600 bg-slate-50/80 p-3.5 rounded-2xl border border-slate-200/70 font-light leading-relaxed flex items-center gap-2.5">
                    <Sparkles className="size-4 text-[#0062D2] shrink-0" />
                    <span>The purpose is not to create a résumé, but to understand the operational wisdom you share with peers.</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                        Business Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        placeholder="Company / Enterprise Name"
                        className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm text-slate-900 focus:outline-none transition-all placeholder:text-slate-400 ${
                          errors.businessName
                            ? 'border-rose-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-100 bg-rose-50/20'
                            : 'border-slate-200 bg-slate-50/80 focus:bg-white focus:border-[#0062D2] focus:ring-2 focus:ring-blue-100'
                        }`}
                      />
                      {errors.businessName && (
                        <p className="text-[11px] text-rose-500 font-semibold mt-1.5 flex items-center gap-1">
                          <span>•</span> {errors.businessName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                        Industry / Sector <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        placeholder="e.g. Technology, Manufacturing, Healthcare"
                        className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm text-slate-900 focus:outline-none transition-all placeholder:text-slate-400 ${
                          errors.industry
                            ? 'border-rose-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-100 bg-rose-50/20'
                            : 'border-slate-200 bg-slate-50/80 focus:bg-white focus:border-[#0062D2] focus:ring-2 focus:ring-blue-100'
                        }`}
                      />
                      {errors.industry && (
                        <p className="text-[11px] text-rose-500 font-semibold mt-1.5 flex items-center gap-1">
                          <span>•</span> {errors.industry}
                        </p>
                      )}
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                        What does your business do? <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        name="businessDescription"
                        rows={3}
                        value={formData.businessDescription}
                        onChange={handleInputChange}
                        placeholder="Briefly describe your products, services, scale, or market..."
                        className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm text-slate-900 focus:outline-none transition-all placeholder:text-slate-400 font-light ${
                          errors.businessDescription
                            ? 'border-rose-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-100 bg-rose-50/20'
                            : 'border-slate-200 bg-slate-50/80 focus:bg-white focus:border-[#0062D2] focus:ring-2 focus:ring-blue-100'
                        }`}
                      />
                      {errors.businessDescription && (
                        <p className="text-[11px] text-rose-500 font-semibold mt-1.5 flex items-center gap-1">
                          <span>•</span> {errors.businessDescription}
                        </p>
                      )}
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                        How long have you been building it? <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="yearsBuilding"
                        value={formData.yearsBuilding}
                        onChange={handleInputChange}
                        placeholder="e.g. 7 years (Founded 2017)"
                        className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm text-slate-900 focus:outline-none transition-all placeholder:text-slate-400 ${
                          errors.yearsBuilding
                            ? 'border-rose-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-100 bg-rose-50/20'
                            : 'border-slate-200 bg-slate-50/80 focus:bg-white focus:border-[#0062D2] focus:ring-2 focus:ring-blue-100'
                        }`}
                      />
                      {errors.yearsBuilding && (
                        <p className="text-[11px] text-rose-500 font-semibold mt-1.5 flex items-center gap-1">
                          <span>•</span> {errors.yearsBuilding}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => goToPrevStep(1)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100 text-xs font-semibold transition-all cursor-pointer"
                    >
                      ← Previous Step
                    </button>
                    <button
                      type="button"
                      onClick={() => goToNextStep(3)}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] hover:opacity-95 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span>Proceed to Step 03</span>
                      <ArrowRight className="size-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* ── PART 3: YOUR LEADERSHIP EXPERIENCE ── */}
              {currentStep === 3 && (
                <div id="form-step-3" className="group relative flex flex-col justify-between p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:border-slate-300 transition-all duration-300 space-y-6 scroll-mt-24">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="size-6 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center text-xs font-bold font-mono">
                          03
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                          TRACK RECORD
                        </span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                        Your Leadership Experience
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 font-normal">
                        Leadership takes many forms. Select all that match your journey.
                      </p>
                    </div>
                    <div className="size-11 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 shadow-2xs hidden sm:flex">
                      <Award className="size-5" />
                    </div>
                  </div>

                  <div className="space-y-3 pt-2 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-800">
                        Select applicable experiences <span className="text-rose-500">*</span>
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {LEADERSHIP_FORMS.map((form) => {
                        const isChecked = formData.selectedForms.includes(form)
                        return (
                          <button
                            type="button"
                            key={form}
                            onClick={() => toggleLeadershipForm(form)}
                            className={`flex items-start gap-3 p-3.5 rounded-2xl text-left text-xs font-medium transition-all cursor-pointer border ${
                              isChecked
                                ? 'bg-blue-50/90 border-blue-400 text-[#0062D2] shadow-2xs'
                                : errors.selectedForms
                                ? 'bg-rose-50/10 border-rose-200 text-slate-700 hover:border-rose-400'
                                : 'bg-slate-50/80 border-slate-200/90 text-slate-700 hover:border-slate-300'
                            }`}
                          >
                            <div
                              className={`size-4 rounded-md mt-0.5 flex items-center justify-center shrink-0 border ${
                                isChecked
                                  ? 'bg-[#0062D2] border-[#0062D2] text-white'
                                  : 'border-slate-300 bg-white'
                              }`}
                            >
                              {isChecked && <Check className="size-3 stroke-[3]" />}
                            </div>
                            <span>{form}</span>
                          </button>
                        )
                      })}
                    </div>
                    {errors.selectedForms && (
                      <p className="text-[11px] text-rose-500 font-semibold mt-1.5 flex items-center gap-1">
                        <span>•</span> {errors.selectedForms}
                      </p>
                    )}
                  </div>

                  <div className="pt-2">
                    <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                      Describe the leadership experience that shaped you <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      name="leadershipExperienceDetails"
                      rows={4}
                      value={formData.leadershipExperienceDetails}
                      onChange={handleInputChange}
                      placeholder="Share the moments, challenges, initiatives or responsibilities that define your approach to leadership..."
                      className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm text-slate-900 focus:outline-none transition-all placeholder:text-slate-400 font-light ${
                        errors.leadershipExperienceDetails
                          ? 'border-rose-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-100 bg-rose-50/20'
                          : 'border-slate-200 bg-slate-50/80 focus:bg-white focus:border-[#0062D2] focus:ring-2 focus:ring-blue-100'
                      }`}
                    />
                    {errors.leadershipExperienceDetails && (
                      <p className="text-[11px] text-rose-500 font-semibold mt-1.5 flex items-center gap-1">
                        <span>•</span> {errors.leadershipExperienceDetails}
                      </p>
                    )}
                  </div>

                  <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => goToPrevStep(2)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100 text-xs font-semibold transition-all cursor-pointer"
                    >
                      ← Previous Step
                    </button>
                    <button
                      type="button"
                      onClick={() => goToNextStep(4)}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] hover:opacity-95 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span>Proceed to Step 04</span>
                      <ArrowRight className="size-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* ── PART 4: THE QUESTION THAT MATTERS ── */}
              {currentStep === 4 && (
                <div id="form-step-4" className="group relative flex flex-col justify-between p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-white via-white to-blue-50/30 border-2 border-blue-200/90 shadow-sm space-y-6 scroll-mt-24">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="size-6 rounded-full bg-rose-50 text-rose-600 border border-rose-100 flex items-center justify-center text-xs font-bold font-mono">
                          04
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
                          CRITICAL REFLECTION
                        </span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                        The Question That Matters
                      </h2>
                      <p className="text-sm font-semibold text-[#0062D2]">
                        Have you built or led something beyond your own business?
                      </p>
                    </div>
                    <div className="size-11 rounded-2xl bg-rose-50 border border-rose-100 text-rose-600 flex items-center justify-center shrink-0 shadow-2xs hidden sm:flex">
                      <Quote className="size-5" />
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-100 text-xs text-slate-600 font-light leading-relaxed">
                    <strong className="text-slate-900 font-semibold block mb-0.5">This is not a test — it is a question about contribution.</strong>
                    We want to understand whether you have already experienced the responsibility of guiding something that extends beyond your individual interests.
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                        1. Tell us what you built <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        name="whatYouBuilt"
                        rows={3}
                        value={formData.whatYouBuilt}
                        onChange={handleInputChange}
                        placeholder="What initiative, group, community or platform did you create?"
                        className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm text-slate-900 focus:outline-none transition-all placeholder:text-slate-400 font-light ${
                          errors.whatYouBuilt
                            ? 'border-rose-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-100 bg-rose-50/20'
                            : 'border-slate-200 bg-slate-50/80 focus:bg-white focus:border-[#0062D2] focus:ring-2 focus:ring-blue-100'
                        }`}
                      />
                      {errors.whatYouBuilt && (
                        <p className="text-[11px] text-rose-500 font-semibold mt-1.5 flex items-center gap-1">
                          <span>•</span> {errors.whatYouBuilt}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                        2. Tell us what you led <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        name="whatYouLed"
                        rows={3}
                        value={formData.whatYouLed}
                        onChange={handleInputChange}
                        placeholder="What team, mission or collective effort did you guide?"
                        className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm text-slate-900 focus:outline-none transition-all placeholder:text-slate-400 font-light ${
                          errors.whatYouLed
                            ? 'border-rose-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-100 bg-rose-50/20'
                            : 'border-slate-200 bg-slate-50/80 focus:bg-white focus:border-[#0062D2] focus:ring-2 focus:ring-blue-100'
                        }`}
                      />
                      {errors.whatYouLed && (
                        <p className="text-[11px] text-rose-500 font-semibold mt-1.5 flex items-center gap-1">
                          <span>•</span> {errors.whatYouLed}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                        3. Tell us what you learned <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        name="whatYouLearned"
                        rows={3}
                        value={formData.whatYouLearned}
                        onChange={handleInputChange}
                        placeholder="What were the core lessons from that experience?"
                        className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm text-slate-900 focus:outline-none transition-all placeholder:text-slate-400 font-light ${
                          errors.whatYouLearned
                            ? 'border-rose-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-100 bg-rose-50/20'
                            : 'border-slate-200 bg-slate-50/80 focus:bg-white focus:border-[#0062D2] focus:ring-2 focus:ring-blue-100'
                        }`}
                      />
                      {errors.whatYouLearned && (
                        <p className="text-[11px] text-rose-500 font-semibold mt-1.5 flex items-center gap-1">
                          <span>•</span> {errors.whatYouLearned}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                        4. What it taught you about people <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        name="peopleLesson"
                        rows={3}
                        value={formData.peopleLesson}
                        onChange={handleInputChange}
                        placeholder="What insights did you gain about human relationships, trust, and alignment?"
                        className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm text-slate-900 focus:outline-none transition-all placeholder:text-slate-400 font-light ${
                          errors.peopleLesson
                            ? 'border-rose-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-100 bg-rose-50/20'
                            : 'border-slate-200 bg-slate-50/80 focus:bg-white focus:border-[#0062D2] focus:ring-2 focus:ring-blue-100'
                        }`}
                      />
                      {errors.peopleLesson && (
                        <p className="text-[11px] text-rose-500 font-semibold mt-1.5 flex items-center gap-1">
                          <span>•</span> {errors.peopleLesson}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between border-t border-blue-100">
                    <button
                      type="button"
                      onClick={() => goToPrevStep(3)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100 text-xs font-semibold transition-all cursor-pointer"
                    >
                      ← Previous Step
                    </button>
                    <button
                      type="button"
                      onClick={() => goToNextStep(5)}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] hover:opacity-95 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span>Proceed to Step 05</span>
                      <ArrowRight className="size-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* ── PART 5: IF YOU ARE THINKING ABOUT FOUNDING A CIRCLE ── */}
              {currentStep === 5 && (
                <div id="form-step-5" className="group relative flex flex-col justify-between p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:border-slate-300 transition-all duration-300 space-y-6 scroll-mt-24">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="size-6 rounded-full bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center text-xs font-bold font-mono">
                          05
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                          OPTIONAL PATHWAY
                        </span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                        If You Are Thinking About Founding a Circle
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 font-normal">
                        Leadership can begin with convening founders in your city or industry.
                      </p>
                    </div>
                    <div className="size-11 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center shrink-0 shadow-2xs hidden sm:flex">
                      <Globe2 className="size-5" />
                    </div>
                  </div>

                  <div className="space-y-4 pt-2 border-t border-slate-100">
                    <div className="flex flex-wrap items-center gap-4 p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70">
                      <span className="text-xs font-semibold text-slate-800">
                        Are you interested in founding a new Circle?
                      </span>
                      <div className="flex items-center gap-4 text-xs font-medium">
                        <label className="flex items-center gap-1.5 cursor-pointer">
                          <input
                            type="radio"
                            name="isFoundingCircle"
                            value="Yes"
                            checked={formData.isFoundingCircle === 'Yes'}
                            onChange={handleInputChange}
                            className="size-4 text-blue-600"
                          />
                          <span>Yes</span>
                        </label>
                        <label className="flex items-center gap-1.5 cursor-pointer">
                          <input
                            type="radio"
                            name="isFoundingCircle"
                            value="No"
                            checked={formData.isFoundingCircle === 'No'}
                            onChange={handleInputChange}
                            className="size-4 text-blue-600"
                          />
                          <span>No / Exploring other roles</span>
                        </label>
                      </div>
                    </div>

                    {formData.isFoundingCircle === 'Yes' && (
                      <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-4 pt-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-amber-950 mb-1">
                              City — Where would you like to build the Circle? <span className="text-rose-500">*</span>
                            </label>
                            <input
                              type="text"
                              name="foundingCity"
                              value={formData.foundingCity}
                              onChange={handleInputChange}
                              placeholder="Target City / Region"
                              className={`w-full px-3.5 py-2.5 rounded-xl bg-white border text-xs sm:text-sm text-slate-900 focus:outline-none transition-all ${
                                errors.foundingCity ? 'border-rose-500 focus:border-rose-500 ring-2 ring-rose-100' : 'border-amber-200'
                              }`}
                            />
                            {errors.foundingCity && (
                              <p className="text-[11px] text-rose-600 font-semibold mt-1">
                                • {errors.foundingCity}
                              </p>
                            )}
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-amber-950 mb-1">
                              Industry — Which community would you bring together? <span className="text-rose-500">*</span>
                            </label>
                            <input
                              type="text"
                              name="foundingIndustry"
                              value={formData.foundingIndustry}
                              onChange={handleInputChange}
                              placeholder="Target Sector or Cross-Industry"
                              className={`w-full px-3.5 py-2.5 rounded-xl bg-white border text-xs sm:text-sm text-slate-900 focus:outline-none transition-all ${
                                errors.foundingIndustry ? 'border-rose-500 focus:border-rose-500 ring-2 ring-rose-100' : 'border-amber-200'
                              }`}
                            />
                            {errors.foundingIndustry && (
                              <p className="text-[11px] text-rose-600 font-semibold mt-1">
                                • {errors.foundingIndustry}
                              </p>
                            )}
                          </div>

                          <div className="sm:col-span-2">
                            <label className="block text-xs font-semibold text-amber-950 mb-1">
                              Your Network — How many entrepreneurs could you realistically convene for first conversations? <span className="text-rose-500">*</span>
                            </label>
                            <select
                              name="networkSize"
                              value={formData.networkSize}
                              onChange={handleInputChange}
                              className={`w-full px-3.5 py-2.5 rounded-xl bg-white border text-xs sm:text-sm text-slate-900 focus:outline-none transition-all ${
                                errors.networkSize ? 'border-rose-500 focus:border-rose-500 ring-2 ring-rose-100' : 'border-amber-200'
                              }`}
                            >
                              <option value="">Select an estimate</option>
                              <option value="10–20 entrepreneurs">10–20 entrepreneurs</option>
                              <option value="25–50 entrepreneurs (Full Circle base)">25–50 entrepreneurs (Full Circle base)</option>
                              <option value="50+ entrepreneurs across city">50+ entrepreneurs across city</option>
                            </select>
                            {errors.networkSize && (
                              <p className="text-[11px] text-rose-600 font-semibold mt-1">
                                • {errors.networkSize}
                              </p>
                            )}
                          </div>
                        </div>

                        <p className="text-xs text-amber-900/80 italic font-light pt-1">
                          You do not need to have everything figured out today. But you should have a genuine conviction that the right peers can convene.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => goToPrevStep(4)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100 text-xs font-semibold transition-all cursor-pointer"
                    >
                      ← Previous Step
                    </button>
                    <button
                      type="button"
                      onClick={() => goToNextStep(6)}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] hover:opacity-95 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span>Proceed to Step 06</span>
                      <ArrowRight className="size-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* ── PART 6: ANYTHING ELSE & SUBMIT ── */}
              {currentStep === 6 && (
                <div className="space-y-6 sm:space-y-8">
                  <div id="form-step-6" className="group relative flex flex-col justify-between p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:border-slate-300 transition-all duration-300 space-y-6 scroll-mt-24">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <span className="size-6 rounded-full bg-slate-100 text-slate-700 border border-slate-200 flex items-center justify-center text-xs font-bold font-mono">
                            06
                          </span>
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                            ADDITIONAL NOTES
                          </span>
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                          Anything Else?
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-500 font-normal">
                          Share whatever else defines your leadership purpose.
                        </p>
                      </div>
                      <div className="size-11 rounded-2xl bg-slate-100 border border-slate-200 text-slate-600 flex items-center justify-center shrink-0 shadow-2xs hidden sm:flex">
                        <Briefcase className="size-5" />
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                      <textarea
                        name="anythingElse"
                        rows={4}
                        value={formData.anythingElse}
                        onChange={handleInputChange}
                        placeholder="Sometimes the most useful part of an application is what does not fit neatly into a form field..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-[#0062D2] focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-slate-400 font-light"
                      />
                    </div>

                    <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => goToPrevStep(5)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100 text-xs font-semibold transition-all cursor-pointer"
                      >
                        ← Previous Step
                      </button>
                      <span className="text-xs font-semibold text-slate-500">
                        Final Step before Submission
                      </span>
                    </div>
                  </div>

                  {/* ── PART 7: BEFORE YOU SUBMIT REFLECTION CARD ── */}
                  <div id="form-review-submit" className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white rounded-3xl p-7 sm:p-10 shadow-xl space-y-6 border border-slate-800 scroll-mt-24">
                    <div className="flex items-center gap-2">
                      <Sparkles className="size-4 text-amber-400" />
                      <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
                        BEFORE YOU SUBMIT
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold">
                      Please take a moment to consider:
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      {REFLECTION_QUESTIONS.map((q, idx) => (
                        <div
                          key={q}
                          className={`p-4 rounded-2xl border border-white/10 bg-white/5 flex items-start gap-3 ${
                            idx === 4 ? 'sm:col-span-2 border-amber-400/30 bg-amber-400/10' : ''
                          }`}
                        >
                          <span className="text-xs font-mono font-bold text-sky-300">{`0${idx + 1}`}</span>
                          <p className={`text-xs sm:text-sm ${idx === 4 ? 'text-amber-200 font-bold' : 'text-slate-200 font-light'}`}>
                            {q}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex justify-between items-center">
                      <button
                        type="button"
                        onClick={() => goToPrevStep(5)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 text-xs font-semibold transition-all cursor-pointer"
                      >
                        ← Back to Step 5
                      </button>
                      <GalaxyButton
                        type="submit"
                        disabled={isSubmitting}
                        variant="primary"
                        size="md"
                      >
                        {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                      </GalaxyButton>
                    </div>
                  </div>
                </div>
              )}

            </form>
          )}

        </div>
      </section>

      {/* ─── SECTION: WHAT HAPPENS AFTER YOU APPLY? ───────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                ROUTING & REVIEW
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight">
              What happens after you apply?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              Your application is reviewed according to where your experience and proposed contribution may best connect within the PEERS GLOBAL ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {ROUTING_STRUCTURE.map((route, idx) => {
              const Icon = route.icon

              return (
                <div
                  key={route.target}
                  className="group relative flex flex-col justify-between p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-200 hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0062D2] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                        {route.target}
                      </span>
                      <div className="size-11 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-700 group-hover:bg-blue-50 group-hover:text-[#0062D2] group-hover:border-blue-100 transition-colors shadow-2xs">
                        <Icon className="size-5" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <ArrowRight className="size-4 text-[#0062D2] group-hover:translate-x-1 transition-transform" />
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                          {route.leader}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                        {route.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-400 group-hover:text-[#0062D2] transition-colors">
                    <span>Ecosystem Track</span>
                    <span>0{idx + 1}</span>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-10 p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-blue-50/70 via-indigo-50/40 to-slate-50 border border-blue-100 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="size-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
              <Sparkles className="size-5" />
            </div>
            <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
              Where appropriate, the conversation can then move toward the leadership opportunity that best fits your experience and the community&apos;s needs.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION: LEADERSHIP IS A CONVERSATION ─────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative rounded-3xl bg-white border border-slate-200/90 shadow-lg p-7 sm:p-10 lg:p-12 overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Heading & Value Points */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                    <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                      NO FIXED ASSUMPTIONS
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight leading-tight">
                    Leadership is a conversation
                  </h2>

                  <p className="text-base sm:text-lg text-slate-700 font-semibold leading-relaxed">
                    You do not have to know which leadership role is right for you before you apply.
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    'You may know that you want to contribute to the wider founder ecosystem.',
                    'You may know that you have the trust and energy to bring people together.',
                    'You may know that your experience and lessons could be deeply useful to others.',
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:bg-blue-50/40 hover:border-blue-200 transition-all duration-300"
                    >
                      <div className="size-6 rounded-full bg-blue-100/70 text-[#0062D2] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <Check className="size-3.5 stroke-[3]" />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50/80 via-indigo-50/50 to-slate-50 border border-blue-200/70 flex items-center gap-3">
                  <Sparkles className="size-5 text-[#0062D2] shrink-0" />
                  <p className="font-semibold text-slate-900 text-xs sm:text-sm leading-relaxed">
                    That is enough to begin the conversation. The right role will become clear through dialogue.
                  </p>
                </div>
              </div>

              {/* Right Column: Spotlight Dialogue Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white p-7 sm:p-9 shadow-xl border border-slate-800 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="size-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-sky-300 flex items-center justify-center shadow-inner">
                      <Quote className="size-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-sky-300 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                      STEWARDSHIP
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                      A Dialogue of Contribution
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                      We value founders and leaders who bring energy, authenticity, and stewardship. You don&apos;t need all the answers today — just the conviction to show up for fellow entrepreneurs.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                    <div className="size-9 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] flex items-center justify-center text-white font-bold text-xs shadow-sm">
                      PG
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Peers Global Leadership</div>
                      <div className="text-[11px] text-slate-400 font-light">Ecosystem Stewardship Team</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ─── SECTION: CLOSING HERO BANNER ─────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white py-20 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(0,98,210,0.18),transparent_50%),radial-gradient(circle_at_82%_12%,rgba(99,102,241,0.15),transparent_50%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-blue-600/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-indigo-500/15 blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Manifesto */}
            <div className="lg:col-span-8 flex flex-col items-start space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-sky-400 to-rose-400 rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-sky-400">
                  PEERS GLOBAL LEADERSHIP
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight">
                Your leadership journey may begin here.
              </h2>

              <p className="text-sm sm:text-base text-slate-200 font-light leading-relaxed max-w-2xl">
                PEERS GLOBAL does not need people who simply want another title. It needs entrepreneurs who are willing to contribute, bring relationships, and foster communities.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <GalaxyButton
                  onClick={handleScrollToForm}
                  variant="primary"
                  size="md"
                >
                  Apply to Lead
                </GalaxyButton>

                <GalaxyButton
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="transparent"
                  size="md"
                >
                  Download Unity App
                </GalaxyButton>
              </div>
            </div>

            {/* Right Cursive Script */}
            <div className="lg:col-span-4 text-left lg:text-right select-none pointer-events-none drop-shadow-lg space-y-1">
              <p
                className="text-xl sm:text-2xl text-white/70 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Ideas.
              </p>
              <p
                className="text-xl sm:text-2xl text-white/80 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                People.
              </p>
              <p
                className="text-xl sm:text-2xl text-white leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Communities.
              </p>
              <p
                className="text-2xl sm:text-3xl text-amber-300 font-bold leading-tight"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                A Brighter Tomorrow.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
