'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Award,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Trophy,
  Medal,
  Users,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Building2,
  MapPin,
  Flame,
  Star,
  Layers,
  HeartHandshake,
  TrendingUp,
  Handshake,
  FileCheck,
  Check,
} from 'lucide-react'

interface Winner {
  year: string
  name: string
  business: string
  city: string
  circle: string
  award: string
  contribution: string
  image: string
}

const AWARD_CATEGORIES = [
  {
    title: 'Life Impactor of the Year',
    desc: 'The Peer with the highest confirmed impact across the community.',
    icon: Trophy,
    color: 'text-blue-600 bg-blue-50 border-blue-200',
  },
  {
    title: 'Top Impact Creators',
    desc: "The community's highest contributors, recognised annually for sustained giving.",
    icon: Flame,
    color: 'text-rose-600 bg-rose-50 border-rose-200',
  },
  {
    title: 'Collaboration of the Year',
    desc: 'The single collaboration that produced the most, between two Peers who met in a Circle.',
    icon: HeartHandshake,
    color: 'text-sky-600 bg-sky-50 border-sky-200',
  },
  {
    title: 'Circle of the Year',
    desc: 'The room that gave the most, grew the strongest and changed the most lives.',
    icon: Users,
    color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
  },
  {
    title: 'Circle Director of the Year',
    desc: 'The Director who built the strongest room and fostered exceptional peer culture.',
    icon: Medal,
    color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
  },
  {
    title: 'Circle Founder of the Year',
    desc: 'The entrepreneur who convened a community where none existed from Day 1.',
    icon: Star,
    color: 'text-purple-600 bg-purple-50 border-purple-200',
  },
  {
    title: 'Industry Director of the Year',
    desc: 'The strongest sector built across the community through cross-city alignment.',
    icon: Building2,
    color: 'text-cyan-600 bg-cyan-50 border-cyan-200',
  },
  {
    title: 'Executive Director of the Year',
    desc: 'The territory that grew the furthest and sustained highest member retention.',
    icon: TrendingUp,
    color: 'text-teal-600 bg-teal-50 border-teal-200',
  },
  {
    title: 'Powerhouse Member of the Year',
    desc: 'The committee role held best with tireless execution and accountability.',
    icon: Sparkles,
    color: 'text-blue-600 bg-blue-50 border-blue-200',
  },
]

const PAST_WINNERS: Winner[] = [
  {
    year: '2025',
    name: 'Rajesh Shah',
    business: 'Apex Precision Engineering',
    city: 'Ahmedabad',
    circle: 'Manufacturing Circle 01',
    award: 'Life Impactor of the Year',
    contribution: '84 confirmed introductions, ₹14 Cr vendor pipeline unlocked for 12 MSME peers.',
    image: '/images/story-jignesh-rohit.jpg',
  },
  {
    year: '2025',
    name: 'Priya Sharma & Vikram Malhotra',
    business: 'Zenith Logistics & TechPack Solutions',
    city: 'Mumbai',
    circle: 'Logistics & Supply Chain Circle',
    award: 'Collaboration of the Year',
    contribution: 'Joint pan-India warehousing network cutting delivery turnaround times by 40%.',
    image: '/images/story-priya-karan.jpg',
  },
  {
    year: '2025',
    name: 'Ahmedabad MSME Circle 02',
    business: 'Led by Circle Director Samir Patel',
    city: 'Ahmedabad',
    circle: 'MSME Circle 02',
    award: 'Circle of the Year',
    contribution: '98% retention, 420 lives impacted, 28 masterclasses and playbooks published.',
    image: '/images/section_image/event_awards_stage.jpg',
  },
  {
    year: '2024',
    name: 'Ananya Verma',
    business: 'GreenCore Bio-Packaging',
    city: 'Bengaluru',
    circle: 'Fempreneur Circle 01',
    award: 'Circle Founder of the Year',
    contribution: 'Founded Bengaluru Fempreneur from scratch; scaled to 36 active founders in 8 months.',
    image: '/images/story-neha-simran.jpg',
  },
  {
    year: '2024',
    name: 'Harish Mehta',
    business: 'Mehta Global Exim',
    city: 'Surat',
    circle: 'Global Trade Circle',
    award: 'Industry Director of the Year',
    contribution: 'Connected 45 Indian MSME exporters directly with verified buyers across 6 nations.',
    image: '/images/story-amit-sandeep.jpg',
  },
]

