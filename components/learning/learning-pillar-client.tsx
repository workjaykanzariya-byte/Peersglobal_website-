'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GalaxyButton } from '@/components/ui/galaxy-button'
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
                <div>
                  <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent inline-block">
                    GROWTH &amp; PRACTITIONER LEARNING
                  </span>
                </div>

                <div className="space-y-2.5">
                  <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-bold text-white tracking-tight leading-[1.14]">
                    <span className="bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent">
                      Learning
                    </span>
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {[
                      {
                        text: '100+ Annual Masterclasses',
                        svgPath: (
                          <>
                            <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                            <path d="M22 10v6" />
                            <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                          </>
                        ),
                      },
                      {
                        text: '20-Min Concise Actionable Formats',
                        svgPath: (
                          <>
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </>
                        ),
                      },
                      {
                        text: 'Taught Only by Active Founders',
                        svgPath: (
                          <>
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          </>
                        ),
                      },
                      {
                        text: 'Verified Business Playbooks',
                        svgPath: (
                          <>
                            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                            <path d="M10 9H8" />
                            <path d="M16 13H8" />
                            <path d="M16 17H8" />
                          </>
                        ),
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-semibold text-white flex items-center gap-2.5 backdrop-blur-sm"
                      >
                        <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <defs>
                            <linearGradient id={`heroPillGrad-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#38BDF8" />
                              <stop offset="50%" stopColor="#818CF8" />
                              <stop offset="100%" stopColor="#FB7185" />
                            </linearGradient>
                          </defs>
                          <g stroke={`url(#heroPillGrad-${idx})`}>
                            {item.svgPath}
                          </g>
                        </svg>
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-l-2 border-[#FB7185] pl-3 py-0.5 text-xs sm:text-sm font-medium text-white/95 italic flex items-center gap-2">
                    <Sparkles className="size-4 shrink-0 text-[#38BDF8]" />
                    <span>&ldquo;A Peer who understands their market makes better decisions and gives better advice to the room.&rdquo;</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <GalaxyButton
                    href="/apply"
                    size="lg"
                    className="text-xs sm:text-sm font-semibold uppercase tracking-wider"
                  >
                    Join Peers Global
                  </GalaxyButton>

                  <GalaxyButton
                    href="#masterclasses"
                    variant="transparent"
                    size="lg"
                    className="text-xs sm:text-sm font-semibold uppercase tracking-wider"
                  >
                    View Masterclasses
                  </GalaxyButton>
                </div>
              </div>

            </div>
          </div>

          {/* Floating Stats Bar */}
          <div className="relative z-10 mt-5 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 items-stretch">
            {[
              {
                number: '100+',
                label: 'Masterclasses Annually',
                svgPath: (
                  <>
                    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                    <path d="M22 10v6" />
                    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                  </>
                ),
              },
              {
                number: '100%',
                label: 'Practitioner Proven',
                svgPath: (
                  <>
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                    <path d="m9 12 2 2 4-4" />
                  </>
                ),
              },
              {
                number: '18+',
                label: 'Industry Circles',
                svgPath: (
                  <>
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </>
                ),
              },
              {
                number: '₹10+ Cr',
                label: 'Compounded Value',
                svgPath: (
                  <>
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </>
                ),
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="h-full rounded-2xl bg-white border border-slate-200/90 p-3.5 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-3.5 shadow-2xs hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="shrink-0">
                  <svg className="size-5" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <defs>
                      <linearGradient id={`learnStatGrad-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#1D4ED8" />
                        <stop offset="100%" stopColor="#E11D48" />
                      </linearGradient>
                    </defs>
                    <g stroke={`url(#learnStatGrad-${i})`}>
                      {stat.svgPath}
                    </g>
                  </svg>
                </div>
                <div>
                  <div className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                    {stat.number}
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wide sm:tracking-wider leading-snug text-slate-500">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
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
                  <div className="mb-2">
                    <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent inline-block">
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
                  <div className="shrink-0">
                    <svg className="size-8" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <defs>
                        <linearGradient id="shieldQuoteGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#1D4ED8" />
                          <stop offset="100%" stopColor="#E11D48" />
                        </linearGradient>
                      </defs>
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" stroke="url(#shieldQuoteGrad)" />
                    </svg>
                  </div>
                  <blockquote className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                    &ldquo;Learn from practitioners with skin in the game, never from textbook theorists.&rdquo;
                  </blockquote>
                  <p className="text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">
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
              <div className="mb-1">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent inline-block">
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
              <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <defs>
                  <linearGradient id="presGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1D4ED8" />
                    <stop offset="100%" stopColor="#E11D48" />
                  </linearGradient>
                </defs>
                <path d="M2 3h20" stroke="url(#presGrad)" />
                <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" stroke="url(#presGrad)" />
                <path d="m7 21 5-5 5 5" stroke="url(#presGrad)" />
              </svg>
              <span>Programmed by Skill Development Leaders</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: 'Working Capital & Vendor Terms',
                category: 'Finance & Cashflow',
                svgPath: (
                  <>
                    <circle cx="8" cy="8" r="6" />
                    <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
                    <path d="M7 6h1v4" />
                    <path d="m16.71 13.88.7.71-2.82 2.82" />
                  </>
                ),
                desc: 'How to structure vendor contracts and credit cycles without falling into liquidity traps during rapid order expansion.',
                duration: '20 mins',
              },
              {
                title: 'Institutional Sales & Enterprise Bidding',
                category: 'B2B Sales',
                svgPath: (
                  <>
                    <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
                    <path d="M9 22v-4h6v4" />
                    <path d="M8 6h.01" />
                    <path d="M16 6h.01" />
                    <path d="M12 6h.01" />
                    <path d="M12 10h.01" />
                    <path d="M12 14h.01" />
                    <path d="M16 10h.01" />
                    <path d="M16 14h.01" />
                    <path d="M8 10h.01" />
                    <path d="M8 14h.01" />
                  </>
                ),
                desc: 'Bypassing brokers and winning corporate accounts through relationship governance and SLA benchmarks.',
                duration: '20 mins',
              },
              {
                title: 'Second-Line Leadership Hiring',
                category: 'Operations',
                svgPath: (
                  <>
                    <rect width="8" height="8" x="3" y="3" rx="2" />
                    <path d="M7 11v4a2 2 0 0 0 2 2h4" />
                    <rect width="8" height="8" x="13" y="13" rx="2" />
                  </>
                ),
                desc: 'Transitioning from founder-dependent management to professionalized general managers and division heads.',
                duration: '20 mins',
              },
              {
                title: 'Cross-Border MSME Trade Compliance',
                category: 'Global Trade',
                svgPath: (
                  <>
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                  </>
                ),
                desc: 'Navigating export documentation, letter of credit risk, and distributor alignment in Southeast Asia and Middle East.',
                duration: '20 mins',
              },
              {
                title: 'Automation & ERP for Mid-Market Plants',
                category: 'Technology',
                svgPath: (
                  <>
                    <rect width="16" height="16" x="4" y="4" rx="2" />
                    <rect width="6" height="6" x="9" y="9" rx="1" />
                    <path d="M15 2v2" />
                    <path d="M15 20v2" />
                    <path d="M2 15h2" />
                    <path d="M2 9h2" />
                    <path d="M20 15h2" />
                    <path d="M20 9h2" />
                    <path d="M9 2v2" />
                    <path d="M9 20v2" />
                  </>
                ),
                desc: 'Deploying cost-effective inventory visibility without overspending on bloated multi-year software packages.',
                duration: '20 mins',
              },
              {
                title: 'Brand Moats in Traditional Industries',
                category: 'Brand & Growth',
                svgPath: (
                  <>
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                    <path d="M5 3v4" />
                    <path d="M19 17v4" />
                    <path d="M3 5h4" />
                    <path d="M17 19h4" />
                  </>
                ),
                desc: 'Building premium pricing power in commodity manufacturing through trust certification and storytelling.',
                duration: '20 mins',
              },
            ].map((cls, idx) => (
              <div
                key={idx}
                className="animated-glow-card group !rounded-3xl cursor-pointer shadow-sm hover:shadow-xl transition-all"
                tabIndex={0}
                role="article"
              >
                <svg className="animated-border-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id={`clsBorderGrad-${idx}`} x1="0%" y1="50%" x2="100%" y2="50%">
                      <stop offset="0%" stopColor="#1D4ED8" />
                      <stop offset="50%" stopColor="#6366F1" />
                      <stop offset="100%" stopColor="#E11D48" />
                    </linearGradient>
                  </defs>
                  <path
                    className="animated-border-path"
                    style={{ stroke: `url(#clsBorderGrad-${idx})` }}
                    d="M 0.8 6 Q 0.8 0.8 6 0.8 L 94 0.8 Q 99.2 0.8 99.2 6 L 99.2 94 Q 99.2 99.2 94 99.2 L 6 99.2 Q 0.8 99.2 0.8 94 Z"
                  />
                </svg>
                <div className="!rounded-3xl p-6 sm:p-7 flex flex-col justify-between h-full bg-white border border-slate-200/90 shadow-2xs group-hover:border-blue-400/30 transition-colors">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="size-11 rounded-2xl bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 transition-transform duration-300">
                        <svg className="size-5 shrink-0" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <defs>
                            <linearGradient id={`clsIconGrad-${idx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#1D4ED8" />
                              <stop offset="100%" stopColor="#E11D48" />
                            </linearGradient>
                          </defs>
                          <g stroke={`url(#clsIconGrad-${idx})`}>
                            {cls.svgPath}
                          </g>
                        </svg>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-[10px] font-mono font-bold text-slate-600">
                        {cls.duration}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-widest bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48] bg-clip-text text-transparent font-bold block">
                        {cls.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:via-[#6366F1] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all">
                        {cls.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                        {cls.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-900 group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:via-[#6366F1] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    <span>Included in Membership</span>
                    <ArrowRight className="size-3.5 group-hover:translate-x-1.5 transition-transform text-[#1D4ED8] group-hover:text-[#E11D48]" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── SECTION 4: SIGNATURE LUXURY CLOSING HERO BANNER ─── */}
      <section
        id="download-unity"
        className="relative py-20 lg:py-28 text-white overflow-hidden border-t border-slate-800"
        style={{
          background: 'linear-gradient(135deg, rgb(6, 17, 44) 0%, rgb(19, 7, 31) 50%, rgb(38, 5, 19) 100%)',
        }}
      >
        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />

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
              <div>
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent inline-block">
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
                <GalaxyButton
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  className="text-xs sm:text-sm font-semibold uppercase tracking-wider"
                >
                  Open Unity App
                </GalaxyButton>

                <GalaxyButton
                  href="/membership"
                  variant="transparent"
                  size="lg"
                  className="text-xs sm:text-sm font-semibold uppercase tracking-wider"
                >
                  Apply for Membership →
                </GalaxyButton>
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
                className="text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] font-bold leading-tight"
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
