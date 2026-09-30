'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ClosingCtaSection } from '@/components/site/ClosingCtaSection'
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
      <section className="relative overflow-hidden bg-[#FAFBFD] text-slate-900 pt-6 sm:pt-10 pb-12 sm:pb-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium tracking-wide mb-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <ChevronRight className="size-3.5 text-slate-400" />
            <Link href="/circles" className="hover:text-slate-900 transition-colors">Circles</Link>
            <ChevronRight className="size-3.5 text-slate-400" />
            <span className="text-[#0062D2] font-semibold">Find a Circle</span>
          </div>

          {/* Hero Banner */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[36px] bg-white border border-slate-200/80 shadow-sm min-h-[500px] lg:min-h-[540px] flex items-center">

            {/* Fade Video */}
            <div
              className="absolute top-0 right-0 bottom-0 w-full sm:w-[65%] lg:w-[60%] overflow-hidden pointer-events-none"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.5) 25%, black 50%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.5) 25%, black 50%)',
              }}
            >
              <video
                src="/videos/homepage-hero-bg.mp4"
                poster="/images/circles-hero-new.jpg"
                autoPlay loop muted playsInline
                className="size-full object-cover object-center"
              />
              <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white via-white/85 via-30% to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none" />

              {/* Script */}
              <div className="absolute top-6 sm:top-8 right-6 sm:right-8 z-20 text-right drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] pointer-events-none select-none">
                <p className="text-xl sm:text-2xl text-white/95 leading-tight" style={{ fontFamily: 'var(--font-script)' }}>Right People</p>
                <p className="text-xl sm:text-2xl text-white/95 leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>Bigger Opportunities</p>
                <p className="text-2xl sm:text-3xl text-amber-300 font-medium leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>A Stronger Tomorrow</p>
              </div>

              {/* Glass pill */}
              <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-20 pointer-events-none select-none">
                <div className="rounded-xl border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2.5 shadow-lg">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/70">REAL CONVERSATIONS</p>
                  <p className="text-xs font-bold tracking-wider text-white">FIND A STRONGER TOMORROW</p>
                </div>
              </div>
            </div>

            {/* Left Content */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-2xl flex flex-col items-start">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-0.5 w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">FIND YOUR CIRCLE</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-6xl lg:text-[64px] font-normal text-slate-900 tracking-tight leading-[1.08] mb-4">
                  Find Your Circle
                </h1>
                <p className="text-xl sm:text-2xl text-slate-900 font-bold leading-snug mb-4">
                  Every entrepreneur belongs somewhere. Let us help you find where.
                </p>
                <div className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 space-y-2 max-w-xl">
                  <p>You have explored the idea. You have understood the difference between an Industry Circle and a Purpose & Goal Circle.</p>
                  <p>You may already know exactly where you belong. Or perhaps you are still asking: <em className="text-slate-900 font-medium">Which Circle would be right for me?</em></p>
                  <p className="text-slate-900 font-medium">
                    That is where we begin. Finding your Circle should not feel like filling out an application to a system — it should feel like beginning a conversation with a community that wants to understand who you are, what you are building, and where you want to go.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 mb-10">
                  <a
                    href="https://unity.peersglobal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white px-7 py-3.5 text-sm font-semibold shadow-lg shadow-blue-600/25 transition-all hover:scale-105 inline-flex items-center gap-2"
                  >
                    <Smartphone className="size-4" />
                    <span>Download Unity App</span>
                  </a>
                  <a
                    href="#find-form"
                    className="rounded-full border border-slate-300 hover:border-slate-400 bg-white/90 text-slate-800 px-7 py-3.5 text-sm font-semibold transition-all hover:scale-105 shadow-2xs inline-flex items-center gap-2"
                  >
                    Submit Your Enquiry
                    <ChevronDown className="size-4" />
                  </a>
                </div>

                {/* Stat Band */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-lg">
                  {[
                    { icon: Target, value: '10+', label: 'Purpose Circles' },
                    { icon: MapPin, value: '45+', label: 'Cities' },
                    { icon: Users, value: '120+', label: 'Seats currently open' },
                  ].map((s) => {
                    const Icon = s.icon
                    return (
                      <div key={s.label} className="flex items-center gap-2.5 p-3 sm:p-3.5 rounded-2xl bg-[#F0F7FF] border border-[#DCEBFE]">
                        <div className="size-9 rounded-full bg-white flex items-center justify-center text-[#0062D2] shadow-2xs shrink-0">
                          <Icon className="size-4" />
                        </div>
                        <div>
                          <div className="font-bold text-base sm:text-lg text-[#0F172A] leading-none">{s.value}</div>
                          <div className="text-[10px] text-slate-500 font-medium mt-1 leading-tight">{s.label}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>

              </div>
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
            <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
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
                <span className="h-0.5 w-5 bg-[#0062D2]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#60A5FA]">01 — START WITH UNITY</span>
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
                <span className="h-0.5 w-5 bg-emerald-500" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">02 — TELL US ABOUT YOURSELF</span>
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
            <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
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
                        <button
                          type="submit"
                          disabled={submitting}
                          className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] disabled:opacity-70 text-white px-8 py-3 text-sm font-bold shadow-lg shadow-blue-600/20 transition-all inline-flex items-center gap-2"
                        >
                          {submitting ? (
                            <>
                              <Loader2 className="size-4 animate-spin" />
                              Submitting...
                            </>
                          ) : (
                            <>
                              Submit Enquiry
                              <ArrowRight className="size-4" />
                            </>
                          )}
                        </button>
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
          SECTION 4: WHAT HAPPENS NEXT
          ================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center gap-2 mb-2">
            <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
            <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">WHAT HAPPENS NEXT</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight mb-3">
            What Happens Next?
          </h2>
          <div className="text-base text-slate-600 leading-relaxed mb-12 max-w-3xl space-y-2">
            <p>Once we understand your enquiry, the conversation can move forward from there.</p>
            <p className="font-medium text-slate-900">
              The objective is not simply to place you somewhere. It is to understand where you could belong — and where your presence could contribute.
            </p>
            <p className="text-sm text-slate-500">
              Your industry may suggest one direction. Your purpose may suggest another. Your experience, ambition and relationships may reveal something else. The right Circle should make sense not only for what you do, but also for what you are trying to build.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHAT_HAPPENS.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={item.step} className="relative">
                  {/* Connector line */}
                  {i < WHAT_HAPPENS.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[calc(100%_-_16px)] w-full h-px border-t-2 border-dashed border-slate-200 z-0" />
                  )}
                  <div className="relative z-10 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="size-16 rounded-2xl bg-[#EFF6FF] text-[#0062D2] flex items-center justify-center shrink-0">
                        <Icon className="size-7" />
                      </div>
                      <span className="text-3xl font-bold text-slate-100">{item.step}</span>
                    </div>
                    <h3 className="text-base font-bold text-[#0F172A] mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{item.desc}</p>
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
            <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
            <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">NO PRESSURE</span>
            <span className="h-[2px] w-6 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
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
            <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
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
              <p className="text-sm text-slate-800 font-semibold mb-6">
                Explore. Understand. Connect. Then decide.
              </p>

              <div className="flex flex-wrap gap-3">
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
          SECTION 5.5: A CIRCLE IS MORE THAN A CATEGORY
          ================================================================= */}
      <section className="py-16 sm:py-24 bg-[#0F172A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[2px] w-6 bg-[#60A5FA]" />
            <span className="text-xs font-bold tracking-[0.22em] uppercase text-[#60A5FA]">THE PHILOSOPHY</span>
            <span className="h-[2px] w-6 bg-[#60A5FA]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-tight mb-6">
            A Circle is More Than a Category
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            <p>You may enter a Circle because it matches your industry.</p>
            <p>You may discover another because it matches your ambition.</p>
            <p className="text-white font-semibold text-lg sm:text-xl py-2">
              But belonging is created by something deeper.
            </p>
            <p>It is created when people begin to understand one another.</p>
            <p className="text-emerald-400 font-medium">When experience is shared.</p>
            <p className="text-blue-400 font-medium">When introductions become relationships.</p>
            <p className="text-purple-400 font-medium">When relationships become collaboration.</p>
            <p className="text-amber-400 font-medium">When collaboration creates contribution.</p>
            <p className="text-rose-400 font-semibold text-lg">And when contribution creates impact.</p>
            <p className="pt-4 text-sm uppercase tracking-widest text-slate-400 font-bold">
              That is why finding your Circle is only the beginning.
            </p>
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
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
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
          SECTION 7: FIND WHERE YOU BELONG - CLOSING HERO
          ================================================================= */}
      <section className="relative overflow-hidden py-20 sm:py-28 bg-[#061320] text-white">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-600/15 via-rose-600/10 to-blue-600/15 blur-[140px] rounded-full pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
            <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">FIND WHERE YOU BELONG</span>
            <span className="h-[2px] w-6 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-tight mb-8">
            There is no single definition of the entrepreneur.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto text-left mb-10">
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.04] border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
              <span>Some are building companies.</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.04] border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
              <span>Some are expanding across markets.</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.04] border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
              <span>Some are preparing for their next stage.</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.04] border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
              <span>Some are rebuilding.</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.04] border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
              <span>Some are learning.</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.04] border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
              <span>Some are looking for people who understand.</span>
            </div>
          </div>

          <p className="text-lg sm:text-xl font-medium text-white mb-8">
            And some have reached a point where they are ready to help someone else move forward.
          </p>

          <p className="font-serif text-2xl sm:text-3xl text-amber-300 italic mb-10">
            &ldquo;Your Circle should have room for your journey.&rdquo;
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <a
              href="https://unity.peersglobal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:from-[#1E40AF] hover:to-[#BE123C] text-white px-8 py-4 text-base font-semibold shadow-xl shadow-blue-600/30 transition-all hover:scale-105 inline-flex items-center gap-2.5"
            >
              <Smartphone className="size-5" />
              <span>Download Unity App</span>
            </a>
            <a
              href="#find-form"
              className="rounded-full bg-white hover:bg-slate-100 text-[#0F172A] px-8 py-4 text-base font-semibold transition-all hover:scale-105 shadow-lg inline-flex items-center gap-2"
            >
              <span>Submit Your Enquiry</span>
              <ArrowRight className="size-4" />
            </a>
          </div>

          {/* Final Brand manifesto footer */}
          <div className="pt-10 border-t border-white/10 max-w-2xl mx-auto text-center space-y-3">
            <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">PEERS GLOBAL</p>
            <p className="text-lg sm:text-xl font-serif text-white font-semibold italic">
              &ldquo;Peers are Partners in Business and Friends in Life.&rdquo;
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              You bring your experience. You bring your ambition. You bring your willingness to contribute. We help you find the room where those things can become meaningful relationships.
            </p>
            <p className="text-sm text-slate-300 font-medium pt-2">
              Because every entrepreneur belongs somewhere. And sometimes, finding the right Circle changes what becomes possible.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
