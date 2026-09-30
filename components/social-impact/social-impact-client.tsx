'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  HeartHandshake,
  Users,
  Target,
  Sparkles,
  TrendingUp,
  Award,
  Building2,
  CheckCircle2,
  ShieldCheck,
  Globe2,
  Zap,
  Layers,
  Compass,
  Briefcase,
  ExternalLink,
  Clock,
  Landmark,
  ArrowUpRight,
  BookOpen,
  FileText,
  HelpCircle,
  Heart,
  Check,
} from 'lucide-react'

// ─── 3 Evidenced SDGs ────────────────────────────────────────────────────────
const EVIDENCED_SDGS = [
  {
    num: '08',
    title: 'Decent Work & Economic Growth',
    whyItMatters:
      'Sustaining and scaling MSMEs directly protects formal livelihoods and prevents business mortality.',
    whatWeDo:
      'Providing governed peer advisory, cross-border commercial connections, and conflict resolution that keeps enterprise balance sheets resilient.',
    evidence:
      'Tracked bilateral collaboration outcomes, reduced capex failure rates, and job preservation reported across member enterprises.',
    badge: 'Employment & MSME Growth',
  },
  {
    num: '05',
    title: 'Gender Equality & Women in Leadership',
    whyItMatters:
      'Women founders face severe structural gaps in venture capital allocation and institutional market access.',
    whatWeDo:
      'Dedicated Fempreneur Circles, category-exclusive advisory rooms, capital readiness coaching, and commercial supply chain linkages.',
    evidence:
      'Targeted fellowship seats and active women-led enterprise growth cohorts documented inside the community.',
  },
  {
    num: '09',
    title: 'Industry, Innovation & Infrastructure',
    whyItMatters:
      'Small and medium enterprises need integration into national and international supply chain infrastructure.',
    whatWeDo:
      'Fostering joint ventures, technology transfers, clean-tech adoption through Greenpreneur, and domestic value-chain matchmaking.',
    evidence:
      'Verified cross-city and cross-industry JVs executed and logged inside the Unity App.',
  },
]

// ─── The 8-Stage Impact Journey Pipeline ─────────────────────────────────────
const IMPACT_JOURNEY_STAGES = [
  { stage: 'SEE', desc: 'Recognise a need.' },
  { stage: 'CARE', desc: 'Decide that it matters.' },
  { stage: 'CONTRIBUTE', desc: 'Give something you can genuinely offer.' },
  { stage: 'CONNECT', desc: 'Bring the right people together.' },
  { stage: 'ACT', desc: 'Turn intention into something real.' },
  { stage: 'MEASURE', desc: 'Understand what changed.' },
  { stage: 'SHARE', desc: 'Let the learning travel.' },
  { stage: 'MULTIPLY', desc: 'Enable the next action.' },
]

