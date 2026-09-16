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
  /** three-paragraph body used by the dynamic template */
  body: string[]
  members: number
  cities: string[]
  cadence: string
  nextMeeting: string
  focus: string[]
  eligibility: string[]
  founder: { name: string; role: string; company: string; city: string }
  director?: { name: string; role: string; company: string; city: string }
  testimonials: CircleTestimonial[]
  faqs: { q: string; a: string }[]
  seatsOpen: number
}

const faqsBase = (name: string) => [
  {
    q: `Who is eligible to join the ${name} Circle?`,
    a: `Applicants must be a promoter, founder, partner or CXO with decision authority in a ${name.toLowerCase()} business, hold a valid Global Membership, and clear a category-exclusivity check so no two members compete directly inside the same Circle.`,
  },
  {
    q: 'How many members can a single category hold?',
    a: 'One. Category exclusivity is enforced per city cohort — once a category seat is filled, further applicants are waitlisted or routed to an adjacent Circle.',
  },
  {
    q: 'What is the time commitment?',
    a: 'One structured Circle meeting a month (150 minutes), one 1-to-1 peer meeting a fortnight, and one annual Circle presentation. Members who miss three consecutive meetings move to review.',
  },
  {
    q: 'Is the Circle fee separate from Global Membership?',
    a: 'Yes. Global Membership is the base layer; the Circle Membership fee is charged per Circle and covers meeting infrastructure, facilitation and the Circle Founder-led governance.',
  },
]

