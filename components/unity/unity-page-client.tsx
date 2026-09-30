'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  Users,
  Building2,
  Globe2,
  TrendingUp,
  Shield,
  ShieldCheck,
  Lock,
  Clock,
  Flag,
  Heart,
  Ban,
  Megaphone,
  MessageSquare,
  Calendar,
  Sparkles,
  ShoppingBag,
  HelpCircle,
  ChevronDown,
  UserPlus,
  Compass,
  CheckCircle2,
  PlusCircle,
  Quote,
  Apple,
  EyeOff,
  SlidersHorizontal,
  FolderLock,
  History,
  Send,
  Sparkle
} from 'lucide-react'
import { SITE } from '@/lib/data/site'

// ─── 12 Core Features of Unity ───────────────────────────────────────────────
const TWELVE_FEATURES = [
  {
    num: '01',
    title: 'THE TIMELINE',
    subtitle: 'See what is happening across your community.',
    desc: 'Discover updates, contributions, conversations and moments worth knowing about. Stay connected without having to search for everything yourself.',
    icon: Clock,
    color: 'border-blue-200 bg-blue-50/70 text-[#0062D2]',
  },
  {
    num: '02',
    title: 'THE PEERS',
    subtitle: 'Discover the people who make up the community.',
    desc: 'Explore 200+ Peers and understand who they are, what they do and where meaningful connections may exist. Because the value of a community begins with knowing the people inside it.',
    icon: Users,
    color: 'border-purple-200 bg-purple-50/70 text-purple-700',
  },
  {
    num: '03',
    title: 'CONNECTIONS & FOLLOWERS',
    subtitle: 'Build your own network within the wider community.',
    desc: 'Stay connected with people you know. Follow people whose experience, work or contribution you want to continue learning from. Relationships can begin in a meeting. Unity helps them continue.',
    icon: UserPlus,
    color: 'border-emerald-200 bg-emerald-50/70 text-emerald-700',
  },
  {
    num: '04',
    title: 'MESSAGING & CIRCLE CHAT',
    subtitle: 'Continue conversations beyond the meeting.',
    desc: 'Connect one-to-one. Stay connected with your Circle. Keep useful conversations moving without losing the context of the relationship.',
    icon: MessageSquare,
    color: 'border-cyan-200 bg-cyan-50/70 text-cyan-700',
  },
  {
    num: '05',
    title: 'THE CONFIDENTIAL FORUM',
    subtitle: 'Some conversations require a different environment.',
    desc: 'The Confidential Forum creates a space for conversations that benefit from trust, discretion and the shared understanding of fellow entrepreneurs. A place to ask, listen, share experience, and where confidentiality matters.',
    icon: FolderLock,
    color: 'border-amber-200 bg-amber-50/70 text-amber-700',
  },
  {
    num: '06',
    title: 'IMPACT TRACKING',
    subtitle: 'Contribution should be visible.',
    desc: 'Unity allows you to track your impact through milestone badges and national rankings. Not as a measure of human worth, but as a way to recognise participation and contribution within the community.',
    icon: Sparkles,
    color: 'border-rose-200 bg-rose-50/70 text-rose-700',
  },
  {
    num: '07',
    title: 'CONTRIBUTION LOGGING',
    subtitle: 'Your contribution has a history.',
    desc: 'Record the actions, introductions and contributions you make through the community. Because when contribution becomes visible, it becomes easier to recognise the people who consistently help others move forward.',
    icon: History,
    color: 'border-indigo-200 bg-indigo-50/70 text-indigo-700',
  },
  {
    num: '08',
    title: 'ONE-TO-ONE BOOKING',
    subtitle: 'A meaningful relationship often needs more than a group conversation.',
    desc: 'Book time with another Peer. Continue the conversation. Understand the business. Explore the possibility. Help each other. One introduction can become one relationship. One relationship can create many possibilities.',
    icon: Calendar,
    color: 'border-teal-200 bg-teal-50/70 text-teal-700',
  },
  {
    num: '09',
    title: 'EVENTS',
    subtitle: 'Know what is happening across PEERS GLOBAL.',
    desc: 'Discover events. Stay connected to the wider community. Move beyond your Circle when an opportunity, conversation or experience is relevant to you.',
    icon: Calendar,
    color: 'border-blue-200 bg-blue-50/70 text-[#0062D2]',
  },
  {
    num: '10',
    title: 'THE MARKETPLACE',
    subtitle: 'A community can create opportunities for its own people.',
    desc: 'The Marketplace provides a space for those opportunities within the wider PEERS GLOBAL ecosystem. Explore. Connect. Participate. And contribute.',
    icon: ShoppingBag,
    color: 'border-purple-200 bg-purple-50/70 text-purple-700',
  },
  {
    num: '11',
    title: 'YOUR CIRCLE',
    subtitle: 'Your Circle remains at the centre of your PEERS GLOBAL experience.',
    desc: 'Stay connected with your Circle between meetings. Continue conversations. Follow activity. Keep the relationship alive. Your Circle is not simply a monthly meeting. It is your Inner Board.',
    icon: Users,
    color: 'border-emerald-200 bg-emerald-50/70 text-emerald-700',
  },
  {
    num: '12',
    title: 'REQUEST A CIRCLE',
    subtitle: 'Sometimes the Circle you are looking for does not exist yet.',
    desc: 'Unity gives you a way to express that need. Perhaps there is an industry, a purpose, a city, or a community of entrepreneurs who should be connected. A request can be the beginning of something that did not exist before.',
    icon: PlusCircle,
    color: 'border-amber-200 bg-amber-50/70 text-amber-700',
  },
]

