'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GalaxyButton } from '@/components/ui/galaxy-button'
import {
  Users,
  Users2,
  GraduationCap,
  HeartHandshake,
  Handshake,
  BookOpen,
  Lightbulb,
  Settings,
  Coins,
  Megaphone,
  Heart,
  Rocket,
  ArrowRight,
  CheckCircle2,
  Quote,
  X,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Play,
  Volume2,
  VolumeX,
  Plus,
  Star,
  BarChart3,
  ChevronRight,
} from 'lucide-react'

interface CollaborationWay {
  number: string
  name: string
  tagline: string
  icon: React.ComponentType<{ className?: string; stroke?: string; strokeWidth?: number | string }>
  description: string
  example: string
  whatMakesItReal: string
}

const COLLABORATION_WAYS: CollaborationWay[] = [
  {
    number: '01',
    name: 'Business Referral',
    tagline: 'Warm introductions that build trust and business.',
    icon: Users,
    description:
      'A referral is not a name and a phone number. It is a recommendation from someone whose word already carries weight. When you refer a Peer to your own client, supplier or contact, you are transferring something you spent years earning. That is why referrals inside a Circle convert at rates cold outreach never approaches.',
    example:
      'Your client mentions a requirement outside your scope. You know a Peer who does exactly that work, and you know they will not embarrass you. You make the connection, and it becomes a long-term client relationship.',
    whatMakesItReal:
      'You only refer a Peer you would genuinely recommend. Every referral carries your name on it.',
  },
  {
    number: '02',
    name: 'Mentorship',
    tagline: 'Guide a peer with your experience.',
    icon: GraduationCap,
    description:
      'Mentorship is experience given over time. Not one conversation, but a sustained relationship where you commit to another entrepreneur’s growth. It is the deepest form of collaboration in this community, and the one that changes lives most permanently.',
    example:
      'A younger Peer is building in a sector you have operated in for twenty years. You meet regularly. You help them think through decisions before they make them. Over three years, they build something they could not have built alone.',
    whatMakesItReal:
      'Consistency. A mentor who meets someone once is a speaker. A mentor who meets them for two years is a mentor.',
  },
  {
    number: '03',
    name: 'Joint Venture',
    tagline: 'Build together. Grow together.',
    icon: Handshake,
    description:
      'Sometimes collaboration goes beyond helping. Two Peers combine capabilities and create something new — a joint offering, a shared venture, a combined bid, a business that needed both of them to exist.',
    example:
      'One Peer has manufacturing capacity. Another has distribution across three states. Neither could serve a large contract alone. Together they win it, and both businesses change size.',
    whatMakesItReal:
      'Joint ventures only form on trust that has already been tested. This is why they emerge from Circles rather than from conferences.',
  },
  {
    number: '04',
    name: 'Knowledge Sharing',
    tagline: 'Save time through shared learning.',
    icon: BookOpen,
    description:
      'Every entrepreneur is carrying expensive lessons. Mistakes that cost money. Decisions that cost time. Systems that took three attempts to get right. Shared in a single conversation, those lessons can save another entrepreneur eighteen months.',
    example:
      'A Peer is about to enter a market you exited two years ago. In forty minutes you explain what you learned — the pricing trap, the payment cycle, the partner who does not deliver. They avoid all of it.',
    whatMakesItReal:
      'Knowledge given freely, without turning it into a consulting engagement. The most common form of collaboration in a Circle, and one of the most valuable.',
  },
  {
    number: '05',
    name: 'Problem Solving',
    tagline: 'Be the thinking partner every entrepreneur needs.',
    icon: Lightbulb,
    description:
      'Every entrepreneur reaches decisions they cannot think through alone. A pricing call. A partner who has become a problem. Whether to expand or consolidate. Whether to let someone go. These are not questions that need an expert. They need someone who understands the weight of the decision and will think it through with you honestly.',
    example:
      'A Peer brings a difficult decision to the Circle. Four entrepreneurs who have faced something similar ask the right questions, challenge the assumptions, and help them see what they were too close to see.',
    whatMakesItReal:
      'You give attention and honesty, not advice. A thinking partner helps someone reach their own answer rather than handing them yours.',
  },
  {
    number: '06',
    name: 'Vendor Connect',
    tagline: 'Solve needs with the right resources.',
    icon: Settings,
    description:
      'Finding a reliable vendor is one of the quiet costs of running a business. The wrong supplier costs money, time and sometimes a client. Inside a Circle, a Peer can access vendors who have already been tested by someone they trust.',
    example:
      'A Peer needs a packaging supplier, a logistics partner, a CA, a developer or a factory. You have worked with the right one for six years. One introduction saves them months of searching and one bad experience.',
    whatMakesItReal:
      'You recommend only what you have used yourself. A vendor introduction carries your judgement with it.',
  },
  {
    number: '07',
    name: 'Funding Support',
    tagline: 'Open doors to capital and investors.',
    icon: Coins,
    description:
      'Capital is a relationship business. The right introduction at the right stage matters more than any deck. Peers connect one another to investors, lenders, funding partners and financial institutions who fund the kind of business they are building.',
    example:
      'A Peer is raising for the first time and does not know where to start. You have raised twice. You introduce them to two investors who genuinely fund businesses at their stage, and you tell them honestly what to expect.',
    whatMakesItReal:
      'Introducing someone to capital carries responsibility on both sides. You do it for Peers whose business you truly believe in.',
  },
  {
    number: '08',
    name: 'Business Visibility',
    tagline: 'Help each other get seen.',
    icon: Megaphone,
    description:
      'Good businesses often remain invisible. Not because they lack substance, but because nobody tells their story. Peers help each other become visible — through media, platforms, stages, publications and their own networks.',
    example:
      'A Peer has built something remarkable that nobody outside their city knows about. You feature them, invite them to speak, share their story, or introduce them to the right platform. Their credibility changes, and so does their pipeline.',
    whatMakesItReal:
      'Every honest business story deserves respect and visibility. Giving a Peer a platform costs you nothing and can change everything for them.',
  },
  {
    number: '09',
    name: 'Emotional Support',
    tagline: 'Be there through the highs and lows.',
    icon: Heart,
    description:
      'This is the one nobody expects on a list about business collaboration. It is also the reason Peers Global exists. Entrepreneurs carry things they cannot share with their team, their family or their friends. A month where payroll is uncertain. A partner who walked away. A failure they are still paying for. A decision made at eleven at night with nobody to call. A Peer is someone you can call.',
    example:
      'A Peer is going through the hardest phase of their business. You do not solve it. You show up. You listen without judgement. You remind them that this phase ends, because you have been through your own.',
    whatMakesItReal:
      'No agenda, no advice unless asked, and complete confidentiality. Entrepreneurs do not fail only because of business problems. They fail because they fight alone. Peers are Partners in Business and Friends in Life.',
  },
  {
    number: '10',
    name: 'Execution Support',
    tagline: 'Lend a hand to make it happen.',
    icon: Rocket,
    description:
      'Ideas are common. Execution is where businesses are actually built, and where most entrepreneurs get stuck. Sometimes a Peer does not need advice or an introduction. They need hands, capacity, a template, a process, a team member for two weeks, or someone to hold them accountable until it is finished.',
    example:
      'A Peer is launching something and is short on capacity. You lend a team member for a fortnight, share the process document you built three years ago, or simply check in every Friday until it ships.',
    whatMakesItReal:
      'Execution support is practical and unglamorous. It is also the form of help entrepreneurs remember longest, because it is the one that actually moved something forward.',
  },
]

