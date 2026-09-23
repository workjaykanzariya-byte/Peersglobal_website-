import type { Metadata } from 'next'
import { HomeHero } from '@/components/home/hero'
import {
  CirclesSection,
  ClosingSection,
  CollaborationSection,
  EventsSection,
  JourneySection,
  LeadershipSection,
  LsrSection,
  MissionSection,
  OutcomesSection,
  PhilosophySection,
  StoriesSection,
  UnitySection,
  UniverseSection,
  WhoWeAreSection,
} from '@/components/home/sections'

export const metadata: Metadata = {
  title: "Peers Global | World's First Community of Collaboration",
  description:
    'A global community of entrepreneurs and business leaders who grow through trust, collaboration and impact. Peers are Partners in Business and Friends in Life.',
}

export default function HomePage() {
  return (
    <>
      {/* Section 1 — Hero */}
      <HomeHero />

      {/* Our Philosophy */}
      <PhilosophySection />

      {/* Who We Are & What Peers Global Is */}
      <WhoWeAreSection />

      {/* Section 4 — Trusted Circles */}
      <CirclesSection />

      {/* Section 5 — How Collaboration Works (11 Forms) */}
      <CollaborationSection />

      {/* Section 6 — Learn, Sales, Resources (LSR) */}
      <LsrSection />

      {/* Section 7 — The Unity App */}
      <UnitySection />

      {/* Section 8 — Impact */}
      <OutcomesSection />

      {/* Section 9 — The 1 Million Mission */}
      <MissionSection />

      {/* Section 10 — Real Collaborations */}
      <StoriesSection />

      {/* Section 11 — The Peers Global Universe */}
      <UniverseSection />

      {/* Section 12 — The Journey */}
      <JourneySection />

      {/* Section 13 — Leadership */}
      <LeadershipSection />

      {/* Events Calendar */}
      <EventsSection />

      {/* Section 14 — Final Call */}
      <ClosingSection />
    </>
  )
}


