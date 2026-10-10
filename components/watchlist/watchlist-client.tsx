'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GalaxyButton } from '@/components/ui/galaxy-button'
import {
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Search,
  Bookmark,
  Send,
  HelpCircle,
  ChevronDown,
  Building2,
  DollarSign,
  TrendingUp,
  Cog,
  Megaphone,
  Users,
  Cpu,
  Truck,
  Scale,
  BookOpen,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Quote,
  Check,
  Ban,
  MessageSquare,
} from 'lucide-react'

// ─── 9 Categories (Explore by Category) ─────────────────────────────────────────
const CATEGORIES = [
  {
    id: 'finance',
    name: 'FINANCE & ACCOUNTING',
    icon: DollarSign,
    desc: 'Tools and resources that help entrepreneurs manage financial information, planning and business discipline.',
    color: 'border-blue-200 bg-blue-50/70 text-[#0062D2]',
  },
  {
    id: 'sales',
    name: 'SALES & CRM',
    icon: TrendingUp,
    desc: 'Resources used by Peers to manage relationships, sales processes, customer conversations and growth.',
    color: 'border-purple-200 bg-purple-50/70 text-purple-700',
  },
  {
    id: 'operations',
    name: 'OPERATIONS',
    icon: Cog,
    desc: 'Practical tools and resources that help businesses run more effectively.',
    color: 'border-emerald-200 bg-emerald-50/70 text-emerald-700',
  },
  {
    id: 'marketing',
    name: 'MARKETING',
    icon: Megaphone,
    desc: 'Platforms, tools, books and resources that Peers have actually used in their marketing journey.',
    color: 'border-rose-200 bg-rose-50/70 text-rose-700',
  },
  {
    id: 'people',
    name: 'PEOPLE & HR',
    icon: Users,
    desc: 'Resources for hiring, developing, managing and working with people.',
    color: 'border-amber-200 bg-amber-50/70 text-amber-700',
  },
  {
    id: 'ai',
    name: 'AI & AUTOMATION',
    icon: Cpu,
    desc: 'AI tools and automation resources that have been used by Peers in real business situations.',
    color: 'border-cyan-200 bg-cyan-50/70 text-cyan-700',
  },
  {
    id: 'manufacturing',
    name: 'MANUFACTURING & SUPPLY CHAIN',
    icon: Truck,
    desc: 'Resources relevant to production, procurement, logistics, quality and supply-chain operations.',
    color: 'border-indigo-200 bg-indigo-50/70 text-indigo-700',
  },
  {
    id: 'compliance',
    name: 'COMPLIANCE & LEGAL',
    icon: Scale,
    desc: 'Tools and resources that Peers have found useful in managing business compliance and legal requirements.',
    color: 'border-teal-200 bg-teal-50/70 text-teal-700',
  },
  {
    id: 'books',
    name: 'BOOKS',
    icon: BookOpen,
    desc: 'Books recommended because a Peer has actually read them and found something valuable in them. Not bestsellers — tested wisdom.',
    color: 'border-amber-200 bg-amber-50/70 text-amber-700',
  },
]

// ─── Verified Entries with the Required 7 Elements ─────────────────────────────
export interface WatchlistEntry {
  id: string
  name: string
  category: string
  type: 'Tool' | 'Book' | 'Product' | 'Service'
  recommender: {
    name: string
    business: string
    city: string
  }
  whyTheyUsedIt: string
  whatItHelpedWith: string
  whatTheyLiked: string
  honestLimitation: string
  peerVerdict: string
}

