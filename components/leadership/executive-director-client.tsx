'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  Users,
  Building2,
  Globe2,
  Target,
  Sparkles,
  Quote,
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
  Calendar,
  Award,
  BookOpen,
  Heart,
  TrendingUp,
  Briefcase,
  Layers,
  Megaphone,
  Clock,
  Compass,
  UserCheck,
  Eye,
  Flag,
  Share2,
  MapPin,
  Landmark,
  Network,
  Handshake,
} from 'lucide-react'
import { usePageMedia } from '@/lib/hooks/use-page-media'

// ─── Stats Bar ────────────────────────────────────────────────────────────
const STATS = [
  { icon: Users, value: '10,000+', label: 'Entrepreneurs' },
  { icon: Building2, value: '250+', label: 'Cities' },
  { icon: Globe2, value: '10+', label: 'Countries' },
  { icon: Target, value: '1M', label: 'Lives to Impact' },
]

// ─── The Four Levels ──────────────────────────────────────────────────────
const FOUR_LEVELS = [
  {
    number: '01',
    level: 'AREA ED',
    geography: 'Within a district',
    desc: 'The Area Executive Director helps nurture the community within a defined area and supports its continued development.',
    icon: MapPin,
  },
  {
    number: '02',
    level: 'DISTRICT ED',
    geography: 'Multiple Area EDs beneath',
    desc: 'The District Executive Director works across multiple areas, helping create continuity and connection across the district.',
    icon: Building2,
  },
  {
    number: '03',
    level: 'STATE ED',
    geography: 'State-level ecosystem',
    desc: 'The State Executive Director carries the wider state-level perspective, connecting the development of communities across the state.',
    icon: Landmark,
  },
  {
    number: '04',
    level: 'COUNTRY ED',
    geography: 'Country-level ecosystem',
    desc: 'The Country Executive Director holds the broadest geographic responsibility within the country structure, helping connect the national community with the wider PEERS GLOBAL ecosystem.',
    icon: Globe2,
  },
]

// ─── What The Role Carries (7 Touchpoints) ────────────────────────────────
const ROLE_CARRIES_POINTS = [
  {
    title: 'Where the community is already strong',
    desc: 'Nurturing existing high-performing Circles and deepening leadership continuity.',
    icon: ShieldCheck,
  },
  {
    title: 'Where new relationships can be created',
    desc: 'Opening doors between isolated business hubs and cross-pollinating ideas.',
    icon: Network,
  },
  {
    title: 'Where Circles can develop',
    desc: 'Identifying new territories, cities, and industries ready for their first room.',
    icon: Compass,
  },
  {
    title: 'Where leaders need support',
    desc: 'Mentoring Area EDs, Circle Directors, and Founders through inflection moments.',
    icon: Users,
  },
  {
    title: 'Where parts of the ecosystem can connect',
    desc: 'Aligning sector directors, committee chairs, and geographical hubs.',
    icon: Layers,
  },
  {
    title: 'Where experience can be shared',
    desc: 'Facilitating cross-city learning, masterclasses, and best practices.',
    icon: BookOpen,
  },
  {
    title: 'Where the wider community creates new possibilities',
    desc: 'Unlocking regional-scale ventures, joint initiatives, and policy dialogue.',
    icon: Sparkles,
  },
]

// ─── What an ED Does (6 Core Pillars) ─────────────────────────────────────
const SIX_ED_PILLARS = [
  {
    title: 'CONNECT COMMUNITIES',
    headline: 'Bridge Ecosystem Components',
    desc: 'Help different parts of the PEERS GLOBAL ecosystem discover and connect with one another.',
    icon: Network,
  },
  {
    title: 'SUPPORT LEADERS',
    headline: 'Empower Circle & Industry Leaders',
    desc: 'Create an environment in which Circle and Industry leaders can continue to contribute and develop.',
    icon: Users,
  },
  {
    title: 'ENCOURAGE GROWTH',
    headline: 'Expand Into New Territories',
    desc: 'Help identify opportunities for the community to expand into new areas and create new relationships.',
    icon: TrendingUp,
  },
  {
    title: 'BUILD CONTINUITY',
    headline: 'Preserve Common Culture',
    desc: 'Ensure that growth does not become disconnected activity. A larger community still needs a common culture.',
    icon: ShieldCheck,
  },
  {
    title: 'SHARE EXPERIENCE',
    headline: 'Facilitate Cross-Regional Learning',
    desc: 'Encourage learning across Circles, industries and territories so that useful experience does not remain isolated.',
    icon: BookOpen,
  },
  {
    title: 'STRENGTHEN THE ECOSYSTEM',
    headline: 'Unified Territory Stewardship',
    desc: 'Look at the territory as a connected community rather than a collection of separate units.',
    icon: Globe2,
  },
]

