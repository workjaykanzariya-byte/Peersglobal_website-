import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ClosingCtaSection } from '@/components/site/ClosingCtaSection'
import {
  ArrowRight,
  Lock,
  HeartHandshake,
  CalendarCheck,
  ShieldCheck,
  Eye,
  Sparkles,
  ChevronRight,
  Handshake,
  MessageSquare,
  Coffee,
  UserPlus,
  Trophy,
  CheckCheck,
  CheckCircle2,
  Shield,
  Heart,
  Users,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Culture & Code | The Standard We Build By — Peers Global',
  description:
    'Culture is what a community does, repeatedly, until it becomes who they are. Discover the six commitments of the Peers Code, our core rituals, and how we protect trust and dignity.',
  keywords: [
    'Our Culture and Code',
    'Peers Code',
    'Six Commitments',
    'Circle Rituals',
    'Confidentiality in Business Communities',
    'Give-First Cultural Practice',
    'Dignity and Respect',
    'PEERS GLOBAL Standards',
  ],
}

// =========================================================================
// THE SIX APPROVED PEERS CODE COMMITMENTS
// =========================================================================
export const PEERS_CODE_COMMITMENTS = [
  {
    id: 'give-first',
    num: '01',
    title: 'Give first.',
    essence: 'Contribution comes before any ask.',
    description:
      'We help before we are asked, and without calculating the return. Everything else in this community rests on this single commitment.',
    icon: HeartHandshake,
    accentColor: 'blue',
  },
  {
    id: 'show-up',
    num: '02',
    title: 'Show up.',
    essence: 'Presence is not a formality here. It is the mechanism.',
    description:
      'Trust is built by the same people meeting the same people, consistently, over time. Presence is not a formality here. It is the mechanism.',
    icon: CalendarCheck,
    accentColor: 'rose',
  },
  {
    id: 'tell-the-truth',
    num: '03',
    title: 'Tell the truth.',
    essence: 'Especially when it is uncomfortable.',
    description:
      'A Peer who only agrees with you is of no use to your business. We say the difficult thing, kindly, because that is what a friend does.',
    icon: ShieldCheck,
    accentColor: 'indigo',
  },
  {
    id: 'protect-the-room',
    num: '04',
    title: 'Protect the room.',
    essence: 'What is shared inside a Circle stays inside it.',
    description:
      'Entrepreneurs will only speak honestly about pressure, uncertainty and failure when they know it will never leave the room.',
    icon: Lock,
    accentColor: 'amber',
  },
  {
    id: 'respect-every-peer',
    num: '05',
    title: 'Respect every Peer.',
    essence: 'Nobody here is measured by their revenue.',
    description:
      'Regardless of the size of their business, the length of their membership or the language they speak. Everyone here started somewhere, and nobody is measured by their revenue.',
    icon: Eye,
    accentColor: 'emerald',
  },
  {
    id: 'carry-the-culture',
    num: '06',
    title: 'Carry the culture.',
    essence: 'Culture is held by everyone in the room.',
    description:
      'Every Peer is responsible for the experience of every other Peer. Culture is held by everyone in the room, not by whoever is leading it.',
    icon: Sparkles,
    accentColor: 'violet',
  },
]

// =========================================================================
// RITUALS DATA: THE 5 RECURRING MOMENTS
// =========================================================================
const RITUALS_DATA = [
  {
    num: '01',
    name: 'GIVE AND ASK',
    headline: 'Begin with contribution. Then ask for what you need.',
    desc: 'The Give and Ask ritual creates space for both sides of entrepreneurial relationships. Give — What can I contribute to someone here? Ask — What help, experience, connection or perspective do I need? A healthy community makes room for both generosity and vulnerability.',
    image: '/images/give-first-card.jpg',
    icon: MessageSquare,
  },
  {
    num: '02',
    name: 'PEER-TO-PEER',
    headline: 'One relationship at a time.',
    desc: 'A Circle can introduce many people, but meaningful relationships are built one conversation at a time. Peer-to-Peer creates space for entrepreneurs to move beyond introductions to understand the business, the journey, the challenge, the ambition, and the person behind the business.',
    image: '/images/who-we-are-friends.jpg',
    icon: Coffee,
  },
  {
    num: '03',
    name: 'WELCOME',
    headline: 'Every new person deserves to feel that they belong.',
    desc: 'The first experience of a community matters. A new Peer should not have to fight their way into the room. Someone should introduce them, make space for them, help them understand how things work, and make the first interaction feel human: "We are glad you are here."',
    image: '/images/hero_global_conclave.jpg',
    icon: UserPlus,
  },
  {
    num: '04',
    name: 'RECOGNITION',
    headline: 'Notice the contribution.',
    desc: 'People do not contribute only for recognition, but recognition tells people that their contribution was seen. A thoughtful introduction, a meaningful collaboration, a helpful conversation, or a difficult problem solved. Notice and appreciate what was given.',
    image: '/images/who-we-are-boardroom.jpg',
    icon: Trophy,
  },
  {
    num: '05',
    name: 'CLOSING',
    headline: 'Leave the room with gratitude and possibility.',
    desc: 'Every gathering eventually ends, but the relationship continues. The Closing ritual reflects: What did I learn? Who did I meet? Who helped me? Whom can I help next? What should I carry forward? Leave knowing what you will do differently.',
    image: '/images/outcomes-peers-group.png',
    icon: CheckCheck,
  },
]

