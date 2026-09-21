'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Search,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Building2,
  MapPin,
  Sparkles,
  Users2,
  ShieldCheck,
  Crown,
  Star,
  CheckCircle2,
  Award,
  ExternalLink,
  MessageSquare,
  UserPlus,
  Briefcase,
  Layers,
  Filter,
  X,
  Share2,
  HelpCircle,
  FileCheck2,
} from 'lucide-react'

// ─── Stat Pillars ─────────────────────────────────────────────────────────
const STATS = [
  {
    icon: Users2,
    value: '10,000+',
    label: 'Entrepreneurs',
  },
  {
    icon: Layers,
    value: '200+',
    label: 'Circles',
  },
  {
    icon: MapPin,
    value: '75+',
    label: 'Cities',
  },
  {
    icon: Building2,
    value: '10+',
    label: 'Countries',
  },
]

// ─── 4 Search Value Pillars ────────────────────────────────────────────────
const SEARCH_PILLARS = [
  {
    icon: Building2,
    title: 'Search by industry',
    desc: 'Find the manufacturers, the technology firms, the healthcare businesses.',
  },
  {
    icon: MapPin,
    title: 'Search by city',
    desc: 'Before you enter a market, find who is already in it.',
  },
  {
    icon: Sparkles,
    title: 'Search by capability',
    desc: 'Someone who exports, someone who has raised capital, someone who has scaled a team.',
  },
  {
    icon: Users2,
    title: 'Search by Circle',
    desc: 'See who sits in any room in the community.',
  },
]

// ─── Featured Peers Data ──────────────────────────────────────────────────
export interface PeerMember {
  id: string
  name: string
  role: string
  company: string
  city: string
  state: string
  industry: string
  circle: string
  standing: 'Charter Peer' | 'Leadership Peer' | 'Active Peer'
  avatar: string
  tags: string[]
  livesImpacted: number
  rating: number
  whatTheyOffer: string
  whatTheyNeed: string
  verified: boolean
}

