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
} from 'lucide-react'

// ─── Timeline Milestones ───────────────────────────────────────────────────
const TIMELINE = [
  {
    year: '2011',
    title: 'Learning to Build',
    desc: 'Dr. Pravin started his own venture in information technology and entered the startup ecosystem with a first-generation entrepreneur’s mix of ambition, uncertainty and learning.',
  },
  {
    year: '2012',
    title: 'The Product, The Struggle, The Exit',
    desc: 'A cloud-based HRMS product was built at a time when cloud technology itself still created questions and concerns. There were lessons, struggles, and eventually a decision to move on.',
  },
  {
    year: 'Post-Exit',
    title: 'What Next?',
    desc: 'The turnaround question became clear: what next? And in that moment, the founder began to see that recognition, stories and visibility were not enough without community.',
  },
  {
    year: 'Research Phase',
    title: 'The Question Changed',
    desc: 'The real question became: how do we help entrepreneurs grow through one another? That led to a deeper study of communities, collaboration models and the missing layers between networking and meaningful growth.',
  },
  {
    year: 'Now',
    title: 'The Community Architecture',
    desc: 'PEERS GLOBAL evolved into a leadership organisation built around Circles, LSR, Inner Boards, collaboration, recognition, impact, leadership and Unity.',
  },
]

// ─── What We Built Pillars ──────────────────────────────────────────────────
const PILLARS = [
  {
    title: 'Circles',
    desc: 'Rooms of curated entrepreneurs, strictly category-exclusive (one seat per business sector), meeting on a disciplined monthly rhythm.',
    icon: Users,
    color: 'text-blue-600 bg-blue-50 border-blue-100',
  },
  {
    title: 'The 10 Ways of Collaboration',
    desc: 'A defined, structured practice so that "I want to help you" translates into specific, high-impact operating actions.',
    icon: HeartHandshake,
    color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
  },
  {
    title: 'The Recognition System',
    desc: 'Life Impact Score, Peer Standing, and Peers Coin — ensuring contribution is recorded and honored rather than merely applauded.',
    icon: Award,
    color: 'text-amber-600 bg-amber-50 border-amber-100',
  },
  {
    title: 'The Peers Code',
    desc: 'Six non-negotiable commitments that create psychological safety and make the room safe enough to be radically transparent in.',
    icon: ShieldCheck,
    color: 'text-purple-600 bg-purple-50 border-purple-100',
  },
  {
    title: 'The Unity App',
    desc: 'The digital infrastructure running the community 365 days a year, not just on meeting day — direct booking, chat, and verified logging.',
    icon: Globe2,
    color: 'text-sky-600 bg-sky-50 border-sky-100',
  },
  {
    title: 'Entrepreneur-Led Leadership',
    desc: 'Founders, Circle Directors, Industry Directors, and Executive Directors — every single leader is a working business owner.',
    icon: Layers,
    color: 'text-rose-600 bg-rose-50 border-rose-100',
  },
]

// ─── Live Metrics ───────────────────────────────────────────────────────────
const METRICS = [
  { value: '200+', label: 'Active Peers' },
  { value: '19', label: 'Curated Circles' },
  { value: '25+', label: 'Cities Across Bharat' },
  { value: '1,00,000+', label: 'Confirmed Collaborations' },
  { value: '1M', label: 'Lives Impacted Goal' },
]

