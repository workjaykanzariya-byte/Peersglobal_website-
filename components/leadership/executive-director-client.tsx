'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GalaxyButton } from '@/components/ui/galaxy-button'
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
      <section className="relative overflow-hidden bg-[#040F24] text-white pt-6 sm:pt-8 pb-12 sm:pb-16 border-b border-slate-800">
        {/* Full Bleed Hero Video Background */}
        <div className="absolute inset-0 size-full overflow-hidden pointer-events-none">
          {heroMedia.isYouTube && heroMedia.embedUrl ? (
            <iframe
              src={`${heroMedia.embedUrl}&mute=1&loop=1`}
              title={heroMedia.title}
              className="size-full border-0 object-cover pointer-events-none scale-125 opacity-40"
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
              preload="metadata"
              className="size-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(2,8,23,0.92)_0%,rgba(4,15,36,0.78)_45%,rgba(4,15,36,0.55)_100%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="size-3 text-slate-500" />
            <Link href="/leadership" className="hover:text-white transition-colors">
              Leadership
            </Link>
            <ChevronRight className="size-3 text-slate-500" />
            <span className="text-white font-semibold">Executive Director</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full min-h-[440px] lg:min-h-[480px]">
            {/* Left Content */}
            <div className="lg:col-span-12 max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur-sm uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
                <span>EXECUTIVE DIRECTOR</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white">
                  Executive{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-rose-400">
                    Director
                  </span>
                </h1>

                <p className="text-base sm:text-lg font-medium text-slate-200 leading-snug">
                  Regional ecosystem builder across cities, districts and states.
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                A Circle brings people together. An Industry Director connects a sector. An Executive Director helps an entire territory become more connected. This is leadership at the ecosystem level. The responsibility is no longer limited to one Circle or one industry — it is about helping the PEERS GLOBAL community grow across a defined geography while keeping the culture, relationships and purpose intact.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <GalaxyButton
                  href="/contact?intent=leadership"
                  variant="primary"
                  size="md"
                >
                  Apply to Lead
                </GalaxyButton>
                <GalaxyButton
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="transparent"
                  size="md"
                >
                  Download Unity App
                </GalaxyButton>
              </div>
            </div>
          </div>

          {/* Floating Stats Bar */}
          <div className="mt-8 sm:mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
            {STATS.map((stat, i) => {
              const Icon = stat.icon
              return (
                <div
                  key={i}
                  className="rounded-2xl bg-white border border-slate-200/90 p-5 flex items-center gap-4 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all cursor-default"
                >
                  <div className="size-12 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0">
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-slate-900 leading-none">
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
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                THE FOUR LEVELS
              </span>
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight">
              One philosophy. Different geography.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              The Executive Director structure grows with the geography of the community. The level changes. The responsibility expands. The principle remains the same.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {FOUR_LEVELS.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.number}
                  className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-slate-300 hover:-translate-y-1.5 transition-all duration-300 cursor-default"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] font-bold text-[#0062D2] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                        {item.number}
                      </span>
                      <div className="size-11 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center">
                        <Icon className="size-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                        {item.level}
                      </h3>
                      <p className="text-xs text-[#0062D2] font-semibold mt-1 mb-2">
                        {item.geography}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── 3. WHERE THE COMMUNITY ACTUALLY GROWS ───────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                  STAGE 05 — REGIONAL ARCHITECTURE
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight">
                Where the community actually grows
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                A community does not grow because a map becomes larger. It grows because people become connected.
              </p>

              <div className="p-6 rounded-2xl bg-white border border-blue-100 shadow-2xs space-y-2">
                <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  That is where the Executive Director becomes important.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 font-normal">
                  Not as someone who simply oversees geography, but as someone who helps people across that geography discover one another.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-200 hover:shadow-md transition-all duration-300 flex items-start gap-3.5 group">
                  <div className="size-11 rounded-xl bg-blue-50 text-[#0062D2] border border-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Globe2 className="size-5.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Multi-City Scale</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal mt-1">
                      Link circles across borders and establish healthy regional ecosystems.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-200 hover:shadow-md transition-all duration-300 flex items-start gap-3.5 group">
                  <div className="size-11 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="size-5.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Culture Integrity</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal mt-1">
                      Protect the trust, service ethos and give-first standard as we expand.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Image / Video */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 aspect-[4/3] group bg-slate-900">
                <video
                  src="/videos/peers-global-earth-loop.mp4"
                  poster="/images/executive-director-hero.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute top-4 right-4 text-right select-none pointer-events-none drop-shadow-md">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/70 border border-white/20 text-[10px] font-bold text-white tracking-widest uppercase backdrop-blur-md">
                    <span className="size-1.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                    STAGE 05
                  </span>
                  <p
                    className="text-lg sm:text-xl text-amber-300 font-bold leading-tight mt-1.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                    style={{ fontFamily: 'var(--font-script)' }}
                  >
                    Regional Movement
                  </p>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white drop-shadow-md pointer-events-none select-none">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-sky-200 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20">
                    Connecting Cities & Leaders
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. WHAT THE ROLE CARRIES ───────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                TERRITORY RESPONSIBILITY
              </span>
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight">
              What the role carries
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              The Executive Director carries responsibility for helping the community develop across the territory assigned to the role. That means looking beyond individual meetings and individual relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {ROLE_CARRIES_POINTS.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-slate-300 hover:-translate-y-1.5 transition-all duration-300 cursor-default"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="size-11 rounded-2xl bg-blue-50 border border-blue-200/70 text-[#0062D2] flex items-center justify-center shrink-0 shadow-2xs">
                        <Icon className="size-5" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-slate-50 border border-slate-200/80 text-slate-600 shadow-2xs">
                        Pillar 0{idx + 1}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mt-2.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                    <span className="text-slate-400 font-mono">Area Responsibility 0{idx + 1}</span>
                    <span className="inline-flex items-center gap-1 text-slate-700 font-semibold">
                      Standard &rarr;
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Full-Width Celestial Legacy Banner */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white border border-white/10 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-5 max-w-3xl">
              <div className="size-12 rounded-2xl bg-white/10 border border-white/20 text-white flex items-center justify-center shrink-0 mt-1">
                <Quote className="size-6 text-amber-300" />
              </div>
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-widest text-sky-400 block">
                  THE SYSTEMIC MANDATE
                </span>
                <blockquote className="text-base sm:text-lg font-medium text-white leading-relaxed">
                  “Help the community grow without losing the culture that made it meaningful.”
                </blockquote>
              </div>
            </div>

            <div className="shrink-0 text-right select-none">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-widest uppercase text-white/90">
                REGIONAL STEWARDSHIP
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. WHAT AN ED DOES (6 PILLARS - DARK CONSTELLATION THEME) ────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#070D18] via-[#0B1528] to-[#0A101D] py-20 sm:py-24 text-white border-b border-slate-800/80">
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
          </g>
          <g stroke="#38BDF8" strokeWidth="0.5" opacity="0.35" fill="none">
            <line x1="80" y1="60" x2="200" y2="130" /><line x1="200" y1="130" x2="340" y2="45" />
            <line x1="500" y1="100" x2="680" y2="35" /><line x1="850" y1="110" x2="1020" y2="60" />
            <line x1="1020" y1="60" x2="1180" y2="160" />
          </g>
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-[2px] w-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-400">
                OPERATIONAL SCOPE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-tight mb-3">
              What an Executive Director does
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              An Executive Director works across people, Circles, industries and geography. The role is fundamentally about connection, continuity and community development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SIX_ED_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon
              return (
                <div
                  key={idx}
                  className="p-7 sm:p-8 rounded-3xl border border-slate-700/60 bg-gradient-to-br from-[#0B1528] via-[#0F1D38] to-[#070D18] shadow-[0_20px_50px_rgba(11,21,40,0.35)] hover:border-cyan-500/50 hover:shadow-[0_25px_60px_rgba(56,189,248,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden cursor-default"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.06] via-transparent to-black/30" />

                  <div className="relative z-10 space-y-3">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-cyan-400 border border-cyan-500/30 px-2.5 py-1 rounded-full bg-cyan-500/10">
                        {pillar.title}
                      </span>
                      <div className="size-11 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 flex items-center justify-center group-hover:scale-105 transition-all shadow-inner">
                        <Icon className="size-5" />
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
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
            <p className="text-xs sm:text-sm font-semibold text-cyan-200">
              The role is not simply to make the community bigger. It is to help make the community stronger as it grows.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 6. WHO YOU BECOME & LEADERSHIP AT SCALE ─────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left: Progression */}
            <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0062D2]">
                    REGIONAL TRANSFORMATION
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                  Who you become
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  Regional leadership changes the way you see a community. You begin to look beyond the people immediately around you. You begin to notice patterns. You see where one entrepreneur&apos;s experience could help another. You recognise where two communities could benefit from knowing each other. You begin thinking about continuity—not only activity.
                </p>
              </div>

              {/* 3-Step Progression */}
              <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-100 shadow-2xs">
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#0062D2] block mb-2.5">
                  THE DEEPER JOURNEY OF AN EXECUTIVE DIRECTOR
                </span>
                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-slate-900">
                  <span className="px-3 py-1.5 rounded-lg bg-white border border-blue-200 shadow-2xs">Leading people</span>
                  <span className="text-slate-400">→</span>
                  <span className="px-3 py-1.5 rounded-lg bg-white border border-blue-200 shadow-2xs">Connecting communities</span>
                  <span className="text-slate-400">→</span>
                  <span className="px-3.5 py-1.5 rounded-lg bg-[#0062D2] text-white shadow-2xs">Building ecosystems</span>
                </div>
              </div>
            </div>

            {/* Right: Leadership at scale card */}
            <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-slate-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="size-12 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center mb-2 shadow-2xs">
                  <Quote className="size-6" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                  LEADERSHIP AT A LARGER SCALE
                </div>
                <blockquote className="text-lg sm:text-xl font-bold text-slate-900 leading-snug tracking-tight">
                  “Scale should never make a community less human.”
                </blockquote>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  At Circle level, you know people personally. At Industry level, you begin to see a sector. At regional level, you begin to see an ecosystem. Every entrepreneur remains a person first. Every relationship deserves respect.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 font-medium">
                ✦ High trust creates unstoppable scale.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. WHO THIS IS FOR & PROGRESSION (LOCAL TO REGIONAL) ───────── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                LEADERSHIP CRITERIA & PATHWAY
              </span>
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight">
              Candidacy Fit & Regional Expansion
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
              Who carries the regional mandate and how ecosystem leadership scales from local Circles to nationwide impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left: Who this is for */}
            <div className="lg:col-span-6 flex">
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white via-white to-blue-50/20 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-200 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between w-full space-y-6">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="size-12 rounded-2xl bg-blue-50 text-[#0062D2] border border-blue-100 flex items-center justify-center shadow-2xs">
                      <UserCheck className="size-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-[#0062D2] border border-blue-100 text-[11px] font-bold uppercase tracking-wider">
                      Candidacy Fit
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-900">
                      Who this is for
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium">
                      The Executive Director pathway may be meaningful for an entrepreneur who:
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-1 gap-2.5">
                    {WHO_THIS_IS_FOR.map((item, i) => (
                      <div key={i} className="p-3 rounded-2xl bg-slate-50/80 border border-slate-200/70 flex items-start gap-3">
                        <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 font-light">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-100">
                  <div className="p-4 rounded-2xl bg-blue-50 text-xs font-semibold text-[#0062D2] border border-blue-200/60 flex items-center gap-2.5">
                    <Sparkles className="size-4 shrink-0 text-[#0062D2]" />
                    <span>You take on regional responsibility to keep learning while helping others move forward.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: From Local to Regional & Responsibility of Scale */}
            <div className="lg:col-span-6 flex">
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white via-white to-amber-50/20 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-200 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between w-full space-y-6">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="size-12 rounded-2xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center shadow-2xs">
                      <TrendingUp className="size-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-600 border border-amber-100 text-[11px] font-bold uppercase tracking-wider">
                      Natural Progression
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-900">
                      From Local to Regional
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium">
                      A steady progression across interconnected spheres of community influence.
                    </p>
                  </div>

                  {/* Flow Pills */}
                  <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70 flex flex-wrap items-center gap-2 justify-between">
                    <div className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs font-semibold text-slate-800">
                      Circle
                    </div>
                    <span className="text-slate-400 font-bold">→</span>
                    <div className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs font-semibold text-slate-800">
                      City
                    </div>
                    <span className="text-slate-400 font-bold">→</span>
                    <div className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs font-semibold text-slate-800">
                      District
                    </div>
                    <span className="text-slate-400 font-bold">→</span>
                    <div className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs font-semibold text-slate-800">
                      State
                    </div>
                    <span className="text-slate-400 font-bold">→</span>
                    <div className="px-3 py-1.5 rounded-xl bg-[#0062D2] text-white shadow-2xs text-xs font-bold">
                      Global
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70 space-y-2">
                    <p className="text-xs sm:text-sm text-slate-700 font-light leading-relaxed">
                      Each step creates a wider field of relationships. The purpose is not simply geographic expansion — it is to multiply opportunities for collaborative impact.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200/80 space-y-1.5">
                    <h4 className="text-xs sm:text-sm font-bold text-amber-950 flex items-center gap-2">
                      <ShieldCheck className="size-4 text-amber-600" />
                      <span>The Responsibility of Scale</span>
                    </h4>
                    <p className="text-xs text-amber-900/80 leading-relaxed font-normal">
                      More people mean more relationships to care for. More Circles mean more leaders to support. Executive Director leadership is fundamentally a service role.
                    </p>
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-100">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700 flex items-center gap-2.5">
                    <Globe2 className="size-4 shrink-0 text-[#0062D2]" />
                    <span>The community is always bigger than any individual leader.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 8. FREQUENTLY ASKED QUESTIONS ──────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ.map((item, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#FAFBFD] border border-slate-200/90 overflow-hidden shadow-2xs transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 text-base sm:text-lg font-bold text-slate-900 hover:text-[#0062D2] transition-colors"
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className={`size-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#0062D2]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 font-light leading-relaxed border-t border-slate-200/80">
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
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white py-20 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(0,98,210,0.18),transparent_50%),radial-gradient(circle_at_82%_12%,rgba(99,102,241,0.15),transparent_50%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-blue-600/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-indigo-500/15 blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 flex flex-col items-start space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-sky-400 to-rose-400 rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-sky-400">
                  BUILD WHERE PEOPLE CAN BELONG
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight">
                Build the ecosystem. Strengthen the relationships.
              </h2>

              <p className="text-sm sm:text-base text-slate-200 font-light leading-relaxed max-w-2xl">
                A Circle can change the experience of one entrepreneur. An industry ecosystem can connect many. A regional ecosystem can create relationships across communities. And when those communities remain connected, possibility begins to travel.
              </p>

              <p className="text-sm sm:text-base text-amber-300 font-medium leading-relaxed pb-3 max-w-2xl">
                The geography may expand. The responsibility expands with it. The human principle remains the same.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <GalaxyButton
                  href="/contact?intent=leadership"
                  variant="primary"
                  size="md"
                >
                  Apply to Lead
                </GalaxyButton>
                <GalaxyButton
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="transparent"
                  size="md"
                >
                  Download Unity App
                </GalaxyButton>
              </div>
            </div>

            <div className="lg:col-span-4 text-left lg:text-right select-none pointer-events-none drop-shadow-lg space-y-1">
              <p
                className="text-xl sm:text-2xl text-white/70 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                From Circle to City.
              </p>
              <p
                className="text-xl sm:text-2xl text-white/80 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                From District to State.
              </p>
              <p
                className="text-xl sm:text-2xl text-white leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                From Country
              </p>
              <p
                className="text-2xl sm:text-3xl text-amber-300 font-bold leading-tight"
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

