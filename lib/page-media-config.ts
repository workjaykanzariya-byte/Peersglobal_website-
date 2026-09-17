export interface PageMediaItem {
  id: string
  pageName: string
  pageSlug: string
  pageId: string
  sectionName: string
  title: string
  description?: string
  mediaType: 'video' | 'photo'
  sourceType: 'url' | 'localhost'
  mediaUrl: string
  thumbnailUrl?: string
  isActive: boolean
  createdAt: string
}

export interface SectionDefinition {
  id: string
  name: string
  subRoute?: string
  description: string
  defaultMediaUrl: string
  defaultSourceType: 'url' | 'localhost'
  defaultTitle: string
}

export interface WebsitePageConfig {
  id: string
  name: string
  slug: string
  livePath: string
  description: string
  sections: SectionDefinition[]
}

/**
 * Strict Website Navigation Page Items & Section Directories
 * Matching the exact website header menu and mega-menus from screenshots:
 * Home Page | Our World | Circles | Membership | Leadership | Unity | Community Life | About
 */
export const WEBSITE_PAGES: WebsitePageConfig[] = [
  {
    id: 'home',
    name: 'Home Page',
    slug: '/',
    livePath: '/',
    description: 'Peers Global homepage featuring ambient hero background, who we are boardroom banner, cyber earth network, leadership showcase, and impact reels.',
    sections: [
      {
        id: 'home-hero',
        name: 'Hero Background Header',
        subRoute: '/',
        description: 'Cinematic full-bleed 4K ambient video showing Indian promoters collaborating with world globe backdrops.',
        defaultMediaUrl: '/videos/hero-background.mp4',
        defaultSourceType: 'localhost',
        defaultTitle: 'Peers Global Grand Launch & Conclave Reel',
      },
      {
        id: 'home-who-we-are',
        name: 'Section Banner Media (Who We Are)',
        subRoute: '/',
        description: 'Boardroom video loop with soft misty gradient fade on the left.',
        defaultMediaUrl: '/videos/homepage-hero-bg.mp4',
        defaultSourceType: 'localhost',
        defaultTitle: 'Who We Are — Collaborative Boardroom Story',
      },
      {
        id: 'home-cyber-earth',
        name: 'Cyber Earth Network (Mission Section)',
        subRoute: '/',
        description: 'High tech globe constellation video loop in the background of the Mission & Purpose section.',
        defaultMediaUrl: '/videos/peers-global-earth-loop.mp4',
        defaultSourceType: 'localhost',
        defaultTitle: 'Global Cyber Earth Network Loop',
      },
      {
        id: 'home-leadership',
        name: 'Featured Video Modal (Leadership Showcase)',
        subRoute: '/',
        description: 'Video backdrop for the Circle Founders and National Governing Council highlight.',
        defaultMediaUrl: '/videos/leadership-hero-bg.mp4',
        defaultSourceType: 'localhost',
        defaultTitle: 'Leadership & Circle Founders Overview',
      },
      {
        id: 'home-testimonials',
        name: 'Story & Impact Reel (Video Testimonials)',
        subRoute: '/',
        description: 'Featured member growth stories and collaboration milestone highlights.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: 'Member Testimonial & Value Reel',
      },
      {
        id: 'home-footer',
        name: 'Footer Video Bar',
        subRoute: '/',
        description: 'Subtle ambient video loop for the call-to-action invitation footer bar.',
        defaultMediaUrl: '/videos/hero-background.mp4',
        defaultSourceType: 'localhost',
        defaultTitle: 'Peers Global Community Invitation Video',
      },
    ],
  },
  {
    id: 'our-world',
    name: 'Our World',
    slug: '/the-idea',
    livePath: '/the-idea',
    description: 'Our World directory containing the founding manifesto, 10 Forms of Collaboration, and core philosophy.',
    sections: [
      {
        id: 'our-world-the-idea',
        name: 'The Idea',
        subRoute: '/the-idea',
        description: 'The founding manifesto and core belief of non-competitive structured peer networking.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: 'The Idea — Founding Manifesto Video',
      },
      {
        id: 'our-world-10-forms',
        name: '10 Forms of Collaboration',
        subRoute: '/10-forms-of-collaboration',
        description: '10 structured forms of peer support, joint ventures, and capital alliances.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: '10 Forms of Collaboration Model Explained',
      },
      {
        id: 'our-world-territory',
        name: 'The Territory',
        subRoute: '/the-territory',
        description: 'Local to global expansion: from city Circle to national and international scale.',
        defaultMediaUrl: '/videos/peers-global-earth-loop.mp4',
        defaultSourceType: 'localhost',
        defaultTitle: 'The Territory — Local to Global Ecosystem',
      },
      {
        id: 'our-world-citizens',
        name: 'The Citizens',
        subRoute: '/the-citizens',
        description: 'The entrepreneurs and promoters who build and govern this community.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: 'The Citizens of Peers Global',
      },
      {
        id: 'our-world-currency',
        name: 'The Currency',
        subRoute: '/the-currency',
        description: 'The Impact System: 1 Action = 1 Life Impacted referral economy.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: 'The Currency — The Impact Economy',
      },
      {
        id: 'our-world-language',
        name: 'The Language',
        subRoute: '/the-language',
        description: 'The vocabulary, lexicon, and give-first principle of Peers Global.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: 'The Language & Give-First Philosophy',
      },
      {
        id: 'our-world-culture-code',
        name: 'Our Culture & Code',
        subRoute: '/culture-and-code',
        description: '6 commitments and rituals of conduct governing peer relationships.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: 'Our Culture & Code of Conduct',
      },
      {
        id: 'our-world-1-million-mission',
        name: 'The 1 Million Mission',
        subRoute: '/1-million-mission',
        description: '1M+ entrepreneurs to impact by 2030 across Bharat and global hubs.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: 'The 1 Million Entrepreneurs Mission by 2030',
      },
    ],
  },
  {
    id: 'circles',
    name: 'Circles',
    slug: '/circles',
    livePath: '/circles',
    description: 'Circles directory containing 18 industry and goal-specific peer circles with category exclusivity.',
    sections: [
      {
        id: 'circles-all',
        name: 'All Circles',
        subRoute: '/circles',
        description: '18 industry and goal-specific Circles with locked seat exclusivity.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: 'All Governed Circles Overview',
      },
      {
        id: 'circles-industry',
        name: 'Browse by Industry',
        subRoute: '/circles/industry',
        description: '9 sector-locked industry Circles preventing internal competition.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: 'Industry Specific Circles Directory',
      },
      {
        id: 'circles-purpose',
        name: 'Browse by Purpose',
        subRoute: '/circles/purpose',
        description: '10 shared-ambition goal Circles for fast growth scaling.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: 'Purpose & Growth Driven Circles',
      },
      {
        id: 'circles-find',
        name: 'Find Your Circle',
        subRoute: '/circles/find',
        description: 'Match with your ideal Circle and Inner Board based on category and city.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: 'Circle Matching & Inner Board Experience',
      },
      {
        id: 'circles-meeting-experience',
        name: 'The Circle Meeting Experience',
        subRoute: '/circle-meeting-experience',
        description: '4-part monthly 150-minute governed meeting structure.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: 'Inside the 150-Minute Governed Circle Meeting',
      },
      {
        id: 'circles-start',
        name: 'Start a Circle',
        subRoute: '/start-a-circle',
        description: 'Convene and launch a new Circle chapter from Day 1 in your city.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: 'How to Start a Circle in Your Region',
      },
      {
        id: 'circles-map',
        name: 'Circle Map — Cities & Countries',
        subRoute: '/map',
        description: 'Live interactive map of active chapters across 11+ Indian cities.',
        defaultMediaUrl: '/videos/peers-global-earth-loop.mp4',
        defaultSourceType: 'localhost',
        defaultTitle: 'Peers Global Chapters & Geographic Footprint',
      },
    ],
  },
  {
    id: 'membership',
    name: 'Membership',
    slug: '/membership',
    livePath: '/membership',
    description: 'Membership directory detailing membership standing, fee tiers, benefits, and application process.',
    sections: [
      {
        id: 'membership-why-join',
        name: 'Why Join',
        subRoute: '/membership',
        description: 'Why your next breakthrough won’t come alone: the power of curated peer boards.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: 'Why Join Peers Global — The Value Proposition',
      },
      {
        id: 'membership-who-belongs',
        name: 'Who Belongs Here',
        subRoute: '/who-belongs-here',
        description: 'The fifteen names test, candidate curation fit, and promoter ethics.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: 'Who Belongs in Peers Global — Candidate Fit',
      },
      {
        id: 'membership-standing',
        name: 'Membership vs Peer Standing',
        subRoute: '/membership-vs-peer-standing',
        description: 'Status word vs relational standing: a relationship you invest in.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: 'Relational Standing & Investment Model',
      },
      {
        id: 'membership-tiers',
        name: 'Compare Tiers',
        subRoute: '/membership/tiers',
        description: 'Full fee transparency and ₹2L+ annual delivered value breakdown.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: 'Membership Tiers & Transparent ROI Comparison',
      },
      {
        id: 'membership-criteria',
        name: 'Criteria & Process',
        subRoute: '/membership/criteria',
        description: '2-step application process and Circle Director board approval.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: 'Admission Criteria & Review Process',
      },
      {
        id: 'membership-benefits',
        name: 'What You Get',
        subRoute: '/membership/benefits',
        description: 'Complete annual calendar, conclave passes, and circle inclusions.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: 'Comprehensive Membership Benefits & Deliverables',
      },
      {
        id: 'membership-faq',
        name: 'Member FAQ',
        subRoute: '/membership/faq',
        description: 'All 10 confirmed question categories answered by leadership.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: 'Frequently Asked Questions by Prospective Members',
      },
      {
        id: 'membership-apply',
        name: 'Apply',
        subRoute: '/apply',
        description: 'Begin your journey through the application and onboarding funnel.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: 'Apply for Peers Global Membership',
      },
    ],
  },
  {
    id: 'leadership',
    name: 'Leadership',
    slug: '/leadership',
    livePath: '/leadership',
    description: 'Leadership directory containing pathway from Member to ecosystem owner, Circle Founder to Governing Council.',
    sections: [
      {
        id: 'leadership-ladder',
        name: 'The Leadership Ladder',
        subRoute: '/leadership',
        description: 'Pathway from Member to ecosystem owner across Bharat and beyond.',
        defaultMediaUrl: '/videos/leadership-hero-bg.mp4',
        defaultSourceType: 'localhost',
        defaultTitle: 'The Leadership Ladder & Governance Structure',
      },
      {
        id: 'leadership-circle-founder',
        name: 'Circle Founder',
        subRoute: '/leadership/circle-founder',
        description: 'Convene and launch new Circles as a founding community architect.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: 'Circle Founder Role, Economics & Impact',
      },
      {
        id: 'leadership-circle-director',
        name: 'Circle Director',
        subRoute: '/leadership/circle-director',
        description: 'Runs and moderates the Circle month on month with structured governance.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: 'Circle Director Leadership & Meeting Stewardship',
      },
      {
        id: 'leadership-industry-director',
        name: 'Industry Director',
        subRoute: '/leadership/industry-director',
        description: 'Sector ecosystem owner for the city coordinating industry clusters.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: 'Industry Director Ecosystem Role',
      },
      {
        id: 'leadership-executive-director',
        name: 'Executive Director',
        subRoute: '/leadership/executive-director',
        description: 'Area, District, State, and Country leadership steward.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: 'Executive Director Regional Leadership',
      },
      {
        id: 'leadership-global-advisors',
        name: 'Global Advisory Board',
        subRoute: '/leadership/global-advisors',
        description: 'Senior entrepreneurs and industry veterans guiding the movement.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: 'Global Advisory Board Keynote',
      },
      {
        id: 'leadership-impact-income',
        name: 'Impact Income',
        subRoute: '/leadership/impact-income',
        description: 'Earn transparent revenue share while contributing to ecosystem growth.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: 'Impact Income Model for Circle Leaders',
      },
      {
        id: 'leadership-apply-to-lead',
        name: 'Apply to Lead',
        subRoute: '/leadership/apply',
        description: 'Submit expression of interest for leadership positions.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: 'Leadership Application & Vetting Overview',
      },
    ],
  },
  {
    id: 'unity',
    name: 'Unity',
    slug: '/unity',
    livePath: '/unity',
    description: 'Unity directory detailing the mobile application, direct chat, peer discovery, and meeting tools.',
    sections: [
      {
        id: 'unity-app-walkthrough',
        name: 'Unity App Walkthrough',
        subRoute: '/unity',
        description: 'Mobile screen recording displaying peer discovery and direct messaging.',
        defaultMediaUrl: '/videos/unity-demo.mp4',
        defaultSourceType: 'localhost',
        defaultTitle: 'Unity App UI Walkthrough & Peer Discovery',
      },
      {
        id: 'unity-peer-discovery',
        name: 'Peer Discovery & Direct Chat',
        subRoute: '/unity/peers',
        description: 'How members connect directly across categories and cities securely.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: 'Peer Discovery & Real-Time Messaging Demo',
      },
      {
        id: 'unity-onboarding',
        name: 'Mobile Experience & Onboarding',
        subRoute: '/unity/onboarding',
        description: 'Speed showcase of hot-seat voting, meeting reminders, and circle directories.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: 'Unity App Onboarding & Mobile Feature Reel',
      },
    ],
  },
  {
    id: 'community-life',
    name: 'Community Life',
    slug: '/events',
    livePath: '/events',
    description: 'Community Life directory containing events, conclaves, peer stories, collaboration wins, and media.',
    sections: [
      {
        id: 'community-events-summits',
        name: 'Events & Summits',
        subRoute: '/events',
        description: 'Monthly meetings, national conclaves, retreats, and annual summits.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: 'Peers Global Conclaves & Summits Reel',
      },
      {
        id: 'community-peer-stories',
        name: 'Peer Stories',
        subRoute: '/stories',
        description: 'Named Peers, verified numbers, and real business outcome stories.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: 'Verified Peer Outcome Stories',
      },
      {
        id: 'community-collaboration-wins',
        name: 'Collaboration Wins',
        subRoute: '/stories/wins',
        description: 'Live feed of confirmed peer actions and joint venture transactions.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: 'Collaboration Wins & Impact Highlights',
      },
      {
        id: 'community-blog-insights',
        name: 'Blog & Insights',
        subRoute: '/insights',
        description: 'Written and recorded by entrepreneurs who built scaling companies.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: 'Peers Insights & Thought Leadership',
      },
      {
        id: 'community-awards',
        name: 'Awards & Recognition',
        subRoute: '/awards',
        description: 'Recognising public contribution and collaboration milestones.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: 'National Peer Awards & Honors Reel',
      },
      {
        id: 'community-gallery',
        name: 'Gallery',
        subRoute: '/gallery',
        description: 'Moments from conclaves, conclave halls, and Circle meetings.',
        defaultMediaUrl: '/videos/hero-background.mp4',
        defaultSourceType: 'localhost',
        defaultTitle: 'Conclave & Circle Meeting Gallery Reel',
      },
      {
        id: 'community-podcast-media',
        name: 'Podcast & Media',
        subRoute: '/media',
        description: 'Peers Candid Talks, TV features, and press coverage.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: 'Peers Candid Talks Podcast & Press Reel',
      },
    ],
  },
  {
    id: 'about',
    name: 'About',
    slug: '/founder',
    livePath: '/founder',
    description: 'About directory detailing our origin story, Dr. Pravin Parmar (Founder), contact, and initiatives.',
    sections: [
      {
        id: 'about-our-story',
        name: 'Our Story',
        subRoute: '/our-story',
        description: 'From a hospital corridor to 1M mission: the origin story of Peers Global.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: 'Our Story — From Hospital Corridor to 1M Mission',
      },
      {
        id: 'about-founder',
        name: 'Dr. Pravin Parmar (Founder)',
        subRoute: '/founder',
        description: 'Founder keynote address, background, and vision of Dr. Pravin Parmar.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: 'Dr. Pravin Parmar Founder Keynote Address',
      },
      {
        id: 'about-contact',
        name: 'Contact',
        subRoute: '/contact',
        description: 'Direct routing and corporate headquarters communication center.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: 'Peers Global Corporate Headquarters & Support',
      },
      {
        id: 'about-initiatives',
        name: 'Our Initiatives',
        subRoute: '/initiatives',
        description: 'VyapaarJagat, Fempreneur & Greenpreneur ecosystem platforms.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: 'Ecosystem Initiatives & National Platforms',
      },
      {
        id: 'about-foundation',
        name: 'Foundation & Social Impact',
        subRoute: '/foundation',
        description: 'Section 8 foundation and evidenced social development goals.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: 'Foundation & Social Impact Programs',
      },
      {
        id: 'about-newsroom',
        name: 'Newsroom',
        subRoute: '/newsroom',
        description: 'Press releases, media coverage, and downloadable brand assets.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: 'Peers Global Press & Media Newsroom',
      },
      {
        id: 'about-partner',
        name: 'Partner With Us',
        subRoute: '/partner-with-us',
        description: 'Institutional partnerships and corporate alliances.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: 'Institutional & Corporate Partnerships',
      },
      {
        id: 'about-investors',
        name: 'Investors',
        subRoute: '/investors',
        description: 'Pre-Series A institutional overview and growth projections.',
        defaultMediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        defaultSourceType: 'url',
        defaultTitle: 'Investor Overview & Scale Strategy',
      },
    ],
  },
]

