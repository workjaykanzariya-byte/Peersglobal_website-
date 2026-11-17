/**
 * Official Deep Linking & App Universal Link Definitions
 * Based on Peers Unity — Master Deep-Link Testing Document
 * Base URL: https://peersunity.com
 */

export const APP_BASE_URL = 'https://peersunity.com'

/**
 * General & Feature Screen Links matching deep_link_service.dart
 */
export const APP_DEEP_LINKS = {
  // 1. Auth, Onboarding & Feed
  HOME: `${APP_BASE_URL}/share?type=home`,
  ENTER_UNITY: `${APP_BASE_URL}/share?type=enter_unity`,
  REGISTER: `${APP_BASE_URL}/register`,
  MEMBER_LOGIN: `${APP_BASE_URL}/share?type=membership_login`,
  MEMBERSHIP: `${APP_BASE_URL}/share?type=membership`,
  APPLY_MEMBERSHIP: `${APP_BASE_URL}/share?type=membership`,

  // 2. Profile
  MY_PROFILE: `${APP_BASE_URL}/share?type=profile`,
  COMPLETE_PROFILE: `${APP_BASE_URL}/share?type=complete_profile`,
  UPDATE_PROFILE: `${APP_BASE_URL}/share?type=update_profile`,

  // 3. Peers & Directory
  PEERS_DIRECTORY: `${APP_BASE_URL}/share?type=peers`,
  DISCOVER_PEERS: `${APP_BASE_URL}/share?type=discover_peers`,
  NEAR_ME: `${APP_BASE_URL}/share?type=near_me`,
  PEER_SEARCH_BY_DISTRICTS: `${APP_BASE_URL}/share?type=peer_search_by_districts`,
  PEER_SEARCH_BY_STATES: `${APP_BASE_URL}/share?type=peer_search_by_states`,
  PEER_SEARCH_BY_COMMUNITY: `${APP_BASE_URL}/share?type=near_me`,

  // 4. Circles
  EXPLORE_CIRCLES: `${APP_BASE_URL}/share?type=explore_circles`,
  MY_CIRCLES: `${APP_BASE_URL}/share?type=circles`,
  DISCOVER_MY_CIRCLE: `${APP_BASE_URL}/share?type=discover_my_circle`,
  BROWSE_INDUSTRY_CIRCLES: `${APP_BASE_URL}/share?type=browse_industry_circles`,
  BROWSE_PURPOSE_CIRCLES: `${APP_BASE_URL}/share?type=browse_purpose_circles`,
  START_A_CIRCLE: `${APP_BASE_URL}/share?type=start_a_circle`,

  // 5. Asks & Collaborations
  POST_ASK: `${APP_BASE_URL}/share?type=post_ask`,
  OPEN_ASKS: `${APP_BASE_URL}/share?type=open_asks`,
  HELP_A_PEER: `${APP_BASE_URL}/share?type=help_a_peer`,
  COLLABORATIONS: `${APP_BASE_URL}/share?type=explore_collaboration`,
  ADD_COLLABORATION: `${APP_BASE_URL}/share?type=add_collaboration`,

  // 6. Events & Videos
  EVENTS: `${APP_BASE_URL}/share?type=events`,
  VIEW_EVENTS: `${APP_BASE_URL}/share?type=view_events`,
  EVENT_VIDEOS: `${APP_BASE_URL}/share?type=event_videos`,

  // 7. Learning & Resources
  TUTORIALS: `${APP_BASE_URL}/share?type=learn`,
  CIRCULARS: `${APP_BASE_URL}/share?type=circulars`,

  // 8. Impact & Coins
  LIFE_IMPACT: `${APP_BASE_URL}/share?type=impact`,
  VIEW_MY_IMPACT: `${APP_BASE_URL}/share?type=view_my_impact`,
  IMPACT_GUIDELINES: `${APP_BASE_URL}/share?type=explore_lsr`,
  LEADERBOARD: `${APP_BASE_URL}/share?type=leaderboard`,
  IMPACT_LEADERBOARD: `${APP_BASE_URL}/share?type=impact_leaderboard`,
  COINS: `${APP_BASE_URL}/share?type=coins`,

  // 9. Referrals & Meetings
  REFERRALS: `${APP_BASE_URL}/share?type=referrals`,
  ADD_REFERRAL: `${APP_BASE_URL}/share?type=add_referral`,
  BUSINESS_DEALS: `${APP_BASE_URL}/share?type=business_deals`,
  ADD_BUSINESS_DEAL: `${APP_BASE_URL}/share?type=add_business_deal`,
  TESTIMONIALS: `${APP_BASE_URL}/share?type=testimonials`,
  P2P_MEETINGS: `${APP_BASE_URL}/share?type=p2p_meetings`,

  // 10. Leadership & Community
  EXPLORE_LEADERSHIP: `${APP_BASE_URL}/share?type=become_leader`,
  BECOME_LEADER: `${APP_BASE_URL}/share?type=become_leader`,
  BECOME_MENTOR: `${APP_BASE_URL}/share?type=become_mentor`,
  BECOME_SPEAKER: `${APP_BASE_URL}/share?type=become_speaker`,
  PARTNER_WITH_US: `${APP_BASE_URL}/share?type=partner_with_us`,
  MY_NETWORK: `${APP_BASE_URL}/share?type=my_network`,

  // 11. Store
  STORE: `${APP_BASE_URL}/share?type=store`,
  MY_ORDERS: `${APP_BASE_URL}/share?type=my_orders`,

  // Fallbacks for Non-Standalone Sections
  BECOME_AN_AMBASSADOR: `${APP_BASE_URL}/share?type=become_leader`,
  MEET_OUR_ADVISORS: `${APP_BASE_URL}/share?type=home`,
  MEETING_AGENDA: `${APP_BASE_URL}/share?type=events`,
  ALL_CITIZENS: `${APP_BASE_URL}/share?type=peers`,

  // Native Store Links
  APP_STORE: 'https://apps.apple.com/in/app/peers-global-unity/id6739198477',
  PLAY_STORE: 'https://play.google.com/store/apps/details?id=com.peers.peersunity&pcampaignid=web_share',
} as const

