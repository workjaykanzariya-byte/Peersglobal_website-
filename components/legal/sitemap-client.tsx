'use client'

import React from 'react'
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
} from 'lucide-react'

const SITEMAP_CATEGORIES = [
  {
    title: 'START HERE',
    subtitle: 'Discover PEERS GLOBAL',
    icon: Compass,
    links: [
      { name: 'Home', href: '/' },
      { name: 'The Idea', href: '/the-idea' },
      { name: 'Our Story', href: '/our-story' },
      { name: 'Dr. Pravin Parmar', href: '/founder' },
      { name: 'The Language', href: '/lexicon' },
      { name: 'Our Culture & Code', href: '/culture-and-code' },
      { name: 'The 1 Million Mission', href: '/1-million-mission' },
    ],
  },
  {
    title: 'FIND YOUR PEERS',
    subtitle: 'Discover where you belong.',
    icon: Users,
    links: [
      { name: 'All Circles', href: '/circles' },
      { name: 'Browse by Industry', href: '/circles#industry' },
      { name: 'Browse by Purpose', href: '/circles#purpose' },
      { name: 'Find Your Circle', href: '/circles' },
      { name: 'Circle Meeting Experience', href: '/circle-meeting-experience' },
      { name: 'Roles Inside a Circle', href: '/circle-roles' },
      { name: 'Start a Circle', href: '/start-a-circle' },
      { name: 'The Map', href: '/map' },
    ],
  },
  {
    title: 'MEMBERSHIP',
    subtitle: 'Understand the journey before you join.',
    icon: ShieldCheck,
    links: [
      { name: 'Why Join PEERS GLOBAL', href: '/membership' },
      { name: 'Who Belongs Here', href: '/who-belongs-here' },
      { name: 'Membership & Investment', href: '/membership' },
      { name: 'What You Get', href: '/membership#benefits' },
      { name: 'Criteria & Process', href: '/membership#criteria' },
      { name: 'Member FAQ', href: '/faqs' },
      { name: 'Join PEERS GLOBAL', href: '/join' },
    ],
  },
  {
    title: 'LEADERSHIP',
    subtitle: 'Discover ways to contribute and lead.',
    icon: Award,
    links: [
      { name: 'Leadership Pathway', href: '/leadership' },
      { name: 'The Powerhouse', href: '/leadership/powerhouse' },
      { name: 'Circle Director', href: '/leadership/circle-director' },
      { name: 'Circle Founder', href: '/leadership/circle-founder' },
      { name: 'Industry Director', href: '/leadership/industry-director' },
      { name: 'Executive Director', href: '/leadership/executive-director' },
      { name: 'Ambassador', href: '/leadership/ambassador' },
      { name: 'Board of Advisory', href: '/leadership/advisory-board' },
      { name: 'Apply to Lead', href: '/leadership/apply' },
    ],
  },
  {
    title: 'COMMUNITY',
    subtitle: 'Experience what happens when Peers come together.',
    icon: Building,
    links: [
      { name: 'Unity', href: '/unity' },
      { name: 'Events', href: '/events' },
      { name: 'The Annual Summit', href: '/events/annual-summit' },
      { name: 'Speak at PEERS GLOBAL', href: '/events/speak' },
    ],
  },
  {
    title: 'STORIES & INSIGHTS',
    subtitle: 'Learn from the experience of Peers.',
    icon: BookOpen,
    links: [
      { name: 'Peer Stories', href: '/stories' },
      { name: 'Collaboration Wins', href: '/collaboration-wins' },
      { name: 'Video Testimonials', href: '/video-testimonials' },
      { name: 'Insights', href: '/insights' },
      { name: 'The Watchlist', href: '/watchlist' },
    ],
  },
  {
    title: 'COLLABORATION & COMMERCE',
    subtitle: 'Turn relationships into meaningful possibilities.',
    icon: Handshake,
    links: [
      { name: 'Peer-to-Peer Meetings', href: '/peer-to-peer' },
      { name: 'Peers Coin', href: '/peers-coin' },
      { name: 'Marketplace', href: '/marketplace' },
    ],
  },
  {
    title: 'ABOUT PEERS GLOBAL',
    subtitle: 'Understand the organisation behind the community.',
    icon: Globe,
    links: [
      { name: 'About PEERS GLOBAL', href: '/about' },
      { name: 'Our Story', href: '/our-story' },
      { name: 'Dr. Pravin Parmar', href: '/founder' },
      { name: 'Our Initiatives', href: '/initiatives' },
      { name: 'Social Impact', href: '/foundation-social-impact' },
      { name: 'Newsroom', href: '/newsroom' },
    ],
  },
  {
    title: 'PARTNERSHIPS & OPPORTUNITIES',
    subtitle: 'Build with PEERS GLOBAL.',
    icon: Briefcase,
    links: [
      { name: 'Partner With Us', href: '/partner' },
      { name: 'Investors', href: '/investors' },
      { name: 'Contact', href: '/contact' },
      { name: 'Careers', href: '/careers' },
    ],
  },
  {
    title: 'SUPPORT',
    subtitle: 'Find answers and get help.',
    icon: HelpCircle,
    links: [
      { name: 'Help Center', href: '/faqs' },
      { name: 'Member FAQ', href: '/faqs#member' },
      { name: 'Unity App Help', href: '/faqs#unity' },
      { name: 'Billing & Payments', href: '/faqs#billing' },
      { name: 'Technical Support', href: '/contact' },
      { name: 'Submit a Ticket', href: '/contact#send-message' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'GROW THE COMMUNITY',
    subtitle: 'Help bring PEERS GLOBAL to more entrepreneurs.',
    icon: Layers,
    links: [
      { name: 'Bring Peers to My City', href: '/bring-to-my-city' },
      { name: 'New Peer Guide', href: '/new-peer-guide' },
    ],
  },
]

const QUICK_ACCESS = [
  { name: 'Find Your Circle →', href: '/circles' },
  { name: 'Join PEERS GLOBAL →', href: '/join' },
  { name: 'Bring Peers to My City →', href: '/bring-to-my-city' },
  { name: 'Help Center →', href: '/faqs' },
  { name: 'Contact →', href: '/contact' },
]

const JOURNEY_STEPS = [
  'Discover',
  'Understand',
  'Connect',
  'Belong',
  'Participate',
  'Contribute',
  'Collaborate',
  'Lead',
  'Impact',
]

const INTRO_QUESTIONS = [
  'What is PEERS GLOBAL?',
  'Where do I belong?',
  'How do I meet the right people?',
  'How can I contribute?',
  'Where could this journey take me?',
  'How does collaboration work?',
]

export function SitemapClient() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-[#0062D2]">
      {/* ── Breadcrumb ── */}
      <div className="border-b border-slate-200/70 bg-white/90 backdrop-blur-md sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-slate-500 font-medium">
            <Link href="/" className="hover:text-[#0062D2] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold">Sitemap</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-[#0062D2] border border-blue-200">
              <Map className="w-3.5 h-3.5" />
              Active Ecosystem Index
            </span>
          </div>
        </div>
      </div>

      {/* ── Hero Section (H1 — SITEMAP) ── */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-white via-[#F6F9FD] to-[#EDF3FB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs font-bold uppercase tracking-wider text-[#0062D2] mx-auto shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0062D2]" />
            ECOSYSTEM NAVIGATION
          </div>

          <div className="space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#0062D2] block">
              PEERS GLOBAL SITEMAP
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-950 tracking-tight leading-[1.12]">
              Find your way around{' '}
              <span className="italic bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">
                PEERS GLOBAL.
              </span>
            </h1>
          </div>

          <div className="max-w-3xl mx-auto space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed">
            <p className="font-serif italic text-slate-900 text-lg sm:text-xl font-medium">
              Everything begins with a question:
            </p>

            {/* Questions Grid with robust alignment and no clipping */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-left">
              {INTRO_QUESTIONS.map((q, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center gap-3 transition-all hover:border-[#0062D2]/60 hover:shadow-sm group"
                >
                  <span className="w-6 h-6 rounded-full bg-blue-50 border border-blue-200 text-[#0062D2] font-bold text-xs flex items-center justify-center shrink-0 font-mono group-hover:bg-[#0062D2] group-hover:text-white transition-colors">
                    ?
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-800 leading-snug break-words">
                    {q}
                  </span>
                </div>
              ))}
            </div>

            <p className="pt-2 text-slate-600 text-sm sm:text-base">
              The Sitemap gives you a simple view of the active PEERS GLOBAL experience.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="#sitemap-grid"
              className="px-8 py-3.5 rounded-full font-bold bg-[#0062D2] hover:bg-[#0051b0] text-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider"
            >
              Browse Active Pages <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#journey"
              className="px-6 py-3.5 rounded-full font-semibold bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 transition-all text-xs sm:text-sm uppercase tracking-wider shadow-xs"
            >
              The Journey Map
            </a>
            <Link
              href="/sitemap.xml"
              className="px-6 py-3.5 rounded-full font-semibold bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 transition-all text-xs sm:text-sm uppercase tracking-wider shadow-xs flex items-center gap-2"
            >
              <FileCode className="w-4 h-4 text-[#0062D2]" /> XML Sitemap
            </Link>
          </div>
        </div>
      </section>

      {/* ── QUICK ACCESS STRIP ── */}
      <section className="py-6 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0062D2] shrink-0">
              QUICK ACCESS:
            </span>
            <div className="flex flex-wrap items-center gap-2.5">
              {QUICK_ACCESS.map((qa, idx) => (
                <Link
                  key={idx}
                  href={qa.href}
                  className="px-4 py-2 rounded-full bg-[#F8FAFD] hover:bg-blue-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:text-[#0062D2] transition-colors"
                >
                  {qa.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SITEMAP ACTIVE DIRECTORY GRID ── */}
      <section id="sitemap-grid" className="py-16 sm:py-24 bg-[#F8FAFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SITEMAP_CATEGORIES.map((cat, idx) => {
              const Icon = cat.icon
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-5 hover:border-[#0062D2] hover:shadow-md transition-all"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0062D2]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="text-lg font-serif font-bold text-slate-950 tracking-wide">
                          {cat.title}
                        </h2>
                        <p className="text-xs text-[#0062D2] font-semibold">{cat.subtitle}</p>
                      </div>
                    </div>

                    <ul className="space-y-2.5 pt-4 border-t border-slate-100">
                      {cat.links.map((link, lIdx) => (
                        <li key={lIdx}>
                          <Link
                            href={link.href}
                            className="text-sm text-slate-700 hover:text-[#0062D2] transition-colors flex items-center gap-2 group/link"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/link:bg-[#0062D2] transition-colors shrink-0" />
                            <span>{link.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── THE PEERS GLOBAL JOURNEY ── */}
      <section id="journey" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0062D2]">
              Progression Model
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950">
              THE PEERS GLOBAL JOURNEY
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              The Sitemap is more than a list of pages. It reflects the journey a person can take through PEERS GLOBAL:
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3">
            {JOURNEY_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200 text-center flex flex-col justify-between space-y-1"
              >
                <span className="text-xs font-mono font-bold text-[#0062D2] block">
                  0{idx + 1}
                </span>
                <span className="text-sm font-bold text-slate-900">{step}</span>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-slate-200 max-w-xl mx-auto text-center space-y-1 text-sm text-slate-700">
            <p className="font-bold text-slate-950">You can enter at any point.</p>
            <p className="text-slate-500 text-xs">
              Your journey does not have to look like anyone else&apos;s.
            </p>
          </div>
        </div>
      </section>

      {/* ── FINAL HOME-THEMED CLOSING BANNER ── */}
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

        {/* Subtle geometric orbital line art */}
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
                FINAL THOUGHT
              </span>
              <span className="h-[1.5px] w-6 bg-white/70" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15]">
              Wherever you begin, there is a next step.
            </h2>
            <div className="max-w-2xl mx-auto text-white/90 text-sm sm:text-base space-y-1">
              <p>You may be discovering PEERS GLOBAL. You may be looking for your Circle.</p>
              <p>You may already be a Peer. You may be ready to lead.</p>
              <p className="text-cyan-200 font-bold text-base sm:text-lg pt-2">
                Find your way. Find your people. Find what you can contribute.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <Link
              href="/circles"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white shadow-[0_4px_20px_rgba(225,29,72,0.40)] hover:from-[#1E40AF] hover:to-[#BE123C] hover:shadow-[0_8px_28px_rgba(225,29,72,0.60)] transition-all hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Find Your Circle →
            </Link>
            <Link
              href="/join"
              className="px-6 py-3.5 rounded-full bg-white/[0.08] text-white border border-white/40 hover:bg-white/15 hover:border-white/70 transition-all backdrop-blur-sm"
            >
              Join PEERS GLOBAL →
            </Link>
            <Link
              href="/bring-to-my-city"
              className="px-6 py-3.5 rounded-full bg-white/[0.08] text-white border border-white/40 hover:bg-white/15 hover:border-white/70 transition-all backdrop-blur-sm"
            >
              Bring Peers to My City →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
