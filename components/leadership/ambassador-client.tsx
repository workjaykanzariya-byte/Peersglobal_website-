'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GalaxyButton } from '@/components/ui/galaxy-button'
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
import { ClosingCtaSection } from '@/components/site/ClosingCtaSection'

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
      {/* ─── 1. HERO SECTION (MASTER HOMEPAGE HERO STYLE) ──────────────── */}
      <section className="relative min-h-[560px] sm:min-h-[620px] lg:min-h-[680px] bg-[#040F24] text-white flex items-center overflow-hidden">
        {/* Background video layer */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {heroMedia.isYouTube && heroMedia.embedUrl ? (
            <iframe
              src={`${heroMedia.embedUrl}&mute=1&loop=1`}
              title={heroMedia.title}
              className="w-full h-full border-0 object-cover pointer-events-none scale-125 opacity-40"
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
              className="w-full h-full object-cover object-center opacity-40 scale-105"
            />
          )}
          {/* Gradients to blend smoothly */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#040F24] via-[#040F24]/85 to-transparent sm:w-3/4" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040F24] via-transparent to-[#040F24]/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="size-3 text-slate-400" />
            <Link href="/leadership" className="hover:text-white transition-colors">
              Leadership
            </Link>
            <ChevronRight className="size-3 text-slate-400" />
            <span className="text-sky-300 font-semibold">Ambassadors</span>
          </nav>

          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-slate-200">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              AMBASSADOR LEADERSHIP
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              <span>Ambassador</span>{' '}
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-rose-400 bg-clip-text text-transparent">Role</span>
            </h1>

            <p className="text-xl sm:text-2xl font-medium text-slate-200 leading-snug">
              You carry the name. You carry the trust.
            </p>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-light">
              An Ambassador represents more than a community. You carry its spirit into conversations, relationships, cities, industries and opportunities. You are often the person someone encounters before they ever experience PEERS GLOBAL for themselves.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <GalaxyButton
                href="https://unity.peersglobal.com"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
              >
                Download Unity App
              </GalaxyButton>
              <GalaxyButton
                href="/contact?intent=leadership"
                variant="transparent"
                size="md"
              >
                Become an Ambassador
              </GalaxyButton>
            </div>
          </div>
          {/* Floating Stats Bar */}
          <div className="mt-8 sm:mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
            {STATS.map((stat, i) => {
              const Icon = stat.icon
              return (
                <div
                  key={i}
                  className="rounded-2xl bg-white/5 border border-white/10 p-5 flex items-center gap-4 shadow-sm backdrop-blur-xs"
                >
                  <div className="size-12 rounded-xl bg-blue-500/20 text-sky-300 flex items-center justify-center shrink-0 border border-blue-400/30">
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <div className="font-serif text-2xl sm:text-3xl font-bold text-white leading-none">
                      {stat.value}
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-300 mt-1">
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

      {/* ─── 3. WHAT THE ROLE CARRIES (3 PILLARS - LIGHT THEME) ────────────── */}
      <section className="relative overflow-hidden bg-[#FAFBFD] py-16 sm:py-20 lg:py-24 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3">
              <span className="w-5 h-[2px] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
              <span className="brand-gradient-text">THREE CORE PILLARS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight leading-tight mb-4">
              What the role carries
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              The Ambassador role carries three essential dimensions that define how the community is introduced to the world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {THREE_PILLARS.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.number}
                  className="relative p-8 rounded-3xl border border-slate-200/90 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  {/* Watermark Number */}
                  <div className="absolute top-4 right-6 text-6xl font-extrabold text-slate-100 font-sans select-none pointer-events-none transition-colors group-hover:text-blue-50/70">
                    {item.number}
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="size-13 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center shadow-sm border border-blue-100/70">
                        <Icon className="size-6" />
                      </div>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-slate-950 mb-1 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs font-bold text-[#0062D2] mb-4 uppercase tracking-wider">
                      {item.headline}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed font-light">
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
      <ClosingCtaSection
        eyebrow="CARRY THE NAME WITH MEANING"
        title="The community travels through people."
        subtitle="When you introduce PEERS GLOBAL to someone, you may be introducing them to a relationship, a Circle, and a possibility."
        description="Carry the name with respect. Carry it with authenticity. Carry it with responsibility."
        primaryButtonText="APPLY TO LEAD"
        primaryButtonHref="/contact?intent=leadership"
        secondaryButtonText="DOWNLOAD UNITY APP"
        secondaryButtonHref="https://unity.peersglobal.com"
      />
    </div>
  )
}