export function SocialImpactClient() {
  return (
    <div className="min-h-screen bg-[#FBFCFE] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-slate-200/80 bg-white/80 backdrop-blur-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-[#0062D2] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span>About</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">Foundation &amp; Social Impact</span>
        </div>
      </div>

      {/* ─── SECTION 1: HERO (SOCIAL IMPACT: IMPACT IS NOT WHAT WE SAY. IT IS WHAT CHANGES BECAUSE WE ACTED.) ─── */}
      <section className="relative pt-16 sm:pt-24 pb-16 sm:pb-24 bg-gradient-to-b from-[#F0F5FD] via-white to-[#FBFCFE] border-b border-slate-200/80 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                <span className="text-xs font-bold tracking-[0.22em] uppercase brand-gradient-text">
                  EVIDENCED SOCIAL IMPACT
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight leading-[1.08] text-slate-950">
                <span className="brand-gradient-text block">SOCIAL IMPACT</span>
                <span className="text-2xl sm:text-3xl lg:text-4xl text-slate-800 font-medium mt-2 block font-sans">
                  Impact is not what we say. It is what changes because we acted.
                </span>
              </h1>

              <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-light">
                <p>
                  Entrepreneurship creates value. But value does not have to stop with the business.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-medium text-slate-800">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200">• A skill can be shared</div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200">• A young person mentored</div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200">• A community strengthened</div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200">• An opportunity created</div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200">• A problem solved</div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200">• A life changed</div>
                </div>

                <p className="border-l-2 border-[#0062D2] pl-3 italic text-slate-900 font-serif text-base pt-1">
                  At PEERS GLOBAL, social impact is built around a simple belief: One entrepreneur can impact another. And when that impact keeps moving, one action can become many.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/1-million-mission"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white font-medium text-xs sm:text-sm shadow-md hover:shadow-lg hover:opacity-95 transition-all duration-200"
                >
                  <span>Explore 1M Mission →</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="#sdgs"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white text-slate-800 font-medium text-xs sm:text-sm border border-slate-300 shadow-xs hover:bg-slate-50 transition-all duration-200"
                >
                  <span>See Evidenced SDGs →</span>
                </a>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-white p-3">
                <div className="relative h-[380px] sm:h-[440px] rounded-2xl overflow-hidden bg-slate-900">
                  <Image
                    src="/images/culture-hero-desk.jpg"
                    alt="Social impact and mentorship in action"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                  
                  <div className="absolute top-5 right-5">
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 backdrop-blur-md text-[11px] font-mono font-bold uppercase tracking-wider">
                      Section 8 Foundation
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold uppercase tracking-wider text-sky-200 border border-white/20">
                      1 Action = 1 Life Impacted
                    </span>
                    <p className="font-serif text-lg sm:text-xl font-bold leading-snug">
                      &ldquo;Evidence first. Real work. Measurable human outcomes.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 2: HOW IMPACT ACTUALLY WORKS HERE & WHERE WE FOCUS ───────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: HOW IMPACT ACTUALLY WORKS HERE */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                    ACTION OVER SLOGANS
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 mt-1 leading-tight">
                  HOW IMPACT ACTUALLY WORKS HERE
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                <p>
                  Impact begins with action. Not with a slogan. Not with a campaign created for a photograph. Not with a number on a presentation.
                </p>
                <p>
                  It begins when someone decides to contribute. A Peer can:
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-800">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">• Teach &amp; mentor</div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">• Share hard-won experience</div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">• Give focused time</div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">• Create commercial opportunity</div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">• Support a person in struggle</div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">• Solve an operational problem</div>
                </div>
                <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200 space-y-1">
                  <p className="text-xs text-slate-600">The action may be small. Its effect may not be.</p>
                  <p className="font-serif font-bold text-base sm:text-lg text-[#0062D2]">
                    1 Action = 1 Life Impacted.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: WHERE WE FOCUS */}
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#FBFCFE] border border-slate-200 shadow-sm space-y-6">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-950">
                  WHERE WE FOCUS
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  Social impact becomes meaningful when it is specific. Rather than trying to speak about everything, PEERS GLOBAL focuses its impact work around defined areas where action can be organised, measured and evidenced:
                </p>
                <div className="space-y-2 text-xs text-slate-800 font-medium">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200">● What the need is</div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200">● What PEERS GLOBAL is doing</div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200">● Who is being served</div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200">● Who is contributing</div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200">● What has actually happened &amp; what evidence exists</div>
                </div>
                <p className="text-xs font-bold text-rose-700 pt-1">
                  No impact claim without evidence.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 3: THE FOUNDATION (1MEIF) ──────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#FBFCFE] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center border border-amber-200 shadow-2xs">
                <Landmark className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block">
                  SECTION 8 NOT-FOR-PROFIT ENTITY
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950">
                  THE FOUNDATION: 1 Million Entrepreneurs International Forum
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
              <p>
                The Foundation provides an institutional structure for the social-impact work connected with the ecosystem. The source architecture identifies the Foundation with the <strong>1 Million Entrepreneurs International Forum (1MEIF), Section 8</strong>.
              </p>
              <p>
                Carrying the work that sits outside commercial membership: grassroots mentorship, student founder fellowships, capacity building in Tier 2 and Tier 3 cities, and sponsored seats for underserved builders.
              </p>

              <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-1">
                <strong className="text-slate-950 font-bold block text-sm">The Foundation Principle:</strong>
                <p className="italic text-slate-800">
                  Build an institution capable of turning entrepreneurial contribution into measurable social impact.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── SECTION 4: THE SDGs WE IMPACT (3 GOALS. REAL WORK. EVIDENCE FIRST.) ─── */}
      <section id="sdgs" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 mb-1">
              <span className="h-[2px] w-6 bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                SUBSTANTIVE ALIGNMENT
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-950 mt-1">
              THE SDGs WE IMPACT
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2 font-light">
              Social impact should not become a collection of fashionable labels. PEERS GLOBAL identifies three Sustainable Development Goals directly relevant to its evidenced work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {EVIDENCED_SDGS.map((sdg) => (
              <div
                key={sdg.num}
                className="p-7 rounded-3xl bg-[#FBFCFE] border border-slate-200 shadow-sm flex flex-col justify-between space-y-4 hover:border-blue-300 transition-all"
              >
                <div className="space-y-3">
                  <span className="w-10 h-10 rounded-2xl bg-blue-50 text-[#0062D2] border border-blue-200 font-mono font-bold text-sm flex items-center justify-center">
                    {sdg.num}
                  </span>
                  <h3 className="font-serif font-bold text-slate-950 text-xl">
                    {sdg.title}
                  </h3>
                  <div className="space-y-2 text-xs text-slate-600">
                    <div>
                      <strong className="text-slate-900 block font-bold">Why it matters:</strong>
                      <p className="font-light">{sdg.whyItMatters}</p>
                    </div>
                    <div>
                      <strong className="text-slate-900 block font-bold">What we are doing:</strong>
                      <p className="font-light">{sdg.whatWeDo}</p>
                    </div>
                    <div>
                      <strong className="text-slate-900 block font-bold">Evidence:</strong>
                      <p className="font-light">{sdg.evidence}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 text-white text-center space-y-2 max-w-3xl mx-auto">
            <h4 className="font-serif font-bold text-lg text-amber-300">
              THREE GOALS. REAL WORK. EVIDENCE FIRST.
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 font-light">
              We will not list all 17 SDGs simply to appear comprehensive. There is a clear connection between:
            </p>
            <p className="text-xs font-mono font-bold text-sky-200 uppercase tracking-wider">
              The Goal → The Action → The People → The Result → The Evidence.
            </p>
          </div>

        </div>
      </section>

      {/* ─── SECTION 5: MENTOR & TRAIN, VOLUNTEER & IMPACT REPORTS ───────────── */}
      <section className="py-16 sm:py-24 bg-[#FBFCFE] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Box 1: MENTOR & TRAIN */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0062D2] flex items-center justify-center border border-blue-100">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-950">
                  MENTOR &amp; TRAIN
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  Experience becomes more valuable when it is shared. One entrepreneur may have spent years learning something that another person is trying to understand today.
                </p>
                <div className="space-y-1 text-xs text-slate-700 font-medium">
                  <p>• Knowledge &amp; skills</p>
                  <p>• Battle-tested experience</p>
                  <p>• Perspective &amp; encouragement</p>
                </div>
                <p className="text-[11px] text-[#0062D2] font-semibold pt-1">
                  Access to lived experience, not just theory.
                </p>
              </div>
              <Link href="/contact?intent=membership" className="text-xs font-bold text-[#0062D2] hover:underline">
                Apply to Mentor →
              </Link>
            </div>

            {/* Box 2: VOLUNTEER */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center border border-purple-100">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-950">
                  VOLUNTEER
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  Sometimes the most valuable thing you can give is your time. Not every contribution needs a financial transaction.
                </p>
                <div className="space-y-1 text-xs text-slate-700 font-medium">
                  <p>• An hour of advice</p>
                  <p>• A confidential conversation</p>
                  <p>• A day of service at a conclave</p>
                  <p>• A door-opening connection</p>
                </div>
              </div>
              <Link href="/contact?intent=support" className="text-xs font-bold text-purple-700 hover:underline">
                Volunteer Desk →
              </Link>
            </div>

            {/* Box 3: IMPACT REPORTS */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-950">
                  IMPACT REPORTS
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  If we create impact, we should be able to show it. Social impact deserves transparency: documenting what happened, not just what was intended.
                </p>
                <div className="space-y-1 text-xs text-slate-700 font-medium">
                  <p>• Who participated &amp; benefited</p>
                  <p>• What action took place</p>
                  <p>• What changed &amp; what remains</p>
                </div>
              </div>
              <Link href="/1-million-mission" className="text-xs font-bold text-emerald-700 hover:underline">
                Read Impact Reports →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 6: MEASURE WHAT MATTERS & THE IMPACT JOURNEY ───────────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Box 1: MEASURE WHAT MATTERS */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FBFCFE] border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-2xl font-serif font-bold text-slate-950">
                MEASURE WHAT MATTERS
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                A large number does not automatically mean a large impact. One meaningful intervention can matter enormously to one person.
              </p>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-800 space-y-1">
                <strong className="block font-bold text-slate-950">The questions we ask:</strong>
                <p>• Who was impacted and what changed?</p>
                <p>• Can the impact be demonstrated?</p>
                <p>• Can the model be repeated and sustained?</p>
              </div>
            </div>

            {/* Box 2: FROM ENTREPRENEUR TO IMPACT CREATOR */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FBFCFE] border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-2xl font-serif font-bold text-slate-950">
                FROM ENTREPRENEUR TO IMPACT CREATOR
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                An entrepreneur creates value through a business. An impact creator creates value that travels beyond the business.
              </p>
              <p className="text-xs sm:text-sm font-serif italic text-slate-900 font-medium">
                The two do not have to be separate identities. Impact begins when contribution moves beyond ourselves.
              </p>
            </div>

          </div>

          {/* THE 8-STAGE IMPACT JOURNEY PIPELINE */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white shadow-xl space-y-6">
            <div className="text-center space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
                THE MULTIPLIER MECHANISM
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                THE IMPACT JOURNEY
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 text-center">
              {IMPACT_JOURNEY_STAGES.map((s, idx) => (
                <div key={s.stage} className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-xs font-mono font-bold text-sky-300 block">
                    {s.stage}
                  </span>
                  <p className="text-[11px] text-slate-300 font-light leading-tight">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-center text-xs font-serif italic text-blue-200 pt-2">
              &ldquo;The chain continues: 1 Action = 1 Life Impacted.&rdquo;
            </p>
          </div>

        </div>
      </section>

      {/* ─── SECTION 7: CLOSING ROYAL HERO BANNER (JOIN THE IMPACT) ────────── */}
      <section className="relative py-20 sm:py-28 bg-[#0062D2] text-white overflow-hidden">
        {/* Geometric Art */}
        <div className="absolute -right-16 -top-20 bottom-0 pointer-events-none w-[420px] sm:w-[560px] lg:w-[680px] opacity-35 overflow-hidden flex items-center justify-center">
          <svg
            viewBox="0 0 600 600"
            fill="none"
            className="w-full h-full text-white/30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="300" cy="300" r="230" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="300" cy="300" r="170" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
            <circle cx="300" cy="300" r="110" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            <line x1="120" y1="180" x2="480" y2="420" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
            <circle cx="300" cy="300" r="6" fill="#7DD3FC" />
            <circle cx="300" cy="300" r="15" stroke="#7DD3FC" strokeWidth="1" opacity="0.4" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Manifesto */}
            <div className="lg:col-span-8 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-200">
                — 1 ACTION = 1 LIFE IMPACTED —
              </span>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.1]">
                JOIN THE IMPACT
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-white/90 leading-relaxed font-light max-w-2xl">
                <p>
                  You do not need to wait until you have everything figured out. You can begin with what you already have:
                </p>
                <div className="space-y-1 pl-3 border-l-2 border-sky-300 text-sm text-sky-100 font-medium">
                  <p>Your experience.</p>
                  <p>Your time.</p>
                  <p>Your knowledge.</p>
                  <p>Your network.</p>
                  <p className="text-white font-bold">Your willingness to help.</p>
                </div>
                <p className="text-white font-serif text-lg italic pt-1">
                  What can you give today that could change something for someone else?
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact?intent=membership"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-[#0062D2] font-semibold text-sm shadow-xl hover:bg-blue-50 transition-all duration-200 group hover:scale-105"
                >
                  <span>Mentor &amp; Train</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/contact?intent=support"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/40 backdrop-blur-sm transition-all duration-200"
                >
                  <span>Volunteer →</span>
                </Link>

                <Link
                  href="/1-million-mission"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/40 backdrop-blur-sm transition-all duration-200"
                >
                  <span>Read Impact Reports →</span>
                </Link>
              </div>
            </div>

            {/* Right Cursive Script */}
            <div className="lg:col-span-4 text-center lg:text-right select-none pointer-events-none">
              <p
                className="text-3xl sm:text-4xl lg:text-5xl font-light italic leading-tight text-white drop-shadow-lg"
                style={{ fontFamily: 'var(--font-script)' }}
              >
                See.
                <br />
                Care.
                <br />
                Contribute.
                <br />
                Multiply.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
