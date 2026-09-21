'use client'

import React, { useState, useEffect } from 'react'
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
  Clock,
  Sparkles,
  Building2,
  Share2,
  CheckCircle2,
  ShieldCheck,
  Phone,
  Copy,
  Check,
} from 'lucide-react'

const ANNOUNCEMENTS = [
  {
    title: 'Peers Global Crosses 19 Operating Circles Across Bharat',
    date: 'September 2026',
    category: 'Expansion',
    summary:
      'With new Circle launches across Mumbai, Surat, Vadodara, and Ahmedabad, over 200 high-growth business founders now collaborate under structured peer governance.',
  },
  {
    title: 'Unity App 3.0 Deploys Bilateral Collaboration Verification',
    date: 'August 2026',
    category: 'Technology',
    summary:
      'The proprietary mobile ecosystem now features direct hot-seat logging, verified 1-to-1 sync booking, and automated Life Impact Score calculation.',
  },
  {
    title: '1 Million Mission Forum Commits ₹5 Cr to Grassroots MSME Mentorship',
    date: 'June 2026',
    category: 'Philanthropy',
    summary:
      'Section 8 initiative expands non-commercial fellowship programs for first-generation manufacturing and trading founders across Tier-2 districts.',
  },
]

const PRESS_RELEASES = [
  {
    year: '2026',
    title: 'Peers Global Announces National Leadership Council and Executive Director Roster',
    date: 'July 15, 2026',
    tag: 'Corporate',
    url: '#',
  },
  {
    year: '2026',
    title: 'Dr. Pravin Parmar Keynotes Indian MSME Innovation Conclave on Collaborative Capital',
    date: 'May 20, 2026',
    tag: 'Speaking',
    url: '#',
  },
  {
    year: '2025',
    title: 'Peers Global Business Media Pvt Ltd Closes FY25 with ₹400+ Cr Verified Member Collaborations',
    date: 'December 18, 2025',
    tag: 'Milestone',
    url: '#',
  },
  {
    year: '2025',
    title: 'VyapaarJagat & Peers Global Partner to Spotlight 500 Unsung Industrial Champions',
    date: 'September 10, 2025',
    tag: 'Media',
    url: '#',
  },
]

const MEDIA_COVERAGE = [
  {
    publication: 'The Economic Times',
    headline: 'How Governed Peer Circles Are Cutting MSME Bad Debts and Capex Errors in Gujarat',
    date: 'July 2026',
    link: '#',
  },
  {
    publication: 'YourStory',
    headline: 'From Botad Farmer Roots to Building India’s First Governed Community of Collaboration',
    date: 'April 2026',
    link: '#',
  },
  {
    publication: 'Entrepreneur India',
    headline: 'Why Dr. Pravin Parmar Believes the Next Economic Boom Belongs to Relational Capital',
    date: 'January 2026',
    link: '#',
  },
]

const MEDIA_KIT_ITEMS = [
  {
    name: 'Official Logos & Brand Assets',
    desc: 'Vector SVGs, PNGs (dark & light variants), and community typography guidelines.',
    size: '12.4 MB .ZIP',
  },
  {
    name: 'Founder Biography & High-Res Portraits',
    desc: 'Official biographical narrative, credentials summary, and print-ready photos of Dr. Pravin Parmar.',
    size: '28.1 MB .ZIP',
  },
  {
    name: 'Company Fact Sheet & Ecosystem Overview',
    desc: 'Two-page PDF breakdown of Circle mechanics, governance stats, and the 1 Million Mission roadmap.',
    size: '2.8 MB .PDF',
  },
  {
    name: 'Community & Conclave Photography',
    desc: 'Editorial imagery of Circle meetings, boardrooms, and annual conclave gatherings.',
    size: '45.6 MB .ZIP',
  },
]

