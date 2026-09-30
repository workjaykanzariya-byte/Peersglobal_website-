'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  Users,
  Building2,
  Globe2,
  Target,
  Sparkles,
  Quote,
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
  Calendar,
  Award,
  BookOpen,
  Heart,
  TrendingUp,
  Briefcase,
  Layers,
  Megaphone,
  Clock,
  Compass,
  UserCheck,
  Eye,
  Flag,
  Share2,
  Network,
  Handshake,
  MessageSquare,
  Shield,
  Smile,
} from 'lucide-react'
import { usePageMedia } from '@/lib/hooks/use-page-media'

// ─── Stats Bar ────────────────────────────────────────────────────────────
const STATS = [
  { icon: Users, value: '10,000+', label: 'Entrepreneurs' },
  { icon: Globe2, value: '25+', label: 'Countries' },
  { icon: Network, value: '100+', label: 'Industry Circles' },
  { icon: Target, value: '1M', label: 'Lives to Impact' },
]

// ─── What The Role Carries (3 Pillars) ────────────────────────────────────
const THREE_PILLARS = [
  {
    number: '01',
    title: 'THE NAME',
    headline: 'Representing Values, Relationships & Culture',
    desc: 'You represent PEERS GLOBAL in the way you speak, connect and conduct yourself. The name is not a logo. It represents the values, relationships and culture associated with the community.',
    icon: ShieldCheck,
  },
  {
    number: '02',
    title: 'THE STORY',
    headline: 'Connecting Through Shared Purpose',
    desc: 'People understand communities through people. An Ambassador helps others discover the story behind PEERS GLOBAL—the belief that entrepreneurs should not have to build alone, and that meaningful relationships can create possibilities beyond individual success.',
    icon: BookOpen,
  },
  {
    number: '03',
    title: 'THE EXPERIENCE',
    headline: 'Demonstrating Culture in Action',
    desc: 'The strongest introduction is not a presentation. It is an experience of how you treat people. A thoughtful introduction. A genuine conversation. A useful connection. A respectful invitation. A willingness to listen. The Ambassador helps make the culture visible before someone ever becomes a Peer.',
    icon: Heart,
  },
]

// ─── Who You Become Points ────────────────────────────────────────────────
const WHO_YOU_BECOME_POINTS = [
  'How you introduce people',
  'How you build trust',
  'How you speak about others',
  'How you create connections',
  'How you represent shared values',
  'How you recognise opportunity for someone else',
  'How you leave people feeling after an interaction',
]

// ─── What an Ambassador Does (8 Core Actions) ─────────────────────────────
const EIGHT_ACTIONS = [
  {
    action: 'CONNECT',
    title: 'Connect Relevant Founders',
    desc: 'Introduce entrepreneurs to people, conversations and possibilities that may be relevant to them.',
    icon: Network,
  },
  {
    action: 'INTRODUCE',
    title: 'Authentic Introductions',
    desc: 'Help someone discover PEERS GLOBAL through a genuine conversation rather than a sales pitch.',
    icon: Handshake,
  },
  {
    action: 'REPRESENT',
    title: 'Carry the Spirit',
    desc: 'Carry the spirit and standards of the community into professional and social environments.',
    icon: Shield,
  },
  {
    action: 'SHARE',
    title: 'Share Real Stories',
    desc: 'Share experiences, stories and examples that help others understand what the community means to its people.',
    icon: Megaphone,
  },
  {
    action: 'OPEN DOORS',
    title: 'Create Opportunity Bridges',
    desc: 'Create opportunities for relationships to begin—between entrepreneurs, Circles, industries and communities.',
    icon: Compass,
  },
  {
    action: 'WELCOME',
    title: 'Warm Hospitality',
    desc: 'Help new people feel comfortable when they encounter the community for the first time.',
    icon: Smile,
  },
  {
    action: 'RECOGNISE',
    title: 'Spot Valuable Contribution',
    desc: 'Notice people who may have something valuable to contribute and help bring their contribution into the right conversation.',
    icon: Award,
  },
  {
    action: 'BUILD TRUST',
    title: 'Strengthen Confidence',
    desc: 'Understand that every interaction can strengthen—or weaken—the confidence people place in the community.',
    icon: CheckCircle2,
  },
]

