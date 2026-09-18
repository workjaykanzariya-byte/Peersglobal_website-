'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePageMedia } from '@/lib/hooks/use-page-media'
import {
  ArrowRight,
  ChevronRight,
  Users,
  Building2,
  Globe2,
  Target,
  Sparkles,
  Trophy,
  TrendingUp,
  Heart,
  ShieldCheck,
  Star,
  Calendar,
  GraduationCap,
  Handshake,
  Megaphone,
  Compass,
  Quote,
  CheckCircle2,
  Settings,
  UserCheck,
} from 'lucide-react'

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

// ─── Benefits Stack (Section 2) ──────────────────────────────────────────
const PATHWAY_BENEFITS = [
  {
    icon: Trophy,
    color: '#0062D2',
    bg: '#EFF6FF',
    title: 'Build new skills',
    desc: 'Real leadership development',
  },
  {
    icon: Users,
    color: '#0284C7',
    bg: '#F0F9FF',
    title: 'Create real impact',
    desc: 'Make your Circle stronger',
  },
  {
    icon: TrendingUp,
    color: '#2563EB',
    bg: '#EFF6FF',
    title: 'Open future opportunities',
    desc: 'A clear leadership pathway',
  },
]

// ─── The Three Committees ────────────────────────────────────────────────
const COMMITTEES = [
  {
    name: 'Business Growth Committee',
    subtitle: 'Responsible for what the Circle produces.',
    theme: {
      border: 'border-emerald-200/90',
      bg: 'bg-emerald-50/50',
      iconBg: 'bg-emerald-100/70',
      iconColor: 'text-emerald-700',
    },
    headerIcon: Target,
    roles: [
      {
        icon: Users,
        title: 'Chair, Business Growth Committee',
        desc: 'Leads the committee and is accountable for the collaboration the Circle generates.',
      },
      {
        icon: TrendingUp,
        title: 'Business Growth Leader',
        desc: 'Drives referrals, introductions and business flow. Makes sure the Collaboration Roundtables produce named outcomes rather than conversation.',
      },
      {
        icon: Megaphone,
        title: 'Recognition & PR Leader',
        desc: 'Ensures contribution is recognised in the room, in the community and in the media. Works with VyapaarJagat and the Peers Global media ecosystem.',
      },
      {
        icon: Globe2,
        title: 'Cross-Border Collaborations Leader (Unity)',
        desc: 'Connects the Circle beyond its own city, opening collaboration across regions and countries through the Unity App.',
      },
    ],
  },
  {
    name: 'Membership Experience Committee',
    subtitle: 'Responsible for who is in the room, and how they experience it.',
    theme: {
      border: 'border-blue-200/90',
      bg: 'bg-blue-50/50',
      iconBg: 'bg-blue-100/70',
      iconColor: 'text-blue-700',
    },
    headerIcon: Users,
    roles: [
      {
        icon: Users,
        title: 'Chair, Membership Experience Committee',
        desc: 'Leads the committee and reviews every request to join the Circle.',
      },
      {
        icon: Heart,
        title: 'Member Success Leader',
        desc: 'Looks after every Peer’s experience. The new member finding their footing, the established one whose contribution has quietened, the entrepreneur going through a difficult year.',
      },
      {
        icon: ShieldCheck,
        title: 'Peers Board of Advisory Leader',
        desc: 'Connects Peers to the senior advisors and mentors available across the community.',
      },
      {
        icon: Star,
        title: 'Peers Brand Showcase Leader',
        desc: 'Runs the Brand Showcase. The rotation, the preparation, and making sure each Peer’s four minutes produce actions rather than impressions.',
      },
    ],
  },
  {
    name: 'Events & Impact Committee',
    subtitle: 'Responsible for what the Circle does beyond the meeting.',
    theme: {
      border: 'border-purple-200/90',
      bg: 'bg-purple-50/50',
      iconBg: 'bg-purple-100/70',
      iconColor: 'text-purple-700',
    },
    headerIcon: Calendar,
    roles: [
      {
        icon: Users,
        title: 'Chair, Events & Impact Committee',
        desc: 'Leads the committee and is accountable for the Circle’s events and its impact.',
      },
      {
        icon: Calendar,
        title: 'Events & Experience Leader',
        desc: 'Runs the meetings and events. Venue, format, flow, and the experience of everyone in the room.',
      },
      {
        icon: GraduationCap,
        title: 'Skill Development Leader',
        desc: 'Programmes the Impact Mentor Masterclasses. Chooses the subject the room needs and finds the person who has genuinely done it.',
      },
      {
        icon: Handshake,
        title: 'Partnership & Visitor Leader',
        desc: 'Manages guests, visitors and partnerships. The first person a visiting entrepreneur meets.',
      },
    ],
  },
]

