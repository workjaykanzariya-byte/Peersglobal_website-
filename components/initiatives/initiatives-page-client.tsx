'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  ChevronRight,
  Globe2,
  Users,
  Sparkles,
  HeartHandshake,
  Leaf,
  Award,
  ExternalLink,
  Target,
  ShieldCheck,
  Building2,
  Zap,
  CheckCircle2,
  Compass,
} from 'lucide-react'

const INITIATIVES = [
  {
    id: '01',
    title: 'Peers Global',
    subtitle: 'Flagship Community of Collaboration',
    tag: 'Flagship Community',
    desc: 'The world’s first community of collaboration. Circles of entrepreneurs across industries, cities and countries, built on trust and contribution.',
    longDesc:
      'Curated rooms of verified business founders, category-exclusive seats, governed monthly agendas, and verified bilateral collaboration tracking through the Unity App.',
    link: '/circles',
    linkText: 'Explore Peers Global',
    isExternal: false,
    icon: Users,
    badgeColor: 'bg-blue-50 text-[#1E4ED8] border-blue-200/80',
    accentBorder: 'border-blue-100 hover:border-blue-300',
    metrics: '19 Circles · 11 Cities · Verified Promoters',
  },
  {
    id: '02',
    title: 'VyapaarJagat',
    subtitle: 'Independent Media Platform for MSMEs',
    tag: 'Independent Media',
    desc: 'A dedicated national media platform for the businesses mainstream business media ignores.',
    longDesc:
      'Founded on one belief: every honest business story deserves respect and visibility. Even if a business shuts down, its story should never die. Reaching over 1M+ business owners across Bharat.',
    link: 'https://vyapaarjagat.com',
    linkText: 'Visit VyapaarJagat.com',
    isExternal: true,
    icon: Globe2,
    badgeColor: 'bg-sky-50 text-sky-700 border-sky-200/80',
    accentBorder: 'border-sky-100 hover:border-sky-300',
    metrics: '1M+ Readers · MSME Awards · National Conclaves',
  },
  {
    id: '03',
    title: 'Fempreneur',
    subtitle: 'National Movement for Women-Led Enterprise',
    tag: 'Women In Business',
    desc: 'Women building businesses face a different set of obstacles, and they are rarely discussed honestly.',
    longDesc:
      'Fempreneur exists so those conversations happen in a room built for them — addressing access to growth capital, scale barriers, family-enterprise balance, and institutional market access.',
    link: '/circles',
    linkText: 'Explore Fempreneur',
    isExternal: false,
    icon: Sparkles,
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200/80',
    accentBorder: 'border-purple-100 hover:border-purple-300',
    metrics: 'Category-Exclusive · Capital & Growth Forums',
  },
  {
    id: '04',
    title: 'Greenpreneur',
    subtitle: 'Sustainable & ESG-Focused Businesses',
    tag: 'Sustainability & ESG',
    desc: 'For entrepreneurs building sustainable and ESG-focused businesses.',
    longDesc:
      'A young sector with policy complexity, specialised funding and long horizons. Greenpreneur brings circular-economy and clean-tech entrepreneurs together to work through it collectively.',
    link: '/circles',
    linkText: 'Explore Greenpreneur',
    isExternal: false,
    icon: Leaf,
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
    accentBorder: 'border-emerald-100 hover:border-emerald-300',
    metrics: 'ESG Compliance · Circular Economy Alliances',
  },
  {
    id: '05',
    title: '1 Million Entrepreneurs International Forum',
    subtitle: 'Section 8 Not-for-Profit Entity',
    tag: 'Philanthropic Arm',
    desc: 'A Section 8 not-for-profit, working toward one million lives impacted through entrepreneurship, collaboration and opportunity.',
    longDesc:
      'Carrying the initiatives that sit outside commercial membership: grassroots mentorship, student founder incubators, and capacity development for first-generation founders.',
    link: '/1-million-mission',
    linkText: 'See 1 Million Mission',
    isExternal: false,
    icon: Award,
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-200/80',
    accentBorder: 'border-amber-100 hover:border-amber-300',
    metrics: '1M Mission · Grassroots Fellowships · Tier 2/3 Focus',
  },
]

