'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePageMedia } from '@/lib/hooks/use-page-media'
import {
  ArrowRight,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Search,
  Users,
  Building2,
  Globe2,
  Target,
  ShieldCheck,
  CreditCard,
  Layers,
  Smartphone,
  Award,
  RefreshCw,
  MessageSquare,
  Headphones,
  Mail,
  UserCheck,
  CheckCircle2,
  XCircle,
  HelpCircle,
} from 'lucide-react'

// ─── Stats Bar ────────────────────────────────────────────────────────────
const STATS = [
  {
    icon: Users,
    value: '10,000+',
    label: 'Entrepreneurs',
  },
  {
    icon: Building2,
    value: '45+',
    label: 'Cities',
  },
  {
    icon: Globe2,
    value: '25+',
    label: 'Countries',
  },
  {
    icon: Target,
    value: '1M',
    label: 'Lives to Impact',
  },
]

// ─── Topic Filters ────────────────────────────────────────────────────────
const TOPICS = [
  'All',
  'Joining',
  'Membership',
  'Circles',
  'Payments',
  'App & Platform',
  'Leadership',
  'General',
]

// ─── FAQ Data Categorized ──────────────────────────────────────────────────
interface FaqItem {
  q: string
  a: string
}

interface FaqCategory {
  id: string
  title: string
  num: string
  topic: string
  icon: React.ElementType
  color: string
  bg: string
  border: string
  items: FaqItem[]
}

