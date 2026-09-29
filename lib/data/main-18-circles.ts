export type CircleCategory = {
  slug: string
  name: string
  type: 'industry' | 'interest'
  iconName: string
  bgColor: string
  activeCities: string[]
  activeSlug: string
  tagline: string
  description: string
}

export const STATE_CITIES_MAP: Record<string, string[]> = {
  'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Gandhinagar', 'Morbi', 'Bhavnagar', 'Jamnagar'],
  'Maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad', 'Kolhapur'],
  'Karnataka': ['Bengaluru', 'Mysuru', 'Hubballi', 'Mangaluru'],
  'Delhi NCR': ['Delhi', 'Gurugram', 'Noida', 'Faridabad'],
  'Telangana': ['Hyderabad', 'Warangal'],
  'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai'],
  'Rajasthan': ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota'],
  'West Bengal': ['Kolkata', 'Siliguri'],
  'Madhya Pradesh': ['Indore', 'Bhopal', 'Gwalior'],
  'Uttar Pradesh': ['Lucknow', 'Kanpur', 'Varanasi', 'Agra'],
  'Punjab / Haryana': ['Chandigarh', 'Ludhiana', 'Amritsar'],
  'Kerala': ['Kochi', 'Thiruvananthapuram', 'Kozhikode'],
  'Global / Cross-Border': ['Dubai', 'Singapore', 'London', 'New York'],
}

