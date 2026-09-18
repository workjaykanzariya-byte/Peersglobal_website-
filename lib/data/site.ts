export const SITE = {
  name: 'Peers Global',
  legalName: 'Peers Global Business Media Private Limited',
  tagline: "World's First Community of Collaboration",
  promise: 'Peers are Partners in Business and Friends in Life.',
  closing: 'Governed Collaboration.',
  cin: 'U22219GJ2022PTC137646',
  gstin: '24AANCP4546L1ZY',
  city: 'Ahmedabad, Gujarat, India',
  phones: ['+91 93161 20831', '+91 70411 51714'],
  email: 'hello@peersglobal.com',
  memberLoginUrl: 'https://unity.peersglobal.com',
  appStoreUrl: 'https://apps.apple.com/app/peers-global/id6475800000',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.peersglobal.unity',
  statsAsOf: 'Figures verified against Unity platform records.',
}

/** Canonical, locked trust and facts of record */
export const TRUST_STATS = [
  { value: '200+', label: 'Entrepreneurs', note: 'Active across India' },
  { value: '18', label: 'Circles', note: '9 Industry · 10 Purpose-led' },
  { value: '10', label: 'Forms of Collaboration', note: 'Structured peer support' },
  { value: '1M+', label: 'Entrepreneurs to Impact', note: 'By 2030' },
]

export const OUTCOME_STATS = [
  { value: '1 Action', label: '= 1 Life Impacted', note: 'Strictly unweighted & confirmed' },
  { value: '12', label: 'Meetings / Year', note: 'Governed monthly inner board sessions' },
  { value: '60+', label: 'Roundtables / Year', note: 'Problem solving & strategic partnerships' },
  { value: '150+', label: 'Introductions / Year', note: 'Warm, trusted peer connections' },
]

export type NavSubItem = {
  label: string
  href: string
  desc: string
  phase?: 1 | 2
  external?: boolean
}

export type NavItem = {
  label: string
  href: string
  type: 'mega' | 'dropdown' | 'direct'
  phase?: 1 | 2
  ctaCard?: {
    eyebrow?: string
    title: string
    desc: string
    ctaText: string
    ctaHref: string
  }
  children?: NavSubItem[]
}

