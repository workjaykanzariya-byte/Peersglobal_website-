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
    <section className="relative w-full overflow-hidden bg-[#030914] text-white border-y border-white/10 py-8 sm:py-10 select-none">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-blue-600/15 via-indigo-600/10 to-transparent blur-[120px] rounded-full" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-l from-rose-600/15 via-pink-600/10 to-transparent blur-[120px] rounded-full" />
      </div>

      {/* Continuous Marquee Slider Wrapper */}
      <div className="relative w-full overflow-hidden flex flex-col gap-4 sm:gap-5">
        {/* Left & Right Gradient Fade Masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-44 bg-gradient-to-r from-[#030914] via-[#030914]/80 to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-44 bg-gradient-to-l from-[#030914] via-[#030914]/80 to-transparent z-20" />

        {/* Marquee Row 1 (Moving Right to Left) */}
        <div className="flex w-max animate-brands-marquee">
          {[...BRANDS_ROW_1, ...BRANDS_ROW_1].map((brand, idx) => (
            <div
              key={`row1-${brand.name}-${idx}`}
              className="mx-2 sm:mx-3 shrink-0 h-16 sm:h-20 px-6 sm:px-8 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/25 backdrop-blur-md flex items-center justify-center transition-all duration-300 group shadow-sm hover:shadow-[0_8px_24px_rgba(29,78,216,0.15)]"
            >
              <div className="relative h-9 sm:h-11 w-32 sm:w-40 flex items-center justify-center">
                <Image
                  src={brand.src}
                  alt={brand.name}
                  fill
                  sizes="(max-width: 768px) 130px, 160px"
                  className="object-contain filter drop-shadow-[0_2px_8px_rgba(29,78,216,0.35)] group-hover:scale-105 group-hover:brightness-110 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Marquee Row 2 (Moving Right to Left, slight offset speed for organic multi-tier look) */}
        <div className="flex w-max animate-brands-marquee-slow">
          {[...BRANDS_ROW_2, ...BRANDS_ROW_2].map((brand, idx) => (
            <div
              key={`row2-${brand.name}-${idx}`}
              className="mx-2 sm:mx-3 shrink-0 h-16 sm:h-20 px-6 sm:px-8 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/25 backdrop-blur-md flex items-center justify-center transition-all duration-300 group shadow-sm hover:shadow-[0_8px_24px_rgba(225,29,72,0.15)]"
            >
              <div className="relative h-9 sm:h-11 w-32 sm:w-40 flex items-center justify-center">
                <Image
                  src={brand.src}
                  alt={brand.name}
                  fill
                  sizes="(max-width: 768px) 130px, 160px"
                  className="object-contain filter drop-shadow-[0_2px_8px_rgba(225,29,72,0.35)] group-hover:scale-105 group-hover:brightness-110 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
