'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  Users,
  Handshake,
  TrendingUp,
  Globe2,
  Search,
  Quote,
  Clock,
  ChevronDown,
  BookOpen,
  PenTool,
  Send,
  X,
  Share2,
  CheckCircle2,
  Layers,
  Sparkles,
  Award,
} from 'lucide-react'

// ─── 4 Stats Bar ────────────────────────────────────────────────────────────
const STATS = [
  {
    icon: Users,
    label: 'Real Entrepreneurs',
    desc: 'Practitioners & Promoters',
  },
  {
    icon: Handshake,
    label: 'Real Experience',
    desc: 'Battle-Tested Insights',
  },
  {
    icon: TrendingUp,
    label: 'Practical Insights',
    desc: 'Free of Generic Theory',
  },
  {
    icon: Globe2,
    label: 'A Stronger Tomorrow',
    desc: '1 Million Mission',
  },
]

// ─── 5 Publication Categories ───────────────────────────────────────────────
const TOPICS = [
  {
    id: 'growth',
    title: 'Business Growth',
    icon: TrendingUp,
    iconColor: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-100',
    desc: 'Practical operating knowledge — pricing, hiring, systems, expansion, cash flow.',
  },
  {
    id: 'collaboration',
    title: 'Collaboration',
    icon: Handshake,
    iconColor: 'text-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-100',
    desc: 'How entrepreneurs actually create value for each other, and what makes it work.',
  },
  {
    id: 'leadership',
    title: 'Leadership',
    icon: Users,
    iconColor: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-100',
    desc: 'Building teams, developing people, and leading in rooms where authority does not apply.',
  },
  {
    id: 'community',
    title: 'Community',
    icon: Globe2,
    iconColor: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-100',
    desc: 'What it takes to build one, and why entrepreneurs grow faster inside one.',
  },
  {
    id: 'founder',
    title: "Founder's Desk",
    icon: PenTool,
    iconColor: 'text-rose-600',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-100',
    desc: 'Direct reflections and strategic perspectives from Dr. Pravin Parmar.',
  },
]

// ─── 8 Articles Data ────────────────────────────────────────────────────────
export interface Article {
  id: string
  title: string
  category: string
  categoryBadgeColor: string
  readTime: string
  image: string
  excerpt: string
  author: {
    name: string
    title: string
    avatar: string
  }
  date: string
  industry: string
  content: string[]
}

