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
    <div className="min-h-screen bg-[#FBFCFE] text-slate-900 font-sans selection:bg-blue-100 selection:text-slate-900">
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

      {/* ─── Hero Section ─── */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-[#F0F5FD] via-[#FBFCFE] to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100/80 text-xs font-bold uppercase tracking-wider text-[#0062D2] mx-auto">
            <Megaphone className="w-3.5 h-3.5" />
            Official Press &amp; Media Hub
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#0D1F47] tracking-tight leading-[1.08]">
            Newsroom
          </h1>

          <p className="text-xl sm:text-2xl font-serif text-[#1e3a8a] italic max-w-2xl mx-auto leading-relaxed font-normal">
            Announcements, coverage and everything media needs.
          </p>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto">
            Official communiqués, press releases, ecosystem milestones, and editorial brand assets from Peers Global Business Media.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact?topic=media"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#0062D2] hover:bg-[#1a42c0] text-white text-sm font-bold shadow-[0_4px_14px_rgba(0,98,210,0.25)] hover:shadow-lg transition-all"
            >
              Media Enquiries
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#media-kit"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-slate-800 text-sm font-semibold border border-slate-200 hover:bg-slate-50 transition-all shadow-xs"
            >
              Download Media Kit
            </a>
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
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D1F47] mt-1">
                Latest Announcements
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ANNOUNCEMENTS.map((item) => (
              <div
                key={item.title}
                className="p-7 rounded-3xl bg-[#FAF7F0] border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-1 rounded-full bg-blue-50 text-[#0062D2] font-bold border border-blue-100">
                      {item.category}
                    </span>
                    <span className="text-slate-500 font-mono">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#0D1F47] leading-snug">
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

      {/* ─── Press Releases Archive ─── */}
      <section className="py-20 md:py-24 border-b border-slate-200/80 bg-[#FAF7F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                Official Record
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D1F47] mt-1">
                Press Releases
              </h2>
            </div>

            {/* Filter by Year */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mr-1">
                Year:
              </span>
              {['All', '2026', '2025'].map((yr) => (
                <button
                  key={yr}
                  onClick={() => setSelectedYear(yr)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${selectedYear === yr
                      ? 'bg-[#0062D2] text-white shadow-sm'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                    }`}
                >
                  {yr}
                </button>
              ))}
            </div>
          </div>

          <div className="divide-y divide-slate-200 rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm">
            {filteredReleases.map((pr) => (
              <div
                key={pr.title}
                className="p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5 text-xs text-slate-500 font-mono">
                    <span className="font-bold text-[#0062D2]">{pr.tag}</span>
                    <span>•</span>
                    <span>{pr.date}</span>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#0D1F47]">
                    {pr.title}
                  </h3>
                </div>
                <button
                  onClick={() => alert('Press release copy: Available upon request via media office.')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0062D2] hover:text-[#1a42c0] shrink-0 self-start sm:self-center uppercase tracking-wider"
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
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D1F47] mt-1">
              In the media
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MEDIA_COVERAGE.map((item) => (
              <div
                key={item.headline}
                className="p-7 rounded-3xl bg-[#FAF7F0] border border-slate-200 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider font-bold text-[#0062D2]">
                    {item.publication}
                  </span>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-[#0D1F47] leading-snug">
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
      <section id="media-kit" className="py-20 md:py-28 border-b border-slate-200/80 bg-[#FAF7F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              Brand Assets
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D1F47] mt-1">
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
              <h3 className="text-lg font-serif font-bold text-[#0D1F47]">
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
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0D1F47]">
            Media Enquiries
          </h2>
          <p className="text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            For journalist interviews with Dr. Pravin Parmar, official commentary on Indian MSME developments, or event press passes, contact our communications desk directly.
          </p>
          <div className="p-6 rounded-3xl bg-[#FAF7F0] border border-slate-200 max-w-md mx-auto space-y-2 text-sm shadow-xs">
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
      <section className="relative bg-[#0B1220] text-white py-24 md:py-32 overflow-hidden border-t border-slate-800">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="/images/who-we-are-mountain.jpg"
            alt="Mountain ridge horizon"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Stay Connected with the Community
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light max-w-xl mx-auto">
            Get the latest stories, research reports and community milestones delivered directly.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#0062D2] hover:bg-[#1a42c0] text-white text-sm font-bold shadow-[0_4px_14px_rgba(0,98,210,0.35)] hover:shadow-xl uppercase tracking-wider transition-all"
            >
              Join the Movement
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact?topic=media"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white/10 text-white text-sm font-semibold border border-white/20 hover:bg-white/15 transition-all backdrop-blur-sm"
            >
              Contact Media Desk
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
