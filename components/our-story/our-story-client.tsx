'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  HeartHandshake,
  Users,
  Building2,
  Globe2,
  Calendar,
  CheckCircle2,
  Quote,
  ShieldCheck,
  Target,
  Sparkles,
  TrendingUp,
  Layers,
  Award,
  BookOpen,
  Sprout,
  Lightbulb,
  Share2,
  Smartphone,
  Eye,
  Smile,
  Zap,
  Check,
  Compass,
  Briefcase,
  HelpCircle,
  Flag,
  Handshake,
} from 'lucide-react'

// ─── Verified Milestones Timeline ───────────────────────────────────────────
const VERIFIED_TIMELINE = [
  {
    tag: 'THE BEGINNING',
    title: 'The Observation in the Corridor',
    desc: 'The realization that entrepreneurs face intense, unshared challenges when building their businesses, and that no entrepreneur should have to build alone.',
    highlight: 'The human question at the heart of everything',
  },
  {
    tag: 'THE FIRST STEP',
    title: 'Early Ventures & Lessons of Building',
    desc: 'From tech startups, HRMS products, and cloud platforms to navigating the startup ecosystem as first-generation founders.',
    highlight: 'Building, learning, and taking exits',
  },
  {
    tag: 'THE IDEA TAKES SHAPE',
    title: 'The Untold Stories of Entrepreneurs',
    desc: 'Discovering that traditional media often overlooked the real, human struggles of MSMEs and builders, leading to platforms dedicated to celebrating their journeys.',
    highlight: 'Giving a voice to those who build',
  },
  {
    tag: 'THE COMMUNITY BEGINS',
    title: 'From Networking to Collaboration',
    desc: 'Moving beyond business card exchanges into governed Circles, peer-to-peer accountability, and structured collaboration pathways.',
    highlight: 'The birth of PEERS GLOBAL Circles',
  },
  {
    tag: 'A NEW STAGE',
    title: 'The LSR Model & Inner Boards',
    desc: 'Integrating Learning, Sales, and Resources into a cohesive framework where peers act as confidential advisory boards for each other.',
    highlight: 'LSR Growth Model & Governed Trust',
  },
  {
    tag: 'THE ECOSYSTEM EXPANDS',
    title: 'Unity App & The Digital Home',
    desc: 'Launching the private digital community where relationships continue 365 days a year without algorithms, ads, or distraction.',
    highlight: 'Digital infrastructure for global connection',
  },
  {
    tag: 'TODAY',
    title: 'The 1 Million Mission',
    desc: 'Working toward 1M+ entrepreneurs impacted by 2030 through 18 Circles across industries, cities, and countries.',
    highlight: '1 Action = 1 Life Impacted',
  },
]

