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
      <section className="relative overflow-hidden bg-[#FAFBFD] text-slate-900 pt-6 sm:pt-10 pb-12 sm:pb-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Hero Banner with Smooth Left-Fading Media/Video Backdrop */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[36px] bg-white border border-slate-200/80 shadow-sm min-h-[520px] lg:min-h-[580px] flex items-center">
            
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
                  Build With Purpose
                </p>
                <p className="text-xl sm:text-2xl text-white/95 leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Lead With Impact
                </p>
                <p className="text-2xl sm:text-3xl text-amber-300 font-medium leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Shape The Future
                </p>
              </div>

              {/* Bottom-Right Frosted Glass Pill */}
              <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-20 pointer-events-none select-none hidden sm:block">
                <div className="rounded-xl border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2.5 shadow-lg text-left">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/70">
                    JOIN THE TEAM
                  </p>
                  <p className="text-xs font-bold tracking-wider text-white">
                    CAREERS AT PEERS GLOBAL
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
                    CAREERS AT PEERS GLOBAL
                  </span>
                </div>

                {/* H1 Heading */}
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-bold text-slate-950 tracking-tight leading-[1.12] mb-4">
                  Build something that helps <br />
                  <span className="italic bg-gradient-to-r from-[#1D4ED8] via-[#8B5CF6] to-[#E11D48] bg-clip-text text-transparent font-medium">
                    other people build.
                  </span>
                </h1>

                {/* Subtitle & Descriptions */}
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-6 max-w-lg">
                  PEERS GLOBAL is building an ecosystem around entrepreneurs, relationships, collaboration, learning, leadership and impact.
                </p>

                {/* Featured Highlight Quote Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50/90 to-rose-50/50 border border-blue-100/80 mb-8 max-w-lg">
                  <p className="font-serif italic text-slate-900 text-sm sm:text-base font-medium">
                    “That requires people who care about what they are building — and why it matters.”
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    If that sounds like you, there may be a place for you here.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
                  <a
                    href="#open-roles"
                    className="rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider shadow-lg shadow-blue-600/20 transition-all hover:scale-105 inline-flex items-center gap-2 uppercase"
                  >
                    <span>View Open Roles</span>
                    <ArrowRight className="size-4" />
                  </a>

                  <a
                    href="#general-application"
                    className="rounded-full border border-slate-300 hover:border-slate-400 bg-white text-slate-800 px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wider transition-all hover:scale-105 hover:bg-slate-50 shadow-2xs inline-flex items-center gap-2 uppercase"
                  >
                    <span>General Application</span>
                  </a>

                  <a
                    href="#who-we-hire"
                    className="rounded-full border border-slate-300 hover:border-slate-400 bg-white text-slate-700 px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wider transition-all hover:scale-105 hover:bg-slate-50 shadow-2xs inline-flex items-center gap-2 uppercase"
                  >
                    <span>Who We Hire</span>
                  </a>
                </div>

                {/* Quick Info Bar */}
                <div className="flex items-center gap-6 text-xs text-slate-500 pt-2 border-t border-slate-200/80 w-full max-w-lg">
                  <div className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Equal Opportunity Ecosystem</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <Sparkles className="w-4 h-4 text-[#0062D2]" />
                    <span>Hybrid &amp; High-Autonomy Culture</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── WHO WE HIRE ── */}
      <section id="who-we-hire" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">
                Mindset &amp; Standards
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950">
              WHO WE HIRE
            </h2>
            <p className="text-slate-700 text-base sm:text-lg">
              We look for people who bring more than a résumé. You may come from technology, community, media, operations, marketing, partnerships, design, business development, or somewhere we have not thought of yet.
            </p>
            <p className="text-sm font-bold bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent pt-1">
              What matters is how you approach your work:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES_DATA.map((val, idx) => {
              const Icon = val.icon
              return (
                <div
                  key={idx}
                  className="p-7 rounded-2xl bg-[#F8FAFD] border border-slate-200/80 hover:border-slate-400 hover:shadow-md transition-all space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-rose-50 border border-slate-200 flex items-center justify-center text-[#1D4ED8]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-slate-950">{val.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{val.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── WORKING HERE (OUR CULTURE) ── */}
      <section className="py-16 sm:py-24 bg-[#F8FAFD] border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">
                Environment &amp; Ethos
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950">
              WORKING HERE
            </h2>
            <p className="text-slate-700 text-base sm:text-lg">
              We are building a culture, not just filling positions. The work can move quickly. The questions can be difficult. The responsibilities can evolve. And the people you work with may come from very different backgrounds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CULTURE_POINTS.map((pt, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-50 to-rose-50 text-slate-900 border border-slate-200 flex items-center justify-center font-bold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-serif font-bold text-slate-950">{pt.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{pt.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-50/70 via-white to-rose-50/50 border border-slate-200 text-center max-w-3xl mx-auto shadow-xs space-y-2">
            <p className="text-sm sm:text-base text-slate-700 font-serif italic">
              “A colleague is not simply a resource. A member is not simply a user. An entrepreneur is not simply a customer. <br />
              <strong className="text-slate-950 not-italic font-bold block pt-1">
                The way we see people shapes the way we build.”
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* ── OPEN ROLES ── */}
      <section id="open-roles" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">
                Current Opportunities
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950">
              OPEN ROLES
            </h2>
            <p className="text-slate-700 text-base sm:text-lg">
              Where there is a current opportunity, you will find it here. Every published role clearly identifies what you will be responsible for, what we are looking for, and what success looks like.
            </p>
            <p className="text-xs text-slate-500 italic">
              No artificial vacancies. If there is no suitable open position, we will say so.
            </p>
          </div>

          <div className="space-y-6">
            {OPEN_ROLES.map((role, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-10 rounded-3xl bg-[#FAFBFD] border border-slate-200 shadow-sm space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
                  <div>
                    <span className="text-xs font-mono font-bold bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent uppercase tracking-wider block mb-1">
                      {role.team}
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-slate-950">{role.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-2">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {role.location}
                      </span>
                      <span>•</span>
                      <span>Closing Date: {role.closingDate}</span>
                    </div>
                  </div>

                  <a
                    href="#general-application"
                    onClick={() => setFormData((prev) => ({ ...prev, workType: role.title }))}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white font-bold text-xs uppercase tracking-wider shrink-0 transition-all shadow-md hover:shadow-lg flex items-center gap-2 self-start sm:self-auto"
                  >
                    Apply for this Role <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                    <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                      What you will be responsible for:
                    </span>
                    <p className="text-slate-600 leading-relaxed">{role.responsibleFor}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                    <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block">
                      What we are looking for:
                    </span>
                    <p className="text-slate-600 leading-relaxed">{role.lookingFor}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                    <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">
                      What success looks like:
                    </span>
                    <p className="text-slate-600 leading-relaxed">{role.successLooksLike}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DON'T SEE YOUR ROLE? & BEFORE YOU APPLY ── */}
      <section className="py-16 sm:py-24 bg-[#F8FAFD] border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* DON'T SEE YOUR ROLE? */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">
                    Evolution &amp; Fit
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950">
                  DON&apos;T SEE YOUR ROLE?
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  That does not necessarily mean the conversation ends here. PEERS GLOBAL is evolving. The work we need tomorrow may not fit neatly into today&apos;s organisation chart.
                </p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  If you believe your experience, capability or perspective could contribute meaningfully to what we are building, tell us. We may not have an open role today, but we may discover a meaningful conversation through your application.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFD] border border-slate-200">
                <a
                  href="#general-application"
                  className="text-sm font-bold bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent hover:opacity-80 flex items-center gap-1 uppercase"
                >
                  GENERAL APPLICATION →
                </a>
              </div>
            </div>

            {/* BEFORE YOU APPLY */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">
                    Authenticity Over Polish
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950">
                  BEFORE YOU APPLY
                </h2>
                <p className="text-slate-700 text-sm leading-relaxed">
                  You do not need to write the perfect application. We would rather understand:
                </p>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {[
                    'What you have done.',
                    'What you have learned.',
                    'What you care about.',
                    'What you are good at.',
                    'What you are still learning.',
                    'And why this particular journey interests you.',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50/70 to-rose-50/40 border border-slate-200 text-xs text-slate-700 font-medium">
                Honesty and self-awareness carry more weight than buzzwords.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GENERAL APPLICATION / FORM ── */}
      <section id="general-application" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">
                Application Desk
              </span>
              <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950">
              GENERAL APPLICATION
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Tell us about yourself and what you would like to build together.
            </p>
          </div>

          <div className="bg-[#FAFBFD] rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-blue-50 border border-blue-200 text-[#0062D2] rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-950">Application Transmitted</h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                  Thank you for sharing your journey and vision with us. Our team reviews every genuine application carefully and will reach out if there is alignment.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  Submit Another Profile
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
                      placeholder="e.g. Pooja Dave"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#0062D2] text-slate-900"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-800">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="pooja@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#0062D2] text-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-800">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#0062D2] text-slate-900"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-800">Current Role / Organisation *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Product Lead / Freelance"
                      value={formData.currentRole}
                      onChange={(e) => setFormData({ ...formData, currentRole: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#0062D2] text-slate-900"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-800">Current Location *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ahmedabad, Surat, Mumbai"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#0062D2] text-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-800">Area of Experience *</label>
                    <select
                      value={formData.experienceArea}
                      onChange={(e) => setFormData({ ...formData, experienceArea: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#0062D2] text-slate-900"
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
                    <label className="font-bold text-slate-800">Target Role / Work You Want to Explore *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mobile Engineer or Specific Role"
                      value={formData.workType}
                      onChange={(e) => setFormData({ ...formData, workType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#0062D2] text-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-800">What interests you about PEERS GLOBAL? *</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="What draws you to building this community of collaboration?"
                      value={formData.whyPeers}
                      onChange={(e) => setFormData({ ...formData, whyPeers: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#0062D2] text-slate-900"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-800">What could you contribute here? *</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Highlight skills, capabilities, or unique perspectives you bring."
                      value={formData.contribution}
                      onChange={(e) => setFormData({ ...formData, contribution: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#0062D2] text-slate-900"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-slate-800">Résumé / Profile / LinkedIn / Portfolio Link *</label>
                  <input
                    type="url"
                    required
                    placeholder="https://linkedin.com/in/yourprofile or https://github.com/..."
                    value={formData.portfolioOrLinkedin}
                    onChange={(e) => setFormData({ ...formData, portfolioOrLinkedin: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#0062D2] text-slate-900"
                  />
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
                  <p className="text-xs text-slate-500">
                    All applications are reviewed directly by our founders and department stewards.
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-4 rounded-full font-bold bg-[#0062D2] hover:bg-[#0051b0] text-white shadow-md transition-all flex items-center justify-center gap-2 uppercase tracking-wider shrink-0 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      'Transmitting Application...'
                    ) : (
                      <>
                        SUBMIT APPLICATION <Send className="w-4 h-4" />
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
                THE PEERS GLOBAL INVITATION
              </span>
              <span className="h-[1.5px] w-6 bg-white/70" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15]">
              COME BUILD WITH US
            </h2>
            <div className="max-w-2xl mx-auto text-white/90 text-sm sm:text-base space-y-1 text-center">
              <p>If you believe entrepreneurs should not have to build alone —</p>
              <p>If you believe relationships can create more value than transactions —</p>
              <p>If you believe communities become stronger when people contribute —</p>
              <p className="text-cyan-200 font-bold text-base sm:text-lg pt-2">
                We would like to hear from you.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <a
              href="#open-roles"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white shadow-[0_4px_20px_rgba(225,29,72,0.40)] hover:from-[#1E40AF] hover:to-[#BE123C] hover:shadow-[0_8px_28px_rgba(225,29,72,0.60)] transition-all hover:-translate-y-0.5 active:scale-[0.98]"
            >
              VIEW OPEN ROLES →
            </a>
            <a
              href="#general-application"
              className="px-6 py-3.5 rounded-full bg-white/[0.08] text-white border border-white/40 hover:bg-white/15 hover:border-white/70 transition-all backdrop-blur-sm"
            >
              MAKE A GENERAL APPLICATION →
            </a>
          </div>

          <div className="pt-8 border-t border-white/20 text-xs text-white/70 italic font-serif">
            “Build with purpose. Learn with people. Leave something better than you found it.”
          </div>
        </div>
      </section>
    </div>
  )
}
