'use client'

// Singleton in-memory cache for splash animation JSON to guarantee instant 0ms playback
let cachedSplashData: unknown = null
let fetchPromise: Promise<unknown> | null = null

export function getCachedSplashData(): unknown {
  return cachedSplashData
}

export function preloadSplashAnimation(): Promise<unknown> {
  if (cachedSplashData) {
    return Promise.resolve(cachedSplashData)
  }

  if (fetchPromise) {
    return fetchPromise
  }

  if (typeof window === 'undefined') {
    return Promise.resolve(null)
  }

  fetchPromise = fetch('/splash.json', { cache: 'force-cache' })
    .then((res) => {
      if (!res.ok) throw new Error(`Failed to load splash animation: ${res.statusText}`)
      return res.json()
    })
    .then((data) => {
      cachedSplashData = data
      return data
    })
    .catch((err) => {
      console.warn('Could not preload splash animation:', err)
      return null
    })

  return fetchPromise
}

// Automatically start preloading on client evaluation so the animation is cached before first render
if (typeof window !== 'undefined') {
  preloadSplashAnimation()
}
