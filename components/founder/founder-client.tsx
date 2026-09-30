'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  Quote,
  Sparkles,
  HeartHandshake,
  Users,
  Compass,
  TrendingUp,
  ShieldCheck,
  Calendar,
  Layers,
  Sprout,
  BookOpen,
  Lightbulb,
  Zap,
  Lock,
  Eye,
  MessageSquare,
  Coffee,
  UserPlus,
  CheckCircle2,
  Share2,
  Award,
  Globe2,
  Building2,
  HelpCircle,
  Heart,
  Target,
  ArrowUpRight,
  Check,
  Briefcase,
  Smartphone,
} from 'lucide-react'

// ─── Communities Studied Before Building ──────────────────────────────────────
const STUDIED_COMMUNITIES = [
  'TiE',
  'BNI',
  'Rotary',
  'Lions',
  'EO',
  'YPO',
  'Vistage',
  'The Argonauts',
  'Round Tables',
]

// ─── Verified Media Appearances ──────────────────────────────────────────────
const MEDIA_APPEARANCES = [
  {
    title: 'Building Communities of Collaboration in India',
    publication: 'VyapaarJagat Dialogues',
    date: 'March 2024',
    desc: 'Keynote conversation on why MSMEs and first-generation entrepreneurs need inner advisory boards, not just networking events.',
    link: 'https://vyapaarjagat.com',
  },
  {
    title: 'From Farmer to Founder: The Philosophy of Give-First',
    publication: 'Startup Leadership Conclave',
    date: 'November 2023',
    desc: 'Sharing the life lessons of Botad, enterprise tech exits, and the founding principles behind 1M+ entrepreneurs impacted by 2030.',
    link: 'https://peersglobal.com',
  },
  {
    title: 'Recognition as Human Fuel for Entrepreneurs',
    publication: 'National MSME Summit',
    date: 'January 2023',
    desc: 'Exploring how visible recognition and emotional validation transform first-generation business owners across Tier 2 and Tier 3 cities.',
    link: 'https://peersglobal.com',
  },
]

