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
  Check,
  Layers,
  Heart,
  Ban,
  Clock,
} from 'lucide-react'

type CategoryType = 'all' | 'growth-tools' | 'learning' | 'experiences' | 'business-resources' | 'merchandise'

interface MarketplaceItem {
  id: string
  title: string
  category: CategoryType
  categoryLabel: string
  coinPrice: number
  description: string
  whatYouReceive: string
  conditions: string
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
    badge: 'Popular Playbook',
    description: 'Comprehensive legal, financial and operational framework for executing joint ventures across Indian states and overseas markets.',
    whatYouReceive: 'Complete digital playbook + editable contract templates & profit-share models.',
    conditions: 'Available to all active Peers. Immediate digital delivery via Unity.',
    highlights: ['Draft JV Agreements', 'Profit Share Models', 'Peer Case Studies'],
  },
  {
    id: 'gt-2',
    title: 'Enterprise Cash-Flow & Working Capital Suite',
    category: 'growth-tools',
    categoryLabel: 'Growth Tools',
    coinPrice: 60,
    description: 'Battle-tested financial modeling spreadsheets, debt-restructuring templates, and cash-flow forecasting tools used by 8-figure founders.',
    whatYouReceive: 'Dynamic spreadsheet architecture with 12-month automated cash runway planner.',
    conditions: 'Instant download in Unity App.',
    highlights: ['Dynamic Excel Models', 'Cash Runway Planner', 'Banking Pitch Deck'],
  },
  {
    id: 'gt-3',
    title: 'B2B Sales Organization & Hiring Architecture',
    category: 'growth-tools',
    categoryLabel: 'Growth Tools',
    coinPrice: 75,
    description: 'The exact interview rubrics, compensation structures, and 90-day onboarding checklists for hiring senior enterprise sales leaders.',
    whatYouReceive: 'Full recruitment and compensation matrix.',
    conditions: 'Instant access in Unity.',
    highlights: ['Hiring Scorecards', 'Commission Calculators', 'KPI Dashboards'],
  },

  // Learning
  {
    id: 'ln-1',
    title: 'Scaling from ₹5Cr to ₹25Cr Masterclass',
    category: 'learning',
    categoryLabel: 'Learning',
    coinPrice: 120,
    badge: 'Flagship Cohort',
    description: 'Four intensive weekend sessions taught by veteran Peers who scaled multi-crore enterprises without outside venture capital.',
    whatYouReceive: 'Interactive 4-session live cohort + complete session recordings and workbook.',
    conditions: 'Seats reserved on first-come-first-served basis per quarter.',
    highlights: ['4 Live Weekend Cohorts', 'Direct Peer Q&A', 'Certification in Unity'],
  },
  {
    id: 'ln-2',
    title: 'Circle Leadership & Governance Sprint',
    category: 'learning',
    categoryLabel: 'Learning',
    coinPrice: 150,
    description: 'Deep dive into orchestrating high-trust room dynamics, resolving category conflict, and maximizing circle collaborative output.',
    whatYouReceive: 'Circle Director manual, facilitation templates, and 1-on-1 prep session.',
    conditions: 'Eligible for Circle Directors and prospective Circle Founders.',
    highlights: ['Circle Director Guidebook', 'Conflict Resolution Playbook', 'Leadership Credential'],
  },
  {
    id: 'ln-3',
    title: 'Global Export Compliance & Supply Chain Workshop',
    category: 'learning',
    categoryLabel: 'Learning',
    coinPrice: 100,
    description: 'Step-by-step masterclass on customs clearance, FTA certifications, foreign currency hedging, and freight negotiation.',
    whatYouReceive: 'Full export checklist, freight directory, and certificate of completion.',
    conditions: 'Available on-demand via Unity.',
    highlights: ['Customs Documentation Kit', 'Export Subsidies Guide', 'Vetted Freight Directory'],
  },

  // Experiences
  {
    id: 'ex-1',
    title: 'Annual Peers Global Summit VIP Delegate Pass',
    category: 'experiences',
    categoryLabel: 'Experiences',
    coinPrice: 400,
    badge: 'Annual Flagship',
    description: 'Full 3-day access to the annual flagship summit, closed-door industry roundtables, private networking lounges, and the gala dinner.',
    whatYouReceive: 'VIP Pass to Summit, all keynote sessions, Gala Dinner, and Leadership Conclave.',
    conditions: 'Valid for the upcoming Annual Global Summit. Non-transferable.',
    highlights: ['All-Access Summit Badge', 'Private CEO Lounge', 'Gala Dinner & Awards'],
  },
  {
    id: 'ex-2',
    title: "Founder's Closed-Door Dinner Invitation",
    category: 'experiences',
    categoryLabel: 'Experiences',
    coinPrice: 500,
    badge: 'Curated 12-Seat',
    description: 'An intimate 12-seat private dinner hosted with Dr. Pravin Parmar and senior regional leaders for in-depth strategic conversations.',
    whatYouReceive: 'Curated private dinner experience under Chatham House rules.',
    conditions: 'Subject to regional schedule and seat confirmation.',
    highlights: ['12-Seat Curated Room', 'Chatham House Rules', 'Direct Strategic Feedback'],
  },
  {
    id: 'ex-3',
    title: 'Regional Conclave Master Delegate Seat',
    category: 'experiences',
    categoryLabel: 'Experiences',
    coinPrice: 250,
    description: 'Reserved priority seat at your territorial Conclave featuring keynote insights, cross-circle pitching, and government trade liaisons.',
    whatYouReceive: 'Priority admission, networking directory, and B2B match sessions.',
    conditions: 'Valid for chosen regional Conclave within the calendar year.',
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
    whatYouReceive: 'Complete legal protection agreement suite + IP safety audit rubric.',
    conditions: 'Instant digital access via Unity.',
    highlights: ['Trademark Audit Checklist', 'Trade Secret Clauses', 'Legal Advisory Credit'],
  },
  {
    id: 'br-2',
    title: 'ISO & Quality Audit Readiness Package',
    category: 'business-resources',
    categoryLabel: 'Business Resources',
    coinPrice: 85,
    description: 'Standard operating procedure blueprints, safety registers, and audit pre-check manuals for ISO 9001 and 27001 certifications.',
    whatYouReceive: 'Ready-to-fill SOP registers, compliance frameworks and audit matrices.',
    conditions: 'Instant download in Unity.',
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
    whatYouReceive: 'Step-by-step subsidy filing dossier with verified bank liaison formats.',
    conditions: 'Updated quarterly with latest notifications.',
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
    whatYouReceive: 'Cast brass & gold finish pin in bespoke velvet presentation box.',
    conditions: 'Shipped to your registered office address.',
    highlights: ['Cast Brass & Gold Finish', 'Velvet Presentation Box', 'Shipped to Doorstep'],
  },
  {
    id: 'mc-2',
    title: 'Signature Monogrammed Leather Organizer',
    category: 'merchandise',
    categoryLabel: 'Merchandise',
    coinPrice: 130,
    badge: 'Artisan Made',
    description: 'Handcrafted full-grain leather meeting folio debossed with your name and Circle category. Designed for high-stakes meetings.',
    whatYouReceive: 'Full-grain leather folio with refillable executive notepad and pen holder.',
    conditions: 'Personalised crafting requires 10 business days.',
    highlights: ['Full-Grain Indian Leather', 'Custom Debossed Name', 'A5 Refillable Pad'],
  },
  {
    id: 'mc-3',
    title: 'Peers Citizen Commemorative Coin Set',
    category: 'merchandise',
    categoryLabel: 'Merchandise',
    coinPrice: 180,
    description: 'Heavyweight collector coin struck in pure bronze and polished gold alloy, celebrating the founding principles of Give-First.',
    whatYouReceive: 'Numbered commemorative coin in acrylic display casing with certificate.',
    conditions: 'Limited numbered edition.',
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
          <span className="text-slate-900 font-bold">Marketplace</span>
        </div>
      </div>

      {/* ─── SECTION 1: HERO (MARKETPLACE: WHAT THE COMMUNITY MAKES AVAILABLE TO ITS OWN) ─── */}
      <section className="relative pt-16 sm:pt-24 pb-16 sm:pb-24 bg-gradient-to-b from-[#F0F5FD] via-white to-[#FBFCFE] border-b border-slate-200/80 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">
                  COMMUNITY REDEMPTION
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight leading-[1.08] text-slate-950">
                <span className="brand-gradient-text block">MARKETPLACE</span>
                <span className="text-2xl sm:text-3xl lg:text-4xl text-slate-800 font-medium mt-2 block font-sans">
                  What the community makes available to its own.
                </span>
              </h1>

              <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-light">
                <p>
                  The PEERS GLOBAL Marketplace is not another online store.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-medium text-slate-800">
                  <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">• No impulse purchases</div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">• No price promotions</div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">• No pressure to buy</div>
                </div>

                <div className="p-4 rounded-2xl bg-white border-2 border-rose-200/80 shadow-2xs space-y-1">
                  <p className="font-serif font-bold text-slate-950 text-base">
                    And nothing here is bought with money. Peers Coin only.
                  </p>
                  <p className="text-xs text-[#0062D2] font-semibold">
                    The Marketplace is where contribution can become experience.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white font-medium text-xs sm:text-sm shadow-md hover:shadow-lg hover:opacity-95 transition-all duration-200"
                >
                  <span>Redeem with Peers Coin →</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <Link
                  href="/peers-coin"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white text-slate-800 font-medium text-xs sm:text-sm border border-slate-300 shadow-xs hover:bg-slate-50 transition-all duration-200"
                >
                  <Coins className="w-4 h-4 text-[#0062D2]" />
                  <span>See Peers Coin Rules →</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-white p-3">
                <div className="relative h-[380px] sm:h-[440px] rounded-2xl overflow-hidden bg-slate-900">
                  <Image
                    src="/images/culture-hero-desk.jpg"
                    alt="Peers Global Marketplace items and recognition tokens"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                  
                  <div className="absolute top-5 right-5">
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 backdrop-blur-md text-[11px] font-mono font-bold uppercase tracking-wider">
                      Peers Coin Only
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold uppercase tracking-wider text-sky-200 border border-white/20">
                      Contribution to Experience
                    </span>
                    <p className="font-serif text-lg sm:text-xl font-bold leading-snug">
                      "You do not purchase your way into the experience. You earn recognition."
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 2: HOW IT WORKS (THE 4-STAGE PIPELINE) ───────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 mb-1">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                THE MECHANISM
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-950 mt-1">
              HOW IT WORKS
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2 font-light">
              The Marketplace connects two parts of the PEERS GLOBAL experience:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="p-6 rounded-3xl bg-[#FBFCFE] border border-slate-200 shadow-sm space-y-3">
              <span className="w-10 h-10 rounded-2xl bg-blue-50 text-[#0062D2] border border-blue-200 font-mono font-bold text-xs flex items-center justify-center">
                01
              </span>
              <h3 className="font-serif font-bold text-slate-950 text-lg">Contribution</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                You help another entrepreneur through introductions, practical knowledge, advice, or collaboration.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#FBFCFE] border border-slate-200 shadow-sm space-y-3">
              <span className="w-10 h-10 rounded-2xl bg-blue-50 text-[#0062D2] border border-blue-200 font-mono font-bold text-xs flex items-center justify-center">
                02
              </span>
              <h3 className="font-serif font-bold text-slate-950 text-lg">Peers Coin</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                You earn Peers Coin through recognised and verified contribution logged inside the Unity ecosystem.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#FBFCFE] border border-slate-200 shadow-sm space-y-3">
              <span className="w-10 h-10 rounded-2xl bg-blue-50 text-[#0062D2] border border-blue-200 font-mono font-bold text-xs flex items-center justify-center">
                03
              </span>
              <h3 className="font-serif font-bold text-slate-950 text-lg">Marketplace</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                You explore eligible offerings created and curated by the community across 5 distinct departments.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#FBFCFE] border border-slate-200 shadow-sm space-y-3">
              <span className="w-10 h-10 rounded-2xl bg-[#0062D2] text-white font-mono font-bold text-xs flex items-center justify-center shadow-xs">
                04
              </span>
              <h3 className="font-serif font-bold text-slate-950 text-lg">Experience</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                You use eligible Peers Coin to unlock experiences, resources, summit passes, and masterclasses.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200 text-center text-xs sm:text-sm font-semibold text-slate-900">
            Simple. Visible. Community-led.
          </div>

        </div>
      </section>

      {/* ─── SECTION 3: NOTHING HERE IS BOUGHT WITH MONEY & A DIFFERENT KIND OF MARKETPLACE ─── */}
      <section className="py-16 sm:py-24 bg-[#FBFCFE] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Box 1: NOTHING HERE IS BOUGHT WITH MONEY */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-rose-200/90 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-950">
                  NOTHING HERE IS BOUGHT WITH MONEY
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  <p>
                    This is an important distinction. The Marketplace is not another commercial storefront.
                  </p>
                  <p className="font-bold text-rose-700">
                    Nothing here can be bought with money. Peers Coin only.
                  </p>
                  <p>
                    That keeps the Marketplace connected to the culture behind Peers Coin:
                  </p>
                  <div className="space-y-1.5 pl-3 border-l-2 border-rose-400 text-xs text-slate-800 font-medium">
                    <p>• You do not purchase your way into the experience.</p>
                    <p>• You contribute.</p>
                    <p>• You earn recognition.</p>
                    <p>• And that recognition can open access to something the community has made available.</p>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200 text-xs font-semibold text-rose-600">
                100% Contribution-backed economy
              </div>
            </div>

            {/* Box 2: A DIFFERENT KIND OF MARKETPLACE */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-950">
                  A DIFFERENT KIND OF MARKETPLACE
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  <p>
                    Most marketplaces begin with a question: <span className="font-serif italic text-slate-900">&ldquo;What do you want to buy?&rdquo;</span>
                  </p>
                  <p>
                    This one begins somewhere else: <span className="font-serif font-semibold text-[#0062D2]">&ldquo;What has the community made available?&rdquo;</span>
                  </p>
                  <p>
                    That changes the experience. The Marketplace is not meant to replace the relationships, conversations and collaborations that define PEERS GLOBAL. It complements them.
                  </p>
                  <p className="text-slate-900 font-medium italic pt-1">
                    Because sometimes contribution creates access to an experience you could not simply purchase.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200 text-xs font-semibold text-[#0062D2]">
                Relationship-first, commerce-free
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 4: WHAT YOU CAN DISCOVER (THE 5 DEPARTMENTS) ──────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 mb-1">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                THE 5 DEPARTMENTS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-950 mt-1">
              WHAT YOU CAN DISCOVER
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2 font-light">
              The Marketplace brings together offerings created or made available for the PEERS GLOBAL community.
            </p>
          </div>

          {/* Department Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            
            {/* 1. Growth Tools */}
            <div className="p-7 rounded-3xl bg-[#FBFCFE] border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062D2] border border-blue-200 flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-950">GROWTH TOOLS</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  Resources that can help an entrepreneur build, improve or grow.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#0062D2] pt-3 border-t border-slate-200 block">
                Playbooks, financial tools & hiring matrices
              </span>
            </div>

            {/* 2. Learning */}
            <div className="p-7 rounded-3xl bg-[#FBFCFE] border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062D2] border border-blue-200 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-950">LEARNING</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  Knowledge, programmes and learning experiences available through the community.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#0062D2] pt-3 border-t border-slate-200 block">
                Masterclasses, sprints & cohorts
              </span>
            </div>

            {/* 3. Experiences */}
            <div className="p-7 rounded-3xl bg-[#FBFCFE] border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 border border-purple-200 flex items-center justify-center">
                  <Ticket className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-950">EXPERIENCES</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  Experiences designed to create connection, participation and memorable moments.
                </p>
              </div>
              <span className="text-xs font-semibold text-purple-700 pt-3 border-t border-slate-200 block">
                Summit passes, private dinners & retreats
              </span>
            </div>

            {/* 4. Business Resources */}
            <div className="p-7 rounded-3xl bg-[#FBFCFE] border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-950">BUSINESS RESOURCES</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  Resources that can support the practical journey of running a business.
                </p>
              </div>
              <span className="text-xs font-semibold text-emerald-700 pt-3 border-t border-slate-200 block">
                Legal kits, ISO blueprints & MSME dossiers
              </span>
            </div>

            {/* 5. Merchandise */}
            <div className="p-7 rounded-3xl bg-[#FBFCFE] border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center">
                  <Gift className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-950">MERCHANDISE</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  PEERS GLOBAL merchandise and eligible community items.
                </p>
              </div>
              <span className="text-xs font-semibold text-amber-600 pt-3 border-t border-slate-200 block">
                Heritage lapel pins, leather folios & coins
              </span>
            </div>

          </div>

          {/* ─── LIVE CATALOGUE WITH FILTERS ─── */}
          <div className="space-y-8 pt-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <h3 className="text-2xl font-serif font-bold text-slate-950">
                  THE LIVE CATALOGUE
                </h3>
                <p className="text-xs text-slate-600 font-light mt-0.5">
                  Every offering clearly shows what it is, what you receive, coin requirements, and conditions.
                </p>
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'all', label: 'All' },
                  { id: 'growth-tools', label: 'Growth Tools' },
                  { id: 'learning', label: 'Learning' },
                  { id: 'experiences', label: 'Experiences' },
                  { id: 'business-resources', label: 'Business Resources' },
                  { id: 'merchandise', label: 'Merchandise' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedCategory(tab.id as CategoryType)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      selectedCategory === tab.id
                        ? 'bg-[#0062D2] text-white shadow-xs'
                        : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Catalogue Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#0062D2] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                        {item.categoryLabel}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-mono font-bold">
                        {item.coinPrice} Coins
                      </span>
                    </div>

                    <div>
                      <h4 className="font-serif font-bold text-slate-950 text-lg leading-snug">
                        {item.title}
                      </h4>
                      {item.badge && (
                        <span className="inline-block text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded mt-1">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-light">
                      {item.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                      <div>
                        <strong className="block text-[11px] uppercase tracking-wider text-slate-900 font-bold">
                          What You Receive:
                        </strong>
                        <p className="text-slate-600 font-light">{item.whatYouReceive}</p>
                      </div>
                      <div>
                        <strong className="block text-[11px] uppercase tracking-wider text-slate-900 font-bold">
                          Conditions:
                        </strong>
                        <p className="text-slate-600 font-light">{item.conditions}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 font-medium">Redeem in Unity</span>
                    <a
                      href="https://unity.peersglobal.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#0062D2] hover:text-[#0052B4]"
                    >
                      <span>Redeem Now</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ─── SECTION 5: THE MARKETPLACE SHOULD EARN YOUR ATTENTION & FROM CONTRIBUTION TO EXPERIENCE ─── */}
      <section className="py-16 sm:py-24 bg-[#FBFCFE] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: THE MARKETPLACE SHOULD EARN YOUR ATTENTION */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    INTEGRITY OVER NOISE
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-1 leading-tight">
                  THE MARKETPLACE SHOULD EARN YOUR ATTENTION
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                <p>
                  There is no value in filling a Marketplace with listings simply to make it look full.
                </p>
                <p>
                  A small, genuine catalogue is better than a large catalogue that exists only for appearance.
                </p>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1.5 text-xs text-slate-800 font-medium">
                  <p>• Every offering should be real.</p>
                  <p>• Available.</p>
                  <p>• Clearly described.</p>
                  <p>• And genuinely redeemable.</p>
                </div>

                <div className="space-y-2 text-xs font-semibold text-slate-900 border-l-2 border-[#0062D2] pl-3">
                  <p>No placeholder products.</p>
                  <p>No invented experiences.</p>
                  <p>No artificial abundance.</p>
                  <p className="text-[#0062D2] font-bold">What you see should be what you can actually redeem.</p>
                </div>
              </div>
            </div>

            {/* Right: FROM CONTRIBUTION TO EXPERIENCE */}
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#040E24] via-[#061836] to-[#0A2558] text-white shadow-xl space-y-6">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-sky-300 flex items-center justify-center border border-white/20">
                  <Heart className="w-5 h-5" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-snug">
                  FROM CONTRIBUTION TO EXPERIENCE
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  The Marketplace is one part of a larger PEERS GLOBAL idea:
                </p>

                <div className="space-y-2 text-xs text-sky-100 font-medium pl-3 border-l-2 border-sky-400">
                  <p>• Your contribution creates impact.</p>
                  <p>• Your impact becomes visible.</p>
                  <p>• Peers Coin recognises certain forms of contribution.</p>
                  <p>• And the Marketplace gives that recognition somewhere to go.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 border border-white/20 text-xs font-serif italic text-white text-center leading-relaxed">
                  &ldquo;Give First. Then let the community give back.&rdquo;
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 6: CLOSING ROYAL HERO BANNER (CONTRIBUTE. EARN. REDEEM. EXPERIENCE.) ── */}
      <section className="relative py-20 sm:py-28 bg-[#0062D2] text-white overflow-hidden">
        {/* Geometric Art */}
        <div className="absolute -right-16 -top-20 bottom-0 pointer-events-none w-[420px] sm:w-[560px] lg:w-[680px] opacity-35 overflow-hidden flex items-center justify-center">
          <svg
            viewBox="0 0 600 600"
            fill="none"
            className="w-full h-full text-white/30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="300" cy="300" r="240" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="300" cy="300" r="180" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
            <circle cx="300" cy="300" r="120" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            <line x1="300" y1="60" x2="300" y2="540" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
            <circle cx="300" cy="300" r="6" fill="#7DD3FC" />
            <circle cx="300" cy="300" r="16" stroke="#7DD3FC" strokeWidth="1" opacity="0.4" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Manifesto */}
            <div className="lg:col-span-8 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-200">
                — READY TO EXPLORE? —
              </span>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.1]">
                CONTRIBUTE. EARN. REDEEM. EXPERIENCE.
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-white/90 leading-relaxed font-light max-w-2xl">
                <p>
                  The Marketplace is ready for your earned recognition. Redeem tools, learning, and passes directly through your Unity digital wallet.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-sky-100 font-medium">
                  <span>• Growth Tools</span>
                  <span>• Learning Cohorts</span>
                  <span>• Experiences</span>
                  <span>• Business Resources</span>
                  <span>• Official Merchandise</span>
                  <span>• Peers Coin Only</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-[#0062D2] font-semibold text-sm shadow-xl hover:bg-blue-50 transition-all duration-200 group hover:scale-105"
                >
                  <span>Open Unity</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <Link
                  href="/peers-coin"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/40 backdrop-blur-sm transition-all duration-200"
                >
                  <span>See Peers Coin →</span>
                </Link>
              </div>
            </div>

            {/* Right Cursive Script */}
            <div className="lg:col-span-4 text-center lg:text-right select-none pointer-events-none">
              <p
                className="text-3xl sm:text-4xl lg:text-5xl font-light italic leading-tight text-white drop-shadow-lg"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Explore.
                <br />
                Redeem.
                <br />
                Experience.
                <br />
                Grow.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
