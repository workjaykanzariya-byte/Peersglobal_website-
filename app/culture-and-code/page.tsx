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
  Sparkles,
  ChevronRight,
  Handshake,
  Globe,
  Share2,
  Compass,
  MessageSquare,
  Coffee,
  UserPlus,
  Trophy,
  CheckCheck,
  Scale,
  Shield,
  Heart,
  Users,
  Award,
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
// (Reproduced without editorial alteration)
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
    image: '/images/conclave.png',
    icon: UserPlus,
  },
  {
    num: '04',
    name: 'RECOGNITION',
    headline: 'Notice the contribution.',
    desc: 'People do not contribute only for recognition, but recognition tells people that their contribution was seen. A thoughtful introduction, a meaningful collaboration, a helpful conversation, or a difficult problem solved. Notice and appreciate what was given.',
    image: '/images/circle-meeting.png',
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
  },
  {
    title: 'CONFIDENTIALITY',
    desc: 'Because entrepreneurs need places where they can speak honestly.',
    icon: Lock,
  },
  {
    title: 'RESPECT',
    desc: 'Because no achievement gives one person permission to diminish another.',
    icon: Eye,
  },
  {
    title: 'CONTRIBUTION',
    desc: 'Because communities become stronger when people give, not only take.',
    icon: HeartHandshake,
  },
  {
    title: 'BELONGING',
    desc: 'Because nobody should have to earn basic human dignity.',
    icon: Heart,
  },
  {
    title: 'COLLABORATION',
    desc: 'Because the purpose is not simply to know more people, but to create something valuable together.',
    icon: Handshake,
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
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0062D2] selection:text-white">
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* =========================================================================
          SECTION 1: HERO ("OUR CULTURE & CODE")
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
            <span className="text-sky-400 font-semibold">Our Culture &amp; Code</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="inline-flex items-center gap-2.5 text-sky-400 text-xs font-bold tracking-[0.25em] uppercase mb-4">
                <span className="w-6 h-[1.5px] bg-sky-400" />
                <span>OUR CULTURE &amp; CODE</span>
                <span className="w-6 h-[1.5px] bg-sky-400" />
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl lg:text-[62px] font-normal text-white tracking-tight leading-[1.08] mb-5">
                Our Culture &amp; Code
              </h1>

              <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed mb-3 max-w-xl">
                Culture is what a community does, repeatedly, until it becomes who they are.
              </p>

              <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed mb-8 max-w-xl">
                Our language tells us what we mean. Our Code tells us how we behave. Our rituals give us opportunities to practise that behaviour.
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
                  href="#the-code"
                  className="rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white px-7 py-3.5 text-sm font-semibold transition-all hover:scale-105"
                >
                  Read The Peers Code
                </a>
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
                    style={{ fontFamily: 'var(--font-script, cursive)' }}
                  >
                    <div>Six Commitments.</div>
                    <div className="mt-0.5 text-[#0062D2]">One Standard.</div>
                    <div className="mt-1 text-sm font-normal text-slate-700">Every Circle.</div>
                  </div>
                </div>

                <div className="absolute bottom-5 right-6 sm:bottom-7 sm:right-7 pointer-events-none select-none text-right">
                  <div
                    className="text-white/95 text-lg sm:text-xl font-normal leading-tight drop-shadow-lg"
                    style={{ fontFamily: 'var(--font-script, cursive)' }}
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
          SECTION 2: CULTURE IS ARCHITECTURE & WHY A WRITTEN CODE
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-white text-slate-900 border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2.5 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              <span>THE ARCHITECTURE OF TRUST</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15]">
              Culture is created by what people do when nobody is watching.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed">
              <p>
                A community can have a powerful idea. It can have a beautiful vision. It can have an impressive structure. But none of these, by themselves, create culture.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 py-2 text-sm sm:text-base text-slate-800">
                <div>• How they speak to one another.</div>
                <div>• How they respond when someone asks for help.</div>
                <div>• How they treat confidential information.</div>
                <div>• How they welcome someone new.</div>
                <div>• How they recognise contribution.</div>
                <div>• How they handle disagreement.</div>
                <div className="sm:col-span-2 font-medium text-slate-900">
                  • And how they behave when there is nothing to gain immediately.
                </div>
              </div>
              <p>
                At PEERS GLOBAL, culture is therefore not decoration around the business. It is part of the architecture.
              </p>
            </div>
          </div>

          {/* Why a Written Code */}
          <div className="rounded-3xl border border-slate-200 bg-[#FAFBFD] p-8 sm:p-12 shadow-[0_10px_35px_rgba(0,0,0,0.03)] space-y-6">
            <div className="inline-flex items-center gap-2 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
              <span className="w-5 h-[1.5px] bg-[#0062D2]" />
              <span>WHY A WRITTEN CODE?</span>
            </div>
            
            <h3 className="font-serif text-2xl sm:text-3xl text-slate-900">
              Because good intentions are not enough.
            </h3>

            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
              Most people want to behave well. But communities become complicated as they grow: Different businesses. Different personalities. Different cultures. Different expectations. Different experiences. What feels obvious to one person may not be obvious to another.
            </p>
            
            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
              A written Code creates a shared understanding. It tells every Peer: <strong className="text-slate-900">This is how we treat one another here.</strong> Not because people need to be controlled, but because people deserve to know the standard of the community they have chosen to enter.
            </p>

            <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-100 text-[#0062D2] text-base font-medium">
              The Code protects the quality of the environment. It protects trust. It protects relationships. And ultimately, it protects the person who walks into a Circle expecting to be treated with dignity.
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: THE PEERS CODE (THE SIX APPROVED COMMITMENTS)
          ========================================================================= */}
      <section id="the-code" className="relative py-20 sm:py-28 bg-[#FAFBFD] text-slate-900 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2.5 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              <span>THE BEHAVIOURAL FOUNDATION</span>
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15]">
              The Peers Code
            </h2>

            <p className="text-lg text-slate-700 font-medium">
              Six commitments that define how we belong.
            </p>

            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
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
                  className="relative bg-white rounded-3xl p-8 border border-slate-200/90 shadow-[0_6px_25px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group scroll-mt-28"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-serif text-4xl font-bold text-amber-500 tracking-tight">
                        {item.num}.
                      </span>
                      <div className="size-12 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0062D2] group-hover:text-white transition-all duration-300 shadow-xs">
                        <IconComp className="size-6" />
                      </div>
                    </div>

                    <h3 className="font-serif text-2xl font-semibold text-slate-900 mb-2 tracking-tight">
                      {item.title}
                    </h3>

                    <p className="text-xs font-bold tracking-wide uppercase text-[#0062D2] mb-3">
                      {item.essence}
                    </p>

                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center max-w-2xl mx-auto text-sm text-slate-500 leading-relaxed">
            The Code is not intended to make everyone identical. It exists so that people with different businesses, personalities and perspectives can still share the same standard of respect.
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: WHAT THE CODE ASKS OF US & CONFIDENTIALITY & RESPECT
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-white text-slate-900 border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* What the code asks of us */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2.5 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              <span>EVERYDAY BEHAVIOUR</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 leading-tight">
              What the Code asks of us: Be the kind of Peer you would want beside you.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed">
              <p>
                The Code becomes meaningful through everyday behaviour. That means remembering that the person across the table is not a lead. Not a prospect. Not a source of business. Not a number.
              </p>
              <p>
                They are a person who has chosen to spend part of their entrepreneurial journey in this community.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 py-2 text-sm text-slate-700 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div>• So we listen.</div>
                <div>• We respect.</div>
                <div>• We contribute.</div>
                <div>• We keep our word.</div>
                <div>• We honour confidentiality.</div>
                <div>• We disagree without diminishing the person.</div>
                <div>• We celebrate contribution without making recognition a competition.</div>
                <div>• And when someone needs help, we remember that asking for help is not weakness—it is part of being human.</div>
              </div>
            </div>
          </div>

          {/* Confidentiality is the foundation */}
          <div className="rounded-3xl border border-slate-800 bg-[#050C1A] p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden space-y-6">
            <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-[#0062D2]/20 blur-[90px]" />
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 text-sky-400 text-xs font-bold tracking-[0.25em] uppercase">
                <Lock className="size-3.5 text-sky-400" />
                <span>CONFIDENTIALITY IS THE FOUNDATION</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-white">
                Trust cannot exist where people are afraid to speak.
              </h3>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Entrepreneurs sometimes carry questions they cannot discuss openly elsewhere. A difficult business decision. A partnership concern. A people issue. A financial challenge. A leadership dilemma. A personal situation affecting the business.
              </p>
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
                The value of a trusted community is that people can sometimes say: <em className="text-white font-medium">&ldquo;I don&apos;t know,&rdquo;</em> or <em className="text-white font-medium">&ldquo;I made a mistake,&rdquo;</em> or simply <em className="text-white font-medium">&ldquo;I need help.&rdquo;</em>
              </p>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-sky-300 text-base">
                Confidentiality is therefore not a courtesy. It is foundational to trust. What is shared in a confidential setting must be treated with the seriousness that the person sharing it deserves. The objective is not merely to protect information—it is to protect the courage required to share it.
              </div>
            </div>
          </div>

          {/* Respect is not optional */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2.5 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              <span>HUMAN DIGNITY</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 leading-tight">
              Respect is not optional. Every Peer deserves to feel respected and honoured.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed">
              <p>
                A community can be selective without becoming elitist. It can have standards without making people feel small. It can disagree without becoming disrespectful. And it can recognise achievement without creating hierarchy between human beings.
              </p>
              <p>
                At PEERS GLOBAL, the standard should be simple: <strong className="text-slate-900">People should feel respected and honoured.</strong>
              </p>
              <ul className="list-disc pl-6 space-y-1 text-slate-700 text-base">
                <li>That includes the entrepreneur who has built a large organisation and the entrepreneur who is still building the first one.</li>
                <li>The experienced founder and the first-generation entrepreneur.</li>
                <li>The person asking for help and the person offering it.</li>
                <li>The person leading the room and the person quietly listening from the corner.</li>
              </ul>
              <div className="p-4 rounded-2xl bg-[#0062D2]/5 border border-[#0062D2]/15 text-[#0062D2] font-serif italic text-lg sm:text-xl">
                &ldquo;Status may differ. Experience may differ. Business size may differ. Human dignity does not.&rdquo;
              </div>
            </div>
          </div>

          {/* Give-First is a Cultural Practice */}
          <div className="rounded-3xl border border-slate-200 bg-[#FAFBFD] p-8 sm:p-10 shadow-sm space-y-4">
            <div className="inline-flex items-center gap-2 text-amber-600 text-xs font-bold tracking-[0.25em] uppercase">
              <HeartHandshake className="size-4 text-amber-600" />
              <span>GIVE-FIRST IS A CULTURAL PRACTICE</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-slate-900">
              The language introduces Give-First. The culture gives it a place to live.
            </h3>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Give-First means entering relationships with the willingness to contribute. Sometimes that contribution is visible; sometimes it is not. An introduction. An idea. An experience. A recommendation. A lesson learned the hard way. A listening ear. A connection. A few minutes of attention.
            </p>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              The important question is not: &ldquo;Was this valuable enough?&rdquo; The question is: <strong className="text-slate-900">&ldquo;Did I genuinely try to help?&rdquo;</strong>
            </p>
            <p className="text-slate-900 font-medium">
              A culture of contribution becomes powerful when people stop waiting for someone else to create value first.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: THE 5 RITUALS
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-[#FAFBFD] text-slate-900 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2.5 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              <span>THE RITUALS</span>
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-[1.15]">
              Culture becomes real through repeated moments.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              The PEERS GLOBAL rituals give the community recurring opportunities to practise its values. They are not formalities to be completed—they are moments that remind people what the community is for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {RITUALS_DATA.map((ritual, idx) => {
              const RitualIcon = ritual.icon
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-slate-300 transition-all flex flex-col group"
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

                    <div className="absolute bottom-4 right-4 size-9 rounded-xl bg-white/90 text-[#0062D2] flex items-center justify-center shadow-md">
                      <RitualIcon className="size-4.5" />
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-slate-900 mb-1 leading-snug">
                        {ritual.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#0062D2] mb-3">
                        {ritual.headline}
                      </p>
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

      {/* =========================================================================
          SECTION 6: HOW STANDARDS ARE UPHELD & WHAT THIS CULTURE PROTECTS
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-white text-slate-900 border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* How standards are upheld */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2.5 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              <span>HOW STANDARDS ARE UPHELD</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 leading-tight">
              A Code has meaning only when it is respected.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed">
              <p>
                A written Code is not useful if it exists only as a page on a website. PEERS GLOBAL therefore treats standards as part of the community experience. Concerns about conduct should be taken seriously. People should have a clear understanding of what behaviour is expected.
              </p>
              <p>
                And where behaviour falls outside the community&apos;s standards, it should be addressed through the appropriate organisational process.
              </p>
              <p className="text-slate-900 font-medium">
                The purpose is not punishment for its own sake. The purpose is protection: Protection of trust. Protection of people. Protection of the Circle. Protection of the culture that every Peer has entered in good faith.
              </p>
            </div>
          </div>

          {/* What This Culture Protects */}
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2.5 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
                <span className="w-6 h-[1.5px] bg-[#0062D2]" />
                <span>WHAT THIS CULTURE PROTECTS</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-slate-900">
                Strong culture is defined by what it refuses to allow to disappear.
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHAT_WE_PROTECT.map((item, idx) => {
                const IconComponent = item.icon
                return (
                  <div key={idx} className="p-6 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 space-y-3 hover:border-blue-300 transition-colors">
                    <div className="size-10 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center">
                      <IconComponent className="size-5" />
                    </div>
                    <h4 className="font-serif text-lg font-bold text-slate-900">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Culture is Everyday */}
          <div className="rounded-3xl border border-slate-200 bg-[#FAFBFD] p-8 sm:p-10 space-y-5">
            <div className="inline-flex items-center gap-2 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
              <span className="w-5 h-[1.5px] bg-[#0062D2]" />
              <span>CULTURE IS EVERYDAY</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-slate-900">
              Culture is not created at an annual summit. It is created in the small moments.
            </h3>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              When someone makes an introduction. When someone shares a difficult lesson. When someone listens without interrupting. When a new Peer is welcomed. When confidential information remains confidential. When someone says: &ldquo;I can help,&rdquo; and when someone else feels safe enough to say: &ldquo;I need help.&rdquo;
            </p>
            <p className="font-serif italic text-lg sm:text-xl text-[#0062D2]">
              That is culture. Repeated. Practised. Experienced. Remembered. And eventually, owned by the people inside the community.
            </p>
          </div>

          {/* The Code and The Language Work Together */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2.5 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              <span>THE HARMONY OF CODE &amp; LANGUAGE</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-slate-900">
              The Code and The Language Work Together
            </h3>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              Our previous page introduced the words: <strong className="text-slate-900">Peer, Circle, Powerhouse, Give-First, Life Impactor, LSR, Unity, MindMeld, Confidential Forum, Collaboration.</strong> This page gives those words a behavioural foundation:
            </p>
            <div className="grid sm:grid-cols-2 gap-3 text-sm sm:text-base text-slate-700">
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200">
                <strong className="text-slate-900">Peer</strong> is how we relate.
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200">
                <strong className="text-slate-900">Circle</strong> is where we belong.
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200">
                <strong className="text-slate-900">Give-First</strong> is how we contribute.
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200">
                <strong className="text-slate-900">LSR</strong> is how we grow.
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200">
                <strong className="text-slate-900">Confidentiality</strong> is how we build trust.
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200">
                <strong className="text-slate-900">Recognition</strong> is how we appreciate contribution.
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 sm:col-span-2">
                <strong className="text-slate-900">Life Impact</strong> is how we understand the difference our actions can make. And the <strong className="text-slate-900">Code</strong> is the standard that holds them together.
              </div>
            </div>
          </div>

          {/* The Culture Test */}
          <div className="rounded-3xl border border-slate-800 bg-[#050C1A] p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden space-y-6">
            <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-[#0062D2]/20 blur-[90px]" />
            <div className="relative z-10 space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
                THE CULTURE TEST
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
                Before asking what PEERS GLOBAL can do for us, ask: What kind of person am I becoming inside this community?
              </h3>
              <div className="grid sm:grid-cols-2 gap-2 text-slate-300 text-sm sm:text-base pt-2">
                <div>• Am I learning?</div>
                <div>• Am I sharing?</div>
                <div>• Am I building relationships?</div>
                <div>• Am I contributing?</div>
                <div>• Am I keeping trust?</div>
                <div>• Am I making someone else&apos;s journey easier?</div>
                <div className="sm:col-span-2 text-white font-medium">
                  • Am I helping create the environment I would want to experience myself?
                </div>
              </div>
              <p className="text-slate-300 text-sm sm:text-base pt-2">
                Because ultimately, culture is not something the organisation gives its members. Culture is something its people create together.
              </p>
            </div>
          </div>

          {/* This is the Standard & Culture is Not What We Write */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2.5 text-[#0062D2] text-xs font-bold tracking-[0.25em] uppercase">
              <span className="w-6 h-[1.5px] bg-[#0062D2]" />
              <span>THIS IS THE STANDARD</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-slate-900">
              Where ambition and humility exist together.
            </h3>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              We want PEERS GLOBAL to be a place where ambition and humility can exist together. Where experienced entrepreneurs can remain learners. Where asking for help is respected. Where contribution matters. Where confidentiality is taken seriously. Where recognition is genuine. Where leadership means responsibility. Where standards create trust rather than fear.
            </p>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 font-medium space-y-2 text-base">
              <div>&ldquo;I am respected here.&rdquo;</div>
              <div>&ldquo;My journey matters here.&rdquo;</div>
              <div>&ldquo;I can contribute here.&rdquo;</div>
              <div>&ldquo;I can grow here.&rdquo;</div>
            </div>
          </div>

          {/* Culture is Not What We Write */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <h4 className="font-serif text-2xl text-slate-900">
              Culture is not what we write. It is what we repeat.
            </h4>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              It is how we welcome. How we listen. How we help. How we disagree. How we keep confidence. How we recognise. How we lead. How we behave when nobody is watching.
            </p>
            <p className="text-slate-900 font-semibold text-lg">
              That is when the Code becomes culture. And that is when culture becomes the character of the community.
            </p>
          </div>

          {/* Come Experience The Culture */}
          <div className="space-y-6 rounded-3xl border border-slate-200 bg-[#FAFBFD] p-8 sm:p-12 shadow-sm">
            <h3 className="font-serif text-3xl sm:text-4xl text-slate-900">
              Come experience the culture
            </h3>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              You can read about a community. You can understand its structure. You can learn its language. But culture is ultimately experienced through people. Meet the people. Enter the Circle. Listen to the conversations. Experience the relationships. And decide what this environment could mean for your own entrepreneurial journey.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/membership"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0062D2] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#0052B4] shadow-md shadow-blue-600/20 transition-all hover:scale-105"
              >
                <span>Become a Peer</span>
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
