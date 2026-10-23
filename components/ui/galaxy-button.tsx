'use client'

import React from 'react'
import Link from 'next/link'
import { Smartphone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { handleSmartAppDownload, getSmartAppUrl } from '@/lib/utils/app-link'
import { SITE } from '@/lib/data/site'

export interface GalaxyButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  type?: 'button' | 'submit' | 'reset' | string
  href?: string
  target?: string
  rel?: string
  size?: 'sm' | 'default' | 'md' | 'lg' | 'small'
  variant?: 'primary' | 'secondary' | 'transparent' | 'transparent-light' | 'gradient' | 'white-gradient' | 'gradient-white' | 'default'
  icon?: React.ReactNode | boolean
  showIcon?: boolean
  children?: React.ReactNode
  className?: string
  'data-download'?: boolean
}

function extractText(node: React.ReactNode): string {
  if (typeof node === 'string') return node
  if (typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(extractText).join(' ')
  if (React.isValidElement(node) && node.props && (node.props as any).children) {
    return extractText((node.props as any).children)
  }
  return ''
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
      <path
        d="M13 14h-2a8.999 8.999 0 0 0-7.968 4.81A10.136 10.136 0 0 1 3 18C3 12.477 7.477 8 13 8V3l10 8-10 8v-5z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  )
}

/* Sleek Smartphone icon for Download Unity App */
export function GalaxySmartphoneIcon({ className }: { className?: string }) {
  return (
    <span className="galaxy-btn__icon inline-flex items-center justify-center shrink-0">
      <Smartphone
        className={cn('lucide shrink-0 size-4.5 text-white', className)}
        stroke="#ffffff"
        fill="none"
        strokeWidth={2.2}
        style={{
          width: '18px',
          height: '18px',
          stroke: '#ffffff',
          fill: 'none',
          strokeWidth: 2.2,
          display: 'inline-block',
          verticalAlign: 'middle',
        }}
        aria-hidden="true"
      />
    </span>
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
    showIcon,
    children,
    className,
    disabled,
    onClick,
    type = 'button',
    ...rest
  },
  ref
) {
  const effectiveIcon = showIcon === false ? false : icon

  const sizeClass =
    size === 'sm' || size === 'small'
      ? 'galaxy-btn--sm'
      : size === 'lg'
        ? 'galaxy-btn--lg'
        : ''

  const variantClass =
    variant === 'transparent' || variant === 'secondary' || variant === 'white-gradient'
      ? 'galaxy-btn--white-gradient'
      : variant === 'transparent-light'
        ? 'galaxy-btn--transparent-light'
        : variant === 'gradient'
          ? 'galaxy-btn--gradient'
          : 'galaxy-btn--gradient-white'

  // Smart download link detection:
  // If the button text mentions download unity/app/peers or links to /download,
  // automatically wire it to the platform-specific App Store (iOS) or Play Store (Android),
  // EXCEPT when an explicit store link (App Store or Google Play) was specifically provided.
  const textContent = extractText(children)
  const isExplicitStoreLink =
    typeof href === 'string' &&
    (href.includes('apps.apple.com') || href.includes('play.google.com'))

  const isSmartDownload =
    !isExplicitStoreLink &&
    ((/download/i.test(textContent) && /unity|app|peers/i.test(textContent)) ||
      href === '/download' ||
      Boolean((rest as any)['data-download']))

  const resolvedHref = isSmartDownload && (!href || href === '/unity' || href === 'https://unity.peersglobal.com' || href === '/download')
    ? (typeof window !== 'undefined' ? getSmartAppUrl(SITE.playStoreUrl) : SITE.playStoreUrl)
    : href

  const resolvedTarget = isSmartDownload || isExplicitStoreLink ? (target ?? '_blank') : target
  const resolvedRel = isSmartDownload || isExplicitStoreLink ? (rel ?? 'noopener noreferrer') : rel

  const handleClick = (e: any) => {
    if (onClick) {
      onClick(e)
    }
    if (isSmartDownload) {
      handleSmartAppDownload(e)
    }
  }

  const content = (
    <>
      <span className="galaxy-btn__content">
        <span className="galaxy-btn__text">{children}</span>
        {effectiveIcon === true && <GalaxyArrowIcon />}
        {React.isValidElement(effectiveIcon) && (
          <span className="galaxy-btn__icon flex items-center justify-center">
            {effectiveIcon}
          </span>
        )}
      </span>
      <span className="galaxy-btn__glow" aria-hidden="true" />
      <span className="galaxy-btn__stars" aria-hidden="true" />
    </>
  )

  if (resolvedHref) {
    return (
      <Link
        href={resolvedHref}
        target={resolvedTarget}
        rel={resolvedRel}
        onClick={handleClick as any}
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
      onClick={handleClick}
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
