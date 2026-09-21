'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  Users,
  Handshake,
  TrendingUp,
  Globe2,
  Search,
  Quote,
  CheckCircle2,
  ExternalLink,
  X,
  Building2,
  MapPin,
  Clock,
  Sparkles,
  Layers,
  HeartHandshake,
  FileCheck,
  Send,
  Target,
  Compass,
  Award,
} from 'lucide-react'

// ─── 4 Stats Bar ────────────────────────────────────────────────────────────
const STATS = [
  {
    icon: Users,
    label: 'Real Entrepreneurs',
    desc: 'Founders & Promoters',
  },
  {
    icon: Handshake,
    label: 'Real Collaborations',
    desc: '10 Ways of Giving',
  },
  {
    icon: TrendingUp,
    label: 'Real Outcomes',
    desc: 'Hard Verified Metrics',
  },
  {
    icon: Globe2,
    label: 'A Stronger Tomorrow',
    desc: '1 Million Mission',
  },
]

// ─── 4 Featured Stories Data ────────────────────────────────────────────────
export interface PeerStory {
  id: string
  peer1: {
    name: string
    business: string
    city: string
  }
  peer2: {
    name: string
    business: string
    city: string
  }
  way: string
  tagColor: string
  circle: string
  headline: string
  outcomeNumber: string
  image: string
  situation: string
  whatHappened: string
  now: string
  industry: string
}

const FEATURED_STORIES: PeerStory[] = [
  {
    id: 'jignesh-rohit-referral',
    peer1: {
      name: 'Jignesh Shah',
      business: 'Shah Packaging',
      city: 'Ahmedabad',
    },
    peer2: {
      name: 'Rohit Mehta',
      business: 'Mehta Trading',
      city: 'Mumbai',
    },
    way: 'Referrals',
    tagColor: 'bg-purple-100 text-purple-700 border-purple-200',
    circle: 'Manufacturing & Packaging Circle',
    industry: 'Packaging & Logistics',
    headline: 'A referral that became ₹1.2 Cr in business.',
    outcomeNumber: '₹1.2 Cr',
    image: '/images/story-jignesh-rohit.jpg',
    situation:
      'Shah Packaging had idle corrugation capacity following plant expansion in Sanand, while Mehta Trading was experiencing delayed shipments and poor QC from their existing regional suppliers.',
    whatHappened:
      'During a cross-Circle Collaboration Roundtable, Rohit learned of Jignesh’s high-precision corrugated box production. Instead of a standard commercial pitch, Rohit passed a key automotive client relationship directly to Jignesh.',
    now: 'An initial ₹15 Lakh test order expanded into an annual ₹1.2 Crore continuous packaging supply contract spanning across three Western region distribution hubs.',
  },
  {
    id: 'priya-karan-jv',
    peer1: {
      name: 'Priya Desai',
      business: 'Desai Exports',
      city: 'Surat',
    },
    peer2: {
      name: 'Karan Malhotra',
      business: 'Malhotra Logistics',
      city: 'Delhi',
    },
    way: 'Joint Venture',
    tagColor: 'bg-blue-100 text-blue-700 border-blue-200',
    circle: 'Export & Global Trade Circle',
    industry: 'Textiles & Trade',
    headline: 'A joint venture that opened 3 new markets.',
    outcomeNumber: '3 New Markets',
    image: '/images/story-priya-karan.jpg',
    situation:
      'Desai Exports held premium organic textile inventory but lacked bonded cold-chain freight and compliant European customs clearing channels. Malhotra Logistics held trade corridors but lacked manufacturer exclusivity.',
    whatHappened:
      'Meeting at the National Conclave, both founders structured a 50:50 joint export venture under which Malhotra handled all multi-modal clearance while Desai concentrated strictly on export-grade production.',
    now: 'Successfully shipped 24 container loads into Hamburg, Rotterdam, and Dubai within 9 months, cutting freight landing costs by 18%.',
  },
  {
    id: 'amit-sandeep-knowledge',
    peer1: {
      name: 'Amit Trivedi',
      business: 'Trivedi Chemicals',
      city: 'Vadodara',
    },
    peer2: {
      name: 'Sandeep Kulkarni',
      business: 'Kulkarni Solutions',
      city: 'Pune',
    },
    way: 'Knowledge Sharing',
    tagColor: 'bg-amber-100 text-amber-800 border-amber-200',
    circle: 'Speciality Chemicals & MSME Circle',
    industry: 'Chemical & Industrial',
    headline: 'A conversation that saved 18 months.',
    outcomeNumber: '18 Months Saved',
    image: '/images/story-amit-sandeep.jpg',
    situation:
      'Amit was preparing to invest ₹65 Lakhs in an imported solvent recovery column for his Dahej plant, based on vendor promises that overlooked complex pollution control board (GPCB) regulatory hurdles.',
    whatHappened:
      'In a 45-minute hot seat session, Sandeep, who had commissioned the exact same system in Maharashtra two years earlier, laid bare the compliance bottlenecks and recommended an indigenous modified catalytic alternate.',
    now: 'Amit avoided a costly 18-month equipment lock-in, saved ₹38 Lakhs in capital expenditure, and achieved environmental zero-discharge clearance on the first inspection.',
  },
  {
    id: 'neha-simran-introductions',
    peer1: {
      name: 'Neha Patel',
      business: 'Patel HR Solutions',
      city: 'Ahmedabad',
    },
    peer2: {
      name: 'Simran Kaur',
      business: 'Kaur Tech',
      city: 'Bengaluru',
    },
    way: 'Introductions',
    tagColor: 'bg-violet-100 text-violet-700 border-violet-200',
    circle: 'IT & Professional Services Circle',
    industry: 'IT & Software',
    headline: 'An introduction that led to a long-term partnership.',
    outcomeNumber: '42 Placements',
    image: '/images/story-neha-simran.jpg',
    situation:
      'Kaur Tech had secured a massive Series-A enterprise project but was facing a severe engineering talent crunch in Bengaluru with recruitment agencies failing to vet candidate backgrounds reliably.',
    whatHappened:
      'Neha received an introduction from her Circle Director to Simran. Neha immediately mobilized a curated technical assessment pipeline tailored for Kaur Tech’s Golang and distributed architecture requirements.',
    now: 'Patel HR successfully placed 42 senior engineers over 10 months, slashing hiring cycle time from 60 days to 14 days and establishing a standing master vendor agreement.',
  },
]

