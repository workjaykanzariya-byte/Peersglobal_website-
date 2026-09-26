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
    <section className="relative w-full overflow-hidden bg-white text-slate-900 border-y border-slate-200 select-none py-12 sm:py-16">
      {/* Subtle brand gradient ambient glow */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-blue-50/50 via-white to-rose-50/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        {/* Pill tab switcher */}
        <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-slate-100 border border-slate-200 mb-6 shadow-inner">
          <button
            onClick={() => setActiveTab('india')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
              activeTab === 'india'
                ? 'bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white shadow-md scale-105'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            India Hubs
          </button>
          <button
            onClick={() => setActiveTab('international')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
              activeTab === 'international'
                ? 'bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white shadow-md scale-105'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Global &amp; U.S. Locations
          </button>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-tight text-slate-900 mb-6">
          Local CEO Groups in Every Major Location
        </h2>

        {/* Cities Row with vertical dividers "|" */}
        <div className="w-full flex items-center justify-center">
          <div className="flex flex-wrap items-center justify-center gap-y-2.5 text-sm sm:text-base font-medium tracking-wide text-slate-700">
            {cities.map((city, index) => (
              <React.Fragment key={city.name}>
                <span className="text-slate-300 px-2.5 sm:px-3 font-light select-none">
                  |
                </span>
                <Link
                  href={city.href}
                  className="group inline-flex items-center gap-1 text-slate-800 hover:text-[#1D4ED8] transition-all duration-200 hover:scale-105 transform origin-center py-0.5"
                >
                  <span className="transition-all group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] font-semibold">
                    {city.name}
                  </span>
                </Link>
                {index === cities.length - 1 && (
                  <span className="text-slate-300 px-2.5 sm:px-3 font-light select-none">
                    |
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Footer link to view all cities */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-500">
          <span>Expanding to 60+ cities by 2030</span>
          <span className="text-slate-300">•</span>
          <Link
            href="/cities"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white font-bold transition-all shadow-md hover:shadow-lg hover:opacity-95 group uppercase tracking-wider text-xs"
          >
            <span>Explore All Circles Directory</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
