'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ChevronRight,
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  MapPin,
  Briefcase,
  Megaphone,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
  Users2,
  TrendingUp,
  Globe2,
  FileText,
  Check,
  Smartphone,
  ChevronLeft,
  Star,
  ExternalLink,
} from 'lucide-react'

const CITIES = [
  'Ahmedabad',
  'Mumbai',
  'Delhi NCR',
  'Bengaluru',
  'Hyderabad',
  'Surat',
  'Pune',
  'Rajkot',
  'Vadodara',
  'Chennai',
  'Kolkata',
  'Indore',
  'Jaipur',
  'Other / Global',
]

const INDUSTRIES = [
  'Manufacturing & Engineering',
  'Real Estate & Infrastructure',
  'Technology & Digital SaaS',
  'Healthcare & Pharmaceuticals',
  'Chemicals, Plastics & Polymers',
  'Textiles & Apparel',
  'BFSI, Wealth & Corporate Finance',
  'FMCG, Food & Agritech',
  'Logistics & Supply Chain',
  'Renewable Energy & Cleantech',
  'Media, PR & Creative Tech',
  'Hospitality & Luxury Services',
  'Retail & D2C Brands',
  'Education & EdTech',
  'Professional Services & Consulting',
  'Other Specialized Sector',
]

const HEAR_OPTIONS = [
  'Member Referral / Peer Invitation',
  'LinkedIn',
  'Founder / Event / Summit',
  'News / Press Coverage',
  'Social Media (Instagram / Twitter)',
  'Google Search',
  'Other',
]

const TURNOVER_OPTIONS = [
  '₹50 Lakhs – ₹2 Crore',
  '₹2 Crore – ₹10 Crore',
  '₹10 Crore – ₹50 Crore',
  '₹50 Crore – ₹200 Crore',
  '₹200 Crore+',
]

const TESTIMONIALS = [
  {
    quote:
      'Peers Global has given me a room of genuine collaborators. It’s rare, confidential, and completely invaluable.',
    name: 'Ritu Shah',
    title: 'Founder',
    company: 'Studio R',
    image: '/images/story-neha-simran.jpg',
  },
  {
    quote:
      'The conversations, connections, and support here have directly helped our company expand across 3 new states.',
    name: 'Karan Mehta',
    title: 'CEO',
    company: 'Axis Technologies',
    image: '/images/story-amit-sandeep.jpg',
  },
  {
    quote:
      'This is a community that practices what it preaches. Give, grow, build together — the Give-First culture is real.',
    name: 'Neha Desai',
    title: 'Founder',
    company: 'Craft & Co.',
    image: '/images/story-priya-karan.jpg',
  },
  {
    quote:
      'The category exclusivity ensures there is zero conflict of interest. You can share real operational hurdles without hesitation.',
    name: 'Vikramaditya Solanki',
    title: 'Managing Director',
    company: 'Solanki Ceramics',
    image: '/images/who-we-are-inner-board.jpg',
  },
]

