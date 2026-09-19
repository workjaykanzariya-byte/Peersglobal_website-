import type { Metadata } from 'next'
import {
  Smartphone, Sparkles, ShieldCheck, MapPin, Zap, CheckCircle2,
  BookOpen, Users, ClipboardList, ArrowLeftRight, Star, CalendarDays, ChevronRight
} from 'lucide-react'
import { Card, Cta, SectionHead } from '@/components/site/ui'
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
    color: 'from-blue-500/10 to-primary/5',
    accent: 'text-blue-400',
    border: 'border-blue-500/20',
  },
  {
    icon: ClipboardList,
    tag: 'CIRCLE GOVERNANCE',
    title: 'Circle Meetings & Governance',
    body: 'Attendance, Hot Seat requests, impact logging and committee tracking — the full meeting record managed digitally before, during and after each session.',
    color: 'from-emerald-500/10 to-teal-500/5',
    accent: 'text-emerald-400',
    border: 'border-emerald-500/20',
  },
  {
    icon: Sparkles,
    tag: 'IMPACT LEDGER',
    title: 'The Live Impact Ledger',
    body: 'Every introduction made, every referral given, every mentorship hour confirmed — logged by the recipient, timestamped and immutable. Your Life Impact Score in real time.',
    color: 'from-[#D4AF37]/15 to-amber-500/5',
    accent: 'text-[#D4AF37]',
    border: 'border-[#D4AF37]/20',
  },
  {
    icon: ArrowLeftRight,
    tag: 'CONNECTIONS',
    title: 'Peer-to-Peer Introductions',
    body: 'Request introductions, send warm referrals, and track collaboration status across your entire network — with consent and confirmation built in.',
    color: 'from-purple-500/10 to-violet-500/5',
    accent: 'text-purple-400',
    border: 'border-purple-500/20',
  },
  {
    icon: BookOpen,
    tag: 'LEARNING HUB',
    title: 'Masterclasses & Playbooks',
    body: 'On-demand access to every Impact Mentor Masterclass, business playbook and watchlist resource — searchable by challenge, sector and format.',
    color: 'from-sky-500/10 to-cyan-500/5',
    accent: 'text-sky-400',
    border: 'border-sky-500/20',
  },
  {
    icon: Star,
    tag: 'RECOGNITION',
    title: 'Peer Standing & Rewards',
    body: 'Badges, milestones and Peers Coin rewards for verified contribution. Your standing ranked transparently across the full community, updated live.',
    color: 'from-rose-500/10 to-pink-500/5',
    accent: 'text-rose-400',
    border: 'border-rose-500/20',
  },
]

