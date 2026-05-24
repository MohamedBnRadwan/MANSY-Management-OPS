import {
  BarChart3,
  Building2,
  CircleDollarSign,
  ClipboardCheck,
  Compass,
  Handshake,
  LineChart,
  MapPin,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Store,
  Target,
  Users,
  Wrench,
} from "lucide-react";

export type IconName =
  | "barChart"
  | "building"
  | "dollar"
  | "clipboard"
  | "compass"
  | "handshake"
  | "lineChart"
  | "mapPin"
  | "message"
  | "shield"
  | "sparkles"
  | "store"
  | "target"
  | "users"
  | "wrench";

export const iconMap = {
  barChart: BarChart3,
  building: Building2,
  dollar: CircleDollarSign,
  clipboard: ClipboardCheck,
  compass: Compass,
  handshake: Handshake,
  lineChart: LineChart,
  mapPin: MapPin,
  message: MessageSquare,
  shield: ShieldCheck,
  sparkles: Sparkles,
  store: Store,
  target: Target,
  users: Users,
  wrench: Wrench,
};

export type PageContent = {
  label: string;
  slug: string;
  title: string;
  h1: string;
  intro: string;
  image: string;
  imageAlt: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  metaTitle: string;
  metaDescription: string;
};

export const imageAssets = [
  {
    file: "home-hero-modern-commercial-building.jpg",
    page: "Home",
    queries: [
      "modern commercial building night architecture",
      "premium office building exterior glass navy",
      "luxury mixed use commercial building dusk",
    ],
  },
  {
    file: "about-premium-property-management.jpg",
    page: "About",
    queries: [
      "modern office building glass facade professional",
      "executive commercial real estate building",
      "clean architectural property management",
    ],
  },
  {
    file: "services-overview-commercial-lobby.jpg",
    page: "Services",
    queries: [
      "premium commercial lobby clean architecture",
      "modern office lobby marble glass",
      "professional building interior minimal",
    ],
  },
  {
    file: "tenant-mix-retail-community.jpg",
    page: "Tenant Mix Strategy",
    queries: [
      "premium retail plaza mixed use development",
      "modern retail street commercial tenants",
      "open air retail center architecture",
    ],
  },
  {
    file: "leasing-management-retail-frontage.jpg",
    page: "Leasing Management",
    queries: [
      "modern retail storefront glass evening",
      "commercial leasing retail space exterior",
      "premium shopping street architecture",
    ],
  },
  {
    file: "asset-performance-office-building-night.jpg",
    page: "Asset Performance",
    queries: [
      "office building night lights performance",
      "commercial building exterior dusk glass",
      "modern corporate building evening",
    ],
  },
  {
    file: "method-architecture-detail.jpg",
    page: "The Mansy Method",
    queries: [
      "architectural detail glass facade minimal",
      "modern building geometric lines",
      "commercial architecture close up clean",
    ],
  },
  {
    file: "who-we-serve-mixed-use-development.jpg",
    page: "Who We Serve",
    queries: [
      "mixed use development retail offices",
      "commercial residential plaza modern",
      "urban mixed use project premium",
    ],
  },
  {
    file: "property-types-commercial-assets.jpg",
    page: "Property Types",
    queries: [
      "commercial strips retail units office spaces",
      "modern retail office building collage",
      "mixed commercial property architecture",
    ],
  },
  {
    file: "insights-leasing-strategy-desk.jpg",
    page: "Insights",
    queries: [
      "commercial real estate strategy meeting",
      "property management analytics dashboard",
      "leasing strategy business meeting architecture",
    ],
  },
  {
    file: "contact-premium-office-lobby.jpg",
    page: "Contact",
    queries: [
      "premium office reception lobby",
      "modern building reception desk marble",
      "professional commercial lobby clean",
    ],
  },
  {
    file: "who-we-serve-commercial-building-owners.jpg",
    page: "Who We Serve Card",
    queries: [
      "commercial office tower owner property exterior",
      "premium commercial building facade daylight",
      "institutional commercial real estate exterior",
    ],
  },
  {
    file: "who-we-serve-administrative-building-owners.jpg",
    page: "Who We Serve Card",
    queries: [
      "administrative office building professional exterior",
      "corporate office block architecture clean lines",
      "business district office facade premium",
    ],
  },
  {
    file: "who-we-serve-real-estate-developers.jpg",
    page: "Who We Serve Card",
    queries: [
      "real estate development site planning meeting",
      "developer reviewing commercial project model",
      "commercial development planning desk architecture",
    ],
  },
  {
    file: "who-we-serve-retail-strip-owners.jpg",
    page: "Who We Serve Card",
    queries: [
      "modern retail strip center exterior",
      "community retail plaza storefronts daylight",
      "open air retail strip architecture premium",
    ],
  },
  {
    file: "who-we-serve-office-building-owners.jpg",
    page: "Who We Serve Card",
    queries: [
      "premium office tower glass exterior",
      "modern business center facade urban",
      "corporate office property architecture evening",
    ],
  },
  {
    file: "who-we-serve-mixed-use-project-owners.jpg",
    page: "Who We Serve Card",
    queries: [
      "mixed use development retail offices public realm",
      "urban mixed use complex premium architecture",
      "modern mixed use plaza exterior",
    ],
  },
  {
    file: "who-we-serve-asset-investors.jpg",
    page: "Who We Serve Card",
    queries: [
      "commercial real estate investor meeting premium",
      "asset investment strategy documents office",
      "property investment boardroom professional",
    ],
  },
  {
    file: "who-we-serve-facility-management-companies.jpg",
    page: "Who We Serve Card",
    queries: [
      "facility management team building operations",
      "commercial property operations inspection professional",
      "building maintenance management commercial interior",
    ],
  },
  {
    file: "who-we-serve-underperforming-assets.jpg",
    page: "Who We Serve Card",
    queries: [
      "older commercial property needing repositioning",
      "vacant commercial units exterior urban",
      "underperforming retail building redevelopment potential",
    ],
  },
];

