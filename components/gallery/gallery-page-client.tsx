'use client'

import React, { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import '@/app/sections.css'
import { GalaxyButton } from '@/components/ui/galaxy-button'
import {
  fetchGalleryPhotos,
  fetchCuratedCollections,
  type ApiGalleryPhoto,
  type ApiGalleryCollection,
} from '@/lib/api/web-content'
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

// ─── Gallery Photos Type ──────────────────────────────────────────────────────
type GalleryPhoto = ApiGalleryPhoto

export function GalleryPageClient() {
  const [photos, setPhotos] = useState<GalleryPhoto[]>([])
  const [collections, setCollections] = useState<ApiGalleryCollection[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasLoadedMore, setHasLoadedMore] = useState(false)

  // Fetch dynamic photos and curated collections from Unity backend API on mount
  const loadData = async () => {
    setIsLoading(true)
    try {
      const [photoData, collectionData] = await Promise.all([
        fetchGalleryPhotos(),
        fetchCuratedCollections(),
      ])
      setPhotos(photoData || [])
      setCollections(collectionData || [])
    } catch (err) {
      console.warn('Failed to load dynamic gallery photos:', err)
      setPhotos([])
      setCollections([])
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  // Filters State
  const [selectedCity, setSelectedCity] = useState('All')
  const [selectedCircle, setSelectedCircle] = useState('All')
  const [selectedEvent, setSelectedEvent] = useState('All')
  const [selectedYear, setSelectedYear] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  // Lightbox Modal State
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  // Filter Options Extractors (dynamically derived from the active photos set)
  const cities = useMemo(() => ['All', ...Array.from(new Set(photos.map((p) => p.city).filter(Boolean)))], [photos])
  const circles = useMemo(() => ['All', ...Array.from(new Set(photos.map((p) => p.circle).filter(Boolean)))], [photos])
  const events = useMemo(() => ['All', ...Array.from(new Set(photos.map((p) => p.category).filter(Boolean)))], [photos])
  const years = useMemo(() => ['All', ...Array.from(new Set(photos.map((p) => p.year).filter(Boolean)))], [photos])

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

  const handleLoadMore = async () => {
    try {
      const nextPage = Math.floor(photos.length / 12) + 1
      const moreApiData = await fetchGalleryPhotos({ page: nextPage, limit: 12 })
      if (moreApiData && moreApiData.length > 0) {
        setPhotos((prev) => [...prev, ...moreApiData])
      } else {
        setHasLoadedMore(true)
      }
    } catch {
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
                onClick={loadData}
                disabled={isLoading}
                title="Refresh from Admin Panel"
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer hover:shadow-xs group"
              >
                <RotateCcw className={`size-3.5 text-slate-500 group-hover:text-[#1D4ED8] transition-colors ${isLoading ? 'animate-spin text-blue-600' : ''}`} />
                <span className="group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  {isLoading ? 'Updating...' : 'Refresh'}
                </span>
              </button>
              {(selectedCity !== 'All' || selectedCircle !== 'All' || selectedEvent !== 'All' || selectedYear !== 'All' || searchQuery) && (
                <button
                  onClick={handleResetFilters}
                  className="px-4 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <X className="size-3.5" />
                  <span>Reset</span>
                </button>
              )}
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

          {/* Photo Grid & Dynamic Empty State */}
          {isLoading ? (
            <div className="py-24 text-center space-y-3">
              <div className="size-10 rounded-full border-2 border-blue-600 border-t-transparent animate-spin mx-auto" />
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Loading community moments...
              </p>
            </div>
          ) : photos.length === 0 ? (
            <div className="text-center py-20 px-6 bg-white rounded-3xl border border-slate-200/90 shadow-2xs space-y-4 max-w-xl mx-auto my-4">
              <div className="size-16 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 flex items-center justify-center mx-auto text-blue-600 shadow-xs">
                <Camera className="size-7" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  No Moments Uploaded Yet
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed max-w-md mx-auto">
                  Community photos, circle meetings, and event memories uploaded from the admin panel will appear here automatically.
                </p>
              </div>
              <div className="pt-2 flex items-center justify-center gap-3">
                <button
                  onClick={loadData}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <RotateCcw className="size-3.5" />
                  <span>Refresh Gallery</span>
                </button>
              </div>
            </div>
          ) : filteredPhotos.length === 0 ? (
            <div className="text-center py-16 px-4 bg-slate-50/80 rounded-3xl border border-dashed border-slate-200 space-y-3">
              <p className="text-sm font-semibold text-slate-700">No moments found matching your current filter selections.</p>
              <button
                onClick={handleResetFilters}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-xs"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPhotos.map((photo, idx) => (
                <div
                  key={photo.id}
                  onClick={() => openLightbox(idx)}
                  className="group/card relative rounded-3xl p-[1px] bg-slate-200/80 hover:bg-gradient-to-r hover:from-[#1D4ED8] hover:to-[#E11D48] transition-all duration-300 shadow-2xs hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                >
                  <div className="rounded-[23px] bg-[#FAFBFD] overflow-hidden h-full flex flex-col justify-between group">
                    <div className="relative h-56 w-full bg-slate-900 overflow-hidden">
                      {photo.image ? (
                        <Image
                          src={photo.image}
                          alt={photo.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="size-full flex items-center justify-center bg-slate-800 text-slate-500">
                          <Camera className="size-8 opacity-40" />
                        </div>
                      )}
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
          )}

          {/* Load More Button */}
          {photos.length >= 12 && !hasLoadedMore && (
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

      {/* ─── SECTION 3: EXPLORE BY COLLECTION (DYNAMIC) ─── */}
      {collections.length > 0 && (
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
              {collections.map((col, idx) => (
                <div
                  key={col.id}
                  onClick={() => {
                    setSelectedEvent(col.categoryName || col.title)
                    const el = document.getElementById('gallery-grid')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="group/card relative rounded-3xl p-[1px] bg-slate-200/80 hover:bg-gradient-to-r hover:from-[#1D4ED8] hover:to-[#E11D48] transition-all duration-300 shadow-2xs hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                >
                  <div className="rounded-[23px] bg-white overflow-hidden h-full flex flex-col justify-between group">
                    <div>
                      <div className="relative h-32 w-full overflow-hidden bg-slate-900">
                        {col.cover_image || col.image ? (
                          <Image
                            src={col.cover_image || col.image || ''}
                            alt={col.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="size-full flex items-center justify-center bg-slate-800 text-slate-500">
                            <Sparkles className="size-6 text-blue-400" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                      </div>

                      <div className="p-4 space-y-1.5">
                        <h3 className="font-bold text-slate-900 text-sm group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all leading-snug">
                          {col.title}
                        </h3>
                        {col.subtitle && (
                          <p className="text-[11px] text-slate-500 leading-snug font-light line-clamp-2">
                            {col.subtitle}
                          </p>
                        )}
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
      )}

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
