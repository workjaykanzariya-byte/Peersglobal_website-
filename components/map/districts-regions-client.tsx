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
  Layers,
  Building2,
  Globe2,
  CheckCircle2,
  Sparkles,
} from 'lucide-react'

interface RegionInfo {
  id: string
  name: string
  color: string
  accentBorder: string
  citiesCount: number
  circlesCount: number
  citiesList: string[]
  executiveDirector: string
  description: string
}

const REGIONS: RegionInfo[] = [
  {
    id: 'north',
    name: 'North Region',
    color: 'bg-blue-500',
    accentBorder: 'border-blue-200',
    citiesCount: 6,
    circlesCount: 12,
    citiesList: ['Delhi NCR', 'Gurugram', 'Noida', 'Jaipur', 'Chandigarh', 'Ludhiana'],
    executiveDirector: 'To be announced',
    description: 'Encompassing the national capital corridor, northern agro-processing, and consumer manufacturing corridors.',
  },
  {
    id: 'west',
    name: 'West Region',
    color: 'bg-amber-500',
    accentBorder: 'border-amber-200',
    citiesCount: 7,
    circlesCount: 18,
    citiesList: ['Ahmedabad', 'Mumbai', 'Surat', 'Pune', 'Vadodara', 'Rajkot', 'Morbi'],
    executiveDirector: 'To be announced',
    description: 'India’s industrial, commercial, and financial powerhouse — spanning textiles, engineering, chemicals, and ports.',
  },
  {
    id: 'central',
    name: 'Central Region',
    color: 'bg-emerald-500',
    accentBorder: 'border-emerald-200',
    citiesCount: 4,
    circlesCount: 10,
    citiesList: ['Indore', 'Bhopal', 'Nagpur', 'Raipur'],
    executiveDirector: 'To be announced',
    description: 'Strategic logistics heartland, pharmaceuticals manufacturing, and emerging software services hubs.',
  },
  {
    id: 'east',
    name: 'East Region',
    color: 'bg-purple-500',
    accentBorder: 'border-purple-200',
    citiesCount: 3,
    circlesCount: 6,
    citiesList: ['Kolkata', 'Bhubaneswar', 'Ranchi'],
    executiveDirector: 'To be announced',
    description: 'Heavy engineering, metallurgy, mineral processing, and regional maritime export gateways.',
  },
  {
    id: 'south',
    name: 'South Region',
    color: 'bg-rose-500',
    accentBorder: 'border-rose-200',
    citiesCount: 5,
    circlesCount: 14,
    citiesList: ['Bengaluru', 'Hyderabad', 'Chennai', 'Coimbatore', 'Kochi'],
    executiveDirector: 'To be announced',
    description: 'Deep tech, aerospace, precision automotive components, and IT enterprise export clusters.',
  },
]

