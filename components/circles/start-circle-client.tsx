'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ClosingCtaSection } from '@/components/site/ClosingCtaSection'
import {
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Smartphone,
  Users,
  MapPin,
  Target,
  CheckCircle2,
  XCircle,
  Star,
  TrendingUp,
  Layers,
  Shield,
  Clock,
  Lightbulb,
  Building2,
  Globe,
  Award,
  HeartHandshake,
  ChevronLeft,
} from 'lucide-react'

// ─── What a Circle Founder actually does (5 steps) ────────────────────────
const FOUNDER_STEPS = [
  {
    icon: Target,
    title: 'You decide what the Circle is for.',
    desc: 'An industry, a purpose or a need. You define it.',
  },
  {
    icon: Users,
    title: 'You bring the first Peers.',
    desc: 'A complementary founding group. One seat per category.',
  },
  {
    icon: Star,
    title: 'You set the standard from meeting one.',
    desc: 'The culture you create early becomes the culture for years.',
  },
  {
    icon: Clock,
    title: 'You run the first year.',
    desc: 'The rhythm, agenda and follow-through, including the difficult conversations.',
  },
  {
    icon: TrendingUp,
    title: 'You build something that outlasts you.',
    desc: 'Eventually a Circle Director takes over, and the Circle continues.',
  },
]

// ─── What we provide ──────────────────────────────────────────────────────
const WE_PROVIDE = [
  {
    icon: Layers,
    label: 'The structure',
    desc: 'Proven Circle model, agenda, seat system and standards.',
  },
  {
    icon: Smartphone,
    label: 'The systems',
    desc: 'Unity App, member management, contribution tracking.',
  },
  {
    icon: Lightbulb,
    label: 'The training',
    desc: 'Founder induction and ongoing learning.',
  },
  {
    icon: HeartHandshake,
    label: 'The support',
    desc: 'A Regional Executive Director and guidance from existing Founders.',
  },
  {
    icon: Shield,
    label: 'The brand',
    desc: 'Launch under Peers Global with credibility and reach.',
  },
  {
    icon: Globe,
    label: 'The network',
    desc: 'Your Circle connects to the city, region, country and global community.',
  },
]

// ─── What you provide ─────────────────────────────────────────────────────
const YOU_PROVIDE = [
  {
    icon: Award,
    label: 'Leadership',
    desc: 'Someone has to hold the standard, and in the first year that is you.',
  },
  {
    icon: Users,
    label: 'The first group',
    desc: 'Your credibility is what brings the founding Peers in.',
  },
  {
    icon: CheckCircle2,
    label: 'Consistency',
    desc: 'Show up every month, especially in the early months.',
  },
  {
    icon: Target,
    label: 'Judgement',
    desc: 'Deciding who belongs, and who does not.',
  },
  {
    icon: Clock,
    label: 'Time',
    desc: 'Real, recurring time. Founding a Circle is not a passive role.',
  },
]

// ─── Why found ────────────────────────────────────────────────────────────
const WHY_FOUND = [
  {
    title: 'You become a better leader.',
    desc: 'Running a room of accomplished entrepreneurs — holding a standard among people who do not report to you — develops something no course teaches.',
  },
  {
    title: 'You build the strongest network in your city.',
    desc: 'The Founder of a Circle knows every Peer in it, and every Peer knows exactly who brought them together.',
  },
  {
    title: 'Your standing rises across the community.',
    desc: 'Founding is one of the highest contributions in Peers Global, recognised at city, regional and national level.',
  },
  {
    title: 'You gain access upward.',
    desc: 'Circle Founders work alongside Directors and Advisors across the community, and see the whole ecosystem rather than one room in it.',
  },
  {
    title: 'You impact lives at scale.',
    desc: 'A Circle of thirty entrepreneurs, giving consistently for five years, changes hundreds of businesses. That is a legacy no single company produces on its own.',
  },
]

