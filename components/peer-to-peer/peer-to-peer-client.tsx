'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GalaxyButton } from '@/components/ui/galaxy-button'
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
  Quote,
  Check,
  Compass,
  Briefcase,
  HelpCircle,
  Lightbulb,
  Heart,
  Ban,
  UserCheck,
} from 'lucide-react'

// ─── The 6-Point Peer-to-Peer Checklist ───────────────────────────────────────
const SIX_POINT_CHECKLIST = [
  {
    number: '01',
    title: 'Core Business Mechanics',
    desc: 'What their business actually does, beyond the elevator description: products, scale, and operational realities.',
  },
  {
    number: '02',
    title: 'Target Client Persona',
    desc: 'Who their ideal customer is, specifically enough that you could recognise one immediately in your own network.',
  },
  {
    number: '03',
    title: 'Current Annual Focus',
    desc: 'What strategic projects, growth milestones and expansions they are actively working on this year.',
  },
  {
    number: '04',
    title: 'Current Bottlenecks & Challenges',
    desc: 'What is difficult, slow, or bottlenecked in their business right now where experience could help.',
  },
  {
    number: '05',
    title: 'Target Network Reach',
    desc: 'Who they are trying to reach (specific companies, sectors, supply chains or decision-makers).',
  },
  {
    number: '06',
    title: 'Hidden Superpowers & Contributions',
    desc: 'What they can offer, solve or contribute that most people in the general room do not know about.',
  },
]

// ─── 6 Operational Steps (HOW THEY WORK) ──────────────────────────────────────
const HOW_THEY_WORK_STEPS = [
  {
    number: '01',
    name: 'MEET',
    desc: 'Connect with another Peer.',
  },
  {
    number: '02',
    name: 'CONVERSE',
    desc: 'Give the conversation time and undivided attention.',
  },
  {
    number: '03',
    name: 'UNDERSTAND',
    desc: 'Learn about the person behind the business.',
  },
  {
    number: '04',
    name: 'EXPLORE',
    desc: 'Look for areas where experience, knowledge, relationships or capability may connect.',
  },
  {
    number: '05',
    name: 'CONTRIBUTE',
    desc: 'Think about what you can give before asking what you can receive.',
  },
  {
    number: '06',
    name: 'CONTINUE',
    desc: 'If there is genuine value in the relationship, let the relationship continue beyond the meeting.',
  },
]

// ─── Discoveries in a Conversation Worth Having ───────────────────────────────
const DISCOVERIES = [
  'Maybe you discover a collaborator.',
  'Maybe you discover a mentor.',
  'Maybe you discover a customer.',
  'Maybe you discover a supplier.',
  'Maybe you discover a new perspective.',
  'Maybe you simply discover someone whose journey you respect.',
]

