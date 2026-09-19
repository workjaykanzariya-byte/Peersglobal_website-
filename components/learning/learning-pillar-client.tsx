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
    <div className="min-h-screen bg-[#FBFCFE] text-slate-900 font-sans selection:bg-blue-100 selection:text-slate-900 antialiased">
      {/* ─── Breadcrumb ─── */}
      <div className="border-b border-slate-200/80 bg-white/80 backdrop-blur-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/learning" className="hover:text-slate-900 transition-colors">
            Growth &amp; Learning
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">Learning</span>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 border-b border-slate-200/80 overflow-hidden bg-gradient-to-b from-[#F0F5FD] via-[#FBFCFE] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100/80 text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                <span className="w-2 h-2 rounded-full bg-[#0062D2] animate-pulse" />
                GROWTH &amp; LEARNING
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#0D1F47] tracking-tight leading-[1.08]">
                Learning
              </h1>

              <p className="text-xl sm:text-2xl font-serif text-[#1e3a8a] italic font-normal leading-snug">
                From people who built the thing they are teaching.
              </p>

              <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
                Not theory. What actually works.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0062D2] hover:bg-[#1a42c0] text-white text-sm font-bold shadow-[0_4px_14px_rgba(0,98,210,0.25)] hover:shadow-lg transition-all uppercase tracking-wider"
                >
                  Join Peers Global
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/unity"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 text-sm font-semibold transition-all shadow-xs"
                >
                  Download Unity App
                </Link>
              </div>
            </div>

            {/* Right Visual with Book Stack Graphic */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-[#0B1220] group">
                <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                  <Image
                    src="/images/culture-hero-desk.jpg"
                    alt="Entrepreneur Learning Desk"
                    fill
                    className="object-cover object-center opacity-85 group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/40 to-transparent" />
                  
                  {/* Calligraphy Overlay */}
                  <div className="absolute top-6 left-6 z-10">
                    <p className="font-serif italic text-white/95 text-lg sm:text-xl drop-shadow-md leading-tight font-bold">
                      Real Experience.
                      <br />
                      <span className="text-[#D4AF37]">Real Lessons.</span>
                      <br />
                      Real Progress.
                    </p>
                  </div>

                  {/* 3D Stack of Books Representation */}
                  <div className="absolute right-4 bottom-4 top-6 flex flex-col justify-center items-end space-y-1 z-10">
                    {[
                      { label: 'PRACTICAL', color: 'bg-[#B0894A]' },
                      { label: 'STRATEGIES', color: 'bg-[#8F6423]' },
                      { label: 'PEOPLE', color: 'bg-[#3A537C]' },
                      { label: 'FINANCE', color: 'bg-[#1D3256]' },
                      { label: 'OPERATIONS', color: 'bg-[#182845]' },
                      { label: 'GROWTH', color: 'bg-[#111C31]' },
                      { label: 'LEADERSHIP', color: 'bg-[#0B1322]' },
                    ].map((book, idx) => (
                      <div
                        key={idx}
                        className={`${book.color} text-white/90 text-[10px] sm:text-[11px] font-bold tracking-widest px-4 py-1.5 rounded-l-md shadow-md border-y border-l border-white/20 transform hover:-translate-x-2 transition-transform cursor-pointer`}
                        style={{ width: `${140 - idx * 6}px` }}
                      >
                        {book.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Stats Pill Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 mt-10 border-t border-slate-200/80">
            {[
              { icon: GraduationCap, label: '100+ Masterclasses Annually' },
              { icon: CheckCircle2, label: 'Practical & Proven' },
              { icon: Users, label: 'By Entrepreneurs' },
              { icon: TrendingUp, label: 'For Real Business Growth' },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center gap-3.5 shadow-xs hover:border-blue-200 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 border border-blue-100">
                  <stat.icon className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-serif font-bold text-slate-800 leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── The L in LSR Section ─── */}
      <section className="py-16 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Card: The L in LSR */}
            <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-[#FAF7F0] border border-slate-200/90 shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D1F47]">
                    The L in LSR
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Peers Global runs on the <strong className="text-slate-900 font-semibold">LSR Growth Model — Learning, Sales and Resources</strong>.
                </p>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Learning comes first because everything else follows from it. A Peer who understands their market better makes better decisions, asks better questions, and gives better advice to the room.
                </p>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  All of it comes from practitioners. Nobody here teaches something they have not done.
                </p>
              </div>
            </div>

            {/* Right Card: Quote */}
            <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-center items-center text-center relative overflow-hidden">
              <span className="text-5xl font-serif text-[#0062D2]/20 select-none">“</span>
              <blockquote className="font-serif text-xl sm:text-2xl text-[#0D1F47] font-bold italic leading-snug -mt-4 mb-3">
                “Learn from experience, not theory.”
              </blockquote>
              <p className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                — Peers Global
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Impact Mentor Masterclasses ─── */}
      <section className="py-16 border-b border-slate-200/80 bg-[#FAF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100">
                  <Presentation className="w-5 h-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D1F47]">
                  Impact Mentor Masterclasses
                </h2>
              </div>

              <p className="text-lg font-serif italic text-[#1e3a8a] font-normal">
                One expert. One subject. Twenty minutes of pure, applicable insight.
              </p>

              <div className="space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                <p>
                  Every Circle meeting includes one. Not a motivational talk. Not a general overview. One subject, taught properly, by someone who has done it — and short enough that it stays practical.
                </p>
                <p>
                  Subjects come from what the room actually needs, programmed by the <strong className="text-slate-900 font-semibold">Skill Development Leader</strong> on each Circle&apos;s Events &amp; Impact Committee.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 flex items-center gap-3 shadow-xs">
                  <GraduationCap className="w-5 h-5 text-[#0062D2] shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800">
                    Twelve masterclasses a year, in every Circle.
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 flex items-center gap-3 shadow-xs">
                  <Award className="w-5 h-5 text-[#0062D2] shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800">
                    Programmed by the Skill Development Leader.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Speaker Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group h-64 sm:h-72">
                <Image
                  src="/images/industry-director-speaker.jpg"
                  alt="Impact Mentor Masterclass Speaker"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <p className="text-xs uppercase tracking-widest font-mono text-amber-300 font-semibold mb-1">
                    Practitioner Driven
                  </p>
                  <p className="font-serif italic text-lg text-white/95 font-bold">
                    Practical. Relevant. Actionable.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What gets taught grid */}
          <div className="space-y-4 pt-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
              What gets taught:
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {[
                {
                  title: 'Business Operations',
                  detail: 'Pricing, systems, processes, cash flow',
                  icon: Workflow,
                  color: 'text-blue-600 bg-blue-50 border-blue-100',
                },
                {
                  title: 'Growth',
                  detail: 'Market entry, scaling, distribution, expansion',
                  icon: TrendingUp,
                  color: 'text-rose-600 bg-rose-50 border-rose-100',
                },
                {
                  title: 'People',
                  detail: 'Hiring, leadership, retention, culture',
                  icon: Users,
                  color: 'text-sky-600 bg-sky-50 border-sky-100',
                },
                {
                  title: 'Finance',
                  detail: 'Funding, working capital, investor readiness',
                  icon: DollarSign,
                  color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
                },
                {
                  title: 'Compliance',
                  detail: 'Regulation, filings, licences, sector requirements',
                  icon: ShieldCheck,
                  color: 'text-purple-600 bg-purple-50 border-purple-100',
                },
                {
                  title: 'Governance',
                  detail: 'Board advisory, filings, structuring & tax',
                  icon: Scale,
                  color: 'text-amber-600 bg-amber-50 border-amber-100',
                },
                {
                  title: 'Technology',
                  detail: 'Automation, AI, tools that actually work',
                  icon: Cpu,
                  color: 'text-cyan-600 bg-cyan-50 border-cyan-100',
                },
                {
                  title: 'Industry-specific',
                  detail: 'Programmed by Industry Directors for their sector',
                  icon: Building,
                  color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className={`w-8 h-8 rounded-lg ${item.color} flex items-center justify-center border shrink-0`}>
                      <item.icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-serif font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-normal">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-slate-600 pt-2">
              <strong className="text-slate-900 font-semibold">Who teaches:</strong> Peers, Industry Directors, and invited experts brought in by Circle Directors.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Business Playbooks ─── */}
      <section className="py-16 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D1F47]">
                  Business Playbooks
                </h2>
              </div>

              <p className="text-lg font-serif italic text-[#1e3a8a] font-normal">
                What worked, written down by the person it worked for.
              </p>

              <div className="space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed">
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
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F0] border border-slate-200 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Written by Peers, for Peers
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F0] border border-slate-200 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  Real examples. Real outcomes.
                </span>
              </div>
            </div>

            {/* Right Playbook 3D Book Graphic */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-64 sm:w-72 h-80 rounded-2xl bg-gradient-to-br from-[#0B1220] via-[#111923] to-[#0A0F17] p-6 text-white shadow-2xl border border-slate-700/60 flex flex-col justify-between transform hover:-rotate-1 transition-transform group">
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
          <div className="space-y-4 pt-4">
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
                  className="p-3.5 rounded-2xl bg-[#FAF7F0] border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col items-center text-center space-y-2"
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

      {/* ─── Mentors & Guides ─── */}
      <section className="py-16 border-b border-slate-200/80 bg-[#FAF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100">
                  <Users className="w-5 h-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D1F47]">
                  Mentors &amp; Guides
                </h2>
              </div>

              <p className="text-lg font-serif italic text-[#1e3a8a] font-normal">
                Someone who has already been where you are going.
              </p>

              <div className="space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                <p>
                  Mentorship is one of the ten Forms of Collaboration. Not a programme bolted on — a defined practice, used throughout the community.
                </p>
                <p>
                  <strong className="text-slate-900 font-semibold">Finding a mentor:</strong> Search the community in the Unity App by industry, city, capability and standing. Or ask your Circle Director — they know the room.
                </p>
                <p>
                  <strong className="text-slate-900 font-semibold">Becoming a mentor:</strong> You do not need thirty years. You need to be further along than someone else on something specific. An entrepreneur three years ahead is often a better mentor than one thirty years ahead, because they remember the problem clearly.
                </p>
                <p className="text-xs text-slate-500 font-medium">
                  Mentorship counts as one life impacted, like every other Form of Collaboration.
                </p>
              </div>

              {/* 3 Pillars of Mentorship */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-xs">
                  <span className="text-xs font-serif font-bold text-slate-900 block">
                    Inside your Circle
                  </span>
                  <span className="text-[11px] text-slate-500 block leading-tight">
                    Sitting monthly with entrepreneurs further along than you is mentorship.
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-xs">
                  <span className="text-xs font-serif font-bold text-slate-900 block">
                    Through one-to-ones
                  </span>
                  <span className="text-[11px] text-slate-500 block leading-tight">
                    Regular Peer-to-Peer with someone ten years ahead, sustained over time.
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-xs">
                  <span className="text-xs font-serif font-bold text-slate-900 block">
                    Peers Board of Advisory
                  </span>
                  <span className="text-[11px] text-slate-500 block leading-tight">
                    Every Circle has an Advisory Leader connecting Peers to senior advisors.
                  </span>
                </div>
              </div>
            </div>

            {/* Right Mentorship Photo */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group h-64 sm:h-72">
                <Image
                  src="/images/who-we-are-friends.jpg"
                  alt="Peers Global Mentorship"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <p className="font-serif italic text-lg text-white/95 font-bold">
                    Guidance. Perspective. Faster Progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Teaching is Contribution ─── */}
      <section className="py-16 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Box */}
            <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-[#FAF7F0] border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D1F47]">
                    Teaching is contribution
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Sharing what you know is one of the ten Forms of Collaboration.
                </p>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Teach a masterclass. Write a playbook. Mentor a Peer. Each one counts, and each one builds your standing across the community. Speak to your Circle Director or your Skill Development Leader.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0062D2] hover:bg-[#1a42c0] text-white text-xs sm:text-sm font-bold shadow-[0_4px_14px_rgba(0,98,210,0.25)] transition-all uppercase tracking-wider"
                >
                  Join as Contributor
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Quote */}
            <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-center items-center text-center relative overflow-hidden">
              <span className="text-5xl font-serif text-[#0062D2]/20 select-none">“</span>
              <blockquote className="font-serif text-xl sm:text-2xl text-[#0D1F47] font-bold italic leading-snug -mt-4 mb-3">
                “A rising tide lifts every entrepreneur.”
              </blockquote>
              <p className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                — Peers Global
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Luxury Night Sky Closing Banner ─── */}
      <section
        id="download-unity"
        className="relative py-20 bg-[#0B1220] text-white overflow-hidden border-t border-slate-800"
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Image
            src="/images/membership-mountain-closing.jpg"
            alt="Night sky over mountain peaks"
            fill
            className="object-cover object-bottom"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center md:text-left max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                Learn from experience, not theory.
              </h2>
              <p className="text-sm sm:text-base text-slate-300">
                Join thousands of verified business leaders sharing practical frameworks and accelerating growth together.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0062D2] hover:bg-[#1a42c0] text-white text-xs sm:text-sm font-bold shadow-[0_4px_14px_rgba(0,98,210,0.35)] transition-all uppercase tracking-wider"
                >
                  Apply to Join
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/unity"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/20 bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-semibold transition-all backdrop-blur-sm"
                >
                  Download Unity App
                </Link>
              </div>
            </div>

            {/* Right Calligraphy Motto */}
            <div className="text-center md:text-right">
              <p className="font-serif italic text-white/90 text-xl sm:text-2xl leading-relaxed drop-shadow-md font-bold">
                Build Your Business.
                <br />
                Build Your Relationships.
                <br />
                <span className="text-[#D4AF37]">Build Your Circle.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