// ─── 5 Starting Steps ────────────────────────────────────────────────────────
const START_HERE_STEPS = [
  {
    title: 'FIND YOUR PEERS',
    desc: 'Discover the entrepreneurs around you.',
    icon: Users,
  },
  {
    title: 'FIND YOUR CIRCLE',
    desc: 'Understand where your primary community lives.',
    icon: Compass,
  },
  {
    title: 'START A CONVERSATION',
    desc: 'Reach out to someone you would like to know.',
    icon: MessageSquare,
  },
  {
    title: 'CONTRIBUTE',
    desc: 'Share something useful. Make an introduction. Help someone move forward.',
    icon: Sparkles,
  },
  {
    title: 'STAY CONNECTED',
    desc: 'Let the relationship continue after the meeting.',
    icon: CheckCircle2,
  },
]

// ─── FAQs ─────────────────────────────────────────────────────────────────
const FAQS = [
  {
    question: 'Is Unity a social media platform?',
    answer:
      'Unity is the digital home of the PEERS GLOBAL community. Its purpose is to connect Peers, Circles, conversations, contributions, events and opportunities within that community.',
  },
  {
    question: 'Are there advertisements?',
    answer: 'No advertising. Nobody is paying to appear in your feed.',
  },
  {
    question: 'Will strangers be able to contact me?',
    answer:
      'The source positions Unity as a community environment rather than a platform full of strangers, with profiles private by default.',
  },
  {
    question: 'What can I do inside Unity?',
    answer:
      'The source defines twelve core features: Timeline, Peers, Connections & Followers, Messaging & Circle Chat, Confidential Forum, Impact Tracking, Contribution Logging, One-to-One Booking, Events, Marketplace, Your Circle and Request a Circle.',
  },
  {
    question: 'Can I communicate with my Circle?',
    answer: 'Yes. Circle Chat and Your Circle are among the core Unity features.',
  },
  {
    question: 'Can I connect with another Peer privately?',
    answer:
      'Yes. Messaging and One-to-One Booking support continued individual relationships.',
  },
  {
    question: 'Why does Unity matter if I already attend Circle meetings?',
    answer:
      'Because relationships continue between meetings. Unity provides the digital environment for that ongoing connection.',
  },
  {
    question: 'Can I request a new Circle?',
    answer: 'Yes. Request a Circle is one of the core Unity features.',
  },
]

