'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  ChevronRight,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Check,
  Users2,
  Layers,
  Award,
  HeartHandshake,
  GraduationCap,
  Target,
  Send,
  Lock,
} from 'lucide-react'

const ECOSYSTEM_LAYERS = [
  {
    title: 'CIRCLES',
    subtitle: 'Structured communities of entrepreneurs built around industry and shared purpose.',
    desc: 'Confidential, zero-conflict peer groups that meet regularly for structured problem solving and mutual accountability.',
    icon: Users2,
  },
  {
    title: 'COLLABORATION',
    subtitle: 'Relationships that can move from introduction to meaningful action.',
    desc: 'Frameworks and protocols that transform casual networking into bilateral deals, consortiums, and joint ventures.',
    icon: HeartHandshake,
  },
  {
    title: 'LEARNING',
    subtitle: 'Experience, knowledge and insight shared between entrepreneurs.',
    desc: 'Peer-driven masterclasses, candid playbooks, and practical wisdom distilled from living through market cycles.',
    icon: GraduationCap,
  },
  {
    title: 'RESOURCES',
    subtitle: 'Tools, opportunities, experiences and ecosystem support.',
    desc: 'Proprietary digital workflows, marketplace access, institutional partnerships, and growth infrastructure.',
    icon: Layers,
  },
  {
    title: 'LEADERSHIP',
    subtitle: 'Pathways through which Peers can contribute, lead and take greater responsibility.',
    desc: 'Governed roles including Circle Founders, Circle Directors, and Regional Council Stewards.',
    icon: Award,
  },
  {
    title: 'IMPACT',
    subtitle: 'A culture in which entrepreneurial contribution can create value beyond the individual business.',
    desc: '1 Action = 1 Life Impacted framework translating enterprise growth into grassroots mentorship and community upliftment.',
    icon: Target,
  },
]

const JOURNEY_STAGES = [
  { step: '01', title: 'DISCOVER', desc: 'Find people and possibilities.' },
  { step: '02', title: 'UNDERSTAND', desc: 'Learn from experience.' },
  { step: '03', title: 'CONNECT', desc: 'Build relationships.' },
  { step: '04', title: 'CONTRIBUTE', desc: 'Give something meaningful.' },
  { step: '05', title: 'COLLABORATE', desc: 'Create value together.' },
  { step: '06', title: 'LEAD', desc: 'Take responsibility.' },
  { step: '07', title: 'IMPACT', desc: 'Create value beyond oneself.' },
  { step: '08', title: 'MULTIPLY', desc: 'Help the next entrepreneur move forward.' },
]

const INVESTMENT_PRINCIPLES = [
  'What is being built',
  'Why it matters',
  'How the model works',
  'What has been demonstrated',
  'What remains to be built',
  'What the capital would enable',
  'What the risks are',
  'What the opportunity requires',
]

const HARD_QUESTIONS = [
  'What are we building?',
  'Why should it exist?',
  'What evidence do we have?',
  'What still needs to be proven?',
  'What could this become?',
  'What could prevent it from becoming that?',
]