const WATCHLIST_ENTRIES: WatchlistEntry[] = [
  {
    id: 'entry-1',
    name: 'Zoho CRM Plus',
    category: 'SALES & CRM',
    type: 'Tool',
    recommender: {
      name: 'Amit Shah',
      business: 'Shah Packaging Pvt Ltd',
      city: 'Ahmedabad',
    },
    whyTheyUsedIt:
      'We moved from chaotic spreadsheets and WhatsApp threads when our inbound enquiry volume crossed 80 leads per week across 3 regional manufacturing hubs.',
    whatItHelpedWith:
      'Standardizing multi-stage quote generation, tracking 15-day follow-ups, and eliminating lead leakage between sales managers and dispatch coordinators.',
    whatTheyLiked:
      'Affordable Indian context billing, smooth WhatsApp integration out of the box, and dependable mobile app access for field sales reps.',
    honestLimitation:
      'The initial module configuration is clunky. You will need 2-3 weeks of dedicated internal setup time before sales reps adopt it smoothly.',
    peerVerdict:
      '“It fixed our enquiry follow-up discipline permanently. Ideal for MSMEs scaling from 10 to 50 team members.”',
  },
  {
    id: 'entry-2',
    name: 'Tally Prime with AWS Cloud Hosting',
    category: 'FINANCE & ACCOUNTING',
    type: 'Tool',
    recommender: {
      name: 'Neha Patel',
      business: 'Patel Precision Components',
      city: 'Vadodara',
    },
    whyTheyUsedIt:
      'We needed real-time multi-branch accounting access for our accounts team without risking on-premise local server crashes or manual daily pen-drive backups.',
    whatItHelpedWith:
      'Instant GST reconciliation, multi-location inventory ledger tracking, and concurrent multi-user voucher entries across two plant locations.',
    whatTheyLiked:
      'Zero learning curve for our Indian accountants, rock-solid compliance with Indian tax regulations, and 99.9% cloud uptime.',
    honestLimitation:
      'The user interface remains dated and retro. It lacks modern SaaS analytics dashboards unless you build third-party PowerBI connectors.',
    peerVerdict:
      '“Not stylish, but utterly dependable. For Indian compliance and day-to-day accounts, it just works without downtime.”',
  },
  {
    id: 'entry-3',
    name: 'The Hard Thing About Hard Things by Ben Horowitz',
    category: 'BOOKS',
    type: 'Book',
    recommender: {
      name: 'Priya Desai',
      business: 'Desai Global Organics',
      city: 'Surat',
    },
    whyTheyUsedIt:
      'I read this during a painful 6-month export corridor restructuring when cash was tight and we had to lay off 15% of our operational team.',
    whatItHelpedWith:
      'Gave me the psychological clarity to make wartime CEO decisions, manage internal organizational panic, and communicate transparently with co-founders.',
    whatTheyLiked:
      'Zero motivational fluff. It dives straight into what to do when everything goes wrong and there are no good options available.',
    honestLimitation:
      'Written from a Silicon Valley venture-backed perspective. Some software compensation and equity mechanics do not directly map to traditional Indian manufacturing businesses.',
    peerVerdict:
      '“A book every promoter should read before they face their first major crisis. It normalizes the struggle.”',
  },
  {
    id: 'entry-4',
    name: 'Make.com (Integromat)',
    category: 'AI & AUTOMATION',
    type: 'Tool',
    recommender: {
      name: 'Rohit Mehta',
      business: 'Mehta Industrial Trading',
      city: 'Mumbai',
    },
    whyTheyUsedIt:
      'We wanted to automate automated invoice extraction from supplier PDF emails directly into our internal order fulfillment tracking sheet.',
    whatItHelpedWith:
      'Eliminated 3 hours of daily manual data re-entry per coordinator, saving roughly ₹25,000 monthly in administrative data-entry costs.',
    whatTheyLiked:
      'Visual flowchart builder that makes complex multi-step conditional logic easy to build without hiring a dedicated software programmer.',
    honestLimitation:
      'If an API endpoint changes or a supplier alters their invoice layout, the webhook scenario silently fails unless you configure robust error alerting.',
    peerVerdict:
      '“Far more powerful than Zapier for complex multi-step workflows, and significantly more cost-effective for growing operations.”',
  },
  {
    id: 'entry-5',
    name: 'GreyHR',
    category: 'PEOPLE & HR',
    type: 'Tool',
    recommender: {
      name: 'Karan Malhotra',
      business: 'Malhotra Logistics Group',
      city: 'Pune',
    },
    whyTheyUsedIt:
      'We needed biometric payroll sync, automated PF/ESIC deductions, and transparent leave tracking for our 120 warehouse and delivery employees.',
    whatItHelpedWith:
      'Cut monthly salary calculation time from 5 days down to 4 hours while maintaining 100% statutory labor compliance.',
    whatTheyLiked:
      'Comprehensive adherence to Indian state-specific labor laws and a clean mobile app for driver and worker attendance check-ins.',
    honestLimitation:
      'Customer support turnaround can be slow during the first week of the month when payroll runs nationwide.',
    peerVerdict:
      '“If you employ more than 30 people in India, this eliminates statutory compliance anxiety entirely.”',
  },
]

