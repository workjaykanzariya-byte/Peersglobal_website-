export type EventRecord = {
  slug: string
  title: string
  kind: 'Conclave' | 'Circle Meeting' | 'City Mixer' | 'Leadership Summit' | 'Masterclass'
  date: string
  isoDate: string
  time: string
  city: string
  venue: string
  status: 'upcoming' | 'past'
  priority?: boolean
  attending: number
  capacity: number
  price: string
  summary: string
  body: string[]
  agenda: { time: string; title: string; detail?: string }[]
  speakers: { name: string; role: string; company: string; city: string }[]
  circles: string[]
  faqs: { q: string; a: string }[]
}

export const EVENTS: EventRecord[] = [
  {
    slug: 'healthcare-one-2026',
    title: 'Healthcare One 2026',
    kind: 'Conclave',
    date: '30 July 2026',
    isoDate: '2026-07-30',
    time: '09:00 – 18:30 IST',
    city: 'Ahmedabad',
    venue: 'Courtyard by Marriott, Satellite',
    status: 'upcoming',
    priority: true,
    attending: 412,
    capacity: 500,
    price: '₹4,500 for Explorers · Included for Global & Circle Members',
    summary:
      'The flagship healthcare-business conclave of the Peers Global Healthcare Circle. One day, 400+ promoters, and an agenda written entirely around the business of care — not clinical content.',
    body: [
      'Healthcare One 2026 is the largest single-sector gathering Peers Global runs. It exists because healthcare promoters in India have plenty of clinical conferences and almost no serious room to discuss payer mix, capex discipline, clinical talent economics and the operating reality of running a 40-to-400 bed institution.',
      'The day is built in three acts: an operator-led morning on unit economics, an afternoon of closed hot seats where four promoters put live constraints in front of the room, and an evening of structured referral exchange with written commitments logged to Unity.',
      'This is the priority event on the 2026 calendar. Explorer passes are limited to 90 seats and are released in two tranches.',
    ],
    agenda: [
      { time: '09:00', title: 'Registration and Circle check-in' },
      {
        time: '09:45',
        title: 'Opening: the business of care in 2026',
        detail: 'Dr. Pravin Parmar on why healthcare needs a leadership organisation, not another association.',
      },
      {
        time: '10:30',
        title: 'Unit economics teardown',
        detail: 'Three operators open their payer mix, ARPOB and capex sequencing to the room.',
      },
      { time: '12:15', title: 'Category roundtables', detail: 'Hospitals · Diagnostics · Pharma · Medtech' },
      { time: '13:30', title: 'Lunch and 1-to-1 pairing' },
      {
        time: '14:45',
        title: 'Closed hot seats',
        detail: 'Four members, four live constraints, ninety minutes. Members and invited guests only.',
      },
      { time: '16:30', title: 'Clinical talent panel', detail: 'Retention economics with three HR heads' },
      { time: '17:30', title: 'Structured referral exchange', detail: 'Written commitments logged to Unity' },
      { time: '18:30', title: 'Close: Saath Chalein' },
    ],
    speakers: [
      { name: 'Dr. Pravin Parmar', role: 'Founder', company: 'Peers Global', city: 'Ahmedabad' },
      { name: 'Dr. Hetal Mehta', role: 'Circle Founder, Healthcare', company: 'Mehta Multispeciality Hospital', city: 'Ahmedabad' },
      { name: 'Rakesh Vora', role: 'Circle Director, Healthcare', company: 'Vora Diagnostics', city: 'Ahmedabad' },
      { name: 'Dr. Sameera Khan', role: 'Chief Operating Officer', company: 'Sterling Care Group', city: 'Mumbai' },
      { name: 'CA Mitesh Joshi', role: 'Circle Founder, Finance', company: 'Joshi & Associates', city: 'Ahmedabad' },
    ],
    circles: ['healthcare', 'finance-advisory', 'systems-process'],
    faqs: [
      {
        q: 'Can non-members attend?',
        a: 'Yes. 90 Explorer passes are released across two tranches. Explorers can attend everything except the closed hot-seat block.',
      },
      {
        q: 'Is the referral exchange open to Explorers?',
        a: 'Explorers can observe. Written referral commitments are logged only for Global and Circle Members through Unity.',
      },
      {
        q: 'What is the refund policy?',
        a: 'Full refund up to 14 days before the event, 50% up to 72 hours before, none after. Passes are transferable within the same organisation at no cost.',
      },
    ],
  },
  {
    slug: 'circle-founder-cohort-briefing-august-2026',
    title: 'Circle Founder Cohort Briefing',
    kind: 'Leadership Summit',
    date: '9 August 2026',
    isoDate: '2026-08-09',
    time: '10:00 – 14:00 IST',
    city: 'Ahmedabad',
    venue: 'Peers Global House, Prahlad Nagar',
    status: 'upcoming',
    attending: 64,
    capacity: 80,
    price: 'By invitation · Global Members eligible to apply',
    summary:
      'The closed briefing for members shortlisted for a Circle Founder seat: economics, governance obligations, the charter, and the twelve-month build plan.',
    body: [
      'Circle Founder is the flagship leadership role in Peers Global — the person who builds a room, governs it and owns its outcomes. This briefing exists so nobody accepts the role without understanding what it actually costs.',
      'The session covers the full economics, the governance charter, the category-exclusivity discipline, the escalation path when a member breaks the referral commitment, and the twelve-month build plan from charter member one to a room of twenty-four.',
      'Attendance is by invitation following a Global Membership review. Applications open on the Circle Founder page.',
    ],
    agenda: [
      { time: '10:00', title: 'What a Circle Founder actually owns' },
      { time: '10:45', title: 'The economics, in full', detail: 'Fee split, city rights, renewal share, review triggers' },
      { time: '11:45', title: 'Governance and the charter' },
      { time: '12:45', title: 'Twelve-month build plan and Unity tooling' },
      { time: '13:30', title: 'Open Q&A with three sitting Circle Founders' },
    ],
    speakers: [
      { name: 'Dr. Pravin Parmar', role: 'Founder', company: 'Peers Global', city: 'Ahmedabad' },
      { name: 'Jignesh Patel', role: 'Circle Founder, Realty', company: 'Shreeji Developers', city: 'Ahmedabad' },
      { name: 'Priyanka Shah', role: 'Circle Founder, Women Founders', company: 'Shah Nutraceuticals', city: 'Ahmedabad' },
    ],
    circles: [],
    faqs: [
      {
        q: 'Do I need to be a Global Member to attend?',
        a: 'Yes. The briefing is open only to Global Members in good standing for at least six months.',
      },
      {
        q: 'Is accepting a seat mandatory after attending?',
        a: 'No. Roughly a third of attendees decline, which is the point of holding the briefing before the commitment.',
      },
    ],
  },
  {
    slug: 'manufacturing-plant-walk-rajkot-august-2026',
    title: 'Manufacturing Plant Walk — Rajkot',
    kind: 'Circle Meeting',
    date: '29 August 2026',
    isoDate: '2026-08-29',
    time: '08:30 – 12:30 IST',
    city: 'Rajkot',
    venue: 'Thakkar Precision, Shapar-Veraval',
    status: 'upcoming',
    attending: 26,
    capacity: 32,
    price: 'Circle Members only',
    summary:
      'The Manufacturing Circle replaces one meeting a quarter with a real plant walk. This quarter, Thakkar Precision opens its floor to structured peer critique.',
    body: [
      'A plant walk is not a factory tour. Twelve to sixteen peers walk the floor with a structured scoring sheet covering layout, OEE, energy, safety, inventory discipline and shop-floor communication.',
      'The host receives a written report within seven days, and commits to three corrective actions reviewed at the following month’s meeting.',
      'Hosting is a rotating obligation for every Manufacturing Circle member.',
    ],
    agenda: [
      { time: '08:30', title: 'Host briefing and scoring-sheet handout' },
      { time: '09:00', title: 'Floor walk — layout, flow, WIP' },
      { time: '10:30', title: 'Energy, utilities and maintenance review' },
      { time: '11:30', title: 'Debrief: three corrective commitments' },
    ],
    speakers: [
      { name: 'Bhavesh Thakkar', role: 'Circle Founder, Manufacturing', company: 'Thakkar Precision', city: 'Rajkot' },
      { name: 'Nilesh Desai', role: 'Circle Director', company: 'Desai Polymers', city: 'Vadodara' },
    ],
    circles: ['manufacturing', 'systems-process'],
    faqs: [
      {
        q: 'Can I bring my plant head?',
        a: 'Yes, one operations colleague per member. They participate in scoring but not in the debrief.',
      },
    ],
  },
  {
    slug: 'surat-city-mixer-august-2026',
    title: 'Surat City Mixer',
    kind: 'City Mixer',
    date: '16 August 2026',
    isoDate: '2026-08-16',
    time: '18:30 – 21:30 IST',
    city: 'Surat',
    venue: 'The Grand Bhagwati, Surat',
    status: 'upcoming',
    attending: 148,
    capacity: 220,
    price: 'Free for Explorers · Registration required',
    summary:
      'The open door into Peers Global Surat. Members from six Circles, structured introductions, and no sales pitch from a stage.',
    body: [
      'City Mixers are the network’s primary Explorer surface. The format is deliberately light: three ninety-second member stories, a structured introduction round, and two hours of unscripted room.',
      'Surat now runs seats in six Circles — Manufacturing, Retail & Consumer, Scale-Up, Export & Global Trade, Digital Growth and Women Founders.',
      'Explorers who attend a Mixer get a fourteen-day window to apply with the sponsoring member named on the application.',
    ],
    agenda: [
      { time: '18:30', title: 'Open registration and structured introductions' },
      { time: '19:15', title: 'Three member stories, ninety seconds each' },
      { time: '19:45', title: 'Circle tables — meet the room you would join' },
      { time: '20:30', title: 'Open networking and dinner' },
    ],
    speakers: [
      { name: 'Rina Bhatt', role: 'Circle Founder, Retail & Consumer', company: 'Bhatt Foods', city: 'Ahmedabad' },
      { name: 'Hardik Solanki', role: 'Circle Founder, Export', company: 'Solanki Ceramics Export', city: 'Morbi' },
    ],
    circles: ['manufacturing', 'retail-consumer', 'export-global-trade', 'scale-up'],
    faqs: [
      {
        q: 'Is this a sales event?',
        a: 'No. Members are briefed not to pitch. The purpose is to let you judge the room before you apply to it.',
      },
    ],
  },
  {
    slug: 'unity-masterclass-referral-discipline',
    title: 'Masterclass: Referral Discipline on Unity',
    kind: 'Masterclass',
    date: '22 August 2026',
    isoDate: '2026-08-22',
    time: '19:00 – 20:30 IST',
    city: 'Online',
    venue: 'Unity App · Live',
    status: 'upcoming',
    attending: 306,
    capacity: 1000,
    price: 'Free for all members',
    summary:
      'A ninety-minute working session on writing referrals that actually convert, and logging them so the Circle can hold you to them.',
    body: [
      'Most networking referrals fail because they are introductions, not mandates. This masterclass teaches the written-referral standard used across Peers Global Circles.',
      'Delivered live in Unity, recorded and archived to the member library within 48 hours.',
      'Hinglish delivery, English slides — the same format as the 25-video training series.',
    ],
    agenda: [
      { time: '19:00', title: 'Why introductions fail and mandates convert' },
      { time: '19:30', title: 'The written-referral standard, line by line' },
      { time: '20:00', title: 'Logging, follow-up and Circle health scores' },
    ],
    speakers: [
      { name: 'Parth Trivedi', role: 'Circle Founder, IT & Technology', company: 'Northbridge Systems', city: 'Ahmedabad' },
    ],
    circles: [],
    faqs: [
      {
        q: 'Will it be recorded?',
        a: 'Yes, archived to the Unity member library within 48 hours with Hinglish audio retained.',
      },
    ],
  },
  {
    slug: 'peers-global-annual-2026',
    title: 'Peers Global Annual 2026',
    kind: 'Conclave',
    date: '12 April 2026',
    isoDate: '2026-04-12',
    time: '09:00 – 22:00 IST',
    city: 'Ahmedabad',
    venue: 'Science City Convention Centre',
    status: 'past',
    attending: 1180,
    capacity: 1200,
    price: 'Concluded',
    summary:
      'The annual gathering of the whole network — 1,180 members and guests, 19 Circle presentations, and the 2026 leadership announcements.',
    body: [
      'The Annual is where the network audits itself in public: every Circle presents its year, its referral value, its retention and its failures.',
      'The 2026 edition announced two new purpose-led Circles, the second Realty cohort, and the Mission 2030 targets.',
      'Full recordings and the Circle year-books are in the Unity member library.',
    ],
    agenda: [
      { time: '09:00', title: 'Network state of play' },
      { time: '11:00', title: '19 Circle presentations' },
      { time: '15:00', title: 'Mission 2030 announcement' },
      { time: '19:00', title: 'Recognition night' },
    ],
    speakers: [{ name: 'Dr. Pravin Parmar', role: 'Founder', company: 'Peers Global', city: 'Ahmedabad' }],
    circles: [],
    faqs: [],
  },
  {
    slug: 'women-founders-capital-clinic-2026',
    title: 'Women Founders Capital Clinic',
    kind: 'Masterclass',
    date: '20 June 2026',
    isoDate: '2026-06-20',
    time: '10:00 – 15:00 IST',
    city: 'Ahmedabad',
    venue: 'Peers Global House, Prahlad Nagar',
    status: 'past',
    attending: 92,
    capacity: 100,
    price: 'Concluded',
    summary:
      'A working clinic pairing 23 women promoters with a briefed lender and investor panel. Eleven sanction outcomes tracked so far.',
    body: [
      'The clinic format replaces pitching with diligence: each promoter walks a lender through their actual working-capital cycle and receives written objections.',
      'Eleven of the twenty-three participants have since reported improved sanction outcomes.',
      'The next clinic is scheduled for December 2026.',
    ],
    agenda: [
      { time: '10:00', title: 'Working-capital diagnostics' },
      { time: '12:00', title: 'Lender objection rounds' },
      { time: '14:00', title: 'Written action plans' },
    ],
    speakers: [
      { name: 'Priyanka Shah', role: 'Circle Founder, Women Founders', company: 'Shah Nutraceuticals', city: 'Ahmedabad' },
      { name: 'Nidhi Kapadia', role: 'Circle Founder, Fundraising', company: 'Kapadia Capital', city: 'Mumbai' },
    ],
    circles: ['women-founders', 'fundraising-investment'],
    faqs: [],
  },
]

export const UPCOMING_EVENTS = EVENTS.filter((e) => e.status === 'upcoming')
export const PAST_EVENTS = EVENTS.filter((e) => e.status === 'past')
export const EVENT_CITIES = Array.from(new Set(EVENTS.map((e) => e.city))).sort()

export function getEvent(slug: string) {
  return EVENTS.find((e) => e.slug === slug)
}
