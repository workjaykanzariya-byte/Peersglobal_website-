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
    year: '2022',
    title: 'The Hospital Corridor & The Founding Decision',
    desc: 'During a severe family crisis in an Ahmedabad hospital, Dr. Pravin Parmar realized that skills, intelligence, and hard work mean very little without the right circle to call. Peers Global Business Media was incorporated with one singular conviction: entrepreneurs must never build alone.',
  },
  {
    year: '2023',
    title: 'The First Circle & Codification of the 10 Ways',
    desc: 'The inaugural flagship Circle launched in Ahmedabad with 22 curated manufacturing and MSME promoters. The 10 Ways of Collaboration and the Give-First principle were codified to replace transactional networking with governed peer accountability.',
  },
  {
    year: '2024',
    title: 'Crossing 100 Peers & Multi-City Expansion',
    desc: 'First cross-city expansion beyond Ahmedabad into Surat, Vadodara, and Mumbai. The hot-seat and boardroom collaboration rituals saved member firms over ₹12 Crore in capex and compliance missteps.',
  },
  {
    year: '2025',
    title: 'Launch of the Unity App & Relational Currency',
    desc: 'The proprietary Unity App was deployed to log every collaboration with bilateral confirmation. The Life Impact Score and Peer Standing replaced subjective appreciation with verified relational equity.',
  },
  {
    year: '2026 & Beyond',
    title: '19 Circles Across Bharat & The 1 Million Mission',
    desc: 'Operating 19 industry and purpose-led Circles across major business territories in India, marching toward the institutional goal of impacting one million lives through entrepreneurship by 2030.',
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
                Entrepreneurs do not fail only because of business problems. They fail because they fight alone.
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
              Dr. Pravin Parmar grew up in a farmer family in Botad.
            </p>
            <p>
              Not a wealthy one. Uncertainty, hard work, seasons deciding whether there would be income that year, and dignity without money. No formal education in the family, but profound values in it.
            </p>
            <p>
              He also saw something in that village that took thirty years to fully understand: when a season failed, nobody faced it alone. People carried each other. In Botad that was ordinary. Everywhere else, it turned out to be rare.
            </p>
            <p>
              He could not speak English, and when he decided to learn, the school told him no. He stood up anyway — not really about English, but about deciding that his background would not decide his ceiling.
            </p>
            <p>
              He paid his own fees by teaching other students while he was still studying. He built a company, was right about the product and early to the market, and eventually admitted to himself that it could run his present but not build his future. He closed it.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50/90 via-sky-50/40 to-transparent p-6 sm:p-7 rounded-2xl border-l-4 border-[#0062D2] shadow-2xs my-6">
              <p className="font-serif text-xl sm:text-2xl text-[#061836] font-semibold italic leading-snug">
                Then a family crisis put him in a hospital, and hospitals strip every illusion a person carries.
              </p>
            </div>

            <p>
              Standing there he understood something uncomfortable: skills mean very little without the right people around you. So does intelligence. So does hard work. What matters in those moments is who you can call.
            </p>
            <p>
              He had spent years building capability. He had never built a circle. And almost none of the entrepreneurs he knew had one either.
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
              There was a second moment.
            </p>
            <p>
              When he tried to get his own business story published, the media was not interested. Not out of rudeness — simply because business media covers startups, funding and unicorns, while MSMEs stay invisible.
            </p>
            <p>
              And MSMEs are the businesses that build families, cities and employment across this country.
            </p>
            
            <div className="bg-white/10 backdrop-blur-md p-6 sm:p-7 rounded-2xl border border-white/15 shadow-xl border-l-4 border-l-sky-400 text-slate-100">
              <p className="font-medium text-base sm:text-lg leading-relaxed">
                That rejection produced a belief that still governs everything here: <strong className="text-white">every honest business story deserves respect and visibility. Even if a business shuts down, its story should never die.</strong>
              </p>
            </div>

            <p>
              It also produced <strong className="text-sky-300">VyapaarJagat.com</strong>, a media platform for the businesses nobody else was covering.
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
              Events would have been simpler. Media was already built.
            </p>
            <p className="font-serif text-2xl sm:text-3xl font-bold text-[#0062D2]">
              Events end. Media informs. Only community transforms.
            </p>
            <p>
              Entrepreneurs did not need more speakers. They needed a place where they could be real without being judged — where the room understood the weight they carried because everyone in it carried something similar.
            </p>
            <p>
              So the decision was made to build rooms rather than audiences.
            </p>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <p className="text-xl font-serif font-bold text-[#061836]">
                Circles, not crowds. Trust, not transactions. Peers, not gurus.
              </p>
            </div>
            <p>
              That was the beginning of Peers Global.
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
              Designed in Bharat. Built for the world.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mt-2">
              Nineteen Circles across industries and ambitions. A community that began in Ahmedabad and now operates across cities — with a platform built from the start for entrepreneurs anywhere in the world.
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
              One million lives impacted through entrepreneurship, collaboration and opportunity. Not one million members. One million lives.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Built one relationship at a time — one introduction, one conversation that saves someone eighteen months, one partnership that opens a market, one entrepreneur who stops carrying it alone.
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
                “The right circle can change your life faster than the right idea.”
              </h2>

              <p className="text-base sm:text-lg text-white/90 font-normal">
                Build Your Business. Build Your Relationships. Build Your Circle.
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
