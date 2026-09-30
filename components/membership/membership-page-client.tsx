'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  Sparkles,
  Users2,
  TrendingUp,
  Clock,
  ArrowRight,
  HelpCircle,
  Plus,
  Minus,
  ChevronRight,
  Handshake,
  Award,
  BookOpen,
  Share2,
  Heart,
  Globe,
  Layers,
  Smartphone,
  HeartHandshake,
  Check,
  Building,
  Target,
  UserCheck,
} from 'lucide-react'

// ─── Eight Reasons Data ───────────────────────────────────────────────────
const EIGHT_REASONS = [
  {
    num: '01',
    title: 'End Entrepreneurial Isolation',
    desc: 'Building a business can be surprisingly lonely. There are decisions you cannot discuss with employees, questions you cannot always take home, and challenges difficult to explain to people who have never carried the responsibility of a business. A Circle gives you a room where other entrepreneurs understand the journey.',
    highlight: 'Someone understands.',
  },
  {
    num: '02',
    title: 'Grow Through Trust',
    desc: 'Business relationships become more meaningful when built over time: You meet, listen, learn, help, and keep showing up. Trust develops gradually—and with trust, conversations become deeper, introductions warmer, and collaboration natural.',
    highlight: 'Relationships are the foundation on which meaningful business grows.',
  },
  {
    num: '03',
    title: 'Learn From Real Experience',
    desc: 'There is knowledge in books and classrooms. And there is knowledge that comes from having built, failed, adapted, recovered and continued. You do not have to learn every lesson the hard way.',
    highlight: 'Another entrepreneur’s experience can save you years.',
  },
  {
    num: '04',
    title: 'Build a Lifelong Support System',
    desc: 'Your business, responsibilities, and ambitions will change. A Circle becomes more than a monthly gathering—it becomes a support system of people who celebrate with you, challenge you, introduce you, listen, and stand beside you.',
    highlight: 'Relationships that grow through different chapters of life and business.',
  },
  {
    num: '05',
    title: 'Become a Better Leader',
    desc: 'Leadership is learning to listen, understand, communicate, take responsibility, develop other people, and create environments where others contribute. Inside PEERS GLOBAL, leadership follows contribution.',
    highlight: 'Leadership is not a position above people. It is responsibility for people.',
  },
  {
    num: '06',
    title: 'Create Real Impact',
    desc: 'Success becomes more meaningful when it creates value beyond your business: 1 Action = 1 Life Impacted. One intro opens a door; one conversation changes a decision; one piece of experience prevents an expensive mistake.',
    highlight: 'The objective is not to count activity. It is to recognise contribution.',
  },
  {
    num: '07',
    title: 'Access Resources You Cannot Build Alone',
    desc: 'No entrepreneur can build every capability internally. A strong community expands your available resources because trusted relationships make it easier to find knowledge, specialists, and perspectives.',
    highlight: 'Expanding capabilities through trusted connections.',
  },
  {
    num: '08',
    title: 'Get National and Global Reach',
    desc: 'A local Circle can be the beginning, but not the boundary. As relationships develop across Circles, cities, regions and countries, an entrepreneur’s world becomes larger without becoming less personal.',
    highlight: 'Local relationships can create global possibilities.',
  },
]

// ─── Value System (Six Beliefs) ───────────────────────────────────────────
const SIX_BELIEFS = [
  {
    num: '01',
    title: 'People Before Transactions',
    desc: 'A person is never merely a lead, prospect, customer or opportunity. Every entrepreneur deserves to be treated as a person first.',
  },
  {
    num: '02',
    title: 'Give Before You Ask',
    desc: 'Contribution creates the conditions for trust. The question is not only "What can I get?" It is also "How can I help?"',
  },
  {
    num: '03',
    title: 'Relationships Before Business',
    desc: 'Business may emerge from a relationship. But the relationship should never be treated merely as a route to business.',
  },
  {
    num: '04',
    title: 'Experience Is Meant to Be Shared',
    desc: 'What you have learned can become someone else’s shortcut. Your experience becomes more valuable when it helps another entrepreneur move forward.',
  },
  {
    num: '05',
    title: 'Leadership Is Service',
    desc: 'The strongest leaders are not necessarily the people who speak the most. They are the people who take responsibility when something needs to be done.',
  },
  {
    num: '06',
    title: 'Impact Is Bigger Than Individual Success',
    desc: 'A business creates value. A relationship creates value. A community multiplies that value. When one helps another, impact travels far beyond the original action.',
  },
]

// ─── What We Ask of You ───────────────────────────────────────────────────
const WHAT_WE_ASK = [
  { action: 'Show up', desc: 'Be present at meetings and roundtables.' },
  { action: 'Listen', desc: 'Understand before responding.' },
  { action: 'Share', desc: 'Offer your experience and perspective.' },
  { action: 'Give', desc: 'Look for ways to help another Peer.' },
  { action: 'Connect', desc: 'Introduce people when there is genuine value.' },
  { action: 'Respect', desc: 'Protect confidentiality and relationships.' },
  { action: 'Contribute', desc: 'Take responsibility when you can make something better.' },
  { action: 'Recognise', desc: 'Notice and celebrate the people who help others.' },
]

