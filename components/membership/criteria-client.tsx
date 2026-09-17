'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  Smartphone,
  Users,
  Building2,
  Globe2,
  Target,
  ShieldCheck,
  Heart,
  FileText,
  UserCheck,
  Calendar,
  CheckCircle2,
  Check,
  Clock,
  Plus,
  Minus,
  Sparkles,
  Award,
  Lock,
  Compass,
  Layers,
  HelpCircle,
} from 'lucide-react'

// ─── Stats Bar ────────────────────────────────────────────────────────────
const STATS = [
  {
    icon: Users,
    value: '10,000+',
    label: 'Entrepreneurs',
  },
  {
    icon: Building2,
    value: '45+',
    label: 'Cities',
  },
  {
    icon: Globe2,
    value: '25+',
    label: 'Countries',
  },
  {
    icon: Target,
    value: '1M',
    label: 'Lives to Impact',
  },
]

// ─── Part One Criteria (5 traits) ─────────────────────────────────────────
const CRITERIA_FIVE = [
  {
    num: '01',
    icon: UserCheck,
    color: '#10B981',
    bg: '#ECFDF5',
    border: '#A7F3D0',
    title: 'You own or lead a real business',
    desc: 'Founder, co-founder, partner, director or CEO. You make decisions that carry consequences. No minimum revenue. No minimum age of business.',
  },
  {
    num: '02',
    icon: Heart,
    color: '#0284C7',
    bg: '#F0F9FF',
    border: '#BAE6FD',
    title: 'You are here to contribute',
    desc: 'What you intend to give matters more than what you hope to receive. This is the criterion that shapes everything else in our community.',
  },
  {
    num: '03',
    icon: FileText,
    color: '#8B5CF6',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    title: 'You accept the Peers Code',
    desc: 'Give first. Show up. Tell the truth. Protect the room. Respect every Peer. Carry the culture across every interaction.',
  },
  {
    num: '04',
    icon: ShieldCheck,
    color: '#F59E0B',
    bg: '#FFFBEB',
    border: '#FDE68A',
    title: 'You represent your business honestly',
    desc: 'What you tell the community about your business, your role and your work must be true. Integrity precedes collaboration.',
  },
  {
    num: '05',
    icon: Users,
    color: '#E11D48',
    bg: '#FFF1F2',
    border: '#FECDD3',
    title: 'You conduct yourself professionally',
    desc: 'Inside the app, in meetings, and anywhere you represent Peers Global. High emotional intelligence and mutual dignity.',
  },
]

// ─── Part Two: 4-Step Approval Process ────────────────────────────────────
const APPROVAL_STEPS = [
  {
    num: '1',
    icon: FileText,
    color: '#10B981',
    bg: '#ECFDF5',
    title: 'You raise a request',
    desc: 'From inside the app or on the website, you request to join a specific Circle. You state your business, your category and why that Circle.',
    timeline: 'Timeline: a few minutes',
  },
  {
    num: '2',
    icon: Users,
    color: '#0062D2',
    bg: '#EFF6FF',
    title: 'Your request is reviewed',
    desc: 'The Circle Director, the Circle Chairs and the Membership Committee review category availability, alignment, and contribution potential.',
    timeline: 'Timeline: usually within 7 days',
  },
  {
    num: '3',
    icon: Calendar,
    color: '#F59E0B',
    bg: '#FFFBEB',
    title: 'You visit the Circle',
    desc: 'Where possible, you attend a meeting as a guest before the seat is confirmed. You see the room, and the room sees you.',
    timeline: "Timeline: the Circle's next meeting date",
  },
  {
    num: '4',
    icon: CheckCircle2,
    color: '#8B5CF6',
    bg: '#F5F3FF',
    title: 'Your request is approved',
    desc: "You are informed directly, either way. If approved, you pay the Circle's Experience Fee and your category is locked in that room.",
    timeline: 'Timeline: immediately after approval',
  },
]

