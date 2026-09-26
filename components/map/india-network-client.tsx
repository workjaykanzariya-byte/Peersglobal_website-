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
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#EFF6FF] selection:text-[#0062D2] antialiased">
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-slate-200/80 bg-slate-50/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-slate-600 font-medium">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/map" className="hover:text-slate-900 transition-colors">
            The Territory
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">Peers Global India</span>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 border-b border-slate-200 bg-gradient-to-b from-white via-[#F6F9FD] to-[#EDF3FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                PEERS GLOBAL INDIA
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-slate-900 tracking-tight leading-[1.08] font-bold">
                Peers Global India
              </h1>
              <p className="text-xl font-serif text-slate-700 italic">
                Entrepreneurs. Cities. A stronger Bharat.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                A national community of entrepreneurs, built for the businesses that build this country.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/circles/find"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-xs sm:text-sm font-bold hover:shadow-lg transition-all shadow-md uppercase tracking-wider"
                >
                  Find Your Circle
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/1-million-mission"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800 hover:bg-slate-100 transition-colors"
                >
                  See 1 Million Mission
                </Link>
              </div>
            </div>

            <div className="text-right hidden lg:block">
              <span className="text-base font-serif italic text-slate-700 block">
                Indian Entrepreneurs. Global Opportunities.
              </span>
            </div>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-10 mt-10 border-t border-slate-200">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center gap-3 shadow-xs hover:border-slate-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-2xl font-serif font-bold text-slate-900">15+</span>
                <span className="text-xs text-slate-500 font-medium">Cities</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center gap-3 shadow-xs hover:border-slate-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-2xl font-serif font-bold text-slate-900">25+</span>
                <span className="text-xs text-slate-500 font-medium">Circles</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center gap-3 shadow-xs hover:border-slate-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-2xl font-serif font-bold text-slate-900">1,000+</span>
                <span className="text-xs text-slate-500 font-medium">Peers</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center gap-3 shadow-xs hover:border-slate-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-2xl font-serif font-bold text-slate-900">∞</span>
                <span className="text-xs text-slate-500 font-medium">Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── From Cities Across India ─── */}
      <section className="py-16 md:py-20 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Graphic Map Representation */}
            <div className="lg:col-span-6 p-8 rounded-3xl bg-[#FAFBFD] border border-slate-200 relative overflow-hidden text-center min-h-[320px] flex flex-col items-center justify-center">
              <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center font-serif text-[110px] font-black text-slate-700">
                BHARAT
              </div>
              <div className="relative z-10 space-y-4 max-w-sm">
                <span className="w-12 h-12 rounded-2xl bg-[#0062D2] text-white flex items-center justify-center mx-auto shadow-md">
                  <Globe2 className="w-6 h-6" />
                </span>
                <h3 className="text-2xl font-serif font-bold text-slate-900">
                  National Footprint
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  From Ahmedabad, Mumbai, Surat, and Pune in the West, to Bengaluru and Chennai in the South, Delhi NCR in the North, and expanding rapidly eastward.
                </p>
                <div className="pt-2">
                  <Link
                    href="/map"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0062D2] hover:text-[#1a42c0]"
                  >
                    Explore the Live Interactive Map <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: The Purpose */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                  National Federation
                </span>
                <h2 className="text-3xl font-serif text-slate-900 font-bold">
                  From cities across India
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                A growing community of Circles, connected by a common purpose — to help each other build better businesses and a stronger Bharat.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                India runs on MSMEs. They employ crores of people, build cities, and sustain families — largely without institutional support systems or high-level visibility. Peers Global exists to change that, one Circle at a time.
              </p>

              <div className="pt-2">
                <Link
                  href="/circles"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0062D2] text-white text-xs font-bold hover:bg-[#1a42c0] transition-colors uppercase tracking-wider"
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
      <section className="py-16 md:py-24 border-b border-slate-200 bg-[#FAFBFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                Governance
              </span>
              <h2 className="text-3xl font-serif text-slate-900 font-bold">
                National Leadership
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Guided by entrepreneurs. For entrepreneurs.
              </p>
            </div>
            <Link
              href="/leadership"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0062D2] hover:text-[#1a42c0]"
            >
              View Leadership Ladder <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 space-y-3 hover:shadow-md hover:border-slate-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100">
                <Trophy className="w-5 h-5" />
              </div>
              <h4 className="text-base font-serif font-bold text-slate-900">National Chair</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Custodianship of national mission, community integrity, and charter alignment.
              </p>
              <span className="text-[11px] font-semibold text-[#0062D2] block pt-2 border-t border-slate-100">
                To be announced
              </span>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 space-y-3 hover:shadow-md hover:border-slate-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-base font-serif font-bold text-slate-900">National Executive Director</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Orchestration of operational standards, training curriculum, and conclave schedules.
              </p>
              <span className="text-[11px] font-semibold text-[#0062D2] block pt-2 border-t border-slate-100">
                To be announced
              </span>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 space-y-3 hover:shadow-md hover:border-slate-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="text-base font-serif font-bold text-slate-900">Regional Directors</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Senior regional conveners guiding circle directors across our 5 zones.
              </p>
              <span className="text-[11px] font-semibold text-[#0062D2] block pt-2 border-t border-slate-100">
                Across 5 regions
              </span>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 space-y-3 hover:shadow-md hover:border-slate-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100">
                <Briefcase className="w-5 h-5" />
              </div>
              <h4 className="text-base font-serif font-bold text-slate-900">Industry Directors</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Sector specialists driving cross-border trade, exports, and vertical supply alliances.
              </p>
              <span className="text-[11px] font-semibold text-[#0062D2] block pt-2 border-t border-slate-100">
                Across key sectors
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── India Focus: The MSME Opportunity ─── */}
      <section className="py-16 md:py-24 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Monument / Brand statement */}
            <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-lg border border-slate-700/60 min-h-[360px] bg-gradient-to-br from-[#070D18] via-[#0B1528] to-[#0A101D]">
              <Image
                src="/images/who-we-are-boardroom.jpg"
                alt="Indian entrepreneurs collaborating"
                fill
                className="object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="text-[11px] uppercase tracking-wider text-cyan-400 font-bold block">
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
                <span className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                  Strategic Focus
                </span>
                <h2 className="text-3xl font-serif text-slate-900 font-bold">
                  India Focus: The MSME Opportunity
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                MSMEs are the backbone of India’s economy — creating employment, strengthening secondary cities, and building a more self-reliant Bharat. Peers Global exists to support, connect, and create real compounding opportunities for this vital segment.
              </p>

              {/* Initiatives Pills / Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-[#FAFBFD] border border-slate-200 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-900">Circles Across India</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#FAFBFD] border border-slate-200 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-900">Industry Collaboration</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#FAFBFD] border border-slate-200 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-900">MSME Visibility</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#FAFBFD] border border-slate-200 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-900">1 Million Lives Mission</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/1-million-mission"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0062D2] hover:text-[#1a42c0]"
                >
                  See the 1 Million Mission <ArrowRight className="w-3.5 h-3.5" />
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
