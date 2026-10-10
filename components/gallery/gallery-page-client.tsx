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
  Apple,
} from 'lucide-react'

// ─── 4 Stats Bar ────────────────────────────────────────────────────────────
const STATS = [
  {
    icon: Camera,
    value: '5,000+',
    label: 'Captured Moments',
  },
  {
    icon: Calendar,
    value: '200+',
    label: 'Conclaves & Events',
  },
  {
    icon: MapPin,
    value: '50+',
    label: 'Cities Represented',
  },
  {
    icon: Globe2,
    value: '10+',
    label: 'Global Regions',
  },
]

// ─── 6 Collections ──────────────────────────────────────────────────────────
const COLLECTIONS = [
  {
    id: 'circle-meetings',
    title: 'Circle Meetings',
    subtitle: 'The rooms where it happens, month after month.',
    image: '/images/section_image/circle-meeting.png',
    icon: Users,
    iconBg: 'bg-blue-50 text-[#0062D2] border-blue-100',
    categoryName: 'Circle Meetings',
  },
  {
    id: 'city-gatherings',
    title: 'City Gatherings',
    subtitle: 'Circles coming together across regional chapters.',
    image: '/images/who-we-are-friends.jpg',
    icon: MapPin,
    iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    categoryName: 'City Gatherings',
  },
  {
    id: 'regional-conclaves',
    title: 'Regional Conclaves',
    subtitle: 'Territories in one high-energy room.',
    image: '/images/section_image/executive-director-conclave.jpg',
    icon: Layers,
    iconBg: 'bg-blue-50 text-blue-600 border-blue-100',
    categoryName: 'Regional Conclaves',
  },
  {
    id: 'annual-summit',
    title: 'The Annual Summit',
    subtitle: 'The grand gala celebrating the whole community.',
    image: '/images/section_image/event_awards_stage.jpg',
    icon: Star,
    iconBg: 'bg-amber-50 text-amber-600 border-amber-100',
    categoryName: 'Annual Summit',
  },
  {
    id: 'awards',
    title: 'Recognition & Awards',
    subtitle: 'Public contribution affirmed and celebrated.',
    image: '/images/section_image/event_awards_stage.jpg',
    icon: Award,
    iconBg: 'bg-rose-50 text-rose-600 border-rose-100',
    categoryName: 'Recognition & Awards',
  },
  {
    id: 'masterclasses',
    title: 'Masterclasses',
    subtitle: 'Impact mentors delivering practical wisdom.',
    image: '/images/section_image/circle-roundtable-topdown.jpg',
    icon: GraduationCap,
    iconBg: 'bg-purple-50 text-purple-600 border-purple-100',
    categoryName: 'Masterclasses',
  },
]