export function MembershipPageClient() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0062D2] selection:text-white font-sans antialiased">
      
      {/* ─── Breadcrumb ────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-slate-100 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <Link href="/" className="hover:text-[#0062D2] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">Membership</span>
          </nav>
        </div>
      </div>

      {/* =========================================================================
          SECTION 1: HERO (WHY JOIN PEERS GLOBAL)
          ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAFCFF] via-[#FFFFFF] to-[#F8FAFC] border-b border-slate-200/80 pt-10 sm:pt-14 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] brand-gradient-text">
                  WHY JOIN PEERS GLOBAL
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[3.35rem] font-serif font-bold text-[#0B192C] tracking-tight leading-[1.12]">
                <span className="brand-gradient-text">Because your next breakthrough will not come from working harder alone.</span>
              </h1>

              <div className="space-y-3 text-[15px] sm:text-base text-slate-600 leading-relaxed">
                <p>
                  Entrepreneurs are used to solving problems themselves. You carry the decisions. You carry the responsibility. You carry the uncertainty. And often, you carry all of it without having enough people around you who truly understand what it means to build a business.
                </p>
                <p className="font-semibold text-slate-900 text-lg">
                  PEERS GLOBAL begins with a different belief: <span className="text-[#0062D2]">You were never meant to build alone.</span>
                </p>
                <p>
                  This is not simply a place to meet more people. It is a community designed to help entrepreneurs build stronger relationships, learn from real experience, contribute to one another and create possibilities that are difficult to create alone.
                </p>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/circles/find"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-sm font-bold hover:shadow-lg transition-all shadow-md uppercase tracking-wider"
                >
                  <span>Find Your Circle</span>
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

            {/* Right Card: Not a Membership You Renew */}
            <div className="lg:col-span-5">
              <div className="relative p-8 sm:p-10 rounded-3xl bg-[#040F24] text-white shadow-2xl overflow-hidden space-y-6">
                <div className="absolute top-0 right-0 size-64 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-4">
                  <span className="text-xs uppercase font-bold tracking-widest text-sky-300">
                    MEMBERSHIP VS RELATIONSHIP
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                    This Is Not a Membership You Renew
                  </h3>

                  <p className="text-sm text-slate-300 font-medium">
                    It is a relationship you invest in.
                  </p>

                  <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-200">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      • A membership gives you access. <strong>A relationship gives you understanding.</strong>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      • A membership puts you in a room. <strong>A relationship gives you people you can call.</strong>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      • A membership creates introductions. <strong>A relationship creates trust.</strong>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 text-center">
                    <p className="font-serif italic text-base text-amber-300">
                      &ldquo;Membership is what you buy. Peer is what you become.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: EIGHT REASONS ENTREPRENEURS JOIN
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-left max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                THE 8 REASONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-slate-900">
              <span className="brand-gradient-text">Eight Reasons Entrepreneurs Join</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {EIGHT_REASONS.map((r) => (
              <div
                key={r.num}
                className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-[#0062D2]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="size-9 rounded-full bg-[#EFF6FF] text-[#0062D2] font-bold text-xs flex items-center justify-center">
                      {r.num}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {r.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {r.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] font-bold text-[#0062D2]">
                  {r.highlight}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: THE LSR GROWTH MODEL
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                THE CORE ENGINE
              </span>
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-slate-900">
              <span className="brand-gradient-text">The LSR Growth Model</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              PEERS GLOBAL is built around three connected experiences that feed one another in a continuous cycle of growth:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Learning */}
            <div className="p-8 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs space-y-4 flex flex-col justify-between">
              <div>
                <div className="size-12 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center font-bold text-lg mb-4">
                  <BookOpen className="size-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  LEARNING
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                  Learn from people who have built, tested, failed, adapted and succeeded. Not theory alone. Real experience.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 text-xs font-semibold text-[#0062D2]">
                Experiential Wisdom
              </div>
            </div>

            {/* Sharing */}
            <div className="p-8 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs space-y-4 flex flex-col justify-between">
              <div>
                <div className="size-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-lg mb-4">
                  <Share2 className="size-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  SHARING
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                  Share what you know. Share what you have learned. Share the problem you are trying to solve. Share the opportunity you see.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 text-xs font-semibold text-emerald-700">
                Generous Contribution
              </div>
            </div>

            {/* Relationships */}
            <div className="p-8 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs space-y-4 flex flex-col justify-between">
              <div>
                <div className="size-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center font-bold text-lg mb-4">
                  <HeartHandshake className="size-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  RELATIONSHIPS
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                  Because learning and sharing become more valuable when they happen between people who genuinely trust one another.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 text-xs font-semibold text-pink-700">
                Enduring Trust
              </div>
            </div>
          </div>

          {/* LSR Cycle Banner */}
          <div className="p-6 rounded-2xl bg-[#F0F7FF] border border-[#DCEBFE] text-center space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
              Learning → Sharing → Relationships → Learning
            </div>
            <p className="text-sm font-semibold text-slate-800">
              Relationships create better conversations. Better conversations create better learning. Better learning creates better contribution.
            </p>
            <p className="text-xs text-slate-500 font-medium">
              LSR is not a programme. It is a way of growing.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: THE VALUE SYSTEM (SIX BELIEFS)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-left max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                THE VALUE SYSTEM
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-slate-900">
              <span className="brand-gradient-text">Six beliefs that guide this community</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SIX_BELIEFS.map((b) => (
              <div
                key={b.num}
                className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow space-y-3"
              >
                <div className="size-8 rounded-full bg-[#EFF6FF] text-[#0062D2] flex items-center justify-center font-bold text-xs">
                  {b.num}
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900">
                  {b.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: MEMBERSHIP IS INDIVIDUAL. NEVER CORPORATE.
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-[#040F24] text-white relative overflow-hidden">
            <div className="absolute -right-16 -top-16 size-80 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-blue-400 to-rose-400 rounded-full" />
                <span className="text-xs font-bold tracking-[0.22em] uppercase text-sky-300">
                  INDIVIDUAL RELATIONSHIP
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-tight">
                Membership Is Individual. Never Corporate.
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                PEERS GLOBAL is built around the entrepreneur as an individual. A business may have many employees. A company may have many partners. But the relationship with the community belongs to the individual Peer.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-semibold text-slate-200">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">• Your Circle knows you personally.</div>
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">• Your relationships develop with you.</div>
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">• Your contribution is recognised through you.</div>
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">• Your journey belongs to you.</div>
              </div>

              <p className="text-xs sm:text-sm text-sky-200 font-medium italic pt-2">
                It is not simply a corporate subscription. It is an individual relationship with a community.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: WHAT WE ASK OF YOU & WHAT YOU MAY DISCOVER HERE
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Part A: What We Ask of You */}
          <div className="space-y-8">
            <div className="text-left max-w-3xl space-y-2">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  COMMUNITY CODE
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
                What We Ask of You
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                A meaningful community cannot be built by passive participation. We ask you to:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {WHAT_WE_ASK.map((item) => (
                <div key={item.action} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1">
                  <h4 className="text-sm font-bold text-[#0062D2]">{item.action}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs font-bold text-slate-800 text-center">
              And above all: <strong>Treat every Peer with respect.</strong> Because the community you experience is shaped by the community you help create.
            </div>
          </div>

          {/* Part B: What You May Discover Here */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pt-8 border-t border-slate-200">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  THE TRANSFORMATION
                </span>
              </div>
              <h3 className="font-serif text-3xl font-bold text-slate-900">
                What You May Discover Here
              </h3>
              <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <div className="p-3 rounded-xl bg-white border border-slate-200">
                  You may come looking for business. <strong>You may discover relationships.</strong>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200">
                  You may come looking for introductions. <strong>You may discover people you can trust.</strong>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200">
                  You may come looking for answers. <strong>You may discover better questions.</strong>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200">
                  You may come looking for growth. <strong>You may discover that helping someone else grow changes the way you see your own journey.</strong>
                </div>
              </div>
              <p className="text-xs font-semibold text-[#0062D2] italic pt-1">
                That is the difference between joining a network and becoming part of a community.
              </p>
            </div>

            {/* Right: Your Journey Begins with a Conversation */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-md space-y-5">
              <h4 className="font-serif text-2xl font-bold text-slate-900">
                Your Journey Begins With a Conversation
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                You do not need to have everything figured out before you begin. You can start by exploring: understand the idea, discover the Circles, meet the people, ask questions, and see whether the culture feels right for you.
              </p>
              <div className="pt-2 flex flex-col gap-3">
                <Link
                  href="/circles/find"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-xs sm:text-sm font-bold shadow-sm hover:opacity-95 uppercase tracking-wider"
                >
                  <span>Explore Circles &amp; Chapters</span>
                  <ArrowRight className="size-4" />
                </Link>
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full border border-slate-300 hover:border-slate-400 bg-white text-slate-800 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xs"
                >
                  <Smartphone className="size-4 text-[#0062D2]" />
                  <span>Start with Unity App</span>
                </a>
              </div>
            </div>
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
                  YOU WERE NEVER MEANT TO BUILD ALONE
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-normal leading-[1.18] tracking-tight text-white">
                <span className="brand-gradient-text">What could I help make possible for someone else?</span>
              </h2>

              <p className="text-base sm:text-lg font-medium text-slate-200 max-w-xl">
                Because that is where membership begins to become something more: A relationship. A Circle. A community. A contribution. A possibility.
              </p>

              <div className="text-xs text-sky-300 tracking-wider font-semibold">
                Welcome to PEERS GLOBAL.
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/circles/find"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-white shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] uppercase cursor-pointer"
                >
                  <span>Find Your Circle</span>
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
                Peer is <br />
                What You <br />
                <span className="text-[#7DD3FC]">Become</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
