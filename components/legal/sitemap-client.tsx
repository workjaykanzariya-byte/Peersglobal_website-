'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  Map,
  ChevronRight,
  Globe,
  Users,
  Compass,
  ShieldCheck,
  Building,
  Briefcase,
  ArrowRight,
  Sparkles,
  HelpCircle,
  FileCode,
  Handshake,
  Layers,
  Award,
  BookOpen,
  Search,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react'

const SITEMAP_CATEGORIES = [
  {
    id: 'start-here',
    title: 'START HERE',
    subtitle: 'Discover PEERS GLOBAL',
    icon: Compass,
    gradient: 'from-blue-600 to-indigo-600',
    badge: 'Core Identity',
    links: [
      { name: 'Home', href: '/', desc: 'Ecosystem overview & gateway' },
      { name: 'The Idea', href: '/the-idea', desc: 'Why PEERS GLOBAL exists' },
      { name: 'Our Story', href: '/our-story', desc: 'Journey & foundational roots' },
      { name: 'Dr. Pravin Parmar', href: '/founder', desc: 'Founder & Chairman vision' },
      { name: 'The Language', href: '/lexicon', desc: 'Community vocabulary & terms' },
      { name: 'Our Culture & Code', href: '/culture-and-code', desc: 'Philosophy & operating values' },
      { name: 'The 1 Million Mission', href: '/1-million-mission', desc: 'Empowering 1M Indian founders' },
    ],
  },
  {
    id: 'find-peers',
    title: 'FIND YOUR PEERS',
    subtitle: 'Discover where you belong',
    icon: Users,
    gradient: 'from-indigo-600 to-purple-600',
    badge: 'Circle Network',
    links: [
      { name: 'All Circles', href: '/circles', desc: 'Complete directory of circles' },
      { name: 'Browse by Industry', href: '/circles#industry', desc: 'Categorized by vertical' },
      { name: 'Browse by Purpose', href: '/circles#purpose', desc: 'Categorized by founder goal' },
      { name: 'Find Your Circle', href: '/circles', desc: 'Interactive matching quiz' },
      { name: 'Meeting Experience', href: '/circle-meeting-experience', desc: 'What happens inside the room' },
      { name: 'Roles Inside a Circle', href: '/circle-roles', desc: 'Leadership & participation seats' },
      { name: 'Start a Circle', href: '/start-a-circle', desc: 'Pioneer a new local chapter' },
      { name: 'The Map', href: '/map', desc: 'Pan-Bharat geographical footprint' },
    ],
  },
  {
    id: 'membership',
    title: 'MEMBERSHIP',
    subtitle: 'Understand the journey before you join',
    icon: ShieldCheck,
    gradient: 'from-purple-600 to-rose-600',
    badge: 'Vetting Standard',
    links: [
      { name: 'Why Join PEERS GLOBAL', href: '/membership', desc: 'Ecosystem value proposition' },
      { name: 'Who Belongs Here', href: '/who-belongs-here', desc: 'Vetted founder eligibility' },
      { name: 'Membership & Investment', href: '/membership', desc: 'Annual fee & commitment' },
      { name: 'What You Get', href: '/membership#benefits', desc: 'Directory, Unity App, Conclaves' },
      { name: 'Criteria & Process', href: '/membership#criteria', desc: '4-stage MEC vetting process' },
      { name: 'Member FAQ', href: '/faqs', desc: 'Frequently asked questions' },
      { name: 'Join PEERS GLOBAL', href: '/join', desc: 'Submit founder application' },
    ],
  },
  {
    id: 'leadership',
    title: 'LEADERSHIP',
    subtitle: 'Discover ways to contribute and lead',
    icon: Award,
    gradient: 'from-rose-600 to-pink-600',
    badge: 'Pathway & Roles',
    links: [
      { name: 'Leadership Pathway', href: '/leadership', desc: 'The 6-tier leadership ladder' },
      { name: 'The Powerhouse', href: '/leadership/powerhouse', desc: 'Operational executive wing' },
      { name: 'Circle Director', href: '/leadership/circle-director', desc: 'Presiding room leader' },
      { name: 'Circle Founder', href: '/leadership/circle-founder', desc: 'Chapter catalyst' },
      { name: 'Industry Director', href: '/leadership/industry-director', desc: 'Vertical domain mentor' },
      { name: 'Executive Director', href: '/leadership/executive-director', desc: 'Territory custodian' },
      { name: 'Ambassador', href: '/leadership/ambassador', desc: 'Ecosystem champion' },
      { name: 'Board of Advisory', href: '/leadership/advisory-board', desc: 'Institutional oversight' },
      { name: 'Apply to Lead', href: '/leadership/apply', desc: 'Nominate for leadership seat' },
    ],
  },
  {
    id: 'community',
    title: 'COMMUNITY & EVENTS',
    subtitle: 'Experience what happens when Peers unite',
    icon: Building,
    gradient: 'from-amber-600 to-orange-600',
    badge: 'Conclaves & App',
    links: [
      { name: 'Unity App', href: '/unity', desc: 'Digital directory & ledger portal' },
      { name: 'Events & Calendar', href: '/events', desc: 'Regional summits & retreats' },
      { name: 'The Annual Summit', href: '/events/annual-summit', desc: 'Flagship national conclave' },
      { name: 'Speak at PEERS GLOBAL', href: '/events/speak', desc: 'Nominate as keynote peer' },
    ],
  },
  {
    id: 'stories',
    title: 'STORIES & INSIGHTS',
    subtitle: 'Learn from the experience of Peers',
    icon: BookOpen,
    gradient: 'from-emerald-600 to-teal-600',
    badge: 'Knowledge Base',
    links: [
      { name: 'Peer Stories', href: '/stories', desc: 'Founder journeys & lessons' },
      { name: 'Collaboration Wins', href: '/collaboration-wins', desc: 'Verified JV & trade outcomes' },
      { name: 'Video Testimonials', href: '/video-testimonials', desc: 'Authentic founder voices' },
      { name: 'Insights & Playbooks', href: '/insights', desc: 'Practical scaling guides' },
      { name: 'The Watchlist', href: '/watchlist', desc: 'Emerging enterprise watch' },
    ],
  },
  {
    id: 'commerce',
    title: 'COLLABORATION & COMMERCE',
    subtitle: 'Turn relationships into possibilities',
    icon: Handshake,
    gradient: 'from-blue-600 to-cyan-600',
    badge: 'Value Exchange',
    links: [
      { name: 'Peer-to-Peer Meetings', href: '/peer-to-peer', desc: '1-on-1 strategic connect' },
      { name: 'Peers Coin', href: '/peers-coin', desc: 'Non-monetary recognition' },
      { name: 'Marketplace', href: '/marketplace', desc: 'Exclusive founder exchange' },
    ],
  },
  {
    id: 'about',
    title: 'ABOUT PEERS GLOBAL',
    subtitle: 'The organisation behind the movement',
    icon: Globe,
    gradient: 'from-indigo-600 to-blue-600',
    badge: 'Institutional',
    links: [
      { name: 'About PEERS GLOBAL', href: '/about', desc: 'Corporate charter & mandate' },
      { name: 'Our Story', href: '/our-story', desc: 'Origins & milestone history' },
      { name: 'Dr. Pravin Parmar', href: '/founder', desc: 'Founder biography' },
      { name: 'Our Initiatives', href: '/initiatives', desc: 'Social & institutional wings' },
      { name: 'Social Impact', href: '/foundation-social-impact', desc: 'Foundation projects' },
      { name: 'Newsroom', href: '/newsroom', desc: 'Press releases & media kits' },
    ],
  },
  {
    id: 'legal',
    title: 'GOVERNANCE & LEGAL',
    subtitle: 'Statutory charters and covenants',
    icon: ShieldCheck,
    gradient: 'from-purple-600 to-indigo-600',
    badge: 'Statutory Cell',
    links: [
      { name: 'The Peers Code', href: '/peers-code', desc: '6 non-negotiable oaths' },
      { name: 'Community Guidelines', href: '/community-guidelines', desc: 'Room sanctity rules' },
      { name: 'Privacy Policy', href: '/privacy-policy', desc: 'DPDP Act 2023 compliance' },
      { name: 'Terms of Use', href: '/terms-of-use', desc: 'Platform legal covenants' },
      { name: 'Security & Data', href: '/security', desc: 'Infrastructure safeguards' },
      { name: 'Grievance Redressal', href: '/grievance', desc: 'IT Act statutory cell' },
      { name: 'Refund Policy', href: '/refund-policy', desc: 'Category lock & pass rules' },
      { name: 'Disclaimer', href: '/disclaimer', desc: '11 legal boundaries' },
    ],
  },
  {
    id: 'support',
    title: 'SUPPORT & EXPANSION',
    subtitle: 'Help, desk, and city launch',
    icon: HelpCircle,
    gradient: 'from-slate-700 to-slate-900',
    badge: 'Support Desk',
    links: [
      { name: 'Help Center & FAQs', href: '/faqs', desc: 'Answers to common questions' },
      { name: 'Bring Peers to My City', href: '/bring-to-my-city', desc: 'Pioneer local chapter' },
      { name: 'Partner With Us', href: '/partner', desc: 'Enterprise & ecosystem allies' },
      { name: 'Careers', href: '/careers', desc: 'Join the Powerhouse team' },
      { name: 'Contact Secretariat', href: '/contact', desc: 'Ahmedabad headquarters desk' },
    ],
  },
]

