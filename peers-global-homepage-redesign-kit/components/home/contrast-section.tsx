'use client'

import React, { useEffect, useRef, useState } from 'react'
import { CheckCircle2, XCircle, Sparkles } from 'lucide-react'
import { SectionHead } from '@/components/site/ui'
import { WHY_CONTRAST } from '@/lib/data/content'

export function ContrastSection() {
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
      className="section-sm border-b border-[var(--border)] bg-gradient-to-b from-muted/50 via-background to-muted/30 overflow-hidden py-24"
    >
      <div className="shell flex flex-col gap-14">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <SectionHead
            eyebrow="The difference"
            title="What a governed Circle is, and is not"
            lede="Traditional networking groups offer open chatter. Peers Global operates on structured accountability, exclusivity, and measurable business outcomes."
            align="center"
          />
        </div>

        {/* Side-by-Side Comparison Matrix */}
        <div className="mx-auto w-full max-w-5xl">
          {/* Header Row */}
          <div className="hidden sm:grid sm:grid-cols-2 gap-6 mb-6 px-4">
            <div className="flex items-center gap-2 text-muted-foreground font-semibold text-sm uppercase tracking-wider">
              <XCircle className="size-4 text-red-500" />
              Typical Networking Groups
            </div>
            <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
              <CheckCircle2 className="size-4 text-primary" />
              Peers Global Governed Circle
            </div>
          </div>

          {/* Contrast Rows */}
          <ul className="flex flex-col gap-4">
            {WHY_CONTRAST.map((row, index) => {
              const delay = index * 100
              return (
                <li
                  key={row.us}
                  style={{ transitionDelay: `${delay}ms` }}
                  className={`grid gap-4 sm:grid-cols-2 p-5 rounded-2xl border transition-all duration-500 hover:shadow-xl ${
                    isVisible
                      ? 'opacity-100 translate-y-0 scale-100'
                      : 'opacity-0 translate-y-8 scale-95'
                  } bg-card border-[var(--border)] hover:border-primary/40`}
                >
                  {/* Left Column: Them (Red/Strike) */}
                  <div className="flex items-center gap-3.5 p-3 rounded-xl bg-red-500/5 border border-red-500/10 text-muted-foreground">
                    <XCircle className="size-5 shrink-0 text-red-500/70" />
                    <span className="text-sm sm:text-base font-medium line-through decoration-red-500/60 decoration-2">
                      {row.them}
                    </span>
                  </div>

                  {/* Right Column: Us (Blue/Check/Glow) */}
                  <div className="flex items-center gap-3.5 p-3 rounded-xl bg-primary/10 border border-primary/20 text-foreground font-semibold shadow-sm">
                    <CheckCircle2 className="size-5 shrink-0 text-primary animate-pulse" />
                    <span className="text-sm sm:text-base text-[var(--ink)] flex items-center justify-between w-full">
                      {row.us}
                      <Sparkles className="size-4 text-[#D4AF37] opacity-80" />
                    </span>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
