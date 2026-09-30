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
  Network,
  Handshake,
  MessageSquare,
} from 'lucide-react'
import { usePageMedia } from '@/lib/hooks/use-page-media'

// ─── Stats Bar ────────────────────────────────────────────────────────────
const STATS = [
  { icon: Users, value: '10,000+', label: 'Entrepreneurs' },
  { icon: Building2, value: '25+', label: 'Industries' },
  { icon: Globe2, value: '45+', label: 'Cities' },
  { icon: Target, value: '1M', label: 'Lives to Impact' },
]

// ─── Three Important Dimensions ───────────────────────────────────────────
const THREE_DIMENSIONS = [
  {
    icon: ShieldCheck,
    title: 'Authority & City-Level Leadership',
    subtitle: 'Earn Trust Through Contribution',
    desc: 'You become a recognised leadership point for your sector within the city. The responsibility is not simply to hold a position. It is to earn trust through contribution, consistency and the ability to bring people together.',
  },
  {
    icon: Megaphone,
    title: 'Visibility & National Recognition',
    subtitle: 'Recognition Follows Contribution',
    desc: 'The role creates visibility beyond the immediate Circle. Your work within the sector can connect with the wider PEERS GLOBAL community and contribute to a larger national movement. Recognition follows contribution — it is not the purpose.',
  },
  {
    icon: Heart,
    title: 'Mentorship & Movement',
    subtitle: 'Helping People Grow Together',
    desc: 'An Industry Director helps people grow beyond individual connections. The role carries a mentorship dimension—sharing experience, creating connections and helping the sector move forward. You are helping build a movement.',
  },
]

// ─── What The Role Carries ────────────────────────────────────────────────
const ROLE_CARRIES_POINTS = [
  {
    title: 'The people who belong to the sector',
    desc: 'Understanding who is operating, building, and innovating in your industry within the city.',
    icon: Users,
  },
  {
    title: 'The relationships that can connect them',
    desc: 'Identifying bridges between business owners who share complementary challenges and ambitions.',
    icon: Network,
  },
  {
    title: 'The opportunities for collaboration',
    desc: 'Recognising where joint capabilities, contracts, and partnerships can create outsized value.',
    icon: Handshake,
  },
  {
    title: 'The experience that can be shared',
    desc: 'Channeling hard-earned domain insights and market wisdom to other growing entrepreneurs.',
    icon: BookOpen,
  },
  {
    title: 'The entrepreneurs who may need guidance',
    desc: 'Being available to support founders navigating complex industry shifts and inflection points.',
    icon: Compass,
  },
  {
    title: 'The possibilities of collective action',
    desc: 'Unlocking what becomes possible when an entire sector begins moving and learning together.',
    icon: Sparkles,
  },
]

// ─── What an Industry Director Does (6 Core Actions) ──────────────────────
const SIX_CORE_ACTIONS = [
  {
    action: 'CONNECT',
    title: 'Connect Sector Entrepreneurs',
    desc: 'Bring relevant entrepreneurs within the sector closer to the PEERS GLOBAL ecosystem.',
    icon: Network,
  },
  {
    action: 'CONVENE',
    title: 'Convene Meaningful Exchanges',
    desc: 'Create opportunities for people in the sector to meet, exchange experience and discover common ground.',
    icon: Users,
  },
  {
    action: 'CONNECT CIRCLES',
    title: 'Bridge Circles & Industry',
    desc: 'Help create a stronger relationship between sector-focused Circles and the wider industry ecosystem.',
    icon: Layers,
  },
  {
    action: 'MENTOR',
    title: 'Share Experience & Perspectives',
    desc: 'Share experience and help emerging entrepreneurs navigate challenges where your own journey may offer useful perspective.',
    icon: Heart,
  },
  {
    action: 'FACILITATE COLLABORATION',
    title: 'Facilitate Natural Synergies',
    desc: 'Recognise where relationships, capabilities and requirements may naturally connect.',
    icon: Handshake,
  },
  {
    action: 'BUILD MOVEMENT',
    title: 'Cultivate Sector Ecosystem',
    desc: 'Look beyond individual interactions and contribute to the growth of a connected sector community within the city.',
    icon: TrendingUp,
  },
]

