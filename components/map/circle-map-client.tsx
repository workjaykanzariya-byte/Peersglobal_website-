'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  MapPin,
  Compass,
  Users,
  Building2,
  Globe,
  Search,
  Filter,
  Sparkles,
  CheckCircle2,
  Calendar,
  Layers,
  Shield,
  Clock,
  HeartHandshake,
  Smartphone,
  Check,
} from 'lucide-react'
import { ACTIVE_CITIES } from '@/lib/data/site'
import { CIRCLES } from '@/lib/data/circles'

interface CityMapInfo {
  name: string
  state: string
  circles: number
  members: number
  status: string
  image: string
  slug: string
  nextMeetingDate?: string
}

const LIVE_CITIES: CityMapInfo[] = [
  {
    name: 'Ahmedabad',
    state: 'Gujarat, India',
    circles: 6,
    members: 280,
    status: 'Active Circle',
    image: '/images/lsr-city-sunrise.jpg',
    slug: 'ahmedabad',
    nextMeetingDate: 'Second Wednesday of the month',
  },
  {
    name: 'Mumbai',
    state: 'Maharashtra, India',
    circles: 8,
    members: 420,
    status: 'Active Circle',
    image: '/images/territory/mumbai.jpg',
    slug: 'mumbai',
    nextMeetingDate: 'Third Thursday of the month',
  },
  {
    name: 'Bengaluru',
    state: 'Karnataka, India',
    circles: 6,
    members: 340,
    status: 'Active Circle',
    image: '/images/territory/bengaluru.jpg',
    slug: 'bengaluru',
    nextMeetingDate: 'First Tuesday of the month',
  },
  {
    name: 'Delhi NCR',
    state: 'National Capital Region, India',
    circles: 7,
    members: 310,
    status: 'Active Circle',
    image: '/images/territory/delhi.jpg',
    slug: 'delhi',
    nextMeetingDate: 'Second Friday of the month',
  },
  {
    name: 'Pune',
    state: 'Maharashtra, India',
    circles: 4,
    members: 210,
    status: 'Active Circle',
    image: '/images/territory/pune.jpg',
    slug: 'pune',
    nextMeetingDate: 'Third Wednesday of the month',
  },
  {
    name: 'Hyderabad',
    state: 'Telangana, India',
    circles: 5,
    members: 220,
    status: 'Active Circle',
    image: '/images/territory/hyderabad.jpg',
    slug: 'hyderabad',
    nextMeetingDate: 'First Thursday of the month',
  },
  {
    name: 'Surat',
    state: 'Gujarat, India',
    circles: 4,
    members: 190,
    status: 'Active Circle',
    image: '/images/lsr-city-sunrise.jpg',
    slug: 'surat',
    nextMeetingDate: 'Fourth Tuesday of the month',
  },
  {
    name: 'Vadodara',
    state: 'Gujarat, India',
    circles: 3,
    members: 140,
    status: 'Active Circle',
    image: '/images/lsr-city-sunrise.jpg',
    slug: 'vadodara',
    nextMeetingDate: 'Second Monday of the month',
  },
  {
    name: 'Rajkot',
    state: 'Gujarat, India',
    circles: 3,
    members: 130,
    status: 'Active Circle',
    image: '/images/lsr-city-sunrise.jpg',
    slug: 'rajkot',
    nextMeetingDate: 'Third Saturday of the month',
  },
  {
    name: 'Dubai',
    state: 'United Arab Emirates',
    circles: 4,
    members: 180,
    status: 'Active Circle',
    image: '/images/territory/mumbai.jpg',
    slug: 'dubai',
    nextMeetingDate: 'First Wednesday of the month',
  },
  {
    name: 'London',
    state: 'United Kingdom',
    circles: 3,
    members: 120,
    status: 'Active Circle',
    image: '/images/territory/delhi.jpg',
    slug: 'london',
    nextMeetingDate: 'Last Thursday of the month',
  },
  {
    name: 'Singapore',
    state: 'Singapore',
    circles: 3,
    members: 110,
    status: 'Active Circle',
    image: '/images/territory/bengaluru.jpg',
    slug: 'singapore',
    nextMeetingDate: 'Second Tuesday of the month',
  },
]

