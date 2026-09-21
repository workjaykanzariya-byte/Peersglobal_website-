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
  MapPin,
  Landmark,
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
  Crown,
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
    icon: Building2,
    value: '250+',
    label: 'Cities',
  },
  {
    icon: Globe2,
    value: '10+',
    label: 'Countries',
  },
  {
    icon: TrendingUp,
    value: '1M+',
    label: 'Lives to Impact',
  },
]

// ─── Four Territory Levels ────────────────────────────────────────────────
const TERRITORY_LEVELS = [
  {
    icon: MapPin,
    title: 'Area Executive Director',
    description: 'A defined area within a city, and the Circles inside it.',
    color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  {
    icon: Building2,
    title: 'District Executive Director',
    description:
      'A full city or district, its Circles, and the community across them.',
    color: 'bg-blue-50 text-blue-700 border-blue-200',
  },
  {
    icon: Landmark,
    title: 'State Executive Director',
    description:
      'A state, its districts and cities, and the leaders who hold them.',
    color: 'bg-purple-50 text-purple-700 border-purple-200',
  },
  {
    icon: Globe2,
    title: 'Country Executive Director',
    description: 'A nation, and the entire Peers Global ecosystem within it.',
    color: 'bg-amber-50 text-amber-700 border-amber-200',
  },
]

// ─── Six Responsibilities ─────────────────────────────────────────────────
const SIX_RESPONSIBILITIES = [
  {
    icon: Network,
    title: 'You build the ecosystem',
    description:
      'Every Circle, every Founder, every Director and every Peer in your territory.',
    color: 'bg-blue-50 text-blue-700 border-blue-200',
  },
  {
    icon: Users,
    title: 'You develop the leaders who lead',
    description:
      'Identify, appoint, mentor and support Circle Founders and Directors across your territory.',
    color: 'bg-purple-50 text-purple-700 border-purple-200',
  },
  {
    icon: Megaphone,
    title: 'You represent Peers Global',
    description:
      'To the business community, institutions, industry bodies, government and media.',
    color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  {
    icon: Handshake,
    title: 'You engage at the highest level',
    description:
      'Senior business figures, associations, chambers and public officials.',
    color: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  },
  {
    icon: Award,
    title: 'You carry visibility across the territory',
    description:
      'Regional and national events, media coverage and platforms across the community.',
    color: 'bg-rose-50 text-rose-700 border-rose-200',
  },
  {
    icon: Calendar,
    title: "You host the territory's events",
    description:
      'Conclaves, regional gatherings, summits and celebrations.',
    color: 'bg-teal-50 text-teal-700 border-teal-200',
  },
]

// ─── FAQs ─────────────────────────────────────────────────────────────────
const FAQS = [
  {
    question: 'Do I need to be a Peer already?',
    answer:
      'Yes. Peers Global membership is required. Executive Directors lead the ecosystem from within, with a deep understanding of our core culture, values and the Peers Code.',
  },
  {
    question: 'Do I need to have led a Circle first?',
    answer:
      'It is the usual path and the best preparation. Founding or directing a Circle teaches you what you will later be asking others to do and gives you first-hand credibility.',
  },
  {
    question: 'Which level would I start at?',
    answer:
      'Most Executive Directors begin at Area or District level and grow with the territory they build. State and Country appointments come from proven territory leadership.',
  },
  {
    question: 'How is a territory defined?',
    answer:
      'Territories are agreed clearly with the global leadership, defined by business geography and commercial catchment areas rather than purely administrative boundaries.',
  },
  {
    question: 'Can I hold a territory while running my business?',
    answer:
      'Yes. Every Executive Director is an active business owner. The role is built around leadership at one remove — empowering Founders and Directors rather than managing daily details yourself.',
  },
  {
    question: 'How much time does it take?',
    answer:
      'More at the beginning when initial Circles are being founded, and progressively less as leaders mature under you. The commitment is discussed transparently before any appointment.',
  },
  {
    question: 'Can I be an Executive Director and a Circle Director?',
    answer:
      'Generally, no. An Executive Director oversees multiple Circles across cities. Directing one individual room creates potential conflicts of focus and time.',
  },
  {
    question: 'What if there are no Circles in my territory yet?',
    answer:
      'Then you are building from the ground up. That is the most demanding version of this role and the one that leaves the deepest mark — every Circle in that territory will exist because you started it.',
  },
]

export function ExecutiveDirectorClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const { getMedia } = usePageMedia('leadership')
  const heroMedia = getMedia({
    sectionName: 'Executive Director',
    subModuleName: 'EXECUTIVE DIRECTOR HERO',
    subModuleId: 'sub-leadership-executive-director',
    fallbackUrl: '/videos/homepage-hero-bg.mp4',
    fallbackSourceType: 'localhost',
    fallbackTitle: 'Executive Director Regional Leadership',
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
            <span className="text-slate-800 font-semibold">Executive Director</span>
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
                  src={heroMedia.mediaUrl || '/videos/homepage-hero-bg.mp4'}
                  poster="/images/executive-director-hero.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover object-center scale-105"
                />
              )}
              <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-white via-white/85 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />

              {/* Cursive Script Overlay */}
              <div className="absolute top-6 sm:top-10 right-6 sm:right-10 z-20 text-right drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] pointer-events-none select-none">
                <p
                  className="text-2xl sm:text-3xl text-white/95 leading-tight font-medium"
                  style={{ fontFamily: 'var(--font-script)' }}
                >
                  Stronger Regions.
                </p>
                <p
                  className="text-2xl sm:text-3xl text-white/95 leading-tight mt-0.5 font-medium"
                  style={{ fontFamily: 'var(--font-script)' }}
                >
                  Stronger Entrepreneurs.
                </p>
                <p
                  className="text-3xl sm:text-4xl text-amber-300 font-bold leading-tight mt-0.5"
                  style={{ fontFamily: 'var(--font-script)' }}
                >
                  A Brighter Tomorrow.
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
                  Executive Director
                </h1>

                <p className="text-xl sm:text-2xl font-medium text-slate-900 leading-snug mb-3">
                  You carry territory.
                </p>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl font-light">
                  Area. District. State. Country. Wherever you hold, the entrepreneurial ecosystem inside it becomes your responsibility.
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

      {/* ─── SECTION 2: FOUR LEVELS. ONE RESPONSIBILITY. ─────────────────── */}
      <section className="pt-6 sm:pt-8 pb-10 sm:pb-12 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Content Column: Title + 4 Cards */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
                  — FOUR LEVELS. ONE RESPONSIBILITY. —
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 tracking-tight leading-tight mt-2">
                  You build entire regions of opportunity.
                </h2>
                <p className="text-base text-slate-600 leading-relaxed mt-2 max-w-2xl">
                  An Executive Director carries a territory and everything Peers
                  Global becomes inside it. The scope changes at each level. The
                  responsibility does not.
                </p>
              </div>

              {/* 4 Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {TERRITORY_LEVELS.map((level) => {
                  const Icon = level.icon
                  return (
                    <div
                      key={level.title}
                      className="p-5 rounded-2xl bg-slate-50/90 border border-slate-200/80 hover:border-blue-300 hover:bg-white transition-all shadow-sm flex flex-col justify-between group"
                    >
                      <div>
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 border ${level.color}`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-serif font-bold text-slate-900 text-base leading-snug mb-1.5">
                          {level.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {level.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right Column: Frosted Quote Card + Leaders Photo */}
            <div className="lg:col-span-5 space-y-4">
              {/* Quote Card */}
              <div className="bg-gradient-to-br from-blue-50/90 to-sky-50/40 rounded-2xl p-6 sm:p-7 border border-blue-100 shadow-sm relative">
                <Quote className="w-8 h-8 text-[#0062D2] mb-3 opacity-80" />
                <p className="text-base sm:text-lg font-serif italic text-slate-900 leading-relaxed">
                  “Communities don’t just grow. They are built by someone.”
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-[#0062D2] mt-4">
                  PEERS GLOBAL
                </p>
              </div>

              {/* Stacked Photo with Cursive Overlay */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 h-[220px] sm:h-[240px] group">
                <Image
                  src="/images/who-we-are-friends.jpg"
                  alt="Executive leaders discussing regional expansion"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-4 right-4 text-right text-white z-10">
                  <p
                    className="text-lg sm:text-xl font-light italic leading-tight text-white drop-shadow-md"
                    style={{ fontFamily: 'var(--font-script)' }}
                  >
                    More Cities.
                    <br />
                    More Circles.
                    <br />
                    More Impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: WHERE THE COMMUNITY ACTUALLY GROWS ───────────────── */}
      <section className="py-16 sm:py-20 bg-[#FDFBF7] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
                  — WHERE THE COMMUNITY ACTUALLY GROWS —
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 tracking-tight leading-tight mt-2">
                  An Executive Director is where the map moves.
                </h2>
              </div>

              <p className="text-base text-slate-600 leading-relaxed">
                Circles do not appear on their own. Cities do not build
                themselves. You identify the opportunity, find the right
                Founder, support them through the launch, and hold the standard
                afterwards.
              </p>

              <p className="text-base sm:text-lg font-serif italic text-slate-900 leading-relaxed border-l-2 border-[#0062D2] pl-4">
                You take Peers Global into a city where nobody has heard of it,
                and eighteen months later there is a thriving community of
                entrepreneurs. That did not happen without you.
              </p>
            </div>

            {/* Right Conclave Image with Wall Badge */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 h-[280px] sm:h-[340px] group">
                <Image
                  src="/images/executive-director-conclave.jpg"
                  alt="Executive Director addressing regional leadership summit in auditorium"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                {/* Stage Screen Banner Overlay */}
                <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20 text-right z-10 max-w-[240px]">
                  <p className="text-xs font-bold text-white leading-tight">
                    Entrepreneurial Ecosystems
                  </p>
                  <p className="text-[11px] font-semibold text-sky-400 leading-tight mt-0.5">
                    Stronger Together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: WHAT THE ROLE CARRIES (SIX RESPONSIBILITIES) ─────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
              — WHAT THE ROLE CARRIES —
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-2">
              Six responsibilities. A larger impact.
            </h2>
          </div>

          {/* 6 Cards Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {SIX_RESPONSIBILITIES.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="bg-slate-50/80 hover:bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
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

      {/* ─── SECTION 5: TWO-COLUMN SECTION (WHO YOU BECOME & WHO THIS IS FOR) ── */}
      <section className="py-16 sm:py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Left Column: Who You Become */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-9 border border-slate-200/90 shadow-lg shadow-slate-200/40 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
                  — WHO YOU BECOME —
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-2 mb-4">
                  A bigger perspective. A stronger you.
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  You stop measuring a good month by your own business. You
                  start measuring it by how many entrepreneurs across your
                  territory had a better one. That shift is permanent, and it
                  changes how you see everything afterwards — including your own
                  company.
                </p>

                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
                  What the role develops:
                </h3>

                <div className="space-y-3.5 border-t border-slate-100 pt-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-800">
                      <strong>Ecosystem thinking</strong> – seeing a whole
                      market as a system of relationships
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-800">
                      <strong>Leading through leaders</strong> – multiplying
                      your impact
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-800">
                      <strong>Strategic judgement</strong> – where to focus,
                      whom to back, what will work
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-800">
                      <strong>Influence at scale</strong> – with entrepreneurs,
                      institutions and markets
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-800">
                      <strong>A legacy</strong> – a stronger region, long after
                      you step back
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Who This Is For & Role of Trust */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              {/* Top Card: Who this is for */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-md flex-1">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
                  — WHO THIS IS FOR —
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 mt-2 mb-5">
                  You might be the right fit if you are
                </h2>

                <div className="space-y-3.5 text-xs sm:text-sm border-t border-slate-100 pt-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      An experienced entrepreneur with a proven track record
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Well connected in your city, state or country
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Known for integrity, collaboration and community
                      contribution
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Willing to invest time in building others, not just your
                      own business
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Committed to growing an entrepreneurial ecosystem
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Ready to represent Peers Global on larger platforms
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Alert Card: A role of trust */}
              <div className="bg-amber-50/70 rounded-3xl p-6 border border-amber-200/90 shadow-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 border border-amber-300">
                    <Crown className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-amber-950 leading-tight">
                      A role of trust
                    </h3>
                    <p className="text-xs font-semibold text-amber-900/90 mt-0.5 mb-1.5">
                      An Executive Director who serves themselves is visible
                      immediately.
                    </p>
                    <p className="text-xs text-amber-900/80 leading-relaxed">
                      This role exists to strengthen an entire territory. It is
                      not a channel for personal business development, and it
                      cannot be used to favour your own company.
                    </p>
                  </div>
                </div>
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
                — LEAD TOMORROW —
              </span>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.1]">
                Create Stronger Regions.
                <br />
                Build a Brighter Tomorrow.
              </h2>

              <p className="text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed">
                Download the Unity App or apply to lead and take the next step.
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
                Stronger Regions
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
