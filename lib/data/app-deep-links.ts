/**
 * Official Deep Linking & App Universal Link Definitions
 * Based on Peers Unity — Official Deep Linking & Sharing Guide
 * Base URL: https://peersunity.com
 */

export const APP_BASE_URL = 'https://peersunity.com'

/**
 * General & Feature Screen Links
 */
export const APP_DEEP_LINKS = {
  // General & Feature screens
  HOME: `${APP_BASE_URL}/home`,
  PEERS_DIRECTORY: `${APP_BASE_URL}/peers`,
  EXPLORE_CIRCLES: `${APP_BASE_URL}/circles`,
  MEMBERSHIP: `${APP_BASE_URL}/membership`,
  APPLY_MEMBERSHIP: `${APP_BASE_URL}/apply_membership`,
  MEMBER_LOGIN: `${APP_BASE_URL}/membership_login`,
  PEER_SEARCH_BY_DISTRICTS: `${APP_BASE_URL}/peer_search_by_districts`,
  PEER_SEARCH_BY_STATES: `${APP_BASE_URL}/peer_search_by_states`,
  PEER_SEARCH_BY_COMMUNITY: `${APP_BASE_URL}/peer_search_by_community`,
  EVENTS: `${APP_BASE_URL}/events`,
  EVENT_VIDEOS: `${APP_BASE_URL}/event_videos`,
  LIFE_IMPACT: `${APP_BASE_URL}/life_impact`,
  IMPACT_GUIDELINES: `${APP_BASE_URL}/impact_guidelines`,
  LEADERBOARD: `${APP_BASE_URL}/leaderboard`,
  COINS: `${APP_BASE_URL}/coins`,
  EXPLORE_LEADERSHIP: `${APP_BASE_URL}/explore_leadership`,
  START_A_CIRCLE: `${APP_BASE_URL}/start_a_circle`,
  APPLY_LEAD_CD: `${APP_BASE_URL}/apply_to_lead_cd`,
  APPLY_LEAD_ID: `${APP_BASE_URL}/apply_to_lead_id`,
  APPLY_LEAD_ED: `${APP_BASE_URL}/apply_to_lead_ed`,
  POST_ASK: `${APP_BASE_URL}/post_ask`,
  OPEN_ASKS: `${APP_BASE_URL}/open_asks`,
  COLLABORATIONS: `${APP_BASE_URL}/collaborations`,
  P2P_MEETINGS: `${APP_BASE_URL}/p2p_meetings`,
  BUSINESS_DEALS: `${APP_BASE_URL}/business_deals`,
  TESTIMONIALS: `${APP_BASE_URL}/testimonials`,
  TUTORIALS: `${APP_BASE_URL}/tutorials`,
  CIRCULARS: `${APP_BASE_URL}/circulars`,

  // Fallbacks for Non-Standalone Sections
  BECOME_AN_AMBASSADOR: `${APP_BASE_URL}/become_an_ambasador`,
  MEET_OUR_ADVISORS: `${APP_BASE_URL}/meet_our_advisor`,
  MEETING_AGENDA: `${APP_BASE_URL}/meeting_agenda`,
  ALL_CITIZENS: `${APP_BASE_URL}/all_citizes`,

  // Native Store Links
  APP_STORE: 'https://apps.apple.com/in/app/peers-global-unity/id6739198477',
  PLAY_STORE: 'https://play.google.com/store/apps/details?id=com.peers.peersunity&pcampaignid=web_share',
} as const

export type AppDeepLinkKey = keyof typeof APP_DEEP_LINKS

/**
 * Direct 18 Circles Links with 3-Time Highlight & Pulse in the Unity App
 */
export const CIRCLE_DEEP_LINKS: Record<string, string> = {
  // Industry Circles (8)
  'manufacturing-engineering': `${APP_BASE_URL}/circles?name=Manufacturing`,
  'real-estate-construction-infrastructure': `${APP_BASE_URL}/circles?name=Real+Estate`,
  'technology-it-digital-services': `${APP_BASE_URL}/circles?name=Technology`,
  'healthcare-wellness-life-sciences': `${APP_BASE_URL}/circles?name=Healthcare`,
  'education-training-skill-development': `${APP_BASE_URL}/circles?name=Education`,
  'events-fashion-apparel-lifestyle': `${APP_BASE_URL}/circles?name=Fashion`,
  'csr-ngos-impact-nation-building': `${APP_BASE_URL}/circles?name=CSR`,
  'franchise-licensing': `${APP_BASE_URL}/circles?name=Franchise`,

  // Purpose & Growth Circles (10)
  'startup-founders': `${APP_BASE_URL}/circles?name=Startup+Founders`,
  'startup-founders-scaleups': `${APP_BASE_URL}/circles?name=Startup+Founders`,
  'sme-ipo-goal': `${APP_BASE_URL}/circles?name=SME+IPO+Goal`,
  'sme-ipo-capital-goal': `${APP_BASE_URL}/circles?name=SME+IPO+Goal`,
  'investors-circle': `${APP_BASE_URL}/circles?name=Investors`,
  'investors-angels-family-offices': `${APP_BASE_URL}/circles?name=Investors`,
  'global-expansion-cross-border': `${APP_BASE_URL}/circles?name=Global+Expansion`,
  'msme-entrepreneurs': `${APP_BASE_URL}/circles?name=MSME+Entrepreneurs`,
  'msme-sme-business-owners': `${APP_BASE_URL}/circles?name=MSME+Entrepreneurs`,
  'family-business-circles': `${APP_BASE_URL}/circles?name=Family+Business`,
  'family-business-succession': `${APP_BASE_URL}/circles?name=Family+Business`,
  'young-entrepreneurs-below-35': `${APP_BASE_URL}/circles?name=Young+Entrepreneurs`,
  'young-entrepreneurs-under-35': `${APP_BASE_URL}/circles?name=Young+Entrepreneurs`,
  'leadership-transformation': `${APP_BASE_URL}/circles?name=Leadership`,
  'import-export-global-trade': `${APP_BASE_URL}/circles?name=Import+Export`,
  'sustainable-esg-business': `${APP_BASE_URL}/circles?name=Sustainable`,
}

