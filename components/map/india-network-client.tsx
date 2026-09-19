'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  MapPin,
  Users,
  Compass,
  Building2,
  Trophy,
  Award,
  Sparkles,
  TrendingUp,
  Globe2,
  Briefcase,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react'

export function IndiaNetworkClient() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] font-sans selection:bg-[#E8DDD0] selection:text-[#1A1A1A]">
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-[#EADFC7]/50 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-neutral-500 font-medium">
          <Link href="/" className="hover:text-neutral-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <Link href="/map" className="hover:text-neutral-900 transition-colors">
            The Territory
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span className="text-neutral-900 font-semibold">Peers Global India</span>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 border-b border-[#EADFC7]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8C6422]">
                PEERS GLOBAL INDIA
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#1A1A1A] tracking-tight leading-[1.08]">
                Peers Global India
              </h1>
              <p className="text-xl font-serif text-[#5B4834] italic">
                Entrepreneurs. Cities. A stronger Bharat.
              </p>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                A national community of entrepreneurs, built for the businesses that build this country.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/circles/find"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0D6EFD] text-white text-xs sm:text-sm font-bold hover:bg-blue-600 transition-all shadow-md uppercase tracking-wider"
                >
                  Find Your Circle
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/1-million-mission"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#D5C7B0] text-xs sm:text-sm font-semibold text-neutral-800 hover:bg-[#F4EFE6] transition-colors"
                >
                  See 1 Million Mission
                </Link>
              </div>
            </div>

            <div className="text-right hidden lg:block">
              <span className="text-base font-serif italic text-[#8C6422] block">
                Indian Entrepreneurs. Global Opportunities.
              </span>
            </div>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-10 mt-10 border-t border-[#EADFC7]/70">
            <div className="p-4 rounded-2xl bg-white border border-[#E8DFC9] flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#8C6422] flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-2xl font-serif font-bold text-neutral-900">15+</span>
                <span className="text-xs text-neutral-500 font-medium">Cities</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#E8DFC9] flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0D6EFD] flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-2xl font-serif font-bold text-neutral-900">25+</span>
                <span className="text-xs text-neutral-500 font-medium">Circles</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#E8DFC9] flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-2xl font-serif font-bold text-neutral-900">1,000+</span>
                <span className="text-xs text-neutral-500 font-medium">Peers</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#E8DFC9] flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-2xl font-serif font-bold text-neutral-900">∞</span >
                <span className="text-xs text-neutral-500 font-medium">Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── From Cities Across India ─── */}
      <section className="py-16 md:py-20 border-b border-[#EADFC7]/60 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Graphic Map Representation */}
            <div className="lg:col-span-6 p-8 rounded-3xl bg-[#FAF7F0] border border-[#E8DFC9] relative overflow-hidden text-center min-h-[320px] flex flex-col items-center justify-center">
              <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center font-serif text-[110px] font-black text-[#5B4834]">
                BHARAT
              </div>
              <div className="relative z-10 space-y-4 max-w-sm">
                <span className="w-12 h-12 rounded-2xl bg-[#0D6EFD] text-white flex items-center justify-center mx-auto shadow-md">
                  <Globe2 className="w-6 h-6" />
                </span>
                <h3 className="text-2xl font-serif font-bold text-neutral-900">
                  National Footprint
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  From Ahmedabad, Mumbai, Surat, and Pune in the West, to Bengaluru and Chennai in the South, Delhi NCR in the North, and expanding rapidly eastward.
                </p>
                <div className="pt-2">
                  <Link
                    href="/map"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8C6422] hover:text-[#5B4834]"
                  >
                    Explore the Live Interactive Map <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: The Purpose */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8C6422]">
                  National Federation
                </span>
                <h2 className="text-3xl font-serif text-neutral-900">
                  From cities across India
                </h2>
              </div>
              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-medium">
                A growing community of Circles, connected by a common purpose — to help each other build better businesses and a stronger Bharat.
              </p>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                India runs on MSMEs. They employ crores of people, build cities, and sustain families — largely without institutional support systems or high-level visibility. Peers Global exists to change that, one Circle at a time.
              </p>

              <div className="pt-2">
                <Link
                  href="/circles"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1A1A1A] text-white text-xs font-bold hover:bg-neutral-800 transition-colors uppercase tracking-wider"
                >
                  Find Your Circle
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── National Leadership ─── */}
      <section className="py-16 md:py-24 border-b border-[#EADFC7]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8C6422]">
                Governance
              </span>
              <h2 className="text-3xl font-serif text-[#1A1A1A]">
                National Leadership
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600">
                Guided by entrepreneurs. For entrepreneurs.
              </p>
            </div>
            <Link
              href="/leadership"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0D6EFD] hover:text-blue-700"
            >
              View Leadership Ladder <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-[#E8DFC9] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#8C6422] flex items-center justify-center">
                <Trophy className="w-5 h-5" />
              </div>
              <h4 className="text-base font-serif font-bold text-neutral-900">National Chair</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Custodianship of national mission, community integrity, and charter alignment.
              </p>
              <span className="text-[11px] font-semibold text-[#8C6422] block pt-2 border-t border-neutral-100">
                To be announced
              </span>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E8DFC9] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0D6EFD] flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-base font-serif font-bold text-neutral-900">National Executive Director</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Orchestration of operational standards, training curriculum, and conclave schedules.
              </p>
              <span className="text-[11px] font-semibold text-[#0D6EFD] block pt-2 border-t border-neutral-100">
                To be announced
              </span>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E8DFC9] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="text-base font-serif font-bold text-neutral-900">Regional Directors</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Senior regional conveners guiding circle directors across our 5 zones.
              </p>
              <span className="text-[11px] font-semibold text-purple-700 block pt-2 border-t border-neutral-100">
                Across 5 regions
              </span>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#E8DFC9] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <Briefcase className="w-5 h-5" />
              </div>
              <h4 className="text-base font-serif font-bold text-neutral-900">Industry Directors</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Sector specialists driving cross-border trade, exports, and vertical supply alliances.
              </p>
              <span className="text-[11px] font-semibold text-emerald-700 block pt-2 border-t border-neutral-100">
                Across key sectors
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── India Focus: The MSME Opportunity ─── */}
      <section className="py-16 md:py-24 border-b border-[#EADFC7]/60 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Monument / Brand statement */}
            <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-lg border border-[#E8DFC9] min-h-[360px] bg-neutral-900">
              <Image
                src="/images/who-we-are-boardroom.jpg"
                alt="Indian entrepreneurs collaborating"
                fill
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="text-[11px] uppercase tracking-wider text-amber-300 font-bold block">
                  The Engine of Bharat
                </span>
                <h3 className="text-2xl font-serif font-bold leading-tight">
                  Stronger Businesses. Stronger Cities. A Stronger India.
                </h3>
              </div>
            </div>

            {/* Right: Key Initiatives */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8C6422]">
                  Strategic Focus
                </span>
                <h2 className="text-3xl font-serif text-neutral-900">
                  India Focus: The MSME Opportunity
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                MSMEs are the backbone of India’s economy — creating employment, strengthening secondary cities, and building a more self-reliant Bharat. Peers Global exists to support, connect, and create real compounding opportunities for this vital segment.
              </p>

              {/* Initiatives Pills / Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-white border border-[#E8DFC9] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-neutral-900">Circles Across India</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-[#E8DFC9] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-[#8C6422] flex items-center justify-center shrink-0">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-neutral-900">Industry Collaboration</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-[#E8DFC9] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-neutral-900">MSME Visibility</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-[#E8DFC9] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-neutral-900">1 Million Lives Mission</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/1-million-mission"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8C6422] hover:text-[#5B4834]"
                >
                  See the 1 Million Mission <ArrowRight className="w-3.5 h-3.5" />
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
