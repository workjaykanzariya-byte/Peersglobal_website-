'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Sparkles, MapPin, Building2 } from 'lucide-react'
import { Cta, Tag } from '@/components/site/ui'
import { FEATURED_STORIES } from '@/lib/data/stories'

export function StoriesSection() {
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
      className="section border-b border-[var(--border)] bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden py-24"
    >
      <div className="shell flex flex-col gap-14">
        {/* Concise Header with Punchy Title & Perfect Alignment */}
        <div
          className={`flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 self-start">
              <Sparkles className="size-3.5 text-[#D4AF37] animate-spin" style={{ animationDuration: '5s' }} />
              Impact Stories
            </div>
            <h2 className="display text-2xl sm:text-3xl lg:text-4xl font-semibold text-[var(--ink)] tracking-tight leading-snug">
              Real Member Impact
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Every story carries a verified source line. If we cannot tell you where the figure came from, it does not go on the page.
            </p>
          </div>

          <div className="shrink-0">
            <Cta
              href="/stories"
              variant="outline"
              className="rounded-full px-6 py-3 font-semibold shadow-sm hover:border-primary hover:text-primary transition-all"
            >
              Explore all member stories →
            </Cta>
          </div>
        </div>

        {/* 3 Clean Story Cards Grid (Static Numbers & Fixed Overlay Alignment) */}
        <ul className="grid gap-8 md:grid-cols-3">
          {FEATURED_STORIES.map((s, index) => {
            const delayClasses = ['delay-0', 'delay-150', 'delay-300']
            return (
              <li
                key={s.slug}
                className={`transition-all duration-700 ${delayClasses[index]} ${
                  isVisible
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-12 scale-95'
                }`}
              >
                <div className="group relative flex h-full flex-col justify-between p-8 rounded-3xl border border-[var(--border)] bg-card shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/50 overflow-hidden">
                  
                  {/* Top Metric Header (Static Number Display - No Counter Jump) */}
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)]/60 pb-5 mb-5">
                      <span className="display text-3xl sm:text-4xl font-semibold text-[#0067b8] group-hover:text-blue-600 transition-colors">
                        {s.metric.value}
                      </span>
                      <Tag tone="blue" className="px-2.5 py-1 text-[11px] font-semibold max-w-[180px] text-right truncate">
                        {s.metric.label}
                      </Tag>
                    </div>

                    {/* Member Quote Pull */}
                    <p className="text-base leading-relaxed text-[var(--ink)] font-normal relative z-10">
                      {s.pull}
                    </p>
                  </div>

                  {/* Member Footer Profile */}
                  <div className="mt-8 border-t border-[var(--border)]/60 pt-5 flex flex-col gap-3 relative z-10">
                    <div>
                      <h4 className="text-base font-semibold text-[var(--ink)]">{s.name}</h4>
                      <p className="text-xs text-muted-foreground flex flex-wrap items-center gap-1.5 mt-0.5">
                        <span className="flex items-center gap-1">
                          <Building2 className="size-3.5 text-primary shrink-0" />
                          {s.company}
                        </span>
                        <span className="text-muted-foreground/40">•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="size-3.5 text-muted-foreground shrink-0" />
                          {s.city}
                        </span>
                      </p>
                    </div>

                    <Link
                      href={`/stories/${s.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:text-blue-700 transition-colors mt-1"
                    >
                      Read full verified story
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
