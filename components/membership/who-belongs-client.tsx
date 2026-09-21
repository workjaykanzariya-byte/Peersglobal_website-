'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  Smartphone,
  Users,
  Building2,
  Globe2,
  Target,
  ShieldCheck,
  Heart,
  TrendingUp,
  MessageSquare,
  Sparkles,
  Star,
  CheckCircle2,
  XCircle,
  Plus,
  Minus,
  Quote,
  ChevronLeft,
  UserCheck,
  Award,
  Clock,
  HelpCircle,
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

// ─── Six Qualities We Look For ────────────────────────────────────────────
const SIX_QUALITIES = [
  {
    icon: Heart,
    color: '#EF4444',
    bg: '#FEF2F2',
    border: '#FECACA',
    title: 'You already give without being asked',
    subtext: 'If giving is already how you operate, this community will feel like home immediately.',
    detail:
      'Look at the last year. How many introductions did you make for someone who could not do anything for you in return? How many times did you share something that took you years to learn? If giving is already your default reflex, you belong here.',
  },
  {
    icon: Users,
    color: '#2563EB',
    bg: '#EFF6FF',
    border: '#BFDBFE',
    title: 'You can be corrected by an equal',
    subtext: 'The Peers who grow fastest here are the ones who hear that properly.',
    detail:
      'Someone in your Circle will eventually tell you that you are wrong about something in your own business. The Peers who grow fastest here are the ones who hear that properly. Those who defend first learn slowest.',
  },
  {
    icon: MessageSquare,
    color: '#10B981',
    bg: '#ECFDF5',
    border: '#A7F3D0',
    title: 'You are willing to be honest about the hard parts',
    subtext: 'A Circle only produces value when people speak truthfully.',
    detail:
      'The difficult quarter. The partner who has become a problem. The decision you are not sure about. A Circle only produces value when people speak truthfully, and that begins with your willingness to go first.',
  },
  {
    icon: TrendingUp,
    color: '#8B5CF6',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    title: 'You think in decades, not quarters',
    subtext: 'The relationships here compound over time.',
    detail:
      'The relationships here compound. A Peer you help this year may open a market for you in the fourth. If you are looking for something that pays back in ninety days, this will frustrate you.',
  },
  {
    icon: ShieldCheck,
    color: '#0D9488',
    bg: '#F0FDFA',
    border: '#99F6E4',
    title: 'You take responsibility for outcomes',
    subtext: 'Entrepreneurs here change their situation, rather than explain it.',
    detail:
      'Not for luck, not for markets, but for what you do about them. Entrepreneurs who explain their situation through circumstances rarely fit here, because the room is full of people who changed theirs.',
  },
  {
    icon: Star,
    color: '#F59E0B',
    bg: '#FFFBEB',
    border: '#FDE68A',
    title: 'You want to build something beyond your own business',
    subtext: 'This is where you find the room to do it.',
    detail:
      'Most Peers arrive for their business. The ones who stay for decades discover they wanted to build something larger, and this is where they found the room and trusted companions to do it.',
  },
]

// ─── The Honest Test Questions ────────────────────────────────────────────
const HONEST_TEST_QUESTIONS = [
  {
    q: 'Do I give without expecting anything in return?',
    a: 'When you share an introduction, vendor contact or strategic lesson, is it free of transactional calculation? In Peers Global, the currency is contribution, not barter.',
  },
  {
    q: 'Can I handle honest feedback from an equal?',
    a: 'If a fellow founder questions your unit economics or marketing assumptions, do you listen with curiosity or jump into defence? Growth here requires open ears.',
  },
  {
    q: 'Am I willing to be open about my challenges?',
    a: 'We celebrate wins, but the real magic of a Circle happens during the struggle. If you only share polished highlights, the room cannot help you solve real bottlenecks.',
  },
  {
    q: 'Do I think in years and decades, not just quarters?',
    a: 'Trust takes time to ferment. Peers become lifelong board advisors and family friends. If you need immediate ROI within 60 days, networking mixers might suit you better.',
  },
  {
    q: 'Do I take responsibility for what I can change?',
    a: 'No victim mentalities. The leaders in our Circles look inward first when obstacles emerge and look to the room for strategic collaboration rather than excuses.',
  },
  {
    q: 'Do I want to build something larger than my own business?',
    a: 'Whether creating city-level economic impact, mentoring next-generation founders or backing peers on global stages, we build ecosystems that outlast us.',
  },
]

