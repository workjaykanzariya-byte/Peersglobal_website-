import type { Metadata } from 'next'
import '@/app/sections.css'
import { HeroSection } from '@/components/home-sections/hero-section'
import { WhatIsSection } from '@/components/home-sections/what-is-section'
import { LocalCirclesBanner } from '@/components/home-sections/local-circles-banner'
import { HowItWorksSection } from '@/components/home-sections/how-it-works-section'
import { PathwayHeroSection } from '@/components/home-sections/pathway-hero-section'
import { PathwayCardsSection } from '@/components/home-sections/pathway-cards-section'
import { QuestSection } from '@/components/home-sections/quest-section'
import { MentorsSection } from '@/components/home-sections/mentors-section'
import { TrustedWorldwideSection } from '@/components/home-sections/trusted-worldwide-section'
import { CaseStudiesSection } from '@/components/home-sections/case-studies-section'
import { ChoosePathwaySection } from '@/components/home-sections/choose-pathway-section'
import { MeditationsSection } from '@/components/home-sections/meditations-section'

export const metadata: Metadata = {
  title: "Peers Global | World's First Community of Collaboration",
  description:
    'A global community of entrepreneurs and business leaders who grow through trust, collaboration and impact. Peers are Partners in Business and Friends in Life.',
}

export default function HomePage() {
  return (
    <div className="homepage-sections-root w-full bg-white text-[#0f131a]">
      {/* 1. Hero Section & Background Video */}
      <HeroSection />

      {/* 2. What is Section & Live Stats Counter */}
      <WhatIsSection />

      {/* 2b. Local CEO Groups / Circles Banner (Vistage-style) */}
      <LocalCirclesBanner />

      {/* Who We Are Section */}
      <TrustedWorldwideSection />

      {/* 3. How It Works Interactive Carousel */}
      <HowItWorksSection />

      {/* 4. The 6 Pathways Video Banner */}
      <PathwayHeroSection />

      {/* 5. The 6 Pathways Interactive Sticky Deck & Program Marquees */}
      <PathwayCardsSection />

      {/* 6. 110+ World-Class Quests Section (Every Mentor Designs a Quest) */}
      <QuestSection />

      {/* 7. Meet Your Mentors Section (100+ Teachers Marquee) */}
      <MentorsSection />

      {/* 9. Case Studies of Success (25,959 Stories Collage) */}
      <CaseStudiesSection />

      {/* 10. Choose Your Pathway (Pick a Pathway or Take All Six Pricing Table) */}
      <ChoosePathwaySection />

      {/* 11. Meditation Collection (3-Row Infinite Marquee) */}
      <MeditationsSection />
    </div>
  )
}
