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

      {/* ─── Hero Section ─── */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-white via-[#F6F9FD] to-[#EDF3FB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs font-bold uppercase tracking-wider text-[#0062D2] mx-auto shadow-xs">
            <Megaphone className="w-3.5 h-3.5 text-[#0062D2]" />
            Official Public Record
          </div>

          <div className="space-y-4">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#0062D2] block">
              PEERS GLOBAL
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-serif font-bold text-slate-950 tracking-tight leading-[1.1]">
              NEWSROOM
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-serif text-slate-800 italic max-w-3xl mx-auto leading-snug font-normal">
              What is happening at PEERS GLOBAL — and what the world is saying about it.
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-3 pt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
            <p className="font-serif italic text-slate-800 text-base sm:text-lg">
              A community is built through action. And meaningful action deserves to be documented.
            </p>
            <p>
              The PEERS GLOBAL Newsroom is where you can find the public record of what we are doing, what we are building, what we are announcing, and where PEERS GLOBAL is being talked about.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3 pt-2 text-xs sm:text-sm font-bold text-slate-700 font-mono">
              <span className="px-3 py-1 rounded-md bg-white border border-slate-200 shadow-xs">No manufactured headlines.</span>
              <span className="px-3 py-1 rounded-md bg-white border border-slate-200 shadow-xs">No inflated claims.</span>
              <span className="px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-[#0062D2] shadow-xs">Just information worth knowing.</span>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap justify-center gap-3 sm:gap-4">
            <a
              href="#latest"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0062D2] hover:bg-[#0052b3] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all uppercase tracking-wider"
            >
              Explore Latest
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#press-releases"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-slate-800 text-xs sm:text-sm font-semibold border border-slate-200 hover:bg-slate-50 transition-all shadow-xs uppercase tracking-wider"
            >
              Press Releases
            </a>
            <a
              href="#in-the-media"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-slate-800 text-xs sm:text-sm font-semibold border border-slate-200 hover:bg-slate-50 transition-all shadow-xs uppercase tracking-wider"
            >
              In The Media
            </a>
            <a
              href="#media-kit"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-slate-800 text-xs sm:text-sm font-semibold border border-slate-200 hover:bg-slate-50 transition-all shadow-xs uppercase tracking-wider"
            >
              Media Kit
            </a>
            <a
              href="#media-enquiry"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#0062D2] to-[#E11D48] text-white text-xs sm:text-sm font-bold shadow-md hover:opacity-95 transition-all uppercase tracking-wider"
            >
              Make an Enquiry
            </a>
          </div>
        </div>
      </section>

      {/* ─── Section 1: LATEST (What is happening now) ─── */}
      <section id="latest" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-[#0062D2] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                LATEST
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#061836] tracking-tight leading-[1.12]">
              What is happening now
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              The latest developments from across the PEERS GLOBAL ecosystem.
            </p>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFD] border border-blue-100 text-xs sm:text-sm text-slate-700 space-y-2">
              <div className="font-bold text-slate-900 uppercase tracking-wider text-xs">
                This is where you will find:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 pt-1">
                {[
                  'Community announcements',
                  'New initiatives',
                  'Major milestones',
                  'Events and gatherings',
                  'Leadership developments',
                  'Impact updates',
                  'New collaborations',
                  'Important organisational announcements',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2">
                    <span className="text-[#0062D2] font-bold">●</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Live Feed Container */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                [LIVE NEWSROOM FEED — ACTIVE ARCHIVE]
              </span>
              <span className="text-xs font-mono text-slate-400">
                Date · Headline · Category · Short summary · Read more
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {LATEST_STORIES.map((story, idx) => (
                <div
                  key={story.headline}
                  className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-[#0062D2] hover:shadow-md transition-all flex flex-col justify-between space-y-5 group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="px-3 py-1 rounded-full bg-blue-50 text-[#0062D2] font-bold border border-blue-100">
                        {story.category}
                      </span>
                      <span className="text-slate-500">{story.date}</span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-950 group-hover:text-[#0062D2] transition-colors leading-snug">
                      {story.headline}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {story.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400">Item #{idx + 1}</span>
                    <a
                      href={story.readMoreUrl}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#0062D2] hover:underline uppercase tracking-wider"
                    >
                      <span>Read more</span>
                      <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-center text-slate-500 font-mono pt-2">
              The newest information appears first.
            </p>
          </div>

        </div>
      </section>

      {/* ─── Section 2: PRESS RELEASES ─── */}
      <section id="press-releases" className="py-16 sm:py-24 bg-[#F8FAFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-[#0062D2] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                PRESS RELEASES
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#061836] tracking-tight leading-[1.12]">
              When PEERS GLOBAL has something official to announce.
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Press releases are the formal record of significant organisational announcements.
            </p>

            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 text-xs sm:text-sm text-slate-700 space-y-2">
              <div className="font-bold text-slate-900 uppercase tracking-wider text-xs">
                They may cover:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 pt-1 font-medium text-slate-800">
                {[
                  'New initiatives',
                  'Major milestones',
                  'Leadership appointments',
                  'Strategic developments',
                  'Community announcements',
                  'Impact initiatives',
                  'Major events',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-[#0062D2] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Press Release Archive */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                [LIVE PRESS RELEASE ARCHIVE — PERMANENT RECORD]
              </span>
              <span className="text-xs font-mono text-slate-400">
                Publication date · Headline · Official announcement · Relevant facts · Media contact
              </span>
            </div>

            <div className="divide-y divide-slate-200 rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden">
              {PRESS_RELEASES.map((pr) => (
                <div
                  key={pr.headline}
                  className="p-6 sm:p-8 flex flex-col md:flex-row md:items-start justify-between gap-6 hover:bg-blue-50/30 transition-colors"
                >
                  <div className="space-y-2 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                      <span className="px-2.5 py-0.5 rounded bg-blue-50 text-[#0062D2] font-bold border border-blue-200">
                        {pr.type}
                      </span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-600 font-bold">{pr.date}</span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#061836] leading-snug">
                      {pr.headline}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {pr.summary}
                    </p>

                    <div className="text-xs text-slate-500 font-mono pt-1">
                      Media Contact: <a href={`mailto:${pr.mediaContact}`} className="text-[#0062D2] font-bold hover:underline">{pr.mediaContact}</a>
                    </div>
                  </div>

                  <a
                    href="#media-enquiry"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-100 hover:bg-[#0062D2] hover:text-white text-slate-700 text-xs font-bold transition-all shrink-0 self-start uppercase tracking-wider"
                  >
                    <span>Request Official PDF</span>
                    <Download className="size-3.5" />
                  </a>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-500 font-mono text-center pt-2">
              Every release clearly identifies its publication date, headline, official announcement, relevant facts and media contact.
            </p>
          </div>

        </div>
      </section>

      {/* ─── Section 3: IN THE MEDIA ─── */}
      <section id="in-the-media" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-[#0062D2] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                IN THE MEDIA
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#061836] tracking-tight leading-[1.12]">
              When the story travels beyond our own channels.
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              PEERS GLOBAL is part of a larger entrepreneurial conversation.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              This section brings together verified external coverage featuring:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs sm:text-sm font-semibold text-slate-800">
              {['● PEERS GLOBAL', '● Its initiatives', '● Its leadership', '● Its Peers', '● Its work', '● Its events', '● Its impact'].map((feat) => (
                <div key={feat} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/70">
                  {feat}
                </div>
              ))}
            </div>
          </div>

          {/* Coverage Grid */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                [VERIFIED PRESS COVERAGE — EDITORIAL MENTIONS]
              </span>
              <span className="text-xs font-mono text-slate-400">
                Publication · Date · Headline · Subject · Original source
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {VERIFIED_MEDIA_COVERAGE.map((item) => (
                <div
                  key={item.headline}
                  className="p-7 sm:p-8 rounded-2xl bg-[#FAFBFD] border border-slate-200/90 shadow-xs hover:border-[#0062D2] hover:shadow-md transition-all flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="px-3 py-1 rounded-full bg-blue-50 text-[#0062D2] font-bold border border-blue-100 uppercase">
                        {item.publication}
                      </span>
                      <span className="text-slate-500 font-medium">{item.date}</span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#061836] leading-snug">
                      &ldquo;{item.headline}&rdquo;
                    </h3>

                    <div className="space-y-1 text-xs text-slate-600 font-sans">
                      <div><strong className="text-slate-900">Subject:</strong> {item.subject}</div>
                      <div><strong className="text-slate-900">Original source:</strong> {item.source}</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">Verified Editorial</span>
                    <a
                      href="#media-enquiry"
                      className="inline-flex items-center gap-1 font-bold text-[#0062D2] hover:underline uppercase tracking-wider"
                    >
                      <span>Press Details</span>
                      <ExternalLink className="size-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Editorial Integrity Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-amber-50/60 border border-amber-200/80 text-amber-950 space-y-2">
              <div className="flex items-center gap-2 font-serif font-bold text-base sm:text-lg text-amber-900">
                <ShieldCheck className="size-5 text-amber-700" />
                Editorial Integrity &amp; Verification Rules
              </div>
              <ul className="text-xs sm:text-sm space-y-1 text-amber-900/90 leading-relaxed list-disc list-inside">
                <li>No unverified mentions.</li>
                <li>No self-described &ldquo;coverage&rdquo; without an actual publication.</li>
                <li>No presenting paid promotion as editorial coverage.</li>
                <li>If someone else tells the story, let their words remain theirs.</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ─── Section 4: THE MEDIA STORY ─── */}
      <section className="py-16 sm:py-24 bg-[#061836] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-cyan-200 text-xs font-mono uppercase tracking-widest border border-white/15">
            THE MEDIA STORY
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-white">
            PEERS GLOBAL was created around a simple belief: <br />
            <span className="italic text-cyan-200">Every honest entrepreneurial story deserves visibility.</span>
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed text-left max-w-3xl mx-auto">
            <p>
              That principle extends beyond our own community.
            </p>
            <p>
              Entrepreneurs build businesses that employ people, solve problems, create products, serve communities and generate opportunities.
            </p>
            <p className="font-serif italic text-white text-lg sm:text-xl">
              Yet many of their stories remain unseen.
            </p>
            <p>
              The Newsroom is one place where those stories can become part of the public record.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Section 5: OUR MEDIA ECOSYSTEM ─── */}
      <section id="media-ecosystem" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-[#0062D2] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                OUR MEDIA ECOSYSTEM
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#061836] tracking-tight leading-[1.12]">
              Platforms and formats designed to give entrepreneurial stories a place to travel.
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              The broader PEERS GLOBAL media ecosystem includes specialized vehicles created to document, broadcast, and amplify the voices of builders across Bharat and the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {MEDIA_ECOSYSTEM.map((eco) => {
              const IconComp = eco.icon
              return (
                <div
                  key={eco.title}
                  className="p-7 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-[#0062D2] hover:shadow-md transition-all flex flex-col justify-between space-y-5 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="size-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0062D2]">
                        <IconComp className="size-6" />
                      </div>
                      <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded bg-slate-100 text-slate-700 uppercase tracking-wider">
                        {eco.tag}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#061836] group-hover:text-[#0062D2] transition-colors">
                        {eco.title}
                      </h3>
                      <p className="text-sm font-semibold text-slate-800 leading-snug">
                        {eco.desc}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal pt-2 border-t border-slate-100">
                      {eco.status}
                    </p>
                  </div>

                  <div className="pt-3 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400">Verified Format</span>
                    <a
                      href="#media-enquiry"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#0062D2] hover:underline uppercase tracking-wider"
                    >
                      <span>Participate / Pitch</span>
                      <ChevronRight className="size-3.5" />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ─── Section 6: FACTSHEET & MEDIA KIT ─── */}
      <section id="media-kit" className="py-16 sm:py-24 bg-[#F8FAFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-[#0062D2] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                FACTSHEET &amp; MEDIA KIT
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#061836] tracking-tight leading-[1.12]">
              Need to understand PEERS GLOBAL quickly?
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              The Media Kit provides the essential information journalists, publishers, event organisers and partners may need.
            </p>
            <p className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
              All downloadable material should be the latest approved version.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MEDIA_KIT_DOWNLOADS.map((item) => (
              <div
                key={item.name}
                className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-5 hover:border-[#0062D2] hover:shadow-md transition-all group"
              >
                <div className="space-y-3">
                  <div className="size-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0062D2]">
                    <FileText className="size-5" />
                  </div>
                  <h3 className="text-base font-serif font-bold text-slate-900 group-hover:text-[#0062D2] transition-colors leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500 font-semibold">{item.format}</span>
                  <a
                    href="#media-enquiry"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0062D2] hover:text-[#0052b3] uppercase tracking-wider"
                  >
                    <span>Request Kit</span>
                    <Download className="size-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* THE OFFICIAL BOILERPLATE BOX */}
          <div className="p-8 sm:p-10 rounded-2xl sm:rounded-[28px] bg-white border border-slate-200/90 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0062D2] block">
                  THE OFFICIAL BOILERPLATE
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#061836]">
                  PEERS GLOBAL — Standard Approved Editorial Copy
                </h3>
              </div>
              <button
                type="button"
                onClick={copyBoilerplate}
                className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-full bg-blue-50 text-[#0062D2] border border-blue-200 hover:bg-blue-100 transition-colors cursor-pointer self-start sm:self-auto shrink-0 uppercase tracking-wider"
              >
                {copied ? <Check className="size-4 text-emerald-600" /> : <Copy className="size-4" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Boilerplate'}</span>
              </button>
            </div>

            <p className="text-xs text-slate-500 font-normal">
              A concise, approved description of PEERS GLOBAL for use by journalists, event organisers, publications and partners.
            </p>

            <blockquote className="text-sm sm:text-base text-slate-800 leading-relaxed font-serif italic border-l-4 border-[#0062D2] pl-4 py-1 bg-slate-50/60 rounded-r-xl">
              &ldquo;{officialBoilerplateText}&rdquo;
            </blockquote>
          </div>

        </div>
      </section>

      {/* ─── Section 7: FOR JOURNALISTS & MEDIA (ENQUIRY FORM) ─── */}
      <section id="media-enquiry" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Context & Welcomed Topics */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-[#0062D2] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                  FOR JOURNALISTS &amp; MEDIA
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#061836] tracking-tight leading-[1.15]">
                Looking for a story, a source or a conversation?
              </h2>

              <p className="text-base text-slate-700 leading-relaxed font-normal">
                We welcome thoughtful conversations about:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                {[
                  '● Entrepreneurship',
                  '● Business communities',
                  '● Collaboration',
                  '● Entrepreneurial leadership',
                  '● Innovation',
                  '● Impact',
                  '● The experience of building a business',
                  '● The changing entrepreneurial ecosystem',
                ].map((item) => (
                  <div key={item} className="p-3 rounded-xl bg-[#F8FAFD] border border-slate-200/70">
                    {item}
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200/80 space-y-3">
                <p className="text-sm sm:text-base font-serif italic text-[#061836]">
                  &ldquo;If your story is relevant to our world, tell us what you are working on.&rdquo;
                </p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                  <span>Direct Secretariat SLA: Under 24 Business Hours</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Media Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-2xl sm:rounded-[28px] bg-[#FAFBFD] border border-slate-200/90 shadow-sm space-y-6">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#061836]">
                    MEDIA ENQUIRIES
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 pt-1">
                    We will route the enquiry to the appropriate spokesperson or leadership desk.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                    <CheckCircle2 className="size-12 text-emerald-600 mx-auto" />
                    <h4 className="font-serif text-xl font-bold text-emerald-950">
                      Media Enquiry Transmitted
                    </h4>
                    <p className="text-sm text-emerald-800 max-w-md mx-auto">
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="font-bold text-slate-800">
                          Your name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Aditi Sharma"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#0062D2] text-slate-900"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-bold text-slate-800">
                          Publication / organisation <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.organisation}
                          onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                          placeholder="e.g. Financial Express / BBC"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#0062D2] text-slate-900"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="font-bold text-slate-800">
                          Your role <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.role}
                          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                          placeholder="e.g. Senior Editor / Tech Correspondent"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#0062D2] text-slate-900"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-bold text-slate-800">
                          Your deadline <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.deadline}
                          onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                          placeholder="e.g. Oct 15, 2026 / 48 Hours"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#0062D2] text-slate-900"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-800">
                        What you are working on <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        placeholder="e.g. Story on tier-2 manufacturing founder ecosystems"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#0062D2] text-slate-900"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-800">
                        What you need from PEERS GLOBAL <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={formData.needs}
                        onChange={(e) => setFormData({ ...formData, needs: e.target.value })}
                        placeholder="e.g. Founder interview with Dr. Pravin Parmar, case study data, high-res photos"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#0062D2] text-slate-900"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-800">
                        Your contact details (Email / Phone) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        placeholder="e.g. journalist@publication.com | +91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#0062D2] text-slate-900"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[#0062D2] hover:bg-[#0052b3] text-white font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 uppercase tracking-wider cursor-pointer active:scale-[0.99]"
                    >
                      <span>Transmit Media Enquiry →</span>
                      <Send className="size-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─── Section 8: A NOTE ON ACCURACY ─── */}
      <section className="py-16 sm:py-20 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0062D2] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            STANDARDS &amp; GOVERNANCE
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#061836]">
            A NOTE ON ACCURACY
          </h2>

          <div className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto space-y-3 font-normal">
            <p className="font-serif italic text-slate-900 text-lg">
              The Newsroom is a public record. That means accuracy matters.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm font-medium text-slate-800 pt-2">
              <div className="p-3 bg-white rounded-xl border border-slate-200">Dates should be correct.</div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">Names should be correct.</div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">Numbers should be verified.</div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">Quotes should be authentic.</div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">Links lead to original source.</div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">Announcements distinct from opinions.</div>
            </div>
            <p className="font-bold text-[#0062D2] pt-3 text-base">
              And claims should be supportable. If we publish it, we should be able to stand behind it.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Section 9: Closing Royal Banner (FOR THE MEDIA) ─── */}
      {/* ── FINAL HOME-THEMED CALL TO ACTION ── */}
      <section className="relative isolate overflow-hidden bg-[#040F24] text-white py-20 md:py-28">
        {/* Deep celestial radial gradients & luminous aura */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(0,98,210,0.25),transparent_42%),radial-gradient(circle_at_82%_12%,rgba(56,189,248,0.18),transparent_36%),linear-gradient(115deg,#020817_0%,#071a3d_48%,#06132d_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-blue-600/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-sky-400/15 blur-3xl"
        />

        {/* SVG Orbital Geometric Lines Background */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-[min(58vw,760px)] opacity-35">
          <svg viewBox="0 0 760 520" fill="none" className="h-full w-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M760 40C555 45 405 145 375 310C355 423 265 493 70 520" stroke="currentColor" strokeWidth="1" className="text-blue-300/30" />
            <path d="M760 120C590 125 470 205 445 335C424 442 335 500 180 520" stroke="currentColor" strokeWidth="1" strokeDasharray="5 8" className="text-sky-200/25" />
            <path d="M760 215C640 220 565 278 540 370C519 446 470 490 390 520" stroke="currentColor" strokeWidth="1" className="text-blue-200/20" />
            <circle cx="540" cy="370" r="4" fill="currentColor" className="text-sky-300/60" />
            <circle cx="540" cy="370" r="13" stroke="currentColor" strokeWidth="1" className="text-sky-300/25" />
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2.5">
              <span className="h-[1.5px] w-6 bg-white/70" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
                FOR THE MEDIA
              </span>
              <span className="h-[1.5px] w-6 bg-white/70" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-white tracking-tight leading-[1.15]">
              Official information. Real stories. <br className="hidden sm:inline" />
              <span className="italic text-cyan-200">Verified facts. Direct access.</span>
            </h2>
            <p className="text-sm sm:text-base text-white/90 font-mono tracking-wider pt-1">
              PEERS GLOBAL — Designed in Bharat. Built for the World.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <a
              href="#latest"
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white shadow-[0_4px_20px_rgba(225,29,72,0.40)] hover:from-[#1E40AF] hover:to-[#BE123C] hover:shadow-[0_8px_28px_rgba(225,29,72,0.60)] transition-all hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Explore Latest →
            </a>
            <a
              href="#press-releases"
              className="px-6 py-3.5 rounded-full bg-white/[0.08] text-white border border-white/40 hover:bg-white/15 hover:border-white/70 transition-all backdrop-blur-sm"
            >
              View Press Releases →
            </a>
            <a
              href="#in-the-media"
              className="px-6 py-3.5 rounded-full bg-white/[0.08] text-white border border-white/40 hover:bg-white/15 hover:border-white/70 transition-all backdrop-blur-sm"
            >
              In the Media →
            </a>
            <a
              href="#media-kit"
              className="px-6 py-3.5 rounded-full bg-white/[0.08] text-white border border-white/40 hover:bg-white/15 hover:border-white/70 transition-all backdrop-blur-sm"
            >
              Download Media Kit →
            </a>
            <a
              href="#media-enquiry"
              className="px-6 py-3.5 rounded-full bg-white/[0.08] text-white border border-white/40 hover:bg-white/15 hover:border-white/70 transition-all backdrop-blur-sm"
            >
              Make a Media Enquiry →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
