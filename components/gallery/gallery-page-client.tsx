'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  Camera,
  Calendar,
  MapPin,
  Globe2,
  Search,
  RotateCcw,
  LayoutGrid,
  List,
  X,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Users,
  Star,
  Award,
  GraduationCap,
  Layers,
  Sparkles,
  Building2,
  Smartphone,
  ArrowDown,
} from 'lucide-react'

// ─── 4 Stats Bar ────────────────────────────────────────────────────────────
const STATS = [
  {
    icon: Camera,
    value: '5,000+',
    label: 'Moments',
  },
  {
    icon: Calendar,
    value: '200+',
    label: 'Events',
  },
  {
    icon: MapPin,
    value: '50+',
    label: 'Cities',
  },
  {
    icon: Globe2,
    value: '10+',
    label: 'Countries',
  },
]

// ─── 6 Collections ──────────────────────────────────────────────────────────
const COLLECTIONS = [
  {
    id: 'circle-meetings',
    title: 'Circle Meetings',
    subtitle: 'The rooms where it happens, month after month.',
    image: '/images/circle-meeting.png',
    icon: Users,
    iconBg: 'bg-blue-50 text-[#0062D2] border-blue-100',
    categoryName: 'Circle Meetings',
  },
  {
    id: 'city-gatherings',
    title: 'City Gatherings',
    subtitle: 'Circles coming together.',
    image: '/images/who-we-are-friends.jpg',
    icon: MapPin,
    iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    categoryName: 'City Gatherings',
  },
  {
    id: 'regional-conclaves',
    title: 'Regional Conclaves',
    subtitle: 'Territories in one place.',
    image: '/images/executive-director-conclave.jpg',
    icon: Layers,
    iconBg: 'bg-blue-50 text-blue-600 border-blue-100',
    categoryName: 'Regional Conclaves',
  },
  {
    id: 'annual-summit',
    title: 'The Annual Summit',
    subtitle: 'The whole community.',
    image: '/images/conclave.png',
    icon: Star,
    iconBg: 'bg-amber-50 text-amber-600 border-amber-100',
    categoryName: 'Annual Summit',
  },
  {
    id: 'awards',
    title: 'Recognition & Awards',
    subtitle: 'Contribution celebrated.',
    image: '/images/story-hero.jpg',
    icon: Award,
    iconBg: 'bg-orange-50 text-orange-600 border-orange-100',
    categoryName: 'Recognition & Awards',
  },
  {
    id: 'masterclasses',
    title: 'Masterclasses',
    subtitle: 'Peers teaching Peers.',
    image: '/images/industry-director-speaker.jpg',
    icon: GraduationCap,
    iconBg: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    categoryName: 'Masterclasses',
  },
]

// ─── Photo Items ────────────────────────────────────────────────────────────
export interface GalleryPhoto {
  id: string
  title: string
  category: string
  city: string
  circle: string
  year: string
  image: string
  caption: string
}

