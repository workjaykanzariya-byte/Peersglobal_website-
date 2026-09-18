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
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] font-sans selection:bg-[#E8DDD0] selection:text-[#1A1A1A]">
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-[#EADFC7]/50 bg-[#FDFBF7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-neutral-500 font-medium">
          <Link href="/" className="hover:text-neutral-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span>About</span>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span className="text-neutral-900 font-semibold">Newsroom</span>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden border-b border-[#EADFC7]/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#FAF3E0] border border-[#E8DFC8] text-xs font-semibold uppercase tracking-wider text-[#7C5832] mx-auto">
            <Megaphone className="w-3.5 h-3.5 text-[#B88746]" />
            Official Press &amp; Media Hub
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#1A1A1A] tracking-tight leading-[1.08]">
            Newsroom
          </h1>

          <p className="text-xl sm:text-2xl font-serif text-[#5B4834] italic max-w-2xl mx-auto leading-relaxed">
            Announcements, coverage and everything media needs.
          </p>

          <p className="text-base sm:text-lg text-neutral-600 max-w-xl mx-auto">
            Official communiqués, press releases, ecosystem milestones, and editorial brand assets from Peers Global Business Media.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact?topic=media"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#1A1A1A] text-white text-sm font-semibold hover:bg-[#333333] transition-all shadow-md"
            >
              Media Enquiries
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#media-kit"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#F4EDE0] text-[#554432] text-sm font-semibold border border-[#DACFBA] hover:bg-[#EAE0CD] transition-all"
            >
              Download Media Kit
            </a>
          </div>
        </div>
      </section>

      {/* ─── Latest Announcements ─── */}
      <section className="py-20 md:py-24 border-b border-[#EADFC7]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A7356] font-bold">
                <span className="w-6 h-[1.5px] bg-[#B88746]" />
                Fresh Updates
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A] mt-1">
                Latest Announcements
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ANNOUNCEMENTS.map((item) => (
              <div
                key={item.title}
                className="p-7 rounded-3xl bg-white border border-[#E8DFC9] shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-1 rounded-full bg-[#FAF3E2] text-[#735017] font-semibold border border-[#E2D5B5]">
                      {item.category}
                    </span>
                    <span className="text-neutral-500 font-mono">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-serif text-[#1A1A1A] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Press Releases Archive ─── */}
      <section className="py-20 md:py-24 border-b border-[#EADFC7]/60 bg-[#FAF7F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A7356] font-bold">
                <span className="w-6 h-[1.5px] bg-[#B88746]" />
                Official Record
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A] mt-1">
                Press Releases
              </h2>
            </div>

            {/* Filter by Year */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 mr-1">
                Year:
              </span>
              {['All', '2026', '2025'].map((yr) => (
                <button
                  key={yr}
                  onClick={() => setSelectedYear(yr)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedYear === yr
                      ? 'bg-[#1A1A1A] text-white shadow-sm'
                      : 'bg-white text-neutral-700 border border-[#DACFBA] hover:bg-[#FAF4E6]'
                  }`}
                >
                  {yr}
                </button>
              ))}
            </div>
          </div>

          <div className="divide-y divide-[#EADFC7] rounded-3xl bg-white border border-[#E5DAC0] overflow-hidden shadow-sm">
            {filteredReleases.map((pr) => (
              <div
                key={pr.title}
                className="p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#FAF8F4] transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5 text-xs text-neutral-500 font-mono">
                    <span className="font-semibold text-[#8C6422]">{pr.tag}</span>
                    <span>•</span>
                    <span>{pr.date}</span>
                  </div>
                  <h3 className="text-lg font-serif text-[#1A1A1A] font-medium">
                    {pr.title}
                  </h3>
                </div>
                <button
                  onClick={() => alert('Press release text copy: Available via media office.')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8C6422] hover:text-[#5E4214] shrink-0 self-start sm:self-center"
                >
                  Read Release <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── In The Media ─── */}
      <section className="py-20 md:py-24 border-b border-[#EADFC7]/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A7356] font-bold">
              <span className="w-6 h-[1.5px] bg-[#B88746]" />
              External Coverage
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A] mt-1">
              In the media
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MEDIA_COVERAGE.map((item) => (
              <div
                key={item.headline}
                className="p-7 rounded-3xl bg-white border border-[#E8DFC9] shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider font-bold text-[#8C6422]">
                    {item.publication}
                  </span>
                  <h3 className="text-base sm:text-lg font-serif text-[#1A1A1A] leading-snug">
                    &ldquo;{item.headline}&rdquo;
                  </h3>
                </div>
                <div className="pt-4 border-t border-[#F0E6D2] flex items-center justify-between text-xs text-neutral-500">
                  <span>{item.date}</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-neutral-800">
                    View <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Media Kit & Boilerplate ─── */}
      <section id="media-kit" className="py-20 md:py-28 border-b border-[#EADFC7]/60 bg-[#FAF7F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A7356] font-bold">
              <span className="w-6 h-[1.5px] bg-[#B88746]" />
              Brand Assets
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A] mt-1">
              Media kit
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              Approved digital assets, founder portraits, and corporate fact sheets for accredited journalists and partners.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MEDIA_KIT_ITEMS.map((kit) => (
              <div
                key={kit.name}
                className="p-6 rounded-3xl bg-white border border-[#E5DAC0] shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF4E6] border border-[#EADBBD] flex items-center justify-center text-[#8C6422]">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-serif font-bold text-[#1A1A1A]">
                    {kit.name}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {kit.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#F0E6D2] flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-400">{kit.size}</span>
                  <button
                    onClick={() => alert(`Downloading: ${kit.name}`)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8C6422] hover:text-[#5E4214]"
                  >
                    Download <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Official Boilerplate Box */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E5DAC0] shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-serif font-bold text-[#1A1A1A]">
                Official Corporate Boilerplate
              </h3>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    "Peers Global is the world's first community of collaboration — a global community of entrepreneurs and business leaders who grow by helping each other grow. Founded in India by Dr. Pravin Parmar, Peers Global operates Circles across industries and cities, working toward one million lives impacted through entrepreneurship, collaboration and opportunity."
                  )
                  alert('Boilerplate copied to clipboard!')
                }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-[#FAF3E2] text-[#735017] border border-[#E2D5B5] hover:bg-[#F2E5CE]"
              >
                <Share2 className="w-3.5 h-3.5" /> Copy Text
              </button>
            </div>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-serif italic border-l-2 border-[#B88746] pl-4">
              &ldquo;Peers Global is the world&apos;s first community of collaboration — a global community of entrepreneurs and business leaders who grow by helping each other grow. Founded in India by Dr. Pravin Parmar, Peers Global operates Circles across industries and cities, working toward one million lives impacted through entrepreneurship, collaboration and opportunity.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ─── Media Enquiries Desk ─── */}
      <section className="py-20 md:py-24 border-b border-[#EADFC7]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-14 h-14 rounded-full bg-[#FAF3E0] border border-[#E8DFC8] flex items-center justify-center text-[#8C6422] mx-auto">
            <Mail className="w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A]">
            Media Enquiries
          </h2>
          <p className="text-base text-neutral-600 max-w-xl mx-auto leading-relaxed">
            For journalist interviews with Dr. Pravin Parmar, official commentary on Indian MSME developments, or event press passes, contact our communications desk directly.
          </p>
          <div className="p-6 rounded-2xl bg-[#FAF6EE] border border-[#EADBBD] max-w-md mx-auto space-y-2 text-sm">
            <p className="font-semibold text-neutral-900">Peers Global Media Relations Office</p>
            <p className="text-neutral-600">
              Email:{' '}
              <a href="mailto:media@peersglobal.com" className="text-[#8C6422] font-semibold underline">
                media@peersglobal.com
              </a>
            </p>
            <p className="text-neutral-600">Phone: +91 92271 22800</p>
            <p className="text-xs font-mono text-[#8A7356] uppercase tracking-wider pt-1 flex items-center justify-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> We respond within one working day.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
