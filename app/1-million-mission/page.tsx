import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Check,
  HandHelping,
  HeartHandshake,
  Network,
  Sparkles,
  Users,
} from 'lucide-react'

export const metadata: Metadata = {
  title: '1 Million Mission | Peers Global',
  description:
    'Become a Life Impactor. One action can change one life. Help build a movement of entrepreneurs helping entrepreneurs toward 1M+ lives impacted by 2030.',
  keywords: [
    '1 million mission',
    'life impactor',
    'peers global mission',
    'entrepreneurs helping entrepreneurs',
    '1m entrepreneurs impact 2030',
  ],
}

const principleSteps = [
  'Share knowledge.',
  'Make an introduction.',
  'Mentor another entrepreneur.',
  'Help solve a problem.',
  'Open a business opportunity.',
  'Support someone through a difficult decision.',
  'Take responsibility for a community initiative.',
  'Connect the right two people at the right time.',
]

const impactStages = [
  {
    title: 'Relationships',
    text: 'Every new relationship creates another possibility for contribution.',
  },
  {
    title: 'Collaboration',
    text: 'Every meaningful collaboration creates another possibility for growth.',
  },
  {
    title: 'Impact',
    text: 'Every contribution can become another life impacted.',
  },
]

const missionStats = [
  { value: '1M+', label: 'Entrepreneurs to Impact by 2030' },
  { value: '1 Action', label: 'One meaningful act' },
  { value: '1 Life', label: 'Impacted each time' },
  { value: '18', label: 'Industry & Goal Circles' },
  { value: '10', label: 'Forms of Collaboration' },
]