const ARTICLES: Article[] = [
  {
    id: 'scalable-business-focus',
    title: 'How to Build a Scalable Business Without Losing Focus',
    category: 'Business Growth',
    categoryBadgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    readTime: '5 min read',
    image: '/images/who-we-are-impact.jpg',
    excerpt:
      'Practical lessons on systems, delegation and staying close to your core vision as you grow.',
    author: {
      name: 'Amit Shah',
      title: 'CEO, Shah Packaging',
      avatar: '/images/peers-avatars/amit-desai.jpg',
    },
    date: '12 Sep 2026',
    industry: 'Packaging & Logistics',
    content: [
      'Scale is not simply multiplying your current chaotic processes by ten. When we expanded our packaging plant in Sanand, every unchecked operational bottleneck amplified overnight.',
      'The turning point came when we implemented a ruthless 80/20 capacity matrix. Instead of saying yes to every bespoke carton specification that entered our inbound pipeline, we standardized on four core corrugation dimensions.',
      'Delegation requires high-context operating protocols, not micromanagement. By empowering shift managers with real-time scrap rate benchmarks, our delivery lead times dropped by 34% while gross margins expanded.',
    ],
  },
  {
    id: 'competitors-to-collaborators',
    title: 'From Competitors to Collaborators',
    category: 'Collaboration',
    categoryBadgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    readTime: '4 min read',
    image: '/images/peer-stories-hero.jpg',
    excerpt:
      'How two companies in the same city found a way to create value together instead of competing.',
    author: {
      name: 'Neha Patel',
      title: 'Founder, Patel HR Solutions',
      avatar: '/images/peers-avatars/neha-kothari.jpg',
    },
    date: '10 Sep 2026',
    industry: 'Technology & Services',
    content: [
      'For years, we viewed other regional recruitment consultancies in Ahmedabad as rivals bidding for the same corporate HR mandates.',
      'Through our Circle Collaboration Roundtable, we sat down with an executive search boutique whose focus was strictly leadership roles. We agreed to cross-refer clients whenever requirements lay outside our primary sweet spots.',
      'In twelve months, this single collaboration channel generated over ₹40 Lakhs in reciprocal placement fees without spending a single rupee on client acquisition advertising.',
    ],
  },
  {
    id: 'leading-without-authority',
    title: 'Leading Without Authority',
    category: 'Leadership',
    categoryBadgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    readTime: '6 min read',
    image: '/images/circle-meeting.png',
    excerpt:
      'What I learned about leadership from a room full of entrepreneurs who do not report to me.',
    author: {
      name: 'Rohit Mehta',
      title: 'Founder, Mehta Trading',
      avatar: '/images/peers-avatars/rajesh-shah.jpg',
    },
    date: '8 Sep 2026',
    industry: 'Logistics & Trade',
    content: [
      'Leading your own employees is simple: you sign their paychecks. Leading a room of twenty fellow business owners with larger balance sheets than your own requires an entirely different discipline.',
      'In a Peers Global Circle, authority does not exist. Influence is earned exclusively through consistency, vulnerability, and following through on the promises you make in the room.',
      'When you stop demanding deference and start facilitating peer momentum, the boardroom elevates from polite conversation into fierce, transformational collaboration.',
    ],
  },
  {
    id: 'why-grow-faster-community',
    title: 'Why Entrepreneurs Grow Faster in a Community',
    category: 'Community',
    categoryBadgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    readTime: '4 min read',
    image: '/images/conclave.png',
    excerpt:
      'The difference between doing it alone and doing it with people who have your back.',
    author: {
      name: 'Priya Desai',
      title: 'Founder, Desai Exports',
      avatar: '/images/peers-avatars/priya-desai.jpg',
    },
    date: '5 Sep 2026',
    industry: 'Textiles & Export',
    content: [
      'Building an enterprise alone is like walking through a fog. You repeatedly pay tuition for mistakes that another founder twenty kilometers away solved three years ago.',
      'A true peer community removes that penalty. When our European shipping container was held up at customs, a single ten-minute WhatsApp exchange with a Circle peer saved our firm ₹18 Lakhs in demurrage fines.',
      'Trust compresses time. When you are surrounded by peers who have agreed to the same ethical Code, conversations skip past posturing and get straight to the solution.',
    ],
  },
  {
    id: 'next-decade-indian-entrepreneurs',
    title: 'The Next Decade for Indian Entrepreneurs',
    category: "Founder's Desk",
    categoryBadgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
    readTime: '7 min read',
    image: '/images/founder-new.png',
    excerpt:
      'Why this is the most exciting time to build, and what it will take to make the most of it.',
    author: {
      name: 'Dr. Pravin Parmar',
      title: 'Founder, Peers Global',
      avatar: '/images/dr-parmar-avatar.jpg',
    },
    date: '1 Sep 2026',
    industry: 'Cross-Industry',
    content: [
      'India’s entrepreneurial trajectory over the next ten years will not be decided solely in metropolitan tech corridors. It will be forged in tier-2 and tier-3 industrial hubs — in Surat, Morbi, Coimbatore, Indore, and Ludhiana.',
      'The Indian promoter is the most resilient operator on earth. What our businesses lack is not ambition or tenacity; it is the structured peer infrastructure to collaborate without transactional paranoia.',
      'When we unite one million entrepreneurs behind the principle of Give-First, we do not just create companies. We build institutional longevity that outlasts any single founder.',
    ],
  },
  {
    id: 'cash-flow-discipline',
    title: 'Cash Flow Discipline for Growing Businesses',
    category: 'Business Growth',
    categoryBadgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    readTime: '5 min read',
    image: '/images/culture-hero-desk.jpg',
    excerpt:
      'Simple habits that make a significant difference to your runway and peace of mind.',
    author: {
      name: 'Karan Malhotra',
      title: 'Founder, Malhotra Logistics',
      avatar: '/images/peers-avatars/anand-sharma.jpg',
    },
    date: '28 Aug 2026',
    industry: 'Packaging & Logistics',
    content: [
      'Revenue is vanity, profit is sanity, but cash flow is reality. Too many founders celebrate order book expansion while their working capital quietly bleeds dry.',
      'We instituted a non-negotiable Monday morning receivables ritual. Every outstanding invoice past 45 days is reviewed directly by leadership with pre-agreed milestone escalation.',
      'By tying sales commission payouts strictly to cash realization rather than invoice dispatch, our operating cycle compressed from 74 days to 38 days.',
    ],
  },
  {
    id: 'power-of-good-introduction',
    title: 'The Power of a Good Introduction',
    category: 'Collaboration',
    categoryBadgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    readTime: '4 min read',
    image: '/images/industry-cross-city-handshake.jpg',
    excerpt:
      'How one introduction opened a new market for my business.',
    author: {
      name: 'Simran Kaur',
      title: 'Founder, Kaur Tech',
      avatar: '/images/peers-avatars/fatima-khan.jpg',
    },
    date: '25 Aug 2026',
    industry: 'Technology & Services',
    content: [
      'A cold email gets deleted in three seconds. A warm, respected introduction from a trusted peer skips past gatekeepers and lands straight on the board director’s desk.',
      'When entering the Bengaluru enterprise banking space, six months of agency outreach yielded zero meetings. A fellow Peer from our Technology Circle made a single phone call on a Tuesday afternoon.',
      'We had a signed proof-of-concept agreement four weeks later. That is the compounding velocity of social capital built on mutual trust.',
    ],
  },
  {
    id: 'building-next-line-leaders',
    title: 'Building the Next Line of Leaders',
    category: 'Leadership',
    categoryBadgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    readTime: '6 min read',
    image: '/images/who-we-are-mountain.jpg',
    excerpt:
      'Why developing leaders is the only way to build something that outlives you.',
    author: {
      name: 'Vikram Rao',
      title: 'Founder, Rao Industries',
      avatar: '/images/peers-avatars/vikram-patel.jpg',
    },
    date: '22 Aug 2026',
    industry: 'Manufacturing',
    content: [
      'The greatest vulnerability in most Indian promoter-driven businesses is key-person dependency. If your company ceases to function when you take a two-week vacation, you do not own a business — you own a demanding job.',
      'True institutional leadership requires transferring not just operational tasks, but judgment and decision-making frameworks to your tier-2 managers.',
      'When you create room for your team to solve their own operational crises, you build a sustainable institution that outlives any individual in it.',
    ],
  },
]