// ─── The 4 Watchlist Promise Questions ─────────────────────────────────────────
const PROMISE_QUESTIONS = [
  'Who used it? (Named Peer, entity and city)',
  'Why did they use it? (Real operational context)',
  'What did it help them do? (Measurable business problem)',
  'What should you know before trying it? (Honest limitation)',
]

export function WatchlistClient() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Filtered Entries
  const filteredEntries = useMemo(() => {
    return WATCHLIST_ENTRIES.filter((entry) => {
      const matchCat =
        selectedCategory === 'All' || entry.category === selectedCategory

      const s = searchQuery.toLowerCase().trim()
      const matchSearch =
        !s ||
        entry.name.toLowerCase().includes(s) ||
        entry.category.toLowerCase().includes(s) ||
        entry.recommender.name.toLowerCase().includes(s) ||
        entry.recommender.business.toLowerCase().includes(s) ||
        entry.whyTheyUsedIt.toLowerCase().includes(s) ||
        entry.whatItHelpedWith.toLowerCase().includes(s) ||
        entry.honestLimitation.toLowerCase().includes(s)

      return matchCat && matchSearch
    })
  }, [selectedCategory, searchQuery])

  return (
    <div className="min-h-screen bg-[#FBFCFE] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-slate-200/80 bg-white/80 backdrop-blur-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-[#0062D2] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span>Knowledge</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">The Watchlist</span>
        </div>
      </div>

      {/* ─── SECTION 1: HERO (THE WATCHLIST: A WORKING LIBRARY FOR PRACTITIONERS) ─── */}
      <section className="relative pt-16 sm:pt-24 pb-16 sm:pb-24 bg-gradient-to-b from-[#F0F5FD] via-white to-[#FBFCFE] border-b border-slate-200/80 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">
                  PRACTITIONER TOOLKIT
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight leading-[1.08] text-slate-950">
                <span className="brand-gradient-text block">THE WATCHLIST</span>
                <span className="text-2xl sm:text-3xl lg:text-4xl text-slate-800 font-medium mt-2 block font-sans">
                  A working library for practitioners.
                </span>
              </h1>

              <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-light">
                <p>
                  Entrepreneurs are constantly looking for useful things:
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-medium text-slate-800">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">• Better accounting tool</div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">• CRM that actually works</div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">• Book that shifts thinking</div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">• AI tool that saves hours</div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">• Operations process</div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">• Real problem solvers</div>
                </div>

                <p className="border-l-2 border-[#0062D2] pl-3 italic text-slate-900 font-medium pt-1">
                  The internet already has millions of recommendations. This is different. The Watchlist is built from the experience of Peers.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <GalaxyButton
                  href="#watchlist-grid"
                  size="lg"
                  className="font-medium"
                >
                  Browse Watchlist
                </GalaxyButton>

                <GalaxyButton
                  href="#recommend-tool"
                  variant="transparent-light"
                  size="lg"
                  className="font-medium"
                >
                  Recommend a Tool
                </GalaxyButton>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-white p-3">
                <div className="relative h-[380px] sm:h-[440px] rounded-2xl overflow-hidden bg-slate-900">
                  <Image
                    src="/images/lexicon-hero-desk.jpg"
                    alt="Entrepreneur workstation with laptop, books and practical tools"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold uppercase tracking-wider text-sky-200 border border-white/20">
                      Zero Sponsored Listings
                    </span>
                    <p className="font-serif text-lg sm:text-xl font-bold leading-snug">
                      "Nothing appears unless a named Peer has actually used it in their business."
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 2: ONE RULE & RECOMMENDED BY SOMEONE WHO USED IT ─────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    THE GOLD STANDARD
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-1 leading-tight">
                  RECOMMENDED BY SOMEONE WHO USED IT
                </h2>
              </div>

              <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-900 block">
                  OUR STARTING QUESTION:
                </span>
                <p className="font-serif font-bold text-xl text-slate-950">
                  “Did a Peer actually use this?”
                </p>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
                  If the answer is no, it does not belong here. Every resource on The Watchlist is recommended by a named Peer who has actually used it to build their own business.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-blue-950/90 pt-1">
                  <span>• Not because it is popular</span>
                  <span>• Not because someone paid</span>
                  <span>• Not because it is trending</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                <h3 className="font-serif font-bold text-slate-950 text-lg">
                  ONE RULE
                </h3>
                <p className="text-sm font-semibold text-[#0062D2]">
                  Nothing appears unless a named Peer has actually used it.
                </p>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  That rule matters. Because there is a difference between: <em>“I have heard this is good”</em> and <em>“I used this in my business.”</em>
                </p>
              </div>
            </div>

            {/* Right: THE HONEST LIMITATION & NO PAID LISTINGS */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#040E24] via-[#061836] to-[#0A2558] text-white shadow-xl space-y-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-amber-300 flex items-center justify-center border border-white/20">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white leading-snug">
                  THE HONEST LIMITATION
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
                  Every entry carries one. Because a recommendation without a limitation is often just promotion.
                </p>
                <div className="space-y-1.5 pl-3 border-l-2 border-amber-400 text-xs text-slate-300 font-light">
                  <p>• A tool may be excellent for scale, but unnecessary for small teams.</p>
                  <p>• A platform may solve one problem while creating another.</p>
                  <p>• A resource may work beautifully in one context and poorly in another.</p>
                </div>
                <p className="text-xs text-amber-200 font-semibold pt-1">
                  The limitation is not a weakness in the Watchlist. It is part of the trust.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 border border-rose-100">
                  <Ban className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-slate-950 text-base">
                    NO PAID LISTINGS. NO AFFILIATE LINKS. EVER.
                  </h4>
                  <p className="text-xs text-slate-600 font-light">
                    The person recommending the resource is here because of their experience — not because someone paid for visibility.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 3: EXPLORE BY CATEGORY (9 MODULES) ─────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#FBFCFE] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                CATEGORIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-950 mt-1">
              EXPLORE BY CATEGORY
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2 font-light">
              Discover tested tools, books and resources across every operational discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon
              return (
                <div
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.name)
                    const el = document.getElementById('watchlist-grid')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all cursor-pointer flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3">
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center border ${cat.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif font-bold text-slate-950 text-base group-hover:text-[#0062D2] transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-light">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-[#0062D2]">
                    <span>Filter entries</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ─── SECTION 4: BROWSE THE WATCHLIST (7-ELEMENT STRUCTURED CARDS) ───── */}
      <section id="watchlist-grid" className="py-16 sm:py-24 bg-white border-b border-slate-200/80 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  A PRACTITIONER'S LIBRARY
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-950 mt-1">
                PRACTITIONER ENTRIES
              </h2>
            </div>

            {/* Category Selector */}
            <div className="flex flex-wrap items-center gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2.5 rounded-full bg-[#FBFCFE] border border-slate-200 text-xs font-semibold text-slate-800 focus:outline-none focus:border-blue-500"
              >
                <option value="All">All Categories</option>
                {CATEGORIES.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Search Input Bar */}
          <div className="relative mb-10">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tool name, Peer recommender, company or keyword..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#FBFCFE] border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Structured Entries Grid */}
          <div className="space-y-8">
            {filteredEntries.map((entry) => (
              <div
                key={entry.id}
                className="p-8 rounded-3xl bg-[#FBFCFE] border border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-6"
              >
                {/* Header: Resource Name & Type */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0062D2] block">
                      THE RESOURCE [{entry.type}]
                    </span>
                    <h3 className="font-serif font-bold text-2xl sm:text-3xl text-slate-950 mt-0.5">
                      {entry.name}
                    </h3>
                    <span className="text-xs font-semibold text-slate-500 mt-1 block">
                      Category: {entry.category}
                    </span>
                  </div>

                  {/* Recommender Card */}
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs self-start sm:self-auto space-y-0.5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
                      RECOMMENDED BY
                    </span>
                    <h4 className="font-serif font-bold text-slate-900 text-sm">
                      {entry.recommender.name}
                    </h4>
                    <p className="text-xs text-slate-600">
                      {entry.recommender.business} · <span className="font-medium text-slate-900">{entry.recommender.city}</span>
                    </p>
                  </div>
                </div>

                {/* 3 Narrative Blocks: Why they used it, What it helped with, What they liked */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                      WHY THEY USED IT
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                      {entry.whyTheyUsedIt}
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                      WHAT IT HELPED WITH
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                      {entry.whatItHelpedWith}
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                      WHAT THEY LIKED
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                      {entry.whatTheyLiked}
                    </p>
                  </div>
                </div>

                {/* The Honest Limitation Block */}
                <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200/80 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-rose-900 uppercase tracking-wider">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    <span>THE HONEST LIMITATION</span>
                  </div>
                  <p className="text-xs sm:text-sm text-rose-950/80 leading-relaxed font-light pl-6">
                    {entry.honestLimitation}
                  </p>
                </div>

                {/* Peer's Verdict */}
                <div className="p-4.5 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-800 italic leading-relaxed flex items-start gap-3 shadow-2xs">
                  <Quote className="w-5 h-5 text-[#0062D2] shrink-0 opacity-70 mt-0.5" />
                  <div>
                    <span className="font-serif font-bold text-slate-900 not-italic block text-xs mb-0.5">
                      PEER'S VERDICT
                    </span>
                    {entry.peerVerdict}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── SECTION 5: THE WATCHLIST PROMISE & BEFORE YOU CHOOSE ──────────── */}
      <section className="py-16 sm:py-24 bg-[#FBFCFE] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: THE WATCHLIST PROMISE */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    THE PROMISE
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-1 leading-tight">
                  THE WATCHLIST PROMISE
                </h2>
                <p className="text-sm sm:text-base text-slate-600 mt-2 font-light">
                  We will not try to make this the biggest library on the internet. We want to make it a library entrepreneurs can trust.
                </p>
              </div>

              <div className="space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                  Every recommendation answers four questions:
                </span>
                {PROMISE_QUESTIONS.map((q, idx) => (
                  <div
                    key={q}
                    className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-800"
                  >
                    <span className="w-6 h-6 rounded-full bg-blue-50 text-[#0062D2] flex items-center justify-center font-bold text-xs shrink-0">
                      {idx + 1}
                    </span>
                    <span>{q}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-600 font-semibold italic">
                If we can answer those honestly, the recommendation has value.
              </p>
            </div>

            {/* Right: BEFORE YOU CHOOSE & THE PEER MAKES THE RECOMMENDATION */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-xl font-serif font-bold text-slate-950">
                  BEFORE YOU CHOOSE
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  The Watchlist can help you discover possibilities. It cannot tell you what is right for your business. Your situation, budget, team, customers and growth stage may be different.
                </p>
                <div className="p-3 bg-blue-50/70 rounded-xl text-xs text-[#0062D2] font-semibold text-center">
                  Explore. Ask. Compare. Think. Decide for yourself.
                </div>
              </div>

              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#040E24] via-[#061836] to-[#0A2558] text-white shadow-xl space-y-4">
                <h3 className="text-xl font-serif font-bold text-white">
                  THE PEER MAKES THE RECOMMENDATION
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  We do not want a faceless rating. We want a relationship behind the recommendation. In Unity, you can message the recommending Peer directly:
                </p>
                <div className="space-y-1 pl-3 border-l-2 border-sky-400 text-xs text-sky-200 font-medium">
                  <p>“Why did you use it?”</p>
                  <p>“What did it help you with?”</p>
                  <p>“What didn't you like?”</p>
                  <p>“Would you use it again?”</p>
                </div>
                <p className="text-xs text-white font-semibold pt-1">
                  That conversation can be more valuable than a hundred anonymous reviews.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 6: WANT TO RECOMMEND SOMETHING? ───────────────────────── */}
      <section id="recommend-tool" className="py-16 sm:py-24 bg-white border-b border-slate-200/80 scroll-mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
              CONTRIBUTE TO THE WATCHLIST
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-950">
            WANT TO RECOMMEND SOMETHING?
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-light max-w-2xl mx-auto">
            <p>
              Perhaps there is a tool you have used for years. A book that changed your thinking. A resource that solved a difficult business problem. A piece of technology that genuinely made your work better.
            </p>
            <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 text-xs sm:text-sm text-blue-950 font-medium space-y-1 text-left">
              <span className="font-bold block uppercase tracking-wider text-blue-900">
                REMEMBER THE STANDARD:
              </span>
              <p>1. You recommend from experience.</p>
              <p>2. You explain why.</p>
              <p>3. You disclose the honest limitation.</p>
            </div>
            <p className="text-xs text-slate-500 italic">
              That is how the Watchlist remains useful.
            </p>
          </div>

          <div className="pt-2">
            <GalaxyButton
              href="/events/speak"
              size="lg"
              className="font-semibold"
            >
              Submit a Peer Recommendation
            </GalaxyButton>
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: CLOSING ROYAL HERO BANNER (EXPLORE THE WATCHLIST) ──── */}
      <section className="relative py-20 sm:py-28 bg-[#0062D2] text-white overflow-hidden">
        {/* Geometric Art */}
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Manifesto */}
            <div className="lg:col-span-8 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-200">
                — TESTED IN REAL BUSINESSES —
              </span>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.1]">
                Recommended by Peers. Shared with context.
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-white/90 leading-relaxed font-light max-w-2xl">
                <p>
                  Finance & Accounting · Sales & CRM · Operations · Marketing · People & HR · AI & Automation · Manufacturing & Supply Chain · Compliance & Legal · Books
                </p>
                <p className="font-medium text-white">
                  What has actually worked for another entrepreneur might give you something useful to explore.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <GalaxyButton
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="default"
                  className="font-semibold"
                >
                  Download Unity App
                </GalaxyButton>

                <GalaxyButton
                  href="/membership"
                  variant="transparent"
                  size="default"
                  className="font-semibold"
                >
                  Apply for Membership
                </GalaxyButton>
              </div>
            </div>

            {/* Right Cursive Script */}
            <div className="lg:col-span-4 text-center lg:text-right select-none pointer-events-none">
              <p
                className="text-3xl sm:text-4xl lg:text-5xl font-light italic leading-tight text-white drop-shadow-lg"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Used.
                <br />
                Tested.
                <br />
                Honest.
                <br />
                Trusted.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
