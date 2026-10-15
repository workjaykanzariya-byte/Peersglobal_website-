'use client'

import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { getSmartAppUrl, handleSmartAppDownload } from '@/lib/utils/app-link'
import { SITE } from '@/lib/data/site'
import { Smartphone } from 'lucide-react'

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
    children,
    className,
    disabled,
    onClick,
    type = 'button',
    ...rest
  },
  ref
) {
  // Check if this button is specifically for App Store or Google Play
  const isExplicitAppStore =
    (typeof href === 'string' && href.includes('apps.apple.com')) ||
    (typeof children === 'string' &&
      children.toLowerCase().includes('app store') &&
      !children.toLowerCase().includes('google'))

  const isExplicitPlayStore =
    (typeof href === 'string' && href.includes('play.google.com')) ||
    (typeof children === 'string' &&
      (children.toLowerCase().includes('google play') ||
        children.toLowerCase().includes('play store')))

  // Check if this button is a general smart Download Unity App button
  const isUnityDownloadLink =
    !isExplicitAppStore &&
    !isExplicitPlayStore &&
    ((typeof href === 'string' &&
      (href.includes('unity.peersglobal.com') ||
        (href === '/unity' &&
          typeof children === 'string' &&
          children.toLowerCase().includes('download')))) ||
      (typeof children === 'string' &&
        children.toLowerCase().includes('download') &&
        children.toLowerCase().includes('unity')))

  const [resolvedHref, setResolvedHref] = React.useState<string | undefined>(href)

  React.useEffect(() => {
    if (isExplicitAppStore) {
      setResolvedHref(SITE.appStoreUrl)
    } else if (isExplicitPlayStore) {
      setResolvedHref(SITE.playStoreUrl)
    } else if (isUnityDownloadLink) {
      setResolvedHref(getSmartAppUrl(SITE.playStoreUrl))
    } else {
      setResolvedHref(href)
    }
  }, [href, isExplicitAppStore, isExplicitPlayStore, isUnityDownloadLink])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (isExplicitAppStore) {
      if (e && typeof (e as any).preventDefault === 'function') {
        e.preventDefault()
      }
      if (typeof window !== 'undefined') {
        window.open(SITE.appStoreUrl, '_blank', 'noopener,noreferrer')
      }
    } else if (isExplicitPlayStore) {
      if (e && typeof (e as any).preventDefault === 'function') {
        e.preventDefault()
      }
      if (typeof window !== 'undefined') {
        window.open(SITE.playStoreUrl, '_blank', 'noopener,noreferrer')
      }
    } else if (isUnityDownloadLink) {
      handleSmartAppDownload(e, resolvedHref || SITE.playStoreUrl)
    } else if (onClick) {
      onClick(e as any)
    }
  }
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

  // Clean trailing arrow characters from text if the button already renders an arrow icon
  const sanitizedChildren =
    typeof children === 'string'
      ? children.replace(/\s*[→↗➔➜⇒➡▶]\s*$/, '').trim()
      : children

  const content = (
    <>
      <span className="galaxy-btn__content">
        <span className="galaxy-btn__text">{sanitizedChildren}</span>
        {icon === true && (isUnityDownloadLink ? <GalaxySmartphoneIcon /> : <GalaxyArrowIcon />)}
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

  if (resolvedHref) {
    const isExternal =
      (target === '_blank') ||
      isUnityDownloadLink ||
      resolvedHref.startsWith('http://') ||
      resolvedHref.startsWith('https://')

    return (
      <Link
        href={resolvedHref}
        target={target || (isExternal ? '_blank' : undefined)}
        rel={rel || (isExternal ? 'noopener noreferrer' : undefined)}
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
