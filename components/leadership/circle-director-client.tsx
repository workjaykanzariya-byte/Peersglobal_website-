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
  MessageSquare,
  Search,
  Smartphone,
} from 'lucide-react'
import { usePageMedia } from '@/lib/hooks/use-page-media'

// ─── Stats Bar ────────────────────────────────────────────────────────────
const STATS = [
  {
    icon: Users,
    value: '10,000+',
    label: 'Entrepreneurs',
  },
  {
    icon: Building2,
    value: '45+',
    label: 'Cities',
  },
  {
    icon: Globe2,
    value: '25+',
    label: 'Countries',
  },
  {
    icon: Target,
    value: '1M',
    label: 'Lives to Impact',
  },
]

// ─── The Leadership Structure (3 Chairs & 9 Leaders) ────────────────────────
const LEADERSHIP_STRUCTURE = [
  {
    icon: Users,
    color: 'text-blue-700',
    bg: 'bg-blue-50',
    border: 'border-blue-200/80',
    title: '3 Chairs',
    subtitle: 'Executive Mentorship & Pillars',
    desc: 'You work with and mentor the 3 Chairs who lead the primary pillars of the Circle, providing strategic guidance and holding the rhythm.',
  },
  {
    icon: Layers,
    color: 'text-indigo-700',
    bg: 'bg-indigo-50',
    border: 'border-indigo-200/80',
    title: '9 Leaders',
    subtitle: 'Functional Committee Execution',
    desc: 'You guide and support the 9 Leaders across dedicated functions, empowering them to run their areas with excellence and clarity.',
  },
  {
    icon: Heart,
    color: 'text-purple-700',
    bg: 'bg-purple-50',
    border: 'border-purple-200/80',
    title: 'Multiplication of Leadership',
    subtitle: 'Growth Through Empowerment',
    desc: 'A good Director does not create dependence on the Director. A good Director helps other leaders become stronger, creating multiplication.',
  },
]

// ─── The Seven Approved Responsibilities ──────────────────────────────────
const SEVEN_RESPONSIBILITIES = [
  {
    number: '01',
    title: 'Holding the Circle Rhythm & Monthly Execution',
    desc: 'Ensuring the monthly Circle experience runs with precision, discipline, and energy according to the approved format.',
    icon: Calendar,
  },
  {
    number: '02',
    title: 'Mentoring & Aligning the 3 Chairs and 9 Leaders',
    desc: 'Guiding committee leadership, conducting regular alignment touchpoints, and helping each leader succeed in their responsibilities.',
    icon: Users,
  },
  {
    number: '03',
    title: 'Category Integrity & Room Composition',
    desc: 'Safeguarding the non-competing category standard and ensuring diverse, high-caliber entrepreneurial representation in the room.',
    icon: ShieldCheck,
  },
  {
    number: '04',
    title: 'Attendance Governance & Participation Standards',
    desc: 'Upholding presence and contribution benchmarks so the room remains active, committed, and accountable.',
    icon: UserCheck,
  },
  {
    number: '05',
    title: 'Member Care & Proactive Peer Outreach',
    desc: 'Noticing when a Peer becomes quieter or faces business headwinds, and creating continuity through genuine personal connection.',
    icon: Heart,
  },
  {
    number: '06',
    title: 'Upholding Circle Culture, Trust & Confidentiality',
    desc: 'Fostering a safe, trusted environment where founders share openly, celebrate wins, and give before asking.',
    icon: Eye,
  },
  {
    number: '07',
    title: 'Cross-Circle Collaboration & Ecosystem Stewardship',
    desc: 'Connecting your Circle into the wider PEERS GLOBAL network for cross-city, regional, and national growth opportunities.',
    icon: Globe2,
  },
]

// ─── What The Role Carries ────────────────────────────────────────────────
const ROLE_CARRIES_TRAITS = [
  {
    title: 'Consistency',
    desc: 'Showing up when it matters. Holding the rhythm month after month without wavering.',
    icon: Clock,
  },
  {
    title: 'Attention',
    desc: 'Knowing the people inside the Circle, not merely the numbers.',
    icon: Eye,
  },
  {
    title: 'Coordination',
    desc: 'Helping leaders work together seamlessly across different responsibilities.',
    icon: Layers,
  },
  {
    title: 'Mentorship',
    desc: 'Developing the Chairs and Leaders around you into capable community champions.',
    icon: Users,
  },
  {
    title: 'Responsibility',
    desc: 'Taking ownership when something needs to move forward.',
    icon: ShieldCheck,
  },
  {
    title: 'Patience',
    desc: 'Understanding that communities grow through relationships, not instructions.',
    icon: Compass,
  },
  {
    title: 'Trust',
    desc: 'Building an environment where people feel safe to participate and share.',
    icon: Heart,
  },
]

