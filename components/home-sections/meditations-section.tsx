'use client'

import React from 'react'
import Link from 'next/link'

const ROW_1_IMAGES = [
  { src: '/images/leadership-circle-founder.jpg', alt: 'Circle Founder' },
  { src: '/images/circle-meeting.png', alt: 'Circle Meeting' },
  { src: '/images/peers-avatars/amit-desai.jpg', alt: 'Amit Desai' },
  { src: '/images/who-we-are-friends.jpg', alt: 'Peers Community' },
  { src: '/images/industry-director-speaker.jpg', alt: 'Industry Director' },
  { src: '/images/peers-avatars/neha-kothari.jpg', alt: 'Neha Kothari' },
  { src: '/images/executive-director-hero.jpg', alt: 'Executive Director' },
  { src: '/images/peers-avatars/rajesh-shah.jpg', alt: 'Rajesh Shah' },
  { src: '/images/conclave.png', alt: 'Peers Conclave' },
  { src: '/images/leadership-climbers-hero.jpg', alt: 'Leaders Climbing' },
]

const ROW_2_IMAGES = [
  { src: '/images/peers-avatars/priya-desai.jpg', alt: 'Priya Desai' },
  { src: '/images/circle-founder-hero.jpg', alt: 'Circle Founder Host' },
  { src: '/images/peers-avatars/anand-sharma.jpg', alt: 'Anand Sharma' },
  { src: '/images/who-we-are-impact.jpg', alt: 'Peer Impact' },
  { src: '/images/peers-avatars/fatima-khan.jpg', alt: 'Fatima Khan' },
  { src: '/images/hot-seat.png', alt: 'Hot Seat Session' },
  { src: '/images/peers-avatars/vikram-patel.jpg', alt: 'Vikram Patel' },
  { src: '/images/leadership-entrepreneurs-meeting.jpg', alt: 'Entrepreneurs Meeting' },
  { src: '/images/peers-avatars/pradeep-joshi.jpg', alt: 'Pradeep Joshi' },
  { src: '/images/circle-director-hero.jpg', alt: 'Circle Director' },
]

const ROW_3_IMAGES = [
  { src: '/images/who-we-are-inner-board.jpg', alt: 'Advisory Board' },
  { src: '/images/story-amit-sandeep.jpg', alt: 'Peer Collaboration Story' },
  { src: '/images/story-jignesh-rohit.jpg', alt: 'Peer Partnership Story' },
  { src: '/images/story-neha-simran.jpg', alt: 'Entrepreneurs Story' },
  { src: '/images/story-priya-karan.jpg', alt: 'Collaboration Story' },
  { src: '/images/give-first-card.jpg', alt: 'Give First Culture' },
  { src: '/images/who-we-are-boardroom.jpg', alt: 'Boardroom Session' },
  { src: '/images/executive-director-conclave.jpg', alt: 'Executive Director Conclave' },
  { src: '/images/circle-roundtable-topdown.jpg', alt: 'Roundtable Meeting' },
  { src: '/images/who-we-are-mountain.jpg', alt: 'Summit Milestone' },
]

export function MeditationsSection() {
  return (
    <section className="fd-med-menu" id="fd-med-menu" aria-label="Built and led by entrepreneurs">
      <div className="fd-med-menu__inner">
        <p className="fd-med-menu__eyebrow" data-fd-rise="0">
          LEADERSHIP
        </p>
        <h2 className="fd-med-menu__headline" data-fd-rise="80">
          Built and led by entrepreneurs.
        </h2>
        <p className="fd-med-menu__body" data-fd-rise="160">
          Peers Global is carried forward by its own Peers. Circle Founders, Circle Directors,
          Industry Directors, Regional Executive Directors and Global Advisors — every one of them a
          business owner who chose to build something beyond their own company.
        </p>
        <p className="fd-med-menu__subbody" data-fd-rise="200">
          Leadership here follows contribution. Peers who give the most are the ones who lead.
        </p>
        <div className="fd-med-menu__cta" data-fd-rise="240">
          <Link className="fd-med-menu__btn" href="/leadership" aria-label="Explore Leadership">
            Explore Leadership
          </Link>
          <Link
            className="fd-med-menu__btn fd-med-menu__btn--secondary"
            href="/start-a-circle"
            aria-label="Start a Circle"
          >
            Start a Circle
          </Link>
        </div>
      </div>

      <div className="fd-med-menu__rows">
        {/* Row 1 */}
        <div className="fd-med-menu__row">
          {[0, 1, 2, 3].map((copyIndex) => (
            <div
              key={`r1-strip-${copyIndex}`}
              className="fd-med-menu__strip"
              aria-hidden={copyIndex > 0 ? 'true' : undefined}
            >
              {ROW_1_IMAGES.map((img, i) => (
                <img
                  key={`r1-${copyIndex}-${i}`}
                  src={img.src}
                  alt={copyIndex === 0 ? img.alt : ''}
                  width="126"
                  height="126"
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          ))}
        </div>

        {/* Row 2 (reverse) */}
        <div className="fd-med-menu__row fd-med-menu__row--rev">
          {[0, 1, 2, 3].map((copyIndex) => (
            <div
              key={`r2-strip-${copyIndex}`}
              className="fd-med-menu__strip"
              aria-hidden={copyIndex > 0 ? 'true' : undefined}
            >
              {ROW_2_IMAGES.map((img, i) => (
                <img
                  key={`r2-${copyIndex}-${i}`}
                  src={img.src}
                  alt={copyIndex === 0 ? img.alt : ''}
                  width="126"
                  height="126"
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          ))}
        </div>

        {/* Row 3 (alternate speed) */}
        <div className="fd-med-menu__row fd-med-menu__row--alt">
          {[0, 1, 2, 3].map((copyIndex) => (
            <div
              key={`r3-strip-${copyIndex}`}
              className="fd-med-menu__strip"
              aria-hidden={copyIndex > 0 ? 'true' : undefined}
            >
              {ROW_3_IMAGES.map((img, i) => (
                <img
                  key={`r3-${copyIndex}-${i}`}
                  src={img.src}
                  alt={copyIndex === 0 ? img.alt : ''}
                  width="126"
                  height="126"
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
