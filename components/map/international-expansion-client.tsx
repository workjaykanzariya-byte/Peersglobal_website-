'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  Globe2,
  Building2,
  Users,
  Compass,
  ArrowUpRight,
  Plane,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react'

const INTERNATIONAL_HUBS = [
  {
    country: 'United Arab Emirates',
    city: 'Dubai',
    status: 'Active',
    statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    circlesCount: 2,
    peersCount: 80,
    focus: 'Middle East Trade, Logistics & Free Zone Scaling',
    image: '/images/who-we-are-boardroom.jpg',
  },
  {
    country: 'Singapore',
    city: 'Singapore',
    status: 'Active',
    statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    circlesCount: 1,
    peersCount: 50,
    focus: 'ASEAN Headquarters, FinTech & Cross-Border Capital',
    image: '/images/culture-hero-desk.jpg',
  },
  {
    country: 'United Kingdom',
    city: 'London',
    status: 'Exploring',
    statusColor: 'bg-amber-50 text-amber-700 border-amber-200',
    circlesCount: 1,
    peersCount: 40,
    focus: 'European Distribution, Tech Alliances & Trade Gateways',
    image: '/images/lexicon-open-book.jpg',
  },
]

export function InternationalExpansionClient() {
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
          <span className="text-slate-900 font-semibold">International</span>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 border-b border-slate-200 bg-gradient-to-b from-white via-[#F6F9FD] to-[#EDF3FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                PEERS GLOBAL
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-slate-900 tracking-tight leading-[1.08] font-bold">
                International
              </h1>
              <p className="text-xl font-serif text-slate-700 italic">
                Built in India. From day one, global.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Entrepreneurs everywhere face similar challenges. Peers Global is built for a global community from the beginning.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/start-a-circle"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0062D2] text-white text-xs sm:text-sm font-bold hover:bg-[#1a42c0] transition-all shadow-md uppercase tracking-wider"
                >
                  Start a Circle
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/bring-to-my-city"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800 hover:bg-slate-100 transition-colors"
                >
                  Bring to Your City
                </Link>
              </div>
            </div>

            <div className="text-right hidden lg:block">
              <span className="text-base font-serif italic text-slate-700 block">
                Different Geographies. Same Spirit.
              </span>
            </div>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-10 mt-10 border-t border-slate-200">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center gap-3 shadow-xs hover:border-slate-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100">
                <Globe2 className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-2xl font-serif font-bold text-slate-900">2+</span>
                <span className="text-xs text-slate-500 font-medium">Countries Active</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center gap-3 shadow-xs hover:border-slate-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-2xl font-serif font-bold text-slate-900">5+</span>
                <span className="text-xs text-slate-500 font-medium">International Cities</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center gap-3 shadow-xs hover:border-slate-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-2xl font-serif font-bold text-slate-900">100+</span>
                <span className="text-xs text-slate-500 font-medium">Global Peers</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center gap-3 shadow-xs hover:border-slate-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-2xl font-serif font-bold text-slate-900">Global</span>
                <span className="text-xs text-slate-500 font-medium">Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── A Global Community ─── */}
      <section className="py-16 md:py-20 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                  Borderless Collaboration
                </span>
                <h2 className="text-3xl font-serif text-slate-900 font-bold">
                  A global community
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                Where there are entrepreneurs who believe in collaboration over competition, there is a place for Peers Global.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The Unity App connects Peers across countries from day one. Circles like <em>Import, Export &amp; Global Trade</em> and <em>Global Expansion</em> exist specifically for entrepreneurs building across borders. A Peer in India can collaborate with, mentor, or joint-venture with a Peer in Dubai or Singapore in real time.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Cross-border referral guarantees logged in Unity</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>International Conclave delegations and buyer-seller meets</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Free zone incorporation & export compliance mentorship</span>
                </div>
              </div>
            </div>

            {/* Right: World Map Representation */}
            <div className="lg:col-span-6 p-8 rounded-3xl bg-[#FAFBFD] border border-slate-200 relative overflow-hidden text-center min-h-[340px] flex flex-col items-center justify-center">
              <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center font-serif text-[110px] font-black text-slate-700">
                WORLD
              </div>
              <div className="relative z-10 space-y-4 max-w-sm">
                <span className="w-12 h-12 rounded-2xl bg-[#0062D2] text-white flex items-center justify-center mx-auto shadow-md">
                  <Globe2 className="w-6 h-6 text-cyan-300" />
                </span>
                <h3 className="text-2xl font-serif font-bold text-slate-900">
                  Global Hubs
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Connecting Indian manufacturing and tech talent with capital and international distribution channels worldwide.
                </p>
                <div className="flex items-center justify-center gap-3 pt-2 text-xs font-semibold">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Active Hub</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span>Exploring</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Our International Presence ─── */}
      <section className="py-16 md:py-24 border-b border-slate-200 bg-[#FAFBFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                Global Presence
              </span>
              <h2 className="text-3xl font-serif text-slate-900 font-bold">
                Our International Presence
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Active and emerging international chapters anchored by verified local founders.
              </p>
            </div>
            <Link
              href="/circles/find"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0062D2] hover:text-[#1a42c0]"
            >
              Browse All Circles <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INTERNATIONAL_HUBS.map((hub) => (
              <div
                key={hub.city}
                className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-7 flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider border ${hub.statusColor}`}>
                      {hub.status}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {hub.country}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-serif font-bold text-slate-900">
                      {hub.city}
                    </h3>
                    <p className="text-xs text-slate-500 pt-1 leading-relaxed">
                      {hub.focus}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs py-2 border-t border-slate-100">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-semibold">Circles</span>
                      <span className="font-serif font-bold text-sm text-slate-900">{hub.circlesCount} Active</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-semibold">Peers</span>
                      <span className="font-serif font-bold text-sm text-slate-900">{hub.peersCount}+ Members</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/circles"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0062D2] hover:text-[#1a42c0]"
                  >
                    Explore Chapter <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Founding the First Circle in a Country */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-6">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                Global Pioneer Program
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-slate-900 font-bold">
                Founding the first Circle in a country
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                One of the most significant contributions anyone can make in this community. The structure, systems, and global support come from the wider community. The leadership and the first twenty-five entrepreneurs come from you.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/start-a-circle"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0062D2] text-white text-xs font-bold hover:bg-[#1a42c0] transition-colors uppercase tracking-wider shadow-sm"
              >
                Start a Circle
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/bring-to-my-city"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 hover:bg-slate-100 transition-colors"
              >
                Bring to Your City
              </Link>
            </div>

            <div className="pt-4 border-t border-slate-100 text-center">
              <p className="text-sm sm:text-base font-serif italic text-slate-700">
                &ldquo;Entrepreneurship has no borders. Neither does collaboration.&rdquo; — Peers Global
              </p>
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
