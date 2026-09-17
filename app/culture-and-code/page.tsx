import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Quote,
  CheckCircle2,
  Lock,
  HeartHandshake,
  CalendarCheck,
  ShieldCheck,
  Eye,
  Users,
  Sparkles,
  ChevronRight,
  Handshake,
  Globe,
  Share2,
  Clock,
  Compass,
  MessageSquare,
  Coffee,
  UserPlus,
  Trophy,
  CheckCheck,
  Scale,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'The Peers Code | Culture, Conduct & Rituals at Peers Global',
  description:
    'The six commitments every Peer makes, the conduct expected inside a Circle, and the rituals that build trust across the Peers Global community.',
  keywords: [
    'peers code',
    'business circle code of conduct',
    'entrepreneur community values',
    'trust in business communities',
    'Peers Global culture',
    'Circle rituals',
    'confidentiality in business networking',
  ],
  openGraph: {
    title: 'The Peers Code | Culture, Conduct & Rituals at Peers Global',
    description:
      'The six commitments every Peer makes, the conduct expected inside a Circle, and the rituals that build trust across the Peers Global community.',
    type: 'website',
    url: 'https://peersglobal.com/culture-and-code',
  },
}

// =========================================================================
// STRUCTURED DATA: THE PEERS CODE (One source, many surfaces)
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
  },
  {
    id: 'show-up',
    num: '02',
    title: 'Show up.',
    essence: 'Presence is not a formality here. It is the mechanism.',
    description:
      'Trust is built by the same people meeting the same people, consistently, over time. Presence is not a formality here. It is the mechanism.',
    icon: CalendarCheck,
  },
  {
    id: 'tell-the-truth',
    num: '03',
    title: 'Tell the truth.',
    essence: 'Especially when it is uncomfortable.',
    description:
      'A Peer who only agrees with you is of no use to your business. We say the difficult thing, kindly, because that is what a friend does.',
    icon: ShieldCheck,
  },
  {
    id: 'protect-the-room',
    num: '04',
    title: 'Protect the room.',
    essence: 'What is shared inside a Circle stays inside it.',
    description:
      'Entrepreneurs will only speak honestly about pressure, uncertainty and failure when they know it will never leave the room.',
    icon: Lock,
  },
  {
    id: 'respect-every-peer',
    num: '05',
    title: 'Respect every Peer.',
    essence: 'Nobody here is measured by their revenue.',
    description:
      'Regardless of the size of their business, the length of their membership or the language they speak. Everyone here started somewhere, and nobody is measured by their revenue.',
    icon: Eye,
  },
  {
    id: 'carry-the-culture',
    num: '06',
    title: 'Carry the culture.',
    essence: 'Culture is held by everyone in the room.',
    description:
      'Every Peer is responsible for the experience of every other Peer. Culture is held by everyone in the room, not by whoever is leading it.',
    icon: Sparkles,
  },
]

// =========================================================================
// CONDUCT DATA: THREE PILLARS OF DAILY PRACTICE
// =========================================================================
const CONDUCT_PILLARS = [
  {
    pillar: 'Inside your Circle',
    subtitle: 'Standards for the room where trust is built',
    icon: Compass,
    rules: [
      'Arrive on time and stay for the full meeting',
      'Come prepared with something to give and something to ask',
      'Listen fully when another Peer is speaking',
      'Never sell from the floor',
      'Keep phones away for the duration',
      'Welcome every guest as though they already belong',
    ],
  },
  {
    pillar: 'When you collaborate',
    subtitle: 'Standards for introductions, deals and mutual work',
    icon: Handshake,
    rules: [
      'Refer only a Peer you would genuinely recommend',
      'Follow up on every introduction you receive, whether or not it converts',
      'Close the loop and tell the Peer who helped you what came of it',
      'Never misuse a contact given to you in trust',
      'Deliver what you promised, on the timeline you promised',
    ],
  },
  {
    pillar: 'Across the community',
    subtitle: 'Standards that protect the global network',
    icon: Globe,
    rules: [
      'Represent Peers Global with dignity, inside and outside the room',
      'Use the Unity App to connect and contribute',
      'Bring in entrepreneurs who will strengthen the community',
      'Keep member information confidential',
      'Raise concerns directly with your Circle Director',
    ],
  },
]

