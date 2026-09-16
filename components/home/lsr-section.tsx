'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Card, Cta, SectionHead, Tag } from '@/components/site/ui'
import { LSR } from '@/lib/data/content'

export function LsrSection() {
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
          setIsVisible(false) // Re-trigger on scroll back into view
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="section border-b border-[var(--border)] overflow-hidden py-16">
      <div className="shell flex flex-col gap-8">
        <div
          className={`grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <SectionHead
            eyebrow="The LSR Growth Model"
            title="Three things every business needs. One model that delivers all three."
            lede="Most communities give you one. A circle gives you all three, every month. Learning keeps you sharp. Sales keeps you growing. Resources keep you moving. Miss one and the other two slow down."
          />
          <div className="flex lg:justify-end">
            <Cta
              href="/events"
              variant="primary"
              size="lg"
              className="shadow-lg shadow-blue-600/25 hover:scale-105 transition-transform"
            >
              Sit in on a meeting →
            </Cta>
          </div>
        </div>

        {/* Redesigned LSR Cards */}
        <ol className="grid gap-6 md:grid-cols-3 items-stretch">
          {LSR.map((item, index) => {
            const delayClasses = [
              'delay-[100ms]',
              'delay-[300ms]',
              'delay-[500ms]',
            ]
            const stepNumbers = ['Act I', 'Act II', 'Act III']
            return (
              <li
                key={item.letter}
                className={`transition-all duration-700 transform ${delayClasses[index]} ${
                  isVisible
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-12 scale-95'
                }`}
              >
                <Card className="group relative flex flex-col justify-between h-full p-7 border border-[var(--border)] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-3xl bg-gradient-to-b from-card via-card to-primary/5 overflow-hidden">
                  {/* Glowing background halo on hover */}
                  <div className="absolute -right-12 -top-12 size-40 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:bg-primary/25 group-hover:scale-125" />

                  {/* Top Row: Icon/Letter Badge + Act & Minutes Badges */}
                  <div className="flex items-center justify-between gap-3 mb-6 relative z-10">
                    <div className="flex items-center gap-3">
                      {/* Styled Circular Letter Badge */}
                      <span className="flex size-14 items-center justify-center rounded-2xl bg-primary text-white text-3xl font-extrabold shadow-lg shadow-blue-600/30 group-hover:scale-110 group-hover:bg-blue-700 transition-transform">
                        {item.letter}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          {stepNumbers[index]}
                        </span>
                        <h3 className="display text-xl font-bold text-[var(--ink)]">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <Tag
                      tone="blue"
                      className="px-3 py-1.5 text-xs font-bold bg-blue-50 text-primary border border-blue-200/80 rounded-full shrink-0 group-hover:bg-primary group-hover:text-white transition-colors"
                    >
                      {item.minutes}
                    </Tag>
                  </div>

                  {/* Description Body */}
                  <p className="text-sm leading-relaxed text-muted-foreground relative z-10">
                    {item.body}
                  </p>

                  {/* Bottom Act Progress Indicator Bar */}
                  <div className="mt-6 pt-4 border-t border-[var(--border)]/60 flex items-center justify-between text-xs font-medium text-muted-foreground relative z-10">
                    <span>Act Duration</span>
                    <span className="font-bold text-primary">{item.minutes}</span>
                  </div>
                </Card>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
