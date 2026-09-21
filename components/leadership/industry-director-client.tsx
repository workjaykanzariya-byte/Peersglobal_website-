'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  Users,
  Building2,
  MapPin,
  TrendingUp,
  Quote,
  Network,
  Layers,
  Sparkles,
  Megaphone,
  BookOpen,
  Target,
  Handshake,
  Compass,
} from 'lucide-react'
import { usePageMedia } from '@/lib/hooks/use-page-media'

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
    icon: MapPin,
    value: '45+',
    label: 'Cities',
  },
  {
    icon: TrendingUp,
    value: '1M+',
    label: 'Lives to Impact',
  },
]

// ─── Right 4 Feature Pills in Section 2 ───────────────────────────────────
const FEATURE_PILLS = [
  {
    icon: Network,
    label: 'Connect',
    sublabel: 'Across Cities',
    color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
  },
  {
    icon: Layers,
    label: 'Build',
    sublabel: 'Sector Depth',
    color: 'text-blue-600 bg-blue-50 border-blue-200',
  },
  {
    icon: Sparkles,
    label: 'Create',
    sublabel: 'Real Opportunities',
    color: 'text-purple-600 bg-purple-50 border-purple-200',
  },
  {
    icon: Megaphone,
    label: 'Be the',
    sublabel: 'Industry Voice',
    color: 'text-cyan-600 bg-cyan-50 border-cyan-200',
  },
]

// ─── 3 Thumbnails in Section 2 ────────────────────────────────────────────
const THUMBNAILS = [
  {
    image: '/images/circle-roundtable-topdown.jpg',
    title: 'Industry Roundtables',
    alt: 'Entrepreneurs in an industry roundtable discussion',
  },
  {
    image: '/images/conclave.png',
    title: 'Knowledge Sessions',
    alt: 'Sector leaders in a knowledge masterclass session',
  },
  {
    image: '/images/philosophy-networking.jpg',
    title: 'National Events',
    alt: 'National industry conclave and gathering',
  },
]

