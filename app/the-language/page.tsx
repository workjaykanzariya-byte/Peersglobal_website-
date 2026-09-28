import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ClosingCtaSection } from '@/components/site/ClosingCtaSection'
import {
  ArrowRight,
  Quote,
  Users,
  Compass,
  Zap,
  HeartHandshake,
  Sparkles,
  BookOpen,
  Smartphone,
  Share2,
  Lock,
  Layers,
  CheckCircle2,
  ChevronRight,
  TrendingUp,
  Award,
  Handshake,
  Lightbulb,
  Building2,
  Send,
  Eye,
  Heart,
  Hammer,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'The Language | Words We Live By — Peers Global',
  description:
    'Every community that lasts builds a language of its own. Explore the core lexicon, principles, and shared vocabulary that define the PEERS GLOBAL community of collaboration.',
  keywords: [
    'The Language',
    'PEERS GLOBAL Lexicon',
    'Words We Live By',
    'Peer vs Member',
    'Inner Board',
    'Give-First Mindset',
    'Life Impactor',
    'LSR Model',
    'Unity App',
    '10 Forms of Collaboration',
  ],
}

// 10 Forms of Collaboration Data
const TEN_FORMS_OF_COLLABORATION = [
  {
    id: 1,
    form: 'Business Referral',
    meaning: 'Connecting the right opportunity to the right Peer',
    icon: Send,
    tag: 'Opportunity',
  },
  {
    id: 2,
    form: 'Mentorship',
    meaning: 'Sharing experience to help another entrepreneur navigate a challenge',
    icon: BookOpen,
    tag: 'Guidance',
  },
  {
    id: 3,
    form: 'Joint Venture',
    meaning: 'Building something together that neither could build as effectively alone',
    icon: Handshake,
    tag: 'Synergy',
  },
  {
    id: 4,
    form: 'Knowledge Sharing',
    meaning: 'Making expertise available to others',
    icon: Lightbulb,
    tag: 'Wisdom',
  },
  {
    id: 5,
    form: 'Problem Solving',
    meaning: 'Bringing experience and perspective to a real business challenge',
    icon: Sparkles,
    tag: 'Solutions',
  },
  {
    id: 6,
    form: 'Vendor Connect',
    meaning: 'Helping a Peer discover a relevant supplier or service provider',
    icon: Building2,
    tag: 'Network',
  },
  {
    id: 7,
    form: 'Funding Access',
    meaning: 'Connecting entrepreneurs with relevant funding relationships or opportunities',
    icon: TrendingUp,
    tag: 'Capital',
  },
  {
    id: 8,
    form: 'Visibility & PR',
    meaning: 'Helping a Peer gain appropriate visibility for their work',
    icon: Eye,
    tag: 'Reach',
  },
  {
    id: 9,
    form: 'Emotional Support',
    meaning: 'Being present when entrepreneurship becomes personally difficult',
    icon: Heart,
    tag: 'Resilience',
  },
  {
    id: 10,
    form: 'Execution Support',
    meaning: 'Helping turn an idea or requirement into action',
    icon: Hammer,
    tag: 'Action',
  },
]

// Complete Reference Table Data
const REFERENCE_TABLE_DATA = [
  {
    word: 'Peer',
    meaning: 'A relationship built through trust, contribution and shared entrepreneurial experience',
  },
  {
    word: 'Member',
    meaning: 'The formal membership status within PEERS GLOBAL',
  },
  {
    word: 'Circle',
    meaning: 'A structured community of entrepreneurs and an Inner Board',
  },
  {
    word: 'Powerhouse',
    meaning: 'A Peer who takes responsibility for contributing to the community',
  },
  {
    word: 'Give-First',
    meaning: 'Beginning relationships with a willingness to contribute value',
  },
  {
    word: 'Life Impactor',
    meaning: 'A person whose action creates a positive difference for another',
  },
  {
    word: 'LSR',
    meaning: 'Learning, Sharing and Relationships',
  },
  {
    word: 'Unity',
    meaning: 'The digital community connecting Peers beyond physical meetings',
  },
  {
    word: 'MindMeld',
    meaning: 'A cross-community environment for exchanging perspectives and possibilities',
  },
  {
    word: 'Confidential Forum',
    meaning: 'A trusted space for sensitive entrepreneurial conversations',
  },
  {
    word: '10 Forms of Collaboration',
    meaning: 'The principal ways Peers can create value for one another',
  },
]

