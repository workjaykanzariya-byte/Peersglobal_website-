'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
  MessageSquare,
  Sparkles,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react'

// ─── Categories ─────────────────────────────────────────────────────────────
const CATEGORIES = [
  { id: 'finance', name: 'Finance & Accounting', icon: DollarSign, count: '18 tools' },
  { id: 'sales', name: 'Sales & CRM', icon: TrendingUp, count: '14 tools' },
  { id: 'operations', name: 'Operations', icon: Cog, count: '22 tools' },
  { id: 'marketing', name: 'Marketing', icon: Megaphone, count: '19 tools' },
  { id: 'people', name: 'People & HR', icon: Users, count: '12 tools' },
  { id: 'ai', name: 'AI & Automation', icon: Cpu, count: '15 tools' },
  { id: 'manufacturing', name: 'Manufacturing & Supply Chain', icon: Truck, count: '16 tools' },
  { id: 'compliance', name: 'Compliance & Legal', icon: Scale, count: '9 tools' },
  { id: 'books', name: 'Books', icon: BookOpen, count: '24 titles' },
]

// ─── Verified Tools List ───────────────────────────────────────────────────
const TOOLS = [
  {
    id: 'zoho-crm',
    name: 'Zoho CRM',
    category: 'Sales & CRM',
    tag: 'CRM',
    tagColor: 'bg-blue-50 text-blue-700 border-blue-200',
    logo: '/images/icons/zoho.png',
    fallbackIcon: TrendingUp,
    shortDesc: 'Simple, powerful CRM for growing businesses.',
    recommender: {
      name: 'Amit Shah',
      company: 'Shah Packaging Pvt. Ltd.',
      city: 'Ahmedabad',
      avatar: '/images/avatar-1.jpg',
    },
    verdict:
      'We moved to Zoho CRM from spreadsheets. It fixed our follow-up process and improved our closure rate. It is weak at advanced automation, but perfect for MSMEs looking for simplicity.',
    peerLink: 'Amit',
  },
  {
    id: 'tally-prime',
    name: 'Tally Prime',
    category: 'Finance & Accounting',
    tag: 'Finance',
    tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    logo: '/images/icons/tally.png',
    fallbackIcon: DollarSign,
    shortDesc: 'Reliable accounting and GST compliance.',
    recommender: {
      name: 'Neha Patel',
      company: 'Patel Industries',
      city: 'Vadodara',
      avatar: '/images/avatar-2.jpg',
    },
    verdict:
      'We have used Tally for over 8 years. It is rock solid for GST and accounting. It is not stylish, and the UI feels old, but it just works without downtime.',
    peerLink: 'Neha',
  },
  {
    id: 'canva',
    name: 'Canva',
    category: 'Marketing',
    tag: 'Marketing',
    tagColor: 'bg-purple-50 text-purple-700 border-purple-200',
    logo: '/images/icons/canva.png',
    fallbackIcon: Megaphone,
    shortDesc: 'Design tool for non-designers.',
    recommender: {
      name: 'Rohit Mehta',
      company: 'Mehta Exports',
      city: 'Surat',
      avatar: '/images/avatar-3.jpg',
    },
    verdict:
      'Canva has made it easy for our team to create professional presentations and social media content. It is limited for complex print design work, but for everyday business needs it is excellent.',
    peerLink: 'Rohit',
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    category: 'AI & Automation',
    tag: 'AI & Automation',
    tagColor: 'bg-teal-50 text-teal-700 border-teal-200',
    logo: '/images/icons/openai.png',
    fallbackIcon: Cpu,
    shortDesc: 'AI assistant for research, content and productivity.',
    recommender: {
      name: 'Priya Desai',
      company: 'Desai Consultants',
      city: 'Mumbai',
      avatar: '/images/avatar-4.jpg',
    },
    verdict:
      'We use ChatGPT daily for research, content drafts and idea generation. It saves hours of work. It can sometimes give generic answers, so you still need human judgement.',
    peerLink: 'Priya',
  },
]

