'use client'

import React from 'react'
import Link from 'next/link'
import { GalaxyButton } from '@/components/ui/galaxy-button'
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
  Check,
  Compass,
  Briefcase,
  HelpCircle,
  Flag,
  Handshake,
} from 'lucide-react'
import { ClosingCtaSection } from '@/components/site/ClosingCtaSection'

// ─── Verified Milestones Timeline ───────────────────────────────────────────
const VERIFIED_TIMELINE = [
  {
    tag: 'THE BEGINNING',
    title: 'The Observation in the Corridor',
    desc: '[Verified milestone and significance]',
    highlight: 'It began with an observation',
  },
  {
    tag: 'THE FIRST STEP',
    title: 'Early Steps of Entrepreneurship',
    desc: '[Verified milestone and significance]',
    highlight: 'Taking risks and building foundations',
  },
  {
    tag: 'THE IDEA TAKES SHAPE',
    title: 'The Story Nobody Would Publish',
    desc: '[Verified milestone and significance]',
    highlight: 'Human understanding over headlines',
  },
  {
    tag: 'THE COMMUNITY BEGINS',
    title: 'Why a Community & Why Peers',
    desc: '[Verified milestone and significance]',
    highlight: 'Moving beyond transactional networking',
  },
  {
    tag: 'A NEW STAGE',
    title: 'What We Built: Governed Circles',
    desc: '[Verified milestone and significance]',
    highlight: 'Structures for genuine collaboration',
  },
  {
    tag: 'THE ECOSYSTEM EXPANDS',
    title: 'Unity App & Pan-Bharat Connect',
    desc: '[Verified milestone and significance]',
    highlight: 'Connecting across geography & industry',
  },
  {
    tag: 'TODAY',
    title: '1 Million+ Entrepreneurs to Impact by 2030',
    desc: '[Verified current milestone]',
    highlight: '1 Action = 1 Life Impacted',
  },
]

