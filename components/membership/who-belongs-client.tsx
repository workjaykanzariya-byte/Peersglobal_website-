'use client'

import React from 'react'
import Link from 'next/link'
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
  Check,
  UserCheck,
  Award,
  Clock,
  HelpCircle,
} from 'lucide-react'

// ─── What We Look For Items ───────────────────────────────────────────────
const WHAT_WE_LOOK_FOR = [
  'Respect other entrepreneurs and their journeys',
  'Believe relationships take time to build',
  'Are willing to give before asking',
  'Share experience generously',
  'Value confidentiality',
  'Listen as much as they speak',
  'See collaboration as more than exchanging referrals',
  'Take responsibility when they can contribute',
  'Want to grow personally as well as professionally',
  'Understand that a strong community is created by its people',
]

// ─── You Belong Here If (6 Pillars) ───────────────────────────────────────
const YOU_BELONG_HERE_IF = [
  {
    num: '01',
    title: 'You Want Relationships, Not Just Contacts',
    desc: 'You are looking for people you can know over time—not another list of names in your phone. You understand that trust develops through repeated interaction.',
  },
  {
    num: '02',
    title: 'You Are Willing to Give',
    desc: 'You have knowledge, experience, introductions, perspective or simply the willingness to help. And you are comfortable asking “How can I help?” before asking “What can you get me?”',
  },
  {
    num: '03',
    title: 'You Want to Learn From Other Entrepreneurs',
    desc: 'You know that no matter how experienced you become, someone else may have seen something you have not. You are curious. You listen. You remain open to learning.',
  },
  {
    num: '04',
    title: 'You Respect Confidentiality',
    desc: 'Entrepreneurs need places where they can speak honestly. That requires trust. And trust requires responsibility. What a Peer shares in confidence is treated with the respect that confidence deserves.',
  },
  {
    num: '05',
    title: 'You Want to Contribute to the Room',
    desc: 'You do not want to sit quietly waiting for opportunities to arrive. You want to participate: Share. Connect. Recognise. Solve. Support. Build.',
  },
  {
    num: '06',
    title: 'You See Growth as a Shared Journey',
    desc: 'You believe that another entrepreneur’s success does not diminish yours. You can celebrate another person’s progress, learn from their experience, and contribute without needing to own the outcome.',
  },
]

// ─── Not For You If & Do Not Require ──────────────────────────────────────
const NOT_FOR_YOU_IF = [
  {
    title: 'You are looking only for immediate business leads.',
    desc: 'Relationships here are not treated as transactions.',
  },
  {
    title: 'You expect the community to generate results without your participation.',
    desc: 'A community cannot contribute for you.',
  },
  {
    title: 'You are uncomfortable helping people without an immediate return.',
    desc: 'Give-First is part of the culture.',
  },
  {
    title: 'You see every relationship primarily as a sales opportunity.',
    desc: 'People are not prospects waiting to be converted.',
  },
  {
    title: 'You are unwilling to respect confidentiality, boundaries or the community’s standards.',
    desc: 'Trust is not optional.',
  },
]

const WHAT_WE_DO_NOT_REQUIRE = [
  'Have the biggest business in the room',
  'Be a famous entrepreneur',
  'Have a perfect business story',
  'Know everyone',
  'Be an extrovert',
  'Be an experienced networker',
  'Have all the answers',
  'Arrive with a large sales pipeline',
]

// ─── Decline Application Factors ──────────────────────────────────────────
const DECLINE_FACTORS = [
  'Alignment with the culture',
  'Willingness to contribute',
  'Respect for confidentiality',
  'Appropriate Circle fit',
  'Existing category or Circle structure',
  'The overall experience of the community',
]

