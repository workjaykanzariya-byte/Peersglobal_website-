'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GalaxyButton } from '@/components/ui/galaxy-button'
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
  Compass,
  Briefcase,
  HelpCircle,
  Lightbulb,
  Check,
} from 'lucide-react'

// ─── 5 Places to Explore (Pillars) ───────────────────────────────────────────
const FIVE_PLACES = [
  {
    num: '01',
    id: 'growth',
    title: 'BUSINESS GROWTH',
    tagline: 'Building a business is a continuing journey.',
    desc: 'Explore practical thinking around growth, sales, markets, customers, strategy, operations, expansion and business decisions. Not theory for theory’s sake — experience that can help you think about your own business more clearly.',
    bullets: [
      'Growth & Scaling Models',
      'Sales & Market Acquisition',
      'Customer Retention & Operations',
      'Strategic Expansion & Decision-Making',
    ],
    icon: TrendingUp,
    color: 'border-blue-200 bg-blue-50/70 text-[#0062D2]',
  },
  {
    num: '02',
    id: 'collaboration',
    title: 'COLLABORATION',
    tagline: 'Business relationships can become much more than introductions.',
    desc: 'They can become partnerships, referrals, strategic alliances, learning relationships and new opportunities. Explore how entrepreneurs create value through relationships — and what makes collaboration meaningful. Because collaboration is not simply about knowing more people; it is about knowing how to create value together.',
    bullets: [
      'Strategic Alliances & JVs',
      'High-Trust Referral Systems',
      'Shared Infrastructure & CapEx',
      'Value Creation Beyond Networking',
    ],
    icon: Handshake,
    color: 'border-purple-200 bg-purple-50/70 text-purple-700',
  },
  {
    num: '03',
    id: 'leadership',
    title: 'LEADERSHIP',
    tagline: 'Leadership changes as the business changes.',
    desc: 'What worked when you had five people may not work when you have fifty. What worked in the beginning may not work when the organisation grows. And sometimes the biggest leadership challenge is not leading others — it is reconstructing yourself as the entrepreneur your next stage requires.',
    bullets: [
      'Reconstructing Yourself at Each Stage',
      'Leading Without Authority',
      'Culture, Delegation & Team Maturity',
      'Decision-Making in Uncertainty',
    ],
    icon: Users,
    color: 'border-emerald-200 bg-emerald-50/70 text-emerald-700',
  },
  {
    num: '04',
    id: 'community',
    title: 'COMMUNITY',
    tagline: 'Entrepreneurs build businesses, but also ecosystems.',
    desc: 'Explore ideas about trust, belonging, contribution, Give-First, relationships, peer communities, collaboration culture and collective growth. Because a strong community is not created simply by bringing people into the same room — it is created by what people repeatedly do for one another.',
    bullets: [
      'Trust & Collective Growth',
      'The Give-First Philosophy',
      'Building Local & Global Ecosystems',
      'What People Repeatedly Do for Each Other',
    ],
    icon: Globe2,
    color: 'border-amber-200 bg-amber-50/70 text-amber-700',
  },
  {
    num: '05',
    id: 'founder',
    title: "FOUNDER'S DESK",
    tagline: 'Some lessons are too personal to fit neatly into a category.',
    desc: 'Founder’s Desk is where entrepreneurs share the thinking behind the journey: the decisions, doubts, turning points, lessons, mistakes, moments when the plan changed, and the things nobody tells you before you begin. This is the entrepreneur behind the business.',
    bullets: [
      'The Doubts & Turning Points',
      'Unscripted Lessons & Hard Truths',
      'When the Plan Changed Overnight',
      'The Human Behind the Enterprise',
    ],
    icon: PenTool,
    color: 'border-rose-200 bg-rose-50/70 text-rose-700',
  },
]

