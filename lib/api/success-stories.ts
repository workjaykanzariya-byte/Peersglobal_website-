export interface SuccessStory {
  id: string;
  personName: string;
  designation?: string;
  company?: string;
  storyTitle?: string;
  quote?: string;
  youtubeUrl?: string;
  youtubeVideoId?: string;
  youtubeEmbedUrl?: string;
  coverImageUrl: string;
  hasCustomCover?: boolean;
  youtubeThumbnailUrl?: string;
  sortOrder?: number;
  isActive?: boolean;
  createdAt?: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://peersunity.com';

// Extract YouTube Video ID from any standard format
export function extractYoutubeId(url?: string): string | null {
  if (!url) return null;
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/i
  );
  return match ? match[1] : null;
}

// Generate secure nocookie embed URL
export function buildYoutubeEmbedUrl(videoIdOrUrl?: string): string {
  if (!videoIdOrUrl) return '';
  const videoId = videoIdOrUrl.length === 11 && !videoIdOrUrl.includes('/')
    ? videoIdOrUrl
    : extractYoutubeId(videoIdOrUrl) || videoIdOrUrl;

  return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
}

// Generate thumbnail URL
export function buildYoutubeThumbnailUrl(videoIdOrUrl?: string): string {
  if (!videoIdOrUrl) return '/images/circle-founder-hero.jpg';
  const videoId = videoIdOrUrl.length === 11 && !videoIdOrUrl.includes('/')
    ? videoIdOrUrl
    : extractYoutubeId(videoIdOrUrl) || videoIdOrUrl;

  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

// Normalize incoming API objects (handling both camelCase and snake_case)
export function normalizeStory(item: any): SuccessStory {
  const youtubeUrl = item.youtubeUrl || item.youtube_url || '';
  const videoId = item.youtubeVideoId || item.youtube_video_id || extractYoutubeId(youtubeUrl) || 'dQw4w9WgXcQ';
  const embedUrl = item.youtubeEmbedUrl || item.youtube_embed_url || buildYoutubeEmbedUrl(videoId);
  const thumbUrl = item.youtubeThumbnailUrl || item.youtube_thumbnail_url || buildYoutubeThumbnailUrl(videoId);
  
  const cover = item.coverImageUrl || item.cover_image_url || thumbUrl;

  return {
    id: String(item.id || Math.random().toString(36).substring(2)),
    personName: item.personName || item.person_name || 'Global Leader',
    designation: item.designation || 'Founder & CEO',
    company: item.company || 'Peers Global Circle',
    storyTitle: item.storyTitle || item.story_title || 'Collaborative Growth Journey',
    quote: item.quote || 'Connecting with peers across the globe transformed our strategic roadmap and business outcomes.',
    youtubeUrl: youtubeUrl,
    youtubeVideoId: videoId,
    youtubeEmbedUrl: embedUrl,
    coverImageUrl: cover,
    hasCustomCover: Boolean(item.hasCustomCover ?? item.has_custom_cover ?? (cover !== thumbUrl)),
    youtubeThumbnailUrl: thumbUrl,
    sortOrder: typeof item.sortOrder === 'number' ? item.sortOrder : (item.sort_order ?? 0),
    isActive: item.isActive ?? item.is_active ?? true,
    createdAt: item.createdAt || item.created_at || new Date().toISOString(),
  };
}

// High-fidelity fallback stories for the collage when API is cold or setting up
export const FALLBACK_STORIES: SuccessStory[] = [
  {
    id: 'story-1',
    personName: 'Vikram Singhania',
    designation: 'Chief Executive Officer',
    company: 'Apex Global Logistics',
    storyTitle: 'Scaling Cross-Border Logistics by 400%',
    quote: 'Finalized automated manifest clearance and closed a ₹4.2 Cr Joint Venture in under 6 weeks with fellow members.',
    youtubeUrl: 'https://www.youtube.com/watch?v=ScMzIvxBSi4',
    youtubeVideoId: 'ScMzIvxBSi4',
    youtubeEmbedUrl: 'https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?autoplay=1&rel=0',
    coverImageUrl: '/images/peers-avatars/amit-desai.jpg',
    hasCustomCover: true,
    youtubeThumbnailUrl: 'https://img.youtube.com/vi/ScMzIvxBSi4/hqdefault.jpg',
    sortOrder: 1,
    isActive: true,
  },
  {
    id: 'story-2',
    personName: 'Sarah Jenkins',
    designation: 'Founder & Managing Director',
    company: 'Nexus Healthcare AI',
    storyTitle: 'Securing Tier-1 Hospital Partnerships Across Asia',
    quote: 'Connecting with enterprise peers transformed how we secure tier-1 hospital contracts across Southeast Asia.',
    youtubeUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
    youtubeVideoId: 'ysz5S6PUM-U',
    youtubeEmbedUrl: 'https://www.youtube-nocookie.com/embed/ysz5S6PUM-U?autoplay=1&rel=0',
    coverImageUrl: '/images/peers-avatars/anand-sharma.jpg',
    hasCustomCover: true,
    youtubeThumbnailUrl: 'https://img.youtube.com/vi/ysz5S6PUM-U/hqdefault.jpg',
    sortOrder: 2,
    isActive: true,
  },
  {
    id: 'story-3',
    personName: 'Rajesh K. Mehta',
    designation: 'Managing Director',
    company: 'Kavita Infrastructure Ltd',
    storyTitle: 'From Regional Builder to Multi-State Developer',
    quote: 'Peers Global gave me the boardroom perspective and peer trust needed to execute complex infrastructure projects.',
    youtubeUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
    youtubeVideoId: 'jNQXAC9IVRw',
    youtubeEmbedUrl: 'https://www.youtube-nocookie.com/embed/jNQXAC9IVRw?autoplay=1&rel=0',
    coverImageUrl: '/images/peers-avatars/avatar_corp_one.jpg',
    hasCustomCover: true,
    youtubeThumbnailUrl: 'https://img.youtube.com/vi/jNQXAC9IVRw/hqdefault.jpg',
    sortOrder: 3,
    isActive: true,
  },
  {
    id: 'story-4',
    personName: 'Elena Rostova',
    designation: 'Partner & Chief Product Officer',
    company: 'Vanguard FinTech',
    storyTitle: 'Unlocking Cross-Border Peer Advisory',
    quote: 'Whenever we face strategic bottlenecks, one call to my circle peers gives clarity that takes consultants months.',
    youtubeUrl: 'https://www.youtube.com/watch?v=L_LUpnjgPso',
    youtubeVideoId: 'L_LUpnjgPso',
    youtubeEmbedUrl: 'https://www.youtube-nocookie.com/embed/L_LUpnjgPso?autoplay=1&rel=0',
    coverImageUrl: '/images/peers-avatars/avatar_corp_two.jpg',
    hasCustomCover: true,
    youtubeThumbnailUrl: 'https://img.youtube.com/vi/L_LUpnjgPso/hqdefault.jpg',
    sortOrder: 4,
    isActive: true,
  },
  {
    id: 'story-5',
    personName: 'Deepak Chhabra',
    designation: 'Co-Founder & COO',
    company: 'Optima Precision Engineering',
    storyTitle: 'Industrial Collaboration & Supply Excellence',
    quote: 'The collaborative ecosystem eliminated our supplier friction and helped us onboard 18 industrial clients.',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    youtubeVideoId: 'dQw4w9WgXcQ',
    youtubeEmbedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0',
    coverImageUrl: '/images/peers-avatars/avatar_corp_three.jpg',
    hasCustomCover: true,
    youtubeThumbnailUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
    sortOrder: 5,
    isActive: true,
  },
  {
    id: 'story-6',
    personName: 'Ananya Singhania',
    designation: 'Group Chairperson',
    company: 'Singhania Heritage Retail',
    storyTitle: 'Modernizing 4 Decades of Retail Legacy',
    quote: 'Transitioning to omnichannel was seamless thanks to monthly deep-dives with digital retail pioneers in our circle.',
    youtubeUrl: 'https://www.youtube.com/watch?v=ScMzIvxBSi4',
    youtubeVideoId: 'ScMzIvxBSi4',
    youtubeEmbedUrl: 'https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?autoplay=1&rel=0',
    coverImageUrl: '/images/peers-avatars/avatar_corp_four.jpg',
    hasCustomCover: true,
    youtubeThumbnailUrl: 'https://img.youtube.com/vi/ScMzIvxBSi4/hqdefault.jpg',
    sortOrder: 6,
    isActive: true,
  },
  {
    id: 'story-7',
    personName: 'Harsh Patel',
    designation: 'Founder & CEO',
    company: 'Zenith Solar Energy',
    storyTitle: 'Syndicating Clean Energy EPC Contracts',
    quote: 'We forged 3 strategic consortiums within 90 days. The trust dividend of Peers Global is real and measurable.',
    youtubeUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
    youtubeVideoId: 'ysz5S6PUM-U',
    youtubeEmbedUrl: 'https://www.youtube-nocookie.com/embed/ysz5S6PUM-U?autoplay=1&rel=0',
    coverImageUrl: '/images/peers-avatars/avatar_corp_five.jpg',
    hasCustomCover: true,
    youtubeThumbnailUrl: 'https://img.youtube.com/vi/ysz5S6PUM-U/hqdefault.jpg',
    sortOrder: 7,
    isActive: true,
  },
  {
    id: 'story-8',
    personName: 'Meera Nambiar',
    designation: 'Executive Director',
    company: 'Aura Wellness & Hospitality',
    storyTitle: 'Scaling Boutique Hospitality Across 5 States',
    quote: 'Having fellow founders who hold you accountable with empathy is the single biggest growth accelerator.',
    youtubeUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
    youtubeVideoId: 'jNQXAC9IVRw',
    youtubeEmbedUrl: 'https://www.youtube-nocookie.com/embed/jNQXAC9IVRw?autoplay=1&rel=0',
    coverImageUrl: '/images/peers-avatars/avatar_corp_six.jpg',
    hasCustomCover: true,
    youtubeThumbnailUrl: 'https://img.youtube.com/vi/jNQXAC9IVRw/hqdefault.jpg',
    sortOrder: 8,
    isActive: true,
  },
  {
    id: 'story-9',
    personName: 'Rohan Talwar',
    designation: 'Managing Partner',
    company: 'Elevate Ventures',
    storyTitle: 'Collaborative Angel Syndicates',
    quote: 'Co-investing with verified circle members provides due diligence speed that traditional networks cannot match.',
    youtubeUrl: 'https://www.youtube.com/watch?v=L_LUpnjgPso',
    youtubeVideoId: 'L_LUpnjgPso',
    youtubeEmbedUrl: 'https://www.youtube-nocookie.com/embed/L_LUpnjgPso?autoplay=1&rel=0',
    coverImageUrl: '/images/peers-avatars/avatar_corp_seven.jpg',
    hasCustomCover: true,
    youtubeThumbnailUrl: 'https://img.youtube.com/vi/L_LUpnjgPso/hqdefault.jpg',
    sortOrder: 9,
    isActive: true,
  },
  {
    id: 'story-10',
    personName: 'Priya Sundaram',
    designation: 'Founder & CEO',
    company: 'BioCura Labs',
    storyTitle: 'Fast-Tracking International Biotech Approvals',
    quote: 'A circle member introduced us directly to Japanese regulatory partners, shaving 14 months off our timeline.',
    youtubeUrl: 'https://www.youtube.com/watch?v=ScMzIvxBSi4',
    youtubeVideoId: 'ScMzIvxBSi4',
    youtubeEmbedUrl: 'https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?autoplay=1&rel=0',
    coverImageUrl: '/images/peers-avatars/avatar_corp_eight.jpg',
    hasCustomCover: true,
    youtubeThumbnailUrl: 'https://img.youtube.com/vi/ScMzIvxBSi4/hqdefault.jpg',
    sortOrder: 10,
    isActive: true,
  },
  {
    id: 'story-11',
    personName: 'Arjun Verma',
    designation: 'Managing Director',
    company: 'Verma Cold Chain Logistics',
    storyTitle: 'Expanding Pan-India Temperature-Controlled Hubs',
    quote: 'Peers Global is the only forum where enterprise founders talk numbers, real challenges, and genuine collaboration.',
    youtubeUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
    youtubeVideoId: 'ysz5S6PUM-U',
    youtubeEmbedUrl: 'https://www.youtube-nocookie.com/embed/ysz5S6PUM-U?autoplay=1&rel=0',
    coverImageUrl: '/images/peers-avatars/avatar_corp_nine.jpg',
    hasCustomCover: true,
    youtubeThumbnailUrl: 'https://img.youtube.com/vi/ysz5S6PUM-U/hqdefault.jpg',
    sortOrder: 11,
    isActive: true,
  },
  {
    id: 'story-12',
    personName: 'Nandini Joshi',
    designation: 'Co-Founder & Chief Technology Officer',
    company: 'Krypton Cyber Defense',
    storyTitle: 'Protecting Critical Enterprise Infrastructure',
    quote: 'The executive relationships forged here opened doors to CXO boards that cold outreach could never reach.',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    youtubeVideoId: 'dQw4w9WgXcQ',
    youtubeEmbedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0',
    coverImageUrl: '/images/peers-avatars/avatar_corp_ten.jpg',
    hasCustomCover: true,
    youtubeThumbnailUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg',
    sortOrder: 12,
    isActive: true,
  },
];

// Fetch active success stories with multi-level endpoint resilience
export async function fetchSuccessStories(limit = 12): Promise<SuccessStory[]> {
  const endpoints = [
    // 1. Next.js internal proxy route
    `/api/web-success-stories?limit=${limit}`,
    // 2. Production or custom backend URL
    `${API_BASE_URL}/api/v1/web/success-stories?limit=${limit}`,
    // 3. Alternative route prefix
    `${API_BASE_URL}/api/v1/web-success-stories?limit=${limit}`,
    // 4. Local dev backend fallback
    `http://localhost:8000/api/v1/web/success-stories?limit=${limit}`,
  ];

  for (const endpoint of endpoints) {
    try {
      const res = await fetch(endpoint, {
        headers: { Accept: 'application/json' },
        cache: 'no-store',
        signal: AbortSignal.timeout(4000),
      });

      if (res.ok) {
        const json = await res.json();
        const rawList = Array.isArray(json.data)
          ? json.data
          : Array.isArray(json)
          ? json
          : json.items || [];

        if (Array.isArray(rawList) && rawList.length > 0) {
          const stories = rawList
            .map(normalizeStory)
            .filter((s) => s.isActive)
            .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));

          if (stories.length > 0) {
            return stories.slice(0, limit);
          }
        }
      }
    } catch {
      // Continue to next endpoint
    }
  }

  // Gracefully fallback to curated leader stories
  return FALLBACK_STORIES.slice(0, limit);
}
