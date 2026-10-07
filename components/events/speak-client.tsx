'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
      
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-slate-200/80 bg-white/80 backdrop-blur-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-[#0062D2] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/events" className="hover:text-[#0062D2] transition-colors">
            Events
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">Speak</span>
        </div>
      </div>

      {/* ─── SECTION 1: HERO (SPEAK AT PEERS GLOBAL) ─────────────────────────── */}
      <section className="relative overflow-hidden bg-[#FAFBFD] text-slate-900 pt-5 sm:pt-6 pb-12 sm:pb-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Master Card Hero Box */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-white via-white/95 to-slate-50 border border-slate-200/90 shadow-lg min-h-[480px] lg:min-h-[520px] p-6 sm:p-10 lg:p-12 flex items-center">
            {/* Ambient Background Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
              
              {/* Left Column: Manifesto & Value */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold tracking-[0.22em] uppercase text-[#0062D2]">
                    CONTRIBUTING FROM THE STAGE
                  </span>
                </div>

                <div className="space-y-2.5">
                  <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight leading-tight">
                    Speak at Peers Global
                  </h1>
                  <p className="text-base sm:text-lg text-slate-700 font-semibold leading-relaxed">
                    Bring us something you have lived.
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  <p>
                    <strong className="text-slate-900 font-semibold">PEERS GLOBAL</strong> is a community of entrepreneurs.
                    Our most valuable conversations come from people who have actually built something, faced real adversity, learned hard lessons, and share what the journey taught them.
                  </p>

                  <div className="p-3.5 rounded-2xl bg-blue-50 text-xs font-medium text-[#0062D2] border border-blue-200/60 flex items-center gap-2.5">
                    <Sparkles className="size-4 shrink-0 text-[#0062D2]" />
                    <span>We are interested in experience before performance. If you have built it, we want to hear from you.</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <button
                    onClick={handleScrollToForm}
                    className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer uppercase tracking-wider"
                  >
                    <span>Apply to Speak</span>
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <a
                    href="#what-we-value"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-slate-700 font-bold text-xs sm:text-sm border border-slate-300 shadow-2xs hover:bg-slate-50 transition-all uppercase tracking-wider"
                  >
                    <span>Editorial Standards ↓</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Hero Visual Card */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 aspect-[4/3] group bg-slate-900">
                  <Image
                    src="/images/industry-director-speaker.jpg"
                    alt="Speaker delivering practitioner keynote at Peers Global summit"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                  
                  <div className="absolute top-4 right-4 text-right select-none pointer-events-none drop-shadow-md">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/70 border border-white/20 text-[10px] font-bold text-white tracking-widest uppercase backdrop-blur-md">
                      <span className="size-1.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                      PRACTITIONERS FIRST
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold uppercase tracking-wider text-sky-200 border border-white/20">
                      The Editorial Ethos
                    </span>
                    <p className="text-sm sm:text-base font-bold leading-snug">
                      &quot;Publishing what we decline is what makes the platform worth standing on.&quot;
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Floating Stats Bar */}
          <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 items-center">
            <div className="rounded-2xl bg-white border border-slate-200/90 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300">
              <div className="size-10 rounded-xl bg-blue-50 text-[#0062D2] border border-blue-100 flex items-center justify-center shrink-0 shadow-2xs">
                <Mic className="size-5" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-slate-900 leading-tight">100%</div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Practitioners</div>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200/90 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300">
              <div className="size-10 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center shrink-0 shadow-2xs">
                <ShieldCheck className="size-5" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-slate-900 leading-tight">Zero</div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Sales Pitches</div>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200/90 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300">
              <div className="size-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0 shadow-2xs">
                <Users className="size-5" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-slate-900 leading-tight">Real Peers</div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Community Stage</div>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200/90 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300">
              <div className="size-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center shrink-0 shadow-2xs">
                <Sparkles className="size-5" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-slate-900 leading-tight">6 Values</div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Editorial Core</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── SECTION 2: WE ARE LOOKING FOR PEOPLE WHO HAVE DONE THE THING ─── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-sm p-7 sm:p-10 lg:p-12 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                    <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                      THE PRACTITIONER STANDARD
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight leading-tight">
                    We are looking for people who have done the thing.
                  </h2>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  <p>• You do not need to call yourself a professional speaker.</p>
                  <p>• You do not need a rehearsed stage persona.</p>
                  <p>• You do not need a collection of generic motivational stories.</p>
                  <p className="font-semibold text-slate-900 pt-1">
                    What matters is that you have real operational experience worth sharing.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-blue-100 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="size-4 text-[#0062D2]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
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
                  <span className="text-[11px] font-mono text-[#0062D2] font-semibold bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
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
                    className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-3.5 hover:border-blue-300 hover:shadow-sm transition-all duration-200"
                  >
                    <span className="size-7 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center text-xs font-bold shrink-0 border border-blue-100 font-mono shadow-2xs">
                      {`0${idx + 1}`}
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800">
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
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                EDITORIAL CRITERIA
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight">
              What We Value
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              Clear principles guide every session and keynote hosted across PEERS GLOBAL.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {WHAT_WE_VALUE.map((item, idx) => (
              <div
                key={item.title}
                className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-slate-300 hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0062D2] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                      0{idx + 1}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#0062D2] transition-colors">
                      Pillar
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── SECTION 4: WHAT WE DO NOT BOOK ────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-rose-600">
                DELIBERATE SELECTIVITY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight">
              What We Do Not Book
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              We are deliberately selective about the kind of speaking experience we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
            {WHAT_WE_DO_NOT_BOOK.map((item) => (
              <div
                key={item.title}
                className="p-7 sm:p-8 rounded-3xl bg-white border border-rose-200/80 shadow-2xs hover:shadow-xl hover:border-rose-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-rose-700 px-3 py-1 rounded-full bg-rose-50 border border-rose-200">
                      {item.badge}
                    </span>
                    <div className="size-8 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center border border-rose-100">
                      <XCircle className="size-4" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                    {item.desc}
                  </p>
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
                  <div className="flex items-center gap-2 mb-2">
                    <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                    <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                      BEYOND CONVENTIONAL SLIDES
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-slate-900 tracking-tight leading-tight">
                    What could you share?
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 font-light leading-relaxed">
                    Think beyond a conventional presentation. Perhaps your story begins with:
                  </p>
                </div>

                <div className="space-y-2.5">
                  {STORY_STARTERS.map((starter) => (
                    <div
                      key={starter}
                      className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/80 text-xs sm:text-sm font-medium text-slate-800 italic hover:border-blue-200 hover:bg-blue-50/30 transition-colors"
                    >
                      {starter}
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
                  Your experience does not need to be perfect to be valuable. Sometimes the most useful lessons come from the parts of the journey that did not go according to plan.
                </div>
              </div>

              {/* Right: THE PEERS GLOBAL STAGE */}
              <div className="lg:col-span-5">
                <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white shadow-xl border border-slate-800 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="size-12 rounded-2xl bg-white/10 text-sky-300 flex items-center justify-center border border-white/20">
                      <Mic className="size-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-sky-300 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                      THE STAGE
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                      The Peers Global Stage
                    </h3>
                    <p className="text-xs sm:text-sm text-sky-200 font-medium">
                      The stage is not the destination. The conversation is.
                    </p>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-light border-l-2 border-sky-400/80 pl-3.5">
                    <p>• A good session does not end when the microphone is switched off.</p>
                    <p>• It continues when entrepreneurs discuss what they heard.</p>
                    <p>• It continues when someone asks a critical question afterwards.</p>
                    <p>• It continues when an experience helps another Peer make a better decision.</p>
                  </div>

                  <p className="text-xs text-slate-400 italic pt-1">
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
          <div className="bg-[#FAFBFD] rounded-3xl p-7 sm:p-10 border border-slate-200/90 shadow-sm space-y-6">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 text-[#0062D2]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                BEFORE YOU APPLY
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Ask yourself:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {BEFORE_YOU_APPLY_QUESTIONS.map((q, idx) => (
                <div
                  key={q}
                  className={`p-4 rounded-2xl border border-slate-200/80 bg-white flex items-start gap-3 shadow-2xs ${
                    idx === 4 ? 'sm:col-span-2 border-blue-200 bg-blue-50/50' : ''
                  }`}
                >
                  <span className="text-xs font-mono font-bold text-[#0062D2]">{`0${idx + 1}`}</span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800">
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
          <div className="bg-white rounded-3xl p-7 sm:p-10 border border-slate-200/90 shadow-xl space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                  SUBMIT YOUR PROPOSAL
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Tell Us Your Story
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2 font-light">
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
                      className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-[#0062D2] focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-slate-400"
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
                      className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-[#0062D2] focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-slate-400"
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
                      className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-[#0062D2] focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-slate-400"
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
                      className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-[#0062D2] focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-slate-400"
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
                      className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-[#0062D2] focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-slate-400 font-light"
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
                      className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-[#0062D2] focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-slate-400 font-light"
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
                      className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-[#0062D2] focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-slate-400 font-light"
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
                      className="w-full px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-[#0062D2] focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-slate-400 font-light"
                    />
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-9 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] hover:opacity-95 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-50 uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>{isSubmitting ? 'Submitting Proposal...' : 'Submit Speaking Proposal'}</span>
                    <Send className="size-4" />
                  </button>
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Manifesto */}
            <div className="lg:col-span-8 flex flex-col items-start space-y-5">
              <div className="inline-flex items-center gap-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-sky-400 to-rose-400 rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-sky-400">
                  ONE FINAL THOUGHT
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight">
                Bring us something you have lived.
              </h2>

              <div className="space-y-3.5 text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl">
                <p>
                  The most valuable speaker in the room is not necessarily the person with the biggest stage presence.
                </p>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <p className="text-sky-200 font-medium text-xs sm:text-sm">
                    It may be the entrepreneur sitting quietly with ten years of experience, one difficult lesson, and a story that could save someone else five years of mistakes.
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-slate-400">
                  Experience is meant to be shared. When one entrepreneur shares what they have learned, another entrepreneur gets a little further.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-3">
                <button
                  onClick={handleScrollToForm}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-xs sm:text-sm font-bold shadow-lg transition-all hover:scale-105 uppercase tracking-wider group cursor-pointer"
                >
                  <span>Apply to Speak</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/30 hover:border-white bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-md transition-all"
                >
                  <span>Open Unity App</span>
                </a>
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
                className="text-2xl sm:text-3xl text-amber-300 font-bold leading-tight"
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
