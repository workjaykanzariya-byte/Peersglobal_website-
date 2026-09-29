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
      <section id="the-idea" className="relative overflow-hidden border-b border-slate-200/90 bg-[#FAFBFD] pt-6 sm:pt-10 pb-10 sm:pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium tracking-wide mb-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <ChevronRight className="size-3.5 text-slate-400" />
            <span className="text-[#0062D2] font-semibold">The Idea</span>
          </div>

          {/* Master Hero Banner Card */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[36px] bg-white border border-slate-200/90 shadow-sm min-h-[500px] lg:min-h-[540px] flex items-center">

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
              <div className="max-w-xl lg:max-w-2xl flex flex-col items-start">

                {/* Eyebrow */}
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    THE IDEA
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-normal text-slate-950 tracking-tight leading-[1.1] mb-3">
                  The Idea
                </h1>

                {/* Subline */}
                <p className="text-xl sm:text-2xl text-[#0062D2] font-semibold leading-snug mb-4">
                  Entrepreneurs should not have to build alone.
                </p>

                {/* Intro Narrative */}
                <div className="space-y-2 text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-8 max-w-lg">
                  <p className="text-slate-800 font-medium">
                    There is a side of entrepreneurship that rarely appears in photographs.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500">
                    The meetings are visible. The launches are visible. The growth is visible. But much of the journey happens quietly.
                  </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 mb-2">
                  <a
                    href="https://unity.peersglobal.com"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white px-7 py-3.5 text-sm font-semibold shadow-lg shadow-blue-600/25 transition-all hover:scale-105 inline-flex items-center gap-2"
                  >
                    <span>Download Unity App</span>
                    <ArrowRight className="size-4" />
                  </a>

                  <a
                    href="#the-quiet-journey"
                    className="rounded-full border border-slate-300 hover:border-slate-400 bg-white/90 backdrop-blur-sm text-slate-800 px-7 py-3.5 text-sm font-semibold transition-all hover:scale-105 shadow-2xs"
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
      <nav aria-label="Page navigation" className="sticky top-20 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-13 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-6 sm:gap-8 whitespace-nowrap text-[13.5px] font-semibold text-slate-700 py-1">
            <a href="#the-quiet-journey" className="hover:text-[#0062D2] pb-3 pt-3 transition-colors">
              The Quiet Journey
            </a>
            <a href="#the-problem" className="hover:text-[#0062D2] pb-3 pt-3 transition-colors">
              The Problem
            </a>
            <a href="#origin-story" className="hover:text-[#0062D2] pb-3 pt-3 transition-colors">
              Where It Came From
            </a>
            <a href="#what-we-believe" className="hover:text-[#0062D2] pb-3 pt-3 transition-colors">
              What We Believe
            </a>
            <a href="#partners-and-friends" className="hover:text-[#0062D2] pb-3 pt-3 transition-colors">
              Partners &amp; Friends
            </a>
            <a href="#what-we-are-building" className="hover:text-[#0062D2] pb-3 pt-3 transition-colors">
              What We Are Building
            </a>
            <a href="#one-million-mission" className="hover:text-[#0062D2] pb-3 pt-3 transition-colors">
              1M Mission
            </a>
          </div>

          <div className="hidden md:flex items-center shrink-0 pl-4">
            <a
              href="https://unity.peersglobal.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-4 py-1.5 text-xs font-semibold transition-colors"
            >
              Get Unity App
            </a>
          </div>
        </div>
      </nav>

      {/* =========================================================================
          2. THE QUIET JOURNEY OF ENTREPRENEURSHIP
          ========================================================================= */}
      <section id="the-quiet-journey" className="py-14 sm:py-20 border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* Left Column: 4 Realities */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  THE QUIET SIDE OF BUILDING
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-slate-900 tracking-tight leading-tight">
                There is a side of entrepreneurship that rarely appears in photographs.
              </h2>

              <p className="text-base text-slate-700 leading-relaxed">
                The meetings are visible. The launches are visible. The growth is visible. <br />
                <strong className="text-slate-900">But much of the journey happens quietly:</strong>
              </p>

              <div className="space-y-3 pt-1">
                <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200/80 flex items-start gap-3.5">
                  <div className="size-2.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    The decision you have to make when nobody else can make it for you.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200/80 flex items-start gap-3.5">
                  <div className="size-2.5 rounded-full bg-violet-600 mt-2 shrink-0" />
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    The problem you cannot discuss with everyone.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200/80 flex items-start gap-3.5">
                  <div className="size-2.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    The uncertainty you carry home after a difficult day.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200/80 flex items-start gap-3.5">
                  <div className="size-2.5 rounded-full bg-rose-600 mt-2 shrink-0" />
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    The responsibility of being the person others look to—even when you are still figuring things out yourself.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Entrepreneurs are often told to become stronger, more resilient and more self-reliant.
                </p>
                <p className="text-base sm:text-lg font-serif text-[#0062D2] font-semibold mt-2 leading-relaxed">
                  “What if entrepreneurship was never meant to be a journey of doing everything alone?”
                </p>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  That question sits at the heart of PEERS GLOBAL.
                </p>
              </div>
            </div>

            {/* Right Card: Reflective Visual Box */}
            <div className="lg:col-span-5">
              <div className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="relative z-10 space-y-5">
                  <span className="text-[11px] uppercase tracking-widest text-amber-300 font-bold block">
                    THE CORE REALIZATION
                  </span>

                  <h3 className="font-serif text-2xl sm:text-3xl font-normal leading-snug">
                    Beyond the highlight reel of business.
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Behind every successful brand, venture, or enterprise is an entrepreneur navigating deep moments of responsibility.
                  </p>

                  <div className="p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md">
                    <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                      “You don’t just need more motivation. You need people who have walked through the fire and can stand beside you.”
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-700/80 flex items-center justify-between text-xs text-slate-400">
                    <span>Peers Global Philosophy</span>
                    <span className="font-semibold text-white">Trust · Depth · Support</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          3. THE PROBLEM NOBODY TALKS ABOUT
          ========================================================================= */}
      <section id="the-problem" className="py-14 sm:py-20 border-b border-slate-100 bg-[#FAFBFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                THE PROBLEM NOBODY TALKS ABOUT
              </span>
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight leading-tight mb-4">
              Entrepreneurship can be deeply rewarding. It can also be deeply isolating.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              You may have employees, customers, suppliers, advisors, friends and family—and still experience moments when you feel that nobody quite understands what it means to carry the responsibility of building something of your own.
            </p>
          </div>

          {/* 4 Pillars of Support Needed */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-2xs">
              <div className="size-10 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center mb-4">
                <Lightbulb className="size-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Advice</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Objective guidance from founders who don&apos;t have an agenda or commercial interest in your outcome.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-2xs">
              <div className="size-10 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4">
                <Sparkles className="size-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Experience</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Real wisdom from someone who has already faced the exact inflection point or mistake you are staring at.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-2xs">
              <div className="size-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <Share2 className="size-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">An Introduction</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Warm, trusted doors opened by peers whose word carries credibility and genuine respect.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-2xs">
              <div className="size-10 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4">
                <HeartHandshake className="size-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">“I have been there.”</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Sometimes the greatest relief is hearing from a fellow founder: <em>“I faced that too, and here is how we survived it.”</em>
              </p>
            </div>
          </div>

          {/* Not networking callout banner */}
          <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 shadow-sm text-center">
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              That kind of support cannot be created by collecting more contacts. It comes from <strong>relationships</strong>.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-xs sm:text-sm font-semibold text-slate-800 mb-6">
              <span className="px-4 py-1.5 rounded-full bg-slate-100">Relationships built over time</span>
              <span className="px-4 py-1.5 rounded-full bg-slate-100">Relationships built on trust</span>
              <span className="px-4 py-1.5 rounded-full bg-slate-100">Willing not only to ask, but to give</span>
            </div>
            <p className="text-sm sm:text-base text-slate-800 font-medium italic mb-2">
              “Not with networking. Not with another directory of entrepreneurs. Not with another room full of business cards.”
            </p>
            <p className="font-serif text-xl sm:text-2xl text-[#0062D2] font-semibold">
              Entrepreneurs grow differently when they have the right people around them.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. WHERE THE IDEA CAME FROM (FOUNDER'S ORIGIN STORY)
          ========================================================================= */}
      <section id="origin-story" className="py-16 sm:py-24 border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-14">

            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2.5">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  WHERE THE IDEA CAME FROM
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight leading-tight">
                A founder&apos;s journey can change the way he sees other founders.
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                <strong>Dr. Pravin Parmar&apos;s journey began in Botad</strong>, coming from a farmer family. His early education was in a government school. English was not simply a subject to him; at one point, choosing English for higher studies required a deliberate decision and the willingness to work through the process. He completed his studies in English medium and went on to pursue MCA.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                His professional journey took him through Microsoft, ERP implementation, technology and eventually entrepreneurship. But entrepreneurship brought its own education.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                As a first-generation entrepreneur, much of the ecosystem was unfamiliar. The structures were still evolving. There were challenges, uncertainty and plenty to learn.
              </p>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 text-xs sm:text-sm text-blue-950 font-medium leading-relaxed">
                He built. He experimented. He created. He struggled. He learned. And eventually, after building a technology venture and developing a cloud-based HRMS product, he reached an exit: <em>What next?</em>
              </div>
            </div>

            {/* Right Card with Cutout / Media Frame */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-[#061836] p-6 sm:p-8 text-white shadow-xl min-h-[440px] flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-4">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-amber-300">
                    THE UNPUBLISHED STORY THAT SPARKED A MOVEMENT
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal leading-snug">
                    What happens to the stories that never get told?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    He wanted his entrepreneurial story to be heard. He shared it with major media platforms including Times of India and Inc42. But the story was not published.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    It was a small moment on the surface. Yet moments like this make an entrepreneur think differently:
                  </p>
                  <div className="space-y-1.5 text-xs sm:text-sm font-semibold text-sky-200">
                    <p>• What happens to entrepreneurs building without a large platform behind them?</p>
                    <p>• What happens when experience exists—but there is nobody around with whom to share it?</p>
                  </div>
                </div>

                <div className="relative z-10 pt-6 mt-6 border-t border-slate-700/80">
                  <p className="text-sm font-serif italic text-white leading-relaxed">
                    “The answer cannot always be another service. Sometimes, the answer is community.”
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* 6 Stage Timeline Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-slate-400">01</span>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 mt-2 mb-1">Roots in Botad</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">Farmer family heritage, government schooling &amp; core values.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-slate-400">02</span>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 mt-2 mb-1">Tech &amp; Enterprise</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">MCA, Microsoft experience, ERP implementation &amp; cloud systems.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-slate-400">03</span>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 mt-2 mb-1">First Venture &amp; Exit</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">Building cloud HRMS product, navigating uncertainty &amp; successful exit.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-slate-400">04</span>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 mt-2 mb-1">The Media Turning Point</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">Realizing untold stories of everyday MSMEs and founders across India.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-slate-400">05</span>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 mt-2 mb-1">The LSR Model</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">Designing Learning, Sharing and Relationships as core growth engines.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-slate-400">06</span>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 mt-2 mb-1">Peers Global</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">World&apos;s first community of collaboration built to impact 1M founders.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          5. WHAT WE BELIEVE (4 CORE BELIEFS)
          ========================================================================= */}
      <section id="what-we-believe" className="py-16 sm:py-24 border-b border-slate-100 bg-[#FAFBFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                THE CORE PHILOSOPHY
              </span>
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight leading-tight mb-4">
              What we believe
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Four fundamental principles that guide every Circle, meeting, and relationship in Peers Global.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="size-11 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center font-bold text-sm mb-5">
                  01
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">A Journey, Not a Destination</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We believe entrepreneurship is a journey—not a destination. Growth is continuous, and every stage brings new learning.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0062D2]">Continuous Evolution</span>
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="size-11 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center font-bold text-sm mb-5">
                  02
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Shared Experience</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We believe experience becomes more valuable when it is shared. Lessons locked inside one mind help only one business; shared, they elevate many.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="text-[10px] font-bold uppercase tracking-wider text-violet-600">Wisdom in Motion</span>
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="size-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm mb-5">
                  03
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Trust Before Transactions</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We believe relationships become stronger when trust is built before transactions. Trust is the currency that outlasts any commercial deal.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Enduring Foundations</span>
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="size-11 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-sm mb-5">
                  04
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Mutual Elevation</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We believe the growth of one entrepreneur can become the beginning of growth for another. When one rises, the entire circle rises.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600">Collective Rise</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-gradient-to-r from-blue-900 via-[#0062D2] to-indigo-900 text-white text-center max-w-3xl mx-auto shadow-lg">
            <p className="font-serif text-xl sm:text-2xl font-normal leading-snug">
              “Give first. Build trust. Deepen the relationship. Grow the business.”
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          6. PEERS ARE PARTNERS IN BUSINESS AND FRIENDS IN LIFE
          ========================================================================= */}
      <section id="partners-and-friends" className="py-16 sm:py-24 border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* Left Column Narrative */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2.5">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  PEERS ARE PARTNERS IN BUSINESS AND FRIENDS IN LIFE
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight leading-tight">
                Peers are Partners in Business and Friends in Life
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
                Business relationships often begin with a reason.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs sm:text-sm font-semibold text-slate-800">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">A referral.</div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">A meeting.</div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">A question.</div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">An introduction.</div>
              </div>

              <p className="text-base text-slate-700 leading-relaxed">
                But the most meaningful relationships do not always remain transactional.
              </p>

              <div className="p-5 rounded-2xl bg-[#FAFBFD] border border-slate-200 space-y-2 text-sm text-slate-700 leading-relaxed">
                <p className="font-semibold text-slate-900">Over time, people begin to know:</p>
                <div className="grid sm:grid-cols-2 gap-2 pt-1 text-slate-800">
                  <div>• The person behind the business.</div>
                  <div>• The challenges behind the ambition.</div>
                  <div>• The family behind the entrepreneur.</div>
                  <div>• The journey behind the achievement.</div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <p className="text-base text-slate-900 font-bold leading-relaxed">
                  That is why PEERS GLOBAL is built around a broader idea of relationship.
                </p>
                <p className="font-serif text-xl sm:text-2xl text-[#0062D2] font-semibold">
                  Peers are Partners in Business and Friends in Life.
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  It means there should be room here not only for business conversations, but also for human conversations.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs sm:text-sm font-semibold text-slate-800 pt-1">
                <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100 text-blue-900">Room to celebrate.</div>
                <div className="p-2.5 rounded-xl bg-violet-50 border border-violet-100 text-violet-900">Room to learn.</div>
                <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-100 text-amber-900">Room to ask for help.</div>
                <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-900">Room to give help.</div>
                <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-100 text-rose-900">Room for family.</div>
                <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-100 text-sky-900">Room for humanity.</div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
                That is why the experience extends beyond business meetings into community experiences such as <strong>Family Meetups</strong> and the <strong>Confidential Forum</strong>.
              </p>

              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-amber-950 text-xs sm:text-sm leading-relaxed">
                Because an entrepreneur does not leave their human life outside the business. They bring it with them. And when people are respected as whole human beings, relationships have the opportunity to become deeper and more meaningful.
              </div>
            </div>

            {/* Right Column: Visual Callout Box */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-[#061836] to-[#0B254E] text-white shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="relative z-10 space-y-5">
                  <span className="text-[10px] uppercase tracking-widest text-amber-300 font-bold block">
                    THE HUMAN FOUNDATION
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal leading-snug">
                    Beyond Transactions. Into Life.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    A community where you are welcomed not only for what you produce or achieve, but for the person you are becoming along the journey.
                  </p>
                  <div className="p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md">
                    <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                      “The person who helped you enter a new market is the one who shows up for your family&apos;s milestones.”
                    </p>
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
      <section id="what-we-are-building" className="py-16 sm:py-24 border-b border-slate-100 bg-[#FAFBFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                FROM A NETWORK TO A LEADERSHIP ORGANISATION
              </span>
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight leading-tight mb-4">
              How can entrepreneurs help one another grow?
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              The answer could have been another networking platform. Instead, PEERS GLOBAL chose to build something broader: a leadership organisation.
            </p>
          </div>

          {/* LSR 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="size-12 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center mb-5">
                  <BookOpen className="size-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0062D2] block mb-1">DIMENSION 01</span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Learning</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  An entrepreneur who keeps learning can grow. Continuous exposure to fresh insights, methods, and cross-industry frameworks.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="size-12 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center mb-5">
                  <Sparkles className="size-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-violet-600 block mb-1">DIMENSION 02</span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Sharing</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  An entrepreneur who shares experience can help someone else grow. Turning personal lessons into collective leverage.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="size-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                  <HeartHandshake className="size-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-1">DIMENSION 03</span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Relationships</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  An entrepreneur who builds trusted relationships creates possibilities that neither person could necessarily create alone.
                </p>
              </div>
            </div>
          </div>

          {/* Your Inner Board & Architecture Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: Your Inner Board */}
            <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    YOUR INNER BOARD
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 font-normal leading-snug mb-4">
                  You should not always have to face decisions alone.
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Every entrepreneur makes decisions. Some are easy; others carry immense consequences. A trusted group of fellow entrepreneurs becomes:
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-800 mb-6">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">A sounding board</div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">A source of experience</div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">A source of perspective</div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">A source of introductions</div>
                </div>
                <p className="text-xs text-slate-500 italic leading-relaxed">
                  “Where experience can move from one entrepreneur to another, and where helping someone else can become part of your own growth.”
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <Link href="/circles" className="text-xs font-bold text-[#0062D2] hover:text-[#0052B4] inline-flex items-center gap-1">
                  Explore Circles &amp; Inner Boards
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>

            {/* Right: Architecture Built Around The Idea */}
            <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 to-[#0F172A] text-white shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-300 block mb-2">
                  WHAT WE ARE BUILDING
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal leading-snug mb-4">
                  The architecture built around the idea.
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  When people grow together, growth becomes more meaningful. Today, that idea is expressed through:
                </p>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <span className="size-2 rounded-full bg-blue-400 mt-2 shrink-0" />
                    <p><strong className="text-white">A leadership organisation:</strong> Growing not only as business owners, but also as contributors and leaders.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="size-2 rounded-full bg-violet-400 mt-2 shrink-0" />
                    <p><strong className="text-white">LSR Growth Model:</strong> Learning, Sharing &amp; Relationships working in unison.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="size-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
                    <p><strong className="text-white">18 Industry &amp; Goal Circles:</strong> Relevant peers grouped around shared contexts and aspirations.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="size-2 rounded-full bg-amber-400 mt-2 shrink-0" />
                    <p><strong className="text-white">10 Forms of Collaboration:</strong> Structured ways to create and compound mutual value.</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-700 text-xs text-slate-400 font-medium">
                “These are not the idea itself. They are the architecture. The idea is people helping people grow.”
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          8. WHY COLLABORATION MATTERS
          ========================================================================= */}
      <section className="py-16 sm:py-20 border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
            <div className="inline-flex items-center gap-2.5 mb-1">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                WHY COLLABORATION MATTERS
              </span>
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight leading-tight">
              A business can grow through capital, technology, systems and talent.
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              But there are moments when what changes the direction of a business is simply another human being.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto mb-10">
            <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200 text-center">
              <p className="text-xs sm:text-sm font-semibold text-slate-800">Someone who shares an experience.</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200 text-center">
              <p className="text-xs sm:text-sm font-semibold text-slate-800">Someone who makes an introduction.</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200 text-center">
              <p className="text-xs sm:text-sm font-semibold text-slate-800">Someone who asks the unconsidered question.</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200 text-center">
              <p className="text-xs sm:text-sm font-semibold text-slate-800">Someone who helps you see differently.</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200 text-center">
              <p className="text-xs sm:text-sm font-semibold text-[#0062D2]">Someone who says, “Let me help.”</p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-blue-50 border border-blue-200 text-center max-w-2xl mx-auto">
            <p className="text-sm sm:text-base text-blue-950 font-serif leading-relaxed">
              That is collaboration at its most human. <br />
              <strong>Collaboration is not merely a business mechanism. It is a culture.</strong>
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          9. THE 1 MILLION MISSION
          ========================================================================= */}
      <section
        id="one-million-mission"
        className="relative overflow-hidden py-16 sm:py-24 text-white border-b border-slate-800"
        style={{ background: 'linear-gradient(115deg, #020817 0%, #071a3d 48%, #06132d 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-300 block mb-3">
              THE 1 MILLION MISSION
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight leading-tight mb-4">
              1M+ entrepreneurs to impact by 2030.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              The number is not intended to represent a crowd. It represents a possibility.
            </p>
          </div>

          {/* Multiplication Ripple */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-4xl mx-auto mb-10 text-center">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
              <span className="text-xs font-bold text-sky-400 block mb-1">01</span>
              <p className="text-xs text-slate-200">One entrepreneur helped</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
              <span className="text-xs font-bold text-sky-400 block mb-1">02</span>
              <p className="text-xs text-slate-200">One relationship strengthened</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
              <span className="text-xs font-bold text-sky-400 block mb-1">03</span>
              <p className="text-xs text-slate-200">One experience shared</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
              <span className="text-xs font-bold text-sky-400 block mb-1">04</span>
              <p className="text-xs text-slate-200">One opportunity created</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs col-span-2 sm:col-span-1">
              <span className="text-xs font-bold text-sky-400 block mb-1">05</span>
              <p className="text-xs text-slate-200">One life changed</p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 text-sm text-slate-300 leading-relaxed">
            <p>
              The ambition is to create a model where impact multiplies through people. Because when one entrepreneur helps another grow, the effect does not stop with those two people.
            </p>
            <p className="font-semibold text-white">
              It reaches employees. Families. Customers. Communities. Future entrepreneurs.
            </p>
            <p className="text-xs text-slate-400">
              That is how one action can become part of something much larger.
            </p>
          </div>

          <div className="flex justify-center">
            <a
              href="https://unity.peersglobal.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white px-8 py-3.5 text-sm font-semibold shadow-lg shadow-blue-600/30 transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              <span>Join the 1 Million Mission on Unity</span>
              <ArrowRight className="size-4" />
            </a>
          </div>

        </div>
      </section>

      {/* =========================================================================
          10. THE IDEA IN ONE SENTENCE & IF THIS IDEA SPEAKS TO YOU
          ========================================================================= */}
      <section className="py-16 sm:py-24 border-b border-slate-100 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">

          {/* The Idea In One Sentence */}
          <div>
            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                THE IDEA IN ONE SENTENCE
              </span>
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-tight mb-4">
              Entrepreneurs should not have to build alone.
            </h2>
            <div className="space-y-2 text-base sm:text-lg text-slate-700 max-w-2xl mx-auto font-medium">
              <p>They should have people around them who understand the journey.</p>
              <p>People they can learn from. People they can contribute to.</p>
              <p>People they can trust.</p>
              <p>People with whom business relationships can become meaningful human relationships.</p>
              <p className="text-[#0062D2] font-serif text-xl sm:text-2xl pt-2">
                And perhaps, over time, people they can call Peers.
              </p>
            </div>
          </div>

          {/* If This Idea Speaks To You */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFBFD] border border-slate-200 text-left space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                IF THIS IDEA SPEAKS TO YOU
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 font-normal leading-snug">
              You do not have to arrive with everything figured out.
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              You do not have to be the biggest entrepreneur in the room. You do not have to know exactly what you need. You simply need to believe that your journey can become stronger when the right people are part of it.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              And you need to be willing to become one of those people for someone else.
            </p>

            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 text-slate-900 text-xs sm:text-sm font-semibold">
              Your growth can help someone else grow. And someone else&apos;s growth can help you grow. <br />
              <span className="text-[#0062D2]">That is not just collaboration. That is the community. That is the Idea.</span>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="https://unity.peersglobal.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white px-7 py-3 text-xs sm:text-sm font-semibold shadow-sm inline-flex items-center gap-2 transition-all"
              >
                <span>Download the Unity App</span>
                <ArrowRight className="size-4" />
              </a>
              <Link
                href="/circles"
                className="rounded-full border border-slate-300 bg-white hover:border-slate-400 text-slate-700 px-7 py-3 text-xs sm:text-sm font-semibold inline-flex items-center gap-2 transition-all"
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
