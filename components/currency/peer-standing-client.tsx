'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  Award,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Users,
  CheckCircle2,
  XCircle,
  Star,
  Zap,
  Crown,
  Compass,
} from 'lucide-react'

const STANDING_LEVELS = [
  {
    name: 'Explorer',
    badge: Compass,
    color: 'text-slate-600 bg-slate-100 border-slate-200',
    desc: 'Getting started in the community. Learning the rhythm of contribution.',
  },
  {
    name: 'Contributor',
    badge: Sparkles,
    color: 'text-[#0062D2] bg-blue-50 border-blue-200',
    desc: 'Active giver. Regularly logging verified referrals and peer support.',
  },
  {
    name: 'Catalyst',
    badge: Zap,
    color: 'text-amber-600 bg-amber-50 border-amber-200',
    desc: 'Creating meaningful impact. Saving peers months and millions through collaboration.',
  },
  {
    name: 'Leader',
    badge: Award,
    color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    desc: 'High, consistent contribution. Holding committee seats and mentoring peers.',
  },
  {
    name: 'Legend',
    badge: Crown,
    color: 'text-purple-600 bg-purple-50 border-purple-200',
    desc: 'Exceptional, long-term impact. Conferred by national leadership for systemic empowerment.',
  },
]

export function PeerStandingClient() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-slate-900">
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-slate-200/80 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/unity" className="hover:text-slate-900 transition-colors">
            Unity
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">Peer Standing</span>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-[#EFF6FF] via-[#F8FAFC] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100/80 text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                <Award className="w-3.5 h-3.5" />
                Community Recognition
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-slate-950 tracking-tight leading-[1.08]">
                Peer Standing
              </h1>
              <p className="text-xl sm:text-2xl font-serif text-[#0062D2] italic leading-relaxed font-normal">
                What the community recognises you for.
              </p>
              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                Earned through what you gave. Conferred by the people you gave it to.
              </p>

              <div className="pt-2">
                <Link
                  href="/unity"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#0062D2] text-white text-sm font-bold hover:bg-[#0052B4] transition-all shadow-md shadow-blue-500/20"
                >
                  Download Unity App
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Golden Star Trophy Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-slate-950">
                <Image
                  src="/images/culture-hero-desk.jpg"
                  alt="Golden award star on wooden boardroom desk"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 text-right font-serif italic text-white/95 text-base sm:text-lg drop-shadow-md">
                  Respect Earned.<br />Not Given.
                </div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] uppercase tracking-widest font-mono text-sky-200 border border-white/30">
                    Social Equity Hierarchy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── The Closest Thing to Wealth ─── */}
      <section className="py-16 md:py-24 border-b border-slate-200/80 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            The True Measure
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950">
            The closest thing to wealth in this community
          </h2>
          <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5">
            <p className="text-lg sm:text-xl font-serif text-slate-950 font-semibold">
              Money buys a subscription. It buys a seat, an app and the right to be in the room. It buys nothing else.
            </p>
            <p className="text-xl font-serif font-bold text-[#0062D2]">
              Standing — whether Peers open doors for you, whether your ask carries weight, whether you can lead — comes from a different currency entirely.
            </p>
            <p>
              It is earned by giving, and only other Peers can award it.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Standing Levels ─── */}
      <section className="py-16 md:py-24 border-b border-slate-200/80 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0062D2]">
              — ADVANCEMENT TIERS —
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950">
              Standing Levels
            </h2>
            <p className="text-sm text-slate-600">
              As you contribute, your Peer Standing grows.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {STANDING_LEVELS.map((tier) => {
              const Icon = tier.badge
              return (
                <div
                  key={tier.name}
                  className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm text-center space-y-3 flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0062D2] mx-auto">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-serif font-bold text-slate-950">
                        {tier.name}
                      </h3>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {tier.desc}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── What Standing Changes vs What Standing Is Not ─── */}
      <section className="py-16 md:py-24 border-b border-slate-200/80 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* What standing changes */}
            <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 shadow-sm space-y-6">
              <h2 className="text-2xl font-serif text-slate-950 font-bold">
                What standing changes
              </h2>
              <div className="space-y-3.5 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold">Recognition across the community</strong>
                    Peers across Circles and cities see you are someone who gives. That reputation opens doors before you ask.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold">Access to leadership opportunities</strong>
                    Every leadership role follows contribution. Standing is what makes a Peer a candidate.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold">Priority consideration for initiatives</strong>
                    Special conclaves, overseas delegations and high-level working committees prioritize top-standing peers.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold">Greater visibility within Circles &amp; beyond</strong>
                    Brand showcase priority and featured editorial coverage across VyapaarJagat.
                  </div>
                </div>
              </div>
            </div>

            {/* What standing is not */}
            <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <h2 className="text-2xl font-serif text-slate-950 font-bold">
                  What standing is not
                </h2>
                <div className="space-y-3.5 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-bold">It is not a hierarchy of importance</strong>
                      Peers are not ordered against each other or treated as second-class.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-bold">It is not based on your business size</strong>
                      A micro-entrepreneur with huge generosity outranks a ₹100 Cr tycoon who only takes.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-bold">It cannot be bought</strong>
                      No sponsorship, donation or tier purchase produces standing.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900 font-bold">It is not permanent</strong>
                      Standing reflects an active contributing member. It ends when membership does.
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs font-serif italic text-[#0062D2] text-center shadow-xs">
                &ldquo;Standing is not given. It is earned, one contribution at a time.&rdquo;
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

        {/* Subtle Geometric Orbital Line Art */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-[min(58vw,760px)] opacity-35">
          <svg
            viewBox="0 0 760 520"
            fill="none"
            className="h-full w-full"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M760 40C555 45 405 145 375 310C355 423 265 493 70 520" stroke="currentColor" strokeWidth="1" className="text-blue-300/30" />
            <path d="M760 120C590 125 470 205 445 335C424 442 335 500 180 520" stroke="currentColor" strokeWidth="1" strokeDasharray="5 8" className="text-sky-200/25" />
            <path d="M760 215C640 220 565 278 540 370C519 446 470 490 390 520" stroke="currentColor" strokeWidth="1" className="text-blue-200/20" />
            <circle cx="540" cy="370" r="4" fill="currentColor" className="text-sky-300/60" />
            <circle cx="540" cy="370" r="13" stroke="currentColor" strokeWidth="1" className="text-sky-300/25" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight leading-tight">
            The most valuable thing you can build here is a reputation for giving.
          </h2>

          <div className="pt-2">
            <Link
              href="/unity"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white hover:bg-blue-50 text-[#0062D2] text-sm font-bold shadow-lg hover:shadow-xl transition-all uppercase tracking-wider hover:scale-105 active:scale-95"
            >
              <span>Download Unity App</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
