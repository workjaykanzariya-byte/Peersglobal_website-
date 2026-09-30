'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  ChevronRight,
  Handshake,
  ShieldCheck,
  ShieldAlert,
  Sparkles,
  CheckCircle2,
  Check,
  XCircle,
  Building2,
  Briefcase,
  Send,
  Layers,
  Award,
  ExternalLink,
  Target,
  Eye,
  Gift,
  Megaphone,
  Users,
  Lightbulb,
  Compass,
  Rocket,
  GraduationCap,
} from 'lucide-react'

const PARTNERSHIP_FORMS = [
  {
    title: 'EXPERIENCE',
    desc: 'Creating meaningful experiences for Peers and entrepreneurs.',
    icon: Sparkles,
    tag: 'Community Experience'
  },
  {
    title: 'KNOWLEDGE',
    desc: 'Bringing expertise, learning or specialised capability to the ecosystem.',
    icon: Briefcase,
    tag: 'Capability & Learning'
  },
  {
    title: 'COLLABORATION',
    desc: 'Creating something together that neither organisation would have built as effectively alone.',
    icon: Handshake,
    tag: 'Joint Co-Creation'
  },
  {
    title: 'IMPACT',
    desc: 'Supporting initiatives that create measurable value beyond commercial outcomes.',
    icon: Target,
    tag: 'Social & MSME Impact'
  },
  {
    title: 'VISIBILITY',
    desc: 'Participating in appropriate PEERS GLOBAL platforms, events or media opportunities.',
    icon: Eye,
    tag: 'Ecosystem Platforms'
  },
  {
    title: 'RESOURCES',
    desc: 'Making useful resources, capabilities or opportunities available to the community.',
    icon: Layers,
    tag: 'Practical Resources'
  }
]

const NOT_ACCESS_POINTS = [
  'Member data & private contact details',
  'Private conversations & confidential forums',
  'Circle discussions & Closed-door sessions',
  'Personal information & founder identities',
  'Direct selling opportunities into meetings',
  'Unsolicited commercial outreach & mass messaging'
]

const DECLINE_REASONS = [
  'Unsolicited selling into Circles',
  'Access to member data and directory scraping',
  'Lead extraction and commercial prospecting',
  'Aggressive commercial promotion and hype',
  'Misleading claims and unverified promises',
  'Poor member experience or extractive models',
  'Conflicts with our community values and non-zero-sum ethos'
]

const BRAND_PARTNERS = [
  {
    name: 'Vyapaar Jagat Media Network',
    type: 'Editorial & Storytelling Partner',
    coCreation: 'Curating authentic founder spotlights, video documentaries, and national award stages for honest MSME leaders.',
    peerBenefit: 'Verified editorial visibility and long-form national media reach for Peer enterprises.',
    link: 'https://vyapaarjagat.com'
  },
  {
    name: 'Bharat Enterprise Tech Consortium',
    type: 'Technology Infrastructure Partner',
    coCreation: 'Providing governed digital transformation architectures and scalable ERP frameworks for mid-market manufacturing.',
    peerBenefit: 'Curated, zero-sales-pressure technology roadmaps with dedicated institutional advisory.',
    link: '#'
  },
  {
    name: 'MSME Growth & Legal Advisory Guild',
    type: 'Governance & Compliance Partner',
    coCreation: 'Co-hosting masterclasses on succession planning, cross-border contracts, and IP protection for founders.',
    peerBenefit: 'Direct institutional knowledge and executive legal frameworks tailored for Indian enterprise owners.',
    link: '#'
  }
]

const SPONSORSHIP_AREAS = [
  {
    title: 'Annual Conclaves & Summits',
    desc: 'Support flagship regional gatherings uniting hundreds of high-growth founders across industrial hubs.',
    scope: 'Keynote stage partner, curated knowledge lounges, and opening ceremony presence.'
  },
  {
    title: 'Learning & Masterclasses',
    desc: 'Underwrite specialized executive workshops and operational playbooks delivered by industry stalwarts.',
    scope: 'Co-branded academic resources, digital knowledge archives, and case study series.'
  },
  {
    title: 'Social Impact & Mentorship',
    desc: 'Sponsor non-commercial fellowship programs for first-generation grassroots entrepreneurs.',
    scope: 'Direct alignment with 1 Action = 1 Life Impacted foundation initiatives and annual impact reports.'
  },
  {
    title: 'Circle Magazines & Coffee Table Books',
    desc: 'Underwrite high-production print and digital chronicles celebrating honest entrepreneurial journeys.',
    scope: 'Premium print feature recognition and global distribution across industry trade bodies.'
  }
]

