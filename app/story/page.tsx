import type { Metadata } from 'next'
import Image from 'next/image'
import { Cta, Eyebrow, SectionHead } from '@/components/site/ui'
import { ArrowUpRight, Award, ShieldCheck, Sparkles, Building2, MapPin, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Story & Mission',
  description:
    "From VyapaarJagat to the LSR model — the origin story of Peers Global, India's first governed peer-circle leadership organisation.",
}

const TIMELINE = [
  {
    year: '2018',
    title: 'VyapaarJagat Founded',
    body: 'Dr. Pravin Parmar launches VyapaarJagat, a Hinglish business media platform that reaches 1M+ SME entrepreneurs. The platform reveals a gap: entrepreneurs wanted accountability, not just content.',
  },
  {
    year: '2020',
    title: 'First Peer Room',
    body: 'A small, invitation-only peer group of 12 Ahmedabad business owners starts meeting monthly. No agenda, just conversation. Within 3 months, referrals start flowing — but only when structure is added.',
  },
  {
    year: '2021',
    title: 'The LSR Model is Born',
    body: 'Dr. Parmar develops the Learn-Share-Refer agenda: 40 minutes of structured learning, 60 minutes of hot-seat problem-solving, 40 minutes of written referral commitments. First Circle runs in Ahmedabad.',
  },
  {
    year: '2022',
    title: 'Peers Global Incorporated',
    body: 'Peers Global Business Media Pvt Ltd is incorporated (CIN: U22219GJ2022PTC137646). Five Circles launch across Ahmedabad and Surat. Category exclusivity is introduced and immediately reduces churn.',
  },
  {
    year: '2023',
    title: 'Unity Platform Launched',
    body: 'Unity — the platform of record for all Circle activity — goes live. Referral ledgers, attendance logs, 1-to-1 pairing and vendor scorecards are moved from WhatsApp to structured data.',
  },
  {
    year: '2024',
    title: 'Scale to 11 Cities',
    body: 'Peers Global reaches 11 active cities: Ahmedabad, Surat, Rajkot, Vadodara, Morbi, Mundra, Gandhinagar, Mumbai, Pune, Indore, and Bengaluru. The first Industry Director appointments are made.',
  },
  {
    year: '2025',
    title: '2,400+ Members, ₹412 Cr Referred',
    body: 'The network crosses 2,400 members. Annual member survey reports ₹412 Cr in peer-referred business value (FY 2025–26). 91% Circle Member renewal rate.',
  },
  {
    year: '2026',
    title: 'Mission 2030 Launched',
    body: 'Peers Global announces Mission 2030: 50 Circles, 25 cities, and 10,000 members — with the Unity platform as the governance backbone and a full leadership pipeline producing Circle Founders from within.',
  },
]