/** Strict 7 Primary Header Items + Spec */
export const HEADER_NAV: NavItem[] = [
  {
    label: 'Our World',
    href: '/the-idea',
    type: 'mega',
    phase: 1,
    ctaCard: {
      eyebrow: 'Our Philosophy',
      title: "World's First Community of Collaboration",
      desc: 'Peers are Partners in Business and Friends in Life. A leadership organisation, not a networking group.',
      ctaText: 'Explore The Idea →',
      ctaHref: '/the-idea',
    },
    children: [
      { label: 'The Idea', href: '/the-idea', desc: 'The founding manifesto & core belief', phase: 1 },
      { label: '10 Ways of Collaboration', href: '/10-ways-of-collaboration', desc: '10 powerful forms of peer collaboration', phase: 1 },
      { label: 'The Territory', href: '/the-territory', desc: 'Local to global: Circle to the world', phase: 1 },
      { label: 'The Citizens', href: '/the-citizens', desc: 'The entrepreneurs who build this community', phase: 1 },
      { label: 'The Currency', href: '/the-currency', desc: 'The Impact System: 1 Action = 1 Life Impacted', phase: 1 },
      { label: 'The Language', href: '/the-language', desc: 'The vocabulary and the Give-First principle', phase: 1 },
      { label: 'Our Culture & Code', href: '/culture-and-code', desc: '6 commitments and rituals of conduct', phase: 1 },
      { label: 'The 1 Million Mission', href: '/1-million-mission', desc: '1M+ entrepreneurs to impact by 2030', phase: 1 },
    ],
  },
  {
    label: 'Circles',
    href: '/circles',
    type: 'mega',
    phase: 1,
    ctaCard: {
      eyebrow: 'Category Exclusivity',
      title: 'Your Circle. Your Inner Board.',
      desc: 'A structured circle of 20–40 curated entrepreneurs. 18 industry and goal-specific Circles.',
      ctaText: 'Find Your Circle →',
      ctaHref: '/circles/find',
    },
    children: [
      { label: 'All Circles', href: '/circles', desc: '18 industry and goal-specific Circles', phase: 1 },
      { label: '10 Ways of Collaboration', href: '/10-ways-of-collaboration', desc: '10 powerful forms of peer collaboration', phase: 1 },
      { label: 'Browse by Industry', href: '/circles/industry', desc: '9 sector-locked industry Circles', phase: 1 },
      { label: 'Browse by Purpose', href: '/circles/purpose', desc: '10 shared-ambition goal Circles', phase: 1 },
      { label: 'Find Your Circle', href: '/circles/find', desc: 'Match with your ideal Circle and Inner Board', phase: 1 },
      { label: 'The Circle Meeting Experience', href: '/circle-meeting-experience', desc: '4-part monthly meeting structure', phase: 1 },
      { label: 'Start a Circle', href: '/start-a-circle', desc: 'Circle starts from Day 1 — first member', phase: 1 },
      { label: 'Circle Map — Cities & Countries', href: '/map', desc: 'Live locations and active chapters', phase: 2 },
    ],
  },
  {
    label: 'Membership',
    href: '/membership',
    type: 'mega',
    phase: 1,
    ctaCard: {
      eyebrow: 'Invest in Relationships',
      title: 'A Relationship You Invest In',
      desc: 'This is not a membership you renew. It is a relationship you invest in. Transparent investment, ₹2L+ annual value.',
      ctaText: 'Apply to Join →',
      ctaHref: '/apply',
    },
    children: [
      { label: 'Why Join', href: '/membership', desc: "Why your next breakthrough won't come alone", phase: 1 },
      { label: 'Who Belongs Here', href: '/who-belongs-here', desc: 'The fifteen names test & candidate fit', phase: 1 },
      { label: 'Membership vs Peer Standing', href: '/membership-vs-peer-standing', desc: 'Status word vs relational standing', phase: 1 },
      { label: 'Compare Tiers', href: '/membership/tiers', desc: 'Full fee transparency & ₹2L+ value breakdown', phase: 1 },
      { label: 'Criteria & Process', href: '/membership/criteria', desc: '2-step application and Circle approval', phase: 1 },
      { label: 'What You Get', href: '/membership/benefits', desc: 'Complete annual calendar and inclusions', phase: 1 },
      { label: 'Member FAQ', href: '/membership/faq', desc: 'All 10 confirmed question categories', phase: 1 },
      { label: 'Apply', href: '/apply', desc: 'Everything begins in the Unity App', phase: 1 },
    ],
  },
  {
    label: 'Leadership',
    href: '/leadership',
    type: 'mega',
    phase: 1,
    ctaCard: {
      eyebrow: 'Leadership Pathway',
      title: 'Leading the Leaders',
      desc: 'Influence without authority. From Circle Founder to Executive Director across Bharat.',
      ctaText: 'Apply to Lead →',
      ctaHref: '/leadership/apply',
    },
    children: [
      { label: 'The Leadership Ladder', href: '/leadership', desc: 'Pathway from Member to ecosystem owner', phase: 1 },
      { label: 'Circle Founder', href: '/leadership/circle-founder', desc: 'Convene and launch new Circles', phase: 1 },
      { label: 'Circle Director', href: '/leadership/circle-director', desc: 'Runs the Circle month on month', phase: 1 },
      { label: 'Industry Director', href: '/leadership/industry-director', desc: 'Sector ecosystem owner for the city', phase: 1 },
      { label: 'Executive Director', href: '/leadership/executive-director', desc: 'Area / District / State / Country leadership', phase: 1 },
      { label: 'Ambassador', href: '/leadership/ambassadors', desc: 'Carrying the name into rooms where it is not yet known', phase: 1 },
      { label: 'Impact Income', href: '/leadership/impact-income', desc: 'Earn while contributing to ecosystem growth', phase: 1 },
      { label: 'Apply to Lead', href: '/leadership/apply', desc: 'Submit expression of interest for leadership', phase: 1 },
    ],
  },
  {
    label: 'Unity',
    href: '/unity',
    type: 'direct',
    phase: 1,
  },
  {
    label: 'Community Life',
    href: '/events',
    type: 'mega',
    phase: 1,
    ctaCard: {
      eyebrow: 'Proof Over Promise',
      title: 'Real People. Proven Outcomes.',
      desc: '1 Action = 1 Life Impacted. Discover collaboration stories, events, and community milestones.',
      ctaText: 'Explore Community Life →',
      ctaHref: '/stories',
    },
    children: [
      { label: 'Events & Summits', href: '/events', desc: 'Monthly meetings, conclaves & retreats', phase: 1 },
      { label: 'Peer Stories', href: '/stories', desc: 'Named Peers, verified numbers, real outcomes', phase: 1 },
      { label: 'Collaboration Wins', href: '/stories/wins', desc: 'Live feed of confirmed peer actions', phase: 1 },
      { label: 'Blog & Insights', href: '/insights', desc: 'Written by entrepreneurs who built the thing', phase: 1 },
      { label: 'Awards & Recognition', href: '/awards', desc: 'Recognising public contribution and impact', phase: 2 },
      { label: 'Gallery', href: '/gallery', desc: 'Moments from conclaves and Circle meetings', phase: 2 },
      { label: 'Podcast & Media', href: '/media', desc: 'Peers Candid Talks, TV & publications', phase: 2 },
    ],
  },
  {
    label: 'About',
    href: '/our-story',
    type: 'mega',
    phase: 1,
    ctaCard: {
      eyebrow: 'Our Roots',
      title: 'Designed in Bharat. Built for the World.',
      desc: 'Building the infrastructure for how entrepreneurs collaborate. Headquartered in Ahmedabad.',
      ctaText: 'Read Our Story →',
      ctaHref: '/our-story',
    },
    children: [
      { label: 'Our Story', href: '/our-story', desc: 'From a hospital corridor to 1M mission', phase: 1 },
      { label: 'Dr. Pravin Parmar', href: '/founder', desc: 'Founder, Peers Global', phase: 1 },
      { label: 'Contact', href: '/contact', desc: 'Direct routing & corporate headquarters', phase: 1 },
      { label: 'Our Initiatives', href: '/initiatives', desc: 'VyapaarJagat, Fempreneur & Greenpreneur', phase: 2 },
      { label: 'Foundation & Social Impact', href: '/social-impact', desc: 'Section 8 foundation & evidenced SDGs', phase: 2 },
      { label: 'Newsroom', href: '/newsroom', desc: 'Press releases, coverage & media kit', phase: 2 },
      { label: 'Partner With Us', href: '/partner', desc: 'Institutional partnerships and alliances', phase: 2 },
      { label: 'Investors', href: '/investors', desc: 'Pre-Series A institutional overview', phase: 2 },
    ],
  },
]

