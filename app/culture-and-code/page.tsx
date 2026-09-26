import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ClosingCtaSection } from '@/components/site/ClosingCtaSection'
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

      <section className="relative overflow-hidden bg-[#050C1A] text-white pt-8 pb-16 sm:pb-24 border-b border-slate-800">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-[140px]"
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
            <span className="text-sky-400 font-semibold">Our Culture & Code</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="inline-flex items-center gap-2.5 text-sky-400 text-xs font-bold tracking-[0.25em] uppercase mb-4">
                <span className="w-6 h-[1.5px] bg-sky-400" />
                <span>THE PEERS CODE</span>
                <span className="w-6 h-[1.5px] bg-sky-400" />
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl lg:text-[62px] font-normal text-white tracking-tight leading-[1.08] mb-5">
                Our Culture & Code
              </h1>

              <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed mb-3 max-w-xl">
                Culture is what a community does, repeatedly, until it becomes who they are.
              </p>

              <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed mb-8 max-w-xl">
                Six commitments. One standard. Every Circle, every city, every country.
              </p>

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

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] aspect-[16/11] sm:aspect-[16/10] group">
                <Image
                  src="/images/culture-hero-desk.jpg"
                  alt="The Peers Code journal on executive desk"
                  fill
                  priority
                  className="object-cover object-center brightness-[0.92] contrast-[1.08] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/20 pointer-events-none" />

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

      <section className="relative py-20 sm:py-28 bg-white text-slate-900 border-b border-slate-200/80">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-[0.035] pointer-events-none overflow-hidden select-none">
          <svg viewBox="0 0 1000 600" fill="currentColor" className="w-full h-full text-slate-900">
            <circle cx="200" cy="200" r="140" />
            <circle cx="500" cy="250" r="180" />
            <circle cx="800" cy="300" r="160" />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2.5 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              <span>WHY A WRITTEN CODE?</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15]">
              A community can have a powerful idea. It can have a beautiful vision. But culture is created by what people do when nobody is watching.
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-slate-700 leading-relaxed">
              <p>
                Good intentions are not enough. A community becomes complex as it grows. Different businesses. Different personalities. Different expectations. Different experiences. What feels obvious to one person may not be obvious to another.
              </p>
              <p>
                A written Code creates a shared understanding. It tells every Peer: this is how we treat one another here. Not because people need to be controlled, but because people deserve to know the standard of the community they have chosen to enter.
              </p>
              <p>
                The Code protects the quality of the environment. It protects trust. It protects relationships. And ultimately, it protects the person who walks into a Circle expecting to be treated with dignity.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-[#FAFBFD] p-8 sm:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.03)]">
            <Quote className="size-9 text-[#0062D2] mb-5 opacity-80" />
            <p className="font-serif italic text-2xl sm:text-[28px] text-slate-800 leading-snug">
              &ldquo;A written Code is not a document for formality. It is a standard for trust.&rdquo;
            </p>
          </div>
        </div>
      </section>

      <section id="the-code" className="relative py-20 sm:py-28 bg-[#FAFBFD] text-slate-900 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2.5 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase mb-4">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              <span>THE SIX COMMITMENTS</span>
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15] mb-5">
              The Peers Code
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              The exact six commitments from the approved Peers Code are reproduced below without editorial alteration.
            </p>
          </div>

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
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-serif text-4xl sm:text-5xl font-bold text-amber-500 tracking-tight">
                        {item.num}.
                      </span>
                      <div className="size-12 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0062D2] group-hover:text-white transition-all duration-300 shadow-xs">
                        <IconComp className="size-6" />
                      </div>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-slate-900 mb-3 tracking-tight">
                      {item.title}
                    </h3>

                    <p className="text-sm font-semibold text-[#0062D2] mb-4">
                      {item.essence}
                    </p>

                    <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative py-20 sm:py-28 bg-white text-slate-900 border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2.5 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              <span>WHAT THE CODE ASKS OF US</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15]">
              Be the kind of Peer you would want beside you.
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-slate-700 leading-relaxed">
              <p>
                The Code becomes meaningful through everyday behaviour. That means remembering that the person across the table is not a lead. Not a prospect. Not a source of business. Not a number.
              </p>
              <p>
                They are a person who has chosen to spend part of their entrepreneurial journey in this community. So we listen. We respect. We contribute. We keep our word. We honour confidentiality. We disagree without diminishing the person. We celebrate contribution without making recognition a competition. And when someone needs help, we remember that asking for help is not weakness. It is part of being human.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 bg-[#0A1324] text-white overflow-hidden border-b border-slate-800">
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 blur-[150px]"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2.5 text-sky-400 text-xs font-bold tracking-[0.25em] uppercase mb-6">
            <Lock className="size-3.5 text-sky-400" />
            <span>CONFIDENTIALITY IS THE FOUNDATION</span>
            <Lock className="size-3.5 text-sky-400" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.15] mb-8">
            Trust cannot exist where people are afraid to speak.
          </h2>

          <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-10 mb-8 backdrop-blur-sm shadow-2xl">
            <p
              className="text-2xl sm:text-3xl lg:text-4xl text-sky-300 font-normal leading-snug drop-shadow-sm"
              style={{ fontFamily: 'var(--font-script)' }}
            >
              &ldquo;What is said in a Circle stays in the Circle.&rdquo;
            </p>
          </div>

          <div className="space-y-6 text-slate-300 font-light text-base sm:text-xl leading-relaxed text-left sm:text-center max-w-3xl mx-auto">
            <p>
              Entrepreneurs sometimes carry questions they cannot discuss openly elsewhere. A difficult business decision. A partnership concern. A people issue. A financial challenge. A leadership dilemma. A personal situation affecting the business.
            </p>
            <p className="text-white font-normal text-lg sm:text-2xl">
              The value of a trusted community is that people can sometimes say “I don’t know,” or “I made a mistake,” or simply “I need help.”
            </p>
            <p className="text-slate-400 text-sm sm:text-base">
              That possibility exists only when people believe their words will be respected. Confidentiality is therefore not a courtesy. It is foundational to trust.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20 sm:py-28 bg-white text-slate-900 border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="inline-flex items-center gap-2.5 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            <span>RESPECT IS NOT OPTIONAL</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15]">
            Every Peer deserves to feel respected and honoured.
          </h2>

          <div className="space-y-5 text-base sm:text-lg text-slate-700 leading-relaxed">
            <p>
              A community can be selective without becoming elitist. It can have standards without making people feel small. It can disagree without becoming disrespectful. And it can recognise achievement without creating hierarchy between human beings.
            </p>
            <p>
              At PEERS GLOBAL, the standard should be simple: People should feel respected and honoured. That includes the entrepreneur who has built a large organisation and the entrepreneur who is still building the first one. The experienced founder. The first-generation entrepreneur. The person asking for help. The person offering it. The person leading the room. And the person quietly listening from the corner.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20 sm:py-28 bg-[#EEF5FC] text-slate-900 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2.5 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase mb-4">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              <span>THE RITUALS</span>
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15] mb-4">
              Culture becomes real through repeated moments.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              The PEERS GLOBAL rituals give the community recurring opportunities to practise its values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-14">
            {RITUALS_DATA.map((ritual, idx) => {
              const RitualIcon = ritual.icon
              return (
                <div
                  key={idx}
                  className="bg-[#FAFBFD] rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-slate-300 transition-all flex flex-col group"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <Image
                      src={ritual.image}
                      alt={ritual.title}
                      fill
                      className="object-cover object-center filter brightness-[0.92] contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-mono font-bold px-3 py-1 rounded-full border border-white/20">
                      RITUAL {ritual.num}
                    </div>

                    <div className="absolute bottom-4 right-4 size-9 rounded-xl bg-white/90 text-[#0062D2] flex items-center justify-center shadow-md">
                      <RitualIcon className="size-4.5" />
                    </div>
                  </div>

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
        </div>
      </section>

      <section className="relative py-20 sm:py-28 bg-white text-slate-900 border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="inline-flex items-center gap-2.5 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            <span>HOW STANDARDS ARE UPHELD</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15]">
            A Code has meaning only when it is respected.
          </h2>

          <div className="space-y-5 text-base sm:text-lg text-slate-700 leading-relaxed">
            <p>
              A written Code is not useful if it exists only as a page on a website. PEERS GLOBAL therefore treats standards as part of the community experience. Concerns about conduct should be taken seriously. People should have a clear understanding of what behaviour is expected. And where behaviour falls outside the community&apos;s standards, it should be addressed through the appropriate organisational process.
            </p>
            <p>
              The purpose is not punishment for its own sake. The purpose is protection. Protection of trust. Protection of people. Protection of the Circle. Protection of the culture that every Peer has entered in good faith.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20 sm:py-28 bg-[#EEF5FC] text-slate-900 border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2.5 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase mb-4">
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            <span>WHAT THIS CULTURE PROTECTS</span>
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15] mb-6">
            Trust. Confidentiality. Respect. Contribution. Belonging. Collaboration.
          </h2>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-[0_6px_30px_rgba(0,0,0,0.03)] space-y-6 text-left sm:text-center max-w-3xl mx-auto">
            <p className="text-xl sm:text-2xl font-serif text-slate-900 font-normal leading-relaxed">
              Culture is often described by what it creates. But strong culture is also defined by what it refuses to allow to disappear.
            </p>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              We protect trust because meaningful relationships cannot be built without it. We protect confidentiality because entrepreneurs need places where they can speak honestly. We protect respect because no achievement gives one person permission to diminish another. We protect contribution because communities become stronger when people give, not only take.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20 sm:py-28 bg-white text-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2.5 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              <span>CULTURE IS EVERYDAY</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15]">
              Culture is not created at an annual summit. It is created in the small moments.
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-slate-700 leading-relaxed">
              <p>
                When someone makes an introduction. When someone shares a difficult lesson. When someone listens without interrupting. When a new Peer is welcomed. When confidential information remains confidential. When someone says, “I can help,” and when someone else feels safe enough to say, “I need help.”
              </p>
              <p>
                That is culture. Repeated. Practised. Experienced. Remembered. And eventually, owned by the people inside the community.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-[#061836] p-8 sm:p-10 text-white shadow-xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-sky-300 mb-3">THE CULTURE TEST</p>
            <h3 className="font-serif text-3xl sm:text-4xl leading-tight">
              Before asking what PEERS GLOBAL can do for us, perhaps we should ask: what kind of person am I becoming inside this community?
            </h3>
          </div>

          <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm">
            <h3 className="font-serif text-3xl text-slate-900">Come experience the culture</h3>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              You can read about a community. You can understand its structure. You can learn its language. But culture is ultimately experienced through people. Meet the people. Enter the Circle. Listen to the conversations. Experience the relationships. And decide what this environment could mean for your own entrepreneurial journey.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/membership"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0062D2] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#0052B4] transition-all"
              >
                <span>Download the Unity App</span>
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/circles"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 hover:border-slate-400 transition-all"
              >
                <span>Find a Circle</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ClosingCtaSection
        eyebrow="THE PEERS CODE BUILDS THE FUTURE"
        title={
          <>
            Culture is what a community does when nobody is watching.{' '}
            <span className="block sm:inline">Ours is written down, so that everybody is.</span>
          </>
        }
        subtitle="Build Your Business. Build Your Relationships. Build Your Circle."
        description="Peers Global — World's First Community of Collaboration. Peers are Partners in Business and Friends in Life."
        primaryButtonText="BECOME A PEER"
        primaryButtonHref="/membership"
        secondaryButtonText="VISIT A CIRCLE"
        secondaryButtonHref="/circles"
      />
    </div>
  )
}
