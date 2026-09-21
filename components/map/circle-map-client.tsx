'use client'

import React, { useState } from 'react'
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
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  ChevronLeft,
  X,
} from 'lucide-react'

interface CityCardData {
  name: string
  state: string
  circles: number
  members: number
  image: string
  slug: string
}

const FEATURED_CITIES: CityCardData[] = [
  {
    name: 'Ahmedabad',
    state: 'Gujarat',
    circles: 5,
    members: 250,
    image: '/images/lsr-city-sunrise.jpg',
    slug: 'ahmedabad',
  },
  {
    name: 'Mumbai',
    state: 'Maharashtra',
    circles: 8,
    members: 400,
    image: '/images/territory/mumbai.jpg',
    slug: 'mumbai',
  },
  {
    name: 'Bengaluru',
    state: 'Karnataka',
    circles: 6,
    members: 320,
    image: '/images/territory/bengaluru.jpg',
    slug: 'bengaluru',
  },
  {
    name: 'Delhi',
    state: 'NCR',
    circles: 6,
    members: 290,
    image: '/images/territory/delhi.jpg',
    slug: 'delhi',
  },
  {
    name: 'Pune',
    state: 'Maharashtra',
    circles: 4,
    members: 200,
    image: '/images/territory/pune.jpg',
    slug: 'pune',
  },
  {
    name: 'Hyderabad',
    state: 'Telangana',
    circles: 4,
    members: 180,
    image: '/images/territory/hyderabad.jpg',
    slug: 'hyderabad',
  },
]