/**
 * Resolver function to get direct app deep link for any Circle by name, keyword or slug
 */
export function getCircleDeepLink(nameOrSlug?: string): string {
  if (!nameOrSlug) return APP_DEEP_LINKS.EXPLORE_CIRCLES

  const lower = nameOrSlug.toLowerCase()

  // 1. Direct slug match
  if (CIRCLE_DEEP_LINKS[nameOrSlug]) {
    return CIRCLE_DEEP_LINKS[nameOrSlug]
  }

  // 2. Keyword matching against the official 18 circles deep links
  if (lower.includes('manufactur') || lower.includes('engineering')) {
    return `${APP_BASE_URL}/circles?name=Manufacturing`
  }
  if (lower.includes('real estate') || lower.includes('construction') || lower.includes('infra')) {
    return `${APP_BASE_URL}/circles?name=Real+Estate`
  }
  if (lower.includes('tech') || lower.includes('it & digital') || lower.includes('software')) {
    return `${APP_BASE_URL}/circles?name=Technology`
  }
  if (lower.includes('health') || lower.includes('wellness') || lower.includes('pharma') || lower.includes('life sciences')) {
    return `${APP_BASE_URL}/circles?name=Healthcare`
  }
  if (lower.includes('educat') || lower.includes('training') || lower.includes('skill')) {
    return `${APP_BASE_URL}/circles?name=Education`
  }
  if (lower.includes('fashion') || lower.includes('apparel') || lower.includes('events') || lower.includes('lifestyle')) {
    return `${APP_BASE_URL}/circles?name=Fashion`
  }
  if (lower.includes('csr') || lower.includes('ngo') || lower.includes('impact & nation') || lower.includes('nation-building')) {
    return `${APP_BASE_URL}/circles?name=CSR`
  }
  if (lower.includes('franchise') || lower.includes('licensing')) {
    return `${APP_BASE_URL}/circles?name=Franchise`
  }
  if (lower.includes('startup')) {
    return `${APP_BASE_URL}/circles?name=Startup+Founders`
  }
  if (lower.includes('ipo')) {
    return `${APP_BASE_URL}/circles?name=SME+IPO+Goal`
  }
  if (lower.includes('investor') || lower.includes('angel')) {
    return `${APP_BASE_URL}/circles?name=Investors`
  }
  if (lower.includes('cross-border') || lower.includes('global expansion')) {
    return `${APP_BASE_URL}/circles?name=Global+Expansion`
  }
  if (lower.includes('msme') || lower.includes('sme business')) {
    return `${APP_BASE_URL}/circles?name=MSME+Entrepreneurs`
  }
  if (lower.includes('family business')) {
    return `${APP_BASE_URL}/circles?name=Family+Business`
  }
  if (lower.includes('young') || lower.includes('35')) {
    return `${APP_BASE_URL}/circles?name=Young+Entrepreneurs`
  }
  if (lower.includes('leadership') || lower.includes('transformation')) {
    return `${APP_BASE_URL}/circles?name=Leadership`
  }
  if (lower.includes('export') || lower.includes('trade')) {
    return `${APP_BASE_URL}/circles?name=Import+Export`
  }
  if (lower.includes('sustain') || lower.includes('esg')) {
    return `${APP_BASE_URL}/circles?name=Sustainable`
  }

  // Fallback to all circles explore tab
  return APP_DEEP_LINKS.EXPLORE_CIRCLES
}

/**
 * Share a peer's profile with member ID or referral code
 */
export function getPeerProfileDeepLink(memberIdOrCode: string): string {
  return `${APP_BASE_URL}/peer/${encodeURIComponent(memberIdOrCode)}`
}

/**
 * Invite users directly to a specific event
 */
export function getEventDeepLink(eventId: string, refCode?: string): string {
  const base = `${APP_BASE_URL}/event/${encodeURIComponent(eventId)}`
  return refCode ? `${base}?ref=${encodeURIComponent(refCode)}` : base
}

/**
 * Share a specific community post
 */
export function getCommunityPostDeepLink(postId: string): string {
  return `${APP_BASE_URL}/post/${encodeURIComponent(postId)}`
}