export function AwardsClient() {
  const [selectedYear, setSelectedYear] = useState<string>('all')

  const filteredWinners =
    selectedYear === 'all'
      ? PAST_WINNERS
      : PAST_WINNERS.filter((w) => w.year === selectedYear)

  return (
    <div className="min-h-screen bg-[#FBFCFE] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="size-3.5 text-slate-400" />
          <Link href="/events" className="hover:text-slate-900 transition-colors">
            Community Life
          </Link>
          <ChevronRight className="size-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">Awards &amp; Recognition</span>
        </div>
      </div>

      {/* ─── SECTION 1: HERO (HONOURING CONTRIBUTION) ─── */}
      <section className="relative overflow-hidden bg-[#040F24] text-white pt-0 pb-12 sm:pb-16 border-b border-slate-800">
        {/* Home-style looping video backdrop with dark scrim */}
        <video
          className="absolute inset-0 size-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
          src="/videos/homepage-hero-bg.mp4"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(100deg,rgba(2,8,23,0.92)_0%,rgba(4,15,36,0.78)_45%,rgba(4,15,36,0.55)_100%)] pointer-events-none"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Home-style full-bleed hero */}
          <div className="min-h-[480px] lg:min-h-[520px] py-10 sm:py-14 flex items-center">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
              
              {/* Left Column: Manifesto & Details */}
              <div className="lg:col-span-12 max-w-3xl space-y-6">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold tracking-[0.22em] uppercase text-white/90">
                    HONOURING CONTRIBUTION
                  </span>
                </div>

                <div className="space-y-2.5">
                  <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-rose-400 tracking-tight leading-[1.14]">
                    Awards &amp; Recognition
                  </h1>
                  <p className="text-base sm:text-xl text-slate-200 font-normal leading-relaxed">
                    We do not recognise the largest business in the room. We recognise who did the most for everyone else.
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  <p>
                    Recognition at Peers Global is earned in public and verified transparently. <strong className="text-white font-semibold">Every action is recorded in the Unity App and confirmed directly by the Peer who received it.</strong>
                  </p>

                  {/* 4 Pillar Badges */}
                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 pt-1">
                    {[
                      { text: '1 Action = 1 Life Impacted', icon: ShieldCheck },
                      { text: 'Confirmed by the Receiver', icon: CheckCircle2 },
                      { text: 'Zero Lobbying or Self-Praise', icon: FileCheck },
                      { text: 'Ledger-Verified on Unity App', icon: Sparkles },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-white/10 border border-white/15 text-xs font-semibold text-white flex items-center gap-2 backdrop-blur-sm"
                      >
                        <item.icon className="size-4 shrink-0 text-sky-400" />
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-l-2 border-[#E11D48] pl-3 py-0.5 text-xs sm:text-sm font-medium text-white/95 italic flex items-center gap-2">
                    <Trophy className="size-4 shrink-0 text-sky-400" />
                    <span>Annual trophies celebrate transformative givers across our national and global community.</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <a
                    href="https://unity.peersglobal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer uppercase tracking-wider"
                  >
                    <span>Download Unity App</span>
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </a>

                  <a
                    href="#categories"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/25 hover:bg-white/20 bg-transparent text-white font-bold text-xs sm:text-sm transition-all uppercase tracking-wider"
                  >
                    <span>View Categories</span>
                  </a>
                </div>
              </div>


            </div>
          </div>

          {/* Floating Stats Bar */}
          <div className="relative z-10 mt-5 grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 items-center">
            <div className="rounded-2xl bg-white border border-slate-200/90 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300">
              <div className="size-10 rounded-xl bg-blue-50 text-[#0062D2] border border-blue-100 flex items-center justify-center shrink-0 shadow-2xs">
                <Trophy className="size-5" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-slate-900 leading-tight">9 Official</div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Award Categories</div>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200/90 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300">
              <div className="size-10 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center shrink-0 shadow-2xs">
                <ShieldCheck className="size-5" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-slate-900 leading-tight">100% Confirmed</div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Peer Receiver Verified</div>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200/90 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300">
              <div className="size-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0 shadow-2xs">
                <Calendar className="size-5" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-slate-900 leading-tight">4 Stages</div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Year-Round System</div>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200/90 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300">
              <div className="size-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center shrink-0 shadow-2xs">
                <Flame className="size-5" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-slate-900 leading-tight">Zero</div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Self-Nomination / Bias</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── SECTION 2: RECOGNITION HAPPENS ALL YEAR (4-STAGE SYSTEM) ─── */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 mb-1">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                  YEAR-ROUND SYSTEM
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight leading-tight">
                Recognition happens all year
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                Awards are annual. Recognition is continuous and verified across four distinct stages of community life.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-blue-50 border border-blue-200/80 text-xs font-semibold text-[#0062D2] flex items-center gap-2 shrink-0">
              <Sparkles className="size-4" />
              <span>Continuous Peer Affirmation</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                step: '01',
                title: 'In your Circle, every month',
                desc: 'The meeting opens with the Gratitude & Life Impact Round, where each Peer declares their received impact out loud.',
                icon: Calendar,
                tag: 'Monthly Routine',
              },
              {
                step: '02',
                title: 'In the app, continuously',
                desc: 'Milestone badges as your contribution reaches each tier. Transparent national rankings across the entire community.',
                icon: Sparkles,
                tag: 'Real-Time Ledger',
              },
              {
                step: '03',
                title: 'At city & regional events',
                desc: 'MindMeld conclaves publicly name top givers and key industry connectors in front of regional peer chapters.',
                icon: MapPin,
                tag: 'Regional Conclaves',
              },
              {
                step: '04',
                title: 'At the Annual Ceremony',
                desc: 'Once a year, the whole national and global community gathers to celebrate the most transformative contributors.',
                icon: Trophy,
                tag: 'Grand Gala',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="size-11 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100 group-hover:scale-110 transition-transform shadow-2xs">
                      <item.icon className="size-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      STAGE {item.step}
                    </span>
                  </div>

                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-[10px] font-bold text-slate-600 uppercase tracking-wider">
                    {item.tag}
                  </span>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-[#0062D2] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── SECTION 3: THE AWARD CATEGORIES ─── */}
      <section id="categories" className="py-16 sm:py-20 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2 mb-1">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                  OFFICIAL HONOURS
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight leading-tight">
                The Award Categories
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                Measured strictly on verified peer collaboration, growth, retention, and confirmed lives impacted.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-white border border-slate-200/90 text-xs text-slate-700 font-semibold shadow-2xs shrink-0 flex items-center gap-2">
              <ShieldCheck className="size-4 text-[#0062D2]" />
              <span>Verified from Unity App Ledger</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {AWARD_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className={`size-12 rounded-2xl ${cat.color} flex items-center justify-center border shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-2xs`}>
                    <cat.icon className="size-6" />
                  </div>
                  
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-[#0062D2] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                      {cat.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                  <span className="uppercase tracking-wider">Annual Award</span>
                  <span className="text-[#0062D2] font-bold">Category #{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── SECTION 4: THE RECOGNITION WALL & PAST WINNERS ─── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-1">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                  ROLL OF HONOUR
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight leading-tight">
                The Recognition Wall &amp; Past Winners
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                Recognition here is earned in public and celebrated transparently across our network.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 shadow-2xs">
              {(['all', '2025', '2024'] as const).map((yr) => (
                <button
                  key={yr}
                  onClick={() => setSelectedYear(yr)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                    selectedYear === yr
                      ? 'bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {yr === 'all' ? 'All Years' : yr}
                </button>
              ))}
            </div>
          </div>

          {/* Winners Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWinners.map((winner, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-[#FAFBFD] border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
                  <Image
                    src={winner.image}
                    alt={winner.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                  
                  <div className="absolute top-3.5 right-3.5">
                    <span className="px-3 py-1 rounded-full bg-slate-950/75 backdrop-blur-md text-[11px] font-mono font-bold text-sky-300 border border-white/20 shadow-md">
                      {winner.year}
                    </span>
                  </div>

                  <div className="absolute bottom-3.5 left-4 right-4 text-white">
                    <span className="text-[10px] font-mono text-sky-300 uppercase tracking-widest font-bold block mb-0.5">
                      {winner.award}
                    </span>
                    <h4 className="text-lg font-bold text-white leading-tight">
                      {winner.name}
                    </h4>
                  </div>
                </div>

                <div className="p-6 space-y-4 text-xs">
                  <div className="space-y-1.5">
                    <p className="font-bold text-slate-900 text-sm sm:text-base leading-snug">{winner.business}</p>
                    <p className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
                      <MapPin className="size-3.5 text-[#0062D2] shrink-0" />
                      {winner.city} · {winner.circle}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 text-slate-700 leading-relaxed shadow-2xs space-y-1">
                    <div className="flex items-center gap-1 text-[11px] font-bold text-[#0062D2] uppercase tracking-wider">
                      <HeartHandshake className="size-3.5" />
                      <span>What they gave:</span>
                    </div>
                    <p className="text-xs text-slate-600 font-light">
                      {winner.contribution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── SECTION 5: SIGNATURE LUXURY CLOSING HERO BANNER ─── */}
      <section
        id="download-unity"
        className="relative py-20 lg:py-28 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border-t border-slate-800"
      >
        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* SVG Orbital Geometric Lines Background */}
        <div className="absolute -right-16 -top-20 bottom-0 pointer-events-none w-[420px] sm:w-[560px] lg:w-[680px] opacity-25 overflow-hidden flex items-center justify-center">
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
            
            {/* Left Manifesto */}
            <div className="lg:col-span-8 flex flex-col items-start space-y-5">
              <div className="inline-flex items-center gap-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-sky-400 to-rose-400 rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-sky-400">
                  THE PEERS GLOBAL STANDARD
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight">
                “Success is not just what you earn. It is how many lives you impact.”
              </h2>

              <div className="space-y-3.5 text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl">
                <p>
                  Start logging your real contributions, introductions, and collaborations in the Unity App. Every act of generous leadership builds compounding respect across our network.
                </p>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1">
                  <p className="text-sky-200 font-medium text-xs sm:text-sm">
                    • 1 Action = 1 Life Impacted · Transparent Community Ledger · Zero Self-Praise.
                  </p>
                  <p className="text-white font-bold text-xs sm:text-sm">Earn recognition through authentic giving.</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-3">
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-xs sm:text-sm font-bold shadow-lg transition-all hover:scale-105 uppercase tracking-wider group cursor-pointer"
                >
                  <span>Download Unity App</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <Link
                  href="/membership"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/30 hover:border-white bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-md transition-all"
                >
                  <span>Apply for Membership →</span>
                </Link>
              </div>
            </div>

            {/* Right Cursive Script Highlights */}
            <div className="lg:col-span-4 text-left lg:text-right select-none pointer-events-none drop-shadow-lg space-y-1">
              <p
                className="text-xl sm:text-2xl text-white/70 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Give first.
              </p>
              <p
                className="text-xl sm:text-2xl text-white/80 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Log impact.
              </p>
              <p
                className="text-xl sm:text-2xl text-white leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Earn respect.
              </p>
              <p
                className="text-2xl sm:text-3xl text-amber-300 font-bold leading-tight"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Lead.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
