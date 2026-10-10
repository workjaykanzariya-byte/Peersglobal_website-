'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ClosingCtaSection } from '@/components/site/ClosingCtaSection'
import { GalaxyButton } from '@/components/ui/galaxy-button'
import {
  ArrowRight,
  ChevronRight,
  ChevronDown,
  ChevronLeft,
  Smartphone,
  Users,
  MapPin,
  Target,
  CheckCircle2,
  Circle as CircleIcon,
  Phone,
  Mail,
  Building2,
  Lightbulb,
  Globe,
  TrendingUp,
  Star,
  Check,
  Loader2,
  Apple,
} from 'lucide-react'
import { SITE } from '@/lib/data/site'

// ─── Industries list ───────────────────────────────────────────────────────
const INDUSTRIES = [
  'Manufacturing & Engineering',
  'Real Estate, Construction & Infrastructure',
  'Technology, IT & Digital Services',
  'Healthcare, Wellness & Life Sciences',
  'Education, Training & Skill Development',
  'Events, Fashion, Apparel & Lifestyle',
  'CSR, NGO, Impact & Nation-Building',
  'Franchise & Licensing',
  'Sustainable & ESG Business',
  'Other',
]

const DURATION_OPTIONS = [
  'Less than 2 years',
  '2 to 5 years',
  '5 to 10 years',
  'More than 10 years',
]

const ROLE_OPTIONS = [
  'Founder',
  'Co-Founder',
  'Director',
  'Partner',
  'CEO',
  'Other',
]

const LOOKING_FOR_OPTIONS = [
  'Business relationships',
  'Collaboration opportunities',
  'Learning & masterclasses',
  'Mentorship & guidance',
  'Introductions to decision-makers',
  'New markets & cities',
  'Strategic connections',
  'Support with a business challenge',
  'A community of like-minded entrepreneurs',
  'Something I may not yet know how to define',
]

const CIRCLE_PREFERENCE_OPTIONS = [
  { label: 'Industry Circle — where people understand your sector', value: 'industry' },
  { label: 'Purpose & Goal Circle — where people share your ambition', value: 'purpose' },
  { label: 'Import, Export & Global Trade', value: 'trade' },
  { label: 'Startup Founders & Scaleups', value: 'startup' },
  { label: 'SME IPO & Capital Goal', value: 'ipo' },
  { label: 'Family Business & Succession', value: 'family' },
  { label: 'Young Entrepreneurs (Below 35)', value: 'young' },
  { label: 'Leadership & Transformation', value: 'leadership' },
  { label: 'Not sure — help me decide based on my business & ambition', value: 'unsure' },
]

const VISIT_OPTIONS = [
  'Yes, I would like to experience the room as soon as possible',
  'Yes, in the next few weeks',
  'Not yet — I would like to have a conversation first',
]

const WHAT_HAPPENS = [
  {
    step: '1',
    icon: CheckCircle2,
    title: 'We understand your journey.',
    desc: 'The enquiry is intentionally simple. We look at the person behind the business — not just another profile.',
  },
  {
    step: '2',
    icon: Phone,
    title: 'A real conversation begins.',
    desc: 'You speak with a Circle Director. Not a sales pitch — an authentic conversation about your ambition and where you want to go.',
  },
  {
    step: '3',
    icon: Target,
    title: 'Finding where you belong.',
    desc: 'The objective is not to place you anywhere, but where your presence can truly contribute and thrive.',
  },
  {
    step: '4',
    icon: Users,
    title: 'Experience the room.',
    desc: 'Visit a meeting, experience the trust and energy in person, and meet the room before deciding.',
  },
]

const FAQS = [
  {
    q: 'Do I need to know which Circle I want before enquiring?',
    a: 'No. You can tell us about your business, your interests and what you are looking for. The purpose of the enquiry is to help understand where you may fit.',
  },
  {
    q: 'Can I choose between an Industry Circle and a Purpose & Goal Circle?',
    a: 'Yes. PEERS GLOBAL provides both pathways because entrepreneurs can be connected by what they do as well as what they are trying to achieve.',
  },
  {
    q: 'What if I am interested in more than one Circle?',
    a: 'That possibility exists within the PEERS GLOBAL structure. Your circumstances and the relevant Circle context will determine the appropriate pathway.',
  },
  {
    q: 'Can I experience a Circle before deciding?',
    a: 'Yes. The enquiry form provides an option to indicate your interest in visiting a Circle. Sometimes the best way to understand a Circle is not to read about it, but to experience the room.',
  },
  {
    q: 'What if I am still unsure?',
    a: 'Start with the conversation. You do not need to have the perfect answer before reaching out.',
  },
  {
    q: 'Is the Unity App the only way to begin?',
    a: 'No. You can begin through the Unity App or submit an enquiry to speak with us directly.',
  },
]

