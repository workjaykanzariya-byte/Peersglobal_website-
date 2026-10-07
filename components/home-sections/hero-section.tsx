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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase brand-gradient-text">
                PEERS GLOBAL
              </div>

              <h1 className="fd-hero__headline !text-3xl sm:!text-5xl lg:!text-[52px] !leading-[1.14] font-semibold tracking-tight text-white">
                Build Your Business. Build Your Relationships. Build Your Circle.
              </h1>

              <p className="fd-hero__sub !text-base sm:!text-xl text-slate-200 font-normal !leading-relaxed">
                A community of collaboration for entrepreneurs who believe growth becomes more meaningful when we help each other grow.
              </p>

              <p className="text-sm sm:text-base text-white/95 font-medium italic border-l-2 border-[#E11D48] pl-3 py-0.5">
                Peers are Partners in Business and Friends in Life.
              </p>

              <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed font-normal max-w-2xl pt-1">
                You don&apos;t have to figure out everything alone. You don&apos;t have to know everyone. And you don&apos;t have to arrive with everything already figured out. You simply need to be ready to grow, contribute and build meaningful relationships with people who are on their own entrepreneurial journeys.
              </p>
            </div>

            <div className="fd-hero__cta flex flex-wrap items-center gap-3.5">
              <Link
                href="/circles"
                className="fd-hero__btn fd-hero__btn--brand group inline-flex items-center gap-2 uppercase tracking-wide text-xs sm:text-sm font-semibold"
              >
                <span>FIND YOUR CIRCLE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="fd-hero__btn fd-hero__btn--ghost inline-flex items-center gap-2 text-white hover:bg-white/20 transition-all border border-white/25 uppercase tracking-wide text-xs sm:text-sm font-semibold group"
              >
                <span>EXPLORE PEERS GLOBAL</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Counter band */}
            <div className="w-full pt-4 border-t border-white/15">
              <div className="flex flex-wrap items-center gap-x-3.5 gap-y-2 text-xs sm:text-sm text-slate-300">
                <div className="inline-flex items-center gap-1.5 font-medium text-white">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-rose-400 font-bold text-sm sm:text-base">
                    1M+
                  </span>
                  <span>Entrepreneurs to impact by 2030</span>
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
