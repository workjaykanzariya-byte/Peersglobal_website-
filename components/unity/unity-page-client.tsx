'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GalaxyButton } from '@/components/ui/galaxy-button'
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
      
      {/* ─── SECTION 1: HERO (MASTER FULL PAGE DARK VIDEO BANNER) ────── */}
      <section className="relative overflow-hidden bg-[#040F24] text-white pt-6 sm:pt-8 pb-12 sm:pb-16 border-b border-slate-800">
        {/* Full Bleed Hero Video Background */}
        <div className="absolute inset-0 size-full overflow-hidden pointer-events-none">
          <video
            src="/videos/homepage-hero-bg.mp4"
            poster="/images/circles-hero-new.jpg"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(2,8,23,0.92)_0%,rgba(4,15,36,0.78)_45%,rgba(4,15,36,0.55)_100%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-slate-400">Ecosystem</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-white font-semibold">Unity</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full min-h-[440px] lg:min-h-[480px]">
            {/* Left Hero Content */}
            <div className="lg:col-span-12 max-w-3xl space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur-sm uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
                <span>THE DIGITAL HOME OF PEERS GLOBAL</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white">
                  A global community of entrepreneurs,{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-rose-400">
                    in your pocket
                  </span>
                </h1>
                <p className="text-base sm:text-lg font-medium text-slate-200 leading-snug">
                  No advertising. No strangers. No algorithm. Unity is where the PEERS GLOBAL community continues between meetings.
                </p>
              </div>

              {/* Tagline Pills */}
              <div className="flex flex-wrap gap-2.5">
                {[
                  'No advertising',
                  'No strangers',
                  'No algorithms',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-slate-200 backdrop-blur-sm shadow-2xs"
                  >
                    ✓ {tag}
                  </span>
                ))}
              </div>

              {/* 6 Core Quick Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 w-full max-w-lg pt-1">
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
                    className="p-2.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm text-xs font-medium text-slate-200 flex items-center gap-2"
                  >
                    <span className="size-1.5 rounded-full bg-sky-400" />
                    <span className="truncate">{p}</span>
                  </div>
                ))}
              </div>

              {/* Download Badges & CTA */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
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

                <GalaxyButton
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="transparent"
                  size="default"
                  className="font-medium"
                >
                  Open Web App
                </GalaxyButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: A COMMUNITY, NOT A PLATFORM FULL OF STRANGERS ───── */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                    Purpose-Built Environment
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-tight leading-tight">
                  A community, not a platform full of strangers
                </h2>
              </div>

              <div className="space-y-3.5 text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                <p>
                  Most digital platforms are designed to keep you scrolling. <strong className="text-slate-900 font-semibold">Unity is designed to help you stay connected.</strong> There is a difference.
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
                    className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs space-y-1"
                  >
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                      <CheckCircle2 className="w-4 h-4 text-[#0062D2] shrink-0" />
                      <span>{point.title}</span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed pl-6">
                      {point.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#040E24] via-[#061836] to-[#0A2558] text-white shadow-xl space-y-6">
                <div className="w-11 h-11 rounded-2xl bg-white/10 text-sky-300 flex items-center justify-center border border-white/20">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  "The experience is built around relationships—not an algorithm deciding what should appear next."
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  Unity removes the noise of open social networks. No promoted posts, no engagement hooks, and no vanity metrics. Just verified entrepreneurs solving problems, making introductions, and taking responsibility for one another.
                </p>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-sky-200">
                  <span>Trust-Based Architecture</span>
                  <span>100% Verified Founders</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 3: YOUR COMMUNITY, IN ONE PLACE (12 CORE FEATURES) ───── */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10 sm:mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                The 12 Core Modules
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-tight leading-snug">
              Your community, in one place
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 font-light leading-relaxed">
              Everything built for real collaboration, privacy, contribution, and continuous relationship building.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {TWELVE_FEATURES.map((feat) => {
              const Icon = feat.icon
              return (
                <div
                  key={feat.num}
                  className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold bg-slate-100 text-slate-600 border border-slate-200/60">
                        {feat.num}
                      </span>
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center border shadow-2xs transition-transform duration-300 group-hover:scale-105 ${feat.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0062D2] transition-colors leading-tight">
                        {feat.title}
                      </h3>
                      <p className="text-xs font-semibold text-blue-600/90 mt-1 leading-snug">
                        {feat.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-light pt-0.5">
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
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Box 1: YOUR PROFILE IS PRIVATE BY DEFAULT */}
            <div className="p-7 sm:p-9 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
              <div className="space-y-3.5">
                <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100/80 shadow-2xs">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  Your profile is private by default
                </h3>
                <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  <p>
                    Your digital presence should begin with trust. Your profile is private by default.
                  </p>
                  <p>
                    Your participation should happen within the context of a community you have chosen to be part of.
                  </p>
                  <p className="text-slate-800 font-medium pt-1">
                    Unity is not designed around strangers discovering you through an open algorithm. It is designed around relationships you can understand, and relationships you can choose to build.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200/80 flex items-center gap-2 text-xs font-semibold text-[#0062D2]">
                <Shield className="w-4 h-4 shrink-0" />
                <span>Zero Open Harvesting • Mutual Connection Permissions</span>
              </div>
            </div>

            {/* Box 2: WHY THE APP MATTERS MORE THAN THE MEETING */}
            <div className="p-7 sm:p-9 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
              <div className="space-y-3.5">
                <div className="w-11 h-11 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center border border-purple-100/80 shadow-2xs">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  Why the app matters more than the meeting
                </h3>
                <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  <p>
                    A Circle meeting may happen for a few hours each month. But a relationship does not stop when the meeting ends.
                  </p>
                  <p>
                    There are approximately <strong className="text-slate-900 font-semibold">8,736 hours in a year</strong>. The meeting occupies only a small part of that time. The rest is where relationships continue:
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
              <div className="pt-4 border-t border-slate-200/80 flex items-center gap-2 text-xs font-semibold text-purple-700">
                <TrendingUp className="w-4 h-4 shrink-0" />
                <span>8,736 Hours of Continuous Value</span>
              </div>
            </div>

            {/* Box 3: ONE COMMUNITY. EVERY COUNTRY. */}
            <div className="p-7 sm:p-9 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
              <div className="space-y-3.5">
                <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100/80 shadow-2xs">
                  <Globe2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  One community. Every country.
                </h3>
                <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
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
              <div className="pt-4 border-t border-slate-200/80 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                <Compass className="w-4 h-4 shrink-0" />
                <span>Cross-Border Ecosystem Architecture</span>
              </div>
            </div>

            {/* Box 4: START HERE */}
            <div className="p-7 sm:p-9 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-2xs flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
              <div className="space-y-3.5">
                <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-100/80 shadow-2xs">
                  <Flag className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  Start here
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
      <section className="py-12 sm:py-16 lg:py-20 bg-[#FAFBFD] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-3xl bg-gradient-to-br from-[#061226] via-[#0A1A38] to-[#040D1E] text-white p-7 sm:p-10 lg:p-12 shadow-xl border border-slate-800/80 relative overflow-hidden">
            {/* Ambient glows */}
            <div className="absolute top-0 right-0 size-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 size-80 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
              
              {/* Left Column: Narrative & 4 Pillars */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-3">
                    <span className="h-[2px] w-4 bg-gradient-to-r from-blue-400 to-rose-400 rounded-full" />
                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-sky-300">
                      The Philosophy of Unity
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-white tracking-tight leading-tight">
                    Unity is where the relationship continues.
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mt-3">
                    <strong className="text-white font-semibold">PEERS GLOBAL</strong> is not only a place you visit. It is a community you belong to. Unity keeps the ecosystem connected between the moments when people meet physically.
                  </p>
                </div>

                {/* 4 Pillars Mini Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/10 hover:bg-white/[0.09] transition-colors space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-sky-500/20 text-sky-300 flex items-center justify-center border border-sky-400/20">
                        <Users className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-xs font-bold text-sky-300">Your Inner Board</p>
                    </div>
                    <p className="text-xs text-slate-300/90 leading-relaxed font-light pl-8">
                      Dedicated, trusted founders around your table.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/10 hover:bg-white/[0.09] transition-colors space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center border border-indigo-400/20">
                        <Clock className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-xs font-bold text-indigo-300">Shared Experience</p>
                    </div>
                    <p className="text-xs text-slate-300/90 leading-relaxed font-light pl-8">
                      Monthly structured meetings establish real mutual context.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/10 hover:bg-white/[0.09] transition-colors space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center border border-amber-400/20">
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-xs font-bold text-amber-300">Continuous Trust</p>
                    </div>
                    <p className="text-xs text-slate-300/90 leading-relaxed font-light pl-8">
                      Direct peer messaging and verified collaboration create lasting ties.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/10 hover:bg-white/[0.09] transition-colors space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center border border-emerald-400/20">
                        <Sparkles className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-xs font-bold text-emerald-300">Active Contribution</p>
                    </div>
                    <p className="text-xs text-slate-300/90 leading-relaxed font-light pl-8">
                      Logging Life Impact gives business relationships real purpose.
                    </p>
                  </div>
                </div>

                {/* Bottom Quote Banner */}
                <div className="pt-3 border-t border-white/10">
                  <p className="text-xs sm:text-[13px] text-slate-300 italic leading-relaxed font-light">
                    "Because the real value of a community is not what happens when everyone is in the room. It is what people continue to do for one another after they leave it."
                  </p>
                </div>
              </div>

              {/* Right Column: Visual App Mockup Showcase */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-slate-950/80 p-2 shadow-2xl backdrop-blur-md">
                  <div className="relative h-[340px] sm:h-[400px] rounded-xl overflow-hidden bg-gradient-to-b from-[#0A2558] to-[#040E24] flex items-center justify-center">
                    {/* Official Unity App Showcase Mockup */}
                    <img
                      src="/images/unity-creatives/1.png"
                      alt="Unity App Interface"
                      className="size-full object-contain object-center scale-105 hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#040D1E]/80 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white flex items-center justify-between">
                      <div>
                        <span className="inline-block px-2 py-0.5 rounded-md bg-blue-500/30 text-sky-300 border border-blue-400/40 text-[10px] font-bold uppercase tracking-wider">
                          Unity App Experience
                        </span>
                        <p className="text-xs font-bold text-white mt-1">
                          Timeline • Forum • Impact Tracking
                        </p>
                      </div>
                      <span className="text-[10px] text-slate-300 font-mono">
                        iOS & Android
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ─── SECTION 6: FAQ ACCORDION ─────────────────────────────────────── */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-10">
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle className="w-4 h-4 text-[#0062D2]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                Frequently Asked Questions
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-tight leading-snug">
              Frequently asked questions
            </h2>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div key={faq.question} className="py-4 sm:py-5">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between gap-4 text-left group focus:outline-none cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0062D2] transition-colors leading-snug">
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

      {/* ─── SECTION 7: CLOSING EXECUTIVE BANNER (YOUR COMMUNITY. IN YOUR POCKET.) ── */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-white border-t border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-3xl bg-gradient-to-br from-[#040D1E] via-[#081836] to-[#040C1A] text-white p-8 sm:p-11 lg:p-14 shadow-2xl border border-slate-800/80 relative overflow-hidden">
            {/* Ambient glows */}
            <div className="absolute top-0 right-0 size-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 size-80 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-4xl space-y-7">
              
              {/* Header & Tag */}
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
                  <span className="h-[2px] w-4 bg-gradient-to-r from-blue-400 to-rose-400 rounded-full" />
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-sky-300">
                    Digital Home
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-white tracking-tight leading-tight">
                  Your community. In your pocket.
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light max-w-2xl">
                  A meeting can give you a conversation. Unity can help that conversation continue.
                </p>
              </div>

              {/* Connected Flow Steps (2x3 Grid with micro numbers) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { num: '01', title: 'A Peer', desc: 'Can become a connection.' },
                  { num: '02', title: 'A Connection', desc: 'Can become a relationship.' },
                  { num: '03', title: 'A Relationship', desc: 'Can create collaboration.' },
                  { num: '04', title: 'Collaboration', desc: 'Can create contribution.' },
                  { num: '05', title: 'Contribution', desc: 'Can create impact.' },
                  { num: '06', title: 'Impact', desc: 'Creates possibilities for others.' },
                ].map((item) => (
                  <div
                    key={item.num}
                    className="p-3.5 rounded-xl bg-white/[0.05] border border-white/10 hover:bg-white/[0.08] transition-colors flex items-start gap-3"
                  >
                    <span className="inline-flex items-center justify-center size-6 rounded-md bg-blue-500/20 text-sky-300 text-[11px] font-mono font-bold border border-blue-400/30 shrink-0">
                      {item.num}
                    </span>
                    <div>
                      <span className="text-xs font-bold text-white block leading-tight">
                        {item.title}
                      </span>
                      <span className="text-[11px] text-slate-300 leading-tight font-light">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-sky-200/90 font-medium leading-relaxed max-w-2xl">
                That is Unity. Not another platform to keep you scrolling. A digital home for the community you have chosen to belong to.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={SITE.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-badge-btn"
                  aria-label="Download on the Apple App Store"
                >
                  <Apple className="size-5 fill-white shrink-0" />
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
                  <svg className="size-5 shrink-0" viewBox="0 0 24 24" fill="none">
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

                <GalaxyButton
                  href="/membership"
                  variant="transparent"
                  size="default"
                  className="font-semibold"
                >
                  Apply for Membership
                </GalaxyButton>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
