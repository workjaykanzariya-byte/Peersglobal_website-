'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GalaxyButton } from '@/components/ui/galaxy-button'
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
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#EFF6FF] selection:text-[#1D4ED8] antialiased">
      {/* Hidden global SVG gradient definitions for icons across the page */}
      <svg width="0" height="0" className="absolute pointer-events-none" aria-hidden="true">
        <defs>
          <linearGradient id="brandIconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#E11D48" />
          </linearGradient>
          <linearGradient id="brandStatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="50%" stopColor="#818CF8" />
            <stop offset="100%" stopColor="#FB7185" />
          </linearGradient>
        </defs>
      </svg>

      {/* ─── SECTION 1: HERO (MASTER FULL PAGE DARK VIDEO BANNER) ─── */}
      <section className="relative overflow-hidden bg-[#040F24] text-white pt-6 sm:pt-8 pb-12 sm:pb-16 border-b border-slate-800">
        {/* Full Bleed Hero Video Background */}
        <div className="absolute inset-0 size-full overflow-hidden pointer-events-none">
          <video
            src="/videos/homepage-hero-bg.mp4"
            poster="/images/who-we-are-boardroom.jpg"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(2,8,23,0.92)_0%,rgba(4,15,36,0.78)_45%,rgba(4,15,36,0.55)_100%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="size-3.5 text-slate-500" />
            <Link href="/circles" className="hover:text-white transition-colors">Circles</Link>
            <ChevronRight className="size-3.5 text-slate-500" />
            <span className="text-white font-semibold">Circle Magazines</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full min-h-[440px] lg:min-h-[480px]">
            {/* Left Hero Content */}
            <div className="lg:col-span-12 max-w-3xl space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur-sm uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
                <span>ANNUAL PEERS PUBLICATIONS</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white">
                  Every Circle Publishes Its Own{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185]">
                    Annual Magazine
                  </span>
                </h1>
                <p className="text-base sm:text-lg font-medium text-slate-200 leading-snug">
                  The Peers, the collaborations, and the breakthroughs of the year — recorded properly in print and digital archives.
                </p>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <GalaxyButton
                  href="/unity"
                  size="default"
                  className="font-semibold"
                >
                  Download Unity App
                </GalaxyButton>
                <GalaxyButton
                  href="#directory"
                  variant="transparent"
                  size="default"
                  className="font-medium"
                >
                  Browse Issues
                </GalaxyButton>
              </div>

              {/* Stat Pill Band */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-6 border-t border-white/15">
                <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <Users className="size-4 stroke-[url(#brandStatGrad)] text-sky-300" />
                    <span className="text-lg font-bold bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent">19+</span>
                  </div>
                  <span className="text-[11px] text-slate-300 font-medium">Active Circles</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <BookOpen className="size-4 stroke-[url(#brandStatGrad)] text-sky-300" />
                    <span className="text-lg font-bold bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent">300+</span>
                  </div>
                  <span className="text-[11px] text-slate-300 font-medium">Founders Featured</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <HeartHandshake className="size-4 stroke-[url(#brandStatGrad)] text-rose-300" />
                    <span className="text-lg font-bold bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent">100+</span>
                  </div>
                  <span className="text-[11px] text-slate-300 font-medium">Stories Published</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <Sparkles className="size-4 stroke-[url(#brandStatGrad)] text-amber-300" />
                    <span className="text-lg font-bold bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent">1</span>
                  </div>
                  <span className="text-[11px] text-slate-300 font-medium">Global Ecosystem</span>
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
            <div className="lg:col-span-8 p-7 sm:p-9 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 space-y-4 shadow-2xs group hover:border-blue-300 transition-all">
              <div className="flex items-center gap-3">
                <div className="size-11 rounded-2xl bg-white border border-blue-100 flex items-center justify-center shadow-2xs group-hover:scale-110 transition-transform">
                  <BookOpen className="size-5 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] brand-gradient-text block">
                    Permanent Record
                  </span>
                  <h2 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-slate-900 group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:via-[#6366F1] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all leading-snug">
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

            <div className="lg:col-span-4 p-7 sm:p-8 rounded-3xl bg-[linear-gradient(90deg,rgb(6,17,44)_0%,rgb(19,7,31)_50%,rgb(38,5,19)_100%)] text-white border border-white/10 flex flex-col justify-center text-center space-y-3 shadow-xl relative overflow-hidden">
              <span className="text-3xl text-sky-400 font-serif leading-none">&ldquo;</span>
              <p className="text-base sm:text-lg font-medium italic text-slate-200 leading-relaxed">
                A year of impact, not just a memory.
              </p>
              <span className="text-[11px] bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent font-semibold uppercase tracking-wider">
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
              const gradId = `insideCardGrad${i}`
              return (
                <div
                  key={i}
                  className="animated-glow-card group !rounded-2xl cursor-pointer"
                  tabIndex={0}
                  role="article"
                >
                  <svg className="animated-border-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                      <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1D4ED8" />
                        <stop offset="50%" stopColor="#6366F1" />
                        <stop offset="100%" stopColor="#E11D48" />
                      </linearGradient>
                    </defs>
                    <path
                      className="animated-border-path"
                      style={{ stroke: `url(#${gradId})` }}
                      d="M 0.8 6 Q 0.8 0.8 6 0.8 L 94 0.8 Q 99.2 0.8 99.2 6 L 99.2 94 Q 99.2 99.2 94 99.2 L 6 99.2 Q 0.8 99.2 0.8 94 Z"
                    />
                  </svg>
                  <div className="p-6 rounded-[calc(1rem-1.5px)] bg-white space-y-3 h-full flex flex-col justify-start">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:via-[#6366F1] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
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

          {/* 4-column modern card layout with animated glow border */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-8">
            {[
              { icon: Eye, title: 'Visibility', desc: 'A professional publication carrying your business, shared across the community and distributed to hundreds of prospective enterprise partners.' },
              { icon: FileCheck, title: 'Credibility', desc: 'Something tangible to give a client, a partner or an investor that positions you firmly inside a serious, verified business community.' },
              { icon: Globe, title: 'Reach', desc: 'Circle magazines circulate well beyond the Circle that produced them, reaching national leaders, conclave attendees and media partners.' },
              { icon: Bookmark, title: 'A Record', desc: 'Proof of what you contributed, archived in high-grade print and preserved as part of the community’s permanent legacy.' },
            ].map((b, idx) => {
              const BIcon = b.icon
              const gradId = `benefitCardGrad${idx}`
              return (
                <div
                  key={idx}
                  className="animated-glow-card group !rounded-2xl cursor-pointer"
                  tabIndex={0}
                  role="article"
                >
                  <svg className="animated-border-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                      <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1D4ED8" />
                        <stop offset="50%" stopColor="#6366F1" />
                        <stop offset="100%" stopColor="#E11D48" />
                      </linearGradient>
                    </defs>
                    <path
                      className="animated-border-path"
                      style={{ stroke: `url(#${gradId})` }}
                      d="M 0.8 6 Q 0.8 0.8 6 0.8 L 94 0.8 Q 99.2 0.8 99.2 6 L 99.2 94 Q 99.2 99.2 94 99.2 L 6 99.2 Q 0.8 99.2 0.8 94 Z"
                    />
                  </svg>
                  <div className="p-6 rounded-[calc(1rem-1.5px)] bg-white h-full flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                        <BIcon className="w-5 h-5 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
                      </div>
                      <h4 className="text-base font-bold text-slate-900 group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:via-[#6366F1] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all">
                        {b.title}
                      </h4>
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-light">{b.desc}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-[#FAFBFD] border border-slate-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs">
            <p className="text-xs sm:text-sm text-slate-700 font-medium">
              Visibility is one of the ten Ways of Collaboration. This is one of the ways this community delivers it.
            </p>
            <GalaxyButton
              href="/10-forms-of-collaboration"
              variant="transparent-light"
              size="sm"
              className="shrink-0 whitespace-nowrap"
            >
              See the 10 Ways
            </GalaxyButton>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: Read the Magazines: Filterable Grid ─── */}
      <section id="directory" className="py-12 sm:py-16 lg:py-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
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
                <Filter className="w-3.5 h-3.5 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
                <span>Filter:</span>
              </div>

              {/* City Filter */}
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="text-xs rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
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
                className="text-xs rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
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
                className="rounded-3xl bg-[#FAFBFD] border border-slate-200/90 overflow-hidden hover:shadow-lg hover:border-blue-300 transition-all flex flex-col justify-between group"
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
                      className="w-full text-center py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48] text-white text-xs font-bold hover:opacity-95 transition-opacity shadow-2xs"
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
              <GalaxyButton
                href="/circle-roles"
                variant="transparent-light"
                size="sm"
              >
                See Circle Roles
              </GalaxyButton>
              <span className="text-[11px] font-serif italic text-[#1D4ED8]">
                Our Circles. Their Stories. A Stronger Community.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: Closing Banner ─── */}
      <section className="relative isolate overflow-hidden bg-[#030712] text-white py-16 sm:py-20 lg:py-24 border-t border-slate-900">
        {/* Deep rich dark backdrop base */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,7,18,0.98)_0%,rgba(10,4,20,0.96)_50%,rgba(20,2,10,0.98)_100%)] pointer-events-none" />

        {/* Deep celestial radial gradients & luminous aura */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(29,78,216,0.18),transparent_50%),radial-gradient(circle_at_85%_50%,rgba(225,29,72,0.14),transparent_50%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-blue-700/15 blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-rose-700/12 blur-[100px]"
        />

        {/* Subtle geometric orbital line art */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-[min(58vw,760px)] opacity-25">
          <svg
            viewBox="0 0 760 520"
            fill="none"
            className="h-full w-full"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M760 40C555 45 405 145 375 310C355 423 265 493 70 520"
              stroke="currentColor"
              strokeWidth="1"
              className="text-blue-300/30"
            />
            <path
              d="M760 120C590 125 470 205 445 335C424 442 335 500 180 520"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="5 8"
              className="text-sky-200/25"
            />
            <path
              d="M760 215C640 220 565 278 540 370C519 446 470 490 390 520"
              stroke="currentColor"
              strokeWidth="1"
              className="text-blue-200/20"
            />
            <circle cx="540" cy="370" r="4" fill="currentColor" className="text-sky-300/60" />
            <circle cx="540" cy="370" r="13" stroke="currentColor" strokeWidth="1" className="text-sky-300/25" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2.5">
            <span className="text-xs font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent">
              Peers Global Ecosystem
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[2.75rem] font-bold text-white tracking-tight leading-[1.15]">
            Build Your Business.{' '}
            <span className="bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent">
              Build Your Relationships.
            </span>{' '}
            Build Your Circle.
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Join verified business owners, record your shared milestones, and create lasting value.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <GalaxyButton
              href="https://unity.peersglobal.com"
              target="_blank"
              rel="noreferrer"
              size="md"
            >
              Download Unity App
            </GalaxyButton>
          </div>
        </div>
      </section>
    </div>
  )
}
