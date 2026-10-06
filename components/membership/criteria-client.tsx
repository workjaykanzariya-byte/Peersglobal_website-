'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  ChevronRight,
  Smartphone,
  Check,
  ShieldCheck,
  UserCheck,
  Calendar,
  Clock,
  Sparkles,
  Lock,
  Layers,
  Heart,
  Users2,
  HelpCircle,
  Plus,
  Minus,
  CheckCircle2,
  FileText,
} from 'lucide-react'

// ─── Part One: The Five Criteria ──────────────────────────────────────────
const FIVE_CRITERIA = [
  {
    num: '01',
    title: 'You Own or Lead an Active Business',
    desc: 'You are a founder, co-founder, partner, director, or managing head who carries operational responsibility and decision-making weight.',
    icon: Users2,
    color: 'text-[#0062D2] bg-blue-50 border-blue-100',
  },
  {
    num: '02',
    title: 'A Demonstrated Give-First Mindset',
    desc: 'You believe in contributing knowledge, perspective, and support before asking or calculating immediate transactional benefit.',
    icon: Heart,
    color: 'text-rose-600 bg-rose-50 border-rose-100',
  },
  {
    num: '03',
    title: 'Commitment to the Peers Code & Culture',
    desc: 'You respect confidentiality, arrive present, listen with intent, and uphold the dignity and mutual respect of fellow Peers.',
    icon: ShieldCheck,
    color: 'text-amber-600 bg-amber-50 border-amber-100',
  },
  {
    num: '04',
    title: 'Honest Representation of Your Business',
    desc: 'You represent your capabilities, stage, and offerings with complete truthfulness and ethical transparency.',
    icon: Sparkles,
    color: 'text-purple-600 bg-purple-50 border-purple-100',
  },
  {
    num: '05',
    title: 'Active Participation in the Community',
    desc: 'You commit to being an active, engaged participant who shows up for your Peers rather than remaining a passive consumer.',
    icon: CheckCircle2,
    color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
  },
]

// ─── Part Two: How Circle Approval Works (6 Steps) ────────────────────────
const CIRCLE_STEPS = [
  {
    num: '01',
    title: 'Request',
    action: 'Select Your Target Circle',
    desc: 'You identify the Circle you would like to explore based on your industry or your entrepreneurial purpose.',
    icon: FileText,
    color: 'text-[#0062D2] bg-blue-50 border-blue-100',
  },
  {
    num: '02',
    title: 'Review',
    action: 'Mutual Fit Evaluation',
    desc: 'Your request is reviewed by the Circle Director and the Membership Experience Committee for alignment.',
    icon: UserCheck,
    color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
  },
  {
    num: '03',
    title: 'Visit',
    action: 'Firsthand Guest Experience',
    desc: 'You experience the Circle as a guest to sense the room culture, conversations, and meeting rhythm firsthand.',
    icon: Calendar,
    color: 'text-purple-600 bg-purple-50 border-purple-100',
  },
  {
    num: '04',
    title: 'Approval',
    action: 'Committee Confirmation',
    desc: 'If the Circle confirms appropriate fit, your Circle membership is approved—marking the start of deep relationships.',
    icon: CheckCircle2,
    color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
  },
  {
    num: '05',
    title: 'Experience Fee',
    action: 'Annual Meeting Infrastructure',
    desc: 'Once approved, the applicable Circle Experience Fee is completed (separate from platform membership).',
    icon: Sparkles,
    color: 'text-amber-600 bg-amber-50 border-amber-100',
  },
  {
    num: '06',
    title: 'Category Locked',
    action: 'Exclusive Seat Protection',
    desc: 'Your business category is locked exclusively in that Circle, protecting room clarity, quality, and trust.',
    icon: Lock,
    color: 'text-rose-600 bg-rose-50 border-rose-100',
  },
]

// ─── FAQ Questions ────────────────────────────────────────────────────────
const FAQS = [
  {
    q: 'How long does Circle approval take?',
    a: 'The Circle approval process is usually completed within a week. The exact timing depends on the Circle review schedule and your guest visit. We would rather take the time to establish the right fit than place someone into a Circle simply to complete a transaction.',
  },
  {
    q: 'Can you join more than one Circle?',
    a: 'Yes. PEERS GLOBAL allows participation in more than one Circle, subject to the applicable Circle structure and approval process. This is valuable when your entrepreneurial journey crosses multiple industries, purposes or areas of ambition.',
  },
  {
    q: 'What if your category is already taken?',
    a: 'If your preferred category is already occupied, the next conversation is not "Can we make an exception?" but "Where can you contribute most meaningfully within the community?" You may be guided toward another appropriate Circle or another pathway within PEERS GLOBAL.',
  },
  {
    q: 'Why are there two distinct steps?',
    a: 'Because PEERS GLOBAL is bigger than any one Circle. PEERS GLOBAL is the community (giving you wide access across cities and countries), while your Circle is your Inner Board (giving you an intimate, focused environment for deep trust).',
  },
]