export const pages = {
  home: {
    label: "Home",
    slug: "/",
    title: "Mansy Management Ops.",
    h1: "Your Building Is Not Just Real Estate.",
    intro:
      "It is a living commercial system. Mansy Management Ops. helps owners and developers position, lease, manage, and optimize their assets with strategy, structure, and measurable performance.",
    image: "/assets/images/home-hero-modern-commercial-building.jpg",
    imageAlt: "Modern premium commercial building at dusk.",
    primaryKeyword: "property management company",
    secondaryKeywords: [
      "commercial property management",
      "leasing strategy company",
      "asset performance",
      "tenant mix strategy",
    ],
    metaTitle: "Mansy Management Ops.",
    metaDescription:
      "Property management and leasing strategy for commercial, administrative, retail, and mixed-use assets.",
  },
  about: {
    label: "About",
    slug: "/about",
    title: "About Mansy Management Ops.",
    h1: "We Build Performing Assets.",
    intro:
      "Mansy Management Ops. is a property management and leasing strategy company focused on commercial, administrative, retail, and mixed-use properties. We help owners and developers improve how their assets are positioned, leased, managed, and optimized.",
    image: "/assets/images/about-premium-property-management.jpg",
    imageAlt: "Clean modern commercial building facade.",
    primaryKeyword: "Mansy Management Ops",
    secondaryKeywords: [
      "property management and leasing strategy",
      "commercial asset management",
      "performance driven property management",
    ],
    metaTitle: "About Mansy Management Ops.",
    metaDescription:
      "Learn how Mansy Management Ops. helps owners position, lease, manage, and optimize performing assets.",
  },
  services: {
    label: "Services",
    slug: "/services",
    title: "Services",
    h1: "We Control the Cycle. You See the Results.",
    intro:
      "Every tenant, vacancy, operation, and leasing decision affects long-term value. Our services bring structure to the full asset cycle, from tenant mix to leasing management and performance improvement.",
    image: "/assets/images/services-overview-commercial-lobby.jpg",
    imageAlt: "Premium commercial lobby with clean architectural details.",
    primaryKeyword: "property management services",
    secondaryKeywords: [
      "tenant mix strategy",
      "leasing management",
      "asset performance",
      "commercial leasing strategy",
    ],
    metaTitle: "Services",
    metaDescription:
      "Explore Mansy Management Ops. services for tenant mix, leasing management, and asset performance.",
  },
  method: {
    label: "Method",
    slug: "/method",
    title: "The Mansy Method",
    h1: "Analyze. Position. Lease. Manage. Optimize.",
    intro:
      "The Mansy Method turns property into a managed asset, not just rented space. We study the asset and market, define its role, target the right tenants, manage operations, and improve performance over time.",
    image: "/assets/images/method-architecture-detail.jpg",
    imageAlt: "Minimal architectural detail of a modern glass facade.",
    primaryKeyword: "property management method",
    secondaryKeywords: [
      "analyze position lease manage optimize",
      "leasing cycle",
      "managed asset strategy",
    ],
    metaTitle: "The Mansy Method",
    metaDescription:
      "See how Mansy Management Ops. analyzes, positions, leases, manages, and optimizes assets.",
  },
  whoWeServe: {
    label: "Who We Serve",
    slug: "/who-we-serve",
    title: "Who We Serve",
    h1: "Built for Owners Who Care About Performance.",
    intro:
      "We partner with owners and developers who understand that the right management and leasing strategy can transform a property into a high-performing asset.",
    image: "/assets/images/who-we-serve-mixed-use-development.jpg",
    imageAlt: "Modern mixed-use development with active public realm.",
    primaryKeyword: "commercial building owners",
    secondaryKeywords: [
      "real estate developers",
      "retail strip owners",
      "office building owners",
      "asset investors",
    ],
    metaTitle: "Who We Serve",
    metaDescription:
      "Built for owners and developers who want stronger assets, better performance, and long-term value.",
  },
  propertyTypes: {
    label: "Property Types",
    slug: "/property-types",
    title: "Property Types We Handle",
    h1: "Every Property Has Potential.",
    intro:
      "Mansy Management Ops. specializes in managing commercial and administrative assets across a wide range of property types, from retail strips and office spaces to mixed-use developments and underperforming buildings.",
    image: "/assets/images/property-types-commercial-assets.jpg",
    imageAlt: "Modern commercial property assets arranged in a premium district.",
    primaryKeyword: "commercial property types",
    secondaryKeywords: [
      "retail units",
      "administrative buildings",
      "mixed-use developments",
      "office spaces",
    ],
    metaTitle: "Property Types",
    metaDescription:
      "Mansy Management Ops. handles commercial strips, retail units, office spaces, and mixed-use assets.",
  },
  insights: {
    label: "Insights",
    slug: "/insights",
    title: "Insights",
    h1: "Leasing Strategy, Tenant Mix, and Asset Performance.",
    intro:
      "Our insights explain how commercial assets perform, why vacancies are often strategy problems, and how tenant mix, positioning, and leasing decisions shape long-term value.",
    image: "/assets/images/insights-leasing-strategy-desk.jpg",
    imageAlt: "Commercial real estate strategy materials on a refined desk.",
    primaryKeyword: "leasing strategy insights",
    secondaryKeywords: [
      "vacancy problems",
      "pricing and positioning",
      "anchor tenant strategy",
      "tenant decision making",
    ],
    metaTitle: "Insights",
    metaDescription:
      "Practical insights on leasing strategy, tenant mix, positioning, vacancy, and asset performance.",
  },
  contact: {
    label: "Contact",
    slug: "/contact",
    title: "Contact Mansy Management Ops.",
    h1: "Let's Discuss Your Asset.",
    intro:
      "If your property needs structure, stronger leasing direction, or better performance, Mansy Management Ops. can help define the next step with clarity and precision.",
    image: "/assets/images/contact-premium-office-lobby.jpg",
    imageAlt: "Premium office reception lobby with clean finishes.",
    primaryKeyword: "property management consultation",
    secondaryKeywords: [
      "leasing strategy consultation",
      "commercial asset consultation",
      "property performance support",
    ],
    metaTitle: "Contact Mansy Management Ops.",
    metaDescription:
      "Speak with Mansy Management Ops. about property management, leasing strategy, and asset performance.",
  },
} satisfies Record<string, PageContent>;