export function UnityPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-[#FBFCFE] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-slate-200/80 bg-white/80 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-[#0062D2] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span>Ecosystem</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">Unity</span>
        </div>
      </div>

      {/* ─── SECTION 1: HERO (UNITY: A GLOBAL COMMUNITY IN YOUR POCKET) ────── */}
      <section className="relative pt-16 sm:pt-24 pb-16 sm:pb-24 bg-gradient-to-b from-[#F0F5FD] via-white to-[#FBFCFE] border-b border-slate-200/80 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading & Value */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">
                  THE DIGITAL HOME OF PEERS GLOBAL
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight leading-[1.08] text-slate-950">
                <span className="brand-gradient-text block">UNITY</span>
                <span className="text-2xl sm:text-3xl lg:text-4xl text-slate-800 font-medium mt-2 block font-sans">
                  A global community of entrepreneurs, in your pocket.
                </span>
              </h1>

              {/* High-Impact Tagline Badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  'No advertising',
                  'No strangers',
                  'No algorithm deciding what you see',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs sm:text-sm font-semibold text-slate-800 shadow-xs"
                  >
                    ✓ {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-light">
                <p>
                  Unity is where the <strong>PEERS GLOBAL</strong> community continues between meetings.
                </p>

                {/* 6 Core Pillars Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                  {[
                    'Your Circle',
                    'Your relationships',
                    'Your conversations',
                    'Your contributions',
                    'Your opportunities',
                    'Your community',
                  ].map((p) => (
                    <div
                      key={p}
                      className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs sm:text-sm font-medium text-slate-800 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0062D2]" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>

                <p className="text-slate-900 font-semibold text-base pt-2">
                  All in one private digital home.
                </p>

                <p className="border-l-2 border-[#0062D2] pl-3 italic text-slate-700 text-sm sm:text-base">
                  The meeting may bring people together once a month. Unity helps the relationship continue every day.
                </p>
              </div>

              {/* Download Badges & CTA */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href={SITE.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-badge-btn"
                  aria-label="Download on the Apple App Store"
                >
                  <Apple className="size-5.5 fill-white shrink-0" />
                  <div className="text-left">
                    <span className="app-badge-sub">Download on the</span>
                    <span className="app-badge-title">App Store</span>
                  </div>
                </a>

                <a
                  href={SITE.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-badge-btn"
                  aria-label="Get it on Google Play"
                >
                  <svg className="size-5.5 shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M3.6 2.4C3.4 2.6 3.2 2.9 3.2 3.4V20.6C3.2 21.1 3.4 21.4 3.6 21.6L12.7 12L3.6 2.4Z" fill="#2196F3" />
                    <path d="M16.3 8.4L13.8 10.9L12.7 12L13.8 13.1L16.3 15.6L20.4 13.3C21.6 12.6 21.6 11.4 20.4 10.7L16.3 8.4Z" fill="#FFC107" />
                    <path d="M12.7 12L3.6 21.6C3.9 21.8 4.3 21.8 4.8 21.5L16.3 15.6L12.7 12Z" fill="#4CAF50" />
                    <path d="M12.7 12L16.3 8.4L4.8 2.5C4.3 2.2 3.9 2.2 3.6 2.4L12.7 12Z" fill="#F44336" />
                  </svg>
                  <div className="text-left">
                    <span className="app-badge-sub">GET IT ON</span>
                    <span className="app-badge-title">Google Play</span>
                  </div>
                </a>

                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-slate-800 font-medium text-xs sm:text-sm border border-slate-300 shadow-xs hover:bg-slate-50 transition-all duration-200"
                >
                  <span>Open Web App</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Hero Graphic */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-slate-950 p-2 sm:p-3">
                <div className="relative h-[400px] sm:h-[480px] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/unity-hero-phones.jpg"
                    alt="Unity App Mobile Interface"
                    fill
                    className="object-contain object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-semibold uppercase tracking-wider text-sky-200 border border-white/20">
                      Private Ecosystem
                    </span>
                    <p className="font-serif text-base sm:text-lg font-bold leading-snug">
                      The room is known. The context is real. The trust is shared.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 2: A COMMUNITY, NOT A PLATFORM FULL OF STRANGERS ───── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    PURPOSE-BUILT ENVIRONMENT
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-1 leading-tight">
                  A COMMUNITY, NOT A PLATFORM FULL OF STRANGERS
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                <p>
                  Most digital platforms are designed to keep you scrolling. <strong>Unity is designed to help you stay connected.</strong> There is a difference.
                </p>
                <p>
                  You are not entering a room filled with anonymous profiles. You are entering a community of entrepreneurs who share a relationship with PEERS GLOBAL.
                </p>
              </div>

              {/* 4 Context Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  { title: 'You know your Circle', desc: 'Your primary cohort and verified inner board.' },
                  { title: 'You know your Peers', desc: 'Active, verified entrepreneurs with real companies.' },
                  { title: 'You know the context', desc: 'Every conversation is grounded in mutual contribution.' },
                  { title: 'No algorithm deciding', desc: 'Pure chronological signal built around relationships.' },
                ].map((point) => (
                  <div
                    key={point.title}
                    className="p-4 rounded-2xl bg-[#FBFCFE] border border-slate-200 shadow-2xs space-y-1"
                  >
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                      <CheckCircle2 className="w-4 h-4 text-[#0062D2] shrink-0" />
                      <span>{point.title}</span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed pl-5.5">
                      {point.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#040E24] via-[#061836] to-[#0A2558] text-white shadow-xl space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-sky-300 flex items-center justify-center border border-white/20">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white leading-snug">
                  "The experience is built around relationships—not an algorithm deciding what should appear next."
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  Unity removes the noise of open social networks. No promoted posts, no engagement hooks, and no vanity metrics. Just verified entrepreneurs solving problems, making introductions, and taking responsibility for one another.
                </p>
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-sky-200">
                  <span>Trust-Based Architecture</span>
                  <span>100% Verified Founders</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 3: YOUR COMMUNITY, IN ONE PLACE (12 CORE FEATURES) ───── */}
      <section className="py-16 sm:py-24 bg-[#FBFCFE] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <div className="flex items-center gap-2 mb-1">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                THE 12 CORE MODULES
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-950 mt-1">
              YOUR COMMUNITY, IN ONE PLACE
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2 font-light">
              Everything built for real collaboration, privacy, contribution, and continuous relationship building.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TWELVE_FEATURES.map((feat) => {
              const Icon = feat.icon
              return (
                <div
                  key={feat.num}
                  className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-slate-400">
                        {feat.num}
                      </span>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${feat.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-serif font-bold text-slate-950 group-hover:text-[#0062D2] transition-colors">
                        {feat.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-700 mt-1 leading-snug">
                        {feat.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-light">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ─── SECTION 4: 4 DEEP-DIVE STRATEGIC BOXES (2X2 GRID) ────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Box 1: YOUR PROFILE IS PRIVATE BY DEFAULT */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FBFCFE] border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-950">
                  YOUR PROFILE IS PRIVATE BY DEFAULT
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  <p>
                    Your digital presence should begin with trust. Your profile is private by default.
                  </p>
                  <p>
                    Your participation should happen within the context of a community you have chosen to be part of.
                  </p>
                  <p className="text-slate-900 font-medium pt-1">
                    Unity is not designed around strangers discovering you through an open algorithm. It is designed around relationships you can understand, and relationships you can choose to build.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200/80 flex items-center gap-2 text-xs font-bold text-[#0062D2]">
                <Shield className="w-4 h-4" />
                <span>Zero Open Harvesting • Mutual Connection Permissions</span>
              </div>
            </div>

            {/* Box 2: WHY THE APP MATTERS MORE THAN THE MEETING */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FBFCFE] border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center border border-purple-100">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-950">
                  WHY THE APP MATTERS MORE THAN THE MEETING
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  <p>
                    A Circle meeting may happen for a few hours each month. But a relationship does not stop when the meeting ends.
                  </p>
                  <p>
                    There are approximately <strong>8,736 hours in a year</strong>. The meeting occupies only a small part of that time. The rest is where relationships can continue:
                  </p>
                  <div className="grid grid-cols-2 gap-1.5 text-xs text-slate-800 font-medium pt-1">
                    <span>• A message</span>
                    <span>• An introduction</span>
                    <span>• A question</span>
                    <span>• A shared opportunity</span>
                    <span>• A one-to-one</span>
                    <span>• A contribution</span>
                  </div>
                  <p className="italic text-slate-700 pt-1">
                    The meeting creates the connection. Unity helps keep the connection alive.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200/80 flex items-center gap-2 text-xs font-bold text-purple-700">
                <TrendingUp className="w-4 h-4" />
                <span>8,736 Hours of Continuous Value</span>
              </div>
            </div>

            {/* Box 3: ONE COMMUNITY. EVERY COUNTRY. */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FBFCFE] border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100">
                  <Globe2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-950">
                  ONE COMMUNITY. EVERY COUNTRY.
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  <p>
                    PEERS GLOBAL is designed as one community across geographies.
                  </p>
                  <div className="space-y-1.5 pl-3 border-l-2 border-emerald-500 text-xs text-slate-700 font-medium">
                    <p>• Your Circle gives you local relationships.</p>
                    <p>• Your industry can connect you to relevant entrepreneurs.</p>
                    <p>• Your purpose can take you beyond your industry.</p>
                    <p>• And Unity can keep those relationships connected across the wider community.</p>
                  </div>
                  <p className="text-slate-900 font-semibold pt-1">
                    Local relationships. National possibilities. Global connections. One community.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200/80 flex items-center gap-2 text-xs font-bold text-emerald-700">
                <Compass className="w-4 h-4" />
                <span>Cross-Border Ecosystem Architecture</span>
              </div>
            </div>

            {/* Box 4: START HERE */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FBFCFE] border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-100">
                  <Flag className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-950">
                  START HERE
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  You do not need to understand every feature before you begin. Start with your people.
                </p>

                <div className="space-y-2 pt-1">
                  {START_HERE_STEPS.map((s, idx) => {
                    const SIcon = s.icon
                    return (
                      <div
                        key={s.title}
                        className="flex items-start gap-3 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs"
                      >
                        <div className="w-6 h-6 rounded-full bg-[#0062D2] text-white flex items-center justify-center shrink-0 text-[10px] font-bold">
                          {idx + 1}
                        </div>
                        <div>
                          <span className="text-xs font-bold text-slate-900 block leading-tight">
                            {s.title}
                          </span>
                          <span className="text-[11px] text-slate-600 leading-tight">
                            {s.desc}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <p className="text-xs font-semibold text-amber-800 text-center pt-2">
                That is the purpose of Unity.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 5: UNITY IS WHERE THE RELATIONSHIP CONTINUES ─────────── */}
      <section className="py-16 sm:py-24 bg-[#FBFCFE] border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2">
            <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
              THE PHILOSOPHY OF UNITY
            </span>
            <span className="h-[2px] w-6 bg-gradient-to-r from-[#E11D48] to-[#1D4ED8] rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-950 leading-tight">
            UNITY IS WHERE THE RELATIONSHIP CONTINUES
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-light max-w-3xl mx-auto text-left sm:text-center">
            <p>
              PEERS GLOBAL is not only a place you visit. It is a community you belong to.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto text-xs sm:text-sm font-medium text-slate-800 text-left pt-2">
              <div className="p-3 bg-white rounded-xl border border-slate-200">The Circle gives you your Inner Board.</div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">The meeting gives you shared experience.</div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">Relationships create trust.</div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">Contribution gives those relationships meaning.</div>
            </div>
            <p className="pt-2">
              Unity keeps the community connected between the moments when people meet physically.
            </p>
            <p className="text-slate-950 font-serif font-bold text-lg sm:text-xl pt-3 italic">
              "Because the real value of a community is not what happens when everyone is in the room. It is what people continue to do for one another after they leave it."
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: FAQ ACCORDION ─────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-1">
              <HelpCircle className="w-5 h-5 text-[#0062D2]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div key={faq.question} className="py-5">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between gap-4 text-left group focus:outline-none cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-serif font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {faq.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-blue-50 text-blue-600'
                          : 'bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600'
                      }`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-3 pb-1 text-sm text-slate-600 leading-relaxed pr-6 font-light">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: CLOSING ROYAL HERO BANNER (YOUR COMMUNITY. IN YOUR POCKET.) ── */}
      <section className="relative py-20 sm:py-28 bg-[#0062D2] text-white overflow-hidden">
        {/* Geometric Art */}
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Manifesto */}
            <div className="lg:col-span-8 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-200">
                — DIGITAL HOME —
              </span>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.1]">
                YOUR COMMUNITY. IN YOUR POCKET.
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-white/90 leading-relaxed font-light max-w-2xl">
                <p>
                  A meeting can give you a conversation. Unity can help that conversation continue.
                </p>
                <div className="space-y-1.5 pl-3 border-l-2 border-sky-300 text-sm text-sky-100 font-medium">
                  <p>A Peer can become a connection.</p>
                  <p>A connection can become a relationship.</p>
                  <p>A relationship can create collaboration.</p>
                  <p>Collaboration can create contribution.</p>
                  <p>Contribution can create impact.</p>
                  <p>And impact can create possibilities for someone else.</p>
                </div>
                <p className="text-white font-medium">
                  That is Unity. Not another platform to keep you scrolling. A digital home for the community you have chosen to belong to.
                </p>
              </div>

              {/* Action Badges */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href={SITE.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-[#0062D2] font-semibold text-sm shadow-xl hover:bg-blue-50 transition-all duration-200 group hover:scale-105"
                >
                  <Apple className="w-4 h-4 fill-current" />
                  <span>Download for iOS</span>
                </a>

                <a
                  href={SITE.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/40 backdrop-blur-sm transition-all duration-200"
                >
                  <span>Google Play Store</span>
                </a>

                <Link
                  href="/membership"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/40 backdrop-blur-sm transition-all duration-200"
                >
                  <span>Apply for Membership →</span>
                </Link>
              </div>
            </div>

            {/* Right Cursive Script */}
            <div className="lg:col-span-4 text-center lg:text-right select-none pointer-events-none">
              <p
                className="text-3xl sm:text-4xl lg:text-5xl font-light italic leading-tight text-white drop-shadow-lg"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Conversations.
                <br />
                Relationships.
                <br />
                Contributions.
                <br />
                Possibilities.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