// ─── 3 FAQ Items ────────────────────────────────────────────────────────────
const FAQS = [
  {
    question: 'Who writes for Insights?',
    answer:
      'Peers, Circle Directors, Industry Directors and invited experts. Every writer has built and done the thing they are writing about.',
  },
  {
    question: 'Can I contribute?',
    answer:
      'Yes. If you have solved a challenge or formulated a practical framework that would benefit other entrepreneurs, speak to your Circle Director.',
  },
  {
    question: 'Do I need to be a member to read?',
    answer:
      'No. Insights is open to everyone across the global entrepreneurial ecosystem as part of our Give-First commitment.',
  },
]

export function InsightsPageClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All')
  const [selectedAuthor, setSelectedAuthor] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [readingArticle, setReadingArticle] = useState<Article | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  // Filter Categories
  const categories = [
    'All',
    'Business Growth',
    'Collaboration',
    'Leadership',
    'Community',
    "Founder's Desk",
  ]
  const industries = ['All', 'Packaging & Logistics', 'Technology & Services', 'Logistics & Trade', 'Textiles & Export', 'Manufacturing']
  const authors = [
    'All',
    'Dr. Pravin Parmar',
    'Amit Shah',
    'Neha Patel',
    'Rohit Mehta',
    'Priya Desai',
    'Karan Malhotra',
    'Simran Kaur',
    'Vikram Rao',
  ]

  // Filtered Articles
  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((art) => {
      const matchCat =
        selectedCategory === 'All' ||
        art.category.toLowerCase() === selectedCategory.toLowerCase()

      const matchInd =
        selectedIndustry === 'All' ||
        art.industry.toLowerCase() === selectedIndustry.toLowerCase()

      const matchAuthor =
        selectedAuthor === 'All' ||
        art.author.name.toLowerCase().includes(selectedAuthor.toLowerCase())

      const matchSearch =
        !searchQuery.trim() ||
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.author.name.toLowerCase().includes(searchQuery.toLowerCase())

      return matchCat && matchInd && matchAuthor && matchSearch
    })
  }, [selectedCategory, selectedIndustry, selectedAuthor, searchQuery])

  return (
    <div className="min-h-screen bg-[#FBFCFE] text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* ─── Breadcrumb ──────────────────────────────────────────────────── */}
      <div className="border-b border-slate-200/80 bg-white/70 backdrop-blur-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link
              href="/"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link
              href="/stories"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Community Life
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">Blog & Insights</span>
          </nav>
        </div>
      </div>

      {/* ─── SECTION 1: HERO (THOUGHTFUL ENTREPRENEUR & EDGE FADE) ────────── */}
      <section className="relative pt-10 pb-16 lg:pt-14 lg:pb-20 overflow-hidden bg-[#FBFCFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 z-10">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest brand-gradient-text bg-blue-50/80 px-3 py-1 rounded-full border border-blue-200/60">
                  — COMMUNITY LIFE —
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-950 tracking-tight leading-[1.1]">
                Insights
              </h1>

              <p className="text-2xl sm:text-3xl font-serif text-slate-800 font-medium leading-snug">
                Written by entrepreneurs who have done the thing they are writing about.
              </p>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                Practical, specific and free of theory.
              </p>

              {/* Dual Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0062D2] text-white font-medium text-sm shadow-md hover:bg-[#0052B4] hover:shadow-lg transition-all duration-200 group"
                >
                  <span>Download Unity App</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#articles"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-slate-800 font-medium text-sm border border-slate-300 shadow-sm hover:bg-slate-50 hover:border-slate-400 transition-all duration-200"
                >
                  <span>Browse Insights</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Right Hero Visual with Horizontal Left Edge Fade */}
            <div className="lg:col-span-6 relative">
              <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/entrepreneur-thinking.jpg"
                  alt="Entrepreneur working thoughtfully at his desk with laptop and notes"
                  fill
                  className="object-cover object-center"
                  priority
                />

                {/* Soft horizontal gradient edge fade on the left edge smoothly blending into page background */}
                <div className="absolute inset-y-0 left-0 w-28 sm:w-40 bg-gradient-to-r from-white via-white/60 to-transparent pointer-events-none z-10" />

                {/* Ambient Top & Bottom Vignettes */}
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/20 to-transparent pointer-events-none z-10" />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent pointer-events-none z-10" />

                {/* Stage Backdrop Brand Overlay on Top Right */}
                <div className="absolute top-6 right-6 bg-slate-950/85 backdrop-blur-md px-4 py-3 rounded-xl border border-white/20 text-right z-20 max-w-[220px]">
                  <div className="flex items-center justify-end gap-1.5 mb-1">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white">
                      PeersGlobal
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-slate-200 leading-tight">
                    Better Entrepreneurs.
                  </p>
                  <p className="text-[11px] font-bold text-sky-400 leading-tight mt-0.5">
                    A Brighter Tomorrow.
                  </p>
                </div>

                {/* Stacked Topic Spine Element on Bottom Right */}
                <div className="absolute bottom-6 right-6 text-right z-20 max-w-[240px]">
                  <p
                    className="text-xl sm:text-2xl font-light italic leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] mb-2"
                    style={{ fontFamily: 'var(--font-script)' }}
                  >
                    Ideas. Experience.
                    <br />
                    Real Conversations.
                    <br />
                    A Stronger Tomorrow.
                  </p>

                  <div className="inline-flex flex-col items-end gap-1 bg-slate-950/70 backdrop-blur-md p-2 rounded-lg border border-white/10 text-[10px] font-semibold text-slate-300">
                    <span className="text-sky-300">Business Growth</span>
                    <span>Collaboration</span>
                    <span>Leadership</span>
                    <span>Community</span>
                    <span className="text-rose-300">Founder&apos;s Desk</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4-Stat Pillar Bar */}
          <div className="mt-12 max-w-5xl mx-auto">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-7 shadow-xl shadow-slate-200/50 border border-slate-200/90">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                {STATS.map((stat, i) => {
                  const Icon = stat.icon
                  return (
                    <div
                      key={stat.label}
                      className={`flex items-center gap-4 ${
                        i !== 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''
                      }`}
                    >
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 border border-blue-100 shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm sm:text-base font-serif font-bold text-slate-950 leading-snug">
                          {stat.label}
                        </div>
                        <div className="text-xs text-slate-500 font-medium mt-0.5">
                          {stat.desc}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: WHAT WE PUBLISH (5 TOPIC PILLARS + QUOTE) ─────────── */}
      <section className="py-16 sm:py-20 bg-[#FBFCFE] border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
            <div className="lg:col-span-8">
              <span className="text-xs font-bold uppercase tracking-widest brand-gradient-text">
                — WHAT WE PUBLISH —
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 tracking-tight leading-tight mt-1">
                Practical knowledge for real business.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                Insights from entrepreneurs, for entrepreneurs — across the topics that matter.
              </p>
            </div>

            {/* Right Quote Callout */}
            <div className="lg:col-span-4 bg-[#FBFCFE] p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <Quote className="w-6 h-6 text-[#0062D2] mb-2 fill-current" />
                <p className="text-sm sm:text-base font-serif font-bold text-slate-900 leading-snug">
                  “Practical ideas from real entrepreneurs, for a stronger tomorrow.”
                </p>
              </div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#0062D2] mt-4 block">
                PEERS GLOBAL
              </span>
            </div>
          </div>

          {/* 5 Topic Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {TOPICS.map((topic) => {
              const Icon = topic.icon
              return (
                <div
                  key={topic.id}
                  onClick={() => {
                    setSelectedCategory(topic.title)
                    const el = document.getElementById('articles')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className={`bg-white rounded-2xl p-5 border ${topic.borderColor} shadow-xs hover:shadow-md hover:border-blue-300 transition-all cursor-pointer flex flex-col justify-between group`}
                >
                  <div className="space-y-3">
                    <div
                      className={`w-10 h-10 rounded-xl ${topic.bgColor} ${topic.iconColor} flex items-center justify-center`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif font-bold text-slate-950 text-base group-hover:text-blue-600 transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {topic.desc}
                    </p>
                  </div>

                  <div className="pt-4 flex items-center gap-1 text-[11px] font-semibold text-[#0062D2]">
                    <span>Browse category</span>
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: BROWSE INSIGHTS (LATEST ARTICLES GRID) ────────────── */}
      <section id="articles" className="py-16 sm:py-24 bg-[#FBFCFE] scroll-mt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest brand-gradient-text">
              — BROWSE INSIGHTS —
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-1">
              Latest articles
            </h2>
          </div>

          {/* Filters Toolbar */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs mb-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Category Filter */}
              <div>
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c === 'All' ? 'All Categories' : c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Industry Filter */}
              <div>
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Industry
                </label>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                >
                  {industries.map((ind) => (
                    <option key={ind} value={ind}>
                      {ind === 'All' ? 'All Industries' : ind}
                    </option>
                  ))}
                </select>
              </div>

              {/* Author Filter */}
              <div>
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Author
                </label>
                <select
                  value={selectedAuthor}
                  onChange={(e) => setSelectedAuthor(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                >
                  {authors.map((a) => (
                    <option key={a} value={a}>
                      {a === 'All' ? 'All Authors' : a}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Keyword Search Input */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 border-t border-slate-100">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search articles, topics or authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {(selectedCategory !== 'All' ||
                selectedIndustry !== 'All' ||
                selectedAuthor !== 'All' ||
                searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedCategory('All')
                    setSelectedIndustry('All')
                    setSelectedAuthor('All')
                    setSearchQuery('')
                  }}
                  className="px-4 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer"
                >
                  Reset Filters
                </button>
              )}

              <button
                type="button"
                className="w-full sm:w-auto px-6 py-2 rounded-full bg-[#0062D2] text-white text-xs font-medium hover:bg-[#0052B4] transition-all cursor-pointer"
              >
                Search
              </button>
            </div>
          </div>

          {/* 8 Articles Grid */}
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
              <p className="text-slate-500 text-sm">
                No insights found matching your current filter selections.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All')
                  setSelectedIndustry('All')
                  setSelectedAuthor('All')
                  setSearchQuery('')
                }}
                className="mt-4 px-5 py-2 rounded-full bg-[#0062D2] text-white text-xs font-semibold hover:bg-[#0052B4]"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredArticles.map((art) => (
                <div
                  key={art.id}
                  onClick={() => setReadingArticle(art)}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    {/* Thumbnail Image */}
                    <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                      <Image
                        src={art.image}
                        alt={art.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                      {/* Category Tag */}
                      <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-white/95 backdrop-blur-md shadow-xs text-slate-900 border border-slate-200">
                        {art.category}
                      </span>

                      {/* Read Time */}
                      <span className="absolute top-3 right-3 px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-950/70 backdrop-blur-md text-white">
                        {art.readTime}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-5 space-y-2.5">
                      <h3 className="font-serif font-bold text-slate-950 text-base leading-snug group-hover:text-blue-600 transition-colors">
                        {art.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {art.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Author & Date Footer */}
                  <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2 pt-3">
                      <div className="relative w-7 h-7 rounded-full overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
                        <Image
                          src={art.author.avatar}
                          alt={art.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="leading-tight">
                        <span className="text-xs font-semibold text-slate-900 block">
                          {art.author.name}
                        </span>
                        <span className="text-[10px] text-slate-500 block truncate max-w-[120px]">
                          {art.author.title}
                        </span>
                      </div>
                    </div>

                    <span className="text-[10px] text-slate-400 font-medium pt-3">
                      {art.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ─── SECTION 4: WRITTEN BY PEERS & FAQS ───────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#FBFCFE] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Written by Peers */}
            <div className="lg:col-span-6 bg-[#F8FAFC] rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-sm flex flex-col justify-between h-full">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest brand-gradient-text">
                  — WRITTEN BY PEERS —
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 leading-tight">
                  Real experience. Real insights.
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                  <p>
                    Most of what appears here is written by entrepreneurs in this community.
                  </p>
                  <p>
                    A Peer who solved a problem writes up how. A Circle Director shares what a masterclass produced. An Industry Director explains a change coming to their sector.
                  </p>
                  <p>
                    Sharing knowledge is one of the ten Ways of Collaboration, and it earns Life Impact like any other contribution. If you have written something a room would benefit from, speak to your Circle Director.
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  href="/10-ways-of-collaboration"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0062D2] font-semibold text-xs border border-blue-200 shadow-xs hover:bg-blue-50 transition-all"
                >
                  <span>See the 10 Ways</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Column: Common Questions FAQ + Story Callout */}
            <div className="lg:col-span-6 space-y-6">
              {/* FAQ Accordion */}
              <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-widest brand-gradient-text">
                  — COMMON QUESTIONS —
                </span>
                <h3 className="text-2xl font-serif font-bold text-slate-950 mt-1 mb-4">
                  Frequently asked questions
                </h3>

                <div className="divide-y divide-slate-200">
                  {FAQS.map((faq, index) => {
                    const isOpen = openFaq === index
                    return (
                      <div key={faq.question} className="py-3.5">
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full flex items-center justify-between gap-3 text-left group focus:outline-none"
                        >
                          <span className="text-xs sm:text-sm font-serif font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {faq.question}
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                              isOpen ? 'rotate-180 text-blue-600' : ''
                            }`}
                          />
                        </button>

                        {isOpen && (
                          <div className="pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Callout Card: Have a story to share? */}
              <div className="bg-blue-50/70 rounded-2xl p-5 border border-blue-100 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0062D2] flex items-center justify-center shrink-0">
                  <Send className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-950 font-serif">
                    Have a story to share?
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    If you have a perspective, a lesson or a story that could help other entrepreneurs, speak to your Circle Director.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: CLOSING ROYAL BLUE BANNER ─────────────────────── */}
      <section className="relative py-20 sm:py-28 bg-[#0062D2] text-white overflow-hidden">
        {/* SVG Orbital Geometric Lines Background */}
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-8 space-y-5">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.1]">
                Build Your Business.
                <br />
                Build Your Relationships.
                <br />
                Build Your Circle.
              </h2>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-[#0062D2] hover:bg-slate-100 font-medium text-sm shadow-md transition-all uppercase tracking-wider"
                >
                  <span>Download Unity App</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#articles"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 text-white font-medium text-sm border border-white/20 hover:bg-white/20 transition-all"
                >
                  <span>Browse Insights</span>
                  <ArrowRight className="w-4 h-4 text-slate-300" />
                </a>
              </div>
            </div>

            {/* Right Cursive Script */}
            <div className="lg:col-span-4 text-center lg:text-right">
              <p
                className="text-3xl sm:text-4xl lg:text-5xl font-light italic leading-tight text-white drop-shadow-lg"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                A Stronger
                <br />
                Tomorrow.
                <br />
                Together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MODAL: ARTICLE READER ────────────────────────────────────────── */}
      {readingArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative">
            {/* Close Button */}
            <button
              onClick={() => setReadingArticle(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Image */}
            <div className="relative h-60 sm:h-72 w-full bg-slate-950">
              <Image
                src={readingArticle.image}
                alt={readingArticle.title}
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-blue-600 text-white inline-block mb-2">
                  {readingArticle.category} · {readingArticle.readTime}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold leading-tight">
                  {readingArticle.title}
                </h3>
              </div>
            </div>

            {/* Article Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Author Card */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-200">
                    <Image
                      src={readingArticle.author.avatar}
                      alt={readingArticle.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">
                      {readingArticle.author.name}
                    </div>
                    <div className="text-xs text-slate-500">
                      {readingArticle.author.title}
                    </div>
                  </div>
                </div>

                <span className="text-xs text-slate-400">
                  Published {readingArticle.date}
                </span>
              </div>

              {/* Content Paragraphs */}
              <div className="space-y-4 text-slate-700 text-sm leading-relaxed">
                {readingArticle.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  Peers Global Insights
                </span>
                <button
                  onClick={() => setReadingArticle(null)}
                  className="px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold"
                >
                  Close Reader
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
