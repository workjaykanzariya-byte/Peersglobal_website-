'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  Sparkles,
  Smartphone,
  ShieldCheck,
  TrendingUp,
  Award,
  Users,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Layers,
  HeartHandshake,
} from 'lucide-react'

export function LifeImpactScoreClient() {
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
          <span className="text-slate-900 font-semibold">Life Impact Score</span>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-slate-200/80 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#0062D2]/20 text-xs font-semibold text-[#0062D2]">
                <Sparkles className="w-3.5 h-3.5" />
                Verified Relational Currency
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-slate-950 tracking-tight leading-[1.08]">
                Life Impact Score
              </h1>
              <p className="text-xl sm:text-2xl font-serif text-slate-700 italic leading-relaxed">
                The record of what you have given.
              </p>
              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                Logged as it happens. Confirmed by the person you helped.
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

            {/* Right Phone Visual with 2,850 Life Impact Score */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-72 sm:w-80 rounded-[40px] p-4 bg-slate-900 border-4 border-slate-700 shadow-2xl">
                {/* Phone screen content */}
                <div className="rounded-[32px] bg-[#0A1128] text-white p-6 space-y-6 overflow-hidden relative">
                  <div className="flex justify-between items-center text-xs text-slate-400">
                    <span>Peers Unity</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>

                  <div className="text-center py-4 space-y-1">
                    <span className="text-[11px] uppercase tracking-widest font-mono text-blue-300">
                      Life Impact Score
                    </span>
                    <div className="text-4xl sm:text-5xl font-mono font-bold text-white tracking-tight">
                      2,850
                    </div>
                    <span className="text-xs text-emerald-400 font-medium">
                      +150 this month • Top 5% Peer
                    </span>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-white/10 text-xs">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                      <span>Recent Confirmation</span>
                      <span className="font-mono text-blue-300 font-bold">+100 pts</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                      <span>Peer Standing</span>
                      <span className="text-blue-300 font-semibold">Catalyst</span>
                    </div>
                  </div>
                </div>

                {/* Calligraphy label */}
                <div className="absolute -bottom-5 -right-6 font-serif italic text-[#0062D2] text-sm bg-white px-4 py-1.5 rounded-full border border-slate-200 shadow-md hidden sm:block">
                  Give. Support. Create Impact.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What It Is ─── */}
      <section className="py-16 md:py-24 border-b border-slate-200/80 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            The Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-950 font-bold">
            What it is
          </h2>
          <div className="prose prose-lg text-slate-600 leading-relaxed font-normal space-y-5">
            <p className="text-lg sm:text-xl font-serif text-slate-800">
              Every time you help another entrepreneur in this community, it can be recorded.
            </p>
            <p>
              An introduction that opened a door. A referral that converted. Knowledge that saved someone eighteen months. A vendor you had already tested. An hour with a Peer going through a difficult month.
            </p>
            <p className="text-xl font-serif font-bold text-slate-950">
              Each one is logged in the Unity App, confirmed by the Peer who received it, and added to your Life Impact Score.
            </p>
            <p>
              Over a year it becomes a complete record of what you contributed — not what you claimed, not what you intended, but what other entrepreneurs confirmed you did for them.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Why We Measure It vs What It Is Not ─── */}
      <section className="py-16 md:py-24 border-b border-slate-200/80 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Why we measure it */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6">
              <h2 className="text-2xl font-serif text-slate-950 font-bold">
                Why we measure it
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  <strong className="text-slate-900">Because contribution that goes unseen slowly stops happening.</strong> Not because people become selfish. Because effort without acknowledgement quietly fades, and a room where nobody notices who gives eventually becomes a room where fewer people do.
                </p>
                <p>
                  <strong className="text-slate-900">And because a community outgrows memory.</strong> In a room of thirty, everyone knows who gives. Across thousands of entrepreneurs in many cities, nobody would — unless it is recorded.
                </p>
                <div className="p-4 rounded-2xl bg-[#EFF6FF] border border-[#0062D2]/20 text-xs font-semibold text-[#0062D2]">
                  The score exists so that generosity remains visible at scale.
                </div>
              </div>
            </div>

            {/* What it is not */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6">
              <h2 className="text-2xl font-serif text-slate-950 font-bold">
                What it is not
              </h2>
              <div className="space-y-3.5 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold">It is not a leaderboard</strong>
                    Peers are not ranked against each other, and nobody is publicly compared.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold">It is not attendance</strong>
                    Showing up is the entry fee. Contribution is what counts.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold">It is not permanent</strong>
                    Your score reflects an active, contributing member. It ends when membership does.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold">It cannot be bought</strong>
                    No subscription level, no payment and no seniority produces a single point.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What It Becomes ─── */}
      <section className="py-16 md:py-24 border-b border-slate-200/80 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-950 font-bold">
              What it becomes
            </h2>
            <p className="text-sm text-slate-600">
              Your Life Impact Score is the foundation of everything else in the community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062D2] border border-blue-200 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-950">
                Peer Standing
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The recognition and access you hold across the national community. Higher standing unlocks broader network reach.
              </p>
              <Link
                href="/peer-standing"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#0062D2] hover:text-[#0052B4] pt-2"
              >
                Understand Peer Standing <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-950">
                Peers Coin
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Rewards you can redeem in the Marketplace for growth masterclasses, tools and summit passes.
              </p>
              <Link
                href="/peers-coin"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#0062D2] hover:text-[#0052B4] pt-2"
              >
                See Peers Coin <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 border border-purple-200 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-950">
                Leadership Eligibility
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every role here follows contribution. From Committee Chair to Circle Director, your score proves your commitment.
              </p>
              <Link
                href="/circle-roles"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#0062D2] hover:text-[#0052B4] pt-2"
              >
                See Leadership Roles <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Where You See It (Unity App) ─── */}
      <section className="py-16 md:py-24 border-b border-slate-200/80 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-14 h-14 rounded-full bg-[#EFF6FF] border border-[#0062D2]/20 flex items-center justify-center text-[#0062D2] mx-auto">
            <Smartphone className="w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 tracking-tight">
            Where you see it
          </h2>
          <p className="text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            In the Unity App. Live, updating as contributions are confirmed, visible to you and the community.
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
      </section>

      {/* ─── Closing Banner ─── */}
      <section className="relative bg-[#040E24] text-white py-20 md:py-28 overflow-hidden border-t border-slate-800">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/who-we-are-mountain.jpg"
            alt="Mountain ridge horizon"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040E24] via-[#040E24]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Build Your Business. Build Your Relationships. Build Your Circle.
          </h2>
          <p className="font-serif italic text-blue-200 text-base sm:text-lg">
            People. Progress. Together.
          </p>

          <div className="pt-2">
            <Link
              href="/unity"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white text-xs sm:text-sm font-bold shadow-[0_4px_20px_rgba(0,98,210,0.35)] transition-all uppercase tracking-wider active:scale-95"
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