export const CIRCLES: Circle[] = [
  {
    slug: 'healthcare',
    name: 'Healthcare',
    type: 'industry',
    tagline: 'Hospitals, diagnostics, pharma and medtech promoters in one governed room.',
    summary:
      'India’s healthcare operators carry the same three problems — clinical talent, payer pressure and capex discipline. This Circle puts 24 non-competing promoters in a structured monthly room to solve them in public.',
    body: [
      'The Healthcare Circle is the most mature Circle in the Peers Global system and the anchor for Healthcare One 2026. Members range from 40-bed single-speciality hospitals to diagnostics chains running 90+ collection centres, with a deliberate mix of provider, product and service categories so referrals flow rather than collide.',
      'Every meeting runs the LSR model — Learn, Share, Refer. A 40-minute clinical-business teardown from a member or invited operator, a 60-minute hot-seat where one member puts a live constraint on the table, and a closing 40 minutes of structured referrals with written commitments logged to Unity.',
      'Category exclusivity is strict: one radiology chain, one hospital-information-system vendor, one medical-device distributor per city cohort. That single rule is what makes the referral half of the meeting work.',
    ],
    members: 24,
    cities: ['Ahmedabad', 'Surat', 'Mumbai'],
    cadence: 'Second Friday monthly · 150 minutes',
    nextMeeting: '14 August 2026',
    focus: [
      'Payer mix and NABH-linked pricing',
      'Clinical talent retention',
      'Capex sequencing for new units',
      'Medtech procurement leverage',
    ],
    eligibility: [
      'Promoter, partner or CXO of a healthcare business',
      'Minimum 3 years of operations',
      'Category seat available in your city cohort',
    ],
    founder: {
      name: 'Dr. Hetal Mehta',
      role: 'Circle Founder',
      company: 'Mehta Multispeciality Hospital',
      city: 'Ahmedabad',
    },
    director: {
      name: 'Rakesh Vora',
      role: 'Circle Director',
      company: 'Vora Diagnostics',
      city: 'Ahmedabad',
    },
    testimonials: [
      {
        quote:
          'I came in for referrals and stayed for the hot seat. The Circle made me kill a second-unit plan that would have locked up ₹4.2 crore of working capital for eighteen months.',
        name: 'Dr. Hetal Mehta',
        company: 'Mehta Multispeciality Hospital',
        city: 'Ahmedabad',
      },
      {
        quote:
          'Three of our four corporate diagnostics contracts in 2025 started as a written referral inside this room.',
        name: 'Rakesh Vora',
        company: 'Vora Diagnostics',
        city: 'Ahmedabad',
      },
    ],
    faqs: faqsBase('Healthcare'),
    seatsOpen: 3,
  },
  {
    slug: 'realty-infrastructure',
    name: 'Realty & Infrastructure',
    type: 'industry',
    tagline: 'Developers, contractors and building-material principals, structured for scale.',
    summary:
      'Land, approvals, capital and execution — the four constraints of every realty business. This Circle is built around them with developers and their upstream supply chain in the same governed room.',
    body: [
      'The Realty & Infrastructure Circle pairs residential and commercial developers with the contractors, material principals and consultants they actually buy from. The result is a room where a RERA delay, a lender covenant and a steel contract can all be solved in the same 150 minutes.',
      'Because the category density in realty is high, this Circle runs multiple cohorts per city. Cohort 1 is closed at 26 members; Cohort 2 opened in April 2026 with nine seats still available.',
      'The Circle maintains a shared vendor scorecard — 140+ rated contractors and consultants, visible only inside Unity, contributed by members after project completion.',
    ],
    members: 26,
    cities: ['Ahmedabad', 'Gandhinagar', 'Rajkot', 'Pune'],
    cadence: 'First Thursday monthly · 150 minutes',
    nextMeeting: '6 August 2026',
    focus: [
      'RERA and approval velocity',
      'Construction finance structuring',
      'Material price hedging',
      'Channel-partner economics',
    ],
    eligibility: [
      'Developer, contractor, consultant or material principal',
      'At least one delivered project or ₹5 Cr annual turnover',
      'Category seat available in your cohort',
    ],
    founder: {
      name: 'Jignesh Patel',
      role: 'Circle Founder',
      company: 'Shreeji Developers',
      city: 'Ahmedabad',
    },
    director: {
      name: 'Anita Shah',
      role: 'Circle Director',
      company: 'Shah Formwork Systems',
      city: 'Gandhinagar',
    },
    testimonials: [
      {
        quote:
          'The vendor scorecard alone paid for four years of membership. We stopped repeating other people’s contractor mistakes.',
        name: 'Jignesh Patel',
        company: 'Shreeji Developers',
        city: 'Ahmedabad',
      },
      {
        quote:
          'Our first ₹1.8 crore formwork order outside Gujarat came from a member introduction in Pune.',
        name: 'Anita Shah',
        company: 'Shah Formwork Systems',
        city: 'Gandhinagar',
      },
    ],
    faqs: faqsBase('Realty & Infrastructure'),
    seatsOpen: 2,
  },
  {
    slug: 'realty-2',
    name: 'Realty & Infrastructure',
    type: 'industry',
    cohort: 'Cohort 2',
    tagline: 'The second Ahmedabad realty cohort — opened April 2026, nine seats live.',
    summary:
      'A second governed cohort for the most category-dense sector in the network. Same charter, same LSR model, fresh category map.',
    body: [
      'Cohort 2 exists because Cohort 1 closed with a 14-deep waitlist. Rather than dilute category exclusivity, Peers Global opens a parallel cohort with its own Circle Founder, its own meeting calendar and a clean category map.',
      'Cohorts share the Circle-level assets — the vendor scorecard, the annual Realty Conclave, the shared lender panel — but govern their own rooms and their own referral commitments.',
      'Cross-cohort 1-to-1s are encouraged and tracked in Unity. Cross-cohort referrals count toward Circle health scores for both rooms.',
    ],
    members: 17,
    cities: ['Ahmedabad'],
    cadence: 'Third Thursday monthly · 150 minutes',
    nextMeeting: '20 August 2026',
    focus: [
      'Plotting and township economics',
      'Redevelopment and society approvals',
      'Interior and fit-out supply chain',
      'Sales channel automation',
    ],
    eligibility: [
      'Realty or infrastructure business owner',
      'No competing category seat in Cohort 2',
      'Sponsorship by an existing member or Circle Founder',
    ],
    founder: {
      name: 'Kalpesh Rana',
      role: 'Circle Founder',
      company: 'Rana Realty',
      city: 'Ahmedabad',
    },
    testimonials: [
      {
        quote:
          'Cohort 2 gave nine of us a real seat instead of a waitlist number. Six months in, the room is already trading work.',
        name: 'Kalpesh Rana',
        company: 'Rana Realty',
        city: 'Ahmedabad',
      },
    ],
    faqs: faqsBase('Realty & Infrastructure'),
    seatsOpen: 9,
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    type: 'industry',
    tagline: 'Plant owners solving throughput, compliance and export readiness together.',
    summary:
      'From 20-crore job shops to 300-crore process plants — this Circle is where Gujarat’s manufacturing promoters compare real numbers instead of trade-show claims.',
    body: [
      'The Manufacturing Circle is the network’s largest by combined turnover. Members bring plant-level P&Ls to the room and open them to peer scrutiny under a signed confidentiality charter.',
      'The Circle runs two standing tracks: an operations track on OEE, energy and labour productivity, and a market track on export certification, buyer audits and distributor economics.',
      'Plant visits replace one meeting a quarter. Members host their own floor and take structured feedback from twelve peers who have no commercial interest in flattering them.',
    ],
    members: 28,
    cities: ['Ahmedabad', 'Vadodara', 'Rajkot', 'Surat'],
    cadence: 'Last Saturday monthly · 180 minutes',
    nextMeeting: '29 August 2026',
    focus: [
      'OEE and throughput gains',
      'Export certification and buyer audits',
      'Energy and utility cost',
      'Skilled-labour pipeline',
    ],
    eligibility: [
      'Owner or CXO of a manufacturing unit',
      'Minimum ₹5 Cr annual turnover',
      'Willingness to host one plant visit',
    ],
    founder: {
      name: 'Bhavesh Thakkar',
      role: 'Circle Founder',
      company: 'Thakkar Precision',
      city: 'Rajkot',
    },
    director: {
      name: 'Nilesh Desai',
      role: 'Circle Director',
      company: 'Desai Polymers',
      city: 'Vadodara',
    },
    testimonials: [
      {
        quote:
          'A peer walked my shop floor and found ₹31 lakh of annual energy leakage in ninety minutes. No consultant had.',
        name: 'Bhavesh Thakkar',
        company: 'Thakkar Precision',
        city: 'Rajkot',
      },
      {
        quote:
          'The export track took us from zero to a first container to Sharjah inside eleven months.',
        name: 'Nilesh Desai',
        company: 'Desai Polymers',
        city: 'Vadodara',
      },
    ],
    faqs: faqsBase('Manufacturing'),
    seatsOpen: 4,
  },
  {
    slug: 'technology',
    name: 'IT & Technology',
    type: 'industry',
    tagline: 'Services firms, SaaS founders and IT product houses trading real pipeline.',
    summary:
      'Technology businesses scale on two things — talent density and distribution. This Circle attacks both with founders who have already crossed the ₹5 crore mark.',
    body: [
      'The IT & Technology Circle mixes services and product deliberately. Services firms bring cash flow and client access; product founders bring pricing discipline and retention thinking. Both leave with something the other took years to learn.',
      'A standing agenda item is the pipeline exchange: members surface deals they cannot serve and hand them to a non-competing peer, with the referral value logged in Unity and reviewed quarterly.',
      'The Circle also runs the network’s Unity App advisory group, feeding real product feedback into Peers Global’s own platform roadmap.',
    ],
    members: 22,
    cities: ['Ahmedabad', 'Gandhinagar', 'Bengaluru'],
    cadence: 'Second Wednesday monthly · 150 minutes',
    nextMeeting: '12 August 2026',
    focus: [
      'Talent density and retention',
      'Outbound and partner-led distribution',
      'Pricing and retainer structure',
      'AI adoption inside delivery',
    ],
    eligibility: [
      'Founder or CXO of an IT services or product company',
      'Minimum ₹3 Cr annual revenue or funded',
      'Non-competing category seat available',
    ],
    founder: {
      name: 'Parth Trivedi',
      role: 'Circle Founder',
      company: 'Northbridge Systems',
      city: 'Ahmedabad',
    },
    director: {
      name: 'Sneha Kulkarni',
      role: 'Circle Director',
      company: 'Loopwise SaaS',
      city: 'Bengaluru',
    },
    testimonials: [
      {
        quote:
          'We handed out ₹94 lakh of work we could not staff and received ₹1.6 crore back over two years. That is the whole model.',
        name: 'Parth Trivedi',
        company: 'Northbridge Systems',
        city: 'Ahmedabad',
      },
      {
        quote: 'Repricing our retainers after one hot seat added 9 points of gross margin.',
        name: 'Sneha Kulkarni',
        company: 'Loopwise SaaS',
        city: 'Bengaluru',
      },
    ],
    faqs: faqsBase('IT & Technology'),
    seatsOpen: 5,
  },
  {
    slug: 'finance-advisory',
    name: 'Finance & Advisory',
    type: 'industry',
    tagline: 'CAs, CS, lenders and wealth principals — the trust layer of the network.',
    summary:
      'Every other Circle needs this one. Finance and advisory professionals who serve promoters, held to the same governance as the businesses they advise.',
    body: [
      'The Finance & Advisory Circle is capped tighter than any other room, because trust density matters more than headcount. Members include practising chartered accountants, company secretaries, NBFC principals, insurance and wealth advisors.',
      'The Circle publishes the network’s quarterly compliance digest — GST, MCA, income tax and labour-code changes summarised for non-finance promoters — distributed to all Global Members through Unity.',
      'Members commit to a no-poaching charter on each other’s clients, enforced by the Circle Founder and reviewed annually.',
    ],
    members: 19,
    cities: ['Ahmedabad', 'Mumbai'],
    cadence: 'Third Tuesday monthly · 150 minutes',
    nextMeeting: '18 August 2026',
    focus: [
      'Promoter-side capital structuring',
      'Compliance and litigation risk',
      'Succession and holding structures',
      'Credit access for MSMEs',
    ],
    eligibility: [
      'Practising CA, CS, lawyer, lender or wealth principal',
      'Minimum 5 years in practice',
      'Signed no-poaching charter',
    ],
    founder: {
      name: 'CA Mitesh Joshi',
      role: 'Circle Founder',
      company: 'Joshi & Associates',
      city: 'Ahmedabad',
    },
    testimonials: [
      {
        quote:
          'The compliance digest turned my practice from a vendor into an advisor across four other Circles.',
        name: 'CA Mitesh Joshi',
        company: 'Joshi & Associates',
        city: 'Ahmedabad',
      },
    ],
    faqs: faqsBase('Finance & Advisory'),
    seatsOpen: 2,
  },
  {
    slug: 'retail-consumer',
    name: 'Retail & Consumer',
    type: 'industry',
    tagline: 'Brand owners, distributors and multi-store retailers on shared shelf economics.',
    summary:
      'Shelf, margin and repeat rate. This Circle is built for founders who sell to consumers and have to earn the second purchase.',
    body: [
      'The Retail & Consumer Circle brings D2C founders, traditional distributors and multi-store retailers into one room, which is uncomfortable by design — each one holds the data the others guess at.',
      'A shared quarterly benchmark is maintained on same-store growth, contribution margin and repeat rate, anonymised and published only to contributing members.',
      'The Circle runs a joint negotiation group for marketplace commissions and quick-commerce listing terms, using combined volume as leverage.',
    ],
    members: 23,
    cities: ['Ahmedabad', 'Surat', 'Indore'],
    cadence: 'Fourth Monday monthly · 150 minutes',
    nextMeeting: '24 August 2026',
    focus: [
      'Contribution margin discipline',
      'Quick-commerce and marketplace terms',
      'Retail expansion economics',
      'Repeat and loyalty mechanics',
    ],
    eligibility: [
      'Brand owner, distributor or multi-store retailer',
      'Minimum ₹3 Cr annual turnover',
      'Contribution to the quarterly benchmark',
    ],
    founder: {
      name: 'Rina Bhatt',
      role: 'Circle Founder',
      company: 'Bhatt Foods',
      city: 'Ahmedabad',
    },
    testimonials: [
      {
        quote:
          'The joint negotiation on quick-commerce listing fees saved our brand ₹18 lakh in the first year.',
        name: 'Rina Bhatt',
        company: 'Bhatt Foods',
        city: 'Ahmedabad',
      },
    ],
    faqs: faqsBase('Retail & Consumer'),
    seatsOpen: 4,
  },
  {
    slug: 'education-skilling',
    name: 'Education & Skilling',
    type: 'industry',
    tagline: 'School groups, ed-tech and skilling institutions with shared placement muscle.',
    summary:
      'Education businesses run on trust and outcomes. This Circle connects institution owners to the employers sitting in every other Circle.',
    body: [
      'The Education & Skilling Circle is the network’s clearest example of cross-Circle value: the Manufacturing and IT Circles need trained people, and this room trains them.',
      'Members co-own a placement bridge — a standing pipeline that routes graduating cohorts into member businesses across the network, with placement counts published annually.',
      'The Circle also governs the Peers Global scholarship pool, funded by member contributions and awarded to first-generation entrepreneurs.',
    ],
    members: 18,
    cities: ['Ahmedabad', 'Vadodara'],
    cadence: 'First Tuesday monthly · 150 minutes',
    nextMeeting: '4 August 2026',
    focus: [
      'Placement outcomes and employer bridges',
      'Admissions cost per enrolment',
      'Faculty development',
      'Regulatory and affiliation strategy',
    ],
    eligibility: [
      'Owner or head of an educational or skilling institution',
      'Operating for at least 3 years',
      'Commitment to the placement bridge',
    ],
    founder: {
      name: 'Dr. Ashish Raval',
      role: 'Circle Founder',
      company: 'Raval Institute of Skills',
      city: 'Vadodara',
    },
    testimonials: [
      {
        quote:
          'We placed 212 students inside the network last year. No placement agency comes close to that conversion.',
        name: 'Dr. Ashish Raval',
        company: 'Raval Institute of Skills',
        city: 'Vadodara',
      },
    ],
    faqs: faqsBase('Education & Skilling'),
    seatsOpen: 6,
  },
  {
    slug: 'logistics-mobility',
    name: 'Logistics & Mobility',
    type: 'industry',
    tagline: 'Fleet owners, 3PL operators and mobility founders on cost-per-kilometre.',
    summary:
      'Freight is a margin business measured in single digits. This Circle exists to move those digits with shared lanes, shared benchmarks and shared leverage.',
    body: [
      'The Logistics & Mobility Circle covers fleet owners, warehousing and 3PL operators, freight forwarders and EV mobility founders. The common language is cost-per-kilometre and cost-per-pallet.',
      'Members run a live lane-sharing board inside Unity: empty return legs offered to peers at cost, which has cut deadhead running measurably for the Ahmedabad–Mumbai and Ahmedabad–Delhi corridors.',
      'The Circle negotiates as a block on tyres, fuel cards, telematics and insurance.',
    ],
    members: 20,
    cities: ['Ahmedabad', 'Mundra', 'Mumbai'],
    cadence: 'Second Saturday monthly · 150 minutes',
    nextMeeting: '8 August 2026',
    focus: [
      'Cost-per-kilometre reduction',
      'Lane sharing and deadhead recovery',
      'Warehouse automation payback',
      'EV fleet transition economics',
    ],
    eligibility: [
      'Fleet, 3PL, warehousing or mobility business owner',
      'Minimum 15 owned or managed vehicles, or ₹5 Cr turnover',
      'Participation in the lane-sharing board',
    ],
    founder: {
      name: 'Imran Qureshi',
      role: 'Circle Founder',
      company: 'Qureshi Roadlines',
      city: 'Ahmedabad',
    },
    testimonials: [
      {
        quote:
          'Lane sharing took our empty-return running from 31% to 19% on the Mumbai corridor in two quarters.',
        name: 'Imran Qureshi',
        company: 'Qureshi Roadlines',
        city: 'Ahmedabad',
      },
    ],
    faqs: faqsBase('Logistics & Mobility'),
    seatsOpen: 5,
  },
  {
    slug: 'hospitality-food',
    name: 'Hospitality & Food',
    type: 'industry',
    tagline: 'Hotels, restaurant groups and food service on covers, cost and consistency.',
    summary:
      'A business where one bad month of food cost erases a quarter. This Circle runs on operating ratios, not menus.',
    body: [
      'The Hospitality & Food Circle brings hotel owners, restaurant groups, cloud-kitchen founders and institutional caterers into one room with a shared operating-ratio benchmark.',
      'Mystery-audit swaps are a standing feature: members audit each other’s outlets on a rotating schedule and file structured reports the owner cannot see coming.',
      'The Circle hosts the network’s largest social calendar, which doubles as a live demonstration room for member venues.',
    ],
    members: 21,
    cities: ['Ahmedabad', 'Udaipur', 'Goa'],
    cadence: 'Third Monday monthly · 150 minutes',
    nextMeeting: '17 August 2026',
    focus: [
      'Food and beverage cost control',
      'Covers, RevPAR and occupancy',
      'Aggregator dependency',
      'Service consistency at scale',
    ],
    eligibility: [
      'Owner or operator of a hotel, restaurant or food-service business',
      'At least one outlet operating 2+ years',
      'Participation in mystery-audit swaps',
    ],
    founder: {
      name: 'Vikram Sodha',
      role: 'Circle Founder',
      company: 'Sodha Hospitality',
      city: 'Ahmedabad',
    },
    testimonials: [
      {
        quote:
          'The mystery-audit swap is brutal and it works. Our service scores moved 14 points in six months.',
        name: 'Vikram Sodha',
        company: 'Sodha Hospitality',
        city: 'Ahmedabad',
      },
    ],
    faqs: faqsBase('Hospitality & Food'),
    seatsOpen: 4,
  },

  /* ------------------------------- purpose-led ------------------------------ */
  {
    slug: 'scale-up',
    name: 'Scale-Up',
    type: 'purpose',
    tagline: 'From ₹1 crore to ₹10 crore, with the systems that survive the jump.',
    summary:
      'A purpose-led Circle for owners in the hardest stretch of a business — where founder capacity, not market demand, becomes the ceiling.',
    body: [
      'The Scale-Up Circle is sector-agnostic and stage-specific. Every member is somewhere between ₹1 crore and ₹10 crore of revenue, which means they share the same three problems: the founder is the bottleneck, the second line is thin, and cash is always six weeks behind growth.',
      'Members work a 12-month scale plan with quarterly public review. Each quarter, three members present numbers against plan to the whole room and take corrections on record.',
      'Graduation is real: crossing ₹10 crore moves a member into an industry Circle or the Systems Circle, keeping the room honest about its stage.',
    ],
    members: 26,
    cities: ['Ahmedabad', 'Surat', 'Rajkot'],
    cadence: 'First Saturday monthly · 180 minutes',
    nextMeeting: '1 August 2026',
    focus: [
      'Owner-to-operator transition',
      'Second-line hiring',
      'Working-capital cycle',
      'Pricing and margin repair',
    ],
    eligibility: [
      '₹1 Cr to ₹10 Cr annual revenue',
      'Full-time in the business',
      'Committed to quarterly number reviews',
    ],
    founder: {
      name: 'Dhruv Amin',
      role: 'Circle Founder',
      company: 'Amin Elektrik',
      city: 'Ahmedabad',
    },
    testimonials: [
      {
        quote:
          'Presenting my numbers to twenty-five peers every quarter did more for discipline than any coach I hired.',
        name: 'Dhruv Amin',
        company: 'Amin Elektrik',
        city: 'Ahmedabad',
      },
    ],
    faqs: faqsBase('Scale-Up'),
    seatsOpen: 3,
  },
  {
    slug: 'export-global-trade',
    name: 'Export & Global Trade',
    type: 'purpose',
    tagline: 'First container to first subsidiary, with peers who have already shipped.',
    summary:
      'For businesses taking an Indian product to a foreign buyer — documentation, certification, payment risk and distributor selection, learned from people one step ahead.',
    body: [
      'The Export & Global Trade Circle is organised by market rather than sector: GCC, Africa, South-East Asia, EU and North America desks, each led by a member who already sells there.',
      'Members share buyer-audit templates, freight-forwarder ratings, LC and payment-risk playbooks, and distributor agreements with the commercial terms redacted.',
      'The Circle runs one outbound trade delegation a year, member-funded and member-led.',
    ],
    members: 24,
    cities: ['Ahmedabad', 'Mundra', 'Surat'],
    cadence: 'Fourth Friday monthly · 150 minutes',
    nextMeeting: '28 August 2026',
    focus: [
      'Certification and buyer audits',
      'Payment risk and trade finance',
      'Distributor selection',
      'Landed-cost engineering',
    ],
    eligibility: [
      'Exporting, or export-ready within 12 months',
      'Product or service with a defined target market',
      'Willing to staff a market desk',
    ],
    founder: {
      name: 'Hardik Solanki',
      role: 'Circle Founder',
      company: 'Solanki Ceramics Export',
      city: 'Morbi',
    },
    testimonials: [
      {
        quote:
          'The GCC desk shortened our first Saudi distributor search from eighteen months to five.',
        name: 'Hardik Solanki',
        company: 'Solanki Ceramics Export',
        city: 'Morbi',
      },
    ],
    faqs: faqsBase('Export & Global Trade'),
    seatsOpen: 5,
  },
  {
    slug: 'fundraising-investment',
    name: 'Fundraising & Investment',
    type: 'purpose',
    tagline: 'Raise-ready founders and the investors who actually take meetings.',
    summary:
      'A Circle for founders preparing an institutional raise and for members deploying capital — held together by disclosure standards, not pitch nights.',
    body: [
      'The Fundraising & Investment Circle runs a strict separation: founder members work on raise-readiness, investor members work on deal quality. Both sides sit in the same room under a conflict-disclosure charter.',
      'Every raise-side member maintains a live data room reviewed twice a year by two investor members. Diligence gaps get found here rather than in a term-sheet negotiation.',
      'The Circle publishes an annual anonymised round report — stage, sector, ticket size, dilution — for the whole network.',
    ],
    members: 22,
    cities: ['Ahmedabad', 'Mumbai', 'Bengaluru'],
    cadence: 'Second Tuesday monthly · 150 minutes',
    nextMeeting: '11 August 2026',
    focus: [
      'Raise readiness and data rooms',
      'Valuation and dilution discipline',
      'Debt vs equity sequencing',
      'Investor reporting hygiene',
    ],
    eligibility: [
      'Founder planning a raise in 18 months, or an active investor',
      'Signed conflict-disclosure charter',
      'Audited financials for the last two years',
    ],
    founder: {
      name: 'Nidhi Kapadia',
      role: 'Circle Founder',
      company: 'Kapadia Capital',
      city: 'Mumbai',
    },
    testimonials: [
      {
        quote:
          'Two investor members tore our data room apart before a real fund did. We closed at a 22% better valuation because of it.',
        name: 'Nidhi Kapadia',
        company: 'Kapadia Capital',
        city: 'Mumbai',
      },
    ],
    faqs: faqsBase('Fundraising & Investment'),
    seatsOpen: 3,
  },
  {
    slug: 'digital-growth',
    name: 'Digital Growth',
    type: 'purpose',
    tagline: 'Demand generation that survives a rising cost per acquisition.',
    summary:
      'For businesses whose growth now depends on paid, organic and platform distribution — benchmarked against peers, not agency decks.',
    body: [
      'The Digital Growth Circle is where members bring their actual ad accounts. Blended CAC, contribution margin after marketing and payback period are the only metrics that count in the room.',
      'A quarterly teardown format puts one member’s funnel on the screen — landing page, creative, offer, retention — for structured peer critique.',
      'The Circle maintains a rated bench of freelancers and agencies, scored by members on retention rather than pitch quality.',
    ],
    members: 25,
    cities: ['Ahmedabad', 'Surat', 'Jaipur'],
    cadence: 'Third Wednesday monthly · 150 minutes',
    nextMeeting: '19 August 2026',
    focus: [
      'Blended CAC and payback',
      'Creative testing systems',
      'Organic and content compounding',
      'Retention and lifetime value',
    ],
    eligibility: [
      'Spending at least ₹1 lakh a month on digital demand',
      'Willing to share account-level metrics',
      'Owner or growth decision-maker',
    ],
    founder: {
      name: 'Ravi Chauhan',
      role: 'Circle Founder',
      company: 'Chauhan Direct',
      city: 'Ahmedabad',
    },
    testimonials: [
      {
        quote:
          'One teardown cut our payback period from 7 months to 4. Nobody in an agency meeting would have said what this room said.',
        name: 'Ravi Chauhan',
        company: 'Chauhan Direct',
        city: 'Ahmedabad',
      },
    ],
    faqs: faqsBase('Digital Growth'),
    seatsOpen: 6,
  },
  {
    slug: 'legacy-family-business',
    name: 'Legacy & Family Business',
    type: 'purpose',
    tagline: 'Succession, governance and the conversations families postpone.',
    summary:
      'For second and third-generation businesses working through ownership, roles and the difference between family harmony and business clarity.',
    body: [
      'The Legacy & Family Business Circle handles the hardest agenda in the network. Members work on family constitutions, ownership separation, next-generation induction and exit paths for non-performing family roles.',
      'Meetings are closed even by Peers Global standards: no guests, no recordings, and a written confidentiality undertaking renewed annually.',
      'Members are encouraged to bring the next generation to two open sessions a year, chaired by a different member each time.',
    ],
    members: 20,
    cities: ['Ahmedabad', 'Rajkot'],
    cadence: 'Fourth Saturday monthly · 180 minutes',
    nextMeeting: '22 August 2026',
    focus: [
      'Family constitution and governance',
      'Next-generation induction',
      'Ownership vs management separation',
      'Wealth and estate structuring',
    ],
    eligibility: [
      'Family-owned business, second generation or beyond',
      'At least two family members active in the business',
      'Signed confidentiality undertaking',
    ],
    founder: {
      name: 'Sanjay Modi',
      role: 'Circle Founder',
      company: 'Modi Textiles Group',
      city: 'Ahmedabad',
    },
    testimonials: [
      {
        quote:
          'We wrote a family constitution in eleven months. Without twenty peers who had already done it, we would still be arguing.',
        name: 'Sanjay Modi',
        company: 'Modi Textiles Group',
        city: 'Ahmedabad',
      },
    ],
    faqs: faqsBase('Legacy & Family Business'),
    seatsOpen: 4,
  },
  {
    slug: 'women-founders',
    name: 'Women Founders',
    type: 'purpose',
    tagline: 'Capital, category and command — built by women running real P&Ls.',
    summary:
      'A purpose-led Circle for women promoters, chaired by women, with the same governance, exclusivity and referral discipline as every other room.',
    body: [
      'The Women Founders Circle is not a support group. Entry requires an operating business, and the agenda is capital access, category ownership and the negotiation dynamics that show up differently for women promoters in Indian markets.',
      'The Circle runs a lender and investor panel briefed specifically on women-led businesses, and tracks sanction outcomes for members annually.',
      'Members hold cross-Circle mandates — each Women Founders member also sits in an industry Circle, which is how influence compounds through the network.',
    ],
    members: 23,
    cities: ['Ahmedabad', 'Surat', 'Pune'],
    cadence: 'Second Monday monthly · 150 minutes',
    nextMeeting: '10 August 2026',
    focus: [
      'Capital access and sanction outcomes',
      'Category ownership and pricing power',
      'Leadership bench and delegation',
      'Board and negotiation dynamics',
    ],
    eligibility: [
      'Woman promoter, founder or partner',
      'Operating business with revenue',
      'Also holds or accepts a seat in one industry Circle',
    ],
    founder: {
      name: 'Priyanka Shah',
      role: 'Circle Founder',
      company: 'Shah Nutraceuticals',
      city: 'Ahmedabad',
    },
    testimonials: [
      {
        quote:
          'The lender panel got our working-capital limit raised by 60% after two banks had said no in the same quarter.',
        name: 'Priyanka Shah',
        company: 'Shah Nutraceuticals',
        city: 'Ahmedabad',
      },
    ],
    faqs: faqsBase('Women Founders'),
    seatsOpen: 4,
  },
  {
    slug: 'next-gen',
    name: 'Next Gen Entrepreneurs',
    type: 'purpose',
    tagline: 'Under-35 founders building at speed, held to grown-up governance.',
    summary:
      'For founders under 35 who are past the idea stage and want the operating discipline of an older room without waiting twenty years for it.',
    body: [
      'The Next Gen Circle is the entry ramp into the Peers Global leadership pipeline. Members are under 35, running revenue-generating businesses, and paired with a senior mentor from an industry Circle.',
      'The room moves faster than the rest of the network — monthly sprint commitments, public accountability and a shorter tolerance for excuses.',
      'A structured share of Circle Director openings across the network is reserved for Next Gen members who complete two years in good standing.',
    ],
    members: 27,
    cities: ['Ahmedabad', 'Surat', 'Gandhinagar'],
    cadence: 'First Wednesday monthly · 150 minutes',
    nextMeeting: '5 August 2026',
    focus: [
      'Sprint-based accountability',
      'First-time hiring and delegation',
      'Founder finance literacy',
      'Mentor pairing outcomes',
    ],
    eligibility: [
      'Under 35 years of age',
      'Business generating revenue for 12+ months',
      'Accepts a senior mentor pairing',
    ],
    founder: {
      name: 'Aarav Doshi',
      role: 'Circle Founder',
      company: 'Doshi Labs',
      city: 'Ahmedabad',
    },
    testimonials: [
      {
        quote:
          'My mentor is a ₹200-crore promoter who takes my call. That is not something money buys at 28.',
        name: 'Aarav Doshi',
        company: 'Doshi Labs',
        city: 'Ahmedabad',
      },
    ],
    faqs: faqsBase('Next Gen Entrepreneurs'),
    seatsOpen: 7,
  },
  {
    slug: 'brand-storytelling',
    name: 'Brand & Storytelling',
    type: 'purpose',
    tagline: 'Positioning that earns a premium, not just a prettier logo.',
    summary:
      'For owners who compete on price and want to stop. Positioning, proof and public narrative, worked on in the open.',
    body: [
      'The Brand & Storytelling Circle treats brand as a pricing instrument. Members arrive with a commodity problem and leave with a category position they can defend and charge for.',
      'Every member runs one narrative sprint a year — positioning statement, proof stack, and a public asset shipped inside 90 days, reviewed by the room.',
      'The Circle works closely with VyapaarJagat and the Peers Global media desk, giving members a real distribution surface for the stories they build.',
    ],
    members: 21,
    cities: ['Ahmedabad', 'Mumbai'],
    cadence: 'Third Friday monthly · 150 minutes',
    nextMeeting: '21 August 2026',
    focus: [
      'Category positioning',
      'Proof and credibility assets',
      'Founder-led narrative',
      'Media and PR distribution',
    ],
    eligibility: [
      'Owner or marketing decision-maker',
      'Willing to ship one public asset per quarter',
      'Non-competing category seat',
    ],
    founder: {
      name: 'Meera Iyer',
      role: 'Circle Founder',
      company: 'Iyer Brand Works',
      city: 'Mumbai',
    },
    testimonials: [
      {
        quote:
          'We repositioned from "job work" to "regulated-industry supplier" and raised prices 12% with zero client loss.',
        name: 'Meera Iyer',
        company: 'Iyer Brand Works',
        city: 'Mumbai',
      },
    ],
    faqs: faqsBase('Brand & Storytelling'),
    seatsOpen: 5,
  },
  {
    slug: 'systems-process',
    name: 'Systems & Process',
    type: 'purpose',
    tagline: 'Build the business that runs when the owner is not in the room.',
    summary:
      'For ₹10 crore-plus businesses converting founder instinct into documented, delegated, auditable systems.',
    body: [
      'The Systems & Process Circle is where scale-up graduates go. The work is unglamorous: SOPs, dashboards, review cadence, org design and the removal of the founder from daily decisions.',
      'Each member maintains a live operating system document — org chart, KPI tree, review calendar, escalation rules — peer-reviewed twice a year.',
      'A standing challenge runs in the room: take fourteen consecutive days away from the business, then report what broke.',
    ],
    members: 19,
    cities: ['Ahmedabad', 'Vadodara', 'Rajkot'],
    cadence: 'Fourth Wednesday monthly · 150 minutes',
    nextMeeting: '26 August 2026',
    focus: [
      'KPI trees and dashboards',
      'SOP and delegation depth',
      'Org design and second line',
      'Review and escalation cadence',
    ],
    eligibility: [
      '₹10 Cr+ annual revenue or 50+ employees',
      'Maintains a live operating-system document',
      'Takes the fourteen-day challenge',
    ],
    founder: {
      name: 'Tushar Panchal',
      role: 'Circle Founder',
      company: 'Panchal Engineering',
      city: 'Vadodara',
    },
    testimonials: [
      {
        quote:
          'I took eighteen days off. Two things broke, both documented within a week. That report was worth the whole year.',
        name: 'Tushar Panchal',
        company: 'Panchal Engineering',
        city: 'Vadodara',
      },
    ],
    faqs: faqsBase('Systems & Process'),
    seatsOpen: 3,
  },
]

export const INDUSTRY_CIRCLES = CIRCLES.filter((c) => c.type === 'industry')
export const PURPOSE_CIRCLES = CIRCLES.filter((c) => c.type === 'purpose')

export function getCircle(slug: string) {
  return CIRCLES.find((c) => c.slug === slug)
}

export const CIRCLE_CITIES = Array.from(new Set(CIRCLES.flatMap((c) => c.cities))).sort()
