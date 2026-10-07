'use client'

import React from 'react'

export function CaseStudiesSection() {
  return (
    <section className="fd-case-studies">
      <div className="fd-case-studies__band fd-seamless-float">
        <img
          className="fd-case-studies__mobile md:hidden"
          src="https://a.storyblok.com/f/312081/0d3a672cfa/mvcom_hp_stories_mobile.webp/m/780x0/filters:format(webp):quality(80)"
          alt="Case studies collage"
          width="1125"
          height="694"
          loading="lazy"
          decoding="async"
        />

        {/* Center Content Wrapper */}
        <div className="fd-case-studies__wrapper relative z-20">
          <div className="fd-case-studies__title" data-fd-rise="0">
            <p className="fd-case-studies__stat">25,959</p>
            <p className="fd-case-studies__subtitle">Case Studies of Success</p>
          </div>
          <p className="fd-case-studies__body" data-fd-rise="80">
            Mindvalley has some of the highest success rates in the world at transforming our learners.
            Browse case studies and stories of success on{' '}
            <a className="fd-case-studies__link" href="https://stories.mindvalley.com/">
              stories.mindvalley.com
            </a>
            .
          </p>
          <div className="fd-case-studies__cta" data-fd-rise="160">
            <a
              className="fd-case-studies__btn fd-case-studies__btn--neutral"
              href="https://stories.mindvalley.com/"
            >
              Read Our Stories
            </a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Smooth, seamless, unified floating animation on the entire background collage */
        .fd-seamless-float::before {
          display: block !important;
          animation: fdSingleSeamlessFloat 6.5s ease-in-out infinite alternate !important;
          will-change: transform;
        }

        @keyframes fdSingleSeamlessFloat {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
          100% {
            transform: translateY(3px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .fd-seamless-float::before {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  )
}





