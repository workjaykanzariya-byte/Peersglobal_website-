'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePageMedia } from '@/lib/hooks/use-page-media'
import {
  ArrowRight,
  Users,
  Building2,
  Globe2,
  TrendingUp,
  Sparkles,
  Quote,
  CheckCircle2,
  MapPin,
  Send,
  Compass,
  Briefcase,
  Layers,
  Award,
  Check,
  ChevronDown,
  HelpCircle
} from 'lucide-react'

// ─── 9 Forms of Leadership Experience ─────────────────────────────────────────
const LEADERSHIP_FORMS = [
  'Built a business',
  'Led a team',
  'Founded an initiative',
  'Built a professional community',
  'Created an industry network',
  'Brought entrepreneurs together',
  'Led a project beyond your own organisation',
  'Helped develop other entrepreneurs',
  'Taken responsibility for something larger than your own role',
]

// ─── Ecosystem Routing Steps ──────────────────────────────────────────────────
const ROUTING_STRUCTURE = [
  {
    target: 'By City',
    leader: 'Executive Director',
    desc: 'Local territory & city-level ecosystem stewardship.',
    icon: MapPin,
    color: 'border-blue-200 bg-blue-50/70 text-[#0062D2]',
  },
  {
    target: 'By Industry',
    leader: 'Industry Director',
    desc: 'Sector-wide ecosystem orchestration & domain expertise.',
    icon: TrendingUp,
    color: 'border-purple-200 bg-purple-50/70 text-purple-700',
  },
  {
    target: 'Otherwise',
    leader: 'Central Team',
    desc: 'Global strategy, Advisory Board alignment & cross-regional synergy.',
    icon: Globe2,
    color: 'border-amber-200 bg-amber-50/70 text-amber-700',
  },
]

// ─── Before You Submit Reflection Questions ───────────────────────────────────
const REFLECTION_QUESTIONS = [
  'What have I built?',
  'Who have I helped?',
  'What responsibility have I taken beyond myself?',
  'What could I contribute to a community of entrepreneurs?',
  'What would I be willing to take responsibility for?',
]