export function PeerToPeerClient() {
  return (
    <div className="min-h-screen bg-[#FBFCFE] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-slate-200/80 bg-white/80 backdrop-blur-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-[#0062D2] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span>How We Collaborate</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">Peer-to-Peer</span>
        </div>
      </div>

      {/* ─── SECTION 1: HERO (PEER-TO-PEER: WHERE THE RELATIONSHIP IS BUILT) ─── */}
      <section className="relative pt-16 sm:pt-24 pb-16 sm:pb-24 bg-gradient-to-b from-[#F0F5FD] via-white to-[#FBFCFE] border-b border-slate-200/80 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">
                  ONE-TO-ONE COLLABORATION
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight leading-[1.08] text-slate-950">
                <span className="brand-gradient-text block">PEER-TO-PEER</span>
                <span className="text-2xl sm:text-3xl lg:text-4xl text-slate-800 font-medium mt-2 block font-sans">
                  The Circle meeting introduces you. This is where the relationship is built.
                </span>
              </h1>

              <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-light">
                <p>
                  A Circle gives you a room full of people. A Peer-to-Peer meeting gives two people the time to actually know each other.
                </p>
                <p>
                  Because collaboration rarely begins in a crowded room. It begins with a conversation:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-medium text-slate-800">
                  <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">• One entrepreneur</div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">• One entrepreneur</div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">• One hour of attention</div>
                </div>

                <p className="border-l-2 border-[#0062D2] pl-3 italic text-slate-900 font-medium text-sm sm:text-base pt-1">
                  One hour of attention, curiosity and possibility. This is where the relationship is built.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <GalaxyButton
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  className="font-medium"
                >
                  Start a Peer-to-Peer Conversation
                </GalaxyButton>

                <GalaxyButton
                  href="/unity"
                  variant="transparent-light"
                  size="lg"
                  className="font-medium"
                >
                  Member Login
                </GalaxyButton>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-white p-3">
                <div className="relative h-[380px] sm:h-[440px] rounded-2xl overflow-hidden bg-slate-900">
                  <Image
                    src="/images/lexicon-team-understanding.jpg"
                    alt="Two entrepreneurs in focused one-to-one conversation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold uppercase tracking-wider text-sky-200 border border-white/20">
                      Depth Over Crowds
                    </span>
                    <p className="font-serif text-lg sm:text-xl font-bold leading-snug">
                      "The meeting is an event. The relationship is the experience."
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 2: WHERE COLLABORATION ACTUALLY BEGINS ─────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    THE MECHANISM OF TRUST
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-1 leading-tight">
                  WHERE COLLABORATION ACTUALLY BEGINS
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                <p>
                  A Circle meeting creates the introduction. You learn someone's name. You hear what they do. You discover what they are building.
                </p>
                <p>
                  <strong>But an introduction is only the beginning.</strong> Real relationships need time. A Peer-to-Peer meeting creates that time.
                </p>
                <p>
                  It is a focused conversation between two Peers designed to move beyond the introduction — to understand the person, the business, the journey and the possibilities of working together.
                </p>
                <p className="font-serif font-semibold text-slate-900 text-base italic border-l-2 border-[#0062D2] pl-3">
                  The meeting is an event. The relationship is the experience.
                </p>
              </div>
            </div>

            {/* Right Box: What is a Peer-to-Peer (What it is NOT) */}
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#FBFCFE] border border-slate-200 shadow-sm space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100">
                    <Coffee className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-slate-950">
                    WHAT IS A PEER-TO-PEER?
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  A Peer-to-Peer is a one-to-one conversation between Peers.
                </p>

                <div className="space-y-2 text-xs font-medium text-slate-800">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200">
                    <Ban className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>It is not a sales appointment.</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200">
                    <Ban className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>It is not a pitch.</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200">
                    <Ban className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>It is not a presentation.</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200">
                    <Ban className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>It is not a transaction disguised as networking.</span>
                  </div>
                </div>

                <p className="text-xs text-[#0062D2] font-semibold pt-1">
                  It is a chance to understand another entrepreneur properly — and to allow them to understand you.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 3: THE SIX-POINT PEER-TO-PEER CHECKLIST ───────────────── */}
      <section className="py-16 sm:py-24 bg-[#FBFCFE] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 mb-1">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                THE FRAMEWORK
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-950 mt-1">
              THE SIX-POINT CHECKLIST
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2 font-light">
              A simple framework helps the conversation remain useful without making it feel scripted. Because structure creates focus, but the relationship creates the value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {SIX_POINT_CHECKLIST.map((item) => (
              <div
                key={item.number}
                className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <span className="w-8 h-8 rounded-xl bg-blue-50 text-[#0062D2] border border-blue-100 flex items-center justify-center font-mono font-bold text-xs">
                    {item.number}
                  </span>
                  <h3 className="font-serif font-bold text-slate-950 text-lg">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Download Guide Callout Banner */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-50 via-white to-sky-50 border border-blue-200/90 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                RESOURCE FOR EVERY NEW PEER
              </span>
              <h4 className="font-serif font-bold text-xl text-slate-950">
                Download the Peer-to-Peer Guide & Checklist
              </h4>
              <p className="text-xs text-slate-600 font-light">
                Give your one-to-one conversations a clear, respectful, and high-impact structure.
              </p>
            </div>

            <GalaxyButton
              href="https://unity.peersglobal.com"
              target="_blank"
              rel="noopener noreferrer"
              variant="transparent-light"
              size="default"
              icon={<Download className="w-4 h-4" />}
              className="shrink-0 self-start sm:self-auto font-semibold uppercase"
            >
              DOWNLOAD THE PEER-TO-PEER CHECKLIST
            </GalaxyButton>
          </div>

        </div>
      </section>

      {/* ─── SECTION 4: WHY ONE HOUR WITH ONE PERSON CAN MATTER MORE THAN A ROOM ─── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    DEPTH OVER FRAGMENTS
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-1 leading-tight">
                  WHY ONE HOUR WITH ONE PERSON CAN MATTER MORE THAN A ROOM
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                <p>
                  A room can introduce you to twenty people. <strong>A conversation can help you understand one.</strong> That difference matters.
                </p>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 text-xs text-slate-600">
                  <span className="font-bold text-slate-800 uppercase tracking-wider block">
                    In a group, you hear fragments:
                  </span>
                  <p>• What they do.</p>
                  <p>• Where they are from.</p>
                  <p>• What their business looks like.</p>
                </div>
                <p>
                  In a one-to-one conversation, there is room for something deeper.
                </p>
              </div>
            </div>

            {/* Right: The 6 Deeper Questions */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                IN A ONE-TO-ONE CONVERSATION, THERE IS ROOM FOR:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'What are they trying to build?',
                  'What are they struggling with?',
                  'What have they learned?',
                  'What do they need?',
                  'What can they contribute?',
                  'Where might your journeys intersect?',
                ].map((q) => (
                  <div
                    key={q}
                    className="p-3.5 rounded-2xl bg-[#FBFCFE] border border-slate-200 shadow-2xs text-xs font-medium text-slate-800 flex items-center gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0062D2] shrink-0" />
                    <span>{q}</span>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#040E24] via-[#061836] to-[#0A2558] text-white shadow-md space-y-1">
                <p className="text-xs text-sky-200 font-semibold">
                  That is where collaboration begins to become possible.
                </p>
                <p className="text-xs text-slate-300 font-light">
                  Not because someone was sold something. Because two people understood each other better.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 5: HOW THEY WORK (6 OPERATIONAL STAGES) ────────────────── */}
      <section className="py-16 sm:py-24 bg-[#FBFCFE] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 mb-1">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                THE 6 STAGES
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-950 mt-1">
              HOW THEY WORK
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2 font-light">
              Peer-to-Peer meetings are designed to make one-to-one relationship building a natural part of the PEERS GLOBAL experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {HOW_THEY_WORK_STEPS.map((s) => (
              <div
                key={s.number}
                className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex items-start gap-4"
              >
                <span className="w-10 h-10 rounded-2xl bg-[#0062D2] text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                  {s.number}
                </span>
                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-slate-950 text-base">
                    {s.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs sm:text-sm font-semibold text-slate-900 italic">
            The objective is not to complete a meeting. The objective is to create the possibility of a relationship.
          </p>

        </div>
      </section>

      {/* ─── SECTION 6: HOW MANY? & BEYOND YOUR OWN CIRCLE ──────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Box 1: HOW MANY? */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FBFCFE] border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-950">
                  HOW MANY?
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  <p>
                    One Peer-to-Peer meeting is an introduction. Repeated conversations can become a relationship.
                  </p>
                  <p>
                    The appropriate frequency and participation model follows the operating protocol established by PEERS GLOBAL.
                  </p>
                  <p className="text-slate-900 font-medium pt-1">
                    What matters is not creating a target number of meetings. What matters is creating meaningful relationships.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200/80 text-xs font-semibold text-[#0062D2]">
                Depth over volume • Continuous engagement
              </div>
            </div>

            {/* Box 2: BEYOND YOUR OWN CIRCLE */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FBFCFE] border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center border border-purple-100">
                  <Globe2 className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-950">
                  BEYOND YOUR OWN CIRCLE
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  <p>
                    Your Circle may be where you begin. It does not have to be where your relationships end.
                  </p>
                  <div className="space-y-1 pl-3 border-l-2 border-purple-400 text-xs text-slate-700 font-medium">
                    <p>• Within your Circle</p>
                    <p>• Across another Circle</p>
                    <p>• Across another industry</p>
                    <p>• Across another city</p>
                    <p>• Or with someone whose experience is completely different from yours</p>
                  </div>
                  <p className="text-slate-900 font-semibold pt-1">
                    Your Circle is your Inner Board. But your Peer network can become much larger.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200/80 text-xs font-semibold text-purple-700">
                Cross-city & cross-industry connection engine
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 7: THE PEER-TO-PEER MINDSET & A CONVERSATION WORTH HAVING ── */}
      <section className="py-16 sm:py-24 bg-[#FBFCFE] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: THE PEER-TO-PEER MINDSET */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    THE CODE OF CONDUCT
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-1 leading-tight">
                  THE PEER-TO-PEER MINDSET
                </h2>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700 font-medium">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#0062D2] shrink-0" />
                  <span>Come prepared to understand. Not to impress.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#0062D2] shrink-0" />
                  <span>Come prepared to listen. Not simply to speak.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#0062D2] shrink-0" />
                  <span>Come prepared to contribute. Not only to ask.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#0062D2] shrink-0" />
                  <span>Come with curiosity.</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 text-xs text-blue-950 font-semibold leading-relaxed">
                Give First. The relationship comes before the transaction.
              </div>
            </div>

            {/* Right: A CONVERSATION WORTH HAVING */}
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#040E24] via-[#061836] to-[#0A2558] text-white shadow-xl space-y-6">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-sky-300 flex items-center justify-center border border-white/20">
                  <Sparkles className="w-5 h-5" />
                </div>

                <h3 className="text-2xl font-serif font-bold text-white leading-snug">
                  A CONVERSATION WORTH HAVING
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  You do not need to know what will come from every conversation. You only need to give the conversation a genuine chance:
                </p>

                <div className="space-y-1.5 pl-3 border-l-2 border-sky-400 text-xs text-sky-100 font-medium">
                  {DISCOVERIES.map((d) => (
                    <p key={d}>{d}</p>
                  ))}
                </div>

                <p className="text-xs text-white font-medium pt-2">
                  Not every conversation needs to become a collaboration. But every meaningful conversation can make the community stronger.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 8: CLOSING HERO BANNER (EXPERIENCE THE COMMUNITY ONE PERSON AT A TIME) ── */}
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white py-20 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(56,189,248,0.18),transparent_50%),radial-gradient(circle_at_82%_12%,rgba(251,113,133,0.15),transparent_50%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-sky-600/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-rose-500/15 blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl flex flex-col items-start space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
              <span className="inline-block size-2 rounded-full bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent">
                NEVER BUILD ALONE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight">
              Experience the community one person at a{' '}
              <span className="bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent">
                time
              </span>
              .
            </h2>

            <div className="space-y-3.5 text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1.5">
                <p className="bg-gradient-to-r from-sky-200 via-indigo-200 to-rose-200 bg-clip-text text-transparent font-medium text-xs sm:text-sm">
                  • Circles create the room · Peer-to-Peer creates the relationship · Collaboration creates the action.
                </p>
                <p className="text-white font-bold text-xs sm:text-sm">And action is what turns community into impact.</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <GalaxyButton
                href="https://unity.peersglobal.com"
                target="_blank"
                rel="noopener noreferrer"
                variant="white-gradient"
                size="default"
                className="uppercase tracking-wider font-bold"
              >
                START A CONVERSATION
              </GalaxyButton>

              <GalaxyButton
                href="/unity"
                variant="gradient-white"
                size="default"
                className="uppercase tracking-wider font-bold"
              >
                MEMBER LOGIN
              </GalaxyButton>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
