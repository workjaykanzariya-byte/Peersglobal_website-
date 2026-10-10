'use client'

import React, { useId } from 'react'
import { cn } from '@/lib/utils'

export interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  innerClassName?: string
  gradientId?: string
  as?: React.ElementType
  tabIndex?: number
  role?: string
}

/**
 * GlowCard Component
 * Reusable card with dynamic animated SVG border trace and brand glow elevation on hover.
 * Inspired by the Peers Global brand gradient: #1D4ED8 (Blue) -> #6366F1 (Indigo) -> #E11D48 (Rose/Pink).
 */
export const GlowCard = React.forwardRef<HTMLDivElement, GlowCardProps>(
  function GlowCard(
    {
      children,
      className,
      innerClassName,
      gradientId: customGradientId,
      as: Component = 'div',
      tabIndex = 0,
      role = 'article',
      style,
      ...rest
    },
    ref
  ) {
    const rawId = useId()
    const safeId = rawId.replace(/[^a-zA-Z0-9-_]/g, '')
    const gradientId = customGradientId || `glowCardStroke-${safeId}`

    return (
      <Component
        ref={ref}
        className={cn('animated-glow-card group', className)}
        tabIndex={tabIndex}
        role={role}
        style={style}
        {...rest}
      >
        <svg
          className="animated-border-svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1D4ED8" />
              <stop offset="50%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#E11D48" />
            </linearGradient>
          </defs>
          <path
            className="animated-border-path"
            style={{ stroke: `url(#${gradientId})` }}
            d="M 0.8 6 Q 0.8 0.8 6 0.8 L 94 0.8 Q 99.2 0.8 99.2 6 L 99.2 94 Q 99.2 99.2 94 99.2 L 6 99.2 Q 0.8 99.2 0.8 94 Z"
          />
        </svg>
        <div className={cn('animated-glow-card-inner', innerClassName)}>
          {children}
        </div>
      </Component>
    )
  }
)
