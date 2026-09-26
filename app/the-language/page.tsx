import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ClosingCtaSection } from '@/components/site/ClosingCtaSection'
import {
  ArrowRight,
  Quote,
  Users,
  Send,
  Lightbulb,
  UserCheck,
  Building2,
  Handshake,
  Package,
  Globe,
  TrendingUp,
  Award,
  Shield,
  HeartHandshake,
  Smartphone,
  Layers,
  Sparkles,
  Trophy,
  Coins,
  Compass,
  ChevronRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'The Language | Words We Live By — Peers Global',
  description:
    'Every community that lasts builds a language of its own. Explore the core lexicon, principles, and shared vocabulary that define the Peers Global community of collaboration.',
  keywords: [
    'The Language',
    'Peers Global Lexicon',
    'Words We Live By',
    'The Peer',
    'The Circle',
    'Give-First',
    'Unity App',
    '10 Ways of Collaboration',
  ],
}

// 10 Ways of Collaboration Data
const TEN_WAYS_DATA = [
  {
    num: '01',
    title: 'Introduction',
    desc: 'You open a door that you personally hold.',
    icon: Users,
  },
  {
    num: '02',
    title: 'Referral',
    desc: 'You send business to a Peer.',
    icon: Send,
  },
  {
    num: '03',
    title: 'Knowledge',
    desc: 'You share what you have learned.',
    icon: Lightbulb,
  },
  {
    num: '04',
    title: 'Mentorship',
    desc: "You invest in another entrepreneur's growth.",
    icon: UserCheck,
  },
  {
    num: '05',
    title: 'Customer Connection',
    desc: 'You connect to buyers.',
    icon: Building2,
  },
  {
    num: '06',
    title: 'Partnership',
    desc: 'You build together.',
    icon: Handshake,
  },
  {
    num: '07',
    title: 'Resources',
    desc: 'You lend what you have.',
    icon: Package,
  },
  {
    num: '08',
    title: 'Market Access',
    desc: 'You open new geographies.',
    icon: Globe,
  },
  {
    num: '09',
    title: 'Investor Connection',
    desc: 'You connect to capital.',
    icon: TrendingUp,
  },
  {
    num: '10',
    title: 'Industry Expertise',
    desc: 'You share specialist knowledge.',
    icon: Award,
  },
]

// Lexicon Words Data
const LEXICON_WORDS = [
  {
    title: 'Peer',
    desc: 'You equal who builds with you',
    icon: Shield,
    color: 'bg-blue-50 text-[#0062D2] border-blue-100',
  },
  {
    title: 'Circle',
    desc: 'The room where trust is built',
    icon: Compass,
    color: 'bg-teal-50 text-teal-600 border-teal-100',
  },
  {
    title: 'Give-First',
    desc: 'Contribution before any ask',
    icon: HeartHandshake,
    color: 'bg-amber-50 text-amber-600 border-amber-100',
  },
  {
    title: 'Unity',
    desc: 'The community, every day',
    icon: Smartphone,
    color: 'bg-sky-50 text-sky-600 border-sky-100',
  },
  {
    title: '10 Ways of Collaboration',
    desc: 'How value moves between Peers',
    icon: Layers,
    color: 'bg-purple-50 text-purple-600 border-purple-100',
  },
  {
    title: 'Life Impact Score',
    desc: 'A record of what you have given',
    icon: Sparkles,
    color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  },
  {
    title: 'Peer Standing',
    desc: 'Recognition earned through contribution',
    icon: Trophy,
    color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
  },
  {
    title: 'Peers Coin',
    desc: 'Rewards you earn by giving',
    icon: Coins,
    color: 'bg-orange-50 text-orange-600 border-orange-100',
  },
  {
    title: '1 Million Mission',
    desc: 'One million lives impacted',
    icon: Globe,
    color: 'bg-blue-50 text-[#0062D2] border-blue-100',
  },
]

