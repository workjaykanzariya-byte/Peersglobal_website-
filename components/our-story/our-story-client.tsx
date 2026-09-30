'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  HeartHandshake,
  Users,
  Building2,
  Globe2,
  Calendar,
  CheckCircle2,
  Quote,
  ShieldCheck,
  Target,
  Sparkles,
  TrendingUp,
  Layers,
  Award,
  BookOpen,
  Sprout,
  Lightbulb,
  Share2,
  Smartphone,
  Eye,
  Smile,
  Zap,
  Check,
  Compass,
  Briefcase,
  HelpCircle,
} from 'lucide-react'

// ─── Verified Milestones Timeline ───────────────────────────────────────────
const VERIFIED_TIMELINE = [
  {
    tag: 'THE BEGINNING',
    title: 'The Observation in the Corridor',
    desc: 'The realization that entrepreneurs face intense, unshared challenges when building their businesses, and that no entrepreneur should have to build alone.',
    highlight: 'The human question at the heart of everything',
  },
  {
    tag: 'THE FIRST STEP',
    title: 'Early Ventures & Lessons of Building',
    desc: 'From tech startups, HRMS products, and cloud platforms to navigating the startup ecosystem as first-generation founders.',
    highlight: 'Building, learning, and taking exits',
  },
  {
    tag: 'THE IDEA TAKES SHAPE',
    title: 'The Untold Stories of Entrepreneurs',
    desc: 'Discovering that traditional media often overlooked the real, human struggles of MSMEs and builders, leading to platforms dedicated to celebrating their journeys.',
    highlight: 'Giving a voice to those who build',
  },
  {
    tag: 'THE COMMUNITY BEGINS',
    title: 'From Networking to Collaboration',
    desc: 'Moving beyond business card exchanges into governed Circles, peer-to-peer accountability, and structured collaboration pathways.',
    highlight: 'The birth of PEERS GLOBAL Circles',
  },
  {
    tag: 'A NEW STAGE',
    title: 'The LSR Model & Inner Boards',
    desc: 'Integrating Learning, Sales, and Resources into a cohesive framework where peers act as confidential advisory boards for each other.',
    highlight: 'LSR Growth Model & Governed Trust',
  },
  {
    tag: 'THE ECOSYSTEM EXPANDS',
    title: 'Unity App & The Digital Home',
    desc: 'Launching the private digital community where relationships continue 365 days a year without algorithms, ads, or distraction.',
    highlight: 'Digital infrastructure for global connection',
  },
  {
    tag: 'TODAY',
    title: 'The 1 Million Mission',
    desc: 'Working toward 1M+ entrepreneurs impacted by 2030 through 18 Circles across industries, cities, and countries.',
    highlight: '1 Action = 1 Life Impacted',
  },
]

