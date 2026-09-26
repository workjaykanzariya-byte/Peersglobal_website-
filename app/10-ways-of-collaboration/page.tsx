'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Users,
  Users2,
  GraduationCap,
  HeartHandshake,
  Handshake,
  BookOpen,
  Lightbulb,
  Settings,
  Coins,
  Megaphone,
  Heart,
  Rocket,
  ArrowRight,
  CheckCircle2,
  Quote,
  X,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Play,
  Plus,
  Star,
  BarChart3,
} from 'lucide-react'

interface CollaborationWay {
  number: string
  name: string
  shortTag: string
  tagline: string
  icon: React.ComponentType<{ className?: string }>
  cardGradient: string
  cardBorder: string
  numberColor: string
  iconBg: string
  iconColor: string
  buttonBg: string
  buttonColor: string
  learnMoreColor: string
  color: string
  bgColor: string
  borderAccent: string
  description: string
  example: string
  whatMakesItReal: string
}

const COLLABORATION_WAYS: CollaborationWay[] = [
  {
    number: '01',
    name: 'Business Referral',
    shortTag: 'Referral',
    tagline: 'Warm introductions that build trust and business.',
    icon: Users,
    cardGradient: 'bg-gradient-to-b from-[#EFF6FF] via-[#F6FAFF] to-[#E5F0FF]',
    cardBorder: 'border-[#D6E6F8]',
    numberColor: 'text-[#93C2F5]/80',
    iconBg: 'bg-[#DCEBFA]',
    iconColor: 'text-[#0062D2]',
    buttonBg: 'bg-[#DCEBFA] group-hover:bg-[#0062D2]',
    buttonColor: 'text-[#0062D2] group-hover:text-white',
    learnMoreColor: 'text-[#0062D2]',
    color: 'text-[#0062D2]',
    bgColor: 'bg-blue-50',
    borderAccent: 'border-blue-200',
    description:
      'A referral is not a name and a phone number. It is a recommendation from someone whose word already carries weight. When you refer a Peer to your own client, supplier or contact, you are transferring something you spent years earning. That is why referrals inside a Circle convert at rates cold outreach never approaches.',
    example:
      'Your client mentions a requirement outside your scope. You know a Peer who does exactly that work, and you know they will not embarrass you. You make the connection, and it becomes a long-term client relationship.',
    whatMakesItReal:
      'You only refer a Peer you would genuinely recommend. Every referral carries your name on it.',
  },
  {
    number: '02',
    name: 'Mentorship',
    shortTag: 'Mentorship',
    tagline: 'Guide a peer with your experience.',
    icon: GraduationCap,
    cardGradient: 'bg-gradient-to-b from-[#F6F2FE] via-[#FAF7FF] to-[#EDE7FD]',
    cardBorder: 'border-[#E4D7FA]',
    numberColor: 'text-[#C4AEF5]/80',
    iconBg: 'bg-[#E9E0FA]',
    iconColor: 'text-[#7C3AED]',
    buttonBg: 'bg-[#E9E0FA] group-hover:bg-[#7C3AED]',
    buttonColor: 'text-[#7C3AED] group-hover:text-white',
    learnMoreColor: 'text-[#7C3AED]',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    borderAccent: 'border-indigo-200',
    description:
      'Mentorship is experience given over time. Not one conversation, but a sustained relationship where you commit to another entrepreneur’s growth. It is the deepest form of collaboration in this community, and the one that changes lives most permanently.',
    example:
      'A younger Peer is building in a sector you have operated in for twenty years. You meet regularly. You help them think through decisions before they make them. Over three years, they build something they could not have built alone.',
    whatMakesItReal:
      'Consistency. A mentor who meets someone once is a speaker. A mentor who meets them for two years is a mentor.',
  },
  {
    number: '03',
    name: 'Joint Venture',
    shortTag: 'Joint Venture',
    tagline: 'Build together. Grow together.',
    icon: Handshake,
    cardGradient: 'bg-gradient-to-b from-[#EDFBF5] via-[#F6FCF9] to-[#E0F7EB]',
    cardBorder: 'border-[#C9EFE0]',
    numberColor: 'text-[#95E0C2]/80',
    iconBg: 'bg-[#D2F5E5]',
    iconColor: 'text-[#10B981]',
    buttonBg: 'bg-[#D2F5E5] group-hover:bg-[#10B981]',
    buttonColor: 'text-[#10B981] group-hover:text-white',
    learnMoreColor: 'text-[#10B981]',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    borderAccent: 'border-emerald-200',
    description:
      'Sometimes collaboration goes beyond helping. Two Peers combine capabilities and create something new — a joint offering, a shared venture, a combined bid, a business that needed both of them to exist.',
    example:
      'One Peer has manufacturing capacity. Another has distribution across three states. Neither could serve a large contract alone. Together they win it, and both businesses change size.',
    whatMakesItReal:
      'Joint ventures only form on trust that has already been tested. This is why they emerge from Circles rather than from conferences.',
  },
  {
    number: '04',
    name: 'Knowledge Sharing',
    shortTag: 'Knowledge',
    tagline: 'Save time through shared learning.',
    icon: BookOpen,
    cardGradient: 'bg-gradient-to-b from-[#FEF9EE] via-[#FFFDF8] to-[#FDF1DA]',
    cardBorder: 'border-[#FCE4BA]',
    numberColor: 'text-[#F5C77A]/80',
    iconBg: 'bg-[#FCEECC]',
    iconColor: 'text-[#D97706]',
    buttonBg: 'bg-[#FCEECC] group-hover:bg-[#D97706]',
    buttonColor: 'text-[#D97706] group-hover:text-white',
    learnMoreColor: 'text-[#D97706]',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50',
    borderAccent: 'border-cyan-200',
    description:
      'Every entrepreneur is carrying expensive lessons. Mistakes that cost money. Decisions that cost time. Systems that took three attempts to get right. Shared in a single conversation, those lessons can save another entrepreneur eighteen months.',
    example:
      'A Peer is about to enter a market you exited two years ago. In forty minutes you explain what you learned — the pricing trap, the payment cycle, the partner who does not deliver. They avoid all of it.',
    whatMakesItReal:
      'Knowledge given freely, without turning it into a consulting engagement. The most common form of collaboration in a Circle, and one of the most valuable.',
  },
  {
    number: '05',
    name: 'Problem Solving',
    shortTag: 'Problem Solving',
    tagline: 'Be the thinking partner every entrepreneur needs.',
    icon: Lightbulb,
    cardGradient: 'bg-gradient-to-b from-[#FEF1F5] via-[#FFF8F9] to-[#FDE4EB]',
    cardBorder: 'border-[#FBC9D5]',
    numberColor: 'text-[#F99EB3]/80',
    iconBg: 'bg-[#FCDCE4]',
    iconColor: 'text-[#E11D48]',
    buttonBg: 'bg-[#FCDCE4] group-hover:bg-[#E11D48]',
    buttonColor: 'text-[#E11D48] group-hover:text-white',
    learnMoreColor: 'text-[#E11D48]',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    borderAccent: 'border-amber-200',
    description:
      'Every entrepreneur reaches decisions they cannot think through alone. A pricing call. A partner who has become a problem. Whether to expand or consolidate. Whether to let someone go. These are not questions that need an expert. They need someone who understands the weight of the decision and will think it through with you honestly.',
    example:
      'A Peer brings a difficult decision to the Circle. Four entrepreneurs who have faced something similar ask the right questions, challenge the assumptions, and help them see what they were too close to see.',
    whatMakesItReal:
      'You give attention and honesty, not advice. A thinking partner helps someone reach their own answer rather than handing them yours.',
  },
  {
    number: '06',
    name: 'Vendor Connect',
    shortTag: 'Vendor Connect',
    tagline: 'Solve needs with the right resources.',
    icon: Settings,
    cardGradient: 'bg-gradient-to-b from-[#EBF9F6] via-[#F5FCFA] to-[#DCF5EF]',
    cardBorder: 'border-[#BEECE1]',
    numberColor: 'text-[#93DCCB]/80',
    iconBg: 'bg-[#D0F3EB]',
    iconColor: 'text-[#0D9488]',
    buttonBg: 'bg-[#D0F3EB] group-hover:bg-[#0D9488]',
    buttonColor: 'text-[#0D9488] group-hover:text-white',
    learnMoreColor: 'text-[#0D9488]',
    color: 'text-teal-600',
    bgColor: 'bg-teal-50',
    borderAccent: 'border-teal-200',
    description:
      'Finding a reliable vendor is one of the quiet costs of running a business. The wrong supplier costs money, time and sometimes a client. Inside a Circle, a Peer can access vendors who have already been tested by someone they trust.',
    example:
      'A Peer needs a packaging supplier, a logistics partner, a CA, a developer or a factory. You have worked with the right one for six years. One introduction saves them months of searching and one bad experience.',
    whatMakesItReal:
      'You recommend only what you have used yourself. A vendor introduction carries your judgement with it.',
  },
  {
    number: '07',
    name: 'Funding Support',
    shortTag: 'Funding',
    tagline: 'Open doors to capital and investors.',
    icon: Coins,
    cardGradient: 'bg-gradient-to-b from-[#F2F2FD] via-[#F8F8FE] to-[#E7E7FB]',
    cardBorder: 'border-[#D6D6F7]',
    numberColor: 'text-[#B2B2F2]/80',
    iconBg: 'bg-[#E2E2FA]',
    iconColor: 'text-[#6366F1]',
    buttonBg: 'bg-[#E2E2FA] group-hover:bg-[#6366F1]',
    buttonColor: 'text-[#6366F1] group-hover:text-white',
    learnMoreColor: 'text-[#6366F1]',
    color: 'text-violet-600',
    bgColor: 'bg-violet-50',
    borderAccent: 'border-violet-200',
    description:
      'Capital is a relationship business. The right introduction at the right stage matters more than any deck. Peers connect one another to investors, lenders, funding partners and financial institutions who fund the kind of business they are building.',
    example:
      'A Peer is raising for the first time and does not know where to start. You have raised twice. You introduce them to two investors who genuinely fund businesses at their stage, and you tell them honestly what to expect.',
    whatMakesItReal:
      'Introducing someone to capital carries responsibility on both sides. You do it for Peers whose business you truly believe in.',
  },
  {
    number: '08',
    name: 'Business Visibility',
    shortTag: 'Visibility',
    tagline: 'Help each other get seen.',
    icon: Megaphone,
    cardGradient: 'bg-gradient-to-b from-[#FEF2F2] via-[#FFF8F8] to-[#FDE7E7]',
    cardBorder: 'border-[#FBD1D1]',
    numberColor: 'text-[#F7A6A6]/80',
    iconBg: 'bg-[#FCE1E1]',
    iconColor: 'text-[#EF4444]',
    buttonBg: 'bg-[#FCE1E1] group-hover:bg-[#EF4444]',
    buttonColor: 'text-[#EF4444] group-hover:text-white',
    learnMoreColor: 'text-[#EF4444]',
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
    borderAccent: 'border-rose-200',
    description:
      'Good businesses often remain invisible. Not because they lack substance, but because nobody tells their story. Peers help each other become visible — through media, platforms, stages, publications and their own networks.',
    example:
      'A Peer has built something remarkable that nobody outside their city knows about. You feature them, invite them to speak, share their story, or introduce them to the right platform. Their credibility changes, and so does their pipeline.',
    whatMakesItReal:
      'Every honest business story deserves respect and visibility. Giving a Peer a platform costs you nothing and can change everything for them.',
  },
  {
    number: '09',
    name: 'Emotional Support',
    shortTag: 'Emotional Support',
    tagline: 'Be there through the highs and lows.',
    icon: Heart,
    cardGradient: 'bg-gradient-to-b from-[#EFF7FF] via-[#F6FAFF] to-[#E3F0FE]',
    cardBorder: 'border-[#CEE4FC]',
    numberColor: 'text-[#97C6F8]/80',
    iconBg: 'bg-[#D8ECFD]',
    iconColor: 'text-[#0284C7]',
    buttonBg: 'bg-[#D8ECFD] group-hover:bg-[#0284C7]',
    buttonColor: 'text-[#0284C7] group-hover:text-white',
    learnMoreColor: 'text-[#0284C7]',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderAccent: 'border-red-200',
    description:
      'This is the one nobody expects on a list about business collaboration. It is also the reason Peers Global exists. Entrepreneurs carry things they cannot share with their team, their family or their friends. A month where payroll is uncertain. A partner who walked away. A failure they are still paying for. A decision made at eleven at night with nobody to call. A Peer is someone you can call.',
    example:
      'A Peer is going through the hardest phase of their business. You do not solve it. You show up. You listen without judgement. You remind them that this phase ends, because you have been through your own.',
    whatMakesItReal:
      'No agenda, no advice unless asked, and complete confidentiality. Entrepreneurs do not fail only because of business problems. They fail because they fight alone. Peers are Partners in Business and Friends in Life.',
  },
  {
    number: '10',
    name: 'Execution Support',
    shortTag: 'Execution',
    tagline: 'Lend a hand to make it happen.',
    icon: Rocket,
    cardGradient: 'bg-gradient-to-b from-[#FEF8ED] via-[#FFFBF4] to-[#FDF0DB]',
    cardBorder: 'border-[#FCE0B3]',
    numberColor: 'text-[#F8C574]/80',
    iconBg: 'bg-[#FCE8C4]',
    iconColor: 'text-[#D97706]',
    buttonBg: 'bg-[#FCE8C4] group-hover:bg-[#D97706]',
    buttonColor: 'text-[#D97706] group-hover:text-white',
    learnMoreColor: 'text-[#D97706]',
    color: 'text-sky-600',
    bgColor: 'bg-sky-50',
    borderAccent: 'border-sky-200',
    description:
      'Ideas are common. Execution is where businesses are actually built, and where most entrepreneurs get stuck. Sometimes a Peer does not need advice or an introduction. They need hands, capacity, a template, a process, a team member for two weeks, or someone to hold them accountable until it is finished.',
    example:
      'A Peer is launching something and is short on capacity. You lend a team member for a fortnight, share the process document you built three years ago, or simply check in every Friday until it ships.',
    whatMakesItReal:
      'Execution support is practical and unglamorous. It is also the form of help entrepreneurs remember longest, because it is the one that actually moved something forward.',
  },
]

