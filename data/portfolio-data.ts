export interface Project {
  id: string;
  slug: string;
  title: string;
  category: "Full-Stack" | "Frontend" | "Mobile & API" | "UI/UX & Design";
  tagline: string;
  description: string;
  featured: boolean;
  image: string;
  client: string;
  duration: string;
  role: string;
  liveUrl?: string;
  githubUrl?: string;
  overview: string;
  challenge: string;
  solution: string;
  keyFeatures: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  gallery: string[];
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  iconName: string;
  shortDescription: string;
  description: string;
  features: string[];
  deliverables: string[];
  timeline: string;
  pricingTier: {
    tierName: string;
    startingAt: string;
    period?: string;
    description: string;
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  type: "Full-Time" | "Contract" | "Lead";
  description: string;
  achievements: string[];
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  honors?: string;
  description: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  coverImage: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
  content: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: number; icon: string; experience: string }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

export const personalInfo = {
  name: "Chaudhry Ghulam Mustafa",
  title: "Chairman & CEO — Master City Housing Scheme",
  tagline: "Building Pakistan's premier master-planned luxury housing scheme with world-class infrastructure, zero load-shedding, and elite community living.",
  shortBio:
    "Visionary leadership dedicated to international urban living, 100% underground electrification, single-pole theme parks, and rapid resident complaint resolution.",
  extendedBio: [
    "Under the visionary leadership of Chaudhry Ghulam Mustafa, Master City Housing Scheme has redefined modern community living in Punjab. Renowned for gold-standard engineering, timely possession, and lavish greenery, Master City sets a new benchmark in urban development.",
    "Our administration is driven by resident-centric excellence: ensuring 24/7 uninterrupted underground electricity with heavy automated backup generators, multi-layered security squads, sparkling RO filtration plants in every sector, and rapid municipal grievance resolution.",
    "With landmark features including the Single-Pole Amusement Theme Park, Dancing Musical Fountains, Grand Jamia Mosque, and international sports arenas, Master City provides both overseas Pakistanis and local families a secure, peaceful haven.",
  ],
  location: "Sialkot Bypass Road, Gujranwala, Punjab, Pakistan",
  email: "complaints@mastercity.com.pk",
  phone: "+92 55 111-627-837",
  availability: "24/7 Resident Support & Command Center Active",
  statusBadge: "Verified Master City Portal",
  resumeUrl: "/master-city-brochure.pdf",
  socials: {
    github: "https://facebook.com/mastercityofficial",
    linkedin: "https://linkedin.com/company/mastercity",
    twitter: "https://twitter.com/mastercitypk",
    dribbble: "https://instagram.com/mastercityofficial",
  },
  stats: [
    { label: "Happy Resident Families", value: "18,500+" },
    { label: "Grievance Resolution SLA", value: "99.4%" },
    { label: "Underground Power Uptime", value: "100%" },
    { label: "24/7 CCTV & Guards", value: "450+" },
  ],
};

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    description: "Crafting fluid, accessible, high-converting interfaces.",
    skills: [
      { name: "React 18 / 19", level: 98, icon: "Code2", experience: "8 yrs" },
      { name: "Next.js (App Router)", level: 96, icon: "Layers", experience: "5 yrs" },
      { name: "TypeScript", level: 95, icon: "FileCode2", experience: "6 yrs" },
      { name: "Tailwind CSS", level: 95, icon: "Palette", experience: "5 yrs" },
      { name: "State Management (Zustand/Redux)", level: 90, icon: "Cpu", experience: "7 yrs" },
      { name: "Web Accessibility (WCAG)", level: 92, icon: "Sparkles", experience: "6 yrs" },
    ],
  },
  {
    title: "Backend & Systems",
    description: "Building resilient microservices, APIs, and scalable backends.",
    skills: [
      { name: "Node.js & Express", level: 92, icon: "Server", experience: "7 yrs" },
      { name: "PostgreSQL & Prisma / Drizzle", level: 90, icon: "Database", experience: "6 yrs" },
      { name: "REST & GraphQL APIs", level: 94, icon: "Globe", experience: "7 yrs" },
      { name: "Redis & Caching", level: 88, icon: "Zap", experience: "5 yrs" },
      { name: "Go / Golang", level: 82, icon: "Terminal", experience: "3 yrs" },
      { name: "Authentication (Auth.js / Supabase)", level: 94, icon: "ShieldCheck", experience: "5 yrs" },
    ],
  },
  {
    title: "Cloud & DevOps",
    description: "Automated pipelines, containerization, and zero-downtime deployments.",
    skills: [
      { name: "Vercel & Edge Runtime", level: 96, icon: "Cloud", experience: "5 yrs" },
      { name: "AWS (S3, Lambda, ECS, RDS)", level: 86, icon: "ServerCog", experience: "5 yrs" },
      { name: "Docker & Containerization", level: 88, icon: "Boxes", experience: "5 yrs" },
      { name: "CI/CD (GitHub Actions)", level: 90, icon: "GitBranch", experience: "6 yrs" },
      { name: "Infrastructure as Code (Terraform)", level: 78, icon: "Workflow", experience: "3 yrs" },
    ],
  },
  {
    title: "Design & Product Architecture",
    description: "Bridging business strategy, UX research, and technical feasibility.",
    skills: [
      { name: "Figma & Design Systems", level: 90, icon: "LayoutGrid", experience: "6 yrs" },
      { name: "Wireframing & Prototyping", level: 88, icon: "Eye", experience: "7 yrs" },
      { name: "Performance Optimization", level: 96, icon: "Gauge", experience: "8 yrs" },
      { name: "SEO & Web Vitals", level: 94, icon: "Search", experience: "7 yrs" },
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: "nexus-analytics",
    slug: "nexus-analytics-saas",
    title: "Nexus Analytics — AI-Powered Revenue Platform",
    category: "Full-Stack",
    tagline: "Real-time financial telemetry dashboard serving 250k+ daily events.",
    description:
      "An end-to-end B2B SaaS platform that unifies multi-channel Stripe, PayPal, and crypto payments into predictive ARR forecasting dashboards.",
    featured: true,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    client: "Nexus Cloud Corp",
    duration: "4 Months",
    role: "Lead Full-Stack Architect",
    liveUrl: "https://example.com/demo/nexus",
    githubUrl: "https://github.com/example/nexus-analytics",
    overview:
      "Nexus Analytics is an enterprise-grade analytics dashboard that translates complex financial data into interactive charts and automated quarterly reporting. The application ingests millions of events weekly with sub-50ms query times.",
    challenge:
      "The client struggled with heavy dashboard render lags when processing high-volume transactional histories and lacked real-time websocket synchronization across enterprise team members.",
    solution:
      "Architected an event-driven Next.js App Router application with Server Components, Redis caching tiers, and optimized SQL aggregations on PostgreSQL with Prisma ORM. Implemented optimistic UI updates and virtualized data grids.",
    keyFeatures: [
      "Sub-millisecond query aggregation with Redis cache invalidation",
      "Interactive data visualizations powered by Lucide & Tailwind CSS",
      "Multi-tenant role-based access control (RBAC)",
      "Automated PDF executive report generation via Edge Functions",
    ],
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Redis", "Vercel"],
    metrics: [
      { label: "Dashboard Load Speed", value: "<450ms" },
      { label: "Daily Transactions Processed", value: "250K+" },
      { label: "ARR Tracked", value: "$42M+" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "strata-e-commerce",
    slug: "strata-headless-ecommerce",
    title: "Strata — Headless Luxury E-Commerce Experience",
    category: "Frontend",
    tagline: "Sub-second page navigations with 99.8% Core Web Vitals score.",
    description:
      "A modern headless storefront for a global luxury apparel brand engineered with Next.js, Algolia instant search, and Shopify Storefront GraphQL.",
    featured: true,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    client: "Strata Atelier",
    duration: "3 Months",
    role: "Senior Frontend Engineer",
    liveUrl: "https://example.com/demo/strata",
    githubUrl: "https://github.com/example/strata-store",
    overview:
      "Strata Atelier sought a custom headless digital flagship store to replace an outdated monolithic shop, elevating customer conversion and brand storytelling across desktop and mobile devices.",
    challenge:
      "High bounce rates due to 4+ second mobile page load times and fragmented international currency/tax checkout workflows.",
    solution:
      "Delivered an ISR (Incremental Static Regeneration) storefront utilizing Next.js, tailored micro-animations, instant typeahead search, and seamless localized multi-currency checkout.",
    keyFeatures: [
      "Instant faceted search with Algolia integration",
      "Fluid micro-interactions and touch-optimized gallery carousels",
      "Global CDN image optimization with WebP/AVIF formats",
      "Integrated dynamic currency selector supporting 32 currencies",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Shopify API", "GraphQL", "Zustand"],
    metrics: [
      { label: "Conversion Rate Uplift", value: "+38%" },
      { label: "Lighthouse Performance", value: "99/100" },
      { label: "Bounce Rate Reduction", value: "-24%" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "pulse-health-portal",
    slug: "pulse-telehealth-platform",
    title: "Pulse Health — HIPAA-Compliant Telehealth Suite",
    category: "Full-Stack",
    tagline: "Encrypted patient portal and real-time WebRTC consultation platform.",
    description:
      "Secure medical communication system connecting licensed clinicians with over 80,000 active patients across 14 health networks.",
    featured: true,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    client: "Pulse Medical Systems",
    duration: "6 Months",
    role: "Staff Engineer & Security Lead",
    liveUrl: "https://example.com/demo/pulse",
    githubUrl: "https://github.com/example/pulse-health",
    overview:
      "Pulse Telehealth is an end-to-end clinical workflow system providing video consultations, digital prescription distribution, and end-to-end encrypted medical record exchange.",
    challenge:
      "Strict HIPAA compliance requirements, biometric audit logging, and low-latency video streaming in rural or low-bandwidth environments.",
    solution:
      "Implemented zero-trust authentication, WebRTC with dynamic bitrate adaptation, encrypted Postgres column-level storage, and audit logs with tamper-evident checksums.",
    keyFeatures: [
      "Peer-to-peer encrypted HD video calls with fallback relays",
      "Automated e-prescription dispatch with pharmacy status updates",
      "Patient digital check-in queue with SMS notifications",
      "Full HIPAA, SOC-2 Type II audit readiness",
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "WebRTC", "PostgreSQL", "Docker", "AWS"],
    metrics: [
      { label: "Active Consultations", value: "80,000+" },
      { label: "Video Uptime", value: "99.98%" },
      { label: "Patient Satisfaction", value: "4.9 / 5" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "zenith-design-system",
    slug: "zenith-enterprise-design-system",
    title: "Zenith — Enterprise Component Design System",
    category: "UI/UX & Design",
    tagline: "Cross-platform tokenized design system adopted by 12 engineering squads.",
    description:
      "A complete React + Tailwind component library with automated documentation, accessibility test suites, and unified Figma UI kits.",
    featured: false,
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    client: "Zenith Tech Global",
    duration: "5 Months",
    role: "Principal Design Systems Engineer",
    liveUrl: "https://example.com/demo/zenith",
    githubUrl: "https://github.com/example/zenith-system",
    overview:
      "Zenith serves as the single source of visual and code truth for over 40 enterprise cloud services, maintaining visual consistency and accessibility compliance.",
    challenge:
      "Design debt, inconsistent styling between teams, and high engineering hours spent reinventing common modal, data table, and form components.",
    solution:
      "Built a WCAG AAA compliant, tokenized component library with automated Figma-to-code synchronizations, Storybook live interactive previews, and npm versioning.",
    keyFeatures: [
      "65+ accessible, responsive UI components",
      "Semantic color tokens with seamless dark/light modes",
      "Automated axe-core accessibility regression testing",
      "Interactive documentation with live interactive props playground",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Radix UI", "Jest"],
    metrics: [
      { label: "Squad Adoption", value: "12 Teams" },
      { label: "Dev Velocity Increase", value: "+45%" },
      { label: "Accessibility Score", value: "100% WCAG" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "orbit-ai-copilot",
    slug: "orbit-developer-ai-copilot",
    title: "Orbit — Developer Workflow AI Assistant",
    category: "Mobile & API",
    tagline: "Context-aware CLI and dashboard pairing for automated code migrations.",
    description:
      "Developer productivity tool utilizing LLM embeddings to automate repetitive refactoring and generate comprehensive test suites.",
    featured: false,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    client: "Orbit Systems",
    duration: "3 Months",
    role: "Full-Stack & AI Engineer",
    liveUrl: "https://example.com/demo/orbit",
    githubUrl: "https://github.com/example/orbit-copilot",
    overview:
      "Orbit connects directly to local repositories and team Git providers, automatically producing pull requests for TypeScript type updates and security patch bumps.",
    challenge:
      "Managing massive code context windows without blowing rate limits and ensuring zero code hallucination in mission-critical applications.",
    solution:
      "Created an AST (Abstract Syntax Tree) validator layer that verifies AI-generated code against the existing test suite before saving changes.",
    keyFeatures: [
      "Automated AST verification preventing breaking syntax",
      "Streaming SSE (Server-Sent Events) live refactoring progress",
      "GitHub App integration with auto-reviewer comments",
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS", "OpenAI API", "Docker"],
    metrics: [
      { label: "Refactor Time Saved", value: "65%" },
      { label: "PR Acceptance Rate", value: "91%" },
      { label: "Active Devs", value: "14,000+" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];

export const servicesData: Service[] = [
  {
    id: "full-stack-web-apps",
    slug: "full-stack-web-applications",
    title: "Full-Stack Web Applications",
    iconName: "Layers",
    shortDescription: "End-to-end production web applications engineered for speed, security, and scalability.",
    description:
      "Complete development from database architecture to client-side interactivity. Ideal for SaaS platforms, dashboards, and internal business tools.",
    features: [
      "Next.js App Router architecture with Server Components",
      "PostgreSQL or MongoDB database design and ORM setup",
      "Enterprise authentication (OAuth, multi-factor, RBAC)",
      "RESTful and GraphQL API design with OpenAPI specs",
      "Comprehensive unit and integration testing suite",
    ],
    deliverables: [
      "Fully functional production codebase",
      "Automated CI/CD pipeline",
      "Architecture documentation & API reference",
      "30-day post-launch support and warranty",
    ],
    timeline: "4 to 8 Weeks",
    pricingTier: {
      tierName: "Custom Web Application",
      startingAt: "$6,500",
      description: "Comprehensive end-to-end application tailored to your business needs.",
    },
  },
  {
    id: "frontend-design-systems",
    slug: "frontend-development-design-systems",
    title: "Modern Frontend & Design Systems",
    iconName: "Palette",
    shortDescription: "High-fidelity, accessible UI component systems built with React, TypeScript, and Tailwind CSS.",
    description:
      "Transform your Figma prototypes into blazing fast, pixel-perfect frontend experiences with 100% Core Web Vitals compliance.",
    features: [
      "WCAG 2.1 AA/AAA accessibility compliance",
      "Responsive across all desktop, tablet, and mobile breakpoints",
      "Micro-animations and fluid gesture interactions",
      "Theme support with light, dark, and brand tokens",
      "Reusable component library with Storybook or living style guide",
    ],
    deliverables: [
      "Modular TypeScript component library",
      "Tailwind configuration & design tokens",
      "Storybook documentation",
      "Lighthouse performance audit report (>95+)",
    ],
    timeline: "2 to 4 Weeks",
    pricingTier: {
      tierName: "Design System & Frontend",
      startingAt: "$4,200",
      description: "Pixel-perfect implementation with responsive layouts and fluid interactions.",
    },
  },
  {
    id: "mvp-saas-architecture",
    slug: "mvp-architecture-rapid-launch",
    title: "MVP Development & Rapid Launch",
    iconName: "Rocket",
    shortDescription: "Turn startup ideas into validated, market-ready products in record time.",
    description:
      "Rapidly build lean, reliable minimum viable products designed to test product-market fit and impress early adopters and angel investors.",
    features: [
      "Lean scope definition and rapid wireframing",
      "Stripe payment integration with recurring subscriptions",
      "User authentication, onboarding flows, and analytics tracking",
      "Cloud hosting on Vercel or AWS with zero-maintenance setup",
      "SEO setup for organic discovery from day one",
    ],
    deliverables: [
      "Complete MVP ready for public users",
      "Stripe customer portal and webhook integration",
      "Domain and SSL configuration",
      "Handover training and walkthrough recording",
    ],
    timeline: "3 to 5 Weeks",
    pricingTier: {
      tierName: "Startup MVP Sprint",
      startingAt: "$5,500",
      description: "Everything you need to launch your product to market and acquire paying users.",
    },
  },
  {
    id: "performance-seo-audit",
    slug: "performance-optimization-seo",
    title: "Codebase Audit & Speed Optimization",
    iconName: "Gauge",
    shortDescription: "Supercharge page load times, slash bounce rates, and rank higher on Google.",
    description:
      "Deep-dive technical audits identifying performance bottlenecks, bundle bloat, rendering churn, and technical SEO shortfalls.",
    features: [
      "Next.js Bundle analysis and code-splitting refactoring",
      "Core Web Vitals remediation (LCP, INP, CLS)",
      "Database query profiling and cache layer introduction",
      "Automated structured data (Schema.org JSON-LD)",
      "Accessibility and security vulnerability sweeps",
    ],
    deliverables: [
      "Detailed before-and-after benchmark report",
      "Pull requests with optimized code and refactored assets",
      "Custom monitoring dashboard setup",
    ],
    timeline: "1 to 2 Weeks",
    pricingTier: {
      tierName: "Performance Sprint",
      startingAt: "$2,800",
      description: "Immediate performance improvements and search visibility enhancements.",
    },
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Staff Full-Stack Engineer",
    company: "Vanguard Cloud Technologies",
    location: "San Francisco, CA (Hybrid)",
    period: "2023 — Present",
    type: "Lead",
    description:
      "Direct technical architecture for the primary developer experience portal, leading a distributed team of 8 engineers across frontend and platform infrastructure.",
    achievements: [
      "Decreased average dashboard initial load time from 3.2s to 0.4s by migrating legacy SPA to Next.js App Router.",
      "Introduced shared design tokens library saving an estimated 120 engineering hours per quarter.",
      "Mentored 6 junior and mid-level developers through promotion cycles.",
    ],
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "AWS ECS", "Docker"],
  },
  {
    id: "exp-2",
    role: "Senior Full-Stack Developer",
    company: "Apex Media Labs",
    location: "New York, NY (Remote)",
    period: "2020 — 2023",
    type: "Full-Time",
    description:
      "Architected customer-facing publishing platforms and high-throughput content management engines for tier-one media publications.",
    achievements: [
      "Engineered real-time collaboration editor supporting over 150 concurrent writers with Operational Transformation.",
      "Constructed automated image delivery pipeline reducing CDN bandwidth costs by $4,000 monthly.",
      "Achieved 99.99% uptime across Black Friday traffic spikes handling 18,000 requests per second.",
    ],
    skills: ["React", "TypeScript", "GraphQL", "Redis", "Docker", "Jest", "Tailwind CSS"],
  },
  {
    id: "exp-3",
    role: "Frontend Engineer & UI Designer",
    company: "Helix Digital Studio",
    location: "Austin, TX",
    period: "2018 — 2020",
    type: "Full-Time",
    description:
      "Designed and coded responsive client websites, e-commerce storefronts, and brand identities for emerging tech startups.",
    achievements: [
      "Delivered 14 bespoke web projects on time and on budget with 100% 5-star client reviews.",
      "Pioneered the studio's transition from CSS-in-JS to Tailwind CSS, boosting styling iteration velocity by 40%.",
    ],
    skills: ["React", "JavaScript", "CSS3/SCSS", "Figma", "REST APIs", "Git"],
  },
];

export const educationData: EducationItem[] = [
  {
    id: "edu-1",
    degree: "B.S. in Computer Science & Software Engineering",
    institution: "University of California, Berkeley",
    location: "Berkeley, CA",
    period: "2014 — 2018",
    honors: "Magna Cum Laude (GPA 3.85 / 4.0)",
    description:
      "Focused on Algorithms, Distributed Systems, Database Management, and Human-Computer Interaction (HCI). President of Web Development Club.",
  },
  {
    id: "edu-2",
    degree: "Certified Cloud Solutions Architect (Professional)",
    institution: "Amazon Web Services (AWS)",
    location: "Online / Verified",
    period: "2022",
    description:
      "Comprehensive certification covering fault-tolerant cloud architecture, microservices, secure VPC setups, and multi-region high availability.",
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    name: "Sarah Jenkins",
    role: "Chief Technology Officer",
    company: "Nexus Cloud Corp",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    quote:
      "Alex is that rare 1% engineer who possesses both world-class technical architecture depth and an instinctive eye for high-end design. He shipped our flagship product ahead of schedule and with virtually zero post-release defects.",
    rating: 5,
  },
  {
    id: "test-2",
    name: "Marcus Sterling",
    role: "Founder & CEO",
    company: "Strata Atelier",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    quote:
      "Our conversion rate jumped 38% within the first two weeks of launching our new storefront designed and built by Alex. He is responsive, proactive, and treats your product as if it were his own company.",
    rating: 5,
  },
  {
    id: "test-3",
    name: "Elena Rostova",
    role: "VP of Product",
    company: "Pulse Health",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    quote:
      "Navigating HIPAA regulations while delivering a sleek consumer-grade telemedicine UI was a monumental task. Alex handled every challenge with grace, clear communication, and incredible speed.",
    rating: 5,
  },
];

export const blogPostsData: BlogPost[] = [
  {
    slug: "building-production-ready-nextjs-14-apps",
    title: "Mastering Next.js App Router: Best Practices for High-Performance Web Apps",
    excerpt:
      "A deep dive into Server Components, streaming with Suspense, granular caching strategies, and optimizing data fetching in Next.js.",
    date: "May 14, 2024",
    readTime: "7 min read",
    category: "Architecture",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Alex Vance",
      role: "Senior Full-Stack Engineer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
    tags: ["Next.js", "React", "Performance", "Web Architecture"],
    content: [
      "The Next.js App Router fundamentally shifts how modern web applications manage data flow, client-server boundaries, and component rendering. Instead of sending megabytes of client-side JavaScript, Server Components execute entirely on the server, streaming lightweight HTML directly to the browser.",
      "In this guide, we explore the mental model necessary to build resilient, blazingly fast web applications that score 99+ on Core Web Vitals while maintaining an enjoyable developer experience.",
      "1. Understanding the Server vs. Client Boundary: Always default to Server Components unless you require browser hooks (useState, useEffect) or interactive event listeners. This drastically reduces the JavaScript bundle downloaded by end users.",
      "2. Intelligent Caching with the Fetch API: Next.js provides granular caching controls with revalidate tags and time-based cache revalidation, allowing dynamic content to feel as instantaneous as static assets.",
      "3. Streaming & Suspense: Never let slow database queries block the entire page render. By wrapping slow sections in React Suspense boundaries, your user sees instant navigation feedback and meaningful layout immediately.",
      "Adopting these patterns transformed our client projects from typical 3-second loads down to sub-400ms instantaneous page transitions.",
    ],
  },
  {
    slug: "scalable-design-systems-with-tailwind-css",
    title: "Crafting Scalable Design Systems with Tailwind CSS & TypeScript",
    excerpt:
      "How to build a consistent, accessible component library that engineering and design teams will actually love using.",
    date: "April 28, 2024",
    readTime: "6 min read",
    category: "Design Systems",
    coverImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Alex Vance",
      role: "Senior Full-Stack Engineer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
    tags: ["Tailwind CSS", "Design Systems", "TypeScript", "UI/UX"],
    content: [
      "Design systems are often either overly rigid or too fragmented to survive cross-team adoption. When engineered correctly with Tailwind CSS and TypeScript, a design system becomes an accelerator rather than a bottleneck.",
      "The secret lies in tokenization: mapping your typography, color scales, elevations, and spacing into semantic CSS variables that adapt effortlessly to light and dark themes.",
      "Combining utility classes with compound component variants using libraries like clsx and tailwind-merge enables engineers to compose complex UI states without class naming collisions.",
      "Furthermore, integrating automated accessibility audits with axe-core ensures that your components remain accessible to all users before code ever reaches production.",
    ],
  },
  {
    slug: "zero-to-production-vercel-deployment-guide",
    title: "Zero to Production: Deploying Next.js on Vercel with Custom Domains & Edge Middleware",
    excerpt:
      "A step-by-step blueprint for configuring Vercel edge functions, environment secrets, custom domains, and automated preview branches.",
    date: "March 18, 2024",
    readTime: "5 min read",
    category: "DevOps",
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Alex Vance",
      role: "Senior Full-Stack Engineer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
    tags: ["Vercel", "DevOps", "Edge Functions", "Deployment"],
    content: [
      "Vercel represents the gold standard for deploying Next.js applications, offering zero-configuration deployments, edge caching, and atomic preview environments on every Git push.",
      "However, achieving an enterprise-grade production setup requires thoughtful configuration of edge middleware, environment variable separation, and security headers.",
      "In this tutorial, we examine how to configure preview branches for pull requests, set up custom DNS with zero downtime, configure automatic SSL certificates, and protect sensitive API endpoints with Edge Middleware authentication.",
    ],
  },
];

export const faqData = [
  {
    question: "What is your typical project engagement model?",
    answer:
      "I work on both fixed-scope milestone projects (e.g. building an MVP or redesigning a core web app) and dedicated weekly advisory/retainer agreements. We kick off with a discovery sprint to define architecture, deliverables, and exact timelines before writing a single line of code.",
  },
  {
    question: "How do you handle project management and communication?",
    answer:
      "Transparency is paramount. I provide asynchronous weekly video updates via Loom, continuous Git commits with preview deployments on Vercel, and a dedicated Slack or Discord channel for daily communication.",
  },
  {
    question: "Are your projects ready for deployment on Vercel or cloud providers?",
    answer:
      "Yes. Every project is packaged with production build scripts, strict TypeScript validation, environment variable templates (.env.example), automated SEO metadata, and Vercel zero-config readiness.",
  },
  {
    question: "Can you work with our existing design team or Figma files?",
    answer:
      "Absolutely. I regularly collaborate with product designers and specialize in translating Figma designs into exact, accessible code with responsive layouts and subtle micro-interactions.",
  },
];

export const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "Complaints Portal", href: "/complaints" },
  { name: "Resident Reviews", href: "/reviews" },
  { name: "Amenities & Parks", href: "/services" },
  { name: "Sectors & Plots", href: "/portfolio" },
  { name: "About CEO & Society", href: "/about" },
  { name: "Contact & Desk", href: "/contact" },
];
