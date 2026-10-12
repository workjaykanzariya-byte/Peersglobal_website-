'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import '@/app/sections.css'
import { GalaxyButton } from '@/components/ui/galaxy-button'
import {
  Mic,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Sparkles,
  Send,
  ShieldCheck,
  Quote,
  MessageSquare,
  Building2,
  Users,
  Compass,
  Check,
  HelpCircle,
  AlertTriangle,
  Lightbulb,
} from 'lucide-react'

// ─── 6 What We Value Pillars ──────────────────────────────────────────────────
const WHAT_WE_VALUE = [
  {
    title: 'REAL EXPERIENCE',
    desc: 'Tell us what actually happened — not what sounds impressive.',
    color: 'border-blue-200 bg-blue-50/70 text-[#0062D2]',
  },
  {
    title: 'PRACTICAL LEARNING',
    desc: 'Give people something they can think about, apply or explore.',
    color: 'border-purple-200 bg-purple-50/70 text-purple-700',
  },
  {
    title: 'HONESTY',
    desc: 'Share the difficult parts as well as the successes.',
    color: 'border-emerald-200 bg-emerald-50/70 text-emerald-700',
  },
  {
    title: 'GENEROSITY',
    desc: 'A PEERS GLOBAL stage is a place to contribute experience, not simply display achievement.',
    color: 'border-amber-200 bg-amber-50/70 text-amber-700',
  },
  {
    title: 'RELEVANCE',
    desc: 'The best sessions begin with a real question entrepreneurs are facing.',
    color: 'border-rose-200 bg-rose-50/70 text-rose-700',
  },
  {
    title: 'CONVERSATION',
    desc: 'We value thoughtful interaction over a performance from the stage.',
    color: 'border-cyan-200 bg-cyan-50/70 text-cyan-700',
  },
]

// ─── What We Do Not Book (Selective Standard) ─────────────────────────────────
const WHAT_WE_DO_NOT_BOOK = [
  {
    title: 'Motivational speakers',
    desc: 'If the primary purpose is motivation without meaningful entrepreneurial experience behind it, this is not the right platform.',
    badge: 'No Motivational Hype',
  },
  {
    title: 'Sales disguised as learning',
    desc: 'If a session is primarily a route to selling a product, service or opportunity, it does not belong on the PEERS GLOBAL stage.',
    badge: 'Zero Pitches',
  },
  {
    title: 'Expertise without experience',
    desc: 'We value people who have done the thing they are teaching. Studying a subject can create knowledge. Building something creates experience. Our community is particularly interested in the latter.',
    badge: 'Practitioners Only',
  },
]

// ─── What Could You Share (Prompts) ──────────────────────────────────────────
const STORY_STARTERS = [
  '“We tried this, and it did not work.”',
  '“This was the decision that changed our business.”',
  '“Nobody told us this before we entered the market.”',
  '“Here is what we learned after making this mistake.”',
  '“This is what we have discovered by doing the work.”',
]

// ─── Before You Apply Checklist ───────────────────────────────────────────────
const BEFORE_YOU_APPLY_QUESTIONS = [
  'Have I actually done what I want to speak about?',
  'What did the experience teach me?',
  'What would another entrepreneur genuinely gain from hearing it?',
  'Can I share the difficult parts as honestly as the successful ones?',
  'Am I coming to contribute — or to sell?',
]