export function OurStoryClient() {
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
          <span className="text-slate-900 font-bold">Our Story</span>
        </div>
      </div>

      {/* ─── SECTION 1: HERO (OUR STORY: IT BEGAN WITH ONE OBSERVATION, IN A HOSPITAL CORRIDOR) ─── */}
      <section className="relative pt-16 sm:pt-24 pb-16 sm:pb-24 bg-gradient-to-b from-[#F0F5FD] via-white to-[#FBFCFE] border-b border-slate-200/80 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">
                  ORIGIN &amp; PURPOSE
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight leading-[1.08] text-slate-950">
                <span className="brand-gradient-text block">OUR STORY</span>
                <span className="text-2xl sm:text-3xl lg:text-4xl text-slate-800 font-medium mt-2 block font-sans">
                  It began with one observation, in a hospital corridor.
                </span>
              </h1>

              <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-light">
                <p>
                  Before there was a community, there was a question.
                </p>
                <p>
                  A question about what happens to an entrepreneur when the business journey becomes difficult — and there is nobody around who truly understands what that journey feels like.
                </p>
                <div className="space-y-1 pl-3 border-l-2 border-[#0062D2] text-sm sm:text-base text-slate-800 font-medium">
                  <p>PEERS GLOBAL did not begin with a website.</p>
                  <p>It did not begin with a membership plan.</p>
                  <p className="text-slate-950 font-bold">It began with an observation.</p>
                </div>
                <p className="font-serif font-bold text-xl sm:text-2xl text-[#0062D2] italic pt-1">
                  “Entrepreneurs should not have to build alone.”
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/the-idea"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white font-medium text-xs sm:text-sm shadow-md hover:shadow-lg hover:opacity-95 transition-all duration-200"
                >
                  <span>Discover The Idea →</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/founder"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white text-slate-800 font-medium text-xs sm:text-sm border border-slate-300 shadow-xs hover:bg-slate-50 transition-all duration-200"
                >
                  <span>Meet Dr. Pravin Parmar →</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-white p-3">
                <div className="relative h-[380px] sm:h-[440px] rounded-2xl overflow-hidden bg-slate-900">
                  <Image
                    src="/images/who-we-are-mountain.jpg"
                    alt="Entrepreneurs collaborating and building together"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold uppercase tracking-wider text-sky-200 border border-white/20">
                      Community of Collaboration
                    </span>
                    <p className="font-serif text-lg sm:text-xl font-bold leading-snug">
                      "From one observation to one million possibilities."
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 2: BEFORE THERE WAS A COMMUNITY & THE STORY NOBODY WOULD PUBLISH ─── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: BEFORE THERE WAS A COMMUNITY */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    THE INVISIBLE JOURNEY
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-1 leading-tight">
                  BEFORE THERE WAS A COMMUNITY
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                <p>
                  Every entrepreneur begins somewhere. With an idea. A decision. A risk. A first customer. A first employee. A first success. And, sometimes, a moment when everything becomes uncertain.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-medium text-slate-800">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">Growth</div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">Revenue</div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">Recognition</div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">Expansion</div>
                </div>
                <p>
                  The entrepreneurial journey is often described through its visible outcomes. But there is another side of the journey that is less visible:
                </p>
                <div className="space-y-1.5 pl-3 border-l-2 border-[#0062D2] text-xs sm:text-sm text-slate-800 font-medium">
                  <p>• The questions.</p>
                  <p>• The responsibility.</p>
                  <p>• The uncertainty.</p>
                  <p>• The decisions that cannot easily be explained to someone who has never carried them.</p>
                  <p className="text-slate-950 font-bold">• And the feeling that, sometimes, you are carrying all of it alone.</p>
                </div>
                <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 text-xs sm:text-sm text-blue-950 font-semibold leading-relaxed">
                  That became the starting point for a different question: What if entrepreneurs had a community built not merely to connect them, but to help them build meaningful relationships with one another?
                </div>
              </div>
            </div>

            {/* Right: THE STORY NOBODY WOULD PUBLISH */}
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#040E24] via-[#061836] to-[#0A2558] text-white shadow-xl space-y-6">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-sky-300 flex items-center justify-center border border-white/20">
                  <BookOpen className="w-5 h-5" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-snug">
                  THE STORY NOBODY WOULD PUBLISH
                </h3>

                <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  <p>
                    Before PEERS GLOBAL, there was another part of the journey. The experience of building. Learning. Taking risks. Creating something.
                  </p>
                  <p>
                    And discovering that the stories behind entrepreneurship are often more human than the headlines that eventually describe them.
                  </p>
                  <p>
                    There were stories worth telling. But not every story found a place in the traditional media narrative.
                  </p>
                  <div className="p-4 rounded-2xl bg-white/10 border border-white/20 text-white font-medium space-y-1">
                    <p className="text-sky-200 font-bold uppercase tracking-wider text-xs">A Double Realisation:</p>
                    <p>Entrepreneurs did not only need visibility. They needed understanding.</p>
                    <p className="text-xs text-slate-300 font-light">
                      And perhaps they needed a place where their experience could be shared with people who understood the journey from the inside.
                    </p>
                  </div>
                  <p className="font-serif italic text-white text-sm">
                    That thought stayed.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 3: WHY A COMMUNITY? & WHY PEERS? ───────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#FBFCFE] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Left: WHY A COMMUNITY? */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950">
                  WHY A COMMUNITY?
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  <p>
                    A platform could have been easier. A media company could have been easier. A business network could have been easier.
                  </p>
                  <p className="font-semibold text-slate-900">
                    But connection alone was not the answer. The deeper opportunity was relationship.
                  </p>
                  <div className="space-y-1.5 pl-3 border-l-2 border-blue-400 text-xs text-slate-800 font-medium">
                    <p>• Knowing someone's name is not the same as knowing their journey.</p>
                    <p>• Meeting someone is not the same as trusting them.</p>
                    <p>• Networking is not the same as collaboration.</p>
                    <p>• And collaboration becomes meaningful only when people are willing to contribute to one another.</p>
                  </div>
                  <p className="text-xs text-[#0062D2] font-semibold pt-1">
                    From connection to relationship. From relationship to collaboration. From collaboration to impact. That became the direction.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200 text-xs font-semibold text-[#0062D2]">
                Relationship-first architecture
              </div>
            </div>

            {/* Right: WHY PEERS? */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center border border-purple-100">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950">
                  WHY PEERS?
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  <p className="font-bold text-slate-900 uppercase tracking-wider text-xs">
                    The word mattered.
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-500 font-medium line-through">
                    <span className="p-2 rounded-lg bg-slate-50 border border-slate-200">Not customers</span>
                    <span className="p-2 rounded-lg bg-slate-50 border border-slate-200">Not leads</span>
                    <span className="p-2 rounded-lg bg-slate-50 border border-slate-200">Not prospects</span>
                    <span className="p-2 rounded-lg bg-slate-50 border border-slate-200">Not contacts</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-purple-50/70 border border-purple-200 space-y-1 text-xs text-purple-950 font-medium">
                    <p className="font-bold text-sm text-purple-900">Peers.</p>
                    <p>People building businesses. People carrying responsibility. People learning. People contributing. People capable of helping one another.</p>
                  </div>
                  <p className="text-xs text-slate-800 font-semibold pt-1">
                    A Peer is not defined by what they can sell you. A Peer is defined by the relationship you can build together.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200 text-xs font-semibold text-purple-700">
                Language that became culture
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 4: WHAT WE BUILT ───────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 mb-1">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                THE SYSTEM
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-950 mt-1">
              WHAT WE BUILT
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2 font-light">
              The idea gradually became a structure. The objective was never simply to create a larger room — it was to create a better reason for people to stay connected after they left the room.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="p-6 rounded-3xl bg-[#FBFCFE] border border-slate-200 shadow-sm space-y-2">
              <span className="font-serif font-bold text-slate-950 text-base block">Circles</span>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Created the environment for meaningful relationships.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-[#FBFCFE] border border-slate-200 shadow-sm space-y-2">
              <span className="font-serif font-bold text-slate-950 text-base block">Industry & Purpose</span>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Brought people together around shared context.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-[#FBFCFE] border border-slate-200 shadow-sm space-y-2">
              <span className="font-serif font-bold text-slate-950 text-base block">Collaboration</span>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Moved the community beyond networking.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-[#FBFCFE] border border-slate-200 shadow-sm space-y-2">
              <span className="font-serif font-bold text-slate-950 text-base block">Learning</span>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Allowed experience to travel from one entrepreneur to another.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-[#FBFCFE] border border-slate-200 shadow-sm space-y-2">
              <span className="font-serif font-bold text-slate-950 text-base block">Leadership</span>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Created opportunities for contribution.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-[#FBFCFE] border border-slate-200 shadow-sm space-y-2">
              <span className="font-serif font-bold text-slate-950 text-base block">Impact</span>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Gave contribution a visible purpose.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-[#FBFCFE] border border-slate-200 shadow-sm space-y-2">
              <span className="font-serif font-bold text-slate-950 text-base block">Unity</span>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Brought the community into everyday life.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-[#FBFCFE] border border-slate-200 shadow-sm space-y-2">
              <span className="font-serif font-bold text-slate-950 text-base block">Wider Ecosystem</span>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Created possibilities beyond a single meeting or Circle.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ─── SECTION 5: THE JOURNEY SO FAR (VERIFIED TIMELINE) ──────────────── */}
      <section className="py-16 sm:py-24 bg-[#FBFCFE] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 mb-1">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                CHRONICLE OF MILESTONES
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-950 mt-1">
              THE JOURNEY SO FAR
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2 font-light">
              A story becomes meaningful when it can be remembered accurately. That is why the PEERS GLOBAL story is told through a dated, verified timeline.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl">
            {VERIFIED_TIMELINE.map((item, idx) => (
              <div
                key={item.tag}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-blue-300 transition-all"
              >
                <div className="space-y-1.5 max-w-xl">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0062D2] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100 inline-block">
                    {item.tag}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
                <div className="sm:text-right shrink-0">
                  <span className="text-xs font-semibold text-slate-800 p-2.5 rounded-xl bg-slate-50 border border-slate-200 block sm:inline-block">
                    {item.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── SECTION 6: WHERE WE ARE NOW & WHAT WE ARE BUILDING TOWARD ──────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: WHERE WE ARE NOW */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    PRESENT STATE
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-1 leading-tight">
                  WHERE WE ARE NOW
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                <p>
                  PEERS GLOBAL has grown from an idea about relationships into a wider community and ecosystem.
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-800">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">• There are Circles</div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">• There are Peers</div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">• There are leaders</div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">• There are collaborations</div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">• There are stories</div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">• There are initiatives</div>
                </div>
                <p>
                  There is an impact system. And there is a growing possibility of connecting entrepreneurs beyond their immediate geography.
                </p>
                <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 text-xs text-slate-800 space-y-1">
                  <strong className="block text-slate-950 font-bold uppercase tracking-wider">
                    The core question remains:
                  </strong>
                  <p className="font-serif italic text-sm text-slate-900">
                    “Are the relationships becoming more meaningful?”
                  </p>
                  <p className="text-[11px] text-slate-500 pt-0.5">
                    Because the purpose was never simply to build a bigger community. It was to build a community in which entrepreneurs could experience what becomes possible when they stop building alone.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: WHAT WE ARE BUILDING TOWARD & WHAT HAS NOT CHANGED */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#040E24] via-[#061836] to-[#0A2558] text-white shadow-xl space-y-5">
                <span className="text-xs font-bold uppercase tracking-widest text-sky-300">
                  THE AMBITION
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-snug">
                  WHAT WE ARE BUILDING TOWARD
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  <p>
                    The destination is larger than the organisation itself. It is a world in which entrepreneurs can find people who understand the journey.
                  </p>
                  <div className="space-y-1.5 pl-3 border-l-2 border-sky-400 text-xs text-sky-100 font-medium">
                    <p>• Where experience can be shared.</p>
                    <p>• Where contribution is recognised.</p>
                    <p>• Where collaboration becomes natural.</p>
                    <p>• Where one entrepreneur's action can positively affect another person's life.</p>
                  </div>
                  <div className="pt-2 border-t border-white/10 text-white space-y-1">
                    <p className="font-serif text-base font-bold text-amber-300">
                      1 Action = 1 Life Impacted
                    </p>
                    <p className="text-xs text-sky-200 font-semibold">
                      1 Million+ Entrepreneurs to Impact by 2030
                    </p>
                    <p className="text-[11px] text-slate-400 italic">
                      The number matters. But the lives behind the number matter more.
                    </p>
                  </div>
                </div>
              </div>

              {/* WHAT HAS NOT CHANGED */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#FBFCFE] border border-slate-200 shadow-sm space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0062D2] block">
                  CONSTANT PRINCIPLE
                </span>
                <h4 className="text-xl font-serif font-bold text-slate-950">
                  WHAT HAS NOT CHANGED
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  The structure may evolve. The technology may change. The number of Circles may grow. The ecosystem may become global. New initiatives may emerge.
                </p>
                <div className="p-3.5 rounded-2xl bg-white border border-blue-200 text-xs font-serif font-bold text-[#0062D2] italic">
                  “Entrepreneurs should not have to build alone.”
                </div>
                <p className="text-[11px] text-slate-500">
                  That is still the starting point. And it remains the reason for everything that comes after it.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 7: CLOSING ROYAL HERO BANNER (THE STORY IS STILL BEING WRITTEN) ── */}
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
                — YOUR CHAPTER BEGINS HERE —
              </span>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.1]">
                THE STORY IS STILL BEING WRITTEN
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-white/90 leading-relaxed font-light max-w-2xl">
                <p>
                  PEERS GLOBAL is not a finished story. Every Peer who joins adds another chapter.
                </p>
                <div className="space-y-1.5 pl-3 border-l-2 border-sky-300 text-sm text-sky-100 font-medium">
                  <p>Every relationship creates another possibility.</p>
                  <p>Every collaboration creates another connection.</p>
                  <p>Every act of contribution adds another piece to the culture.</p>
                  <p>And every life impacted makes the story a little larger than the organisation that began it.</p>
                </div>
                <p className="text-white font-serif text-xl font-bold italic pt-1">
                  And the next chapter may belong to you.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Link
                  href="/the-idea"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-[#0062D2] font-semibold text-sm shadow-xl hover:bg-blue-50 transition-all duration-200 group hover:scale-105"
                >
                  <span>Discover The Idea</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/founder"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/40 backdrop-blur-sm transition-all duration-200"
                >
                  <span>Meet Dr. Pravin Parmar →</span>
                </Link>

                <Link
                  href="/circles"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/40 backdrop-blur-sm transition-all duration-200"
                >
                  <span>Find Your Circle →</span>
                </Link>
              </div>
            </div>

            {/* Right Cursive Script */}
            <div className="lg:col-span-4 text-center lg:text-right select-none pointer-events-none">
              <p
                className="text-3xl sm:text-4xl lg:text-5xl font-light italic leading-tight text-white drop-shadow-lg"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Observe.
                <br />
                Connect.
                <br />
                Collaborate.
                <br />
                Impact.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
