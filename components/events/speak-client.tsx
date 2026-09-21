'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Mic,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Presentation,
  Building2,
  Users,
  Calendar,
  Sparkles,
  Send,
  ShieldCheck,
} from 'lucide-react'

export function SpeakClient() {
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    subject: '',
    whatYouBuilt: '',
    experience: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#EFF6FF] selection:text-[#0062D2] antialiased">
      {/* ─── Breadcrumb ─── */}
      <div className="border-b border-slate-200/80 bg-white/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-slate-600">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/events" className="hover:text-slate-900 transition-colors">
            Events
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">Speak at Peers Global</span>
        </div>
      </div>

      {/* ─── Hero Section ─── */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 border-b border-slate-200/80 bg-gradient-to-b from-white via-[#F6F9FD] to-[#EDF3FB] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                <Mic className="w-3.5 h-3.5 text-[#0062D2]" />
                STAGE &amp; MASTERCLASSES
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-slate-950 tracking-tight leading-[1.08] font-bold">
                Speak at Peers Global
              </h1>

              <p className="text-xl sm:text-2xl font-serif text-slate-800 font-medium leading-snug">
                Rooms of entrepreneurs who came to learn something usable.
              </p>

              <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
                We do not host generic motivational talks. Every session is led by someone who actually built the solution they are sharing.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#external-speaker-form"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0062D2] text-white text-sm font-bold hover:bg-[#1a42c0] transition-all shadow-md shadow-blue-500/20 uppercase tracking-wider"
                >
                  Speaking Enquiry
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Visual: Podium / Keynote Speaker */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group h-72 sm:h-80">
                <Image
                  src="/images/industry-director-speaker.jpg"
                  alt="Speaker on stage at Peers Global Conclave"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-mono uppercase text-amber-300 font-semibold tracking-wider block mb-1">
                    Practitioners First
                  </span>
                  <p className="font-serif italic text-lg text-white/95 leading-snug">
                    “Publishing what we decline is what makes the platform worth standing on.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Who We Book vs Who We Do Not Book ─── */}
      <section className="py-14 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950">
              Our Editorial Standard
            </h2>
            <p className="text-sm text-slate-600">
              Clear rules protect the time and respect of every business owner in the audience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Who we book */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-emerald-200/80 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-950">
                  Who we book
                </h3>
              </div>

              <p className="text-base font-serif italic text-slate-800 font-medium">
                People who have done the thing.
              </p>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                  <span>A Peer who solved a specific problem in their own business.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                  <span>An industry leader who has navigated the transition everyone else in the room is facing.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                  <span>Someone with specific, practical knowledge worth twenty minutes of an entrepreneur&apos;s full attention.</span>
                </li>
              </ul>
            </div>

            {/* Who we do not book */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-rose-200/80 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100">
                  <XCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-950">
                  Who we do not book
                </h3>
              </div>

              <p className="text-base font-serif italic text-rose-900 font-medium">
                Zero tolerance for sales pitches.
              </p>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                  <span>Motivational speakers who rely on emotional hype without tactical business application.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                  <span>Anyone whose session is disguised marketing or a subtle route to selling from the stage.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                  <span>Anyone speaking about something they have studied academically rather than built in the real market.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Where You Would Speak (Dark Constellation Theme) ─── */}
      <section className="relative py-20 md:py-24 border-b border-slate-800 bg-gradient-to-br from-[#070D18] via-[#0B1528] to-[#0A101D] text-white overflow-hidden">
        {/* Constellation visual elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Community Stages
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Where you would speak
            </h2>
            <p className="text-sm text-slate-300">
              Multiple formats built for depth, practical takeaways, and peer interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: 'Impact Mentor Masterclasses',
                desc: 'Twenty minutes, one single subject, inside a monthly Circle meeting.',
                icon: Presentation,
              },
              {
                title: 'MindMeld & City Gatherings',
                desc: 'Cross-Circle rooms bringing 150+ diverse sector founders together.',
                icon: Users,
              },
              {
                title: 'Regional Conclaves',
                desc: 'A full state or territory convened in one hall for policy & scale panels.',
                icon: Building2,
              },
              {
                title: 'The Annual Summit',
                desc: 'The entire national community assembled under one roof once a year.',
                icon: Calendar,
              },
              {
                title: 'Peers Candid Talks',
                desc: "The community's own filmed broadcast platform on Vyapaar Jagat TV.",
                icon: Mic,
              },
            ].map((stage, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl border border-slate-700/60 bg-gradient-to-br from-[#0B1528] via-[#0F1D38] to-[#070D18] backdrop-blur-sm shadow-xl space-y-3 hover:border-cyan-500/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-2xl bg-cyan-950/80 text-cyan-300 flex items-center justify-center border border-cyan-800/80 shadow-inner">
                  <stage.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-serif font-bold text-white leading-snug">
                  {stage.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── For Peers Section ─── */}
      <section className="py-12 border-b border-slate-200/80 bg-[#FAFBFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                Internal Members
              </span>
              <h2 className="text-2xl font-serif font-bold text-slate-950">
                For Existing Peers
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                Teaching is one of the ten Forms of Collaboration. It counts as one life impacted on your verified community record.
              </p>
              <p className="text-xs text-slate-500">
                To propose a session, speak to your Circle&apos;s Skill Development Leader or your Circle Director.
              </p>
            </div>

            <Link
              href="/culture-and-code"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-50 border border-blue-100 text-xs sm:text-sm font-bold text-[#0062D2] hover:bg-blue-100 transition-all uppercase tracking-wider shrink-0"
            >
              The 10 Forms of Collaboration
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── For External Speakers Form ─── */}
      <section id="external-speaker-form" className="py-16 border-b border-slate-200/80 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
              Direct Application
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950">
              For External Speakers
            </h2>
            <p className="text-sm text-slate-600">
              Submit your topic, operational background, and actionable takeaways below. Our Events &amp; Impact committee reviews submissions weekly.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-[#FAFBFD] border border-slate-200/90 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900">
                  Enquiry Received
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you. Our curation committee will review your background and get in touch within five working days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Patel"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0062D2]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Organisation / Business *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Industrial Systems"
                      value={formData.organisation}
                      onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0062D2]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">Subject / Topic *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Navigating Working Capital Cycles During 3x Growth"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0062D2]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">What have you personally built? *</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Briefly describe your company, scale, operational milestones, and real-world results."
                    value={formData.whatYouBuilt}
                    onChange={(e) => setFormData({ ...formData, whatYouBuilt: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0062D2]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">Relevant Experience *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 15 years manufacturing exporter, raised Series A, exited JV"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0062D2]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">Message / Key Takeaways for the Room</label>
                  <textarea
                    rows={3}
                    placeholder="What specific 2-3 lessons can the entrepreneurs apply to their business immediately?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0062D2]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#0062D2] text-white text-xs sm:text-sm font-bold hover:bg-[#1a42c0] transition-all uppercase tracking-wider shadow-md shadow-blue-500/20 flex items-center justify-center gap-2"
                  >
                    Submit Speaking Enquiry
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
