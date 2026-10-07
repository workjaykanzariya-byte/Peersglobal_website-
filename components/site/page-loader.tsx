'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react'
import { usePathname } from 'next/navigation'

export function PageLoader() {
  const pathname = usePathname()
  const prevPathnameRef = useRef<string | null>(null)

  // We keep the loader always mounted in the DOM so that Lottie SVG
  // and its internal WebP frames are never unmounted or lost across navigations.
  const [isActive, setIsActive] = useState(true)
  const [isFading, setIsFading] = useState(false)

  const containerRef = useRef<HTMLDivElement | null>(null)
  const animRef = useRef<any>(null)
  const roundsCompletedRef = useRef<number>(0)
  const isPageLoadedRef = useRef<boolean>(false)
  const isClosingRef = useRef<boolean>(false)
  const isTransitioningRef = useRef<boolean>(true)

  // Trigger smooth exit transition
  const triggerExit = useCallback(() => {
    if (isClosingRef.current) return
    isClosingRef.current = true

    setIsFading(true)
    setTimeout(() => {
      setIsActive(false)
      setIsFading(false)
      isClosingRef.current = false
      isTransitioningRef.current = false
      document.body.style.overflow = ''
    }, 700)
  }, [])

  // Start a new loading cycle (for navigation or page reload)
  const startLoaderCycle = useCallback(() => {
    isClosingRef.current = false
    isTransitioningRef.current = true
    roundsCompletedRef.current = 0
    isPageLoadedRef.current = false

    setIsFading(false)
    setIsActive(true)
    document.body.style.overflow = 'hidden'

    if (animRef.current) {
      animRef.current.goToAndPlay(0, true)
    }
  }, [])

  // 1. Initial Mount / Hard Refresh: Load Lottie Once and Keep Alive
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const markPageLoaded = () => {
      isPageLoadedRef.current = true
    }

    if (document.readyState === 'complete') {
      isPageLoadedRef.current = true
    } else {
      window.addEventListener('load', markPageLoaded, { once: true })
    }

    // Safety timeout fallback
    const safetyTimer = setTimeout(() => {
      isPageLoadedRef.current = true
    }, 10000)

    let isCancelled = false

    const loadLottie = async () => {
      // 1. Try local node module if available
      try {
        const mod = await import('lottie-web')
        return mod.default || mod
      } catch {
        // 2. Fallback to global window.lottie or inject CDN script
        if (typeof window !== 'undefined' && (window as any).lottie) {
          return (window as any).lottie
        }

        return new Promise<any>((resolve, reject) => {
          const script = document.createElement('script')
          script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js'
          script.async = true
          script.onload = () => {
            if ((window as any).lottie) {
              resolve((window as any).lottie)
            } else {
              reject(new Error('Lottie not found on window'))
            }
          }
          script.onerror = reject
          document.head.appendChild(script)
        })
      }
    }

    loadLottie()
      .then((lottie) => {
        if (isCancelled || !containerRef.current) return

        // Clean up previous instance if any
        if (animRef.current) {
          animRef.current.destroy()
        }

        const anim = lottie.loadAnimation({
          container: containerRef.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: '/animations/splash.json',
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid meet',
            progressiveLoad: true,
          },
        })

        animRef.current = anim

        // When a full round completes:
        // Must complete AT LEAST 1 full round AND current page must be ready
        anim.addEventListener('loopComplete', () => {
          roundsCompletedRef.current += 1

          if (
            roundsCompletedRef.current >= 1 &&
            isPageLoadedRef.current &&
            !isClosingRef.current
          ) {
            triggerExit()
          }
        })
      })
      .catch((err) => {
        console.warn('Lottie splash loader fallback triggered:', err)
        triggerExit()
      })

    return () => {
      isCancelled = true
      clearTimeout(safetyTimer)
      window.removeEventListener('load', markPageLoaded)
      document.body.style.overflow = ''
      if (animRef.current) {
        animRef.current.destroy()
        animRef.current = null
      }
    }
  }, [triggerExit])

  // 2. Track Route Changes (Next.js client-side navigation)
  useEffect(() => {
    if (prevPathnameRef.current === null) {
      // First mount
      prevPathnameRef.current = pathname
      return
    }

    if (pathname !== prevPathnameRef.current) {
      prevPathnameRef.current = pathname
      // Mark the new page as ready/arrived
      isPageLoadedRef.current = true

      // If user navigated programmatically or via browser URL
      if (!isTransitioningRef.current) {
        startLoaderCycle()
        setTimeout(() => {
          isPageLoadedRef.current = true
        }, 300)
      }
    }
  }, [pathname, startLoaderCycle])

  // 3. Intercept Link Clicks for Instant Feedback on Navigation
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a')
      if (!target) return

      const href = target.getAttribute('href')
      if (!href) return

      // Ignore hash links, external links, downloads, new tabs, modifier clicks
      if (
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('javascript:') ||
        target.target === '_blank' ||
        target.hasAttribute('download') ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return
      }

      try {
        const url = new URL(href, window.location.origin)
        if (
          url.origin === window.location.origin &&
          url.pathname !== window.location.pathname
        ) {
          // Immediately show loader and restart animation from frame 0
          startLoaderCycle()
        }
      } catch {
        // Ignore URL parse errors
      }
    }

    // Handle browser Back / Forward history buttons
    const handlePopState = () => {
      startLoaderCycle()
      setTimeout(() => {
        isPageLoadedRef.current = true
      }, 300)
    }

    document.addEventListener('click', handleClick, { capture: true })
    window.addEventListener('popstate', handlePopState)

    return () => {
      document.removeEventListener('click', handleClick, { capture: true })
      window.removeEventListener('popstate', handlePopState)
    }
  }, [startLoaderCycle])

  return (
    <aside
      aria-label="Loading Peers Global"
      aria-live="polite"
      role="status"
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white/85 backdrop-blur-2xl transition-all duration-700 ease-out select-none ${
        isActive && !isFading
          ? 'opacity-100 pointer-events-auto visible scale-100 blur-none'
          : 'opacity-0 pointer-events-none invisible scale-[1.02] blur-sm'
      }`}
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Soft radial glow to elevate the emblem */}
        <div className="absolute -inset-10 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

        {/* Lottie Animation Container (Preserved in DOM at all times) */}
        <div
          ref={containerRef}
          className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 relative z-10 flex items-center justify-center [&_svg]:w-full [&_svg]:h-full [&_svg]:block"
        />
      </div>
    </aside>
  )
}
