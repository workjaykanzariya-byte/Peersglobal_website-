'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Search,
  ArrowRight,
  X,
  Heart,
  Bookmark,
  Share2,
  CheckCircle2,
  MapPin,
  Building2,
  TrendingUp,
  Award,
  Users,
  Compass,
  Sparkles,
  SlidersHorizontal,
} from 'lucide-react'

// ─── Stories Data ────────────────────────────────────────────────────────────
export interface StoryItem {
  id: string
  category: string
  categoryColor: string
  headline: string
  authorName: string
  authorRole: string
  authorCompany: string
  city: string
  chapter: string
  image: string
  outcome: string
  impactBadge: string
  likes: number
  situation: string
  whatHappened: string
  results: string
}

const ALL_STORIES: StoryItem[] = [
  {
    id: 'story-1',
    category: 'MANUFACTURING & PACKAGING',
    categoryColor: 'text-purple-600',
    headline: '“A single peer referral became a ₹1.2 Crore recurring annual supply contract.”',
    authorName: 'Jignesh Shah',
    authorRole: 'Founder & Managing Director',
    authorCompany: 'Shah Packaging Pvt Ltd',
    city: 'Ahmedabad',
    chapter: 'Ahmedabad Chapter',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    outcome: '₹1.2 Cr Annual Revenue',
    impactBadge: 'Client Acquisition · Zero Cold Friction',
    likes: 42,
    situation:
      'Shah Packaging had idle corrugation capacity following a major plant expansion in Sanand, while fellow peer Rohit Mehta was experiencing delayed shipments and quality control issues from legacy regional suppliers.',
    whatHappened:
      'During a cross-Circle Collaboration Roundtable, Rohit learned of Jignesh’s high-precision corrugated box production. Instead of a standard commercial pitch, Rohit passed a key automotive client relationship directly to Jignesh.',
    results:
      'An initial ₹15 Lakh test order expanded into an annual ₹1.2 Crore continuous packaging supply contract spanning across three Western region distribution hubs.',
  },
  {
    id: 'story-2',
    category: 'CROSS-BORDER TRADE & EXPORTS',
    categoryColor: 'text-blue-600',
    headline: '“Our joint export corridor unlocked 3 new international markets within 9 months.”',
    authorName: 'Priya Desai',
    authorRole: 'Co-Founder & CEO',
    authorCompany: 'Desai Global Exports',
    city: 'Surat',
    chapter: 'Surat Chapter',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    outcome: '3 Global Corridors',
    impactBadge: 'Shared Infrastructure · 18% Cost Cut',
    likes: 67,
    situation:
      'Desai Exports held premium organic textile inventory but lacked bonded cold-chain freight and compliant European customs clearing channels. Fellow peer Karan Malhotra held trade corridors but lacked manufacturer exclusivity.',
    whatHappened:
      'Meeting at the National Conclave, both founders structured a 50:50 joint export venture under which Malhotra handled all multi-modal clearance while Desai concentrated strictly on export-grade production.',
    results:
      'Successfully shipped 24 container loads into Hamburg, Rotterdam, and Dubai within 9 months, cutting freight landing costs by 18% and generating over ₹8.5 Cr in top-line exports.',
  },
  {
    id: 'story-3',
    category: 'OPERATIONAL WISDOM & RISK',
    categoryColor: 'text-amber-600',
    headline: '“A 45-minute confidential hot-seat session saved our factory 18 months of compliance delays.”',
    authorName: 'Amit Trivedi',
    authorRole: 'Managing Director',
    authorCompany: 'Trivedi Chemicals Ltd',
    city: 'Vadodara',
    chapter: 'Vadodara Chapter',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    outcome: '₹38 Lakhs Saved',
    impactBadge: 'Risk Avoidance · Rapid Green Clearance',
    likes: 89,
    situation:
      'Amit was preparing to invest ₹65 Lakhs in an imported solvent recovery column for his Dahej plant, based on vendor promises that overlooked complex pollution control board (GPCB) regulatory hurdles.',
    whatHappened:
      'In a 45-minute confidential peer review session, Sandeep Kulkarni, who had commissioned the exact same system in Maharashtra two years earlier, laid bare the compliance bottlenecks and recommended an indigenous modified catalytic alternate.',
    results:
      'Amit avoided a costly 18-month equipment lock-in, saved ₹38 Lakhs in capital expenditure, and achieved environmental zero-discharge clearance on the very first inspection.',
  },
  {
    id: 'story-4',
    category: 'ENTERPRISE TECH & TALENT',
    categoryColor: 'text-emerald-600',
    headline: '“We built a turnkey 60-engineer specialized delivery pod in 3 weeks through peer collaboration.”',
    authorName: 'Neha Patel',
    authorRole: 'Founder & CEO',
    authorCompany: 'Patel Talent Labs',
    city: 'Bengaluru',
    chapter: 'Bengaluru Chapter',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    outcome: '60 Engineers Deployed',
    impactBadge: 'Resource Sharing · Multi-Year Retainer',
    likes: 54,
    situation:
      'Simran Kaur’s enterprise SaaS platform secured a Tier-1 US fintech contract requiring 60 certified React Native and cloud security engineers within 30 days or face contract cancellation penalties.',
    whatHappened:
      'Through a direct introduction by a Bengaluru Chapter peer, Neha Patel redirected an entire bench of vetted engineers under a custom white-label master services agreement.',
    results:
      'The client went live 6 days ahead of schedule, generating ₹2.4 Cr in annual billing and turning into a recurring 3-year partnership.',
  },
  {
    id: 'story-5',
    category: 'INFRASTRUCTURE & MEGA TENDERS',
    categoryColor: 'text-rose-600',
    headline: '“Our two mid-size firms formed a consortium to win a ₹45 Crore smart highway tender.”',
    authorName: 'Vikram Shroff',
    authorRole: 'Chairman & MD',
    authorCompany: 'Apex Infrastructure Group',
    city: 'Mumbai',
    chapter: 'Mumbai Chapter',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    outcome: '₹45 Cr Bid Won',
    impactBadge: 'Consortium Bidding · Scale Multiplication',
    likes: 112,
    situation:
      'State highway tenders required both Class-A civil engineering pre-qualification and specialized IoT toll sensor telematics. Neither firm met all criteria alone.',
    whatHappened:
      'Within their Circle, Vikram Shroff and IoT sensor founder Harshil Patel structured a legally governed joint bidding consortium with shared performance guarantees.',
    results:
      'They beat two legacy corporate conglomerates to win the ₹45 Cr EPC contract, creating 140 new regional jobs.',
  },
  {
    id: 'story-6',
    category: 'GROWTH CAPITAL & FAMILY OFFICE',
    categoryColor: 'text-cyan-600',
    headline: '“Instead of months of pitch decks, a warm introduction closed our ₹15 Crore Series-A in 14 days.”',
    authorName: 'Ananya Birla',
    authorRole: 'Founder & Managing Partner',
    authorCompany: 'Nexus Growth Equity',
    city: 'Bengaluru',
    chapter: 'Bengaluru Chapter',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    outcome: '₹15 Cr Capital Raised',
    impactBadge: 'Founder-Friendly Terms · Zero Brokerage',
    likes: 76,
    situation:
      'A fast-scaling clean mobility venture needed growth capital for battery swapping stations but was facing predatory term sheets from speculative funds.',
    whatHappened:
      'A veteran peer connected the founder directly to an institutional family office principal within Peers Global who values sustainable unit economics.',
    results:
      'Closed ₹15 Crore at founder-favorable governance terms with full closing completed in 14 business days.',
  },
  {
    id: 'story-7',
    category: 'SHARED CAPEX & LABS',
    categoryColor: 'text-indigo-600',
    headline: '“We monetized 40% idle testing line capacity, turning a ₹25 Lakh monthly loss into profit.”',
    authorName: 'Sunil Mittal',
    authorRole: 'Managing Director',
    authorCompany: 'Sterling Engineering Consortium',
    city: 'Delhi NCR',
    chapter: 'Delhi NCR Chapter',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    outcome: '100% Line Utilization',
    impactBadge: 'CapEx Efficiency · Shared Tooling',
    likes: 48,
    situation:
      'High-precision robotic testing equipment sat idle 3 days a week, while 2 fellow peers in automotive diagnostics were struggling with 8-week lab backlogs.',
    whatHappened:
      'The peers structured a shared-access schedule with certified operator time and co-calibrated QA standards.',
    results:
      'Both peers slashed testing turnaround from 8 weeks to 48 hours while the facility owner covered 100% of equipment debt servicing.',
  },
  {
    id: 'story-8',
    category: 'CROSS-BORDER M&A',
    categoryColor: 'text-teal-600',
    headline: '“Navigated our maiden cross-border UK acquisition with zero brokerage and trusted local counsel.”',
    authorName: 'Sangeeta Reddy',
    authorRole: 'Managing Partner',
    authorCompany: 'Cross-Border Advisory Partners',
    city: 'Singapore',
    chapter: 'Singapore Chapter',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
    outcome: 'Turnkey UK Acquisition',
    impactBadge: 'Cross-Border Ease · High-Trust Counsel',
    likes: 95,
    situation:
      'A Pune-based engineering firm was expanding into the Midlands in the UK but had no trusted local corporate tax or regulatory guidance.',
    whatHappened:
      'Peers from the London and Singapore Chapters facilitated direct introductions to vetted UK corporate solicitors and local industrial development boards.',
    results:
      'Completed the acquisition 4 months faster with complete regulatory clearance and local grant subsidies.',
  },
  {
    id: 'story-9',
    category: 'CLEANTECH & RENEWABLES',
    categoryColor: 'text-emerald-600',
    headline: '“Replaced diesel generators across 12 industrial facilities with a shared rooftop solar PPA.”',
    authorName: 'Priya Menon',
    authorRole: 'Executive Director',
    authorCompany: 'Kalyan Renewable Energy',
    city: 'Hyderabad',
    chapter: 'Hyderabad Chapter',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    outcome: '4.2 MW Solar Grid',
    impactBadge: '32% Energy Savings · ESG Compliance',
    likes: 63,
    situation:
      'Multiple manufacturing peers in the Cherlapally industrial belt faced rising grid power tariffs and unreliable power back-up costs.',
    whatHappened:
      'Priya grouped the 12 peer factories into a single rooftop solar power purchase agreement (PPA) with zero upfront capital required from factory owners.',
    results:
      'Delivered 4.2 MW clean capacity, saving each business owner 32% on monthly electricity expenditures.',
  },
]

