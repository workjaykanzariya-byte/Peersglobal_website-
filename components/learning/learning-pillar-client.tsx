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
} from 'lucide-react'

export function LearningPillarClient() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#EFF6FF] selection:text-[#0062D2] antialiased">
      {/* ─── 1. HERO SECTION (HOMEPAGE MATCHING HERO BANNER WITH VIDEO) ──── */}
      <section className="relative overflow-hidden pt-5 sm:pt-6 pb-3 sm:pb-4 border-b border-slate-200/80 bg-gradient-to-b from-white via-[#F6F9FD] to-[#EDF3FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-5">
            <Link href="/" className="hover:text-[#0062D2] transition-colors">
              Home
            </Link>
            <ChevronRight className="size-3 text-slate-400" />
            <Link href="/learning" className="hover:text-[#0062D2] transition-colors">
              Growth &amp; Learning
            </Link>
            <ChevronRight className="size-3 text-slate-400" />
            <span className="text-slate-800 font-semibold">Learning</span>
          </nav>

          {/* Hero Banner Box (Unified rounded card matching Homepage layout with Video) */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[36px] bg-white border border-slate-200/80 shadow-sm min-h-[520px] lg:min-h-[580px] flex items-center">
            {/* Right Video Visual with fade gradient mask */}
            <div
              className="absolute top-0 right-0 bottom-0 w-full sm:w-[65%] lg:w-[58%] overflow-hidden pointer-events-none"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 10%, rgba(0,0,0,0.6) 28%, black 55%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 10%, rgba(0,0,0,0.6) 28%, black 55%)',
              }}
            >
              <video
                src="/videos/leadership-hero-bg.mp4"
                poster="/images/culture-hero-desk.jpg"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-center scale-105"
              />
              <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-white via-white/85 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />

              {/* Cursive Script Overlay */}
              <div className="absolute top-6 sm:top-10 right-6 sm:right-10 z-20 text-right drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] pointer-events-none select-none">
                <p
                  className="text-2xl sm:text-3xl text-white/95 leading-tight font-medium"
                  style={{ fontFamily: 'var(--font-script)' }}
                >
                  Practical Business Insights
                </p>
                <p
                  className="text-3xl sm:text-4xl text-amber-300 font-bold leading-tight mt-0.5"
                  style={{ fontFamily: 'var(--font-script)' }}
                >
                  Real Progress.
                </p>
              </div>
            </div>

            {/* Left Content */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl flex flex-col items-start">
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase brand-gradient-text mb-3">
                  <span className="w-5 h-px bg-blue-600" />
                  GROWTH &amp; LEARNING
                  <span className="w-5 h-px bg-rose-600" />
                </div>

                <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-950 leading-[1.08] mb-4">
                  Learning
                </h1>

                <p className="text-xl sm:text-2xl font-serif brand-gradient-text italic font-medium leading-snug mb-3">
                  From people who built the thing they are teaching.
                </p>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl font-normal">
                  Not theory. What actually works.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/apply"
                    className="rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white px-8 py-3.5 text-sm font-semibold shadow-md transition-all hover:scale-105 inline-flex items-center gap-2 uppercase tracking-wider"
                  >
                    <span>Join Peers Global</span>
                    <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    href="/unity"
                    className="rounded-full border border-slate-300/90 bg-white hover:bg-slate-50 text-slate-800 px-6 py-3.5 text-sm font-semibold transition-all shadow-xs hover:border-slate-400"
                  >
                    Download Unity App
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
            {[
              { icon: GraduationCap, label: '100+ Masterclasses Annually' },
              { icon: CheckCircle2, label: 'Practical & Proven' },
              { icon: Users, label: 'By Entrepreneurs' },
              { icon: TrendingUp, label: 'For Real Business Growth' },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-white border border-slate-200/90 flex items-center gap-3.5 shadow-sm hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 border border-blue-100 shadow-xs">
                  <stat.icon className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-serif font-bold text-slate-900 leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 2. THE L IN LSR SECTION ───────────────────────────────────────── */}
      <section className="py-16 lg:py-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Card: The L in LSR */}
            <div className="lg:col-span-8 p-8 sm:p-10 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-5 hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100 shadow-xs">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 tracking-tight">
                    The L in LSR
                  </h2>
                </div>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  Peers Global runs on the <strong className="text-slate-950 font-semibold">LSR Growth Model — Learning, Sales and Resources</strong>.
                </p>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Learning comes first because everything else follows from it. A Peer who understands their market better makes better decisions, asks better questions, and gives better advice to the room.
                </p>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  All of it comes from practitioners. Nobody here teaches something they have not done.
                </p>
              </div>
            </div>

            {/* Right Card: Quote */}
            <div className="lg:col-span-4 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-center items-center text-center relative overflow-hidden hover:shadow-md transition-shadow">
              <span className="text-6xl font-serif text-[#0062D2]/20 select-none">“</span>
              <blockquote className="font-serif text-xl sm:text-2xl text-slate-950 font-bold italic leading-snug -mt-4 mb-3">
                “Learn from experience, not theory.”
              </blockquote>
              <p className="text-xs font-bold uppercase tracking-widest brand-gradient-text">
                — Peers Global
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. IMPACT MENTOR MASTERCLASSES (DARK CONSTELLATION THEME) ────────── */}
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
            <circle cx="900" cy="520" r="1.5" /><circle cx="1100" cy="550" r="1" />
          </g>
          <g stroke="#38BDF8" strokeWidth="0.5" opacity="0.35" fill="none">
            <line x1="80" y1="60" x2="200" y2="130" /><line x1="200" y1="130" x2="340" y2="45" />
            <line x1="500" y1="100" x2="680" y2="35" /><line x1="850" y1="110" x2="1020" y2="60" />
          </g>
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-cyan-400">
                <span className="w-5 h-px bg-cyan-400" />
                MONTHLY SESSIONS
                <span className="w-5 h-px bg-cyan-400" />
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Impact Mentor Masterclasses
              </h2>

              <p className="text-lg sm:text-xl font-serif italic text-cyan-200 font-normal">
                One expert. One subject. Twenty minutes of pure, applicable insight.
              </p>

              <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                <p>
                  Every Circle meeting includes one. Not a motivational talk. Not a general overview. One subject, taught properly, by someone who has done it — and short enough that it stays practical.
                </p>
                <p>
                  Subjects come from what the room actually needs, programmed by the <strong className="text-white font-semibold">Skill Development Leader</strong> on each Circle&apos;s Events &amp; Impact Committee.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3 backdrop-blur-sm">
                  <GraduationCap className="w-5 h-5 text-cyan-300 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-200">
                    Twelve masterclasses a year, in every Circle.
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3 backdrop-blur-sm">
                  <Award className="w-5 h-5 text-cyan-300 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-200">
                    Programmed by the Skill Development Leader.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Speaker Image with Glass Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700/80 group h-72 sm:h-80">
                <Image
                  src="/images/industry-director-speaker.jpg"
                  alt="Impact Mentor Masterclass Speaker"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-5 left-6 right-6 text-white">
                  <p className="text-xs uppercase tracking-widest font-mono text-cyan-300 font-semibold mb-1">
                    Practitioner Driven
                  </p>
                  <p className="font-serif italic text-lg sm:text-xl text-white font-bold drop-shadow-md">
                    Practical. Relevant. Actionable.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What gets taught grid */}
          <div className="space-y-5 pt-6 border-t border-slate-800/80">
            <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              What gets taught:
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                {
                  title: 'Business Operations',
                  detail: 'Pricing, systems, processes, cash flow',
                  icon: Workflow,
                },
                {
                  title: 'Growth',
                  detail: 'Market entry, scaling, distribution, expansion',
                  icon: TrendingUp,
                },
                {
                  title: 'People',
                  detail: 'Hiring, leadership, retention, culture',
                  icon: Users,
                },
                {
                  title: 'Finance',
                  detail: 'Funding, working capital, investor readiness',
                  icon: DollarSign,
                },
                {
                  title: 'Compliance',
                  detail: 'Regulation, filings, licences, sector requirements',
                  icon: ShieldCheck,
                },
                {
                  title: 'Governance',
                  detail: 'Board advisory, filings, structuring & tax',
                  icon: Scale,
                },
                {
                  title: 'Technology',
                  detail: 'Automation, AI, tools that actually work',
                  icon: Cpu,
                },
                {
                  title: 'Industry-specific',
                  detail: 'Programmed by Industry Directors for their sector',
                  icon: Building,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-gradient-to-br from-[#0B1528] via-[#0F1D38] to-[#070D18] border border-slate-700/60 shadow-lg hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-2.5">
                    <div className="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-serif font-bold text-white leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-normal font-normal">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-slate-400 pt-2">
              <strong className="text-white font-semibold">Who teaches:</strong> Peers, Industry Directors, and invited experts brought in by Circle Directors.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 4. BUSINESS PLAYBOOKS ─────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100 shadow-xs">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-950 tracking-tight">
                  Business Playbooks
                </h2>
              </div>

              <p className="text-lg sm:text-xl font-serif italic text-[#0062D2] font-medium">
                What worked, written down by the person it worked for.
              </p>

              <div className="space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                <p>
                  A playbook is what a masterclass becomes when it is written down properly.
                </p>
                <p>
                  Each one is produced by a Peer who solved something in their own business — the steps they took, what they got wrong first, what they would do differently, and what it cost.
                </p>
                <p>
                  Every playbook carries the name of the entrepreneur who wrote it, their business and their city. If you want to ask them something the playbook does not cover, they are one connection request away in the Unity App.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAFBFD] border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Written by Peers, for Peers
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAFBFD] border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0062D2]" />
                  Real examples. Real outcomes.
                </span>
              </div>
            </div>

            {/* Right Playbook 3D Book Graphic */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-64 sm:w-72 h-80 rounded-3xl bg-gradient-to-br from-[#0B1220] via-[#111923] to-[#0A0F17] p-6 text-white shadow-2xl border border-slate-700/60 flex flex-col justify-between transform hover:-rotate-1 transition-transform group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-700/80 pb-3">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#D4AF37]">
                      Peers Global Library
                    </span>
                    <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide uppercase leading-tight pt-4">
                    Practical
                    <br />
                    Business
                    <br />
                    Playbooks
                  </h3>
                  <p className="text-xs text-slate-400 font-sans">
                    Documented battle-tested blueprints from founders who built the solution.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-serif italic text-slate-300">
                    Peers Global
                  </span>
                  <div className="w-6 h-6 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] text-xs font-bold">
                    PG
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Available on Pills */}
          <div className="space-y-4 pt-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
              Available on:
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
              {[
                { title: 'Growth', desc: 'New city, market or country', icon: TrendingUp },
                { title: 'People', desc: 'Key hire, leadership, retention', icon: Users },
                { title: 'Finance', desc: 'Raising capital, working capital', icon: DollarSign },
                { title: 'Operations', desc: 'Systems, processes, ERP, quality', icon: Workflow },
                { title: 'Sales', desc: 'From founder-led to a team', icon: Target },
                { title: 'Compliance', desc: 'Filings, licences, regulation', icon: ShieldCheck },
                { title: 'Succession', desc: 'Handing over, selling, next gen', icon: Building },
              ].map((pill, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-200 transition-all flex flex-col items-center text-center space-y-2"
                >
                  <pill.icon className="w-5 h-5 text-[#0062D2]" />
                  <span className="text-xs font-serif font-bold text-slate-900 block">
                    {pill.title}
                  </span>
                  <span className="text-[11px] text-slate-500 leading-tight block">
                    {pill.desc}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm text-slate-700">
              <p>
                <strong className="text-slate-900 font-semibold">Write one:</strong> A masterclass reaches one room. A playbook reaches every Peer, in every city, for years.
              </p>
              <Link
                href="/playbooks"
                className="text-[#0062D2] font-bold hover:underline shrink-0 inline-flex items-center gap-1"
              >
                Browse Playbooks <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. MENTORS & GUIDES ───────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 border-b border-slate-200/80 bg-[#FAFBFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100 shadow-xs">
                  <Users className="w-5 h-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-950 tracking-tight">
                  Mentors &amp; Guides
                </h2>
              </div>

              <p className="text-lg sm:text-xl font-serif italic text-[#0062D2] font-medium">
                Someone who has already been where you are going.
              </p>

              <div className="space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                <p>
                  Mentorship is one of the ten Forms of Collaboration. Not a programme bolted on — a defined practice, used throughout the community.
                </p>
                <p>
                  <strong className="text-slate-900 font-semibold">Finding a mentor:</strong> Search the community in the Unity App by industry, city, capability and standing. Or ask your Circle Director — they know the room.
                </p>
                <p>
                  <strong className="text-slate-900 font-semibold">Becoming a mentor:</strong> You do not need thirty years. You need to be further along than someone else on something specific. An entrepreneur three years ahead is often a better mentor than one thirty years ahead, because they remember the problem clearly.
                </p>
                <p className="text-xs text-slate-500 font-medium pt-1">
                  Mentorship counts as one life impacted, like every other Form of Collaboration.
                </p>
              </div>

              {/* 3 Pillars of Mentorship */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 space-y-1.5 shadow-sm">
                  <span className="text-xs font-serif font-bold text-slate-900 block">
                    Inside your Circle
                  </span>
                  <span className="text-[11px] text-slate-500 block leading-relaxed">
                    Sitting monthly with entrepreneurs further along than you is mentorship.
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 space-y-1.5 shadow-sm">
                  <span className="text-xs font-serif font-bold text-slate-900 block">
                    Through one-to-ones
                  </span>
                  <span className="text-[11px] text-slate-500 block leading-relaxed">
                    Regular Peer-to-Peer with someone ten years ahead, sustained over time.
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 space-y-1.5 shadow-sm">
                  <span className="text-xs font-serif font-bold text-slate-900 block">
                    Peers Board of Advisory
                  </span>
                  <span className="text-[11px] text-slate-500 block leading-relaxed">
                    Every Circle has an Advisory Leader connecting Peers to senior advisors.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Mentorship Photo */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 group h-72 sm:h-80">
                <Image
                  src="/images/who-we-are-friends.jpg"
                  alt="Peers Global Mentorship"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
                <div className="absolute bottom-5 left-6 right-6 text-white">
                  <p className="font-serif italic text-lg sm:text-xl text-white font-bold drop-shadow-md">
                    Guidance. Perspective. Faster Progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. TEACHING IS CONTRIBUTION ──────────────────────────────────── */}
      <section className="py-16 lg:py-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Box */}
            <div className="lg:col-span-8 p-8 sm:p-10 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-5 hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100 shadow-xs">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 tracking-tight">
                    Teaching is contribution
                  </h2>
                </div>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  Sharing what you know is one of the ten Forms of Collaboration.
                </p>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Teach a masterclass. Write a playbook. Mentor a Peer. Each one counts, and each one builds your standing across the community. Speak to your Circle Director or your Skill Development Leader.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white text-xs sm:text-sm font-semibold shadow-md shadow-blue-600/20 transition-all uppercase tracking-wider hover:scale-105"
                >
                  <span>Join as Contributor</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Quote */}
            <div className="lg:col-span-4 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-center items-center text-center relative overflow-hidden hover:shadow-md transition-shadow">
              <span className="text-6xl font-serif text-[#0062D2]/20 select-none">“</span>
              <blockquote className="font-serif text-xl sm:text-2xl text-slate-950 font-bold italic leading-snug -mt-4 mb-3">
                “A rising tide lifts every entrepreneur.”
              </blockquote>
              <p className="text-xs font-bold uppercase tracking-widest brand-gradient-text">
                — Peers Global
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. CLOSING CTA BANNER ────────────────────────────────────────── */}
      <section
        id="download-unity"
        className="relative py-20 bg-[#0062D2] text-white overflow-hidden"
      >
        <div className="absolute -right-16 -top-20 bottom-0 pointer-events-none w-[420px] sm:w-[560px] lg:w-[680px] opacity-35 overflow-hidden flex items-center justify-center">
          <svg viewBox="0 0 600 600" fill="none" className="w-full h-full text-white/30" xmlns="http://www.w3.org/2000/svg">
            <path d="M 50 450 A 420 420 0 0 1 550 50" stroke="currentColor" strokeWidth="1.2" />
            <path d="M 120 520 A 500 500 0 0 1 600 120" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
            <path d="M 220 580 A 460 460 0 0 1 580 220" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            <line x1="280" y1="220" x2="380" y2="120" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
            <circle cx="280" cy="220" r="4.5" fill="#7DD3FC" />
            <circle cx="280" cy="220" r="10" stroke="#7DD3FC" strokeWidth="1" opacity="0.4" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center md:text-left max-w-xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
                Learn from experience, not theory.
              </h2>
              <p className="text-base text-white/90 font-light">
                Join thousands of verified business leaders sharing practical frameworks and accelerating growth together.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 justify-center md:justify-start">
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#0062D2] text-sm font-semibold shadow-lg shadow-black/10 transition-all uppercase tracking-wider hover:scale-105"
                >
                  <span>Apply to Join</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/unity"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-all backdrop-blur-sm"
                >
                  Download Unity App
                </Link>
              </div>
            </div>

            {/* Right Calligraphy Motto */}
            <div className="text-center md:text-right">
              <p className="font-serif italic text-white/95 text-xl sm:text-2xl leading-relaxed drop-shadow-md font-medium">
                Build Your Business.
                <br />
                Build Your Relationships.
                <br />
                <span className="text-amber-300 font-bold">Build Your Circle.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
