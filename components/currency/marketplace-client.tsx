'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  ShoppingBag,
  Coins,
  ShieldCheck,
  Sparkles,
  BookOpen,
  GraduationCap,
  Ticket,
  Briefcase,
  Gift,
  CheckCircle2,
  Lock,
  ExternalLink,
  Smartphone,
  Tag,
  ArrowUpRight,
} from 'lucide-react'

type CategoryType = 'all' | 'growth-tools' | 'learning' | 'experiences' | 'business-resources' | 'merchandise'

interface MarketplaceItem {
  id: string
  title: string
  category: CategoryType
  categoryLabel: string
  coinPrice: number
  description: string
  badge?: string
  highlights: string[]
}

const CATALOGUE_ITEMS: MarketplaceItem[] = [
  // Growth Tools
  {
    id: 'gt-1',
    title: 'The 10-Way Cross-Border JV Playbook',
    category: 'growth-tools',
    categoryLabel: 'Growth Tools',
    coinPrice: 80,
    badge: 'Popular',
    description: 'Comprehensive legal, financial and operational framework for executing joint ventures across Indian states and overseas markets.',
    highlights: ['Draft JV Agreements', 'Profit Share Models', 'Peer Case Studies'],
  },
  {
    id: 'gt-2',
    title: 'Enterprise Cash-Flow & Working Capital Suite',
    category: 'growth-tools',
    categoryLabel: 'Growth Tools',
    coinPrice: 60,
    description: 'Battle-tested financial modeling spreadsheets, debt-restructuring templates, and cash-flow forecasting tools used by 8-figure founders.',
    highlights: ['Dynamic Excel Models', 'Cash Runway Planner', 'Banking Pitch Deck'],
  },
  {
    id: 'gt-3',
    title: 'B2B Sales Organization & Hiring Architecture',
    category: 'growth-tools',
    categoryLabel: 'Growth Tools',
    coinPrice: 75,
    description: 'The exact interview rubrics, compensation structures, and 90-day onboarding checklists for hiring senior enterprise sales leaders.',
    highlights: ['Hiring Scorecards', 'Commission Calculators', 'KPI Dashboards'],
  },

  // Learning
  {
    id: 'ln-1',
    title: 'Scaling from ₹5Cr to ₹25Cr Masterclass',
    category: 'learning',
    categoryLabel: 'Learning',
    coinPrice: 120,
    badge: 'Masterclass',
    description: 'Four intensive weekend sessions taught by veteran Peers who scaled multi-crore enterprises without outside venture capital.',
    highlights: ['4 Live Weekend Cohorts', 'Direct Peer Q&A', 'Certification in Unity'],
  },
  {
    id: 'ln-2',
    title: 'Circle Leadership & Governance Sprint',
    category: 'learning',
    categoryLabel: 'Learning',
    coinPrice: 150,
    description: 'Deep dive into orchestrating high-trust room dynamics, resolving category conflict, and maximizing circle collaborative output.',
    highlights: ['Circle Director Guidebook', 'Conflict Resolution Playbook', 'Leadership Credential'],
  },
  {
    id: 'ln-3',
    title: 'Global Export Compliance & Supply Chain Workshop',
    category: 'learning',
    categoryLabel: 'Learning',
    coinPrice: 100,
    description: 'Step-by-step masterclass on customs clearance, FTA certifications, foreign currency hedging, and freight negotiation.',
    highlights: ['Customs Documentation Kit', 'Export Subsidies Guide', 'Vetted Freight Directory'],
  },

  // Experiences
  {
    id: 'ex-1',
    title: 'Annual Peers Global Summit VIP Delegate Pass',
    category: 'experiences',
    categoryLabel: 'Experiences',
    coinPrice: 400,
    badge: 'Flagship Event',
    description: 'Full 3-day access to the annual flagship summit, closed-door industry roundtables, private networking lounges, and the gala dinner.',
    highlights: ['All-Access Summit Badge', 'Private CEO Lounge', 'Gala Dinner & Awards'],
  },
  {
    id: 'ex-2',
    title: "Founder's Closed-Door Dinner Invitation",
    category: 'experiences',
    categoryLabel: 'Experiences',
    coinPrice: 500,
    badge: 'Exclusive',
    description: 'An intimate 12-seat private dinner hosted with Dr. Pravin Parmar and senior regional leaders for in-depth strategic conversations.',
    highlights: ['12-Seat Curated Room', 'Chatham House Rules', 'Direct Strategic Feedback'],
  },
  {
    id: 'ex-3',
    title: 'Regional Conclave Master Delegate Seat',
    category: 'experiences',
    categoryLabel: 'Experiences',
    coinPrice: 250,
    description: 'Reserved priority seat at your territorial Conclave featuring keynote insights, cross-circle pitching, and government trade liaisons.',
    highlights: ['Priority Reserved Seating', 'B2B Matchmaking Session', 'Conclave Directory Access'],
  },

  // Business Resources
  {
    id: 'br-1',
    title: 'Commercial IP & Trademark Protection Kit',
    category: 'business-resources',
    categoryLabel: 'Business Resources',
    coinPrice: 90,
    description: 'Vetted filing templates, cease-and-desist protocols, and proprietary brand safety checklists reviewed by top corporate IP counsel.',
    highlights: ['Trademark Audit Checklist', 'Trade Secret Clauses', 'Legal Advisory Credit'],
  },
  {
    id: 'br-2',
    title: 'ISO & Quality Audit Readiness Package',
    category: 'business-resources',
    categoryLabel: 'Business Resources',
    coinPrice: 85,
    description: 'Standard operating procedure blueprints, safety registers, and audit pre-check manuals for ISO 9001 and 27001 certifications.',
    highlights: ['SOP Templates', 'Internal Audit Checklists', 'Vendor Assessment Forms'],
  },
  {
    id: 'br-3',
    title: 'MSME Institutional Credit & Subsidy Dossier',
    category: 'business-resources',
    categoryLabel: 'Business Resources',
    coinPrice: 110,
    badge: 'High Value',
    description: 'Complete breakdown of active central and state subsidies, CGTMSE schemes, and collateral-free loan documentation frameworks.',
    highlights: ['State-wise Subsidy Map', 'CGTMSE Application Kit', 'Bank Presentation Format'],
  },

  // Merchandise
  {
    id: 'mc-1',
    title: 'The Official Heritage Blazer Lapel Pin',
    category: 'merchandise',
    categoryLabel: 'Merchandise',
    coinPrice: 45,
    description: 'Cast in brushed gold antique finish, featuring the iconic Peers Global seal. The mark of an active contributing Citizen.',
    highlights: ['Cast Brass & Gold Finish', 'Velvet Presentation Box', 'Shipped to Doorstep'],
  },
  {
    id: 'mc-2',
    title: 'Signature Monogrammed Leather Organizer',
    category: 'merchandise',
    categoryLabel: 'Merchandise',
    coinPrice: 130,
    badge: 'Crafted',
    description: 'Handcrafted full-grain leather meeting folio debossed with your name and Circle category. Designed for high-stakes meetings.',
    highlights: ['Full-Grain Indian Leather', 'Custom Debossed Name', 'A5 Refillable Pad'],
  },
  {
    id: 'mc-3',
    title: 'Peers Citizen Commemorative Coin Set',
    category: 'merchandise',
    categoryLabel: 'Merchandise',
    coinPrice: 180,
    description: 'Heavyweight collector coin struck in pure bronze and polished gold alloy, celebrating the founding principles of Give-First.',
    highlights: ['Individually Numbered', 'Acrylic Display Stand', 'Certificate of Citizenship'],
  },
]

