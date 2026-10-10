'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  Quote,
  Sparkles,
  HeartHandshake,
  Users,
  Compass,
  TrendingUp,
  ShieldCheck,
  Calendar,
  Layers,
  Sprout,
  BookOpen,
  Lightbulb,
  Zap,
  Lock,
  Eye,
  MessageSquare,
  Coffee,
  UserPlus,
  CheckCircle2,
  Share2,
  Award,
  Globe2,
  Building2,
  HelpCircle,
  Heart,
  Target,
  ArrowUpRight,
  Check,
  Briefcase,
  Smartphone,
  GraduationCap,
  Scale,
} from 'lucide-react'

// ─── Communities Studied Before Building ──────────────────────────────────────
const STUDIED_COMMUNITIES = [
  'TiE',
  'BNI',
  'Rotary',
  'Lions',
  'EO',
  'YPO',
  'Vistage',
  'The Argonauts',
  'Round Tables',
]

// ─── Verified Media Appearances ──────────────────────────────────────────────
const MEDIA_APPEARANCES = [
  {
    title: 'Building Communities of Collaboration in India',
    publication: 'VyapaarJagat Dialogues',
    date: 'March 2024',
    desc: 'Keynote conversation on why MSMEs and first-generation entrepreneurs need inner advisory boards, not just networking events.',
    link: 'https://vyapaarjagat.com',
  },
  {
    title: 'From Farmer to Founder: The Philosophy of Give-First',
    publication: 'Startup Leadership Conclave',
    date: 'November 2023',
    desc: 'Sharing the life lessons of Botad, enterprise tech exits, and the founding principles behind 1M+ entrepreneurs impacted by 2030.',
    link: 'https://peersglobal.com',
  },
  {
    title: 'Recognition as Human Fuel for Entrepreneurs',
    publication: 'National MSME Summit',
    date: 'January 2023',
    desc: 'Exploring how visible recognition and emotional validation transform first-generation business owners across Tier 2 and Tier 3 cities.',
    link: 'https://peersglobal.com',
  },
]