// ─── Article Data for the 5 Categories ────────────────────────────────────────
export interface Article {
  id: string
  title: string
  category: string
  readTime: string
  image: string
  excerpt: string
  author: {
    name: string
    title: string
    company: string
  }
  date: string
  content: string[]
}

const ARTICLES: Article[] = [
  // Business Growth
  {
    id: 'growth-1',
    title: 'How We Standardised 4 Core Products and Cut Delivery Lead Times by 34%',
    category: 'Business Growth',
    readTime: '5 min read',
    image: '/images/who-we-are-impact.jpg',
    excerpt: 'When we expanded our packaging plant in Sanand, every unchecked bottleneck amplified. Here is the operational capacity matrix that fixed it.',
    author: {
      name: 'Jignesh Shah',
      title: 'Founder & MD',
      company: 'Shah Packaging Solutions, Ahmedabad',
    },
    date: 'Sep 2026',
    content: [
      'Scale is not simply multiplying your current chaotic processes by ten. When we expanded our packaging plant in Sanand, every unchecked operational bottleneck amplified overnight.',
      'The turning point came when we implemented a ruthless 80/20 capacity matrix. Instead of saying yes to every bespoke carton specification that entered our inbound pipeline, we standardized on four core corrugation dimensions.',
      'Delegation requires high-context operating protocols, not micromanagement. By empowering shift managers with real-time scrap rate benchmarks, our delivery lead times dropped by 34% while gross margins expanded.',
    ],
  },
  {
    id: 'growth-2',
    title: 'Pricing for Unit Economics: The Mistake That Cost Us ₹40 Lakhs Before We Fixed It',
    category: 'Business Growth',
    readTime: '6 min read',
    image: '/images/founder-new.png',
    excerpt: 'Chasing gross revenue without factoring working capital financing cycles almost derailed our year. Here is what we changed.',
    author: {
      name: 'Priya Desai',
      title: 'Co-Founder & CEO',
      company: 'Desai Global Organics, Surat',
    },
    date: 'Sep 2026',
    content: [
      'We thought high volume would compensate for thin margins. It did not. The 90-day credit cycles ate away at our cash reserves faster than our factory could produce.',
      'We restructured our pricing to tie discounts strictly to 15-day settlement milestones. The revenue dipped slightly for two months, but our free cash flow doubled.',
      'Never be afraid to lose low-margin, high-friction customers. The freed capacity allowed us to onboard clients who valued reliability over rock-bottom prices.',
    ],
  },
  // Collaboration
  {
    id: 'collab-1',
    title: 'How Two Competing Fabricators Created a 50:50 Joint Corridor for Global Exports',
    category: 'Collaboration',
    readTime: '4 min read',
    image: '/images/industry-cross-city-handshake.jpg',
    excerpt: 'Instead of spending ₹2 Crore each on bonded cold storage, we pooled our logistics volume and opened three international trade lanes.',
    author: {
      name: 'Karan Malhotra',
      title: 'Managing Partner',
      company: 'Malhotra Freight Logistics, Mumbai',
    },
    date: 'Sep 2026',
    content: [
      'Most business owners view anyone in their sector as a threat. We realized that while we competed locally, international corridors required scale that neither of us possessed alone.',
      'Over a 45-minute discussion at a PEERS GLOBAL Regional Summit, we structured a shared-access logistics agreement with clear transparency rules.',
      'The result: 24 multi-modal container shipments delivered to Europe in 9 months, cutting freight landing costs by 18% for both businesses.',
    ],
  },
  // Leadership
  {
    id: 'lead-1',
    title: 'Leading Without Authority: What 12 Months as a Circle Director Taught Me',
    category: 'Leadership',
    readTime: '7 min read',
    image: '/images/industry-director-speaker.jpg',
    excerpt: 'You cannot instruct another entrepreneur what to do. You earn their trust, create clarity, and lead through contribution.',
    author: {
      name: 'Dr. Pravin Parmar',
      title: 'Founder & Chairman',
      company: 'Peers Global Ecosystem',
    },
    date: 'Sep 2026',
    content: [
      'In your own business, you have organizational hierarchy. In a community of equals, hierarchy is useless. You must learn to lead through influence, empathy, and consistency.',
      'The moment an entrepreneur realizes that leadership is not about being above others, but about making things possible for others, everything shifts.',
      'Holding the rhythm of a Circle requires noticing the quieter Peer in the room, supporting the Chairs, and creating an environment where vulnerability is welcomed.',
    ],
  },
  // Community
  {
    id: 'comm-1',
    title: 'Why Real Communities Are Built on Repeated Action, Not Large WhatsApp Groups',
    category: 'Community',
    readTime: '5 min read',
    image: '/images/who-we-are-boardroom.jpg',
    excerpt: 'A room full of strangers scrolling on an algorithm is not a network. A community is forged when people repeatedly show up and contribute.',
    author: {
      name: 'Amit Trivedi',
      title: 'Managing Director',
      company: 'Trivedi Chemicals & Synthetics, Bharuch',
    },
    date: 'Sep 2026',
    content: [
      'Anyone can create a directory or a chat group. Very few organizations create a culture where business owners actively look out for one another without expecting immediate payback.',
      'The Give-First principle works because it filters for entrepreneurs who are looking to build long-term relationships rather than extract fast transactions.',
      'When you see a Peer take 2 hours out of their day to help you avoid a regulatory pitfall, your commitment to the community deepens permanently.',
    ],
  },
  // Founder's Desk
  {
    id: 'founder-1',
    title: 'The Things Nobody Tells You Before You Step Into Multi-City Expansion',
    category: "Founder's Desk",
    readTime: '6 min read',
    image: '/images/who-we-are-mountain.jpg',
    excerpt: 'The doubts, the midnight cash flow reconciliations, and the realization that your company’s culture does not automatically travel by email.',
    author: {
      name: 'Sandeep Kulkarni',
      title: 'Executive Director',
      company: 'Kulkarni Environmental Technologies, Pune',
    },
    date: 'Sep 2026',
    content: [
      'When you operate in one city, you rely on informal presence and personal oversight. The moment you open the second and third city, your personal presence cannot scale.',
      'You have to document your values, train leaders who think like owners, and accept that their way of achieving the outcome might differ from yours.',
      'The hardest part of growth is reconstructing yourself. You have to let go of doing the work in order to build the people who do the work.',
    ],
  },
]

