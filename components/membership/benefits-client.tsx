'use client'

import React from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  ChevronRight,
  Smartphone,
  Check,
  TrendingUp,
  BookOpen,
  Megaphone,
  Users,
  Award,
  Globe,
  Share2,
  HeartHandshake,
  Sparkles,
  Calendar,
  Compass,
  Trophy,
  RefreshCw,
  Layers,
  Heart,
  Radio,
  FileText,
  ShieldCheck,
  MessageSquare,
  Flame,
  CheckCircle2,
} from 'lucide-react'

// ─── Annual Calendar Experiences ──────────────────────────────────────────
const ANNUAL_EXPERIENCES = [
  {
    title: 'Monthly Circle Meetings',
    outcome: 'Your regular Circle rhythm, deep peer accountability, and monthly momentum.',
    frequency: '12 / Year',
    icon: Calendar,
    color: 'text-[#0062D2] bg-blue-50 border-blue-100',
  },
  {
    title: 'Mega Networking Events',
    outcome: 'Wider ecosystem connections across cities, states, and global chapters.',
    frequency: '2–4 / Year',
    icon: Users,
    color: 'text-rose-600 bg-rose-50 border-rose-100',
  },
  {
    title: 'MindMeld Sessions',
    outcome: 'High-trust roundtables for deep cross-industry problem solving and shared thinking.',
    frequency: 'Quarterly',
    icon: Sparkles,
    color: 'text-purple-600 bg-purple-50 border-purple-100',
  },
  {
    title: 'Leadership Retreats',
    outcome: 'Immersive multi-day retreats for leadership clarity, strategic reflection, and renewal.',
    frequency: '2 / Year',
    icon: Compass,
    color: 'text-amber-600 bg-amber-50 border-amber-100',
  },
  {
    title: 'Family Meetups',
    outcome: 'Bringing families and personal support systems closer to the entrepreneurial journey.',
    frequency: '2 / Year',
    icon: Heart,
    color: 'text-pink-600 bg-pink-50 border-pink-100',
  },
  {
    title: 'Annual Awards Ceremony',
    outcome: 'Grand national gala celebrating milestones, contribution, and life impact.',
    frequency: 'Annual Gala',
    icon: Trophy,
    color: 'text-amber-500 bg-amber-50 border-amber-200',
  },
  {
    title: 'Leadership Transition Events',
    outcome: 'Structured continuity, democratic elections, and leadership stewardship development.',
    frequency: 'Bi-Annual',
    icon: RefreshCw,
    color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
  },
  {
    title: 'Regional Conclaves & Summits',
    outcome: 'Strategic market expansion, state delegations, and cross-border trade forums.',
    frequency: 'Regional',
    icon: Globe,
    color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
  },
  {
    title: 'Circle Mini-Conferences',
    outcome: 'Domain-specific deep dives, investor demo days, and industry purpose meetups.',
    frequency: 'Special Focus',
    icon: Layers,
    color: 'text-cyan-600 bg-cyan-50 border-cyan-100',
  },
]

// ─── Business Growth Items ────────────────────────────────────────────────
const BUSINESS_GROWTH_ITEMS = [
  'An introduction you could not have made alone',
  'A Peer who understands a challenge you are facing',
  'A potential collaboration',
  'A new perspective on your market',
  'A business resource',
  'A partner with complementary capabilities',
  'An opportunity to take your business beyond its present boundaries',
]

// ─── Learning Channels ────────────────────────────────────────────────────
const LEARNING_CHANNELS = [
  'Peer experience & shared challenges',
  'Circle conversations & deep roundtables',
  'Masterclasses & expert learning',
  'Business discussions & problem-solving',
  'Mentoring & strategic insights',
  'Conversations with entrepreneurs from different industries',
]