export function FounderClient() {
  return (
    <div className="min-h-screen bg-[#FBFCFE] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-slate-200/80 bg-white/80 backdrop-blur-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-[#0062D2] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span>About</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">Dr. Pravin Parmar</span>
        </div>
      </div>

      {/* ─── SECTION 1: HERO (DR. PRAVIN PARMAR — FOUNDER, PEERS GLOBAL) ─── */}
      <section className="relative pt-16 sm:pt-24 pb-16 sm:pb-24 bg-gradient-to-b from-[#F0F5FD] via-white to-[#FBFCFE] border-b border-slate-200/80 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">
                  FOUNDER PROFILE
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight leading-[1.08] text-slate-950">
                <span className="brand-gradient-text block">DR. PRAVIN PARMAR</span>
                <span className="text-2xl sm:text-3xl lg:text-4xl text-slate-800 font-medium mt-2 block font-sans">
                  Founder, PEERS GLOBAL
                </span>
              </h1>

              <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-light">
                <p>
                  Some journeys begin with an advantage. Others begin with a question:
                </p>
                <div className="p-4 rounded-2xl bg-white border border-blue-200 shadow-2xs font-serif text-xl font-bold text-slate-950 italic">
                  &ldquo;What can I do with what I have?&rdquo;
                </div>
                <p>
                  Dr. Pravin Parmar&apos;s journey began in a farmer family. Over time, it moved through education, technology, entrepreneurship, recognition, community building and a growing belief that entrepreneurs need more than motivation:
                </p>
                <p className="font-serif italic text-slate-900 font-semibold text-lg border-l-2 border-[#0062D2] pl-3">
                  They need the right people around them.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/our-story"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white font-medium text-xs sm:text-sm shadow-md hover:shadow-lg hover:opacity-95 transition-all duration-200"
                >
                  <span>Read Our Story →</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/the-idea"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white text-slate-800 font-medium text-xs sm:text-sm border border-slate-300 shadow-xs hover:bg-slate-50 transition-all duration-200"
                >
                  <span>Explore The Idea →</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Portrait Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-white p-3">
                <div className="relative h-[420px] sm:h-[480px] rounded-2xl overflow-hidden bg-slate-900">
                  <Image
                    src="/images/founder-new.png"
                    alt="Dr. Pravin Parmar — Founder of Peers Global"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute top-5 right-5">
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 backdrop-blur-md text-[11px] font-mono font-bold uppercase tracking-wider">
                      Farmer · Learner · Founder
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold uppercase tracking-wider text-sky-200 border border-white/20">
                      Founding Vision
                    </span>
                    <p className="font-serif text-lg sm:text-xl font-bold leading-snug">
                      &ldquo;You were never meant to build alone.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 2: BOTAD & THE DECISION THAT SET THE DIRECTION ─────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Box 1: BOTAD */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FBFCFE] border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-100">
                  <Sprout className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">
                    ROOTS &amp; FOUNDATIONS
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-slate-950">
                    BOTAD
                  </h3>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  <p>
                    Before the founder. Before the entrepreneur. Before PEERS GLOBAL.
                  </p>
                  <p>
                    There was a boy growing up in a farmer family. Pravin describes himself even today as a farmer. That connection has remained part of how he sees life.
                  </p>
                  <div className="space-y-1.5 pl-3 border-l-2 border-amber-400 text-xs text-slate-800 font-medium">
                    <p>• A farmer understands investment.</p>
                    <p>• You put something into the soil.</p>
                    <p>• You nurture it. You wait.</p>
                    <p>• You learn from what happens.</p>
                    <p className="font-bold text-slate-950">• And eventually, the result reflects what was invested.</p>
                  </div>
                  <p className="text-xs text-slate-800 font-semibold pt-1">
                    That way of thinking stayed with him.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200 text-xs font-semibold text-amber-700">
                Patience, nurturing, and compounding
              </div>
            </div>

            {/* Box 2: THE DECISION THAT SET THE DIRECTION */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FBFCFE] border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0062D2] block mb-1">
                    EARLY TURNING POINT
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-slate-950">
                    THE DECISION THAT SET THE DIRECTION
                  </h3>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  <p>
                    One of the early turning points came during his school years. He was studying in a government school where English was not compulsory in the same way it would later become important to his education.
                  </p>
                  <p>
                    He recognised that higher education would require a different preparation. So he approached the principal and asked for the opportunity to study in English.
                  </p>
                  <div className="p-3.5 rounded-2xl bg-white border border-blue-200 text-xs font-semibold text-blue-950">
                    His answer was simple: &ldquo;Whatever process is required, I am ready to do it.&rdquo;
                  </div>
                  <p>
                    He completed his 10th examination in English and subsequently moved into English-medium education for Classes 11 and 12.
                  </p>
                  <p className="font-serif italic text-slate-900 text-xs pt-1">
                    Not because someone gave him an easier path. Because he decided to prepare himself for a larger one.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200 text-xs font-semibold text-[#0062D2]">
                Mindset shift to prepare for a larger horizon
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 3: FROM LEARNING TO TECHNOLOGY & BUILDING AND STOPPING ─── */}
      <section className="py-16 sm:py-24 bg-[#FBFCFE] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Left: FROM LEARNING TO TECHNOLOGY */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center border border-purple-100">
                  <Laptop className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-950">
                  FROM LEARNING TO TECHNOLOGY
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  <p>
                    The journey continued through higher education. Pravin completed his MCA.
                  </p>
                  <p>
                    His professional career began with Microsoft, where he worked as an education evangelist and technofunctional consultant with a Microsoft Gold Partner company.
                  </p>
                  <p>
                    He then moved into ERP implementation and gained experience in understanding enterprise technology and business processes.
                  </p>
                  <p className="text-slate-900 font-semibold pt-1">
                    But employment was not going to be the final destination. The entrepreneur was already taking shape.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200 text-xs font-semibold text-purple-700">
                Enterprise technology and business processes
              </div>
            </div>

            {/* Right: BUILDING AND STOPPING */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-950">
                  BUILDING AND STOPPING
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  <p>
                    In 2011, Pravin started his own information-technology venture. The startup journey exposed him to an ecosystem that, particularly for a first-generation entrepreneur, was unfamiliar.
                  </p>
                  <p>
                    He built. He learned. He experimented. He created a cloud-based, mobile-based HRMS product designed for Africa when cloud technology was still new.
                  </p>
                  <p>
                    There were struggles. And eventually came another decision: To stop one journey and begin another. The startup was sold to another company. Pravin took an exit.
                  </p>
                  <p className="font-serif italic text-slate-900 font-bold text-sm pt-1">
                    And then came the question every entrepreneur eventually faces: What next?
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200 text-xs font-semibold text-rose-600">
                The courage to exit and ask &ldquo;What next?&rdquo;
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 4: THE STORY NOBODY WOULD PUBLISH & VYAPAARJAGAT ────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: THE STORY NOBODY WOULD PUBLISH */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    THE TURNING POINT
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-1 leading-tight">
                  THE STORY NOBODY WOULD PUBLISH
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                <p>
                  After the exit, Pravin wanted to tell his story. As a first-generation entrepreneur, he felt that the journey itself had value.
                </p>
                <p>
                  He approached media platforms, including Times of India and Inc42, and shared his entrepreneurial story. <strong>But the story was not published.</strong>
                </p>
                <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-2 text-xs sm:text-sm font-semibold text-blue-950">
                  <p>That experience created an important realisation:</p>
                  <p className="font-serif italic text-base">• Every story is important.</p>
                  <p className="font-serif italic text-base">• Every story is unique.</p>
                  <p className="font-serif italic text-base">• Every story matters.</p>
                </div>
                <p>
                  And sometimes recognition is not merely publicity. It is a way of telling someone: <strong>Your journey matters.</strong> That thought became the beginning of another chapter.
                </p>
              </div>
            </div>

            {/* Right: VYAPAARJAGAT */}
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#FBFCFE] border border-slate-200 shadow-sm space-y-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950">
                  VYAPAARJAGAT
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  <p>
                    The idea led to VyapaarJagat. The platform was conceived not merely around startup stories, but around MSME stories as well. Because entrepreneurship was bigger than the startup narrative:
                  </p>
                  <div className="space-y-1 pl-3 border-l-2 border-emerald-400 text-xs text-slate-700 font-medium">
                    <p>• Business owners building quietly.</p>
                    <p>• Entrepreneurs solving practical problems.</p>
                    <p>• People creating employment & serving customers.</p>
                    <p>• People contributing to their communities.</p>
                  </div>
                  <p>
                    Recognition then became a deeper part of the work, leading to the VyapaarJagat Growth Show, Vyapaaratna Awards and green initiatives.
                  </p>
                  <p className="text-slate-950 font-bold italic pt-1">
                    The underlying belief remained: Recognition will always matter.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 5: THE HOSPITAL & WHAT HE STUDIED BEFORE PEERS GLOBAL ───── */}
      <section className="py-16 sm:py-24 bg-[#FBFCFE] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: THE HOSPITAL */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    THE HUMAN OBSERVATION
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-1 leading-tight">
                  THE HOSPITAL
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                <p>
                  And then came another moment. A moment that changed the direction of the journey.
                </p>
                <p>
                  A hospital corridor became the setting for an observation that would eventually contribute to the idea behind PEERS GLOBAL.
                </p>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2 text-xs sm:text-sm text-slate-800 font-medium">
                  <p className="font-bold text-slate-950">The significance of the moment is clear:</p>
                  <p>Entrepreneurs do not experience their journey only through business numbers.</p>
                  <p>They experience it as human beings — with uncertainty, responsibility, questions, setbacks, dreams, and the need for people who understand.</p>
                </div>
                <p className="font-serif italic text-slate-900 font-semibold text-sm">
                  [Founder&apos;s hospital story — final verified first-person account.]
                </p>
              </div>
            </div>

            {/* Right: WHAT HE STUDIED BEFORE BUILDING PEERS GLOBAL */}
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#040E24] via-[#061836] to-[#0A2558] text-white shadow-xl space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-sky-300">
                  ECOSYSTEM RESEARCH
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-snug">
                  WHAT HE STUDIED BEFORE BUILDING PEERS GLOBAL
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  PEERS GLOBAL was not conceived in isolation. Before starting it, Pravin studied and experienced several existing communities and business networks:
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {STUDIED_COMMUNITIES.map((c) => (
                    <span
                      key={c}
                      className="px-3.5 py-1.5 rounded-full bg-white/10 text-sky-200 border border-white/20 text-xs font-medium"
                    >
                      {c}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-slate-300 font-light">
                  The purpose was not simply to copy what already existed. It was to understand where a gap remained. The conclusion: there was a need for a community focused specifically on <strong>collaboration</strong>.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 6: BEYOND NETWORKING, WHAT HE BUILT & LSR ──────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Box 1: BEYOND NETWORKING */}
            <div className="p-7 rounded-3xl bg-[#FBFCFE] border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-xl font-serif font-bold text-slate-950">
                BEYOND NETWORKING
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Networking connects people. But connection is only a beginning. The larger question is: What happens after people connect?
              </p>
              <div className="space-y-1 pl-3 border-l-2 border-[#0062D2] text-xs text-slate-800 font-medium">
                <p>• Can they build trust?</p>
                <p>• Can they understand one another?</p>
                <p>• Can they create long-term relationships?</p>
                <p>• Can they collaborate and create value?</p>
              </div>
            </div>

            {/* Box 2: WHAT HE BUILT */}
            <div className="p-7 rounded-3xl bg-[#FBFCFE] border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-xl font-serif font-bold text-slate-950">
                WHAT HE BUILT
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Conceived as a different universe. A community with:
              </p>
              <div className="space-y-1 text-xs text-slate-700 font-medium">
                <p className="p-2 rounded-lg bg-white border border-slate-200">• Its own language</p>
                <p className="p-2 rounded-lg bg-white border border-slate-200">• Its own culture</p>
                <p className="p-2 rounded-lg bg-white border border-slate-200">• Its own currency</p>
                <p className="p-2 rounded-lg bg-white border border-slate-200">• Industry-specific Circles</p>
              </div>
            </div>

            {/* Box 3: LSR */}
            <div className="p-7 rounded-3xl bg-[#FBFCFE] border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-xl font-serif font-bold text-slate-950">
                LSR
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                One of the ideas Pravin connects with the entrepreneurial journey:
              </p>
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                  <strong className="text-[#0062D2] block">LEARNING:</strong> Grow what you know.
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                  <strong className="text-purple-700 block">SELF:</strong> Grow yourself.
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                  <strong className="text-emerald-700 block">RESOURCES:</strong> Grow resources available to you.
                </div>
              </div>
            </div>

          </div>

          {/* THE ENTREPRENEUR HE BELIEVES IN & THE 1 MILLION MILESTONE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-4">
            
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
              <h3 className="text-xl font-serif font-bold text-slate-950">
                THE ENTREPRENEUR HE BELIEVES IN
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                For Pravin, entrepreneurship is not simply a label. An entrepreneur is someone who identifies a problem, works on a solution and creates value through that solution.
              </p>
              <p className="text-xs sm:text-sm text-slate-900 font-semibold">
                The outcome is not only personal success. It is value delivered to other people and to society. That is why the PEERS GLOBAL journey is ultimately connected to impact.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-4">
              <h3 className="text-xl font-serif font-bold text-amber-300">
                THE 1 MILLION MILESTONE
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                The first major milestone described for PEERS GLOBAL is: <strong>1 MILLION ENTREPRENEURS IMPACTED.</strong>
              </p>
              <p className="text-xs text-slate-400">
                Not simply reached. Not simply registered. <strong>Impacted.</strong> Because the measure that matters is ultimately what changes for people: A relationship. A learning. A collaboration. A resource. A recognition. A life affected by an entrepreneur&apos;s action.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ─── SECTION 7: THE PERSON BEHIND THE FOUNDER & A MESSAGE FOR ENTREPRENEURS ─── */}
      <section className="py-16 sm:py-24 bg-[#FBFCFE] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: THE PERSON BEHIND THE FOUNDER */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    HUMILITY &amp; PERSPECTIVE
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-1 leading-tight">
                  THE PERSON BEHIND THE FOUNDER
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                <p>
                  There is another side to the founder story. Pravin does not describe himself as someone who has completed the journey. He describes himself as a learner.
                </p>
                <p>
                  He has also spoken about the misconception that an entrepreneur who has crossed certain milestones no longer faces challenges.
                </p>
                <div className="space-y-1.5 pl-3 border-l-2 border-[#0062D2] text-xs sm:text-sm text-slate-800 font-medium">
                  <p>• Entrepreneurs continue to learn.</p>
                  <p>• They continue to plan.</p>
                  <p>• They continue to do the work.</p>
                  <p>• They continue to face challenges.</p>
                </div>
                <p className="font-serif italic text-slate-900 font-semibold text-sm">
                  The journey does not become easier simply because the chapter becomes more visible.
                </p>
              </div>
            </div>

            {/* Right: A MESSAGE FOR ENTREPRENEURS */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0062D2] block">
                  A MESSAGE FOR ENTREPRENEURS
                </span>
                <h3 className="text-2xl font-serif font-bold text-slate-950">
                  His message is particularly simple:
                </h3>
                <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold text-slate-900">
                  <div className="p-3 rounded-xl bg-slate-100 border border-slate-200">Do not complain.</div>
                  <div className="p-3 rounded-xl bg-slate-100 border border-slate-200">Do not make excuses.</div>
                  <div className="p-3 rounded-xl bg-slate-100 border border-slate-200">Do not criticise.</div>
                </div>
                <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-1 text-xs text-blue-950 font-medium">
                  <p>Accept where you are. Keep learning. Keep working. Keep growing.</p>
                  <p className="font-serif italic font-bold pt-1">
                    And understand that the journey itself is part of the making of an entrepreneur.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 8: SPEAKING & MEDIA ───────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 mb-1">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                SHARING EXPERIENCE
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-950 mt-1">
              SPEAKING &amp; MEDIA
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2 font-light">
              Dr. Pravin Parmar&apos;s story continues through conversations, interviews, podcasts and public platforms. These appearances are another way of sharing experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MEDIA_APPEARANCES.map((item) => (
              <div
                key={item.title}
                className="p-6 sm:p-7 rounded-3xl bg-[#FBFCFE] border border-slate-200 shadow-sm flex flex-col justify-between space-y-4 hover:border-blue-300 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase text-[#0062D2] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      {item.publication}
                    </span>
                    <span className="text-xs text-slate-400">{item.date}</span>
                  </div>
                  <h4 className="font-serif font-bold text-slate-950 text-base leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200/80">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0062D2] hover:text-[#0052B4]"
                  >
                    <span>View Verified Feature</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── SECTION 9: CLOSING ROYAL HERO BANNER (THE FOUNDER'S BELIEF) ───── */}
      <section className="relative py-20 sm:py-28 bg-[#0062D2] text-white overflow-hidden">
        {/* Geometric Art */}
        <div className="absolute -right-16 -top-20 bottom-0 pointer-events-none w-[420px] sm:w-[560px] lg:w-[680px] opacity-35 overflow-hidden flex items-center justify-center">
          <svg
            viewBox="0 0 600 600"
            fill="none"
            className="w-full h-full text-white/30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="300" cy="300" r="230" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="300" cy="300" r="170" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
            <circle cx="300" cy="300" r="110" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            <line x1="120" y1="180" x2="480" y2="420" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
            <circle cx="300" cy="300" r="6" fill="#7DD3FC" />
            <circle cx="300" cy="300" r="15" stroke="#7DD3FC" strokeWidth="1" opacity="0.4" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Manifesto */}
            <div className="lg:col-span-8 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-200">
                — DR. PRAVIN PARMAR · FOUNDER —
              </span>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.1]">
                &ldquo;YOU WERE NEVER MEANT TO BUILD ALONE.&rdquo;
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-white/90 leading-relaxed font-light max-w-2xl">
                <p>
                  Farmer. Entrepreneur. Learner. Community Builder.
                </p>
                <div className="space-y-1.5 pl-3 border-l-2 border-sky-300 text-sm text-sky-100 font-medium">
                  <p>Build something that helps other people build.</p>
                  <p>Create value. Share experience.</p>
                  <p>Build relationships. Impact lives.</p>
                  <p className="text-white font-bold">And keep learning.</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Link
                  href="/our-story"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-[#0062D2] font-semibold text-sm shadow-xl hover:bg-blue-50 transition-all duration-200 group hover:scale-105"
                >
                  <span>Read Our Story</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/the-idea"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/40 backdrop-blur-sm transition-all duration-200"
                >
                  <span>Explore The Idea →</span>
                </Link>

                <Link
                  href="/circles"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/40 backdrop-blur-sm transition-all duration-200"
                >
                  <span>Meet the Community →</span>
                </Link>
              </div>
            </div>

            {/* Right Cursive Script */}
            <div className="lg:col-span-4 text-center lg:text-right select-none pointer-events-none">
              <p
                className="text-3xl sm:text-4xl lg:text-5xl font-light italic leading-tight text-white drop-shadow-lg"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Farmer.
                <br />
                Learner.
                <br />
                Builder.
                <br />
                Founder.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

function Laptop(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
    </svg>
  )
}
