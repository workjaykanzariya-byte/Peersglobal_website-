'use client'

import React from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  ChevronRight,
  Smartphone,
  Check,
  ShieldCheck,
  UserCheck,
  Calendar,
  Clock,
  Sparkles,
  Lock,
  Layers,
  Heart,
  Users2,
  Award,
  Sprout,
  Building2,
  Globe2,
  MapPin,
  TrendingUp,
  MessageSquare,
  Ear,
  Brain,
  Quote,
} from 'lucide-react'

// ─── What Leadership Here Develops (8 Capabilities) ────────────────────────
const WHAT_LEADERSHIP_DEVELOPS = [
  'Bring entrepreneurs together around a common purpose',
  'Create trust between people who may not know one another',
  'Facilitate conversations rather than dominate them',
  'Recognise and celebrate contribution',
  'Develop and mentor other leaders',
  'Build communities around deep relationships',
  'Represent something larger than yourself',
  'Think beyond one Circle, one city or one industry',
]

// ─── The Leadership Pathway (6 Stages) ────────────────────────────────────
const LEADERSHIP_PATHWAY = [
  {
    num: '01',
    stage: 'Stage 01 — Begin With Contribution',
    title: 'Begin With Contribution',
    desc: 'Leadership begins with participation. You become part of the community, understand its culture, build relationships and discover where your experience can be useful to others.',
  },
  {
    num: '02',
    stage: 'Stage 02 — Lead Within the Circle',
    title: 'The Powerhouse',
    desc: 'Fourteen entrepreneurs hold the Circle together through distributed responsibility, committees and project leadership. You are no longer simply attending—you are helping the Circle work.',
  },
  {
    num: '03',
    stage: 'Stage 03 — Lead the Circle',
    title: 'Circle Director',
    desc: 'The Circle Director runs the Circle month after month. The role is not simply to manage meetings: it is to grow the Circle—and everyone in it.',
  },
  {
    num: '04',
    stage: 'Stage 04 — Build the Ecosystem',
    title: 'Industry Director',
    desc: 'An Industry Director takes responsibility for the sector ecosystem within a city, creating a point of leadership, visibility and mentorship around that industry.',
  },
  {
    num: '05',
    stage: 'Stage 05 — Build Across the Territory',
    title: 'Executive Director',
    desc: 'The Executive Director carries responsibility across a wider geography: Area → District → State → Country as the community expands.',
  },
  {
    num: '06',
    stage: 'Stage 06 — Lead at Wider Community Scale',
    title: 'Global & Community Leadership',
    desc: 'Connecting people, developing leaders and strengthening the wider PEERS GLOBAL ecosystem. Lead by serving. Grow by contributing. Influence by earning trust.',
  },
]

// ─── The Roles System ─────────────────────────────────────────────────────
const ROLES = [
  {
    title: 'POWERHOUSE',
    badge: 'Circle Committee Team',
    desc: 'The leadership team of a Circle. Fourteen entrepreneurs hold the Circle together through its committees and project responsibilities. This is where many entrepreneurs first experience leadership inside PEERS GLOBAL.',
    icon: Users2,
  },
  {
    title: 'CIRCLE DIRECTOR',
    badge: 'Runs the Room Month on Month',
    desc: 'Runs the Circle, month on month. The Director leads the leaders who lead the Circle and is responsible for helping the Circle—and everyone in it—grow.',
    icon: UserCheck,
  },
  {
    title: 'CIRCLE FOUNDER',
    badge: 'Launches New Rooms',
    desc: 'Launches new Circles. The Founder creates the room where a Circle can begin, convenes the industry and helps establish its leadership from Day 1.',
    icon: Sprout,
  },
  {
    title: 'INDUSTRY DIRECTOR',
    badge: 'City Sector Owner',
    desc: 'The sector ecosystem owner for the city. Carries city-level responsibility for an industry and develops a wider ecosystem of relationships, mentorship and leadership around it.',
    icon: Building2,
  },
  {
    title: 'EXECUTIVE DIRECTOR',
    badge: 'Regional Territory Builder',
    desc: 'The regional ecosystem builder. Executive Directors operate across four levels as the community grows: Area → District → State → Country.',
    icon: MapPin,
  },
]

// ─── What It Will Cost You ───────────────────────────────────────────────
const WHAT_IT_COSTS = [
  'Time and focused attention',
  'Thorough preparation and presence',
  'Consistency month after month',
  'Patience with human timing and relationship growth',
  'The willingness to listen when you would rather speak',
  'The willingness to help when there is no immediate return',
  'The willingness to carry responsibility when nobody else has stepped forward',
]

// ─── The Influence You Build Here ─────────────────────────────────────────
const INFLUENCE_POINTS = [
  'Someone trusts you enough to ask for help.',
  'Someone finds the right connection because you introduced them.',
  'A new entrepreneur finds confidence because you made room for them.',
  'A Circle becomes stronger because you stayed committed.',
  'Another leader grows because you gave them responsibility.',
  'A city develops because entrepreneurs begin working together.',
]

