import type { Metadata } from 'next'
import { Suspense } from 'react'
import { CirclesPageClient } from '@/components/circles/circles-page-client'
import { ACTIVE_CITIES } from '@/lib/data/site'
import { fetchCities } from '@/lib/api/unity'

export const metadata: Metadata = {
  title: 'Circles — Governed Peer Circles',
  description:
    '18 Primary Governed Circles: 9 Industry-Specific and 9 Interest-Specific Circles across Indian business sectors with category exclusivity.',
}

export const revalidate = 300 // Revalidate page every 5 mins

export default async function CirclesPage() {
  const dynamicCities = await fetchCities()

  const cityList: string[] = dynamicCities.length > 0
    ? dynamicCities.map((c: any) => c.name || c.city_name || c).filter(Boolean)
    : ACTIVE_CITIES

  return (
    <Suspense fallback={
      <div className="flex items-center justify-center py-24 text-xs font-mono text-muted-foreground">
        Loading 18 Primary Circles...
      </div>
    }>
      <CirclesPageClient dynamicCities={cityList} />
    </Suspense>
  )
}
