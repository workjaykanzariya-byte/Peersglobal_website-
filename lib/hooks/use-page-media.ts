'use client'

import { useState, useEffect, useCallback } from 'react'
import {
  PageMediaItem,
  INITIAL_PAGE_MEDIA,
  getPageConfigBySlugOrId,
} from '@/lib/page-media-config'

export interface MediaLookupParams {
  sectionName?: string
  subModuleName?: string
  subModuleId?: string
  fallbackUrl?: string
  fallbackSourceType?: 'url' | 'localhost'
  fallbackTitle?: string
  fallbackDescription?: string
}

export interface ResolvedMediaItem {
  id: string
  title: string
  description?: string
  mediaType: 'video' | 'photo'
  sourceType: 'url' | 'localhost'
  mediaUrl: string
  isActive: boolean
  isYouTube: boolean
  embedUrl: string | null
}

export function usePageMedia(pageIdentifier: string) {
  const [items, setItems] = useState<PageMediaItem[]>(INITIAL_PAGE_MEDIA)
  const [isLoaded, setIsLoaded] = useState(false)

  const pageConfig = getPageConfigBySlugOrId(pageIdentifier)
  const pageId = pageConfig?.id || 'home'
  const pageSlug = pageConfig?.slug || '/'

  const loadMedia = useCallback(() => {
    if (typeof window === 'undefined') return

    try {
      const saved = localStorage.getItem('peers_admin_page_media')
      if (saved) {
        const parsed = JSON.parse(saved)
        if (Array.isArray(parsed) && parsed.length > 0) {
          setItems(parsed)
          setIsLoaded(true)
          return
        }
      }
    } catch {
      // Fallback
    }

    setItems(INITIAL_PAGE_MEDIA)
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    loadMedia()

    // Listen to internal updates and cross-tab storage updates
    window.addEventListener('peers_media_updated', loadMedia)
    window.addEventListener('storage', loadMedia)

    // Optional API fetch for synchronization
    fetch('/api/web-media')
      .then((res) => (res.ok ? res.json() : null))
      .then((apiData) => {
        if (Array.isArray(apiData) && apiData.length > 0) {
          // Merge with localStorage
          const localSaved = localStorage.getItem('peers_admin_page_media')
          if (!localSaved) {
            setItems(apiData)
            localStorage.setItem('peers_admin_page_media', JSON.stringify(apiData))
          }
        }
      })
      .catch(() => {})

    return () => {
      window.removeEventListener('peers_media_updated', loadMedia)
      window.removeEventListener('storage', loadMedia)
    }
  }, [loadMedia])

  /**
   * Resolve media for a specific sub-module or section
   */
  const getMedia = useCallback(
    (params: MediaLookupParams): ResolvedMediaItem => {
      const {
        sectionName,
        subModuleName,
        subModuleId,
        fallbackUrl = '/videos/homepage-hero-bg.mp4',
        fallbackSourceType = 'localhost',
        fallbackTitle = 'Peers Global Media',
        fallbackDescription = '',
      } = params

      // Match strategy:
      // 1. Exact match by subModuleName / subModuleId on current page
      // 2. Exact match by sectionName on current page
      // 3. Fallback to provided defaults

      const pageMatches = items.filter(
        (i) =>
          i.pageId === pageId ||
          i.pageSlug === pageSlug ||
          (pageConfig && i.pageName.toLowerCase() === pageConfig.name.toLowerCase())
      )

      let match: PageMediaItem | undefined

      if (subModuleName || subModuleId) {
        const targetSub = (subModuleName || '').toLowerCase().trim()
        const targetSubId = (subModuleId || '').toLowerCase().trim()

        match = pageMatches.find(
          (i) =>
            i.isActive &&
            ((targetSubId && i.subModuleId?.toLowerCase() === targetSubId) ||
              (targetSub && i.subModuleName?.toLowerCase() === targetSub) ||
              (targetSub && i.title.toLowerCase().includes(targetSub)) ||
              (targetSub && i.sectionName.toLowerCase().includes(targetSub)))
        )
      }

      if (!match && sectionName) {
        const targetSec = sectionName.toLowerCase().trim()
        match = pageMatches.find(
          (i) =>
            i.isActive &&
            (i.sectionName.toLowerCase() === targetSec ||
              i.sectionName.toLowerCase().includes(targetSec) ||
              targetSec.includes(i.sectionName.toLowerCase()))
        )
      }

      const activeUrl = match?.mediaUrl || fallbackUrl
      const activeSourceType = match?.sourceType || fallbackSourceType
      const activeTitle = match?.title || fallbackTitle
      const activeDesc = match?.description || fallbackDescription

      // Detect YouTube
      const isYt =
        activeUrl.includes('youtube.com') ||
        activeUrl.includes('youtu.be') ||
        activeSourceType === 'url'

      let embedUrl: string | null = null
      if (isYt) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
        const m = activeUrl.match(regExp)
        if (m && m[2].length === 11) {
          embedUrl = `https://www.youtube.com/embed/${m[2]}?autoplay=1&mute=0&controls=1&rel=0`
        }
      }

      return {
        id: match?.id || `default-${sectionName || 'media'}`,
        title: activeTitle,
        description: activeDesc,
        mediaType: match?.mediaType || 'video',
        sourceType: activeSourceType,
        mediaUrl: activeUrl,
        isActive: match ? match.isActive : true,
        isYouTube: isYt && Boolean(embedUrl),
        embedUrl,
      }
    },
    [items, pageId, pageSlug, pageConfig]
  )

  return {
    items,
    isLoaded,
    pageConfig,
    getMedia,
  }
}
