'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  ChevronRight,
  HeartHandshake,
  Users,
  Target,
  Sparkles,
  TrendingUp,
  Award,
  Building2,
  CheckCircle2,
  ShieldCheck,
  Globe2,
  Zap,
  Layers,
  Compass,
  Briefcase,
  ExternalLink,
  Clock,
  Landmark,
  ArrowUpRight,
} from 'lucide-react'

const FOCUS_AREAS = [
  {
    id: '01',
    title: 'MSME Strength',
    desc: 'The businesses that build employment across this country, supported with the visibility, knowledge and connections they are usually denied.',
    highlight: 'Over 63 million MSMEs form the backbone of India’s economy.',
    tag: 'National Backbone',
    icon: Building2,
  },
  {
    id: '02',
    title: 'Women-Led Enterprise',
    desc: 'Empowering women founders through Fempreneur to overcome financing gaps, scale barriers, and institutional prejudice.',
    highlight: 'Direct peer mentorship and market access for women founders.',
    tag: 'Fempreneur Initiative',
    icon: Sparkles,
  },
  {
    id: '03',
    title: 'Sustainable Business',
    desc: 'Accelerating circular-economy and ESG-forward initiatives through Greenpreneur and dedicated green industry Circles.',
    highlight: 'Helping sustainable enterprises find capital and pilot corporate clients.',
    tag: 'Greenpreneur & ESG',
    icon: Globe2,
  },
  {
    id: '04',
    title: 'First-Generation Entrepreneurs',
    desc: 'Supporting founders building without a family business template, an inherited network, or safety net capital behind them.',
    highlight: 'Replacing missing family mentorship with a trusted peer circle.',
    tag: 'Zero-Inheritance Builders',
    icon: Users,
  },
  {
    id: '05',
    title: 'Young Entrepreneurs',
    desc: 'Supporting founders under 30 who are building early, scaling high-velocity products, and leading teams older than themselves.',
    highlight: 'Accelerated board-level problem solving and maturity coaching.',
    tag: 'Next-Gen Leadership',
    icon: Zap,
  },
]

const SDGS = [
  {
    number: '08',
    title: 'Decent Work & Economic Growth',
    target: 'SDG 8.3 & 8.5',
    evidence:
      'By helping MSME founders avoid catastrophic capex mistakes and secure reliable B2B collaborations, member firms retain and expand formal employment across Tier 1, 2, and 3 cities.',
    badge: 'Employment & MSME Growth',
  },
  {
    number: '05',
    title: 'Gender Equality & Women’s Leadership',
    target: 'SDG 5.5',
    evidence:
      'Through the Fempreneur initiative, female business owners secure equal access to procurement supply chains, peer advisory, and institutional collaboration rooms.',
    badge: 'Equal Market Access',
  },
  {
    number: '09',
    title: 'Industry, Innovation & Infrastructure',
    target: 'SDG 9.3',
    evidence:
      'Integrating small-scale industrial enterprises into national value chains and enabling access to modern financial services, technology platforms, and market networks.',
    badge: 'Value Chain Integration',
  },
]

const MULTIPLIER_STEPS = [
  {
    step: '01',
    title: 'Founder Resilience',
    desc: 'An entrepreneur receives category-exclusive peer advisory, avoiding costly capex mistakes and isolation.',
    icon: ShieldCheck,
    color: 'text-blue-600 bg-blue-50 border-blue-100',
  },
  {
    step: '02',
    title: 'Business Expansion',
    desc: 'Through trusted collaboration and the LSR model, the business achieves sustainable, predictable revenue.',
    icon: TrendingUp,
    color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
  },
  {
    step: '03',
    title: 'Formal Employment',
    desc: 'Growing enterprises retain staff, expand teams, and provide dependable livelihoods to local families.',
    icon: Users,
    color: 'text-purple-600 bg-purple-50 border-purple-100',
  },
  {
    step: '04',
    title: 'Generational Dignity',
    desc: 'Dignified household income fuels local economies, education, and multi-generational community security.',
    icon: Sparkles,
    color: 'text-amber-600 bg-amber-50 border-amber-100',
  },
]

