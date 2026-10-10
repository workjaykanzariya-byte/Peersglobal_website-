'use client'

import React from 'react'
import Link from 'next/link'
import { GalaxyButton } from '@/components/ui/galaxy-button'
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
  Flag,
  Handshake,
} from 'lucide-react'
import { ClosingCtaSection } from '@/components/site/ClosingCtaSection'

// ─── Verified Milestones Timeline ───────────────────────────────────────────
const VERIFIED_TIMELINE = [
  {
    tag: '[DATE] — THE BEGINNING',
    title: 'The Observation in the Corridor',
    desc: '[Verified milestone and significance]',
    highlight: 'It began with an observation',
  },
  {
    tag: '[DATE] — THE FIRST STEP',
    title: 'Early Steps of Entrepreneurship',
    desc: '[Verified milestone and significance]',
    highlight: 'Taking risks and building foundations',
  },
  {
    tag: '[DATE] — THE IDEA TAKES SHAPE',
    title: 'The Story Nobody Would Publish',
    desc: '[Verified milestone and significance]',
    highlight: 'Human understanding over headlines',
  },
  {
    tag: '[DATE] — THE COMMUNITY BEGINS',
    title: 'Why a Community & Why Peers',
    desc: '[Verified milestone and significance]',
    highlight: 'Moving beyond transactional networking',
  },
  {
    tag: '[DATE] — A NEW STAGE',
    title: 'What We Built: Governed Circles',
    desc: '[Verified milestone and significance]',
    highlight: 'Structures for genuine collaboration',
  },
  {
    tag: '[DATE] — THE ECOSYSTEM EXPANDS',
    title: 'Unity App & Pan-Bharat Connect',
    desc: '[Verified milestone and significance]',
    highlight: 'Connecting across geography & industry',
  },
  {
    tag: '[DATE] — TODAY',
    title: '1 Million+ Entrepreneurs to Impact by 2030',
    desc: '[Verified current milestone]',
    highlight: '1 Action = 1 Life Impacted',
  },
]

