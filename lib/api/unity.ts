const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://peersunity.com';
const MEMBERS_TOKEN = process.env.NEXT_PUBLIC_MEMBERS_API_TOKEN || '302|cO0VMR2dmr9j8c3JtIU9dfkuZfSfvzaCCF1GVxJAdc6fdd2d';

// ==========================================
// 1. DYNAMIC EVENTS API
// ==========================================
export interface PeerEvent {
  event_id: string;
  occurrence_id: string | null;
  title: string;
  description: string | null;
  event_type: string | null;
  event_category: string | null;
  mode: 'in_person' | 'virtual' | 'hybrid' | string;
  start_at: string;
  end_at: string | null;
  formatted_start_at: string;
  status: string;
  registered_count: number;
  image_url: string | null;
  location: string | null;
  meeting_link: string | null;
  circle?: {
    id: string;
    name: string;
    slug: string;
    state_name: string | null;
  } | null;
}

export interface EventsResponse {
  today_events: PeerEvent[];
  live_events: PeerEvent[];
  upcoming_events: PeerEvent[];
  total: number;
}

export interface RegisterVisitorPayload {
  full_name: string;
  email: string;
  phone: string;
  company_name: string;
  city: string;
  designation?: string;
  source?: string;
}

export async function fetchEvents(status: 'all' | 'upcoming' | 'live' | 'today' = 'all'): Promise<PeerEvent[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/events/all?status=${status}`, {
      headers: { 'Accept': 'application/json' },
      next: { revalidate: 10 },
    });
    let apiEvents: PeerEvent[] = [];
    if (res.ok) {
      const json = await res.json();
      const data = json.data || json;
      apiEvents = [
        ...(data.live_events || []),
        ...(data.today_events || []),
        ...(data.upcoming_events || []),
        ...(data.past_events || []),
        ...(data.events || []),
      ];
    }

    // Default static/fallback events matching Unity portal (Realty One Meet, MSME One Meet) to ensure full continuity
    const defaultEvents: PeerEvent[] = [
      {
        event_id: 'realty-one-meet-2026',
        occurrence_id: 'realty-one-meet-occ-1',
        title: 'Realty One Meet',
        description: 'Exclusive real estate developer and infrastructure promoter networking and strategy session.',
        event_type: 'circle_event',
        event_category: 'Real Estate',
        mode: 'in_person',
        start_at: '2026-07-23T18:00:00.000000Z',
        end_at: '2026-07-23T21:00:00.000000Z',
        formatted_start_at: '23 Jul 2026 06:00 PM',
        status: 'completed',
        registered_count: 5,
        image_url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop',
        location: 'Peer House, Ahmedabad, Gujarat',
        meeting_link: null,
        circle: {
          id: 'realty-one-circle',
          name: 'Realty ONE',
          slug: 'realty-one',
          state_name: 'Gujarat',
        },
      },
      {
        event_id: 'msme-one-meet-2026',
        occurrence_id: 'msme-one-meet-occ-1',
        title: 'MSME One Meet',
        description: 'Cross-industry MSME leadership gathering focused on scaling supply chains and institutional funding.',
        event_type: 'circle_event',
        event_category: 'MSME & Industry',
        mode: 'in_person',
        start_at: '2026-07-14T08:00:00.000000Z',
        end_at: '2026-07-14T11:00:00.000000Z',
        formatted_start_at: '14 Jul 2026 08:00 AM',
        status: 'completed',
        registered_count: 3,
        image_url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop',
        location: 'Crowne Plaza, Ahmedabad, Gujarat',
        meeting_link: null,
        circle: {
          id: 'msme-one-circle',
          name: 'MSME ONE Ahmedabad',
          slug: 'msme-one',
          state_name: 'Gujarat',
        },
      },
    ];

    // Combine API events and default catalog, filtering duplicates by title/id
    const combinedMap = new Map<string, PeerEvent>();

    apiEvents.forEach((ev) => {
      if (ev.title) combinedMap.set(ev.title.toLowerCase().trim(), ev);
    });

    defaultEvents.forEach((ev) => {
      const key = ev.title.toLowerCase().trim();
      if (!combinedMap.has(key)) {
        combinedMap.set(key, ev);
      }
    });

    return Array.from(combinedMap.values());
  } catch (error) {
    console.error('Failed to fetch events:', error);
    return [];
  }
}

// Submit Visitor Event Registration
export async function registerVisitorForEvent(
  eventId: string,
  occurrenceId: string | null,
  payload: RegisterVisitorPayload
) {
  const targetOccurrenceId = occurrenceId || eventId;
  const res = await fetch(`${API_BASE_URL}/api/v1/public/events/${eventId}/occurrences/${targetOccurrenceId}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({ ...payload, source: 'visitor_web' }),
  });
  const json = await res.json();
  if (!res.ok) {
    let errorMsg = json.message || 'Registration failed';
    if (json.errors) {
      if (typeof json.errors === 'object') {
        errorMsg = Object.values(json.errors).flat().join(', ');
      }
    }
    throw new Error(errorMsg);
  }
  return json.data || json;
}

// ==========================================
// 2. DYNAMIC MEMBERS / PEERS DIRECTORY API
// ==========================================
export interface PeerMember {
  id: string;
  name: string;
  slug: string | null;
  mobile: string | null;
  photo: string | null;
  designation: string | null;
  company: string | null;
  email: string | null;
  active_circle_name: string | null;
  address: string | null;
  website: string | null;
  business_description: string | null;
  social_media?: any;
}

export async function fetchMembers(): Promise<PeerMember[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/members-with-circles`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${MEMBERS_TOKEN}`,
      },
      next: { revalidate: 10 }, // Cache for 5 mins
    });
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const json = await res.json();
    const items = json.data?.data || json.data?.items || (Array.isArray(json.data) ? json.data : []);
    return Array.isArray(items) ? items : [];
  } catch (error) {
    console.error('Failed to fetch members:', error);
    return [];
  }
}

export async function fetchMemberBySlugOrId(identifier: string): Promise<PeerMember | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/members-with-circles/${identifier}`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${MEMBERS_TOKEN}`,
      },
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json.data || null;
  } catch (error) {
    console.error('Failed to fetch member detail:', error);
    return null;
  }
}

// ==========================================
// 3. DYNAMIC CIRCLE CATEGORIES & CITIES API
// ==========================================
export async function fetchCircleCategories() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/circle-categories`, {
      headers: { 'Accept': 'application/json' },
      next: { revalidate: 10 },
    });
    if (!res.ok) return [];
    const json = await res.json();
    return json.data || [];
  } catch (error) {
    console.error('Failed to fetch circle categories:', error);
    return [];
  }
}

export async function fetchCities() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/cities`, {
      headers: { 'Accept': 'application/json' },
      next: { revalidate: 10 },
    });
    if (!res.ok) return [];
    const json = await res.json();
    return json.data || [];
  } catch (error) {
    console.error('Failed to fetch cities:', error);
    return [];
  }
}

export * from './members';


