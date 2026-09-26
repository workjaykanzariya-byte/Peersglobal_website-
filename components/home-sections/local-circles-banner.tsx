'use client'

import React from 'react'
import Image from 'next/image'

// All 40 extracted brand partners with gradient treatment
const BRANDS_ROW_1 = [
  { name: 'IDBI Bank', src: '/images/brands/idbi_bank.png' },
  { name: 'DevX', src: '/images/brands/devx.png' },
  { name: 'Shivalik Real Estate Fund', src: '/images/brands/shivalik_fund.png' },
  { name: 'Navitas Solar', src: '/images/brands/navitas_solar.png' },
  { name: 'Waacab Cables', src: '/images/brands/waacab.png' },
  { name: 'RupeeBoss', src: '/images/brands/rupeeboss.png' },
  { name: 'Luxury Wellness', src: '/images/brands/luxury_wellness.png' },
  { name: 'Zybra Cloud Accounting', src: '/images/brands/zybra.png' },
  { name: 'Savvy Civic Aarya', src: '/images/brands/savvy_civic_aarya.png' },
  { name: 'Campus Jobs', src: '/images/brands/campus_jobs.png' },
  { name: 'Body Tales', src: '/images/brands/body_tales.png' },
  { name: 'Wide Reach Media', src: '/images/brands/wide_reach.png' },
  { name: 'Nature Coat', src: '/images/brands/nature_coat.png' },
  { name: 'Agrotis Technologies', src: '/images/brands/agrotis_tech.png' },
  { name: 'All About Architecture', src: '/images/brands/all_about_architecture.png' },
  { name: 'Inside Building Solutions', src: '/images/brands/inside_building_solutions.png' },
  { name: 'Concepts Green', src: '/images/brands/concepts_green.png' },
  { name: 'We Protect Environment', src: '/images/brands/we_protect_environment.png' },
  { name: '3R Zero Waste', src: '/images/brands/zero_waste_3r.png' },
  { name: 'Medercial Healthcare', src: '/images/brands/medercial_one.png' },
]

const BRANDS_ROW_2 = [
  { name: 'Alpha Star Capital', src: '/images/brands/alpha_star.png' },
  { name: 'Apex Ventures', src: '/images/brands/apex_venture.png' },
  { name: 'Beacon Media', src: '/images/brands/beacon_media.png' },
  { name: 'Crest Holdings', src: '/images/brands/crest_holdings.png' },
  { name: 'Dynamo Link', src: '/images/brands/dynamo_link.png' },
  { name: 'Emblem Group', src: '/images/brands/emblem_group.png' },
  { name: 'Glam Greens', src: '/images/brands/glam_greens.png' },
  { name: 'Horizon Link', src: '/images/brands/horizon_link.png' },
  { name: 'Matrix Global', src: '/images/brands/matrix_global.png' },
  { name: 'Nova Tech Systems', src: '/images/brands/nova_tech.png' },
  { name: 'Omni Corridor', src: '/images/brands/omni_corridor.png' },
  { name: 'Phoenix Circle', src: '/images/brands/phoenix_circle.png' },
  { name: 'Prime Corridor', src: '/images/brands/prime_corridor.png' },
  { name: 'Pulse Ventures', src: '/images/brands/pulse_ventures.png' },
  { name: 'Shield Capital', src: '/images/brands/shield_capital.png' },
  { name: 'Sol Energy', src: '/images/brands/sol_energy.png' },
  { name: 'Strata Global', src: '/images/brands/strata_global.png' },
  { name: 'Summit Partners', src: '/images/brands/summit_partners.png' },
  { name: 'Vanguard Hub', src: '/images/brands/vanguard_hub.png' },
  { name: 'Zenith Capital', src: '/images/brands/zenith_capital.png' },
]

export function LocalCirclesBanner() {
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
