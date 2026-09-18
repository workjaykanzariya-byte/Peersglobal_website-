'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  Coffee,
  CheckCircle2,
  Clock,
  Sparkles,
  Smartphone,
  Globe2,
  Users,
  ShieldCheck,
  Calendar,
  Layers,
  Award,
  Download,
} from 'lucide-react'

const AGENDA_ITEMS = [
  {
    number: '01',
    title: 'Core Business Mechanics',
    desc: 'What their business actually does, beyond the elevator description.',
  },
  {
    number: '02',
    title: 'Target Client Persona',
    desc: 'Who their ideal customer is, specifically enough that you could recognise one immediately.',
  },
  {
    number: '03',
    title: 'Current Annual Focus',
    desc: 'What strategic projects and milestones they are working on this year.',
  },
  {
    number: '04',
    title: 'Current Bottlenecks',
    desc: 'What is difficult, slow or bottlenecked in their business right now.',
  },
  {
    number: '05',
    title: 'Target Network Reach',
    desc: 'Who they are trying to reach (specific companies, sectors or individuals).',
  },
  {
    number: '06',
    title: 'Hidden Superpowers',
    desc: 'What they can offer or solve that most people do not know about.',
  },
]

export function PeerToPeerClient() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] font-sans selection:bg-[#E8DDD0] selection:text-[#1A1A1A]">
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-[#EADFC7]/50 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-neutral-500 font-medium">
          <Link href="/" className="hover:text-neutral-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span>How We Collaborate</span>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span className="text-neutral-900 font-semibold">Peer-to-Peer Meetings</span>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-[#EADFC7]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-700">
                <Coffee className="w-3.5 h-3.5" />
                One-to-One Collaboration Engine
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#1A1A1A] tracking-tight leading-[1.08]">
                Peer-to-Peer
              </h1>
              <p className="text-xl sm:text-2xl font-serif text-[#5B4834] italic leading-relaxed">
                The Circle meeting introduces you. This is where the relationship is built.
              </p>
              <p className="text-base sm:text-lg text-neutral-600 max-w-xl leading-relaxed">
                Two Peers, one hour, and no agenda except understanding each other&apos;s business properly.
              </p>

              <div className="pt-2">
                <Link
                  href="/unity"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#0D6EFD] text-white text-sm font-semibold hover:bg-blue-700 transition-all shadow-md"
                >
                  Download Unity App
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: Two Entrepreneurs Across Table Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-[#D8C7A5] shadow-2xl bg-[#E8DDD0]">
                <Image
                  src="/images/lexicon-team-understanding.jpg"
                  alt="Two entrepreneurs meeting one-to-one over coffee"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 text-right font-serif italic text-white/90 text-sm sm:text-base drop-shadow-md">
                  Two Peers.<br />One Hour.<br />Real Outcomes.
                </div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] uppercase tracking-widest font-mono text-amber-200 border border-white/30">
                    Depth Over Crowds
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Where Collaboration Actually Begins ─── */}
      <section className="py-16 md:py-24 border-b border-[#EADFC7]/60 bg-[#FAF7F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A7356] font-bold">
            <span className="w-6 h-[1.5px] bg-[#B88746]" />
            The Mechanism of Trust
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A]">
            Where collaboration actually begins
          </h2>
          <div className="prose prose-lg text-[#3D352E] leading-relaxed font-normal space-y-5">
            <p className="text-lg sm:text-xl font-serif text-[#2B231B]">
              A Circle meeting puts thirty entrepreneurs in a room together. That is valuable, and it is not enough.
            </p>
            <p>
              You cannot understand someone&apos;s business from a four-minute showcase. You cannot know what they need, who would be right for them, or what you could genuinely do for them.
            </p>
            <p className="text-xl font-serif font-bold text-[#1A1A1A]">
              That understanding happens one to one.
            </p>
            <p>
              Ask any Peer where their most significant collaboration came from and the answer is almost always the same: Not from the big room. From a conversation with one person, afterwards.
            </p>
          </div>
        </div>
      </section>

      {/* ─── What a Peer-to-Peer Is (Checklist) ─── */}
      <section className="py-16 md:py-24 border-b border-[#EADFC7]/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A7356] font-bold">
              <span className="w-6 h-[1.5px] bg-[#B88746]" />
              The Framework
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A]">
              What a Peer-to-Peer is
            </h2>
            <p className="text-base text-neutral-600">
              One hour. Two Peers. No agenda beyond understanding each other properly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {AGENDA_ITEMS.map((item) => (
              <div
                key={item.number}
                className="p-6 rounded-3xl bg-white border border-[#E8DFC9] shadow-xs flex items-start gap-4"
              >
                <span className="w-10 h-10 rounded-2xl bg-[#FAF4E6] border border-[#EADBBD] text-[#8C6422] font-mono font-bold text-sm flex items-center justify-center shrink-0">
                  {item.number}
                </span>
                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-lg text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* What it is NOT: Notice card */}
          <div className="p-7 rounded-3xl bg-red-50/70 border border-red-200/80 text-center max-w-3xl mx-auto space-y-2">
            <h3 className="text-base font-serif font-bold text-red-950">
              What it is not: A sales pitch
            </h3>
            <p className="text-xs sm:text-sm text-red-900 leading-relaxed">
              Neither person is selling to the other. If a Peer-to-Peer becomes a sales pitch, both people have wasted an hour and one of them has permanently damaged a relationship.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Why One Hour Outperforms a Room ─── */}
      <section className="py-16 md:py-24 border-b border-[#EADFC7]/60 bg-[#FAF7F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A]">
              Why one hour with one person outperforms a room
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'You can be specific',
                desc: 'In a room you describe your business generally. One to one you describe the exact client you want, the exact market you are entering, and the exact problem you cannot solve.',
              },
              {
                title: 'You can be honest',
                desc: 'Nobody says this quarter is difficult in front of thirty people. They say it across a table to one person they respect.',
              },
              {
                title: 'They can actually help',
                desc: 'Vague understanding produces vague introductions. Specific understanding produces the exact game-changing introduction.',
              },
              {
                title: 'It compounds',
                desc: 'A Peer who understands your business properly keeps thinking about you for years. Every time something fits, you are who they call.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="p-7 rounded-3xl bg-white border border-[#E5DAC0] shadow-sm space-y-3"
              >
                <h3 className="font-serif font-bold text-xl text-neutral-900">
                  {card.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How They Work (5 Steps) ─── */}
      <section className="py-16 md:py-24 border-b border-[#EADFC7]/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A]">
              How they work
            </h2>
            <p className="text-sm text-neutral-600">
              The 5-step operational rhythm powered by the Unity App.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                step: '1',
                title: 'Book in the Unity App',
                desc: 'Browse any Peer in your Circle or across Bharat. View their calendar and book directly without back-and-forth.',
              },
              {
                step: '2',
                title: 'Meet',
                desc: 'In person over coffee where possible, online over video when cross-city. One hour is the golden standard.',
              },
              {
                step: '3',
                title: 'Come prepared',
                desc: 'Review their business profile, recent wins and industry background beforehand. Arriving cold wastes the first thirty minutes.',
              },
              {
                step: '4',
                title: 'Give something',
                desc: 'An introduction, a vendor, a framework, or a critical perspective. Give-First applies here more than anywhere else.',
              },
              {
                step: '5',
                title: 'Log what came of it',
                desc: 'Record the collaboration in Unity for bilateral confirmation, earning Life Impact points and Peer Standing.',
              },
            ].map((s) => (
              <div
                key={s.step}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E8DFC9] flex items-start gap-4 shadow-xs"
              >
                <span className="w-8 h-8 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {s.step}
                </span>
                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-lg text-neutral-900">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How Many & Beyond Your Own Circle ─── */}
      <section className="py-16 md:py-24 border-b border-[#EADFC7]/60 bg-[#FAF7F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The No-Quota Position */}
            <div className="p-8 rounded-3xl bg-white border border-[#E5DAC0] shadow-sm space-y-4">
              <h2 className="text-2xl font-serif text-[#1A1A1A] font-bold">
                How many?
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed">
                There is no quota, and imposing one would produce meetings held to hit a number rather than to build a genuine relationship.
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                But the pattern among Peers who get the most from this community is consistent: They do them regularly — with everyone in their Circle over the first year, and then with Peers from other Circles and cities as their needs expand.
              </p>
              <p className="text-xs font-semibold text-[#8C6422] p-3 rounded-xl bg-[#FAF5EB] border border-[#EADBBD]">
                A Peer who attends twelve meetings a year and never sits down with anyone one-to-one has experienced perhaps a third of what this community offers.
              </p>
            </div>

            {/* Beyond Your Own Circle */}
            <div className="p-8 rounded-3xl bg-white border border-[#E5DAC0] shadow-sm space-y-4">
              <h2 className="text-2xl font-serif text-[#1A1A1A] font-bold">
                Beyond your own Circle
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Peer-to-Peers are not limited to the room you sit in.
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Any Peer you are connected to in the Unity App — in any Circle, any city, any country — can be booked for a one-to-one. A manufacturer in another state. Someone operating in the export market you are entering. A founder five years ahead of you.
              </p>
              <p className="text-xs text-neutral-600">
                Charter Peers can reach any Peer across the national network directly, without needing an introduction first.
              </p>
              <div className="pt-2">
                <Link
                  href="/membership"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800"
                >
                  See Membership Tiers <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Closing Banner ─── */}
      <section className="relative bg-[#0D1117] text-white py-24 md:py-32 overflow-hidden border-t border-neutral-800">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="/images/who-we-are-mountain.jpg"
            alt="Mountain ridge horizon"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <p className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-amber-200/90 leading-snug">
            &ldquo;The room introduces you. The hour afterwards is where it starts.&rdquo;
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight">
            Build Your Business. Build Your Relationships. Build Your Circle.
          </h2>

          <div className="pt-2">
            <Link
              href="/unity"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#0D6EFD] text-white text-sm font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl uppercase tracking-wider"
            >
              Download Unity App
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