const QUICK_ACCESS = [
  { name: 'Find Your Circle', href: '/circles', tag: 'Circles' },
  { name: 'Join PEERS GLOBAL', href: '/join', tag: 'Application' },
  { name: 'The Peers Code', href: '/peers-code', tag: 'Oaths' },
  { name: 'Security & Data', href: '/security', tag: 'Infrastructure' },
  { name: 'Grievance Redressal', href: '/grievance', tag: 'Statutory Desk' },
  { name: 'Bring Peers to My City', href: '/bring-to-my-city', tag: 'Expansion' },
  { name: 'Contact Secretariat', href: '/contact', tag: 'Help' },
]

export function SitemapClient() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCategories = SITEMAP_CATEGORIES.map((cat) => {
    const matchingLinks = cat.links.filter(
      (link) =>
        link.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        link.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cat.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    return { ...cat, links: matchingLinks }
  }).filter((cat) => cat.links.length > 0)

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-rose-100 selection:text-[#E11D48]">
      {/* ── Breadcrumb ── */}
      <div className="border-b border-slate-200/70 bg-white shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-slate-500 font-medium">
            <Link href="/" className="hover:text-[#1D4ED8] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/peers-code" className="hover:text-[#1D4ED8] transition-colors">
              Governance
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-bold brand-gradient-text">Ecosystem Sitemap</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-[#1D4ED8] border border-blue-200">
              <Map className="w-3.5 h-3.5" />
              <span>Complete Directory Index</span>
            </span>
          </div>
        </div>
      </div>

      {/* ── Signature Hero Section ── */}
      <section className="relative overflow-hidden bg-[#040F24] text-white pt-0 pb-12 sm:pb-16 border-b border-slate-800">
        {/* Background video layer */}
        <video
          className="absolute inset-0 size-full object-cover opacity-35"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
          poster="/images/section_image/circles-hero-new.jpg"
          src="/videos/homepage-hero-bg.mp4"
        />
        {/* Gradients to blend smoothly */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(100deg,rgba(2,8,23,0.92)_0%,rgba(4,15,36,0.85)_45%,rgba(4,15,36,0.65)_100%)]"
        />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center py-14 sm:py-20">
            {/* Left Content */}
            <div className="lg:col-span-8 max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur-sm uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span>ECOSYSTEM DIRECTORY &amp; SITEMAP</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12] text-white font-serif">
                  Ecosystem{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-rose-400">
                    Directory &amp; Map.
                  </span>
                </h1>
                <p className="text-base sm:text-lg font-medium text-slate-200 leading-snug">
                  A comprehensive directory of every chapter, leadership pathway, governance framework, and resource across Peers Global.
                </p>
              </div>

              <p className="text-sm sm:text-base text-white/95 font-medium italic border-l-2 border-[#E11D48] pl-3.5 py-0.5 max-w-2xl">
                &ldquo;Wherever you begin, there is a next step. Find your people. Find what you can contribute.&rdquo;
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#directory-grid"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] text-white font-semibold text-sm shadow-lg shadow-blue-500/30 hover:shadow-rose-500/40 hover:-translate-y-0.5 hover:opacity-95 transition-all duration-300 group cursor-pointer"
                >
                  <span>Explore All Portals</span>
                  <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <Link
                  href="/circles"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/25 bg-white/10 hover:bg-white/20 text-white font-medium text-sm backdrop-blur-sm transition-all duration-300"
                >
                  <span>Find Your Circle</span>
                </Link>
              </div>

              {/* Stat Band */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full max-w-xl pt-6 border-t border-white/15">
                {[
                  { icon: Map, value: '10 Pillars', label: 'Ecosystem Architecture' },
                  { icon: Globe, value: '60+ Portals', label: 'Active Directory Index' },
                  { icon: Sparkles, value: 'Real-Time', label: 'Live Resolution' },
                ].map((s) => {
                  const Icon = s.icon
                  return (
                    <div
                      key={s.label}
                      className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.08] hover:bg-white/[0.12] border border-white/15 backdrop-blur-md transition-all"
                    >
                      <div className="size-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-sky-300 shrink-0 shadow-xs">
                        <Icon className="size-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-bold text-sm sm:text-base text-white tracking-tight leading-tight whitespace-nowrap">
                          {s.value}
                        </div>
                        <div className="text-[11px] text-slate-300 font-medium mt-0.5 leading-snug truncate">
                          {s.label}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right Cursive Script Highlights */}
            <div className="hidden lg:flex lg:col-span-4 flex-col items-end text-right select-none pointer-events-none drop-shadow-xl space-y-1.5">
              <p
                className="text-2xl sm:text-3xl text-white/80 leading-tight italic font-serif"
              >
                Discover Your Path
              </p>
              <p
                className="text-3xl sm:text-4xl text-white leading-tight font-bold italic font-serif"
              >
                Connect With Peers
              </p>
              <p
                className="text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-rose-300 font-bold italic font-serif leading-tight"
              >
                Complete Ecosystem
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Access & Search Ribbon ── */}
      <section className="py-5 border-b border-slate-200/90 bg-white/95 backdrop-blur-md shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search directory or pages..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#1D4ED8] focus:bg-white transition-all shadow-inner"
            />
          </div>

          {/* Quick Access Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 shrink-0 hidden lg:inline">
              QUICK ACCESS:
            </span>
            {QUICK_ACCESS.map((qa, idx) => (
              <Link
                key={idx}
                href={qa.href}
                className="px-3.5 py-1.5 rounded-full bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 text-xs font-semibold text-slate-700 hover:text-[#1D4ED8] transition-colors shrink-0 flex items-center gap-1.5"
              >
                <span>{qa.name}</span>
                <span className="text-[10px] font-mono text-slate-400">→</span>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ── 10-Pillar Sitemap Grid ── */}
      <section id="directory-grid" className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                FULL DIRECTORY INDEX
              </span>
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
              Ecosystem Architecture by Pillar
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Explore all portals, governance charters, member directories, and community tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredCategories.map((cat) => {
              const IconComponent = cat.icon
              return (
                <div
                  key={cat.id}
                  id={cat.id}
                  className="group relative p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between space-y-6 overflow-hidden"
                >
                  {/* Top Accent Gradient Bar */}
                  <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${cat.gradient} opacity-75 group-hover:opacity-100 transition-opacity`} />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-slate-50 to-blue-50/70 border border-slate-200/80 flex items-center justify-center text-[#1D4ED8] group-hover:scale-105 transition-transform shadow-2xs">
                          <IconComponent className="w-5 h-5 text-[#1D4ED8]" />
                        </div>
                        <div>
                          <h3 className="text-base font-serif font-bold text-slate-950 tracking-wide group-hover:text-[#1D4ED8] transition-colors">
                            {cat.title}
                          </h3>
                          <p className="text-[11px] text-[#1D4ED8] font-semibold">{cat.subtitle}</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold px-2.5 py-1 rounded-md bg-slate-50 border border-slate-100 hidden sm:inline-block">
                        {cat.badge}
                      </span>
                    </div>

                    <ul className="space-y-2 pt-3 border-t border-slate-100">
                      {cat.links.map((link, lIdx) => (
                        <li key={lIdx}>
                          <Link
                            href={link.href}
                            className="group/link p-2 -mx-2 rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-between text-xs font-semibold text-slate-700 hover:text-[#1D4ED8]"
                          >
                            <div className="flex flex-col truncate pr-2">
                              <span className="text-slate-900 group-hover/link:text-[#1D4ED8] font-medium truncate">
                                {link.name}
                              </span>
                              <span className="text-[10px] text-slate-400 font-normal truncate">
                                {link.desc}
                              </span>
                            </div>
                            <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover/link:text-[#1D4ED8] group-hover/link:translate-x-0.5 transition-all shrink-0" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span>{cat.links.length} Active Routes</span>
                    <span className="group-hover:text-[#1D4ED8] transition-colors">Pillar Portal →</span>
                  </div>
                </div>
              )
            })}
          </div>

          {filteredCategories.length === 0 && (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-3">
              <p className="text-slate-500 text-sm">No directory results found for &ldquo;{searchQuery}&rdquo;</p>
              <button
                onClick={() => setSearchQuery('')}
                className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200"
              >
                Clear Search
              </button>
            </div>
          )}

        </div>
      </section>

      {/* ── Executive Governance Ribbon (Compact Closing Layout) ── */}
      <section className="relative py-14 sm:py-18 bg-[#040F24] text-white overflow-hidden border-t border-slate-800">
        {/* Subtle luminous ambient glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(0,98,210,0.2),transparent_50%),radial-gradient(circle_at_85%_50%,rgba(225,29,72,0.15),transparent_50%),linear-gradient(115deg,#020817_0%,#071a3d_50%,#040f24_100%)]"
        />

        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-4 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-4 -translate-y-1/2 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

            {/* Left Col (5 cols): Statement & Authority */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <div className="flex items-center gap-2.5">
                <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/90">
                  Open Ecosystem Map
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-serif font-bold text-white tracking-tight leading-[1.2]">
                Wherever you begin, <br />
                <span className="italic text-amber-300 font-medium" style={{ fontFamily: 'var(--font-script)' }}>
                  there is a next step for your enterprise.
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed max-w-md">
                Find your way. Find your people. Find what you can contribute to India’s leading founder collective.
              </p>

              <div className="pt-1 flex items-center gap-2 text-[11px] font-mono text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Ecosystem Directory Secretariat • Ahmedabad HQ</span>
              </div>
            </div>

            {/* Right Col (7 cols): Horizontal Compact Governance Navigation Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {[
                {
                  code: 'PORTAL 01',
                  title: 'Circle Directory',
                  desc: 'Find verified founder circles by city & vertical',
                  href: '/circles',
                  tag: 'Circles'
                },
                {
                  code: 'PORTAL 02',
                  title: 'Leadership Ladder',
                  desc: '6-tier pathway for chapter contributors',
                  href: '/leadership',
                  tag: 'Pathway'
                },
                {
                  code: 'PORTAL 03',
                  title: 'Governance Charters',
                  desc: 'The Peers Code, Guidelines & DPDP rights',
                  href: '/peers-code',
                  tag: 'Charters'
                }
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="group relative p-4 sm:p-5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col justify-between space-y-3 backdrop-blur-md hover:-translate-y-0.5 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-amber-300/90 px-2 py-0.5 rounded-md bg-white/[0.06] border border-white/10">
                      {item.tag}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-white/50 group-hover:text-amber-300 group-hover:translate-x-1 transition-all" />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-amber-200 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/[0.08] text-[10px] font-mono text-slate-400 group-hover:text-white transition-colors">
                    {item.code} →
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