// ─── Who This Is For ──────────────────────────────────────────────────────
const WHO_THIS_IS_FOR = [
  'Thinks beyond their own business',
  'Has genuine experience within their industry',
  'Enjoys bringing people together',
  'Is willing to share experience',
  'Values relationships over transactions',
  'Can earn trust across different kinds of entrepreneurs',
  'Believes leadership is service',
  'Wants to contribute to something larger than individual success',
]

// ─── Frequently Asked Questions ──────────────────────────────────────────
const FAQ = [
  {
    q: 'Is an Industry Director responsible for a Circle?',
    a: 'The Industry Director role looks beyond an individual Circle and carries a city-level sector perspective.',
  },
  {
    q: 'Is this a position of authority over other entrepreneurs?',
    a: 'The role carries leadership responsibility, but PEERS GLOBAL\'s leadership philosophy is based on contribution, trust and service—not hierarchy.',
  },
  {
    q: 'Does the role guarantee recognition?',
    a: 'No guarantee should be implied. The role creates an opportunity for visibility and contribution; recognition should follow meaningful work.',
  },
  {
    q: 'Do I need to be the biggest entrepreneur in my industry?',
    a: 'The source does not define the role through business size or market position. What matters is the willingness and ability to contribute to the sector ecosystem.',
  },
  {
    q: 'Can leadership begin with a Circle?',
    a: 'Yes. The broader leadership pathway moves from contribution and Circle leadership toward ecosystem-level responsibility.',
  },
  {
    q: 'What is the heart of the role?',
    a: 'To help an industry become more connected, collaborative and capable—within the city and within the wider PEERS GLOBAL community.',
  },
]

