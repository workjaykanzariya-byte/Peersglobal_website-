const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://peersunity.com';
const MEMBERS_TOKEN =
  process.env.NEXT_PUBLIC_MEMBERS_API_TOKEN ||
  '302|cO0VMR2dmr9j8c3JtIU9dfkuZfSfvzaCCF1GVxJAdc6fdd2d';

export interface PeerMemberProfile {
  id: string;
  slug?: string | null;
  public_profile_slug: string | null;
  name: string;
  first_name: string | null;
  last_name: string | null;
  display_name?: string | null;
  designation: string | null;
  company: string | null;
  company_name: string | null;
  email: string | null;
  mobile: string | null;
  phone?: string | null;
  city: string | null;
  city_name?: string | null;
  photo: string | null;
  profile_image_url: string | null;
  profile_photo_url?: string | null;
  cover_photo_url: string | null;
  membership_status: string | null;
  membership_status_label: string | null;
  membership_expiry?: string | null;
  active_circle_name: string | null;
  active_circle?: {
    id: string;
    name: string;
  } | null;
  active_circle_id?: string | null;
  circles?: Array<{
    circle_id: string;
    circle_name: string;
    role: string;
    status: string;
  }>;
  circles_count?: number;
  bio: string | null;
  business_description: string | null;
  experience_summary?: string | null;
  experience_years: string | number | null;
  business_type: string | null;
  industry_tags: string[];
  skills: string[];
  interests?: string[];
  social_links?: {
    linkedin?: string;
    facebook?: string;
    website?: string;
    twitter?: string;
    instagram?: string;
    [key: string]: string | undefined;
  } | null;
  social_media?: {
    linkedin?: string;
    facebook?: string;
    website?: string;
    twitter?: string;
    instagram?: string;
    [key: string]: string | undefined;
  } | null;
  website: string | null;
  status?: string | null;
  created_at?: string | null;
  medal_rank?: string | null;
  title?: string | null;
  coins_balance?: number;
}

function normalizeProfile(profile: PeerMemberProfile): PeerMemberProfile {
  // Normalize photo — API may return profile_photo_url instead of photo
  if (!profile.photo && profile.profile_photo_url) {
    profile.photo = profile.profile_photo_url;
  }
  if (!profile.photo && profile.profile_image_url) {
    profile.photo = profile.profile_image_url;
  }

  // Normalize social_links — API sometimes returns as social_media key
  if (!profile.social_links && profile.social_media) {
    profile.social_links = profile.social_media;
  }

  // Normalize city — API may return city_name
  if (!profile.city && profile.city_name) {
    profile.city = profile.city_name;
  }

  // Normalize company
  if (!profile.company && profile.company_name) {
    profile.company = profile.company_name;
  }

  // Normalize website from social_links
  if (!profile.website && profile.social_links?.website) {
    profile.website = profile.social_links.website;
  }

  // Ensure arrays are always arrays
  profile.industry_tags = Array.isArray(profile.industry_tags) ? profile.industry_tags : [];
  profile.skills = Array.isArray(profile.skills) ? profile.skills : [];
  profile.circles = Array.isArray(profile.circles) ? profile.circles : [];

  return profile;
}

/**
 * Fetch all members — used for directory listings and circle rosters.
 * Uses cache: 'no-store' to always load live data from peersunity.com.
 */
export async function getAllMembers(): Promise<PeerMemberProfile[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/members-with-circles`, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${MEMBERS_TOKEN}`,
      },
      cache: 'no-store',
      signal: AbortSignal.timeout(3500),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    const items: PeerMemberProfile[] =
      json.data?.items ?? json.data?.data ?? (Array.isArray(json.data) ? json.data : []);
    return Array.isArray(items) ? items.map(normalizeProfile) : [];
  } catch (error) {
    console.error('[members] getAllMembers error:', error);
    return [];
  }
}

/**
 * Fetch a single member profile by public_profile_slug or UUID.
 * Uses cache: 'no-store' so Next.js never serves a stale empty response.
 */
export async function getMemberProfile(slugOrId: string): Promise<PeerMemberProfile | null> {
  if (!slugOrId || slugOrId.trim() === '') return null;
  try {
    const url = `${API_BASE_URL}/api/v1/members-with-circles/${encodeURIComponent(slugOrId.trim())}`;
    console.log('[members] getMemberProfile →', url);
    const res = await fetch(url, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${MEMBERS_TOKEN}`,
      },
      cache: 'no-store',
      signal: AbortSignal.timeout(3500),
    });
    if (res.status === 404) {
      console.log('[members] 404 for slug:', slugOrId);
      return null;
    }
    if (!res.ok) {
      console.error(`[members] HTTP ${res.status} for slug: ${slugOrId}`);
      return null;
    }
    const json = await res.json();
    if (!json.data) return null;
    return normalizeProfile(json.data as PeerMemberProfile);
  } catch (error) {
    console.error(`[members] getMemberProfile error for "${slugOrId}":`, error);
    return null;
  }
}
