'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Search,
  Users,
  Building2,
  Globe2,
  Target,
  ShieldCheck,
  CreditCard,
  Layers,
  Smartphone,
  Award,
  RefreshCw,
  MessageSquare,
  Headphones,
  Mail,
  UserCheck,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Clock,
  Coins,
  Compass,
  Plus,
  Minus,
  Sparkles,
  X,
} from 'lucide-react'

// ─── Topic Filters ────────────────────────────────────────────────────────
const TOPICS = [
  'All',
  'Before You Join',
  'Ownership',
  'Subscription & Payment',
  'Subscription Dates',
  'Circles',
  'Time & Commitment',
  'The Unity App',
  'Impact & Coins',
  'Leadership',
  'Leaving & Returning',
]

// ─── 10 Structured FAQ Categories ─────────────────────────────────────────
interface FaqItem {
  q: string
  a: string
}

interface FaqCategory {
  id: string
  num: string
  title: string
  topic: string
  icon: React.ElementType
  color: string
  bg: string
  border: string
  items: FaqItem[]
}

const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: 'before-you-join',
    num: '01',
    title: 'Before You Join',
    topic: 'Before You Join',
    icon: Users,
    color: '#0062D2',
    bg: '#EFF6FF',
    border: '#BFDBFE',
    items: [
      {
        q: 'Is PEERS GLOBAL only for entrepreneurs in India?',
        a: 'No. PEERS GLOBAL is designed as a global community of entrepreneurs. The community may begin with your local Circle, but the relationships, learning, collaboration and reach can extend beyond your city and country.',
      },
      {
        q: 'Do I need to know which Circle I want to join before becoming a member?',
        a: 'Not necessarily. Membership in PEERS GLOBAL and joining a Circle are two separate steps. The purpose is to help you understand where you may belong rather than asking you to make every decision before you have experienced the community.',
      },
      {
        q: 'Is this only about business networking?',
        a: 'No. Business relationships are an important part of the experience, but PEERS GLOBAL is built around Learning, Sharing and Relationships — LSR. The intention is to create relationships in which entrepreneurs can learn from experience, share what they know, and help one another grow.',
      },
    ],
  },
  {
    id: 'who-membership-belongs-to',
    num: '02',
    title: 'Who Does the Membership Belong To?',
    topic: 'Ownership',
    icon: UserCheck,
    color: '#10B981',
    bg: '#ECFDF5',
    border: '#A7F3D0',
    items: [
      {
        q: 'Is membership for my company or for me personally?',
        a: 'Membership belongs to the individual entrepreneur, not to the company. A company does not become a member in place of its founder, promoter or entrepreneur. The relationship is personal.',
      },
      {
        q: 'Can two partners from the same business become members?',
        a: 'Yes. Two partners can join individually. They may also hold seats in the same Circle, subject to the applicable Circle structure and category requirements. The principle remains simple: People join. Companies do not.',
      },
    ],
  },
  {
    id: 'subscription-and-payment',
    num: '03',
    title: 'Subscription & Payment',
    topic: 'Subscription & Payment',
    icon: CreditCard,
    color: '#F59E0B',
    bg: '#FFFBEB',
    border: '#FDE68A',
    items: [
      {
        q: 'What is the PEERS GLOBAL platform subscription?',
        a: 'The platform subscription is ₹18,000 / year. This is separate from the Circle fee.',
      },
      {
        q: 'Is there a separate Circle fee?',
        a: 'Yes. The Circle fee is separate from the PEERS GLOBAL platform subscription and depends on the specific Circle (typically ₹15,000–₹22,000 / year).',
      },
      {
        q: 'Is there a joining fee?',
        a: 'There is no separate joining fee.',
      },
      {
        q: 'Can I pay in instalments?',
        a: 'Instalment arrangements may differ by country. The applicable payment arrangement will be communicated as part of the joining process.',
      },
      {
        q: 'Is GST included?',
        a: 'GST is extra, wherever applicable.',
      },
      {
        q: 'Can I get a refund if I change my mind?',
        a: 'Membership subscriptions are non-refundable. Please understand the membership terms before subscribing.',
      },
    ],
  },
  {
    id: 'subscription-dates-and-renewal',
    num: '04',
    title: 'Subscription Dates & Renewal',
    topic: 'Subscription Dates',
    icon: Clock,
    color: '#6366F1',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    items: [
      {
        q: 'Do my PEERS GLOBAL subscription and Circle subscription have the same renewal date?',
        a: 'Not necessarily. The two subscriptions have independent dates. Your platform subscription and your Circle subscription should therefore be understood separately.',
      },
      {
        q: 'Why does the platform need to remain active?',
        a: 'The PEERS GLOBAL platform is the wider community layer through which members remain connected beyond their Circle. Your Circle is one part of the experience. The platform keeps your access to the wider community active.',
      },
      {
        q: 'Can you give me an example?',
        a: 'Suppose your PEERS GLOBAL platform subscription begins on one date and your Circle subscription begins later. Those dates remain independent. Renewal therefore follows the respective subscription dates rather than automatically treating both as one subscription.',
      },
    ],
  },
  {
    id: 'circles',
    num: '05',
    title: 'Circles',
    topic: 'Circles',
    icon: Layers,
    color: '#8B5CF6',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    items: [
      {
        q: 'Which Circle do I join first?',
        a: 'Your primary Circle must be an Industry Circle. Your industry provides the principal context for your Circle relationship.',
      },
      {
        q: 'Can I change my primary Industry Circle later?',
        a: 'No. Your primary Industry Circle cannot be changed. This protects the structure and continuity of Circle relationships.',
      },
      {
        q: 'Can I join more than one Circle?',
        a: 'Yes. Two Circles are the standard arrangement. Your additional Circle can create another layer of relationships around a shared purpose or goal.',
      },
      {
        q: 'Do Circles close when they become full?',
        a: 'No. Circles do not close. The community continues to grow while maintaining the structure of the Circle and its category relationships.',
      },
      {
        q: 'What happens if the category I want is already occupied?',
        a: 'The Circle structure is designed around category clarity and exclusivity. If your preferred category is already occupied, the joining process will help determine the appropriate alternative or Circle arrangement.',
      },
    ],
  },
  {
    id: 'time-and-commitment',
    num: '06',
    title: 'Time & Commitment',
    topic: 'Time & Commitment',
    icon: Clock,
    color: '#EC4899',
    bg: '#FDF2F8',
    border: '#FBCFE8',
    items: [
      {
        q: 'How much time should I expect to give to PEERS GLOBAL?',
        a: 'The expected commitment is approximately 5–10 hours per month. That time is not simply meeting time: it can include Circle participation, relationships, conversations, collaboration and contribution.',
      },
      {
        q: 'What if I cannot attend a particular Circle meeting?',
        a: 'Substitution is allowed in accordance with the applicable Circle process. The intention is to preserve continuity without making participation unnecessarily difficult when genuine circumstances arise.',
      },
      {
        q: 'Can I invite visitors to a Circle?',
        a: 'Yes. Visitors can attend subject to the applicable visitor fee. A visitor is given an opportunity to experience the Circle before making a decision about membership.',
      },
    ],
  },
  {
    id: 'the-unity-app',
    num: '07',
    title: 'The Unity App',
    topic: 'The Unity App',
    icon: Smartphone,
    color: '#0284C7',
    bg: '#F0F9FF',
    border: '#BAE6FD',
    items: [
      {
        q: 'Why is the Unity App important?',
        a: 'Unity is the digital home of the PEERS GLOBAL community. The Circle meeting may happen at a particular time and place, but the relationship continues beyond that meeting. Unity provides the digital environment through which the community remains connected.',
      },
      {
        q: 'Is my profile visible to everyone?',
        a: 'The Unity App is private by default. Your participation is therefore designed around a trusted community environment rather than an open public directory.',
      },
    ],
  },
  {
    id: 'impact-standing-coins',
    num: '08',
    title: 'Impact, Standing & Peers Coin',
    topic: 'Impact & Coins',
    icon: Coins,
    color: '#D97706',
    bg: '#FFFBEB',
    border: '#FDE68A',
    items: [
      {
        q: 'What happens to my Impact and Standing if I leave?',
        a: 'Your Impact and Standing are connected to your membership. They expire when you leave.',
      },
      {
        q: 'What happens to my Peers Coin?',
        a: 'Peers Coin also expires when you leave. Peers Coin is part of the community’s contribution and recognition system rather than something that continues independently after membership ends.',
      },
    ],
  },
  {
    id: 'leadership',
    num: '09',
    title: 'Leadership',
    topic: 'Leadership',
    icon: Award,
    color: '#0D9488',
    bg: '#F0FDFA',
    border: '#99F6E4',
    items: [
      {
        q: 'Can every Peer take a leadership role?',
        a: 'Leadership opportunities are open to all members. Leadership is approached as responsibility and contribution — not simply as a title.',
      },
      {
        q: 'Does becoming a Charter Peer guarantee a leadership position?',
        a: 'No. Charter Peers receive the first approach for leadership opportunities, but this does not constitute a guarantee of appointment. Leadership remains connected to the needs of the community and the responsibility associated with the role.',
      },
      {
        q: 'Do I need to be a senior entrepreneur to lead?',
        a: 'Leadership is not reserved only for the most established entrepreneur. What matters is the willingness to contribute, take responsibility and help the community move forward.',
      },
    ],
  },
  {
    id: 'leaving-and-returning',
    num: '10',
    title: 'Leaving & Returning',
    topic: 'Leaving & Returning',
    icon: RefreshCw,
    color: '#E11D48',
    bg: '#FFF1F2',
    border: '#FECDD3',
    items: [
      {
        q: 'Can I leave PEERS GLOBAL whenever I want?',
        a: 'Yes. A member may leave at any time.',
      },
      {
        q: 'What happens to my subscription if I leave?',
        a: 'Leaving does not create a refund entitlement. The applicable subscription remains subject to the membership terms.',
      },
      {
        q: 'Can I come back later?',
        a: 'Yes. You may return to PEERS GLOBAL in the future. However, when you return, you rejoin as a new member. Your previous membership does not automatically continue.',
      },
    ],
  },
]

