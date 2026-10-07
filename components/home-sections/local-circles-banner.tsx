'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

// All 41 extracted Brand Partner logos directly from the presentation
const BRAND_PARTNERS_ROW_1 = [
  { name: 'IDBI Bank', src: '/images/brand-partners/idbi_bank.png' },
  { name: 'Navitas Solar', src: '/images/brand-partners/navitas_solar.png' },
  { name: 'RupeeBoss', src: '/images/brand-partners/rupeeboss.png' },
  { name: 'Waacab Cables', src: '/images/brand-partners/waacab.png' },
  { name: 'DevX', src: '/images/brand-partners/devx.png' },
  { name: 'Shivalik Real Estate Fund', src: '/images/brand-partners/shivalik_fund.png' },
  { name: 'SBI Life', src: '/images/brand-partners/sbi_life.png' },
  { name: 'Aerolam', src: '/images/brand-partners/aerolam.png' },
  { name: 'Xoxoday', src: '/images/brand-partners/xoxoday.png' },
  { name: 'Zybra Cloud Accounting', src: '/images/brand-partners/zybra.png' },
  { name: 'GUSEC', src: '/images/brand-partners/gusec.png' },
  { name: 'Sigma University', src: '/images/brand-partners/sigma_university.png' },
  { name: 'Concepts Green', src: '/images/brand-partners/concepts_green.png' },
  { name: 'Glam Greens', src: '/images/brand-partners/glam_greens.png' },
  { name: 'Savvy Civic Aarya', src: '/images/brand-partners/savvy_civic_aarya.png' },
  { name: 'The One Square Infra', src: '/images/brand-partners/the_one_square_infra.png' },
  { name: 'Fernweh Vacations', src: '/images/brand-partners/fernweh_vacations.png' },
  { name: "RB's Wellness Centre", src: '/images/brand-partners/rbs_wellness.png' },
  { name: 'Zodiac Gifts', src: '/images/brand-partners/zodiac_gifts.png' },
  { name: 'Time News', src: '/images/brand-partners/time_news.png' },
  { name: 'Soul Focus Production', src: '/images/brand-partners/soul_focus_production.png' },
]

const BRAND_PARTNERS_ROW_2 = [
  { name: 'Shaadi Vows', src: '/images/brand-partners/shaadi_vows.png' },
  { name: 'Triangle Infinity', src: '/images/brand-partners/triangle_infinity.png' },
  { name: 'Campus Jobs', src: '/images/brand-partners/campus_jobs.png' },
  { name: 'Nature Coat', src: '/images/brand-partners/nature_coat.png' },
  { name: 'Wide Reach Media', src: '/images/brand-partners/wide_reach.png' },
  { name: 'Prosmit', src: '/images/brand-partners/prosmit.png' },
  { name: 'TVM Communication', src: '/images/brand-partners/tvm_communication.png' },
  { name: 'Mentor MyBoard', src: '/images/brand-partners/mentor_myboard.png' },
  { name: 'eChai Ventures', src: '/images/brand-partners/echai.png' },
  { name: 'Wireframe Design', src: '/images/brand-partners/wireframe_design.png' },
  { name: 'Laja', src: '/images/brand-partners/laja.png' },
  { name: 'Abaj Lighting', src: '/images/brand-partners/abaj_lighting.png' },
  { name: 'We Protect Environment', src: '/images/brand-partners/we_protect_environment.png' },
  { name: 'Inside Building Solutions', src: '/images/brand-partners/inside_building_solutions.png' },
  { name: '3R Zero Waste', src: '/images/brand-partners/zero_waste_3r.png' },
  { name: 'Luxury Wellness', src: '/images/brand-partners/luxury_wellness.png' },
  { name: 'Agrotis Technologies', src: '/images/brand-partners/agrotis_tech.png' },
  { name: 'All About Architecture', src: '/images/brand-partners/all_about_architecture.png' },
  { name: 'Body Tales', src: '/images/brand-partners/body_tales.png' },
  { name: 'Medercial One', src: '/images/brand-partners/medercial_one.png' },
]