// Backwards-compatibility alias for components that import NAV
export const NAV = HEADER_NAV

export type FooterLink = {
  label: string
  href: string
  phase?: 'P1' | 'P2'
  headerShared?: boolean
  external?: boolean
}

export type FooterGroup = {
  groupNumber: number
  title: string
  links: FooterLink[]
}

export type FooterBand = {
  bandNumber: number
  bandTitle: string
  groups: FooterGroup[]
}

/** Complete 6 Bands · 19 Groups · 126 Links Specification */
export const FOOTER_BANDS: FooterBand[] = [
  {
    bandNumber: 1,
    bandTitle: 'OUR WORLD',
    groups: [
      {
        groupNumber: 1,
        title: 'The Idea',
        links: [
          { label: 'The Idea', href: '/the-idea', phase: 'P1', headerShared: true },
          { label: 'The Territory', href: '/the-territory', phase: 'P1', headerShared: true },
          { label: 'The Citizens', href: '/the-citizens', phase: 'P1', headerShared: true },
          { label: 'The Currency', href: '/the-currency', phase: 'P1', headerShared: true },
          { label: 'The Language', href: '/the-language', phase: 'P1', headerShared: true },
          { label: 'Our Culture & Code', href: '/culture-and-code', phase: 'P1', headerShared: true },
          { label: 'The 1 Million Mission', href: '/1-million-mission', phase: 'P1', headerShared: true },
        ],
      },
      {
        groupNumber: 2,
        title: 'How We Collaborate',
        links: [
          { label: 'The 10 Forms of Collaboration', href: '/10-forms-of-collaboration', phase: 'P1', headerShared: true },
          { label: 'The Give-First Principle', href: '/give-first', phase: 'P2' },
          { label: 'Peer-to-Peer Meetings', href: '/peer-to-peer', phase: 'P2' },
          { label: 'How a Circle Works', href: '/how-a-circle-works', phase: 'P2' },
          { label: 'The Circle Meeting Experience', href: '/circle-meeting-experience', phase: 'P1', headerShared: true },
          { label: 'Circle Roles', href: '/circle-roles', phase: 'P2' },
        ],
      },
      {
        groupNumber: 3,
        title: 'The Currency',
        links: [
          { label: 'Life Impact Score', href: '/life-impact-score', phase: 'P2' },
          { label: 'How to Earn Impact', href: '/how-to-earn-impact', phase: 'P2' },
          { label: 'How Peers Confirm Impact', href: '/impact-confirmation', phase: 'P2' },
          { label: 'Peer Standing', href: '/peer-standing', phase: 'P2' },
          { label: 'Peers Coin', href: '/peers-coin', phase: 'P2' },
          { label: 'Peers Global Marketplace', href: '/marketplace', phase: 'P2' },
        ],
      },
    ],
  },
  {
    bandNumber: 2,
    bandTitle: 'CIRCLES & UNITY',
    groups: [
      {
        groupNumber: 4,
        title: 'Circles',
        links: [
          { label: 'All Circles', href: '/circles', phase: 'P1', headerShared: true },
          { label: 'Browse by Industry', href: '/circles/industry', phase: 'P1', headerShared: true },
          { label: 'Browse by Purpose', href: '/circles/purpose', phase: 'P1', headerShared: true },
          { label: 'Find Your Circle', href: '/circles/find', phase: 'P1', headerShared: true },
          { label: 'Start a Circle', href: '/start-a-circle', phase: 'P1', headerShared: true },
          { label: 'Circle Magazines', href: '/circle-magazines', phase: 'P2' },
          { label: 'Bring Peers Global to My City', href: '/bring-to-my-city', phase: 'P2' },
        ],
      },
      {
        groupNumber: 5,
        title: 'The Map',
        links: [
          { label: 'Circle Map', href: '/map', phase: 'P2', headerShared: true },
          { label: 'Circles by City', href: '/cities', phase: 'P2' },
          { label: 'Districts & Regions', href: '/regions', phase: 'P2' },
          { label: 'India Network', href: '/india', phase: 'P2' },
          { label: 'International Expansion', href: '/international', phase: 'P2' },
        ],
      },
      {
        groupNumber: 6,
        title: 'Unity App',
        links: [
          { label: 'Unity Overview', href: '/unity', phase: 'P1', headerShared: true },
          { label: 'Peer Directory', href: '/unity/directory', phase: 'P2' },
          { label: 'Connections', href: '/unity/connections', phase: 'P2' },
          { label: 'One-to-One Booking', href: '/unity/one-to-one', phase: 'P2' },
          { label: 'Contribution Logging', href: '/unity/contributions', phase: 'P2' },
          { label: 'Impact Tracking', href: '/unity/impact', phase: 'P2' },
          { label: 'Download for iOS', href: 'https://apps.apple.com/app/peers-global/id6475800000', phase: 'P1', external: true },
          { label: 'Download for Android', href: 'https://play.google.com/store/apps/details?id=com.peersglobal.unity', phase: 'P1', external: true },
          { label: 'Member Login', href: 'https://unity.peersglobal.com', phase: 'P1', headerShared: true, external: true },
        ],
      },
    ],
  },
  {
    bandNumber: 3,
    bandTitle: 'MEMBERSHIP & LEADERSHIP',
    groups: [
      {
        groupNumber: 7,
        title: 'Membership',
        links: [
          { label: 'Why Join', href: '/membership', phase: 'P1', headerShared: true },
          { label: 'Who Belongs Here', href: '/who-belongs-here', phase: 'P1', headerShared: true },
          { label: 'Compare Tiers', href: '/membership/tiers', phase: 'P1', headerShared: true },
          { label: 'What You Get', href: '/membership/benefits', phase: 'P1', headerShared: true },
          { label: 'Criteria & Process', href: '/membership/criteria', phase: 'P1', headerShared: true },
          { label: 'Member FAQ', href: '/membership/faq', phase: 'P1', headerShared: true },
          { label: 'Membership Terms', href: '/membership-terms', phase: 'P1' },
          { label: 'Join Peers Global', href: '/apply', phase: 'P1', headerShared: true },
        ],
      },
      {
        groupNumber: 8,
        title: 'Leadership',
        links: [
          { label: 'The Leadership Ladder', href: '/leadership', phase: 'P1', headerShared: true },
          { label: 'Circle Founder', href: '/leadership/circle-founder', phase: 'P1', headerShared: true },
          { label: 'Circle Director', href: '/leadership/circle-director', phase: 'P1', headerShared: true },
          { label: 'Industry Director', href: '/leadership/industry-director', phase: 'P1', headerShared: true },
          { label: 'Executive Director', href: '/leadership/executive-director', phase: 'P1', headerShared: true },
          { label: 'Ambassadors', href: '/leadership/ambassadors', phase: 'P1', headerShared: true },
          { label: 'Global Advisory Board', href: '/leadership/global-advisors', phase: 'P2', headerShared: true },
          { label: 'Apply to Lead', href: '/leadership/apply', phase: 'P1', headerShared: true },
        ],
      },
      {
        groupNumber: 9,
        title: 'Growth & Learning',
        links: [
          { label: 'Masterclasses', href: '/masterclasses', phase: 'P2' },
          { label: 'Business Playbooks', href: '/playbooks', phase: 'P2' },
          { label: 'The Watchlist', href: '/watchlist', phase: 'P1' },
          { label: 'Bookshelf', href: '/bookshelf', phase: 'P2' },
          { label: 'AI Tools for Peers', href: '/ai-tools', phase: 'P2' },
          { label: 'Mentors & Guides', href: '/mentors', phase: 'P2' },
          { label: 'New Peer Guide', href: '/new-peer-guide', phase: 'P2' },
        ],
      },
    ],
  },
  {
    bandNumber: 4,
    bandTitle: 'COMMUNITY LIFE',
    groups: [
      {
        groupNumber: 10,
        title: 'Events',
        links: [
          { label: 'All Events', href: '/events', phase: 'P1', headerShared: true },
          { label: 'Circle Meetings', href: '/events/circle-meetings', phase: 'P2' },
          { label: 'Masterclasses', href: '/events/masterclasses', phase: 'P2' },
          { label: 'City Gatherings', href: '/events/city-gatherings', phase: 'P2' },
          { label: 'Regional Conclaves', href: '/events/conclaves', phase: 'P2' },
          { label: 'The Annual Summit', href: '/events/summit', phase: 'P2' },
          { label: 'Speak at Peers Global', href: '/events/speak', phase: 'P2' },
          { label: 'Past Events', href: '/events/past', phase: 'P2' },
        ],
      },
      {
        groupNumber: 11,
        title: 'Stories',
        links: [
          { label: 'Peer Stories', href: '/stories', phase: 'P1', headerShared: true },
          { label: 'Collaboration Wins', href: '/stories/wins', phase: 'P1', headerShared: true },
          { label: 'Stories by City', href: '/stories/city', phase: 'P2' },
          { label: 'Stories by Circle', href: '/stories/circle', phase: 'P2' },
          { label: 'Video Testimonials', href: '/testimonials', phase: 'P2' },
          { label: 'Blog & Insights', href: '/insights', phase: 'P1', headerShared: true },
        ],
      },
      {
        groupNumber: 12,
        title: 'Recognition',
        links: [
          { label: 'Awards & Recognition', href: '/awards', phase: 'P2', headerShared: true },
          { label: 'Award Categories', href: '/awards/categories', phase: 'P2' },
          { label: 'Past Winners', href: '/awards/winners', phase: 'P2' },
          { label: 'Impact Creators', href: '/awards/impact-creators', phase: 'P2' },
          { label: 'Circle of the Year', href: '/awards/circle-of-the-year', phase: 'P2' },
          { label: 'Recognition Wall', href: '/recognition', phase: 'P2' },
        ],
      },
      {
        groupNumber: 13,
        title: 'Media',
        links: [
          { label: 'Newsroom', href: '/newsroom', phase: 'P2', headerShared: true },
          { label: 'Podcast & Media', href: '/media', phase: 'P2', headerShared: true },
          { label: 'Vyapaar Jagat TV', href: '/media/vyapaar-jagat-tv', phase: 'P2' },
          { label: 'VyapaarJagat.com', href: 'https://vyapaarjagat.com', phase: 'P2', external: true },
          { label: 'Gallery', href: '/gallery', phase: 'P2', headerShared: true },
          { label: 'Press Coverage', href: '/newsroom/coverage', phase: 'P2' },
          { label: 'Media Kit', href: '/newsroom/media-kit', phase: 'P2' },
        ],
      },
    ],
  },
  {
    bandNumber: 5,
    bandTitle: 'IMPACT & INITIATIVES',
    groups: [
      {
        groupNumber: 14,
        title: 'Our Initiatives',
        links: [
          { label: 'All Initiatives', href: '/initiatives', phase: 'P2', headerShared: true },
          { label: 'Vyapaar Jagat', href: '/initiatives/vyapaar-jagat', phase: 'P2' },
          { label: 'Fempreneur', href: '/initiatives/fempreneur', phase: 'P2' },
          { label: 'Greenpreneur', href: '/initiatives/greenpreneur', phase: 'P2' },
          { label: '1 Million Entrepreneurs Forum', href: '/initiatives/1meif', phase: 'P2' },
          { label: 'Peers Global Store', href: '/store', phase: 'P2' },
        ],
      },
      {
        groupNumber: 15,
        title: 'Social Impact',
        links: [
          { label: 'Social Impact', href: '/social-impact', phase: 'P2', headerShared: true },
          { label: 'The Foundation', href: '/foundation', phase: 'P2' },
          { label: 'SDGs We Impact', href: '/sdgs', phase: 'P2' },
          { label: 'Mentor & Train', href: '/social-impact/mentor', phase: 'P2' },
          { label: 'Volunteer', href: '/social-impact/volunteer', phase: 'P2' },
          { label: 'Impact Reports', href: '/impact-reports', phase: 'P2' },
        ],
      },
    ],
  },
  {
    bandNumber: 6,
    bandTitle: 'THE INSTITUTION',
    groups: [
      {
        groupNumber: 16,
        title: 'Partner & Invest',
        links: [
          { label: 'Partner With Us', href: '/partner', phase: 'P2', headerShared: true },
          { label: 'Our Brand Partners', href: '/partner/brands', phase: 'P2' },
          { label: 'Become a Partner', href: '/partner/apply', phase: 'P2' },
          { label: 'Sponsorship', href: '/sponsorship', phase: 'P2' },
          { label: 'Advertise With Us', href: '/advertise', phase: 'P2' },
          { label: 'Investors', href: '/investors', phase: 'P2', headerShared: true },
          { label: 'Investor Enquiry', href: '/investors/enquiry', phase: 'P2' },
        ],
      },
      {
        groupNumber: 17,
        title: 'Support',
        links: [
          { label: 'Help Center', href: '/help', phase: 'P2' },
          { label: 'Member FAQ', href: '/membership/faq', phase: 'P1', headerShared: true },
          { label: 'Unity App Help', href: '/help/unity', phase: 'P2' },
          { label: 'Billing & Payments', href: '/help/billing', phase: 'P2' },
          { label: 'Technical Support', href: '/help/technical', phase: 'P2' },
          { label: 'Submit a Ticket', href: '/help/ticket', phase: 'P2' },
          { label: 'Contact', href: '/contact', phase: 'P1', headerShared: true },
        ],
      },
      {
        groupNumber: 18,
        title: 'Company',
        links: [
          { label: 'About Peers Global', href: '/about', phase: 'P1' },
          { label: 'Our Story', href: '/our-story', phase: 'P1', headerShared: true },
          { label: 'Dr. Pravin Parmar', href: '/founder', phase: 'P1', headerShared: true },
          { label: 'Careers', href: '/careers', phase: 'P2' },
          { label: 'Newsroom', href: '/newsroom', phase: 'P2', headerShared: true },
          { label: 'Contact', href: '/contact', phase: 'P1', headerShared: true },
        ],
      },
      {
        groupNumber: 19,
        title: 'Legal',
        links: [
          { label: 'Privacy Policy', href: '/privacy-policy', phase: 'P1' },
          { label: 'Terms of Use', href: '/terms-of-use', phase: 'P1' },
          { label: 'Membership Terms', href: '/membership-terms', phase: 'P1' },
          { label: 'Refund & Cancellation Policy', href: '/refund-policy', phase: 'P1' },
          { label: 'Community Guidelines', href: '/community-guidelines', phase: 'P1' },
          { label: 'The Peers Code', href: '/culture-and-code', phase: 'P1' },
          { label: 'Grievance Redressal', href: '/grievance', phase: 'P1' },
          { label: 'Security & Data', href: '/security', phase: 'P1' },
          { label: 'Sitemap', href: '/sitemap', phase: 'P1' },
        ],
      },
    ],
  },
]

