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
} from 'lucide-react'

// ─── Annual Calendar Experiences ──────────────────────────────────────────
const ANNUAL_EXPERIENCES = [
  {
    title: 'Monthly Circle Meetings',
    outcome: 'Your regular Circle rhythm and accountability',
  },
  {
    title: 'Mega Networking Events',
    outcome: 'Wider community connections across chapters',
  },
  {
    title: 'MindMeld',
    outcome: 'Deeper conversations and shared thinking',
  },
  {
    title: 'Leadership Retreats',
    outcome: 'Leadership development, clarity and reflection',
  },
  {
    title: 'Family Meetups',
    outcome: 'Bringing the human side of community closer',
  },
  {
    title: 'Annual Awards Ceremony',
    outcome: 'Recognition, celebrating milestones and contribution',
  },
  {
    title: 'Leadership Transition Events',
    outcome: 'Continuity, stewardship and leadership development',
  },
  {
    title: 'Regional Conclaves & Summits',
    outcome: 'Connections and market expansion beyond your immediate Circle',
  },
  {
    title: 'Circle Mini-Conferences',
    outcome: 'Focused conversations and deeper industry or purpose engagement',
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
    desc: 'A dedicated, high-trust space for conversations that require total discretion, vulnerability and safety.',
  },
  {
    title: 'MindMeld',
    desc: 'An environment for deeper peer interaction, cross-industry problem solving, and shared collective thinking.',
  },
  {
    title: 'Family Meetups',
    desc: 'Because entrepreneurs do not exist separately from the people, families, and relationships that matter to them.',
  },
  {
    title: 'Pinning Ceremony',
    desc: 'A milestone moment of recognition and welcome that marks your permanent place within the community.',
  },
]