export function FounderClient() {
  return (
    <div className="min-h-screen bg-[#FBFCFE] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="size-3.5 text-slate-400" />
          <span>About</span>
          <ChevronRight className="size-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">Dr. Pravin Parmar</span>
        </div>
      </div>

      {/* ─── SECTION 1: HERO (FOUNDER PROFILE) ─── */}
      <section className="relative overflow-hidden bg-[#FAFBFD] text-slate-900 pt-5 sm:pt-6 pb-12 sm:pb-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Master Card Hero Box */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-white via-white/95 to-slate-50 border border-slate-200/90 shadow-lg min-h-[480px] lg:min-h-[520px] p-6 sm:p-10 lg:p-12 flex items-center">
            {/* Ambient Background Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
              
              {/* Left Column: Manifesto & Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold tracking-[0.22em] uppercase text-[#0062D2]">
                    FOUNDER PROFILE &amp; VISION
                  </span>
                </div>

                <div className="space-y-2.5">
                  <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight leading-tight">
                    Dr. Pravin Parmar
                  </h1>
                  <p className="text-base sm:text-lg text-slate-700 font-semibold leading-relaxed">
                    Founder, Peers Global &amp; Vyapaar Jagat
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  <p>
                    From a farmer family in Botad to enterprise tech exits and building India&apos;s most authentic community of collaboration. <strong className="text-slate-900 font-semibold">Entrepreneurs need more than transactional networking — they need governed trust and genuine advisory rooms.</strong>
                  </p>

                  {/* 4 Founder Anchor Badges */}
                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 pt-1">
                    {[
                      { text: 'Farmer Roots in Botad', icon: Sprout },
                      { text: 'Tech Builder & Exits', icon: Briefcase },
                      { text: 'Vyapaar Jagat Creator', icon: Globe2 },
                      { text: '1 Million Mission Architect', icon: Target },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/90 text-xs font-semibold text-slate-700 flex items-center gap-2 shadow-2xs"
                      >
                        <item.icon className="size-4 shrink-0 text-[#0062D2]" />
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3.5 rounded-2xl bg-blue-50 text-xs font-semibold text-[#0062D2] border border-blue-200/60 flex items-center gap-2">
                    <Sparkles className="size-4 shrink-0 text-[#0062D2]" />
                    <span>&ldquo;You were never meant to build alone. The right people change everything.&rdquo;</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <Link
                    href="/our-story"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer uppercase tracking-wider"
                  >
                    <span>Read Our Story</span>
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/the-idea"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-slate-700 font-bold text-xs sm:text-sm border border-slate-300 shadow-2xs hover:bg-slate-50 transition-all uppercase tracking-wider"
                  >
                    <span>Explore The Idea</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Hero Visual Card */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 aspect-[4/3] group bg-slate-900 flex flex-col justify-between p-6 sm:p-7">
                  <Image
                    src="/images/founder-new.png"
                    alt="Dr. Pravin Parmar — Founder of Peers Global"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-90"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/35 to-slate-950/20 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-blue-400/40 text-[10px] font-bold text-sky-300 tracking-widest uppercase backdrop-blur-md">
                      <span className="size-1.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                      FOUNDER &amp; VISIONARY
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-mono font-bold text-white border border-white/20">
                      BOTAD &bull; AHMEDABAD
                    </span>
                  </div>

                  {/* Bottom Highlight */}
                  <div className="relative z-10 text-white space-y-1">
                    <p className="text-xs font-mono uppercase tracking-wider text-sky-300 font-bold">
                      Founder, Peers Global
                    </p>
                    <p className="text-sm sm:text-base font-bold leading-snug">
                      &ldquo;What can I do with what I have?&rdquo;
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Floating Stats Bar */}
          <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 items-center">
            {[
              { icon: Sprout, value: 'Farmer Roots', label: 'Botad, Gujarat' },
              { icon: Briefcase, value: '15+ Years', label: 'Tech & Media Building' },
              { icon: ShieldCheck, value: '9 Networks', label: 'Studied & Analysed' },
              { icon: Target, value: '1 Million', label: 'Mission 2030' },
            ].map((stat, i) => {
              const Icon = stat.icon
              return (
                <div
                  key={i}
                  className="rounded-2xl bg-white border border-slate-200/90 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="size-10 rounded-xl bg-blue-50 text-[#0062D2] border border-blue-100 flex items-center justify-center shrink-0 shadow-2xs">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                      {stat.value}
                    </div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      {stat.label}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ─── SECTION 2: BOTAD & EARLY LESSONS ─── */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Box 1: BOTAD */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="size-11 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-100 shadow-2xs">
                  <Sprout className="size-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">
                    ROOTS &amp; PHILOSOPHY
                  </span>
                  <h3 className="text-2xl font-bold text-slate-950">
                    Botad: The Farmer&apos;s Mindset
                  </h3>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  <p>
                    A farmer understands compounding investment: You prepare the soil, you plant the seed, you nurture it patiently through harsh weather, and you trust the harvest.
                  </p>
                  <div className="p-4 rounded-2xl bg-white border border-amber-200/60 text-slate-800 space-y-1 font-medium">
                    <p className="text-amber-900 font-bold text-xs uppercase tracking-wider">Give-First Architecture</p>
                    <p className="text-xs text-slate-600 font-light">
                      The same patient soil philosophy governs Peers Global: You do not demand business from people you just met. You sow value, build trust, and harvest enduring collaborative success.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200 text-xs font-bold text-amber-700 uppercase tracking-wider">
                Patience, Nurturing &amp; Compounding
              </div>
            </div>

            {/* Box 2: EARLY BUILDING & EXITS */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="size-11 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100 shadow-2xs">
                  <Compass className="size-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0062D2] block mb-1">
                    LESSONS OF THE CLIMB
                  </span>
                  <h3 className="text-2xl font-bold text-slate-950">
                    The Tech Founder Experience
                  </h3>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  <p>
                    Over 15 years building HRMS cloud tools, digital marketing platforms, and media ventures, Dr. Parmar experienced firsthand the loneliness of first-generation entrepreneurship.
                  </p>
                  <div className="p-4 rounded-2xl bg-white border border-blue-200/60 text-slate-800 space-y-1 font-medium">
                    <p className="text-[#0062D2] font-bold text-xs uppercase tracking-wider">The Hospital Corridor Turning Point</p>
                    <p className="text-xs text-slate-600 font-light">
                      Watching an entrepreneur struggle in complete isolation ignited the conviction: What if entrepreneurs had structured peer inner boards so they never had to build alone?
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200 text-xs font-bold text-[#0062D2] uppercase tracking-wider">
                From Personal Struggle to Institutional Community
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 3: 9 COMMUNITIES STUDIED ─── */}
      <section className="py-20 sm:py-28 bg-[#F8FAFD] border-b border-slate-200/80 relative overflow-hidden">
        {/* Ambient background blur */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -left-20 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          {/* Header with Eyebrow & Live Benchmarks Ribbon */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200/80">
            <div className="max-w-3xl space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  RESEARCH &amp; BENCHMARKING
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-950 tracking-tight leading-tight">
                Studying Global Community Models
              </h2>
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                Before founding PEERS GLOBAL, Dr. Parmar examined the architecture, incentives, and retention dynamics of major global business networks over 15+ years.
              </p>
            </div>

            {/* Quick Benchmark Stats Pill */}
            <div className="flex items-center gap-3 bg-white p-2.5 rounded-2xl border border-slate-200/90 shadow-2xs self-start lg:self-auto">
              <div className="px-5 py-2.5 rounded-xl bg-blue-50 border border-blue-100 text-center">
                <span className="block font-serif text-xl sm:text-2xl font-bold text-[#1D4ED8]">9 Models</span>
                <span className="text-xs uppercase font-bold text-slate-600 tracking-wider">Synthesised</span>
              </div>
              <div className="px-5 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                <span className="block font-serif text-xl sm:text-2xl font-bold text-slate-900">100+ Yrs</span>
                <span className="text-xs uppercase font-bold text-slate-600 tracking-wider">Collective History</span>
              </div>
              <div className="px-5 py-2.5 rounded-xl bg-rose-50 border border-rose-100 text-center">
                <span className="block font-serif text-xl sm:text-2xl font-bold text-[#E11D48]">100% Peer</span>
                <span className="text-xs uppercase font-bold text-slate-600 tracking-wider">Architecture</span>
              </div>
            </div>
          </div>

          {/* Rich 3-Column Luxury Benchmark Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                name: 'TiE (The Indus Entrepreneurs)',
                origin: 'Silicon Valley, 1992',
                focus: 'Tech Mentorship & Angel Networks',
                insight: 'Pioneered structured diaspora founder mentoring and cross-border investor ecosystems.',
                tag: 'Mentorship Architecture',
                badgeBg: 'bg-blue-50 text-blue-700 border-blue-100',
                accentGlow: 'group-hover:bg-blue-500/10',
              },
              {
                name: 'BNI (Business Network Int.)',
                origin: 'California, 1985',
                focus: 'Referral Dynamics & Weekly Cadence',
                insight: 'Demonstrated the power of weekly operational discipline, seat exclusivity, and structured tracking.',
                tag: 'Referral Cadence',
                badgeBg: 'bg-rose-50 text-rose-700 border-rose-100',
                accentGlow: 'group-hover:bg-rose-500/10',
              },
              {
                name: 'Rotary International',
                origin: 'Chicago, 1905',
                focus: 'Service Fellowship & Enduring Tradition',
                insight: 'Proved that a higher social purpose beyond personal profit keeps business leaders committed across decades.',
                tag: 'Service Fellowship',
                badgeBg: 'bg-amber-50 text-amber-700 border-amber-100',
                accentGlow: 'group-hover:bg-amber-500/10',
              },
              {
                name: 'Lions Clubs International',
                origin: 'Indiana, 1917',
                focus: 'Civic Impact & Grassroots Presence',
                insight: 'Exceptional deep grassroots reach across Tier 2, Tier 3, and regional industrial hubs.',
                tag: 'Grassroots Reach',
                badgeBg: 'bg-orange-50 text-orange-700 border-orange-100',
                accentGlow: 'group-hover:bg-orange-500/10',
              },
              {
                name: 'EO (Entrepreneurs\' Org)',
                origin: 'Alexandria, 1987',
                focus: 'Forum Gestalt Protocol & Confidentiality',
                insight: 'Pioneered safe-space peer forums where founders share experiences without giving unsolicited advice.',
                tag: 'Forum Protocol',
                badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-100',
                accentGlow: 'group-hover:bg-indigo-500/10',
              },
              {
                name: 'YPO (Young Presidents\' Org)',
                origin: 'Rochester, 1950',
                focus: 'Whole-Life Leadership & Peer Roundtables',
                insight: 'Addressed the emotional isolation of top enterprise leaders with confidential lifetime peer advisory boards.',
                tag: 'Executive Peer Board',
                badgeBg: 'bg-slate-100 text-slate-800 border-slate-200',
                accentGlow: 'group-hover:bg-slate-500/10',
              },
              {
                name: 'Vistage Worldwide',
                origin: 'Wisconsin, 1957',
                focus: 'Executive Coaching & Advisory Chairs',
                insight: 'Combined professional chair facilitation with small, high-accountability peer advisory groups.',
                tag: 'Facilitated Advisory',
                badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-100',
                accentGlow: 'group-hover:bg-emerald-500/10',
              },
              {
                name: 'The Argonauts',
                origin: 'Global Digital Guild',
                focus: 'Cross-Border Collaboration & Impact',
                insight: 'Showcased borderless peer collaboration for impact-driven founders and global innovators.',
                tag: 'Cross-Border Trust',
                badgeBg: 'bg-purple-50 text-purple-700 border-purple-100',
                accentGlow: 'group-hover:bg-purple-500/10',
              },
              {
                name: 'Round Tables International',
                origin: 'Norwich, 1927',
                focus: 'Young Promoters & Active Fellowship',
                insight: 'Created high-energy community bonds for next-generation rising business owners and promoters.',
                tag: 'Rising Generation',
                badgeBg: 'bg-cyan-50 text-cyan-700 border-cyan-100',
                accentGlow: 'group-hover:bg-cyan-500/10',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-blue-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle Hover Ambient Glow */}
                <div className={`absolute top-0 right-0 w-36 h-36 bg-transparent rounded-full blur-2xl ${item.accentGlow} transition-colors pointer-events-none`} />

                <div className="space-y-4 relative z-10">
                  {/* Card Header Tag */}
                  <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3.5">
                    <span className={`text-xs font-mono font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border ${item.badgeBg}`}>
                      {item.tag}
                    </span>
                    <span className="text-xs sm:text-sm font-mono font-bold text-slate-400">
                      MODEL #{String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Title & Origin */}
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl lg:text-[26px] font-serif font-bold text-slate-950 group-hover:text-[#1D4ED8] transition-colors leading-snug">
                      {item.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm font-mono text-slate-500">
                      <span>{item.origin}</span>
                      <span>&bull;</span>
                      <span className="text-slate-800 font-semibold">{item.focus}</span>
                    </div>
                  </div>

                  {/* Insight Text */}
                  <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed pt-1">
                    {item.insight}
                  </p>
                </div>

                {/* Bottom Takeaway */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm relative z-10">
                  <span className="font-bold text-slate-900 flex items-center gap-2">
                    <span className="size-2 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                    Synthesised into Peers Global
                  </span>
                  <ChevronRight className="size-4 sm:size-5 text-slate-400 group-hover:text-[#1D4ED8] group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── SECTION 4: SIGNATURE LUXURY CLOSING HERO BANNER ─── */}
      <section
        id="download-unity"
        className="relative py-20 lg:py-28 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border-t border-slate-800"
      >
        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* SVG Orbital Geometric Lines Background */}
        <div className="absolute -right-16 -top-20 bottom-0 pointer-events-none w-[420px] sm:w-[560px] lg:w-[680px] opacity-25 overflow-hidden flex items-center justify-center">
          <svg viewBox="0 0 600 600" fill="none" className="w-full h-full text-white/30" xmlns="http://www.w3.org/2000/svg">
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
            <div className="lg:col-span-8 flex flex-col items-start space-y-5">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-sky-400">
                  CONNECT WITH THE FOUNDER
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight">
                “You were never meant to build alone.”
              </h2>

              <div className="space-y-3.5 text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl">
                <p>
                  Join the 1 Million Mission. Experience the power of governed peer advisory, cross-city trade syndicates, and genuine entrepreneurial brotherhood.
                </p>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1">
                  <p className="text-sky-200 font-medium text-xs sm:text-sm">
                    • 1 Action = 1 Life Impacted · Governed Collaboration · 18 Industry Formats.
                  </p>
                  <p className="text-white font-bold text-xs sm:text-sm">Connect with Dr. Pravin Parmar today.</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-3">
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-xs sm:text-sm font-bold shadow-lg transition-all hover:scale-105 uppercase tracking-wider group cursor-pointer"
                >
                  <span>Apply to Join Peers</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="https://www.linkedin.com/in/drpravinparmar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/30 hover:border-white bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-md transition-all"
                >
                  <span>LinkedIn Profile →</span>
                </a>
              </div>
            </div>

            {/* Right Cursive Script Highlights */}
            <div className="lg:col-span-4 text-left lg:text-right select-none pointer-events-none drop-shadow-lg space-y-1">
              <p
                className="text-xl sm:text-2xl text-white/70 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Farmer.
              </p>
              <p
                className="text-xl sm:text-2xl text-white/80 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Learner.
              </p>
              <p
                className="text-xl sm:text-2xl text-white leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Founder.
              </p>
              <p
                className="text-2xl sm:text-3xl text-amber-300 font-bold leading-tight"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Servant Leader.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
