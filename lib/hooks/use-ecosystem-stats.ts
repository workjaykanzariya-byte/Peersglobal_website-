'use client'

import { useState, useEffect } from 'react'

export interface EcosystemStatItem {
  value: string
  label: string
  raw?: number
}

export interface EcosystemStatsData {
  peers: EcosystemStatItem
  cities: EcosystemStatItem
  countries: EcosystemStatItem
  liveImpacts: EcosystemStatItem
}

const DEFAULT_STATS: EcosystemStatsData = {
  peers: { value: '10,450+', label: 'Peers', raw: 10450 },
  cities: { value: '48+', label: 'Cities', raw: 48 },
  countries: { value: '26+', label: 'Countries', raw: 26 },
  liveImpacts: { value: '643+', label: 'Live Impacts', raw: 643 },
}

let cachedMetrics: EcosystemStatsData | null = null
let fetchPromise: Promise<EcosystemStatsData> | null = null

export function useEcosystemStats() {
  const [stats, setStats] = useState<EcosystemStatsData>(cachedMetrics || DEFAULT_STATS)
  const [isLoading, setIsLoading] = useState(!cachedMetrics)

  useEffect(() => {
    let isMounted = true

    if (cachedMetrics) {
      setStats(cachedMetrics)
      setIsLoading(false)
      return
    }

    if (!fetchPromise) {
      fetchPromise = fetch('/api/ecosystem-metrics')
        .then((res) => {
          if (!res.ok) throw new Error('Failed to fetch ecosystem stats')
          return res.json()
        })
        .then((json) => {
          const d = json?.data
          if (d) {
            const result: EcosystemStatsData = {
              peers: {
                value: d.peers?.display || '10,000+',
                label: d.peers?.label || 'Peers',
                raw: d.peers?.raw || 10000,
              },
              cities: {
                value: d.cities?.display || '45+',
                label: d.cities?.label || 'Cities',
                raw: d.cities?.raw || 45,
              },
              countries: {
                value: d.countries?.display || '25+',
                label: d.countries?.label || 'Countries',
                raw: d.countries?.raw || 25,
              },
              liveImpacts: {
                value: d.liveImpacts?.display || '1M',
                label: d.liveImpacts?.label || 'Live Impacts',
                raw: d.liveImpacts?.raw || 1000000,
              },
            }
            cachedMetrics = result
            return result
          }
          return DEFAULT_STATS
        })
        .catch(() => DEFAULT_STATS)
    }

    fetchPromise.then((data) => {
      if (isMounted) {
        setStats(data)
        setIsLoading(false)
      }
    })

    return () => {
      isMounted = false
    }
  }, [])

  return { stats, isLoading }
}