// ─── 6 Kinds of Stories ─────────────────────────────────────────────────────
const STORY_KINDS = [
  {
    icon: CheckCircle2,
    iconColor: 'text-blue-600',
    bgColor: 'bg-blue-50',
    title: 'A referral that became a client for a decade.',
    desc: 'Not a lead. A relationship, passed from one entrepreneur to another because the trust was already there.',
  },
  {
    icon: Users,
    iconColor: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    title: 'An introduction that opened a market.',
    desc: 'One message from someone who held a door that would have taken eighteen months to reach from outside.',
  },
  {
    icon: Handshake,
    iconColor: 'text-purple-600',
    bgColor: 'bg-purple-50',
    title: 'A joint venture neither could have won alone.',
    desc: 'Complementary strengths, a bigger opportunity. Capacity meeting distribution for larger scale.',
  },
  {
    icon: Award,
    iconColor: 'text-amber-600',
    bgColor: 'bg-amber-50',
    title: 'Knowledge that saved eighteen months.',
    desc: 'Forty minutes with someone who had already made the mistake, and a costly year avoided entirely.',
  },
  {
    icon: Layers,
    iconColor: 'text-rose-600',
    bgColor: 'bg-rose-50',
    title: 'A vendor connection that solved a persistent problem.',
    desc: 'Six years of experience, handed over in one honest recommendation without commercial friction.',
  },
  {
    icon: HeartHandshake,
    iconColor: 'text-teal-600',
    bgColor: 'bg-teal-50',
    title: 'Support through the hardest month.',
    desc: 'No transaction. Just a Peer who understood, and who stayed when decisions were heavy.',
  },
]