export default function StoryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-hidden">
      
      {/* ─── Premium Redesigned Hero ─── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#060d1f] via-[#0b1b3a] to-[#080f22] text-white pt-28 pb-32 border-b border-white/5">
        {/* Animated Background Orbs */}
        <div className="pointer-events-none absolute -top-40 -left-40 size-[600px] rounded-full bg-blue-600/10 blur-[130px] animate-pulse duration-[6000ms]" />
        <div className="pointer-events-none absolute bottom-0 right-0 size-[500px] rounded-full bg-[#D4AF37]/5 blur-[110px] animate-pulse duration-[8000ms]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />

        <div className="shell grid gap-16 lg:grid-cols-12 lg:items-center relative z-10">
          
          {/* Content Column */}
          <div className="lg:col-span-7 flex flex-col gap-8 animate-in fade-in slide-in-from-left-5 duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-mono tracking-wider uppercase w-fit">
              <Sparkles className="size-3.5 text-[#D4AF37]" />
              Our Story &amp; Mission
            </div>
            
            <h1 className="display text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-snug text-white">
              From <span className="bg-gradient-to-r from-blue-400 via-blue-200 to-[#D4AF37] bg-clip-text text-transparent">VyapaarJagat</span> <br />
              to a worldwide ecosystem
            </h1>
            
            <p className="text-lg leading-relaxed text-slate-300 max-w-2xl font-light">
              Founded by Dr. Pravin Parmar, Peers Global evolved from an entrepreneurial media powerhouse into India&rsquo;s most disciplined leadership organisation — built on governed peer Circles, category exclusivity, and the LSR model.
            </p>

            {/* Premium Stat Badges */}
            <div className="grid grid-cols-3 gap-4 border-y border-white/10 py-6 max-w-xl">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white">11</p>
                <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">Active Cities</p>
              </div>
              <div className="border-l border-white/10 pl-4">
                <p className="text-2xl sm:text-3xl font-bold text-[#D4AF37]">2,400+</p>
                <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">Elite Members</p>
              </div>
              <div className="border-l border-white/10 pl-4">
                <p className="text-2xl sm:text-3xl font-bold text-blue-400">91%</p>
                <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">Renewal Rate</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Cta href="/founder" variant="primary" size="lg">
                Meet the Founder
                <ArrowUpRight className="size-4 ml-1" />
              </Cta>
              <Cta href="/why-peers-global" variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/5">
                Why Peers Global
              </Cta>
            </div>
          </div>

          {/* Premium Animated Image Frame Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-5 duration-700">
            <div className="relative w-full max-w-[420px] aspect-[4/5] group">
              {/* Outer Decorative Gradient Border & Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#1e4ed8] to-[#D4AF37] rounded-3xl opacity-20 group-hover:opacity-40 blur-lg transition duration-700" />
              
              {/* Main Content Wrapper */}
              <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-white/20">
                <Image
                  src="/images/story-hero.jpg"
                  alt="Dr. Pravin Parmar presenting Certificate of Appreciation to Nayan Shah"
                  fill
                  sizes="(min-width: 1024px) 35vw, 100vw"
                  className="object-cover object-top transition duration-700 group-hover:scale-105"
                  priority
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Floating Bottom Card */}
                <div className="absolute bottom-5 left-5 right-5 p-5 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-between gap-4">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] tracking-widest font-mono text-[#D4AF37] uppercase">Co-Founder Ceremony</span>
                    <span className="text-sm font-semibold text-white">Dr. Pravin Parmar &amp; Nayan Shah</span>
                  </div>
                  <div className="size-10 shrink-0 rounded-xl bg-blue-600/30 border border-blue-500/30 flex items-center justify-center text-blue-300">
                    <Award className="size-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Timeline Section */}
      <section className="section border-b border-[var(--border)] bg-background relative">
        <div className="shell flex flex-col gap-14">
          <SectionHead
            eyebrow="Evolution Timeline"
            title="How we built the ecosystem"
          />
          
          <div className="relative border-l-2 border-slate-200 pl-8 ml-4 sm:ml-6 flex flex-col gap-12">
            {TIMELINE.map((evt, idx) => (
              <div key={evt.year} className="relative group transition-all duration-300 hover:translate-x-1">
                {/* Timeline Bullet Node */}
                <div className="absolute -left-[2.55rem] top-1.5 flex size-6 items-center justify-center rounded-full bg-slate-100 border-2 border-slate-300 transition-all duration-300 group-hover:border-[#1e4ed8] group-hover:bg-[#1e4ed8] group-hover:scale-110">
                  <div className="size-2 rounded-full bg-slate-400 group-hover:bg-white" />
                </div>

                <div className="inline-block text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-blue-50 text-[#1e4ed8] mb-3">
                  {evt.year}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#1e4ed8] transition-colors duration-300">
                  {evt.title}
                </h3>
                
                <p className="max-w-3xl text-sm leading-relaxed text-slate-600 font-light">
                  {evt.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission 2030 */}
      <section id="mission-2030" className="section bg-slate-950 text-white relative overflow-hidden">
        {/* Glow */}
        <div className="pointer-events-none absolute -bottom-40 -left-40 size-[500px] rounded-full bg-[#D4AF37]/5 blur-[120px]" />
        
        <div className="shell grid gap-16 lg:grid-cols-12 lg:items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <Eyebrow tone="gold">Mission 2030</Eyebrow>
            <h2 className="display text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              50 Circles. 25 Cities.<br />
              <span className="text-[#D4AF37]">10,000 Elite Members.</span>
            </h2>
            <p className="leading-relaxed text-slate-400 text-lg font-light">
              By 2030, Peers Global will operate in every major business centre in India, with Circles in every key sector and a leadership pipeline producing new Circle Founders from within the network every quarter.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {[
                { title: '50 Governed Circles', desc: 'Across industry and purpose-led tracks' },
                { title: '25 Cities Live', desc: 'With physical chapter infrastructure' },
                { title: '10,000+ Active Members', desc: 'Managed on the Unity platform' },
                { title: 'Sustaining Pipeline', desc: 'Leaders generated organically from within' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm">
                  <div className="size-5 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                    <span className="text-xs font-bold font-mono">✓</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-white">{item.title}</span>
                    <span className="text-xs text-slate-400 mt-0.5">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Cta href="/leadership/circle-founder" variant="gold" size="lg">
                Become a Circle Founder
              </Cta>
              <Cta href="/membership" variant="onDark" size="lg">
                Join the Network
              </Cta>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full aspect-video sm:aspect-square max-w-[440px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <Image
                src="/images/mission-2030.jpg"
                alt="Peers Global members at a Circle meeting — Mission 2030"
                fill
                sizes="(min-width: 1024px) 35vw, 100vw"
                className="object-cover object-center transition duration-700 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Press Logo Cloud */}
      <section className="section-sm border-b border-[var(--border)] bg-slate-50">
        <div className="shell flex flex-col gap-8">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-400 text-center">Featured Press &amp; Ecosystem</p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60 grayscale hover:opacity-85 transition-opacity duration-300">
            {['Economic Times', 'YourStory', 'Entrepreneur India', 'Financial Express', 'VyapaarJagat'].map((outlet) => (
              <span key={outlet} className="text-sm sm:text-base font-bold tracking-tight text-slate-800">{outlet}</span>
            ))}
          </div>
          <div className="text-center pt-2">
            <Cta href="/stories" variant="quiet">View all press coverage →</Cta>
          </div>
        </div>
      </section>
      
    </div>
  )
}
