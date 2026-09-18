'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  Users,
  Building2,
  Globe2,
  TrendingUp,
  Target,
  Sparkles,
  Quote,
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
  Calendar,
  Award,
  Megaphone,
  Handshake,
  Network,
  Heart,
  MapPin,
  HelpCircle,
  Check,
  Send,
} from 'lucide-react'

// ─── Value Props Bar ──────────────────────────────────────────────────────
const VALUE_PROPS = [
  {
    icon: Users,
    title: 'Real People',
    sub: 'Real Conversations',
  },
  {
    icon: TrendingUp,
    title: 'Meaningful Impact',
    sub: 'Across Cities & Industries',
  },
  {
    icon: ShieldCheck,
    title: 'A Stronger Tomorrow',
    sub: 'Built by Entrepreneurs',
  },
]

// ─── Before You Apply Cards ───────────────────────────────────────────────
const BEFORE_APPLY_CARDS = [
  {
    icon: Users,
    title: 'You must be a Peer.',
    desc: 'Peers Global membership is required for every leadership role. If you have not joined yet, start there.',
  },
  {
    icon: Heart,
    title: 'Contribution comes first.',
    desc: 'Most leaders here were approached rather than applying. Your record in the community — what you have given, confirmed by the Peers you helped — is what makes you a candidate.',
  },
  {
    icon: Calendar,
    title: 'This is a real commitment.',
    desc: 'Every role requires recurring time, month after month. That commitment is discussed openly and honestly before any role is offered.',
  },
]

// ─── 5 Leadership Roles ───────────────────────────────────────────────────
const ROLES = [
  {
    id: 'founder',
    title: 'Circle Founder',
    icon: Users,
    desc: 'You build the room that does not exist yet. Convening the entrepreneurs of a city or an industry, setting the standard, and carrying the first year.',
    link: '/leadership/circle-founder',
    color: 'text-amber-600 bg-amber-50 border-amber-200',
  },
  {
    id: 'director',
    title: 'Circle Director',
    icon: Users,
    desc: 'You grow a Circle and everyone in it. Holding the culture, mentoring the Chairs, and leading a room of established entrepreneurs.',
    link: '/leadership/circle-director',
    color: 'text-blue-600 bg-blue-50 border-blue-200',
  },
  {
    id: 'industry',
    title: 'Industry Director',
    icon: TrendingUp,
    desc: 'You carry a sector across every Circle, city and country in the community.',
    link: '/leadership/industry-director',
    color: 'text-purple-600 bg-purple-50 border-purple-200',
  },
  {
    id: 'executive',
    title: 'Executive Director',
    icon: MapPin,
    desc: 'You carry territory — Area, District, State or Country — and build the entrepreneurial ecosystem inside it.',
    link: '/leadership/regional-ed',
    color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
  },
  {
    id: 'ambassador',
    title: 'Ambassador',
    icon: Megaphone,
    desc: 'You carry the name. Representing the community in rooms where it is not yet known, and bringing in the entrepreneurs who belong here.',
    link: '/leadership/ambassadors',
    color: 'text-orange-600 bg-orange-50 border-orange-200',
  },
]

// ─── What Happens Next (4 Steps) ──────────────────────────────────────────
const PROCESS_STEPS = [
  {
    num: '1',
    title: 'Your interest is reviewed.',
    desc: 'By the Executive Director for your territory, or the relevant leadership for the role.',
  },
  {
    num: '2',
    title: 'You have a conversation.',
    desc: 'An honest discussion about the role, what it requires, and whether it fits where your own business currently is.',
  },
  {
    num: '3',
    title: 'You complete induction.',
    desc: 'The model, the systems, the standards and the practical work of the role.',
  },
  {
    num: '4',
    title: 'You begin.',
    desc: 'Once aligned, you take on the role and start creating impact in your Circle, industry or territory.',
  },
]

