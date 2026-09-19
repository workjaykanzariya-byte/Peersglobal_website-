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
    <div className="min-h-screen bg-[#FDFBF7] text-[#0F172A] font-sans antialiased selection:bg-[#0062D2] selection:text-white">
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

      {/* ─── Hero Section: Split Layout (Left Branding & Photo, Right Form Card) ─── */}
      <section className="relative pt-8 pb-14 sm:pt-12 sm:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* ── Left Column: Value Proposition & Image Banner ── */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="text-xs font-extrabold uppercase tracking-widest text-[#B37822]">
                  BECOME A PEER
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-serif font-bold text-[#0D1F47] tracking-tight leading-[1.08]">
                  Join <br className="hidden sm:inline" />
                  <span className="text-[#0062D2]">Peers Global</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 max-w-lg leading-relaxed">
                  A global community of entrepreneurs who give, grow and build together.
                </p>

                {/* 3 Real Badges */}
                <div className="pt-2 flex flex-wrap items-center gap-6 sm:gap-8">
                  <div className="flex items-center gap-2.5">
                    <div className="size-8 rounded-lg bg-blue-50 text-[#0062D2] flex items-center justify-center">
                      <Users2 className="size-4" />
                    </div>
                    <div className="text-xs font-bold text-slate-900 leading-tight">
                      Real <br />
                      <span className="text-slate-500 font-normal">Entrepreneurs</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="size-8 rounded-lg bg-amber-50 text-[#B37822] flex items-center justify-center">
                      <TrendingUp className="size-4" />
                    </div>
                    <div className="text-xs font-bold text-slate-900 leading-tight">
                      Real <br />
                      <span className="text-slate-500 font-normal">Collaborations</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="size-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <Globe2 className="size-4" />
                    </div>
                    <div className="text-xs font-bold text-slate-900 leading-tight">
                      Real <br />
                      <span className="text-slate-500 font-normal">Impact</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Photo Box with Overlay Typography & Quote */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 aspect-[16/11] sm:aspect-[16/10] bg-slate-900 group">
                <Image
                  src="/images/who-we-are-inner-board.jpg"
                  alt="Peers Global entrepreneurs collaborating in an executive room"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-transparent" />

                {/* Typography Accent in Background */}
                <div className="absolute top-6 right-6 text-right text-white/90 space-y-0.5 select-none pointer-events-none drop-shadow-md">
                  <div className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-amber-300">
                    BUILD BUSINESS
                  </div>
                  <div className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-white/90">
                    BUILD RELATIONSHIPS
                  </div>
                  <div className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-sky-300">
                    BUILD A BETTER TOMORROW
                  </div>
                </div>

                {/* Quote Callout at Bottom */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="border-l-4 border-amber-400 pl-4 py-1 text-white">
                    <p className="font-serif italic text-lg sm:text-xl font-medium leading-tight text-white drop-shadow">
                      &ldquo;The right room changes everything.&rdquo;
                    </p>
                    <span className="text-xs text-amber-300 font-semibold mt-1 block">
                      — Peers Global
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right Column: "Create Your Account" Form Card ── */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.08)] p-6 sm:p-9 relative">
                
                {/* Card Header */}
                <div className="flex items-start justify-between border-b border-slate-100 pb-5">
                  <div className="space-y-1">
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D1F47]">
                      Create Your Account
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Take the first step towards a stronger, more collaborative tomorrow.
                    </p>
                  </div>
                  <div className="text-right text-xs shrink-0 hidden sm:block">
                    <span className="text-slate-400">Already a member?</span>
                    <a
                      href="https://unity.peersglobal.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-[#0062D2] font-bold hover:underline"
                    >
                      Login here
                    </a>
                  </div>
                </div>

                {/* Multi-Step Stepper Header */}
                <div className="py-6 border-b border-slate-100">
                  <div className="flex items-center justify-between relative">
                    {/* Connecting line */}
                    <div className="absolute top-4 left-6 right-6 h-0.5 bg-slate-100 -z-0" />
                    <div
                      className="absolute top-4 left-6 h-0.5 bg-[#0062D2] transition-all duration-300 -z-0"
                      style={{
                        width: currentStep === 1 ? '0%' : currentStep === 2 ? '50%' : '88%',
                      }}
                    />

                    {/* Step 1 */}
                    <div className="flex flex-col items-center gap-1.5 relative z-10 bg-white px-2">
                      <div
                        className={`size-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                          currentStep >= 1
                            ? 'bg-[#0062D2] text-white shadow-md shadow-blue-500/30'
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
                            ? 'bg-[#0062D2] text-white shadow-md shadow-blue-500/30'
                            : 'bg-slate-100 text-slate-400'
                        }`}
                      >
                        2
                      </div>
                      <span
                        className={`text-[11px] font-semibold ${
                          currentStep === 2 ? 'text-[#0062D2]' : 'text-slate-500'
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
                            ? 'bg-[#0062D2] text-white shadow-md shadow-blue-500/30'
                            : 'bg-slate-100 text-slate-400'
                        }`}
                      >
                        3
                      </div>
                      <span
                        className={`text-[11px] font-semibold ${
                          currentStep === 3 ? 'text-[#0062D2]' : 'text-slate-500'
                        }`}
                      >
                        Verify &amp; Complete
                      </span>
                    </div>
                  </div>
                </div>

                {/* Form Body */}
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
                  <form onSubmit={handleStepSubmit} className="pt-6 space-y-5">
                    
                    {/* ── STEP 1: Personal Details ── */}
                    {currentStep === 1 && (
                      <div className="space-y-4 animate-in fade-in duration-200">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {/* Full Name */}
                          <div className="space-y-1.5">
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
                                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0062D2] focus:ring-1 focus:ring-[#0062D2] transition-all"
                              />
                            </div>
                          </div>

                          {/* Email Address */}
                          <div className="space-y-1.5">
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
                                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0062D2] focus:ring-1 focus:ring-[#0062D2] transition-all"
                              />
                            </div>
                          </div>

                          {/* Mobile Number with +91 Country Code */}
                          <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-800">
                              Mobile Number <span className="text-red-500">*</span>
                            </label>
                            <div className="flex rounded-xl border border-slate-200 bg-white overflow-hidden focus-within:border-[#0062D2] focus-within:ring-1 focus-within:ring-[#0062D2] transition-all">
                              <div className="flex items-center gap-1.5 px-3 bg-slate-50 border-r border-slate-200 text-xs font-semibold text-slate-700 select-none">
                                <span className="text-sm">🇮🇳</span>
                                <span>+91</span>
                              </div>
                              <input
                                type="tel"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter your mobile number"
                                className="w-full px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none bg-transparent"
                              />
                            </div>
                          </div>

                          {/* Password */}
                          <div className="space-y-1.5">
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
                                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0062D2] focus:ring-1 focus:ring-[#0062D2] transition-all"
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
                          <div className="space-y-1.5">
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
                                className="w-full pl-10 pr-8 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:border-[#0062D2] focus:ring-1 focus:ring-[#0062D2] appearance-none transition-all"
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
                          <div className="space-y-1.5">
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
                                className="w-full pl-10 pr-8 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:border-[#0062D2] focus:ring-1 focus:ring-[#0062D2] appearance-none transition-all"
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
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-800">
                            How did you hear about us?
                          </label>
                          <div className="relative">
                            <Megaphone className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400 pointer-events-none" />
                            <select
                              name="hearAbout"
                              value={formData.hearAbout}
                              onChange={handleChange}
                              className="w-full pl-10 pr-8 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:border-[#0062D2] focus:ring-1 focus:ring-[#0062D2] appearance-none transition-all"
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
                          className="w-full py-3.5 rounded-xl bg-[#0062D2] hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-600/25 flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
                        >
                          <span>Continue to Business Details</span>
                          <ArrowRight className="size-4" />
                        </button>

                        {/* OR Divider */}
                        <div className="relative flex py-1 items-center">
                          <div className="flex-grow border-t border-slate-200"></div>
                          <span className="flex-shrink mx-4 text-[11px] font-semibold text-slate-400 uppercase tracking-widest">
                            OR
                          </span>
                          <div className="flex-grow border-t border-slate-200"></div>
                        </div>

                        {/* Social Sign-In Buttons */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <button
                            type="button"
                            onClick={() => handleSocialSignUp('Google')}
                            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold shadow-xs transition-all"
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
                            <span>Continue with Google</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => handleSocialSignUp('Apple')}
                            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold shadow-xs transition-all"
                          >
                            <svg className="size-4 fill-current" viewBox="0 0 24 24">
                              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.09 1.74-.96 2.76 1.02.08 2.05-.51 2.69-1.26z" />
                            </svg>
                            <span>Continue with Apple</span>
                          </button>
                        </div>

                        {/* Security Subtext */}
                        <div className="pt-2 text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
                          <Lock className="size-3 text-slate-400" />
                          <span>Your information is encrypted and confidential.</span>
                        </div>
                      </div>
                    )}

                    {/* ── STEP 2: Business Details ── */}
                    {currentStep === 2 && (
                      <div className="space-y-4 animate-in fade-in duration-200">
                        <div className="space-y-1">
                          <h3 className="text-base font-bold text-slate-900">
                            Enterprise Scale &amp; Role
                          </h3>
                          <p className="text-xs text-slate-500">
                            Category seats are locked 1 per industry to guarantee zero conflict of interest.
                          </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
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
                              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:border-[#0062D2] focus:ring-1 focus:ring-[#0062D2] transition-all"
                            />
                          </div>

                          <div className="space-y-1.5">
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
                              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:border-[#0062D2] focus:ring-1 focus:ring-[#0062D2] transition-all"
                            />
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-800">
                              Annual Turnover Band <span className="text-red-500">*</span>
                            </label>
                            <select
                              name="turnover"
                              value={formData.turnover}
                              onChange={handleChange}
                              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:border-[#0062D2] focus:ring-1 focus:ring-[#0062D2] transition-all"
                            >
                              {TURNOVER_OPTIONS.map((t) => (
                                <option key={t} value={t}>{t}</option>
                              ))}
                            </select>
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-800">
                              Team Size
                            </label>
                            <select
                              name="teamSize"
                              value={formData.teamSize}
                              onChange={handleChange}
                              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:border-[#0062D2] focus:ring-1 focus:ring-[#0062D2] transition-all"
                            >
                              <option value="1–10 Employees">1–10 Employees</option>
                              <option value="10–50 Employees">10–50 Employees</option>
                              <option value="50–200 Employees">50–200 Employees</option>
                              <option value="200+ Employees">200+ Employees</option>
                            </select>
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-800">
                            Primary Collaboration Goal
                          </label>
                          <input
                            type="text"
                            name="primaryGoal"
                            value={formData.primaryGoal}
                            onChange={handleChange}
                            placeholder="e.g. Cross-city expansion, supply chain JVs, peer mentorship"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:border-[#0062D2] focus:ring-1 focus:ring-[#0062D2] transition-all"
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
                            className="py-3 px-6 rounded-xl bg-[#0062D2] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-1.5"
                          >
                            <span>Continue to Verification</span>
                            <ArrowRight className="size-4" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* ── STEP 3: Verify & Complete ── */}
                    {currentStep === 3 && (
                      <div className="space-y-4 animate-in fade-in duration-200">
                        <div className="space-y-1">
                          <h3 className="text-base font-bold text-slate-900">
                            Final Review &amp; Code of Collaboration
                          </h3>
                          <p className="text-xs text-slate-500">
                            Review your details and confirm your commitment to the Give-First community code.
                          </p>
                        </div>

                        <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-2 text-xs">
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

                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-800">
                            What expertise or knowledge can you share with fellow Peers?
                          </label>
                          <textarea
                            name="giveExpertise"
                            rows={2}
                            value={formData.giveExpertise}
                            onChange={handleChange}
                            placeholder="e.g. Export logistics, scaling D2C supply chains, enterprise software sales..."
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-900 focus:outline-none focus:border-[#0062D2] focus:ring-1 focus:ring-[#0062D2] transition-all"
                          />
                        </div>

                        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1.5">
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
                            className="py-3 px-6 rounded-xl bg-[#0062D2] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-1.5 disabled:opacity-50"
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
      </section>

      {/* ─── Full-Width Stats Banner (Dark Navy) ─── */}
      <section className="bg-[#0B1220] text-white py-10 sm:py-12 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-800/80 text-center">
            <div className="pt-3 sm:pt-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                10,000+
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                Entrepreneurs
              </div>
            </div>

            <div className="pt-3 sm:pt-0 sm:pl-6">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                200+
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                Circles
              </div>
            </div>

            <div className="pt-3 sm:pt-0 sm:pl-6">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                75+
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                Cities
              </div>
            </div>

            <div className="pt-3 sm:pt-0 sm:pl-6">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                10+
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                Countries
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Split Cards: "What happens next?" & "Take the Community With You" ─── */}
      <section className="py-14 sm:py-20 bg-[#FAF7F0] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Card: "What happens next?" */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-1">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D1F47]">
                  What happens next?
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Our structured induction process preserves the standard of every Circle.
                </p>
              </div>

              {/* 4 Steps Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                {/* 1 */}
                <div className="flex flex-col items-center space-y-2.5">
                  <div className="size-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0062D2]">
                    <Mail className="size-5" />
                  </div>
                  <div className="text-xs text-slate-700 leading-snug">
                    <strong className="block text-slate-900 font-bold">1. Verify details</strong>
                    Email and mobile number check
                  </div>
                </div>

                {/* 2 */}
                <div className="flex flex-col items-center space-y-2.5">
                  <div className="size-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0062D2]">
                    <FileText className="size-5" />
                  </div>
                  <div className="text-xs text-slate-700 leading-snug">
                    <strong className="block text-slate-900 font-bold">2. Complete profile</strong>
                    Enterprise &amp; turnover details
                  </div>
                </div>

                {/* 3 */}
                <div className="flex flex-col items-center space-y-2.5">
                  <div className="size-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0062D2]">
                    <Users2 className="size-5" />
                  </div>
                  <div className="text-xs text-slate-700 leading-snug">
                    <strong className="block text-slate-900 font-bold">3. Get reviewed</strong>
                    Category check by our team
                  </div>
                </div>

                {/* 4 */}
                <div className="flex flex-col items-center space-y-2.5">
                  <div className="size-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                    <Check className="size-5" />
                  </div>
                  <div className="text-xs text-slate-700 leading-snug">
                    <strong className="block text-slate-900 font-bold">4. Start journey</strong>
                    Induction as a Peers Member
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card: "Take the Community With You" (Unity App Banner) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0A193D] via-[#0C2258] to-[#0A193D] rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden flex flex-col justify-between">
              {/* App Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/15 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif font-bold text-white">
                    Take the Community <br />
                    With You
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xs">
                    Download the Unity App to connect, collaborate and grow on the go.
                  </p>
                </div>

                <div>
                  <Link
                    href="/unity"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0062D2] hover:bg-blue-600 text-white font-bold text-xs shadow-lg transition-all"
                  >
                    <span>Download Unity App</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>

              {/* Realistic App Screen Graphic / Mockup in Right Bottom */}
              <div className="mt-6 sm:mt-0 relative flex justify-end">
                <div className="relative w-48 sm:w-56 aspect-[9/14] rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-slate-900 translate-y-4 sm:translate-y-8 group-hover:translate-y-2 transition-all">
                  <Image
                    src="/images/who-we-are-friends.jpg"
                    alt="Peers Global Unity mobile platform screen"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between text-[9px] text-white/80">
                    <span className="font-bold">Peers Unity</span>
                    <span className="size-1.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="absolute bottom-3 inset-x-3 text-center text-white">
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
        </div>
      </section>

      {/* ─── "Trusted by entrepreneurs across industries" (Testimonials Row) ─── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D1F47]">
              Trusted by entrepreneurs across industries
            </h3>
          </div>

          <div className="relative flex items-center">
            {/* Left Button */}
            <button
              type="button"
              onClick={prevTestimonial}
              aria-label="Previous testimonials"
              className="absolute -left-3 sm:-left-5 z-10 size-9 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 flex items-center justify-center shadow-md focus:outline-none"
            >
              <ChevronLeft className="size-5" />
            </button>

            {/* Testimonials Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-4">
              {TESTIMONIALS.slice(0, 3).map((item, idx) => (
                <div
                  key={item.name}
                  className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md transition-all"
                >
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-3 pt-3 border-t border-slate-200/60">
                    <div className="relative size-11 rounded-full overflow-hidden border border-slate-200 shrink-0">
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

            {/* Right Button */}
            <button
              type="button"
              onClick={nextTestimonial}
              aria-label="Next testimonials"
              className="absolute -right-3 sm:-right-5 z-10 size-9 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 flex items-center justify-center shadow-md focus:outline-none"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-1.5 pt-2">
            <span className="size-2 rounded-full bg-[#0062D2]" />
            <span className="size-2 rounded-full bg-slate-300" />
            <span className="size-2 rounded-full bg-slate-300" />
            <span className="size-2 rounded-full bg-slate-300" />
          </div>
        </div>
      </section>
    </div>
  )
}
