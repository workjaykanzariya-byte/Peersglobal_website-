/**
 * Web Content API Service
 * Handles Dynamic Gallery Photos, Curated Collections, and Podcast & Media integration.
 * Connects to Unity App backend REST APIs (Dev Server first, then Production).
 */

const RAW_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://peersunity.com'
const BASE_URL = RAW_BASE_URL.replace(/\/+$/, '')

export interface ApiGalleryPhoto {
  id: string
  title: string
  category: string
  city: string
  circle: string
  year: string
  image: string
  caption: string
  sort_order?: number
}

export interface ApiGalleryCollection {
  id: string
  title: string
  subtitle?: string
  categoryName?: string
  image?: string
  cover_image?: string
  total_items?: number
  items_count?: number
  is_active?: boolean
}

export interface ApiPodcastGuest {
  name: string
  title: string
  avatar: string
}

export interface ApiPodcastEpisode {
  id: string
  title: string
  subtitle: string
  tag: string
  duration: string
  image: string
  guest: ApiPodcastGuest
  showNotes: string[]
  spotifyUrl?: string
  youtubeUrl?: string
  youtubeVideoId?: string
  channel?: string
  type?: string
  is_featured?: boolean
}

export interface GalleryPhotosParams {
  category?: string
  city?: string
  circle?: string
  year?: string
  search?: string
  limit?: number
  page?: number
}

export interface PodcastEpisodesParams {
  type?: string
  channel?: string
  featured?: boolean
  search?: string
  limit?: number
  page?: number
}

const DEFAULT_HEADERS = {
  Accept: 'application/json',
}

/**
 * Helper to extract YouTube video ID from various YouTube URL formats
 */
export function extractYoutubeVideoId(url?: string): string | undefined {
  if (!url) return undefined
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  return match && match[2].length === 11 ? match[2] : undefined
}

/**
 * Resolves full image URL by prefixing backend domain if relative path is provided.
 */
export function resolveImageUrl(imagePath?: string): string {
  if (!imagePath) return ''
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath
  }
  const prefix = BASE_URL || 'https://peersunity.com'
  return `${prefix}${imagePath.startsWith('/') ? '' : '/'}${imagePath}`
}

export const getFullImageUrl = resolveImageUrl

/**
 * Normalizes raw API response item to ApiGalleryPhoto
 */
function normalizeGalleryPhoto(raw: any, index: number): ApiGalleryPhoto {
  const rawPath =
    raw.image ||
    raw.imageUrl ||
    raw.mediaUrl ||
    raw.image_url ||
    raw.photo_url ||
    raw.url ||
    ''

  const image = resolveImageUrl(rawPath)

  return {
    id: String(raw.id || `photo-${index + 1}`),
    title: raw.title || raw.caption || 'Gallery Photo',
    category: raw.category || raw.event_category || 'Gallery',
    city: raw.city || '',
    circle: raw.circle || '',
    year: String(raw.year || ''),
    image,
    caption: raw.caption || raw.description || raw.title || '',
    sort_order: raw.sortOrder ?? raw.sort_order ?? index,
  }
}

/**
 * Normalizes raw API response item to ApiPodcastEpisode
 */
function normalizePodcastEpisode(raw: any, index: number): ApiPodcastEpisode {
  const youtubeUrl = raw.youtubeUrl || raw.youtube_url || ''
  const youtubeVideoId =
    raw.youtubeVideoId ||
    raw.youtube_video_id ||
    extractYoutubeVideoId(youtubeUrl)

  const rawNotes = raw.showNotes ?? raw.show_notes ?? []
  const showNotes: string[] = Array.isArray(rawNotes)
    ? rawNotes
    : typeof rawNotes === 'string'
    ? rawNotes.split('\n').filter(Boolean)
    : []

  const image =
    raw.image ||
    raw.image_url ||
    raw.cover_image ||
    (youtubeVideoId ? `https://img.youtube.com/vi/${youtubeVideoId}/hqdefault.jpg` : '')

  return {
    id: String(raw.id || `ep-${index + 1}`),
    title: raw.title || 'Peers Global Episode',
    subtitle: raw.subtitle || raw.description || '',
    tag: raw.tag || raw.category || 'COMMUNITY',
    duration: raw.duration || '45 mins',
    image,
    guest: {
      name: raw.guest?.name || raw.guest_name || 'Featured Leader',
      title: raw.guest?.title || raw.guest_title || 'Community Member',
      avatar: raw.guest?.avatar || raw.guest_avatar || '',
    },
    showNotes,
    spotifyUrl: raw.spotifyUrl || raw.spotify_url || '',
    youtubeUrl,
    youtubeVideoId,
    channel: raw.channel || 'podcast',
    type: raw.type || 'podcast',
    is_featured: Boolean(raw.is_featured ?? raw.isFeatured ?? true),
  }
}

/**
 * Fetch dynamic community gallery photos with optional filters
 * Endpoint: GET /api/v1/web/gallery
 */