// =========================================================================
// RITUALS DATA: THE FIVE PRACTICES THAT REPEAT ACROSS EVERY CIRCLE
// =========================================================================
const RITUALS_DATA = [
  {
    num: '01',
    title: 'The Give and the Ask',
    image: '/images/give-first-card.jpg',
    desc: 'Each Peer states one thing they can offer and one thing they need. The oldest ritual we have, and the one that makes giving structural rather than accidental.',
    icon: MessageSquare,
  },
  {
    num: '02',
    title: 'The Peer-to-Peer',
    image: '/images/who-we-are-friends.jpg',
    desc: "Two Peers meet one to one, outside the meeting, to genuinely understand each other's business. This is where most real collaboration begins.",
    icon: Coffee,
  },
  {
    num: '03',
    title: 'The Welcome',
    image: '/images/conclave.png',
    desc: 'Every new Peer is introduced by name and connected to a Peer who guides them through their early months. Nobody arrives here and sits unnoticed.',
    icon: UserPlus,
  },
  {
    num: '04',
    title: 'The Recognition',
    image: '/images/circle-meeting.png',
    desc: 'Contribution is acknowledged out loud, in the Circle and across the community. When a Peer helps another Peer, it is said publicly.',
    icon: Trophy,
  },
  {
    num: '05',
    title: 'The Closing',
    image: '/images/outcomes-peers-group.png',
    desc: 'Every meeting ends with each Peer having given something and received something.',
    icon: CheckCheck,
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
          text: 'The Peers Code consists of six commitments every Peer makes: Give first, Show up, Tell the truth, Protect the room, Respect every Peer, and Carry the culture. It is the written agreement that makes a Circle in any city recognisable to a Peer from any other.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is a Circle meeting confidential?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, confidentiality is absolute. What is said in a Circle stays in the Circle. Entrepreneurs will only speak honestly about pressure, uncertainty and failure when they know it will never leave the room. It is the condition on which everything else in this community depends.',
        },
      },
      {
        '@type': 'Question',
        name: 'What conduct is expected of a Peer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Peers are expected to uphold specific conduct standards inside meetings (arrive on time, never sell from the floor, phones away), when collaborating (refer genuinely, close the loop, deliver on promises), and across the wider community (represent with dignity, use the Unity App, keep member data confidential).',
        },
      },
    ],
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* =========================================================================
          SECTION 1: HERO ("OUR CULTURE & CODE")
          Dark Executive Cinematic Banner matching reference design
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
            <span className="text-slate-400">Our World</span>
            <ChevronRight className="size-3.5 text-slate-500" />
            <span className="text-sky-400 font-semibold">Our Culture & Code</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Content (6 cols) */}
            <div className="lg:col-span-6 flex flex-col items-start">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5 text-sky-400 text-xs font-bold tracking-[0.25em] uppercase mb-4">
                <span className="w-6 h-[1.5px] bg-sky-400" />
                <span>THE PEERS CODE</span>
                <span className="w-6 h-[1.5px] bg-sky-400" />
              </div>

              {/* Title */}
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-[62px] font-normal text-white tracking-tight leading-[1.08] mb-5">
                Our Culture & Code
              </h1>

              {/* Subline */}
              <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed mb-3 max-w-xl">
                Culture is what a community does, repeatedly, until it becomes who they are.
              </p>

              {/* Supporting Line */}
              <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed mb-8 max-w-xl">
                Six commitments. One standard. Every Circle, every city, every country.
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
                  Visit a Circle
                </Link>
              </div>

            </div>

            {/* Right Media (6 cols): Executive Desk Scene with Journal */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] aspect-[16/11] sm:aspect-[16/10] group">
                
                {/* Desk Photograph */}
                <Image
                  src="/images/culture-hero-desk.jpg"
                  alt="The Peers Code journal on executive desk"
                  fill
                  priority
                  className="object-cover object-center brightness-[0.92] contrast-[1.08] transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/20 pointer-events-none" />

                {/* Script Typography Overlaid on the Open Journal */}
                <div className="absolute top-[38%] left-[28%] sm:left-[32%] -translate-y-1/2 pointer-events-none select-none text-left">
                  <div
                    className="text-slate-800 text-lg sm:text-2xl font-bold leading-tight drop-shadow-xs"
                    style={{ fontFamily: 'var(--font-script)' }}
                  >
                    <div>Six Commitments.</div>
                    <div className="mt-0.5 text-[#0062D2]">One Standard.</div>
                    <div className="mt-1 text-sm font-normal text-slate-700">Every Circle.</div>
                  </div>
                </div>

                {/* Script Typography on bottom right */}
                <div className="absolute bottom-5 right-6 sm:bottom-7 sm:right-7 pointer-events-none select-none text-right">
                  <div
                    className="text-white/95 text-lg sm:text-xl font-normal leading-tight drop-shadow-lg"
                    style={{ fontFamily: 'var(--font-script)' }}
                  >
                    Written down. <br />
                    Lived out. <br />
                    <span className="text-amber-300">Across every room.</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 2: "WHY A COMMUNITY NEEDS A WRITTEN CODE"
          Pure White Section with Quote Card
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-white text-slate-900 border-b border-slate-200/80">
        
        {/* Subtle Watermark World Map Graphics in Background */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-[0.035] pointer-events-none overflow-hidden select-none">
          <svg viewBox="0 0 1000 600" fill="currentColor" className="w-full h-full text-slate-900">
            <circle cx="200" cy="200" r="140" />
            <circle cx="500" cy="250" r="180" />
            <circle cx="800" cy="300" r="160" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left 7 cols: Content */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase mb-4">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                <span>OUR COMMON GROUND</span>
              </div>

              {/* Headline */}
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15] mb-6">
                Why a community needs a written code
              </h2>

              {/* Narrative Paragraphs */}
              <div className="space-y-4 text-slate-600 font-light text-sm sm:text-base leading-relaxed max-w-2xl">
                <p className="text-base sm:text-lg text-slate-700 font-normal">
                  In one room, culture takes care of itself. Everyone can see everyone. What is expected is obvious.
                </p>
                <p>
                  Across many Circles in many cities, it cannot work that way. A Peer in one city has never met a Peer in another, yet both need to know exactly what is expected of them and exactly what they can expect in return.
                </p>
                <p className="text-slate-900 font-medium">
                  That is what the Peers Code does.
                </p>
                <p>
                  It is the agreement that makes a Circle in any city recognisable to a Peer from any other. It travels with the community as it grows, and it is the reason trust here does not weaken with distance.
                </p>
                <p>
                  Three things carry it. <strong className="text-slate-900 font-semibold">The Code</strong> is what we commit to. <strong className="text-slate-900 font-semibold">The Conduct</strong> is how it looks in daily practice. <strong className="text-slate-900 font-semibold">The Rituals</strong> are what we repeat until it becomes natural.
                </p>
              </div>

            </div>

            {/* Right 5 cols: Quote Card */}
            <div className="lg:col-span-5 flex lg:justify-end">
              <div className="bg-[#FAFBFD] rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-[0_10px_35px_rgba(0,0,0,0.03)] max-w-md w-full relative">
                
                {/* Large Blue Quote Mark */}
                <Quote className="size-9 text-[#0062D2] mb-5 opacity-80" />

                {/* Quote Text */}
                <p className="font-serif italic text-2xl sm:text-[26px] text-slate-800 font-normal leading-snug mb-6">
                  &ldquo;The Code is what we commit to. <br />
                  The Conduct is how it looks in practice. <br />
                  <span className="text-[#0062D2] font-normal">The Rituals are what we repeat</span> <br />
                  until it becomes natural.&rdquo;
                </p>

                {/* Attribution */}
                <div className="pt-5 border-t border-slate-200/70 text-xs font-bold tracking-[0.25em] text-slate-400 uppercase">
                  PEERS GLOBAL
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 3: THE PEERS CODE — SIX COMMITMENTS EVERY PEER MAKES
          Large Numbered Navy & Gold Cards (The Visual Centre)
          ========================================================================= */}
      <section id="the-code" className="relative py-20 sm:py-28 bg-[#FAFBFD] text-slate-900 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 relative">
            
            {/* Cursive Accent */}
            <div className="hidden md:block absolute -right-32 -top-5 pointer-events-none select-none text-right">
              <p
                className="text-[#0062D2] text-2xl font-bold leading-tight drop-shadow-xs -rotate-3"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Six Commitments. <br />
                Every Circle.
              </p>
            </div>

            <div className="inline-flex items-center gap-2.5 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase mb-4">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              <span>THE FOUNDATIONAL PLEDGE</span>
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15] mb-5">
              The Peers Code
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              Six commitments every Peer makes. Set in stone. Agreed to before joining. Lived out in every room.
            </p>
          </div>

          {/* 6 Commitments Grid (2 columns on desktop for generous spacing) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {PEERS_CODE_COMMITMENTS.map((item) => {
              const IconComp = item.icon
              return (
                <div
                  key={item.id}
                  id={item.id}
                  className="relative bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-[0_6px_25px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group scroll-mt-28"
                >
                  <div>
                    {/* Top Row: Numeral in Luxury Amber & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-serif text-4xl sm:text-5xl font-bold text-amber-500 tracking-tight">
                        {item.num}.
                      </span>
                      <div className="size-12 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0062D2] group-hover:text-white transition-all duration-300 shadow-xs">
                        <IconComp className="size-6" />
                      </div>
                    </div>

                    {/* Commitment Title */}
                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-slate-900 mb-3 tracking-tight">
                      {item.title}
                    </h3>

                    {/* Essence Subline */}
                    <p className="text-sm font-semibold text-[#0062D2] mb-4">
                      {item.essence}
                    </p>

                    {/* Detailed Paragraph */}
                    <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Anchor / Link identifier */}
                  <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span># {item.id}</span>
                    <a
                      href={`#${item.id}`}
                      className="text-slate-400 hover:text-[#0062D2] transition-colors"
                      title="Direct link to this commitment"
                    >
                      Anchor Link
                    </a>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 4: THE CONDUCT EXPECTED OF EVERY PEER
          3 Columns for Inside Circle, When Collaborating, Across Community
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-white text-slate-900 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2.5 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase mb-4">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              <span>PRACTICE IN ACTION</span>
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15] mb-4">
              The conduct expected of every Peer
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              The Code is what we commit to. This is what it looks like in practice.
            </p>
          </div>

          {/* 3 Columns Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
            {CONDUCT_PILLARS.map((col, idx) => {
              const PillarIcon = col.icon
              return (
                <div
                  key={idx}
                  className="bg-[#FAFBFD] rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:border-slate-300 transition-all group"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3.5 mb-5 pb-5 border-b border-slate-200/80">
                      <div className="size-11 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <PillarIcon className="size-5" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-bold text-slate-900 leading-snug">
                          {col.pillar}
                        </h3>
                        <p className="text-xs text-slate-500 font-light">
                          {col.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Clean Bulleted List */}
                    <ul className="space-y-3.5">
                      {col.rules.map((rule, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-light leading-relaxed">
                          <CheckCircle2 className="size-4 text-[#0062D2] shrink-0 mt-0.5" />
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Guidelines CTA */}
          <div className="text-center">
            <Link
              href="/legal/community-guidelines"
              className="inline-flex rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-8 py-3.5 text-sm font-semibold shadow-lg shadow-blue-600/25 transition-all hover:scale-105 items-center gap-2"
            >
              <span>Read the Full Community Guidelines</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 5: CONFIDENTIALITY IS THE FOUNDATION
          Full-width, Dignified Editorial Treatment with Larger Type
          ========================================================================= */}
      <section className="relative py-24 sm:py-32 bg-[#0A1324] text-white overflow-hidden border-b border-slate-800">
        
        {/* Ambient Subtle Radial Glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 blur-[150px]"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 text-sky-400 text-xs font-bold tracking-[0.25em] uppercase mb-6">
            <Lock className="size-3.5 text-sky-400" />
            <span>CONFIDENTIALITY IS ABSOLUTE</span>
            <Lock className="size-3.5 text-sky-400" />
          </div>

          {/* Headline */}
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.15] mb-8">
            Confidentiality is the foundation
          </h2>

          {/* Standout Bold Callout */}
          <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-10 mb-8 backdrop-blur-sm shadow-2xl">
            <p
              className="text-2xl sm:text-3xl lg:text-4xl text-sky-300 font-normal leading-snug drop-shadow-sm"
              style={{ fontFamily: 'var(--font-script)' }}
            >
              &ldquo;What is said in a Circle stays in the Circle.&rdquo;
            </p>
          </div>

          {/* Core Paragraphs */}
          <div className="space-y-6 text-slate-300 font-light text-base sm:text-xl leading-relaxed text-left sm:text-center max-w-3xl mx-auto">
            <p>
              Of the six commitments, one carries more weight than the rest.
            </p>
            <p className="text-white font-normal text-lg sm:text-2xl">
              An entrepreneur will only speak about a difficult quarter, a partner who has become a problem, or a decision they are afraid of, if they are certain it goes no further.
            </p>
            <p className="text-slate-400 text-sm sm:text-base">
              Remove that certainty and the conversation immediately becomes a performance — polite, professional and useless.
            </p>
            <p className="pt-4 border-t border-white/10 text-sky-400 font-medium text-base sm:text-lg">
              So confidentiality here is absolute. Not a preference, not a courtesy. The condition on which everything else in this community depends.
            </p>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 6: HOW STANDARDS ARE UPHELD
          Visually Quieter, Stated as Fact (Governance & Accountability)
          ========================================================================= */}
      <section className="relative py-20 sm:py-24 bg-[#F8FAFC] text-slate-900 border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.02)]">
            
            {/* Header */}
            <div className="flex items-center gap-3 text-slate-400 text-xs font-bold tracking-[0.25em] uppercase mb-4">
              <Scale className="size-4 text-slate-500" />
              <span>STANDARDS & GOVERNANCE</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl font-normal text-slate-900 tracking-tight leading-snug mb-3">
              How standards are upheld
            </h2>

            <p className="text-base sm:text-lg text-[#0062D2] font-serif italic mb-6">
              A standard nobody upholds is only a suggestion.
            </p>

            {/* Explanatory Narrative */}
            <div className="space-y-4 text-slate-600 font-light text-sm sm:text-base leading-relaxed">
              <p>
                Certain behaviours end a Peer&apos;s place in this community. Using the room to sell rather than to give. Breaking the confidence of a Circle. Misrepresenting Peers Global for personal gain. Treating any Peer with disrespect. Sustained absence without commitment.
              </p>
              <p>
                These situations are uncommon, and they are handled quietly, fairly and directly by Circle Directors — first through a conversation, and only afterwards through any further step.
              </p>
              <p className="pt-3 border-t border-slate-100 text-slate-800 font-medium">
                We publish this openly because an entrepreneur deciding whether to join deserves to know both sides of the agreement: what is asked of them, and what every Peer around them has already agreed to.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 7: THE RITUALS THAT BUILD TRUST
          Photography-backed Cards for the 5 Rituals
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-white text-slate-900 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2.5 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase mb-4">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              <span>THE FIVE SHARED PRACTICES</span>
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15] mb-4">
              The rituals that build trust
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              Rituals are how a culture passes from one Peer to the next without being explained. These five repeat across every Circle in the community.
            </p>
          </div>

          {/* 5 Rituals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-14">
            {RITUALS_DATA.map((ritual, idx) => {
              const RitualIcon = ritual.icon
              return (
                <div
                  key={idx}
                  className="bg-[#FAFBFD] rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-slate-300 transition-all flex flex-col group"
                >
                  {/* Photo Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <Image
                      src={ritual.image}
                      alt={ritual.title}
                      fill
                      className="object-cover object-center filter brightness-[0.92] contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                    
                    {/* Badge top-left */}
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-mono font-bold px-3 py-1 rounded-full border border-white/20">
                      RITUAL {ritual.num}
                    </div>

                    {/* Icon bottom-right */}
                    <div className="absolute bottom-4 right-4 size-9 rounded-xl bg-white/90 text-[#0062D2] flex items-center justify-center shadow-md">
                      <RitualIcon className="size-4.5" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-slate-900 mb-2 leading-snug">
                        {ritual.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                        {ritual.desc}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Circle Meeting Experience CTA */}
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm text-slate-500 font-light mb-6">
              For the full meeting structure and timings, see the Circle Meeting Experience.
            </p>
            <Link
              href="/circle-meeting-experience"
              className="inline-flex rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-8 py-3.5 text-sm font-semibold shadow-lg shadow-blue-600/25 transition-all hover:scale-105 items-center gap-2"
            >
              <span>See a Circle Meeting</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 8: WHAT THIS CULTURE PROTECTS
          Emotional & Purpose-Driven Alignment
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-[#EEF5FC] text-slate-900 border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center gap-2.5 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase mb-4">
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            <span>THE WHOLE PRODUCT</span>
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15] mb-6">
            What this culture protects
          </h2>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-[0_6px_30px_rgba(0,0,0,0.03)] space-y-6 text-left sm:text-center max-w-3xl mx-auto">
            <p className="text-xl sm:text-2xl font-serif text-slate-900 font-normal leading-relaxed">
              Every commitment on this page exists to protect one thing. <br className="hidden sm:inline" />
              <span className="text-[#0062D2]">A room where an entrepreneur can be completely honest.</span>
            </p>

            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              A place where a Peer can say this quarter is difficult, or I do not know what to do about this partner, or I am tired — and be met with understanding, then with help.
            </p>

            <p className="text-sm sm:text-base font-semibold text-slate-900 pt-4 border-t border-slate-100">
              That room is the entire product. The Code, the conduct and the rituals exist for no other reason than to keep it intact as this community grows from one Circle to a thousand.
            </p>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 9: CLOSING BANNER
          Dark Executive Cinematic Banner matching bottom of reference screenshot
          ========================================================================= */}
      <section className="relative py-24 sm:py-32 bg-[#030B1C] text-white overflow-hidden">
        
        {/* Background Looping Video Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="size-full object-cover object-center filter brightness-[0.7] contrast-[1.1]"
          >
            <source src="/videos/leadership-hero-bg.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Ambient Dark Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030B1C] via-[#030B1C]/80 to-transparent z-[1]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl">
            
            {/* Top Eyebrow */}
            <div className="inline-flex items-center gap-2 text-sky-400 text-xs font-bold tracking-[0.25em] uppercase mb-6">
              <span className="w-5 h-[1.5px] bg-sky-400" />
              <span>THE PEERS CODE BUILDS THE FUTURE</span>
              <span className="w-5 h-[1.5px] bg-sky-400" />
            </div>

            {/* Script Text top right on desktop */}
            <div className="hidden sm:block absolute right-8 top-0 pointer-events-none select-none text-right">
              <p
                className="text-white/80 text-xl sm:text-2xl font-normal drop-shadow-md leading-tight"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Real People. <br />
                Real Impact. <br />
                <span className="text-sky-400">A Stronger Tomorrow.</span>
              </p>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight leading-[1.18] mb-6">
              Culture is what a community does when nobody is watching. <br className="hidden sm:inline" />
              Ours is written down, so that everybody is.
            </h2>

            {/* Italic Belief Subline */}
            <p className="font-serif italic text-lg sm:text-xl text-slate-300 mb-10">
              Build Your Business. Build Your Relationships. Build Your Circle.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/membership"
                className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-8 py-3.5 text-sm font-semibold shadow-xl shadow-blue-600/30 transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                <span>Become a Peer</span>
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="/circles"
                className="rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white px-8 py-3.5 text-sm font-semibold transition-all hover:scale-105"
              >
                Visit a Circle
              </Link>
            </div>

          </div>

          {/* Sub-bar Copyright / Mottos */}
          <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              Peers Global — World&apos;s First Community of Collaboration
            </div>
            <div className="italic text-slate-300">
              &ldquo;Peers are Partners in Business and Friends in Life.&rdquo;
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
