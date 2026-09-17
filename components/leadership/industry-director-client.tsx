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
  Target,
  Sparkles,
  Quote,
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
  Calendar,
  Award,
  TrendingUp,
  Briefcase,
  Layers,
  Megaphone,
  Clock,
  Compass,
  UserCheck,
  Eye,
  Radio,
  Network,
  Share2,
  AlertTriangle,
  Lightbulb,
  Download,
  ShieldAlert,
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
    value: '25+',
    label: 'Industries',
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

// ─── Role at a Glance Comparison ──────────────────────────────────────────
const COMPARISON_ROWS = [
  {
    label: 'Scope',
    circleDirector: 'One room',
    industryDirector: 'One sector, everywhere',
    regionalEd: 'One territory, all sectors',
  },
  {
    label: 'Signature',
    circleDirector: 'You grow the Circle, and everyone in it',
    industryDirector: 'You carry an industry',
    regionalEd: 'You carry a territory',
  },
  {
    label: 'Owns',
    circleDirector: 'Culture, Chairs, format, Circle growth',
    industryDirector: 'Sector depth, cross-Circle connection, industry voice',
    regionalEd: 'Circles across cities, expansion, regional culture',
  },
  {
    label: 'Develops',
    circleDirector: 'Mentoring, difficult conversations, presence',
    industryDirector: 'Sector mastery, portable standing, breadth',
    regionalEd: 'Ecosystem thinking, leading through leaders',
  },
]