const ADVERTISING_CHANNELS = [
  {
    title: 'Public Web Platform',
    desc: 'Selective header and footer sponsor badges across high-traffic public ecosystem pages.',
    badge: 'Public Web Only'
  },
  {
    title: 'Media Properties (Vyapaar Jagat TV & Podcast)',
    desc: 'Clear, declared segment sponsorships on long-form audio/video interview broadcasts.',
    badge: 'Declared Media'
  },
  {
    title: 'Public Print & Digital Publications',
    desc: 'Full-page editorial spreads and back-cover feature sponsorships in quarterly ecosystem editions.',
    badge: 'Print & Digital'
  },
  {
    title: 'Public Event Portals',
    desc: 'Official partner banners across public registration portals and conclave landing pages.',
    badge: 'Conclaves & Portals'
  }
]

const EXPECTATIONS_PARTNERS = [
  {
    title: 'RESPECT',
    desc: 'Treat every Peer as a person — not a lead.'
  },
  {
    title: 'RELEVANCE',
    desc: 'Bring something genuinely useful and high-utility to the table.'
  },
  {
    title: 'TRANSPARENCY',
    desc: 'Be completely clear about who you are, what you offer, and your commercial scope.'
  },
  {
    title: 'EXPERIENCE',
    desc: 'Protect the quality and sanctity of every single member interaction.'
  },
  {
    title: 'RESPONSIBILITY',
    desc: 'Stand behind your claims with verified facts and unconditional accountability.'
  },
  {
    title: 'CONTRIBUTION',
    desc: 'Think about what you can add to the community — not only what you can receive.'
  }
]

const PROMISES_FROM_US = [
  'We will not promise access that should not exist.',
  'We will not represent sponsorship as community endorsement.',
  'We will not allow commercial relationships to quietly become member solicitation.',
  'We will clearly distinguish: Editorial, Partnership, Sponsorship, Advertising, and Community contribution.',
  'Where a relationship does not serve the ecosystem, we will say so without hesitation.'
]

