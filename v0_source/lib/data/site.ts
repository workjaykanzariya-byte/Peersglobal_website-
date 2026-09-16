export const SITE = {
  name: 'Peers Global',
  legalName: 'Peers Global Business Media Pvt Ltd',
  tagline: 'Community of Collaboration',
  promise: 'Peers are Partners in Business & Friends in Life',
  closing: 'Saath Chalein.',
  cin: 'U22219GJ2022PTC137646',
  gstin: '24AANCP4546L1ZY',
  city: 'Ahmedabad, India',
  phones: ['+91 93161 20831', '+91 70411 51714'],
  email: 'hello@peersglobal.com',
  statsAsOf: 'Figures as of 30 June 2026, verified against Unity platform records.',
}

/** Canonical, dated trust figures. Nothing on the site may exceed these. */
export const TRUST_STATS = [
  { value: '2,400+', label: 'Members', note: 'Global + Circle, across India' },
  { value: '19', label: 'Active Circles', note: '10 industry · 9 purpose-led' },
  { value: '11', label: 'Cities', note: 'Live chapters, 4 states' },
  { value: '38,000', label: 'Peer hours logged', note: 'Meetings + 1-to-1s, FY 2025–26' },
]

export const OUTCOME_STATS = [
  { value: '₹412 Cr', label: 'Referred business value', note: 'Member-reported, FY 2025–26' },
  { value: '68%', label: 'Members reporting revenue growth', note: 'Annual member survey, n=1,610' },
  { value: '4.6 / 5', label: 'Meeting usefulness score', note: 'Rolling 12-month average' },
  { value: '91%', label: 'Renewal rate', note: 'Circle Members, FY 2025–26' },
]

export const NAV = [
  {
    label: 'Why Peers Global',
    href: '/why-peers-global',
    children: [
      { label: 'Why Peers Global', href: '/why-peers-global', desc: 'A leadership organisation, not a networking group' },
      { label: 'Our Story & Mission', href: '/story', desc: 'From VyapaarJagat to the LSR model' },
      { label: 'Dr. Pravin Parmar', href: '/founder', desc: 'The founder, in his own words' },
      { label: 'Investor Relations', href: '/investors', desc: 'Public credibility layer, gated deck' },
    ],
  },
  { label: 'Circles', href: '/circles', mega: true },
  {
    label: 'Membership',
    href: '/membership',
    children: [
      { label: 'Membership Pathways', href: '/membership', desc: 'Explorer · Global · Circle' },
      { label: 'Compare tiers', href: '/membership#compare', desc: 'Side-by-side, with pricing' },
      { label: 'Unity App', href: '/unity', desc: 'The platform every member runs on' },
    ],
  },
  {
    label: 'Leadership',
    href: '/leadership',
    children: [
      { label: 'Leadership Hub', href: '/leadership', desc: 'The LT → CD → CF → ID → RED pipeline' },
      { label: 'Become a Circle Founder', href: '/leadership/circle-founder', desc: 'Flagship leadership role' },
      { label: 'Circle Director', href: '/leadership/circle-director', desc: 'Run the room, own the outcomes' },
      { label: 'Industry Director', href: '/leadership/industry-director', desc: 'Own a sector across cities' },
      { label: 'Regional Executive Director', href: '/leadership/regional-executive-director', desc: 'Own a region P&L' },
      { label: 'Leader Directory', href: '/leaders', desc: 'Who leads which room, and where' },
    ],
  },
  { label: 'Events', href: '/events' },
  {
    label: 'Stories & Media',
    href: '/stories',
    children: [
      { label: 'Success Stories', href: '/stories', desc: 'Named, located, verifiable' },
      { label: 'Media & Press Kit', href: '/media', desc: 'VyapaarJagat, downloads, coverage' },
    ],
  },
  { label: 'Unity App', href: '/unity' },
]

export const FOOTER_COLUMNS = [
  {
    title: 'Peers Global',
    links: [
      { label: 'Our Story', href: '/story' },
      { label: 'Founder', href: '/founder' },
      { label: 'Mission 2030', href: '/story#mission-2030' },
      { label: 'Careers', href: '/contact?intent=careers' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Grow',
    links: [
      { label: 'Membership', href: '/membership' },
      { label: 'Circles', href: '/circles' },
      { label: 'Leadership Opportunities', href: '/leadership' },
      { label: 'Become a Circle Founder', href: '/leadership/circle-founder' },
      { label: 'Events', href: '/events' },
    ],
  },
  {
    title: 'Ecosystem',
    links: [
      { label: 'Unity App', href: '/unity' },
      { label: 'VyapaarJagat.com', href: '/media#vyapaarjagat' },
      { label: 'Success Stories', href: '/stories' },
      { label: 'Magazine', href: '/media' },
      { label: 'Investor Relations', href: '/investors' },
      { label: 'Press Kit', href: '/media#press-kit' },
      { label: 'Leader Directory', href: '/leaders' },
    ],
  },
  {
    title: 'Trust',
    links: [
      { label: 'FAQs', href: '/faqs' },
      { label: 'Support', href: '/contact?intent=support' },
      { label: 'Privacy Policy', href: '/legal/privacy-policy' },
      { label: 'Terms', href: '/legal/terms' },
      { label: 'Community Guidelines', href: '/legal/community-guidelines' },
      { label: 'Refund Policy', href: '/legal/refund-policy' },
    ],
  },
]

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
    body: 'Attend an open Circle meeting or a city event as an Explorer. No fee, no commitment, and you meet the room before the room meets your application.',
    cta: { label: 'See upcoming events', href: '/events' },
  },
  {
    step: '02',
    title: 'Apply',
    body: 'Submit a Global or Circle Membership application. A Circle Founder screens it for category exclusivity, stage fit and contribution intent — usually inside seven days.',
    cta: { label: 'View membership pathways', href: '/membership' },
  },
  {
    step: '03',
    title: 'Belong',
    body: 'Get inducted into a governed Circle, onboarded to Unity, paired for 1-to-1s and put on the LSR calendar. Leadership tracks open after twelve months in good standing.',
    cta: { label: 'Explore leadership', href: '/leadership' },
  },
]
