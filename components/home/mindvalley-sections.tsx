'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BarChart3,
  Boxes,
  Briefcase,
  Building2,
  Calendar,
  Check,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Download,
  Globe2,
  Handshake,
  HeartHandshake,
  Layers,
  Lightbulb,
  Lock,
  MapPin,
  Play,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'
import { SITE } from '@/lib/data/site'

/* =========================================================================
   SECTION 1: WHAT IS PEERS GLOBAL (Mindvalley Screenshot 1)
   ========================================================================= */

export function WhatIsPeersGlobalSection() {
  const [videoUrl, setVideoUrl] = useState('/videos/homepage-hero-bg.mp4')
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    try {
      const saved = localStorage.getItem('peers_admin_page_media')
      if (saved) {
        const list = JSON.parse(saved)
        if (Array.isArray(list)) {
          const match = list.find(
            (item: any) =>
              (item.pageSlug === '/' || item.pageName === 'Home Page') &&
              item.isActive !== false &&
              item.mediaUrl
          )
          if (match && match.mediaUrl) {
            setVideoUrl(match.mediaUrl)
          }
        }
      }
    } catch (e) {
      // fallback
    }
  }, [])

  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24 border-b border-slate-200">
      <div className="shell flex flex-col items-center text-center">
        
        {/* Eyebrow */}
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-600 mb-4 block">
          WHAT IS PEERS GLOBAL
        </span>

        {/* Headline */}
        <h1 className="font-sans text-3xl sm:text-4xl lg:text-[3.25rem] font-semibold text-slate-900 leading-[1.18] tracking-tight max-w-4xl">
          You were told business is a solo journey.
          <br className="hidden sm:inline" />
          <span className="block mt-1 sm:mt-2 text-slate-900">
            We&apos;re here to prove you don&apos;t have to build alone.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 max-w-2xl text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
          The world&apos;s most advanced community of collaboration — uniting entrepreneurs, founders, and industry leaders to build business, trusted relationships, and lifelong impact.
        </p>

        {/* 3 Prominent Metric Numbers (Exact Mindvalley Style) */}
        <div className="mt-10 sm:mt-12 grid grid-cols-3 gap-6 sm:gap-12 md:gap-16 max-w-2xl w-full">
          {/* Stat 1 */}
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-none">
              1M+
            </span>
            <span className="mt-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.08em] text-slate-600">
              MISSION 2030
            </span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-none">
              10,000+
            </span>
            <span className="mt-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.08em] text-slate-600">
              COLLABORATION WINS
            </span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-none">
              100+
            </span>
            <span className="mt-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.08em] text-slate-600">
              MENTORS &amp; LEADERS
            </span>
          </div>
        </div>

        {/* Wide Featured Cinematic Video Frame (Screenshot 1 Bottom) */}
        <div className="mt-12 sm:mt-14 w-full max-w-5xl">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-950 shadow-2xl border border-slate-200/80">
            <video
              ref={videoRef}
              key={videoUrl}
              autoPlay
              loop
              muted
              playsInline
              className="size-full object-cover"
            >
              <source src={videoUrl} type="video/mp4" />
              <source src="/videos/homepage-hero-bg.mp4" type="video/mp4" />
            </video>

            {/* Subtle Gradient Overlays */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/20" />

            {/* Overlay Tag Top Left */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-10 flex items-center gap-2 rounded-full bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 border border-white/20">
              <span className="size-2 rounded-full bg-[#0078D4] animate-pulse" />
              <span className="text-[11px] font-semibold text-white uppercase tracking-wider">
                Real People · Real Collaboration
              </span>
            </div>

            {/* Overlay Caption Bottom Left */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-10 text-left">
              <span className="text-xs sm:text-sm font-semibold text-white/90 uppercase tracking-widest block">
                PEERS GLOBAL LEADERSHIP FORUM
              </span>
              <span className="text-sm sm:text-lg font-semibold text-white drop-shadow-md">
                Where category leaders meet to build together
              </span>
            </div>

            {/* CTA Overlay Bottom Right */}
            <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 z-10">
              <Link
                href="/membership"
                className="inline-flex items-center gap-2 rounded-[4px] bg-[#0078D4] hover:bg-[#006cbd] px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white transition-colors shadow-md"
              >
                <span>Join Peers Global</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

/* =========================================================================
   SECTION 2: HOW PEERS GLOBAL WORKS (Mindvalley Screenshot 2)
   ========================================================================= */

export function HowPeersGlobalWorksSection() {
  const pillars = [
    {
      badge: 'AI & Digital Platform',
      title: 'AI To Help You Grow Faster',
      subtitle: 'Unity App: Your 24/7 Collaboration Companion',
      description:
        'Access smart peer matchmaking, live opportunity feeds, and direct introductions across cities in real time.',
      bgGradient: 'bg-gradient-to-b from-[#1c2438] to-[#0d1322]',
      image: '/images/unity-app-phone.png',
      hasPhoneMock: true,
      link: 'https://unity.peersglobal.com',
      linkText: 'Explore Unity App',
    },
    {
      badge: 'Curated Board Masterminds',
      title: 'Workshops & Circles With',
      subtitle: 'The Nation’s Best Mentors & Chairs',
      description:
        'Category-exclusive trusted circles of 20–40 founders. Zero competition inside the room.',
      bgGradient: 'bg-gradient-to-b from-[#2a133d] to-[#140822]',
      image: '/images/who-we-are-inner-board.jpg',
      hasGridMock: true,
      link: '/circles',
      linkText: 'Explore Circles',
    },
    {
      badge: 'Curated Growth Pathways',
      title: 'Personalized Business Scale',
      subtitle: 'Through Systematic LSR Framework',
      description:
        'Learning, Sales, and Resources — a structured roadmap delivering compounding business and life outcomes.',
      bgGradient: 'bg-gradient-to-b from-[#132c3d] to-[#091520]',
      image: '/images/lsr-city-sunrise.jpg',
      has3DMock: true,
      link: '/the-idea',
      linkText: 'Discover LSR Model',
    },
    {
      badge: 'Measurable Outcomes',
      title: 'Learn & Partner Across',
      subtitle: '10+ High-Impact Collaboration Forms',
      description:
        'From warm enterprise introductions to cross-border joint ventures and capital syndication.',
      bgGradient: 'bg-gradient-to-b from-[#1b332b] to-[#0c1c17]',
      image: '/images/who-we-are-impact.jpg',
      hasProgramMock: true,
      link: '/10-forms-of-collaboration',
      linkText: 'View 10 Forms',
    },
  ]

  return (
    <section id="how-it-works" className="relative overflow-hidden bg-[#f8fafc] py-16 sm:py-20 lg:py-24 border-b border-slate-200">
      <div className="shell flex flex-col items-center">
        
        {/* Eyebrow */}
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-600 mb-2 block text-center">
          OUR ECOSYSTEM
        </span>

        {/* Section Heading */}
        <h2 className="font-sans text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-slate-900 leading-tight tracking-tight text-center">
          How Peers Global Works
        </h2>

        <p className="mt-3 max-w-xl text-center text-sm sm:text-base text-slate-600 font-normal">
          Four interconnected pillars engineered to eliminate solo-founder isolation and turn collective wisdom into compound growth.
        </p>

        {/* 4 Feature Columns / Cards Grid (Screenshot 2) */}
        <div className="mt-12 sm:mt-14 grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl ${pillar.bgGradient} p-6 sm:p-7 text-white shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl border border-white/10`}
            >
              {/* Header Details */}
              <div className="flex flex-col gap-2 z-10">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-300/80">
                  {pillar.badge}
                </span>

                <h3 className="font-sans text-lg sm:text-xl font-semibold text-white leading-snug">
                  {pillar.title}
                  <span className="block text-white/95 mt-0.5 font-semibold">
                    {pillar.subtitle}
                  </span>
                </h3>

                <p className="mt-2 text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>

              {/* Card Visual Graphic Stage */}
              <div className="relative mt-6 aspect-[4/5] w-full overflow-hidden rounded-xl bg-slate-900/60 border border-white/10 flex items-center justify-center">
                {pillar.hasPhoneMock ? (
                  <div className="relative size-full p-2 flex items-center justify-center">
                    <div className="relative h-full w-[85%] rounded-xl overflow-hidden border border-white/20 bg-slate-950 p-2 shadow-inner">
                      {/* Mini mobile screen mock */}
                      <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[9px] text-slate-400 font-semibold">
                        <span>Unity AI Companion</span>
                        <span className="size-1.5 rounded-full bg-emerald-400" />
                      </div>
                      <div className="mt-2 flex flex-col gap-1.5">
                        <div className="rounded bg-blue-600/20 border border-blue-500/30 p-2 text-[10px] text-blue-200">
                          “Connecting with 3 Category Leaders in Tech &amp; Manufacturing...”
                        </div>
                        <div className="rounded bg-slate-800 p-2 text-[10px] text-slate-300">
                          ✓ Opportunity Matched: Cross-border trade delegation
                        </div>
                        <div className="rounded bg-slate-800 p-2 text-[10px] text-slate-300">
                          ✓ Monthly Circle Conclave: RSVP Confirmed
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative size-full">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>
                )}
              </div>

              {/* Bottom CTA Link */}
              <div className="mt-5 pt-3 border-t border-white/10 z-10 flex items-center justify-between">
                <Link
                  href={pillar.link}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-blue-300 transition-colors"
                >
                  <span>{pillar.linkText}</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <span className="text-[11px] font-mono text-slate-400">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

/* =========================================================================
   SECTION 3: CIRCLE MASTERY PATHWAYS (Mindvalley Screenshot 3)
   ========================================================================= */

export function CirclesPathwaysSection() {
  const [activeCircleIndex, setActiveCircleIndex] = useState(0)

  const circleList = [
    {
      title: 'Tech, Cloud & AI Circle',
      chair: 'Ananya Sharma',
      role: 'Enterprise Cloud Architect & Founder',
      category: 'TECHNOLOGY',
      image: '/images/who-we-are-mountain.jpg',
      badge: 'Category Exclusive',
    },
    {
      title: 'Manufacturing & Supply Chain',
      chair: 'Rajesh Shah',
      role: 'MD, Precision Engineering Ltd',
      category: 'INDUSTRY',
      image: '/images/who-we-are-boardroom.jpg',
      badge: '30 Charter Seats',
    },
    {
      title: 'Real Estate & Infrastructure',
      chair: 'Vikram Patel',
      role: 'Managing Partner, InfraVentures',
      category: 'INFRASTRUCTURE',
      image: '/images/who-we-are-inner-board.jpg',
      badge: 'Category Exclusive',
    },
    {
      title: 'Import, Export & Global Trade',
      chair: 'Sameer Mehta',
      role: 'Global Trade Director',
      category: 'GLOBAL TRADE',
      image: '/images/lsr-city-sunrise.jpg',
      badge: 'Cross-Border',
    },
    {
      title: 'Healthcare & MedTech',
      chair: 'Dr. Pooja Agrawal',
      role: 'Founder, Apex Life Sciences',
      category: 'HEALTHCARE',
      image: '/images/who-we-are-impact.jpg',
      badge: 'Category Exclusive',
    },
    {
      title: 'Investors & Growth Equity',
      chair: 'Anand Sharma',
      role: 'Principal, Angel Syndicate',
      category: 'CAPITAL',
      image: '/images/founder-earth-showcase.jpg',
      badge: 'Private Syndicate',
    },
    {
      title: 'Retail, FMCG & D2C Brands',
      chair: 'Neha Kothari',
      role: 'CEO, Organic Living Co.',
      category: 'CONSUMER',
      image: '/images/who-we-are-friends.jpg',
      badge: 'Category Exclusive',
    },
    {
      title: 'Franchise & Retail Expansion',
      chair: 'Amit Desai',
      role: 'Franchise Master Operator',
      category: 'EXPANSION',
      image: '/images/who-we-are-boardroom.jpg',
      badge: 'Category Exclusive',
    },
    {
      title: 'Renewable Energy & Sustainability',
      chair: 'Pradeep Joshi',
      role: 'Director, SolarGrid Tech',
      category: 'ENERGY',
      image: '/images/lsr-city-sunrise.jpg',
      badge: 'ESG Focus',
    },
    {
      title: 'Chemicals & Advanced Materials',
      chair: 'Hardik Parmar',
      role: 'Industrial Polymers Corp',
      category: 'CHEMICALS',
      image: '/images/who-we-are-mountain.jpg',
      badge: 'Category Exclusive',
    },
    {
      title: 'Women in Leadership Circle',
      chair: 'Fatima Khan',
      role: 'President, Venture Council',
      category: 'LEADERSHIP',
      image: '/images/who-we-are-impact.jpg',
      badge: 'Empowerment',
    },
    {
      title: 'Global Founders Forum',
      chair: 'Dr. Pravin Parmar',
      role: 'Founder & Chief Mentor',
      category: 'GOVERNANCE',
      image: '/images/founder-new.png',
      badge: 'Mastermind',
    },
  ]

  const activeCircle = circleList[activeCircleIndex]

  return (
    <section id="circles-pathways" className="relative overflow-hidden bg-[#0a1222] py-16 sm:py-20 lg:py-24 text-white border-b border-white/10">
      
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -top-40 right-10 size-[500px] rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-10 size-[400px] rounded-full bg-[#0078D4]/10 blur-[130px]" />

      <div className="shell relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-400 block mb-2">
              CURATED INDUSTRY MASTERMINDS
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight leading-tight">
              The Circle Mastery Pathway
            </h2>
          </div>
          <Link
            href="/circles"
            className="inline-flex items-center gap-2 rounded-[4px] border border-white/20 bg-white/10 hover:bg-white/20 px-4 py-2 text-xs font-semibold text-white transition-colors backdrop-blur-sm self-start sm:self-auto"
          >
            <span>View All 18 Circles</span>
            <ArrowRight className="size-3.5" />
          </Link>
        </div>

        {/* 2-Column Mindvalley Layout (Screenshot 3) */}
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] items-start">
          
          {/* Left Column: Featured Highlight Card */}
          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-[#111f38] via-[#0d182d] to-[#070e1c] p-7 sm:p-9 shadow-2xl">
            
            {/* Top Glowing Emblem Ring */}
            <div className="relative mb-6 flex size-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#0078D4] to-blue-400 text-white shadow-[0_0_25px_rgba(0,120,212,0.6)]">
              <ShieldCheck className="size-8" />
            </div>

            {/* Tag */}
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-400 block mb-2">
              {activeCircle.category} · {activeCircle.badge}
            </span>

            {/* Title */}
            <h3 className="font-sans text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug">
              {activeCircle.title}
            </h3>

            {/* Description */}
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Join category-exclusive leaders in high-trust advisory sessions. Eliminate solo-founder blindspots, co-bid on regional contracts, and access verified decision-makers.
            </p>

            {/* 3 Value Checkpoints */}
            <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-6">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                <Check className="size-4 text-[#0078D4] shrink-0 mt-0.5" />
                <span>Zero internal competition — category exclusivity strictly enforced</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                <Check className="size-4 text-[#0078D4] shrink-0 mt-0.5" />
                <span>Chairperson &amp; Director: <strong className="text-white font-semibold">{activeCircle.chair}</strong></span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                <Check className="size-4 text-[#0078D4] shrink-0 mt-0.5" />
                <span>Direct integration with the Unity App opportunity pipeline</span>
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="mt-8 pt-2">
              <Link
                href="/circles/find"
                className="inline-flex items-center justify-center gap-2 rounded-[4px] bg-white hover:bg-slate-100 text-slate-900 font-semibold text-sm px-6 py-3 transition-colors shadow-md w-full sm:w-auto"
              >
                <span>Explore This Circle</span>
                <ArrowRight className="size-4 text-slate-900" />
              </Link>
            </div>

          </div>

          {/* Right Column: 12 Interactive Circle Tiles (Screenshot 3) */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4 max-h-[560px] overflow-y-auto pr-1 select-none">
              {circleList.map((circle, idx) => {
                const isSelected = activeCircleIndex === idx
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveCircleIndex(idx)}
                    className={`group text-left relative overflow-hidden rounded-xl border p-3.5 transition-all duration-200 ${
                      isSelected
                        ? 'border-[#0078D4] bg-white/15 shadow-[0_0_20px_rgba(0,120,212,0.35)]'
                        : 'border-white/10 bg-white/5 hover:border-white/25 hover:bg-white/10'
                    }`}
                  >
                    {/* Thumbnail Image */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-slate-900 mb-2.5">
                      <Image
                        src={circle.image}
                        alt={circle.title}
                        fill
                        sizes="180px"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <span className="absolute bottom-1.5 left-2 text-[9.5px] font-semibold text-white/90 uppercase tracking-wider">
                        {circle.category}
                      </span>
                    </div>

                    <h4 className="font-sans text-xs sm:text-[13px] font-semibold text-white leading-snug line-clamp-2">
                      {circle.title}
                    </h4>

                    <p className="mt-1 text-[11px] text-slate-300 truncate font-normal">
                      {circle.chair}
                    </p>
                  </button>
                )
              })}
            </div>

            {/* Navigation Indicators */}
            <div className="flex items-center justify-between pt-2 text-xs text-slate-400">
              <span>Showing 12 Active Circles across India &amp; Global Chapters</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveCircleIndex((prev) => (prev > 0 ? prev - 1 : circleList.length - 1))}
                  className="p-1.5 rounded border border-white/20 bg-white/5 hover:bg-white/20 text-white transition-colors"
                  aria-label="Previous circle"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCircleIndex((prev) => (prev < circleList.length - 1 ? prev + 1 : 0))}
                  className="p-1.5 rounded border border-white/20 bg-white/5 hover:bg-white/20 text-white transition-colors"
                  aria-label="Next circle"
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

/* =========================================================================
   SECTION 4: MEET YOUR MENTORS & LEADERSHIP (Mindvalley Screenshot 4)
   ========================================================================= */

export function MeetMentorsSection() {
  const mentors = [
    {
      name: 'DR. PRAVIN PARMAR',
      role: 'Founder & Chief Mentor',
      focus: 'Ecosystem Architecture & Community Scale',
      image: '/images/founder-new.png',
    },
    {
      name: 'RAJESH SHAH',
      role: 'Chairperson, Manufacturing',
      focus: 'Precision Engineering & Export Supply Chains',
      image: '/images/peers-avatars/rajesh-shah.jpg',
    },
    {
      name: 'VIKRAM PATEL',
      role: 'Director, Real Estate',
      focus: 'Infrastructure, Construction & Joint Ventures',
      image: '/images/peers-avatars/vikram-patel.jpg',
    },
    {
      name: 'ANANYA SHARMA',
      role: 'Chairperson, Tech & Cloud',
      focus: 'AI Infrastructure & Enterprise Software',
      image: '/images/peers-avatars/priya-desai.jpg',
    },
    {
      name: 'SAMEER MEHTA',
      role: 'Director, Global Trade',
      focus: 'Cross-Border Bilateral Alliances & M&A',
      image: '/images/peers-avatars/amit-desai.jpg',
    },
    {
      name: 'NEHA KOTHARI',
      role: 'Director, Retail & D2C',
      focus: 'Consumer Brand Scaling & Distribution',
      image: '/images/peers-avatars/neha-kothari.jpg',
    },
  ]

  return (
    <section id="mentors-leadership" className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-200">
      <div className="shell flex flex-col items-center text-center">
        
        {/* Eyebrow */}
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-600 mb-3 block">
          MEET YOUR MENTORS &amp; LEADERSHIP
        </span>

        {/* Section Headline (Screenshot 4) */}
        <h2 className="font-sans text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-slate-900 leading-tight tracking-tight">
          100+ Leaders. Decades of Wisdom.
        </h2>

        {/* Subtitle */}
        <p className="mt-4 max-w-2xl text-center text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
          Entrepreneurs, industry chairs, category titans, and visionary founders who have spent decades mastering their craft — so you can accelerate yours.
        </p>

        {/* Tall Vertical Mentor Cards (Exact Mindvalley Screenshot 4 Typography & Layout) */}
        <div className="mt-12 sm:mt-14 grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {mentors.map((mentor, idx) => (
            <div
              key={idx}
              className="group relative flex aspect-[9/16] w-full flex-col justify-end overflow-hidden rounded-2xl bg-slate-950 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Portrait Photo */}
              <Image
                src={mentor.image}
                alt={mentor.name}
                fill
                sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105 filter saturate-[0.95]"
              />

              {/* Dark Gradient Overlay for Strong Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90" />

              {/* Bold Uppercase Typography Overlaid on Photo (Screenshot 4 Style) */}
              <div className="relative z-10 p-3 sm:p-4 text-left flex flex-col">
                <h3 className="font-sans text-sm sm:text-base font-semibold uppercase tracking-tight text-white leading-tight">
                  {mentor.name}
                </h3>
                <span className="mt-1 text-[11px] sm:text-xs font-normal text-slate-300 leading-snug">
                  {mentor.role}
                </span>
                <span className="mt-1 text-[10px] text-blue-300 font-medium line-clamp-1">
                  {mentor.focus}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Link */}
        <div className="mt-10 sm:mt-12">
          <Link
            href="/leadership"
            className="inline-flex items-center gap-2 rounded-[4px] bg-[#0078D4] hover:bg-[#006cbd] text-white font-semibold text-sm px-6 py-3 transition-colors shadow-none"
          >
            <span>Explore Full Leadership Council</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>

      </div>
    </section>
  )
}

/* =========================================================================
   SECTION 5: CASE STUDIES & SUCCESS MOSAIC (Mindvalley Screenshot 5)
   ========================================================================= */

export function CollaborationStoriesMosaicSection() {
  const avatars = [
    { src: '/images/peers-avatars/rajesh-shah.jpg', alt: 'Rajesh Shah - Precision Engineering', size: 'size-20 sm:size-24', pos: 'top-4 left-6 sm:top-8 sm:left-12' },
    { src: '/images/peers-avatars/vikram-patel.jpg', alt: 'Vikram Patel - Real Estate', size: 'size-24 sm:size-28', pos: 'top-2 right-8 sm:top-6 sm:right-16' },
    { src: '/images/peers-avatars/neha-kothari.jpg', alt: 'Neha Kothari - Retail Brands', size: 'size-18 sm:size-22', pos: 'bottom-8 left-10 sm:bottom-12 sm:left-20' },
    { src: '/images/peers-avatars/priya-desai.jpg', alt: 'Priya Desai - MedTech Systems', size: 'size-22 sm:size-26', pos: 'bottom-6 right-10 sm:bottom-10 sm:right-20' },
    { src: '/images/peers-avatars/amit-desai.jpg', alt: 'Amit Desai - Global Trade', size: 'size-16 sm:size-20', pos: 'top-1/2 left-2 sm:left-4 -translate-y-1/2' },
    { src: '/images/peers-avatars/anand-sharma.jpg', alt: 'Anand Sharma - Capital Ventures', size: 'size-18 sm:size-22', pos: 'top-1/2 right-2 sm:right-4 -translate-y-1/2' },
    { src: '/images/peers-avatars/pradeep-joshi.jpg', alt: 'Pradeep Joshi - Solar Tech', size: 'size-14 sm:size-16', pos: 'top-20 left-1/4' },
    { src: '/images/peers-avatars/fatima-khan.jpg', alt: 'Fatima Khan - Venture Council', size: 'size-16 sm:size-18', pos: 'bottom-20 right-1/4' },
  ]

  return (
    <section id="success-stories" className="relative overflow-hidden bg-[#fafcff] py-20 sm:py-24 lg:py-28 border-b border-slate-200">
      
      {/* Surrounding Floating Member Avatar Tiles (Mindvalley Screenshot 5) */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden hidden md:block">
        {avatars.map((av, idx) => (
          <div
            key={idx}
            className={`absolute ${av.pos} ${av.size} rounded-2xl overflow-hidden shadow-xl border-2 border-white bg-slate-200 transition-transform duration-500 hover:scale-110 pointer-events-auto`}
          >
            <Image
              src={av.src}
              alt={av.alt}
              fill
              sizes="120px"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="shell relative z-10 flex flex-col items-center text-center max-w-3xl">
        
        {/* Huge Stat Number (Screenshot 5) */}
        <span className="font-sans text-5xl sm:text-6xl lg:text-7xl font-semibold text-slate-900 tracking-tight leading-none">
          10,000+
        </span>

        {/* Title */}
        <h2 className="mt-3 font-sans text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight">
          Case Studies of Mutual Success
        </h2>

        {/* Description */}
        <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-xl">
          Peers Global has some of the highest verified collaboration and peer retention rates in the world for transforming business leaders. Browse real case studies and stories of success on{' '}
          <span className="text-[#0078D4] font-semibold">stories.peersglobal.com</span>.
        </p>

        {/* Action Button (Screenshot 5) */}
        <div className="mt-8">
          <Link
            href="/stories"
            className="inline-flex items-center gap-2 rounded-[4px] bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm px-8 py-3.5 transition-colors shadow-md"
          >
            <span>Read Our Stories</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* Mobile Avatar Thumbnails Strip for Small Screens */}
        <div className="mt-10 flex items-center justify-center gap-2 md:hidden">
          {avatars.slice(0, 5).map((av, idx) => (
            <div key={idx} className="size-12 rounded-full overflow-hidden border-2 border-white shadow-md relative">
              <Image src={av.src} alt={av.alt} fill sizes="48px" className="object-cover" />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