export function NewsroomPageClient() {
  const [selectedYear, setSelectedYear] = useState('All')
  const [heroVideo, setHeroVideo] = useState('/videos/homepage-hero-bg.mp4')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const loadVideo = () => {
      try {
        const saved = localStorage.getItem('peers_admin_page_media')
        if (saved) {
          const items = JSON.parse(saved)
          const target = items.find(
            (i: any) =>
              (i.pageSlug === '/newsroom' ||
                i.pageId === 'newsroom' ||
                i.pageName === 'Newsroom' ||
                i.pageSlug === '/' ||
                i.pageName === 'Home Page') &&
              i.isActive &&
              i.mediaUrl
          )
          if (target && target.mediaUrl) {
            setHeroVideo(target.mediaUrl)
          }
        }
      } catch (err) {}
    }
    loadVideo()
    window.addEventListener('storage', loadVideo)
    window.addEventListener('peers_media_updated', loadVideo)
    return () => {
      window.removeEventListener('storage', loadVideo)
      window.removeEventListener('peers_media_updated', loadVideo)
    }
  }, [])

  const filteredReleases =
    selectedYear === 'All'
      ? PRESS_RELEASES
      : PRESS_RELEASES.filter((r) => r.year === selectedYear)

  const copyBoilerplate = () => {
    navigator.clipboard.writeText(
      "Peers Global is the world's first community of collaboration — a global leadership organisation of entrepreneurs who grow by helping each other grow. Founded in India by Dr. Pravin Parmar, Peers Global operates governed Circles across industries and cities, working toward one million lives impacted through entrepreneurship, collaboration and opportunity."
    )
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-[#FDFDFE] text-slate-900 font-sans selection:bg-blue-100 selection:text-[#1E4ED8]">
      {/* ─── Top Breadcrumb Navigation ─── */}
      <div className="border-b border-slate-200/70 bg-white/85 backdrop-blur-md sticky top-0 z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-[#1E4ED8] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-500">About</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold">Newsroom</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-[11px] font-medium text-slate-500">
            <span className="inline-block size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Media Secretariat: 24h Response SLA</span>
          </div>
        </div>
      </div>

      {/* ─── Hero Section: Homepage-Style Unified Master Banner Card ─── */}
      <section className="relative pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden bg-[#FBFCFE] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-8 sm:gap-10">
          
          {/* Unified Master Hero Card (Matching Home Page Who We Are Hero Card) */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[32px] bg-white border border-slate-200/80 shadow-sm min-h-[480px] lg:min-h-[520px] flex items-center">
            
            {/* Right Media Background Layer (Fading into white on the left with live looping video) */}
            <div
              className="absolute top-0 right-0 bottom-0 w-full sm:w-[65%] lg:w-[60%] overflow-hidden pointer-events-none"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.5) 25%, black 50%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.5) 25%, black 50%)',
              }}
            >
              {/* High Definition Looping Background Video */}
              <video
                key={heroVideo}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="size-full object-cover object-center"
              >
                <source src={heroVideo} type="video/mp4" />
                <source src="/videos/homepage-hero-bg.mp4" type="video/mp4" />
                <source src="/videos/hero-background.mp4" type="video/mp4" />
              </video>

              {/* Seamless gradient overlays for signature misty fade */}
              <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white via-white/80 via-30% to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none" />

              {/* Top-Right Script Typography with Drop Shadow */}
              <div className="absolute top-6 sm:top-8 right-6 sm:right-8 z-20 text-right drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] pointer-events-none select-none">
                <p className="text-lg sm:text-2xl text-white/95 leading-tight" style={{ fontFamily: 'var(--font-script)' }}>
                  People
                </p>
                <p className="text-lg sm:text-2xl text-white/95 leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Ideas
                </p>
                <p className="text-lg sm:text-2xl text-white/95 leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Partnerships
                </p>
                <p className="text-xl sm:text-3xl text-white font-medium leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Impact
                </p>
              </div>

              {/* Bottom-Right Frosted Glass Pill */}
              <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-20 pointer-events-none select-none">
                <div className="rounded-xl border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2.5 shadow-lg text-left">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/70">
                    PRESS &amp; MEDIA HUB
                  </p>
                  <p className="text-xs font-bold tracking-wider text-white">
                    OFFICIAL DISPATCHES &amp; ASSETS
                  </p>
                </div>
              </div>
            </div>

            {/* Left Content Area (Overlaid on the crisp white side) */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl flex flex-col gap-5 sm:gap-6">
                
                {/* Eyebrow */}
                <div className="flex items-center gap-2">
                  <span className="h-0.5 w-6 bg-[#1E4ED8]" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E4ED8]">
                    OFFICIAL PRESS &amp; MEDIA HUB
                  </span>
                </div>

                {/* Main Heading & Subheading in exact homepage serif hierarchy */}
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.85rem] font-normal tracking-tight text-slate-900 leading-[1.18]">
                  Press &amp; <span className="italic text-[#1E4ED8]">Newsroom.</span>
                  <span className="text-lg sm:text-xl lg:text-2xl text-slate-700 italic font-normal block mt-1.5 leading-snug">
                    Announcements, coverage and everything accredited media needs.
                  </span>
                </h1>

                {/* Description */}
                <p className="text-sm sm:text-base leading-relaxed text-slate-600 max-w-lg font-normal">
                  Official communiqués, press releases, ecosystem milestones, and editorial brand assets from Peers Global Business Media.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-5 pt-1">
                  {/* Glowing Media Enquiries Button */}
                  <div className="relative group/media-btn">
                    <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#E53935] via-[#3B82F6] to-[#1E4ED8] opacity-0 blur-md transition-all duration-500 group-hover/media-btn:opacity-80 group-hover/media-btn:blur-lg" />
                    
                    <Link
                      href="/contact?intent=media"
                      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#1E4ED8] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(30,78,216,0.30)] transition-all duration-200 hover:bg-[#1a42c0] hover:-translate-y-[2px] hover:shadow-[0_8px_22px_rgba(30,78,216,0.40)] active:scale-[0.97]"
                    >
                      <span>Media Enquiries</span>
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                    </Link>
                  </div>

                  <a
                    href="#media-kit"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-xs transition-all duration-200 hover:bg-slate-50 hover:border-slate-400 hover:-translate-y-[2px] active:scale-[0.98]"
                  >
                    <span>Download Media Kit</span>
                  </a>
                </div>

                {/* 3 Impact Highlights */}
                <div className="mt-2 grid grid-cols-3 gap-4 sm:gap-6 border-t border-slate-200/80 pt-6">
                  <div>
                    <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">&lt; 24h</p>
                    <p className="text-xs text-slate-600 font-semibold leading-snug mt-1">Press Desk SLA</p>
                    <p className="text-[11px] text-slate-400 font-medium">Fast-Track Access</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">1M+</p>
                    <p className="text-xs text-slate-600 font-semibold leading-snug mt-1">MSME Readers</p>
                    <p className="text-[11px] text-slate-400 font-medium">National Syndication</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">100%</p>
                    <p className="text-xs text-slate-600 font-semibold leading-snug mt-1">Verified Releases</p>
                    <p className="text-[11px] text-slate-400 font-medium">Official Statements</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* ─── Fast-Track Callout Card ─── */}
          <div className="rounded-2xl sm:rounded-[28px] bg-white border border-slate-200/80 shadow-sm p-5 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-5 transition-all duration-300 hover:shadow-md hover:border-blue-200">
            <div className="flex items-center gap-4 text-left w-full sm:w-auto">
              <div className="size-12 sm:size-14 rounded-2xl bg-blue-50 border border-blue-100/80 flex items-center justify-center text-[#1E4ED8] shrink-0 shadow-2xs">
                <Megaphone className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <h2 className="font-serif text-base sm:text-lg font-bold text-[#061836]">
                  Interview Dr. Pravin Parmar &amp; Leadership
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 font-normal">
                  Our Media Secretariat coordinates exclusive editorial commentary, keynote appearances, and broadcast panel seats.
                </p>
              </div>
            </div>

            <Link
              href="/contact?intent=media"
              className="shrink-0 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#1E4ED8] text-white text-xs sm:text-sm font-semibold hover:bg-[#1a42c0] transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
            >
              <span>Schedule Interview</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ─── Section 2: Latest Announcements (3-Column Grid) ─── */}
      <section className="py-16 sm:py-24 lg:py-28 bg-[#FFFFFF] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
            <div className="flex items-center justify-center gap-2">
              <span className="h-0.5 w-6 bg-[#1E4ED8]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E4ED8]">
                FRESH DISPATCHES
              </span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#061836] tracking-tight leading-[1.15]">
              Latest Announcements
            </h2>
            
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
              Recent developments across Peers Global Circles, the Unity App roadmap, and the 1 Million Mission Forum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
            {ANNOUNCEMENTS.map((item, idx) => (
              <div
                key={item.title}
                className="group relative p-7 sm:p-8 rounded-2xl sm:rounded-[24px] bg-white border border-blue-100/90 shadow-[0_4px_20px_rgba(30,78,216,0.04)] hover:border-blue-300 hover:shadow-[0_14px_34px_rgba(30,78,216,0.10)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#1E4ED8] text-xs font-bold font-mono uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="text-xs font-mono font-medium text-slate-400">
                      {item.date}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#061836] group-hover:text-[#1E4ED8] transition-colors leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-slate-400">
                    DISPATCH 0{idx + 1}
                  </span>
                  <Link
                    href="/contact?intent=media"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1E4ED8] hover:text-[#1a42c0] transition-colors"
                  >
                    <span>Full Coverage</span>
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── Section 3: Press Releases Archive ─── */}
      <section className="py-16 sm:py-24 lg:py-28 bg-[#F8FAFD] border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="h-0.5 w-6 bg-[#1E4ED8]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E4ED8]">
                  OFFICIAL RECORD
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#061836] tracking-tight leading-[1.18]">
                Press Releases Archive
              </h2>
            </div>

            {/* Year Filter Pills */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mr-1">
                Filter Year:
              </span>
              {['All', '2026', '2025'].map((yr) => (
                <button
                  key={yr}
                  onClick={() => setSelectedYear(yr)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    selectedYear === yr
                      ? 'bg-[#1E4ED8] text-white shadow-sm'
                      : 'bg-white text-slate-700 border border-slate-300/80 hover:bg-slate-100'
                  }`}
                >
                  {yr}
                </button>
              ))}
            </div>
          </div>

          <div className="divide-y divide-slate-200/80 rounded-2xl sm:rounded-[28px] border border-slate-200/90 bg-white shadow-sm overflow-hidden">
            {filteredReleases.map((pr) => (
              <div
                key={pr.title}
                className="p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-blue-50/40 transition-colors"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2.5 text-xs text-slate-500 font-mono">
                    <span className="font-bold text-[#1E4ED8] uppercase tracking-wider">{pr.tag}</span>
                    <span>•</span>
                    <span>{pr.date}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900 leading-snug">
                    {pr.title}
                  </h3>
                </div>

                <Link
                  href="/contact?intent=media"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1E4ED8] hover:text-[#1a42c0] shrink-0 self-start sm:self-center uppercase tracking-wider"
                >
                  Request Release <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── Section 4: External Media Coverage ─── */}
      <section className="py-16 sm:py-24 lg:py-28 bg-[#FFFFFF] border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="flex items-center justify-center gap-2">
              <span className="h-0.5 w-6 bg-[#1E4ED8]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E4ED8]">
                EXTERNAL JOURNALISM
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#061836] tracking-tight leading-[1.18]">
              In The Media
            </h2>
            <p className="text-sm text-slate-600 font-normal">
              Feature coverage, founder profiles, and analysis across premier national business media.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
            {MEDIA_COVERAGE.map((item) => (
              <div
                key={item.headline}
                className="p-7 sm:p-8 rounded-2xl sm:rounded-[24px] bg-[#FAFBFD] border border-slate-200/90 shadow-2xs hover:border-blue-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-wider font-mono font-bold text-[#1E4ED8] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                    {item.publication}
                  </span>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-[#061836] leading-snug">
                    &ldquo;{item.headline}&rdquo;
                  </h3>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>{item.date}</span>
                  <Link
                    href="/contact?intent=media"
                    className="inline-flex items-center gap-1 font-bold text-[#1E4ED8] hover:underline"
                  >
                    Press Office <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── Section 5: Media Kit & Official Brand Assets ─── */}
      <section id="media-kit" className="py-16 sm:py-24 lg:py-28 bg-[#F8FAFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="flex items-center justify-center gap-2">
              <span className="h-0.5 w-6 bg-[#1E4ED8]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E4ED8]">
                ACCREDITED PRESS ASSETS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-[#061836] tracking-tight leading-[1.15]">
              Official Media Kit
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Approved high-resolution digital assets, founder portraits, and corporate fact sheets for accredited journalists.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MEDIA_KIT_ITEMS.map((kit) => (
              <div
                key={kit.name}
                className="p-7 rounded-2xl sm:rounded-[24px] bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-5 hover:border-blue-300 hover:shadow-md transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="size-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1E4ED8]">
                    <FileText className="size-5" />
                  </div>
                  <h3 className="text-base font-serif font-bold text-slate-900 leading-snug">
                    {kit.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {kit.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 font-medium">{kit.size}</span>
                  <Link
                    href="/contact?intent=media"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1E4ED8] hover:text-[#1a42c0]"
                  >
                    <span>Request File</span>
                    <Download className="size-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Official Corporate Boilerplate Box */}
          <div className="p-8 sm:p-10 rounded-2xl sm:rounded-[28px] bg-white border border-slate-200/90 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-serif font-bold text-[#061836]">
                Official Corporate Boilerplate
              </h3>
              <button
                type="button"
                onClick={copyBoilerplate}
                className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full bg-blue-50 text-[#1E4ED8] border border-blue-200 hover:bg-blue-100 transition-colors cursor-pointer"
              >
                {copied ? <Check className="size-3.5 text-emerald-600" /> : <Copy className="size-3.5" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Boilerplate'}</span>
              </button>
            </div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-serif italic border-l-4 border-[#1E4ED8] pl-4">
              &ldquo;Peers Global is the world&apos;s first community of collaboration — a global leadership organisation of entrepreneurs who grow by helping each other grow. Founded in India by Dr. Pravin Parmar, Peers Global operates governed Circles across industries and cities, working toward one million lives impacted through entrepreneurship, collaboration and opportunity.&rdquo;
            </p>
          </div>

        </div>
      </section>

      {/* ─── Section 6: Closing CTA Banner (Homepage Royal Blue Style) ─── */}
      <section className="relative bg-[#0062D2] text-white py-24 md:py-32 overflow-hidden">
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

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-white tracking-tight leading-[1.15]">
              Stay Connected with the Community <br className="hidden sm:inline" />
              <span className="italic text-cyan-200">and Leadership.</span>
            </h2>
            <p className="text-base sm:text-lg text-white/90 font-normal max-w-xl mx-auto leading-relaxed">
              Get the latest research briefings, verified community outcomes, and leadership commentary delivered directly.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact?intent=media"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#0062D2] hover:bg-slate-100 text-sm font-bold transition-all shadow-lg hover:shadow-xl uppercase tracking-wider active:scale-[0.98]"
            >
              <span>Contact Media Secretariat</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/unity"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white text-sm font-semibold border border-white/25 hover:bg-white/20 transition-all uppercase tracking-wider backdrop-blur-sm active:scale-[0.98]"
            >
              <span>Download Unity App</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