export function CircleMapClient() {
  const [activeTab, setActiveTab] = useState<'all' | 'india' | 'international'>('all')
  const [presenceTab, setPresenceTab] = useState<'cities' | 'states' | 'countries'>('cities')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCity, setSelectedCity] = useState({
    name: 'Ahmedabad',
    state: 'Gujarat, India',
    circles: 5,
    members: 250,
    status: 'Active',
    since: '2022',
  })

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#EFF6FF] selection:text-[#0062D2] antialiased">
      {/* ─── Breadcrumb ─── */}
      <div className="border-b border-slate-200/80 bg-slate-50/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-slate-600">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/map" className="hover:text-slate-900 transition-colors">
            Our World
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">The Map</span>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 border-b border-slate-200 bg-gradient-to-b from-white via-[#F6F9FD] to-[#EDF3FB] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                <span className="w-2 h-2 rounded-full bg-[#0062D2] animate-pulse" />
                OUR WORLD
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-slate-900 tracking-tight leading-[1.08] font-bold">
                The Map
              </h1>

              <p className="text-xl sm:text-2xl font-serif text-slate-700 font-medium leading-snug">
                Every Circle. Every City. Every Country.
              </p>

              <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
                Find where this community meets. Every pin is a live Circle with a scheduled meeting.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/circles"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0062D2] text-white text-sm font-bold hover:bg-[#1a42c0] transition-all shadow-md shadow-blue-500/20 uppercase tracking-wider"
                >
                  Find Your Circle
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Visual: Glowing Earth in Space with Calligraphy */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/60 bg-gradient-to-br from-[#070D18] via-[#0B1528] to-[#0A101D] group">
                <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                  <Image
                    src="/images/founder-earth-showcase.jpg"
                    alt="Peers Global Planetary Network"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-transparent to-[#070D18]/40" />

                  {/* Calligraphy Overlay */}
                  <div className="absolute bottom-6 right-6 z-10 text-right">
                    <p className="font-serif italic text-white/95 text-lg sm:text-xl drop-shadow-lg leading-tight">
                      Real People.
                      <br />
                      <span className="text-cyan-400 font-medium">Real Communities.</span>
                      <br />
                      A Global Movement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 5 Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-10 mt-10 border-t border-slate-200">
            {[
              { label: '75+', sub: 'Cities', icon: Building2 },
              { label: '10+', sub: 'Countries', icon: Globe },
              { label: '200+', sub: 'Circles', icon: Users },
              { label: '10,000+', sub: 'Entrepreneurs', icon: Sparkles },
              { label: '1 Million', sub: 'Lives to Impact', icon: Compass },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-slate-200 flex items-center gap-3.5 shadow-xs hover:border-slate-300 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 border border-blue-100">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-lg sm:text-xl font-serif font-bold text-slate-900 leading-tight">
                    {item.label}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {item.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Interactive Map & Search Section ─── */}
      <section className="py-10 border-b border-slate-200 bg-[#FAFBFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Controls Bar: Tabs + Search + Legend */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Filter Tabs */}
            <div className="inline-flex p-1 rounded-xl bg-slate-200/70 border border-slate-300/60">
              {(['all', 'india', 'international'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold capitalize transition-all ${
                    activeTab === tab
                      ? 'bg-[#0062D2] text-white shadow-sm'
                      : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  {tab === 'all' ? 'All' : tab === 'india' ? 'India' : 'International'}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search city, state or country..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0062D2] focus:ring-1 focus:ring-[#0062D2]"
              />
            </div>

            {/* Legend */}
            <div className="flex items-center gap-4 text-xs text-slate-600 shrink-0">
              <span className="inline-flex items-center gap-1.5 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0062D2]" />
                Active Circle
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                Coming Soon
              </span>
            </div>
          </div>

          {/* Map Graphic Container */}
          <div className="relative w-full h-[480px] sm:h-[540px] rounded-2xl bg-[#EAF2F8] border border-slate-200 overflow-hidden shadow-inner flex items-center justify-center">
            {/* Background Map Graphic / Ocean & Land styling */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#E2EDF8] via-[#D5E6F5] to-[#C9E0F3]" />

            {/* Stylized Vector Map representation */}
            <svg
              className="absolute inset-0 w-full h-full opacity-65"
              viewBox="0 0 1000 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Landmass silhouettes */}
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
              { x: '35%', y: '40%', name: 'Delhi', active: true },
              { x: '32%', y: '48%', name: 'Ahmedabad', active: true, selected: true },
              { x: '33%', y: '56%', name: 'Mumbai', active: true },
              { x: '37%', y: '68%', name: 'Bengaluru', active: true },
              { x: '38%', y: '58%', name: 'Hyderabad', active: true },
              { x: '46%', y: '46%', name: 'Kolkata', active: true },
              { x: '29%', y: '32%', name: 'Dubai', active: true },
              { x: '68%', y: '62%', name: 'Singapore', active: true },
              { x: '24%', y: '26%', name: 'London', active: true },
            ].map((pin, i) => (
              <button
                key={i}
                style={{ left: pin.x, top: pin.y }}
                onClick={() =>
                  setSelectedCity({
                    name: pin.name,
                    state: pin.name === 'Ahmedabad' ? 'Gujarat, India' : 'India Network',
                    circles: pin.name === 'Ahmedabad' ? 5 : pin.name === 'Mumbai' ? 8 : 4,
                    members: pin.name === 'Ahmedabad' ? 250 : pin.name === 'Mumbai' ? 400 : 180,
                    status: 'Active',
                    since: '2022',
                  })
                }
                className="absolute -translate-x-1/2 -translate-y-1/2 group z-10 focus:outline-none"
              >
                <span className="relative flex h-5 w-5 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0062D2] border-2 border-white shadow" />
                </span>
              </button>
            ))}

            {/* Interactive Selected City Card Modal (Ahmedabad) */}
            <div className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 w-80 sm:w-96 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-2xl p-5 z-20 space-y-4">
              <div className="relative h-32 w-full rounded-xl overflow-hidden">
                <Image
                  src="/images/lsr-city-sunrise.jpg"
                  alt={selectedCity.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <span className="text-xs uppercase tracking-wider font-semibold text-cyan-300">
                    Founding City
                  </span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-serif font-bold text-slate-900">
                    {selectedCity.name}
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {selectedCity.status}
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  {selectedCity.state}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 py-2 border-y border-slate-200 text-center">
                <div>
                  <span className="block text-lg font-serif font-bold text-slate-900">
                    {selectedCity.circles}
                  </span>
                  <span className="text-[11px] text-slate-500">Circles</span>
                </div>
                <div>
                  <span className="block text-lg font-serif font-bold text-slate-900">
                    {selectedCity.members}+
                  </span>
                  <span className="text-[11px] text-slate-500">Members</span>
                </div>
                <div>
                  <span className="block text-lg font-serif font-bold text-slate-900">
                    {selectedCity.since}
                  </span>
                  <span className="text-[11px] text-slate-500">Since</span>
                </div>
              </div>

              <Link
                href={`/circles?city=${selectedCity.name.toLowerCase()}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#0062D2] text-white text-xs sm:text-sm font-bold hover:bg-[#1a42c0] transition-colors uppercase tracking-wider"
              >
                View Circles
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Explore Our Presence Section ─── */}
      <section className="py-14 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                Explore our presence
              </h2>
              <div className="inline-flex p-1 rounded-xl bg-slate-200/70 border border-slate-300/60 mt-2">
                {(['cities', 'states', 'countries'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setPresenceTab(tab)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                      presenceTab === tab
                        ? 'bg-[#0062D2] text-white shadow-sm'
                        : 'text-slate-700 hover:text-slate-900'
                    }`}
                  >
                    {tab === 'states' ? 'States & Regions' : tab}
                  </button>
                ))}
              </div>
            </div>

            <Link
              href="/cities"
              className="text-[#0062D2] font-bold text-xs sm:text-sm hover:underline inline-flex items-center gap-1"
            >
              View All Cities <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* City Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {FEATURED_CITIES.map((city, idx) => (
              <Link
                key={idx}
                href={`/cities#${city.slug}`}
                className="group rounded-full bg-white border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col"
              >
                <div className="relative h-28 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={city.image}
                    alt={city.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 text-white">
                    <span className="text-xs font-serif font-bold block leading-none">
                      {city.name}
                    </span>
                    <span className="text-[10px] text-slate-300 block">
                      {city.state}
                    </span>
                  </div>
                </div>

                <div className="p-3 space-y-1 text-[11px] bg-[#FAFBFD]">
                  <div className="flex items-center justify-between text-slate-600">
                    <span>{city.circles} Circles</span>
                    <span className="font-bold text-slate-900">{city.members}+</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Dual Bottom Action Cards ─── */}
      <section className="py-12 border-b border-slate-200 bg-[#FAFBFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Card: Bring to City */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 border border-blue-100">
                <Users className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-serif font-bold text-slate-900">
                  Don&apos;t see your city?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Be the one to bring Peers Global to your city. Every city begins with one entrepreneur who wants it there.
                </p>
                <div>
                  <Link
                    href="/bring-to-my-city"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0062D2] text-white text-xs font-bold hover:bg-[#1a42c0] transition-all uppercase tracking-wider"
                  >
                    Register Your Interest
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Card: View by Country */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center shrink-0 border border-slate-200">
                <Globe className="w-6 h-6 text-[#0062D2]" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-serif font-bold text-slate-900">
                  View by country
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Peers Global is growing globally. Explore our international presence and connect with entrepreneurs in other countries.
                </p>
                <div>
                  <Link
                    href="/international"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 hover:bg-slate-100 transition-all uppercase tracking-wider"
                  >
                    View International
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Royal Blue Closing Banner ─── */}
      <section className="relative py-20 bg-[#0062D2] text-white overflow-hidden">
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center md:text-left max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                More Entrepreneurs. More Cities. A Stronger Tomorrow.
              </h2>
              <p className="text-sm sm:text-base text-white/90">
                Find a live Circle meeting near you or join online across our cross-border corridors.
              </p>
              <div className="pt-2">
                <Link
                  href="/circles"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#0062D2] hover:bg-slate-100 text-xs sm:text-sm font-bold transition-all uppercase tracking-wider shadow-lg"
                >
                  Find Your Circle
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Calligraphy Motto */}
            <div className="text-center md:text-right">
              <p className="font-serif italic text-white/90 text-xl sm:text-2xl leading-relaxed drop-shadow-md">
                Build Your Business.
                <br />
                Build Your Relationships.
                <br />
                <span className="text-amber-300">Build Your Circle.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
