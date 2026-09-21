'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePageMedia } from '@/lib/hooks/use-page-media'
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
  XCircle,
  ChevronDown,
  ShieldCheck,
  Shield,
  Calendar,
  Award,
  Megaphone,
  Handshake,
  Network,
  Ban,
  Mic,
  Share2,
} from 'lucide-react'

// ─── Stats Bar ────────────────────────────────────────────────────────────
const STATS = [
  {
    icon: Users,
    value: '10,000+',
    label: 'Entrepreneurs',
  },
  {
    icon: Globe2,
    value: '25+',
    label: 'Countries',
  },
  {
    icon: Network,
    value: '100+',
    label: 'Industry Circles',
  },
  {
    icon: TrendingUp,
    value: '1M+',
    label: 'Lives to Impact',
  },
]

// ─── What the Role Carries (6 Cards) ──────────────────────────────────────
const ROLE_CARRIES = [
  {
    icon: Shield,
    title: 'Trusted with our reputation',
    description:
      'Every entrepreneur you introduce forms their first impression through you.',
    color: 'bg-blue-50 text-blue-700 border-blue-200',
  },
  {
    icon: Users,
    title: 'Your word carries weight',
    description:
      'Ambassadors are chosen because their word already means something in their market.',
    color: 'bg-purple-50 text-purple-700 border-purple-200',
  },
  {
    icon: Building2,
    title: 'Open institutional doors',
    description:
      'Associations, chambers, industry bodies and partner organisations.',
    color: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  },
  {
    icon: Megaphone,
    title: 'Speak for the community',
    description:
      'At events, on panels, in your industry and in networks where we are not yet present.',
    color: 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200',
  },
  {
    icon: Award,
    title: 'Carry visibility',
    description:
      'Features across our media ecosystem and a platform at community events.',
    color: 'bg-amber-50 text-amber-700 border-amber-200',
  },
  {
    icon: Network,
    title: 'Shape who joins',
    description:
      'The entrepreneurs you bring in strengthen the community. The ones you decline to bring protect it.',
    color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
]

// ─── What an Ambassador Does (6 Items) ────────────────────────────────────
const AMBASSADOR_ACTIONS = [
  {
    icon: Users,
    title: 'Represents Peers Global',
    description: 'In their industry, their city and their network.',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  {
    icon: Handshake,
    title: 'Introduces the right entrepreneurs',
    description: 'People who will strengthen the community.',
    badgeColor: 'bg-teal-50 text-teal-700 border-teal-200',
  },
  {
    icon: Ban,
    title: 'Declines the wrong ones',
    description: 'Quietly, and without apology.',
    badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
  },
  {
    icon: Building2,
    title: 'Connects institutions',
    description: 'Associations, chambers, industry bodies and partners.',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
  },
  {
    icon: Mic,
    title: 'Speaks at events',
    description: 'In rooms where the community is not yet present.',
    badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
  },
  {
    icon: ShieldCheck,
    title: 'Upholds the Peers Code publicly',
    description:
      "An Ambassador's conduct is the community's conduct, everywhere they are seen.",
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  },
]

// ─── FAQs ─────────────────────────────────────────────────────────────────
const FAQS = [
  {
    question: 'Do I need to be a Peer already?',
    answer:
      'Yes. Peers Global membership is required, and Ambassadors are chosen from within the community based on their proven alignment with our culture and code.',
  },
  {
    question: 'How much time does the role take?',
    answer:
      'Considerably less than a Circle role. Ambassadors represent rather than operate, and the commitment is opportunistic and relational rather than fixed on a calendar.',
  },
  {
    question: 'Can I be an Ambassador alongside another leadership role?',
    answer:
      'In select cases, an active Peer or Industry leader may carry Ambassador responsibilities. However, dedicated representation ensures unbiased introductions.',
  },
  {
    question: 'How many Ambassadors are there?',
    answer:
      'The role is held by a limited number of respected Peers. It depends on trust, credibility and stature rather than on geographical coverage.',
  },
  {
    question: 'Is there a target for how many people I bring in?',
    answer:
      'No. An Ambassador who introduces three entrepreneurs who genuinely belong here has done far more than one who introduces thirty who do not. Quality and culture come first.',
  },
  {
    question: 'What if someone I introduce does not work out?',
    answer:
      'That happens, and it is never held against you. Judgement is a practice, not a guarantee. The community values thoughtful introductions made in good faith.',
  },
]

export function AmbassadorClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const { getMedia } = usePageMedia('leadership')
  const heroMedia = getMedia({
    sectionName: 'Ambassador',
    subModuleName: 'AMBASSADOR HERO',
    subModuleId: 'sub-leadership-ambassador',
    fallbackUrl: '/videos/journey-bg.mp4',
    fallbackSourceType: 'localhost',
    fallbackTitle: 'Ambassador Leadership Role & Stature',
  })

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFBFD] text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* ─── 1. HERO SECTION ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-5 sm:pt-6 pb-3 sm:pb-4 border-b border-slate-200/80 bg-gradient-to-b from-white via-[#F6F9FD] to-[#EDF3FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-5">
            <Link href="/" className="hover:text-[#0062D2] transition-colors">
              Home
            </Link>
            <ChevronRight className="size-3 text-slate-400" />
            <Link href="/leadership" className="hover:text-[#0062D2] transition-colors">
              Leadership
            </Link>
            <ChevronRight className="size-3 text-slate-400" />
            <span className="text-slate-800 font-semibold">Ambassador</span>
          </nav>

          {/* Hero Banner Box (Unified rounded card matching Why Join / Leadership layout) */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[36px] bg-white border border-slate-200/80 shadow-sm min-h-[520px] lg:min-h-[580px] flex items-center">

            {/* Fade Video Visual (Right 60%) */}
            <div
              className="absolute top-0 right-0 bottom-0 w-full sm:w-[65%] lg:w-[58%] overflow-hidden pointer-events-none"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 10%, rgba(0,0,0,0.6) 28%, black 55%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 10%, rgba(0,0,0,0.6) 28%, black 55%)',
              }}
            >
              {heroMedia.isYouTube && heroMedia.embedUrl ? (
                <iframe
                  src={`${heroMedia.embedUrl}&mute=1&loop=1`}
                  title={heroMedia.title}
                  className="w-full h-full border-0 object-cover pointer-events-none scale-125"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              ) : (
                <video
                  key={heroMedia.mediaUrl}
                  src={heroMedia.mediaUrl || '/videos/journey-bg.mp4'}
                  poster="/images/leadership-ambassador.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover object-center scale-105"
                />
              )}
              <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-white via-white/85 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />

              {/* Top Right Wall Signage Badge */}
              <div className="absolute top-6 sm:top-10 right-6 sm:right-10 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-lg border border-white/60 max-w-[200px] z-20 text-right">
                <p className="text-xs font-bold text-slate-900 leading-tight">
                  Ideas
                </p>
                <p className="text-xs font-bold text-slate-900 leading-tight">
                  People
                </p>
                <p className="text-xs font-bold text-slate-900 leading-tight">
                  Partnerships
                </p>
                <p className="text-[11px] font-semibold text-[#0062D2] leading-tight mt-1">
                  A Stronger Tomorrow.
                </p>
              </div>

              {/* Cursive overlay on bottom right */}
              <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 text-right z-20 max-w-[240px] drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]">
                <p
                  className="text-xl sm:text-2xl font-light italic leading-tight text-white font-medium"
                  style={{ fontFamily: 'var(--font-script)' }}
                >
                  More People.
                </p>
                <p
                  className="text-2xl sm:text-3xl text-amber-300 font-bold leading-tight mt-0.5"
                  style={{ fontFamily: 'var(--font-script)' }}
                >
                  Bigger Possibilities.
                </p>
              </div>
            </div>

            {/* Left Content (Z-10) */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl flex flex-col items-start">
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#0062D2] mb-3">
                  <span className="w-5 h-px bg-[#0062D2]" />
                  LEADERSHIP
                  <span className="w-5 h-px bg-[#0062D2]" />
                </div>

                <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-950 leading-[1.08] mb-4">
                  Ambassador
                </h1>

                <p className="text-xl sm:text-2xl font-medium text-slate-900 leading-snug mb-3">
                  You carry the name.
                </p>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl font-light">
                  An Ambassador represents Peers Global in rooms where it is not yet known, and brings in the entrepreneurs who belong here.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="https://unity.peersglobal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0062D2] text-white font-medium text-sm shadow-md hover:bg-[#0052B4] hover:shadow-lg transition-all duration-200 group"
                  >
                    <span>Download Unity App</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>

                  <Link
                    href="/contact?intent=leadership"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-slate-800 font-medium text-sm border border-slate-300 shadow-sm hover:bg-slate-50 hover:border-slate-400 transition-all duration-200"
                  >
                    <span>Apply to Lead</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* Floating Metric Stats Bar */}
          <div className="mt-4 sm:mt-5 max-w-5xl mx-auto">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-7 shadow-xl shadow-slate-200/50 border border-slate-200/90">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                {STATS.map((stat, i) => {
                  const Icon = stat.icon
                  return (
                    <div
                      key={stat.label}
                      className={`flex items-center gap-4 ${
                        i !== 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''
                      }`}
                    >
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 border border-blue-100 shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-2xl sm:text-3xl font-bold font-serif text-slate-950 tracking-tight">
                          {stat.value}
                        </div>
                        <div className="text-xs sm:text-sm text-slate-600 font-medium">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: THE BIGGER PICTURE (WITH FADE & CARDS) ──────────── */}
      <section className="pt-6 sm:pt-8 pb-10 sm:pb-12 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
                  — THE BIGGER PICTURE —
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 tracking-tight leading-tight mt-2">
                  The community travels through people.
                </h2>
              </div>

              <p className="text-base text-slate-600 leading-relaxed">
                Peers Global does not grow through advertising. It grows because
                a respected entrepreneur says to another respected entrepreneur:{' '}
                <em>you should be part of this.</em>
              </p>

              <p className="text-base text-slate-600 leading-relaxed">
                That sentence carries more weight than any campaign, and it only
                carries weight when the person saying it has something to lose
                by saying it wrongly.
              </p>

              <p className="text-base sm:text-lg font-serif font-bold text-slate-900 leading-relaxed border-l-2 border-[#0062D2] pl-4">
                An Ambassador is trusted with exactly that.
              </p>

              <p className="text-base text-slate-600 leading-relaxed">
                You represent this community in your industry, your city and
                your network. You speak for what it stands for. And you decide
                who hears about it from you.
              </p>
            </div>

            {/* Right Visual Box: Quote Card + Photo with 3 Pills */}
            <div className="lg:col-span-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                {/* Quote Card */}
                <div className="sm:col-span-6 bg-gradient-to-br from-blue-50/90 to-sky-50/40 rounded-2xl p-6 sm:p-7 border border-blue-100 shadow-sm flex flex-col justify-between">
                  <div>
                    <Quote className="w-8 h-8 text-[#0062D2] mb-3 opacity-80" />
                    <p className="text-base sm:text-lg font-serif italic text-slate-900 leading-relaxed">
                      “A stronger community begins with a conversation.”
                    </p>
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#0062D2] mt-4">
                    PEERS GLOBAL
                  </p>
                </div>

                {/* Networking Photo with Wall Sign */}
                <div className="sm:col-span-6 relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 min-h-[220px] group">
                  <Image
                    src="/images/who-we-are-friends.jpg"
                    alt="Entrepreneurs conversing at networking event"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-white/50 text-right">
                    <p className="text-[10px] font-bold text-slate-900 leading-tight">
                      Same Entrepreneurs.
                    </p>
                    <p className="text-[9px] font-semibold text-[#0062D2] leading-tight">
                      Bigger Possibilities.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3 Pills Bar Underneath */}
              <div className="bg-slate-50 rounded-2xl p-3 sm:p-4 border border-slate-200/80 shadow-sm grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 text-center">
                <div className="flex items-center justify-center gap-2 p-2 rounded-xl bg-white border border-slate-200/70 shadow-xs">
                  <Users className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-semibold text-slate-800">
                    Connect
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 p-2 rounded-xl bg-white border border-slate-200/70 shadow-xs">
                  <Handshake className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-semibold text-slate-800">
                    Introduce
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 p-2 rounded-xl bg-white border border-slate-200/70 shadow-xs">
                  <TrendingUp className="w-4 h-4 text-purple-600" />
                  <span className="text-xs font-semibold text-slate-800">
                    Create Impact
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: WHAT THE ROLE CARRIES (6 CARDS) ──────────────────── */}
      <section className="py-16 sm:py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
              — WHAT THE ROLE CARRIES —
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-2">
              Standing built on trust.
            </h2>
          </div>

          {/* 6 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {ROLE_CARRIES.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 border transition-transform duration-300 group-hover:scale-110 ${item.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif font-bold text-slate-900 text-sm leading-snug mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: TWO-COLUMN SECTION (WHO YOU BECOME & WHAT AMBASSADOR DOES) ─ */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Who You Become */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
                  — WHO YOU BECOME —
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-2">
                  The person whose recommendation means something.
                </h2>
              </div>

              <p className="text-base text-slate-600 leading-relaxed">
                An Ambassador builds a reputation for judgement. Over time,
                entrepreneurs in your network stop asking whether Peers Global
                is worth their time and start asking whether you think they
                belong in it. That shift — from advocate to arbiter — is the
                standing this role produces.
              </p>

              <div className="space-y-4 pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  What it develops:
                </h3>

                <div className="space-y-3 border-t border-slate-100 pt-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-800">
                      <strong>Discernment</strong> — recognising who should, and
                      should not, be here.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-800">
                      <strong>The confidence to represent</strong> — holding a
                      position in a room without defending it.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-800">
                      <strong>A wider network by design</strong> — access to
                      institutions and senior figures.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-800">
                      <strong>A reputation for judgement</strong> — one of the
                      most valuable forms of standing.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: What an Ambassador Does */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
                  — WHAT AN AMBASSADOR DOES —
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-2">
                  Representation in practice.
                </h2>
              </div>

              <div className="space-y-3.5">
                {AMBASSADOR_ACTIONS.map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.title}
                      className="flex items-start gap-3.5 p-3.5 rounded-xl hover:bg-slate-50 transition-colors border border-slate-100"
                    >
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border ${item.badgeColor}`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <h3 className="text-sm font-bold text-slate-900">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: THREE-COLUMN SECTION (WHO FOR / NOT FOR / ACTION) ── */}
      <section className="py-16 sm:py-24 bg-[#FDFBF7] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Column 1: Who This Role is For */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                  — WHO THIS ROLE IS FOR —
                </span>
                <div className="space-y-3 pt-4">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700">
                      Your word already carries weight in your industry or city
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700">
                      People come to you for introductions and take them
                      seriously
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700">
                      You have judgement about people and are willing to use it
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700">
                      You can say no to someone who wants in and should not be
                      here
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700">
                      You want standing built on being trusted rather than on
                      being known
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700">
                      You believe in this community enough to put your name
                      behind it
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: This is Not For You If */}
            <div className="lg:col-span-4 bg-rose-50/50 rounded-3xl p-7 border border-rose-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-rose-700">
                  — THIS IS NOT FOR YOU IF —
                </span>
                <div className="space-y-3 pt-4">
                  <div className="flex items-start gap-2.5">
                    <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-rose-950">
                      You would use the position to build your own business
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-rose-950">
                      You are uncomfortable saying no
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-rose-950">
                      You want a title without the responsibility
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-rose-950">
                      You cannot represent the community publicly
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-rose-950">
                      You see this as a marketing opportunity
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Action Card */}
            <div className="lg:col-span-4 bg-gradient-to-b from-blue-50/90 via-sky-50/50 to-white rounded-3xl p-7 border border-blue-200/80 shadow-sm flex flex-col justify-between text-center items-center">
              <div className="space-y-4 pt-2">
                <div className="w-14 h-14 rounded-2xl bg-[#0062D2] text-white flex items-center justify-center mx-auto shadow-md shadow-blue-200">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-950 leading-tight">
                  Ready to represent Peers Global?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed max-w-[220px] mx-auto">
                  Download the Unity App or apply to join as an Ambassador.
                </p>
              </div>

              <div className="w-full space-y-3 pt-6">
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#0062D2] text-white font-semibold text-xs shadow-md hover:bg-[#0052B4] transition-all duration-200"
                >
                  <span>Download Unity App</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <Link
                  href="/contact?intent=leadership"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-white text-slate-800 font-semibold text-xs border border-slate-300 shadow-sm hover:bg-slate-50 transition-all duration-200"
                >
                  <span>Apply to Lead</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: COMMON QUESTIONS (FAQ ACCORDION) ────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
              — COMMON QUESTIONS —
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-2">
              Frequently asked questions
            </h2>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div key={faq.question} className="py-5">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between gap-4 text-left group focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-serif font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {faq.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
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
                    <div className="pt-3 pb-2 text-sm sm:text-base text-slate-600 leading-relaxed pr-8">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: CLOSING HERO BANNER — Royal Blue Theme (Preserving Exact Structure) ─── */}
      <section className="relative py-20 sm:py-28 bg-[#0062D2] text-white overflow-hidden">
        {/* Subtle Geometric Orbital Line Art */}
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
            {/* Left Copy */}
            <div className="lg:col-span-8 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-200">
                — A STRONGER TOMORROW —
              </span>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.1]">
                More People.
                <br />
                Bigger Possibilities.
              </h2>

              <p className="text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed">
                Be the voice. Bring the entrepreneurs who belong here.
              </p>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-[#0062D2] font-semibold text-sm shadow-xl hover:bg-blue-50 transition-all duration-200 group hover:scale-105"
                >
                  <span>Download Unity App</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <Link
                  href="/contact?intent=leadership"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/40 backdrop-blur-sm transition-all duration-200"
                >
                  <span>Apply to Lead</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
              </div>
            </div>

            {/* Right Cursive Script */}
            <div className="lg:col-span-4 text-center lg:text-right select-none pointer-events-none">
              <p
                className="text-3xl sm:text-4xl lg:text-5xl font-light italic leading-tight text-white drop-shadow-lg"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Entrepreneurs
                <br />
                Create a Better
                <br />
                Tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