export function LocalCirclesBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-slate-50/60 text-slate-900 border-y border-slate-200 select-none py-14 sm:py-20">
      {/* Background radial ambient lights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl pointer-events-none" />

      {/* Header Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center mb-10 sm:mb-14">


        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-slate-900 max-w-3xl leading-tight">
          Trusted by Promoters, Unicorns &amp; Industry Leaders
        </h2>

        {/* Subtitle */}
        <p className="mt-3.5 text-sm sm:text-base text-slate-600 max-w-2xl font-sans">
          Promoters, enterprise founders, and scaling businesses collaborating across governed Circles to unlock capital, contracts, and national growth.
        </p>
      </div>

      {/* Left to Right Infinite Scrolling Marquee Container */}
      <div className="relative w-full overflow-hidden flex flex-col gap-4 sm:gap-5 group/marquee">
        {/* Left & Right Soft Blur Faders */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 md:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 md:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

        {/* Row 1: Left to Right Marquee */}
        <div className="flex w-max items-center gap-4 sm:gap-5 animate-marquee-ltr hover:[animation-play-state:paused] will-change-transform">
          {/* First loop of Row 1 */}
          {BRAND_PARTNERS_ROW_1.map((brand, idx) => (
            <div
              key={`row1-a-${idx}-${brand.name}`}
              className="group/card h-20 sm:h-22 min-w-[170px] sm:min-w-[200px] px-6 py-3 rounded-2xl bg-white border border-slate-200/80 shadow-[0_2px_10px_rgba(15,23,42,0.03)] hover:shadow-[0_10px_25px_rgba(15,23,42,0.08)] hover:border-blue-200 transition-all duration-300 flex items-center justify-center shrink-0"
              title={brand.name}
            >
              <div className="relative h-10 sm:h-12 w-32 sm:w-36 flex items-center justify-center">
                <Image
                  src={brand.src}
                  alt={brand.name}
                  width={160}
                  height={48}
                  className="max-h-9 sm:max-h-11 w-auto max-w-[140px] sm:max-w-[160px] object-contain transition-transform duration-300 group-hover/card:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          ))}

          {/* Duplicate loop of Row 1 for seamless infinite continuity */}
          {BRAND_PARTNERS_ROW_1.map((brand, idx) => (
            <div
              key={`row1-b-${idx}-${brand.name}`}
              className="group/card h-20 sm:h-22 min-w-[170px] sm:min-w-[200px] px-6 py-3 rounded-2xl bg-white border border-slate-200/80 shadow-[0_2px_10px_rgba(15,23,42,0.03)] hover:shadow-[0_10px_25px_rgba(15,23,42,0.08)] hover:border-blue-200 transition-all duration-300 flex items-center justify-center shrink-0"
              title={brand.name}
            >
              <div className="relative h-10 sm:h-12 w-32 sm:w-36 flex items-center justify-center">
                <Image
                  src={brand.src}
                  alt={brand.name}
                  width={160}
                  height={48}
                  className="max-h-9 sm:max-h-11 w-auto max-w-[140px] sm:max-w-[160px] object-contain transition-transform duration-300 group-hover/card:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Left to Right Marquee (slightly staggered speed for dynamic depth) */}
        <div className="flex w-max items-center gap-4 sm:gap-5 animate-marquee-ltr-slower hover:[animation-play-state:paused] will-change-transform">
          {/* First loop of Row 2 */}
          {BRAND_PARTNERS_ROW_2.map((brand, idx) => (
            <div
              key={`row2-a-${idx}-${brand.name}`}
              className="group/card h-20 sm:h-22 min-w-[170px] sm:min-w-[200px] px-6 py-3 rounded-2xl bg-white border border-slate-200/80 shadow-[0_2px_10px_rgba(15,23,42,0.03)] hover:shadow-[0_10px_25px_rgba(15,23,42,0.08)] hover:border-rose-200 transition-all duration-300 flex items-center justify-center shrink-0"
              title={brand.name}
            >
              <div className="relative h-10 sm:h-12 w-32 sm:w-36 flex items-center justify-center">
                <Image
                  src={brand.src}
                  alt={brand.name}
                  width={160}
                  height={48}
                  className="max-h-9 sm:max-h-11 w-auto max-w-[140px] sm:max-w-[160px] object-contain transition-transform duration-300 group-hover/card:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          ))}

          {/* Duplicate loop of Row 2 for seamless infinite continuity */}
          {BRAND_PARTNERS_ROW_2.map((brand, idx) => (
            <div
              key={`row2-b-${idx}-${brand.name}`}
              className="group/card h-20 sm:h-22 min-w-[170px] sm:min-w-[200px] px-6 py-3 rounded-2xl bg-white border border-slate-200/80 shadow-[0_2px_10px_rgba(15,23,42,0.03)] hover:shadow-[0_10px_25px_rgba(15,23,42,0.08)] hover:border-rose-200 transition-all duration-300 flex items-center justify-center shrink-0"
              title={brand.name}
            >
              <div className="relative h-10 sm:h-12 w-32 sm:w-36 flex items-center justify-center">
                <Image
                  src={brand.src}
                  alt={brand.name}
                  width={160}
                  height={48}
                  className="max-h-9 sm:max-h-11 w-auto max-w-[140px] sm:max-w-[160px] object-contain transition-transform duration-300 group-hover/card:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Button */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12 flex items-center justify-center">
        <Link
          href="/partner"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white font-bold transition-all shadow-sm hover:shadow-md hover:opacity-95 group text-xs uppercase tracking-wider"
        >
          <span>Partner With Peers Global</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* High Performance Infinite Keyframe CSS: Left-To-Right Scrolling */}
      <style jsx>{`
        @keyframes marqueeLtr {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0%, 0, 0);
          }
        }
        .animate-marquee-ltr {
          animation: marqueeLtr 42s linear infinite;
        }
        .animate-marquee-ltr-slower {
          animation: marqueeLtr 50s linear infinite;
        }
        @media (max-width: 640px) {
          .animate-marquee-ltr {
            animation-duration: 28s;
          }
          .animate-marquee-ltr-slower {
            animation-duration: 34s;
          }
        }
      `}</style>
    </section>
  )
}
