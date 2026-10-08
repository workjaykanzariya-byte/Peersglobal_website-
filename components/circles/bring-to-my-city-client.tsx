'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { GalaxyButton } from '@/components/ui/galaxy-button'
import {
  ArrowRight,
  ChevronRight,
  MapPin,
  Compass,
  Send,
  CheckCircle2,
  Sparkles,
  Award,
  Check,
} from 'lucide-react'

const LOCAL_KNOWLEDGE_POINTS = [
  'The entrepreneurs already building in the city',
  'The relationships that already exist',
  'The local business culture',
  'The opportunities for collaboration',
  'The people who may be ready to contribute',
  'The character of the community itself'
]

const STARTING_STEPS = [
  { step: '01', title: 'Discover', desc: 'Identify local builders & unmet needs' },
  { step: '02', title: 'Connect', desc: 'Initiate 1-on-1 curiosity conversations' },
  { step: '03', title: 'Gather', desc: 'Host the first informal founder roundtable' },
  { step: '04', title: 'Build', desc: 'Establish Circle charters & governance' },
  { step: '05', title: 'Contribute', desc: 'Unlock continuous bilateral value & impact' }
]

const IS_THIS_FOR_YOU = [
  'You believe entrepreneurs benefit from meaningful peer relationships.',
  'You enjoy bringing people together.',
  'You understand your local business community.',
  'You are willing to contribute time, energy and relationships.',
  'You see possibility where others see an empty space.'
]

const BENEFIT_VERBS = [
  'Connect.',
  'Learn.',
  'Collaborate.',
  'Contribute.',
  'Grow.',
  'Impact.'
]