export function SpeakClient() {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    whatYouBuilt: '',
    whatYouLearned: '',
    whatChanged: '',
    keyTakeaway: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    if (name === 'phone') {
      setFormData((prev) => ({ ...prev, phone: value.replace(/\D/g, '').slice(0, 10) }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      const formTop = document.getElementById('proposal-form')
      if (formTop) {
        formTop.scrollIntoView({ behavior: 'smooth' })
      }
    }, 800)
  }

  const handleScrollToForm = () => {
    const el = document.getElementById('proposal-form')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-[#FBFCFE] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Global Gradient Definition for Brand Icons */}
      <svg width="0" height="0" className="absolute pointer-events-none" style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="brandIconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="50%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#E11D48" />
          </linearGradient>
          <linearGradient id="brandIconGradDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="50%" stopColor="#818CF8" />
            <stop offset="100%" stopColor="#FB7185" />
          </linearGradient>
        </defs>
      </svg>

      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-slate-800 bg-[#040F24] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-400 font-medium">
          <Link href="/" className="hover:text-[#38BDF8] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
          <Link href="/events" className="hover:text-[#38BDF8] transition-colors">
            Events
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
          <span className="text-white font-semibold">Speak</span>
        </div>
      </div>

      {/* ─── SECTION 1: HERO (SPEAK AT PEERS GLOBAL) ─────────────────────────── */}
      <section className="fd-hero">
        <video
          className="fd-hero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
          src="/videos/homepage-hero-bg.mp4"
        />
        <div className="fd-hero__scrim" aria-hidden="true"></div>

        <div className="fd-hero__inner">
          <div className="fd-hero__wrapper !max-w-3xl">
            <div className="fd-hero__stack">
              <div className="fd-hero__group">
                {/* Gradient Pill Label */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-900/60 via-indigo-900/50 to-rose-900/60 backdrop-blur-md border border-white/20 shadow-lg">
                  <span className="inline-block size-2 rounded-full bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] animate-pulse" />
                  <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] uppercase bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent">
                    CONTRIBUTING FROM THE STAGE
                  </span>
                </div>

                {/* Main Headline with Gradient Brand Accent */}
                <h1 className="fd-hero__headline !text-3xl sm:!text-5xl lg:!text-[54px] !leading-[1.12] font-bold tracking-tight text-white">
                  Speak at{' '}
                  <span className="bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent">
                    Peers Global
                  </span>
                </h1>

                {/* Subtitle with Gradient Underline / Tone */}
                <p className="fd-hero__sub !text-base sm:!text-xl font-medium leading-relaxed bg-gradient-to-r from-white via-slate-100 to-sky-200 bg-clip-text text-transparent">
                  Bring us something you have lived.
                </p>

                {/* Quote with Gradient Left Border */}
                <div className="relative pl-4 py-1 border-l-4 border-transparent [border-image:linear-gradient(to_bottom,#38BDF8,#818CF8,#FB7185)_1]">
                  <p className="text-sm sm:text-base text-white/95 font-medium italic">
                    &quot;Publishing what we decline is what makes the platform worth standing on.&quot;
                  </p>
                </div>

                {/* Body Text */}
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal max-w-2xl pt-1">
                  <strong className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#FB7185] font-bold">
                    PEERS GLOBAL
                  </strong>{' '}
                  is a community of entrepreneurs. Our most valuable conversations come from people who have actually built something, faced real adversity, learned hard lessons, and share what the journey taught them. We are interested in experience before performance. If you have built it, we want to hear from you.
                </p>
              </div>

              {/* Buttons matching Home Page Hero button style */}
              <div className="fd-hero__cta flex flex-wrap items-center gap-3.5">
                <GalaxyButton
                  onClick={handleScrollToForm}
                  size="lg"
                  className="text-xs sm:text-sm font-semibold"
                >
                  APPLY TO SPEAK
                </GalaxyButton>
                <GalaxyButton
                  href="#what-we-value"
                  variant="transparent"
                  size="lg"
                  className="text-xs sm:text-sm font-semibold"
                >
                  Editorial Standards ↓
                </GalaxyButton>
              </div>

              {/* Counter / Stats band with Multi-Stop Gradient Icons & Text */}
              <div className="w-full pt-5 border-t border-white/20">
                <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs sm:text-sm text-slate-300">
                  <div className="inline-flex items-center gap-2 font-medium text-white group">
                    <Mic className="size-4 text-[#38BDF8] group-hover:scale-110 transition-transform" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] font-extrabold text-sm sm:text-base">
                      100%
                    </span>
                    <span className="text-slate-200">Practitioners</span>
                  </div>

                  <span className="text-white/40 hidden sm:inline">·</span>

                  <div className="inline-flex items-center gap-2 font-medium text-white group">
                    <ShieldCheck className="size-4 text-[#818CF8] group-hover:scale-110 transition-transform" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] font-extrabold text-sm sm:text-base">
                      Zero
                    </span>
                    <span className="text-slate-200">Sales Pitches</span>
                  </div>

                  <span className="text-white/40 hidden sm:inline">·</span>

                  <div className="inline-flex items-center gap-2 font-medium text-white group">
                    <Users className="size-4 text-[#FB7185] group-hover:scale-110 transition-transform" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] font-extrabold text-sm sm:text-base">
                      Real Peers
                    </span>
                    <span className="text-slate-200">Community Stage</span>
                  </div>

                  <span className="text-white/40 hidden sm:inline">·</span>

                  <div className="inline-flex items-center gap-2 font-medium text-white group">
                    <Sparkles className="size-4 text-amber-400 group-hover:scale-110 transition-transform" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] font-extrabold text-sm sm:text-base">
                      6 Values
                    </span>
                    <span className="text-slate-200">Editorial Core</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: WE ARE LOOKING FOR PEOPLE WHO HAVE DONE THE THING ─── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative rounded-3xl bg-gradient-to-br from-[#FAFBFD] via-white to-blue-50/20 border border-slate-200/90 shadow-sm p-7 sm:p-10 lg:p-12 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="mb-2">
                    <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent inline-block">
                      THE PRACTITIONER STANDARD
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight leading-tight">
                    We are looking for people who have <span className="bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">done the thing</span>.
                  </h2>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  <p>• You do not need to call yourself a professional speaker.</p>
                  <p>• You do not need a rehearsed stage persona.</p>
                  <p>• You do not need a collection of generic motivational stories.</p>
                  <p className="font-semibold text-slate-900 pt-1">
                    What matters is that you have real operational experience worth sharing.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-blue-100 shadow-2xs space-y-2 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                  <div className="flex items-center gap-2">
                    <Sparkles className="size-4 text-[#1D4ED8]" />
                    <span className="text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">
                      EXPERIENCE BEFORE PERFORMANCE
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    A PEERS GLOBAL session leaves entrepreneurs with actionable wisdom: <strong className="text-slate-900 font-semibold">A decision to consider, a mistake to avoid, or a lesson earned through doing.</strong>
                  </p>
                </div>
              </div>

              {/* Right Column: 6 Lived Experiences */}
              <div className="lg:col-span-6 space-y-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Perhaps you have:
                  </span>
                  <span className="text-[11px] font-mono text-white font-semibold bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] px-3 py-0.5 rounded-full shadow-2xs">
                    6 Pathways
                  </span>
                </div>
                {[
                  'Built a business from zero through scale',
                  'Entered a market nobody around you understood',
                  'Made a decision that changed the direction of your company',
                  'Experienced a failure — and had to rebuild',
                  'Solved a problem that others are still facing',
                  'Discovered something through years of doing the work',
                ].map((item, idx) => (
                  <div
                    key={item}
                    className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-3.5 hover:border-blue-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
                  >
                    <span className="size-7 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 text-[#1D4ED8] group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:text-white flex items-center justify-center text-xs font-bold shrink-0 border border-blue-100 font-mono shadow-2xs transition-all duration-200">
                      {`0${idx + 1}`}
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-slate-900">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ─── SECTION 3: WHAT WE VALUE (6 PILLARS) ──────────────────────────── */}
      <section id="what-we-value" className="py-16 sm:py-20 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-3">
            <div>
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent inline-block">
                EDITORIAL CRITERIA
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight">
              What We <span className="bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">Value</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              Clear principles guide every session and keynote hosted across PEERS GLOBAL.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {WHAT_WE_VALUE.map((item, idx) => (
              <div
                key={item.title}
                className="animated-glow-card group !rounded-3xl cursor-pointer"
                tabIndex={0}
                role="article"
              >
                <svg className="animated-border-svg !rounded-3xl" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id={`valueCardGrad-${idx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#1D4ED8" />
                      <stop offset="100%" stopColor="#E11D48" />
                    </linearGradient>
                  </defs>
                  <path
                    className={`animated-border-path ${idx % 3 === 1 ? 'animated-border-path-2' : idx % 3 === 2 ? 'animated-border-path-3' : ''}`}
                    style={{ stroke: `url(#valueCardGrad-${idx})` }}
                    d="M 0.8 6 Q 0.8 0.8 6 0.8 L 94 0.8 Q 99.2 0.8 99.2 6 L 99.2 94 Q 99.2 99.2 94 99.2 L 6 99.2 Q 0.8 99.2 0.8 94 Z"
                  />
                </svg>

                <div className="relative z-10 flex flex-col justify-between p-7 sm:p-8 bg-white !rounded-[calc(1.5rem-1.5px)] h-full">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#1D4ED8] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100 group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:text-white transition-all shadow-2xs">
                        0{idx + 1}
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-rose-600 transition-colors">
                        Pillar
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── SECTION 4: WHAT WE DO NOT BOOK ────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-3">
            <div>
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent inline-block">
                DELIBERATE SELECTIVITY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight">
              What We <span className="bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">Do Not Book</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              We are deliberately selective about the kind of speaking experience we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
            {WHAT_WE_DO_NOT_BOOK.map((item, idx) => (
              <div
                key={item.title}
                className="animated-glow-card group !rounded-3xl cursor-pointer shadow-sm hover:shadow-xl transition-all"
                tabIndex={0}
                role="article"
              >
                <svg className="animated-border-svg !rounded-3xl" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id={`notBookCardGrad-${idx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#1D4ED8" />
                      <stop offset="100%" stopColor="#E11D48" />
                    </linearGradient>
                  </defs>
                  <path
                    className={`animated-border-path ${idx === 1 ? 'animated-border-path-2' : idx === 2 ? 'animated-border-path-3' : ''}`}
                    style={{ stroke: `url(#notBookCardGrad-${idx})` }}
                    d="M 0.8 6 Q 0.8 0.8 6 0.8 L 94 0.8 Q 99.2 0.8 99.2 6 L 99.2 94 Q 99.2 99.2 94 99.2 L 6 99.2 Q 0.8 99.2 0.8 94 Z"
                  />
                </svg>

                <div className="relative z-10 flex flex-col justify-between p-7 sm:p-8 bg-white border border-slate-200/80 !rounded-[calc(1.5rem-1.5px)] h-full space-y-6 shadow-2xs">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-extrabold tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white border border-transparent shadow-xs transition-all duration-300 group-hover:!bg-white group-hover:!border-blue-200 group-hover:!text-transparent group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:shadow-2xs">
                        {item.badge}
                      </span>
                      <div className="size-8 rounded-full bg-blue-50/80 flex items-center justify-center border border-blue-100 group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] transition-all shadow-2xs group-hover:scale-105">
                        <svg className="size-4" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <defs>
                            <linearGradient id={`xCircleGrad-${idx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#1D4ED8" />
                              <stop offset="100%" stopColor="#E11D48" />
                            </linearGradient>
                          </defs>
                          <circle cx="12" cy="12" r="10" stroke={`url(#xCircleGrad-${idx})`} className="group-hover:stroke-white transition-colors" />
                          <path d="m15 9-6 6" stroke={`url(#xCircleGrad-${idx})`} className="group-hover:stroke-white transition-colors" />
                          <path d="m9 9 6 6" stroke={`url(#xCircleGrad-${idx})`} className="group-hover:stroke-white transition-colors" />
                        </svg>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-800 font-normal leading-relaxed transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── SECTION 5: WHAT COULD YOU SHARE? & THE STAGE ─────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative rounded-3xl bg-white border border-slate-200/90 shadow-lg p-7 sm:p-10 lg:p-12 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left: What Could You Share? */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="mb-2">
                    <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent inline-block">
                      BEYOND CONVENTIONAL SLIDES
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-slate-900 tracking-tight leading-tight">
                    What could you <span className="bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">share?</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal leading-relaxed">
                    Think beyond a conventional presentation. Perhaps your story begins with:
                  </p>
                </div>

                <div className="space-y-2.5">
                  {STORY_STARTERS.map((starter) => (
                    <div
                      key={starter}
                      className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/80 text-xs sm:text-sm font-medium text-slate-800 italic hover:border-blue-300 hover:bg-blue-50/30 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-3"
                    >
                      <span className="size-2 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] shrink-0" />
                      <span>{starter}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50/80 to-purple-50/80 border border-blue-100 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  Your experience does not need to be perfect to be valuable. Sometimes the most useful lessons come from the parts of the journey that did not go according to plan.
                </div>
              </div>

              {/* Right: THE PEERS GLOBAL STAGE */}
              <div className="lg:col-span-5">
                <div
                  className="p-7 sm:p-9 rounded-3xl text-white shadow-2xl border border-white/10 space-y-6 relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgb(6, 17, 44) 0%, rgb(19, 7, 31) 50%, rgb(38, 5, 19) 100%)',
                  }}
                >
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-r from-[#2e0854]/40 to-[#4c0519]/30 rounded-full blur-2xl pointer-events-none" />
                  <div className="flex items-center justify-between relative z-10">
                    <div className="size-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-rose-500/20 text-sky-300 flex items-center justify-center border border-white/20 shadow-xs">
                      <Mic className="size-6 text-[#38BDF8]" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent bg-white/10 px-3 py-1 rounded-full border border-white/15">
                      THE STAGE
                    </span>
                  </div>

                  <div className="space-y-2 relative z-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                      The Peers Global Stage
                    </h3>
                    <p className="text-xs sm:text-sm bg-gradient-to-r from-[#38BDF8] to-[#FB7185] bg-clip-text text-transparent font-medium">
                      The stage is not the destination. The conversation is.
                    </p>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-light border-l-2 border-[#38BDF8] pl-3.5 relative z-10">
                    <p>• A good session does not end when the microphone is switched off.</p>
                    <p>• It continues when entrepreneurs discuss what they heard.</p>
                    <p>• It continues when someone asks a critical question afterwards.</p>
                    <p>• It continues when an experience helps another Peer make a better decision.</p>
                  </div>

                  <p className="text-xs text-slate-400 italic pt-1 relative z-10">
                    That is the kind of speaking experience we cultivate.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ─── SECTION 6: PROPOSAL APPLICATION FORM (TELL US YOUR STORY) ────── */}
      <section id="proposal-form" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 scroll-mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Before You Apply Card */}
          <div className="bg-gradient-to-br from-[#FAFBFD] to-blue-50/20 rounded-3xl p-7 sm:p-10 border border-slate-200/90 shadow-sm space-y-6">
            <div>
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent inline-block">
                BEFORE YOU APPLY
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Ask yourself:
            </h3>

            <div className="space-y-3 pt-1">
              {BEFORE_YOU_APPLY_QUESTIONS.map((q, idx) => (
                <div
                  key={q}
                  className="p-4 sm:p-4.5 rounded-2xl border border-slate-200/90 bg-white flex items-center gap-3.5 sm:gap-4 shadow-2xs hover:border-blue-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
                >
                  <span className="size-8 rounded-xl bg-blue-50/80 border border-blue-100/90 text-xs font-mono font-bold flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] shrink-0 group-hover:from-blue-600 group-hover:to-rose-600 group-hover:scale-105 transition-all">
                    {`0${idx + 1}`}
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-slate-950 transition-colors">
                    {q}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-500 font-light pt-1">
              If your answers are clear, we would like to hear from you.
            </p>
          </div>

          {/* Proposal Form Card */}
          <div className="bg-white rounded-3xl p-7 sm:p-10 border border-slate-200/90 shadow-xl space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
            <div>
              <div className="mb-2">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent inline-block">
                  SUBMIT YOUR PROPOSAL
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Tell Us Your <span className="bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">Story</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2 font-normal">
                You do not have to arrive with a finished presentation. Start with the experience. The PEERS GLOBAL team can understand the context from there.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4 max-w-md mx-auto">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900">
                  Speaking Proposal Received
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Our editorial curation committee will review your proposal and get in touch within 3 to 5 business days.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-white text-slate-800 text-xs font-semibold border border-slate-300 hover:bg-slate-50 cursor-pointer"
                  >
                    Submit another topic
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Vikram Malhotra"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                      Company / Business Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      required
                      value={formData.businessName}
                      onChange={handleInputChange}
                      placeholder="e.g. Acme Industries"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                      Contact Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="vikram@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                      Contact Phone <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      inputMode="numeric"
                      maxLength={10}
                      pattern="[0-9]{10}"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="9876543210"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-2 border-t border-slate-100">
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                      1. Tell us what you built <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      name="whatYouBuilt"
                      required
                      rows={3}
                      value={formData.whatYouBuilt}
                      onChange={handleInputChange}
                      placeholder="What company, product, transition, or operational breakthrough did you build?"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-slate-400 font-normal"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                      2. Tell us what you learned <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      name="whatYouLearned"
                      required
                      rows={3}
                      value={formData.whatYouLearned}
                      onChange={handleInputChange}
                      placeholder="What was the critical insight, hard lesson, or operational realization?"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-slate-400 font-normal"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                      3. Tell us what changed <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      name="whatChanged"
                      required
                      rows={2}
                      value={formData.whatChanged}
                      onChange={handleInputChange}
                      placeholder="How did this decision, failure or discovery alter your company's trajectory?"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-slate-400 font-normal"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                      4. Tell us what another entrepreneur might take away from it <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      name="keyTakeaway"
                      required
                      rows={3}
                      value={formData.keyTakeaway}
                      onChange={handleInputChange}
                      placeholder="What specific, actionable takeaway can founders implement immediately?"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-slate-400 font-normal"
                    />
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <GalaxyButton
                    type="submit"
                    disabled={isSubmitting}
                    className="text-xs sm:text-sm font-semibold uppercase tracking-wider"
                  >
                    <span>{isSubmitting ? 'Submitting Proposal...' : 'Submit Speaking Proposal'}</span>
                  </GalaxyButton>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* ─── SECTION 7: ONE FINAL THOUGHT & CLOSING HERO ───────────────────── */}
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white py-20 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(56,189,248,0.18),transparent_50%),radial-gradient(circle_at_82%_12%,rgba(251,113,133,0.15),transparent_50%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-sky-600/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-rose-500/15 blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Manifesto */}
            <div className="lg:col-span-8 flex flex-col items-start space-y-5">
              <div>
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent inline-block">
                  ONE FINAL THOUGHT
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight">
                Bring us something you have <span className="bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent">lived</span>.
              </h2>

              <div className="space-y-3.5 text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-2xl">
                <p>
                  The most valuable speaker in the room is not necessarily the person with the biggest stage presence.
                </p>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <p className="bg-gradient-to-r from-sky-200 via-indigo-200 to-rose-200 bg-clip-text text-transparent font-medium text-xs sm:text-sm">
                    It may be the entrepreneur sitting quietly with ten years of experience, one difficult lesson, and a story that could save someone else five years of mistakes.
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-slate-400">
                  Experience is meant to be shared. When one entrepreneur shares what they have learned, another entrepreneur gets a little further.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-3">
                <GalaxyButton
                  onClick={handleScrollToForm}
                  size="lg"
                  className="text-xs sm:text-sm font-semibold uppercase tracking-wider"
                >
                  Apply to Speak
                </GalaxyButton>

                <GalaxyButton
                  variant="transparent"
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  className="text-xs sm:text-sm font-semibold uppercase tracking-wider"
                >
                  Open Unity App
                </GalaxyButton>
              </div>
            </div>

            {/* Right Cursive Script */}
            <div className="lg:col-span-4 text-left lg:text-right select-none pointer-events-none drop-shadow-lg space-y-1">
              <p
                className="text-xl sm:text-2xl text-white/70 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Experience.
              </p>
              <p
                className="text-xl sm:text-2xl text-white/80 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Honesty.
              </p>
              <p
                className="text-xl sm:text-2xl text-white leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Generosity.
              </p>
              <p
                className="text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] font-bold leading-tight"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Shared Wisdom.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
