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
    color: 'text-amber-600 bg-amber-50 border-amber-200',
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
    color: 'text-blue-600 bg-blue-50 border-blue-200',
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
    color: 'text-orange-600 bg-orange-50 border-orange-200',
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
    image: '/images/conclave.png',
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
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] antialiased">
      {/* ─── Breadcrumb ─── */}
      <div className="border-b border-[#EADFC7]/60 bg-[#FAF6EE]/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-neutral-600">
          <Link href="/" className="hover:text-neutral-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <Link href="/community" className="hover:text-neutral-900 transition-colors">
            Community Life
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span className="text-neutral-900 font-semibold">Awards &amp; Recognition</span>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 border-b border-[#EADFC7]/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF4E8] border border-[#E8DFC9] text-xs font-bold uppercase tracking-wider text-[#8C6422]">
                <Trophy className="w-3.5 h-3.5 text-[#8C6422]" />
                HONOURING CONTRIBUTION
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#162039] tracking-tight leading-[1.08] font-bold">
                Awards &amp; Recognition
              </h1>

              <p className="text-xl sm:text-2xl font-serif text-[#2B3B5E] font-medium leading-snug">
                We do not recognise the largest business in the room.
              </p>

              <p className="text-base sm:text-lg text-neutral-600 max-w-xl font-normal leading-relaxed">
                We recognise the entrepreneur who did the most for everyone else in it.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/unity"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0062D2] hover:bg-[#1a42c0] text-white text-xs sm:text-sm font-bold shadow-[0_4px_14px_rgba(0,98,210,0.25)] hover:shadow-[0_6px_18px_rgba(0,98,210,0.35)] transition-all active:scale-95 uppercase tracking-wider"
                >
                  <span>Download Unity App</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Visual: Recognition Ceremony Award Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#D5C7B0]/60 bg-[#162039] p-8 text-white group">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  <Trophy className="w-48 h-48 text-[#D4AF37]" />
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-xs font-mono font-bold text-[#D4AF37] uppercase">
                    Annual Standards
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                    Recognition is earned in public
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                    Every action at Peers Global is logged in the Unity App and confirmed by the Peer who received it.
                  </p>

                  <div className="p-4 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm space-y-1">
                    <span className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-bold block">
                      Core Principle
                    </span>
                    <p className="text-lg font-serif font-bold text-white">
                      1 Action = 1 Life Impacted
                    </p>
                    <p className="text-xs text-neutral-300 leading-normal">
                      Nobody nominates themselves. Nobody lobbies. Recognition follows confirmed giving.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Recognition happens all year ─── */}
      <section className="py-12 border-b border-[#EADFC7]/60 bg-[#FAF7F0]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#142038]">
              Recognition happens all year
            </h2>
            <p className="text-sm text-neutral-600 mt-1">
              Awards are annual. Recognition is continuous across four distinct stages.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                step: '01',
                title: 'In your Circle, every month',
                desc: 'The meeting opens with the Gratitude & Life Impact Round, where each Peer declares their impact out loud.',
                icon: Calendar,
              },
              {
                step: '02',
                title: 'In the app, continuously',
                desc: 'Milestone badges as your contribution reaches each tier. National rankings transparent across the entire community.',
                icon: Sparkles,
              },
              {
                step: '03',
                title: 'At city and regional events',
                desc: 'MindMeld conclaves publicly name top givers and key industry connectors in front of regional peer chapters.',
                icon: MapPin,
              },
              {
                step: '04',
                title: 'At the Annual Ceremony',
                desc: 'Once a year, the whole national and global community gathers to celebrate the most transformative contributors.',
                icon: Trophy,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[#E8DFC9] shadow-2xs space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0D6EFD] flex items-center justify-center border border-blue-100">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-bold text-neutral-400">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-base font-serif font-bold text-neutral-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── The Categories ─── */}
      <section className="py-14 border-b border-[#EADFC7]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8C6422]">
                Official Honours
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#142038]">
                The Award Categories
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Measured strictly on verified peer collaboration, growth, retention, and confirmed lives impacted.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800 font-medium shrink-0">
              Verified from Unity App ledger records
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {AWARD_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[#E8DFC9] shadow-2xs hover:shadow-md transition-shadow space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className={`w-10 h-10 rounded-xl ${cat.color} flex items-center justify-center border shrink-0`}>
                    <cat.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-neutral-900 leading-snug">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── The Recognition Wall & Past Winners ─── */}
      <section className="py-14 border-b border-[#EADFC7]/60 bg-[#FAF7F0]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#142038]">
                The Recognition Wall &amp; Past Winners
              </h2>
              <p className="text-sm text-neutral-600">
                Recognition here is earned in public and displayed in public.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="inline-flex p-1 rounded-xl bg-neutral-200/60 border border-[#D5C7B0]">
              {(['all', '2025', '2024'] as const).map((yr) => (
                <button
                  key={yr}
                  onClick={() => setSelectedYear(yr)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                    selectedYear === yr
                      ? 'bg-[#0D6EFD] text-white shadow-sm'
                      : 'text-neutral-700 hover:text-neutral-900'
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
                className="rounded-2xl bg-white border border-[#E8DFC9] overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="relative h-44 w-full bg-neutral-100">
                  <Image
                    src={winner.image}
                    alt={winner.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-mono font-bold text-[#D4AF37] border border-white/20">
                      {winner.year}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] font-mono text-[#D4AF37] uppercase font-semibold block">
                      {winner.award}
                    </span>
                    <h4 className="text-lg font-serif font-bold text-white leading-tight">
                      {winner.name}
                    </h4>
                  </div>
                </div>

                <div className="p-4 space-y-3 text-xs">
                  <div className="space-y-1 text-neutral-600">
                    <p className="font-semibold text-neutral-900">{winner.business}</p>
                    <p className="flex items-center gap-1 text-neutral-500 text-[11px]">
                      <MapPin className="w-3.5 h-3.5" />
                      {winner.city} · {winner.circle}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#FAF4E8] border border-[#E8DFC9] text-neutral-800 leading-relaxed">
                    <strong className="text-neutral-900 font-semibold block text-[11px] text-[#8C6422] uppercase tracking-wider mb-0.5">
                      What they gave:
                    </strong>
                    {winner.contribution}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Closing Banner ─── */}
      <section
        id="download-unity"
        className="relative py-20 bg-[#0B1220] text-white overflow-hidden border-t border-slate-800"
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Image
            src="/images/membership-mountain-closing.jpg"
            alt="Night sky"
            fill
            className="object-cover object-bottom"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <p className="font-serif italic text-2xl sm:text-3xl text-white/95 leading-snug">
              “Success is not just what you earn.
              <br />
              It is how many lives you impact.”
            </p>
            <p className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
              — Peers Global Standard
            </p>
          </div>

          <div className="pt-2">
            <Link
              href="/unity"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0062D2] hover:bg-[#1a42c0] text-white text-xs sm:text-sm font-bold shadow-[0_4px_20px_rgba(0,98,210,0.35)] transition-all uppercase tracking-wider active:scale-95"
            >
              <span>Download Unity App</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
