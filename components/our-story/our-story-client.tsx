'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  HeartHandshake,
  Users,
  Building2,
  Globe2,
  Calendar,
  CheckCircle2,
  Quote,
  ShieldCheck,
  Target,
  Sparkles,
  TrendingUp,
  Layers,
  Award,
  BookOpen,
  Sprout,
  Lightbulb,
  Share2,
  Smartphone,
  Eye,
  Smile,
  Zap,
} from 'lucide-react'
import { ClosingCtaSection } from '@/components/site/ClosingCtaSection'

// ─── Timeline Milestones ───────────────────────────────────────────────────
const TIMELINE = [
  {
    year: '2011',
    title: 'Learning to Build',
    desc: 'Dr. Pravin started his own venture in information technology and entered the startup ecosystem as a first-generation entrepreneur from a farmer family in Botad.',
  },
  {
    year: '2012–2016',
    title: 'The HRMS Venture, Africa & The Exit',
    desc: 'Built a cloud-based, mobile-based HRMS product designed with Africa in mind. Lessons, struggles, uncertainty, and eventually a successful sale and exit.',
  },
  {
    year: 'Post-Exit',
    title: 'The Story Nobody Would Publish',
    desc: 'Approached media platforms including Times of India and Inc42. The story was not published. Realized that millions of MSMEs and entrepreneurs lacked a platform for their voices.',
  },
  {
    year: '2020',
    title: 'VyapaarJagat & When Recognition Became More',
    desc: 'Launched VyapaarJagat to celebrate MSMEs and startups. At the Ahmedabad 2020 Growth Show, Krina’s emotional award moment proved that recognition gives people the feeling that their effort has been seen.',
  },
  {
    year: 'Research Phase',
    title: 'Studying World Communities',
    desc: 'Deeply researched TiE, BNI, Rotary, Lions, EO, YPO, Vistage, and Round Tables to identify what worked and where the gaps were. The question evolved: How do we help entrepreneurs grow through one another?',
  },
  {
    year: 'Now & Beyond',
    title: 'PEERS GLOBAL & The 1M Mission',
    desc: 'The birth of the world’s first community of collaboration built around Circles, LSR, Inner Boards, Recognition, and Unity—moving toward impacting 1M+ entrepreneurs by 2030.',
  },
]

// ─── What We Built Architecture ───────────────────────────────────────────
const ARCHITECTURE_ELEMENTS = [
  {
    title: 'Industry & Purpose Circles',
    desc: 'Structured communities designed to bring relevant entrepreneurs together around shared business contexts, ambitions, and stages.',
    icon: Users,
    color: 'text-blue-600 bg-blue-50 border-blue-100',
  },
  {
    title: 'LSR Growth Model',
    desc: 'Learning, Sharing, and Relationships working together in unison to create sustainable, multidimensional founder growth.',
    icon: TrendingUp,
    color: 'text-violet-600 bg-violet-50 border-violet-100',
  },
  {
    title: 'The Inner Board',
    desc: 'A trusted environment where entrepreneurs can learn from the experience and perspective of their peers on crucial decisions.',
    icon: ShieldCheck,
    color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
  },
  {
    title: '10 Forms of Collaboration',
    desc: 'Structured pathways moving beyond casual networking into concrete, high-impact mutual value creation.',
    icon: HeartHandshake,
    color: 'text-amber-600 bg-amber-50 border-amber-100',
  },
  {
    title: 'Meaningful Recognition',
    desc: 'Acknowledging and honoring the hard-won journeys, resilience, and contributions of entrepreneurs across Bharat and the world.',
    icon: Award,
    color: 'text-rose-600 bg-rose-50 border-rose-100',
  },
  {
    title: 'Unity App Platform',
    desc: 'The digital infrastructure keeping the community connected, active, and collaborating 365 days a year.',
    icon: Smartphone,
    color: 'text-sky-600 bg-sky-50 border-sky-100',
  },
]

// ─── Research Communities Studied ─────────────────────────────────────────
const STUDIED_COMMUNITIES = [
  'TiE',
  'BNI',
  'Rotary',
  'Lions',
  'EO',
  'YPO',
  'Vistage',
  'Round Tables',
]