export function OurStoryClient() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* ─── Breadcrumb ──────────────────────────────────────────────────── */}
      <div className="border-b border-slate-200/80 bg-white/80 backdrop-blur-md sticky top-0 z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link
              href="/"
              className="hover:text-[#0062D2] transition-colors duration-200"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-600">About</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold">Our Story</span>
          </nav>
        </div>
      </div>

      {/* ─── SECTION 1: HERO (THE HOSPITAL CORRIDOR TURNING POINT) ────────── */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#EFF6FF] via-[#F8FAFC] to-[#FFFFFF]">
        {/* Soft luminous ambient glows */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-blue-200/40 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute -top-10 -left-10 w-[400px] h-[400px] bg-sky-200/30 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 z-10">
              <div className="inline-flex items-center gap-2">
                <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  ABOUT PEERS GLOBAL
                </span>
                <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-serif font-bold text-[#061836] tracking-tight leading-[1.08]">
                Our Story
              </h1>

              <p className="text-2xl sm:text-3xl font-serif text-slate-800 font-semibold leading-snug">
                It began with one observation, in a hospital corridor.
              </p>

              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
                Every organisation has a beginning. Some begin with a business plan. Some begin with an opportunity. Some begin with a problem someone believes can be solved. PEERS GLOBAL began with something more human: an observation about what entrepreneurs go through when they are building their lives and businesses.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 group active:scale-[0.98]"
                >
                  <span>Download Unity App</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <Link
                  href="/the-idea"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-slate-800 font-semibold text-sm border border-slate-300 shadow-2xs hover:bg-slate-50 hover:border-slate-400 transition-all duration-200 active:scale-[0.98]"
                >
                  <span>Read The Idea</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>
              </div>
            </div>

            {/* Right Hero Visual with Rounded Glass Frame */}
            <div className="lg:col-span-6 relative">
              <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[500px] rounded-[32px] overflow-hidden shadow-[0_25px_70px_rgba(4,14,36,0.25)] border border-blue-900/15 bg-[#040e24]">
                <Image
                  src="/images/executive-director-conclave.jpg"
                  alt="Peers Global leadership assembly"
                  fill
                  className="object-cover object-center"
                  priority
                />

                {/* Soft horizontal gradient edge fade on the left edge */}
                <div className="absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-[#040e24]/60 via-[#040e24]/20 to-transparent pointer-events-none z-10" />

                {/* Ambient Top & Bottom Vignettes */}
                <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#040e24]/70 to-transparent pointer-events-none z-10" />
                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#040e24]/95 via-[#040e24]/50 to-transparent pointer-events-none z-10" />

                {/* Stage Backdrop Brand Overlay */}
                <div className="absolute top-6 right-6 bg-[#040e24]/90 backdrop-blur-md px-4 py-3 rounded-xl border border-white/20 text-right z-20 max-w-[220px] shadow-lg">
                  <p className="text-xs font-semibold text-slate-200 leading-tight">
                    Designed in Bharat.
                  </p>
                  <p className="text-[11px] font-bold text-sky-400 leading-tight mt-0.5">
                    Built for the World.
                  </p>
                </div>

                {/* Cursive overlay text */}
                <div className="absolute bottom-6 right-6 text-right z-20 max-w-[280px]">
                  <p
                    className="text-xl sm:text-2xl font-light italic leading-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
                    style={{ fontFamily: 'var(--font-script)' }}
                  >
                    The right circle
                    <br />
                    can change your life
                    <br />
                    faster than the right idea.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: BEFORE THERE WAS A COMMUNITY ─────────────────────── */}
      <section className="py-20 sm:py-24 bg-white border-y border-slate-200/80 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
              THE ORIGINS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] tracking-tight leading-tight">
            Before there was a community
          </h2>

          <div className="prose prose-slate max-w-none text-base sm:text-lg text-slate-700 leading-relaxed space-y-5">
            <p>
              Dr. Pravin Parmar describes himself as a first-generation entrepreneur, coming from a farmer family.
            </p>
            <p>
              His journey began in a very different environment from the one in which PEERS GLOBAL operates today — government-school education, a decision to pursue English for higher studies, MCA, a professional beginning with Microsoft and ERP implementation, then entrepreneurship, then startups, then the experience of building, struggling, learning, changing direction and starting again.
            </p>
            <p>
              The journey was never a straight line. And that became important. Because entrepreneurship itself is rarely a straight line.
            </p>
            <p>
              In 2011, Dr. Pravin started his own venture in information technology. By 2012, he had entered the startup ecosystem more deeply. For a first-generation entrepreneur, many things were new — the compliances, the ecosystem, the structures, and even the meaning of the word startup.
            </p>
            <p>
              There was learning everywhere. And there was uncertainty everywhere. He built a cloud-based, mobile-based HRMS product at a time when cloud technology itself was still creating questions and concerns. The product was even designed with Africa in mind. There were struggles. There were lessons. And eventually, there was a decision to move on. The startup was sold. He took an exit.
            </p>

            <div className="bg-gradient-to-r from-blue-50/90 via-sky-50/40 to-transparent p-6 sm:p-7 rounded-2xl border-l-4 border-[#0062D2] shadow-2xs my-6">
              <p className="font-serif text-xl sm:text-2xl text-[#061836] font-semibold italic leading-snug">
                For many entrepreneurs, an exit can look like an ending. For Dr. Pravin, it became another beginning.
              </p>
            </div>

            <p>
              After leaving the venture, there was another thought: what next? As a first-generation entrepreneur, he wanted his story to be heard. He approached media platforms and shared his story, but the story was not published. That experience created another realization: perhaps the problem was not that entrepreneurs lacked stories — perhaps the problem was that many stories simply did not have a platform.
            </p>
            <p>
              And that thought eventually became bigger. Because if every entrepreneur has a story, then every entrepreneur deserves the possibility of being seen, heard and recognised.
            </p>
          </div>

          <div className="pt-4">
            <Link
              href="/founder"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-50 text-[#0062D2] hover:bg-blue-100 font-bold text-xs border border-blue-200 transition-all shadow-2xs"
            >
              <span>Read the Founder&apos;s Story</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: THE STORY NOBODY WOULD PUBLISH ───────────────────── */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-[#061836] via-[#081d42] to-[#040e24] text-white relative overflow-hidden border-b border-slate-900">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#0062D2]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-sky-400">
            — THE INVISIBLE MSME —
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
            The story nobody would publish
          </h2>

          <div className="text-base sm:text-lg text-slate-300 leading-relaxed space-y-5">
            <p>
              There was another realization.
            </p>
            <p>
              Recognition was important. Stories were important. But entrepreneurs did not only need visibility. They needed one another. They needed learning. They needed experience. They needed trusted relationships. They needed collaboration. And they needed a community where those things could happen consistently.
            </p>
            <p>
              So the question changed from: “How do we connect entrepreneurs?” to: “How do we help entrepreneurs grow through one another?” That was a much bigger question, and it required much deeper research.
            </p>
            <div className="bg-white/10 backdrop-blur-md p-6 sm:p-7 rounded-2xl border border-white/15 shadow-xl border-l-4 border-l-sky-400 text-slate-100">
              <p className="font-medium text-base sm:text-lg leading-relaxed">
                The research led to a conviction: there was room for a community built around collaboration — not as a replacement for existing communities, but as a different universe built around a different idea.
              </p>
            </div>

            <p>
              Before creating PEERS GLOBAL, Dr. Pravin studied and experienced different entrepreneurial and professional communities, including TiE, BNI, Rotary, Lions, EO, YPO, Vistage and Round Tables. The purpose was not simply to copy what already existed. It was to understand what worked, what entrepreneurs valued, where the gaps were, and what happened after people exchanged contacts.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: WHY A COMMUNITY, NOT SOMETHING EASIER ────────────── */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
              THE STRATEGIC DECISION
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] tracking-tight leading-tight">
            Why a community, and not something easier
          </h2>

          <div className="text-base sm:text-lg text-slate-700 leading-relaxed space-y-5">
            <p>
              Networking connects people. But connection alone does not necessarily create value. The deeper opportunity is what happens after the introduction — a conversation, a shared experience, a referral, a solution, a partnership, a mentor, a trusted relationship, a person who remembers your problem because they have faced something similar.
            </p>
            <p className="font-serif text-2xl sm:text-3xl font-bold text-[#0062D2]">
              That is collaboration.
            </p>
            <p>
              The organisation began to move beyond the question of “Who do you know?” towards “How can the right people help one another grow?” And the research led to a simple framework: entrepreneurs need to keep growing in three dimensions — Learning, Sharing and Relationships.
            </p>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <p className="text-xl font-serif font-bold text-[#061836]">
                LSR — Learning. Sharing. Relationships.
              </p>
            </div>
            <p>
              That was the beginning of PEERS GLOBAL. A community designed so that entrepreneurs could move through connection, trust, relationship, collaboration and impact — not just meet once, but grow together over time.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: WHAT WE BUILT (6 PILLARS) ────────────────────────── */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-[#EFF6FF] via-[#F8FAFC] to-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2">
              <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                THE ARCHITECTURE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] tracking-tight mt-2">
              What we built
            </h2>
            <p className="text-base text-slate-600 mt-2">
              Not a networking group with a new name. A working system where each piece exists because something in the earlier version failed without it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.title}
                  className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div
                      className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${pillar.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif font-bold text-[#061836] text-xl group-hover:text-[#0062D2] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/the-idea"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0062D2] text-white font-bold text-xs shadow-md hover:bg-[#0052B4] transition-all hover:shadow-lg active:scale-[0.98]"
            >
              <span>Explore Our World</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: DATED TIMELINE ───────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white border-y border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2">
              <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                OUR JOURNEY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] tracking-tight mt-2">
              How the community evolved
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              From an insight in a hospital room to a national movement of Governed Collaboration.
            </p>
          </div>

          <div className="relative border-l-2 border-blue-200 ml-4 sm:ml-8 space-y-10">
            {TIMELINE.map((item) => (
              <div key={item.year} className="relative pl-6 sm:pl-8 group">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#0062D2] border-4 border-white shadow-xs group-hover:scale-125 transition-transform" />
                <span className="text-xs font-bold font-mono text-[#0062D2] bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-2">
                  {item.year}
                </span>
                <h3 className="font-serif font-bold text-[#061836] text-lg sm:text-xl leading-snug group-hover:text-[#0062D2] transition-colors">
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

      {/* ─── SECTION 7: WHERE WE ARE NOW (LIVE COUNTERS ON DEEP NAVY) ────── */}
      <section className="py-20 sm:py-24 bg-[#061836] text-white relative overflow-hidden border-b border-slate-900">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#0062D2]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-500/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-sky-400">
              — WHERE WE ARE NOW —
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight mt-2">
              PEERS GLOBAL has evolved into a leadership organisation built around entrepreneurs and their relationships with one another.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mt-2">
              The architecture now includes Circles, LSR, Inner Boards, collaboration, recognition, impact, leadership and Unity — but the real measure is not the structure. It is what happens between people: the conversation that changes a decision, the introduction that creates an opportunity, the relationship that continues beyond business.
            </p>
          </div>

          {/* Metric Bar — Clean White Cards on Deep Midnight Navy Canvas */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {METRICS.map((m) => (
              <div
                key={m.label}
                className="bg-white text-slate-900 p-6 sm:p-7 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-white text-center flex flex-col justify-center"
              >
                <span className="text-2xl sm:text-3xl font-bold font-serif text-[#061836]">
                  {m.value}
                </span>
                <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1.5">
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/the-territory"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors uppercase tracking-wider"
            >
              <span>See the Territory</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── SECTION 8: WHAT WE ARE BUILDING TOWARD & WHAT HAS NOT CHANGED ─ */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Building Toward */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                THE MISSION
              </span>
            </div>
            <h2 className="text-3xl font-serif font-bold text-[#061836]">
              What we are building toward
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              The PEERS GLOBAL mission is to impact 1M+ entrepreneurs by 2030. The number represents more than scale. It represents the possibility of multiplying the effect of collaboration: one entrepreneur helps another; that entrepreneur helps someone else; experience moves; relationships expand; opportunities multiply.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              The ambition is not simply to create a large community. It is to create a community capable of creating large human impact through collaboration.
            </p>
            <div className="pt-2">
              <Link
                href="/1-million-mission"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-50 text-[#0062D2] font-bold text-xs border border-blue-200 hover:bg-blue-100 transition-all shadow-2xs"
              >
                <span>See the 1 Million Mission</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* What Has Not Changed */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-blue-100 shadow-md space-y-4 border-l-4 border-l-[#0062D2]">
            <div className="inline-flex items-center gap-2">
              <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                UNCOMPROMISING CORE
              </span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#061836]">
              What has not changed
            </h3>
            <p className="text-xl font-serif italic text-slate-900 font-medium">
              The community has grown. The belief has not: Entrepreneurs should not have to build alone.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Everything here — every Circle, every rule, every system — exists to make that true for one more person, and then one more after that.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 9: CLOSING ROYAL BLUE BANNER ─────────────────────── */}
      <section className="relative py-20 sm:py-28 bg-[#0062D2] text-white overflow-hidden">
        {/* SVG Orbital Geometric Lines Background */}
        <div className="absolute -right-16 -top-20 bottom-0 pointer-events-none w-[420px] sm:w-[560px] lg:w-[680px] opacity-35 overflow-hidden flex items-center justify-center">
          <svg viewBox="0 0 600 600" fill="none" className="w-full h-full text-white/30" xmlns="http://www.w3.org/2000/svg">
            <path d="M 50 450 A 420 420 0 0 1 550 50" stroke="currentColor" strokeWidth="1.2" />
            <path d="M 120 520 A 500 500 0 0 1 600 120" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
            <path d="M 220 580 A 460 460 0 0 1 580 220" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            <line x1="280" y1="220" x2="380" y2="120" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
            <circle cx="280" cy="220" r="4.5" fill="#7DD3FC" />
            <circle cx="280" cy="220" r="10" stroke="#7DD3FC" strokeWidth="1" opacity="0.4" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-8 space-y-5">
              <p className="text-xs uppercase tracking-[0.22em] font-bold text-sky-200">
                — BUILD A STRONGER TOMORROW —
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
                “It began with one observation. It became an idea. The idea became a community. And the community carries an ambition: to impact 1M+ entrepreneurs by 2030.”
              </h2>

              <p className="text-base sm:text-lg text-white/90 font-normal">
                Continue the journey. Discover Dr. Pravin Parmar. Peers are Partners in Business and Friends in Life.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-[#0062D2] hover:bg-slate-100 font-bold text-sm shadow-md transition-all hover:shadow-lg active:scale-[0.98] uppercase tracking-wider"
                >
                  <span>Download Unity App</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <Link
                  href="/the-idea"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 text-white font-semibold text-sm border border-white/20 hover:bg-white/20 transition-all active:scale-[0.98]"
                >
                  <span>Read The Idea</span>
                  <ArrowRight className="w-4 h-4 text-slate-300" />
                </Link>
              </div>
            </div>

            {/* Right Cursive Script */}
            <div className="lg:col-span-4 text-center lg:text-right">
              <p
                className="text-3xl sm:text-4xl lg:text-5xl font-light italic leading-tight text-white drop-shadow-lg"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Ideas.
                <br />
                People.
                <br />
                Communities.
                <br />
                A Brighter Tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