export default function TheLanguagePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0062D2] selection:text-white">

      {/* Structured Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'DefinedTermSet',
            name: 'The PEERS GLOBAL Language',
            description:
              'The core lexicon and philosophy of PEERS GLOBAL: Peer, Circle, Powerhouse, Give-First, Life Impactor, LSR, Unity, MindMeld, Confidential Forum, and the 10 Forms of Collaboration.',
            hasDefinedTerm: REFERENCE_TABLE_DATA.map((item) => ({
              '@type': 'DefinedTerm',
              name: item.word,
              description: item.meaning,
              inDefinedTermSet: 'https://peersglobal.com/the-language',
            })),
          }),
        }}
      />

      {/* =========================================================================
          SECTION 1: HERO ("THE LANGUAGE")
          Cinematic Banner with Open Notebook & Clean Narrative
          ========================================================================= */}
      <section className="relative overflow-hidden bg-[#050C1A] text-white pt-8 pb-16 sm:pb-24 border-b border-slate-800">
        {/* Subtle Ambient Radial Glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/4 h-[500px] w-[500px] rounded-full bg-[#0062D2]/15 blur-[140px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 right-10 h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-[130px]"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Top Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-medium tracking-wide mb-8 sm:mb-12">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="size-3.5 text-slate-500" />
            <span className="text-sky-400 font-semibold">The Language</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Content (6 cols) */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="inline-flex items-center gap-2.5 text-sky-400 text-xs font-bold tracking-[0.25em] uppercase mb-4">
                <span className="w-6 h-[1.5px] bg-sky-400" />
                <span>THE LEXICON &amp; CULTURE</span>
                <span className="w-6 h-[1.5px] bg-sky-400" />
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl lg:text-[64px] font-normal text-white tracking-tight leading-[1.08] mb-5">
                The Language
              </h1>

              <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed mb-3 max-w-xl">
                Every community that lasts builds a language of its own.
              </p>

              <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed mb-8 max-w-xl">
                A community becomes more than a collection of people when its members begin to share something deeper than a place or a purpose. They share a way of seeing. A way of speaking. A way of recognising one another.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/membership"
                  className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-7 py-3.5 text-sm font-semibold shadow-lg shadow-blue-600/30 transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                  <span>Become a Peer</span>
                  <ArrowRight className="size-4" />
                </Link>

                <a
                  href="#terms"
                  className="rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white px-7 py-3.5 text-sm font-semibold transition-all hover:scale-105"
                >
                  Explore the 10 Words
                </a>
              </div>
            </div>

            {/* Right Media (6 cols) */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] aspect-[16/11] sm:aspect-[16/10] group">
                <Image
                  src="/images/language-hero-desk.jpg"
                  alt="PEERS GLOBAL notebook and desk"
                  fill
                  priority
                  className="object-cover object-center brightness-[0.88] contrast-[1.1] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                {/* Script Typography Overlaid on the Open Notebook Pages */}
                <div className="absolute top-[32%] left-[28%] sm:left-[30%] -translate-y-1/2 pointer-events-none select-none text-center sm:text-left">
                  <div
                    className="text-slate-800 text-lg sm:text-2xl font-bold leading-tight drop-shadow-xs"
                    style={{ fontFamily: 'var(--font-script, cursive)' }}
                  >
                    <div>People</div>
                    <div className="mt-0.5">Ideas</div>
                    <div className="mt-0.5">Opportunities</div>
                    <div className="mt-0.5 text-[#0062D2]">Impact</div>
                  </div>
                </div>

                <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 pointer-events-none select-none text-right">
                  <div
                    className="text-white/95 text-xl sm:text-2xl font-bold leading-tight drop-shadow-lg"
                    style={{ fontFamily: 'var(--font-script, cursive)' }}
                  >
                    People <br />
                    Create <br />
                    Impact
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: PROLOGUE / WHY OUR LANGUAGE EXISTS
          ========================================================================= */}
      <section className="relative py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="inline-flex items-center gap-2.5 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            <span>MORE THAN VOCABULARY</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15]">
            At PEERS GLOBAL, our language is not created to make us sound different. It exists to help us express something different.
          </h2>

          <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
            <p>
              Because when we use the word <strong className="text-slate-900 font-semibold">Peer</strong>, we mean more than a member.
            </p>
            <p>
              When we say <strong className="text-slate-900 font-semibold">Circle</strong>, we mean more than a meeting.
            </p>
            <p>
              When we say <strong className="text-slate-900 font-semibold">Give-First</strong>, we mean more than generosity.
            </p>
            <p>
              And when we say <strong className="text-slate-900 font-semibold">Life Impactor</strong>, we mean more than someone who has achieved something for themselves.
            </p>
            <p className="text-[#0062D2] font-medium pt-2">
              These words describe the culture we are trying to build together.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: THE 10 CORE WORDS (01 to 10)
          ========================================================================= */}
      <section id="terms" className="relative py-20 sm:py-28 bg-[#FAFBFD] text-slate-900 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
              <span className="w-5 h-[1.5px] bg-[#0062D2]" />
              <span>THE 10 DEFINING CONCEPTS</span>
              <span className="w-5 h-[1.5px] bg-[#0062D2]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-900">
              The Ten Words of PEERS GLOBAL
            </h2>
            <p className="text-slate-600 text-base">
              Each word represents a pillar of how we relate, collaborate, and build enduring value.
            </p>
          </div>

          <div className="space-y-10">

            {/* 01 — PEER */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
                <div>
                  <div className="inline-flex items-center gap-2 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase mb-2">
                    <Users className="size-4 text-[#0062D2]" />
                    <span>01 — PEER</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 leading-tight">
                    A Peer is not simply someone who belongs.
                  </h3>
                </div>
                <div className="shrink-0 bg-blue-50 text-[#0062D2] px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase border border-blue-100">
                  Relationship Over Status
                </div>
              </div>

              <div className="mt-6 space-y-4 text-slate-700 leading-relaxed text-base sm:text-lg">
                <p>
                  A Member has a status. <strong className="text-slate-900">A Peer has a relationship.</strong> That distinction matters.
                </p>
                <p>
                  You become a Member by joining PEERS GLOBAL. You become a Peer through the relationships you build, the trust you develop, the experience you share and the contribution you make.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 py-2 text-sm text-slate-600">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-[#0062D2] shrink-0 mt-0.5" />
                    <span>Introduce you to someone you need to know</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-[#0062D2] shrink-0 mt-0.5" />
                    <span>Challenge your thinking constructively</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-[#0062D2] shrink-0 mt-0.5" />
                    <span>Share something they learned the hard way</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-[#0062D2] shrink-0 mt-0.5" />
                    <span>Open a door that was previously closed</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-[#0062D2] shrink-0 mt-0.5" />
                    <span>Listen when business becomes difficult</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-[#0062D2] shrink-0 mt-0.5" />
                    <span>Celebrate when something goes right</span>
                  </div>
                </div>
                <p>
                  Or simply understand what it means to carry the responsibility of building something of your own. Membership gives you access. Peer relationships create belonging.
                </p>
                <div className="p-4 rounded-2xl bg-[#0062D2]/5 border border-[#0062D2]/15 text-[#0062D2] font-serif italic text-lg sm:text-xl">
                  &ldquo;Membership is what you buy. Peer is what you become.&rdquo;
                </div>
              </div>
            </div>

            {/* 02 — CIRCLE */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
                <div>
                  <div className="inline-flex items-center gap-2 text-teal-600 text-xs font-bold tracking-[0.25em] uppercase mb-2">
                    <Compass className="size-4 text-teal-600" />
                    <span>02 — CIRCLE</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 leading-tight">
                    Your Circle. Your Inner Board.
                  </h3>
                </div>
                <div className="shrink-0 bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase border border-teal-100">
                  The Inner Board
                </div>
              </div>

              <div className="mt-6 space-y-4 text-slate-700 leading-relaxed text-base sm:text-lg">
                <p>
                  A Circle is where the idea of PEERS GLOBAL becomes personal. It is a structured community of entrepreneurs who meet regularly, build relationships and create opportunities for one another.
                </p>
                <p>
                  But a Circle is not simply a room full of business owners. It is designed to become something closer to an <strong className="text-slate-900">Inner Board</strong>:
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-slate-700">
                  <li>A group of people whose experience you can draw upon.</li>
                  <li>People you can ask.</li>
                  <li>People you can help.</li>
                  <li>People who may see something in your business that you cannot see from inside it.</li>
                  <li>And people who can stand beside you when the decision in front of you is bigger than the business problem itself.</li>
                </ul>
                <p>
                  The value of a Circle is therefore not measured only by the number of people in the room. It is measured by the quality of what people are willing to bring into that room.
                </p>
                <div className="p-4 rounded-2xl bg-teal-500/5 border border-teal-500/15 text-teal-800 font-serif italic text-lg sm:text-xl">
                  &ldquo;Circles create the environment. Relationships create the value.&rdquo;
                </div>
              </div>
            </div>

            {/* 03 — POWERHOUSE */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
                <div>
                  <div className="inline-flex items-center gap-2 text-indigo-600 text-xs font-bold tracking-[0.25em] uppercase mb-2">
                    <Zap className="size-4 text-indigo-600" />
                    <span>03 — POWERHOUSE</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 leading-tight">
                    Contribution needs people who are willing to step forward.
                  </h3>
                </div>
                <div className="shrink-0 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase border border-indigo-100">
                  Contribution in Action
                </div>
              </div>

              <div className="mt-6 space-y-4 text-slate-700 leading-relaxed text-base sm:text-lg">
                <p>
                  A Powerhouse is a Peer who takes responsibility for helping the community move forward. It represents contribution in action.
                </p>
                <p>
                  A Powerhouse may help organise, support, connect, coordinate, facilitate or strengthen the experience of others. The title itself is less important than the behaviour behind it.
                </p>
                <p>
                  Because leadership inside PEERS GLOBAL is not intended to be a position of distance. It is a responsibility to serve the people around you.
                </p>
                <p className="font-medium text-slate-900">
                  The strongest communities are not built by the people who ask, &ldquo;What do I get?&rdquo; They are strengthened by people who also ask: <span className="text-indigo-600">&ldquo;What can I contribute?&rdquo;</span>
                </p>
              </div>
            </div>

            {/* 04 — GIVE-FIRST */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
                <div>
                  <div className="inline-flex items-center gap-2 text-amber-600 text-xs font-bold tracking-[0.25em] uppercase mb-2">
                    <HeartHandshake className="size-4 text-amber-600" />
                    <span>04 — GIVE-FIRST</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 leading-tight">
                    Before asking what the community can do for you, ask what you can do for someone in it.
                  </h3>
                </div>
                <div className="shrink-0 bg-amber-50 text-amber-700 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase border border-amber-100">
                  Mindset of Abundance
                </div>
              </div>

              <div className="mt-6 space-y-4 text-slate-700 leading-relaxed text-base sm:text-lg">
                <p>
                  Give-First is one of the most important ideas in the PEERS GLOBAL language. It does not mean giving without boundaries. It does not mean ignoring your own goals. And it does not mean that contribution should become a transaction in disguise.
                </p>
                <p>
                  It means beginning with a different mindset. Instead of entering every relationship with &ldquo;What can I get?&rdquo; you begin with: <strong className="text-slate-900">&ldquo;How can I help?&rdquo;</strong>
                </p>
                <div className="grid sm:grid-cols-2 gap-2 text-sm text-slate-600 py-1">
                  <div>• Perhaps you know someone who can solve a problem.</div>
                  <div>• Perhaps you have made the mistake another is about to make.</div>
                  <div>• Perhaps you can share an introduction.</div>
                  <div>• Perhaps you can teach something or simply listen.</div>
                </div>
                <p>
                  A small act of contribution creates a relationship. A relationship creates trust. Trust creates collaboration. And collaboration creates impact.
                </p>
                <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/15 text-amber-900 font-medium">
                  Give first. Build trust. Create value. Let relationships grow. The return may not come immediately from the person you helped—it may come months later, from another Peer, in another form. That is how a community compounds.
                </div>
              </div>
            </div>

            {/* 05 — LIFE IMPACTOR */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
                <div>
                  <div className="inline-flex items-center gap-2 text-emerald-600 text-xs font-bold tracking-[0.25em] uppercase mb-2">
                    <Sparkles className="size-4 text-emerald-600" />
                    <span>05 — LIFE IMPACTOR</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 leading-tight">
                    Success becomes more meaningful when it changes something for someone else.
                  </h3>
                </div>
                <div className="shrink-0 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase border border-emerald-100">
                  1 Action = 1 Life Impacted
                </div>
              </div>

              <div className="mt-6 space-y-4 text-slate-700 leading-relaxed text-base sm:text-lg">
                <p>
                  A Life Impactor is a Peer whose actions create a positive difference in another person&apos;s journey. At PEERS GLOBAL, impact is intentionally made simple:
                </p>
                <div className="inline-block px-5 py-3 rounded-2xl bg-emerald-600 text-white font-serif text-xl sm:text-2xl shadow-sm">
                  1 Action = 1 Life Impacted
                </div>
                <p>
                  The principle is not that every action has the same commercial value. It is that <strong className="text-slate-900">every genuine contribution matters</strong>: An introduction matters. Teaching matters. Mentoring matters. Helping solve a problem matters. Leadership matters. Connecting the right people matters.
                </p>
                <p>
                  The purpose of recognising impact is not to turn relationships into competition. It is to make contribution visible. Because what gets recognised gets remembered. And what gets remembered is more likely to be repeated. Over time, repeated contribution becomes culture. And culture becomes impact at scale.
                </p>
              </div>
            </div>

            {/* 06 — LSR */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
                <div>
                  <div className="inline-flex items-center gap-2 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase mb-2">
                    <BookOpen className="size-4 text-[#0062D2]" />
                    <span>06 — LSR</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 leading-tight">
                    Learning. Sharing. Relationships.
                  </h3>
                </div>
                <div className="shrink-0 bg-blue-50 text-[#0062D2] px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase border border-blue-100">
                  The Core Model
                </div>
              </div>

              <div className="mt-6 space-y-5 text-slate-700 leading-relaxed text-base sm:text-lg">
                <p>Three words sit at the heart of the PEERS GLOBAL model:</p>
                <div className="grid md:grid-cols-3 gap-6 pt-2">
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <h4 className="font-serif text-xl text-slate-900 font-semibold">LEARNING</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Entrepreneurs never stop learning. Markets, technology, and customers change. Learning is not confined to a classroom—it comes from mistakes, mentors, and hard-earned experiences.
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <h4 className="font-serif text-xl text-slate-900 font-semibold">SHARING</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Knowledge becomes more valuable when it moves. The lesson you learned last year may save another entrepreneur six months. Sharing turns individual experience into collective strength.
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <h4 className="font-serif text-xl text-slate-900 font-semibold">RELATIONSHIPS</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Business is built by people. Trust takes time and attention. Meaningful collaboration rarely begins with a transaction. Learn from people, share what you know, and build relationships that matter.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 07 — UNITY */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
                <div>
                  <div className="inline-flex items-center gap-2 text-sky-600 text-xs font-bold tracking-[0.25em] uppercase mb-2">
                    <Smartphone className="size-4 text-sky-600" />
                    <span>07 — UNITY</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 leading-tight">
                    The community does not disappear when the meeting ends.
                  </h3>
                </div>
                <div className="shrink-0 bg-sky-50 text-sky-700 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase border border-sky-100">
                  The Digital Home
                </div>
              </div>

              <div className="mt-6 space-y-4 text-slate-700 leading-relaxed text-base sm:text-lg">
                <p>
                  Unity is the digital home of the PEERS GLOBAL community. It brings the everyday experience of the community into one place: Your Circle. Your Peers. Your conversations. Your collaborations. Your contributions. Your events. Your impact.
                </p>
                <p>
                  Because community should not exist only for the few hours when people sit together physically. An entrepreneur&apos;s questions do not wait for the next monthly meeting. Neither do opportunities. Neither does the need for support.
                </p>
                <div className="p-4 rounded-2xl bg-[#061836] text-white space-y-1">
                  <div className="font-serif text-lg sm:text-xl text-sky-300 font-medium">
                    The meeting is an event. The relationship is the experience.
                  </div>
                  <p className="text-xs text-slate-300">
                    Unity keeps the community connected and responsive between physical gatherings.
                  </p>
                </div>
              </div>
            </div>

            {/* 08 — MINDMELD */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
                <div>
                  <div className="inline-flex items-center gap-2 text-purple-600 text-xs font-bold tracking-[0.25em] uppercase mb-2">
                    <Share2 className="size-4 text-purple-600" />
                    <span>08 — MINDMELD</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 leading-tight">
                    When different entrepreneurs sit together, new possibilities emerge.
                  </h3>
                </div>
                <div className="shrink-0 bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase border border-purple-100">
                  Cross-Industry Convergence
                </div>
              </div>

              <div className="mt-6 space-y-4 text-slate-700 leading-relaxed text-base sm:text-lg">
                <p>
                  A MindMeld brings entrepreneurs together beyond the boundaries of their individual Circle: Different businesses. Different industries. Different experiences. Different perspectives. One shared environment.
                </p>
                <p>
                  The value is not simply in meeting more people. It is in encountering ideas you may not have encountered inside your own business world. A question from one entrepreneur can challenge another&apos;s assumption. An experience from one industry can solve a problem in another.
                </p>
                <div className="p-4 rounded-2xl bg-purple-500/5 border border-purple-500/15 text-purple-900 font-medium">
                  That is the purpose of MindMeld: to create space for minds, experiences and possibilities to meet.
                </div>
              </div>
            </div>

            {/* 09 — CONFIDENTIAL FORUM */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
                <div>
                  <div className="inline-flex items-center gap-2 text-rose-600 text-xs font-bold tracking-[0.25em] uppercase mb-2">
                    <Lock className="size-4 text-rose-600" />
                    <span>09 — CONFIDENTIAL FORUM</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 leading-tight">
                    Some conversations need trust before they need answers.
                  </h3>
                </div>
                <div className="shrink-0 bg-rose-50 text-rose-700 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase border border-rose-100">
                  Safe &amp; Discreet Space
                </div>
              </div>

              <div className="mt-6 space-y-4 text-slate-700 leading-relaxed text-base sm:text-lg">
                <p>
                  Entrepreneurship comes with questions that are not always easy to ask publicly. A difficult employee decision. A partnership concern. A financial challenge. A succession question. A leadership dilemma. A personal situation affecting the business.
                </p>
                <p>
                  In those moments, entrepreneurs may not need an audience. They need people they trust. The Confidential Forum exists for conversations that require discretion, respect and maturity.
                </p>
                <p>
                  Its value is not in how much is said. It is in knowing that certain things can be said safely. Meaningful relationships are built not only through celebration—they are also built when someone is willing to say, <em className="text-slate-900 font-semibold">&ldquo;I need help,&rdquo;</em> and someone else is willing to listen.
                </p>
              </div>
            </div>

            {/* 10 — THE 10 FORMS OF COLLABORATION */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
                <div>
                  <div className="inline-flex items-center gap-2 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase mb-2">
                    <Layers className="size-4 text-[#0062D2]" />
                    <span>10 — THE 10 FORMS OF COLLABORATION</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 leading-tight">
                    Collaboration can take many forms.
                  </h3>
                </div>
                <div className="shrink-0 bg-blue-50 text-[#0062D2] px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase border border-blue-100">
                  Beyond Referrals
                </div>
              </div>

              <div className="mt-6 space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
                <p>
                  At PEERS GLOBAL, collaboration is not limited to business referrals. It can happen wherever one entrepreneur&apos;s experience, relationship, resource or capability can help another move forward.
                </p>

                {/* The 10 Forms Table */}
                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
                  <table className="min-w-full text-left text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200 text-slate-900">
                      <tr>
                        <th className="py-3.5 px-4 font-bold uppercase tracking-wider w-16 text-center">#</th>
                        <th className="py-3.5 px-4 font-bold uppercase tracking-wider w-64">Form of Collaboration</th>
                        <th className="py-3.5 px-4 font-bold uppercase tracking-wider">What It Can Mean</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {TEN_FORMS_OF_COLLABORATION.map((item) => {
                        const IconComponent = item.icon
                        return (
                          <tr key={item.id} className="hover:bg-slate-50/60 transition-colors">
                            <td className="py-3.5 px-4 text-center font-bold text-[#0062D2]">
                              {String(item.id).padStart(2, '0')}
                            </td>
                            <td className="py-3.5 px-4 font-semibold text-slate-900">
                              <div className="flex items-center gap-2.5">
                                <IconComponent className="size-4 text-[#0062D2] shrink-0" />
                                <span>{item.form}</span>
                              </div>
                            </td>
                            <td className="py-3.5 px-4 text-slate-600">
                              {item.meaning}
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-600 text-sm">
                  Every form is different. The principle behind them is the same: <strong className="text-slate-900">One entrepreneur chooses to help another.</strong> That is where collaboration begins.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: THE PEERS GLOBAL REFERENCE TABLE
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-white text-slate-900 border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
              <span className="w-5 h-[1.5px] bg-[#0062D2]" />
              <span>QUICK LEXICON GUIDE</span>
              <span className="w-5 h-[1.5px] bg-[#0062D2]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-900">
              The PEERS GLOBAL Reference Table
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A comprehensive summary of the terminology that shapes our daily interactions.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-[#FAFBFD] p-6 sm:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.03)] overflow-x-auto">
            <table className="min-w-full text-left text-sm sm:text-base">
              <thead>
                <tr className="border-b-2 border-slate-300 text-slate-900 font-bold uppercase tracking-wider text-xs sm:text-sm">
                  <th className="py-4 pr-6 w-1/3">PEERS GLOBAL WORD</th>
                  <th className="py-4">WHAT IT MEANS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/80 text-slate-700">
                {REFERENCE_TABLE_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white transition-colors">
                    <td className="py-4 pr-6 font-bold text-slate-900 align-top">
                      {row.word}
                    </td>
                    <td className="py-4 leading-relaxed text-slate-600 align-top">
                      {row.meaning}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: PHILOSOPHY / WHY WORDS MATTER & CULTURE
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-[#FAFBFD] text-slate-900 border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Why Words Matter */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
              <span className="w-5 h-[1.5px] bg-[#0062D2]" />
              <span>THE POWER OF LANGUAGE</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-900">
              Why Words Matter
            </h2>
            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
              <p>Words shape behaviour.</p>
              <p>
                If we call someone a customer, we naturally think about transactions. If we call someone a lead, we naturally think about conversion. If we call someone a member, we recognise belonging—but perhaps only formally.
              </p>
              <p>
                <strong className="text-slate-900">But when we call someone a Peer, something changes.</strong>
              </p>
              <p>
                The word suggests relationship. Respect. Reciprocity. Experience. Human equality.
              </p>
              <p>
                That is why language matters so much to PEERS GLOBAL. We are not trying to create terminology for the sake of branding. We are trying to create words that remind us how we are expected to treat one another.
              </p>
              <p className="font-semibold text-slate-900 pt-1">
                The language should guide the behaviour. And the behaviour should make the language real.
              </p>
            </div>
          </div>

          {/* A Language Becomes Culture When People Live It */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-2 text-teal-600 text-xs font-bold tracking-[0.25em] uppercase">
              <span className="w-5 h-[1.5px] bg-teal-600" />
              <span>LIVING THE WORDS</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-slate-900">
              A Language Becomes Culture When People Live It
            </h3>
            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
              You can read the words on a page. But that alone does not make them meaningful.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm sm:text-base text-slate-700 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <strong className="text-slate-900 block mb-1">Give-First</strong>
                becomes real when someone helps without being asked.
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <strong className="text-slate-900 block mb-1">Peer</strong>
                becomes real when trust is built.
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <strong className="text-slate-900 block mb-1">Circle</strong>
                becomes real when people show up for one another.
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <strong className="text-slate-900 block mb-1">Confidential Forum</strong>
                becomes real when sensitive conversations remain respected.
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <strong className="text-slate-900 block mb-1">Life Impactor</strong>
                becomes real when someone&apos;s action changes another person&apos;s journey.
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <strong className="text-slate-900 block mb-1">LSR</strong>
                becomes real when learning is shared and relationships deepen.
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 sm:col-span-2">
                <strong className="text-slate-900 block mb-1">Unity</strong>
                becomes real when the community remains present between meetings.
              </div>
            </div>
            <p className="text-slate-900 font-serif italic text-lg sm:text-xl pt-2">
              That is when language stops being vocabulary. It becomes culture.
            </p>
          </div>

          {/* The Peers Global Language in One Line */}
          <div className="rounded-3xl border border-slate-800 bg-[#050C1A] p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-[#0062D2]/20 blur-[90px]" />
            <div className="relative z-10 space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
                THE PEERS GLOBAL LANGUAGE IN ONE LINE
              </p>
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight text-white">
                Circles, not crowds. Trust, not transactions. Peers, not gurus.
              </h3>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed pt-2">
                Because the ambition is not simply to create a larger network. It is to create a community in which entrepreneurs can learn from one another, contribute to one another, collaborate with one another—and grow without having to build alone.
              </p>
            </div>
          </div>

          {/* Your Next Word Could Be Peer */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm space-y-6">
            <h3 className="font-serif text-3xl sm:text-4xl text-slate-900">
              Your Next Word Could Be Peer
            </h3>
            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
              <p>
                Perhaps you came looking for a business community. Perhaps you were looking for relationships. Perhaps you were looking for experience. Perhaps you were looking for people who understand what entrepreneurship really feels like.
              </p>
              <p>
                You may discover that what you were looking for was not another network. <strong className="text-slate-900">It was the right environment:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-1 text-slate-600 text-base">
                <li>A place where you can learn.</li>
                <li>A place where you can contribute.</li>
                <li>A place where you can ask.</li>
                <li>A place where you can help.</li>
                <li>A place where relationships can become meaningful.</li>
              </ul>
              <p className="text-slate-900 font-medium pt-2">
                And perhaps, over time, a place where you are no longer simply a Member. You become a Peer.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
              <Link
                href="/membership"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0062D2] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#0052B4] shadow-md shadow-blue-600/20 transition-all hover:scale-105"
              >
                <span>Discover PEERS GLOBAL</span>
                <ArrowRight className="size-4" />
              </Link>
              <a
                href="https://unity.peersglobal.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 hover:border-slate-400 transition-all"
              >
                <span>Download the Unity App</span>
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: CLOSING / MISSION SECTION
          ========================================================================= */}
      <ClosingCtaSection
        eyebrow="PEERS ARE PARTNERS IN BUSINESS AND FRIENDS IN LIFE"
        title="Designed in Bharat. Built for the World."
        subtitle="Learn the language. Live the culture. Build without being alone."
        description="PEERS GLOBAL is the World's First Community of Collaboration. Discover Circles, build lasting trust, and achieve impact at scale."
        primaryButtonText="BECOME A PEER"
        primaryButtonHref="/membership"
        secondaryButtonText="EXPLORE CIRCLES"
        secondaryButtonHref="/circles"
      />

    </div>
  )
}
