'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import '@/app/sections.css'
import { GalaxyButton } from '@/components/ui/galaxy-button'
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
    value: '5,000+',
    label: 'Captured Moments',
    svgPath: (
      <>
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
        <circle cx="12" cy="13" r="3" />
      </>
    ),
  },
  {
    value: '200+',
    label: 'Conclaves & Events',
    svgPath: (
      <>
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18" />
      </>
    ),
  },
  {
    value: '50+',
    label: 'Cities Represented',
    svgPath: (
      <>
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
  {
    value: '10+',
    label: 'Global Regions',
    svgPath: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </>
    ),
  },
]

// ─── 6 Collections ──────────────────────────────────────────────────────────
const COLLECTIONS = [
  {
    id: 'circle-meetings',
    title: 'Circle Meetings',
    subtitle: 'The rooms where it happens, month after month.',
    image: '/images/section_image/circle-meeting.png',
    svgPath: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    categoryName: 'Circle Meetings',
  },
  {
    id: 'city-gatherings',
    title: 'City Gatherings',
    subtitle: 'Circles coming together across regional chapters.',
    image: '/images/who-we-are-friends.jpg',
    svgPath: (
      <>
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
    categoryName: 'City Gatherings',
  },
  {
    id: 'regional-conclaves',
    title: 'Regional Conclaves',
    subtitle: 'Territories in one high-energy room.',
    image: '/images/section_image/executive-director-conclave.jpg',
    svgPath: (
      <>
        <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
        <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
        <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
      </>
    ),
    categoryName: 'Regional Conclaves',
  },
  {
    id: 'annual-summit',
    title: 'The Annual Summit',
    subtitle: 'The grand gala celebrating the whole community.',
    image: '/images/section_image/event_awards_stage.jpg',
    svgPath: (
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    ),
    categoryName: 'Annual Summit',
  },
  {
    id: 'awards',
    title: 'Recognition & Awards',
    subtitle: 'Public contribution affirmed and celebrated.',
    image: '/images/section_image/event_awards_stage.jpg',
    svgPath: (
      <>
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </>
    ),
    categoryName: 'Recognition & Awards',
  },
  {
    id: 'masterclasses',
    title: 'Masterclasses',
    subtitle: 'Impact mentors delivering practical wisdom.',
    image: '/images/section_image/circle-roundtable-topdown.jpg',
    svgPath: (
      <>
        <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
        <path d="M22 10v6" />
        <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
      </>
    ),
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
    circle: 'Leadership Board',
    year: '2026',
    image: '/images/who-we-are-inner-board.jpg',
    caption: 'Honouring outstanding retention, governance integrity, and regional community expansion.',
  },
  {
    id: 'photo-09',
    title: 'MSME Manufacturing Plant Modernization',
    category: 'Masterclasses',
    city: 'Pune',
    circle: 'Engineering Circle',
    year: '2025',
    image: '/images/story-priya-karan.jpg',
    caption: 'Practical session on automation and cost-effective inventory visibility without bloated software.',
  },
  {
    id: 'photo-10',
    title: 'Circle Foundation Day & Charter Signing',
    category: 'City Gatherings',
    city: 'Delhi NCR',
    circle: 'Capital Circle',
    year: '2026',
    image: '/images/industry-cross-city-handshake.jpg',
    caption: 'Charter members pledging commitment to zero predatory pitching and transparent mutual support.',
  },
  {
    id: 'photo-11',
    title: 'Annual Peer Summit Keynote Hall',
    category: 'Annual Summit',
    city: 'Ahmedabad',
    circle: 'All Circles',
    year: '2025',
    image: '/images/section_image/event_awards_stage.jpg',
    caption: 'Over 800 founders gathered to evaluate the 1 Million Lives by 2030 roadmap.',
  },
  {
    id: 'photo-12',
    title: 'Confidential Boardroom Strategy Circle',
    category: 'Circle Meetings',
    city: 'Hyderabad',
    circle: 'Healthcare Circle',
    year: '2026',
    image: '/images/section_image/circle-meeting.png',
    caption: 'Monthly governed closed-door session reviewing member strategic roadblocks and opportunities.',
  },
]

// ─── Extra 6 Photos (Loaded on Demand) ──────────────────────────────────────
const MORE_PHOTOS: GalleryPhoto[] = [
  {
    id: 'photo-13',
    title: 'Cross-Border MSME Trade Syndicate',
    category: 'Circle Meetings',
    city: 'Mumbai',
    circle: 'Export Circle',
    year: '2025',
    image: '/images/story-amit-sandeep.jpg',
    caption: 'Direct collaboration between textile manufacturers and international freight operators.',
  },
  {
    id: 'photo-14',
    title: 'Women in Enterprise Leadership Panel',
    category: 'City Gatherings',
    city: 'Bengaluru',
    circle: 'Fempreneur Circle',
    year: '2026',
    image: '/images/story-neha-simran.jpg',
    caption: 'Evaluating funding-free sustainable bootstrap scaling in tier-1 markets.',
  },
  {
    id: 'photo-15',
    title: 'Executive Director Regional Strategy Meet',
    category: 'Regional Conclaves',
    city: 'Ahmedabad',
    circle: 'Leadership Board',
    year: '2025',
    image: '/images/section_image/executive-director-conclave.jpg',
    caption: 'Harmonizing cross-city member introductions and industry roundtable topics.',
  },
  {
    id: 'photo-16',
    title: 'Pillar of Integrity Honour Award',
    category: 'Recognition & Awards',
    city: 'Surat',
    circle: 'All Circles',
    year: '2026',
    image: '/images/who-we-are-inner-board.jpg',
    caption: 'Presented to leaders upholding strict governance and trust verification across chapters.',
  },
  {
    id: 'photo-17',
    title: 'Mid-Market Working Capital Clinic',
    category: 'Masterclasses',
    city: 'Pune',
    circle: 'Finance Circle',
    year: '2025',
    image: '/images/industry-panel-leaders.jpg',
    caption: 'Hands-on breakdown of vendor contract structuring and cash cycle protection.',
  },
  {
    id: 'photo-18',
    title: 'National Gala Closing Fellowship',
    category: 'Annual Summit',
    city: 'Ahmedabad',
    circle: 'All Circles',
    year: '2026',
    image: '/images/section_image/event_awards_stage.jpg',
    caption: 'Celebrating another year of authentic entrepreneurial solidarity and shared growth.',
  },
]

export function GalleryPageClient() {
  const [photos, setPhotos] = useState<GalleryPhoto[]>(INITIAL_PHOTOS)
  const [hasLoadedMore, setHasLoadedMore] = useState(false)

  // Filters State
  const [selectedCity, setSelectedCity] = useState('All')
  const [selectedCircle, setSelectedCircle] = useState('All')
  const [selectedEvent, setSelectedEvent] = useState('All')
  const [selectedYear, setSelectedYear] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  // Lightbox Modal State
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  // Filter Options Extractors
  const cities = useMemo(() => ['All', ...Array.from(new Set(photos.map((p) => p.city)))], [photos])
  const circles = useMemo(() => ['All', ...Array.from(new Set(photos.map((p) => p.circle)))], [photos])
  const events = useMemo(() => ['All', ...Array.from(new Set(photos.map((p) => p.category)))], [photos])
  const years = useMemo(() => ['All', ...Array.from(new Set(photos.map((p) => p.year)))], [photos])

  // Filtered Photos
  const filteredPhotos = useMemo(() => {
    return photos.filter((p) => {
      const matchCity = selectedCity === 'All' || p.city === selectedCity
      const matchCircle = selectedCircle === 'All' || p.circle === selectedCircle
      const matchEvent = selectedEvent === 'All' || p.category === selectedEvent
      const matchYear = selectedYear === 'All' || p.year === selectedYear
      const matchSearch =
        searchQuery.trim() === '' ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.caption.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.circle.toLowerCase().includes(searchQuery.toLowerCase())

      return matchCity && matchCircle && matchEvent && matchYear && matchSearch
    })
  }, [photos, selectedCity, selectedCircle, selectedEvent, selectedYear, searchQuery])

  const handleLoadMore = () => {
    setPhotos((prev) => [...prev, ...MORE_PHOTOS])
    setHasLoadedMore(true)
  }

  const handleResetFilters = () => {
    setSelectedCity('All')
    setSelectedCircle('All')
    setSelectedEvent('All')
    setSelectedYear('All')
    setSearchQuery('')
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
  }

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
      
      {/* Global Gradient Definition for Brand Icons */}
      <svg width="0" height="0" className="absolute pointer-events-none" style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="50%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#E11D48" />
          </linearGradient>
          <linearGradient id="brandGradLight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="50%" stopColor="#818CF8" />
            <stop offset="100%" stopColor="#FB7185" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-slate-800 bg-[#040F24] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-400 font-medium">
          <Link href="/" className="hover:text-[#38BDF8] transition-colors">
            Home
          </Link>
          <ChevronRight className="size-3.5 text-slate-500" />
          <Link href="/events" className="hover:text-[#38BDF8] transition-colors">
            Community Life
          </Link>
          <ChevronRight className="size-3.5 text-slate-500" />
          <span className="text-white font-semibold">Gallery</span>
        </div>
      </div>

      {/* ─── SECTION 1: HERO (THE COMMUNITY AS IT ACTUALLY LOOKS) ─── */}
      <section className="fd-hero">
        <video
          className="fd-hero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
          src="/videos/homepage-hero-bg.mp4"
        />
        <div className="fd-hero__scrim" aria-hidden="true"></div>

        <div className="fd-hero__inner">
          <div className="fd-hero__wrapper !max-w-4xl">
            <div className="fd-hero__stack">
              <div className="fd-hero__group">
                {/* Gradient Pill Label */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-900/60 via-indigo-900/50 to-rose-900/60 backdrop-blur-md border border-white/20 shadow-lg">
                  <span className="inline-block size-2 rounded-full bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] animate-pulse" />
                  <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] uppercase bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent">
                    COMMUNITY LIFE &amp; ARCHIVES
                  </span>
                </div>

                {/* Main Headline with Gradient Brand Accent */}
                <h1 className="fd-hero__headline !text-3xl sm:!text-5xl lg:!text-[52px] !leading-[1.14] font-semibold tracking-tight text-white">
                  Gallery
                </h1>

                {/* Subtitle with Gradient Tone */}
                <p className="fd-hero__sub !text-base sm:!text-xl font-medium leading-relaxed bg-gradient-to-r from-white via-slate-100 to-sky-200 bg-clip-text text-transparent">
                  The community, as it actually looks across rooms, cities, and national conclaves.
                </p>

                {/* Quote with Brand Accent */}
                <p className="text-sm sm:text-base text-white/95 font-medium italic border-l-2 border-[#E11D48] pl-3.5 py-0.5 max-w-2xl">
                  &ldquo;Every photo here is a real moment from a real room. Circle boardrooms, masterclasses, regional summits, and lifelong friendships forged in business.&rdquo;
                </p>

                {/* Explanatory Context */}
                <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed font-normal max-w-2xl pt-1">
                  Real moments captured across 50+ cities and 200+ community gatherings — verified peer awards, mentor masterclasses, boardroom roundtables, and annual national conclaves.
                </p>
              </div>

              {/* CTAs matching Home First Section */}
              <div className="fd-hero__cta flex flex-wrap items-center gap-3.5">
                <GalaxyButton
                  href="#gallery-grid"
                  size="lg"
                  className="text-xs sm:text-sm uppercase tracking-wider"
                >
                  BROWSE GALLERY
                </GalaxyButton>
                <GalaxyButton
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="transparent"
                  size="lg"
                  className="text-xs sm:text-sm uppercase tracking-wider text-white"
                >
                  DOWNLOAD UNITY APP
                </GalaxyButton>
              </div>

              {/* Stats Band */}
              <div className="w-full pt-5 border-t border-white/15">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-center gap-2 font-medium text-white">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-rose-400 font-bold text-base sm:text-lg shrink-0">
                      5,000+
                    </span>
                    <span className="text-slate-200">Captured Moments</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium text-white border-l md:border-l border-white/10 pl-3 md:pl-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-rose-400 font-bold text-base sm:text-lg shrink-0">
                      200+
                    </span>
                    <span className="text-slate-200">Conclaves &amp; Events</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium text-white border-l-0 md:border-l border-white/10 md:pl-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-rose-400 font-bold text-base sm:text-lg shrink-0">
                      50+
                    </span>
                    <span className="text-slate-200">Cities Represented</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium text-white border-l md:border-l border-white/10 pl-3 md:pl-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-rose-400 font-bold text-base sm:text-lg shrink-0">
                      10+
                    </span>
                    <span className="text-slate-200">Global Regions</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: BROWSE OUR GALLERY (FILTERS & PHOTOS) ─── */}
      <section id="gallery-grid" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="mb-1">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent inline-block">
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
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer hover:shadow-xs group"
              >
                <RotateCcw className="size-3.5 text-slate-500 group-hover:text-[#1D4ED8] transition-colors" />
                <span className="group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all">Reset Filters</span>
              </button>
            </div>
          </div>

          {/* Filters Toolbar */}
          <div className="bg-[#FAFBFD] p-5 rounded-3xl border border-slate-200/90 shadow-2xs space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              {/* City Filter */}
              <div>
                <label className="text-[10px] font-extrabold uppercase tracking-wider block mb-1 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">
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
                <label className="text-[10px] font-extrabold uppercase tracking-wider block mb-1 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">
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
                <label className="text-[10px] font-extrabold uppercase tracking-wider block mb-1 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">
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
                <label className="text-[10px] font-extrabold uppercase tracking-wider block mb-1 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">
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
              <svg className="size-4 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <g stroke="url(#brandGrad)">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </g>
              </svg>
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
                className="group/card relative rounded-3xl p-[1px] bg-slate-200/80 hover:bg-gradient-to-r hover:from-[#1D4ED8] hover:to-[#E11D48] transition-all duration-300 shadow-2xs hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              >
                <div className="rounded-[23px] bg-[#FAFBFD] overflow-hidden h-full flex flex-col justify-between group">
                  <div className="relative h-56 w-full bg-slate-900 overflow-hidden">
                    <Image
                      src={photo.image}
                      alt={photo.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                    
                    <div className="absolute top-3.5 right-3.5">
                      <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-mono font-bold bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent border border-white/20 shadow-md">
                        {photo.year}
                      </span>
                    </div>

                    <div className="absolute bottom-3.5 left-4 right-4 text-white">
                      <span className="text-[10px] font-mono bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent uppercase tracking-widest font-extrabold block mb-0.5">
                        {photo.category}
                      </span>
                      <h4 className="text-base font-bold text-white leading-tight group-hover:bg-gradient-to-r group-hover:from-[#38BDF8] group-hover:via-[#818CF8] group-hover:to-[#FB7185] group-hover:bg-clip-text group-hover:text-transparent transition-all">
                        {photo.title}
                      </h4>
                    </div>
                  </div>

                  <div className="p-5 space-y-3 text-xs">
                    <p className="text-slate-600 font-light leading-relaxed">
                      {photo.caption}
                    </p>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-slate-500 text-[11px] font-medium">
                      <span className="flex items-center gap-1.5 font-semibold text-slate-700">
                        <svg className="size-3.5 shrink-0" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <g stroke="url(#brandGrad)">
                            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                            <circle cx="12" cy="10" r="3" />
                          </g>
                        </svg>
                        <span className="bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent font-semibold">
                          {photo.city}
                        </span>
                      </span>
                      <span className="text-slate-600 font-medium">{photo.circle}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {!hasLoadedMore && (
            <div className="pt-8 text-center">
              <GalaxyButton
                onClick={handleLoadMore}
                size="lg"
                icon={false}
                className="text-xs font-bold uppercase tracking-wider shadow-lg"
              >
                Load More Archive Photos
              </GalaxyButton>
            </div>
          )}

        </div>
      </section>

      {/* ─── SECTION 3: EXPLORE BY COLLECTION ─── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="mb-1">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent inline-block">
                  EXPLORE BY COLLECTION
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight leading-tight">
                Curated Collections
              </h2>
            </div>

            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1.5 text-xs font-bold bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent hover:opacity-80 transition-opacity uppercase tracking-wider cursor-pointer"
            >
              <span>View All Collections</span>
              <ArrowRight className="size-3.5 text-[#E11D48]" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {COLLECTIONS.map((col, idx) => (
              <div
                key={col.id}
                onClick={() => {
                  setSelectedEvent(col.categoryName)
                  const el = document.getElementById('gallery-grid')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group/card relative rounded-3xl p-[1px] bg-slate-200/80 hover:bg-gradient-to-r hover:from-[#1D4ED8] hover:to-[#E11D48] transition-all duration-300 shadow-2xs hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              >
                <div className="rounded-[23px] bg-white overflow-hidden h-full flex flex-col justify-between group">
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
                      <div className="shrink-0 mb-2">
                        <svg className="size-5" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <defs>
                            <linearGradient id={`colGrad-${idx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#1D4ED8" />
                              <stop offset="100%" stopColor="#E11D48" />
                            </linearGradient>
                          </defs>
                          <g stroke={`url(#colGrad-${idx})`}>
                            {col.svgPath}
                          </g>
                        </svg>
                      </div>
                      <h3 className="font-bold text-slate-900 text-sm group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all leading-snug">
                        {col.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 leading-snug font-light">
                        {col.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 pt-0 flex justify-end">
                    <div className="size-7 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:text-white group-hover:border-transparent transition-all">
                      <ArrowRight className="size-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── SECTION 4: SIGNATURE LUXURY CLOSING HERO BANNER ─── */}
      <section
        id="download-unity"
        className="relative py-20 lg:py-28 text-white overflow-hidden border-t border-slate-800/80"
        style={{
          background: 'linear-gradient(135deg, #030712 0%, #07132B 35%, #0B1120 70%, #150618 100%)',
        }}
      >
        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-rose-600/18 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.08),transparent_60%)] pointer-events-none" />

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
          <div className="max-w-3xl flex flex-col items-start space-y-5">

              <div>
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent inline-block">
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

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-3">
                <GalaxyButton
                  href="/membership"
                  size="lg"
                  className="text-xs sm:text-sm font-semibold uppercase tracking-wider"
                >
                  Apply for Membership
                </GalaxyButton>
              </div>
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
