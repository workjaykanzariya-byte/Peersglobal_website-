'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GalaxyButton } from '@/components/ui/galaxy-button'
import { GlowCard } from '@/components/ui/glow-card'
import {
  ChevronRight,
  ShoppingBag,
  Sparkles,
  Gift,
  ExternalLink,
  ShieldCheck,
  Package,
  Award,
  BookOpen,
  Layers,
  Heart,
  CheckCircle2,
  Clock,
  Compass,
  ArrowRight,
  Search,
  SlidersHorizontal,
  X,
  RefreshCw,
  Tag,
  Check,
  Smartphone,
  QrCode,
  Loader2,
  Monitor,
  Lock,
} from 'lucide-react'
import { SITE } from '@/lib/data/site'
import type {
  StoreProduct,
  StoreCategory,
  StoreBanner,
  StoreConfig,
} from '@/lib/api/store'

// Brand Partner Logos from homepage
const BRAND_PARTNERS = [
  { name: 'IDBI Bank', src: '/images/brand-partners/idbi_bank.png' },
  { name: 'Navitas Solar', src: '/images/brand-partners/navitas_solar.png' },
  { name: 'RupeeBoss', src: '/images/brand-partners/rupeeboss.png' },
  { name: 'Waacab Cables', src: '/images/brand-partners/waacab.png' },
  { name: 'DevX', src: '/images/brand-partners/devx.png' },
  { name: 'Shivalik Real Estate Fund', src: '/images/brand-partners/shivalik_fund.png' },
  { name: 'SBI Life', src: '/images/brand-partners/sbi_life.png' },
  { name: 'Aerolam', src: '/images/brand-partners/aerolam.png' },
  { name: 'Xoxoday', src: '/images/brand-partners/xoxoday.png' },
  { name: 'Zybra Cloud Accounting', src: '/images/brand-partners/zybra.png' },
  { name: 'GUSEC', src: '/images/brand-partners/gusec.png' },
  { name: 'Sigma University', src: '/images/brand-partners/sigma_university.png' },
  { name: 'Concepts Green', src: '/images/brand-partners/concepts_green.png' },
  { name: 'Fernweh Vacations', src: '/images/brand-partners/fernweh_vacations.png' },
  { name: 'Zodiac Gifts', src: '/images/brand-partners/zodiac_gifts.png' },
]

// Fallback curated inventory in case API is temporarily unavailable or empty
const FALLBACK_ITEMS: StoreProduct[] = [
  {
    id: 'fallback-1',
    sku: 'PG-PIN-HERITAGE',
    name: 'The Official Heritage Blazer Lapel Pin',
    slug: 'official-heritage-blazer-lapel-pin',
    category_id: 'regalia',
    short_description: 'Cast in brushed antique brass and gold alloy featuring the iconic Peers Global seal.',
    description: 'The official emblem worn by active, contributing Peers at Circle sessions, regional Conclaves, and global summits. Backed by verified contribution.',
    coin_price: 45,
    stock_qty: 120,
    type: 'PHYSICAL',
    is_featured: true,
    status: 'ACTIVE',
    delivery_modes: ['DELIVERY'],
    brand: 'Peers Global',
    primary_image: {
      id: 'img-1',
      image_url: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&auto=format&fit=crop&q=80',
    },
    category: {
      id: 'regalia',
      name: 'Official Regalia',
      slug: 'official-regalia',
      description: 'Official seal emblems and lapel pins',
      products_count: 3,
      is_active: true,
      image_url: null,
    },
  },
  {
    id: 'fallback-2',
    sku: 'PG-FOLIO-LTR',
    name: 'Signature Monogrammed Leather Meeting Folio',
    slug: 'monogrammed-leather-meeting-folio',
    category_id: 'leather-goods',
    short_description: 'Handcrafted full-grain Indian leather meeting portfolio debossed with your name.',
    description: 'Crafted from pure vegetable-tanned leather for boardrooms, investor roundtables, and high-stakes negotiations.',
    coin_price: 130,
    stock_qty: 45,
    type: 'PHYSICAL',
    is_featured: true,
    status: 'ACTIVE',
    delivery_modes: ['DELIVERY'],
    brand: 'Peers Heritage',
    primary_image: {
      id: 'img-2',
      image_url: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&auto=format&fit=crop&q=80',
    },
    category: {
      id: 'leather-goods',
      name: 'Leather & Folios',
      slug: 'leather-goods',
      description: 'Handcrafted executive meeting folios',
      products_count: 2,
      is_active: true,
      image_url: null,
    },
  },
  {
    id: 'fallback-3',
    sku: 'PG-COIN-SET',
    name: 'Peers Citizen Commemorative Gold-Bronze Coin Set',
    slug: 'peers-citizen-commemorative-coin-set',
    category_id: 'collectibles',
    short_description: 'Heavyweight collector medal struck in pure bronze and polished gold alloy.',
    description: 'Numbered limited edition celebrating the founding philosophy of Governed Collaboration and Give-First.',
    coin_price: 180,
    stock_qty: 25,
    type: 'PHYSICAL',
    is_featured: true,
    status: 'ACTIVE',
    delivery_modes: ['DELIVERY'],
    brand: 'Peers Mint',
    primary_image: {
      id: 'img-3',
      image_url: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800&auto=format&fit=crop&q=80',
    },
    category: {
      id: 'collectibles',
      name: 'Collectibles',
      slug: 'collectibles',
      description: 'Numbered coins and museum pieces',
      products_count: 1,
      is_active: true,
      image_url: null,
    },
  },
  {
    id: 'fallback-4',
    sku: 'PG-PLAYBOOK-JV',
    name: 'The 10-Way Cross-Border JV Playbook & Master Kit',
    slug: 'cross-border-jv-playbook-master-kit',
    category_id: 'toolkits',
    short_description: 'Comprehensive legal, financial and operational framework for executing joint ventures.',
    description: 'Vetted agreement templates, revenue-split calculators, and case studies of multi-crore peer collaborations.',
    coin_price: 80,
    stock_qty: 500,
    type: 'DIGITAL',
    is_featured: true,
    status: 'ACTIVE',
    delivery_modes: ['DIGITAL'],
    brand: 'Peers Knowledge',
    primary_image: {
      id: 'img-4',
      image_url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80',
    },
    category: {
      id: 'toolkits',
      name: 'Growth Toolkits',
      slug: 'growth-toolkits',
      description: 'Digital blueprints and legal frameworks',
      products_count: 3,
      is_active: true,
      image_url: null,
    },
  },
]

