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
  },
  {
    num: '02',
    title: 'A Demonstrated Give-First Mindset',
    desc: 'You believe in contributing knowledge, perspective, and support before asking or calculating immediate transactional benefit.',
  },
  {
    num: '03',
    title: 'Commitment to the Peers Code & Culture',
    desc: 'You respect confidentiality, arrive present, listen with intent, and uphold the dignity and mutual respect of fellow Peers.',
  },
  {
    num: '04',
    title: 'Honest Representation of Your Business',
    desc: 'You represent your capabilities, stage, and offerings with complete truthfulness and ethical transparency.',
  },
  {
    num: '05',
    title: 'Active Participation in the Community',
    desc: 'You commit to being an active, engaged participant who shows up for your Peers rather than remaining a passive consumer.',
  },
]

// ─── Part Two: How Circle Approval Works (6 Steps) ────────────────────────
const CIRCLE_STEPS = [
  {
    num: '01',
    title: 'REQUEST',
    desc: 'You identify the Circle you would like to explore based on your industry or your purpose.',
  },
  {
    num: '02',
    title: 'REVIEW',
    desc: 'Your request is reviewed by the Circle Director and the Membership Experience Committee to evaluate mutual fit.',
  },
  {
    num: '03',
    title: 'VISIT',
    desc: 'You experience the Circle as a guest to sense the culture, conversations, and meeting rhythm firsthand.',
  },
  {
    num: '04',
    title: 'APPROVAL',
    desc: 'If the Circle confirms appropriate fit, your Circle membership is approved—marking the start of a deep relationship.',
  },
  {
    num: '05',
    title: 'EXPERIENCE FEE',
    desc: 'Once approved, the applicable Circle Experience Fee is completed (separate from platform membership).',
  },
  {
    num: '06',
    title: 'CATEGORY LOCKED',
    desc: 'Your business category is locked exclusively in that Circle, protecting room clarity and quality.',
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

      {/* ─── Breadcrumb ────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-slate-100 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <Link href="/" className="hover:text-[#0062D2] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/membership" className="hover:text-[#0062D2] transition-colors">
              Membership
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">Criteria &amp; Process</span>
          </nav>
        </div>
      </div>

      {/* =========================================================================
          SECTION 1: HERO — CRITERIA & PROCESS (TWO STEPS)
          ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAFCFF] via-[#FFFFFF] to-[#F8FAFC] border-b border-slate-200/80 pt-10 sm:pt-14 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] brand-gradient-text">
                  CRITERIA &amp; PROCESS
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[3.35rem] font-serif font-bold text-[#0B192C] tracking-tight leading-[1.12]">
                <span className="brand-gradient-text">Two steps. Joining PEERS GLOBAL, and joining a Circle.</span>
              </h1>

              <div className="space-y-3 text-[15px] sm:text-base text-slate-600 leading-relaxed">
                <p>
                  Joining PEERS GLOBAL and finding your Circle are related—but they are not the same decision.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-slate-800 font-semibold text-sm">
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <span className="text-[#0062D2] font-bold block mb-0.5">Step 1 · The Community</span>
                    Become part of the wider PEERS GLOBAL ecosystem.
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <span className="text-[#0062D2] font-bold block mb-0.5">Step 2 · Your Inner Board</span>
                    Find the Circle where your industry and contribution fit.
                  </div>
                </div>
                <p className="font-semibold text-slate-900 pt-1">
                  This separation matters: <span className="text-[#0062D2]">Membership gives you access to the community. Your Circle gives you a place within it.</span>
                </p>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/circles/find"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-sm font-bold hover:shadow-lg transition-all shadow-md uppercase tracking-wider"
                >
                  <span>Explore Circles</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white border border-slate-300 hover:border-slate-400 text-slate-800 text-sm font-bold hover:bg-slate-50 transition-all shadow-2xs uppercase tracking-wider"
                >
                  <Smartphone className="size-4 text-[#0062D2]" />
                  <span>Download Unity App</span>
                </a>
              </div>
            </div>

            {/* Right Card: The Philosophy of Fit */}
            <div className="lg:col-span-5">
              <div className="relative p-8 sm:p-10 rounded-3xl bg-[#040F24] text-white shadow-2xl overflow-hidden space-y-6">
                <div className="absolute top-0 right-0 size-64 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-5">
                  <span className="text-xs uppercase font-bold tracking-widest text-sky-300">
                    THE RIGHT FIT MATTERS
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                    Why Two Steps?
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    We are not trying to put every entrepreneur into the same Circle. We are trying to create the right environment for people to know one another, learn from one another and contribute to one another.
                  </p>

                  <div className="space-y-2 pt-2 text-xs sm:text-sm text-slate-200">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      • <strong>Membership</strong> opens the door.
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      • <strong>The right Circle</strong> helps you find your place.
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      • <strong>Your contribution</strong> makes that place meaningful.
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 text-center">
                    <p className="font-serif italic text-base text-amber-300">
                      &ldquo;PEERS GLOBAL is the community. Your Circle is your Inner Board.&rdquo;
                    </p>
                  </div>
                </div>
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-slate-900">
              <span className="brand-gradient-text">The Five Criteria for Joining PEERS GLOBAL</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              The first step is becoming part of the community. PEERS GLOBAL is built around relationships, contribution and participation—so joining is not designed simply as a transaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FIVE_CRITERIA.map((crit) => (
              <div
                key={crit.num}
                className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-[#0062D2]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="size-9 rounded-full bg-[#EFF6FF] text-[#0062D2] font-bold text-xs flex items-center justify-center mb-4">
                    {crit.num}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {crit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {crit.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* 6th Card: What We Do Not Require */}
            <div className="p-7 rounded-3xl bg-emerald-50/60 border border-emerald-200/80 shadow-2xs flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  ALIGNMENT OVER PERFECTION
                </span>
                <h3 className="font-serif text-lg font-bold text-slate-900 mt-2 mb-2">
                  What We Do Not Require
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  You do not need to arrive as a perfect entrepreneur. You do not need to have achieved everything already, and you do not need to know exactly where your journey will lead.
                </p>
              </div>
              <div className="pt-3 border-t border-emerald-200/80 text-xs font-bold text-emerald-900">
                Fit is about alignment—not perfection.
              </div>
            </div>
          </div>

          {/* Joining Process 3 Steps */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6">
            <h3 className="font-serif text-2xl font-bold text-slate-900">
              The Joining Process
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Once you decide to explore membership, the process is intentionally straightforward:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-[#FAFBFD] border border-slate-200 space-y-2">
                <div className="text-xs font-bold text-[#0062D2] uppercase">STEP 01</div>
                <h4 className="font-serif font-bold text-slate-900">Begin in Unity</h4>
                <p className="text-xs text-slate-600">
                  Start through the Unity App and provide the information required for your membership journey.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAFBFD] border border-slate-200 space-y-2">
                <div className="text-xs font-bold text-[#0062D2] uppercase">STEP 02</div>
                <h4 className="font-serif font-bold text-slate-900">Complete the Process</h4>
                <p className="text-xs text-slate-600">
                  Your information is reviewed as part of the PEERS GLOBAL membership process for basic alignment.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAFBFD] border border-slate-200 space-y-2">
                <div className="text-xs font-bold text-[#0062D2] uppercase">STEP 03</div>
                <h4 className="font-serif font-bold text-slate-900">Become a Member</h4>
                <p className="text-xs text-slate-600">
                  Once completed, you become part of the wider PEERS GLOBAL community (designed to happen same day).
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-slate-900">
              <span className="brand-gradient-text">How Circle Approval Works</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Membership and Circle belonging are separate. A Circle is a more specific relationship environment with its own category structure, people, and rhythm:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CIRCLE_STEPS.map((step) => (
              <div
                key={step.num}
                className="p-7 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="size-8 rounded-full bg-blue-50 text-[#0062D2] font-mono font-bold text-xs flex items-center justify-center">
                      {step.num}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      STEP {step.num}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200 text-center space-y-1.5 max-w-3xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
              ESTABLISHING THE RIGHT FIT
            </p>
            <p className="text-sm font-semibold text-slate-900">
              The right Circle is not the Circle you can enter fastest. It is the Circle where you can belong and contribute meaningfully.
            </p>
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
            <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-slate-900">
              <span className="brand-gradient-text">A Process Built Around Fit</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
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
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
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
          SECTION 5: CLOSING MANIFESTO BANNER
          ========================================================================= */}
      <section className="relative isolate overflow-hidden bg-[#040F24] py-16 sm:py-20 lg:py-24 text-white border-t border-slate-800">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(0,98,210,0.25),transparent_42%),radial-gradient(circle_at_82%_12%,rgba(56,189,248,0.18),transparent_36%),linear-gradient(115deg,#020817_0%,#071a3d_48%,#06132d_100%)]"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 flex flex-col items-start space-y-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  YOUR NEXT STEP
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-normal leading-[1.18] tracking-tight text-white">
                <span className="brand-gradient-text">Begin with understanding. Find your Circle with intention. Build your relationships with trust.</span>
              </h2>

              <p className="text-base sm:text-lg font-medium text-slate-200 max-w-2xl">
                You do not need to understand everything before you begin. Start with Unity, explore PEERS GLOBAL, understand the community, and discover where you belong.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
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
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/50 px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-white backdrop-blur-xs transition-all duration-200 hover:bg-white/10 hover:border-white active:scale-[0.98] uppercase cursor-pointer"
                >
                  <span>Download Unity App</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 text-right flex justify-end">
              <div
                className="text-white/95 text-3xl sm:text-5xl font-normal leading-tight select-none pointer-events-none drop-shadow-sm"
                style={{ fontFamily: 'var(--font-script, Georgia, serif)' }}
              >
                Intention &amp; <br />
                Lasting <br />
                <span className="text-[#7DD3FC]">Trust</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
