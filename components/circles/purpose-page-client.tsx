'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ClosingCtaSection } from '@/components/site/ClosingCtaSection'
import {
  Truck,
  Rocket,
  TrendingUp,
  Wallet,
  Globe,
  Store,
  Users,
  Lightbulb,
  Award,
  Leaf,
  ArrowRight,
  ChevronRight,
  MapPin,
  CheckCircle2,
  Lock,
  Star,
  Target,
  Layers,
  MessageCircle,
  Sparkles,
  BarChart3,
  ChevronDown,
  HeartHandshake,
  GraduationCap,
} from 'lucide-react'

// ─── Ten Purpose Circles ──────────────────────────────────────────────────
const PURPOSE_CIRCLES = [
  {
    slug: 'import-export-global-trade',
    name: 'Import, Export & Global Trade',
    shortName: 'Global Trade',
    icon: Truck,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    accent: '#2563EB',
    description:
      'For entrepreneurs trading across borders — exporters, importers, trading houses and businesses entering international markets.',
    who: 'Exporters, importers, trading house founders, businesses entering international markets for the first time.',
    why: 'Buyer networks in specific countries, documentation knowledge, freight partners, and open markets peers already operate in.',
    tags: ['Exporters', 'Importers', 'Trading Houses', 'Cross-border'],
  },
  {
    slug: 'startup-founders',
    name: 'Startup Founders',
    shortName: 'Startup Founders',
    icon: Rocket,
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    accent: '#7C3AED',
    description:
      'For founders building early-stage ventures — product, hiring, capital, go-to-market and the pressure of the first years.',
    who: 'D2C founders, tech innovators, seed & Series-A funded startup founders, and venture builders.',
    why: 'Access to investors, mentors, first customers, and people at the same stage who understand the specific pressure of early years.',
    tags: ['Early-stage', 'Seed & Series-A', 'D2C', 'Venture'],
  },
  {
    slug: 'sme-ipo-goal',
    name: 'SME IPO Goal',
    shortName: 'SME IPO',
    icon: TrendingUp,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    accent: '#059669',
    description:
      'For established SMEs preparing to list on NSE Emerge or BSE SME — compliance, governance, valuation and timing.',
    who: 'Promoters preparing for IPO listing, merchant bankers, corporate auditors, governance advisors.',
    why: 'Peers walking the same road — some ahead, some behind — all sharing compliance, auditor experience and what they learned.',
    tags: ['NSE Emerge', 'BSE SME', 'Governance', 'Listing'],
  },
  {
    slug: 'investors-circle',
    name: 'Investors',
    shortName: 'Investors',
    icon: Wallet,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    accent: '#D97706',
    description:
      'For investors, angel networks, family offices and entrepreneurs deploying capital — deal flow, co-investment and sector intelligence.',
    who: 'Angel investors, family offices, HNIs, entrepreneurs actively deploying capital or raising their first round.',
    why: 'Deal flow, co-investment opportunities, diligence knowledge, and direct connections between capital and businesses across the community.',
    tags: ['Angel', 'Family Office', 'Co-investment', 'Deal Flow'],
  },
  {
    slug: 'global-expansion',
    name: 'Global Expansion (Cross-Border)',
    shortName: 'Global Expansion',
    icon: Globe,
    color: 'text-sky-600',
    bg: 'bg-sky-50',
    accent: '#0284C7',
    description:
      'For businesses expanding into new countries — entity setup, local partners, hiring, regulation and market entry.',
    who: 'Founders expanding to new geographies, businesses setting up international entities, cross-border service providers.',
    why: 'Peers who have already entered a target market open it for those arriving next — local knowledge from people who paid the entry cost.',
    tags: ['Market Entry', 'Entity Setup', 'Cross-border', 'Expansion'],
  },
  {
    slug: 'msme-entrepreneurs',
    name: 'MSME Entrepreneurs',
    shortName: 'MSME',
    icon: Store,
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    accent: '#EA580C',
    description:
      'For the businesses that form the backbone of this economy — growth, credit access, digitisation and government schemes.',
    who: 'Micro, small and medium enterprise owners across manufacturing, services and trade.',
    why: 'Visibility and support that MSMEs rarely receive elsewhere — credit access, government schemes, formalisation and digital growth.',
    tags: ['Credit Access', 'Formalisation', 'Digitisation', 'Schemes'],
  },
  {
    slug: 'family-business',
    name: 'Family Business',
    shortName: 'Family Business',
    icon: HeartHandshake,
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    accent: '#E11D48',
    description:
      'For family-owned enterprises navigating succession, governance, next-generation leadership and professionalisation.',
    who: 'Founders of family businesses, second-generation leaders, family office principals, business families in transition.',
    why: 'Peers who understand a set of conversations — succession, family governance, sibling dynamics — that cannot happen in any other room.',
    tags: ['Succession', 'Governance', 'Next-gen', 'Professionalisation'],
  },
  {
    slug: 'young-entrepreneurs',
    name: 'Young Entrepreneurs (Below 35)',
    shortName: 'Young Entrepreneurs',
    icon: GraduationCap,
    color: 'text-pink-600',
    bg: 'bg-pink-50',
    accent: '#DB2777',
    description:
      'For entrepreneurs building early in life — credibility, rapid growth, leading older teams, and building a network from scratch.',
    who: 'Entrepreneurs under 35 building businesses, young founders managing rapid growth, early-career leaders.',
    why: 'Access to senior mentors across the community alongside peers who understand the specific challenges of leading young.',
    tags: ['Under 35', 'Young Founders', 'Early Career', 'Mentorship'],
  },
  {
    slug: 'leadership-transformation',
    name: 'Leadership & Transformation',
    shortName: 'Leadership',
    icon: Award,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    accent: '#4F46E5',
    description:
      'For entrepreneurs working on themselves as leaders — second-line leadership, systems, culture and the transition from operator to leader.',
    who: 'Founders professionalising their companies, entrepreneurs transitioning from operator to CEO, leaders building second-line teams.',
    why: 'The Circle for founders who have realised the business will not grow past the person running it.',
    tags: ['Second-line', 'Culture', 'Systems', 'Operator to CEO'],
  },
  {
    slug: 'sustainable-esg-goal',
    name: 'Sustainable & ESG Goal',
    shortName: 'ESG Goal',
    icon: Leaf,
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    accent: '#0D9488',
    description:
      'For entrepreneurs across any industry building sustainability into their business — emissions, reporting, green capital and ESG readiness.',
    who: 'Entrepreneurs pursuing ESG compliance, businesses targeting institutional buyers requiring sustainability credentials, green capital seekers.',
    why: 'Standards knowledge, specialist funding connections, and institutional buyers who require sustainability credentials — from peers who already have them.',
    tags: ['ESG Reporting', 'Green Capital', 'Emissions', 'Sustainability'],
  },
]

