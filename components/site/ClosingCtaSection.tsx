import Link from 'next/link'
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
  eyebrow = 'Final Call',
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

  return (
    <section className={`relative overflow-hidden bg-gradient-to-r from-[#040E24] via-[#061836] to-[#0A2558] border-t border-slate-800 py-10 sm:py-14 lg:py-16 text-white ${className}`}>
      {/* Subtle geometric orbital line art in top-right background */}
      <div className="absolute -right-16 -top-20 bottom-0 pointer-events-none w-[420px] sm:w-[560px] lg:w-[680px] opacity-25 overflow-hidden flex items-center justify-center">
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

      <div className="shell relative z-10 flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
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
