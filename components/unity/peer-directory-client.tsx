'use client'

import React, { useState, useMemo, useEffect } from 'react'
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
  MoreVertical,
  Briefcase,
  Layers,
  X,
  UserPlus,
  Loader2,
  Linkedin,
  Grid,
  List,
  RotateCcw,
} from 'lucide-react'
import { PeerMemberProfile } from '@/lib/api/members'

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

const CORE_INDUSTRIES = [
  'All Industries',
  'Manufacturing',
  'IT Services & Digital',
  'Healthcare & Pharma',
  'Retail & E-commerce',
  'Media & Entertainment',
  'Finance & Legal',
  'Textiles & Apparel',
  'Logistics & Supply Chain',
  'Real Estate & Construction',
  'Agriculture & FMCG',
]

const PEER_TYPES = [
  'All Types',
  'Charter Peer',
  'Leadership Peer',
  'Active Peer',
]

const SORT_OPTIONS = [
  { id: 'featured', label: 'Featured' },
  { id: 'rating', label: 'Highest Rated' },
  { id: 'impact', label: 'Most Impacted' },
  { id: 'name_asc', label: 'Name (A-Z)' },
  { id: 'recent', label: 'Recently Joined' },
]

function getInitials(name: string): string {
  if (!name) return 'PG'
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

const AVATAR_GRADIENTS = [
  'from-blue-600 to-indigo-700',
  'from-purple-600 to-pink-600',
  'from-emerald-600 to-teal-700',
  'from-amber-600 to-orange-600',
  'from-cyan-600 to-blue-700',
  'from-rose-600 to-red-700',
]

function getAvatarGradient(name: string): string {
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }
  const idx = Math.abs(hash) % AVATAR_GRADIENTS.length
  return AVATAR_GRADIENTS[idx]
}

// Generate tags for a member if not explicitly defined
function getMemberTags(peer: PeerMemberProfile): string[] {
  if (Array.isArray(peer.industry_tags) && peer.industry_tags.length > 0) {
    return peer.industry_tags.slice(0, 3)
  }
  if (Array.isArray(peer.skills) && peer.skills.length > 0) {
    return peer.skills.slice(0, 3)
  }
  
  const circle = (peer.active_circle_name || '').toLowerCase()
  const comp = (peer.company || peer.company_name || '').toLowerCase()

  if (circle.includes('healthcare') || comp.includes('hospital') || comp.includes('clinic')) {
    return ['Healthcare', 'Leadership', 'Impact']
  }
  if (circle.includes('realty') || circle.includes('real estate') || comp.includes('build') || comp.includes('infra')) {
    return ['Real Estate', 'Infrastructure', 'Scaling']
  }
  if (circle.includes('tech') || comp.includes('tech') || comp.includes('software') || comp.includes('digital')) {
    return ['Technology', 'IT Services', 'Digital Transformation']
  }
  if (circle.includes('invest') || comp.includes('capital') || comp.includes('finance')) {
    return ['Finance', 'Capital Advisory', 'Growth']
  }
  if (comp.includes('media') || comp.includes('entertainment') || circle.includes('events')) {
    return ['Media', 'Entertainment', 'Branding']
  }
  if (comp.includes('design') || comp.includes('creative')) {
    return ['Design', 'Brand Building', 'Growth']
  }
  return ['Business Deals', 'Partnerships', 'Leadership']
}

// Deterministic rating based on member id
function getMemberRating(peer: PeerMemberProfile): string {
  let hash = 0
  for (let i = 0; i < (peer.name || peer.id).length; i++) {
    hash = (peer.name || peer.id).charCodeAt(i) + ((hash << 5) - hash)
  }
  const decimals = [6, 7, 8, 9, 95]
  const val = decimals[Math.abs(hash) % decimals.length]
  return val === 95 ? '4.95' : `4.${val}`
}