export function SocialImpactClient() {
  const [heroVideo, setHeroVideo] = useState('/videos/homepage-hero-bg.mp4')

  useEffect(() => {
    const loadVideo = () => {
      try {
        const saved = localStorage.getItem('peers_admin_page_media')
        if (saved) {
          const items = JSON.parse(saved)
          const target = items.find(
            (i: any) =>
              (i.pageSlug === '/foundation-social-impact' ||
                i.pageId === 'social-impact' ||
                i.pageName === 'Social Impact' ||
                i.pageSlug === '/' ||
                i.pageName === 'Home Page') &&
              i.isActive &&
              i.mediaUrl
          )
          if (target && target.mediaUrl) {
            setHeroVideo(target.mediaUrl)
          }
        }
      } catch (err) {}
    }
    loadVideo()
    window.addEventListener('storage', loadVideo)
    window.addEventListener('peers_media_updated', loadVideo)
    return () => {
      window.removeEventListener('storage', loadVideo)
      window.removeEventListener('peers_media_updated', loadVideo)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#FDFDFE] text-slate-900 font-sans selection:bg-blue-100 selection:text-[#1E4ED8]">
      {/* ─── Top Breadcrumb Navigation ─── */}
      <div className="border-b border-slate-200/70 bg-white/85 backdrop-blur-md sticky top-0 z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-[#1E4ED8] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-500">About</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold">Foundation &amp; Social Impact</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-[11px] font-medium text-slate-500">
            <span className="inline-block size-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Section 8 Non-Profit Entity: Governed &amp; Active</span>
          </div>
        </div>
      </div>

      {/* ─── Hero Section: Homepage-Style Unified Master Banner Card ─── */}
      <section className="relative pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden bg-[#FBFCFE] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-8 sm:gap-10">
          
          {/* Unified Master Hero Card (Matching Home Page Who We Are Hero Card) */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[32px] bg-white border border-slate-200/80 shadow-sm min-h-[480px] lg:min-h-[520px] flex items-center">
            
            {/* Right Media Background Layer (Fading into white on the left with live looping video) */}
            <div
              className="absolute top-0 right-0 bottom-0 w-full sm:w-[65%] lg:w-[60%] overflow-hidden pointer-events-none"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.5) 25%, black 50%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.5) 25%, black 50%)',
              }}
            >
              {/* High Definition Looping Background Video */}
              <video
                key={heroVideo}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="size-full object-cover object-center"
              >
                <source src={heroVideo} type="video/mp4" />
                <source src="/videos/homepage-hero-bg.mp4" type="video/mp4" />
                <source src="/videos/hero-background.mp4" type="video/mp4" />
              </video>

              {/* Seamless gradient overlays for signature misty fade */}
              <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white via-white/80 via-30% to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none" />

              {/* Top-Right Script Typography with Drop Shadow */}
              <div className="absolute top-6 sm:top-8 right-6 sm:right-8 z-20 text-right drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] pointer-events-none select-none">
                <p className="text-lg sm:text-2xl text-white/95 leading-tight" style={{ fontFamily: 'var(--font-script)' }}>
                  People
                </p>
                <p className="text-lg sm:text-2xl text-white/95 leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Ideas
                </p>
                <p className="text-lg sm:text-2xl text-white/95 leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Partnerships
                </p>
                <p className="text-xl sm:text-3xl text-white font-medium leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Impact
                </p>
              </div>

              {/* Bottom-Right Frosted Glass Pill */}
              <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-20 pointer-events-none select-none">
                <div className="rounded-xl border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2.5 shadow-lg text-left">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/70">
                    THE 1 MILLION MISSION
                  </p>
                  <p className="text-xs font-bold tracking-wider text-white">
                    1 ACTION = 1 LIFE IMPACTED
                  </p>
                </div>
              </div>
            </div>

            {/* Left Content Area (Overlaid on the crisp white side) */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl flex flex-col gap-5 sm:gap-6">
                
                {/* Eyebrow */}
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    SOCIAL ARCHITECTURE &amp; FOUNDATION
                  </span>
                </div>

                {/* Main Heading & Subheading in exact homepage serif hierarchy */}
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.85rem] font-normal tracking-tight text-slate-900 leading-[1.18]">
                  Social <span className="italic text-[#1E4ED8]">Impact.</span>
                  <span className="text-lg sm:text-xl lg:text-2xl text-slate-700 italic font-normal block mt-1.5 leading-snug">
                    The most effective social work we do is helping one entrepreneur help another.
                  </span>
                </h1>

                {/* Description */}
                <p className="text-sm sm:text-base leading-relaxed text-slate-600 max-w-lg font-normal">
                  Impact is not an afterthought or corporate CSR program. It is the systemic multiplier produced when business builders stop struggling in isolation.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-5 pt-1">
                  {/* Join the Mission with Peers Global Glowing Button */}
                  <div className="relative group/join-btn">
                    <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#E53935] via-[#3B82F6] to-[#1E4ED8] opacity-0 blur-md transition-all duration-500 group-hover/join-btn:opacity-80 group-hover/join-btn:blur-lg" />
                    
                    <Link
                      href="/apply"
                      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(30,78,216,0.30)] transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_8px_22px_rgba(30,78,216,0.40)] active:scale-[0.97]"
                    >
                      <span>Join the Mission</span>
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                    </Link>
                  </div>

                  <Link
                    href="/unity"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-xs transition-all duration-200 hover:bg-slate-50 hover:border-slate-400 hover:-translate-y-[2px] active:scale-[0.98]"
                  >
                    <span>Download Unity App</span>
                  </Link>
                </div>

                {/* 3 Impact Highlights matching Homepage */}
                <div className="mt-2 grid grid-cols-3 gap-4 sm:gap-6 border-t border-slate-200/80 pt-6">
                  <div>
                    <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">1M+</p>
                    <p className="text-xs text-slate-600 font-semibold leading-snug mt-1">Lives to Impact</p>
                    <p className="text-[11px] text-slate-400 font-medium">By 2030</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">100%</p>
                    <p className="text-xs text-slate-600 font-semibold leading-snug mt-1">Confirmed Data</p>
                    <p className="text-[11px] text-slate-400 font-medium">Unweighted Evidence</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">3</p>
                    <p className="text-xs text-slate-600 font-semibold leading-snug mt-1">UN SDGs Focused</p>
                    <p className="text-[11px] text-slate-400 font-medium">SDG 8, 5 &amp; 9</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* ─── Fast-Track Callout Card: 1 Action = 1 Life Impacted ─── */}
          <div className="rounded-2xl sm:rounded-[28px] bg-white border border-slate-200/80 shadow-sm p-5 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-5 transition-all duration-300 hover:shadow-md hover:border-blue-200">
            <div className="flex items-center gap-4 text-left w-full sm:w-auto">
              <div className="size-12 sm:size-14 rounded-2xl bg-blue-50 border border-blue-100/80 flex items-center justify-center text-[#1E4ED8] shrink-0 shadow-2xs">
                <HeartHandshake className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <h2 className="font-serif text-base sm:text-lg font-bold text-[#061836]">
                  1 Action = 1 Life Impacted
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 font-normal">
                  Most communities measure activity. We measure human impact — confirmed outcomes, sustained employment, and generational dignity.
                </p>
              </div>
            </div>

            <Link
              href="/1-million-mission"
              className="shrink-0 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#1E4ED8] text-white text-xs sm:text-sm font-semibold hover:bg-[#1a42c0] transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
            >
              <span>Explore 1M Mission</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ─── Section 2: The Multiplier Philosophy (Rich Split Architecture) ─── */}
      <section className="relative py-16 sm:py-24 lg:py-28 overflow-hidden bg-gradient-to-b from-[#F2F6FE]/70 via-[#F8FAFD] to-[#FFFFFF] border-b border-slate-200/80">
        {/* Soft Ambient Radial Glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-10 -left-20 h-[450px] w-[450px] rounded-full bg-blue-300/15 blur-[120px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-10 -right-20 h-[350px] w-[350px] rounded-full bg-sky-200/20 blur-[100px]"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Multiplier Philosophy Copy (6 cols) */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    THE MULTIPLIER PHILOSOPHY
                  </span>
                </div>
                
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-[#061836] tracking-tight leading-[1.18]">
                  How impact <span className="italic text-[#1E4ED8]">actually works here.</span>
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                <p className="text-base sm:text-lg font-serif italic text-slate-950 font-normal border-l-2 border-[#1E4ED8] pl-4 py-0.5">
                  &ldquo;Impact at Peers Global is not charity, and it is not separate from the business of the community.&rdquo;
                </p>
                <p>
                  A business that grows employs more people. Those people support families. Those families spend in their local economy. An entrepreneur who avoids a catastrophic mistake keeps a team employed that would otherwise have been let go.
                </p>
                <p className="font-semibold text-slate-900">
                  One introduction reaches far more than one person, and it keeps reaching for years. That is why the metric we track is <span className="text-[#1E4ED8] underline underline-offset-4">lives impacted</span> rather than simply revenue recorded.
                </p>
              </div>

              {/* Founder Multiplier Quote Box */}
              <div className="relative overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50/80 via-white to-slate-50 p-6 shadow-2xs">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    &ldquo;When an entrepreneur thrives, an entire ecosystem of vendors, employees, and families stabilizes. That is sustainable social architecture.&rdquo;
                  </p>
                  <p
                    className="text-xl sm:text-2xl text-[#1E4ED8] font-semibold select-none shrink-0"
                    style={{ fontFamily: 'var(--font-script)' }}
                  >
                    The Multiplier ✨
                  </p>
                </div>
              </div>

              <div className="pt-1">
                <Link
                  href="/1-million-mission"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#1E4ED8] hover:text-[#1a42c0] transition-colors"
                >
                  <span>Explore the 1 Million Mission Architecture</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: 4-Stage Multiplier Chain Card (6 cols) */}
            <div className="lg:col-span-6">
              <div className="p-7 sm:p-9 rounded-2xl sm:rounded-[32px] bg-white border border-slate-200/90 shadow-[0_16px_40px_rgba(30,78,216,0.06)] space-y-6">
                <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-slate-900">
                      The Impact Multiplier Chain
                    </h3>
                    <p className="text-xs text-slate-500 font-normal">
                      From peer collaboration to generational dignity.
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[11px] font-mono font-bold text-[#1E4ED8]">
                    4 STAGES
                  </span>
                </div>

                <div className="space-y-4">
                  {MULTIPLIER_STEPS.map((step, idx) => {
                    const Icon = step.icon
                    return (
                      <div
                        key={step.step}
                        className="group flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-slate-50/60 border border-slate-100 hover:bg-white hover:border-blue-200 hover:shadow-sm transition-all duration-300"
                      >
                        <div className={`size-11 sm:size-12 rounded-xl flex items-center justify-center shrink-0 border ${step.color} shadow-2xs group-hover:scale-105 transition-transform`}>
                          <Icon className="size-5 sm:size-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-serif text-base font-bold text-slate-900 group-hover:text-[#1E4ED8] transition-colors">
                              {step.title}
                            </h4>
                            <span className="font-mono text-xs font-bold text-slate-400">
                              STEP {step.step}
                            </span>
                          </div>
                          <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mt-1 font-normal">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Section 3: Targeted Interventions (Responsive 3-Column Grid) ─── */}
      <section className="py-16 sm:py-24 lg:py-28 bg-[#FFFFFF] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                TARGETED INTERVENTIONS
              </span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#061836] tracking-tight leading-[1.15]">
              Where We Focus
            </h2>
            
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
              Concentrating relational power where it creates the greatest generational stability across India.
            </p>
          </div>

          {/* Grid: 5 Focus Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {FOCUS_AREAS.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.id}
                  className="group relative p-7 sm:p-8 rounded-2xl sm:rounded-[24px] bg-white border border-blue-100/90 shadow-[0_4px_20px_rgba(30,78,216,0.04)] hover:border-blue-300 hover:shadow-[0_14px_34px_rgba(30,78,216,0.10)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Icon & Tag */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="size-11 sm:size-12 rounded-xl sm:rounded-2xl bg-[#EFF6FF] border border-blue-100/90 flex items-center justify-center text-[#1E4ED8] group-hover:scale-105 transition-transform duration-300 shadow-2xs">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                        PILLAR {item.id}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#061836] group-hover:text-[#1E4ED8] transition-colors leading-tight">
                      {item.title}
                    </h3>

                    {/* Tag badge */}
                    <p className="mt-1.5 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#1E4ED8]">
                      {item.tag}
                    </p>

                    {/* Description */}
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom Highlight */}
                  <div className="pt-4 mt-5 border-t border-slate-100 bg-blue-50/40 rounded-xl p-3 text-xs font-semibold text-[#1E4ED8] flex items-center gap-2">
                    <CheckCircle2 className="size-4 shrink-0 text-[#1E4ED8]" />
                    <span>{item.highlight}</span>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ─── Section 4: Section 8 Not-For-Profit Entity (The 1 Million Entrepreneurs International Forum) ─── */}
      <section className="py-16 sm:py-24 lg:py-28 bg-[#F8FAFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[32px] bg-white border border-slate-200/90 p-8 sm:p-12 lg:p-16 shadow-[0_16px_45px_rgba(0,0,0,0.06)] space-y-10">
            
            {/* Header with Not-For-Profit Badge */}
            <div className="max-w-3xl space-y-3">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  SECTION 8 NOT-FOR-PROFIT ENTITY
                </span>
              </div>
              
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-[#061836] tracking-tight leading-[1.18]">
                The 1 Million Entrepreneurs <span className="italic text-[#1E4ED8]">International Forum</span>
              </h2>
              
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Carrying the work that sits outside a commercial community — grassroots mentorship programmes, statutory skill development, and sponsored support for founders who cannot yet afford a seat in a room.
              </p>
            </div>

            {/* 3 Core Initiative Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-7 rounded-2xl bg-[#F8FAFD] border border-slate-200/90 hover:border-blue-300 hover:shadow-md transition-all duration-300 space-y-3">
                <div className="size-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1E4ED8]">
                  <Compass className="size-5" />
                </div>
                <h3 className="font-serif font-bold text-lg text-slate-900">
                  Grassroots Mentorship
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Connecting seasoned industrialists with micro-enterprise founders in tier 2 and tier 3 towns to bridge generational knowledge divides.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-[#F8FAFD] border border-slate-200/90 hover:border-blue-300 hover:shadow-md transition-all duration-300 space-y-3">
                <div className="size-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1E4ED8]">
                  <Layers className="size-5" />
                </div>
                <h3 className="font-serif font-bold text-lg text-slate-900">
                  Capacity Building
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Actionable masterclasses on GST, statutory compliance, cash-flow discipline, procurement standards, and modern sales architecture.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-[#F8FAFD] border border-slate-200/90 hover:border-blue-300 hover:shadow-md transition-all duration-300 space-y-3">
                <div className="size-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1E4ED8]">
                  <Award className="size-5" />
                </div>
                <h3 className="font-serif font-bold text-lg text-slate-900">
                  Sponsored Seats
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Fully funded 12-month community fellowships for high-potential, underserved and women entrepreneurs to participate in category-exclusive circles.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─── Section 5: The SDGs We Contribute To (3 Evidenced) ─── */}
      <section className="py-16 sm:py-24 lg:py-28 bg-[#FFFFFF] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                SUBSTANTIVE ALIGNMENT
              </span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#061836] tracking-tight leading-[1.15]">
              The UN SDGs We Contribute To
            </h2>
            
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
              We resist listing all seventeen goals to tick boxes. We focus on three where our operational data proves clear, measurable economic impact.
            </p>
          </div>

          {/* 3 SDG Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
            {SDGS.map((sdg) => (
              <div
                key={sdg.number}
                className="group relative p-8 rounded-2xl sm:rounded-[28px] bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Large Background Watermark Numeral */}
                <div className="absolute top-2 right-4 font-serif text-8xl font-black text-slate-100/70 select-none pointer-events-none group-hover:text-blue-50 transition-colors">
                  {sdg.number}
                </div>

                <div className="relative z-10 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-mono font-bold text-[#1E4ED8]">
                    <span>{sdg.target}</span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#061836] group-hover:text-[#1E4ED8] transition-colors leading-snug">
                    {sdg.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-2 border-t border-slate-100">
                    {sdg.evidence}
                  </p>
                </div>

                {/* Bottom Tag */}
                <div className="relative z-10 pt-4 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#1E4ED8]">
                    {sdg.badge}
                  </span>
                  <ArrowRight className="size-4 text-[#1E4ED8] transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── Section 6: Community Participation ("Get Involved") ─── */}
      <section className="py-16 sm:py-24 lg:py-28 bg-[#F8FAFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          <div className="space-y-3 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                COMMUNITY PARTICIPATION
              </span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-[#061836] tracking-tight leading-[1.15]">
              Get Involved with Foundation
            </h2>
            
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-normal leading-relaxed">
              Choose how you want to contribute to the collective economic empowerment of India&apos;s entrepreneurs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-7 rounded-2xl sm:rounded-[24px] bg-white border border-slate-200/90 shadow-sm hover:border-blue-300 hover:shadow-lg transition-all duration-300 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="size-11 rounded-xl bg-blue-50 text-[#1E4ED8] flex items-center justify-center border border-blue-100 shadow-2xs">
                  <Users className="size-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900">
                  Mentor an Entrepreneur
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Share your battle-tested industry expertise with an emerging young or first-generation business owner.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <Link
                  href="/contact?intent=membership"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1E4ED8] hover:text-[#1a42c0] transition-colors"
                >
                  <span>Apply to Mentor</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="p-7 rounded-2xl sm:rounded-[24px] bg-white border border-slate-200/90 shadow-sm hover:border-blue-300 hover:shadow-lg transition-all duration-300 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="size-11 rounded-xl bg-blue-50 text-[#1E4ED8] flex items-center justify-center border border-blue-100 shadow-2xs">
                  <HeartHandshake className="size-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900">
                  Volunteer &amp; Facilitate
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Contribute domain knowledge or facilitate sessions at Foundation educational summits and conclaves.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <Link
                  href="/contact?intent=support"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1E4ED8] hover:text-[#1a42c0] transition-colors"
                >
                  <span>Volunteer Desk</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="p-7 rounded-2xl sm:rounded-[24px] bg-white border border-slate-200/90 shadow-sm hover:border-blue-300 hover:shadow-lg transition-all duration-300 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="size-11 rounded-xl bg-blue-50 text-[#1E4ED8] flex items-center justify-center border border-blue-100 shadow-2xs">
                  <Building2 className="size-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900">
                  Institutional Partnership
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Collaborate with CSR initiatives, chambers of commerce, and academic bodies to scale national impact.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <Link
                  href="/contact?intent=partner"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1E4ED8] hover:text-[#1a42c0] transition-colors"
                >
                  <span>Partner with Us</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── Closing Banner ─── */}
      <section className="relative isolate overflow-hidden bg-[#040F24] text-white py-24 md:py-32">
        {/* Deep celestial radial gradients & luminous aura */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(0,98,210,0.25),transparent_42%),radial-gradient(circle_at_82%_12%,rgba(56,189,248,0.18),transparent_36%),linear-gradient(115deg,#020817_0%,#071a3d_48%,#06132d_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-blue-600/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-sky-400/15 blur-3xl"
        />

        {/* SVG Orbital Geometric Lines Background */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-[min(58vw,760px)] opacity-35">
          <svg viewBox="0 0 760 520" fill="none" className="h-full w-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M760 40C555 45 405 145 375 310C355 423 265 493 70 520" stroke="currentColor" strokeWidth="1" className="text-blue-300/30" />
            <path d="M760 120C590 125 470 205 445 335C424 442 335 500 180 520" stroke="currentColor" strokeWidth="1" strokeDasharray="5 8" className="text-sky-200/25" />
            <path d="M760 215C640 220 565 278 540 370C519 446 470 490 390 520" stroke="currentColor" strokeWidth="1" className="text-blue-200/20" />
            <circle cx="540" cy="370" r="4" fill="currentColor" className="text-sky-300/60" />
            <circle cx="540" cy="370" r="13" stroke="currentColor" strokeWidth="1" className="text-sky-300/25" />
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-white tracking-tight leading-[1.15]">
              Numbers are milestones. <br className="hidden sm:inline" />
              <span className="italic text-cyan-200">Lives are the real metric.</span>
            </h2>
            <p className="text-base sm:text-lg text-white/90 font-normal max-w-xl mx-auto leading-relaxed">
              Join the community helping India’s business owners create sustainable, generational dignity.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#0062D2] hover:bg-slate-100 text-sm font-bold transition-all shadow-lg hover:shadow-xl uppercase tracking-wider active:scale-[0.98]"
            >
              <span>Apply to Join</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/unity"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white text-sm font-semibold border border-white/25 hover:bg-white/20 transition-all uppercase tracking-wider backdrop-blur-sm active:scale-[0.98]"
            >
              <span>Download Unity App</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
