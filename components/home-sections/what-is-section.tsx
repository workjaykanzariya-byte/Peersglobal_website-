'use client'

import React from 'react'

export function WhatIsSection() {
  return (
    <section className="fd-what-is-mindvalley" id="fd-what-is-mindvalley">
      <div className="fd-what-is-mindvalley__inner">
        <div className="fd-what-is-mindvalley__intro">
          {/* Eyebrow & Titles */}
          <div className="fd-what-is-mindvalley__titles">
            <p className="fd-what-is-mindvalley__eyebrow brand-gradient-text" data-fd-rise="0">
              WHAT IS PEERS GLOBAL?
            </p>

            <div className="fd-what-is-mindvalley__copy">
              <h2 className="fd-what-is-mindvalley__headline" data-fd-rise="80">
                <span>More than a network.</span>{' '}
                <span>A way of growing together.</span>
              </h2>
              <div className="space-y-3 max-w-3xl mx-auto">
                <p className="fd-what-is-mindvalley__paragraph" data-fd-rise="160">
                  PEERS GLOBAL is built around a simple belief: Entrepreneurs grow differently when they stop building in isolation. It brings entrepreneurs into structured relationships where business experience, knowledge, introductions, problem-solving, support and contribution can move between people.
                </p>
                <p className="text-sm sm:text-base text-slate-600 font-medium" data-fd-rise="200">
                  The structure is designed around three dimensions of entrepreneurial growth:
                </p>
              </div>
            </div>
          </div>

          {/* 3 Core Pillars (LSR) matching layout */}
          <div className="fd-what-is-mindvalley__stats !gap-8 md:!gap-12 lg:!gap-16">
            {/* Pillar 1 - Learning */}
            <div className="fd-what-is-mindvalley__stat max-w-[340px] text-center" data-fd-rise="240">
              <h3 className="fd-what-is-mindvalley__stat-value !text-2xl sm:!text-[28px] !leading-tight font-bold">
                L — Learning
              </h3>
              <p className="fd-what-is-mindvalley__stat-label !text-sm text-slate-600 mt-2 font-normal leading-relaxed">
                Growth through knowledge, mentorship, and shared experiences.
              </p>
            </div>

            {/* Pillar 2 - Sales */}
            <div className="fd-what-is-mindvalley__stat max-w-[340px] text-center" data-fd-rise="300">
              <h3 className="fd-what-is-mindvalley__stat-value !text-2xl sm:!text-[28px] !leading-tight font-bold">
                S — Sales
              </h3>
              <p className="fd-what-is-mindvalley__stat-label !text-sm text-slate-600 mt-2 font-normal leading-relaxed">
                Real business through referrals, networking, and collaborations.
              </p>
            </div>

            {/* Pillar 3 - Resources */}
            <div className="fd-what-is-mindvalley__stat max-w-[340px] text-center" data-fd-rise="360">
              <h3 className="fd-what-is-mindvalley__stat-value !text-2xl sm:!text-[28px] !leading-tight font-bold">
                R — Resources
              </h3>
              <p className="fd-what-is-mindvalley__stat-label !text-sm text-slate-600 mt-2 font-normal leading-relaxed">
                Tools, media, and platforms to support and scale your business.
              </p>
            </div>
          </div>

          {/* Our Core Belief */}
          <div className="text-center mt-2 max-w-xl mx-auto" data-fd-rise="400">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-1">
              Our Core Belief
            </p>
            <p className="text-base sm:text-lg font-serif italic text-slate-800 font-medium">
              &ldquo;We believe with confidence that any business can grow - when it focuses on Learning, Sales, and Resources.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Cinematic Showcase Video Player - 1080p High Quality */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="relative aspect-[16/9] w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-slate-950 border border-slate-200/80">
          <video
            src="/videos/healthcare-catalyst-1080p.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover block"
          >
            <source src="/videos/healthcare-catalyst-1080p.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  )
}
