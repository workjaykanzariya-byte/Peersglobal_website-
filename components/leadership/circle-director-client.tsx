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
  MessageSquare,
  Search,
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
    fallbackUrl: '/videos/stories-hero-bg.mp4',
    fallbackSourceType: 'localhost',
    fallbackTitle: 'Circle Director Leadership & Meeting Stewardship',
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
            <span className="text-slate-800 font-semibold">Circle Director</span>
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
                  src={heroMedia.mediaUrl || '/videos/stories-hero-bg.mp4'}
                  poster="/images/circle-director-hero.jpg"
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
                  Hold The Rhythm
                </p>
                <p
                  className="text-3xl sm:text-4xl text-amber-300 font-bold leading-tight mt-0.5"
                  style={{ fontFamily: 'var(--font-script)' }}
                >
                  Lead From Within.
                </p>
                <p
                  className="text-xl sm:text-2xl text-white/90 leading-tight mt-1 font-medium"
                  style={{ fontFamily: 'var(--font-script)' }}
                >
                  Multiply Leaders.
                </p>
              </div>
            </div>

            {/* Left Content */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl flex flex-col items-start">
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3">
                  <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                  <span className="brand-gradient-text">CIRCLE DIRECTOR</span>
                  <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                </div>

                <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-950 leading-[1.08] mb-4">
                  Circle Director
                </h1>
                <p className="text-xl sm:text-2xl font-medium text-slate-900 leading-snug mb-3">
                  Runs the Circle, month on month.
                </p>
                <p className="text-xl sm:text-2xl font-medium text-slate-900 leading-snug mb-3">
                  You grow the Circle, and everyone in it.
                </p>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl font-light">
                  A Circle does not become meaningful simply because entrepreneurs meet every month. Someone has to hold the rhythm. Someone has to notice when a Peer is becoming quieter. Someone has to encourage contribution, create continuity, support the leaders, and keep the Circle moving forward. That responsibility belongs to the Circle Director.
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

      {/* ─── 2. STAGE 03 — LEAD THE CIRCLE ──────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3">
                <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                <span className="brand-gradient-text">STAGE 03 — LEAD THE CIRCLE</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight leading-tight mb-5">
                The third stage in the PEERS GLOBAL Leadership Pathway
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4 font-light">
                You have already experienced contribution. You have already taken responsibility inside the Circle.
              </p>

              <div className="p-6 rounded-2xl bg-[#FAFBFD] border-l-4 border-[#0062D2] border-y border-r border-slate-200/80 mb-6">
                <p className="text-lg font-serif font-bold text-slate-950 mb-1">
                  Now you begin to lead the Circle itself. Not from above. From within.
                </p>
                <p className="text-sm text-slate-600 font-light mt-2">
                  The Circle Director does not become important because of a title. The role becomes meaningful because other entrepreneurs are able to grow because you took responsibility.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 w-full">
                <div className="p-5 rounded-2xl bg-[#F4F8FE] border border-blue-100 flex items-start gap-3.5">
                  <div className="size-10 rounded-xl bg-blue-100 text-[#0062D2] flex items-center justify-center shrink-0 mt-0.5">
                    <Users className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-slate-900">Lead From Within</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-light mt-0.5">
                      Earn trust among peers through genuine service and steady presence rather than top-down authority.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                  <div className="size-10 rounded-xl bg-slate-200 text-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-slate-900">Catalyst For Growth</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-light mt-0.5">
                      Every breakthrough in the Circle traces back to someone holding the standards and opening doors.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200/60 aspect-[4/3]">
                <Image
                  src="/images/leadership-entrepreneurs-meeting.jpg"
                  alt="Circle Director facilitating collaboration"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 text-right select-none pointer-events-none drop-shadow-md">
                  <p className="text-xs text-white/90 font-medium tracking-wider uppercase">
                    Stage 03
                  </p>
                  <p
                    className="text-lg text-amber-300 font-bold leading-tight"
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

      {/* ─── 3. YOU LEAD THE LEADERS WHO LEAD THE CIRCLE ─────────────────── */}
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
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-cyan-400 mb-3.5">
              <span className="w-5 h-px bg-cyan-400" />
              LEADERSHIP STRUCTURE
              <span className="w-5 h-px bg-cyan-400" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
              You lead the leaders who lead the Circle
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              A Circle has a leadership structure. The Circle Director works with and mentors <span className="text-white font-semibold">3 Chairs</span> and <span className="text-white font-semibold">9 Leaders</span>.
            </p>
            <p className="text-sm sm:text-base text-slate-400 font-light mt-3">
              Your responsibility is not to do everything yourself. It is to help the people responsible for different parts of the Circle succeed in their responsibilities. That means listening, mentoring, coordinating, following through, creating clarity, and, when necessary, stepping forward.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Left 3 Cards */}
            <div className="lg:col-span-8 grid md:grid-cols-3 gap-6">
              {LEADERSHIP_STRUCTURE.map((card, idx) => {
                const Icon = card.icon
                return (
                  <div
                    key={idx}
                    className="p-6 sm:p-7 rounded-3xl border border-slate-700/60 bg-gradient-to-br from-[#0B1528] via-[#0F1D38] to-[#070D18] shadow-[0_20px_50px_rgba(11,21,40,0.35)] hover:border-cyan-500/50 hover:shadow-[0_25px_60px_rgba(56,189,248,0.12)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                  >
                    <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.06] via-transparent to-black/30" />

                    <div className="relative z-10">
                      <div className="size-12 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-cyan-500/25 transition-all shadow-inner">
                        <Icon className="size-6" />
                      </div>
                      <h3 className="font-serif text-xl font-bold text-white mb-1">
                        {card.title}
                      </h3>
                      <p className="text-xs text-cyan-300 font-semibold mb-3">
                        {card.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Right Highlight Card */}
            <div className="lg:col-span-4">
              <div className="h-full p-8 rounded-3xl bg-gradient-to-br from-[#0e2246] via-[#0d1c38] to-[#091428] border border-cyan-500/30 shadow-[0_20px_50px_rgba(11,21,40,0.4)] flex flex-col justify-between relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/[0.08] via-transparent to-transparent" />
                <div className="relative z-10">
                  <div className="size-12 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 flex items-center justify-center mb-5">
                    <Quote className="size-6" />
                  </div>
                  <h3 className="font-serif text-xs font-bold tracking-widest uppercase text-cyan-400 mb-2">
                    LEADERSHIP BECOMES MULTIPLICATION
                  </h3>
                  <blockquote className="font-serif text-xl sm:text-2xl font-bold text-white leading-snug tracking-tight mb-4">
                    “A good Director does not create dependence on the Director. A good Director helps other leaders become stronger.”
                  </blockquote>
                </div>
                <div className="relative z-10 text-xs font-bold tracking-widest text-cyan-400 uppercase pt-4 border-t border-slate-700/60">
                  PEERS GLOBAL LEADERSHIP
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. WHAT A CIRCLE DIRECTOR IS RESPONSIBLE FOR ────────────────── */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3">
              <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
              <span className="brand-gradient-text">THE SEVEN RESPONSIBILITIES</span>
              <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight">
              What a Circle Director is responsible for
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3 font-light">
              The role carries seven areas of responsibility, presented here using the approved PEERS GLOBAL role framework.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SEVEN_RESPONSIBILITIES.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.number}
                  className="p-6 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#0062D2]/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-serif font-extrabold text-[#0062D2]">
                        {item.number}
                      </span>
                      <div className="size-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center group-hover:scale-110 transition-transform">
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

          <div className="mt-8 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center max-w-2xl mx-auto">
            <p className="text-xs text-slate-500 font-medium">
              Implementation note: The seven approved responsibilities define the official PEERS GLOBAL leadership role standard without editorial reinterpretation.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 5. WHAT THE ROLE CARRIES ───────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3">
              <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
              <span className="brand-gradient-text">CONTINUITY & STEWARDSHIP</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight leading-tight mb-4">
              What the role carries
            </h2>
            <p className="text-base sm:text-lg text-slate-700 font-light leading-relaxed">
              The Circle Director carries something more important than authority: <strong className="font-semibold text-slate-900">Continuity</strong>.
            </p>
            <p className="text-sm sm:text-base text-slate-600 font-light mt-3 leading-relaxed">
              The Circle meets month after month. People change. Businesses change. Priorities change. New entrepreneurs arrive. Existing relationships deepen. Collaborations emerge. Challenges appear. The Director helps the Circle remain a place where entrepreneurs can continue to learn, share, build relationships and contribute.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ROLE_CARRIES_TRAITS.map((trait, idx) => {
              const Icon = trait.icon
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="size-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center mb-4">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="font-serif text-base font-bold text-slate-950 mb-1.5">
                      {trait.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                      {trait.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── 6. WHO YOU BECOME & WHO THIS IS FOR ────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left: Who you become */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-1">
                <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                <span className="brand-gradient-text">PERSPECTIVE & MATURITY</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
                Who you become
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-light">
                Leadership changes the way you see a community. As a Circle Director, you begin to see beyond your own business. You start noticing:
              </p>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {WHO_YOU_BECOME_POINTS.map((pt, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200 flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-[#0062D2] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-800 font-medium leading-snug">
                      {pt}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-100">
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-serif font-bold">
                  You begin to understand that leadership is not about having more people follow you. It is about helping more people move forward.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 font-light mt-1.5">
                  You become a custodian of the Circle experience. And that is a different kind of leadership.
                </p>
              </div>
            </div>

            {/* Right: Who this is for */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-7 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0062D2] mb-1">
                  CANDIDACY CRITERIA
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-950 mb-3">
                  Who this is for
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-5">
                  The Circle Director role is for an entrepreneur who is willing to take responsibility for something larger than their own business. You may be ready for this role if:
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
                    You do not need to know everything. You need to be willing to take responsibility, learn, and help others grow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. HOW TO BECOME & REAL WORK (2-COLUMN) ────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-stretch">
            {/* Left: How to become a Circle Director */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#0062D2] mb-2">
                  <span>PATHWAY</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950 mb-4">
                  How to become a Circle Director
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light mb-6">
                  Leadership at PEERS GLOBAL follows contribution. You do not need to chase a title.
                </p>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <p className="font-semibold text-slate-900 mb-1">1. Begin by contributing</p>
                    <p className="text-slate-600 font-light text-xs">
                      Take responsibility within your Circle. Become part of the Powerhouse. Serve your fellow Peers.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <p className="font-semibold text-slate-900 mb-1">2. Build trust & consistency</p>
                    <p className="text-slate-600 font-light text-xs">
                      Demonstrate consistency over time. Show up for others before you ask anything for yourself.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <p className="font-semibold text-slate-900 mb-1">3. Step forward when opportunity arises</p>
                    <p className="text-slate-600 font-light text-xs">
                      When the opportunity for Circle leadership arises, you can step forward with readiness.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <p className="text-xs text-slate-500 italic">
                  The question is not: “What position can I get?”<br />
                  The better question is: <strong className="text-slate-800 font-semibold not-italic">“What responsibility am I ready to carry?”</strong>
                </p>
              </div>
            </div>

            {/* Right: The Circle Director's Real Work */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#0062D2] mb-2">
                  <span>BEHIND THE SCENES</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950 mb-4">
                  The Circle Director&apos;s real work
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light mb-5">
                  The visible part of leadership may be the meeting. The real work happens before and after it.
                </p>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                  It happens in conversations. In preparation. In follow-up. In mentoring. In introductions. In difficult moments. In encouraging someone who has stopped participating. In recognising someone whose contribution deserves to be seen. And sometimes, simply in being available.
                </p>

                <div className="p-5 rounded-2xl bg-[#F4F8FE] border border-blue-100">
                  <p className="text-sm font-serif font-bold text-slate-950 mb-1">
                    The meeting is an event. The relationship is the experience.
                  </p>
                  <p className="text-xs text-slate-600 font-light mt-1">
                    The Director helps create the conditions in which that relationship can grow.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <Link
                  href="/contact?intent=leadership"
                  className="rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white px-6 py-2.5 text-xs font-semibold shadow-md shadow-blue-600/20 transition-all inline-flex items-center gap-2"
                >
                  <span>Express Interest in Leadership</span>
                  <ArrowRight className="size-3.5" />
                </Link>
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

      {/* ─── 9. LEAD WITH RESPONSIBILITY (CLOSING HERO BANNER) ───────────── */}
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
                LEAD WITH RESPONSIBILITY
                <span className="w-5 h-px bg-sky-200" />
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-4">
                Your Circle. Your Responsibility.
              </h2>

              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-light mb-4 max-w-2xl">
                Every Circle needs entrepreneurs who are willing to do more than attend. It needs people who are willing to care. To contribute. To mentor. To coordinate. To recognise. To hold the community together.
              </p>

              <p className="text-base sm:text-lg text-amber-300 font-medium leading-relaxed mb-8 max-w-2xl">
                The Circle Director is one of those people. You do not lead the Circle to become important. You lead because the Circle matters.
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
                Lead
              </p>
              <p
                className="text-2xl sm:text-3xl text-white/80 leading-tight font-medium mt-1"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                With Purpose.
              </p>
              <p
                className="text-2xl sm:text-3xl text-white leading-tight font-medium mt-1"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Your Circle
              </p>
              <p
                className="text-3xl sm:text-4xl text-amber-300 font-bold leading-tight mt-1"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Your Responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