export const MAIN_18_CIRCLES: CircleCategory[] = [
  // --- Part 1: Industry-Specific Circles (9) - Exactly Matching Image 2 ---
  {
    slug: 'manufacturing-engineering',
    name: 'Manufacturing & Engineering Circles',
    type: 'industry',
    iconName: 'Factory',
    bgColor: 'bg-[#0D9488]', // Teal
    activeCities: ['Ahmedabad', 'Surat', 'Rajkot', 'Vadodara', 'Pune', 'Mumbai'],
    activeSlug: 'ahmedabad-tech',
    tagline: 'Industrial promoters, OEM suppliers, plant owners & engineering founders.',
    description: 'Industrial promoters, OEM suppliers, plant owners, machinery manufacturers, and engineering firm founders collaborating on supply chain, lean manufacturing, and exports.'
  },
  {
    slug: 'real-estate-construction-infrastructure',
    name: 'Real Estate, Construction & Infrastructure',
    type: 'industry',
    iconName: 'Building2',
    bgColor: 'bg-[#C2410C]', // Warm Orange / Rust
    activeCities: ['Ahmedabad', 'Surat', 'Mumbai', 'Morbi', 'Bengaluru'],
    activeSlug: 'ahmedabad-real-estate-construction-infrastructure-circle',
    tagline: 'Developers, contractors, structural engineers & materials suppliers.',
    description: 'Real estate developers, civil contractors, structural engineers, architects, and building material suppliers sharing land JVs, RERA strategies, and procurement advantages.'
  },
  {
    slug: 'technology-it-digital-services',
    name: 'Technology, IT & Digital Services Circles',
    type: 'industry',
    iconName: 'Laptop',
    bgColor: 'bg-[#2563EB]', // Royal Blue
    activeCities: ['Ahmedabad', 'Gandhinagar', 'Vadodara', 'Bengaluru', 'Pune', 'Hyderabad'],
    activeSlug: 'ahmedabad-tech',
    tagline: 'SaaS founders, IT export owners, AI developers & tech agencies.',
    description: 'SaaS founders, IT export company owners, AI developers, cybersecurity heads, and digital agencies scaling ARR, talent retention, and overseas client contracts.'
  },
  {
    slug: 'healthcare-wellness-life-sciences',
    name: 'Healthcare, Wellness & Life Sciences Circles',
    type: 'industry',
    iconName: 'ShieldPlus',
    bgColor: 'bg-[#059669]', // Emerald Green
    activeCities: ['Ahmedabad', 'Mumbai', 'Vadodara', 'Hyderabad', 'Bengaluru'],
    activeSlug: 'ahmedabad-tech',
    tagline: 'Hospital owners, pharma exporters, device makers & diagnostics.',
    description: 'Hospital owners, pharma exporters, medical device makers, diagnostic founders, and wellness promoters navigating clinical governance, exports, and health tech alliances.'
  },
  {
    slug: 'education-training-skill-development',
    name: 'Education, Training & Skill Development Circles',
    type: 'industry',
    iconName: 'GraduationCap',
    bgColor: 'bg-[#7C3AED]', // Purple
    activeCities: ['Ahmedabad', 'Delhi', 'Bengaluru', 'Pune'],
    activeSlug: 'education-training-skill-development',
    tagline: 'EdTech founders, private institutes, skill centers & trainers.',
    description: 'EdTech founders, private institute owners, skill development promoters, and corporate trainers scaling student outcomes, accreditations, and corporate skilling.'
  },
  {
    slug: 'events-fashion-apparel-lifestyle',
    name: 'Events, Fashion, Apparel & Lifestyle Circles',
    type: 'industry',
    iconName: 'Palette',
    bgColor: 'bg-[#DB2777]', // Magenta / Pink
    activeCities: ['Ahmedabad', 'Surat', 'Mumbai', 'Jaipur', 'Delhi'],
    activeSlug: 'ahmedabad-tech',
    tagline: 'Textile makers, fashion brands, event leaders & retail heads.',
    description: 'Textile manufacturers, fashion brand owners, event management promoters, and lifestyle retail heads scaling brand distribution, luxury experiences, and exports.'
  },
  {
    slug: 'csr-ngos-impact-nation-building',
    name: 'CSR, NGOs, Impact & Nation-Building Circle',
    type: 'industry',
    iconName: 'HeartHandshake',
    bgColor: 'bg-[#0284C7]', // Sky Blue
    activeCities: ['Ahmedabad', 'Delhi', 'Mumbai', 'Bengaluru'],
    activeSlug: 'community-builders-circle',
    tagline: 'CSR directors, non-profit founders & social impact pioneers.',
    description: 'CSR directors, non-profit founders, social impact pioneers, and public sector development partners institutionalizing large-scale social welfare and SDGs.'
  },
  {
    slug: 'franchise-licensing',
    name: 'Franchise & Licensing Circles',
    type: 'industry',
    iconName: 'Layers',
    bgColor: 'bg-[#9333EA]', // Deep Purple
    activeCities: ['Ahmedabad', 'Mumbai', 'Delhi', 'Bengaluru'],
    activeSlug: 'ahmedabad-franchise-licensing-circle',
    tagline: 'Franchisors, master franchisees & multi-unit operators.',
    description: 'Franchise brand owners, master licensees, multi-unit retail operators, and brand licensing strategists accelerating regional FOCO/FOFO expansions.'
  },
  {
    slug: 'sustainable-esg-business',
    name: 'Sustainable & ESG Business',
    type: 'industry',
    iconName: 'Leaf',
    bgColor: 'bg-[#15803D]', // Forest Green
    activeCities: ['Ahmedabad', 'Gandhinagar', 'Vadodara', 'Pune'],
    activeSlug: 'ahmedabad-sustainable-esg-business-circle',
    tagline: 'Renewable energy founders, EV leaders & ESG promoters.',
    description: 'Renewable energy founders, EV ecosystem leaders, waste management promoters, and ESG compliance heads leading sustainability and green finance.'
  },

  // --- Part 2: Interest-Specific Circles (9) - Exactly Matching Image 3 ---
  {
    slug: 'import-export-global-trade',
    name: 'Import, Export & Global Trade Circles',
    type: 'interest',
    iconName: 'Truck',
    bgColor: 'bg-[#92400E]', // Deep Brown
    activeCities: ['Ahmedabad', 'Mundra', 'Surat', 'Mumbai'],
    activeSlug: 'ahmedabad-import-export-global-trade-circle',
    tagline: 'Merchant exporters, freight forwarders & customs clearing agents.',
    description: 'Merchant exporters, freight forwarders, customs clearing agents, and international trade business heads scaling global container shipments and trade finance.'
  },
  {
    slug: 'startup-founders',
    name: 'Startup Founders Circles',
    type: 'interest',
    iconName: 'Rocket',
    bgColor: 'bg-[#EA580C]', // Bright Orange
    activeCities: ['Ahmedabad', 'Bengaluru', 'Mumbai', 'Pune', 'Delhi', 'Vadodara'],
    activeSlug: 'startup-founders-circle',
    tagline: 'D2C brand creators, tech innovators & funded founders.',
    description: 'D2C brand creators, Tech innovators, seed & Series-A funded startup founders, and venture builders sharing product-market fit, CAC reduction, and equity rounds.'
  },
  {
    slug: 'sme-ipo-goal',
    name: 'SME IPO Goal Circles',
    type: 'interest',
    iconName: 'TrendingUp',
    bgColor: 'bg-[#16A34A]', // Growth Green
    activeCities: ['Ahmedabad', 'Mumbai', 'Surat', 'Rajkot'],
    activeSlug: 'sme-ipo-goal-circle',
    tagline: 'Promoters preparing for NSE Emerge / BSE SME listing.',
    description: 'Promoters preparing for NSE Emerge / BSE SME IPO listing, merchant bankers, and corporate auditors structuring governance, DRHP, and institutional subscriptions.'
  },
  {
    slug: 'investors-circle',
    name: 'Investors Circles',
    type: 'interest',
    iconName: 'Wallet',
    bgColor: 'bg-[#1D4ED8]', // Dark Blue
    activeCities: ['Pune', 'Ahmedabad', 'Mumbai', 'Bengaluru'],
    activeSlug: 'investors-circle',
    tagline: 'Angel investors, family offices & private equity syndicates.',
    description: 'Angel investors, family offices, HNI fund managers, private equity partners, and venture capitalists co-investing in high-conviction growth ventures.'
  },
  {
    slug: 'global-expansion-cross-border',
    name: 'Global Expansion (Cross-Border) Circle',
    type: 'interest',
    iconName: 'Globe',
    bgColor: 'bg-[#0F766E]', // Deep Teal
    activeCities: ['Mumbai', 'Ahmedabad', 'Dubai', 'Singapore', 'Delhi'],
    activeSlug: 'global-expansion-cross-border-circle',
    tagline: 'Companies expanding into Dubai, US, Singapore & UK markets.',
    description: 'Companies expanding into Dubai, US, Singapore, UK, and European markets establishing international holding structures, overseas bank accounts, and local sales teams.'
  },
  {
    slug: 'msme-entrepreneurs',
    name: 'MSME Entrepreneurs Circles',
    type: 'interest',
    iconName: 'Store',
    bgColor: 'bg-[#334155]', // Slate Navy
    activeCities: ['Ahmedabad', 'Rajkot', 'Surat', 'Vadodara', 'Indore'],
    activeSlug: 'msme-entrepreneurs-circle',
    tagline: 'High-growth MSME business promoters scaling revenue.',
    description: 'High-growth micro, small and medium business promoters collaborating on working capital, debt restructuring, OEM contracts, and operational excellence.'
  },
  {
    slug: 'family-business-circles',
    name: 'Family Business Circles',
    type: 'interest',
    iconName: 'Users',
    bgColor: 'bg-[#0284C7]', // Blue
    activeCities: ['Ahmedabad', 'Mumbai', 'Surat', 'Rajkot', 'Kolkata'],
    activeSlug: 'family-business-circles',
    tagline: '2nd & 3rd generation successors & legacy business heads.',
    description: '2nd and 3rd generation family business successors, family governance leads, and legacy business heads navigating leadership transition, family constitutions, and diversification.'
  },
  {
    slug: 'young-entrepreneurs-below-35',
    name: 'Young Entrepreneurs (Below 35) Circles',
    type: 'interest',
    iconName: 'Lightbulb',
    bgColor: 'bg-[#D97706]', // Bright Amber / Gold
    activeCities: ['Ahmedabad', 'Surat', 'Mumbai', 'Bengaluru', 'Pune'],
    activeSlug: 'young-entrepreneurs-below-35-circle',
    tagline: 'Under-35 business founders & next-gen promoters.',
    description: 'Under-35 business founders, young promoters, and next-gen entrepreneurs accelerating venture growth with aggressive digital disruption and mentorship.'
  },
  {
    slug: 'leadership-transformation',
    name: 'Leadership & Transformation Circle',
    type: 'interest',
    iconName: 'Award',
    bgColor: 'bg-[#7C3AED]', // Purple
    activeCities: ['Ahmedabad', 'Mumbai', 'Bengaluru', 'Delhi'],
    activeSlug: 'circle-founders-circle',
    tagline: 'CXOs, executive coaches & corporate governance advisors.',
    description: 'CXOs, executive coaches, organizational transformation heads, and corporate governance advisors fostering high-impact board governance and culture.'
  }
]

export const INDUSTRY_18_CIRCLES = MAIN_18_CIRCLES.filter((c) => c.type === 'industry')
export const INTEREST_18_CIRCLES = MAIN_18_CIRCLES.filter((c) => c.type === 'interest')
