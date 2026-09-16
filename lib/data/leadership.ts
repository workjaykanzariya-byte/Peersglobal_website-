export type Role = {
  slug: string
  code: string
  name: string
  stage: number
  tagline: string
  summary: string
  body: string[]
  owns: string[]
  requirements: string[]
  economics: { label: string; value: string }[]
  timeCommitment: string
  seatsOpen: string
  reportsTo?: string
  nextStep?: { label: string; href: string }
}

/**
 * Vocabulary note (audit finding): the legacy "DED / District Executive Director"
 * label is retired. The correct Phase 1 term is Regional Executive Director (RED).
 */
export const ROLES: Role[] = [
  {
    slug: 'leadership-team',
    code: 'LT',
    name: 'Leadership Team',
    stage: 1,
    tagline: 'The first rung — run one function inside a Circle for twelve months.',
    summary:
      'Every leadership path in Peers Global starts here. Leadership Team members take one named function inside a Circle — visitors, referrals, education or membership — and own its numbers for a year.',
    body: [
      'The Leadership Team exists to make leadership provable before it is promoted. A member takes one function, works it for twelve months, and is measured on a single visible metric that the whole Circle can see monthly.',
      'It is the least glamorous role in the pipeline and the most predictive. Every sitting Circle Founder in the network came through it.',
      'LT members meet as a group fortnightly for thirty minutes, separate from the Circle meeting itself.',
    ],
    owns: [
      'One named function: Visitors, Referrals, Education or Membership',
      'A single monthly metric reported to the room',
      'Onboarding support for new members in that function',
    ],
    requirements: [
      'Circle Member in good standing for 6+ months',
      'Attendance above 80% in the previous two quarters',
      'Nominated by the Circle Director or Circle Founder',
    ],
    economics: [
      { label: 'Fee', value: 'None — voluntary role' },
      { label: 'Benefit', value: 'Priority consideration for Circle Director' },
      { label: 'Term', value: '12 months, renewable once' },
    ],
    timeCommitment: '3–4 hours a month beyond the Circle meeting',
    seatsOpen: '31 across 19 Circles',
    reportsTo: 'Circle Director',
    nextStep: { label: 'Talk to your Circle Director', href: '/contact?intent=leadership' },
  },
  {
    slug: 'circle-director',
    code: 'CD',
    name: 'Circle Director',
    stage: 2,
    tagline: 'Run the room. Own attendance, referral velocity and member health.',
    summary:
      'The Circle Director chairs the monthly meeting, holds the LSR agenda to time and is accountable for the three numbers that decide whether a Circle is alive: attendance, referral velocity and renewal.',
    body: [
      'A Circle Director is an operator, not a host. They chair the room, run the LSR agenda to the minute, chase the 1-to-1 pairing calendar and escalate members who take referrals without giving them.',
      'Directors are appointed by the Circle Founder and confirmed by the Regional Executive Director. Terms are two years with an annual review against the Circle health score.',
      'This is the first role in the pipeline with a revenue share, because it is the first role where outcomes are measurable.',
    ],
    owns: [
      'Monthly Circle meeting chair and agenda discipline',
      'Circle health score: attendance, referral velocity, renewal',
      '1-to-1 pairing calendar and follow-through',
      'Escalation of members in breach of the referral commitment',
    ],
    requirements: [
      'Twelve months completed on a Leadership Team, or equivalent proven leadership',
      'Circle Membership current, no open governance flags',
      'Nominated by the Circle Founder',
    ],
    economics: [
      { label: 'Share', value: '8% of Circle renewal collections' },
      { label: 'Fee', value: 'Circle Membership fee waived for the term' },
      { label: 'Term', value: '2 years, annual review' },
    ],
    timeCommitment: '10–12 hours a month',
    seatsOpen: '6 across 19 Circles',
    reportsTo: 'Circle Founder',
    nextStep: { label: 'Apply for a Director seat', href: '/contact?intent=leadership' },
  },
  {
    slug: 'circle-founder',
    code: 'CF',
    name: 'Circle Founder',
    stage: 3,
    tagline: 'Build a Circle from charter member one. Own its governance and its economics.',
    summary:
      'The flagship leadership role. A Circle Founder builds a room from nothing, governs it under the Peers Global charter, and holds a durable revenue interest in it.',
    body: [
      'Circle Founder is the only role in Peers Global where a member builds an asset. You select the category map, recruit the charter twenty, appoint the Director, and govern the room under the network charter.',
      'It is also the only role with a real downside: an under-governed Circle can be placed under review, and repeated breaches of category exclusivity or referral discipline can end the seat.',
      'The full role, economics and application process are documented on the dedicated Circle Founder page.',
    ],
    owns: [
      'Category map and exclusivity enforcement',
      'Recruitment of charter members to twenty-four',
      'Appointment and review of the Circle Director',
      'Circle P&L and renewal performance',
    ],
    requirements: [
      'Global Member in good standing for 6+ months',
      'Demonstrated network in the target category or city',
      'Cleared the Circle Founder Cohort Briefing',
    ],
    economics: [
      { label: 'Founder share', value: '22% of Circle collections, year one' },
      { label: 'Renewal share', value: '14% of renewals, for the life of the seat' },
      { label: 'City rights', value: 'First right on a second cohort in the same city' },
    ],
    timeCommitment: '20–25 hours a month in year one, 12–15 thereafter',
    seatsOpen: '9 across 5 cities',
    reportsTo: 'Industry Director',
    nextStep: { label: 'See the full Circle Founder brief', href: '/leadership/circle-founder' },
  },
  {
    slug: 'industry-director',
    code: 'ID',
    name: 'Industry Director',
    stage: 4,
    tagline: 'Own one sector across every city it operates in.',
    summary:
      'An Industry Director holds a sector nationally — every Healthcare Circle in every city reports into one Industry Director for standards, category maps and cross-city referral flow.',
    body: [
      'Industry Directors exist so a sector behaves like one network instead of eleven disconnected rooms. They standardise category maps, arbitrate cross-city category conflicts and own the sector’s annual conclave.',
      'The role carries the network’s highest cross-Circle visibility and the corresponding obligation: an Industry Director who lets two cities drift into conflicting category definitions has failed at the core task.',
      'Appointment is by the founder’s office on the recommendation of two sitting Industry Directors.',
    ],
    owns: [
      'National category map for the sector',
      'Standards and governance across all city Circles in the sector',
      'The sector’s annual conclave',
      'Cross-city referral flow and conflict arbitration',
    ],
    requirements: [
      'Two years as a Circle Founder, or three as a Circle Director',
      'Recognised standing in the sector',
      'Recommended by two sitting Industry Directors',
    ],
    economics: [
      { label: 'Share', value: '6% of sector collections nationally' },
      { label: 'Conclave', value: 'Defined share of sector conclave surplus' },
      { label: 'Term', value: '3 years, renewable' },
    ],
    timeCommitment: '15–18 hours a month',
    seatsOpen: '4 sectors unassigned',
    reportsTo: 'Regional Executive Director',
    nextStep: { label: 'Register your interest', href: '/contact?intent=leadership' },
  },
  {
    slug: 'regional-executive-director',
    code: 'RED',
    name: 'Regional Executive Director',
    stage: 5,
    tagline: 'Own a region — its Circles, its leaders and its P&L.',
    summary:
      'The senior-most field role. A Regional Executive Director owns every Circle in a defined region, appoints and reviews Circle Founders, and carries the regional P&L.',
    body: [
      'The Regional Executive Director is Peers Global’s operating leadership in a territory. They open cities, appoint and review Circle Founders, resolve governance escalations and carry the regional P&L against the Mission 2030 plan.',
      'This role replaces the legacy "District Executive Director" title used before 2026. The abbreviation is RED, and it appears nowhere in member-facing material as DED.',
      'Appointments are made by the founder’s office. There is no open application route.',
    ],
    owns: [
      'Regional P&L and city-opening plan',
      'Appointment and review of Circle Founders',
      'Governance escalations and charter enforcement',
      'Regional leadership bench and succession',
    ],
    requirements: [
      'Three years as an Industry Director or Circle Founder with multi-Circle results',
      'Willingness to travel across the region monthly',
      'Appointed by the founder’s office',
    ],
    economics: [
      { label: 'Share', value: 'Regional collections share, contracted individually' },
      { label: 'Equity', value: 'Eligible for the leadership equity pool' },
      { label: 'Term', value: '3 years, performance-reviewed annually' },
    ],
    timeCommitment: 'Substantially full-time',
    seatsOpen: '2 regions — West 2 and Central',
    reportsTo: 'Founder’s office',
    nextStep: { label: 'Contact the founder’s office', href: '/contact?intent=leadership' },
  },
]