export type AppDeepLinkKey = keyof typeof APP_DEEP_LINKS

/**
 * Direct 18 Circles Links with Highlight & Pulse in the Unity App
 * Format per Master Deep Link Doc: https://peersunity.com/share?type=discover_my_circle&circle={CircleName}
 */
export const CIRCLE_DEEP_LINKS: Record<string, string> = {
  // Industry Circles (8)
  'manufacturing-engineering': `${APP_BASE_URL}/share?type=discover_my_circle&circle=Manufacturing`,
  'real-estate-construction-infrastructure': `${APP_BASE_URL}/share?type=discover_my_circle&circle=Real+Estate`,
  'technology-it-digital-services': `${APP_BASE_URL}/share?type=discover_my_circle&circle=Technology`,
  'healthcare-wellness-life-sciences': `${APP_BASE_URL}/share?type=discover_my_circle&circle=Healthcare`,
  'education-training-skill-development': `${APP_BASE_URL}/share?type=discover_my_circle&circle=Education`,
  'events-fashion-apparel-lifestyle': `${APP_BASE_URL}/share?type=discover_my_circle&circle=Fashion`,
  'csr-ngos-impact-nation-building': `${APP_BASE_URL}/share?type=discover_my_circle&circle=CSR`,
  'franchise-licensing': `${APP_BASE_URL}/share?type=discover_my_circle&circle=Franchise`,

  // Purpose & Growth Circles (10)
  'startup-founders': `${APP_BASE_URL}/share?type=discover_my_circle&circle=Startup+Founders`,
  'startup-founders-scaleups': `${APP_BASE_URL}/share?type=discover_my_circle&circle=Startup+Founders`,
  'sme-ipo-goal': `${APP_BASE_URL}/share?type=discover_my_circle&circle=SME+IPO+Goal`,
  'sme-ipo-capital-goal': `${APP_BASE_URL}/share?type=discover_my_circle&circle=SME+IPO+Goal`,
  'investors-circle': `${APP_BASE_URL}/share?type=discover_my_circle&circle=Investors`,
  'investors-angels-family-offices': `${APP_BASE_URL}/share?type=discover_my_circle&circle=Investors`,
  'global-expansion-cross-border': `${APP_BASE_URL}/share?type=discover_my_circle&circle=Global+Expansion`,
  'msme-entrepreneurs': `${APP_BASE_URL}/share?type=discover_my_circle&circle=MSME+Entrepreneurs`,
  'msme-sme-business-owners': `${APP_BASE_URL}/share?type=discover_my_circle&circle=MSME+Entrepreneurs`,
  'family-business-circles': `${APP_BASE_URL}/share?type=discover_my_circle&circle=Family+Business`,
  'family-business-succession': `${APP_BASE_URL}/share?type=discover_my_circle&circle=Family+Business`,
  'young-entrepreneurs-below-35': `${APP_BASE_URL}/share?type=discover_my_circle&circle=Young+Entrepreneurs`,
  'young-entrepreneurs-under-35': `${APP_BASE_URL}/share?type=discover_my_circle&circle=Young+Entrepreneurs`,
  'leadership-transformation': `${APP_BASE_URL}/share?type=discover_my_circle&circle=Leadership`,
  'import-export-global-trade': `${APP_BASE_URL}/share?type=discover_my_circle&circle=Import+Export`,
  'sustainable-esg-business': `${APP_BASE_URL}/share?type=discover_my_circle&circle=Sustainable`,
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
    return `${APP_BASE_URL}/share?type=discover_my_circle&circle=Manufacturing`
  }
  if (lower.includes('real estate') || lower.includes('construction') || lower.includes('infra')) {
    return `${APP_BASE_URL}/share?type=discover_my_circle&circle=Real+Estate`
  }
  if (lower.includes('tech') || lower.includes('it & digital') || lower.includes('software')) {
    return `${APP_BASE_URL}/share?type=discover_my_circle&circle=Technology`
  }
  if (lower.includes('health') || lower.includes('wellness') || lower.includes('pharma') || lower.includes('life sciences')) {
    return `${APP_BASE_URL}/share?type=discover_my_circle&circle=Healthcare`
  }
  if (lower.includes('educat') || lower.includes('training') || lower.includes('skill')) {
    return `${APP_BASE_URL}/share?type=discover_my_circle&circle=Education`
  }
  if (lower.includes('fashion') || lower.includes('apparel') || lower.includes('events') || lower.includes('lifestyle')) {
    return `${APP_BASE_URL}/share?type=discover_my_circle&circle=Fashion`
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