// ─── Who You Become Points ────────────────────────────────────────────────
const WHO_YOU_BECOME_POINTS = [
  'Who needs an introduction.',
  'Who has an experience worth sharing.',
  'Who has something valuable to contribute.',
  'Who has become disconnected.',
  'Where collaboration could emerge.',
  'Where a conversation needs encouragement.',
  'Where another leader needs support.',
]

// ─── Who This Is For ──────────────────────────────────────────────────────
const WHO_THIS_IS_FOR = [
  'You naturally bring people together',
  'You enjoy helping others succeed',
  'People trust you with responsibility',
  'You can listen before deciding',
  'You are willing to mentor other leaders',
  'You can maintain consistency over time',
  'You believe leadership is service rather than status',
]

// ─── Frequently Asked Questions ──────────────────────────────────────────
const FAQ = [
  {
    q: 'Is the Circle Director above the other members?',
    a: 'No. The role represents responsibility, not superiority. A Director is still a Peer — with an additional responsibility to help the Circle function and grow.',
  },
  {
    q: 'Does the Director lead alone?',
    a: 'No. The Director mentors the 3 Chairs and 9 Leaders who form the leadership structure around the Circle.',
  },
  {
    q: 'Is this a full-time role?',
    a: 'The source material defines the role as a leadership responsibility within PEERS GLOBAL; it does not specify a separate employment arrangement.',
  },
  {
    q: 'What if I have never held a community leadership role?',
    a: 'Leadership can begin with contribution. The important question is whether you are willing to accept responsibility and help others succeed.',
  },
  {
    q: 'What matters most in the role?',
    a: 'The role is built around the Circle and the people within it. Your success is not simply that the Circle meets. It is that the Circle becomes a stronger place for its entrepreneurs.',
  },
]