export function CircleMapClient() {
  const [activeRegionTab, setActiveRegionTab] = useState<'all' | 'india' | 'international'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCity, setSelectedCity] = useState<CityMapInfo>(LIVE_CITIES[0])

  // Filtered live cities
  const filteredCities = useMemo(() => {
    return LIVE_CITIES.filter((city) => {
      const matchSearch =
        city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        city.state.toLowerCase().includes(searchQuery.toLowerCase())

      if (activeRegionTab === 'india') {
        return matchSearch && city.state.toLowerCase().includes('india')
      }
      if (activeRegionTab === 'international') {
        return matchSearch && !city.state.toLowerCase().includes('india')
      }
      return matchSearch
    })
  }, [searchQuery, activeRegionTab])

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#0062D2] selection:text-white antialiased">
      {/* ─── Breadcrumb ─── */}
      <div className="border-b border-slate-200/80 bg-slate-50/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-slate-600">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/circles" className="hover:text-slate-900 transition-colors">
            Circles
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#0062D2] font-semibold">The Map</span>
        </div>
      </div>

      {/* =========================================================================
          SECTION 1: HERO (THE MAP: WHERE THIS COMMUNITY IS, RIGHT NOW)
          ========================================================================= */}
      <section className="relative pt-10 pb-14 sm:pt-14 sm:pb-20 border-b border-slate-200 bg-gradient-to-b from-white via-[#F6F9FD] to-[#EDF3FB] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50/80 border border-blue-100 text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text shadow-2xs">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                WHERE THIS COMMUNITY IS, RIGHT NOW
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-slate-900 tracking-tight leading-[1.08] font-bold">
                The Map
              </h1>

              <p className="text-xl sm:text-2xl font-serif text-slate-800 font-bold leading-snug">
                Where this community is, right now.
              </p>

              <p className="text-sm sm:text-base text-slate-600 max-w-xl font-normal leading-relaxed">
                Every Circle begins with people. And as those people come together across cities, districts, states and countries, something larger takes shape: a community connected by relationships, learning and collaboration.
              </p>

              <p className="text-sm sm:text-base text-slate-800 font-medium max-w-xl leading-relaxed">
                The Map gives you a view of that community. Not simply where Peers Global hopes to be. <strong>Where the community is—right now.</strong>
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/circles/find"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-sm font-bold hover:shadow-lg transition-all shadow-md uppercase tracking-wider"
                >
                  <span>Find Your Circle</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/start-a-circle"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white border border-slate-300 hover:border-slate-400 text-slate-800 text-sm font-bold hover:bg-slate-50 transition-all shadow-2xs uppercase tracking-wider"
                >
                  <span>Start a Circle</span>
                </Link>
              </div>
            </div>

            {/* Right Visual Card (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700/60 bg-gradient-to-br from-[#070D18] via-[#0B1528] to-[#0A101D] p-8 text-white space-y-5">
                <div className="size-11 rounded-2xl bg-white/10 text-sky-300 flex items-center justify-center">
                  <MapPin className="size-6 text-[#7DD3FC]" />
                </div>

                <h3 className="font-serif text-2xl font-bold text-white leading-tight">
                  Every Pin Represents a Live Circle
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Each pin on the map represents a live Circle with a scheduled meeting. That matters.
                </p>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs font-semibold text-sky-200">
                  A pin is not a promise that a Circle may exist one day. It represents a Circle that is active and has a meeting scheduled.
                </div>

                <p className="text-xs text-slate-400 italic">
                  The map is a view of the community as it exists—not a picture of an aspiration.
                </p>
              </div>
            </div>

          </div>

          {/* 4 Core Pillars of The Map */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-10 mt-10 border-t border-slate-200">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <span className="block text-lg sm:text-xl font-serif font-bold text-slate-900 leading-tight">
                Live Chapters
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Scheduled meetings only
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <span className="block text-lg sm:text-xl font-serif font-bold text-slate-900 leading-tight">
                City to Region
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Connected accountability
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <span className="block text-lg sm:text-xl font-serif font-bold text-slate-900 leading-tight">
                Local to Global
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Cross-border scale
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <span className="block text-lg sm:text-xl font-serif font-bold text-slate-900 leading-tight">
                Real-Time Data
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Accurate ground presence
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: INTERACTIVE MAP & EXPLORER
          ========================================================================= */}
      <section id="explore-map" className="py-12 sm:py-16 border-b border-slate-200 bg-[#FAFBFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  EXPLORE THE MAP
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                Live Circles on the Map
              </h2>
            </div>

            {/* Controls: Region Tabs + Search */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex p-1 rounded-xl bg-slate-200/70 border border-slate-300/60">
                {(['all', 'india', 'international'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveRegionTab(tab)}
                    className={`px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold capitalize transition-all cursor-pointer ${
                      activeRegionTab === tab
                        ? 'bg-[#0062D2] text-white shadow-sm'
                        : 'text-slate-700 hover:text-slate-900'
                    }`}
                  >
                    {tab === 'all' ? 'All Locations' : tab === 'india' ? 'India' : 'International'}
                  </button>
                ))}
              </div>

              <div className="relative w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search city or state..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-1.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0062D2]"
                />
              </div>
            </div>
          </div>

          {/* Interactive Map Canvas with Active Pins */}
          <div className="relative w-full h-[480px] sm:h-[560px] rounded-3xl bg-[#EAF2F8] border border-slate-200 overflow-hidden shadow-inner flex items-center justify-center">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#E2EDF8] via-[#D5E6F5] to-[#C9E0F3]" />

            {/* Vector Map Silhouette */}
            <svg
              className="absolute inset-0 w-full h-full opacity-65 pointer-events-none"
              viewBox="0 0 1000 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 280 180 Q 320 140 370 170 Q 420 160 450 210 Q 430 280 390 320 Q 360 420 330 460 Q 300 380 270 320 Q 250 250 280 180 Z"
                fill="#FAFBFD"
                stroke="#CBD5E1"
                strokeWidth="1.5"
              />
              <path
                d="M 120 120 Q 220 90 280 140 Q 260 220 200 240 Q 130 200 120 120 Z"
                fill="#FAFBFD"
                stroke="#CBD5E1"
                strokeWidth="1.5"
              />
              <path
                d="M 520 160 Q 640 120 720 180 Q 750 260 680 340 Q 580 320 520 260 Z"
                fill="#FAFBFD"
                stroke="#CBD5E1"
                strokeWidth="1.5"
              />
            </svg>

            {/* Pin dots */}
            {[
              { x: '35%', y: '40%', city: LIVE_CITIES[3] }, // Delhi
              { x: '32%', y: '48%', city: LIVE_CITIES[0] }, // Ahmedabad
              { x: '33%', y: '56%', city: LIVE_CITIES[1] }, // Mumbai
              { x: '37%', y: '68%', city: LIVE_CITIES[2] }, // Bengaluru
              { x: '38%', y: '58%', city: LIVE_CITIES[5] }, // Hyderabad
              { x: '34%', y: '59%', city: LIVE_CITIES[4] }, // Pune
              { x: '31%', y: '50%', city: LIVE_CITIES[6] }, // Surat
              { x: '33%', y: '49%', city: LIVE_CITIES[7] }, // Vadodara
              { x: '30%', y: '49%', city: LIVE_CITIES[8] }, // Rajkot
              { x: '29%', y: '32%', city: LIVE_CITIES[9] }, // Dubai
              { x: '24%', y: '26%', city: LIVE_CITIES[10] }, // London
              { x: '68%', y: '62%', city: LIVE_CITIES[11] }, // Singapore
            ].map((pin, i) => {
              const isSelected = selectedCity.name === pin.city.name
              return (
                <button
                  key={i}
                  style={{ left: pin.x, top: pin.y }}
                  onClick={() => setSelectedCity(pin.city)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group z-10 focus:outline-none cursor-pointer"
                >
                  <span className="relative flex h-6 w-6 items-center justify-center">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isSelected ? 'bg-rose-400' : 'bg-blue-400'}`} />
                    <span className={`relative inline-flex rounded-full h-3.5 w-3.5 border-2 border-white shadow-md ${isSelected ? 'bg-[#E11D48] scale-125' : 'bg-[#0062D2]'}`} />
                  </span>
                  <span className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/90 border border-slate-200 shadow-sm text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {pin.city.name}
                  </span>
                </button>
              )
            })}

            {/* Selected City Detail Card Overlay */}
            <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-80 sm:w-96 rounded-3xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-2xl p-5 z-20 space-y-4">
              <div className="relative h-32 w-full rounded-2xl overflow-hidden">
                <Image
                  src={selectedCity.image}
                  alt={selectedCity.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-sky-300">
                    Live Chapter
                  </span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-serif font-bold text-slate-900">
                    {selectedCity.name}
                  </h3>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {selectedCity.status}
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  {selectedCity.state}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 py-2 border-y border-slate-200 text-center">
                <div className="p-2 rounded-xl bg-slate-50">
                  <span className="block text-base font-bold text-slate-900">
                    {selectedCity.circles} Active Circles
                  </span>
                  <span className="text-[10px] text-slate-500">Live Chapters</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-50">
                  <span className="block text-base font-bold text-slate-900">
                    {selectedCity.members}+ Peers
                  </span>
                  <span className="text-[10px] text-slate-500">In City</span>
                </div>
              </div>

              {selectedCity.nextMeetingDate && (
                <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center gap-2.5 text-xs text-slate-700">
                  <Calendar className="size-4 text-[#0062D2] shrink-0" />
                  <span><strong>Rhythm:</strong> {selectedCity.nextMeetingDate}</span>
                </div>
              )}

              <Link
                href={`/circles?city=${encodeURIComponent(selectedCity.name)}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-xs sm:text-sm font-bold hover:opacity-95 transition-opacity uppercase tracking-wider shadow-sm"
              >
                <span>Explore {selectedCity.name} Circles</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: FIND YOUR CITY (CITY DIRECTORY WITH LIVE DATA PRINCIPLES)
          ========================================================================= */}
      <section className="py-16 sm:py-24 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  CITY DIRECTORY
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
                Find Your City
              </h2>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                A community becomes real when you can see where its people gather. Explore the cities where Peers Global Circles are active.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#F0F7FF] border border-[#DCEBFE] text-xs text-slate-700 max-w-md">
              <strong>Data Accuracy Rule:</strong> The city directory reflects the same live data as the map. If a city has no live Circle, it is not presented as though one is already operating there.
            </div>
          </div>

          {/* Directory Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredCities.map((city) => (
              <div
                key={city.name}
                onClick={() => {
                  setSelectedCity(city)
                  const el = document.getElementById('explore-map')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group p-5 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 hover:border-[#0062D2]/50 shadow-2xs hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold text-[#0062D2] bg-blue-50 px-2.5 py-0.5 rounded-full">
                      {city.circles} Live Circles
                    </span>
                    <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>

                  <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-[#0062D2] transition-colors">
                    {city.name}
                  </h3>
                  <p className="text-xs text-slate-500">{city.state}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/80 flex items-center justify-between text-xs">
                  <span className="text-slate-600 font-medium">{city.members}+ Active Members</span>
                  <span className="text-[#0062D2] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center">
                    <ArrowRight className="size-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: FROM CITY TO REGION & VISIBLE RESPONSIBILITY
          ========================================================================= */}
      <section className="py-16 sm:py-24 border-b border-slate-200 bg-[#FAFBFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 mb-1">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  GEOGRAPHY &amp; ACCOUNTABILITY
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight leading-tight">
                <span className="brand-gradient-text">From City to Region</span>
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Circles connect entrepreneurs locally. The wider structure helps those local relationships connect across a larger geography.
              </p>

              <div className="p-6 rounded-3xl bg-white border border-slate-200 space-y-3">
                <h3 className="font-serif text-xl font-bold text-slate-900">
                  Districts and Regions
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Explore the districts and regions represented in the community, along with their respective Executive Directors.
                </p>
                <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed pt-1">
                  The purpose is not to make geography feel like a hierarchy. It is to make responsibility visible—so entrepreneurs can understand how local Circles connect to the wider Peers Global community.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/the-territory"
                  className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-6 py-3 text-xs font-semibold inline-flex items-center gap-2 shadow-sm"
                >
                  <span>Explore the Territory</span>
                  <ArrowRight className="size-3.5" />
                </Link>
                <Link
                  href="/leadership"
                  className="rounded-full border border-slate-300 hover:border-slate-400 bg-white text-slate-800 px-6 py-3 text-xs font-semibold shadow-2xs"
                >
                  <span>See Executive Directors</span>
                </Link>
              </div>
            </div>

            {/* Right Card: Local to Global (5 cols) */}
            <div className="lg:col-span-5">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#040F24] text-white space-y-6 shadow-xl relative overflow-hidden">
                <div className="absolute right-0 top-0 size-48 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-2">
                    <Globe className="size-5 text-sky-300" />
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-300">
                      LOCAL TO GLOBAL
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white leading-tight">
                    How the Connection Scales
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    A Circle may begin with a handful of entrepreneurs in one city. But the relationships formed there need not remain limited to that city.
                  </p>

                  <div className="p-4 rounded-2xl bg-white/10 border border-white/15 text-xs font-bold text-white tracking-wide space-y-1.5">
                    <div>Circle → City → District → State → Country → Global</div>
                  </div>

                  <div className="space-y-2 text-xs text-slate-300 pt-1">
                    <div className="flex items-start gap-2">
                      <Check className="size-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>A lesson learned in one Circle may help an entrepreneur in another city.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="size-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>An introduction made locally may open a conversation across a region.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="size-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>A shared ambition may connect Peers who have never met in person.</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10">
                    <p className="text-xs text-sky-200 font-semibold italic">
                      The geography expands. The purpose remains the same: Entrepreneurs helping entrepreneurs grow.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: NOT ON THE MAP YET?
          ========================================================================= */}
      <section className="py-16 sm:py-24 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#F0F7FF] via-white to-[#FAFBFD] border border-[#DCEBFE] shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    EXPAND THE HORIZON
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
                  Not on the Map Yet?
                </h2>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl">
                  Perhaps your city is not represented. Perhaps your industry or purpose does not yet have a Circle nearby. That does not mean your interest has nowhere to go. It may mean the next conversation has not happened yet.
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                  You can tell us where you are, what you do and what kind of Circle you would like to see. If you are ready to help bring entrepreneurs together, you can also explore the possibility of starting a Circle.
                </p>

                <div className="p-3.5 rounded-2xl bg-white border border-blue-200 text-xs font-bold text-[#0062D2] inline-block">
                  A community grows because someone is willing to begin.
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <Link
                  href="/bring-to-my-city"
                  className="rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-center shadow-md hover:opacity-95 transition-opacity"
                >
                  Bring a Circle to My City
                </Link>
                <Link
                  href="/start-a-circle"
                  className="rounded-full border border-slate-300 hover:border-slate-400 bg-white text-slate-800 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-center shadow-2xs hover:bg-slate-50 transition-colors"
                >
                  Start a Circle
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: CLOSING BANNER (FIND YOUR CIRCLE)
          ========================================================================= */}
      <section className="relative isolate overflow-hidden bg-[#040F24] py-16 sm:py-20 lg:py-24 text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(0,98,210,0.25),transparent_42%),radial-gradient(circle_at_82%_12%,rgba(56,189,248,0.18),transparent_36%),linear-gradient(115deg,#020817_0%,#071a3d_48%,#06132d_100%)]"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 flex flex-col items-start space-y-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  THE MAP
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-normal leading-[1.18] tracking-tight text-white">
                <span className="brand-gradient-text">Every pin is a live Circle with a scheduled meeting.</span>
              </h2>

              <p className="text-base sm:text-lg font-medium text-slate-200 max-w-xl">
                A view of where the community is today—and where relationships may take it next.
              </p>

              <div className="text-xs text-sky-300 tracking-wider font-semibold">
                Explore the map. Discover the community. Find where you may belong.
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/circles/find"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-white shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] uppercase cursor-pointer"
                >
                  <span>Find Your Circle</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/start-a-circle"
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/50 px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-white backdrop-blur-xs transition-all duration-200 hover:bg-white/10 hover:border-white active:scale-[0.98] uppercase cursor-pointer"
                >
                  <span>Start a Circle</span>
                </Link>
              </div>

              <div className="pt-2 text-xs text-slate-400">
                Designed in Bharat. Connecting local rooms to global opportunities.
              </div>
            </div>

            <div className="lg:col-span-4 text-right flex justify-end">
              <div
                className="text-white/95 text-3xl sm:text-5xl font-normal leading-tight select-none pointer-events-none drop-shadow-sm"
                style={{ fontFamily: 'var(--font-script, Georgia, serif)' }}
              >
                Where <br />
                We Are <br />
                <span className="text-[#7DD3FC]">Right Now</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