export function ApplyToLeadClient() {
  const media = usePageMedia('apply-to-lead')

  // Form State
  const [formData, setFormData] = useState({
    // Tell us about yourself
    fullName: '',
    email: '',
    phone: '',
    city: '',
    // Your Business
    businessName: '',
    industry: '',
    businessDescription: '',
    yearsBuilding: '',
    // Leadership Experience
    selectedForms: [] as string[],
    leadershipExperienceDetails: '',
    // The Question that Matters
    whatYouBuilt: '',
    whatYouLed: '',
    whatYouLearned: '',
    peopleLesson: '',
    // Circle Founding (Optional)
    isFoundingCircle: 'No',
    foundingCity: '',
    foundingIndustry: '',
    networkSize: '',
    // Anything Else
    anythingElse: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const toggleLeadershipForm = (form: string) => {
    setFormData((prev) => {
      const exists = prev.selectedForms.includes(form)
      return {
        ...prev,
        selectedForms: exists
          ? prev.selectedForms.filter((item) => item !== form)
          : [...prev.selectedForms, form],
      }
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      const formTop = document.getElementById('application-form')
      if (formTop) {
        formTop.scrollIntoView({ behavior: 'smooth' })
      }
    }, 800)
  }

  const handleScrollToForm = () => {
    const el = document.getElementById('application-form')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-[#FBFCFE] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* ─── HERO SECTION ───────────────────────────────────────────────────── */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 bg-gradient-to-b from-[#F0F5FD] via-white to-[#FBFCFE] border-b border-slate-200/80 overflow-hidden">
        {/* Subtle Background Radial Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-rose-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Manifesto & Value */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">
                  LEADERSHIP APPLICATION
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight leading-[1.08]">
                <span className="brand-gradient-text block">APPLY TO LEAD</span>
                <span className="text-2xl sm:text-3xl lg:text-4xl text-slate-800 font-medium mt-2 block font-sans">
                  Leadership begins when contribution becomes responsibility.
                </span>
              </h1>

              <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-light">
                <p>
                  Leadership at <strong>PEERS GLOBAL</strong> is not simply about receiving a title.
                  It begins with a willingness to take responsibility for something beyond your own business.
                </p>

                {/* Scope Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    'A Circle',
                    'A group of entrepreneurs',
                    'An industry',
                    'A city',
                    'A wider community',
                  ].map((scope) => (
                    <span
                      key={scope}
                      className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs sm:text-sm font-medium text-slate-800 shadow-xs"
                    >
                      {scope}
                    </span>
                  ))}
                </div>

                <p className="pt-2">
                  If you have built something, led something, brought people together or created meaningful contribution beyond your own business, there may be a place for that experience here.
                </p>
                <p className="text-slate-900 font-medium italic border-l-2 border-[#0062D2] pl-3">
                  This form is the beginning of that conversation.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={handleScrollToForm}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white font-medium text-sm shadow-md hover:shadow-lg hover:opacity-95 transition-all duration-200 cursor-pointer group"
                >
                  <span>Begin Application Form</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white text-slate-800 font-medium text-sm border border-slate-300 shadow-xs hover:bg-slate-50 transition-all duration-200"
                >
                  <span>Open Unity App</span>
                </a>
              </div>
            </div>

            {/* Right Column: Hero Visual Imagery */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-white p-3">
                <div className="relative h-[380px] sm:h-[440px] rounded-2xl overflow-hidden">
                  <Image
                    src={media.hero || '/images/leadership-hero.jpg'}
                    alt="Peers Global leaders collaborating and building community"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold uppercase tracking-wider text-sky-200 border border-white/20">
                      The Leadership Ethos
                    </span>
                    <p className="font-serif text-lg sm:text-xl font-bold leading-snug">
                      "Leadership is not about being above others. It is about being useful to others."
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── APPLICATION FORM & SECTIONS CONTAINER ─────────────────────────── */}
      <section id="application-form" className="py-16 sm:py-24 bg-white border-b border-slate-200/80 scroll-mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {submitted ? (
            /* Success State */
            <div className="bg-[#FBFCFE] rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xl text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
                <Check className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-slate-900">
                Application Received
              </h2>
              <p className="text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
                Thank you, <strong>{formData.fullName}</strong>. Your leadership application has been submitted. 
                Your journey begins with a conversation, and our leadership team will review your submission according to your city and industry routing.
              </p>
              
              <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-100 max-w-md mx-auto text-left space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-900 block">
                  What to expect next:
                </span>
                <p className="text-xs text-blue-950/80 leading-relaxed">
                  • <strong>City Routing:</strong> Executive Director review<br />
                  • <strong>Industry Routing:</strong> Industry Director review<br />
                  • <strong>Direct Contact:</strong> A conversation within 48-72 hours
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-white text-slate-800 text-xs font-semibold border border-slate-300 hover:bg-slate-50 cursor-pointer"
                >
                  Edit or submit another response
                </button>
              </div>
            </div>
          ) : (
            /* Main Comprehensive Application Form */
            <form onSubmit={handleSubmit} className="space-y-12">
              
              {/* ── PART 1: TELL US ABOUT YOURSELF ── */}
              <div className="bg-[#FBFCFE] rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="h-[2px] w-5 bg-[#0062D2] rounded-full" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                      SECTION 01
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950">
                    TELL US ABOUT YOURSELF
                  </h2>
                  <p className="text-sm text-slate-600 mt-1 font-light">
                    We would like to understand the entrepreneur behind the application.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 border-t border-slate-200/80">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Vikram Malhotra"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                      Contact Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="vikram@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                      Contact Phone / Mobile <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                      City of Residence / Base <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="e.g. Mumbai, Bangalore, Dubai, London"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* ── PART 2: YOUR BUSINESS ── */}
              <div className="bg-[#FBFCFE] rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="h-[2px] w-5 bg-[#0062D2] rounded-full" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                      SECTION 02
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950">
                    YOUR BUSINESS
                  </h2>
                  <p className="text-sm text-slate-600 mt-1 font-light">
                    Tell us about the business you have built.
                  </p>
                </div>

                <div className="space-y-4 text-xs text-slate-500 italic bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                  The purpose is not to create a résumé. It is to understand the experience you may bring into the community.
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 border-t border-slate-200/80">
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                      Business Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      required
                      value={formData.businessName}
                      onChange={handleInputChange}
                      placeholder="Company / Enterprise Name"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                      Industry / Sector <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="industry"
                      required
                      value={formData.industry}
                      onChange={handleInputChange}
                      placeholder="e.g. Technology, Manufacturing, Healthcare"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                      What does your business do? <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      name="businessDescription"
                      required
                      rows={3}
                      value={formData.businessDescription}
                      onChange={handleInputChange}
                      placeholder="Briefly describe your products, services, scale, or market..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                      How long have you been building it? <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="yearsBuilding"
                      required
                      value={formData.yearsBuilding}
                      onChange={handleInputChange}
                      placeholder="e.g. 7 years (Founded 2017)"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* ── PART 3: YOUR LEADERSHIP EXPERIENCE ── */}
              <div className="bg-[#FBFCFE] rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="h-[2px] w-5 bg-[#0062D2] rounded-full" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                      SECTION 03
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950">
                    YOUR LEADERSHIP EXPERIENCE
                  </h2>
                  <p className="text-sm text-slate-600 mt-1 font-light">
                    Leadership can take many forms. Tell us about the leadership experience that has shaped you.
                  </p>
                </div>

                <div className="space-y-3 pt-2 border-t border-slate-200/80">
                  <label className="block text-xs font-semibold text-slate-800 mb-2">
                    Perhaps you have (select all that describe your background):
                  </label>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {LEADERSHIP_FORMS.map((form) => {
                      const isChecked = formData.selectedForms.includes(form)
                      return (
                        <button
                          type="button"
                          key={form}
                          onClick={() => toggleLeadershipForm(form)}
                          className={`flex items-start gap-3 p-3 rounded-xl text-left text-xs font-medium transition-all cursor-pointer border ${
                            isChecked
                              ? 'bg-blue-50/90 border-blue-400 text-[#0062D2] shadow-xs'
                              : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                          }`}
                        >
                          <div
                            className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                              isChecked
                                ? 'bg-[#0062D2] border-[#0062D2] text-white'
                                : 'border-slate-300 bg-white'
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span>{form}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div className="pt-2">
                  <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                    Tell us about the leadership experience that has shaped you <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    name="leadershipExperienceDetails"
                    required
                    rows={4}
                    value={formData.leadershipExperienceDetails}
                    onChange={handleInputChange}
                    placeholder="Share the moments, challenges, initiatives or responsibilities that define your approach to leadership..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* ── PART 4: THE QUESTION THAT MATTERS ── */}
              <div className="bg-gradient-to-br from-blue-50/90 via-slate-50 to-white rounded-3xl p-6 sm:p-10 border-2 border-blue-200/90 shadow-md space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="h-[2px] w-5 bg-[#E11D48] rounded-full" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#E11D48]">
                      KEY QUESTION
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 leading-snug">
                    THE QUESTION THAT MATTERS
                  </h2>
                  <p className="text-base font-serif font-semibold text-[#0062D2] mt-1">
                    Have you built or led something beyond your own business?
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/80 border border-blue-100 space-y-2 text-xs text-slate-600 leading-relaxed">
                  <p>
                    <strong>This is not a test. It is a question about contribution.</strong>
                  </p>
                  <p>
                    We want to understand whether you have already experienced the responsibility of building or leading something that extends beyond your individual business interests.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 border-t border-blue-200/60">
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                      1. Tell us what you built <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      name="whatYouBuilt"
                      required
                      rows={3}
                      value={formData.whatYouBuilt}
                      onChange={handleInputChange}
                      placeholder="What initiative, group, community or platform did you create?"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                      2. Tell us what you led <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      name="whatYouLed"
                      required
                      rows={3}
                      value={formData.whatYouLed}
                      onChange={handleInputChange}
                      placeholder="What team, mission or collective effort did you guide?"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                      3. Tell us what you learned <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      name="whatYouLearned"
                      required
                      rows={3}
                      value={formData.whatYouLearned}
                      onChange={handleInputChange}
                      placeholder="What were the core lessons from that experience?"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                      4. What that experience taught you about people <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      name="peopleLesson"
                      required
                      rows={3}
                      value={formData.peopleLesson}
                      onChange={handleInputChange}
                      placeholder="What insights did you gain about human relationships, trust, and alignment?"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* ── PART 5: IF YOU ARE THINKING ABOUT FOUNDING A CIRCLE ── */}
              <div className="bg-[#FBFCFE] rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="h-[2px] w-5 bg-amber-500 rounded-full" />
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                      OPTIONAL TRACK
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950">
                    IF YOU ARE THINKING ABOUT FOUNDING A CIRCLE
                  </h2>
                  <p className="text-sm text-slate-600 mt-1 font-light">
                    Leadership can begin with bringing people together.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-semibold text-slate-800">
                      Are you interested in founding a new Circle?
                    </span>
                    <div className="flex items-center gap-4 text-xs font-medium">
                      <label className="flex items-center gap-1.5 cursor-pointer">
                        <input
                          type="radio"
                          name="isFoundingCircle"
                          value="Yes"
                          checked={formData.isFoundingCircle === 'Yes'}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span>Yes</span>
                      </label>
                      <label className="flex items-center gap-1.5 cursor-pointer">
                        <input
                          type="radio"
                          name="isFoundingCircle"
                          value="No"
                          checked={formData.isFoundingCircle === 'No'}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span>No / Exploring other roles</span>
                      </label>
                    </div>
                  </div>

                  {formData.isFoundingCircle === 'Yes' && (
                    <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-4 pt-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-amber-950 mb-1">
                            City — Where would you like to build the Circle?
                          </label>
                          <input
                            type="text"
                            name="foundingCity"
                            value={formData.foundingCity}
                            onChange={handleInputChange}
                            placeholder="Target City / Region"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-amber-200 text-sm text-slate-900 focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-amber-950 mb-1">
                            Industry — Which community would you bring together?
                          </label>
                          <input
                            type="text"
                            name="foundingIndustry"
                            value={formData.foundingIndustry}
                            onChange={handleInputChange}
                            placeholder="Target Sector or Cross-Industry"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-amber-200 text-sm text-slate-900 focus:outline-none"
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <label className="block text-xs font-semibold text-amber-950 mb-1">
                            Your Network — How many entrepreneurs could you realistically convene for first conversations?
                          </label>
                          <select
                            name="networkSize"
                            value={formData.networkSize}
                            onChange={handleInputChange}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-amber-200 text-sm text-slate-900 focus:outline-none"
                          >
                            <option value="">Select an estimate</option>
                            <option value="10–20 entrepreneurs">10–20 entrepreneurs</option>
                            <option value="25–50 entrepreneurs (Full Circle base)">25–50 entrepreneurs (Full Circle base)</option>
                            <option value="50+ entrepreneurs across city">50+ entrepreneurs across city</option>
                          </select>
                        </div>
                      </div>

                      <p className="text-xs text-amber-900/80 italic pt-1">
                        You do not need to have everything figured out. But you should have a genuine belief that the right people could come together.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* ── PART 6: ANYTHING ELSE? ── */}
              <div className="bg-[#FBFCFE] rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="h-[2px] w-5 bg-[#0062D2] rounded-full" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0062D2]">
                      SECTION 04
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950">
                    ANYTHING ELSE?
                  </h2>
                  <p className="text-sm text-slate-600 mt-1 font-light">
                    There may be something about your journey that the questions above do not capture. Tell us.
                  </p>
                </div>

                <div className="space-y-2 text-xs text-slate-600">
                  <p className="font-semibold text-slate-800">Perhaps there is:</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pl-2 list-disc list-inside">
                    <li>An initiative you built</li>
                    <li>A community you helped create</li>
                    <li>A leadership experience that changed you</li>
                    <li>A contribution you are particularly proud of</li>
                    <li>A reason you believe you could serve PEERS GLOBAL</li>
                    <li>Something you think we should know</li>
                  </ul>
                </div>

                <div className="pt-2">
                  <textarea
                    name="anythingElse"
                    rows={4}
                    value={formData.anythingElse}
                    onChange={handleInputChange}
                    placeholder="Sometimes the most useful part of an application is what does not fit neatly into a form field..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* ── PART 7: BEFORE YOU SUBMIT REFLECTION CARD ── */}
              <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl space-y-6">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
                    BEFORE YOU SUBMIT
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold">
                  Please take a moment to consider:
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {REFLECTION_QUESTIONS.map((q, idx) => (
                    <div
                      key={q}
                      className={`p-3.5 rounded-xl border border-white/10 bg-white/5 flex items-start gap-3 ${
                        idx === 4 ? 'sm:col-span-2 border-amber-400/40 bg-amber-400/10' : ''
                      }`}
                    >
                      <span className="text-xs font-bold text-sky-300">{`0${idx + 1}`}</span>
                      <p className={`text-xs sm:text-sm font-medium ${idx === 4 ? 'text-amber-200 font-bold' : 'text-slate-200'}`}>
                        {q}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white font-semibold text-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all cursor-pointer disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Submitting Application...' : 'Apply to Lead'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </form>
          )}

        </div>
      </section>

      {/* ─── SECTION: WHAT HAPPENS AFTER YOU APPLY? ───────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#FBFCFE] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 mb-1">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                ROUTING & REVIEW
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mt-1 text-slate-950">
              WHAT HAPPENS AFTER YOU APPLY?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2 font-light">
              Your application is reviewed according to where your experience and proposed contribution may best connect within the PEERS GLOBAL ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ROUTING_STRUCTURE.map((route) => {
              const Icon = route.icon
              return (
                <div
                  key={route.target}
                  className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:shadow-md ${route.color}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider">
                      {route.target}
                    </span>
                    <Icon className="w-5 h-5 opacity-80" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-slate-950 mb-2">
                    → {route.leader}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {route.desc}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-white border border-slate-200 shadow-xs max-w-3xl">
            <p className="text-sm text-slate-600 leading-relaxed">
              Where appropriate, the conversation can then move toward the leadership opportunity that best fits your experience and the community's needs.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION: LEADERSHIP IS A CONVERSATION ─────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  NO FIXED ASSUMPTIONS
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-950 leading-tight">
                LEADERSHIP IS A CONVERSATION
              </h2>

              <p className="text-base sm:text-lg text-slate-700 font-medium">
                You do not have to know which leadership role is right for you before you apply.
              </p>

              <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>• You may know that you want to contribute.</p>
                <p>• You may know that you can bring people together.</p>
                <p>• You may know that your experience could be useful to others.</p>
                <p className="pt-2 font-medium text-slate-900">
                  That is enough to begin the conversation. The right role can be understood through the conversation that follows.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#FBFCFE] rounded-3xl p-8 border border-slate-200/90 shadow-md space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100">
                  <Quote className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-lg text-slate-900">
                  A Dialogue of Contribution
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We value founders and leaders who bring energy, authenticity and stewardship. You don't need all the answers today — just the conviction to show up for fellow entrepreneurs.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION: YOUR LEADERSHIP JOURNEY MAY BEGIN HERE (CLOSING HERO) ── */}
      <section className="relative py-20 sm:py-28 bg-[#0062D2] text-white overflow-hidden">
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Manifesto */}
            <div className="lg:col-span-8 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-200">
                — PEERS GLOBAL LEADERSHIP —
              </span>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.1]">
                YOUR LEADERSHIP JOURNEY MAY BEGIN HERE
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-white/90 leading-relaxed font-light max-w-2xl">
                <p>
                  PEERS GLOBAL does not need people who simply want another title.
                  It needs entrepreneurs who are willing to contribute.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-sky-100 font-medium">
                  <p>• People who can bring experience.</p>
                  <p>• People who can bring relationships.</p>
                  <p>• People who can bring energy.</p>
                  <p>• People who can bring people together.</p>
                </div>
                <p className="text-white font-medium">
                  People who understand that leadership is not about being above others. It is about being useful to others.
                </p>
                <p className="italic text-sky-200">
                  If that is how you think about leadership, tell us your story.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={handleScrollToForm}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#0062D2] font-semibold text-sm shadow-xl hover:bg-blue-50 transition-all duration-200 group hover:scale-105 cursor-pointer"
                >
                  <span>Apply to Lead</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/40 backdrop-blur-sm transition-all duration-200"
                >
                  <span>Open Unity App →</span>
                </a>
              </div>
            </div>

            {/* Right Cursive Script */}
            <div className="lg:col-span-4 text-center lg:text-right select-none pointer-events-none">
              <p
                className="text-3xl sm:text-4xl lg:text-5xl font-light italic leading-tight text-white drop-shadow-lg"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                Ideas
                <br />
                People
                <br />
                Communities
                <br />
                A Brighter Tomorrow.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
