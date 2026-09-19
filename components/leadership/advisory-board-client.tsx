'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  Compass,
  Users,
  Building2,
  Award,
  BookOpen,
  Sparkles,
  Lock,
  Landmark,
  Scale,
} from 'lucide-react'

const ADVISORS = [
  {
    name: 'Dilip Patel',
    business: 'Omkar Industrial Infrastructure',
    city: 'Ahmedabad',
    focus: 'Advising on institutional governance, capital allocation, and long-term land & asset expansion.',
    experience: '34 years building heavy industrial estates and manufacturing infrastructure.',
    image: '/images/circle-founder-hero.jpg',
  },
  {
    name: 'Kavita Sundaram',
    business: 'Sundaram Financial & Advisory Group',
    city: 'Mumbai',
    focus: 'Advising on cross-border compliances, IPO readiness, and audit committees.',
    experience: '28 years veteran merchant banker and board member across NSE-listed enterprises.',
    image: '/images/circle-director-hero.jpg',
  },
  {
    name: 'Sudhir Rangaswamy',
    business: 'Zenith Global Technologies',
    city: 'Bengaluru',
    focus: 'Advising on high-trust digital ecosystems, IP governance, and ethical enterprise automation.',
    experience: '30 years in enterprise systems, having scaled 3 technology firms from inception to international exits.',
    image: '/images/executive-director-hero.jpg',
  },
]

export function AdvisoryBoardClient() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#EFF6FF] selection:text-[#0062D2] antialiased">
      {/* ─── Breadcrumb ─── */}
      <div className="border-b border-slate-200/80 bg-white/95 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/leadership" className="hover:text-slate-900 transition-colors">
            Leadership
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">The Peers Board of Advisory</span>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 border-b border-slate-200/80 bg-[#F8FAFC] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFF6FF] border border-[#0062D2]/20 text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0062D2]" />
                INSTITUTIONAL GOVERNANCE
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-slate-950 tracking-tight leading-[1.08] font-bold">
                The Peers Board of Advisory
              </h1>

              <p className="text-xl sm:text-2xl font-serif text-slate-700 font-medium leading-snug">
                Senior entrepreneurs whose experience is available to the whole community.
              </p>

              <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
                Protecting institutional standards, mentoring leadership, and keeping the community grounded in values that outlast economic cycles.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#advisors-list"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white text-sm font-bold shadow-[0_4px_14px_rgba(0,98,210,0.25)] hover:shadow-[0_6px_18px_rgba(0,98,210,0.35)] transition-all active:scale-95 uppercase tracking-wider"
                >
                  <span>Meet The Advisors</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Visual: Boardroom Setting */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group h-72 sm:h-80">
                <Image
                  src="/images/who-we-are-boardroom.jpg"
                  alt="Peers Global Boardroom Advisory Meeting"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-mono uppercase text-blue-300 font-semibold tracking-wider block mb-1">
                    Guardians of Culture
                  </span>
                  <p className="font-serif italic text-lg text-white/95 leading-snug">
                    “Experience that outlives your own company.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Every institution needs a memory ─── */}
      <section className="py-14 border-b border-slate-200/80 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950">
              Every institution needs a memory
            </h2>

            <p className="text-base sm:text-lg font-serif italic text-slate-700">
              Communities lose themselves gradually.
            </p>

            <div className="space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                A standard is relaxed once for a good reason. A shortcut is taken because growth demands it. Nobody notices any single decision, and five years later the thing that made it worth building is gone.
              </p>
              <p>
                The <strong className="text-slate-900 font-semibold">Board of Advisory exists to prevent that</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What Advisors Do ─── */}
      <section className="py-14 border-b border-slate-200/80 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
              Fiduciary Responsibility
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950">
              What Advisors do
            </h2>
            <p className="text-sm text-slate-600">
              Five critical mandates that steer the health and trajectory of Peers Global.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: 'Guide the direction of the community',
                desc: 'Where it expands, what it builds, and critically — what it declines to protect focus.',
                icon: Compass,
              },
              {
                title: 'Protect what must not change',
                desc: 'Ensure core values, giving-first culture, and category exclusivity remain inviolable.',
                icon: Lock,
              },
              {
                title: 'Mentor senior leadership',
                desc: 'Personal counsel for Circle Founders, Circle Directors, Industry Directors and Executive Directors.',
                icon: Users,
              },
              {
                title: 'Open institutional relationships',
                desc: 'Bridge relations with apex trade bodies, financial institutions, and policy authorities.',
                icon: Landmark,
              },
              {
                title: 'Support Peers directly',
                desc: "Connected through each Circle's designated Peers Board of Advisory Leader.",
                icon: Award,
              },
            ].map((mandate, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2.5"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] text-[#0062D2] flex items-center justify-center border border-[#0062D2]/20">
                  <mandate.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-serif font-bold text-slate-900 leading-snug">
                  {mandate.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {mandate.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Who They Are (Named Advisors) ─── */}
      <section id="advisors-list" className="py-14 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
              The Council
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950">
              Who they are
            </h2>
            <p className="text-sm text-slate-600">
              Senior founders who have built through multiple market cycles over decades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ADVISORS.map((advisor, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-60 w-full bg-slate-100">
                    <Image
                      src={advisor.image}
                      alt={advisor.name}
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <h3 className="text-xl font-serif font-bold leading-tight">
                        {advisor.name}
                      </h3>
                      <p className="text-xs text-blue-200 font-medium">
                        {advisor.business} · {advisor.city}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#0062D2] block">
                        Advisory Focus
                      </span>
                      <p className="text-xs text-slate-700 leading-relaxed font-medium">
                        {advisor.focus}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500 leading-normal">
                      <strong className="text-slate-800">Background: </strong>
                      {advisor.experience}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Who Becomes an Advisor & What It Gives ─── */}
      <section className="py-14 border-b border-slate-200/80 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
              <h3 className="text-xl font-serif font-bold text-slate-950">
                Who becomes an Advisor
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Entrepreneurs who have built and led something significant over decades, and who are at a stage where guiding matters more to them than operating.
              </p>
              <div className="p-3.5 rounded-xl bg-[#EFF6FF] border border-[#0062D2]/20 text-xs font-semibold text-[#0062D2]">
                Advisors are invited, not appointed.
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
              <h3 className="text-xl font-serif font-bold text-slate-950">
                What it gives
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Experience that outlives your own company. Most business knowledge dies with the business that produced it. Thirty years of judgement, of mistakes paid for, of instincts about people and markets — almost all of it disappears when a founder steps back.
              </p>
              <p className="text-xs font-serif italic text-[#0062D2] font-semibold">
                This is where yours keeps working.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Closing Banner ─── */}
      <section className="relative py-20 bg-[#0062D2] text-white overflow-hidden">
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Institutional Memory. Enduring Standards.
          </h2>
          <p className="text-sm sm:text-base text-white/90 max-w-xl mx-auto">
            Experience that guides a national movement of entrepreneurs building for decades.
          </p>
          <div className="pt-2">
            <Link
              href="/membership"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#0062D2] text-xs sm:text-sm font-bold hover:bg-slate-100 transition-all uppercase tracking-wider shadow-lg shadow-black/10"
            >
              <span>Explore Membership</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