export function PartnerPageClient() {
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    role: '',
    email: '',
    phone: '',
    relationshipType: 'Strategic Partnership',
    whyPeersGlobal: '',
    whatToBuild: '',
    whoBenefits: '',
    whatToContribute: ''
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
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-rose-100 selection:text-[#E11D48]">
      {/* ── Breadcrumb Navigation ── */}
      <div className="border-b border-slate-200/70 bg-white/90 backdrop-blur-md sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-slate-500 font-medium">
            <Link href="/" className="hover:text-[#1D4ED8] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-bold brand-gradient-text">Partner With Us</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-50/80 to-rose-50/80 border border-slate-200">
              <Handshake className="w-3.5 h-3.5 text-[#1D4ED8]" />
              <span className="brand-gradient-text">Ecosystem Alliances</span>
            </span>
          </div>
        </div>
      </div>

      {/* ── Signature Hero Section (Home & Circles Master Design Layout) ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#FAFBFD] to-white text-slate-900 pt-6 sm:pt-10 pb-12 sm:pb-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Hero Banner with Smooth Left-Fading Media/Video Backdrop */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[36px] bg-white border border-slate-200/80 shadow-sm min-h-[540px] lg:min-h-[600px] flex items-center">
            
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

              {/* Seamless gradient overlays for misty fade */}
              <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white via-white/85 via-30% to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none" />

              {/* Top-Right Script Typography */}
              <div className="absolute top-6 sm:top-8 right-6 sm:right-8 z-20 text-right drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] pointer-events-none select-none">
                <p className="text-xl sm:text-2xl text-white/95 leading-tight" style={{ fontFamily: 'var(--font-script)' }}>
                  Ecosystem Alliances
                </p>
                <p className="text-xl sm:text-2xl text-white/95 leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Co-Creation Over Promotion
                </p>
                <p className="text-2xl sm:text-3xl text-amber-300 font-medium leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Relationships First
                </p>
              </div>

              {/* Bottom-Right Frosted Glass Pill */}
              <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-20 pointer-events-none select-none hidden sm:block">
                <div className="rounded-xl border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2.5 shadow-lg text-left">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/70">
                    STRATEGIC PARTNERSHIPS
                  </p>
                  <p className="text-xs font-bold tracking-wider text-white">
                    PEERS GLOBAL ALLIANCE
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
                    PARTNER WITH US
                  </span>
                </div>

                {/* H1 Heading */}
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-[48px] font-bold text-slate-950 tracking-tight leading-[1.14] mb-4">
                  Build something meaningful with a community that believes{' '}
                  <span className="italic bg-gradient-to-r from-[#1D4ED8] via-[#8B5CF6] to-[#E11D48] bg-clip-text text-transparent font-medium">
                    relationships come before transactions.
                  </span>
                </h1>

                {/* Subtitle & Value Proposition Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50/90 to-rose-50/50 border border-blue-100/80 mb-6 max-w-lg">
                  <p className="text-xs sm:text-sm text-slate-500">
                    The question is not <span className="line-through text-slate-400">“What can you sell to our community?”</span>
                  </p>
                  <p className="text-base sm:text-lg font-serif font-bold text-slate-950 mt-1">
                    It is “What can we create together that is genuinely valuable?”
                  </p>
                  <p className="text-xs text-slate-600 mt-1.5">
                    We are not simply offering an audience. We invite the right organisations to become an active pillar of an ecosystem.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
                  <a
                    href="#start-conversation"
                    className="rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider shadow-lg shadow-blue-600/20 transition-all hover:scale-105 inline-flex items-center gap-2 uppercase cursor-pointer"
                  >
                    <span>Start a Conversation</span>
                    <ArrowRight className="size-4" />
                  </a>

                  <a
                    href="#who-we-partner-with"
                    className="rounded-full border border-slate-300 hover:border-slate-400 bg-white text-slate-800 px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wider transition-all hover:scale-105 hover:bg-slate-50 shadow-2xs inline-flex items-center gap-2 uppercase cursor-pointer"
                  >
                    <span>Who We Partner With</span>
                  </a>

                  <a
                    href="#partners-vs-sponsors"
                    className="rounded-full border border-slate-300 hover:border-slate-400 bg-white text-slate-700 px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wider transition-all hover:scale-105 hover:bg-slate-50 shadow-2xs inline-flex items-center gap-2 uppercase cursor-pointer"
                  >
                    <span>Partner vs Sponsor</span>
                  </a>
                </div>

                {/* Quick Info Bar */}
                <div className="flex items-center gap-6 text-xs text-slate-500 pt-2 border-t border-slate-200/80 w-full max-w-lg">
                  <div className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Strict Member Privacy Protocol</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <Sparkles className="w-4 h-4 text-[#1D4ED8]" />
                    <span>Zero Direct Sales Exploitation</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── WHO WE PARTNER WITH ── */}
      <section id="who-we-partner-with" className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#FAFBFD] to-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_50%_at_20%_20%,rgba(29,78,216,0.03),transparent_60%)]" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                Alignment &amp; Purpose
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950">
              WHO WE PARTNER WITH
            </h2>
            <p className="text-slate-700 text-base sm:text-lg">
              We look for organisations whose presence can strengthen the experience of being part of PEERS GLOBAL.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Creating Better Experiences',
                desc: 'Enhancing the everyday journey and trusted connection points for community entrepreneurs.',
                icon: Users,
                tag: 'Community Life'
              },
              {
                num: '02',
                title: 'Making Resources Accessible',
                desc: 'Opening up useful tools, institutional capabilities, and scalable operational infrastructure.',
                icon: Layers,
                tag: 'Infrastructure & Tools'
              },
              {
                num: '03',
                title: 'Supporting Learning & Capability',
                desc: 'Bringing structured masterclasses, operational playbooks, and executive skill development.',
                icon: GraduationCap,
                tag: 'Knowledge Transfer'
              },
              {
                num: '04',
                title: 'Enabling Meaningful Collaboration',
                desc: 'Unlocking cross-industry joint ventures, syndicate building, and bilateral co-creation.',
                icon: Handshake,
                tag: 'Joint Ventures'
              },
              {
                num: '05',
                title: 'Supporting Entrepreneurial Impact',
                desc: 'Directly empowering grassroots founders, mentoring students, and MSME philanthropy.',
                icon: Target,
                tag: '1 Action = 1 Life'
              },
              {
                num: '06',
                title: 'Creating Ecosystem Opportunities',
                desc: 'Helping us take something genuinely valuable further across industries and national geographies.',
                icon: Rocket,
                tag: 'National Reach'
              }
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-400 hover:shadow-lg transition-all flex flex-col justify-between space-y-4 group shadow-2xs hover:-translate-y-1"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-rose-50 border border-slate-200 flex items-center justify-center text-[#1D4ED8] group-hover:scale-110 transition-transform shadow-2xs">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                          {item.tag}
                        </span>
                        <span className="text-xs font-mono font-bold brand-gradient-text bg-gradient-to-br from-blue-50 to-rose-50 border border-slate-200 px-2 py-0.5 rounded-md">
                          {item.num}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg font-serif font-bold text-slate-950 group-hover:text-[#1D4ED8] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="font-medium">Strategic Alignment</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#1D4ED8] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              )
            })}
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50/80 via-white to-rose-50/50 border border-slate-200 text-center shadow-xs">
            <p className="text-base sm:text-lg font-serif text-slate-900">
              The strongest partnerships begin with <strong className="brand-gradient-text">shared purpose</strong>. Not simply shared visibility.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT PARTNERSHIP LOOKS LIKE ── */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#FAFBFD] to-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_50%_at_80%_20%,rgba(225,29,72,0.03),transparent_60%)]" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                Engagement Models
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950">
              WHAT PARTNERSHIP LOOKS LIKE
            </h2>
            <p className="text-slate-700 text-base sm:text-lg">
              Partnership can take different forms. Depending on the opportunity, it may include:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PARTNERSHIP_FORMS.map((form, idx) => {
              const Icon = form.icon
              return (
                <div
                  key={idx}
                  className="p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-400 hover:shadow-md transition-all flex flex-col justify-between space-y-4 group shadow-2xs hover:-translate-y-1"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-rose-50 border border-slate-200 flex items-center justify-center text-[#1D4ED8] group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                        {form.tag}
                      </span>
                    </div>
                    <h3 className="text-lg font-serif font-bold text-slate-950 group-hover:text-[#1D4ED8] transition-colors">
                      {form.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{form.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="p-8 rounded-2xl bg-white border border-slate-200 text-center max-w-3xl mx-auto shadow-xs space-y-2 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
            <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">
              The Unwavering Standard
            </p>
            <p className="text-xl sm:text-2xl font-serif font-bold text-slate-950">
              The form may change. The principle does not.
            </p>
            <p className="text-base sm:text-lg brand-gradient-text font-semibold">
              The partnership must create value for the ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* ── PARTNERSHIP IS NOT ACCESS & WHO WE DECLINE ── */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#FAFBFD] to-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_30%_60%,rgba(29,78,216,0.03),transparent_60%)]" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* PARTNERSHIP IS NOT ACCESS */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 flex flex-col justify-between space-y-6 shadow-sm">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-bold text-rose-700">
                  <ShieldAlert className="w-4 h-4 text-rose-600" />
                  PROTECTING TRUST
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950">
                  PARTNERSHIP IS NOT ACCESS
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  PEERS GLOBAL is built on trust. A partnership does not automatically create access to:
                </p>

                <ul className="space-y-3">
                  {NOT_ACCESS_POINTS.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                      <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50/70 to-rose-50/40 border border-slate-200 shadow-2xs">
                <p className="text-sm font-bold text-slate-900">
                  The community is not an audience to be mined.
                </p>
                <p className="text-xs text-slate-600 mt-1">
                  Our Peers are people first. Their trust is something we protect unconditionally.
                </p>
              </div>
            </div>

            {/* WHO WE DECLINE */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 flex flex-col justify-between space-y-6 shadow-sm">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-amber-800">
                  <ShieldCheck className="w-4 h-4 text-amber-700" />
                  INTENTIONAL BOUNDARIES
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950">
                  WHO WE DECLINE
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Not every commercial relationship is the right relationship. We may decline organisations whose proposed involvement conflicts with the experience we are building. This includes partnerships based primarily on:
                </p>

                <ul className="space-y-2.5">
                  {DECLINE_REASONS.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-amber-50/70 border border-amber-200 shadow-2xs">
                <p className="text-sm font-bold text-amber-900">
                  We do not partner with organisations that want to sell into our Circles.
                </p>
                <p className="text-xs text-amber-800 mt-1 leading-relaxed">
                  That boundary is intentional. It protects the relationship between Peers, the trust within Circles, and what PEERS GLOBAL is trying to build.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR BRAND PARTNERS ── */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#FAFBFD] to-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(29,78,216,0.03),transparent_60%)]" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                Active Collaborators
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950">
              OUR BRAND PARTNERS
            </h2>
            <p className="text-slate-700 text-base sm:text-lg">
              Organisations already contributing to the ecosystem. Every partner has a clear relationship, defined purpose, approved use of the brand, and defined ecosystem benefit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BRAND_PARTNERS.map((partner, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-400 hover:shadow-md transition-all flex flex-col justify-between space-y-5 shadow-2xs hover:-translate-y-1"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-rose-50 border border-slate-200 flex items-center justify-center text-[#1D4ED8]">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-slate-950">{partner.name}</h3>
                  <span className="inline-block text-xs font-semibold brand-gradient-text">
                    {partner.type}
                  </span>

                  <div className="space-y-3 pt-3 border-t border-slate-100 text-xs leading-relaxed">
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">What we are creating together:</span>
                      <p className="text-slate-600">{partner.coCreation}</p>
                    </div>
                    <div>
                      <span className="font-bold text-[#1D4ED8] block mb-0.5">How Peers benefit:</span>
                      <p className="text-slate-600">{partner.peerBenefit}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Official Partner</span>
                  {partner.link !== '#' ? (
                    <a
                      href={partner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#1D4ED8] hover:underline flex items-center gap-1"
                    >
                      Visit Platform <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-slate-400">Institutional Charter</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center max-w-3xl mx-auto shadow-xs">
            <p className="text-sm text-slate-700 italic font-serif">
              “No partner should appear simply because they have paid for visibility. Partnership should be explainable in one sentence: <strong className="text-slate-950 font-bold not-italic">‘This relationship exists because it creates value for the ecosystem.’</strong>”
            </p>
          </div>
        </div>
      </section>

      {/* ── SPONSORSHIP & ADVERTISING ── */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#FAFBFD] to-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_75%_40%,rgba(225,29,72,0.03),transparent_60%)]" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* SPONSORSHIP */}
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-50/80 to-rose-50/80 border border-slate-200 text-xs font-bold mb-3">
                  <Gift className="w-4 h-4 text-[#1D4ED8]" />
                  <span className="brand-gradient-text">SPONSORSHIP</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 mb-2">
                  Support something worth building.
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Some PEERS GLOBAL initiatives, events and experiences may be appropriate for sponsorship. Sponsorship can help make larger experiences possible. But sponsorship should never purchase the trust of the community.
                </p>
              </div>

              <div className="space-y-3">
                {SPONSORSHIP_AREAS.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 space-y-1 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all">
                    <h3 className="text-sm font-bold text-slate-950">{item.title}</h3>
                    <p className="text-xs text-slate-600">{item.desc}</p>
                    <span className="text-[11px] font-bold brand-gradient-text block pt-1">
                      Scope: {item.scope}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ADVERTISE WITH US */}
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-50/80 to-rose-50/80 border border-slate-200 text-xs font-bold mb-3">
                  <Megaphone className="w-4 h-4 text-[#1D4ED8]" />
                  <span className="brand-gradient-text">ADVERTISE WITH US</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 mb-2">
                  Visibility has a place. But not everywhere.
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  PEERS GLOBAL may offer appropriate advertising opportunities across selected public-facing channels. Advertising can support visibility. It should never compromise the member experience.
                </p>
              </div>

              <div className="space-y-3">
                {ADVERTISING_CHANNELS.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 flex items-center justify-between gap-4 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all">
                    <div>
                      <h3 className="text-sm font-bold text-slate-950">{item.title}</h3>
                      <p className="text-xs text-slate-600">{item.desc}</p>
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-gradient-to-br from-blue-50 to-rose-50 border border-slate-200 brand-gradient-text shrink-0 shadow-2xs">
                      {item.badge}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-rose-50/80 border border-rose-200 text-xs text-rose-800 leading-relaxed font-medium">
                ⛔ Advertising does not mean access to private community spaces. Advertising is never offered inside the Unity App. Unity exists for the community, not for advertising.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE DIFFERENCE BETWEEN PARTNER, SPONSOR & ADVERTISER ── */}
      <section id="partners-vs-sponsors" className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#FAFBFD] to-white border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle ambient glowing background mesh */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(29,78,216,0.04),transparent_60%)]" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_80%_100%,rgba(225,29,72,0.03),transparent_60%)]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-2xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                Clarity Protects Trust
              </span>
              <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950">
              THE DIFFERENCE BETWEEN A PARTNER AND A SPONSOR
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              These are different relationships. We keep them separate so that expectations remain clear.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* 01 Partner Card */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-slate-400 shadow-xs hover:shadow-lg space-y-4 hover:-translate-y-1 transition-all group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-rose-50 border border-slate-200 flex items-center justify-center text-[#1D4ED8] shadow-2xs group-hover:scale-105 transition-transform">
                <Handshake className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-serif font-bold text-slate-950 group-hover:text-[#1D4ED8] transition-colors">A Partner</h3>
                  <span className="text-xs font-mono font-bold brand-gradient-text bg-gradient-to-br from-blue-50 to-rose-50 border border-slate-200 px-2 py-0.5 rounded-md">01</span>
                </div>
                <p className="text-sm font-bold brand-gradient-text">
                  Helps build something together.
                </p>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Co-creates programs, tools, or institutional capability that enhances long-term value for the entire entrepreneurial ecosystem.
              </p>
            </div>

            {/* 02 Sponsor Card */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-slate-400 shadow-xs hover:shadow-lg space-y-4 hover:-translate-y-1 transition-all group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-amber-400" />
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/70 flex items-center justify-center text-amber-700 shadow-2xs group-hover:scale-105 transition-transform">
                <Gift className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-serif font-bold text-slate-950 group-hover:text-amber-800 transition-colors">A Sponsor</h3>
                  <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-md">02</span>
                </div>
                <p className="text-sm font-bold text-amber-900">
                  Supports something specific.
                </p>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Underwrites a conclave, research report, or impact fellowship to make large-scale community experiences possible.
              </p>
            </div>

            {/* 03 Advertiser Card */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-slate-400 shadow-xs hover:shadow-lg space-y-4 hover:-translate-y-1 transition-all group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-purple-500" />
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200/70 flex items-center justify-center text-purple-700 shadow-2xs group-hover:scale-105 transition-transform">
                <Megaphone className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-serif font-bold text-slate-950 group-hover:text-purple-800 transition-colors">An Advertiser</h3>
                  <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-md">03</span>
                </div>
                <p className="text-sm font-bold text-purple-900">
                  Purchases approved visibility.
                </p>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Places declared public messages across website banners, podcasts, or magazines without accessing private member channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPECTATIONS & MUTUAL COMMITMENTS ── */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#FAFBFD] to-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_20%_40%,rgba(29,78,216,0.03),transparent_60%)]" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* WHAT WE EXPECT */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                    Standards of Collaboration
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 mb-2">
                  WHAT WE EXPECT FROM PARTNERS
                </h2>
                <p className="text-slate-600 text-sm">
                  We ask partners to understand that PEERS GLOBAL is not simply another marketing channel.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {EXPECTATIONS_PARTNERS.map((exp, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 space-y-1.5 shadow-2xs hover:border-slate-300 hover:shadow-sm transition-all group">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-bold brand-gradient-text uppercase tracking-wider">{exp.title}</h3>
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] opacity-60 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">{exp.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* WHAT PEERS CAN EXPECT */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 flex flex-col justify-between space-y-6 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                    Our Integrity Pledge
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950">
                  WHAT PEERS CAN EXPECT FROM US
                </h2>
                <p className="text-slate-600 text-sm">
                  We will be equally clear with our community and partners.
                </p>

                <ul className="space-y-3">
                  {PROMISES_FROM_US.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50/70 to-rose-50/40 border border-slate-200 text-xs text-slate-700 shadow-2xs">
                <strong className="text-slate-950 block mb-1">Non-Negotiable Editorial Separation:</strong>
                All editorial, partnership, sponsorship, advertising, and community contribution channels are kept explicitly distinct.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── A BETTER QUESTION ── */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#FAFBFD] to-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(29,78,216,0.04),transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="flex items-center justify-center gap-2">
            <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
              The Foundation of True Partnership
            </span>
            <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950">
            A BETTER QUESTION
          </h2>

          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
            <p className="text-slate-600 text-base sm:text-lg">
              Traditional partnership conversations often begin with:
            </p>
            <p className="text-lg sm:text-xl text-slate-400 font-serif italic">
              “How many people can you reach?”
            </p>
            <p className="text-slate-800 text-base sm:text-lg font-medium pt-2">
              We prefer to begin somewhere else:
            </p>
            <p className="text-2xl sm:text-3xl font-serif font-bold brand-gradient-text">
              “What could become possible if we worked together?”
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-slate-700 text-sm font-medium">
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs hover:shadow-xs transition-all">
              <strong className="text-slate-950 block">Reach</strong> is a number.
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs hover:shadow-xs transition-all">
              <strong className="block brand-gradient-text">Relationship</strong> is an experience.
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs hover:shadow-xs transition-all">
              <strong className="text-slate-950 block">Meaningful Partnership</strong> is possibility.
            </div>
          </div>
        </div>
      </section>

      {/* ── START A CONVERSATION / FORM ── */}
      <section id="start-conversation" className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#FAFBFD] to-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_50%_at_50%_20%,rgba(29,78,216,0.03),transparent_60%)]" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] brand-gradient-text">
                Dialogue &amp; Evaluation
              </span>
              <span className="h-[2px] w-5 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950">
              START A CONVERSATION
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              If you believe your organisation can contribute something meaningful to the PEERS GLOBAL ecosystem, tell us about it.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-50/80 via-white to-orange-50/60 border border-amber-200 max-w-2xl mx-auto text-center space-y-2 shadow-2xs">
            <h3 className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-700" />
              BEFORE YOU APPLY — ASK YOURSELF:
            </h3>
            <p className="text-sm text-amber-950">
              <strong>“Are we bringing value — or simply looking for access?”</strong>
              <br />
              If the answer is <span className="brand-gradient-text font-bold">value</span>, there may be something worth exploring.
              <br />
              If the answer is <span className="text-rose-600 font-bold">access</span>, this may not be the right community for you.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-rose-50 border border-slate-200 text-[#1D4ED8] rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-950">
                  Partnership Enquiry Received
                </h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                  Thank you for sharing your vision. Our ecosystem leadership team will review your proposal against our community value standards and respond within 2-3 business days.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Submit Another Proposal
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-800">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Mahindra"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#1D4ED8] text-slate-900"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-800">Organisation / Enterprise Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Acme Industries Ltd"
                      value={formData.organisation}
                      onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#1D4ED8] text-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-800">Your Role / Designation *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Managing Director / VP"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#1D4ED8] text-slate-900"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-800">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#1D4ED8] text-slate-900"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-800">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#1D4ED8] text-slate-900"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-slate-800">Proposed Relationship Model *</label>
                  <select
                    value={formData.relationshipType}
                    onChange={(e) => setFormData({ ...formData, relationshipType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#1D4ED8] text-slate-900"
                  >
                    <option value="Strategic Partnership">Strategic Institutional Partnership</option>
                    <option value="Knowledge & Masterclass Co-Creation">Knowledge & Masterclass Co-Creation</option>
                    <option value="Event / Conclave Sponsorship">Event / Conclave Sponsorship</option>
                    <option value="Social Impact & Fellowship Sponsorship">Social Impact & Fellowship Sponsorship</option>
                    <option value="Public Channel Advertising">Public Channel Advertising</option>
                    <option value="Other Value Creation">Other Co-Creation Model</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-800">Why PEERS GLOBAL? *</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="What draws your organisation to our community ethos?"
                      value={formData.whyPeersGlobal}
                      onChange={(e) => setFormData({ ...formData, whyPeersGlobal: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#1D4ED8] text-slate-900"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-800">What would you like to build together? *</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Outline the specific initiative, experience, or tool."
                      value={formData.whatToBuild}
                      onChange={(e) => setFormData({ ...formData, whatToBuild: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#1D4ED8] text-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-800">Who would benefit? *</label>
                    <textarea
                      required
                      rows={2}
                      placeholder="Specify beneficiaries (MSMEs, student fellows, etc.)."
                      value={formData.whoBenefits}
                      onChange={(e) => setFormData({ ...formData, whoBenefits: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#1D4ED8] text-slate-900"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-800">What would you contribute? *</label>
                    <textarea
                      required
                      rows={2}
                      placeholder="Outline resources, capability, or capital you will invest."
                      value={formData.whatToContribute}
                      onChange={(e) => setFormData({ ...formData, whatToContribute: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 focus:outline-none focus:border-[#1D4ED8] text-slate-900"
                    />
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
                  <p className="text-xs text-slate-500">
                    We evaluate every proposal for ecosystem alignment. Direct sales inquiries will be rejected.
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-4 rounded-full font-bold bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:from-[#1E40AF] hover:to-[#BE123C] text-white shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 uppercase tracking-wider shrink-0 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      'Transmitting Proposal...'
                    ) : (
                      <>
                        Submit Partnership Proposal <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
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
                THE PEERS GLOBAL INVITATION
              </span>
              <span className="h-[1.5px] w-6 bg-white/70" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15]">
              LET&apos;S BUILD SOMETHING WORTH BUILDING
            </h2>
            <p className="max-w-2xl mx-auto text-white/90 text-sm sm:text-base leading-relaxed">
              The right partner does more than attach a logo. They contribute capability. They create possibility. They strengthen an experience. They help something meaningful travel further.
            </p>
            <p className="text-cyan-200 font-bold text-base sm:text-lg">
              Partnership is not about entering the community. It is about contributing to what the community is becoming.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <a
              href="#start-conversation"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white shadow-[0_4px_20px_rgba(225,29,72,0.40)] hover:from-[#1E40AF] hover:to-[#BE123C] hover:shadow-[0_8px_28px_rgba(225,29,72,0.60)] transition-all hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Become a Partner →
            </a>
            <a
              href="#start-conversation"
              className="px-6 py-3.5 rounded-full bg-white/[0.08] text-white border border-white/40 hover:bg-white/15 hover:border-white/70 transition-all backdrop-blur-sm"
            >
              Explore Sponsorship →
            </a>
            <a
              href="#start-conversation"
              className="px-6 py-3.5 rounded-full bg-white/[0.08] text-white border border-white/40 hover:bg-white/15 hover:border-white/70 transition-all backdrop-blur-sm"
            >
              Advertising Enquiry →
            </a>
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-full bg-white/[0.08] text-white border border-white/40 hover:bg-white/15 hover:border-white/70 transition-all backdrop-blur-sm"
            >
              Contact PEERS GLOBAL →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
