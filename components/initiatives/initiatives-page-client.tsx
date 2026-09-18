'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  Globe2,
  Users,
  Sparkles,
  HeartHandshake,
  Leaf,
  Award,
  ExternalLink,
  Target,
} from 'lucide-react'

const INITIATIVES = [
  {
    title: 'Peers Global',
    subtitle: 'Community of Collaboration',
    tag: 'Flagship Community',
    desc: 'The world’s first community of collaboration. Circles of entrepreneurs across industries, cities and countries, built on trust and contribution.',
    longDesc:
      'Curated rooms of verified business founders, category-exclusive seats, governed monthly agendas, and verified bilateral collaboration tracking through the Unity App.',
    link: '/circles',
    linkText: 'Explore Peers Global',
    isExternal: false,
    icon: Users,
    gradient: 'from-amber-600/10 via-amber-500/5 to-transparent',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-200',
  },
  {
    title: 'VyapaarJagat',
    subtitle: 'Media Platform for MSMEs',
    tag: 'Independent Media',
    desc: 'A media platform for the businesses mainstream business media ignores.',
    longDesc:
      'Founded on one belief: every honest business story deserves respect and visibility. Even if a business shuts down, its story should never die. Reaching over 1M+ business owners across Bharat.',
    link: 'https://vyapaarjagat.com',
    linkText: 'Visit VyapaarJagat.com',
    isExternal: true,
    icon: Globe2,
    gradient: 'from-blue-600/10 via-blue-500/5 to-transparent',
    badgeColor: 'bg-blue-100 text-blue-900 border-blue-200',
  },
  {
    title: 'Fempreneur',
    subtitle: 'National Movement for Women-Led Enterprise',
    tag: 'Women In Business',
    desc: 'Women building businesses face a different set of obstacles, and they are rarely discussed honestly.',
    longDesc:
      'Fempreneur exists so those conversations happen in a room built for them — addressing access to growth capital, scale barriers, family-enterprise balance, and institutional market access.',
    link: '/circles',
    linkText: 'Explore Fempreneur',
    isExternal: false,
    icon: Sparkles,
    gradient: 'from-rose-600/10 via-rose-500/5 to-transparent',
    badgeColor: 'bg-rose-100 text-rose-900 border-rose-200',
  },
  {
    title: 'Greenpreneur',
    subtitle: 'Sustainable & ESG-Focused Businesses',
    tag: 'Sustainability & ESG',
    desc: 'For entrepreneurs building sustainable and ESG-focused businesses.',
    longDesc:
      'A young sector with policy complexity, specialised funding and long horizons. Greenpreneur brings circular-economy and clean-tech entrepreneurs together to work through it collectively.',
    link: '/circles',
    linkText: 'Explore Greenpreneur',
    isExternal: false,
    icon: Leaf,
    gradient: 'from-emerald-600/10 via-emerald-500/5 to-transparent',
    badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-200',
  },
  {
    title: '1 Million Entrepreneurs International Forum',
    subtitle: 'Section 8 Not-for-Profit Entity',
    tag: 'Philanthropic Arm',
    desc: 'A Section 8 not-for-profit, working toward one million lives impacted through entrepreneurship, collaboration and opportunity.',
    longDesc:
      'Carrying the initiatives that sit outside commercial membership: grassroots mentorship, student founder incubators, and capacity development for first-generation founders.',
    link: '/1-million-mission',
    linkText: 'See the 1 Million Mission',
    isExternal: false,
    icon: Award,
    gradient: 'from-indigo-600/10 via-indigo-500/5 to-transparent',
    badgeColor: 'bg-indigo-100 text-indigo-900 border-indigo-200',
  },
]