const PEERS_DATA: PeerMember[] = [
  {
    id: 'p-1',
    name: 'Amit Shah',
    role: 'Founder & CEO',
    company: 'Shah Industries',
    city: 'Ahmedabad',
    state: 'Gujarat',
    industry: 'Manufacturing',
    circle: 'Ahmedabad Founders Circle',
    standing: 'Charter Peer',
    avatar: '/images/peers-avatars/amit-desai.jpg',
    tags: ['Export', 'Operations', 'Mentorship'],
    livesImpacted: 142,
    rating: 4.95,
    whatTheyOffer: 'Precision engineering, global supply chain sourcing, factory automation',
    whatTheyNeed: 'European distributor introductions, green energy technology partners',
    verified: true,
  },
  {
    id: 'p-2',
    name: 'Neha Desai',
    role: 'Co-Founder',
    company: 'Craft & Co.',
    city: 'Mumbai',
    state: 'Maharashtra',
    industry: 'Retail & E-commerce',
    circle: 'Mumbai Retail Circle',
    standing: 'Leadership Peer',
    avatar: '/images/peers-avatars/neha-kothari.jpg',
    tags: ['Brand Building', 'Marketing', 'Growth'],
    livesImpacted: 88,
    rating: 4.9,
    whatTheyOffer: 'Direct-to-consumer brand architecture, retail distribution, performance marketing',
    whatTheyNeed: 'Sustainable packaging suppliers, angel investor network in consumer tech',
    verified: true,
  },
  {
    id: 'p-3',
    name: 'Rohan Mehta',
    role: 'Founder',
    company: 'TechNova Solutions',
    city: 'Bengaluru',
    state: 'Karnataka',
    industry: 'IT Services',
    circle: 'Bengaluru Tech Circle',
    standing: 'Active Peer',
    avatar: '/images/peers-avatars/rajesh-shah.jpg',
    tags: ['Technology', 'Scaling', 'Investors'],
    livesImpacted: 64,
    rating: 4.85,
    whatTheyOffer: 'Enterprise SaaS architecture, AI integration, tech team building',
    whatTheyNeed: 'US-based enterprise B2B sales leads, Series A syndicate leads',
    verified: true,
  },
  {
    id: 'p-4',
    name: 'Priya Iyer',
    role: 'Director',
    company: 'HealthFirst Clinics',
    city: 'Chennai',
    state: 'Tamil Nadu',
    industry: 'Healthcare',
    circle: 'Chennai Healthcare Circle',
    standing: 'Active Peer',
    avatar: '/images/peers-avatars/priya-desai.jpg',
    tags: ['Healthcare', 'Operations', 'Collaboration'],
    livesImpacted: 110,
    rating: 4.9,
    whatTheyOffer: 'Clinical ops management, regulatory compliance, health-tech diagnostics',
    whatTheyNeed: 'Medical equipment leasing partners, tier-2 city franchise operators',
    verified: true,
  },
  {
    id: 'p-5',
    name: 'Karan Malhotra',
    role: 'Founder & CEO',
    company: 'Malhotra Exports',
    city: 'Surat',
    state: 'Gujarat',
    industry: 'Textiles & Apparel',
    circle: 'Surat Exporters Circle',
    standing: 'Charter Peer',
    avatar: '/images/peers-avatars/vikram-patel.jpg',
    tags: ['Export', 'Supply Chain', 'Textiles'],
    livesImpacted: 120,
    rating: 4.92,
    whatTheyOffer: 'High-volume fabric manufacturing, sustainable yarn sourcing, export documentation',
    whatTheyNeed: 'Latin American market distributors, fast-fashion OEM buyers',
    verified: true,
  },
  {
    id: 'p-6',
    name: 'Fatima Khan',
    role: 'Founder',
    company: 'GreenTech Logistics',
    city: 'Pune',
    state: 'Maharashtra',
    industry: 'Logistics',
    circle: 'Pune Industry Circle',
    standing: 'Leadership Peer',
    avatar: '/images/peers-avatars/fatima-khan.jpg',
    tags: ['EV Fleet', 'Operations', 'Supply Chain'],
    livesImpacted: 76,
    rating: 4.88,
    whatTheyOffer: 'Cold-chain logistics, last-mile EV fleet deployment, warehouse management',
    whatTheyNeed: 'FMCG brand long-term contracts, lithium battery recycling partners',
    verified: true,
  },
  {
    id: 'p-7',
    name: 'Pradeep Joshi',
    role: 'Managing Partner',
    company: 'Apex Capital Advisors',
    city: 'Delhi',
    state: 'NCR',
    industry: 'Finance & Legal',
    circle: 'Delhi NCR Leadership Circle',
    standing: 'Charter Peer',
    avatar: '/images/peers-avatars/pradeep-joshi.jpg',
    tags: ['Fundraising', 'M&A', 'Governance'],
    livesImpacted: 154,
    rating: 4.98,
    whatTheyOffer: 'Structured debt advisory, family office governance, cross-border M&A',
    whatTheyNeed: 'Promoters seeking growth capital (₹20Cr - ₹100Cr EBITDA)',
    verified: true,
  },
  {
    id: 'p-8',
    name: 'Anand Sharma',
    role: 'Managing Director',
    company: 'Sharma Agro Organics',
    city: 'Indore',
    state: 'Madhya Pradesh',
    industry: 'Agriculture & FMCG',
    circle: 'Indore Agri-Tech Circle',
    standing: 'Active Peer',
    avatar: '/images/peers-avatars/anand-sharma.jpg',
    tags: ['Food Processing', 'Exports', 'Agritech'],
    livesImpacted: 95,
    rating: 4.87,
    whatTheyOffer: 'Contract organic farming, export-grade spices, food processing infrastructure',
    whatTheyNeed: 'Modern retail shelf space in UAE/GCC, food lab certification testing',
    verified: true,
  },
]

