'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  BookOpen,
  Users,
  Award,
  HeartHandshake,
  Mic,
  Lightbulb,
  Sparkles,
  Eye,
  FileCheck,
  Globe,
  Bookmark,
  Download,
  ExternalLink,
  Layers,
  Filter,
} from 'lucide-react'

interface Magazine {
  id: string
  circle: string
  city: string
  year: string
  edition: string
  accentColor: string
  image: string
  featuredPeers: number
  collaborationsCount: number
}

const MAGAZINES: Magazine[] = [
  {
    id: 'ahmedabad-2025',
    circle: 'Ahmedabad Circle',
    city: 'Ahmedabad',
    year: '2025',
    edition: 'Annual Edition · Vol. 2',
    accentColor: 'from-amber-700 to-amber-950',
    image: '/images/who-we-are-boardroom.jpg',
    featuredPeers: 36,
    collaborationsCount: 48,
  },
  {
    id: 'mumbai-2025',
    circle: 'Mumbai Circle',
    city: 'Mumbai',
    year: '2025',
    edition: 'Annual Edition · Vol. 2',
    accentColor: 'from-blue-800 to-slate-950',
    image: '/images/culture-hero-desk.jpg',
    featuredPeers: 42,
    collaborationsCount: 65,
  },
  {
    id: 'delhi-2024',
    circle: 'Delhi Circle',
    city: 'Delhi',
    year: '2024',
    edition: 'Annual Edition · Vol. 1',
    accentColor: 'from-emerald-800 to-teal-950',
    image: '/images/founder-earth-showcase.jpg',
    featuredPeers: 32,
    collaborationsCount: 39,
  },
  {
    id: 'bengaluru-2024',
    circle: 'Bengaluru Circle',
    city: 'Bengaluru',
    year: '2024',
    edition: 'Annual Edition · Vol. 1',
    accentColor: 'from-indigo-800 to-slate-950',
    image: '/images/lexicon-open-book.jpg',
    featuredPeers: 38,
    collaborationsCount: 52,
  },
  {
    id: 'surat-2024',
    circle: 'Surat Circle',
    city: 'Surat',
    year: '2024',
    edition: 'Annual Edition · Vol. 1',
    accentColor: 'from-amber-800 to-stone-950',
    image: '/images/who-we-are-inner-board.jpg',
    featuredPeers: 28,
    collaborationsCount: 34,
  },
  {
    id: 'pune-2024',
    circle: 'Pune Circle',
    city: 'Pune',
    year: '2024',
    edition: 'Annual Edition · Vol. 1',
    accentColor: 'from-rose-800 to-zinc-950',
    image: '/images/who-we-are-friends.jpg',
    featuredPeers: 30,
    collaborationsCount: 41,
  },
]