export function MemberFaqClient() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTopic, setSelectedTopic] = useState('All')
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({
    'before-you-join-0': true,
  })

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  // Filter categories and questions
  const filteredCategories = useMemo(() => {
    return FAQ_CATEGORIES.map((cat) => {
      const matchesTopic =
        selectedTopic === 'All' || cat.topic.toLowerCase() === selectedTopic.toLowerCase()

      if (!matchesTopic && selectedTopic !== 'All') {
        return null
      }

      if (!searchQuery.trim()) {
        return cat
      }

      const qLow = searchQuery.toLowerCase()
      const matchingItems = cat.items.filter(
        (item) => item.q.toLowerCase().includes(qLow) || item.a.toLowerCase().includes(qLow)
      )

      if (matchingItems.length === 0) {
        return null
      }

      return {
        ...cat,
        items: matchingItems,
      }
    }).filter(Boolean) as FaqCategory[]
  }, [searchQuery, selectedTopic])

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0F172A] selection:bg-[#0062D2] selection:text-white font-sans antialiased">


      {/* =========================================================================
          SECTION 1: HERO — MEMBER FAQ (Master Dark Video Banner)
          ========================================================================= */}
      <section className="relative overflow-hidden bg-[#040F24] text-white pt-6 sm:pt-8 pb-12 sm:pb-16 border-b border-slate-800">
        {/* Full Bleed Hero Video Background */}
        <div className="absolute inset-0 size-full overflow-hidden pointer-events-none">
          <video
            src="/videos/homepage-hero-bg.mp4"
            poster="/images/membership-hero-peers.jpg"
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
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <Link href="/membership" className="hover:text-white transition-colors">
              Membership
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-white font-semibold">FAQ</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full min-h-[440px] lg:min-h-[480px]">
            {/* Left Hero Content */}
            <div className="lg:col-span-12 max-w-3xl space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur-sm uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
                <span>MEMBER FAQ</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white">
                  The questions people naturally ask before{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-rose-400">
                    becoming a Peer
                  </span>
                </h1>
                <p className="text-base sm:text-lg font-medium text-slate-200 leading-snug">
                  Clear answers before you join. Decisions made with confidence.
                </p>
              </div>

              {/* Description */}
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                <p>
                  Joining a community is not a small decision. You may want to understand how membership works, what it means to belong to a Circle, what your commitment looks like, and what happens if your circumstances change.
                </p>
                <p className="font-semibold text-slate-200">
                  Browse all questions below or explore our structured onboarding process.
                </p>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg hover:opacity-95 transition-all uppercase tracking-wider group"
                >
                  <Smartphone className="size-4" />
                  <span>Download Unity App</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <Link
                  href="/membership/criteria"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/25 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-2xs backdrop-blur-sm"
                >
                  <span>Joining Criteria</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: QUESTIONS & ANSWERS (2-Column Category Matrix Grid)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="max-w-2xl space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  COMPLETE DIRECTORY
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                Straight answers to every question
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                Find clear, transparent information regarding membership standards, Circle participation, platform subscriptions, and the LSR Growth Model.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80 shrink-0">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Search className="size-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions..."
                className="w-full pl-10 pr-9 py-2.5 rounded-full border border-slate-200 bg-[#FAFBFD] text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0062D2] focus:ring-2 focus:ring-blue-100 transition-all shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <X className="size-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Topic Filter Pills (Horizontal Bar) */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 mr-2 shrink-0">Filter by category:</span>
            {TOPICS.map((topic) => {
              const active = selectedTopic === topic
              return (
                <button
                  key={topic}
                  onClick={() => setSelectedTopic(topic)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    active
                      ? 'bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white shadow-xs scale-102'
                      : 'bg-[#FAFBFD] hover:bg-slate-100 border border-slate-200/80 text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {topic}
                </button>
              )
            })}
          </div>

          {/* 2-Column FAQ Category Grid */}
          {filteredCategories.length === 0 ? (
            <div className="p-12 text-center rounded-3xl bg-[#FAFBFD] border border-slate-200 space-y-4 max-w-2xl mx-auto">
              <HelpCircle className="size-10 text-slate-400 mx-auto" />
              <h3 className="text-lg font-bold text-slate-900">No questions found matching your search</h3>
              <p className="text-xs text-slate-500 font-light">
                Try searching for terms like &ldquo;Circle&rdquo;, &ldquo;Subscription&rdquo;, &ldquo;GST&rdquo;, or &ldquo;Ownership&rdquo;.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedTopic('All') }}
                className="px-5 py-2 rounded-full bg-[#0062D2] text-white text-xs font-bold shadow-xs hover:bg-blue-700 cursor-pointer"
              >
                Reset Search &amp; Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {filteredCategories.map((cat) => {
                const Icon = cat.icon
                return (
                  <div
                    key={cat.id}
                    className="p-6 sm:p-8 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-300 space-y-6 flex flex-col justify-between"
                  >
                    <div>
                      {/* Card Header with icon, category badge, and title */}
                      <div className="flex items-center justify-between pb-5 border-b border-slate-200/80 mb-5">
                        <div className="flex items-center gap-3.5">
                          <div
                            className="size-11 rounded-2xl flex items-center justify-center shrink-0 shadow-2xs"
                            style={{ backgroundColor: cat.bg, border: `1px solid ${cat.border}` }}
                          >
                            <Icon className="size-5" style={{ color: cat.color }} />
                          </div>
                          <div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block font-mono">
                              SECTION 0{cat.num} • {cat.topic}
                            </span>
                            <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                              {cat.title}
                            </h3>
                          </div>
                        </div>

                        <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium text-slate-500 bg-white border border-slate-200 shrink-0">
                          0{cat.items.length}
                        </span>
                      </div>

                      {/* Accordions inside this category */}
                      <div className="space-y-3">
                        {cat.items.map((item, idx) => {
                          const itemKey = `${cat.id}-${idx}`
                          const isOpen = !!openItems[itemKey]
                          return (
                            <div
                              key={idx}
                              className={`rounded-2xl border transition-all duration-200 bg-white overflow-hidden ${
                                isOpen
                                  ? 'border-[#0062D2] shadow-sm ring-1 ring-blue-500/10'
                                  : 'border-slate-200/90 hover:border-slate-300 shadow-2xs'
                              }`}
                            >
                              <button
                                onClick={() => toggleItem(itemKey)}
                                className="w-full p-4 text-left flex items-center justify-between gap-3 cursor-pointer"
                                aria-expanded={isOpen}
                              >
                                <span className={`text-xs sm:text-sm font-bold transition-colors leading-snug ${
                                  isOpen ? 'text-[#0062D2]' : 'text-slate-800 hover:text-[#0062D2]'
                                }`}>
                                  {item.q}
                                </span>
                                <div
                                  className={`size-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                                    isOpen ? 'bg-[#0062D2] text-white' : 'bg-slate-100 text-slate-500'
                                  }`}
                                >
                                  {isOpen ? <Minus className="size-3.5" /> : <Plus className="size-3.5" />}
                                </div>
                              </button>

                              {isOpen && (
                                <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3 font-light bg-[#FCFDFE]">
                                  {item.a}
                                </div>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    {/* Footer link / hint */}
                    <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                      <span>{cat.items.length} {cat.items.length === 1 ? 'Question' : 'Questions'} answered</span>
                      <span className="text-[#0062D2] font-semibold">PEERS GLOBAL Standards</span>
                    </div>

                  </div>
                )
              })}
            </div>
          )}

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: STILL HAVE A QUESTION? (SUPPORT & CONVERSATION)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-sm text-center space-y-6">
            <div className="size-14 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center mx-auto border border-blue-100">
              <Headphones className="size-7" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Still Have a Question?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed font-light">
                Some questions are answered best by a conversation. If you are already a Peer, ask inside Unity. If you are considering membership, begin with the Unity App and explore the community before making your decision.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://unity.peersglobal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:opacity-95"
              >
                <span>Download Unity App</span>
              </a>

              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full bg-white border border-slate-300 hover:border-slate-400 text-slate-800 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xs"
              >
                <span>Contact Desk</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CLOSING MANIFESTO BANNER (Homepage Styling)
          ========================================================================= */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#061226] via-[#0A1A38] to-[#040D1E] py-16 sm:py-20 lg:py-24 text-white border-t border-slate-800">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,98,210,0.3),transparent),radial-gradient(ellipse_60%_50%_at_90%_100%,rgba(225,29,72,0.15),transparent)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[360px] bg-gradient-to-r from-blue-600/15 via-indigo-600/10 to-rose-600/15 blur-[120px] rounded-full"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-8 flex flex-col items-start space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-sky-300">
                  Your Informed Decision
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-bold leading-[1.18] tracking-tight text-white">
                You simply need enough information to make a decision with confidence.
              </h2>

              <p className="text-base sm:text-lg font-light text-slate-200 max-w-2xl leading-relaxed">
                PEERS GLOBAL is the community. Your Circle is your Inner Board. Unity keeps the relationship alive beyond the meeting. When you are ready, begin with Unity.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-3">
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-white shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] uppercase cursor-pointer"
                >
                  <Smartphone className="size-4" />
                  <span>Download Unity App</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <Link
                  href="/circles/find"
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/40 px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-white backdrop-blur-xs transition-all duration-200 hover:bg-white/10 hover:border-white active:scale-[0.98] uppercase cursor-pointer"
                >
                  <span>Explore Circles</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 text-right flex justify-end">
              <div
                className="text-white/95 text-3xl sm:text-5xl font-normal leading-tight select-none pointer-events-none drop-shadow-md"
                style={{ fontFamily: 'var(--font-script, Georgia, serif)' }}
              >
                Informed <br />
                Decisions &amp; <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-200 font-semibold">Confidence</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