export function InvestorsPageClient() {
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    email: '',
    phone: '',
    investmentBackground: 'Angel / Family Office',
    interests: '',
    stageOrOpportunity: '',
    engagementMode: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-rose-100 selection:text-[#E11D48]">
      {/* ── Breadcrumb Navigation ── */}
      <div className="border-b border-slate-200/70 bg-white/90 backdrop-blur-md sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-slate-500 font-medium">
            <Link href="/" className="hover:text-[#1D4ED8] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-bold brand-gradient-text">Investors</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-50/80 to-rose-50/80 border border-slate-200">
              <TrendingUp className="w-3.5 h-3.5 text-[#1D4ED8]" />
              <span className="brand-gradient-text">Institutional &amp; Growth Relations</span>
            </span>
          </div>
        </div>
      </div>

      {/* ── Signature Hero Section (Home & Circles Master Design Layout) ── */}
      <section className="relative overflow-hidden bg-[#FAFBFD] text-slate-900 pt-6 sm:pt-10 pb-12 sm:pb-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Hero Banner with Smooth Left-Fading Media/Video Backdrop */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[36px] bg-white border border-slate-200/80 shadow-sm min-h-[540px] lg:min-h-[600px] flex items-center">
            
            {/* Media Background Layer (Right ~60% fading into white on the left) */}
            <div
              className="absolute top-0 right-0 bottom-0 w-full sm:w-[65%] lg:w-[60%] overflow-hidden pointer-events-none"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.5) 25%, black 50%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.5) 25%, black 50%)',
              }}
            >
              {/* Active Video Background */}
              <video
                src="/videos/homepage-hero-bg.mp4"
                poster="/images/circles-hero-new.jpg"
                autoPlay
                loop
                muted
                playsInline
                className="size-full object-cover object-center"
              />

              {/* Seamless gradient overlays for misty fade */}
              <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white via-white/85 via-30% to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none" />

              {/* Top-Right Script Typography */}
              <div className="absolute top-6 sm:top-8 right-6 sm:right-8 z-20 text-right drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] pointer-events-none select-none">
                <p className="text-xl sm:text-2xl text-white/95 leading-tight" style={{ fontFamily: 'var(--font-script)' }}>
                  Institutional Infrastructure
                </p>
                <p className="text-xl sm:text-2xl text-white/95 leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Building Together
                </p>
                <p className="text-2xl sm:text-3xl text-amber-300 font-medium leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Ecosystem Value
                </p>
              </div>

              {/* Bottom-Right Frosted Glass Pill */}
              <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-20 pointer-events-none select-none hidden sm:block">
                <div className="rounded-xl border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2.5 shadow-lg text-left">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/70">
                    GROWTH CAPITAL &amp; ALLIANCES
                  </p>
                  <p className="text-xs font-bold tracking-wider text-white">
                    PEERS GLOBAL ECOSYSTEM
                  </p>
                </div>
              </div>
            </div>

            {/* Left Content Area */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl lg:max-w-2xl flex flex-col items-start text-left">
                
                {/* Eyebrow with brand gradient bar */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-0.5 w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    INVESTORS &amp; CAPITAL PARTNERS
                  </span>
                </div>

                {/* H1 Heading */}
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-[50px] font-bold text-slate-950 tracking-tight leading-[1.14] mb-4">
                  Building the infrastructure for entrepreneurs to{' '}
                  <span className="italic bg-gradient-to-r from-[#1D4ED8] via-[#8B5CF6] to-[#E11D48] bg-clip-text text-transparent font-medium">
                    build, connect, collaborate and create impact.
                  </span>
                </h1>

                {/* Subtitle & Core Observation */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50/90 to-rose-50/50 border border-blue-100/80 mb-6 max-w-lg">
                  <p className="font-serif italic text-slate-900 text-sm sm:text-base font-medium">
                    “PEERS GLOBAL is being built around a simple observation: <span className="not-italic font-bold text-slate-950">Entrepreneurs should not have to build alone.”</span>
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    A multi-layered ecosystem enabling value created by one entrepreneur to compound across the entire network.
                  </p>
                </div>

                {/* 6 Ecosystem Dimensions Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-full max-w-lg mb-8">
                  {[
                    'A community',
                    'Collaboration infra',
                    'Learning environment',
                    'Leadership pathway',
                    'Media platform',
                    'Impact ecosystem',
                  ].map((item, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-1.5 text-xs font-semibold text-slate-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1D4ED8] shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
                  <a
                    href="#investor-enquiry"
                    className="rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider shadow-lg shadow-blue-600/20 transition-all hover:scale-105 inline-flex items-center gap-2 uppercase cursor-pointer"
                  >
                    <span>Investor Enquiry</span>
                    <ArrowRight className="size-4" />
                  </a>

                  <a
                    href="#the-model"
                    className="rounded-full border border-slate-300 hover:border-slate-400 bg-white text-slate-800 px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wider transition-all hover:scale-105 hover:bg-slate-50 shadow-2xs inline-flex items-center gap-2 uppercase cursor-pointer"
                  >
                    <span>The Model</span>
                  </a>

                  <a
                    href="#investment-principles"
                    className="rounded-full border border-slate-300 hover:border-slate-400 bg-white text-slate-700 px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wider transition-all hover:scale-105 hover:bg-slate-50 shadow-2xs inline-flex items-center gap-2 uppercase cursor-pointer"
                  >
                    <span>Principles</span>
                  </a>
                </div>

                {/* Quick Info Bar */}
                <div className="flex items-center gap-6 text-xs text-slate-500 pt-2 border-t border-slate-200/80 w-full max-w-lg">
                  <div className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Governed Capital Protocol</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <Sparkles className="w-4 h-4 text-[#1D4ED8]" />
                    <span>Confidential Direct Briefings</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── THE OPPORTUNITY ── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                    Market Context
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mb-3">
                  THE OPPORTUNITY
                </h2>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                  Entrepreneurship is growing. But the experience of building a business is still deeply individual.
                </p>
              </div>

              <div className="space-y-3 text-sm sm:text-base text-slate-700">
                <p className="font-bold text-slate-900">Entrepreneurs need more than information:</p>
                <ul className="space-y-2.5">
                  {[
                    'They need people who understand the journey.',
                    'They need trusted relationships.',
                    'They need access to experience.',
                    'They need collaboration.',
                    'They need opportunities to contribute.',
                    'And they need an environment in which their own growth can create value for others.',
                  ].map((need, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] shrink-0" />
                      <span>{need}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-[#F8FAFD] border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-xl font-serif font-bold text-slate-950">
                PEERS GLOBAL is building around that opportunity.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                The ambition is not simply to create another business network. It is to build an ecosystem in which:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'People connect', desc: 'Relational trust over transactions' },
                  { label: 'Experience moves', desc: 'Practitioner wisdom shared directly' },
                  { label: 'Collaboration happens', desc: 'Structured bilateral opportunities' },
                  { label: 'Leadership develops', desc: 'Peer stewardship & council governance' },
                  { label: 'Contribution compounds', desc: 'Give-first culture with Peers Coin' },
                  { label: 'Impact travels', desc: '1 Action = 1 Life Impacted' },
                ].map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <div className="text-xs font-bold brand-gradient-text">{item.label}</div>
                    <div className="text-[11px] text-slate-600 mt-0.5">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE MODEL ── */}
      <section id="the-model" className="py-16 sm:py-24 bg-[#F8FAFD] border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                System Architecture
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950">
              THE MODEL
            </h2>
            <p className="text-slate-700 text-base sm:text-lg">
              A community can become an ecosystem when every layer strengthens the next. PEERS GLOBAL brings together multiple dimensions of the entrepreneurial journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ECOSYSTEM_LAYERS.map((layer, idx) => {
              const Icon = layer.icon
              return (
                <div
                  key={idx}
                  className="p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-400 hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-rose-50 border border-slate-200 flex items-center justify-center text-[#1D4ED8] group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        LAYER 0{idx + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-serif font-bold text-slate-950 group-hover:text-[#1D4ED8] transition-colors">
                      {layer.title}
                    </h3>
                    <p className="text-xs font-bold brand-gradient-text">{layer.subtitle}</p>
                    <p className="text-xs text-slate-600 leading-relaxed">{layer.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── THE ECOSYSTEM EFFECT & NETWORK EFFECT ── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* THE ECOSYSTEM EFFECT */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                    Compounding Value
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 mb-2">
                  THE ECOSYSTEM EFFECT
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  The model becomes more meaningful as participation increases:
                </p>
              </div>

              <div className="space-y-2">
                {[
                  'One Peer brings experience.',
                  'Another brings capability.',
                  'Another brings an opportunity.',
                  'Another creates a connection.',
                  'Another mentors someone.',
                  'Another builds a collaboration.',
                  'Another takes that experience forward.',
                ].map((line, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#F8FAFD] border border-slate-200 flex items-center gap-3 text-xs sm:text-sm text-slate-800 font-medium"
                  >
                    <span className="text-xs font-bold brand-gradient-text font-mono">0{idx + 1}</span>
                    <span>{line}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50/80 to-rose-50/50 border border-slate-200">
                <p className="text-sm font-bold text-slate-900">
                  The value does not stop at the first interaction. It travels.
                </p>
                <p className="text-xs text-slate-600 mt-0.5">
                  That is the possibility behind a community of collaboration.
                </p>
              </div>
            </div>

            {/* NETWORK EFFECT */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFBFD] border border-slate-200 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                    Flywheel Dynamics
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-950 mb-2">
                  FROM MEMBERSHIP TO NETWORK EFFECT
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  PEERS GLOBAL is designed around relationships rather than transactions:
                </p>
              </div>

              <div className="relative pl-6 space-y-3 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-[#1D4ED8] before:to-[#E11D48]">
                {[
                  'Membership creates participation.',
                  'Participation creates relationships.',
                  'Relationships create collaboration.',
                  'Collaboration creates outcomes.',
                  'Outcomes create trust.',
                  'Trust strengthens the community.',
                  'And a stronger community creates more possibilities for the next entrepreneur.',
                ].map((step, idx) => (
                  <div key={idx} className="relative text-xs sm:text-sm text-slate-700 font-medium">
                    <span className="absolute -left-[23px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#1D4ED8]" />
                    {step}
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 text-center shadow-xs">
                <p className="text-sm font-bold brand-gradient-text">
                  The community becomes more valuable when people contribute to one another.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE GROWTH ENGINE (LSR FRAMEWORK) ── */}
      <section className="py-16 sm:py-24 bg-[#F8FAFD] border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-2xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                LSR Framework
              </span>
              <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950">
              THE GROWTH ENGINE
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              The ecosystem is designed around the continuous movement of Learning, Self, and Resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-50 to-rose-50 border border-slate-200 text-[#1D4ED8] flex items-center justify-center font-bold text-base mb-3">
                L
              </div>
              <h3 className="text-lg font-serif font-bold text-slate-950">LEARNING</h3>
              <p className="text-xs font-bold brand-gradient-text">What entrepreneurs know.</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tacit operating knowledge, market playbooks, mistakes navigated, and hard-earned domain insights.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-50 to-rose-50 border border-slate-200 text-[#1D4ED8] flex items-center justify-center font-bold text-base mb-3">
                S
              </div>
              <h3 className="text-lg font-serif font-bold text-slate-950">SELF</h3>
              <p className="text-xs font-bold brand-gradient-text">
                Who they become through experience, reflection and leadership.
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Emotional resilience, character under pressure, leadership stewardship, and self-awareness as a builder.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-50 to-rose-50 border border-slate-200 text-[#1D4ED8] flex items-center justify-center font-bold text-base mb-3">
                R
              </div>
              <h3 className="text-lg font-serif font-bold text-slate-950">RESOURCES</h3>
              <p className="text-xs font-bold brand-gradient-text">
                What they can access, share and create together.
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Relational capital, digital infrastructure, distribution networks, and collective purchasing power.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 max-w-2xl mx-auto text-center space-y-1">
            <p className="text-sm font-serif font-bold text-slate-950">
              <span className="brand-gradient-text">LSR:</span> A simple way of thinking about entrepreneurial growth.
            </p>
            <p className="text-xs text-slate-600">
              The stronger each becomes, the greater the possibility of contribution.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHERE WE ARE & WHAT WE ARE BUILDING TOWARD ── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="space-y-8">
            <div className="max-w-3xl space-y-3">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                  Trajectory &amp; Governance
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950">
                WHERE WE ARE
              </h2>
              <p className="text-slate-700 text-base sm:text-lg">
                PEERS GLOBAL is building the foundations of this ecosystem through its community, Circles, collaboration experiences, leadership pathways, initiatives, media and impact programmes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Operational Stage',
                  metric: 'Foundation & Expansion',
                  desc: '19+ operating cluster charters activated across industrial hubs.',
                },
                {
                  title: 'Community & Circles',
                  metric: 'Governed Circles',
                  desc: 'Zero-conflict industry seats with peer-vetted onboarding.',
                },
                {
                  title: 'Geographic Reach',
                  metric: 'National Scale (Bharat)',
                  desc: 'Active clusters across tier-1, tier-2 manufacturing hubs.',
                },
                {
                  title: 'Business & Financial Model',
                  metric: 'Multi-Pronged Revenue',
                  desc: 'Annual memberships, corporate partnerships, masterclasses, and conclave assets.',
                },
                {
                  title: 'Growth Trajectory',
                  metric: 'Relational Density',
                  desc: 'High-retention network density over low-touch member volume.',
                },
                {
                  title: 'Impact Metric',
                  metric: '1 Action = 1 Life',
                  desc: 'Direct MSME mentorship, student fellowships, and foundation programs.',
                },
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#F8FAFD] border border-slate-200 space-y-1.5 shadow-2xs">
                  <span className="text-xs font-semibold text-slate-500 block">{item.title}</span>
                  <div className="text-xl font-serif font-bold text-slate-950">{item.metric}</div>
                  <p className="text-xs text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* WHAT WE ARE BUILDING TOWARD */}
          <div className="space-y-8 pt-8 border-t border-slate-200">
            <div className="max-w-3xl space-y-2">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                  Long-Term Lifecycle
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950">
                WHAT WE ARE BUILDING TOWARD
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                The long-term ambition is larger than membership. It is about creating an environment in which entrepreneurs can move through a complete journey:
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {JOURNEY_STAGES.map((stg) => (
                <div key={stg.step} className="p-5 rounded-xl bg-[#FAFBFD] border border-slate-200 space-y-1 shadow-2xs">
                  <span className="text-xs font-mono font-bold brand-gradient-text block">
                    {stg.step} · {stg.title}
                  </span>
                  <p className="text-xs text-slate-700">{stg.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── THE LARGER VISION & WHAT MAKES THIS DIFFERENT ── */}
      <section className="py-16 sm:py-24 bg-[#F8FAFD] border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* THE LARGER VISION */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                    Generational Target
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950">
                  THE LARGER VISION
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  The ambition of PEERS GLOBAL is expressed through a simple principle:
                </p>

                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50/80 to-rose-50/50 border border-slate-200">
                    <span className="text-xs font-bold brand-gradient-text uppercase tracking-wider block">
                      Core Operating Principle
                    </span>
                    <p className="text-xl font-serif font-bold text-slate-950 mt-1">1 Action = 1 Life Impacted.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      2030 Aspiration
                    </span>
                    <p className="text-xl font-serif font-bold text-slate-950 mt-1">
                      1 Million+ Entrepreneurs to Impact by 2030.
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  The significance of these ambitions will ultimately depend not on the words themselves, but on the systems, people, evidence and sustained action behind them.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <p className="text-sm font-bold text-slate-950">
                  The ambition is large. The standard of proof must be equally large.
                </p>
              </div>
            </div>

            {/* WHAT MAKES THIS DIFFERENT */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                    Strategic Differentiation
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950">
                  WHAT MAKES THIS DIFFERENT
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  PEERS GLOBAL is not being built simply around the idea of acquiring more members. It is being built around the idea of <strong className="text-slate-950">increasing meaningful participation.</strong>
                </p>

                <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <div className="p-3 rounded-xl bg-[#F8FAFD] border border-slate-200 flex items-center justify-between">
                    <span className="text-slate-600">A larger database</span>
                    <span className="text-rose-600 font-semibold">≠ A stronger community</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F8FAFD] border border-slate-200 flex items-center justify-between">
                    <span className="text-slate-600">More contacts</span>
                    <span className="text-rose-600 font-semibold">≠ More relationships</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F8FAFD] border border-slate-200 flex items-center justify-between">
                    <span className="text-slate-600">More visibility</span>
                    <span className="text-rose-600 font-semibold">≠ More trust</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F8FAFD] border border-slate-200 flex items-center justify-between">
                    <span className="text-slate-600">More transactions</span>
                    <span className="text-rose-600 font-semibold">≠ More collaboration</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50/80 to-rose-50/50 border border-slate-200">
                <p className="text-sm font-bold text-slate-950">The objective is not simply scale.</p>
                <p className="text-xs brand-gradient-text font-semibold mt-0.5">It is meaningful scale.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INVESTMENT PRINCIPLES & GOVERNED DISCLOSURE ── */}
      <section id="investment-principles" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                Governance &amp; Transparency
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950">
              INVESTMENT PRINCIPLES
            </h2>
            <p className="text-slate-700 text-base sm:text-lg">
              Any future investment conversation should begin with clarity. Investors should be able to understand:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INVESTMENT_PRINCIPLES.map((principle, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#F8FAFD] border border-slate-200 flex items-start gap-3 shadow-2xs"
              >
                <CheckCircle2 className="w-5 h-5 text-[#1D4ED8] shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-800">{principle}</span>
              </div>
            ))}
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-50/70 to-rose-50/50 border border-slate-200 text-center max-w-3xl mx-auto space-y-1 shadow-xs">
            <p className="text-base sm:text-lg font-serif font-bold text-slate-950">
              “We would rather leave a number unpublished than publish a number that cannot be defended.”
            </p>
            <p className="text-xs brand-gradient-text font-semibold">
              Trust begins with what you choose not to exaggerate.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#FAFBFD] border border-slate-200 max-w-4xl mx-auto space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
              <Lock className="w-4 h-4 text-[#1D4ED8]" />
              <span className="brand-gradient-text">THE INVESTMENT OPPORTUNITY &amp; CAPITAL CHARTER</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-950">
              Governed Capital Raising Protocol
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Active fundraise status, instruments, capital quantum, use of funds, investment terms, and eligible investor participation details are verified directly with our professional advisers and presented exclusively under formal non-disclosure and accredited investor qualifications.
            </p>
          </div>
        </div>
      </section>

      {/* ── A CONVERSATION BEFORE A COMMITMENT & HARD QUESTIONS ── */}
      <section className="py-16 sm:py-24 bg-[#F8FAFD] border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          <div className="max-w-2xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                Mutual Due Diligence
              </span>
              <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950">
              A CONVERSATION BEFORE A COMMITMENT
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Investment is a serious relationship. It should begin with understanding. Not pressure. Not artificial urgency. Not promises.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 text-left shadow-sm space-y-6">
            <h3 className="text-lg font-serif font-bold text-slate-950 text-center sm:text-left">
              The right conversation should allow both sides to ask difficult questions:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {HARD_QUESTIONS.map((q, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#F8FAFD] border border-slate-200 flex items-center gap-3 shadow-2xs"
                >
                  <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-50 to-rose-50 border border-slate-200 text-[#1D4ED8] flex items-center justify-center font-bold text-xs shrink-0 font-mono">
                    ?
                  </span>
                  <span className="text-sm font-medium text-slate-800">{q}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 max-w-2xl mx-auto space-y-2 shadow-xs">
            <p className="text-sm font-bold text-slate-950">
              BUILT WITH AMBITION. PRESENTED WITH DISCIPLINE.
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              PEERS GLOBAL has a large ambition. But ambition is not evidence. A vision is not traction. A projection is not performance. And a promise is not a result. When there is something real to report, we report it.
            </p>
          </div>
        </div>
      </section>

      {/* ── FOR PROSPECTIVE INVESTORS / FORM ── */}
      <section id="investor-enquiry" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                Dialogue &amp; Alignment
              </span>
              <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950">
              FOR PROSPECTIVE INVESTORS
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              If you are interested in understanding PEERS GLOBAL as an investment opportunity, we would like to understand your perspective as well.
            </p>
          </div>

          <div className="bg-[#FAFBFD] rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-rose-50 border border-slate-200 text-[#1D4ED8] rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-950">Investor Enquiry Transmitted</h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                  Thank you for reaching out. Our executive leadership and founder desk will review your details and initiate a confidential dialogue.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-800">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Mehta"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#1D4ED8] text-slate-900"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-800">Organisation / Fund / Entity *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Horizon Capital / Single Family Office"
                      value={formData.organisation}
                      onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#1D4ED8] text-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-800">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@fund.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#1D4ED8] text-slate-900"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-800">Phone / Mobile *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#1D4ED8] text-slate-900"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-800">Investment Profile *</label>
                    <select
                      value={formData.investmentBackground}
                      onChange={(e) => setFormData({ ...formData, investmentBackground: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#1D4ED8] text-slate-900"
                    >
                      <option value="Angel / Family Office">Angel / Family Office</option>
                      <option value="Venture Capital Fund">Venture Capital Fund</option>
                      <option value="Private Equity / Growth">Private Equity / Growth</option>
                      <option value="Strategic Corporate Investor">Strategic Corporate Investor</option>
                      <option value="Institutional MSME Financier">Institutional MSME Financier</option>
                      <option value="Other Accredited Entity">Other Accredited Entity</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-slate-800">What interests you about PEERS GLOBAL? *</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Tell us what draws you to our community of collaboration model..."
                    value={formData.interests}
                    onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#1D4ED8] text-slate-900"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-800">Opportunity Type Exploring *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Seed / Strategic Alliance / Growth Equity"
                      value={formData.stageOrOpportunity}
                      onChange={(e) => setFormData({ ...formData, stageOrOpportunity: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#1D4ED8] text-slate-900"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-800">Engagement Mode *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Executive Briefing / 1-on-1 Dialogue"
                      value={formData.engagementMode}
                      onChange={(e) => setFormData({ ...formData, engagementMode: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#1D4ED8] text-slate-900"
                    />
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
                  <p className="text-xs text-slate-500">
                    Confidential &amp; governed disclosure protocol strictly applied.
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-4 rounded-full font-bold bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:from-[#1E40AF] hover:to-[#BE123C] text-white shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 uppercase tracking-wider shrink-0 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      'Transmitting Enquiry...'
                    ) : (
                      <>
                        Submit Investor Enquiry <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FINAL HOME-THEMED CALL TO ACTION ── */}
      <section className="relative isolate overflow-hidden bg-[#040F24] text-white py-20 md:py-28">
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

        {/* Subtle geometric orbital line art */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-[min(58vw,760px)] opacity-35">
          <svg viewBox="0 0 760 520" fill="none" className="h-full w-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M760 40C555 45 405 145 375 310C355 423 265 493 70 520" stroke="currentColor" strokeWidth="1" className="text-blue-300/30" />
            <path d="M760 120C590 125 470 205 445 335C424 442 335 500 180 520" stroke="currentColor" strokeWidth="1" strokeDasharray="5 8" className="text-sky-200/25" />
            <path d="M760 215C640 220 565 278 540 370C519 446 470 490 390 520" stroke="currentColor" strokeWidth="1" className="text-blue-200/20" />
            <circle cx="540" cy="370" r="4" fill="currentColor" className="text-sky-300/60" />
            <circle cx="540" cy="370" r="13" stroke="currentColor" strokeWidth="1" className="text-sky-300/25" />
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2.5">
              <span className="h-[1.5px] w-6 bg-white/70" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
                INTERESTED IN THE JOURNEY?
              </span>
              <span className="h-[1.5px] w-6 bg-white/70" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15]">
              Build patiently. Build honestly. <br />
              <span className="italic text-cyan-200">Build something that matters.</span>
            </h2>
            <p className="max-w-2xl mx-auto text-white/90 text-sm sm:text-base leading-relaxed">
              If you are genuinely interested in understanding what PEERS GLOBAL is building, we welcome a conversation.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <a
              href="#investor-enquiry"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white shadow-[0_4px_20px_rgba(225,29,72,0.40)] hover:from-[#1E40AF] hover:to-[#BE123C] hover:shadow-[0_8px_28px_rgba(225,29,72,0.60)] transition-all hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Investor Enquiry →
            </a>
            <Link
              href="/initiatives"
              className="px-6 py-3.5 rounded-full bg-white/[0.08] text-white border border-white/40 hover:bg-white/15 hover:border-white/70 transition-all backdrop-blur-sm"
            >
              Explore PEERS GLOBAL →
            </Link>
            <Link
              href="/our-story"
              className="px-6 py-3.5 rounded-full bg-white/[0.08] text-white border border-white/40 hover:bg-white/15 hover:border-white/70 transition-all backdrop-blur-sm"
            >
              Read Our Story →
            </Link>
            <Link
              href="/founder"
              className="px-6 py-3.5 rounded-full bg-white/[0.08] text-white border border-white/40 hover:bg-white/15 hover:border-white/70 transition-all backdrop-blur-sm"
            >
              Meet the Founder →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
