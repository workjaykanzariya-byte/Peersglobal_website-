'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  Briefcase,
  ChevronRight,
  ArrowRight,
  MapPin,
  CheckCircle2,
  HeartHandshake,
  Send,
  Sparkles,
  Search,
  Compass,
  Check,
  ShieldCheck,
  BookOpen
} from 'lucide-react'

const VALUES_DATA = [
  {
    title: 'Curiosity',
    desc: 'You want to understand before you assume.',
    icon: Search
  },
  {
    title: 'Ownership',
    desc: 'You take responsibility for what you have committed to.',
    icon: ShieldCheck
  },
  {
    title: 'Respect',
    desc: 'You understand that every person brings a different story, experience and perspective.',
    icon: HeartHandshake
  },
  {
    title: 'Learning',
    desc: 'You remain willing to learn — even when you already know something.',
    icon: BookOpen
  },
  {
    title: 'Contribution',
    desc: 'You do not ask only, “What do I get?” You also ask, “What can I make better?”',
    icon: Sparkles
  },
  {
    title: 'Possibility',
    desc: 'You can see what something could become without losing sight of what it is today.',
    icon: Compass
  }
]

const CULTURE_POINTS = [
  {
    title: 'Clarity, Honesty & Initiative',
    desc: 'We value proactive thinkers who communicate transparently, move fast, and tackle difficult operational questions without waiting for permission.'
  },
  {
    title: 'Respect for the Human Being Behind the Role',
    desc: 'A colleague is not simply a resource. A member is not simply a user. An entrepreneur is not simply a customer. The way we see people shapes the way we build.'
  },
  {
    title: 'High-Context & Interdisciplinary',
    desc: 'The responsibilities can evolve. You work alongside technologists, media producers, community stewards, and industrial veterans from diverse backgrounds.'
  }
]

const OPEN_ROLES = [
  {
    title: 'City Community Operations Lead',
    location: 'Ahmedabad / On-site',
    team: 'Community Governance & Chapters',
    responsibleFor: 'Orchestrating monthly Circle meetings, training founder committees, and upholding cultural consistency across industrial chapter clusters.',
    lookingFor: '3+ years experience in community management, executive operations, or stakeholder relations with a deep empathy for MSME entrepreneurs.',
    successLooksLike: 'Thriving, zero-conflict Circles with high attendance density and verified collaborative outcomes.',
    closingDate: 'Rolling Basis'
  },
  {
    title: 'Senior Mobile Engineer (Flutter / React Native)',
    location: 'Ahmedabad / Hybrid',
    team: 'Technology & Digital Infrastructure',
    responsibleFor: 'Architecting and scaling the Unity Mobile App, real-time collaboration chats, hot-seat queues, and the Peers Coin contribution ledger.',
    lookingFor: '4+ years building high-performance mobile applications with offline sync, clean state architecture, and enterprise security.',
    successLooksLike: 'Lightning-fast, intuitive digital experience trusted by hundreds of high-growth business owners daily.',
    closingDate: 'Open'
  },
  {
    title: 'Senior Producer & Video Director — Vyapaar Jagat TV',
    location: 'Ahmedabad / On-site',
    team: 'Media & Storytelling',
    responsibleFor: 'Directing, shooting, and producing documentary-grade episodes, candid talks, and conclave stage broadcasts chronicling authentic founder journeys.',
    lookingFor: 'Demonstrated portfolio in long-form business journalism, broadcast production, or documentary filmmaking with masterful narrative sense.',
    successLooksLike: 'Captivating visual storytelling that honors honest entrepreneurial grit without manufactured hype.',
    closingDate: 'Rolling Basis'
  },
  {
    title: 'Senior Brand & Publication Designer',
    location: 'Ahmedabad / Hybrid',
    team: 'Brand & Editorial Design',
    responsibleFor: 'Designing Circle Magazines, annual Coffee Table Books, conclave identity systems, and premium digital interface tokens.',
    lookingFor: 'Exquisite typography taste, editorial layout mastery (InDesign / Figma), and a strong portfolio in print and digital elegance.',
    successLooksLike: 'A world-class visual standard that gives Indian MSME achievements the dignity and prestige they deserve.',
    closingDate: 'Open'
  }
]