export const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Method", href: "/method" },
  { label: "Who We Serve", href: "/who-we-serve" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const servicePillars = [
  {
    slug: "tenant-mix-strategy",
    eyebrow: "Core Service 01",
    title: "Tenant Mix Strategy",
    h1: "Build the Right Tenant Ecosystem.",
    intro:
      "Tenant mix is not about filling units. It is about choosing the right anchor tenants, supporting brands, and service tenants to strengthen footfall, reputation, retention, and value.",
    image: "/assets/images/tenant-mix-retail-community.jpg",
    imageAlt: "Premium retail plaza with active commercial tenants.",
    primaryKeyword: "tenant mix strategy",
    secondaryKeywords: [
      "anchor tenants",
      "tenant ecosystem",
      "supporting brands",
      "service tenants",
      "commercial tenant mix",
    ],
    metaTitle: "Tenant Mix Strategy",
    metaDescription:
      "Build the right tenant ecosystem with strategy that improves footfall, reputation, retention, and value.",
    promise: "Define the role. Build the mix. Manage the performance.",
    summary:
      "A full building is not always a successful building. The right tenant mix can increase footfall, improve reputation, support stronger rental value, attract better brands, improve retention, and create long-term stability.",
    subServices: [
      {
        id: "asset-positioning",
        title: "Asset Positioning",
        description:
          "Define the property's market identity, role, and commercial story before leasing decisions are made.",
      },
      {
        id: "anchor-tenants",
        title: "Anchor Tenants",
        description:
          "Identify tenants that create movement, credibility, and confidence for the full destination.",
      },
      {
        id: "supporting-brands",
        title: "Supporting Brands",
        description:
          "Shape the right balance of supporting brands so every tenant strengthens the ecosystem.",
      },
      {
        id: "service-tenants",
        title: "Service Tenants",
        description:
          "Plan service tenants that improve daily experience, convenience, and retention.",
      },
    ],
    outcomes: [
      "Increase footfall",
      "Improve reputation",
      "Attract better brands",
      "Strengthen rental value",
      "Create long-term stability",
    ],
    icon: "users" as IconName,
  },
  {
    slug: "leasing-management",
    eyebrow: "Core Service 02",
    title: "Leasing Management",
    h1: "The Right Space. The Right Tenant. The Right Terms.",
    intro:
      "Leasing is not just filling spaces. We structure leasing direction, tenant targeting, outreach, negotiation, and retention around the asset's long-term performance.",
    image: "/assets/images/leasing-management-retail-frontage.jpg",
    imageAlt: "Modern retail frontage in a premium commercial property.",
    primaryKeyword: "leasing management",
    secondaryKeywords: [
      "tenant targeting",
      "lease structuring",
      "deal negotiation",
      "renewal and retention",
      "commercial leasing",
    ],
    metaTitle: "Leasing Management",
    metaDescription:
      "Lease the right space to the right tenant at the right terms with structured leasing management.",
    promise: "We don't just fill spaces. We place the right tenants.",
    summary:
      "Pricing does not fix positioning. Strong leasing management aligns the asset story, tenant targeting, deal structure, and renewal strategy so each decision protects value.",
    subServices: [
      {
        id: "commercial-leasing-strategy",
        title: "Commercial Leasing Strategy",
        description:
          "Build leasing direction and execution around the asset's role, target tenants, and performance goals.",
      },
      {
        id: "positioning-pricing",
        title: "Market Positioning & Pricing Strategy",
        description:
          "Align commercial identity and pricing logic so the offer is clear before negotiations begin.",
      },
      {
        id: "tenant-targeting",
        title: "Tenant Targeting & Outreach",
        description:
          "Attract tenants that fit the asset strategy, customer profile, and long-term commercial plan.",
      },
      {
        id: "deal-negotiation",
        title: "Deal Negotiation",
        description:
          "Manage expectations between owner and tenant so the deal is clearer, smarter, and stronger.",
      },
      {
        id: "lease-structuring",
        title: "Lease Structuring",
        description:
          "Structure terms that protect value, flexibility, and operational clarity.",
      },
      {
        id: "renewal-retention",
        title: "Renewal & Retention",
        description:
          "Build stronger tenant relationships that increase long-term stay and protect asset performance.",
      },
    ],
    outcomes: [
      "Better tenants",
      "Better terms",
      "Better retention",
      "Better value",
      "Sustainable performance",
    ],
    icon: "handshake" as IconName,
  },
  {
    slug: "asset-performance",
    eyebrow: "Core Service 03",
    title: "Asset Performance",
    h1: "Improve Performance. Increase Value.",
    intro:
      "Occupancy is not the goal. Sustainable performance is. We review operations, tenant quality, rental value gaps, retention risks, revenue opportunities, and improvement priorities.",
    image: "/assets/images/asset-performance-office-building-night.jpg",
    imageAlt: "Modern office building at night with warm interior lights.",
    primaryKeyword: "asset performance",
    secondaryKeywords: [
      "performance optimization",
      "occupancy review",
      "rental value gaps",
      "revenue opportunities",
      "asset management",
    ],
    metaTitle: "Asset Performance",
    metaDescription:
      "Improve occupancy, operations, tenant quality, revenue opportunities, and long-term asset value.",
    promise: "A managed asset should improve, not just stay occupied.",
    summary:
      "Asset performance connects management, operations, financial discipline, tenant experience, and practical recommendations to improve results over time.",
    subServices: [
      {
        id: "asset-management",
        title: "Asset Management",
        description:
          "Protect and enhance real estate assets through strategic oversight, risk management, capital planning, value enhancement, and lifecycle planning.",
      },
      {
        id: "property-management",
        title: "Property Management",
        description:
          "Manage relationships, reporting, and operations with clear ownership and consistent follow-through.",
      },
      {
        id: "operations-maintenance",
        title: "Operations & Maintenance",
        description:
          "Keep the property running at its best through proactive care, efficient daily operations, and compliance standards.",
      },
      {
        id: "financial-management",
        title: "Financial Management",
        description:
          "Support smarter decisions through budgeting, rent collection, expense control, reporting, and cash flow management.",
      },
      {
        id: "facility-coordination",
        title: "Facility Coordination",
        description:
          "Coordinate common areas, maintenance requests, security, cleanliness, parking, access flow, and tenant operational needs.",
      },
      {
        id: "performance-optimization",
        title: "Performance Optimization",
        description:
          "Monitor, review, and improve performance through occupancy review, tenant quality assessment, rental value gaps, retention risks, and revenue opportunities.",
      },
      {
        id: "tenant-services",
        title: "Tenant Services",
        description:
          "Create better tenant experiences through communication, support, service request management, retention strategies, and renewal management.",
      },
      {
        id: "occupancy-review",
        title: "Occupancy Review",
        description:
          "Analyze occupancy levels, vacancy reasons, and leasing velocity to identify practical improvement priorities.",
      },
      {
        id: "tenant-quality-assessment",
        title: "Tenant Quality Assessment",
        description:
          "Evaluate tenant mix, business stability, and alignment with the asset.",
      },
      {
        id: "rental-value-gaps",
        title: "Rental Value Gaps",
        description:
          "Identify below-market rents and revenue improvement opportunities.",
      },
      {
        id: "revenue-opportunities",
        title: "Revenue Opportunities",
        description:
          "Uncover upsell potential, service income, and cost saving opportunities.",
      },
    ],
    outcomes: [
      "Higher returns",
      "Lower risks",
      "Happier tenants",
      "Stronger asset value",
      "Continuous improvement",
    ],
    icon: "lineChart" as IconName,
  },
];

export type ServicePillar = (typeof servicePillars)[number];

export const methodSteps = [
  {
    title: "Analyze",
    text: "We study the asset and the market.",
    icon: "barChart" as IconName,
  },
  {
    title: "Position",
    text: "We define the property's role and identity.",
    icon: "mapPin" as IconName,
  },
  {
    title: "Lease",
    text: "We target the right tenants with the right structure.",
    icon: "handshake" as IconName,
  },
  {
    title: "Manage",
    text: "We manage relationships and operations.",
    icon: "users" as IconName,
  },
  {
    title: "Optimize",
    text: "We review and improve performance over time.",
    icon: "lineChart" as IconName,
  },
];

export const audiences = [
  {
    title: "Commercial building owners",
    icon: "building" as IconName,
    description: "Owners seeking sharper positioning, better tenancy, and stronger long-term asset performance.",
  },
  {
    title: "Administrative building owners",
    icon: "clipboard" as IconName,
    description: "Operators who need structured leasing, cleaner management systems, and consistent occupancy quality.",
  },
  {
    title: "Real estate developers",
    icon: "compass" as IconName,
    description: "Development teams preparing assets for launch, market fit, and stronger commercial absorption.",
  },
  {
    title: "Retail strip owners",
    icon: "store" as IconName,
    description: "Retail landlords refining tenant mix, frontage strategy, and customer movement across the property.",
  },
  {
    title: "Office building owners",
    icon: "target" as IconName,
    description: "Owners aligning workspace positioning, lease structure, and value growth across office assets.",
  },
  {
    title: "Mixed-use project owners",
    icon: "sparkles" as IconName,
    description: "Projects that need coordinated leasing, identity, and operational logic across multiple uses.",
  },
  {
    title: "Asset investors",
    icon: "dollar" as IconName,
    description: "Investors focused on clearer reporting, better returns, and measurable commercial improvement.",
  },
  {
    title: "Facility management companies",
    icon: "wrench" as IconName,
    description: "Partners looking to connect day-to-day building operations with leasing and performance outcomes.",
  },
  {
    title: "Owners with underperforming assets",
    icon: "lineChart" as IconName,
    description: "Assets facing vacancy, weak positioning, or revenue gaps that need a practical recovery strategy.",
  },
];

export const propertyTypes = [
  "Commercial strips",
  "Retail units",
  "Administrative buildings",
  "Office spaces",
  "Mixed-use developments",
  "Medical / admin properties",
  "Service zones",
  "Community retail spaces",
  "Underperforming assets",
];

export const insights = [
  {
    title: "Most Vacancies Are Not Vacancy Problems.",
    text: "Wrong tenant targeting, poor positioning, weak pricing logic, and no operational follow-up often create the vacancy issue.",
    tag: "Vacancy",
  },
  {
    title: "Leasing Is Designing Demand.",
    text: "A property needs positioning, tenant targeting, leasing execution, tenant relationship, and performance optimization.",
    tag: "Leasing Cycle",
  },
  {
    title: "Pricing Does Not Fix Positioning.",
    text: "Lower pricing may attract attention, but positioning closes the deal with the right tenant.",
    tag: "Positioning",
  },
  {
    title: "Anchor Tenants Shape the Future.",
    text: "The right anchor tenant can create movement, credibility, and confidence for every tenant that follows.",
    tag: "Tenant Mix",
  },
  {
    title: "The Operator Controls the Deal.",
    text: "Strong operation translates owner goals and tenant needs into clearer offers and stronger negotiations.",
    tag: "Operations",
  },
  {
    title: "Vacancy Is Expensive. Wrong Leasing Is More Expensive.",
    text: "Vacancy must be managed quickly, but never randomly. The goal is to lease right, not simply lease fast.",
    tag: "Asset Value",
  },
];

export const performanceStats = [
  "250+ properties managed",
  "5M+ sq ft under management",
  "95%+ average occupancy achieved",
  "20%+ average NOI improvement",
  "0 compliance surprises",
];
