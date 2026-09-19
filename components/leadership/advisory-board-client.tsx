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
      {/* ─── 1. HERO SECTION (HOMEPAGE MATCHING HERO BANNER WITH VIDEO) ──── */}
      <section className="relative overflow-hidden pt-5 sm:pt-6 pb-3 sm:pb-4 border-b border-slate-200/80 bg-gradient-to-b from-white via-[#F6F9FD] to-[#EDF3FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-5">
            <Link href="/" className="hover:text-[#0062D2] transition-colors">
              Home
            </Link>
            <ChevronRight className="size-3 text-slate-400" />
            <Link href="/leadership" className="hover:text-[#0062D2] transition-colors">
              Leadership
            </Link>
            <ChevronRight className="size-3 text-slate-400" />
            <span className="text-slate-800 font-semibold">The Peers Board of Advisory</span>
          </nav>

          {/* Hero Banner Box (Unified rounded card matching Homepage / Leadership layout with Video) */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[36px] bg-white border border-slate-200/80 shadow-sm min-h-[520px] lg:min-h-[580px] flex items-center">
            {/* Right Video Visual with fade gradient mask */}
            <div
              className="absolute top-0 right-0 bottom-0 w-full sm:w-[65%] lg:w-[58%] overflow-hidden pointer-events-none"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 10%, rgba(0,0,0,0.6) 28%, black 55%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 10%, rgba(0,0,0,0.6) 28%, black 55%)',
              }}
            >
              <video
                src="/videos/leadership-hero-bg.mp4"
                poster="/images/who-we-are-boardroom.jpg"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-center scale-105"
              />
              <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-white via-white/85 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />

              {/* Cursive Script Overlay */}
              <div className="absolute top-6 sm:top-10 right-6 sm:right-10 z-20 text-right drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] pointer-events-none select-none">
                <p
                  className="text-2xl sm:text-3xl text-white/95 leading-tight font-medium"
                  style={{ fontFamily: 'var(--font-script)' }}
                >
                  Guardians of Culture
                </p>
                <p
                  className="text-3xl sm:text-4xl text-amber-300 font-bold leading-tight mt-0.5"
                  style={{ fontFamily: 'var(--font-script)' }}
                >
                  Enduring Standards.
                </p>
              </div>
            </div>

            {/* Left Content */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl flex flex-col items-start">
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#0062D2] mb-3">
                  <span className="w-5 h-px bg-[#0062D2]" />
                  INSTITUTIONAL GOVERNANCE
                  <span className="w-5 h-px bg-[#0062D2]" />
                </div>

                <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-950 leading-[1.08] mb-4">
                  The Peers Board of Advisory
                </h1>

                <p className="text-xl sm:text-2xl font-medium text-slate-900 leading-snug mb-3">
                  Senior entrepreneurs whose experience is available to the whole community.
                </p>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl font-light">
                  Protecting institutional standards, mentoring leadership, and keeping the community grounded in values that outlast economic cycles.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#advisors-list"
                    className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-8 py-3.5 text-sm font-semibold shadow-md shadow-blue-600/20 transition-all hover:scale-105 inline-flex items-center gap-2"
                  >
                    <span>Meet The Advisors</span>
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ─── 3. WHAT ADVISORS DO (5 CARDS GRID - HOMEPAGE DARK CONSTELLATION THEME) ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#070D18] via-[#0B1528] to-[#0A101D] py-20 sm:py-24 lg:py-28 text-white border-b border-slate-800/80">
        {/* Background Glow & Atmospheric Orbs */}
        <div aria-hidden className="pointer-events-none absolute top-1/4 left-10 size-[320px] rounded-full bg-blue-600/12 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute bottom-10 right-10 size-[380px] rounded-full bg-cyan-500/8 blur-[140px]" />
        <div aria-hidden className="pointer-events-none absolute top-10 right-1/3 size-[250px] rounded-full bg-indigo-600/8 blur-[100px]" />

        {/* Constellation Star Particle Overlay */}
        <svg viewBox="0 0 1400 600" className="absolute inset-0 size-full pointer-events-none opacity-20" preserveAspectRatio="none">
          <g fill="#38BDF8">
            <circle cx="80" cy="60" r="1.5" /><circle cx="200" cy="130" r="1" /><circle cx="340" cy="45" r="2" />
            <circle cx="500" cy="100" r="1.2" /><circle cx="680" cy="35" r="1.5" /><circle cx="850" cy="110" r="1" />
            <circle cx="1020" cy="60" r="2" /><circle cx="1180" cy="160" r="1.2" /><circle cx="1340" cy="80" r="1.5" />
            <circle cx="150" cy="500" r="1.2" /><circle cx="400" cy="540" r="1.8" /><circle cx="640" cy="560" r="1" />
            <circle cx="900" cy="520" r="1.5" /><circle cx="1100" cy="550" r="1" /><circle cx="70" cy="320" r="1" />
            <circle cx="310" cy="270" r="1.8" /><circle cx="760" cy="300" r="1.2" /><circle cx="1260" cy="360" r="1" />
          </g>
          <g stroke="#38BDF8" strokeWidth="0.5" opacity="0.35" fill="none">
            <line x1="80" y1="60" x2="200" y2="130" /><line x1="200" y1="130" x2="340" y2="45" />
            <line x1="500" y1="100" x2="680" y2="35" /><line x1="850" y1="110" x2="1020" y2="60" />
            <line x1="1020" y1="60" x2="1180" y2="160" />
          </g>
        </svg>

        {/* Orbit rings decorative */}
        <div className="pointer-events-none absolute -bottom-24 -left-20 size-[380px] opacity-20">
          <svg viewBox="0 0 400 400" className="size-full stroke-cyan-400/30 fill-none">
            <circle cx="100" cy="300" r="260" strokeWidth="1" strokeDasharray="6 6" />
            <circle cx="100" cy="300" r="210" strokeWidth="1" />
            <circle cx="100" cy="300" r="160" strokeWidth="1" />
            <circle cx="100" cy="90" r="3.5" fill="#38bdf8" className="animate-pulse" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-cyan-400 mb-3.5">
              <span className="w-5 h-px bg-cyan-400" />
              FIDUCIARY RESPONSIBILITY
              <span className="w-5 h-px bg-cyan-400" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              What Advisors do
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mt-3 font-light">
              Five critical mandates that steer the health and trajectory of Peers Global.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
            ].map((mandate, idx) => {
              const Icon = mandate.icon
              return (
                <div
                  key={idx}
                  className="rounded-3xl border border-slate-700/60 bg-gradient-to-br from-[#0B1528] via-[#0F1D38] to-[#070D18] p-7 sm:p-8 text-white shadow-[0_20px_50px_rgba(11,21,40,0.35)] hover:border-cyan-500/50 hover:shadow-[0_25px_60px_rgba(56,189,248,0.12)] transition-all duration-300 flex flex-col items-start group relative overflow-hidden"
                >
                  {/* Subtle glass reflection */}
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.06] via-transparent to-black/30" />

                  <div className="size-12 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-cyan-500/25 transition-all shadow-inner">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                    {mandate.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {mandate.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── 4. WHO THEY ARE (THE COUNCIL CARDS) ───────────────────────── */}
      <section id="advisors-list" className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#0062D2] mb-3">
              <span className="w-5 h-px bg-[#0062D2]" />
              THE COUNCIL
              <span className="w-5 h-px bg-[#0062D2]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight leading-tight">
              Who they are
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3 max-w-2xl mx-auto font-normal leading-relaxed">
              Senior founders who have built through multiple market cycles over decades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ADVISORS.map((advisor, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-64 sm:h-72 w-full bg-slate-900 overflow-hidden">
                    <Image
                      src={advisor.image}
                      alt={advisor.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />
                    <div className="absolute bottom-4 left-5 right-5 text-white">
                      <h3 className="text-2xl font-serif font-bold tracking-tight text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                        {advisor.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-cyan-200 font-medium tracking-wide mt-1 drop-shadow-sm">
                        {advisor.business} · {advisor.city}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-4">
                    <div className="space-y-2">
                      <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#0062D2] px-2.5 py-0.5 rounded-md bg-blue-50 border border-blue-200/60">
                        ADVISORY FOCUS
                      </span>
                      <p className="text-sm sm:text-[15px] font-medium text-slate-800 leading-relaxed">
                        {advisor.focus}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100/80 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      <strong className="text-slate-950 font-bold">Background: </strong>
                      {advisor.experience}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. WHO BECOMES AN ADVISOR & WHAT IT GIVES ───────────────────── */}
      <section className="py-16 lg:py-20 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4 hover:shadow-md transition-shadow">
              <div className="size-12 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100 shadow-xs">
                <Users className="size-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 leading-snug tracking-tight">
                Who becomes an Advisor
              </h3>
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Entrepreneurs who have built and led something significant over decades, and who are at a stage where guiding matters more to them than operating.
              </p>
              <div className="p-3.5 rounded-xl bg-[#EFF6FF] border border-[#0062D2]/20 text-xs font-bold text-[#0062D2] tracking-wide inline-block">
                Advisors are invited, not appointed.
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4 hover:shadow-md transition-shadow">
              <div className="size-12 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100 shadow-xs">
                <Compass className="size-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 leading-snug tracking-tight">
                What it gives
              </h3>
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Experience that outlives your own company. Most business knowledge dies with the business that produced it. Thirty years of judgement, of mistakes paid for, of instincts about people and markets — almost all of it disappears when a founder steps back.
              </p>
              <p className="text-sm sm:text-base font-serif italic text-[#0062D2] font-semibold border-l-2 border-[#0062D2] pl-3.5">
                This is where yours keeps working.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. CLOSING CTA BANNER ───────────────────────────────────────── */}
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Institutional Memory. Enduring Standards.
          </h2>
          <p className="text-base sm:text-lg text-white/90 max-w-xl mx-auto font-light">
            Experience that guides a national movement of entrepreneurs building for decades.
          </p>
          <div className="pt-2">
            <Link
              href="/membership"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#0062D2] text-sm font-semibold hover:bg-slate-100 transition-all uppercase tracking-wider shadow-lg shadow-black/10 hover:scale-105"
            >
              <span>Explore Membership</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
