'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Sparkles, Check } from 'lucide-react'
import { Card, Cta, SectionHead, Tag } from '@/components/site/ui'
import { TIERS } from '@/lib/data/membership'

export function MembershipSection() {
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
      className="section border-b border-[var(--border)] overflow-hidden py-24"
    >
      <div className="shell flex flex-col gap-12">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <SectionHead
            eyebrow="Membership"
            title="Three ways in. One of them is free."
            lede="Global Membership is the base layer of the network. Circle Membership adds a governed seat with category exclusivity in your city cohort."
          />
        </div>

        <ul className="grid gap-8 lg:grid-cols-3 items-stretch">
          {TIERS.map((t, index) => {
            const isFeatured = t.featured
            return (
              <li key={t.id} className="flex flex-col h-full">
                <Card
                  className={`group relative flex flex-col justify-between h-full p-8 transition-all duration-300 rounded-3xl ${
                    isFeatured
                      ? 'border-2 border-primary shadow-2xl bg-card ring-4 ring-primary/15 scale-102 lg:-translate-y-2'
                      : 'border border-[var(--border)] shadow-md hover:shadow-xl bg-card'
                  }`}
                >
                  {/* Top Header Row */}
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="display text-2xl font-bold text-[var(--ink)]">{t.name}</h3>
                        <p className="text-xs text-muted-foreground mt-0.5">{t.positioning}</p>
                      </div>

                      {/* Continuous Pulsing/Blinking Glowing 'Most Committed' Tag */}
                      {isFeatured ? (
                        <div className="relative shrink-0">
                          {/* Outer Pulsing Glow Effect */}
                          <div className="absolute -inset-1 rounded-full bg-[#D4AF37]/50 blur-md animate-ping opacity-75" />
                          <span className="relative inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#0b1b3a] bg-gradient-to-r from-[#D4AF37] via-amber-300 to-[#D4AF37] shadow-lg animate-pulse">
                            <Sparkles className="size-3.5 text-[#0b1b3a]" />
                            Most Committed
                          </span>
                        </div>
                      ) : null}
                    </div>

                    {/* Price & Billing */}
                    <div className="flex flex-col gap-0.5 border-b border-[var(--border)]/60 pb-5 mb-5">
                      <span className="display text-4xl font-extrabold text-primary">{t.price}</span>
                      <span className="text-xs font-medium text-muted-foreground">{t.priceNote}</span>
                    </div>

                    <p className="text-sm leading-relaxed text-muted-foreground mb-6">{t.summary}</p>

                    {/* Feature Checklist */}
                    <ul className="flex flex-col gap-3 border-t border-[var(--border)]/60 pt-5">
                      {t.includes.slice(0, 4).map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--ink)] font-medium">
                          <Check className="size-4 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8 pt-4">
                    <Cta
                      href={t.cta.href}
                      variant={isFeatured ? 'primary' : 'outline'}
                      size="lg"
                      className={`w-full justify-center rounded-xl font-bold ${
                        isFeatured ? 'shadow-xl shadow-blue-600/30' : ''
                      }`}
                    >
                      {t.cta.label}
                    </Cta>
                  </div>
                </Card>
              </li>
            )
          })}
        </ul>

        <div className="flex justify-center pt-2">
          <Cta href="/membership#compare" variant="quiet" className="font-semibold text-primary">
            Compare all three side by side →
          </Cta>
        </div>
      </div>
    </section>
  )
}
