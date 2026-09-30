'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  Smartphone,
  Check,
  ShieldCheck,
  UserCheck,
  Calendar,
  Clock,
  Sparkles,
  Lock,
  Layers,
  Heart,
  Users2,
  HelpCircle,
  Plus,
  Minus,
  CheckCircle2,
  FileText,
  ExternalLink,
  Download,
} from 'lucide-react'

// ─── Six Steps: How to Join ───────────────────────────────────────────────
const HOW_TO_JOIN_STEPS = [
  {
    num: '01',
    title: 'DOWNLOAD UNITY',
    desc: 'Download the Unity App and create your profile. This is where your journey into the PEERS GLOBAL community begins.',
  },
  {
    num: '02',
    title: 'TELL US ABOUT YOURSELF',
    desc: 'Introduce yourself, your business and what you are building. You are not being reduced to a form—we are simply beginning to understand where you may fit within the community.',
  },
  {
    num: '03',
    title: 'EXPLORE YOUR PLACE',
    desc: 'Explore PEERS GLOBAL and the Circle structure. Understand the difference between the wider community and your Circle (your Inner Board).',
  },
  {
    num: '04',
    title: 'BEGIN THE MEMBERSHIP PROCESS',
    desc: 'Complete the membership process through the Unity App. Your membership is individual; the platform subscription and Circle fee are separate.',
  },
  {
    num: '05',
    title: 'FIND YOUR CIRCLE',
    desc: 'Once your PEERS GLOBAL membership is in place, your Circle journey begins separately with your primary Industry Circle.',
  },
  {
    num: '06',
    title: 'BECOME A PEER',
    desc: 'Membership gives you entry. Participation creates familiarity. Contribution creates relationships—becoming your Inner Board.',
  },
]

// ─── Before You Subscribe Checklist ───────────────────────────────────────
const BEFORE_YOU_SUBSCRIBE = [
  {
    title: 'Membership is individual',
    desc: 'PEERS GLOBAL membership belongs to the individual entrepreneur, not to a company. Two partners from the same business may join individually.',
  },
  {
    title: 'There are two separate fees',
    desc: 'There is a PEERS GLOBAL platform subscription (₹18,000) and a Circle fee (separate, depending on the specific Circle).',
  },
  {
    title: 'There is no joining fee',
    desc: 'There is no additional joining fee beyond the transparent annual subscriptions.',
  },
  {
    title: 'Membership is non-refundable',
    desc: 'Subscriptions are non-refundable. Please review the applicable membership terms before subscribing.',
  },
  {
    title: 'GST is extra',
    desc: 'GST is extra wherever applicable in accordance with prevailing laws.',
  },
  {
    title: 'Time matters too',
    desc: 'Expect approximately 5–10 hours per month for meaningful participation across Circle meetings, conversations and contribution.',
  },
]