// ─── Testimonials ─────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    quote:
      'I joined Peers Global because I wanted honest conversations with people who have built something. What I found was a community that genuinely cares about each other’s growth.',
    name: 'Kunal Shah',
    role: 'Founder & CEO',
    circle: 'Mumbai Circle',
    avatar: '/images/peers-avatars/rajesh-shah.jpg',
  },
  {
    quote:
      'The rule that there is no selling inside the Circle changed everything for me. It created an environment where I could let my guard down and get real business advice.',
    name: 'Neha Kothari',
    role: 'Managing Director',
    circle: 'Ahmedabad Circle',
    avatar: '/images/peers-avatars/neha-kothari.jpg',
  },
  {
    quote:
      'In other groups people trade business cards and disappear. Here, one conversation prevented a multi-crore vendor error in our second quarter.',
    name: 'Vikram Patel',
    role: 'Co-Founder',
    circle: 'Bengaluru Tech Circle',
    avatar: '/images/peers-avatars/vikram-patel.jpg',
  },
]

export function WhoBelongsClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [testimonialIdx, setTestimonialIdx] = useState(0)

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index))
  }

  const handlePrevTestimonial = () => {
    setTestimonialIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))
  }

  const handleNextTestimonial = () => {
    setTestimonialIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1))
  }

  const currentTestimonial = TESTIMONIALS[testimonialIdx]

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0F172A] selection:bg-[#0062D2] selection:text-white font-sans">

      {/* =================================================================
          SECTION 1: HERO — Executive Split with Fade Mask & Script
          ================================================================= */}
      <section className="relative overflow-hidden bg-[#FAFBFD] text-slate-900 pt-6 sm:pt-10 pb-16 lg:pb-24 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium tracking-wide mb-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <ChevronRight className="size-3.5 text-slate-400" />
            <Link href="/membership" className="hover:text-slate-900 transition-colors">Membership</Link>
            <ChevronRight className="size-3.5 text-slate-400" />
            <span className="text-[#0062D2] font-semibold">Who Belongs Here</span>
          </div>

          {/* Hero Banner Box */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[36px] bg-white border border-slate-200/80 shadow-sm min-h-[520px] lg:min-h-[580px] flex items-center">

            {/* Fade Visual (Right 60%) */}
            <div
              className="absolute top-0 right-0 bottom-0 w-full sm:w-[65%] lg:w-[58%] overflow-hidden pointer-events-none"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 10%, rgba(0,0,0,0.6) 28%, black 55%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 10%, rgba(0,0,0,0.6) 28%, black 55%)',
              }}
            >
              <Image
                src="/images/who-belongs-hero.jpg"
                alt="Peers Global Entrepreneurs in Executive Boardroom Discussion"
                fill
                priority
                className="object-cover object-center scale-105"
              />
              <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-white via-white/85 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />

              {/* Cursive Script Overlay */}
              <div className="absolute top-6 sm:top-10 right-6 sm:right-10 z-20 text-right drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] pointer-events-none select-none">
                <p className="text-2xl sm:text-3xl text-white/95 leading-tight font-medium" style={{ fontFamily: 'var(--font-script)' }}>
                  Better People
                </p>
                <p className="text-3xl sm:text-4xl text-amber-300 font-bold leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Bigger Possibilities.
                </p>
              </div>
            </div>

            {/* Left Content (Z-10) */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl flex flex-col items-start">

                {/* Eyebrow */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-0.5 w-6 bg-[#0062D2]" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                    MEMBERSHIP
                  </span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-[62px] font-normal text-slate-900 tracking-tight leading-[1.08] mb-4">
                  Who <span className="text-[#0062D2] font-medium">Belongs</span> Here
                </h1>

                <p className="text-xl sm:text-2xl text-slate-800 font-medium leading-snug mb-3 font-serif italic">
                  This community is built for a particular kind of entrepreneur.
                </p>

                <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8">
                  Not the largest business in the room. <span className="font-semibold text-slate-900">The one most willing to help the others in it.</span>
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="https://unity.peersglobal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-7 py-3.5 text-sm font-bold shadow-lg shadow-blue-600/25 transition-all hover:scale-105 inline-flex items-center gap-2"
                  >
                    <span>Download Unity App</span>
                    <ArrowRight className="size-4" />
                  </a>
                  <Link
                    href="/membership/criteria"
                    className="rounded-full border border-slate-300 hover:border-[#0062D2] bg-white hover:bg-slate-50 text-slate-800 hover:text-[#0062D2] px-7 py-3.5 text-sm font-semibold transition-all inline-flex items-center gap-2 shadow-sm"
                  >
                    <span>Apply for Membership</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </div>

              </div>
            </div>

          </div>

          {/* Floating Stats Bar */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 items-center">
            {STATS.map((stat, i) => {
              const Icon = stat.icon
              return (
                <div
                  key={i}
                  className="rounded-2xl bg-white border border-slate-200/90 p-4 sm:p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="size-11 sm:size-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    <Icon className="size-5 sm:size-6 text-[#0062D2]" />
                  </div>
                  <div>
                    <div className="font-serif text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              )
            })}

            {/* 5th Highlight Pill */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1 rounded-2xl bg-[#0B1528] text-white p-4 sm:p-5 flex items-center gap-3 shadow-md">
              <div className="size-10 rounded-xl bg-blue-600/30 border border-blue-400/30 flex items-center justify-center shrink-0">
                <Users className="size-5 text-sky-400" />
              </div>
              <div className="text-xs font-semibold text-slate-200 leading-snug">
                A Community of Entrepreneurs Who Give, Grow and Build Together.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 2: WHAT WE ACTUALLY LOOK FOR — Character over Size
          ================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

            {/* Left Column: Narrative */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-0.5 w-6 bg-[#0062D2]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                  WHAT WE ACTUALLY LOOK FOR
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight leading-tight mb-6">
                It’s not about the size of your business.
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
                Revenue is not the qualification here. Neither is the age of your business, the size of your team, or the industry you operate in.
              </p>

              <div className="rounded-2xl bg-blue-50/60 border border-blue-100 p-5 sm:p-6 mb-5">
                <p className="text-base sm:text-lg text-slate-900 font-semibold mb-2">
                  What matters is <span className="text-[#0062D2]">character</span>.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  A Circle works because of who is in the room, and one wrong seat costs more than three empty ones. So the question a Circle Director is really asking is not how big is your business — it is what kind of person are you when nobody is keeping score.
                </p>
              </div>

              <p className="text-sm font-semibold tracking-wide text-[#0062D2] uppercase">
                Six things tell us most of what we need to know.
              </p>
            </div>

            {/* Right Column: Featured Quote Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl bg-gradient-to-br from-slate-50 via-white to-blue-50/40 border border-slate-200/90 p-8 sm:p-10 shadow-sm">
                <div className="size-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-md shadow-blue-500/20">
                  <Quote className="size-7" />
                </div>

                <blockquote className="font-serif text-2xl sm:text-3xl text-slate-900 leading-snug font-normal mb-6">
                  “The right community doesn’t make you bigger. <br />
                  <span className="text-[#0062D2] font-medium italic">It makes you better.”</span>
                </blockquote>

                <div className="flex items-center gap-3 pt-6 border-t border-slate-200/80">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    PEERS GLOBAL —
                  </span>
                  <span className="text-xs font-semibold text-slate-600">
                    Community of Collaboration
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 3: YOU BELONG HERE IF — Six Qualities We Look For
          ================================================================= */}
      <section className="py-20 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="h-0.5 w-6 bg-[#0062D2]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                YOU BELONG HERE IF
              </span>
              <span className="h-0.5 w-6 bg-[#0062D2]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight leading-tight mb-4">
              Six qualities we look for
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              If these six traits describe how you naturally run your business and relationships, this room is for you.
            </p>
          </div>

          {/* 6 Cards Grid (3x2) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SIX_QUALITIES.map((quality, idx) => {
              const Icon = quality.icon
              return (
                <div
                  key={idx}
                  className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div
                      className="size-12 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: quality.bg, border: `1px solid ${quality.border}` }}
                    >
                      <Icon className="size-5" style={{ color: quality.color }} />
                    </div>

                    <h3 className="font-serif text-xl font-bold text-slate-900 mb-2 leading-snug">
                      {quality.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {quality.subtext}
                    </p>
                  </div>

                  <p className="text-[11px] sm:text-xs text-slate-400 pt-3 border-t border-slate-100 italic leading-relaxed">
                    {quality.detail}
                  </p>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 4: TWO-COLUMN CONTRAST
          (THIS IS PROBABLY NOT FOR YOU IF vs WHAT WE DO NOT REQUIRE)
          ================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

            {/* Left Column: THIS IS PROBABLY NOT FOR YOU IF */}
            <div className="rounded-3xl bg-[#FFF5F5] border border-rose-200/80 p-8 sm:p-10 flex flex-col justify-between shadow-2xs">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="h-0.5 w-6 bg-rose-500" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-rose-600">
                    THIS IS PROBABLY NOT FOR YOU IF
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-6 leading-tight">
                  We would rather say this clearly.
                </h3>

                <ul className="space-y-4 mb-6">
                  {[
                    {
                      label: 'You are here primarily to sell.',
                      desc: "A Circle is not a room of prospects. Peers recognise a seller within two meetings, and that person's business never recovers its reputation in the community.",
                    },
                    {
                      label: 'You want the network without the contribution.',
                      desc: 'Access here is earned through what you give. A Peer who takes without giving will find that doors quietly stop opening, and nobody will explain why.',
                    },
                    {
                      label: 'You cannot commit to consistent attendance.',
                      desc: 'Trust is built by the same people meeting the same people. Irregular attendance does not slow that down — it prevents it.',
                    },
                    {
                      label: 'You need to be the most important person in the room.',
                      desc: 'Every Peer here has built something. Nobody gets more time or deference because their business is larger.',
                    },
                    {
                      label: 'You are looking for immediate returns.',
                      desc: 'Some Peers see meaningful business in their first quarter. Many do not. The ones who join expecting month-one results usually leave before the relationships mature.',
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="size-6 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                        <XCircle className="size-4" />
                      </div>
                      <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <strong className="text-slate-900 font-semibold block sm:inline mr-1">
                          {item.label}
                        </strong>
                        <span className="text-slate-600">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-rose-200/80">
                <p className="text-xs text-rose-700 italic leading-relaxed">
                  None of this makes someone a poor entrepreneur. It simply makes this the wrong community for them, and that is worth knowing early.
                </p>
              </div>
            </div>

            {/* Right Column: WHAT WE DO NOT REQUIRE */}
            <div className="rounded-3xl bg-[#F0FDF4] border border-emerald-200/80 p-8 sm:p-10 flex flex-col justify-between shadow-2xs relative overflow-hidden">
              {/* Script watermark */}
              <div className="absolute top-8 right-6 z-10 text-right select-none pointer-events-none hidden sm:block">
                <p className="text-xl sm:text-2xl text-emerald-800/40 leading-tight font-medium" style={{ fontFamily: 'var(--font-script)' }}>
                  Different Businesses.
                </p>
                <p className="text-xl sm:text-2xl text-emerald-800/50 leading-tight font-medium" style={{ fontFamily: 'var(--font-script)' }}>
                  Same Values.
                </p>
                <p className="text-2xl sm:text-3xl text-emerald-700/80 font-bold leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  A Stronger Tomorrow.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="h-0.5 w-6 bg-emerald-600" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-700">
                    WHAT WE DO NOT REQUIRE
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-6 leading-tight">
                  Opportunity is open to many.
                </h3>

                <ul className="space-y-4 mb-6 relative z-20">
                  {[
                    {
                      label: 'A minimum revenue.',
                      desc: 'A first-generation entrepreneur three years in can contribute as much as someone running a two-hundred-crore business — sometimes more, because they are closer to the problems others in the room are facing.',
                    },
                    {
                      label: 'A particular industry.',
                      desc: 'Nineteen Circles across industries and ambitions. If you run a real business, there is a room for you.',
                    },
                    {
                      label: 'An existing network.',
                      desc: 'Many Peers join precisely because they do not have one. That is what this community builds.',
                    },
                    {
                      label: 'A title or a degree.',
                      desc: 'Nobody here is measured by either.',
                    },
                    {
                      label: 'English fluency.',
                      desc: 'Peers Global operates across languages. Nobody should be excluded from a room because of the school they attended.',
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="size-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="size-4" />
                      </div>
                      <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <strong className="text-slate-900 font-semibold block sm:inline mr-1">
                          {item.label}
                        </strong>
                        <span className="text-slate-600">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-emerald-200/80 relative z-20">
                <p className="text-xs text-emerald-800 font-semibold leading-relaxed">
                  If you run a real business, there is a room for you.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 5: THE HONEST TEST & REAL PEOPLE ANSWERS
          ================================================================= */}
      <section className="py-20 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left Column: THE HONEST TEST ACCORDION (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-0.5 w-6 bg-[#0062D2]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                  THE HONEST TEST
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight leading-tight mb-2">
                Ask yourself these questions.
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 mb-8">
                If you can answer yes to most of these, you will fit here.
              </p>

              {/* Accordion Questions */}
              <div className="w-full space-y-3">
                {HONEST_TEST_QUESTIONS.map((item, idx) => {
                  const isOpen = openFaq === idx
                  return (
                    <div
                      key={idx}
                      className={`rounded-2xl border transition-all duration-200 bg-white ${
                        isOpen ? 'border-[#0062D2] shadow-sm' : 'border-slate-200/80 hover:border-slate-300'
                      }`}
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4"
                        aria-expanded={isOpen}
                      >
                        <span className="text-sm sm:text-base font-semibold text-slate-900">
                          {item.q}
                        </span>
                        <div
                          className={`size-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                            isOpen ? 'bg-[#0062D2] text-white' : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                          {item.a}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Honest Test Insight Callout */}
              <div className="mt-8 rounded-2xl bg-blue-50/70 border border-blue-100 p-5 w-full">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#0062D2] mb-1">
                  The Honest Reaction Test
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  When someone in your industry succeeds, what is your first reaction? If it is genuine interest — <span className="italic">how did they do that, what could I learn</span> — you will do well here. If it is comparison or resentment, this community will not work for you. That is the whole filter.
                </p>
              </div>
            </div>

            {/* Right Column: TESTIMONIAL & TAKE THE NEXT STEP (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">

              {/* Member Testimonial Card */}
              <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0062D2]">
                    <Sparkles className="size-3.5 text-[#0062D2]" />
                    <span>REAL PEOPLE. REAL ANSWERS</span>
                  </div>

                  {/* Arrow Controls */}
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={handlePrevTestimonial}
                      className="size-8 rounded-full border border-slate-200 hover:border-[#0062D2] hover:bg-blue-50 text-slate-600 hover:text-[#0062D2] flex items-center justify-center transition-colors"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="size-4" />
                    </button>
                    <button
                      onClick={handleNextTestimonial}
                      className="size-8 rounded-full border border-slate-200 hover:border-[#0062D2] hover:bg-blue-50 text-slate-600 hover:text-[#0062D2] flex items-center justify-center transition-colors"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="size-4" />
                    </button>
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">
                  What members say
                </h3>

                <blockquote className="font-serif text-base sm:text-lg text-slate-800 italic leading-relaxed mb-6">
                  “{currentTestimonial.quote}”
                </blockquote>

                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                  <div className="size-12 rounded-full overflow-hidden relative border border-slate-200 shrink-0">
                    <Image
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.name}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">
                      {currentTestimonial.name}
                    </div>
                    <div className="text-xs text-slate-500">
                      {currentTestimonial.role} · {currentTestimonial.circle}
                    </div>
                  </div>
                </div>

                {/* Dot indicator */}
                <div className="flex items-center justify-center gap-1.5 mt-5">
                  {TESTIMONIALS.map((_, idx) => (
                    <span
                      key={idx}
                      className={`size-1.5 rounded-full transition-all ${
                        testimonialIdx === idx ? 'w-4 bg-[#0062D2]' : 'bg-slate-200'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* We Decline Applications Callout */}
              <div className="rounded-3xl bg-[#0F172A] text-white p-6 sm:p-7 shadow-sm">
                <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <ShieldCheck className="size-4 text-sky-400" />
                  <span>WE DECLINE APPLICATIONS</span>
                </div>
                <h4 className="font-serif text-lg font-semibold text-white mb-2">
                  An empty seat is always better than the wrong one.
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  Not many, but enough that acceptance means something. The most common reason is a mismatch of intent — someone looking for a sales channel rather than a community.
                </p>
                <Link
                  href="/membership/criteria"
                  className="text-xs font-bold text-sky-400 hover:text-sky-300 inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>See Criteria & Process</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>

              {/* Ready to find your people? Card */}
              <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0062D2] mb-2">
                  <span>READY TO FIND YOUR PEOPLE?</span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2">
                  Take the next step.
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Download the Unity App to explore the community or apply for membership to begin your journey.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href="https://unity.peersglobal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex-1 rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-5 py-3 text-xs font-bold shadow-md shadow-blue-600/20 transition-all text-center inline-flex items-center justify-center gap-1.5"
                  >
                    <span>Download Unity App</span>
                    <ArrowRight className="size-3.5" />
                  </a>
                  <Link
                    href="/membership/criteria"
                    className="w-full sm:w-auto flex-1 rounded-full border border-slate-300 hover:border-[#0062D2] text-slate-800 hover:text-[#0062D2] px-5 py-3 text-xs font-bold transition-all text-center inline-flex items-center justify-center gap-1.5"
                  >
                    <span>Apply for Membership</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 6: CLOSING HERO BANNER
          ================================================================= */}
      <section className="relative isolate overflow-hidden bg-[#040F24] text-white py-24 sm:py-32">
        {/* Deep celestial radial gradients & luminous aura */}
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

        {/* SVG Orbital Geometric Lines Background */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-[min(58vw,760px)] opacity-35">
          <svg viewBox="0 0 760 520" fill="none" className="h-full w-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M760 40C555 45 405 145 375 310C355 423 265 493 70 520" stroke="currentColor" strokeWidth="1" className="text-blue-300/30" />
            <path d="M760 120C590 125 470 205 445 335C424 442 335 500 180 520" stroke="currentColor" strokeWidth="1" strokeDasharray="5 8" className="text-sky-200/25" />
            <path d="M760 215C640 220 565 278 540 370C519 446 470 490 390 520" stroke="currentColor" strokeWidth="1" className="text-blue-200/20" />
            <circle cx="540" cy="370" r="4" fill="currentColor" className="text-sky-300/60" />
            <circle cx="540" cy="370" r="13" stroke="currentColor" strokeWidth="1" className="text-sky-300/25" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left Copy */}
            <div className="lg:col-span-8 flex flex-col items-start">
              <div className="inline-flex items-center gap-3 text-sky-200 text-xs font-bold tracking-[0.25em] uppercase mb-4">
                <span className="h-0.5 w-6 bg-sky-200" />
                <span>YOUR NEXT CHAPTER</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-tight mb-4">
                A stronger you. <br className="hidden sm:inline" />
                A stronger tomorrow.
              </h2>

              <p className="text-base sm:text-lg text-white/95 font-medium leading-relaxed mb-2">
                Build Your Business. Build Your Relationships. Build Your Circle.
              </p>

              <p className="text-xs sm:text-sm text-white/80 italic mb-8 max-w-xl">
                If you give without being asked, tell the truth when it is difficult, and think in decades — you already belong here.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white text-[#0062D2] hover:bg-slate-100 px-8 py-4 text-sm font-bold shadow-lg transition-all hover:scale-105 inline-flex items-center gap-2 uppercase tracking-wider"
                >
                  <span>Download Unity App</span>
                  <ArrowRight className="size-4" />
                </a>
                <Link
                  href="/membership/criteria"
                  className="rounded-full border border-white/40 hover:border-white/70 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 text-sm font-semibold transition-all inline-flex items-center gap-2 uppercase tracking-wider"
                >
                  <UserCheck className="size-4" />
                  <span>Apply for Membership</span>
                </Link>
              </div>
            </div>

            {/* Right Cursive Script Callout */}
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <div className="text-left lg:text-right select-none pointer-events-none" style={{ fontFamily: 'var(--font-script)' }}>
                <p className="text-3xl sm:text-4xl text-white/70 leading-tight">People,</p>
                <p className="text-3xl sm:text-4xl text-white/85 leading-tight">Partnerships,</p>
                <p className="text-4xl sm:text-5xl text-amber-300 font-medium leading-tight mt-1">
                  Possibilities.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
