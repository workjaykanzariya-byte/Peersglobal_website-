'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  Sparkles,
  TrendingUp,
  HeartHandshake,
  Users,
  Lightbulb,
  Building2,
  DollarSign,
  Megaphone,
  Heart,
  Wrench,
  CheckCircle2,
  XCircle,
  Award,
} from 'lucide-react'

const TEN_WAYS = [
  { num: '01', title: 'Business Referral', desc: 'A referral you gave that produced business', icon: TrendingUp },
  { num: '02', title: 'Mentorship', desc: 'Sustained guidance to another Peer', icon: Users },
  { num: '03', title: 'Joint Venture', desc: 'Something built together', icon: Building2 },
  { num: '04', title: 'Knowledge Sharing', desc: 'Experience shared that saved someone time or money', icon: Lightbulb },
  { num: '05', title: 'Problem Solving', desc: 'Thinking through a decision with a Peer', icon: HeartHandshake },
  { num: '06', title: 'Vendor Connect', desc: 'A tested supplier or partner introduced', icon: Wrench },
  { num: '07', title: 'Funding Access', desc: 'An introduction to capital', icon: DollarSign },
  { num: '08', title: 'Visibility & PR', desc: 'A platform, feature or stage given to a Peer', icon: Megaphone },
  { num: '09', title: 'Emotional Support', desc: 'Standing by an entrepreneur when it mattered', icon: Heart },
  { num: '10', title: 'Execution Support', desc: 'Hands, capacity or accountability to get something done', icon: Award },
]

export function HowToEarnImpactClient() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#EFF6FF] selection:text-[#0062D2]">
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span>The Currency</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">How to Earn Impact</span>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-slate-200/80 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-slate-950 tracking-tight leading-[1.08]">
                How to Earn Impact
              </h1>
              <p className="text-xl sm:text-2xl font-serif text-slate-700 italic leading-relaxed">
                Ten ways to give. Every one of them counts.
              </p>
              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                Impact is not an abstraction. It is earned through specific, verified acts of contribution that move another business forward.
              </p>

              <div className="pt-2">
                <Link
                  href="/unity"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white text-sm font-bold shadow-[0_4px_14px_rgba(0,98,210,0.25)] hover:shadow-[0_6px_18px_rgba(0,98,210,0.35)] transition-all active:scale-95"
                >
                  <span>Download Unity App</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Sprouting Seedling Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-slate-200 shadow-2xl bg-slate-100">
                <Image
                  src="/images/founder-earth-showcase.jpg"
                  alt="Hands holding a growing seedling in soil"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 text-right font-serif italic text-white/95 text-base sm:text-lg drop-shadow-md">
                  Small Actions.<br />Bigger Impact.
                </div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] uppercase tracking-widest font-mono text-blue-200 border border-white/30">
                    Contribution Multipliers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Impact Follows the Ten Ways ─── */}
      <section className="py-16 md:py-24 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-950 font-bold">
              Impact follows the ten Ways
            </h2>
            <p className="text-sm text-slate-600">
              Every contribution recorded here falls into one of the ten defined Ways of Collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {TEN_WAYS.map((way) => {
              const Icon = way.icon
              return (
                <div
                  key={way.num}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3 hover:border-[#0062D2] transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="w-8 h-8 rounded-full bg-[#EFF6FF] border border-[#0062D2]/20 text-[#0062D2] font-mono font-bold text-xs flex items-center justify-center">
                        {way.num}
                      </span>
                      <Icon className="w-4 h-4 text-slate-400" />
                    </div>
                    <h3 className="font-serif font-bold text-sm text-slate-900 leading-tight">
                      {way.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {way.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center pt-2">
            <Link
              href="/10-ways-of-collaboration"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0062D2] hover:text-[#0052B4] uppercase tracking-wider"
            >
              See the 10 Ways in Full <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Contribution Beyond Collaboration & What Does Not Count ─── */}
      <section className="py-16 md:py-24 border-b border-slate-200/80 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: Contribution beyond collaboration */}
            <div className="lg:col-span-6 p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6">
              <h2 className="text-2xl font-serif text-slate-950 font-bold">
                Contribution beyond collaboration
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
                  <strong className="block text-slate-900 font-bold mb-0.5">
                    Teaching a masterclass
                  </strong>
                  Sharing what you know with a room of peers on operations, finance, or hiring.
                </div>
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
                  <strong className="block text-slate-900 font-bold mb-0.5">
                    Serving on a committee
                  </strong>
                  Holding an active leadership role as Chair or Leader in your Circle.
                </div>
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
                  <strong className="block text-slate-900 font-bold mb-0.5">
                    Leading an ecosystem
                  </strong>
                  Founding a Circle, directing one, carrying an industry or territory.
                </div>
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/80">
                  <strong className="block text-slate-900 font-bold mb-0.5">
                    Bringing the right entrepreneur in
                  </strong>
                  Introducing a high-calibre peer who genuinely strengthens the community.
                </div>
              </div>
            </div>

            {/* Right: What does not earn impact */}
            <div className="lg:col-span-6 p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <h2 className="text-2xl font-serif text-slate-950 font-bold">
                  What does not earn impact
                </h2>
                <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                  <div className="p-4 rounded-2xl bg-red-50/70 border border-red-100 flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-red-950 font-bold mb-0.5">Attendance</strong>
                      Being in the room is the entry condition, not the contribution.
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-red-50/70 border border-red-100 flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-red-950 font-bold mb-0.5">Intent</strong>
                      What you offered but nobody took up carries no verified impact score.
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-red-50/70 border border-red-100 flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-red-950 font-bold mb-0.5">Self-declared value</strong>
                      Anything the receiving Peer has not confirmed in the Unity App counts for zero.
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#EFF6FF] border border-[#0062D2]/20 text-xs font-serif italic text-[#0062D2] text-center">
                &ldquo;The more you give, the more you grow.&rdquo;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Closing Banner ─── */}
      <section className="relative bg-[#0062D2] text-white py-20 md:py-28 overflow-hidden">
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

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Build Your Business. Build Your Relationships. Build Your Circle.
          </h2>
          <div className="pt-2">
            <Link
              href="/unity"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-[#0062D2] text-xs sm:text-sm font-bold shadow-lg shadow-black/10 transition-all uppercase tracking-wider active:scale-95"
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