export function InitiativesPageClient() {
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
          <span className="text-neutral-900 font-semibold">Our Initiatives</span>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden border-b border-[#EADFC7]/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#FAF3E0] border border-[#E8DFC8] text-xs font-semibold uppercase tracking-wider text-[#7C5832] mx-auto">
            <Target className="w-3.5 h-3.5 text-[#B88746]" />
            Ecosystem Platforms
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#1A1A1A] tracking-tight leading-[1.08]">
            Our Initiatives
          </h1>

          <p className="text-xl sm:text-2xl font-serif text-[#5B4834] italic max-w-2xl mx-auto leading-relaxed">
            One mission. Several platforms.
          </p>

          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Each one exists because a group of entrepreneurs was being left out of the conversation.
          </p>

          <div className="pt-2">
            <Link
              href="/unity"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#1A1A1A] text-white text-sm font-semibold hover:bg-[#333333] transition-all shadow-md"
            >
              Download Unity App
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Section: Why more than one ─── */}
      <section className="py-20 md:py-24 border-b border-[#EADFC7]/60 bg-[#FAF7F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A7356] font-bold">
            <span className="w-6 h-[1.5px] bg-[#B88746]" />
            Purposeful Division
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A]">
            Why more than one
          </h2>
          <div className="prose prose-lg text-[#3D352E] leading-relaxed font-normal space-y-5">
            <p className="text-lg sm:text-xl font-serif text-[#2B231B]">
              Entrepreneurs are not one audience.
            </p>
            <p>
              A woman building a business in a market that does not take her seriously faces something different from a manufacturer entering an export market. A founder building a sustainability business faces something different again.
            </p>
            <p>
              Each initiative exists because a particular group needed a room, and did not have one.
            </p>
            <p className="text-lg font-serif italic text-[#8A6320]">
              They share the same belief, the same code and the same mission. What differs is who they serve.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Section: THE INITIATIVES ─── */}
      <section className="py-20 md:py-28 border-b border-[#EADFC7]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A7356] font-bold">
              <span className="w-6 h-[1.5px] bg-[#B88746]" />
              The Unified Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1A1A1A]">
              The Initiatives
            </h2>
            <p className="text-base text-neutral-600">
              Five distinct expressions of one governing commitment: no entrepreneur builds alone.
            </p>
          </div>

          <div className="space-y-8">
            {INITIATIVES.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="p-8 sm:p-10 md:p-12 rounded-3xl bg-white border border-[#E8DFC9] shadow-sm hover:shadow-md transition-all relative overflow-hidden"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                    <div className="space-y-4 max-w-3xl">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${item.badgeColor}`}>
                          {item.tag}
                        </span>
                        <span className="text-xs uppercase tracking-widest font-mono text-neutral-400">
                          Platform 0{idx + 1}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-2xl sm:text-3xl font-serif text-[#1A1A1A]">
                          {item.title}
                        </h3>
                        <p className="text-sm font-medium text-[#8C6422] mt-0.5">
                          {item.subtitle}
                        </p>
                      </div>

                      <p className="text-base sm:text-lg text-neutral-800 font-serif italic">
                        {item.desc}
                      </p>

                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {item.longDesc}
                      </p>
                    </div>

                    <div className="shrink-0 pt-2 lg:pt-0">
                      {item.isExternal ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-all shadow-sm"
                        >
                          {item.linkText}
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <Link
                          href={item.link}
                          className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#FAF3E2] text-[#735017] border border-[#E2D5B5] text-xs font-bold uppercase tracking-wider hover:bg-[#F2E5CE] transition-all shadow-sm"
                        >
                          {item.linkText}
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Closing Banner: One mission across all of them ─── */}
      <section className="relative bg-[#0D1117] text-white py-24 md:py-32 overflow-hidden border-t border-neutral-800">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="/images/who-we-are-mountain.jpg"
            alt="Mountain ridge horizon"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-300 font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            The Unified Measure
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight">
            One mission across all of them
          </h2>

          <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-amber-200/90 leading-snug">
            &ldquo;We are not counting members. We are counting lives impacted.&rdquo;
          </p>

          <div className="pt-4">
            <Link
              href="/unity"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-amber-500 text-neutral-950 text-sm font-bold hover:bg-amber-400 transition-all shadow-lg hover:shadow-xl uppercase tracking-wider"
            >
              Download Unity App
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
