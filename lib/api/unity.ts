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
    let apiEvents: PeerEvent[] = [];

    // 1. Fetch from local Next.js database API (/api/events)
    try {
      const localRes = await fetch('/api/events', {
        headers: { 'Accept': 'application/json' },
        cache: 'no-store',
      });
      if (localRes.ok) {
        const localJson = await localRes.json();
        const rawList = localJson.data || localJson.allEvents || [];
        if (Array.isArray(rawList) && rawList.length > 0) {
          apiEvents = rawList.map((e: any) => ({
            event_id: e.slug || String(e.id || Math.random()),
            occurrence_id: e.occurrence_id || null,
            title: e.title,
            description: e.summary || (Array.isArray(e.body) ? e.body[0] : e.body) || '',
            event_type: e.kind || 'circle_event',
            event_category: e.kind || 'Circle Meeting',
            mode: (e.city || '').toLowerCase() === 'online' ? 'virtual' : 'in_person',
            start_at: e.isoDate || new Date().toISOString(),
            end_at: null,
            formatted_start_at: `${e.date} ${e.time || ''}`.trim(),
            status: e.status || 'upcoming',
            registered_count: e.attending || 35,
            image_url: e.image_url || '/images/conclave.png',
            location: `${e.venue || 'Peers Global House'}, ${e.city || 'Ahmedabad'}`,
            meeting_link: null,
            circle: {
              id: e.circles?.[0] || 'circle-1',
              name: e.circle_name || 'Peers Global Circle',
              slug: e.circles?.[0] || 'peers-circle',
              state_name: 'Gujarat',
            },
          }));
        }
      }
    } catch {
      // Ignore client/server fetch environment differences
    }

    // 2. Fetch from Unity remote API if needed
    if (apiEvents.length === 0) {
      const res = await fetch(`${API_BASE_URL}/api/v1/events/all?status=${status}`, {
        headers: { 'Accept': 'application/json' },
        next: { revalidate: 10 },
        signal: AbortSignal.timeout(3500),
      }).catch(() => null);

      if (res && res.ok) {
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
    }

    // If live API returned events, return them directly
    if (apiEvents.length > 0) {
      if (status === 'upcoming') {
        return apiEvents.filter(e => e.status === 'upcoming' || e.status === 'published' || e.status === 'active' || e.status === 'scheduled');
      }
      return apiEvents;
    }

    // Default static/fallback events matching Unity portal
    const defaultEvents: PeerEvent[] = [
      {
        event_id: 'healthcare-one-2026',
        occurrence_id: 'healthcare-one-occ-1',
        title: 'Healthcare One 2026',
        description: 'The flagship healthcare-business conclave of the Peers Global Healthcare Circle. 400+ promoters.',
        event_type: 'Conclave',
        event_category: 'Healthcare',
        mode: 'in_person',
        start_at: '2026-07-30T09:00:00.000000Z',
        end_at: '2026-07-30T18:30:00.000000Z',
        formatted_start_at: '30 Jul 2026 09:00 AM',
        status: 'upcoming',
        registered_count: 412,
        image_url: '/images/conclave.png',
        location: 'Courtyard by Marriott, Satellite, Ahmedabad',
        meeting_link: null,
        circle: {
          id: 'healthcare-circle',
          name: 'Healthcare Circle',
          slug: 'healthcare',
          state_name: 'Gujarat',
        },
      },
    ];

    if (status === 'upcoming') {
      return defaultEvents.filter(e => e.status === 'upcoming' || e.status === 'published' || e.status === 'active');
    }
    return defaultEvents;
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
      signal: AbortSignal.timeout(3500),
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
      signal: AbortSignal.timeout(3500),
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
      signal: AbortSignal.timeout(4000),
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
      signal: AbortSignal.timeout(4000),
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