export function StoriesPageClient() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedChapter, setSelectedChapter] = useState('All')
  const [activeStory, setActiveStory] = useState<StoryItem | null>(null)
  const [likedStories, setLikedStories] = useState<Record<string, boolean>>({})

  // Unique lists for filter pills
  const categories = useMemo(() => {
    const list = Array.from(new Set(ALL_STORIES.map((s) => s.category)))
    return ['All', ...list]
  }, [])

  const chapters = useMemo(() => {
    const list = Array.from(new Set(ALL_STORIES.map((s) => s.chapter)))
    return ['All', ...list]
  }, [])

  // Filtered stories
  const filteredStories = useMemo(() => {
    return ALL_STORIES.filter((story) => {
      const matchesSearch =
        searchQuery.trim() === '' ||
        story.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.authorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.authorCompany.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.outcome.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory =
        selectedCategory === 'All' || story.category === selectedCategory

      const matchesChapter =
        selectedChapter === 'All' || story.chapter === selectedChapter

      return matchesSearch && matchesCategory && matchesChapter
    })
  }, [searchQuery, selectedCategory, selectedChapter])

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setLikedStories((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      
      {/* ─── Top Brand Header Bar (Mindvalley Style) ───────────────────────── */}
      <header className="border-b border-slate-100 bg-white sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/stories" className="flex items-center gap-2">
            <span className="font-sans text-lg sm:text-xl font-bold tracking-tight text-slate-900">
              Peers Global <span className="text-[#0078D4]">Stories</span>
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/contact?intent=share-story"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#0078D4] hover:bg-[#006cbd] px-4 py-2 text-xs font-semibold text-white transition-all shadow-xs"
            >
              <span>Tell your story</span>
            </Link>
            <Link
              href="/membership"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 hover:border-slate-400 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition-colors"
            >
              <span>Join Peers</span>
            </Link>
          </div>
        </div>
      </header>

      {/* ─── Main Hero Section ────────────────────────────────────────────── */}
      <section className="pt-12 sm:pt-16 pb-8 sm:pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-950 tracking-tight leading-[1.12]">
            A living library of <br />
            entrepreneur{' '}
            <span className="bg-gradient-to-r from-[#0078D4] via-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
              collaboration.
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
            First-person stories from across Peers Global circles, trade delegations, and joint ventures. Search by circle, outcome, or chapter, and find the exact proof you need.
          </p>

          {/* 3 Key Stats Counters */}
          <div className="mt-8 flex items-center gap-8 sm:gap-14 border-t border-slate-100 pt-6">
            <div>
              <span className="block font-sans text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                1,200+
              </span>
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
                Stories
              </span>
            </div>

            <div className="h-8 w-px bg-slate-200" />

            <div>
              <span className="block font-sans text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                11+
              </span>
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
                Chapters / Cities
              </span>
            </div>

            <div className="h-8 w-px bg-slate-200" />

            <div>
              <span className="block font-sans text-2xl sm:text-3xl font-bold text-[#0078D4] tracking-tight">
                100%
              </span>
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
                Verified Impact
              </span>
            </div>
          </div>
        </div>

        {/* ─── Search & Filter Bar ────────────────────────────────────────── */}
        <div className="mt-10 max-w-5xl">
          {/* Big Search Input */}
          <div className="relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stories, outcomes, founders, chapters..."
              className="w-full rounded-full border border-slate-200 bg-white pl-13 pr-6 py-4 text-sm sm:text-base text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-[#0078D4] focus:ring-2 focus:ring-[#0078D4]/20 outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Filter Dropdowns / Pills Row */}
          <div className="mt-4 flex flex-wrap items-center gap-2.5">
            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-2xs hover:bg-slate-50 transition cursor-pointer outline-none focus:border-[#0078D4]"
              >
                <option value="All">All Categories ▾</option>
                {categories
                  .filter((c) => c !== 'All')
                  .map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
              </select>
            </div>

            {/* Chapter Filter */}
            <div className="relative">
              <select
                value={selectedChapter}
                onChange={(e) => setSelectedChapter(e.target.value)}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-2xs hover:bg-slate-50 transition cursor-pointer outline-none focus:border-[#0078D4]"
              >
                <option value="All">All Chapters ▾</option>
                {chapters
                  .filter((c) => c !== 'All')
                  .map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
              </select>
            </div>

            {/* Reset Filter Button if active */}
            {(selectedCategory !== 'All' || selectedChapter !== 'All' || searchQuery !== '') && (
              <button
                onClick={() => {
                  setSelectedCategory('All')
                  setSelectedChapter('All')
                  setSearchQuery('')
                }}
                className="rounded-full bg-slate-100 hover:bg-slate-200 px-3.5 py-2 text-xs font-semibold text-slate-600 transition"
              >
                Reset All Filters
              </button>
            )}
          </div>

          {/* Counter Headline */}
          <div className="mt-8 text-xs font-semibold text-slate-500">
            {filteredStories.length} verified {filteredStories.length === 1 ? 'story' : 'stories'} for you
          </div>
        </div>
      </section>

      {/* ─── 3-Column Story Cards Grid ───────────────────────────────────── */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredStories.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-12 text-center">
            <h3 className="text-base font-bold text-slate-800">No matching stories found</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
              Try adjusting your search term or reset the category filters to view all stories.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story) => {
              const isLiked = !!likedStories[story.id]
              return (
                <div
                  key={story.id}
                  onClick={() => setActiveStory(story)}
                  className="group flex flex-col justify-between rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
                >
                  <div>
                    {/* Top Portrait Image */}
                    <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                      <Image
                        src={story.image}
                        alt={story.authorName}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="size-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Top Chapter Pill */}
                      <div className="absolute top-3 left-3 z-10">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-[10px] font-semibold text-white">
                          {story.city}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      {/* Overline Category */}
                      <span className={`text-[11px] font-bold uppercase tracking-wider block mb-2 ${story.categoryColor}`}>
                        {story.category}
                      </span>

                      {/* Quote Headline */}
                      <h3 className="font-sans text-lg sm:text-xl font-bold text-slate-900 leading-snug tracking-tight group-hover:text-[#0078D4] transition-colors line-clamp-3">
                        {story.headline}
                      </h3>

                      {/* Author Info */}
                      <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-3">
                        <div>
                          <p className="text-xs sm:text-sm font-bold text-slate-900">
                            {story.authorName}
                          </p>
                          <p className="text-[11px] text-slate-500 truncate max-w-[240px]">
                            {story.authorRole} · {story.authorCompany}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Outcome & Like Action Strip */}
                  <div className="px-6 pb-5 pt-2 flex items-center justify-between border-t border-slate-100/80 text-xs">
                    <span className="font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/60 text-[11px]">
                      {story.outcome}
                    </span>

                    <button
                      type="button"
                      onClick={(e) => toggleLike(story.id, e)}
                      className="flex items-center gap-1.5 text-slate-400 hover:text-rose-500 transition-colors"
                      aria-label="Like story"
                    >
                      <Heart
                        className={`size-4 ${
                          isLiked ? 'fill-rose-500 text-rose-500' : 'text-slate-400'
                        }`}
                      />
                      <span className="text-[11px] font-mono">
                        {story.likes + (isLiked ? 1 : 0)}
                      </span>
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </section>

      {/* ─── Detail Story Modal ───────────────────────────────────────────── */}
      {activeStory && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setActiveStory(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-700 bg-slate-950 p-6 sm:p-8 text-white shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <button
              type="button"
              onClick={() => setActiveStory(null)}
              className="absolute top-4 right-4 flex size-8 items-center justify-center rounded-[4px] bg-white/10 text-slate-400 hover:bg-white/20 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="size-4" />
            </button>

            {/* Author Header */}
            <div className="flex items-center gap-4 pb-5 border-b border-white/10">
              <div className="relative size-16 sm:size-20 rounded-xl overflow-hidden border border-white/20 shrink-0">
                <Image
                  src={activeStory.image}
                  alt={activeStory.authorName}
                  fill
                  className="size-full object-cover"
                />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400 block mb-1">
                  {activeStory.category} · {activeStory.chapter}
                </span>
                <h3 className="font-sans text-xl sm:text-2xl font-bold text-white leading-tight">
                  {activeStory.authorName}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  {activeStory.authorRole} · {activeStory.authorCompany}
                </p>
              </div>
            </div>

            {/* Main Headline */}
            <h4 className="font-sans text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug mt-6">
              {activeStory.headline}
            </h4>

            {/* Outcome Metric Highlight Bar */}
            <div className="mt-4 flex items-center justify-between rounded-lg bg-blue-950/70 border border-blue-800/50 p-3.5 text-xs">
              <span className="text-slate-300 font-medium">Verified Metric:</span>
              <span className="font-bold text-emerald-400 text-sm">
                {activeStory.outcome} ({activeStory.impactBadge})
              </span>
            </div>

            {/* Narrative Case Study Breakdown */}
            <div className="mt-6 flex flex-col gap-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                  The Initial Situation
                </span>
                <p>{activeStory.situation}</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-1">
                  What Happened
                </span>
                <p>{activeStory.whatHappened}</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                  The Measurable Results
                </span>
                <p>{activeStory.results}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <Link
                href="/membership"
                className="inline-flex items-center gap-2 rounded-[4px] bg-[#0078D4] hover:bg-[#006cbd] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white transition-colors shadow-md"
              >
                <span>Join Peers Global</span>
                <ArrowRight className="size-4" />
              </Link>
              <button
                type="button"
                onClick={() => setActiveStory(null)}
                className="text-xs font-semibold text-slate-400 hover:text-white transition-colors"
              >
                Close Story
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