export function ApplyPageClient() {
  const [currentStep, setCurrentStep] = useState(1)
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0)

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    city: '',
    industry: '',
    hearAbout: '',
    agreeTerms: false,

    // Step 2 Fields
    companyName: '',
    designation: '',
    turnover: TURNOVER_OPTIONS[1],
    yearsInBusiness: '3–5 Years',
    teamSize: '10–50 Employees',
    primaryGoal: 'Strategic Joint Ventures & Scaling',
    giveExpertise: '',

    // Step 3 Fields (Verification Code simulation)
    verificationCode: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement
      setFormData((prev) => ({ ...prev, [name]: checked }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleStepSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentStep === 1) {
      if (!formData.agreeTerms) {
        alert('Please agree to the Terms & Conditions and Privacy Policy to continue.')
        return
      }
      setCurrentStep(2)
      window.scrollTo({ top: 180, behavior: 'smooth' })
    } else if (currentStep === 2) {
      setCurrentStep(3)
      window.scrollTo({ top: 180, behavior: 'smooth' })
    } else if (currentStep === 3) {
      setIsSubmitting(true)
      setTimeout(() => {
        setIsSubmitting(false)
        setIsCompleted(true)
      }, 1200)
    }
  }

  const handleSocialSignUp = (provider: string) => {
    alert(`Signing in with ${provider}... Please complete your profile details.`)
    setFormData((prev) => ({
      ...prev,
      fullName: provider === 'Google' ? 'Pravin Kumar' : 'Pravin K.',
      email: provider === 'Google' ? 'pravin@example.com' : 'pravin@icloud.com',
    }))
  }

  const nextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  return (
    <div className="min-h-screen bg-[#FBFCFE] text-[#0F172A] font-sans antialiased selection:bg-[#0062D2] selection:text-white">
      {/* ─── Top Breadcrumb ─── */}
      <div className="border-b border-slate-200/80 bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs font-medium text-slate-500">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/membership" className="hover:text-slate-900 transition-colors">
            Membership
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#0062D2] font-semibold">Join Peers Global</span>
        </div>
      </div>

      {/* ─── Hero Section: Clean Professional Split Layout ─── */}
      <section className="relative w-full min-h-[88vh] lg:min-h-[820px] overflow-hidden bg-white flex items-center">
        {/* Background Image — Right Side Only on Desktop */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/join-peers-hero.jpg"
            alt="Peers Global professional community"
            fill
            priority
            className="object-cover object-[70%_center] select-none"
          />
          {/* Clean white overlay on left for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/60 lg:to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/30 lg:w-[60%] pointer-events-none" />
          {/* Subtle bottom edge */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </div>

        {/* Foreground Content Container */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* ── Left Column: Value Proposition ── */}
            <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center space-y-7 py-6 lg:py-10">
              
              {/* Branding & Heading */}
              <div className="space-y-5 max-w-xl">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-0.5 bg-[#0062D2] rounded-full" />
                  <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#0062D2]">
                    BECOME A PEER
                  </span>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-serif font-bold text-[#0D1F47] tracking-tight leading-[1.04]">
                  Join <br />
                  <span className="text-[#0062D2]">Peers Global</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-lg">
                  A global community of entrepreneurs who give, grow and build together.
                </p>

                {/* 3 Real Badges Pills */}
                <div className="pt-1 flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="size-9 rounded-lg bg-[#0062D2]/10 text-[#0062D2] flex items-center justify-center shrink-0">
                      <Users2 className="size-4.5" />
                    </div>
                    <div className="text-xs leading-tight">
                      <span className="font-bold text-slate-900 block">Real</span>
                      <span className="text-slate-500 text-[11px]">Entrepreneurs</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="size-9 rounded-lg bg-amber-500/10 text-[#D97706] flex items-center justify-center shrink-0">
                      <TrendingUp className="size-4.5" />
                    </div>
                    <div className="text-xs leading-tight">
                      <span className="font-bold text-slate-900 block">Real</span>
                      <span className="text-slate-500 text-[11px]">Collaborations</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="size-9 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                      <Globe2 className="size-4.5" />
                    </div>
                    <div className="text-xs leading-tight">
                      <span className="font-bold text-slate-900 block">Real</span>
                      <span className="text-slate-500 text-[11px]">Impact</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Row */}
              <div className="flex items-center gap-6 sm:gap-8 pt-2">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0D1F47] tracking-tight">10,000+</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">MSME Founders</div>
                </div>
                <div className="w-px h-10 bg-slate-200" />
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0D1F47] tracking-tight">50+</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Cities</div>
                </div>
                <div className="w-px h-10 bg-slate-200" />
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0D1F47] tracking-tight">100+</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Business Circles</div>
                </div>
              </div>

              {/* Learn More CTA */}
              <div className="pt-1">
                <Link
                  href="/membership"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#0062D2] hover:bg-[#0052B4] text-white font-bold text-sm shadow-lg shadow-blue-600/20 transition-all active:scale-[0.98]"
                >
                  <span>Learn More</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* ── Right Column: Floating Clean White Form Card ── */}
            <div className="lg:col-span-6 xl:col-span-5 flex flex-col">
              <div className="bg-white rounded-3xl sm:rounded-[36px] border border-slate-100/90 shadow-[0_25px_70px_rgba(15,23,42,0.18)] p-6 sm:p-8 lg:p-9 xl:p-10 relative flex-1 flex flex-col justify-between">
                
                {/* Card Top: Header & Login Link */}
                <div>
                  <div className="flex items-start justify-between border-b border-slate-100 pb-5">
                    <div className="space-y-1">
                      <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D1F47]">
                        Create Your Account
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500">
                        Take the first step towards a stronger, more collaborative tomorrow.
                      </p>
                    </div>
                    <div className="text-right text-xs shrink-0 pl-3">
                      <span className="text-slate-400 text-[11px] block">Already a member?</span>
                      <a
                        href="https://unity.peersglobal.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-[#0062D2] font-bold hover:underline text-xs"
                      >
                        Login here
                      </a>
                    </div>
                  </div>

                  {/* Multi-Step Stepper Header */}
                  <div className="py-5 border-b border-slate-100">
                    <div className="flex items-center justify-between relative px-2 sm:px-6">
                      {/* Connecting Background Line */}
                      <div className="absolute top-4 left-10 right-10 h-0.5 bg-slate-100 -z-0" />
                      <div
                        className="absolute top-4 left-10 h-0.5 bg-[#0062D2] transition-all duration-300 -z-0"
                        style={{
                          width: currentStep === 1 ? '0%' : currentStep === 2 ? '50%' : '88%',
                        }}
                      />

                      {/* Step 1 */}
                      <div className="flex flex-col items-center gap-1.5 relative z-10 bg-white px-2">
                        <div
                          className={`size-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                            currentStep >= 1
                              ? 'bg-[#0062D2] text-white shadow-md shadow-blue-500/30 ring-4 ring-blue-50'
                              : 'bg-slate-100 text-slate-400'
                          }`}
                        >
                          1
                        </div>
                        <span
                          className={`text-[11px] font-semibold ${
                            currentStep === 1 ? 'text-[#0062D2]' : 'text-slate-600'
                          }`}
                        >
                          Personal Details
                        </span>
                      </div>

                      {/* Step 2 */}
                      <div className="flex flex-col items-center gap-1.5 relative z-10 bg-white px-2">
                        <div
                          className={`size-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                            currentStep >= 2
                              ? 'bg-[#0062D2] text-white shadow-md shadow-blue-500/30 ring-4 ring-blue-50'
                              : 'bg-white border border-slate-200 text-slate-400'
                          }`}
                        >
                          2
                        </div>
                        <span
                          className={`text-[11px] font-medium ${
                            currentStep === 2 ? 'text-[#0062D2] font-semibold' : 'text-slate-400'
                          }`}
                        >
                          Business Details
                        </span>
                      </div>

                      {/* Step 3 */}
                      <div className="flex flex-col items-center gap-1.5 relative z-10 bg-white px-2">
                        <div
                          className={`size-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                            currentStep >= 3
                              ? 'bg-[#0062D2] text-white shadow-md shadow-blue-500/30 ring-4 ring-blue-50'
                              : 'bg-white border border-slate-200 text-slate-400'
                          }`}
                        >
                          3
                        </div>
                        <span
                          className={`text-[11px] font-medium ${
                            currentStep === 3 ? 'text-[#0062D2] font-semibold' : 'text-slate-400'
                          }`}
                        >
                          Verify &amp; Complete
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form Body */}
                <div className="pt-2">
                  {isCompleted ? (
                    /* Success Completed Screen */
                    <div className="py-10 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
                      <div className="size-20 rounded-full bg-emerald-50 border-2 border-emerald-500/40 text-emerald-600 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                        <CheckCircle2 className="size-10" />
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-2xl font-serif font-bold text-slate-900">
                          Welcome, {formData.fullName || 'Peer'}!
                        </h3>
                        <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                          Your account nomination has been registered. Our Governance Desk will reach out within 24–48 hours for your category lock.
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2 max-w-sm mx-auto">
                        <div className="font-bold text-slate-800">Your Registration Details:</div>
                        <div className="text-slate-600">
                          <strong>Category:</strong> {formData.industry || 'General Industry'}
                        </div>
                        <div className="text-slate-600">
                          <strong>City:</strong> {formData.city || 'National'}
                        </div>
                        <div className="text-slate-600">
                          <strong>Contact:</strong> {formData.email} · {formData.phone}
                        </div>
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                        <Link
                          href="/unity"
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0062D2] hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all"
                        >
                          <Smartphone className="size-4" />
                          Download Unity App
                        </Link>
                        <button
                          type="button"
                          onClick={() => {
                            setIsCompleted(false)
                            setCurrentStep(1)
                          }}
                          className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-all"
                        >
                          Submit Another Entry
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleStepSubmit} className="pt-4 space-y-4">
                      
                      {/* ── STEP 1: Personal Details ── */}
                      {currentStep === 1 && (
                        <div className="space-y-3.5 animate-in fade-in duration-200">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            {/* Full Name */}
                            <div className="space-y-1">
                              <label className="text-xs font-bold text-slate-800">
                                Full Name <span className="text-red-500">*</span>
                              </label>
                              <div className="relative">
                                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400 pointer-events-none" />
                                <input
                                  type="text"
                                  name="fullName"
                                  required
                                  value={formData.fullName}
                                  onChange={handleChange}
                                  placeholder="Enter your full name"
                                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-[#F8FAFC]/60 focus:bg-white text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0062D2] focus:ring-1 focus:ring-[#0062D2] transition-all"
                                />
                              </div>
                            </div>

                            {/* Email Address */}
                            <div className="space-y-1">
                              <label className="text-xs font-bold text-slate-800">
                                Email Address <span className="text-red-500">*</span>
                              </label>
                              <div className="relative">
                                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400 pointer-events-none" />
                                <input
                                  type="email"
                                  name="email"
                                  required
                                  value={formData.email}
                                  onChange={handleChange}
                                  placeholder="Enter your email address"
                                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-[#F8FAFC]/60 focus:bg-white text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0062D2] focus:ring-1 focus:ring-[#0062D2] transition-all"
                                />
                              </div>
                            </div>

                            {/* Mobile Number with +91 Country Code */}
                            <div className="space-y-1">
                              <label className="text-xs font-bold text-slate-800">
                                Mobile Number <span className="text-red-500">*</span>
                              </label>
                              <div className="flex rounded-xl border border-slate-200 bg-[#F8FAFC]/60 focus-within:bg-white focus-within:border-[#0062D2] focus-within:ring-1 focus-within:ring-[#0062D2] overflow-hidden transition-all">
                                <div className="flex items-center gap-1.5 px-3 bg-slate-100/70 border-r border-slate-200 text-xs font-semibold text-slate-700 select-none">
                                  <span>IN</span>
                                  <span className="text-slate-500">+91</span>
                                </div>
                                <input
                                  type="tel"
                                  name="phone"
                                  required
                                  value={formData.phone}
                                  onChange={handleChange}
                                  placeholder="Enter your mobile number"
                                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none bg-transparent"
                                />
                              </div>
                            </div>

                            {/* Password */}
                            <div className="space-y-1">
                              <label className="text-xs font-bold text-slate-800">
                                Password <span className="text-red-500">*</span>
                              </label>
                              <div className="relative">
                                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400 pointer-events-none" />
                                <input
                                  type={showPassword ? 'text' : 'password'}
                                  name="password"
                                  required
                                  value={formData.password}
                                  onChange={handleChange}
                                  placeholder="Create a strong password"
                                  className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 bg-[#F8FAFC]/60 focus:bg-white text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0062D2] focus:ring-1 focus:ring-[#0062D2] transition-all"
                                />
                                <button
                                  type="button"
                                  onClick={() => setShowPassword((prev) => !prev)}
                                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
                                >
                                  {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                                </button>
                              </div>
                            </div>

                            {/* City */}
                            <div className="space-y-1">
                              <label className="text-xs font-bold text-slate-800">
                                City <span className="text-red-500">*</span>
                              </label>
                              <div className="relative">
                                <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400 pointer-events-none" />
                                <select
                                  name="city"
                                  required
                                  value={formData.city}
                                  onChange={handleChange}
                                  className="w-full pl-10 pr-8 py-2.5 rounded-xl border border-slate-200 bg-[#F8FAFC]/60 focus:bg-white text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0062D2] focus:ring-1 focus:ring-[#0062D2] appearance-none transition-all"
                                >
                                  <option value="" disabled>Select your city</option>
                                  {CITIES.map((c) => (
                                    <option key={c} value={c}>{c}</option>
                                  ))}
                                </select>
                                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">▼</div>
                              </div>
                            </div>

                            {/* Industry */}
                            <div className="space-y-1">
                              <label className="text-xs font-bold text-slate-800">
                                Industry <span className="text-red-500">*</span>
                              </label>
                              <div className="relative">
                                <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400 pointer-events-none" />
                                <select
                                  name="industry"
                                  required
                                  value={formData.industry}
                                  onChange={handleChange}
                                  className="w-full pl-10 pr-8 py-2.5 rounded-xl border border-slate-200 bg-[#F8FAFC]/60 focus:bg-white text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0062D2] focus:ring-1 focus:ring-[#0062D2] appearance-none transition-all"
                                >
                                  <option value="" disabled>Select your industry</option>
                                  {INDUSTRIES.map((ind) => (
                                    <option key={ind} value={ind}>{ind}</option>
                                  ))}
                                </select>
                                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">▼</div>
                              </div>
                            </div>
                          </div>

                          {/* How did you hear about us? */}
                          <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-800">
                              How did you hear about us? <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                              <Megaphone className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400 pointer-events-none" />
                              <select
                                name="hearAbout"
                                value={formData.hearAbout}
                                onChange={handleChange}
                                className="w-full pl-10 pr-8 py-2.5 rounded-xl border border-slate-200 bg-[#F8FAFC]/60 focus:bg-white text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0062D2] focus:ring-1 focus:ring-[#0062D2] appearance-none transition-all"
                              >
                                <option value="">Select an option</option>
                                {HEAR_OPTIONS.map((opt) => (
                                  <option key={opt} value={opt}>{opt}</option>
                                ))}
                              </select>
                              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">▼</div>
                            </div>
                          </div>

                          {/* Terms & Conditions Checkbox */}
                          <div className="pt-1">
                            <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-600 leading-tight">
                              <input
                                type="checkbox"
                                name="agreeTerms"
                                checked={formData.agreeTerms}
                                onChange={handleChange}
                                className="mt-0.5 size-4 rounded border-slate-300 text-[#0062D2] focus:ring-[#0062D2]"
                              />
                              <span>
                                I agree to the{' '}
                                <Link href="/terms-of-use" className="text-[#0062D2] font-semibold underline hover:text-blue-800">
                                  Terms &amp; Conditions
                                </Link>{' '}
                                and{' '}
                                <Link href="/privacy-policy" className="text-[#0062D2] font-semibold underline hover:text-blue-800">
                                  Privacy Policy
                                </Link>{' '}
                                of Peers Global.
                              </span>
                            </label>
                          </div>

                          {/* Submit Button Step 1 */}
                          <button
                            type="submit"
                            className="w-full py-3.5 rounded-xl bg-[#0062D2] hover:bg-[#0052B4] text-white font-bold text-sm shadow-md shadow-blue-600/25 flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
                          >
                            <span>Continue to Business Details</span>
                            <ArrowRight className="size-4" />
                          </button>

                          {/* OR Divider */}
                          <div className="relative flex py-0.5 items-center">
                            <div className="flex-grow border-t border-slate-200"></div>
                            <span className="flex-shrink mx-3 text-[11px] font-medium text-slate-400">
                              or
                            </span>
                            <div className="flex-grow border-t border-slate-200"></div>
                          </div>

                          {/* Social Sign-In Buttons */}
                          <div className="grid grid-cols-2 gap-3">
                            <button
                              type="button"
                              onClick={() => handleSocialSignUp('Google')}
                              className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold shadow-xs transition-all"
                            >
                              <svg className="size-4" viewBox="0 0 24 24">
                                <path
                                  fill="#4285F4"
                                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                />
                                <path
                                  fill="#34A853"
                                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                />
                                <path
                                  fill="#FBBC05"
                                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                                />
                                <path
                                  fill="#EA4335"
                                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                                />
                              </svg>
                              <span className="truncate">Continue with Google</span>
                            </button>

                            <button
                              type="button"
                              onClick={() => handleSocialSignUp('Apple')}
                              className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold shadow-xs transition-all"
                            >
                              <svg className="size-4 fill-current" viewBox="0 0 24 24">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.09 1.74-.96 2.76 1.02.08 2.05-.51 2.69-1.26z" />
                              </svg>
                              <span className="truncate">Continue with Apple</span>
                            </button>
                          </div>
                        </div>
                      )}

                      {/* ── STEP 2: Business Details ── */}
                      {currentStep === 2 && (
                        <div className="space-y-3.5 animate-in fade-in duration-200">
                          <div className="space-y-0.5">
                            <h3 className="text-sm font-bold text-slate-900">
                              Enterprise Scale &amp; Role
                            </h3>
                            <p className="text-[11px] text-slate-500">
                              Category seats are locked 1 per industry to guarantee zero conflict of interest.
                            </p>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            <div className="space-y-1">
                              <label className="text-xs font-bold text-slate-800">
                                Company / Enterprise Name <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                name="companyName"
                                required
                                value={formData.companyName}
                                onChange={handleChange}
                                placeholder="e.g. Acme Industries Ltd"
                                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-[#F8FAFC]/60 focus:bg-white text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0062D2] focus:ring-1 focus:ring-[#0062D2] transition-all"
                              />
                            </div>

                            <div className="space-y-1">
                              <label className="text-xs font-bold text-slate-800">
                                Your Designation <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                name="designation"
                                required
                                value={formData.designation}
                                onChange={handleChange}
                                placeholder="e.g. Founder / CMD / Director"
                                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-[#F8FAFC]/60 focus:bg-white text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0062D2] focus:ring-1 focus:ring-[#0062D2] transition-all"
                              />
                            </div>

                            <div className="space-y-1">
                              <label className="text-xs font-bold text-slate-800">
                                Annual Turnover Band <span className="text-red-500">*</span>
                              </label>
                              <select
                                name="turnover"
                                value={formData.turnover}
                                onChange={handleChange}
                                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-[#F8FAFC]/60 focus:bg-white text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0062D2] focus:ring-1 focus:ring-[#0062D2] transition-all"
                              >
                                {TURNOVER_OPTIONS.map((t) => (
                                  <option key={t} value={t}>{t}</option>
                                ))}
                              </select>
                            </div>

                            <div className="space-y-1">
                              <label className="text-xs font-bold text-slate-800">
                                Team Size
                              </label>
                              <select
                                name="teamSize"
                                value={formData.teamSize}
                                onChange={handleChange}
                                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-[#F8FAFC]/60 focus:bg-white text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0062D2] focus:ring-1 focus:ring-[#0062D2] transition-all"
                              >
                                <option value="1–10 Employees">1–10 Employees</option>
                                <option value="10–50 Employees">10–50 Employees</option>
                                <option value="50–200 Employees">50–200 Employees</option>
                                <option value="200+ Employees">200+ Employees</option>
                              </select>
                            </div>
                          </div>

                          <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-800">
                              Primary Collaboration Goal
                            </label>
                            <input
                              type="text"
                              name="primaryGoal"
                              value={formData.primaryGoal}
                              onChange={handleChange}
                              placeholder="e.g. Cross-city expansion, supply chain JVs, peer mentorship"
                              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-[#F8FAFC]/60 focus:bg-white text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0062D2] focus:ring-1 focus:ring-[#0062D2] transition-all"
                            />
                          </div>

                          {/* Navigation Buttons Step 2 */}
                          <div className="pt-2 flex items-center justify-between gap-3">
                            <button
                              type="button"
                              onClick={() => setCurrentStep(1)}
                              className="px-5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-bold text-slate-600 transition-all"
                            >
                              Back
                            </button>
                            <button
                              type="submit"
                              className="py-3 px-6 rounded-xl bg-[#0062D2] hover:bg-[#0052B4] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-1.5"
                            >
                              <span>Continue to Verification</span>
                              <ArrowRight className="size-4" />
                            </button>
                          </div>
                        </div>
                      )}

                      {/* ── STEP 3: Verify & Complete ── */}
                      {currentStep === 3 && (
                        <div className="space-y-3.5 animate-in fade-in duration-200">
                          <div className="space-y-0.5">
                            <h3 className="text-sm font-bold text-slate-900">
                              Final Review &amp; Code of Collaboration
                            </h3>
                            <p className="text-[11px] text-slate-500">
                              Review your details and confirm your commitment to the Give-First community code.
                            </p>
                          </div>

                          <div className="p-3.5 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-1.5 text-xs">
                            <div className="flex justify-between">
                              <span className="text-slate-500">Applicant:</span>
                              <span className="font-bold text-slate-800">{formData.fullName}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-500">Enterprise:</span>
                              <span className="font-bold text-slate-800">{formData.companyName || 'Not specified'}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-500">Category &amp; City:</span>
                              <span className="font-bold text-[#0062D2]">{formData.industry || 'General'} · {formData.city || 'National'}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-500">Turnover:</span>
                              <span className="font-bold text-slate-800">{formData.turnover}</span>
                            </div>
                          </div>

                          <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-800">
                              What expertise or knowledge can you share with fellow Peers?
                            </label>
                            <textarea
                              name="giveExpertise"
                              rows={2}
                              value={formData.giveExpertise}
                              onChange={handleChange}
                              placeholder="e.g. Export logistics, scaling D2C supply chains, enterprise software sales..."
                              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 bg-[#F8FAFC]/60 focus:bg-white text-xs text-slate-900 focus:outline-none focus:border-[#0062D2] focus:ring-1 focus:ring-[#0062D2] transition-all"
                            />
                          </div>

                          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
                            <div className="flex items-center gap-1.5 font-bold text-slate-800">
                              <ShieldCheck className="size-4 text-emerald-600" />
                              <span>Confidentiality &amp; Category Commitment</span>
                            </div>
                            <p className="text-[11px] text-slate-500 leading-relaxed">
                              By submitting, you pledge to maintain strict inner board confidentiality, category ethics, and active participation in peer problem solving.
                            </p>
                          </div>

                          {/* Submit Button Step 3 */}
                          <div className="pt-2 flex items-center justify-between gap-3">
                            <button
                              type="button"
                              onClick={() => setCurrentStep(2)}
                              className="px-5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-bold text-slate-600 transition-all"
                            >
                              Back
                            </button>
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="py-3 px-6 rounded-xl bg-[#0062D2] hover:bg-[#0052B4] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-1.5 disabled:opacity-50"
                            >
                              {isSubmitting ? (
                                <span>Locking Nomination...</span>
                              ) : (
                                <>
                                  <span>Complete Application</span>
                                  <CheckCircle2 className="size-4" />
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      )}

                    </form>
                  )}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Full-Width Stats Banner ─── */}
      <section className="bg-gradient-to-r from-[#0052B4] to-[#0062D2] text-white py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                10,000+
              </div>
              <div className="text-xs sm:text-sm text-white/70 font-medium mt-1.5">
                Entrepreneurs
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                200+
              </div>
              <div className="text-xs sm:text-sm text-white/70 font-medium mt-1.5">
                Circles
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                75+
              </div>
              <div className="text-xs sm:text-sm text-white/70 font-medium mt-1.5">
                Cities
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                10+
              </div>
              <div className="text-xs sm:text-sm text-white/70 font-medium mt-1.5">
                Countries
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Split Cards: "What happens next?" & "Take the Community With You" ─── */}
      <section className="py-14 sm:py-20 bg-[#F0F5FA] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Card: "What happens next?" */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/80 p-7 sm:p-10 shadow-sm relative overflow-hidden flex flex-col justify-between space-y-8">
              {/* Decorative Subtle Light-Blue Gradient in Bottom Right */}
              <div className="absolute -bottom-12 -right-12 w-56 h-56 bg-gradient-to-br from-blue-100/60 to-sky-200/40 rounded-full blur-2xl pointer-events-none -z-0" />

              {/* Header: Tag & Heading */}
              <div className="relative z-10 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-0.5 bg-[#0062D2] rounded-full" />
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#0062D2]">
                    APPLY FOR MEMBERSHIP
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-[#0D1F47] tracking-tight leading-tight">
                  What happens <span className="text-[#0062D2]">next?</span>
                </h2>

                <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-xl">
                  Our structured induction process preserves the standard of every Circle.
                </p>
              </div>

              {/* 4 Steps Horizontal Journey with Connected Line */}
              <div className="relative z-10 py-2">
                {/* Connecting Line (desktop) */}
                <div className="absolute top-7 left-12 right-12 h-0.5 bg-slate-100 hidden sm:block -z-0" />

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 relative z-10 text-center">
                  {/* Step 1 */}
                  <div className="flex flex-col items-center space-y-2">
                    <div className="size-13 sm:size-14 rounded-full bg-blue-50 border border-blue-100/90 flex items-center justify-center text-[#0062D2] shadow-xs relative bg-white">
                      <Mail className="size-5 text-[#0062D2]" />
                    </div>
                    <div className="text-xs text-slate-700 leading-snug">
                      <strong className="block text-slate-900 font-bold">1. Verify details</strong>
                      <span className="text-[11px] text-slate-500">Email and mobile number check</span>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex flex-col items-center space-y-2">
                    <div className="size-13 sm:size-14 rounded-full bg-blue-50 border border-blue-100/90 flex items-center justify-center text-[#0062D2] shadow-xs relative bg-white">
                      <FileText className="size-5 text-[#0062D2]" />
                    </div>
                    <div className="text-xs text-slate-700 leading-snug">
                      <strong className="block text-slate-900 font-bold">2. Complete profile</strong>
                      <span className="text-[11px] text-slate-500">Enterprise &amp; turnover details</span>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex flex-col items-center space-y-2">
                    <div className="size-13 sm:size-14 rounded-full bg-blue-50 border border-blue-100/90 flex items-center justify-center text-[#0062D2] shadow-xs relative bg-white">
                      <Users2 className="size-5 text-[#0062D2]" />
                    </div>
                    <div className="text-xs text-slate-700 leading-snug">
                      <strong className="block text-slate-900 font-bold">3. Get reviewed</strong>
                      <span className="text-[11px] text-slate-500">Category check by our team</span>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex flex-col items-center space-y-2">
                    <div className="size-13 sm:size-14 rounded-full bg-emerald-50 border border-emerald-100/90 flex items-center justify-center text-emerald-600 shadow-xs relative bg-white">
                      <Check className="size-5 text-emerald-600" />
                    </div>
                    <div className="text-xs text-slate-700 leading-snug">
                      <strong className="block text-slate-900 font-bold">4. Start journey</strong>
                      <span className="text-[11px] text-slate-500">Induction as a Peers Member</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Quote Callout */}
              <div className="relative z-10 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-0.5 bg-[#0062D2] rounded-full shrink-0" />
                  <p className="font-serif italic text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                    &ldquo;A more connected, collaborative and impactful world — starts with people like you.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Right Card: "Take the Community With You" (Unity App Banner) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#06122C] via-[#091D46] to-[#050E22] rounded-3xl p-7 sm:p-9 text-white shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[460px]">
              {/* Concentric Glow Rings in Top Right */}
              <div className="absolute -top-16 -right-16 size-64 rounded-full border border-sky-500/20 pointer-events-none" />
              <div className="absolute -top-10 -right-10 size-48 rounded-full border border-sky-400/15 pointer-events-none" />
              <div className="absolute top-0 right-0 size-32 rounded-full bg-blue-500/10 blur-xl pointer-events-none" />

              {/* Top Text & CTA */}
              <div className="space-y-4 relative z-10 max-w-[240px] sm:max-w-[280px]">
                <div className="space-y-1.5">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                    Take the Community <br />
                    <span className="text-sky-400">With You</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Download the Unity App to connect, collaborate and grow on the go.
                  </p>
                </div>

                <div className="pt-1">
                  <Link
                    href="/unity"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0062D2] hover:bg-blue-600 text-white font-bold text-xs shadow-lg shadow-blue-600/30 transition-all active:scale-[0.98]"
                  >
                    <span>Download Unity App</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>

              {/* Bottom Left: Cursive Script Callout */}
              <div className="relative z-10 pt-8 pb-1 select-none pointer-events-none space-y-0.5">
                <div className="font-serif italic font-semibold text-2xl sm:text-3xl text-sky-400/90 leading-tight">
                  People
                </div>
                <div className="font-serif italic font-semibold text-2xl sm:text-3xl text-sky-400/90 leading-tight">
                  Ideas
                </div>
                <div className="font-serif italic font-semibold text-2xl sm:text-3xl text-sky-400/90 leading-tight">
                  Opportunities
                </div>
                <div className="font-serif italic font-semibold text-2xl sm:text-3xl text-sky-400/90 leading-tight">
                  Together
                </div>
                <div className="w-12 h-0.5 bg-sky-400/70 rounded-full mt-2" />
              </div>

              {/* Angled Realistic Smartphone Mockup at Bottom Right */}
              <div className="absolute -bottom-6 -right-6 w-44 sm:w-52 lg:w-56 aspect-[9/18] rounded-[32px] overflow-hidden border-4 border-slate-700/80 shadow-2xl bg-slate-950 rotate-[3deg] hover:rotate-0 transition-transform duration-500 z-10">
                {/* Phone Speaker Notch */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-black rounded-full z-20" />
                
                {/* Screen Content */}
                <Image
                  src="/images/who-we-are-friends.jpg"
                  alt="Peers Global Unity mobile platform screen"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-slate-950/60" />

                {/* Screen Top Emblem & Branding */}
                <div className="absolute top-8 inset-x-3 text-center text-white space-y-0.5 z-10">
                  <div className="size-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto mb-1 border border-white/30 text-xs">
                    ★
                  </div>
                  <div className="text-xs font-bold tracking-tight text-white">
                    Peers Unity
                  </div>
                  <div className="text-[9px] text-sky-300 font-medium">
                    A Better Tomorrow Together
                  </div>
                </div>

                {/* Screen Bottom Slogan */}
                <div className="absolute bottom-4 inset-x-3 text-center text-white z-10">
                  <div className="text-[10px] uppercase tracking-wider text-amber-300 font-bold">
                    Build Together.
                  </div>
                  <div className="text-[11px] font-extrabold text-white">
                    Go Further.
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ─── "Trusted by entrepreneurs across industries" (Testimonials + Global Community Layout) ─── */}
      <section className="py-10 sm:py-14 bg-[#F4F8FC] border-t border-slate-200/80 relative overflow-hidden">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="mb-6 pl-1 sm:pl-2">
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-serif font-bold text-[#0D1F47] tracking-tight">
              Trusted by entrepreneurs across industries
            </h2>
          </div>

          {/* Main Container Row with Arrow Navigation (Ample padding so arrows never overlap cards) */}
          <div className="relative flex items-center pl-11 sm:pl-14 pr-11 sm:pr-14">
            
            {/* Left Navigation Arrow (Positioned in dedicated space outside the first card) */}
            <button
              type="button"
              onClick={prevTestimonial}
              aria-label="Previous testimonials"
              className="absolute left-0 sm:left-1 top-1/2 -translate-y-1/2 z-30 size-10 sm:size-11 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 flex items-center justify-center shadow-md hover:shadow-lg focus:outline-none transition-all active:scale-95"
            >
              <ChevronLeft className="size-5 sm:size-6 text-slate-700" />
            </button>

            {/* Split Grid: 3 Testimonial Cards on Left (Col 7), World Map / Community Visual on Right (Col 5) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 w-full items-center">
              
              {/* Left 3 Cards + Tightly Aligned Pagination Dots directly below */}
              <div className="lg:col-span-7 xl:col-span-7 flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-4.5 w-full">
                  {[
                    TESTIMONIALS[activeTestimonialIdx % TESTIMONIALS.length],
                    TESTIMONIALS[(activeTestimonialIdx + 1) % TESTIMONIALS.length],
                    TESTIMONIALS[(activeTestimonialIdx + 2) % TESTIMONIALS.length],
                  ].map((item, idx) => (
                    <div
                      key={`${item.name}-${idx}`}
                      className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_rgba(15,23,42,0.04)] flex flex-col justify-between min-h-[220px] hover:shadow-md transition-all space-y-3.5"
                    >
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed italic">
                        &ldquo;{item.quote}&rdquo;
                      </p>

                      <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                        <div className="relative size-10 sm:size-11 rounded-full overflow-hidden border border-slate-200 shrink-0 bg-slate-100">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900">{item.name}</div>
                          <div className="text-[11px] text-slate-500">
                            {item.title}, {item.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination Dots (Positioned closely directly below the 3 cards without large gap) */}
                <div className="flex items-center justify-center gap-1.5 mt-3 pt-1">
                  {TESTIMONIALS.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveTestimonialIdx(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-2 rounded-full transition-all ${
                        activeTestimonialIdx === idx
                          ? 'w-6 bg-[#0062D2]'
                          : 'w-2 bg-slate-300 hover:bg-slate-400'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Right Side: Global Community Map Visual (Exact Replica of Reference 2) */}
              <div className="lg:col-span-5 xl:col-span-5 relative flex items-center justify-center min-h-[290px] select-none pl-1 sm:pl-3">
                
                {/* Handwritten "A Global Community" Callout at Top Right */}
                <div className="absolute top-1 right-1 sm:right-3 z-20 -rotate-[10deg] text-right pointer-events-none">
                  <span className="font-['Dancing_Script',_cursive] font-bold text-3xl sm:text-4xl lg:text-[42px] text-[#0062D2] leading-[0.9] drop-shadow-xs block">
                    A Global <br />
                    Community
                  </span>
                </div>

                {/* World Map Graphics Canvas */}
                <div className="relative w-full h-[270px] sm:h-[290px] flex items-center justify-center overflow-visible">
                  
                  {/* High-Resolution Dotted World Map Matrix */}
                  <svg
                    viewBox="0 0 580 300"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full text-blue-500/50 opacity-90 pointer-events-none"
                  >
                    <defs>
                      <pattern id="worldMapPattern" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1.25" fill="#3B82F6" fillOpacity="0.45" />
                      </pattern>
                    </defs>
                    
                    {/* North America & Canada */}
                    <path
                      d="M25,28 Q60,14 100,16 Q135,12 165,28 Q185,55 170,85 Q150,95 130,102 Q108,122 88,118 Q60,112 38,85 Q22,58 25,28 Z"
                      fill="url(#worldMapPattern)"
                    />
                    <path
                      d="M135,20 Q168,8 188,24 Q182,46 155,45 Q140,35 135,20 Z"
                      fill="url(#worldMapPattern)"
                    />
                    {/* Greenland */}
                    <path
                      d="M178,10 Q205,6 215,20 Q208,42 188,38 Q172,28 178,10 Z"
                      fill="url(#worldMapPattern)"
                    />
                    {/* Central America & Mexico */}
                    <path
                      d="M76,105 Q92,110 102,126 Q96,146 80,140 Q70,125 76,105 Z"
                      fill="url(#worldMapPattern)"
                    />
                    {/* South America */}
                    <path
                      d="M86,140 Q118,135 138,155 Q144,198 122,235 Q102,270 86,260 Q68,235 65,188 Q65,156 86,140 Z"
                      fill="url(#worldMapPattern)"
                    />
                    {/* Europe & Scandinavia */}
                    <path
                      d="M230,22 Q278,12 305,32 Q315,65 292,80 Q260,86 235,70 Q218,50 230,22 Z"
                      fill="url(#worldMapPattern)"
                    />
                    <path
                      d="M214,32 Q230,28 228,48 Q218,55 214,32 Z"
                      fill="url(#worldMapPattern)"
                    />
                    {/* Africa & Madagascar */}
                    <path
                      d="M230,85 Q282,80 312,110 Q318,168 285,215 Q252,235 238,198 Q222,162 218,122 Q218,95 230,85 Z"
                      fill="url(#worldMapPattern)"
                    />
                    <path
                      d="M325,190 Q335,185 338,210 Q330,225 322,210 Q320,195 325,190 Z"
                      fill="url(#worldMapPattern)"
                    />
                    {/* Asia, Siberia & Russia */}
                    <path
                      d="M305,18 Q395,10 488,22 Q532,42 525,85 Q502,115 460,110 Q428,125 388,110 Q345,95 305,75 Q290,45 305,18 Z"
                      fill="url(#worldMapPattern)"
                    />
                    {/* India & South Asia */}
                    <path
                      d="M370,105 Q405,95 425,120 Q420,162 395,170 Q370,152 370,105 Z"
                      fill="url(#worldMapPattern)"
                    />
                    {/* East Asia & Japan */}
                    <path
                      d="M465,98 Q505,94 515,124 Q505,155 475,145 Q455,125 465,98 Z"
                      fill="url(#worldMapPattern)"
                    />
                    <path
                      d="M522,72 Q538,68 532,92 Q518,98 522,72 Z"
                      fill="url(#worldMapPattern)"
                    />
                    {/* Southeast Asia & Indonesia */}
                    <path
                      d="M450,150 Q495,145 510,170 Q495,185 455,175 Q440,160 450,150 Z"
                      fill="url(#worldMapPattern)"
                    />
                    {/* Australia & New Zealand */}
                    <path
                      d="M460,195 Q532,185 552,215 Q545,262 495,262 Q452,246 448,216 Q448,195 460,195 Z"
                      fill="url(#worldMapPattern)"
                    />
                    <path
                      d="M558,245 Q568,240 562,265 Q552,265 558,245 Z"
                      fill="url(#worldMapPattern)"
                    />
                  </svg>

                  {/* Connected Smooth Trajectory Arc Lines */}
                  <svg
                    viewBox="0 0 580 300"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 w-full h-full pointer-events-none z-10"
                  >
                    {/* Arc 1: North America to Europe */}
                    <path
                      d="M 128,68 Q 190,26 250,114"
                      stroke="#0062D2"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      strokeOpacity="0.55"
                      fill="none"
                    />
                    {/* Arc 2: Europe to Middle East / India */}
                    <path
                      d="M 250,114 Q 330,95 412,138"
                      stroke="#0062D2"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      strokeOpacity="0.55"
                      fill="none"
                    />
                    {/* Arc 3: North America to South America */}
                    <path
                      d="M 128,68 Q 94,115 98,186"
                      stroke="#0062D2"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      strokeOpacity="0.5"
                      fill="none"
                    />
                    {/* Arc 4: South America across to Australia */}
                    <path
                      d="M 98,186 Q 260,285 435,225"
                      stroke="#0062D2"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      strokeOpacity="0.45"
                      fill="none"
                    />
                    {/* Arc 5: Europe / Asia Connection */}
                    <path
                      d="M 250,114 Q 380,24 495,108"
                      stroke="#0062D2"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      strokeOpacity="0.38"
                      fill="none"
                    />
                  </svg>

                  {/* Location Halo Pin 1 Marker above North America */}
                  <div className="absolute top-[16%] left-[34%] -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                    <span className="size-4 sm:size-5 rounded-full bg-[#0062D2] border-2 border-white shadow-xs ring-2 ring-blue-300/80 flex items-center justify-center">
                      <span className="size-1 rounded-full bg-white animate-ping" />
                    </span>
                  </div>

                  {/* Location Halo Pin 2 Marker near Europe Atlantic */}
                  <div className="absolute top-[44%] left-[31%] -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                    <span className="size-3 sm:size-3.5 rounded-full bg-[#0062D2] border-2 border-white shadow-xs ring-2 ring-blue-300/70 flex items-center justify-center">
                      <span className="size-1 rounded-full bg-white animate-ping" />
                    </span>
                  </div>

                  {/* 5 Floating Connected Community Member Avatars (Exact Replica of Reference 2) */}
                  {/* Pin 1: North America (Man in Suit & Glasses) */}
                  <div className="absolute top-[23%] left-[22%] -translate-x-1/2 -translate-y-1/2 size-12 sm:size-14 md:size-15 rounded-full border-[3px] border-white shadow-[0_6px_18px_rgba(0,0,0,0.15)] overflow-hidden bg-white hover:scale-110 transition-transform z-20">
                    <Image
                      src="/images/peers-avatars/amit-desai.jpg"
                      alt="Peers Global Member"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Pin 2: Europe / Central (Female Executive Leader) */}
                  <div className="absolute top-[38%] left-[43%] -translate-x-1/2 -translate-y-1/2 size-13 sm:size-15 md:size-16 rounded-full border-[3.5px] border-white shadow-[0_6px_20px_rgba(0,0,0,0.18)] overflow-hidden bg-white hover:scale-110 transition-transform ring-2 ring-blue-400/40 z-20">
                    <Image
                      src="/images/peers-avatars/priya-desai.jpg"
                      alt="Peers Global Member"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Pin 3: India / South Asia (Female Founder) */}
                  <div className="absolute top-[46%] left-[71%] -translate-x-1/2 -translate-y-1/2 size-12 sm:size-14 md:size-15 rounded-full border-[3px] border-white shadow-[0_6px_18px_rgba(0,0,0,0.15)] overflow-hidden bg-white hover:scale-110 transition-transform z-20">
                    <Image
                      src="/images/peers-avatars/neha-kothari.jpg"
                      alt="Peers Global Member"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Pin 4: South America (Female Founder) */}
                  <div className="absolute top-[62%] left-[17%] -translate-x-1/2 -translate-y-1/2 size-12 sm:size-14 md:size-15 rounded-full border-[3px] border-white shadow-[0_6px_18px_rgba(0,0,0,0.15)] overflow-hidden bg-white hover:scale-110 transition-transform z-20">
                    <Image
                      src="/images/peers-avatars/fatima-khan.jpg"
                      alt="Peers Global Member"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Pin 5: Australia / Oceania (Female Leader) */}
                  <div className="absolute top-[75%] left-[75%] -translate-x-1/2 -translate-y-1/2 size-12 sm:size-14 md:size-15 rounded-full border-[3px] border-white shadow-[0_6px_18px_rgba(0,0,0,0.15)] overflow-hidden bg-white hover:scale-110 transition-transform z-20">
                    <Image
                      src="/images/story-priya-karan.jpg"
                      alt="Peers Global Member"
                      fill
                      className="object-cover"
                    />
                  </div>

                </div>
              </div>

            </div>

            {/* Right Navigation Arrow (Positioned cleanly outside in dedicated space) */}
            <button
              type="button"
              onClick={nextTestimonial}
              aria-label="Next testimonials"
              className="absolute right-0 sm:right-1 top-1/2 -translate-y-1/2 z-30 size-10 sm:size-11 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 flex items-center justify-center shadow-md hover:shadow-lg focus:outline-none transition-all active:scale-95"
            >
              <ChevronRight className="size-5 sm:size-6 text-slate-700" />
            </button>
          </div>

        </div>
      </section>
    </div>
  )
}
