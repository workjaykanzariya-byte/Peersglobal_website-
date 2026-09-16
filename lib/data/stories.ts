export type Story = {
  slug: string
  name: string
  company: string
  role: string
  city: string
  circle: string
  circleSlug?: string
  memberSince: string
  headline: string
  pull: string
  /** the single hard number this story is allowed to claim */
  metric: { value: string; label: string; source: string }
  /** structured narrative: situation → what the Circle did → outcome */
  situation: string[]
  intervention: string[]
  outcome: string[]
  verifiedNote: string
  tags: string[]
  featured?: boolean
}

export const STORIES: Story[] = [
  {
    slug: 'mehta-multispeciality-capex',
    name: 'Dr. Hetal Mehta',
    company: 'Mehta Multispeciality Hospital',
    role: 'Managing Director',
    city: 'Ahmedabad',
    circle: 'Healthcare',
    circleSlug: 'healthcare',
    memberSince: '2023',
    headline: 'The Circle talked her out of a ₹4.2 crore second unit — and into a better one',
    pull: 'I came in for referrals. The most valuable thing I got was a room willing to tell me my plan was wrong.',
    metric: {
      value: '₹4.2 Cr',
      label: 'Capex deferred, then redeployed',
      source: 'Member-reported, Healthcare Circle hot seat log, Nov 2024',
    },
    situation: [
      'Mehta Multispeciality had run a profitable 62-bed hospital in west Ahmedabad for eleven years. In late 2024 the family was six weeks from signing on a second unit — 40 beds, a new catchment, ₹4.2 crore of committed capex, most of it debt-funded against the existing unit.',
      'The financial model worked on paper. What it did not carry was a staffing plan for a second set of intensivists in a city where critical-care retention was already the hardest line item in the P&L.',
    ],
    intervention: [
      'Dr. Mehta put the plan in the Healthcare Circle hot seat in November 2024. Ninety minutes, twelve non-competing promoters, no consultants in the room.',
      'Two members had opened second units in the previous three years. Both had underestimated clinical staffing by roughly forty percent in year one. A diagnostics operator in the room pulled up his own ARPOB ramp to show how long the second unit actually took to break even.',
      'The room did not tell her to stop. It told her to sequence — hold the second unit, spend a fraction of the capex deepening the existing unit’s cath lab and daycare capacity first, and revisit the second site once a second intensivist bench existed.',
    ],
    outcome: [
      'The second-unit signing was deferred. ₹1.1 crore was redeployed into daycare and cath-lab capacity at the existing hospital, funded without new debt.',
      'The remaining commitment stayed unspent for fourteen months. In early 2026 the same site was re-negotiated at materially better terms, with two intensivists already recruited through a Circle referral.',
    ],
    verifiedNote:
      'Figures are member-reported and cross-checked against the Circle hot-seat log in Unity. Peers Global does not audit member financials.',
    tags: ['Capex discipline', 'Hot seat', 'Healthcare'],
    featured: true,
  },
  {
    slug: 'solanki-ceramics-export',
    name: 'Hardik Solanki',
    company: 'Solanki Ceramics Export',
    role: 'Founder',
    city: 'Morbi',
    circle: 'Export & Global Trade',
    circleSlug: 'export-global-trade',
    memberSince: '2023',
    headline: 'Two new export markets, opened through a member who had already failed in one of them',
    pull: 'The useful part was not the introduction. It was the member who told me exactly how he lost money in Kenya first.',
    metric: {
      value: '2',
      label: 'New export markets entered',
      source: 'Member-reported, Export Circle referral log, FY 2025–26',
    },
    situation: [
      'Solanki Ceramics ran a Morbi tile plant selling almost entirely into the Gulf. Concentration risk was obvious: three buyers, one geography, and pricing set by a market the company did not influence.',
      'Two attempts at East Africa had stalled — one at documentation, one at a buyer who disappeared after a partial payment.',
    ],
    intervention: [
      'The Export & Global Trade Circle runs a standing agenda item on documentation failure, because that is where most first-time exporters actually lose money.',
      'A member who had spent three years in Kenya walked Hardik through his own losses — the freight-forwarder structure that failed, the LC terms he should have insisted on, and the two clearing agents worth using.',
      'A second member introduced a buyer in Tanzania directly, with a written referral commitment logged in Unity so the introduction carried accountability.',
    ],
    outcome: [
      'Kenya and Tanzania both moved from stalled to shipping inside eleven months, with LC-backed terms from the first order.',
      'Gulf concentration dropped from near-total to roughly two-thirds of order book by value.',
    ],
    verifiedNote:
      'Market entry confirmed against the Circle referral log. Order-book share is member-reported and not independently audited.',
    tags: ['Export', 'Referral', 'Concentration risk'],
    featured: true,
  },
  {
    slug: 'shah-nutraceuticals-governance',
    name: 'Priyanka Shah',
    company: 'Shah Nutraceuticals',
    role: 'Co-founder',
    city: 'Ahmedabad',
    circle: 'Women Founders',
    circleSlug: 'women-founders',
    memberSince: '2024',
    headline: 'A shareholders’ agreement rewritten before the raise, not during it',
    pull: 'Everyone advises you after the term sheet. This room made me fix the cap table before there was one.',
    metric: {
      value: '11 months',
      label: 'Governance runway built before first term sheet',
      source: 'Member-reported, Women Founders Circle, 2025–26',
    },
    situation: [
      'Shah Nutraceuticals was growing fast on a founder-and-family cap table with no shareholders’ agreement, no formal board and informal salary arrangements for two working family members.',
      'A first institutional conversation had begun. Nothing in the company’s paperwork was ready for diligence.',
    ],
    intervention: [
      'The Women Founders Circle paired Priyanka for structured 1-to-1s with a member who had closed a Series A and a member who had walked away from one.',
      'A Finance & Advisory Circle member joined a cross-Circle session on founder-vesting and family-employment terms — the two issues most likely to blow up mid-diligence.',
      'The Circle held her to a written eleven-month governance plan reviewed at every monthly meeting.',
    ],
    outcome: [
      'A shareholders’ agreement, formal board with one independent director, and clean family-employment contracts were all in place before the first term sheet arrived.',
      'Diligence on the eventual raise closed without a governance-related condition.',
    ],
    verifiedNote: 'Governance milestones confirmed by the Circle Founder. Deal terms are not disclosed.',
    tags: ['Governance', 'Fundraising', 'Women Founders'],
    featured: true,
  },
  {
    slug: 'thakkar-precision-systems',
    name: 'Bhavesh Thakkar',
    company: 'Thakkar Precision',
    role: 'Managing Partner',
    city: 'Rajkot',
    circle: 'Manufacturing',
    circleSlug: 'manufacturing',
    memberSince: '2023',
    headline: 'On-time delivery moved because the shop floor got a peer audit, not a consultant',
    pull: 'Four promoters walked my floor and told me what they saw. No invoice, no slide deck.',
    metric: {
      value: '74% → 93%',
      label: 'On-time delivery, twelve months',
      source: 'Member-reported, Manufacturing Circle plant-visit log, FY 2025–26',
    },
    situation: [
      'Thakkar Precision supplied machined components to two large OEMs. On-time delivery had been stuck in the mid-seventies for years, and the penalty clauses were beginning to bite.',
      'Two consulting engagements had produced documentation the shop floor never used.',
    ],
    intervention: [
      'The Manufacturing Circle runs quarterly peer plant visits — four members walk one member’s floor and report back to the room in writing.',
      'The visit identified scheduling, not capacity, as the constraint: three machines were being sequenced by whoever shouted loudest that morning.',
      'A member running a similar plant shared his actual planning board and daily-standup format, then reviewed adoption monthly for two quarters.',
    ],
    outcome: [
      'On-time delivery moved from 74% to 93% over twelve months against the same installed capacity.',
      'One OEM raised annual volume the following contract cycle.',
    ],
    verifiedNote: 'Delivery figures are member-reported from internal ERP data, cross-referenced with the plant-visit report.',
    tags: ['Operations', 'Peer audit', 'Manufacturing'],
  },
  {
    slug: 'northbridge-systems-pricing',
    name: 'Parth Trivedi',
    company: 'Northbridge Systems',
    role: 'Founder',
    city: 'Ahmedabad',
    circle: 'IT & Technology',
    circleSlug: 'technology',
    memberSince: '2023',
    headline: 'A services company stopped quoting hours and started quoting outcomes',
    pull: 'The room refused to let me present a rate card twice. That was the whole intervention.',
    metric: {
      value: '+38%',
      label: 'Average deal size',
      source: 'Member-reported, Technology Circle, FY 2025–26',
    },
    situation: [
      'Northbridge built custom software for mid-market Indian manufacturers, priced per developer-day. Margins compressed every year as buyers benchmarked rates.',
      'The pipeline was healthy. The pricing model was the problem.',
    ],
    intervention: [
      'The IT & Technology Circle put pricing on the education slot for two consecutive months, with a SaaS founder and an agency owner presenting how they had moved off time-and-materials.',
      'Parth rebuilt three live proposals as outcome-priced engagements and brought them back to the room for teardown before sending them.',
      'Two Manufacturing Circle members — actual buyers of this kind of work — sat in and said plainly which framing they would have paid more for.',
    ],
    outcome: [
      'Average deal size rose 38% across the following four quarters on a similar volume of proposals.',
      'Two of the three rebuilt proposals closed at outcome-based pricing.',
    ],
    verifiedNote: 'Deal-size change is member-reported from CRM data and not independently audited.',
    tags: ['Pricing', 'Cross-Circle', 'Technology'],
  },
  {
    slug: 'qureshi-roadlines-fleet',
    name: 'Imran Qureshi',
    company: 'Qureshi Roadlines',
    role: 'Director',
    city: 'Ahmedabad',
    circle: 'Logistics & Mobility',
    circleSlug: 'logistics-mobility',
    memberSince: '2023',
    headline: 'Fleet financing restructured with terms a peer had already negotiated',
    pull: 'Someone in the room had signed the exact facility I was about to sign, two years earlier.',
    metric: {
      value: '140 bps',
      label: 'Reduction in blended cost of fleet debt',
      source: 'Member-reported, Logistics Circle 1-to-1 log, 2025',
    },
    situation: [
      'Qureshi Roadlines was expanding a 90-truck fleet and had a term sheet from an NBFC with a structure the family had not benchmarked.',
      'The business had never run a competitive process for vehicle finance.',
    ],
    intervention: [
      'A 1-to-1 with a Circle member who had financed a larger fleet surfaced the covenant and prepayment terms worth contesting.',
      'A Finance & Advisory Circle member reviewed the sheet and modelled two alternative structures.',
      'The Circle Director held Imran to running an actual three-lender process rather than accepting the first offer.',
    ],
    outcome: [
      'Blended cost of fleet debt came in roughly 140 basis points below the original term sheet.',
      'Prepayment penalties were removed entirely from the final facility.',
    ],
    verifiedNote: 'Financing terms are member-reported. Lender names withheld at the member’s request.',
    tags: ['Finance', '1-to-1', 'Logistics'],
  },
  {
    slug: 'bhatt-foods-distribution',
    name: 'Rina Bhatt',
    company: 'Bhatt Foods',
    role: 'Promoter',
    city: 'Ahmedabad',
    circle: 'Retail & Consumer',
    circleSlug: 'retail-consumer',
    memberSince: '2024',
    headline: 'Six new distributor towns, all sourced inside the network',
    pull: 'Distributors are a trust business. A referred distributor starts at a different place than a cold one.',
    metric: {
      value: '6',
      label: 'New distributor towns onboarded',
      source: 'Member-reported, Retail Circle referral log, FY 2025–26',
    },
    situation: [
      'Bhatt Foods had strong brand pull in Ahmedabad and almost no distribution beyond it. Two cold-appointed distributors in north Gujarat had failed inside a year.',
      'The company had no reliable way to assess a distributor before signing one.',
    ],
    intervention: [
      'The Retail & Consumer Circle maintains a member-contributed distributor scorecard covering more than two hundred trade partners across Gujarat and Maharashtra.',
      'Four members made written referrals to distributors they personally worked with, each carrying an accountability note in Unity.',
      'The Circle reviewed onboarding monthly for two quarters so early failures surfaced fast.',
    ],
    outcome: [
      'Six distributor towns were onboarded across FY 2025–26, with none discontinued inside the first year.',
      'Secondary-sales reporting discipline improved because referred distributors were accountable to a peer, not just to a contract.',
    ],
    verifiedNote: 'Distributor count verified against the Circle referral log. Revenue impact not disclosed.',
    tags: ['Distribution', 'Referral', 'Consumer'],
  },
  {
    slug: 'doshi-labs-next-gen',
    name: 'Aarav Doshi',
    company: 'Doshi Labs',
    role: 'Next-gen promoter',
    city: 'Ahmedabad',
    circle: 'Next Gen Entrepreneurs',
    circleSlug: 'next-gen',
    memberSince: '2025',
    headline: 'A succession conversation that finally happened outside the family',
    pull: 'My father and I could not have this conversation at home. We could have it in front of eleven other families.',
    metric: {
      value: '3 years',
      label: 'Written succession runway agreed',
      source: 'Member-reported, Next Gen Circle, 2026',
    },
    situation: [
      'Doshi Labs was a second-generation chemicals business. Aarav had returned from a corporate role into an undefined position with no authority and no timeline.',
      'Every attempt at a succession conversation at home ended as a family argument.',
    ],
    intervention: [
      'The Next Gen Entrepreneurs Circle runs paired sessions where the incoming and outgoing generation both attend, in a room of other families facing the same transition.',
      'A Legacy & Family Business Circle member who had completed a handover chaired the session.',
      'The output was required to be written: named responsibilities, decision rights and dated review points.',
    ],
    outcome: [
      'A three-year written succession runway was agreed, with P&L ownership of one product line transferring immediately.',
      'Both generations now attend the paired session annually as a review mechanism.',
    ],
    verifiedNote: 'Succession plan confirmed by both members. Financial details not disclosed.',
    tags: ['Succession', 'Family business', 'Next Gen'],
  },
]

export const FEATURED_STORIES = STORIES.filter((s) => s.featured)
export const STORY_TAGS = Array.from(new Set(STORIES.flatMap((s) => s.tags))).sort()
export const STORY_CITIES = Array.from(new Set(STORIES.map((s) => s.city))).sort()

export function getStory(slug: string) {
  return STORIES.find((s) => s.slug === slug)
}
