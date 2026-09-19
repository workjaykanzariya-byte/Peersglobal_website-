'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  Factory,
  Building2,
  Laptop,
  ShieldPlus,
  GraduationCap,
  Palette,
  HeartHandshake,
  Layers,
  Leaf,
  ArrowRight,
  ChevronRight,
  Users,
  MapPin,
  CheckCircle2,
  Lightbulb,
  Lock,
  Star,
  TrendingUp,
  MessageCircle,
  Globe,
  Target,
} from 'lucide-react'

// ─── Nine Industry Circle Categories ────────────────────────────────────────
const INDUSTRY_CIRCLES = [
  {
    slug: 'manufacturing-engineering',
    name: 'Manufacturing & Engineering',
    shortName: 'Manufacturing',
    icon: Factory,
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    accent: '#EA580C',
    description:
      'Industrial promoters, OEM suppliers, plant owners, machinery manufacturers, and engineering firm founders.',
    who: 'Plant owners, OEM suppliers, industrial promoters, engineering firm founders.',
    why: 'Your pricing, your margins, your compliance cycles — the room already understands them. No translation needed.',
    tags: ['OEM', 'Plant owners', 'Engineering firms', 'Industrial'],
  },
  {
    slug: 'real-estate-construction',
    name: 'Real Estate, Construction & Infrastructure',
    shortName: 'Real Estate',
    icon: Building2,
    color: 'text-sky-600',
    bg: 'bg-sky-50',
    accent: '#0284C7',
    description:
      'Real estate developers, civil contractors, structural engineers, architects, and building material suppliers.',
    who: 'Developers, civil contractors, architects, structural engineers, material suppliers.',
    why: 'Project cycles, land acquisition, contractor networks — your peers carry identical pressures and solve them together.',
    tags: ['Developers', 'Contractors', 'Architects', 'Infrastructure'],
  },
  {
    slug: 'technology-it-digital',
    name: 'Technology, IT & Digital Services',
    shortName: 'Technology',
    icon: Laptop,
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    accent: '#7C3AED',
    description:
      'SaaS founders, IT export company owners, AI developers, cybersecurity heads, and digital agencies.',
    who: 'SaaS founders, IT exporters, AI builders, cybersecurity heads, digital agencies.',
    why: 'Talent acquisition, product-market fit, global client acquisition — conversations that require no preamble.',
    tags: ['SaaS', 'AI', 'IT Export', 'Cybersecurity'],
  },
  {
    slug: 'healthcare-wellness-life-sciences',
    name: 'Healthcare, Wellness & Life Sciences',
    shortName: 'Healthcare',
    icon: ShieldPlus,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    accent: '#059669',
    description:
      'Hospital owners, pharma exporters, medical device makers, diagnostic founders, and wellness promoters.',
    who: 'Hospital owners, pharma exporters, medical device makers, diagnostics founders.',
    why: 'Regulatory hurdles, distribution networks, patient trust — shared vocabulary, faster solutions.',
    tags: ['Hospitals', 'Pharma', 'Medical Devices', 'Diagnostics'],
  },
  {
    slug: 'education-training-skill-development',
    name: 'Education, Training & Skill Development',
    shortName: 'Education',
    icon: GraduationCap,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    accent: '#D97706',
    description:
      'EdTech founders, private institute owners, skill development promoters, and corporate trainers.',
    who: 'EdTech founders, institute owners, skill development leaders, corporate trainers.',
    why: 'Curriculum gaps, accreditation hurdles, student acquisition — a room that runs on outcomes.',
    tags: ['EdTech', 'Institutes', 'Skill Dev', 'Trainers'],
  },
  {
    slug: 'lifestyle-fashion-events',
    name: 'Events, Fashion, Apparel & Lifestyle',
    shortName: 'Lifestyle',
    icon: Palette,
    color: 'text-pink-600',
    bg: 'bg-pink-50',
    accent: '#DB2777',
    description:
      'Textile manufacturers, fashion brand owners, event management promoters, and lifestyle retail heads.',
    who: 'Textile manufacturers, fashion brand owners, event management founders, lifestyle retail heads.',
    why: 'Trend cycles, vendor trust, retail expansion — peers who understand seasonality and speed.',
    tags: ['Fashion', 'Textiles', 'Events', 'Lifestyle Retail'],
  },
  {
    slug: 'csr-ngos-impact',
    name: 'CSR, NGOs, Impact & Nation-Building',
    shortName: 'CSR & Impact',
    icon: HeartHandshake,
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    accent: '#E11D48',
    description:
      'CSR directors, non-profit founders, social impact pioneers, and public sector development partners.',
    who: 'CSR directors, NGO founders, social impact leaders, government development partners.',
    why: 'Grant sourcing, impact measurement, policy linkage — a room built around purpose, not just profit.',
    tags: ['CSR', 'NGOs', 'Social Impact', 'Nation Building'],
  },
  {
    slug: 'franchise-licensing',
    name: 'Franchise & Licensing',
    shortName: 'Franchise',
    icon: Layers,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    accent: '#4F46E5',
    description:
      'Franchise brand owners, master licensees, multi-unit retail operators, and brand licensing strategists.',
    who: 'Franchise brand owners, master licensees, multi-unit operators, licensing strategists.',
    why: 'Territory conflicts, franchise agreements, unit economics — dealt with by people who have already solved them.',
    tags: ['Franchise', 'Licensing', 'Multi-unit', 'Retail'],
  },
  {
    slug: 'sustainable-esg',
    name: 'Sustainable & ESG Business',
    shortName: 'ESG & Green',
    icon: Leaf,
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    accent: '#0D9488',
    description:
      'Renewable energy founders, EV ecosystem leaders, waste management promoters, and ESG compliance heads.',
    who: 'Renewable energy founders, EV ecosystem leaders, waste management heads, ESG compliance officers.',
    why: "Carbon credit markets, ESG reporting mandates, green financing — a forward room solving tomorrow's problems.",
    tags: ['Renewable', 'EV', 'ESG', 'Sustainability'],
  },
]