export default function UnityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">

      {/* ─── 1. HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#060d1f] via-[#0b1b3a] to-[#080f22] text-white pt-24 pb-28 border-b border-white/5">
        {/* ambient glows */}
        <div className="pointer-events-none absolute -top-40 -left-40 size-[600px] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 size-[500px] rounded-full bg-[#D4AF37]/10 blur-[100px]" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[800px] rounded-full bg-primary/5 blur-[150px]" />

        <div className="shell relative z-10 grid gap-16 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          {/* LEFT */}
          <div className="flex flex-col gap-7">
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-4 py-1.5 text-xs font-mono font-bold text-[#D4AF37] tracking-widest shadow-md backdrop-blur-sm">
              <Sparkles className="size-3" />
              THE PLATFORM OF RECORD
            </div>

            <h1 className="display text-3xl sm:text-5xl lg:text-6xl font-semibold leading-snug tracking-tight">
              Your circle meets once a month.<br />
              <span className="bg-gradient-to-r from-[#D4AF37] via-amber-200 to-white bg-clip-text text-transparent">
                Unity keeps it working every day.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-white/75 leading-relaxed max-w-lg">
              Profiles, introductions, opportunities, learning, events and recognition — the whole community, in your pocket. Free to join. Ninety days to explore. No card required.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-6 py-2">
              {[
                { value: '11', label: 'Cities' },
                { value: '19', label: 'Circles' },
                { value: '2,400+', label: 'Members' },
                { value: '91%', label: 'Renewal Rate' },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="text-2xl font-extrabold text-white">{s.value}</span>
                  <span className="text-xs font-mono text-white/50 uppercase tracking-wider">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Download Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a href="#" className="group inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/8 px-5 py-3 backdrop-blur-md transition-all hover:bg-white/15 hover:border-white/30 hover:scale-105 shadow-lg">
                <svg viewBox="0 0 20 20" className="size-5 fill-white shrink-0" aria-hidden>
                  <path d="M14.5 10.7c0-2 1.3-3 1.4-3.1-0.8-1.1-2-1.3-2.4-1.3-1-0.1-2 0.6-2.5 0.6s-1.3-0.6-2.2-0.6c-1.1 0-2.2 0.7-2.8 1.7-1.2 2-0.3 5 0.8 6.7 0.6 0.8 1.2 1.7 2.1 1.7s1.1-0.5 2.2-0.5 1.3 0.5 2.2 0.5 1.5-0.9 2-1.7c0.7-1 1-1.9 1-2zm-2.8-7.2c0.5-0.6 0.9-1.4 0.8-2.2-0.7 0-1.6 0.5-2.1 1.1-0.5 0.5-0.9 1.4-0.8 2.1 0.8 0.1 1.6-0.4 2.1-1z" />
                </svg>
                <div className="text-left">
                  <p className="text-[0.6rem] font-mono text-white/50 uppercase">Download on the</p>
                  <p className="text-sm font-bold text-white">App Store</p>
                </div>
              </a>
              <a href="#" className="group inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/8 px-5 py-3 backdrop-blur-md transition-all hover:bg-white/15 hover:border-white/30 hover:scale-105 shadow-lg">
                <svg viewBox="0 0 20 20" className="size-5 fill-white shrink-0" aria-hidden>
                  <path d="M3.2 1.8L11.5 10 3.2 18.2c-0.3-0.2-0.5-0.5-0.5-0.9V2.7c0-0.4 0.2-0.7 0.5-0.9zm10.6 5.6L16.2 9l-2 1.1L12 9l-0.4-0.4L13.8 7.4zm-0.8 5.3L16.2 11l-2 1.1L12 11l1.8-1.6 1.2 3.3zM4 1l8 4.6-1.8 1.8L4 1zm0 18l6.2-6.4L12 14.6 4 19z" />
                </svg>
                <div className="text-left">
                  <p className="text-[0.6rem] font-mono text-white/50 uppercase">Get it on</p>
                  <p className="text-sm font-bold text-white">Google Play</p>
                </div>
              </a>
            </div>

            <p className="text-xs text-white/40 font-mono flex items-center gap-2">
              <CheckCircle2 className="size-3.5 text-emerald-400" />
              Exclusive to verified Global and Circle Members.
            </p>
          </div>

          {/* RIGHT — poster with glow frame */}
          <div className="relative group flex justify-center lg:justify-end">
            <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#D4AF37]/30 via-blue-500/20 to-transparent blur-2xl group-hover:opacity-80 transition-opacity duration-500" />
            <div className="relative rounded-[1.5rem] overflow-hidden border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.6)] bg-[#030914] p-1.5 max-w-[400px] w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/unity-creatives/post 1.png"
                alt="Where Connections Create Impact — Peers Global Unity App"
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. CREATIVES SHOWCASE ───────────────────────────────── */}
      <section className="py-24 border-b border-[var(--border)] bg-[#050c1a]">
        <div className="shell flex flex-col gap-14">
          <div className="flex flex-col items-center text-center gap-3 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-4 py-1 text-xs font-mono font-bold text-primary tracking-widest">
              <Smartphone className="size-3" />
              OFFICIAL APP SHOWCASE
            </span>
            <h2 className="display text-2xl sm:text-3xl lg:text-[2.75rem] font-semibold text-white tracking-tight leading-snug">
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
                  <h3 className={`text-xl font-bold text-white group-hover:${c.accent} transition-colors`}>{c.title}</h3>
                  <p className="text-xs text-white/60 leading-relaxed">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. FEATURES — PREMIUM BENTO-STYLE REDESIGN ────────── */}
      <section className="py-28 border-b border-[var(--border)] bg-background relative overflow-hidden">
        {/* Background accent */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="pointer-events-none absolute -top-20 left-1/4 size-[400px] rounded-full bg-primary/5 blur-[100px]" />

        <div className="shell flex flex-col gap-16 relative z-10">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="flex flex-col gap-3 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 self-start rounded-full border border-primary/25 bg-primary/10 px-4 py-1 text-xs font-mono font-bold text-primary tracking-widest">
                <Smartphone className="size-3" />
                SIX CORE MODULES
              </span>
              <h2 className="display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight leading-snug">
                Every Feature <br />
                <span className="bg-gradient-to-r from-primary via-blue-400 to-[#D4AF37] bg-clip-text text-transparent">
                  Built for Accountability.
                </span>
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Not vanity metrics. Every module exists to guarantee peer accountability and governance across the network.
              </p>
            </div>
            <div className="shrink-0">
              <Cta href="/membership" variant="primary" size="lg">
                Apply for Membership
                <ChevronRight className="size-4" />
              </Cta>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                className={`group relative flex flex-col gap-5 rounded-3xl border ${f.border} bg-gradient-to-br ${f.color} p-7 overflow-hidden
                  hover:border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5
                  ${i === 0 ? 'lg:col-span-2' : ''}
                `}
              >
                {/* background shimmer on hover */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/3 to-transparent rounded-3xl" />

                {/* Top row */}
                <div className="flex items-start justify-between gap-4 relative z-10">
                  <div className={`flex size-12 shrink-0 items-center justify-center rounded-2xl bg-background/80 border ${f.border} shadow-sm`}>
                    <f.icon className={`size-6 ${f.accent}`} />
                  </div>
                  <span className={`inline-flex items-center rounded-full border ${f.border} bg-background/60 px-2.5 py-1 text-[0.6rem] font-mono font-bold ${f.accent} tracking-widest whitespace-nowrap`}>
                    {f.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col gap-2">
                  <h3 className={`text-xl font-bold text-foreground group-hover:${f.accent} transition-colors duration-200`}>
                    {f.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.body}</p>
                </div>

                {/* Decorative number */}
                <div className={`pointer-events-none absolute bottom-4 right-5 text-7xl font-black ${f.accent} opacity-5 select-none leading-none`}>
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. ROLE-BASED ACCESS ────────────────────────────────── */}
      <section className="py-20 border-b border-[var(--border)] bg-muted/20">
        <div className="shell flex flex-col gap-10">
          <div className="flex flex-col gap-3 max-w-xl">
            <span className="inline-flex items-center gap-1.5 self-start rounded-full border border-primary/25 bg-primary/10 px-4 py-1 text-xs font-mono font-bold text-primary tracking-widest">
              ACCESS MATRIX
            </span>
            <h2 className="display text-2xl sm:text-3xl font-semibold text-foreground tracking-tight leading-snug">
              Role-Based Platform Governance
            </h2>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-[var(--border)] bg-card shadow-lg">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-[var(--border)] bg-muted/60">
                  <th className="py-4 px-6 text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider w-48" scope="col">Member Role</th>
                  <th className="py-4 px-6 text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider" scope="col">Platform Access & Governance Rights</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                {UNITY_ROLES.map((r, i) => (
                  <tr key={r.role} className="hover:bg-muted/20 transition-colors group">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <span className={`size-2 rounded-full shrink-0 ${
                          i === 0 ? 'bg-blue-400' :
                          i === 1 ? 'bg-emerald-400' :
                          i === 2 ? 'bg-[#D4AF37]' :
                          i === 3 ? 'bg-purple-400' : 'bg-rose-400'
                        }`} />
                        <span className="font-bold text-foreground text-xs font-mono">{r.role}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-xs text-muted-foreground leading-relaxed">{r.can}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── 5. CTA ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1b3a] via-[#122347] to-[#060d1f] py-20 text-white">
        <div className="pointer-events-none absolute -top-20 -right-20 size-[400px] rounded-full bg-[#D4AF37]/10 blur-[80px]" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 size-[400px] rounded-full bg-primary/15 blur-[80px]" />
        <div className="shell relative z-10 flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-mono text-white/40 uppercase tracking-widest">Platform Onboarding</p>
            <h2 className="display text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Join the network. <br className="hidden sm:block" />
              <span className="text-[#D4AF37]">Get Unity on day one.</span>
            </h2>
            <p className="text-sm text-white/60 max-w-md">Access to Unity is exclusive — available from day one to all verified Global and Circle Members.</p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Cta href="/membership" variant="gold" size="lg">Apply for Membership</Cta>
            <Cta href="/contact?intent=explorer" variant="onDark" size="lg">Request a Guest Seat</Cta>
          </div>
        </div>
      </section>

    </div>
  )
}