export function CircleMagazinesClient() {
  const [selectedCity, setSelectedCity] = useState<string>('All')
  const [selectedYear, setSelectedYear] = useState<string>('All')

  const filteredMagazines = MAGAZINES.filter((mag) => {
    const cityMatch = selectedCity === 'All' || mag.city === selectedCity
    const yearMatch = selectedYear === 'All' || mag.year === selectedYear
    return cityMatch && yearMatch
  })

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#EFF6FF] selection:text-[#0062D2] antialiased">
      {/* ─── Breadcrumb ─── */}
      <div className="border-b border-slate-200/80 bg-white/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/circles" className="hover:text-slate-900 transition-colors">
            Circles
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">Circle Magazines</span>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-white via-[#F6F9FD] to-[#EDF3FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-slate-950 tracking-tight leading-[1.08]">
                Circle Magazines
              </h1>
              <p className="text-xl sm:text-2xl font-serif text-slate-800 italic leading-relaxed">
                Every Circle publishes its own.
              </p>
              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                The Peers, the collaborations and the year, recorded properly.
              </p>

              <div className="pt-2">
                <Link
                  href="/unity"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0062D2] text-white text-xs sm:text-sm font-bold hover:bg-[#1a42c0] transition-all shadow-md hover:shadow-lg uppercase tracking-wider"
                >
                  Download Unity App
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200/80">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5 text-[#0062D2]">
                    <Users className="w-4 h-4" />
                    <span className="text-xl font-serif font-bold text-slate-950">19+</span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">Active Circles</span>
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5 text-[#0062D2]">
                    <BookOpen className="w-4 h-4" />
                    <span className="text-xl font-serif font-bold text-slate-950">300+</span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">Entrepreneurs Featured</span>
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5 text-[#0062D2]">
                    <HeartHandshake className="w-4 h-4" />
                    <span className="text-xl font-serif font-bold text-slate-950">100+</span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">Stories Published</span>
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5 text-[#0062D2]">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-xl font-serif font-bold text-slate-950">1</span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">Community of Impact</span>
                </div>
              </div>
            </div>

            {/* Right Visual: Stacked Magazines Representation (Dark Constellation Card) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm rounded-3xl border border-slate-700/60 bg-gradient-to-br from-[#0B1528] via-[#0F1D38] to-[#070D18] p-6 shadow-2xl overflow-hidden text-white backdrop-blur-sm">
                <div className="absolute top-4 right-4 text-xs font-serif italic text-cyan-300">
                  Real People. Real Collaborations. Real Impact.
                </div>
                <div className="pt-8 pb-4 space-y-4">
                  <div className="relative h-64 rounded-2xl overflow-hidden border border-slate-600/60 shadow-xl bg-gradient-to-tr from-slate-900 to-blue-950 p-5 flex flex-col justify-between">
                    <div className="space-y-1">
                      <span className="text-[10px] tracking-widest uppercase font-bold text-cyan-400">
                        Peers Global Official Publication
                      </span>
                      <h3 className="text-2xl font-serif font-bold text-white tracking-wide">
                        Ahmedabad Circle
                      </h3>
                      <p className="text-xs text-cyan-200/80">Vol. 02 · 2025 Edition</p>
                    </div>

                    <div className="space-y-2 pt-4 border-t border-white/20">
                      <p className="text-[11px] text-slate-300 line-clamp-2">
                        A full year of verified collaborations, high-trust cross-border JVs, and 36 business owner profiles.
                      </p>
                      <div className="flex items-center justify-between text-[10px] text-cyan-300 font-semibold">
                        <span>36 Peers Profiled</span>
                        <span>48 Joint Outcomes</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-2">
                  <span className="text-xs text-slate-400">
                    Published annually in print and digital formats for every Circle.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Why a Circle Publishes ─── */}
      <section className="py-16 md:py-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-8 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 space-y-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0062D2]">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif text-slate-950">
                  Why a Circle publishes
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                Because a year of work deserves more than a memory.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Over twelve meetings a Circle produces referrals, partnerships, introductions, mentorships and businesses that changed direction. Most of it happens quietly, in conversations nobody records.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The magazine is where a Circle writes it down. Its Peers, named and profiled. Its collaborations, with what came of them. Its masterclasses, its guests, its year.
              </p>
            </div>

            <div className="lg:col-span-4 p-8 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 flex flex-col justify-center text-center space-y-4">
              <span className="text-4xl text-[#0062D2] font-serif leading-none">&ldquo;</span>
              <p className="text-lg sm:text-xl font-serif italic text-slate-800 leading-relaxed">
                A year of impact, not just a memory.
              </p>
              <span className="text-xs text-slate-500 font-medium">
                — Peers Global Editorial Standards
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Two-Column: What is Inside vs What it Does for a Peer ─── */}
      <section className="py-16 md:py-24 border-b border-slate-200/80 bg-[#FAFBFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: What is inside */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                  Contents & Architecture
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-slate-950">
                  What is inside
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white border border-slate-200/90 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0062D2] flex items-center justify-center">
                    <Users className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-serif font-bold text-slate-900">The Peers</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Every member of the Circle, their business, and what they bring to the room.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200/90 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0062D2] flex items-center justify-center">
                    <Award className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-serif font-bold text-slate-900">The Leadership</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Founder, the Director, the Chairs and Leaders who held the Circle.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200/90 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0062D2] flex items-center justify-center">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-serif font-bold text-slate-900">The Collaborations</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    What Peers built together, with concrete revenue and operational outcomes.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200/90 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0062D2] flex items-center justify-center">
                    <Mic className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-serif font-bold text-slate-900">The Guests</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The veteran industry figures, mentors and institutional leaders who spoke to the room.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200/90 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0062D2] flex items-center justify-center">
                    <Lightbulb className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-serif font-bold text-slate-900">The Learning</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The twelve masterclasses of the year and the actionable frameworks they covered.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200/90 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0062D2] flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-serif font-bold text-slate-900">The Impact</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    What this Circle contributed toward our collective mission of 1 Million lives impacted.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: What it does for a Peer */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                  Member Benefit
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-slate-950">
                  What it does for a Peer
                </h2>
              </div>

              <div className="space-y-3.5">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 mt-0.5">
                    <Eye className="w-4 h-4" />
                  </div>
                  <div className="text-xs text-slate-700 leading-relaxed">
                    <strong className="block text-slate-900 font-bold text-sm mb-0.5">Visibility</strong>
                    A professional publication carrying your business, shared across the community and distributed to hundreds of prospective enterprise partners.
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <FileCheck className="w-4 h-4" />
                  </div>
                  <div className="text-xs text-slate-700 leading-relaxed">
                    <strong className="block text-slate-900 font-bold text-sm mb-0.5">Credibility</strong>
                    Something tangible to give a client, a partner or an investor that positions you firmly inside a serious, verified business community.
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 mt-0.5">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div className="text-xs text-slate-700 leading-relaxed">
                    <strong className="block text-slate-900 font-bold text-sm mb-0.5">Reach</strong>
                    Circle magazines circulate well beyond the Circle that produced them, reaching national leaders, conclave attendees and media partners.
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 mt-0.5">
                    <Bookmark className="w-4 h-4" />
                  </div>
                  <div className="text-xs text-slate-700 leading-relaxed">
                    <strong className="block text-slate-900 font-bold text-sm mb-0.5">A Record</strong>
                    Proof of what you contributed, archived in high-grade print and preserved as part of the community’s permanent legacy.
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-700 font-medium">
                  Visibility is one of the ten Ways of Collaboration. This is one of the ways this community delivers it.
                </p>
                <Link
                  href="/10-forms-of-collaboration"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0062D2] hover:text-[#1a42c0] whitespace-nowrap"
                >
                  See the 10 Ways
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Read the Magazines: Filterable Grid ─── */}
      <section className="py-16 md:py-24 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                Archive
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-slate-950">
                Read the magazines
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                Select an issue below to view the digital interactive edition or download the archival PDF.
              </p>
            </div>

            {/* Filter controls */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <Filter className="w-3.5 h-3.5 text-slate-400" />
                <span>Filter by:</span>
              </div>

              {/* City Filter */}
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="text-xs rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0062D2]"
              >
                <option value="All">All Cities</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Bengaluru">Bengaluru</option>
                <option value="Surat">Surat</option>
                <option value="Pune">Pune</option>
              </select>

              {/* Year Filter */}
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="text-xs rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0062D2]"
              >
                <option value="All">All Years</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
              </select>
            </div>
          </div>

          {/* Magazine Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMagazines.map((mag) => (
              <div
                key={mag.id}
                className="rounded-3xl bg-[#FAFBFD] border border-slate-200/90 overflow-hidden hover:shadow-lg transition-all flex flex-col justify-between"
              >
                {/* Magazine Visual Cover */}
                <div className={`p-6 bg-gradient-to-br ${mag.accentColor} text-white relative min-h-[220px] flex flex-col justify-between`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] tracking-widest uppercase font-mono px-2.5 py-1 rounded bg-white/10 backdrop-blur-xs border border-white/15">
                      {mag.year} Edition
                    </span>
                    <span className="text-[10px] text-slate-300 font-medium">
                      {mag.city}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-amber-300 font-semibold block">
                      Peers Global Circle Magazine
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-white tracking-tight">
                      {mag.circle}
                    </h3>
                    <p className="text-[11px] text-slate-300 font-mono">
                      {mag.edition}
                    </p>
                  </div>
                </div>

                {/* Magazine Details */}
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-2 text-xs py-2 border-b border-slate-200/80">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-semibold">Peers Profiled</span>
                      <span className="text-sm font-serif font-bold text-slate-900">{mag.featuredPeers} Founders</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-semibold">Collaborations</span>
                      <span className="text-sm font-serif font-bold text-slate-900">{mag.collaborationsCount} Documented</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      href="/unity"
                      className="w-full text-center py-2.5 px-4 rounded-full bg-[#0062D2] text-white text-xs font-bold hover:bg-[#1a42c0] transition-colors shadow-2xs"
                    >
                      View / Download
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Who produces them card */}
          <div className="p-8 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-left">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                <Users className="w-4 h-4" />
                Editorial Ownership
              </div>
              <h3 className="text-xl sm:text-2xl font-serif text-slate-950">
                Who produces them
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                Each Circle&apos;s magazine is produced by its own Peers, led by the Recognition &amp; PR Leader on the Business Growth Committee, with support from the Peers Global media team.
              </p>
            </div>

            <div className="shrink-0 flex flex-col items-center md:items-end gap-2">
              <Link
                href="/circle-roles"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-300 text-xs sm:text-sm font-semibold text-slate-800 hover:bg-slate-100 transition-colors"
              >
                See Circle Roles
                <ArrowRight className="w-4 h-4 text-[#0062D2]" />
              </Link>
              <span className="text-[11px] font-serif italic text-[#0062D2]">
                Our Circles. Their Stories. A Stronger Community.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Closing Banner ─── */}
      <section className="relative bg-[#0062D2] text-white py-24 md:py-32 overflow-hidden">
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

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight">
            Build Your Business. Build Your Relationships. Build Your Circle.
          </h2>

          <div className="pt-2">
            <Link
              href="/unity"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#0062D2] hover:bg-slate-100 text-sm font-bold transition-all shadow-lg hover:shadow-xl uppercase tracking-wider"
            >
              Download Unity App
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
