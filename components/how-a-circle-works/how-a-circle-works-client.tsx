'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  Lock,
  Users,
  Heart,
  Puzzle,
  Target,
  FileText,
  Calendar,
  Layers,
  Smartphone,
  CheckCircle2,
  Crown,
  UserCheck,
  ShieldCheck,
  TrendingUp,
  Leaf,
  Cog,
  Trophy,
  Star,
  Plus,
  Compass,
} from 'lucide-react'

export function HowACircleWorksClient() {
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
          <span className="text-neutral-900 font-semibold">How a Circle Works</span>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-[#EADFC7]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#1A1A1A] tracking-tight leading-[1.08]">
                How a Circle Works
              </h1>
              <p className="text-xl sm:text-2xl font-serif text-[#5B4834] italic leading-relaxed">
                The mechanics behind the room.
              </p>
              <p className="text-base sm:text-lg text-neutral-600 max-w-xl leading-relaxed">
                How a Circle is composed, how seats work, how it runs, and how it grows.
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

            {/* Right Roundtable Meeting Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-[#D8C7A5] shadow-2xl bg-[#E8DDD0]">
                <Image
                  src="/images/circle-meeting.png"
                  alt="Roundtable meeting with entrepreneurs smiling and collaborating"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 text-right font-serif italic text-white/95 text-base sm:text-lg drop-shadow-md">
                  Right People.<br />Real Conversations.<br />Bigger Opportunities.
                </div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] uppercase tracking-widest font-mono text-amber-200 border border-white/30">
                    BUILD BUSINESS • BUILD RELATIONSHIPS • BUILD YOUR CIRCLE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Row 1: Seat Rule / Seat Map Diagram / How Composed ─── */}
      <section className="py-16 md:py-24 border-b border-[#EADFC7]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: One seat, one business category */}
            <div className="lg:col-span-4 p-8 rounded-3xl bg-white border border-[#E8DFC9] shadow-sm space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <h2 className="text-2xl font-serif text-[#1A1A1A] font-bold">
                  One seat, one business category
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-serif italic">
                  This is the rule everything else depends on.
                </p>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Each Circle holds one business per category. If you hold the seat for industrial packaging, you are the only industrial packaging business in that room.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0">
                      <Lock className="w-4 h-4" />
                    </div>
                    <div className="text-xs text-neutral-700">
                      <strong className="block text-neutral-900 font-bold">You can speak openly</strong>
                      Nobody is studying your pricing or waiting for you to reveal a client name.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <div className="text-xs text-neutral-700">
                      <strong className="block text-neutral-900 font-bold">You get the full flow</strong>
                      Every requirement in your category comes to you; there is no one else to send it to.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 border border-rose-100 flex items-center justify-center shrink-0">
                      <Heart className="w-4 h-4" />
                    </div>
                    <div className="text-xs text-neutral-700">
                      <strong className="block text-neutral-900 font-bold">Giving costs you nothing</strong>
                      When there is no competitor in the room, helping another Peer is straightforward.
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#FAF5EB] border border-[#EADBBD] text-xs font-semibold text-[#8C6422]">
                A seat is not a subscription. It is a position in a specific room, and there is only one of it.
              </div>
            </div>

            {/* Center: A Circle Seat Map Diagram */}
            <div className="lg:col-span-4 p-8 rounded-3xl bg-[#FAF6EE] border border-[#EADBBD] shadow-sm flex flex-col items-center justify-between text-center space-y-6">
              <div>
                <h3 className="text-xl font-serif text-[#1A1A1A] font-bold">
                  A Circle Seat Map
                </h3>
                <p className="text-xs text-neutral-500 mt-0.5">
                  One business per category
                </p>
              </div>

              {/* Graphic circle seat representation */}
              <div className="relative w-64 h-64 mx-auto my-auto flex items-center justify-center">
                {/* Central Hub */}
                <div className="w-28 h-28 rounded-full bg-[#0D1B2A] text-white flex flex-col items-center justify-center shadow-lg z-10 p-2">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-amber-300">
                    PeersGlobal
                  </span>
                  <span className="text-sm font-serif font-bold">CIRCLE</span>
                </div>

                {/* Surrounding Nodes */}
                {[
                  { label: 'Legal', pos: 'top-0 left-1/2 -translate-x-1/2' },
                  { label: 'IT Services', pos: 'top-4 right-6' },
                  { label: 'Finance', pos: 'right-0 top-1/2 -translate-y-1/2' },
                  { label: 'Marketing', pos: 'bottom-4 right-6' },
                  { label: 'Manufacturing', pos: 'bottom-0 left-1/2 -translate-x-1/2' },
                  { label: 'Real Estate', pos: 'bottom-4 left-6' },
                  { label: 'Healthcare', pos: 'left-0 top-1/2 -translate-y-1/2' },
                  { label: 'Open Seat', pos: 'top-4 left-6', isOpen: true },
                ].map((node) => (
                  <div
                    key={node.label}
                    className={`absolute ${node.pos} px-2.5 py-1 rounded-full text-[10px] font-semibold border ${
                      node.isOpen
                        ? 'bg-white border-dashed border-blue-500 text-blue-600 shadow-sm animate-pulse'
                        : 'bg-white border-[#E0D0B5] text-neutral-800 shadow-xs'
                    }`}
                  >
                    {node.isOpen ? '+ ' : ''}
                    {node.label}
                  </div>
                ))}
              </div>

              <p className="font-serif italic text-xs text-[#8C6422] pt-2">
                Different businesses. A stronger together.
              </p>
            </div>

            {/* Right: How a Circle is composed */}
            <div className="lg:col-span-4 p-8 rounded-3xl bg-white border border-[#E8DFC9] shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <h2 className="text-2xl font-serif text-[#1A1A1A] font-bold">
                  How a Circle is composed
                </h2>
                <p className="text-xs text-neutral-600 font-serif italic">
                  Circles are built deliberately, seat by seat.
                </p>

                <div className="space-y-3.5 text-xs text-neutral-600">
                  <div className="flex items-start gap-3">
                    <Puzzle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-neutral-900 font-semibold">Complementary, never competing</strong>
                      Businesses that can serve each other&apos;s clients and open markets.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-neutral-900 font-semibold">Varied by function within shared focus</strong>
                      An Industry Circle groups a sector but varies the functions inside it.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-neutral-900 font-semibold">Sized for depth</strong>
                      Large enough for substance; small enough to genuinely know your business.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-neutral-900 font-semibold">Reviewed for fit</strong>
                      Every seat request is assessed by the Circle Director and Committee.
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/membership"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800"
                >
                  See Criteria &amp; Process <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Row 2: The Rhythm / Annual Diagram / Between Meetings ─── */}
      <section className="py-16 md:py-24 border-b border-[#EADFC7]/60 bg-[#FAF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: The Rhythm */}
            <div className="lg:col-span-4 p-8 rounded-3xl bg-white border border-[#E5DAC0] shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <h2 className="text-2xl font-serif text-[#1A1A1A] font-bold">
                  The rhythm
                </h2>
                <p className="text-xs text-neutral-600 font-serif italic">
                  Twelve meetings a year.
                </p>

                <div className="space-y-3.5 text-xs text-neutral-600">
                  <div className="p-3.5 rounded-2xl bg-[#FAF8F4] border border-[#EDE4D0]">
                    <strong className="block text-neutral-900 font-bold mb-1">Twelve meetings a year</strong>
                    A fixed schedule, published well in advance, so busy owners plan around it.
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#FAF8F4] border border-[#EDE4D0]">
                    <strong className="block text-neutral-900 font-bold mb-1">The same people, every time</strong>
                    This is the mechanism. Trust needs repetition, and repetition needs a calendar.
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#FAF8F4] border border-[#EDE4D0]">
                    <strong className="block text-neutral-900 font-bold mb-1">The same agenda</strong>
                    Four parts, in the same order, in every Circle in every city.
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/circle-meeting-experience"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800"
                >
                  See the Meeting Agenda <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Center: The Annual Rhythm Diagram */}
            <div className="lg:col-span-4 p-8 rounded-3xl bg-[#FAF6EE] border border-[#EADBBD] shadow-sm flex flex-col justify-between space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-serif text-[#1A1A1A] font-bold">
                  The Annual Rhythm
                </h3>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Meet. Connect. Collaborate. All year.
                </p>
              </div>

              {/* Step dots */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-neutral-500 border-b border-[#E0D0B5] pb-3">
                  <span className="font-bold text-[#0D6EFD]">Meeting 1</span>
                  <span>Meeting 2</span>
                  <span>Meeting 3</span>
                  <span className="text-neutral-400">...</span>
                  <span className="font-bold text-neutral-900">Meeting 12</span>
                </div>

                <div className="space-y-2.5">
                  <div className="p-3 rounded-xl bg-white border border-[#E0D0B5] text-xs">
                    <strong className="block text-blue-600 font-bold">Peer-to-Peer Meetings</strong>
                    <span className="text-neutral-500 text-[11px]">(One to One deep dives outside the room)</span>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-[#E0D0B5] text-xs">
                    <strong className="block text-emerald-600 font-bold">Unity App (All Year)</strong>
                    <span className="text-neutral-500 text-[11px]">Share requirements • Make introductions • Log contributions</span>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-[#E0D0B5] text-xs">
                    <strong className="block text-purple-600 font-bold">Follow-through</strong>
                    <span className="text-neutral-500 text-[11px]">Conversations turn into confirmed collaborations</span>
                  </div>
                </div>
              </div>

              <div className="text-center text-xs font-serif italic text-neutral-500">
                A Circle meets twelve times and works all 365 days.
              </div>
            </div>

            {/* Right: What happens between meetings */}
            <div className="lg:col-span-4 p-8 rounded-3xl bg-white border border-[#E5DAC0] shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <h2 className="text-2xl font-serif text-[#1A1A1A] font-bold">
                  What happens between meetings
                </h2>
                <p className="text-xs text-neutral-600 font-serif italic">
                  A Circle meets twelve times a year and works all year.
                </p>

                <div className="space-y-3 text-xs text-neutral-600">
                  <div className="p-3.5 rounded-2xl bg-[#FAF8F4] border border-[#EDE4D0]">
                    <strong className="block text-neutral-900 font-bold mb-0.5">Peer-to-Peer meetings</strong>
                    One to one, outside the Circle, to understand each other&apos;s business properly. Most real collaboration begins here.
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#FAF8F4] border border-[#EDE4D0]">
                    <strong className="block text-neutral-900 font-bold mb-0.5">The Unity App</strong>
                    Requirements shared, introductions made, contributions logged and confirmed, one-to-ones booked.
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#FAF8F4] border border-[#EDE4D0]">
                    <strong className="block text-neutral-900 font-bold mb-0.5">Follow-through</strong>
                    An introduction promised at a roundtable becomes a call the following week, declared at the next Impact Round.
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/peer-to-peer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800"
                >
                  See Peer-to-Peer Meetings <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Row 3: Who Runs It / How It Grows / What Keeps It Healthy ─── */}
      <section className="py-16 md:py-24 border-b border-[#EADFC7]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: Who runs it */}
            <div className="lg:col-span-4 p-8 rounded-3xl bg-white border border-[#E8DFC9] shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <h2 className="text-2xl font-serif text-[#1A1A1A] font-bold">
                  Who runs it
                </h2>
                <div className="space-y-3 text-xs text-neutral-600">
                  <div className="flex items-start gap-3">
                    <Crown className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-neutral-900 font-bold">Circle Founder</strong>
                      The entrepreneur who convened the room and set its standard.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <UserCheck className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-neutral-900 font-bold">Circle Director</strong>
                      Holds the culture, rhythm and growth, and mentors the Chairs.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-neutral-900 font-bold">Chairs and Committees</strong>
                      Peers who run the working life of the Circle.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-neutral-900 font-bold">Membership Experience Committee</strong>
                      Reviews and approves every request for a seat.
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/circle-roles"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800"
                >
                  See Circle Roles <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Center: How a Circle grows */}
            <div className="lg:col-span-4 p-8 rounded-3xl bg-white border border-[#E8DFC9] shadow-sm space-y-4">
              <h2 className="text-2xl font-serif text-[#1A1A1A] font-bold">
                How a Circle grows
              </h2>
              <div className="space-y-3.5 text-xs text-neutral-600">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-neutral-900 font-bold">Seats fill</strong>
                    Categories that are open get taken, and the room&apos;s coverage widens.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Leaf className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-neutral-900 font-bold">Relationships deepen</strong>
                    Year two produces considerably more than year one because members know each other.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Cog className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-neutral-900 font-bold">Contribution compounds</strong>
                    Each collaboration makes the next one easier to see.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Trophy className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-neutral-900 font-bold">The Circle becomes known</strong>
                    In its city and industry, as a room genuinely worth being in.
                  </div>
                </div>
              </div>
            </div>

            {/* Right: What keeps a Circle healthy */}
            <div className="lg:col-span-4 p-8 rounded-3xl bg-white border border-[#E8DFC9] shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <h2 className="text-2xl font-serif text-[#1A1A1A] font-bold">
                  What keeps a Circle healthy
                </h2>
                <div className="space-y-2.5 text-xs text-neutral-600">
                  <p><strong>Attendance:</strong> Consistency is the foundation. A Peer who stops attending stops mattering to the room.</p>
                  <p><strong>Contribution:</strong> Every Peer giving, not only the generous few.</p>
                  <p><strong>Standards:</strong> The Peers Code held by everyone, and enforced by the Director.</p>
                  <p><strong>Composition:</strong> The right entrepreneurs in the right seats, with honest feedback when fit falters.</p>
                  <p><strong>Leadership:</strong> A Director who is present, and Chairs who are active.</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/culture-and-code"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800"
                >
                  Read the Peers Code <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Bottom Section: Joining a Circle (6 Steps) + Dark Mountain Card ─── */}
      <section className="py-16 md:py-24 border-b border-[#EADFC7]/60 bg-[#FAF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: 6 Steps Process */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-3xl font-serif text-[#1A1A1A] font-bold">
                  Joining a Circle
                </h2>
                <p className="text-sm text-neutral-600 mt-1">
                  A simple, transparent process.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { step: '1', title: 'Subscribe in Unity App', desc: 'Download the app and start your profile' },
                  { step: '2', title: 'Attend as a guest', desc: 'Experience a live Circle meeting' },
                  { step: '3', title: 'Request the Circle', desc: 'Select your preferred industry or purpose room' },
                  { step: '4', title: 'Director Review', desc: 'Assessed by Director & Committee within a week' },
                  { step: '5', title: 'Pay Experience Fee', desc: 'Confirm your annual seat inclusion' },
                  { step: '6', title: 'Category Locked', desc: 'Your business sector is exclusive to you' },
                ].map((st) => (
                  <div
                    key={st.step}
                    className="p-5 rounded-2xl bg-white border border-[#E5DAC0] space-y-2 shadow-xs"
                  >
                    <span className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                      {st.step}
                    </span>
                    <h3 className="text-xs font-serif font-bold text-neutral-900 leading-tight">
                      {st.title}
                    </h3>
                    <p className="text-[11px] text-neutral-500 leading-normal">
                      {st.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div>
                <Link
                  href="/circles"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-neutral-800 text-xs font-bold border border-[#DACFBA] hover:bg-[#FAF5EB] transition-all shadow-xs"
                >
                  Find Your Circle <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right: Dark Mountain Card */}
            <div className="lg:col-span-5 relative rounded-3xl overflow-hidden bg-[#0D1117] text-white p-8 sm:p-10 shadow-xl border border-neutral-800">
              <div className="absolute inset-0 opacity-25">
                <Image
                  src="/images/who-we-are-mountain.jpg"
                  alt="Mountain peak horizon"
                  fill
                  sizes="500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/80 to-transparent" />
              </div>

              <div className="relative z-10 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-serif text-white leading-tight">
                    The rules are simple.<br />What they produce is not.
                  </h3>
                  <p className="text-sm font-serif italic text-amber-200/90 leading-relaxed">
                    Build Your Business. Build Your Relationships. Build Your Circle.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/unity"
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#0D6EFD] text-white text-xs font-bold uppercase tracking-wider hover:bg-blue-600 transition-all shadow-md"
                  >
                    Download Unity App
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <p className="font-serif italic text-xs text-neutral-400">
                  A Stronger Community. A Brighter Tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