export function BringToMyCityClient() {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    state: '',
    country: 'India',
    email: '',
    phone: '',
    whatBringsYou: 'I want PEERS GLOBAL in my city',
    wouldYouFound: 'Yes',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-[#0062D2]">
      {/* ── Breadcrumb Navigation ── */}
      <div className="border-b border-slate-200/70 bg-white/90 backdrop-blur-md sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-slate-500 font-medium">
            <Link href="/" className="hover:text-[#0062D2] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/circles" className="hover:text-[#0062D2] transition-colors">
              Circles
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold">Bring Peers to My City</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-[#0062D2] border border-blue-200">
              <MapPin className="w-3.5 h-3.5" />
              City Expansion
            </span>
          </div>
        </div>
      </div>

      {/* ── Signature Hero Section (Home & Circles Master Design Layout) ── */}
      <section className="relative overflow-hidden bg-[#FAFBFD] text-slate-900 pt-6 sm:pt-10 pb-12 sm:pb-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Hero Banner with Smooth Left-Fading Media/Video Backdrop */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[36px] bg-white border border-slate-200/80 shadow-sm min-h-[520px] lg:min-h-[580px] flex items-center">
            
            {/* Media Background Layer (Right ~60% fading into white on the left) */}
            <div
              className="absolute top-0 right-0 bottom-0 w-full sm:w-[65%] lg:w-[60%] overflow-hidden pointer-events-none"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.5) 25%, black 50%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.5) 25%, black 50%)',
              }}
            >
              {/* Active Video Background */}
              <video
                src="/videos/homepage-hero-bg.mp4"
                poster="/images/circles-hero-new.jpg"
                autoPlay
                loop
                muted
                playsInline
                className="size-full object-cover object-center"
              />

              {/* Seamless gradient overlays for the signature misty fade */}
              <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white via-white/85 via-30% to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none" />

              {/* Top-Right Script Typography */}
              <div className="absolute top-6 sm:top-8 right-6 sm:right-8 z-20 text-right drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] pointer-events-none select-none">
                <p className="text-xl sm:text-2xl text-white/95 leading-tight" style={{ fontFamily: 'var(--font-script)' }}>
                  New Cities
                </p>
                <p className="text-xl sm:text-2xl text-white/95 leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Local Leaders
                </p>
                <p className="text-2xl sm:text-3xl text-amber-300 font-medium leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Global Impact
                </p>
              </div>

              {/* Bottom-Right Frosted Glass Pill */}
              <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-20 pointer-events-none select-none hidden sm:block">
                <div className="rounded-xl border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2.5 shadow-lg text-left">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/70">
                    EXPANSION CHARTERS
                  </p>
                  <p className="text-xs font-bold tracking-wider text-white">
                    BRING PEERS TO YOUR CITY
                  </p>
                </div>
              </div>
            </div>

            {/* Left Content Area */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl lg:max-w-2xl flex flex-col items-start text-left">
                
                {/* Eyebrow with brand gradient bar */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-0.5 w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    EXPANSION CHARTERS
                  </span>
                </div>

                {/* H1 Heading */}
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-bold text-slate-950 tracking-tight leading-[1.12] mb-4">
                  Bring PEERS to My City — <br />
                  <span className="italic bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent font-medium">
                    Your city may be ready for its Circle.
                  </span>
                </h1>

                {/* Subtitle & Descriptions */}
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-6 max-w-lg">
                  PEERS GLOBAL is growing through people who believe entrepreneurs should not build alone. Perhaps your city already has a Circle. Perhaps it does not.
                </p>

                {/* Featured Highlight Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50/90 to-indigo-50/50 border border-blue-100/80 mb-8 max-w-lg">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0062D2] mb-1">
                    <Compass className="w-4 h-4 text-[#0062D2]" />
                    The map is not finished.
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    And that means there is still room for someone to help shape what comes next in your region.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
                  <GalaxyButton
                    href="#registration-form"
                    variant="primary"
                    size="md"
                  >
                    Register Your Interest
                  </GalaxyButton>

                  <GalaxyButton
                    href="#two-ways"
                    variant="transparent-light"
                    size="md"
                    showIcon={false}
                  >
                    Two Ways to Bring Peers
                  </GalaxyButton>

                  <GalaxyButton
                    href="#why-someone-local"
                    variant="transparent-light"
                    size="md"
                    showIcon={false}
                  >
                    Why Someone Local
                  </GalaxyButton>
                </div>

                {/* Quick Info Bar */}
                <div className="flex items-center gap-6 text-xs text-slate-500 pt-2 border-t border-slate-200/80 w-full max-w-lg">
                  <div className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Open in Tier 1, 2 & 3 Cities</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <Sparkles className="w-4 h-4 text-[#0062D2]" />
                    <span>Curated Chapter Support</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── THE MAP IS NOT FINISHED & WHAT HAPPENS WHEN YOU REGISTER? ── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">
                    Living Movement
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-1 mb-3">
                  THE MAP IS NOT FINISHED
                </h2>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                  Every Circle begins somewhere. A city does not become a PEERS GLOBAL city because it appears on a map.
                </p>
              </div>

              <div className="space-y-3 text-sm sm:text-base text-slate-700">
                <p className="font-bold text-slate-900">It becomes one when people come together:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    'When entrepreneurs begin meeting.',
                    'When relationships begin forming.',
                    'When experience begins being shared.',
                    'When collaboration becomes possible.',
                    'And when someone takes the first step.',
                  ].map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-[#F8FAFD] border border-slate-200 flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] shrink-0" />
                      <span className="text-xs sm:text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50/80 to-rose-50/50 border border-blue-100">
                <p className="text-base font-bold bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">
                  That someone could be you.
                </p>
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFBFD] border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">
                    Expression of Interest
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-950">
                  WHAT HAPPENS WHEN YOU REGISTER?
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Start with an expression of interest. You do not need to have everything figured out.
                </p>
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <p className="text-base sm:text-lg font-serif italic text-slate-900 text-center">
                    “I would like to see PEERS GLOBAL in my city.”
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Your registration helps us understand where interest is emerging and where a local community may have the potential to develop.
                </p>
              </div>

              <a
                href="#registration-form"
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white font-bold text-xs uppercase tracking-wider text-center transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                Register your interest →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── TWO WAYS TO BRING PEERS TO YOUR CITY ── */}
      <section id="two-ways" className="py-16 sm:py-24 bg-[#F8FAFD] border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">
                Engagement Pathways
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950">
              TWO WAYS TO BRING PEERS TO YOUR CITY
            </h2>
            <p className="text-slate-700 text-base sm:text-lg">
              Whether you want to signal local interest or take active leadership in founding the chapter, there is a clear beginning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 01 — REGISTER YOUR INTEREST */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-slate-800 bg-slate-100 border border-slate-200 px-3 py-1 rounded-lg">
                    PATHWAY 01
                  </span>
                  <Compass className="w-5 h-5 text-slate-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-950">
                  01 — REGISTER YOUR INTEREST
                </h3>
                <p className="text-sm font-bold bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">
                  You would like PEERS GLOBAL to come to your city.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  You may already know entrepreneurs who would value a meaningful peer community — or you may simply believe that your city needs one. Start by telling us.
                </p>
              </div>

              <a
                href="#registration-form"
                onClick={() => setFormData((prev) => ({ ...prev, whatBringsYou: 'I want PEERS GLOBAL in my city', wouldYouFound: 'Not at this stage' }))}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1D4ED8] hover:text-[#E11D48] transition-colors"
              >
                Register Interest →
              </a>
            </div>

            {/* 02 — FOUND THE FIRST CIRCLE */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-slate-900 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-white bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] px-3 py-1 rounded-lg">
                    PATHWAY 02 — LEADERSHIP
                  </span>
                  <Award className="w-5 h-5 text-[#E11D48]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-950">
                  02 — FOUND THE FIRST CIRCLE
                </h3>
                <p className="text-sm font-bold bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">
                  You do not just want PEERS GLOBAL in your city. You would consider helping build the first Circle.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  That is a different kind of beginning. It means taking responsibility for bringing people together and helping create the conditions in which relationships can grow.
                </p>

                <div className="p-4 rounded-xl bg-[#F8FAFD] border border-slate-200">
                  <span className="text-xs font-bold text-slate-800 block mb-2">
                    Would you consider founding the first Circle in your city?
                  </span>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, whatBringsYou: 'I would consider founding the first Circle', wouldYouFound: 'Yes' }))
                        const el = document.getElementById('registration-form')
                        if (el) el.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="px-3 py-1.5 rounded-lg bg-[#0062D2] text-white font-bold hover:bg-[#0051b0] transition-colors"
                    >
                      Yes, I would consider it
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, whatBringsYou: 'I would like to understand the opportunity', wouldYouFound: 'Maybe — I would like to understand more' }))
                        const el = document.getElementById('registration-form')
                        if (el) el.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      I would like to learn more first
                    </button>
                  </div>
                </div>
              </div>

              <a
                href="#registration-form"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0062D2] hover:underline"
              >
                Apply to Found a Circle →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CITIES NEED SOMEONE LOCAL ── */}
      <section id="why-someone-local" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">
                Ground Realities
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950">
              WHY CITIES NEED SOMEONE LOCAL
            </h2>
            <p className="text-slate-700 text-base sm:text-lg">
              Community cannot be built from a distance.
            </p>
            <p className="text-slate-600 text-sm sm:text-base">
              A Circle is ultimately about people who meet, understand one another and build relationships over time. Someone local can see what an outside organisation cannot:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCAL_KNOWLEDGE_POINTS.map((point, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F8FAFD] border border-slate-200 flex items-start gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-50 to-rose-50 text-slate-900 border border-slate-200 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  0{idx + 1}
                </div>
                <span className="text-sm font-medium text-slate-800">{point}</span>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-50/70 via-white to-rose-50/50 border border-slate-200 text-center max-w-3xl mx-auto space-y-1 shadow-2xs">
            <p className="text-xl font-serif font-bold text-slate-950">
              Local knowledge creates local belonging.
            </p>
            <p className="text-sm text-slate-600">
              That is why the first step in a city may begin with someone who already calls it home.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT DOES IT MEAN TO START SOMETHING? & IS THIS FOR YOU? ── */}
      <section className="py-16 sm:py-24 bg-[#F8FAFD] border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* WHAT DOES IT MEAN TO START SOMETHING? */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">
                    Organic Foundation
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 mt-1 mb-2">
                  WHAT DOES IT MEAN TO START SOMETHING?
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  It begins with people — not infrastructure. You do not need to begin with a perfect plan.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-1 font-medium shadow-2xs">
                <p>You begin with <strong className="text-slate-950">curiosity</strong>.</p>
                <p>Then <strong className="text-slate-950">conversation</strong>.</p>
                <p>Then <strong className="text-slate-950">people</strong>.</p>
                <p>Then <strong className="text-slate-950">relationships</strong>.</p>
                <p className="font-bold bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">And, over time, a Circle can begin to take shape.</p>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block">
                  The Evolutionary Sequence:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                  {STARTING_STEPS.map((stg) => (
                    <div key={stg.step} className="p-3 rounded-xl bg-white border border-slate-200 text-center">
                      <span className="text-xs font-bold bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent block font-mono">{stg.step}</span>
                      <span className="text-xs font-bold text-slate-900 block mt-0.5">{stg.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* IS THIS FOR YOU? */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">
                    Founder Profile
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 mt-1 mb-2">
                  IS THIS FOR YOU?
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm">
                  You may be ready to explore bringing PEERS GLOBAL to your city if:
                </p>
              </div>

              <ul className="space-y-3">
                {IS_THIS_FOR_YOU.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50/70 to-rose-50/40 border border-slate-200">
                <p className="text-xs sm:text-sm font-bold text-slate-950">
                  You do not need to be the most prominent entrepreneur in your city.
                </p>
                <p className="text-xs bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent mt-1 font-semibold">
                  You need to care about the people you hope to bring together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BRING PEERS TO MY CITY (FORM) ── */}
      <section id="registration-form" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent">
                City Registration
              </span>
              <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950">
              BRING PEERS TO MY CITY
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Tell us where the possibility begins.
            </p>
          </div>

          <div className="bg-[#FAFBFD] rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-blue-50 border border-blue-200 text-[#0062D2] rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-950">Registration Received</h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                  Thank you for signaling interest for <strong className="text-slate-950">{formData.city}</strong>. Our expansion team will review your submission and initiate a dialogue.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  Submit Another City
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-xs sm:text-sm">
                <div className="space-y-1.5">
                  <label className="font-bold text-slate-800">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#0062D2] text-slate-900"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-800">City *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your city"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#0062D2] text-slate-900"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-800">State / Region *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter state / region"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#0062D2] text-slate-900"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-800">Country *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter country"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#0062D2] text-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-800">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#0062D2] text-slate-900"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-800">Phone Number *</label>
                    <input
                      type="tel"
                      inputMode="numeric"
                      maxLength={10}
                      pattern="[0-9]{10}"
                      required
                      placeholder="9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#0062D2] text-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-800">What brings you here? *</label>
                    <select
                      value={formData.whatBringsYou}
                      onChange={(e) => setFormData({ ...formData, whatBringsYou: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#0062D2] text-slate-900"
                    >
                      <option value="I want PEERS GLOBAL in my city">I want PEERS GLOBAL in my city</option>
                      <option value="I would consider founding the first Circle">I would consider founding the first Circle</option>
                      <option value="I would like to understand the opportunity">I would like to understand the opportunity</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-800">Would you consider founding the first Circle? *</label>
                    <select
                      value={formData.wouldYouFound}
                      onChange={(e) => setFormData({ ...formData, wouldYouFound: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#0062D2] text-slate-900"
                    >
                      <option value="Yes">Yes</option>
                      <option value="Maybe — I would like to understand more">Maybe — I would like to understand more</option>
                      <option value="Not at this stage">Not at this stage</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-slate-800">
                    Tell us a little about your city and what you are hoping to build *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Your message regarding your city's entrepreneurial landscape..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#0062D2] text-slate-900"
                  />
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
                  <p className="text-xs text-slate-500">
                    No pressure. No forced commitment. Just the possibility of beginning something meaningful.
                  </p>
                  <GalaxyButton
                    type="submit"
                    disabled={isSubmitting}
                    variant="primary"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    {isSubmitting ? 'Submitting Registration...' : 'Submit'}
                  </GalaxyButton>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FINAL HOME-THEMED CALL TO ACTION ── */}
      <section className="relative isolate overflow-hidden bg-[#040F24] text-white py-20 md:py-28">
        {/* Deep celestial radial gradients & luminous aura */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(0,98,210,0.25),transparent_42%),radial-gradient(circle_at_82%_12%,rgba(56,189,248,0.18),transparent_36%),linear-gradient(115deg,#020817_0%,#071a3d_48%,#06132d_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-blue-600/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-sky-400/15 blur-3xl"
        />

        {/* Subtle geometric orbital line art */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-[min(58vw,760px)] opacity-35">
          <svg viewBox="0 0 760 520" fill="none" className="h-full w-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M760 40C555 45 405 145 375 310C355 423 265 493 70 520" stroke="currentColor" strokeWidth="1" className="text-blue-300/30" />
            <path d="M760 120C590 125 470 205 445 335C424 442 335 500 180 520" stroke="currentColor" strokeWidth="1" strokeDasharray="5 8" className="text-sky-200/25" />
            <path d="M760 215C640 220 565 278 540 370C519 446 470 490 390 520" stroke="currentColor" strokeWidth="1" className="text-blue-200/20" />
            <circle cx="540" cy="370" r="4" fill="currentColor" className="text-sky-300/60" />
            <circle cx="540" cy="370" r="13" stroke="currentColor" strokeWidth="1" className="text-sky-300/25" />
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2.5">
              <span className="h-[1.5px] w-6 bg-white/70" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
                FINAL CALL TO ACTION
              </span>
              <span className="h-[1.5px] w-6 bg-white/70" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15]">
              Think your city is ready?
            </h2>
            <p className="text-lg sm:text-xl text-cyan-200 font-serif italic max-w-xl mx-auto">
              Every Circle begins with a first step.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            <GalaxyButton
              href="#registration-form"
              variant="primary"
              size="md"
            >
              Register your interest
            </GalaxyButton>
            <GalaxyButton
              href="#registration-form"
              onClick={() => setFormData((prev) => ({ ...prev, whatBringsYou: 'I would consider founding the first Circle', wouldYouFound: 'Yes' }))}
              variant="transparent"
              size="md"
            >
              Explore founding the first Circle
            </GalaxyButton>
          </div>
        </div>
      </section>
    </div>
  )
}
