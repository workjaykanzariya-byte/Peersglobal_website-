'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ChevronRight,
  GraduationCap,
  Sparkles,
  ArrowRight,
  BookOpen,
  Users,
  Presentation,
  Shield,
  Layers,
  Award,
  TrendingUp,
  Briefcase,
  Laptop,
  CheckCircle2,
  FileSpreadsheet,
  Workflow,
  Lightbulb,
  Building,
  Target,
  MessageSquareQuote,
  Compass,
  ArrowUpRight,
  BrainCircuit,
  Coins,
  ShieldCheck,
  Scale,
  DollarSign,
  Cpu,
  FileText,
  Clock,
  Play,
  Check,
} from 'lucide-react'

export function LearningPillarClient() {
  return (
    <div className="min-h-screen bg-[#FBFCFE] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="size-3.5 text-slate-400" />
          <Link href="/learning" className="hover:text-slate-900 transition-colors">
            Growth &amp; Learning
          </Link>
          <ChevronRight className="size-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">Learning</span>
        </div>
      </div>

      {/* ─── SECTION 1: HERO (PRACTICAL LEARNING MASTERCLASS) ─── */}
      <section className="relative overflow-hidden bg-[#040F24] text-white pt-0 pb-12 sm:pb-16 border-b border-slate-800">
        {/* Home-style looping video backdrop with dark scrim */}
        <video
          className="absolute inset-0 size-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
          src="/videos/homepage-hero-bg.mp4"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(100deg,rgba(2,8,23,0.92)_0%,rgba(4,15,36,0.78)_45%,rgba(4,15,36,0.55)_100%)] pointer-events-none"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Home-style full-bleed hero */}
          <div className="min-h-[480px] lg:min-h-[520px] py-10 sm:py-14 flex items-center">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
              
              {/* Left Column: Manifesto & Details */}
              <div className="lg:col-span-12 max-w-3xl space-y-6">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold tracking-[0.22em] uppercase text-white/90">
                    GROWTH &amp; PRACTITIONER LEARNING
                  </span>
                </div>

                <div className="space-y-2.5">
                  <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-rose-400 tracking-tight leading-[1.14]">
                    Learning
                  </h1>
                  <p className="text-base sm:text-xl text-slate-200 font-normal leading-relaxed">
                    From people who built the thing they are teaching. Not theory. What actually works.
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  <p>
                    Peers Global runs on the <strong className="text-white font-semibold">LSR Growth Model — Learning, Sales, and Resources</strong>. Learning comes first because everything else compounds from it.
                  </p>

                  {/* 4 Pillar Badges */}
                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 pt-1">
                    {[
                      { text: '100+ Annual Masterclasses', icon: GraduationCap },
                      { text: '20-Min Concise Actionable Formats', icon: Clock },
                      { text: 'Taught Only by Active Founders', icon: Users },
                      { text: 'Verified Business Playbooks', icon: FileText },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-white/10 border border-white/15 text-xs font-semibold text-white flex items-center gap-2 backdrop-blur-sm"
                      >
                        <item.icon className="size-4 shrink-0 text-sky-400" />
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-l-2 border-[#E11D48] pl-3 py-0.5 text-xs sm:text-sm font-medium text-white/95 italic flex items-center gap-2">
                    <Sparkles className="size-4 shrink-0 text-sky-400" />
                    <span>&ldquo;A Peer who understands their market makes better decisions and gives better advice to the room.&rdquo;</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <Link
                    href="/apply"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer uppercase tracking-wider"
                  >
                    <span>Join Peers Global</span>
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <a
                    href="#masterclasses"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/25 hover:bg-white/20 bg-transparent text-white font-bold text-xs sm:text-sm transition-all uppercase tracking-wider"
                  >
                    <span>View Masterclasses</span>
                  </a>
                </div>
              </div>


            </div>
          </div>

          {/* Floating Stats Bar */}
          <div className="relative z-10 mt-5 grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 items-center">
            {[
              { icon: GraduationCap, number: '100+', label: 'Masterclasses Annually' },
              { icon: ShieldCheck, number: '100%', label: 'Practitioner Proven' },
              { icon: Users, number: '18+', label: 'Industry Circles' },
              { icon: TrendingUp, number: '₹10+ Cr', label: 'Compounded Value' },
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
                      {stat.number}
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

      {/* ─── SECTION 2: THE L IN LSR (SPLIT CARD) ─── */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-sm p-7 sm:p-10 lg:p-12 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Narrative */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                    <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                      THE FOUNDATIONAL PILLAR
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight leading-tight">
                    The &ldquo;L&rdquo; in the LSR Growth Model
                  </h2>
                </div>

                <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  <p>
                    Peers Global runs on the <strong className="text-slate-900 font-semibold">LSR Growth Model — Learning, Sales, and Resources</strong>.
                  </p>
                  <p>
                    Learning comes first because everything else follows from it. A Peer who understands their unit economics, supply chain vulnerabilities, and market timing makes sharper capital allocations and gives superior counsel to the room.
                  </p>
                  <p>
                    All insights come strictly from practitioners. Nobody here teaches anything they haven&apos;t built or overcome themselves.
                  </p>
                </div>
              </div>

              {/* Right Quote Card */}
              <div className="lg:col-span-5">
                <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-md flex flex-col justify-center items-center text-center relative overflow-hidden space-y-3">
                  <div className="size-12 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100 shadow-2xs">
                    <Shield className="size-6" />
                  </div>
                  <blockquote className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                    &ldquo;Learn from practitioners with skin in the game, never from textbook theorists.&rdquo;
                  </blockquote>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
                    — Peers Global Principle
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: IMPACT MENTOR MASTERCLASSES ─── */}
      <section id="masterclasses" className="py-16 sm:py-20 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 mb-1">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                  MONTHLY SESSIONS
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight leading-tight">
                Impact Mentor Masterclasses
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                One domain expert. One core challenge. Twenty minutes of pure, applicable insight delivered every single month.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-white border border-slate-200/90 text-xs text-slate-700 font-semibold shadow-2xs shrink-0 flex items-center gap-2">
              <Presentation className="size-4 text-[#0062D2]" />
              <span>Programmed by Skill Development Leaders</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: 'Working Capital & Vendor Terms',
                category: 'Finance & Cashflow',
                icon: Coins,
                desc: 'How to structure vendor contracts and credit cycles without falling into liquidity traps during rapid order expansion.',
                duration: '20 mins',
              },
              {
                title: 'Institutional Sales & Enterprise Bidding',
                category: 'B2B Sales',
                icon: Building,
                desc: 'Bypassing brokers and winning corporate accounts through relationship governance and SLA benchmarks.',
                duration: '20 mins',
              },
              {
                title: 'Second-Line Leadership Hiring',
                category: 'Operations',
                icon: Workflow,
                desc: 'Transitioning from founder-dependent management to professionalized general managers and division heads.',
                duration: '20 mins',
              },
              {
                title: 'Cross-Border MSME Trade Compliance',
                category: 'Global Trade',
                icon: Compass,
                desc: 'Navigating export documentation, letter of credit risk, and distributor alignment in Southeast Asia and Middle East.',
                duration: '20 mins',
              },
              {
                title: 'Automation & ERP for Mid-Market Plants',
                category: 'Technology',
                icon: Cpu,
                desc: 'Deploying cost-effective inventory visibility without overspending on bloated multi-year software packages.',
                duration: '20 mins',
              },
              {
                title: 'Brand Moats in Traditional Industries',
                category: 'Brand & Growth',
                icon: Sparkles,
                desc: 'Building premium pricing power in commodity manufacturing through trust certification and storytelling.',
                duration: '20 mins',
              },
            ].map((cls, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="size-11 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100 shadow-2xs group-hover:scale-110 transition-transform">
                      <cls.icon className="size-5" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-[10px] font-mono font-bold text-slate-600">
                      {cls.duration}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#0062D2] font-bold block">
                      {cls.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-[#0062D2] transition-colors">
                      {cls.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                      {cls.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0062D2]">
                  <span>Included in Membership</span>
                  <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
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
                  CONTINUOUS LEARNING
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight">
                Learn with peers who build real enterprises every day.
              </h2>

              <div className="space-y-3.5 text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl">
                <p>
                  Access our masterclass archives, confidential boardroom playbooks, and peer-to-peer mentoring networks directly inside the Unity App.
                </p>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1">
                  <p className="text-sky-200 font-medium text-xs sm:text-sm">
                    • 100+ Annual Masterclasses · 20-Minute Practical Formats · Zero Textbook Theory.
                  </p>
                  <p className="text-white font-bold text-xs sm:text-sm">Accelerate your business journey today.</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-3">
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-xs sm:text-sm font-bold shadow-lg transition-all hover:scale-105 uppercase tracking-wider group cursor-pointer"
                >
                  <span>Apply for Membership</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/30 hover:border-white bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-md transition-all"
                >
                  <span>Open Unity App →</span>
                </a>
              </div>
            </div>

            {/* Right Cursive Script Highlights */}
            <div className="lg:col-span-4 text-left lg:text-right select-none pointer-events-none drop-shadow-lg space-y-1">
              <p
                className="text-xl sm:text-2xl text-white/70 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Learn.
              </p>
              <p
                className="text-xl sm:text-2xl text-white/80 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Implement.
              </p>
              <p
                className="text-xl sm:text-2xl text-white leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Scale.
              </p>
              <p
                className="text-2xl sm:text-3xl text-amber-300 font-bold leading-tight"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Lead.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
