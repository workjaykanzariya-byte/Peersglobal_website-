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
    color: 'text-neutral-600 bg-neutral-100 border-neutral-200',
    desc: 'Getting started in the community. Learning the rhythm of contribution.',
  },
  {
    name: 'Contributor',
    badge: Sparkles,
    color: 'text-blue-600 bg-blue-50 border-blue-200',
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
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] font-sans selection:bg-[#E8DDD0] selection:text-[#1A1A1A]">
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-[#EADFC7]/50 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-neutral-500 font-medium">
          <Link href="/" className="hover:text-neutral-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span>The Currency</span>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span className="text-neutral-900 font-semibold">Peer Standing</span>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-[#EADFC7]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#1A1A1A] tracking-tight leading-[1.08]">
                Peer Standing
              </h1>
              <p className="text-xl sm:text-2xl font-serif text-[#5B4834] italic leading-relaxed">
                What the community recognises you for.
              </p>
              <p className="text-base sm:text-lg text-neutral-600 max-w-xl leading-relaxed">
                Earned through what you gave. Conferred by the people you gave it to.
              </p>

              <div className="pt-2">
                <Link
                  href="/unity"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#0D6EFD] text-white text-sm font-semibold hover:bg-blue-700 transition-all shadow-md"
                >
                  Download Unity App
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Golden Star Trophy Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-[#D8C7A5] shadow-2xl bg-[#E8DDD0]">
                <Image
                  src="/images/culture-hero-desk.jpg"
                  alt="Golden award star on wooden boardroom desk"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 text-right font-serif italic text-white/95 text-base sm:text-lg drop-shadow-md">
                  Respect Earned.<br />Not Given.
                </div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] uppercase tracking-widest font-mono text-amber-200 border border-white/30">
                    Social Equity Hierarchy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── The Closest Thing to Wealth ─── */}
      <section className="py-16 md:py-24 border-b border-[#EADFC7]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A7356] font-bold">
            <span className="w-6 h-[1.5px] bg-[#B88746]" />
            The True Measure
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A]">
            The closest thing to wealth in this community
          </h2>
          <div className="prose prose-lg text-[#3D352E] leading-relaxed font-normal space-y-5">
            <p className="text-lg sm:text-xl font-serif text-[#2B231B]">
              Money buys a subscription. It buys a seat, an app and the right to be in the room. It buys nothing else.
            </p>
            <p className="text-xl font-serif font-bold text-[#1A1A1A]">
              Standing — whether Peers open doors for you, whether your ask carries weight, whether you can lead — comes from a different currency entirely.
            </p>
            <p>
              It is earned by giving, and only other Peers can award it.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Standing Levels ─── */}
      <section className="py-16 md:py-24 border-b border-[#EADFC7]/60 bg-[#FAF7F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A]">
              Standing Levels
            </h2>
            <p className="text-sm text-neutral-600">
              As you contribute, your Peer Standing grows.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {STANDING_LEVELS.map((tier) => {
              const Icon = tier.badge
              return (
                <div
                  key={tier.name}
                  className="p-6 rounded-3xl bg-white border border-[#E5DAC0] shadow-sm text-center space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#FAF4E6] border border-[#EADBBD] flex items-center justify-center text-[#8C6422] mx-auto">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-serif font-bold text-neutral-900">
                        {tier.name}
                      </h3>
                      <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
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
      <section className="py-16 md:py-24 border-b border-[#EADFC7]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* What standing changes */}
            <div className="p-8 rounded-3xl bg-white border border-[#E8DFC9] shadow-sm space-y-6">
              <h2 className="text-2xl font-serif text-[#1A1A1A] font-bold">
                What standing changes
              </h2>
              <div className="space-y-3.5 text-xs sm:text-sm text-neutral-600">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-neutral-900 font-bold">Recognition across the community</strong>
                    Peers across Circles and cities see you are someone who gives. That reputation opens doors before you ask.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-neutral-900 font-bold">Access to leadership opportunities</strong>
                    Every leadership role follows contribution. Standing is what makes a Peer a candidate.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-neutral-900 font-bold">Priority consideration for initiatives</strong>
                    Special conclaves, overseas delegations and high-level working committees prioritize top-standing peers.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-neutral-900 font-bold">Greater visibility within Circles &amp; beyond</strong>
                    Brand showcase priority and featured editorial coverage across VyapaarJagat.
                  </div>
                </div>
              </div>
            </div>

            {/* What standing is not */}
            <div className="p-8 rounded-3xl bg-white border border-[#E8DFC9] shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <h2 className="text-2xl font-serif text-[#1A1A1A] font-bold">
                  What standing is not
                </h2>
                <div className="space-y-3.5 text-xs sm:text-sm text-neutral-600">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-neutral-900 font-bold">It is not a hierarchy of importance</strong>
                      Peers are not ordered against each other or treated as second-class.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-neutral-900 font-bold">It is not based on your business size</strong>
                      A micro-entrepreneur with huge generosity outranks a ₹100 Cr tycoon who only takes.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-neutral-900 font-bold">It cannot be bought</strong>
                      No sponsorship, donation or tier purchase produces standing.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-neutral-900 font-bold">It is not permanent</strong>
                      Standing reflects an active contributing member. It ends when membership does.
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF5EB] border border-[#EADBBD] text-xs font-serif italic text-[#8C6422] text-center">
                &ldquo;Standing is not given. It is earned, one contribution at a time.&rdquo;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Closing Banner — Royal Blue Theme (Preserving Exact Structure) ─── */}
      <section className="relative bg-[#0062D2] text-white py-24 md:py-32 overflow-hidden">
        {/* Subtle Geometric Orbital Line Art */}
        <div className="absolute -right-16 -top-20 bottom-0 pointer-events-none w-[420px] sm:w-[560px] lg:w-[680px] opacity-35 overflow-hidden flex items-center justify-center">
          <svg
            viewBox="0 0 600 600"
            fill="none"
            className="w-full h-full text-white/30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 50 450 A 420 420 0 0 1 550 50" stroke="currentColor" strokeWidth="1.2" />
            <path d="M 120 520 A 500 500 0 0 1 600 120" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
            <path d="M 220 580 A 460 460 0 0 1 580 220" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            <line x1="280" y1="220" x2="380" y2="120" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
            <circle cx="280" cy="220" r="4.5" fill="#7DD3FC" />
            <circle cx="280" cy="220" r="10" stroke="#7DD3FC" strokeWidth="1" opacity="0.4" />
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