export function getRole(slug: string) {
  return ROLES.find((r) => r.slug === slug)
}

/* -------------------------------------------------------------------------- */
/* Public leader directory (lite) — reads the Unity tables where the leader    */
/* has set the public-visibility flag. Static sample stands in for the live    */
/* query until the Unity schema flag ships (see sitemap flag #5).              */
/* -------------------------------------------------------------------------- */

export type Leader = {
  name: string
  role: string
  roleCode: 'CF' | 'CD' | 'ID' | 'RED' | 'LT'
  company: string
  city: string
  circle: string
  circleSlug?: string
  since: string
}

export const LEADERS: Leader[] = [
  { name: 'Dr. Hetal Mehta', role: 'Circle Founder', roleCode: 'CF', company: 'Mehta Multispeciality Hospital', city: 'Ahmedabad', circle: 'Healthcare', circleSlug: 'healthcare', since: '2023' },
  { name: 'Rakesh Vora', role: 'Circle Director', roleCode: 'CD', company: 'Vora Diagnostics', city: 'Ahmedabad', circle: 'Healthcare', circleSlug: 'healthcare', since: '2024' },
  { name: 'Jignesh Patel', role: 'Circle Founder', roleCode: 'CF', company: 'Shreeji Developers', city: 'Ahmedabad', circle: 'Realty & Infrastructure', circleSlug: 'realty-infrastructure', since: '2022' },
  { name: 'Anita Shah', role: 'Circle Director', roleCode: 'CD', company: 'Shah Formwork Systems', city: 'Gandhinagar', circle: 'Realty & Infrastructure', circleSlug: 'realty-infrastructure', since: '2024' },
  { name: 'Kalpesh Rana', role: 'Circle Founder', roleCode: 'CF', company: 'Rana Realty', city: 'Ahmedabad', circle: 'Realty Cohort 2', circleSlug: 'realty-2', since: '2026' },
  { name: 'Bhavesh Thakkar', role: 'Circle Founder', roleCode: 'CF', company: 'Thakkar Precision', city: 'Rajkot', circle: 'Manufacturing', circleSlug: 'manufacturing', since: '2023' },
  { name: 'Nilesh Desai', role: 'Circle Director', roleCode: 'CD', company: 'Desai Polymers', city: 'Vadodara', circle: 'Manufacturing', circleSlug: 'manufacturing', since: '2025' },
  { name: 'Parth Trivedi', role: 'Circle Founder', roleCode: 'CF', company: 'Northbridge Systems', city: 'Ahmedabad', circle: 'IT & Technology', circleSlug: 'technology', since: '2023' },
  { name: 'Sneha Kulkarni', role: 'Circle Director', roleCode: 'CD', company: 'Loopwise SaaS', city: 'Bengaluru', circle: 'IT & Technology', circleSlug: 'technology', since: '2025' },
  { name: 'CA Mitesh Joshi', role: 'Industry Director', roleCode: 'ID', company: 'Joshi & Associates', city: 'Ahmedabad', circle: 'Finance & Advisory', circleSlug: 'finance-advisory', since: '2022' },
  { name: 'Rina Bhatt', role: 'Circle Founder', roleCode: 'CF', company: 'Bhatt Foods', city: 'Ahmedabad', circle: 'Retail & Consumer', circleSlug: 'retail-consumer', since: '2024' },
  { name: 'Dr. Ashish Raval', role: 'Circle Founder', roleCode: 'CF', company: 'Raval Institute of Skills', city: 'Vadodara', circle: 'Education & Skilling', circleSlug: 'education-skilling', since: '2024' },
  { name: 'Imran Qureshi', role: 'Circle Founder', roleCode: 'CF', company: 'Qureshi Roadlines', city: 'Ahmedabad', circle: 'Logistics & Mobility', circleSlug: 'logistics-mobility', since: '2023' },
  { name: 'Vikram Sodha', role: 'Circle Founder', roleCode: 'CF', company: 'Sodha Hospitality', city: 'Ahmedabad', circle: 'Hospitality & Food', circleSlug: 'hospitality-food', since: '2024' },
  { name: 'Dhruv Amin', role: 'Circle Founder', roleCode: 'CF', company: 'Amin Elektrik', city: 'Ahmedabad', circle: 'Scale-Up', circleSlug: 'scale-up', since: '2023' },
  { name: 'Hardik Solanki', role: 'Circle Founder', roleCode: 'CF', company: 'Solanki Ceramics Export', city: 'Morbi', circle: 'Export & Global Trade', circleSlug: 'export-global-trade', since: '2023' },
  { name: 'Nidhi Kapadia', role: 'Circle Founder', roleCode: 'CF', company: 'Kapadia Capital', city: 'Mumbai', circle: 'Fundraising & Investment', circleSlug: 'fundraising-investment', since: '2024' },
  { name: 'Ravi Chauhan', role: 'Circle Founder', roleCode: 'CF', company: 'Chauhan Direct', city: 'Ahmedabad', circle: 'Digital Growth', circleSlug: 'digital-growth', since: '2024' },
  { name: 'Sanjay Modi', role: 'Industry Director', roleCode: 'ID', company: 'Modi Textiles Group', city: 'Ahmedabad', circle: 'Legacy & Family Business', circleSlug: 'legacy-family-business', since: '2022' },
  { name: 'Priyanka Shah', role: 'Circle Founder', roleCode: 'CF', company: 'Shah Nutraceuticals', city: 'Ahmedabad', circle: 'Women Founders', circleSlug: 'women-founders', since: '2024' },
  { name: 'Aarav Doshi', role: 'Circle Founder', roleCode: 'CF', company: 'Doshi Labs', city: 'Ahmedabad', circle: 'Next Gen Entrepreneurs', circleSlug: 'next-gen', since: '2025' },
  { name: 'Meera Iyer', role: 'Circle Founder', roleCode: 'CF', company: 'Iyer Brand Works', city: 'Mumbai', circle: 'Brand & Storytelling', circleSlug: 'brand-storytelling', since: '2024' },
  { name: 'Tushar Panchal', role: 'Circle Founder', roleCode: 'CF', company: 'Panchal Engineering', city: 'Vadodara', circle: 'Systems & Process', circleSlug: 'systems-process', since: '2023' },
  { name: 'Rohan Mehra', role: 'Regional Executive Director', roleCode: 'RED', company: 'Mehra Industries', city: 'Ahmedabad', circle: 'Region West 1', since: '2022' },
]

export const LEADER_ROLE_FILTERS = ['All roles', 'Circle Founder', 'Circle Director', 'Industry Director', 'Regional Executive Director']
export const LEADER_CITIES = Array.from(new Set(LEADERS.map((l) => l.city))).sort()