interface PeersStoreClientProps {
  initialCategories?: StoreCategory[]
  initialProducts?: StoreProduct[]
  initialFeatured?: StoreProduct[]
  initialConfig?: StoreConfig | null
}

export function PeersStoreClient({
  initialCategories = [],
  initialProducts = [],
  initialFeatured = [],
  initialConfig = null,
}: PeersStoreClientProps) {
  // State for products and filtering
  const [categories, setCategories] = useState<StoreCategory[]>(initialCategories)
  const [products, setProducts] = useState<StoreProduct[]>(
    initialProducts.length > 0 ? initialProducts : FALLBACK_ITEMS
  )
  const [featuredProducts, setFeaturedProducts] = useState<StoreProduct[]>(
    initialFeatured.length > 0 ? initialFeatured : initialProducts.slice(0, 3)
  )
  const [config, setConfig] = useState<StoreConfig | null>(initialConfig)

  // Filter state
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedType, setSelectedType] = useState<string>('all') // 'all' | 'PHYSICAL' | 'DIGITAL'
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [debouncedSearch, setDebouncedSearch] = useState<string>('')
  const [sortOption, setSortOption] = useState<string>('popular')
  const [loading, setLoading] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<StoreProduct | null>(null)
  const [buyingProduct, setBuyingProduct] = useState<StoreProduct | null>(null)
  const [deepLinkAttempted, setDeepLinkAttempted] = useState<boolean>(false)

  // Trigger buy flow: opens the smart "open in app / go to store" popup.
  // The actual app-or-store redirect happens when the user taps a store badge.
  const handleBuyClick = (product: StoreProduct) => {
    setBuyingProduct(product)
    setDeepLinkAttempted(false)
  }

  const closeBuyModal = React.useCallback(() => setBuyingProduct(null), [])

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery)
    }, 350)
    return () => clearTimeout(timer)
  }, [searchQuery])

  // Fetch initial data client-side if not loaded server-side
  useEffect(() => {
    if (categories.length === 0) {
      fetch('/api/store?mode=categories')
        .then((res) => res.json())
        .then((res) => {
          if (res.success && Array.isArray(res.data) && res.data.length > 0) {
            setCategories(res.data)
          }
        })
        .catch((err) => console.error('Error fetching categories client-side:', err))
    }

    if (!config) {
      fetch('/api/store?mode=config')
        .then((res) => res.json())
        .then((res) => {
          if (res.success && res.data) setConfig(res.data)
        })
        .catch((err) => console.error('Error fetching config client-side:', err))
    }
  }, [categories.length, config])

  // Fetch filtered products when criteria change
  useEffect(() => {
    let isCancelled = false
    setLoading(true)

    const params = new URLSearchParams()
    if (selectedCategory !== 'all') params.set('category_id', selectedCategory)
    if (selectedType !== 'all') params.set('type', selectedType)
    if (debouncedSearch.trim()) params.set('search', debouncedSearch.trim())
    if (sortOption) params.set('sort', sortOption)
    params.set('per_page', '24')

    fetch(`/api/store?${params.toString()}`)
      .then((res) => res.json())
      .then((res) => {
        if (!isCancelled) {
          if (res.success && res.data) {
            const list = Array.isArray(res.data.data) ? res.data.data : Array.isArray(res.data) ? res.data : []
            // If API returned items, show them. If search/category is empty and API returned 0, fallback to curated
            if (list.length > 0) {
              setProducts(list)
            } else if (!debouncedSearch && selectedCategory === 'all' && selectedType === 'all') {
              setProducts(FALLBACK_ITEMS)
            } else {
              setProducts([])
            }
          }
          setLoading(false)
        }
      })
      .catch((err) => {
        if (!isCancelled) {
          console.error('Error querying products:', err)
          setLoading(false)
        }
      })

    return () => {
      isCancelled = true
    }
  }, [selectedCategory, selectedType, debouncedSearch, sortOption])

  return (
    <div className="homepage-sections-root w-full bg-white text-[#0f131a] selection:bg-blue-100 selection:text-blue-900">
      
      {/* Breadcrumbs Navigation */}
      <div className="border-b border-slate-200/80 bg-white/80 backdrop-blur-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-[#0062D2] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/initiatives" className="hover:text-[#0062D2] transition-colors">
            Our Initiatives
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">Peers Store</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. LIVE SEARCH & FILTERABLE PRODUCT CATALOGUE (FIRST SECTION)              */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#f8fafc] border-b border-slate-200/80" id="catalogue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Header & Search Bar */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-slate-200 pb-6">
            <div>
              <div className="mb-1">
                <span className="text-xs font-bold uppercase tracking-[0.22em] brand-gradient-text">
                  UNITY STORE API INTEGRATED
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950">
                Live Store Products &amp; Offerings
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 font-light">
                Connected directly to the Peers Unity inventory ledger. Real-time coin pricing, stock, and fulfillment.
              </p>
            </div>

            {/* Keyword Search Input */}
            <div className="w-full lg:w-80 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search products (Polo, Folio, JV...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 bg-white border border-slate-200 rounded-full text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0062D2] focus:ring-2 focus:ring-blue-500/10 shadow-xs transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Filter Controls: Categories, Types, and Sorting */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-[#0062D2] text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                All Products
              </button>

              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-[#0062D2] text-white shadow-xs'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {cat.name}
                  {typeof cat.products_count === 'number' && cat.products_count > 0 && (
                    <span className="ml-1.5 text-[10px] opacity-75 font-mono">
                      ({cat.products_count})
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Type & Sort Dropdowns */}
            <div className="flex items-center gap-2 text-xs">
              {/* Type Filter */}
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-slate-700 font-medium focus:outline-none focus:border-[#0062D2] shadow-xs cursor-pointer"
              >
                <option value="all">All Types</option>
                <option value="PHYSICAL">Physical Goods</option>
                <option value="DIGITAL">Digital &amp; Toolkits</option>
                <option value="MEMBERSHIP">Membership Services</option>
              </select>

              {/* Sort Filter */}
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-slate-700 font-medium focus:outline-none focus:border-[#0062D2] shadow-xs cursor-pointer"
              >
                <option value="popular">Popular First</option>
                <option value="latest">Latest Arrivals</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
              </select>
            </div>

          </div>

          {/* Product Cards Grid */}
          {loading ? (
            <div className="py-24 flex flex-col items-center justify-center gap-3 text-slate-500">
              <RefreshCw className="w-7 h-7 text-[#0062D2] animate-spin" />
              <p className="text-sm font-medium">Loading store items from Unity network...</p>
            </div>
          ) : products.length === 0 ? (
            <div className="py-20 text-center bg-white rounded-3xl border border-slate-200 p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-slate-900">No items match your criteria</h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto font-light">
                Try searching with different keywords or clear the category filters to browse the complete catalog.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all')
                  setSelectedType('all')
                  setSearchQuery('')
                }}
                className="px-4 py-2 rounded-full bg-[#0062D2] text-white text-xs font-bold hover:bg-[#0052B4] transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {products.map((item) => {
                const coinPrice = item.price_coins || item.coin_price || 0
                const imageUrl =
                  item.primary_image?.image_url ||
                  item.category?.image_url ||
                  'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80'

                return (
                  <div
                    key={item.id}
                    className="group p-5 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3.5">
                      {/* Product Thumbnail */}
                      <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-100">
                        <img
                          src={imageUrl}
                          alt={item.name}
                          className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute top-2.5 left-2.5">
                          <span className="text-[9.5px] uppercase font-bold tracking-wider text-slate-900 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full shadow-xs border border-slate-200/50">
                            {item.category?.name || item.type || 'Regalia'}
                          </span>
                        </div>
                        {item.is_featured && (
                          <div className="absolute top-2.5 right-2.5">
                            <span className="text-[9.5px] uppercase font-bold tracking-wider text-rose-700 bg-rose-50/95 backdrop-blur-md border border-rose-200 px-2 py-0.5 rounded-full shadow-xs">
                              Featured
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Title & SKU */}
                      <div>
                        <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono mb-0.5">
                          <span>SKU: {item.sku || 'PG-STANDARD'}</span>
                          <span className="text-emerald-700 font-semibold font-sans">
                            {item.stock_qty > 0 ? `${item.stock_qty} in stock` : 'Available'}
                          </span>
                        </div>
                        <h3 className="font-serif font-bold text-slate-950 text-base leading-snug line-clamp-2 group-hover:text-[#0062D2] transition-colors">
                          {item.name}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-slate-600 line-clamp-2 font-light leading-relaxed">
                        {item.short_description || item.description || 'Exclusive Peers Global community offering.'}
                      </p>
                    </div>

                    {/* Dedicated Bottom Footer: Price Block + Action Buttons */}
                    <div className="pt-3 border-t border-slate-100 mt-auto space-y-3">
                      {/* Price in Coins */}
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[11px] text-slate-400 uppercase font-semibold tracking-wider block mb-0.5">
                            PRICE
                          </span>
                          <div className="flex items-center gap-1.5 text-slate-950 font-bold text-base sm:text-[17px]">
                            <img
                              src="/api/store?mode=coin-image"
                              alt="Peers Coin"
                              className="size-6 object-contain rounded-full shrink-0 shadow-2xs"
                            />
                            <span>{coinPrice.toLocaleString('en-IN')} Coins</span>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-3 pt-1">
                        <button
                          onClick={() => setSelectedProduct(item)}
                          className="flex-1 py-2.5 px-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold border border-slate-200 shadow-2xs transition-colors text-center"
                        >
                          View Specs
                        </button>

                        <GalaxyButton
                          onClick={() => handleBuyClick(item)}
                          size="sm"
                          icon={<ShoppingBag className="w-3.5 h-3.5" />}
                          className="flex-1 !text-xs !py-2.5 !px-4 uppercase tracking-wider font-bold text-center"
                        >
                          BUY
                        </GalaxyButton>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. PARTNERS / TRUSTED MARQUEE BANNER                                      */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-slate-50/60 text-slate-900 border-y border-slate-200 select-none py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest brand-gradient-text">
            TRUSTED REGALIA ACROSS CIRCLES &amp; ENTERPRISES
          </p>
        </div>

        <div className="relative w-full overflow-hidden flex flex-col gap-4 group/marquee">
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

          <div className="flex w-max items-center gap-4 sm:gap-5 animate-marquee hover:[animation-play-state:paused] will-change-transform">
            {[...BRAND_PARTNERS, ...BRAND_PARTNERS, ...BRAND_PARTNERS].map((brand, idx) => (
              <div
                key={`brand-${idx}`}
                className="h-16 min-w-[150px] px-5 py-2 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-center shrink-0"
                title={brand.name}
              >
                <div className="relative h-8 w-28 flex items-center justify-center">
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    width={110}
                    height={32}
                    className="max-h-7 w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. PROMOTIONAL STORE BANNERS (IF CONFIGURED IN API)                       */}
      {/* ========================================================================= */}
      {config?.banners && config.banners.length > 0 && (
        <section className="py-10 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {config.banners.slice(0, 3).map((banner) => (
                <div
                  key={banner.id}
                  className="relative rounded-2xl overflow-hidden shadow-sm group border border-slate-200 h-44 flex flex-col justify-end p-5"
                >
                  <img
                    src={banner.image_url}
                    alt={banner.title}
                    className="absolute inset-0 size-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent" />
                  <div className="relative z-10 text-white space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-300">
                      Featured Collection
                    </span>
                    <h3 className="font-serif font-bold text-base leading-snug line-clamp-1">
                      {banner.title}
                    </h3>
                    {banner.subtitle && (
                      <p className="text-xs text-slate-300 line-clamp-1 font-light">
                        {banner.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 4. WHAT IS PEERS STORE (HOMEPAGE WHAT-IS STYLE)                           */}
      {/* ========================================================================= */}
      <section className="fd-what-is-mindvalley !bg-white !py-16 md:!py-24 !px-6 md:!px-12" id="about-store">
        <div className="fd-what-is-mindvalley__inner">
          <div className="fd-what-is-mindvalley__intro">
            <div className="fd-what-is-mindvalley__titles">
              <p className="fd-what-is-mindvalley__eyebrow brand-gradient-text">
                HOW PEERS STORE WORKS
              </p>

              <div className="fd-what-is-mindvalley__copy">
                <h2 className="fd-what-is-mindvalley__headline">
                  <span>More than merchandise.</span>{' '}
                  <span>A celebration of contribution.</span>
                </h2>
                <div className="space-y-3 max-w-3xl mx-auto">
                  <p className="fd-what-is-mindvalley__paragraph">
                    Most storefronts begin with: <em>&ldquo;What would you like to buy?&rdquo;</em> The Peers Store begins with: <em>&ldquo;What has your contribution earned?&rdquo;</em> Every item is commissioned in limited quantities, crafted with genuine materials, and exclusively redeemable with Peers Coin.
                  </p>
                </div>
              </div>
            </div>

            {/* 4-Stage Horizontal Pipeline with Animated SVG Border Tracing & Glow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mx-auto mt-6 text-left">
              <GlowCard className="bg-[#f8fafc] border border-slate-200/90 shadow-sm rounded-3xl transition-all duration-300">
                <div className="p-6 space-y-3">
                  <div className="size-11 rounded-2xl bg-blue-50 border border-blue-200/80 flex items-center justify-center shadow-2xs group-hover:scale-105 group-hover:border-[#1D4ED8] group-hover:bg-blue-100/70 transition-all duration-300">
                    <span className="font-mono font-bold text-sm leading-none text-[#1D4ED8] group-hover:text-[#E11D48] transition-colors">
                      01
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-slate-950 text-base group-hover:text-[#1D4ED8] transition-colors">
                    Contribute
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    Support a fellow entrepreneur through governed knowledge sharing, referrals, or bilateral collaboration.
                  </p>
                </div>
              </GlowCard>

              <GlowCard className="bg-[#f8fafc] border border-slate-200/90 shadow-sm rounded-3xl transition-all duration-300">
                <div className="p-6 space-y-3">
                  <div className="size-11 rounded-2xl bg-blue-50 border border-blue-200/80 flex items-center justify-center shadow-2xs group-hover:scale-105 group-hover:border-[#1D4ED8] group-hover:bg-blue-100/70 transition-all duration-300">
                    <span className="font-mono font-bold text-sm leading-none text-[#1D4ED8] group-hover:text-[#E11D48] transition-colors">
                      02
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-slate-950 text-base group-hover:text-[#1D4ED8] transition-colors">
                    Earn Coins
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    Your impact is confirmed and credited to your Unity digital wallet as non-purchasable Peers Coin.
                  </p>
                </div>
              </GlowCard>

              <GlowCard className="bg-[#f8fafc] border border-slate-200/90 shadow-sm rounded-3xl transition-all duration-300">
                <div className="p-6 space-y-3">
                  <div className="size-11 rounded-2xl bg-blue-50 border border-blue-200/80 flex items-center justify-center shadow-2xs group-hover:scale-105 group-hover:border-[#1D4ED8] group-hover:bg-blue-100/70 transition-all duration-300">
                    <span className="font-mono font-bold text-sm leading-none text-[#1D4ED8] group-hover:text-[#E11D48] transition-colors">
                      03
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-slate-950 text-base group-hover:text-[#1D4ED8] transition-colors">
                    Choose Item
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    Select official regalia, full-grain leather folios, collector coins, apparel, or executive growth playbooks.
                  </p>
                </div>
              </GlowCard>

              <GlowCard className="bg-[#f8fafc] border border-slate-200/90 shadow-sm rounded-3xl transition-all duration-300">
                <div className="p-6 space-y-3">
                  <div className="size-11 rounded-2xl bg-rose-50 border border-rose-200/80 flex items-center justify-center shadow-2xs group-hover:scale-105 group-hover:border-[#E11D48] group-hover:bg-rose-100/70 transition-all duration-300">
                    <span className="font-mono font-bold text-sm leading-none text-[#E11D48] group-hover:text-[#1D4ED8] transition-colors">
                      04
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-slate-950 text-base group-hover:text-[#E11D48] transition-colors">
                    Fulfillment
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    Instant digital delivery for tools &amp; masterclasses, and doorstep insured shipping for physical items.
                  </p>
                </div>
              </GlowCard>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. PRODUCT DETAILS MODAL (IF ITEM CLICKED)                                 */}
      {/* ========================================================================= */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-4">
              <span className="text-xs uppercase font-bold tracking-wider text-[#0062D2] bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
                {selectedProduct.category?.name || selectedProduct.type}
              </span>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 leading-tight">
                {selectedProduct.name}
              </h2>

              <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
                <span>SKU: {selectedProduct.sku}</span>
                <span>•</span>
                <span>Type: {selectedProduct.type}</span>
                <span>•</span>
                <span className="text-emerald-700 font-semibold font-sans">
                  Available: {selectedProduct.stock_qty} units
                </span>
              </div>
            </div>

            {/* Product Image */}
            <div className="relative aspect-16/9 w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
              <img
                src={
                  selectedProduct.primary_image?.image_url ||
                  selectedProduct.category?.image_url ||
                  'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80'
                }
                alt={selectedProduct.name}
                className="size-full object-cover"
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h4 className="text-xs uppercase font-bold tracking-wider text-slate-900">
                Description &amp; Specifications
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                {selectedProduct.description || selectedProduct.short_description}
              </p>
            </div>

            {/* Product Variants (if size/color variants exist) */}
            {selectedProduct.variants && selectedProduct.variants.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-xs uppercase font-bold tracking-wider text-slate-900">
                  Available Options &amp; Variants
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.variants.map((v) => (
                    <div
                      key={v.id}
                      className="px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-700 font-medium"
                    >
                      <span>{v.name}</span>
                      <span className="ml-1.5 font-bold font-mono text-[#0062D2]">
                        ({v.coin_price || v.price_coins} Coins)
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Delivery Terms */}
            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-1.5 text-xs text-slate-700">
              <div className="flex items-center gap-1.5 font-bold text-[#0062D2]">
                <ShieldCheck className="w-4 h-4" />
                <span>Governed Ecosystem Delivery</span>
              </div>
              <p className="font-light text-slate-600">
                Doorstep courier fulfillment across India. Return window:{' '}
                {selectedProduct.return_window_days || 7} days if damaged or defective. Non-transferable once activated.
              </p>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-200">
              <div>
                <span className="text-[11px] text-slate-400 uppercase font-semibold block">
                  Required Coins
                </span>
                <div className="flex items-center gap-2 mt-0.5">
                  <img
                    src="/api/store?mode=coin-image"
                    alt="Peers Coin"
                    className="size-6 object-contain rounded-full shadow-2xs shrink-0"
                  />
                  <span className="text-xl sm:text-2xl font-serif font-bold text-slate-950 font-mono">
                    {(selectedProduct.price_coins || selectedProduct.coin_price || 0).toLocaleString('en-IN')}{' '}
                    Coins
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Close
                </button>
                <GalaxyButton
                  href="https://dev.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  icon={<ShoppingBag className="w-3.5 h-3.5" />}
                  className="font-bold uppercase tracking-wider !text-xs !py-2.5 !px-4"
                >
                  Buy Now
                </GalaxyButton>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 7. EDITORIAL / LEADERSHIP CARD (HOMEPAGE QUEST SECTION STYLE)             */}
      {/* ========================================================================= */}
      <section className="relative py-20 md:py-24 px-6 md:px-12 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest brand-gradient-text mb-4">
            GOVERNED COLLABORATION &amp; HONEST MERIT
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950 leading-tight mb-6">
            Regalia That Cannot Be Bought. Only Earned.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
            A pin bought on an e-commerce website is just an accessory. A pin awarded through confirmed peer contributions is a mark of honor and community respect.
          </p>

          <div className="w-full max-w-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-left">
            <div className="relative z-10 space-y-4">
              <span className="text-xs uppercase tracking-widest text-sky-300 font-semibold block">
                THE PEERS STORE PLEDGE
              </span>
              <p className="text-xl sm:text-2xl font-serif italic text-slate-100">
                &ldquo;What the ecosystem creates should have a permanent, honorable place within the ecosystem. We will never sell items for money. Every piece will remain a token of real collaboration.&rdquo;
              </p>
              <p className="text-xs text-slate-400 font-mono pt-2">
                — Peers Global Operating Council
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. SIGNATURE CLOSING HERO CALL TO ACTION BANNER (PEERS GLOBAL THEME)     */}
      {/* ========================================================================= */}
      <section className="relative isolate overflow-hidden bg-[#030712] py-20 sm:py-24 lg:py-28 text-white border-t border-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,7,18,0.98)_0%,rgba(10,4,20,0.96)_50%,rgba(20,2,10,0.98)_100%)] pointer-events-none" />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(0,98,210,0.20),transparent_50%),radial-gradient(circle_at_82%_50%,rgba(225,29,72,0.15),transparent_50%)]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-blue-600/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-rose-500/10 blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8 flex flex-col items-start space-y-5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.22em] bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent">
                  — READY TO REDEEM? —
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-serif font-bold text-white tracking-tight leading-[1.15]">
                Wear the Regalia.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185]">
                  Grow With the Ecosystem.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl">
                Access the complete Peers Store directly inside your Unity Member Account. Track your coin balance, log contributions, and claim your heritage items.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-sky-200/90 font-medium py-1">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  Heritage Lapel Pin
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  Leather Folios
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  Classic Polo T-Shirts
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  Digital Masterclasses
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  Numbered Coins
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  Insured Shipping
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <GalaxyButton
                  href="https://unity.peersglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="default"
                  className="font-bold uppercase tracking-wider"
                >
                  <span>Open Unity Platform</span>
                  <ExternalLink className="w-4 h-4 ml-1.5 inline" />
                </GalaxyButton>

                <GalaxyButton
                  href="/marketplace"
                  variant="transparent"
                  size="default"
                  className="font-bold uppercase tracking-wider"
                >
                  View All Offerings
                </GalaxyButton>
              </div>
            </div>

            {/* Right Cursive Script */}
            <div className="lg:col-span-4 text-left lg:text-right select-none pointer-events-none drop-shadow-lg space-y-1.5">
              <p
                className="text-2xl sm:text-3xl text-white/60 leading-tight font-light"
                style={{ fontFamily: 'var(--font-script, Georgia, serif)' }}
              >
                Contribute.
              </p>
              <p
                className="text-2xl sm:text-3xl text-white/75 leading-tight font-light"
                style={{ fontFamily: 'var(--font-script, Georgia, serif)' }}
              >
                Earn.
              </p>
              <p
                className="text-2xl sm:text-3xl text-white/90 leading-tight font-light"
                style={{ fontFamily: 'var(--font-script, Georgia, serif)' }}
              >
                Wear.
              </p>
              <p
                className="text-3xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] font-normal leading-tight pt-1"
                style={{ fontFamily: 'var(--font-script, Georgia, serif)' }}
              >
                Belong.
              </p>
            </div>

          </div>
        </div>
      </section>

    {/* ========================================================================= */}
    {/* PRODUCT SPECS MODAL                                                       */}
    {/* ========================================================================= */}
    {selectedProduct && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={() => setSelectedProduct(null)}
      >
        <div
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-100 bg-slate-50/60">
            <div className="flex items-center gap-2.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-100">
                {selectedProduct.category?.name || 'Heritage Item'}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {selectedProduct.sku}
              </span>
            </div>
            <button
              onClick={() => setSelectedProduct(null)}
              className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="overflow-y-auto p-5 sm:p-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                <img
                  src={
                    selectedProduct.primary_image?.image_url ||
                    (selectedProduct as any).primary_image_url ||
                    'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&auto=format&fit=crop&q=80'
                  }
                  alt={selectedProduct.name}
                  className="size-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-900 leading-snug">
                  {selectedProduct.name}
                </h3>

                <div className="flex items-center gap-2 py-2 px-3 bg-amber-50/80 rounded-xl border border-amber-200/60 w-fit">
                  <img
                    src="/api/store?mode=coin-image"
                    alt="Peers Coin"
                    className="size-6 object-contain rounded-full shadow-2xs"
                  />
                  <span className="text-lg font-bold text-slate-900">
                    {Number(selectedProduct.coin_price).toLocaleString('en-IN')} Coins
                  </span>
                </div>

                <div className="space-y-1.5 text-xs text-slate-600">
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Contribution-backed authentic item</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Free doorstep delivery across India</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Verified Member Certificate included</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2 border-t border-slate-100 pt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Specification & Details
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedProduct.description || selectedProduct.short_description}
              </p>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50/60 flex items-center justify-between gap-3">
            <button
              onClick={() => setSelectedProduct(null)}
              className="py-2.5 px-5 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-xs font-bold text-slate-700 transition-colors"
            >
              Back
            </button>
            <GalaxyButton
              onClick={() => {
                const prod = selectedProduct
                setSelectedProduct(null)
                handleBuyClick(prod)
              }}
              size="sm"
              icon={<ShoppingBag className="w-3.5 h-3.5" />}
              className="!text-xs !py-2.5 !px-6 uppercase tracking-wider font-bold"
            >
              Buy with Coins
            </GalaxyButton>
          </div>
        </div>
      </div>
    )}

    {/* BUY FLOW MODAL: smart open-in-app / store redirect */}
    {buyingProduct && (
      <BuyInAppModal product={buyingProduct} onClose={closeBuyModal} />
    )}

  </div>
)
}

// =============================================================================
// BUY FLOW MODAL: SMART "OPEN IN APP OR GO TO STORE"
// Tapping a store badge tries to open the Peers Unity app directly on the
// product. If the app isn't installed, the user lands on the matching store.
// =============================================================================
const APP_DEEP_LINK_SCHEME = 'peersunity'
const ANDROID_PACKAGE_ID = 'com.peers.peersunity'

type DevicePlatform = 'android' | 'ios' | 'desktop'
type StoreTarget = 'play' | 'app'

function detectPlatform(): DevicePlatform {
  if (typeof navigator === 'undefined') return 'desktop'
  const ua = navigator.userAgent || ''
  if (/Android/i.test(ua)) return 'android'
  // iPadOS 13+ reports as Mac – detect via touch support
  if (/iPhone|iPad|iPod/i.test(ua) || (/Macintosh/i.test(ua) && navigator.maxTouchPoints > 1)) {
    return 'ios'
  }
  return 'desktop'
}

function BuyInAppModal({
  product,
  onClose,
}: {
  product: StoreProduct
  onClose: () => void
}) {
  const [platform, setPlatform] = useState<DevicePlatform>('desktop')
  const [opening, setOpening] = useState<StoreTarget | null>(null)
  const fallbackTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null)
  const resetTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    setPlatform(detectPlatform())

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      if (fallbackTimer.current) clearTimeout(fallbackTimer.current)
      if (resetTimer.current) clearTimeout(resetTimer.current)
    }
  }, [onClose])

  const deepLinkPath = `store/products/${product.id}`

  const handleStoreTap = (store: StoreTarget) => {
    if (typeof window === 'undefined') return
    const storeUrl = store === 'play' ? SITE.playStoreUrl : SITE.appStoreUrl

    setOpening(store)
    if (resetTimer.current) clearTimeout(resetTimer.current)
    resetTimer.current = setTimeout(() => setOpening(null), 2500)

    // ANDROID + Play: Chrome intent URL opens the app if installed,
    // otherwise automatically falls back to the Play Store listing.
    if (platform === 'android' && store === 'play') {
      const fallback = encodeURIComponent(storeUrl)
      window.location.href =
        `intent://${deepLinkPath}#Intent;scheme=${APP_DEEP_LINK_SCHEME};` +
        `package=${ANDROID_PACKAGE_ID};S.browser_fallback_url=${fallback};end`
      return
    }

    // iOS + App Store: try the app scheme; if the page is still visible
    // shortly after, the app isn't installed → send to the App Store.
    if (platform === 'ios' && store === 'app') {
      let leftPage = false
      const onVisibility = () => {
        if (document.hidden) leftPage = true
      }
      const onPageHide = () => {
        leftPage = true
      }
      document.addEventListener('visibilitychange', onVisibility)
      window.addEventListener('pagehide', onPageHide)

      window.location.href = `${APP_DEEP_LINK_SCHEME}://${deepLinkPath}`

      if (fallbackTimer.current) clearTimeout(fallbackTimer.current)
      fallbackTimer.current = setTimeout(() => {
        document.removeEventListener('visibilitychange', onVisibility)
        window.removeEventListener('pagehide', onPageHide)
        if (!leftPage && !document.hidden) {
          window.location.href = storeUrl
        }
      }, 1600)
      return
    }

    // Desktop or mismatched platform: open the store listing in a new tab.
    window.open(storeUrl, '_blank', 'noopener,noreferrer')
  }

  const productImage =
    product.primary_image?.image_url ||
    (product as any).primary_image_url ||
    'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&auto=format&fit=crop&q=80'

  const recommended: StoreTarget | null =
    platform === 'android' ? 'play' : platform === 'ios' ? 'app' : null

  const stores: {
    id: StoreTarget
    eyebrow: string
    label: string
    icon: React.ReactNode
  }[] = [
    {
      id: 'play',
      eyebrow: 'Get it on',
      label: 'Google Play',
      icon: (
        <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#4285F4" d="M3.6 1.8c-.3.4-.4.9-.4 1.5v17.4c0 .6.1 1.1.4 1.5l.1.1 9.7-9.8v-.2L3.7 1.7l-.1.1z" />
          <path fill="#FBBC04" d="M17.1 15.6l-3.7-3.7v-.2l3.7-3.7.1.1 4.4 2.5c1.2.7 1.2 1.9 0 2.6l-4.5 2.4z" />
          <path fill="#EA4335" d="M13.4 11.9L3.6 22.2c.5.5 1.3.6 2.1.1l11.4-6.4-3.7-4z" />
          <path fill="#34A853" d="M13.4 11.7l3.7-4L5.7 1.3c-.8-.5-1.6-.4-2.1.1l9.8 10.3z" />
        </svg>
      ),
    },
    {
      id: 'app',
      eyebrow: 'Download on the',
      label: 'App Store',
      icon: (
        <svg className="w-7 h-7 fill-white shrink-0" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8.92-2.85-.9.04-2 .6-2.65 1.36-.58.67-1.08 1.74-.95 2.77.99.08 2.05-.53 2.68-1.28z" />
        </svg>
      ),
    },
  ]

  // Put the device-matching store first on mobile
  const orderedStores = recommended === 'app' ? [...stores].reverse() : stores

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#020817]/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="buy-modal-title"
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-[#0A1E4A] via-[#061836] to-[#040E24] text-white shadow-[0_30px_80px_-20px_rgba(29,78,216,0.55)] animate-in zoom-in-95 slide-in-from-bottom-4 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient glows */}
        <div className="pointer-events-none absolute -top-24 -left-20 size-64 rounded-full bg-[#38BDF8]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 size-64 rounded-full bg-[#E11D48]/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#818CF8] to-transparent" />

        <div className="relative p-5 sm:p-6 space-y-4">
          {/* Header row: eyebrow + close */}
          <div className="flex items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2">
              <span className="inline-block size-2 rounded-full bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] animate-pulse" />
              <span className="text-[11px] font-bold tracking-[0.22em] uppercase bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent">
                Peers Store Checkout
              </span>
            </div>
            <button
              id="buy-modal-close"
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="group inline-flex size-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-all duration-300 hover:border-white/30 hover:bg-white/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#818CF8]"
            >
              <X className="w-4 h-4 transition-transform duration-300 group-hover:rotate-90" />
            </button>
          </div>

          {/* Product preview */}
          <div className="flex items-center gap-4 p-3 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm">
            <div className="size-14 rounded-xl overflow-hidden bg-white/10 ring-1 ring-white/10 shrink-0">
              <img src={productImage} alt={product.name} className="size-full object-cover" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#FB7185] block">
                Ready to Redeem
              </span>
              <h4 className="font-serif font-bold text-white text-sm sm:text-base leading-snug line-clamp-2">
                {product.name}
              </h4>
              <div className="mt-1.5 inline-flex items-center gap-1.5 rounded-full border border-amber-300/30 bg-amber-400/10 px-2.5 py-0.5 text-xs font-bold text-amber-200">
                <img
                  src="/api/store?mode=coin-image"
                  alt=""
                  className="size-4 object-contain rounded-full"
                />
                <span>{Number(product.coin_price).toLocaleString('en-IN')} Coins</span>
              </div>
            </div>
          </div>

          {/* Headline */}
          <div className="text-center space-y-1.5">
            <h3
              id="buy-modal-title"
              className="text-xl sm:text-2xl font-serif font-bold tracking-tight leading-tight"
            >
              Complete it in the{' '}
              <span className="bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent">
                Peers Unity App
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300/90 max-w-sm mx-auto leading-relaxed">
              Tap your store below. If the app is installed, we&apos;ll open this item
              directly — otherwise you&apos;ll go straight to the download page.
            </p>
          </div>

          {/* Smart store buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {orderedStores.map((store) => {
              const isRecommended = recommended === store.id
              const isOpening = opening === store.id
              return (
                <button
                  key={store.id}
                  id={`buy-modal-${store.id === 'play' ? 'google-play' : 'app-store'}`}
                  type="button"
                  onClick={() => handleStoreTap(store.id)}
                  className={`relative rounded-2xl p-[1px] outline-none focus:outline-none ${
                    isRecommended
                      ? 'bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] shadow-[0_10px_30px_-10px_rgba(129,140,248,0.7)]'
                      : 'bg-transparent'
                  }`}
                >
                  <span className="flex items-center gap-3 rounded-[15px] bg-[#0D1117] px-4 py-3">
                    {isOpening ? (
                      <Loader2 className="w-7 h-7 shrink-0 animate-spin text-[#818CF8]" />
                    ) : (
                      store.icon
                    )}
                    <span className="text-left min-w-0 flex-1">
                      <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400 leading-none">
                        {isOpening ? 'Opening…' : store.eyebrow}
                      </span>
                      <span className="block text-sm font-bold text-white leading-tight mt-1">
                        {store.label}
                      </span>
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-500" />
                  </span>
                  {isRecommended && (
                    <span className="absolute -top-2.5 left-4 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white shadow">
                      Your device
                    </span>
                  )}
                </button>
              )
            })}
          </div>

          {/* Context helper */}
          <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-2 shrink-0">
              {platform === 'desktop' ? (
                <Monitor className="w-4 h-4 text-[#38BDF8]" />
              ) : (
                <Smartphone className="w-4 h-4 text-[#38BDF8]" />
              )}
            </div>
            {platform === 'desktop' ? (
              <p className="text-xs text-slate-400 leading-relaxed">
                <span className="font-semibold text-slate-200">On desktop?</span> The store opens in a new
                tab — install on your phone, then find this item in{' '}
                <span className="font-semibold text-slate-200">Peers Store</span> inside the app.
              </p>
            ) : (
              <p className="text-xs text-slate-400 leading-relaxed">
                <span className="font-semibold text-slate-200">One tap, no hassle.</span> Coin deductions and
                deliveries are handled securely inside the verified Peers Unity app.
              </p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="relative flex items-center justify-between gap-3 border-t border-white/10 bg-black/20 px-5 sm:px-6 py-3 text-[11px] text-slate-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            100% Governed Peer Transaction
          </span>
          <span className="flex items-center gap-1 text-slate-500">
            <Lock className="w-3 h-3" />
            Secure
          </span>
        </div>
      </div>
    </div>
  )
}
