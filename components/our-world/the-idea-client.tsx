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
          1. HERO SECTION (MICROSOFT AZURE ENTERPRISE SPECIFICATION)
          ========================================================================= */}
      <section id="the-idea" className="relative overflow-hidden border-b border-slate-200/90 bg-gradient-to-b from-[#F8FAFC] to-[#FFFFFF] pt-10 sm:pt-14 pb-12 sm:pb-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Main 2-Column Balanced Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* ──────── LEFT SIDE: TYPOGRAPHY & ACTIONS (lg:col-span-7) ──────── */}
            <div className="lg:col-span-7 flex flex-col items-start text-left max-w-2xl">
              
              {/* Eyebrow - Microsoft Azure Clean Monospace/Uppercase Style */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.08em] text-slate-700">
                  PEERS GLOBAL · WORLD&apos;S FIRST COMMUNITY OF COLLABORATION
                </span>
              </div>

              {/* H1 Heading - Microsoft Azure Segoe UI Semibold */}
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-semibold tracking-tight text-slate-900 mb-4 leading-[1.14]">
                The Idea: Entrepreneurs should not have to build alone
              </h1>

              {/* Supporting Body Description */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8 max-w-xl">
                Everything Peers Global is today comes from that one foundational sentence. We connect visionary entrepreneurs, industry leaders, and creators for structured peer circles, mutual growth, and lifelong collaboration.
              </p>

              {/* Action Buttons - Microsoft Fluent 4px Rounded */}
              <div className="flex flex-wrap gap-3.5 items-center">
                <Link
                  href="/membership"
                  className="inline-flex items-center justify-center gap-2 rounded-[4px] bg-[#0078D4] hover:bg-[#006cbd] text-white px-5 py-2.5 text-sm font-semibold transition-colors shadow-none"
                >
                  <span>Join Peers Global</span>
                  <ArrowRight className="size-4" />
                </Link>

                <Link
                  href="/circles"
                  className="inline-flex items-center justify-center gap-2 rounded-[4px] border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-900 px-5 py-2.5 text-sm font-semibold transition-colors shadow-none"
                >
                  <span>Find Your Circle</span>
                </Link>
              </div>

            </div>

            {/* ──────── RIGHT SIDE: 4-PART ENTERPRISE MEDIA GRID (lg:col-span-5) ──────── */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end relative">
              
              {/* Clean Enterprise 2x2 Media Showcase */}
              <div className="grid grid-cols-2 gap-3 w-full max-w-[460px]">
                
                {/* Tile 1: Boardroom */}
                <div
                  onClick={() => setActiveModalMedia(heroShape1Media)}
                  className="group relative aspect-[4/3] rounded-lg overflow-hidden border border-slate-200 bg-slate-900 cursor-pointer shadow-xs hover:border-[#0078D4] transition-all"
                  title={heroShape1Media.title}
                >
                  {heroShape1Media.isYouTube && heroShape1Media.embedUrl ? (
                    <iframe
                      src={`${heroShape1Media.embedUrl}&mute=1&loop=1`}
                      title={heroShape1Media.title}
                      className="w-full h-full border-0 object-cover pointer-events-none"
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
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2 left-2 text-[11px] font-semibold text-white">Boardroom Circle</span>
                </div>

                {/* Tile 2: Conclave */}
                <div
                  onClick={() => setActiveModalMedia(heroShape2Media)}
                  className="group relative aspect-[4/3] rounded-lg overflow-hidden border border-slate-200 bg-slate-900 cursor-pointer shadow-xs hover:border-[#0078D4] transition-all"
                  title={heroShape2Media.title}
                >
                  {heroShape2Media.isYouTube && heroShape2Media.embedUrl ? (
                    <iframe
                      src={`${heroShape2Media.embedUrl}&mute=1&loop=1`}
                      title={heroShape2Media.title}
                      className="w-full h-full border-0 object-cover pointer-events-none"
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
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2 left-2 text-[11px] font-semibold text-white">Grand Conclave</span>
                </div>

                {/* Tile 3: Earth / Partners */}
                <div
                  onClick={() => setActiveModalMedia(heroShape3Media)}
                  className="group relative aspect-[4/3] rounded-lg overflow-hidden border border-slate-200 bg-slate-900 cursor-pointer shadow-xs hover:border-[#0078D4] transition-all"
                  title={heroShape3Media.title}
                >
                  {heroShape3Media.isYouTube && heroShape3Media.embedUrl ? (
                    <iframe
                      src={`${heroShape3Media.embedUrl}&mute=1&loop=1`}
                      title={heroShape3Media.title}
                      className="w-full h-full border-0 object-cover pointer-events-none"
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
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2 left-2 text-[11px] font-semibold text-white">Global Ecosystem</span>
                </div>

                {/* Tile 4: Peer Circles */}
                <div
                  onClick={() => setActiveModalMedia(heroShape4Media)}
                  className="group relative aspect-[4/3] rounded-lg overflow-hidden border border-slate-200 bg-slate-900 cursor-pointer shadow-xs hover:border-[#0078D4] transition-all"
                  title={heroShape4Media.title}
                >
                  {heroShape4Media.isYouTube && heroShape4Media.embedUrl ? (
                    <iframe
                      src={`${heroShape4Media.embedUrl}&mute=1&loop=1`}
                      title={heroShape4Media.title}
                      className="w-full h-full border-0 object-cover pointer-events-none"
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
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2 left-2 text-[11px] font-semibold text-white">Collaborative Circles</span>
                </div>

              </div>

              {/* Caption */}
              <div className="flex items-center justify-between w-full max-w-[460px] mt-2 px-1 text-xs text-slate-500 font-normal">
                <span>Enterprise media gallery</span>
                <span className="text-[#0078D4] font-medium hover:underline cursor-pointer">Click any video to play</span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          MICROSOFT AZURE SUB-NAVIGATION ANCHOR BAR
          ========================================================================= */}
      <nav aria-label="Page navigation" className="sticky top-20 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-2xs">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-13 overflow-x-auto no-scrollbar">
          
          <div className="flex items-center gap-6 sm:gap-8 whitespace-nowrap text-[13.5px] font-semibold text-slate-700 py-1">
            <a href="#the-idea" className="text-[#0078D4] border-b-2 border-[#0078D4] pb-3 pt-3 hover:text-[#006cbd] transition-colors">
              The Idea
            </a>
            <a href="#silent-reality" className="hover:text-[#0078D4] pb-3 pt-3 transition-colors">
              The Silent Reality
            </a>
            <a href="#origin-story" className="hover:text-[#0078D4] pb-3 pt-3 transition-colors">
              Origin Story
            </a>
            <a href="#core-philosophy" className="hover:text-[#0078D4] pb-3 pt-3 transition-colors">
              Core Philosophy
            </a>
            <a href="#lsr-model" className="hover:text-[#0078D4] pb-3 pt-3 transition-colors">
              LSR Model
            </a>
            <a href="#one-million-mission" className="hover:text-[#0078D4] pb-3 pt-3 transition-colors">
              1 Million Mission
            </a>
          </div>

          <div className="hidden md:flex items-center shrink-0 pl-4">
            <Link
              href="/membership"
              className="inline-flex items-center justify-center rounded-[4px] bg-[#0078D4] hover:bg-[#006cbd] text-white px-4 py-1.5 text-xs font-semibold transition-colors"
            >
              Get started
            </Link>
          </div>

        </div>
      </nav>

      {/* =========================================================================
          2. THE PROBLEM NOBODY TALKS ABOUT (SUB-MODULE: THE SILENT REALITY)
          ========================================================================= */}
      <section id="silent-reality" className="section py-12 sm:py-16 border-b border-slate-200/80 bg-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* ──────── COLUMN 1: Visual Showcase (lg:col-span-4) ──────── */}
            <div className="lg:col-span-4 flex justify-center lg:justify-start pt-2">
              <div className="relative w-full max-w-[320px]">
                {/* Dynamic Main looping video element */}
                <div
                  onClick={() => setActiveModalMedia(silentRealityMedia)}
                  className="relative aspect-[4/5] w-full rounded-lg overflow-hidden shadow-sm border border-slate-200 bg-slate-900 group cursor-pointer"
                  title="Click to view full video"
                >
                  {silentRealityMedia.isYouTube && silentRealityMedia.embedUrl ? (
                    <iframe
                      src={`${silentRealityMedia.embedUrl}&mute=1&loop=1`}
                      title={silentRealityMedia.title}
                      className="size-full border-0 pointer-events-none"
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
                      className="size-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    >
                      <source src={silentRealityMedia.mediaUrl} type="video/mp4" />
                    </video>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  {/* Play Overlay Indicator on Hover */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <div className="size-12 rounded-[4px] bg-[#0078D4] text-white flex items-center justify-center shadow-md">
                      <Play className="size-5 fill-white ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Sub-label */}
                <div className="mt-3 p-3 rounded-md border border-slate-200 bg-slate-50 text-xs text-slate-700">
                  <span className="font-semibold text-slate-900 block mb-0.5">Real conversations & trust</span>
                  <span>Structured peer circles for founders navigating critical business inflection points.</span>
                </div>
              </div>
            </div>

            {/* ──────── COLUMN 2: Narrative Storyline (lg:col-span-4) ──────── */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              {/* Eyebrow */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#0078D4]">
                  The Silent Reality
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold leading-[1.18] text-slate-900 tracking-tight">
                The problem nobody talks about.
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 font-normal">
                Ask an entrepreneur how business is going and you will almost always get the same answer:
              </p>

              {/* Quote banner "Business is good." */}
              <div className="rounded-md bg-slate-50 border border-slate-200 px-4 py-2.5 flex items-center gap-2">
                <span className="text-base font-semibold text-slate-900">
                  &ldquo;Business is good.&rdquo;
                </span>
              </div>

              <div className="space-y-3 text-sm text-slate-600 leading-relaxed font-normal">
                <p>
                  They will say it to their parents. To their friends. To the people at the wedding. Sometimes to their own spouse. And often it is not true.
                </p>

                <p className="font-semibold text-slate-900">
                  This is the part of entrepreneurship that never appears in the interviews.
                </p>

                <p>
                  An entrepreneur is surrounded by people all day and understood by almost none of them. The team cannot be told that this month is uncertain. The family sees the office and assumes everything is fine.
                </p>

                <p className="text-sm font-semibold text-slate-900">
                  So you stop explaining.
                </p>
              </div>
            </div>

            {/* ──────── COLUMN 3: Dark Reflection Card + Light CTA Banner (lg:col-span-4) ──────── */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              
              {/* Executive Card: A Founder's Reflection */}
              <div className="rounded-lg border border-slate-800 bg-[#0F172A] p-6 text-white shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#38BDF8]">
                      A Founder&apos;s Reflection
                    </span>
                  </div>

                  <p className="text-sm text-slate-200 leading-relaxed font-normal">
                    You make the biggest decisions of your life at eleven at night with nobody to call. You make mistakes that one honest conversation would have prevented, and you make them in silence. A win you waited three years for arrives, and there is no one in the room who understands what it cost.
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800">
                  <p className="text-xs font-semibold text-[#38BDF8] leading-snug">
                    Entrepreneurs are surrounded by people, but rarely understood.
                  </p>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed font-normal">
                    They do not need more motivation. They need belonging, trust, and peers who understand the weight they are carrying.
                  </p>
                </div>
              </div>

              {/* Elevated Card: Why Peers Global Exists */}
              <div className="rounded-lg border border-slate-200 bg-white p-5 flex items-center justify-between gap-3 shadow-2xs hover:border-slate-300 transition-all">
                <div className="flex items-center gap-3">
                  <div className="size-9 rounded-[4px] bg-[#0078D4] text-white flex items-center justify-center shrink-0">
                    <Lightbulb className="size-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-900">
                      Why Peers Global Exists
                    </span>
                    <span className="text-xs text-slate-500 font-normal mt-0.5 leading-snug">
                      This is the silent reason behind many ideas. It is also why Peers Global exists.
                    </span>
                  </div>
                </div>
                <Link
                  href="/membership"
                  aria-label="Why Peers Global Exists"
                  className="size-8 rounded-[4px] border border-slate-200 flex items-center justify-center text-[#0078D4] hover:bg-slate-50 transition-colors shrink-0"
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
          ========================================================================= */}
      <section id="origin-story" className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-[#F8FAFC] to-[#FFFFFF] py-12 sm:py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* ──────── COLUMN 1: LEFT CONTENT (lg:col-span-5) ──────── */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              
              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#0078D4]">
                  Origin Story
                </span>
              </div>

              {/* H2 Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-slate-900 tracking-tight leading-[1.14]">
                Where this idea came from
              </h2>

              <p className="text-base sm:text-lg text-slate-800 font-semibold mt-4 leading-relaxed">
                In the words of our Founder, Dr. Pravin Parmar.
              </p>

              <p className="text-sm text-slate-600 font-normal mt-3 leading-relaxed max-w-lg">
                Peers Global was born from real experiences, real people and real challenges. A small village in Botad to mentoring 10,000+ MSME promoters across India, this journey has always been about people, possibilities and a stronger tomorrow — together.
              </p>

              {/* Dynamic Watch Founder's Message Button */}
              <div className="flex items-center gap-3.5 mt-7">
                <button
                  type="button"
                  onClick={() => setActiveModalMedia(originStoryMedia)}
                  aria-label="Watch the Founder's Message"
                  className="inline-flex items-center justify-center gap-2 rounded-[4px] bg-[#0078D4] hover:bg-[#006cbd] text-white px-5 py-2.5 text-sm font-semibold transition-colors cursor-pointer"
                >
                  <Play className="size-4 fill-white ml-0.5" />
                  <span>Watch Founder&apos;s Message</span>
                </button>
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
                    <span className="text-2xl sm:text-3xl font-black text-[#041E42] leading-none select-none block mb-1">
                      “
                    </span>
                    <p className="text-xs sm:text-[13px] font-semibold text-slate-800 leading-relaxed">
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

                  {/* 4. Executive Tag Badge */}
                  <div className="absolute top-4 sm:top-5 right-4 sm:right-6 lg:right-7 z-20 select-none pointer-events-none">
                    <div className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-right">
                      <p className="text-[11px] font-bold text-white tracking-widest uppercase">
                        People · Ideas · Growth
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
      <section id="core-philosophy" className="relative overflow-hidden bg-white py-12 sm:py-16 border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#0078D4]">
                The Core Philosophy
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-slate-900 tracking-tight leading-tight">
              What we believe
            </h2>
            
            <p className="text-base text-slate-600 mt-3 font-normal">
              Peers Global rests on four simple, powerful sentences that guide everything we do.
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
                  <span className="absolute -left-[27px] sm:-left-[31px] top-1/2 -translate-y-1/2 size-3.5 rounded-full bg-[#1D4ED8] ring-4 ring-white shadow-xs z-10" />
                  <div className="rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50/70 via-blue-50/30 to-white p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-4 sm:gap-5">
                    <div className="size-11 rounded-xl bg-gradient-to-br from-[#1D4ED8] to-[#E11D48] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
                      04
                    </div>
                    <div className="size-11 rounded-xl bg-blue-100/70 text-[#1D4ED8] flex items-center justify-center shrink-0">
                      <BarChart3 className="size-5.5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                        Outcome
                      </span>
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 leading-snug mt-0.5">
                        Business grows through relationships.
                      </h3>
                      <p className="text-xs text-slate-500 font-normal mt-1 leading-relaxed">
                        Stronger relationships create bigger opportunities for everyone.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ── CARD 03: FOUNDATION ── */}
                <div className="relative group">
                  <span className="absolute -left-[27px] sm:-left-[31px] top-1/2 -translate-y-1/2 size-3.5 rounded-full bg-[#1D4ED8] ring-4 ring-white shadow-xs z-10" />
                  <div className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs hover:shadow-md transition-all duration-300 flex items-center gap-4 sm:gap-5">
                    <div className="size-11 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-sm shrink-0">
                      03
                    </div>
                    <div className="size-11 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0">
                      <HeartHandshake className="size-5.5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Foundation
                      </span>
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 leading-snug mt-0.5">
                        Relationships grow through trust.
                      </h3>
                      <p className="text-xs text-slate-500 font-normal mt-1 leading-relaxed">
                        Consistent presence, honest conversations, and shared values.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ── CARD 02: CATALYST ── */}
                <div className="relative group">
                  <span className="absolute -left-[27px] sm:-left-[31px] top-1/2 -translate-y-1/2 size-3.5 rounded-full bg-[#1D4ED8] ring-4 ring-white shadow-xs z-10" />
                  <div className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs hover:shadow-md transition-all duration-300 flex items-center gap-4 sm:gap-5">
                    <div className="size-11 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-sm shrink-0">
                      02
                    </div>
                    <div className="size-11 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0">
                      <ShieldCheck className="size-5.5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Catalyst
                      </span>
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 leading-snug mt-0.5">
                        Trust grows through giving first.
                      </h3>
                      <p className="text-xs text-slate-500 font-normal mt-1 leading-relaxed">
                        Helping without keeping score. Supporting before asking.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ── CARD 01: ORIGIN ── */}
                <div className="relative group">
                  <span className="absolute -left-[27px] sm:-left-[31px] top-1/2 -translate-y-1/2 size-3.5 rounded-full bg-[#1D4ED8] ring-4 ring-white shadow-xs z-10" />
                  <div className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs hover:shadow-md transition-all duration-300 flex items-center gap-4 sm:gap-5">
                    <div className="size-11 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-sm shrink-0">
                      01
                    </div>
                    <div className="size-11 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0">
                      <Lightbulb className="size-5.5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Origin
                      </span>
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 leading-snug mt-0.5">
                        Giving starts with showing up.
                      </h3>
                      <p className="text-xs text-slate-500 font-normal mt-1 leading-relaxed">
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
                <div className="px-4 py-2 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#60A5FA]">CORE BELIEF</span>
                  <p className="text-sm font-semibold text-white mt-0.5">People · Ideas · Growth</p>
                </div>
              </div>

              <div className="absolute bottom-8 right-8 xl:right-16 z-20 rounded-2xl bg-white/95 backdrop-blur-md border border-white/90 p-4 sm:p-5 shadow-2xl max-w-[260px] sm:max-w-[280px] flex items-start gap-3.5">
                <div className="size-10 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 shadow-2xs">
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
              <div className="px-3.5 py-1.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/20">
                <p className="text-xs font-bold text-white tracking-wider uppercase">People · Ideas · Growth</p>
              </div>
            </div>

            <div className="absolute bottom-6 left-6 right-6 z-20 rounded-2xl bg-white/95 backdrop-blur-md border border-white/90 p-4 shadow-xl flex items-start gap-3.5">
              <div className="size-10 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 shadow-2xs">
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
              <h3 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-white tracking-tight leading-snug">
                Give first. Build trust. Deepen the relationship. Grow the business.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-normal mt-3.5 max-w-xl leading-relaxed">
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

                  <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-10 select-none pointer-events-none">
                    <div className="px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20">
                      <p className="text-xs font-bold text-white tracking-widest uppercase">
                        More Than Business
                      </p>
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 z-10 flex items-end justify-between gap-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug tracking-tight drop-shadow-md">
                        Standing beside you. <br />
                        Not above, not across.
                      </h3>
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-slate-300 mt-2.5 block">
                        Peers for a brighter tomorrow
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5 shrink-0 select-none group/play cursor-pointer">
                      <div className="size-11 sm:size-12 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white flex items-center justify-center shadow-lg ring-4 ring-blue-400/30 transition-all group-hover/play:scale-105">
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
                  <div className="size-9 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0">
                    <Users2 className="size-5" />
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-950 text-base sm:text-lg leading-tight tracking-tight">
                      10,000+
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                      Entrepreneurs
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 px-1.5 sm:px-3 pl-3 sm:pl-4">
                  <div className="size-9 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0">
                    <Building2 className="size-5" />
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-950 text-base sm:text-lg leading-tight tracking-tight">
                      100+
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                      Cities
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 px-1.5 sm:px-3 pl-3 sm:pl-4">
                  <div className="size-9 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0">
                    <Heart className="size-5" />
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-950 text-base sm:text-lg leading-tight tracking-tight">
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
                <span className="h-[1.5px] w-6 bg-[#1D4ED8]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1D4ED8]">
                  The Relationship
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-950 tracking-tight leading-[1.12] mb-4">
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
                    <div className="size-12 rounded-2xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                      <Users className="size-6" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        Six months later
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed mt-1">
                        It means the Peer who introduces you to a client also asks how it went six months later.
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0 flex items-center gap-2 text-xs font-bold text-slate-400 select-none pl-2">
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
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        At the daughter&apos;s wedding
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed mt-1">
                        It means the person who helped you enter a new market is the one who shows up at your daughter&apos;s wedding.
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0 flex items-center gap-2 text-xs font-bold text-slate-400 select-none pl-2">
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
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        United growth
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed mt-1">
                        It means the business relationship and the human relationship grow together, because for entrepreneurs they were never really separate.
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0 flex items-center gap-2 text-xs font-bold text-slate-400 select-none pl-2">
                    <span className="w-6 h-[1.5px] bg-slate-300 hidden sm:inline-block" />
                    03
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-2xl bg-gradient-to-r from-blue-50/70 via-blue-50/40 to-sky-50/60 border border-blue-100/90 p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div className="flex-1">
                  <span className="text-3xl sm:text-4xl text-[#1D4ED8] font-black leading-none select-none block mb-1">
                    “
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    &ldquo;Peers arrive looking for business. They stay for the friendships. And the business follows, because that is how business has always worked between people who trust each other.&rdquo;
                  </p>
                  <div className="flex items-center gap-2 mt-3.5">
                    <span className="h-[1.5px] w-6 bg-[#1D4ED8]" />
                    <span className="text-[11px] font-bold tracking-wider text-[#1D4ED8] uppercase">
                      Peers Global
                    </span>
                  </div>
                </div>

                <div className="shrink-0 text-left sm:text-right select-none pl-1 sm:border-l sm:border-blue-200/60 sm:pl-6">
                  <div className="px-3 py-1.5 rounded-xl bg-blue-100/80 border border-blue-200">
                    <p className="text-xs font-bold text-[#1D4ED8] uppercase tracking-wider">
                      People · Ideas · Growth
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          6. WHAT WE ARE BUILDING (ARCHITECTURE & LSR MODEL)
          ========================================================================= */}
      <section id="lsr-model" className="py-12 sm:py-16 border-b border-slate-200 bg-[#FAFBFD] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#0078D4]">
                Our Architecture
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-slate-900 tracking-tight leading-tight">
              What we are building
            </h2>
            
            <p className="text-lg sm:text-xl text-[#0078D4] mt-2.5 font-semibold tracking-tight">
              Not a networking group. A leadership organisation.
            </p>

            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed font-normal max-w-2xl mx-auto">
              Peers Global is the World&apos;s First Community of Collaboration, built on the LSR Growth Model — Learning, Sales and Resources — with a mission to enhance the lives of one million entrepreneurs.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* ── CARD 01: YOUR INNER BOARD ── */}
            <div className="rounded-lg border border-slate-200 bg-white p-7 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="size-11 rounded-[4px] bg-blue-50 text-[#0078D4] flex items-center justify-center shrink-0">
                    <Users2 className="size-5.5" />
                  </div>
                  <span className="text-xs font-semibold text-slate-400 tracking-wider">
                    01
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 leading-snug">
                  Your Inner Board
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mt-2.5">
                  Eighteen industry and goal-specific Circles. A peer board of 30 to 50 vetted entrepreneurs who challenge your blind spots and celebrate your milestones.
                </p>
              </div>
              <div className="mt-7 pt-3 flex items-center justify-between border-t border-slate-100">
                <Link href="/circles" className="text-xs font-semibold text-[#0078D4] hover:underline">
                  18 Industry &amp; City Circles
                </Link>
                <Link href="/circles" className="size-8 rounded-[4px] bg-slate-50 text-[#0078D4] flex items-center justify-center hover:bg-[#0078D4] hover:text-white transition-colors">
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* ── CARD 02: 10 FORMS OF COLLABORATION ── */}
            <div className="rounded-lg border border-slate-200 bg-white p-7 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="size-11 rounded-[4px] bg-blue-50 text-[#0078D4] flex items-center justify-center shrink-0">
                    <Layers className="size-5.5" />
                  </div>
                  <span className="text-xs font-semibold text-slate-400 tracking-wider">
                    02
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 leading-snug">
                  10 Forms of Collaboration
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mt-2.5">
                  From Strategic Co-Selling and JV Ventures to Knowledge Circles and Resource Pooling. Clear frameworks that turn intent into tangible, measurable outcomes.
                </p>
              </div>
              <div className="mt-7 pt-3 flex items-center justify-between border-t border-slate-100">
                <Link href="/10-forms-of-collaboration" className="text-xs font-semibold text-[#0078D4] hover:underline">
                  View 10 Frameworks
                </Link>
                <Link href="/10-forms-of-collaboration" className="size-8 rounded-[4px] bg-slate-50 text-[#0078D4] flex items-center justify-center hover:bg-[#0078D4] hover:text-white transition-colors">
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* ── CARD 03: ONE ACTION = ONE LIFE ── */}
            <div className="rounded-lg border border-slate-200 bg-white p-7 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="size-11 rounded-[4px] bg-blue-50 text-[#0078D4] flex items-center justify-center shrink-0">
                    <Target className="size-5.5" />
                  </div>
                  <span className="text-xs font-semibold text-slate-400 tracking-wider">
                    03
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 leading-snug">
                  One Action = One Life
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mt-2.5">
                  A transparent recognition system where one action equals one life impacted. Celebrating contribution, active participation, and real MSME empowerment.
                </p>
              </div>
              <div className="mt-7 pt-3 flex items-center justify-between border-t border-slate-100">
                <Link href="/stories" className="text-xs font-semibold text-[#0078D4] hover:underline">
                  Impact-Driven Ledger
                </Link>
                <Link href="/stories" className="size-8 rounded-[4px] bg-slate-50 text-[#0078D4] flex items-center justify-center hover:bg-[#0078D4] hover:text-white transition-colors">
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* ── CARD 04: LEADERSHIP PATHWAY ── */}
            <div className="rounded-lg border border-slate-200 bg-white p-7 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="size-11 rounded-[4px] bg-blue-50 text-[#0078D4] flex items-center justify-center shrink-0">
                    <Award className="size-5.5" />
                  </div>
                  <span className="text-xs font-semibold text-slate-400 tracking-wider">
                    04
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 leading-snug">
                  Leadership Pathway
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mt-2.5">
                  From member to ecosystem owner: Leadership Team (LT), Circle Director (CD), Circle Founder (CF), Industry Director (ID), and Regional Executive Director (RED).
                </p>
              </div>
              <div className="mt-7 pt-3 flex items-center justify-between border-t border-slate-100">
                <Link href="/leadership" className="text-xs font-semibold text-[#0078D4] hover:underline">
                  5-Stage Progression Ladder
                </Link>
                <Link href="/leadership" className="size-8 rounded-[4px] bg-slate-50 text-[#0078D4] flex items-center justify-center hover:bg-[#0078D4] hover:text-white transition-colors">
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* ── CARD 05: LSR GROWTH MODEL ── */}
            <div className="rounded-lg border border-slate-200 bg-white p-7 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="size-11 rounded-[4px] bg-blue-50 text-[#0078D4] flex items-center justify-center shrink-0">
                    <TrendingUp className="size-5.5" />
                  </div>
                  <span className="text-xs font-semibold text-slate-400 tracking-wider">
                    05
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 leading-snug">
                  LSR Growth Model
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mt-2.5">
                  Learning from real operators, Sales through high-trust relationships, and Resources pooled together for collective scale and bargaining power.
                </p>
              </div>
              <div className="mt-7 pt-3 flex items-center justify-between border-t border-slate-100">
                <Link href="/why-peers-global" className="text-xs font-semibold text-[#0078D4] hover:underline">
                  Learn · Share · Refer
                </Link>
                <Link href="/why-peers-global" className="size-8 rounded-[4px] bg-slate-50 text-[#0078D4] flex items-center justify-center hover:bg-[#0078D4] hover:text-white transition-colors">
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* ── CARD 06: UNITY APP PLATFORM ── */}
            <div className="rounded-lg border border-slate-200 bg-white p-7 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="size-11 rounded-[4px] bg-blue-50 text-[#0078D4] flex items-center justify-center shrink-0">
                    <Smartphone className="size-5.5" />
                  </div>
                  <span className="text-xs font-semibold text-slate-400 tracking-wider">
                    06
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 leading-snug">
                  Unity App Platform
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mt-2.5">
                  The Unity App running every day in between meetings — digital referrals, verified member directory, 1-to-1 matchmaking, and meeting registrations.
                </p>
              </div>
              <div className="mt-7 pt-3 flex items-center justify-between border-t border-slate-100">
                <Link href="/unity" className="text-xs font-semibold text-[#0078D4] hover:underline">
                  Available on iOS &amp; Android
                </Link>
                <Link href="/unity" className="size-8 rounded-[4px] bg-slate-50 text-[#0078D4] flex items-center justify-center hover:bg-[#0078D4] hover:text-white transition-colors">
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 sm:mt-10 relative z-10">
            <Link
              href="/circles"
              className="inline-flex items-center justify-center gap-2 rounded-[4px] bg-[#0078D4] hover:bg-[#006cbd] text-white px-6 py-2.5 text-sm font-semibold transition-colors"
            >
              <span>Explore Our World</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================================
          7. THE 1 MILLION MISSION
          ========================================================================= */}
      <section id="one-million-mission" className="relative overflow-hidden bg-[#0A1128] py-14 sm:py-18 text-white border-b border-slate-800">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl text-left mb-10 sm:mb-12">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#38BDF8]">
                Mission 2030
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-white tracking-tight leading-[1.12] mb-3">
              The 1 Million Mission
            </h2>

            <p className="font-semibold text-lg sm:text-xl text-[#38BDF8] mb-3 tracking-tight">
              1M+ entrepreneurs impacted by 2030.
            </p>

            <p className="text-base text-slate-300 font-normal leading-relaxed max-w-xl">
              We are building the world&apos;s most purposeful community of entrepreneurs — where collaboration creates confidence, visibility and growth for a better tomorrow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 relative mb-8">
            <div className="rounded-lg border border-slate-700/80 bg-[#0F172A]/90 p-6 shadow-sm flex items-start gap-4">
              <div className="size-11 rounded-[4px] bg-blue-600/30 text-sky-300 flex items-center justify-center shrink-0 border border-blue-400/30">
                <User className="size-5.5" />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-sky-400 block">
                  Phase 01
                </span>
                <h3 className="text-base font-semibold text-white leading-snug mt-1">
                  If one entrepreneur feels less alone.
                </h3>
                <p className="text-xs text-slate-400 font-normal mt-1.5 leading-relaxed">
                  A stronger mindset. A bigger tomorrow.
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-slate-700/80 bg-[#0F172A]/90 p-6 shadow-sm flex items-start gap-4">
              <div className="size-11 rounded-[4px] bg-blue-600/30 text-sky-300 flex items-center justify-center shrink-0 border border-blue-400/30">
                <BarChart3 className="size-5.5" />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-sky-400 block">
                  Phase 02
                </span>
                <h3 className="text-base font-semibold text-white leading-snug mt-1">
                  If one business finds clarity.
                </h3>
                <p className="text-xs text-slate-400 font-normal mt-1.5 leading-relaxed">
                  Better decisions. Faster growth.
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-slate-700/80 bg-[#0F172A]/90 p-6 shadow-sm flex items-start gap-4">
              <div className="size-11 rounded-[4px] bg-blue-600/30 text-sky-300 flex items-center justify-center shrink-0 border border-blue-400/30">
                <Users2 className="size-5.5" />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-sky-400 block">
                  Phase 03
                </span>
                <h3 className="text-base font-semibold text-white leading-snug mt-1">
                  If one founder finds the right peer.
                </h3>
                <p className="text-xs text-slate-400 font-normal mt-1.5 leading-relaxed">
                  New possibilities. Greater impact.
                </p>
              </div>
            </div>
          </div>

          {/* Founder Quote in Dark Box */}
          <div className="max-w-4xl mx-auto rounded-lg border border-slate-700/80 bg-[#0F172A]/90 p-6 sm:p-7 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-5 sm:gap-6 flex-1">
              <div className="size-18 rounded-full overflow-hidden shrink-0 border-2 border-sky-400/50 shadow-sm relative bg-blue-900">
                <Image
                  src="/images/dr-parmar-avatar.jpg"
                  alt="Dr. Pravin Parmar"
                  fill
                  className="object-cover object-top"
                />
              </div>

              <div>
                <p className="text-white text-base sm:text-lg leading-snug font-semibold">
                  &ldquo;Success is not just what you earn. It is how many lives you impact.&rdquo;
                </p>
                <span className="text-xs font-semibold uppercase tracking-[0.1em] text-sky-300 mt-2 block">
                  — DR. PRAVIN PARMAR, FOUNDER
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-8">
            <Link
              href="/membership"
              className="inline-flex items-center justify-center gap-2 rounded-[4px] bg-[#0078D4] hover:bg-[#006cbd] text-white px-6 py-2.5 text-sm font-semibold transition-colors"
            >
              <span>Join the 1 Million Mission</span>
              <ArrowRight className="size-4" />
            </Link>
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