const INITIAL_PHOTOS: GalleryPhoto[] = [
  {
    id: 'photo-1',
    title: 'National Leadership Conclave Opening',
    category: 'Annual Summit',
    city: 'Ahmedabad',
    circle: 'All Circles',
    year: '2026',
    image: '/images/executive-director-conclave.jpg',
    caption: 'Executive Directors and Circle Founders gathered on stage for the annual vision assembly.',
  },
  {
    id: 'photo-2',
    title: 'Cross-Industry Founders Dialogue',
    category: 'City Gatherings',
    city: 'Mumbai',
    circle: 'Manufacturing & Packaging Circle',
    year: '2026',
    image: '/images/story-amit-sandeep.jpg',
    caption: 'Entrepreneurs sharing insights on regional distribution networks and raw material sourcing.',
  },
  {
    id: 'photo-3',
    title: 'Monthly Circle Roundtable in Session',
    category: 'Circle Meetings',
    city: 'Ahmedabad',
    circle: 'MSME Circle',
    year: '2026',
    image: '/images/philosophy-networking.jpg',
    caption: 'Promoters engaged in the hot-seat segment, offering critical operating advice without posturing.',
  },
  {
    id: 'photo-4',
    title: 'Women Entrepreneurship Masterclass',
    category: 'Masterclasses',
    city: 'Bengaluru',
    circle: 'Technology Circle',
    year: '2026',
    image: '/images/story-neha-simran.jpg',
    caption: 'Founders collaborating following a deep dive into organizational design and engineering talent retention.',
  },
  {
    id: 'photo-5',
    title: 'Keynote Address: Scaling Across Bharat',
    category: 'Regional Conclaves',
    city: 'Surat',
    circle: 'Export & Global Trade Circle',
    year: '2025',
    image: '/images/industry-director-speaker.jpg',
    caption: 'Industry Director presenting market expansion strategies to over 150 regional enterprise owners.',
  },
  {
    id: 'photo-6',
    title: 'National Summit Delegation Assembly',
    category: 'Annual Summit',
    city: 'Goa',
    circle: 'All Circles',
    year: '2025',
    image: '/images/conclave.png',
    caption: 'Peers from across 18 Circles celebrating milestones at the annual community summit.',
  },
  {
    id: 'photo-7',
    title: 'Collaborative Governance Panel',
    category: 'Masterclasses',
    city: 'Delhi',
    circle: 'Healthcare Circle',
    year: '2025',
    image: '/images/industry-panel-leaders.jpg',
    caption: 'Four seasoned operators discussing regulatory adaptations, capex planning, and succession.',
  },
  {
    id: 'photo-8',
    title: 'Peer Networking Lounge & Exchange',
    category: 'City Gatherings',
    city: 'Mumbai',
    circle: 'Logistics Circle',
    year: '2026',
    image: '/images/peer-stories-hero.jpg',
    caption: 'Candid conversations where cross-city joint ventures and client introductions take root.',
  },
  {
    id: 'photo-9',
    title: 'Annual Recognition & Certificate Honor',
    category: 'Recognition & Awards',
    city: 'Ahmedabad',
    circle: 'All Circles',
    year: '2025',
    image: '/images/story-hero.jpg',
    caption: 'Honoring top Life Impact contributors who gave the most value to their fellow entrepreneurs.',
  },
  {
    id: 'photo-10',
    title: 'Collaborative Chemistry in Surat',
    category: 'Circle Meetings',
    city: 'Surat',
    circle: 'Manufacturing Circle',
    year: '2026',
    image: '/images/story-priya-karan.jpg',
    caption: 'Founders finalizing details of a multi-modal freight partnership between Gujarat and Delhi.',
  },
  {
    id: 'photo-11',
    title: 'Community Celebration & Gala Night',
    category: 'Annual Summit',
    city: 'Ahmedabad',
    circle: 'All Circles',
    year: '2026',
    image: '/images/philosophy-conference-event.jpg',
    caption: 'Celebrating shared progress, lifelong bonds, and the journey toward 1 million lives impacted.',
  },
  {
    id: 'photo-12',
    title: 'Strategic Partnership Discussion',
    category: 'City Gatherings',
    city: 'Bengaluru',
    circle: 'Technology Circle',
    year: '2026',
    image: '/images/story-jignesh-rohit.jpg',
    caption: 'Entrepreneurs exploring joint vendor synergies following a productive morning assembly.',
  },
]

const MORE_PHOTOS: GalleryPhoto[] = [
  {
    id: 'photo-13',
    title: 'Rooftop Twilight Mixer',
    category: 'City Gatherings',
    city: 'Mumbai',
    circle: 'All Circles',
    year: '2026',
    image: '/images/who-we-are-friends.jpg',
    caption: 'Peers relaxing and deepening friendships after a full day of boardroom strategy sessions.',
  },
  {
    id: 'photo-14',
    title: 'Executive Inner Board Meeting',
    category: 'Circle Meetings',
    city: 'Ahmedabad',
    circle: 'MSME Circle',
    year: '2025',
    image: '/images/circle-roundtable-topdown.jpg',
    caption: 'Confidential boardroom deliberation on working capital management and vendor contracts.',
  },
  {
    id: 'photo-15',
    title: 'Founder’s Vision Address',
    category: 'Recognition & Awards',
    city: 'Ahmedabad',
    circle: 'All Circles',
    year: '2026',
    image: '/images/founder-new.png',
    caption: 'Dr. Pravin Parmar articulating the institutional roadmap for Governed Collaboration.',
  },
  {
    id: 'photo-16',
    title: 'National Leadership Retreat Session',
    category: 'Regional Conclaves',
    city: 'Goa',
    circle: 'Leadership Circle',
    year: '2025',
    image: '/images/circle-meeting.png',
    caption: 'Circle Directors and Founders aligning on ecosystem expansion and governance standards.',
  },
]

