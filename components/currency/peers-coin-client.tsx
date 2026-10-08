'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GalaxyButton } from '@/components/ui/galaxy-button'
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
  Ban,
  Check,
  Heart,
  Gift,
  AlertCircle,
  Users,
  Compass,
} from 'lucide-react'

// ─── Redemption Catalogue Items ──────────────────────────────────────────────
const REDEMPTION_CATALOGUE = [
  {
    category: 'Experiences',
    title: 'Annual Global Summit Delegate Pass',
    coins: '500 Coins',
    condition: 'Active Peer membership. Valid for any upcoming Annual Summit.',
    badge: 'Experience',
  },
  {
    category: 'Learning',
    title: 'Executive Masterclass Series',
    coins: '250 Coins',
    condition: 'Unlimited on-demand access to all practitioner masterclasses.',
    badge: 'Learning',
  },
  {
    category: 'Resources',
    title: 'Proprietary Scaling Playbooks & Legal Kits',
    coins: '150 Coins',
    condition: 'Instant digital download through Unity App.',
    badge: 'Resource',
  },
  {
    category: 'Community',
    title: 'Private Leadership Retreat Access',
    coins: '750 Coins',
    condition: 'Subject to Circle Director approval and seat availability.',
    badge: 'Community',
  },
]

// ─── What Peers Coin is NOT ──────────────────────────────────────────────────
const WHAT_IT_IS_NOT = [
  'Money',
  'A payment instrument',
  'An investment',
  'A financial asset',
  'Something that can be purchased',
  'Something that can be transferred to another person',
]