// Backwards compatibility for previous footer columns
export const FOOTER_COLUMNS = FOOTER_BANDS.flatMap((band) =>
  band.groups.map((g) => ({
    title: g.title,
    links: g.links.map((l) => ({ label: l.label, href: l.href })),
  }))
)

export const ACTIVE_CITIES = [
  'Ahmedabad',
  'Gandhinagar',
  'Surat',
  'Rajkot',
  'Vadodara',
  'Morbi',
  'Mundra',
  'Mumbai',
  'Pune',
  'Indore',
  'Bengaluru',
]

export const JOURNEY = [
  {
    step: '01',
    title: 'Explore',
    body: 'Attend an open Circle meeting or a city event as a Guest. No fee, no commitment, and you experience the Circle before applying.',
    cta: { label: 'See upcoming events', href: '/events' },
  },
  {
    step: '02',
    title: 'Apply',
    body: 'Submit your membership application via the Unity App. A Circle Director reviews it for category exclusivity, stage fit and contribution intent.',
    cta: { label: 'View membership criteria', href: '/membership/criteria' },
  },
  {
    step: '03',
    title: 'Belong & Lead',
    body: 'Get inducted into your governed Circle, onboarded to Unity, paired for 1-to-1s and participate in the annual calendar. Leadership tracks open following contribution.',
    cta: { label: 'Explore leadership ladder', href: '/leadership' },
  },
]