export async function fetchGalleryPhotos(params?: GalleryPhotosParams): Promise<ApiGalleryPhoto[]> {
  try {
    const url = new URL(`${BASE_URL}/api/v1/web/gallery`)

    if (params) {
      if (params.category && !params.category.startsWith('All')) {
        url.searchParams.append('category', params.category)
      }
      if (params.city && !params.city.startsWith('All')) {
        url.searchParams.append('city', params.city)
      }
      if (params.circle && !params.circle.startsWith('All')) {
        url.searchParams.append('circle', params.circle)
      }
      if (params.year && !params.year.startsWith('All')) {
        url.searchParams.append('year', params.year)
      }
      if (params.search && params.search.trim()) {
        url.searchParams.append('search', params.search.trim())
      }
      if (params.limit) {
        url.searchParams.append('limit', String(params.limit))
      }
      if (params.page) {
        url.searchParams.append('page', String(params.page))
      }
    }

    const res = await fetch(url.toString(), {
      headers: DEFAULT_HEADERS,
      cache: 'no-store',
    })

    if (!res.ok) {
      console.warn(`Gallery fetch returned status ${res.status} (${res.statusText}) from ${url.toString()}`)
      return []
    }

    const json = await res.json()
    const items = Array.isArray(json?.data) ? json.data : Array.isArray(json) ? json : []

    return items.map((item: any, idx: number) => normalizeGalleryPhoto(item, idx))
  } catch (error) {
    console.warn('Failed to fetch gallery photos from backend, falling back to static collection:', error)
    return []
  }
}

/**
 * Fetch Curated Collections
 * Endpoint: GET /api/v1/web/gallery/collections
 */
export async function fetchCuratedCollections(): Promise<ApiGalleryCollection[]> {
  try {
    const url = `${BASE_URL}/api/v1/web/gallery/collections`
    const res = await fetch(url, {
      headers: DEFAULT_HEADERS,
      cache: 'no-store',
    })

    if (!res.ok) return []

    const json = await res.json()
    const items = Array.isArray(json?.data) ? json.data : Array.isArray(json) ? json : []

    return items.map((col: any) => ({
      id: String(col.id),
      title: col.title || '',
      subtitle: col.subtitle || '',
      categoryName: col.categoryName || col.category || col.title,
      image: col.image || col.cover_image || '',
      cover_image: col.cover_image || col.image || '',
      total_items: col.total_items ?? col.items_count ?? 0,
      items_count: col.items_count ?? col.total_items ?? 0,
      is_active: col.is_active ?? true,
    }))
  } catch (error) {
    console.warn('Failed to fetch curated collections:', error)
    return []
  }
}

/**
 * Fetch Podcast & Media Episodes with optional filters
 * Endpoint: GET /api/v1/web/podcasts
 */
export async function fetchPodcastEpisodes(params?: PodcastEpisodesParams): Promise<ApiPodcastEpisode[]> {
  try {
    const url = new URL(`${BASE_URL}/api/v1/web/podcasts`)

    if (params) {
      if (params.type) url.searchParams.append('type', params.type)
      if (params.channel) url.searchParams.append('channel', params.channel)
      if (params.featured !== undefined) url.searchParams.append('featured', String(params.featured))
      if (params.search && params.search.trim()) url.searchParams.append('search', params.search.trim())
      if (params.limit) url.searchParams.append('limit', String(params.limit))
      if (params.page) url.searchParams.append('page', String(params.page))
    }

    const res = await fetch(url.toString(), {
      headers: DEFAULT_HEADERS,
      cache: 'no-store',
    })

    if (!res.ok) {
      console.warn(`Podcasts fetch returned status ${res.status} (${res.statusText}) from ${url.toString()}`)
      return []
    }

    const json = await res.json()
    const items = Array.isArray(json?.data) ? json.data : Array.isArray(json) ? json : []

    return items.map((item: any, idx: number) => normalizePodcastEpisode(item, idx))
  } catch (error) {
    console.warn('Failed to fetch podcasts from backend, falling back to static episodes:', error)
    return []
  }
}

/**
 * Fetch Featured Episodes Only
 * Endpoint: GET /api/v1/web/podcasts/featured?limit=6
 */
export async function fetchFeaturedEpisodes(limit: number = 6): Promise<ApiPodcastEpisode[]> {
  try {
    const url = `${BASE_URL}/api/v1/web/podcasts/featured?limit=${limit}`
    const res = await fetch(url, {
      headers: DEFAULT_HEADERS,
      cache: 'no-store',
    })

    if (res.ok) {
      const json = await res.json()
      const items = Array.isArray(json?.data) ? json.data : Array.isArray(json) ? json : []
      if (items.length > 0) {
        return items.map((item: any, idx: number) => normalizePodcastEpisode(item, idx))
      }
    }

    // Fallback to fetchPodcastEpisodes with featured=true
    return await fetchPodcastEpisodes({ featured: true, limit })
  } catch (error) {
    console.warn('Failed to fetch featured podcasts, falling back:', error)
    return []
  }
}