// ─── What We Look For (5 Items) ───────────────────────────────────────────
const QUALITIES = [
  {
    icon: Award,
    title: 'A record of giving.',
    desc: 'Every leader here contributed long before they led.',
    color: 'text-amber-600 bg-amber-50',
  },
  {
    icon: Users,
    title: 'Standing in your market.',
    desc: 'Enough that entrepreneurs take your call and your recommendation.',
    color: 'text-blue-600 bg-blue-50',
  },
  {
    icon: ShieldCheck,
    title: 'The capacity to hold a standard.',
    desc: 'Including with people you like, and people more successful than you.',
    color: 'text-emerald-600 bg-emerald-50',
  },
  {
    icon: TrendingUp,
    title: 'Consistency.',
    desc: 'The same person in month nine as in month one.',
    color: 'text-purple-600 bg-purple-50',
  },
  {
    icon: Heart,
    title: 'A reason beyond yourself.',
    desc: 'Anyone taking a role primarily for the title should not take one. The community recognises the difference within a quarter.',
    color: 'text-rose-600 bg-rose-50',
  },
]

// ─── FAQs ─────────────────────────────────────────────────────────────────
const FAQS = [
  {
    question: 'Do I need to be a Peer first?',
    answer:
      'Yes. Peers Global membership is required for every leadership role. If you are not yet a member, start by downloading the Unity App.',
  },
  {
    question: 'Do I need leadership experience in a community before?',
    answer:
      'No. Running a business, leading a team or holding a committee role all count. What matters most is your record of contribution and your standing among entrepreneurs.',
  },
  {
    question: 'Can I hold a leadership role while running my business?',
    answer:
      'Yes. Every leader at Peers Global is a working business owner, and every role is designed around that reality.',
  },
  {
    question: 'What if I am not sure which role fits?',
    answer:
      'Select "Not sure yet" on the form. That conversation is exactly what our leadership team is here for.',
  },
  {
    question: 'How long does the process take?',
    answer:
      'It varies by role and territory. You will be contacted within 48 hours and given a clear timeline.',
  },
  {
    question: 'What if I am not selected?',
    answer:
      'You will be told directly and honestly why. In many cases it is timing rather than suitability, and you are welcome to revisit it later.',
  },
  {
    question: 'Is there any cost to holding a leadership role?',
    answer:
      'No. You maintain your Peers Global membership as any Peer does. The role itself carries no fee whatsoever.',
  },
]