export function InitiativesPageClient() {
  const [heroVideo, setHeroVideo] = useState('/videos/homepage-hero-bg.mp4')

  useEffect(() => {
    const loadVideo = () => {
      try {
        const saved = localStorage.getItem('peers_admin_page_media')
        if (saved) {
          const items = JSON.parse(saved)
          const target = items.find(
            (i: any) =>
              (i.pageSlug === '/initiatives' ||
                i.pageId === 'initiatives' ||
                i.pageName === 'Our Initiatives' ||
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
            <span className="text-slate-900 font-bold">Our Initiatives</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-[11px] font-medium text-slate-500">
            <span className="inline-block size-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Unified Portfolio: 5 Platforms Active</span>
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
                    UNIFIED ECOSYSTEM
                  </p>
                  <p className="text-xs font-bold tracking-wider text-white">
                    ONE MISSION · 5 PLATFORMS
                  </p>
                </div>
              </div>
            </div>

            {/* Left Content Area (Overlaid on the crisp white side) */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl flex flex-col gap-5 sm:gap-6">
                
                {/* Eyebrow */}
                <div className="flex items-center gap-2">
                  <span className="h-0.5 w-6 bg-[#1E4ED8]" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E4ED8]">
                    ECOSYSTEM PLATFORMS &amp; ARMS
                  </span>
                </div>

                {/* Main Heading & Subheading in exact homepage serif hierarchy */}
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.85rem] font-normal tracking-tight text-slate-900 leading-[1.18]">
                  Our <span className="italic text-[#1E4ED8]">Initiatives.</span>
                  <span className="text-lg sm:text-xl lg:text-2xl text-slate-700 italic font-normal block mt-1.5 leading-snug">
                    One mission. Several purpose-built platforms.
                  </span>
                </h1>

                {/* Description */}
                <p className="text-sm sm:text-base leading-relaxed text-slate-600 max-w-lg font-normal">
                  Each platform exists because a specific group of entrepreneurs was being left out of the national conversation. Together, they ensure no builder struggles alone.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-5 pt-1">
                  {/* Glowing Unity App Button */}
                  <div className="relative group/unity-btn">
                    <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#E53935] via-[#3B82F6] to-[#1E4ED8] opacity-0 blur-md transition-all duration-500 group-hover/unity-btn:opacity-80 group-hover/unity-btn:blur-lg" />
                    
                    <Link
                      href="/unity"
                      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#1E4ED8] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(30,78,216,0.30)] transition-all duration-200 hover:bg-[#1a42c0] hover:-translate-y-[2px] hover:shadow-[0_8px_22px_rgba(30,78,216,0.40)] active:scale-[0.97]"
                    >
                      <span>Download Unity App</span>
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                    </Link>
                  </div>

                  <a
                    href="#portfolio"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-xs transition-all duration-200 hover:bg-slate-50 hover:border-slate-400 hover:-translate-y-[2px] active:scale-[0.98]"
                  >
                    <span>Explore Platforms</span>
                  </a>
                </div>

                {/* 3 Impact Highlights */}
                <div className="mt-2 grid grid-cols-3 gap-4 sm:gap-6 border-t border-slate-200/80 pt-6">
                  <div>
                    <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">5</p>
                    <p className="text-xs text-slate-600 font-semibold leading-snug mt-1">Dedicated Arms</p>
                    <p className="text-[11px] text-slate-400 font-medium">B2B &amp; Non-Profit</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">1M+</p>
                    <p className="text-xs text-slate-600 font-semibold leading-snug mt-1">Entrepreneurs</p>
                    <p className="text-[11px] text-slate-400 font-medium">National Reach</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">100%</p>
                    <p className="text-xs text-slate-600 font-semibold leading-snug mt-1">Unified Code</p>
                    <p className="text-[11px] text-slate-400 font-medium">LSR Growth Model</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* ─── Fast-Track Callout Card ─── */}
          <div className="rounded-2xl sm:rounded-[28px] bg-white border border-slate-200/80 shadow-sm p-5 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-5 transition-all duration-300 hover:shadow-md hover:border-blue-200">
            <div className="flex items-center gap-4 text-left w-full sm:w-auto">
              <div className="size-12 sm:size-14 rounded-2xl bg-blue-50 border border-blue-100/80 flex items-center justify-center text-[#1E4ED8] shrink-0 shadow-2xs">
                <Target className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <h2 className="font-serif text-base sm:text-lg font-bold text-[#061836]">
                  Purposeful Division — Shared Values
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 font-normal">
                  They share the same belief, the same code and the same mission. What differs is the specialized group they serve.
                </p>
              </div>
            </div>

            <a
              href="#portfolio"
              className="shrink-0 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#1E4ED8] text-white text-xs sm:text-sm font-semibold hover:bg-[#1a42c0] transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
            >
              <span>View All 5 Platforms</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>

      {/* ─── Section 2: Why More Than One (Rich 2-Column Split Layout) ─── */}
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
            
            {/* Left Column: Editorial Philosophy (6 cols) */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="h-0.5 w-6 bg-[#1E4ED8]" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E4ED8]">
                    PURPOSEFUL DIVISION
                  </span>
                </div>
                
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-[#061836] tracking-tight leading-[1.18]">
                  Why more than <span className="italic text-[#1E4ED8]">one platform?</span>
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                <p className="text-base sm:text-lg font-serif italic text-slate-950 font-normal border-l-2 border-[#1E4ED8] pl-4 py-0.5">
                  &ldquo;Entrepreneurs are not one homogeneous audience.&rdquo;
                </p>
                <p>
                  A woman building a high-growth enterprise in a market that does not take her seriously faces something fundamentally different from a manufacturer expanding into export supply chains. A founder building a circular sustainability enterprise faces something different again.
                </p>
                <p className="font-semibold text-slate-900">
                  Each initiative exists because a particular group needed a room built specifically for them — with tailored governance, dedicated resources, and peers who speak their exact operational language.
                </p>
              </div>

              {/* Multiplier Quote Box */}
              <div className="relative overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50/80 via-white to-slate-50 p-6 shadow-2xs">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    &ldquo;They share the same belief, the same code and the same mission. What differs is who they serve.&rdquo;
                  </p>
                  <p
                    className="text-xl sm:text-2xl text-[#1E4ED8] font-semibold select-none shrink-0"
                    style={{ fontFamily: 'var(--font-script)' }}
                  >
                    Unified Mission ✨
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: 3 Core Pillars of Distinction Card (6 cols) */}
            <div className="lg:col-span-6">
              <div className="p-7 sm:p-9 rounded-2xl sm:rounded-[32px] bg-white border border-slate-200/90 shadow-[0_16px_40px_rgba(30,78,216,0.06)] space-y-5">
                <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-slate-900">
                      Tailored Operating Rooms
                    </h3>
                    <p className="text-xs text-slate-500 font-normal">
                      How specialized platforms eliminate generic networking.
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[11px] font-mono font-bold text-[#1E4ED8]">
                    PRECISION
                  </span>
                </div>

                <div className="space-y-3.5">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                    <div className="size-10 rounded-xl bg-blue-50 text-[#1E4ED8] flex items-center justify-center border border-blue-100 shrink-0 shadow-2xs">
                      <Users className="size-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-bold text-slate-900">Exclusivity in the Room</h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-0.5">Category exclusivity ensures candid, non-competitive peer conversations without guarded dialogue.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                    <div className="size-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center border border-purple-100 shrink-0 shadow-2xs">
                      <Sparkles className="size-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-bold text-slate-900">Dedicated Problem Space</h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-0.5">Focusing specifically on unique institutional hurdles: procurement access, ESG compliance, and venture funding.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                    <div className="size-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100 shrink-0 shadow-2xs">
                      <CheckCircle2 className="size-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-bold text-slate-900">Verified Outcomes</h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-0.5">Tracking real bilateral collaborations and lives impacted through the Unity App rather than attendance numbers.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Section 3: The Unified Portfolio (5 Master Cards) ─── */}
      <section id="portfolio" className="py-16 sm:py-24 lg:py-28 bg-[#FFFFFF] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
            <div className="flex items-center justify-center gap-2">
              <span className="h-0.5 w-6 bg-[#1E4ED8]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E4ED8]">
                THE UNIFIED PORTFOLIO
              </span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#061836] tracking-tight leading-[1.15]">
              The 5 Ecosystem Initiatives
            </h2>
            
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
              Five distinct expressions of one governing commitment: no entrepreneur builds alone.
            </p>
          </div>

          {/* Cards Stack */}
          <div className="space-y-6 sm:space-y-8">
            {INITIATIVES.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className={`group relative p-8 sm:p-10 md:p-12 rounded-2xl sm:rounded-[32px] bg-white border ${item.accentBorder} shadow-[0_6px_24px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 overflow-hidden`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                    
                    {/* Left Details */}
                    <div className="space-y-4 max-w-3xl">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className={`px-3.5 py-1 rounded-full text-xs font-bold border ${item.badgeColor}`}>
                          {item.tag}
                        </span>
                        <span className="text-xs uppercase tracking-widest font-mono font-bold text-slate-400">
                          PLATFORM {item.id}
                        </span>
                        <span className="text-xs font-mono text-slate-500 hidden sm:inline">
                          · {item.metrics}
                        </span>
                      </div>

                      <div>
                        <div className="flex items-center gap-3">
                          <div className="size-11 sm:size-12 rounded-2xl bg-blue-50 text-[#1E4ED8] flex items-center justify-center border border-blue-100/90 shadow-2xs group-hover:scale-105 transition-transform">
                            <Icon className="size-5 sm:size-6" />
                          </div>
                          <div>
                            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#061836] group-hover:text-[#1E4ED8] transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-xs sm:text-sm font-semibold text-[#1E4ED8]">
                              {item.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>

                      <p className="text-base sm:text-lg text-slate-800 font-serif italic border-l-2 border-[#1E4ED8]/60 pl-3 py-0.5">
                        &ldquo;{item.desc}&rdquo;
                      </p>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {item.longDesc}
                      </p>
                    </div>

                    {/* Right CTA Button */}
                    <div className="shrink-0 pt-2 lg:pt-0">
                      {item.isExternal ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#061836] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#1E4ED8] transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
                        >
                          <span>{item.linkText}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <Link
                          href={item.link}
                          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#1E4ED8] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#1a42c0] transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
                        >
                          <span>{item.linkText}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </div>

                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ─── Closing Banner: One mission across all of them ─── */}
      <section className="relative bg-[#0062D2] text-white py-24 md:py-32 overflow-hidden">
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
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-sky-200 font-mono font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              THE UNIFIED MEASURE
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-white tracking-tight leading-[1.15]">
              One mission across all of them: <br className="hidden sm:inline" />
              <span className="italic text-cyan-200">&ldquo;We are not counting members. We are counting lives impacted.&rdquo;</span>
            </h2>
            <p className="text-base sm:text-lg text-white/90 font-normal max-w-xl mx-auto leading-relaxed">
              Connect with your peers through the Unity App and discover your category-exclusive Circle.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/unity"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#0062D2] hover:bg-slate-100 text-sm font-bold transition-all shadow-lg hover:shadow-xl uppercase tracking-wider active:scale-[0.98]"
            >
              <span>Download Unity App</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
