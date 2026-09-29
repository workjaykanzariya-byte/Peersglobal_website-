'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="fd-hero">
      <video
        className="fd-hero__video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
        src="/videos/homepage-hero-bg.mp4"
      />
      <div className="fd-hero__scrim" aria-hidden="true"></div>

      <div className="fd-hero__inner">
        <div className="fd-hero__wrapper !max-w-3xl">
          <div className="fd-hero__stack">
            <div className="fd-hero__group">
              <h1 className="fd-hero__headline !text-3xl sm:!text-5xl lg:!text-[52px] !leading-[1.14] font-semibold tracking-tight text-white">
                Build Your Business. Build Your Relationships. Build Your Circle.
              </h1>

              <p className="fd-hero__sub !text-base sm:!text-xl text-slate-200 font-normal !leading-relaxed">
                Peers Global is the World&apos;s First Community of Collaboration — a leadership organisation of entrepreneurs who grow by helping each other grow.
              </p>

              <p className="text-sm sm:text-base text-white/95 font-medium italic border-l-2 border-[#E11D48] pl-3 py-0.5">
                Peers are Partners in Business and Friends in Life.
              </p>
            </div>

            <div className="fd-hero__cta flex flex-wrap items-center gap-3.5">
              <Link
                href="/circles"
                className="fd-hero__btn fd-hero__btn--brand group inline-flex items-center gap-2"
              >
                <span>Find Your Circle</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/membership"
                className="fd-hero__btn fd-hero__btn--ghost inline-flex items-center gap-2 text-white hover:bg-white/20 transition-all border border-white/25"
              >
                <span>Apply for Membership</span>
              </Link>
            </div>

            {/* Counter band from content doc */}
            <div className="w-full pt-4 border-t border-white/15">
              <div className="flex flex-wrap items-center gap-x-3.5 gap-y-2 text-xs sm:text-sm text-slate-300">
                <div className="inline-flex items-center gap-1.5 font-medium text-white">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-rose-400 font-bold text-sm sm:text-base">
                    1M+
                  </span>
                  <span>entrepreneurs to impact by 2030</span>
                </div>
                <span className="text-white/30 hidden sm:inline">·</span>
                <div className="inline-flex items-center gap-1.5 font-medium text-white">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-rose-400 font-bold text-sm sm:text-base">
                    18
                  </span>
                  <span>Industry &amp; Goal Circles</span>
                </div>
                <span className="text-white/30 hidden sm:inline">·</span>
                <div className="inline-flex items-center gap-1.5 font-medium text-white">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-rose-400 font-bold text-sm sm:text-base">
                    10
                  </span>
                  <span>Forms of Collaboration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
