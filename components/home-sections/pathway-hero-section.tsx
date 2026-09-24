'use client'

import React from 'react'

export function PathwayHeroSection() {
  return (
    <section className="fd-pathway-hero">
  <video poster="https://a.storyblok.com/f/312081/0b859c882d/poster_pathway-hero.webp" className="fd-pathway-hero__video" autoPlay muted loop playsInline muted loop playsInline preload="metadata" aria-hidden="true" tabIndex="-1" src="https://assets.mindvalley.com/api/v1/assets/de3fb208-f92b-4ef3-849a-45b68507e1ec.mp4"></video>

  <div className="fd-pathway-hero__inner">
    <div className="fd-pathway-hero__copy">
      <p className="fd-pathway-hero__eyebrow" data-fd-rise="0">THE 6 PATHWAYS</p>
      <h2 className="fd-pathway-hero__headline" data-fd-rise="80">One Life. Six Pathways to Transform It.</h2>
      <p className="fd-pathway-hero__body" data-fd-rise="160">
        Choose from six Pathways — mind, body, relationships, business, influence and
        spirit — featuring 20-minute daily lessons from Mindvalley’s best teachers.
        Access one for
        <span className="fd-pathway-hero__price" data-fd-price-link="N6LVZJ5E2GOSK8AWMDPB">$299</span>/year,
        or all six and 110+ programs for
        <span className="fd-pathway-hero__price" data-fd-price-link="GPIDJZ64AKFUSQL59MX7">$499</span>/year.
      </p>
    </div>

    <div className="fd-pathway-hero__cta">
      <a className="fd-pathway-hero__btn fd-pathway-hero__btn--neutral" href="/membership">Find Your Pathway</a>
    </div>
  </div>
</section>
  )
}