export default function OneMillionMissionPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <section className="relative overflow-hidden bg-[#040B1B] text-white border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.18),transparent_28%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#040B1B] via-[#08152F] to-[#0A1023]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mb-8 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-sky-300">
            <span className="h-px w-8 bg-sky-300" />
            <span>THE 1 MILLION MISSION</span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_0.65fr]">
            <div>
              <h1 className="max-w-3xl font-serif text-4xl font-normal tracking-tight text-white sm:text-5xl lg:text-7xl">
                Become a Life Impactor
              </h1>

              <p className="mt-5 text-xl font-semibold text-sky-300 sm:text-2xl">
                1M+ entrepreneurs to impact by 2030.
              </p>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                1 Action = 1 Life Impacted
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/membership"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0062D2] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-[#0052B4] hover:scale-[1.02]"
                >
                  <span>Become a Life Impactor</span>
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/unity"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
                >
                  <span>Download the Unity App</span>
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-2xl backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-3 text-sky-300">
                <Sparkles className="size-5" />
                <span className="text-xs font-bold uppercase tracking-[0.24em]">
                  The Number That Matters
                </span>
              </div>

              <p className="font-serif text-2xl leading-snug text-white sm:text-3xl">
                One million is a big number. But the mission begins with one person.
              </p>

              <div className="mt-6 space-y-3 text-sm leading-relaxed text-slate-300">
                <p>One entrepreneur who receives an introduction at the right moment.</p>
                <p>One entrepreneur who learns something that changes a decision.</p>
                <p>One entrepreneur who discovers they do not have to build alone.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.25em] text-[#0062D2]">
            <span className="h-px w-8 bg-[#0062D2]" />
            <span>Why One Million?</span>
          </div>

          <h2 className="max-w-4xl font-serif text-3xl font-normal tracking-tight text-slate-900 sm:text-5xl">
            The mission is not simply about reaching a number. It is about creating one million meaningful possibilities.
          </h2>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-slate-700 sm:text-lg">
            <p>
              India is home to millions of entrepreneurs and small and medium businesses. Behind those businesses are people carrying responsibility for employees, families, customers, communities and their own dreams.
            </p>
            <p>
              When an entrepreneur grows, the impact rarely stops with that entrepreneur. A new employee may get an opportunity. A supplier may gain business. A family may become more secure. A customer may receive a better solution. Another entrepreneur may find the courage to begin.
            </p>
            <p>
              This is why we think about impact differently. When one entrepreneur helps another entrepreneur move forward, the effect can travel much further than the original action.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FAFBFD] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.25em] text-[#0062D2]">
              <span className="h-px w-8 bg-[#0062D2]" />
              <span>One action. One life.</span>
            </div>
            <h2 className="mt-5 font-serif text-3xl font-normal tracking-tight text-slate-900 sm:text-5xl">
              Our Impact System is deliberately simple.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {principleSteps.map((step, index) => (
              <div
                key={step}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.03)]"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-4xl font-serif text-amber-500">{index + 1}</span>
                  <HandHelping className="size-5 text-[#0062D2]" />
                </div>
                <p className="text-base font-medium leading-relaxed text-slate-800">{step}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-slate-200 bg-[#061836] p-8 text-white shadow-xl sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-300">The human value behind it</p>
            <p className="mt-4 max-w-4xl font-serif text-2xl leading-relaxed text-white sm:text-4xl">
              Someone helped someone else move forward. That is worth recognising.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.25em] text-[#0062D2]">
                <span className="h-px w-8 bg-[#0062D2]" />
                <span>How the mission is built</span>
              </div>

              <h2 className="mt-5 font-serif text-3xl font-normal tracking-tight text-slate-900 sm:text-5xl">
                A mission of one million cannot be achieved by one person.
              </h2>

              <div className="mt-7 space-y-5 text-base leading-relaxed text-slate-700 sm:text-lg">
                <p>
                  And that is precisely the point. The mission grows through a network of entrepreneurs who learn, share, collaborate and create impact with one another.
                </p>
                <p>
                  The architecture is simple: Entrepreneurs → Relationships → Collaboration → Contribution → Impact.
                </p>
                <p>
                  Every new relationship creates another possibility for contribution. Every meaningful collaboration creates another possibility for growth. Every contribution can become another life impacted.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {impactStages.map((stage, idx) => (
                <div key={stage.title} className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6">
                  <div className="mb-2 flex items-center gap-3">
                    <div className="flex size-9 items-center justify-center rounded-full bg-[#0062D2] text-sm font-bold text-white">
                      {idx + 1}
                    </div>
                    <h3 className="font-serif text-2xl text-slate-900">{stage.title}</h3>
                  </div>
                  <p className="text-base leading-relaxed text-slate-700">{stage.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#07152E] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.25em] text-sky-300">
              <span className="h-px w-8 bg-sky-300" />
              <span>Impact multiplies</span>
            </div>
            <h2 className="mt-5 font-serif text-3xl font-normal tracking-tight text-white sm:text-5xl">
              One entrepreneur helping another can change the path of a whole journey.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {[
              'One entrepreneur helping another.',
              'Then another sharing an experience that prevents a costly mistake.',
              'Another making an introduction.',
              'Another mentoring a first-generation entrepreneur.',
              'Another opening a door that would otherwise have remained closed.',
            ].map((item, idx) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="mb-4 flex items-center gap-3 text-sky-300">
                  <Network className="size-4" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">Step {idx + 1}</span>
                </div>
                <p className="text-sm leading-relaxed text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.25em] text-[#0062D2]">
            <span className="h-px w-8 bg-[#0062D2]" />
            <span>From member to life impactor</span>
          </div>

          <h2 className="max-w-4xl font-serif text-3xl font-normal tracking-tight text-slate-900 sm:text-5xl">
            Membership gives you a place in the community. Becoming a Life Impactor means recognising that your experience and willingness to help can create value for someone else.
          </h2>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-[#FAFBFD] p-8">
              <div className="mb-4 flex items-center gap-3 text-[#0062D2]">
                <Users className="size-5" />
                <span className="text-xs font-bold uppercase tracking-[0.25em]">What you do not need</span>
              </div>
              <ul className="space-y-3 text-base text-slate-700">
                <li className="flex items-start gap-3"><Check className="mt-1 size-4 shrink-0 text-[#0062D2]" />You do not have to be the most successful person in the room.</li>
                <li className="flex items-start gap-3"><Check className="mt-1 size-4 shrink-0 text-[#0062D2]" />You do not have to have every answer.</li>
                <li className="flex items-start gap-3"><Check className="mt-1 size-4 shrink-0 text-[#0062D2]" />You do not have to wait until you have reached the top.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-[#FAFBFD] p-8">
              <div className="mb-4 flex items-center gap-3 text-[#0062D2]">
                <HeartHandshake className="size-5" />
                <span className="text-xs font-bold uppercase tracking-[0.25em]">What you can do</span>
              </div>
              <ul className="space-y-3 text-base text-slate-700">
                <li className="flex items-start gap-3"><Check className="mt-1 size-4 shrink-0 text-[#0062D2]" />Share something you have learned.</li>
                <li className="flex items-start gap-3"><Check className="mt-1 size-4 shrink-0 text-[#0062D2]" />Make an introduction.</li>
                <li className="flex items-start gap-3"><Check className="mt-1 size-4 shrink-0 text-[#0062D2]" />Offer your experience.</li>
                <li className="flex items-start gap-3"><Check className="mt-1 size-4 shrink-0 text-[#0062D2]" />Ask someone what they need.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EEF5FC] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-5">
            {missionStats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-[0_10px_30px_rgba(15,23,42,0.03)]">
                <div className="font-serif text-4xl text-slate-900">{stat.value}</div>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#0062D2]">What does it mean to be a life impactor?</p>
            <p className="mt-5 max-w-5xl font-serif text-2xl leading-relaxed text-slate-900 sm:text-4xl">
              It means understanding that entrepreneurship is not only about what you build for yourself. It is also about what becomes possible for others because you were there.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[28px] border border-slate-200 bg-[#FAFBFD] p-8 sm:p-10 lg:p-12">
            <div className="mb-5 inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.25em] text-[#0062D2]">
              <span className="h-px w-8 bg-[#0062D2]" />
              <span>The mission belongs to all of us</span>
            </div>

            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
              PEERS GLOBAL may have created the mission. But it cannot be completed alone. The mission belongs to every entrepreneur who believes: I can learn from others. I can share what I know. I can build relationships based on trust. I can collaborate instead of competing unnecessarily. I can contribute something meaningful. I can impact another life.
            </p>

            <div className="mt-8 rounded-3xl bg-[#061836] p-7 text-white">
              <p className="font-serif text-2xl leading-snug text-white sm:text-4xl">
                You do not need to change the world alone. You can begin with one person.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#030B1C] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center lg:px-8">
          <div className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.25em] text-sky-300">
            <span className="h-px w-8 bg-sky-300" />
            <span>Become a Life Impactor</span>
          </div>

          <h2 className="mt-6 font-serif text-3xl font-normal tracking-tight text-white sm:text-5xl">
            Your action can be someone&apos;s turning point.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-xl">
            Somewhere in this community, there may be an entrepreneur who needs exactly what you already know. And somewhere ahead of you, there may be another entrepreneur whose experience can change your own journey.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/membership"
              className="inline-flex items-center gap-2 rounded-full bg-[#0062D2] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-[#0052B4]"
            >
              <span>Become a Life Impactor</span>
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/unity"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              <span>Download the Unity App</span>
            </Link>
          </div>

          <p className="mt-10 text-sm uppercase tracking-[0.24em] text-slate-400">
            Peers are Partners in Business and Friends in Life.
          </p>
        </div>
      </section>
    </main>
  )
}
