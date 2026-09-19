'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  Megaphone,
  Download,
  ExternalLink,
  FileText,
  Calendar,
  Share2,
  Mail,
  Clock,
  Sparkles,
  Building2,
  Globe2,
} from 'lucide-react'

const ANNOUNCEMENTS = [
  {
    category: 'Expansion',
    date: 'August 2026',
    title: 'Peers Global expands into 5 new industrial manufacturing territories',
    summary:
      'Launching specialised industrial Circles across Gujarat, Maharashtra, and Tamil Nadu to connect 200+ Tier 2 manufacturing promoters.',
  },
  {
    category: 'Technology',
    date: 'June 2026',
    title: 'Unity App crosses 100,000 verified bilateral collaborations logged',
    summary:
      'The proprietary relational capital engine hits historic activity milestone as business owners record verified joint ventures, client intros, and boardroom support.',
  },
  {
    category: 'Mission',
    date: 'March 2026',
    title: '1 Million Entrepreneurs Forum awards 500 grassroots mentorship fellowships',
    summary:
      'Section 8 not-for-profit entity confirms expansion of rural and student founder advisory programs across Tier 3 towns.',
  },
]

const PRESS_RELEASES = [
  {
    year: '2026',
    date: 'August 14, 2026',
    title: 'Peers Global Conclave 2026 Convenes 1,200 Promoters in Ahmedabad',
    tag: 'Corporate Milestone',
  },
  {
    year: '2026',
    date: 'May 02, 2026',
    title: 'Peers Global Announces Pre-Series A Institutional Funding Round',
    tag: 'Funding & Growth',
  },
  {
    year: '2026',
    date: 'January 18, 2026',
    title: 'Fempreneur Initiative Launches 5 Regional Chapters for Women Founders',
    tag: 'Ecosystem',
  },
  {
    year: '2025',
    date: 'November 10, 2025',
    title: 'Deployment of Relational Currency & Peer Standing on Unity App',
    tag: 'Platform Tech',
  },
  {
    year: '2025',
    date: 'August 22, 2025',
    title: 'Peers Global Crosses 100 Verified Promoter Seats in Flagship Circles',
    tag: 'Community',
  },
  {
    year: '2025',
    date: 'February 15, 2025',
    title: 'Peers Global Incorporated by Dr. Pravin Parmar to Reform MSME Collaboration',
    tag: 'Founding',
  },
]

const MEDIA_COVERAGE = [
  {
    publication: 'Economic Times',
    headline: 'How Governed Peer Circles Are Saving MSMEs From Costly Capex Missteps',
    date: 'July 2026',
    link: '#',
  },
  {
    publication: 'YourStory',
    headline: 'From a Farmer Family in Botad to Building Bharat’s Most Disciplined Founder Rooms',
    date: 'April 2026',
    link: '#',
  },
  {
    publication: 'Business Standard',
    headline: 'Peers Global Introduces Bilateral Collaboration Logging to Replace Business Cards',
    date: 'January 2026',
    link: '#',
  },
]

const MEDIA_KIT_ITEMS = [
  {
    name: 'Peers Global Brand Guidelines & Vector Logos',
    size: '14.2 MB .ZIP',
    desc: 'Full-resolution vector marks, hex palettes, typography, and clear-space guides.',
  },
  {
    name: 'Dr. Pravin Parmar Official Executive Portraits',
    size: '28.5 MB .ZIP',
    desc: 'High-resolution editorial headshots for print and digital publishing.',
  },
  {
    name: 'Peers Global Corporate Factsheet & Overview (2026)',
    size: '1.8 MB .PDF',
    desc: 'Single-page summary of verified statistics, Circles, territories, and governance.',
  },
  {
    name: 'Unity App Screenshots & Platform Visual Assets',
    size: '18.4 MB .ZIP',
    desc: 'UI screenshots, mobile mockups, and feature callouts for technology press.',
  },
]