// ─── Five-step process ────────────────────────────────────────────────────
const HOW_IT_WORKS = [
  { n: '1', title: 'You apply.', desc: 'Tell us about your business, your city or industry, and why you want to build this room.' },
  { n: '2', title: 'We talk properly.', desc: 'A conversation with a Regional Executive Director about the opportunity, what founding involves, and whether it fits.' },
  { n: '3', title: 'You are inducted.', desc: 'Founder training — the model, the systems, the agenda, and how to build the founding group.' },
  { n: '4', title: 'You build the founding Peers.', desc: 'With support, guidance and Unity from day one.' },
  { n: '5', title: 'Your Circle launches.', desc: 'First meeting, first Give and Ask, first impact declared. A room exists that did not exist before you.' },
]

// ─── FAQs ─────────────────────────────────────────────────────────────────
const FAQS = [
  { q: 'Do I need to be a Peer already?', a: 'Not necessarily. Many Founders join Peers Global specifically to build a Circle. What matters is standing in your city or industry and the ability to bring the right entrepreneurs together.' },
  { q: 'How many Peers do I need to launch?', a: 'Enough that every meeting has depth and the room feels complete. Your Regional Executive Director will guide you on the founding group for your specific Circle.' },
  { q: 'How long does it take from application to first meeting?', a: 'That depends mostly on how quickly you can bring the founding group together. Some Founders launch in weeks, others take a few months to compose the room properly. The careful ones build stronger Circles.' },
  { q: 'Can I start a Circle in an industry that already exists elsewhere?', a: 'Yes. An Industry Circle in one city is entirely separate from the same industry in another.' },
  { q: 'What if I want to start a Circle for a purpose that does not exist yet?', a: 'That is exactly how new Purpose Circles begin. If enough entrepreneurs share the ambition, it is worth building.' },
  { q: 'Can I found a Circle alongside running my business?', a: 'Yes — every Circle Founder is a working business owner. The role is designed around that reality.' },
  { q: 'What happens after the first year?', a: 'A Circle Director typically takes on the day-to-day rhythm while you continue as Founder. Many Founders go on to build a second Circle or move into wider leadership.' },
]

// ─── Testimonials ─────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    quote: 'Starting a Circle in my city has been the most meaningful thing I\'ve done as an entrepreneur. The impact goes far beyond business.',
    name: 'Ami Shah',
    role: 'Circle Founder, Ahmedabad',
  },
  {
    quote: 'When I built the founding group, I was building my most important business relationships. Three years on, they are still the people I call first.',
    name: 'Ravi Menon',
    role: 'Circle Founder, Kochi',
  },
]

