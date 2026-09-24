'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, ArrowRight, Globe, Building } from 'lucide-react'

interface CityLocation {
  name: string
  href: string
  badge?: string
}

const REGIONAL_HUBS: Record<'india' | 'international', CityLocation[]> = {
  india: [
    { name: 'Mumbai', href: '/cities?city=mumbai' },
    { name: 'Bengaluru', href: '/cities?city=bengaluru' },
    { name: 'Delhi NCR', href: '/cities?city=delhi' },
    { name: 'Ahmedabad', href: '/cities?city=ahmedabad' },
    { name: 'Surat', href: '/cities?city=surat' },
    { name: 'Pune', href: '/cities?city=pune' },
    { name: 'Hyderabad', href: '/cities?city=hyderabad' },
    { name: 'Chennai', href: '/cities?city=chennai' },
    { name: 'Vadodara', href: '/cities?city=vadodara' },
    { name: 'Rajkot', href: '/cities?city=rajkot' },
  ],
  international: [
    { name: 'Dubai', href: '/cities?region=international' },
    { name: 'London', href: '/cities?region=international' },
    { name: 'Singapore', href: '/cities?region=international' },
    { name: 'New York', href: '/cities?region=international' },
    { name: 'Los Angeles', href: '/cities?region=international' },
    { name: 'Chicago', href: '/cities?region=international' },
    { name: 'Dallas', href: '/cities?region=international' },
    { name: 'Atlanta', href: '/cities?region=international' },
    { name: 'Washington D.C.', href: '/cities?region=international' },
  ],
}

export function LocalCirclesBanner() {
  const [activeTab, setActiveTab] = useState<'india' | 'international'>('india')
  const cities = REGIONAL_HUBS[activeTab]

  return (
    <section className="relative w-full overflow-hidden bg-[#030914] text-white border-y border-white/10 select-none">
      {/* Background Image: Aerial City Skyline at Night */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/cities-skyline-banner.jpg"
          alt="Aerial City Skyscrapers Night View"
          fill
          priority={false}
          className="object-cover object-center opacity-40 scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Deep Moody Navy Scrim / Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030914]/95 via-[#061226]/85 to-[#030914]/95" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030914]/70 via-transparent to-[#030914]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 flex flex-col items-center justify-center text-center">
        {/* Subtle pill badge or tab switcher */}
        <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 mb-4 shadow-inner">
          <button
            onClick={() => setActiveTab('india')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
              activeTab === 'india'
                ? 'bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white shadow-md shadow-blue-600/30 scale-105'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            India Hubs
          </button>
          <button
            onClick={() => setActiveTab('international')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
              activeTab === 'international'
                ? 'bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white shadow-md shadow-blue-600/30 scale-105'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Global &amp; U.S. Locations
          </button>
        </div>

        {/* Headline matching Vistage styling */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-white mb-6 font-sans">
          Local CEO Groups in Every Major Location
        </h2>

        {/* Cities Row with vertical dividers "|" matching exact Vistage design */}
        <div className="w-full flex items-center justify-center">
          <div className="flex flex-wrap items-center justify-center gap-y-2.5 text-sm sm:text-base font-normal tracking-wide text-slate-200">
            {cities.map((city, index) => (
              <React.Fragment key={city.name}>
                <span className="text-white/25 px-2.5 sm:px-3 font-light select-none">
                  |
                </span>
                <Link
                  href={city.href}
                  className="group inline-flex items-center gap-1 text-slate-100 hover:text-white transition-all duration-200 hover:scale-105 transform origin-center py-0.5"
                >
                  <span className="transition-all group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-rose-300 group-hover:drop-shadow-[0_0_12px_rgba(225,29,72,0.5)]">
                    {city.name}
                  </span>
                </Link>
                {index === cities.length - 1 && (
                  <span className="text-white/25 px-2.5 sm:px-3 font-light select-none">
                    |
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Footer link to view all cities */}
        <div className="mt-5 flex items-center gap-2 text-xs sm:text-sm text-slate-400">
          <span>Expanding to 60+ cities by 2030</span>
          <span className="text-white/20">•</span>
          <Link
            href="/cities"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all group"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-rose-400 group-hover:from-blue-300 group-hover:to-rose-300 font-semibold">
              Explore All Circles Directory
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-rose-400 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