export function NewsroomPageClient() {
  const [selectedYear, setSelectedYear] = useState('All')

  const filteredReleases =
    selectedYear === 'All'
      ? PRESS_RELEASES
      : PRESS_RELEASES.filter((r) => r.year === selectedYear)

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-slate-200/80 bg-white/80 backdrop-blur-md sticky top-0 z-30 shadow-2xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-[#0062D2] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span>About</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">Newsroom</span>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-[#EFF6FF] via-[#F8FAFC] to-[#FFFFFF] border-b border-slate-200/80">
        <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-blue-200/40 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute -top-10 -left-10 w-[400px] h-[400px] bg-sky-200/30 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-blue-200 shadow-2xs text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2] mx-auto">
            <Megaphone className="w-3.5 h-3.5 text-[#0062D2]" />
            Official Press &amp; Media Hub
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#061836] font-bold tracking-tight leading-[1.08]">
            Newsroom
          </h1>

          <p className="text-xl sm:text-2xl font-serif text-slate-700 italic max-w-2xl mx-auto leading-relaxed">
            Announcements, coverage and everything media needs.
          </p>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto">
            Official communiqués, press releases, ecosystem milestones, and editorial brand assets from Peers Global Business Media.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact?topic=media"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#0062D2] text-white text-sm font-bold hover:bg-[#0052B4] transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
            >
              Media Enquiries
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#media-kit"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white text-slate-800 text-sm font-semibold border border-slate-300 shadow-2xs hover:bg-slate-50 hover:border-slate-400 transition-all active:scale-[0.98]"
            >
              Download Media Kit
            </a>
          </div>
        </div>
      </section>

      {/* ─── Latest Announcements ─── */}
      <section className="py-20 md:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                Fresh Updates
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] mt-1">
                Latest Announcements
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ANNOUNCEMENTS.map((item) => (
              <div
                key={item.title}
                className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-1 rounded-full bg-blue-50 text-[#0062D2] font-semibold border border-blue-200">
                      {item.category}
                    </span>
                    <span className="text-slate-500 font-mono">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#061836] leading-snug group-hover:text-[#0062D2] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Press Releases Archive ─── */}
      <section className="py-20 md:py-24 border-b border-slate-200/80 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                Official Record
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] mt-1">
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
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedYear === yr
                      ? 'bg-[#0062D2] text-white shadow-sm'
                      : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {yr}
                </button>
              ))}
            </div>
          </div>

          <div className="divide-y divide-slate-100 rounded-3xl bg-white border border-slate-200/80 overflow-hidden shadow-sm">
            {filteredReleases.map((pr) => (
              <div
                key={pr.title}
                className="p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5 text-xs text-slate-500 font-mono">
                    <span className="font-semibold text-[#0062D2]">{pr.tag}</span>
                    <span>•</span>
                    <span>{pr.date}</span>
                  </div>
                  <h3 className="text-lg font-serif text-[#061836] font-medium">
                    {pr.title}
                  </h3>
                </div>
                <button
                  onClick={() => alert('Press release text copy: Available via media office.')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0062D2] hover:text-[#0052B4] shrink-0 self-start sm:self-center"
                >
                  Read Release <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── In The Media ─── */}
      <section className="py-20 md:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              External Coverage
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] mt-1">
              In the media
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MEDIA_COVERAGE.map((item) => (
              <div
                key={item.headline}
                className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider font-bold text-[#0062D2]">
                    {item.publication}
                  </span>
                  <h3 className="text-base sm:text-lg font-serif text-[#061836] leading-snug group-hover:text-[#0062D2] transition-colors">
                    &ldquo;{item.headline}&rdquo;
                  </h3>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>{item.date}</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-slate-800">
                    View <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Media Kit & Boilerplate ─── */}
      <section id="media-kit" className="py-20 md:py-28 border-b border-slate-200/80 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              Brand Assets
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836] mt-1">
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
                className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0062D2]">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-serif font-bold text-[#061836]">
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
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0062D2] hover:text-[#0052B4]"
                  >
                    Download <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Official Boilerplate Box */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-4 border-l-4 border-l-[#0062D2]">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-serif font-bold text-[#061836]">
                Official Corporate Boilerplate
              </h3>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    "Peers Global is the world's first community of collaboration — a global community of entrepreneurs and business leaders who grow by helping each other grow. Founded in India by Dr. Pravin Parmar, Peers Global operates Circles across industries and cities, working toward one million lives impacted through entrepreneurship, collaboration and opportunity."
                  )
                  alert('Boilerplate copied to clipboard!')
                }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0062D2] border border-blue-200 hover:bg-blue-100 transition-colors"
              >
                <Share2 className="w-3.5 h-3.5" /> Copy Text
              </button>
            </div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-serif italic border-l-2 border-[#0062D2] pl-4">
              &ldquo;Peers Global is the world&apos;s first community of collaboration — a global community of entrepreneurs and business leaders who grow by helping each other grow. Founded in India by Dr. Pravin Parmar, Peers Global operates Circles across industries and cities, working toward one million lives impacted through entrepreneurship, collaboration and opportunity.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ─── Media Enquiries Desk ─── */}
      <section className="py-20 md:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0062D2] mx-auto shadow-2xs">
            <Mail className="w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836]">
            Media Enquiries
          </h2>
          <p className="text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            For journalist interviews with Dr. Pravin Parmar, official commentary on Indian MSME developments, or event press passes, contact our communications desk directly.
          </p>
          <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 max-w-md mx-auto space-y-2 text-sm">
            <p className="font-bold text-[#061836]">Peers Global Media Relations Office</p>
            <p className="text-slate-600">
              Email:{' '}
              <a href="mailto:media@peersglobal.com" className="text-[#0062D2] font-semibold underline">
                media@peersglobal.com
              </a>
            </p>
            <p className="text-slate-600">Phone: +91 92271 22800</p>
            <p className="text-xs font-mono text-slate-500 uppercase tracking-wider pt-1 flex items-center justify-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#0062D2]" /> We respond within one working day.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