export function WhoBelongsClient() {
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
            <Link href="/membership" className="hover:text-[#0062D2] transition-colors">
              Membership
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">Who Belongs Here</span>
          </nav>
        </div>
      </div>

      {/* =========================================================================
          SECTION 1: HERO — WHO BELONGS HERE
          ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAFCFF] via-[#FFFFFF] to-[#F8FAFC] border-b border-slate-200/80 pt-10 sm:pt-14 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] brand-gradient-text">
                  WHO BELONGS HERE
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[3.35rem] font-serif font-bold text-[#0B192C] tracking-tight leading-[1.12]">
                <span className="brand-gradient-text">This community is built for a particular kind of entrepreneur.</span>
              </h1>

              <div className="space-y-3 text-[15px] sm:text-base text-slate-600 leading-relaxed">
                <p>
                  PEERS GLOBAL is not trying to be everything to everyone. Because meaningful communities need something more than numbers: they need shared values, people who are willing to participate, and entrepreneurs who understand that a relationship is more important than a transaction—and that contribution is part of belonging.
                </p>
                <div className="p-4 rounded-2xl bg-[#EFF6FF] border border-blue-100 text-slate-800 font-semibold text-sm sm:text-base">
                  So before you ask: <span className="text-[#0062D2]">&ldquo;What will I get here?&rdquo;</span><br />
                  There is another question worth asking: <span className="text-[#0062D2]">&ldquo;What kind of Peer will I be?&rdquo;</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/circles/find"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-sm font-bold hover:shadow-lg transition-all shadow-md uppercase tracking-wider"
                >
                  <span>Explore PEERS GLOBAL</span>
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

            {/* Right Card: The Spirit of Belonging */}
            <div className="lg:col-span-5">
              <div className="relative p-8 sm:p-10 rounded-3xl bg-[#040F24] text-white shadow-2xl overflow-hidden space-y-6">
                <div className="absolute top-0 right-0 size-64 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-5">
                  <span className="text-xs uppercase font-bold tracking-widest text-sky-300">
                    THE ESSENCE OF COMMUNITY
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                    The Person Matters More Than the Profile
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Your company name does not tell us everything about you. Neither does your designation, turnover, or follower count. Behind every business is a person carrying a journey: a beginning, a set of choices, some successes, some disappointments, some lessons, and something still being built.
                  </p>

                  <div className="pt-3 border-t border-white/10">
                    <p className="font-serif italic text-base text-amber-300">
                      &ldquo;That is the person we want the community to meet.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: WHAT WE LOOK FOR
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-left max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                CHARACTER &amp; COMMITMENT
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-slate-900">
              <span className="brand-gradient-text">What We Look For</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We look for entrepreneurs who are serious about building businesses and relationships. People who:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WHAT_WE_LOOK_FOR.map((point, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#0062D2]/40 transition-all flex items-start gap-4"
              >
                <div className="size-8 rounded-full bg-[#EFF6FF] text-[#0062D2] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="size-4 stroke-[3]" />
                </div>
                <p className="text-sm font-semibold text-slate-800 leading-snug">
                  {point}
                </p>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center text-slate-700 text-sm font-medium">
            You do not have to arrive with all the answers. <span className="text-slate-900 font-bold">You do need to arrive with the willingness to participate.</span>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: THE FIFTEEN NAMES TEST
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-14 rounded-3xl bg-[#040F24] text-white relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 size-96 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-4xl space-y-8">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-blue-400 to-rose-400 rounded-full" />
                <span className="text-xs font-bold tracking-[0.22em] uppercase text-sky-300">
                  THE CULTURE TEST
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-tight">
                The Fifteen Names Test
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Here is a simple way to understand whether this community may be right for you:
              </p>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-slate-200 space-y-2">
                <p className="text-sm sm:text-base font-semibold text-white">
                  Think of 15 entrepreneurs you know.
                </p>
                <p className="text-xs sm:text-sm text-slate-300">
                  Not fifteen prospects. Not fifteen people you could sell to. Fifteen people whose experience, character, relationships or ambition you genuinely respect.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-blue-950/50 border border-blue-800/50 space-y-2">
                  <span className="text-xs font-bold text-sky-300 uppercase tracking-wider">Question 01</span>
                  <p className="text-sm sm:text-base font-bold text-white">
                    How many of those 15 would I be willing to introduce to the other people in my Circle?
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-blue-950/50 border border-blue-800/50 space-y-2">
                  <span className="text-xs font-bold text-sky-300 uppercase tracking-wider">Question 02</span>
                  <p className="text-sm sm:text-base font-bold text-white">
                    How many of those 15 would I be willing to help—even if there were no immediate business benefit to me?
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-white/10">
                <p className="text-sm sm:text-base text-slate-300 font-medium">
                  If those questions feel natural to you, you may already understand the spirit of PEERS GLOBAL.
                </p>
                <p className="font-serif italic text-base sm:text-lg text-amber-300">
                  &ldquo;Because community is not built by collecting contacts. It is built by caring about people.&rdquo;
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: YOU BELONG HERE IF (01 - 06)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-left max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                ALIGNMENT
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-slate-900">
              <span className="brand-gradient-text">You Belong Here If...</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {YOU_BELONG_HERE_IF.map((item) => (
              <div
                key={item.num}
                className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-[#0062D2]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="size-9 rounded-full bg-[#EFF6FF] text-[#0062D2] font-bold text-xs flex items-center justify-center mb-4">
                    {item.num}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: CONTRAST — NOT FOR YOU IF vs WHAT WE DO NOT REQUIRE
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Left: This Is Probably Not For You If... */}
            <div className="rounded-3xl bg-[#FFF5F5] border border-rose-200 p-8 sm:p-10 flex flex-col justify-between shadow-2xs">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <span className="h-0.5 w-6 bg-rose-500" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-rose-600">
                    HONEST NON-FIT
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-2 leading-tight">
                    This Is Probably Not For You If...
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    There is equal value in being honest about non-fit. PEERS GLOBAL may not be the right environment if:
                  </p>
                </div>

                <div className="space-y-4">
                  {NOT_FOR_YOU_IF.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="size-6 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                        <XCircle className="size-4" />
                      </div>
                      <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <strong className="text-slate-900 font-semibold block sm:inline mr-1">
                          {item.title}
                        </strong>
                        <span className="text-slate-600">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-rose-200 text-xs text-rose-700 italic mt-6">
                This is not a judgement on you or your business. It simply means that fit matters.
              </div>
            </div>

            {/* Right: What We Do Not Require */}
            <div className="rounded-3xl bg-[#F0FDF4] border border-emerald-200 p-8 sm:p-10 flex flex-col justify-between shadow-2xs">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <span className="h-0.5 w-6 bg-emerald-600" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-700">
                    OPEN TO AUTHENTICITY
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-2 leading-tight">
                    What We Do Not Require
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    You do not need to perform success. You need to be willing to participate honestly. You do not need to:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {WHAT_WE_DO_NOT_REQUIRE.map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-white border border-emerald-100 flex items-center gap-2.5">
                      <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                      <span className="text-xs font-semibold text-slate-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-emerald-200 text-xs text-emerald-800 font-semibold mt-6">
                No pretension. Just honest, real founders building together.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: WE MAY DECLINE APPLICATIONS & YOU DO NOT HAVE TO BE CERTAIN
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: We May Decline Applications */}
            <div className="lg:col-span-7 space-y-6 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-2xs">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  COMMUNITY PROTECTION
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                We May Decline Applications
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A community has a responsibility to protect the experience of the people already inside it. That means not every application will necessarily be accepted. A decision may depend on factors such as:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
                {DECLINE_FACTORS.map((factor, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[#0062D2]" />
                    <span className="font-medium">{factor}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  If an application is declined, that does not mean the entrepreneur is unsuccessful or unworthy. It means the community is protecting its purpose.
                </p>
                <p className="font-semibold text-slate-900">
                  Good communities know that who they say “not yet” to matters as much as who they welcome.
                </p>
              </div>
            </div>

            {/* Right: You Do Not Have to Be Certain */}
            <div className="lg:col-span-5 space-y-6 p-8 sm:p-10 rounded-3xl bg-[#040F24] text-white shadow-xl">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-blue-400 to-rose-400 rounded-full" />
                <span className="text-xs font-bold tracking-[0.22em] uppercase text-sky-300">
                  START BY EXPLORING
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
                You Do Not Have to Be Certain
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  Perhaps you recognise yourself in some of these ideas—but not all. That is okay.
                </p>
                <p>
                  Perhaps you are wondering whether a Circle will feel right for you, or want to understand the culture before making a commitment.
                </p>
                <p className="text-white font-medium">
                  You do not have to manufacture certainty. Explore. Ask questions. Meet people. Understand the experience. Then decide.
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
                <Link
                  href="/circles/find"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-xs sm:text-sm font-bold shadow-sm hover:opacity-95 uppercase tracking-wider"
                >
                  <span>Explore Circles</span>
                  <ArrowRight className="size-4" />
                </Link>
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full border border-white/30 hover:border-white/60 bg-white/5 text-white text-xs sm:text-sm font-bold uppercase tracking-wider"
                >
                  <Smartphone className="size-4 text-sky-300" />
                  <span>Download Unity App</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: WHAT KIND OF ROOM DO YOU WANT TO BE PART OF?
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                THE CHOICE
              </span>
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-slate-900">
              <span className="brand-gradient-text">What Kind of Room Do You Want to Be Part Of?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 space-y-4 text-center">
              <div className="text-xs font-bold uppercase text-slate-400">Question 01</div>
              <p className="text-xs text-slate-500 line-through">A room where people are constantly selling to one another?</p>
              <div className="h-[1px] bg-slate-200 w-12 mx-auto" />
              <p className="text-sm sm:text-base font-bold text-[#0062D2]">
                Or a room where people know one another well enough to help when help is needed?
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 space-y-4 text-center">
              <div className="text-xs font-bold uppercase text-slate-400">Question 02</div>
              <p className="text-xs text-slate-500 line-through">A room where everyone asks?</p>
              <div className="h-[1px] bg-slate-200 w-12 mx-auto" />
              <p className="text-sm sm:text-base font-bold text-[#0062D2]">
                Or a room where people also give?
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 space-y-4 text-center">
              <div className="text-xs font-bold uppercase text-slate-400">Question 03</div>
              <p className="text-xs text-slate-500 line-through">A room full of contacts?</p>
              <div className="h-[1px] bg-slate-200 w-12 mx-auto" />
              <p className="text-sm sm:text-base font-bold text-[#0062D2]">
                Or a Circle full of relationships?
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#EFF6FF] border border-blue-100 text-center text-xs sm:text-sm font-semibold text-slate-800 max-w-2xl mx-auto">
            The answer tells you more about PEERS GLOBAL than any feature list ever could.
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 8: CLOSING MANIFESTO BANNER
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
                  YOU DO NOT HAVE TO FIT EVERYWHERE
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-normal leading-[1.18] tracking-tight text-white">
                <span className="brand-gradient-text">The right community does not make you feel like a prospect. It makes you feel like a person who belongs.</span>
              </h2>

              <p className="text-base sm:text-lg font-medium text-slate-200 max-w-2xl">
                You only need to find the room where you can be yourself, contribute meaningfully, and grow with people who respect the journey.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/circles/find"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-white shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] uppercase cursor-pointer"
                >
                  <span>Explore PEERS GLOBAL</span>
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
                A Person <br />
                Who <br />
                <span className="text-[#7DD3FC]">Belongs</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