// ─── Common Questions ───────────────────────────────────────────────────────
const FAQS = [
  {
    q: 'Do vendors pay to be listed?',
    a: 'No. There are no paid listings, no sponsored entries and no affiliate links anywhere on the Watchlist.',
  },
  {
    q: 'Can I contact the Peer who recommended something?',
    a: 'Yes. Send a connection request in the Unity App and ask them directly. That conversation is worth more than any review.',
  },
  {
    q: 'Can I recommend a tool I built?',
    a: 'Only where it is disclosed. A Peer recommending their own product must state that clearly, and it is labelled accordingly with a verified disclosure badge.',
  },
  {
    q: 'Do I need to be a member to read this?',
    a: 'No. The Watchlist is open to all entrepreneurs. Connecting directly with the Peer who recommended something requires membership inside the Unity App.',
  },
  {
    q: 'How often is it updated?',
    a: 'Continuously. Entries are added as Peers submit them through the app, and removed if a Peer ever withdraws their recommendation.',
  },
]

export function WatchlistClient() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [bookmarked, setBookmarked] = useState<{ [key: string]: boolean }>({})

  const toggleBookmark = (id: string) => {
    setBookmarked((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const filteredTools = TOOLS.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.recommender.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.recommender.company.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCat =
      selectedCategory === 'All' || tool.category === selectedCategory
    return matchesSearch && matchesCat
  })

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] font-sans selection:bg-[#E8DDD0] selection:text-[#1A1A1A]">
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-[#EADFC7]/50 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-neutral-500 font-medium">
          <Link href="/" className="hover:text-neutral-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span>Growth &amp; Learning</span>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span className="text-neutral-900 font-semibold">The Watchlist</span>
        </div>
      </div>

      {/* ─── Hero Section with Visual Overlay ─── */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-[#EADFC7]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#1A1A1A] tracking-tight leading-[1.08]">
                The Watchlist
              </h1>
              <p className="text-xl sm:text-2xl font-serif text-[#5B4834] italic leading-relaxed">
                A working library for practitioners.
              </p>
              <p className="text-base sm:text-lg text-neutral-600 max-w-xl leading-relaxed">
                Every tool, book and resource here was recommended by a Peer who used it to build their own business.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/unity"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0D6EFD] text-white text-sm font-semibold hover:bg-blue-700 transition-all shadow-md"
                >
                  Download Unity App
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#recommend"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-neutral-800 text-sm font-semibold border border-[#DACFBA] hover:bg-[#FAF5EB] transition-all shadow-sm"
                >
                  Recommend a Tool
                </Link>
              </div>
            </div>

            {/* Right Desk & Laptop Visual Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-[#D8C7A5] shadow-2xl bg-[#E8DDD0]">
                <Image
                  src="/images/lexicon-hero-desk.jpg"
                  alt="Workdesk with laptop, coffee mug and business resources"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {/* Script calligraphy watermark */}
                <div className="absolute top-4 right-4 text-right">
                  <span className="font-serif italic text-lg sm:text-xl text-white/90 drop-shadow-md">
                    Real People.<br />Real Experience.<br />Real Recommendations.
                  </span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-xs uppercase tracking-widest font-mono text-amber-200">
                    Community Curated
                  </p>
                  <p className="text-base font-serif font-medium">
                    Practitioner Verified Toolkit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── One Rule Banner ─── */}
      <section className="py-8 bg-[#F5F8FF] border-b border-[#D4E2FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#CDE0FF] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4 max-w-3xl">
              <div className="w-12 h-12 rounded-2xl bg-[#0D6EFD]/10 border border-[#0D6EFD]/20 flex items-center justify-center text-[#0D6EFD] shrink-0 mt-1">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-serif text-[#1A1A1A] font-bold">
                  One rule: Nothing appears here unless a named Peer has actually used it.
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Not researched it. Not read about it. Used it, inside a real business, for long enough to know whether it works. Every entry carries the name of the Peer who recommends it, their business, and what they used it for. If you want to know more, they are one connection request away in the Unity App. That single rule is what separates this from every list of tools on the internet.
                </p>
              </div>
            </div>

            <div className="shrink-0 font-serif italic text-right text-sm text-[#0D6EFD] hidden lg:block border-l border-blue-100 pl-6">
              No sponsors.<br />No paid listings.<br />Just real experience.
            </div>
          </div>
        </div>
      </section>

      {/* ─── Browse The Watchlist Section ─── */}
      <section className="py-16 md:py-24 border-b border-[#EADFC7]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A]">
                Browse the Watchlist
              </h2>
              <p className="text-base text-neutral-600 mt-1">
                Tools, books and resources actually used by entrepreneurs.
              </p>
            </div>

            {/* Filter Bar */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative min-w-[240px]">
                <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search tools, categories or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-full border border-[#DACFBA] bg-white text-xs text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0D6EFD]"
                />
              </div>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3.5 py-2 rounded-full border border-[#DACFBA] bg-white text-xs font-medium text-neutral-700 focus:outline-none"
              >
                <option value="All">All Categories</option>
                {CATEGORIES.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>

              {(searchQuery || selectedCategory !== 'All') && (
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategory('All')
                  }}
                  className="text-xs text-blue-600 hover:underline font-semibold"
                >
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredTools.map((item) => {
              const isFav = bookmarked[item.id]
              return (
                <div
                  key={item.id}
                  className="p-6 rounded-3xl bg-white border border-[#E8DFC9] shadow-sm flex flex-col justify-between space-y-5 hover:shadow-md transition-all"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span
                        className={`px-3 py-1 rounded-full text-[11px] font-semibold border ${item.tagColor}`}
                      >
                        {item.tag}
                      </span>
                      <button
                        onClick={() => toggleBookmark(item.id)}
                        className="text-neutral-400 hover:text-neutral-900 transition-colors"
                        aria-label="Save tool"
                      >
                        <Bookmark
                          className={`w-4 h-4 ${
                            isFav ? 'fill-blue-600 text-blue-600' : ''
                          }`}
                        />
                      </button>
                    </div>

                    <div>
                      <h3 className="text-2xl font-serif text-[#1A1A1A] font-bold">
                        {item.name}
                      </h3>
                      <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                        {item.shortDesc}
                      </p>
                    </div>

                    {/* Recommender Info */}
                    <div className="pt-3 border-t border-[#F0E6D2] flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#FAF3E0] border border-[#DACFBA] flex items-center justify-center text-sm font-serif font-bold text-[#735017] shrink-0">
                        {item.recommender.name.charAt(0)}
                      </div>
                      <div className="text-xs">
                        <strong className="block text-neutral-900 font-semibold">
                          {item.recommender.name}
                        </strong>
                        <span className="text-neutral-500">
                          {item.recommender.company} • {item.recommender.city}
                        </span>
                      </div>
                    </div>

                    {/* Honest Verdict Quote */}
                    <div className="p-3.5 rounded-2xl bg-[#FAF7F0] border border-[#EDE4D0] text-xs text-neutral-700 leading-relaxed font-sans italic">
                      &ldquo;{item.verdict}&rdquo;
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/unity"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800"
                    >
                      Connect with {item.peerLink} in the app
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Categories Grid ─── */}
      <section className="py-16 md:py-24 border-b border-[#EADFC7]/60 bg-[#FAF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A]">
              Categories
            </h2>
            <p className="text-sm text-neutral-600 mt-1">
              Explore tools by function. Real recommendations from real entrepreneurs.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-4">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon
              return (
                <div
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.name)}
                  className="cursor-pointer p-5 rounded-2xl bg-white border border-[#E5DAC0] shadow-xs text-center space-y-2 hover:border-blue-500 hover:shadow-sm transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FAF4E6] border border-[#EADBBD] flex items-center justify-center text-[#8C6422] mx-auto">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xs font-serif font-bold text-neutral-900 leading-tight">
                    {cat.name}
                  </h3>
                  <span className="block text-[11px] text-neutral-400 font-mono">
                    {cat.count}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── How an Entry Gets Here & What a Good Entry Looks Like ─── */}
      <section className="py-16 md:py-24 border-b border-[#EADFC7]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: 4-Step Process */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-3xl font-serif text-[#1A1A1A]">
                  How an entry gets here
                </h2>
                <p className="text-sm text-neutral-600 mt-1">
                  A four-stage verification path from practitioner experience to published community resource.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    step: '01',
                    title: 'A Peer recommends it.',
                    desc: 'Through the Unity App, naming the tool and what they specifically used it for.',
                  },
                  {
                    step: '02',
                    title: 'They state their experience.',
                    desc: 'How long they have used it, what it replaced, and what it is genuinely good and bad at.',
                  },
                  {
                    step: '03',
                    title: 'Published with their name.',
                    desc: 'Their recommendation, their reputation. No anonymity, no affiliate links.',
                  },
                  {
                    step: '04',
                    title: 'Other Peers can ask them.',
                    desc: 'Directly through the app, asking the exact follow-up questions before buying.',
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="p-6 rounded-2xl bg-white border border-[#E8DFC9] space-y-2 shadow-xs"
                  >
                    <span className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                      {item.step}
                    </span>
                    <h3 className="text-base font-serif font-bold text-neutral-900">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: What a Good Entry Looks Like (Slack Example) */}
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-3xl font-serif text-[#1A1A1A]">
                What a good entry looks like
              </h2>
              <div className="p-7 rounded-3xl bg-white border border-[#E8DFC9] shadow-md space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 border border-purple-200 flex items-center justify-center font-bold">
                      S
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-xl text-neutral-900">Slack</h3>
                      <span className="text-xs text-neutral-500 font-medium">Communication</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-neutral-600">
                  <strong>What it does:</strong> Team communication and project collaboration.
                </p>

                <div className="pt-2 border-t border-[#F0E6D2]">
                  <p className="text-xs font-semibold text-neutral-900">
                    Recommended by Karan Shah, Karan Tech Solutions, Pune
                  </p>
                  <div className="mt-2.5 p-4 rounded-xl bg-[#FAF7F0] border border-[#EDE4D0] text-xs text-neutral-700 italic leading-relaxed">
                    &ldquo;We switched to Slack from email. It fixed slow communication and keeps our team aligned. It is weak at complex project management, but excellent for day-to-day collaboration.&rdquo;
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/unity"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800"
                  >
                    Connect with Karan in the app <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Recommend a Tool CTA Banner ─── */}
      <section id="recommend" className="py-12 bg-[#F0F5FF] border-b border-[#D4E2FF]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-white border border-[#CDE0FF] shadow-sm">
            <div className="space-y-2 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
                <Send className="w-4 h-4" /> Recommend a Tool
              </div>
              <h3 className="text-2xl font-serif text-[#1A1A1A]">
                If something changed how your business runs, tell the community.
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 max-w-xl">
                Submit it in the Unity App. Name the tool, what it replaced, what it fixed, and where it falls short. Sharing what works earns Life Impact like any other contribution.
              </p>
            </div>
            <Link
              href="/unity"
              className="shrink-0 px-8 py-4 rounded-full bg-[#0D6EFD] text-white text-sm font-semibold hover:bg-blue-700 transition-all shadow-md"
            >
              Download Unity App
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Common Questions Accordion ─── */}
      <section className="py-16 md:py-24 border-b border-[#EADFC7]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A]">
              Common Questions
            </h2>
            <p className="text-sm text-neutral-600">
              Honest clarity on policies, disclosures and peer connections.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-[#E8DFC9] bg-white overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left text-base font-serif font-medium text-[#1A1A1A]"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-neutral-400 transition-transform ${
                        isOpen ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-sm text-neutral-600 leading-relaxed border-t border-[#F0E6D2] pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Dark Mountain Closing Banner ─── */}
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

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <p className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-amber-200/90 leading-snug max-w-3xl mx-auto">
            &ldquo;Ten years of hard-won judgement, from people with no reason to sell you anything.&rdquo;
          </p>

          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight">
              Build Your Business. Build Your Relationships. Build Your Circle.
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 font-light max-w-xl mx-auto">
              Real People. Real Growth. A Stronger Tomorrow.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/unity"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#0D6EFD] text-white text-sm font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl uppercase tracking-wider"
            >
              Download Unity App
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#recommend"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white text-sm font-semibold border border-white/20 hover:bg-white/15 transition-all uppercase tracking-wider"
            >
              Recommend a Tool
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
