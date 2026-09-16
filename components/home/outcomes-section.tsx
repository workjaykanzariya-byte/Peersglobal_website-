'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ShieldCheck, Award, TrendingUp, Users, CheckCircle2 } from 'lucide-react'
import { SectionHead } from '@/components/site/ui'
import { AnimatedNumber } from '@/components/site/animated-number'
import { OUTCOME_STATS, SITE } from '@/lib/data/site'

export function OutcomesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative section bg-[#0b1b3a] text-white overflow-hidden py-28"
    >
      {/* Real Group Photo as Full-Section High Contrast Background Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/outcomes-peers-group.png"
          alt="Peers Global Real Community Background"
          fill
          sizes="100vw"
          className="object-cover opacity-75 filter contrast-110 saturate-110"
          priority
        />
        {/* Lighter Gradient Overlay so the community photo is much more vibrant and visible */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(11,27,58,0.78) 0%, rgba(11,27,58,0.50) 50%, rgba(11,27,58,0.78) 100%)',
          }}
          aria-hidden
        />
      </div>

      {/* Foreground Content */}
      <div className="shell relative z-10 grid gap-12 lg:grid-cols-12 items-center">
        {/* Left Column: Title & Lede */}
        <div
          className={`lg:col-span-5 flex flex-col gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <SectionHead
            eyebrow="Impact & Recognition"
            tone="onDark"
            title="One action. One life changed. That is how we count."
            lede="We measure this community by what members give each other, not by how many members we have. So we count lives. One action, one life impacted — recorded, recognised and celebrated."
          />

          <div className="flex flex-col gap-3 pt-2 text-sm text-white/80">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="size-5 text-[#D4AF37]" />
              <span>A referral is not a transaction — it is a family that gets paid this month.</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="size-5 text-[#D4AF37]" />
              <span>A mentorship is a founder who avoids a mistake that costs two years.</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="size-5 text-[#D4AF37]" />
              <span>Recorded and recognised through the Life Impact Score in Unity.</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs text-white/50 border-t border-white/10 pt-4 mt-2">
            <ShieldCheck className="size-4 text-[#D4AF37]" />
            <span>{SITE.statsAsOf}</span>
          </div>
        </div>

        {/* Right Column: 4 Clean Glassmorphic Metric Cards Grid */}
        <div
          className={`lg:col-span-7 grid gap-6 sm:grid-cols-2 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
          }`}
        >
          {OUTCOME_STATS.map((s, index) => (
            <div
              key={s.label}
              className="group relative flex flex-col justify-between p-8 rounded-3xl border border-white/20 bg-black/60 backdrop-blur-2xl shadow-2xl transition-all duration-300 hover:border-[#D4AF37] hover:bg-black/80 hover:-translate-y-1.5"
            >
              {/* Gold Top Glow Line */}
              <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <dt className="display text-3xl sm:text-4xl font-semibold text-[#D4AF37] tracking-tight mb-2">
                  <AnimatedNumber value={s.value} />
                </dt>
                <dd className="text-sm sm:text-base font-medium text-white mt-1">{s.label}</dd>
              </div>

              <dd className="text-xs text-white/70 mt-4 border-t border-white/10 pt-3">
                {s.note}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
