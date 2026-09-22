import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Smartphone,
  Sparkles,
  ShieldCheck,
  MapPin,
  Zap,
  CheckCircle2,
  BookOpen,
  Users,
  ClipboardList,
  ArrowLeftRight,
  Star,
  ChevronRight,
  ArrowRight,
  Building2,
} from 'lucide-react'
import { UNITY_ROLES } from '@/lib/data/content'

export const metadata: Metadata = {
  title: 'Peers Global Unity App | A Global Community of Entrepreneurs',
  description:
    'Unity is where the Peers Global community lives — the feed, the Peers, messaging, Circle chat, one-to-one booking and the recognition system.',
  keywords: [
    'peers global unity app',
    'entrepreneur community app India',
    'business community app',
    'global entrepreneur community',
    'unity app download',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/unity',
  },
}

const FEATURES = [
  {
    icon: Users,
    tag: 'PEER DIRECTORY',
    title: 'Find Any Peer, Anywhere',
    body: 'Search the full verified community by industry, city, capability or what you need right now. Every profile is a real founder, confirmed by their Circle Director.',
    color: 'from-blue-50/80 to-slate-50',
    accent: 'text-[#0062D2]',
    border: 'border-blue-100',
  },
  {
    icon: ClipboardList,
    tag: 'CIRCLE GOVERNANCE',
    title: 'Circle Meetings & Governance',
    body: 'Attendance, Hot Seat requests, impact logging and committee tracking — the full meeting record managed digitally before, during and after each session.',
    color: 'from-emerald-50/80 to-slate-50',
    accent: 'text-emerald-600',
    border: 'border-emerald-100',
  },
  {
    icon: Sparkles,
    tag: 'IMPACT LEDGER',
    title: 'The Live Impact Ledger',
    body: 'Every introduction made, every referral given, every mentorship hour confirmed — logged by the recipient, timestamped and immutable. Your Life Impact Score in real time.',
    color: 'from-amber-50/80 to-slate-50',
    accent: 'text-amber-600',
    border: 'border-amber-100',
  },
  {
    icon: ArrowLeftRight,
    tag: 'CONNECTIONS',
    title: 'Peer-to-Peer Introductions',
    body: 'Request introductions, send warm referrals, and track collaboration status across your entire network — with consent and confirmation built in.',
    color: 'from-purple-50/80 to-slate-50',
    accent: 'text-purple-600',
    border: 'border-purple-100',
  },
  {
    icon: BookOpen,
    tag: 'LEARNING HUB',
    title: 'Masterclasses & Playbooks',
    body: 'On-demand access to every Impact Mentor Masterclass, business playbook and watchlist resource — searchable by challenge, sector and format.',
    color: 'from-sky-50/80 to-slate-50',
    accent: 'text-sky-600',
    border: 'border-sky-100',
  },
  {
    icon: Star,
    tag: 'RECOGNITION',
    title: 'Peer Standing & Rewards',
    body: 'Badges, milestones and Peers Coin rewards for verified contribution. Your standing ranked transparently across the full community, updated live.',
    color: 'from-rose-50/80 to-slate-50',
    accent: 'text-rose-600',
    border: 'border-rose-100',
  },
]

