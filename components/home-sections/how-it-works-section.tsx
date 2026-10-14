'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { GalaxyButton } from '@/components/ui/galaxy-button'
import { SITE } from '@/lib/data/site'

interface UnityCard {
  image: string
  alt: string
  kicker?: string
  label?: string
  ink?: boolean
}

const UNITY_CARDS: UnityCard[] = [
  {
    image: '/images/unity-creatives/1.png',
    alt: 'Discover Peers by industry, city and expertise',
  },
  {
    image: '/images/exclusive_lounge.jpg',
    alt: 'Book one-to-one conversations',
    kicker: 'Direct Connections',
    label: 'Book One-to-One Conversations',
  },
  {
    image: '/images/unity-creatives/2.png',
    alt: 'Log referrals given and received',
    ink: true,
  },
  {
    image: '/images/section_image/circle-roundtable-topdown.jpg',
    alt: 'Participate in their Circle',
    kicker: 'Circle Hub',
    label: 'Participate in Your Circle',
  },
  {
    image: '/images/unity-creatives/3.jpeg',
    alt: 'Find and create opportunities',
    ink: true,
  },
  {
    image: '/images/peer-stories-hero.jpg',
    alt: 'Share their story',
    kicker: 'Peer Stories',
    label: 'Share Your Story',
  },
  {
    image: '/images/unity-creatives/4.jpeg',
    alt: 'See their contribution recognised',
  },
  {
    image: '/images/unity-creatives/5.jpeg',
    alt: 'Stay connected to the community from anywhere in the world',
    kicker: 'Global Network',
    label: 'Stay Connected from Anywhere',
  },
]

function UnityCardItem({ card }: { card: UnityCard }) {
  return (
    <li className={`fd-how-it-works__card ${card.ink ? 'fd-how-it-works__card--ink' : ''}`}>
      <img
        src={card.image}
        width="768"
        height="1152"
        alt={card.alt}
        loading="lazy"
        decoding="async"
      />
      {card.label && (
        <div className="fd-how-it-works__copy">
          {card.kicker && <p className="fd-how-it-works__kicker">{card.kicker}</p>}
          <p className="fd-how-it-works__label">{card.label}</p>
        </div>
      )}
    </li>
  )
}

export function HowItWorksSection() {
  const [direction, setDirection] = useState<'ltr' | 'rtl'>('ltr')

  return (
    <section className="fd-how-it-works" id="unity-app">
      <div className="fd-how-it-works__head" data-fd-rise="0">
        <p className="fd-how-it-works__eyebrow brand-gradient-text">UNITY</p>
        <h2 className="fd-how-it-works__title">Your community doesn&apos;t disappear when the meeting ends.</h2>
        <div className="fd-how-it-works__desc space-y-3.5">
          <p className="text-base sm:text-[17px] text-slate-700 leading-relaxed font-normal">
            Unity brings the PEERS GLOBAL experience into everyday community life.
          </p>

          <p className="text-xs sm:text-sm font-semibold tracking-wider text-slate-800 uppercase flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            <span>Connect.</span>
            <span>Share.</span>
            <span>Discover.</span>
            <span>Ask.</span>
            <span>Offer.</span>
            <span>Meet.</span>
            <span>Follow up.</span>
          </p>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Continue the conversations that began in the Circle.
          </p>

          <p className="text-sm sm:text-base italic text-slate-800 font-medium pt-0.5">
            Because the real question is not: <span className="font-semibold text-slate-900">&ldquo;How often did we meet?&rdquo;</span> It is: <span className="font-semibold text-slate-900">&ldquo;What happened because we stayed connected?&rdquo;</span>
          </p>

        </div>
      </div>

      <div
        className="fd-how-it-works__carousel"
        data-fd-rise="120"
        role="region"
        aria-label="Peers Global Unity App features infinite slider"
      >
        <div className={`fd-how-it-works__track ${direction === 'rtl' ? 'fd-how-it-works__track--rtl' : 'fd-how-it-works__track--ltr'}`}>
          {/* Set 1 */}
          <ul className="fd-how-it-works__set">
            {UNITY_CARDS.map((card, i) => (
              <UnityCardItem key={`u-s1-${i}`} card={card} />
            ))}
          </ul>
          {/* Set 2 for seamless infinite loop */}
          <ul className="fd-how-it-works__set" aria-hidden="true">
            {UNITY_CARDS.map((card, i) => (
              <UnityCardItem key={`u-s2-${i}`} card={card} />
            ))}
          </ul>
        </div>
      </div>

      <nav className="fd-how-it-works__nav" aria-label="Carousel direction navigation">
        <button
          type="button"
          className={`fd-how-it-works__arrow ${direction === 'rtl' ? 'ring-2 ring-white/60 shadow-lg' : 'opacity-80'}`}
          aria-label="Scroll left"
          title="Scroll towards left"
          onClick={() => setDirection('rtl')}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>
        <button
          type="button"
          className={`fd-how-it-works__arrow ${direction === 'ltr' ? 'ring-2 ring-white/60 shadow-lg' : 'opacity-80'}`}
          aria-label="Scroll right (Left to Right)"
          title="Scroll towards right (Left to Right)"
          onClick={() => setDirection('ltr')}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
          </svg>
        </button>
      </nav>

      {/* Download App CTA */}
      <div className="fd-how-it-works__bottom">
        <GalaxyButton
          href="/unity"
          size="lg"
          className="mb-1"
        >
          EXPLORE UNITY
        </GalaxyButton>
        <p className="fd-how-it-works__bottom-text">Download the app, explore the community, and see it for yourself.</p>
        <div className="fd-how-it-works__buttons">
          <a
            href={SITE.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fd-how-it-works__store-btn"
            aria-label="Download on App Store"
          >
            <svg className="w-6 h-6 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.76 1.06-1.82.94-2.88-.91.04-2.02.6-2.67 1.36-.58.67-.99 1.74-.85 2.77 1.02.08 2.05-.55 2.58-1.25z"/>
            </svg>
            <span className="flex flex-col text-left">
              <span className="text-[10px] uppercase tracking-wider text-white/70 leading-none">Download on the</span>
              <span className="text-[14px] font-semibold text-white leading-tight">App Store</span>
            </span>
          </a>

          <a
            href={SITE.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fd-how-it-works__store-btn"
            aria-label="Get it on Google Play"
          >
            <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M3.609 1.814L13.792 12 3.61 22.186c-.32-.239-.523-.628-.523-1.099V2.913c0-.471.203-.86.522-1.099zM15.207 13.415l2.259 2.259-11.83 6.83 9.571-9.089zm0-2.83L5.636 1.496l11.83 6.83-2.259 2.259zm1.414 1.415l3.208 1.852c.873.504.873 1.327 0 1.831l-3.208 1.852-2.121-2.121 2.121-2.114z"/>
            </svg>
            <span className="flex flex-col text-left">
              <span className="text-[10px] uppercase tracking-wider text-white/70 leading-none">Get it on</span>
              <span className="text-[14px] font-semibold text-white leading-tight">Google Play</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