export function ApplyToLeadClient() {
  // Form State
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [selectedRole, setSelectedRole] = useState<string>('Circle Founder')
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    countryCode: '+91',
    email: '',
    city: '',
    country: 'India',
    isPeer: 'Yes',
    // Business
    businessName: '',
    businessRole: '',
    industry: '',
    yearsInBusiness: '',
    // Experience
    beyondBusiness: '',
    whyRightPerson: '',
    anythingElse: '',
    // Circle Founder specific
    founderCityIndustry: '',
    founderConveneCount: '25–50',
  })
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleScrollToForm = () => {
    const el = document.getElementById('express-interest')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* ─── Breadcrumb ──────────────────────────────────────────────────── */}
      <div className="border-b border-slate-200/80 bg-white/70 backdrop-blur-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link
              href="/"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link
              href="/leadership"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Leadership
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">Apply to Lead</span>
          </nav>
        </div>
      </div>

      {/* ─── SECTION 1: HERO (WITH SEAMLESS HORIZONTAL FADE) ─────────────── */}
      <section className="relative pt-10 pb-16 lg:pt-14 lg:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6 z-10">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2] bg-blue-50/80 px-3 py-1 rounded-full border border-blue-200/60">
                  — LEADERSHIP —
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-950 tracking-tight leading-[1.1]">
                Apply to Lead
              </h1>

              {/* Subline */}
              <p className="text-2xl sm:text-3xl font-serif text-slate-800 font-medium leading-snug">
                Every leadership role at Peers Global begins with a conversation.
              </p>

              {/* Supporting line */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                Tell us which role interests you, and someone who holds one will
                speak with you.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0062D2] text-white font-medium text-sm shadow-md hover:bg-[#0052B4] hover:shadow-lg transition-all duration-200 group"
                >
                  <span>Download Unity App</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <button
                  onClick={handleScrollToForm}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-slate-800 font-medium text-sm border border-slate-300 shadow-sm hover:bg-slate-50 hover:border-slate-400 transition-all duration-200 cursor-pointer"
                >
                  <span>Express Interest ↓</span>
                </button>
              </div>

              {/* 3 Value Props Bar */}
              <div className="pt-4 grid grid-cols-3 gap-3 border-t border-slate-200/80">
                {VALUE_PROPS.map((prop) => {
                  const Icon = prop.icon
                  return (
                    <div key={prop.title} className="space-y-0.5">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                        <Icon className="w-4 h-4 text-[#0062D2]" />
                        <span>{prop.title}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 font-medium leading-tight">
                        {prop.sub}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right Hero Visual with Seamless Edge Fade */}
            <div className="lg:col-span-6 relative">
              <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl">
                {/* Background Image: Leader chairing meeting with white wall */}
                <Image
                  src="/images/circle-director-hero.jpg"
                  alt="Peers Global leadership summit with engaging entrepreneurs"
                  fill
                  className="object-cover object-top"
                  priority
                />

                {/* Soft gradient horizontal fade on the left edge */}
                <div className="absolute inset-y-0 left-0 w-28 sm:w-40 bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/60 to-transparent pointer-events-none z-10" />

                {/* Top/Bottom ambient shading */}
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#FDFBF7]/20 to-transparent pointer-events-none z-10" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/70 to-transparent pointer-events-none z-10" />

                {/* Wall Signage Banner Overlay on Top Right */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg border border-white/60 max-w-[210px] z-20 text-right">
                  <p className="text-sm font-bold text-slate-900 leading-tight">
                    Leaders
                  </p>
                  <p className="text-sm font-bold text-slate-900 leading-tight">
                    Build People.
                  </p>
                  <p className="text-xs font-semibold text-slate-600 leading-tight mt-0.5">
                    People Build
                  </p>
                  <p className="text-xs font-bold text-[#0062D2] leading-tight">
                    A Brighter Tomorrow.
                  </p>
                </div>

                {/* Cursive overlay on bottom right */}
                <div className="absolute bottom-6 right-6 text-right z-20 max-w-[260px]">
                  <p
                    className="text-lg sm:text-xl font-light italic leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
                    style={{ fontFamily: 'var(--font-script)' }}
                  >
                    More Leaders.
                    <br />
                    More Entrepreneurs.
                    <br />
                    A Stronger World.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: BEFORE YOU APPLY ─────────────────────────────────── */}
      <section className="py-14 sm:py-16 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
              — BEFORE YOU APPLY —
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-1">
              A few things to know
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
            {/* 3 Information Cards (8 cols) */}
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {BEFORE_APPLY_CARDS.map((card) => {
                const Icon = card.icon
                return (
                  <div
                    key={card.title}
                    className="p-5 rounded-2xl bg-slate-50/90 border border-slate-200/80 hover:border-blue-300 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center mb-3.5 border border-blue-100">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif font-bold text-slate-900 text-sm sm:text-base leading-snug mb-1.5">
                        {card.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Right Callout Banner (4 cols): Not a Peer yet? */}
            <div className="md:col-span-4 bg-gradient-to-br from-blue-50/90 to-sky-50/50 rounded-2xl p-6 border border-blue-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-serif font-bold text-xl text-slate-950 mb-1">
                  Not a Peer yet?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Join the community first to be eligible for a leadership role.
                </p>
              </div>

              <div className="pt-4">
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-full bg-[#0062D2] text-white font-medium text-xs shadow-md hover:bg-[#0052B4] transition-all"
                >
                  <span>Download Unity App</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: WHICH ROLE (5 CARDS SIDE BY SIDE) ────────────────── */}
      <section className="py-16 sm:py-20 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
              — WHICH ROLE —
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-1">
              Explore the leadership roles
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {ROLES.map((r) => {
              const Icon = r.icon
              return (
                <div
                  key={r.title}
                  className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 border transition-transform duration-300 group-hover:scale-110 ${r.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif font-bold text-slate-900 text-base leading-snug mb-2">
                      {r.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {r.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100">
                    <Link
                      href={r.link}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0062D2] hover:text-[#0052B4] transition-colors"
                    >
                      <span>Read the role</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: EXPRESS INTEREST (PROGRESSIVE MULTI-STEP FORM) ────── */}
      <section
        id="express-interest"
        className="py-16 sm:py-24 bg-white border-y border-slate-200/80 scroll-mt-12"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
                — EXPRESS INTEREST —
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-1">
                Tell us about yourself
              </h2>
            </div>

            {/* Step Progress Indicators */}
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
              {[
                { step: 1, label: 'About You' },
                { step: 2, label: 'Your Business' },
                { step: 3, label: 'Experience' },
              ].map((s) => (
                <button
                  key={s.step}
                  onClick={() => setCurrentStep(s.step)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                    currentStep === s.step
                      ? 'bg-[#0062D2] text-white font-bold shadow-xs'
                      : currentStep > s.step
                      ? 'bg-blue-50 text-[#0062D2] font-semibold'
                      : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[10px]">
                    {s.step}
                  </span>
                  <span className="hidden sm:inline">{s.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Form Container */}
          <div className="bg-[#FDFBF7] rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-lg shadow-slate-200/40">
            {submitted ? (
              <div className="py-12 text-center space-y-4 max-w-lg mx-auto">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900">
                  Interest Expressed Successfully
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Your interest
                  in the <strong>{selectedRole}</strong> role has been registered.
                  Someone who holds a leadership role will contact you within 48
                  hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setCurrentStep(1)
                    }}
                    className="px-6 py-2.5 rounded-full bg-white text-slate-800 text-xs font-semibold border border-slate-300 hover:bg-slate-50"
                  >
                    Submit another response
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Which Role Interests You? (Pills Selector) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                    Which role interests you? <span className="text-rose-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                    {[
                      'Circle Founder',
                      'Circle Director',
                      'Industry Director',
                      'Executive Director',
                      'Ambassador',
                      'Not sure yet',
                    ].map((role) => (
                      <button
                        type="button"
                        key={role}
                        onClick={() => setSelectedRole(role)}
                        className={`px-3 py-2.5 rounded-xl text-xs font-semibold text-center transition-all cursor-pointer border ${
                          selectedRole === role
                            ? 'bg-[#0062D2] text-white border-[#0062D2] shadow-sm'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-blue-50/40'
                        }`}
                      >
                        {role}
                      </button>
                    ))}
                  </div>
                </div>

                {/* STEP 1: ABOUT YOU */}
                {currentStep === 1 && (
                  <div className="space-y-4 pt-3 border-t border-slate-200">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Full name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Mobile number <span className="text-rose-500">*</span>
                        </label>
                        <div className="flex gap-2">
                          <select
                            name="countryCode"
                            value={formData.countryCode}
                            onChange={handleInputChange}
                            className="px-3 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                          >
                            <option value="+91">🇮🇳 +91</option>
                            <option value="+1">🇺🇸 +1</option>
                            <option value="+44">🇬🇧 +44</option>
                            <option value="+971">🇦🇪 +971</option>
                          </select>
                          <input
                            type="tel"
                            name="mobileNumber"
                            required
                            value={formData.mobileNumber}
                            onChange={handleInputChange}
                            placeholder="Enter mobile number"
                            className="flex-1 px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="sm:col-span-1">
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Email address <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                      </div>

                      <div className="sm:col-span-1">
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          City <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="Enter your city"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                      </div>

                      <div className="sm:col-span-1">
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Country <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="country"
                          required
                          value={formData.country}
                          onChange={handleInputChange}
                          placeholder="Enter country"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    {/* Are you already a Peer? */}
                    <div className="pt-2">
                      <label className="block text-xs font-semibold text-slate-700 mb-2">
                        Are you already a Peer?
                      </label>
                      <div className="flex items-center gap-6 text-sm">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="isPeer"
                            value="Yes"
                            checked={formData.isPeer === 'Yes'}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                          />
                          <span>Yes</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="isPeer"
                            value="Not yet"
                            checked={formData.isPeer === 'Not yet'}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                          />
                          <span>Not yet</span>
                        </label>
                      </div>
                    </div>

                    {/* Progressive Disclosure: Circle Founder specific block */}
                    {selectedRole === 'Circle Founder' && (
                      <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3 pt-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block">
                          If you are applying to found a Circle:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-amber-950 mb-1">
                              Which city or industry?
                            </label>
                            <input
                              type="text"
                              name="founderCityIndustry"
                              value={formData.founderCityIndustry}
                              onChange={handleInputChange}
                              placeholder="e.g. Pune / Real Estate"
                              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-amber-200 text-sm text-slate-900 focus:outline-none"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-amber-950 mb-1">
                              Roughly how many entrepreneurs could you convene?
                            </label>
                            <select
                              name="founderConveneCount"
                              value={formData.founderConveneCount}
                              onChange={handleInputChange}
                              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-amber-200 text-sm text-slate-900 focus:outline-none"
                            >
                              <option value="Fewer than 10">Fewer than 10</option>
                              <option value="10–25">10–25</option>
                              <option value="25–50">25–50</option>
                              <option value="More than 50">More than 50</option>
                            </select>
                          </div>
                        </div>
                        <p className="text-[11px] text-amber-900/80 italic">
                          * A Circle launches with a minimum of twenty-five entrepreneurs.
                        </p>
                      </div>
                    )}

                    <div className="flex justify-end pt-4">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0062D2] text-white text-xs font-semibold hover:bg-[#0052B4] transition-all cursor-pointer shadow-sm"
                      >
                        <span>Save & Continue</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: YOUR BUSINESS */}
                {currentStep === 2 && (
                  <div className="space-y-4 pt-3 border-t border-slate-200">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Business name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="businessName"
                          required
                          value={formData.businessName}
                          onChange={handleInputChange}
                          placeholder="Your company name"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Your role <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="businessRole"
                          required
                          value={formData.businessRole}
                          onChange={handleInputChange}
                          placeholder="e.g. Founder, CEO, Managing Director"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Industry <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="industry"
                          required
                          value={formData.industry}
                          onChange={handleInputChange}
                          placeholder="e.g. Manufacturing, SaaS, Healthcare"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Years in business <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="yearsInBusiness"
                          required
                          value={formData.yearsInBusiness}
                          onChange={handleInputChange}
                          placeholder="e.g. 5+ years"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between pt-4">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className="px-5 py-2.5 rounded-full bg-white text-slate-700 text-xs font-semibold border border-slate-200 hover:bg-slate-50 cursor-pointer"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setCurrentStep(3)}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0062D2] text-white text-xs font-semibold hover:bg-[#0052B4] transition-all cursor-pointer shadow-sm"
                      >
                        <span>Continue</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: LEADERSHIP EXPERIENCE */}
                {currentStep === 3 && (
                  <div className="space-y-4 pt-3 border-t border-slate-200">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Have you built or led something beyond your own business?{' '}
                        <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        name="beyondBusiness"
                        required
                        rows={3}
                        value={formData.beyondBusiness}
                        onChange={handleInputChange}
                        placeholder="A community, an association, a chapter, a committee, or a team outside your company"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        What makes you the right person for this role?{' '}
                        <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        name="whyRightPerson"
                        required
                        rows={3}
                        value={formData.whyRightPerson}
                        onChange={handleInputChange}
                        placeholder="Your standing, your motivation, and what you aim to build"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Anything else (optional)
                      </label>
                      <textarea
                        name="anythingElse"
                        rows={2}
                        value={formData.anythingElse}
                        onChange={handleInputChange}
                        placeholder="Any additional context or details you wish to share"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none"
                      />
                    </div>

                    <div className="flex justify-between items-center pt-4">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="px-5 py-2.5 rounded-full bg-white text-slate-700 text-xs font-semibold border border-slate-200 hover:bg-slate-50 cursor-pointer"
                      >
                        Back
                      </button>

                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#0062D2] text-white text-sm font-semibold hover:bg-[#0052B4] shadow-md hover:shadow-lg transition-all cursor-pointer"
                      >
                        <span>Submit Expression of Interest</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-center text-xs text-slate-500 pt-2">
                      Someone who holds a leadership role will contact you.
                    </p>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: WHAT HAPPENS NEXT ────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
              — WHAT HAPPENS NEXT —
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-1">
              From interest to impact
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.num}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="w-10 h-10 rounded-full bg-[#0062D2] text-white font-bold text-base flex items-center justify-center mb-4 shadow-sm">
                    {step.num}
                  </span>
                  <h3 className="font-serif font-bold text-slate-900 text-base leading-snug mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: WHAT WE LOOK FOR & COMMON QUESTIONS ──────────────── */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: What We Look For */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
                  — WHAT WE LOOK FOR —
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-1">
                  The qualities that matter
                </h2>
              </div>

              <div className="space-y-4">
                {QUALITIES.map((q) => {
                  const Icon = q.icon
                  return (
                    <div
                      key={q.title}
                      className="flex items-start gap-4 p-3.5 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-slate-200 ${q.color}`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-0.5">
                        <h3 className="text-sm font-bold text-slate-900">
                          {q.title}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {q.desc}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right Column: Frequently Asked Questions */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
                  — COMMON QUESTIONS —
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-1">
                  Frequently asked questions
                </h2>
              </div>

              <div className="divide-y divide-slate-200 border-y border-slate-200">
                {FAQS.map((faq, index) => {
                  const isOpen = openFaq === index
                  return (
                    <div key={faq.question} className="py-4">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="w-full flex items-center justify-between gap-4 text-left group focus:outline-none"
                      >
                        <span className="text-sm sm:text-base font-serif font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {faq.question}
                        </span>
                        <span
                          className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                            isOpen
                              ? 'bg-blue-50 text-blue-600'
                              : 'bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600'
                          }`}
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </span>
                      </button>

                      {isOpen && (
                        <div className="pt-2.5 pb-1 text-xs sm:text-sm text-slate-600 leading-relaxed pr-6">
                          {faq.answer}
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

      {/* ─── SECTION 7: CLOSING DARK MOUNTAIN BANNER ─────────────────────── */}
      <section className="relative py-20 sm:py-28 bg-slate-950 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-45 mix-blend-luminosity">
          <Image
            src="/images/membership-mountain-closing.jpg"
            alt="Climber looking at sunrise from mountain peak"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/90" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-8 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
                — LEAD A STRONGER TOMORROW —
              </span>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.1]">
                The community you want to belong to has to be built by someone.
              </h2>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Build Your Business. Build Your Relationships. Build Your Circle.
              </p>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0062D2] text-white font-medium text-sm shadow-xl hover:bg-[#0052B4] transition-all duration-200 group"
                >
                  <span>Download Unity App</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <button
                  onClick={handleScrollToForm}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm border border-white/25 backdrop-blur-sm transition-all duration-200 cursor-pointer"
                >
                  <span>Express Interest →</span>
                </button>
              </div>
            </div>

            {/* Right Cursive Script */}
            <div className="lg:col-span-4 text-center lg:text-right">
              <p
                className="text-3xl sm:text-4xl lg:text-5xl font-light italic leading-tight text-slate-200 drop-shadow-lg"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Ideas
                <br />
                People
                <br />
                Communities
                <br />
                A Brighter Tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