// ─── What a Purpose Circle gives you ─────────────────────────────────────
const PURPOSE_BENEFITS = [
  {
    icon: Lightbulb,
    color: 'text-[#0062D2]',
    bg: 'bg-[#EFF6FF]',
    title: 'Solutions from outside your industry.',
    body: 'Approaches your sector has never tried. Someone solved your hiring problem using a method from a completely unrelated field.',
  },
  {
    icon: Users,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    title: 'Shared stage, shared pressure.',
    body: 'Peers facing the same decisions in the same year. The loneliness of growth, succession or listing becomes considerably less so.',
  },
  {
    icon: Sparkles,
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    title: 'Cross-industry partnerships.',
    body: 'Joint ventures visible only when different sectors sit together. Your Circle connects you into ten industries at once.',
  },
  {
    icon: Globe,
    color: 'text-sky-600',
    bg: 'bg-sky-50',
    title: 'A wider network by default.',
    body: 'Ten industries means ten separate customer bases. A requirement one Peer cannot serve is usually served by another in the room.',
  },
  {
    icon: Target,
    color: 'text-pink-600',
    bg: 'bg-pink-50',
    title: 'Fresh eyes on old problems.',
    body: "Nobody in the room is bound by how your industry has always done it. That freedom produces genuinely new answers.",
  },
  {
    icon: HeartHandshake,
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    title: 'Peers who understand the transition.',
    body: 'Growth, succession, listing and expansion are lonely stages. The Circle is built from people going through exactly the same thing.',
  },
]

