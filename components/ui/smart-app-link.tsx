'use client'

import React from 'react'
import { handleSmartAppDownload, useSmartAppUrl } from '@/lib/utils/app-link'
import { SITE } from '@/lib/data/site'

interface SmartAppLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
  className?: string
}

/**
 * Smart download link that dynamically detects the user's OS:
 * - On iOS / iPadOS -> Apple App Store
 * - On Android / Other -> Google Play Store
 */
export function SmartAppLink({ children, className, onClick, ...props }: SmartAppLinkProps) {
  const smartUrl = useSmartAppUrl(SITE.playStoreUrl)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e)
    handleSmartAppDownload(e, smartUrl)
  }

  return (
    <a
      href={smartUrl || '/download'}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
    </a>
  )
}