export function CriteriaClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index))
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0F172A] selection:bg-[#0062D2] selection:text-white font-sans antialiased">

      {/* =========================================================================
          SECTION 1: HERO — CRITERIA & PROCESS (Full Page Dark Video Hero)
          ========================================================================= */}
      <section className="relative overflow-hidden bg-[#040F24] text-white pt-6 sm:pt-8 pb-12 sm:pb-16 border-b border-slate-800">
        {/* Full Bleed Background Video */}
        <div className="absolute inset-0 size-full overflow-hidden pointer-events-none">
          <video
            src="/videos/homepage-hero-bg.mp4"
            poster="/images/membership-hero-peers.jpg"
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
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <Link href="/membership" className="hover:text-white transition-colors">
              Membership
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-white font-semibold">Criteria &amp; Process</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full min-h-[440px] lg:min-h-[480px]">
            {/* Left Column Content */}
            <div className="lg:col-span-12 max-w-3xl space-y-6">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur-sm uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
                <span>CRITERIA &amp; PROCESS</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white">
                  Two steps. Joining PEERS GLOBAL, and{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-rose-400">
                    joining a Circle
                  </span>
                </h1>
                <p className="text-base sm:text-lg font-medium text-slate-200 leading-snug">
                  Membership gives you access to the community. Your Circle gives you a permanent seat within it.
                </p>
              </div>

              {/* Sub-text / Steps Overview */}
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  Joining PEERS GLOBAL and finding your Circle are related—but they are distinct, intentional decisions.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-white text-xs">
                  <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
                    <span className="text-sky-400 font-bold block mb-1 uppercase tracking-wider text-[10px]">Step 1 · The Community</span>
                    Become part of the wider ecosystem across cities.
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
                    <span className="text-rose-400 font-bold block mb-1 uppercase tracking-wider text-[10px]">Step 2 · Your Inner Board</span>
                    Find the Circle where your industry fits.
                  </div>
                </div>
              </div>

              {/* CTA Row */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/circles/find"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-600 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:opacity-95 transition-all duration-300 group cursor-pointer"
                >
                  <span>Explore Circles</span>
                  <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/25 bg-white/10 hover:bg-white/20 text-white font-medium text-sm backdrop-blur-sm transition-all duration-300"
                >
                  <Smartphone className="size-4 text-sky-400" />
                  <span>Download Unity App</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: PART ONE — JOINING PEERS GLOBAL (THE FIVE CRITERIA)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-left max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                PART ONE · COMMUNITY ACCESS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              The Five Criteria for Joining PEERS GLOBAL
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              The first step is becoming part of the community. PEERS GLOBAL is built around relationships, contribution and participation—so joining is not designed simply as a transaction.
            </p>
          </div>

          {/* 6 Criteria Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FIVE_CRITERIA.map((crit) => {
              const Icon = crit.icon
              return (
                <div
                  key={crit.num}
                  className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-blue-200 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`size-12 rounded-2xl border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 ${crit.color}`}>
                        <Icon className="size-5.5" />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-slate-100 text-slate-600 border border-slate-200/80">
                        CRITERION {crit.num}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0062D2] transition-colors leading-snug">
                        {crit.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mt-2">
                        {crit.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-400 font-medium">
                    <span className="size-1.5 rounded-full bg-[#0062D2]" />
                    <span>Core Community Standard</span>
                  </div>
                </div>
              )
            })}

            {/* 6th Card: What We Do Not Require */}
            <div className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-emerald-50/80 to-white border border-emerald-200/80 shadow-2xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="size-12 rounded-2xl bg-emerald-100/70 border border-emerald-200 text-emerald-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <Check className="size-6" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200">
                    ALIGNMENT
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                    What We Do Not Require
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light mt-2">
                    You do not need to arrive as a perfect entrepreneur. You do not need to have achieved everything already, and you do not need to know exactly where your journey will lead.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-emerald-200/60 text-xs font-bold text-emerald-800 flex items-center gap-2">
                <span>✦</span>
                <span>Fit is about alignment — not perfection.</span>
              </div>
            </div>
          </div>

          {/* Joining Process 3 Steps (Modern Stepper Cards) */}
          <div className="p-7 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-2xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-100 pb-5">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-50 border border-blue-200/60 text-[11px] font-bold uppercase tracking-wider text-[#0062D2] mb-1.5">
                  Process
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  The Joining Process
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-light max-w-sm">
                Once you decide to explore membership, the onboarding process is intentionally straightforward:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group relative p-6 rounded-2xl bg-[#FAFBFD] border border-slate-200/90 hover:border-blue-300 hover:bg-white hover:shadow-xs transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <span className="size-8 rounded-xl bg-blue-50 text-[#0062D2] font-mono font-bold text-xs flex items-center justify-center border border-blue-100">
                    01
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Step One</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-[#0062D2] transition-colors">
                  Begin in Unity
                </h4>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Start through the Unity App and provide the foundational details required for your membership profile.
                </p>
              </div>

              <div className="group relative p-6 rounded-2xl bg-[#FAFBFD] border border-slate-200/90 hover:border-blue-300 hover:bg-white hover:shadow-xs transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <span className="size-8 rounded-xl bg-blue-50 text-[#0062D2] font-mono font-bold text-xs flex items-center justify-center border border-blue-100">
                    02
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Step Two</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-[#0062D2] transition-colors">
                  Complete the Review
                </h4>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Your profile is reviewed as part of the PEERS GLOBAL membership alignment process for business ownership.
                </p>
              </div>

              <div className="group relative p-6 rounded-2xl bg-[#FAFBFD] border border-slate-200/90 hover:border-emerald-300 hover:bg-white hover:shadow-xs transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <span className="size-8 rounded-xl bg-emerald-50 text-emerald-700 font-mono font-bold text-xs flex items-center justify-center border border-emerald-100">
                    03
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">Step Three</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  Welcome as Member
                </h4>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Once confirmed, you immediately gain active platform access to the global directory and network (same day).
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: PART TWO — JOINING A CIRCLE (HOW CIRCLE APPROVAL WORKS)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-left max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                PART TWO · INNER BOARD
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              How Circle Approval Works
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
              Membership and Circle belonging are separate. A Circle is a more specific relationship environment with its own category structure, people, and rhythm:
            </p>
          </div>

          {/* 6 Step Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CIRCLE_STEPS.map((step) => {
              const Icon = step.icon
              return (
                <div
                  key={step.num}
                  className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-blue-200 hover:-translate-y-1 hover:bg-white transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`size-12 rounded-2xl border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 ${step.color}`}>
                        <Icon className="size-5.5" />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-white border border-slate-200/80 text-slate-600 group-hover:border-blue-200 group-hover:text-[#0062D2] transition-colors">
                        STEP {step.num}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                        {step.action}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0062D2] transition-colors leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mt-2">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                    <span className="text-slate-400">Phase 0{step.num} of 06</span>
                    <span className="inline-flex items-center gap-1 text-[#0062D2] opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                      Details &rarr;
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom Highlight Callout Banner */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-50/80 via-white to-rose-50/80 border border-blue-200/60 shadow-2xs flex items-center justify-center text-center text-xs sm:text-sm font-medium text-slate-800">
            <span>
              <strong className="text-slate-900 font-bold uppercase tracking-wider text-xs block sm:inline mr-2 text-[#0062D2]">Establishing The Right Fit:</strong>
              The right Circle is not the Circle you enter fastest — it is the Circle where you belong, contribute, and build lasting trust.
            </span>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: FAQS & CLARITY (ACCORDION)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                COMMON QUESTIONS
              </span>
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              A Process Built Around Fit
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto font-light">
              We want the process to answer two questions honestly: Does PEERS GLOBAL feel right for you? And is this Circle the right environment for you to contribute and grow?
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 bg-white ${
                    isOpen ? 'border-[#0062D2] shadow-sm' : 'border-slate-200/80 hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 flex items-center justify-between text-left gap-4"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-semibold text-slate-900">
                      {faq.q}
                    </span>
                    <div
                      className={`size-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? 'bg-[#0062D2] text-white' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 font-light">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: CLOSING MANIFESTO BANNER (Homepage Styling)
          ========================================================================= */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#061226] via-[#0A1A38] to-[#040D1E] py-16 sm:py-20 lg:py-24 text-white border-t border-slate-800">
        {/* Ambient background lighting & glows matching Homepage */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,98,210,0.3),transparent),radial-gradient(ellipse_60%_50%_at_90%_100%,rgba(225,29,72,0.15),transparent)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[360px] bg-gradient-to-r from-blue-600/15 via-indigo-600/10 to-rose-600/15 blur-[120px] rounded-full"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-8 flex flex-col items-start space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
                <span className="h-[2px] w-4 bg-gradient-to-r from-blue-400 to-rose-400 rounded-full" />
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-sky-300">
                  Your Next Step
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-bold leading-[1.18] tracking-tight text-white">
                Begin with understanding. Find your Circle with intention. Build your relationships with trust.
              </h2>

              <p className="text-base sm:text-lg font-light text-slate-200 max-w-2xl leading-relaxed">
                You do not need to understand everything before you begin. Start with Unity, explore PEERS GLOBAL, understand the community, and discover where you belong.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link
                  href="/circles/find"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-white shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] uppercase cursor-pointer"
                >
                  <span>Find Your Circle</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/40 px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-white backdrop-blur-xs transition-all duration-200 hover:bg-white/10 hover:border-white active:scale-[0.98] uppercase cursor-pointer"
                >
                  <span>Download Unity App</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 text-right flex justify-end">
              <div
                className="text-white/95 text-3xl sm:text-5xl font-normal leading-tight select-none pointer-events-none drop-shadow-md"
                style={{ fontFamily: 'var(--font-script, Georgia, serif)' }}
              >
                Intention &amp; <br />
                Lasting <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-200 font-semibold">Trust</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