export function CircleDirectorClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const { getMedia } = usePageMedia('leadership')
  const heroMedia = getMedia({
    sectionName: 'Circle Director',
    subModuleName: 'CIRCLE DIRECTOR HERO',
    subModuleId: 'sub-leadership-circle-director',
    fallbackUrl: '/videos/homepage-hero-bg.mp4',
    fallbackSourceType: 'localhost',
    fallbackTitle: 'Circle Director Leadership & Meeting Stewardship',
  })

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0F172A] selection:bg-[#0062D2] selection:text-white font-sans antialiased">
      {/* Global SVG Gradients for Icons and Card Borders */}
      <svg className="absolute size-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <defs>
          <linearGradient id="brandIconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#E11D48" />
          </linearGradient>
          <linearGradient id="cardGradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#E11D48" />
          </linearGradient>
        </defs>
      </svg>

      {/* =========================================================================
          SECTION 1: HERO — CIRCLE DIRECTOR (Master Dark Video Banner)
          ========================================================================= */}
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
              poster="/images/circle-director-hero.jpg"
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
            <span className="text-white font-semibold">Circle Director</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full min-h-[440px] lg:min-h-[480px]">
            {/* Left Hero Content */}
            <div className="lg:col-span-12 max-w-3xl space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur-sm uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
                <span className="bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent font-bold">
                  CIRCLE DIRECTOR
                </span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white">
                  Circle{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185]">
                    Director
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg font-medium text-slate-200 leading-snug">
                  Runs the Circle, month on month. You grow the Circle, and everyone in it.
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                A Circle does not become meaningful simply because entrepreneurs meet every month. Someone has to hold the rhythm. Someone has to notice when a Peer is becoming quieter. Someone has to encourage contribution, create continuity, support the leaders, and keep the Circle moving forward. That responsibility belongs to the Circle Director.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <GalaxyButton
                  href="/contact?intent=leadership"
                  size="default"
                  className="font-bold uppercase tracking-wider"
                >
                  Apply to Lead
                </GalaxyButton>

                <GalaxyButton
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="transparent"
                  size="default"
                  icon={<Smartphone className="size-4 text-sky-400" />}
                  className="font-bold uppercase tracking-wider"
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
                  className="group rounded-2xl bg-white border border-slate-200/90 p-4 sm:p-5 flex items-center gap-4 shadow-2xs hover:shadow-lg hover:border-blue-300/80 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="size-12 rounded-xl bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-2xs">
                    <Icon className="size-6 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48] bg-clip-text text-transparent leading-none">
                      {stat.value}
                    </div>
                    <div className="text-xs font-bold text-slate-800 group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-colors uppercase tracking-wider mt-1">
                      {stat.label}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: STAGE 03 — LEAD THE CIRCLE
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  STAGE 03 — LEAD THE CIRCLE
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-slate-900 leading-tight">
                The third stage in the PEERS GLOBAL Leadership Pathway
              </h2>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                You have already experienced contribution. You have already taken responsibility inside the Circle.
              </p>

              <div
                className="p-6 rounded-3xl text-white border border-white/10 shadow-xl relative overflow-hidden space-y-1.5"
                style={{
                  background: 'linear-gradient(135deg, rgb(6, 17, 44) 0%, rgb(19, 7, 31) 50%, rgb(38, 5, 19) 100%)',
                }}
              >
                <div className="absolute top-0 right-0 size-48 rounded-full bg-gradient-to-br from-blue-600/20 via-indigo-600/15 to-rose-600/20 blur-2xl pointer-events-none" />
                <p className="text-sm sm:text-base font-bold text-white leading-snug relative z-10">
                  Now you begin to lead the Circle itself. Not from above. From within.
                </p>
                <p className="text-xs sm:text-sm text-slate-300 font-light relative z-10">
                  The Circle Director does not become important because of a title. The role becomes meaningful because other entrepreneurs are able to grow because you took responsibility.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-[#FAFBFD] border border-slate-200/90 hover:border-blue-200 hover:shadow-md transition-all duration-300 flex items-start gap-3.5 group">
                  <div className="size-11 rounded-xl bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Users className="size-5.5 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#1D4ED8] transition-colors">Lead From Within</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal mt-1">
                      Earn trust among peers through genuine service and steady presence rather than top-down authority.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#FAFBFD] border border-slate-200/90 hover:border-blue-200 hover:shadow-md transition-all duration-300 flex items-start gap-3.5 group">
                  <div className="size-11 rounded-xl bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Sparkles className="size-5.5 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#1D4ED8] transition-colors">Catalyst For Growth</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal mt-1">
                      Every breakthrough in the Circle traces back to someone holding the standards and opening doors.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 aspect-[4/3] group">
                <Image
                  src="/images/leadership-entrepreneurs-meeting.jpg"
                  alt="Circle Director facilitating collaboration"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 text-right select-none pointer-events-none drop-shadow-md">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/70 border border-white/20 text-[10px] font-bold text-white tracking-widest uppercase backdrop-blur-md">
                    <span className="size-1.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                    STAGE 03
                  </span>
                  <p
                    className="text-lg sm:text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] font-bold leading-tight mt-1.5"
                    style={{ fontFamily: 'var(--font-script)' }}
                  >
                    Lead The Circle
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: YOU LEAD THE LEADERS WHO LEAD THE CIRCLE (Leadership Structure)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                LEADERSHIP STRUCTURE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight">
              You lead the leaders who lead the Circle
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
              A Circle has a leadership structure. The Circle Director works with and mentors <strong className="text-slate-900 font-semibold">3 Chairs</strong> and <strong className="text-slate-900 font-semibold">9 Leaders</strong>.
            </p>
          </div>

          {/* 3 Pillar Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
            {LEADERSHIP_STRUCTURE.map((card, idx) => {
              const Icon = card.icon
              return (
                <div
                  key={idx}
                  className="animated-glow-card group !rounded-3xl cursor-pointer shadow-sm hover:shadow-xl transition-all"
                  tabIndex={0}
                  role="article"
                >
                  <svg className="animated-border-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                      <linearGradient id={`dirStructGrad-${idx}`} x1="0%" y1="50%" x2="100%" y2="50%">
                        <stop offset="0%" stopColor="#1D4ED8" />
                        <stop offset="50%" stopColor="#6366F1" />
                        <stop offset="100%" stopColor="#E11D48" />
                      </linearGradient>
                    </defs>
                    <path
                      className="animated-border-path"
                      style={{ stroke: `url(#dirStructGrad-${idx})` }}
                      d="M 0.8 6 Q 0.8 0.8 6 0.8 L 94 0.8 Q 99.2 0.8 99.2 6 L 99.2 94 Q 99.2 99.2 94 99.2 L 6 99.2 Q 0.8 99.2 0.8 94 Z"
                    />
                  </svg>
                  <div className="flex flex-col justify-between p-7 sm:p-8 !rounded-[22px] bg-white border border-slate-200/90 shadow-2xs h-full group-hover:border-blue-400/30 transition-colors">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="size-12 rounded-2xl bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 flex items-center justify-center shadow-2xs group-hover:scale-110 transition-transform duration-300">
                          <Icon className="size-5.5 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
                        </div>
                        <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white shadow-2xs">
                          Tier 0{idx + 1}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:via-[#6366F1] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {card.title}
                        </h3>
                        <p className="text-xs font-semibold brand-gradient-text mt-1">
                          {card.subtitle}
                        </p>
                        <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mt-2.5">
                          {card.desc}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                      <span className="text-slate-400 font-mono">Pillar 0{idx + 1} of 03</span>
                      <span className="inline-flex items-center gap-1 brand-gradient-text font-bold group-hover:translate-x-1 transition-transform">
                        Structure &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Full-Width Celestial Legacy Quote Banner */}
          <div
            className="p-8 sm:p-10 rounded-3xl text-white border border-white/10 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
            style={{
              background: 'linear-gradient(135deg, rgb(6, 17, 44) 0%, rgb(19, 7, 31) 50%, rgb(38, 5, 19) 100%)',
            }}
          >
            <div className="absolute top-0 right-0 size-72 rounded-full bg-gradient-to-br from-blue-600/20 via-indigo-600/15 to-rose-600/20 blur-3xl pointer-events-none" />

            <div className="flex items-start gap-5 max-w-3xl relative z-10">
              <div className="size-12 rounded-2xl bg-white/10 border border-white/20 text-white flex items-center justify-center shrink-0 mt-1 shadow-2xs">
                <Quote className="size-6 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
              </div>
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-widest bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent block">
                  LEADERSHIP BECOMES MULTIPLICATION
                </span>
                <blockquote className="text-lg sm:text-xl font-medium text-white leading-relaxed">
                  “A good Director does not create dependence on the Director. A good Director helps other leaders become stronger.”
                </blockquote>
              </div>
            </div>

            <div className="shrink-0 text-right select-none relative z-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-widest uppercase text-white/90">
                PEERS GLOBAL LEADERSHIP
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: WHAT A CIRCLE DIRECTOR IS RESPONSIBLE FOR (7 Responsibilities)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                THE SEVEN RESPONSIBILITIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight">
              What a Circle Director is responsible for
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
              The role carries seven areas of responsibility, presented here using the approved PEERS GLOBAL role framework.
            </p>
          </div>

          {/* 6 Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {SEVEN_RESPONSIBILITIES.slice(0, 6).map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.number}
                  className="animated-glow-card group !rounded-3xl cursor-pointer shadow-sm hover:shadow-xl transition-all"
                  tabIndex={0}
                  role="article"
                >
                  <svg className="animated-border-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                      <linearGradient id={`dirRespGrad-${item.number}`} x1="0%" y1="50%" x2="100%" y2="50%">
                        <stop offset="0%" stopColor="#1D4ED8" />
                        <stop offset="50%" stopColor="#6366F1" />
                        <stop offset="100%" stopColor="#E11D48" />
                      </linearGradient>
                    </defs>
                    <path
                      className="animated-border-path"
                      style={{ stroke: `url(#dirRespGrad-${item.number})` }}
                      d="M 0.8 6 Q 0.8 0.8 6 0.8 L 94 0.8 Q 99.2 0.8 99.2 6 L 99.2 94 Q 99.2 99.2 94 99.2 L 6 99.2 Q 0.8 99.2 0.8 94 Z"
                    />
                  </svg>
                  <div className="flex flex-col justify-between p-7 sm:p-8 !rounded-[22px] bg-white border border-slate-200/90 shadow-2xs h-full group-hover:border-blue-400/30 transition-colors">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="size-12 rounded-2xl bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 transition-transform duration-300">
                          <Icon className="size-5.5 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
                        </div>
                        <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white shadow-2xs">
                          Responsibility {item.number}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:via-[#6366F1] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mt-2.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                      <span className="text-slate-400 font-mono">Area {item.number} of 07</span>
                      <span className="inline-flex items-center gap-1 brand-gradient-text font-bold group-hover:translate-x-1 transition-transform">
                        Standard &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* 7th Responsibility: Featured Wide Ecosystem Stewardship Banner */}
          {SEVEN_RESPONSIBILITIES[6] && (
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-50/70 via-white to-slate-50/70 border border-blue-200/80 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-start gap-5 max-w-3xl">
                <div className="size-14 rounded-2xl bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 flex items-center justify-center shrink-0 shadow-2xs mt-1">
                  <Globe2 className="size-7 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white">
                      Responsibility 07
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider brand-gradient-text">
                      WIDER ECOSYSTEM
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                    {SEVEN_RESPONSIBILITIES[6].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {SEVEN_RESPONSIBILITIES[6].desc}
                  </p>
                </div>
              </div>

              <div className="shrink-0 text-right self-stretch md:self-center flex md:flex-col items-center md:items-end justify-between border-t md:border-t-0 border-slate-200 pt-4 md:pt-0">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Network Standard
                </span>
                <span className="text-xs font-bold brand-gradient-text mt-0.5">
                  Global Connectivity &rarr;
                </span>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: WHAT THE ROLE CARRIES (Continuity Traits)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                CONTINUITY & STEWARDSHIP
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight">
              What the role carries
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
              The Circle Director carries something more important than authority: <strong className="font-semibold text-slate-900">Continuity</strong>.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ROLE_CARRIES_TRAITS.map((trait, idx) => {
              const Icon = trait.icon
              return (
                <div
                  key={idx}
                  className="animated-glow-card group !rounded-3xl cursor-pointer shadow-sm hover:shadow-xl transition-all"
                  tabIndex={0}
                  role="article"
                >
                  <svg className="animated-border-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                      <linearGradient id={`traitGrad-${idx}`} x1="0%" y1="50%" x2="100%" y2="50%">
                        <stop offset="0%" stopColor="#1D4ED8" />
                        <stop offset="50%" stopColor="#6366F1" />
                        <stop offset="100%" stopColor="#E11D48" />
                      </linearGradient>
                    </defs>
                    <path
                      className="animated-border-path"
                      style={{ stroke: `url(#traitGrad-${idx})` }}
                      d="M 0.8 6 Q 0.8 0.8 6 0.8 L 94 0.8 Q 99.2 0.8 99.2 6 L 99.2 94 Q 99.2 99.2 94 99.2 L 6 99.2 Q 0.8 99.2 0.8 94 Z"
                    />
                  </svg>
                  <div className="!rounded-3xl p-7 flex flex-col justify-between h-full bg-white border border-slate-200/90 shadow-2xs group-hover:border-blue-400/30 transition-colors">
                    <div className="space-y-4">
                      <div className="size-11 rounded-2xl bg-gradient-to-b from-[#f8f9fe] to-[#dde9fd] border border-blue-100/80 flex items-center justify-center shadow-2xs group-hover:scale-110 transition-transform duration-300">
                        <Icon className="size-5.5 stroke-[url(#brandIconGrad)] text-[#1D4ED8]" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:via-[#6366F1] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {trait.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mt-1.5">
                          {trait.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: WHO YOU BECOME & WHO THIS IS FOR (2-Column Grid)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Left: Who you become */}
            <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                    PERSPECTIVE & MATURITY
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                  Who you become
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  Leadership changes the way you see a community. As a Circle Director, you begin to see beyond your own business. You start noticing:
                </p>

                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  {WHO_YOU_BECOME_POINTS.map((pt, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-300/80 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-3 shadow-2xs group cursor-default">
                      <CheckCircle2 className="size-4.5 stroke-[url(#brandIconGrad)] text-[#1D4ED8] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <p className="text-xs sm:text-sm text-slate-800 font-medium leading-snug group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all">
                        {pt}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="p-6 rounded-3xl text-white border border-white/10 shadow-xl relative overflow-hidden space-y-1.5"
                style={{
                  background: 'linear-gradient(135deg, rgb(6, 17, 44) 0%, rgb(19, 7, 31) 50%, rgb(38, 5, 19) 100%)',
                }}
              >
                <div className="absolute top-0 right-0 size-48 rounded-full bg-gradient-to-br from-blue-600/20 via-indigo-600/15 to-rose-600/20 blur-2xl pointer-events-none" />
                <p className="text-xs sm:text-sm font-medium text-slate-200 relative z-10">
                  You begin to understand that leadership is not about having more people follow you. It is about helping more people move forward.
                </p>
              </div>
            </div>

            {/* Right: Who this is for */}
            <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-2xl hover:border-blue-300/80 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between space-y-6 group cursor-default">
              <div className="space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider brand-gradient-text">
                  CANDIDACY CRITERIA
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:via-[#6366F1] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  Who this is for
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  The Circle Director role is for an entrepreneur who is willing to take responsibility for something larger than their own business:
                </p>

                <div className="space-y-3">
                  {WHO_THIS_IS_FOR.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-blue-300/80 hover:bg-white hover:shadow-sm transition-all duration-300 group/item">
                      <CheckCircle2 className="size-4 stroke-[url(#brandIconGrad)] text-[#1D4ED8] shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                      <span className="text-xs sm:text-sm font-medium text-slate-800 group-hover/item:bg-gradient-to-r group-hover/item:from-[#1D4ED8] group-hover/item:to-[#E11D48] group-hover/item:bg-clip-text group-hover/item:text-transparent transition-all">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs font-semibold brand-gradient-text">
                ✦ You do not need to know everything. You need to be willing to take responsibility and help others grow.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: HOW TO BECOME & REAL WORK (2-Column Foundations)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Left: How to become a Circle Director */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-2xl hover:border-blue-300/80 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between space-y-6 group cursor-default">
              <div className="space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider brand-gradient-text">
                  THE PATHWAY
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:via-[#6366F1] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  How to become a Circle Director
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  Leadership at PEERS GLOBAL follows contribution. You do not need to chase a title.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1 hover:border-blue-300/80 hover:bg-white hover:shadow-sm transition-all duration-300">
                    <p className="font-bold text-slate-900 text-sm">1. Begin by contributing</p>
                    <p className="text-slate-600 font-light text-xs">
                      Take responsibility within your Circle. Become part of the Powerhouse. Serve your fellow Peers.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1 hover:border-blue-300/80 hover:bg-white hover:shadow-sm transition-all duration-300">
                    <p className="font-bold text-slate-900 text-sm">2. Build trust & consistency</p>
                    <p className="text-slate-600 font-light text-xs">
                      Demonstrate consistency over time. Show up for others before you ask anything for yourself.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1 hover:border-blue-300/80 hover:bg-white hover:shadow-sm transition-all duration-300">
                    <p className="font-bold text-slate-900 text-sm">3. Step forward when opportunity arises</p>
                    <p className="text-slate-600 font-light text-xs">
                      When the opportunity for Circle leadership arises, you can step forward with readiness.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs font-semibold brand-gradient-text">
                The better question is: “What responsibility am I ready to carry?”
              </div>
            </div>

            {/* Right: The Circle Director's Real Work */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-2xl hover:border-blue-300/80 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between space-y-6 group cursor-default">
              <div className="space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider brand-gradient-text">
                  BEHIND THE SCENES
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:via-[#6366F1] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  The Circle Director&apos;s real work
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  The visible part of leadership may be the meeting. The real work happens before and after it.
                </p>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
                  It happens in conversations. In preparation. In follow-up. In mentoring. In introductions. In difficult moments. In encouraging someone who has stopped participating. In recognising someone whose contribution deserves to be seen. And sometimes, simply in being available.
                </p>

                <div
                  className="p-5 rounded-2xl text-white border border-white/10 shadow-md relative overflow-hidden space-y-1"
                  style={{
                    background: 'linear-gradient(135deg, rgb(6, 17, 44) 0%, rgb(19, 7, 31) 50%, rgb(38, 5, 19) 100%)',
                  }}
                >
                  <div className="absolute top-0 right-0 size-32 rounded-full bg-blue-600/20 blur-xl pointer-events-none" />
                  <p className="text-xs sm:text-sm font-bold text-white relative z-10">
                    The meeting is an event. The relationship is the experience.
                  </p>
                  <p className="text-xs text-slate-300 font-light relative z-10">
                    The Director helps create the conditions in which that relationship can grow.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <GalaxyButton
                  href="/contact?intent=leadership"
                  size="default"
                  className="font-bold uppercase tracking-wider"
                >
                  Express Interest in Leadership
                </GalaxyButton>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: FREQUENTLY ASKED QUESTIONS (Accordion)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQ.map((item, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-2xs transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 text-base sm:text-lg font-bold text-slate-900 group transition-all duration-300 cursor-pointer"
                  >
                    <span className={isOpen ? 'brand-gradient-text' : 'group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:via-[#6366F1] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300'}>{item.q}</span>
                    <ChevronDown
                      className={`size-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#1D4ED8]' : 'group-hover:text-[#1D4ED8]'
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-light border-t border-slate-100">
                      {item.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 9: CLOSING MANIFESTO BANNER (Deep Midnight Slate)
          ========================================================================= */}
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 py-16 sm:py-20 lg:py-24 text-white border-t border-slate-800">
        {/* Deep celestial radial gradients & luminous brand aura */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(29,78,216,0.18),transparent_50%),radial-gradient(circle_at_80%_60%,rgba(99,102,241,0.15),transparent_50%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-blue-600/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-indigo-500/15 blur-3xl"
        />

        {/* Subtle geometric orbital line art */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-[min(58vw,760px)] opacity-30"
        >
          <svg
            viewBox="0 0 760 520"
            fill="none"
            className="h-full w-full"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M760 40C555 45 405 145 375 310C355 423 265 493 70 520"
              stroke="currentColor"
              strokeWidth="1"
              className="text-blue-300/30"
            />
            <path
              d="M760 120C590 125 470 205 445 335C424 442 335 500 180 520"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="5 8"
              className="text-sky-200/25"
            />
            <path
              d="M760 215C640 220 565 278 540 370C519 446 470 490 390 520"
              stroke="currentColor"
              strokeWidth="1"
              className="text-blue-200/20"
            />
            <circle cx="540" cy="370" r="4" fill="currentColor" className="text-sky-300/60" />
            <circle cx="540" cy="370" r="13" stroke="currentColor" strokeWidth="1" className="text-sky-300/25" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-8 flex flex-col items-start space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur-sm uppercase mb-1">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
                <span className="bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent font-bold">
                  LEAD WITH RESPONSIBILITY
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-bold leading-[1.18] tracking-tight text-white">
                Your Circle. Your Responsibility.
              </h2>

              <p className="text-base sm:text-lg font-light text-slate-200 max-w-2xl leading-relaxed">
                Every Circle needs entrepreneurs who are willing to do more than attend. It needs people who are willing to care. To contribute. To mentor. To coordinate. To recognise. To hold the community together.
              </p>

              <p className="text-base sm:text-lg bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent font-bold leading-relaxed max-w-2xl">
                The Circle Director is one of those people. You do not lead the Circle to become important. You lead because the Circle matters.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-3">
                <GalaxyButton
                  href="/contact?intent=leadership"
                  variant="primary"
                  size="default"
                  className="font-bold uppercase tracking-wider"
                >
                  Apply to Lead
                </GalaxyButton>

                <GalaxyButton
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noreferrer"
                  variant="transparent"
                  size="default"
                  icon={<Smartphone className="size-4 text-sky-400" />}
                  className="font-bold uppercase tracking-wider"
                >
                  Download Unity App
                </GalaxyButton>
              </div>
            </div>

            <div className="lg:col-span-4 text-right flex justify-end">
              <div
                className="text-white/95 text-3xl sm:text-5xl font-normal leading-tight select-none pointer-events-none drop-shadow-md"
                style={{ fontFamily: 'var(--font-script, Georgia, serif)' }}
              >
                Lead <br />
                With Purpose. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185]">
                  Your Circle.
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