// =========================================================================
// WHAT THIS CULTURE PROTECTS
// =========================================================================
const WHAT_WE_PROTECT = [
  {
    title: 'TRUST',
    desc: 'Because meaningful relationships cannot be built without it.',
    icon: Shield,
    color: 'text-[#1D4ED8]',
    bg: 'bg-blue-50',
    border: 'hover:border-blue-200',
  },
  {
    title: 'CONFIDENTIALITY',
    desc: 'Because entrepreneurs need places where they can speak honestly.',
    icon: Lock,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    border: 'hover:border-indigo-200',
  },
  {
    title: 'RESPECT',
    desc: 'Because no achievement gives one person permission to diminish another.',
    icon: Eye,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'hover:border-emerald-200',
  },
  {
    title: 'CONTRIBUTION',
    desc: 'Because communities become stronger when people give, not only take.',
    icon: HeartHandshake,
    color: 'text-[#E11D48]',
    bg: 'bg-rose-50',
    border: 'hover:border-rose-200',
  },
  {
    title: 'BELONGING',
    desc: 'Because nobody should have to earn basic human dignity.',
    icon: Heart,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'hover:border-amber-200',
  },
  {
    title: 'COLLABORATION',
    desc: 'Because the purpose is not simply to know more people, but to create something valuable together.',
    icon: Handshake,
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    border: 'hover:border-violet-200',
  },
]

