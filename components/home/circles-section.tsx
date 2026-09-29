'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowUpRight, Sparkles, Users, MapPin } from 'lucide-react'
import { Card, Cta, Eyebrow, SectionHead, Tag } from '@/components/site/ui'
import { INDUSTRY_CIRCLES, PURPOSE_CIRCLES } from '@/lib/data/circles'

export function CirclesSection() {
  // Combine all circles for dual infinite scrolling rows
  const row1 = [...INDUSTRY_CIRCLES, ...INDUSTRY_CIRCLES]
  const row2 = [...PURPOSE_CIRCLES, ...PURPOSE_CIRCLES]

  return (
    <section className="section border-b border-[var(--border)] overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background py-24">
      <div className="shell flex flex-col gap-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHead
            eyebrow="19 Circles"
            title="Ten industry rooms. Nine built around a purpose."
            lede="Industry Circles put non-competing operators from one sector in the same room. Purpose-led Circles cut across sectors around a shared moment — scaling, succession, a first raise."
          />
          <div className="shrink-0 self-start md:self-auto">
            <Link
              href="/circles"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold text-white bg-[#1E4ED8] shadow-[0_4px_14px_rgba(30,78,216,0.30)] transition-all duration-200 hover:bg-[#1a42c0] hover:-translate-y-[2px] hover:shadow-[0_8px_22px_rgba(30,78,216,0.40)] active:scale-[0.97]"
            >
              <Sparkles className="size-4 text-white" />
              Browse all 19 Circles
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Infinite Ticker Marquee Row 1 — Moving Left */}
      <div className="mt-10 relative w-full overflow-hidden mask-gradient-x py-3">
        {/* Continuous Left Scroll Track */}
        <div className="flex gap-5 w-max animate-marquee hover:[animation-play-state:paused]">
          {row1.map((c, i) => (
            <Link
              key={`${c.slug}-${i}`}
              href={`/circles/${c.slug}`}
              className="group relative flex w-80 shrink-0 flex-col gap-3 rounded-full border border-[var(--border)] bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-primary/40"
            >
              <div className="flex items-center justify-between">
                <Tag tone="blue" className="px-2.5 py-1 text-[11px] font-semibold">
                  Industry Circle
                </Tag>
                {c.seatsOpen > 0 ? (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    <span className="size-1.5 rounded-full bg-emerald-500 animate-ping" />
                    {c.seatsOpen} seats open
                  </span>
                ) : (
                  <Tag tone="neutral">Waitlist</Tag>
                )}
              </div>

              <div>
                <h3 className="display text-xl font-bold text-[var(--ink)] group-hover:text-primary transition-colors flex items-center justify-between">
                  {c.name}
                  <ArrowUpRight className="size-4 text-muted-foreground opacity-60 group-hover:opacity-100 group-hover:text-primary transition-colors" />
                </h3>
              </div>

              <div className="mt-auto flex items-center justify-between border-t border-[var(--border)]/60 pt-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Users className="size-3.5 text-primary" /> {c.members} members
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="size-3.5 text-muted-foreground" /> {c.cities.length} cities
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Infinite Ticker Marquee Row 2 — Moving Right */}
      <div className="mt-4 relative w-full overflow-hidden mask-gradient-x py-3">
        {/* Continuous Right Scroll Track */}
        <div className="flex gap-5 w-max animate-marquee-reverse hover:[animation-play-state:paused]">
          {row2.map((c, i) => (
            <Link
              key={`${c.slug}-${i}`}
              href={`/circles/${c.slug}`}
              className="group relative flex w-80 shrink-0 flex-col gap-3 rounded-full border border-[var(--border)] bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-gold/50"
            >
              <div className="flex items-center justify-between">
                <Tag tone="gold" className="px-2.5 py-1 text-[11px] font-semibold">
                  Purpose-led Circle
                </Tag>
                {c.seatsOpen > 0 ? (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-600 dark:text-amber-400">
                    <span className="size-1.5 rounded-full bg-amber-500 animate-ping" />
                    {c.seatsOpen} seats open
                  </span>
                ) : (
                  <Tag tone="neutral">Waitlist</Tag>
                )}
              </div>

              <div>
                <h3 className="display text-xl font-bold text-[var(--ink)] group-hover:text-amber-600 transition-colors flex items-center justify-between">
                  {c.name}
                  <ArrowUpRight className="size-4 text-muted-foreground opacity-60 group-hover:opacity-100 group-hover:text-amber-600 transition-colors" />
                </h3>
              </div>

              <div className="mt-auto flex items-center justify-between border-t border-[var(--border)]/60 pt-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Users className="size-3.5 text-amber-600" /> {c.members} members
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="size-3.5 text-muted-foreground" /> {c.cities.length} cities
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