const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: 'before-you-join',
    num: '1',
    title: 'Before you join',
    topic: 'Joining',
    icon: Users,
    color: '#0062D2',
    bg: '#EFF6FF',
    border: '#BFDBFE',
    items: [
      {
        q: 'Can I try Peers Global before subscribing?',
        a: 'Download the Unity App and look around. You can see the community, understand how collaboration works here and get a real sense of the culture before committing to anything.',
      },
      {
        q: 'Do I need an invitation?',
        a: 'No. You can subscribe directly if you meet the criteria.',
      },
      {
        q: 'Do I need a business of a certain size?',
        a: 'No. There is no minimum revenue and no minimum age of business. What matters is that you own or lead a real business and that you intend to contribute.',
      },
      {
        q: 'Is Peers Global only for entrepreneurs in India?',
        a: 'No. Peers Global is a global community. It was founded in India, and India remains its largest base, but the platform, the Circles and the collaboration model were built from the start for entrepreneurs anywhere in the world. Designed in Bharat. Built for the world.',
      },
      {
        q: 'Can I join from outside India?',
        a: 'Yes. Your subscription gives you the platform, the Unity App and the full community wherever you are based.',
      },
      {
        q: 'Are there Circles in my country?',
        a: 'The community is expanding country by country. If there is no Circle where you are yet, your subscription still gives you full platform access — and founding the first Circle in a new country is one of the most significant contributions anyone can make here.',
      },
      {
        q: 'How is this different from what I already do?',
        a: 'You will know within one Circle meeting. Attend as a guest and decide from what you see in the room.',
      },
    ],
  },
  {
    id: 'who-membership-belongs-to',
    num: '2',
    title: 'Who the membership belongs to',
    topic: 'Membership',
    icon: UserCheck,
    color: '#10B981',
    bg: '#ECFDF5',
    border: '#A7F3D0',
    items: [
      {
        q: 'Is this a business membership or an individual membership?',
        a: 'Individual. Always. Your membership belongs to you, not to your company. It follows the person, not the letterhead. Peers Global exists to grow entrepreneurs, not to list companies. A business does not learn, contribute or lead. A person does.',
      },
      {
        q: 'Can two partners from the same business join?',
        a: 'Yes. Both are welcome, and both join in their own right. Each partner holds their own membership, builds their own relationships, earns their own Life Impact Score and develops as their own kind of leader.',
      },
      {
        q: 'Can my membership be transferred to someone else?',
        a: 'No. Membership is individual and cannot be transferred to another person, including a business partner, a family member or a successor. It also cannot be sold with a business.',
      },
    ],
  },
  {
    id: 'subscription-and-payment',
    num: '3',
    title: 'Subscription and payment',
    topic: 'Payments',
    icon: CreditCard,
    color: '#F59E0B',
    bg: '#FFFBEB',
    border: '#FDE68A',
    items: [
      {
        q: 'Is the Unity App free?',
        a: 'Yes. The app is free to download and use. A subscription unlocks the full community, the premium features and everything the platform is built to give you.',
      },
      {
        q: 'What does my subscription include?',
        a: 'Your subscription makes you part of Peers Global — the platform, the Unity App, the community and the recognition system. Joining a Circle is a separate step with its own approval and its own subscription fee.',
      },
      {
        q: 'Is there a joining fee?',
        a: 'No. There is no joining or admission fee. You pay your annual Peers Global subscription, and a Circle Experience Fee if and when you join a Circle.',
      },
      {
        q: 'Can I pay in instalments?',
        a: 'In some countries, yes — where our payment gateway supports it. Options vary by country and are shown at checkout for your location.',
      },
      {
        q: 'Is GST included in the price?',
        a: 'No. Prices are exclusive of tax. GST applies in India, and equivalent taxes apply in other countries according to local law. The final amount including tax is shown before you pay.',
      },
      {
        q: 'Can I move from Peer to Charter Peer?',
        a: 'Charter is an upgrade, not a transfer. You subscribe to Charter Peer alongside your existing Peer subscription. The Charter subscription is charged in full, with no deduction against your existing subscription.',
      },
      {
        q: 'What is your refund policy?',
        a: 'There are no refunds. Membership here is access to a high-trust community. Value arrives differently for every Peer. Because value cannot be measured by time elapsed, it cannot be refunded by time remaining. Decide before you pay.',
      },
      {
        q: 'Is my payment information secure?',
        a: 'Yes. All payments are processed through enterprise PCI-DSS compliant payment gateways with bank-grade encryption.',
      },
    ],
  },
  {
    id: 'circles',
    num: '4',
    title: 'Circles',
    topic: 'Circles',
    icon: Layers,
    color: '#8B5CF6',
    bg: '#F5F3FF',
    border: '#DDD6FE',
    items: [
      {
        q: 'Is a Circle included in my membership?',
        a: 'No. Your ₹18,000 subscription is for the global platform. A Circle is a separate step with category exclusivity, its own approval, and its own Circle Experience Fee covering venue and hospitality.',
      },
      {
        q: 'How do I join a Circle?',
        a: 'From inside the Unity App or website, raise a request for your preferred Industry or Purpose Circle. The Circle Director reviews category availability and schedules your guest visit.',
      },
      {
        q: 'How are Circle members selected?',
        a: 'Selection is guided by category availability, business legitimacy, alignment with our Give-First code, and room synergy. The Director and Membership Committee make the decision.',
      },
      {
        q: 'How long does the approval process take?',
        a: 'Usually within 7 days. You will be told directly whether your seat is approved, waitlisted, or if an adjacent Circle is recommended.',
      },
      {
        q: 'Can I attend a Circle meeting as a guest?',
        a: 'Yes. Where possible, you attend a meeting as an invited guest before the seat is confirmed. You will not be asked to pitch or present.',
      },
      {
        q: 'What if my business category is not available?',
        a: 'You will be notified immediately. You can join an adjacent Circle, join the verified waitlist, or apply to found a new Circle in your city.',
      },
      {
        q: 'Can I join more than one Circle?',
        a: 'Yes. Typically one Industry Circle (your primary home) and one Purpose Circle. Beyond those two, additional Circles can be requested with Director approval.',
      },
      {
        q: 'What is the Circle Experience Fee?',
        a: 'A separate fee (typically ₹15,000–₹22,000/yr depending on city) covering the hospitality, dining, and venue arrangements for the twelve monthly in-person meetings.',
      },
    ],
  },
  {
    id: 'unity-app-and-platform',
    num: '5',
    title: 'Unity App and platform',
    topic: 'App & Platform',
    icon: Smartphone,
    color: '#E11D48',
    bg: '#FFF1F2',
    border: '#FECDD3',
    items: [
      {
        q: 'What can I do in the Unity App?',
        a: 'Discover Peers by industry and city, send connection requests, book 1-on-1s, log contributions, track Life Impact, register for events, and access the Marketplace.',
      },
      {
        q: 'Can I connect with any member?',
        a: 'Yes. You can discover any Peer in the global directory and send a connection request. Full contact details are shared upon mutual connection.',
      },
      {
        q: 'Is the directory visible to all members?',
        a: 'Yes. The directory is accessible to all subscribed Peers, enabling bilateral collaboration across sectors and geographies.',
      },
      {
        q: 'Is the App available outside India?',
        a: 'Yes. The Unity App is available globally on the Apple App Store and Google Play Store for international entrepreneurs.',
      },
      {
        q: 'Do you offer web access as well?',
        a: 'Yes. Key directory features, event listings, and profile settings are accessible via our secure web portal at unity.peersglobal.com.',
      },
    ],
  },
  {
    id: 'leadership-and-recognition',
    num: '6',
    title: 'Leadership and recognition',
    topic: 'Leadership',
    icon: Award,
    color: '#0D9488',
    bg: '#F0FDFA',
    border: '#99F6E4',
    items: [
      {
        q: 'How do I earn Peers Coins?',
        a: 'Every contribution you make across the 10 Ways of Collaboration is logged and confirmed by the Peer who received it. Confirmed impact earns Peers Coin.',
      },
      {
        q: 'How does the Life Impact System work?',
        a: 'Every helpful action — a referral, an introduction, mentorship or advice — is counted as one life impacted, updating your real-time score.',
      },
      {
        q: 'Can I take on a leadership role?',
        a: 'Yes. Roles like Circle Founder, Circle Director, Industry Director, and Regional Executive Director are open to every active Peer who demonstrates commitment.',
      },
      {
        q: 'Is leadership by nomination or application?',
        a: 'Both. Founders and Directors can apply or be nominated based on their standing, contribution track record, and city-building vision.',
      },
      {
        q: 'Are there awards and recognitions?',
        a: 'Yes. Annual Awards ceremonies, regional pinning ceremonies, and featured profiles on VyapaarJagat.com celebrate outstanding contributors.',
      },
    ],
  },
  {
    id: 'leaving-and-rejoining',
    num: '7',
    title: 'Leaving and rejoining',
    topic: 'Membership',
    icon: RefreshCw,
    color: '#D97706',
    bg: '#FEF3C7',
    border: '#FDE68A',
    items: [
      {
        q: 'Can I cancel my membership?',
        a: 'Yes, at any time. Your subscription will simply not renew at the end of its 12-month period, or can be deactivated upon request without refund.',
      },
      {
        q: 'Can I rejoin after cancelling?',
        a: 'Yes. You apply as a new member. Your record starts fresh, and your Circle seat request is subject to current category availability.',
      },
      {
        q: 'What happens to my data if I leave?',
        a: 'Your public directory profile is archived. Your historic impact and connection logs are securely stored in accordance with privacy laws.',
      },
    ],
  },
  {
    id: 'general',
    num: '8',
    title: 'General',
    topic: 'General',
    icon: MessageSquare,
    color: '#4F46E5',
    bg: '#EEF2FF',
    border: '#C7D2FE',
    items: [
      {
        q: 'What is the Peers Code?',
        a: 'Our 6 core commitments: Give first. Show up. Tell the truth. Protect the room. Respect every Peer. Carry the culture.',
      },
      {
        q: 'What languages does the community support?',
        a: 'Peers Global operates across English, Hindi, Gujarati, Marathi, and regional languages depending on local chapter meetings.',
      },
      {
        q: 'Who can I contact for support?',
        a: 'You can email support@peersglobal.com or message directly through the in-app support desk in the Unity App.',
      },
      {
        q: 'Where can I read the full terms and conditions?',
        a: 'You can review our complete Membership Terms, Privacy Policy, and Code of Conduct at peersglobal.com/terms.',
      },
    ],
  },
]

