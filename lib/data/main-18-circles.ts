export type CircleCategory = {
  slug: string
  name: string
  type: 'industry' | 'interest'
  iconName: string
  description: string
}

export const MAIN_18_CIRCLES: CircleCategory[] = [
  // --- Part 1: Industry-Specific Circles (9) ---
  {
    slug: 'manufacturing-engineering',
    name: 'Manufacturing & Engineering Circles',
    type: 'industry',
    iconName: 'Factory',
    description: 'Industrial promoters, OEM suppliers, plant owners, machinery manufacturers, and engineering firm founders.'
  },
  {
    slug: 'real-estate-construction-infrastructure',
    name: 'Real Estate, Construction & Infrastructure',
    type: 'industry',
    iconName: 'Building2',
    description: 'Real estate developers, civil contractors, structural engineers, architects, and building material suppliers.'
  },
  {
    slug: 'technology-it-digital-services',
    name: 'Technology, IT & Digital Services Circles',
    type: 'industry',
    iconName: 'Laptop',
    description: 'SaaS founders, IT export company owners, AI developers, cybersecurity heads, and digital agencies.'
  },
  {
    slug: 'healthcare-wellness-life-sciences',
    name: 'Healthcare, Wellness & Life Sciences Circles',
    type: 'industry',
    iconName: 'ShieldPlus',
    description: 'Hospital owners, pharma exporters, medical device makers, diagnostic founders, and wellness promoters.'
  },
  {
    slug: 'education-training-skill-development',
    name: 'Education, Training & Skill Development Circles',
    type: 'industry',
    iconName: 'GraduationCap',
    description: 'EdTech founders, private institute owners, skill development promoters, and corporate trainers.'
  },
  {
    slug: 'events-fashion-apparel-lifestyle',
    name: 'Events, Fashion, Apparel & Lifestyle Circles',
    type: 'industry',
    iconName: 'Palette',
    description: 'Textile manufacturers, fashion brand owners, event management promoters, and lifestyle retail heads.'
  },
  {
    slug: 'csr-ngos-impact-nation-building',
    name: 'CSR, NGOs, Impact & Nation-Building Circle',
    type: 'industry',
    iconName: 'HeartHandshake',
    description: 'CSR directors, non-profit founders, social impact pioneers, and public sector development partners.'
  },
  {
    slug: 'franchise-licensing',
    name: 'Franchise & Licensing Circles',
    type: 'industry',
    iconName: 'Layers',
    description: 'Franchise brand owners, master licensees, multi-unit retail operators, and brand licensing strategists.'
  },
  {
    slug: 'sustainable-esg-business',
    name: 'Sustainable & ESG Business',
    type: 'industry',
    iconName: 'Leaf',
    description: 'Renewable energy founders, EV ecosystem leaders, waste management promoters, and ESG compliance heads.'
  },

  // --- Part 2: Interest-Specific Circles (9) ---
  {
    slug: 'import-export-global-trade',
    name: 'Import, Export & Global Trade Circles',
    type: 'interest',
    iconName: 'Truck',
    description: 'Merchant exporters, freight forwarders, customs clearing agents, and international trade business heads.'
  },
  {
    slug: 'startup-founders',
    name: 'Startup Founders Circles',
    type: 'interest',
    iconName: 'Rocket',
    description: 'D2C brand creators, Tech innovators, seed & Series-A funded startup founders, and venture builders.'
  },
  {
    slug: 'sme-ipo-goal',
    name: 'SME IPO Goal Circles',
    type: 'interest',
    iconName: 'TrendingUp',
    description: 'Promoters preparing for NSE Emerge / BSE SME IPO listing, merchant bankers, and corporate auditors.'
  },
  {
    slug: 'investors-circle',
    name: 'Investors Circles',
    type: 'interest',
    iconName: 'Wallet',
    description: 'Angel investors, family offices, HNI fund managers, private equity partners, and venture capitalists.'
  },
  {
    slug: 'global-expansion-cross-border',
    name: 'Global Expansion (Cross-Border) Circle',
    type: 'interest',
    iconName: 'Globe',
    description: 'Companies expanding into Dubai, US, Singapore, UK, and European markets with cross-border setups.'
  },
  {
    slug: 'msme-entrepreneurs',
    name: 'MSME Entrepreneurs Circles',
    type: 'interest',
    iconName: 'Store',
    description: 'High-growth micro, small and medium business promoters collaborating on debt capital and supply chain.'
  },
  {
    slug: 'family-business-circles',
    name: 'Family Business Circles',
    type: 'interest',
    iconName: 'Users',
    description: '2nd and 3rd generation family business successors, family governance leads, and legacy business heads.'
  },
  {
    slug: 'young-entrepreneurs-below-35',
    name: 'Young Entrepreneurs (Below 35) Circles',
    type: 'interest',
    iconName: 'Lightbulb',
    description: 'Under-35 business founders, young promoters, and next-gen entrepreneurs accelerating venture growth.'
  },
  {
    slug: 'leadership-transformation',
    name: 'Leadership & Transformation Circle',
    type: 'interest',
    iconName: 'Award',
    description: 'CXOs, executive coaches, organizational transformation heads, and corporate governance advisors.'
  }
]

export const INDUSTRY_18_CIRCLES = MAIN_18_CIRCLES.filter((c) => c.type === 'industry')
export const INTEREST_18_CIRCLES = MAIN_18_CIRCLES.filter((c) => c.type === 'interest')