export function IndustryDirectorClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const { getMedia } = usePageMedia('leadership')
  const heroMedia = getMedia({
    sectionName: 'Industry Director',
    subModuleName: 'INDUSTRY DIRECTOR HERO',
    subModuleId: 'sub-leadership-industry-director',
    fallbackUrl: '/videos/global-earth-hd.mp4',
    fallbackSourceType: 'localhost',
    fallbackTitle: 'Industry Director Ecosystem Role',
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
            <span className="text-slate-800 font-semibold">Industry Director</span>
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
                  src={heroMedia.mediaUrl || '/videos/global-earth-hd.mp4'}
                  poster="/images/industry-director-speaker.jpg"
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
                  One Sector.
                </p>
                <p
                  className="text-2xl sm:text-3xl text-white/95 leading-tight mt-0.5 font-medium"
                  style={{ fontFamily: 'var(--font-script)' }}
                >
                  One City.
                </p>
                <p
                  className="text-3xl sm:text-4xl text-amber-300 font-bold leading-tight mt-0.5"
                  style={{ fontFamily: 'var(--font-script)' }}
                >
                  One Connected Ecosystem.
                </p>
              </div>
            </div>

            {/* Left Content */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl flex flex-col items-start">
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3">
                  <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                  <span className="brand-gradient-text">INDUSTRY DIRECTOR</span>
                  <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                </div>

                <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-950 leading-[1.08] mb-4">
                  Industry Director
                </h1>

                <p className="text-xl sm:text-2xl font-medium text-slate-900 leading-snug mb-3">
                  Sector ecosystem owner for the city.
                </p>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl font-light">
                  An Industry Director carries responsibility for a sector—not simply for a Circle. It is a role for an entrepreneur who is ready to look beyond their own business and help build a stronger ecosystem around an industry within the city. You are helping people in your sector find one another, learn from one another, collaborate more meaningfully, and see what becomes possible when an industry begins to move together.
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

      {/* ─── 2. ONE SECTOR. ONE PERSON RESPONSIBLE. ─────────────────────── */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3">
                <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                <span className="brand-gradient-text">THE SECTOR MANDATE</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight leading-tight mb-5">
                One sector. One person responsible.
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4 font-light">
                Every industry has its own language. Its own challenges. Its own opportunities. Its own relationships. Its own people who have spent years learning what works—and what does not.
              </p>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6 font-light">
                The Industry Director becomes the person responsible for nurturing that sector ecosystem within the city. Not as a representative above others. As a person willing to take responsibility for bringing people together.
              </p>

              {/* From Circle to Sector Comparison Card */}
              <div className="w-full p-6 rounded-2xl bg-[#FAFBFD] border border-slate-200/90 shadow-sm">
                <h3 className="font-serif text-lg font-bold text-slate-950 mb-3">
                  From Circle to Sector
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light mb-4">
                  A Circle brings entrepreneurs together. An Industry Director looks across the sector. The role connects the individual Circle experience with a wider industry movement.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400">Circle Leadership</span>
                    <p className="text-xs sm:text-sm font-serif font-bold text-slate-900 mt-1">
                      “How can my Circle grow?”
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-[#0062D2]">Ecosystem Leadership</span>
                    <p className="text-xs sm:text-sm font-serif font-bold text-[#0062D2] mt-1">
                      “How can this sector become more connected, collaborative and capable?”
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200/60 aspect-[4/3]">
                <Image
                  src="/images/industry-director-speaker.jpg"
                  alt="Industry Director facilitating cross-sector collaboration"
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
                    Sector Movement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. WHAT THE ROLE MEANS (3 DIMENSIONS - DARK THEME) ───────────── */}
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
              THREE DIMENSIONS
              <span className="w-5 h-px bg-cyan-400" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
              What the role means
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              The Industry Director role carries three important dimensions that elevate sector engagement across the city.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {THREE_DIMENSIONS.map((dim, idx) => {
              const Icon = dim.icon
              return (
                <div
                  key={idx}
                  className="p-7 rounded-3xl border border-slate-700/60 bg-gradient-to-br from-[#0B1528] via-[#0F1D38] to-[#070D18] shadow-[0_20px_50px_rgba(11,21,40,0.35)] hover:border-cyan-500/50 hover:shadow-[0_25px_60px_rgba(56,189,248,0.12)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.06] via-transparent to-black/30" />

                  <div className="relative z-10">
                    <div className="size-12 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-cyan-500/25 transition-all shadow-inner">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-white mb-1">
                      {dim.title}
                    </h3>
                    <p className="text-xs text-cyan-300 font-semibold mb-3">
                      {dim.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {dim.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── 4. WHAT THE ROLE CARRIES ───────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3">
              <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
              <span className="brand-gradient-text">ECOSYSTEM HEALTH</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight leading-tight mb-4">
              What the role carries
            </h2>
            <p className="text-base sm:text-lg text-slate-700 font-light leading-relaxed">
              An Industry Director carries responsibility for the health and development of the sector ecosystem within the city. That means thinking beyond individual meetings and paying attention to what truly connects people.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ROLE_CARRIES_POINTS.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-sm hover:border-[#0062D2]/40 hover:shadow-md transition-all flex flex-col justify-between"
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

          <div className="mt-8 p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-1">
              THE UNWAVERING PRINCIPLE
            </p>
            <p className="text-sm font-serif font-bold text-slate-900">
              Responsibility before recognition.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 5. WHO YOU BECOME & PROGRESSION ─────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left: Progression */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-1">
                <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                <span className="brand-gradient-text">PERSPECTIVE EVOLUTION</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
                Who you become
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-light">
                Leadership changes you when you begin taking responsibility for something larger than yourself. As an Industry Director, you begin to see your industry differently.
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-[#0062D2] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-700 font-light">
                    You notice people who need connections and recognise experience that can be shared.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-[#0062D2] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-700 font-light">
                    You see opportunities that may otherwise remain invisible across siloed operations.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-[#0062D2] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-700 font-light">
                    You introduce people not because of an immediate transaction, but because the relationship creates enduring value.
                  </p>
                </div>
              </div>

              {/* 4-Step Progression */}
              <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-100">
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#0062D2] block mb-2">
                  THE LEADERSHIP EVOLUTION
                </span>
                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-serif font-bold text-slate-900">
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-blue-200">Entrepreneur</span>
                  <span>→</span>
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-blue-200">Contributor</span>
                  <span>→</span>
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-blue-200">Leader</span>
                  <span>→</span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#0062D2] text-white">Ecosystem Builder</span>
                </div>
              </div>
            </div>

            {/* Right: Title vs Role Card */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="size-12 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center mb-5">
                    <Quote className="size-6" />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#0062D2] mb-2">
                    THE DIFFERENCE BETWEEN A TITLE AND A ROLE
                  </h3>
                  <blockquote className="font-serif text-xl sm:text-2xl font-bold text-slate-950 leading-snug tracking-tight mb-4">
                    “A title tells people what you are called. A role tells people what you are willing to take responsibility for.”
                  </blockquote>
                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                    At PEERS GLOBAL, leadership is not about becoming important. It is about becoming useful. That trust has to be earned continuously through service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. WHAT AN INDUSTRY DIRECTOR DOES (6 ACTIONS) ───────────────── */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3">
              <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
              <span className="brand-gradient-text">OPERATIONAL SCOPE</span>
              <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight">
              What an Industry Director does
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3 font-light">
              An Industry Director works at the intersection of people, sector and possibility.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SIX_CORE_ACTIONS.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.action}
                  className="p-6 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-sm hover:border-[#0062D2]/40 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-[#0062D2] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                        {item.action}
                      </span>
                      <div className="size-10 rounded-xl bg-white border border-slate-200 text-[#0062D2] flex items-center justify-center">
                        <Icon className="size-5" />
                      </div>
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

          <div className="mt-8 p-4 rounded-2xl bg-blue-50/70 border border-blue-100 text-center max-w-2xl mx-auto">
            <p className="text-xs sm:text-sm text-slate-800 font-medium">
              The role is not about controlling the ecosystem. It is about helping the ecosystem become stronger.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 7. WHO THIS IS FOR & FROM CIRCLE TO ECOSYSTEM ──────────────── */}
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
                  The Industry Director role may be meaningful for an entrepreneur who:
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
                    You do not need to know everything about your industry. You need to care enough about its people to keep learning—and keep contributing.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: From Circle to Ecosystem */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0062D2] mb-1">
                    THE LARGER FIELD OF POSSIBILITY
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-slate-950 mb-3">
                    From Circle to Ecosystem
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-4">
                    The leadership journey does not stop when you become a Circle leader. A Circle is a beginning. An industry is a larger field of possibility.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-6">
                    And when people within an industry begin learning from one another, sharing resources, creating relationships and collaborating, something larger than networking begins to emerge.
                  </p>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                    <h4 className="font-serif text-sm font-bold text-slate-900 mb-2">That is the opportunity of an Industry Director:</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-700">
                      <div className="p-2.5 rounded-xl bg-white border border-slate-200">● One sector</div>
                      <div className="p-2.5 rounded-xl bg-white border border-slate-200">● One city</div>
                      <div className="p-2.5 rounded-xl bg-white border border-slate-200">● Many entrepreneurs</div>
                      <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-[#0062D2] font-semibold">● One connected ecosystem</div>
                    </div>
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

      {/* ─── 9. YOUR INDUSTRY. YOUR CITY. YOUR CONTRIBUTION. (CLOSING HERO) ── */}
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
                YOUR INDUSTRY. YOUR CITY. YOUR CONTRIBUTION.
                <span className="w-5 h-px bg-sky-200" />
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-4">
                Leadership begins when responsibility becomes personal.
              </h2>

              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-light mb-3 max-w-2xl">
                Every industry has people who are building something. Some have experience. Some have ambition. Some have questions. Some have answers. Some are looking for the right connection.
              </p>

              <p className="text-base sm:text-lg text-amber-300 font-medium leading-relaxed mb-8 max-w-2xl">
                Your sector is not just where you work. It is a community of people whose journeys may become stronger when they connect.
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
                One Sector.
              </p>
              <p
                className="text-2xl sm:text-3xl text-white/80 leading-tight font-medium mt-1"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                One City.
              </p>
              <p
                className="text-2xl sm:text-3xl text-white leading-tight font-medium mt-1"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Your Industry
              </p>
              <p
                className="text-3xl sm:text-4xl text-amber-300 font-bold leading-tight mt-1"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Your Contribution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