export function StartCircleClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [testimonialIdx, setTestimonialIdx] = useState(0)

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0F172A] selection:bg-[#0062D2] selection:text-white font-sans">

      {/* =================================================================
          SECTION 1: HERO — Fade Video Background
          ================================================================= */}
      <section className="relative overflow-hidden bg-[#FAFBFD] text-slate-900 pt-6 sm:pt-10 pb-12 sm:pb-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium tracking-wide mb-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <ChevronRight className="size-3.5 text-slate-400" />
            <Link href="/circles" className="hover:text-slate-900 transition-colors">Circles</Link>
            <ChevronRight className="size-3.5 text-slate-400" />
            <span className="text-[#0062D2] font-semibold">Start a Circle</span>
          </div>

          {/* Hero Banner */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[36px] bg-white border border-slate-200/80 shadow-sm min-h-[500px] lg:min-h-[560px] flex items-center">

            {/* Fade Video */}
            <div
              className="absolute top-0 right-0 bottom-0 w-full sm:w-[65%] lg:w-[60%] overflow-hidden pointer-events-none"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.5) 25%, black 50%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.5) 25%, black 50%)',
              }}
            >
              <video
                src="/videos/homepage-hero-bg.mp4"
                poster="/images/circles-hero-new.jpg"
                autoPlay loop muted playsInline
                className="size-full object-cover object-center"
              />
              <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white via-white/85 via-30% to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none" />

              {/* Script overlay */}
              <div className="absolute top-6 sm:top-8 right-6 sm:right-8 z-20 text-right drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] pointer-events-none select-none">
                <p className="text-xl sm:text-2xl text-white/95 leading-tight" style={{ fontFamily: 'var(--font-script)' }}>Build Your City.</p>
                <p className="text-xl sm:text-2xl text-white/95 leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>Build Opportunities.</p>
                <p className="text-2xl sm:text-3xl text-amber-300 font-medium leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>Build Lives.</p>
              </div>

              {/* Glass pill */}
              <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-20 pointer-events-none select-none">
                <div className="rounded-xl border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2.5 shadow-lg">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/70">MORE CIRCLES</p>
                  <p className="text-xs font-bold tracking-wider text-white">STRONGER COMMUNITIES · A BRIGHTER TOMORROW</p>
                </div>
              </div>
            </div>

            {/* Left Content */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl flex flex-col items-start">

                <div className="flex items-center gap-3 mb-4">
                  <span className="h-0.5 w-6 bg-[#0062D2]" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">CREATE IMPACT IN YOUR CITY</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-6xl lg:text-[68px] font-normal text-slate-900 tracking-tight leading-[1.08] mb-4">
                  Start a Circle
                </h1>
                <p className="text-xl sm:text-2xl text-slate-800 font-bold leading-snug mb-3">
                  Some entrepreneurs look for the right room. Others build it.
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 max-w-lg">
                  Every Circle in this community exists because one person decided it should.
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-10">
                  <Link
                    href="/circles/find"
                    className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-7 py-3.5 text-sm font-semibold shadow-lg shadow-blue-600/25 transition-all hover:scale-105 inline-flex items-center gap-2"
                  >
                    Apply to Found a Circle
                    <ArrowRight className="size-4" />
                  </Link>
                  <a
                    href="https://unity.peersglobal.com"
                    target="_blank" rel="noopener noreferrer"
                    className="rounded-full border border-slate-300 hover:border-slate-400 bg-white/90 text-slate-800 px-7 py-3.5 text-sm font-semibold transition-all hover:scale-105 shadow-2xs inline-flex items-center gap-2"
                  >
                    <Smartphone className="size-4" />
                    Download Unity App
                  </a>
                </div>

                {/* Stat Band */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-lg">
                  {[
                    { icon: Building2, value: '150+', label: 'Active Circles' },
                    { icon: MapPin, value: '45+', label: 'Cities' },
                    { icon: Users, value: '1,000+', label: 'Entrepreneurs Connected' },
                  ].map((s) => {
                    const Icon = s.icon
                    return (
                      <div key={s.label} className="flex items-center gap-2.5 p-3 sm:p-3.5 rounded-2xl bg-[#F0F7FF] border border-[#DCEBFE]">
                        <div className="size-9 rounded-full bg-white flex items-center justify-center text-[#0062D2] shadow-2xs shrink-0">
                          <Icon className="size-4" />
                        </div>
                        <div>
                          <div className="font-bold text-base sm:text-lg text-[#0F172A] leading-none">{s.value}</div>
                          <div className="text-[10px] text-slate-500 font-medium mt-1 leading-tight">{s.label}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          SECTION 2: THE ROOM THAT DOES NOT EXIST YET
          ================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-left mb-2">
            <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">— THE OPPORTUNITY —</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            <div className="lg:col-span-7">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight mb-6">
                The room that does not exist yet
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
                Somewhere in your city there are twenty entrepreneurs who would change each other's businesses if they were ever in the same room.
              </p>
              <p className="text-base text-slate-600 leading-relaxed mb-4">
                They are not. They pass each other at events, exchange cards, and go back to solving the same problems separately. The ecosystem exists. The room does not.
              </p>
              <p className="text-base sm:text-lg text-[#0062D2] font-bold leading-relaxed mb-4">
                A Circle Founder is the person who builds it.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Not because someone asked them to, and not because it is easy, but because they can see what that room would produce and they are unwilling to wait for someone else to create it.
              </p>
            </div>

            {/* Quote card */}
            <div className="lg:col-span-5">
              <div className="relative p-8 sm:p-10 rounded-3xl bg-[#F0F7FF] border border-[#DCEBFE] shadow-sm overflow-hidden">
                <div className="absolute top-1/2 -right-10 -translate-y-1/2 w-32 h-32 rounded-full border border-dashed border-[#0062D2]/20 pointer-events-none" />
                <div className="relative z-10">
                  <span className="font-serif text-5xl sm:text-6xl text-[#0062D2] leading-none block mb-2">"</span>
                  <p className="font-serif text-xl sm:text-2xl text-[#0F172A] font-bold leading-snug mb-6">
                    Communities don't happen by chance. They happen because someone takes the first step.
                  </p>
                  <p className="text-xs font-bold text-[#0062D2] uppercase tracking-widest mb-4">PEERS GLOBAL</p>
                </div>
                <div
                  className="text-right select-none pointer-events-none mt-4"
                  style={{ fontFamily: 'var(--font-script)' }}
                >
                  <p className="text-2xl text-[#0062D2]/60 leading-tight">Be the One Who</p>
                  <p className="text-3xl text-[#0062D2] leading-tight font-medium">Starts It</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 3: WHAT A FOUNDER ACTUALLY DOES (5-step horizontal)
          ================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-left mb-2">
            <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">— WHAT A CIRCLE FOUNDER ACTUALLY DOES —</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight mb-12">
            From vision to a thriving Circle
          </h2>

          {/* Horizontal 5-step flow */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-10">
            {FOUNDER_STEPS.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={i} className="relative flex flex-col items-start p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-md hover:border-[#0062D2]/30 transition-all">
                  {/* Connector arrow (hidden on mobile) */}
                  {i < FOUNDER_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-3 z-10">
                      <ArrowRight className="size-5 text-slate-300" />
                    </div>
                  )}
                  <div className="size-10 rounded-full bg-[#EFF6FF] text-[#0062D2] flex items-center justify-center mb-4 shrink-0">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[#0F172A] leading-snug mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              )
            })}
          </div>

          <Link
            href="/leadership/circle-founder"
            className="rounded-full border border-[#0062D2] text-[#0062D2] hover:bg-[#0062D2] hover:text-white px-6 py-3 text-sm font-semibold transition-all inline-flex items-center gap-2"
          >
            Read the Circle Founder Role
            <ArrowRight className="size-4" />
          </Link>

        </div>
      </section>

      {/* =================================================================
          SECTION 4: WE PROVIDE + YOU PROVIDE (two-column)
          ================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* We provide */}
            <div>
              <div className="text-left mb-2">
                <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">— WHAT WE PROVIDE —</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0F172A] tracking-tight leading-tight mb-3">
                You don't build this alone.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                Everything tested across the community, ready from day one.
              </p>
              <div className="space-y-3">
                {WE_PROVIDE.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="flex items-start gap-4 p-4 rounded-2xl bg-[#F0F7FF] border border-[#DCEBFE] hover:shadow-sm transition-shadow">
                      <div className="size-9 rounded-full bg-white text-[#0062D2] flex items-center justify-center shrink-0 shadow-2xs">
                        <Icon className="size-4" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#0F172A]">{item.label}</p>
                        <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* You provide */}
            <div>
              <div className="text-left mb-2">
                <span className="text-amber-600 text-xs font-bold tracking-[0.25em] uppercase">— WHAT YOU PROVIDE —</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0F172A] tracking-tight leading-tight mb-3">
                It takes commitment.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                Founding is not a title. It is a year of consistent work.
              </p>
              <div className="space-y-3">
                {YOU_PROVIDE.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="flex items-start gap-4 p-4 rounded-2xl bg-amber-50 border border-amber-100 hover:shadow-sm transition-shadow">
                      <div className="size-9 rounded-full bg-white text-amber-500 flex items-center justify-center shrink-0 shadow-2xs">
                        <Icon className="size-4" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#0F172A]">{item.label}</p>
                        <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =================================================================
          SECTION 5: WHO SHOULD START + QUICK APPLY (two-column)
          ================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Who it suits */}
            <div>
              <div className="text-left mb-2">
                <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">— WHO SHOULD START A CIRCLE —</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0F172A] tracking-tight leading-tight mb-6">
                This suits you if:
              </h2>

              <div className="space-y-2 mb-6">
                {[
                  'You have built something already — a business, a team, a community',
                  'People in your city or industry come to you for introductions',
                  'You give without being asked, and have done so for years',
                  'You can hold a standard when it is uncomfortable',
                  'You finish what you begin',
                  'You want to build something beyond your own company',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200">
                    <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>

              {/* Disqualifying note */}
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-rose-50 border border-rose-200">
                <XCircle className="size-5 text-rose-400 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-600 leading-relaxed">
                  <strong className="text-rose-600">This does not suit you</strong> if you are looking for a title, a customer list, or a channel to sell into. A Circle led by someone selling to it collapses within a year, and every Peer in the room knows it before the Founder does.
                </p>
              </div>
            </div>

            {/* Quick apply + testimonial */}
            <div>
              <div className="text-left mb-2">
                <span className="text-emerald-600 text-xs font-bold tracking-[0.25em] uppercase">— READY TO CREATE A CIRCLE? —</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0F172A] tracking-tight leading-tight mb-6">
                Start the conversation
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                Tell us about yourself and the Circle you have in mind. A member of our leadership team will get in touch to discuss it with you personally.
              </p>

              <Link
                href="/circles/find"
                className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-7 py-3.5 text-sm font-semibold shadow-lg shadow-blue-600/20 transition-all hover:scale-105 inline-flex items-center gap-2 mb-8"
              >
                Apply to Found a Circle
                <ArrowRight className="size-4" />
              </Link>

              {/* Testimonial mini-carousel */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
                <p className="font-serif text-base sm:text-lg text-[#0F172A] leading-relaxed italic mb-4">
                  "{TESTIMONIALS[testimonialIdx].quote}"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="size-9 rounded-full bg-[#0062D2] text-white flex items-center justify-center font-bold text-sm">
                      {TESTIMONIALS[testimonialIdx].name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#0F172A]">{TESTIMONIALS[testimonialIdx].name}</p>
                      <p className="text-xs text-slate-500">{TESTIMONIALS[testimonialIdx].role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setTestimonialIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                      className="size-8 rounded-full border border-slate-200 flex items-center justify-center hover:border-[#0062D2] hover:text-[#0062D2] transition-all"
                    >
                      <ChevronLeft className="size-4" />
                    </button>
                    <button
                      onClick={() => setTestimonialIdx((i) => (i + 1) % TESTIMONIALS.length)}
                      className="size-8 rounded-full border border-slate-200 flex items-center justify-center hover:border-[#0062D2] hover:text-[#0062D2] transition-all"
                    >
                      <ChevronRight className="size-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =================================================================
          SECTION 6: WHY FOUND — 5 reasons
          ================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-left mb-2">
            <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">— WHY ENTREPRENEURS CHOOSE TO FOUND —</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight max-w-2xl">
              Founding a Circle changes the person who does it, usually more than it changes anyone else in the room.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {WHY_FOUND.map((item, i) => (
              <div key={i} className={`p-7 rounded-3xl border flex flex-col ${i === 4 ? 'lg:col-span-3 lg:flex-row lg:items-start lg:gap-8 bg-[#0F172A] border-transparent text-white' : 'bg-white border-slate-200 shadow-2xs hover:shadow-md transition-shadow'}`}>
                <div className={`size-8 rounded-full flex items-center justify-center font-bold text-xs mb-4 shrink-0 ${i === 4 ? 'bg-white/10 text-white' : 'bg-[#EFF6FF] text-[#0062D2]'}`}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className={`text-base font-bold mb-2 ${i === 4 ? 'text-white' : 'text-[#0F172A]'}`}>{item.title}</h3>
                  <p className={`text-sm leading-relaxed ${i === 4 ? 'text-white/70' : 'text-slate-600'}`}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/leadership"
            className="rounded-full border border-[#0062D2] text-[#0062D2] hover:bg-[#0062D2] hover:text-white px-6 py-3 text-sm font-semibold transition-all inline-flex items-center gap-2"
          >
            Explore the Leadership Path
            <ArrowRight className="size-4" />
          </Link>

        </div>
      </section>

      {/* =================================================================
          SECTION 7: HOW IT WORKS — 5 steps
          ================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-left mb-2">
            <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">— THE PROCESS —</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F172A] tracking-tight leading-tight mb-12">
            How it works
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={i} className="relative flex flex-col p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-[#0062D2]/40 hover:shadow-md transition-all">
                {i < HOW_IT_WORKS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-3 z-10">
                    <ArrowRight className="size-5 text-slate-300" />
                  </div>
                )}
                <div className="size-10 rounded-full bg-[#0062D2] text-white flex items-center justify-center font-bold text-sm mb-4 shrink-0">
                  {step.n}
                </div>
                <h3 className="text-sm font-bold text-[#0F172A] mb-2 leading-snug">{step.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <Link
            href="/circles/find"
            className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-7 py-3.5 text-sm font-semibold shadow-lg shadow-blue-600/20 transition-all hover:scale-105 inline-flex items-center gap-2"
          >
            Apply to Found a Circle
            <ArrowRight className="size-4" />
          </Link>

        </div>
      </section>

      {/* =================================================================
          SECTION 8: FAQ
          ================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            <div className="lg:col-span-4">
              <div className="text-left mb-2">
                <span className="text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">— COMMON QUESTIONS —</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0F172A] tracking-tight leading-tight mb-4">
                Frequently asked questions
              </h2>
              <p className="text-base text-slate-500 leading-relaxed mb-6">
                Everything you need to know before you apply.
              </p>
              <Link
                href="/circles/find"
                className="rounded-full border border-slate-300 hover:border-[#0062D2] text-slate-700 hover:text-[#0062D2] px-6 py-3 text-sm font-semibold transition-all inline-flex items-center gap-2"
              >
                Talk to a Regional Director
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="lg:col-span-8">
              <div className="space-y-2">
                {FAQS.map((faq, i) => {
                  const isOpen = openFaq === i
                  return (
                    <div key={i} className={`rounded-2xl border transition-all ${isOpen ? 'border-[#DCEBFE] bg-[#F0F7FF]' : 'border-slate-200 bg-white'}`}>
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="w-full flex items-center justify-between p-5 text-left gap-4 cursor-pointer"
                      >
                        <span className={`text-sm font-semibold leading-snug ${isOpen ? 'text-[#0062D2]' : 'text-[#0F172A]'}`}>{faq.q}</span>
                        <ChevronDown className={`size-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#0062D2]' : 'text-slate-400'}`} />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5">
                          <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =================================================================
          SECTION 10: CLOSING CTA SECTION
          ================================================================= */}
      <ClosingCtaSection
        eyebrow="BE THE CATALYST"
        title="Build the entrepreneurs in your city. Build a stronger tomorrow."
        subtitle="There is a room your city needs and does not have. You already know who should be in it."
        description="Build Your Business. Build Your Relationships. Build Your Circle."
        primaryButtonText="Apply to Found a Circle"
        primaryButtonHref="/circles/find"
        secondaryButtonText="Download Unity App"
        secondaryButtonHref="https://unity.peersglobal.com"
      />

    </div>
  )
}