// ─── Who This Is For ──────────────────────────────────────────────────────
const WHO_THIS_IS_FOR = [
  'Thinks beyond individual relationships',
  'Has demonstrated a willingness to contribute',
  'Enjoys connecting people and communities',
  'Can work across different industries and perspectives',
  'Understands that leadership requires consistency',
  'Is willing to support other leaders',
  'Values the long-term development of community',
  'Wants to help build something larger than an individual Circle',
]

// ─── Frequently Asked Questions ──────────────────────────────────────────
const FAQ = [
  {
    q: 'What is an Executive Director responsible for?',
    a: 'An Executive Director carries responsibility for developing and connecting the PEERS GLOBAL ecosystem across an assigned geographic level.',
  },
  {
    q: 'What are the four levels?',
    a: 'The structure comprises: Area ED → District ED → State ED → Country ED. Each level represents a wider geographic responsibility.',
  },
  {
    q: 'Does an Executive Director lead Circles directly?',
    a: 'The role operates at an ecosystem level rather than being limited to the day-to-day leadership of one Circle.',
  },
  {
    q: 'Is this only about expansion?',
    a: 'No. Growth is meaningful only when relationships, culture and community remain strong as the ecosystem develops.',
  },
  {
    q: 'Can an entrepreneur move through the leadership pathway?',
    a: 'The PEERS GLOBAL leadership architecture provides a progression from contribution and Circle leadership toward broader ecosystem responsibility.',
  },
  {
    q: 'What is the heart of the role?',
    a: 'To help people, leaders, Circles, industries and territories become more connected—while protecting the culture and values of the community.',
  },
]