// ─── The Seven Responsibilities ───────────────────────────────────────────
const RESPONSIBILITIES = [
  {
    icon: Network,
    title: 'Unite the industry',
    description: 'Bring together entrepreneurs across cities and Circles.',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
  },
  {
    icon: Lightbulb,
    title: 'Build sector depth',
    description:
      'Create meaningful collaborations, knowledge sharing and business growth.',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  {
    icon: Megaphone,
    title: 'Represent the voice',
    description:
      "Be the industry's voice within Peers Global and to the wider ecosystem.",
    badgeColor: 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200',
  },
  {
    icon: Share2,
    title: 'Drive cross-Circle connections',
    description:
      'Help Peers collaborate across regions, countries and adjacent sectors.',
    badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  },
  {
    icon: Calendar,
    title: 'Lead industry initiatives',
    description:
      'Conferences, roundtables, research, media and special programmes.',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
  },
  {
    icon: UserCheck,
    title: 'Grow future leaders',
    description:
      'Identify and mentor entrepreneurs for Circle leadership roles.',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  },
  {
    icon: TrendingUp,
    title: "Strengthen the industry's impact",
    description:
      'Ensure more businesses, jobs and opportunities are created.',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
  },
]

// ─── FAQ Data ─────────────────────────────────────────────────────────────
const FAQS = [
  {
    question: 'How is an Industry Director selected?',
    answer:
      'Industry Directors are appointed from established business owners with recognised domain authority, an active track record of contribution within Peers Global, and demonstrable integrity. Appointments are reviewed and ratified by the Global Executive Board.',
  },
  {
    question: 'Can I be an Industry Director and a Circle Director?',
    answer:
      'Generally, no. Both roles require dedicated presence and focus. A Circle Director leads one room vertically every month, while an Industry Director moves horizontally across multiple cities and Circles within a specific sector. Holding both simultaneously compromises the attention each community deserves.',
  },
  {
    question: 'How many Industry Directors are there?',
    answer:
      'There is typically one Industry Director per key sector nationally (e.g. Technology, Manufacturing, Healthcare, Real Estate, Retail). As our international footprint expands, regional industry verticals may also be appointed.',
  },
  {
    question: 'What is the time commitment?',
    answer:
      'The commitment is estimated at 8 to 12 hours per month. This includes convening national sector roundtables, collaborating with Circle Directors, curating Masterclasses, and engaging with national media coverage via the Peers Global media ecosystem.',
  },
  {
    question: 'What kind of support does an Industry Director receive?',
    answer:
      'You receive direct support from the Peers Global Central Office, access to Unity App cross-city channel tools, executive media coverage via VyapaarJagat.com, and dedicated event coordination for cross-Circle industry roundtables.',
  },
  {
    question: 'Can I nominate someone for this role?',
    answer:
      'Yes. Peers, Circle Directors, and Regional Executive Directors can nominate prominent entrepreneurs who embody generous leadership and deep sector commitment. Nominees are invited to an alignment interview.',
  },
  {
    question: 'What happens after my term ends?',
    answer:
      'Industry Directors serve a defined two-year term, establishing a healthy rhythm of succession. Upon completing their tenure, Directors transition into the Industry Advisory Council or may be invited into Regional and Global governance boards.',
  },
]

export function IndustryDirectorClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
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
            <span className="text-slate-900 font-semibold">Industry Director</span>
          </nav>
        </div>
      </div>

      {/* ─── SECTION 1: HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-10 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
        {/* Subtle decorative background gradients */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-gradient-to-br from-blue-100/40 via-sky-50/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[350px] bg-gradient-to-tr from-amber-100/30 via-slate-100/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2] bg-blue-50/80 px-3 py-1 rounded-full border border-blue-200/60">
                  — LEADERSHIP —
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-950 tracking-tight leading-[1.1]">
                Industry Director
              </h1>

              {/* Subline */}
              <p className="text-2xl sm:text-3xl font-serif text-slate-800 font-medium leading-snug">
                You carry an industry.
              </p>

              {/* Supporting line */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                An Industry Director brings together entrepreneurs from across
                cities and Circles, strengthens sector depth, and represents
                the voice of the industry within Peers Global and beyond.
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

                <Link
                  href="/contact?intent=leadership"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-slate-800 font-medium text-sm border border-slate-300 shadow-sm hover:bg-slate-50 hover:border-slate-400 transition-all duration-200"
                >
                  <span>Apply to Lead</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>
              </div>
            </div>

            {/* Right Hero Image Gallery */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-12 gap-3.5 sm:gap-4 items-stretch">
                {/* Main Large Image: Speaker on stage */}
                <div className="col-span-7 relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 group">
                  <div className="aspect-[4/5] relative w-full h-full min-h-[380px] sm:min-h-[460px]">
                    <Image
                      src="/images/industry-director-speaker.jpg"
                      alt="Industry Director speaking to entrepreneurs at national conference"
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

                    {/* Stage wall signage badge in image */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-white/40 max-w-[170px]">
                      <p className="text-[13px] font-bold text-slate-900 leading-tight">
                        Entrepreneurs
                      </p>
                      <p className="text-[11px] font-semibold text-blue-700 leading-tight">
                        Building Stronger Industries.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stacked 2 Images on the Right */}
                <div className="col-span-5 flex flex-col gap-3.5 sm:gap-4">
                  {/* Top Image: Handshake across cities */}
                  <div className="relative flex-1 rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 group min-h-[180px] sm:min-h-[220px]">
                    <Image
                      src="/images/industry-cross-city-handshake.jpg"
                      alt="Entrepreneurs from different cities connecting and collaborating"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <p
                        className="text-base sm:text-lg font-light italic leading-tight text-white drop-shadow-md"
                        style={{ fontFamily: 'var(--font-script)' }}
                      >
                        Different Cities. One Industry. A Stronger Tomorrow.
                      </p>
                    </div>
                  </div>

                  {/* Bottom Image: Boardroom discussion */}
                  <div className="relative flex-1 rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 group min-h-[180px] sm:min-h-[220px]">
                    <Image
                      src="/images/who-we-are-friends.jpg"
                      alt="Industry leaders sharing insights and ideas"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <p
                        className="text-base sm:text-lg font-light italic leading-tight text-white drop-shadow-md"
                        style={{ fontFamily: 'var(--font-script)' }}
                      >
                        Ideas. Connections. Collaborations. Growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Metric Stats Bar */}
          <div className="mt-14 max-w-5xl mx-auto">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-200/90">
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

      {/* ─── SECTION 2: THE BIGGER PICTURE ──────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
              — THE BIGGER PICTURE —
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 tracking-tight leading-tight">
                You will understand your industry better than almost anyone in it.
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                An Industry Director sees their industry from thirty angles —
                through the entrepreneurs, challenges and opportunities across
                multiple cities, markets and business models.
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                You will understand where the industry is heading, what is
                working, what is not, and who the key players are, long before
                most people see it.
              </p>
            </div>

            {/* Right Split Box: Quote Card + Landscape Image */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-12 gap-4">
              {/* Quote Card */}
              <div className="sm:col-span-6 bg-gradient-to-br from-blue-50/80 to-sky-50/40 rounded-2xl p-6 sm:p-7 border border-blue-100 flex flex-col justify-between shadow-sm">
                <div>
                  <Quote className="w-8 h-8 text-[#0062D2] mb-4 opacity-80" />
                  <p className="text-base sm:text-lg font-serif italic text-slate-800 leading-relaxed">
                    “When entrepreneurs from an industry connect, entire markets
                    open up.”
                  </p>
                </div>
                <div className="pt-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
                    PEERS GLOBAL
                  </span>
                </div>
              </div>

              {/* Image Card: Panel Discussion */}
              <div className="sm:col-span-6 relative rounded-2xl overflow-hidden shadow-md border border-slate-200 min-h-[220px] group">
                <Image
                  src="/images/industry-panel-leaders.jpg"
                  alt="Industry leaders at cross-circle panel discussion"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p
                    className="text-base font-light italic leading-snug text-white drop-shadow-md"
                    style={{ fontFamily: 'var(--font-script)' }}
                  >
                    Industry Dialogue Real Insights. Bigger Opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: ROLE AT A GLANCE (COMPARISON MATRIX) ────────────── */}
      <section className="py-16 sm:py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
              — ROLE AT A GLANCE —
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-2">
              Three Leadership Pathways. One Community.
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              How the Industry Director fits alongside Circle Directors and
              Regional Executive Directors across our leadership ladder.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/40 border border-slate-200/80 overflow-hidden hidden md:block">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/70">
                  <th className="py-5 px-6 text-xs font-bold uppercase tracking-wider text-slate-500 w-1/4">
                    Dimension
                  </th>
                  <th className="py-5 px-6 w-1/4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-200">
                        <Users className="w-4 h-4" />
                      </div>
                      <span className="font-serif font-bold text-slate-900 text-base">
                        Circle Director
                      </span>
                    </div>
                  </th>
                  <th className="py-5 px-6 w-1/4 bg-emerald-50/40 border-x border-emerald-200/60">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center shadow-sm">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-serif font-bold text-emerald-950 text-base block">
                          Industry Director
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                          Current Focus
                        </span>
                      </div>
                    </div>
                  </th>
                  <th className="py-5 px-6 w-1/4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-200">
                        <Globe2 className="w-4 h-4" />
                      </div>
                      <span className="font-serif font-bold text-slate-900 text-base">
                        Regional Executive Director
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {COMPARISON_ROWS.map((row) => (
                  <tr
                    key={row.label}
                    className="hover:bg-slate-50/40 transition-colors"
                  >
                    <td className="py-5 px-6 font-semibold text-slate-900 bg-slate-50/40">
                      {row.label}
                    </td>
                    <td className="py-5 px-6 text-slate-700 leading-relaxed">
                      {row.circleDirector}
                    </td>
                    <td className="py-5 px-6 font-medium text-emerald-950 bg-emerald-50/20 border-x border-emerald-200/60 leading-relaxed">
                      {row.industryDirector}
                    </td>
                    <td className="py-5 px-6 text-slate-700 leading-relaxed">
                      {row.regionalEd}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Stacked Cards */}
          <div className="md:hidden space-y-6">
            {/* Industry Director Highlighted Card */}
            <div className="bg-emerald-50/60 rounded-2xl p-6 border-2 border-emerald-300 shadow-md">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-emerald-200">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-emerald-950">
                    Industry Director
                  </h3>
                  <span className="text-xs font-semibold text-emerald-700">
                    One sector, everywhere
                  </span>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-xs font-bold uppercase text-emerald-900/60 block">
                    Scope
                  </span>
                  <p className="text-slate-900 font-medium">
                    One sector, everywhere
                  </p>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase text-emerald-900/60 block">
                    Signature
                  </span>
                  <p className="text-slate-900 font-medium">
                    You carry an industry
                  </p>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase text-emerald-900/60 block">
                    Owns
                  </span>
                  <p className="text-slate-900 font-medium">
                    Sector depth, cross-Circle connection, industry voice
                  </p>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase text-emerald-900/60 block">
                    Develops
                  </span>
                  <p className="text-slate-900 font-medium">
                    Sector mastery, portable standing, breadth
                  </p>
                </div>
              </div>
            </div>

            {/* Other Roles Accordions */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <Users className="w-5 h-5 text-blue-600" />
                <h4 className="font-serif font-bold text-slate-900">
                  Circle Director
                </h4>
              </div>
              <p className="text-xs text-slate-600">
                <strong>Scope:</strong> One room <br />
                <strong>Signature:</strong> You grow the Circle, and everyone in it <br />
                <strong>Owns:</strong> Culture, Chairs, format, Circle growth <br />
                <strong>Develops:</strong> Mentoring, difficult conversations, presence
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <Globe2 className="w-5 h-5 text-purple-600" />
                <h4 className="font-serif font-bold text-slate-900">
                  Regional Executive Director
                </h4>
              </div>
              <p className="text-xs text-slate-600">
                <strong>Scope:</strong> One territory, all sectors <br />
                <strong>Signature:</strong> You carry a territory <br />
                <strong>Owns:</strong> Circles across cities, expansion, regional culture <br />
                <strong>Develops:</strong> Ecosystem thinking, leading through leaders
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: YOUR SEVEN RESPONSIBILITIES ──────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
              — YOUR SEVEN RESPONSIBILITIES —
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-2">
              What an Industry Director owns
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-1">
              Breadth, depth and a stronger industry.
            </p>
          </div>

          {/* 7 Responsibilities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {RESPONSIBILITIES.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="bg-slate-50/80 hover:bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 border transition-transform duration-300 group-hover:scale-110 ${item.badgeColor}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif font-bold text-slate-900 text-sm sm:text-base leading-snug mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200/50 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                    <span>0{idx + 1}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: WHO YOU BECOME / WHO THIS IS FOR / ACTION ─────────── */}
      <section className="py-16 sm:py-24 bg-[#FDFBF7] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Column 1: Who you become (5 cols) */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-9 border border-slate-200/90 shadow-lg shadow-slate-200/40 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center border border-purple-200/70 mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 mb-1">
                  Who you become
                </h3>
                <p className="text-sm font-semibold text-purple-700 mb-5">
                  A broader view. A stronger leader.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  You will develop a rare combination — deep industry knowledge,
                  a wide network of founders, and a standing that is recognised
                  across the sector. The perspective you gain, the people you
                  meet, and the opportunities you help create will change how
                  you see your industry and how you run your own business.
                </p>

                <div className="space-y-3.5 pt-2 border-t border-slate-100">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-slate-800">
                      A deeper understanding of your industry
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-slate-800">
                      A network across cities and markets
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-slate-800">
                      A reputation that follows you beyond your company
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-slate-800">
                      The satisfaction of strengthening an entire sector
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Who this is for & A Clear Expectation (4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Top card: Who this is for */}
              <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-md flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-200/60">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg text-slate-950">
                      Who this is for
                    </h4>
                    <p className="text-xs text-slate-500">
                      Experienced entrepreneurs with a sector mindset.
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-100 text-xs sm:text-sm">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Established business owner in the industry
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Recognised for contribution and integrity
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Willing to invest time across multiple cities
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Committed to growing other entrepreneurs
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom card: A clear expectation (Self-dealing warning) */}
              <div className="bg-rose-50/70 rounded-3xl p-6 border border-rose-200/90 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0 border border-rose-300">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-rose-950 leading-tight">
                      A clear expectation
                    </h4>
                    <p className="text-[11px] font-semibold text-rose-800 mb-2">
                      An Industry Director who serves themselves is visible immediately.
                    </p>
                    <p className="text-xs text-rose-900/80 leading-relaxed">
                      This role exists to strengthen the entire industry. It is
                      not a channel for personal business development, and it
                      cannot be used to favour your own company. The community
                      will see the difference.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Ready to take the next step? (3 cols) */}
            <div className="lg:col-span-3 bg-gradient-to-b from-blue-50/90 via-sky-50/50 to-white rounded-3xl p-7 border border-blue-200/80 shadow-md flex flex-col justify-between text-center items-center">
              <div className="space-y-4 pt-2">
                <div className="w-14 h-14 rounded-2xl bg-[#0062D2] text-white flex items-center justify-center mx-auto shadow-md shadow-blue-200">
                  <Download className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-serif font-bold text-slate-950 leading-tight">
                  Ready to take the next step?
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed max-w-[200px] mx-auto">
                  Download the Unity App or apply to lead.
                </p>
              </div>

              <div className="w-full space-y-3 pt-6">
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0062D2] text-white font-semibold text-xs shadow-md hover:bg-[#0052B4] transition-all duration-200"
                >
                  <span>Download Unity App</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <Link
                  href="/contact?intent=leadership"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white text-slate-800 font-semibold text-xs border border-slate-300 shadow-sm hover:bg-slate-50 transition-all duration-200"
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

      {/* ─── SECTION 7: CLOSING DARK BANNER (MOUNTAIN PANORAMA) ─────────── */}
      <section className="relative py-20 sm:py-28 bg-slate-950 text-white overflow-hidden">
        {/* Background Image: Mountain climber looking to the horizon */}
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
                — A STRONGER INDUSTRY —
              </span>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.1]">
                Build Your Industry.
                <br />
                Build What’s Next.
              </h2>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Join the Unity App or apply to lead and create a bigger impact together.
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

                <Link
                  href="/contact?intent=leadership"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm border border-white/25 backdrop-blur-sm transition-all duration-200"
                >
                  <span>Apply to Lead</span>
                  <ArrowRight className="w-4 h-4 text-slate-300" />
                </Link>
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
                Partnerships
                <br />
                Possibilities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
