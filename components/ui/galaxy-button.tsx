'use client'

import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export interface GalaxyButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  type?: 'button' | 'submit' | 'reset' | string
  href?: string
  target?: string
  rel?: string
  size?: 'sm' | 'default' | 'lg'
  variant?: 'primary' | 'transparent' | 'transparent-light' | 'gradient'
  icon?: React.ReactNode | boolean
  children: React.ReactNode
  className?: string
}

/* Default stylish curved arrow SVG provided by design */
export function GalaxyArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn('galaxy-btn__icon', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      aria-hidden="true"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M13 14h-2a8.999 8.999 0 0 0-7.968 4.81A10.136 10.136 0 0 1 3 18C3 12.477 7.477 8 13 8V3l10 8-10 8v-5z"
        fill="currentColor"
      />
    </svg>
  )
}

export const GalaxyButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  GalaxyButtonProps
>(function GalaxyButton(
  {
    href,
    target,
    rel,
    size = 'default',
    variant = 'primary',
    icon = true,
    children,
    className,
    disabled,
    onClick,
    type = 'button',
    ...rest
  },
  ref
) {
  const sizeClass =
    size === 'sm'
      ? 'galaxy-btn--sm'
      : size === 'lg'
      ? 'galaxy-btn--lg'
      : ''

  const variantClass =
    variant === 'transparent'
      ? 'galaxy-btn--transparent'
      : variant === 'transparent-light'
      ? 'galaxy-btn--transparent-light'
      : variant === 'gradient'
      ? 'galaxy-btn--gradient'
      : ''

  const content = (
    <>
      <span className="galaxy-btn__content">
        <span className="galaxy-btn__text">{children}</span>
        {icon === true && <GalaxyArrowIcon />}
        {React.isValidElement(icon) && (
          <span className="galaxy-btn__icon flex items-center justify-center">
            {icon}
          </span>
        )}
      </span>
      <span className="galaxy-btn__glow" aria-hidden="true" />
      <span className="galaxy-btn__stars" aria-hidden="true" />
    </>
  )

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        onClick={onClick as any}
        className={cn('galaxy-btn', sizeClass, variantClass, className)}
        ref={ref as React.Ref<HTMLAnchorElement>}
        {...(rest as any)}
      >
        {content}
      </Link>
    )
  }

  return (
    <button
      type={(type === 'submit' || type === 'reset') ? type : 'button'}
      disabled={disabled}
      onClick={onClick}
      className={cn('galaxy-btn', sizeClass, variantClass, className)}
      ref={ref as React.Ref<HTMLButtonElement>}
      {...rest}
    >
      {content}
    </button>
  )
})

GalaxyButton.displayName = 'GalaxyButton'

export default GalaxyButton