export const INITIAL_PAGE_MEDIA: PageMediaItem[] = [
  // Home Page Videos
  {
    id: 'pm-home-1',
    pageId: 'home',
    pageName: 'Home Page',
    pageSlug: '/',
    sectionName: 'Hero Background Header',
    title: 'Peers Global Grand Launch & Conclave Reel',
    description: 'High energy ambient background video showing Indian promoters collaborating.',
    mediaType: 'video',
    sourceType: 'localhost',
    mediaUrl: '/videos/hero-background.mp4',
    isActive: true,
    createdAt: '2026-08-01',
  },
  {
    id: 'pm-home-2',
    pageId: 'home',
    pageName: 'Home Page',
    pageSlug: '/',
    sectionName: 'Section Banner Media (Who We Are)',
    title: 'Who We Are — Collaborative Boardroom Story',
    description: 'Boardroom video loop with soft misty gradient fade on the left.',
    mediaType: 'video',
    sourceType: 'localhost',
    mediaUrl: '/videos/homepage-hero-bg.mp4',
    isActive: true,
    createdAt: '2026-08-05',
  },
  {
    id: 'pm-home-3',
    pageId: 'home',
    pageName: 'Home Page',
    pageSlug: '/',
    sectionName: 'Cyber Earth Network (Mission Section)',
    title: 'Global Cyber Earth Network Loop',
    description: 'High tech globe constellation video loop in the background of the Mission & Purpose section.',
    mediaType: 'video',
    sourceType: 'localhost',
    mediaUrl: '/videos/peers-global-earth-loop.mp4',
    isActive: true,
    createdAt: '2026-08-08',
  },
  {
    id: 'pm-home-4',
    pageId: 'home',
    pageName: 'Home Page',
    pageSlug: '/',
    sectionName: 'Featured Video Modal (Leadership Showcase)',
    title: 'Leadership & Circle Founders Overview',
    description: 'Video backdrop for the Circle Founders and National Governing Council highlight.',
    mediaType: 'video',
    sourceType: 'localhost',
    mediaUrl: '/videos/leadership-hero-bg.mp4',
    isActive: true,
    createdAt: '2026-08-10',
  },
  {
    id: 'pm-home-5',
    pageId: 'home',
    pageName: 'Home Page',
    pageSlug: '/',
    sectionName: 'Story & Impact Reel (Video Testimonials)',
    title: 'Member Testimonial & Value Reel',
    description: 'Featured member growth stories and collaboration milestone highlights.',
    mediaType: 'video',
    sourceType: 'url',
    mediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    isActive: true,
    createdAt: '2026-08-12',
  },
  {
    id: 'pm-home-6',
    pageId: 'home',
    pageName: 'Home Page',
    pageSlug: '/',
    sectionName: 'Footer Video Bar',
    title: 'Peers Global Community Invitation Video',
    description: 'Subtle ambient video loop for the call-to-action invitation footer bar.',
    mediaType: 'video',
    sourceType: 'localhost',
    mediaUrl: '/videos/hero-background.mp4',
    isActive: true,
    createdAt: '2026-08-15',
  },

  // Our World
  {
    id: 'pm-our-world-1',
    pageId: 'our-world',
    pageName: 'Our World',
    pageSlug: '/the-idea',
    sectionName: 'The Idea',
    title: 'The Idea — Founding Manifesto Video',
    description: 'The founding manifesto and core belief of non-competitive structured peer networking.',
    mediaType: 'video',
    sourceType: 'url',
    mediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    isActive: true,
    createdAt: '2026-08-01',
  },

  // Circles
  {
    id: 'pm-circles-1',
    pageId: 'circles',
    pageName: 'Circles',
    pageSlug: '/circles',
    sectionName: 'All Circles',
    title: 'All Governed Circles Overview',
    description: '18 industry and goal-specific Circles with locked seat exclusivity.',
    mediaType: 'video',
    sourceType: 'url',
    mediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    isActive: true,
    createdAt: '2026-08-20',
  },

  // Membership
  {
    id: 'pm-membership-1',
    pageId: 'membership',
    pageName: 'Membership',
    pageSlug: '/membership',
    sectionName: 'Why Join',
    title: 'Why Join Peers Global — The Value Proposition',
    description: 'Why your next breakthrough won’t come alone: the power of curated peer boards.',
    mediaType: 'video',
    sourceType: 'url',
    mediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    isActive: true,
    createdAt: '2026-08-10',
  },

  // Leadership
  {
    id: 'pm-leadership-1',
    pageId: 'leadership',
    pageName: 'Leadership',
    pageSlug: '/leadership',
    sectionName: 'The Leadership Ladder',
    title: 'The Leadership Ladder & Governance Structure',
    description: 'Pathway from Member to ecosystem owner across Bharat and beyond.',
    mediaType: 'video',
    sourceType: 'localhost',
    mediaUrl: '/videos/leadership-hero-bg.mp4',
    isActive: true,
    createdAt: '2026-08-12',
  },

  // Unity
  {
    id: 'pm-unity-1',
    pageId: 'unity',
    pageName: 'Unity',
    pageSlug: '/unity',
    sectionName: 'Unity App Walkthrough',
    title: 'Unity App UI Walkthrough & Peer Discovery',
    description: 'Mobile app screen demonstration video for Android & iOS users.',
    mediaType: 'video',
    sourceType: 'localhost',
    mediaUrl: '/videos/unity-demo.mp4',
    isActive: true,
    createdAt: '2026-08-15',
  },

  // Community Life
  {
    id: 'pm-community-1',
    pageId: 'community-life',
    pageName: 'Community Life',
    pageSlug: '/events',
    sectionName: 'Events & Summits',
    title: 'Peers Global Conclaves & Summits Reel',
    description: 'Monthly meetings, national conclaves, retreats, and annual summits.',
    mediaType: 'video',
    sourceType: 'url',
    mediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    isActive: true,
    createdAt: '2026-08-18',
  },

  // About
  {
    id: 'pm-about-1',
    pageId: 'about',
    pageName: 'About',
    pageSlug: '/our-story',
    sectionName: 'Our Story',
    title: 'Our Story — From Hospital Corridor to 1M Mission',
    description: 'From a hospital corridor to 1M mission: the origin story of Peers Global.',
    mediaType: 'video',
    sourceType: 'url',
    mediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    isActive: true,
    createdAt: '2026-08-10',
  },
  {
    id: 'pm-about-2',
    pageId: 'about',
    pageName: 'About',
    pageSlug: '/founder',
    sectionName: 'Dr. Pravin Parmar (Founder)',
    title: 'Dr. Pravin Parmar Founder Keynote Address',
    description: 'Founder keynote address, background, and vision of Dr. Pravin Parmar.',
    mediaType: 'video',
    sourceType: 'url',
    mediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    isActive: true,
    createdAt: '2026-08-12',
  },
]