export function GalleryPageClient() {
  const [photosList, setPhotosList] = useState<GalleryPhoto[]>(INITIAL_PHOTOS)
  const [hasLoadedMore, setHasLoadedMore] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  // Filters
  const [selectedCity, setSelectedCity] = useState<string>('All')
  const [selectedCircle, setSelectedCircle] = useState<string>('All')
  const [selectedEvent, setSelectedEvent] = useState<string>('All')
  const [selectedYear, setSelectedYear] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState<string>('')

  const cities = ['All', 'Ahmedabad', 'Mumbai', 'Bengaluru', 'Surat', 'Delhi', 'Goa']
  const circles = [
    'All',
    'Manufacturing & Packaging Circle',
    'Technology Circle',
    'Export & Global Trade Circle',
    'Healthcare Circle',
    'MSME Circle',
    'Logistics Circle',
  ]
  const events = [
    'All',
    'Annual Summit',
    'Regional Conclaves',
    'Masterclasses',
    'Circle Meetings',
    'City Gatherings',
    'Recognition & Awards',
  ]
  const years = ['All', '2026', '2025', '2024']

  // Filtered List
  const filteredPhotos = useMemo(() => {
    return photosList.filter((item) => {
      const matchCity = selectedCity === 'All' || item.city.toLowerCase() === selectedCity.toLowerCase()
      const matchCircle =
        selectedCircle === 'All' ||
        item.circle.toLowerCase().includes(selectedCircle.toLowerCase()) ||
        item.circle === 'All Circles'
      const matchEvent = selectedEvent === 'All' || item.category.toLowerCase() === selectedEvent.toLowerCase()
      const matchYear = selectedYear === 'All' || item.year === selectedYear
      const matchSearch =
        !searchQuery.trim() ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.caption.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())

      return matchCity && matchCircle && matchEvent && matchYear && matchSearch
    })
  }, [photosList, selectedCity, selectedCircle, selectedEvent, selectedYear, searchQuery])

  const handleLoadMore = () => {
    if (!hasLoadedMore) {
      setPhotosList((prev) => [...prev, ...MORE_PHOTOS])
      setHasLoadedMore(true)
    }
  }

  const handleResetFilters = () => {
    setSelectedCity('All')
    setSelectedCircle('All')
    setSelectedEvent('All')
    setSelectedYear('All')
    setSearchQuery('')
  }

  // Lightbox Navigation
  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const nextPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length)
    }
  }
  const prevPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length)
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
              href="/events"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Community Life
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">Gallery</span>
          </nav>
        </div>
      </div>

      {/* ─── SECTION 1: HERO (GROUP CELEBRATION & EDGE FADE) ─────────────── */}
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
                Gallery
              </h1>

              <p className="text-2xl sm:text-3xl font-serif text-slate-800 font-medium leading-snug">
                The community, as it actually looks.
              </p>

              <div className="pt-2">
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0062D2] text-white font-medium text-sm shadow-md hover:bg-[#0052B4] hover:shadow-lg transition-all duration-200 group"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Download Unity App</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Right Hero Visual with Horizontal Left Edge Fade */}
            <div className="lg:col-span-6 relative">
              <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/executive-director-conclave.jpg"
                  alt="Peers Global community leaders gathering on stage at the National Conclave"
                  fill
                  className="object-cover object-top"
                  priority
                />

                {/* Soft horizontal gradient edge fade on the left edge smoothly blending into page background */}
                <div className="absolute inset-y-0 left-0 w-28 sm:w-40 bg-gradient-to-r from-white via-white/60 to-transparent pointer-events-none z-10" />

                {/* Ambient Top & Bottom Vignettes */}
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/20 to-transparent pointer-events-none z-10" />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent pointer-events-none z-10" />

                {/* Stage Backdrop Brand Overlay on Top Right */}
                <div className="absolute top-6 right-6 bg-slate-950/85 backdrop-blur-md px-4 py-3 rounded-xl border border-white/20 text-right z-20 max-w-[240px]">
                  <div className="flex items-center justify-end gap-1.5 mb-1">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white">
                      PeersGlobal
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-slate-200 leading-tight">
                    Community of Entrepreneurs
                  </p>
                </div>

                {/* Cursive overlay text on bottom right */}
                <div className="absolute bottom-6 right-6 text-right z-20 max-w-[240px]">
                  <p
                    className="text-xl sm:text-2xl font-light italic leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
                    style={{ fontFamily: 'var(--font-script)' }}
                  >
                    People.
                    <br />
                    Moments.
                    <br />
                    A Stronger Tomorrow.
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

      {/* ─── SECTION 2: BROWSE OUR GALLERY ───────────────────────────────── */}
      <section id="gallery-grid" className="py-16 sm:py-20 bg-white border-y border-slate-200/80 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
                — BROWSE OUR GALLERY —
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-1">
                Moments that make a stronger tomorrow.
              </h2>
            </div>
          </div>

          {/* Filters and Controls Toolbar */}
          <div className="bg-[#FAFBFD] p-4 rounded-2xl border border-slate-200/90 shadow-sm mb-8 space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {/* City Filter */}
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  City
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                >
                  {cities.map((c) => (
                    <option key={c} value={c}>
                      {c === 'All' ? 'All Cities' : c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Circle Filter */}
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Circle
                </label>
                <select
                  value={selectedCircle}
                  onChange={(e) => setSelectedCircle(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                >
                  {circles.map((cir) => (
                    <option key={cir} value={cir}>
                      {cir === 'All' ? 'All Circles' : cir}
                    </option>
                  ))}
                </select>
              </div>

              {/* Event Filter */}
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Event
                </label>
                <select
                  value={selectedEvent}
                  onChange={(e) => setSelectedEvent(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                >
                  {events.map((ev) => (
                    <option key={ev} value={ev}>
                      {ev === 'All' ? 'All Events' : ev}
                    </option>
                  ))}
                </select>
              </div>

              {/* Year Filter */}
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Year
                </label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                >
                  {years.map((y) => (
                    <option key={y} value={y}>
                      {y === 'All' ? 'All Years' : y}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Keyword Search & View Toggles */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-slate-200/80">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search photos by event, city, or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto">
                {(selectedCity !== 'All' ||
                  selectedCircle !== 'All' ||
                  selectedEvent !== 'All' ||
                  selectedYear !== 'All' ||
                  searchQuery) && (
                  <button
                    onClick={handleResetFilters}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-medium text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Clear Filters</span>
                  </button>
                )}

                {/* Grid / List View Toggle */}
                <div className="flex items-center bg-white border border-slate-200 rounded-xl p-0.5">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      viewMode === 'grid'
                        ? 'bg-[#0062D2] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <LayoutGrid className="w-3.5 h-3.5" />
                    <span>Grid</span>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      viewMode === 'list'
                        ? 'bg-[#0062D2] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <List className="w-3.5 h-3.5" />
                    <span>List</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Photo Grid View */}
          {filteredPhotos.length === 0 ? (
            <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200">
              <p className="text-sm text-slate-500">
                No photos found matching your current filter selections.
              </p>
              <button
                onClick={handleResetFilters}
                className="mt-4 px-5 py-2 rounded-full bg-[#0062D2] text-white text-xs font-semibold hover:bg-[#0052B4]"
              >
                Reset All Filters
              </button>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
              {filteredPhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  onClick={() => openLightbox(index)}
                  className="group relative h-56 rounded-2xl overflow-hidden bg-slate-900 cursor-pointer shadow-xs hover:shadow-lg transition-all duration-300"
                >
                  <Image
                    src={photo.image}
                    alt={photo.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  {/* Top Badge: Category */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-slate-950/80 backdrop-blur-md px-2 py-0.5 rounded border border-white/20">
                      {photo.category}
                    </span>
                  </div>

                  {/* Bottom Text */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h4 className="font-serif font-bold text-sm leading-snug line-clamp-1 group-hover:text-blue-300 transition-colors">
                      {photo.title}
                    </h4>
                    <div className="flex items-center gap-2 text-[10px] text-slate-300 mt-1">
                      <span className="flex items-center gap-0.5">
                        <MapPin className="w-2.5 h-2.5 text-slate-400" />
                        {photo.city}
                      </span>
                      <span>•</span>
                      <span>{photo.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* List View */
            <div className="space-y-3">
              {filteredPhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  onClick={() => openLightbox(index)}
                  className="bg-slate-50 hover:bg-white rounded-2xl p-3 sm:p-4 border border-slate-200/90 hover:border-blue-300 transition-all flex items-center justify-between gap-4 cursor-pointer group shadow-xs"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative w-20 h-14 rounded-xl overflow-hidden shrink-0 bg-slate-900">
                      <Image
                        src={photo.image}
                        alt={photo.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#0062D2] block">
                        {photo.category}
                      </span>
                      <h4 className="font-serif font-bold text-slate-950 text-sm group-hover:text-blue-600 transition-colors">
                        {photo.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1">
                        {photo.caption}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 text-xs text-slate-500">
                    <span className="hidden sm:inline-flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {photo.city}
                    </span>
                    <span className="hidden sm:inline-block">•</span>
                    <span>{photo.year}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {!hasLoadedMore && (
            <div className="mt-10 text-center">
              <button
                onClick={handleLoadMore}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-50 text-[#0062D2] hover:bg-blue-100 text-xs font-semibold border border-blue-200 transition-all cursor-pointer shadow-xs"
              >
                <span>Load More Photos</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ─── SECTION 3: EXPLORE BY COLLECTION ────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
                — EXPLORE BY COLLECTION —
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-1">
                Moments from across our community.
              </h2>
            </div>

            <button
              onClick={handleResetFilters}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#0062D2] hover:text-[#0052B4] transition-colors cursor-pointer"
            >
              <span>View All Photos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 6 Collections Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {COLLECTIONS.map((col) => {
              const Icon = col.icon
              return (
                <div
                  key={col.id}
                  onClick={() => {
                    setSelectedEvent(col.categoryName)
                    const el = document.getElementById('gallery-grid')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    {/* Collection Image */}
                    <div className="relative h-32 w-full overflow-hidden bg-slate-900">
                      <Image
                        src={col.image}
                        alt={col.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-3.5 space-y-1.5">
                      <div className={`w-7 h-7 rounded-lg border flex items-center justify-center ${col.iconBg}`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <h3 className="font-serif font-bold text-slate-950 text-sm group-hover:text-blue-600 transition-colors leading-snug">
                        {col.title}
                      </h3>
                      <p className="text-[11px] text-slate-600 leading-snug">
                        {col.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 pt-0 flex justify-end">
                    <div className="w-6 h-6 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 group-hover:bg-[#0062D2] group-hover:text-white group-hover:border-[#0062D2] transition-colors">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: CLOSING ROYAL BLUE BANNER ─────────────────────── */}
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
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.1]">
                Build Your Business.
                <br />
                Build Your Relationships.
                <br />
                Build Your Circle.
              </h2>

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

      {/* ─── MODAL: FULL LIGHTBOX VIEW ────────────────────────────────────── */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Previous Button */}
            <button
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>

            {/* Lightbox Image */}
            <div className="relative h-[420px] sm:h-[500px] w-full bg-slate-950">
              <Image
                src={filteredPhotos[lightboxIndex].image}
                alt={filteredPhotos[lightboxIndex].title}
                fill
                className="object-contain object-center"
              />
            </div>

            {/* Lightbox Caption Bar */}
            <div className="p-6 bg-slate-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0062D2] bg-blue-900/40 px-2 py-0.5 rounded border border-blue-500/30 inline-block mb-1">
                  {filteredPhotos[lightboxIndex].category}
                </span>
                <h3 className="font-serif font-bold text-lg text-white">
                  {filteredPhotos[lightboxIndex].title}
                </h3>
                <p className="text-xs text-slate-300 mt-1 max-w-xl">
                  {filteredPhotos[lightboxIndex].caption}
                </p>
              </div>

              <div className="text-xs text-slate-400 shrink-0 space-y-1">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{filteredPhotos[lightboxIndex].city}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{filteredPhotos[lightboxIndex].year}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