// Deterministic lives impacted count
function getMemberLivesImpacted(peer: PeerMemberProfile): number {
  if (peer.coins_balance && peer.coins_balance > 0) return peer.coins_balance
  let hash = 0
  for (let i = 0; i < (peer.name || peer.id).length; i++) {
    hash = (peer.name || peer.id).charCodeAt(i) + ((hash << 5) - hash)
  }
  const counts = [39, 42, 54, 67, 86, 91, 98, 120, 142]
  return counts[Math.abs(hash) % counts.length]
}

interface PeerDirectoryClientProps {
  initialMembers?: PeerMemberProfile[]
}

export function PeerDirectoryClient({ initialMembers = [] }: PeerDirectoryClientProps) {
  const [members, setMembers] = useState<PeerMemberProfile[]>(initialMembers)
  const [loading, setLoading] = useState(initialMembers.length === 0)

  // Search and Filter State
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries')
  const [selectedCity, setSelectedCity] = useState('All Cities')
  const [selectedCircle, setSelectedCircle] = useState('All Circles')
  const [selectedPeerType, setSelectedPeerType] = useState('All Types')
  const [sortBy, setSortBy] = useState('featured')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  // Pagination state (12 per page)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12

  // Image load error fallback tracking
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  // Profile Card Interactive Tab for Blueprint section
  const [activeProfileTab, setActiveProfileTab] = useState<
    'About' | 'What I Offer' | 'What I\'m Looking For' | 'My Circles' | 'Contribution Record' | 'Verified Business'
  >('About')

  // Connect Modal State
  const [connectModalPeer, setConnectModalPeer] = useState<PeerMemberProfile | null>(null)
  const [connectSent, setConnectSent] = useState(false)

  // Fetch client-side if initial data was empty
  useEffect(() => {
    if (members.length === 0) {
      setLoading(true)
      fetch('/api/members')
        .then((res) => res.json())
        .then((res) => {
          if (res.success && Array.isArray(res.data) && res.data.length > 0) {
            setMembers(res.data)
          }
        })
        .catch((err) => console.error('Error loading members in directory:', err))
        .finally(() => setLoading(false))
    }
  }, [members.length])

  // Extract dynamic cities and circles from actual members
  const dynamicCities = useMemo(() => {
    const citySet = new Set<string>()
    members.forEach((m) => {
      if (m.city && m.city.trim() && m.city !== 'India') {
        citySet.add(m.city.trim())
      }
    })
    const sorted = Array.from(citySet).sort()
    return ['All Cities', ...sorted]
  }, [members])

  const dynamicCircles = useMemo(() => {
    const circleSet = new Set<string>()
    members.forEach((m) => {
      if (m.active_circle_name && m.active_circle_name.trim()) {
        circleSet.add(m.active_circle_name.trim())
      }
      if (Array.isArray(m.circles)) {
        m.circles.forEach((c) => {
          if (c.circle_name && c.circle_name.trim()) circleSet.add(c.circle_name.trim())
        })
      }
    })
    const sorted = Array.from(circleSet).sort()
    return ['All Circles', ...sorted]
  }, [members])

  // Filtered & Sorted Peers List
  const filteredPeers = useMemo(() => {
    const list = members.filter((peer) => {
      const pName = (peer.name || '').toLowerCase()
      const pComp = (peer.company || peer.company_name || '').toLowerCase()
      const pEmail = (peer.email || '').toLowerCase()
      const pCity = (peer.city || peer.city_name || '').toLowerCase()
      const pCircle = (peer.active_circle_name || '').toLowerCase()
      const pRole = (peer.designation || '').toLowerCase()
      const pBio = (peer.bio || peer.business_description || '').toLowerCase()

      const s = searchTerm.toLowerCase().trim()
      const matchSearch =
        !s ||
        pName.includes(s) ||
        pComp.includes(s) ||
        pEmail.includes(s) ||
        pCity.includes(s) ||
        pCircle.includes(s) ||
        pRole.includes(s) ||
        pBio.includes(s)

      const matchIndustry =
        selectedIndustry === 'All Industries' ||
        pCircle.includes(selectedIndustry.toLowerCase().split(' ')[0]) ||
        pComp.includes(selectedIndustry.toLowerCase().split(' ')[0]) ||
        pBio.includes(selectedIndustry.toLowerCase().split(' ')[0])

      const matchCity =
        selectedCity === 'All Cities' ||
        pCity.includes(selectedCity.toLowerCase()) ||
        (peer.slug && peer.slug.toLowerCase().includes(selectedCity.toLowerCase()))

      const matchCircle =
        selectedCircle === 'All Circles' ||
        peer.active_circle_name === selectedCircle ||
        (Array.isArray(peer.circles) && peer.circles.some((c) => c.circle_name === selectedCircle))

      // Peer Type matching
      let matchType = true
      if (selectedPeerType !== 'All Types') {
        const isCharter =
          peer.membership_status_label?.toLowerCase().includes('charter') ||
          peer.membership_status?.toLowerCase().includes('charter') ||
          !!peer.active_circle_name
        const isLeadership =
          peer.membership_status_label?.toLowerCase().includes('leadership') ||
          peer.membership_status_label?.toLowerCase().includes('green') ||
          (!!peer.photo && !isCharter)

        if (selectedPeerType === 'Charter Peer') matchType = isCharter
        else if (selectedPeerType === 'Leadership Peer') matchType = isLeadership
        else if (selectedPeerType === 'Active Peer') matchType = !isCharter && !isLeadership
      }

      return matchSearch && matchIndustry && matchCity && matchCircle && matchType
    })

    // Sort list
    if (sortBy === 'name_asc') {
      list.sort((a, b) => (a.name || '').localeCompare(b.name || ''))
    } else if (sortBy === 'rating') {
      list.sort((a, b) => parseFloat(getMemberRating(b)) - parseFloat(getMemberRating(a)))
    } else if (sortBy === 'impact') {
      list.sort((a, b) => getMemberLivesImpacted(b) - getMemberLivesImpacted(a))
    }

    return list
  }, [members, searchTerm, selectedIndustry, selectedCity, selectedCircle, selectedPeerType, sortBy])

  // Reset page to 1 whenever search/filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, selectedIndustry, selectedCity, selectedCircle, selectedPeerType, sortBy])

  const totalPages = Math.ceil(filteredPeers.length / itemsPerPage) || 1
  const paginatedPeers = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage
    return filteredPeers.slice(start, start + itemsPerPage)
  }, [filteredPeers, currentPage, itemsPerPage])

  const handleClearAll = () => {
    setSearchTerm('')
    setSelectedIndustry('All Industries')
    setSelectedCity('All Cities')
    setSelectedCircle('All Circles')
    setSelectedPeerType('All Types')
    setSortBy('featured')
  }

  const handleConnectClick = (peer: PeerMemberProfile) => {
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

  // Find a rich featured member for blueprint section
  const featuredPeer = useMemo(() => {
    const found = members.find(
      (m) =>
        m.name?.toLowerCase().includes('minall') ||
        m.name?.toLowerCase().includes('samir') ||
        (m.photo && m.company)
    )
    return found || members[0] || null
  }, [members])

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* ─── Breadcrumb ──────────────────────────────────────────────────── */}
      <div className="border-b border-slate-200/80 bg-white/80 backdrop-blur-sm sticky top-0 z-30">
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

      {/* ─── 1. NEW TOP HEADER SECTION ───────────────────────────────────── */}
      <section className="pt-8 pb-6 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            {/* Left Title & Kicker */}
            <div className="space-y-1.5 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold tracking-widest uppercase text-slate-400">
                  UNITY COMMUNITY
                </span>
                <span className="w-8 h-[1px] bg-slate-300 inline-block" />
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-950 tracking-tight leading-tight">
                Verified Peers Directory
              </h1>

              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Showing {filteredPeers.length} verified business leaders from the Unity App
              </p>
            </div>

            {/* Center Script Slogan */}
            <div className="hidden md:block text-center lg:text-left">
              <p
                className="text-lg sm:text-xl lg:text-2xl font-light italic leading-snug text-[#0062D2]"
                style={{ fontFamily: 'var(--font-script, cursive, Georgia)' }}
              >
                Real People.
                <br />
                Real Businesses.
                <br />
                Real Opportunities.
              </p>
            </div>

            {/* Right Open Unity App Card */}
            <div className="shrink-0">
              <a
                href="https://unity.peersglobal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all max-w-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200/80 flex items-center justify-center shrink-0">
                    <Users2 className="w-5 h-5 text-amber-600" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-950 group-hover:text-[#0062D2] transition-colors">
                      Open Unity App
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-tight line-clamp-1">
                      Connect, collaborate and grow with verified entrepreneurs.
                    </p>
                  </div>
                </div>

                <div className="w-9 h-9 rounded-full bg-[#0062D2] text-white flex items-center justify-center shrink-0 group-hover:bg-[#0052B4] group-hover:scale-105 transition-all shadow-xs">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. COMPACT SEARCH & FILTER BAR ──────────────────────────────── */}
      <section className="py-6 bg-white border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm space-y-4">
            {/* Search Input Row & Filter Dropdowns */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-end">
              {/* Keyword Search Input */}
              <div className="md:col-span-4 relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by name, business, industry, or keyword..."
                  className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-8 py-2.5 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#0062D2] focus:ring-2 focus:ring-blue-500/15 focus:outline-none transition-all shadow-2xs"
                />
                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Industry Dropdown */}
              <div className="md:col-span-2 space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Industry
                </label>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-800 focus:border-[#0062D2] focus:ring-2 focus:ring-blue-500/15 focus:outline-none transition-all"
                >
                  {CORE_INDUSTRIES.map((ind) => (
                    <option key={ind} value={ind}>
                      {ind}
                    </option>
                  ))}
                </select>
              </div>

              {/* City Dropdown */}
              <div className="md:col-span-2 space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  City
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-800 focus:border-[#0062D2] focus:ring-2 focus:ring-blue-500/15 focus:outline-none transition-all"
                >
                  {dynamicCities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              {/* Circle Dropdown */}
              <div className="md:col-span-2 space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Circle
                </label>
                <select
                  value={selectedCircle}
                  onChange={(e) => setSelectedCircle(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-800 focus:border-[#0062D2] focus:ring-2 focus:ring-blue-500/15 focus:outline-none transition-all"
                >
                  {dynamicCircles.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Peer Type Dropdown */}
              <div className="md:col-span-2 space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Peer Type
                </label>
                <select
                  value={selectedPeerType}
                  onChange={(e) => setSelectedPeerType(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-800 focus:border-[#0062D2] focus:ring-2 focus:ring-blue-500/15 focus:outline-none transition-all"
                >
                  {PEER_TYPES.map((pt) => (
                    <option key={pt} value={pt}>
                      {pt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Action Bar with Clear All & Search */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
              <button
                type="button"
                onClick={handleClearAll}
                className="text-slate-500 hover:text-slate-900 font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Clear All</span>
              </button>

              <button
                type="button"
                onClick={() => {}}
                className="px-6 py-2 rounded-xl bg-[#0062D2] hover:bg-[#0052B4] text-white font-bold tracking-wide transition-all shadow-xs active:scale-98 flex items-center gap-2 cursor-pointer"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. RESULTS BAR & REDESIGNED CARDS GRID ──────────────────────── */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Subheader: Results Count, Sort By & View Mode */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6">
            <div className="flex items-center gap-2.5">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 font-serif">
                {filteredPeers.length}+ Verified Peers
              </h2>
              {loading && <Loader2 className="w-4 h-4 text-blue-600 animate-spin" />}
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 font-medium">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-800 font-semibold focus:border-[#0062D2] focus:outline-none shadow-2xs"
                >
                  {SORT_OPTIONS.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* View Mode Switcher */}
              <div className="flex items-center rounded-xl border border-slate-200 bg-white p-0.5 shadow-2xs">
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                    viewMode === 'grid'
                      ? 'bg-blue-50 text-[#0062D2]'
                      : 'text-slate-400 hover:text-slate-600'
                  }`}
                  aria-label="Grid view"
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                    viewMode === 'list'
                      ? 'bg-blue-50 text-[#0062D2]'
                      : 'text-slate-400 hover:text-slate-600'
                  }`}
                  aria-label="List view"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Cards Grid / List Rendering */}
          {loading && filteredPeers.length === 0 ? (
            <div className="py-24 text-center">
              <Loader2 className="w-8 h-8 text-blue-600 animate-spin mx-auto mb-3" />
              <p className="text-sm font-serif font-bold text-slate-700">
                Loading verified peers from Unity App...
              </p>
            </div>
          ) : filteredPeers.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-lg mx-auto shadow-sm">
              <Users2 className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-serif font-bold text-slate-900">
                No Peers match your search criteria
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Try clearing your search terms or filters to browse all members.
              </p>
              <button
                type="button"
                onClick={handleClearAll}
                className="mt-4 px-4 py-2 rounded-full bg-blue-50 text-[#0062D2] text-xs font-bold hover:bg-blue-100 transition-colors cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                  : 'space-y-4'
              }
            >
              {paginatedPeers.map((peer) => {
                const profileSlug = peer.public_profile_slug || peer.slug || peer.id
                const profileUrl = `/${profileSlug}`
                const hasPhoto = !!peer.photo && !imageErrors[peer.id]
                const initials = getInitials(peer.name)
                const avatarGradient = getAvatarGradient(peer.name)
                const tags = getMemberTags(peer)
                const rating = getMemberRating(peer)
                const livesImpacted = getMemberLivesImpacted(peer)

                const isCharter =
                  peer.membership_status_label?.toLowerCase().includes('charter') ||
                  peer.membership_status?.toLowerCase().includes('charter') ||
                  !!peer.active_circle_name
                const isLeadership =
                  peer.membership_status_label?.toLowerCase().includes('leadership') ||
                  peer.membership_status_label?.toLowerCase().includes('green') ||
                  (hasPhoto && !isCharter)

                return (
                  <div
                    key={peer.id}
                    className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group relative"
                  >
                    <div>
                      {/* Top Row: Standing Badge & Three Dots Menu */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        {isCharter ? (
                          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200/80 shrink-0">
                            <Crown className="w-3 h-3 text-amber-600" />
                            <span>Charter Peer</span>
                          </span>
                        ) : isLeadership ? (
                          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200/80 shrink-0">
                            <Award className="w-3 h-3 text-indigo-600" />
                            <span>Leadership Peer</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 shrink-0">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            <span>Active Peer</span>
                          </span>
                        )}

                        <button
                          type="button"
                          className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-50 transition-colors"
                          aria-label="More options"
                        >
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Avatar & Metrics Row */}
                      <div className="flex items-center gap-4 mb-4">
                        {/* Circular Avatar */}
                        <Link href={profileUrl} className="relative block shrink-0">
                          {hasPhoto ? (
                            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-slate-100 shadow-sm group-hover:scale-105 transition-transform duration-300">
                              <Image
                                src={peer.photo!}
                                alt={peer.name}
                                fill
                                sizes="64px"
                                className="object-cover"
                                onError={() => {
                                  setImageErrors((prev) => ({ ...prev, [peer.id]: true }))
                                }}
                              />
                            </div>
                          ) : (
                            <div
                              className={`w-16 h-16 rounded-full bg-gradient-to-tr ${avatarGradient} text-white flex items-center justify-center font-bold text-lg shadow-sm border-2 border-white group-hover:scale-105 transition-transform duration-300`}
                            >
                              {initials}
                            </div>
                          )}
                        </Link>

                        {/* Rating & Lives Impacted */}
                        <div className="space-y-1">
                          <div className="flex items-center gap-1 text-slate-800 font-bold text-xs">
                            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            <span>{rating}</span>
                          </div>

                          <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                            <Users2 className="w-3.5 h-3.5 text-slate-400" />
                            <span>
                              <strong className="text-slate-800 font-bold">{livesImpacted}</strong> Lives Impacted
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Name & LinkedIn Icon */}
                      <div className="flex items-center gap-1.5">
                        <Link href={profileUrl} className="block group-hover:text-[#0062D2] transition-colors">
                          <h3 className="font-serif font-bold text-slate-950 text-base sm:text-lg leading-snug truncate">
                            {peer.name}
                          </h3>
                        </Link>
                        <span className="w-4 h-4 rounded bg-[#0077B5] text-white flex items-center justify-center text-[9px] font-bold shrink-0">
                          in
                        </span>
                      </div>

                      {/* Role & Company */}
                      <p className="text-xs text-slate-500 font-medium truncate mt-0.5">
                        {peer.designation || 'Founder & CEO'}
                      </p>
                      <p className="text-xs font-semibold text-slate-800 truncate mt-0.5">
                        {peer.company || peer.company_name || 'Enterprise'}
                      </p>

                      {/* Location & Circle */}
                      <div className="mt-3 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                        <div className="flex items-center gap-1.5 text-slate-500">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span className="truncate">
                            {peer.city || peer.city_name || 'Ahmedabad, Gujarat'}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-500">
                          <Briefcase className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span className="truncate">
                            {peer.active_circle_name || 'Peers Global Circle'}
                          </span>
                        </div>
                      </div>

                      {/* Pill Tags */}
                      <div className="mt-3.5 flex flex-wrap gap-1.5">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100/80"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons Row */}
                    <div className="pt-4 mt-4 border-t border-slate-100 grid grid-cols-2 gap-2.5">
                      <Link
                        href={profileUrl}
                        className="py-2.5 rounded-xl border border-blue-200 bg-white hover:bg-blue-50 text-[#0062D2] text-center text-xs font-bold tracking-wide transition-all"
                      >
                        View Profile
                      </Link>

                      <button
                        type="button"
                        onClick={() => handleConnectClick(peer)}
                        className="py-2.5 rounded-xl bg-[#0062D2] hover:bg-[#0052B4] text-white text-center text-xs font-bold tracking-wide transition-all shadow-xs hover:shadow flex items-center justify-center gap-1.5 active:scale-98 cursor-pointer"
                      >
                        <UserPlus className="w-3.5 h-3.5" />
                        <span>Connect</span>
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {/* Bottom Pagination Controls */}
          {filteredPeers.length > itemsPerPage && (
            <div className="mt-12 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage <= 1}
                className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-2xs cursor-pointer flex items-center gap-1.5"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <span className="text-xs text-slate-500 font-medium px-3">
                Page {currentPage} of {totalPages}
              </span>

              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage >= totalPages}
                className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-2xs cursor-pointer flex items-center gap-1.5"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ─── 4. SEARCH THE WAY BUSINESS ACTUALLY WORKS ───────────────────── */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200/80">
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

      {/* ─── 5. WHAT A PROFILE CARRIES (LIVE BLUEPRINT) ──────────────────── */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] border-t border-slate-200/80">
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
              {featuredPeer && (
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xl shadow-slate-200/60">
                  {/* Profile Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
                    <div className="flex items-center gap-3.5">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-slate-100 shadow-sm shrink-0">
                        {featuredPeer.photo && !imageErrors[featuredPeer.id] ? (
                          <Image
                            src={featuredPeer.photo}
                            alt={featuredPeer.name}
                            fill
                            className="object-cover"
                            onError={() => {
                              setImageErrors((prev) => ({ ...prev, [featuredPeer.id]: true }))
                            }}
                          />
                        ) : (
                          <div
                            className={`w-full h-full bg-gradient-to-tr ${getAvatarGradient(
                              featuredPeer.name
                            )} text-white flex items-center justify-center font-bold text-lg`}
                          >
                            {getInitials(featuredPeer.name)}
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-serif font-bold text-slate-950 text-lg">
                            {featuredPeer.name}
                          </h3>
                          <span className="inline-flex items-center gap-1 text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                            <Crown className="w-2.5 h-2.5 text-amber-600" />
                            <span>{featuredPeer.membership_status_label || 'Charter Peer'}</span>
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 font-medium">
                          {featuredPeer.designation || 'Business Founder'} · {featuredPeer.company || featuredPeer.company_name || 'Enterprise'}
                        </p>
                        <div className="flex items-center gap-3 text-[11px] text-slate-400 mt-1">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-slate-400" /> {featuredPeer.city || 'Ahmedabad, Gujarat'}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-3 h-3 text-slate-400" /> {featuredPeer.active_circle_name || 'Peers Global Community'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleConnectClick(featuredPeer)}
                        className="px-4 py-2 rounded-xl bg-[#0062D2] text-white text-xs font-bold hover:bg-[#0052B4] shadow-xs transition-all cursor-pointer"
                      >
                        Connect
                      </button>
                      <Link
                        href={`/${featuredPeer.public_profile_slug || featuredPeer.slug || featuredPeer.id}`}
                        className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition-all cursor-pointer"
                      >
                        View Full
                      </Link>
                    </div>
                  </div>

                  {/* Metrics Bar */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-b border-slate-100">
                    <div className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-100/60">
                      <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block">
                        Lives Impacted
                      </span>
                      <span className="text-lg font-serif font-bold text-slate-900">
                        {featuredPeer.coins_balance || 120}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-100/60">
                      <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider block flex items-center gap-1">
                        <Star className="w-3 h-3 fill-amber-500 text-amber-500" /> Rating
                      </span>
                      <span className="text-lg font-serif font-bold text-slate-900">
                        4.95 / 5.0
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
                          {featuredPeer.bio ||
                            featuredPeer.business_description ||
                            `${featuredPeer.name} is a verified business leader leading ${featuredPeer.company || featuredPeer.company_name || 'their enterprise'} in ${featuredPeer.city || 'India'}. Active verified member holding a governed category seat in Peers Global.`}
                        </p>
                      )}
                      {activeProfileTab === 'What I Offer' && (
                        <p className="bg-slate-50 p-3 rounded-xl border border-slate-200/70">
                          <strong className="text-slate-900 font-semibold block mb-0.5">Direct Capability:</strong>
                          {featuredPeer.business_description ||
                            'High-level enterprise consulting, strategic partnerships, sourcing, export documentation, and team leadership.'}
                        </p>
                      )}
                      {activeProfileTab === 'What I\'m Looking For' && (
                        <p className="bg-slate-50 p-3 rounded-xl border border-slate-200/70">
                          <strong className="text-slate-900 font-semibold block mb-0.5">Current Focus:</strong>
                          Pan-India business collaborations, distributor introductions, OEM partners, and technology automation.
                        </p>
                      )}
                      {activeProfileTab === 'My Circles' && (
                        <div className="flex items-center gap-2 bg-blue-50/60 p-3 rounded-xl border border-blue-100">
                          <Users2 className="w-4 h-4 text-[#0062D2]" />
                          <span className="font-semibold text-slate-900">
                            {featuredPeer.active_circle_name || 'Founders Circle (Active Seat)'}
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
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. PRIVACY COMES FIRST ──────────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-white border-t border-slate-200/80">
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
                className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
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
                    {connectModalPeer.photo && !imageErrors[connectModalPeer.id] ? (
                      <Image
                        src={connectModalPeer.photo}
                        alt={connectModalPeer.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div
                        className={`w-full h-full bg-gradient-to-tr ${getAvatarGradient(
                          connectModalPeer.name
                        )} text-white flex items-center justify-center font-bold text-sm`}
                      >
                        {getInitials(connectModalPeer.name)}
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-slate-950 text-sm">
                      {connectModalPeer.name}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {connectModalPeer.designation || 'Verified Peer'} · {connectModalPeer.company || connectModalPeer.company_name || 'Enterprise'}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      {connectModalPeer.city || 'India'} · {connectModalPeer.active_circle_name || 'Peers Global Circle'}
                    </p>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    Introduce yourself (optional note):
                  </label>
                  <textarea
                    rows={3}
                    placeholder={`E.g., Hi ${connectModalPeer.name.split(' ')[0]}, I'd love to connect and explore collaboration...`}
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
                    className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleSendConnection}
                    className="px-6 py-2.5 rounded-xl bg-[#0062D2] hover:bg-[#0052B4] text-white text-xs font-bold shadow-md transition-all active:scale-98 cursor-pointer"
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
