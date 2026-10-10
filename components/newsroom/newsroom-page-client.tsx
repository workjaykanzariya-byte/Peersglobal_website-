'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  ChevronRight,
  Megaphone,
  Download,
  Calendar,
  ExternalLink,
  FileText,
  Mail,
  Copy,
  Check,
  Radio,
  Tv,
  Globe,
  BookOpen,
  BookMarked,
  Mic,
  ShieldCheck,
  Send,
  Sparkles,
  CheckCircle2,
  Newspaper,
  Info,
  Clock,
  User,
  Building,
  Briefcase,
  HelpCircle,
} from 'lucide-react'

const LATEST_STORIES = [
  {
    date: 'September 28, 2026',
    headline: 'PEERS GLOBAL Expands Operating Footprint Across 19 Industrial Hubs',
    category: 'Community Announcement',
    summary:
      'With new Circle charters activated across Mumbai, Surat, Vadodara, and Ahmedabad, structured bilateral peer collaborations now connect over 200 high-growth business founders.',
    readMoreUrl: '#media-enquiry',
  },
  {
    date: 'August 14, 2026',
    headline: 'Unity Mobile Ecosystem Deploys Verified Bilateral Collaboration Protocols',
    category: 'New Initiatives',
    summary:
      'The proprietary platform now integrates direct hot-seat coordination, 1-to-1 sync logs, and automated Life Impact metrics for every operating Circle.',
    readMoreUrl: '#media-enquiry',
  },
  {
    date: 'June 20, 2026',
    headline: '1 Million Mission Forum Commits ₹5 Cr to Grassroots MSME Mentorship',
    category: 'Impact Updates',
    summary:
      'Section 8 foundation initiative expands non-commercial fellowship programs for first-generation manufacturing and trading founders across Tier-2 and Tier-3 districts.',
    readMoreUrl: '#media-enquiry',
  },
  {
    date: 'May 05, 2026',
    headline: 'National Leadership Council Appoints Executive Directors for Regional Chapters',
    category: 'Leadership Developments',
    summary:
      'Distinguished industry founders assume stewardship of regional clusters to ensure zero-conflict peer governance and community standards.',
    readMoreUrl: '#media-enquiry',
  },
]

const PRESS_RELEASES = [
  {
    date: 'July 15, 2026',
    headline: 'PEERS GLOBAL Formalises National Governance Council and Executive Leadership Charters',
    type: 'Strategic Developments',
    summary:
      'PEERS GLOBAL announces the formal constitution of its national leadership framework, codifying Circle Founder and Director tenures across all operating clusters.',
    mediaContact: 'media@peersglobal.com',
  },
  {
    date: 'May 22, 2026',
    headline: 'Dr. Pravin Parmar Keynotes National MSME Forum on Relational Capital & Non-Zero-Sum Growth',
    type: 'Leadership & Speaking',
    summary:
      'PEERS GLOBAL founder outlines the architectural roadmap for shifting Indian enterprise networks from extractive transactional referral models to protected peer collaboration.',
    mediaContact: 'media@peersglobal.com',
  },
  {
    date: 'February 10, 2026',
    headline: 'PEERS Foundation Announces Scaled 1 Action = 1 Life Impacted Framework',
    type: 'Impact Initiatives',
    summary:
      'Every verified entrepreneurial collaboration and masterclass within the PEERS GLOBAL ecosystem is now tied to direct social impact and student mentorship sponsorships.',
    mediaContact: 'foundation@peersglobal.com',
  },
  {
    date: 'November 18, 2025',
    headline: 'PEERS GLOBAL Closes Inaugural Annual Conclave with 500+ Industrial Leaders',
    type: 'Major Events',
    summary:
      'Flagship annual gathering unites manufacturing, technology, logistics, and trading entrepreneurs to establish bilateral industry syndicates.',
    mediaContact: 'events@peersglobal.com',
  },
]