export function MemberFaqClient() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTopic, setSelectedTopic] = useState('All')
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({
    'before-you-join-0': true,
  })

  const { getMedia } = usePageMedia('membership')
  const heroMedia = getMedia({
    sectionName: 'Member FAQ',
    subModuleName: 'MEMBER FAQ HERO',
    subModuleId: 'sub-membership-faq',
    fallbackUrl: '/videos/stories-hero-bg.mp4',
    fallbackSourceType: 'localhost',
    fallbackTitle: 'Frequently Asked Questions by Prospective Members',
  })

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  // Filter categories and questions
  const filteredCategories = useMemo(() => {
    return FAQ_CATEGORIES.map((cat) => {
      // Check topic filter
      const matchesTopic =
        selectedTopic === 'All' ||
        cat.topic.toLowerCase() === selectedTopic.toLowerCase() ||
        (selectedTopic === 'Joining' && cat.id === 'before-you-join') ||
        (selectedTopic === 'Payments' && cat.id === 'subscription-and-payment') ||
        (selectedTopic === 'App & Platform' && cat.id === 'unity-app-and-platform')

      if (!matchesTopic && selectedTopic !== 'All') {
        return null
      }

      // Check search filter
      if (!searchQuery.trim()) {
        return cat
      }

      const qLow = searchQuery.toLowerCase()
      const matchingItems = cat.items.filter(
        (item) => item.q.toLowerCase().includes(qLow) || item.a.toLowerCase().includes(qLow)
      )

      if (matchingItems.length === 0) {
        return null
      }

      return {
        ...cat,
        items: matchingItems,
      }
    }).filter(Boolean) as FaqCategory[]
  }, [searchQuery, selectedTopic])

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0F172A] selection:bg-[#0062D2] selection:text-white font-sans">

      {/* =================================================================
          SECTION 1: HERO — Executive Split with Fade Mask & Script
          ================================================================= */}
      <section className="relative overflow-hidden bg-[#FAFBFD] text-slate-900 pt-6 sm:pt-10 pb-16 lg:pb-24 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium tracking-wide mb-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <ChevronRight className="size-3.5 text-slate-400" />
            <Link href="/membership" className="hover:text-slate-900 transition-colors">Membership</Link>
            <ChevronRight className="size-3.5 text-slate-400" />
            <span className="text-[#0062D2] font-semibold">Member FAQ</span>
          </div>

          {/* Hero Banner Box */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[36px] bg-white border border-slate-200/80 shadow-sm min-h-[520px] lg:min-h-[580px] flex items-center">

            {/* Fade Visual (Right 60%) */}
            <div
              className="absolute top-0 right-0 bottom-0 w-full sm:w-[65%] lg:w-[58%] overflow-hidden pointer-events-none"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 10%, rgba(0,0,0,0.6) 28%, black 55%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 10%, rgba(0,0,0,0.6) 28%, black 55%)',
              }}
            >
              {heroMedia.isYouTube && heroMedia.embedUrl ? (
                <iframe
                  src={`${heroMedia.embedUrl}&mute=1&loop=1`}
                  title={heroMedia.title}
                  className="w-full h-full border-0 object-cover pointer-events-none scale-125"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              ) : (
                <video
                  key={heroMedia.mediaUrl}
                  src={heroMedia.mediaUrl || '/videos/stories-hero-bg.mp4'}
                  poster="/images/member-faq-hero.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover object-center scale-105"
                />
              )}
              <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-white via-white/85 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />

              {/* Cursive Script Overlay - Top Right */}
              <div className="absolute top-6 sm:top-10 right-6 sm:right-10 z-20 text-right drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] pointer-events-none select-none">
                <p className="text-2xl sm:text-3xl text-white/95 leading-tight font-medium" style={{ fontFamily: 'var(--font-script)' }}>
                  Better People
                </p>
                <p className="text-3xl sm:text-4xl text-amber-300 font-bold leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  Bigger Opportunities.
                </p>
              </div>

              {/* Cursive Script Overlay - Bottom Right */}
              <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-10 z-20 text-right drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] pointer-events-none select-none">
                <p className="text-xl sm:text-2xl text-white/95 leading-tight font-medium" style={{ fontFamily: 'var(--font-script)' }}>
                  Real Questions. Real Answers.
                </p>
                <p className="text-2xl sm:text-3xl text-amber-300 font-bold leading-tight mt-0.5" style={{ fontFamily: 'var(--font-script)' }}>
                  A Stronger Tomorrow.
                </p>
              </div>
            </div>

            {/* Left Content (Z-10) */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl flex flex-col items-start">

                {/* Eyebrow */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-0.5 w-6 bg-[#0062D2]" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                    MEMBERSHIP
                  </span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-[62px] font-normal text-slate-900 tracking-tight leading-[1.08] mb-4">
                  Member FAQ
                </h1>

                <p className="text-xl sm:text-2xl text-slate-800 font-medium leading-snug mb-8 font-serif italic max-w-md">
                  Straight answers, including to the questions most communities avoid.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="https://unity.peersglobal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-7 py-3.5 text-sm font-bold shadow-lg shadow-blue-600/25 transition-all hover:scale-105 inline-flex items-center gap-2"
                  >
                    <span>Download Unity App</span>
                    <ArrowRight className="size-4" />
                  </a>
                  <Link
                    href="/membership/criteria"
                    className="rounded-full border border-slate-300 hover:border-[#0062D2] bg-white hover:bg-slate-50 text-slate-800 hover:text-[#0062D2] px-7 py-3.5 text-sm font-semibold transition-all inline-flex items-center gap-2 shadow-sm"
                  >
                    <span>Apply for Membership</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </div>

              </div>
            </div>

          </div>

          {/* Floating Stats Bar */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
            {STATS.map((stat, i) => {
              const Icon = stat.icon
              return (
                <div
                  key={i}
                  className="rounded-2xl bg-white border border-slate-200/90 p-4 sm:p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="size-11 sm:size-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    <Icon className="size-5 sm:size-6 text-[#0062D2]" />
                  </div>
                  <div>
                    <div className="font-serif text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 2: QUESTIONS & ANSWERS (Search + Filters + Bento Grid)
          ================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="max-w-3xl mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-0.5 w-6 bg-[#0062D2]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                QUESTIONS & ANSWERS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 tracking-tight leading-tight mb-3">
              Find your answers
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Everything you need to know about Peers Global membership, Circles, the Unity App, payments, leadership and more.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6 max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <Search className="size-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your question..."
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-slate-200/90 focus:border-[#0062D2] focus:ring-2 focus:ring-blue-100 bg-[#FAFBFD] text-sm text-slate-800 placeholder-slate-400 transition-all outline-none"
            />
          </div>

          {/* Topic Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-12">
            <span className="text-xs font-semibold text-slate-500 mr-2">Or browse by topic:</span>
            {TOPICS.map((topic) => {
              const active = selectedTopic === topic
              return (
                <button
                  key={topic}
                  onClick={() => setSelectedTopic(topic)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                    active
                      ? 'bg-[#0062D2] text-white shadow-sm'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                  }`}
                >
                  {topic}
                </button>
              )
            })}
          </div>

          {/* Bento Grid (3 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {filteredCategories.map((cat) => {
              const Icon = cat.icon
              return (
                <div
                  key={cat.id}
                  className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-2xs hover:shadow-sm transition-shadow flex flex-col"
                >
                  {/* Category Card Header */}
                  <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-slate-100">
                    <div
                      className="size-11 rounded-2xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: cat.bg, border: `1px solid ${cat.border}` }}
                    >
                      <Icon className="size-5" style={{ color: cat.color }} />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-slate-900 leading-snug">
                        {cat.num}. {cat.title}
                      </h3>
                      <span className="text-xs text-slate-400 font-medium">
                        {cat.items.length} questions
                      </span>
                    </div>
                  </div>

                  {/* Accordion Questions */}
                  <div className="space-y-2">
                    {cat.items.map((item, idx) => {
                      const itemKey = `${cat.id}-${idx}`
                      const isOpen = !!openItems[itemKey]
                      return (
                        <div
                          key={idx}
                          className="rounded-xl border border-slate-100 bg-[#FAFBFD] overflow-hidden"
                        >
                          <button
                            onClick={() => toggleItem(itemKey)}
                            className="w-full px-3.5 py-3 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-slate-800 hover:text-[#0062D2] transition-colors"
                            aria-expanded={isOpen}
                          >
                            <span>{item.q}</span>
                            <div className="shrink-0 text-slate-400">
                              {isOpen ? (
                                <ChevronUp className="size-4 text-[#0062D2]" />
                              ) : (
                                <ChevronDown className="size-4" />
                              )}
                            </div>
                          </button>

                          {isOpen && (
                            <div className="px-3.5 pb-3.5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                              {item.a}
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}

            {/* Final Help Card: Still have a question? */}
            <div className="rounded-3xl bg-[#FAFBFD] border border-blue-100 p-6 sm:p-7 shadow-2xs flex flex-col justify-between h-full">
              <div>
                <div className="size-12 rounded-2xl bg-blue-50 border border-blue-200 text-[#0062D2] flex items-center justify-center mb-5">
                  <Headphones className="size-6" />
                </div>

                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2">
                  Still have a question?
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  We are here to help. Reach out to our team and we will get back to you.
                </p>
              </div>

              <div>
                <Link
                  href="/contact"
                  className="w-full rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-5 py-3 text-xs sm:text-sm font-bold shadow-md shadow-blue-600/20 transition-all text-center inline-flex items-center justify-center gap-2 mb-3"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="size-4" />
                </Link>

                <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                  <Mail className="size-3.5 text-[#0062D2]" />
                  <a href="mailto:support@peersglobal.com" className="hover:text-slate-800 underline">
                    support@peersglobal.com
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =================================================================
          SECTION 3: CLOSING HERO BANNER — Mountain Sunrise Panorama
          ================================================================= */}
      <section className="relative overflow-hidden bg-[#070F1E] text-white py-24 sm:py-32">
        {/* Background Image */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/membership-mountain-closing.jpg"
            alt="Entrepreneur on mountain peak at sunrise"
            fill
            className="object-cover object-center opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070F1E] via-[#070F1E]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070F1E] via-transparent to-[#070F1E]/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left Copy */}
            <div className="lg:col-span-8 flex flex-col items-start">
              <div className="inline-flex items-center gap-3 text-sky-400 text-xs font-bold tracking-[0.25em] uppercase mb-4">
                <span className="h-0.5 w-6 bg-sky-400" />
                <span>YOUR NEXT CHAPTER</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-tight mb-4">
                Build Your Business. <br className="hidden sm:inline" />
                Build Your Relationships. <br className="hidden sm:inline" />
                Build Your Circle.
              </h2>

              <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed mb-8">
                Join a global community of entrepreneurs who give, grow and build together.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-8 py-4 text-sm font-bold shadow-lg shadow-blue-600/30 transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                  <span>Download Unity App</span>
                  <ArrowRight className="size-4" />
                </a>
                <Link
                  href="/membership/criteria"
                  className="rounded-full border border-white/30 hover:border-white/60 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white px-8 py-4 text-sm font-semibold transition-all inline-flex items-center gap-2"
                >
                  <UserCheck className="size-4" />
                  <span>Apply for Membership</span>
                </Link>
              </div>
            </div>

            {/* Right Cursive Script Callout */}
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <div className="text-left lg:text-right select-none pointer-events-none" style={{ fontFamily: 'var(--font-script)' }}>
                <p className="text-3xl sm:text-4xl text-white/50 leading-tight">People,</p>
                <p className="text-3xl sm:text-4xl text-white/70 leading-tight">Partnerships,</p>
                <p className="text-3xl sm:text-4xl text-white/90 leading-tight">Possibilities.</p>
                <p className="text-4xl sm:text-5xl text-amber-300 font-medium leading-tight mt-1">
                  A Brighter Tomorrow.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
