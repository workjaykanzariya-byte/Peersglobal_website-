'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  HeartHandshake,
  Users2,
  Sparkles,
  ShieldCheck,
  Compass,
  Building2,
  Smartphone,
  CheckCircle2,
  Layers,
  Award,
  BookOpen,
  TrendingUp,
  Quote,
  Lightbulb,
  Sprout,
  GraduationCap,
  PhoneCall,
  BarChart3,
  Headphones,
  Play,
  ChevronRight,
  Globe,
  MapPin,
  Trophy,
  Gift,
  Heart,
  Users,
  Target,
  User,
  X,
} from 'lucide-react'
import { Cta, Eyebrow, ClosingCtaSection } from '@/components/site/ui'
import { usePageMedia, ResolvedMediaItem } from '@/lib/hooks/use-page-media'

export function TheIdeaClient() {
  const { getMedia } = usePageMedia('our-world')

  // Modal player state for full screen/interactive playback
  const [activeModalMedia, setActiveModalMedia] = useState<ResolvedMediaItem | null>(null)

  // 0. Hero Collage 4-part Geometric Videos (Dynamic & Connected to Admin)
  const heroShape1Media = getMedia({
    sectionName: 'The Idea',
    subModuleName: 'HERO COLLAGE — TOP LEFT (BOARDROOM)',
    subModuleId: 'sub-our-world-the-idea-hero-1',
    fallbackUrl: '/videos/leadership-hero-bg.mp4',
    fallbackSourceType: 'localhost',
    fallbackTitle: 'Peers Boardroom & Leadership Circle Video',
  })

  const heroShape2Media = getMedia({
    sectionName: 'The Idea',
    subModuleName: 'HERO COLLAGE — TOP RIGHT (CONCLAVE)',
    subModuleId: 'sub-our-world-the-idea-hero-2',
    fallbackUrl: '/videos/hero-background.mp4',
    fallbackSourceType: 'localhost',
    fallbackTitle: 'Peers Global Grand Conclave Video',
  })

  const heroShape3Media = getMedia({
    sectionName: 'The Idea',
    subModuleName: 'HERO COLLAGE — BOTTOM LEFT (PARTNERS)',
    subModuleId: 'sub-our-world-the-idea-hero-3',
    fallbackUrl: '/videos/peers-global-earth-loop.mp4',
    fallbackSourceType: 'localhost',
    fallbackTitle: 'Partners in Business & Friends in Life Video',
  })

  const heroShape4Media = getMedia({
    sectionName: 'The Idea',
    subModuleName: 'HERO COLLAGE — BOTTOM RIGHT (CIRCLES)',
    subModuleId: 'sub-our-world-the-idea-hero-4',
    fallbackUrl: '/videos/stories-hero-bg.mp4',
    fallbackSourceType: 'localhost',
    fallbackTitle: 'Peers Circles Collaboration Video',
  })

  // 1. Resolve media dynamically for Sub-Module: THE SILENT REALITY (Matches Screenshot 3)
  const silentRealityMedia = getMedia({
    sectionName: 'The Idea',
    subModuleName: 'THE SILENT REALITY',
    subModuleId: 'sub-our-world-the-idea-silent-reality',
    fallbackUrl: '/videos/leadership-hero-bg.mp4',
    fallbackSourceType: 'localhost',
    fallbackTitle: 'The Silent Reality — The Problem Nobody Talks About',
  })

  // 2. Resolve media dynamically for Sub-Module: ORIGIN STORY (Matches Screenshot 5)
  const originStoryMedia = getMedia({
    sectionName: 'The Idea',
    subModuleName: 'ORIGIN STORY',
    subModuleId: 'sub-our-world-the-idea-origin-story',
    fallbackUrl: '/videos/homepage-hero-bg.mp4',
    fallbackSourceType: 'localhost',
    fallbackTitle: 'Origin Story — In the words of our Founder',
  })

  // 3. Resolve media dynamically for Sub-Module: THE CORE PHILOSOPHY
  const corePhilosophyMedia = getMedia({
    sectionName: 'The Idea',
    subModuleName: 'THE CORE PHILOSOPHY',
    subModuleId: 'sub-our-world-the-idea-core-philosophy',
    fallbackUrl: '/videos/homepage-hero-bg.mp4',
    fallbackSourceType: 'localhost',
    fallbackTitle: 'The Core Philosophy — What We Believe',
  })

  // 4. Resolve media dynamically for Sub-Module: PEERS ARE PARTNERS
  const peersPartnersMedia = getMedia({
    sectionName: 'The Idea',
    subModuleName: 'PEERS ARE PARTNERS',
    subModuleId: 'sub-our-world-the-idea-peers-partners',
    fallbackUrl: '/videos/homepage-hero-bg.mp4',
    fallbackSourceType: 'localhost',
    fallbackTitle: 'Peers are Partners in Business & Friends in Life',
  })

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      
      {/* =========================================================================
          1. HERO SECTION (EXACT ATTACHED DESIGN RECREATION)
          ========================================================================= */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-[#EFF6FF] via-[#F8FAFC] to-[#FFFFFF] pt-4 sm:pt-6 pb-3 sm:pb-4">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Main 2-Column Balanced Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* ──────── LEFT SIDEBAR & MAIN CONTENT (lg:col-span-7) ──────── */}
            <div className="lg:col-span-7 flex flex-col md:flex-row items-center gap-7 lg:gap-9 xl:gap-11">
              
              {/* Far Left Vertical Strip: PEOPLE / PURPOSE / PROGRESS with Icons */}
              <div className="hidden sm:flex flex-col gap-7 select-none shrink-0">
                <div className="flex items-center gap-3.5 group">
                  <div className="size-9 sm:size-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-[#0062D2] transition-colors shadow-2xs">
                    <Users2 className="size-5" />
                  </div>
                  <span className="text-xs sm:text-[12.5px] font-bold uppercase tracking-[0.22em] text-slate-800">
                    PEOPLE
                  </span>
                </div>

                <div className="flex items-center gap-3.5 group">
                  <div className="size-9 sm:size-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-[#0062D2] transition-colors shadow-2xs">
                    <Target className="size-5" />
                  </div>
                  <span className="text-xs sm:text-[12.5px] font-bold uppercase tracking-[0.22em] text-slate-800">
                    PURPOSE
                  </span>
                </div>

                <div className="flex items-center gap-3.5 group">
                  <div className="size-9 sm:size-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center group-hover:bg-blue-50 group-hover:text-[#0062D2] transition-colors shadow-2xs">
                    <TrendingUp className="size-5" />
                  </div>
                  <span className="text-xs sm:text-[12.5px] font-bold uppercase tracking-[0.22em] text-slate-800">
                    PROGRESS
                  </span>
                </div>
              </div>

              {/* Center-Left Content Area */}
              <div className="flex flex-col items-start text-left max-w-2xl">
                
                {/* Pill Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/95 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-slate-900 mb-4 shadow-2xs">
                  <span className="size-1.5 rounded-full bg-slate-900" />
                  <span>PILLAR: THE IDEA</span>
                </div>

                {/* H1 Heading */}
                <h1 className="font-serif text-6xl sm:text-7xl lg:text-[84px] font-normal tracking-tight text-slate-950 mb-3 leading-[1.02]">
                  The Idea
                </h1>

                {/* Subtitle with cursive script accent */}
                <p className="font-serif text-3xl sm:text-4xl lg:text-[38px] text-slate-900 leading-snug mb-3.5 font-normal">
                  Entrepreneurs should not have to{' '}
                  <span
                    className="text-[#0062D2] italic font-normal inline-block ml-1"
                    style={{ fontFamily: 'var(--font-script, cursive)' }}
                  >
                    build alone.
                  </span>
                </p>

                {/* Supporting description */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light mb-6 max-w-lg">
                  Everything Peers Global is today comes from that one sentence.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3.5 items-center">
                  <Link
                    href="/membership"
                    className="inline-flex items-center gap-2.5 rounded-xl bg-[#0062D2] hover:bg-blue-700 text-white px-7 py-3.5 text-sm sm:text-base font-bold transition-all shadow-sm hover:shadow-md active:scale-[0.98]"
                  >
                    <span>Join Peers Global</span>
                    <ArrowRight className="size-4.5" />
                  </Link>

                  <Link
                    href="/circles"
                    className="inline-flex items-center gap-2.5 rounded-lg border border-slate-300/90 bg-white hover:bg-slate-50 text-slate-800 px-7 py-3.5 text-sm sm:text-base font-semibold transition-all shadow-2xs active:scale-[0.98]"
                  >
                    <span>Find Your Circle</span>
                  </Link>
                </div>

              </div>

            </div>

            {/* ──────── RIGHT SIDE: 4-PART GEOMETRIC COLLAGE & SCRIPT ACCENT (lg:col-span-5) ──────── */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end relative pt-4 lg:pt-0">
              
              {/* Top-Right Tagline with Vertical Bar */}
              <div className="flex items-center gap-3 border-l-2 border-slate-400 pl-3.5 py-0.5 text-left mb-3 self-center lg:self-end">
                <div className="flex flex-col text-[10px] sm:text-[11px] font-bold tracking-[0.22em] text-slate-700 uppercase leading-snug">
                  <span>A BRIGHTER</span>
                  <span>TOMORROW</span>
                  <span>TOGETHER</span>
                </div>
              </div>

              {/* 4-Part Geometric Video & Image Collage (Connected to Dynamic Admin Media) */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 items-end w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px]">
                
                {/* Shape 1 (Top-Left): Arched top-left corner */}
                <div
                  className="relative aspect-[3/3.8] w-full rounded-tl-[70px] sm:rounded-tl-[90px] overflow-hidden shadow-lg border border-slate-200/60 bg-slate-900 select-none"
                >
                  {heroShape1Media.isYouTube && heroShape1Media.embedUrl ? (
                    <iframe
                      src={`${heroShape1Media.embedUrl}&mute=1&loop=1`}
                      title={heroShape1Media.title}
                      className="w-full h-full border-0 object-cover pointer-events-none scale-125"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  ) : (
                    <video
                      key={heroShape1Media.mediaUrl}
                      src={heroShape1Media.mediaUrl || '/videos/leadership-hero-bg.mp4'}
                      poster="/images/who-we-are-boardroom.jpg"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover object-center"
                    />
                  )}
                </div>

                {/* Shape 2 (Top-Right): Pill with rounded top */}
                <div
                  className="relative aspect-[3/4.4] w-full rounded-t-full overflow-hidden shadow-lg border border-slate-200/60 bg-slate-900 select-none"
                >
                  {heroShape2Media.isYouTube && heroShape2Media.embedUrl ? (
                    <iframe
                      src={`${heroShape2Media.embedUrl}&mute=1&loop=1`}
                      title={heroShape2Media.title}
                      className="w-full h-full border-0 object-cover pointer-events-none scale-125"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  ) : (
                    <video
                      key={heroShape2Media.mediaUrl}
                      src={heroShape2Media.mediaUrl || '/videos/hero-background.mp4'}
                      poster="/images/conclave.png"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover object-center"
                    />
                  )}
                </div>

                {/* Shape 3 (Bottom-Left): Arched bottom-left corner */}
                <div
                  className="relative aspect-[3/3.6] w-full rounded-bl-[70px] sm:rounded-bl-[90px] overflow-hidden shadow-lg border border-slate-200/60 bg-slate-900 select-none"
                >
                  {heroShape3Media.isYouTube && heroShape3Media.embedUrl ? (
                    <iframe
                      src={`${heroShape3Media.embedUrl}&mute=1&loop=1`}
                      title={heroShape3Media.title}
                      className="w-full h-full border-0 object-cover pointer-events-none scale-125"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  ) : (
                    <video
                      key={heroShape3Media.mediaUrl}
                      src={heroShape3Media.mediaUrl || '/videos/peers-global-earth-loop.mp4'}
                      poster="/images/who-we-are-friends.jpg"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover object-center"
                    />
                  )}
                </div>

                {/* Shape 4 (Bottom-Right): Semi-circle / D-shape right */}
                <div
                  className="relative aspect-[4/3.5] w-full rounded-r-full overflow-hidden shadow-lg border border-slate-200/60 bg-slate-900 select-none"
                >
                  {heroShape4Media.isYouTube && heroShape4Media.embedUrl ? (
                    <iframe
                      src={`${heroShape4Media.embedUrl}&mute=1&loop=1`}
                      title={heroShape4Media.title}
                      className="w-full h-full border-0 object-cover pointer-events-none scale-125"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  ) : (
                    <video
                      key={heroShape4Media.mediaUrl}
                      src={heroShape4Media.mediaUrl || '/videos/stories-hero-bg.mp4'}
                      poster="/images/circles-hero-new.jpg"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover object-center"
                    />
                  )}
                </div>

              </div>

              {/* Bottom-Right Handwritten Script Accent & Curved Arrow */}
              <div className="flex flex-col items-start select-none -rotate-6 text-slate-800 leading-[1.08] mt-2.5 ml-auto pr-3 sm:pr-6">
                <span
                  className="text-2xl sm:text-3xl text-slate-900"
                  style={{ fontFamily: 'var(--font-script, cursive)' }}
                >
                  Ideas
                </span>
                <span
                  className="text-2xl sm:text-3xl text-slate-900 ml-3"
                  style={{ fontFamily: 'var(--font-script, cursive)' }}
                >
                  Build
                </span>
                <span
                  className="text-2xl sm:text-3xl text-slate-900 ml-6"
                  style={{ fontFamily: 'var(--font-script, cursive)' }}
                >
                  Communities
                </span>
                <svg className="w-24 sm:w-28 h-5 text-slate-800 ml-7 mt-0.5" viewBox="0 0 100 20" fill="none">
                  <path
                    d="M5 6 C 35 15, 65 14, 95 8 M 85 4 C 90 7, 95 8, 92 14"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

            </div>

          </div>

          {/* ──────── BOTTOM HAIRLINE STRIP ──────── */}
          <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-slate-200/80 flex items-center justify-center text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-[0.28em] select-none">
            <span>· COLLABORATE &nbsp;|&nbsp; LEARN &nbsp;|&nbsp; BUILD &nbsp;|&nbsp; GROW ·</span>
          </div>

        </div>
      </section>

      {/* =========================================================================
          2. THE PROBLEM NOBODY TALKS ABOUT (SUB-MODULE: THE SILENT REALITY)
          Matches Screenshots 3 & 4
          ========================================================================= */}
      <section className="section py-8 sm:py-10 border-b border-slate-200/80 bg-white relative overflow-hidden">
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 size-96 rounded-full border border-blue-100/50 pointer-events-none hidden 2xl:block" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-start">
            
            {/* ──────── COLUMN 1: Dynamic Visual Card with Overlays (lg:col-span-4) ──────── */}
            <div className="lg:col-span-4 flex justify-center lg:justify-start pl-6 sm:pl-8 lg:pl-6 xl:pl-8 pt-2">
              <div className="relative w-full max-w-[280px] sm:max-w-[300px]">
                <div className="absolute -inset-4 bg-blue-100/50 rounded-full blur-2xl -z-10" />

                {/* Dynamic Main looping video element with arched curvature */}
                <div
                  onClick={() => setActiveModalMedia(silentRealityMedia)}
                  className="relative aspect-[4/5] w-full rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 bg-slate-900 group cursor-pointer"
                  title="Click to view full video"
                >
                  {silentRealityMedia.isYouTube && silentRealityMedia.embedUrl ? (
                    <iframe
                      src={`${silentRealityMedia.embedUrl}&mute=1&loop=1`}
                      title={silentRealityMedia.title}
                      className="size-full border-0 pointer-events-none scale-125"
                      allow="autoplay; encrypted-media"
                    />
                  ) : (
                    <video
                      key={silentRealityMedia.mediaUrl}
                      src={silentRealityMedia.mediaUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      className="size-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    >
                      <source src={silentRealityMedia.mediaUrl} type="video/mp4" />
                    </video>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Play Overlay Indicator on Hover */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <div className="size-12 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-lg">
                      <Play className="size-5 fill-white ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Floating Glass Card (Top Left): Real People, Real Conversations */}
                <div className="absolute -left-6 sm:-left-8 top-6 sm:top-8 z-20 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-100 p-3.5 shadow-xl w-[150px] sm:w-[160px]">
                  <div className="size-7 rounded-lg bg-blue-50 text-[#0062D2] flex items-center justify-center mb-2">
                    <Users2 className="size-4" />
                  </div>
                  <p className="text-[10px] sm:text-[11px] font-medium text-slate-700 leading-snug">
                    Real People.<br />
                    Real Conversations.<br />
                    Real Opportunities.
                  </p>
                  <span className="block h-[1.5px] w-4 bg-slate-300 mt-2" />
                </div>

                {/* Floating Dark Card (Bottom Left): Better Entrepreneurs Together */}
                <div className="absolute -left-6 sm:-left-8 bottom-6 sm:bottom-8 z-20 rounded-2xl bg-black/85 backdrop-blur-md border border-white/15 p-2.5 sm:p-3 shadow-2xl w-[150px] sm:w-[160px]">
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-2 border border-white/10">
                    <Image
                      src="/images/circle-meeting.png"
                      alt="Better Entrepreneurs Together"
                      fill
                      sizes="160px"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-[10px] sm:text-[11px] font-bold text-white leading-tight">
                    Better<br />
                    Entrepreneurs<br />
                    Together
                  </p>
                  <span className="block h-[1.5px] w-4 bg-white/40 mt-1.5" />
                </div>
              </div>
            </div>

            {/* ──────── COLUMN 2: Narrative Storyline (lg:col-span-4) ──────── */}
            <div className="lg:col-span-4 flex flex-col gap-3.5">
              {/* Eyebrow - Exactly matching Screenshot 4 */}
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-6 bg-[#0062D2]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0062D2]">
                  The Silent Reality
                </span>
              </div>

              {/* Title with script accent on 'talks about.' */}
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.25rem] font-normal leading-[1.15] text-slate-950">
                The problem nobody{' '}
                <span
                  className="block text-[#0062D2]"
                  style={{ fontFamily: 'var(--font-script, cursive)' }}
                >
                  talks about.
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 font-light mt-0.5">
                Ask an entrepreneur how business is going and you will almost always get the same answer:
              </p>

              {/* Quote banner "Business is good." */}
              <div className="rounded-xl bg-blue-50/70 border border-blue-100/80 px-3.5 py-2.5 flex items-center gap-2 my-0.5">
                <span className="font-serif text-xl text-[#0062D2] leading-none select-none font-bold">
                  &ldquo;
                </span>
                <span className="font-serif italic text-sm sm:text-base font-medium text-slate-900">
                  Business is good.&rdquo;
                </span>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                <p>
                  They will say it to their parents. To their friends. To the people at the wedding. Sometimes to their own husband or wife. And often it is not true.
                </p>

                <p className="font-bold text-slate-900">
                  This is the part of entrepreneurship that never appears in the interviews.
                </p>

                <p>
                  An entrepreneur is surrounded by people all day and understood by almost none of them. The team cannot be told that this month is uncertain, because telling them would signal the very thing you are protecting. The family sees the office and the travel and the phone that never stops ringing, and they assume everything is fine.
                </p>

                <p className="font-serif italic text-sm sm:text-base text-slate-900 font-medium pt-0.5">
                  So you stop explaining.
                </p>
              </div>
            </div>

            {/* ──────── COLUMN 3: Dark Reflection Card + Light CTA Banner (lg:col-span-4) ──────── */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              
              {/* Midnight Card: A Founder's Reflection */}
              <div className="rounded-2xl border border-blue-900/40 bg-gradient-to-b from-[#091E42] via-[#05142E] to-[#040E20] p-5 sm:p-6 text-white shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="font-serif text-2xl text-blue-400 leading-none select-none font-bold">
                      &ldquo;
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">
                      A Founder&apos;s Reflection
                    </span>
                  </div>

                  <p className="text-xs sm:text-[13px] text-slate-200 leading-relaxed font-light">
                    You make the biggest decisions of your life at eleven at night with nobody to call. You make mistakes that one honest conversation would have prevented, and you make them in silence, and you pay for them for years. A win you waited three years for arrives, and there is no one in the room who understands what it cost.
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-blue-900/60">
                  <p className="text-xs font-semibold text-[#38BDF8] leading-snug">
                    Entrepreneurs are surrounded by people, but rarely understood.
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1 leading-relaxed font-light">
                    They do not need more motivation. They need belonging, trust, and peers who understand the weight they are carrying.
                  </p>
                </div>
              </div>

              {/* Elevated Card: Why Peers Global Exists */}
              <div className="rounded-2xl border border-blue-100 bg-white p-4 flex items-center justify-between gap-3 shadow-xs hover:shadow-md transition-all">
                <div className="flex items-center gap-3">
                  <div className="size-9 rounded-full bg-[#0062D2] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Lightbulb className="size-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-900">
                      Why Peers Global Exists
                    </span>
                    <span className="text-[11px] text-slate-500 font-light mt-0.5 leading-snug">
                      This is the silent reason behind many ideas. It is also the reason Peers Global exists.
                    </span>
                  </div>
                </div>
                <Link
                  href="/membership"
                  aria-label="Why Peers Global Exists"
                  className="size-8 rounded-full border border-slate-200 flex items-center justify-center text-[#0062D2] hover:bg-blue-50 transition-colors shrink-0"
                >
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          3. WHERE THIS IDEA CAME FROM (SUB-MODULE: ORIGIN STORY)
          Matches Reference 2 Exactly
          ========================================================================= */}
      <section className="relative overflow-hidden border-b border-slate-900 selection:bg-blue-100 selection:text-slate-900">
        
        {/* ──────── TOP HERO AREA: LIGHT ICE-BLUE BACKGROUND (Matches Reference 2) ──────── */}
        <div className="relative bg-gradient-to-br from-[#ebf3fc] via-[#f4f8fe] to-[#e2eef9] pt-8 sm:pt-12 pb-10 sm:pb-14">
          
          {/* Ambient soft glow lighting */}
          <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-blue-200/40 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute -top-10 -left-10 w-[400px] h-[400px] bg-sky-200/30 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center min-h-[380px] lg:min-h-[440px]">
              
              {/* ──────── COLUMN 1: LEFT CONTENT & DYNAMIC VIDEO CTA (lg:col-span-5) ──────── */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                
                {/* Eyebrow */}
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="h-[2px] w-6 bg-[#0062D2]" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                    Origin Story
                  </span>
                </div>

                {/* H2 Title */}
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[52px] font-bold text-[#061836] tracking-tight leading-[1.08]">
                  Where this idea <br className="hidden sm:inline" />
                  came from
                </h2>

                <p className="text-base sm:text-lg text-slate-800 font-semibold mt-4 leading-relaxed">
                  In the words of our Founder, Dr. Pravin Parmar.
                </p>

                <p className="text-xs sm:text-[13.5px] text-slate-600 font-normal mt-3 leading-relaxed max-w-lg">
                  Peers Global was born from real experiences, real people and real challenges. A small village in Botad to mentoring 10,000+ MSME promoters across India, this journey has always been about people, possibilities and a stronger tomorrow — together.
                </p>

                {/* Dynamic Watch Founder's Message Pill Button */}
                <div className="flex items-center gap-3.5 mt-8">
                  <button
                    type="button"
                    onClick={() => setActiveModalMedia(originStoryMedia)}
                    aria-label="Watch the Founder's Message"
                    className="size-13 rounded-full bg-[#0062D2] text-white flex items-center justify-center shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all cursor-pointer group"
                  >
                    <Play className="size-5 fill-white ml-0.5 group-hover:scale-110 transition-transform" />
                  </button>
                  <div
                    onClick={() => setActiveModalMedia(originStoryMedia)}
                    className="flex flex-col cursor-pointer group/text"
                  >
                    <span className="text-xs sm:text-[13px] font-bold text-slate-900 leading-tight tracking-wide group-hover/text:text-[#0062D2] transition-colors">
                      Watch the Founder&apos;s Message
                    </span>
                    <span className="text-[11px] text-slate-500 font-light mt-0.5">
                      {originStoryMedia.title || 'Origin Story — In the words of our Founder'}
                    </span>
                  </div>
                </div>

              </div>

              {/* ──────── COLUMN 2: RIGHT UNIFIED HERO VISUAL FRAME (lg:col-span-7) ──────── */}
              <div className="lg:col-span-7 relative">
                
                {/* Outer decorative ambient rings */}
                <div className="absolute -top-8 -right-8 size-[480px] rounded-full border border-blue-300/40 pointer-events-none hidden xl:block" />
                <div className="absolute top-10 -right-4 size-[360px] rounded-full border border-sky-400/30 pointer-events-none hidden xl:block" />

                {/* Framed Container: Video Background + Play Button + Cutout Founder Photo + Quote Card */}
                <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-blue-900/15 bg-[#040e24] shadow-[0_25px_70px_rgba(4,14,36,0.3)] min-h-[400px] sm:min-h-[440px] lg:min-h-[460px] w-full">
                  
                  {/* 1. Background Video Layer with Office Background Poster */}
                  <div className="absolute inset-0 size-full overflow-hidden select-none">
                    {originStoryMedia.isYouTube && originStoryMedia.embedUrl ? (
                      <iframe
                        src={`${originStoryMedia.embedUrl}&mute=1&loop=1`}
                        title={originStoryMedia.title}
                        className="size-full border-0 pointer-events-none scale-125 object-cover"
                        allow="autoplay; encrypted-media"
                      />
                    ) : (
                      <video
                        key={originStoryMedia.mediaUrl}
                        src={originStoryMedia.mediaUrl}
                        poster="/images/origin-story-office-bg.jpg"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="size-full object-cover object-center scale-[1.03]"
                      >
                        <source src={originStoryMedia.mediaUrl} type="video/mp4" />
                      </video>
                    )}

                    {/* Gradient overlays to ensure seamless composition and contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#040e24]/85 via-[#040e24]/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#040e24]/40 via-transparent to-[#040e24]/30" />
                  </div>

                  {/* 2. Quote Card (Bottom-Left Overlay) */}
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-20 max-w-[250px] sm:max-w-[290px] rounded-2xl bg-white/95 backdrop-blur-md border border-white p-4 sm:p-5 shadow-2xl text-slate-900">
                    <span className="font-serif text-2xl sm:text-3xl font-black text-[#041E42] leading-none select-none block mb-1">
                      “
                    </span>
                    <p className="font-serif italic text-xs sm:text-[13px] font-normal text-slate-800 leading-relaxed">
                      Real progress happens when people come together with purpose.
                    </p>
                    <div className="mt-2.5 flex items-center gap-2">
                      <span className="h-[1px] w-4 bg-slate-400" />
                      <span className="text-[11px] font-bold text-slate-900 tracking-tight">
                        Dr. Pravin Parmar
                      </span>
                    </div>
                  </div>

                  {/* 3. Founder Photo Cutout (Right Side, Layered in Foreground) */}
                  <div className="absolute bottom-0 right-0 sm:right-2 lg:right-4 h-[90%] sm:h-[95%] lg:h-[98%] w-[270px] sm:w-[330px] lg:w-[380px] z-10 flex items-end justify-center pointer-events-none">
                    <div className="relative size-full">
                      <Image
                        src="/images/dr-pravin-cutout.png"
                        alt="Dr. Pravin Parmar — Founder, Peers Global"
                        fill
                        sizes="(max-width: 768px) 300px, (max-width: 1024px) 360px, 420px"
                        className="object-contain object-bottom drop-shadow-[0_20px_45px_rgba(0,0,0,0.7)]"
                        priority
                      />
                    </div>
                  </div>

                  {/* 4. Cursive Script Accent (Smaller size, neatly positioned in top right) */}
                  <div className="absolute top-4 sm:top-5 right-4 sm:right-6 lg:right-7 z-20 select-none pointer-events-none">
                    <p
                      className="text-sm sm:text-base lg:text-[20px] text-white/90 leading-snug rotate-[-5deg] drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] text-right font-light tracking-wide"
                      style={{ fontFamily: 'var(--font-script, cursive)' }}
                    >
                      People <br />
                      Ideas <br />
                      Opportunities <br />
                      Together
                    </p>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>

        {/* ──────── BOTTOM SECTION: DEEP NAVY BLUE CANVAS WITH 6 WHITE CARDS ──────── */}
        <div className="relative bg-[#061836] text-white pt-6 pb-6 sm:pb-8">
          <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* 6 Clean White Floating Cards (Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-3.5">
              <div className="rounded-2xl bg-white p-4 sm:p-4.5 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between border border-white text-slate-900 group">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400">01</span>
                    <Sprout className="size-5 text-[#0062D2] group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex items-center justify-between mt-3 mb-1.5">
                    <h3 className="font-bold text-slate-900 text-xs sm:text-[13px] leading-snug">
                      Roots in Botad
                    </h3>
                    <ChevronRight className="size-3 text-slate-400 group-hover:text-[#0062D2] group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <p className="text-[11px] text-slate-500 font-light leading-relaxed">
                    A small village. <br />
                    Big lessons.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-4 sm:p-4.5 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between border border-white text-slate-900 group">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400">02</span>
                    <BookOpen className="size-5 text-[#0062D2] group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex items-center justify-between mt-3 mb-1.5">
                    <h3 className="font-bold text-slate-900 text-xs sm:text-[13px] leading-snug">
                      The Awakening
                    </h3>
                    <ChevronRight className="size-3 text-slate-400 group-hover:text-[#0062D2] group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <p className="text-[11px] text-slate-500 font-light leading-relaxed">
                    Realising the power <br />
                    of community.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-4 sm:p-4.5 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between border border-white text-slate-900 group">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400">03</span>
                    <Users2 className="size-5 text-[#0062D2] group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex items-center justify-between mt-3 mb-1.5">
                    <h3 className="font-bold text-slate-900 text-xs sm:text-[13px] leading-snug">
                      A Bigger Vision
                    </h3>
                    <ChevronRight className="size-3 text-slate-400 group-hover:text-[#0062D2] group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <p className="text-[11px] text-slate-500 font-light leading-relaxed">
                    From local impact <br />
                    to a global community.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-4 sm:p-4.5 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between border border-white text-slate-900 group">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400">04</span>
                    <TrendingUp className="size-5 text-[#0062D2] group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex items-center justify-between mt-3 mb-1.5">
                    <h3 className="font-bold text-slate-900 text-xs sm:text-[13px] leading-snug">
                      Building the Model
                    </h3>
                    <ChevronRight className="size-3 text-slate-400 group-hover:text-[#0062D2] group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <p className="text-[11px] text-slate-500 font-light leading-relaxed">
                    The LSR model for <br />
                    meaningful collaboration.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-4 sm:p-4.5 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between border border-white text-slate-900 group">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400">05</span>
                    <Award className="size-5 text-[#0062D2] group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex items-center justify-between mt-3 mb-1.5">
                    <h3 className="font-bold text-slate-900 text-xs sm:text-[13px] leading-snug">
                      10,000+ Entrepreneurs
                    </h3>
                    <ChevronRight className="size-3 text-slate-400 group-hover:text-[#0062D2] group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <p className="text-[11px] text-slate-500 font-light leading-relaxed">
                    Mentoring and enabling <br />
                    across India.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-4 sm:p-4.5 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between border border-white text-slate-900 group">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400">06</span>
                    <Globe className="size-5 text-[#0062D2] group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex items-center justify-between mt-3 mb-1.5">
                    <h3 className="font-bold text-slate-900 text-xs sm:text-[13px] leading-snug">
                      A Global Community
                    </h3>
                    <ChevronRight className="size-3 text-slate-400 group-hover:text-[#0062D2] group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <p className="text-[11px] text-slate-500 font-light leading-relaxed">
                    People. Ideas. Opportunities. <br />
                    Together.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom branding footer bar */}
            <div className="pt-5 pb-1 mt-5 border-t border-slate-800/80 flex items-center justify-between text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-widest">
              <div className="flex items-center gap-3">
                <div className="size-7 rounded-full bg-gradient-to-tr from-[#0062D2] to-sky-400 text-white flex items-center justify-center font-serif text-xs font-bold shadow-sm">
                  N
                </div>
                <span>Real People · Real Stories · A Brighter Tomorrow</span>
              </div>
              <div className="flex items-center gap-3">
                <span>Peers Global</span>
                <div className="flex items-center gap-1.5 text-blue-500">
                  <span className="size-1.5 rounded-full bg-blue-500" />
                  <span className="size-1.5 rounded-full bg-blue-500" />
                  <span className="size-1.5 rounded-full bg-blue-500" />
                  <span className="size-1.5 rounded-full bg-blue-500" />
                  <span className="size-1.5 rounded-full bg-blue-500" />
                  <span className="size-1.5 rounded-full bg-blue-500" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          4. WHAT WE BELIEVE (SUB-MODULE: THE CORE PHILOSOPHY)
          ========================================================================= */}
      <section className="relative overflow-hidden bg-[#FBFDFF] py-10 sm:py-12 lg:py-14 border-b border-slate-100">
        <div className="absolute top-10 left-1/4 size-[500px] bg-blue-100/40 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 right-10 size-[450px] bg-sky-100/40 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="flex items-center gap-2.5 mb-3.5">
              <span className="h-[1.5px] w-6 bg-[#0062D2]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                The Core Philosophy
              </span>
              <span className="h-[1.5px] w-6 bg-[#0062D2]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[52px] font-semibold text-slate-950 tracking-tight leading-tight">
              What we{' '}
              <span className="relative inline-block text-[#0062D2]">
                believe
                <svg
                  className="absolute -bottom-1.5 left-0 w-full h-2 text-[#0062D2]/60"
                  viewBox="0 0 100 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path d="M2 7 C 30 1, 70 1, 98 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            
            <p className="text-sm sm:text-[15px] text-slate-600 mt-4 font-normal">
              Peers Global rests on four sentences.
            </p>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5 font-light">
              Simple ideas. A powerful sequence.
            </p>
          </div>
        </div>

        {/* ──────── MAIN INTERACTIVE ROW: CARDS ON LEFT + ATTACHED SCREEN-BLEED IMAGE ON RIGHT ──────── */}
        <div className="relative w-full">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full lg:w-[480px] xl:w-[540px] 2xl:w-[580px] relative pl-7 sm:pl-10 z-20">
              <div className="absolute left-[13px] sm:left-[17px] top-8 bottom-8 w-[1.5px] bg-slate-200" />

              <div className="flex flex-col gap-4 sm:gap-5">
                {/* ── CARD 04: OUTCOME ── */}
                <div className="relative group">
                  <span className="absolute -left-[27px] sm:-left-[31px] top-1/2 -translate-y-1/2 size-3.5 rounded-full bg-[#0062D2] ring-4 ring-white shadow-xs z-10" />
                  <div className="rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50/70 via-blue-50/30 to-white p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4 sm:gap-5">
                    <div className="size-11 rounded-xl bg-[#0062D2] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
                      04
                    </div>
                    <div className="size-11 rounded-xl bg-blue-100/70 text-[#0062D2] flex items-center justify-center shrink-0">
                      <BarChart3 className="size-5.5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#0062D2]">
                        Outcome
                      </span>
                      <h3 className="font-serif text-base sm:text-lg lg:text-xl font-bold text-slate-900 leading-snug mt-0.5">
                        Business grows through relationships.
                      </h3>
                      <p className="text-xs text-slate-500 font-light mt-1 leading-relaxed">
                        Stronger relationships create bigger opportunities for everyone.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ── CARD 03: FOUNDATION ── */}
                <div className="relative group">
                  <span className="absolute -left-[27px] sm:-left-[31px] top-1/2 -translate-y-1/2 size-3.5 rounded-full bg-[#0062D2] ring-4 ring-white shadow-xs z-10" />
                  <div className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs hover:shadow-md transition-all duration-300 flex items-center gap-4 sm:gap-5">
                    <div className="size-11 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-sm shrink-0">
                      03
                    </div>
                    <div className="size-11 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0">
                      <HeartHandshake className="size-5.5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Foundation
                      </span>
                      <h3 className="font-serif text-base sm:text-lg lg:text-xl font-bold text-slate-900 leading-snug mt-0.5">
                        Relationships grow through trust.
                      </h3>
                      <p className="text-xs text-slate-500 font-light mt-1 leading-relaxed">
                        Consistent presence, honest conversations, and shared values.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ── CARD 02: CATALYST ── */}
                <div className="relative group">
                  <span className="absolute -left-[27px] sm:-left-[31px] top-1/2 -translate-y-1/2 size-3.5 rounded-full bg-[#0062D2] ring-4 ring-white shadow-xs z-10" />
                  <div className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs hover:shadow-md transition-all duration-300 flex items-center gap-4 sm:gap-5">
                    <div className="size-11 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-sm shrink-0">
                      02
                    </div>
                    <div className="size-11 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0">
                      <ShieldCheck className="size-5.5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Catalyst
                      </span>
                      <h3 className="font-serif text-base sm:text-lg lg:text-xl font-bold text-slate-900 leading-snug mt-0.5">
                        Trust grows through giving first.
                      </h3>
                      <p className="text-xs text-slate-500 font-light mt-1 leading-relaxed">
                        Helping without keeping score. Supporting before asking.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ── CARD 01: ORIGIN ── */}
                <div className="relative group">
                  <span className="absolute -left-[27px] sm:-left-[31px] top-1/2 -translate-y-1/2 size-3.5 rounded-full bg-[#0062D2] ring-4 ring-white shadow-xs z-10" />
                  <div className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs hover:shadow-md transition-all duration-300 flex items-center gap-4 sm:gap-5">
                    <div className="size-11 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-sm shrink-0">
                      01
                    </div>
                    <div className="size-11 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0">
                      <Lightbulb className="size-5.5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Origin
                      </span>
                      <h3 className="font-serif text-base sm:text-lg lg:text-xl font-bold text-slate-900 leading-snug mt-0.5">
                        Giving starts with showing up.
                      </h3>
                      <p className="text-xs text-slate-500 font-light mt-1 leading-relaxed">
                        Being in the room, fully present, ready to contribute.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Attached-To-Screen Right Panorama Video */}
          <div className="hidden lg:block absolute top-0 bottom-0 right-0 left-[calc(max(520px,(100vw-1360px)/2+510px))] xl:left-[calc(max(580px,(100vw-1360px)/2+570px))] 2xl:left-[calc(max(620px,(100vw-1360px)/2+610px))] z-10 pointer-events-auto">
            <div
              onClick={() => setActiveModalMedia(corePhilosophyMedia)}
              className="relative size-full rounded-l-full rounded-r-none overflow-hidden shadow-2xl border-y border-l border-slate-200/80 bg-slate-900 cursor-pointer group"
            >
              {corePhilosophyMedia.isYouTube && corePhilosophyMedia.embedUrl ? (
                <iframe
                  src={`${corePhilosophyMedia.embedUrl}&mute=1&loop=1`}
                  title={corePhilosophyMedia.title}
                  className="size-full border-0 pointer-events-none scale-125"
                  allow="autoplay; encrypted-media"
                />
              ) : (
                <video
                  key={corePhilosophyMedia.mediaUrl}
                  src={corePhilosophyMedia.mediaUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="size-full object-cover object-center scale-[1.03] group-hover:scale-105 transition-transform duration-700"
                />
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-black/15 to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 left-0 w-36 bg-gradient-to-r from-black/35 to-transparent pointer-events-none" />

              <div className="absolute top-8 right-8 xl:right-16 z-10 text-right select-none pointer-events-none">
                <span className="font-serif text-4xl font-black text-white/90 leading-none select-none block mb-1">
                  “
                </span>
                <p className="font-[family-name:var(--font-script)] text-2xl sm:text-[32px] text-white leading-tight drop-shadow-md rotate-[-3deg]">
                  People <br />
                  Ideas <br />
                  Opportunities <br />
                  Together
                </p>
                <div className="w-20 h-[2px] bg-white/80 ml-auto mt-2" />
              </div>

              <div className="absolute bottom-8 right-8 xl:right-16 z-20 rounded-2xl bg-white/95 backdrop-blur-md border border-white/90 p-4 sm:p-5 shadow-2xl max-w-[260px] sm:max-w-[280px] flex items-start gap-3.5">
                <div className="size-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 shadow-2xs">
                  <Users2 className="size-5" />
                </div>
                <div>
                  <p className="text-xs sm:text-[13px] font-bold text-slate-900 leading-snug">
                    A stronger tomorrow starts with what we do today, together.
                  </p>
                  <div className="w-10 h-[2px] bg-slate-400 mt-2.5" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Mobile / Tablet Dynamic Fallback */}
        <div className="lg:hidden mt-8 max-w-[1360px] mx-auto px-4 sm:px-6">
          <div
            onClick={() => setActiveModalMedia(corePhilosophyMedia)}
            className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-900 cursor-pointer group"
          >
            {corePhilosophyMedia.isYouTube && corePhilosophyMedia.embedUrl ? (
              <iframe
                src={`${corePhilosophyMedia.embedUrl}&mute=1&loop=1`}
                title={corePhilosophyMedia.title}
                className="size-full border-0 pointer-events-none scale-125"
                allow="autoplay; encrypted-media"
              />
            ) : (
              <video
                key={corePhilosophyMedia.mediaUrl}
                src={corePhilosophyMedia.mediaUrl}
                autoPlay
                loop
                muted
                playsInline
                className="size-full object-cover object-center group-hover:scale-105 transition-transform"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-black/20 to-transparent pointer-events-none" />
            
            <div className="absolute top-6 right-6 z-10 text-right select-none pointer-events-none">
              <span className="font-serif text-3xl font-black text-white/90 leading-none select-none block mb-1">
                “
              </span>
              <p className="font-[family-name:var(--font-script)] text-2xl text-white leading-tight drop-shadow-md rotate-[-3deg]">
                People <br />
                Ideas <br />
                Opportunities <br />
                Together
              </p>
            </div>

            <div className="absolute bottom-6 left-6 right-6 z-20 rounded-2xl bg-white/95 backdrop-blur-md border border-white/90 p-4 shadow-xl flex items-start gap-3.5">
              <div className="size-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 shadow-2xs">
                <Users2 className="size-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 leading-snug">
                  A stronger tomorrow starts with what we do today, together.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Callout Banner */}
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10">
          <div className="rounded-3xl bg-gradient-to-br from-[#021338] via-[#041D4E] to-[#0A2E70] p-6 sm:p-8 text-center text-white relative overflow-hidden shadow-xl">
            <div className="absolute -right-16 -bottom-16 size-64 rounded-full border border-sky-400/10 pointer-events-none" />
            <div className="absolute -left-16 -top-16 size-64 rounded-full border border-blue-400/10 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-sky-300 mb-3">
                Read Them From The Bottom Up
              </span>
              <h3 className="font-serif text-xl sm:text-2xl lg:text-[28px] font-semibold text-white tracking-tight leading-snug">
                Give first. Build trust. Deepen the relationship. Grow the business.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light mt-3.5 max-w-xl leading-relaxed">
                Everything in this community exists to make that sequence happen reliably, for thousands of entrepreneurs, again and again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. PEERS ARE PARTNERS IN BUSINESS AND FRIENDS IN LIFE
          (SUB-MODULE: PEERS ARE PARTNERS)
          ========================================================================= */}
      <section className="py-10 sm:py-12 lg:py-14 border-b border-slate-200/80 bg-[#FBFDFF] relative overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
            
            {/* ──────── LEFT COLUMN: HERO DYNAMIC VIDEO CARD & 3 STAT COUNTERS ──────── */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="relative">
                <div
                  className="absolute -top-5 -left-5 size-36 opacity-35 pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(#0062D2 1.5px, transparent 1.5px)',
                    backgroundSize: '16px 16px',
                  }}
                />

                {/* Dynamic Main Hero Video Card */}
                <div
                  onClick={() => setActiveModalMedia(peersPartnersMedia)}
                  className="relative aspect-[4/4.3] w-full rounded-[32px] overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 group cursor-pointer"
                >
                  {peersPartnersMedia.isYouTube && peersPartnersMedia.embedUrl ? (
                    <iframe
                      src={`${peersPartnersMedia.embedUrl}&mute=1&loop=1`}
                      title={peersPartnersMedia.title}
                      className="size-full border-0 pointer-events-none scale-125"
                      allow="autoplay; encrypted-media"
                    />
                  ) : (
                    <video
                      key={peersPartnersMedia.mediaUrl}
                      src={peersPartnersMedia.mediaUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="size-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-black/20 pointer-events-none" />

                  <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-10 select-none pointer-events-none">
                    <p className="font-[family-name:var(--font-script)] text-3xl sm:text-4xl text-white leading-tight drop-shadow-md rotate-[-6deg]">
                      More <br />
                      Than <br />
                      Business
                    </p>
                    <svg className="w-24 h-3 text-white/90 mt-1" viewBox="0 0 100 12" fill="none">
                      <path d="M2 8 C 30 2, 70 2, 98 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 z-10 flex items-end justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-snug tracking-tight drop-shadow-md">
                        Standing beside you. <br />
                        Not above, not across.
                      </h3>
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-slate-300 mt-2.5 block">
                        Peers for a brighter tomorrow
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5 shrink-0 select-none group/play cursor-pointer">
                      <div className="size-11 sm:size-12 rounded-full bg-blue-600/90 hover:bg-blue-500 text-white flex items-center justify-center shadow-lg ring-4 ring-blue-400/30 transition-all group-hover/play:scale-105">
                        <Play className="size-4.5 sm:size-5 fill-white text-white translate-x-0.5" />
                      </div>
                      <div className="text-left hidden sm:block">
                        <p className="text-[11px] font-bold text-white leading-tight">
                          Watch <br />
                          Our Story
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* 3 Stat Counters Row */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-xs grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 items-center gap-3 sm:gap-0">
                <div className="flex items-center gap-3 px-1.5 sm:px-3">
                  <div className="size-9 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0">
                    <Users2 className="size-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-950 text-base sm:text-lg leading-tight tracking-tight">
                      10,000+
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                      Entrepreneurs
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 px-1.5 sm:px-3 pl-3 sm:pl-4">
                  <div className="size-9 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0">
                    <Building2 className="size-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-950 text-base sm:text-lg leading-tight tracking-tight">
                      100+
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                      Cities
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 px-1.5 sm:px-3 pl-3 sm:pl-4">
                  <div className="size-9 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0">
                    <Heart className="size-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-950 text-base sm:text-lg leading-tight tracking-tight">
                      Countless
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                      Friendships
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* ──────── RIGHT COLUMN: TITLE & 3 NUMBERED CARDS ──────── */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-[1.5px] w-6 bg-[#0062D2]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0062D2]">
                  The Relationship
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-bold text-slate-950 tracking-tight leading-[1.15] mb-4">
                Peers are Partners <br />
                in Business and <br />
                Friends in Life.
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl mb-5">
                For an entrepreneur, life and business are not two neatly partitioned lives. When one is under pressure, the other feels it immediately.
              </p>

              <div className="flex flex-col gap-4">
                <div className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-blue-100 transition-all duration-300 flex items-center justify-between gap-5 group">
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="size-12 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                      <Users className="size-6" />
                    </div>
                    <div>
                      <h4 className="font-serif text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        Six months later
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed mt-1">
                        It means the Peer who introduces you to a client also asks how it went six months later.
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0 flex items-center gap-2 text-xs font-semibold text-slate-400 select-none pl-2">
                    <span className="w-6 h-[1.5px] bg-slate-300 hidden sm:inline-block" />
                    01
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-amber-100 transition-all duration-300 flex items-center justify-between gap-5 group">
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="size-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                      <Gift className="size-6" />
                    </div>
                    <div>
                      <h4 className="font-serif text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        At the daughter&apos;s wedding
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed mt-1">
                        It means the person who helped you enter a new market is the one who shows up at your daughter&apos;s wedding.
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0 flex items-center gap-2 text-xs font-semibold text-slate-400 select-none pl-2">
                    <span className="w-6 h-[1.5px] bg-slate-300 hidden sm:inline-block" />
                    02
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-emerald-100 transition-all duration-300 flex items-center justify-between gap-5 group">
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="size-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                      <TrendingUp className="size-6" />
                    </div>
                    <div>
                      <h4 className="font-serif text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        United growth
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed mt-1">
                        It means the business relationship and the human relationship grow together, because for entrepreneurs they were never really separate.
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0 flex items-center gap-2 text-xs font-semibold text-slate-400 select-none pl-2">
                    <span className="w-6 h-[1.5px] bg-slate-300 hidden sm:inline-block" />
                    03
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-2xl bg-gradient-to-r from-blue-50/70 via-blue-50/40 to-sky-50/60 border border-blue-100/90 p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div className="flex-1">
                  <span className="font-serif text-3xl sm:text-4xl text-[#0062D2] font-black leading-none select-none block mb-1">
                    “
                  </span>
                  <p className="font-serif italic text-xs sm:text-sm text-slate-700 leading-relaxed">
                    &ldquo;Peers arrive looking for business. They stay for the friendships. And the business follows, because that is how business has always worked between people who trust each other.&rdquo;
                  </p>
                  <div className="flex items-center gap-2 mt-3.5">
                    <span className="h-[1.5px] w-6 bg-[#0062D2]" />
                    <span className="text-[11px] font-bold tracking-wider text-[#0062D2] uppercase">
                      Peers Global
                    </span>
                  </div>
                </div>

                <div className="shrink-0 text-left sm:text-right select-none pl-1 sm:border-l sm:border-blue-200/60 sm:pl-6">
                  <p className="font-[family-name:var(--font-script)] text-xl sm:text-2xl text-slate-700 leading-tight rotate-[-4deg]">
                    People <br />
                    Ideas <br />
                    Opportunities <br />
                    Together
                  </p>
                  <div className="w-16 h-[2px] bg-slate-400 mt-2 sm:ml-auto" />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          6. WHAT WE ARE BUILDING (ARCHITECTURE & LSR MODEL)
          ========================================================================= */}
      <section className="py-10 sm:py-12 lg:py-14 border-b border-slate-200/80 bg-[#FAFBFD] relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 size-[750px] bg-blue-50/50 rounded-full blur-[140px] pointer-events-none" />

        <div className="hidden xl:flex absolute top-28 left-8 2xl:left-14 flex-col items-start gap-1.5 select-none pointer-events-none border-l-2 border-slate-200/90 pl-3.5 z-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">Collaborate</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">Create</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">Grow</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">Together</span>
        </div>

        <div className="hidden xl:block absolute top-20 right-10 2xl:right-16 select-none pointer-events-none text-right z-10">
          <p className="font-[family-name:var(--font-script)] text-3xl 2xl:text-4xl text-slate-600 leading-tight rotate-[-4deg]">
            People <br />
            Ideas <br />
            Opportunities <br />
            Together
          </p>
          <div className="w-24 h-[2px] bg-slate-400 ml-auto mt-2" />
        </div>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <div className="flex items-center justify-center gap-2.5 mb-3.5">
              <span className="h-[1.5px] w-6 bg-[#0062D2]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0062D2]">
                Our Architecture
              </span>
              <span className="h-[1.5px] w-6 bg-[#0062D2]" />
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-bold text-slate-950 tracking-tight leading-tight">
              What we are{' '}
              <span className="relative inline-block text-[#0062D2]">
                building
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#0062D2]"
                  viewBox="0 0 100 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path d="M2 8 C 30 2, 70 2, 98 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            
            <p className="font-serif italic text-xl sm:text-2xl text-[#0062D2] mt-3 font-normal">
              Not a networking group. A leadership organisation.
            </p>

            <p className="text-sm sm:text-base text-slate-600 mt-3.5 leading-relaxed font-light max-w-2xl mx-auto">
              Peers Global is the World&apos;s First Community of Collaboration, built on the LSR Growth Model — Learning, Sales and Resources — with a mission to enhance the lives of one million entrepreneurs.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* ── CARD 01: YOUR INNER BOARD ── */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs hover:shadow-xl hover:border-blue-200 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group">
              <span className="absolute top-4 right-6 font-serif text-5xl sm:text-6xl font-black text-slate-200/50 select-none pointer-events-none group-hover:scale-105 transition-transform">
                01
              </span>
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="size-13 rounded-2xl bg-blue-100 text-[#0062D2] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                    <Users2 className="size-6" />
                  </div>
                  <span className="text-xs font-bold text-slate-400 tracking-wider">
                    01
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  Your Inner Board
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-500 font-light leading-relaxed mt-2.5">
                  Eighteen industry and goal-specific Circles. A peer board of 30 to 50 vetted entrepreneurs who challenge your blind spots and celebrate your milestones.
                </p>
              </div>
              <div className="mt-7 pt-2 flex items-center justify-between border-t border-slate-100">
                <Link href="/circles" className="text-xs font-bold text-[#0062D2] hover:underline">
                  18 Industry &amp; City Circles
                </Link>
                <Link href="/circles" className="size-8 rounded-full bg-blue-50 text-[#0062D2] flex items-center justify-center transition-all group-hover:bg-[#0062D2] group-hover:text-white">
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* ── CARD 02: 10 FORMS OF COLLABORATION ── */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs hover:shadow-xl hover:border-amber-200 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group">
              <span className="absolute top-4 right-6 font-serif text-5xl sm:text-6xl font-black text-slate-200/50 select-none pointer-events-none group-hover:scale-105 transition-transform">
                02
              </span>
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="size-13 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                    <Layers className="size-6" />
                  </div>
                  <span className="text-xs font-bold text-slate-400 tracking-wider">
                    02
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  10 Forms of Collaboration
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-500 font-light leading-relaxed mt-2.5">
                  Moving beyond basic referral exchange into joint ventures, shared capacity, collective procurement, overseas delegations, and knowledge teardowns.
                </p>
              </div>
              <div className="mt-7 pt-2 flex items-center justify-between border-t border-slate-100">
                <Link href="/10-forms-of-collaboration" className="text-xs font-bold text-amber-700 hover:underline">
                  Beyond Conventional Networking
                </Link>
                <Link href="/10-forms-of-collaboration" className="size-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center transition-all group-hover:bg-amber-600 group-hover:text-white">
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* ── CARD 03: ONE ACTION = ONE LIFE ── */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs hover:shadow-xl hover:border-emerald-200 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group">
              <span className="absolute top-4 right-6 font-serif text-5xl sm:text-6xl font-black text-slate-200/50 select-none pointer-events-none group-hover:scale-105 transition-transform">
                03
              </span>
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="size-13 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                    <Target className="size-6" />
                  </div>
                  <span className="text-xs font-bold text-slate-400 tracking-wider">
                    03
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  One Action = One Life
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-500 font-light leading-relaxed mt-2.5">
                  A transparent recognition system where one action equals one life impacted. Celebrating contribution, active participation, and real MSME empowerment.
                </p>
              </div>
              <div className="mt-7 pt-2 flex items-center justify-between border-t border-slate-100">
                <Link href="/stories" className="text-xs font-bold text-emerald-700 hover:underline">
                  Impact-Driven Ledger
                </Link>
                <Link href="/stories" className="size-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center transition-all group-hover:bg-emerald-600 group-hover:text-white">
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* ── CARD 04: LEADERSHIP PATHWAY ── */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs hover:shadow-xl hover:border-purple-200 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group">
              <span className="absolute top-4 right-6 font-serif text-5xl sm:text-6xl font-black text-slate-200/50 select-none pointer-events-none group-hover:scale-105 transition-transform">
                04
              </span>
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="size-13 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                    <Award className="size-6" />
                  </div>
                  <span className="text-xs font-bold text-slate-400 tracking-wider">
                    04
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  Leadership Pathway
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-500 font-light leading-relaxed mt-2.5">
                  From member to ecosystem owner: Leadership Team (LT), Circle Director (CD), Circle Founder (CF), Industry Director (ID), and Regional Executive Director (RED).
                </p>
              </div>
              <div className="mt-7 pt-2 flex items-center justify-between border-t border-slate-100">
                <Link href="/leadership" className="text-xs font-bold text-purple-700 hover:underline">
                  5-Stage Progression Ladder
                </Link>
                <Link href="/leadership" className="size-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center transition-all group-hover:bg-purple-600 group-hover:text-white">
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* ── CARD 05: LSR GROWTH MODEL ── */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs hover:shadow-xl hover:border-sky-200 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group">
              <span className="absolute top-4 right-6 font-serif text-5xl sm:text-6xl font-black text-slate-200/50 select-none pointer-events-none group-hover:scale-105 transition-transform">
                05
              </span>
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="size-13 rounded-2xl bg-sky-100 text-[#0062D2] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                    <TrendingUp className="size-6" />
                  </div>
                  <span className="text-xs font-bold text-slate-400 tracking-wider">
                    05
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  LSR Growth Model
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-500 font-light leading-relaxed mt-2.5">
                  Learning from real operators, Sales through high-trust relationships, and Resources pooled together for collective scale and bargaining power.
                </p>
              </div>
              <div className="mt-7 pt-2 flex items-center justify-between border-t border-slate-100">
                <Link href="/why-peers-global" className="text-xs font-bold text-[#0062D2] hover:underline">
                  Learn · Share · Refer
                </Link>
                <Link href="/why-peers-global" className="size-8 rounded-full bg-sky-50 text-[#0062D2] flex items-center justify-center transition-all group-hover:bg-[#0062D2] group-hover:text-white">
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* ── CARD 06: UNITY APP PLATFORM ── */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs hover:shadow-xl hover:border-rose-200 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group">
              <span className="absolute top-4 right-6 font-serif text-5xl sm:text-6xl font-black text-slate-200/50 select-none pointer-events-none group-hover:scale-105 transition-transform">
                06
              </span>
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="size-13 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                    <Smartphone className="size-6" />
                  </div>
                  <span className="text-xs font-bold text-slate-400 tracking-wider">
                    06
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  Unity App Platform
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-500 font-light leading-relaxed mt-2.5">
                  The Unity App running every day in between meetings — digital referrals, verified member directory, 1-to-1 matchmaking, and meeting registrations.
                </p>
              </div>
              <div className="mt-7 pt-2 flex items-center justify-between border-t border-slate-100">
                <Link href="/unity" className="text-xs font-bold text-rose-700 hover:underline">
                  Available on iOS &amp; Android
                </Link>
                <Link href="/unity" className="size-8 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center transition-all group-hover:bg-rose-600 group-hover:text-white">
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 sm:mt-10 relative z-10">
            <Link
              href="/circles"
              className="inline-flex items-center gap-2.5 rounded-xl bg-[#0062D2] hover:bg-blue-700 text-white px-8 py-3.5 text-sm sm:text-base font-bold transition-all shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:-translate-y-0.5 active:scale-[0.98] group"
            >
              <span>Explore Our World</span>
              <ArrowRight className="size-4.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================================
          7. THE 1 MILLION MISSION
          ========================================================================= */}
      <section className="relative overflow-hidden bg-[#020B1E] py-10 sm:py-14 text-white border-b border-blue-950">
        <div className="absolute top-10 left-10 size-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 size-[500px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="absolute top-0 right-0 w-full sm:w-[75%] md:w-[62%] lg:w-[52%] xl:w-[48%] h-[360px] sm:h-[420px] lg:h-[480px] pointer-events-none z-0 overflow-hidden">
          <video
            src="/videos/homepage-hero-bg.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="size-full object-cover object-right-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020B1E] via-[#020B1E]/60 sm:via-[#020B1E]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020B1E] via-[#020B1E]/30 to-transparent" />

          <div className="absolute top-8 right-6 xl:right-12 z-10 flex items-start gap-8 select-none pointer-events-none">
            <p className="font-[family-name:var(--font-script)] text-xl sm:text-2xl text-white/90 leading-tight drop-shadow-md rotate-[-6deg] hidden sm:block">
              A Stronger <br />
              Tomorrow <br />
              Together
            </p>
            <div className="border-l border-white/30 pl-3 hidden md:flex flex-col gap-1 text-[9px] font-bold uppercase tracking-[0.25em] text-white/75">
              <span>People</span>
              <span>Ideas</span>
              <span>Opportunities</span>
              <span>Together</span>
            </div>
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl text-left mb-8 sm:mb-10">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="h-[1.5px] w-6 bg-[#0062D2]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
                Mission 2030
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[62px] font-bold text-white tracking-tight leading-[1.08] mb-4">
              The 1 Million <br />
              <span className="text-[#0062D2]">Mission</span>
            </h2>

            <p className="font-bold text-lg sm:text-xl text-amber-400 mb-3 tracking-tight">
              1M+ entrepreneurs to impact by 2030.
            </p>

            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-xl">
              We are building the world&apos;s most purposeful community of entrepreneurs — where collaboration creates confidence, visibility and growth for a better tomorrow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 relative mb-6 sm:mb-8">
            <div className="rounded-2xl border border-blue-400/20 bg-blue-950/35 backdrop-blur-md p-6 shadow-lg hover:border-blue-400/40 hover:bg-blue-950/45 transition-all duration-300 flex items-start gap-4 group">
              <div className="size-12 rounded-2xl bg-blue-600/30 text-sky-300 flex items-center justify-center shrink-0 border border-blue-400/30 shadow-xs group-hover:scale-105 transition-transform">
                <User className="size-5.5" />
              </div>
              <div>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-sky-400 block">
                  Phase 01
                </span>
                <h3 className="font-serif text-base sm:text-lg font-bold text-white leading-snug mt-1">
                  If one entrepreneur feels less alone.
                </h3>
                <p className="text-xs text-slate-400 font-light mt-1.5 leading-relaxed">
                  A stronger mindset. A bigger tomorrow.
                </p>
              </div>
            </div>

            <div className="hidden md:flex absolute left-[33.3%] top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 text-sky-400 select-none pointer-events-none">
              <ArrowRight className="size-4 opacity-75" />
            </div>

            <div className="rounded-2xl border border-blue-400/20 bg-blue-950/35 backdrop-blur-md p-6 shadow-lg hover:border-blue-400/40 hover:bg-blue-950/45 transition-all duration-300 flex items-start gap-4 group">
              <div className="size-12 rounded-2xl bg-blue-600/30 text-sky-300 flex items-center justify-center shrink-0 border border-blue-400/30 shadow-xs group-hover:scale-105 transition-transform">
                <BarChart3 className="size-5.5" />
              </div>
              <div>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-sky-400 block">
                  Phase 02
                </span>
                <h3 className="font-serif text-base sm:text-lg font-bold text-white leading-snug mt-1">
                  If one business finds clarity.
                </h3>
                <p className="text-xs text-slate-400 font-light mt-1.5 leading-relaxed">
                  Better decisions. Faster growth.
                </p>
              </div>
            </div>

            <div className="hidden md:flex absolute left-[66.6%] top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 text-sky-400 select-none pointer-events-none">
              <ArrowRight className="size-4 opacity-75" />
            </div>

            <div className="rounded-2xl border border-blue-400/20 bg-blue-950/35 backdrop-blur-md p-6 shadow-lg hover:border-blue-400/40 hover:bg-blue-950/45 transition-all duration-300 flex items-start gap-4 group">
              <div className="size-12 rounded-2xl bg-blue-600/30 text-sky-300 flex items-center justify-center shrink-0 border border-blue-400/30 shadow-xs group-hover:scale-105 transition-transform">
                <Users2 className="size-5.5" />
              </div>
              <div>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-sky-400 block">
                  Phase 03
                </span>
                <h3 className="font-serif text-base sm:text-lg font-bold text-white leading-snug mt-1">
                  If one founder finds the right peer.
                </h3>
                <p className="text-xs text-slate-400 font-light mt-1.5 leading-relaxed">
                  New possibilities. Greater impact.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 sm:gap-6 my-6 sm:my-8">
            <span className="h-[1px] w-24 sm:w-40 bg-gradient-to-r from-transparent via-blue-400/40 to-blue-400/80" />
            <p className="font-serif italic text-xl sm:text-2xl text-sky-200 font-normal tracking-wide">
              Impact has begun.
            </p>
            <span className="h-[1px] w-24 sm:w-40 bg-gradient-to-l from-transparent via-blue-400/40 to-blue-400/80" />
          </div>

          <div className="max-w-4xl mx-auto rounded-3xl border border-blue-400/25 bg-blue-950/40 backdrop-blur-md p-6 sm:p-7 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 mb-6 sm:mb-8">
            <div className="flex items-center gap-5 sm:gap-6 flex-1">
              <div className="size-20 sm:size-24 rounded-full overflow-hidden shrink-0 border-2 border-sky-400/50 shadow-lg relative bg-blue-900">
                <Image
                  src="/images/dr-parmar-avatar.jpg"
                  alt="Dr. Pravin Parmar"
                  fill
                  className="object-cover object-top"
                />
              </div>

              <div className="flex items-start gap-3.5">
                <Quote className="size-7 text-sky-400 fill-sky-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-serif italic text-white text-base sm:text-lg leading-snug">
                    Success is not just what you earn. <br className="hidden sm:inline" />
                    It is how many lives you impact.
                  </p>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-300 mt-2 block">
                    — DR. PRAVIN PARMAR, FOUNDER
                  </span>
                </div>
              </div>
            </div>

            <div className="hidden lg:block w-[1px] h-20 bg-blue-400/20 shrink-0" />

            <div className="flex flex-col gap-3.5 shrink-0 w-full lg:w-auto">
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-full bg-blue-900/60 border border-blue-400/30 text-sky-300 flex items-center justify-center shrink-0">
                  <Heart className="size-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-200">
                  More Lives
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="size-8 rounded-full bg-blue-900/60 border border-blue-400/30 text-sky-300 flex items-center justify-center shrink-0">
                  <BarChart3 className="size-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-200">
                  Stronger Businesses
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="size-8 rounded-full bg-blue-900/60 border border-blue-400/30 text-sky-300 flex items-center justify-center shrink-0">
                  <Users2 className="size-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-200">
                  Brighter Communities
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-8 sm:mb-10">
            <Link
              href="/the-idea"
              className="inline-flex items-center gap-2.5 rounded-xl bg-[#0062D2] hover:bg-blue-600 text-white px-8 py-3.5 text-sm sm:text-base font-bold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 active:scale-[0.98] transition-all group"
            >
              <span>See the 1 Million Mission</span>
              <ArrowRight className="size-4.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="pt-5 border-t border-blue-900/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-slate-500 select-none">
              <span>— Collaborate</span>
              <span>— Create</span>
              <span>— Grow</span>
              <span>— Together —</span>
            </div>
            <div className="text-center sm:text-right select-none">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400 block">
                Peers Global
              </span>
              <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-500">
                A Brighter Tomorrow
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          8. CLOSING SECTION
          ========================================================================= */}
      <ClosingCtaSection />

      {/* =========================================================================
          9. INTERACTIVE VIDEO PLAYER MODAL
          ========================================================================= */}
      {activeModalMedia && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl rounded-2xl bg-slate-950 border border-slate-700 shadow-2xl overflow-hidden">
            <div className="p-4 bg-[#0B1528] text-white flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Play className="w-4 h-4 text-blue-400" />
                <span className="font-bold text-sm">{activeModalMedia.title}</span>
              </div>
              <button
                onClick={() => setActiveModalMedia(null)}
                className="p-1 rounded-full hover:bg-white/20 text-white transition cursor-pointer"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-video w-full bg-black flex items-center justify-center">
              {activeModalMedia.isYouTube && activeModalMedia.embedUrl ? (
                <iframe
                  src={activeModalMedia.embedUrl}
                  title={activeModalMedia.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : activeModalMedia.mediaUrl ? (
                <video
                  src={activeModalMedia.mediaUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="p-8 text-center text-slate-400">
                  <p className="text-sm font-semibold">{activeModalMedia.title}</p>
                </div>
              )}
            </div>

            {activeModalMedia.description && (
              <div className="p-3.5 bg-[#0B1528] text-xs text-slate-300 border-t border-slate-800">
                <p>{activeModalMedia.description}</p>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  )
}