// ─── FAQs ─────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: 'Can I join Peers Global without joining a Circle?',
    a: 'Yes. Your subscription gives you the platform, the app, the directory and the global community. A Circle is an additional step you take when the right room is available.',
  },
  {
    q: 'Is the Circle Experience Fee separate from my subscription?',
    a: "Yes. Your subscription is for Peers Global platform access. The Circle Experience Fee covers the hospitality, venue and experience of that specific Circle's twelve meetings.",
  },
  {
    q: 'What if my Circle request is declined?',
    a: 'You are told why directly and shown the alternatives (such as adjacent Circles or the waitlist). Your platform subscription remains unaffected.',
  },
  {
    q: 'Can I request a specific Circle?',
    a: 'Yes. You can name the exact Industry or Purpose Circle and city when you raise your request in the Unity App.',
  },
  {
    q: 'What if I am not sure which Circle suits me?',
    a: 'Raise it with a Circle Director or during onboarding. That consultation is exactly what our leadership team is here for.',
  },
  {
    q: 'How long does Circle approval take?',
    a: 'Usually within 7 days. The Director and Chairs evaluate category exclusivity and schedule your guest visit for the upcoming monthly date.',
  },
  {
    q: 'Do I pay the Circle Experience Fee before or after approval?',
    a: 'After. You are never asked to pay for a Circle seat until your application is formally approved and your category is ready to be locked.',
  },
]