// ─── Recognition Channels ─────────────────────────────────────────────────
const RECOGNITION_CHANNELS = [
  'Contribution to others',
  'Collaboration & partnership',
  'Life Impact created',
  'Leadership stewardship',
  'Consistent participation',
  'Support of fellow Peers',
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
          SECTION 1: HERO — WHAT YOU GET
          ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAFCFF] via-[#FFFFFF] to-[#F8FAFC] border-b border-slate-200/80 pt-10 sm:pt-14 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] brand-gradient-text">
                  WHAT YOU GET
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[3.35rem] font-serif font-bold text-[#0B192C] tracking-tight leading-[1.12]">
                <span className="brand-gradient-text">Membership is an ongoing journey, not one monthly meeting.</span>
              </h1>

              <div className="space-y-3 text-[15px] sm:text-base text-slate-600 leading-relaxed">
                <p>
                  A Circle meeting may happen once a month. Your PEERS GLOBAL experience does not.
                </p>
                <p>
                  It continues through conversations, learning, introductions, collaboration, recognition, leadership and the relationships you build between meetings.
                </p>
                <p className="font-semibold text-slate-900 text-lg">
                  Because the real value of a community is not what happens when everyone is sitting in the same room. It is what becomes possible between those moments.
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

            {/* Right Card: The Core Formula */}
            <div className="lg:col-span-5">
              <div className="relative p-8 sm:p-10 rounded-3xl bg-[#040F24] text-white shadow-2xl overflow-hidden space-y-6">
                <div className="absolute top-0 right-0 size-64 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-5">
                  <span className="text-xs uppercase font-bold tracking-widest text-sky-300">
                    BEYOND THE MEETING
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                    The Meeting Is an Event. The Relationship Is the Experience.
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    What happens before the meeting matters. What happens during the meeting matters. But what happens afterwards matters even more: the message you send, the introduction you make, the advice you share, the problem you help solve, and the Peer you recognise.
                  </p>

                  <div className="pt-3 border-t border-white/10 text-center">
                    <p className="font-serif italic text-base text-amber-300">
                      &ldquo;That is where community becomes collaboration.&rdquo;
                    </p>
                  </div>
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-slate-900">
              <span className="brand-gradient-text">Your Year Inside PEERS GLOBAL</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Your annual experience is designed to give you multiple ways to learn, connect, contribute and grow:
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200/90 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 bg-slate-50 border-b border-slate-200 p-5 text-xs font-bold uppercase tracking-wider text-slate-600">
              <div className="md:col-span-5">Experience</div>
              <div className="md:col-span-7">What It Creates</div>
            </div>

            <div className="divide-y divide-slate-100 text-sm sm:text-base">
              {ANNUAL_EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-12 p-5 items-center gap-2 hover:bg-slate-50/60 transition-colors">
                  <div className="md:col-span-5 font-serif font-bold text-slate-900">
                    {exp.title}
                  </div>
                  <div className="md:col-span-7 text-xs sm:text-sm text-slate-600">
                    {exp.outcome}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 text-center text-xs sm:text-sm font-semibold text-slate-700">
            Your year is therefore not built around one meeting. It is built around <span className="text-[#0062D2]">multiple opportunities to participate.</span>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: BUSINESS GROWTH & LEARNING (2-COL SPLIT)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            
            {/* Column A: Business Growth */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    OPPORTUNITY
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                  Business Growth
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Business growth inside PEERS GLOBAL begins with relationships. You may discover:
                </p>

                <div className="space-y-2.5">
                  {BUSINESS_GROWTH_ITEMS.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-white border border-slate-200 flex items-center gap-3 text-xs sm:text-sm text-slate-800">
                      <Check className="size-4 text-[#0062D2] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 text-xs sm:text-sm text-slate-700 font-semibold space-y-1">
                <p>We do not define business growth simply as receiving leads.</p>
                <p className="text-[#0062D2]">Relationships first → Collaboration next → Business impact follows.</p>
              </div>
            </div>

            {/* Column B: Learning */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    EXPERIENCE
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                  Learning
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Every entrepreneur has learned something the hard way. That experience has value. PEERS GLOBAL creates opportunities to learn from people who are actually building businesses—not simply discussing theory:
                </p>

                <div className="space-y-2.5">
                  {LEARNING_CHANNELS.map((channel, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-white border border-slate-200 flex items-center gap-3 text-xs sm:text-sm text-slate-800">
                      <BookOpen className="size-4 text-[#0062D2] shrink-0" />
                      <span>{channel}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 text-xs text-slate-800 italic">
                &ldquo;Sometimes the most useful lesson is not a formal presentation. It is one Peer saying: &lsquo;I faced something similar. Here is what I learned.&rsquo;&rdquo;
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-slate-900">
              <span className="brand-gradient-text">Visibility &amp; Media</span>
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
                    <h3 className="font-serif text-xl font-bold text-slate-900">
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
                <h3 className="font-serif text-xl font-normal text-white">Known for Meaning</h3>
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
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
                Community &amp; Belonging
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                A community becomes real when people begin to know one another beyond formal introductions:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {COMMUNITY_FORMATS.map((fmt, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs space-y-2">
                  <h4 className="text-base font-serif font-bold text-slate-900">{fmt.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{fmt.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-center text-xs sm:text-sm font-bold text-slate-800">
              Attendance → Familiarity → Relationship → Belonging
            </div>
          </div>

          {/* Part B: Recognition & Leadership */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#040F24] text-white relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 size-80 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-blue-400 to-rose-400 rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-sky-300">
                    RECOGNITION &amp; LEADERSHIP
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-white">
                  Contribution Deserves to Be Noticed
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  PEERS GLOBAL recognises entrepreneurs for what they contribute—not simply for the size of their business. Recognition grows through:
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 text-xs text-slate-200">
                  {RECOGNITION_CHANNELS.map((rc, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-sky-300" />
                      <span>{rc}</span>
                    </div>
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-sky-200 italic pt-2">
                  &ldquo;Leadership here is not simply a title. Leadership is responsibility accepted in service of others.&rdquo;
                </p>
              </div>

              <div className="lg:col-span-4 p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 text-center">
                <Award className="size-10 text-amber-300 mx-auto" />
                <h4 className="font-serif text-lg font-bold text-white">Local to Global Scale</h4>
                <p className="text-xs text-slate-300">
                  Circle → City → District → State → Country → Global
                </p>
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
            <div className="flex items-center justify-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                THE ENGINE
              </span>
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-slate-900">
              <span className="brand-gradient-text">The LSR Growth Model</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Learning + Sharing + Relationships. This is not a sequence where one ends before the next begins—they continuously reinforce one another:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
              <div className="size-10 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center font-bold">
                <BookOpen className="size-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900">LEARNING</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Grow what you know. Learn from experience, people, conversations and the journeys of other entrepreneurs.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
              <div className="size-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <Share2 className="size-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900">SHARING</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Give what you know. Your experience becomes more valuable when another entrepreneur can learn from it.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
              <div className="size-10 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center font-bold">
                <HeartHandshake className="size-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900">RELATIONSHIPS</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Grow who you know—and how deeply you know them. Because meaningful relationships create the foundation for collaboration.
              </p>
            </div>
          </div>

          {/* Part B: Your Membership Is Not a Checklist */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch pt-6 border-t border-slate-200">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-2xs space-y-4">
              <h3 className="font-serif text-2xl font-bold text-slate-900">
                Your Membership Is Not a Checklist
              </h3>
              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>• You can attend every event and still remain a stranger. Or you can have one meaningful conversation that changes the way you see a challenge.</p>
                <p>• You can collect introductions. Or you can build relationships.</p>
                <p>• You can consume everything the community offers. Or you can contribute something that someone else remembers for years.</p>
              </div>
              <div className="pt-2 text-xs font-bold text-[#0062D2]">
                The choice is yours. PEERS GLOBAL does not ask &ldquo;What did you attend?&rdquo; but &ldquo;What did you make possible?&rdquo;
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-blue-900 to-[#040F24] text-white shadow-md space-y-4 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-sky-300">INDIVIDUAL JOURNEYS</span>
                <h3 className="font-serif text-2xl font-normal text-white mt-1">
                  Your Experience. Your Contribution. Your Journey.
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-3">
                  What you get will not be identical to what another entrepreneur receives. What remains constant is the opportunity:
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-white/10 border border-white/10 font-bold text-xs sm:text-sm text-white text-center">
                Learn · Share · Build Relationships · Collaborate · Contribute · Create Impact
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

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-normal leading-[1.18] tracking-tight text-white">
                <span className="brand-gradient-text">The community is not what we give you. It is what we create with you.</span>
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
