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
    setFormData((prev) => ({ ...prev, [name]: value }))
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
      <section className="relative pt-16 sm:pt-24 pb-16 sm:pb-24 bg-gradient-to-b from-[#F0F5FD] via-white to-[#FBFCFE] border-b border-slate-200/80 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">
                  CONTRIBUTING FROM THE STAGE
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight leading-[1.08] text-slate-950">
                <span className="brand-gradient-text block">SPEAK AT PEERS GLOBAL</span>
                <span className="text-2xl sm:text-3xl lg:text-4xl text-slate-800 font-medium mt-2 block font-sans">
                  Bring us something you have lived.
                </span>
              </h1>

              <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-light">
                <p>
                  <strong>PEERS GLOBAL</strong> is a community of entrepreneurs.
                  That means our most valuable conversations come from people who have actually built something, faced something, learned something and can share what the experience taught them.
                </p>
                <p className="text-slate-900 font-medium border-l-2 border-[#0062D2] pl-3 italic">
                  We are interested in experience before performance. If you have built the thing you are speaking about, we want to hear from you.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={handleScrollToForm}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white font-medium text-xs sm:text-sm shadow-md hover:shadow-lg hover:opacity-95 transition-all duration-200 cursor-pointer group"
                >
                  <span>Apply to Speak</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href="#what-we-value"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white text-slate-800 font-medium text-xs sm:text-sm border border-slate-300 shadow-xs hover:bg-slate-50 transition-all duration-200"
                >
                  <span>Our Editorial Standards ↓</span>
                </a>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-white p-3">
                <div className="relative h-[380px] sm:h-[440px] rounded-2xl overflow-hidden bg-slate-900">
                  <Image
                    src="/images/industry-director-speaker.jpg"
                    alt="Speaker delivering practitioner keynote at Peers Global summit"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold uppercase tracking-wider text-sky-200 border border-white/20">
                      Practitioners First
                    </span>
                    <p className="font-serif text-lg sm:text-xl font-bold leading-snug">
                      "Publishing what we decline is what makes the platform worth standing on."
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 2: WE ARE LOOKING FOR PEOPLE WHO HAVE DONE THE THING ─── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    THE PRACTITIONER STANDARD
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-1 leading-tight">
                  WE ARE LOOKING FOR PEOPLE WHO HAVE DONE THE THING
                </h2>
              </div>

              <div className="space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                <p>• You do not need to call yourself a speaker.</p>
                <p>• You do not need a stage persona.</p>
                <p>• You do not need a collection of motivational stories.</p>
                <p className="font-medium text-slate-900 pt-1">
                  What matters is that you have experience worth sharing.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-900 block">
                  EXPERIENCE BEFORE PERFORMANCE
                </span>
                <p className="text-xs sm:text-sm text-blue-950/80 leading-relaxed">
                  A PEERS GLOBAL session should leave entrepreneurs with something they can take back into their own world: <strong>A decision to consider. A mistake to avoid. A question to ask. A possibility to explore. A lesson earned through experience.</strong>
                </p>
                <p className="text-xs text-blue-900 font-semibold italic pt-1">
                  We therefore look for people who can speak from what they have actually built, experienced or learned through doing. The story behind the lesson matters.
                </p>
              </div>
            </div>

            {/* Right Column: 6 Lived Experiences */}
            <div className="lg:col-span-6 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                Perhaps you have:
              </span>
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
                  className="p-4 rounded-2xl bg-[#FBFCFE] border border-slate-200/90 shadow-2xs flex items-center gap-3 hover:border-blue-300 transition-colors"
                >
                  <span className="w-7 h-7 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center text-xs font-bold shrink-0 border border-blue-100">
                    {`0${idx + 1}`}
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-slate-800">
                    {item}
                  </p>
                </div>
              ))}
              <p className="text-xs text-slate-500 italic pt-1 text-right">
                That experience can become learning for another entrepreneur.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 3: WHAT WE VALUE (6 PILLARS) ──────────────────────────── */}
      <section id="what-we-value" className="py-16 sm:py-24 bg-[#FBFCFE] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 mb-1">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                EDITORIAL CRITERIA
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-950 mt-1">
              WHAT WE VALUE
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2 font-light">
              Clear principles guide every session and keynote hosted across PEERS GLOBAL.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHAT_WE_VALUE.map((item) => (
              <div
                key={item.title}
                className={`p-8 rounded-3xl border bg-white shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4 ${item.color}`}
              >
                <div>
                  <h3 className="text-xl font-serif font-bold text-slate-950 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── SECTION 4: WHAT WE DO NOT BOOK ────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 mb-1">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-rose-600">
                DELIBERATE SELECTIVITY
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-950 mt-1">
              WHAT WE DO NOT BOOK
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2 font-light">
              We are deliberately selective about the kind of speaking experience we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WHAT_WE_DO_NOT_BOOK.map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-3xl bg-rose-50/50 border border-rose-200/80 shadow-sm flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-rose-700 px-3 py-1 rounded-full bg-rose-100/80 border border-rose-200">
                      {item.badge}
                    </span>
                    <XCircle className="w-5 h-5 text-rose-500" />
                  </div>

                  <h3 className="text-xl font-serif font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── SECTION 5: WHAT COULD YOU SHARE? & THE STAGE ─────────────────── */}
      <section className="py-16 sm:py-24 bg-[#FBFCFE] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: What Could You Share? */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    BEYOND CONVENTIONAL SLIDES
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-1">
                  WHAT COULD YOU SHARE?
                </h2>
                <p className="text-sm sm:text-base text-slate-600 mt-2 font-light">
                  Think beyond a conventional presentation. Perhaps your story begins with:
                </p>
              </div>

              <div className="space-y-2.5">
                {STORY_STARTERS.map((starter) => (
                  <div
                    key={starter}
                    className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs text-xs sm:text-sm font-medium text-slate-800 italic"
                  >
                    {starter}
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light pt-1">
                Your experience does not need to be perfect to be valuable. Sometimes the most useful lessons come from the parts of the journey that did not go according to plan.
              </p>
            </div>

            {/* Right: THE PEERS GLOBAL STAGE */}
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#040E24] via-[#061836] to-[#0A2558] text-white shadow-xl space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-sky-300 flex items-center justify-center border border-white/20">
                  <Mic className="w-6 h-6" />
                </div>

                <h3 className="text-2xl font-serif font-bold text-white leading-snug">
                  THE PEERS GLOBAL STAGE
                </h3>

                <p className="text-sm text-slate-200 font-medium">
                  The stage is not the destination. The conversation is.
                </p>

                <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-light border-l-2 border-sky-400 pl-3.5">
                  <p>• A good session does not end when the microphone is switched off.</p>
                  <p>• It continues when entrepreneurs discuss what they heard.</p>
                  <p>• It continues when someone asks a question afterwards.</p>
                  <p>• It continues when an introduction is made.</p>
                  <p>• It continues when an experience shared by one Peer helps another Peer make a better decision.</p>
                </div>

                <p className="text-xs text-sky-200 italic pt-2">
                  That is the kind of speaking experience we want to create.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 6: PROPOSAL APPLICATION FORM (TELL US YOUR STORY) ────── */}
      <section id="proposal-form" className="py-16 sm:py-24 bg-white border-b border-slate-200/80 scroll-mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Before You Apply Card */}
          <div className="bg-[#FBFCFE] rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm mb-10 space-y-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#0062D2]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                BEFORE YOU APPLY
              </span>
            </div>

            <h3 className="text-2xl font-serif font-bold text-slate-950">
              Ask yourself:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {BEFORE_YOU_APPLY_QUESTIONS.map((q, idx) => (
                <div
                  key={q}
                  className={`p-3.5 rounded-xl border border-slate-200 bg-white flex items-start gap-3 shadow-2xs ${
                    idx === 4 ? 'sm:col-span-2 border-blue-200 bg-blue-50/50' : ''
                  }`}
                >
                  <span className="text-xs font-bold text-[#0062D2]">{`0${idx + 1}`}</span>
                  <p className="text-xs sm:text-sm font-medium text-slate-800">
                    {q}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-600 font-medium pt-2">
              If your answers are clear, we would like to hear from you.
            </p>
          </div>

          {/* Proposal Form */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-lg shadow-slate-200/50">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                SUBMIT YOUR PROPOSAL
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 mt-1">
                TELL US YOUR STORY
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
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Vikram Malhotra"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Company / Business Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      required
                      value={formData.businessName}
                      onChange={handleInputChange}
                      placeholder="e.g. Acme Industries"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Contact Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="vikram@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Contact Phone <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-2 border-t border-slate-100">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      1. Tell us what you built <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      name="whatYouBuilt"
                      required
                      rows={3}
                      value={formData.whatYouBuilt}
                      onChange={handleInputChange}
                      placeholder="What company, product, transition, or operational breakthrough did you build?"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      2. Tell us what you learned <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      name="whatYouLearned"
                      required
                      rows={3}
                      value={formData.whatYouLearned}
                      onChange={handleInputChange}
                      placeholder="What was the critical insight, hard lesson, or operational realization?"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      3. Tell us what changed <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      name="whatChanged"
                      required
                      rows={2}
                      value={formData.whatChanged}
                      onChange={handleInputChange}
                      placeholder="How did this decision, failure or discovery alter your company's trajectory?"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      4. Tell us what another entrepreneur might take away from it <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      name="keyTakeaway"
                      required
                      rows={3}
                      value={formData.keyTakeaway}
                      onChange={handleInputChange}
                      placeholder="What specific, actionable takeaway can founders implement immediately?"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Submitting...' : 'Share Your Speaking Proposal →'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* ─── SECTION 7: ONE FINAL THOUGHT & CLOSING HERO ───────────────────── */}
      <section className="relative py-20 sm:py-28 bg-[#0062D2] text-white overflow-hidden">
        {/* Geometric Art */}
        <div className="absolute -right-16 -top-20 bottom-0 pointer-events-none w-[420px] sm:w-[560px] lg:w-[680px] opacity-35 overflow-hidden flex items-center justify-center">
          <svg
            viewBox="0 0 600 600"
            fill="none"
            className="w-full h-full text-white/30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 50 450 A 420 420 0 0 1 550 50" stroke="currentColor" strokeWidth="1.2" />
            <path d="M 120 520 A 500 500 0 0 1 600 120" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
            <path d="M 220 580 A 460 460 0 0 1 580 220" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            <line x1="280" y1="220" x2="380" y2="120" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
            <circle cx="280" cy="220" r="4.5" fill="#7DD3FC" />
            <circle cx="280" cy="220" r="10" stroke="#7DD3FC" strokeWidth="1" opacity="0.4" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Manifesto */}
            <div className="lg:col-span-8 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-200">
                — ONE FINAL THOUGHT —
              </span>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.1]">
                Bring us something you have lived.
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-white/90 leading-relaxed font-light max-w-2xl">
                <p>
                  The most valuable speaker in the room is not necessarily the person with the biggest stage presence.
                </p>
                <p className="text-sky-100 font-medium">
                  It may be the entrepreneur sitting quietly with ten years of experience, one difficult lesson and a story that could save someone else five years of mistakes.
                </p>
                <p>
                  Experience is meant to be shared. And when one entrepreneur shares what they have learned, another entrepreneur gets a little further.
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <button
                  onClick={handleScrollToForm}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#0062D2] font-semibold text-sm shadow-xl hover:bg-blue-50 transition-all duration-200 group hover:scale-105 cursor-pointer"
                >
                  <span>Apply to Speak →</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right Cursive Script */}
            <div className="lg:col-span-4 text-center lg:text-right select-none pointer-events-none">
              <p
                className="text-3xl sm:text-4xl lg:text-5xl font-light italic leading-tight text-white drop-shadow-lg"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Experience.
                <br />
                Honesty.
                <br />
                Generosity.
                <br />
                Shared Wisdom.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
