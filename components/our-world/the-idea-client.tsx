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
  Compass as CompassIcon,
  MessageSquare,
  Shield,
  Briefcase,
  Share2,
} from 'lucide-react'
import { ClosingCtaSection } from '@/components/site/ClosingCtaSection'
import { usePageMedia, ResolvedMediaItem } from '@/lib/hooks/use-page-media'

export function TheIdeaClient() {
  const { getMedia } = usePageMedia('our-world')

  // Modal player state for full screen/interactive playback
  const [activeModalMedia, setActiveModalMedia] = useState<ResolvedMediaItem | null>(null)

  // 1. Resolve media dynamically for Sub-Module: THE SILENT REALITY
  const silentRealityMedia = getMedia({
    sectionName: 'The Idea',
    subModuleName: 'THE SILENT REALITY',
    subModuleId: 'sub-our-world-the-idea-silent-reality',
    fallbackUrl: '/videos/leadership-hero-bg.mp4',
    fallbackSourceType: 'localhost',
    fallbackTitle: 'The Silent Reality — The Problem Nobody Talks About',
  })

  // 2. Resolve media dynamically for Sub-Module: ORIGIN STORY
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
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-[#0062D2] selection:text-white font-sans">

      {/* =========================================================================
          1. HERO SECTION (MASTER HERO BANNER CARD)
          ========================================================================= */}
      <section id="the-idea" className="relative overflow-hidden border-b border-cool-grey-250/80 bg-gradient-to-b from-white via-[#FAFBFD] to-white pt-6 sm:pt-10 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-cool-grey-500 font-medium tracking-wide mb-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <ChevronRight className="size-3.5 text-slate-400" />
            <span className="brand-gradient-text font-bold">The Idea</span>
          </div>

          {/* Master Hero Banner Card */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[36px] bg-white border border-cool-grey-250 shadow-sm min-h-[500px] lg:min-h-[540px] flex items-center">

            {/* Right Media Background Layer (Signature mist fade) */}
            <div
              className="absolute top-0 right-0 bottom-0 w-full sm:w-[65%] lg:w-[60%] overflow-hidden pointer-events-none"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.5) 25%, black 50%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.5) 25%, black 50%)',
              }}
            >
              <video
                src="/videos/homepage-hero-bg.mp4"
                poster="/images/who-we-are-boardroom.jpg"
                autoPlay
                loop
                muted
                playsInline
                className="size-full object-cover object-center"
              />

              {/* Seamless gradient overlays for misty fade */}
              <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white via-white/85 via-30% to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none" />

              {/* Top-Right Script Typography */}
              <div className="absolute top-6 sm:top-8 right-6 sm:right-8 z-20 text-right drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] pointer-events-none select-none">
                <p className="text-xl sm:text-2xl text-white/95 leading-tight" style={{ fontFamily: 'var(--font-script)' }}>
                  Never Build
                </p>
                <p className="text-2xl sm:text-3xl text-amber-300 font-medium leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Alone Again
                </p>
              </div>

              {/* Bottom-Right Frosted Glass Pill */}
              <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-20 pointer-events-none select-none">
                <div className="rounded-xl border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2.5 shadow-lg text-left">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/70">
                    THE PHILOSOPHY OF PEERS GLOBAL
                  </p>
                  <p className="text-xs font-bold tracking-wider text-white">
                    COMMUNITY OF COLLABORATION
                  </p>
                </div>
              </div>
            </div>

            {/* Left Content Area */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl lg:max-w-2xl flex flex-col items-start space-y-4">

                {/* Eyebrow */}
                <div className="flex items-center gap-2.5">
                  <span className="h-[2px] w-8 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    THE IDEA
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-bold text-[#0f131a] tracking-tight leading-[1.1]">
                  <span>The</span>{' '}
                  <span className="brand-gradient-text">Idea</span>
                </h1>

                {/* Subline */}
                <p className="text-xl sm:text-2xl font-semibold text-slate-800 leading-snug">
                  Entrepreneurs should not have to build alone.
                </p>

                {/* Intro Narrative */}
                <div className="space-y-2 text-sm sm:text-base text-cool-grey-600 font-normal leading-relaxed max-w-lg">
                  <p className="text-slate-800 font-medium">
                    There is a side of entrepreneurship that rarely appears in photographs.
                  </p>
                  <p className="text-xs sm:text-sm text-cool-grey-500">
                    The meetings are visible. The launches are visible. The growth is visible. But much of the journey happens quietly.
                  </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="https://unity.peersglobal.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                  >
                    <span>Download Unity App</span>
                    <ArrowRight className="size-4" />
                  </a>

                  <a
                    href="#the-quiet-journey"
                    className="inline-flex items-center gap-2 rounded-full border border-cool-grey-250 bg-white hover:bg-slate-50 text-slate-800 px-8 py-4 text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-xs"
                  >
                    Read the Story
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SUB-NAV ANCHOR BAR
          ========================================================================= */}
      <nav aria-label="Page navigation" className="sticky top-20 z-40 border-b border-cool-grey-250/80 bg-white/95 backdrop-blur-md shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-13 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-6 sm:gap-8 whitespace-nowrap text-[13.5px] font-semibold text-slate-700 py-1">
            <a href="#the-quiet-journey" className="hover:text-[#1D4ED8] pb-3 pt-3 transition-colors">
              The Quiet Journey
            </a>
            <a href="#the-problem" className="hover:text-[#1D4ED8] pb-3 pt-3 transition-colors">
              The Problem
            </a>
            <a href="#origin-story" className="hover:text-[#1D4ED8] pb-3 pt-3 transition-colors">
              Where It Came From
            </a>
            <a href="#what-we-believe" className="hover:text-[#1D4ED8] pb-3 pt-3 transition-colors">
              What We Believe
            </a>
            <a href="#partners-and-friends" className="hover:text-[#1D4ED8] pb-3 pt-3 transition-colors">
              Partners &amp; Friends
            </a>
            <a href="#what-we-are-building" className="hover:text-[#1D4ED8] pb-3 pt-3 transition-colors">
              What We Are Building
            </a>
            <a href="#one-million-mission" className="hover:text-[#1D4ED8] pb-3 pt-3 transition-colors">
              1M Mission
            </a>
          </div>

          <div className="hidden md:flex items-center shrink-0 pl-4">
            <a
              href="https://unity.peersglobal.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all hover:opacity-95 shadow-xs"
            >
              Get Unity App
            </a>
          </div>
        </div>
      </nav>

      {/* =========================================================================
          2. THE QUIET JOURNEY OF ENTREPRENEURSHIP
          ========================================================================= */}
      <section id="the-quiet-journey" className="py-20 sm:py-28 border-b border-cool-grey-250/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: 4 Realities */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="h-[2px] w-8 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  THE QUIET SIDE OF BUILDING
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0f131a] tracking-tight leading-[1.15]">
                <span>There is a side of entrepreneurship that</span>{' '}
                <span className="brand-gradient-text block sm:inline">rarely appears in photographs.</span>
              </h2>

              <p className="text-base sm:text-lg text-cool-grey-600 leading-relaxed font-normal">
                The meetings are visible. The launches are visible. The growth is visible. <br />
                <strong className="text-slate-900 font-bold">But much of the journey happens quietly:</strong>
              </p>

              <div className="space-y-3 pt-1">
                <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-cool-grey-200/80 flex items-start gap-3.5 shadow-2xs">
                  <div className="size-2.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    The decision you have to make when nobody else can make it for you.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-cool-grey-200/80 flex items-start gap-3.5 shadow-2xs">
                  <div className="size-2.5 rounded-full bg-violet-600 mt-2 shrink-0" />
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    The problem you cannot discuss with everyone.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-cool-grey-200/80 flex items-start gap-3.5 shadow-2xs">
                  <div className="size-2.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    The uncertainty you carry home after a difficult day.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-cool-grey-200/80 flex items-start gap-3.5 shadow-2xs">
                  <div className="size-2.5 rounded-full bg-rose-600 mt-2 shrink-0" />
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    The responsibility of being the person others look to—even when you are still figuring things out yourself.
                  </p>
                </div>
              </div>

              <div className="pt-2 space-y-3">
                <p className="text-sm sm:text-base text-cool-grey-600 leading-relaxed font-normal">
                  Entrepreneurs are often told to become stronger, more resilient and more self-reliant.
                </p>
                <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50/90 via-[#FAFBFD] to-rose-50/90 border border-slate-200/80">
                  <p className="text-base sm:text-lg font-bold brand-gradient-text leading-snug">
                    &ldquo;What if entrepreneurship was never meant to be a journey of doing everything alone?&rdquo;
                  </p>
                  <p className="text-xs text-cool-grey-500 mt-1 font-medium">
                    That question sits at the heart of PEERS GLOBAL.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Card: Reflective Visual Box */}
            <div className="lg:col-span-5">
              <div className="relative p-8 sm:p-10 rounded-[32px] bg-gradient-to-br from-[#060D1A] via-[#0B172E] to-[#040812] text-white shadow-2xl border border-slate-800/80 overflow-hidden min-h-[460px] flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-semibold tracking-widest uppercase text-amber-300">
                    THE CORE REALIZATION
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight text-white">
                    Beyond the highlight reel of business.
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    Behind every successful brand, venture, or enterprise is an entrepreneur navigating deep moments of responsibility.
                  </p>

                  <div className="p-5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md">
                    <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed font-medium">
                      &ldquo;You don’t just need more motivation. You need people who have walked through the fire and can stand beside you.&rdquo;
                    </p>
                  </div>
                </div>

                <div className="relative z-10 pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-medium">
                  <span>Peers Global Philosophy</span>
                  <span className="font-bold text-white">Trust · Depth · Support</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          3. THE PROBLEM NOBODY TALKS ABOUT
          ========================================================================= */}
      <section id="the-problem" className="relative py-20 sm:py-28 border-b border-cool-grey-250/80 bg-[#FAFBFD] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2.5">
              <span className="h-[2px] w-8 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                THE PROBLEM NOBODY TALKS ABOUT
              </span>
              <span className="h-[2px] w-8 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight text-[#0f131a] leading-[1.14]">
              <span>Entrepreneurship can be deeply rewarding.</span>{' '}
              <span className="brand-gradient-text block sm:inline">It can also be deeply isolating.</span>
            </h2>
            <p className="text-base sm:text-lg text-cool-grey-600 leading-relaxed font-normal">
              You may have employees, customers, suppliers, advisors, friends and family—and still experience moments when you feel that nobody quite understands what it means to carry the responsibility of building something of your own.
            </p>
          </div>

          {/* 4 Pillars of Support Needed */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-cool-grey-250 shadow-xs hover:shadow-md hover:border-blue-200 transition-all flex flex-col justify-between group">
              <div>
                <div className="size-11 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Lightbulb className="size-5" />
                </div>
                <h3 className="text-base font-bold text-[#0f131a] mb-2">Advice</h3>
                <p className="text-xs sm:text-sm text-cool-grey-600 leading-relaxed font-normal">
                  Objective guidance from founders who don&apos;t have an agenda or commercial interest in your outcome.
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-cool-grey-250 shadow-xs hover:shadow-md hover:border-violet-200 transition-all flex flex-col justify-between group">
              <div>
                <div className="size-11 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Sparkles className="size-5" />
                </div>
                <h3 className="text-base font-bold text-[#0f131a] mb-2">Experience</h3>
                <p className="text-xs sm:text-sm text-cool-grey-600 leading-relaxed font-normal">
                  Real wisdom from someone who has already faced the exact inflection point or mistake you are staring at.
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-cool-grey-250 shadow-xs hover:shadow-md hover:border-emerald-200 transition-all flex flex-col justify-between group">
              <div>
                <div className="size-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Share2 className="size-5" />
                </div>
                <h3 className="text-base font-bold text-[#0f131a] mb-2">An Introduction</h3>
                <p className="text-xs sm:text-sm text-cool-grey-600 leading-relaxed font-normal">
                  Warm, trusted doors opened by peers whose word carries credibility and genuine respect.
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-cool-grey-250 shadow-xs hover:shadow-md hover:border-rose-200 transition-all flex flex-col justify-between group">
              <div>
                <div className="size-11 rounded-xl bg-rose-50 text-[#E11D48] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <HeartHandshake className="size-5" />
                </div>
                <h3 className="text-base font-bold text-[#0f131a] mb-2">“I have been there.”</h3>
                <p className="text-xs sm:text-sm text-cool-grey-600 leading-relaxed font-normal">
                  Sometimes the greatest relief is hearing from a fellow founder: <em>“I faced that too, and here is how we survived it.”</em>
                </p>
              </div>
            </div>
          </div>

          {/* Not networking callout banner */}
          <div className="max-w-4xl mx-auto rounded-[32px] bg-white border border-cool-grey-250 p-8 sm:p-12 shadow-sm text-center space-y-6">
            <p className="text-base sm:text-lg text-cool-grey-700 leading-relaxed font-medium">
              That kind of support cannot be created by collecting more contacts. It comes from <strong className="text-slate-900 font-bold">relationships</strong>.
            </p>

            <div className="flex flex-wrap justify-center gap-3 text-xs sm:text-sm font-semibold text-slate-800">
              <span className="px-4 py-2 rounded-full bg-[#FAFBFD] border border-cool-grey-200">Relationships built over time</span>
              <span className="px-4 py-2 rounded-full bg-[#FAFBFD] border border-cool-grey-200">Relationships built on trust</span>
              <span className="px-4 py-2 rounded-full bg-[#FAFBFD] border border-cool-grey-200">Willing not only to ask, but to give</span>
            </div>

            <p className="text-sm sm:text-base text-slate-600 font-normal italic">
              &ldquo;Not with networking. Not with another directory of entrepreneurs. Not with another room full of business cards.&rdquo;
            </p>

            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50/90 via-[#FAFBFD] to-rose-50/90 border border-slate-200/80">
              <p className="text-lg sm:text-2xl font-bold brand-gradient-text">
                Entrepreneurs grow differently when they have the right people around them.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. WHERE THE IDEA CAME FROM (FOUNDER'S ORIGIN STORY)
          ========================================================================= */}
      <section id="origin-story" className="relative py-20 sm:py-28 border-b border-cool-grey-250/80 bg-gradient-to-b from-white via-[#FAFBFD] to-white overflow-hidden">
        {/* Subtle Background Radial Glow */}
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">

            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="h-[2px] w-8 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  WHERE THE IDEA CAME FROM
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#0f131a] leading-[1.15]">
                <span>A founder&apos;s journey can change the</span>{' '}
                <span className="brand-gradient-text block sm:inline">way he sees other founders.</span>
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-cool-grey-600 font-normal leading-relaxed">
                <p>
                  <strong className="text-slate-900 font-semibold">Dr. Pravin Parmar&apos;s journey began in Botad</strong>, coming from a farmer family. His early education was in a government school. English was not simply a subject to him; at one point, choosing English for higher studies required a deliberate decision and the willingness to work through the process. He completed his studies in English medium and went on to pursue MCA.
                </p>

                <p>
                  His professional journey took him through Microsoft, ERP implementation, technology and eventually entrepreneurship. But entrepreneurship brought its own education.
                </p>

                <p>
                  As a first-generation entrepreneur, much of the ecosystem was unfamiliar. The structures were still evolving. There were challenges, uncertainty and plenty to learn.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-50/90 via-[#FAFBFD] to-rose-50/90 border border-slate-200/90 shadow-2xs text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                <p>
                  He built. He experimented. He created. He struggled. He learned. And eventually, after building a technology venture and developing a cloud-based HRMS product, he reached an exit: <em className="text-[#1D4ED8] font-bold">What next?</em>
                </p>
              </div>
            </div>

            {/* Right Card with Cutout / Media Frame */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[32px] overflow-hidden border border-slate-800/80 bg-gradient-to-br from-[#060D1A] via-[#0B172E] to-[#040812] p-8 sm:p-10 text-white shadow-2xl min-h-[460px] flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-semibold tracking-widest uppercase text-amber-300">
                    THE UNPUBLISHED STORY THAT SPARKED A MOVEMENT
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold leading-tight text-white tracking-tight">
                    What happens to the stories that never get told?
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    He wanted his entrepreneurial story to be heard. He shared it with major media platforms including Times of India and Inc42. But the story was not published.
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    It was a small moment on the surface. Yet moments like this make an entrepreneur think differently:
                  </p>

                  <div className="space-y-2 p-4 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-sky-200">
                    <p className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                      <span>What happens to entrepreneurs building without a large platform behind them?</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                      <span>What happens when experience exists—but there is nobody around with whom to share it?</span>
                    </p>
                  </div>
                </div>

                <div className="relative z-10 pt-6 mt-6 border-t border-white/10">
                  <p className="text-sm sm:text-base italic text-white leading-relaxed font-medium">
                    &ldquo;The answer cannot always be another service. Sometimes, the answer is community.&rdquo;
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* 6 Stage Timeline Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-cool-grey-250 shadow-xs hover:shadow-md hover:border-blue-200 transition-all flex flex-col justify-between group">
              <div>
                <span className="inline-block px-2 py-0.5 rounded-md bg-blue-50 text-xs font-bold text-[#1D4ED8]">01</span>
                <h4 className="text-sm font-bold text-[#0f131a] mt-3 mb-1">Roots in Botad</h4>
                <p className="text-xs text-cool-grey-600 leading-relaxed">Farmer family heritage, government schooling &amp; core values.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-cool-grey-250 shadow-xs hover:shadow-md hover:border-blue-200 transition-all flex flex-col justify-between group">
              <div>
                <span className="inline-block px-2 py-0.5 rounded-md bg-blue-50 text-xs font-bold text-[#1D4ED8]">02</span>
                <h4 className="text-sm font-bold text-[#0f131a] mt-3 mb-1">Tech &amp; Enterprise</h4>
                <p className="text-xs text-cool-grey-600 leading-relaxed">MCA, Microsoft experience, ERP implementation &amp; cloud systems.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-cool-grey-250 shadow-xs hover:shadow-md hover:border-blue-200 transition-all flex flex-col justify-between group">
              <div>
                <span className="inline-block px-2 py-0.5 rounded-md bg-blue-50 text-xs font-bold text-[#1D4ED8]">03</span>
                <h4 className="text-sm font-bold text-[#0f131a] mt-3 mb-1">First Venture &amp; Exit</h4>
                <p className="text-xs text-cool-grey-600 leading-relaxed">Building cloud HRMS product, navigating uncertainty &amp; successful exit.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-cool-grey-250 shadow-xs hover:shadow-md hover:border-rose-200 transition-all flex flex-col justify-between group">
              <div>
                <span className="inline-block px-2 py-0.5 rounded-md bg-rose-50 text-xs font-bold text-[#E11D48]">04</span>
                <h4 className="text-sm font-bold text-[#0f131a] mt-3 mb-1">Media Turning Point</h4>
                <p className="text-xs text-cool-grey-600 leading-relaxed">Realizing untold stories of everyday MSMEs and founders across India.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-cool-grey-250 shadow-xs hover:shadow-md hover:border-rose-200 transition-all flex flex-col justify-between group">
              <div>
                <span className="inline-block px-2 py-0.5 rounded-md bg-rose-50 text-xs font-bold text-[#E11D48]">05</span>
                <h4 className="text-sm font-bold text-[#0f131a] mt-3 mb-1">The LSR Model</h4>
                <p className="text-xs text-cool-grey-600 leading-relaxed">Designing Learning, Sharing and Relationships as core growth engines.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50/80 via-white to-rose-50/80 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-rose-300 transition-all flex flex-col justify-between group">
              <div>
                <span className="inline-block px-2 py-0.5 rounded-md bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-xs font-bold">06</span>
                <h4 className="text-sm font-bold brand-gradient-text mt-3 mb-1">Peers Global</h4>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">World&apos;s first community of collaboration built to impact 1M founders.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          5. WHAT WE BELIEVE (4 CORE BELIEFS)
          ========================================================================= */}
      <section id="what-we-believe" className="relative py-20 sm:py-28 border-b border-cool-grey-250/80 bg-[#FAFBFD] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2.5">
              <span className="h-[2px] w-8 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                THE CORE PHILOSOPHY
              </span>
              <span className="h-[2px] w-8 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight text-[#0f131a] leading-[1.14]">
              <span>What we</span>{' '}
              <span className="brand-gradient-text">believe</span>
            </h2>
            <p className="text-base sm:text-lg text-cool-grey-600 leading-relaxed font-normal">
              Four fundamental principles that guide every Circle, meeting, and relationship in Peers Global.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="p-7 rounded-2xl bg-white border border-cool-grey-250 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-blue-200 transition-all group">
              <div>
                <div className="size-11 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center font-bold text-sm mb-5 group-hover:scale-105 transition-transform">
                  01
                </div>
                <h3 className="text-base font-bold text-[#0f131a] mb-2">A Journey, Not a Destination</h3>
                <p className="text-xs sm:text-sm text-cool-grey-600 leading-relaxed font-normal">
                  We believe entrepreneurship is a journey—not a destination. Growth is continuous, and every stage brings new learning.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#1D4ED8]">Continuous Evolution</span>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-cool-grey-250 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-violet-200 transition-all group">
              <div>
                <div className="size-11 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center font-bold text-sm mb-5 group-hover:scale-105 transition-transform">
                  02
                </div>
                <h3 className="text-base font-bold text-[#0f131a] mb-2">Shared Experience</h3>
                <p className="text-xs sm:text-sm text-cool-grey-600 leading-relaxed font-normal">
                  We believe experience becomes more valuable when it is shared. Lessons locked inside one mind help only one business; shared, they elevate many.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-violet-600">Wisdom in Motion</span>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-cool-grey-250 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-emerald-200 transition-all group">
              <div>
                <div className="size-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm mb-5 group-hover:scale-105 transition-transform">
                  03
                </div>
                <h3 className="text-base font-bold text-[#0f131a] mb-2">Trust Before Transactions</h3>
                <p className="text-xs sm:text-sm text-cool-grey-600 leading-relaxed font-normal">
                  We believe relationships become stronger when trust is built before transactions. Trust is the currency that outlasts any commercial deal.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">Enduring Foundations</span>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-cool-grey-250 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-rose-200 transition-all group">
              <div>
                <div className="size-11 rounded-xl bg-rose-50 text-[#E11D48] flex items-center justify-center font-bold text-sm mb-5 group-hover:scale-105 transition-transform">
                  04
                </div>
                <h3 className="text-base font-bold text-[#0f131a] mb-2">Mutual Elevation</h3>
                <p className="text-xs sm:text-sm text-cool-grey-600 leading-relaxed font-normal">
                  We believe the growth of one entrepreneur can become the beginning of growth for another. When one rises, the entire circle rises.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#E11D48]">Collective Rise</span>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-7 rounded-[28px] bg-gradient-to-r from-[#0B1528] via-[#0F224A] to-[#0B1528] text-white text-center max-w-3xl mx-auto shadow-xl border border-slate-800">
            <p className="text-lg sm:text-2xl font-bold leading-snug">
              &ldquo;Give first. Build trust. Deepen the relationship. Grow the business.&rdquo;
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          6. PEERS ARE PARTNERS IN BUSINESS AND FRIENDS IN LIFE
          ========================================================================= */}
      <section id="partners-and-friends" className="py-20 sm:py-28 border-b border-cool-grey-250/80 bg-gradient-to-b from-white via-[#FAFBFD] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="h-[2px] w-8 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  PEERS ARE PARTNERS IN BUSINESS AND FRIENDS IN LIFE
                </span>
              </div>

              <h2 className="font-bold text-3xl sm:text-4xl lg:text-[44px] text-[#0f131a] tracking-tight leading-[1.15]">
                <span>Peers are Partners in Business</span>{' '}
                <span className="brand-gradient-text block sm:inline">and Friends in Life</span>
              </h2>

              <p className="text-base sm:text-lg text-cool-grey-600 leading-relaxed font-normal">
                Business relationships often begin with a pragmatic reason:
              </p>

              {/* Beginning Reasons Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-2xl bg-white border border-cool-grey-250 shadow-2xs text-center font-bold text-xs sm:text-sm text-slate-800 hover:border-blue-200 transition-colors">
                  A referral.
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-cool-grey-250 shadow-2xs text-center font-bold text-xs sm:text-sm text-slate-800 hover:border-blue-200 transition-colors">
                  A meeting.
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-cool-grey-250 shadow-2xs text-center font-bold text-xs sm:text-sm text-slate-800 hover:border-blue-200 transition-colors">
                  A question.
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-cool-grey-250 shadow-2xs text-center font-bold text-xs sm:text-sm text-slate-800 hover:border-blue-200 transition-colors">
                  An introduction.
                </div>
              </div>

              <p className="text-base sm:text-lg text-cool-grey-600 leading-relaxed font-normal">
                But the most meaningful relationships do not always remain transactional.
              </p>

              {/* Over Time Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-cool-grey-250 shadow-sm space-y-3.5">
                <p className="font-bold text-[#0f131a] text-sm sm:text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                  Over time, people begin to know:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FAFBFD] border border-cool-grey-200/60 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    The person behind the business.
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FAFBFD] border border-cool-grey-200/60 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    The challenges behind the ambition.
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FAFBFD] border border-cool-grey-200/60 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    The family behind the entrepreneur.
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FAFBFD] border border-cool-grey-200/60 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    The journey behind the achievement.
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <p className="text-sm uppercase tracking-widest font-bold text-slate-400">
                  THE HUMAN DIMENSION
                </p>
                <p className="text-base sm:text-lg text-cool-grey-600 leading-relaxed font-normal">
                  That is why <strong className="text-slate-900 font-semibold">Peers Global</strong> is built around a broader idea of relationship: creating space for genuine human conversations alongside commercial growth.
                </p>
              </div>

              {/* Room for Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3 rounded-2xl bg-blue-50/80 border border-blue-100 text-blue-900 font-bold text-xs sm:text-sm text-center shadow-2xs">
                  Room to celebrate.
                </div>
                <div className="p-3 rounded-2xl bg-indigo-50/80 border border-indigo-100 text-indigo-900 font-bold text-xs sm:text-sm text-center shadow-2xs">
                  Room to learn.
                </div>
                <div className="p-3 rounded-2xl bg-amber-50/80 border border-amber-100 text-amber-900 font-bold text-xs sm:text-sm text-center shadow-2xs">
                  Room to ask for help.
                </div>
                <div className="p-3 rounded-2xl bg-emerald-50/80 border border-emerald-100 text-emerald-900 font-bold text-xs sm:text-sm text-center shadow-2xs">
                  Room to give help.
                </div>
                <div className="p-3 rounded-2xl bg-rose-50/80 border border-rose-100 text-rose-900 font-bold text-xs sm:text-sm text-center shadow-2xs">
                  Room for family.
                </div>
                <div className="p-3 rounded-2xl bg-sky-50/80 border border-sky-100 text-sky-900 font-bold text-xs sm:text-sm text-center shadow-2xs">
                  Room for humanity.
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-100 text-slate-700 text-xs sm:text-sm leading-relaxed font-normal">
                Because an entrepreneur does not leave their human life outside the business. They bring it with them. And when people are respected as whole human beings, relationships have the opportunity to become deeper and more meaningful.
              </div>
            </div>

            {/* Right Column: Visual Showcase Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative p-8 sm:p-10 rounded-[32px] bg-gradient-to-br from-[#060D1A] via-[#0B172E] to-[#040812] text-white shadow-2xl border border-slate-800/80 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-semibold tracking-widest uppercase text-rose-300">
                    THE HUMAN FOUNDATION
                  </div>

                  <h3 className="font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight text-white tracking-tight">
                    Beyond Transactions. <span className="brand-gradient-text block">Into Life.</span>
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    A community where you are welcomed not only for what you produce or achieve, but for the person you are becoming along the journey.
                  </p>

                  <div className="p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md space-y-2">
                    <span className="text-2xl text-rose-400 font-serif leading-none block">&ldquo;</span>
                    <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed font-medium">
                      The person who helped you enter a new market is the one who shows up for your family&apos;s milestones.
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-medium">
                    <span>Family Meetups</span>
                    <span>•</span>
                    <span>Confidential Forum</span>
                    <span>•</span>
                    <span>Lifelong Ties</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          7. FROM A NETWORK TO A LEADERSHIP ORGANISATION (LSR & INNER BOARD)
          ========================================================================= */}
      <section id="what-we-are-building" className="relative py-20 sm:py-28 border-b border-cool-grey-250/80 bg-[#FAFBFD] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2.5">
              <span className="h-[2px] w-8 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                FROM A NETWORK TO A LEADERSHIP ORGANISATION
              </span>
              <span className="h-[2px] w-8 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight text-[#0f131a] leading-[1.14]">
              <span>How can entrepreneurs</span>{' '}
              <span className="brand-gradient-text block sm:inline">help one another grow?</span>
            </h2>
            <p className="text-base sm:text-lg text-cool-grey-600 leading-relaxed font-normal">
              The answer could have been another networking platform. Instead, PEERS GLOBAL chose to build something broader: a leadership organisation.
            </p>
          </div>

          {/* LSR 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            <div className="p-8 rounded-2xl bg-white border border-cool-grey-250 shadow-xs hover:shadow-md hover:border-blue-200 transition-all flex flex-col justify-between group">
              <div>
                <div className="size-12 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <BookOpen className="size-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#1D4ED8] block mb-1">DIMENSION 01</span>
                <h3 className="text-xl font-bold text-[#0f131a] mb-2">Learning</h3>
                <p className="text-xs sm:text-sm text-cool-grey-600 leading-relaxed font-normal">
                  An entrepreneur who keeps learning can grow. Continuous exposure to fresh insights, methods, and cross-industry frameworks.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-cool-grey-250 shadow-xs hover:shadow-md hover:border-violet-200 transition-all flex flex-col justify-between group">
              <div>
                <div className="size-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Sparkles className="size-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-violet-600 block mb-1">DIMENSION 02</span>
                <h3 className="text-xl font-bold text-[#0f131a] mb-2">Sharing</h3>
                <p className="text-xs sm:text-sm text-cool-grey-600 leading-relaxed font-normal">
                  An entrepreneur who shares experience can help someone else grow. Turning personal lessons into collective leverage.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-cool-grey-250 shadow-xs hover:shadow-md hover:border-emerald-200 transition-all flex flex-col justify-between group">
              <div>
                <div className="size-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <HeartHandshake className="size-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block mb-1">DIMENSION 03</span>
                <h3 className="text-xl font-bold text-[#0f131a] mb-2">Relationships</h3>
                <p className="text-xs sm:text-sm text-cool-grey-600 leading-relaxed font-normal">
                  An entrepreneur who builds trusted relationships creates possibilities that neither person could necessarily create alone.
                </p>
              </div>
            </div>
          </div>

          {/* Your Inner Board & Architecture Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: Your Inner Board */}
            <div className="lg:col-span-6 p-8 sm:p-10 rounded-[32px] bg-white border border-cool-grey-250 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    YOUR INNER BOARD
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl text-[#0f131a] font-bold leading-tight">
                  You should not always have to face decisions alone.
                </h3>
                <p className="text-xs sm:text-sm text-cool-grey-600 leading-relaxed font-normal">
                  Every entrepreneur makes decisions. Some are easy; others carry immense consequences. A trusted group of fellow entrepreneurs becomes:
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-slate-800 pt-2">
                  <div className="p-3 rounded-xl bg-[#FAFBFD] border border-cool-grey-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>A sounding board</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FAFBFD] border border-cool-grey-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                    <span>Source of experience</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FAFBFD] border border-cool-grey-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Source of perspective</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FAFBFD] border border-cool-grey-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    <span>Source of introductions</span>
                  </div>
                </div>
                <p className="text-xs text-cool-grey-500 italic leading-relaxed pt-2">
                  &ldquo;Where experience can move from one entrepreneur to another, and where helping someone else can become part of your own growth.&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link href="/circles" className="text-xs sm:text-sm font-bold brand-gradient-text inline-flex items-center gap-1.5 hover:underline">
                  Explore Circles &amp; Inner Boards
                  <ArrowRight className="size-4 text-[#E11D48]" />
                </Link>
              </div>
            </div>

            {/* Right: Architecture Built Around The Idea */}
            <div className="lg:col-span-6 p-8 sm:p-10 rounded-[32px] bg-gradient-to-br from-[#060D1A] via-[#0B172E] to-[#040812] text-white shadow-2xl border border-slate-800/80 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-semibold tracking-widest uppercase text-amber-300">
                  WHAT WE ARE BUILDING
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight text-white">
                  The architecture built around the idea.
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  When people grow together, growth becomes more meaningful. Today, that idea is expressed through:
                </p>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="size-2 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                    <p><strong className="text-white">A leadership organisation:</strong> Growing not only as business owners, but also as contributors and leaders.</p>
                  </div>
                  <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="size-2 rounded-full bg-violet-400 mt-1.5 shrink-0" />
                    <p><strong className="text-white">LSR Growth Model:</strong> Learning, Sharing &amp; Relationships working in unison.</p>
                  </div>
                  <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="size-2 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    <p><strong className="text-white">18 Industry &amp; Goal Circles:</strong> Relevant peers grouped around shared contexts and aspirations.</p>
                  </div>
                  <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="size-2 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                    <p><strong className="text-white">10 Forms of Collaboration:</strong> Structured ways to create and compound mutual value.</p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-4 mt-4 border-t border-white/10 text-xs text-slate-400 font-medium italic">
                &ldquo;These are not the idea itself. They are the architecture. The idea is people helping people grow.&rdquo;
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          8. WHY COLLABORATION MATTERS
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 border-b border-cool-grey-250/80 bg-gradient-to-b from-white via-[#FAFBFD] to-white overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-500/5 via-rose-500/5 to-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2.5">
              <span className="h-[2px] w-8 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                WHY COLLABORATION MATTERS
              </span>
              <span className="h-[2px] w-8 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight text-[#0f131a] leading-[1.14]">
              <span>A business can grow through capital,</span>{' '}
              <span className="brand-gradient-text block sm:inline">technology, systems and talent.</span>
            </h2>

            <p className="text-base sm:text-xl text-cool-grey-600 max-w-3xl mx-auto leading-relaxed font-normal">
              But there are moments when what changes the trajectory of a business is simply another human being.
            </p>
          </div>

          {/* 5 Dynamic Impact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-14">
            <div className="p-6 rounded-2xl bg-white border border-cool-grey-250 shadow-xs hover:shadow-md hover:border-blue-200 transition-all flex flex-col justify-between group">
              <div>
                <div className="size-10 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center font-bold text-sm mb-4 group-hover:scale-105 transition-transform">
                  01
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#0f131a] mb-1.5">Shares an Experience</h3>
                <p className="text-xs text-cool-grey-600 leading-relaxed font-normal">
                  Real perspective from someone who has navigated the exact storm before.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-cool-grey-250 shadow-xs hover:shadow-md hover:border-rose-200 transition-all flex flex-col justify-between group">
              <div>
                <div className="size-10 rounded-xl bg-rose-50 text-[#E11D48] flex items-center justify-center font-bold text-sm mb-4 group-hover:scale-105 transition-transform">
                  02
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#0f131a] mb-1.5">Makes an Introduction</h3>
                <p className="text-xs text-cool-grey-600 leading-relaxed font-normal">
                  Opening high-trust doors that cold outreach and capital cannot unlock.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-cool-grey-250 shadow-xs hover:shadow-md hover:border-amber-200 transition-all flex flex-col justify-between group">
              <div>
                <div className="size-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-sm mb-4 group-hover:scale-105 transition-transform">
                  03
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#0f131a] mb-1.5">Asks the Unconsidered</h3>
                <p className="text-xs text-cool-grey-600 leading-relaxed font-normal">
                  Challenging blind spots with care and sharp founder intuition.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-cool-grey-250 shadow-xs hover:shadow-md hover:border-indigo-200 transition-all flex flex-col justify-between group">
              <div>
                <div className="size-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-sm mb-4 group-hover:scale-105 transition-transform">
                  04
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#0f131a] mb-1.5">Helps You See Differently</h3>
                <p className="text-xs text-cool-grey-600 leading-relaxed font-normal">
                  Reframing strategic problems into multi-dimensional opportunities.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50/80 via-white to-rose-50/80 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-rose-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="size-10 rounded-xl bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white flex items-center justify-center font-bold text-sm mb-4 group-hover:scale-105 transition-transform shadow-sm">
                  05
                </div>
                <h3 className="text-sm sm:text-base font-bold brand-gradient-text mb-1.5">“Let me help.”</h3>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  The most powerful phrase in entrepreneurship, offered without transaction.
                </p>
              </div>
            </div>
          </div>

          {/* Core Philosophy Callout Box */}
          <div className="max-w-3xl mx-auto rounded-[28px] bg-white border border-cool-grey-250 p-8 sm:p-10 shadow-sm text-center space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-cool-grey-500">
              THE HUMAN FOUNDATION
            </p>
            <p className="text-lg sm:text-2xl font-bold text-[#0f131a] leading-snug">
              That is collaboration at its most human.
            </p>
            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50/90 via-[#FAFBFD] to-rose-50/90 border border-slate-200/80">
              <p className="text-base sm:text-lg font-bold brand-gradient-text">
                Collaboration is not merely a business mechanism. It is a culture.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          9. THE 1 MILLION MISSION
          ========================================================================= */}
      <section
        id="one-million-mission"
        className="relative overflow-hidden py-20 sm:py-28 lg:py-32 text-white border-b border-slate-800"
        style={{ background: 'linear-gradient(135deg, #040812 0%, #071328 45%, #0a1b38 80%, #040812 100%)' }}
      >
        {/* Ambient Glowing Blobs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2.5">
              <span className="h-[2px] w-8 bg-gradient-to-r from-blue-400 to-rose-400 rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-rose-300 to-amber-300">
                THE 1 MILLION MISSION
              </span>
              <span className="h-[2px] w-8 bg-gradient-to-r from-rose-400 to-blue-400 rounded-full" />
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.12]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-rose-400 to-amber-300">
                1M+ entrepreneurs
              </span>{' '}
              <span className="block sm:inline">to impact by 2030.</span>
            </h2>

            <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
              The number is not intended to represent a crowd. It represents a possibility.
            </p>
          </div>

          {/* 5 Multiplication Ripple Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-14 text-center">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-blue-400/40 hover:bg-white/[0.08] transition-all flex flex-col justify-between group">
              <div>
                <span className="inline-block px-2.5 py-1 rounded-md bg-blue-500/20 text-blue-300 text-xs font-bold mb-3 group-hover:scale-105 transition-transform">01</span>
                <p className="text-sm font-bold text-white mb-1">One Entrepreneur</p>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">Helped and elevated.</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-rose-400/40 hover:bg-white/[0.08] transition-all flex flex-col justify-between group">
              <div>
                <span className="inline-block px-2.5 py-1 rounded-md bg-rose-500/20 text-rose-300 text-xs font-bold mb-3 group-hover:scale-105 transition-transform">02</span>
                <p className="text-sm font-bold text-white mb-1">One Relationship</p>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">Strengthened for life.</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-violet-400/40 hover:bg-white/[0.08] transition-all flex flex-col justify-between group">
              <div>
                <span className="inline-block px-2.5 py-1 rounded-md bg-violet-500/20 text-violet-300 text-xs font-bold mb-3 group-hover:scale-105 transition-transform">03</span>
                <p className="text-sm font-bold text-white mb-1">One Experience</p>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">Freely shared.</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-amber-400/40 hover:bg-white/[0.08] transition-all flex flex-col justify-between group">
              <div>
                <span className="inline-block px-2.5 py-1 rounded-md bg-amber-500/20 text-amber-300 text-xs font-bold mb-3 group-hover:scale-105 transition-transform">04</span>
                <p className="text-sm font-bold text-white mb-1">One Opportunity</p>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">Unlocked together.</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-b from-blue-900/40 via-purple-900/30 to-rose-900/40 border border-rose-400/30 backdrop-blur-md hover:border-rose-400/60 transition-all flex flex-col justify-between group">
              <div>
                <span className="inline-block px-2.5 py-1 rounded-md bg-gradient-to-r from-blue-500 to-rose-500 text-white text-xs font-bold mb-3 group-hover:scale-105 transition-transform">05</span>
                <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-rose-300 mb-1">One Life</p>
                <p className="text-xs text-slate-200 leading-relaxed font-medium">Changed forever.</p>
              </div>
            </div>
          </div>

          {/* Narrative Callout Block */}
          <div className="max-w-3xl mx-auto rounded-[32px] bg-white/[0.04] border border-white/10 backdrop-blur-md p-8 sm:p-10 text-center space-y-4 mb-12">
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              The ambition is to create a model where impact multiplies through people. Because when one entrepreneur helps another grow, the effect does not stop with those two people.
            </p>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-base sm:text-lg font-bold text-white">
                It reaches employees. Families. Customers. Communities. Future entrepreneurs.
              </p>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              That is how one action can become part of something much larger.
            </p>
          </div>

          <div className="flex justify-center">
            <a
              href="https://unity.peersglobal.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white px-9 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xl shadow-blue-900/40 hover:shadow-2xl hover:-translate-y-0.5 transition-all group"
            >
              <span>Join the 1 Million Mission on Unity</span>
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </section>

      {/* =========================================================================
          10. THE IDEA IN ONE SENTENCE & IF THIS IDEA SPEAKS TO YOU
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 lg:py-32 border-b border-cool-grey-250/80 bg-gradient-to-b from-white via-[#FAFBFD] to-white overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-500/8 via-rose-500/8 to-indigo-500/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">

          {/* Top Block: The Idea In One Sentence */}
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2.5">
              <span className="h-[2px] w-8 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                THE IDEA IN ONE SENTENCE
              </span>
              <span className="h-[2px] w-8 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0f131a] leading-[1.12] max-w-4xl mx-auto">
              <span>Entrepreneurs should not</span>{' '}
              <span className="brand-gradient-text block sm:inline">have to build alone.</span>
            </h2>

            <p className="text-base sm:text-xl text-cool-grey-600 max-w-2xl mx-auto font-normal leading-relaxed">
              They should have people around them who understand the journey from the inside out.
            </p>

            {/* 4 Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2 text-left">
              <div className="p-5 rounded-2xl bg-white border border-cool-grey-250 shadow-xs hover:shadow-md hover:border-blue-200 transition-all flex flex-col justify-between group">
                <div className="size-10 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <BookOpen className="size-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">People to learn from</h4>
                  <p className="text-xs text-cool-grey-600 leading-relaxed">Gain perspective from those who have solved what you are facing.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-cool-grey-250 shadow-xs hover:shadow-md hover:border-rose-200 transition-all flex flex-col justify-between group">
                <div className="size-10 rounded-xl bg-rose-50 text-[#E11D48] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Sparkles className="size-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">People to contribute to</h4>
                  <p className="text-xs text-cool-grey-600 leading-relaxed">Turn your own victories and lessons into leverage for other founders.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-cool-grey-250 shadow-xs hover:shadow-md hover:border-indigo-200 transition-all flex flex-col justify-between group">
                <div className="size-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <ShieldCheck className="size-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">People they can trust</h4>
                  <p className="text-xs text-cool-grey-600 leading-relaxed">High-integrity peer advisory protected by category exclusivity.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-cool-grey-250 shadow-xs hover:shadow-md hover:border-emerald-200 transition-all flex flex-col justify-between group">
                <div className="size-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <HeartHandshake className="size-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Meaningful bonds</h4>
                  <p className="text-xs text-cool-grey-600 leading-relaxed">Where business relationships transform into lifelong friendships.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-50 via-white to-rose-50 border border-slate-200/90 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                <span className="text-base sm:text-lg font-bold brand-gradient-text">
                  And perhaps, over time, people they can call Peers.
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Block: If This Idea Speaks To You (Hero Card) */}
          <div className="relative p-8 sm:p-12 lg:p-14 rounded-[32px] bg-white border border-cool-grey-250 shadow-lg space-y-8 overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-500/5 via-rose-500/5 to-transparent rounded-full blur-2xl pointer-events-none" />

            <div className="relative space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  IF THIS IDEA SPEAKS TO YOU
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-[#0f131a] tracking-tight leading-tight">
                You do not have to arrive with everything figured out.
              </h3>

              <p className="text-base sm:text-lg text-cool-grey-600 leading-relaxed max-w-3xl font-normal">
                You do not have to be the biggest entrepreneur in the room. You do not have to know exactly what you need. You simply need to believe that your journey can become stronger when the right people are part of it.
              </p>

              <p className="text-base sm:text-lg text-cool-grey-600 leading-relaxed max-w-3xl font-normal">
                And you need to be willing to become one of those people for someone else.
              </p>
            </div>

            {/* Reciprocal Impact Banner */}
            <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-50/90 via-[#FAFBFD] to-rose-50/90 border border-slate-200/90 space-y-2 shadow-2xs">
              <div className="flex items-center gap-2">
                <span className="text-lg">🤝</span>
                <p className="text-sm sm:text-base font-bold text-slate-900 leading-relaxed">
                  Your growth can help someone else grow. And someone else&apos;s growth can help you grow.
                </p>
              </div>
              <p className="text-xs sm:text-sm font-semibold brand-gradient-text pl-7">
                That is not just collaboration. That is the community. That is the Idea.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="https://unity.peersglobal.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white px-8 sm:px-10 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <span>Download the Unity App</span>
                <ArrowRight className="size-4" />
              </a>
              <Link
                href="/circles"
                className="inline-flex items-center gap-2 rounded-full border border-cool-grey-250 bg-white hover:bg-slate-50 text-slate-800 px-8 sm:px-10 py-4 text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-xs hover:border-slate-300"
              >
                Explore Circles
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          11. CLOSING SECTION
          ========================================================================= */}
      <ClosingCtaSection
        eyebrow="BEGIN WITH THE PEOPLE"
        title="Entrepreneurs should not have to build alone."
        subtitle="Peers are Partners in Business and Friends in Life."
        description="Circles, not crowds. Trust, not transactions. Peers, not gurus. Download the Unity App and discover your Circle."
        primaryButtonText="DOWNLOAD THE UNITY APP"
        primaryButtonHref="https://unity.peersglobal.com"
        secondaryButtonText="EXPLORE CIRCLES"
        secondaryButtonHref="/circles"
        secondaryButtonIcon={<ChevronRight className="size-4" />}
      />

      {/* =========================================================================
          12. INTERACTIVE VIDEO PLAYER MODAL
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
