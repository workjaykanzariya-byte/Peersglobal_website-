import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Download,
  Globe2,
  Handshake,
  HeartHandshake,
  Layers,
  Lightbulb,
  MapPin,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'
import { Card, Cta, Eyebrow, SectionHead, Stat, Tag } from '@/components/site/ui'
import { INDUSTRY_CIRCLES, PURPOSE_CIRCLES } from '@/lib/data/circles'
import { UPCOMING_EVENTS } from '@/lib/data/events'
import { ROLES } from '@/lib/data/leadership'
import { OUTCOME_STATS, SITE } from '@/lib/data/site'

/* =========================================================================
   SECTION 2 — WHO WE ARE & WHAT PEERS GLOBAL IS
   ========================================================================= */

export function WhoWeAreSection() {
  const pillars = [
    {
      title: 'A leadership organisation, not a networking group.',
      body: 'Built on the LSR Growth Model — Learning, Sales and Resources — with a mission to enhance the lives of one million entrepreneurs.',
      tag: 'LSR Model',
    },
    {
      title: 'Your Circle. Your Inner Board.',
      body: '20–40 curated entrepreneurs. Category exclusivity, so there is no competition inside the room.',
      tag: 'Category Exclusivity',
    },
    {
      title: '1 Action = 1 Life Impacted.',
      body: 'Most communities measure activity. We measure impact. Strictly unweighted and confirmed outcomes.',
      tag: 'True Impact',
    },
    {
      title: 'Partners in Business. Friends in Life.',
      body: 'Two Family Meetups a year. A Confidential Forum. Lifelong relationships measured in decades.',
      tag: 'Lifelong Bonds',
    },
  ]

  return (
    <section className="section border-b border-[var(--border)]">
      <div className="shell flex flex-col gap-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <SectionHead
            eyebrow="Who We Are"
            title="A global community of entrepreneurs who choose to grow together."
            lede="Peers Global brings together entrepreneurs and business leaders from across industries, cities and countries into one connected community."
          />
          <div className="flex flex-col gap-4 lg:items-end">
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground lg:text-right">
              Everything here is built on one belief: entrepreneurs should not have to build alone.
            </p>
            <Cta href="/the-idea">Explore Peers Global</Cta>
          </div>
        </div>

        <div
          className="border border-[var(--border)] bg-muted/40 p-6 sm:p-8"
          style={{ borderRadius: 'var(--radius-lg)' }}
        >
          <div className="max-w-3xl flex flex-col gap-3">
            <h3 className="display text-xl sm:text-2xl text-foreground">
              We call our members <span className="text-primary">Peers</span>.
            </h3>
            <p className="text-[0.95rem] leading-relaxed text-muted-foreground">
              A Peer is an entrepreneur who believes in building trusted relationships, contributing
              to others, and growing together. Peers meet in Trusted Circles, collaborate through the
              Unity App, learn from one another, create opportunities for one another, and carry the
              community forward through leadership.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <Card key={p.title} className="flex flex-col gap-4 p-6">
              <Tag tone="blue">{p.tag}</Tag>
              <h3 className="display text-lg">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

/* =========================================================================
   SECTION 3 — OUR PHILOSOPHY
   ========================================================================= */

export function PhilosophySection() {
  const steps = [
    {
      num: '1. Relationships',
      desc: 'Business grows through relationships',
      icon: Users,
      color: '#2563EB',
      textColor: 'text-[#2563EB]',
    },
    {
      num: '2. Trust',
      desc: 'Relationships grow through trust',
      icon: ShieldCheck,
      color: '#10B981',
      textColor: 'text-slate-900',
    },
    {
      num: '3. Contribution',
      desc: 'Trust grows through contribution',
      icon: Handshake,
      color: '#F59E0B',
      textColor: 'text-slate-900',
    },
    {
      num: '4. Impact',
      desc: 'Contribution creates true impact',
      icon: TrendingUp,
      color: '#EF4444',
      textColor: 'text-slate-900',
    },
  ]

  return (
    <section className="relative overflow-hidden bg-white border-b border-[var(--border)]">
      <div className="grid lg:grid-cols-[1.14fr_0.86fr] items-stretch min-h-[580px]">
        {/* Left Column: Content */}
        <div className="flex flex-col justify-center px-6 py-12 sm:px-12 sm:py-16 lg:pl-16 lg:pr-12">
          <div className="flex flex-col gap-5 max-w-xl">
            {/* Eyebrow */}
            <p className="text-xs font-semibold tracking-[0.2em] text-[#1E4ED8] uppercase">
              OUR PHILOSOPHY
            </p>

            {/* H2 Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-serif font-bold text-slate-900 leading-[1.18] tracking-tight">
              Peers are Partners<br />
              in Business and<br />
              <span className="text-[#1E4ED8]">Friends in Life.</span>
            </h2>

            {/* Subline */}
            <p className="text-sm sm:text-base font-semibold text-[#1E4ED8]">
              This is the sentence the whole community runs on.
            </p>

            {/* Body */}
            <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
              A Peer gives an introduction without keeping score. Shares a hard-won lesson without charging for it. Celebrates another Peer&apos;s win as if it were their own. Over time, business partners become friends, and friends become the reason the business grows.
            </p>

            {/* 4 Steps Horizontal Row */}
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4 pt-2 border-t border-slate-100">
              {steps.map((s) => {
                const Icon = s.icon
                return (
                  <div key={s.num} className="flex flex-col gap-1.5">
                    <Icon className="size-6 mb-1" style={{ color: s.color }} />
                    <span className={`text-xs sm:text-[13px] font-bold ${s.textColor}`}>
                      {s.num}
                    </span>
                    <span className="text-[11px] leading-snug text-slate-500">
                      {s.desc}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* Bottom Bar: Quote & Button */}
            <div className="mt-6 pt-5 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100">
              <div className="flex items-center gap-2.5 flex-1 min-w-[220px]">
                <span className="text-xl font-serif text-slate-400 select-none">“</span>
                <p className="text-xs sm:text-sm italic font-medium text-slate-700 whitespace-nowrap">
                  Give first. Everything else follows.
                </p>
                <span className="h-px bg-slate-200 flex-1 hidden sm:block ml-2" />
              </div>
              <Link
                href="/membership"
                className="inline-flex items-center gap-2 rounded-lg bg-[#1E4ED8] px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow"
              >
                Become a Peer
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Image with organic curved wave mask */}
        <div className="relative min-h-[380px] lg:min-h-[580px] overflow-hidden bg-slate-900">
          <Image
            src="/images/philosophy-networking.jpg"
            alt="Peers Global entrepreneurs and business partners connecting"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover object-center"
          />

          {/* Soft dark vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-black/30 pointer-events-none" />

          {/* Script typography in top-right */}
          <div className="absolute top-8 right-8 z-10 text-right drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] pointer-events-none select-none">
            <p className="text-xl sm:text-2xl text-white/90 leading-tight" style={{ fontFamily: 'var(--font-script)' }}>
              Better Conversations
            </p>
            <p className="text-2xl sm:text-3xl text-white font-medium leading-tight mt-1" style={{ fontFamily: 'var(--font-script)' }}>
              Bigger Opportunities
            </p>
          </div>

          {/* Left curved wave swoosh overlay */}
          <svg
            className="absolute inset-y-0 -left-px h-full w-24 sm:w-32 lg:w-44 text-white fill-white pointer-events-none drop-shadow-[4px_0_12px_rgba(0,0,0,0.12)]"
            viewBox="0 0 100 500"
            preserveAspectRatio="none"
          >
            {/* The white masking wave */}
            <path d="M 0,0 L 50,0 C 18,140 10,260 70,390 C 88,430 96,470 100,500 L 0,500 Z" />
            {/* Accent glowing blue stroke along the contour */}
            <path
              d="M 50,0 C 18,140 10,260 70,390 C 88,430 96,470 100,500"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="2.5"
              opacity="0.4"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}

/* =========================================================================
   SECTION 4 — TRUSTED CIRCLES
   ========================================================================= */

export function CirclesSection() {
  const howCircleWorks = [
    {
      title: 'The right people',
      body: 'Each Circle is composed of entrepreneurs from complementary businesses, chosen for fit and relevance.',
    },
    {
      title: 'A fixed rhythm',
      body: 'The same Peers meet on a regular schedule, so trust has time to build.',
    },
    {
      title: 'A structure for giving',
      body: 'Every meeting has a defined space for Peers to share what they can offer and what they need.',
    },
    {
      title: 'Continuity',
      body: 'The Circle carries on inside the Unity App between meetings.',
    },
  ]

  return (
    <section id="circles" className="section border-b border-[var(--border)]">
      <div className="shell flex flex-col gap-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <SectionHead
            eyebrow="Trusted Circles"
            title="Every Peer belongs to a Circle."
            lede="A Circle brings together the right entrepreneurs around a common industry, interest, location or business opportunity. It is the heart of the community and the place where relationships are actually built."
          />
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Cta href="/circles/find">Find Your Circle</Cta>
            <Cta href="/start-a-circle" variant="outline">
              Start a Circle
            </Cta>
          </div>
        </div>

        {/* 4 How it works cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {howCircleWorks.map((item, idx) => (
            <Card key={item.title} className="flex flex-col gap-3 p-6">
              <span className="eyebrow text-primary">Step 0{idx + 1}</span>
              <h3 className="display text-lg">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </Card>
          ))}
        </div>

        <div className="border-t border-[var(--border)] pt-8">
          <p className="eyebrow mb-6 text-[color:var(--rule-color)]">
            We put the right people in the room — 18 Industry &amp; Goal Circles
          </p>

          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <Eyebrow>Industry Circles (Category-Locked)</Eyebrow>
              <ul className="flex flex-col divide-y divide-[var(--border)]">
                {INDUSTRY_CIRCLES.slice(0, 6).map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/circles/${c.slug}`}
                      className="group flex items-center justify-between gap-4 py-3.5"
                    >
                      <span className="flex flex-col gap-0.5">
                        <span className="text-[0.95rem] font-medium transition-colors group-hover:text-primary">
                          {c.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {c.members} members · {c.cities.slice(0, 2).join(', ')}
                        </span>
                      </span>
                      <span className="flex shrink-0 items-center gap-3">
                        {c.seatsOpen > 0 ? (
                          <Tag tone="blue">{c.seatsOpen} seats open</Tag>
                        ) : (
                          <Tag tone="neutral">Waitlist</Tag>
                        )}
                        <ArrowUpRight
                          aria-hidden
                          className="size-4 text-muted-foreground transition-colors group-hover:text-primary"
                        />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <Eyebrow tone="red">Purpose-led Circles (Shared Ambition)</Eyebrow>
              <ul className="flex flex-col divide-y divide-[var(--border)]">
                {PURPOSE_CIRCLES.slice(0, 6).map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/circles/${c.slug}`}
                      className="group flex items-center justify-between gap-4 py-3.5"
                    >
                      <span className="flex flex-col gap-0.5">
                        <span className="text-[0.95rem] font-medium transition-colors group-hover:text-primary">
                          {c.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {c.members} members · {c.cities.slice(0, 2).join(', ')}
                        </span>
                      </span>
                      <span className="flex shrink-0 items-center gap-3">
                        {c.seatsOpen > 0 ? (
                          <Tag tone="red">{c.seatsOpen} seats open</Tag>
                        ) : (
                          <Tag tone="neutral">Waitlist</Tag>
                        )}
                        <ArrowUpRight
                          aria-hidden
                          className="size-4 text-muted-foreground transition-colors group-hover:text-primary"
                        />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Cta href="/circles" variant="outline">
              Explore All 18 Circles
              <ArrowRight aria-hidden className="size-4" />
            </Cta>
          </div>
        </div>
      </div>
    </section>
  )
}

/* =========================================================================
   SECTION 5 — HOW COLLABORATION WORKS (11 FORMS)
   ========================================================================= */

export function CollaborationSection() {
  const forms = [
    'Introductions to people who can open a door',
    'Referrals that become long-term clients',
    'Partnerships between complementary businesses',
    'Knowledge sharing from lived experience',
    'Mentorship from entrepreneurs further along',
    'Customer connections in new segments',
    'Investor connections at the right stage',
    'Resources — teams, tools, capacity, licences',
    'Market access into a new city or country',
    'Industry expertise without hiring for it',
    'Local-to-global opportunities across the community',
  ]

  return (
    <section className="section border-b border-[var(--border)] bg-muted/20">
      <div className="shell flex flex-col gap-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHead
            eyebrow="Defined Practice"
            title="Eleven ways a Peer creates value for another Peer."
            lede="Collaboration at Peers Global is a defined practice. These are the forms it takes."
          />
          <Cta href="/10-forms-of-collaboration" variant="outline">
            Explore Collaboration
          </Cta>
        </div>

        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {forms.map((item, idx) => (
            <Card
              as="li"
              key={item}
              className="flex items-start gap-3.5 p-5 transition-transform hover:-translate-y-0.5"
            >
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                {idx + 1}
              </span>
              <span className="text-[0.92rem] font-medium leading-relaxed text-foreground">
                {item}
              </span>
            </Card>
          ))}
        </ol>

        <div
          className="border border-[var(--border)] bg-card p-6 text-center"
          style={{ borderRadius: 'var(--radius-md)' }}
        >
          <p className="display text-base sm:text-lg text-foreground">
            &ldquo;A connection becomes valuable when it creates an opportunity, solves a problem or
            improves a life. Every one of these does exactly that.&rdquo;
          </p>
        </div>
      </div>
    </section>
  )
}

/* =========================================================================
   SECTION 6 — LEARN, SALES, RESOURCES (LSR)
   ========================================================================= */

export function LsrSection() {
  const lsrPillars = [
    {
      letter: 'L',
      name: 'Learn',
      body: 'Masterclasses, playbooks, mentorship, and practical knowledge from entrepreneurs who have already built what you are building.',
      tag: 'Playbooks & Mentorship',
    },
    {
      letter: 'S',
      name: 'Sales',
      body: 'Referrals, introductions, customer connections and market access — real business from people who understand your business.',
      tag: 'Referrals & Market Access',
    },
    {
      letter: 'R',
      name: 'Resources',
      body: 'Talent, capital, partners, suppliers, technology and expertise, available through the community whenever you need them.',
      tag: 'Capital, Talent & Tech',
    },
  ]

  return (
    <section className="section border-b border-[var(--border)]">
      <div className="shell flex flex-col gap-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <SectionHead
            eyebrow="The Framework"
            title="LSR — the three things every business runs on."
            lede="Learn. Sales. Resources. All of it built on trusted peer relationships."
          />
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Cta href="/membership">See What Membership Includes</Cta>
          </div>
        </div>

        <ol className="grid gap-5 md:grid-cols-3">
          {lsrPillars.map((item) => (
            <Card as="li" key={item.letter} className="flex flex-col gap-4 p-7">
              <div className="flex items-baseline justify-between">
                <span className="display text-5xl font-bold text-primary">{item.letter}</span>
                <Tag tone="neutral">{item.tag}</Tag>
              </div>
              <h3 className="display text-2xl">{item.name}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </Card>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* =========================================================================
   SECTION 7 — THE UNITY APP
   ========================================================================= */

export function UnitySection() {
  const features = [
    'Discover Peers by industry, city and expertise',
    'Book one-to-one conversations',
    'Log referrals given and received',
    'Participate in your Circle',
    'Find and create opportunities',
    'Share your story',
    'See your contribution recognised',
    'Stay connected to the community from anywhere in the world',
  ]

  return (
    <section className="section border-b border-[var(--border)] bg-muted/40">
      <div className="shell grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="flex flex-col gap-6">
          <SectionHead
            eyebrow="The Digital Home"
            title="The community works every day, not just on meeting day."
            lede="The Peers Global Unity App is the digital home of the community. It is how Peers find each other, stay connected, and keep collaborating between meetings."
          />

          <p className="text-sm text-muted-foreground font-medium">
            Inside Unity, a Peer can:
          </p>

          <ul className="grid gap-2.5 sm:grid-cols-2">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <CheckCircle2
                  aria-hidden
                  className="size-4 shrink-0 text-primary mt-0.5"
                />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <p className="text-sm font-medium text-foreground">
            Download the app, explore the community, and see it for yourself.
          </p>

          <div className="flex flex-wrap gap-3">
            <Cta
              href={SITE.appStoreUrl}
              target="_blank"
              rel="noreferrer"
              size="lg"
            >
              <Download aria-hidden className="size-4" />
              Download on App Store
            </Cta>
            <Cta
              href={SITE.playStoreUrl}
              target="_blank"
              rel="noreferrer"
              variant="outline"
              size="lg"
            >
              <Download aria-hidden className="size-4" />
              Get it on Google Play
            </Cta>
          </div>
        </div>

        <div
          className="relative min-h-[380px] overflow-hidden border border-[var(--border)] bg-card p-8 flex flex-col justify-center"
          style={{ borderRadius: 'var(--radius-lg)' }}
        >
          <div className="flex flex-col gap-4">
            <span className="eyebrow text-primary">Unity Platform of Record</span>
            <h3 className="display text-2xl sm:text-3xl text-foreground">
              Always on. Always connected.
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Every connection logged, every commitment tracked, and every Peer accessible across 11
              cities in one secure mobile ecosystem.
            </p>
            <div className="mt-4 border-t border-[var(--border)] pt-4 flex items-center justify-between text-xs text-muted-foreground">
              <span>Verified member records</span>
              <span className="font-semibold text-primary">Unity Web &amp; Mobile</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* =========================================================================
   SECTION 8 — IMPACT
   ========================================================================= */

export function OutcomesSection() {
  const impactPoints = [
    'An introduction that lands a first major client.',
    'A conversation that prevents a costly mistake.',
    'A partnership that opens a new market.',
    'A mentor who gives someone the confidence to keep going.',
    'A business that grows and hires twelve more people.',
  ]

  return (
    <section className="section bg-panel text-panel-foreground">
      <div className="shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="flex flex-col gap-6">
          <SectionHead
            eyebrow="Practical Impact"
            tone="onDark"
            title="We count lives impacted."
            lede="Impact at Peers Global is practical. It is what happens when one entrepreneur helps another."
          />

          <ul className="flex flex-col gap-2.5">
            {impactPoints.map((pt) => (
              <li key={pt} className="flex items-start gap-2.5 text-sm text-white/80">
                <span className="size-1.5 rounded-full bg-[var(--gold)] mt-2 shrink-0" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>

          <p className="text-sm leading-relaxed text-white/90">
            Every one of those is a life changed. Every one begins with a Peer choosing to contribute.
            Contribution is recognised across the community — in your Circle, in the Unity App, and in
            the recognition Peers receive from other Peers.
          </p>

          <div>
            <Cta href="/the-currency" variant="gold">
              See Our Impact
            </Cta>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-6">
          <dl className="grid gap-6 sm:grid-cols-2">
            {OUTCOME_STATS.map((s) => (
              <Stat key={s.label} tone="onDark" value={s.value} label={s.label} note={s.note} />
            ))}
          </dl>
          <p className="text-xs text-white/40">{SITE.statsAsOf}</p>
        </div>
      </div>
    </section>
  )
}

/* =========================================================================
   SECTION 9 — THE 1 MILLION MISSION
   ========================================================================= */

export function MissionSection() {
  return (
    <section className="section border-b border-[var(--border)]">
      <div className="shell">
        <div
          className="relative overflow-hidden border border-[var(--border)] bg-card p-8 sm:p-12 lg:p-16"
          style={{ borderRadius: 'var(--radius-xl)' }}
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="flex flex-col gap-5">
              <Eyebrow tone="red">The 1 Million Mission</Eyebrow>
              <h2 className="display text-3xl sm:text-4xl lg:text-5xl text-balance">
                One million lives impacted.
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                Our mission is to impact one million lives through entrepreneurship, collaboration and
                opportunity.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Every referral, every introduction, every hour of mentorship, every partnership
                formed inside this community moves that number forward. When you become a Peer, your
                contribution becomes part of it.
              </p>
              <div className="mt-2">
                <Cta href="/1-million-mission" variant="primary" size="lg">
                  Join the 1 Million Mission
                  <ArrowRight aria-hidden className="size-4" />
                </Cta>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center rounded-2xl bg-muted/50 p-8 text-center border border-[var(--border)]">
              <span className="display text-5xl sm:text-6xl text-primary font-bold">1M+</span>
              <span className="mt-2 text-sm font-semibold uppercase tracking-wider text-foreground">
                Entrepreneurs To Impact
              </span>
              <span className="mt-1 text-xs text-muted-foreground">
                Targeted by 2030 across India and global chapters
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* =========================================================================
   SECTION 10 — REAL COLLABORATIONS
   ========================================================================= */

export function StoriesSection() {
  const stories = [
    {
      peer1: 'Rajesh Shah',
      biz1: 'Apex Logistics',
      city1: 'Ahmedabad',
      peer2: 'Vikram Patel',
      biz2: 'Om Packaging',
      city2: 'Surat',
      collab: 'Joint supply-chain integration across western industrial corridor',
      outcome: '₹4.2 Cr',
      outcomeLabel: 'in new recurring contracts',
    },
    {
      peer1: 'Neha Kothari',
      biz1: 'FinEdge Advisory',
      city1: 'Mumbai',
      peer2: 'Anand Sharma',
      biz2: 'Zen Cloud Solutions',
      city2: 'Bengaluru',
      collab: 'Cross-border SaaS compliance and direct introduction to tier-1 enterprise',
      outcome: '₹1.8 Cr',
      outcomeLabel: 'annual contract landed',
    },
    {
      peer1: 'Amit Desai',
      biz1: 'Horizon Polymers',
      city1: 'Vadodara',
      peer2: 'Pradeep Joshi',
      biz2: 'EcoPower Technologies',
      city2: 'Rajkot',
      collab: 'Co-developed sustainable industrial packaging line for export markets',
      outcome: '₹3.5 Cr',
      outcomeLabel: 'in export revenues generated',
    },
  ]

  return (
    <section className="section border-b border-[var(--border)]">
      <div className="shell flex flex-col gap-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHead
            eyebrow="Real Collaborations"
            title="What this looks like in real life."
            lede="Real stories between real Peers across industries and cities. What they built together and what it produced."
          />
          <Cta href="/stories" variant="outline">
            Read More Peer Stories
          </Cta>
        </div>

        <ul className="grid gap-5 md:grid-cols-3">
          {stories.map((s, idx) => (
            <Card as="li" key={idx} className="flex flex-col gap-4 p-7">
              <span className="display text-3xl font-bold text-primary">{s.outcome}</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {s.outcomeLabel}
              </span>
              <p className="text-sm leading-relaxed text-foreground font-medium">
                &ldquo;{s.collab}&rdquo;
              </p>
              <div className="mt-auto border-t border-[var(--border)] pt-4 flex flex-col gap-1.5 text-xs text-muted-foreground">
                <div>
                  <strong className="text-foreground">{s.peer1}</strong> · {s.biz1} ({s.city1})
                </div>
                <div>
                  <strong className="text-foreground">{s.peer2}</strong> · {s.biz2} ({s.city2})
                </div>
              </div>
            </Card>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* =========================================================================
   SECTION 11 — THE PEERS GLOBAL UNIVERSE
   ========================================================================= */

export function UniverseSection() {
  const universe = [
    { title: 'Community', desc: 'Entrepreneurs across industries and countries' },
    { title: 'Culture', desc: 'Trust, contribution and friendship' },
    { title: 'Circles', desc: 'Your home inside the community' },
    { title: 'Language', desc: 'The words and ideas we share' },
    { title: 'Leadership', desc: 'A structure built and led by entrepreneurs' },
    { title: 'Recognition', desc: 'Contribution seen and celebrated' },
    { title: 'Unity App', desc: 'The digital ecosystem platform' },
    { title: 'Events', desc: 'Meetings, conclaves and the global summit' },
    { title: 'Media', desc: 'Stories, podcasts and publications' },
    { title: 'Learning', desc: 'Masterclasses and actionable playbooks' },
    { title: 'Opportunities', desc: 'Business, partnerships and markets' },
    { title: 'Impact', desc: 'The 1 Million Mission' },
  ]

  return (
    <section className="section border-b border-[var(--border)] bg-muted/25">
      <div className="shell flex flex-col gap-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHead
            eyebrow="The Ecosystem"
            title="Becoming a Peer means joining all of it."
            lede="One membership. An entire universe."
          />
          <Cta href="/the-idea">Discover the Universe</Cta>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {universe.map((u) => (
            <Card key={u.title} className="flex flex-col gap-2 p-5">
              <h3 className="display text-base font-semibold text-primary">{u.title}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">{u.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

/* =========================================================================
   SECTION 12 — THE JOURNEY
   ========================================================================= */

export function JourneySection() {
  const steps = [
    {
      num: '1',
      title: 'Download Unity',
      desc: 'See the community from the inside.',
    },
    {
      num: '2',
      title: 'Visit a Circle',
      desc: 'Come as a guest. Meet the room.',
    },
    {
      num: '3',
      title: 'Become a Peer',
      desc: 'Take your seat in the community.',
    },
    {
      num: '4',
      title: 'Contribute',
      desc: 'Give first. Make the introduction. Share what you know.',
    },
    {
      num: '5',
      title: 'Lead',
      desc: 'Start a Circle. Hold an industry. Build a city.',
    },
  ]

  return (
    <section className="section border-b border-[var(--border)]">
      <div className="shell flex flex-col gap-10">
        <SectionHead
          eyebrow="The Path"
          title="Every Peer starts the same way."
          lede="Most Peers arrive for the business. They stay for the relationships."
        />

        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s) => (
            <Card as="li" key={s.num} className="flex flex-col gap-3 p-6">
              <span
                className="flex size-9 items-center justify-center bg-primary text-sm font-bold text-primary-foreground"
                style={{ borderRadius: 'var(--btn-radius)' }}
              >
                {s.num}
              </span>
              <h3 className="display text-lg">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </Card>
          ))}
        </ol>

        <div className="flex justify-start">
          <Cta href="/membership">Start Your Journey</Cta>
        </div>
      </div>
    </section>
  )
}

/* =========================================================================
   SECTION 13 — LEADERSHIP
   ========================================================================= */

export function LeadershipSection() {
  return (
    <section className="section border-b border-[var(--border)]">
      <div className="shell flex flex-col gap-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHead
            eyebrow="Leadership"
            title="Built and led by entrepreneurs."
            lede="Peers Global is carried forward by its own Peers. Circle Founders, Circle Directors, Industry Directors, Regional Executive Directors and Global Advisors — every one of them a business owner who chose to build something beyond their own company."
          />
          <div className="flex flex-wrap gap-3">
            <Cta href="/leadership">Explore Leadership</Cta>
            <Cta href="/start-a-circle" variant="outline">
              Start a Circle
            </Cta>
          </div>
        </div>

        <p className="text-sm font-medium text-foreground">
          Leadership here follows contribution. Peers who give the most are the ones who lead.
        </p>

        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {ROLES.map((r) => (
            <Card as="li" key={r.slug} className="flex flex-col gap-3 p-6">
              <div className="flex items-center gap-2">
                <span className="eyebrow text-primary">{r.code}</span>
                <span aria-hidden className="rule h-px flex-1 opacity-40" />
                <span className="text-xs text-muted-foreground">Stage {r.stage}</span>
              </div>
              <h3 className="display text-[1.05rem]">{r.name}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">{r.tagline}</p>
              <div className="mt-auto flex flex-col gap-2 pt-2">
                <span className="text-[0.7rem] font-medium text-muted-foreground">
                  {r.seatsOpen}
                </span>
                <Link
                  href={`/leadership/${r.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-medium text-primary"
                >
                  Role detail
                  <ArrowRight aria-hidden className="size-3" />
                </Link>
              </div>
            </Card>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* =========================================================================
   EVENTS SECTION
   ========================================================================= */

export function EventsSection() {
  const events = UPCOMING_EVENTS.slice(0, 4)
  const priority = events.find((e) => e.priority) ?? events[0]
  const rest = events.filter((e) => e.slug !== priority?.slug).slice(0, 3)

  return (
    <section className="section border-b border-[var(--border)] bg-muted/30">
      <div className="shell flex flex-col gap-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHead
            eyebrow="Calendar"
            title="Where you can meet the network next"
            lede="Conclaves, city mixers and open Circle meetings. Meet entrepreneurs across the community."
          />
          <Cta href="/events" variant="outline">
            Full calendar
          </Cta>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          {priority ? (
            <Card className="flex flex-col overflow-hidden">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/images/conclave.png"
                  alt={`Delegates at ${priority.title}`}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 p-7">
                <div className="flex flex-wrap items-center gap-2">
                  <Tag tone="red">Priority event</Tag>
                  <Tag tone="neutral">{priority.kind}</Tag>
                </div>
                <h3 className="display text-2xl">{priority.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{priority.summary}</p>
                <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center gap-1.5">
                    <CalendarDays aria-hidden className="size-3.5" />
                    {priority.date}
                  </li>
                  <li className="flex items-center gap-1.5">
                    <MapPin aria-hidden className="size-3.5" />
                    {priority.venue}, {priority.city}
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Users aria-hidden className="size-3.5" />
                    {priority.attending} of {priority.capacity} confirmed
                  </li>
                </ul>
                <Cta href={`/events/${priority.slug}`} className="mt-1 self-start">
                  Event detail and agenda
                </Cta>
              </div>
            </Card>
          ) : null}

          <ul className="flex flex-col gap-4">
            {rest.map((e) => (
              <Card as="li" key={e.slug} className="flex flex-col gap-3 p-6">
                <div className="flex items-center justify-between gap-3">
                  <Tag tone="blue">{e.kind}</Tag>
                  <span className="text-xs text-muted-foreground">{e.date}</span>
                </div>
                <Link href={`/events/${e.slug}`} className="display text-lg hover:text-primary">
                  {e.title}
                </Link>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {e.venue}, {e.city} · {e.time}
                </p>
                <p className="text-xs text-muted-foreground">{e.price}</p>
              </Card>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* =========================================================================
   SECTION 14 — FINAL CALL
   ========================================================================= */

export function ClosingSection() {
  return (
    <section className="section bg-primary text-primary-foreground">
      <div className="shell flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex max-w-2xl flex-col gap-4">
          <p className="eyebrow text-white/80">Final Call</p>
          <h2 className="display text-balance text-3xl md:text-4xl lg:text-5xl font-bold">
            A community you can belong to, contribute to, grow with, and build relationships for life.
          </h2>
          <p className="display text-xl text-[var(--gold)] font-semibold">
            Build Your Business. Build Your Relationships. Build Your Circle.
          </p>
          <p className="text-sm text-white/80 leading-relaxed">
            Peers Global — World&apos;s First Community of Collaboration. Peers are Partners in Business and Friends in Life.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <Cta href="/membership" variant="gold" size="lg">
            JOIN PEERS GLOBAL
          </Cta>
          <Cta
            href="https://unity.peersglobal.com"
            target="_blank"
            rel="noreferrer"
            variant="onDark"
            size="lg"
          >
            <Download aria-hidden className="size-4" />
            DOWNLOAD UNITY APP
          </Cta>
        </div>
      </div>
    </section>
  )
}
