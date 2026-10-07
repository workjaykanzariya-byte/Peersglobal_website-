'use client'

import React from 'react'
import Link from 'next/link'

interface UniversePillar {
  badge: string
  title: string
  role: string
  image: string
}

const ROW_1_PILLARS: UniversePillar[] = [
  {
    badge: '01 · COMMUNITY',
    title: 'Community',
    role: 'Entrepreneurs across industries and countries',
    image: '/images/who-we-are-friends.jpg',
  },
  {
    badge: '02 · CULTURE',
    title: 'Culture',
    role: 'Trust, contribution and friendship',
    image: '/images/give-first-card.jpg',
  },
  {
    badge: '03 · CIRCLES',
    title: 'Circles',
    role: 'Your home inside the community',
    image: '/images/circle-meeting.png',
  },
  {
    badge: '04 · LANGUAGE',
    title: 'Language',
    role: 'The words and ideas we share',
    image: '/images/language-hero-desk.jpg',
  },
  {
    badge: '05 · LEADERSHIP',
    title: 'Leadership',
    role: 'A structure built and led by entrepreneurs',
    image: '/images/leadership-climbers-hero.jpg',
  },
  {
    badge: '06 · RECOGNITION',
    title: 'Recognition',
    role: 'Contribution seen and celebrated',
    image: '/images/who-we-are-impact.jpg',
  },
]

const ROW_2_PILLARS: UniversePillar[] = [
  {
    badge: '07 · UNITY APP',
    title: 'Unity App',
    role: 'The digital ecosystem',
    image: '/images/unity-hero-phones.jpg',
  },
  {
    badge: '08 · EVENTS',
    title: 'Events',
    role: 'Meetings, conclaves and the global summit',
    image: '/images/conclave.png',
  },
  {
    badge: '09 · MEDIA',
    title: 'Media',
    role: 'Stories, podcasts and publications',
    image: '/images/peer-stories-hero.jpg',
  },
  {
    badge: '10 · LEARNING',
    title: 'Learning',
    role: 'Masterclasses and playbooks',
    image: '/images/who-we-are-boardroom.jpg',
  },
  {
    badge: '11 · OPPORTUNITIES',
    title: 'Opportunities',
    role: 'Business, partnerships and markets',
    image: '/images/lsr-city-sunrise.jpg',
  },
  {
    badge: '12 · IMPACT',
    title: 'Impact',
    role: 'The 1 Million Mission',
    image: '/images/climbers-clean.jpg',
  },
]

function PillarCard({ pillar }: { pillar: UniversePillar }) {
  return (
    <article className="fd-meet-your-mentors__card">
      <img
        className="fd-meet-your-mentors__photo"
        src={pillar.image}
        alt={pillar.title}
        width="282"
        height="423"
        loading="lazy"
        decoding="async"
      />
      <span className="fd-meet-your-mentors__scrim"></span>
      <span className="fd-meet-your-mentors__badge">{pillar.badge}</span>
      <h3 className="fd-meet-your-mentors__title">{pillar.title}</h3>
      <p className="fd-meet-your-mentors__role">{pillar.role}</p>
    </article>
  )
}

export function MentorsSection() {
  return (
    <section className="fd-meet-your-mentors" id="universe" aria-label="Real People. Real Collaboration.">
      <div className="fd-meet-your-mentors__head">
        <p className="fd-meet-your-mentors__eyebrow brand-gradient-text" data-fd-rise="0">
          REAL PEOPLE. REAL COLLABORATION.
        </p>
        <h2 className="fd-meet-your-mentors__headline" data-fd-rise="80">
          <span>Don&apos;t take our word for it.</span>{' '}
          <span>Look at what happens between Peers.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mt-2 text-center">
          <div className="bg-slate-50/80 rounded-xl p-3.5 border border-slate-100 shadow-sm">
            <p className="text-xs uppercase tracking-wider font-semibold text-rose-600 mb-1">Peer Stories</p>
            <p className="text-xs text-slate-600 leading-relaxed">Stories of entrepreneurs, their journeys and what they have experienced inside the community.</p>
          </div>
          <div className="bg-slate-50/80 rounded-xl p-3.5 border border-slate-100 shadow-sm">
            <p className="text-xs uppercase tracking-wider font-semibold text-blue-600 mb-1">Collaboration Wins</p>
            <p className="text-xs text-slate-600 leading-relaxed">Real examples of relationships becoming action.</p>
          </div>
          <div className="bg-slate-50/80 rounded-xl p-3.5 border border-slate-100 shadow-sm">
            <p className="text-xs uppercase tracking-wider font-semibold text-amber-600 mb-1">In Their Own Words</p>
            <p className="text-xs text-slate-600 leading-relaxed">The most credible voice of a community is often the voice of the people who experience it.</p>
          </div>
        </div>
      </div>

      <div className="fd-meet-your-mentors__carousel">
        {/* Row 1 */}
        <div className="fd-meet-your-mentors__row fd-meet-your-mentors__row--1">
          <div
            className="fd-meet-your-mentors__track fd-meet-your-mentors__track--1"
            role="group"
            aria-roledescription="carousel"
            aria-label="Peers Global Universe pillars, row one"
          >
            {/* Set 1 */}
            <div className="fd-meet-your-mentors__set">
              {ROW_1_PILLARS.map((pillar) => (
                <PillarCard key={`r1-s1-${pillar.title}`} pillar={pillar} />
              ))}
            </div>
            {/* Set 2 (for seamless loop) */}
            <div className="fd-meet-your-mentors__set" aria-hidden="true">
              {ROW_1_PILLARS.map((pillar) => (
                <PillarCard key={`r1-s2-${pillar.title}`} pillar={pillar} />
              ))}
            </div>
            {/* Set 3 (buffer) */}
            <div className="fd-meet-your-mentors__set" aria-hidden="true">
              {ROW_1_PILLARS.map((pillar) => (
                <PillarCard key={`r1-s3-${pillar.title}`} pillar={pillar} />
              ))}
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="fd-meet-your-mentors__row fd-meet-your-mentors__row--2">
          <div
            className="fd-meet-your-mentors__track fd-meet-your-mentors__track--2"
            role="group"
            aria-roledescription="carousel"
            aria-label="Peers Global Universe pillars, row two"
          >
            {/* Set 1 */}
            <div className="fd-meet-your-mentors__set">
              {ROW_2_PILLARS.map((pillar) => (
                <PillarCard key={`r2-s1-${pillar.title}`} pillar={pillar} />
              ))}
            </div>
            {/* Set 2 (for seamless loop) */}
            <div className="fd-meet-your-mentors__set" aria-hidden="true">
              {ROW_2_PILLARS.map((pillar) => (
                <PillarCard key={`r2-s2-${pillar.title}`} pillar={pillar} />
              ))}
            </div>
            {/* Set 3 (buffer) */}
            <div className="fd-meet-your-mentors__set" aria-hidden="true">
              {ROW_2_PILLARS.map((pillar) => (
                <PillarCard key={`r2-s3-${pillar.title}`} pillar={pillar} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="fd-meet-your-mentors__footer">
        <p className="fd-meet-your-mentors__tagline !max-w-xl text-sm sm:text-base text-slate-600 italic">
          &ldquo;Do not present testimonials merely as praise for PEERS GLOBAL. Present them as evidence of what becomes possible between people.&rdquo;
        </p>
        <Link
          className="fd-meet-your-mentors__btn"
          href="/stories"
          aria-label="Meet the Peers"
        >
          MEET THE PEERS →
        </Link>
      </div>
    </section>
  )
}