export function LeadershipLadderClient() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0F172A] selection:bg-[#0062D2] selection:text-white font-sans antialiased">

      {/* ─── Breadcrumb ────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-slate-100 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <Link href="/" className="hover:text-[#0062D2] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">Leadership</span>
          </nav>
        </div>
      </div>

      {/* =========================================================================
          SECTION 1: HERO — LEADERSHIP (LEADING THE LEADERS)
          ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAFCFF] via-[#FFFFFF] to-[#F8FAFC] border-b border-slate-200/80 pt-10 sm:pt-14 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] brand-gradient-text">
                  LEADERSHIP AT PEERS GLOBAL
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[3.35rem] font-serif font-bold text-[#0B192C] tracking-tight leading-[1.12]">
                <span className="brand-gradient-text">Leading the leaders.</span>
              </h1>

              <div className="space-y-3 text-[15px] sm:text-base text-slate-600 leading-relaxed">
                <p>
                  Leadership at PEERS GLOBAL is not about having a title. It is about taking responsibility for people, for relationships, for Circles—and eventually for the wider ecosystem.
                </p>
                <p>
                  Entrepreneurs enter leadership here not because they need authority, but because they want to create <span className="font-semibold text-slate-900">influence without authority</span>.
                </p>
                <p className="font-semibold text-slate-900 text-lg">
                  The question is simple: <span className="text-[#0062D2]">How much more can you make possible for others?</span>
                </p>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/leadership/apply"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-sm font-bold hover:shadow-lg transition-all shadow-md uppercase tracking-wider"
                >
                  <span>Apply to Lead</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white border border-slate-300 hover:border-slate-400 text-slate-800 text-sm font-bold hover:bg-slate-50 transition-all shadow-2xs uppercase tracking-wider"
                >
                  <Smartphone className="size-4 text-[#0062D2]" />
                  <span>Download Unity App</span>
                </a>
              </div>
            </div>

            {/* Right Card: Why Entrepreneurs Take These Roles */}
            <div className="lg:col-span-5">
              <div className="relative p-8 sm:p-10 rounded-3xl bg-[#040F24] text-white shadow-2xl overflow-hidden space-y-6">
                <div className="absolute top-0 right-0 size-64 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-5">
                  <span className="text-xs uppercase font-bold tracking-widest text-sky-300">
                    INFLUENCE WITHOUT AUTHORITY
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                    Why Entrepreneurs Take These Roles
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    A successful entrepreneur already knows how to lead a business. Leadership inside PEERS GLOBAL asks for something different: it asks you to lead without owning the people you lead.
                  </p>

                  <div className="space-y-2 text-xs text-slate-200">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">• You earn their trust.</div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">• You create clarity and bring people together.</div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">• You help others contribute.</div>
                  </div>

                  <div className="pt-2 border-t border-white/10 text-center">
                    <p className="font-serif italic text-sm sm:text-base text-amber-300">
                      &ldquo;Leadership built on influence, contribution and trust.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: WHAT LEADERSHIP HERE DEVELOPS
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-left max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                DEVELOPMENT &amp; GROWTH
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-slate-900">
              <span className="brand-gradient-text">What Leadership Here Develops</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Leadership inside PEERS GLOBAL gives an entrepreneur the opportunity to develop beyond their own business:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {WHAT_LEADERSHIP_DEVELOPS.map((point, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#0062D2]/40 transition-all flex flex-col justify-between"
              >
                <div className="size-8 rounded-full bg-blue-50 text-[#0062D2] flex items-center justify-center font-bold text-xs mb-3">
                  0{idx + 1}
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                  {point}
                </p>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 text-center text-xs sm:text-sm text-slate-700">
            Your business remains your primary responsibility. <strong className="text-slate-900">Your leadership becomes your opportunity to contribute beyond it.</strong>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: THE LEADERSHIP PATHWAY (SIX STAGES)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-left max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                THE SIX STAGES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-slate-900">
              <span className="brand-gradient-text">The Leadership Pathway</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              It is not designed as a race toward a higher position. It is a progression in the scale of responsibility you are willing to carry:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LEADERSHIP_PATHWAY.map((stage) => (
              <div
                key={stage.num}
                className="p-7 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-[#0062D2]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="size-9 rounded-full bg-blue-50 text-[#0062D2] font-bold text-xs flex items-center justify-center">
                      {stage.num}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      STAGE {stage.num}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {stage.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200 text-center space-y-1.5 max-w-3xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
              LEADERSHIP FOLLOWS CONTRIBUTION
            </p>
            <p className="text-sm font-semibold text-slate-900">
              Lead by serving. Grow by contributing. Influence by earning trust.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: HOW A CIRCLE IS ACTUALLY LED & THE ROLES
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Part A: How a Circle is Actually Led (Founder vs Director) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-2xs space-y-4">
              <div className="size-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <Sprout className="size-5" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-900">
                The Circle Founder
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The Founder brings a new Circle into existence. The Founder convenes the industry, creates the initial room, invites leaders and helps establish the Circle from Day 1.
              </p>
              <div className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-xs font-bold text-emerald-800">
                Responsible for creating the possibility.
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-2xs space-y-4">
              <div className="size-10 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center font-bold">
                <UserCheck className="size-5" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-900">
                The Circle Director
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The Director runs the Circle, month on month. The Director develops the leadership team, maintains the rhythm of the Circle and helps the entrepreneurs inside it grow.
              </p>
              <div className="p-3 rounded-xl bg-blue-50/50 border border-blue-100 text-xs font-bold text-[#0062D2]">
                Responsible for growing the Circle.
              </div>
            </div>
          </div>

          {/* Part B: The 5 Core Roles in the System */}
          <div className="space-y-8">
            <div className="text-left max-w-3xl space-y-2">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  THE SYSTEM OF RESPONSIBILITY
                </span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
                The Roles
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ROLES.map((role, idx) => {
                const Icon = role.icon
                return (
                  <div
                    key={idx}
                    className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="size-10 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center font-bold">
                        <Icon className="size-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                        {role.badge}
                      </span>
                    </div>
                    <h4 className="font-serif text-xl font-bold text-slate-900">
                      {role.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {role.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: WHAT EVERY LEADER SHARES & WHAT IT WILL COST YOU
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            
            {/* Left: What Every Leader Shares */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#040F24] text-white shadow-xl flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-blue-400 to-rose-400 rounded-full" />
                  <span className="text-xs font-bold tracking-[0.22em] uppercase text-sky-300">
                    SHARED PRINCIPLES
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
                  What Every Leader Shares
                </h3>

                <div className="space-y-3 text-xs sm:text-sm text-slate-200">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">• People come before positions.</div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">• Contribution comes before recognition.</div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">• Trust comes before influence.</div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">• Leadership is service.</div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  A leader does not become important because others report to them. A leader becomes valuable because others become stronger around them.
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 text-xs font-bold text-amber-300">
                Moral authority earned through contribution.
              </div>
            </div>

            {/* Right: What It Will Cost You */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    HONEST REALITY
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                  What It Will Cost You
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Leadership requires something real from you:
                </p>

                <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {WHAT_IT_COSTS.map((cost, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center gap-2.5">
                      <span className="size-1.5 rounded-full bg-[#0062D2] shrink-0" />
                      <span>{cost}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 text-xs text-slate-600 italic">
                Leadership is not an additional badge you wear. It is responsibility you accept.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: THE INFLUENCE YOU BUILD HERE
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-left max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                THE ENDURING RETURN
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-slate-900">
              <span className="brand-gradient-text">The Influence You Build Here</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              The most meaningful influence is rarely announced. It is experienced:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INFLUENCE_POINTS.map((inf, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2"
              >
                <div className="size-7 rounded-full bg-blue-50 text-[#0062D2] font-bold text-xs flex items-center justify-center">
                  {idx + 1}
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                  {inf}
                </p>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-[#EFF6FF] border border-blue-100 text-center text-xs sm:text-sm font-semibold text-slate-800 max-w-2xl mx-auto">
            Not influence over people. <strong className="text-[#0062D2]">Influence through people.</strong>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: CLOSING MANIFESTO BANNER
          ========================================================================= */}
      <section className="relative isolate overflow-hidden bg-[#040F24] py-16 sm:py-20 lg:py-24 text-white border-t border-slate-800">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(0,98,210,0.25),transparent_42%),radial-gradient(circle_at_82%_12%,rgba(56,189,248,0.18),transparent_36%),linear-gradient(115deg,#020817_0%,#071a3d_48%,#06132d_100%)]"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 flex flex-col items-start space-y-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  LEADERSHIP IS A JOURNEY
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-normal leading-[1.18] tracking-tight text-white">
                <span className="brand-gradient-text">Lead by serving. Grow by contributing. Build through trust.</span>
              </h2>

              <p className="text-base sm:text-lg font-medium text-slate-200 max-w-2xl">
                Member → Contributor → Circle Leader → Ecosystem Builder → Community Leader. Leave people stronger than you found them.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/leadership/apply"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-white shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] uppercase cursor-pointer"
                >
                  <span>Apply to Lead</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/50 px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-white backdrop-blur-xs transition-all duration-200 hover:bg-white/10 hover:border-white active:scale-[0.98] uppercase cursor-pointer"
                >
                  <span>Download Unity App</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 text-right flex justify-end">
              <div
                className="text-white/95 text-3xl sm:text-5xl font-normal leading-tight select-none pointer-events-none drop-shadow-sm"
                style={{ fontFamily: 'var(--font-script, Georgia, serif)' }}
              >
                Lead by <br />
                Serving <br />
                <span className="text-[#7DD3FC]">Others</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