const POPULAR_SEARCHES = [
  'Manufacturers',
  'IT Services',
  'Healthcare',
  'Exporters',
  'Fundraising',
  'Marketing',
  'Operations',
  'Ahmedabad',
  'Mumbai',
  'Delhi',
]

const INDUSTRIES = [
  'All Industries',
  'Manufacturing',
  'IT Services',
  'Healthcare',
  'Retail & E-commerce',
  'Textiles & Apparel',
  'Logistics',
  'Finance & Legal',
  'Agriculture & FMCG',
]

const CITIES = [
  'All Cities',
  'Ahmedabad',
  'Mumbai',
  'Bengaluru',
  'Chennai',
  'Surat',
  'Pune',
  'Delhi',
  'Indore',
]

const CAPABILITIES = [
  'All Capabilities',
  'Export & Global Trade',
  'Operations & Supply Chain',
  'Fundraising & Capital',
  'Brand Building & Marketing',
  'Technology & AI',
  'Mentorship & Advisory',
]

const CIRCLES = [
  'All Circles',
  'Ahmedabad Founders Circle',
  'Mumbai Retail Circle',
  'Bengaluru Tech Circle',
  'Chennai Healthcare Circle',
  'Surat Exporters Circle',
  'Pune Industry Circle',
  'Delhi NCR Leadership Circle',
  'Indore Agri-Tech Circle',
]

