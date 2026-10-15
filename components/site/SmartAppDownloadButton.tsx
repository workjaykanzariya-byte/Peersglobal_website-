'use client'

import React from 'react'
import { GalaxyButton, type GalaxyButtonProps } from '@/components/ui/galaxy-button'
import { handleSmartAppDownload, useSmartAppUrl } from '@/lib/utils/app-link'
import { SITE } from '@/lib/data/site'

export interface SmartAppDownloadButtonProps
  extends Omit<GalaxyButtonProps, 'href' | 'onClick'> {
  children?: React.ReactNode
  fallbackUrl?: string
  className?: string
}

/**
 * Universal Smart App Download Button
 * Automatically detects whether the user is on:
 * - Android -> redirects to Google Play Store (https://play.google.com/store/apps/details?id=com.peers.peersunity&pcampaignid=web_share)
 * - iOS / Apple -> redirects to Apple App Store (https://apps.apple.com/in/app/peers-global-unity/id6739198477)
 * - Desktop/Other -> falls back to Google Play Store
 */
export function SmartAppDownloadButton({
  children = 'Download the Unity App',
  fallbackUrl = SITE.playStoreUrl,
  variant = 'transparent',
  size = 'default',
  className,
  ...props
}: SmartAppDownloadButtonProps) {
  const smartUrl = useSmartAppUrl(fallbackUrl)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    handleSmartAppDownload(e, smartUrl)
  }

  return (
    <GalaxyButton
      href={smartUrl}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      size={size}
      className={className}
      {...props}
    >
      {children}
    </GalaxyButton>
  )
}
