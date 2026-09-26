'use client'

import React, { useState } from 'react'

export function HowItWorksSection() {
  const [index, setIndex] = useState(0)
  const totalCards = 8

  const handlePrev = () => {
    setIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setIndex((prev) => Math.min(totalCards - 1, prev + 1))
  }

  return (
    <section className="fd-how-it-works" id="unity-app" style={{ ['--fd-i' as any]: index }}>
      <div className="fd-how-it-works__head" data-fd-rise="0">
        <p className="fd-how-it-works__eyebrow brand-gradient-text">THE UNITY APP</p>
        <h2 className="fd-how-it-works__title">The community works every day, not just on meeting day.</h2>
        <p className="fd-how-it-works__desc">
          The Peers Global Unity App is the digital home of the community. It is how Peers find each other, stay connected, and keep collaborating between meetings.
        </p>
      </div>

      <div
        className="fd-how-it-works__carousel"
        data-fd-rise="120"
        role="group"
        aria-roledescription="carousel"
        aria-label="Peers Global Unity App features"
      >
        <ul className="fd-how-it-works__track" style={{ transform: `translateX(calc(-1 * ${index} * var(--fd-hiw-step)))` }}>
          {/* Card 1: Discover Peers */}
          <li className="fd-how-it-works__card">
            <img
              src="/images/unity-creatives/post 1.png"
              width="768"
              height="1152"
              alt="Discover Peers by industry, city and expertise"
              loading="lazy"
            />
            <div className="fd-how-it-works__copy">
              <p className="fd-how-it-works__kicker">Smart Directory</p>
              <p className="fd-how-it-works__label">Discover Peers by Industry, City &amp; Expertise</p>
            </div>
          </li>

          {/* Card 2: Book 1-to-1 conversations */}
          <li className="fd-how-it-works__card">
            <img
              src="/images/who-we-are-friends.jpg"
              width="768"
              height="1152"
              alt="Book one-to-one conversations"
              loading="lazy"
            />
            <div className="fd-how-it-works__copy">
              <p className="fd-how-it-works__kicker">Direct Connections</p>
              <p className="fd-how-it-works__label">Book One-to-One Conversations</p>
            </div>
          </li>

          {/* Card 3: Log referrals */}
          <li className="fd-how-it-works__card fd-how-it-works__card--ink">
            <img
              src="/images/unity-creatives/Post 2.png"
              width="768"
              height="1152"
              alt="Log referrals given and received"
              loading="lazy"
            />
            <div className="fd-how-it-works__copy fd-how-it-works__copy--wide">
              <p className="fd-how-it-works__kicker">Collaboration Ledger</p>
              <p className="fd-how-it-works__label">Log Referrals Given &amp; Received</p>
            </div>
          </li>

          {/* Card 4: Participate in Circle */}
          <li className="fd-how-it-works__card">
            <img
              src="/images/circle-meeting.png"
              width="768"
              height="1152"
              alt="Participate in their Circle"
              loading="lazy"
            />
            <div className="fd-how-it-works__copy">
              <p className="fd-how-it-works__kicker">Circle Hub</p>
              <p className="fd-how-it-works__label">Participate in Your Circle</p>
            </div>
          </li>

          {/* Card 5: Find & create opportunities */}
          <li className="fd-how-it-works__card fd-how-it-works__card--ink">
            <img
              src="/images/unity-creatives/Post 3.png"
              width="768"
              height="1152"
              alt="Find and create opportunities"
              loading="lazy"
            />
            <div className="fd-how-it-works__copy fd-how-it-works__copy--wide">
              <p className="fd-how-it-works__kicker">Opportunity Exchange</p>
              <p className="fd-how-it-works__label">Find &amp; Create Opportunities</p>
            </div>
          </li>

          {/* Card 6: Share their story */}
          <li className="fd-how-it-works__card">
            <img
              src="/images/story-jignesh-rohit.jpg"
              width="768"
              height="1152"
              alt="Share their story"
              loading="lazy"
            />
            <div className="fd-how-it-works__copy">
              <p className="fd-how-it-works__kicker">Peer Stories</p>
              <p className="fd-how-it-works__label">Share Your Story</p>
            </div>
          </li>

          {/* Card 7: See contribution recognised */}
          <li className="fd-how-it-works__card">
            <img
              src="/images/unity-creatives/8.png"
              width="768"
              height="1152"
              alt="See their contribution recognised"
              loading="lazy"
            />
            <div className="fd-how-it-works__copy">
              <p className="fd-how-it-works__kicker">Recognition System</p>
              <p className="fd-how-it-works__label">See Your Contribution Recognised</p>
            </div>
          </li>

          {/* Card 8: Stay connected globally */}
          <li className="fd-how-it-works__card">
            <img
              src="/images/unity-hero-phones.jpg"
              width="768"
              height="1152"
              alt="Stay connected to the community from anywhere in the world"
              loading="lazy"
            />
            <div className="fd-how-it-works__copy">
              <p className="fd-how-it-works__kicker">Global Network</p>
              <p className="fd-how-it-works__label">Stay Connected from Anywhere</p>
            </div>
          </li>
        </ul>
      </div>

      <nav className="fd-how-it-works__nav" aria-label="Carousel navigation">
        <button
          type="button"
          className="fd-how-it-works__arrow"
          aria-label="Previous slide"
          onClick={handlePrev}
          disabled={index === 0}
          style={{ opacity: index === 0 ? 0.35 : 1, cursor: index === 0 ? 'default' : 'pointer' }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>
        <button
          type="button"
          className="fd-how-it-works__arrow"
          aria-label="Next slide"
          onClick={handleNext}
          disabled={index >= totalCards - 1}
          style={{ opacity: index >= totalCards - 1 ? 0.35 : 1, cursor: index >= totalCards - 1 ? 'default' : 'pointer' }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
          </svg>
        </button>
      </nav>

      {/* Download App CTA */}
      <div className="fd-how-it-works__bottom">
        <p className="fd-how-it-works__bottom-text">Download the app, explore the community, and see it for yourself.</p>
        <div className="fd-how-it-works__buttons">
          <a
            href="https://apps.apple.com"
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
            href="https://play.google.com"
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