export function OurStoryClient() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0f131a] selection:bg-[#1D4ED8] selection:text-white font-sans">
      
      {/* Global Gradient Definition for Brand Icons */}
      <svg width="0" height="0" className="absolute pointer-events-none" style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="storyBrandGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#E11D48" />
          </linearGradient>
          <linearGradient id="storyBrandGradLight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#E11D48" />
          </linearGradient>
        </defs>
      </svg>

      {/* =========================================================================
          1. HERO SECTION (MASTER HOMEPAGE HERO STYLE WITH BACKGROUND VIDEO)
          ========================================================================= */}
      <section id="our-story-hero" className="relative overflow-hidden bg-[#040F24] text-white border-b border-slate-800">
        {/* Background video layer */}
        <video
          className="absolute inset-0 size-full object-cover opacity-60"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
          poster="/images/circles-hero-new.jpg"
          src="/videos/homepage-hero-bg.mp4"
        />
        {/* Subtle, crisp gradient scrim overlay matching homepage/the-idea */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(100deg,rgba(2,8,23,0.72)_0%,rgba(4,15,36,0.52)_45%,rgba(4,15,36,0.32)_100%)] pointer-events-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-8 sm:py-12">
            
            {/* Left Content Area */}
            <div className="lg:col-span-8 max-w-3xl space-y-4 sm:space-y-5">
              {/* Breadcrumbs */}
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium tracking-wide">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <ChevronRight className="size-3.5 text-slate-400" />
                <span className="bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent font-semibold">Our Story</span>
              </div>

              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-900/60 via-indigo-900/50 to-rose-900/60 backdrop-blur-md border border-white/20 shadow-lg">
                <span className="inline-block size-2 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] animate-pulse" />
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] uppercase bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">
                  OUR STORY &amp; FOUNDATION
                </span>
              </div>

              {/* H1 Heading */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-semibold text-white tracking-tight leading-[1.14]">
                  It began with one observation,{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]">
                    in a hospital corridor.
                  </span>
                </h1>
                <p className="text-base sm:text-xl text-slate-200 font-medium leading-relaxed">
                  Before there was a community, there was a question.
                </p>
              </div>

              {/* Story Intro Quote */}
              <p className="text-sm sm:text-base text-white/95 font-medium italic border-l-2 border-[#E11D48] pl-3.5 py-0.5 max-w-2xl">
                &ldquo;A question about what happens to an entrepreneur when the business journey becomes difficult—and there is nobody around who truly understands what that journey feels like.&rdquo;
              </p>

              {/* Key Premise Box */}
              <div className="space-y-1.5 text-xs sm:text-sm text-slate-300 font-light">
                <p>PEERS GLOBAL did not begin with a website. It did not begin with a membership plan.</p>
                <p className="text-white font-semibold">
                  It began with an observation:{' '}
                  <span className="bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent font-bold">
                    Entrepreneurs should not have to build alone.
                  </span>
                </p>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <GalaxyButton
                  href="#before-there-was-a-community"
                  size="default"
                  className="uppercase tracking-wider font-semibold shadow-lg"
                >
                  Read Full Story
                </GalaxyButton>

                <GalaxyButton
                  href="/the-idea"
                  variant="transparent"
                  size="default"
                  className="font-medium text-white border-white/30 hover:border-white/60"
                >
                  Discover The Idea
                </GalaxyButton>
              </div>

              {/* Stat Band */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full max-w-xl pt-6 border-t border-white/20">
                {[
                  {
                    svgPath: (
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    ),
                    value: 'Trust First',
                    label: 'Genesis in the Corridor',
                  },
                  {
                    svgPath: (
                      <>
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </>
                    ),
                    value: 'Relationship',
                    label: 'Beyond Transactions',
                  },
                  {
                    svgPath: (
                      <>
                        <circle cx="12" cy="12" r="10" />
                        <circle cx="12" cy="12" r="6" />
                        <circle cx="12" cy="12" r="2" />
                      </>
                    ),
                    value: '1M Mission',
                    label: 'Life Impact by 2030',
                  },
                ].map((s, idx) => {
                  return (
                    <div
                      key={s.label}
                      className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 backdrop-blur-xs transition-all group"
                    >
                      <div className="size-10 rounded-xl bg-gradient-to-br from-blue-900/40 to-rose-900/40 border border-white/20 flex items-center justify-center shrink-0 shadow-xs">
                        <svg className="size-5" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <g stroke="url(#storyBrandGrad)">
                            {s.svgPath}
                          </g>
                        </svg>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-bold text-sm sm:text-base text-white tracking-tight leading-tight whitespace-nowrap group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all">
                          {s.value}
                        </div>
                        <div className="text-[11px] text-slate-300 font-medium mt-0.5 leading-snug truncate">
                          {s.label}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right Cursive Script Highlights */}
            <div className="hidden lg:flex lg:col-span-4 flex-col items-end text-right select-none pointer-events-none drop-shadow-xl space-y-1.5">
              <p className="text-2xl sm:text-3xl text-white/80 leading-tight italic font-serif">
                Never Build Alone
              </p>
              <p className="text-3xl sm:text-4xl text-white leading-tight font-bold italic font-serif">
                Partners in Business
              </p>
              <p className="text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] font-bold italic font-serif leading-tight">
                Friends in Life
              </p>
            </div>

          </div>
        </div>
      </section>



      {/* =========================================================================
          2. BEFORE THERE WAS A COMMUNITY
          ========================================================================= */}
      <section id="before-there-was-a-community" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#FAFBFD] to-white border-b border-cool-grey-250/80">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  BEFORE THERE WAS A COMMUNITY
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0f131a] tracking-tight leading-[1.15]">
                <span>Every entrepreneur begins somewhere.</span>{' '}
                <span className="brand-gradient-text block sm:inline">With an idea, a decision, a risk.</span>
              </h2>

              <p className="text-base sm:text-lg text-cool-grey-600 leading-relaxed font-normal">
                With a first customer. A first employee. A first success. And, sometimes, a moment when everything becomes uncertain.
              </p>

              <div className="space-y-3 pt-1">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  The entrepreneurial journey is often described through its visible outcomes:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {['Growth.', 'Revenue.', 'Recognition.', 'Expansion.'].map((o) => (
                    <div key={o} className="p-3.5 rounded-2xl bg-white border border-cool-grey-250 text-center font-bold text-sm text-[#0f131a] shadow-xs">
                      {o}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <p className="text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">
                  But there is another side of the journey that is less visible:
                </p>
                <div className="space-y-2.5">
                  <div className="p-4 rounded-2xl bg-white border border-cool-grey-250 flex items-start gap-3.5 shadow-xs hover:border-blue-200 transition-all">
                    <div className="size-2.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#4F46E5] mt-1.5 shrink-0 shadow-xs" />
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-semibold">
                      The questions. The responsibility. The uncertainty.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-cool-grey-250 flex items-start gap-3.5 shadow-xs hover:border-indigo-200 transition-all">
                    <div className="size-2.5 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#E11D48] mt-1.5 shrink-0 shadow-xs" />
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-semibold">
                      The decisions that cannot easily be explained to someone who has never carried them.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-cool-grey-250 flex items-start gap-3.5 shadow-xs hover:border-rose-200 transition-all">
                    <div className="size-2.5 rounded-full bg-gradient-to-r from-[#E11D48] to-[#FB7185] mt-1.5 shrink-0 shadow-xs" />
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-semibold">
                      And the feeling that, sometimes, you are carrying all of it alone.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column Question Highlight */}
            <div className="lg:col-span-5 space-y-6">
              <div
                className="p-8 sm:p-10 rounded-3xl text-white shadow-2xl space-y-6 border border-slate-800 relative overflow-hidden group"
                style={{
                  background: 'linear-gradient(145deg, #030712 0%, #071533 45%, #0B1B3D 75%, #180720 100%)',
                }}
              >
                {/* Ambient Radial Lighting Accents */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 size-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20 backdrop-blur-md shadow-md">
                  <svg className="size-6 shrink-0" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <g stroke="url(#storyBrandGradLight)">
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                      <path d="M5 3v4" />
                      <path d="M19 17v4" />
                      <path d="M3 5h4" />
                      <path d="M17 19h4" />
                    </g>
                  </svg>
                </div>

                <div className="relative z-10 space-y-3">
                  <span className="text-xs font-mono uppercase tracking-widest bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent font-extrabold block">
                    THE STARTING POINT
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold leading-snug">
                    <span className="text-white">What if entrepreneurs had a </span>
                    <span className="bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent font-bold">
                      community?
                    </span>
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                    Built not merely to connect them, but to help them build meaningful relationships with one another.
                  </p>
                </div>

                <div className="relative z-10 pt-4 border-t border-white/15 flex items-center gap-3">
                  <span className="size-2 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] animate-pulse" />
                  <span className="text-xs font-medium tracking-wide bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">
                    The question that sparked PEERS GLOBAL
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          3. THE STORY NOBODY WOULD PUBLISH & WHY A COMMUNITY?
          ========================================================================= */}
      <section id="story-nobody-would-publish" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white border-b border-cool-grey-250/80">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Box: The Story Nobody Would Publish */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  THE REAL HUMAN STORIES
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f131a] tracking-tight leading-tight">
                The Story Nobody Would Publish
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-cool-grey-600 font-normal leading-relaxed">
                <p>
                  Before PEERS GLOBAL, there was another part of the journey. The experience of building. Learning. Taking risks. Creating something.
                </p>
                <p>
                  And discovering that the stories behind entrepreneurship are often more human than the headlines that eventually describe them.
                </p>
                <p>
                  There were stories worth telling. But not every story found a place in the traditional media narrative.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-[#FAFBFD] border border-cool-grey-250 shadow-xs space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                  THAT EXPERIENCE CREATED ANOTHER REALISATION:
                </div>
                <p className="text-[#0f131a] font-medium text-base">
                  Entrepreneurs did not only need visibility. They needed understanding.
                </p>
                <p className="text-xs sm:text-sm text-cool-grey-600 font-normal leading-relaxed">
                  And perhaps they needed a place where their experience could be shared with people who understood the journey from the inside. That thought stayed.
                </p>
              </div>
            </div>

            {/* Right Box: Why A Community? */}
            <div id="why-a-community" className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  BEYOND PLATFORMS
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f131a] tracking-tight leading-tight">
                Why A Community?
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-cool-grey-600 font-normal leading-relaxed">
                <p>
                  A platform could have been easier. A media company could have been easier. A business network could have been easier.
                </p>
                <p className="font-bold text-[#0f131a]">
                  But connection alone was not the answer. The deeper opportunity was relationship.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {[
                  'Knowing someone\'s name is not the same as knowing their journey.',
                  'Meeting someone is not the same as trusting them.',
                  'Networking is not the same as collaboration.',
                  'And collaboration becomes meaningful only when people are willing to contribute to one another.',
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#FAFBFD] border border-cool-grey-250 shadow-xs text-xs sm:text-sm text-slate-700 font-medium">
                    {item}
                  </div>
                ))}
              </div>

              <div
                className="p-6 rounded-3xl text-white space-y-3 shadow-xl border border-slate-800/80 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #030712 0%, #07132B 40%, #0B1120 75%, #150618 100%)',
                }}
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/15 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-rose-600/15 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10 text-xs font-mono uppercase tracking-widest bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent font-extrabold">
                  THE EVOLUTIONARY DIRECTION
                </div>

                <div className="relative z-10 flex flex-wrap items-center gap-2 text-sm sm:text-base font-bold text-slate-100">
                  <span className="text-white">Connection</span>
                  <span className="text-[#1D4ED8]">→</span>
                  <span className="text-white">Relationship</span>
                  <span className="text-indigo-400">→</span>
                  <span className="text-white">Collaboration</span>
                  <span className="text-[#E11D48]">→</span>
                  <span className="bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent font-extrabold">
                    Impact
                  </span>
                </div>

                <p className="relative z-10 text-xs text-slate-300 font-light">
                  That became the direction.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          4. WHY PEERS? & WHAT WE BUILT
          ========================================================================= */}
      <section id="why-peers" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#FAFBFD] to-white border-b border-cool-grey-250/80">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left: Why Peers? */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  THE WORD MATTERED
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f131a] tracking-tight leading-tight">
                Why Peers?
              </h2>

              <div className="flex flex-wrap gap-2">
                {['Not customers.', 'Not leads.', 'Not prospects.', 'Not contacts.'].map((w) => (
                  <span key={w} className="line-through text-slate-400 bg-white border border-slate-200 px-3.5 py-1.5 rounded-full text-xs font-medium">
                    {w}
                  </span>
                ))}
                <span className="text-white font-bold bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] px-4 py-1.5 rounded-full text-xs shadow-xs">
                  Peers.
                </span>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-cool-grey-250 shadow-xs space-y-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                <p>• People building businesses.</p>
                <p>• People carrying responsibility.</p>
                <p>• People learning.</p>
                <p>• People contributing.</p>
                <p>• People capable of helping one another.</p>
              </div>

              <p className="text-sm sm:text-base text-slate-900 font-semibold italic border-l-2 border-[#E11D48] pl-3.5 py-1">
                &ldquo;A Peer is not defined by what they can sell you. A Peer is defined by the relationship you can build together.&rdquo;
              </p>

              <p className="text-xs sm:text-sm text-cool-grey-600 font-normal">
                That became part of the language—and eventually part of the culture.
              </p>
            </div>

            {/* Right: What We Built */}
            <div id="what-we-built" className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  THE ARCHITECTURE
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f131a] tracking-tight leading-tight">
                What We Built
              </h2>

              <p className="text-base text-cool-grey-600 font-normal">
                The idea gradually became a structure:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  { label: 'Circles', desc: 'Created the environment for meaningful relationships.' },
                  { label: 'Industry & Purpose', desc: 'Brought people together around shared context.' },
                  { label: 'Collaboration', desc: 'Moved the community beyond networking.' },
                  { label: 'Learning', desc: 'Allowed experience to travel from one entrepreneur to another.' },
                  { label: 'Leadership', desc: 'Created opportunities for contribution.' },
                  { label: 'Impact', desc: 'Gave contribution a visible purpose.' },
                  { label: 'Unity App', desc: 'Brought the community into everyday life.' },
                  { label: 'Wider Ecosystem', desc: 'Created possibilities beyond a single meeting or a single Circle.' },
                ].map((item) => (
                  <div key={item.label} className="p-4 rounded-2xl bg-white border border-cool-grey-250 shadow-xs hover:shadow-md hover:border-blue-200 transition-all space-y-1 group">
                    <div className="inline-block text-xs font-bold uppercase tracking-wider brand-gradient-text">
                      {item.label}
                    </div>
                    <div className="text-xs text-slate-600 font-medium leading-relaxed">{item.desc}</div>
                  </div>
                ))}
              </div>

              <div
                className="p-6 rounded-3xl text-white space-y-3 shadow-xl border border-slate-800/80 relative overflow-hidden mt-4"
                style={{
                  background: 'linear-gradient(135deg, #030712 0%, #07132B 40%, #0B1120 75%, #150618 100%)',
                }}
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/15 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-rose-600/15 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10 text-xs font-mono uppercase tracking-widest bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent font-extrabold">
                  OUR FOUNDATIONAL OBJECTIVE
                </div>

                <p className="relative z-10 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  The objective was never simply to create a larger room. It was to create a better reason for people to stay connected after they left the room.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          5. THE JOURNEY SO FAR (TIMELINE)
          ========================================================================= */}
      <section id="journey-so-far" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white border-b border-cool-grey-250/80">
        <div className="max-w-7xl mx-auto space-y-14">
          
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                ACCURATE MEMORY &amp; MILESTONES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-950 tracking-tight leading-tight">
              The Journey So Far
            </h2>
            <p className="text-sm sm:text-base text-cool-grey-600 font-normal leading-relaxed">
              A story becomes meaningful when it can be remembered accurately. That is why the PEERS GLOBAL story should be told through a dated timeline—not reconstructed later from memory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {VERIFIED_TIMELINE.map((item, idx) => (
              <div
                key={item.tag}
                className="animated-glow-card group !rounded-3xl cursor-pointer shadow-xs hover:shadow-xl transition-all"
                tabIndex={0}
                role="article"
              >
                <svg className="animated-border-svg !rounded-3xl" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id={`timelineGrad-${idx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#1D4ED8" />
                      <stop offset="100%" stopColor="#E11D48" />
                    </linearGradient>
                  </defs>
                  <path
                    className={`animated-border-path ${idx % 2 === 1 ? 'animated-border-path-2' : ''}`}
                    style={{ stroke: `url(#timelineGrad-${idx})` }}
                    d="M 0.8 6 Q 0.8 0.8 6 0.8 L 94 0.8 Q 99.2 0.8 99.2 6 L 99.2 94 Q 99.2 99.2 94 99.2 L 6 99.2 Q 0.8 99.2 0.8 94 Z"
                  />
                </svg>

                <div className="relative z-10 flex flex-col justify-between p-7 sm:p-8 bg-white border border-slate-200/80 !rounded-[calc(1.5rem-1.5px)] h-full space-y-6 shadow-2xs">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3.5">
                      <span className="text-[11px] font-mono font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full bg-gradient-to-r from-blue-50 to-rose-50 border border-slate-200/80 brand-gradient-text shadow-2xs">
                        {item.tag}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        MILESTONE #{String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Title & Desc */}
                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-950 group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-cool-grey-600 font-normal leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Highlight */}
                  <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-semibold group-hover:brand-gradient-text text-slate-700 transition-colors">
                      <span className="size-2 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] shrink-0" />
                      <span className="brand-gradient-text font-bold">{item.highlight}</span>
                    </div>
                    <ChevronRight className="size-4 text-slate-400 group-hover:text-[#E11D48] group-hover:translate-x-1.5 transition-all duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50/50 via-white to-rose-50/50 border border-slate-200/90 shadow-2xs text-center">
            <span className="text-xs font-mono font-bold tracking-wider brand-gradient-text uppercase">
              [ALL DATES, MILESTONES AND CLAIMS TO BE VERIFIED BEFORE PUBLICATION]
            </span>
          </div>

        </div>
      </section>

      {/* =========================================================================
          6. WHERE WE ARE NOW & WHAT WE ARE BUILDING TOWARD
          ========================================================================= */}
      <section id="what-we-are-building-toward" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#FAFBFD] to-white border-b border-cool-grey-250/80">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Where We Are Now */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  CURRENT REALITY
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f131a] tracking-tight leading-tight">
                Where We Are Now
              </h2>

              <p className="text-base text-cool-grey-600 font-normal leading-relaxed">
                PEERS GLOBAL has grown from an idea about relationships into a wider community and ecosystem:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs font-semibold text-slate-800">
                <div className="p-3 rounded-2xl bg-white border border-cool-grey-250 text-center">There are Circles.</div>
                <div className="p-3 rounded-2xl bg-white border border-cool-grey-250 text-center">There are Peers.</div>
                <div className="p-3 rounded-2xl bg-white border border-cool-grey-250 text-center">There are leaders.</div>
                <div className="p-3 rounded-2xl bg-white border border-cool-grey-250 text-center">There are collaborations.</div>
                <div className="p-3 rounded-2xl bg-white border border-cool-grey-250 text-center">There are stories.</div>
                <div className="p-3 rounded-2xl bg-white border border-cool-grey-250 text-center">There are initiatives.</div>
                <div className="p-3 rounded-2xl bg-white border border-cool-grey-250 text-center">Impact system.</div>
                <div className="p-3 rounded-2xl bg-white border border-cool-grey-250 text-center font-bold brand-gradient-text">Connecting beyond.</div>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-cool-grey-250 shadow-xs space-y-3">
                <p className="font-bold text-[#0f131a] text-base">
                  But growth is not the most important part of the story.
                </p>
                <p className="text-slate-700 text-sm font-medium">
                  The important question remains: <span className="brand-gradient-text font-bold">Are the relationships becoming more meaningful?</span>
                </p>
                <p className="text-xs sm:text-sm text-cool-grey-600 font-normal leading-relaxed">
                  Because the purpose was never simply to build a bigger community. It was to build a community in which entrepreneurs could experience what becomes possible when they stop building alone.
                </p>
              </div>
            </div>

            {/* What We Are Building Toward */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  THE HORIZON
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f131a] tracking-tight leading-tight">
                What We Are Building Toward
              </h2>

              <p className="text-base text-cool-grey-600 font-normal leading-relaxed">
                The destination is larger than the organisation itself. It is a world in which entrepreneurs can find people who understand the journey:
              </p>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                <div className="p-3.5 rounded-2xl bg-white border border-cool-grey-250 flex items-center gap-3 shadow-2xs hover:border-blue-200 transition-all">
                  <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <g stroke="url(#storyBrandGrad)">
                      <circle cx="12" cy="12" r="10" />
                      <path d="m9 12 2 2 4-4" />
                    </g>
                  </svg>
                  <span className="font-semibold text-slate-800">Where experience can be shared.</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-cool-grey-250 flex items-center gap-3 shadow-2xs hover:border-blue-200 transition-all">
                  <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <g stroke="url(#storyBrandGrad)">
                      <circle cx="12" cy="12" r="10" />
                      <path d="m9 12 2 2 4-4" />
                    </g>
                  </svg>
                  <span className="font-semibold text-slate-800">Where contribution is recognised.</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-cool-grey-250 flex items-center gap-3 shadow-2xs hover:border-blue-200 transition-all">
                  <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <g stroke="url(#storyBrandGrad)">
                      <circle cx="12" cy="12" r="10" />
                      <path d="m9 12 2 2 4-4" />
                    </g>
                  </svg>
                  <span className="font-semibold text-slate-800">Where collaboration becomes natural.</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-cool-grey-250 flex items-center gap-3 shadow-2xs hover:border-blue-200 transition-all">
                  <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <g stroke="url(#storyBrandGrad)">
                      <circle cx="12" cy="12" r="10" />
                      <path d="m9 12 2 2 4-4" />
                    </g>
                  </svg>
                  <span className="font-semibold text-slate-800">Where one entrepreneur&apos;s action can positively affect another person&apos;s life.</span>
                </div>
              </div>

              {/* 1M Ambition Box */}
              <div
                className="p-6 sm:p-7 rounded-3xl text-white space-y-2.5 shadow-xl border border-slate-800/80 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #030712 0%, #07132B 40%, #0B1120 75%, #150618 100%)',
                }}
              >
                <div className="absolute -right-8 -top-8 w-40 h-40 bg-blue-600/20 rounded-full blur-2xl pointer-events-none" />
                <div className="text-xs font-mono font-bold uppercase tracking-wider brand-gradient-text">
                  1 ACTION = 1 LIFE IMPACTED
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white">
                  1 Million+ Entrepreneurs to Impact by 2030
                </div>
                <p className="text-xs sm:text-sm text-slate-300 font-light">
                  The number matters. But the lives behind the number matter more.
                </p>
              </div>
            </div>

          </div>

          {/* What Has Not Changed */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-cool-grey-250 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                WHAT HAS NOT CHANGED
              </span>
            </div>
            
            <p className="text-sm sm:text-base text-cool-grey-600 font-normal leading-relaxed">
              The structure may evolve. The technology may change. The number of Circles may grow. The ecosystem may become global. New initiatives may emerge.
            </p>

            <div className="p-5 rounded-2xl bg-[#FAFBFD] border border-cool-grey-250 space-y-1.5 border-l-4 border-l-[#E11D48] shadow-xs">
              <p className="text-base sm:text-lg font-bold text-[#0f131a]">
                But the original belief remains.
              </p>
              <p className="text-xl sm:text-2xl font-bold brand-gradient-text">
                Entrepreneurs should not have to build alone.
              </p>
              <p className="text-xs sm:text-sm text-cool-grey-600 font-normal">
                That is still the starting point. And it remains the reason for everything that comes after it.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          7. THE STORY IS STILL BEING WRITTEN (CLOSING CTA BANNER)
          ========================================================================= */}
      <ClosingCtaSection
        eyebrow="THE STORY IS STILL BEING WRITTEN"
        title="PEERS GLOBAL is not a finished story."
        subtitle="And the next chapter may belong to you."
        description="Every Peer who joins adds another chapter. Every relationship creates another possibility. Every collaboration creates another connection. Stop building alone today."
        primaryButtonText="DISCOVER THE IDEA"
        primaryButtonHref="/the-idea"
        secondaryButtonText="EXPLORE CIRCLES"
        secondaryButtonHref="/circles"
      />

    </div>
  )
}