export function PeerDirectoryClient() {
  // Search and Filter State
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries')
  const [selectedCity, setSelectedCity] = useState('All Cities')
  const [selectedCapability, setSelectedCapability] = useState('All Capabilities')
  const [selectedCircle, setSelectedCircle] = useState('All Circles')
  
  // Carousel State
  const [carouselIndex, setCarouselIndex] = useState(0)

  // Profile Card Interactive Tab
  const [activeProfileTab, setActiveProfileTab] = useState<
    'About' | 'What I Offer' | 'What I\'m Looking For' | 'My Circles' | 'Contribution Record' | 'Verified Business'
  >('About')

  // Connect Modal State
  const [connectModalPeer, setConnectModalPeer] = useState<PeerMember | null>(null)
  const [connectSent, setConnectSent] = useState(false)

  // Filtered Peers List
  const filteredPeers = useMemo(() => {
    return PEERS_DATA.filter((peer) => {
      const matchSearch =
        !searchTerm ||
        peer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        peer.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        peer.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase())) ||
        peer.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        peer.industry.toLowerCase().includes(searchTerm.toLowerCase())

      const matchIndustry =
        selectedIndustry === 'All Industries' || peer.industry === selectedIndustry
      const matchCity = selectedCity === 'All Cities' || peer.city === selectedCity
      const matchCircle = selectedCircle === 'All Circles' || peer.circle === selectedCircle
      const matchCapability =
        selectedCapability === 'All Capabilities' ||
        peer.tags.some((t) =>
          selectedCapability.toLowerCase().includes(t.toLowerCase())
        )

      return matchSearch && matchIndustry && matchCity && matchCircle && matchCapability
    })
  }, [searchTerm, selectedIndustry, selectedCity, selectedCircle, selectedCapability])

  const handlePopularSearchClick = (tag: string) => {
    if (tag === searchTerm) {
      setSearchTerm('')
    } else {
      setSearchTerm(tag)
    }
  }

  const handleConnectClick = (peer: PeerMember) => {
    setConnectModalPeer(peer)
    setConnectSent(false)
  }

  const handleSendConnection = () => {
    setConnectSent(true)
    setTimeout(() => {
      setConnectSent(false)
      setConnectModalPeer(null)
    }, 2000)
  }

  const prevSlide = () => {
    setCarouselIndex((prev) => Math.max(0, prev - 1))
  }

  const nextSlide = () => {
    setCarouselIndex((prev) =>
      Math.min(Math.max(0, filteredPeers.length - 4), prev + 1)
    )
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
              href="/unity"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Unity
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">Peer Directory</span>
          </nav>
        </div>
      </div>

      {/* ─── 1. HERO SECTION ─────────────────────────────────────────────── */}
      <section className="relative pt-10 pb-16 lg:pt-14 lg:pb-20 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-[#0062D2] text-[11px] font-bold tracking-wider uppercase">
                <span>❖</span>
                <span>UNITY</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-950 tracking-tight leading-[1.1]">
                The Peer Directory
              </h1>

              <p className="text-2xl sm:text-3xl font-serif text-slate-800 font-medium leading-snug">
                Every entrepreneur in this community, searchable.
              </p>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                By industry, by city, by capability, by what you need right now.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2 rounded-full border border-blue-400/25 bg-gradient-to-r from-[#072B61] via-[#0052CC] to-[#0066E4] px-7 py-3.5 text-sm font-bold tracking-wide text-white shadow-[0_4px_16px_rgba(0,82,204,0.3)] transition-all duration-300 hover:border-red-400/40 hover:from-[#0B3577] hover:to-[#0056D6] hover:shadow-[0_0_25px_rgba(229,57,53,0.45),0_8px_20px_rgba(0,82,204,0.35)] hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span className="relative z-10">Download Unity App</span>
                  <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                </a>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[460px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80">
                <Image
                  src="/images/who-we-are-friends.jpg"
                  alt="Peers Global community entrepreneurs networking"
                  fill
                  className="object-cover object-center"
                  priority
                />

                {/* Soft Vignette & Atmospheric Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-slate-950/10" />
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white/30 to-transparent pointer-events-none" />

                {/* Scripted Overlay Top Right */}
                <div className="absolute top-6 right-6 text-right z-20 max-w-[240px]">
                  <p
                    className="text-xl sm:text-2xl font-light italic leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
                    style={{ fontFamily: 'var(--font-script, cursive)' }}
                  >
                    Real People.
                    <br />
                    Real Businesses.
                    <br />
                    Real Opportunities.
                  </p>
                </div>

                {/* Floating Testimonial Card Bottom */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-white/60 z-20">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl font-serif text-amber-500 leading-none">“</span>
                    <div>
                      <p className="text-xs sm:text-sm font-serif font-bold text-slate-900 leading-snug">
                        The right connection at the right time can change everything.
                      </p>
                      <p className="text-[11px] font-semibold text-[#0062D2] mt-1.5">
                        — Peers Global
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4-Stat Pillar Strip */}
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
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 border border-blue-100 shadow-xs">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-lg sm:text-xl font-serif font-bold text-slate-950 leading-none">
                          {stat.value}
                        </div>
                        <div className="text-xs text-slate-500 font-medium mt-1">
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

      {/* ─── 2. INTERACTIVE SEARCH PEERS SECTION ────────────────────────── */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC] border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-lg shadow-slate-200/60">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100 shadow-xs">
                  <Search className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-slate-950">
                    Search Peers
                  </h2>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Find the right person. Build something remarkable.
              </p>
            </div>

            {/* Filter Dropdowns Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
              {/* Industry */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Industry
                </label>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:border-[#0062D2] focus:ring-2 focus:ring-blue-500/15 focus:outline-none transition-all shadow-2xs"
                >
                  {INDUSTRIES.map((ind) => (
                    <option key={ind} value={ind}>
                      {ind}
                    </option>
                  ))}
                </select>
              </div>

              {/* City */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  City
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:border-[#0062D2] focus:ring-2 focus:ring-blue-500/15 focus:outline-none transition-all shadow-2xs"
                >
                  {CITIES.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              {/* Capability */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Capability
                </label>
                <select
                  value={selectedCapability}
                  onChange={(e) => setSelectedCapability(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:border-[#0062D2] focus:ring-2 focus:ring-blue-500/15 focus:outline-none transition-all shadow-2xs"
                >
                  {CAPABILITIES.map((cap) => (
                    <option key={cap} value={cap}>
                      {cap}
                    </option>
                  ))}
                </select>
              </div>

              {/* Circle */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Circle
                </label>
                <select
                  value={selectedCircle}
                  onChange={(e) => setSelectedCircle(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:border-[#0062D2] focus:ring-2 focus:ring-blue-500/15 focus:outline-none transition-all shadow-2xs"
                >
                  {CIRCLES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Keyword Input & Search Action */}
            <div className="mt-5 flex flex-col sm:flex-row items-center gap-3">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by name, business or keyword..."
                  className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 py-3 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#0062D2] focus:ring-2 focus:ring-blue-500/15 focus:outline-none transition-all shadow-2xs"
                />
                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              <button
                type="button"
                onClick={() => {}}
                className="w-full sm:w-auto px-8 py-3 rounded-xl bg-[#0062D2] hover:bg-[#0052B4] text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md active:scale-98 shrink-0"
              >
                Search Peers
              </button>
            </div>

            {/* Popular Searches Chip Tags */}
            <div className="mt-5 flex flex-wrap items-center gap-2 pt-3 border-t border-slate-100">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">
                Popular searches:
              </span>
              {POPULAR_SEARCHES.map((tag) => {
                const isActive = searchTerm.toLowerCase() === tag.toLowerCase()
                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => handlePopularSearchClick(tag)}
                    className={`text-[11px] font-semibold px-3 py-1 rounded-full transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#0062D2] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-[#0062D2]'
                    }`}
                  >
                    {tag}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. SEARCH THE WAY BUSINESS ACTUALLY WORKS ───────────────────── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 tracking-tight leading-tight">
                Search the way business actually works
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed pt-2">
                <p className="font-semibold text-slate-900 text-lg">
                  You do not need a list of names. You need the right person.
                </p>
                <p>
                  Every result is a business owner who has agreed to the same Code you have.
                </p>
              </div>
            </div>

            {/* Right 4-Grid Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {SEARCH_PILLARS.map((pillar) => {
                const Icon = pillar.icon
                return (
                  <div
                    key={pillar.title}
                    className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all group flex flex-col justify-between"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center mb-4 border border-blue-100 shadow-2xs group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-serif font-bold text-slate-950 mb-1.5">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. FEATURED PEERS SECTION ───────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Carousel Controls */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950">
                Featured Peers
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Showing {filteredPeers.length} verified business leaders
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={prevSlide}
                disabled={carouselIndex === 0}
                className="w-9 h-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-2xs"
                aria-label="Previous peers"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                disabled={carouselIndex >= Math.max(0, filteredPeers.length - 4)}
                className="w-9 h-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-2xs"
                aria-label="Next peers"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              <a
                href="https://unity.peersglobal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#0062D2] hover:text-[#0052B4] transition-colors ml-2"
              >
                <span>View All Members</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Cards Grid / Carousel */}
          {filteredPeers.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-lg mx-auto">
              <Users2 className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-serif font-bold text-slate-900">
                No Peers match your search criteria
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Try clearing your search terms or filters to browse all members.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchTerm('')
                  setSelectedIndustry('All Industries')
                  setSelectedCity('All Cities')
                  setSelectedCapability('All Capabilities')
                  setSelectedCircle('All Circles')
                }}
                className="mt-4 px-4 py-2 rounded-full bg-blue-50 text-[#0062D2] text-xs font-bold hover:bg-blue-100 transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {filteredPeers
                .slice(carouselIndex, carouselIndex + 4)
                .map((peer) => {
                  const isCharter = peer.standing === 'Charter Peer'
                  const isLeadership = peer.standing === 'Leadership Peer'
                  return (
                    <div
                      key={peer.id}
                      className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between group"
                    >
                      <div>
                        {/* Avatar & Standing Badge */}
                        <div className="flex items-start justify-between gap-3 mb-3.5">
                          <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-slate-100 shadow-sm shrink-0">
                            <Image
                              src={peer.avatar}
                              alt={peer.name}
                              fill
                              className="object-cover"
                            />
                          </div>

                          {isCharter ? (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200/80 shrink-0">
                              <Crown className="w-3 h-3 text-amber-600" />
                              <span>Charter Peer</span>
                            </span>
                          ) : isLeadership ? (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200/80 shrink-0">
                              <Award className="w-3 h-3 text-indigo-600" />
                              <span>Leadership Peer</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 shrink-0">
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                              <span>Active Peer</span>
                            </span>
                          )}
                        </div>

                        {/* Name & Role */}
                        <h3 className="font-serif font-bold text-slate-950 text-base leading-snug group-hover:text-[#0062D2] transition-colors">
                          {peer.name}
                        </h3>
                        <p className="text-xs text-slate-500 font-medium">
                          {peer.role}
                        </p>
                        <p className="text-xs font-semibold text-slate-700">
                          {peer.company}
                        </p>

                        {/* Location & Industry */}
                        <div className="mt-3 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                          <div className="flex items-center gap-1.5 text-slate-500">
                            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            <span className="truncate">
                              {peer.city}, {peer.state}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 text-slate-500">
                            <Briefcase className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            <span className="truncate">{peer.industry}</span>
                          </div>
                        </div>

                        {/* Capability Tags */}
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {peer.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200/60"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Connect Button */}
                      <div className="pt-4 mt-4 border-t border-slate-100">
                        <button
                          type="button"
                          onClick={() => handleConnectClick(peer)}
                          className="w-full py-2 rounded-xl bg-[#0062D2] hover:bg-[#0052B4] text-white text-xs font-bold tracking-wide transition-all shadow-2xs hover:shadow active:scale-98"
                        >
                          Connect
                        </button>
                      </div>
                    </div>
                  )
                })}
            </div>
          )}
        </div>
      </section>

      {/* ─── 5. WHAT A PROFILE CARRIES ───────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
                — PROFILE BLUEPRINT —
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 tracking-tight leading-tight">
                What a profile carries
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                <p>
                  Business, role, industry, city and Circle. What they offer. What they are looking for. Their Peer Standing and the Ways they contribute most.
                </p>
                <p className="font-serif font-bold text-slate-900 text-base sm:text-lg border-l-2 border-[#0062D2] pl-3.5 my-2">
                  And their record. What they have given to this community, confirmed by the entrepreneurs they helped.
                </p>
              </div>

              <div className="pt-3">
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0062D2] text-white font-bold text-xs shadow-md hover:bg-[#0052B4] transition-all"
                >
                  <span>Explore the Directory</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Interactive Profile Mockup Widget */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xl shadow-slate-200/60">
                {/* Profile Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-slate-100 shadow-sm shrink-0">
                      <Image
                        src="/images/peers-avatars/vikram-patel.jpg"
                        alt="Karan Malhotra avatar"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-serif font-bold text-slate-950 text-lg">
                          Karan Malhotra
                        </h3>
                        <span className="inline-flex items-center gap-1 text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                          <Crown className="w-2.5 h-2.5 text-amber-600" />
                          <span>Charter Peer</span>
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 font-medium">
                        Founder & CEO · Malhotra Exports
                      </p>
                      <div className="flex items-center gap-3 text-[11px] text-slate-400 mt-1">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-400" /> Surat, Gujarat
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-3 h-3 text-slate-400" /> Textiles & Apparel
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setConnectModalPeer(PEERS_DATA[4])}
                      className="px-4 py-2 rounded-xl bg-[#0062D2] text-white text-xs font-bold hover:bg-[#0052B4] shadow-xs transition-all"
                    >
                      Connect
                    </button>
                    <button
                      type="button"
                      onClick={() => setConnectModalPeer(PEERS_DATA[4])}
                      className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition-all"
                    >
                      Message
                    </button>
                  </div>
                </div>

                {/* Metrics Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-b border-slate-100">
                  <div className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-100/60">
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block">
                      Lives Impacted
                    </span>
                    <span className="text-lg font-serif font-bold text-slate-900">
                      120
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-100/60">
                    <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider block flex items-center gap-1">
                      <Star className="w-3 h-3 fill-amber-500 text-amber-500" /> Rating
                    </span>
                    <span className="text-lg font-serif font-bold text-slate-900">
                      4.9 / 5.0
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 col-span-2">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                      Top Ways of Contribution
                    </span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      <span className="text-[9.5px] font-semibold px-1.5 py-0.2 rounded bg-white text-slate-700 border border-slate-200">
                        Referrals
                      </span>
                      <span className="text-[9.5px] font-semibold px-1.5 py-0.2 rounded bg-white text-slate-700 border border-slate-200">
                        Mentorship
                      </span>
                      <span className="text-[9.5px] font-semibold px-1.5 py-0.2 rounded bg-white text-slate-700 border border-slate-200">
                        Business Deals
                      </span>
                    </div>
                  </div>
                </div>

                {/* Profile Subtabs Grid */}
                <div className="pt-4">
                  <div className="flex flex-wrap gap-1.5 pb-3 border-b border-slate-100 text-xs">
                    {(
                      [
                        'About',
                        'What I Offer',
                        'What I\'m Looking For',
                        'My Circles',
                        'Contribution Record',
                        'Verified Business',
                      ] as const
                    ).map((tab) => (
                      <button
                        key={tab}
                        type="button"
                        onClick={() => setActiveProfileTab(tab)}
                        className={`px-3 py-1.5 rounded-lg font-semibold transition-all text-xs cursor-pointer ${
                          activeProfileTab === tab
                            ? 'bg-blue-50 text-[#0062D2] border border-blue-200'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content Display */}
                  <div className="pt-3.5 min-h-[90px] text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {activeProfileTab === 'About' && (
                      <p>
                        Leading Malhotra Exports since 2012. Specialising in global sustainable textile sourcing and automated weaving technology. Charter member of the Surat Exporters Circle since inception.
                      </p>
                    )}
                    {activeProfileTab === 'What I Offer' && (
                      <p className="bg-slate-50 p-3 rounded-xl border border-slate-200/70">
                        <strong className="text-slate-900 font-semibold block mb-0.5">Direct Capability:</strong>
                        High-volume fabric manufacturing, sustainable yarn sourcing, export certification guidance, and global container logistics.
                      </p>
                    )}
                    {activeProfileTab === 'What I\'m Looking For' && (
                      <p className="bg-slate-50 p-3 rounded-xl border border-slate-200/70">
                        <strong className="text-slate-900 font-semibold block mb-0.5">Current Focus:</strong>
                        Latin American market distributors, fast-fashion OEM buyers, and enterprise ERP automation specialists.
                      </p>
                    )}
                    {activeProfileTab === 'My Circles' && (
                      <div className="flex items-center gap-2 bg-blue-50/60 p-3 rounded-xl border border-blue-100">
                        <Users2 className="w-4 h-4 text-[#0062D2]" />
                        <span className="font-semibold text-slate-900">
                          Surat Exporters Circle (Founding Seat)
                        </span>
                      </div>
                    )}
                    {activeProfileTab === 'Contribution Record' && (
                      <div className="space-y-1.5 text-xs">
                        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50">
                          <span>Verified introductions logged</span>
                          <span className="font-bold text-slate-900">34 Peer Actions</span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50">
                          <span>Confirmed business value generated</span>
                          <span className="font-bold text-emerald-700">₹4.2 Cr+</span>
                        </div>
                      </div>
                    )}
                    {activeProfileTab === 'Verified Business' && (
                      <div className="flex items-center gap-2 text-emerald-700 font-semibold bg-emerald-50 p-3 rounded-xl border border-emerald-200">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        <span>GST, MCA Corporate Filings & Promoter Identity Authenticated</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. PRIVACY COMES FIRST ──────────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Left Card: Privacy Statement */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 border border-blue-100 shadow-2xs">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-950">
                  Privacy comes first
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Your profile is private by default. Nothing on it is public, and nothing is visible outside the community.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Your full details become visible to a Peer once you connect with them.
                </p>
              </div>
            </div>

            {/* Right Card: Charter Peers Benefit & Connections Link */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
                  <Crown className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-950 leading-snug">
                    Charter Peers Directory Access
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Charter Peers can view full profiles and contact details directly across the community.
                  </p>
                </div>
              </div>

              <div className="pt-5 mt-3 border-t border-slate-100">
                <Link
                  href="/unity/connections"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0062D2] hover:text-[#0052B4] transition-colors"
                >
                  <span>See Connections</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. BOTTOM BANNER (BETTER CONNECTIONS. A STRONGER TOMORROW) ─── */}
      <section className="relative py-20 sm:py-28 bg-[#040F24] text-white overflow-hidden">
        {/* Background Landscape */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <Image
            src="/images/who-we-are-mountain.jpg"
            alt="Mountain peaks at dawn"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#040F24] via-[#040F24]/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
                Better Connections. A Stronger Tomorrow.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Join a global community of entrepreneurs who give, grow and build together.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="https://unity.peersglobal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2.5 rounded-full border border-blue-400/30 bg-[#0062D2] px-8 py-4 text-sm font-bold tracking-wide text-white shadow-[0_4px_20px_rgba(0,98,210,0.5)] transition-all duration-300 hover:bg-[#0052B4] hover:shadow-[0_6px_28px_rgba(0,98,210,0.65)] hover:scale-[1.03] active:scale-[0.97]"
              >
                <span>Download Unity App</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONNECTION INVITATION MODAL ─────────────────────────────────── */}
      {connectModalPeer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0062D2] flex items-center justify-center">
                  <UserPlus className="w-4 h-4" />
                </div>
                <h3 className="font-serif font-bold text-slate-950 text-base">
                  Connect with {connectModalPeer.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setConnectModalPeer(null)}
                className="text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {connectSent ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif font-bold text-slate-900 text-lg">
                  Connection Request Sent!
                </h4>
                <p className="text-xs text-slate-500">
                  {connectModalPeer.name} will receive a notification in the Unity App to unlock full mutual details.
                </p>
              </div>
            ) : (
              <div className="pt-4 space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-slate-200 shrink-0">
                    <Image
                      src={connectModalPeer.avatar}
                      alt={connectModalPeer.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-slate-950 text-sm">
                      {connectModalPeer.name}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {connectModalPeer.role} · {connectModalPeer.company}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      {connectModalPeer.city} · {connectModalPeer.industry}
                    </p>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    Introduce yourself (optional note):
                  </label>
                  <textarea
                    rows={3}
                    placeholder="E.g., Hi Amit, I'd love to connect regarding manufacturing automation and explore collaboration..."
                    className="w-full rounded-xl border border-slate-200 bg-white p-3 text-xs text-slate-800 placeholder:text-slate-400 focus:border-[#0062D2] focus:ring-2 focus:ring-blue-500/15 focus:outline-none"
                  />
                </div>

                <div className="p-3 rounded-xl bg-blue-50/70 text-blue-900 text-[11px] leading-relaxed border border-blue-100">
                  <strong>Privacy Protected:</strong> Once connected, both of you can schedule 1-to-1s and exchange contact information in the Unity App.
                </div>

                <div className="pt-2 flex items-center justify-end gap-2.5">
                  <button
                    type="button"
                    onClick={() => setConnectModalPeer(null)}
                    className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleSendConnection}
                    className="px-6 py-2.5 rounded-xl bg-[#0062D2] hover:bg-[#0052B4] text-white text-xs font-bold shadow-md transition-all active:scale-98"
                  >
                    Send Connection Request
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