// ─── Media Ecosystem Offerings ────────────────────────────────────────────
const MEDIA_OFFERINGS = [
  {
    title: 'Coffee Table Book',
    desc: 'A curated print platform for stories, people, milestones and journeys worth remembering.',
    icon: BookOpen,
  },
  {
    title: 'Peers Candid Talks',
    desc: 'Intimate conversations that allow entrepreneurs to share their real experiences in their own voice.',
    icon: Radio,
  },
  {
    title: 'Circle Magazines',
    desc: 'With 40 stories per edition, creating an enduring record of entrepreneurial journeys and community contribution.',
    icon: FileText,
  },
  {
    title: 'Peers Global Podcast',
    desc: 'A 40-episode web series bringing entrepreneurial stories and conversations to a wider national audience.',
    icon: Megaphone,
  },
  {
    title: 'Media & Press',
    desc: 'Opportunities for stories from the community to receive broader visibility across national business media.',
    icon: Globe,
  },
]

// ─── Community & Belonging Formats ────────────────────────────────────────
const COMMUNITY_FORMATS = [
  {
    title: 'The Confidential Forum',
    desc: 'A dedicated, high-trust space for conversations that require total discretion, vulnerability and psychological safety.',
    icon: ShieldCheck,
    tag: 'Total Discretion',
    color: 'text-amber-600 bg-amber-50 border-amber-100',
  },
  {
    title: 'MindMeld Sessions',
    desc: 'An environment for deeper peer interaction, cross-industry problem solving, and shared collective intelligence.',
    icon: Sparkles,
    tag: 'Collective Brainpower',
    color: 'text-purple-600 bg-purple-50 border-purple-100',
  },
  {
    title: 'Family Meetups',
    desc: 'Because entrepreneurs do not exist separately from the people, families, and relationships that matter to them.',
    icon: Heart,
    tag: 'Human Side',
    color: 'text-rose-600 bg-rose-50 border-rose-100',
  },
  {
    title: 'Pinning Ceremony',
    desc: 'A milestone moment of recognition and welcome that marks your permanent place and identity within the community.',
    icon: Award,
    tag: 'Milestone Ritual',
    color: 'text-[#0062D2] bg-blue-50 border-blue-100',
  },
]

// ─── Recognition Channels ─────────────────────────────────────────────────
const RECOGNITION_CHANNELS = [
  { text: 'Contribution to others', icon: HeartHandshake },
  { text: 'Collaboration & partnership', icon: Users },
  { text: 'Life Impact created', icon: Flame },
  { text: 'Leadership stewardship', icon: Trophy },
  { text: 'Consistent participation', icon: Calendar },
  { text: 'Support of fellow Peers', icon: CheckCircle2 },
]

