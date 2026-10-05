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
      {/* ─── SECTION 1: HERO (SIGNATURE FADE VIDEO & EXECUTIVE HEADER) ─── */}
      <section className="relative overflow-hidden bg-[#FAFBFD] text-slate-900 pt-6 sm:pt-10 pb-12 sm:pb-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium tracking-wide mb-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <ChevronRight className="size-3.5 text-slate-400" />
            <Link href="/circles" className="hover:text-slate-900 transition-colors">Circles</Link>
            <ChevronRight className="size-3.5 text-slate-400" />
            <span className="text-[#0062D2] font-semibold">Circle Magazines</span>
          </div>

          {/* Hero Banner */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[36px] bg-white border border-slate-200/80 shadow-sm min-h-[500px] lg:min-h-[560px] flex items-center">

            {/* Fade Video */}
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
                autoPlay loop muted playsInline
                className="size-full object-cover object-center"
              />
              <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white via-white/85 via-30% to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none" />

              {/* Script overlay */}
              <div className="absolute top-6 sm:top-8 right-6 sm:right-8 z-20 text-right drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] pointer-events-none select-none">
                <p className="text-xl sm:text-2xl text-white/95 leading-tight" style={{ fontFamily: 'var(--font-script)' }}>Real People</p>
                <p className="text-xl sm:text-2xl text-white/95 leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>Real Collaborations</p>
                <p className="text-2xl sm:text-3xl text-amber-300 font-medium leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>Real Impact</p>
              </div>

              {/* Glass pill */}
              <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-20 pointer-events-none select-none">
                <div className="rounded-xl border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2.5 shadow-lg">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/70">OFFICIAL ANNUAL PUBLICATION</p>
                  <p className="text-xs font-bold tracking-wider text-white">RECORDING THE IMPACT OF EVERY CIRCLE</p>
                </div>
              </div>
            </div>

            {/* Left Content */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl flex flex-col items-start">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    ANNUAL PEERS PUBLICATIONS
                  </span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-[60px] font-normal text-slate-900 tracking-tight leading-[1.08] mb-4">
                  Circle Magazines
                </h1>
                <p className="text-xl sm:text-2xl text-slate-800 font-bold leading-snug mb-3">
                  Every Circle publishes its own.
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 max-w-lg">
                  The Peers, the collaborations and the year, recorded properly in print and digital formats.
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-10">
                  <Link
                    href="/unity"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-xs sm:text-sm font-bold hover:shadow-lg transition-all shadow-md uppercase tracking-wider"
                  >
                    <span>Download Unity App</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="#directory"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold transition-all"
                  >
                    <BookOpen className="w-4 h-4 text-[#0062D2]" />
                    <span>Browse Issues</span>
                  </a>
                </div>

                {/* Stat Pill Band */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-6 border-t border-slate-200/80">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                    <div className="flex items-center gap-1.5 text-[#0062D2] mb-0.5">
                      <Users className="w-3.5 h-3.5" />
                      <span className="text-lg font-serif font-bold text-slate-950">19+</span>
                    </div>
                    <span className="text-[11px] text-slate-500 font-medium">Active Circles</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                    <div className="flex items-center gap-1.5 text-[#0062D2] mb-0.5">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span className="text-lg font-serif font-bold text-slate-950">300+</span>
                    </div>
                    <span className="text-[11px] text-slate-500 font-medium">Founders Featured</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                    <div className="flex items-center gap-1.5 text-[#0062D2] mb-0.5">
                      <HeartHandshake className="w-3.5 h-3.5" />
                      <span className="text-lg font-serif font-bold text-slate-950">100+</span>
                    </div>
                    <span className="text-[11px] text-slate-500 font-medium">Stories Published</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                    <div className="flex items-center gap-1.5 text-[#0062D2] mb-0.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span className="text-lg font-serif font-bold text-slate-950">1</span>
                    </div>
                    <span className="text-[11px] text-slate-500 font-medium">Global Ecosystem</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─── SECTION 2: Why a Circle Publishes ─── */}
      <section className="py-12 sm:py-16 lg:py-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-8 p-7 sm:p-9 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 space-y-4 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0062D2] shadow-2xs">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] brand-gradient-text block">
                    Permanent Record
                  </span>
                  <h2 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-slate-900 leading-snug">
                    Why a Circle publishes
                  </h2>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-semibold">
                Because a year of work deserves more than a memory.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                Over twelve meetings a Circle produces referrals, partnerships, introductions, mentorships and businesses that changed direction. Most of it happens quietly, in conversations nobody records.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                The magazine is where a Circle writes it down. Its Peers, named and profiled. Its collaborations, with what came of them. Its masterclasses, its guests, its year.
              </p>
            </div>

            <div className="lg:col-span-4 p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-[#061226] to-[#0A1A38] text-white border border-slate-800 flex flex-col justify-center text-center space-y-3 shadow-md">
              <span className="text-3xl text-sky-400 font-serif leading-none">&ldquo;</span>
              <p className="text-base sm:text-lg font-medium italic text-slate-200 leading-relaxed">
                A year of impact, not just a memory.
              </p>
              <span className="text-[11px] text-sky-300/80 font-mono uppercase tracking-wider">
                — Peers Global Editorial Standards
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: What is inside ─── */}
      <section className="py-12 sm:py-16 lg:py-20 border-b border-slate-200/80 bg-[#FAFBFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 sm:mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                Contents &amp; Architecture
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-tight leading-snug">
              What is inside
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 font-light leading-relaxed">
              Every edition records the leaders, collaborations, masterclasses, and impact generated by the Circle over twelve meetings.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              { icon: Users, title: 'The Peers', desc: 'Every member of the Circle, their business, and what they bring to the room.' },
              { icon: Award, title: 'The Leadership', desc: 'The Founder, the Director, the Chairs and Leaders who held the Circle.' },
              { icon: HeartHandshake, title: 'The Collaborations', desc: 'What Peers built together, with concrete revenue and operational outcomes.' },
              { icon: Mic, title: 'The Guests', desc: 'The veteran industry figures, mentors and institutional leaders who spoke to the room.' },
              { icon: Lightbulb, title: 'The Learning', desc: 'The twelve masterclasses of the year and the actionable frameworks they covered.' },
              { icon: Sparkles, title: 'The Impact', desc: 'What this Circle contributed toward our collective mission of 1 Million lives impacted.' },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 space-y-3 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100/60 shadow-2xs group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 group-hover:text-[#0062D2] transition-colors">{item.title}</h4>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: What it does for a Peer ─── */}
      <section className="py-12 sm:py-16 lg:py-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 sm:mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                Member Benefit
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-tight leading-snug">
              What it does for a Peer
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 font-light leading-relaxed">
              Tangible national credibility, permanent archival proof, and cross-border commercial visibility for your enterprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {[
              { icon: Eye, title: 'Visibility', desc: 'A professional publication carrying your business, shared across the community and distributed to hundreds of prospective enterprise partners.' },
              { icon: FileCheck, title: 'Credibility', desc: 'Something tangible to give a client, a partner or an investor that positions you firmly inside a serious, verified business community.' },
              { icon: Globe, title: 'Reach', desc: 'Circle magazines circulate well beyond the Circle that produced them, reaching national leaders, conclave attendees and media partners.' },
              { icon: Bookmark, title: 'A Record', desc: 'Proof of what you contributed, archived in high-grade print and preserved as part of the community’s permanent legacy.' },
            ].map((b, idx) => {
              const BIcon = b.icon
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-[#FAFBFD] border border-slate-200/90 flex items-start gap-4 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 border border-blue-100/60 shadow-2xs group-hover:scale-105 transition-transform">
                    <BIcon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-[#0062D2] transition-colors">{b.title}</h4>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-light">{b.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-[#FAFBFD] border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
            <p className="text-xs sm:text-sm text-slate-700 font-medium">
              Visibility is one of the ten Ways of Collaboration. This is one of the ways this community delivers it.
            </p>
            <Link
              href="/10-forms-of-collaboration"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-xs sm:text-sm font-bold text-[#0062D2] transition-colors whitespace-nowrap"
            >
              <span>See the 10 Ways</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: Read the Magazines: Filterable Grid ─── */}
      <section id="directory" className="py-12 sm:py-16 lg:py-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                  Archival Directory
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-slate-900 leading-snug">
                Read the magazines
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl font-light">
                Select an issue below to view the digital interactive edition or download the archival PDF.
              </p>
            </div>

            {/* Filter controls */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <Filter className="w-3.5 h-3.5 text-slate-400" />
                <span>Filter:</span>
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
                className="rounded-3xl bg-[#FAFBFD] border border-slate-200/90 overflow-hidden hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                {/* Magazine Visual Cover */}
                <div className={`p-6 bg-gradient-to-br ${mag.accentColor} text-white relative min-h-[200px] flex flex-col justify-between`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] tracking-widest uppercase font-mono px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-xs border border-white/15">
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
                    <h3 className="text-xl font-bold text-white tracking-tight leading-tight">
                      {mag.circle}
                    </h3>
                    <p className="text-[11px] text-slate-300 font-mono">
                      {mag.edition}
                    </p>
                  </div>
                </div>

                {/* Magazine Details */}
                <div className="p-5 sm:p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-2 text-xs py-2 border-b border-slate-200/80">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-semibold">Peers Profiled</span>
                      <span className="text-sm font-bold text-slate-900">{mag.featuredPeers} Founders</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-semibold">Collaborations</span>
                      <span className="text-sm font-bold text-slate-900">{mag.collaborationsCount} Documented</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      href="/unity"
                      className="w-full text-center py-2.5 px-4 rounded-xl bg-[#0062D2] text-white text-xs font-bold hover:bg-[#1a42c0] transition-colors shadow-2xs"
                    >
                      View / Download Issue
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Who produces them card */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-left">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                Editorial Ownership
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                Who produces them
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed font-light">
                Each Circle&apos;s magazine is produced by its own Peers, led by the Recognition &amp; PR Leader on the Business Growth Committee, with support from the Peers Global media team.
              </p>
            </div>

            <div className="shrink-0 flex flex-col items-center md:items-end gap-2">
              <Link
                href="/circle-roles"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-300 text-xs sm:text-sm font-semibold text-slate-800 hover:bg-slate-100 transition-colors shadow-2xs"
              >
                <span>See Circle Roles</span>
                <ArrowRight className="w-4 h-4 text-[#0062D2]" />
              </Link>
              <span className="text-[11px] font-serif italic text-[#0062D2]">
                Our Circles. Their Stories. A Stronger Community.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: Closing Banner ─── */}
      <section className="relative isolate overflow-hidden bg-[#040F24] text-white py-16 sm:py-20 lg:py-24 border-t border-slate-800">
        {/* Deep celestial radial gradients & luminous aura */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(0,98,210,0.25),transparent_42%),radial-gradient(circle_at_82%_12%,rgba(56,189,248,0.18),transparent_36%),linear-gradient(115deg,#020817_0%,#071a3d_48%,#06132d_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-blue-600/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-sky-400/15 blur-3xl"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-1">
            <span className="h-[2px] w-4 bg-gradient-to-r from-blue-400 to-rose-400 rounded-full" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-sky-300">
              Peers Global Ecosystem
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-tight">
            Build Your Business. Build Your Relationships. Build Your Circle.
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-light leading-relaxed">
            Join verified business owners, record your shared milestones, and create lasting value.
          </p>

          <div className="pt-2">
            <Link
              href="/unity"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-[#0062D2] hover:bg-slate-100 text-xs sm:text-sm font-bold transition-all shadow-lg hover:shadow-xl uppercase tracking-wider"
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
