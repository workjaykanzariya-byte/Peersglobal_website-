'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  MapPin,
  Users,
  Search,
  Grid,
  List,
  Calendar,
  Building2,
  Filter,
} from 'lucide-react'

interface CityData {
  id: string
  name: string
  state: string
  circlesCount: number
  peersCount: number
  nextMeeting: string
  circleType: 'General' | 'Industry' | 'Cross-Border'
  image: string
}

const CITIES: CityData[] = [
  {
    id: 'ahmedabad',
    name: 'Ahmedabad',
    state: 'Gujarat',
    circlesCount: 5,
    peersCount: 320,
    nextMeeting: '12 Oct 2026',
    circleType: 'Industry',
    image: '/images/who-we-are-boardroom.jpg',
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    circlesCount: 4,
    peersCount: 260,
    nextMeeting: '14 Oct 2026',
    circleType: 'Cross-Border',
    image: '/images/culture-hero-desk.jpg',
  },
  {
    id: 'bengaluru',
    name: 'Bengaluru',
    state: 'Karnataka',
    circlesCount: 3,
    peersCount: 210,
    nextMeeting: '18 Oct 2026',
    circleType: 'General',
    image: '/images/lexicon-open-book.jpg',
  },
  {
    id: 'delhi',
    name: 'Delhi NCR',
    state: 'Delhi',
    circlesCount: 3,
    peersCount: 180,
    nextMeeting: '20 Oct 2026',
    circleType: 'Industry',
    image: '/images/founder-earth-showcase.jpg',
  },
  {
    id: 'surat',
    name: 'Surat',
    state: 'Gujarat',
    circlesCount: 2,
    peersCount: 120,
    nextMeeting: '22 Oct 2026',
    circleType: 'General',
    image: '/images/who-we-are-inner-board.jpg',
  },
  {
    id: 'pune',
    name: 'Pune',
    state: 'Maharashtra',
    circlesCount: 2,
    peersCount: 110,
    nextMeeting: '24 Oct 2026',
    circleType: 'General',
    image: '/images/who-we-are-friends.jpg',
  },
  {
    id: 'vadodara',
    name: 'Vadodara',
    state: 'Gujarat',
    circlesCount: 1,
    peersCount: 80,
    nextMeeting: '28 Oct 2026',
    circleType: 'Industry',
    image: '/images/who-we-are-boardroom.jpg',
  },
  {
    id: 'rajkot',
    name: 'Rajkot',
    state: 'Gujarat',
    circlesCount: 1,
    peersCount: 60,
    nextMeeting: '02 Nov 2026',
    circleType: 'General',
    image: '/images/culture-hero-desk.jpg',
  },
  {
    id: 'indore',
    name: 'Indore',
    state: 'Madhya Pradesh',
    circlesCount: 1,
    peersCount: 50,
    nextMeeting: '05 Nov 2026',
    circleType: 'General',
    image: '/images/founder-earth-showcase.jpg',
  },
  {
    id: 'morbi',
    name: 'Morbi',
    state: 'Gujarat',
    circlesCount: 1,
    peersCount: 45,
    nextMeeting: '08 Nov 2026',
    circleType: 'Industry',
    image: '/images/who-we-are-inner-board.jpg',
  },
  {
    id: 'mundra',
    name: 'Mundra',
    state: 'Gujarat',
    circlesCount: 1,
    peersCount: 40,
    nextMeeting: '11 Nov 2026',
    circleType: 'Cross-Border',
    image: '/images/who-we-are-friends.jpg',
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    state: 'Telangana',
    circlesCount: 1,
    peersCount: 35,
    nextMeeting: 'Launch Dec 2026',
    circleType: 'General',
    image: '/images/lexicon-open-book.jpg',
  },
]