// ─── What the Role Carries (5 Cards) ──────────────────────────────────────
const ROLE_CARRIES = [
  {
    icon: Users,
    title: 'You convene an entire sector',
    description:
      'Not one room. Every entrepreneur in your industry, across every city in the community.',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  {
    icon: Target,
    title: 'You create sector-level opportunity',
    description:
      'Contracts, partnerships, joint bids and market access at a scale beyond any single Circle.',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
  },
  {
    icon: BookOpen,
    title: 'You set the industry agenda',
    description:
      'What your sector learns inside Peers Global. Regulatory changes, market shifts and masterclasses.',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
  },
  {
    icon: Megaphone,
    title: 'You speak for your industry',
    description:
      'At regional and national gatherings, in media and across the ecosystem.',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
  },
  {
    icon: Handshake,
    title: "You engage the industry's leaders",
    description:
      'Senior figures, associations and institutions — with a room of serious entrepreneurs to offer them.',
    badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
  },
]

// ─── What an Industry Director Does (7 Items) ─────────────────────────────
const SEVEN_THINGS = [
  {
    num: '01',
    title: 'Connects Peers across the sector.',
    description:
      'Entrepreneurs in the same industry, in different Circles and cities, who should know each other.',
  },
  {
    num: '02',
    title: 'Builds depth.',
    description:
      'Expertise, knowledge and specialist capability available to every Peer in that industry.',
  },
  {
    num: '03',
    title: 'Creates opportunity.',
    description:
      'Contracts, partnerships, joint capability and market access at a scale beyond any single Circle.',
  },
  {
    num: '04',
    title: 'Programmes learning.',
    description:
      'Masterclasses, sessions and content for the sector across the community.',
  },
  {
    num: '05',
    title: 'Supports Industry Circles.',
    description: 'Working with Circle Directors wherever your industry sits.',
  },
  {
    num: '06',
    title: 'Represents the sector.',
    description:
      'To the community, to the industry, to institutions and to media.',
  },
  {
    num: '07',
    title: 'Grows the industry inside Peers Global.',
    description:
      'More entrepreneurs from your sector, in more cities, in more Circles.',
  },
]

export function IndustryDirectorClient() {
  const { getMedia } = usePageMedia('leadership')
  const heroMedia = getMedia({
    sectionName: 'Industry Director',
    subModuleName: 'INDUSTRY DIRECTOR HERO',
    subModuleId: 'sub-leadership-industry-director',
    fallbackUrl: '/videos/global-earth-hd.mp4',
    fallbackSourceType: 'localhost',
    fallbackTitle: 'Industry Director Ecosystem Role',
  })

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
            <span className="text-slate-800 font-semibold">Industry Director</span>
          </nav>

          {/* Hero Banner Box (Unified rounded card matching Why Join layout) */}
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
                  src={heroMedia.mediaUrl || '/videos/global-earth-hd.mp4'}
                  poster="/images/industry-director-speaker.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover object-center scale-105"
                />
              )}
              <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-white via-white/85 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />

              {/* Stage wall signage banner overlay */}
              <div className="absolute top-6 sm:top-10 right-6 sm:right-10 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-lg border border-white/50 max-w-[200px] z-20">
                <p className="text-sm font-bold text-slate-900 leading-tight">
                  Stronger Industries
                </p>
                <p className="text-xs font-semibold text-[#0062D2] leading-tight mt-0.5">
                  Stronger Entrepreneurs
                </p>
              </div>

              {/* Cursive Script Overlay */}
              <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 z-20 text-right drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] pointer-events-none select-none">
                <p
                  className="text-2xl sm:text-3xl text-white/95 leading-tight font-medium"
                  style={{ fontFamily: 'var(--font-script)' }}
                >
                  One Industry.
                </p>
                <p
                  className="text-2xl sm:text-3xl text-white/95 leading-tight mt-0.5 font-medium"
                  style={{ fontFamily: 'var(--font-script)' }}
                >
                  Many Entrepreneurs.
                </p>
                <p
                  className="text-3xl sm:text-4xl text-amber-300 font-bold leading-tight mt-0.5"
                  style={{ fontFamily: 'var(--font-script)' }}
                >
                  A Bigger Tomorrow.
                </p>
              </div>
            </div>

            {/* Left Content (Z-10) */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl flex flex-col items-start space-y-6">
                <div className="inline-flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2] bg-blue-50/80 px-3 py-1 rounded-full border border-blue-200/60">
                    — LEADERSHIP —
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-950 tracking-tight leading-[1.1]">
                  Industry Director
                </h1>

                <p className="text-2xl sm:text-3xl font-serif text-slate-800 font-medium leading-snug">
                  You carry an industry.
                </p>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                  One sector, across every Circle, every city and every country in
                  the community.
                </p>

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

      {/* ─── SECTION 2: THE BIGGER PICTURE (WITH FADE AND CARDS) ────────── */}
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
                  One sector, one person responsible for it.
                </h2>
              </div>

              <p className="text-base sm:text-lg font-serif italic text-slate-800 font-medium">
                A Circle Director leads a room. An Industry Director leads a sector.
              </p>

              <p className="text-base text-slate-600 leading-relaxed">
                You hold one industry across the entire community — every Circle
                in every city where entrepreneurs from that sector sit.
                Manufacturing. Real estate. Healthcare. Technology. Education.
                Whichever industry you have spent your career inside.
              </p>

              <p className="text-base text-slate-600 leading-relaxed">
                Your responsibility is that industry’s strength within Peers
                Global. The depth of expertise available in it, the connections
                between entrepreneurs who would never otherwise meet, the
                opportunities that only appear when a whole sector is organised
                rather than scattered.
              </p>

              {/* Blue Frosted Quote Card */}
              <div className="bg-gradient-to-br from-blue-50/90 to-sky-50/50 rounded-2xl p-6 sm:p-7 border border-blue-100 shadow-sm relative overflow-hidden">
                <Quote className="w-8 h-8 text-[#0062D2] mb-3 opacity-80" />
                <p className="text-base sm:text-lg font-serif italic text-slate-900 leading-relaxed">
                  “A stronger industry creates stronger businesses, and
                  stronger businesses create a stronger world.”
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-[#0062D2] mt-4">
                  PEERS GLOBAL
                </p>
              </div>
            </div>

            {/* Right Visual Showcase with 4 Pills & 3 Thumbnails */}
            <div className="lg:col-span-6 space-y-4">
              {/* Main Top Photo with 4 Feature Pills */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/90 bg-slate-900 group">
                <div className="relative w-full h-[260px] sm:h-[300px]">
                  <Image
                    src="/images/who-we-are-friends.jpg"
                    alt="Entrepreneurs collaborating across industry sectors"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-950/60" />

                  {/* Top Right PeersGlobal Emblem & Cursive */}
                  <div className="absolute top-4 right-4 text-right text-white">
                    <div className="inline-flex items-center gap-1.5 bg-slate-950/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 mb-2">
                      <Image
                        src="/images/logo-icon-only.png"
                        alt="Peers Global Emblem"
                        width={18}
                        height={18}
                        className="rounded-full"
                      />
                      <span className="text-[11px] font-bold tracking-tight text-white">
                        PeersGlobal
                      </span>
                    </div>
                    <p
                      className="text-sm sm:text-base font-light italic leading-tight text-slate-200 drop-shadow-md"
                      style={{ fontFamily: 'var(--font-script)' }}
                    >
                      Ideas
                      <br />
                      Connections
                      <br />
                      Collaborations
                      <br />
                      Impact
                    </p>
                  </div>
                </div>

                {/* 2x2 Grid of 4 Feature Pills Overlaid on Card */}
                <div className="p-4 sm:p-5 bg-white border-t border-slate-100 grid grid-cols-2 gap-3 sm:gap-4">
                  {FEATURE_PILLS.map((pill) => {
                    const Icon = pill.icon
                    return (
                      <div
                        key={pill.sublabel}
                        className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl bg-slate-50/90 border border-slate-200/70 hover:border-blue-300 hover:bg-white transition-all shadow-sm"
                      >
                        <div
                          className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border ${pill.color}`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                            {pill.label}
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-slate-900 leading-tight block">
                            {pill.sublabel}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Row of 3 Thumbnails: Roundtables, Knowledge, Events */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {THUMBNAILS.map((thumb) => (
                  <div
                    key={thumb.title}
                    className="relative rounded-xl overflow-hidden shadow-sm border border-slate-200 group h-24 sm:h-28"
                  >
                    <Image
                      src={thumb.image}
                      alt={thumb.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2 text-center">
                      <span className="text-[11px] sm:text-xs font-semibold text-white leading-tight block drop-shadow-md">
                        {thumb.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: WHAT THE ROLE CARRIES (5 CARDS - HOMEPAGE DARK CONSTELLATION THEME) ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#070D18] via-[#0B1528] to-[#0A101D] py-20 sm:py-24 lg:py-28 text-white border-b border-slate-800/80">
        {/* Background Glow & Atmospheric Orbs */}
        <div aria-hidden className="pointer-events-none absolute top-1/4 left-10 size-[320px] rounded-full bg-blue-600/12 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute bottom-10 right-10 size-[380px] rounded-full bg-cyan-500/8 blur-[140px]" />
        <div aria-hidden className="pointer-events-none absolute top-10 right-1/3 size-[250px] rounded-full bg-indigo-600/8 blur-[100px]" />

        {/* Constellation Star Particle Overlay */}
        <svg viewBox="0 0 1400 600" className="absolute inset-0 size-full pointer-events-none opacity-20" preserveAspectRatio="none">
          <g fill="#38BDF8">
            <circle cx="80" cy="60" r="1.5" /><circle cx="200" cy="130" r="1" /><circle cx="340" cy="45" r="2" />
            <circle cx="500" cy="100" r="1.2" /><circle cx="680" cy="35" r="1.5" /><circle cx="850" cy="110" r="1" />
            <circle cx="1020" cy="60" r="2" /><circle cx="1180" cy="160" r="1.2" /><circle cx="1340" cy="80" r="1.5" />
            <circle cx="150" cy="500" r="1.2" /><circle cx="400" cy="540" r="1.8" /><circle cx="640" cy="560" r="1" />
            <circle cx="900" cy="520" r="1.5" /><circle cx="1100" cy="550" r="1" /><circle cx="70" cy="320" r="1" />
            <circle cx="310" cy="270" r="1.8" /><circle cx="760" cy="300" r="1.2" /><circle cx="1260" cy="360" r="1" />
          </g>
          <g stroke="#38BDF8" strokeWidth="0.5" opacity="0.35" fill="none">
            <line x1="80" y1="60" x2="200" y2="130" /><line x1="200" y1="130" x2="340" y2="45" />
            <line x1="500" y1="100" x2="680" y2="35" /><line x1="850" y1="110" x2="1020" y2="60" />
            <line x1="1020" y1="60" x2="1180" y2="160" />
          </g>
        </svg>

        {/* Orbit rings decorative */}
        <div className="pointer-events-none absolute -bottom-24 -left-20 size-[380px] opacity-20">
          <svg viewBox="0 0 400 400" className="size-full stroke-cyan-400/30 fill-none">
            <circle cx="100" cy="300" r="260" strokeWidth="1" strokeDasharray="6 6" />
            <circle cx="100" cy="300" r="210" strokeWidth="1" />
            <circle cx="100" cy="300" r="160" strokeWidth="1" />
            <circle cx="100" cy="90" r="3.5" fill="#38bdf8" className="animate-pulse" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-14 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-cyan-400 mb-3.5">
              <span className="w-5 h-px bg-cyan-400" />
              WHAT THE ROLE CARRIES
              <span className="w-5 h-px bg-cyan-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              More than a title. A bigger responsibility.
            </h2>
          </div>

          {/* 5 Cards in a Responsive Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {ROLE_CARRIES.map((role) => {
              const Icon = role.icon
              return (
                <div
                  key={role.title}
                  className="rounded-3xl border border-slate-700/60 bg-gradient-to-br from-[#0B1528] via-[#0F1D38] to-[#070D18] p-6 text-white shadow-[0_20px_50px_rgba(11,21,40,0.35)] hover:border-cyan-500/50 hover:shadow-[0_25px_60px_rgba(56,189,248,0.12)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Subtle glass reflection */}
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.06] via-transparent to-black/30" />

                  <div className="relative z-10">
                    <div className="size-11 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-cyan-500/25 transition-all shadow-inner">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="font-serif text-base font-bold text-white mb-2 leading-snug">
                      {role.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {role.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: TWO-COLUMN SECTION (WHO YOU BECOME & 7 RESPONSIBILITIES) ── */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Column: Who You Become */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
                  — WHO YOU BECOME —
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-2">
                  A wider view. A stronger you.
                </h2>
              </div>

              <p className="text-base text-slate-700 leading-relaxed">
                You will see your own industry from thirty angles instead of
                one.
              </p>

              <p className="text-base text-slate-600 leading-relaxed">
                Every entrepreneur in your sector across the community brings
                you their view — the manufacturer in another state, the business
                three years ahead of you, the one entering a market you are
                considering.
              </p>

              <p className="text-base sm:text-lg font-serif font-bold text-slate-900 leading-relaxed border-l-2 border-[#0062D2] pl-4">
                You will understand your own industry better than almost anyone
                operating inside it. Not from research, but from listening to it
                every month.
              </p>

              <p className="text-base text-slate-600 leading-relaxed">
                Your name will begin to travel. Entrepreneurs in your sector
                will know it in cities you have never visited, because you
                connected two of them last year and they told a third.
              </p>

              <p className="text-base text-slate-600 leading-relaxed">
                Sector standing follows the person, and it stays with you
                wherever your business goes.
              </p>

              {/* Quote Box */}
              <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200 flex items-start gap-4">
                <Quote className="w-7 h-7 text-[#0062D2] shrink-0 opacity-80" />
                <p className="text-sm sm:text-base font-serif italic text-slate-800 leading-snug">
                  “A recognised industry voice is one of the most valuable
                  positions a business owner can hold.”
                </p>
              </div>
            </div>

            {/* Right Column: Seven Things One Stronger Industry */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
                  — WHAT AN INDUSTRY DIRECTOR DOES —
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-2">
                  Seven things. One stronger industry.
                </h2>
              </div>

              {/* 7 Numbered Points */}
              <div className="space-y-4">
                {SEVEN_THINGS.map((item) => (
                  <div
                    key={item.num}
                    className="flex items-start gap-4 p-3.5 rounded-xl hover:bg-slate-50/70 transition-colors"
                  >
                    <span className="w-8 h-8 rounded-full bg-blue-50 text-[#0062D2] font-bold text-xs flex items-center justify-center shrink-0 border border-blue-200 mt-0.5 shadow-sm">
                      {item.num}
                    </span>
                    <div className="space-y-0.5">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Explore Industries CTA button */}
              <div className="pt-2">
                <Link
                  href="/circles"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-[#0062D2] font-semibold text-sm border border-blue-300 shadow-sm hover:bg-blue-50 transition-all duration-200"
                >
                  <span>Explore Industries</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: CLOSING HERO BANNER — Royal Blue Theme (Preserving Exact Structure) ─── */}
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
                — READY TO LEAD —
              </span>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.1]">
                Take Your Industry Further.
              </h2>

              <p className="text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed">
                Download the Unity App or apply to lead and create a lasting impact.
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
