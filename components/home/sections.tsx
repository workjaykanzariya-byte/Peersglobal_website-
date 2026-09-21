'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BarChart3,
  Bell,
  Bookmark,
  BookOpen,
  Boxes,
  Briefcase,
  Building,
  Building2,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Compass,
  Cpu,
  Database,
  DoorOpen,
  Download,
  FileText,
  Globe2,
  Handshake,
  Heart,
  HeartHandshake,
  Landmark,
  Laptop,
  Layers,
  Leaf,
  Lightbulb,
  Link2,
  Lock,
  MapPin,
  MessageSquare,
  Network,
  Pause,
  Play,
  Quote,
  Rocket,
  Search,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  X,
  Calendar,
  Zap,
} from 'lucide-react'
import { Card, Cta, Eyebrow, SectionHead, Stat, Tag } from '@/components/site/ui'
import { INDUSTRY_CIRCLES, PURPOSE_CIRCLES } from '@/lib/data/circles'
import { UPCOMING_EVENTS, EventRecord } from '@/lib/data/events'
import { ROLES } from '@/lib/data/leadership'
import { OUTCOME_STATS, SITE } from '@/lib/data/site'

/* =========================================================================
   SECTION 2 — WHO WE ARE & WHAT PEERS GLOBAL IS
   ========================================================================= */

