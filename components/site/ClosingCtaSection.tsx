'use client'

import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'
import type * as React from 'react'
import { ArrowRight, Download } from 'lucide-react'

export interface ClosingCtaSectionProps {
  eyebrow?: string
  title?: React.ReactNode
  subtitle?: string
  description?: string
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
  secondaryButtonIcon?: React.ReactNode
  tertiaryButtonText?: string
  tertiaryButtonHref?: string
  buttons?: React.ReactNode
  className?: string
}

export function ClosingCtaSection({
  eyebrow = 'FINAL CALL',
  title,
  subtitle = 'Build Your Business. Build Your Relationships. Build Your Circle.',
  description = "Peers Global — World's First Community of Collaboration. Peers are Partners in Business and Friends in Life.",
  primaryButtonText = 'JOIN PEERS GLOBAL',
  primaryButtonHref = '/membership',
  secondaryButtonText = 'DOWNLOAD UNITY APP',
  secondaryButtonHref = 'https://unity.peersglobal.com',
  secondaryButtonIcon,
  tertiaryButtonText,
  tertiaryButtonHref,
  buttons,
  className = '',
}: ClosingCtaSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleMotionChange)

    let animationFrameId: number

    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight || document.documentElement.clientHeight
      
      // Calculate progress from 0 (section entering bottom of screen) to 1 (section fully centered/scrolled)
      const totalDistance = windowHeight + rect.height
      const currentPos = windowHeight - rect.top
      const progress = Math.max(0, Math.min(1, currentPos / (totalDistance * 0.75)))
      
      setScrollProgress(progress)
    }

    const onScroll = () => {
      animationFrameId = requestAnimationFrame(handleScroll)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(animationFrameId)
      mediaQuery.removeEventListener('change', handleMotionChange)
    }
  }, [])

  const defaultTitle = (
    <>
      A community you can belong to, contribute to, grow with, and build relationships{' '}
      <em
        className="not-italic text-[#7DD3FC]"
        style={{ fontFamily: 'var(--font-script, Georgia, serif)', fontStyle: 'italic' }}
      >
        for life.
      </em>
    </>
  )

  const isSecondaryExternal = secondaryButtonHref?.startsWith('http')

  // Calculated scroll-driven animations
  const contentTranslateY = prefersReducedMotion ? 0 : (1 - scrollProgress) * 36
  const contentOpacity = prefersReducedMotion ? 1 : Math.max(0, Math.min(1, scrollProgress * 1.4))
  const orbitTranslateY = prefersReducedMotion ? 0 : (1 - scrollProgress) * -24
  const orbitRotate = prefersReducedMotion ? 0 : (scrollProgress - 0.5) * 6
  const bgParallaxY = prefersReducedMotion ? 0 : (scrollProgress - 0.5) * 20

  return (
    <section
      ref={sectionRef}
      className={`relative isolate overflow-hidden bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] py-14 sm:py-18 lg:py-20 text-white ${className}`}
    >
      {/* Deep celestial radial gradients & luminous aura */}
      <div
        aria-hidden="true"
        style={{
          transform: prefersReducedMotion ? 'none' : `translate3d(0, ${bgParallaxY}px, 0)`,
          transition: 'transform 0.1s linear',
        }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(0,98,210,0.25),transparent_42%),radial-gradient(circle_at_82%_12%,rgba(56,189,248,0.18),transparent_36%),linear-gradient(115deg,#020817_0%,#071a3d_48%,#06132d_100%)]"
      />
      <div
        aria-hidden="true"
        style={{
          transform: prefersReducedMotion ? 'translateY(-50%)' : `translate3d(0, calc(-50% + ${bgParallaxY * 0.8}px), 0)`,
          transition: 'transform 0.1s linear',
        }}
        className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        style={{
          transform: prefersReducedMotion ? 'none' : `translate3d(0, ${bgParallaxY * -0.6}px, 0)`,
          transition: 'transform 0.1s linear',
        }}
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-sky-400/15 blur-3xl"
      />

      {/* Subtle geometric orbital line art with Parallax */}
      <div
        aria-hidden="true"
        style={{
          transform: prefersReducedMotion ? 'none' : `translate3d(0, ${orbitTranslateY}px, 0) rotate(${orbitRotate}deg)`,
          opacity: 0.15 + scrollProgress * 0.25,
          transition: 'transform 0.1s linear, opacity 0.15s ease-out',
          willChange: 'transform, opacity',
        }}
        className="pointer-events-none absolute inset-y-0 right-0 w-[min(58vw,760px)]"
      >
        <svg
          viewBox="0 0 760 520"
          fill="none"
          className="h-full w-full"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M760 40C555 45 405 145 375 310C355 423 265 493 70 520"
            stroke="currentColor"
            strokeWidth="1"
            className="text-blue-300/30"
          />
          <path
            d="M760 120C590 125 470 205 445 335C424 442 335 500 180 520"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="5 8"
            className="text-sky-200/25"
          />
          <path
            d="M760 215C640 220 565 278 540 370C519 446 470 490 390 520"
            stroke="currentColor"
            strokeWidth="1"
            className="text-blue-200/20"
          />
          <circle cx="540" cy="370" r="4" fill="currentColor" className="text-sky-300/60" />
          <circle cx="540" cy="370" r="13" stroke="currentColor" strokeWidth="1" className="text-sky-300/25" />
        </svg>
      </div>

      <div
        style={{
          transform: prefersReducedMotion ? 'none' : `translate3d(0, ${contentTranslateY}px, 0)`,
          opacity: contentOpacity,
          transition: 'transform 0.12s ease-out, opacity 0.15s ease-out',
          willChange: 'transform, opacity',
        }}
        className="shell relative z-10 flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between"
      >
        <div className="flex max-w-3xl flex-col gap-3.5">
          {/* Eyebrow with horizontal dash */}
          {eyebrow && (
            <div className="flex items-center gap-2.5">
              <span className="h-[1.5px] w-6 bg-white/70" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
                {eyebrow}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-normal leading-[1.18] tracking-tight text-white">
            {title || defaultTitle}
          </h2>

          {/* Subheading */}
          {subtitle && (
            <p className="text-base sm:text-lg font-medium text-white/95 mt-1">
              {subtitle}
            </p>
          )}

          {/* Description */}
          {description && (
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex shrink-0 flex-wrap items-center gap-4">
          {buttons ? (
            buttons
          ) : (
            <>
              {primaryButtonText && primaryButtonHref && (
                <Link
                  href={primaryButtonHref}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-[#061836] shadow-md transition-all duration-200 hover:bg-slate-100 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] uppercase"
                >
                  <span>{primaryButtonText}</span>
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1 text-[#061836]" />
                </Link>
              )}

              {secondaryButtonText && secondaryButtonHref && (
                isSecondaryExternal ? (
                  <a
                    href={secondaryButtonHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-white backdrop-blur-xs transition-all duration-200 hover:bg-white/20 hover:border-white active:scale-[0.98] uppercase"
                  >
                    {secondaryButtonIcon ?? <Download aria-hidden className="size-4" />}
                    <span>{secondaryButtonText}</span>
                  </a>
                ) : (
                  <Link
                    href={secondaryButtonHref}
                    className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-white backdrop-blur-xs transition-all duration-200 hover:bg-white/20 hover:border-white active:scale-[0.98] uppercase"
                  >
                    {secondaryButtonIcon}
                    <span>{secondaryButtonText}</span>
                  </Link>
                )
              )}

              {tertiaryButtonText && tertiaryButtonHref && (
                <Link
                  href={tertiaryButtonHref}
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/50 px-7 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-white backdrop-blur-xs transition-all duration-200 hover:bg-white/10 hover:border-white active:scale-[0.98] uppercase"
                >
                  <span>{tertiaryButtonText}</span>
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  )
}