export default function CultureAndCodePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the Peers Code?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Peers Code is the behavioural foundation of PEERS GLOBAL consisting of six commitments: 01 Give first, 02 Show up, 03 Tell the truth, 04 Protect the room, 05 Respect every Peer, and 06 Carry the culture.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is confidentiality foundational at PEERS GLOBAL?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Trust cannot exist where people are afraid to speak. Confidentiality protects the courage required to share difficult business decisions, mistakes, and personal situations safely.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the 5 core rituals of PEERS GLOBAL?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The 5 recurring rituals are: 01 Give and Ask, 02 Peer-to-Peer, 03 Welcome, 04 Recognition, and 05 Closing.',
        },
      },
    ],
  }

  return (
    <div className="min-h-screen bg-white text-[#0f131a] selection:bg-[#1D4ED8] selection:text-white font-sans">
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* =========================================================================
          SECTION 1: HERO ("OUR CULTURE & CODE")
      {/* =========================================================================
          SECTION 1: HERO (Master Full Page Dark Video Banner)
          ========================================================================= */}
      <section className="relative overflow-hidden bg-[#040F24] text-white pt-6 sm:pt-8 pb-14 sm:pb-20 border-b border-slate-800">
        {/* Full Bleed Hero Video Background */}
        <div className="absolute inset-0 size-full overflow-hidden pointer-events-none">
          <video
            src="/videos/homepage-hero-bg.mp4"
            poster="/images/circles-hero-new.jpg"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(2,8,23,0.92)_0%,rgba(4,15,36,0.78)_45%,rgba(4,15,36,0.55)_100%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="size-3.5 text-slate-500" />
            <span className="text-slate-400">Our World</span>
            <ChevronRight className="size-3.5 text-slate-500" />
            <span className="text-white font-semibold">Our Culture &amp; Code</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center min-h-[440px] lg:min-h-[480px]">
            <div className="lg:col-span-8 max-w-3xl space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur-sm uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
                <span>THE PEERS CODE · 6 COMMITMENTS</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white font-serif">
                  Our Culture &amp;{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-rose-400">
                    Code.
                  </span>
                </h1>
                <p className="text-base sm:text-lg font-medium text-slate-200 leading-snug">
                  Culture is what a community does, repeatedly, until it becomes who they are. Our language tells us what we mean. Our Code tells us how we behave.
                </p>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/membership"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-600 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:opacity-95 transition-all duration-300 group cursor-pointer"
                >
                  <span>Become a Peer</span>
                  <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <a
                  href="#the-code"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/25 bg-white/10 hover:bg-white/20 text-white font-medium text-sm backdrop-blur-sm transition-all duration-300"
                >
                  <span>Read The Peers Code</span>
                </a>
              </div>

              {/* Stat Band */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-lg pt-6 border-t border-white/15">
                {[
                  { icon: Shield, value: '6', label: 'Code Commitments' },
                  { icon: Sparkles, value: '5', label: 'Recurring Rituals' },
                  { icon: HeartHandshake, value: '100%', label: 'Give-First Mindset' },
                ].map((s) => {
                  const Icon = s.icon
                  return (
                    <div key={s.label} className="flex items-center gap-2.5 p-3 sm:p-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm">
                      <div className="size-9 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-sky-300 shrink-0">
                        <Icon className="size-4" />
                      </div>
                      <div>
                        <div className="font-bold text-base sm:text-lg text-white leading-none">{s.value}</div>
                        <div className="text-[10px] text-slate-300 font-medium mt-1 leading-tight">{s.label}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right Cursive Script Highlights */}
            <div className="hidden lg:flex lg:col-span-4 flex-col items-end text-right select-none pointer-events-none drop-shadow-lg space-y-1">
              <p
                className="text-2xl sm:text-3xl text-white/80 leading-tight font-medium"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Written Down
              </p>
              <p
                className="text-3xl sm:text-4xl text-white leading-tight font-bold"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Lived Out
              </p>
              <p
                className="text-3xl sm:text-4xl text-sky-400 font-bold leading-tight"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Across Every Room
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: CULTURE IS ARCHITECTURE & WHY A WRITTEN CODE
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-white via-[#FAFBFD] to-white border-b border-cool-grey-250/80 overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-500/5 via-rose-500/5 to-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">
          
          {/* Top Block: The Architecture of Trust */}
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2.5">
                <span className="h-[2px] w-8 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  THE ARCHITECTURE OF TRUST
                </span>
                <span className="h-[2px] w-8 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-bold text-[#0f131a] tracking-tight leading-[1.12]">
                <span>Culture is created by what people do</span>{' '}
                <span className="brand-gradient-text block sm:inline">when nobody is watching.</span>
              </h2>

              <p className="text-base sm:text-xl text-cool-grey-600 font-normal leading-relaxed">
                A community can have a powerful idea, a beautiful vision, and an impressive structure. But none of these, by themselves, create culture.
              </p>
            </div>

            {/* 6 Everyday Reality Cards + 1 Spanning Highlight Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-cool-grey-250 shadow-xs hover:shadow-md hover:border-blue-200 transition-all flex items-start gap-4 group">
                <div className="size-10 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <MessageSquare className="size-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0f131a] mb-1">How they speak</h4>
                  <p className="text-xs text-cool-grey-600 leading-relaxed font-normal">
                    How they speak to one another in moments of comfort and critique.
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-cool-grey-250 shadow-xs hover:shadow-md hover:border-rose-200 transition-all flex items-start gap-4 group">
                <div className="size-10 rounded-xl bg-rose-50 text-[#E11D48] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <HeartHandshake className="size-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0f131a] mb-1">How they respond</h4>
                  <p className="text-xs text-cool-grey-600 leading-relaxed font-normal">
                    How they respond with immediacy when someone asks for help.
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-cool-grey-250 shadow-xs hover:shadow-md hover:border-indigo-200 transition-all flex items-start gap-4 group">
                <div className="size-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Lock className="size-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0f131a] mb-1">Confidentiality</h4>
                  <p className="text-xs text-cool-grey-600 leading-relaxed font-normal">
                    How sacred they hold sensitive business and personal matters.
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-cool-grey-250 shadow-xs hover:shadow-md hover:border-amber-200 transition-all flex items-start gap-4 group">
                <div className="size-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <UserPlus className="size-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0f131a] mb-1">How they welcome</h4>
                  <p className="text-xs text-cool-grey-600 leading-relaxed font-normal">
                    How warm, open, and human they make a new Peer feel upon arrival.
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-cool-grey-250 shadow-xs hover:shadow-md hover:border-emerald-200 transition-all flex items-start gap-4 group">
                <div className="size-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Trophy className="size-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0f131a] mb-1">Recognise contribution</h4>
                  <p className="text-xs text-cool-grey-600 leading-relaxed font-normal">
                    How thoughtfully they notice and celebrate selfless actions.
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-cool-grey-250 shadow-xs hover:shadow-md hover:border-violet-200 transition-all flex items-start gap-4 group">
                <div className="size-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <ShieldCheck className="size-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0f131a] mb-1">Handle disagreement</h4>
                  <p className="text-xs text-cool-grey-600 leading-relaxed font-normal">
                    How they challenge assumptions directly without diminishing the human.
                  </p>
                </div>
              </div>

              {/* Full Width / Spanning Golden Principle Card */}
              <div className="sm:col-span-2 lg:col-span-3 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-50/90 via-[#FAFBFD] to-rose-50/90 border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-center sm:text-left">
                  <div className="size-10 rounded-xl bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Sparkles className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">
                      The defining test of culture:
                    </h4>
                    <p className="text-xs sm:text-sm font-semibold brand-gradient-text">
                      How people behave when there is nothing to gain immediately.
                    </p>
                  </div>
                </div>
                <div className="px-4 py-1.5 rounded-full bg-white/80 border border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-700 shrink-0">
                  Culture is Architecture
                </div>
              </div>
            </div>

            <div className="text-center pt-2">
              <p className="text-sm sm:text-base text-cool-grey-600 font-medium">
                At <strong className="text-slate-900 font-bold">PEERS GLOBAL</strong>, culture is not decoration around the business. It is part of the architecture.
              </p>
            </div>
          </div>

          {/* Bottom Block: Why a Written Code? */}
          <div className="relative rounded-[32px] border border-cool-grey-250 bg-white p-8 sm:p-12 lg:p-14 shadow-lg space-y-8 overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-500/5 via-rose-500/5 to-transparent rounded-full blur-2xl pointer-events-none" />

            <div className="relative space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  WHY A WRITTEN CODE?
                </span>
              </div>
              
              <h3 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-[#0f131a] tracking-tight leading-tight">
                Because good intentions are not enough.
              </h3>

              <p className="text-cool-grey-600 leading-relaxed text-base sm:text-lg font-normal max-w-3xl">
                Most people want to behave well. But communities become complicated as they grow: different businesses, personalities, cultures, expectations, and experiences. What feels obvious to one person may not be obvious to another.
              </p>
              
              <p className="text-cool-grey-600 leading-relaxed text-base sm:text-lg font-normal max-w-3xl">
                A written Code creates a shared understanding. It tells every Peer: <strong className="text-slate-900 font-bold">This is how we treat one another here.</strong> Not because people need to be controlled, but because people deserve to know the standard of the community they have chosen to enter.
              </p>
            </div>

            {/* Shield Protection Banner */}
            <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-50/90 via-[#FAFBFD] to-rose-50/90 border border-slate-200/90 shadow-2xs space-y-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-5 text-[#1D4ED8]" />
                <p className="text-sm sm:text-base font-bold text-slate-900 leading-relaxed">
                  The Code protects the quality of the environment.
                </p>
              </div>
              <p className="text-xs sm:text-sm font-semibold brand-gradient-text pl-7">
                It protects trust. It protects relationships. And ultimately, it protects the person who walks into a Circle expecting to be treated with dignity.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: THE PEERS CODE (THE SIX APPROVED COMMITMENTS)
          ========================================================================= */}
      <section id="the-code" className="relative py-20 sm:py-28 bg-[#FAFBFD] border-b border-cool-grey-250/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2.5">
              <span className="h-[2px] w-8 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                THE BEHAVIOURAL FOUNDATION
              </span>
              <span className="h-[2px] w-8 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight text-[#0f131a] leading-[1.14]">
              <span>The Peers</span>{' '}
              <span className="brand-gradient-text">Code</span>
            </h2>

            <p className="text-lg sm:text-xl text-slate-800 font-semibold">
              Six commitments that define how we belong.
            </p>

            <p className="text-sm sm:text-base text-cool-grey-600 font-normal leading-relaxed">
              The Peers Code is the behavioural foundation of PEERS GLOBAL. It applies not only when everything is going well. It matters even more when there is disagreement, disappointment, competition or pressure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {PEERS_CODE_COMMITMENTS.map((item) => {
              const IconComp = item.icon
              return (
                <div
                  key={item.id}
                  id={item.id}
                  className="relative bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-8 border border-cool-grey-250 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group scroll-mt-28"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-50 to-rose-50 border border-slate-200/80 text-xs font-bold text-slate-800">
                        COMMITMENT {item.num}
                      </span>
                      <div className="size-12 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:text-white transition-all duration-300 shadow-xs">
                        <IconComp className="size-6" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-[#0f131a] mb-1.5 tracking-tight">
                        {item.title}
                      </h3>

                      <p className="text-xs font-bold tracking-wider uppercase brand-gradient-text mb-3">
                        {item.essence}
                      </p>

                      <p className="text-xs sm:text-sm text-cool-grey-600 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center max-w-2xl mx-auto text-xs sm:text-sm text-cool-grey-500 leading-relaxed font-medium">
            The Code is not intended to make everyone identical. It exists so that people with different businesses, personalities and perspectives can still share the same standard of respect.
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: WHAT THE CODE ASKS OF US & CONFIDENTIALITY (SIDE-BY-SIDE HERO LAYOUT)
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-white border-b border-cool-grey-250/80 overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Side-by-side layout: Left Narrative + Right Dark Cosmic Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="h-[2px] w-8 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  EVERYDAY BEHAVIOUR
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0f131a] tracking-tight leading-[1.15]">
                <span>What the Code asks of us:</span>{' '}
                <span className="brand-gradient-text block sm:inline">Be the kind of Peer you would want beside you.</span>
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-cool-grey-600 font-normal leading-relaxed">
                <p>
                  The Code becomes meaningful through everyday behaviour. That means remembering that the person across the table is not a lead. Not a prospect. Not a source of business. Not a number.
                </p>
                <p>
                  They are a person who has chosen to spend part of their entrepreneurial journey in this community.
                </p>
              </div>

              {/* Behavior Grid Checklist */}
              <div className="grid sm:grid-cols-2 gap-3 p-5 sm:p-6 rounded-2xl bg-[#FAFBFD] border border-cool-grey-200/90 text-xs sm:text-sm text-slate-700 font-medium shadow-2xs">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>So we listen.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>We respect.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>We contribute.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>We keep our word.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  <span>We honour confidentiality.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  <span>We disagree without diminishing.</span>
                </div>
              </div>

              {/* Human Callout Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50/90 via-[#FAFBFD] to-rose-50/90 border border-slate-200/90 shadow-2xs">
                <p className="text-xs sm:text-sm font-bold text-slate-900 leading-relaxed">
                  And when someone needs help, we remember that asking for help is not weakness—it is part of being human.
                </p>
                <p className="text-xs sm:text-sm font-semibold brand-gradient-text pt-1">
                  We celebrate contribution without making recognition a competition.
                </p>
              </div>
            </div>

            {/* Right Column: Dark Cosmic Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[32px] border border-slate-800/80 bg-gradient-to-br from-[#060D1A] via-[#0B172E] to-[#040812] p-8 sm:p-10 text-white shadow-2xl overflow-hidden min-h-[460px] flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-semibold tracking-widest uppercase text-amber-300">
                    <Lock className="size-3" />
                    <span>CONFIDENTIALITY IS THE FOUNDATION</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold leading-tight text-white tracking-tight">
                    Trust cannot exist where people are afraid to speak.
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    Entrepreneurs sometimes carry questions they cannot discuss openly elsewhere: a difficult decision, partnership concern, or financial challenge.
                  </p>

                  <div className="space-y-2 p-4 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-sky-200">
                    <p className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                      <span>The freedom to say: &ldquo;I don&apos;t know.&rdquo;</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                      <span>The courage to say: &ldquo;I made a mistake, I need help.&rdquo;</span>
                    </p>
                  </div>
                </div>

                <div className="relative z-10 pt-6 mt-6 border-t border-white/10">
                  <p className="text-sm italic text-white leading-relaxed font-medium">
                    &ldquo;The objective is not merely to protect information—it is to protect the courage required to share it.&rdquo;
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Human Dignity - Homepage Elevated 2-Column Showcase */}
          <div className="rounded-[32px] border border-cool-grey-250 bg-gradient-to-br from-[#FAFBFD] via-white to-rose-50/30 p-8 sm:p-12 lg:p-14 shadow-sm space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Heading & Narrative */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2.5">
                  <span className="h-[2px] w-8 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    HUMAN DIGNITY
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0f131a] tracking-tight leading-[1.15]">
                  <span>Respect is not optional. Every Peer deserves</span>{' '}
                  <span className="brand-gradient-text block sm:inline">to feel respected and honoured.</span>
                </h2>

                <p className="text-cool-grey-600 text-base sm:text-lg leading-relaxed font-normal">
                  A community can be selective without becoming elitist. It can have standards without making people feel small. It can disagree without becoming disrespectful. And it can recognise achievement without creating hierarchy between human beings.
                </p>
                <p className="text-slate-900 font-semibold text-base sm:text-lg">
                  At PEERS GLOBAL, the standard is clear: <span className="brand-gradient-text">People should feel respected and honoured.</span>
                </p>
              </div>

              {/* Right Column: Equality Pillars & Golden Dignity Banner */}
              <div className="lg:col-span-5 space-y-3.5">
                <div className="p-4 rounded-2xl bg-white border border-cool-grey-250 shadow-2xs flex items-center gap-3.5">
                  <div className="size-8 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0">
                    <Users className="size-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-800">
                    The large enterprise founder and the first-generation founder.
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-cool-grey-250 shadow-2xs flex items-center gap-3.5">
                  <div className="size-8 rounded-xl bg-rose-50 text-[#E11D48] flex items-center justify-center shrink-0">
                    <HeartHandshake className="size-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-800">
                    The person asking for help and the person offering it.
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-cool-grey-250 shadow-2xs flex items-center gap-3.5">
                  <div className="size-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Eye className="size-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-800">
                    The person leading the room and the person quietly listening.
                  </span>
                </div>

                {/* Golden Test Banner */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white border border-blue-200/40 shadow-lg text-center">
                  <p className="text-sm sm:text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-200 to-sky-200">
                    &ldquo;Status may differ. Experience may differ. Business size may differ. Human dignity does not.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Give-First is a Cultural Practice - Homepage Showcase */}
          <div className="relative overflow-hidden rounded-[32px] border border-cool-grey-250 bg-gradient-to-br from-[#FAFBFD] via-white to-blue-50/40 p-8 sm:p-12 lg:p-14 shadow-md space-y-8">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-rose-500/10 via-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Heading & Narrative */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2.5">
                  <span className="h-[2px] w-8 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    GIVE-FIRST IS A CULTURAL PRACTICE
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0f131a] tracking-tight leading-[1.15]">
                  <span>The language introduces Give-First.</span>{' '}
                  <span className="brand-gradient-text block sm:inline">The culture gives it a place to live.</span>
                </h3>

                <p className="text-cool-grey-600 text-base sm:text-lg leading-relaxed font-normal">
                  Give-First means entering relationships with the willingness to contribute. Sometimes that contribution is visible; sometimes it is not.
                </p>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs font-semibold text-slate-900 text-sm sm:text-base">
                  The important question is not: &ldquo;Was this valuable enough?&rdquo; The question is: <span className="brand-gradient-text font-bold">&ldquo;Did I genuinely try to help?&rdquo;</span>
                </div>
              </div>

              {/* Right Column: Give-First Contributions Grid + Banner */}
              <div className="lg:col-span-5 space-y-4">
                <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm font-medium text-slate-800">
                  <div className="p-3.5 rounded-xl bg-white border border-cool-grey-200/90 shadow-2xs flex items-center gap-2">
                    <span className="size-2 rounded-full bg-blue-500" />
                    <span>An introduction</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-cool-grey-200/90 shadow-2xs flex items-center gap-2">
                    <span className="size-2 rounded-full bg-rose-500" />
                    <span>A shared idea</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-cool-grey-200/90 shadow-2xs flex items-center gap-2">
                    <span className="size-2 rounded-full bg-indigo-500" />
                    <span>A hard-won lesson</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-cool-grey-200/90 shadow-2xs flex items-center gap-2">
                    <span className="size-2 rounded-full bg-emerald-500" />
                    <span>A listening ear</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-cool-grey-200/90 shadow-2xs flex items-center gap-2">
                    <span className="size-2 rounded-full bg-amber-500" />
                    <span>A warm connection</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-cool-grey-200/90 shadow-2xs flex items-center gap-2">
                    <span className="size-2 rounded-full bg-violet-500" />
                    <span>A few minutes</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50/90 via-[#FAFBFD] to-rose-50/90 border border-slate-200/90 shadow-2xs text-xs sm:text-sm font-bold text-slate-900 text-center">
                  A culture of contribution becomes powerful when people stop waiting for someone else to create value first.
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: THE 5 RITUALS
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-[#FAFBFD] border-b border-cool-grey-250/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2.5">
              <span className="h-[2px] w-8 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                THE RITUALS
              </span>
              <span className="h-[2px] w-8 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight text-[#0f131a] leading-[1.14]">
              <span>Culture becomes real through</span>{' '}
              <span className="brand-gradient-text block sm:inline">repeated moments.</span>
            </h2>

            <p className="text-base sm:text-lg text-cool-grey-600 font-normal leading-relaxed">
              The PEERS GLOBAL rituals give the community recurring opportunities to practise its values. They are not formalities to be completed—they are moments that remind people what the community is for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {RITUALS_DATA.map((ritual, idx) => {
              const RitualIcon = ritual.icon
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-cool-grey-250 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col group"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <Image
                      src={ritual.image}
                      alt={ritual.name}
                      fill
                      className="object-cover object-center filter brightness-[0.92] contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-mono font-bold px-3 py-1 rounded-full border border-white/20">
                      RITUAL {ritual.num}
                    </div>

                    <div className="absolute bottom-4 right-4 size-10 rounded-xl bg-white text-[#1D4ED8] flex items-center justify-center shadow-md">
                      <RitualIcon className="size-5" />
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-[#0f131a] leading-snug">
                        {ritual.name}
                      </h3>
                      <p className="text-xs font-bold uppercase tracking-wider brand-gradient-text">
                        {ritual.headline}
                      </p>
                      <p className="text-xs sm:text-sm text-cool-grey-600 font-normal leading-relaxed pt-1">
                        {ritual.desc}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: HOW STANDARDS ARE UPHELD & WHAT THIS CULTURE PROTECTS
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-white border-b border-cool-grey-250/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* How standards are upheld - Homepage 2-Column Hero Style */}
          <div className="rounded-[32px] border border-cool-grey-250 bg-gradient-to-br from-[#FAFBFD] via-white to-blue-50/30 p-8 sm:p-12 lg:p-14 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Heading & Context */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2.5">
                  <span className="h-[2px] w-8 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    HOW STANDARDS ARE UPHELD
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0f131a] tracking-tight leading-[1.15]">
                  <span>A Code has meaning only when</span>{' '}
                  <span className="brand-gradient-text block sm:inline">it is respected.</span>
                </h2>

                <div className="space-y-4 text-base sm:text-lg text-cool-grey-600 font-normal leading-relaxed">
                  <p>
                    A written Code is not useful if it exists only as a page on a website. PEERS GLOBAL therefore treats standards as part of the community experience. Concerns about conduct should be taken seriously. People should have a clear understanding of what behaviour is expected.
                  </p>
                  <p>
                    And where behaviour falls outside the community&apos;s standards, it should be addressed through the appropriate organisational process.
                  </p>
                </div>
              </div>

              {/* Right Column: Highlight Card with Cosmic Accent */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl border border-blue-200/70 bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-900 p-7 sm:p-8 text-white shadow-xl space-y-4 overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-rose-500/20 rounded-full blur-2xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/25 rounded-full blur-2xl pointer-events-none" />

                  <div className="relative z-10 flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-amber-300">
                    <Shield className="size-4 text-amber-400" />
                    <span>THE PURPOSE: PROTECTION</span>
                  </div>

                  <p className="relative z-10 text-sm sm:text-base text-slate-100 font-semibold leading-relaxed">
                    The purpose is not punishment for its own sake. The purpose is protection:
                  </p>

                  <div className="relative z-10 space-y-2 text-xs sm:text-sm text-slate-300 pt-1">
                    <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span>Protection of trust &amp; people</span>
                    </div>
                    <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                      <span>Protection of the Circle</span>
                    </div>
                    <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Protection of culture entered in good faith</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What This Culture Protects */}
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2.5">
                <span className="h-[2px] w-8 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  WHAT THIS CULTURE PROTECTS
                </span>
                <span className="h-[2px] w-8 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f131a] tracking-tight leading-snug">
                Strong culture is defined by what it refuses to allow to disappear.
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHAT_WE_PROTECT.map((item, idx) => {
                const IconComponent = item.icon
                return (
                  <div
                    key={idx}
                    className={`p-6 sm:p-7 rounded-2xl bg-white border border-cool-grey-250 space-y-4 ${item.border} shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all group`}
                  >
                    <div className="flex items-center justify-between">
                      <div className={`size-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xs`}>
                        <IconComponent className="size-5" />
                      </div>
                      <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">
                        PILLAR 0{idx + 1}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#0f131a] group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-cool-grey-600 leading-relaxed font-normal pt-2">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Culture is Everyday - Homepage Interactive Split Showcase */}
          <div className="relative overflow-hidden rounded-[32px] border border-cool-grey-250 bg-gradient-to-br from-[#FAFBFD] via-white to-blue-50/40 p-8 sm:p-12 lg:p-14 shadow-md space-y-8">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 via-rose-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2.5">
                <span className="h-[2px] w-8 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  CULTURE IS EVERYDAY
                </span>
                <span className="h-[2px] w-8 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0f131a] tracking-tight leading-[1.15]">
                <span>Culture is not created at an annual summit.</span>{' '}
                <span className="brand-gradient-text block sm:inline">It is created in the small moments.</span>
              </h3>

              <p className="text-cool-grey-600 text-base sm:text-lg leading-relaxed font-normal">
                Culture is the living sum of countless daily decisions and interactions across every room:
              </p>
            </div>

            {/* Micro-moment Grid Cards */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-cool-grey-200/90 shadow-2xs hover:shadow-md hover:border-blue-200 transition-all flex items-start gap-3">
                <div className="size-8 rounded-lg bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5">
                  <UserPlus className="size-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                  When someone makes a warm, generous introduction.
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-cool-grey-200/90 shadow-2xs hover:shadow-md hover:border-rose-200 transition-all flex items-start gap-3">
                <div className="size-8 rounded-lg bg-rose-50 text-[#E11D48] flex items-center justify-center shrink-0 mt-0.5">
                  <HeartHandshake className="size-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                  When someone openly shares a difficult business lesson.
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-cool-grey-200/90 shadow-2xs hover:shadow-md hover:border-indigo-200 transition-all flex items-start gap-3">
                <div className="size-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Eye className="size-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                  When someone listens deeply without interrupting.
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-cool-grey-200/90 shadow-2xs hover:shadow-md hover:border-emerald-200 transition-all flex items-start gap-3">
                <div className="size-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="size-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                  When confidential discussions remain strictly safe.
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-cool-grey-200/90 shadow-2xs hover:shadow-md hover:border-amber-200 transition-all flex items-start gap-3">
                <div className="size-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="size-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                  When someone steps up and simply says: &ldquo;I can help.&rdquo;
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-cool-grey-200/90 shadow-2xs hover:shadow-md hover:border-violet-200 transition-all flex items-start gap-3">
                <div className="size-8 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Heart className="size-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                  When someone feels safe enough to say: &ldquo;I need help.&rdquo;
                </span>
              </div>
            </div>

            {/* Bottom Culture Callout Banner */}
            <div className="relative z-10 p-6 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white border border-blue-200/40 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-xs font-bold uppercase tracking-widest text-amber-300">
                  REPEATED • PRACTISED • EXPERIENCED • REMEMBERED
                </div>
                <p className="text-sm sm:text-base font-semibold text-slate-100">
                  That is culture — eventually owned by the people inside the community.
                </p>
              </div>
              <Link
                href="/membership"
                className="shrink-0 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider shadow-md hover:opacity-95 transition-all"
              >
                <span>Join the Culture</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>

          {/* The Harmony of Code & Language AND The Culture Test (Side-by-Side Design) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Code and Language Harmony */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="h-[2px] w-8 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  THE HARMONY OF CODE &amp; LANGUAGE
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold text-[#0f131a] tracking-tight leading-[1.15]">
                <span>The Code and The Language</span>{' '}
                <span className="brand-gradient-text block sm:inline">Work Together</span>
              </h3>

              <p className="text-cool-grey-600 text-sm sm:text-base leading-relaxed font-normal">
                Our language gives names to what matters; our Code gives those words a behavioural foundation:
              </p>

              <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                <div className="p-3 rounded-xl bg-[#FAFBFD] border border-cool-grey-200/90 shadow-2xs flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span><strong className="text-slate-900 font-bold">Peer</strong> is how we relate.</span>
                </div>
                <div className="p-3 rounded-xl bg-[#FAFBFD] border border-cool-grey-200/90 shadow-2xs flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  <span><strong className="text-slate-900 font-bold">Circle</strong> is where we belong.</span>
                </div>
                <div className="p-3 rounded-xl bg-[#FAFBFD] border border-cool-grey-200/90 shadow-2xs flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  <span><strong className="text-slate-900 font-bold">Give-First</strong> is how we contribute.</span>
                </div>
                <div className="p-3 rounded-xl bg-[#FAFBFD] border border-cool-grey-200/90 shadow-2xs flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span><strong className="text-slate-900 font-bold">LSR</strong> is how we grow.</span>
                </div>
                <div className="p-3 rounded-xl bg-[#FAFBFD] border border-cool-grey-200/90 shadow-2xs flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span><strong className="text-slate-900 font-bold">Confidentiality</strong> is how we build trust.</span>
                </div>
                <div className="p-3 rounded-xl bg-[#FAFBFD] border border-cool-grey-200/90 shadow-2xs flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                  <span><strong className="text-slate-900 font-bold">Recognition</strong> is how we appreciate.</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50/90 via-[#FAFBFD] to-rose-50/90 border border-slate-200/90 shadow-2xs text-xs sm:text-sm text-slate-900 font-medium">
                <strong className="text-slate-900 font-bold">Life Impact</strong> is how we understand the difference our actions can make. And the <strong className="brand-gradient-text font-bold">Code</strong> is the standard that holds them together.
              </div>
            </div>

            {/* Right Column: The Culture Test (Dark Cosmic Card) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[32px] border border-slate-800/80 bg-gradient-to-br from-[#060D1A] via-[#0B172E] to-[#040812] p-8 sm:p-10 text-white shadow-2xl overflow-hidden min-h-[460px] flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-semibold tracking-widest uppercase text-amber-300">
                    THE CULTURE TEST
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold leading-tight text-white tracking-tight">
                    What kind of person am I becoming inside this community?
                  </h3>

                  <div className="space-y-2 text-xs sm:text-sm text-slate-300 font-medium">
                    <p className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      <span>Am I learning, sharing and contributing?</span>
                    </p>
                    <p className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
                      <span>Am I keeping trust and building relationships?</span>
                    </p>
                    <p className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span>Am I making someone else&apos;s journey easier?</span>
                    </p>
                  </div>
                </div>

                <div className="relative z-10 pt-4 mt-4 border-t border-white/10">
                  <p className="text-xs sm:text-sm italic text-white/90 leading-relaxed font-normal">
                    &ldquo;Culture is not something the organisation gives its members. Culture is something its people create together.&rdquo;
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Section: THIS IS THE STANDARD (2-Column Split matching The Harmony & Culture Test layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Left Column: Heading, Context & 4 Statement Pills */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2.5">
                  <span className="h-[2px] w-8 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    THIS IS THE STANDARD
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0f131a] tracking-tight leading-[1.15]">
                  <span>Where ambition and humility</span>{' '}
                  <span className="brand-gradient-text block sm:inline">exist together.</span>
                </h3>

                <p className="text-cool-grey-600 text-sm sm:text-base leading-relaxed font-normal">
                  We want PEERS GLOBAL to be a place where experienced entrepreneurs remain learners, where asking for help is respected, where contribution matters, where confidentiality is sacred, and where standards create enduring trust rather than fear.
                </p>
              </div>

              {/* 4 Member Experience Statement Cards in 2x2 Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-cool-grey-200 shadow-2xs hover:shadow-md hover:border-blue-200 transition-all flex items-center gap-3 group">
                  <span className="size-2 rounded-full bg-[#1D4ED8] shrink-0" />
                  <span className="font-semibold text-xs sm:text-sm text-slate-800 leading-snug">
                    &ldquo;I am respected here.&rdquo;
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-cool-grey-200 shadow-2xs hover:shadow-md hover:border-rose-200 transition-all flex items-center gap-3 group">
                  <span className="size-2 rounded-full bg-[#E11D48] shrink-0" />
                  <span className="font-semibold text-xs sm:text-sm text-slate-800 leading-snug">
                    &ldquo;My journey matters here.&rdquo;
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-cool-grey-200 shadow-2xs hover:shadow-md hover:border-indigo-200 transition-all flex items-center gap-3 group">
                  <span className="size-2 rounded-full bg-indigo-600 shrink-0" />
                  <span className="font-semibold text-xs sm:text-sm text-slate-800 leading-snug">
                    &ldquo;I can contribute here.&rdquo;
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-cool-grey-200 shadow-2xs hover:shadow-md hover:border-emerald-200 transition-all flex items-center gap-3 group">
                  <span className="size-2 rounded-full bg-emerald-600 shrink-0" />
                  <span className="font-semibold text-xs sm:text-sm text-slate-800 leading-snug">
                    &ldquo;I can grow here.&rdquo;
                  </span>
                </div>
              </div>

              {/* Bottom Summary Strip */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50/90 via-[#FAFBFD] to-rose-50/90 border border-slate-200/90 shadow-2xs text-xs sm:text-sm text-slate-900 font-medium">
                That is when the <strong className="brand-gradient-text font-bold">Code becomes culture</strong>. And that is when culture becomes the character of the community.
              </div>
            </div>

            {/* Right Column: The Essence of Culture (Dark Cosmic Card matching The Culture Test) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[32px] border border-slate-800/80 bg-gradient-to-br from-[#060D1A] via-[#0B172E] to-[#040812] p-8 sm:p-10 text-white shadow-2xl overflow-hidden min-h-[460px] h-full flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-semibold tracking-widest uppercase text-amber-300">
                    THE ESSENCE OF CULTURE
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold leading-tight text-white tracking-tight">
                    Culture is not what we write.{' '}
                    <span className="brand-gradient-text block sm:inline">It is what we repeat.</span>
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                    It is how we welcome. How we listen. How we help. How we disagree. How we keep confidence. How we recognise. How we lead. How we behave when nobody is watching.
                  </p>
                </div>

                <div className="relative z-10 pt-4 mt-6 border-t border-white/10">
                  <p className="text-xs sm:text-sm italic text-white/90 leading-relaxed font-normal">
                    &ldquo;Culture is not something the organisation gives its members. Culture is something its people create together.&rdquo;
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Come Experience The Culture - Elevated Showcase Card */}
          <div className="relative overflow-hidden rounded-[32px] border border-cool-grey-250 bg-gradient-to-br from-[#FAFBFD] via-white to-blue-50/40 p-8 sm:p-12 lg:p-16 shadow-lg">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-rose-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2.5">
                  <span className="h-[2px] w-8 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    EXPERIENCE PEERS GLOBAL
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0f131a] tracking-tight leading-[1.15]">
                  <span>Come experience</span>{' '}
                  <span className="brand-gradient-text block sm:inline">the culture.</span>
                </h3>

                <p className="text-cool-grey-600 text-base sm:text-lg leading-relaxed font-normal">
                  You can read about a community. You can understand its structure. You can learn its language. But culture is ultimately experienced through people. Meet the people. Enter the Circle. Listen to the conversations. Experience the relationships. And decide what this environment could mean for your own entrepreneurial journey.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="/membership"
                    className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 text-white px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                  >
                    <span>Become a Peer</span>
                    <ArrowRight className="size-4" />
                  </Link>
                  <a
                    href="https://unity.peersglobal.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-cool-grey-250 bg-white hover:bg-slate-50 text-slate-800 px-8 py-4 text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-xs"
                  >
                    <span>Download the Unity App</span>
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </div>

              {/* Visual mini feature highlight badge */}
              <div className="lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-white border border-cool-grey-250/90 shadow-md space-y-4">
                <div className="size-12 rounded-xl bg-gradient-to-br from-blue-600 to-rose-600 text-white flex items-center justify-center shadow-sm">
                  <ShieldCheck className="size-6" />
                </div>
                <h4 className="text-lg font-bold text-[#0f131a]">
                  Culture in Action
                </h4>
                <p className="text-xs sm:text-sm text-cool-grey-600 leading-relaxed font-normal">
                  A live ecosystem governed by respect, shared vulnerability, mutual growth, and high standards.
                </p>
                <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-blue-600">
                  <span>100% Peer-to-Peer</span>
                  <span>•</span>
                  <span>Zero Bureaucracy</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: CLOSING / MISSION SECTION
          ========================================================================= */}
      <ClosingCtaSection
        eyebrow="PEERS ARE PARTNERS IN BUSINESS AND FRIENDS IN LIFE"
        title="Designed in Bharat. Built for the World."
        subtitle="Circles, not crowds. Trust, not transactions. Peers, not gurus."
        description="PEERS GLOBAL is the World's First Community of Collaboration. Enter a trusted Circle and experience culture in action."
        primaryButtonText="BECOME A PEER"
        primaryButtonHref="/membership"
        secondaryButtonText="FIND YOUR CIRCLE"
        secondaryButtonHref="/circles"
      />

    </div>
  )
}