export default function TheLanguagePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">

      {/* =========================================================================
          SECTION 1: HERO ("THE LANGUAGE")
          Dark Executive Cinematic Banner matching reference screenshot
          ========================================================================= */}
      <section className="relative overflow-hidden bg-[#050C1A] text-white pt-8 pb-16 sm:pb-24 border-b border-slate-800">
        
        {/* Subtle Ambient Radial Glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-[140px]"
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
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5 text-sky-400 text-xs font-bold tracking-[0.25em] uppercase mb-4">
                <span className="w-6 h-[1.5px] bg-sky-400" />
                <span>THE LANGUAGE</span>
                <span className="w-6 h-[1.5px] bg-sky-400" />
              </div>

              {/* Title */}
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-[64px] font-normal text-white tracking-tight leading-[1.08] mb-5">
                The Language
              </h1>

              {/* Lead Paragraph */}
              <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed mb-3 max-w-xl">
                Every community that lasts builds a language of its own.
              </p>

              {/* Sub-lead Paragraph */}
              <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed mb-8 max-w-xl">
                These are the words Peers live by — and what each of them actually means here.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/membership"
                  className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-7 py-3.5 text-sm font-semibold shadow-lg shadow-blue-600/30 transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                  <span>Become a Peer</span>
                  <ArrowRight className="size-4" />
                </Link>

                <Link
                  href="/circles"
                  className="rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white px-7 py-3.5 text-sm font-semibold transition-all hover:scale-105"
                >
                  Find Your Circle
                </Link>
              </div>

            </div>

            {/* Right Media (6 cols): Open Notebook & Coffee Mug Scene */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] aspect-[16/11] sm:aspect-[16/10] group">
                
                {/* Desk Photograph */}
                <Image
                  src="/images/language-hero-desk.jpg"
                  alt="Peers Global notebook and desk"
                  fill
                  priority
                  className="object-cover object-center brightness-[0.88] contrast-[1.1] transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                {/* Script Typography Overlaid on the Open Notebook Pages */}
                <div className="absolute top-[32%] left-[28%] sm:left-[30%] -translate-y-1/2 pointer-events-none select-none text-center sm:text-left">
                  <div
                    className="text-slate-800 text-lg sm:text-2xl font-bold leading-tight drop-shadow-xs"
                    style={{ fontFamily: 'var(--font-script)' }}
                  >
                    <div>People</div>
                    <div className="mt-0.5">Ideas</div>
                    <div className="mt-0.5">Opportunities</div>
                    <div className="mt-0.5 text-[#0062D2]">Impact</div>
                  </div>
                </div>

                {/* Script Typography on bottom right near mug: People Create Impact */}
                <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 pointer-events-none select-none text-right">
                  <div
                    className="text-white/95 text-xl sm:text-2xl font-bold leading-tight drop-shadow-lg"
                    style={{ fontFamily: 'var(--font-script)' }}
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
          SECTION 2: WHY WORDS MATTER HERE
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-white text-slate-900 border-b border-slate-200/80">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-[0.035] pointer-events-none overflow-hidden select-none">
          <svg viewBox="0 0 1000 600" fill="currentColor" className="w-full h-full text-slate-900">
            <circle cx="200" cy="200" r="140" />
            <circle cx="500" cy="250" r="180" />
            <circle cx="800" cy="300" r="160" />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2.5 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              <span>OUR COMMON GROUND</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15]">
              Why words matter here
            </h2>

            <div className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed">
              <p>
                Every community that lasts builds a language of its own. A community becomes more than a collection of people when its members begin to share something deeper than a place or a purpose.
              </p>
              <p>
                They share a way of seeing. A way of speaking. A way of recognising one another. And over time, a language of their own.
              </p>
              <p>
                At PEERS GLOBAL, our language is not created to make us sound different. It exists to help us express something different. Because when we use the word Peer, we mean more than a member. When we say Circle, we mean more than a meeting. When we say Give-First, we mean more than generosity. And when we say Life Impactor, we mean more than someone who has achieved something for themselves.
              </p>
              <p>
                These words describe the culture we are trying to build together.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-[#FAFBFD] p-8 sm:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.03)]">
            <Quote className="size-9 text-[#0062D2] mb-5 opacity-80" />
            <p className="font-serif italic text-2xl sm:text-[28px] text-slate-800 leading-snug">
              &ldquo;Words shape behaviour. The language should guide the behaviour. And the behaviour should make the language real.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: THE CORE WORDS
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-[#FAFBFD] text-slate-900 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="inline-flex items-center gap-2 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase mb-4">
                <span className="w-5 h-[1.5px] bg-[#0062D2]" />
                <span>01 — PEER</span>
              </div>
              <h3 className="font-serif text-3xl text-slate-900 leading-tight mb-4">A Peer is not simply someone who belongs.</h3>
              <p className="text-slate-700 leading-relaxed">
                A Member has a status. A Peer has a relationship. Membership gives you access. Peer relationships create belonging. That is why we say: Membership is what you buy. Peer is what you become.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="inline-flex items-center gap-2 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase mb-4">
                <span className="w-5 h-[1.5px] bg-[#0062D2]" />
                <span>02 — CIRCLE</span>
              </div>
              <h3 className="font-serif text-3xl text-slate-900 leading-tight mb-4">Your Circle. Your Inner Board.</h3>
              <p className="text-slate-700 leading-relaxed">
                A Circle is not simply a room full of business owners. It is designed to become something closer to an Inner Board — a group of people whose experience you can draw upon. The value of a Circle is not measured only by the number of people in the room. It is measured by the quality of what people are willing to bring into that room.
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="inline-flex items-center gap-2 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase mb-4">
                <span className="w-5 h-[1.5px] bg-[#0062D2]" />
                <span>03 — POWERHOUSE</span>
              </div>
              <h3 className="font-serif text-3xl text-slate-900 leading-tight mb-4">Contribution needs people who are willing to step forward.</h3>
              <p className="text-slate-700 leading-relaxed">
                A Powerhouse is a Peer who takes responsibility for helping the community move forward. The strongest communities are not built by the people who ask, “What do I get?” They are strengthened by people who also ask, “What can I contribute?”
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="inline-flex items-center gap-2 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase mb-4">
                <span className="w-5 h-[1.5px] bg-[#0062D2]" />
                <span>04 — GIVE-FIRST</span>
              </div>
              <h3 className="font-serif text-3xl text-slate-900 leading-tight mb-4">Before asking what the community can do for you, ask what you can do for someone in it.</h3>
              <p className="text-slate-700 leading-relaxed">
                Give-First is not about giving without boundaries or turning contribution into a transaction. It means beginning with a different mindset: instead of “What can I get?” you begin with “How can I help?”
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="inline-flex items-center gap-2 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase mb-4">
                <span className="w-5 h-[1.5px] bg-[#0062D2]" />
                <span>05 — LIFE IMPACTOR</span>
              </div>
              <h3 className="font-serif text-3xl text-slate-900 leading-tight mb-4">Success becomes more meaningful when it changes something for someone else.</h3>
              <p className="text-slate-700 leading-relaxed">
                At PEERS GLOBAL, impact is intentionally made simple: 1 Action = 1 Life Impacted. An introduction matters. Teaching matters. Mentoring matters. Helping solve a problem matters. Leadership matters. Connecting the right people matters.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="inline-flex items-center gap-2 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase mb-4">
                <span className="w-5 h-[1.5px] bg-[#0062D2]" />
                <span>06 — LSR</span>
              </div>
              <h3 className="font-serif text-3xl text-slate-900 leading-tight mb-4">Learning. Sharing. Relationships.</h3>
              <p className="text-slate-700 leading-relaxed">
                Three words sit at the heart of the PEERS GLOBAL model: learning, sharing and relationships. Learning is not confined to a classroom. Sharing turns individual experience into collective strength. Relationships are the soil in which trust and collaboration grow.
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="inline-flex items-center gap-2 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase mb-4">
                <span className="w-5 h-[1.5px] bg-[#0062D2]" />
                <span>07 — UNITY</span>
              </div>
              <h3 className="font-serif text-3xl text-slate-900 leading-tight mb-4">The community does not disappear when the meeting ends.</h3>
              <p className="text-slate-700 leading-relaxed">
                Unity is the digital home of the PEERS GLOBAL community. Your Circle. Your Peers. Your conversations. Your collaborations. Your contributions. Your events. Your impact. Because community should not exist only for the few hours when people sit together.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="inline-flex items-center gap-2 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase mb-4">
                <span className="w-5 h-[1.5px] bg-[#0062D2]" />
                <span>08 — MINDMELD</span>
              </div>
              <h3 className="font-serif text-3xl text-slate-900 leading-tight mb-4">When different entrepreneurs sit together, new possibilities can emerge.</h3>
              <p className="text-slate-700 leading-relaxed">
                A MindMeld brings entrepreneurs together beyond the boundaries of their individual Circle. Different businesses. Different industries. Different experiences. Different perspectives. One shared environment. The value is not simply in meeting more people. It is in encountering ideas you may not have encountered inside your own business world.
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="inline-flex items-center gap-2 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase mb-4">
                <span className="w-5 h-[1.5px] bg-[#0062D2]" />
                <span>09 — CONFIDENTIAL FORUM</span>
              </div>
              <h3 className="font-serif text-3xl text-slate-900 leading-tight mb-4">Some conversations need trust before they need answers.</h3>
              <p className="text-slate-700 leading-relaxed">
                Entrepreneurship comes with questions that are not always easy to ask publicly. In those moments, entrepreneurs may not need an audience. They may need people they trust. The Confidential Forum exists for conversations that require discretion, respect and maturity.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="inline-flex items-center gap-2 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase mb-4">
                <span className="w-5 h-[1.5px] bg-[#0062D2]" />
                <span>10 — COLLABORATION</span>
              </div>
              <h3 className="font-serif text-3xl text-slate-900 leading-tight mb-4">Collaboration can take many forms.</h3>
              <p className="text-slate-700 leading-relaxed">
                At PEERS GLOBAL, collaboration is not limited to business referrals. It can happen wherever one entrepreneur&apos;s experience, relationship, resource or capability can help another move forward. The ten forms are Business Referral, Mentorship, Joint Venture, Knowledge Sharing, Problem Solving, Vendor Connect, Funding Access, Visibility &amp; PR, Emotional Support and Execution Support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: REFERENCE TABLE
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-white text-slate-900 border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-[#FAFBFD] p-8 sm:p-10">
            <div className="inline-flex items-center gap-2 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase mb-6">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              <span>THE PEERS GLOBAL REFERENCE TABLE</span>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm sm:text-base">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-900">
                    <th className="py-3 pr-6 font-bold uppercase tracking-wide">Word</th>
                    <th className="py-3 font-bold uppercase tracking-wide">What it means</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr className="border-b border-slate-200">
                    <td className="py-3 pr-6 font-semibold text-slate-900">Peer</td>
                    <td className="py-3">A relationship built through trust, contribution and shared entrepreneurial experience.</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-3 pr-6 font-semibold text-slate-900">Member</td>
                    <td className="py-3">The formal membership status within PEERS GLOBAL.</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-3 pr-6 font-semibold text-slate-900">Circle</td>
                    <td className="py-3">A structured community of entrepreneurs and an Inner Board.</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-3 pr-6 font-semibold text-slate-900">Powerhouse</td>
                    <td className="py-3">A Peer who takes responsibility for contributing to the community.</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-3 pr-6 font-semibold text-slate-900">Give-First</td>
                    <td className="py-3">Beginning relationships with a willingness to contribute value.</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-3 pr-6 font-semibold text-slate-900">Life Impactor</td>
                    <td className="py-3">A person whose action creates a positive difference for another.</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-3 pr-6 font-semibold text-slate-900">LSR</td>
                    <td className="py-3">Learning, Sharing and Relationships.</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-3 pr-6 font-semibold text-slate-900">Unity</td>
                    <td className="py-3">The digital community connecting Peers beyond physical meetings.</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-3 pr-6 font-semibold text-slate-900">MindMeld</td>
                    <td className="py-3">A cross-community environment for exchanging perspectives and possibilities.</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-6 font-semibold text-slate-900">Confidential Forum</td>
                    <td className="py-3">A trusted space for sensitive entrepreneurial conversations.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: FINAL LANGUAGE ARGUMENT
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-white text-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-5">
            <h3 className="font-serif text-3xl text-slate-900">Why words matter</h3>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Words shape behaviour. If we call someone a customer, we naturally think about transactions. If we call someone a lead, we naturally think about conversion. If we call someone a member, we recognise belonging—but perhaps only formally. But when we call someone a Peer, something changes. The word suggests relationship. Respect. Reciprocity. Experience. Human equality.
            </p>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              That is why language matters so much to PEERS GLOBAL. We are not trying to create terminology for the sake of branding. We are trying to create words that remind us how we are expected to treat one another.
            </p>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              A language becomes culture when people live it. Give-First becomes real when someone helps without being asked. Peer becomes real when trust is built. Circle becomes real when people show up for one another. Confidential Forum becomes real when sensitive conversations remain respected. Life Impactor becomes real when someone&apos;s action changes another person&apos;s journey.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-[#061836] p-8 sm:p-10 text-white shadow-xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-sky-300 mb-3">THE PEERS GLOBAL LANGUAGE IN ONE LINE</p>
            <h3 className="font-serif text-3xl sm:text-4xl leading-tight">
              Circles, not crowds. Trust, not transactions. Peers, not gurus.
            </h3>
          </div>

          <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm">
            <h3 className="font-serif text-3xl text-slate-900">Your next word could be Peer</h3>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Perhaps you came looking for a business community. Perhaps you were looking for relationships. Perhaps you were looking for experience. Perhaps you were looking for people who understand what entrepreneurship really feels like. You may discover that what you were looking for was not another network. It was the right environment. A place where you can learn. A place where you can contribute. A place where you can ask. A place where you can help. A place where relationships can become meaningful. And perhaps, over time, a place where you are no longer simply a Member. You become a Peer.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/membership"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0062D2] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#0052B4] transition-all"
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
        eyebrow="THE LANGUAGE BUILDS THE FUTURE"
        title="Learn the language, and you already understand the community."
        subtitle="Build Your Business. Build Your Relationships. Build Your Circle."
        description="Peers Global — World's First Community of Collaboration. Peers are Partners in Business and Friends in Life."
        primaryButtonText="BECOME A PEER"
        primaryButtonHref="/membership"
        secondaryButtonText="FIND YOUR CIRCLE"
        secondaryButtonHref="/circles"
      />

    </div>
  )
}