// ─── What Serving Develops ───────────────────────────────────────────────
const SERVING_DEVELOPS = [
  'The habit of following through — small enough to do properly, visible enough to notice',
  'Working with people you cannot instruct — the rarest leadership skill there is',
  'Knowing the room — a Powerhouse member knows every Peer, and every Peer knows them',
  'Clarity about what you want next — discovering whether directorship is what you seek',
]

// ─── How to Join the Powerhouse ──────────────────────────────────────────
const HOW_TO_JOIN = [
  { step: '1', title: 'Be a Peer in the Circle', desc: 'Take your seat and participate consistently.' },
  { step: '2', title: 'Contribute', desc: 'Your record in the room is what makes you a candidate.' },
  { step: '3', title: 'Tell your Circle Director', desc: 'Share which committee role speaks to your strengths.' },
  { step: '4', title: 'Have the Conversation', desc: 'An honest discussion about the commitment and time.' },
  { step: '5', title: 'Take the Role', desc: 'Step in and lead for twelve months.' },
]

export function PowerhouseClient() {
  const { getMedia } = usePageMedia('leadership')
  const heroMedia = getMedia({
    sectionName: 'Powerhouse',
    subModuleName: 'POWERHOUSE HERO',
    subModuleId: 'sub-leadership-powerhouse',
    fallbackUrl: '/videos/leadership-hero-bg.mp4',
    fallbackSourceType: 'localhost',
    fallbackTitle: 'The Powerhouse Leadership Team Meeting',
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
            <span className="text-slate-800 font-semibold">Powerhouse</span>
          </nav>

          {/* Hero Banner Box (Unified rounded card matching Leadership layout) */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[36px] bg-white border border-slate-200/80 shadow-sm min-h-[520px] lg:min-h-[580px] flex items-center">

            {/* Fade Video Visual (Right 60%) */}
            <div
              className="absolute top-0 right-0 bottom-0 w-full sm:w-[65%] lg:w-[58%] overflow-hidden pointer-events-none"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 10%, rgba(0,0,0,0.6) 28%, black 55%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 10%, rgba(0,0,0,0.6) 28%, black 55%)',
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
                  src={heroMedia.mediaUrl || '/videos/leadership-hero-bg.mp4'}
                  poster="/images/leadership-entrepreneurs-meeting.jpg"
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
                  Leaders Build People.
                </p>
                <p
                  className="text-2xl sm:text-3xl text-white/95 leading-tight mt-0.5 font-medium"
                  style={{ fontFamily: 'var(--font-script)' }}
                >
                  People Build
                </p>
                <p
                  className="text-3xl sm:text-4xl text-amber-300 font-bold leading-tight mt-0.5"
                  style={{ fontFamily: 'var(--font-script)' }}
                >
                  A Brighter Tomorrow.
                </p>
              </div>
            </div>

            {/* Left Content (Z-10) */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl flex flex-col items-start">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#0062D2] mb-3">
                  <span className="w-5 h-px bg-[#0062D2]" />
                  LEADERSHIP
                  <span className="w-5 h-px bg-[#0062D2]" />
                </div>

                {/* Main Heading */}
                <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-950 leading-[1.08] mb-4">
                  The Powerhouse
                </h1>

                {/* Subline */}
                <p className="text-xl sm:text-2xl font-medium text-slate-900 leading-snug mb-3">
                  The leadership team of a Circle.
                </p>

                {/* Supporting line */}
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl font-light">
                  Fourteen entrepreneurs hold every Circle together. This is where leadership at Peers Global begins.
                </p>

                {/* Dual CTAs */}
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="https://unity.peersglobal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-8 py-3.5 text-sm font-semibold shadow-md shadow-blue-600/20 transition-all hover:scale-105 inline-flex items-center gap-2"
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

      {/* ─── 2. STAGE 02 OF THE PATHWAY ─────────────────────────────────── */}
      <section className="pt-6 sm:pt-8 pb-10 sm:pb-12 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Narrative */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#0062D2] mb-3">
                <span className="w-5 h-px bg-[#0062D2]" />
                STAGE 02 OF THE PATHWAY
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight leading-tight mb-5">
                Every leader in this community started here.
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4 font-light">
                The Powerhouse is the leadership team of a Circle — the entrepreneurs who took a role, held a responsibility, and made the room work.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-light">
                Almost every Circle Director served on a committee first. So did most Circle Founders, Industry Directors and Executive Directors. It is the most reachable leadership role here, and it is where you find out whether leading is something you actually want.
              </p>
            </div>

            {/* Middle: Quote Card */}
            <div className="lg:col-span-3">
              <div className="rounded-3xl border border-slate-200/90 bg-[#F9FBFE] p-7 shadow-sm text-center flex flex-col items-center justify-center h-full">
                <div className="size-12 rounded-full bg-blue-100/80 text-[#0062D2] flex items-center justify-center mb-4">
                  <Quote className="size-6" />
                </div>
                <blockquote className="font-serif text-2xl font-bold text-slate-950 leading-snug tracking-tight mb-4">
                  “Leadership is service, not status.”
                </blockquote>
                <div className="text-xs font-bold tracking-widest text-[#0062D2] uppercase">
                  PEERS GLOBAL
                </div>
              </div>
            </div>

            {/* Right: 3 Benefit Cards Stack */}
            <div className="lg:col-span-3 space-y-4">
              {PATHWAY_BENEFITS.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200/80 hover:border-blue-300 transition-colors flex items-center gap-4"
                  >
                    <div
                      className="size-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm"
                      style={{ backgroundColor: item.bg, color: item.color }}
                    >
                      <Icon className="size-6" />
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-bold text-slate-950 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. THE THREE COMMITTEES ────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#0062D2] mb-3">
              <span className="w-5 h-px bg-[#0062D2]" />
              THE THREE COMMITTEES
              <span className="w-5 h-px bg-[#0062D2]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight">
              Fourteen roles in every Circle.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3 font-light">
              Each committee is led by a Chair with three Leaders beneath them.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {COMMITTEES.map((com, idx) => {
              const HeaderIcon = com.headerIcon
              return (
                <div
                  key={idx}
                  className="rounded-3xl bg-white border border-slate-200/90 p-7 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-4 pb-4 border-b border-slate-100">
                      <div
                        className={`size-12 rounded-2xl flex items-center justify-center shrink-0 ${com.theme.iconBg} ${com.theme.iconColor}`}
                      >
                        <HeaderIcon className="size-6" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-bold text-slate-950 leading-tight">
                          {com.name}
                        </h3>
                        <p className="text-xs text-slate-500 mt-1 font-medium">
                          {com.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Roles List */}
                    <div className="space-y-4">
                      {com.roles.map((r, rIdx) => {
                        const RoleIcon = r.icon
                        return (
                          <div key={rIdx} className="flex items-start gap-3">
                            <div className="size-8 rounded-lg bg-slate-100/90 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                              <RoleIcon className="size-4" />
                            </div>
                            <div>
                              <h4 className="font-serif text-sm font-bold text-slate-950 leading-snug">
                                {r.title}
                              </h4>
                              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                                {r.desc}
                              </p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── 4. PROJECT CHAIRS & WHO YOU BECOME ──────────────────────────── */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Left: Project Chairs */}
            <div className="p-8 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-12 rounded-2xl bg-amber-100/80 text-amber-600 flex items-center justify-center shrink-0">
                    <Settings className="size-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-slate-950">
                      Project Chairs
                    </h3>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Nine Specialized Initiatives
                    </div>
                  </div>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  Beyond the standing committees, a Circle Director may appoint Project Chairs for specific initiatives — a major event, a community programme, a partnership, a special project. Nine Project Chair roles are available.
                </p>
                <p className="text-sm text-slate-700 leading-relaxed font-light">
                  A Circle that only runs its twelve meetings is a Circle that is not growing. Project Chairs are how a room takes on something ambitious, and how more Peers get a first taste of leading.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200/80 text-xs text-slate-500 font-medium">
                Appointed by the Circle Director for milestone deliverables.
              </div>
            </div>

            {/* Right: Who you become */}
            <div className="p-8 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-12 rounded-2xl bg-blue-100/80 text-[#0062D2] flex items-center justify-center shrink-0">
                    <UserCheck className="size-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-slate-950">
                      Who you become
                    </h3>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Leadership Inside the Room
                    </div>
                  </div>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  You will hold a responsibility among people who outrank you commercially. Nobody on your committee reports to you. If you want the work done, you earn it.
                </p>

                <div className="space-y-2.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                    What serving develops:
                  </div>
                  {SERVING_DEVELOPS.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200/80 text-xs text-slate-500 font-medium">
                The single most transferable executive capability in business.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. WHY SERVE ──────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-sm">
            <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="size-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <TrendingUp className="size-6" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950">
                    Why serve
                  </h3>
                </div>

                <div className="grid sm:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-serif text-base font-bold text-slate-950 mb-1.5">
                      Your standing rises.
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Service is the highest-recognised form of contribution in this community.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-slate-950 mb-1.5">
                      You know everyone.
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      The Peers running a Circle know every person in it and build deep social capital.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-slate-950 mb-1.5">
                      It is where the pathway begins.
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Almost every Circle Director, Founder and Industry Director started here.
                    </p>
                  </div>
                </div>
              </div>

              {/* Script Callout */}
              <div className="lg:pl-8 lg:border-l border-slate-200 text-center lg:text-right select-none pointer-events-none drop-shadow-sm shrink-0">
                <p
                  className="text-2xl sm:text-3xl text-slate-900 font-medium leading-tight"
                  style={{ fontFamily: 'var(--font-script)' }}
                >
                  Lead Today.
                </p>
                <p
                  className="text-3xl sm:text-4xl text-blue-600 font-bold leading-tight mt-1"
                  style={{ fontFamily: 'var(--font-script)' }}
                >
                  Build Tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. HOW TO JOIN THE POWERHOUSE (5 STEPS) ────────────────────── */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#0062D2] mb-3">
              <span className="w-5 h-px bg-[#0062D2]" />
              THE PROCESS
              <span className="w-5 h-px bg-[#0062D2]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight">
              How to join the Powerhouse
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2 font-light">
              Most Powerhouse members were approached rather than volunteering. Contribution is visible here, and people notice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {HOW_TO_JOIN.map((item) => (
              <div
                key={item.step}
                className="p-5 rounded-2xl bg-[#FAFBFD] border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="size-8 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center mb-3">
                    {item.step}
                  </div>
                  <h4 className="font-serif text-base font-bold text-slate-950 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact?intent=leadership"
              className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-8 py-3.5 text-sm font-semibold shadow-md shadow-blue-600/20 transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              <span>Apply to Lead</span>
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/leadership"
              className="rounded-full border border-slate-300 hover:border-[#0062D2] bg-white hover:bg-slate-50 text-slate-800 hover:text-[#0062D2] px-8 py-3.5 text-sm font-semibold transition-all inline-flex items-center gap-2 shadow-sm"
            >
              <span>Explore the Leadership Pathway</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 7. CLOSING DARK MOUNTAIN BANNER ───────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0A1120] text-white py-20 lg:py-28">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/membership-mountain-closing.jpg"
            alt="Entrepreneur standing atop mountain ridge at dawn"
            fill
            className="object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1120]/95 via-[#0A1120]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-400 mb-3">
                <span className="w-5 h-px bg-blue-400" />
                YOUR LEADERSHIP JOURNEY
                <span className="w-5 h-px bg-blue-400" />
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-4">
                Step Forward. Make a Bigger Impact.
              </h2>

              <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-light mb-8 max-w-2xl">
                Download the Unity App or apply to lead and take the next step.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-8 py-3.5 text-sm font-semibold shadow-lg shadow-blue-600/30 transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                  <span>Download Unity App</span>
                  <ArrowRight className="size-4" />
                </a>
                <Link
                  href="/contact?intent=leadership"
                  className="rounded-full border border-white/30 hover:border-white bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 text-sm font-semibold backdrop-blur-md transition-all inline-flex items-center gap-2"
                >
                  <span>Apply to Lead</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* Right Cursive Script */}
            <div className="lg:col-span-4 text-left lg:text-right select-none pointer-events-none drop-shadow-lg">
              <p
                className="text-2xl sm:text-3xl text-white/95 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Entrepreneurs
              </p>
              <p
                className="text-2xl sm:text-3xl text-white/95 leading-tight font-medium mt-1"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Creating a Better
              </p>
              <p
                className="text-3xl sm:text-4xl text-amber-300 font-bold leading-tight mt-1"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
