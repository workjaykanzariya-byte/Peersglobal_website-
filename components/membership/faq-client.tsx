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

      {/* ─── Breadcrumb ────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-slate-100 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <Link href="/" className="hover:text-[#0062D2] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/membership" className="hover:text-[#0062D2] transition-colors">
              Membership
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">Member FAQ</span>
          </nav>
        </div>
      </div>

      {/* =========================================================================
          SECTION 1: HERO — MEMBER FAQ
          ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAFCFF] via-[#FFFFFF] to-[#F8FAFC] border-b border-slate-200/80 pt-10 sm:pt-14 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] brand-gradient-text">
                  MEMBER FAQ
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[3.35rem] font-serif font-bold text-[#0B192C] tracking-tight leading-[1.12]">
                <span className="brand-gradient-text">The questions people naturally ask before becoming a Peer.</span>
              </h1>

              <div className="space-y-3 text-[15px] sm:text-base text-slate-600 leading-relaxed">
                <p>
                  Joining a community is not a small decision. You may want to understand how membership works, what it means to belong to a Circle, what your commitment looks like, and what happens if your circumstances change.
                </p>
                <p className="font-semibold text-slate-900 text-lg">
                  You should have clear answers before you decide. This FAQ is here for exactly that.
                </p>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-sm font-bold hover:shadow-lg transition-all shadow-md uppercase tracking-wider"
                >
                  <Smartphone className="size-4" />
                  <span>Download Unity App</span>
                </a>

                <Link
                  href="/circles/find"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white border border-slate-300 hover:border-slate-400 text-slate-800 text-sm font-bold hover:bg-slate-50 transition-all shadow-2xs uppercase tracking-wider"
                >
                  <span>Explore Circles</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Card: The Simplest Way to Think About It */}
            <div className="lg:col-span-5">
              <div className="relative p-8 sm:p-10 rounded-3xl bg-[#040F24] text-white shadow-2xl overflow-hidden space-y-6">
                <div className="absolute top-0 right-0 size-64 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-5">
                  <span className="text-xs uppercase font-bold tracking-widest text-sky-300">
                    THE CLARITY MATRIX
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                    The Simplest Way to Think About It
                  </h3>

                  <div className="space-y-2.5 text-xs sm:text-sm text-slate-200">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">• <strong>PEERS GLOBAL</strong> is the community.</div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">• <strong>Your Circle</strong> is your Inner Board.</div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">• <strong>Unity</strong> keeps the relationship alive beyond the meeting.</div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">• <strong>Your contribution</strong> gives your membership meaning.</div>
                  </div>

                  <div className="pt-3 border-t border-white/10 text-center">
                    <p className="font-serif italic text-base text-amber-300">
                      &ldquo;You should know what you are joining, what is expected of you, and what you can contribute.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: QUESTIONS & ANSWERS (Search + Filters + 10 Categories)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-3xl mb-10 space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                COMPLETE DIRECTORY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900">
              <span className="brand-gradient-text">Straight answers to every question</span>
            </h2>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6 max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <Search className="size-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword or question..."
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-slate-200 bg-[#FAFBFD] text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0062D2] focus:ring-2 focus:ring-blue-100 transition-all"
            />
          </div>

          {/* Topic Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-12">
            <span className="text-xs font-semibold text-slate-500 mr-2">Filter by section:</span>
            {TOPICS.map((topic) => {
              const active = selectedTopic === topic
              return (
                <button
                  key={topic}
                  onClick={() => setSelectedTopic(topic)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    active
                      ? 'bg-[#0062D2] text-white shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                  }`}
                >
                  {topic}
                </button>
              )
            })}
          </div>

          {/* FAQ 10 Categories Grid (2 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {filteredCategories.map((cat) => {
              const Icon = cat.icon
              return (
                <div
                  key={cat.id}
                  className="rounded-3xl bg-[#FAFBFD] border border-slate-200/90 p-6 sm:p-7 shadow-2xs space-y-4"
                >
                  <div className="flex items-center gap-3.5 pb-4 border-b border-slate-200">
                    <div
                      className="size-11 rounded-2xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: cat.bg, border: `1px solid ${cat.border}` }}
                    >
                      <Icon className="size-5" style={{ color: cat.color }} />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                        SECTION {cat.num}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-slate-900 leading-snug">
                        {cat.title}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    {cat.items.map((item, idx) => {
                      const itemKey = `${cat.id}-${idx}`
                      const isOpen = !!openItems[itemKey]
                      return (
                        <div
                          key={idx}
                          className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-2xs"
                        >
                          <button
                            onClick={() => toggleItem(itemKey)}
                            className="w-full p-4 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-slate-800 hover:text-[#0062D2] transition-colors"
                            aria-expanded={isOpen}
                          >
                            <span>{item.q}</span>
                            <div className="shrink-0 text-slate-400">
                              {isOpen ? (
                                <ChevronUp className="size-4 text-[#0062D2]" />
                              ) : (
                                <ChevronDown className="size-4" />
                              )}
                            </div>
                          </button>

                          {isOpen && (
                            <div className="px-4 pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-[#FAFBFD]">
                              {item.a}
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: STILL HAVE A QUESTION? (SUPPORT & CONVERSATION)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-sm text-center space-y-6">
            <div className="size-14 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center mx-auto">
              <Headphones className="size-7" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-3xl font-bold text-slate-900">
                Still Have a Question?
              </h3>
              <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
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
          SECTION 4: CLOSING MANIFESTO BANNER
          ========================================================================= */}
      <section className="relative isolate overflow-hidden bg-[#040F24] py-16 sm:py-20 lg:py-24 text-white border-t border-slate-800">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(0,98,210,0.25),transparent_42%),radial-gradient(circle_at_82%_12%,rgba(56,189,248,0.18),transparent_36%),linear-gradient(115deg,#020817_0%,#071a3d_48%,#06132d_100%)]"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 flex flex-col items-start space-y-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  YOUR INFORMED DECISION
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-normal leading-[1.18] tracking-tight text-white">
                <span className="brand-gradient-text">You simply need enough information to make a decision with confidence.</span>
              </h2>

              <p className="text-base sm:text-lg font-medium text-slate-200 max-w-2xl">
                PEERS GLOBAL is the community. Your Circle is your Inner Board. Unity keeps the relationship alive beyond the meeting. When you are ready, begin with Unity.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-white shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] uppercase cursor-pointer"
                >
                  <Smartphone className="size-4" />
                  <span>Download Unity App</span>
                </a>

                <Link
                  href="/circles/find"
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/50 px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-white backdrop-blur-xs transition-all duration-200 hover:bg-white/10 hover:border-white active:scale-[0.98] uppercase cursor-pointer"
                >
                  <span>Explore Circles</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 text-right flex justify-end">
              <div
                className="text-white/95 text-3xl sm:text-5xl font-normal leading-tight select-none pointer-events-none drop-shadow-sm"
                style={{ fontFamily: 'var(--font-script, Georgia, serif)' }}
              >
                Informed <br />
                Decisions &amp; <br />
                <span className="text-[#7DD3FC]">Confidence</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