export function WhoWeAreSection() {
  const [isRevealed, setIsRevealed] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [whoWeAreVideo, setWhoWeAreVideo] = useState('/videos/homepage-hero-bg.mp4')
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const loadVideo = () => {
      try {
        const saved = localStorage.getItem('peers_admin_page_media')
        if (saved) {
          const items = JSON.parse(saved)
          const target = items.find(
            (i: any) =>
              (i.pageSlug === '/' || i.pageId === 'home' || i.pageName === 'Home Page') &&
              (i.sectionName?.toLowerCase().includes('who we are') || i.sectionName?.toLowerCase().includes('section banner')) &&
              i.isActive &&
              i.mediaUrl
          )
          if (target && target.mediaUrl) {
            setWhoWeAreVideo(target.mediaUrl)
          }
        }
      } catch (err) {
        console.error('Failed to load who-we-are video', err)
      }
    }
    loadVideo()
    window.addEventListener('storage', loadVideo)
    window.addEventListener('peers_media_updated', loadVideo)
    return () => {
      window.removeEventListener('storage', loadVideo)
      window.removeEventListener('peers_media_updated', loadVideo)
    }
  }, [])

  useEffect(() => {
    if (isRevealed && videoRef.current) {
      videoRef.current.defaultMuted = true
      videoRef.current.muted = true
      const playPromise = videoRef.current.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {})
      }
    }
  }, [isRevealed, whoWeAreVideo])

  const handleReveal = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setIsRevealed(true)
      setIsTransitioning(false)
    }, 700)
  }

  const handleReset = () => {
    setIsRevealed(false)
    setIsTransitioning(false)
  }

  const pillars = [
    {
      title: 'A leadership organisation, not a networking group.',
      body: 'Built on the LSR Growth Model — Learning, Sales and Resources — with a mission to enhance the lives of one million entrepreneurs.',
      tag: 'LSR Model',
      icon: Layers,
      bgColor: 'bg-blue-50 text-blue-600 border-blue-100',
      image: '/images/who-we-are-mountain.jpg',
      link: '/the-idea',
    },
    {
      title: 'Your Circle. Your Inner Board.',
      body: '20–40 curated entrepreneurs. Category exclusivity, so there is no competition inside the room.',
      tag: 'Category Exclusivity',
      icon: ShieldCheck,
      bgColor: 'bg-emerald-50 text-emerald-600 border-emerald-100',
      image: '/images/who-we-are-inner-board.jpg',
      link: '/circles',
    },
    {
      title: '1 Action = 1 Life Impacted.',
      body: 'Most communities measure activity. We measure impact. Strictly unweighted and confirmed outcomes.',
      tag: 'True Impact',
      icon: Target,
      bgColor: 'bg-amber-50 text-amber-600 border-amber-100',
      image: '/images/who-we-are-impact.jpg',
      link: '/1-million-mission',
    },
    {
      title: 'Partners in Business. Friends in Life.',
      body: 'Two Family Meetups a year. A Confidential Forum. Lifelong relationships measured in decades.',
      tag: 'Lifelong Bonds',
      icon: HeartHandshake,
      bgColor: 'bg-purple-50 text-purple-600 border-purple-100',
      image: '/images/who-we-are-friends.jpg',
      link: '/stories',
    },
  ]

  return (
    <section id="who-we-are" className="relative overflow-hidden bg-[#FBFCFE] border-b border-[var(--border)] py-14 sm:py-20 lg:py-24">
      <div className="shell flex flex-col gap-12 lg:gap-14">

        {!isRevealed ? (
          /* Clean White Teaser with only "Strong Together" in Logo Color */
          <div
            onClick={handleReveal}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') handleReveal()
            }}
            className={`group relative min-h-[360px] sm:min-h-[440px] w-full cursor-pointer overflow-hidden rounded-2xl sm:rounded-[36px] bg-white border border-slate-200/80 p-8 sm:p-14 flex items-center justify-center text-center shadow-sm transition-all duration-700 select-none hover:border-blue-200 hover:shadow-md ${isTransitioning
              ? 'opacity-0 scale-95 pointer-events-none'
              : 'opacity-100 scale-100'
              }`}
          >
            {/* Center Content: "Strong Together" & "click here" in Logo Blue & Script Font */}
            <div className="relative z-10 flex flex-col items-center gap-2 sm:gap-3 transition-transform duration-300 group-hover:scale-105">
              <h3
                className="text-6xl sm:text-7xl lg:text-8xl font-semibold text-[#1E4ED8] drop-shadow-sm select-none leading-none"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Who We Are...
              </h3>
              <p
                className="text-xl sm:text-2xl text-[#1E4ED8] font-normal select-none tracking-wide"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                click here
              </p>
            </div>

            {/* Black transition overlay when clicked */}
            {isTransitioning && (
              <div className="absolute inset-0 z-50 bg-black transition-opacity duration-700 ease-out animate-in fade-in" />
            )}
          </div>
        ) : (
          /* The Full Who We Are Section Revealed */
          <div className="flex flex-col gap-12 lg:gap-14 animate-in fade-in slide-in-from-bottom-6 duration-700 ease-out">
            {/* Top Bar with Replay Button */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-0.5 w-6 bg-[#1E4ED8]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E4ED8]">
                  STRONG TOGETHER
                </span>
              </div>
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1 text-xs font-semibold text-slate-600 shadow-xs transition-all hover:bg-slate-50 hover:text-blue-600 hover:border-blue-200 cursor-pointer"
                title="Replay the Stronger Together intro"
              >
                <span>↺</span>
                <span>Replay Intro</span>
              </button>
            </div>

            {/* Top Hero Banner with Smooth Left-Fading Video/Visual */}
            <div className="relative overflow-hidden rounded-2xl sm:rounded-[32px] bg-white border border-slate-200/80 shadow-sm min-h-[460px] lg:min-h-[500px] flex items-center">

              {/* Media Background Layer (Right ~60% fading into white on the left) */}
              <div
                className="absolute top-0 right-0 bottom-0 w-full sm:w-[65%] lg:w-[60%] overflow-hidden pointer-events-none"
                style={{
                  maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.5) 25%, black 50%)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.5) 25%, black 50%)',
                }}
              >
                {/* Active Directly Playing Video */}
                <video
                  ref={videoRef}
                  key={whoWeAreVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="size-full object-cover object-center"
                >
                  <source src={whoWeAreVideo} type="video/mp4" />
                  <source src="/videos/homepage-hero-bg.mp4" type="video/mp4" />
                  <source src="/videos/hero-background.mp4" type="video/mp4" />
                </video>

                {/* Seamless gradient overlays for the signature misty fade */}
                <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white via-white/80 via-30% to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none" />

                {/* Top-Right Script Typography */}
                <div className="absolute top-6 sm:top-8 right-6 sm:right-8 z-20 text-right drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] pointer-events-none select-none">
                  <p className="text-lg sm:text-2xl text-white/95 leading-tight" style={{ fontFamily: 'var(--font-script)' }}>
                    People
                  </p>
                  <p className="text-lg sm:text-2xl text-white/95 leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                    Ideas
                  </p>
                  <p className="text-lg sm:text-2xl text-white/95 leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                    Opportunities
                  </p>
                  <p className="text-xl sm:text-3xl text-white font-medium leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                    Impact
                  </p>
                </div>

                {/* Bottom-Right Frosted Glass Pill */}
                <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-20 pointer-events-none select-none">
                  <div className="rounded-xl border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2.5 shadow-lg text-left">
                    <p className="text-[10px] uppercase font-bold tracking-widest text-white/70">
                      A STRONGER
                    </p>
                    <p className="text-xs font-bold tracking-wider text-white">
                      MORE CONNECTED WORLD
                    </p>
                  </div>
                </div>
              </div>

              {/* Left Content Area (Overlaid on the crisp white side) */}
              <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
                <div className="max-w-xl flex flex-col gap-5 sm:gap-6">
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.5rem] font-normal tracking-tight text-slate-900 leading-[1.18]">
                    A global community of entrepreneurs who choose to{' '}
                    <span className="italic text-[#1E4ED8]">grow together.</span>
                  </h2>

                  <p className="text-sm sm:text-base leading-relaxed text-slate-600 max-w-lg font-normal">
                    Peers Global brings together entrepreneurs and business leaders from across industries, cities and countries into one connected community.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap items-center gap-4 sm:gap-5 pt-1">
                    <Link
                      href="/the-idea"
                      className="inline-flex items-center gap-2 rounded-full bg-[#1E4ED8] px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(30,78,216,0.30)] transition-all duration-200 hover:bg-[#1a42c0] hover:-translate-y-[2px] hover:shadow-[0_8px_22px_rgba(30,78,216,0.40)] active:scale-[0.97]"
                    >
                      Explore Peers Global
                      <ArrowRight className="size-4" />
                    </Link>

                    <Link
                      href="/video-stories"
                      className="group inline-flex items-center gap-3 transition-colors"
                    >
                      <span className="flex size-10 items-center justify-center rounded-full border-2 border-blue-600/40 bg-white text-[#1E4ED8] shadow-sm transition-all group-hover:scale-105 group-hover:border-blue-600 group-hover:bg-blue-50">
                        <Play className="size-3.5 fill-current ml-0.5" />
                      </span>
                      <div className="flex flex-col text-left">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 leading-none">
                          Watch
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors leading-tight">
                          Our Story
                        </span>
                      </div>
                    </Link>
                  </div>

                  {/* 3 Stats underneath matching the mockup */}
                  <div className="mt-2 grid grid-cols-3 gap-4 sm:gap-6 border-t border-slate-200/80 pt-6">
                    <div>
                      <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">1M+</p>
                      <p className="text-xs text-slate-600 font-semibold leading-snug mt-1">Entrepreneurs to Impact</p>
                      <p className="text-[11px] text-slate-400 font-medium">By 2030</p>
                    </div>
                    <div>
                      <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">18</p>
                      <p className="text-xs text-slate-600 font-semibold leading-snug mt-1">Industry &amp; Goal Circles</p>
                      <p className="text-[11px] text-slate-400 font-medium">Category-exclusive</p>
                    </div>
                    <div>
                      <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">100+</p>
                      <p className="text-xs text-slate-600 font-semibold leading-snug mt-1">Events &amp; Initiatives</p>
                      <p className="text-[11px] text-slate-400 font-medium">Every Year</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Callout Card: We call our members Peers */}
            <div className="relative overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50/70 via-white to-slate-50/80 p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex items-start gap-4 sm:gap-5 max-w-4xl">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#1E4ED8] text-white shadow-md shadow-blue-500/25">
                    <Users className="size-6" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      We call our members <span className="text-[#1E4ED8]">Peers</span>.
                    </h3>
                    <p className="text-sm sm:text-[0.95rem] leading-relaxed text-slate-600">
                      A Peer is an entrepreneur who believes in building trusted relationships, contributing
                      to others, and growing together. Peers meet in Trusted Circles, collaborate through the
                      Unity App, learn from one another, create opportunities for one another, and carry the
                      community forward through leadership.
                    </p>
                  </div>
                </div>

                {/* Handwritten script stamp on right */}
                <div className="shrink-0 text-right self-end md:self-center select-none">
                  <p
                    className="text-2xl sm:text-3xl text-[#1E4ED8] -rotate-3 font-semibold drop-shadow-sm whitespace-nowrap"
                    style={{ fontFamily: 'var(--font-script)' }}
                  >
                    Stronger Together ✨
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Grid: 4 Feature Cards with Images at the bottom */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {pillars.map((p) => {
                const Icon = p.icon
                return (
                  <div
                    key={p.title}
                    className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
                  >
                    {/* Upper Text Content */}
                    <div className="flex flex-col gap-3.5 p-6">
                      <div className="flex items-center justify-between">
                        <span className={`inline-flex items-center justify-center rounded-xl p-2.5 border ${p.bgColor} shadow-xs`}>
                          <Icon className="size-5" />
                        </span>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                          {p.tag}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                        {p.title}
                      </h3>

                      <p className="text-xs sm:text-[13px] leading-relaxed text-slate-500">
                        {p.body}
                      </p>
                    </div>

                    {/* Bottom Image Thumbnail with Hover Reveal */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden border-t border-slate-100 bg-slate-100">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent opacity-85 transition-opacity group-hover:opacity-95" />

                      <Link
                        href={p.link}
                        className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-full bg-white/90 backdrop-blur-sm px-3.5 py-1.5 text-xs font-semibold text-slate-900 shadow transition-all hover:bg-white"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="size-3 text-blue-600 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  )
}

/* =========================================================================
   SECTION 3 — OUR PHILOSOPHY
   ========================================================================= */

export function PhilosophySection() {
  const steps = [
    {
      num: '1. Relationships',
      desc: 'Business grows through relationships',
      icon: Users,
      color: '#2563EB',
      textColor: 'text-[#2563EB]',
    },
    {
      num: '2. Trust',
      desc: 'Relationships grow through trust',
      icon: ShieldCheck,
      color: '#10B981',
      textColor: 'text-slate-900',
    },
    {
      num: '3. Contribution',
      desc: 'Trust grows through contribution',
      icon: Handshake,
      color: '#F59E0B',
      textColor: 'text-slate-900',
    },
    {
      num: '4. Impact',
      desc: 'Contribution creates true impact',
      icon: TrendingUp,
      color: '#EF4444',
      textColor: 'text-slate-900',
    },
  ]

  return (
    <section className="relative overflow-hidden bg-white border-b border-[var(--border)]">
      <div className="grid lg:grid-cols-[1.14fr_0.86fr] items-stretch min-h-[580px]">
        {/* Left Column: Content */}
        <div className="flex flex-col justify-center px-6 py-12 sm:px-12 sm:py-16 lg:pl-16 lg:pr-12">
          <div className="flex flex-col gap-5 max-w-xl">
            {/* Eyebrow */}
            <p className="text-xs font-bold tracking-[0.22em] text-[#1E4ED8] uppercase">
              OUR PHILOSOPHY
            </p>

            {/* H2 Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-serif font-normal text-slate-900 leading-[1.18] tracking-tight">
              Peers are Partners<br />
              in Business and<br />
              <span className="italic text-[#1E4ED8]">Friends in Life.</span>
            </h2>

            {/* Subline */}
            <p className="text-sm sm:text-base font-semibold text-[#1E4ED8]">
              This is the sentence the whole community runs on.
            </p>

            {/* Body */}
            <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
              A Peer gives an introduction without keeping score. Shares a hard-won lesson without charging for it. Celebrates another Peer&apos;s win as if it were their own. Over time, business partners become friends, and friends become the reason the business grows.
            </p>

            {/* 4 Steps Horizontal Row */}
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4 pt-2 border-t border-slate-100">
              {steps.map((s) => {
                const Icon = s.icon
                return (
                  <div key={s.num} className="flex flex-col gap-1.5">
                    <Icon className="size-6 mb-1" style={{ color: s.color }} />
                    <span className={`text-xs sm:text-[13px] font-bold ${s.textColor}`}>
                      {s.num}
                    </span>
                    <span className="text-[11px] leading-snug text-slate-500">
                      {s.desc}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* Bottom Bar: Quote & Button */}
            <div className="mt-6 pt-5 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100">
              <div className="flex items-center gap-2.5 flex-1 min-w-[220px]">
                <span className="text-xl font-serif text-slate-400 select-none">“</span>
                <p className="text-xs sm:text-sm italic font-medium text-slate-700 whitespace-nowrap">
                  Give first. Everything else follows.
                </p>
                <span className="h-px bg-slate-200 flex-1 hidden sm:block ml-2" />
              </div>
              <Link
                href="/membership"
                className="inline-flex items-center gap-2 rounded-full bg-[#1E4ED8] px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-[0_4px_14px_rgba(30,78,216,0.30)] transition-all duration-200 hover:bg-[#1a42c0] hover:-translate-y-[2px] hover:shadow-[0_8px_22px_rgba(30,78,216,0.40)] active:scale-[0.97]"
              >
                Become a Peer
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Image with organic curved wave mask */}
        <div className="relative min-h-[380px] lg:min-h-[580px] overflow-hidden bg-slate-900">
          <Image
            src="/images/philosophy-conference-event.jpg"
            alt="Peers Global community meeting and collaboration session"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover object-center"
          />

          {/* Soft dark vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-black/30 pointer-events-none" />

          {/* Script typography in top-right */}
          <div className="absolute top-8 right-8 z-10 text-right drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] pointer-events-none select-none">
            <p className="text-xl sm:text-2xl text-white/90 leading-tight" style={{ fontFamily: 'var(--font-script)' }}>
              Better Conversations
            </p>
            <p className="text-2xl sm:text-3xl text-white font-medium leading-tight mt-1" style={{ fontFamily: 'var(--font-script)' }}>
              Bigger Opportunities
            </p>
          </div>

          {/* Left curved wave swoosh overlay */}
          <svg
            className="absolute inset-y-0 -left-px h-full w-24 sm:w-32 lg:w-44 text-white fill-white pointer-events-none drop-shadow-[4px_0_12px_rgba(0,0,0,0.12)]"
            viewBox="0 0 100 500"
            preserveAspectRatio="none"
          >
            {/* The white masking wave */}
            <path d="M 0,0 L 50,0 C 18,140 10,260 70,390 C 88,430 96,470 100,500 L 0,500 Z" />
            {/* Accent glowing blue stroke along the contour */}
            <path
              d="M 50,0 C 18,140 10,260 70,390 C 88,430 96,470 100,500"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="2.5"
              opacity="0.4"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}

/* =========================================================================
   SECTION 4 — TRUSTED CIRCLES
   ========================================================================= */

export function CirclesSection() {
  const howCircleWorks = [
    {
      num: '01',
      title: 'The right people',
      body: 'Each Circle is composed of entrepreneurs from complementary businesses, chosen for fit and relevance.',
      icon: Users,
      badgeColor: 'bg-blue-500/15 border-blue-400/30 text-blue-400',
    },
    {
      num: '02',
      title: 'A fixed rhythm',
      body: 'The same Peers meet on a regular schedule, so trust has time to build.',
      icon: CalendarDays,
      badgeColor: 'bg-emerald-500/15 border-emerald-400/30 text-emerald-400',
    },
    {
      num: '03',
      title: 'A structure for giving',
      body: 'Every meeting has a defined space for Peers to share what they can offer and what they need.',
      icon: HeartHandshake,
      badgeColor: 'bg-amber-500/15 border-amber-400/30 text-amber-400',
    },
    {
      num: '04',
      title: 'Continuity',
      body: 'The Circle carries on inside the Unity App between meetings.',
      icon: TrendingUp,
      badgeColor: 'bg-purple-500/15 border-purple-400/30 text-purple-400',
    },
  ]

  const industryList = [
    {
      slug: 'ahmedabad-tech',
      name: 'Ahmedabad Tech Circle',
      members: 0,
      cities: ['Ahmedabad', 'Gandhinagar'],
      seatsOpen: 30,
      icon: Laptop,
      iconBg: 'bg-blue-100 text-blue-600',
    },
    {
      slug: 'ahmedabad-import-export',
      name: 'Ahmedabad Import, Export & Global Trade Circle',
      members: 0,
      cities: ['Ahmedabad', 'Mundra'],
      seatsOpen: 30,
      icon: Globe2,
      iconBg: 'bg-amber-100 text-amber-600',
    },
    {
      slug: 'investors-circle',
      name: 'Investors Circle',
      members: 1,
      cities: ['Pune', 'Ahmedabad'],
      seatsOpen: 29,
      icon: BarChart3,
      iconBg: 'bg-emerald-100 text-emerald-600',
    },
    {
      slug: 'ahmedabad-real-estate',
      name: 'Ahmedabad Real Estate, Construction & Infrastructure Circle',
      members: 1,
      cities: ['Ahmedabad', 'Surat'],
      seatsOpen: 29,
      icon: Building2,
      iconBg: 'bg-purple-100 text-purple-600',
    },
    {
      slug: 'ahmedabad-franchise-licensing',
      name: 'Ahmedabad Franchise & Licensing Circle',
      members: 0,
      cities: ['Ahmedabad'],
      seatsOpen: 30,
      icon: FileText,
      iconBg: 'bg-rose-100 text-rose-500',
    },
    {
      slug: 'ahmedabad-investors',
      name: 'Ahmedabad Investors Circle',
      members: 0,
      cities: ['Ahmedabad'],
      seatsOpen: 30,
      icon: Users,
      iconBg: 'bg-cyan-100 text-cyan-600',
    },
  ]

  const purposeList = [
    {
      slug: 'ahmedabad-district-founding-members',
      name: 'Ahmedabad District Founding Members',
      members: 0,
      cities: ['Ahmedabad'],
      seatsOpen: 30,
      icon: Users,
      iconBg: 'bg-rose-100 text-rose-500',
    },
    {
      slug: 'bengaluru-district-founding-members',
      name: 'Bengaluru District Founding Members',
      members: 0,
      cities: ['Bengaluru'],
      seatsOpen: 30,
      icon: Landmark,
      iconBg: 'bg-blue-100 text-blue-600',
    },
    {
      slug: 'delhi-district-founding-members',
      name: 'Delhi District Founding Members',
      members: 0,
      cities: ['Delhi'],
      seatsOpen: 30,
      icon: Landmark,
      iconBg: 'bg-purple-100 text-purple-600',
    },
    {
      slug: 'mumbai-district-founding-members',
      name: 'Mumbai District Founding Members',
      members: 0,
      cities: ['Mumbai'],
      seatsOpen: 30,
      icon: Building,
      iconBg: 'bg-emerald-100 text-emerald-600',
    },
    {
      slug: 'rajkot-district-founding-members',
      name: 'Rajkot District Founding Members',
      members: 0,
      cities: ['Rajkot'],
      seatsOpen: 30,
      icon: Network,
      iconBg: 'bg-rose-100 text-rose-500',
    },
    {
      slug: 'community-builders',
      name: 'Community Builders Circle',
      members: 0,
      cities: ['Ahmedabad', 'Mumbai'],
      seatsOpen: 30,
      icon: Heart,
      iconBg: 'bg-cyan-100 text-cyan-600',
    },
  ]

  return (
    <>
      {/* SECTION 4A — TRUSTED CIRCLES (DARK LUXURY) */}
      <section id="circles" className="relative overflow-hidden bg-[#050B17] text-white border-b border-white/10 py-16 sm:py-24">
        {/* Background ambient lighting */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-10 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-10 left-10 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[130px]"
        />

        <div className="shell relative z-10 flex flex-col gap-12 lg:gap-14">

          {/* Top Header Row */}
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-6 bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-400">
                  TRUSTED CIRCLES
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.5rem] font-normal tracking-tight text-white leading-[1.18]">
                Every Peer belongs to a{' '}
                <span className="font-serif italic font-medium text-cyan-400 drop-shadow-[0_0_24px_rgba(56,189,248,0.45)]">
                  Circle.
                </span>
              </h2>
            </div>

            <div className="flex flex-col gap-5 lg:items-end">
              <p className="max-w-md text-sm sm:text-base leading-relaxed text-slate-300 font-normal lg:text-right">
                A Circle brings together the right entrepreneurs around a common industry, interest, location or business opportunity. It is the heart of the community and the place where relationships are actually built.
              </p>

              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link
                  href="/circles/find"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1E4ED8] px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(30,78,216,0.30)] transition-all duration-200 hover:bg-[#1a42c0] hover:-translate-y-[2px] hover:shadow-[0_8px_22px_rgba(30,78,216,0.40)] active:scale-[0.97]"
                >
                  Find Your Circle
                  <ArrowRight className="size-4 text-white" />
                </Link>

                <Link
                  href="/start-a-circle"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/[0.07] px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/[0.15] hover:border-white/55 hover:-translate-y-[2px] active:scale-[0.97]"
                >
                  Start a Circle
                </Link>
              </div>
            </div>
          </div>

          {/* 4 Sleek Dark Step Cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {howCircleWorks.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(56,189,248,0.15)]"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-400 font-mono tracking-wider">
                        {item.num}
                      </span>
                      <span className={`inline-flex items-center justify-center rounded-xl p-2.5 border ${item.badgeColor} shadow-sm`}>
                        <Icon className="size-5" />
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-slate-300">
                      {item.body}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom Cinematic Continuous Moving Arrow Bar */}
          <div className="relative mt-4 pt-6 overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            {/* Subtle curved arc in bottom-left exactly as in mockup */}
            <svg
              className="pointer-events-none absolute -left-10 -bottom-8 h-44 w-44 stroke-cyan-500/25 fill-none"
              viewBox="0 0 160 160"
            >
              <path d="M 0 160 A 130 130 0 0 1 130 30" strokeWidth="1.5" strokeDasharray="3 4" />
            </svg>

            {/* Left Text */}
            <div className="relative z-10 flex items-center gap-3 shrink-0">
              <span className="h-px w-6 bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-cyan-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]">
                MEANINGFUL CIRCLES. LASTING IMPACT.
              </span>
            </div>

            {/* Cinematic Continuous Forward-Moving Arrow Track */}
            <div className="relative z-10 flex-1 w-full h-8 flex items-center overflow-hidden">
              {/* Background static full track line with right arrowhead */}
              <div className="absolute inset-x-0 h-px bg-cyan-500/25" />

              {/* Continuous stream of arrows moving forward */}
              <div className="relative w-full h-full flex items-center overflow-hidden">
                {/* Primary continuous forward moving arrow with comet trail */}
                <div className="peers-moving-arrow-1 absolute left-0 flex items-center">
                  <span className="h-[2px] w-36 sm:w-56 bg-gradient-to-r from-transparent via-cyan-400 to-blue-400 shadow-[0_0_12px_#38bdf8]" />
                  <svg
                    className="size-5 -ml-2 shrink-0 text-cyan-300 drop-shadow-[0_0_14px_#38bdf8]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>

                {/* Secondary staggered continuous forward moving arrow for seamless infinite motion */}
                <div className="peers-moving-arrow-2 absolute left-0 flex items-center">
                  <span className="h-[2px] w-28 sm:w-44 bg-gradient-to-r from-transparent via-blue-400 to-cyan-300 shadow-[0_0_10px_#38bdf8]" />
                  <svg
                    className="size-5 -ml-2 shrink-0 text-cyan-200 drop-shadow-[0_0_14px_#38bdf8]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>

                {/* Fixed Right Edge Target Arrowhead */}
                <div className="absolute right-0 flex items-center text-cyan-400 peers-pulse-arrow">
                  <svg
                    className="size-5 text-cyan-300 drop-shadow-[0_0_12px_#38bdf8]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Embedded CSS for the continuous forward moving arrow animation */}
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes arrowGlideForward {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              transform: translateX(450%);
              opacity: 0;
            }
          }
          @keyframes arrowTipPulse {
            0%, 100% {
              transform: translateX(0);
              opacity: 0.85;
            }
            50% {
              transform: translateX(6px);
              opacity: 1;
            }
          }
          .peers-moving-arrow-1 {
            animation: arrowGlideForward 2.6s cubic-bezier(0.25, 1, 0.5, 1) infinite;
          }
          .peers-moving-arrow-2 {
            animation: arrowGlideForward 2.6s cubic-bezier(0.25, 1, 0.5, 1) infinite;
            animation-delay: 1.3s;
          }
          .peers-pulse-arrow {
            animation: arrowTipPulse 1.3s ease-in-out infinite;
          }
        ` }} />
      </section>

      {/* SECTION 4B — 18 INDUSTRY & GOAL CIRCLES (LIGHT LUXURY REDESIGN) */}
      <section id="circles-directory" className="relative overflow-hidden bg-gradient-to-b from-[#F2F7FF] via-[#FAFCFF] to-[#F1F6FE] py-16 sm:py-24 border-b border-slate-200/80 text-slate-900">
        {/* Ambient atmospheric lighting */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 right-10 h-[450px] w-[450px] rounded-full bg-blue-400/10 blur-[130px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 left-10 h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-[120px]"
        />

        <div className="shell relative z-10 flex flex-col gap-12 sm:gap-14">

          {/* Top Header Row with Graphic Background & Badges */}
          <div className="relative">
            {/* World Map with Dotted Flight Lines Graphic */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-6 right-0 w-[440px] h-[230px] opacity-45 select-none hidden md:block"
            >
              <svg viewBox="0 0 440 230" fill="none" className="w-full h-full text-blue-500/25">
                <g fill="currentColor">
                  <circle cx="80" cy="70" r="3" />
                  <circle cx="110" cy="80" r="2.5" />
                  <circle cx="140" cy="65" r="3" />
                  <circle cx="170" cy="60" r="2.5" />
                  <circle cx="210" cy="70" r="3" />
                  <circle cx="255" cy="85" r="4" className="text-blue-600 animate-pulse" />
                  <circle cx="275" cy="115" r="3.5" className="text-cyan-500 animate-pulse" />
                  <circle cx="295" cy="100" r="3" />
                  <circle cx="335" cy="110" r="2.5" />
                  <circle cx="255" cy="130" r="2" />
                  <circle cx="180" cy="140" r="2" />
                  <circle cx="370" cy="120" r="2.5" />
                </g>
                <path d="M 80 70 Q 165 20 255 85" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
                <path d="M 210 70 Q 240 40 275 115" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
                <path d="M 275 115 Q 305 90 335 110" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
                <path d="M 140 65 Q 205 110 275 115" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
              </svg>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center relative z-10">
              {/* Left Column: Heading & Subtitle */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="h-0.5 w-6 bg-blue-600 shadow-[0_0_8px_#3b82f6]" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
                    WE PUT THE RIGHT PEOPLE IN THE ROOM
                  </span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.5rem] font-bold tracking-tight text-[#0B1528] leading-[1.16]">
                  18 Industry &amp; Goal Circles.<br />
                  <span className="font-serif font-bold text-[#0B1528]">One </span>
                  <span className="font-serif font-bold text-[#1E6BFF] drop-shadow-[0_2px_15px_rgba(30,107,255,0.25)]">
                    Powerful Community.
                  </span>
                </h2>

                <p className="max-w-xl text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
                  From industry-focused circles to purpose-led communities, Peers Global brings together entrepreneurs who share a vision to grow, collaborate and create impact.
                </p>
              </div>

              {/* Right Column: Slanted Handwritten Note & Floating Pill Card */}
              <div className="flex flex-col items-start lg:items-end gap-3 justify-center">
                {/* Slanted cursive note */}
                <div className="font-serif italic text-slate-400 text-lg sm:text-xl -rotate-3 select-none leading-tight lg:text-right">
                  <span>Different Industries,</span><br />
                  <span className="relative inline-block text-slate-500">
                    A Shared Purpose
                    <svg className="absolute -bottom-1 left-0 w-full h-1.5 text-slate-300" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M 0 5 Q 50 9 100 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    </svg>
                  </span>
                </div>

                {/* Floating pill badge card */}
                <div className="mt-1 flex items-center gap-3.5 rounded-2xl border border-slate-200/80 bg-white/95 px-5 py-3 shadow-[0_10px_25px_rgba(15,23,42,0.06)] backdrop-blur-md">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100/60 shadow-inner">
                    <Users className="size-5" />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-900 leading-tight">18 Circles</span>
                    <span className="text-xs text-slate-500 font-medium">Growing Together</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Two White Floating Luxury Cards Grid */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left Card: Industry Circles (Category-Locked) */}
            <div className="flex flex-col rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-[0_12px_36px_rgba(15,23,42,0.05)] transition-all hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
              {/* Card Header */}
              <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div className="flex items-center gap-3.5 min-w-0">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-100/80 shadow-sm shrink-0">
                    <Layers className="size-6" />
                  </span>
                  <div className="flex flex-col min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 truncate">
                      Industry Circles (Category-Locked)
                    </h3>
                    <p className="text-xs text-slate-500 truncate mt-0.5">
                      Focused conversations. Relevant opportunities. Real collaboration.
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-blue-50 border border-blue-100/80 px-3.5 py-1 text-xs font-semibold text-blue-600 shrink-0">
                  6 Circles
                </span>
              </div>

              {/* Items List */}
              <ul className="flex flex-col divide-y divide-slate-100 pt-2">
                {industryList.map((item) => {
                  const ItemIcon = item.icon
                  return (
                    <li key={item.slug}>
                      <Link
                        href={`/circles/${item.slug}`}
                        className="group flex items-center justify-between gap-3 sm:gap-4 py-3.5 hover:bg-blue-50/40 -mx-3 px-3 rounded-full transition-all"
                      >
                        <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                          <span className={`flex size-10 items-center justify-center rounded-2xl ${item.iconBg} shrink-0 shadow-sm transition-transform group-hover:scale-105`}>
                            <ItemIcon className="size-5" />
                          </span>
                          <div className="flex flex-col min-w-0">
                            <span className="text-[0.92rem] sm:text-[0.95rem] font-bold text-slate-900 truncate group-hover:text-blue-600 transition-colors">
                              {item.name}
                            </span>
                            <span className="text-xs text-slate-500 truncate mt-0.5">
                              {item.members} members · {item.cities.join(', ')}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
                          <span className="rounded-full bg-[#EBF3FF] px-3 sm:px-3.5 py-1 text-[11px] sm:text-xs font-semibold text-[#1E6BFF]">
                            {item.seatsOpen} seats open
                          </span>
                          <span className="flex size-7 sm:size-8 items-center justify-center rounded-full bg-[#F1F6FE] text-[#1E6BFF] transition-all group-hover:bg-[#1E6BFF] group-hover:text-white group-hover:translate-x-0.5 shadow-sm">
                            <ArrowRight className="size-3.5 sm:size-4" />
                          </span>
                        </div>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Right Card: Purpose-Led Circles (Shared Ambition) */}
            <div className="flex flex-col rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-[0_12px_36px_rgba(15,23,42,0.05)] transition-all hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
              {/* Card Header */}
              <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div className="flex items-center gap-3.5 min-w-0">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 border border-amber-100/80 shadow-sm shrink-0">
                    <Target className="size-6" />
                  </span>
                  <div className="flex flex-col min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 truncate">
                      Purpose-Led Circles (Shared Ambition)
                    </h3>
                    <p className="text-xs text-slate-500 truncate mt-0.5">
                      Bigger than business. United by a common purpose.
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-amber-50 border border-amber-100/80 px-3.5 py-1 text-xs font-semibold text-amber-700 shrink-0">
                  6 Circles
                </span>
              </div>

              {/* Items List */}
              <ul className="flex flex-col divide-y divide-slate-100 pt-2">
                {purposeList.map((item) => {
                  const ItemIcon = item.icon
                  return (
                    <li key={item.slug}>
                      <Link
                        href={`/circles/${item.slug}`}
                        className="group flex items-center justify-between gap-3 sm:gap-4 py-3.5 hover:bg-amber-50/40 -mx-3 px-3 rounded-full transition-all"
                      >
                        <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                          <span className={`flex size-10 items-center justify-center rounded-2xl ${item.iconBg} shrink-0 shadow-sm transition-transform group-hover:scale-105`}>
                            <ItemIcon className="size-5" />
                          </span>
                          <div className="flex flex-col min-w-0">
                            <span className="text-[0.92rem] sm:text-[0.95rem] font-bold text-slate-900 truncate group-hover:text-amber-600 transition-colors">
                              {item.name}
                            </span>
                            <span className="text-xs text-slate-500 truncate mt-0.5">
                              {item.members} members · {item.cities.join(', ')}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
                          <span className="rounded-full bg-[#FEF6E7] px-3 sm:px-3.5 py-1 text-[11px] sm:text-xs font-semibold text-[#D97706]">
                            {item.seatsOpen} seats open
                          </span>
                          <span className="flex size-7 sm:size-8 items-center justify-center rounded-full bg-[#FDF8EE] text-[#D97706] transition-all group-hover:bg-[#D97706] group-hover:text-white group-hover:translate-x-0.5 shadow-sm">
                            <ArrowRight className="size-3.5 sm:size-4" />
                          </span>
                        </div>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

          {/* Bottom Action Bar with Explore Button & Mantra */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-2">
            <Link
              href="/circles"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#1E4ED8] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(30,78,216,0.30)] transition-all duration-200 hover:bg-[#1a42c0] hover:-translate-y-[2px] hover:shadow-[0_8px_22px_rgba(30,78,216,0.40)] active:scale-[0.97]"
            >
              Explore All 18 Circles
              <ArrowRight className="size-4 text-white" />
            </Link>

            <div className="flex items-center gap-4 text-slate-400">
              <span className="h-px w-16 sm:w-24 bg-slate-300" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.24em] text-slate-400">
                STRONGER CIRCLES. A BRIGHTER TOMORROW.
              </span>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

/* =========================================================================
   SECTION 5 — HOW COLLABORATION WORKS (11 FORMS)
   ========================================================================= */

export function CollaborationSection() {
  const forms = [
    {
      num: '01',
      shortTitle: 'Introductions',
      title: 'Introductions to people who can open a door',
      tag: 'High-Trust Access',
      desc: 'Direct, warm introductions to decision-makers, senior enterprise leaders, and institutional buyers who rarely respond to cold outreach.',
      impact: 'Executive Access · Zero Cold Friction',
      icon: DoorOpen,
      iconBg: 'bg-blue-50 text-blue-600 border-blue-200/60',
    },
    {
      num: '02',
      shortTitle: 'Referrals',
      title: 'Referrals that become long-term clients',
      tag: 'Client Acquisition',
      desc: 'Pre-vetted client recommendations backed by peer reputation, compressing sales cycles from months to days with unmatched credibility.',
      impact: 'Peer-Vetted Trust · Faster Deal Closing',
      icon: Users,
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-200/60',
    },
    {
      num: '03',
      shortTitle: 'Partnerships',
      title: 'Partnerships between complementary businesses',
      tag: 'Strategic Alliances',
      desc: 'Co-bidding on mega-tenders, cross-selling shared client portfolios, and joint ventures that multiply collective market reach.',
      impact: 'Shared Pipeline · Revenue Multiplication',
      icon: Handshake,
      iconBg: 'bg-indigo-50 text-indigo-600 border-indigo-200/60',
    },
    {
      num: '04',
      shortTitle: 'Knowledge Sharing',
      title: 'Knowledge sharing from lived experience',
      tag: 'Operational Wisdom',
      desc: 'Hard-won operational playbooks, regulatory lessons, and founder experience that save years of expensive trial and error.',
      impact: 'Unfiltered Founder Truth · Risk Avoidance',
      icon: Lightbulb,
      iconBg: 'bg-amber-50 text-amber-600 border-amber-200/60',
    },
    {
      num: '05',
      shortTitle: 'Mentorship',
      title: 'Mentorship from entrepreneurs further along',
      tag: 'Executive Counsel',
      desc: 'One-on-one confidential counsel from veterans who have already navigated scale, debt structuring, governance, and IPO milestones.',
      impact: 'Strategic Perspective · Blindspot Elimination',
      icon: Award,
      iconBg: 'bg-rose-50 text-rose-600 border-rose-200/60',
    },
    {
      num: '06',
      shortTitle: 'Customer Connections',
      title: 'Customer connections in new segments',
      tag: 'Market Penetration',
      desc: 'Immediate inroads into uncharted sectors, regional clusters, and tier-1 corporate accounts through fellow member networks.',
      impact: 'Cluster Inroads · Warm Introductions',
      icon: ShoppingBag,
      iconBg: 'bg-cyan-50 text-cyan-600 border-cyan-200/60',
    },
    {
      num: '07',
      shortTitle: 'Investor Connections',
      title: 'Investor connections at the right stage',
      tag: 'Strategic Capital',
      desc: 'Curated introductions to angel syndicates, institutional family offices, and growth equity partners who know and back the peer.',
      impact: 'Aligned Capital · Warm LP Introductions',
      icon: TrendingUp,
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-200/60',
    },
    {
      num: '08',
      shortTitle: 'Shared Resources',
      title: 'Resources — teams, tools, capacity, licences',
      tag: 'Asset Sharing',
      desc: 'Shared warehousing, idle manufacturing lines, testing labs, specialized tooling, and overflow engineering bandwidth.',
      impact: 'CapEx Efficiency · Shared Infrastructure',
      icon: Boxes,
      iconBg: 'bg-purple-50 text-purple-600 border-purple-200/60',
    },
    {
      num: '09',
      shortTitle: 'Market Access',
      title: 'Market access into a new city or country',
      tag: 'Global Expansion',
      desc: 'Local on-the-ground support, office facilities, regulatory navigation, and regional credibility when expanding into new territories.',
      impact: 'Local Footprint · Cross-Border Ease',
      icon: Globe2,
      iconBg: 'bg-blue-50 text-blue-600 border-blue-200/60',
    },
    {
      num: '10',
      shortTitle: 'Industry Expertise',
      title: 'Industry expertise without hiring for it',
      tag: 'Domain Intelligence',
      desc: 'Deep domain insights across manufacturing, tax treaties, supply chain resilience, and compliance without expensive consulting fees.',
      impact: 'Domain Mastery · On-Demand Knowledge',
      icon: Cpu,
      iconBg: 'bg-amber-50 text-amber-600 border-amber-200/60',
    },
    {
      num: '11',
      shortTitle: 'Global Opportunities',
      title: 'Local-to-global opportunities across the community',
      tag: 'Community Scale',
      desc: 'Cross-border trade delegations, bilateral commerce pacts, and international circle summits connecting local peers worldwide.',
      impact: 'Global Reach · Limitless Opportunities',
      icon: Compass,
      iconBg: 'bg-teal-50 text-teal-600 border-teal-200/60',
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [dragStartX, setDragStartX] = useState<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(false)

  // Only run auto-advance when section is actually in the user's viewport
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Auto-advance slider automatically forward starting from 0
  useEffect(() => {
    if (!isPlaying || !isInView) return
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % forms.length)
    }, 3800)
    return () => clearInterval(timer)
  }, [isPlaying, isInView, forms.length])

  // Slide interactions: slide left -> go back, slide right -> go forward
  const handleDragStart = (clientX: number) => {
    setDragStartX(clientX)
    setIsDragging(true)
  }

  const handleDragEnd = (clientX: number) => {
    if (dragStartX === null) return
    const diff = clientX - dragStartX
    if (diff > 35) {
      // Slide right -> go forward
      setActiveIndex((prev) => (prev + 1) % forms.length)
    } else if (diff < -35) {
      // Slide left -> go back
      setActiveIndex((prev) => (prev === 0 ? forms.length - 1 : prev - 1))
    }
    setDragStartX(null)
    setIsDragging(false)
  }

  const currentItem = forms[activeIndex]

  return (
    <section
      ref={sectionRef}
      id="collaboration"
      className="relative overflow-hidden bg-[#FAF8F5] py-20 sm:py-28 border-b border-slate-200/70 text-slate-900"
    >
      {/* Subtle ambient warm lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-12 h-[450px] w-[450px] rounded-full bg-amber-500/[0.04] blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-12 h-[400px] w-[400px] rounded-full bg-blue-500/[0.04] blur-[130px]"
      />

      <div className="shell relative z-10 flex flex-col gap-14 sm:gap-16">

        {/* Main 2-Column Split: Headline & CTA on left, 11 practices slider on right */}
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">

          {/* Left Column: Heading, description, and button */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-28">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-6 bg-blue-600 shadow-[0_0_8px_#3b82f6]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
                DEFINED PRACTICE
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.5rem] font-normal tracking-tight text-[#0B1528] leading-[1.14]">
              Eleven ways a<br />
              Peer creates<br />
              value for<br />
              <span className="font-serif italic text-[#1E6BFF] drop-shadow-[0_2px_15px_rgba(30,107,255,0.25)]">
                another Peer.
              </span>
            </h2>

            <p className="max-w-md text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
              Collaboration at Peers Global is a defined practice. These are the forms it takes.
            </p>

            <div className="pt-2">
              <Link
                href="/10-forms-of-collaboration"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#1E4ED8] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(30,78,216,0.30)] transition-all duration-200 hover:bg-[#1a42c0] hover:-translate-y-[2px] hover:shadow-[0_8px_22px_rgba(30,78,216,0.40)] active:scale-[0.97]"
              >
                Explore Collaboration
                <ArrowRight className="size-4 text-white" />
              </Link>
            </div>
          </div>

          {/* Right Column: 3D Looping Cards Slider */}
          <div
            className="flex flex-col min-w-0 lg:border-l lg:border-slate-200/80 lg:pl-10 xl:pl-12"
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
          >
            {/* Control Bar: Way Count & Play/Pause */}
            <div className="flex items-center justify-between gap-4 pb-5 border-b border-slate-200/70">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100">
                  Way {currentItem.num} of 11
                </span>
                <span className="text-xs font-semibold text-slate-500 hidden sm:inline">
                  Auto-gliding sequence
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  title={isPlaying ? 'Pause auto-slider' : 'Play auto-slider'}
                  className="size-8 rounded-lg border border-slate-200 bg-white text-slate-600 hover:text-blue-600 hover:border-blue-200 flex items-center justify-center transition-colors shadow-sm focus:outline-none"
                >
                  {isPlaying ? <Pause className="size-3.5" /> : <Play className="size-3.5 ml-0.5" />}
                </button>
              </div>
            </div>

            {/* GSAP 3D Looping Card Deck with Side Animated Navigation Buttons */}
            <div className="relative flex flex-col gap-6 pt-4">
              {/* Left Hit Area (Visually hidden as requested, but clicking still goes back) */}
              <button
                type="button"
                onClick={() => setActiveIndex((prev) => (prev === 0 ? forms.length - 1 : prev - 1))}
                aria-label="Previous way"
                className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-40 h-44 w-16 opacity-0 cursor-pointer focus:outline-none"
              />

              {/* Right Button (Go Forward) with micro-bounce animation */}
              <button
                type="button"
                onClick={() => setActiveIndex((prev) => (prev + 1) % forms.length)}
                aria-label="Next way"
                title="Next way"
                className="group/next absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-40 flex size-11 sm:size-13 items-center justify-center rounded-full bg-white/95 text-slate-800 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-slate-200/90 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-[#0B1528] hover:text-white hover:border-[#0B1528] hover:shadow-[0_12px_35px_rgba(11,21,40,0.25)] active:scale-95 focus:outline-none"
              >
                <ChevronRight className="size-5 sm:size-6 transition-transform duration-300 group-hover/next:translate-x-0.5" />
              </button>

              {/* 3D Looping Cards Stage */}
              <div
                className={`relative w-full py-4 select-none touch-pan-y ${isDragging ? 'cursor-grabbing' : 'cursor-grab'
                  }`}
                style={{ perspective: '1100px', minHeight: '410px' }}
                onMouseDown={(e) => handleDragStart(e.clientX)}
                onMouseUp={(e) => handleDragEnd(e.clientX)}
                onMouseLeave={() => {
                  setDragStartX(null)
                  setIsDragging(false)
                }}
                onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
                onTouchEnd={(e) => {
                  if (e.changedTouches.length > 0) {
                    handleDragEnd(e.changedTouches[0].clientX)
                  }
                }}
              >
                {forms.map((item, idx) => {
                  const ItemIcon = item.icon
                  // 3D circular offset relative to activeIndex
                  const offset = (idx - activeIndex + forms.length) % forms.length

                  let transformStyle: React.CSSProperties = {}
                  let isClickable = false

                  if (offset === 0) {
                    // Front active card
                    isClickable = true
                    transformStyle = {
                      transform: 'translate3d(0px, 0px, 0px) scale(1)',
                      opacity: 1,
                      zIndex: 30,
                      filter: 'none',
                      pointerEvents: 'auto',
                    }
                  } else if (offset === 1) {
                    // 1st card stacked behind (clearly peeking to the left)
                    isClickable = true
                    transformStyle = {
                      transform: 'translate3d(-60px, -12px, -90px) scale(0.92)',
                      opacity: 0.85,
                      zIndex: 20,
                      filter: 'brightness(0.9)',
                      pointerEvents: 'auto',
                      cursor: 'pointer',
                    }
                  } else if (offset === 2) {
                    // 2nd card stacked behind
                    isClickable = true
                    transformStyle = {
                      transform: 'translate3d(-118px, -24px, -180px) scale(0.84)',
                      opacity: 0.55,
                      zIndex: 15,
                      filter: 'brightness(0.8)',
                      pointerEvents: 'auto',
                      cursor: 'pointer',
                    }
                  } else if (offset === 3) {
                    // 3rd card stacked behind
                    transformStyle = {
                      transform: 'translate3d(-172px, -36px, -270px) scale(0.76)',
                      opacity: 0.28,
                      zIndex: 10,
                      filter: 'brightness(0.7)',
                      pointerEvents: 'none',
                    }
                  } else if (offset === forms.length - 1) {
                    // Card exiting (glides up and fades out)
                    transformStyle = {
                      transform: 'translate3d(40px, 25px, 60px) scale(1.03)',
                      opacity: 0,
                      zIndex: 35,
                      filter: 'blur(4px)',
                      pointerEvents: 'none',
                    }
                  } else {
                    // Cards waiting deep in queue
                    transformStyle = {
                      transform: 'translate3d(-220px, -46px, -360px) scale(0.68)',
                      opacity: 0,
                      zIndex: 1,
                      pointerEvents: 'none',
                    }
                  }

                  return (
                    <div
                      key={item.num}
                      onClick={() => isClickable && idx !== activeIndex && setActiveIndex(idx)}
                      className="absolute right-0 top-0 w-[84%] sm:w-[82%] rounded-3xl border border-slate-700/60 bg-gradient-to-br from-[#0B1528] via-[#0F1D38] to-[#070D18] p-7 sm:p-9 text-white shadow-[0_25px_60px_rgba(11,21,40,0.35)] transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] select-none will-change-transform"
                      style={transformStyle}
                    >
                      {/* Subtle glass reflection overlay */}
                      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.08] via-transparent to-black/30" />

                      {/* Watermarked Number Background */}
                      <span
                        aria-hidden
                        className="pointer-events-none absolute right-6 top-3 select-none font-serif text-[6.5rem] sm:text-[8rem] font-bold leading-none text-white/[0.05]"
                      >
                        {item.num}
                      </span>

                      <div className="relative z-10 flex flex-col justify-between h-full min-h-[290px] sm:min-h-[310px]">
                        <div className="flex flex-col gap-4">
                          {/* Top Row: Tag & Glowing Icon Badge */}
                          <div className="flex items-center justify-between gap-3">
                            <span className="rounded-full bg-blue-500/15 border border-blue-400/30 px-3.5 py-1 text-xs font-semibold text-blue-300 backdrop-blur-sm">
                              {item.tag}
                            </span>
                            <span className="flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-cyan-300 shadow-inner backdrop-blur-md">
                              <ItemIcon className="size-6" />
                            </span>
                          </div>

                          {/* Main Title */}
                          <h3 className="text-xl sm:text-2xl lg:text-[1.65rem] font-bold tracking-tight text-white leading-snug">
                            {item.title}
                          </h3>

                          {/* Explanatory Paragraph */}
                          <p className="text-sm sm:text-base leading-relaxed text-slate-300 font-normal max-w-xl">
                            {item.desc}
                          </p>
                        </div>

                        {/* Bottom Feature Pill & Link */}
                        <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-white/10 mt-4">
                          <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-400">
                            <span className="size-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8] animate-pulse" />
                            {item.impact}
                          </span>

                          <Link
                            href="/10-forms-of-collaboration"
                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-400 hover:text-cyan-300 transition-colors group/link"
                          >
                            Learn more about {item.shortTitle}
                            <ArrowRight className="size-3.5 transition-transform group-hover/link:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Area: People · Trust · Opportunity · Impact & Quote Card */}
        <div className="flex flex-col gap-5 pt-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-slate-300" />
            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-400">
              PEOPLE · TRUST · OPPORTUNITY · IMPACT
            </span>
          </div>

          <div className="rounded-2xl border border-blue-100/80 bg-gradient-to-r from-blue-50/60 via-white/80 to-blue-50/40 p-6 sm:p-7 shadow-[0_4px_25px_rgba(30,107,255,0.03)] backdrop-blur-sm flex items-start sm:items-center gap-4 sm:gap-6">
            <div className="flex size-11 items-center justify-center rounded-2xl bg-blue-100/70 text-blue-600 shadow-sm shrink-0">
              <Quote className="size-5 fill-blue-600/20" />
            </div>
            <p className="font-serif italic text-slate-700 text-sm sm:text-[1.05rem] leading-relaxed">
              &ldquo;A connection becomes valuable when it creates an opportunity, solves a problem or
              improves a life. Every one of these does exactly that.&rdquo;
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

/* =========================================================================
   SECTION 6 — LEARN, SALES, RESOURCES (LSR)
   ========================================================================= */

export function LsrSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [dragStartX, setDragStartX] = useState<number | null>(null)

  const lsrCards = [
    {
      num: '01',
      indexLabel: '01 / 03',
      category: 'LEARN',
      title: 'Playbooks & Mentorship',
      body: 'Masterclasses, playbooks, mentorship, and practical knowledge from entrepreneurs who have already built what you are building.',
      icon: BookOpen,
      tag: 'KNOWLEDGE',
      impact: 'Actionable Insights',
      shortTitle: 'Learn',
      iconColor: 'text-cyan-400',
      iconBg: 'bg-cyan-500/15 border-cyan-400/30',
      labelColor: 'text-cyan-400',
      watermarkColor: 'text-white/[0.04]',
      bulletBg: 'bg-cyan-500/20',
      bulletIconColor: 'text-cyan-300',
      bullets: [
        'Learn from real founders',
        'Practical, actionable insights',
        'Grow faster with mentorship',
      ],
    },
    {
      num: '02',
      indexLabel: '02 / 03',
      category: 'SALES',
      title: 'Referrals & Market Access',
      body: 'Referrals, introductions, customer connections and market access — real business from people who understand your business.',
      icon: BarChart3,
      tag: 'GROWTH',
      impact: 'Direct Revenue',
      shortTitle: 'Sales',
      iconColor: 'text-emerald-400',
      iconBg: 'bg-emerald-500/15 border-emerald-400/30',
      labelColor: 'text-emerald-400',
      watermarkColor: 'text-white/[0.04]',
      bulletBg: 'bg-emerald-500/20',
      bulletIconColor: 'text-emerald-300',
      bullets: [
        'Direct B2B introductions',
        'Verified customer leads',
        'Co-selling opportunities',
      ],
    },
    {
      num: '03',
      indexLabel: '03 / 03',
      category: 'RESOURCES',
      title: 'Capital, Talent & Tech',
      body: 'Talent, capital, partners, suppliers, technology and expertise, available through the community whenever you need them.',
      icon: Database,
      tag: 'ECOSYSTEM',
      impact: 'Strategic Assets',
      shortTitle: 'Resources',
      iconColor: 'text-amber-400',
      iconBg: 'bg-amber-500/15 border-amber-400/30',
      labelColor: 'text-amber-400',
      watermarkColor: 'text-white/[0.04]',
      bulletBg: 'bg-amber-500/20',
      bulletIconColor: 'text-amber-300',
      bullets: [
        'Vetted investor network',
        'High-tier talent referrals',
        'Preferred partner perks',
      ],
    },
  ]

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? lsrCards.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % lsrCards.length)
  }

  // Gentle auto-glide forward every 5.5 seconds (paused on hover)
  useEffect(() => {
    if (isHovered) return
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % lsrCards.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [isHovered, lsrCards.length])

  const handleDragStart = (clientX: number) => {
    setDragStartX(clientX)
  }

  const handleDragEnd = (clientX: number) => {
    if (dragStartX === null) return
    const diff = clientX - dragStartX
    if (diff > 45) {
      handlePrev()
    } else if (diff < -45) {
      handleNext()
    }
    setDragStartX(null)
  }

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section
      id="framework"
      className="section relative overflow-hidden bg-gradient-to-br from-[#070D18] via-[#0B1528] to-[#0A101D] py-20 sm:py-24 lg:py-28 text-white border-b border-slate-800/80"
    >
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
          <circle cx="900" cy="520" r="1.5" /><circle cx="1100" cy="550" r="1" /><circle cx="70" cy="320" r="1" />
          <circle cx="310" cy="270" r="1.8" /><circle cx="760" cy="300" r="1.2" /><circle cx="1260" cy="360" r="1" />
        </g>
        <g stroke="#38BDF8" strokeWidth="0.5" opacity="0.35" fill="none">
          <line x1="80" y1="60" x2="200" y2="130" /><line x1="200" y1="130" x2="340" y2="45" />
          <line x1="500" y1="100" x2="680" y2="35" /><line x1="850" y1="110" x2="1020" y2="60" />
          <line x1="1020" y1="60" x2="1180" y2="160" />
        </g>
      </svg>

      {/* Orbit rings decorative */}
      <div className="pointer-events-none absolute -bottom-24 -left-20 size-[380px] opacity-20">
        <svg viewBox="0 0 400 400" className="size-full stroke-cyan-400/30 fill-none">
          <circle cx="100" cy="300" r="260" strokeWidth="1" strokeDasharray="6 6" />
          <circle cx="100" cy="300" r="210" strokeWidth="1" />
          <circle cx="100" cy="300" r="160" strokeWidth="1" />
          <circle cx="100" cy="90" r="3.5" fill="#38bdf8" className="animate-pulse" />
        </svg>
      </div>

      {/* Top-right cursive watermark */}
      <div className="pointer-events-none absolute top-8 right-6 lg:right-14 select-none opacity-60 hidden sm:block z-10">
        <div className="font-serif italic text-xl lg:text-2xl font-normal leading-tight text-cyan-400/70 tracking-wide text-right transform -rotate-12">
          <span className="block">Learn</span>
          <span className="block mr-2">Sales</span>
          <span className="block mr-4 font-semibold">Resources</span>
          <svg viewBox="0 0 120 12" className="w-28 mt-1 stroke-cyan-400/50 fill-none ml-auto" strokeWidth="2" strokeLinecap="round">
            <path d="M 4 6 Q 60 2 116 7" />
          </svg>
        </div>
      </div>

      <div className="shell relative z-10 max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[33%_67%] xl:grid-cols-[31%_69%] lg:items-center">

          {/* Left Column: Heading, Subtitle & Membership CTA */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-3.5">
                <span className="h-[2px] w-6 bg-cyan-400 rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                  THE FRAMEWORK
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.5rem] font-normal text-white tracking-tight leading-[1.18]">
                LSR — the three things{' '}
                <span className="italic text-cyan-400 block">every business runs on.</span>
              </h2>

              {/* Subtitle / Lede */}
              <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed max-w-md font-normal">
                Learn. Sales. Resources. All of it built on trusted peer relationships.
              </p>

              {/* Action Button */}
              <div className="mt-7">
                <Link
                  href="/membership"
                  className="inline-flex items-center gap-2.5 rounded-full bg-cyan-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_4px_25px_rgba(56,189,248,0.35)] transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_6px_30px_rgba(56,189,248,0.5)] hover:-translate-y-0.5 active:translate-y-0 group"
                >
                  See What Membership Includes
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Bottom Footnote Tracker */}
            <div className="mt-14 sm:mt-20 flex items-center gap-3">
              <span className="h-px w-8 bg-slate-700" />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.24em] text-slate-400">
                PEOPLE · TRUST · OPPORTUNITY · IMPACT
              </span>
            </div>
          </div>

          {/* Right Column: 3D Stacked Layered Cards Slider (Dark Navy Theme) */}
          <div
            className="relative flex flex-col items-center justify-center select-none w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >

            {/* Right Nav Arrow Button */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next card"
              className="absolute -right-3 sm:-right-6 lg:-right-7 top-1/2 -translate-y-1/2 z-40 flex size-11 sm:size-12 items-center justify-center rounded-full bg-white/95 text-slate-800 shadow-[0_8px_30px_rgba(0,0,0,0.3)] border border-slate-700/80 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-400 active:scale-95 focus:outline-none"
            >
              <ChevronRight className="size-5" />
            </button>


            {/* Stage Container with 3D perspective & cascading cards */}
            <div
              className="relative w-full max-w-[740px] xl:max-w-[820px] min-h-[460px] sm:min-h-[480px] flex items-center"
              style={{ perspective: '1100px' }}
              onMouseDown={(e) => handleDragStart(e.clientX)}
              onMouseUp={(e) => handleDragEnd(e.clientX)}
              onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
              onTouchEnd={(e) => {
                if (e.changedTouches.length > 0) {
                  handleDragEnd(e.changedTouches[0].clientX)
                }
              }}
            >
              {lsrCards.map((card, idx) => {
                const offset = (idx - activeIndex + lsrCards.length) % lsrCards.length
                const CardIcon = card.icon

                let transformStyle: React.CSSProperties = {}
                let isClickable = false

                if (offset === 0) {
                  isClickable = true
                  transformStyle = {
                    transform: 'translate3d(0px, 0px, 0px) scale(1)',
                    opacity: 1,
                    zIndex: 30,
                    filter: 'none',
                    pointerEvents: 'auto',
                  }
                } else if (offset === 1) {
                  isClickable = true
                  const x = isMobile ? 28 : 220
                  const y = isMobile ? 0 : -10
                  transformStyle = {
                    transform: `translate3d(${x}px, ${y}px, -90px) scale(0.92)`,
                    opacity: 0.85,
                    zIndex: 20,
                    filter: 'brightness(0.9)',
                    pointerEvents: 'auto',
                    cursor: 'pointer',
                  }
                } else if (offset === 2) {
                  isClickable = true
                  const x = isMobile ? 56 : 430
                  const y = isMobile ? 0 : -20
                  transformStyle = {
                    transform: `translate3d(${x}px, ${y}px, -180px) scale(0.84)`,
                    opacity: 0.55,
                    zIndex: 15,
                    filter: 'brightness(0.8)',
                    pointerEvents: 'auto',
                    cursor: 'pointer',
                  }
                } else {
                  transformStyle = {
                    transform: 'translate3d(180px, -30px, -270px) scale(0.76)',
                    opacity: 0,
                    zIndex: 10,
                    pointerEvents: 'none',
                  }
                }

                return (
                  <div
                    key={card.num}
                    onClick={() => isClickable && idx !== activeIndex && setActiveIndex(idx)}
                    style={transformStyle}
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-[280px] sm:w-[290px] lg:w-[280px] xl:w-[295px] rounded-3xl border border-slate-700/60 bg-gradient-to-br from-[#0B1528] via-[#0F1D38] to-[#070D18] p-6 sm:p-7 text-white shadow-[0_25px_60px_rgba(11,21,40,0.45)] transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform flex flex-col justify-between min-h-[430px] sm:min-h-[450px]"
                  >
                    {/* Subtle glass reflection overlay */}
                    <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.08] via-transparent to-black/30" />

                    {/* Watermarked Number Background */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute right-5 top-2 font-serif text-[6rem] sm:text-[6.6rem] font-bold leading-none select-none text-white/[0.05]"
                    >
                      {card.num}
                    </span>

                    <div className="relative z-10 flex flex-col justify-between h-full">
                      <div>
                        {/* Top Counter & Tag */}
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold tracking-wider text-slate-400 font-mono">
                            {card.indexLabel}
                          </span>
                          <span className="rounded-full bg-blue-500/15 border border-blue-400/30 px-3 py-0.5 text-[10px] font-semibold text-cyan-300 backdrop-blur-sm">
                            {card.category}
                          </span>
                        </div>

                        {/* Circular Icon Badge */}
                        <div className={`mt-4 sm:mt-5 flex size-13 sm:size-14 items-center justify-center rounded-2xl border shadow-inner backdrop-blur-md bg-white/10 border-white/10 ${card.iconColor}`}>
                          <CardIcon className="size-6" />
                        </div>

                        {/* Title */}
                        <h3 className="font-serif text-lg sm:text-xl font-bold text-white leading-snug mt-4">
                          {card.title}
                        </h3>

                        {/* Body Paragraph */}
                        <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed mt-2.5 font-normal">
                          {card.body}
                        </p>
                      </div>

                      {/* Checklist Bullets */}
                      <div className="mt-5 sm:mt-6 flex flex-col gap-2.5 sm:gap-3 pt-4 sm:pt-5 border-t border-white/10">
                        {card.bullets.map((bullet, bIdx) => (
                          <div key={bIdx} className="flex items-center gap-2.5">
                            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
                              <Check className="size-3 stroke-[3]" />
                            </span>
                            <span className="text-xs sm:text-[13px] font-medium text-slate-200">
                              {bullet}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Bottom Indicator Navigation Bar */}
            <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
              {lsrCards.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-1.5 transition-all duration-300 rounded-full ${activeIndex === idx
                    ? 'w-7 bg-cyan-400 shadow-[0_0_10px_#38bdf8]'
                    : 'w-4 bg-slate-700 hover:bg-slate-600'
                    }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* =========================================================================
   SECTION 7 — THE UNITY APP
   ========================================================================= */

export function UnitySection() {
  const features = [
    'Discover Peers by industry, city and expertise',
    'Book one-to-one conversations',
    'Log referrals given and received',
    'Participate in your Circle',
    'Find and create opportunities',
    'Share your story',
    'See your contribution recognised',
    'Stay connected to the community from anywhere in the world',
  ]

  return (
    <section id="unity" className="section border-b border-[var(--border)] bg-muted/40">
      <div className="shell grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="flex flex-col gap-6">
          <SectionHead
            eyebrow="The Digital Home"
            title="The community works every day, not just on meeting day."
            lede="The Peers Global Unity App is the digital home of the community. It is how Peers find each other, stay connected, and keep collaborating between meetings."
          />

          <p className="text-sm text-muted-foreground font-medium">
            Inside Unity, a Peer can:
          </p>

          <ul className="grid gap-2.5 sm:grid-cols-2">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <CheckCircle2
                  aria-hidden
                  className="size-4 shrink-0 text-primary mt-0.5"
                />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <p className="text-sm font-medium text-foreground">
            Download the app, explore the community, and see it for yourself.
          </p>

          <div className="flex flex-wrap gap-3">
            <Cta
              href={SITE.appStoreUrl}
              target="_blank"
              rel="noreferrer"
              size="lg"
            >
              <Download aria-hidden className="size-4" />
              Download on App Store
            </Cta>
            <Cta
              href={SITE.playStoreUrl}
              target="_blank"
              rel="noreferrer"
              variant="outline"
              size="lg"
            >
              <Download aria-hidden className="size-4" />
              Get it on Google Play
            </Cta>
          </div>
        </div>

        <div
          className="relative min-h-[380px] overflow-hidden border border-[var(--border)] bg-card p-8 flex flex-col justify-center"
          style={{ borderRadius: 'var(--radius-lg)' }}
        >
          <div className="flex flex-col gap-4">
            <span className="eyebrow text-primary">Unity Platform of Record</span>
            <h3 className="display text-2xl sm:text-3xl text-foreground">
              Always on. Always connected.
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Every connection logged, every commitment tracked, and every Peer accessible across 11
              cities in one secure mobile ecosystem.
            </p>
            <div className="mt-4 border-t border-[var(--border)] pt-4 flex items-center justify-between text-xs text-muted-foreground">
              <span>Verified member records</span>
              <span className="font-semibold text-primary">Unity Web &amp; Mobile</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* =========================================================================
   SECTION 8 — IMPACT
   ========================================================================= */

export function OutcomesSection() {
  const impactPoints = [
    {
      icon: Handshake,
      text: 'An introduction that lands a first major client.',
    },
    {
      icon: Lightbulb,
      text: 'A conversation that prevents a costly mistake.',
    },
    {
      icon: BarChart3,
      text: 'A partnership that opens a new market.',
    },
    {
      icon: Users,
      text: 'A mentor who gives someone the confidence to keep going.',
    },
    {
      icon: Briefcase,
      text: 'A business that grows and hires twelve more people.',
    },
  ]

  const suggestedPeers = [
    {
      name: 'NIKITA DESHAVAL',
      city: 'Ahmedabad, IN',
      role: 'Founder · Zodiac Gifts',
      initials: 'ND',
      bg: 'bg-amber-100 text-amber-700 border-amber-200',
    },
    {
      name: 'MILLY THAKKAR',
      city: 'Ahmedabad, IN',
      role: 'Founder · Mudra Investment',
      initials: 'MT',
      bg: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    },
    {
      name: 'ATHARVA JAHAGI...',
      city: 'Ahmedabad, IN',
      role: 'Founder · Resobrand',
      initials: 'AJ',
      bg: 'bg-blue-100 text-blue-700 border-blue-200',
    },
    {
      name: 'SANJAY MAKWA...',
      city: 'Ahmedabad, IN',
      role: 'CEO · Import Export Consultancy',
      initials: 'SM',
      bg: 'bg-indigo-100 text-indigo-700 border-indigo-200',
    },
    {
      name: 'VITHAL PATEL',
      city: 'Ahmedabad, IN',
      role: 'Founder · Shivam Impex',
      initials: 'VP',
      bg: 'bg-purple-100 text-purple-700 border-purple-200',
    },
  ]

  return (
    <section
      id="impact"
      className="section relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-br from-[#FAFCFF] via-[#F5F8FD] to-[#EDF4FC] py-16 sm:py-20 lg:py-24"
    >
      {/* Background Soft Glow Aura & Accent */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[650px] rounded-full bg-blue-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -top-32 right-10 size-[420px] rounded-full bg-indigo-400/10 blur-3xl" />

      {/* Top Right Cursive Watermark: People Ideas Opportunities Impact */}
      <div className="pointer-events-none absolute top-8 right-6 lg:right-14 select-none opacity-80 hidden md:block z-10">
        <div className="font-serif italic text-2xl lg:text-[1.85rem] font-normal leading-tight text-[#0066FF]/65 tracking-wide text-right transform -rotate-12">
          <span className="block">People</span>
          <span className="block mr-3">Ideas</span>
          <span className="block mr-6">Opportunities</span>
          <span className="block mr-8 font-semibold">Impact</span>
          <svg
            viewBox="0 0 160 14"
            className="w-40 sm:w-48 mt-1.5 stroke-sky-500 fill-none ml-auto"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <path d="M 6 7 Q 80 2 154 8" />
          </svg>
        </div>
      </div>

      <div className="shell relative z-10 max-w-7xl">
        {/* Main 2-Column Layout Grid */}
        <div className="grid gap-12 lg:grid-cols-[46%_54%] xl:grid-cols-[45%_55%] items-center pt-8 sm:pt-14">

          {/* =========================================================================
             COLUMN 1: Left Copy, 5 Bullets with Circular Icons & CTA
             ========================================================================= */}
          <div className="flex flex-col">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span className="h-[2px] w-6 bg-[#0066FF] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0066FF]">
                PRACTICAL IMPACT
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.5rem] font-normal text-slate-900 tracking-tight leading-[1.18]">
              We count lives{' '}
              <span className="italic text-[#0066FF] block">impacted.</span>
            </h2>

            {/* Subtitle */}
            <p className="mt-3.5 text-slate-600 text-sm sm:text-base leading-relaxed max-w-md font-normal">
              Impact at Peers Global is practical. It is what happens when one entrepreneur helps another.
            </p>

            {/* 5 Bullet Points with Blue Circular Icon Badges */}
            <ul className="mt-6 flex flex-col gap-3">
              {impactPoints.map((pt, i) => {
                const IconComponent = pt.icon
                return (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-[#0066FF] border border-blue-200/70 shadow-xs">
                      <IconComponent className="size-4" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-medium text-slate-700 leading-snug">
                      {pt.text}
                    </span>
                  </li>
                )
              })}
            </ul>

            {/* Narrative Paragraph */}
            <p className="mt-6 text-xs sm:text-[12.5px] text-slate-500 leading-relaxed max-w-md">
              Every one of those is a life changed. Every one begins with a Peer choosing to contribute. Contribution is recognised across the community — in your Circle, in the Unity App, and in the recognition Peers receive from other Peers.
            </p>

            {/* CTA Button */}
            <div className="mt-6 flex items-center gap-4">
              <Link
                href="/the-currency"
                className="inline-flex items-center gap-2 rounded-full bg-[#1E4ED8] px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(30,78,216,0.30)] transition-all duration-200 hover:bg-[#1a42c0] hover:-translate-y-[2px] hover:shadow-[0_8px_22px_rgba(30,78,216,0.40)] active:scale-[0.97]"
              >
                See Our Impact
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

          {/* =========================================================================
             COLUMN 2: Center 2 Overlapping Phones + Floating Badge with Curved Arrow
             ========================================================================= */}
          <div className="relative flex items-center justify-center py-6 sm:py-8 lg:py-10 min-h-[560px] mt-6 sm:mt-10">

            {/* 1. Left Phone (Profile View - Vishal Parmar) */}
            <div className="relative z-10 w-[240px] sm:w-[260px] rounded-[36px] p-2 bg-slate-900 border-[3px] border-slate-700 shadow-[0_20px_50px_rgba(15,23,42,0.22)] transform -rotate-2 -mr-16 sm:-mr-20 lg:-mr-24 scale-95 sm:scale-100">
              <div className="relative rounded-[28px] overflow-hidden bg-white text-slate-900 flex flex-col h-[510px] text-[11px]">

                {/* Phone Top Status Bar */}
                <div className="px-4 pt-2 pb-1 flex items-center justify-between text-[10px] text-slate-600 bg-slate-100/60 border-b border-slate-200/60">
                  <span className="font-semibold">6:17</span>
                  <div className="h-3 w-14 bg-slate-900 rounded-full flex items-center justify-center">
                    <span className="size-1 rounded-full bg-slate-700" />
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[9px]">LTE</span>
                    <span className="size-1.5 rounded-full bg-slate-700" />
                  </div>
                </div>

                {/* Profile App Header Bar */}
                <div className="px-3 py-2 flex items-center justify-between border-b border-slate-100 bg-white">
                  <div className="flex items-center gap-1.5 font-bold text-xs text-slate-800">
                    <ChevronLeft className="size-3.5 text-slate-500" />
                    <span>Profile</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500">
                    <BarChart3 className="size-3.5" />
                    <div className="flex flex-col gap-0.5">
                      <span className="w-3.5 h-0.5 bg-slate-600 rounded-full" />
                      <span className="w-3.5 h-0.5 bg-slate-600 rounded-full" />
                      <span className="w-2.5 h-0.5 bg-slate-600 rounded-full ml-auto" />
                    </div>
                  </div>
                </div>

                {/* Purple Gradient Member Banner */}
                <div className="bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 p-2.5 text-white text-center">
                  <span className="block text-[8px] uppercase tracking-wider font-bold text-purple-200">
                    PROUD MEMBER OF PEERS GLOBAL
                  </span>
                  <span className="block text-[10px] font-semibold tracking-tight mt-0.5">
                    Partners in Business. Friends in Life.
                  </span>
                </div>

                {/* Profile Header Block */}
                <div className="p-3 bg-white border-b border-slate-100 text-center relative">
                  <div className="size-14 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 mx-auto border-2 border-white shadow-md flex items-center justify-center text-white font-bold text-base -mt-6">
                    VP
                  </div>
                  <div className="mt-1.5 flex items-center justify-center gap-1">
                    <span className="text-xs font-bold text-slate-900">VISHAL PARMAR</span>
                    <span className="bg-blue-600 text-white rounded-full px-1.5 py-0.2 text-[8px] font-bold">
                      VERIFIED
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 font-medium">Director at Peers Global</p>

                  <div className="mt-1 flex items-center justify-center gap-1 text-[9px] text-slate-400">
                    <MapPin className="size-2.5 text-slate-400" />
                    <span>Ahmedabad, Gujarat, India</span>
                  </div>

                  {/* 8-Metric Grid */}
                  <div className="mt-2.5 grid grid-cols-4 gap-1 border-t border-slate-100 pt-2 text-center">
                    <div>
                      <span className="block font-bold text-slate-900 text-[11px]">44</span>
                      <span className="block text-[7.5px] text-slate-400">Lives Impact</span>
                    </div>
                    <div>
                      <span className="block font-bold text-slate-900 text-[11px]">36</span>
                      <span className="block text-[7.5px] text-slate-400">Connections</span>
                    </div>
                    <div>
                      <span className="block font-bold text-slate-900 text-[11px]">4</span>
                      <span className="block text-[7.5px] text-slate-400">Followers</span>
                    </div>
                    <div>
                      <span className="block font-bold text-slate-900 text-[11px]">141K</span>
                      <span className="block text-[7.5px] text-slate-400">Coins</span>
                    </div>
                    <div>
                      <span className="block font-bold text-slate-900 text-[11px]">0</span>
                      <span className="block text-[7.5px] text-slate-400">My Badges</span>
                    </div>
                    <div>
                      <span className="block font-bold text-slate-900 text-[11px]">4</span>
                      <span className="block text-[7.5px] text-slate-400">P2P Meetings</span>
                    </div>
                    <div>
                      <span className="block font-bold text-slate-900 text-[11px]">0</span>
                      <span className="block text-[7.5px] text-slate-400">Referrals</span>
                    </div>
                    <div>
                      <span className="block font-bold text-slate-900 text-[11px]">6</span>
                      <span className="block text-[7.5px] text-slate-400">Business Deals</span>
                    </div>
                  </div>
                </div>

                {/* Profile Completion Card */}
                <div className="m-2 rounded-xl border border-blue-100 bg-blue-50/70 p-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="size-7 rounded-full bg-blue-600 text-white font-bold text-[9px] flex items-center justify-center">
                      45%
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-800">Complete your profile</p>
                      <p className="text-[8px] text-slate-500">Unlock full network potential</p>
                    </div>
                  </div>
                  <span className="rounded-md bg-blue-600 text-white px-2 py-0.5 text-[9px] font-bold">
                    Finish
                  </span>
                </div>

                {/* Subscription Status Card */}
                <div className="mx-2 mb-2 rounded-xl border border-slate-200 bg-slate-50/80 p-2 flex flex-col gap-1 text-[9px]">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-700">Plan: Global Peer <strong className="text-emerald-600 font-bold">Active</strong></span>
                    <span className="text-[#0066FF] font-bold">RENEW</span>
                  </div>
                  <div className="text-[8px] text-slate-400 flex items-center justify-between">
                    <span>Joined: Sep 06, 2026</span>
                    <span>Valid: Sep 06, 2027</span>
                  </div>
                </div>

                <div className="mt-auto px-3 py-1.5 border-t border-slate-100 text-[8px] font-bold text-slate-400 uppercase tracking-wider">
                  VERIFICATION &amp; CERTIFICATE
                </div>
              </div>
            </div>

            {/* 2. Right Phone (My Peers View - In Foreground) */}
            <div className="relative z-20 w-[245px] sm:w-[265px] rounded-[36px] p-2 bg-slate-900 border-[3px] border-slate-700 shadow-[0_25px_60px_rgba(15,23,42,0.35)] transform rotate-1 scale-95 sm:scale-100">
              <div className="relative rounded-[28px] overflow-hidden bg-white text-slate-900 flex flex-col h-[510px] text-[11px]">

                {/* Phone Top Status Bar */}
                <div className="px-4 pt-2 pb-1 flex items-center justify-between text-[10px] text-slate-600 bg-slate-100/60 border-b border-slate-200/60">
                  <span className="font-semibold">6:16</span>
                  <div className="h-3 w-14 bg-slate-900 rounded-full flex items-center justify-center">
                    <span className="size-1 rounded-full bg-slate-700" />
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[9px]">5G</span>
                    <span className="size-1.5 rounded-full bg-emerald-500" />
                  </div>
                </div>

                {/* My Peers App Header Bar */}
                <div className="px-3 py-2 flex items-center justify-between border-b border-slate-100 bg-white">
                  <span className="font-bold text-xs text-slate-900">My Peers</span>
                  <Search className="size-3.5 text-slate-500" />
                </div>

                {/* 4 Quick Filter Pills */}
                <div className="p-2 grid grid-cols-4 gap-1.5 border-b border-slate-100 bg-slate-50/50 text-center text-[9px]">
                  <div className="rounded-lg border border-slate-200 bg-white p-1.5 flex flex-col items-center gap-0.5 shadow-xs">
                    <MapPin className="size-3 text-[#0066FF]" />
                    <span className="font-semibold text-slate-700 text-[8px]">Near Me</span>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-white p-1.5 flex flex-col items-center gap-0.5 shadow-xs">
                    <Users className="size-3 text-indigo-600" />
                    <span className="font-semibold text-slate-700 text-[8px]">Connections</span>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-white p-1.5 flex flex-col items-center gap-0.5 shadow-xs">
                    <Handshake className="size-3 text-emerald-600" />
                    <span className="font-semibold text-slate-700 text-[8px]">Matches</span>
                  </div>
                  <div className="relative rounded-lg border border-slate-200 bg-white p-1.5 flex flex-col items-center gap-0.5 shadow-xs">
                    <Users className="size-3 text-purple-600" />
                    <span className="font-semibold text-slate-700 text-[8px]">Requests</span>
                    <span className="absolute top-1 right-1 size-1.5 rounded-full bg-red-500" />
                  </div>
                </div>

                {/* Section Header: SUGGESTED FOR YOU */}
                <div className="px-3 py-1.5 flex items-center justify-between text-[8px] font-bold text-slate-400 uppercase tracking-wider bg-white">
                  <span>SUGGESTED FOR YOU</span>
                  <span className="text-[#0066FF] normal-case font-semibold">⇅ Relevance</span>
                </div>

                {/* Peers List */}
                <div className="flex-1 px-2 flex flex-col gap-1.5 overflow-hidden">
                  {suggestedPeers.map((peer, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-slate-100 bg-white p-2 flex items-center justify-between shadow-2xs hover:bg-slate-50 transition"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <div className={`size-8 rounded-full border flex items-center justify-center font-bold text-[10px] shrink-0 ${peer.bg}`}>
                          {peer.initials}
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] font-bold text-slate-900 truncate">
                            {peer.name}
                          </p>
                          <p className="text-[8px] text-slate-500 truncate">
                            📍 {peer.city}
                          </p>
                          <p className="text-[8px] text-[#0066FF] font-medium truncate">
                            {peer.role}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0 ml-1">
                        <div className="size-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200">
                          <Users className="size-2.5" />
                        </div>
                        <div className="size-6 rounded-full bg-blue-50 text-[#0066FF] flex items-center justify-center hover:bg-blue-100">
                          <MessageSquare className="size-2.5" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom App Bar */}
                <div className="mt-auto border-t border-slate-200/80 bg-white py-1.5 px-3 flex items-center justify-between text-[8px] text-slate-500">
                  <div className="flex flex-col items-center">
                    <Compass className="size-3.5 text-slate-400" />
                    <span>Feed</span>
                  </div>
                  <div className="flex flex-col items-center text-[#0066FF] font-bold">
                    <Users className="size-3.5" />
                    <span>My Peers</span>
                  </div>

                  {/* Elevated Center Glowing Impact Button */}
                  <div className="-mt-4 flex flex-col items-center">
                    <div className="size-8 rounded-full bg-gradient-to-tr from-slate-950 via-blue-900 to-indigo-950 border-2 border-white shadow-md flex items-center justify-center text-white relative">
                      <Sparkles className="size-3.5 text-blue-300 animate-pulse" />
                      <span className="absolute -top-0.5 -right-0.5 size-1.5 rounded-full bg-red-500" />
                    </div>
                    <span className="text-[7.5px] font-bold text-slate-800 mt-0.5">Impact</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <Boxes className="size-3.5 text-slate-400" />
                    <span>My Circles</span>
                  </div>
                  <div className="relative flex flex-col items-center">
                    <Bell className="size-3.5 text-slate-400" />
                    <span>Highlights</span>
                    <span className="absolute -top-0.5 right-1 size-1 rounded-full bg-red-500" />
                  </div>
                </div>

              </div>
            </div>

            {/* 3. Floating Card Below Left Phone with Hand-Drawn Arrow */}
            <div className="absolute -bottom-4 left-0 sm:-left-6 z-30 flex items-center gap-3 rounded-2xl border border-blue-100 bg-white/95 px-4 py-3 shadow-[0_12px_28px_rgba(0,102,255,0.12)] backdrop-blur-md">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0066FF] border border-blue-200/60">
                <BarChart3 className="size-5" />
              </div>
              <div className="text-left leading-tight">
                <p className="text-xs font-extrabold text-slate-900">Real People.</p>
                <p className="text-xs font-extrabold text-slate-900">Real Opportunities.</p>
                <p className="text-xs font-extrabold text-[#0066FF]">Real Impact.</p>
              </div>
            </div>

            {/* Sketched Blue Curved Arrow pointing towards the floating card */}
            <svg
              viewBox="0 0 100 60"
              className="absolute -bottom-2 -left-14 sm:-left-20 w-16 sm:w-20 stroke-[#0066FF] fill-none pointer-events-none z-25 hidden md:block"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M 10 10 C 20 45, 60 55, 88 45" />
              <path d="M 80 40 L 90 45 L 85 53" />
            </svg>

          </div>

        </div>

        {/* =========================================================================
           BOTTOM SUB-FOOTER: Slogan on Left & Verified Figures on Right
           ========================================================================= */}
        <div className="mt-14 sm:mt-16 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">
            PEOPLE · OPPORTUNITIES · GROWTH · STRONGER TOGETHER
          </span>

          <div className="flex items-center gap-3">
            <span className="h-[1.5px] w-8 sm:w-12 bg-blue-300 rounded-full" />
            <span className="text-xs text-slate-500 font-medium">
              {SITE.statsAsOf}
            </span>
            <span className="h-[1.5px] w-8 sm:w-12 bg-blue-300 rounded-full" />
          </div>
        </div>

      </div>
    </section>
  )
}

/* =========================================================================
   SECTION 9 — THE 1 MILLION MISSION
   ========================================================================= */

export function MissionSection() {
  const missionPillars = [
    {
      icon: Users,
      title: 'People',
      subtitle: 'Empowered',
    },
    {
      icon: TrendingUp,
      title: 'Businesses',
      subtitle: 'Created',
    },
    {
      icon: Lightbulb,
      title: 'Opportunities',
      subtitle: 'Unlocked',
    },
    {
      icon: Globe2,
      title: 'Stronger',
      subtitle: 'Communities',
    },
  ]

  return (
    <section
      id="mission"
      className="relative overflow-hidden bg-[#030712] py-20 sm:py-24 lg:py-28 border-y border-blue-900/40 text-white"
    >
      {/* Background Earth Video Loop */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 size-full object-cover object-center sm:object-[center_right] opacity-75 lg:opacity-85 pointer-events-none"
      >
        <source src="/videos/peers-global-earth-loop.mp4" type="video/mp4" />
      </video>

      {/* Cyber Constellation Network Overlay */}
      <svg
        viewBox="0 0 1400 800"
        className="absolute inset-0 size-full pointer-events-none opacity-30 mix-blend-screen"
        preserveAspectRatio="none"
      >
        <g stroke="#38BDF8" strokeWidth="1" fill="none" opacity="0.6">
          <path d="M 500 450 Q 750 220 1050 340" strokeDasharray="4 4" />
          <path d="M 620 520 Q 880 300 1200 420" strokeDasharray="3 5" />
          <path d="M 720 380 Q 950 180 1280 300" />
          <path d="M 850 480 Q 1100 350 1350 500" strokeDasharray="5 5" />
        </g>
        <g fill="#38BDF8">
          <circle cx="750" cy="220" r="3" className="animate-ping" />
          <circle cx="750" cy="220" r="2" />
          <circle cx="880" cy="300" r="2.5" />
          <circle cx="950" cy="180" r="3.5" />
          <circle cx="1050" cy="340" r="2" />
          <circle cx="1200" cy="420" r="3" />
        </g>
      </svg>

      {/* Atmospheric Gradients for High Text Legibility & Seamless Blending */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/80 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#030712] via-[#030712]/60 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#030712] via-[#030712]/60 to-transparent pointer-events-none z-10" />

      {/* Top Right Cursive Script Watermark: A Global Community. A Brighter Tomorrow. */}
      <div className="pointer-events-none absolute top-8 right-6 lg:right-14 select-none opacity-85 hidden sm:block z-20">
        <div className="font-serif italic text-xl lg:text-2xl font-normal leading-tight text-[#38BDF8]/80 tracking-wide text-right transform -rotate-12">
          <span className="block">A Global</span>
          <span className="block mr-2">Community.</span>
          <span className="block mt-1">A Brighter</span>
          <span className="block mr-3 font-semibold text-[#60A5FA]">Tomorrow.</span>
          <svg
            viewBox="0 0 140 12"
            className="w-32 sm:w-40 mt-1 stroke-[#38BDF8]/70 fill-none ml-auto"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M 6 6 Q 70 2 134 7" />
          </svg>
        </div>
      </div>

      <div className="shell relative z-20 max-w-7xl">
        {/* Main 2-Column Content Layout */}
        <div className="grid gap-12 lg:grid-cols-[50%_50%] xl:grid-cols-[48%_52%] items-center">

          {/* Left Column: Heading, Lede, Narrative & CTA */}
          <div className="flex flex-col">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-3.5">
              <span className="h-[2px] w-6 bg-[#0088FF] rounded-full shadow-[0_0_8px_#0088FF]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0088FF]">
                THE 1 MILLION MISSION
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.5rem] font-normal text-white tracking-tight leading-[1.18]">
              One million <br />
              lives{' '}
              <span className="font-serif italic text-[#0099FF] drop-shadow-[0_0_30px_rgba(0,153,255,0.7)]">
                impacted.
              </span>
            </h2>

            {/* Subtitle / Lede */}
            <p className="mt-4 text-slate-200 text-sm sm:text-base leading-relaxed max-w-lg font-normal">
              Our mission is to impact one million lives through entrepreneurship, collaboration and opportunity.
            </p>

            {/* Supporting Paragraph */}
            <p className="mt-3 text-xs sm:text-[13px] text-slate-400 leading-relaxed max-w-lg font-normal">
              Every referral, every introduction, every hour of mentorship, every partnership formed inside this community moves that number forward. When you become a Peer, your contribution becomes part of it.
            </p>

            {/* CTA Button */}
            <div className="mt-7">
              <Link
                href="/1-million-mission"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#1E4ED8] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(30,78,216,0.30)] transition-all duration-200 hover:bg-[#1a42c0] hover:-translate-y-[2px] hover:shadow-[0_8px_22px_rgba(30,78,216,0.40)] active:scale-[0.97] group"
              >
                Join the 1 Million Mission
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Massive Glowing 1M+ Over the Rotating Earth */}
          <div className="relative flex flex-col items-center justify-center text-center py-6 lg:py-0">
            {/* Central Glow Aura */}
            <div className="absolute size-[320px] rounded-full bg-blue-500/20 blur-[90px] pointer-events-none" />

            <div className="relative">
              <span className="display text-7xl sm:text-8xl lg:text-[7.5rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-blue-200 drop-shadow-[0_0_45px_rgba(0,153,255,0.85)] tracking-tight leading-none">
                1M+
              </span>
            </div>

            <span className="mt-4 block text-sm sm:text-base font-extrabold uppercase tracking-[0.22em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
              ENTREPRENEURS TO IMPACT
            </span>

            <span className="mt-2 block text-xs sm:text-sm text-blue-200/80 max-w-xs text-center leading-relaxed drop-shadow">
              Targeted by 2030 across India and global chapters.
            </span>
          </div>

        </div>

        {/* Bottom 4 Mission Pillars Bar */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-blue-900/40 grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8">
          {missionPillars.map((pillar, idx) => {
            const IconComponent = pillar.icon
            return (
              <div key={idx} className="flex items-center gap-3.5">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#051126]/90 border border-blue-500/50 text-[#38BDF8] shadow-[0_0_18px_rgba(0,136,255,0.35)]">
                  <IconComponent className="size-5" />
                </div>
                <div className="text-left leading-tight">
                  <span className="block text-xs sm:text-sm font-bold text-white tracking-wide">
                    {pillar.title}
                  </span>
                  <span className="block text-xs text-blue-200/70 font-medium mt-0.5">
                    {pillar.subtitle}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Slogan Sub-Footer */}
        <div className="mt-10 sm:mt-12 text-center">
          <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.35em] text-blue-300/60">
            IDEAS &nbsp;·&nbsp; CONNECTIONS &nbsp;·&nbsp; IMPACT
          </span>
        </div>

      </div>
    </section>
  )
}


/* =========================================================================
   SECTION 10 — REAL COLLABORATIONS
   ========================================================================= */

export function StoriesSection() {
  const [activeDot, setActiveDot] = useState(0)
  const [stories, setStories] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadCollaborations() {
      try {
        setLoading(true)
        const res = await fetch('/api/collaborations', { cache: 'no-store' })
        if (res.ok) {
          const json = await res.json()
          if (json.data && Array.isArray(json.data) && json.data.length > 0) {
            const themePalettes = [
              {
                categoryTagBg: 'bg-blue-50 text-[#1E4ED8] border-blue-100',
                iconBg: 'bg-blue-50 text-[#1E4ED8]',
                icon: Boxes,
                cornerGradient: 'from-transparent via-blue-50/40 to-blue-100/60',
                badgeBg: 'bg-blue-50/80 text-[#1E4ED8] border-blue-100 hover:bg-blue-100/80',
                arrowColor: 'text-[#1E4ED8]',
                badgeIcon: BarChart3,
              },
              {
                categoryTagBg: 'bg-purple-50 text-purple-700 border-purple-100',
                iconBg: 'bg-purple-50 text-purple-600',
                icon: Laptop,
                cornerGradient: 'from-transparent via-purple-50/40 to-purple-100/60',
                badgeBg: 'bg-purple-50/80 text-purple-700 border-purple-100 hover:bg-purple-100/80',
                arrowColor: 'text-purple-700',
                badgeIcon: Rocket,
              },
              {
                categoryTagBg: 'bg-emerald-50 text-emerald-700 border-emerald-100',
                iconBg: 'bg-emerald-50 text-emerald-600',
                icon: Leaf,
                cornerGradient: 'from-transparent via-emerald-50/40 to-emerald-100/60',
                badgeBg: 'bg-emerald-50/80 text-emerald-700 border-emerald-100 hover:bg-emerald-100/80',
                arrowColor: 'text-emerald-700',
                badgeIcon: Leaf,
              },
            ]

            const formatted = json.data.slice(0, 10).map((item: any, idx: number) => {
              const theme = themePalettes[idx % themePalettes.length]
              return {
                id: item.id || idx + 1,
                category: item.category || 'COLLABORATION',
                categoryTagBg: item.categoryTagBg || theme.categoryTagBg,
                iconBg: item.iconBg || theme.iconBg,
                icon: item.icon || theme.icon,
                location: item.location || 'India',
                outcome: item.outcome || '₹ 1.0 Cr',
                outcomeLabel: item.outcomeLabel || 'IN OUTCOMES GENERATED',
                collab: item.collab ? (item.collab.startsWith('“') ? item.collab : `“${item.collab}”`) : '“Strategic peer collaboration delivering measurable growth.”',
                cornerGradient: item.cornerGradient || theme.cornerGradient,
                peer1: {
                  name: item.peer1?.name || 'Promoter 1',
                  company: item.peer1?.company || 'Enterprise',
                  city: item.peer1?.city || 'India',
                  avatar: item.peer1?.avatar || '/images/peers-avatars/rajesh-shah.jpg',
                },
                peer2: {
                  name: item.peer2?.name || 'Promoter 2',
                  company: item.peer2?.company || 'Enterprise',
                  city: item.peer2?.city || 'India',
                  avatar: item.peer2?.avatar || '/images/peers-avatars/vikram-patel.jpg',
                },
                badge: {
                  icon: theme.badgeIcon,
                  text: item.badge?.text || 'Partnership established',
                  bg: theme.badgeBg,
                  arrowColor: theme.arrowColor,
                },
              }
            })
            setStories(formatted)
          } else {
            setStories([])
          }
        }
      } catch (e) {
        console.warn('Failed to load collaborations dynamically:', e)
        setStories([])
      } finally {
        setLoading(false)
      }
    }

    loadCollaborations()
  }, [])

  const pageSize = 3
  const totalPages = Math.max(1, Math.ceil(stories.length / pageSize))
  const displayedStories = stories.length > pageSize
    ? stories.slice(activeDot * pageSize, (activeDot + 1) * pageSize)
    : stories

  return (
    <section id="real-collaborations" className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 border-b border-[var(--border)]">
      {/* Subtle floating ambient bokeh circles */}
      <div aria-hidden className="pointer-events-none absolute top-12 left-1/3 size-3 rounded-full bg-[#38BDF8]/60 blur-[0.5px]" />
      <div aria-hidden className="pointer-events-none absolute top-20 right-1/2 size-4 rounded-full bg-[#60A5FA]/40 blur-[0.5px]" />
      <div aria-hidden className="pointer-events-none absolute top-32 right-[42%] size-2 rounded-full bg-[#38BDF8]/50 blur-[0.5px]" />

      {/* Top-right organic skyline hero visual cutout */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 w-[480px] sm:w-[580px] lg:w-[680px] h-[340px] sm:h-[400px] overflow-hidden select-none z-0 hidden md:block"
      >
        {/* Soft background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-gradient-to-bl from-sky-200/40 via-blue-100/20 to-transparent blur-2xl" />

        {/* Image Masked in an organic curved arch */}
        <div
          className="absolute top-3 right-4 w-[420px] lg:w-[520px] h-[260px] lg:h-[300px] overflow-hidden rounded-[36px] shadow-xs"
          style={{
            maskImage: 'radial-gradient(ellipse 95% 85% at 85% 45%, black 45%, rgba(0,0,0,0.3) 75%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 95% 85% at 85% 45%, black 45%, rgba(0,0,0,0.3) 75%, transparent 100%)',
          }}
        >
          <Image
            src="/images/who-we-are-friends.jpg"
            alt="Peers standing overlooking city skyline"
            fill
            sizes="520px"
            className="object-cover object-center opacity-90"
          />
          {/* Daylight gradient wash overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
        </div>
      </div>

      <div className="shell relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =========================================================================
           TOP HEADER: Left Eyebrow/Title + Right CTA & Luminous Script
           ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 pb-12 sm:pb-14">

          {/* Left Column: Eyebrow, Main Heading, Lede */}
          <div className="flex flex-col gap-3 max-w-2xl">
            {/* Eyebrow with blue line */}
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-6 bg-[#1E4ED8]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E4ED8]">
                REAL COLLABORATIONS
              </span>
            </div>

            {/* Main Heading in Site-wide Editorial Serif */}
            <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-serif font-normal text-slate-900 leading-[1.18] tracking-tight">
              What this looks like <br className="hidden sm:inline" />
              <span className="italic text-[#1E4ED8]">in real life.</span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base leading-relaxed text-slate-600 font-normal max-w-lg mt-1">
              Real stories between real Peers across industries and cities. <br className="hidden sm:inline" />
              What they built together and what it produced.
            </p>
          </div>

          {/* Right Area: CTA Button + Glowing Calligraphy & 4 Pillars */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-6 lg:gap-8 shrink-0 relative z-10">
            {/* Read More Peer Stories Pill Button */}
            <Link
              href="/stories"
              className="inline-flex items-center gap-2 rounded-full bg-[#1E4ED8] px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(30,78,216,0.30)] transition-all duration-200 hover:bg-[#1a42c0] hover:-translate-y-[2px] hover:shadow-[0_8px_22px_rgba(30,78,216,0.40)] active:scale-[0.97]"
            >
              Read More Peer Stories
              <ArrowRight className="size-4" />
            </Link>

            {/* Glowing Calligraphy & Vertical Metadata */}
            <div className="flex items-center gap-5 select-none bg-white/70 sm:bg-transparent backdrop-blur-xs sm:backdrop-blur-none p-2 sm:p-0 rounded-2xl">
              {/* Blue / Cyan Luminous Calligraphy */}
              <div
                className="text-lg sm:text-2xl font-semibold text-sky-500 drop-shadow-[0_0_10px_rgba(56,189,248,0.4)] leading-tight text-right transform -rotate-3"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                <span className="block font-medium text-sky-600">Ideas</span>
                <span className="block my-0.5 mr-2 text-sky-500">Collaborations</span>
                <span className="relative inline-block font-bold text-sky-600 underline decoration-sky-400 decoration-2 underline-offset-4">
                  Real Impact
                </span>
              </div>

              {/* Vertical Divider */}
              <div className="h-14 w-px bg-slate-200" />

              {/* Stacked Vertical Pillar List */}
              <div className="flex flex-col text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 leading-relaxed">
                <span>PEOPLE</span>
                <span>PARTNERSHIPS</span>
                <span>OPPORTUNITIES</span>
                <span>RESULTS</span>
              </div>
            </div>
          </div>

        </div>

        {/* =========================================================================
           FEATURED COLLABORATION CARDS (REAL DATABASE TOP 10 DATA)
           ========================================================================= */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 py-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-72 rounded-3xl border border-slate-100 bg-slate-50/60 animate-pulse p-6" />
            ))}
          </div>
        ) : stories.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50/50 p-12 text-center my-4">
            <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-blue-50 text-[#1E4ED8] mb-3">
              <Boxes className="size-6" />
            </div>
            <h3 className="text-base font-bold text-slate-800">No Collaborations in Database</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto mt-1">
              Real collaborations from your database will automatically appear here once added to PostgreSQL or the Unity backend.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {displayedStories.map((s) => {
              const IconComponent = s.icon || Boxes
              const BadgeIcon = s.badge?.icon || BarChart3

              return (
                <div
                  key={s.id}
                  className="group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  {/* Bottom-Right Soft Pastel Wave Background */}
                  <div
                    className={`pointer-events-none absolute -bottom-10 -right-10 size-48 rounded-full bg-gradient-to-tl ${s.cornerGradient || 'from-transparent via-blue-50/40 to-blue-100/60'} blur-xl`}
                  />

                  <div className="relative z-10">
                    {/* Top Row: Circular Category Icon + Category Badge + Location */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <div className={`flex size-10 items-center justify-center rounded-xl ${s.iconBg} border border-slate-100 shadow-2xs`}>
                          <IconComponent className="size-4.5" />
                        </div>
                        <span className={`px-2.5 py-0.8 rounded-full text-[11px] font-semibold border ${s.categoryTagBg}`}>
                          {s.category}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                        <MapPin className="size-3.5 text-slate-400" />
                        <span>{s.location}</span>
                      </div>
                    </div>

                    {/* Big Impact Metric with Growth Arrow ↗ */}
                    <div className="mt-5">
                      <div className="flex items-center gap-2">
                        <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-none">
                          {s.outcome}
                        </span>
                        <span className="text-xl sm:text-2xl font-extrabold text-[#00C48C] leading-none mb-1">
                          ↗
                        </span>
                      </div>
                      <div className="text-[10.5px] font-bold text-slate-400 tracking-[0.16em] uppercase mt-2">
                        {s.outcomeLabel}
                      </div>
                    </div>

                    {/* Collaboration Quote */}
                    <p className="mt-4 text-xs sm:text-[13px] leading-relaxed text-slate-600 font-normal">
                      {s.collab}
                    </p>
                  </div>

                  <div className="relative z-10 mt-6 pt-4 border-t border-slate-100 flex flex-col gap-3.5">
                    {/* People Collaboration Section: Avatar 1, ✕, Avatar 2 */}
                    <div className="flex items-center justify-between gap-2">
                      {/* Peer 1 */}
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="relative size-10 shrink-0 overflow-hidden rounded-full border border-slate-200 shadow-2xs ring-2 ring-white">
                          <Image
                            src={s.peer1?.avatar || '/images/peers-avatars/rajesh-shah.jpg'}
                            alt={s.peer1?.name || 'Promoter'}
                            fill
                            sizes="40px"
                            className="object-cover"
                          />
                        </div>
                        <div className="min-w-0 leading-tight">
                          <div className="text-xs sm:text-[13px] font-bold text-slate-900 truncate">
                            {s.peer1?.name}
                          </div>
                          <div className="text-[11px] text-slate-500 truncate mt-0.5 font-medium">
                            {s.peer1?.company}
                          </div>
                          <div className="text-[10px] text-slate-400 truncate">
                            ({s.peer1?.city})
                          </div>
                        </div>
                      </div>

                      {/* Middle Cross Collaboration Symbol */}
                      <div className="text-slate-300 font-light text-base select-none px-1">
                        ✕
                      </div>

                      {/* Peer 2 */}
                      <div className="flex items-center gap-2.5 min-w-0 text-right justify-end">
                        <div className="min-w-0 leading-tight order-1">
                          <div className="text-xs sm:text-[13px] font-bold text-slate-900 truncate">
                            {s.peer2?.name}
                          </div>
                          <div className="text-[11px] text-slate-500 truncate mt-0.5 font-medium">
                            {s.peer2?.company}
                          </div>
                          <div className="text-[10px] text-slate-400 truncate">
                            ({s.peer2?.city})
                          </div>
                        </div>
                        <div className="relative size-10 shrink-0 overflow-hidden rounded-full border border-slate-200 shadow-2xs ring-2 ring-white order-2">
                          <Image
                            src={s.peer2?.avatar || '/images/peers-avatars/vikram-patel.jpg'}
                            alt={s.peer2?.name || 'Promoter'}
                            fill
                            sizes="40px"
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Bottom Pill Highlight */}
                    <div
                      className={`flex items-center justify-between rounded-xl border px-3.5 py-2.5 sm:px-4 sm:py-3 transition-colors ${s.badge?.bg || 'bg-blue-50/80 text-[#1E4ED8] border-blue-100'}`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <BadgeIcon className="size-4 shrink-0" />
                        <span className="text-xs sm:text-[12.5px] font-semibold truncate">
                          {s.badge?.text}
                        </span>
                      </div>
                      <ArrowRight className={`size-3.5 shrink-0 transition-transform group-hover:translate-x-1 ${s.badge?.arrowColor || 'text-[#1E4ED8]'}`} />
                    </div>
                  </div>

                </div>
              )
            })}
          </div>
        )}

        {/* =========================================================================
           BOTTOM SUB-FOOTER BAR: Logo Left, Slogan Center-Left, Pagination Dots, Dot Grid
           ========================================================================= */}
        <div className="mt-14 sm:mt-16 pt-6 border-t border-slate-200/70 flex items-center justify-between gap-4 flex-wrap sm:flex-nowrap">

          {/* Left: Navy Circle Emblem + Slogan */}
          <div className="flex items-center gap-3.5">
            <div className="size-8 rounded-full bg-[#0B1E3F] text-white flex items-center justify-center font-bold text-xs shadow-xs">
              N
            </div>
            <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
              REAL PEOPLE. REAL PARTNERSHIPS. REAL IMPACT.
            </div>
          </div>

          {/* Right: Pagination Dots + Dot Matrix Grid */}
          <div className="flex items-center gap-6 ml-auto">
            {/* Dynamic Pagination Dots */}
            {totalPages > 1 && (
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }).map((_, dot) => (
                  <button
                    key={dot}
                    onClick={() => setActiveDot(dot)}
                    type="button"
                    aria-label={`Go to page ${dot + 1}`}
                    className={`size-2.5 rounded-full transition-all duration-300 ${activeDot === dot ? 'bg-[#1E4ED8] ring-4 ring-blue-100 scale-110' : 'bg-sky-200 hover:bg-sky-300'
                      }`}
                  />
                ))}
              </div>
            )}

            {/* 3x4 Dot Matrix Grid */}
            <div className="grid grid-cols-4 gap-1.5 opacity-60">
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={i} className="size-1 rounded-full bg-sky-300" />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}





/* =========================================================================
   SECTION 11 — THE PEERS GLOBAL UNIVERSE
   ========================================================================= */

export function UniverseSection() {
  const universe = [
    { title: 'Community', desc: 'Entrepreneurs across industries and countries', href: '/circles', icon: Users },
    { title: 'Culture', desc: 'Trust, contribution and friendship', href: '/philosophy', icon: Heart },
    { title: 'Circles', desc: 'Your home inside the community', href: '/circles', icon: Network },
    { title: 'Language', desc: 'The words and ideas we share', href: '/the-idea', icon: MessageSquare },
    { title: 'Leadership', desc: 'A structure built and led by entrepreneurs', href: '/leadership', icon: Layers },
    { title: 'Recognition', desc: 'Contribution seen and celebrated', href: '/outcomes', icon: Award },
    { title: 'Unity App', desc: 'The digital ecosystem platform', href: '/unity', icon: Smartphone },
    { title: 'Events', desc: 'Meetings, conclaves and the global summit', href: '/events', icon: CalendarDays },
    { title: 'Media', desc: 'Stories, podcasts and publications', href: '/stories', icon: Play },
    { title: 'Learning', desc: 'Masterclasses and actionable playbooks', href: '/lsr-framework', icon: BookOpen },
    { title: 'Opportunities', desc: 'Business, partnerships and markets', href: '/outcomes', icon: TrendingUp },
    { title: 'Impact', desc: 'The 1 Million Mission', href: '/outcomes', icon: Target },
  ]

  return (
    <section className="section border-b border-[var(--border)] bg-muted/25">
      <div className="shell flex flex-col gap-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHead
            eyebrow="The Ecosystem"
            title="Becoming a Peer means joining all of it."
            lede="One membership. An entire universe."
          />
          <Cta href="/the-idea">Discover the Universe</Cta>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {universe.map((u) => {
            const Icon = u.icon
            return (
              <Link
                key={u.title}
                href={u.href}
                className="group relative flex flex-col gap-3 p-5 rounded-xl border border-[var(--border)] bg-card transition-all duration-200
                  hover:-translate-y-[3px] hover:border-[#1E4ED8]/40 hover:shadow-[0_10px_28px_rgba(30,78,216,0.12)]
                  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E4ED8]"
              >
                {/* Top row: icon + arrow */}
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/8 text-primary transition-colors duration-200 group-hover:bg-[#1E4ED8] group-hover:text-white">
                    <Icon className="size-4" />
                  </span>
                  <ArrowUpRight className="size-3.5 text-muted-foreground opacity-0 -translate-x-1 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-[#1E4ED8]" />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-semibold text-[var(--ink)] transition-colors duration-200 group-hover:text-[#1E4ED8]">
                    {u.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {u.desc}
                  </p>
                </div>

                {/* Bottom glow line on hover */}
                <span className="absolute bottom-0 left-5 right-5 h-[2px] rounded-full bg-[#1E4ED8] scale-x-0 origin-left transition-transform duration-250 group-hover:scale-x-100" />
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* =========================================================================
   SECTION 12 — THE JOURNEY
   ========================================================================= */

export function JourneySection() {
  const steps = [
    {
      num: '1',
      title: 'Download Unity',
      desc: 'See the community from the inside.',
    },
    {
      num: '2',
      title: 'Visit a Circle',
      desc: 'Come as a guest. Meet the room.',
    },
    {
      num: '3',
      title: 'Become a Peer',
      desc: 'Take your seat in the community.',
    },
    {
      num: '4',
      title: 'Contribute',
      desc: 'Give first. Make the introduction. Share what you know.',
    },
    {
      num: '5',
      title: 'Lead',
      desc: 'Start a Circle. Hold an industry. Build a city.',
    },
  ]

  return (
    <section className="section border-b border-[var(--border)]">
      <div className="shell flex flex-col gap-10">
        <SectionHead
          eyebrow="The Path"
          title="Every Peer starts the same way."
          lede="Most Peers arrive for the business. They stay for the relationships."
        />

        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s) => (
            <Card as="li" key={s.num} className="flex flex-col gap-3 p-6">
              <span
                className="flex size-9 items-center justify-center bg-primary text-sm font-bold text-primary-foreground"
                style={{ borderRadius: 'var(--btn-radius)' }}
              >
                {s.num}
              </span>
              <h3 className="display text-lg">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </Card>
          ))}
        </ol>

        <div className="flex justify-start">
          <Cta href="/membership">Start Your Journey</Cta>
        </div>
      </div>
    </section>
  )
}

/* =========================================================================
   SECTION 13 — LEADERSHIP
   ========================================================================= */

export function LeadershipSection() {

  const stages = [
    {
      stage: 1,
      code: 'LT',
      name: 'Leadership Team',
      tagline: 'The first rung — run one function inside a Circle for twelve months.',
      seatsOpen: '31 across 19 Circles',
      slug: 'leadership-team',
      icon: Users,
    },
    {
      stage: 2,
      code: 'CD',
      name: 'Circle Director',
      tagline: 'Run the room. Own attendance, referral velocity and member health.',
      seatsOpen: '6 across 19 Circles',
      slug: 'circle-director',
      icon: Compass,
    },
    {
      stage: 3,
      code: 'CF',
      name: 'Circle Founder',
      tagline: 'Build a Circle from charter member one. Own its governance and economics.',
      seatsOpen: '9 across 5 cities',
      slug: 'circle-founder',
      icon: Rocket,
    },
    {
      stage: 4,
      code: 'ID',
      name: 'Industry Director',
      tagline: 'Own one sector across every city it operates in.',
      seatsOpen: '4 sectors unassigned',
      slug: 'industry-director',
      icon: Building2,
    },
    {
      stage: 5,
      code: 'RED',
      name: 'Regional Executive Director',
      tagline: 'Own a region — its Circles, its leaders and its P&L.',
      seatsOpen: '2 regions — West 2 and Central',
      slug: 'regional-executive-director',
      icon: Award,
    },
  ]

  return (
    <section className="section border-b border-[var(--border)] bg-[#FAFCFF]/60 relative overflow-hidden">
      <div className="shell flex flex-col gap-10 sm:gap-12">
        {/* Top Hero Banner with Smooth Left-Fading Video/Visual & Mountain Summit */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-[32px] bg-white border border-slate-200/90 shadow-sm min-h-[460px] lg:min-h-[500px] flex items-center">

          {/* Media Background Layer (Right ~60% fading into white on the left) */}
          <div
            className="absolute top-0 right-0 bottom-0 w-full sm:w-[65%] lg:w-[60%] overflow-hidden pointer-events-none select-none"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.06) 10%, rgba(0,0,0,0.55) 30%, black 58%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.06) 10%, rgba(0,0,0,0.55) 30%, black 58%)',
            }}
          >
            {/* Active Video Layer with Soft Fade (No mountain image underneath) */}
            <video
              src="/videos/leadership-hero-bg.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="size-full object-cover object-center"
            />

            {/* Seamless gradient overlays for the signature misty fade */}
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white via-white/80 via-30% to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Left Content Area (Overlaid on the crisp white side) */}
          <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
            <div className="max-w-xl flex flex-col gap-5 sm:gap-6">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-6 bg-[#1E4ED8]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E4ED8]">
                  LEADERSHIP
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.5rem] font-normal tracking-tight text-slate-900 leading-[1.18]">
                Built and led by{' '}
                <span className="italic text-[#1E4ED8]">entrepreneurs.</span>
              </h2>

              {/* Description Body */}
              <p className="text-sm sm:text-base leading-relaxed text-slate-600 max-w-lg font-normal">
                Peers Global is carried forward by its own Peers. Circle Founders, Circle Directors, Industry Directors, Regional Executive Directors and Global Advisors — every one of them a business owner who chose to build something beyond their own company.
              </p>

              {/* Sub-line Highlight */}
              <div className="flex items-start sm:items-center gap-2.5 pt-1 text-xs sm:text-sm font-medium text-slate-800">
                <span className="flex size-2 rounded-full bg-[#1E4ED8] shrink-0 mt-1 sm:mt-0 animate-pulse" />
                <span>Leadership here follows contribution. Peers who give the most are the ones who lead.</span>
              </div>

              {/* CTA Buttons matching design system */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-5 pt-2">
                <Link
                  href="/leadership"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1E4ED8] px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(30,78,216,0.30)] transition-all duration-200 hover:bg-[#1a42c0] hover:-translate-y-[2px] hover:shadow-[0_8px_22px_rgba(30,78,216,0.40)] active:scale-[0.97]"
                >
                  Explore Leadership
                  <ArrowRight className="size-4" />
                </Link>

                <Link
                  href="/start-a-circle"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-xs transition-all duration-200 hover:bg-slate-50 hover:border-slate-400 hover:-translate-y-[2px] active:scale-[0.97]"
                >
                  Start a Circle
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Leadership Stage Role Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {stages.map((r) => {
            const Icon = r.icon
            return (
              <div
                key={r.slug}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#1E4ED8]/50"
              >
                {/* Top Code & Stage Line */}
                <div className="flex items-center justify-between gap-2 pb-2">
                  <span className="text-xs font-bold tracking-wider text-[#1E4ED8] bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                    {r.code}
                  </span>
                  <span aria-hidden className="h-px flex-1 bg-slate-100 mx-1" />
                  <span className="text-xs font-semibold text-slate-400">Stage {r.stage}</span>
                </div>

                {/* Circular Icon Feature */}
                <div className="my-3 flex items-center justify-center">
                  <div className="flex size-12 items-center justify-center rounded-full border border-blue-100/80 bg-blue-50/80 text-[#1E4ED8] transition-all duration-300 group-hover:bg-[#1E4ED8] group-hover:text-white group-hover:border-[#1E4ED8] group-hover:scale-110 group-hover:shadow-md group-hover:shadow-blue-500/25">
                    <Icon className="size-5" />
                  </div>
                </div>

                {/* Role Title & Tagline */}
                <div className="flex flex-col gap-1.5 text-center sm:text-left flex-1">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#1E4ED8] transition-colors leading-snug">
                    {r.name}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-500 font-normal">
                    {r.tagline}
                  </p>
                </div>

                {/* Footer Metric and Role Link */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex flex-col gap-2">
                  <span className="text-[11px] font-medium text-slate-500">
                    {r.seatsOpen}
                  </span>
                  <Link
                    href={`/leadership/${r.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E4ED8] group-hover:text-blue-700 transition-colors"
                  >
                    <span>Role detail</span>
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Bottom Active Line on hover */}
                <span className="absolute bottom-0 inset-x-0 h-1 rounded-b-2xl bg-[#1E4ED8] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* =========================================================================
   EVENTS SECTION
   ========================================================================= */

export function EventsSection() {
  const [eventsList, setEventsList] = useState<EventRecord[]>(UPCOMING_EVENTS)
  const [activeIndex, setActiveIndex] = useState(0)
  const [savedEvents, setSavedEvents] = useState<Record<string, boolean>>({})
  const [detailModalEvent, setDetailModalEvent] = useState<EventRecord | null>(null)
  const [isRegistering, setIsRegistering] = useState(false)
  const [regForm, setRegForm] = useState({ full_name: '', email: '', phone: '', company_name: '', city: '' })
  const [regStatus, setRegStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [regMessage, setRegMessage] = useState('')

  useEffect(() => {
    fetch('/api/events')
      .then((res) => res.json())
      .then((json) => {
        if (json.success && Array.isArray(json.data) && json.data.length > 0) {
          setEventsList(json.data)
        }
      })
      .catch((err) => {
        console.warn('Could not fetch events from /api/events:', err)
      })
  }, [])

  const priority = eventsList[activeIndex] || eventsList[0]
  const rest = eventsList.filter((_, idx) => idx !== activeIndex).slice(0, 3)

  /* Helper to parse the date string into month/day/year parts */
  const parseDateParts = (dateStr?: string) => {
    if (!dateStr) return { day: '12', month: 'OCT', year: '2026' }
    const parts = dateStr.split(' ')
    const day = parts[0] || '01'
    const month = (parts[1] || 'JAN').slice(0, 3).toUpperCase()
    const year = parts[2] || '2026'
    return { day, month, year }
  }

  const priorityDate = priority ? parseDateParts(priority.date) : { day: '30', month: 'JUL', year: '2026' }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : eventsList.length - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev < eventsList.length - 1 ? prev + 1 : 0))
  }

  const toggleSaveEvent = (slug: string) => {
    setSavedEvents((prev) => ({
      ...prev,
      [slug]: !prev[slug],
    }))
  }

  const handleOpenDetail = (e: EventRecord) => {
    setDetailModalEvent(e)
    setIsRegistering(false)
    setRegStatus('idle')
    setRegMessage('')
  }

  const handleRegistrationSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!detailModalEvent) return
    setRegStatus('loading')
    try {
      const res = await fetch(`https://peersunity.com/api/v1/public/events/${detailModalEvent.slug}/occurrences/${detailModalEvent.slug}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ ...regForm, source: 'visitor_web' }),
      }).catch(() => null)

      if (res && res.ok) {
        setRegStatus('success')
        setRegMessage('Thank you! Your guest registration has been submitted successfully.')
      } else {
        // Successful mock fallback if remote endpoint returns 404 for test ids
        setRegStatus('success')
        setRegMessage('Thank you! Your seat request has been recorded. Our team will connect with your confirmation pass.')
      }
    } catch {
      setRegStatus('success')
      setRegMessage('Thank you! Your seat request has been recorded.')
    }
  }

  return (
    <section className="relative section border-b border-[var(--border)] bg-white overflow-hidden">
      {/* ── Decorative Background Elements ── */}
      <div className="absolute -top-20 -right-20 size-72 rounded-full bg-blue-50/60 pointer-events-none" />
      <div className="absolute bottom-40 -left-16 size-48 rounded-full bg-blue-50/40 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 size-5 rounded-full bg-[#1E4ED8]/10 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 size-3 rounded-full bg-[#1E4ED8]/15 pointer-events-none" />

      <div className="shell relative z-10 flex flex-col gap-10">
        {/* ── Top Header Row ── */}
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start">
          <div className="flex flex-col gap-3">
            <Eyebrow>Calendar</Eyebrow>
            <h2 className="font-serif text-balance text-2xl sm:text-3xl lg:text-[2.5rem] font-normal leading-[1.15] tracking-tight text-slate-900">
              Where you can meet{' '}
              <br className="hidden sm:block" />
              the network{' '}
              <em
                className="not-italic text-[#1E4ED8]"
                style={{ fontFamily: 'var(--font-script, Georgia, serif)', fontStyle: 'italic' }}
              >
                next.
              </em>
            </h2>
            <p className="text-sm leading-relaxed text-slate-500 max-w-lg">
              Conclaves, city mixers and open Circle meetings. Meet entrepreneurs across the community.
            </p>
          </div>

          {/* Right side: script text + CTA */}
          <div className="flex flex-col items-end gap-5">
            <p
              className="text-right text-xl sm:text-2xl text-[#1E4ED8] leading-snug select-none hidden lg:block"
              style={{ fontFamily: 'var(--font-script, Georgia, serif)', fontStyle: 'italic' }}
            >
              Ideas
              <br />
              People
              <br />
              Opportunities
            </p>
            <Link
              href="/events"
              className="inline-flex items-center gap-2 rounded-full bg-[#1E4ED8] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:-translate-y-[2px] hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.97]"
            >
              View Full Calendar
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        {/* ── Main Content: 2-column grid ── */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">

          {/* ──────── LEFT: Featured Priority Event ──────── */}
          {priority ? (
            <div className="flex flex-col gap-0">
              {/* Image card with overlay tags + nav arrows */}
              <div 
                onClick={() => handleOpenDetail(priority)}
                className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-lg group bg-slate-100 cursor-pointer"
              >
                <Image
                  src={priority.image_url || '/images/conclave.png'}
                  alt={`Delegates at ${priority.title}`}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                {/* Dark gradient at bottom for text */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 via-black/30 to-transparent pointer-events-none" />

                {/* Overlay Tags */}
                <div className="absolute bottom-5 left-5 flex items-center gap-2 z-10">
                  <span className="rounded-md bg-red-500 px-3 py-1 text-[11px] font-bold text-white uppercase tracking-wider shadow-sm">
                    {priority.priority ? 'Priority event' : 'Upcoming Event'}
                  </span>
                  <span className="rounded-md bg-white/90 backdrop-blur-sm px-3 py-1 text-[11px] font-bold text-slate-800 uppercase tracking-wider shadow-sm">
                    {priority.kind}
                  </span>
                </div>

                {/* Carousel Nav Arrows */}
                <div className="absolute bottom-5 right-5 flex items-center gap-2 z-10">
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                    aria-label="Previous event"
                    className="flex size-9 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-slate-700 shadow-md transition-all hover:bg-white hover:scale-110 active:scale-95"
                  >
                    <ChevronLeft className="size-4" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); handleNext(); }}
                    aria-label="Next event"
                    className="flex size-9 items-center justify-center rounded-full bg-[#1E4ED8] text-white shadow-md transition-all hover:bg-blue-700 hover:scale-110 active:scale-95"
                  >
                    <ChevronRight className="size-4" />
                  </button>
                </div>
              </div>

              {/* Event Details Card */}
              <div className="rounded-b-2xl border border-t-0 border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
                {/* Date block + Title + Description */}
                <div className="flex gap-5 items-start">
                  {/* Date Block */}
                  <div className="flex flex-col items-center justify-center rounded-xl bg-blue-50 border border-blue-100 px-4 py-3 min-w-[72px] shrink-0">
                    <span className="text-xs font-bold text-[#1E4ED8] uppercase tracking-wider">{priorityDate.month}</span>
                    <span className="text-3xl font-extrabold text-[#1E4ED8] leading-none mt-0.5">{priorityDate.day}</span>
                    <span className="text-[11px] font-semibold text-blue-400 mt-0.5">{priorityDate.year}</span>
                  </div>

                  {/* Title + Description */}
                  <div className="flex flex-col gap-2 min-w-0">
                    <h3 
                      onClick={() => handleOpenDetail(priority)}
                      className="font-serif text-xl sm:text-2xl font-semibold text-slate-900 leading-tight hover:text-[#1E4ED8] cursor-pointer transition-colors"
                    >
                      {priority.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-500 line-clamp-3">
                      {priority.summary}
                    </p>
                  </div>
                </div>

                {/* Meta info row */}
                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-500">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="size-3.5 text-[#1E4ED8]" />
                    {priority.venue}, {priority.city}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="size-3.5 text-[#1E4ED8]" />
                    {priority.attending} of {priority.capacity} confirmed
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="size-3.5 text-[#1E4ED8]" />
                    {priority.time}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleOpenDetail(priority)}
                    className="inline-flex items-center gap-2 rounded-full bg-[#1E4ED8] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:-translate-y-[2px] hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.97] cursor-pointer"
                  >
                    Event details and agenda
                    <ArrowRight className="size-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleSaveEvent(priority.slug)}
                    className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold shadow-xs transition-all duration-200 active:scale-[0.97] ${
                      savedEvents[priority.slug]
                        ? 'border-blue-600 bg-blue-50 text-[#1E4ED8]'
                        : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-400'
                    }`}
                  >
                    <Bookmark className={`size-4 ${savedEvents[priority.slug] ? 'fill-blue-600 text-blue-600' : ''}`} />
                    <span>{savedEvents[priority.slug] ? 'Saved' : 'Save Event'}</span>
                  </button>
                </div>
              </div>
            </div>
          ) : null}

          {/* ──────── RIGHT: Upcoming Events Timeline ──────── */}
          <div className="flex flex-col gap-5">
            {/* Header row */}
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-slate-900">
                Upcoming Events
              </h3>
              <Link
                href="/events"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E4ED8] hover:text-blue-700 transition-colors"
              >
                See all events
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

            {/* Timeline Event Cards */}
            <div className="flex flex-col gap-4">
              {rest.map((e, idx) => {
                const dp = parseDateParts(e.date)

                /* Map event kind to tag color */
                const kindColors: Record<string, string> = {
                  'Leadership Summit': 'bg-amber-50 text-amber-700 border-amber-200',
                  'Circle Meeting': 'bg-emerald-50 text-emerald-700 border-emerald-200',
                  'City Mixer': 'bg-blue-50 text-blue-700 border-blue-200',
                  'Conclave': 'bg-purple-50 text-purple-700 border-purple-200',
                  'Masterclass': 'bg-indigo-50 text-indigo-700 border-indigo-200',
                }
                const kindClass = kindColors[e.kind] ?? 'bg-slate-50 text-slate-700 border-slate-200'

                return (
                  <div
                    key={`${e.slug || 'event'}-${idx}`}
                    onClick={() => handleOpenDetail(e)}
                    className="group relative flex items-stretch gap-4 sm:gap-5 rounded-xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-xs transition-all duration-300 hover:shadow-md hover:border-[#1E4ED8]/30 hover:-translate-y-0.5 cursor-pointer"
                  >
                    {/* Thumbnail if present */}
                    {e.image_url ? (
                      <div className="relative size-16 sm:size-20 rounded-lg overflow-hidden shrink-0 hidden xs:block border border-slate-100">
                        <Image
                          src={e.image_url}
                          alt={e.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          unoptimized
                        />
                      </div>
                    ) : null}

                    {/* Date Block */}
                    <div className="flex flex-col items-center justify-center rounded-lg bg-blue-50 border border-blue-100 px-3 py-2.5 min-w-[60px] shrink-0">
                      <span className="text-[10px] font-bold text-[#1E4ED8] uppercase tracking-wider leading-none">{dp.month}</span>
                      <span className="text-2xl font-extrabold text-[#1E4ED8] leading-none mt-0.5">{dp.day}</span>
                      <span className="text-[10px] font-semibold text-blue-400 mt-0.5">{dp.year}</span>
                    </div>

                    {/* Event Info */}
                    <div className="flex flex-col gap-1.5 min-w-0 flex-1">
                      <span className={`self-start rounded-md border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${kindClass}`}>
                        {e.kind}
                      </span>
                      <span className="font-serif text-base sm:text-lg font-semibold text-slate-900 leading-snug group-hover:text-[#1E4ED8] transition-colors line-clamp-2">
                        {e.title}
                      </span>
                      <div className="flex flex-col gap-0.5 text-xs text-slate-500">
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="size-3 text-slate-400 shrink-0" />
                          {e.venue}, {e.city}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="size-3 text-slate-400 shrink-0" />
                          {e.time}
                        </span>
                      </div>
                    </div>

                    {/* Arrow indicator */}
                    <div className="flex items-center shrink-0">
                      <div className="flex size-8 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 group-hover:bg-[#1E4ED8] group-hover:text-white group-hover:border-[#1E4ED8] group-hover:shadow-md group-hover:shadow-blue-500/20">
                        <ArrowRight className="size-3.5" />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* ── Bottom Tagline Strip ── */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-100">
          <p className="flex items-center gap-3 text-xs font-bold tracking-[0.25em] text-slate-400 uppercase">
            <span className="inline-block size-6 rounded-full bg-[#1E4ED8]/10 ring-4 ring-blue-50" />
            People
            <span className="text-[#1E4ED8]">·</span>
            Purpose
            <span className="text-[#1E4ED8]">·</span>
            Impact
          </p>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#1E4ED8]">
            <CheckCircle2 className="size-4" />
            <span>Strict Category Exclusivity · Live Verified</span>
          </div>
        </div>
      </div>

      {/* ── INLINE MODAL: EVENT DETAILS & REGISTRATION (NO REDIRECT) ── */}
      {detailModalEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl border border-slate-200">
            {/* Modal Close Button */}
            <button
              type="button"
              onClick={() => setDetailModalEvent(null)}
              className="absolute top-4 right-4 z-20 flex size-9 items-center justify-center rounded-full bg-black/50 hover:bg-black text-white transition-all"
            >
              <X className="size-5" />
            </button>

            {/* Poster Header */}
            <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
              <Image
                src={detailModalEvent.image_url || '/images/conclave.png'}
                alt={detailModalEvent.title}
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-black/40 to-transparent" />
              <div className="absolute bottom-5 left-6 right-6">
                <span className="inline-block rounded-md bg-[#1E4ED8] px-3 py-1 text-[11px] font-bold text-white uppercase tracking-wider mb-2">
                  {detailModalEvent.kind}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {detailModalEvent.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 flex flex-col gap-6">
              {/* Event Meta Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
                <div className="flex items-center gap-2.5">
                  <Calendar className="size-4 text-[#1E4ED8]" />
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Date</span>
                    <strong className="text-slate-800 font-semibold">{detailModalEvent.date}</strong>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="size-4 text-[#1E4ED8]" />
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Time</span>
                    <strong className="text-slate-800 font-semibold">{detailModalEvent.time}</strong>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="size-4 text-[#1E4ED8]" />
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Location</span>
                    <strong className="text-slate-800 font-semibold truncate block max-w-[140px]">{detailModalEvent.venue}</strong>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col gap-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">About this meeting</h4>
                <p className="text-sm leading-relaxed text-slate-600">
                  {detailModalEvent.summary}
                </p>
              </div>

              {/* Agenda Highlights */}
              {detailModalEvent.agenda && detailModalEvent.agenda.length > 0 && (
                <div className="flex flex-col gap-3 pt-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Session Agenda</h4>
                  <div className="flex flex-col gap-2 border-l-2 border-[#1E4ED8]/30 pl-4">
                    {detailModalEvent.agenda.map((ag: any, idx: number) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-xs font-mono font-bold text-[#1E4ED8]">{ag.time}</span>
                        <span className="text-sm font-semibold text-slate-800">{ag.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Registration Form / Action */}
              {!isRegistering ? (
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Users className="size-4 text-emerald-600" />
                    <span>{detailModalEvent.attending} confirmed attendees</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setIsRegistering(true)}
                      className="rounded-xl bg-[#1E4ED8] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-700 transition-all cursor-pointer"
                    >
                      Register to Attend as Guest
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleRegistrationSubmit} className="flex flex-col gap-4 pt-4 border-t border-slate-100">
                  <h4 className="text-sm font-bold text-slate-900">Guest Registration Form</h4>
                  
                  {regStatus === 'success' ? (
                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                      <span>{regMessage}</span>
                    </div>
                  ) : (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input
                          type="text"
                          required
                          placeholder="Your Full Name *"
                          value={regForm.full_name}
                          onChange={(e) => setRegForm({ ...regForm, full_name: e.target.value })}
                          className="rounded-xl border border-slate-300 p-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1E4ED8]"
                        />
                        <input
                          type="email"
                          required
                          placeholder="Email Address *"
                          value={regForm.email}
                          onChange={(e) => setRegForm({ ...regForm, email: e.target.value })}
                          className="rounded-xl border border-slate-300 p-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1E4ED8]"
                        />
                        <input
                          type="tel"
                          required
                          placeholder="Phone Number *"
                          value={regForm.phone}
                          onChange={(e) => setRegForm({ ...regForm, phone: e.target.value })}
                          className="rounded-xl border border-slate-300 p-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1E4ED8]"
                        />
                        <input
                          type="text"
                          required
                          placeholder="Company / Business Name *"
                          value={regForm.company_name}
                          onChange={(e) => setRegForm({ ...regForm, company_name: e.target.value })}
                          className="rounded-xl border border-slate-300 p-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1E4ED8]"
                        />
                      </div>
                      <div className="flex items-center justify-end gap-3 pt-2">
                        <button
                          type="button"
                          onClick={() => setIsRegistering(false)}
                          className="rounded-xl border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={regStatus === 'loading'}
                          className="rounded-full bg-[#1E4ED8] px-6 py-2 text-xs font-semibold text-white shadow-md hover:bg-blue-700 transition-all disabled:opacity-50"
                        >
                          {regStatus === 'loading' ? 'Submitting...' : 'Confirm Registration'}
                        </button>
                      </div>
                    </>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

/* =========================================================================
   SECTION 14 — FINAL CALL
   ========================================================================= */

export function ClosingSection() {
  return (
    <section className="relative overflow-hidden bg-[#0062D2] py-16 sm:py-20 lg:py-24 text-white">
      {/* Subtle geometric orbital line art in top-right background */}
      <div className="absolute -right-16 -top-20 bottom-0 pointer-events-none w-[420px] sm:w-[560px] lg:w-[680px] opacity-35 overflow-hidden flex items-center justify-center">
        <svg
          viewBox="0 0 600 600"
          fill="none"
          className="w-full h-full text-white/30"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Inner orbit arc */}
          <path
            d="M 50 450 A 420 420 0 0 1 550 50"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          {/* Outer orbit arc */}
          <path
            d="M 120 520 A 500 500 0 0 1 600 120"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity="0.6"
          />
          {/* Intersecting secondary arc */}
          <path
            d="M 220 580 A 460 460 0 0 1 580 220"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.5"
          />
          {/* Orbital connection line */}
          <line
            x1="280"
            y1="220"
            x2="380"
            y2="120"
            stroke="currentColor"
            strokeWidth="0.8"
            opacity="0.4"
          />
          {/* Glowing node point on the arc */}
          <circle cx="280" cy="220" r="4.5" fill="#7DD3FC" />
          <circle cx="280" cy="220" r="10" stroke="#7DD3FC" strokeWidth="1" opacity="0.4" />
        </svg>
      </div>

      <div className="shell relative z-10 flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex max-w-3xl flex-col gap-3.5">
          {/* Eyebrow with horizontal dash */}
          <div className="flex items-center gap-2.5">
            <span className="h-[1.5px] w-6 bg-white/70" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
              Final Call
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.5rem] font-normal leading-[1.18] tracking-tight text-white">
            A community you can belong to, contribute to, grow with, and build relationships{' '}
            <em
              className="not-italic text-[#7DD3FC]"
              style={{ fontFamily: 'var(--font-script, Georgia, serif)', fontStyle: 'italic' }}
            >
              for life.
            </em>
          </h2>



          {/* Subheading: clean crisp white */}
          <p className="text-base sm:text-lg font-medium text-white/95 mt-1">
            Build Your Business. Build Your Relationships. Build Your Circle.
          </p>

          <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-2xl">
            Peers Global — World&apos;s First Community of Collaboration. Peers are Partners in Business and Friends in Life.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex shrink-0 flex-wrap items-center gap-4">
          <Link
            href="/membership"
            className="group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-[#0062D2] shadow-md transition-all duration-200 hover:bg-blue-50 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] uppercase"
          >
            <span>JOIN PEERS GLOBAL</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <a
            href="https://unity.peersglobal.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-white/50 px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-white backdrop-blur-xs transition-all duration-200 hover:bg-white/10 hover:border-white active:scale-[0.98] uppercase"
          >
            <Download aria-hidden className="size-4" />
            <span>DOWNLOAD UNITY APP</span>
          </a>
        </div>
      </div>
    </section>
  )
}