export function MarketplaceClient() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all')

  const filteredItems =
    selectedCategory === 'all'
      ? CATALOGUE_ITEMS
      : CATALOGUE_ITEMS.filter((item) => item.category === selectedCategory)

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
          <span className="text-slate-900 font-semibold">Peers Global Marketplace</span>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-slate-200/80 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#0062D2]/20 text-xs font-semibold text-[#0062D2]">
                <ShoppingBag className="w-3.5 h-3.5" />
                Redeem with Peers Coin • Earned, Never Bought
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-slate-950 tracking-tight leading-[1.08]">
                The Marketplace
              </h1>
              <p className="text-xl sm:text-2xl font-serif text-slate-700 italic leading-relaxed">
                Where what you gave becomes something you can use.
              </p>
              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                Redeem your Peers Coin. Everything here was earned by helping another entrepreneur in the community.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/unity"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white text-xs sm:text-sm font-bold shadow-[0_4px_14px_rgba(0,98,210,0.25)] hover:shadow-[0_6px_18px_rgba(0,98,210,0.35)] transition-all active:scale-95 uppercase tracking-wider"
                >
                  <span>Download Unity App</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/peers-coin"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-slate-200/90 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 shadow-xs transition-all"
                >
                  <Coins className="w-4 h-4 text-[#0062D2]" />
                  <span>See Peers Coin</span>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200/80">
                <div>
                  <span className="block text-2xl font-bold font-serif text-slate-950">100%</span>
                  <span className="text-xs text-slate-500">Contribution-backed</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold font-serif text-[#0062D2]">0₹</span>
                  <span className="text-xs text-slate-500">Zero cash purchases</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold font-serif text-slate-950">5 Core</span>
                  <span className="text-xs text-slate-500">Redemption categories</span>
                </div>
              </div>
            </div>

            {/* Right Card / Visual Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-gradient-to-br from-[#1E2530] via-[#141A23] to-[#0D1117] text-white p-8 md:p-10 shadow-2xl border border-slate-700/60 overflow-hidden">
                <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-2xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400">
                        <Coins className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] tracking-wider uppercase text-slate-400 font-semibold block">Member Wallet</span>
                        <span className="text-sm font-semibold text-slate-200">Unity Digital Ledger</span>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-bold">
                      Verified Active
                    </span>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2">
                    <span className="text-xs text-slate-400">Available Balance</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-serif font-bold text-blue-300">320</span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">Peers Coin</span>
                    </div>
                    <p className="text-[11px] text-slate-400 pt-1">
                      Ready for instant redemption across all masterclasses, tools & passes.
                    </p>
                  </div>

                  <div className="space-y-2.5 text-xs text-slate-300">
                    <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                      <span className="text-slate-400">Redemption Fee</span>
                      <span className="font-semibold text-emerald-400">0% (Nil)</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                      <span className="text-slate-400">Delivery / Access</span>
                      <span className="font-semibold text-white">Instant in Unity App</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5">
                      <span className="text-slate-400">Cash Top-Up</span>
                      <span className="font-semibold text-red-400">Strictly Prohibited</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-center">
                    <p className="text-xs font-serif italic text-blue-200">
                      &ldquo;Every item you redeem is physical proof of value you gave to another.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What is Available: 5 Categories ─── */}
      <section className="py-16 md:py-24 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
              Catalogue Breakdown
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-950 font-bold">
              What is Available
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Curated exclusively for entrepreneurs actively building businesses. Five practical departments built on real contribution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Growth Tools */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-[#0062D2] transition-all space-y-3 flex flex-col justify-between shadow-2xs">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0062D2]">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-base font-serif font-bold text-slate-950">Growth Tools</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Courses, playbooks, templates, frameworks and resources built for entrepreneurs by founders who implemented them.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-[#0062D2] block pt-2 border-t border-slate-100">
                Playbooks & Templates
              </span>
            </div>

            {/* Learning */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-[#0062D2] transition-all space-y-3 flex flex-col justify-between shadow-2xs">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0062D2]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-base font-serif font-bold text-slate-950">Learning</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Masterclasses, workshops and practical programmes led by top peers across the global community.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-[#0062D2] block pt-2 border-t border-slate-100">
                Cohorts & Sprints
              </span>
            </div>

            {/* Experiences */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-[#0062D2] transition-all space-y-3 flex flex-col justify-between shadow-2xs">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700">
                  <Ticket className="w-5 h-5" />
                </div>
                <h3 className="text-base font-serif font-bold text-slate-950">Experiences</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Event access, annual summit passes, closed-door dinners, and special regional conclave sessions.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-purple-700 block pt-2 border-t border-slate-100">
                Summits & Dinners
              </span>
            </div>

            {/* Business Resources */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-[#0062D2] transition-all space-y-3 flex flex-col justify-between shadow-2xs">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-base font-serif font-bold text-slate-950">Business Resources</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Curated tools, legal agreements, compliance checklists, and vetted services for scaling businesses.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-emerald-700 block pt-2 border-t border-slate-100">
                Legal & Subsidies
              </span>
            </div>

            {/* Merchandise */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-[#0062D2] transition-all space-y-3 flex flex-col justify-between shadow-2xs">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
                  <Gift className="w-5 h-5" />
                </div>
                <h3 className="text-base font-serif font-bold text-slate-950">Merchandise</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The official Peers Global range — lapel pins, leather folios, and commemorative coins worn with honor.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-amber-600 block pt-2 border-t border-slate-100">
                Official Heritage
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── How it Works: 4 Steps ─── */}
      <section className="py-16 md:py-24 border-b border-slate-200/80 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
              The Redemption Flow
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-950 font-bold">
              How it works
            </h2>
            <p className="text-sm text-slate-600">
              Four verified steps from giving value to enjoying your earned rewards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-4 relative">
              <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] border border-[#0062D2]/20 flex items-center justify-center font-serif font-bold text-lg text-[#0062D2]">
                01
              </div>
              <h3 className="text-base font-serif font-bold text-slate-950">1. Give</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Help another entrepreneur through any of the ten Ways of Collaboration — an introduction, referral, advice, or shared vendor.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-4 relative">
              <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] border border-[#0062D2]/20 flex items-center justify-center font-serif font-bold text-lg text-[#0062D2]">
                02
              </div>
              <h3 className="text-base font-serif font-bold text-slate-950">2. It is confirmed</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Confirmed directly in the Unity App by the Peer who received the assistance. No self-awarding is ever permitted.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-4 relative">
              <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] border border-[#0062D2]/20 flex items-center justify-center font-serif font-bold text-lg text-[#0062D2]">
                03
              </div>
              <h3 className="text-base font-serif font-bold text-slate-950">3. You earn coins</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Your wallet updates immediately. Alongside your Life Impact Score, you receive tangible Peers Coin credit.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-4 relative">
              <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] border border-[#0062D2]/20 flex items-center justify-center font-serif font-bold text-lg text-[#0062D2]">
                04
              </div>
              <h3 className="text-base font-serif font-bold text-slate-950">4. You redeem</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Open the Marketplace inside the Unity App. Select your masterclass, tool, or summit pass and redeem instantly with 1 tap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── The Unbreakable Rule: Nothing Here Can Be Bought With Money ─── */}
      <section className="py-16 md:py-20 border-b border-slate-200/80 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-semibold text-red-700">
            <Lock className="w-3.5 h-3.5" />
            Core Economic Principle
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-950 font-bold">
            Nothing here can be bought with money
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Peers Coin is the only currency in the Marketplace, and coins cannot be purchased. Everything on these shelves was earned by helping another entrepreneur.
          </p>

          <div className="pt-2">
            <Link
              href="/peers-coin"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm font-semibold hover:bg-slate-50 transition-colors shadow-2xs"
            >
              See Peers Coin Mechanics
              <ArrowRight className="w-4 h-4 text-[#0062D2]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Browse Section & Interactive Catalogue Grid ─── */}
      <section className="py-16 md:py-24 border-b border-slate-200/80 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                Active Inventory
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-slate-950 font-bold">
                Browse the Launch Catalogue
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                Select a category to filter. All redemptions are processed securely in real time through the Unity mobile application.
              </p>
            </div>

            <Link
              href="/unity"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0062D2] hover:text-[#0052B4] transition-colors"
            >
              <Smartphone className="w-4 h-4" />
              Open the Marketplace in Unity
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-2 border-b border-slate-200/80 pb-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#0062D2] text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              All Items ({CATALOGUE_ITEMS.length})
            </button>
            <button
              onClick={() => setSelectedCategory('growth-tools')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === 'growth-tools'
                  ? 'bg-[#0062D2] text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              Growth Tools
            </button>
            <button
              onClick={() => setSelectedCategory('learning')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === 'learning'
                  ? 'bg-[#0062D2] text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              Learning
            </button>
            <button
              onClick={() => setSelectedCategory('experiences')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === 'experiences'
                  ? 'bg-[#0062D2] text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              Experiences
            </button>
            <button
              onClick={() => setSelectedCategory('business-resources')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === 'business-resources'
                  ? 'bg-[#0062D2] text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              Business Resources
            </button>
            <button
              onClick={() => setSelectedCategory('merchandise')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === 'merchandise'
                  ? 'bg-[#0062D2] text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              Merchandise
            </button>
          </div>

          {/* Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between hover:shadow-md transition-all space-y-6"
              >
                <div className="space-y-4">
                  {/* Top Bar: Category + Price */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0062D2] bg-[#EFF6FF] px-2.5 py-1 rounded-md border border-[#0062D2]/20">
                      {item.categoryLabel}
                    </span>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-bold font-mono">
                      <Coins className="w-3.5 h-3.5 text-blue-300" />
                      <span>{item.coinPrice} Coins</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-serif font-bold text-slate-950 leading-snug">
                      {item.title}
                    </h3>
                    {item.badge && (
                      <span className="inline-block mt-1 text-[10px] font-bold text-[#0062D2] bg-[#EFF6FF] border border-[#0062D2]/20 px-2 py-0.5 rounded">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    {item.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-400">
                    Available in Unity
                  </span>
                  <Link
                    href="/unity"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0062D2] hover:text-[#0052B4] transition-colors"
                  >
                    Redeem in Unity
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <Link
              href="/unity"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white text-xs sm:text-sm font-bold shadow-[0_4px_14px_rgba(0,98,210,0.25)] transition-all uppercase tracking-wider active:scale-95"
            >
              <Smartphone className="w-4 h-4 text-blue-200" />
              <span>Open the Marketplace in Unity</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
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
