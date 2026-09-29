export type CircleType = 'industry' | 'purpose'

export type CircleTestimonial = {
  quote: string
  name: string
  company: string
  city: string
}

export type Circle = {
  slug: string
  name: string
  type: CircleType
  cohort?: string
  tagline: string
  summary: string
  body: string[]
  members: number
  cities: string[]
  cadence: string
  nextMeeting: string
  focus: string[]
  eligibility: string[]
  founder: { name: string; role: string; company: string; city: string }
  director?: { name: string; role: string; company: string; city: string }
  chairs?: { id: string; name: string; company: string; city: string; role: string; joinedAt: string; email?: string }[]
  viceChair?: { id: string; name: string; company: string; city: string; role: string; joinedAt: string; email?: string }
  peerMembers?: { id: string; name: string; company: string; city: string; role: string; joinedAt: string; email?: string }[]
  testimonials: CircleTestimonial[]
  faqs: { q: string; a: string }[]
  seatsOpen: number
}

const faqsBase = (name: string) => [
  {
    q: `Who is eligible to join the ${name}?`,
    a: `Applicants must be a promoter, founder, partner or CXO with decision authority, hold a valid Global Membership, and clear a category-exclusivity check so no two members compete directly inside the same Circle.`,
  },
  {
    q: 'How many members can a single category hold?',
    a: 'One. Category exclusivity is enforced per city cohort — once a category seat is filled, further applicants are waitlisted or routed to an adjacent Circle.',
  },
  {
    q: 'What is the time commitment?',
    a: 'One structured Circle meeting a month (150 minutes), one 1-to-1 peer meeting a fortnight, and one annual Circle presentation.',
  },
]