// ─── Who This Is For ──────────────────────────────────────────────────────
const WHO_THIS_IS_FOR = [
  'Believes strongly in the purpose of PEERS GLOBAL',
  'Naturally connects people',
  'Enjoys introducing people to one another',
  'Communicates with warmth and authenticity',
  'Understands the value of trust',
  'Represents the community responsibly',
  'Enjoys opening doors for others',
  'Believes relationships are more important than transactions',
  'Can speak about the community without exaggeration',
  'Wants to contribute beyond their own business',
]

// ─── Frequently Asked Questions ──────────────────────────────────────────
const FAQ = [
  {
    q: 'Is an Ambassador a salesperson for PEERS GLOBAL?',
    a: 'No. The role is about representing the community, creating understanding and opening meaningful conversations—not pressuring people to join.',
  },
  {
    q: 'Does an Ambassador have to bring new members?',
    a: 'The source architecture does not define a specific membership quota or numerical target for the Ambassador role. The emphasis is on representing and carrying the community through people.',
  },
  {
    q: 'Does an Ambassador represent PEERS GLOBAL everywhere?',
    a: 'An Ambassador carries the name and spirit of the community in their interactions. The precise scope of formal representation should follow the approved Ambassador guidelines.',
  },
  {
    q: 'Can anyone become an Ambassador?',
    a: 'The source architecture does not specify formal eligibility criteria. The role should therefore be assigned according to the approved leadership and Ambassador process rather than assumed eligibility.',
  },
  {
    q: 'What is the most important quality of an Ambassador?',
    a: 'Trust. People may forget what you told them. They remember how you made them feel.',
  },
  {
    q: 'What should an Ambassador never do?',
    a: 'An Ambassador should never misrepresent the community, make promises on its behalf, pressure people into joining, or use the relationship only as a business opportunity.',
  },
]