// ─── Pill select button ────────────────────────────────────────────────────
function PillButton({
  selected,
  onClick,
  children,
  multi = false,
}: {
  selected: boolean
  onClick: () => void
  children: React.ReactNode
  multi?: boolean
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium border transition-all cursor-pointer text-left ${
        selected
          ? 'bg-[#0062D2] border-[#0062D2] text-white shadow-md shadow-blue-600/20'
          : 'bg-white border-slate-200 text-slate-700 hover:border-[#0062D2] hover:text-[#0062D2]'
      }`}
    >
      {multi && (
        <span
          className={`size-4 rounded shrink-0 border-2 flex items-center justify-center ${
            selected ? 'bg-white border-white' : 'border-slate-300'
          }`}
        >
          {selected && <Check className="size-3 text-[#0062D2]" />}
        </span>
      )}
      {children}
    </button>
  )
}

// ─── Main client component ─────────────────────────────────────────────────
export function FindPageClient() {
  const [step, setStep] = useState(1)
  const totalSteps = 6
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // Form state
  const [form, setForm] = useState({
    fullName: '',
    mobile: '',
    email: '',
    city: '',
    businessName: '',
    role: '',
    industry: '',
    duration: '',
    lookingFor: [] as string[],
    circlePrefs: [] as string[],
    visitPref: '',
    notes: '',
  })

  const updateField = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }))

  const toggleMulti = (key: 'lookingFor' | 'circlePrefs', value: string, max?: number) => {
    setForm((f) => {
      const arr = f[key]
      if (arr.includes(value)) return { ...f, [key]: arr.filter((v) => v !== value) }
      if (max && arr.length >= max) return f
      return { ...f, [key]: [...arr, value] }
    })
  }

  const canNext = () => {
    if (step === 1) return form.fullName && form.mobile && form.email && form.city
    if (step === 2) return form.businessName && form.role && form.industry && form.duration
    if (step === 3) return form.lookingFor.length > 0
    if (step === 4) return form.circlePrefs.length > 0
    if (step === 5) return form.visitPref !== ''
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 1500))
    setSubmitting(false)
    setSubmitted(true)
  }

  const progress = Math.round((step / totalSteps) * 100)

  const STEP_LABELS = [
    'Your details',
    'About your business',
    'What you are looking for',
    'Circle preference',
    'Visit a Circle',
    'Additional information',
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0F172A] selection:bg-[#0062D2] selection:text-white font-sans">

      {/* =================================================================
          SECTION 1: HERO
          ================================================================= */}
      <section className="relative overflow-hidden bg-[#040F24] text-white pt-6 sm:pt-8 pb-12 sm:pb-16 border-b border-slate-800">
        {/* Full Bleed Hero Video Background */}
        <div className="absolute inset-0 size-full overflow-hidden pointer-events-none">
          <video
            src="/videos/homepage-hero-bg.mp4"
            poster="/images/circles-hero-new.jpg"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(2,8,23,0.92)_0%,rgba(4,15,36,0.78)_45%,rgba(4,15,36,0.55)_100%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="size-3.5 text-slate-500" />
            <Link href="/circles" className="hover:text-white transition-colors">Circles</Link>
            <ChevronRight className="size-3.5 text-slate-500" />
            <span className="text-white font-semibold">Find a Circle</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full min-h-[440px] lg:min-h-[480px]">
            {/* Left Hero Content */}
            <div className="lg:col-span-8 max-w-3xl space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur-sm uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
                <span>FIND YOUR CIRCLE</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white">
                  Every Entrepreneur Belongs Somewhere.{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-rose-400">
                    Let Us Help You Find Where.
                  </span>
                </h1>
                <p className="text-base sm:text-lg font-medium text-slate-200 leading-snug">
                  Finding your Circle should feel like beginning a conversation with a community that wants to understand who you are, what you are building, and where you want to go.
                </p>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <GalaxyButton
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="md"
                >
                  Download Unity App
                </GalaxyButton>
                <GalaxyButton
                  href="#find-form"
                  variant="transparent"
                  size="md"
                >
                  Submit Your Enquiry
                </GalaxyButton>
              </div>

              {/* Stat Band */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-lg pt-6 border-t border-white/15">
                {[
                  { icon: Target, value: '10+', label: 'Purpose Circles' },
                  { icon: MapPin, value: '45+', label: 'Cities' },
                  { icon: Users, value: '120+', label: 'Seats Open' },
                ].map((s) => {
                  const Icon = s.icon
                  return (
                    <div key={s.label} className="flex items-center gap-2.5 p-3 sm:p-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm">
                      <div className="size-9 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-sky-300 shrink-0">
                        <Icon className="size-4" />
                      </div>
                      <div>
                        <div className="font-bold text-base sm:text-lg text-white leading-none">{s.value}</div>
                        <div className="text-[10px] text-slate-300 font-medium mt-1 leading-tight">{s.label}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right Cursive Script Highlights */}
            <div className="hidden lg:flex lg:col-span-4 flex-col items-end text-right select-none pointer-events-none drop-shadow-lg space-y-1">
              <p
                className="text-2xl sm:text-3xl text-white/80 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Right People
              </p>
              <p
                className="text-3xl sm:text-4xl text-white leading-tight font-bold"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Bigger Opportunities
              </p>
              <p
                className="text-3xl sm:text-4xl text-sky-400 font-bold leading-tight"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                A Stronger Tomorrow
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          SECTION 2: TWO WAYS TO BEGIN
          ================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">TWO WAYS TO BEGIN</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight">
              Two Ways to Begin
            </h2>
            <div className="text-right shrink-0">
              <div
                className="text-[#0062D2] text-2xl sm:text-3xl font-normal leading-tight select-none pointer-events-none"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                A Stronger<br />Tomorrow Together
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* 01 Start With Unity */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0F172A] text-white flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#60A5FA]">01. START WITH UNITY</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
                Start With Unity
              </h3>
              <p className="text-sm text-white/80 leading-relaxed mb-4">
                The simplest way to explore PEERS GLOBAL is through the Unity App. Unity is your digital home inside the community.
              </p>
              <p className="text-sm text-white/70 leading-relaxed mb-8">
                It gives you a way to understand the PEERS GLOBAL ecosystem, discover the community, explore relevant opportunities and begin building relationships.
              </p>
              <div className="flex flex-wrap gap-3 mt-auto">
                <a
                  href={SITE.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-badge-btn"
                  aria-label="Download on the Apple App Store"
                >
                  <Apple className="size-5.5 fill-white shrink-0" />
                  <div className="text-left">
                    <span className="app-badge-sub">Download on the</span>
                    <span className="app-badge-title">App Store</span>
                  </div>
                </a>
                <a
                  href={SITE.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-badge-btn"
                  aria-label="Get it on Google Play"
                >
                  <svg className="size-5.5 shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M3.6 2.4C3.4 2.6 3.2 2.9 3.2 3.4V20.6C3.2 21.1 3.4 21.4 3.6 21.6L12.7 12L3.6 2.4Z" fill="#2196F3" />
                    <path d="M16.3 8.4L13.8 10.9L12.7 12L13.8 13.1L16.3 15.6L20.4 13.3C21.6 12.6 21.6 11.4 20.4 10.7L16.3 8.4Z" fill="#FFC107" />
                    <path d="M12.7 12L3.6 21.6C3.9 21.8 4.3 21.8 4.8 21.5L16.3 15.6L12.7 12Z" fill="#4CAF50" />
                    <path d="M12.7 12L16.3 8.4L4.8 2.5C4.3 2.2 3.9 2.2 3.6 2.4L12.7 12Z" fill="#F44336" />
                  </svg>
                  <div className="text-left">
                    <span className="app-badge-sub">GET IT ON</span>
                    <span className="app-badge-title">Google Play</span>
                  </div>
                </a>
              </div>
            </div>

            {/* 02 Tell Us About Yourself */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#F0F7FF] border border-[#DCEBFE] flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">02. TELL US ABOUT YOURSELF</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4 leading-snug">
                Tell Us About Yourself
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                If you would prefer to speak with us first, share a few details about yourself and your entrepreneurial journey.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mb-8 flex-1">
                You do not need to have everything figured out. You simply need to tell us enough for us to understand what you are looking for.
              </p>

              <a
                href="#find-form"
                className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-7 py-3.5 text-sm font-semibold transition-all inline-flex items-center gap-2 w-fit shadow-md shadow-blue-600/20"
              >
                Submit Your Enquiry
                <ArrowRight className="size-4" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* =================================================================
          SECTION 3: MULTI-STEP FORM
          ================================================================= */}
      <section id="find-form" className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">SIX QUICK QUESTIONS</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight">
                Let us understand<br />your business
              </h2>
              <p className="text-base text-slate-500 mt-2">Two minutes. A stronger tomorrow.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Left: Step navigator */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-1">
                {STEP_LABELS.map((label, i) => {
                  const stepNum = i + 1
                  const isDone = step > stepNum
                  const isActive = step === stepNum
                  return (
                    <button
                      key={label}
                      type="button"
                      onClick={() => isDone && setStep(stepNum)}
                      className={`w-full flex items-center gap-3.5 p-3.5 rounded-xl text-left transition-all ${
                        isActive ? 'bg-[#EFF6FF] border border-[#DCEBFE]' : isDone ? 'hover:bg-slate-50 cursor-pointer' : 'cursor-default opacity-50'
                      }`}
                    >
                      <div className={`size-7 rounded-full flex items-center justify-center shrink-0 font-bold text-xs transition-all ${
                        isDone ? 'bg-emerald-500 text-white' : isActive ? 'bg-[#0062D2] text-white' : 'bg-slate-200 text-slate-500'
                      }`}>
                        {isDone ? <Check className="size-3.5" /> : stepNum}
                      </div>
                      <div>
                        <p className={`text-xs font-bold ${isActive ? 'text-[#0062D2]' : isDone ? 'text-slate-700' : 'text-slate-400'}`}>
                          Step {stepNum} of {totalSteps}
                        </p>
                        <p className={`text-sm font-semibold ${isActive ? 'text-[#0F172A]' : 'text-slate-500'}`}>{label}</p>
                      </div>
                    </button>
                  )
                })}

                {/* Quote */}
                <div className="pt-6 mt-6 border-t border-slate-200">
                  <p className="font-serif text-xl text-[#0062D2] leading-snug mb-2">
                    "The right people can change the trajectory of your business."
                  </p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Peers Global</p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-8">
              {submitted ? (
                <div className="rounded-3xl bg-white border border-slate-200 p-10 sm:p-14 text-center">
                  <div className="size-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="size-8" />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-[#0F172A] mb-4">Enquiry submitted.</h3>
                  <p className="text-base text-slate-600 leading-relaxed mb-6 max-w-md mx-auto">
                    A Circle Director will contact you personally within 48 hours for a real conversation about your business and which Circle fits.
                  </p>
                  <p className="text-sm text-slate-500 mb-8">While you wait, explore the community inside the Unity App.</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <a
                      href="https://unity.peersglobal.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-7 py-3 text-sm font-semibold inline-flex items-center gap-2"
                    >
                      <Smartphone className="size-4" />
                      Download Unity App
                    </a>
                    <Link
                      href="/circles"
                      className="rounded-full border border-slate-300 text-slate-700 px-7 py-3 text-sm font-semibold hover:border-slate-400 transition-all"
                    >
                      Explore Circles
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm">

                  {/* Progress bar */}
                  <div className="h-1.5 bg-slate-100">
                    <div
                      className="h-full bg-[#0062D2] transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  {/* Step header */}
                  <div className="flex items-center justify-between px-8 pt-6 pb-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Step {step} of {totalSteps}
                    </span>
                    <span className="text-xs font-bold text-[#0062D2]">{progress}%</span>
                  </div>

                  <div className="px-8 pb-8">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A] mb-1">
                      {STEP_LABELS[step - 1]}
                    </h3>

                    {/* ─── STEP 1: Details ─── */}
                    {step === 1 && (
                      <div className="mt-6 space-y-4">
                        <p className="text-sm text-slate-500 mb-6">Let's start with your basic information.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-slate-600 mb-1.5">Full name <span className="text-red-500">*</span></label>
                            <input
                              type="text"
                              placeholder="Enter your full name"
                              value={form.fullName}
                              onChange={(e) => updateField('fullName', e.target.value)}
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0062D2] focus:ring-2 focus:ring-[#0062D2]/10 outline-none text-sm transition-all"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-600 mb-1.5">Mobile number <span className="text-red-500">*</span></label>
                            <div className="flex gap-2">
                              <div className="px-3 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-600 font-semibold shrink-0">+91</div>
                              <input
                                type="tel"
                                placeholder="Enter mobile number"
                                value={form.mobile}
                                onChange={(e) => updateField('mobile', e.target.value)}
                                className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0062D2] focus:ring-2 focus:ring-[#0062D2]/10 outline-none text-sm transition-all"
                                required
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-600 mb-1.5">Email address <span className="text-red-500">*</span></label>
                            <input
                              type="email"
                              placeholder="Enter your email address"
                              value={form.email}
                              onChange={(e) => updateField('email', e.target.value)}
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0062D2] focus:ring-2 focus:ring-[#0062D2]/10 outline-none text-sm transition-all"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-600 mb-1.5">City <span className="text-red-500">*</span></label>
                            <input
                              type="text"
                              placeholder="Select your city"
                              value={form.city}
                              onChange={(e) => updateField('city', e.target.value)}
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0062D2] focus:ring-2 focus:ring-[#0062D2]/10 outline-none text-sm transition-all"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* ─── STEP 2: Business ─── */}
                    {step === 2 && (
                      <div className="mt-6 space-y-6">
                        <p className="text-sm text-slate-500">Tell us about your business.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-slate-600 mb-1.5">Business name <span className="text-red-500">*</span></label>
                            <input
                              type="text"
                              placeholder="Your business name"
                              value={form.businessName}
                              onChange={(e) => updateField('businessName', e.target.value)}
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0062D2] focus:ring-2 focus:ring-[#0062D2]/10 outline-none text-sm transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-600 mb-1.5">Your role <span className="text-red-500">*</span></label>
                            <div className="flex flex-wrap gap-2">
                              {ROLE_OPTIONS.map((r) => (
                                <PillButton key={r} selected={form.role === r} onClick={() => updateField('role', r)}>
                                  {r}
                                </PillButton>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-600 mb-2">Which industry best describes your business? <span className="text-red-500">*</span></label>
                          <div className="flex flex-wrap gap-2">
                            {INDUSTRIES.map((ind) => (
                              <PillButton key={ind} selected={form.industry === ind} onClick={() => updateField('industry', ind)}>
                                {ind}
                              </PillButton>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-600 mb-2">How long have you been in business? <span className="text-red-500">*</span></label>
                          <div className="flex flex-wrap gap-2">
                            {DURATION_OPTIONS.map((d) => (
                              <PillButton key={d} selected={form.duration === d} onClick={() => updateField('duration', d)}>
                                {d}
                              </PillButton>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* ─── STEP 3: Looking for ─── */}
                    {step === 3 && (
                      <div className="mt-6 space-y-4">
                        <p className="text-sm text-slate-500 mb-2">Which of these matters most to you right now? <span className="text-slate-400">(Select up to three)</span></p>
                        <div className="flex flex-wrap gap-2">
                          {LOOKING_FOR_OPTIONS.map((opt) => (
                            <PillButton
                              key={opt}
                              selected={form.lookingFor.includes(opt)}
                              onClick={() => toggleMulti('lookingFor', opt, 3)}
                              multi
                            >
                              {opt}
                            </PillButton>
                          ))}
                        </div>
                        {form.lookingFor.length > 0 && (
                          <p className="text-xs text-[#0062D2] font-semibold">{form.lookingFor.length}/3 selected</p>
                        )}
                      </div>
                    )}

                    {/* ─── STEP 4: Circle preference ─── */}
                    {step === 4 && (
                      <div className="mt-6 space-y-4">
                        <p className="text-sm text-slate-500 mb-2">Which kind of Circle interests you? <span className="text-slate-400">(Select any that apply)</span></p>
                        <div className="flex flex-col gap-2">
                          {CIRCLE_PREFERENCE_OPTIONS.map((opt) => (
                            <PillButton
                              key={opt.value}
                              selected={form.circlePrefs.includes(opt.value)}
                              onClick={() => toggleMulti('circlePrefs', opt.value)}
                              multi
                            >
                              {opt.label}
                            </PillButton>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* ─── STEP 5: Visit preference ─── */}
                    {step === 5 && (
                      <div className="mt-6 space-y-4">
                        <p className="text-sm text-slate-500 mb-2">Would you like to visit a Circle meeting as a guest?</p>
                        <div className="flex flex-col gap-3">
                          {VISIT_OPTIONS.map((opt) => (
                            <PillButton key={opt} selected={form.visitPref === opt} onClick={() => updateField('visitPref', opt)}>
                              {opt}
                            </PillButton>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* ─── STEP 6: Notes ─── */}
                    {step === 6 && (
                      <div className="mt-6">
                        <p className="text-sm text-slate-500 mb-4">Anything you would like us to know? <span className="text-slate-400">(Optional)</span></p>
                        <textarea
                          rows={5}
                          placeholder="Share anything that would help us understand your business or what you are looking for..."
                          value={form.notes}
                          onChange={(e) => updateField('notes', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0062D2] focus:ring-2 focus:ring-[#0062D2]/10 outline-none text-sm transition-all resize-none"
                        />
                        <div className="mt-4 p-4 rounded-xl bg-[#F0F7FF] border border-[#DCEBFE] flex items-start gap-3">
                          <CheckCircle2 className="size-4 text-[#0062D2] shrink-0 mt-0.5" />
                          <p className="text-xs text-slate-600 leading-relaxed">
                            <strong>A Circle Director will contact you personally within 48 hours.</strong> This is a real conversation, not a sales call.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Navigation */}
                    <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => setStep((s) => Math.max(1, s - 1))}
                        disabled={step === 1}
                        className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                      >
                        <ChevronLeft className="size-4" />
                        Back
                      </button>

                      {step < totalSteps ? (
                        <button
                          type="button"
                          onClick={() => canNext() && setStep((s) => Math.min(totalSteps, s + 1))}
                          disabled={!canNext()}
                          className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white px-7 py-3 text-sm font-semibold transition-all inline-flex items-center gap-2"
                        >
                          Next Step
                          <ArrowRight className="size-4" />
                        </button>
                      ) : (
                        <GalaxyButton
                          type="submit"
                          disabled={submitting}
                          variant="primary"
                          size="md"
                        >
                          {submitting ? 'Submitting...' : 'Submit Enquiry'}
                        </GalaxyButton>
                      )}
                    </div>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* =================================================================
          SECTION 4: WHAT HAPPENS NEXT (Executive 4-Step Pipeline Layout)
          ================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="max-w-3xl space-y-3 text-left">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">WHAT HAPPENS NEXT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight">
              What Happens Next?
            </h2>
            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
              Once we understand your enquiry, the conversation moves forward with intention.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              The objective is not simply to place you somewhere. It is to understand where you could belong — and where your presence could contribute and thrive.
            </p>
          </div>

          {/* Connected 4-Step Pipeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {WHAT_HAPPENS.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={item.step}
                  className="relative rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all flex flex-col justify-between group space-y-5"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="size-12 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#0062D2] group-hover:text-white transition-all shadow-2xs">
                        <Icon className="size-5.5" />
                      </div>
                      <span className="text-2xl font-mono font-bold text-slate-300 group-hover:text-[#0062D2] transition-colors">
                        0{item.step}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-[#0062D2] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#0062D2] transition-colors">
                    <span>Phase 0{item.step}</span>
                    <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 4.5: YOU DON'T HAVE TO KNOW THE ANSWER YET
          ================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">NO PRESSURE</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight mb-4">
            You Don&apos;t Have to Know the Answer Yet
          </h2>

          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm max-w-3xl mx-auto mt-6 text-left">
            <p className="text-lg text-[#0062D2] font-serif italic mb-4">
              &ldquo;I am interested, but I don&apos;t know which Circle is right for me.&rdquo;
            </p>
            <p className="text-base text-slate-700 font-semibold mb-4">
              That&apos;s okay. You are not expected to understand the entire PEERS GLOBAL ecosystem before taking the first step.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600 mb-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                <span>Start with your business.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                <span>Start with your ambition.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                <span>Start with what you need.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                <span>Start with what you can contribute.</span>
              </div>
            </div>
            <p className="text-sm font-semibold text-slate-900">
              We can begin from there.
            </p>
          </div>
        </div>
      </section>

      {/* =================================================================
          SECTION 5: START WITH THE APP
          ================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">START WITH UNITY</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left */}
            <div className="lg:col-span-5">
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0F172A] tracking-tight leading-tight mb-4">
                Explore. Understand. Connect. Then decide.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                If you prefer to explore independently, begin with the Unity App. Your digital journey can help you understand the community before you decide how deeply you want to participate.
              </p>
              <p className="text-sm text-slate-800 font-semibold">
                Explore. Understand. Connect. Then decide.
              </p>
            </div>

            {/* Right: App feature list */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Users, text: 'Discover Peers by industry, city and expertise' },
                  { icon: Globe, text: 'See what the community is doing every day' },
                  { icon: Lightbulb, text: 'Understand how Circles work from the inside' },
                  { icon: Star, text: 'Connect with entrepreneurs like you' },
                  { icon: ArrowRight, text: 'Take your next step at your own pace' },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.text} className="flex items-start gap-3.5 p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-[#0062D2]/30 hover:shadow-md transition-all">
                      <div className="size-9 rounded-full bg-[#EFF6FF] text-[#0062D2] flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="size-4" />
                      </div>
                      <p className="text-sm text-[#0F172A] font-medium leading-relaxed">{item.text}</p>
                    </div>
                  )
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =================================================================
          SECTION 5.5: A CIRCLE IS MORE THAN A CATEGORY (Executive Philosophy Showcase)
          ================================================================= */}
      <section className="py-20 sm:py-28 bg-[#061836] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rose-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Heading & Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-bold tracking-[0.22em] uppercase text-sky-400">
                  THE PHILOSOPHY
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.12]">
                A Circle is More Than <br className="hidden sm:block" />
                <span className="brand-gradient-text">a Category.</span>
              </h2>

              <div className="space-y-3.5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                <p>
                  You may enter a Circle because it matches your industry. You may discover another because it matches your ambition.
                </p>
                <p className="text-white font-semibold text-lg sm:text-xl border-l-2 border-sky-400 pl-4 my-3">
                  But belonging is created by something deeper — when people begin to truly understand one another.
                </p>
                <p className="text-sm text-slate-400">
                  That is why finding your Circle is not the finish line — it is where meaningful growth begins.
                </p>
              </div>
            </div>

            {/* Right Column: 5-Stage Belonging Transformation Cards */}
            <div className="lg:col-span-6 space-y-3">
              {[
                {
                  label: 'Experience is shared',
                  desc: 'Real challenges spoken without hesitation.',
                  color: 'text-emerald-400',
                  bg: 'bg-emerald-500/10 border-emerald-500/20',
                  dot: 'bg-emerald-400',
                },
                {
                  label: 'Introductions become relationships',
                  desc: 'Moving beyond transactional contact into genuine trust.',
                  color: 'text-sky-400',
                  bg: 'bg-sky-500/10 border-sky-500/20',
                  dot: 'bg-sky-400',
                },
                {
                  label: 'Relationships become collaboration',
                  desc: 'Discovering complementary capabilities and new markets.',
                  color: 'text-purple-400',
                  bg: 'bg-purple-500/10 border-purple-500/20',
                  dot: 'bg-purple-400',
                },
                {
                  label: 'Collaboration creates contribution',
                  desc: 'Creating tangible value for peers and their ecosystem.',
                  color: 'text-amber-400',
                  bg: 'bg-amber-500/10 border-amber-500/20',
                  dot: 'bg-amber-400',
                },
                {
                  label: 'Contribution creates impact',
                  desc: 'Transforming businesses, families, and communities.',
                  color: 'text-rose-400',
                  bg: 'bg-rose-500/10 border-rose-500/20',
                  dot: 'bg-rose-400',
                },
              ].map((item, idx) => (
                <div
                  key={item.label}
                  className={`flex items-start gap-4 p-4 sm:p-5 rounded-2xl border ${item.bg} backdrop-blur-sm transition-all hover:translate-x-1`}
                >
                  <div className="mt-1 flex items-center justify-center">
                    <span className={`size-2 rounded-full ${item.dot} shrink-0 ring-4 ring-white/5`} />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className={`text-sm sm:text-base font-bold ${item.color}`}>
                      When {item.label}.
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =================================================================
          SECTION 6: FAQ
          ================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Left */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">COMMON QUESTIONS</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0F172A] tracking-tight leading-tight mb-4">
                Frequently asked questions
              </h2>
              <p className="text-base text-slate-500 leading-relaxed mb-8">
                Still have questions? We're here to help.
              </p>
              <Link
                href="/circles"
                className="rounded-full border border-slate-300 hover:border-[#0062D2] text-slate-700 hover:text-[#0062D2] px-6 py-3 text-sm font-semibold transition-all inline-flex items-center gap-2"
              >
                Contact Us
                <ArrowRight className="size-4" />
              </Link>
            </div>

            {/* Right: FAQ Accordion */}
            <div className="lg:col-span-7">
              <div className="space-y-2">
                {FAQS.map((faq, i) => {
                  const isOpen = openFaq === i
                  return (
                    <div
                      key={i}
                      className={`rounded-2xl border transition-all ${isOpen ? 'border-[#DCEBFE] bg-[#F0F7FF]' : 'border-slate-200 bg-white'}`}
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="w-full flex items-center justify-between p-5 text-left gap-4 cursor-pointer"
                      >
                        <span className={`text-sm font-semibold leading-snug ${isOpen ? 'text-[#0062D2]' : 'text-[#0F172A]'}`}>
                          {faq.q}
                        </span>
                        <ChevronDown className={`size-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#0062D2]' : 'text-slate-400'}`} />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5">
                          <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =================================================================
          SECTION 7: FIND WHERE YOU BELONG - CLOSING HERO (Executive 2-Column Split)
          ================================================================= */}
      <section className="relative overflow-hidden py-20 sm:py-28 bg-[#061320] text-white">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-blue-600/15 via-rose-600/10 to-blue-600/15 blur-[140px] rounded-full pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Heading, Core Narrative & Actions */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">FIND WHERE YOU BELONG</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white tracking-tight leading-[1.12]">
                There is no single definition of <br className="hidden sm:block" />
                <span className="brand-gradient-text">the entrepreneur.</span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Every journey has its own rhythm, scale and inflection point. Your Circle should have room for the journey you are actually on.
              </p>

              <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2">
                <p className="text-sm font-semibold text-white">
                  And some have reached a point where they are ready to help someone else move forward.
                </p>
                <p className="text-base sm:text-lg text-amber-300 font-serif italic">
                  &ldquo;Your Circle should have room for your journey.&rdquo;
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <GalaxyButton
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="md"
                >
                  Download Unity App
                </GalaxyButton>
                <GalaxyButton
                  href="#find-form"
                  variant="transparent-light"
                  size="md"
                >
                  Submit Your Enquiry
                </GalaxyButton>
              </div>
            </div>

            {/* Right Column: 6 Distinct Entrepreneur Types */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[
                { title: 'Building companies', desc: 'Starting from the foundation up', dot: 'bg-blue-400' },
                { title: 'Expanding across markets', desc: 'Scaling into new cities & regions', dot: 'bg-rose-400' },
                { title: 'Preparing next stage', desc: 'Planning leadership or enterprise shift', dot: 'bg-amber-400' },
                { title: 'Rebuilding with resilience', desc: 'Pivoting and reimagining value', dot: 'bg-emerald-400' },
                { title: 'Continuously learning', desc: 'Gaining perspectives from veteran peers', dot: 'bg-purple-400' },
                { title: 'Looking for people who understand', desc: 'Seeking genuine, contextual trust', dot: 'bg-cyan-400' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/20 hover:bg-white/[0.07] transition-all space-y-1.5 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`size-2 rounded-full ${item.dot} shrink-0 ring-4 ring-white/5`} />
                    <h4 className="text-sm sm:text-base font-bold text-white">{item.title}</h4>
                  </div>
                  <p className="text-xs text-slate-400 font-normal leading-relaxed pl-4.5">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Final Brand manifesto footer */}
          <div className="pt-16 mt-16 border-t border-white/10">
            <div className="max-w-3xl mx-auto rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 p-8 sm:p-10 text-center space-y-4 shadow-xl backdrop-blur-md relative overflow-hidden">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-24 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15">
                <span className="text-[10px] uppercase tracking-[0.25em] text-sky-300 font-bold">PEERS GLOBAL MANIFESTO</span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-[26px] font-serif text-white font-semibold italic leading-snug">
                &ldquo;Peers are Partners in Business and Friends in Life.&rdquo;
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-xl mx-auto">
                You bring your experience. You bring your ambition. You bring your willingness to contribute. We help you find the room where those things can become meaningful relationships.
              </p>

              <div className="pt-3 border-t border-white/10 max-w-lg mx-auto">
                <p className="text-xs sm:text-sm text-sky-200/90 font-medium">
                  Because every entrepreneur belongs somewhere. And sometimes, finding the right Circle changes what becomes possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