// ─── FAQ items ────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: 'Do Purpose Circles also follow one seat per category?',
    a: 'Yes. Industries are varied deliberately, and each business category still holds a single seat. This ensures the room has no internal competition.',
  },
  {
    q: 'Will referrals still happen across different industries?',
    a: 'Yes, and often more of them. Ten industries means ten separate customer bases, and a requirement one Peer cannot serve is usually served by another in the room.',
  },
  {
    q: 'Can I move between Circles as my business changes?',
    a: 'Yes. Many Peers move from Startup Founders to Leadership & Transformation, or from MSME Entrepreneurs to SME IPO Goal, as they pass from one stage to the next.',
  },
  {
    q: 'Can I join both an Industry and a Purpose Circle?',
    a: 'Yes. This is the most common pattern among established Peers — an Industry Circle for depth in their sector, and a Purpose Circle for perspective from outside it.',
  },
  {
    q: 'What if my purpose is not listed?',
    a: 'Speak to a Circle Director. If enough entrepreneurs share the same ambition, that is a Circle worth founding.',
  },
]

export function PurposePageClient() {
  const [activeCircle, setActiveCircle] = useState<string | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0F172A] selection:bg-[#0062D2] selection:text-white font-sans">

      {/* =================================================================
          SECTION 1: HERO — Signature Fade Video Background Banner
          ================================================================= */}
      <section className="relative overflow-hidden bg-[#FAFBFD] text-slate-900 pt-6 sm:pt-10 pb-12 sm:pb-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium tracking-wide mb-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <ChevronRight className="size-3.5 text-slate-400" />
            <Link href="/circles" className="hover:text-slate-900 transition-colors">Circles</Link>
            <ChevronRight className="size-3.5 text-slate-400" />
            <span className="text-[#0062D2] font-semibold">Purpose Circles</span>
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
                  Different Journeys
                </p>
                <p className="text-xl sm:text-2xl text-white/95 leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Same Ambition
                </p>
                <p className="text-2xl sm:text-3xl text-amber-300 font-medium leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Stronger Together
                </p>
              </div>

              {/* Frosted glass pill bottom-right */}
              <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-20 pointer-events-none select-none">
                <div className="rounded-xl border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2.5 shadow-lg text-left">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/70">
                    10 CIRCLES • GOAL-FIRST
                  </p>
                  <p className="text-xs font-bold tracking-wider text-white">
                    PEOPLE • IDEAS • OPPORTUNITIES
                  </p>
                </div>
              </div>
            </div>

            {/* Left Content Area */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl lg:max-w-2xl flex flex-col items-start">

                <div className="flex items-center gap-3 mb-4">
                  <span className="h-0.5 w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    PURPOSE CIRCLES
                  </span>
                </div>

                <h1 className="font-serif text-4xl sm:text-6xl lg:text-[68px] font-normal text-slate-900 tracking-tight leading-[1.08] mb-4">
                  Purpose Circles
                </h1>

                <p className="text-xl sm:text-2xl text-slate-800 font-bold leading-snug mb-3">
                  Ten industries. One shared ambition.
                </p>

                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-8 max-w-lg">
                  Circles built around where you are going, not what you sell.
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-10">
                  <Link
                    href="/circles/find"
                    className="rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white px-7 py-3.5 text-sm font-semibold shadow-lg shadow-blue-600/25 transition-all hover:scale-105 inline-flex items-center gap-2"
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
                      <Target className="size-4" />
                    </div>
                    <div>
                      <div className="font-bold text-base sm:text-lg text-[#0F172A] leading-none">10</div>
                      <div className="text-[11px] text-slate-500 font-medium mt-1">Purpose Circles</div>
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
                  <div className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-2xl bg-[#F0F7FF] border border-[#DCEBFE]">
                    <div className="size-9 rounded-full bg-white flex items-center justify-center text-[#0062D2] shadow-2xs shrink-0">
                      <Users className="size-4" />
                    </div>
                    <div>
                      <div className="font-bold text-base sm:text-lg text-[#0F172A] leading-none">120+</div>
                      <div className="text-[11px] text-slate-500 font-medium mt-1">Seats open</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =================================================================
          SECTION 2: WHY PURPOSE MATTERS
          ================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-left mb-3">
            <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
              — WHY PURPOSE MATTERS —
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* Left Narrative */}
            <div className="lg:col-span-7">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight mb-6">
                The ambition you share is bigger than the product you sell.
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
                Some challenges belong to a sector. Most do not.
              </p>

              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Taking a company public. Entering an export market for the first time. Building a family business into its next generation. Raising your first round. Growing a business at thirty with no template to follow.
              </p>

              <p className="text-base text-slate-700 leading-relaxed mb-4">
                None of these are industry problems. A manufacturer, a hospital owner and a software founder pursuing the same goal are pursuing the same goal.
              </p>

              <p className="text-base sm:text-lg text-slate-800 font-semibold leading-relaxed mb-4">
                Purpose Circles bring those entrepreneurs into one room.{' '}
                <span className="font-normal text-slate-600">When ten people from ten industries look at your challenge, you get ten genuinely different approaches.</span>
              </p>

              <p className="text-base text-slate-600 leading-relaxed italic">
                Perspective is the advantage.
              </p>
            </div>

            {/* Right Quote Box */}
            <div className="lg:col-span-5">
              <div className="relative p-8 sm:p-10 rounded-3xl bg-[#F0F7FF] border border-[#DCEBFE] text-slate-900 shadow-sm overflow-hidden">
                <div className="absolute top-1/2 -right-12 -translate-y-1/2 w-36 h-36 rounded-full border border-dashed border-[#0062D2]/30 pointer-events-none" />
                <div className="absolute top-6 right-6 size-2.5 rounded-full bg-[#0062D2]/40 pointer-events-none" />
                <div className="absolute bottom-6 left-6 size-2 rounded-full bg-[#0062D2]/40 pointer-events-none" />
                <div className="relative z-10">
                  <span className="font-serif text-5xl sm:text-6xl text-[#0062D2] leading-none block mb-2">"</span>
                  <p className="font-serif text-xl sm:text-2xl text-[#0F172A] font-bold leading-snug mb-4">
                    Different backgrounds.<br />Bigger solutions.
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    Same challenges, new countries, bigger possibilities — seen through ten different lenses.
                  </p>
                  <Link
                    href="/the-idea"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0062D2] hover:text-[#0052B4] tracking-wider uppercase"
                  >
                    <span>PEERS GLOBAL</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 3: THE TEN PURPOSE CIRCLES (Interactive Grid)
          ================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-left mb-2">
                <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
                  — OUR TEN PURPOSE CIRCLES —
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight">
                Find the Circle for your next chapter.
              </h2>
            </div>
            <div className="shrink-0">
              <Link
                href="/circles"
                className="rounded-full border border-slate-300 hover:border-[#0062D2] text-slate-700 hover:text-[#0062D2] px-5 py-2 text-xs font-semibold inline-flex items-center gap-1.5 transition-all"
              >
                View All Circles
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>

          {/* Grid: 2 rows, first row 5 cards, second row 5 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-8">
            {PURPOSE_CIRCLES.map((circle, idx) => {
              const Icon = circle.icon
              const isActive = activeCircle === circle.slug
              return (
                <div
                  key={circle.slug}
                  className={`group p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col ${
                    isActive
                      ? 'bg-[#0062D2] border-[#0062D2] text-white shadow-xl shadow-blue-600/20'
                      : 'bg-white border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-slate-300'
                  }`}
                  onClick={() => setActiveCircle(isActive ? null : circle.slug)}
                >
                  {/* Icon + number */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`size-10 rounded-full flex items-center justify-center transition-all ${
                        isActive ? 'bg-white/20 text-white' : `${circle.bg} ${circle.color}`
                      }`}
                    >
                      <Icon className="size-5" />
                    </div>
                    <span className={`text-[10px] font-bold tracking-widest uppercase ${isActive ? 'text-white/50' : 'text-slate-300'}`}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className={`font-serif text-base font-bold leading-snug mb-2 ${isActive ? 'text-white' : 'text-[#0F172A]'}`}>
                    {circle.name}
                  </h3>

                  <p className={`text-[11px] sm:text-xs leading-relaxed mb-4 flex-1 ${isActive ? 'text-white/80' : 'text-slate-500'}`}>
                    {circle.description}
                  </p>

                  {/* Expanded detail on active */}
                  {isActive && (
                    <div className="mt-1 mb-4 space-y-2.5">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-1">Who belongs here</p>
                        <p className="text-[11px] text-white/90 leading-relaxed">{circle.who}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-1">What the room gives you</p>
                        <p className="text-[11px] text-white/90 leading-relaxed">{circle.why}</p>
                      </div>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {circle.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className={`text-[9px] font-semibold px-2 py-0.5 rounded-full ${
                          isActive ? 'bg-white/15 text-white' : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href="/circles/find"
                    onClick={(e) => e.stopPropagation()}
                    className={`text-[11px] font-bold inline-flex items-center gap-1 transition-colors ${
                      isActive ? 'text-white hover:text-white/80' : 'text-[#0062D2] hover:text-[#0052B4]'
                    }`}
                  >
                    View Details
                    <ArrowRight className="size-3" />
                  </Link>
                </div>
              )
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-4">
            <Link
              href="/circles/find"
              className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-8 py-3.5 text-sm font-semibold shadow-lg shadow-blue-600/20 transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              <span>Find Your Purpose Circle</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 4: WHAT A PURPOSE CIRCLE GIVES YOU (6-card row)
          ================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-left mb-2">
            <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
              — WHAT A PURPOSE CIRCLE GIVES YOU —
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight">
              More perspectives. More possibilities.
            </h2>
            <div className="text-right shrink-0">
              <div
                className="text-[#0062D2] text-2xl sm:text-3xl font-normal leading-tight select-none pointer-events-none"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Bigger<br />Perspectives
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {PURPOSE_BENEFITS.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs flex flex-col items-start hover:shadow-md transition-shadow">
                  <div className={`size-11 rounded-full ${item.bg} ${item.color} flex items-center justify-center mb-5`}>
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#0F172A] mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.body}</p>
                </div>
              )
            })}
          </div>

          <div className="text-center">
            <Link
              href="/10-ways-of-collaboration"
              className="rounded-full border border-[#0062D2] text-[#0062D2] hover:bg-[#0062D2] hover:text-white px-7 py-3 text-sm font-semibold transition-all inline-flex items-center gap-2"
            >
              <span>Explore the 10 Ways of Collaboration</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 5: CHOOSING BETWEEN THE TWO (Comparison Table) + FAQ
          ================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* LEFT: Comparison Table */}
            <div className="lg:col-span-6">
              <div className="text-left mb-2">
                <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
                  — CHOOSING BETWEEN THE TWO —
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0F172A] tracking-tight leading-tight mb-8">
                Which Circle is right for you?
              </h2>

              {/* Comparison Table */}
              <div className="rounded-2xl border border-slate-200 overflow-hidden mb-6">
                <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200">
                  <div className="p-3 text-[11px] font-bold uppercase tracking-wider text-slate-400"></div>
                  <div className="p-3 text-center border-l border-slate-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0062D2]">Industry Circle</span>
                  </div>
                  <div className="p-3 text-center border-l border-slate-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">Purpose Circle</span>
                  </div>
                </div>

                {[
                  { label: 'Grouped by', industry: 'Your sector', purpose: 'Your goal or stage' },
                  { label: 'The room', industry: 'People who know your market', purpose: 'People who share your ambition' },
                  { label: 'Best for', industry: 'Referrals, buyers, suppliers, sector expertise', purpose: 'New thinking, cross-industry partnerships, wider reach' },
                  { label: 'Conversations', industry: 'Specific to your industry', purpose: 'Specific to your journey' },
                ].map((row, i) => (
                  <div key={row.label} className={`grid grid-cols-3 border-b border-slate-200 last:border-b-0 ${i % 2 === 1 ? 'bg-white' : ''}`}>
                    <div className="p-3 text-[11px] font-bold text-slate-500 uppercase tracking-wide flex items-start">
                      {row.label}
                    </div>
                    <div className="p-3 text-xs text-slate-700 border-l border-slate-200 leading-relaxed">
                      {row.industry}
                    </div>
                    <div className="p-3 text-xs text-slate-700 border-l border-slate-200 leading-relaxed">
                      {row.purpose}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-500 italic leading-relaxed mb-6">
                Unsure? A Circle Director will help you decide based on your business and where it currently stands.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/circles/find"
                  className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-6 py-3 text-xs font-semibold shadow-sm transition-all inline-flex items-center gap-2"
                >
                  <span>Talk to a Circle Director</span>
                  <ArrowRight className="size-3.5" />
                </Link>
                <Link
                  href="/circles/industry"
                  className="rounded-full border border-slate-300 hover:border-slate-400 text-slate-700 px-6 py-3 text-xs font-semibold transition-all inline-flex items-center gap-2"
                >
                  Browse Industry Circles
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>

            {/* RIGHT: FAQ */}
            <div className="lg:col-span-6">
              <div className="text-left mb-2">
                <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
                  — COMMON QUESTIONS —
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0F172A] tracking-tight leading-tight mb-8">
                Frequently asked questions
              </h2>

              <div className="space-y-2">
                {FAQS.map((faq, i) => {
                  const isOpen = openFaq === i
                  return (
                    <div
                      key={i}
                      className={`rounded-2xl border transition-all ${isOpen ? 'border-[#DCEBFE] bg-[#F0F7FF]' : 'border-slate-200 bg-white'}`}
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="w-full flex items-center justify-between p-5 text-left gap-4 cursor-pointer"
                      >
                        <span className={`text-sm font-semibold leading-snug ${isOpen ? 'text-[#0062D2]' : 'text-[#0F172A]'}`}>
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`size-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#0062D2]' : 'text-slate-400'}`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5">
                          <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Still have a question */}
              <div className="mt-6 p-5 rounded-2xl bg-white border border-slate-200 flex items-start gap-3.5">
                <MessageCircle className="size-5 text-[#0062D2] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-[#0F172A] mb-1">Still have a question?</p>
                  <p className="text-xs text-slate-500 leading-relaxed mb-3">
                    Speak to a Circle Director and get personalised guidance.
                  </p>
                  <Link
                    href="/circles/find"
                    className="text-xs font-bold text-[#0062D2] hover:text-[#0052B4] inline-flex items-center gap-1"
                  >
                    Contact Us
                    <ArrowRight className="size-3" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =================================================================
          SECTION 6: CLOSING CTA SECTION
          ================================================================= */}
      <ClosingCtaSection
        eyebrow="YOUR NEXT OPPORTUNITY"
        title="The answer that changes your business may come from a room where nobody does what you do."
        subtitle="Build Your Business. Build Your Relationships. Build Your Circle."
        description=""
        primaryButtonText="Find a Circle Near You"
        primaryButtonHref="/circles/find"
        secondaryButtonText="Visit as a Guest"
        secondaryButtonHref="/circles"
        secondaryButtonIcon={<ChevronRight className="size-4" />}
      />

    </div>
  )
}
