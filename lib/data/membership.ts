export type Tier = {
  id: 'explorer' | 'global' | 'circle'
  name: string
  price: string
  priceNote: string
  positioning: string
  summary: string
  bestFor: string
  includes: string[]
  excludes: string[]
  process: string[]
  cta: { label: string; href: string }
  featured?: boolean
}

export const TIERS: Tier[] = [
  {
    id: 'explorer',
    name: 'Explorer',
    price: 'Free — 90 Days',
    priceNote: 'Unity App access · No card required',
    positioning: 'See the community before you commit',
    summary:
      'Explore the community, attend open Circle meetings, and meet the members before committing to anything. No credit card required.',
    bestFor: 'Promoters and founders evaluating whether a governed peer room is worth their calendar.',
    includes: [
      'Unity App access for 90 days',
      'Up to two open Circle meetings as a guest',
      'Access to public city events and mixers',
      'Introduction to the Circle Founder',
    ],
    excludes: [
      'No referral participation',
      'No Circle directory or member data',
      'No 1-to-1 pairing',
      'No leadership eligibility',
    ],
    process: [
      'Request a guest seat for a specific meeting or event',
      'A Circle Founder confirms category availability and slots you in',
      'Attend, ask questions, and decide',
    ],
    cta: { label: 'Start 90-Day Free Exploration', href: '/contact?intent=explorer' },
  },
  {
    id: 'global',
    name: 'Global Membership',
    price: 'Paid',
    priceNote: 'Event access · Full Unity access',
    positioning: 'The base layer of the network',
    summary:
      'Global Membership makes you part of Peers Global across all cities — full Unity access, the Global Member Directory, and instant access to national events.',
    bestFor:
      'Leaders who want network access, national events and cross-city reach without committing to a fixed monthly meeting.',
    includes: [
      'Full Unity platform access — directory, referrals, event calendar',
      'Member directory across 11 cities and 19 Circles',
      'All national conclaves and city mixers at member pricing',
      'Eligibility to apply to any Circle with an open category seat',
      'VyapaarJagat digital edition',
    ],
    excludes: [
      'No seat in a specific governed Circle',
      'No category exclusivity',
      'Leadership tracks require Circle Membership',
    ],
    process: [
      'Submit the Global Membership application',
      'Verification of business details and references',
      'Onboarding call and Unity provisioning inside seven days',
    ],
    cta: { label: 'Apply for Global Membership', href: '/contact?intent=global' },
  },
  {
    id: 'circle',
    name: 'Circle Membership',
    price: '₹18,000',
    priceNote: 'Per year + GST · Includes Global Membership',
    positioning: 'A seat in your circle with category exclusivity',
    summary:
      'A named seat in one governed Circle with category exclusivity in your city cohort. Includes full LSR experience, Brand Showcase, Peers Board of Advisory, referrals and one-to-ones.',
    bestFor:
      'Promoters ready to commit one meeting a month and a fortnightly 1-to-1 in exchange for a room that holds them accountable.',
    includes: [
      'Everything in Global Membership',
      'One named seat in a governed Circle with category exclusivity',
      'Full LSR experience (Learn, Sales, Resources)',
      'Peers Board of Advisory & Brand Showcase slot',
      'Monthly 150-minute Circle meeting & hot seats',
      'Fortnightly structured 1-to-1 pairing',
      'Written referral commitments logged in Unity',
      'Leadership eligibility after 12 months in good standing',
    ],
    excludes: [
      'Category seats are single-occupancy — waitlisting applies',
      'Three consecutive absences trigger membership review',
    ],
    process: [
      'Hold or apply for Global Membership',
      'Circle Founder screens for category exclusivity, stage fit and contribution intent',
      'Attend one meeting as a confirmed applicant',
      'Induction, Unity onboarding and 1-to-1 pairing',
    ],
    cta: { label: 'Apply for a Circle seat', href: '/contact?intent=circle' },
    featured: true,
  },
]

export const COMPARE_ROWS: { label: string; group: string; values: [string, string, string] }[] = [
  { group: 'Access', label: 'Unity platform', values: ['90 Days', 'Full access', 'Full access'] },
  { group: 'Access', label: 'Member directory', values: ['—', '11 cities', '11 cities + Circle roster'] },
  { group: 'Access', label: 'Open Circle meetings', values: ['Up to 2', 'By invitation', 'Own Circle, monthly'] },
  { group: 'The room', label: 'Named Circle seat', values: ['—', '—', 'Yes'] },
  { group: 'The room', label: 'Category exclusivity', values: ['—', '—', 'Yes, per city cohort'] },
  { group: 'The room', label: 'Peers Board of Advisory', values: ['—', '—', 'Yes'] },
  { group: 'The room', label: 'Brand Showcase slot', values: ['—', '—', 'Yes'] },
  { group: 'Growth', label: 'Written referrals', values: ['—', 'Network-wide', 'Circle-logged + network-wide'] },
  { group: 'Growth', label: '1-to-1 facilitation', values: ['—', 'Self-initiated', 'Fortnightly, structured'] },
  { group: 'Growth', label: 'Leadership eligibility', values: ['—', '—', 'After 12 months'] },
  { group: 'Events', label: 'National conclaves', values: ['Guest pricing', 'Member pricing', 'Included'] },
  { group: 'Events', label: 'City mixers', values: ['Yes', 'Yes', 'Yes'] },
  { group: 'Commercial', label: 'Annual fee', values: ['Free (90 Days)', 'Paid', '₹18,000 + GST'] },
]

export const MEMBERSHIP_FAQS = [
  {
    q: 'Do I need Global Membership before a Circle seat?',
    a: 'Yes. Global Membership is the base layer of the network and is a prerequisite for any Circle seat. The two fees are separate and both are annual.',
  },
  {
    q: 'What does category exclusivity actually mean?',
    a: 'One member per business category per city cohort. If a Circle already holds a commercial-interiors contractor in Ahmedabad, a second one is waitlisted or routed to an adjacent Circle. This rule is what makes structured referrals inside the room possible.',
  },
  {
    q: 'What happens if my application is not accepted?',
    a: 'You will be told which of the three screens it did not clear — category availability, stage fit or contribution intent — and whether a waitlist or an adjacent Circle is the right next step. Global Membership remains available regardless.',
  },
  {
    q: 'Can I move between Circles?',
    a: 'Once per membership year, subject to a category seat being open in the destination Circle and the outgoing Circle Founder signing off.',
  },
  {
    q: 'Is the fee refundable?',
    a: 'Global Membership is refundable within 14 days of activation if Unity has not been used. Circle Membership is refundable pro-rata only where Peers Global fails to deliver the contracted meeting calendar. Full terms are in the Refund Policy.',
  },
  {
    q: 'How much time does Circle Membership really take?',
    a: 'One 150-minute meeting a month, one 1-to-1 a fortnight, and one annual presentation. Roughly six to eight hours a month including preparation. Members who miss three consecutive meetings move to review.',
  },
]