export function CitiesClient() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedState, setSelectedState] = useState('All')
  const [selectedType, setSelectedType] = useState('All')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const filteredCities = CITIES.filter((city) => {
    const matchesSearch =
      city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      city.state.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesState = selectedState === 'All' || city.state === selectedState
    const matchesType = selectedType === 'All' || city.circleType === selectedType
    return matchesSearch && matchesState && matchesType
  })

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] font-sans selection:bg-[#E8DDD0] selection:text-[#1A1A1A]">
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-[#EADFC7]/50 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-neutral-500 font-medium">
          <Link href="/" className="hover:text-neutral-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <Link href="/map" className="hover:text-neutral-900 transition-colors">
            The Territory
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span className="text-neutral-900 font-semibold">Cities</span>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative pt-12 pb-14 md:pt-16 md:pb-18 border-b border-[#EADFC7]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8C6422]">
                OUR CITIES
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#1A1A1A] tracking-tight leading-[1.08]">
                Cities
              </h1>
              <p className="text-xl font-serif text-[#5B4834] italic">
                Local rooms. A global community.
              </p>
              <p className="text-sm sm:text-base text-neutral-600">
                Find a Circle in your city. Meet entrepreneurs who think like you, work like you, and want to grow together.
              </p>
            </div>

            <div className="text-right hidden lg:block">
              <span className="text-base font-serif italic text-[#8C6422] block">
                Same Spirit. Different Cities. One Community.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Filter & Search Bar ─── */}
      <section className="py-8 border-b border-[#EADFC7]/60 bg-white sticky top-0 z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search city (e.g. Ahmedabad)"
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-[#E8DFC9] bg-[#FDFBF7] text-xs focus:outline-none focus:border-[#8C6422]"
              />
            </div>

            {/* Filter Dropdowns & View Toggle */}
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-between md:justify-end">
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="text-xs rounded-xl border border-[#E8DFC9] bg-[#FDFBF7] px-3 py-2 text-neutral-700 focus:outline-none focus:border-[#8C6422]"
              >
                <option value="All">All States</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Delhi">Delhi</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Telangana">Telangana</option>
              </select>

              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="text-xs rounded-xl border border-[#E8DFC9] bg-[#FDFBF7] px-3 py-2 text-neutral-700 focus:outline-none focus:border-[#8C6422]"
              >
                <option value="All">All Circle Types</option>
                <option value="General">General Circles</option>
                <option value="Industry">Industry Circles</option>
                <option value="Cross-Border">Cross-Border Circles</option>
              </select>

              <div className="flex items-center border border-[#E8DFC9] rounded-xl overflow-hidden bg-[#FDFBF7]">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 transition-colors ${
                    viewMode === 'grid' ? 'bg-[#1A1A1A] text-white' : 'text-neutral-600 hover:bg-neutral-100'
                  }`}
                  aria-label="Grid view"
                >
                  <Grid className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 transition-colors ${
                    viewMode === 'list' ? 'bg-[#1A1A1A] text-white' : 'text-neutral-600 hover:bg-neutral-100'
                  }`}
                  aria-label="List view"
                >
                  <List className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-neutral-500 pt-1">
            <span>Showing {filteredCities.length} cities</span>
            <Link href="/circles/find" className="font-semibold text-[#0D6EFD] hover:underline">
              Find Your Circle by Industry →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Cities Directory ─── */}
      <section className="py-12 md:py-16 border-b border-[#EADFC7]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCities.map((city) => (
                <div
                  key={city.id}
                  className="rounded-3xl bg-white border border-[#E8DFC9] overflow-hidden hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="relative h-44 w-full bg-neutral-900">
                    <Image
                      src={city.image}
                      alt={city.name}
                      fill
                      className="object-cover opacity-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                      <div>
                        <span className="text-[11px] uppercase tracking-wider text-amber-300 font-semibold block">
                          {city.state}
                        </span>
                        <h3 className="text-2xl font-serif font-bold text-white leading-tight">
                          {city.name}
                        </h3>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-xs text-[10px] font-bold text-white">
                        {city.circleType}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-2 text-xs py-1 border-b border-neutral-100">
                      <div>
                        <span className="text-neutral-400 block text-[10px] uppercase font-semibold">Circles</span>
                        <span className="font-serif font-bold text-sm text-neutral-900">{city.circlesCount} Active</span>
                      </div>
                      <div>
                        <span className="text-neutral-400 block text-[10px] uppercase font-semibold">Peers</span>
                        <span className="font-serif font-bold text-sm text-neutral-900">{city.peersCount}+ Members</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs pt-1">
                      <div className="flex items-center gap-1.5 text-neutral-600">
                        <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                        <span>Next: {city.nextMeeting}</span>
                      </div>
                      <Link
                        href="/circles"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#0D6EFD] hover:text-blue-700"
                      >
                        View <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {filteredCities.map((city) => (
                <div
                  key={city.id}
                  className="p-5 rounded-2xl bg-white border border-[#E8DFC9] flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-xs transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-[#8C6422]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-serif font-bold text-neutral-900">{city.name}</h4>
                      <span className="text-xs text-neutral-500">{city.state} · {city.circleType}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-xs">
                    <div>
                      <span className="text-neutral-400 block text-[10px]">Circles</span>
                      <span className="font-bold text-neutral-900">{city.circlesCount} Active</span>
                    </div>
                    <div>
                      <span className="text-neutral-400 block text-[10px]">Peers</span>
                      <span className="font-bold text-neutral-900">{city.peersCount}+</span>
                    </div>
                    <div>
                      <span className="text-neutral-400 block text-[10px]">Meeting</span>
                      <span className="font-bold text-neutral-900">{city.nextMeeting}</span>
                    </div>
                    <Link
                      href="/circles"
                      className="px-4 py-2 rounded-full bg-[#1A1A1A] text-white text-xs font-semibold hover:bg-neutral-800"
                    >
                      Explore
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Don't see your city callout */}
          <div className="p-8 rounded-3xl bg-[#FAF5EB] border border-[#EADBBD] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="space-y-1">
              <h3 className="text-xl font-serif font-bold text-neutral-900">
                Don&apos;t see your city?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 max-w-lg">
                Help us bring Peers Global to your city. Register your interest and join our upcoming territorial launch index.
              </p>
            </div>
            <Link
              href="/bring-to-my-city"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0D6EFD] text-white text-xs font-bold hover:bg-blue-600 transition-colors uppercase tracking-wider shadow-sm whitespace-nowrap"
            >
              Register Interest
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Closing Banner ─── */}
      <section className="relative bg-[#0062D2] text-white py-24 md:py-32 overflow-hidden">
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

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight">
            Build Your Business. Build Your Relationships. Build Your Circle.
          </h2>

          <div className="pt-2">
            <Link
              href="/unity"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-[#0062D2] text-sm font-bold shadow-lg shadow-black/10 hover:shadow-xl uppercase tracking-wider transition-all"
            >
              Download Unity App
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
