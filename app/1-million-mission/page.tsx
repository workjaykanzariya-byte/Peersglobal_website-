import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ClosingCtaSection } from '@/components/site/ClosingCtaSection'
import {
  ArrowRight,
  Sparkles,
  HeartHandshake,
  Users,
  Compass,
  Layers,
  ChevronRight,
  TrendingUp,
  CheckCircle2,
  Lightbulb,
  Building2,
  Globe,
  Share2,
  Quote,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'The 1 Million Mission | Become a Life Impactor — Peers Global',
  description:
    '1M+ entrepreneurs to impact by 2030. 1 Action = 1 Life Impacted. Discover how individual contribution compounds into a global movement of entrepreneurs helping entrepreneurs.',
  keywords: [
    '1 Million Mission',
    'Life Impactor',
    '1 Action = 1 Life Impacted',
    'Entrepreneurs Helping Entrepreneurs',
    '1M Entrepreneurs Impact 2030',
    'PEERS GLOBAL Impact Architecture',
  ],
}

// 8 Forms of Action from prompt
const ACTION_EXAMPLES = [
  'Share knowledge and insights.',
  'Make a key introduction.',
  'Mentor another entrepreneur.',
  'Help solve a business problem.',
  'Open a business opportunity.',
  'Support someone through a difficult decision.',
  'Take responsibility for a community initiative.',
  'Connect the right two people at the right time.',
]

// Architecture Flow
const ARCHITECTURE_FLOW = [
  { step: '01', title: 'Entrepreneurs', desc: 'Entrepreneurs meet with mutual respect and shared ambitions.' },
  { step: '02', title: 'Relationships', desc: 'Trust develops through regular interaction and authentic sharing.' },
  { step: '03', title: 'Collaboration', desc: 'Working together through 10 distinct forms of mutual value.' },
  { step: '04', title: 'Contribution', desc: 'Giving first without calculating immediate returns.' },
  { step: '05', title: 'Impact', desc: 'A life is positively changed and the cycle compounds.' },
]

// Live/Mission Architecture Stats
const MISSION_STATS = [
  { value: '1M+', label: 'Entrepreneurs to Impact by 2030', sub: 'Target Goal' },
  { value: '1 Action', label: '1 Life Impacted', sub: 'Impact Principle' },
  { value: '18', label: 'Industry & Goal Circles', sub: 'The Structured Ecosystem' },
  { value: '10', label: 'Forms of Collaboration', sub: 'Beyond Business Referrals' },
]

// How You Can Create Impact List
const HOW_TO_IMPACT = [
  'Share something you have learned.',
  'Make an introduction.',
  'Offer your experience.',
  'Ask someone what they need.',
  'Help solve a problem.',
  'Invite the right entrepreneur into the right room.',
  'Teach what you know.',
  'Learn from someone who has walked the road before you.',
  'Recognise another person\'s contribution.',
  'And when you can help, help.',
]

