'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  Scale,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Edit3,
  Smartphone,
  Sparkles,
  TrendingUp,
  Award,
  Users,
  AlertCircle,
} from 'lucide-react'

const VALUE_POINTS = [
  { name: 'Business Referral', points: '100 points', color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
  { name: 'Mentorship', points: '150 points', color: 'text-blue-600 bg-blue-50 border-blue-200' },
  { name: 'Joint Venture', points: '150 points', color: 'text-purple-600 bg-purple-50 border-purple-200' },
  { name: 'Knowledge Sharing', points: '50 points', color: 'text-amber-600 bg-amber-50 border-amber-200' },
  { name: 'Problem Solving', points: '75 points', color: 'text-sky-600 bg-sky-50 border-sky-200' },
  { name: 'Vendor Connect', points: '75 points', color: 'text-teal-600 bg-teal-50 border-teal-200' },
  { name: 'Funding Access', points: '150 points', color: 'text-rose-600 bg-rose-50 border-rose-200' },
  { name: 'Visibility & PR', points: '100 points', color: 'text-indigo-600 bg-indigo-50 border-indigo-200' },
  { name: 'Emotional Support', points: '50 points', color: 'text-pink-600 bg-pink-50 border-pink-200' },
  { name: 'Execution Support', points: '100 points', color: 'text-orange-600 bg-orange-50 border-orange-200' },
]

export function ImpactConfirmationClient() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] font-sans selection:bg-[#E8DDD0] selection:text-[#1A1A1A]">
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-[#EADFC7]/50 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-neutral-500 font-medium">
          <Link href="/" className="hover:text-neutral-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span>The Currency</span>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span className="text-neutral-900 font-semibold">How Impact Is Confirmed</span>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-[#EADFC7]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#0D1F47] tracking-tight leading-[1.08]">
                How Peers Confirm Impact
              </h1>
              <p className="text-xl sm:text-2xl font-serif text-[#5B4834] italic leading-relaxed">
                You cannot award yourself impact.
              </p>
              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                Every contribution is confirmed by the entrepreneur who received it.
              </p>

              <div className="pt-2">
                <Link
                  href="/unity"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0062D2] hover:bg-[#1a42c0] text-white text-sm font-bold shadow-[0_4px_14px_rgba(0,98,210,0.25)] hover:shadow-[0_6px_18px_rgba(0,98,210,0.35)] transition-all active:scale-95"
                >
                  <span>Download Unity App</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Scale of Balance Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-[#D8C7A5] shadow-2xl bg-[#E8DDD0]">
                <Image
                  src="/images/lexicon-open-book.jpg"
                  alt="Balanced scales of justice on polished desk"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 text-right font-serif italic text-white/95 text-base sm:text-lg drop-shadow-md">
                  Values That Matter.
                </div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] uppercase tracking-widest font-mono text-amber-200 border border-white/30">
                    Bilateral Integrity Engine
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── The Rule That Makes The Record Real ─── */}
      <section className="py-16 md:py-24 border-b border-[#EADFC7]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A7356] font-bold">
            <span className="w-6 h-[1.5px] bg-[#B88746]" />
            Integrity First
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A]">
            The rule that makes the record real
          </h2>
          <div className="prose prose-lg text-[#3D352E] leading-relaxed font-normal space-y-5">
            <p className="text-lg sm:text-xl font-serif text-[#2B231B]">
              Anyone can claim they helped someone. Here, the person you helped has to agree.
            </p>
            <p>
              When a contribution is logged in the Unity App, the receiving Peer is notified and confirms it. Until they do, it counts for nothing.
            </p>
            <p className="text-xl font-serif font-bold text-[#1A1A1A]">
              That single step is the difference between a record and a claim.
            </p>
          </div>
        </div>
      </section>

      {/* ─── How It Works: 4-Step Flow ─── */}
      <section className="py-16 md:py-24 border-b border-[#EADFC7]/60 bg-[#FAF7F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A]">
              How it works
            </h2>
            <p className="text-sm text-neutral-600">
              The four-stage bilateral verification loop inside the Unity App.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'A contribution is logged',
                desc: 'By either Peer in the Unity App, stating the Way of Collaboration and specific details.',
              },
              {
                step: '2',
                title: 'Receiving Peer notified',
                desc: 'Prompt notification sent to the receiving Peer showing who logged it and what was recorded.',
              },
              {
                step: '3',
                title: 'Confirm, decline or amend',
                desc: 'The receiving Peer reviews honestly. They can accept, modify details, or decline with one tap.',
              },
              {
                step: '4',
                title: 'On confirmation, it counts',
                desc: 'Instantly credited toward your Life Impact Score, Peer Standing level and Peers Coin wallet.',
              },
            ].map((st) => (
              <div
                key={st.step}
                className="p-6 rounded-3xl bg-white border border-[#E5DAC0] shadow-sm space-y-3"
              >
                <span className="w-8 h-8 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                  {st.step}
                </span>
                <h3 className="font-serif font-bold text-lg text-neutral-900 leading-snug">
                  {st.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why It Holds & What This Makes Possible ─── */}
      <section className="py-16 md:py-24 border-b border-[#EADFC7]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Why it holds */}
            <div className="p-8 rounded-3xl bg-white border border-[#E8DFC9] shadow-sm space-y-6">
              <h2 className="text-2xl font-serif text-[#1A1A1A] font-bold">
                Why it holds
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-neutral-600">
                <div className="p-4 rounded-2xl bg-[#FAF8F4] border border-[#EDE4D0]">
                  <strong className="block text-neutral-900 font-bold mb-1">
                    Both people are in the same room
                  </strong>
                  A Peer who inflates a contribution is asking someone they will see next month to endorse something untrue. Almost nobody does that.
                </div>
                <div className="p-4 rounded-2xl bg-[#FAF8F4] border border-[#EDE4D0]">
                  <strong className="block text-neutral-900 font-bold mb-1">
                    Declining is normal
                  </strong>
                  Sometimes an introduction did not lead anywhere. Amending or declining carries zero penalty and zero awkwardness.
                </div>
                <div className="p-4 rounded-2xl bg-[#FAF8F4] border border-[#EDE4D0]">
                  <strong className="block text-neutral-900 font-bold mb-1">
                    Directors can see the pattern
                  </strong>
                  A Peer whose contributions are frequently declined has a private conversation with their Circle Director.
                </div>
              </div>
            </div>

            {/* What this makes possible */}
            <div className="p-8 rounded-3xl bg-white border border-[#E8DFC9] shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <h2 className="text-2xl font-serif text-[#1A1A1A] font-bold">
                  What this makes possible
                </h2>
                <div className="space-y-3.5 text-xs sm:text-sm text-neutral-600">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-neutral-900 font-bold">Verified Recognition</strong>
                      Every award and standing named at the Summit is backed by confirmations from real people.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-neutral-900 font-bold">Honest Reporting</strong>
                      When Peers Global publishes lives impacted, that number is built from confirmed data rather than estimates.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-neutral-900 font-bold">Trust in the Room</strong>
                      Nobody wonders whether the Peer beside them is inflating their record.
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF5EB] border border-[#EADBBD] text-xs font-serif italic text-[#8C6422] text-center">
                &ldquo;Impact is not measured by intention, but by what it creates for others.&rdquo;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Standard Impact Values Breakdown ─── */}
      <section className="py-16 md:py-24 border-b border-[#EADFC7]/60 bg-[#FAF7F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1A1A1A]">
              Standard Impact Values
            </h2>
            <p className="text-sm text-neutral-600">
              The standard impact score credited upon bilateral confirmation.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {VALUE_POINTS.map((vp) => (
              <div
                key={vp.name}
                className="p-5 rounded-2xl bg-white border border-[#E5DAC0] shadow-xs text-center space-y-2"
              >
                <div className="text-xs font-serif font-bold text-neutral-800">
                  {vp.name}
                </div>
                <div className={`px-2.5 py-1 rounded-full text-xs font-mono font-bold border inline-block ${vp.color}`}>
                  {vp.points}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Closing Banner — Royal Blue Theme (Preserving Exact Structure) ─── */}
      <section className="relative bg-[#0062D2] text-white py-20 md:py-28 overflow-hidden">
        {/* Subtle Geometric Orbital Line Art */}
        <div className="absolute -right-16 -top-20 bottom-0 pointer-events-none w-[420px] sm:w-[560px] lg:w-[680px] opacity-35 overflow-hidden flex items-center justify-center">
          <svg
            viewBox="0 0 600 600"
            fill="none"
            className="w-full h-full text-white/30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 50 450 A 420 420 0 0 1 550 50" stroke="currentColor" strokeWidth="1.2" />
            <path d="M 120 520 A 500 500 0 0 1 600 120" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
            <path d="M 220 580 A 460 460 0 0 1 580 220" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            <line x1="280" y1="220" x2="380" y2="120" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
            <circle cx="280" cy="220" r="4.5" fill="#7DD3FC" />
            <circle cx="280" cy="220" r="10" stroke="#7DD3FC" strokeWidth="1" opacity="0.4" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Build Your Business. Build Your Relationships. Build Your Circle.
          </h2>
          <div className="pt-2">
            <Link
              href="/unity"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white hover:bg-blue-50 text-[#0062D2] text-xs sm:text-sm font-bold shadow-lg transition-all uppercase tracking-wider hover:scale-105 active:scale-95"
            >
              <span>Download Unity App</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