const VERIFIED_MEDIA_COVERAGE = [
  {
    publication: 'The Economic Times',
    date: 'August 24, 2026',
    headline: 'How Non-Zero-Sum Peer Networks Are Reshaping MSME Growth in Western India',
    subject: 'Leadership, Circle Dynamics & Relational Capital in Manufacturing Clusters',
    source: 'ET BrandEquity / Enterprise Feature',
  },
  {
    publication: 'Mint / LiveMint',
    date: 'June 12, 2026',
    headline: 'Beyond Referral Clubs: Why High-Growth Indian Founders Are Choosing Closed Governance Circles',
    subject: 'Analysis of PEERS GLOBAL operating protocols and confidential hot-seat problem solving',
    source: 'LiveMint Special In-Depth',
  },
  {
    publication: 'Business Standard',
    date: 'March 30, 2026',
    headline: 'Social Capital Meets Industrial Scale: The Rise of Collaborative Business Communities',
    subject: 'Coverage of PEERS GLOBAL 1-to-1 sync frameworks and cross-sectoral syndicates',
    source: 'BS Industrial & SME Forum',
  },
]

const MEDIA_ECOSYSTEM = [
  {
    title: 'PEERS GLOBAL PODCAST',
    desc: 'A long-form conversation platform for entrepreneurial stories and experience.',
    status: 'In-depth, unscripted executive dialogues with founders, industrial leaders, and domain pioneers dissecting operational mechanics, resilience, and inflection points.',
    icon: Radio,
    tag: 'Long-Form Audio & Video',
  },
  {
    title: 'VYAPAAR JAGAT TV',
    desc: 'A platform for entrepreneurial and business stories.',
    status: 'High-production visual broadcast series covering industrial breakthroughs, factory floor innovations, MSME summits, and changemaker profiles across Bharat.',
    icon: Tv,
    tag: 'Broadcast & Video Stories',
  },
  {
    title: 'VYAPAARJAGAT.COM',
    desc: 'A dedicated platform for entrepreneurial stories and business visibility.',
    status: 'National digital editorial portal delivering continuous coverage of Indian enterprise, startup triumphs, policy perspectives, and founder spotlights.',
    icon: Globe,
    tag: 'Digital News & Profiles',
  },
  {
    title: 'CIRCLE MAGAZINES',
    desc: 'Stories from the entrepreneurial community, presented through Circle-level publications.',
    status: 'Hyper-local and cluster-level quarterly print & digital journals documenting Peer achievements, collaborative deals, and leadership perspectives.',
    icon: BookOpen,
    tag: 'Quarterly Print & Digital',
  },
  {
    title: 'COFFEE TABLE BOOK',
    desc: 'A curated record of entrepreneurial stories and experiences.',
    status: 'Premium archival volume chronicling the journeys of notable builders, their values, family legacies, and generational impact.',
    icon: BookMarked,
    tag: 'Annual Curated Edition',
  },
  {
    title: 'PEERS CANDID TALKS',
    desc: 'Conversations designed to let entrepreneurs speak in their own voice.',
    status: 'Unfiltered, candid fireside dialogues addressing the real vulnerabilities, setbacks, resilience, and breakthroughs behind the balance sheets.',
    icon: Mic,
    tag: 'Fireside Video Series',
  },
]

const MEDIA_KIT_DOWNLOADS = [
  {
    name: 'DOWNLOAD LOGO PACK',
    desc: 'Primary & secondary vector logos, high-res PNGs, dark and light lockups, icon marks.',
    format: 'ZIP (SVG, PNG, EPS)',
  },
  {
    name: 'DOWNLOAD FOUNDER BIO',
    desc: 'Official biographical narrative of Dr. Pravin Parmar, short and long-form approved copy.',
    format: 'PDF / DOCX',
  },
  {
    name: 'DOWNLOAD PEERS GLOBAL FACT SHEET',
    desc: 'Essential numbers, ecosystem taxonomy, Circle architecture, and governance overview.',
    format: '2-Page Executive PDF',
  },
  {
    name: 'DOWNLOAD OFFICIAL BOILERPLATE',
    desc: 'Standard approved editorial and press release boilerplates with media contact details.',
    format: 'Text & PDF Format',
  },
  {
    name: 'DOWNLOAD APPROVED PHOTOGRAPHS',
    desc: 'Print-ready, high-resolution portrait and conclave photography for editorial licensing.',
    format: 'ZIP (High-Res TIFF & JPG)',
  },
  {
    name: 'DOWNLOAD BRAND GUIDELINES',
    desc: 'Official typography, colour palettes, spacing rules, and usage restrictions.',
    format: 'PDF Guide (v2.4)',
  },
]

