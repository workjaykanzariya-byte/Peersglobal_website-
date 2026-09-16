export type FaqItem = { q: string; a: string }
export type FaqGroup = { group: string; items: FaqItem[] }

export const FAQS: FaqGroup[] = [
  {
    group: 'Membership',
    items: [
      {
        q: 'What is the difference between Explorer, Global, and Circle Membership?',
        a: 'Explorer access is free — it covers up to two open Circle meetings as a guest. Global Membership gives you access to the full Peers Global network, Unity platform, and events. Circle Membership adds a governed, category-exclusive seat inside a specific Circle, with the full LSR meeting model and referral ledger.',
      },
      {
        q: 'How much does Circle Membership cost?',
        a: 'Pricing is published transparently on the /membership page. Explorer access is free for 90 days. Circle Membership (which includes Global Membership & full Unity access) is ₹18,000/year + GST. All pricing includes Unity platform access.',
      },
      {
        q: 'Is there a trial or guest option before I commit?',
        a: 'Yes — Explorer access is free. You can attend up to two open Circle meetings as a guest with no fee and no commitment. Submit a guest seat request on the contact page and we will match you to the right Circle meeting within 7 days.',
      },
      {
        q: 'Can I hold multiple Circle Memberships?',
        a: 'Yes, subject to category exclusivity. You may hold seats in an Industry Circle and a Purpose-led Circle simultaneously if your business profile fits both and seats are available.',
      },
      {
        q: 'What happens if I want to cancel my membership?',
        a: 'Refund policy: within 30 days of activation, unused membership is refunded at 80%. After 30 days, no refunds are issued for the current membership year. See the full Refund Policy in the footer.',
      },
    ],
  },
  {
    group: 'Circles',
    items: [
      {
        q: 'What is a Circle?',
        a: 'A Circle is a governed peer group of 20–30 non-competing business owners from the same sector or life-stage. Each Circle meets monthly for 150 minutes following the LSR (Learn, Share, Refer) model — a fixed, structured agenda designed to produce referrals, not just conversations.',
      },
      {
        q: 'What does "category exclusivity" mean?',
        a: 'Each category (e.g. radiology, hospital-information-system, medical-device distribution) may have only one member per city cohort. This removes competitive friction and makes referrals flow naturally. If a category is full, applicants are waitlisted or guided to a complementary Circle.',
      },
      {
        q: 'How many Circles are there and where do they meet?',
        a: 'There are 19 active Circles — 10 Industry and 9 Purpose-led. They currently run across 11 cities in India: Ahmedabad, Gandhinagar, Surat, Rajkot, Vadodara, Morbi, Mundra, Mumbai, Pune, Indore, and Bengaluru.',
      },
      {
        q: 'Can I switch Circles after joining?',
        a: 'Yes, subject to a category-exclusivity check and Circle Founder approval. A switch request takes 30 days to process and may require re-evaluation of your application.',
      },
      {
        q: 'What is the time commitment?',
        a: 'One Circle meeting per month (150 minutes), one 1-to-1 peer meeting per fortnight (30–45 minutes), and one annual Circle presentation. Members who miss three consecutive meetings move to a review process.',
      },
    ],
  },
  {
    group: 'Leadership',
    items: [
      {
        q: 'What are the leadership roles at Peers Global?',
        a: 'There are five rungs: Leadership Team (LT), Circle Director (CD), Circle Founder (CF), Industry Director (ID), and Regional Executive Director (RED). Each role has a written description, defined ownership, and published economics. Leadership is a job, not an honorary title.',
      },
      {
        q: 'How do I become a Circle Founder?',
        a: 'You must hold a Circle Membership in good standing for at least 12 months, pass a leadership assessment, and identify a city-sector combination where a new Circle is feasible. There is a structured onboarding process and a Circle launch checklist. Full details are on the /leadership/circle-founder page.',
      },
      {
        q: 'Do leadership roles come with income?',
        a: 'Yes. Circle Founders earn a percentage of Circle Membership revenue from their Circle. Circle Directors and Industry Directors also have published revenue-share structures. Economics are disclosed during the application process — ask via the contact form.',
      },
    ],
  },
  {
    group: 'Unity App',
    items: [
      {
        q: 'What is Unity?',
        a: 'Unity is the Peers Global platform of record — a mobile and web app where all network activity is logged. It includes the member directory, referral ledger (with written commitments, dates, and status), meeting attendance records, 1-to-1 pairing, and vendor scorecards. If it did not happen in Unity, it did not happen.',
      },
      {
        q: 'Is Unity available on iOS and Android?',
        a: 'Yes. Unity is available on both the App Store and Google Play Store. Global and Circle Members receive login credentials after onboarding. Explorers can access a limited preview without a login.',
      },
      {
        q: 'Is my data on Unity private?',
        a: 'Yes. Your contact details are visible only to verified members, not to the public web. Leaders and Circle Founders can see attendance data for governance purposes. A public opt-in flag lets you choose to appear on the /leaders directory page.',
      },
    ],
  },
  {
    group: 'Events',
    items: [
      {
        q: 'Can non-members attend Peers Global events?',
        a: 'Most events are open to Explorers (registered guests). Conclaves and flagship events like Healthcare One 2026 have specific guest registration. Check each event page for access rules.',
      },
      {
        q: 'How do I register for an event?',
        a: 'Visit the event detail page and click the Register button. For open events, no membership is required — just an Explorer registration. For members-only events, your Unity login is used for verification.',
      },
      {
        q: 'What is Healthcare One 2026?',
        a: 'Healthcare One 2026 is the flagship event of the Healthcare Circle, scheduled for 30 July 2026 in Ahmedabad. It brings together 300+ healthcare operators, investors, and policymakers for a full-day programme of panels, hot-seats, and structured networking. See the event page for the agenda and registration.',
      },
    ],
  },
  {
    group: 'Payments & Refunds',
    items: [
      {
        q: 'What payment methods do you accept?',
        a: 'We accept UPI, NEFT/RTGS, credit/debit cards, and corporate cheques. All payments are processed securely through our payment gateway. GST invoice is issued within 3 working days.',
      },
      {
        q: 'What is the refund policy?',
        a: 'Within 30 days of membership activation: 80% refund of unused membership fee. After 30 days: no refund for the current membership year. Event registration fees are non-refundable unless the event is cancelled by Peers Global. Full details: /legal/refund-policy.',
      },
      {
        q: 'Do you offer EMI or instalment options?',
        a: 'Yes, for Circle Membership. Quarterly instalments are available on request. Contact us at hello@peersglobal.com or via the contact form with your preference.',
      },
    ],
  },
]