export default function TenWaysOfCollaborationPage() {
  const [selectedWay, setSelectedWay] = useState<CollaborationWay | null>(null)

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      
      {/* =====================================================================
          1. HERO SECTION (Panoramic Canvas with Exact Organic Fading & Blocks Alignment)
          ===================================================================== */}
      <section className="relative overflow-hidden bg-white pt-10 pb-4 border-b border-slate-100">
        
        {/* Full-height Right Side Image Canvas with Fluid Organic Leftward Curve & Soft Fade */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[56%] xl:w-[58%] overflow-hidden pointer-events-none select-none z-0">
          {/* Boardroom Collaboration Video Background */}
          <div className="relative size-full">
            <video
              src="/videos/homepage-hero-bg.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="size-full object-cover object-center scale-[1.03]"
            />
            {/* Top Atmospheric Gradient & Warm Tint */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent pointer-events-none" />
            
            {/* Soft left gradient fade into white */}
            <div className="absolute inset-y-0 left-0 w-48 sm:w-64 bg-gradient-to-r from-white via-white/80 via-35% to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white via-white/40 to-transparent pointer-events-none" />
          </div>

          {/* Organic Fluid Curved Mask dividing the left white canvas and the image */}
          <svg
            className="absolute inset-y-0 -left-1 w-36 sm:w-48 h-full text-white fill-current pointer-events-none hidden lg:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C85,25 25,75 100,100 L0,100 Z" />
          </svg>
        </div>

        <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Main Hero Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center min-h-[540px] lg:min-h-[580px]">
            
            {/* Left Column: Heading, Subtitle, CTAs & 3-Pill Feature Bar (lg:col-span-7) */}
            <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center pt-6 lg:pt-0">
              
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5 mb-4">
                <span className="h-[1.5px] w-6 bg-[#0062D2]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                  The Language
                </span>
              </div>

              {/* H1 with radiant blue gradient on "Collaboration" */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-semibold text-slate-950 tracking-tight leading-[1.12]">
                The 10 Ways of <br />
                <span className="bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">
                  Collaboration
                </span>
              </h1>

              {/* Subline */}
              <p className="text-base sm:text-lg text-slate-800 font-semibold mt-5 l  eading-relaxed max-w-xl">
                10 powerful forms of collaboration available inside every Peers Global Circle.
              </p>

              {/* Supporting Line */}
              <p className="text-sm sm:text-[15px] text-slate-500 font-light mt-2 max-w-lg leading-relaxed">
                A connection becomes valuable when it creates an opportunity, solves a problem or improves a life.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 mt-7">
                <Link
                  href="/circles"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0062D2] px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] transition-all"
                >
                  Find Your Circle
                  <ArrowRight className="size-4" />
                </Link>

                <Link
                  href="/membership"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 hover:border-slate-400 hover:bg-slate-50 hover:text-slate-900 transition-all"
                >
                  Become a Peer
                </Link>
              </div>

              {/* Bottom 3-Pill Feature Bar (People, Ideas, Together) */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-7 mt-6 border-t border-slate-100">
                {/* Pill 1: People */}
                <div className="flex items-center gap-2.5">
                  <div className="size-9 rounded-full bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 shadow-2xs">
                    <Users2 className="size-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 leading-tight">People</p>
                    <p className="text-[11px] text-slate-500 font-light leading-snug">Real Entrepreneurs</p>
                  </div>
                </div>

                <span className="hidden sm:block h-6 w-[1px] bg-slate-200" />

                {/* Pill 2: Ideas */}
                <div className="flex items-center gap-2.5">
                  <div className="size-9 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center shrink-0 shadow-2xs">
                    <Lightbulb className="size-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 leading-tight">Ideas</p>
                    <p className="text-[11px] text-slate-500 font-light leading-snug">Real Opportunities</p>
                  </div>
                </div>

                <span className="hidden sm:block h-6 w-[1px] bg-slate-200" />

                {/* Pill 3: Together */}
                <div className="flex items-center gap-2.5">
                  <div className="size-9 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 shadow-2xs">
                    <TrendingUp className="size-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 leading-tight">Together</p>
                    <p className="text-[11px] text-slate-500 font-light leading-snug">A Brighter Tomorrow</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Video Panorama & Bottom Highlights (lg:col-span-6) */}
            <div className="lg:col-span-6 xl:col-span-5 relative min-h-[460px] sm:min-h-[500px] flex flex-col justify-end py-6">
              
              {/* Top-Right Cursive Accent */}
              <div className="absolute top-2 right-2 sm:right-6 z-20 text-right select-none pointer-events-none">
                <p className="font-[family-name:var(--font-script)] text-xl sm:text-2xl text-slate-600/90 leading-tight drop-shadow-xs rotate-[-3deg]">
                  People <br />
                  Ideas <br />
                  Opportunities <br />
                  Together
                </p>
                <div className="w-16 h-[1.5px] bg-slate-400/60 ml-auto mt-1" />
              </div>


              {/* Bottom Right Highlights: Dark Card & Watch Our Story Pill */}
              <div className="relative z-20 flex flex-wrap items-center justify-between gap-3 mt-8 pt-4">
                
                {/* Dark Navy Card: Stronger Entrepreneurs */}
                <div className="rounded-2xl bg-[#081A3A]/95 backdrop-blur-md border border-white/15 p-3.5 sm:p-4 shadow-2xl flex items-center gap-3 max-w-[240px]">
                  <div className="size-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 shadow-2xs">
                    <Users2 className="size-4" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-[13px] font-bold text-white leading-tight">
                      Stronger Entrepreneurs.
                    </p>
                    <p className="text-[10px] text-slate-300 font-light mt-0.5 leading-snug">
                      A Brighter Tomorrow.
                    </p>
                  </div>
                </div>

                {/* Watch Our Story Pill Button */}
                <Link
                  href="/stories"
                  className="rounded-full bg-white/95 backdrop-blur-md border border-white/80 py-2 px-4 shadow-xl flex items-center gap-2.5 hover:bg-white hover:scale-105 transition-all cursor-pointer"
                >
                  <span className="size-8 rounded-full bg-blue-50 text-[#0062D2] flex items-center justify-center shadow-xs">
                    <Play className="size-3.5 fill-[#0062D2] ml-0.5" />
                  </span>
                  <div className="text-left">
                    <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-400 leading-none">
                      Watch
                    </span>
                    <span className="block text-xs font-bold text-slate-800 leading-none mt-0.5">
                      Our Story
                    </span>
                  </div>
                </Link>

              </div>

            </div>

          </div>

          {/* Hairline Bottom Banner Bar */}
          <div className="pt-6 pb-2 mt-4 border-t border-slate-100 flex items-center justify-between text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-widest">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-slate-300" />
              <span>Collaborate · Create · Grow</span>
            </div>
            <div className="flex items-center gap-3">
              <span>Peers Global</span>
              <span className="h-[1px] w-8 bg-slate-300" />
            </div>
          </div>

        </div>
      </section>

      {/* =====================================================================
          2. COLLABORATION IS A PRACTICE (Exact Match with Image Section 2)
          ===================================================================== */}
      <section className="py-16 sm:py-24 border-b border-slate-100 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Story Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-[1.5px] w-6 bg-[#0062D2]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                  Our Belief
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-950 tracking-tight leading-tight">
                Collaboration is a practice
              </h2>

              <div className="text-slate-600 font-light text-sm sm:text-base leading-relaxed space-y-4 mt-6">
                <p>
                  Most entrepreneurs want to help each other. Very few know exactly how. They meet, they exchange numbers, they say let me know if I can help — and then nothing happens. Not because anyone was insincere, but because help is too vague a word to act on.
                </p>
                <p className="font-bold text-slate-900">
                  So we defined it.
                </p>
                <p>
                  The 10 Ways of Collaboration are the specific forms giving takes inside Peers Global. Every Peer knows them. Every Circle meeting is built around them. Every contribution recorded in the Unity App falls into one of them.
                </p>
                <p>
                  When a Peer says I can help you, both people know exactly what that means.
                </p>
                <p className="font-semibold text-slate-900 border-l-2 border-[#0062D2] pl-3 py-0.5">
                  Ten ways. Every one of them available to every Peer, in every Circle, in every city.
                </p>
              </div>
            </div>

            {/* Right Lounge Meeting Visual */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50">
                <Image
                  src="/images/who-we-are-inner-board.jpg"
                  alt="Peers in Circle Meeting"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover"
                />
                
                {/* Floating Top-Left Tag */}
                <div className="absolute top-4 left-4 z-10 rounded-full bg-white/95 backdrop-blur-md px-3.5 py-1 shadow-sm border border-slate-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700">
                    Real People · Real Impact
                  </span>
                </div>

                {/* Floating Bottom-Right Card */}
                <div className="absolute bottom-4 right-4 z-10 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 p-3.5 shadow-2xl flex items-center gap-3 max-w-[230px]">
                  <div className="size-9 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0">
                    <HeartHandshake className="size-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-slate-900 leading-snug">
                      A community built on giving, not just taking.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================================
          3. THE 10 WAYS OVERVIEW - STRONGER TOGETHER (Exact Redesign from Mockup)
          ===================================================================== */}
      <section className="relative py-20 sm:py-24 bg-gradient-to-b from-[#F8FAFD] via-white to-[#F5F8FD] border-b border-slate-100 overflow-hidden">
        
        {/* Soft Background Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/35 via-transparent to-transparent pointer-events-none" />

        {/* Top-Left Dot Matrix */}
        <div className="absolute top-10 left-6 sm:left-10 pointer-events-none opacity-40 select-none">
          <svg width="96" height="64" viewBox="0 0 96 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <pattern id="dot-grid-tl" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="1.5" fill="#93C2F5" />
            </pattern>
            <rect width="96" height="64" fill="url(#dot-grid-tl)" />
          </svg>
        </div>

        {/* Bottom-Right Dot Matrix */}
        <div className="absolute bottom-10 right-6 sm:right-10 pointer-events-none opacity-40 select-none">
          <svg width="96" height="64" viewBox="0 0 96 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <pattern id="dot-grid-br" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="1.5" fill="#93C2F5" />
            </pattern>
            <rect width="96" height="64" fill="url(#dot-grid-br)" />
          </svg>
        </div>

        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top-Right Decorative Cursive Script Accent */}
          <div className="hidden lg:block absolute top-0 right-4 xl:right-10 pointer-events-none select-none text-right">
            <div className="inline-block transform -rotate-6">
              <div
                className="text-[26px] xl:text-[28px] text-[#869EBC] leading-[1.15] font-serif italic tracking-wide"
                style={{
                  fontFamily: 'Caveat, "Playfair Display", Georgia, cursive, serif',
                  textShadow: '0 1px 2px rgba(0,0,0,0.02)'
                }}
              >
                <div>People</div>
                <div>Ideas</div>
                <div>Opportunities</div>
                <div>Together</div>
              </div>
              {/* Swoop flourish curve */}
              <svg className="w-36 h-7 ml-auto -mt-1 text-[#869EBC]/80 overflow-visible" viewBox="0 0 140 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M125 5C85 22 35 22 8 16C2 15 1 20 7 21C42 27 100 22 135 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          {/* Centered Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
            {/* Eyebrow with horizontal line dashes */}
            <div className="inline-flex items-center justify-center gap-3 text-xs sm:text-[13px] font-bold tracking-[0.22em] uppercase mb-3">
              <span className="w-7 h-[1.5px] bg-[#0062D2]/80" />
              <span className="brand-gradient-text">10 WAYS TO COLLABORATE</span>
              <span className="w-7 h-[1.5px] bg-[#0062D2]/80" />
            </div>

            {/* Main Title: Stronger Together with curved blue swoosh */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[52px] font-bold text-[#0D1E3A] tracking-tight leading-[1.15] mb-4">
              Stronger{' '}
              <span className="relative inline-block brand-gradient-text">
                Together
                <svg
                  className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-full overflow-visible"
                  height="12"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8.5C55 2.5 145 2.5 197 8.5"
                    stroke="#0062D2"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-slate-600 text-sm sm:text-[15px] max-w-xl mx-auto leading-relaxed font-normal">
              Different needs. One community. Ten powerful ways to collaborate, grow and create impact with fellow entrepreneurs.
            </p>
          </div>

          {/* 10 Cards Grid (5 columns on desktop, responsive) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {COLLABORATION_WAYS.map((way) => {
              const Icon = way.icon
              return (
                <div
                  key={way.number}
                  onClick={() => setSelectedWay(way)}
                  className={`group relative text-left rounded-2xl ${way.cardGradient} border ${way.cardBorder} p-4.5 sm:p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer min-h-[250px]`}
                >
                  <div>
                    {/* Top row: Icon on left, Large Number on right */}
                    <div className="flex items-start justify-between">
                      <div className={`size-11 rounded-2xl ${way.iconBg} ${way.iconColor} flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-2xs border ${way.cardBorder}`}>
                        <Icon className="size-5" />
                      </div>
                      <span className={`text-3xl sm:text-[32px] font-sans font-bold leading-none select-none tracking-tight ${way.numberColor}`}>
                        {way.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-slate-900 text-sm sm:text-[15px] leading-snug mt-5 mb-1.5 group-hover:text-[#0062D2] transition-colors">
                      {way.name}
                    </h3>

                    {/* Tagline */}
                    <p className="text-[11px] sm:text-xs text-slate-500 font-normal leading-relaxed">
                      {way.tagline}
                    </p>
                  </div>

                  {/* Bottom: Learn more link + circular arrow button */}
                  <div className="mt-4 pt-2.5 flex items-center justify-between">
                    <span className={`text-[11px] sm:text-xs font-semibold ${way.learnMoreColor} group-hover:underline`}>
                      Learn more
                    </span>
                    <span className={`size-7 sm:size-8 rounded-full ${way.buttonBg} ${way.buttonColor} flex items-center justify-center transition-all duration-300 shadow-2xs group-hover:scale-110`}>
                      <ArrowRight className="size-3.5" />
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Floating Bottom Social Proof & CTA Pill Bar */}
          <div className="mt-12 sm:mt-14 max-w-4xl mx-auto rounded-3xl sm:rounded-full bg-white shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-slate-100/90 px-4 sm:px-6 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left: 4 Member Avatars + Plus Button */}
            <div className="flex items-center gap-2.5 shrink-0">
              <div className="flex items-center -space-x-2">
                <Image
                  src="/images/peers-avatars/amit-desai.jpg"
                  alt="Peers Global Member"
                  width={38}
                  height={38}
                  className="size-9 rounded-full object-cover border-2 border-white shadow-xs"
                />
                <Image
                  src="/images/peers-avatars/neha-kothari.jpg"
                  alt="Peers Global Member"
                  width={38}
                  height={38}
                  className="size-9 rounded-full object-cover border-2 border-white shadow-xs"
                />
                <Image
                  src="/images/peers-avatars/anand-sharma.jpg"
                  alt="Peers Global Member"
                  width={38}
                  height={38}
                  className="size-9 rounded-full object-cover border-2 border-white shadow-xs"
                />
                <Image
                  src="/images/peers-avatars/pradeep-joshi.jpg"
                  alt="Peers Global Member"
                  width={38}
                  height={38}
                  className="size-9 rounded-full object-cover border-2 border-white shadow-xs"
                />
              </div>
              <span className="size-8 rounded-full bg-blue-50 text-[#0062D2] flex items-center justify-center font-bold text-base border border-blue-100/80 shadow-2xs">
                +
              </span>
            </div>

            {/* Center: Divider + Quote */}
            <div className="flex items-center gap-4 text-center md:text-left px-2">
              <div className="hidden md:block h-8 w-[1px] bg-slate-200" />
              <div>
                <p className="font-serif italic text-sm sm:text-[15px] text-slate-800 leading-snug">
                  “Collaboration turns individual strengths into collective success.”
                </p>
                <span className="text-[10px] font-bold tracking-[0.22em] text-slate-400 uppercase mt-0.5 block">
                  — PEERS GLOBAL
                </span>
              </div>
            </div>

            {/* Right: Join the Movement Button */}
            <Link
              href="/the-movement"
              className="rounded-full bg-[#0062D2] hover:bg-[#0051B3] text-white px-6 py-2.5 text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-md shadow-blue-600/25 transition-all hover:scale-105 shrink-0"
            >
              <span>Join the Movement</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* =====================================================================
          4. CINEMATIC BANNER (Exact Match with Image Section 4)
          ===================================================================== */}
      <section className="relative overflow-hidden py-24 sm:py-32 bg-[#050E24] text-white border-b border-slate-900">
        {/* Background Video with Cinematic Overlays */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="size-full object-cover opacity-40 object-center"
          >
            <source src="/videos/stories-hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#050E24] via-[#050E24]/85 to-[#050E24]/40" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#050E24] to-transparent" />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#050E24]/60 to-transparent" />
        </div>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Headline */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-[1.5px] w-5 bg-sky-400" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                  A Stronger Tomorrow
                </span>
              </div>
              
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-tight">
                Collaboration changes <br className="hidden sm:inline" />
                more than businesses.
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-light max-w-xl mt-4 leading-relaxed">
                It builds confidence. It creates opportunities. It helps entrepreneurs go further than they could alone.
              </p>
            </div>

            {/* Right Frosted Quote Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-7 shadow-2xl max-w-[360px]">
                <Quote className="size-6 text-sky-400 mb-2 fill-sky-400/20" />
                <p className="font-serif italic text-base sm:text-lg text-white leading-snug">
                  “Alone we can do so little. Together we can do so much.”
                </p>
                <span className="block text-xs font-semibold text-sky-300 mt-3">
                  — Helen Keller
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================================
          5. PUT COLLABORATION INTO ACTION (Fully Recreated with Realistic Mobile App Phone)
          ===================================================================== */}
      <section className="relative py-16 sm:py-24 lg:py-28 bg-gradient-to-b from-[#F9FBFE] via-white to-[#F6FAFE] border-b border-slate-100 overflow-hidden">
        
        {/* Top-Right Decorative Cursive Script Accent */}
        <div className="hidden lg:block absolute top-8 right-6 xl:right-12 pointer-events-none select-none text-right z-10">
          <div className="inline-block transform -rotate-6">
            <div
              className="text-[24px] xl:text-[27px] text-[#8EA6C5] leading-[1.12] font-serif italic tracking-wide"
              style={{ fontFamily: 'Caveat, "Playfair Display", Georgia, cursive, serif' }}
            >
              <div>People</div>
              <div>Ideas</div>
              <div>Opportunities</div>
              <div>Together</div>
            </div>
            <svg className="w-32 h-6 ml-auto -mt-1 text-[#8EA6C5]/80 overflow-visible" viewBox="0 0 140 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M125 5C85 20 35 20 8 15C2 14 1 18 7 19C42 25 100 20 135 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
            
            {/* ──────── LEFT COLUMN: Narrative, CTAs, 3 Metrics & Quote (5 cols) ──────── */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-3">
                <span className="h-[1.5px] w-6 bg-[#0062D2]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                  Built for Real Entrepreneurs
                </span>
              </div>

              {/* Title with curved swoosh under "action" */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1A38] tracking-tight leading-[1.15] mb-5">
                Put collaboration <br />
                into{' '}
                <span className="relative inline-block brand-gradient-text">
                  action
                  <svg
                    className="absolute -bottom-2 left-0 w-full overflow-visible"
                    height="10"
                    viewBox="0 0 140 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 7C40 2 100 2 138 7"
                      stroke="#0062D2"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-[15px] text-slate-600 font-normal leading-relaxed max-w-lg mb-8">
                Find your Circle, contribute your strengths and access the support you need — all in one place. The Unity App helps you give, get and grow through the{' '}
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('ways') || document.querySelector('h2')
                    el?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="font-semibold text-[#0062D2] hover:underline underline-offset-2 cursor-pointer"
                >
                  10 Ways of Collaboration.
                </button>
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 mb-9">
                <Link
                  href="/circles"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0062D2] hover:bg-[#0052B4] px-6 sm:px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition-all hover:scale-105"
                >
                  <span>Find Your Circle</span>
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/membership"
                  className="inline-flex items-center rounded-full border border-slate-200/90 bg-white hover:bg-slate-50 px-6 sm:px-7 py-3.5 text-sm font-semibold text-slate-700 shadow-2xs transition-all hover:border-slate-300"
                >
                  Become a Peer
                </Link>
              </div>

              {/* 3 Metrics Row */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-4 max-w-md pt-4 border-t border-slate-100 mb-8">
                {/* Metric 1 */}
                <div className="flex items-center gap-2.5">
                  <div className="size-9 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 border border-blue-100/60 shadow-2xs">
                    <Users className="size-4" />
                  </div>
                  <div>
                    <div className="text-base font-bold text-slate-900 leading-none">10</div>
                    <div className="text-[10px] text-slate-400 font-medium leading-tight mt-0.5">
                      Ways to<br />Collaborate
                    </div>
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="flex items-center gap-2.5">
                  <div className="size-9 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center shrink-0 border border-rose-100/60 shadow-2xs">
                    <Users2 className="size-4" />
                  </div>
                  <div>
                    <div className="text-base font-bold text-slate-900 leading-none">100K+</div>
                    <div className="text-[10px] text-slate-400 font-medium leading-tight mt-0.5">
                      Entrepreneurs<br />Together
                    </div>
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="flex items-center gap-2.5">
                  <div className="size-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100/60 shadow-2xs">
                    <TrendingUp className="size-4" />
                  </div>
                  <div>
                    <div className="text-base font-bold text-slate-900 leading-none">Bigger</div>
                    <div className="text-[10px] text-slate-400 font-medium leading-tight mt-0.5">
                      Possibilities<br />Ahead
                    </div>
                  </div>
                </div>
              </div>

              {/* Helen Keller Quote with Blue Accent Bar */}
              <div className="border-l-[3px] border-[#0062D2] pl-4 py-0.5 max-w-sm">
                <p className="font-serif italic text-sm text-slate-800 leading-snug">
                  “Alone we can do so little, together we can do so much.”
                </p>
                <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase mt-1 block">
                  — PEERS GLOBAL
                </span>
              </div>
            </div>

            {/* ──────── CENTER COLUMN: Real Mobile Phone & Dotted Pointer (4 cols) ──────── */}
            <div className="lg:col-span-4 relative flex items-center justify-center py-4">
              
              {/* Soft Ambient Blue Aura behind the Phone */}
              <div className="absolute size-[360px] sm:size-[440px] rounded-full bg-gradient-to-tr from-[#3B82F6]/25 via-[#60A5FA]/15 to-transparent blur-3xl pointer-events-none -z-10" />



              {/* Realistic 3D iPhone Mockup Image with Shadow */}
              <div className="relative w-[280px] sm:w-[320px] lg:w-[330px] xl:w-[350px] transition-transform duration-500 hover:scale-[1.02] drop-shadow-[0_22px_45px_rgba(0,98,210,0.18)]">
                <Image
                  src="/images/unity-app-phone.png"
                  alt="Peers Global Unity Mobile App Mockup"
                  width={682}
                  height={1024}
                  priority
                  className="w-full h-auto object-contain"
                />
              </div>

            </div>

            {/* ──────── RIGHT COLUMN: Floating Card & 3 Feature Badges (3 cols) ──────── */}
            <div className="lg:col-span-3 flex flex-col justify-center space-y-6">
              
              {/* Floating Card: Same Entrepreneurs. Bigger Possibilities. */}
              <Link
                href="/circles"
                className="group block rounded-full bg-white p-4 sm:p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-slate-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="size-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 border border-blue-100/60 shadow-2xs">
                    <Users className="size-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 leading-snug">
                      Same Entrepreneurs.
                    </h4>
                    <p className="text-xs font-semibold text-[#0062D2] leading-snug">
                      Bigger Possibilities.
                    </p>
                  </div>
                  <span className="size-8 rounded-full bg-blue-50 text-[#0062D2] flex items-center justify-center shrink-0 group-hover:bg-[#0062D2] group-hover:text-white transition-colors">
                    <ArrowRight className="size-3.5" />
                  </span>
                </div>
              </Link>

              {/* 3 Feature Bullets */}
              <div className="space-y-4">
                {/* Feature 1 */}
                <div className="flex items-center gap-3.5 p-2 rounded-xl hover:bg-slate-50/60 transition-colors">
                  <div className="size-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 shadow-2xs border border-emerald-100/70">
                    <BarChart3 className="size-5" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    Build meaningful business relationships
                  </span>
                </div>

                {/* Feature 2 */}
                <div className="flex items-center gap-3.5 p-2 rounded-xl hover:bg-slate-50/60 transition-colors">
                  <div className="size-11 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 shadow-2xs border border-purple-100/70">
                    <Users2 className="size-5" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    Learn from real experience
                  </span>
                </div>

                {/* Feature 3 */}
                <div className="flex items-center gap-3.5 p-2 rounded-xl hover:bg-slate-50/60 transition-colors">
                  <div className="size-11 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0 shadow-2xs border border-amber-100/70">
                    <Star className="size-5" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    Turn ideas into real opportunities
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================================
          6. CLOSING BANNER (Vibrant Royal Blue Color Theme)
          ===================================================================== */}
      <section
        className="relative overflow-hidden text-white py-20 sm:py-24"
        style={{ background: 'linear-gradient(90deg, #06112c 0%, #13071f 50%, #260513 100%)' }}
      >
        {/* Soft Background Concentric Arcs matching the design */}
        <div className="absolute top-1/2 -left-20 -translate-y-1/2 size-[520px] rounded-full border border-white/10 pointer-events-none" />
        <div className="absolute top-1/2 -left-36 -translate-y-1/2 size-[700px] rounded-full border border-white/[0.06] pointer-events-none" />
        <div className="absolute -top-32 -right-32 size-[600px] rounded-full border border-white/10 pointer-events-none" />
        <div className="absolute -top-48 -right-48 size-[800px] rounded-full border border-white/[0.06] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 size-2 rounded-full bg-white/30 pointer-events-none" />

        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-[1.5px] w-5 bg-white/70" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
              The Next Step
            </span>
            <span className="h-[1.5px] w-5 bg-white/70" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-tight">
            Be part of a community that gives back.
          </h2>

          <p className="text-sm sm:text-base text-white/85 font-light mt-3 max-w-xl mx-auto leading-relaxed">
            Find your Circle and start collaborating today.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Link
              href="/circles"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-95 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all"
            >
              Find Your Circle
              <ArrowRight className="size-4" />
            </Link>

            <Link
              href="/membership"
              className="inline-flex items-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#0062D2] shadow-md hover:bg-slate-100 hover:shadow-lg transition-all"
            >
              Become a Peer
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================================
          INTERACTIVE MODAL: Click any of the 10 Ways to view deep details
          ===================================================================== */}
      {selectedWay && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedWay(null)}
        >
          <div
            className="relative w-full max-w-xl rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedWay(null)}
              className="absolute top-5 right-5 size-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="size-4" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono font-bold text-[#0062D2] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                WAY {selectedWay.number}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Peers Global Collaboration
              </span>
            </div>

            <div className="flex items-start gap-4 mb-4">
              <div className={`size-12 rounded-2xl ${selectedWay.bgColor} ${selectedWay.color} flex items-center justify-center shrink-0`}>
                <selectedWay.icon className="size-6" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-slate-950">
                  {selectedWay.name}
                </h3>
                <p className="text-sm text-[#0062D2] font-serif italic mt-0.5">
                  {selectedWay.tagline}
                </p>
              </div>
            </div>

            <p className="text-slate-600 text-sm font-light leading-relaxed mb-6">
              {selectedWay.description}
            </p>

            {/* Tinted Example & Ground Rules Panels */}
            <div className="space-y-3">
              <div className="rounded-2xl bg-blue-50/70 border border-blue-100 p-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <Sparkles className="size-4 text-[#0062D2]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                    What It Looks Like
                  </span>
                </div>
                <p className="text-xs text-slate-700 font-light leading-relaxed">
                  {selectedWay.example}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-4">
                <div className="flex items-center gap-2 mb-1.5">
                  <ShieldCheck className="size-4 text-emerald-600" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    What Makes It Real
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  {selectedWay.whatMakesItReal}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-400 italic">
                Peers are Partners in Business &amp; Friends in Life.
              </span>
              <button
                type="button"
                onClick={() => setSelectedWay(null)}
                className="rounded-lg bg-[#0062D2] px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