export function CareersClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    currentRole: '',
    experienceArea: 'Community & Operations',
    location: '',
    whyPeers: '',
    contribution: '',
    workType: '',
    portfolioOrLinkedin: ''
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
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-[#0062D2]">
      {/* ── Breadcrumb Navigation ── */}
      <div className="border-b border-slate-200/70 bg-white/90 backdrop-blur-md sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-slate-500 font-medium">
            <Link href="/" className="hover:text-[#0062D2] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/about" className="hover:text-[#0062D2] transition-colors">
              About
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold">Careers</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-[#0062D2] border border-blue-200">
              <Briefcase className="w-3.5 h-3.5" />
              Join the Ecosystem
            </span>
          </div>
        </div>
      </div>

      {/* ── Signature Hero Section (Home & Circles Master Design Layout) ── */}
      <section className="relative overflow-hidden bg-[#040F24] text-white pt-0 pb-10 sm:pb-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Home-style full-bleed hero with video backdrop */}
          <div className="min-h-[440px] lg:min-h-[480px] flex items-center">
            
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-10 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

            {/* Media Background Layer (Right ~60% fading into white on the left) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
            >
              {/* Active Video Background */}
              <video
                src="/videos/homepage-hero-bg.mp4"
                poster="/images/circles-hero-new.jpg"
                autoPlay
                loop
                muted
                playsInline
                className="size-full object-cover object-center opacity-90"
              />

              {/* Dark scrim matching the home hero */}
              <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(2,8,23,0.92)_0%,rgba(4,15,36,0.78)_45%,rgba(4,15,36,0.55)_100%)] pointer-events-none" />

              {/* Top-Right Script Typography */}
              <div className="hidden">
                <p className="text-lg sm:text-xl text-white/95 leading-tight" style={{ fontFamily: 'var(--font-script)' }}>
                  Build With Purpose
                </p>
                <p className="text-lg sm:text-xl text-white/95 leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Lead With Impact
                </p>
                <p className="text-xl sm:text-2xl text-amber-300 font-medium leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Shape The Future
                </p>
              </div>

              {/* Bottom-Right Frosted Glass Pill */}
              <div className="hidden">
                <div className="rounded-xl border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2 shadow-lg text-left">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/70">
                    JOIN THE ECOSYSTEM
                  </p>
                  <p className="text-xs font-bold tracking-wider text-white">
                    CAREERS AT PEERS GLOBAL
                  </p>
                </div>
              </div>
            </div>

            {/* Left Content Area */}
            <div className="relative z-10 w-full p-6 sm:p-8 lg:p-10">
              <div className="max-w-xl lg:max-w-2xl flex flex-col items-start text-left">
                
                {/* Eyebrow with brand gradient bar */}
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/90">
                    CAREERS AT PEERS GLOBAL
                  </span>
                </div>

                {/* H1 Heading */}
                <h1 className="text-3xl sm:text-5xl lg:text-[48px] font-semibold text-white tracking-tight leading-[1.14] mb-3">
                  Build something that helps <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-rose-400">
                    other people build.
                  </span>
                </h1>

                {/* Subtitle & Descriptions */}
                <p className="text-base sm:text-xl text-slate-200 font-normal leading-relaxed mb-4 max-w-2xl">
                  PEERS GLOBAL is building an ecosystem around entrepreneurs, relationships, collaboration, learning, leadership and impact.
                </p>

                {/* Featured Highlight Quote Card */}
                <div className="border-l-2 border-[#E11D48] pl-3 py-0.5 mb-6 max-w-xl">
                  <p className="italic text-white/95 text-sm sm:text-base font-medium">
                    “That requires people who care about what they are building — and why it matters.”
                  </p>
                  <p className="text-xs text-slate-300 mt-1">
                    If that sounds like you, there may be a place for you here.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <a
                    href="#open-roles"
                    className="rounded-full bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] text-white px-6 py-3 text-xs font-bold tracking-wider shadow-md hover:shadow-lg transition-all hover:scale-105 inline-flex items-center gap-2 uppercase"
                  >
                    <span>View Open Roles</span>
                    <ArrowRight className="size-3.5" />
                  </a>

                  <a
                    href="#general-application"
                    className="rounded-full border border-white/25 hover:bg-white/20 bg-transparent text-white px-5 py-3 text-xs font-bold tracking-wider transition-all hover:scale-105 inline-flex items-center gap-2 uppercase"
                  >
                    <span>General Application</span>
                  </a>

                  <a
                    href="#who-we-hire"
                    className="rounded-full border border-white/25 hover:bg-white/20 bg-transparent text-white px-5 py-3 text-xs font-bold tracking-wider transition-all hover:scale-105 inline-flex items-center gap-2 uppercase"
                  >
                    <span>Who We Hire</span>
                  </a>
                </div>

              </div>
            </div>

          </div>

          {/* 4-Item Floating Stats Bar */}
          <div className="relative z-10 mt-4 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { val: '4 Key Roles', label: 'Active Open Positions', sub: 'Engineering, Ops, Media & Design' },
              { val: '100% Autonomy', label: 'High-Context Culture', sub: 'Radical clarity & ownership' },
              { val: 'Hybrid / Onsite', label: 'Ahmedabad HQ & Remote', sub: 'Flexible collaborative model' },
              { val: '₹0 Fee Policy', label: 'Direct Review Process', sub: 'Zero agencies, founder reviewed' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200/90 p-3 sm:p-3.5 shadow-2xs hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="font-serif text-base sm:text-lg font-bold bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">
                  {stat.val}
                </div>
                <div className="text-xs font-bold text-slate-900 mt-0.5">{stat.label}</div>
                <div className="text-[10px] text-slate-500 font-normal">{stat.sub}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── WHO WE HIRE ── */}
      <section id="who-we-hire" className="py-14 sm:py-18 bg-white border-b border-slate-200/80 relative overflow-hidden">
        {/* Ambient background blur */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -left-20 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-4 border-b border-slate-200/80">
            <div className="max-w-2xl space-y-2">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                  MINDSET &amp; STANDARDS
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 tracking-tight">
                Who We Hire
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                We look for people who bring more than a résumé. You may come from technology, community, media, operations, marketing, partnerships, design, or business development.
              </p>
            </div>

            {/* Quick summary badge */}
            <div className="flex items-center gap-2.5 bg-slate-50 p-2 rounded-2xl border border-slate-200/90 shadow-2xs self-start lg:self-auto">
              <div className="px-4 py-2 rounded-xl bg-blue-50 border border-blue-100 text-center">
                <span className="block font-serif text-base sm:text-lg font-bold text-[#1D4ED8]">6 Pillars</span>
                <span className="text-[10px] uppercase font-bold text-slate-600 tracking-wider">Human DNA</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-white border border-slate-200/80 text-center">
                <span className="block font-serif text-base sm:text-lg font-bold text-slate-900">Give First</span>
                <span className="text-[10px] uppercase font-bold text-slate-600 tracking-wider">Core Ethos</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                title: 'Curiosity',
                desc: 'You want to understand before you assume. You dive deep into the real human problems entrepreneurs face.',
                tag: 'Deep Inquiry',
                icon: Search,
                color: 'text-blue-600 bg-blue-50 border-blue-100',
                glow: 'group-hover:bg-blue-500/10',
              },
              {
                title: 'Ownership',
                desc: 'You take radical responsibility for what you have committed to. No excuses, only proactive solutions.',
                tag: 'Accountability',
                icon: ShieldCheck,
                color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
                glow: 'group-hover:bg-indigo-500/10',
              },
              {
                title: 'Respect',
                desc: 'You understand that every person brings a different story, experience, and background worthy of dignity.',
                tag: 'Human First',
                icon: HeartHandshake,
                color: 'text-rose-600 bg-rose-50 border-rose-100',
                glow: 'group-hover:bg-rose-500/10',
              },
              {
                title: 'Learning',
                desc: 'You remain eager to learn — even when you already know something. Humility powers continuous growth.',
                tag: 'Beginner Mindset',
                icon: BookOpen,
                color: 'text-amber-600 bg-amber-50 border-amber-100',
                glow: 'group-hover:bg-amber-500/10',
              },
              {
                title: 'Contribution',
                desc: 'You do not ask only, “What do I get?” You also ask, “What can I make better for the entire room?”',
                tag: 'Value Multiplier',
                icon: Sparkles,
                color: 'text-purple-600 bg-purple-50 border-purple-100',
                glow: 'group-hover:bg-purple-500/10',
              },
              {
                title: 'Possibility',
                desc: 'You can see what something could become without losing sight of the operational rigor required today.',
                tag: 'Visionary Execution',
                icon: Compass,
                color: 'text-cyan-600 bg-cyan-50 border-cyan-100',
                glow: 'group-hover:bg-cyan-500/10',
              },
            ].map((val, idx) => {
              const Icon = val.icon
              return (
                <div
                  key={idx}
                  className="group relative p-5 sm:p-6 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Hover Ambient Glow */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-transparent rounded-full blur-2xl ${val.glow} transition-colors pointer-events-none`} />

                  <div className="space-y-3 relative z-10">
                    <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <div className={`size-10 rounded-xl border flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform ${val.color}`}>
                        <Icon className="size-4.5" />
                      </div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-700">
                        {val.tag}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="text-base sm:text-lg font-serif font-bold text-slate-950 group-hover:text-[#1D4ED8] transition-colors leading-snug">
                        {val.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Takeaway */}
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs relative z-10">
                    <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                      Core Mindset Standard
                    </span>
                    <ChevronRight className="size-4 text-slate-400 group-hover:text-[#1D4ED8] group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── WORKING HERE (OUR CULTURE) ── */}
      <section className="py-14 sm:py-18 bg-[#F8FAFD] border-b border-slate-200/80 relative overflow-hidden">
        {/* Ambient background blur */}
        <div className="absolute top-1/3 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          <div className="max-w-2xl space-y-2 pb-4 border-b border-slate-200/80">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                ENVIRONMENT &amp; ETHOS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 tracking-tight">
              Working Here
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              We are building a culture, not just filling positions. The work moves quickly, responsibilities evolve, and you work with people from diverse enterprise backgrounds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {CULTURE_POINTS.map((pt, idx) => (
              <div
                key={idx}
                className="group relative p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="size-10 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 text-[#1D4ED8] border border-blue-100 flex items-center justify-center font-mono font-bold text-xs shadow-2xs group-hover:scale-105 transition-transform">
                      0{idx + 1}
                    </span>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      ETHOS PILLAR
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-base sm:text-lg font-serif font-bold text-slate-950 group-hover:text-[#1D4ED8] transition-colors leading-snug">
                      {pt.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-800 relative z-10">
                  <span className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                    Non-Negotiable Value
                  </span>
                  <ChevronRight className="size-4 text-slate-400 group-hover:text-[#1D4ED8] group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-blue-50/90 via-white to-rose-50/70 border border-blue-200/80 text-center max-w-3xl mx-auto shadow-sm space-y-1.5">
            <p className="text-xs sm:text-sm text-slate-800 font-serif italic leading-relaxed">
              “A colleague is not simply a resource. A member is not simply a user. An entrepreneur is not simply a customer. <br />
              <strong className="text-slate-950 not-italic font-bold block pt-1.5 text-sm sm:text-base">
                The way we see people shapes the way we build.”
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* ── OPEN ROLES ── */}
      <section id="open-roles" className="py-14 sm:py-18 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-4 border-b border-slate-200/80">
            <div className="max-w-2xl space-y-2">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                  CURRENT OPPORTUNITIES
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 tracking-tight">
                Open Roles
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                Where there is a current opportunity, you will find it here. Every published role clearly identifies what you will be responsible for, what we are looking for, and what success looks like.
              </p>
            </div>

            <div className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono font-semibold text-slate-600">
              Zero Artificial Vacancies &bull; Direct Founder Review
            </div>
          </div>

          <div className="space-y-6">
            {OPEN_ROLES.map((role, idx) => (
              <div
                key={idx}
                className="group p-6 sm:p-8 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 space-y-6"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-200/80 pb-5">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 text-[#1D4ED8] border border-blue-100">
                        {role.team}
                      </span>
                      <span className="text-xs font-mono font-semibold text-slate-400">
                        OPPORTUNITY #{String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-950 group-hover:text-[#1D4ED8] transition-colors">
                      {role.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-600">
                      <span className="flex items-center gap-1 font-semibold text-slate-800">
                        <MapPin className="size-3.5 text-[#1D4ED8]" />
                        {role.location}
                      </span>
                      <span>&bull;</span>
                      <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                        Closing Date: {role.closingDate}
                      </span>
                    </div>
                  </div>

                  <a
                    href="#general-application"
                    onClick={() => setFormData((prev) => ({ ...prev, workType: role.title }))}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider shrink-0 transition-all shadow-sm hover:shadow-md flex items-center gap-1.5 self-start lg:self-auto cursor-pointer"
                  >
                    <span>Apply for this Role</span>
                    <ArrowRight className="size-3.5" />
                  </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-1.5 shadow-2xs">
                    <span className="text-[11px] font-mono font-bold text-slate-900 uppercase tracking-wider block border-b border-slate-100 pb-1.5">
                      What you will be responsible for:
                    </span>
                    <p className="text-slate-600 leading-relaxed font-normal">{role.responsibleFor}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-1.5 shadow-2xs">
                    <span className="text-[11px] font-mono font-bold text-blue-700 uppercase tracking-wider block border-b border-slate-100 pb-1.5">
                      What we are looking for:
                    </span>
                    <p className="text-slate-600 leading-relaxed font-normal">{role.lookingFor}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-1.5 shadow-2xs">
                    <span className="text-[11px] font-mono font-bold text-emerald-700 uppercase tracking-wider block border-b border-slate-100 pb-1.5">
                      What success looks like:
                    </span>
                    <p className="text-slate-600 leading-relaxed font-normal">{role.successLooksLike}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DON'T SEE YOUR ROLE? & BEFORE YOU APPLY ── */}
      <section className="py-14 sm:py-18 bg-[#F8FAFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* DON'T SEE YOUR ROLE? */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] brand-gradient-text">
                    Evolution &amp; Fit
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-950">
                  Don&apos;t See Your Role?
                </h2>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                  That does not mean the conversation ends here. PEERS GLOBAL is evolving. The work we need tomorrow may not fit neatly into today&apos;s organisation chart.
                </p>
                <p className="text-slate-600 text-xs leading-relaxed">
                  If you believe your experience, capability or perspective could contribute meaningfully to what we are building, tell us. We may discover an alignment through your application.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#F8FAFD] border border-slate-200">
                <a
                  href="#general-application"
                  className="text-xs font-bold brand-gradient-text hover:opacity-80 flex items-center gap-1.5 uppercase tracking-wider"
                >
                  <span>Submit General Application</span>
                  <ArrowRight className="size-3.5" />
                </a>
              </div>
            </div>

            {/* BEFORE YOU APPLY */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] brand-gradient-text">
                    Authenticity Over Polish
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-950">
                  Before You Apply
                </h2>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                  You do not need to write the perfect application. We would rather understand:
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {[
                    'What you have built',
                    'What you have learned',
                    'What you care about',
                    'What you are good at',
                    'What you are still learning',
                    'Why this mission matters to you',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100">
                      <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                      <span className="font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-blue-50/70 to-rose-50/40 border border-blue-100 text-xs text-slate-800 font-semibold">
                Honesty and self-awareness carry more weight than buzzwords.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GENERAL APPLICATION / APPLICATION DESK ── */}
      <section id="general-application" className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#F8FAFD] to-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Column: Context & Guidelines */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] brand-gradient-text">
                    APPLICATION DESK
                  </span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 tracking-tight leading-tight">
                  General Application
                </h2>
                
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Tell us about yourself, what drives you, and what you would like to build together with PEERS GLOBAL.
                </p>
              </div>

              {/* Direct Review Guarantee Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
                <div className="flex items-center gap-2.5 text-xs font-bold text-slate-900 uppercase tracking-wider">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Direct Founder &amp; Steward Review
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every submission is reviewed directly by our founding team and department stewards. We do not use automated keyword filters.
                </p>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>Response Horizon</span>
                  <span className="font-bold text-slate-800">5 – 7 Working Days</span>
                </div>
              </div>

              {/* Quick Application Checklist */}
              <div className="p-5 rounded-2xl bg-[#040F24] text-white space-y-3 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-sky-400">
                  What We Value Most
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>Clarity on what you have actually built or shipped</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>Real alignment with our collaborative ecosystem mission</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>Honest self-awareness of current strengths and learning areas</span>
                  </li>
                </ul>
              </div>

              {/* Quick Direct Email note */}
              <p className="text-xs text-slate-500">
                Prefer email? Write directly to{' '}
                <a href="mailto:careers@peersglobal.com" className="text-[#0062D2] font-semibold hover:underline">
                  careers@peersglobal.com
                </a>
              </p>
            </div>

            {/* Right Column: Sleek Form Architecture */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-lg relative overflow-hidden">
                
                {/* Subtle top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1D4ED8] via-[#0062D2] to-[#E11D48]" />

                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="size-16 bg-blue-50 border border-blue-200 text-[#0062D2] rounded-full flex items-center justify-center mx-auto shadow-sm">
                      <Check className="size-8" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-slate-950">Application Transmitted</h3>
                    <p className="text-slate-600 max-w-md mx-auto text-xs sm:text-sm leading-relaxed">
                      Thank you for sharing your journey and vision with us. Our team reviews every genuine application carefully and will reach out if there is alignment.
                    </p>
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm"
                      >
                        Submit Another Profile
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 text-xs sm:text-sm">
                    
                    {/* Header inside form */}
                    <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                        Candidate Profile Details
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        * Required fields
                      </span>
                    </div>

                    {/* Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="font-bold text-slate-900 text-xs">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Pooja Dave"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 focus:bg-white focus:outline-none focus:border-[#0062D2] text-slate-900 text-xs sm:text-sm transition-all"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-bold text-slate-900 text-xs">Work Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="pooja@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 focus:bg-white focus:outline-none focus:border-[#0062D2] text-slate-900 text-xs sm:text-sm transition-all"
                        />
                      </div>
                    </div>

                    {/* Phone, Role, Location */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="space-y-1.5">
                        <label className="font-bold text-slate-900 text-xs">Phone Number *</label>
                        <input
                          type="tel"
                          inputMode="numeric"
                          maxLength={10}
                          pattern="[0-9]{10}"
                          required
                          placeholder="9876543210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 focus:bg-white focus:outline-none focus:border-[#0062D2] text-slate-900 text-xs sm:text-sm transition-all"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-bold text-slate-900 text-xs">Current Role *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Product Lead"
                          value={formData.currentRole}
                          onChange={(e) => setFormData({ ...formData, currentRole: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 focus:bg-white focus:outline-none focus:border-[#0062D2] text-slate-900 text-xs sm:text-sm transition-all"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-bold text-slate-900 text-xs">Current Location *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ahmedabad, Surat"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 focus:bg-white focus:outline-none focus:border-[#0062D2] text-slate-900 text-xs sm:text-sm transition-all"
                        />
                      </div>
                    </div>

                    {/* Area of Experience & Target Role */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="font-bold text-slate-900 text-xs">Area of Experience *</label>
                        <select
                          value={formData.experienceArea}
                          onChange={(e) => setFormData({ ...formData, experienceArea: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 focus:bg-white focus:outline-none focus:border-[#0062D2] text-slate-900 text-xs sm:text-sm transition-all"
                        >
                          <option value="Community & Operations">Community &amp; Operations</option>
                          <option value="Software & Mobile Engineering">Software &amp; Mobile Engineering</option>
                          <option value="Media, Video & Podcast Production">Media, Video &amp; Podcast Production</option>
                          <option value="Brand, Editorial & Graphic Design">Brand, Editorial &amp; Graphic Design</option>
                          <option value="Institutional Partnerships & Growth">Institutional Partnerships &amp; Growth</option>
                          <option value="Marketing & Storytelling">Marketing &amp; Storytelling</option>
                          <option value="General Ecosystem Contribution">Other / General Contribution</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-bold text-slate-900 text-xs">Target Role / Area *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Mobile Engineer or Specific Role"
                          value={formData.workType}
                          onChange={(e) => setFormData({ ...formData, workType: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 focus:bg-white focus:outline-none focus:border-[#0062D2] text-slate-900 text-xs sm:text-sm transition-all"
                        />
                      </div>
                    </div>

                    {/* Why Peers & Contribution */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="font-bold text-slate-900 text-xs">What interests you about PEERS GLOBAL? *</label>
                        <textarea
                          required
                          rows={3}
                          placeholder="What draws you to building this community?"
                          value={formData.whyPeers}
                          onChange={(e) => setFormData({ ...formData, whyPeers: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 focus:bg-white focus:outline-none focus:border-[#0062D2] text-slate-900 text-xs sm:text-sm transition-all resize-none"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-bold text-slate-900 text-xs">What could you contribute here? *</label>
                        <textarea
                          required
                          rows={3}
                          placeholder="Highlight skills, experience, or unique perspectives you bring."
                          value={formData.contribution}
                          onChange={(e) => setFormData({ ...formData, contribution: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 focus:bg-white focus:outline-none focus:border-[#0062D2] text-slate-900 text-xs sm:text-sm transition-all resize-none"
                        />
                      </div>
                    </div>

                    {/* Portfolio / LinkedIn Link */}
                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-900 text-xs">Résumé / Portfolio / LinkedIn Link *</label>
                      <input
                        type="url"
                        required
                        placeholder="https://linkedin.com/in/yourprofile or https://github.com/..."
                        value={formData.portfolioOrLinkedin}
                        onChange={(e) => setFormData({ ...formData, portfolioOrLinkedin: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 focus:bg-white focus:outline-none focus:border-[#0062D2] text-slate-900 text-xs sm:text-sm transition-all"
                      />
                    </div>

                    {/* Submit Bar */}
                    <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
                      <span className="text-[11px] text-slate-500 font-mono">
                        Direct transmission &bull; No automated discard
                      </span>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>{isSubmitting ? 'Transmitting Profile...' : 'Submit Application'}</span>
                        <Send className="size-3.5" />
                      </button>
                    </div>

                  </form>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── FINAL THE PEERS GLOBAL INVITATION BANNER (COMPACT SIGNATURE) ── */}
      <section
        id="contact"
        className="relative py-12 sm:py-16 bg-[#040F24] text-white overflow-hidden border-t border-slate-800"
      >
        {/* Deep celestial radial gradients & luminous aura */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(0,98,210,0.22),transparent_55%),radial-gradient(circle_at_85%_30%,rgba(225,29,72,0.15),transparent_50%),linear-gradient(115deg,#020817_0%,#071a3d_50%,#040f24_100%)]"
        />

        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* SVG Orbital Geometric Lines Background */}
        <div className="absolute -right-16 -top-16 bottom-0 pointer-events-none w-[360px] sm:w-[480px] lg:w-[580px] opacity-20 overflow-hidden flex items-center justify-center">
          <svg viewBox="0 0 600 600" fill="none" className="w-full h-full text-white/30" xmlns="http://www.w3.org/2000/svg">
            <path d="M 50 450 A 420 420 0 0 1 550 50" stroke="currentColor" strokeWidth="1.2" />
            <path d="M 120 520 A 500 500 0 0 1 600 120" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
            <path d="M 220 580 A 460 460 0 0 1 580 220" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            <line x1="280" y1="220" x2="380" y2="120" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
            <circle cx="280" cy="220" r="4.5" fill="#7DD3FC" />
            <circle cx="280" cy="220" r="10" stroke="#7DD3FC" strokeWidth="1" opacity="0.4" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Manifesto, Highlights & Buttons */}
            <div className="lg:col-span-8 flex flex-col items-start space-y-3.5">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-gradient-to-r from-sky-400 to-rose-400 rounded-full" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-400">
                  THE PEERS GLOBAL INVITATION
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
                Come Build With Us
              </h2>

              {/* Manifesto Content */}
              <div className="space-y-1.5 text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-2xl">
                <p>If you believe entrepreneurs should not have to build alone —</p>
                <p>If you believe relationships can create more value than transactions —</p>
                <p>If you believe communities become stronger when people contribute —</p>
                <p className="text-sky-300 font-bold text-xs sm:text-sm pt-0.5">
                  We would like to hear from you.
                </p>
              </div>

              {/* Key Highlights Pill */}
              <div className="py-2 px-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <p className="text-slate-300 text-xs font-medium">
                  <span className="text-sky-300 font-bold">1 Action = 1 Life Impacted</span> &bull; High-Autonomy &bull; Direct Founder Mentorship
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="#open-roles"
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-xs font-bold shadow-[0_4px_16px_rgba(225,29,72,0.35)] hover:shadow-[0_6px_22px_rgba(225,29,72,0.55)] hover:scale-105 transition-all uppercase tracking-wider group cursor-pointer"
                >
                  <span>View Open Roles</span>
                  <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#general-application"
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full border border-white/30 hover:border-white bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md transition-all cursor-pointer"
                >
                  <span>Make a General Application &rarr;</span>
                </a>
              </div>

              {/* Bottom Quote */}
              <p className="text-[11px] text-slate-400 italic font-serif pt-1">
                &ldquo;Build with purpose. Learn with people. Leave something better than you found it.&rdquo;
              </p>
            </div>

            {/* Right Column: Cursive Script Typography Highlight */}
            <div className="lg:col-span-4 text-left lg:text-right select-none pointer-events-none drop-shadow-lg space-y-1 lg:pl-6">
              <p
                className="text-xl sm:text-2xl text-white/70 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Build With
              </p>
              <p
                className="text-2xl sm:text-3xl text-sky-300 leading-tight font-bold"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Purpose &amp; Heart
              </p>
              <p
                className="text-xl sm:text-2xl text-rose-300 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Leave Something Better
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