export function DistrictsRegionsClient() {
  const [activeTab, setActiveTab] = useState<'india' | 'international'>('india')

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] font-sans selection:bg-[#E8DDD0] selection:text-[#1A1A1A]">
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-[#EADFC7]/50 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-neutral-500 font-medium">
          <Link href="/" className="hover:text-neutral-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <Link href="/the-territory" className="hover:text-neutral-900 transition-colors">
            The Territory
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span className="text-neutral-900 font-semibold">Districts & Regions</span>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative pt-12 pb-14 md:pt-16 md:pb-20 border-b border-[#EADFC7]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8C6422]">
                OUR TERRITORY
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#1A1A1A] tracking-tight leading-[1.08]">
                Districts & Regions
              </h1>
              <p className="text-xl font-serif text-[#5B4834] italic">
                Stronger together.
              </p>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                Cities form regions. Regions create greater opportunities. Explore our regional structure and the cities within each region.
              </p>
            </div>

            <div className="text-right hidden lg:block">
              <span className="text-base font-serif italic text-[#8C6422] block">
                Local Strength. Regional Collaboration. National Impact.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Why Regions Exist ─── */}
      <section className="py-12 md:py-16 border-b border-[#EADFC7]/60 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#8C6422]">
                <Compass className="w-4 h-4" />
                Economic Reality
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-neutral-900">
                Why regions exist
              </h2>
              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-medium">
                Business does not respect city limits.
              </p>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-3xl">
                A Peer sells into three cities, sources from a fourth, and hires from a fifth. Districts and regions exist so the community works the way business already does. When Circles in neighbouring cities link together, they unlock cross-territory supply chains, shared vendor pools, and large-scale joint venture capacity.
              </p>
            </div>

            <div className="lg:col-span-4 p-6 rounded-3xl bg-[#FAF5EB] border border-[#EADBBD] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8C6422] block">
                The Regional Advantage
              </span>
              <ul className="space-y-2 text-xs text-neutral-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Cross-city lead pipelines</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Regional buyer-seller conclaves</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Shared industrial infrastructure</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Executive Director mentorship</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Regional Breakdown ─── */}
      <section className="py-16 md:py-24 border-b border-[#EADFC7]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header & Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EADFC7]/60 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8C6422]">
                Our Regions
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-neutral-900">
                Five regions. One growing community.
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('india')}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeTab === 'india'
                    ? 'bg-[#1A1A1A] text-white shadow-sm'
                    : 'bg-white border border-[#E8DFC9] text-neutral-700 hover:bg-[#FAF5EB]'
                }`}
              >
                India (5 Regions)
              </button>
              <button
                onClick={() => setActiveTab('international')}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeTab === 'international'
                    ? 'bg-[#1A1A1A] text-white shadow-sm'
                    : 'bg-white border border-[#E8DFC9] text-neutral-700 hover:bg-[#FAF5EB]'
                }`}
              >
                International
              </button>
            </div>
          </div>

          {/* Region Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REGIONS.map((region) => (
              <div
                key={region.id}
                className="rounded-3xl bg-white border border-[#E8DFC9] p-6 sm:p-7 flex flex-col justify-between hover:shadow-md transition-all space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className={`w-3 h-3 rounded-full ${region.color}`} />
                      <h3 className="text-xl font-serif font-bold text-neutral-900">
                        {region.name}
                      </h3>
                    </div>
                    <span className="text-[11px] font-bold text-[#8C6422] bg-amber-50 border border-amber-200/60 px-2.5 py-0.5 rounded-full">
                      {region.circlesCount} Circles
                    </span>
                  </div>

                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {region.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-neutral-100">
                    <span className="text-[10px] uppercase font-bold text-neutral-400 block tracking-wider">
                      Key Cities ({region.citiesCount})
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {region.citiesList.map((city) => (
                        <span
                          key={city}
                          className="px-2 py-0.5 rounded-md bg-[#FAF7F0] border border-[#E8DFC9] text-[11px] text-neutral-700"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] uppercase text-neutral-400 block">Leadership</span>
                    <span className="font-semibold text-neutral-800">{region.executiveDirector}</span>
                  </div>
                  <Link
                    href="/leadership/executive-director"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0D6EFD] hover:text-blue-700"
                  >
                    Details <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}

            {/* Quote / Narrative Card */}
            <div className="rounded-3xl bg-[#FAF5EB] border border-[#EADBBD] p-8 flex flex-col justify-center items-center text-center space-y-4">
              <span className="text-4xl text-[#8C6422] font-serif leading-none">&ldquo;</span>
              <p className="text-base sm:text-lg font-serif italic text-[#5B4834] leading-relaxed">
                A stronger region creates more opportunities for every entrepreneur within it.
              </p>
              <span className="text-xs font-bold text-neutral-700 tracking-wide uppercase">
                — Peers Global
              </span>
              <div className="pt-2">
                <Link
                  href="/the-territory"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-[#D5C7B0] text-xs font-semibold text-neutral-800 hover:bg-neutral-100 transition-colors shadow-2xs"
                >
                  See the Territory
                  <ArrowRight className="w-3.5 h-3.5 text-[#8C6422]" />
                </Link>
              </div>
            </div>
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