export const CIRCLES: Circle[] = [
  // 1. Ahmedabad Tech Circle
  {
    slug: 'ahmedabad-tech',
    name: 'Ahmedabad Tech Circle',
    type: 'industry',
    tagline: 'SaaS, DeepTech & IT Enterprise promoters in Ahmedabad.',
    summary: 'Governed Circle for B2B software founders, IT export company owners, and technology enterprise promoters in Ahmedabad.',
    body: [
      'Ahmedabad Tech Circle brings together non-competing technology founders across SaaS, AI services, custom software development, and cloud infrastructure.',
      'Members discuss engineering talent retention, US/Europe client acquisition, pricing governance, and operational scaling.'
    ],
    members: 0,
    cities: ['Ahmedabad', 'Gandhinagar', 'Vadodara'],
    cadence: 'Third Thursday of every month · 150 minutes',
    nextMeeting: '20 August 2026',
    focus: ['SaaS Revenue Scale', 'US/EU Client Acquisition', 'Tech Talent Retention', 'AI & Cloud Integration'],
    eligibility: ['Founder, Co-founder or Director of an active Tech/IT enterprise'],
    founder: { name: 'Avinash Vaghela', role: 'Circle Founder', company: 'TechVeda Solutions', city: 'Ahmedabad' },
    peerMembers: [],
    testimonials: [],
    faqs: faqsBase('Ahmedabad Tech Circle'),
    seatsOpen: 30,
  },

  // 2. Ahmedabad District Founding Members
  {
    slug: 'ahmedabad-district-founding-members',
    name: 'Ahmedabad District Founding Members',
    type: 'purpose',
    tagline: 'Leaders building ecosystem in the Ahmedabad district.',
    summary: 'Founding leaders and ecosystem architects driving peer governance and business growth across Ahmedabad district.',
    body: ['Connecting key promoters shaping the economic and industrial expansion of Ahmedabad.'],
    members: 0,
    cities: ['Ahmedabad'],
    cadence: 'First Tuesday of every month · 150 minutes',
    nextMeeting: '04 August 2026',
    focus: ['District Ecosystem', 'Peer Governance', 'Cross-Industry Alliances'],
    eligibility: ['Promoter or Key Executive in Ahmedabad District'],
    founder: { name: 'Dr. Pravin Parmar', role: 'Circle Founder', company: 'Peers Global', city: 'Ahmedabad' },
    peerMembers: [],
    testimonials: [],
    faqs: faqsBase('Ahmedabad District Founding Members'),
    seatsOpen: 30,
  },

  // 3. Bengaluru District Founding Members
  {
    slug: 'bengaluru-district-founding-members',
    name: 'Bengaluru District Founding Members',
    type: 'purpose',
    tagline: 'Leaders building ecosystem in the Bengaluru district.',
    summary: 'Founding leaders and tech ecosystem architects driving peer governance across Bengaluru district.',
    body: ['Connecting tech and enterprise promoters shaping the innovation hub of Bengaluru.'],
    members: 0,
    cities: ['Bengaluru'],
    cadence: 'First Wednesday of every month · 150 minutes',
    nextMeeting: '05 August 2026',
    focus: ['Tech Innovation', 'Venture Expansion', 'South India Expansion'],
    eligibility: ['Promoter or Executive in Bengaluru District'],
    founder: { name: 'Deepa Krishnan', role: 'Circle Founder', company: 'Krishnan Ventures', city: 'Bengaluru' },
    peerMembers: [],
    testimonials: [],
    faqs: faqsBase('Bengaluru District Founding Members'),
    seatsOpen: 30,
  },

  // 4. Delhi District Founding Members
  {
    slug: 'delhi-district-founding-members',
    name: 'Delhi District Founding Members',
    type: 'purpose',
    tagline: 'Leaders building ecosystem in the Delhi district.',
    summary: 'Founding leaders driving peer governance and enterprise policy across Delhi NCR district.',
    body: ['Connecting business leaders in the National Capital Region for governed peer collaboration.'],
    members: 0,
    cities: ['Delhi'],
    cadence: 'Second Thursday of every month · 150 minutes',
    nextMeeting: '13 August 2026',
    focus: ['Capital Region Alliances', 'Policy & Policy Scale', 'Enterprise Trade'],
    eligibility: ['Promoter or Director in Delhi NCR'],
    founder: { name: 'Dr. Pravin Parmar', role: 'Circle Founder', company: 'Peers Global', city: 'Delhi' },
    peerMembers: [],
    testimonials: [],
    faqs: faqsBase('Delhi District Founding Members'),
    seatsOpen: 30,
  },

  // 5. Mumbai District Founding Members
  {
    slug: 'mumbai-district-founding-members',
    name: 'Mumbai District Founding Members',
    type: 'purpose',
    tagline: 'Leaders building ecosystem in the Mumbai district.',
    summary: 'Founding leaders and financial promoters driving peer governance across Mumbai district.',
    body: ['Connecting financial, commercial and industrial promoters in India’s commercial capital.'],
    members: 0,
    cities: ['Mumbai'],
    cadence: 'Second Tuesday of every month · 150 minutes',
    nextMeeting: '11 August 2026',
    focus: ['Financial Capital Trade', 'Commercial Scaling', 'Corporate Governance'],
    eligibility: ['Promoter or Director in Mumbai Region'],
    founder: { name: 'Manish Agrawal', role: 'Circle Founder', company: 'Agrawal Trading Corp', city: 'Mumbai' },
    peerMembers: [],
    testimonials: [],
    faqs: faqsBase('Mumbai District Founding Members'),
    seatsOpen: 30,
  },

  // 6. Rajkot District Founding Members
  {
    slug: 'rajkot-district-founding-members',
    name: 'Rajkot District Founding Members',
    type: 'purpose',
    tagline: 'Leaders building ecosystem in the Rajkot district.',
    summary: 'Founding industrial promoters driving engineering and foundry peer governance in Rajkot district.',
    body: ['Connecting manufacturing and industrial leaders in the Saurashtra region.'],
    members: 0,
    cities: ['Rajkot'],
    cadence: 'Third Tuesday of every month · 150 minutes',
    nextMeeting: '18 August 2026',
    focus: ['Engineering Hub', 'Foundry Exports', 'Industrial Automation'],
    eligibility: ['Promoter in Rajkot Industrial Belt'],
    founder: { name: 'Amit Rawal', role: 'Circle Founder', company: 'Rawal Engineering', city: 'Rajkot' },
    peerMembers: [],
    testimonials: [],
    faqs: faqsBase('Rajkot District Founding Members'),
    seatsOpen: 30,
  },

  // 7. Community Builders Circle
  {
    slug: 'community-builders-circle',
    name: 'Community Builders Circle',
    type: 'purpose',
    tagline: 'People who grow cities and community ecosystems.',
    summary: 'A dedicated chapter for ecosystem enablers, community leaders, and city builders.',
    body: ['Fostering collaboration between leaders scaling regional business ecosystems.'],
    members: 0,
    cities: ['Ahmedabad', 'Mumbai', 'Bengaluru'],
    cadence: 'Fourth Thursday of every month · 150 minutes',
    nextMeeting: '27 August 2026',
    focus: ['Ecosystem Growth', 'City Expansion', 'Peer Mentorship'],
    eligibility: ['Ecosystem Leader or Community Builder'],
    founder: { name: 'Dr. Pravin Parmar', role: 'Circle Founder', company: 'Peers Global', city: 'Ahmedabad' },
    peerMembers: [],
    testimonials: [],
    faqs: faqsBase('Community Builders Circle'),
    seatsOpen: 30,
  },

  // 8. Industry Directors Circle
  {
    slug: 'industry-directors-circle',
    name: 'Industry Directors Circle',
    type: 'purpose',
    tagline: 'Strategic advisors across industry verticals.',
    summary: 'A strategic advisory room for Industry Directors governing sector specific Circles nationwide.',
    body: ['Aligning sector strategies and multi-city industry growth across Peers Global.'],
    members: 0,
    cities: ['Ahmedabad', 'Mumbai', 'Delhi'],
    cadence: 'First Friday of every month · 150 minutes',
    nextMeeting: '07 August 2026',
    focus: ['Sector Governance', 'Industry Benchmarking', 'National Trade Alliances'],
    eligibility: ['Appointed Industry Director in Peers Global'],
    founder: { name: 'Deepa Krishnan', role: 'Circle Founder', company: 'Krishnan Ventures', city: 'Bengaluru' },
    peerMembers: [],
    testimonials: [],
    faqs: faqsBase('Industry Directors Circle'),
    seatsOpen: 30,
  },

  // 9. Circle Directors Circle
  {
    slug: 'circle-directors-circle',
    name: 'Circle Directors Circle',
    type: 'purpose',
    tagline: 'Leaders growing governed Circles.',
    summary: 'An operational leadership room for Circle Directors managing city cohorts and chapter growth.',
    body: ['Sharing operational best practices and member engagement strategies across city Circles.'],
    members: 0,
    cities: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot'],
    cadence: 'Second Friday of every month · 150 minutes',
    nextMeeting: '14 August 2026',
    focus: ['Circle Operations', 'LSR Facilitation', 'Category Seat Auditing'],
    eligibility: ['Appointed Circle Director in Peers Global'],
    founder: { name: 'Sonal Patel', role: 'Circle Founder', company: 'Patel Textiles Exim', city: 'Ahmedabad' },
    peerMembers: [],
    testimonials: [],
    faqs: faqsBase('Circle Directors Circle'),
    seatsOpen: 30,
  },

  // 10. Circle Founders Circle
  {
    slug: 'circle-founders-circle',
    name: 'Circle Founders Circle',
    type: 'purpose',
    tagline: 'Leaders building city Circle cohorts.',
    summary: 'A peer chapter for Circle Founders building and governing new Circle cohorts in their cities.',
    body: ['Exchanging cohort launch strategies, category curation, and promoter onboarding.'],
    members: 0,
    cities: ['Ahmedabad', 'Surat', 'Mumbai', 'Pune'],
    cadence: 'Third Friday of every month · 150 minutes',
    nextMeeting: '21 August 2026',
    focus: ['Cohort Launch', 'Category Curation', 'Promoter Onboarding'],
    eligibility: ['Circle Founder in Peers Global'],
    founder: { name: 'Dr. Hetal Mehta', role: 'Circle Founder', company: 'Mehta Diagnostics', city: 'Ahmedabad' },
    peerMembers: [],
    testimonials: [],
    faqs: faqsBase('Circle Founders Circle'),
    seatsOpen: 30,
  },

  // 11. District Executive Directors Circle
  {
    slug: 'district-executive-directors-circle',
    name: 'District Executive Directors Circle',
    type: 'purpose',
    tagline: 'Leaders building cities and regional chapters.',
    summary: 'The top executive tier governing district expansion and regional executive leadership across India.',
    body: ['Strategic alignment for Regional Executive Directors managing multi-district operations.'],
    members: 0,
    cities: ['Mumbai', 'Ahmedabad', 'Bengaluru'],
    cadence: 'Fourth Saturday of every month · 150 minutes',
    nextMeeting: '22 August 2026',
    focus: ['Regional Leadership', 'District Expansion', 'National Scale'],
    eligibility: ['Regional Executive Director in Peers Global'],
    founder: { name: 'Manish Agrawal', role: 'Circle Founder', company: 'Agrawal Trading Corp', city: 'Mumbai' },
    peerMembers: [],
    testimonials: [],
    faqs: faqsBase('District Executive Directors Circle'),
    seatsOpen: 30,
  },

  // 12. Ahmedabad Import, Export & Global Trade Circle
  {
    slug: 'ahmedabad-import-export-global-trade-circle',
    name: 'Ahmedabad Import, Export & Global Trade Circle',
    type: 'industry',
    tagline: 'Exporters and traders scaling global trade from Ahmedabad.',
    summary: 'Connecting merchant exporters, customs brokers, and global trade promoters in Ahmedabad.',
    body: ['Optimizing global shipping, cross-border payments, and overseas buyer distribution from Ahmedabad.'],
    members: 0,
    cities: ['Ahmedabad', 'Mundra'],
    cadence: 'Fourth Tuesday of every month · 150 minutes',
    nextMeeting: '25 August 2026',
    focus: ['Global Exporters', 'Shipping Logistics', 'Customs Clearing'],
    eligibility: ['Exporter or Global Trade Operator in Ahmedabad'],
    founder: { name: 'Rajesh Solanki', role: 'Circle Founder', company: 'Solanki Ceramics', city: 'Morbi' },
    peerMembers: [],
    testimonials: [],
    faqs: faqsBase('Ahmedabad Global Trade Circle'),
    seatsOpen: 30,
  },

  // 13. Vadodara Founders Circle
  {
    slug: 'vadodara-founders-circle',
    name: 'Vadodara Founders Circle',
    type: 'purpose',
    tagline: 'Local founders & business owners building scale in Vadodara.',
    summary: 'A city-centric cohort bringing together Vadodara’s leading promoters across pharma, engineering, and chemical sectors.',
    body: ['Vadodara Founders Circle unites the industrial and business leaders of Vadodara for monthly peer governance.'],
    members: 0,
    cities: ['Vadodara'],
    cadence: 'First Wednesday of every month · 150 minutes',
    nextMeeting: '05 August 2026',
    focus: ['GIDC Infra', 'Vadodara Talent Ecosystem', 'Local Vendor Network'],
    eligibility: ['Promoter or Founder with headquarters/branch in Vadodara'],
    founder: { name: 'Hardik Bhatt', role: 'Circle Founder', company: 'Bhatt Engineering', city: 'Vadodara' },
    peerMembers: [],
    testimonials: [],
    faqs: faqsBase('Vadodara Founders Circle'),
    seatsOpen: 30,
  },

  // 14. Investors Circle
  {
    slug: 'investors-circle',
    name: 'Investors Circle',
    type: 'industry',
    tagline: 'Angel investors, family offices, HNI syndicates & PE advisors.',
    summary: 'A private governed room for angel investors, family office managers, and venture advisors deploying capital into Indian growth stories.',
    body: [
      'The Investors Circle provides a confidential room for HNIs and family offices to evaluate deal flow, syndication, and exit terms.',
      'Members review pitch decks, share due diligence reports, and co-invest in high-conviction MSME and startup deals.',
      'Zero broker or intermediary fees; pure peer-to-peer syndicate collaboration.'
    ],
    members: 1,
    cities: ['Pune', 'Ahmedabad', 'Mumbai', 'Bengaluru'],
    cadence: 'First Thursday of every month · 150 minutes',
    nextMeeting: '06 August 2026',
    focus: ['Angel Syndication', 'Family Office Asset Allocation', 'Startup Due Diligence', 'Pre-IPO Placement'],
    eligibility: ['Active Angel Investor, HNI, or Family Office Principal'],
    founder: { name: 'Kavita Desai', role: 'Circle Founder', company: 'KD Capital Advisors', city: 'Ahmedabad' },
    peerMembers: [
      { id: 'nyra-joshi', name: 'Nyra Joshi', company: 'InsightSphere', city: 'Pune', role: 'Circle Member', joinedAt: '2026-02-25', email: 'nyra.joshi@peersglobal.com' }
    ],
    testimonials: [],
    faqs: faqsBase('Investors Circle'),
    seatsOpen: 29,
  },

  // 15. Ahmedabad Real Estate, Construction & Infrastructure Circle
  {
    slug: 'ahmedabad-real-estate-construction-infrastructure-circle',
    name: 'Ahmedabad Real Estate, Construction & Infrastructure Circle',
    type: 'industry',
    tagline: 'Residential developers, commercial builders & EPC contractors in Ahmedabad.',
    summary: 'Governed Circle for real estate promoters, architectural firms, structural engineers, and infrastructure developers in Ahmedabad.',
    body: [
      'This Circle brings together non-competing developers, materials suppliers, and infra contractors in Ahmedabad.',
      'Discussions center around RERA compliance, land acquisition joint ventures, steel & cement pricing, and project financing.'
    ],
    members: 1,
    cities: ['Ahmedabad', 'Surat', 'Morbi', 'Mumbai'],
    cadence: 'Second Wednesday of every month · 150 minutes',
    nextMeeting: '12 August 2026',
    focus: ['Land Joint Ventures', 'RERA & Approvals', 'Material Procurement', 'Commercial Leasing'],
    eligibility: ['Promoter or Partner in a Real Estate or Construction enterprise'],
    founder: { name: 'Dr. Pravin Parmar', role: 'Circle Founder', company: 'Peers Global', city: 'Ahmedabad' },
    peerMembers: [
      { id: 'vithal-patel', name: 'Vithal Patel', company: 'Shivam Impex', city: 'Ahmedabad', role: 'Circle Member', joinedAt: '2026-05-25', email: 'vithalpatel@shivamimpex.com' }
    ],
    testimonials: [],
    faqs: faqsBase('Ahmedabad Real Estate Circle'),
    seatsOpen: 29,
  },

  // 16. Ahmedabad Sustainable / ESG Business Circle
  {
    slug: 'ahmedabad-sustainable-esg-business-circle',
    name: 'Ahmedabad Sustainable / ESG Business Circle',
    type: 'purpose',
    tagline: 'CleanTech, solar, circular economy & green manufacturing leaders in Ahmedabad.',
    summary: 'For promoters committed to environmental sustainability, renewable energy adoption, and ESG compliance in Ahmedabad.',
    body: ['The Sustainable & ESG Circle connects green business leaders across solar, EV, waste management, and sustainable packaging.'],
    members: 0,
    cities: ['Ahmedabad', 'Gandhinagar', 'Vadodara'],
    cadence: 'Second Friday of every month · 150 minutes',
    nextMeeting: '14 August 2026',
    focus: ['Solar & Renewable Energy', 'Circular Economy', 'Green Finance', 'Carbon Credit Structuring'],
    eligibility: ['Promoter of a green business or enterprise implementing ESG practices'],
    founder: { name: 'Sonal Patel', role: 'Circle Founder', company: 'Patel Textiles ESG', city: 'Ahmedabad' },
    peerMembers: [],
    testimonials: [],
    faqs: faqsBase('Ahmedabad Sustainable / ESG Business Circle'),
    seatsOpen: 30,
  },

  // 17. Ahmedabad Startup Founders
  {
    slug: 'ahmedabad-startup-founders',
    name: 'Ahmedabad Startup Founders',
    type: 'purpose',
    tagline: 'Funded & bootstrapped tech startup founders scaling in Ahmedabad.',
    summary: 'Connecting high-growth startup founders in Ahmedabad navigating product-market fit, fundraising, and unit economics.',
    body: ['Early and growth stage startup founders in Ahmedabad collaborating on pitch decks, burn rate, and tech scaling.'],
    members: 0,
    cities: ['Ahmedabad'],
    cadence: 'Second Tuesday of every month · 150 minutes',
    nextMeeting: '11 August 2026',
    focus: ['Product-Market Fit', 'Seed & Series A', 'Unit Economics', 'Tech Scaling'],
    eligibility: ['Tech Startup Founder in Ahmedabad'],
    founder: { name: 'Rohit Shah', role: 'Circle Founder', company: 'DataBridge Technologies', city: 'Ahmedabad' },
    peerMembers: [],
    testimonials: [],
    faqs: faqsBase('Ahmedabad Startup Founders'),
    seatsOpen: 30,
  },

  // 18. Ahmedabad Family Business Circle
  {
    slug: 'ahmedabad-family-business-circle',
    name: 'Ahmedabad Family Business Circle',
    type: 'purpose',
    tagline: 'Multi-generational family enterprises navigating succession & governance in Ahmedabad.',
    summary: 'For promoters of family-owned businesses in Ahmedabad managing family constitutions and next-gen transition.',
    body: ['A confidential room for multi-generational business families in Ahmedabad discussing equity, charters, and succession.'],
    members: 0,
    cities: ['Ahmedabad'],
    cadence: 'Third Wednesday of every month · 150 minutes',
    nextMeeting: '19 August 2026',
    focus: ['Family Constitution', 'Next-Gen Onboarding', 'Ownership Structuring'],
    eligibility: ['Promoter or Next-Gen Leader in a Family Business'],
    founder: { name: 'Amit Rawal', role: 'Circle Founder', company: 'Rawal Engineering', city: 'Ahmedabad' },
    peerMembers: [],
    testimonials: [],
    faqs: faqsBase('Ahmedabad Family Business Circle'),
    seatsOpen: 30,
  },

  // 19. Ahmedabad Franchise & Licensing Circle
  {
    slug: 'ahmedabad-franchise-licensing-circle',
    name: 'Ahmedabad Franchise & Licensing Circle',
    type: 'industry',
    tagline: 'Franchise brand owners, master franchisees & retail licensors in Ahmedabad.',
    summary: 'Dedicated Circle for franchise network expansion, brand licensing, and multi-unit retail operators.',
    body: ['Franchise brand owners and master licensees in Ahmedabad scaling outlet networks and royalty models.'],
    members: 0,
    cities: ['Ahmedabad'],
    cadence: 'First Thursday of every month · 150 minutes',
    nextMeeting: '06 August 2026',
    focus: ['Franchise Expansion', 'Brand Licensing', 'Royalty Models', 'Retail Outlets'],
    eligibility: ['Franchisor, Master Franchisee, or Brand Licensor'],
    founder: { name: 'Meera Chawla', role: 'Circle Founder', company: 'Chawla Lifestyle', city: 'Ahmedabad' },
    peerMembers: [],
    testimonials: [],
    faqs: faqsBase('Ahmedabad Franchise & Licensing Circle'),
    seatsOpen: 30,
  },

  // 20. Ahmedabad SME IPO Goal Circle
  {
    slug: 'ahmedabad-sme-ipo-goal-circle',
    name: 'Ahmedabad SME IPO Goal Circle',
    type: 'purpose',
    tagline: 'Preparing MSMEs for NSE Emerge & BSE SME exchange listing in Ahmedabad.',
    summary: 'A focused cohort of promoters targeting an SME IPO listing within 12 to 36 months.',
    body: ['Promoters in Ahmedabad preparing financial compliance, merchant banker selection, and DRHP filings for listing.'],
    members: 0,
    cities: ['Ahmedabad'],
    cadence: 'Third Saturday of every month · 150 minutes',
    nextMeeting: '15 August 2026',
    focus: ['NSE Emerge', 'BSE SME', 'DRHP Filing', 'Merchant Banker Selection'],
    eligibility: ['Promoter targeting SME IPO within 3 years'],
    founder: { name: 'Dr. Pravin Parmar', role: 'Circle Founder', company: 'Peers Global', city: 'Ahmedabad' },
    peerMembers: [],
    testimonials: [],
    faqs: faqsBase('Ahmedabad SME IPO Goal Circle'),
    seatsOpen: 30,
  },

  // 21. Ahmedabad Investors Circle
  {
    slug: 'ahmedabad-investors-circle-2',
    name: 'Ahmedabad Investors Circle',
    type: 'industry',
    tagline: 'Angel investors, HNIs & family offices in Ahmedabad.',
    summary: 'A private governed room for HNIs and angel investors in Ahmedabad evaluating syndicate deals.',
    body: ['Ahmedabad-based HNIs and family offices reviewing deal flow and co-investing in promising ventures.'],
    members: 0,
    cities: ['Ahmedabad'],
    cadence: 'First Thursday of every month · 150 minutes',
    nextMeeting: '06 August 2026',
    focus: ['Angel Investment', 'Syndicate Deals', 'HNI Asset Allocation'],
    eligibility: ['Active Angel Investor or HNI in Ahmedabad'],
    founder: { name: 'Kavita Desai', role: 'Circle Founder', company: 'KD Capital Advisors', city: 'Ahmedabad' },
    peerMembers: [],
    testimonials: [],
    faqs: faqsBase('Ahmedabad Investors Circle'),
    seatsOpen: 30,
  },

  // 22. CSR, NGOs, Impact & Nation-Building Circle
  {
    slug: 'csr-ngos-impact-nation-building-circle',
    name: 'CSR, NGOs, Impact & Nation-Building Circle',
    type: 'purpose',
    tagline: 'Corporate CSR heads, NGO trustees & social impact leaders.',
    summary: 'Connecting corporate CSR heads and non-profit leaders to deploy impact capital efficiently across India.',
    body: ['Corporate CSR heads and social impact leaders reviewing 2% spending compliance and community projects.'],
    members: 0,
    cities: ['Ahmedabad', 'Gandhinagar', 'Mumbai'],
    cadence: 'Fourth Friday of every month · 150 minutes',
    nextMeeting: '28 August 2026',
    focus: ['CSR 2% Compliance', 'Impact Auditing', 'Social Philanthropy'],
    eligibility: ['CSR Head, Foundation Trustee, or NGO Leader'],
    founder: { name: 'Dr. Ananya Joshi', role: 'Circle Founder', company: 'Joshi Foundation', city: 'Ahmedabad' },
    peerMembers: [],
    testimonials: [],
    faqs: faqsBase('CSR, NGOs & Impact Circle'),
    seatsOpen: 30,
  },

  // 23. Global Expansion (Cross-Border) Circle
  {
    slug: 'global-expansion-cross-border-circle',
    name: 'Global Expansion (Cross-Border) Circle',
    type: 'purpose',
    tagline: 'Expanding Indian brands into international markets.',
    summary: 'Connecting exporters and global trade promoters scaling international footprint.',
    body: ['Cross-border market entry, overseas subsidiary setup, and international distribution.'],
    members: 0,
    cities: ['Ahmedabad', 'Mumbai', 'Mundra'],
    cadence: 'Fourth Tuesday of every month · 150 minutes',
    nextMeeting: '25 August 2026',
    focus: ['Cross-Border Expansion', 'FEMA Compliance', 'Global Trade'],
    eligibility: ['Promoter expanding business outside India'],
    founder: { name: 'Rajesh Solanki', role: 'Circle Founder', company: 'Solanki Ceramics', city: 'Morbi' },
    peerMembers: [],
    testimonials: [],
    faqs: faqsBase('Global Expansion Circle'),
    seatsOpen: 30,
  },

  // 24. Young Entrepreneurs (Below 35) Circle
  {
    slug: 'young-entrepreneurs-below-35-circle',
    name: 'Young Entrepreneurs (Below 35) Circle',
    type: 'purpose',
    tagline: 'Next-gen leaders & young founders under 35.',
    summary: 'High-energy chapter for young promoters and next-gen business leaders under 35.',
    body: ['Modern leadership styles, venture building, and digital transformation for young founders.'],
    members: 0,
    cities: ['Ahmedabad', 'Surat', 'Vadodara'],
    cadence: 'First Saturday of every month · 150 minutes',
    nextMeeting: '01 August 2026',
    focus: ['Young Founders', 'Digital Transformation', 'Venture Scale'],
    eligibility: ['Promoter or Founder under 35 years of age'],
    founder: { name: 'Karan Shah', role: 'Circle Founder', company: 'Global Spices', city: 'Mundra' },
    peerMembers: [],
    testimonials: [],
    faqs: faqsBase('Young Entrepreneurs (Below 35) Circle'),
    seatsOpen: 30,
  },

  // 25. Ahmedabad MSME Entrepreneurs Circle
  {
    slug: 'ahmedabad-msme-entrepreneurs-circle',
    name: 'Ahmedabad MSME Entrepreneurs Circle',
    type: 'industry',
    tagline: 'MSME promoters and enterprise owners in Ahmedabad.',
    summary: 'Dedicated Circle for MSME promoters in Ahmedabad focusing on working capital, talent, and growth.',
    body: ['Ahmedabad MSME business owners collaborating on debt capital, vendor network, and scaling.'],
    members: 0,
    cities: ['Ahmedabad'],
    cadence: 'Second Wednesday of every month · 150 minutes',
    nextMeeting: '12 August 2026',
    focus: ['MSME Scaling', 'Working Capital', 'Vendor Network'],
    eligibility: ['MSME Promoter in Ahmedabad'],
    founder: { name: 'Amit Rawal', role: 'Circle Founder', company: 'Rawal Engineering', city: 'Ahmedabad' },
    peerMembers: [],
    testimonials: [],
    faqs: faqsBase('Ahmedabad MSME Entrepreneurs Circle'),
    seatsOpen: 30,
  },

  // 26. Ahmedabad Healthcare, Wellness & Life Sciences Circle
  {
    slug: 'ahmedabad-healthcare-wellness-life-sciences-circle',
    name: 'Ahmedabad Healthcare, Wellness & Life Sciences Circle',
    type: 'industry',
    tagline: 'Hospitals, diagnostics, pharma and medtech promoters in Ahmedabad.',
    summary: 'Promoters of single-speciality hospitals, diagnostic chains, pharma units, and wellness brands in Ahmedabad.',
    body: ['Medical and wellness promoters in Ahmedabad collaborating on clinical operations, NABH, and capex.'],
    members: 0,
    cities: ['Ahmedabad'],
    cadence: 'First Tuesday of every month · 150 minutes',
    nextMeeting: '04 August 2026',
    focus: ['Hospital Operations', 'NABH Accreditation', 'Pharma Supply'],
    eligibility: ['Promoter of a hospital, clinic, or pharma unit'],
    founder: { name: 'Dr. Hetal Mehta', role: 'Circle Founder', company: 'Mehta Diagnostics', city: 'Ahmedabad' },
    peerMembers: [],
    testimonials: [],
    faqs: faqsBase('Ahmedabad Healthcare Circle'),
    seatsOpen: 30,
  },

  // 27. Education, Training & Skill Development Circle
  {
    slug: 'education-training-skill-development-circle',
    name: 'Education, Training & Skill Development Circle',
    type: 'industry',
    tagline: 'Schools, coaching institutes, vocational academies & EdTech founders.',
    summary: 'Connecting institutional education leaders, university trustees, and skill academy founders.',
    body: ['Education leaders and trustees sharing best practices for campus infrastructure and enrollment.'],
    members: 0,
    cities: ['Ahmedabad', 'Gandhinagar', 'Pune'],
    cadence: 'Third Friday of every month · 150 minutes',
    nextMeeting: '21 August 2026',
    focus: ['Campus Scale', 'EdTech Integration', 'NEP Compliance'],
    eligibility: ['Trustee or Founder of an educational institution'],
    founder: { name: 'Dr. Ananya Joshi', role: 'Circle Founder', company: 'Joshi Education Trust', city: 'Ahmedabad' },
    peerMembers: [],
    testimonials: [],
    faqs: faqsBase('Education & Skill Development Circle'),
    seatsOpen: 30,
  },

  // 28. Manufacturing & Engineering Circle
  {
    slug: 'manufacturing-engineering-circle',
    name: 'Manufacturing & Engineering Circle',
    type: 'industry',
    tagline: 'Precision engineering, auto ancillaries & industrial machinery plant operators.',
    summary: 'A dedicated room for industrial plant owners, foundry operators, and machine manufacturers.',
    body: ['Industrial unit owners addressing shopfloor productivity, CNC machining, and plant automation.'],
    members: 0,
    cities: ['Rajkot', 'Vadodara', 'Ahmedabad'],
    cadence: 'Third Tuesday of every month · 150 minutes',
    nextMeeting: '18 August 2026',
    focus: ['Industrial Automation', 'CNC Machining', 'Plant Walks'],
    eligibility: ['Industrial unit owner or OEM manufacturer'],
    founder: { name: 'Amit Rawal', role: 'Circle Founder', company: 'Rawal Engineering', city: 'Rajkot' },
    peerMembers: [],
    testimonials: [],
    faqs: faqsBase('Manufacturing & Engineering Circle'),
    seatsOpen: 30,
  },

  // 29. Sustainable & ESG Business Circle
  {
    slug: 'sustainable-esg-business-circle-2',
    name: 'Sustainable & ESG Business Circle',
    type: 'purpose',
    tagline: 'CleanTech, solar, circular economy & green manufacturing leaders.',
    summary: 'Connecting green business leaders across solar, EV, waste management, and sustainable packaging.',
    body: ['Environmental sustainability, green financing rates, and ISO 14001 environmental standards.'],
    members: 0,
    cities: ['Ahmedabad', 'Gandhinagar'],
    cadence: 'Second Friday of every month · 150 minutes',
    nextMeeting: '14 August 2026',
    focus: ['Solar Energy', 'Circular Economy', 'ESG Compliance'],
    eligibility: ['Promoter of a green business or ESG enterprise'],
    founder: { name: 'Sonal Patel', role: 'Circle Founder', company: 'Patel Textiles ESG', city: 'Ahmedabad' },
    peerMembers: [],
    testimonials: [],
    faqs: faqsBase('Sustainable & ESG Circle'),
    seatsOpen: 30,
  },

  // 30. Startup Founders Circle
  {
    slug: 'startup-founders-circle',
    name: 'Startup Founders Circle',
    type: 'purpose',
    tagline: 'Tech startup founders scaling product-market fit & fundraising.',
    summary: 'Tech founders from Seed to Series A stage evaluating pitch decks and growth metrics.',
    body: ['Confidential hot seats diving deep into pitch decks, burn rate, and hiring key executives.'],
    members: 0,
    cities: ['Ahmedabad', 'Bengaluru', 'Pune'],
    cadence: 'Second Tuesday of every month · 150 minutes',
    nextMeeting: '11 August 2026',
    focus: ['Seed & Series A', 'Unit Economics', 'Product-Market Fit'],
    eligibility: ['Tech Startup Founder'],
    founder: { name: 'Rohit Shah', role: 'Circle Founder', company: 'DataBridge Technologies', city: 'Ahmedabad' },
    peerMembers: [],
    testimonials: [],
    faqs: faqsBase('Startup Founders Circle'),
    seatsOpen: 30,
  },

  // 31. IPO Goal Circle
  {
    slug: 'ipo-goal-circle',
    name: 'IPO Goal Circle',
    type: 'purpose',
    tagline: 'Preparing MSMEs for public listing on SME exchanges.',
    summary: 'A focused cohort of promoters targeting an SME IPO listing within 12 to 36 months.',
    body: ['Financial compliance, DRHP filing, and merchant banker selection.'],
    members: 0,
    cities: ['Ahmedabad', 'Surat', 'Mumbai'],
    cadence: 'Third Saturday of every month · 150 minutes',
    nextMeeting: '15 August 2026',
    focus: ['NSE Emerge', 'BSE SME Listing', 'DRHP Preparation'],
    eligibility: ['Promoter targeting SME IPO'],
    founder: { name: 'Dr. Pravin Parmar', role: 'Circle Founder', company: 'Peers Global', city: 'Ahmedabad' },
    peerMembers: [],
    testimonials: [],
    faqs: faqsBase('IPO Goal Circle'),
    seatsOpen: 30,
  },

  // 32. Import, Export & Global Trade Circle
  {
    slug: 'import-export-global-trade-circle-general',
    name: 'Import, Export & Global Trade Circle',
    type: 'industry',
    tagline: 'Merchant exporters, freight forwarders & customs brokers.',
    summary: 'Connecting international trade leaders navigating shipping lines, payments, and customs duty.',
    body: ['Container freight rates, LC negotiation, and overseas distribution.'],
    members: 0,
    cities: ['Mundra', 'Surat', 'Mumbai'],
    cadence: 'Fourth Thursday of every month · 150 minutes',
    nextMeeting: '27 August 2026',
    focus: ['Freight Rate Optimization', 'Cross-Border Payments', 'Customs Clearing'],
    eligibility: ['Merchant exporter or international trade promoter'],
    founder: { name: 'Rajesh Solanki', role: 'Circle Founder', company: 'Solanki Ceramics', city: 'Morbi' },
    peerMembers: [],
    testimonials: [],
    faqs: faqsBase('Import, Export & Global Trade Circle'),
    seatsOpen: 30,
  },

  // 33. Young Entrepreneurs Circle
  {
    slug: 'young-entrepreneurs-circle-general',
    name: 'Young Entrepreneurs Circle',
    type: 'purpose',
    tagline: 'Ambitious young business promoters scaling high-growth ventures.',
    summary: 'A high-energy chapter for young founders building innovative business models.',
    body: ['Fostering lifelong peer friendships and high-trust business alliances early in their careers.'],
    members: 0,
    cities: ['Ahmedabad', 'Surat', 'Rajkot'],
    cadence: 'First Saturday of every month · 150 minutes',
    nextMeeting: '01 August 2026',
    focus: ['Young Founders', 'Digital Modernization', 'Venture Alliances'],
    eligibility: ['Young Business Owner'],
    founder: { name: 'Karan Shah', role: 'Circle Founder', company: 'Global Spices', city: 'Mundra' },
    peerMembers: [],
    testimonials: [],
    faqs: faqsBase('Young Entrepreneurs Circle'),
    seatsOpen: 30,
  },

  // 34. Leadership & Transformation Circle
  {
    slug: 'leadership-transformation-circle',
    name: 'Leadership & Transformation Circle',
    type: 'purpose',
    tagline: 'Executive coaching, organizational culture & CXO transformation.',
    summary: 'Dedicated to personal leadership development, executive mindset, and building high-performance company cultures.',
    body: [
      'As a business scales, the promoter must evolve from chief operator to chief strategist.',
      'This Circle focuses on delegation frameworks, CXO hiring, emotional resilience, and OKR goal setting.'
    ],
    members: 1,
    cities: ['Surat', 'Ahmedabad', 'Bengaluru', 'Mumbai'],
    cadence: 'Fourth Saturday of every month · 150 minutes',
    nextMeeting: '22 August 2026',
    focus: ['Promoter-to-CEO Evolution', 'CXO Team Building', 'OKR Goal Setting', 'Executive Resilience'],
    eligibility: ['Business Owner running team of 20+ employees'],
    founder: { name: 'Dr. Pravin Parmar', role: 'Circle Founder', company: 'Peers Global', city: 'Ahmedabad' },
    peerMembers: [
      { id: 'khushi-shah', name: 'Khushi Shah', company: 'PeopleFirst HR', city: 'Surat', role: 'Circle Member', joinedAt: '2026-08-15', email: 'khushi.shah@peersglobal.com' }
    ],
    testimonials: [],
    faqs: faqsBase('Leadership & Transformation Circle'),
    seatsOpen: 29,
  },

  // 35. Ahmedabad Events, Fashion, Apparel & Lifestyle Circle
  {
    slug: 'ahmedabad-events-fashion-apparel-lifestyle-circle',
    name: 'Ahmedabad Events, Fashion, Apparel & Lifestyle Circle',
    type: 'industry',
    tagline: 'Event producers, fashion designers, apparel brands & lifestyle promoters in Ahmedabad.',
    summary: 'A vibrant room for event management companies, fashion designers, apparel manufacturers, and lifestyle brand founders in Ahmedabad.',
    body: [
      'The Events & Lifestyle Circle connects creative promoters and event management leaders across Gujarat.',
      'Members collaborate on large-scale exhibition logistics, brand sponsorships, luxury retail partnerships, and celebrity management.'
    ],
    members: 1,
    cities: ['Ahmedabad', 'Pune', 'Mumbai'],
    cadence: 'Third Thursday of every month · 150 minutes',
    nextMeeting: '20 August 2026',
    focus: ['Event Production', 'Luxury Fashion Retail', 'Brand Sponsorships', 'Apparel Manufacturing'],
    eligibility: ['Promoter of an Event Management, Fashion, or Lifestyle Brand'],
    founder: { name: 'Meera Chawla', role: 'Circle Founder', company: 'Chawla Lifestyle', city: 'Ahmedabad' },
    peerMembers: [
      { id: 'saanvi-bhatt', name: 'Saanvi Bhatt', company: 'TrendVerse Media', city: 'Pune', role: 'Circle Member', joinedAt: '2026-03-03', email: 'saanvi.bhatt@peersglobal.com' }
    ],
    testimonials: [],
    faqs: faqsBase('Ahmedabad Events, Fashion & Lifestyle Circle'),
    seatsOpen: 29,
  },

  // 36. Ahmedabad Technology, IT & Digital Services Circle
  {
    slug: 'ahmedabad-technology-it-digital-services-circle',
    name: 'Ahmedabad Technology, IT & Digital Services Circle',
    type: 'industry',
    tagline: 'SaaS, IT services, cloud & digital transformation leaders in Ahmedabad.',
    summary: 'A vibrant community of tech entrepreneurs and IT leaders driving software innovation, enterprise AI and digital services in Ahmedabad.',
    body: [
      'The Ahmedabad Technology & IT Circle brings together IT founders, SaaS operators and digital agency owners in Gujarat.',
      'Members collaborate on client acquisition, engineering talent retention, pricing models, and international client expansion.'
    ],
    members: 1,
    cities: ['Ahmedabad', 'Bengaluru', 'Mumbai'],
    cadence: 'Third Thursday of every month · 150 minutes',
    nextMeeting: '15 August 2026',
    focus: ['SaaS Scale', 'IT Exports', 'Talent Retention', 'AI & Cloud Infrastructure'],
    eligibility: ['Founder or Director of an IT/SaaS company in Ahmedabad'],
    founder: { name: 'Rohit Shah', role: 'Circle Founder', company: 'DataBridge Technologies', city: 'Ahmedabad' },
    peerMembers: [
      { id: 'aadhya-verma', name: 'Aadhya Verma', company: 'BrightWave Media', city: 'Ahmedabad', role: 'Circle Member', joinedAt: '2026-01-05', email: 'adhya.verma@peersglobal.com' }
    ],
    testimonials: [],
    faqs: faqsBase('Ahmedabad Technology Circle'),
    seatsOpen: 29,
  },

  // 37. Technology, IT & Digital Services Circle (General)
  {
    slug: 'technology-it-digital-services-circle-general',
    name: 'Technology, IT & Digital Services Circle',
    type: 'industry',
    tagline: 'SaaS, IT services, cloud & digital transformation leaders.',
    summary: 'A vibrant community of tech entrepreneurs and IT leaders driving software innovation, enterprise AI and digital services nationwide.',
    body: [
      'The Technology & IT Circle brings together IT founders, SaaS operators and digital agency owners across India.',
      'Members collaborate on client acquisition, engineering talent retention, pricing models, and international client expansion.'
    ],
    members: 1,
    cities: ['Bangalore', 'Bengaluru', 'Mumbai', 'Pune'],
    cadence: 'Third Thursday of every month · 150 minutes',
    nextMeeting: '15 August 2026',
    focus: ['SaaS Scale', 'IT Exports', 'Talent Retention', 'AI & Cloud Infrastructure'],
    eligibility: ['Founder or Director of an IT/SaaS company'],
    founder: { name: 'Rohit Shah', role: 'Circle Founder', company: 'DataBridge Technologies', city: 'Bengaluru' },
    peerMembers: [
      { id: 'shikha-sharma', name: 'Shikha Sharma', company: 'CodeNest Technologies', city: 'Bangalore', role: 'Circle Member', joinedAt: '2026-04-08', email: 'shikha.sharma@peersglobal.com' }
    ],
    testimonials: [],
    faqs: faqsBase('Technology, IT & Digital Services Circle'),
    seatsOpen: 29,
  },

  // 38. Retail & E-Commerce Circle
  {
    slug: 'retail-e-commerce-circle',
    name: 'Retail & E-Commerce Circle',
    type: 'industry',
    tagline: 'D2C brand founders, retail chain operators & omnichannel e-commerce leaders.',
    summary: 'A dedicated room for D2C brand promoters, retail store chain owners, supply chain logistics heads, and marketplace sellers.',
    body: [
      'The Retail & E-Commerce Circle connects fast-growing D2C founders and traditional retail chain operators.',
      'Members collaborate on CAC reduction, omnichannel fulfillment, Quick Commerce distribution, and inventory management.'
    ],
    members: 1,
    cities: ['Mumbai', 'Delhi', 'Ahmedabad', 'Bengaluru'],
    cadence: 'Second Thursday of every month · 150 minutes',
    nextMeeting: '13 August 2026',
    focus: ['D2C Scaling', 'Omnichannel Retail', 'CAC & ROAS Optimization', 'Quick Commerce'],
    eligibility: ['Founder or Promoter of a D2C, E-Commerce, or Retail enterprise'],
    founder: { name: 'Meera Chawla', role: 'Circle Founder', company: 'Chawla Lifestyle', city: 'Mumbai' },
    peerMembers: [
      { id: 'kavya-arora', name: 'Kavya Arora', company: 'PixelCraft Studio', city: 'Mumbai', role: 'Circle Member', joinedAt: '2026-02-11', email: 'kavya.arora@peersglobal.com' }
    ],
    testimonials: [],
    faqs: faqsBase('Retail & E-Commerce Circle'),
    seatsOpen: 29,
  },

  // 39. Healthopedia Ahmedabad Circle
  {
    slug: 'healthopedia-ahmedabad-circle',
    name: 'Healthopedia Ahmedabad Circle',
    type: 'industry',
    tagline: 'Healthcare, medical, wellness & pediatric specialists in Ahmedabad.',
    summary: 'A dedicated governed Circle bringing together doctors, hospital directors, pediatric specialists, wellness centers, and medical founders in Ahmedabad.',
    body: [
      'The Healthopedia Ahmedabad Circle brings together doctors, medical founders, and wellness practitioners in Gujarat.',
      'Members collaborate on hospital expansion, patient trust, NABH compliance, cross-speciality referrals, and preventative healthcare.'
    ],
    members: 8,
    cities: ['Ahmedabad'],
    cadence: 'Second Tuesday of every month · 150 minutes',
    nextMeeting: '11 August 2026',
    focus: ['Pediatric & Child Dental Care', 'Wellness Centers', 'Hospital Capex', 'Medical Technology'],
    eligibility: ['Doctor, Medical Specialist, or Healthcare Enterprise Promoter in Ahmedabad'],
    founder: { name: 'Dr. Meet Ramatri', role: 'Circle Chair', company: 'CHILD DENTAL CARE', city: 'Ahmedabad' },
    chairs: [
      { id: 'dr-meet-ramatri', name: 'Dr. Meet Ramatri', company: 'CHILD DENTAL CARE', city: 'Ahmedabad', role: 'Circle Chair', joinedAt: '2026-07-08', email: 'drmeetr@gmail.com' }
    ],
    peerMembers: [
      { id: 'vishal-parmar', name: 'Vishal Parmar', company: 'Peers Global', city: 'Ahmedabad', role: 'Circle Member', joinedAt: '2026-07-06', email: 'hello.vishalparmar@gmail.com' },
      { id: 'rashida-batawala', name: 'Rashida Batawala', company: 'RBS Wellness Centre', city: 'Ahmedabad', role: 'Circle Member', joinedAt: '2026-07-04', email: 'rbswellnesscentre@gmail.com' },
      { id: 'dr-pawan-gupta', name: 'Dr. Pawan Gupta', company: 'Evakenko', city: 'Ahmedabad', role: 'Circle Member', joinedAt: '2026-03-19', email: 'pawan@evakenko.com' },
      { id: 'kandarp-bhatt', name: 'Kandarp Bhatt', company: 'ZealousWeb', city: 'Ahmedabad', role: 'Circle Member', joinedAt: '2026-03-19', email: 'kandarp@zealousweb.com' },
      { id: 'mitali-patel', name: 'Mitali Patel', company: 'Healer Mitali', city: 'Ahmedabad', role: 'Circle Member', joinedAt: '2026-03-19', email: 'info@healermitali.com' },
      { id: 'mr-piyush-vyada', name: 'Mr. Piyush Vyada', company: 'The Family Member', city: 'Ahmedabad', role: 'Circle Member', joinedAt: '2026-03-19', email: 'piyush@thefamilymember.com' },
      { id: 'dr-natasha-lalwani', name: 'Dr. Natasha Lalwani', company: 'Lalwani Healthcare', city: 'Ahmedabad', role: 'Circle Member', joinedAt: '2026-03-19', email: 'drnatashalalwani@gmail.com' }
    ],
    testimonials: [],
    faqs: faqsBase('Healthopedia Ahmedabad Circle'),
    seatsOpen: 22,
  },

  // 40. Realty ONE Ahmedabad Circle
  {
    slug: 'realty-one-ahmedabad-circle',
    name: 'Realty ONE Ahmedabad Circle',
    type: 'industry',
    tagline: 'Premier real estate developers, interior designers, structural engineers & infra promoters.',
    summary: 'A high-impact governed Circle for commercial & residential real estate developers, interior architects, steel & aluminium contractors, and infra leaders in Ahmedabad.',
    body: [
      'Realty ONE brings together premier real estate developers, structural engineers, interior designers, and steel/aluminum suppliers.',
      'Members collaborate on Joint Venture land development, RERA approvals, bulk raw material pricing, and luxury residential & commercial projects.'
    ],
    members: 15,
    cities: ['Ahmedabad', 'Gandhinagar', 'Surat'],
    cadence: 'First Wednesday of every month · 150 minutes',
    nextMeeting: '05 August 2026',
    focus: ['Real Estate Joint Ventures', 'Interior Architecture & Crafting', 'Structural Engineering', 'RERA & Land Approvals'],
    eligibility: ['Developer, Architectural Partner, Structural Engineer or Material Manufacturer'],
    founder: { name: 'Pravin Parmar', role: 'Circle Founder', company: 'Peers Global Business Media Pvt Ltd', city: 'Ahmedabad' },
    chairs: [
      { id: 'anuj-maurya', name: 'Anuj Maurya', company: 'Ananya Interiors', city: 'Ahmedabad', role: 'Circle Chair', joinedAt: '2026-07-01', email: 'anujmaurya59448@gmail.com' },
      { id: 'krupa-shah', name: 'Krupa Shah', company: 'Aaranya Crafts', city: 'Gandhinagar', role: 'Circle Chair', joinedAt: '2026-06-30', email: 'aranyacrafts901@gmail.com' },
      { id: 'hiren-thakkar', name: 'Hiren Thakkar', company: 'The one square infra', city: 'Ahmedabad', role: 'Circle Chair', joinedAt: '2026-03-28', email: 'hirenthakkar321@gmail.com' }
    ],
    peerMembers: [
      { id: 'yogesh-soni', name: 'Yogesh Soni', company: 'Meet Infracon', city: 'Ahmedabad', role: 'Circle Member', joinedAt: '2026-07-20', email: 'meetinfracon9@gmail.com' },
      { id: 'vishal-parmar', name: 'Vishal Parmar', company: 'Peers Global', city: 'Ahmedabad', role: 'Circle Member', joinedAt: '2026-07-06', email: 'hello.vishalparmar@gmail.com' },
      { id: 'jainish-shah', name: 'Jainish Shah', company: 'OM Group', city: 'Ahmedabad', role: 'Circle Member', joinedAt: '2026-07-04', email: 'jainish235@gmail.com' },
      { id: 'pritesh-babriya', name: 'Pritesh Babriya', company: 'Armor Steel Industries Pvt. Ltd.', city: 'Ahmedabad', role: 'Circle Member', joinedAt: '2026-07-01', email: 'ho@armorfire.co.in' },
      { id: 'sohilkhan-pathan', name: 'Sohilkhan Pathan', company: 'SLAVIC ALU SLIM', city: 'Ahmedabad', role: 'Circle Member', joinedAt: '2026-07-01', email: 'slavic3330@gmail.com' },
      { id: 'narendrasinh-solanki', name: 'Narendrasinh Solanki', company: 'Satyam Projects', city: 'Ahmedabad', role: 'Circle Member', joinedAt: '2026-07-01', email: 'satyam_project@yahoo.co.in' },
      { id: 'arpit-patel', name: 'Arpit Patel', company: 'Discuss Dubai', city: 'Ahmedabad', role: 'Circle Member', joinedAt: '2026-07-01', email: 'drarpit22@gmail.com' },
      { id: 'vithal-patel', name: 'Vithal Patel', company: 'Shivam Impex', city: 'Ahmedabad', role: 'Circle Member', joinedAt: '2026-05-25', email: 'vitthalpate7233@gmail.com' },
      { id: 'riddhi-mehta', name: 'Riddhi Mehta', company: 'Innovatech Structural Solutions', city: 'Ahmedabad', role: 'Circle Member', joinedAt: '2026-05-18', email: 'innovatechstructure@gmail.com' },
      { id: 'indrajeetsinh-gohil', name: 'Indrajeetsinh Gohil', company: 'Indrajeet Construction Chemicals', city: 'Ahmedabad', role: 'Circle Member', joinedAt: '2026-04-27', email: 'icchem2001@yahoo.com' },
      { id: 'kapil-agarwal', name: 'Kapil Agarwal', company: 'SPACEMATICS', city: 'Ahmedabad', role: 'Circle Member', joinedAt: '2026-03-25', email: 'kapiljc@gmail.com' },
      { id: 'somya-popat', name: 'SOMYA POPAT', company: 'SHIV TRADELINKS', city: 'Ahmedabad', role: 'Circle Member', joinedAt: '2026-03-25', email: 'somya.popat99@gmail.com' }
    ],
    testimonials: [],
    faqs: faqsBase('Realty ONE Ahmedabad Circle'),
    seatsOpen: 15,
  },

  // 41. MSME ONE Ahmedabad Circle
  {
    slug: 'msme-one-ahmedabad-circle',
    name: 'MSME ONE Ahmedabad Circle',
    type: 'industry',
    tagline: 'High-growth MSME promoters, manufacturing unit owners & service enterprise leaders in Ahmedabad.',
    summary: 'A flagship governed Circle bringing together MSME promoters, traders, packaging manufacturers, tech service providers, and branding heads in Ahmedabad.',
    body: [
      'MSME ONE Ahmedabad is the premier chapter for micro, small, and medium enterprise promoters across Gujarat.',
      'Members collaborate on working capital, vendor expansion, branding, packaging supply chains, and scaling revenues.'
    ],
    members: 19,
    cities: ['Ahmedabad', 'Gandhinagar', 'Vadodara'],
    cadence: 'First Tuesday of every month · 150 minutes',
    nextMeeting: '04 August 2026',
    focus: ['MSME Debt Capital', 'Packaging & Supply Chain', 'Brand & Media Growth', 'Technology Integration'],
    eligibility: ['Promoter, Partner or Director of an MSME enterprise'],
    founder: { name: 'Pravin Parmar', role: 'Circle Founder', company: 'Peers Global Business Media Pvt Ltd', city: 'Ahmedabad' },
    chairs: [
      { id: 'devang-brahmbhatt', name: 'Devang Brahmbhatt', company: 'Laxmi Traders', city: 'Ahmedabad', role: 'Circle Chair', joinedAt: '2026-07-08', email: 'laxmitrident@yahoo.com' },
      { id: 'vishal-parmar', name: 'Vishal Parmar', company: 'Peers Global', city: 'Ahmedabad', role: 'Circle Chair', joinedAt: '2026-07-06', email: 'hello.vishalparmar@gmail.com' },
      { id: 'rashida-batawala', name: 'Rashida Batawala', company: 'RBS Wellness Centre', city: 'Ahmedabad', role: 'Circle Chair', joinedAt: '2026-07-01', email: 'rbswellnesscentre@gmail.com' },
      { id: 'pratik-gambhir', name: 'Pratik Gambhir', company: 'Shaadi Vows', city: 'Ahmedabad', role: 'Circle Chair', joinedAt: '2026-03-19', email: 'shaadivowsindia@gmail.com' },
      { id: 'atul-jasani', name: 'Atul Jasani', company: 'Krish Tradelink', city: 'Ahmedabad', role: 'Circle Chair', joinedAt: '2026-03-19', email: 'atul@corrugatedpackaging.co.in' },
      { id: 'amit-agarwal', name: 'Amit Agarwal', company: 'Icconicblue', city: 'Ahmedabad', role: 'Circle Chair', joinedAt: '2026-01-20', email: 'iconicblue2017@gmail.com' }
    ],
    peerMembers: [
      { id: 'yogesh-soni', name: 'yogesh soni', company: 'Meet Infracon', city: 'Ahmedabad', role: 'Circle Member', joinedAt: '2026-07-04', email: 'meetinfracon9@gmail.com' },
      { id: 'digant-ramani', name: 'Digant Ramani', company: 'Tavish Infotech Pvt. Ltd.', city: 'Ahmedabad', role: 'Circle Member', joinedAt: '2026-07-04', email: 'digant.ramani@tavishinfotech.com' },
      { id: 'milly-thakkar', name: 'Milly Thakkar', company: 'Mudra Investment', city: 'Ahmedabad', role: 'Circle Member', joinedAt: '2026-07-01', email: 'mudrainvestment426@gmail.com' },
      { id: 'atharva-jahagirdar', name: 'Atharva Jahagirdar', company: 'Resobrand', city: 'Ahmedabad', role: 'Circle Member', joinedAt: '2026-07-01', email: 'jahagirdar.atharva@resobrand.in' },
      { id: 'akash-nishaad', name: 'Akash Nishaad', company: 'Demmista Technologies Pvt. Ltd.', city: 'Ahmedabad', role: 'Circle Member', joinedAt: '2026-07-01', email: 'akash.nishad9199@gmail.com' },
      { id: 'amit-khunt', name: 'Amit Khunt', company: 'Akshar Farmtech', city: 'Ahmedabad', role: 'Circle Member', joinedAt: '2026-03-19', email: 'khuntamit001@gmail.com' },
      { id: 'pavitro-bera', name: 'Pavitro Bera', company: 'AnthX Technology', city: 'Ahmedabad', role: 'Circle Member', joinedAt: '2026-03-19', email: 'anthxtechnologies@gmail.com' },
      { id: 'tapan-thakkar', name: 'Tapan Thakkar', company: 'NFChed', city: 'Ahmedabad', role: 'Circle Member', joinedAt: '2026-03-19', email: 'info.thinkingdotsstudio@gmail.com' },
      { id: 'krupa-shah', name: 'Krupa Shah', company: 'Aaranya Crafts', city: 'Gandhinagar', role: 'Circle Member', joinedAt: '2026-01-20', email: 'aranyacrafts901@gmail.com' },
      { id: 'azhar-pathan', name: 'Azhar Pathan', company: 'Alpha Performers', city: 'Ahmedabad', role: 'Circle Member', joinedAt: '2026-01-20', email: 'alphaperformers@gmail.com' },
      { id: 'mayank-patel', name: 'Mayank Patel', company: 'Campus Dean', city: 'Ahmedabad', role: 'Circle Member', joinedAt: '2026-01-20', email: 'ai@arthinfosoft.in' },
      { id: 'nikita-deshaval', name: 'Nikita Deshaval', company: 'Zodiac Gifts', city: 'Ahmedabad', role: 'Circle Member', joinedAt: '2026-01-20', email: 'shreejibags9@gmail.com' }
    ],
    testimonials: [],
    faqs: faqsBase('MSME ONE Ahmedabad Circle'),
    seatsOpen: 11,
  },
]

export const INDUSTRY_CIRCLES = CIRCLES.filter((c) => c.type === 'industry')
export const PURPOSE_CIRCLES = CIRCLES.filter((c) => c.type === 'purpose')
