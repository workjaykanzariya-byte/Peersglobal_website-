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
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#EFF6FF] selection:text-[#0062D2] antialiased">
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-slate-200/80 bg-slate-50/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-slate-600 font-medium">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/the-territory" className="hover:text-slate-900 transition-colors">
            The Territory
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">Districts & Regions</span>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative pt-12 pb-14 md:pt-16 md:pb-20 border-b border-slate-200 bg-gradient-to-b from-white via-[#F6F9FD] to-[#EDF3FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                OUR TERRITORY
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-slate-900 tracking-tight leading-[1.08] font-bold">
                Districts & Regions
              </h1>
              <p className="text-xl font-serif text-slate-700 italic">
                Stronger together.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Cities form regions. Regions create greater opportunities. Explore our regional structure and the cities within each region.
              </p>
            </div>

            <div className="text-right hidden lg:block">
              <span className="text-base font-serif italic text-slate-700 block">
                Local Strength. Regional Collaboration. National Impact.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Why Regions Exist ─── */}
      <section className="py-12 md:py-16 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                <Compass className="w-4 h-4" />
                Economic Reality
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 font-bold">
                Why regions exist
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                Business does not respect city limits.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                A Peer sells into three cities, sources from a fourth, and hires from a fifth. Districts and regions exist so the community works the way business already does. When Circles in neighbouring cities link together, they unlock cross-territory supply chains, shared vendor pools, and large-scale joint venture capacity.
              </p>
            </div>

            <div className="lg:col-span-4 p-6 rounded-3xl bg-[#FAFBFD] border border-slate-200 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0062D2] block">
                The Regional Advantage
              </span>
              <ul className="space-y-2 text-xs text-slate-700">
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
      <section className="py-16 md:py-24 border-b border-slate-200 bg-[#FAFBFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header & Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                Our Regions
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 font-bold">
                Five regions. One growing community.
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('india')}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeTab === 'india'
                    ? 'bg-[#0062D2] text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                India (5 Regions)
              </button>
              <button
                onClick={() => setActiveTab('international')}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeTab === 'international'
                    ? 'bg-[#0062D2] text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
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
                className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-7 flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className={`w-3 h-3 rounded-full ${region.color}`} />
                      <h3 className="text-xl font-serif font-bold text-slate-900">
                        {region.name}
                      </h3>
                    </div>
                    <span className="text-[11px] font-bold text-[#0062D2] bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full">
                      {region.circlesCount} Circles
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {region.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                      Key Cities ({region.citiesCount})
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {region.citiesList.map((city) => (
                        <span
                          key={city}
                          className="px-2 py-0.5 rounded-md bg-[#FAFBFD] border border-slate-200 text-[11px] text-slate-700"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] uppercase text-slate-400 block">Leadership</span>
                    <span className="font-semibold text-slate-800">{region.executiveDirector}</span>
                  </div>
                  <Link
                    href="/leadership/executive-director"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0062D2] hover:text-[#1a42c0]"
                  >
                    Details <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}

            {/* Quote / Narrative Card */}
            <div className="rounded-3xl bg-gradient-to-br from-[#070D18] via-[#0B1528] to-[#0A101D] border border-slate-700/60 p-8 flex flex-col justify-center items-center text-center space-y-4">
              <span className="text-4xl text-cyan-400 font-serif leading-none">&ldquo;</span>
              <p className="text-base sm:text-lg font-serif italic text-white/90 leading-relaxed">
                A stronger region creates more opportunities for every entrepreneur within it.
              </p>
              <span className="text-xs font-bold text-cyan-400 tracking-wide uppercase">
                — Peers Global
              </span>
              <div className="pt-2">
                <Link
                  href="/the-territory"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0062D2] text-white text-xs font-semibold hover:bg-[#1a42c0] transition-colors shadow-sm uppercase tracking-wider"
                >
                  See the Territory
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Closing Banner ─── */}
      <section className="relative isolate overflow-hidden bg-[#040F24] text-white py-24 md:py-32">
        {/* Deep celestial radial gradients & luminous aura */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(0,98,210,0.25),transparent_42%),radial-gradient(circle_at_82%_12%,rgba(56,189,248,0.18),transparent_36%),linear-gradient(115deg,#020817_0%,#071a3d_48%,#06132d_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-blue-600/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-sky-400/15 blur-3xl"
        />

        {/* SVG Orbital Geometric Lines Background */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-[min(58vw,760px)] opacity-35">
          <svg viewBox="0 0 760 520" fill="none" className="h-full w-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M760 40C555 45 405 145 375 310C355 423 265 493 70 520" stroke="currentColor" strokeWidth="1" className="text-blue-300/30" />
            <path d="M760 120C590 125 470 205 445 335C424 442 335 500 180 520" stroke="currentColor" strokeWidth="1" strokeDasharray="5 8" className="text-sky-200/25" />
            <path d="M760 215C640 220 565 278 540 370C519 446 470 490 390 520" stroke="currentColor" strokeWidth="1" className="text-blue-200/20" />
            <circle cx="540" cy="370" r="4" fill="currentColor" className="text-sky-300/60" />
            <circle cx="540" cy="370" r="13" stroke="currentColor" strokeWidth="1" className="text-sky-300/25" />
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