export function PeersCoinClient() {
  return (
    <div className="min-h-screen bg-[#FBFCFE] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-slate-200/80 bg-white/80 backdrop-blur-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-[#0062D2] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span>The Currency</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">Peers Coin</span>
        </div>
      </div>

      {/* ─── SECTION 1: HERO (PEERS COIN) ─── */}
      <section className="relative overflow-hidden bg-[#040F24] text-white pt-6 sm:pt-8 pb-12 sm:pb-16 border-b border-slate-800">
        {/* Full Bleed Hero Video Background & Overlay */}
        <div className="absolute inset-0 size-full overflow-hidden pointer-events-none">
          <video
            src="/videos/homepage-hero-bg.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(2,8,23,0.92)_0%,rgba(4,15,36,0.78)_45%,rgba(4,15,36,0.55)_100%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full min-h-[440px] lg:min-h-[480px]">
            {/* Left Content */}
            <div className="lg:col-span-12 max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur-sm uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
                <span>TOKEN OF RECOGNITION</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white">
                  Peers{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-rose-400">
                    Coin
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed">
                  The community gives back to those who give.
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                <div className="space-y-1 pl-3 border-l-2 border-blue-400 text-xs sm:text-sm text-slate-200 font-medium">
                  <p>Some contributions create an immediate result.</p>
                  <p>Some create a relationship.</p>
                  <p>Some help another Peer.</p>
                  <p>Some strengthen the community itself.</p>
                </div>

                <p>
                  Peers Coin is one way PEERS GLOBAL recognises that spirit of contribution.
                </p>
                <p className="italic text-slate-200 font-medium text-xs sm:text-sm">
                  Not because everything meaningful should have a price. But because giving deserves to be noticed.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <GalaxyButton
                  href="/how-to-earn-impact"
                  variant="primary"
                  size="md"
                >
                  Discover the Impact System
                </GalaxyButton>

                <GalaxyButton
                  href="/marketplace"
                  variant="transparent"
                  size="md"
                >
                  Explore the Marketplace
                </GalaxyButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: HOW YOU EARN IT & WHAT YOU CAN REDEEM ──────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            
            {/* Box 1: HOW YOU EARN IT */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FBFCFE] border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100">
                  <Coins className="w-5 h-5" />
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                    <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                      CONTRIBUTION CYCLE
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 mt-1">
                    HOW YOU EARN IT
                  </h2>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  <p>
                    Peers Coin is connected to participation and contribution within the PEERS GLOBAL ecosystem.
                  </p>
                  <p>
                    When you contribute in ways recognised by the community, you may earn Peers Coin according to the applicable earning rules.
                  </p>

                  <div className="p-4 rounded-2xl bg-white border border-blue-200 shadow-2xs text-center font-serif text-sm font-bold text-slate-900">
                    The principle is simple:
                    <br />
                    <span className="text-[#0062D2] tracking-wide uppercase text-xs font-sans font-bold">
                      Give. Contribute. Participate. Be recognised.
                    </span>
                  </div>

                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                      What earns Peers Coin?
                    </span>
                    <div className="space-y-1.5 text-xs text-slate-700">
                      <p className="p-2.5 rounded-xl bg-white border border-slate-200">• An introduction that opens an export or commercial door</p>
                      <p className="p-2.5 rounded-xl bg-white border border-slate-200">• A high-value customer or strategic referral</p>
                      <p className="p-2.5 rounded-xl bg-white border border-slate-200">• Practical operational knowledge & masterclass taught</p>
                      <p className="p-2.5 rounded-xl bg-white border border-slate-200">• An hour of mentorship given to a Peer in need</p>
                      <p className="p-2.5 rounded-xl bg-white border border-slate-200">• Circle leadership & ecosystem growth support</p>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-500 italic pt-1">
                    [Final earning categories and rates are determined by PEERS GLOBAL and may evolve as the programme grows.]
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 text-xs font-semibold text-[#0062D2]">
                <Link href="/how-to-earn-impact" className="inline-flex items-center gap-1 hover:text-[#0052B4]">
                  <span>Discover the Impact System →</span>
                </Link>
              </div>
            </div>

            {/* Box 2: WHAT YOU CAN REDEEM */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FBFCFE] border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center border border-purple-100">
                  <ShoppingBag className="w-5 h-5" />
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                    <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                      THE MARKETPLACE
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 mt-1">
                    WHAT YOU CAN REDEEM
                  </h2>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  <p>
                    Peers Coin can be used for eligible offerings made available through the PEERS GLOBAL community. These may include experiences, learning opportunities, resources or other eligible community offerings.
                  </p>

                  {/* 4 Items Preview Grid */}
                  <div className="space-y-2.5 pt-1">
                    {REDEMPTION_CATALOGUE.map((item) => (
                      <div
                        key={item.title}
                        className="p-3 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-center justify-between gap-3"
                      >
                        <div className="space-y-0.5">
                          <span className="text-[10px] uppercase tracking-wider font-bold text-[#0062D2]">
                            {item.category}
                          </span>
                          <h4 className="text-xs font-bold text-slate-900 leading-snug">
                            {item.title}
                          </h4>
                          <p className="text-[11px] text-slate-500 line-clamp-1">
                            {item.condition}
                          </p>
                        </div>
                        <span className="shrink-0 px-2.5 py-1 rounded-full bg-blue-50 text-[#0062D2] border border-blue-200 text-xs font-bold font-mono">
                          {item.coins}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600">
                    <strong className="text-slate-800 font-semibold block mb-0.5">The Redemption Experience:</strong>
                    Contribute → Earn → Redeem → Experience
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 text-xs font-semibold text-purple-700">
                <Link href="/marketplace" className="inline-flex items-center gap-1 hover:text-purple-900">
                  <span>Explore the Marketplace →</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 3: COINS CANNOT BE PURCHASED ──────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#FBFCFE] border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-white border-2 border-rose-200/80 shadow-md space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-xs font-bold text-rose-600 uppercase tracking-wider">
              <Lock className="w-3.5 h-3.5" /> FUNDAMENTAL BOUNDARY
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 leading-tight">
              COINS CANNOT BE PURCHASED
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-light">
              <p className="text-base sm:text-lg font-serif italic text-slate-900 font-medium">
                This is fundamental. Peers Coin cannot be purchased.
              </p>
              <p>
                It is not something you buy in order to participate. It is something you earn through recognised contribution.
              </p>
              <p>
                That distinction protects the meaning behind the system.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-semibold text-slate-800">
                <div className="p-3.5 rounded-2xl bg-rose-50/50 border border-rose-100 flex items-center gap-2">
                  <Ban className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>You cannot buy your way into recognition.</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-rose-50/50 border border-rose-100 flex items-center gap-2">
                  <Ban className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>You cannot purchase contribution.</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-rose-50/50 border border-rose-100 flex items-center gap-2">
                  <Ban className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>You cannot buy respect from giving.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── SECTION 4: WHY IT EXISTS & THE PEERS COIN PRINCIPLE ───────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: WHY IT EXISTS */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    ANOTHER LANGUAGE OF APPRECIATION
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-1 leading-tight">
                  WHY IT EXISTS
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                <p>
                  A community becomes stronger when contribution becomes visible.
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-800">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">• People give their time</div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">• They share knowledge</div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">• They make introductions</div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">• They help another entrepreneur</div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">• They teach & participate</div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">• They create opportunities</div>
                </div>

                <p>
                  Much of that contribution cannot — and should not — be reduced to a financial transaction.
                </p>
                <p>
                  Peers Coin is a way of creating another language of appreciation:
                </p>

                <div className="space-y-2 text-xs font-bold text-slate-900 border-l-2 border-[#0062D2] pl-3">
                  <p>• Not payment. Recognition.</p>
                  <p>• Not a price. Acknowledgement.</p>
                  <p>• Not competition for wealth. A culture of contribution.</p>
                </div>
              </div>
            </div>

            {/* Right: THE PEERS COIN PRINCIPLE */}
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#040E24] via-[#061836] to-[#0A2558] text-white shadow-xl space-y-6">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-sky-300 flex items-center justify-center border border-white/20">
                  <Heart className="w-5 h-5" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-snug">
                  THE PEERS COIN PRINCIPLE
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  The most important thing about Peers Coin is not the coin. It is the behaviour behind it.
                </p>

                <div className="p-5 rounded-2xl bg-white/10 border border-white/20 space-y-2">
                  <p className="text-xs text-sky-200 uppercase tracking-widest font-mono font-bold">
                    A HEALTHY COMMUNITY
                  </p>
                  <p className="text-sm font-serif italic text-white leading-relaxed">
                    "A healthy community should make it easier for people to ask: <span className="text-sky-300 font-bold">&lsquo;What can I contribute?&rsquo;</span> before asking: <span className="text-sky-300 font-bold">&lsquo;What can I get?&rsquo;</span>"
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  That is the <strong>Give-First spirit</strong>. Peers Coin simply gives that spirit a visible expression within the community.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 5: THE RULES & WHAT PEERS COIN IS NOT ──────────────────── */}
      <section className="py-16 sm:py-24 bg-[#FBFCFE] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Left: THE RULES */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-950">
                  THE RULES
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  Peers Coin operates according to rules established by PEERS GLOBAL. The rules cover matters including:
                </p>
                <div className="space-y-2 text-xs font-medium text-slate-700">
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>How Peers Coin is earned</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Eligible contributions & verified activities</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Earning rates & Life Impact scoring</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Redemption eligibility & marketplace values</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Validity or applicable conditions</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Changes to earning or redemption rules</span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 italic pt-1">
                  The programme should always be understood according to the rules currently published by PEERS GLOBAL.
                </p>
              </div>
            </div>

            {/* Right: WHAT PEERS COIN IS NOT */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100">
                  <Ban className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-950">
                  WHAT PEERS COIN IS NOT
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  Peers Coin is strictly non-financial and holds no fiat conversion:
                </p>
                <div className="space-y-2 text-xs font-medium text-slate-800">
                  {WHAT_IT_IS_NOT.map((item) => (
                    <div key={item} className="flex items-center gap-2 p-2.5 rounded-xl bg-rose-50/40 border border-rose-100">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-700 font-semibold pt-1">
                  And it should never be described as a wallet or a balance. Its value is in the contribution it recognises and the community experiences it can unlock.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 6: MANDATORY DISCLAIMER ───────────────────────────────── */}
      <section className="py-8 bg-slate-100 border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-600">
            <AlertCircle className="w-4 h-4 text-amber-600" />
            <span>MANDATORY DISCLAIMER</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Peers Coin holds no monetary value, cannot be exchanged for money, and cannot be transferred. Earning rates and redemption values are determined by Peers Global and may change.
          </p>
        </div>
      </section>

      {/* ─── SECTION 7: CLOSING BANNER (GIVE FIRST. LET THE COMMUNITY GIVE BACK.) ── */}
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white py-20 lg:py-28 border-t border-slate-800">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(0,98,210,0.18),transparent_50%),radial-gradient(circle_at_82%_12%,rgba(99,102,241,0.15),transparent_50%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-blue-600/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-rose-500/10 blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Manifesto & CTAs */}
            <div className="lg:col-span-8 flex flex-col items-start space-y-5">
              <div className="inline-flex items-center gap-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-sky-400 to-rose-400 rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-sky-400">
                  CONTRIBUTE. EARN. EXPERIENCE.
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight">
                Give first. Let the{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-rose-400">
                  community give back.
                </span>
              </h2>

              <div className="space-y-3 text-sm sm:text-base text-slate-200 font-light leading-relaxed max-w-2xl">
                <p>
                  The most valuable thing you can contribute to a community is not a coin. It is yourself.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 py-1 text-xs sm:text-sm font-medium text-slate-300">
                  <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-sky-400" />
                    <span>Your Experience</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-sky-400" />
                    <span>Your Introduction</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-sky-400" />
                    <span>Your Knowledge</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-sky-400" />
                    <span>Your Mentorship</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-sky-400" />
                    <span>Your Attention</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-sky-400" />
                    <span>Your Service</span>
                  </div>
                </div>
                <p className="text-slate-300 italic text-xs sm:text-sm pt-1">
                  Peers Coin is simply one way the community says: We noticed. We appreciate it. Thank you for giving.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <GalaxyButton
                  href="/how-to-earn-impact"
                  variant="primary"
                  size="md"
                >
                  Discover Impact System
                </GalaxyButton>

                <GalaxyButton
                  href="/marketplace"
                  variant="transparent"
                  size="md"
                >
                  Explore Marketplace
                </GalaxyButton>
              </div>
            </div>

            {/* Right Column: Signature Accents */}
            <div className="lg:col-span-4 text-left lg:text-right select-none pointer-events-none drop-shadow-lg space-y-1.5">
              <p className="text-xl sm:text-2xl text-slate-300 font-medium leading-tight">
                Contribute Freely.
              </p>
              <p className="text-xl sm:text-2xl text-slate-200 font-medium leading-tight">
                Earn Recognition.
              </p>
              <p className="text-xl sm:text-2xl text-white font-medium leading-tight">
                Redeem Value.
              </p>
              <p className="text-2xl sm:text-3xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-rose-400">
                Experience Community.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