export function AmbassadorClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const { getMedia } = usePageMedia('leadership')
  const heroMedia = getMedia({
    sectionName: 'Ambassador',
    subModuleName: 'AMBASSADOR HERO',
    subModuleId: 'sub-leadership-ambassador',
    fallbackUrl: '/videos/journey-bg.mp4',
    fallbackSourceType: 'localhost',
    fallbackTitle: 'Ambassador Leadership Role & Stature',
  })

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFBFD] text-slate-900">
      {/* ─── 1. HERO SECTION ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-5 sm:pt-6 pb-3 sm:pb-4 border-b border-slate-200/80 bg-gradient-to-b from-white via-[#F6F9FD] to-[#EDF3FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-5">
            <Link href="/" className="hover:text-[#0062D2] transition-colors">
              Home
            </Link>
            <ChevronRight className="size-3 text-slate-400" />
            <Link href="/leadership" className="hover:text-[#0062D2] transition-colors">
              Leadership
            </Link>
            <ChevronRight className="size-3 text-slate-400" />
            <span className="text-slate-800 font-semibold">Ambassadors</span>
          </nav>

          {/* Hero Banner Box */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[36px] bg-white border border-slate-200/80 shadow-sm min-h-[520px] lg:min-h-[580px] flex items-center">
            {/* Fade Video Visual (Right 60%) */}
            <div
              className="absolute top-0 right-0 bottom-0 w-full sm:w-[65%] lg:w-[58%] overflow-hidden pointer-events-none"
              style={{
                maskImage:
                  'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 10%, rgba(0,0,0,0.6) 28%, black 55%)',
                WebkitMaskImage:
                  'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 10%, rgba(0,0,0,0.6) 28%, black 55%)',
              }}
            >
              {heroMedia.isYouTube && heroMedia.embedUrl ? (
                <iframe
                  src={`${heroMedia.embedUrl}&mute=1&loop=1`}
                  title={heroMedia.title}
                  className="w-full h-full border-0 object-cover pointer-events-none scale-125"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              ) : (
                <video
                  key={heroMedia.mediaUrl}
                  src={heroMedia.mediaUrl || '/videos/journey-bg.mp4'}
                  poster="/images/leadership-ambassador.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover object-center scale-105"
                />
              )}
              <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-white via-white/85 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />

              {/* Cursive Script Overlay */}
              <div className="absolute top-6 sm:top-10 right-6 sm:right-10 z-20 text-right drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] pointer-events-none select-none">
                <p
                  className="text-2xl sm:text-3xl text-white/95 leading-tight font-medium"
                  style={{ fontFamily: 'var(--font-script)' }}
                >
                  Carry The Name.
                </p>
                <p
                  className="text-2xl sm:text-3xl text-white/95 leading-tight mt-0.5 font-medium"
                  style={{ fontFamily: 'var(--font-script)' }}
                >
                  Carry The Spirit.
                </p>
                <p
                  className="text-3xl sm:text-4xl text-amber-300 font-bold leading-tight mt-0.5"
                  style={{ fontFamily: 'var(--font-script)' }}
                >
                  Create Trust.
                </p>
              </div>
            </div>

            {/* Left Content */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl flex flex-col items-start">
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3">
                  <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                  <span className="brand-gradient-text">AMBASSADOR</span>
                  <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                </div>

                <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-950 leading-[1.08] mb-4">
                  Ambassador
                </h1>

                <p className="text-xl sm:text-2xl font-medium text-slate-900 leading-snug mb-3">
                  You carry the name.
                </p>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl font-light">
                  An Ambassador represents more than a community. You carry its spirit into conversations, relationships, cities, industries and opportunities. You are often the person someone encounters before they ever experience PEERS GLOBAL for themselves. That makes the role meaningful. Because when you carry the name, you also carry the responsibility of representing what the community believes in.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="https://unity.peersglobal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white px-8 py-3.5 text-sm font-semibold shadow-md shadow-blue-600/20 transition-all hover:scale-105 inline-flex items-center gap-2"
                  >
                    <span>Download Unity App</span>
                    <ArrowRight className="size-4" />
                  </a>
                  <Link
                    href="/contact?intent=leadership"
                    className="rounded-full border border-slate-300 hover:border-[#0062D2] bg-white hover:bg-slate-50 text-slate-800 hover:text-[#0062D2] px-8 py-3.5 text-sm font-semibold transition-all inline-flex items-center gap-2 shadow-sm"
                  >
                    <span>Apply to Lead</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Stats Bar */}
          <div className="mt-4 sm:mt-5 grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
            {STATS.map((stat, i) => {
              const Icon = stat.icon
              return (
                <div
                  key={i}
                  className="rounded-2xl bg-white border border-slate-200/90 p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="size-12 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0">
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <div className="font-serif text-2xl sm:text-3xl font-bold text-slate-950 leading-none">
                      {stat.value}
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">
                      {stat.label}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── 2. THE COMMUNITY TRAVELS THROUGH PEOPLE ────────────────────── */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3">
                <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                <span className="brand-gradient-text">RELATIONAL GROWTH</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight leading-tight mb-5">
                The community travels through people
              </h2>
              <p className="text-base sm:text-lg text-slate-700 font-light leading-relaxed mb-4">
                A community does not grow simply because a website exists. It grows because people talk about it. They introduce it. They open doors. They connect people who may have something meaningful to build together. They share their experience. They create trust.
              </p>
              <p className="text-base sm:text-lg text-slate-700 font-light leading-relaxed mb-6">
                And sometimes, one conversation becomes the beginning of someone&apos;s journey into a community they did not know existed. That is how PEERS GLOBAL travels: <strong>Through people.</strong>
              </p>

              <div className="p-6 rounded-2xl bg-[#FAFBFD] border border-slate-200 shadow-sm">
                <p className="text-xs uppercase font-bold text-[#0062D2] tracking-wider mb-1.5">
                  THE AMBASSADOR&apos;S APPROACH
                </p>
                <p className="text-sm sm:text-base text-slate-900 font-medium leading-relaxed">
                  Not by selling membership. Not by making promises. Not by speaking for everyone. But by helping people understand what PEERS GLOBAL stands for—and giving them an opportunity to discover whether they belong.
                </p>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200/60 aspect-[4/3]">
                <Image
                  src="/images/who-we-are-friends.jpg"
                  alt="Ambassador engaging in authentic conversation with entrepreneurs"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 text-right select-none pointer-events-none drop-shadow-md">
                  <p className="text-xs text-white/90 font-medium tracking-wider uppercase">
                    Representation
                  </p>
                  <p
                    className="text-lg text-amber-300 font-bold leading-tight"
                    style={{ fontFamily: 'var(--font-script)' }}
                  >
                    Built On Trust
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. WHAT THE ROLE CARRIES (3 PILLARS - DARK THEME) ────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#070D18] via-[#0B1528] to-[#0A101D] py-20 sm:py-24 lg:py-28 text-white border-b border-slate-800/80">
        <div aria-hidden className="pointer-events-none absolute top-1/4 left-10 size-[320px] rounded-full bg-blue-600/12 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute bottom-10 right-10 size-[380px] rounded-full bg-cyan-500/8 blur-[140px]" />
        <div aria-hidden className="pointer-events-none absolute top-10 right-1/3 size-[250px] rounded-full bg-indigo-600/8 blur-[100px]" />

        <svg viewBox="0 0 1400 600" className="absolute inset-0 size-full pointer-events-none opacity-20" preserveAspectRatio="none">
          <g fill="#38BDF8">
            <circle cx="80" cy="60" r="1.5" /><circle cx="200" cy="130" r="1" /><circle cx="340" cy="45" r="2" />
            <circle cx="500" cy="100" r="1.2" /><circle cx="680" cy="35" r="1.5" /><circle cx="850" cy="110" r="1" />
            <circle cx="1020" cy="60" r="2" /><circle cx="1180" cy="160" r="1.2" /><circle cx="1340" cy="80" r="1.5" />
            <circle cx="150" cy="500" r="1.2" /><circle cx="400" cy="540" r="1.8" /><circle cx="640" cy="560" r="1" />
            <circle cx="900" cy="520" r="1.5" /><circle cx="1100" cy="550" r="1" /><circle cx="70" cy="320" r="1" />
            <circle cx="310" cy="270" r="1.8" /><circle cx="760" cy="300" r="1.2" /><circle cx="1260" cy="360" r="1" />
          </g>
          <g stroke="#38BDF8" strokeWidth="0.5" opacity="0.35" fill="none">
            <line x1="80" y1="60" x2="200" y2="130" /><line x1="200" y1="130" x2="340" y2="45" />
            <line x1="500" y1="100" x2="680" y2="35" /><line x1="850" y1="110" x2="1020" y2="60" />
            <line x1="1020" y1="60" x2="1180" y2="160" />
          </g>
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-cyan-400 mb-3.5">
              <span className="w-5 h-px bg-cyan-400" />
              THREE CORE PILLARS
              <span className="w-5 h-px bg-cyan-400" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
              What the role carries
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              The Ambassador role carries three essential dimensions that define how the community is introduced to the world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {THREE_PILLARS.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.number}
                  className="p-7 rounded-3xl border border-slate-700/60 bg-gradient-to-br from-[#0B1528] via-[#0F1D38] to-[#070D18] shadow-[0_20px_50px_rgba(11,21,40,0.35)] hover:border-cyan-500/50 hover:shadow-[0_25px_60px_rgba(56,189,248,0.12)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.06] via-transparent to-black/30" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-cyan-400 border border-cyan-500/30 px-2.5 py-1 rounded-full bg-cyan-500/10">
                        {item.number}
                      </span>
                      <div className="size-11 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/25 transition-all shadow-inner">
                        <Icon className="size-5" />
                      </div>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-cyan-300 font-semibold mb-3">
                      {item.headline}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── 4. WHO YOU BECOME & INFLUENCE OF TRUST ──────────────────────── */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left: Consciousness & Awareness */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-1">
                <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                <span className="brand-gradient-text">AWARENESS & STATURE</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
                Who you become
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-light">
                An Ambassador is not simply someone who talks about PEERS GLOBAL. You become someone who learns to carry a community with greater awareness. You become more conscious of:
              </p>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {WHO_YOU_BECOME_POINTS.map((pt, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-[#FAFBFD] border border-slate-200 flex items-start gap-2.5 shadow-sm">
                    <CheckCircle2 className="size-4 text-[#0062D2] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-800 font-medium leading-snug">
                      {pt}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-100">
                <p className="text-sm sm:text-base font-serif font-bold text-slate-900">
                  The role develops a different kind of influence. Not influence created by authority. Influence created by trust.
                </p>
              </div>
            </div>

            {/* Right: The Guiding Question Card */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-gradient-to-br from-[#FAFBFD] to-[#F1F5F9] border border-slate-200/90 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="size-12 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center mb-5">
                    <Quote className="size-6" />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#0062D2] mb-2">
                    THE CRITICAL QUESTION
                  </h3>
                  <blockquote className="font-serif text-xl sm:text-2xl font-bold text-slate-950 leading-snug tracking-tight mb-4">
                    “When someone meets you, what do they feel about the community you represent?”
                  </blockquote>
                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                    Every interaction reflects back on the standards and character of PEERS GLOBAL. That awareness shapes how an Ambassador walks into every room.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. WHAT AN AMBASSADOR DOES (8 ACTIONS) ───────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3">
              <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
              <span className="brand-gradient-text">ACTION & PRACTICE</span>
              <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight">
              What an Ambassador does
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3 font-light">
              The Ambassador does not need to have every answer. The Ambassador needs to know how to connect the right person to the right conversation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EIGHT_ACTIONS.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.action}
                  className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:border-[#0062D2]/40 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-[#0062D2] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                        {item.action}
                      </span>
                      <div className="size-10 rounded-xl bg-slate-50 text-[#0062D2] flex items-center justify-center">
                        <Icon className="size-5" />
                      </div>
                    </div>
                    <h3 className="font-serif text-base font-bold text-slate-950 mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── 6. THIS IS NOT A SALES ROLE & THE AMBASSADOR MINDSET ────────── */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-stretch">
            {/* Left: Not a Sales Role */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#0062D2] mb-2">
                  CULTURE & INTEGRITY
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950 mb-4">
                  This is not a sales role
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-4">
                  An Ambassador is not measured by how many people they persuade. The purpose is not to create pressure. The purpose is to create understanding.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="p-3.5 rounded-2xl bg-rose-50/60 border border-rose-200 text-xs text-rose-900">
                    <span className="font-bold text-rose-950 block mb-0.5">NOT:</span>
                    “You should join.”
                  </div>
                  <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-950">
                    <span className="font-bold text-emerald-950 block mb-0.5">INSTEAD:</span>
                    “Let me help you understand what this community is about. You can decide whether it is right for you.”
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  People should feel respected. They should feel heard. They should feel free to make their own decision. If they eventually become a Peer, it should be because they found something meaningful.
                </p>
              </div>
            </div>

            {/* Right: The Ambassador Mindset */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#0062D2] mb-2">
                  DAILY PHILOSOPHY
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950 mb-4">
                  The Ambassador mindset
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-4">
                  Two simple questions guide every interaction:
                </p>

                <div className="space-y-3 mb-6">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200">
                    <p className="text-sm font-serif font-bold text-slate-950">
                      “Who could benefit from knowing whom?”
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200">
                    <p className="text-sm font-serif font-bold text-slate-950">
                      “How can I make this person&apos;s journey a little more meaningful?”
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100">
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    Promotion asks: <em>“How many people can I bring?”</em><br />
                    Representation asks: <strong>“How well can I carry what this community stands for?”</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. WHO THIS IS FOR ─────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-2">
                <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                <span className="brand-gradient-text">PROFILE & FIT</span>
                <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
                Who this is for
              </h2>
              <p className="text-sm text-slate-600 mt-2 font-light">
                The Ambassador role may suit an entrepreneur who carries natural warmth and generosity.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3.5 mb-8">
              {WHO_THIS_IS_FOR.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FAFBFD] border border-slate-200">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-800 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <p className="text-xs sm:text-sm text-slate-600 font-light">
                You do not have to be the loudest person in the room. You do not have to know everyone. Sometimes the most effective Ambassador is simply the person who notices that two people should meet—and makes the introduction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 8. FREQUENTLY ASKED QUESTIONS ──────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3">
              <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
              <span className="brand-gradient-text">FREQUENTLY ASKED QUESTIONS</span>
              <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ.map((item, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#FAFBFD] border border-slate-200/90 overflow-hidden shadow-sm transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold text-slate-950 hover:text-[#0062D2] transition-colors"
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className={`size-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#0062D2]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed font-light border-t border-slate-200/80">
                      {item.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── 9. CARRY THE NAME WITH MEANING (CLOSING HERO BANNER) ────────── */}
      <section className="relative isolate overflow-hidden bg-[#040F24] text-white py-20 lg:py-28">
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

        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-[min(58vw,760px)] opacity-35">
          <svg
            viewBox="0 0 760 520"
            fill="none"
            className="h-full w-full"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M760 40C555 45 405 145 375 310C355 423 265 493 70 520" stroke="currentColor" strokeWidth="1" className="text-blue-300/30" />
            <path d="M760 120C590 125 470 205 445 335C424 442 335 500 180 520" stroke="currentColor" strokeWidth="1" strokeDasharray="5 8" className="text-sky-200/25" />
            <path d="M760 215C640 220 565 278 540 370C519 446 470 490 390 520" stroke="currentColor" strokeWidth="1" className="text-blue-200/20" />
            <circle cx="540" cy="370" r="4" fill="currentColor" className="text-sky-300/60" />
            <circle cx="540" cy="370" r="13" stroke="currentColor" strokeWidth="1" className="text-sky-300/25" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-sky-200 mb-3">
                <span className="w-5 h-px bg-sky-200" />
                CARRY THE NAME WITH MEANING
                <span className="w-5 h-px bg-sky-200" />
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-4">
                The community travels through people.
              </h2>

              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-light mb-3 max-w-2xl">
                When you introduce PEERS GLOBAL to someone, you are not simply introducing an organisation. You may be introducing them to a relationship. A Circle. A possibility. A person who can help them. Or a person they may be able to help.
              </p>

              <p className="text-base sm:text-lg text-amber-300 font-medium leading-relaxed mb-8 max-w-2xl">
                Carry the name with respect. Carry it with authenticity. Carry it with responsibility.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact?intent=leadership"
                  className="rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white px-8 py-3.5 text-sm font-semibold shadow-lg transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                  <span>Apply to Lead</span>
                  <ArrowRight className="size-4" />
                </Link>
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/40 hover:border-white bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 text-sm font-semibold backdrop-blur-md transition-all inline-flex items-center gap-2"
                >
                  <span>Download Unity App</span>
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 text-left lg:text-right select-none pointer-events-none drop-shadow-lg">
              <p
                className="text-2xl sm:text-3xl text-white/70 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Carry The Name.
              </p>
              <p
                className="text-2xl sm:text-3xl text-white/80 leading-tight font-medium mt-1"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                With Respect.
              </p>
              <p
                className="text-2xl sm:text-3xl text-white leading-tight font-medium mt-1"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                With Authenticity.
              </p>
              <p
                className="text-3xl sm:text-4xl text-amber-300 font-bold leading-tight mt-1"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                With Responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