export function ApplyPageClient() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0F172A] selection:bg-[#0062D2] selection:text-white font-sans antialiased">

      {/* ─── Breadcrumb ────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-slate-100 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <Link href="/" className="hover:text-[#0062D2] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/membership" className="hover:text-[#0062D2] transition-colors">
              Membership
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">Join Peers Global</span>
          </nav>
        </div>
      </div>

      {/* =========================================================================
          SECTION 1: HERO — JOIN PEERS GLOBAL (EVERYTHING BEGINS IN UNITY)
          ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAFCFF] via-[#FFFFFF] to-[#F8FAFC] border-b border-slate-200/80 pt-10 sm:pt-14 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] brand-gradient-text">
                  JOIN PEERS GLOBAL
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[3.35rem] font-serif font-bold text-[#0B192C] tracking-tight leading-[1.12]">
                <span className="brand-gradient-text">Everything begins in the Unity App.</span>
              </h1>

              <div className="space-y-3 text-[15px] sm:text-base text-slate-600 leading-relaxed">
                <p>
                  You have read the story. You have explored the Circles. You have understood the investment, the process and what membership asks of you.
                </p>
                <p className="font-semibold text-slate-900 text-lg">
                  Now there is only one simple question: <span className="text-[#0062D2]">Would you like to experience the community for yourself?</span>
                </p>
                <p>
                  Joining PEERS GLOBAL begins with the Unity App. Not with a long form. Not with a sales call. Not with pressure. Begin with the community.
                </p>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-xs sm:text-sm font-bold hover:shadow-lg transition-all shadow-md uppercase tracking-wider"
                >
                  <Smartphone className="size-4" />
                  <span>Download on App Store</span>
                </a>

                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white border border-slate-300 hover:border-slate-400 text-slate-800 text-xs sm:text-sm font-bold hover:bg-slate-50 transition-all shadow-2xs uppercase tracking-wider"
                >
                  <Smartphone className="size-4 text-[#0062D2]" />
                  <span>Get it on Google Play</span>
                </a>
              </div>
            </div>

            {/* Right Card: The Core Truth */}
            <div className="lg:col-span-5">
              <div className="relative p-8 sm:p-10 rounded-3xl bg-[#040F24] text-white shadow-2xl overflow-hidden space-y-6">
                <div className="absolute top-0 right-0 size-64 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-5">
                  <span className="text-xs uppercase font-bold tracking-widest text-sky-300">
                    AN INVITATION
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                    Your First Step Is Simple
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    You do not need to know your entire journey. You only need to take the first step: Download Unity, explore, understand, meet the community, and then decide.
                  </p>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-200">
                    PEERS GLOBAL is not asking you to believe in a promise. It is inviting you to experience a community.
                  </div>

                  <div className="pt-2 border-t border-white/10 text-center">
                    <p className="font-serif italic text-sm sm:text-base text-amber-300">
                      &ldquo;Your next relationship may begin with one simple download.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: HOW TO JOIN (SIX STEPS)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-left max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                HOW TO JOIN
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-slate-900">
              <span className="brand-gradient-text">Six steps. One simple beginning.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOW_TO_JOIN_STEPS.map((step) => (
              <div
                key={step.num}
                className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-[#0062D2]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="size-9 rounded-full bg-[#EFF6FF] text-[#0062D2] font-bold text-xs flex items-center justify-center">
                      {step.num}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      STEP {step.num}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: WHAT YOU GET ON DAY ONE
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-14 rounded-3xl bg-[#040F24] text-white relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 size-96 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-4xl space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-blue-400 to-rose-400 rounded-full" />
                <span className="text-xs font-bold tracking-[0.22em] uppercase text-sky-300">
                  IMMEDIATE ONBOARDING
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-tight">
                What You Get on Day One
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Becoming a Peer is not simply the moment a subscription is activated. It is the beginning of your relationship with the community.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <h4 className="text-sm font-bold text-sky-300 uppercase tracking-wider">Learning</h4>
                  <p className="text-xs text-slate-300">Access masterclasses, real founder playbooks, and peer discussions.</p>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <h4 className="text-sm font-bold text-sky-300 uppercase tracking-wider">Sharing</h4>
                  <p className="text-xs text-slate-300">Offer your expertise, contribute insights, and support other entrepreneurs.</p>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <h4 className="text-sm font-bold text-sky-300 uppercase tracking-wider">Relationships</h4>
                  <p className="text-xs text-slate-300">Connect with founders across industries, cities, and countries in Unity.</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 pt-2 italic">
                The meeting may come later. <strong className="text-white">The relationship begins now.</strong>
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: BEFORE YOU SUBSCRIBE (TRANSPARENCY)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-left max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                TRANSPARENCY IS RESPECT
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-slate-900">
              <span className="brand-gradient-text">Before You Subscribe</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We believe transparency is part of respect. So there are a few things you should know clearly before you make your decision:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BEFORE_YOU_SUBSCRIBE.map((item, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs space-y-2.5"
              >
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                  <Check className="size-4" />
                  <span>{item.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: WHAT HAPPENS AFTER YOU JOIN & NOT READY YET?
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            
            {/* Left: What happens after you join? */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    GROWTH AT YOUR PACE
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                  What Happens After You Join?
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  You do not have to become everything on your first day:
                </p>

                <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <div className="p-3 rounded-xl bg-white border border-slate-200">• Start by meeting people.</div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200">• Listen and learn.</div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200">• Share what you know.</div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200">• Ask when you need help, and offer help when you can.</div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200">• Discover your Circle and become part of something larger.</div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 text-xs sm:text-sm font-semibold text-[#0062D2] italic">
                &ldquo;You arrive as an entrepreneur. You grow as a Peer.&rdquo;
              </div>
            </div>

            {/* Right: Not Ready Yet? & Still Have Questions? */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#040F24] text-white shadow-xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-blue-400 to-rose-400 rounded-full" />
                  <span className="text-xs font-bold tracking-[0.22em] uppercase text-sky-300">
                    NO ARTIFICIAL URGENCY
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
                  Not Ready Yet?
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  You do not have to join today. Perhaps you want to understand the community better, explore the Circles first, or the timing is simply not right. That is okay.
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  There is no value in joining a community before you are ready to participate in it.
                </p>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-sky-300">Still Have Questions?</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Review the <Link href="/membership/faq" className="text-sky-300 underline font-semibold">Member FAQ</Link> for detailed answers on payment, Circles, time commitment, and leadership.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <Link
                  href="/membership/faq"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all"
                >
                  <span>Read Member FAQ</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: CLOSING MANIFESTO & APP DOWNLOADS
          ========================================================================= */}
      <section className="relative isolate overflow-hidden bg-[#040F24] py-16 sm:py-20 lg:py-24 text-white border-t border-slate-800">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(0,98,210,0.25),transparent_42%),radial-gradient(circle_at_82%_12%,rgba(56,189,248,0.18),transparent_36%),linear-gradient(115deg,#020817_0%,#071a3d_48%,#06132d_100%)]"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 flex flex-col items-start space-y-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  BEGIN WITH UNITY
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-normal leading-[1.18] tracking-tight text-white">
                <span className="brand-gradient-text">Your next relationship may begin with one simple download.</span>
              </h2>

              <p className="text-base sm:text-lg font-medium text-slate-200 max-w-2xl">
                Download the Unity App to explore the ecosystem, meet the people, and start building your Inner Board.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-white shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] uppercase cursor-pointer"
                >
                  <Smartphone className="size-4" />
                  <span>Download on App Store</span>
                </a>

                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/50 px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-white backdrop-blur-xs transition-all duration-200 hover:bg-white/10 hover:border-white active:scale-[0.98] uppercase cursor-pointer"
                >
                  <Smartphone className="size-4" />
                  <span>Get it on Google Play</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 text-right flex justify-end">
              <div
                className="text-white/95 text-3xl sm:text-5xl font-normal leading-tight select-none pointer-events-none drop-shadow-sm"
                style={{ fontFamily: 'var(--font-script, Georgia, serif)' }}
              >
                Experience <br />
                The <br />
                <span className="text-[#7DD3FC]">Community</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
