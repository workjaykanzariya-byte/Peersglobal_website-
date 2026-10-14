'use client'

import React from 'react'
import { SITE } from '@/lib/data/site'

/**
 * Returns the platform-appropriate store URL:
 * - iOS / iPadOS / macOS / Safari on Apple devices -> Apple App Store
 * - Android -> Google Play Store
 * - Other/Desktop -> Fallback URL (defaults to Play Store or fallbackUrl)
 */
export function getSmartAppUrl(fallbackUrl: string = SITE.playStoreUrl): string {
  if (typeof window === 'undefined') return fallbackUrl

  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera || ''

  // iOS detection
  const isIOS =
    /iPad|iPhone|iPod/i.test(userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)

  if (isIOS) {
    return SITE.appStoreUrl
  }

  // Android detection
  const isAndroid = /android/i.test(userAgent)
  if (isAndroid) {
    return SITE.playStoreUrl
  }

  return fallbackUrl
}

/**
 * React hook to get the smart app link dynamically on mount on the client
 */
export function useSmartAppUrl(fallbackUrl: string = SITE.playStoreUrl): string {
  const [url, setUrl] = React.useState<string>(fallbackUrl)

  React.useEffect(() => {
    setUrl(getSmartAppUrl(fallbackUrl))
  }, [fallbackUrl])

  return url
}

/**
 * Open the appropriate app store link depending on user device platform
 */
export function handleSmartAppDownload(
  e?: React.MouseEvent | Event,
  fallbackUrl: string = SITE.playStoreUrl
) {
  if (e && typeof (e as any).preventDefault === 'function') {
    e.preventDefault()
  }

  const url = getSmartAppUrl(fallbackUrl)
  if (typeof window !== 'undefined') {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
}