export default function OneMillionMissionPage() {
  const missionSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'The 1 Million Mission | PEERS GLOBAL',
    description:
      'The 1 Million Mission of PEERS GLOBAL aims to impact 1M+ entrepreneurs by 2030 based on the principle 1 Action = 1 Life Impacted.',
    publisher: {
      '@type': 'Organization',
      name: 'PEERS GLOBAL',
      url: 'https://peersglobal.com',
    },
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0062D2] selection:text-white">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(missionSchema) }}
      />

      {/* =========================================================================
          SECTION 1: HERO ("THE 1 MILLION MISSION")
          ========================================================================= */}
      <section className="relative overflow-hidden bg-[#050C1A] text-white pt-8 pb-16 sm:pb-24 border-b border-slate-800">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/4 h-[500px] w-[500px] rounded-full bg-[#0062D2]/15 blur-[140px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 right-10 h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-[130px]"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-medium tracking-wide mb-8 sm:mb-12">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="size-3.5 text-slate-500" />
            <span className="text-slate-400">Our World</span>
            <ChevronRight className="size-3.5 text-slate-500" />
            <span className="text-sky-400 font-semibold">1 Million Mission</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.22em] uppercase mb-4">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="brand-gradient-text">THE 1 MILLION MISSION</span>
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl lg:text-[64px] font-normal text-white tracking-tight leading-[1.08] mb-5">
                Become a Life Impactor
              </h1>

              <p className="text-xl sm:text-2xl text-sky-300 font-medium mb-3">
                1M+ entrepreneurs to impact by 2030.
              </p>

              <div className="inline-block px-4 py-2 rounded-xl bg-blue-500/15 border border-blue-400/30 text-sky-200 font-serif text-lg sm:text-xl mb-6">
                1 Action = 1 Life Impacted
              </div>

              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-8 max-w-xl">
                One million is a big number. But the mission does not begin with one million. It begins with one person. One entrepreneur who receives an introduction, learns a key lesson, or finds someone who understands.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/membership"
                  className="rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white px-7 py-3.5 text-sm font-semibold shadow-lg shadow-blue-600/30 transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                  <span>Become a Life Impactor</span>
                  <ArrowRight className="size-4" />
                </Link>

                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white px-7 py-3.5 text-sm font-semibold transition-all hover:scale-105"
                >
                  Download the Unity App
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] aspect-[16/11] sm:aspect-[16/10] group">
                <Image
                  src="/images/outcomes-peers-group.png"
                  alt="PEERS GLOBAL Life Impactors collaborating"
                  fill
                  priority
                  className="object-cover object-center brightness-[0.88] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 pointer-events-none" />

                <div className="absolute top-6 left-6 bg-[#061836]/90 backdrop-blur-md text-sky-300 text-xs font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full border border-sky-400/30">
                  THE 2030 GOAL
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <div className="text-3xl sm:text-4xl font-serif text-white">
                    1M+ Lives Impacted
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Entrepreneurs helping entrepreneurs across India and the globe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: THE NUMBER THAT MATTERS & WHY ONE MILLION?
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-white text-slate-900 border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* The Number That Matters */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.22em] uppercase">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="brand-gradient-text">THE NUMBER THAT MATTERS</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15]">
              One million is a big number. But the mission does not begin with one million. It begins with one person.
            </h2>

            <div className="space-y-3 text-base sm:text-lg text-slate-700 leading-relaxed">
              <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-100 flex items-start gap-3">
                <CheckCircle2 className="size-5 text-[#0062D2] shrink-0 mt-0.5" />
                <span>One entrepreneur who receives an introduction at the right moment.</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-100 flex items-start gap-3">
                <CheckCircle2 className="size-5 text-[#0062D2] shrink-0 mt-0.5" />
                <span>One entrepreneur who learns something that changes a decision.</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-100 flex items-start gap-3">
                <CheckCircle2 className="size-5 text-[#0062D2] shrink-0 mt-0.5" />
                <span>One entrepreneur who finds someone willing to share an experience.</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-100 flex items-start gap-3">
                <CheckCircle2 className="size-5 text-[#0062D2] shrink-0 mt-0.5" />
                <span>One entrepreneur who receives help when the answer is not obvious.</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-100 flex items-start gap-3">
                <CheckCircle2 className="size-5 text-[#0062D2] shrink-0 mt-0.5" />
                <span>One entrepreneur who discovers that they do not have to build alone.</span>
              </div>
            </div>

            <p className="text-slate-900 font-serif italic text-lg sm:text-xl pt-2">
              That is why our mission is not simply about reaching a number. It is about creating one million meaningful possibilities through entrepreneurs helping entrepreneurs.
            </p>
          </div>

          {/* Why One Million? */}
          <div className="rounded-3xl border border-slate-200 bg-[#FAFBFD] p-8 sm:p-12 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.22em] uppercase">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="brand-gradient-text">WHY ONE MILLION?</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-slate-900">
              When an entrepreneur grows, the impact rarely stops with that entrepreneur.
            </h3>

            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
              <p>
                India is home to millions of entrepreneurs and small and medium businesses. Behind those businesses are people carrying responsibility for employees, families, customers, communities and their own dreams.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 text-sm sm:text-base text-slate-700 py-2">
                <div>• A new employee may get an opportunity.</div>
                <div>• A supplier may gain business.</div>
                <div>• A family may become more secure.</div>
                <div>• A customer may receive a better solution.</div>
                <div className="sm:col-span-2 font-medium text-slate-900">• Another entrepreneur may find the courage to begin.</div>
              </div>
              <p>
                This is why we think about impact differently. When one entrepreneur helps another entrepreneur move forward, the effect can travel much further than the original action.
              </p>
              <p className="font-semibold text-slate-900">
                One action can influence a relationship. One relationship can create collaboration. One collaboration can create growth. And one growing entrepreneur can create opportunities for many others.
              </p>
              <div className="p-4 rounded-2xl bg-[#0062D2]/5 border border-[#0062D2]/15 text-[#0062D2] text-base font-medium">
                The mission is therefore not simply to build a large community. It is to build a community in which contribution can multiply.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: ONE ACTION. ONE LIFE. (THE IMPACT SYSTEM)
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-[#FAFBFD] text-slate-900 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.22em] uppercase">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="brand-gradient-text">THE IMPACT PRINCIPLE</span>
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15]">
              One Action. One Life.
            </h2>

            <p className="text-lg text-slate-600 font-light leading-relaxed">
              Our Impact System is deliberately simple: <strong>1 Action = 1 Life Impacted</strong>. We do not ask whether one action is bigger than another. We recognise the fact that someone chose to contribute.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACTION_EXAMPLES.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-bold text-amber-500">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="size-8 rounded-full bg-blue-50 text-[#0062D2] flex items-center justify-center">
                    <Sparkles className="size-4" />
                  </div>
                </div>
                <p className="text-base font-semibold text-slate-900 leading-snug">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-slate-800 bg-[#050C1A] p-8 sm:p-10 text-white text-center max-w-4xl mx-auto space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
              THE HUMAN VALUE BEHIND IT
            </p>
            <p className="font-serif text-2xl sm:text-3xl text-white leading-relaxed">
              The form of contribution may change. The human value behind it does not. Someone helped someone else move forward. That is worth recognising.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: HOW THE MISSION IS BUILT & IMPACT MULTIPLIES
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-white text-slate-900 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Architecture flow */}
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.22em] uppercase">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="brand-gradient-text">THE ARCHITECTURE</span>
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-slate-900">
                How the Mission Is Built
              </h2>
              <p className="text-slate-600 text-base">
                A mission of one million cannot be achieved by one person. The architecture grows through people:
              </p>
              <div className="p-3 bg-slate-100 rounded-2xl text-slate-900 font-semibold text-sm sm:text-base inline-block">
                Entrepreneurs → Relationships → Collaboration → Contribution → Impact
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {ARCHITECTURE_FLOW.map((item) => (
                <div key={item.step} className="p-6 rounded-3xl bg-[#FAFBFD] border border-slate-200/80 space-y-2">
                  <span className="text-xs font-mono font-bold text-[#0062D2] block">
                    STEP {item.step}
                  </span>
                  <h4 className="font-serif text-xl font-bold text-slate-900">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Multiplies */}
          <div className="rounded-3xl border border-slate-200 bg-[#FAFBFD] p-8 sm:p-12 space-y-6">
            <div className="inline-flex items-center gap-2 text-teal-600 text-xs font-bold tracking-[0.25em] uppercase">
              <span className="w-5 h-[1.5px] bg-teal-600" />
              <span>COMPOUNDING CONTRIBUTION</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-slate-900">
              Impact Multiplies
            </h3>

            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
              <p>
                Imagine one entrepreneur helping another. Then imagine the second entrepreneur helping someone else. Then another Peer sharing an experience that prevents a costly mistake. Another making an introduction. Another mentoring a first-generation entrepreneur. Another opening a door that would otherwise have remained closed.
              </p>
              <p className="font-medium text-slate-900">
                The impact begins to move. That is the idea behind the mission.
              </p>
              <p>
                We do not need every person to do everything. We need every person to do something meaningful. Because contribution becomes powerful when it is repeated. And when contribution becomes part of culture, impact becomes something a community creates together.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: FROM MEMBER TO LIFE IMPACTOR & WHERE WE ARE STATS
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-[#FAFBFD] text-slate-900 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.22em] uppercase">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="brand-gradient-text">TRANSFORMATION</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight">
                From Member to Life Impactor
              </h2>

              <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                <p>
                  Membership gives you a place in the community. Being a Peer gives you relationships within it. But becoming a <strong className="text-slate-900">Life Impactor</strong> means something more.
                </p>
                <p>
                  It means recognising that your experience, knowledge, relationships, time and willingness to help can become valuable to someone else.
                </p>
                <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 text-base text-slate-800">
                  <div>• You do not have to be the most successful person in the room.</div>
                  <div>• You do not have to have every answer.</div>
                  <div>• You do not have to wait until you have reached the top.</div>
                  <div className="font-medium text-[#0062D2] pt-1">
                    You can create impact from wherever you are today.
                  </div>
                </div>
                <p className="text-sm text-slate-600">
                  Sometimes your greatest contribution may be something you consider small. For someone else, it may arrive at exactly the right moment.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-lg space-y-6">
                <div className="inline-flex items-center gap-2 text-sky-600 text-xs font-bold tracking-[0.25em] uppercase">
                  <span>WHERE WE ARE</span>
                </div>
                <h3 className="font-serif text-2xl text-slate-900">
                  Visible &amp; Measurable Architecture
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {MISSION_STATS.map((stat, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1 text-center">
                      <div className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                        {stat.value}
                      </div>
                      <div className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                        {stat.label}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {stat.sub}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-500 italic text-center">
                  Behind every number is a human story. The number tells us how far we have travelled; the story tells us why the journey matters.
                </p>
              </div>
            </div>
          </div>

          {/* Your Part in It */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-amber-600 text-xs font-bold tracking-[0.25em] uppercase">
                <span className="w-5 h-[1.5px] bg-amber-600" />
                <span>YOUR PART IN IT</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-slate-900">
                You do not need to change the world alone. You can begin with one person.
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 text-slate-700 text-sm sm:text-base">
              {HOW_TO_IMPACT.map((action, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="size-4 text-[#0062D2] shrink-0 mt-0.5" />
                  <span>{action}</span>
                </div>
              ))}
            </div>

            <p className="text-slate-900 font-medium text-base sm:text-lg">
              That is how a mission becomes a movement.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: WHAT DOES IT MEAN & ONE MILLION IS NOT DESTINATION
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-white text-slate-900 border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* What does it mean to be a Life Impactor? */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.22em] uppercase">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="brand-gradient-text">THE PURPOSE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-slate-900">
              What Does It Mean to Be a Life Impactor?
            </h2>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              It means understanding that entrepreneurship is not only about what you build for yourself. It is also about what becomes possible for others because you were there.
            </p>

            <div className="grid gap-3 text-slate-800 text-sm sm:text-base">
              <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-100">
                • <strong className="text-slate-900">Your knowledge</strong> may become someone else&apos;s clarity.
              </div>
              <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-100">
                • <strong className="text-slate-900">Your introduction</strong> may become someone else&apos;s opportunity.
              </div>
              <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-100">
                • <strong className="text-slate-900">Your experience</strong> may save someone else from repeating your mistake.
              </div>
              <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-100">
                • <strong className="text-slate-900">Your encouragement</strong> may help someone continue.
              </div>
              <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-100">
                • <strong className="text-slate-900">Your collaboration</strong> may create something neither could build alone.
              </div>
              <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-100">
                • <strong className="text-slate-900">Your leadership</strong> may help another entrepreneur discover their own.
              </div>
            </div>

            <p className="text-[#0062D2] font-serif italic text-xl font-medium">
              That is impact.
            </p>
          </div>

          {/* One Million is not the destination & The mission belongs to all of us */}
          <div className="rounded-3xl border border-slate-800 bg-[#050C1A] p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden space-y-6">
            <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-[#0062D2]/20 blur-[90px]" />
            
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 text-sky-400 text-xs font-bold tracking-[0.25em] uppercase">
                <span>ONE MILLION IS NOT THE DESTINATION</span>
              </div>
              
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white">
                The number matters. But the number is not the heart of the mission.
              </h3>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                The heart is the person behind the number. One million entrepreneurs means one million opportunities to create meaningful impact. And if even one action can positively change one person&apos;s journey, then every Peer has the ability to contribute to the mission.
              </p>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-sky-300 text-base font-serif italic">
                Not someday. Not after becoming successful. Now.
              </div>
            </div>
          </div>

          {/* The Mission Belongs to All of Us */}
          <div className="rounded-3xl border border-slate-200 bg-[#FAFBFD] p-8 sm:p-10 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.22em] uppercase">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="brand-gradient-text">THE COLLECTIVE PLEDGE</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-slate-900">
              The Mission Belongs to All of Us
            </h3>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              PEERS GLOBAL may have created the mission. But no one person can complete it alone. The mission belongs to every entrepreneur who believes:
            </p>

            <div className="grid sm:grid-cols-2 gap-3 text-sm sm:text-base text-slate-800">
              <div className="p-3 bg-white rounded-xl border border-slate-200">✓ I can learn from others.</div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">✓ I can share what I know.</div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">✓ I can build relationships based on trust.</div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">✓ I can collaborate instead of competing.</div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">✓ I can contribute something meaningful.</div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">✓ I can impact another life.</div>
            </div>

            <p className="text-slate-900 font-medium text-base sm:text-lg pt-2">
              Together, those individual actions become something much larger than any one entrepreneur.
            </p>
          </div>

          {/* Become a Life Impactor Call */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm space-y-6 text-center">
            <h3 className="font-serif text-3xl sm:text-4xl text-slate-900">
              Your action can be someone&apos;s turning point.
            </h3>
            
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Somewhere in this community, there may be an entrepreneur who needs exactly what you already know. And somewhere ahead of you, there may be another entrepreneur whose experience can change your own journey.
            </p>

            <p className="text-slate-900 font-serif italic text-lg sm:text-xl">
              Entrepreneurs helping entrepreneurs. Learning. Sharing. Relationships. One action at a time.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/membership"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] px-8 py-3.5 text-sm font-semibold text-white hover:opacity-95 shadow-md shadow-blue-600/20 transition-all hover:scale-105"
              >
                <span>Become a Life Impactor</span>
                <ArrowRight className="size-4" />
              </Link>
              <a
                href="https://unity.peersglobal.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-3.5 text-sm font-semibold text-slate-900 hover:border-slate-400 transition-all"
              >
                <span>Download the Unity App</span>
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: CLOSING / MISSION SECTION
          ========================================================================= */}
      <ClosingCtaSection
        eyebrow="1M+ ENTREPRENEURS TO IMPACT BY 2030"
        title="Designed in Bharat. Built for the World."
        subtitle="Circles, not crowds. Trust, not transactions. Peers, not gurus."
        description="PEERS GLOBAL is the World's First Community of Collaboration. Peers are Partners in Business and Friends in Life."
        primaryButtonText="BECOME A LIFE IMPACTOR"
        primaryButtonHref="/membership"
        secondaryButtonText="EXPLORE CIRCLES"
        secondaryButtonHref="/circles"
      />

    </div>
  )
}