export default function TenWaysOfCollaborationPage() {
  const [selectedWay, setSelectedWay] = useState<CollaborationWay | null>(null)
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const [isActionMuted, setIsActionMuted] = useState(true)
  const [isActionPlaying, setIsActionPlaying] = useState(true)
  const actionVideoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
        setIsPlaying(true)
      } else {
        videoRef.current.pause()
        setIsPlaying(false)
      }
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  const toggleActionPlay = () => {
    if (actionVideoRef.current) {
      if (actionVideoRef.current.paused) {
        actionVideoRef.current.play()
        setIsActionPlaying(true)
      } else {
        actionVideoRef.current.pause()
        setIsActionPlaying(false)
      }
    }
  }

  const toggleActionMute = () => {
    if (actionVideoRef.current) {
      actionVideoRef.current.muted = !actionVideoRef.current.muted
      setIsActionMuted(actionVideoRef.current.muted)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">

      {/* Global SVG Brand Gradient for Icons */}
      <svg className="absolute w-0 h-0 pointer-events-none -z-50" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="peersLogoGradIcon" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#E11D48" />
          </linearGradient>
        </defs>
      </svg>

      {/* =========================================================================
          SECTION 1: HERO (Master Full Page Dark Video Banner)
          ========================================================================= */}
      <section className="relative overflow-hidden bg-[#040F24] text-white pt-6 sm:pt-8 pb-14 sm:pb-20 border-b border-slate-800">
        {/* Full Bleed Hero Video Background */}
        <div className="absolute inset-0 size-full overflow-hidden pointer-events-none">
          <video
            src="/videos/homepage-hero-bg.mp4"
            poster="/images/circles-hero-new.jpg"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(2,8,23,0.92)_0%,rgba(4,15,36,0.78)_45%,rgba(4,15,36,0.55)_100%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Top Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="size-3.5 text-slate-500" />
            <span className="text-slate-400">How We Collaborate</span>
            <ChevronRight className="size-3.5 text-slate-500" />
            <span className="text-white font-semibold">10 Ways of Collaboration</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center min-h-[440px] lg:min-h-[480px]">
            {/* Main Content */}
            <div className="lg:col-span-12 max-w-3xl space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur-sm uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
                <span>HOW WE COLLABORATE · 10 WAYS</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-semibold tracking-tight leading-[1.14] text-white">
                  The 10 Ways of{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-rose-400">
                    Collaboration.
                  </span>
                </h1>
                <p className="text-base sm:text-xl text-slate-200 font-normal leading-relaxed">
                  10 powerful forms of collaboration available inside every Peers Global Circle. A connection becomes valuable when it creates an opportunity, solves a problem or improves a life.
                </p>

                <p className="text-sm sm:text-base text-white/95 font-medium italic border-l-2 border-[#E11D48] pl-3 py-0.5">
                  Peers are Partners in Business and Friends in Life.
                </p>

                <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed font-normal max-w-2xl pt-1">
                  You don&apos;t have to figure out everything alone. You don&apos;t have to know everyone. And you don&apos;t have to arrive with everything already figured out. You simply need to be ready to grow, contribute and build meaningful relationships with people who are on their own entrepreneurial journeys.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <GalaxyButton
                  href="/circles"
                  size="lg"
                  className="text-xs sm:text-sm"
                >
                  FIND YOUR CIRCLE
                </GalaxyButton>
                <GalaxyButton
                  href="/membership"
                  variant="transparent"
                  size="lg"
                  className="text-xs sm:text-sm"
                >
                  APPLY FOR MEMBERSHIP
                </GalaxyButton>
              </div>

              {/* Counter band */}
              <div className="w-full pt-4 border-t border-white/15">
                <div className="flex flex-wrap items-center gap-x-3.5 gap-y-2 text-xs sm:text-sm text-slate-300">
                  <div className="inline-flex items-center gap-1.5 font-medium text-white">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-rose-400 font-bold text-sm sm:text-base">
                      1M+
                    </span>
                    <span>Entrepreneurs to impact by 2030</span>
                  </div>
                  <span className="text-white/30 hidden sm:inline">·</span>
                  <div className="inline-flex items-center gap-1.5 font-medium text-white">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-rose-400 font-bold text-sm sm:text-base">
                      18
                    </span>
                    <span>Industry &amp; Goal Circles</span>
                  </div>
                  <span className="text-white/30 hidden sm:inline">·</span>
                  <div className="inline-flex items-center gap-1.5 font-medium text-white">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-rose-400 font-bold text-sm sm:text-base">
                      10
                    </span>
                    <span>Forms of Collaboration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. COLLABORATION IS A PRACTICE (Exact Match with Image Section 2)
          ===================================================================== */}
      <section className="py-16 sm:py-24 border-b border-slate-100 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Story Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-center mb-3">
                <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                  Our Belief
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-950 tracking-tight leading-tight">
                Collaboration is a practice
              </h2>

              <div className="text-slate-600 font-light text-sm sm:text-base leading-relaxed space-y-4 mt-6">
                <p>
                  Most entrepreneurs want to help each other. Very few know exactly how. They meet, they exchange numbers, they say let me know if I can help — and then nothing happens. Not because anyone was insincere, but because help is too vague a word to act on.
                </p>
                <p className="font-bold text-slate-900">
                  So we defined it.
                </p>
                <p>
                  The 10 Ways of Collaboration are the specific forms giving takes inside Peers Global. Every Peer knows them. Every Circle meeting is built around them. Every contribution recorded in the Unity App falls into one of them.
                </p>
                <p>
                  When a Peer says I can help you, both people know exactly what that means.
                </p>
                <p className="font-semibold text-slate-900 border-l-2 border-[#0062D2] pl-3 py-0.5">
                  Ten ways. Every one of them available to every Peer, in every Circle, in every city.
                </p>
              </div>
            </div>

            {/* Right Video Visual (Facebook Reel) */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-[340px] sm:max-w-[360px] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-[#040F24] group">
                <video
                  ref={videoRef}
                  src="/videos/collaboration-practice.mp4"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  preload="metadata"
                  className="size-full object-cover cursor-pointer"
                  onClick={togglePlay}
                />

                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />

                {/* Floating Top-Left Tag */}
                <div className="absolute top-4 left-4 z-10 rounded-full bg-black/60 backdrop-blur-md px-3.5 py-1.5 shadow-sm border border-white/20 flex items-center gap-2">
                  <span className="size-2 rounded-full bg-rose-500 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                    Real People · Real Impact
                  </span>
                </div>

                {/* Floating Top-Right Audio Mute/Unmute Toggle */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleMute()
                  }}
                  className="absolute top-4 right-4 z-20 size-9 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-black/80 hover:scale-105 transition-all cursor-pointer shadow-md"
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                >
                  {isMuted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
                </button>

                {/* Center Play Indicator when paused */}
                {!isPlaying && (
                  <div
                    onClick={togglePlay}
                    className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 backdrop-blur-2xs cursor-pointer transition-opacity"
                  >
                    <div className="size-16 rounded-full bg-white/95 text-[#040F24] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform pl-1">
                      <Play className="size-7 fill-current" />
                    </div>
                  </div>
                )}

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 inset-x-4 z-10 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 p-3 shadow-2xl flex items-center gap-3">
                  <div className="size-9 rounded-xl bg-gradient-to-r from-[#1D4ED8]/10 to-[#E11D48]/10 border border-[#1D4ED8]/20 flex items-center justify-center shrink-0 shadow-2xs">
                    <HeartHandshake className="size-5" stroke="url(#peersLogoGradIcon)" strokeWidth={2.2} />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-slate-900 leading-snug">
                      A community built on giving, not just taking.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================================
          3. THE 10 WAYS OVERVIEW - STRONGER TOGETHER (Exact Redesign from Mockup)
          ===================================================================== */}
      <section className="relative py-20 sm:py-24 bg-gradient-to-b from-[#F8FAFD] via-white to-[#F5F8FD] border-b border-slate-100 overflow-hidden">

        {/* Soft Background Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/35 via-transparent to-transparent pointer-events-none" />



        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Centered Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
            {/* Eyebrow */}
            <div className="inline-flex items-center justify-center text-xs sm:text-[13px] font-bold tracking-[0.22em] uppercase mb-3">
              <span className="brand-gradient-text">10 WAYS TO COLLABORATE</span>
            </div>

            {/* Main Title: Stronger Together */}
            <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-semibold text-[#0D1E3A] tracking-tight leading-[1.15] mb-4">
              Stronger <span className="brand-gradient-text">Together</span>
            </h2>

            {/* Subtitle */}
            <p className="text-slate-600 text-sm sm:text-[15px] max-w-xl mx-auto leading-relaxed font-normal">
              Different needs. One community. Ten powerful ways to collaborate, grow and create impact with fellow entrepreneurs.
            </p>
          </div>

          {/* 10 Cards Grid (5 columns on desktop, responsive) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            {COLLABORATION_WAYS.map((way) => {
              const Icon = way.icon
              return (
                <div
                  key={way.number}
                  onClick={() => setSelectedWay(way)}
                  className="animated-glow-card group !rounded-3xl cursor-pointer shadow-sm hover:shadow-xl transition-all"
                  tabIndex={0}
                  role="article"
                >
                  <svg
                    className="animated-border-svg"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient
                        id={`brandCardGradCollab${way.number}`}
                        x1="0%"
                        y1="50%"
                        x2="100%"
                        y2="50%"
                      >
                        <stop offset="0%" stopColor="#1D4ED8" />
                        <stop offset="100%" stopColor="#E11D48" />
                      </linearGradient>
                    </defs>
                    <path
                      className="animated-border-path"
                      style={{ stroke: `url(#brandCardGradCollab${way.number})` }}
                      d="M 0.8 6 Q 0.8 0.8 6 0.8 L 94 0.8 Q 99.2 0.8 99.2 6 L 99.2 94 Q 99.2 99.2 94 99.2 L 6 99.2 Q 0.8 99.2 0.8 94 Z"
                    />
                  </svg>

                  <div className="p-5 sm:p-6 flex flex-col justify-between h-full min-h-[250px] bg-white rounded-3xl">
                    <div>
                      {/* Top row: Number Badge (matching the-idea reference screenshot) & Subtle Icon */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="size-10 rounded-2xl bg-gradient-to-r from-[#1D4ED8]/15 to-[#E11D48]/15 border border-[#1D4ED8]/30 text-[#1D4ED8] flex items-center justify-center font-bold text-sm group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:text-white transition-all duration-300 shadow-xs">
                          {way.number}
                        </div>
                        <div className="size-9 rounded-xl bg-gradient-to-r from-[#1D4ED8]/10 to-[#E11D48]/10 border border-[#1D4ED8]/20 flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-2xs">
                          <Icon className="size-4.5" stroke="url(#peersLogoGradIcon)" strokeWidth={2.2} />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-sm sm:text-base font-bold text-[#0F131A] mb-1.5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] transition-all">
                        {way.name}
                      </h3>

                      {/* Tagline */}
                      <p className="text-xs text-slate-500 leading-relaxed font-normal">
                        {way.tagline}
                      </p>
                    </div>

                    {/* Bottom: Learn more link + arrow button */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#1D4ED8] group-hover:text-[#E11D48] transition-colors">
                        Learn more
                      </span>
                      <span className="size-7 rounded-full bg-slate-50 text-slate-600 group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs group-hover:scale-110">
                        <ArrowRight className="size-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. CINEMATIC BANNER (Exact Match with Image Section 4)
          ===================================================================== */}
      <section className="relative overflow-hidden py-24 sm:py-32 bg-[#050E24] text-white border-b border-slate-900">
        {/* Background Video with Cinematic Overlays */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="size-full object-cover opacity-40 object-center"
          >
            <source src="/videos/stories-hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#050E24] via-[#050E24]/85 to-[#050E24]/40" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#050E24] to-transparent" />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#050E24]/60 to-transparent" />
        </div>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left Headline */}
            <div className="lg:col-span-7">
              <div className="flex items-center mb-3">
                <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                  A Stronger Tomorrow
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
                Collaboration changes <br className="hidden sm:inline" />
                more than businesses.
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-light max-w-xl mt-4 leading-relaxed">
                It builds confidence. It creates opportunities. It helps entrepreneurs go further than they could alone.
              </p>
            </div>

            {/* Right Frosted Quote Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-7 shadow-2xl max-w-[360px]">
                <Quote className="size-6 text-sky-400 mb-2 fill-sky-400/20" />
                <p className="font-serif italic text-base sm:text-lg text-white leading-snug">
                  “Alone we can do so little. Together we can do so much.”
                </p>
                <span className="block text-xs font-semibold text-sky-300 mt-3">
                  — Helen Keller
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================================
          5. PUT COLLABORATION INTO ACTION (Fully Recreated with Realistic Mobile App Phone)
          ===================================================================== */}
      <section className="relative py-16 sm:py-24 lg:py-28 bg-gradient-to-b from-[#F9FBFE] via-white to-[#F6FAFE] border-b border-slate-100 overflow-hidden">

        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">

            {/* ──────── LEFT COLUMN: Narrative, CTAs, 3 Metrics & Quote (5 cols) ──────── */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              {/* Eyebrow */}
              <div className="flex items-center mb-3">
                <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                  Built for Real Entrepreneurs
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0B1A38] tracking-tight leading-[1.15] mb-5">
                Put collaboration <br />
                into <span className="brand-gradient-text">action</span>
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-[15px] text-slate-600 font-normal leading-relaxed max-w-lg mb-8">
                Find your Circle, contribute your strengths and access the support you need — all in one place. The Unity App helps you give, get and grow through the{' '}
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('ways') || document.querySelector('h2')
                    el?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="font-semibold text-[#0062D2] hover:underline underline-offset-2 cursor-pointer"
                >
                  10 Ways of Collaboration.
                </button>
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 mb-9">
                <GalaxyButton
                  href="/circles"
                  size="lg"
                  className="text-xs sm:text-sm"
                >
                  FIND YOUR CIRCLE
                </GalaxyButton>
                <GalaxyButton
                  href="/membership"
                  variant="transparent"
                  size="lg"
                  className="text-xs sm:text-sm"
                >
                  APPLY FOR MEMBERSHIP
                </GalaxyButton>
              </div>

              {/* 3 Metrics Row */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-4 max-w-md pt-4 border-t border-slate-100 mb-8">
                {/* Metric 1 */}
                <div className="flex items-center gap-2.5">
                  <div className="size-10 rounded-2xl bg-gradient-to-br from-[#1D4ED8]/10 via-white to-[#E11D48]/10 border border-[#1D4ED8]/25 flex items-center justify-center shrink-0 shadow-2xs">
                    <svg className="size-5" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id="metricGrad1" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#1D4ED8" />
                          <stop offset="100%" stopColor="#E11D48" />
                        </linearGradient>
                      </defs>
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="url(#metricGrad1)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="9" cy="7" r="4" stroke="url(#metricGrad1)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="url(#metricGrad1)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="url(#metricGrad1)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-base font-bold text-slate-900 leading-none">10</div>
                    <div className="text-[10px] text-slate-400 font-medium leading-tight mt-0.5">
                      Ways to<br />Collaborate
                    </div>
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="flex items-center gap-2.5">
                  <div className="size-10 rounded-2xl bg-gradient-to-br from-[#1D4ED8]/10 via-white to-[#E11D48]/10 border border-[#1D4ED8]/25 flex items-center justify-center shrink-0 shadow-2xs">
                    <svg className="size-5" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id="metricGrad2" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#1D4ED8" />
                          <stop offset="100%" stopColor="#E11D48" />
                        </linearGradient>
                      </defs>
                      <path d="M14 19a6 6 0 0 0-12 0" stroke="url(#metricGrad2)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="8" cy="9" r="4" stroke="url(#metricGrad2)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22 19a6 6 0 0 0-6-6 4 4 0 1 0 0-8" stroke="url(#metricGrad2)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-base font-bold text-slate-900 leading-none">100K+</div>
                    <div className="text-[10px] text-slate-400 font-medium leading-tight mt-0.5">
                      Entrepreneurs<br />Together
                    </div>
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="flex items-center gap-2.5">
                  <div className="size-10 rounded-2xl bg-gradient-to-br from-[#1D4ED8]/10 via-white to-[#E11D48]/10 border border-[#1D4ED8]/25 flex items-center justify-center shrink-0 shadow-2xs">
                    <svg className="size-5" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id="metricGrad3" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#1D4ED8" />
                          <stop offset="100%" stopColor="#E11D48" />
                        </linearGradient>
                      </defs>
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" stroke="url(#metricGrad3)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      <polyline points="16 7 22 7 22 13" stroke="url(#metricGrad3)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-base font-bold text-slate-900 leading-none">Bigger</div>
                    <div className="text-[10px] text-slate-400 font-medium leading-tight mt-0.5">
                      Possibilities<br />Ahead
                    </div>
                  </div>
                </div>
              </div>

              {/* Helen Keller Quote with Blue Accent Bar */}
              <div className="border-l-[3px] border-[#0062D2] pl-4 py-0.5 max-w-sm">
                <p className="font-serif italic text-sm text-slate-800 leading-snug">
                  “Alone we can do so little, together we can do so much.”
                </p>
                <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase mt-1 block">
                  — PEERS GLOBAL
                </span>
              </div>
            </div>

            {/* ──────── CENTER COLUMN: Real Mobile Phone & Dotted Pointer (4 cols) ──────── */}
            <div className="lg:col-span-4 relative flex items-center justify-center py-4">

              {/* Soft Ambient Blue Aura behind the Phone */}
              <div className="absolute size-[360px] sm:size-[440px] rounded-full bg-gradient-to-tr from-[#3B82F6]/25 via-[#60A5FA]/15 to-transparent blur-3xl pointer-events-none -z-10" />



              {/* Vertical Video Reel Player */}
              <div className="relative w-full max-w-[300px] sm:max-w-[330px] lg:max-w-[340px] aspect-[9/16] rounded-3xl overflow-hidden shadow-[0_22px_45px_rgba(0,98,210,0.22)] border border-slate-200/80 bg-[#040F24] group">
                <video
                  ref={actionVideoRef}
                  src="/videos/collaboration-action.mp4"
                  autoPlay
                  loop
                  muted={isActionMuted}
                  playsInline
                  preload="metadata"
                  className="size-full object-cover cursor-pointer"
                  onClick={toggleActionPlay}
                />

                {/* Subtle vignette gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/35 pointer-events-none" />

                {/* Floating Top-Left Tag */}
                <div className="absolute top-4 left-4 z-10 rounded-full bg-black/60 backdrop-blur-md px-3.5 py-1.5 shadow-sm border border-white/20 flex items-center gap-2">
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                    Unity App · In Action
                  </span>
                </div>

                {/* Floating Top-Right Audio Mute/Unmute Toggle */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleActionMute()
                  }}
                  className="absolute top-4 right-4 z-20 size-9 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-black/80 hover:scale-105 transition-all cursor-pointer shadow-md"
                  aria-label={isActionMuted ? 'Unmute video' : 'Mute video'}
                >
                  {isActionMuted ? (
                    <VolumeX className="size-4 text-white" />
                  ) : (
                    <Volume2 className="size-4 text-white" />
                  )}
                </button>

                {/* Paused Play Button Overlay */}
                {!isActionPlaying && (
                  <div
                    onClick={toggleActionPlay}
                    className="absolute inset-0 z-10 flex items-center justify-center bg-black/30 backdrop-blur-[2px] cursor-pointer"
                  >
                    <div className="size-16 rounded-full bg-white/90 text-[#1D4ED8] flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                      <Play className="size-7 fill-current ml-1" />
                    </div>
                  </div>
                )}

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 z-10 rounded-2xl bg-white/95 backdrop-blur-md p-3 shadow-lg border border-white/60">
                  <div className="flex items-center gap-2.5">
                    <div className="size-8 rounded-xl bg-gradient-to-br from-[#1D4ED8]/10 via-white to-[#E11D48]/10 border border-[#1D4ED8]/25 flex items-center justify-center shrink-0">
                      <Rocket className="size-4 text-[#1D4ED8]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold text-slate-900 leading-tight truncate">
                        Where Connections Create Impact
                      </p>
                      <p className="text-[10px] text-slate-500 font-medium leading-tight">
                        Turn conversations into opportunities
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* ──────── RIGHT COLUMN: Floating Card & 3 Feature Badges (3 cols) ──────── */}
            <div className="lg:col-span-3 flex flex-col justify-center space-y-6">

              {/* Floating Card: Same Entrepreneurs. Bigger Possibilities. */}
              <Link
                href="/circles"
                className="group block rounded-full bg-white p-4 sm:p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-slate-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between gap-3.5">
                  <div className="size-12 rounded-2xl bg-gradient-to-br from-[#1D4ED8]/15 via-white to-[#E11D48]/15 border border-[#1D4ED8]/30 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    <svg className="size-6" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id="floatingCardUsersGrad" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#1D4ED8" />
                          <stop offset="100%" stopColor="#E11D48" />
                        </linearGradient>
                      </defs>
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="url(#floatingCardUsersGrad)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="9" cy="7" r="4" stroke="url(#floatingCardUsersGrad)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="url(#floatingCardUsersGrad)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="url(#floatingCardUsersGrad)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 leading-snug">
                      Same Entrepreneurs.
                    </h4>
                    <p className="text-xs font-bold brand-gradient-text leading-snug">
                      Bigger Possibilities.
                    </p>
                  </div>
                  <span className="size-8 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 transition-transform">
                    <ArrowRight className="size-3.5" />
                  </span>
                </div>
              </Link>

              {/* 3 Feature Bullets */}
              <div className="space-y-4">
                {/* Feature 1 */}
                <div className="flex items-center gap-3.5 p-2 rounded-xl hover:bg-slate-50/60 transition-colors">
                  <div className="size-11 rounded-2xl bg-gradient-to-br from-[#1D4ED8]/10 via-white to-[#E11D48]/10 flex items-center justify-center shrink-0 shadow-2xs border border-[#1D4ED8]/20">
                    <svg className="size-5.5" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id="bulletGrad1" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#1D4ED8" />
                          <stop offset="100%" stopColor="#E11D48" />
                        </linearGradient>
                      </defs>
                      <line x1="12" y1="20" x2="12" y2="10" stroke="url(#bulletGrad1)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      <line x1="18" y1="20" x2="18" y2="4" stroke="url(#bulletGrad1)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      <line x1="6" y1="20" x2="6" y2="16" stroke="url(#bulletGrad1)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    Build meaningful business relationships
                  </span>
                </div>

                {/* Feature 2 */}
                <div className="flex items-center gap-3.5 p-2 rounded-xl hover:bg-slate-50/60 transition-colors">
                  <div className="size-11 rounded-2xl bg-gradient-to-br from-[#1D4ED8]/10 via-white to-[#E11D48]/10 flex items-center justify-center shrink-0 shadow-2xs border border-[#1D4ED8]/20">
                    <svg className="size-5.5" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id="bulletGrad2" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#1D4ED8" />
                          <stop offset="100%" stopColor="#E11D48" />
                        </linearGradient>
                      </defs>
                      <path d="M14 19a6 6 0 0 0-12 0" stroke="url(#bulletGrad2)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="8" cy="9" r="4" stroke="url(#bulletGrad2)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22 19a6 6 0 0 0-6-6 4 4 0 1 0 0-8" stroke="url(#bulletGrad2)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    Learn from real experience
                  </span>
                </div>

                {/* Feature 3 */}
                <div className="flex items-center gap-3.5 p-2 rounded-xl hover:bg-slate-50/60 transition-colors">
                  <div className="size-11 rounded-2xl bg-gradient-to-br from-[#1D4ED8]/10 via-white to-[#E11D48]/10 flex items-center justify-center shrink-0 shadow-2xs border border-[#1D4ED8]/20">
                    <svg className="size-5.5" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id="bulletGrad3" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#1D4ED8" />
                          <stop offset="100%" stopColor="#E11D48" />
                        </linearGradient>
                      </defs>
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" stroke="url(#bulletGrad3)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    Turn ideas into real opportunities
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================================
          6. CLOSING BANNER (Master Dark Navy #040F24 Theme)
          ===================================================================== */}
      <section
        className="relative overflow-hidden text-white py-20 sm:py-24 bg-[#040F24] border-t border-slate-800"
      >
        {/* Subtle radial ambient glows */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(29,78,216,0.22),transparent_60%)] pointer-events-none" />
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-indigo-600/15 blur-3xl pointer-events-none" />

        {/* Soft Background Concentric Arcs matching the design */}
        <div className="absolute top-1/2 -left-20 -translate-y-1/2 size-[520px] rounded-full border border-white/10 pointer-events-none" />
        <div className="absolute top-1/2 -left-36 -translate-y-1/2 size-[700px] rounded-full border border-white/[0.06] pointer-events-none" />
        <div className="absolute -top-32 -right-32 size-[600px] rounded-full border border-white/10 pointer-events-none" />
        <div className="absolute -top-48 -right-48 size-[800px] rounded-full border border-white/[0.06] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 size-2 rounded-full bg-white/30 pointer-events-none" />

        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex items-center justify-center mb-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
              The Next Step
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
            Be part of a community that gives back.
          </h2>

          <p className="text-sm sm:text-base text-white/85 font-light mt-3 max-w-xl mx-auto leading-relaxed">
            Find your Circle and start collaborating today.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <GalaxyButton href="/circles" size="lg">
              FIND YOUR CIRCLE
            </GalaxyButton>
            <GalaxyButton href="/membership" variant="transparent" size="lg">
              APPLY FOR MEMBERSHIP
            </GalaxyButton>
          </div>
        </div>
      </section>

      {/* =====================================================================
          INTERACTIVE MODAL: Click any of the 10 Ways to view deep details
          ===================================================================== */}
      {selectedWay && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedWay(null)}
        >
          <div
            className="relative w-full max-w-xl rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedWay(null)}
              className="absolute top-5 right-5 size-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="size-4" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono font-bold text-[#1D4ED8] bg-blue-50/80 px-2.5 py-1 rounded-full border border-blue-100">
                WAY {selectedWay.number}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Peers Global Collaboration
              </span>
            </div>

            <div className="flex items-start gap-4 mb-4">
              <div className="size-12 rounded-2xl bg-gradient-to-r from-[#1D4ED8]/10 to-[#E11D48]/10 border border-[#1D4ED8]/25 flex items-center justify-center shrink-0 shadow-xs">
                <selectedWay.icon className="size-6" stroke="url(#peersLogoGradIcon)" strokeWidth={2.2} />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-slate-950">
                  {selectedWay.name}
                </h3>
                <p className="text-sm brand-gradient-text font-serif italic mt-0.5">
                  {selectedWay.tagline}
                </p>
              </div>
            </div>

            <p className="text-slate-600 text-sm font-light leading-relaxed mb-6">
              {selectedWay.description}
            </p>

            {/* Tinted Example & Ground Rules Panels */}
            <div className="space-y-3">
              <div className="rounded-2xl bg-blue-50/70 border border-blue-100 p-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <Sparkles className="size-4 text-[#1D4ED8]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                    What It Looks Like
                  </span>
                </div>
                <p className="text-xs text-slate-700 font-light leading-relaxed">
                  {selectedWay.example}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <ShieldCheck className="size-4 text-emerald-600" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    What Makes It Real
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  {selectedWay.whatMakesItReal}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-400 italic">
                Peers are Partners in Business &amp; Friends in Life.
              </span>
              <button
                type="button"
                onClick={() => setSelectedWay(null)}
                className="rounded-xl bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] px-5 py-2 text-xs font-semibold text-white hover:opacity-95 transition-opacity cursor-pointer shadow-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
