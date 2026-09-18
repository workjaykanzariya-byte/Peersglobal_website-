'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  Coins,
  ShieldCheck,
  TrendingUp,
  ShoppingBag,
  Sparkles,
  Lock,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Award,
  Layers,
  Smartphone,
  Clock,
} from 'lucide-react'

export function PeersCoinClient() {
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
          <span className="text-neutral-900 font-semibold">Peers Coin</span>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-[#EADFC7]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-[#8C6422]">
                <Coins className="w-3.5 h-3.5" />
                Community Token of Generosity
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#1A1A1A] tracking-tight leading-[1.08]">
                Peers Coin
              </h1>
              <p className="text-xl sm:text-2xl font-serif text-[#5B4834] italic leading-relaxed">
                Rewards for a more generous community. Give. Earn. Redeem. Repeat.
              </p>
              <p className="text-base sm:text-lg text-neutral-600 max-w-xl leading-relaxed">
                Earned by helping another entrepreneur. Redeemed in the Peers Global Marketplace.
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

            {/* Right Golden Peers Coin Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-[#D8C7A5] shadow-2xl bg-[#E8DDD0]">
                <Image
                  src="/images/culture-hero-desk.jpg"
                  alt="Golden embossed Peers Coin token on wooden desk"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 text-right font-serif italic text-white/95 text-base sm:text-lg drop-shadow-md">
                  Give More.<br />Earn More.<br />Do More.
                </div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] uppercase tracking-widest font-mono text-amber-200 border border-white/30">
                    Non-Fiat Social Credit
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── How You Earn It & What You Can Redeem ─── */}
      <section className="py-16 md:py-24 border-b border-[#EADFC7]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* How you earn it */}
            <div className="p-8 rounded-3xl bg-white border border-[#E8DFC9] shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <h2 className="text-2xl font-serif text-[#1A1A1A] font-bold">
                  How you earn it
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Every confirmed contribution earns Peers Coin alongside your Life Impact Score.
                </p>
                <div className="space-y-2.5 text-xs text-neutral-700">
                  <p>• An introduction that opens an export door</p>
                  <p>• A high-value customer referral that converts</p>
                  <p>• Practical operational knowledge shared</p>
                  <p>• A tested supplier or vendor connection</p>
                  <p>• A masterclass taught to the community</p>
                  <p>• An hour given to a Peer who needed advice</p>
                </div>
                <p className="text-xs font-semibold text-[#8C6422] p-3 rounded-xl bg-[#FAF5EB] border border-[#EADBBD]">
                  The more you give, the more you earn. There is no other route.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/how-to-earn-impact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800"
                >
                  See How to Earn Impact <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* What you can redeem */}
            <div className="p-8 rounded-3xl bg-white border border-[#E8DFC9] shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <h2 className="text-2xl font-serif text-[#1A1A1A] font-bold">
                  What you can redeem
                </h2>
                <div className="space-y-3.5 text-xs text-neutral-600">
                  <div className="p-3.5 rounded-2xl bg-[#FAF8F4] border border-[#EDE4D0]">
                    <strong className="block text-neutral-900 font-bold mb-0.5">
                      Entrepreneurial growth tools
                    </strong>
                    Courses, masterclasses, playbooks, financial templates and legal frameworks.
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#FAF8F4] border border-[#EDE4D0]">
                    <strong className="block text-neutral-900 font-bold mb-0.5">
                      Peers Global merchandise
                    </strong>
                    The official community range worn by Peers across cities and summits.
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#FAF8F4] border border-[#EDE4D0]">
                    <strong className="block text-neutral-900 font-bold mb-0.5">
                      Community experiences
                    </strong>
                    Conclave delegate passes, annual summit access, and private roundtables.
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/marketplace"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800"
                >
                  Visit the Marketplace <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Coins Cannot Be Purchased & Why It Exists ─── */}
      <section className="py-16 md:py-24 border-b border-[#EADFC7]/60 bg-[#FAF7F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Coins cannot be purchased */}
            <div className="p-8 rounded-3xl bg-white border border-[#E5DAC0] shadow-sm space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-red-600">
                <Lock className="w-3.5 h-3.5" /> Strictly Non-Purchasable
              </div>
              <h2 className="text-2xl font-serif text-[#1A1A1A] font-bold">
                Coins cannot be purchased
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                <p>
                  There is no way to buy your way into the Marketplace.
                </p>
                <p>
                  Every coin in this community was earned by helping another entrepreneur. Which means everything a Peer redeems is something they built through verified contribution.
                </p>
                <p className="text-sm font-serif italic text-neutral-900 font-medium">
                  A Peer&apos;s wallet is a record of what they gave.
                </p>
              </div>
            </div>

            {/* Why it exists */}
            <div className="p-8 rounded-3xl bg-white border border-[#E5DAC0] shadow-sm space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <h2 className="text-2xl font-serif text-[#1A1A1A] font-bold">
                  Why it exists
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Because generosity should not be a one-way street.
                </p>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Most communities ask entrepreneurs to give and offer goodwill in return. Goodwill is real, but over years it is not enough to sustain continuous giving. Peers Coin closes the loop.
                </p>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Not as payment — you were never giving to be paid. As acknowledgement that what you did had tangible value.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF5EB] border border-[#EADBBD] text-xs font-serif italic text-[#8C6422] text-center">
                &ldquo;A community that gives, grows — together.&rdquo;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── The Rules ─── */}
      <section className="py-16 md:py-24 border-b border-[#EADFC7]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A]">
              The Rules
            </h2>
            <p className="text-sm text-neutral-600">
              Clear boundaries protecting the integrity of the currency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="p-5 rounded-2xl bg-white border border-[#E8DFC9] flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div className="text-xs text-neutral-700">
                <strong className="block text-neutral-900 font-bold mb-0.5">Confirmed Contribution Only</strong>
                Earned strictly through verified peer collaboration logged in the Unity App.
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[#E8DFC9] flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div className="text-xs text-neutral-700">
                <strong className="block text-neutral-900 font-bold mb-0.5">Non-Transferable</strong>
                Cannot be purchased, traded, bartered or transferred between members.
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[#E8DFC9] flex items-start gap-3">
              <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-xs text-neutral-700">
                <strong className="block text-neutral-900 font-bold mb-0.5">Tied to Active Membership</strong>
                Coins expire when a subscription ends. They reflect an active contributing peer.
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[#E8DFC9] flex items-start gap-3">
              <Smartphone className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div className="text-xs text-neutral-700">
                <strong className="block text-neutral-900 font-bold mb-0.5">Live in Unity App</strong>
                Visible in your digital wallet, updating automatically with every confirmed win.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Closing Banner ─── */}
      <section className="relative bg-[#0D1117] text-white py-24 md:py-32 overflow-hidden border-t border-neutral-800">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="/images/who-we-are-mountain.jpg"
            alt="Mountain ridge horizon"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight">
            Build Your Business. Build Your Relationships. Build Your Circle.
          </h2>

          <div className="pt-2">
            <Link
              href="/unity"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#0D6EFD] text-white text-sm font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl uppercase tracking-wider"
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