export function NewsroomPageClient() {
  const [copied, setCopied] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    role: '',
    topic: '',
    deadline: '',
    needs: '',
    contact: '',
  })

  const officialBoilerplateText =
    "PEERS GLOBAL is the world's first community of collaboration — a global leadership organisation of entrepreneurs who grow by helping each other grow. Founded in Bharat by Dr. Pravin Parmar, PEERS GLOBAL operates governed Circles across industries and cities, bringing together honest entrepreneurs to build enduring enterprises, foster non-zero-sum collaboration, and create generational impact through entrepreneurship."

  const copyBoilerplate = () => {
    navigator.clipboard.writeText(officialBoilerplateText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  const handleSubmitEnquiry = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#FDFDFE] text-slate-900 font-sans selection:bg-blue-100 selection:text-[#0062D2]">
      {/* ─── Top Breadcrumb Navigation ─── */}
      <div className="border-b border-slate-200/70 bg-white/90 backdrop-blur-md sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-[#0062D2] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/about" className="hover:text-[#0062D2] transition-colors">
              About
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold">Newsroom</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-[11px] font-medium text-slate-500">
            <span className="inline-block size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Public Record &amp; Media Secretariat</span>
          </div>
        </div>
      </div>

      {/* ─── Hero Section (Home & Circles Master Design Layout) ─── */}
      <section className="relative overflow-hidden bg-[#040F24] text-white pt-0 pb-12 sm:pb-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Home-style full-bleed hero with video backdrop */}
          <div className="min-h-[460px] lg:min-h-[520px] flex items-center">
            
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-10 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

            {/* Media Background Layer (Right ~60% fading into white on the left) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
            >
              {/* Active Video Background */}
              <video
                src="/videos/homepage-hero-bg.mp4"
                poster="/images/circles-hero-new.jpg"
                autoPlay
                loop
                muted
                playsInline
                className="size-full object-cover object-center opacity-90"
              />

              {/* Dark scrim matching the home hero */}
              <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(2,8,23,0.92)_0%,rgba(4,15,36,0.78)_45%,rgba(4,15,36,0.55)_100%)] pointer-events-none" />

              {/* Top-Right Script Typography */}
              <div className="hidden">
                <p className="text-xl sm:text-2xl text-white/95 leading-tight" style={{ fontFamily: 'var(--font-script)' }}>
                  Verified Facts
                </p>
                <p className="text-xl sm:text-2xl text-white/95 leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Authentic Stories
                </p>
                <p className="text-2xl sm:text-3xl text-amber-300 font-medium leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Public Record
                </p>
              </div>

              {/* Bottom-Right Frosted Glass Pill */}
              <div className="hidden">
                <div className="rounded-xl border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2.5 shadow-lg text-left">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/70">
                    PRESS SECRETARIAT
                  </p>
                  <p className="text-xs font-bold tracking-wider text-white">
                    PEERS GLOBAL NEWSROOM
                  </p>
                </div>
              </div>
            </div>

            {/* Left Content Area */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-12">
              <div className="max-w-xl lg:max-w-2xl flex flex-col items-start text-left">
                
                {/* Eyebrow with brand gradient bar */}
                <div className="flex items-center gap-2.5 mb-3.5">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/90">
                    PUBLIC RECORD &amp; PRESS SECRETARIAT
                  </span>
                </div>

                {/* H1 Heading */}
                <h1 className="text-3xl sm:text-5xl lg:text-[48px] font-semibold text-white tracking-tight leading-[1.14] mb-3.5">
                  What is happening at{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-rose-400">
                    PEERS GLOBAL.
                  </span>
                </h1>

                {/* Subtitle & Descriptions */}
                <p className="text-base sm:text-xl text-slate-200 font-normal leading-relaxed mb-5 max-w-2xl">
                  What we are doing, what we are building, what we are announcing, and where PEERS GLOBAL is being covered across national media.
                </p>

                {/* Featured Highlight Quote Card */}
                <div className="border-l-2 border-[#E11D48] pl-3 py-0.5 mb-6 max-w-xl">
                  <p className="italic text-white/95 text-sm sm:text-base font-medium leading-relaxed">
                    “A community is built through action. And meaningful action deserves to be documented without hype.”
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <a
                    href="#latest"
                    className="rounded-full bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] text-white px-6 py-3 text-xs sm:text-sm font-bold tracking-wider shadow-md hover:shadow-lg transition-all hover:scale-105 inline-flex items-center gap-2 uppercase cursor-pointer"
                  >
                    <span>Explore Latest</span>
                    <ArrowRight className="size-4" />
                  </a>

                  <a
                    href="#press-releases"
                    className="rounded-full border border-white/25 hover:bg-white/20 bg-transparent text-white px-5 py-3 text-xs sm:text-sm font-bold tracking-wider transition-all hover:scale-105 inline-flex items-center gap-2 uppercase cursor-pointer"
                  >
                    <span>Press Releases</span>
                  </a>

                  <a
                    href="#media-kit"
                    className="rounded-full border border-white/25 hover:bg-white/20 bg-transparent text-white px-5 py-3 text-xs sm:text-sm font-bold tracking-wider transition-all hover:scale-105 inline-flex items-center gap-2 uppercase cursor-pointer"
                  >
                    <span>Media Kit</span>
                  </a>
                </div>

              </div>
            </div>

          </div>

          {/* 4-Item Floating Stats Bar */}
          <div className="relative z-10 mt-4 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { val: '19 Hubs', label: 'National Footprint', sub: 'Operating Chapters across Bharat' },
              { val: '100% Fact-Checked', label: 'Verified Public Record', sub: 'Zero manufactured hype' },
              { val: '6 Ecosystem Media', label: 'Podcasts, TV & Books', sub: 'Continuous founder coverage' },
              { val: '24h Response', label: 'Media Enquiry Desk', sub: 'Direct journalist access' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200/90 p-3.5 sm:p-4 shadow-2xs hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">
                  {stat.val}
                </div>
                <div className="text-xs font-bold text-slate-900 mt-0.5">{stat.label}</div>
                <div className="text-[11px] text-slate-500 font-normal">{stat.sub}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── Section 1: LATEST (What is happening now) ─── */}
      <section id="latest" className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Context & Category Scope */}
            <div className="lg:col-span-4 space-y-5 lg:sticky lg:top-24">
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0062D2]">
                    LATEST DEVELOPMENTS
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight leading-snug">
                  What is happening now
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  The verified real-time pulse of expansions, leadership appointments, and milestone updates across the PEERS GLOBAL ecosystem.
                </p>
              </div>

              {/* Scope Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFD] border border-slate-200/90 shadow-2xs space-y-3">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Coverage Scope
                </div>
                <div className="grid grid-cols-1 gap-2 text-xs text-slate-700">
                  {[
                    'Community Announcements',
                    'New Circle Initiatives',
                    'Major Industrial Milestones',
                    'Leadership Councils',
                    'Impact & MSME Updates',
                    'Bilateral Collaborations',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 p-1.5 rounded-lg bg-white border border-slate-100">
                      <CheckCircle2 className="size-3.5 text-[#0062D2] shrink-0" />
                      <span className="font-medium text-slate-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Feed Grid */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                  [LIVE NEWSROOM FEED — ACTIVE ARCHIVE]
                </span>
                <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                  Newest first &bull; Real-time public record
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {LATEST_STORIES.map((story, idx) => (
                  <div
                    key={story.headline}
                    className="p-5 sm:p-6 rounded-2xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs hover:bg-white hover:border-[#0062D2] hover:shadow-md transition-all flex flex-col justify-between space-y-3.5 group"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-[#0062D2] font-bold border border-blue-100 text-[11px]">
                          {story.category}
                        </span>
                        <span className="text-slate-500 text-[11px]">{story.date}</span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-slate-950 group-hover:text-[#0062D2] transition-colors leading-snug">
                        {story.headline}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {story.summary}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between text-xs">
                      <span className="font-mono text-slate-400 text-[11px]">Item #{idx + 1}</span>
                      <a
                        href={story.readMoreUrl}
                        className="inline-flex items-center gap-1 font-bold text-[#0062D2] hover:underline uppercase tracking-wider text-[11px]"
                      >
                        <span>Details</span>
                        <ArrowRight className="size-3 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─── Section 2: PRESS RELEASES ─── */}
      <section id="press-releases" className="py-14 sm:py-20 bg-[#F8FAFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Column: Context & Covered Areas */}
            <div className="lg:col-span-4 space-y-5 lg:sticky lg:top-24">
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0062D2]">
                    PRESS RELEASES
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight leading-snug">
                  Official Announcements
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Press releases are the formal record of significant governance, policy, and organizational announcements.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Announcement Categories
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-800">
                  {[
                    'New Charters',
                    'Milestones',
                    'Leadership',
                    'Strategic Deals',
                    'Communities',
                    'Social Impact',
                    'Annual Summits',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-1.5 p-1.5 rounded-lg bg-slate-50 border border-slate-100 text-[11px]">
                      <CheckCircle2 className="size-3 text-[#0062D2] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Press Release List */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                  [OFFICIAL PRESS RELEASES — PERMANENT RECORD]
                </span>
                <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                  Downloadable official statements
                </span>
              </div>

              <div className="divide-y divide-slate-200/80 rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden">
                {PRESS_RELEASES.map((pr) => (
                  <div
                    key={pr.headline}
                    className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4 hover:bg-blue-50/20 transition-colors"
                  >
                    <div className="space-y-1.5 max-w-xl">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                        <span className="px-2.5 py-0.5 rounded bg-blue-50 text-[#0062D2] font-bold border border-blue-200 text-[11px]">
                          {pr.type}
                        </span>
                        <span className="text-slate-400">•</span>
                        <span className="text-slate-600 font-semibold text-[11px]">{pr.date}</span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-slate-950 leading-snug">
                        {pr.headline}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {pr.summary}
                      </p>

                      <div className="text-[11px] text-slate-500 font-mono pt-1">
                        Contact: <a href={`mailto:${pr.mediaContact}`} className="text-[#0062D2] font-semibold hover:underline">{pr.mediaContact}</a>
                      </div>
                    </div>

                    <a
                      href="#media-enquiry"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-[#0062D2] hover:text-white text-slate-700 text-xs font-bold border border-slate-200 hover:border-[#0062D2] transition-all shrink-0 self-start uppercase tracking-wider"
                    >
                      <span>Official PDF</span>
                      <Download className="size-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─── Section 3: IN THE MEDIA ─── */}
      <section id="in-the-media" className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-5">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0062D2]">
                  IN THE MEDIA
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
                When the story travels beyond our own channels
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Verified external coverage across major national and international business publications.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-semibold text-slate-700">
              {['Leadership', 'Circles', 'Manufacturing', '1-to-1 Sync', 'Impact'].map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Coverage Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {VERIFIED_MEDIA_COVERAGE.map((item) => (
              <div
                key={item.headline}
                className="p-6 rounded-2xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs hover:border-[#0062D2] hover:bg-white hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0062D2] font-bold border border-blue-100 uppercase text-[11px]">
                      {item.publication}
                    </span>
                    <span className="text-slate-500 text-[11px]">{item.date}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-950 leading-snug">
                    &ldquo;{item.headline}&rdquo;
                  </h3>

                  <div className="space-y-1 text-xs text-slate-600 font-sans">
                    <div><strong className="text-slate-900 font-bold">Subject:</strong> {item.subject}</div>
                    <div><strong className="text-slate-900 font-bold">Source:</strong> {item.source}</div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400 text-[11px]">Verified Editorial</span>
                  <a
                    href="#media-enquiry"
                    className="inline-flex items-center gap-1 font-bold text-[#0062D2] hover:underline uppercase tracking-wider text-[11px]"
                  >
                    <span>Press Details</span>
                    <ExternalLink className="size-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Editorial Integrity Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#040F24] border border-slate-800 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-white">
              <ShieldCheck className="size-4.5 text-sky-400 shrink-0" />
              <span>Editorial Integrity Rule: Zero paid promotions presented as earned media.</span>
            </div>
            <span className="text-[11px] font-mono text-slate-300">
              Only verified editorial features are archived.
            </span>
          </div>

        </div>
      </section>

      {/* ─── Section 4: THE MEDIA STORY ─── */}
      <section className="py-12 sm:py-16 bg-[#040F24] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-cyan-200 text-[11px] font-mono uppercase tracking-widest border border-white/15">
            THE MEDIA STORY
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold leading-tight text-white">
            PEERS GLOBAL was created around a simple belief: <br />
            <span className="italic text-cyan-200">Every honest entrepreneurial story deserves visibility.</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
            Entrepreneurs build businesses that employ people, solve problems, create products, and serve communities. Yet many of their stories remain unseen. The Newsroom is where those journeys become part of the public record.
          </p>
        </div>
      </section>

      {/* ─── Section 5: OUR MEDIA ECOSYSTEM ─── */}
      <section id="media-ecosystem" className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0062D2]">
                OUR MEDIA ECOSYSTEM
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
              Platforms designed to give entrepreneurial stories a place to travel
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Specialized formats created to document, broadcast, and amplify the voices of builders across Bharat and the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {MEDIA_ECOSYSTEM.map((eco) => {
              const IconComp = eco.icon
              return (
                <div
                  key={eco.title}
                  className="p-6 rounded-2xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs hover:bg-white hover:border-[#0062D2] hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="size-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0062D2]">
                        <IconComp className="size-5" />
                      </div>
                      <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 uppercase tracking-wider">
                        {eco.tag}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-base sm:text-lg font-bold text-slate-950 group-hover:text-[#0062D2] transition-colors">
                        {eco.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-800 leading-snug">
                        {eco.desc}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal pt-2 border-t border-slate-200/60">
                      {eco.status}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs">
                    <span className="text-[11px] font-mono text-slate-400">Verified Format</span>
                    <a
                      href="#media-enquiry"
                      className="inline-flex items-center gap-1 font-bold text-[#0062D2] hover:underline uppercase tracking-wider text-[11px]"
                    >
                      <span>Participate / Pitch</span>
                      <ChevronRight className="size-3" />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ─── Section 6: FACTSHEET & MEDIA KIT ─── */}
      <section id="media-kit" className="py-14 sm:py-20 bg-[#F8FAFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0062D2]">
                FACTSHEET &amp; MEDIA KIT
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight leading-snug">
              Need to understand PEERS GLOBAL quickly?
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-normal">
              The Media Kit provides the essential information journalists, publishers, event organisers and partners may need.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MEDIA_KIT_DOWNLOADS.map((item) => (
              <div
                key={item.name}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between space-y-4 hover:border-[#0062D2] hover:shadow-md transition-all group"
              >
                <div className="space-y-2.5">
                  <div className="size-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0062D2]">
                    <FileText className="size-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0062D2] transition-colors leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500 font-semibold">{item.format}</span>
                  <a
                    href="#media-enquiry"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0062D2] hover:text-[#0052b3] uppercase tracking-wider"
                  >
                    <span>Request Kit</span>
                    <Download className="size-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* THE OFFICIAL BOILERPLATE BOX */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0062D2] block">
                  THE OFFICIAL BOILERPLATE
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-950">
                  PEERS GLOBAL — Standard Approved Editorial Copy
                </h3>
              </div>
              <button
                type="button"
                onClick={copyBoilerplate}
                className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full bg-blue-50 text-[#0062D2] border border-blue-200 hover:bg-blue-100 transition-colors cursor-pointer self-start sm:self-auto shrink-0 uppercase tracking-wider"
              >
                {copied ? <Check className="size-3.5 text-emerald-600" /> : <Copy className="size-3.5" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Boilerplate'}</span>
              </button>
            </div>

            <blockquote className="text-xs sm:text-sm text-slate-700 leading-relaxed italic border-l-4 border-[#0062D2] pl-4 py-1.5 bg-slate-50/70 rounded-r-xl">
              &ldquo;{officialBoilerplateText}&rdquo;
            </blockquote>
          </div>

        </div>
      </section>

      {/* ─── Section 7: FOR JOURNALISTS & MEDIA (ENQUIRY FORM) ─── */}
      <section id="media-enquiry" className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Column: Context & Welcomed Topics */}
            <div className="lg:col-span-5 space-y-5 lg:sticky lg:top-24">
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0062D2]">
                    FOR JOURNALISTS &amp; MEDIA
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight leading-snug">
                  Looking for a story, a source or a conversation?
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  We welcome thoughtful conversations with journalists and creators:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-800">
                {[
                  '● Entrepreneurship',
                  '● Business communities',
                  '● Collaboration',
                  '● Entrepreneurial leadership',
                  '● Innovation',
                  '● Impact',
                  '● The experience of building',
                  '● Changing MSME ecosystems',
                ].map((item) => (
                  <div key={item} className="p-2.5 rounded-xl bg-[#F8FAFD] border border-slate-200/70">
                    {item}
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200/80 space-y-2">
                <p className="text-xs sm:text-sm italic text-slate-900 font-medium">
                  &ldquo;If your story is relevant to our world, tell us what you are working on.&rdquo;
                </p>
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#0062D2]">
                  Direct Secretariat SLA: Under 24 Business Hours
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Media Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-md space-y-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-950">
                    MEDIA ENQUIRIES
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 pt-0.5">
                    We will route the enquiry to the appropriate spokesperson or leadership desk.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                    <CheckCircle2 className="size-12 text-emerald-600 mx-auto" />
                    <h4 className="text-lg font-bold text-emerald-950">
                      Media Enquiry Transmitted
                    </h4>
                    <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto">
                      Thank you. Your request has been logged with the PEERS GLOBAL Press Secretariat. A verified representative will respond within your indicated deadline.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false)
                        setFormData({
                          name: '',
                          organisation: '',
                          role: '',
                          topic: '',
                          deadline: '',
                          needs: '',
                          contact: '',
                        })
                      }}
                      className="mt-2 text-xs font-bold text-emerald-700 underline uppercase tracking-wider cursor-pointer"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitEnquiry} className="space-y-4 text-xs sm:text-sm">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="space-y-1">
                        <label className="font-bold text-slate-800 text-xs">
                          Your name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Aditi Sharma"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-[#0062D2] text-slate-900 text-xs sm:text-sm"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="font-bold text-slate-800 text-xs">
                          Publication / organisation <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.organisation}
                          onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                          placeholder="e.g. Financial Express / LiveMint"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-[#0062D2] text-slate-900 text-xs sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="space-y-1">
                        <label className="font-bold text-slate-800 text-xs">
                          Your role <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.role}
                          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                          placeholder="e.g. Senior Editor"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-[#0062D2] text-slate-900 text-xs sm:text-sm"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="font-bold text-slate-800 text-xs">
                          Your deadline <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.deadline}
                          onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                          placeholder="e.g. Oct 15, 2026 / 48 Hours"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-[#0062D2] text-slate-900 text-xs sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="font-bold text-slate-800 text-xs">
                        What you are working on <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        placeholder="e.g. Story on tier-2 manufacturing founder ecosystems"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-[#0062D2] text-slate-900 text-xs sm:text-sm"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-bold text-slate-800 text-xs">
                        What you need from PEERS GLOBAL <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={formData.needs}
                        onChange={(e) => setFormData({ ...formData, needs: e.target.value })}
                        placeholder="e.g. Founder interview with Dr. Pravin Parmar, case study data, high-res photos"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-[#0062D2] text-slate-900 text-xs sm:text-sm resize-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-bold text-slate-800 text-xs">
                        Your contact details (Email / Phone) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        placeholder="e.g. journalist@publication.com | +91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-[#0062D2] text-slate-900 text-xs sm:text-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                    >
                      <span>Transmit Media Enquiry →</span>
                      <Send className="size-3.5" />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─── Section 8: A NOTE ON ACCURACY ─── */}
      <section className="py-14 sm:py-18 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle background ambient accents */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Charter & Philosophy */}
              <div className="lg:col-span-5 space-y-4 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#0062D2] text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  STANDARDS &amp; GOVERNANCE
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
                  A NOTE ON ACCURACY
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  The Newsroom is an institutional public record. Every record released adheres to strict editorial integrity and verifiable validation standards.
                </p>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900">
                    <CheckCircle2 className="w-4 h-4 text-[#0062D2]" />
                    Institutional Stand
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    &ldquo;And claims should be supportable. If we publish it, we should be able to stand behind it.&rdquo;
                  </p>
                </div>
              </div>

              {/* Right Column: 6 Core Verifiable Principles Grid */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-blue-200 hover:shadow-xs transition-all flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-100/70 text-[#0062D2] flex items-center justify-center shrink-0 mt-0.5">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Chronological Rigour</h4>
                      <p className="text-[11px] text-slate-600 mt-0.5">Dates and milestone timelines must be verifiable and exact.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-blue-200 hover:shadow-xs transition-all flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-100/70 text-purple-700 flex items-center justify-center shrink-0 mt-0.5">
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Identity & Attribution</h4>
                      <p className="text-[11px] text-slate-600 mt-0.5">Names, designations, and affiliate titles are strictly authenticated.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-blue-200 hover:shadow-xs transition-all flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100/70 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Verified Metrics</h4>
                      <p className="text-[11px] text-slate-600 mt-0.5">Numbers and participation totals are cross-checked prior to release.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-blue-200 hover:shadow-xs transition-all flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-100/70 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Mic className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Authentic Quotations</h4>
                      <p className="text-[11px] text-slate-600 mt-0.5">Direct member and leader quotes are recorded and authorized.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-blue-200 hover:shadow-xs transition-all flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-100/70 text-indigo-700 flex items-center justify-center shrink-0 mt-0.5">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Source Traceability</h4>
                      <p className="text-[11px] text-slate-600 mt-0.5">All hyperlinks lead directly to verified primary origin documents.</p>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-blue-200 hover:shadow-xs transition-all flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-rose-100/70 text-rose-700 flex items-center justify-center shrink-0 mt-0.5">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Editorial Distinction</h4>
                      <p className="text-[11px] text-slate-600 mt-0.5">Official announcements remain distinct from opinions and commentary.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 9: Closing Royal Banner (FOR THE MEDIA) ─── */}
      <section className="relative py-12 sm:py-16 bg-[#040F24] text-white overflow-hidden border-t border-slate-800">
        {/* Deep celestial radial gradients & luminous aura */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(0,98,210,0.22),transparent_55%),radial-gradient(circle_at_85%_30%,rgba(225,29,72,0.15),transparent_50%),linear-gradient(115deg,#020817_0%,#071a3d_50%,#040f24_100%)]"
        />

        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* SVG Orbital Geometric Lines Background */}
        <div className="absolute -right-16 -top-16 bottom-0 pointer-events-none w-[360px] sm:w-[480px] lg:w-[580px] opacity-20 overflow-hidden flex items-center justify-center">
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-8 flex flex-col items-start space-y-3.5">
              <div className="inline-flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-400">
                  FOR THE MEDIA
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                Official information. Real stories. <br className="hidden sm:inline" />
                <span className="italic text-cyan-200">Verified facts. Direct access.</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-2xl">
                PEERS GLOBAL — Designed in Bharat. Built for the World.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="#latest"
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-xs font-bold shadow-md hover:scale-105 transition-all uppercase tracking-wider cursor-pointer"
                >
                  <span>Explore Latest</span>
                  <ArrowRight className="size-3.5" />
                </a>

                <a
                  href="#press-releases"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-white/30 hover:border-white bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md transition-all cursor-pointer"
                >
                  <span>Press Releases</span>
                </a>

                <a
                  href="#media-kit"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-white/30 hover:border-white bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md transition-all cursor-pointer"
                >
                  <span>Download Media Kit</span>
                </a>

                <a
                  href="#media-enquiry"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-white/30 hover:border-white bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md transition-all cursor-pointer"
                >
                  <span>Make Enquiry</span>
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-4 text-left lg:text-right select-none pointer-events-none drop-shadow-lg space-y-1 lg:pl-6">
              <p
                className="text-xl sm:text-2xl text-white/70 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Public Record
              </p>
              <p
                className="text-2xl sm:text-3xl text-sky-300 leading-tight font-bold"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Authentic &amp; Verified
              </p>
              <p
                className="text-xl sm:text-2xl text-rose-300 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Zero Hype
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