export function getPageConfigBySlugOrId(identifier: string): WebsitePageConfig | undefined {
  const clean = identifier.toLowerCase().trim().replace(/^\//, '')

  // Direct matches
  const direct =
    WEBSITE_PAGES.find((p) => p.id.toLowerCase() === clean) ||
    WEBSITE_PAGES.find((p) => p.slug.toLowerCase().replace(/^\//, '') === clean) ||
    WEBSITE_PAGES.find((p) => (clean === '' || clean === 'home') && p.id === 'home') ||
    WEBSITE_PAGES.find((p) => p.name.toLowerCase() === clean)

  if (direct) return direct

  // Alias lookups
  if (clean === 'the-idea' || clean === 'the-idea-our-world' || clean === 'idea') {
    return WEBSITE_PAGES.find((p) => p.id === 'our-world')
  }
  if (clean === 'events' || clean === 'conclaves-events' || clean === 'conclaves' || clean === 'stories') {
    return WEBSITE_PAGES.find((p) => p.id === 'community-life')
  }
  if (clean === 'founder' || clean === 'dr-pravin-parmar' || clean === 'our-story') {
    return WEBSITE_PAGES.find((p) => p.id === 'about')
  }
  if (clean === 'peer-circles' || clean === 'circle') {
    return WEBSITE_PAGES.find((p) => p.id === 'circles')
  }
  if (clean === 'unity-app') {
    return WEBSITE_PAGES.find((p) => p.id === 'unity')
  }

  return undefined
}

export function getYouTubeEmbedUrl(url: string): string | null {
  if (!url) return null
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  if (match && match[2].length === 11) {
    return `https://www.youtube.com/embed/${match[2]}?autoplay=1`
  }
  return null
}