export function InsightsPageClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [readingArticle, setReadingArticle] = useState<Article | null>(null)

  // Filtered Articles
  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((art) => {
      const matchCat =
        selectedCategory === 'All' ||
        art.category.toLowerCase() === selectedCategory.toLowerCase()

      const s = searchQuery.toLowerCase().trim()
      const matchSearch =
        !s ||
        art.title.toLowerCase().includes(s) ||
        art.excerpt.toLowerCase().includes(s) ||
        art.author.name.toLowerCase().includes(s) ||
        art.author.company.toLowerCase().includes(s)

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
          <span className="text-slate-900 font-bold">Insights</span>
        </div>
      </div>

      {/* ─── SECTION 1: HERO (WRITTEN BY ENTREPRENEURS WHO HAVE DONE THE THING) ─── */}
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
                  LIVED EXPERIENCE BEFORE THEORY
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight leading-[1.08] text-slate-950">
                <span className="brand-gradient-text block">INSIGHTS</span>
                <span className="text-2xl sm:text-3xl lg:text-4xl text-slate-800 font-medium mt-2 block font-sans">
                  Written by entrepreneurs who have done the thing they are writing about.
                </span>
              </h1>

              <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-light">
                <p>
                  There is a difference between knowing something and having lived it.
                </p>

                <div className="space-y-1.5 pl-3 border-l-2 border-[#0062D2] text-xs sm:text-sm text-slate-700 font-medium">
                  <p>• You can study growth — or you can build a business through it.</p>
                  <p>• You can read about leadership — or you can lead people through uncertainty.</p>
                  <p>• You can learn about collaboration — or you can experience what happens when the right relationships come together.</p>
                </div>

                <p className="text-slate-900 font-semibold pt-1">
                  PEERS GLOBAL Insights is built around the second kind of knowledge:
                </p>

                <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-800">
                  <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs">Experience lived</span>
                  <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs">Lessons learned</span>
                  <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs">Ideas tested</span>
                  <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs">Perspectives shared</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <GalaxyButton
                  href="#articles-feed"
                  size="lg"
                  className="font-medium"
                >
                  Start Reading
                </GalaxyButton>

                <GalaxyButton
                  href="#five-places"
                  variant="transparent-light"
                  size="lg"
                  className="font-medium"
                >
                  Five Places to Explore
                </GalaxyButton>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-white p-3">
                <div className="relative h-[380px] sm:h-[440px] rounded-2xl overflow-hidden bg-slate-900">
                  <Image
                    src="/images/who-we-are-boardroom.jpg"
                    alt="Entrepreneurs in discussion sharing battle-tested business insights"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold uppercase tracking-wider text-sky-200 border border-white/20">
                      Experience Before Theory
                    </span>
                    <p className="font-serif text-lg sm:text-xl font-bold leading-snug">
                      "People who have done the thing, sharing what they learned from doing it."
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 2: EXPERIENCE BEFORE THEORY ───────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    THE PHILOSOPHY
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-1 leading-tight">
                  EXPERIENCE BEFORE THEORY
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                <p>
                  The most useful business lessons are not always found in textbooks. Sometimes they come from:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-slate-800">
                  <div className="p-3 rounded-xl bg-[#FBFCFE] border border-slate-200">• A decision that worked</div>
                  <div className="p-3 rounded-xl bg-[#FBFCFE] border border-slate-200">• A decision that did not</div>
                  <div className="p-3 rounded-xl bg-[#FBFCFE] border border-slate-200">• A difficult customer</div>
                  <div className="p-3 rounded-xl bg-[#FBFCFE] border border-slate-200">• A failed experiment</div>
                  <div className="p-3 rounded-xl bg-[#FBFCFE] border border-slate-200">• A successful expansion</div>
                  <div className="p-3 rounded-xl bg-[#FBFCFE] border border-slate-200">• A leadership challenge</div>
                </div>
                <p className="border-l-2 border-[#0062D2] pl-3 italic text-slate-900 font-medium">
                  An entrepreneur who has already travelled a road can often help another entrepreneur see the road differently.
                </p>
              </div>
            </div>

            {/* Right: The Question We Ask Before Publishing */}
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#040E24] via-[#061836] to-[#0A2558] text-white shadow-xl space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-sky-300 flex items-center justify-center border border-white/20">
                  <Lightbulb className="w-6 h-6" />
                </div>

                <h3 className="text-2xl font-serif font-bold text-white leading-snug">
                  THE QUESTION WE ASK BEFORE PUBLISHING
                </h3>

                <div className="space-y-2 text-sm text-slate-300">
                  <p className="line-through text-slate-400">“Will this article get attention?”</p>
                  <p className="text-lg font-serif font-bold text-sky-200">
                    “Has this person actually done the thing they are writing about?”
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  That question changes the quality of the conversation. It moves us away from generic advice, away from borrowed wisdom, away from content written simply because a topic is trending — and towards something much more valuable: <strong>Experience being shared with experience.</strong>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 3: FIVE PLACES TO EXPLORE ──────────────────────────────── */}
      <section id="five-places" className="py-16 sm:py-24 bg-[#FBFCFE] border-b border-slate-200/80 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <div className="flex items-center gap-2 mb-1">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                CURATED TOPICS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-950 mt-1">
              FIVE PLACES TO EXPLORE
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2 font-light">
              Explore by what you need right now on your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FIVE_PLACES.map((place, idx) => {
              const Icon = place.icon
              return (
                <div
                  key={place.id}
                  onClick={() => {
                    setSelectedCategory(
                      place.id === 'growth'
                        ? 'Business Growth'
                        : place.id === 'collaboration'
                        ? 'Collaboration'
                        : place.id === 'leadership'
                        ? 'Leadership'
                        : place.id === 'community'
                        ? 'Community'
                        : "Founder's Desk"
                    )
                    const el = document.getElementById('articles-feed')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className={`p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all cursor-pointer flex flex-col justify-between space-y-6 group ${
                    idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-slate-400">
                        {place.num}
                      </span>
                      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center border ${place.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif font-bold text-slate-950 group-hover:text-[#0062D2] transition-colors">
                        {place.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-700 mt-1">
                        {place.tagline}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-light">
                      {place.desc}
                    </p>

                    <div className="pt-2 border-t border-slate-100 space-y-1">
                      {place.bullets.map((b) => (
                        <div key={b} className="flex items-center gap-2 text-[11px] font-medium text-slate-700">
                          <Check className="w-3 h-3 text-[#0062D2] shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-[#0062D2]">
                    <span>Explore {place.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ─── SECTION 4: ARTICLES FEED (START READING) ───────────────────────── */}
      <section id="articles-feed" className="py-16 sm:py-24 bg-white border-b border-slate-200/80 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  KNOWLEDGE REPOSITORY
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-950 mt-1">
                START READING
              </h2>
            </div>

            {/* Category Filter Pills & Search */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                'All',
                'Business Growth',
                'Collaboration',
                'Leadership',
                'Community',
                "Founder's Desk",
              ].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer border ${
                    selectedCategory === cat
                      ? 'bg-[#0062D2] text-white border-[#0062D2] shadow-xs'
                      : 'bg-[#FBFCFE] text-slate-700 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Search Input Bar */}
          <div className="relative mb-10">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, keyword, or author..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#FBFCFE] border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((art) => (
              <div
                key={art.id}
                onClick={() => setReadingArticle(art)}
                className="rounded-3xl bg-[#FBFCFE] border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all overflow-hidden flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={art.image}
                      alt={art.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider">
                      {art.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{art.readTime}</span>
                    </div>

                    <h3 className="font-serif font-bold text-slate-950 text-lg leading-snug group-hover:text-[#0062D2] transition-colors">
                      {art.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed font-light line-clamp-3">
                      {art.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-slate-900 block">
                      {art.author.name}
                    </span>
                    <span className="text-[11px] text-slate-500 block">
                      {art.author.company}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#0062D2] group-hover:underline">
                    <span>Read</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── SECTION 5: PRACTICAL NOT PERFECT & INSIGHTS ARE NOT INSTRUCTIONS ── */}
      <section className="py-16 sm:py-24 bg-[#FBFCFE] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: PRACTICAL, NOT PERFECT */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    THE REALITY
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-1 leading-tight">
                  PRACTICAL, NOT PERFECT
                </h2>
              </div>

              <div className="space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                <p>
                  Entrepreneurs rarely have perfect answers. They have experience. They have tested ideas. They have learned. They have changed their minds. They have made mistakes. They have discovered what works for them — and what does not.
                </p>
                <p>
                  Insights should reflect that reality. You may not agree with every perspective. You may not follow every recommendation.
                </p>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 text-xs font-medium text-slate-800">
                  <p>✓ Understand what happened.</p>
                  <p>✓ Understand what was learned.</p>
                  <p>✓ Understand what the entrepreneur would do differently.</p>
                  <p className="text-[#0062D2] font-bold pt-1">
                    ✓ Consider what applies to your own journey.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: INSIGHTS ARE NOT INSTRUCTIONS & THE KNOWLEDGE KEEPS MOVING */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-xl font-serif font-bold text-slate-950">
                  INSIGHTS ARE NOT INSTRUCTIONS
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  Read an experience. Question it. Relate it to your own context. Take what is useful. Leave what is not.
                </p>
                <p className="text-xs font-semibold text-slate-900 border-l-2 border-[#0062D2] pl-3 italic">
                  The purpose is not to tell every entrepreneur what to do. It is to give entrepreneurs better things to think about.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-md space-y-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-300 block">
                  THE KNOWLEDGE KEEPS MOVING
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  One entrepreneur learns something through experience. They share it. Another entrepreneur discovers a new perspective. They apply it. They learn something else. They share that. And the cycle continues:
                </p>
                <div className="p-3 rounded-xl bg-white/10 border border-white/10 text-center font-mono font-bold text-xs sm:text-sm text-sky-200">
                  Learning → Sharing → Relationships (LSR)
                </div>
                <p className="text-xs text-slate-300 font-light">
                  LSR is not simply a model. It is a way knowledge moves through a community.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 6: HAVE SOMETHING WORTH SHARING? ──────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
              CONTRIBUTE YOUR LESSONS
            </span>
            <span className="h-[2px] w-6 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-950">
            HAVE SOMETHING WORTH SHARING?
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-light max-w-2xl mx-auto">
            <p>
              Perhaps you have built something. Solved something. Learned something. Failed at something and discovered what the failure taught you. Or developed a perspective that another entrepreneur could genuinely benefit from.
            </p>
            <p className="font-serif font-bold text-slate-950 text-lg sm:text-xl">
              "The most valuable lesson may be the one you once wished someone had shared with you."
            </p>
            <p className="text-[#0062D2] font-semibold text-sm">
              Experience is meant to be shared.
            </p>
          </div>

          <div className="pt-2">
            <GalaxyButton
              href="/events/speak"
              size="lg"
              className="font-semibold"
            >
              Propose an Insight or Masterclass
            </GalaxyButton>
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: CLOSING ROYAL HERO BANNER (EVERY ARTICLE HAS A JOURNEY BEHIND IT) ── */}
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
                — KNOWLEDGE THAT TRAVELS —
              </span>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.1]">
                EVERY ARTICLE HAS A JOURNEY BEHIND IT.
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-white/90 leading-relaxed font-light max-w-2xl">
                <p>
                  Every lesson came from somewhere. Every perspective was shaped by experience. Every story belongs to someone.
                </p>
                <div className="space-y-1.5 pl-3 border-l-2 border-sky-300 text-sm text-sky-100 font-medium">
                  <p>• Read the experience.</p>
                  <p>• Think about the lesson.</p>
                  <p>• Take your own next step.</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <GalaxyButton
                  href="#articles-feed"
                  size="default"
                  className="font-semibold"
                >
                  Explore All Insights
                </GalaxyButton>

                <GalaxyButton
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="transparent"
                  size="default"
                  className="font-semibold"
                >
                  Open Unity App
                </GalaxyButton>
              </div>
            </div>

            {/* Right Cursive Script */}
            <div className="lg:col-span-4 text-center lg:text-right select-none pointer-events-none">
              <p
                className="text-3xl sm:text-4xl lg:text-5xl font-light italic leading-tight text-white drop-shadow-lg"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Lived.
                <br />
                Learned.
                <br />
                Shared.
                <br />
                Applied.
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
                <div>
                  <div className="text-sm font-bold text-slate-900">
                    {readingArticle.author.name}
                  </div>
                  <div className="text-xs text-slate-500">
                    {readingArticle.author.title} — {readingArticle.author.company}
                  </div>
                </div>

                <span className="text-xs text-slate-400">
                  {readingArticle.date}
                </span>
              </div>

              {/* Content Paragraphs */}
              <div className="space-y-4 text-slate-700 text-sm leading-relaxed font-light">
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
                  className="px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
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
