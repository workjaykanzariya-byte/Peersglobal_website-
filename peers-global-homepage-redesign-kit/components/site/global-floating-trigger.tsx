'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, X, Smartphone, Sparkles, CheckCircle2 } from 'lucide-react'

export function GlobalFloatingTrigger() {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  return (
    <>
      {/* Persistent Global Floating Trigger Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          type="button"
          onClick={() => setActiveModal('intro')}
          className="group relative cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-95 focus:outline-none"
          title="Explore Peers Global Unity App"
        >
          <Image
            src="/images/floating-trigger-emblem.png"
            alt="Peers Global Emblem"
            width={56}
            height={56}
            className="object-contain size-14 transition-transform duration-300 group-hover:scale-110"
          />
        </button>
      </div>

      {/* Global Interactive Unity App Promotional Modal */}
      {activeModal === 'intro' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-xl p-3 sm:p-6 animate-in fade-in zoom-in-95 duration-300">
          <div className="relative w-full max-w-4xl rounded-3xl border border-white/20 bg-gradient-to-b from-[#0b1b3a] via-[#122347] to-[#080f22] p-5 sm:p-10 shadow-2xl text-white overflow-hidden max-h-[90vh] overflow-y-auto">
            {/* Ambient Background Glows */}
            <div className="pointer-events-none absolute -top-24 -left-24 size-80 rounded-full bg-blue-600/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 size-80 rounded-full bg-[#D4AF37]/15 blur-3xl" />

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20 flex size-9 sm:size-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="size-5" />
            </button>

            <div className="relative z-10 grid gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              {/* Left Details Column */}
              <div className="flex flex-col gap-4 sm:gap-5 pr-8 sm:pr-0">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/15 px-3 sm:px-3.5 py-1 sm:py-1.5 self-start shadow-sm max-w-[calc(100%-2.5rem)] sm:max-w-none">
                  <Sparkles className="size-3.5 text-[#D4AF37] shrink-0" />
                  <span className="text-[10px] sm:text-xs font-mono font-bold text-[#D4AF37] tracking-wider uppercase truncate">
                    UNITY APP · PLATFORM OF RECORD
                  </span>
                </div>

                <h2 className="display text-2xl sm:text-4xl lg:text-5xl font-semibold text-white leading-snug tracking-tight">
                  Unity — Where Connections <br />
                  <span className="bg-gradient-to-r from-[#D4AF37] via-amber-200 to-white bg-clip-text text-transparent">
                    Create Real Impact.
                  </span>
                </h2>

                <p className="text-xs sm:text-base leading-relaxed text-white/80 font-medium">
                  Connect nearby entrepreneurs &amp; unlock smarter collaborations. Access verified member directories, referral ledgers, 1-to-1 pairings, and city circle governance right on your phone.
                </p>

                <div className="flex flex-col gap-2 pt-1">
                  <div className="flex items-center gap-2 text-xs text-white/70 font-mono">
                    <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                    <span>Geo-location discovery for nearby verified peers</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/70 font-mono">
                    <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                    <span>On-paper written referral velocity &amp; impact ledgers</span>
                  </div>
                </div>

                {/* CTAs & App Badges */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 sm:pt-3 w-full">
                  <Link
                    href="/unity"
                    onClick={() => setActiveModal(null)}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#D4AF37] text-[#0b1b3a] px-6 py-3 text-sm font-semibold hover:bg-amber-300 transition-all shadow-lg hover:scale-105 w-full sm:w-auto"
                  >
                    <Smartphone className="size-4" />
                    Explore Unity App
                    <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    href="/membership"
                    onClick={() => setActiveModal(null)}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all w-full sm:w-auto"
                  >
                    Apply for Membership
                  </Link>
                </div>
              </div>

              {/* Right Creative Poster Column */}
              <div className="relative group flex justify-center">
                <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#D4AF37]/30 to-blue-500/20 opacity-60 blur-xl group-hover:opacity-100 transition-opacity" />
                <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-[#030914] p-1.5 max-w-sm w-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/unity-creatives/post 1.png"
                    alt="Where Connections Create Impact — Peers Global Unity App Creative"
                    className="w-full h-auto object-contain rounded-xl transform group-hover:scale-102 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