export function CriteriaClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index))
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0F172A] selection:bg-[#0062D2] selection:text-white font-sans">

      {/* =================================================================
          SECTION 1: HERO — Executive Split with Fade Mask & Script
          ================================================================= */}
      <section className="relative overflow-hidden bg-[#FAFBFD] text-slate-900 pt-6 sm:pt-10 pb-16 lg:pb-24 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium tracking-wide mb-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <ChevronRight className="size-3.5 text-slate-400" />
            <Link href="/membership" className="hover:text-slate-900 transition-colors">Membership</Link>
            <ChevronRight className="size-3.5 text-slate-400" />
            <span className="text-[#0062D2] font-semibold">Criteria & Process</span>
          </div>

          {/* Hero Banner Box */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[36px] bg-white border border-slate-200/80 shadow-sm min-h-[520px] lg:min-h-[580px] flex items-center">

            {/* Fade Visual (Right 60%) */}
            <div
              className="absolute top-0 right-0 bottom-0 w-full sm:w-[65%] lg:w-[58%] overflow-hidden pointer-events-none"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 10%, rgba(0,0,0,0.6) 28%, black 55%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 10%, rgba(0,0,0,0.6) 28%, black 55%)',
              }}
            >
              <Image
                src="/images/membership-hero-peers.jpg"
                alt="Peers Global Executive Board Meeting"
                fill
                priority
                className="object-cover object-center scale-105"
              />
              <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-white via-white/85 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />

              {/* Cursive Script Overlay - Top Right */}
              <div className="absolute top-6 sm:top-10 right-6 sm:right-10 z-20 text-right drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] pointer-events-none select-none">
                <p className="text-2xl sm:text-3xl text-white/95 leading-tight font-medium" style={{ fontFamily: 'var(--font-script)' }}>
                  Better People
                </p>
                <p className="text-3xl sm:text-4xl text-amber-300 font-bold leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Bigger Opportunities.
                </p>
              </div>

              {/* Cursive Script Overlay - Bottom Right */}
              <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-10 z-20 text-right drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] pointer-events-none select-none">
                <p className="text-xl sm:text-2xl text-white/95 leading-tight font-medium" style={{ fontFamily: 'var(--font-script)' }}>
                  Right People. Real Growth.
                </p>
                <p className="text-2xl sm:text-3xl text-amber-300 font-bold leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  A Brighter Tomorrow.
                </p>
              </div>
            </div>

            {/* Left Content (Z-10) */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl flex flex-col items-start">

                {/* Eyebrow */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-0.5 w-6 bg-[#0062D2]" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                    MEMBERSHIP
                  </span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-[62px] font-normal text-slate-900 tracking-tight leading-[1.08] mb-4">
                  Criteria & Process
                </h1>

                <p className="text-xl sm:text-2xl text-slate-800 font-medium leading-snug mb-3 font-serif italic">
                  Two steps. Joining Peers Global, and joining a Circle.
                </p>

                <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8">
                  The first is open to every entrepreneur who meets the criteria. <span className="font-semibold text-slate-900">The second is by approval.</span>
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="https://unity.peersglobal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-7 py-3.5 text-sm font-bold shadow-lg shadow-blue-600/25 transition-all hover:scale-105 inline-flex items-center gap-2"
                  >
                    <span>Download Unity App</span>
                    <ArrowRight className="size-4" />
                  </a>
                  <Link
                    href="/apply"
                    className="rounded-full border border-slate-300 hover:border-[#0062D2] bg-white hover:bg-slate-50 text-slate-800 hover:text-[#0062D2] px-7 py-3.5 text-sm font-semibold transition-all inline-flex items-center gap-2 shadow-sm"
                  >
                    <span>Apply for Membership</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </div>

              </div>
            </div>

          </div>

          {/* Floating Stats Bar */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
            {STATS.map((stat, i) => {
              const Icon = stat.icon
              return (
                <div
                  key={i}
                  className="rounded-2xl bg-white border border-slate-200/90 p-4 sm:p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="size-11 sm:size-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    <Icon className="size-5 sm:size-6 text-[#0062D2]" />
                  </div>
                  <div>
                    <div className="font-serif text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 2: HOW JOINING WORKS — A simple, two-step journey
          ================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left Narrative (6 cols) */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-0.5 w-6 bg-[#0062D2]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                  HOW JOINING WORKS
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight leading-tight mb-4">
                A simple, two-step journey.
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Your Peers Global subscription gives you the platform. When you are ready, you request a Circle and go through a separate approval process. Both steps matter, and they work differently on purpose.
              </p>
            </div>

            {/* Right Visual Steps (6 cols) */}
            <div className="lg:col-span-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">

              {/* Step 1 */}
              <div className="flex-1 w-full rounded-2xl bg-[#FAFBFD] border border-slate-200/90 p-5 sm:p-6 flex items-center gap-4 shadow-2xs">
                <div className="size-12 rounded-2xl bg-blue-50 border border-blue-100 text-[#0062D2] flex items-center justify-center font-bold text-lg shrink-0">
                  1
                </div>
                <div>
                  <div className="text-base font-bold text-slate-900 leading-snug">
                    Join Peers Global
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Open to every entrepreneur who meets the criteria.
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden sm:flex items-center justify-center text-slate-400">
                <ArrowRight className="size-6" />
              </div>

              {/* Step 2 */}
              <div className="flex-1 w-full rounded-2xl bg-[#FAFBFD] border border-slate-200/90 p-5 sm:p-6 flex items-center gap-4 shadow-2xs">
                <div className="size-12 rounded-2xl bg-blue-50 border border-blue-100 text-[#0062D2] flex items-center justify-center font-bold text-lg shrink-0">
                  2
                </div>
                <div>
                  <div className="text-base font-bold text-slate-900 leading-snug">
                    Join a Circle
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    By request and approval.
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 3: PART ONE — Joining Peers Global
          ================================================================= */}
      <section className="py-20 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header with Button on Right */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-0.5 w-6 bg-[#0062D2]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                  PART ONE
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight leading-tight mb-2">
                Joining Peers Global
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                <strong className="text-slate-900">The criteria:</strong> Open to any entrepreneur who meets these five.
              </p>
            </div>

            <div>
              <Link
                href="/culture-and-code"
                className="rounded-full bg-white hover:bg-slate-50 border border-slate-300 hover:border-[#0062D2] text-slate-800 hover:text-[#0062D2] px-6 py-3 text-xs sm:text-sm font-bold transition-all shadow-sm inline-flex items-center gap-2"
              >
                <span>Read the Peers Code</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

          {/* 5 Criteria Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {CRITERIA_FIVE.map((c, idx) => {
              const Icon = c.icon
              return (
                <div
                  key={idx}
                  className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 p-5 sm:p-6 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg border"
                        style={{ backgroundColor: c.bg, borderColor: c.border, color: c.color }}
                      >
                        {c.num}
                      </span>
                      <div
                        className="size-9 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: c.bg, border: `1px solid ${c.border}` }}
                      >
                        <Icon className="size-4" style={{ color: c.color }} />
                      </div>
                    </div>

                    <h3 className="font-serif text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug">
                      {c.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed pt-3 border-t border-slate-100">
                    {c.desc}
                  </p>
                </div>
              )
            })}
          </div>

          {/* What We Do Not Require + The Process */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

            {/* Left: What we do not require (5 cols) */}
            <div className="lg:col-span-5 rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-2xs">
              <div>
                <h4 className="font-serif text-xl font-bold text-slate-900 mb-4">
                  What we do not require
                </h4>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <Check className="size-4 text-[#0062D2] shrink-0" />
                    <span>A minimum turnover</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="size-4 text-[#0062D2] shrink-0" />
                    <span>A particular industry</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="size-4 text-[#0062D2] shrink-0" />
                    <span>An existing network</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="size-4 text-[#0062D2] shrink-0" />
                    <span>A degree or title</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="size-4 text-[#0062D2] shrink-0" />
                    <span>English fluency (multilingual community)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="size-4 text-[#0062D2] shrink-0" />
                    <span>An invitation</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-4">
                <p className="text-[11px] text-slate-500 italic">
                  Contribution is not a function of revenue or credentials.
                </p>
              </div>
            </div>

            {/* Right: The Process (7 cols) */}
            <div className="lg:col-span-7 rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-2xs">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <h4 className="font-serif text-xl font-bold text-slate-900">
                    The process
                  </h4>
                  <Link
                    href="/membership/tiers"
                    className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-5 py-2.5 text-xs font-bold transition-all inline-flex items-center gap-2 self-start"
                  >
                    <span>See Membership Options</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200/80">
                    <div className="size-8 rounded-full bg-blue-100 text-[#0062D2] font-bold text-xs flex items-center justify-center mb-2">
                      1
                    </div>
                    <div className="text-sm font-bold text-slate-900 mb-1">Explore</div>
                    <p className="text-xs text-slate-600 leading-snug">
                      Download the Unity App and see the community from the inside.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200/80">
                    <div className="size-8 rounded-full bg-blue-100 text-[#0062D2] font-bold text-xs flex items-center justify-center mb-2">
                      2
                    </div>
                    <div className="text-sm font-bold text-slate-900 mb-1">Subscribe</div>
                    <p className="text-xs text-slate-600 leading-snug">
                      Choose your membership tier and complete your subscription.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200/80">
                    <div className="size-8 rounded-full bg-blue-100 text-[#0062D2] font-bold text-xs flex items-center justify-center mb-2">
                      3
                    </div>
                    <div className="text-sm font-bold text-slate-900 mb-1">You are a Peer</div>
                    <p className="text-xs text-slate-600 leading-snug">
                      Full access to the platform, community and Unity App.
                    </p>
                    <span className="text-[10px] font-bold text-[#0062D2] block mt-2">
                      Timeline: same day
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-4">
                <p className="text-[11px] text-slate-500">
                  Immediate activation on payment through the Unity Platform.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 4: PART TWO — Joining a Circle (Tinted / Distinct Container)
          ================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="rounded-3xl bg-[#FFF9F9] border border-rose-100 p-8 sm:p-12 shadow-sm">

            {/* Part Two Header with Button on Right */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-10 pb-8 border-b border-rose-200/60">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="h-0.5 w-6 bg-rose-500" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-rose-600">
                    PART TWO
                  </span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight leading-tight mb-4">
                  Joining a Circle
                </h2>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Why this step is separate
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  A Circle holds one business per category. When you take a seat, that category closes to everyone else in that room. That is why every Circle request is reviewed rather than accepted automatically — the entrepreneurs already in that room are trusting the process to protect what they have built.
                </p>
              </div>

              <div>
                <Link
                  href="/circle-meeting-experience"
                  className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-6 py-3 text-xs sm:text-sm font-bold transition-all shadow-md inline-flex items-center gap-2 shrink-0"
                >
                  <span>See What Happens in a Meeting</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* The Approval Process (4 Step Cards) */}
            <div>
              <h4 className="font-serif text-xl font-bold text-slate-900 mb-6">
                The approval process
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {APPROVAL_STEPS.map((step, idx) => {
                  const Icon = step.icon
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl bg-white border border-rose-100 p-5 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="size-7 rounded-full bg-slate-100 text-slate-800 font-mono text-xs font-bold flex items-center justify-center">
                            {step.num}
                          </span>
                          <div
                            className="size-8 rounded-lg flex items-center justify-center"
                            style={{ backgroundColor: step.bg }}
                          >
                            <Icon className="size-4" style={{ color: step.color }} />
                          </div>
                        </div>

                        <h5 className="font-serif text-base font-bold text-slate-900 mb-2 leading-snug">
                          {step.title}
                        </h5>

                        <p className="text-xs text-slate-600 leading-relaxed mb-4">
                          {step.desc}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-100">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#0062D2]">
                          {step.timeline}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* If Category is Taken */}
            <div className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h5 className="text-base font-bold text-slate-900 mb-1">
                  What if your category is already taken?
                </h5>
                <p className="text-xs sm:text-sm text-slate-600">
                  We will tell you immediately. You can join another adjacent Circle, enter the waitlist, or found a new Circle in your city.
                </p>
              </div>

              <Link
                href="/start-a-circle"
                className="rounded-full border border-slate-300 hover:border-[#0062D2] text-slate-800 hover:text-[#0062D2] bg-white px-5 py-2.5 text-xs font-bold transition-all shrink-0 inline-flex items-center gap-2"
              >
                <span>Start a Circle</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 5: THREE TRUST & REASSURANCE BADGES
          ================================================================= */}
      <section className="py-14 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="rounded-2xl bg-[#FAFBFD] border border-slate-200/90 p-5 flex items-center gap-4 shadow-2xs">
              <div className="size-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Target className="size-6" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">
                  The right fit matters
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  It is better to have three empty seats than one wrong person in the room.
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-[#FAFBFD] border border-slate-200/90 p-5 flex items-center gap-4 shadow-2xs">
              <div className="size-12 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0">
                <ShieldCheck className="size-6" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">
                  A fair process
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Every request is reviewed by people who know the Circle.
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-[#FAFBFD] border border-slate-200/90 p-5 flex items-center gap-4 shadow-2xs">
              <div className="size-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                <Users className="size-6" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">
                  A stronger community
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  The result is a room where everyone can give, grow and build together.
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 6: COMMON QUESTIONS (FAQ ACCORDION)
          ================================================================= */}
      <section className="py-20 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="h-0.5 w-6 bg-[#0062D2]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                COMMON QUESTIONS
              </span>
              <span className="h-0.5 w-6 bg-[#0062D2]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight leading-tight mb-2">
              Frequently asked questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Clear answers about joining Peers Global and requesting your Circle seat.
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
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4"
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
                    <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 7: CLOSING HERO BANNER — Mountain Sunrise Panorama
          ================================================================= */}
      <section className="relative overflow-hidden bg-[#070F1E] text-white py-24 sm:py-32">
        {/* Background Image */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/membership-mountain-closing.jpg"
            alt="Entrepreneur standing on mountain summit at sunrise"
            fill
            className="object-cover object-center opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070F1E] via-[#070F1E]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070F1E] via-transparent to-[#070F1E]/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left Copy */}
            <div className="lg:col-span-8 flex flex-col items-start">
              <div className="inline-flex items-center gap-3 text-sky-400 text-xs font-bold tracking-[0.25em] uppercase mb-4">
                <span className="h-0.5 w-6 bg-sky-400" />
                <span>YOUR NEXT STEP</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-tight mb-4">
                Great entrepreneurs belong here.
              </h2>

              <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed mb-8">
                Download the Unity App or apply for membership and take your next step.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-8 py-4 text-sm font-bold shadow-lg shadow-blue-600/30 transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                  <span>Download Unity App</span>
                  <ArrowRight className="size-4" />
                </a>
                <Link
                  href="/apply"
                  className="rounded-full border border-white/30 hover:border-white/60 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white px-8 py-4 text-sm font-semibold transition-all inline-flex items-center gap-2"
                >
                  <UserCheck className="size-4" />
                  <span>Apply for Membership</span>
                </Link>
              </div>
            </div>

            {/* Right Cursive Script Callout */}
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <div className="text-left lg:text-right select-none pointer-events-none" style={{ fontFamily: 'var(--font-script)' }}>
                <p className="text-3xl sm:text-4xl text-white/50 leading-tight">Build,</p>
                <p className="text-3xl sm:text-4xl text-white/70 leading-tight">Connect,</p>
                <p className="text-3xl sm:text-4xl text-white/90 leading-tight">Collaborate,</p>
                <p className="text-4xl sm:text-5xl text-amber-300 font-medium leading-tight mt-1">
                  Create Impact.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