// ─── 12 Initial Gallery Photos ──────────────────────────────────────────────
interface GalleryPhoto {
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
    id: 'photo-01',
    title: 'National Leadership Conclave Opening',
    category: 'Annual Summit',
    city: 'Ahmedabad',
    circle: 'All Circles',
    year: '2026',
    image: '/images/section_image/event_awards_stage.jpg',
    caption: 'Founders and Circle Directors convening on stage during the opening plenary in Ahmedabad.',
  },
  {
    id: 'photo-02',
    title: 'Cross-Circle Collaboration Roundtable',
    category: 'Circle Meetings',
    city: 'Mumbai',
    circle: 'Logistics Circle',
    year: '2026',
    image: '/images/section_image/circle-roundtable-topdown.jpg',
    caption: '12 enterprise peers discussing joint supply chain warehousing and regional distribution synergies.',
  },
  {
    id: 'photo-03',
    title: 'Gratitude & Impact Recognition Round',
    category: 'Recognition & Awards',
    city: 'Bengaluru',
    circle: 'Technology Circle',
    year: '2025',
    image: '/images/story-jignesh-rohit.jpg',
    caption: 'Peers publicly acknowledging confirmed business introductions and advisory interventions.',
  },
  {
    id: 'photo-04',
    title: 'Masterclass: Scaling Operations Past ₹50 Cr',
    category: 'Masterclasses',
    city: 'Surat',
    circle: 'Manufacturing Circle',
    year: '2026',
    image: '/images/industry-panel-leaders.jpg',
    caption: '20-minute unscripted insights on managing vendor liquidity and working capital.',
  },
  {
    id: 'photo-05',
    title: 'Regional Conclave Fellowship & Dinner',
    category: 'Regional Conclaves',
    city: 'Ahmedabad',
    circle: 'All Circles',
    year: '2025',
    image: '/images/section_image/executive-director-conclave.jpg',
    caption: 'Entrepreneurs forging lifelong friendships and collaborative partnerships after boardroom sessions.',
  },
  {
    id: 'photo-06',
    title: 'Fempreneur Circle Innovation Forum',
    category: 'City Gatherings',
    city: 'Bengaluru',
    circle: 'Fempreneur Circle',
    year: '2026',
    image: '/images/story-neha-simran.jpg',
    caption: 'First-generation women founders sharing manufacturing playbooks and export frameworks.',
  },
  {
    id: 'photo-07',
    title: 'Global Trade & Export Advisory Panel',
    category: 'Circle Meetings',
    city: 'Surat',
    circle: 'Export Circle',
    year: '2025',
    image: '/images/story-amit-sandeep.jpg',
    caption: 'Direct syndicate discussions on bypassing international trade brokers across UAE and EU hubs.',
  },
  {
    id: 'photo-08',
    title: 'Circle Director of the Year Presentation',
    category: 'Recognition & Awards',
    city: 'Ahmedabad',
    circle: 'All Circles',
    year: '2026',
    image: '/images/section_image/event_awards_stage.jpg',
    caption: 'Honouring the Director who fostered the highest member retention and collaborative impact.',
  },
  {
    id: 'photo-09',
    title: 'MindMeld Strategic Problem Solving',
    category: 'Circle Meetings',
    city: 'Mumbai',
    circle: 'Healthcare Circle',
    year: '2025',
    image: '/images/section_image/circle-meeting.png',
    caption: 'A member presenting their core operational bottleneck to their confidential Inner Advisory Board.',
  },
  {
    id: 'photo-10',
    title: 'West India MSME Summit Hall',
    category: 'Regional Conclaves',
    city: 'Ahmedabad',
    circle: 'MSME Circle',
    year: '2026',
    image: '/images/section_image/circles-hero-new.jpg',
    caption: 'Over 300 business leaders gathered for governed collaboration and institutional growth.',
  },
  {
    id: 'photo-11',
    title: 'Annual Peer Awards Ceremony',
    category: 'Annual Summit',
    city: 'Goa',
    circle: 'All Circles',
    year: '2025',
    image: '/images/section_image/event_awards_stage.jpg',
    caption: 'Celebrating verified peer contributions and community milestones on the national stage.',
  },
  {
    id: 'photo-12',
    title: 'Informal Fellowship & Morning Coffee',
    category: 'City Gatherings',
    city: 'Bengaluru',
    circle: 'Technology Circle',
    year: '2026',
    image: '/images/story-priya-karan.jpg',
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
    image: '/images/section_image/circle-roundtable-topdown.jpg',
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
    image: '/images/section_image/circle-meeting.png',
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
          <span className="text-slate-900 font-semibold">Gallery</span>
        </div>
      </div>

      {/* ─── SECTION 1: HERO (THE COMMUNITY AS IT ACTUALLY LOOKS) ─── */}
      <section className="relative overflow-hidden bg-[#FAFBFD] text-slate-900 pt-5 sm:pt-6 pb-12 sm:pb-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Master Card Hero Box */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-white via-white/95 to-slate-50 border border-slate-200/90 shadow-lg min-h-[480px] lg:min-h-[520px] p-6 sm:p-10 lg:p-12 flex items-center">
            {/* Ambient Background Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
              
              {/* Left Column: Manifesto & Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold tracking-[0.22em] uppercase text-[#0062D2]">
                    COMMUNITY LIFE &amp; ARCHIVES
                  </span>
                </div>

                <div className="space-y-2.5">
                  <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight leading-tight">
                    Gallery
                  </h1>
                  <p className="text-base sm:text-lg text-slate-700 font-semibold leading-relaxed">
                    The community, as it actually looks across rooms, cities, and national conclaves.
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  <p>
                    Every photo here is a real moment from a real room. <strong className="text-slate-900 font-semibold">Circle boardrooms, masterclasses, regional summits, and lifelong friendships forged in business.</strong>
                  </p>

                  {/* 4 Pillar Badges */}
                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 pt-1">
                    {[
                      { text: 'Circle Boardrooms & Roundtables', icon: Users },
                      { text: 'Annual National Conclaves', icon: Star },
                      { text: 'Impact Mentor Masterclasses', icon: GraduationCap },
                      { text: 'Verified Peer Awards & Galas', icon: Award },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/90 text-xs font-semibold text-slate-700 flex items-center gap-2 shadow-2xs"
                      >
                        <item.icon className="size-4 shrink-0 text-[#0062D2]" />
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3.5 rounded-2xl bg-blue-50 text-xs font-semibold text-[#0062D2] border border-blue-200/60 flex items-center gap-2">
                    <Sparkles className="size-4 shrink-0 text-[#0062D2]" />
                    <span>Real moments captured across 50+ cities and 200+ community gatherings.</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <a
                    href="#gallery-grid"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer uppercase tracking-wider"
                  >
                    <span>Browse Gallery</span>
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </a>

                  <a
                    href="https://unity.peersglobal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-slate-700 font-bold text-xs sm:text-sm border border-slate-300 shadow-2xs hover:bg-slate-50 transition-all uppercase tracking-wider"
                  >
                    <span>Open Unity App</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Hero Visual Card */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 aspect-[4/3] group bg-slate-900 flex flex-col justify-between p-6 sm:p-7">
                  <Image
                    src="/images/section_image/executive-director-conclave.jpg"
                    alt="Peers Global community leaders gathering on stage at the National Conclave"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/45 to-slate-950/30 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-blue-400/40 text-[10px] font-bold text-sky-300 tracking-widest uppercase backdrop-blur-md">
                      <span className="size-1.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                      NATIONAL CONCLAVE
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-mono font-bold text-white border border-white/20">
                      5,000+ PHOTOS
                    </span>
                  </div>

                  {/* Bottom Highlight */}
                  <div className="relative z-10 text-white space-y-1">
                    <p className="text-xs font-mono uppercase tracking-wider text-sky-300 font-bold">
                      Peers Global Institutional Archives
                    </p>
                    <p className="text-sm sm:text-base font-bold leading-snug">
                      Moments that forge lasting trust and collaborative enterprise.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Floating Stats Bar */}
          <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 items-center">
            {STATS.map((stat, i) => {
              const Icon = stat.icon
              return (
                <div
                  key={i}
                  className="rounded-2xl bg-white border border-slate-200/90 p-3.5 sm:p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="size-10 rounded-xl bg-blue-50 text-[#0062D2] border border-blue-100 flex items-center justify-center shrink-0 shadow-2xs">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                      {stat.value}
                    </div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      {stat.label}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ─── SECTION 2: BROWSE OUR GALLERY (FILTERS & PHOTOS) ─── */}
      <section id="gallery-grid" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                  BROWSE OUR GALLERY
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight leading-tight">
                Moments from across our community
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleResetFilters}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="size-3.5" />
                <span>Reset Filters</span>
              </button>
            </div>
          </div>

          {/* Filters Toolbar */}
          <div className="bg-[#FAFBFD] p-5 rounded-3xl border border-slate-200/90 shadow-2xs space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              {/* City Filter */}
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  City
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer shadow-2xs"
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
                  className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer shadow-2xs"
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
                  Event Category
                </label>
                <select
                  value={selectedEvent}
                  onChange={(e) => setSelectedEvent(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer shadow-2xs"
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
                  className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer shadow-2xs"
                >
                  {years.map((y) => (
                    <option key={y} value={y}>
                      {y === 'All' ? 'All Years' : y}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="size-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search moments by topic, city, or chapter..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-2xs"
              />
            </div>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo, idx) => (
              <div
                key={photo.id}
                onClick={() => openLightbox(idx)}
                className="rounded-3xl bg-[#FAFBFD] border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div className="relative h-56 w-full bg-slate-900 overflow-hidden">
                  <Image
                    src={photo.image}
                    alt={photo.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                  
                  <div className="absolute top-3.5 right-3.5">
                    <span className="px-3 py-1 rounded-full bg-slate-950/75 backdrop-blur-md text-[10px] font-mono font-bold text-sky-300 border border-white/20 shadow-md">
                      {photo.year}
                    </span>
                  </div>

                  <div className="absolute bottom-3.5 left-4 right-4 text-white">
                    <span className="text-[10px] font-mono text-sky-300 uppercase tracking-widest font-bold block mb-0.5">
                      {photo.category}
                    </span>
                    <h4 className="text-base font-bold text-white leading-tight">
                      {photo.title}
                    </h4>
                  </div>
                </div>

                <div className="p-5 space-y-3 text-xs">
                  <p className="text-slate-600 font-light leading-relaxed">
                    {photo.caption}
                  </p>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-slate-500 text-[11px] font-medium">
                    <span className="flex items-center gap-1">
                      <MapPin className="size-3 text-[#0062D2]" />
                      {photo.city}
                    </span>
                    <span>{photo.circle}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {!hasLoadedMore && (
            <div className="pt-6 text-center">
              <button
                onClick={handleLoadMore}
                className="px-8 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs uppercase tracking-wider transition-all shadow-xs cursor-pointer"
              >
                Load More Archive Photos
              </button>
            </div>
          )}

        </div>
      </section>

      {/* ─── SECTION 3: EXPLORE BY COLLECTION ─── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                  EXPLORE BY COLLECTION
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight leading-tight">
                Curated Collections
              </h2>
            </div>

            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0062D2] hover:text-blue-800 transition-colors uppercase tracking-wider cursor-pointer"
            >
              <span>View All Collections</span>
              <ArrowRight className="size-3.5" />
            </button>
          </div>

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
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <div className="relative h-32 w-full overflow-hidden bg-slate-900">
                      <Image
                        src={col.image}
                        alt={col.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    </div>

                    <div className="p-4 space-y-1.5">
                      <div className={`size-8 rounded-xl border flex items-center justify-center ${col.iconBg}`}>
                        <Icon className="size-4" />
                      </div>
                      <h3 className="font-bold text-slate-900 text-sm group-hover:text-[#0062D2] transition-colors leading-snug">
                        {col.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 leading-snug font-light">
                        {col.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 pt-0 flex justify-end">
                    <div className="size-7 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 group-hover:bg-[#0062D2] group-hover:text-white group-hover:border-[#0062D2] transition-colors">
                      <ArrowRight className="size-3.5" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ─── SECTION 4: SIGNATURE LUXURY CLOSING HERO BANNER ─── */}
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
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-sky-400">
                  WITNESS THE MOVEMENT
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight">
                Build Your Business. Build Your Relationships. Build Your Circle.
              </h2>

              <div className="space-y-3.5 text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl">
                <p>
                  Join over 1,000+ verified entrepreneurs across India. Experience the energy of governed peer circles in your city.
                </p>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1">
                  <p className="text-sky-200 font-medium text-xs sm:text-sm">
                    • 5,000+ Moments · 200+ Conclaves · 50+ Cities Nationwide.
                  </p>
                  <p className="text-white font-bold text-xs sm:text-sm">Your next milestone starts with a conversation.</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-3">
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-xs sm:text-sm font-bold shadow-lg transition-all hover:scale-105 uppercase tracking-wider group cursor-pointer"
                >
                  <span>Apply for Membership</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/30 hover:border-white bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-md transition-all"
                >
                  <span>Open Unity App →</span>
                </a>
              </div>
            </div>

            {/* Right Cursive Script Highlights */}
            <div className="lg:col-span-4 text-left lg:text-right select-none pointer-events-none drop-shadow-lg space-y-1">
              <p
                className="text-xl sm:text-2xl text-white/70 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                People.
              </p>
              <p
                className="text-xl sm:text-2xl text-white/80 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Moments.
              </p>
              <p
                className="text-xl sm:text-2xl text-white leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Growth.
              </p>
              <p
                className="text-2xl sm:text-3xl text-amber-300 font-bold leading-tight"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                A Stronger Tomorrow.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ─── MODAL: FULL LIGHTBOX VIEW ─── */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-20 size-9 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="size-5" />
            </button>

            <button
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 size-10 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronLeft className="size-5" />
            </button>

            <button
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 size-10 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronRightIcon className="size-5" />
            </button>

            <div className="relative h-[420px] sm:h-[500px] w-full bg-slate-950">
              <Image
                src={filteredPhotos[lightboxIndex].image}
                alt={filteredPhotos[lightboxIndex].title}
                fill
                className="object-contain object-center"
              />
            </div>

            <div className="p-6 bg-slate-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-300 bg-blue-900/40 px-2.5 py-1 rounded-full border border-blue-500/30 inline-block mb-1.5">
                  {filteredPhotos[lightboxIndex].category}
                </span>
                <h3 className="font-bold text-lg text-white">
                  {filteredPhotos[lightboxIndex].title}
                </h3>
                <p className="text-xs text-slate-300 mt-1 max-w-xl font-light">
                  {filteredPhotos[lightboxIndex].caption}
                </p>
              </div>

              <div className="text-xs text-slate-400 shrink-0 space-y-1 font-mono">
                <div className="flex items-center gap-1.5">
                  <MapPin className="size-3.5 text-sky-400" />
                  <span>{filteredPhotos[lightboxIndex].city}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="size-3.5 text-sky-400" />
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