// ─── Why Sector Matters ───────────────────────────────────────────────────
const SECTOR_REASONS = [
  {
    icon: MessageCircle,
    color: 'text-[#0062D2]',
    bg: 'bg-[#EFF6FF]',
    title: 'You can speak the full sentence.',
    body: "In a mixed room, you spend half your time explaining context. In a sector room, you don't. You say what matters and the room responds to it.",
  },
  {
    icon: TrendingUp,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    title: 'Shared problems get real answers.',
    body: 'When five people in the room are fighting the same regulatory change, you solve it together — not alone. Depth of industry creates depth of solution.',
  },
  {
    icon: Globe,
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    title: 'Your credibility precedes you.',
    body: 'When your Circle peers introduce you to their network, your sector expertise introduces itself. No pitch needed.',
  },
]

const WHAT_HAPPENS = [
  'Sector-specific business presentations',
  'Industry regulation and policy conversations',
  'Warm introductions within and across sectors',
  'Collaborative problem-solving on shared challenges',
  'Strategic roundtables on sector growth',
  'Access to the global Peers network through Unity',
]

export function IndustryPageClient() {
  const [activeCircle, setActiveCircle] = useState<string | null>(null)

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0F172A] selection:bg-[#0062D2] selection:text-white font-sans">

      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden bg-[#FAFBFD] text-slate-900 pt-6 sm:pt-10 pb-12 sm:pb-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium tracking-wide mb-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <ChevronRight className="size-3.5 text-slate-400" />
            <Link href="/circles" className="hover:text-slate-900 transition-colors">Circles</Link>
            <ChevronRight className="size-3.5 text-slate-400" />
            <span className="text-[#0062D2] font-semibold">Industry Circles</span>
          </div>

          {/* Hero Banner */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[36px] bg-white border border-slate-200/80 shadow-sm min-h-[500px] lg:min-h-[560px] flex items-center">

            {/* Fade Video Layer */}
            <div
              className="absolute top-0 right-0 bottom-0 w-full sm:w-[65%] lg:w-[60%] overflow-hidden pointer-events-none"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.5) 25%, black 50%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.5) 25%, black 50%)',
              }}
            >
              <video
                src="/videos/homepage-hero-bg.mp4"
                poster="/images/circles-hero-new.jpg"
                autoPlay
                loop
                muted
                playsInline
                className="size-full object-cover object-center"
              />
              <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white via-white/85 via-30% to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none" />

              {/* Script top-right */}
              <div className="absolute top-6 sm:top-8 right-6 sm:right-8 z-20 text-right drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] pointer-events-none select-none">
                <p className="text-xl sm:text-2xl text-white/95 leading-tight" style={{ fontFamily: 'var(--font-script)' }}>
                  Different Industries
                </p>
                <p className="text-xl sm:text-2xl text-white/95 leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Same Purpose
                </p>
                <p className="text-2xl sm:text-3xl text-amber-300 font-medium leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Greater Impact
                </p>
              </div>

              {/* Frosted glass pill bottom-right */}
              <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-20 pointer-events-none select-none">
                <div className="rounded-xl border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2.5 shadow-lg text-left">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/70">
                    9 SECTORS • CATEGORY EXCLUSIVE
                  </p>
                  <p className="text-xs font-bold tracking-wider text-white">
                    YOUR INDUSTRY. YOUR ROOM.
                  </p>
                </div>
              </div>
            </div>

            {/* Left Content Area */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl lg:max-w-2xl flex flex-col items-start">

                <div className="flex items-center gap-3 mb-4">
                  <span className="h-0.5 w-6 bg-[#0062D2]" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                    INDUSTRY CIRCLES
                  </span>
                </div>

                <h1 className="font-serif text-4xl sm:text-6xl lg:text-[68px] font-normal text-slate-900 tracking-tight leading-[1.08] mb-4">
                  Industry Circles
                </h1>

                <p className="text-xl sm:text-2xl text-slate-800 font-bold leading-snug mb-3">
                  A room where nobody needs your business explained to them.
                </p>

                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-8 max-w-lg">
                  Nine sectors. Each with its own Circle, its own language and its own Peers who already understand your market from the inside.
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-10">
                  <Link
                    href="/circles/find"
                    className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-7 py-3.5 text-sm font-semibold shadow-lg shadow-blue-600/25 transition-all hover:scale-105 inline-flex items-center gap-2"
                  >
                    <span>Find a Circle Near You</span>
                    <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    href="/circles"
                    className="rounded-full border border-slate-300 hover:border-slate-400 bg-white/90 backdrop-blur-sm text-slate-800 px-7 py-3.5 text-sm font-semibold transition-all hover:scale-105 shadow-2xs"
                  >
                    Visit as a Guest
                  </Link>
                </div>

                {/* Stat Band */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full max-w-lg">
                  <div className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-2xl bg-[#F0F7FF] border border-[#DCEBFE]">
                    <div className="size-9 rounded-full bg-white flex items-center justify-center text-[#0062D2] shadow-2xs shrink-0">
                      <Factory className="size-4" />
                    </div>
                    <div>
                      <div className="font-bold text-base sm:text-lg text-[#0F172A] leading-none">9</div>
                      <div className="text-[11px] text-slate-500 font-medium mt-1">Sectors</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-2xl bg-[#F0F7FF] border border-[#DCEBFE]">
                    <div className="size-9 rounded-full bg-white flex items-center justify-center text-[#0062D2] shadow-2xs shrink-0">
                      <Lock className="size-4" />
                    </div>
                    <div>
                      <div className="font-bold text-base sm:text-lg text-[#0F172A] leading-none">1</div>
                      <div className="text-[11px] text-slate-500 font-medium mt-1">Per category</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-2xl bg-[#F0F7FF] border border-[#DCEBFE]">
                    <div className="size-9 rounded-full bg-white flex items-center justify-center text-[#0062D2] shadow-2xs shrink-0">
                      <MapPin className="size-4" />
                    </div>
                    <div>
                      <div className="font-bold text-base sm:text-lg text-[#0F172A] leading-none">45+</div>
                      <div className="text-[11px] text-slate-500 font-medium mt-1">Cities</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: WHY SECTOR MATTERS */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-left mb-3">
            <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
              — WHY SECTOR MATTERS —
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight mb-6">
                Why sector matters
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
                A Circle built around a shared industry is not a networking event. It is a room of people who already understand your business from the inside.
              </p>
              <p className="text-base sm:text-lg text-slate-800 font-semibold leading-relaxed mb-4">
                Your margins, your regulatory environment, your supply chain pressure, your customer acquisition logic.{' '}
                <span className="font-normal text-slate-600">When the room already has this context, conversations go further and faster.</span>
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                That is the advantage of an Industry Circle. Not just people who understand business — people who understand <em>your</em> business.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative p-8 sm:p-10 rounded-3xl bg-[#F0F7FF] border border-[#DCEBFE] text-slate-900 shadow-sm overflow-hidden">
                <div className="absolute top-1/2 -right-12 -translate-y-1/2 w-36 h-36 rounded-full border border-dashed border-[#0062D2]/30 pointer-events-none" />
                <div className="absolute top-6 right-6 size-2.5 rounded-full bg-[#0062D2]/40 pointer-events-none" />
                <div className="absolute bottom-6 left-6 size-2 rounded-full bg-[#0062D2]/40 pointer-events-none" />
                <div className="relative z-10">
                  <span className="font-serif text-5xl sm:text-6xl text-[#0062D2] leading-none block mb-2">"</span>
                  <p className="font-serif text-xl sm:text-2xl text-[#0F172A] font-bold leading-snug mb-6">
                    The right room is the one that already knows the language you speak.
                  </p>
                  <Link
                    href="/the-idea"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0062D2] hover:text-[#0052B4] tracking-wider uppercase"
                  >
                    <span>THE PEERS IDEA</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Three reason cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {SECTOR_REASONS.map((reason) => {
              const Icon = reason.icon
              return (
                <div key={reason.title} className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs flex flex-col items-start">
                  <div className={`size-11 rounded-full ${reason.bg} ${reason.color} flex items-center justify-center mb-5`}>
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#0F172A] mb-2">{reason.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{reason.body}</p>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* SECTION 3: THE NINE INDUSTRY CIRCLES */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-left mb-2">
                <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
                  — THE NINE INDUSTRY CIRCLES —
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight">
                The nine Industry Circles
              </h2>
            </div>
            <div className="text-right">
              <div
                className="text-[#0062D2] text-2xl sm:text-3xl font-normal leading-tight select-none pointer-events-none"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                One seat.<br />
                Your category.
              </div>
            </div>
          </div>

          {/* Grid of 9 circles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRY_CIRCLES.map((circle, idx) => {
              const Icon = circle.icon
              const isActive = activeCircle === circle.slug
              return (
                <div
                  key={circle.slug}
                  className={`group p-7 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col ${
                    isActive
                      ? 'bg-[#0062D2] border-[#0062D2] text-white shadow-xl shadow-blue-600/20'
                      : 'bg-white border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-slate-300'
                  }`}
                  onClick={() => setActiveCircle(isActive ? null : circle.slug)}
                >
                  {/* Top row: Icon + number */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className={`size-12 rounded-full flex items-center justify-center transition-all ${
                        isActive ? 'bg-white/20 text-white' : `${circle.bg} ${circle.color}`
                      }`}
                    >
                      <Icon className="size-6" />
                    </div>
                    <span className={`text-xs font-bold tracking-widest uppercase ${isActive ? 'text-white/60' : 'text-slate-400'}`}>
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className={`font-serif text-xl sm:text-2xl font-bold leading-snug mb-2 ${isActive ? 'text-white' : 'text-[#0F172A]'}`}>
                    {circle.name}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed mb-5 flex-1 ${isActive ? 'text-white/80' : 'text-slate-600'}`}>
                    {circle.description}
                  </p>

                  {isActive && (
                    <div className="mt-1 mb-5 space-y-3">
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-widest text-white/60 mb-1">Who belongs here</p>
                        <p className="text-xs text-white/90 leading-relaxed">{circle.who}</p>
                      </div>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-widest text-white/60 mb-1">Why sector depth matters</p>
                        <p className="text-xs text-white/90 leading-relaxed">{circle.why}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {circle.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${
                          isActive ? 'bg-white/15 text-white' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <Link
                      href="/circles/find"
                      onClick={(e) => e.stopPropagation()}
                      className={`text-xs font-bold inline-flex items-center gap-1.5 transition-colors ${
                        isActive ? 'text-white hover:text-white/80' : 'text-[#0062D2] hover:text-[#0052B4]'
                      }`}
                    >
                      Find a Circle
                      <ArrowRight className="size-3.5" />
                    </Link>
                    <span className={`text-[10px] font-medium ${isActive ? 'text-white/50' : 'text-slate-400'}`}>
                      {isActive ? 'Click to collapse' : 'Click to expand'}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom capsule */}
          <div className="mt-10 p-4 sm:p-5 rounded-2xl sm:rounded-full bg-white border border-[#DCEBFE] shadow-2xs flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="size-10 rounded-full bg-[#EFF6FF] text-[#0062D2] flex items-center justify-center shrink-0">
              <Lock className="size-5" />
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              <strong>Category exclusivity is guaranteed.</strong> Only one member per business category inside each Circle — which means every referral in your category flows directly to you.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 4: WHAT HAPPENS INSIDE + HOW TO JOIN */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            <div className="lg:col-span-6 flex flex-col">
              <div className="text-left mb-2">
                <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
                  — INSIDE THE ROOM —
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0F172A] tracking-tight leading-tight mb-6">
                What happens inside
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                Every Industry Circle meeting follows the same four-part agenda — structured enough to guarantee value, flexible enough to respond to what the room needs.
              </p>
              <div className="space-y-3 mb-8">
                {WHAT_HAPPENS.map((item, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <div className="size-6 rounded-full bg-[#EFF6FF] text-[#0062D2] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="size-3.5" />
                    </div>
                    <p className="text-sm text-[#0F172A] font-medium leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/circle-meeting-experience"
                className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-7 py-3 text-xs sm:text-sm font-semibold transition-all inline-flex items-center gap-2 w-fit shadow-sm"
              >
                <span>See the Meeting Agenda</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="lg:col-span-6 flex flex-col">
              <div className="text-left mb-2">
                <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
                  — HOW TO JOIN —
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0F172A] tracking-tight leading-tight mb-6">
                One step into the right room
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                Every seat in an Industry Circle is held by category. Your first step is to check whether your category is open in a Circle near you.
              </p>
              <div className="space-y-5 mb-8">
                {[
                  { step: '01', title: 'Find your sector', desc: 'Browse the nine Industry Circles and identify the one that matches your business.' },
                  { step: '02', title: 'Check your city', desc: 'See which cities have an active Circle in your sector and whether your category is open.' },
                  { step: '03', title: 'Visit as a guest', desc: 'Attend a meeting as a guest before committing. You should feel it is right before you join.' },
                  { step: '04', title: 'Claim your seat', desc: 'Apply for membership. Your category is reserved exclusively for you from day one.' },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="size-9 rounded-full bg-[#EFF6FF] text-[#0062D2] flex items-center justify-center shrink-0 font-bold text-xs">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0F172A] mb-0.5">{item.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 sm:p-5 rounded-2xl bg-[#F0F7FF] border border-[#DCEBFE] flex items-start gap-3.5">
                <Lightbulb className="size-5 text-[#0062D2] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <strong>Your first Circle is an Industry Circle</strong> and becomes your primary Circle. Most Peers add a Purpose Circle alongside it for perspective from outside their sector.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: CATEGORY EXCLUSIVITY */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-left mb-2">
            <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
              — YOUR COMPETITIVE EDGE —
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight mb-2">
            Category exclusivity
          </h2>
          <p className="text-lg font-bold text-[#0062D2] mb-3">No competition inside your Circle.</p>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed mb-10">
            Each business category is held by one member. If you hold the seat for industrial packaging, you are the only industrial packaging business in that room.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs flex flex-col items-start">
              <div className="size-11 rounded-full bg-[#EFF6FF] text-[#0062D2] flex items-center justify-center mb-5">
                <MessageCircle className="size-5" />
              </div>
              <h3 className="text-base font-bold text-[#0F172A] mb-2">You can speak openly.</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">Nobody is studying your pricing or waiting for you to name a client.</p>
            </div>
            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs flex flex-col items-start">
              <div className="size-11 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                <Users className="size-5" />
              </div>
              <h3 className="text-base font-bold text-[#0F172A] mb-2">You get the full flow.</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">Every requirement in your category comes to you, because there is no one else to send it to.</p>
            </div>
            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs flex flex-col items-start">
              <div className="size-11 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center mb-5">
                <Star className="size-5" />
              </div>
              <h3 className="text-base font-bold text-[#0F172A] mb-2">Giving costs you nothing.</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">With no competitor in the room, helping another Peer is straightforward — and the room reciprocates.</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 6: ADD A PURPOSE CIRCLE */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-left mb-2">
                <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">— GO FURTHER —</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight">
                Add a Purpose Circle
              </h2>
            </div>
            <div className="text-right">
              <div
                className="text-[#0062D2] text-2xl sm:text-3xl font-normal leading-tight select-none pointer-events-none"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Depth plus<br />
                Perspective
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#F0F7FF] border border-[#DCEBFE] flex flex-col justify-between hover:shadow-lg transition-all">
              <div>
                <div className="size-12 rounded-full bg-white text-[#0062D2] flex items-center justify-center shadow-2xs mb-6">
                  <Layers className="size-6" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A] mb-2">Industry Circles</h3>
                <p className="text-sm font-bold text-[#0062D2] mb-4">Built around a shared sector.</p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-8">
                  Your primary Circle. The room where your industry is already understood. Nine sectors, category-exclusive, meeting monthly on a structured agenda.
                </p>
              </div>
              <Link
                href="/circles/find"
                className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-7 py-3 text-xs sm:text-sm font-semibold transition-all inline-flex items-center justify-center gap-2 w-fit shadow-sm"
              >
                <span>Find Your Industry Circle</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-[#F0F7FF] border border-[#DCEBFE] flex flex-col justify-between hover:shadow-lg transition-all">
              <div>
                <div className="size-12 rounded-full bg-white text-emerald-600 flex items-center justify-center shadow-2xs mb-6">
                  <Target className="size-6" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A] mb-2">Purpose Circles</h3>
                <p className="text-sm font-bold text-[#0F172A] mb-4">Built around a shared goal or stage of business.</p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-8">
                  Scaling, exporting, succession, women-led business and more. People from twelve different industries solving the same problem — producing solutions your sector alone never would.
                </p>
              </div>
              <Link
                href="/circles/purpose"
                className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-7 py-3 text-xs sm:text-sm font-semibold transition-all inline-flex items-center justify-center gap-2 w-fit shadow-sm"
              >
                <span>Browse Purpose Circles</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-block px-5 py-2 rounded-full bg-slate-100 text-xs font-semibold text-slate-700 border border-slate-200">
              Most Peers eventually belong to one of each. One for depth. One for perspective.
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 7: CLOSING DARK BANNER */}
      <section className="py-16 sm:py-24 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">

            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-8 bg-white/30" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/50">
                YOUR INDUSTRY. YOUR CIRCLE.
              </span>
              <span className="h-px w-8 bg-white/30" />
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-tight mb-6">
              Find the room where your business already belongs.
            </h2>

            <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-10 max-w-xl mx-auto">
              Nine Industry Circles. Category exclusivity guaranteed. Visit as a guest before you decide.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/circles/find"
                className="rounded-full bg-white hover:bg-slate-100 text-[#0F172A] px-8 py-4 text-sm font-bold shadow-lg transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                <span>Find a Circle Near You</span>
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/circles"
                className="rounded-full border border-white/30 hover:border-white/60 text-white px-8 py-4 text-sm font-semibold transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                <span>All Circles</span>
                <ChevronRight className="size-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
