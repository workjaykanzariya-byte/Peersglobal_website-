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
  Building2,
  MapPin,
  Calendar,
  Quote,
  CheckCircle2,
  ShieldCheck,
  Target,
  Search,
  Filter,
  Briefcase,
  GraduationCap,
  Sparkles,
  Award,
  HelpCircle,
  Network,
  Share2,
  Eye,
  Heart,
  CheckSquare,
  DollarSign,
  Layers,
  ArrowDown,
} from 'lucide-react'

// ─── 4 Stats Bar ────────────────────────────────────────────────────────────
const STATS = [
  {
    icon: Users,
    value: '10,000+',
    label: 'Entrepreneurs',
  },
  {
    icon: Handshake,
    value: '1,00,000+',
    label: 'Collaborations',
  },
  {
    icon: Building2,
    value: '200+',
    label: 'Cities',
  },
  {
    icon: Globe2,
    value: '25+',
    label: 'Countries',
  },
]

// ─── 10 Ways Counters (Sidebar) ─────────────────────────────────────────────
const WAYS_COUNTERS = [
  {
    way: 'Business Referral',
    count: '2,840',
    icon: Handshake,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
  },
  {
    way: 'Mentorship',
    count: '1,920',
    icon: GraduationCap,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
  },
  {
    way: 'Joint Venture',
    count: '860',
    icon: Users,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    way: 'Knowledge Sharing',
    count: '2,150',
    icon: Award,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
  {
    way: 'Problem Solving',
    count: '1,430',
    icon: HelpCircle,
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
  },
  {
    way: 'Vendor Connect',
    count: '980',
    icon: Layers,
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
  },
  {
    way: 'Funding Access',
    count: '720',
    icon: DollarSign,
    color: 'text-amber-700',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
  },
  {
    way: 'Visibility & PR',
    count: '1,680',
    icon: Eye,
    color: 'text-pink-600',
    bg: 'bg-pink-50',
    border: 'border-pink-100',
  },
  {
    way: 'Emotional Support',
    count: '1,260',
    icon: Heart,
    color: 'text-red-500',
    bg: 'bg-red-50',
    border: 'border-red-100',
  },
  {
    way: 'Execution Support',
    count: '1,040',
    icon: CheckSquare,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-100',
  },
]

// ─── Live Feed Wins Data ───────────────────────────────────────────────────
export interface CollaborationWin {
  id: string
  giver: {
    name: string
    business: string
    avatar: string
  }
  receiver: {
    name: string
    business: string
    avatar: string
  }
  way: string
  wayBadgeColor: string
  city: string
  circle: string
  industry: string
  date: string
  description: string
}

const INITIAL_WINS: CollaborationWin[] = [
  {
    id: 'win-1',
    giver: {
      name: 'Rohan Mehta',
      business: 'Mehta Packaging',
      avatar: '/images/peers-avatars/amit-desai.jpg',
    },
    receiver: {
      name: 'Jignesh Shah',
      business: 'Shah Trading',
      avatar: '/images/peers-avatars/rajesh-shah.jpg',
    },
    way: 'Business Referral',
    wayBadgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    city: 'Ahmedabad',
    circle: 'MSME Circle',
    industry: 'Packaging & Logistics',
    date: '12 Jun 2026',
    description: 'Referred a reliable packaging supplier for their new product line.',
  },
  {
    id: 'win-2',
    giver: {
      name: 'Priya Desai',
      business: 'Desai Exports',
      avatar: '/images/peers-avatars/priya-desai.jpg',
    },
    receiver: {
      name: 'Amit Trivedi',
      business: 'Trivedi Chemicals',
      avatar: '/images/peers-avatars/vikram-patel.jpg',
    },
    way: 'Knowledge Sharing',
    wayBadgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    city: 'Surat',
    circle: 'Manufacturing Circle',
    industry: 'Chemical & Manufacturing',
    date: '11 Jun 2026',
    description: 'Shared insights on export documentation, saving weeks of effort.',
  },
  {
    id: 'win-3',
    giver: {
      name: 'Neha Patel',
      business: 'Patel HR Solutions',
      avatar: '/images/peers-avatars/neha-kothari.jpg',
    },
    receiver: {
      name: 'Simran Kaur',
      business: 'Kaur Tech',
      avatar: '/images/peers-avatars/fatima-khan.jpg',
    },
    way: 'Mentorship',
    wayBadgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
    city: 'Bengaluru',
    circle: 'Technology Circle',
    industry: 'Technology & SaaS',
    date: '10 Jun 2026',
    description: 'Guided on building a structured hiring process.',
  },
  {
    id: 'win-4',
    giver: {
      name: 'Karan Malhotra',
      business: 'Malhotra Logistics',
      avatar: '/images/peers-avatars/anand-sharma.jpg',
    },
    receiver: {
      name: 'Vikram Rao',
      business: 'Rao Industries',
      avatar: '/images/peers-avatars/pradeep-joshi.jpg',
    },
    way: 'Joint Venture',
    wayBadgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    city: 'Mumbai',
    circle: 'Logistics Circle',
    industry: 'Logistics & Trade',
    date: '9 Jun 2026',
    description: 'Exploring a joint bid for a government contract.',
  },
  {
    id: 'win-5',
    giver: {
      name: 'Fatima Khan',
      business: 'Khan Education',
      avatar: '/images/peers-avatars/fatima-khan.jpg',
    },
    receiver: {
      name: 'Anita Sharma',
      business: 'Sharma Media',
      avatar: '/images/peers-avatars/neha-kothari.jpg',
    },
    way: 'Visibility & PR',
    wayBadgeColor: 'bg-pink-50 text-pink-700 border-pink-200',
    city: 'Delhi',
    circle: 'Education Circle',
    industry: 'Education & Media',
    date: '8 Jun 2026',
    description: 'Featured their work in a media interview.',
  },
  {
    id: 'win-6',
    giver: {
      name: 'Sandeep Kulkarni',
      business: 'Kulkarni Solutions',
      avatar: '/images/peers-avatars/vikram-patel.jpg',
    },
    receiver: {
      name: 'Rahul Jain',
      business: 'Jain Motors',
      avatar: '/images/peers-avatars/amit-desai.jpg',
    },
    way: 'Vendor Connect',
    wayBadgeColor: 'bg-teal-50 text-teal-700 border-teal-200',
    city: 'Pune',
    circle: 'Automotive Circle',
    industry: 'Automotive & Heavy Industry',
    date: '7 Jun 2026',
    description: 'Introduced a trusted vendor for industrial equipment.',
  },
  {
    id: 'win-7',
    giver: {
      name: 'Arjun Nair',
      business: 'Nair Consulting',
      avatar: '/images/peers-avatars/rajesh-shah.jpg',
    },
    receiver: {
      name: 'Deepak Verma',
      business: 'Verma Foods',
      avatar: '/images/peers-avatars/pradeep-joshi.jpg',
    },
    way: 'Problem Solving',
    wayBadgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
    city: 'Hyderabad',
    circle: 'Food & Beverage Circle',
    industry: 'Food & Hospitality',
    date: '6 Jun 2026',
    description: 'Helped resolve a supply chain issue with a practical solution.',
  },
  {
    id: 'win-8',
    giver: {
      name: 'Pooja Singh',
      business: 'Singh Finance',
      avatar: '/images/peers-avatars/priya-desai.jpg',
    },
    receiver: {
      name: 'Manish Agarwal',
      business: 'Agarwal Infra',
      avatar: '/images/peers-avatars/anand-sharma.jpg',
    },
    way: 'Funding Access',
    wayBadgeColor: 'bg-violet-50 text-violet-700 border-violet-200',
    city: 'Jaipur',
    circle: 'Real Estate Circle',
    industry: 'Infrastructure & Finance',
    date: '5 Jun 2026',
    description: 'Introduced to an investor, now in due diligence.',
  },
]

const MORE_WINS: CollaborationWin[] = [
  {
    id: 'win-9',
    giver: {
      name: 'Kavita Joshi',
      business: 'Joshi Textiles',
      avatar: '/images/peers-avatars/neha-kothari.jpg',
    },
    receiver: {
      name: 'Siddharth Mehta',
      business: 'Mehta Retail',
      avatar: '/images/peers-avatars/amit-desai.jpg',
    },
    way: 'Execution Support',
    wayBadgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    city: 'Ahmedabad',
    circle: 'Retail & Apparel Circle',
    industry: 'Retail & Textiles',
    date: '4 Jun 2026',
    description: 'Assisted in coordinating urgent festival shipment dispatches.',
  },
  {
    id: 'win-10',
    giver: {
      name: 'Gaurav Dave',
      business: 'Dave Diagnostics',
      avatar: '/images/peers-avatars/vikram-patel.jpg',
    },
    receiver: {
      name: 'Dr. Hetal Mehta',
      business: 'Mehta Hospital',
      avatar: '/images/peers-avatars/priya-desai.jpg',
    },
    way: 'Emotional Support',
    wayBadgeColor: 'bg-red-50 text-red-700 border-red-200',
    city: 'Vadodara',
    circle: 'Healthcare Circle',
    industry: 'Healthcare & Pharma',
    date: '3 Jun 2026',
    description: 'Gave crucial perspective and encouragement during hospital expansion review.',
  },
]

export function CollaborationWinsClient() {
  const [winsList, setWinsList] = useState<CollaborationWin[]>(INITIAL_WINS)
  const [hasLoadedMore, setHasLoadedMore] = useState(false)

  // Filters
  const [selectedWay, setSelectedWay] = useState<string>('All')
  const [selectedCity, setSelectedCity] = useState<string>('All')
  const [selectedCircle, setSelectedCircle] = useState<string>('All')
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All')

  const ways = [
    'All',
    'Business Referral',
    'Mentorship',
    'Joint Venture',
    'Knowledge Sharing',
    'Problem Solving',
    'Vendor Connect',
    'Funding Access',
    'Visibility & PR',
    'Emotional Support',
    'Execution Support',
  ]

  const cities = ['All', 'Ahmedabad', 'Surat', 'Bengaluru', 'Mumbai', 'Delhi', 'Pune', 'Hyderabad', 'Jaipur']
  const circles = [
    'All',
    'MSME Circle',
    'Manufacturing Circle',
    'Technology Circle',
    'Logistics Circle',
    'Education Circle',
    'Automotive Circle',
    'Food & Beverage Circle',
    'Real Estate Circle',
  ]
  const industries = [
    'All',
    'Packaging & Logistics',
    'Chemical & Manufacturing',
    'Technology & SaaS',
    'Logistics & Trade',
    'Education & Media',
    'Automotive & Heavy Industry',
    'Food & Hospitality',
    'Infrastructure & Finance',
  ]

  // Filtered List
  const filteredWins = useMemo(() => {
    return winsList.filter((win) => {
      const matchWay = selectedWay === 'All' || win.way.toLowerCase() === selectedWay.toLowerCase()
      const matchCity = selectedCity === 'All' || win.city.toLowerCase() === selectedCity.toLowerCase()
      const matchCircle = selectedCircle === 'All' || win.circle.toLowerCase() === selectedCircle.toLowerCase()
      const matchIndustry =
        selectedIndustry === 'All' || win.industry.toLowerCase() === selectedIndustry.toLowerCase()

      return matchWay && matchCity && matchCircle && matchIndustry
    })
  }, [winsList, selectedWay, selectedCity, selectedCircle, selectedIndustry])

  const handleLoadMore = () => {
    if (!hasLoadedMore) {
      setWinsList((prev) => [...prev, ...MORE_WINS])
      setHasLoadedMore(true)
    }
  }

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
            <Link
              href="/stories"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Community Life
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">Collaboration Wins</span>
          </nav>
        </div>
      </div>

      {/* ─── SECTION 1: HERO (LIVE RECORD WITH HORIZONTAL EDGE FADE) ───────── */}
      <section className="relative pt-10 pb-16 lg:pt-14 lg:pb-20 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 z-10">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2] bg-blue-50/80 px-3 py-1 rounded-full border border-blue-200/60">
                  — COMMUNITY LIFE —
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-950 tracking-tight leading-[1.1]">
                Collaboration Wins
              </h1>

              <p className="text-2xl sm:text-3xl font-serif text-slate-800 font-medium leading-snug">
                Every week, entrepreneurs in this community change something for each other.
              </p>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                This is the running record.
              </p>

              <div className="pt-2">
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0062D2] text-white font-medium text-sm shadow-md hover:bg-[#0052B4] hover:shadow-lg transition-all duration-200 group"
                >
                  <span>Download Unity App</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Right Hero Visual with Horizontal Left Edge Fade */}
            <div className="lg:col-span-6 relative">
              <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/peer-stories-hero.jpg"
                  alt="Peers Global entrepreneurs shaking hands warmly at a business summit"
                  fill
                  className="object-cover object-center"
                  priority
                />

                {/* Soft horizontal gradient edge fade on the left side */}
                <div className="absolute inset-y-0 left-0 w-28 sm:w-40 bg-gradient-to-r from-white via-white/60 to-transparent pointer-events-none z-10" />

                {/* Ambient Top & Bottom Vignettes */}
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/20 to-transparent pointer-events-none z-10" />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none z-10" />

                {/* Stage Backdrop Brand Overlay */}
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
                        <div className="text-2xl sm:text-3xl font-bold font-serif text-slate-950 tracking-tight">
                          {stat.value}
                        </div>
                        <div className="text-xs sm:text-sm text-slate-600 font-medium">
                          {stat.label}
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

      {/* ─── SECTION 2: THE BIGGER PICTURE (TWO SPEEDS) ──────────────────── */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
                — THE BIGGER PICTURE —
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 tracking-tight leading-tight">
                The live feed of what this community produces.
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                <p>
                  A <strong>Peer Story</strong> is a full account of a collaboration, written up properly.
                </p>
                <p>
                  A <strong>Collaboration Win</strong> is shorter. One line. What one Peer did for another, this week, confirmed by the person who received it.
                </p>
                <p>
                  <strong>Together</strong> they show the same thing at two speeds — the depth of what happens here, and the volume of it.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/stories"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0062D2] font-semibold text-xs sm:text-sm border border-blue-200 shadow-sm hover:bg-blue-50 hover:border-blue-400 transition-all"
                >
                  <span>Read Full Peer Stories</span>
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
                      “When entrepreneurs support each other, everyone goes further.”
                    </p>
                  </div>

                  <div className="pt-6">
                    <span className="text-[11px] font-bold tracking-widest uppercase text-[#0062D2]">
                      PEERS GLOBAL
                    </span>
                  </div>
                </div>

                {/* Right Half: Mountain Landscape */}
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
                      className="text-2xl sm:text-3xl font-light italic text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] leading-tight"
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
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: THIS MONTH'S WINS (FEED & SIDEBAR LAYOUT) ─────────── */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* ─── LEFT COLUMN: LIVE FEED (8 SPAN) ─── */}
            <div className="lg:col-span-8 space-y-6">
              {/* Header & Live Indicator */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
                    — THIS MONTH’S WINS —
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 mt-1">
                    Real collaborations. Real entrepreneurs.
                  </h2>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold self-start sm:self-auto">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Showing latest wins</span>
                </div>
              </div>

              {/* Filters Toolbar */}
              <div className="bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-xs grid grid-cols-2 sm:grid-cols-4 gap-2">
                <select
                  value={selectedWay}
                  onChange={(e) => setSelectedWay(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs text-slate-800 font-medium focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
                >
                  {ways.map((w) => (
                    <option key={w} value={w}>
                      {w === 'All' ? 'All Ways of Collaboration' : w}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs text-slate-800 font-medium focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
                >
                  {cities.map((c) => (
                    <option key={c} value={c}>
                      {c === 'All' ? 'All Cities' : c}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedCircle}
                  onChange={(e) => setSelectedCircle(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs text-slate-800 font-medium focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
                >
                  {circles.map((cir) => (
                    <option key={cir} value={cir}>
                      {cir === 'All' ? 'All Circles' : cir}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs text-slate-800 font-medium focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
                >
                  {industries.map((ind) => (
                    <option key={ind} value={ind}>
                      {ind === 'All' ? 'All Industries' : ind}
                    </option>
                  ))}
                </select>
              </div>

              {/* Feed Card Entries */}
              <div className="space-y-3.5">
                {filteredWins.length === 0 ? (
                  <div className="p-8 text-center bg-white rounded-2xl border border-slate-200">
                    <p className="text-sm text-slate-500">
                      No collaboration wins found matching the selected filters.
                    </p>
                    <button
                      onClick={() => {
                        setSelectedWay('All')
                        setSelectedCity('All')
                        setSelectedCircle('All')
                        setSelectedIndustry('All')
                      }}
                      className="mt-3 px-4 py-1.5 rounded-full bg-[#0062D2] text-white text-xs font-semibold"
                    >
                      Clear Filters
                    </button>
                  </div>
                ) : (
                  filteredWins.map((win) => (
                    <div
                      key={win.id}
                      className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-xs hover:border-blue-300 hover:shadow-sm transition-all space-y-3"
                    >
                      {/* Top Row: Giver ➔ Receiver + Way Badge + Meta Info + Date */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        {/* Two Parties Involved */}
                        <div className="flex items-center gap-2.5 flex-wrap">
                          {/* Giver */}
                          <div className="flex items-center gap-2">
                            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-slate-200 bg-slate-100 shrink-0">
                              <Image
                                src={win.giver.avatar}
                                alt={win.giver.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-slate-900 leading-tight">
                                {win.giver.name}
                              </div>
                              <div className="text-[10px] text-slate-500 leading-tight">
                                {win.giver.business}
                              </div>
                            </div>
                          </div>

                          {/* Arrow */}
                          <div className="text-slate-400 font-bold px-1">
                            ➔
                          </div>

                          {/* Receiver */}
                          <div className="flex items-center gap-2">
                            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-slate-200 bg-slate-100 shrink-0">
                              <Image
                                src={win.receiver.avatar}
                                alt={win.receiver.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-slate-900 leading-tight">
                                {win.receiver.name}
                              </div>
                              <div className="text-[10px] text-slate-500 leading-tight">
                                {win.receiver.business}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Badges & Date */}
                        <div className="flex items-center gap-2 flex-wrap">
                          <span
                            className={`px-2.5 py-0.5 rounded-md text-[11px] font-semibold border ${win.wayBadgeColor}`}
                          >
                            {win.way}
                          </span>
                          <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-slate-400" />
                            {win.city}
                          </span>
                          <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                            <Building2 className="w-3 h-3 text-slate-400" />
                            {win.circle}
                          </span>
                          <span className="text-[11px] text-slate-400 font-medium ml-1">
                            {win.date}
                          </span>
                        </div>
                      </div>

                      {/* One Line Description */}
                      <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed pt-1 border-t border-slate-100">
                        {win.description}
                      </p>
                    </div>
                  ))
                )}
              </div>

              {/* Load More Wins Button */}
              {!hasLoadedMore && (
                <div className="pt-2 text-center">
                  <button
                    onClick={handleLoadMore}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-50 text-[#0062D2] hover:bg-blue-100 text-xs font-semibold border border-blue-200 transition-all cursor-pointer shadow-xs"
                  >
                    <span>Load More Wins</span>
                    <ArrowDown className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

            {/* ─── RIGHT COLUMN: SIDEBAR WIDGETS (4 SPAN) ─── */}
            <div className="lg:col-span-4 space-y-6">
              {/* Widget 1: Wins by Way of Collaboration */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm space-y-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
                    — WINS BY WAY OF COLLABORATION —
                  </span>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Live tally confirmed by receiving entrepreneurs.
                  </p>
                </div>

                {/* 10 Ways Grid Counters */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
                  {WAYS_COUNTERS.map((item) => {
                    const Icon = item.icon
                    return (
                      <div
                        key={item.way}
                        className={`p-2.5 rounded-xl ${item.bg} border ${item.border} text-center flex flex-col items-center justify-center`}
                      >
                        <Icon className={`w-4 h-4 ${item.color} mb-1`} />
                        <span className="text-sm font-bold font-serif text-slate-950 leading-tight">
                          {item.count}
                        </span>
                        <span className="text-[10px] font-medium text-slate-600 leading-tight mt-0.5 line-clamp-2">
                          {item.way}
                        </span>
                      </div>
                    )
                  })}
                </div>

                {/* CTA Link */}
                <div className="pt-2">
                  <Link
                    href="/10-ways-of-collaboration"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white text-[#0062D2] font-semibold text-xs border border-blue-200 hover:bg-blue-50 transition-all"
                  >
                    <span>See the 10 Ways</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Widget 2: Where These Come From */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
                  — WHERE THESE COME FROM —
                </span>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 border border-blue-100">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Every win here was logged in the Unity App</strong> and confirmed by the Peer who received it. Nobody records their own contribution unchallenged. That single rule is what makes this a record rather than a marketing feed.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/the-currency"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white text-[#0062D2] font-semibold text-xs border border-blue-200 hover:bg-blue-50 transition-all"
                  >
                    <span>Understand the Currency</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Widget 3: One Million Lives */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm space-y-4 relative overflow-hidden">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
                  — ONE MILLION LIVES —
                </span>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 border border-blue-100">
                    <Target className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 text-xs text-slate-600 leading-relaxed">
                    <p>
                      Every win counts toward one million lives.
                    </p>
                    <p className="font-semibold text-slate-900">
                      We are not counting members. We are counting lives impacted.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/1-million-mission"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white text-[#0062D2] font-semibold text-xs border border-blue-200 hover:bg-blue-50 transition-all"
                  >
                    <span>See the 1 Million Mission</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: CLOSING BANNER ─── */}
      <section className="relative isolate overflow-hidden bg-[#040F24] py-20 sm:py-28 text-white">
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

        {/* Subtle Geometric Orbital Line Art */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-[min(58vw,760px)] opacity-35">
          <svg
            viewBox="0 0 760 520"
            fill="none"
            className="h-full w-full"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M760 40C555 45 405 145 375 310C355 423 265 493 70 520" stroke="currentColor" strokeWidth="1" className="text-blue-300/30" />
            <path d="M760 120C590 125 470 205 445 335C424 442 335 500 180 520" stroke="currentColor" strokeWidth="1" strokeDasharray="5 8" className="text-sky-200/25" />
            <path d="M760 215C640 220 565 278 540 370C519 446 470 490 390 520" stroke="currentColor" strokeWidth="1" className="text-blue-200/20" />
            <circle cx="540" cy="370" r="4" fill="currentColor" className="text-sky-300/60" />
            <circle cx="540" cy="370" r="13" stroke="currentColor" strokeWidth="1" className="text-sky-300/25" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-8 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-200">
                — BUILD A STRONGER TOMORROW —
              </span>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.1]">
                Build Your Business.
                <br />
                Build Your Relationships.
                <br />
                Build Your Circle.
              </h2>

            </div>

            {/* Right Cursive Script */}
            <div className="lg:col-span-4 text-center lg:text-right select-none pointer-events-none">
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
