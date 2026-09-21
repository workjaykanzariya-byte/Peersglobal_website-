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



// Submit Visitor Event Registration
export async function fetchEvents(status: 'all' | 'upcoming' | 'live' | 'today' = 'all'): Promise<PeerEvent[]> {
  try {
    let apiEvents: PeerEvent[] = [];

    // 1. Fetch directly from live Unity backend API (peersunity.com/api/v1/events/all)
    try {
      const res = await fetch(`${API_BASE_URL}/api/v1/events/all?status=${status}`, {
        headers: { Accept: 'application/json' },
        cache: 'no-store',
        signal: AbortSignal.timeout(6000),
      });

      if (res.ok) {
        const json = await res.json();
        const data = json.data || json;
        const rawList = [
          ...(data.live_events || []),
          ...(data.today_events || []),
          ...(data.upcoming_events || []),
          ...(data.past_events || []),
          ...(data.events || []),
        ];

        if (Array.isArray(rawList) && rawList.length > 0) {
          apiEvents = rawList.map((e: any) => ({
            event_id: e.event_id || e.id || e.slug,
            occurrence_id: e.occurrence_id || null,
            title: e.title || 'Peers Global Event',
            description: e.description || '',
            event_type: e.event_type || 'Circle Meeting',
            event_category: e.event_category || 'Circle Meeting',
            mode: e.mode || 'in_person',
            start_at: e.start_at || new Date().toISOString(),
            end_at: e.end_at || null,
            formatted_start_at: e.formatted_start_at || 'Upcoming',
            status: e.status || 'scheduled',
            registered_count: e.registered_count || 1,
            image_url: e.image_url || '/images/executive-director-conclave.jpg',
            location: e.location || 'Ahmedabad, Gujarat',
            meeting_link: e.meeting_link || null,
            circle: e.circle || {
              id: e.circle_id || 'peers-circle',
              name: (e.circles && e.circles[0]?.name) || 'Peers Global Circle',
              slug: (e.circles && e.circles[0]?.slug) || 'peers-global-circle',
              state_name: 'Gujarat',
            },
          }));
        }
      }
    } catch (fetchErr) {
      console.warn('[unity] fetchEvents live error, trying local/fallback:', fetchErr);
    }

    // 2. Fallback to catalog events if remote API returned empty
    if (apiEvents.length === 0) {
      apiEvents = [
        {
          event_id: 'realty-one-meet-ahmedabad',
          occurrence_id: 'realty-one-occ',
          title: 'Realty One Meet',
          description: 'The exclusive gathering of real estate developers, infrastructure builders, and architects of the Peers Global Realty ONE Circle.',
          event_type: 'Circle Meeting',
          event_category: 'Real Estate & Infrastructure',
          mode: 'in_person',
          start_at: '2026-09-24T06:00:00.000000Z',
          end_at: '2026-09-24T09:00:00.000000Z',
          formatted_start_at: '24 Sep 2026 06:00 AM',
          status: 'upcoming',
          registered_count: 42,
          image_url: 'https://peersunity.com/api/v1/files/019fea4e-54a0-730d-abf6-06c9209de791',
          location: 'Renaissance by Marriott Ahmedabad Hotel, Ahmedabad, Gujarat',
          meeting_link: null,
          circle: {
            id: 'realty-one',
            name: 'Realty ONE',
            slug: 'realty-one',
            state_name: 'Gujarat',
          },
        },
        {
          event_id: 'msme-one-meet-ahmedabad',
          occurrence_id: 'msme-one-occ',
          title: 'MSME One Meet',
          description: 'Scaling MSME manufacturers, suppliers, and industrial partners in Ahmedabad.',
          event_type: 'Circle Meeting',
          event_category: 'MSME & Manufacturing',
          mode: 'in_person',
          start_at: '2026-10-01T08:00:00.000000Z',
          end_at: '2026-10-01T10:00:00.000000Z',
          formatted_start_at: '01 Oct 2026 08:00 AM',
          status: 'upcoming',
          registered_count: 58,
          image_url: 'https://peersunity.com/api/v1/files/019fea49-0960-7314-ba7d-681a20e47cdd',
          location: 'Fortune Select SG Highway, Ahmedabad - Member ITC Hotels’ Group, Ahmedabad, Gujarat',
          meeting_link: null,
          circle: {
            id: 'msme-one',
            name: 'MSME ONE Ahmedabad',
            slug: 'msme-one-ahmedabad',
            state_name: 'Gujarat',
          },
        },
        {
          event_id: 'healthcare-one-2026',
          occurrence_id: 'healthcare-one-occ-1',
          title: 'Healthcare One 2026: The Business of Care',
          description: 'The flagship healthcare-business conclave of the Peers Global Healthcare Circle. 400+ promoters.',
          event_type: 'Conclave',
          event_category: 'Healthcare',
          mode: 'in_person',
          start_at: '2026-10-12T09:00:00.000000Z',
          end_at: '2026-10-12T18:30:00.000000Z',
          formatted_start_at: '12 Oct 2026 09:00 AM',
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
        {
          event_id: 'business-conclave-2026',
          occurrence_id: 'conclave-2026-occ',
          title: 'Business Conclave 2026: Building for Bharat',
          description: 'Annual cross-industry leadership summit bringing together 500+ founders and promoters across India.',
          event_type: 'Regional Summit',
          event_category: 'Leadership & Cross-Industry',
          mode: 'in_person',
          start_at: '2026-10-24T10:00:00.000000Z',
          end_at: '2026-10-24T17:00:00.000000Z',
          formatted_start_at: '24 Oct 2026 10:00 AM',
          status: 'upcoming',
          registered_count: 248,
          image_url: '/images/executive-director-conclave.jpg',
          location: 'Grand Hyatt, Ahmedabad & Live on Unity',
          meeting_link: null,
          circle: {
            id: 'peers-global-founders',
            name: 'Peers Global Founders Circle',
            slug: 'founders-circle',
            state_name: 'Gujarat',
          },
        },
      ];
    }

    if (status === 'upcoming') {
      return apiEvents.filter(e => e.status === 'upcoming' || e.status === 'scheduled' || e.status === 'published' || e.status === 'active');
    }
    return apiEvents;
  } catch (error) {
    console.error('Failed to fetch events:', error);
    return [];
  }
}

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


