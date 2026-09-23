'use client'

import React, { useState } from 'react'

export function HowItWorksSection() {
  const [index, setIndex] = useState(0)
  const totalCards = 6

  const handlePrev = () => {
    setIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setIndex((prev) => Math.min(totalCards - 1, prev + 1))
  }

  return (
    <section className="fd-how-it-works" style={{ ['--fd-i' as any]: index }}>
      <div className="fd-how-it-works__head" data-fd-rise="0">
        <p className="fd-how-it-works__eyebrow">HOW IT WORKS</p>
        <h2 className="fd-how-it-works__title">How Mindvalley Works</h2>
      </div>

      <div
        className="fd-how-it-works__carousel"
        data-fd-rise="120"
        role="group"
        aria-roledescription="carousel"
        aria-label="How Mindvalley works"
      >
        <ul className="fd-how-it-works__track" style={{ transform: `translateX(calc(-1 * ${index} * var(--fd-hiw-step)))` }}>
          <li className="fd-how-it-works__card">
            <img
              src="https://a.storyblok.com/f/312081/909124482f/how_lessons.webp/m/768x0/filters:format(webp):quality(80)"
              width="768"
              height="1152"
              alt="The Mindvalley app showing a 12 day streak and daily meditation progress"
            />
            <div className="fd-how-it-works__copy">
              <p className="fd-how-it-works__kicker">Level Up Fast With</p>
              <p className="fd-how-it-works__label">Daily 20-Min Lessons</p>
            </div>
          </li>
          <li className="fd-how-it-works__card">
            <img
              src="https://a.storyblok.com/f/312081/e977bb788f/how_community.webp/m/768x0/filters:format(webp):quality(80)"
              width="768"
              height="1152"
              alt="A large crowd of Mindvalley members gathered together at a live event"
            />
            <div className="fd-how-it-works__copy">
              <p className="fd-how-it-works__kicker">Build Connection With a</p>
              <p className="fd-how-it-works__label">Global Community</p>
            </div>
          </li>
          <li className="fd-how-it-works__card fd-how-it-works__card--ink">
            <img
              src="https://a.storyblok.com/f/312081/1cf5775edf/how_eve.webp/m/768x0/filters:format(webp):quality(80)"
              width="768"
              height="1152"
              alt="A phone showing a chat with EVE, the Mindvalley AI companion"
            />
            <div className="fd-how-it-works__copy fd-how-it-works__copy--wide">
              <p className="fd-how-it-works__kicker">AI To Help You Learn Faster</p>
              <p className="fd-how-it-works__label">EVE, Your AI Companion</p>
            </div>
          </li>
          <li className="fd-how-it-works__card">
            <img
              src="https://a.storyblok.com/f/312081/565dc97ce2/how_mentors.webp/m/768x0/filters:format(webp):quality(80)"
              width="768"
              height="1152"
              alt="Program cards featuring Mindvalley trainers Jim Kwik, Ronan Diego, Nir Eyal and Katherine Woodward Thomas"
            />
            <div className="fd-how-it-works__copy">
              <p className="fd-how-it-works__kicker">Workshops and Classes With</p>
              <p className="fd-how-it-works__label">The World’s Best Mentors</p>
            </div>
          </li>
          <li className="fd-how-it-works__card fd-how-it-works__card--ink">
            <img
              src="https://a.storyblok.com/f/312081/622e787df9/how_pathways.webp/m/768x0/filters:format(webp):quality(80)"
              width="768"
              height="1152"
              alt="Glass pathway symbols floating above a laptop showing a personalized Mindvalley pathway of quests and meditations"
            />
            <div className="fd-how-it-works__copy fd-how-it-works__copy--wide">
              <p className="fd-how-it-works__kicker">Personalized Growth Through</p>
              <p className="fd-how-it-works__label">Curated Pathways</p>
            </div>
          </li>
          <li className="fd-how-it-works__card">
            <img
              src="https://a.storyblok.com/f/312081/4b34eb640c/how_quest.webp/m/768x0/filters:format(webp):quality(80)"
              width="768"
              height="1152"
              alt="A grid of Mindvalley Quest covers including Superbrain, Uncompromised Life and The Silva Ultramind System"
            />
            <div className="fd-how-it-works__copy">
              <p className="fd-how-it-works__kicker">Learn From Over</p>
              <p className="fd-how-it-works__label">110+ Transformational Programs</p>
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
          style={{ opacity: index === 0 ? 0.4 : 1, cursor: index === 0 ? 'default' : 'pointer' }}
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
          style={{ opacity: index >= totalCards - 1 ? 0.4 : 1, cursor: index >= totalCards - 1 ? 'default' : 'pointer' }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
          </svg>
        </button>
      </nav>
    </section>
  )
}
