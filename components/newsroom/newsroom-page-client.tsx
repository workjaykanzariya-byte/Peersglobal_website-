'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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

  const filteredReleases =
    selectedYear === 'All'
      ? PRESS_RELEASES
      : PRESS_RELEASES.filter((r) => r.year === selectedYear)

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#EFF6FF] selection:text-[#0062D2] antialiased">
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-slate-200/80 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span>About</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">Newsroom</span>
        </div>
      </div>

      {/* ─── Hero Section (Redesigned matching Our Story) ─── */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#EFF6FF] via-[#F8FAFC] to-[#FFFFFF] border-b border-slate-200/80">
        {/* Soft luminous ambient glows */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-blue-200/40 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute -top-10 -left-10 w-[400px] h-[400px] bg-sky-200/30 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 z-10">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2] bg-white/90 px-3.5 py-1.5 rounded-full border border-blue-200 shadow-2xs">
                  — OFFICIAL PRESS &amp; MEDIA HUB —
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-serif font-bold text-[#061836] tracking-tight leading-[1.08]">
                Newsroom
              </h1>

              <p className="text-2xl sm:text-3xl font-serif text-slate-800 font-semibold leading-snug">
                Announcements, coverage and everything media needs.
              </p>

              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
                Official communiqués, press releases, ecosystem milestones, and editorial brand assets from Peers Global Business Media.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact?topic=media"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0062D2] text-white font-bold text-sm shadow-md hover:bg-[#0052B4] hover:shadow-lg transition-all duration-200 group active:scale-[0.98]"
                >
                  <span>Media Enquiries</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href="#media-kit"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-slate-800 font-semibold text-sm border border-slate-300 shadow-2xs hover:bg-slate-50 hover:border-slate-400 transition-all duration-200 active:scale-[0.98]"
                >
                  <span>Download Media Kit</span>
                  <Download className="w-4 h-4 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Right Hero Visual with Rounded Glass Frame */}
            <div className="lg:col-span-6 relative">
              <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[500px] rounded-[32px] overflow-hidden shadow-[0_25px_70px_rgba(4,14,36,0.25)] border border-blue-900/15 bg-[#040e24]">
                <Image
                  src="/images/conclave.png"
                  alt="Peers Global Press and Media"
                  fill
                  className="object-cover object-center"
                  priority
                />

                {/* Soft horizontal gradient edge fade on the left edge */}
                <div className="absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-[#040e24]/60 via-[#040e24]/20 to-transparent pointer-events-none z-10" />

                {/* Ambient Top & Bottom Vignettes */}
                <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#040e24]/70 to-transparent pointer-events-none z-10" />
                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#040e24]/95 via-[#040e24]/50 to-transparent pointer-events-none z-10" />

                {/* Stage Backdrop Brand Overlay */}
                <div className="absolute top-6 right-6 bg-[#040e24]/90 backdrop-blur-md px-4 py-3 rounded-xl border border-white/20 text-right z-20 max-w-[220px] shadow-lg">
                  <p className="text-xs font-semibold text-slate-200 leading-tight">
                    Voice of Collaboration.
                  </p>
                  <p className="text-[11px] font-bold text-sky-400 leading-tight mt-0.5">
                    Impact Across Bharat.
                  </p>
                </div>

                {/* Cursive overlay text */}
                <div className="absolute bottom-6 right-6 text-right z-20 max-w-[300px]">
                  <p
                    className="text-xl sm:text-2xl font-light italic leading-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
                    style={{ fontFamily: 'var(--font-script)' }}
                  >
                    Every story of growth
                    <br />
                    deserves a stage
                    <br />
                    that amplifies its truth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Latest Announcements ─── */}
      <section className="py-20 md:py-24 border-b border-slate-200/80 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                Fresh Updates
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-1">
                Latest Announcements
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ANNOUNCEMENTS.map((item) => (
              <div
                key={item.title}
                className="p-7 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-1 rounded-full bg-blue-50 text-[#0062D2] font-bold border border-blue-100">
                      {item.category}
                    </span>
                    <span className="text-slate-500 font-mono">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-slate-950 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Press Releases Archive (Dark Constellation Theme) ─── */}
      <section className="relative py-20 md:py-24 border-b border-slate-800 bg-gradient-to-br from-[#070D18] via-[#0B1528] to-[#0A101D] text-white overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-cyan-400 font-bold">
                <span className="w-6 h-[1.5px] bg-cyan-400" />
                Official Record
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-1">
                Press Releases
              </h2>
            </div>

            {/* Filter by Year */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 mr-1">
                Year:
              </span>
              {['All', '2026', '2025'].map((yr) => (
                <button
                  key={yr}
                  onClick={() => setSelectedYear(yr)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${selectedYear === yr
                      ? 'bg-cyan-500 text-slate-950 shadow-sm font-bold'
                      : 'bg-slate-800/80 text-slate-300 border border-slate-700 hover:bg-slate-700'
                    }`}
                >
                  {yr}
                </button>
              ))}
            </div>
          </div>

          <div className="divide-y divide-slate-800 rounded-3xl border border-slate-700/60 bg-gradient-to-br from-[#0B1528] via-[#0F1D38] to-[#070D18] backdrop-blur-sm overflow-hidden shadow-xl">
            {filteredReleases.map((pr) => (
              <div
                key={pr.title}
                className="p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-800/40 transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5 text-xs text-slate-400 font-mono">
                    <span className="font-bold text-cyan-400">{pr.tag}</span>
                    <span>•</span>
                    <span>{pr.date}</span>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-white">
                    {pr.title}
                  </h3>
                </div>
                <button
                  onClick={() => alert('Press release copy: Available upon request via media office.')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 shrink-0 self-start sm:self-center uppercase tracking-wider"
                >
                  Read Release <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── In The Media ─── */}
      <section className="py-20 md:py-24 border-b border-slate-200/80 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              External Coverage
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-1">
              In the media
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MEDIA_COVERAGE.map((item) => (
              <div
                key={item.headline}
                className="p-7 rounded-3xl bg-[#FAFBFD] border border-slate-200 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider font-bold text-[#0062D2]">
                    {item.publication}
                  </span>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-slate-950 leading-snug">
                    &ldquo;{item.headline}&rdquo;
                  </h3>
                </div>
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                  <span>{item.date}</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-[#0062D2] hover:underline">
                    View <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Media Kit & Boilerplate ─── */}
      <section id="media-kit" className="py-20 md:py-28 border-b border-slate-200/80 bg-[#FAFBFD]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              Brand Assets
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-1">
              Media kit
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Approved digital assets, founder portraits, and corporate fact sheets for accredited journalists and partners.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MEDIA_KIT_ITEMS.map((kit) => (
              <div
                key={kit.name}
                className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0062D2]">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-serif font-bold text-slate-900">
                    {kit.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {kit.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">{kit.size}</span>
                  <button
                    onClick={() => alert(`Downloading: ${kit.name}`)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0062D2] hover:text-[#1a42c0]"
                  >
                    Download <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Official Boilerplate Box */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-serif font-bold text-slate-950">
                Official Corporate Boilerplate
              </h3>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    "Peers Global is the world's first community of collaboration — a global community of entrepreneurs and business leaders who grow by helping each other grow. Founded in India by Dr. Pravin Parmar, Peers Global operates Circles across industries and cities, working toward one million lives impacted through entrepreneurship, collaboration and opportunity."
                  )
                  alert('Boilerplate copied to clipboard!')
                }}
                className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full bg-blue-50 text-[#0062D2] border border-blue-100 hover:bg-blue-100 transition-colors"
              >
                <Share2 className="w-3.5 h-3.5" /> Copy Text
              </button>
            </div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-serif italic border-l-4 border-[#0062D2] pl-4">
              &ldquo;Peers Global is the world&apos;s first community of collaboration — a global community of entrepreneurs and business leaders who grow by helping each other grow. Founded in India by Dr. Pravin Parmar, Peers Global operates Circles across industries and cities, working toward one million lives impacted through entrepreneurship, collaboration and opportunity.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ─── Media Enquiries Desk ─── */}
      <section className="py-20 md:py-24 border-b border-slate-200/80 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0062D2] mx-auto">
            <Mail className="w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950">
            Media Enquiries
          </h2>
          <p className="text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            For journalist interviews with Dr. Pravin Parmar, official commentary on Indian MSME developments, or event press passes, contact our communications desk directly.
          </p>
          <div className="p-6 rounded-3xl bg-[#FAFBFD] border border-slate-200 max-w-md mx-auto space-y-2 text-sm shadow-xs">
            <p className="font-serif font-bold text-slate-900">Peers Global Media Relations Office</p>
            <p className="text-slate-600">
              Email:{' '}
              <a href="mailto:media@peersglobal.com" className="text-[#0062D2] font-semibold underline">
                media@peersglobal.com
              </a>
            </p>
            <p className="text-slate-600">Phone: +91 92271 22800</p>
            <p className="text-xs font-mono text-slate-500 uppercase tracking-wider pt-1 flex items-center justify-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> We respond within one working day.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Closing Banner ─── */}
      <section className="relative isolate overflow-hidden bg-[#040F24] text-white py-24 md:py-32">
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

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Stay Connected with the Community
          </h2>
          <p className="text-base sm:text-lg text-white/90 font-light max-w-xl mx-auto">
            Get the latest stories, research reports and community milestones delivered directly.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-[#0062D2] text-sm font-bold shadow-lg uppercase tracking-wider transition-all"
            >
              Join the Movement
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact?topic=media"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white/10 text-white text-sm font-semibold border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              Contact Media Desk
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
