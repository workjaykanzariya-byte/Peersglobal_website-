'use client'

import React, { useEffect, useRef, useState } from 'react'
import type { AnimationItem } from 'lottie-web'
import { getCachedSplashData, preloadSplashAnimation } from '@/lib/logo-animation-data'
import { cn } from '@/lib/utils'

export type LogoAnimationSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'fullscreen' | number

interface LogoAnimationProps {
  size?: LogoAnimationSize
  loop?: boolean
  autoplay?: boolean
  speed?: number
  glow?: boolean
  className?: string
  renderer?: 'svg' | 'canvas'
  onComplete?: () => void
  onLoopComplete?: () => void
}

const SIZE_MAP: Record<string, { width: number; height: number; containerClass: string }> = {
  xs: { width: 24, height: 24, containerClass: 'size-6' },
  sm: { width: 36, height: 36, containerClass: 'size-9' },
  md: { width: 64, height: 64, containerClass: 'size-16' },
  lg: { width: 120, height: 120, containerClass: 'size-28 sm:size-32' },
  xl: { width: 180, height: 180, containerClass: 'size-40 sm:size-48' },
  '2xl': { width: 240, height: 240, containerClass: 'size-56 sm:size-64' },
  fullscreen: { width: 240, height: 240, containerClass: 'size-48 sm:size-60 md:size-64' },
}

export function LogoAnimation({
  size = 'md',
  loop = true,
  autoplay = true,
  speed = 1,
  glow = false,
  className,
  renderer = 'canvas',
  onComplete,
  onLoopComplete,
}: LogoAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const animInstanceRef = useRef<AnimationItem | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  // Determine dimension styles
  const isNamedSize = typeof size === 'string' && size in SIZE_MAP
  const sizeConfig = isNamedSize ? SIZE_MAP[size as string] : null
  const customDimension = typeof size === 'number' ? size : !isNamedSize ? 64 : null

  useEffect(() => {
    let isMounted = true

    const initAnimation = async () => {
      try {
        const [lottieModule, animationData] = await Promise.all([
          import('lottie-web'),
          preloadSplashAnimation(),
        ])

        if (!isMounted || !containerRef.current) return

        const lottie = (lottieModule.default || lottieModule) as typeof import('lottie-web').default

        if (animInstanceRef.current) {
          animInstanceRef.current.destroy()
          animInstanceRef.current = null
        }

        // Clone animationData if available so in-place mutations in lottie-web don't corrupt reused instances
        let animDataCopy = null
        if (animationData) {
          try {
            animDataCopy = typeof structuredClone === 'function'
              ? structuredClone(animationData)
              : JSON.parse(JSON.stringify(animationData))
          } catch {
            animDataCopy = animationData
          }
        }

        const animConfig: Parameters<typeof lottie.loadAnimation>[0] = {
          container: containerRef.current,
          renderer,
          loop,
          autoplay,
          ...(animDataCopy ? { animationData: animDataCopy } : { path: '/splash.json' }),
        }

        const anim = lottie.loadAnimation(animConfig)
        animInstanceRef.current = anim

        anim.setSpeed(speed)

        anim.addEventListener('DOMLoaded', () => {
          if (isMounted) setIsLoaded(true)
        })

        if (onComplete) {
          anim.addEventListener('complete', () => {
            if (isMounted) onComplete()
          })
        }

        if (onLoopComplete) {
          anim.addEventListener('loopComplete', () => {
            if (isMounted) onLoopComplete()
          })
        }
      } catch (err) {
        console.warn('Failed to load logo animation:', err)
      }
    }

    initAnimation()

    return () => {
      isMounted = false
      if (animInstanceRef.current) {
        animInstanceRef.current.destroy()
        animInstanceRef.current = null
      }
    }
  }, [loop, autoplay, speed, renderer, onComplete, onLoopComplete])

  return (
    <div
      className={cn(
        'relative inline-flex items-center justify-center select-none',
        sizeConfig?.containerClass,
        className
      )}
      style={
        customDimension
          ? { width: customDimension, height: customDimension }
          : undefined
      }
    >
      {glow && (
        <div
          className="absolute inset-0 -m-4 sm:-m-8 rounded-full bg-gradient-to-tr from-[#1D4ED8]/25 via-[#60A5FA]/15 to-[#E11D48]/20 blur-2xl pointer-events-none transition-opacity duration-700 animate-pulse"
          aria-hidden="true"
        />
      )}

      <div
        ref={containerRef}
        className={cn(
          'size-full flex items-center justify-center transition-opacity duration-300',
          isLoaded ? 'opacity-100' : 'opacity-90'
        )}
      />
    </div>
  )
}