export function OurStoryClient() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-[#0062D2] selection:text-white font-sans">

      {/* =========================================================================
          1. HERO SECTION (MASTER BANNER)
          ========================================================================= */}
      <section className="relative overflow-hidden border-b border-slate-200/90 bg-[#FAFBFD] pt-6 sm:pt-10 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium tracking-wide mb-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <ChevronRight className="size-3.5 text-slate-400" />
            <span className="text-slate-600">About</span>
            <ChevronRight className="size-3.5 text-slate-400" />
            <span className="text-[#0062D2] font-semibold">Our Story</span>
          </div>

          {/* Hero Banner Card */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[36px] bg-white border border-slate-200/90 shadow-sm min-h-[500px] lg:min-h-[540px] flex items-center">

            {/* Right Media Background Layer */}
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

              <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white via-white/85 via-30% to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none" />

              {/* Top-Right Script Typography */}
              <div className="absolute top-6 sm:top-8 right-6 sm:right-8 z-20 text-right drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] pointer-events-none select-none">
                <p className="text-xl sm:text-2xl text-white/95 leading-tight" style={{ fontFamily: 'var(--font-script)' }}>
                  From One Observation
                </p>
                <p className="text-2xl sm:text-3xl text-amber-300 font-medium leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  To 1M Possibilities
                </p>
              </div>

              {/* Bottom-Right Frosted Glass Pill */}
              <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-20 pointer-events-none select-none">
                <div className="rounded-xl border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2.5 shadow-lg text-left">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/70">
                    OUR STORY · PEERS GLOBAL
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

                <div className="flex items-center gap-2.5 mb-4">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    OUR STORY
                  </span>
                </div>

                <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-normal text-slate-950 tracking-tight leading-[1.1] mb-3">
                  Our Story
                </h1>

                <p className="text-xl sm:text-2xl text-[#0062D2] font-semibold leading-snug mb-4">
                  It began with one observation, in a hospital corridor.
                </p>

                <div className="space-y-2 text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-8 max-w-lg">
                  <p className="text-slate-800 font-medium">
                    Every organisation has a beginning. Some begin with a business plan. Some begin with an opportunity. Some begin with a problem someone believes can be solved.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500">
                    PEERS GLOBAL began with something more human: an observation about what entrepreneurs go through when they are building their lives and businesses.
                  </p>
                </div>

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

                  <Link
                    href="/the-idea"
                    className="rounded-full border border-slate-300 hover:border-slate-400 bg-white/90 backdrop-blur-sm text-slate-800 px-7 py-3.5 text-sm font-semibold transition-all hover:scale-105 shadow-2xs"
                  >
                    Read The Idea
                  </Link>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          2. BEFORE THERE WAS A COMMUNITY & LEARNING TO BUILD
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2">
                <span className="h-0.5 w-6 bg-[#0062D2]" />
                <span className="text-[#0062D2] text-xs font-bold tracking-[0.2em] uppercase">
                  BEFORE THERE WAS A COMMUNITY
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-slate-900 tracking-tight leading-tight">
                Before there was PEERS GLOBAL, there was an entrepreneur.
              </h2>

              <p className="text-base text-slate-700 leading-relaxed">
                <strong>Dr. Pravin Parmar</strong> describes himself as a first-generation entrepreneur, coming from a farmer family. His journey began in a very different environment from the one in which PEERS GLOBAL operates today:
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs sm:text-sm font-medium text-slate-800">
                <span className="p-2 rounded-xl bg-white border border-slate-200/60">Government-school education</span>
                <span className="p-2 rounded-xl bg-white border border-slate-200/60">English higher studies</span>
                <span className="p-2 rounded-xl bg-white border border-slate-200/60">MCA degree</span>
                <span className="p-2 rounded-xl bg-white border border-slate-200/60">Microsoft &amp; ERP systems</span>
                <span className="p-2 rounded-xl bg-white border border-slate-200/60">Startup entrepreneurship</span>
                <span className="p-2 rounded-xl bg-white border border-slate-200/60">Building, failing &amp; learning</span>
              </div>

              <p className="text-base sm:text-lg font-serif text-[#0062D2] font-semibold italic">
                “The journey was never a straight line. And that became important. Because entrepreneurship itself is rarely a straight line.”
              </p>

              <div className="space-y-3 pt-2">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                  Learning to Build (2011–2016)
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  In 2011, Dr. Pravin started his own venture in information technology. By 2012, he had entered the startup ecosystem more deeply. For a first-generation entrepreneur, many things were new—the compliances, the ecosystem, the structures, and even the meaning of the word <em>startup</em>.
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  He built a cloud-based, mobile-based HRMS product at a time when cloud technology itself was still creating questions and concerns. The product was even designed with Africa in mind. There were struggles. There were lessons. And eventually, the startup was sold. He took an exit.
                </p>
                <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-100 text-xs sm:text-sm text-blue-900 font-semibold">
                  For many entrepreneurs, an exit can look like an ending. For Dr. Pravin, it became another beginning.
                </div>
              </div>
            </div>

            {/* Right Card: The Unpublished Story */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="relative z-10 space-y-4">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-amber-300 block">
                    THE TURNING POINT
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal leading-snug">
                    The story nobody would publish.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    After leaving the venture, there was another thought: <em>What next?</em> As a first-generation entrepreneur, he wanted his story to be heard. He approached media platforms including Times of India and Inc42, but the story was not published.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    That experience created another realization: perhaps the problem was not that entrepreneurs lacked stories; perhaps the problem was that many stories simply did not have a platform.
                  </p>

                  <div className="p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md">
                    <p className="text-xs text-sky-200 uppercase tracking-wider font-semibold mb-1">
                      VyapaarJagat was born:
                    </p>
                    <p className="text-xs sm:text-sm text-slate-200 font-medium">
                      Every story is important. Every story is unique. Every story matters.
                    </p>
                  </div>
                </div>
              </div>

              {/* Krina's Story of Recognition */}
              <div className="p-6 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs space-y-3">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#0062D2] block">
                  WHEN RECOGNITION BECAME SOMETHING MORE
                </span>
                <h4 className="font-serif text-lg font-bold text-slate-900">
                  Ahmedabad 2020: The Krina Moment
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  During a VyapaarJagat Growth Show in Ahmedabad, a woman named Krina was recognised with an award. The recognition meant something beyond the stage—it changed how she was perceived within her family and community. She cried on stage.
                </p>
                <p className="text-xs sm:text-sm text-slate-800 font-medium italic">
                  “Recognition is not merely about giving an award. It gives a person something much deeper: the feeling that their effort has been seen.”
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          3. THE QUESTION CHANGED & STUDYING WORLD COMMUNITIES
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-0.5 w-6 bg-[#0062D2]" />
              <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
                DEEP RESEARCH &amp; EVOLUTION
              </span>
              <span className="h-0.5 w-6 bg-[#0062D2]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight leading-tight mb-4">
              The question changed.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Entrepreneurs did not only need visibility. They needed one another. They needed learning, experience, trusted relationships, and collaboration.
            </p>
          </div>

          {/* Question Shift Card */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
            <div className="p-6 rounded-3xl bg-slate-100/90 border border-slate-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Old Question</span>
              <p className="font-serif text-xl font-bold text-slate-800">
                “How do we connect entrepreneurs?”
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-blue-50 border border-blue-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0062D2] block mb-1">The Real Question</span>
              <p className="font-serif text-xl font-bold text-[#0062D2]">
                “How do we help entrepreneurs grow through one another?”
              </p>
            </div>
          </div>

          {/* Looking at the World of Communities */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-sm max-w-5xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2] block mb-3 text-center sm:text-left">
              LOOKING AT THE WORLD OF COMMUNITIES
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 font-normal leading-tight mb-4 text-center sm:text-left">
              Understanding what worked, and where the gaps were.
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              Before creating PEERS GLOBAL, Dr. Pravin studied and experienced different entrepreneurial and professional communities across India and globally:
            </p>

            <div className="flex flex-wrap gap-2.5 mb-8">
              {STUDIED_COMMUNITIES.map((c) => (
                <span key={c} className="px-4 py-2 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-bold text-slate-800">
                  {c}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
              <div className="p-3.5 rounded-2xl bg-[#FAFBFD] border border-slate-100">
                <p className="font-bold text-slate-900 mb-1">Not a Copy</p>
                <p className="text-slate-500 text-xs">The purpose was not to copy existing models, but to understand what entrepreneurs truly valued.</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#FAFBFD] border border-slate-100">
                <p className="font-bold text-slate-900 mb-1">Beyond Contacts</p>
                <p className="text-slate-500 text-xs">Understanding what created lasting relationships after business cards were exchanged.</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#FAFBFD] border border-slate-100">
                <p className="font-bold text-slate-900 mb-1">A Different Universe</p>
                <p className="text-slate-500 text-xs">A distinct community built specifically for governed, deep collaboration.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. BEYOND NETWORKING & THE 3 DIMENSIONS (LSR)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16">

            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2">
                <span className="h-0.5 w-6 bg-[#0062D2]" />
                <span className="text-[#0062D2] text-xs font-bold tracking-[0.2em] uppercase">
                  BEYOND NETWORKING
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight leading-tight">
                Networking connects people. But connection alone does not create value.
              </h2>

              <p className="text-base text-slate-700 leading-relaxed">
                The deeper opportunity is what happens after the introduction:
              </p>

              <div className="grid grid-cols-2 gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">A real conversation</div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">A shared experience</div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">A trusted referral</div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">A joint solution</div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">A strategic partnership</div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">A senior mentor</div>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                A person who remembers your problem because they have faced something similar. That is collaboration.
              </p>
            </div>

            {/* Right Card: Why A Community? */}
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#061836] text-white shadow-xl space-y-5">
                <span className="text-[10px] uppercase font-bold tracking-widest text-sky-400 block">
                  WHY A COMMUNITY?
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal leading-snug">
                  Continuity creates trust.
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  A platform can connect people. An event can bring people into a room. A network can expand your contacts. <strong className="text-white">But a community creates continuity.</strong>
                </p>

                <div className="space-y-2 text-xs sm:text-sm text-slate-200">
                  <p>• People meet again on a disciplined rhythm.</p>
                  <p>• They learn one another&apos;s stories and businesses.</p>
                  <p>• Trust develops naturally over time.</p>
                  <p>• They discover where they can contribute and collaborate.</p>
                </div>

                <div className="pt-4 border-t border-slate-700">
                  <p className="font-serif text-base sm:text-lg text-amber-300 font-medium italic">
                    “A group of people who genuinely want to see one another grow.”
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* 3 Things: LSR Framework */}
          <div className="max-w-5xl mx-auto text-center space-y-4 mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0062D2] block">
              THE THREE THINGS AN ENTREPRENEUR MUST KEEP GROWING
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-normal text-slate-900">
              LSR — Learning. Sharing. Relationships.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-7 rounded-3xl bg-[#FAFBFD] border border-slate-200 text-center">
              <div className="size-12 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center mx-auto mb-4">
                <BookOpen className="size-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Learning</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">Because the world keeps changing.</p>
            </div>

            <div className="p-7 rounded-3xl bg-[#FAFBFD] border border-slate-200 text-center">
              <div className="size-12 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="size-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Sharing</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">Because experience becomes more valuable when it moves from one person to another.</p>
            </div>

            <div className="p-7 rounded-3xl bg-[#FAFBFD] border border-slate-200 text-center">
              <div className="size-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <HeartHandshake className="size-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Relationships</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">Because sustainable growth is rarely built by one person in isolation.</p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          5. WHAT WE BUILT (THE COMPLETE ARCHITECTURE)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-0.5 w-6 bg-[#0062D2]" />
              <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
                WHAT WE BUILT
              </span>
              <span className="h-0.5 w-6 bg-[#0062D2]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight leading-tight mb-4">
              The idea gradually became an architecture.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              The objective was never to create more activity for entrepreneurs. It was to create more meaningful possibilities between entrepreneurs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {ARCHITECTURE_ELEMENTS.map((elem) => {
              const Icon = elem.icon
              return (
                <div key={elem.title} className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className={`size-11 rounded-2xl ${elem.color} flex items-center justify-center mb-4`}>
                      <Icon className="size-5" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">{elem.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{elem.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Progression Ladder */}
          <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 text-center shadow-sm">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#0062D2] block mb-2">
              FROM CONNECTION TO COLLABORATION
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mb-4">
              The 5-Stage Human Progression
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold">
              <span className="px-4 py-2 rounded-full bg-slate-100 text-slate-800">Connection</span>
              <ArrowRight className="size-4 text-slate-400" />
              <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-800">Trust</span>
              <ArrowRight className="size-4 text-slate-400" />
              <span className="px-4 py-2 rounded-full bg-violet-50 text-violet-800">Relationship</span>
              <ArrowRight className="size-4 text-slate-400" />
              <span className="px-4 py-2 rounded-full bg-emerald-50 text-emerald-800">Collaboration</span>
              <ArrowRight className="size-4 text-slate-400" />
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm">Impact</span>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          6. EVOLUTION TIMELINE (DATED MILESTONES)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-0.5 w-6 bg-[#0062D2]" />
              <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
                MILESTONES OF OUR JOURNEY
              </span>
              <span className="h-0.5 w-6 bg-[#0062D2]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight leading-tight">
              How the community evolved
            </h2>
          </div>

          <div className="relative border-l-2 border-blue-200 ml-4 sm:ml-8 space-y-10">
            {TIMELINE.map((item) => (
              <div key={item.title} className="relative pl-6 sm:pl-8 group">
                <div className="absolute -left-[9px] top-1.5 size-4 rounded-full bg-[#0062D2] border-4 border-white shadow-xs group-hover:scale-125 transition-transform" />
                <span className="text-xs font-bold font-mono text-[#0062D2] bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-2">
                  {item.year}
                </span>
                <h3 className="font-serif font-bold text-slate-900 text-lg sm:text-xl leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1.5 font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          7. WHERE WE ARE NOW & WHAT WE ARE BUILDING TOWARD
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">

            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2">
                <span className="h-0.5 w-6 bg-[#0062D2]" />
                <span className="text-[#0062D2] text-xs font-bold tracking-[0.2em] uppercase">
                  WHERE WE ARE NOW
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight leading-tight">
                A leadership organisation built around entrepreneurs and their relationships.
              </h2>

              <p className="text-base text-slate-700 leading-relaxed">
                The architecture now includes Circles, LSR, Inner Boards, Collaboration, Recognition, Impact, Leadership, and Unity.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                But architecture is not an achievement by itself. <strong className="text-slate-900">The real measure is what happens between people:</strong>
              </p>

              <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                <p>• A conversation that changes a decision.</p>
                <p>• An introduction that creates an opportunity.</p>
                <p>• An experience that prevents someone from repeating a mistake.</p>
                <p>• A relationship that continues beyond business.</p>
                <p>• A contribution that helps another entrepreneur move forward.</p>
              </div>

              <p className="font-serif text-base text-[#0062D2] font-semibold italic pt-2">
                “That is where the story is actually being written.”
              </p>
            </div>

            {/* Right: What Has Not Changed */}
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-md space-y-5">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#0062D2] block">
                  WHAT HAS NOT CHANGED
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 font-normal leading-snug">
                  The belief at the very heart of everything.
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The organisation has changed. Technology has changed. The structure has evolved. The vocabulary has grown. The vision has become larger.
                </p>

                <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200">
                  <p className="font-serif text-xl sm:text-2xl text-blue-950 font-bold leading-snug">
                    “Entrepreneurs should not have to build alone.”
                  </p>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed italic">
                  That belief began as an observation. It became a question. The question became research. The research became an idea. The idea became a community. The community became an organisation. And the organisation continues to evolve.
                </p>
              </div>
            </div>

          </div>

          {/* 1 Million Mission Callout */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#020817] via-[#071a3d] to-[#06132d] text-white shadow-xl max-w-5xl mx-auto text-center space-y-5">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-300 block">
              WHAT WE ARE BUILDING TOWARD
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight">
              1M+ entrepreneurs to impact by 2030.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
              The number represents more than scale. It represents the possibility of multiplying the effect of collaboration: one entrepreneur helps another, experience moves, relationships expand, and impact travels beyond the original conversation.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          8. FROM ONE OBSERVATION TO ONE MILLION POSSIBILITIES & YOUR CHAPTER
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

            {/* Left Column — Narrative Progression */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-0.5 w-6 bg-[#0062D2]" />
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#0062D2]">
                  FROM ONE OBSERVATION TO ONE MILLION POSSIBILITIES
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-slate-900 tracking-tight leading-tight">
                From One Observation to One Million Possibilities
              </h2>

              {/* Stepping progression with visual connector */}
              <div className="space-y-0 pl-1">
                {[
                  { text: 'It began with one observation.', dot: 'bg-slate-400' },
                  { text: 'It became an idea.', dot: 'bg-slate-500' },
                  { text: 'The idea became a community.', dot: 'bg-[#0062D2]' },
                  { text: 'And the community now carries an ambition:', dot: 'bg-[#0062D2]' },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 relative">
                    <div className="flex flex-col items-center shrink-0">
                      <div className={`size-2.5 rounded-full ${step.dot} mt-2`} />
                      {i < 3 && <div className="w-px h-6 bg-slate-200" />}
                    </div>
                    <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed pb-1">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pl-7">
                <p className="font-serif text-xl sm:text-2xl text-[#0062D2] font-bold leading-snug">
                  To impact 1M+ entrepreneurs by 2030.
                </p>
              </div>

              <div className="pt-2 space-y-2">
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  But the journey is not really about a number.
                </p>
                <p className="text-sm sm:text-base text-slate-900 font-bold leading-relaxed">
                  It is about the people behind the number.
                </p>
              </div>
            </div>

            {/* Right Column — Dark Card with Entrepreneur Types */}
            <div className="lg:col-span-6">
              <div className="relative p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-[#061836] to-[#0F2550] text-white shadow-xl overflow-hidden h-full flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-400/[0.08] rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10 space-y-5">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-amber-300 block">
                    THE PEOPLE BEHIND THE NUMBER
                  </span>

                  <div className="space-y-2.5">
                    {[
                      'The entrepreneur who learns.',
                      'The entrepreneur who shares.',
                      'The entrepreneur who helps.',
                      'The entrepreneur who collaborates.',
                      'The entrepreneur who becomes a Peer.',
                      'The entrepreneur who, one day, becomes the person someone else can depend on.',
                    ].map((line, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="text-xs font-mono font-bold text-sky-400 mt-0.5 shrink-0 w-5 text-right">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <p className={`text-xs sm:text-sm leading-relaxed ${i === 5 ? 'text-white font-semibold' : 'text-slate-300'}`}>
                          {line}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 pt-6 mt-6 border-t border-white/10">
                  <p className="font-serif text-base sm:text-lg text-sky-200 font-semibold leading-snug italic">
                    &ldquo;That is our story. And it is still being written.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* The Story Belongs To Everyone Who Contributed */}
          <div className="pt-8 border-t border-slate-100 space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-slate-500 block">
              THE STORY IS STILL BEING WRITTEN
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 font-normal">
              It belongs to everyone who has contributed.
            </h3>
            <div className="space-y-2 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
              <p>Every entrepreneur who shared an experience. Every Peer who made an introduction.</p>
              <p>Every person who helped another person. Every relationship that became stronger.</p>
              <p>Every collaboration that created something new.</p>
              <p>Every entrepreneur who found a little more confidence because somebody stood beside them.</p>
            </div>
          </div>

          {/* Your Chapter Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFBFD] border border-slate-200 text-left space-y-4">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#0062D2] block">
              YOUR CHAPTER CAN BE DIFFERENT
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 font-normal leading-snug">
              You do not have to arrive with the whole story already written.
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              PEERS GLOBAL was not built on the assumption that every entrepreneur needs the same thing. It was built on the belief that every entrepreneur has something to learn, something to share, something to contribute—and something they can discover through the right relationships.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              You may arrive looking for business, experience, learning, or contribution. Whatever brings you here:
            </p>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm font-semibold">
              The next chapter is always waiting to be written. And perhaps the right people can help you write it.
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="https://unity.peersglobal.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-7 py-3 text-xs sm:text-sm font-semibold shadow-sm inline-flex items-center gap-2 transition-all"
              >
                <span>Join in the Unity App</span>
                <ArrowRight className="size-4" />
              </a>
              <Link
                href="/founder"
                className="rounded-full border border-slate-300 bg-white hover:border-slate-400 text-slate-700 px-7 py-3 text-xs sm:text-sm font-semibold inline-flex items-center gap-2 transition-all"
              >
                Discover Dr. Pravin Parmar
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          9. CLOSING SECTION
          ========================================================================= */}
      <ClosingCtaSection
        eyebrow="OUR STORY"
        title="It began with one observation. It became an idea. The idea became a community."
        subtitle="Peers are Partners in Business and Friends in Life."
        description="Designed in Bharat. Built for the World. Download the Unity App and begin your chapter."
        primaryButtonText="DOWNLOAD THE UNITY APP"
        primaryButtonHref="https://unity.peersglobal.com"
        secondaryButtonText="DISCOVER DR. PRAVIN PARMAR"
        secondaryButtonHref="/founder"
        secondaryButtonIcon={<ChevronRight className="size-4" />}
      />

    </div>
  )
}