export function StoriesPageClient() {
  const [selectedStory, setSelectedStory] = useState<PeerStory | null>(null)

  // Filter States
  const [selectedCity, setSelectedCity] = useState<string>('All')
  const [selectedCircle, setSelectedCircle] = useState<string>('All')
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All')
  const [selectedWay, setSelectedWay] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState<string>('')

  // Filter Options
  const cities = ['All', 'Ahmedabad', 'Mumbai', 'Surat', 'Delhi', 'Vadodara', 'Pune', 'Bengaluru']
  const circles = [
    'All',
    'Manufacturing & Packaging Circle',
    'Export & Global Trade Circle',
    'Speciality Chemicals & MSME Circle',
    'IT & Professional Services Circle',
  ]
  const industries = ['All', 'Packaging & Logistics', 'Textiles & Trade', 'Chemical & Industrial', 'IT & Software']
  const ways = ['All', 'Referrals', 'Joint Venture', 'Knowledge Sharing', 'Introductions']

  // Filtered Stories
  const filteredStories = useMemo(() => {
    return FEATURED_STORIES.filter((story) => {
      const matchCity =
        selectedCity === 'All' ||
        story.peer1.city.toLowerCase() === selectedCity.toLowerCase() ||
        story.peer2.city.toLowerCase() === selectedCity.toLowerCase()

      const matchCircle =
        selectedCircle === 'All' || story.circle.toLowerCase() === selectedCircle.toLowerCase()

      const matchIndustry =
        selectedIndustry === 'All' || story.industry.toLowerCase() === selectedIndustry.toLowerCase()

      const matchWay =
        selectedWay === 'All' || story.way.toLowerCase() === selectedWay.toLowerCase()

      const matchSearch =
        !searchQuery.trim() ||
        story.peer1.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.peer2.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.peer1.business.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.peer2.business.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.situation.toLowerCase().includes(searchQuery.toLowerCase())

      return matchCity && matchCircle && matchIndustry && matchWay && matchSearch
    })
  }, [selectedCity, selectedCircle, selectedIndustry, selectedWay, searchQuery])

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* ─── Breadcrumb ──────────────────────────────────────────────────── */}
      <div className="border-b border-slate-200/80 bg-white/70 backdrop-blur-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link
              href="/"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-600">Community Life</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">Peer Stories</span>
          </nav>
        </div>
      </div>

      {/* ─── SECTION 1: HERO (TWO PEERS HANDSHAKE & SEAMLESS FADE) ───────── */}
      <section className="relative pt-10 pb-16 lg:pt-14 lg:pb-20 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 z-10">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2] bg-blue-50/80 px-3 py-1 rounded-full border border-blue-200/60">
                  — COMMUNITY LIFE —
                </span>
              </div>

              {/* Main H1 */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-950 tracking-tight leading-[1.1]">
                Peer Stories
              </h1>

              {/* Subline */}
              <p className="text-2xl sm:text-3xl font-serif text-slate-800 font-medium leading-snug">
                What entrepreneurs build when they stop building alone.
              </p>

              {/* Supporting Line */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                Real names. Real businesses. Real outcomes.
              </p>

              {/* Dual Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0062D2] text-white font-medium text-sm shadow-md hover:bg-[#0052B4] hover:shadow-lg transition-all duration-200 group"
                >
                  <span>Download Unity App</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#share-story"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-slate-800 font-medium text-sm border border-slate-300 shadow-sm hover:bg-slate-50 hover:border-slate-400 transition-all duration-200"
                >
                  <span>Share Your Story</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Right Hero Visual with Horizontal Left Edge Fade */}
            <div className="lg:col-span-6 relative">
              <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/peer-stories-hero.jpg"
                  alt="Two Indian business entrepreneurs shaking hands warmly at Peers Global gathering"
                  fill
                  className="object-cover object-center"
                  priority
                />

                {/* Soft horizontal gradient fade on the left edge smoothly blending into page background */}
                <div className="absolute inset-y-0 left-0 w-28 sm:w-40 bg-gradient-to-r from-white via-white/60 to-transparent pointer-events-none z-10" />

                {/* Ambient Top & Bottom Vignettes */}
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/20 to-transparent pointer-events-none z-10" />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none z-10" />

                {/* Stage Backdrop Brand Overlay on Top Right */}
                <div className="absolute top-6 right-6 bg-slate-950/85 backdrop-blur-md px-4 py-3 rounded-xl border border-white/20 text-right z-20 max-w-[220px]">
                  <div className="flex items-center justify-end gap-1.5 mb-1">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white">
                      PeersGlobal
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-slate-200 leading-tight">
                    Ideas. Connections.
                  </p>
                  <p className="text-xs font-semibold text-slate-200 leading-tight">
                    Collaborations.
                  </p>
                  <p className="text-[11px] font-bold text-sky-400 leading-tight mt-0.5">
                    A Stronger Tomorrow.
                  </p>
                </div>

                {/* Cursive overlay text on bottom right */}
                <div className="absolute bottom-6 right-6 text-right z-20 max-w-[240px]">
                  <p
                    className="text-xl sm:text-2xl font-light italic leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
                    style={{ fontFamily: 'var(--font-script)' }}
                  >
                    Real People.
                    <br />
                    Real Collaborations.
                    <br />
                    Real Impact.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 4-Stat Pillar Bar */}
          <div className="mt-12 max-w-5xl mx-auto">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-7 shadow-xl shadow-slate-200/50 border border-slate-200/90">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                {STATS.map((stat, i) => {
                  const Icon = stat.icon
                  return (
                    <div
                      key={stat.label}
                      className={`flex items-center gap-4 ${
                        i !== 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''
                      }`}
                    >
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 border border-blue-100 shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm sm:text-base font-serif font-bold text-slate-950 leading-snug">
                          {stat.label}
                        </div>
                        <div className="text-xs text-slate-500 font-medium mt-0.5">
                          {stat.desc}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: EVERY STORY HAS TWO PEOPLE ───────────────────────── */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
                — EVERY STORY HAS TWO PEOPLE —
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 tracking-tight leading-tight">
                Every story here has two people in it.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                That is what makes them different from testimonials. A
                testimonial tells you someone was satisfied. A story tells you
                what two entrepreneurs did together — who gave, who received,
                what existed before, and what exists now.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Every story on this page names both. Their businesses, their
                cities, and which of the ten Ways of Collaboration made it happen.
              </p>

              <div className="pt-2">
                <Link
                  href="/10-ways-of-collaboration"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0062D2] font-semibold text-xs sm:text-sm border border-blue-200 shadow-sm hover:bg-blue-50 hover:border-blue-400 transition-all"
                >
                  <span>See the 10 Ways of Collaboration</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Split Card: Quote + Mountain Canvas */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 grid grid-cols-1 sm:grid-cols-12 bg-white">
                {/* Left Half: Quote */}
                <div className="sm:col-span-6 p-7 sm:p-8 flex flex-col justify-between bg-slate-50/70 border-b sm:border-b-0 sm:border-r border-slate-200/80">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center mb-4">
                      <Quote className="w-5 h-5 fill-current text-[#0062D2]" />
                    </div>
                    <p className="text-lg sm:text-xl font-serif font-bold text-slate-900 leading-snug">
                      “Alone we can do so little. Together we build so much more.”
                    </p>
                  </div>

                  <div className="pt-6">
                    <span className="text-[11px] font-bold tracking-widest uppercase text-[#0062D2]">
                      PEERS GLOBAL
                    </span>
                  </div>
                </div>

                {/* Right Half: Mountain Landscape with Cursive overlay */}
                <div className="sm:col-span-6 relative h-56 sm:h-auto min-h-[220px]">
                  <Image
                    src="/images/who-we-are-mountain.jpg"
                    alt="Mountain peaks at dawn"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/35 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                    <p
                      className="text-xl sm:text-2xl font-light italic text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] leading-tight"
                      style={{ fontFamily: 'var(--font-script)' }}
                    >
                      Entrepreneurs
                      <br />
                      Create Opportunities.
                      <br />
                      Communities
                      <br />
                      Create Change.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: BROWSE THE STORIES (FILTERS & SEARCH) ─────────────── */}
      <section className="py-12 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
              — BROWSE THE STORIES —
            </span>
            <p className="text-sm text-slate-600 mt-1">
              Find stories by city, circle, industry or way of collaboration.
            </p>
          </div>

          {/* Interactive Filter Grid */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {/* City Filter */}
              <div>
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  City
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                >
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city === 'All' ? 'All Cities' : city}
                    </option>
                  ))}
                </select>
              </div>

              {/* Circle Filter */}
              <div>
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Circle
                </label>
                <select
                  value={selectedCircle}
                  onChange={(e) => setSelectedCircle(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                >
                  {circles.map((cir) => (
                    <option key={cir} value={cir}>
                      {cir === 'All' ? 'All Circles' : cir}
                    </option>
                  ))}
                </select>
              </div>

              {/* Industry Filter */}
              <div>
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Industry
                </label>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                >
                  {industries.map((ind) => (
                    <option key={ind} value={ind}>
                      {ind === 'All' ? 'All Industries' : ind}
                    </option>
                  ))}
                </select>
              </div>

              {/* Way of Collaboration Filter */}
              <div>
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Way of Collaboration
                </label>
                <select
                  value={selectedWay}
                  onChange={(e) => setSelectedWay(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                >
                  {ways.map((w) => (
                    <option key={w} value={w}>
                      {w === 'All' ? 'All Ways of Collaboration' : w}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Keyword Search Bar */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 border-t border-slate-100">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search stories by name, business or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {(selectedCity !== 'All' ||
                selectedCircle !== 'All' ||
                selectedIndustry !== 'All' ||
                selectedWay !== 'All' ||
                searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedCity('All')
                    setSelectedCircle('All')
                    setSelectedIndustry('All')
                    setSelectedWay('All')
                    setSearchQuery('')
                  }}
                  className="px-4 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-xl transition-colors shrink-0 cursor-pointer"
                >
                  Reset Filters
                </button>
              )}

              <button
                type="button"
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#0062D2] text-white text-xs font-medium shadow-xs hover:bg-[#0052B4] transition-all cursor-pointer"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: FEATURED STORIES (4-CARD STORY GRID) ─────────────── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
                — FEATURED STORIES —
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 mt-1">
                Real partnerships forged in Circle rooms.
              </h2>
            </div>

            <button
              onClick={() => {
                setSelectedCity('All')
                setSelectedCircle('All')
                setSelectedIndustry('All')
                setSelectedWay('All')
                setSearchQuery('')
              }}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#0062D2] hover:text-[#0052B4] transition-colors cursor-pointer"
            >
              <span>View All Stories</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {filteredStories.length === 0 ? (
            <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200/80">
              <p className="text-slate-600 text-sm">
                No stories match your specific filters right now.
              </p>
              <button
                onClick={() => {
                  setSelectedCity('All')
                  setSelectedCircle('All')
                  setSelectedIndustry('All')
                  setSelectedWay('All')
                  setSearchQuery('')
                }}
                className="mt-4 px-5 py-2 rounded-full bg-[#0062D2] text-white text-xs font-semibold hover:bg-[#0052B4] cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredStories.map((story) => (
                <div
                  key={story.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Story Photo */}
                    <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                      <Image
                        src={story.image}
                        alt={`${story.peer1.name} and ${story.peer2.name}`}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                      {/* Tag for Way of Collaboration */}
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white/95 backdrop-blur-md shadow-xs text-slate-800 border border-slate-200">
                        {story.way}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 space-y-3">
                      {/* Two Peers & Businesses */}
                      <div className="space-y-1 text-xs">
                        <div className="font-semibold text-slate-900">
                          {story.peer1.name}
                        </div>
                        <div className="text-slate-500 text-[11px]">
                          {story.peer1.business}, {story.peer1.city}
                        </div>
                        <div className="text-slate-400 text-[10px] font-medium uppercase tracking-wider pt-0.5">
                          and
                        </div>
                        <div className="font-semibold text-slate-900">
                          {story.peer2.name}
                        </div>
                        <div className="text-slate-500 text-[11px]">
                          {story.peer2.business}, {story.peer2.city}
                        </div>
                      </div>

                      {/* Headline Outcome */}
                      <h3 className="font-serif font-bold text-slate-950 text-base leading-snug pt-1">
                        {story.headline}
                      </h3>
                    </div>
                  </div>

                  {/* Read Full Story Button */}
                  <div className="p-5 pt-0">
                    <button
                      onClick={() => setSelectedStory(story)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0062D2] hover:text-[#0052B4] transition-colors group cursor-pointer"
                    >
                      <span>Read Full Story</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ─── SECTION 5: THE KINDS OF STORIES THIS COMMUNITY PRODUCES ─────── */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 tracking-tight">
              The kinds of stories this community produces
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Six common forms of peer collaboration that occur across our Circles every single month.
            </p>
          </div>

          {/* 6 Grid Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STORY_KINDS.map((kind) => {
              const Icon = kind.icon
              return (
                <div
                  key={kind.title}
                  className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-200 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div
                      className={`w-12 h-12 rounded-xl ${kind.bgColor} ${kind.iconColor} flex items-center justify-center`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="font-serif font-bold text-slate-950 text-base leading-snug">
                      {kind.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {kind.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xs sm:text-sm font-medium text-slate-500 italic max-w-2xl mx-auto">
              Every one of these is a life changed, and every one began with a Peer choosing to give.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: THREE BOTTOM INFO CARDS ──────────────────────────── */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: How stories are recorded */}
            <div className="bg-[#F8FAFC] rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-950">
                  How stories are recorded
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Collaboration at Peers Global is logged, not remembered. When a
                  Peer gives through any of the ten Ways, it is recorded in the
                  Unity App and confirmed by the entrepreneur who received it.
                  Both Peers review and approve their story before publication.
                </p>
              </div>

              <div className="pt-6">
                <Link
                  href="/the-currency"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#0062D2] font-semibold text-xs border border-blue-200 shadow-xs hover:bg-blue-50 transition-all"
                >
                  <span>Understand the Currency</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 2: Share your story */}
            <div
              id="share-story"
              className="bg-[#F8FAFC] rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between scroll-mt-20"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100">
                  <Send className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-950">
                  Share your story
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  If a Peer changed something in your business, say so publicly.
                  It matters because the Peer who helped you is recognised, other
                  entrepreneurs learn what is actually possible here, and it
                  counts toward the 1 Million Mission.
                </p>
              </div>

              <div className="pt-6">
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0062D2] text-white font-medium text-xs shadow-md hover:bg-[#0052B4] transition-all"
                >
                  <span>Download Unity App</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card 3: One million lives */}
            <div className="bg-[#F8FAFC] rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-950">
                  One million lives
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Every story here is one entry in a much longer count. Our
                  mission is to impact one million lives through
                  entrepreneurship, collaboration and opportunity. Every referral,
                  introduction, mentorship and partnership moves that number.
                </p>
              </div>

              <div className="pt-6">
                <Link
                  href="/1-million-mission"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#0062D2] font-semibold text-xs border border-blue-200 shadow-xs hover:bg-blue-50 transition-all"
                >
                  <span>See the 1 Million Mission</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: CLOSING ROYAL BLUE BANNER ─────────────────────── */}
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
              <p className="text-sm font-semibold tracking-wider text-sky-200 uppercase">
                None of these entrepreneurs knew each other before a Circle put them in the same room.
              </p>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.1]">
                Build Your Business. Build Your Relationships.
                <br />
                Build Your Circle.
              </h2>

              {/* App Store & Google Play Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-black text-white hover:bg-slate-900 transition-all shadow-md group border border-white/20"
                >
                  <svg
                    className="w-7 h-7 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.09 1.73-.95 2.76 1.01.08 2.05-.51 2.68-1.26z" />
                  </svg>
                  <div className="text-left leading-none">
                    <span className="text-[10px] text-slate-300 block mb-0.5">
                      Download on the
                    </span>
                    <span className="text-base font-semibold tracking-tight text-white block">
                      App Store
                    </span>
                  </div>
                </a>

                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-black text-white hover:bg-slate-900 transition-all shadow-md group border border-white/20"
                >
                  <svg
                    className="w-6 h-6 fill-current text-white"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M3.609 1.814L13.793 12 3.61 22.186A1.85 1.85 0 0 1 3 20.875V3.125c0-.495.213-.968.609-1.311zm11.605 11.607l2.259 2.259-11.45 6.505 9.191-8.764zm0-2.842L6.023 1.815l11.45 6.505-2.259 2.259zm1.42 1.421l3.52-2.001c1.077-.612 1.077-1.611 0-2.223l-3.52-2.001-2.128 2.128 2.128 2.097z" />
                  </svg>
                  <div className="text-left leading-none">
                    <span className="text-[10px] text-slate-300 block mb-0.5">
                      GET IT ON
                    </span>
                    <span className="text-base font-semibold tracking-tight text-white block">
                      Google Play
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Cursive Script */}
            <div className="lg:col-span-4 text-center lg:text-right">
              <p
                className="text-3xl sm:text-4xl lg:text-5xl font-light italic leading-tight text-white drop-shadow-lg"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                A Stronger
                <br />
                Tomorrow.
                <br />
                Together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MODAL: FULL STORY DETAILS (THE 6 MANDATORY ELEMENTS) ────────── */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedStory(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Header */}
            <div className="relative h-64 sm:h-72 w-full bg-slate-950">
              <Image
                src={selectedStory.image}
                alt={`${selectedStory.peer1.name} and ${selectedStory.peer2.name}`}
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-blue-600 text-white inline-block mb-2">
                  Way of Collaboration: {selectedStory.way}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold leading-tight">
                  {selectedStory.headline}
                </h3>
              </div>
            </div>

            {/* Modal Body: 6 Elements */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Element 1 & 2: Two Peers, Businesses, Cities & Circle */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    First Peer
                  </span>
                  <p className="text-sm font-bold text-slate-900">
                    {selectedStory.peer1.name}
                  </p>
                  <p className="text-xs text-slate-600">
                    {selectedStory.peer1.business} · {selectedStory.peer1.city}
                  </p>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Collaborating Peer
                  </span>
                  <p className="text-sm font-bold text-slate-900">
                    {selectedStory.peer2.name}
                  </p>
                  <p className="text-xs text-slate-600">
                    {selectedStory.peer2.business} · {selectedStory.peer2.city}
                  </p>
                </div>
              </div>

              <div className="text-xs text-slate-500 font-medium">
                <strong>Meeting Room / Circle:</strong> {selectedStory.circle}
              </div>

              {/* Elements 3, 4, 5: Before, What Happened, Now */}
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-slate-400 space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block">
                    Before: The Situation
                  </span>
                  <p className="text-slate-700 leading-relaxed">
                    {selectedStory.situation}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-blue-50/60 border-l-4 border-[#0062D2] space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0062D2] block">
                    What Happened: The Specific Act of Collaboration
                  </span>
                  <p className="text-slate-800 leading-relaxed">
                    {selectedStory.whatHappened}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50/70 border-l-4 border-emerald-600 space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block">
                    Now: The Verified Outcome
                  </span>
                  <p className="text-slate-900 font-semibold leading-relaxed">
                    {selectedStory.now}
                  </p>
                </div>
              </div>

              {/* Verification Stamp */}
              <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  Confirmed by both Peers & Logged in Unity
                </span>
                <button
                  onClick={() => setSelectedStory(null)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