export function BenefitsClient() {
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
            <span className="text-slate-900 font-semibold">What You Get</span>
          </nav>
        </div>
      </div>

      {/* =========================================================================
          SECTION 1: HERO — WHAT YOU GET (Signature Fade Video Banner)
          ========================================================================= */}
      <section className="relative overflow-hidden bg-[#FAFBFD] text-slate-900 pt-6 sm:pt-10 pb-16 lg:pb-24 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero Banner Box */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-white via-white/95 to-slate-50 border border-slate-200/90 shadow-lg min-h-[480px] lg:min-h-[520px] flex items-center">

            {/* Fade Visual (Right 60%) */}
            <div
              className="absolute top-0 right-0 bottom-0 w-full sm:w-[65%] lg:w-[58%] overflow-hidden pointer-events-none"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 10%, rgba(0,0,0,0.6) 28%, black 55%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 10%, rgba(0,0,0,0.6) 28%, black 55%)',
              }}
            >
              <video
                src="/videos/homepage-hero-bg.mp4"
                poster="/images/membership-hero-peers.jpg"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-center scale-105"
              />
              <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-white via-white/85 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />

              {/* Script Overlay - Top Right */}
              <div className="absolute top-6 sm:top-8 right-6 sm:right-8 z-20 text-right drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] pointer-events-none select-none">
                <p className="text-xl sm:text-2xl text-white/95 leading-tight font-medium" style={{ fontFamily: 'var(--font-script)' }}>
                  The Meeting Is an Event.
                </p>
                <p className="text-2xl sm:text-3xl text-amber-300 font-bold leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  The Relationship Is the Experience.
                </p>
              </div>

              {/* Pill Overlay - Bottom Right */}
              <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-20 pointer-events-none select-none">
                <div className="rounded-xl border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2.5 shadow-lg text-right">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/70">BEYOND THE MEETING</p>
                  <p className="text-xs font-bold tracking-wider text-white">WHERE COMMUNITY BECOMES COLLABORATION</p>
                </div>
              </div>
            </div>

            {/* Left Content (Z-10) */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl flex flex-col items-start space-y-4">

                {/* Eyebrow */}
                <div className="flex items-center gap-2.5 mb-1">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                    What You Get
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-[1.15]">
                  Membership is an ongoing journey, not one monthly meeting.
                </h1>

                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  <p>
                    A Circle meeting may happen once a month. Your PEERS GLOBAL experience does not.
                  </p>
                  <p>
                    It continues through conversations, learning, introductions, collaboration, recognition, leadership and the relationships you build between meetings.
                  </p>
                  <div className="p-3.5 sm:p-4 rounded-xl bg-blue-50/80 border border-blue-100 text-slate-800 text-xs sm:text-[13px] leading-relaxed font-normal">
                    <strong className="font-semibold text-slate-900">The Real Value:</strong> Because the true return of a community is not what happens when everyone is sitting in the same room. It is what becomes possible between those moments.
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    href="/circles/find"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-xs sm:text-sm font-bold hover:shadow-lg transition-all shadow-md uppercase tracking-wider group"
                  >
                    <span>Find Your Circle</span>
                    <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href="https://unity.peersglobal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-slate-300 hover:border-slate-400 text-slate-800 text-xs sm:text-sm font-bold hover:bg-slate-50 transition-all shadow-2xs uppercase tracking-wider"
                  >
                    <Smartphone className="size-4 text-[#0062D2]" />
                    <span>Download Unity App</span>
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: YOUR YEAR INSIDE PEERS GLOBAL (ANNUAL CALENDAR)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-left max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                ANNUAL CALENDAR
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              Your Year Inside PEERS GLOBAL
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Your annual experience is designed to give you multiple ways to learn, connect, contribute and grow:
            </p>
          </div>

          {/* 3x3 Interactive Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ANNUAL_EXPERIENCES.map((exp, idx) => {
              const Icon = exp.icon
              return (
                <div
                  key={idx}
                  className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-blue-200 hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    {/* Header: Icon + Frequency Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className={`size-12 rounded-2xl border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 ${exp.color}`}>
                        <Icon className="size-5.5" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200/70 group-hover:bg-blue-50 group-hover:text-[#0062D2] group-hover:border-blue-200 transition-colors">
                        {exp.frequency}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-[#0062D2] transition-colors leading-snug">
                      {exp.title}
                    </h3>

                    {/* Outcome Description */}
                    <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                      {exp.outcome}
                    </p>
                  </div>

                  {/* Card Footer Tag */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                    <span className="text-slate-400">Experience #{idx < 9 ? `0${idx + 1}` : idx + 1}</span>
                    <span className="inline-flex items-center gap-1 text-[#0062D2] opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                      Explore Format &rarr;
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom Highlight Callout */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-50/80 via-white to-rose-50/80 border border-blue-200/60 shadow-2xs flex items-center justify-center text-center text-xs sm:text-sm font-medium text-slate-800">
            <span>
              Your year is not built around one meeting. It is built around{' '}
              <strong className="text-[#0062D2] font-bold">multiple curated avenues to participate, lead, and grow.</strong>
            </span>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: BUSINESS GROWTH & LEARNING (Executive 2-Column Split)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-left max-w-3xl space-y-2">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                GROWTH &amp; WISDOM
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              Opportunity and experience in practice
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              Business scale inside PEERS GLOBAL is built on high-trust relationships, collective problem solving, and firsthand entrepreneurial insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            
            {/* Column A: Business Growth */}
            <div className="p-7 sm:p-9 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0062D2]" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0062D2]">
                      Opportunity
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    07 Pathways
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Business Growth
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mt-1">
                    Growth begins with relationships before transactions. Inside your Circle, you uncover:
                  </p>
                </div>

                <div className="space-y-2.5">
                  {BUSINESS_GROWTH_ITEMS.map((item, idx) => (
                    <div
                      key={idx}
                      className="group p-3 sm:p-3.5 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-2xs transition-all flex items-center gap-3 text-xs sm:text-sm text-slate-800"
                    >
                      <div className="size-6 rounded-lg bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 group-hover:bg-[#0062D2] group-hover:text-white transition-colors">
                        <Check className="size-3.5" />
                      </div>
                      <span className="font-normal text-slate-700 group-hover:text-slate-900 transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1">
                <p className="text-[11px] uppercase font-bold tracking-wider text-slate-400">Our Core Philosophy</p>
                <p className="text-xs sm:text-sm font-semibold text-slate-900">
                  Relationships first <span className="text-[#0062D2] font-bold">&rarr;</span> Collaboration next <span className="text-[#0062D2] font-bold">&rarr;</span> Business impact follows.
                </p>
              </div>
            </div>

            {/* Column B: Learning */}
            <div className="p-7 sm:p-9 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-700">
                      Experience
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    06 Channels
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Experiential Learning
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mt-1">
                    Every entrepreneur has learned something the hard way. Learn from builders, not theorists:
                  </p>
                </div>

                <div className="space-y-2.5">
                  {LEARNING_CHANNELS.map((channel, idx) => (
                    <div
                      key={idx}
                      className="group p-3 sm:p-3.5 rounded-2xl bg-white border border-slate-200/80 hover:border-emerald-300 hover:shadow-2xs transition-all flex items-center gap-3 text-xs sm:text-sm text-slate-800"
                    >
                      <div className="size-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        <BookOpen className="size-3.5" />
                      </div>
                      <span className="font-normal text-slate-700 group-hover:text-slate-900 transition-colors">
                        {channel}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100/90 text-xs text-slate-800 leading-relaxed italic">
                &ldquo;Sometimes the most useful lesson is not a formal presentation. It is one Peer saying: <strong className="text-slate-900 not-italic font-semibold">&lsquo;I faced something similar. Here is what I learned.&rsquo;</strong>&rdquo;
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: VISIBILITY & MEDIA (THE 5 PLATFORMS)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-left max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                MEDIA ECOSYSTEM
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              Visibility &amp; Media
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Every entrepreneur has a story, and every meaningful business journey contains lessons worth sharing. PEERS GLOBAL creates platforms for you to be heard:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MEDIA_OFFERINGS.map((media, idx) => {
              const Icon = media.icon
              return (
                <div
                  key={idx}
                  className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-[#0062D2]/40 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="size-11 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      {media.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {media.desc}
                    </p>
                  </div>
                </div>
              )
            })}

            {/* 6th Card: Philosophy of Visibility */}
            <div className="p-7 rounded-3xl bg-[#040F24] text-white shadow-xl flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-xs uppercase font-bold text-sky-300 tracking-wider">THE PURPOSE</span>
                <h3 className="text-lg sm:text-xl font-bold text-white">Known for Meaning</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Visibility is not simply about being seen. It is about being known for something meaningful.
                </p>
              </div>
              <div className="text-xs font-semibold text-sky-200 italic pt-2 border-t border-white/10">
                Stories of real grit and leadership.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: COMMUNITY & BELONGING + RECOGNITION & LEADERSHIP
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Part A: Community & Belonging */}
          <div className="space-y-8">
            <div className="text-left max-w-3xl space-y-2">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  BELONGING
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
                Community &amp; Belonging
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                A community becomes real when people begin to know one another beyond formal introductions:
              </p>
            </div>

            {/* 4 Interactive Format Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {COMMUNITY_FORMATS.map((fmt, idx) => {
                const Icon = fmt.icon
                return (
                  <div
                    key={idx}
                    className="group flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-blue-200 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className={`size-11 rounded-2xl border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 ${fmt.color}`}>
                          <Icon className="size-5" />
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white border border-slate-200/80 text-slate-600">
                          {fmt.tag}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0062D2] transition-colors">
                          {fmt.title}
                        </h3>
                        <p className="text-xs text-slate-600 font-light leading-relaxed mt-2">
                          {fmt.desc}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 pt-3 border-t border-slate-200/60 text-[11px] font-mono text-slate-400">
                      Format 0{idx + 1}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Progress Pathway Banner */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50/70 via-indigo-50/50 to-purple-50/70 border border-blue-200/60 shadow-2xs">
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-semibold text-slate-800">
                <span className="px-3 py-1 rounded-full bg-white border border-blue-200 text-[#0062D2] shadow-2xs">
                  Attendance
                </span>
                <span className="text-slate-400 font-bold">&rarr;</span>
                <span className="px-3 py-1 rounded-full bg-white border border-indigo-200 text-indigo-700 shadow-2xs">
                  Familiarity
                </span>
                <span className="text-slate-400 font-bold">&rarr;</span>
                <span className="px-3 py-1 rounded-full bg-white border border-purple-200 text-purple-700 shadow-2xs">
                  Relationship
                </span>
                <span className="text-slate-400 font-bold">&rarr;</span>
                <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white shadow-xs">
                  Belonging
                </span>
              </div>
            </div>
          </div>

          {/* Part B: Recognition & Leadership */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#061226] via-[#0A1A38] to-[#040D1E] text-white relative overflow-hidden shadow-xl border border-slate-800">
            <div className="absolute -top-10 -right-10 size-80 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-8 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
                  <span className="h-[2px] w-4 bg-gradient-to-r from-blue-400 to-rose-400 rounded-full" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-300">
                    RECOGNITION &amp; LEADERSHIP
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                  Contribution Deserves to Be Noticed
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  PEERS GLOBAL recognises entrepreneurs for what they contribute—not simply for the size of their business. Recognition grows through:
                </p>

                {/* 6 Recognition Badges with Icons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
                  {RECOGNITION_CHANNELS.map((rc, idx) => {
                    const Icon = rc.icon
                    return (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-3 text-xs text-slate-200"
                      >
                        <div className="size-7 rounded-lg bg-sky-400/20 text-sky-300 flex items-center justify-center shrink-0">
                          <Icon className="size-3.5" />
                        </div>
                        <span className="font-medium">{rc.text}</span>
                      </div>
                    )
                  })}
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-sky-200 italic leading-relaxed">
                  &ldquo;Leadership here is not simply a title. Leadership is responsibility accepted in service of others.&rdquo;
                </div>
              </div>

              {/* Right Side: Scale Box */}
              <div className="lg:col-span-4 p-7 sm:p-8 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 backdrop-blur-md space-y-4 text-center shadow-lg">
                <div className="size-14 rounded-2xl bg-amber-400/20 border border-amber-400/30 text-amber-300 flex items-center justify-center mx-auto shadow-xs">
                  <Award className="size-7" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Local to Global Scale</h4>
                  <p className="text-xs text-slate-300 font-light mt-1">
                    Leadership progression follows contribution across all tiers:
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-[11px] font-mono text-amber-300 tracking-wider">
                  Circle &rarr; City &rarr; District &rarr; State &rarr; Country &rarr; Global
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: THE LSR GROWTH MODEL + MEMBERSHIP IS NOT A CHECKLIST
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Part A: The LSR Growth Model */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 mb-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0062D2]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0062D2]">
                The Core Engine
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              The LSR Growth Model
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
              <strong className="text-slate-900 font-semibold">Learning + Sharing + Relationships.</strong> A continuous triangular feedback loop where each pillar deepens and compounds the other two.
            </p>
          </div>

          {/* 3 Executive LSR Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 1. Learning */}
            <div className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-blue-300 hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="size-12 rounded-2xl bg-blue-50 text-[#0062D2] border border-blue-100/80 flex items-center justify-center font-bold group-hover:scale-105 transition-transform duration-300">
                    <BookOpen className="size-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Pillar 01
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0062D2] transition-colors">
                    Learning
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#0062D2] mt-0.5">
                    Grow What You Know
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  Gain practical insights from entrepreneurs who have built through the exact fires and challenges you currently navigate.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                <span className="size-1.5 rounded-full bg-[#0062D2]" />
                <span>Experiential playbooks &amp; roundtables</span>
              </div>
            </div>

            {/* 2. Sharing */}
            <div className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-emerald-300 hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="size-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100/80 flex items-center justify-center font-bold group-hover:scale-105 transition-transform duration-300">
                    <Share2 className="size-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Pillar 02
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    Sharing
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600 mt-0.5">
                    Give What You Know
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  Your hard-won wisdom gains true value when shared freely to unblock a fellow founder or open a closed door.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                <span className="size-1.5 rounded-full bg-emerald-600" />
                <span>Mentorship, warm intros &amp; resources</span>
              </div>
            </div>

            {/* 3. Relationships */}
            <div className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-rose-300 hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="size-12 rounded-2xl bg-rose-50 text-rose-600 border border-rose-100/80 flex items-center justify-center font-bold group-hover:scale-105 transition-transform duration-300">
                    <HeartHandshake className="size-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Pillar 03
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-rose-700 transition-colors">
                    Relationships
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-rose-600 mt-0.5">
                    Grow Who You Know
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  Depth precedes speed. Long-term mutual trust lays the fertile ground where multi-year partnerships flourish.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                <span className="size-1.5 rounded-full bg-rose-600" />
                <span>Lifelong bonds &amp; joint ventures</span>
              </div>
            </div>

          </div>

          {/* Part B: Your Membership Is Not a Checklist vs Individual Journeys */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
            
            {/* Left 6 Cols: Philosophy Checklist */}
            <div className="lg:col-span-6 p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/70 text-slate-700 text-[11px] font-bold uppercase tracking-wider">
                  Mindset Shift
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  Your Membership Is Not a Checklist
                </h3>

                <div className="space-y-3 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[#0062D2] font-bold mt-0.5">✦</span>
                    <p>You can attend every event and still remain a stranger. Or you can have <strong>one honest conversation</strong> that permanently pivots your venture.</p>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[#0062D2] font-bold mt-0.5">✦</span>
                    <p>You can hoard contacts on a phone. Or you can <strong>build genuine relationships</strong> that protect you during downturns.</p>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[#0062D2] font-bold mt-0.5">✦</span>
                    <p>You can consume passively. Or you can <strong>contribute generously</strong> so that other founders remember your impact for decades.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs sm:text-sm font-semibold text-slate-900">
                PEERS GLOBAL does not ask &ldquo;What did you attend?&rdquo; &mdash; but <span className="text-[#0062D2]">&ldquo;What did you make possible?&rdquo;</span>
              </div>
            </div>

            {/* Right 6 Cols: Individual Journeys Dark Banner */}
            <div className="lg:col-span-6 p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-[#061226] via-[#0A1A38] to-[#040D1E] text-white shadow-xl border border-slate-800 space-y-6 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 size-64 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
                  <span className="h-[2px] w-4 bg-gradient-to-r from-blue-400 to-rose-400 rounded-full" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-300">
                    INDIVIDUAL JOURNEYS
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  Your Experience. Your Contribution. Your Journey.
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  What you receive will not be identical to any other entrepreneur. What remains completely universal and unwavering is the opportunity:
                </p>
              </div>

              <div className="relative z-10 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-3">
                <p className="text-[11px] uppercase font-bold tracking-widest text-amber-300">
                  The Universal Cycle
                </p>
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-white">
                  <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/10">Learn</span>
                  <span className="text-sky-300">&bull;</span>
                  <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/10">Share</span>
                  <span className="text-sky-300">&bull;</span>
                  <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/10">Build Relationships</span>
                  <span className="text-sky-300">&bull;</span>
                  <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/10">Collaborate</span>
                  <span className="text-sky-300">&bull;</span>
                  <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/10">Create Impact</span>
                </div>
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
                  START YOUR JOURNEY
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold leading-[1.2] tracking-tight text-white">
                The community is not what we give you. It is what we create with you.
              </h2>

              <p className="text-base sm:text-lg font-medium text-slate-200 max-w-2xl">
                Your knowledge, experience, relationships, and contribution become part of the collective experience. You do not simply join a community—you become part of what the community can make possible.
              </p>

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
                Create <br />
                Impact <br />
                <span className="text-[#7DD3FC]">Together</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