export function OurStoryClient() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0f131a] selection:bg-[#1D4ED8] selection:text-white font-sans">
      
      {/* =========================================================================
          1. HERO SECTION (MASTER HOMEPAGE HERO STYLE WITH BACKGROUND VIDEO)
          ========================================================================= */}
      <section id="our-story-hero" className="relative overflow-hidden bg-[#040F24] text-white border-b border-slate-800">
        {/* Background video layer */}
        <video
          className="absolute inset-0 size-full object-cover opacity-60"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
          poster="/images/circles-hero-new.jpg"
          src="/videos/homepage-hero-bg.mp4"
        />
        {/* Subtle, crisp gradient scrim overlay matching homepage/the-idea */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(100deg,rgba(2,8,23,0.72)_0%,rgba(4,15,36,0.52)_45%,rgba(4,15,36,0.32)_100%)] pointer-events-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-8 sm:py-12">
            
            {/* Left Content Area */}
            <div className="lg:col-span-8 max-w-3xl space-y-4 sm:space-y-5">
              {/* Breadcrumbs */}
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium tracking-wide">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <ChevronRight className="size-3.5 text-slate-400" />
                <span className="text-sky-300 font-semibold">Our Story</span>
              </div>

              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur-xs uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span>OUR STORY &amp; FOUNDATION</span>
              </div>

              {/* H1 Heading */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-semibold text-white tracking-tight leading-[1.14]">
                  It began with one observation,{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-rose-400">
                    in a hospital corridor.
                  </span>
                </h1>
                <p className="text-base sm:text-xl text-slate-200 font-normal leading-relaxed">
                  Before there was a community, there was a question.
                </p>
              </div>

              {/* Story Intro Quote */}
              <p className="text-sm sm:text-base text-white/95 font-medium italic border-l-2 border-[#E11D48] pl-3.5 py-0.5 max-w-2xl">
                &ldquo;A question about what happens to an entrepreneur when the business journey becomes difficult—and there is nobody around who truly understands what that journey feels like.&rdquo;
              </p>

              {/* Key Premise Box */}
              <div className="space-y-1.5 text-xs sm:text-sm text-slate-300 font-light">
                <p>PEERS GLOBAL did not begin with a website. It did not begin with a membership plan.</p>
                <p className="text-white font-semibold">
                  It began with an observation: <span className="text-sky-300">Entrepreneurs should not have to build alone.</span>
                </p>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <GalaxyButton
                  href="#before-there-was-a-community"
                  size="default"
                  className="uppercase tracking-wider font-semibold"
                >
                  Read Full Story
                </GalaxyButton>

                <GalaxyButton
                  href="/the-idea"
                  variant="transparent"
                  size="default"
                  className="font-medium"
                >
                  Discover The Idea
                </GalaxyButton>
              </div>

              {/* Stat Band */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full max-w-xl pt-6 border-t border-white/20">
                {[
                  { icon: HeartHandshake, value: 'Trust First', label: 'Genesis in the Corridor' },
                  { icon: Users, value: 'Relationship', label: 'Beyond Transactions' },
                  { icon: Target, value: '1M Mission', label: 'Life Impact by 2030' },
                ].map((s) => {
                  const Icon = s.icon
                  return (
                    <div
                      key={s.label}
                      className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.08] hover:bg-white/[0.12] border border-white/15 backdrop-blur-xs transition-all"
                    >
                      <div className="size-10 rounded-xl bg-blue-500/25 border border-blue-400/35 flex items-center justify-center text-sky-300 shrink-0 shadow-xs">
                        <Icon className="size-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-bold text-sm sm:text-base text-white tracking-tight leading-tight whitespace-nowrap">
                          {s.value}
                        </div>
                        <div className="text-[11px] text-slate-300 font-medium mt-0.5 leading-snug truncate">
                          {s.label}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right Cursive Script Highlights */}
            <div className="hidden lg:flex lg:col-span-4 flex-col items-end text-right select-none pointer-events-none drop-shadow-xl space-y-1.5">
              <p className="text-2xl sm:text-3xl text-white/80 leading-tight italic font-serif">
                Never Build Alone
              </p>
              <p className="text-3xl sm:text-4xl text-white leading-tight font-bold italic font-serif">
                Partners in Business
              </p>
              <p className="text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-rose-300 font-bold italic font-serif leading-tight">
                Friends in Life
              </p>
            </div>

          </div>
        </div>
      </section>



      {/* =========================================================================
          2. BEFORE THERE WAS A COMMUNITY
          ========================================================================= */}
      <section id="before-there-was-a-community" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#FAFBFD] to-white border-b border-cool-grey-250/80">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  BEFORE THERE WAS A COMMUNITY
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0f131a] tracking-tight leading-[1.15]">
                <span>Every entrepreneur begins somewhere.</span>{' '}
                <span className="brand-gradient-text block sm:inline">With an idea, a decision, a risk.</span>
              </h2>

              <p className="text-base sm:text-lg text-cool-grey-600 leading-relaxed font-normal">
                With a first customer. A first employee. A first success. And, sometimes, a moment when everything becomes uncertain.
              </p>

              <div className="space-y-3 pt-1">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  The entrepreneurial journey is often described through its visible outcomes:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {['Growth.', 'Revenue.', 'Recognition.', 'Expansion.'].map((o) => (
                    <div key={o} className="p-3.5 rounded-2xl bg-white border border-cool-grey-250 text-center font-bold text-sm text-[#0f131a] shadow-xs">
                      {o}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  But there is another side of the journey that is less visible:
                </p>
                <div className="space-y-2.5">
                  <div className="p-4 rounded-2xl bg-white border border-cool-grey-250 flex items-start gap-3.5 shadow-xs">
                    <div className="size-2.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      The questions. The responsibility. The uncertainty.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-cool-grey-250 flex items-start gap-3.5 shadow-xs">
                    <div className="size-2.5 rounded-full bg-violet-600 mt-2 shrink-0" />
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      The decisions that cannot easily be explained to someone who has never carried them.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-cool-grey-250 flex items-start gap-3.5 shadow-xs">
                    <div className="size-2.5 rounded-full bg-rose-600 mt-2 shrink-0" />
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      And the feeling that, sometimes, you are carrying all of it alone.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column Question Highlight */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#061836] text-white shadow-xl space-y-6 border border-slate-800 relative overflow-hidden">
                <div className="size-12 rounded-2xl bg-white/10 text-sky-300 flex items-center justify-center border border-white/20">
                  <Sparkles className="size-6" />
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-sky-300 font-bold">
                    THE STARTING POINT
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-snug">
                    What if entrepreneurs had a community?
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                    Built not merely to connect them, but to help them build meaningful relationships with one another.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-slate-300 font-medium tracking-wide">
                    The question that sparked PEERS GLOBAL
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          3. THE STORY NOBODY WOULD PUBLISH & WHY A COMMUNITY?
          ========================================================================= */}
      <section id="story-nobody-would-publish" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white border-b border-cool-grey-250/80">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Box: The Story Nobody Would Publish */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  THE REAL HUMAN STORIES
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f131a] tracking-tight leading-tight">
                The Story Nobody Would Publish
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-cool-grey-600 font-normal leading-relaxed">
                <p>
                  Before PEERS GLOBAL, there was another part of the journey. The experience of building. Learning. Taking risks. Creating something.
                </p>
                <p>
                  And discovering that the stories behind entrepreneurship are often more human than the headlines that eventually describe them.
                </p>
                <p>
                  There were stories worth telling. But not every story found a place in the traditional media narrative.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-[#FAFBFD] border border-cool-grey-250 shadow-xs space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                  THAT EXPERIENCE CREATED ANOTHER REALISATION:
                </div>
                <p className="text-[#0f131a] font-medium text-base">
                  Entrepreneurs did not only need visibility. They needed understanding.
                </p>
                <p className="text-xs sm:text-sm text-cool-grey-600 font-normal leading-relaxed">
                  And perhaps they needed a place where their experience could be shared with people who understood the journey from the inside. That thought stayed.
                </p>
              </div>
            </div>

            {/* Right Box: Why A Community? */}
            <div id="why-a-community" className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  BEYOND PLATFORMS
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f131a] tracking-tight leading-tight">
                Why A Community?
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-cool-grey-600 font-normal leading-relaxed">
                <p>
                  A platform could have been easier. A media company could have been easier. A business network could have been easier.
                </p>
                <p className="font-bold text-[#0f131a]">
                  But connection alone was not the answer. The deeper opportunity was relationship.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {[
                  'Knowing someone\'s name is not the same as knowing their journey.',
                  'Meeting someone is not the same as trusting them.',
                  'Networking is not the same as collaboration.',
                  'And collaboration becomes meaningful only when people are willing to contribute to one another.',
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#FAFBFD] border border-cool-grey-250 shadow-xs text-xs sm:text-sm text-slate-700 font-medium">
                    {item}
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white space-y-2">
                <div className="text-xs font-mono uppercase tracking-widest text-sky-300">THE EVOLUTIONARY DIRECTION</div>
                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-bold text-slate-100">
                  <span>Connection</span>
                  <span>→</span>
                  <span>Relationship</span>
                  <span>→</span>
                  <span>Collaboration</span>
                  <span>→</span>
                  <span className="text-amber-300">Impact</span>
                </div>
                <p className="text-xs text-slate-300 font-light pt-1">That became the direction.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          4. WHY PEERS? & WHAT WE BUILT
          ========================================================================= */}
      <section id="why-peers" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#FAFBFD] to-white border-b border-cool-grey-250/80">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left: Why Peers? */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  THE WORD MATTERED
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f131a] tracking-tight leading-tight">
                Why Peers?
              </h2>

              <div className="flex flex-wrap gap-2">
                {['Not customers.', 'Not leads.', 'Not prospects.', 'Not contacts.'].map((w) => (
                  <span key={w} className="line-through text-slate-400 bg-white border border-slate-200 px-3.5 py-1.5 rounded-full text-xs font-medium">
                    {w}
                  </span>
                ))}
                <span className="text-white font-bold bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] px-4 py-1.5 rounded-full text-xs shadow-xs">
                  Peers.
                </span>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-cool-grey-250 shadow-xs space-y-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                <p>• People building businesses.</p>
                <p>• People carrying responsibility.</p>
                <p>• People learning.</p>
                <p>• People contributing.</p>
                <p>• People capable of helping one another.</p>
              </div>

              <p className="text-sm sm:text-base text-slate-900 font-semibold italic border-l-2 border-[#E11D48] pl-3.5 py-1">
                &ldquo;A Peer is not defined by what they can sell you. A Peer is defined by the relationship you can build together.&rdquo;
              </p>

              <p className="text-xs sm:text-sm text-cool-grey-600 font-normal">
                That became part of the language—and eventually part of the culture.
              </p>
            </div>

            {/* Right: What We Built */}
            <div id="what-we-built" className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  THE ARCHITECTURE
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f131a] tracking-tight leading-tight">
                What We Built
              </h2>

              <p className="text-base text-cool-grey-600 font-normal">
                The idea gradually became a structure:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  { label: 'Circles', desc: 'Created the environment for meaningful relationships.' },
                  { label: 'Industry & Purpose', desc: 'Brought people together around shared context.' },
                  { label: 'Collaboration', desc: 'Moved the community beyond networking.' },
                  { label: 'Learning', desc: 'Allowed experience to travel from one entrepreneur to another.' },
                  { label: 'Leadership', desc: 'Created opportunities for contribution.' },
                  { label: 'Impact', desc: 'Gave contribution a visible purpose.' },
                  { label: 'Unity App', desc: 'Brought the community into everyday life.' },
                  { label: 'Wider Ecosystem', desc: 'Created possibilities beyond a single meeting or a single Circle.' },
                ].map((item) => (
                  <div key={item.label} className="p-4 rounded-2xl bg-white border border-cool-grey-250 shadow-xs space-y-1">
                    <div className="text-xs font-bold text-[#1D4ED8] uppercase tracking-wider">{item.label}</div>
                    <div className="text-xs text-slate-600 font-medium">{item.desc}</div>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-1 mt-4">
                <div className="text-xs font-bold uppercase tracking-wider text-sky-300">OUR FOUNDATIONAL OBJECTIVE</div>
                <p className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed">
                  The objective was never simply to create a larger room. It was to create a better reason for people to stay connected after they left the room.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          5. THE JOURNEY SO FAR (TIMELINE)
          ========================================================================= */}
      <section id="journey-so-far" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white border-b border-cool-grey-250/80">
        <div className="max-w-7xl mx-auto space-y-14">
          
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                ACCURATE MEMORY &amp; MILESTONES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-950 tracking-tight leading-tight">
              The Journey So Far
            </h2>
            <p className="text-sm sm:text-base text-cool-grey-600 font-normal leading-relaxed">
              A story becomes meaningful when it can be remembered accurately. That is why the PEERS GLOBAL story should be told through a dated timeline—not reconstructed later from memory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {VERIFIED_TIMELINE.map((item, idx) => (
              <div
                key={item.tag}
                className="p-7 sm:p-8 rounded-3xl bg-[#FAFBFD] border border-cool-grey-250 shadow-xs hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between gap-2 border-b border-slate-200/80 pb-3.5">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1D4ED8] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                      {item.tag}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      MILESTONE #{String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-950 group-hover:text-[#1D4ED8] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-cool-grey-600 font-normal leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Highlight */}
                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <span className="size-1.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                    <span>{item.highlight}</span>
                  </div>
                  <ChevronRight className="size-4 text-slate-400 group-hover:text-[#1D4ED8] group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-900 text-xs font-mono text-center font-medium">
            [ALL DATES, MILESTONES AND CLAIMS TO BE VERIFIED BEFORE PUBLICATION]
          </div>

        </div>
      </section>

      {/* =========================================================================
          6. WHERE WE ARE NOW & WHAT WE ARE BUILDING TOWARD
          ========================================================================= */}
      <section id="what-we-are-building-toward" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#FAFBFD] to-white border-b border-cool-grey-250/80">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Where We Are Now */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  CURRENT REALITY
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f131a] tracking-tight leading-tight">
                Where We Are Now
              </h2>

              <p className="text-base text-cool-grey-600 font-normal leading-relaxed">
                PEERS GLOBAL has grown from an idea about relationships into a wider community and ecosystem:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs font-semibold text-slate-800">
                <div className="p-3 rounded-2xl bg-white border border-cool-grey-250 text-center">There are Circles.</div>
                <div className="p-3 rounded-2xl bg-white border border-cool-grey-250 text-center">There are Peers.</div>
                <div className="p-3 rounded-2xl bg-white border border-cool-grey-250 text-center">There are leaders.</div>
                <div className="p-3 rounded-2xl bg-white border border-cool-grey-250 text-center">There are collaborations.</div>
                <div className="p-3 rounded-2xl bg-white border border-cool-grey-250 text-center">There are stories.</div>
                <div className="p-3 rounded-2xl bg-white border border-cool-grey-250 text-center">There are initiatives.</div>
                <div className="p-3 rounded-2xl bg-white border border-cool-grey-250 text-center">Impact system.</div>
                <div className="p-3 rounded-2xl bg-white border border-cool-grey-250 text-center text-blue-700">Connecting beyond.</div>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-cool-grey-250 shadow-xs space-y-3">
                <p className="font-bold text-[#0f131a] text-base">
                  But growth is not the most important part of the story.
                </p>
                <p className="text-slate-700 text-sm">
                  The important question remains: <span className="text-[#1D4ED8] font-bold">Are the relationships becoming more meaningful?</span>
                </p>
                <p className="text-xs sm:text-sm text-cool-grey-600 font-normal leading-relaxed">
                  Because the purpose was never simply to build a bigger community. It was to build a community in which entrepreneurs could experience what becomes possible when they stop building alone.
                </p>
              </div>
            </div>

            {/* What We Are Building Toward */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  THE HORIZON
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f131a] tracking-tight leading-tight">
                What We Are Building Toward
              </h2>

              <p className="text-base text-cool-grey-600 font-normal leading-relaxed">
                The destination is larger than the organisation itself. It is a world in which entrepreneurs can find people who understand the journey:
              </p>

              <div className="space-y-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                <div className="p-3.5 rounded-2xl bg-white border border-cool-grey-250 flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>Where experience can be shared.</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-cool-grey-250 flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>Where contribution is recognised.</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-cool-grey-250 flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>Where collaboration becomes natural.</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-cool-grey-250 flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span>Where one entrepreneur&apos;s action can positively affect another person&apos;s life.</span>
                </div>
              </div>

              {/* 1M Ambition Box */}
              <div className="p-6 rounded-3xl bg-gradient-to-r from-blue-900 to-indigo-950 text-white space-y-2.5 shadow-md">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-sky-300">
                  1 ACTION = 1 LIFE IMPACTED
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white">
                  1 Million+ Entrepreneurs to Impact by 2030
                </div>
                <p className="text-xs sm:text-sm text-slate-200 font-light">
                  The number matters. But the lives behind the number matter more.
                </p>
              </div>
            </div>

          </div>

          {/* What Has Not Changed */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-cool-grey-250 shadow-xs space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#1D4ED8]">
                WHAT HAS NOT CHANGED
              </span>
            </div>
            
            <p className="text-sm sm:text-base text-cool-grey-600 font-normal leading-relaxed">
              The structure may evolve. The technology may change. The number of Circles may grow. The ecosystem may become global. New initiatives may emerge.
            </p>

            <div className="p-5 rounded-2xl bg-[#FAFBFD] border border-cool-grey-250 space-y-1.5 border-l-4 border-l-[#E11D48] shadow-xs">
              <p className="text-base sm:text-lg font-bold text-[#0f131a]">
                But the original belief remains.
              </p>
              <p className="text-xl sm:text-2xl font-bold brand-gradient-text">
                Entrepreneurs should not have to build alone.
              </p>
              <p className="text-xs sm:text-sm text-cool-grey-600 font-normal">
                That is still the starting point. And it remains the reason for everything that comes after it.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          7. THE STORY IS STILL BEING WRITTEN (CLOSING CTA BANNER)
          ========================================================================= */}
      <ClosingCtaSection
        eyebrow="THE STORY IS STILL BEING WRITTEN"
        title="PEERS GLOBAL is not a finished story."
        subtitle="And the next chapter may belong to you."
        description="Every Peer who joins adds another chapter. Every relationship creates another possibility. Every collaboration creates another connection. Stop building alone today."
        primaryButtonText="DISCOVER THE IDEA"
        primaryButtonHref="/the-idea"
        secondaryButtonText="EXPLORE CIRCLES"
        secondaryButtonHref="/circles"
      />

    </div>
  )
}