export function ExecutiveDirectorClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const { getMedia } = usePageMedia('leadership')
  const heroMedia = getMedia({
    sectionName: 'Executive Director',
    subModuleName: 'EXECUTIVE DIRECTOR HERO',
    subModuleId: 'sub-leadership-executive-director',
    fallbackUrl: '/videos/homepage-hero-bg.mp4',
    fallbackSourceType: 'localhost',
    fallbackTitle: 'Executive Director Regional Leadership',
  })

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFBFD] text-slate-900">
      {/* ─── 1. HERO SECTION ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-5 sm:pt-6 pb-3 sm:pb-4 border-b border-slate-200/80 bg-gradient-to-b from-white via-[#F6F9FD] to-[#EDF3FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-5">
            <Link href="/" className="hover:text-[#0062D2] transition-colors">
              Home
            </Link>
            <ChevronRight className="size-3 text-slate-400" />
            <Link href="/leadership" className="hover:text-[#0062D2] transition-colors">
              Leadership
            </Link>
            <ChevronRight className="size-3 text-slate-400" />
            <span className="text-slate-800 font-semibold">Executive Director</span>
          </nav>

          {/* Hero Banner Box */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[36px] bg-white border border-slate-200/80 shadow-sm min-h-[520px] lg:min-h-[580px] flex items-center">
            {/* Fade Video Visual (Right 60%) */}
            <div
              className="absolute top-0 right-0 bottom-0 w-full sm:w-[65%] lg:w-[58%] overflow-hidden pointer-events-none"
              style={{
                maskImage:
                  'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 10%, rgba(0,0,0,0.6) 28%, black 55%)',
                WebkitMaskImage:
                  'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 10%, rgba(0,0,0,0.6) 28%, black 55%)',
              }}
            >
              {heroMedia.isYouTube && heroMedia.embedUrl ? (
                <iframe
                  src={`${heroMedia.embedUrl}&mute=1&loop=1`}
                  title={heroMedia.title}
                  className="w-full h-full border-0 object-cover pointer-events-none scale-125"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              ) : (
                <video
                  key={heroMedia.mediaUrl}
                  src={heroMedia.mediaUrl || '/videos/homepage-hero-bg.mp4'}
                  poster="/images/executive-director-hero.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover object-center scale-105"
                />
              )}
              <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-white via-white/85 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />

              {/* Cursive Script Overlay */}
              <div className="absolute top-6 sm:top-10 right-6 sm:right-10 z-20 text-right drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] pointer-events-none select-none">
                <p
                  className="text-2xl sm:text-3xl text-white/95 leading-tight font-medium"
                  style={{ fontFamily: 'var(--font-script)' }}
                >
                  Build Relationships.
                </p>
                <p
                  className="text-2xl sm:text-3xl text-white/95 leading-tight mt-0.5 font-medium"
                  style={{ fontFamily: 'var(--font-script)' }}
                >
                  Strengthen Community.
                </p>
                <p
                  className="text-3xl sm:text-4xl text-amber-300 font-bold leading-tight mt-0.5"
                  style={{ fontFamily: 'var(--font-script)' }}
                >
                  Create Possibility.
                </p>
              </div>
            </div>

            {/* Left Content */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl flex flex-col items-start">
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3">
                  <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                  <span className="brand-gradient-text">EXECUTIVE DIRECTOR</span>
                  <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                </div>

                <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-950 leading-[1.08] mb-4">
                  Executive Director
                </h1>

                <p className="text-xl sm:text-2xl font-medium text-slate-900 leading-snug mb-3">
                  Regional ecosystem builder.
                </p>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl font-light">
                  A Circle brings people together. An Industry Director connects a sector. An Executive Director helps an entire territory become more connected. This is leadership at the ecosystem level. The responsibility is no longer limited to one Circle or one industry — it is about helping the PEERS GLOBAL community grow across a defined geography while keeping the culture, relationships and purpose intact.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="https://unity.peersglobal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white px-8 py-3.5 text-sm font-semibold shadow-md shadow-blue-600/20 transition-all hover:scale-105 inline-flex items-center gap-2"
                  >
                    <span>Download Unity App</span>
                    <ArrowRight className="size-4" />
                  </a>
                  <Link
                    href="/contact?intent=leadership"
                    className="rounded-full border border-slate-300 hover:border-[#0062D2] bg-white hover:bg-slate-50 text-slate-800 hover:text-[#0062D2] px-8 py-3.5 text-sm font-semibold transition-all inline-flex items-center gap-2 shadow-sm"
                  >
                    <span>Apply to Lead</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Stats Bar */}
          <div className="mt-4 sm:mt-5 grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
            {STATS.map((stat, i) => {
              const Icon = stat.icon
              return (
                <div
                  key={i}
                  className="rounded-2xl bg-white border border-slate-200/90 p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="size-12 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0">
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <div className="font-serif text-2xl sm:text-3xl font-bold text-slate-950 leading-none">
                      {stat.value}
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">
                      {stat.label}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── 2. THE FOUR LEVELS ─────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3">
              <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
              <span className="brand-gradient-text">THE FOUR LEVELS</span>
              <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight">
              One philosophy. Different geography.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3 font-light">
              The Executive Director structure grows with the geography of the community. The level changes. The responsibility expands. The principle remains the same.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FOUR_LEVELS.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.number}
                  className="p-6 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-sm hover:border-[#0062D2]/40 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0062D2] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                        {item.number}
                      </span>
                      <div className="size-10 rounded-xl bg-white border border-slate-200 text-[#0062D2] flex items-center justify-center">
                        <Icon className="size-5" />
                      </div>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-slate-950 mb-1">
                      {item.level}
                    </h3>
                    <p className="text-xs text-[#0062D2] font-semibold mb-3">
                      {item.geography}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-8 p-5 rounded-2xl bg-blue-50/70 border border-blue-100 text-center max-w-3xl mx-auto">
            <p className="text-sm font-serif font-bold text-slate-900">
              Build relationships. Strengthen community. Create possibility.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 3. WHERE THE COMMUNITY ACTUALLY GROWS ───────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3">
                <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                <span className="brand-gradient-text">GROWTH & CONNECTION</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight leading-tight mb-5">
                Where the community actually grows
              </h2>
              <p className="text-base sm:text-lg text-slate-700 font-light leading-relaxed mb-4">
                A community does not grow because a map becomes larger. It grows because people become connected.
              </p>
              <p className="text-base sm:text-lg text-slate-700 font-light leading-relaxed mb-6">
                A new Circle creates a room. A growing industry creates an ecosystem. A developing region creates a network of ecosystems. And when those ecosystems remain connected, the community begins to develop a life of its own.
              </p>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <p className="text-base font-serif font-bold text-slate-950 mb-1">
                  That is where the Executive Director becomes important.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 font-light mt-1">
                  Not as someone who simply oversees geography, but as someone who helps people across that geography discover one another.
                </p>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200/60 aspect-[4/3]">
                <Image
                  src="/images/executive-director-conclave.jpg"
                  alt="Executive Director leading regional ecosystem"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 text-right select-none pointer-events-none drop-shadow-md">
                  <p className="text-xs text-white/90 font-medium tracking-wider uppercase">
                    Ecosystem Leadership
                  </p>
                  <p
                    className="text-lg text-amber-300 font-bold leading-tight"
                    style={{ fontFamily: 'var(--font-script)' }}
                  >
                    Regional Movement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. WHAT THE ROLE CARRIES ───────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3">
              <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
              <span className="brand-gradient-text">TERRITORY RESPONSIBILITY</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight leading-tight mb-4">
              What the role carries
            </h2>
            <p className="text-base sm:text-lg text-slate-700 font-light leading-relaxed">
              The Executive Director carries responsibility for helping the community develop across the territory assigned to the role. That means looking beyond individual meetings and individual relationships.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ROLE_CARRIES_POINTS.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="size-11 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center mb-4">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-slate-950 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-8 p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center max-w-3xl mx-auto">
            <p className="text-sm font-serif font-bold text-slate-900">
              Help the community grow without losing the culture that made it meaningful.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 5. WHAT AN ED DOES (6 PILLARS - DARK CONSTELLATION THEME) ────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#070D18] via-[#0B1528] to-[#0A101D] py-20 sm:py-24 lg:py-28 text-white border-b border-slate-800/80">
        <div aria-hidden className="pointer-events-none absolute top-1/4 left-10 size-[320px] rounded-full bg-blue-600/12 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute bottom-10 right-10 size-[380px] rounded-full bg-cyan-500/8 blur-[140px]" />
        <div aria-hidden className="pointer-events-none absolute top-10 right-1/3 size-[250px] rounded-full bg-indigo-600/8 blur-[100px]" />

        <svg viewBox="0 0 1400 600" className="absolute inset-0 size-full pointer-events-none opacity-20" preserveAspectRatio="none">
          <g fill="#38BDF8">
            <circle cx="80" cy="60" r="1.5" /><circle cx="200" cy="130" r="1" /><circle cx="340" cy="45" r="2" />
            <circle cx="500" cy="100" r="1.2" /><circle cx="680" cy="35" r="1.5" /><circle cx="850" cy="110" r="1" />
            <circle cx="1020" cy="60" r="2" /><circle cx="1180" cy="160" r="1.2" /><circle cx="1340" cy="80" r="1.5" />
            <circle cx="150" cy="500" r="1.2" /><circle cx="400" cy="540" r="1.8" /><circle cx="640" cy="560" r="1" />
            <circle cx="900" cy="520" r="1.5" /><circle cx="1100" cy="550" r="1" /><circle cx="70" cy="320" r="1" />
            <circle cx="310" cy="270" r="1.8" /><circle cx="760" cy="300" r="1.2" /><circle cx="1260" cy="360" r="1" />
          </g>
          <g stroke="#38BDF8" strokeWidth="0.5" opacity="0.35" fill="none">
            <line x1="80" y1="60" x2="200" y2="130" /><line x1="200" y1="130" x2="340" y2="45" />
            <line x1="500" y1="100" x2="680" y2="35" /><line x1="850" y1="110" x2="1020" y2="60" />
            <line x1="1020" y1="60" x2="1180" y2="160" />
          </g>
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-cyan-400 mb-3.5">
              <span className="w-5 h-px bg-cyan-400" />
              OPERATIONAL SCOPE
              <span className="w-5 h-px bg-cyan-400" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
              What an ED does
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              An Executive Director works across people, Circles, industries and geography. The role is fundamentally about connection, continuity and community development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SIX_ED_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon
              return (
                <div
                  key={idx}
                  className="p-7 rounded-3xl border border-slate-700/60 bg-gradient-to-br from-[#0B1528] via-[#0F1D38] to-[#070D18] shadow-[0_20px_50px_rgba(11,21,40,0.35)] hover:border-cyan-500/50 hover:shadow-[0_25px_60px_rgba(56,189,248,0.12)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.06] via-transparent to-black/30" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-cyan-400 border border-cyan-500/30 px-2.5 py-1 rounded-full bg-cyan-500/10">
                        {pillar.title}
                      </span>
                      <div className="size-11 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/25 transition-all shadow-inner">
                        <Icon className="size-5" />
                      </div>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-white mb-2 tracking-wide">
                      {pillar.headline}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-10 p-5 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 text-center max-w-3xl mx-auto">
            <p className="text-sm font-serif font-bold text-cyan-200">
              The role is not simply to make the community bigger. It is to help make the community stronger as it grows.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 6. WHO YOU BECOME & LEADERSHIP AT SCALE ─────────────────────── */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left: Progression */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-1">
                <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                <span className="brand-gradient-text">REGIONAL TRANSFORMATION</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
                Who you become
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-light">
                Regional leadership changes the way you see a community. You begin to look beyond the people immediately around you. You begin to notice patterns. You see where one entrepreneur&apos;s experience could help another. You recognise where two communities could benefit from knowing each other. You begin thinking about continuity—not only activity.
              </p>

              {/* 3-Step Progression */}
              <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-100">
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#0062D2] block mb-2">
                  THE DEEPER JOURNEY OF AN EXECUTIVE DIRECTOR
                </span>
                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-serif font-bold text-slate-900">
                  <span className="px-3 py-1.5 rounded-lg bg-white border border-blue-200">Leading people</span>
                  <span>→</span>
                  <span className="px-3 py-1.5 rounded-lg bg-white border border-blue-200">Connecting communities</span>
                  <span>→</span>
                  <span className="px-3 py-1.5 rounded-lg bg-[#0062D2] text-white">Building ecosystems</span>
                </div>
              </div>
            </div>

            {/* Right: Leadership at scale card */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="size-12 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center mb-5">
                    <Quote className="size-6" />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#0062D2] mb-2">
                    LEADERSHIP AT A LARGER SCALE
                  </h3>
                  <blockquote className="font-serif text-xl sm:text-2xl font-bold text-slate-950 leading-snug tracking-tight mb-4">
                    “Scale should never make a community less human.”
                  </blockquote>
                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                    At Circle level, you know people personally. At Industry level, you begin to see a sector. At regional level, you begin to see an ecosystem. Every entrepreneur remains a person first. Every relationship deserves respect.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. WHO THIS IS FOR & PROGRESSION (LOCAL TO REGIONAL) ───────── */}
      <section className="py-16 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left: Who this is for */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0062D2] mb-1">
                  CANDIDACY FIT
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-950 mb-3">
                  Who this is for
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-6">
                  The Executive Director pathway may be meaningful for an entrepreneur who:
                </p>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  {WHO_THIS_IS_FOR.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 border-t border-slate-200">
                  <p className="text-xs text-slate-600 font-medium">
                    You do not take on regional responsibility because you have finished learning. You take it on because you are willing to keep learning while helping others move forward.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: From Local to Regional & Responsibility of Scale */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0062D2] mb-1">
                    NATURAL PROGRESSION
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-slate-950 mb-3">
                    From Local to Regional
                  </h3>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800 mb-4 flex flex-wrap items-center gap-1.5">
                    <span>Circle</span> → <span>City</span> → <span>District</span> → <span>State</span> → <span>Country</span> → <span className="text-[#0062D2]">Global</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-6">
                    Each step creates a wider field of relationships. The purpose is not simply geographic expansion. The purpose is to create more opportunities for: <strong>Learning, Sharing, Relationships, Collaboration, Contribution, and Impact.</strong>
                  </p>

                  <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                    <h4 className="font-serif text-sm font-bold text-amber-950 mb-1">The Responsibility of Scale</h4>
                    <p className="text-xs text-amber-900/80 leading-relaxed">
                      More people mean more relationships to care for. More Circles mean more leaders to support. That is why Executive Director leadership is fundamentally a service role. The community is bigger than the leader.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 8. FREQUENTLY ASKED QUESTIONS ──────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3">
              <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
              <span className="brand-gradient-text">FREQUENTLY ASKED QUESTIONS</span>
              <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ.map((item, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#FAFBFD] border border-slate-200/90 overflow-hidden shadow-sm transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold text-slate-950 hover:text-[#0062D2] transition-colors"
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className={`size-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#0062D2]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed font-light border-t border-slate-200/80">
                      {item.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── 9. BUILD WHERE PEOPLE CAN BELONG (CLOSING HERO BANNER) ──────── */}
      <section className="relative isolate overflow-hidden bg-[#040F24] text-white py-20 lg:py-28">
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

        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-[min(58vw,760px)] opacity-35">
          <svg
            viewBox="0 0 760 520"
            fill="none"
            className="h-full w-full"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M760 40C555 45 405 145 375 310C355 423 265 493 70 520" stroke="currentColor" strokeWidth="1" className="text-blue-300/30" />
            <path d="M760 120C590 125 470 205 445 335C424 442 335 500 180 520" stroke="currentColor" strokeWidth="1" strokeDasharray="5 8" className="text-sky-200/25" />
            <path d="M760 215C640 220 565 278 540 370C519 446 470 490 390 520" stroke="currentColor" strokeWidth="1" className="text-blue-200/20" />
            <circle cx="540" cy="370" r="4" fill="currentColor" className="text-sky-300/60" />
            <circle cx="540" cy="370" r="13" stroke="currentColor" strokeWidth="1" className="text-sky-300/25" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-sky-200 mb-3">
                <span className="w-5 h-px bg-sky-200" />
                BUILD WHERE PEOPLE CAN BELONG
                <span className="w-5 h-px bg-sky-200" />
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-4">
                Build the ecosystem. Strengthen the relationships.
              </h2>

              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-light mb-3 max-w-2xl">
                A Circle can change the experience of one entrepreneur. An industry ecosystem can connect many. A regional ecosystem can create relationships across communities. And when those communities remain connected, possibility begins to travel.
              </p>

              <p className="text-base sm:text-lg text-amber-300 font-medium leading-relaxed mb-8 max-w-2xl">
                The geography may expand. The responsibility expands with it. The human principle remains the same.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact?intent=leadership"
                  className="rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white px-8 py-3.5 text-sm font-semibold shadow-lg transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                  <span>Apply to Lead</span>
                  <ArrowRight className="size-4" />
                </Link>
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/40 hover:border-white bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 text-sm font-semibold backdrop-blur-md transition-all inline-flex items-center gap-2"
                >
                  <span>Download Unity App</span>
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 text-left lg:text-right select-none pointer-events-none drop-shadow-lg">
              <p
                className="text-2xl sm:text-3xl text-white/70 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                From Circle to City.
              </p>
              <p
                className="text-2xl sm:text-3xl text-white/80 leading-tight font-medium mt-1"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                From District to State.
              </p>
              <p
                className="text-2xl sm:text-3xl text-white leading-tight font-medium mt-1"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                From Country
              </p>
              <p
                className="text-3xl sm:text-4xl text-amber-300 font-bold leading-tight mt-1"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                To Global Impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
