import { Metadata } from 'next'
import '@/app/sections.css'
import { PeersStoreClient } from '@/components/store/peers-store-client'
import {
  fetchStoreCategories,
  fetchStoreProducts,
  fetchFeaturedStoreProducts,
  fetchStoreConfig,
} from '@/lib/api/store'

export const metadata: Metadata = {
  title: 'Peers Store — Official Merchandise & Regalia | Peers Global',
  description:
    'The official store of the Peers Global ecosystem: Heritage Lapel Pins, handcrafted leather folios, numbered commemorative coins, and founder growth toolkits redeemable via Peers Coin.',
  keywords: [
    'peers store',
    'peers global store',
    'official peers global merchandise',
    'peers lapel pin',
    'peers coin redemption',
    'entrepreneur merchandise',
    'heritage regalia',
  ],
  alternates: {
    canonical: 'https://peersglobal.com/peers-store',
  },
  openGraph: {
    title: 'Peers Store — Official Regalia & Ecosystem Merchandise | Peers Global',
    description:
      'The official store of the Peers Global ecosystem: Heritage Lapel Pins, handcrafted leather folios, numbered commemorative coins, and founder growth toolkits redeemable via Peers Coin.',
    url: 'https://peersglobal.com/peers-store',
    siteName: 'Peers Global',
    type: 'website',
  },
}

export default async function PeersStorePage() {
  // Fetch initial data on the server for instant SSR hydration and SEO
  const [categories, productsRes, featured, config] = await Promise.all([
    fetchStoreCategories().catch(() => []),
    fetchStoreProducts({ per_page: 24 }).catch(() => ({
      current_page: 1,
      data: [],
      total: 0,
      last_page: 1,
      per_page: 24,
    })),
    fetchFeaturedStoreProducts().catch(() => []),
    fetchStoreConfig().catch(() => null),
  ])

  const initialProducts = productsRes?.data || []

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Store',
    name: 'Peers Global Store',
    description:
      'The official store of the Peers Global ecosystem: Heritage Lapel Pins, handcrafted leather folios, numbered commemorative coins, and founder growth toolkits redeemable via Peers Coin.',
    url: 'https://peersglobal.com/peers-store',
    currenciesAccepted: 'Peers Coin',
    itemListElement: initialProducts.slice(0, 8).map((prod) => ({
      '@type': 'Product',
      name: prod.name,
      description: prod.short_description || prod.description || prod.name,
      sku: prod.sku,
      image: prod.primary_image?.image_url,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PeersStoreClient
        initialCategories={categories}
        initialProducts={initialProducts}
        initialFeatured={featured}
        initialConfig={config}
      />
    </>
  )
}
