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
    gradient: 'from-blue-600/10 via-blue-500/5 to-transparent',
    badgeColor: 'bg-blue-50 text-[#0062D2] border-blue-200',
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
    gradient: 'from-sky-600/10 via-sky-500/5 to-transparent',
    badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
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
    gradient: 'from-purple-600/10 via-purple-500/5 to-transparent',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
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
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
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
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  },
]

export function InitiativesPageClient() {
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
          <span className="text-slate-900 font-bold">Our Initiatives</span>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-[#EFF6FF] via-[#F8FAFC] to-[#FFFFFF] border-b border-slate-200/80">
        <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-blue-200/40 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute -top-10 -left-10 w-[400px] h-[400px] bg-sky-200/30 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-blue-200 shadow-2xs text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2] mx-auto">
            <Target className="w-3.5 h-3.5 text-[#0062D2]" />
            Ecosystem Platforms
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#061836] font-bold tracking-tight leading-[1.08]">
            Our Initiatives
          </h1>

          <p className="text-xl sm:text-2xl font-serif text-slate-700 italic max-w-2xl mx-auto leading-relaxed">
            One mission. Several platforms.
          </p>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Each one exists because a group of entrepreneurs was being left out of the conversation.
          </p>

          <div className="pt-2">
            <Link
              href="/unity"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#0062D2] text-white text-sm font-bold hover:bg-[#0052B4] transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
            >
              Download Unity App
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Section: Why more than one ─── */}
      <section className="py-20 md:py-24 border-b border-slate-200/80 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            Purposeful Division
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#061836]">
            Why more than one
          </h2>
          <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5">
            <p className="text-lg sm:text-xl font-serif text-[#061836] font-medium">
              Entrepreneurs are not one audience.
            </p>
            <p>
              A woman building a business in a market that does not take her seriously faces something different from a manufacturer entering an export market. A founder building a sustainability business faces something different again.
            </p>
            <p>
              Each initiative exists because a particular group needed a room, and did not have one.
            </p>
            <p className="text-lg font-serif italic text-[#0062D2] font-semibold">
              They share the same belief, the same code and the same mission. What differs is who they serve.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Section: THE INITIATIVES ─── */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0062D2] font-bold">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              The Unified Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#061836]">
              The Initiatives
            </h2>
            <p className="text-base text-slate-600">
              Five distinct expressions of one governing commitment: no entrepreneur builds alone.
            </p>
          </div>

          <div className="space-y-8">
            {INITIATIVES.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="p-8 sm:p-10 md:p-12 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all relative overflow-hidden group"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                    <div className="space-y-4 max-w-3xl">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${item.badgeColor}`}>
                          {item.tag}
                        </span>
                        <span className="text-xs uppercase tracking-widest font-mono text-slate-400">
                          Platform 0{idx + 1}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#061836] group-hover:text-[#0062D2] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm font-semibold text-[#0062D2] mt-0.5">
                          {item.subtitle}
                        </p>
                      </div>

                      <p className="text-base sm:text-lg text-slate-800 font-serif italic">
                        {item.desc}
                      </p>

                      <p className="text-sm text-slate-600 leading-relaxed font-normal">
                        {item.longDesc}
                      </p>
                    </div>

                    <div className="shrink-0 pt-2 lg:pt-0">
                      {item.isExternal ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#061836] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0062D2] transition-all shadow-sm"
                        >
                          {item.linkText}
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <Link
                          href={item.link}
                          className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-50 text-[#0062D2] border border-blue-200 text-xs font-bold uppercase tracking-wider hover:bg-blue-100 transition-all shadow-sm"
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
      <section className="relative bg-[#040E24] text-white py-24 md:py-32 overflow-hidden border-t border-slate-900">
        <div className="absolute inset-0 z-0 opacity-30 mix-blend-luminosity">
          <Image
            src="/images/who-we-are-mountain.jpg"
            alt="Mountain ridge horizon"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040E24] via-[#040E24]/80 to-[#040E24]/90" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-sky-400 font-mono font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            The Unified Measure
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            One mission across all of them
          </h2>

          <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-sky-300 leading-snug">
            &ldquo;We are not counting members. We are counting lives impacted.&rdquo;
          </p>

          <div className="pt-4">
            <Link
              href="/unity"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#0062D2] text-white text-sm font-bold hover:bg-[#0052B4] transition-all shadow-lg hover:shadow-xl uppercase tracking-wider active:scale-[0.98]"
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