export function OurStoryClient() {
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
          <span className="text-slate-900 font-semibold">Our Story</span>
        </div>
      </div>

      {/* ─── SECTION 1: HERO (OUR STORY) ─── */}
      <section className="relative overflow-hidden bg-[#FAFBFD] text-slate-900 pt-6 sm:pt-10 pb-12 sm:pb-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Hero Banner with Smooth Left-Fading Media/Video Backdrop */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-white via-white/95 to-slate-50 border border-slate-200/90 shadow-lg min-h-[500px] lg:min-h-[560px] flex items-center">
            
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-10 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

            {/* Media Background Layer (Right ~60% fading into white on the left) */}
            <div
              className="absolute top-0 right-0 bottom-0 w-full sm:w-[65%] lg:w-[60%] overflow-hidden pointer-events-none"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.5) 25%, black 50%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.5) 25%, black 50%)',
              }}
            >
              {/* Active Video Background */}
              <video
                src="/videos/homepage-hero-bg.mp4"
                poster="/images/circles-hero-new.jpg"
                autoPlay
                loop
                muted
                playsInline
                className="size-full object-cover object-center opacity-90"
              />

              {/* Seamless gradient overlays for misty fade */}
              <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white via-white/85 via-30% to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none" />

              {/* Top-Right Script Typography */}
              <div className="absolute top-6 sm:top-8 right-6 sm:right-8 z-20 text-right drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] pointer-events-none select-none">
                <p className="text-xl sm:text-2xl text-white/95 leading-tight" style={{ fontFamily: 'var(--font-script)' }}>
                  Born From A Real Need
                </p>
                <p className="text-xl sm:text-2xl text-white/95 leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Grown Across Bharat
                </p>
                <p className="text-2xl sm:text-3xl text-amber-300 font-medium leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Built For The World
                </p>
              </div>

              {/* Bottom-Right Frosted Glass Pill */}
              <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-20 pointer-events-none select-none hidden sm:block">
                <div className="rounded-xl border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2.5 shadow-lg text-left">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/70">
                    OUR GENESIS
                  </p>
                  <p className="text-xs font-bold tracking-wider text-white">
                    PEERS GLOBAL STORY
                  </p>
                </div>
              </div>
            </div>

            {/* Left Content Area */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl lg:max-w-2xl flex flex-col items-start text-left">
                
                {/* Eyebrow with brand gradient bar */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    ORIGIN &amp; PURPOSE
                  </span>
                </div>

                {/* H1 Heading */}
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-bold text-slate-950 tracking-tight leading-[1.12] mb-4">
                  It began in a <br />
                  <span className="italic bg-gradient-to-r from-[#1D4ED8] via-[#8B5CF6] to-[#E11D48] bg-clip-text text-transparent font-medium">
                    hospital corridor.
                  </span>
                </h1>

                {/* Subtitle & Descriptions */}
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-6 max-w-lg">
                  Before there was an ecosystem, there was a realization: What happens to an entrepreneur when the journey becomes difficult, and nobody truly understands the weight they carry?
                </p>

                {/* Featured Highlight Quote Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50/90 to-rose-50/50 border border-blue-100/80 mb-8 max-w-lg">
                  <p className="font-serif italic text-slate-900 text-sm sm:text-base font-medium">
                    “Entrepreneurs should not have to build alone. Relationships create more value than transactions.”
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4">
                  <Link
                    href="/the-idea"
                    className="rounded-full bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] text-white px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider shadow-lg shadow-blue-600/20 transition-all hover:scale-105 inline-flex items-center gap-2 uppercase"
                  >
                    <span>Discover The Idea</span>
                    <ArrowRight className="size-4" />
                  </Link>

                  <Link
                    href="/founder"
                    className="rounded-full border border-slate-300 hover:border-slate-400 bg-white text-slate-800 px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wider transition-all hover:scale-105 hover:bg-slate-50 shadow-2xs inline-flex items-center gap-2 uppercase"
                  >
                    <span>Meet Dr. Pravin Parmar</span>
                  </Link>
                </div>

              </div>
            </div>

          </div>

          {/* 4-Item Floating Stats Bar */}
          <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { val: '2014 Genesis', label: 'Ecosystem Inception', sub: 'Hospital corridor realization' },
              { val: '19 Hubs', label: 'Operating Chapters', sub: 'Western & Northern Bharat' },
              { val: '100% Governed', label: 'Zero Commercial Lobbying', sub: 'Protected peer collaboration' },
              { val: '1M Mission', label: 'Life Impact Target', sub: 'First-gen founder mentorship' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200/90 p-3.5 sm:p-4 shadow-2xs hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="font-serif text-lg sm:text-xl font-bold bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">
                  {stat.val}
                </div>
                <div className="text-xs font-bold text-slate-900 mt-0.5">{stat.label}</div>
                <div className="text-[11px] text-slate-500 font-normal">{stat.sub}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── SECTION 2: THE INVISIBLE JOURNEY & WHY A COMMUNITY ─── */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                    THE INVISIBLE JOURNEY
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight leading-tight">
                  Before There Was A Community
                </h2>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                <p>
                  Every entrepreneur begins somewhere. With an idea. A risk. A first client. A first employee. And, inevitably, moments where everything becomes uncertain.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-semibold text-slate-700">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">Growth</div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">Revenue</div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">Recognition</div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">Expansion</div>
                </div>
                <p>
                  The public sees only the revenue milestones. But the deeper truth of building lies in carrying responsibility for payroll, navigating supply shocks, and making high-stakes decisions without a confidential sounding board.
                </p>
                <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200/70 text-xs text-blue-950 font-semibold leading-relaxed">
                  That became our starting point: What if entrepreneurs had a governed room designed not to sell to each other, but to advise, protect, and build with one another?
                </div>
              </div>
            </div>

            {/* Right Column: Dual Philosophy Cards */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-7 rounded-3xl bg-[#061836] text-white shadow-xl space-y-4 border border-slate-800">
                <div className="size-10 rounded-2xl bg-white/10 text-sky-300 flex items-center justify-center border border-white/20">
                  <BookOpen className="size-5" />
                </div>
                <h3 className="text-xl font-bold text-white leading-snug">
                  The Story Nobody Would Publish
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Traditional business press covers fundraising and unicorns. We built a platform and community for the 99% of promoters and MSMEs who build real families and real employment across Bharat.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-sm space-y-4">
                <div className="size-10 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center border border-purple-100">
                  <HeartHandshake className="size-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  Why We Say &ldquo;Peers&rdquo;
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  Not customers. Not leads. Not contacts. <strong className="text-slate-900 font-semibold">Peers.</strong> People carrying equal responsibility, learning together, and helping one another succeed without transactional pressure.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 3: THE VERIFIED TIMELINE ─── */}
      <section className="py-16 sm:py-24 bg-[#F8FAFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                CHRONICLE OF MILESTONES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-950 tracking-tight leading-tight">
              The Journey So Far
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              A community becomes enduring when its milestones are authentic and transparent. Explore the foundational eras of PEERS GLOBAL.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {VERIFIED_TIMELINE.map((item, idx) => (
              <div
                key={item.tag}
                className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle top-right ambient glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors pointer-events-none" />

                <div className="space-y-4">
                  {/* Phase & Era Badge Header */}
                  <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1D4ED8] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                        {item.tag}
                      </span>
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      ERA #{String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-950 group-hover:text-[#1D4ED8] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Highlight Pill */}
                <div className="mt-6 pt-4 border-t border-slate-100/90 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <span className="size-1.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                    <span>{item.highlight}</span>
                  </div>
                  <ChevronRight className="size-4 text-slate-400 group-hover:text-[#1D4ED8] group-hover:translate-x-1 transition-all" />
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
                <span className="h-[2px] w-6 bg-gradient-to-r from-sky-400 to-rose-400 rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-sky-400">
                  YOUR CHAPTER BEGINS HERE
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight">
                The story is still being written. And the next chapter belongs to you.
              </h2>

              <div className="space-y-3.5 text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl">
                <p>
                  Every Peer who joins adds another chapter. Every collaboration creates another connection. Every life impacted makes the story a little larger.
                </p>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1">
                  <p className="text-sky-200 font-medium text-xs sm:text-sm">
                    • 1 Action = 1 Life Impacted · Governed Collaboration · 1M Mission by 2030.
                  </p>
                  <p className="text-white font-bold text-xs sm:text-sm">Stop building alone today.</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-3">
                <Link
                  href="/the-idea"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-xs sm:text-sm font-bold shadow-lg transition-all hover:scale-105 uppercase tracking-wider group cursor-pointer"
                >
                  <span>Discover The Idea</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/founder"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/30 hover:border-white bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-md transition-all"
                >
                  <span>Meet Dr. Pravin Parmar →</span>
                </Link>
              </div>
            </div>

            {/* Right Cursive Script Highlights */}
            <div className="lg:col-span-4 text-left lg:text-right select-none pointer-events-none drop-shadow-lg space-y-1">
              <p
                className="text-xl sm:text-2xl text-white/70 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Observe.
              </p>
              <p
                className="text-xl sm:text-2xl text-white/80 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Connect.
              </p>
              <p
                className="text-xl sm:text-2xl text-white leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Collaborate.
              </p>
              <p
                className="text-2xl sm:text-3xl text-amber-300 font-bold leading-tight"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Impact.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