export default function UnityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans selection:bg-[#EFF6FF] selection:text-[#0062D2] antialiased">
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-slate-200/80 bg-white/80 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-[#0062D2] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span>Ecosystem</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">Unity App</span>
        </div>
      </div>

      {/* ─── 1. HERO (Signature Fade Video Background Banner Matching Circles/Home) ─── */}
      <section className="relative overflow-hidden bg-[#FAFBFD] text-slate-900 pt-6 sm:pt-10 pb-12 sm:pb-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Hero Banner with Smooth Left-Fading Video */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[36px] bg-white border border-slate-200/80 shadow-sm min-h-[500px] lg:min-h-[560px] flex items-center">
            {/* Media Background Layer (Right ~60% fading into white on the left) */}
            <div
              className="absolute top-0 right-0 bottom-0 w-full sm:w-[65%] lg:w-[58%] overflow-hidden pointer-events-none bg-[#030914]"
              style={{
                maskImage:
                  'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.08) 6%, rgba(0,0,0,0.6) 20%, black 40%)',
                WebkitMaskImage:
                  'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.08) 6%, rgba(0,0,0,0.6) 20%, black 40%)',
              }}
            >
              {/* Unity App Showcase Image */}
              <div className="relative w-full h-full p-2 sm:p-4 flex items-center justify-center">
                <Image
                  src="/images/unity-creatives/post 1.png"
                  alt="Where Connections Create Impact — Peers Global Unity App"
                  fill
                  sizes="(max-width: 1024px) 100vw, 650px"
                  className="object-contain object-center sm:object-right"
                  priority
                />
              </div>

              {/* Seamless gradient overlays for the signature misty fade */}
              <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none hidden sm:block" />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/30 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />

            </div>

            {/* Left Content Area */}
            <div className="relative z-10 w-full p-6 sm:p-10 lg:p-14">
              <div className="max-w-xl lg:max-w-2xl flex flex-col items-start">
                {/* Eyebrow with blue bar */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-0.5 w-6 bg-[#0062D2]" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0062D2]">
                    THE PLATFORM OF RECORD
                  </span>
                </div>

                {/* H1 */}
                <h1 className="font-serif text-4xl sm:text-6xl lg:text-[68px] font-normal text-slate-900 tracking-tight leading-[1.08] mb-4">
                  Unity
                </h1>

                {/* Subline */}
                <p className="text-xl sm:text-2xl text-slate-800 font-bold leading-snug mb-3">
                  Your circle meets once a month. <span className="italic text-[#1E4ED8]">Unity keeps it working every day.</span>
                </p>

                {/* Supporting Line */}
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-8 max-w-lg">
                  Profiles, introductions, opportunities, learning, events and recognition — the whole community, in your pocket. Free to join. Ninety days to explore. No card required.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <Link
                    href="/membership"
                    className="rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white px-7 py-3.5 text-sm font-semibold shadow-lg shadow-blue-600/25 transition-all hover:scale-105 inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>Apply for Membership</span>
                    <ArrowRight className="size-4" />
                  </Link>

                  <Link
                    href="/contact?intent=explorer"
                    className="rounded-full border border-slate-300 hover:border-slate-400 bg-white/90 backdrop-blur-sm text-slate-800 px-7 py-3.5 text-sm font-semibold transition-all hover:scale-105 cursor-pointer shadow-2xs"
                  >
                    Request a Guest Seat
                  </Link>
                </div>

                {/* Live Stat Cards Band (4 Cards Side-by-Side) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 w-full max-w-xl mb-4">
                  <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#F0F7FF] border border-[#DCEBFE]">
                    <div className="size-8 rounded-full bg-white flex items-center justify-center text-[#0062D2] shadow-2xs shrink-0">
                      <MapPin className="size-3.5" />
                    </div>
                    <div>
                      <div className="font-bold text-base text-[#0F172A] leading-none">11</div>
                      <div className="text-[10px] text-slate-500 font-medium uppercase mt-0.5">Cities</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#F0F7FF] border border-[#DCEBFE]">
                    <div className="size-8 rounded-full bg-white flex items-center justify-center text-[#0062D2] shadow-2xs shrink-0">
                      <Building2 className="size-3.5" />
                    </div>
                    <div>
                      <div className="font-bold text-base text-[#0F172A] leading-none">19</div>
                      <div className="text-[10px] text-slate-500 font-medium uppercase mt-0.5">Circles</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#F0F7FF] border border-[#DCEBFE]">
                    <div className="size-8 rounded-full bg-white flex items-center justify-center text-[#0062D2] shadow-2xs shrink-0">
                      <Users className="size-3.5" />
                    </div>
                    <div>
                      <div className="font-bold text-base text-[#0F172A] leading-none">2,400+</div>
                      <div className="text-[10px] text-slate-500 font-medium uppercase mt-0.5">Members</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#F0F7FF] border border-[#DCEBFE]">
                    <div className="size-8 rounded-full bg-white flex items-center justify-center text-[#0062D2] shadow-2xs shrink-0">
                      <ShieldCheck className="size-3.5" />
                    </div>
                    <div>
                      <div className="font-bold text-base text-[#0F172A] leading-none">91%</div>
                      <div className="text-[10px] text-slate-500 font-medium uppercase mt-0.5">Renewal</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <CheckCircle2 className="size-3.5 text-emerald-600" />
                  <span>Exclusive to verified Global and Circle Members.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. CREATIVES SHOWCASE (Original Dark Aesthetic Preserved) ─── */}
      <section className="py-24 border-b border-white/5 bg-[#050c1a] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
          <div className="flex flex-col items-center text-center gap-3 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-1 text-xs font-mono font-bold text-blue-400 tracking-widest">
              <Smartphone className="size-3" />
              OFFICIAL APP SHOWCASE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.75rem] font-serif font-bold text-white tracking-tight leading-snug">
              Built for Entrepreneurial Growth
            </h2>
            <p className="text-sm text-white/50 leading-relaxed">
              Discover nearby peers, manage Circle governance, and turn connections into measurable business growth.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                src: '/images/unity-creatives/Post 2.png',
                alt: 'Discover Entrepreneurs Around You',
                tag: 'GEO DISCOVERY',
                icon: MapPin,
                accent: 'text-blue-400',
                bg: 'bg-blue-500/10',
                border: 'border-blue-500/20',
                title: 'Discover Entrepreneurs Around You',
                body: 'Smart geo-discovery pinpoints verified Peers Global members within your vicinity. Find business partners just kilometers away.',
              },
              {
                src: '/images/unity-creatives/8.png',
                alt: 'Join the Right Circle',
                tag: 'CIRCLE INDUCTION',
                icon: ShieldCheck,
                accent: 'text-[#D4AF37]',
                bg: 'bg-[#D4AF37]/10',
                border: 'border-[#D4AF37]/20',
                title: 'Join the Right Circle',
                body: 'Browse city cohorts and industry circles, inspect leader rosters, and apply for category seat exclusivity from your phone.',
              },
              {
                src: '/images/unity-creatives/Post 3.png',
                alt: 'Discover. Connect. Collaborate.',
                tag: 'AI MATCHMAKING',
                icon: Zap,
                accent: 'text-purple-400',
                bg: 'bg-purple-500/10',
                border: 'border-purple-500/20',
                title: 'Discover. Connect. Collaborate.',
                body: 'Smart AI matchmaking pairs you with complementary category leaders, tracks pairing activity, and manages collaboration requests.',
              },
            ].map((c) => (
              <div
                key={c.title}
                className={`group flex flex-col rounded-3xl border ${c.border} bg-[#080f22] overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:-translate-y-1`}
              >
                {/* Image */}
                <div className="overflow-hidden bg-[#030914] flex items-center justify-center p-4 border-b border-white/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.src}
                    alt={c.alt}
                    className="w-full h-auto object-contain max-h-[420px] transform group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                {/* Content */}
                <div className="flex flex-col gap-3 p-6">
                  <div className={`inline-flex items-center gap-1.5 self-start rounded-full ${c.bg} border ${c.border} px-3 py-1 text-[0.65rem] font-mono font-bold ${c.accent} tracking-widest`}>
                    <c.icon className="size-3" />
                    {c.tag}
                  </div>
                  <h3 className={`text-xl font-serif font-bold text-white group-hover:${c.accent} transition-colors`}>{c.title}</h3>
                  <p className="text-xs text-white/60 leading-relaxed">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. FEATURES — PREMIUM BENTO-STYLE REDESIGN ────────── */}
      <section className="py-20 md:py-28 border-b border-slate-200/80 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16 relative z-10">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="flex flex-col gap-3 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 self-start rounded-full border border-blue-200/80 bg-blue-50/90 px-4 py-1 text-xs font-mono font-bold text-[#0062D2] tracking-widest">
                <Smartphone className="size-3" />
                SIX CORE MODULES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#061836] tracking-tight leading-snug">
                Every Feature <br />
                <span className="italic text-[#1E4ED8]">
                  Built for Accountability.
                </span>
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Not vanity metrics. Every module exists to guarantee peer accountability and governance across the network.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/membership"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0062D2] hover:bg-[#0052B4] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all"
              >
                Apply for Membership
                <ChevronRight className="size-4" />
              </Link>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                className={`group relative flex flex-col gap-5 rounded-3xl border ${f.border} bg-[#FAFBFD] p-7 overflow-hidden
                  hover:border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5
                  ${i === 0 ? 'lg:col-span-2' : ''}
                `}
              >
                {/* background shimmer on hover */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white via-transparent to-transparent rounded-3xl" />

                {/* Top row */}
                <div className="flex items-start justify-between gap-4 relative z-10">
                  <div className={`flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white border ${f.border} shadow-2xs`}>
                    <f.icon className={`size-6 ${f.accent}`} />
                  </div>
                  <span className={`inline-flex items-center rounded-full border ${f.border} bg-white px-2.5 py-1 text-[0.6rem] font-mono font-bold ${f.accent} tracking-widest whitespace-nowrap shadow-2xs`}>
                    {f.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col gap-2">
                  <h3 className="text-xl font-serif font-bold text-[#061836] group-hover:text-[#0062D2] transition-colors duration-200">
                    {f.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{f.body}</p>
                </div>

                {/* Decorative number */}
                <div className={`pointer-events-none absolute bottom-4 right-5 text-7xl font-black ${f.accent} opacity-5 select-none leading-none font-mono`}>
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. ROLE-BASED ACCESS (Access Matrix) ────────────────── */}
      <section className="py-20 border-b border-slate-200/80 bg-[#FAFBFD]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
          <div className="flex flex-col gap-3 max-w-xl">
            <span className="inline-flex items-center gap-1.5 self-start rounded-full border border-blue-200/80 bg-blue-50/90 px-4 py-1 text-xs font-mono font-bold text-[#0062D2] tracking-widest">
              ACCESS MATRIX
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#061836] tracking-tight leading-snug">
              Role-Based Platform Governance
            </h2>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200/90 bg-white shadow-md">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/90">
                  <th className="py-4 px-6 text-xs font-mono font-bold text-slate-700 uppercase tracking-wider w-48" scope="col">Member Role</th>
                  <th className="py-4 px-6 text-xs font-mono font-bold text-slate-700 uppercase tracking-wider" scope="col">Platform Access &amp; Governance Rights</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {UNITY_ROLES.map((r, i) => (
                  <tr key={r.role} className="hover:bg-slate-50/80 transition-colors group">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <span className={`size-2 rounded-full shrink-0 ${
                          i === 0 ? 'bg-blue-500' :
                          i === 1 ? 'bg-emerald-500' :
                          i === 2 ? 'bg-amber-500' :
                          i === 3 ? 'bg-purple-500' : 'bg-rose-500'
                        }`} />
                        <span className="font-bold text-[#061836] text-xs font-mono">{r.role}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-xs text-slate-600 leading-relaxed">{r.can}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── 5. CTA — Dark Blue Theme ─────── */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#040E24] via-[#061836] to-[#0A2558] py-20 text-white border-t border-slate-800">
        {/* Subtle Geometric Orbital Line Art */}
        <div className="absolute -right-16 -top-20 bottom-0 pointer-events-none w-[420px] sm:w-[560px] lg:w-[680px] opacity-25 overflow-hidden flex items-center justify-center">
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

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-mono text-sky-400 uppercase tracking-widest">Platform Onboarding</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight">
              Join the network. <br className="hidden sm:block" />
              <span className="italic text-sky-300">Get Unity on day one.</span>
            </h2>
            <p className="text-sm text-white/80 max-w-md">Access to Unity is exclusive — available from day one to all verified Global and Circle Members.</p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Link
              href="/membership"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#061836] hover:bg-slate-100 text-sm font-bold shadow-lg transition-all"
            >
              Apply for Membership
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact?intent=explorer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold border border-white/20 transition-all"
            >
              Request a Guest Seat
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
