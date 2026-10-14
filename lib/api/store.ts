export interface StoreCategory {
  id: string
  name: string
  slug: string
  description: string | null
  image_url: string | null
  products_count: number
  is_active: boolean
  sort_order?: number
}

export interface ProductImage {
  id: string
  product_id?: string
  image_url: string
  alt_text?: string | null
  is_primary?: boolean
  sort_order?: number
}

export interface ProductVariant {
  id: string
  product_id?: string
  sku: string
  name: string
  attributes?: Array<{ name: string; value: string }>
  coin_price: number
  price_coins?: number
  stock_qty: number
  stock_quantity?: number
  is_active: boolean
  status?: string
}

export interface StoreProduct {
  id: string
  sku: string
  name: string
  slug: string
  category_id: string
  short_description: string | null
  description: string | null
  brand: string | null
  status: string
  is_featured: boolean
  coin_price: number
  price_coins?: number
  stock_qty: number
  type: 'PHYSICAL' | 'DIGITAL' | 'MEMBERSHIP' | string
  unit_cost_inr?: string | null
  mrp?: string | number | null
  delivery_modes?: string[]
  max_quantity_per_order?: number
  min_quantity_per_order?: number
  return_allowed?: boolean
  return_window_days?: number
  customised?: boolean
  primary_image?: ProductImage | null
  images?: ProductImage[]
  category?: StoreCategory
  variants?: ProductVariant[]
}

export interface StoreBanner {
  id: string
  title: string
  subtitle: string | null
  image_url: string
  link_type?: string | null
  link_value?: string | null
  action_type?: string | null
  action_value?: string | null
  is_active: boolean
}

export interface StoreConfig {
  store_enabled: boolean
  delivery_minimum_coins: number
  min_order_total_coins: number
  min_member_coins_to_buy: number
  pickup_available: boolean
  return_window_days: number
  banners?: StoreBanner[]
}

export interface StoreProductsResponse {
  current_page: number
  data: StoreProduct[]
  total: number
  last_page: number
  per_page: number
}

// The store catalogue is served from the Unity backend that holds the product
// inventory. Override with NEXT_PUBLIC_STORE_API_BASE_URL when the production
// store inventory is ready (e.g. https://peersunity.com).
const API_BASE_URL =
  process.env.NEXT_PUBLIC_STORE_API_BASE_URL ||
  'https://peersunity.com';

const API_VERSION_BASE = `${API_BASE_URL.replace(/\/+$/, '')}/api/v1`;

const DEFAULT_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

/**
 * Fetch all active categories
 */
export async function fetchStoreCategories(): Promise<StoreCategory[]> {
  try {
    const res = await fetch(`${API_VERSION_BASE}/store/categories`, {
      headers: DEFAULT_HEADERS,
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    return json.success && Array.isArray(json.data) ? json.data : [];
  } catch (err) {
    console.error('Error fetching store categories:', err);
    return [];
  }
}

/**
 * Fetch store products with filtering, search, pagination, and sorting
 */
export async function fetchStoreProducts(params?: {
  page?: number
  per_page?: number
  category_id?: string
  type?: string
  min_coins?: number
  max_coins?: number
  sort?: string
  search?: string
}): Promise<StoreProductsResponse> {
  try {
    const query = new URLSearchParams();
    if (params?.page) query.set('page', String(params.page));
    if (params?.per_page) query.set('per_page', String(params.per_page));
    if (params?.category_id && params.category_id !== 'all') query.set('category_id', params.category_id);
    if (params?.type) query.set('type', params.type);
    if (params?.min_coins) query.set('min_coins', String(params.min_coins));
    if (params?.max_coins) query.set('max_coins', String(params.max_coins));
    if (params?.sort) query.set('sort', params.sort);
    if (params?.search) query.set('search', params.search);

    const url = `${API_VERSION_BASE}/store/products${query.toString() ? `?${query.toString()}` : ''}`;
    const res = await fetch(url, {
      headers: DEFAULT_HEADERS,
      next: { revalidate: 30 },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    if (json.success && json.data) {
      if (Array.isArray(json.data.data)) {
        return json.data;
      } else if (Array.isArray(json.data)) {
        return {
          current_page: 1,
          data: json.data,
          total: json.data.length,
          last_page: 1,
          per_page: json.data.length,
        };
      }
    }
    return { current_page: 1, data: [], total: 0, last_page: 1, per_page: 20 };
  } catch (err) {
    console.error('Error fetching store products:', err);
    return { current_page: 1, data: [], total: 0, last_page: 1, per_page: 20 };
  }
}

/**
 * Search products with query keyword
 */
export async function searchStoreProducts(q: string, page = 1, per_page = 20): Promise<StoreProduct[]> {
  try {
    const query = new URLSearchParams({ q, page: String(page), per_page: String(per_page) });
    const res = await fetch(`${API_VERSION_BASE}/store/search?${query.toString()}`, {
      headers: DEFAULT_HEADERS,
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    return json.success && Array.isArray(json.data) ? json.data : [];
  } catch (err) {
    console.error('Error searching store products:', err);
    return [];
  }
}

/**
 * Fetch featured products for the storefront homepage
 */
export async function fetchFeaturedStoreProducts(): Promise<StoreProduct[]> {
  try {
    const res = await fetch(`${API_VERSION_BASE}/store/products/featured`, {
      headers: DEFAULT_HEADERS,
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    return json.success && Array.isArray(json.data) ? json.data : [];
  } catch (err) {
    console.error('Error fetching featured store products:', err);
    return [];
  }
}

/**
 * Fetch product details by ID
 */
export async function fetchStoreProductDetails(id: string): Promise<StoreProduct | null> {
  try {
    const res = await fetch(`${API_VERSION_BASE}/store/products/${id}`, {
      headers: DEFAULT_HEADERS,
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    return json.success && json.data ? json.data : null;
  } catch (err) {
    console.error(`Error fetching product details for ${id}:`, err);
    return null;
  }
}

/**
 * Fetch store configuration and banners
 */
export async function fetchStoreConfig(): Promise<StoreConfig | null> {
  try {
    const res = await fetch(`${API_VERSION_BASE}/store/config`, {
      headers: DEFAULT_HEADERS,
      next: { revalidate: 120 },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    return json.success && json.data ? json.data : null;
  } catch (err) {
    console.error('Error fetching store config:', err);
    return null;
  }
}
