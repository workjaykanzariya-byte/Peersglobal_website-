'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  Handshake,
  Quote,
  ShieldCheck,
  TrendingUp,
  Users,
  Award,
  Calendar,
  Layers,
  Smartphone,
  CheckCircle2,
  XCircle,
  HelpCircle,
} from 'lucide-react'

export function GiveFirstClient() {
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
          <span className="text-neutral-900 font-semibold">The Give-First Principle</span>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-[#EADFC7]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#1A1A1A] tracking-tight leading-[1.08]">
                Give First
              </h1>
              <p className="text-xl sm:text-2xl font-serif text-[#5B4834] italic leading-relaxed">
                You contribute before you ask. Always.
              </p>
              <p className="text-base sm:text-lg text-neutral-600 max-w-xl leading-relaxed">
                It is the founding rule of this community and the reason everything else works.
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

            {/* Right Climbers Hero Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-[#D8C7A5] shadow-2xl bg-[#E8DDD0]">
                <Image
                  src="/images/leadership-climbers-hero.jpg"
                  alt="Mountain climbers helping each other up at sunrise"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {/* Script calligraphy watermark */}
                <div className="absolute top-4 right-4 text-right">
                  <span className="font-serif italic text-base sm:text-lg text-white/95 drop-shadow-md">
                    Give.<br />Support.<br />Share.<br />Lift others.<br />That&apos;s how we grow.
                  </span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] uppercase tracking-widest font-mono text-amber-200 border border-white/30">
                    A Stronger Community Builds Brighter Businesses
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Handshake Banner: The Rule ─── */}
      <section className="py-8 bg-[#F5F8FF] border-b border-[#D4E2FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#CDE0FF] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4 max-w-4xl">
              <div className="w-12 h-12 rounded-2xl bg-[#0D6EFD]/10 border border-[#0D6EFD]/20 flex items-center justify-center text-[#0D6EFD] shrink-0 mt-1">
                <Handshake className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-serif text-[#1A1A1A] font-bold">
                  The rule: Before you ask anything of this community, you give something to it.
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  An introduction. A referral. A lesson that took you years to learn. A vendor you have tested. An hour with someone facing a decision you have already made. Not because it will be returned. Because that is the standard here, and every Peer around you is holding it too.
                </p>
              </div>
            </div>

            <div className="shrink-0 font-serif italic text-right text-base text-[#0D6EFD] hidden lg:block border-l border-blue-100 pl-6">
              Give First.<br />Grow Together.
            </div>
          </div>
        </div>
      </section>

      {/* ─── Row 1: Why a rule / Quote / What it solves ─── */}
      <section className="py-16 md:py-24 border-b border-[#EADFC7]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: Why a rule and not a value */}
            <div className="lg:col-span-4 p-8 rounded-3xl bg-white border border-[#E8DFC9] shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <h2 className="text-2xl font-serif text-[#1A1A1A] font-bold">
                  Why a rule and not a value
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Most communities say they believe in giving. Very few produce it.
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  The reason is simple. In a room where everyone is waiting to see what they receive, nobody moves. Giving feels risky. Asking feels premature. So people exchange cards, say something polite, and nothing happens.
                </p>
                <div className="p-4 rounded-2xl bg-[#FAF6EE] border border-[#EADBBD] text-xs font-semibold text-[#8C6422] leading-relaxed">
                  <strong>Give-First removes the waiting.</strong> When contribution is the entry condition rather than a hoped-for outcome, the first move is already made.
                </div>
              </div>
              <p className="text-xs text-neutral-500 font-serif italic border-t border-[#F0E6D2] pt-3">
                A value is something people agree with. A rule is something people do.
              </p>
            </div>

            {/* Center: Dr. Pravin Parmar Quote Card */}
            <div className="lg:col-span-4 p-8 rounded-3xl bg-[#FAF5EB] border border-[#EADBBD] shadow-sm flex flex-col items-center justify-center text-center space-y-5">
              <Quote className="w-12 h-12 text-[#C29B38]/50" />
              <p className="text-2xl sm:text-3xl font-serif italic text-[#2C241B] leading-snug">
                &ldquo;A community is not built by what we take, but by what we give.&rdquo;
              </p>
              <div className="pt-2">
                <strong className="block text-sm font-semibold text-neutral-900">
                  Dr. Pravin Parmar
                </strong>
                <span className="text-xs text-neutral-500 font-serif italic">
                  Founder, Peers Global
                </span>
              </div>
            </div>

            {/* Right: What it actually solves */}
            <div className="lg:col-span-4 p-8 rounded-3xl bg-white border border-[#E8DFC9] shadow-sm space-y-6">
              <h2 className="text-2xl font-serif text-[#1A1A1A] font-bold">
                What it actually solves
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-serif font-bold text-neutral-900">
                      It makes asking easy
                    </h3>
                    <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                      In a Circle where everyone has already given, asking is simply the other half of a conversation that was always going to happen.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 border border-purple-200 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-serif font-bold text-neutral-900">
                      It removes the sellers
                    </h3>
                    <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                      Someone who arrives to extract cannot sustain Give-First for long. Within a quarter, the room filters them out naturally.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center shrink-0 mt-0.5">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-serif font-bold text-neutral-900">
                      It builds trust faster than time does
                    </h3>
                    <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                      The fastest way to trust someone is to watch them do something for another person that brings them nothing. That happens monthly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Row 2: How it works / Team Image / What it does not mean ─── */}
      <section className="py-16 md:py-24 border-b border-[#EADFC7]/60 bg-[#FAF7F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: How it works in practice */}
            <div className="lg:col-span-4 p-8 rounded-3xl bg-white border border-[#E5DAC0] shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <h2 className="text-2xl font-serif text-[#1A1A1A] font-bold">
                  How it works in practice
                </h2>
                <div className="space-y-3.5 text-xs text-neutral-600">
                  <div className="p-3 rounded-xl bg-[#FAF8F4] border border-[#EDE4D0]">
                    <strong className="block text-neutral-900 text-sm font-serif font-bold">
                      In the meeting
                    </strong>
                    The Gratitude &amp; Life Impact Round opens every Circle meeting with what people gave, before anyone asks for anything.
                  </div>
                  <div className="p-3 rounded-xl bg-[#FAF8F4] border border-[#EDE4D0]">
                    <strong className="block text-neutral-900 text-sm font-serif font-bold">
                      In the Give and the Ask
                    </strong>
                    Every Peer states what they can offer before stating what they need. The order is deliberate and non-negotiable.
                  </div>
                  <div className="p-3 rounded-xl bg-[#FAF8F4] border border-[#EDE4D0]">
                    <strong className="block text-neutral-900 text-sm font-serif font-bold">
                      In the app
                    </strong>
                    Contributions are logged in Unity and confirmed by the Peer who received them. What you gave becomes a verified record.
                  </div>
                  <div className="p-3 rounded-xl bg-[#FAF8F4] border border-[#EDE4D0]">
                    <strong className="block text-neutral-900 text-sm font-serif font-bold">
                      In your standing
                    </strong>
                    Life Impact Score, Peer Standing and Peers Coin all follow what you gave, never what you asked for.
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/circle-meeting-experience"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0D6EFD] text-white text-xs font-semibold hover:bg-blue-700 transition-all shadow-xs"
                >
                  See the Meeting Agenda <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Center: Team Collaboration Image */}
            <div className="lg:col-span-4 relative rounded-3xl overflow-hidden border border-[#DACBAF] shadow-md bg-neutral-900 min-h-[360px]">
              <Image
                src="/images/lexicon-team-understanding.jpg"
                alt="Entrepreneurs smiling in collaborative meeting"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute top-5 right-5 text-right font-serif italic text-white/95 text-sm sm:text-base drop-shadow-md">
                Real Entrepreneurs.<br />Real Support.<br />Real Progress.
              </div>
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="text-xs font-mono uppercase tracking-widest text-amber-200 font-semibold">
                  Radical Transparency
                </p>
                <p className="text-sm font-serif">
                  A room where you can be real without being judged.
                </p>
              </div>
            </div>

            {/* Right: What it does not mean (CRITICAL 4 RED X ITEMS) */}
            <div className="lg:col-span-4 p-8 rounded-3xl bg-white border border-[#E5DAC0] shadow-sm space-y-4">
              <h2 className="text-2xl font-serif text-[#1A1A1A] font-bold">
                What it does not mean
              </h2>
              <p className="text-xs text-neutral-500">
                Answering the three honest objections before you have to raise them.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-red-50/60 border border-red-100 flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div className="text-xs text-neutral-700 leading-relaxed">
                    <strong className="block text-red-950 font-bold mb-0.5">
                      It does not mean giving without limit.
                    </strong>
                    Peers run businesses. Nobody expects unlimited time or free work.
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-red-50/60 border border-red-100 flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div className="text-xs text-neutral-700 leading-relaxed">
                    <strong className="block text-red-950 font-bold mb-0.5">
                      It does not mean never asking.
                    </strong>
                    Asking is how a community functions. Give-First governs the order, not the entitlement.
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-red-50/60 border border-red-100 flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div className="text-xs text-neutral-700 leading-relaxed">
                    <strong className="block text-red-950 font-bold mb-0.5">
                      It does not mean keeping score.
                    </strong>
                    A Peer who gives while counting has misunderstood it. The record recognises contribution, not an invoice.
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-red-50/60 border border-red-100 flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div className="text-xs text-neutral-700 leading-relaxed">
                    <strong className="block text-red-950 font-bold mb-0.5">
                      It does not mean every month is equal.
                    </strong>
                    Some months you give more; some months you receive. Over a year it balances, and the room knows the difference.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Row 3: What it returns / Quote / Where it came from ─── */}
      <section className="py-16 md:py-24 border-b border-[#EADFC7]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: What it returns */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-[#E8DFC9] shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <h2 className="text-2xl font-serif text-[#1A1A1A] font-bold">
                  What it returns
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Not in the way most people expect. You will not get back what you gave, from the person you gave it to, on a timeline you can predict. That is not how it works.
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  What happens instead is that a room of entrepreneurs starts thinking about you.
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  When something crosses their desk that fits your business, you are who they think of. When someone asks them for a recommendation in your field, they give your name.
                </p>
                <p className="text-xs font-semibold text-[#8C6422] p-3.5 rounded-xl bg-[#FAF5EB] border border-[#EADBBD]">
                  That is the return, and it compounds. Peers arrive expecting a transaction and discover something slower and considerably larger.
                </p>
              </div>
            </div>

            {/* Center Quote */}
            <div className="lg:col-span-3 p-8 rounded-3xl bg-[#FAF5EB] border border-[#EADBBD] shadow-sm flex flex-col items-center justify-center text-center space-y-4">
              <Quote className="w-10 h-10 text-[#C29B38]/50" />
              <p className="text-xl sm:text-2xl font-serif italic text-[#2C241B] leading-snug">
                &ldquo;When you give first, you don&apos;t just build business. You build belonging.&rdquo;
              </p>
            </div>

            {/* Right: Where it came from (4-Line Belief) */}
            <div className="lg:col-span-4 p-8 rounded-3xl bg-white border border-[#E8DFC9] shadow-sm space-y-5">
              <h2 className="text-2xl font-serif text-[#1A1A1A] font-bold">
                Where it came from
              </h2>
              <div className="space-y-2 text-sm text-neutral-800">
                <div className="flex items-center gap-2 font-serif">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  Business grows through relationships.
                </div>
                <div className="flex items-center gap-2 font-serif">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  Relationships grow through trust.
                </div>
                <div className="flex items-center gap-2 font-serif">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  Trust grows through contribution.
                </div>
                <div className="flex items-center gap-2 font-serif font-bold text-neutral-900">
                  <span className="w-2 h-2 rounded-full bg-[#B88746]" />
                  And contribution creates the future none of us can build alone.
                </div>
              </div>

              <p className="text-xs text-neutral-600 leading-relaxed pt-2 border-t border-[#F0E6D2]">
                That is the belief this community is built on, and it began with one observation in a village where people carried each other through difficult seasons.
              </p>

              <div className="pt-2 text-xs">
                <strong className="block text-neutral-900 font-semibold">Dr. Pravin Parmar</strong>
                <span className="text-neutral-500 font-serif italic">Founder, Peers Global</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Dark Mountain Closing Banner ─── */}
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

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight">
            Be the entrepreneur who gives.
          </h2>
          <p className="text-xl sm:text-2xl font-serif italic text-amber-200/90 max-w-2xl mx-auto">
            Build Your Business. Build Your Relationships. Build Your Circle.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/unity"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#0D6EFD] text-white text-sm font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl uppercase tracking-wider"
            >
              Download Unity App
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/the-idea"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white text-sm font-semibold border border-white/20 hover:bg-white/15 transition-all uppercase tracking-wider"
            >
              Explore Our World
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
