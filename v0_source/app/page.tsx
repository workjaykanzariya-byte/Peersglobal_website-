import { HomeHero } from '@/components/home/hero'
import {
  CirclesSection,
  ClosingSection,
  ContrastSection,
  EventsSection,
  JourneySection,
  LeadershipSection,
  LsrSection,
  MembershipSection,
  OutcomesSection,
  StoriesSection,
  UnitySection,
} from '@/components/home/sections'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <LsrSection />
      <ContrastSection />
      <CirclesSection />
      <OutcomesSection />
      <StoriesSection />
      <MembershipSection />
      <JourneySection />
      <LeadershipSection />
      <EventsSection />
      <UnitySection />
      <ClosingSection />
    </>
  )
}
