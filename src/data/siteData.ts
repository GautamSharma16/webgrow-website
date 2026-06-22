// WebGrow Technologies static data

export interface ServiceItem {
  id: string;
  title: string;
  category: 'technology' | 'ai' | 'marketing' | 'branding';
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  process: string[];
  deliverables: string[];
  caseStudy: {
    client: string;
    result: string;
  };
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: 'web' | 'shopify' | 'mobile' | 'seo' | 'ai' | 'saas';
  industry: string;
  problem: string;
  solution: string;
  technologies: string[];
  results: string[];
  roi: string;
  image: string;
  testimonial: {
    text: string;
    author: string;
    role: string;
  };
}

export interface JobOpening {
  id: string;
  title: string;
  department: 'Engineering' | 'Design' | 'Marketing' | 'Management' | 'HR';
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: 'Technology' | 'Web Development' | 'AI' | 'Marketing' | 'SEO' | 'Business Growth' | 'Case Studies' | 'News';
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  summary: string;
  content: string;
  tags: string[];
  comments: Array<{
    id: string;
    author: string;
    date: string;
    text: string;
  }>;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  client: string;
  industry: string;
  metrics: {
    trafficGrowth: number; // percentage
    leadsGenerated: number;
    revenueIncrease: number; // percentage
    conversionRate: number; // percentage
    marketingRoi: string; // e.g. "4.5x"
  };
  chartData: Array<{ name: string; Traffic: number; Leads: number; Revenue: number }>;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  desc: string;
  features: string[];
  isPopular?: boolean;
}

export interface ResourceItem {
  id: string;
  title: string;
  type: 'ebook' | 'guide' | 'template' | 'checklist' | 'whitepaper' | 'report';
  category: string;
  desc: string;
  downloadUrl: string;
  fileSize: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "web-development",
    title: "Custom Website Development",
    category: "technology",
    shortDesc: "High-performance, enterprise-grade websites optimized for search engines, user experience, and conversions.",
    fullDesc: "We build secure, scalable, and responsive custom websites designed to load lightning fast and convert visitors into customers. Leveraging Next.js, React, and modern CMS platforms, we deliver bespoke solutions tailored to your brand identity and business objectives.",
    benefits: [
      "Custom layouts tailored to brand guidelines",
      "Optimized Core Web Vitals for maximum SEO rankings",
      "Seamless responsiveness across desktop, tablet, and mobile",
      "Secure backend architecture preventing data leaks"
    ],
    process: [
      "Discovery & Brand Alignment",
      "High-Fidelity UI/UX Prototyping",
      "Agile Development & Integrations",
      "Thorough Quality Assurance & Cross-Browser Testing",
      "Launch & Post-Deployment Monitoring"
    ],
    deliverables: [
      "Fully responsive codebase (Next.js/React)",
      "Integrated Content Management System",
      "SEO configurations & Schema Markup",
      "Comprehensive admin user training manual"
    ],
    caseStudy: {
      client: "MediCore Healthcare",
      result: "185% increase in online patient bookings within 4 months of launch."
    }
  },
  {
    id: "web-applications",
    title: "Web Applications",
    category: "technology",
    shortDesc: "Scalable and secure web apps designed to streamline business workflows and improve customer engagement.",
    fullDesc: "Our developers create complex, feature-rich web applications with secure backend APIs, robust state management, and real-time features. From custom CRMs to client portals, we build systems that drive operation efficiency.",
    benefits: [
      "High scalability to handle millions of requests",
      "Real-time databases for instantaneous data updates",
      "Intuitive client dashboards for ease of operation",
      "Integration with payment gateways and third-party systems"
    ],
    process: ["Requirements mapping", "Database architecture design", "API design and frontend coupling", "Security audits & pentesting", "Production deployment"],
    deliverables: ["Full-stack web application source code", "Restful / GraphQL API documentation", "Automated deployment pipeline setup", "24/7 monitoring configurations"],
    caseStudy: {
      client: "Apex Logix Solutions",
      result: "Reduced internal workflow latency by 42% through automated task routing."
    }
  },
  {
    id: "enterprise-software",
    title: "Enterprise Software Development",
    category: "technology",
    shortDesc: "Modernizing legacy platforms and creating robust software to scale global business operations.",
    fullDesc: "We architect and build enterprise software solutions designed to integrate smoothly with your existing IT infrastructure. From ERPs and custom financial hubs to secure intranets, we implement modern architectures like microservices to support high concurrency.",
    benefits: [
      "Modular microservices architecture for flexibility",
      "High-level security with multi-factor authentication (MFA)",
      "Zero downtime migrations from legacy software",
      "Multi-tenant infrastructure support"
    ],
    process: ["Legacy analysis", "Enterprise architecture design", "Scrum-based agile execution", "Staged user acceptance testing (UAT)", "Continuous integration deployment"],
    deliverables: ["Deployment ready Docker images", "Database schemas & migration scripts", "Enterprise API SDKs", "SLA contract & maintenance plan"],
    caseStudy: {
      client: "Global Finance Corp",
      result: "Successfully migrated 10M records with zero downtime, boosting transaction throughput by 300%."
    }
  },
  {
    id: "saas-platforms",
    title: "SaaS Platforms",
    category: "technology",
    shortDesc: "End-to-end development of multitenant cloud software with billing, subscription management, and analytics.",
    fullDesc: "We engineer multi-tenant Software-as-a-Service platforms featuring secure user isolation, subscription billing (Stripe/PayPal), metrics reporting, and self-serve onboarding. We help SaaS founders bring stable, market-ready MVPs to fruition rapidly.",
    benefits: [
      "Secure multi-tenant database separation",
      "Dynamic tier-based usage and billing integration",
      "Analytics dashboards detailing churn, MRR, and ARR",
      "Self-service onboarding with wizard walkthroughs"
    ],
    process: ["Product strategy", "UX prototyping", "Multi-tenant database implementation", "Billing integration", "Beta launch & analytics tracking"],
    deliverables: ["Ready-to-launch SaaS platform", "Admin and billing configuration portal", "System status dashboard setup", "Integration with customer success tools (Intercom/HubSpot)"],
    caseStudy: {
      client: "TaskFlow Inc",
      result: "Scaled MVP from 0 to 50,000 monthly active users with 99.99% uptime."
    }
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    category: "technology",
    shortDesc: "Native and cross-platform mobile apps for iOS and Android, keeping users engaged on the go.",
    fullDesc: "Our mobile development division builds sleek, responsive native (Swift/Kotlin) and cross-platform (React Native/Flutter) mobile apps. We prioritize offline accessibility, secure bio-auth, push notifications, and animations.",
    benefits: [
      "Consistent UI/UX across iOS and Android platforms",
      "Offline sync capability using local SQLite databases",
      "Biometric login integration (FaceID & Fingerprint)",
      "Optimized battery and memory usage"
    ],
    process: ["Mobile UX layout", "Cross-platform engineering", "App Store & Play Store guidelines audit", "Beta deployment via TestFlight", "App store submission"],
    deliverables: ["Compiled iOS/Android builds", "App Store assets and listing text", "API integration endpoints", "Push notification backend setup"],
    caseStudy: {
      client: "FitLife Fitness",
      result: "Achieved 4.8★ app store rating with over 100k downloads in the first year."
    }
  },
  {
    id: "shopify-development",
    title: "Shopify Development",
    category: "technology",
    shortDesc: "Bespoke Shopify setups, custom apps, and premium themes designed to maximize average order value.",
    fullDesc: "We construct high-converting e-commerce storefronts on Shopify. From custom Liquid theme customisations to headless Hydrogen/React setups, we build shopping experiences that loading fast and integrate with ERPs/CRMs.",
    benefits: [
      "Fast page loads reducing cart abandonment rates",
      "Tailored upsell and checkout customizations",
      "Seamless synchronization with ERPs, shipping, and inventories",
      "Bespoke private Shopify application development"
    ],
    process: ["E-commerce layout planning", "Liquid or headless frontend construction", "Apps & checkout config", "Payment gateway configurations", "Conversion rate review"],
    deliverables: ["Published Shopify Theme", "Custom app configurations", "Product data feed setups for Google/Meta", "Analytics tracking integration (GA4/Pixel)"],
    caseStudy: {
      client: "Luxe Thread Apparel",
      result: "Increased conversion rates by 34% and grew Average Order Value (AOV) by $14."
    }
  },
  {
    id: "ai-agents",
    title: "AI Agents",
    category: "ai",
    shortDesc: "Autonomously execute multi-step workflows, manage data pipelines, and orchestrate business operations.",
    fullDesc: "We develop custom autonomous AI agents that handle repetitive tasks. Operating on LLMs and RAG framework, these agents interpret unstructured documents, answer vendor emails, process complex logs, and coordinate system actions.",
    benefits: [
      "24/7 operation with zero human fatigue",
      "Context-aware actions utilizing your company knowledgebase",
      "Integrates directly into Slack, email, or CRMs",
      "Huge operational cost reductions"
    ],
    process: ["Workflow mapping", "RAG pipeline setup", "Agent logic and tool definition", "Sandbox testing with human-in-the-loop validation", "Production rollout"],
    deliverables: ["Custom AI agent microservice", "Enterprise vector store integration", "Human escalation dashboard", "Audit logging system"],
    caseStudy: {
      client: "Velo Logistics",
      result: "AI agents auto-routed 84% of incoming vendor queries, reducing manual dispatch work by 160 hours/month."
    }
  },
  {
    id: "ai-chatbots",
    title: "AI Chatbots",
    category: "ai",
    shortDesc: "Smart conversational chatbots resolving over 70% of customer support queries instantly.",
    fullDesc: "We build advanced chatbots that provide human-like customer assistance. Utilizing Retrieval-Augmented Generation (RAG) and cognitive search, they handle support tickets, qualify marketing leads, and guide users through processes.",
    benefits: [
      "Instant response times for support queries",
      "Multi-lingual support across 30+ languages",
      "Seamless hand-off to human support representatives",
      "Pre-trained on your specific documentation"
    ],
    process: ["FAQ database compilation", "Conversational UX flow design", "Integration with customer support platform", "Tuning and alignment", "Live testing"],
    deliverables: ["Web-embedded chatbot widget", "Integration with Zendesk/Intercom", "Chat history dashboard", "Analytics and sentiment reports"],
    caseStudy: {
      client: "Prime Insure",
      result: "Halved client query wait times and resolved 71% of standard tickets autonomously."
    }
  },
  {
    id: "seo",
    title: "Search Engine Optimization (SEO)",
    category: "marketing",
    shortDesc: "Dominate search engine rankings, drive qualified organic traffic, and reduce reliance on paid ads.",
    fullDesc: "Our technical and content SEO services focus on rankings and organic revenue. We implement exhaustive on-page optimizations, technical audits, schematic markup, and link-building strategies to secure high Google rankings.",
    benefits: [
      "Higher rankings for high-intent commercial keywords",
      "Clean site architecture crawlable by search engine bots",
      "High-authority backlink acquisitions",
      "Regular technical audits fixing broken anchors and index issues"
    ],
    process: ["Keyword opportunity research", "Technical site health audit", "Content map formulation", "On-page and schema additions", "Link-building execution"],
    deliverables: ["Keyword strategy mapping", "Monthly ranking & organic traffic reports", "Competitor gap analysis", "Optimized content deliverables"],
    caseStudy: {
      client: "PropNex Realty",
      result: "Boosted organic lead generation by 245% and drove monthly visits from 10k to 95k in 9 months."
    }
  },
  {
    id: "brand-identity",
    title: "Brand Identity & Design",
    category: "branding",
    shortDesc: "Create memorable corporate visual designs, logos, and UI/UX layouts that capture customer trust.",
    fullDesc: "We outline premium brand systems. From corporate logo redesigns to total UX design systems, we build visuals that communicate authority, modern technology, and user-centric design principles.",
    benefits: [
      "Distinctive brand style guidelines ensuring global consistency",
      "Modern vector logos scaleable to any size",
      "Interactive Figma UI component libraries",
      "High-converting visual marketing materials"
    ],
    process: ["Brand discovery workshops", "Moodboard visual iterations", "Logo & typography development", "Design system design", "Asset exports"],
    deliverables: ["Brand Style Guidelines PDF", "Vector logo pack (SVG, EPS, PNG)", "Typography and color tokens", "Figma design system file"],
    caseStudy: {
      client: "AeroTech Aerospace",
      result: "Modernized brand image leading to a successful $14M Series A capital raise."
    }
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: "medicore-portal",
    title: "Next-Gen Patient Care Portal",
    client: "MediCore Healthcare",
    category: "web",
    industry: "Healthcare",
    problem: "MediCore's existing patient booking system was outdated, slow on mobile devices, and suffered from high drop-off rates, causing potential patients to call competitors.",
    solution: "We designed and coded a custom Next.js patient booking portal with instant schedule sync, server-side page loads for doctor profiles, and compliance with medical privacy parameters.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"],
    results: [
      "185% increase in online patient bookings",
      "Page load speed improved by 3.2 seconds",
      "Mobile checkout completion rate increased from 28% to 64%"
    ],
    roi: "340% ROI in year one",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80",
    testimonial: {
      text: "WebGrow redesigned our patient interface, bringing us into the modern era. Our conversion rates speak for themselves. The team was agile, professional, and incredibly skilled.",
      author: "Dr. Sarah Henderson",
      role: "Chief Medical Officer, MediCore"
    }
  },
  {
    id: "apex-logistics",
    title: "AI-Driven Logistics Routing Engine",
    client: "Velo Logistics",
    category: "ai",
    industry: "Logistics & Supply Chain",
    problem: "Manual dispatching for 120 delivery vans resulted in high fuel overheads, delayed delivery windows, and dispatcher fatigue.",
    solution: "We built an autonomous AI agent system integrating LLMs with local traffic APIs, constructing optimized route schedules and automating dispatch emails to drivers.",
    technologies: ["Node.js", "Express", "OpenAI API", "Python", "Docker"],
    results: [
      "Reduced dispatcher coordination hours by 84%",
      "Decreased monthly fuel costs by 18%",
      "Increased on-time deliveries to 99.4%"
    ],
    roi: "$140,000 saved annually",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80",
    testimonial: {
      text: "The AI agent solutions designed by WebGrow Technologies revolutionized our fleet management. Dispatchers now focus entirely on anomalies while the AI runs standard operations.",
      author: "Robert Vance",
      role: "Operations Director, Velo Logistics"
    }
  },
  {
    id: "luxethreads-store",
    title: "Headless E-commerce Storefront",
    client: "Luxe Thread Apparel",
    category: "shopify",
    industry: "E-commerce & Retail",
    problem: "A bloated WordPress store with slow response times caused checkout drop-offs during high-traffic flash sales.",
    solution: "We implemented a headless Shopify architecture using Next.js on the frontend and Shopify's Storefront API. This isolated inventory updates from traffic surges.",
    technologies: ["Next.js", "Shopify API", "Framer Motion", "Tailwind CSS"],
    results: [
      "34% increase in sales conversion rate",
      "Page speed improved from 4.8s to 0.9s",
      "Average Order Value (AOV) increased by $14"
    ],
    roi: "Investment recouped in 45 days",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80",
    testimonial: {
      text: "WebGrow Technologies delivered a lightning-fast site. Our customers frequently remark on how fast the site feels, and our sales numbers reflect it.",
      author: "Elena Rostova",
      role: "Founder, Luxe Thread"
    }
  },
  {
    id: "taskflow-saas",
    title: "TaskFlow Collaborative SaaS Platform",
    client: "TaskFlow Inc",
    category: "saas",
    industry: "SaaS & Productivity",
    problem: "TaskFlow needed to validate their collaboration concept with a robust MVP containing instant notifications, billing, and team workspaces.",
    solution: "We built the platform using React, Node.js, and WebSockets. It includes Stripe billing, team dashboards, granular role permissions, and an interactive kanban board.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Stripe"],
    results: [
      "Scaled to 50k active users within 6 months",
      "Zero security breaches or data leaks",
      "99.99% system uptime maintained"
    ],
    roi: "Successfully raised $2.5M Series Seed",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    testimonial: {
      text: "WebGrow acted as our virtual CTO office. Their architecture holds up to heavy loads. We wouldn't have raised our seed round without their speed to market.",
      author: "Marcus Chen",
      role: "CEO & Co-founder, TaskFlow"
    }
  }
];

export const jobsData: JobOpening[] = [
  {
    id: "react-developer",
    title: "Senior React Developer (Next.js)",
    department: "Engineering",
    location: "Remote (Global)",
    type: "Full-Time",
    experience: "5+ Years",
    description: "We are seeking a Senior React/Next.js Engineer to build premium, high-fidelity user interfaces. You will work closely with our UI/UX designers to translate Figma layouts into interactive, highly-optimized components using Framer Motion and Tailwind CSS.",
    requirements: [
      "Proficient with React 19, Next.js 15 (App Router), and TypeScript.",
      "Expert knowledge of Tailwind CSS and modern styling architectures.",
      "Deep understanding of Framer Motion, GSAP, or canvas-based animation systems.",
      "Experience optimizing Core Web Vitals (LCP, FID, CLS).",
      "Familiarity with state management libraries like Zustand or Redux Toolkit."
    ],
    benefits: [
      "Competitive salary paid in USD or native currency.",
      "Flexible, remote-first working setup with core overlap hours.",
      "$2,000 yearly home office setup & learning budget.",
      "Comprehensive medical, dental, and vision health coverage.",
      "Performance bonuses tied to client success metrics."
    ]
  },
  {
    id: "ai-engineer",
    title: "AI & Business Automation Engineer",
    department: "Engineering",
    location: "Remote (US/Europe/Asia)",
    type: "Full-Time",
    experience: "3+ Years",
    description: "Join our AI Services division. In this role, you will build, fine-tune, and deploy custom AI agents, chatbots, and retrieval-augmented generation (RAG) pipelines for enterprise clients looking to optimize operations.",
    requirements: [
      "Strong coding skills in Python, Node.js, and SQL.",
      "Hands-on experience with OpenAI API, LangChain, or LlamaIndex.",
      "Familiarity with Vector databases (Pinecone, pgvector, Qdrant).",
      "Understanding of RESTful APIs, Docker, and AWS serverless models.",
      "Ability to map manual business workflows into automated steps."
    ],
    benefits: [
      "Flexible workspace options.",
      "Annual team retreat (previous locations: Bali, Lisbon).",
      "Generous health benefits.",
      "Free access to cutting-edge AI sandbox accounts."
    ]
  },
  {
    id: "seo-manager",
    title: "Technical SEO Manager",
    department: "Marketing",
    location: "Remote",
    type: "Full-Time",
    experience: "4+ Years",
    description: "WebGrow is looking for a metrics-driven Technical SEO Manager to oversee SEO growth campaigns for our enterprise clients. You will manage keyword auditing, site speed recommendations, structured schema markup, and link building.",
    requirements: [
      "Proven track record of ranking sites for highly competitive keywords.",
      "Expertise with Semrush, Ahrefs, Screaming Frog, and Google Search Console.",
      "Strong understanding of HTML, CSS, JavaScript, and Schema JSON-LD.",
      "Experience writing clear, data-driven content briefs.",
      "Excellent analytical skills and client communication skills."
    ],
    benefits: [
      "Base salary + commission on client ranking retainers.",
      "Flexible working schedule.",
      "Learning courses and industry certifications fully reimbursed."
    ]
  }
];

export const faqData = [
  {
    q: "What services does WebGrow Technologies provide?",
    a: "We are a full-service technology agency providing Custom Website Development, Mobile Apps, SaaS Platforms, AI Agents/Chatbots, Workflow Automation, Search Engine Optimization (SEO), Paid Ads (Google/Meta), and corporate Brand Identity creation."
  },
  {
    q: "How does the 'Free Strategy Session' work?",
    a: "During the 30-minute video session, our senior consultants review your digital assets, analyze competitor rankings, identify bottleneck areas in your current workflow, and provide an actionable roadmap to scale your business."
  },
  {
    q: "Do you build custom software or use templates?",
    a: "Everything we build is bespoke. We construct custom, high-fidelity software tailored specifically to your branding and engineering requirements. We avoid generic templates to ensure maximum performance, security, and scalability."
  },
  {
    q: "Which industries do you serve?",
    a: "We serve a wide variety of industries globally, including Healthcare, Finance, E-commerce, Logistics, Real Estate, Education, Manufacturing, Travel, Automotive, and Hospitality."
  },
  {
    q: "What is your project development process?",
    a: "We follow a 6-step agile process: 1. Discovery (scoping your requirements), 2. Planning (defining architectures & scope), 3. Design (creating UI/UX mockups), 4. Development (writing clean, documented code), 5. Launch (deployment with testing), and 6. Optimization (monitoring analytics and speed)."
  },
  {
    q: "Which technologies do you specialize in?",
    a: "Our frontend stack centers around React, Next.js, Vue.js, and Tailwind CSS. For backends, we use Node.js, Python, Java Spring Boot, and Laravel. Database technologies include PostgreSQL, MySQL, and MongoDB. We host and run workloads on AWS, GCP, and Azure."
  },
  {
    q: "How long does it take to develop a custom website?",
    a: "A typical custom marketing site takes 4 to 8 weeks, while complex enterprise web apps or SaaS platforms can take 12 to 24 weeks depending on the integrations and database complexity."
  },
  {
    q: "Do you offer post-launch support and maintenance?",
    a: "Yes, we offer Dedicated Support and Maintenance agreements. These include 24/7 server monitoring, security updates, regular database backups, content updates, and routine SEO health checks."
  },
  {
    q: "Can you help automate our manual business operations with AI?",
    a: "Absolutely. We specialize in building autonomous AI Agents and RAG-based chatbots that integrate directly into your company systems (email, CRM, Slack). This automates repetitive tasks and reduces operational bottlenecks."
  },
  {
    q: "Is SEO included in your website development projects?",
    a: "Yes, every website we code includes foundational SEO. This covers schema markup, semantic HTML, responsive design, image optimization, Sitemap generation, and lightning-fast loading speeds for core web vitals."
  },
  {
    q: "Do you work with startups?",
    a: "Yes! We work with funded startups to rapidly launch MVPs, as well as SMEs and global enterprises needing to modernize legacy codebases."
  },
  {
    q: "How do you ensure data security in your web applications?",
    a: "We implement industry-standard security practices: SSL encryption, JSON Web Tokens (JWT) for authentication, hashed passwords (bcrypt), secure cookies, parameterized SQL queries to prevent injections, and regular dependency vulnerability scanning."
  },
  {
    q: "Do you handle Shopify storefronts?",
    a: "Yes, we develop bespoke Shopify themes and custom applications. We also specialize in headless Shopify setups using Next.js/React to create ultra-fast storefront experiences."
  },
  {
    q: "How do you price your projects?",
    a: "We offer fixed-scope pricing for defined projects, and monthly dedicated team retainers for ongoing development and marketing campaigns. Check our Pricing page for standard packages."
  },
  {
    q: "Where is WebGrow Technologies located?",
    a: "We are a remote-first organization with hub offices in San Francisco, London, Singapore, and Mumbai, allowing us to support clients across multiple timezones."
  },
  {
    q: "Do you sign Non-Disclosure Agreements (NDAs)?",
    a: "Yes, we sign NDAs prior to any technical scoping call to ensure your intellectual property, business data, and proprietary concepts remain fully protected."
  },
  {
    q: "Can you integrate our website with our internal CRM (e.g. HubSpot, Salesforce)?",
    a: "Yes, we routinely integrate lead forms with HubSpot, Salesforce, Zoho, and other CRMs, as well as connecting internal APIs to sync sales data."
  },
  {
    q: "Do you offer copywriting and graphic design services?",
    a: "Yes, our branding and design team provides copywriting, custom vector illustrations, brand guidelines, logo design, and social media creative assets."
  },
  {
    q: "Can you help optimize a website built by another agency?",
    a: "Yes. We perform comprehensive technical and speed audits to resolve slow database queries, render-blocking scripts, and broken SEO structures, boosting performance and traffic."
  },
  {
    q: "How do I get started?",
    a: "Simply click 'Get Free Consultation' or fill out our Contact form. Our accounts team will contact you within 24 hours to arrange a scheduling link for your scoping session."
  }
];

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: "medicore-case",
    title: "Healthcare Portal Scaling",
    client: "MediCore Healthcare",
    industry: "Healthcare",
    metrics: {
      trafficGrowth: 120,
      leadsGenerated: 1450,
      revenueIncrease: 85,
      conversionRate: 6.4,
      marketingRoi: "3.4x"
    },
    chartData: [
      { name: "Month 1", Traffic: 100, Leads: 100, Revenue: 100 },
      { name: "Month 2", Traffic: 130, Leads: 180, Revenue: 115 },
      { name: "Month 3", Traffic: 160, Leads: 250, Revenue: 140 },
      { name: "Month 4", Traffic: 190, Leads: 340, Revenue: 165 },
      { name: "Month 5", Traffic: 210, Leads: 410, Revenue: 180 },
      { name: "Month 6", Traffic: 220, Leads: 450, Revenue: 185 }
    ]
  },
  {
    id: "velologistics-case",
    title: "Enterprise Fleet Optimization",
    client: "Velo Logistics",
    industry: "Logistics",
    metrics: {
      trafficGrowth: 45,
      leadsGenerated: 350,
      revenueIncrease: 22,
      conversionRate: 4.8,
      marketingRoi: "5.2x"
    },
    chartData: [
      { name: "Month 1", Traffic: 100, Leads: 100, Revenue: 100 },
      { name: "Month 2", Traffic: 110, Leads: 120, Revenue: 105 },
      { name: "Month 3", Traffic: 115, Leads: 140, Revenue: 110 },
      { name: "Month 4", Traffic: 125, Leads: 190, Revenue: 115 },
      { name: "Month 5", Traffic: 135, Leads: 270, Revenue: 120 },
      { name: "Month 6", Traffic: 145, Leads: 350, Revenue: 122 }
    ]
  },
  {
    id: "luxethreads-case",
    title: "E-Commerce Re-platforming",
    client: "Luxe Thread Apparel",
    industry: "E-commerce",
    metrics: {
      trafficGrowth: 280,
      leadsGenerated: 8500,
      revenueIncrease: 190,
      conversionRate: 5.2,
      marketingRoi: "4.1x"
    },
    chartData: [
      { name: "Month 1", Traffic: 100, Leads: 100, Revenue: 100 },
      { name: "Month 2", Traffic: 150, Leads: 220, Revenue: 130 },
      { name: "Month 3", Traffic: 210, Leads: 410, Revenue: 170 },
      { name: "Month 4", Traffic: 290, Leads: 620, Revenue: 210 },
      { name: "Month 5", Traffic: 340, Leads: 780, Revenue: 250 },
      { name: "Month 6", Traffic: 380, Leads: 8500, Revenue: 290 }
    ]
  }
];

export const blogData: BlogPost[] = [
  {
    id: "ai-agents-future",
    title: "How Autonomous AI Agents Are Transforming Enterprise Workflows in 2026",
    slug: "ai-agents-future",
    category: "AI",
    author: {
      name: "Arjun Mehta",
      role: "Lead AI Solutions Architect",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&auto=format&fit=crop&q=80"
    },
    date: "June 15, 2026",
    readTime: "6 Min Read",
    summary: "Discover how AI agents are moving beyond simple chatbots to execute multi-step database actions, customer onboarding, and back-office pipelines without human intervention.",
    content: `Autonomous AI agents are the next frontier of enterprise automation. In 2026, companies are moving away from basic chatbot answering systems towards sophisticated, task-oriented agents that can make decisions, coordinate workflows, and execute technical actions.

### What is an Autonomous AI Agent?
Unlike traditional automation scripts that follow hardcoded rules, an AI agent leverages Large Language Models (LLMs) to reason about a goal, plan steps, select appropriate tools (like database APIs or CRM access), and execute tasks while self-correcting if failures occur.

### Key Use Cases in Modern Business
1. **Automated Customer Success**: Agents can read support tickets, fetch customer purchase history, process a refund in Stripe, write an update into Salesforce, and send a personalized email confirmation.
2. **Operations & Logistics**: Auto-routing shipping orders based on real-time weather alerts and inventory checks.
3. **Data Intelligence & Audits**: Continuous scanning of server logs, invoice matching, and flags on accounting anomalies.

By utilizing RAG (Retrieval-Augmented Generation), these systems can run completely customized on your internal company databases with maximum safety measures.`,
    tags: ["Artificial Intelligence", "Automation", "Enterprise Software", "Digital Growth"],
    comments: [
      { id: "c1", author: "Sarah Jenkins", date: "June 16, 2026", text: "We recently deployed an AI routing agent in our firm and it slashed processing times from hours to seconds. Great write-up!" },
      { id: "c2", author: "Michael Chang", date: "June 18, 2026", text: "What security frameworks do you recommend for keeping database queries safe when using LLM agents?" }
    ]
  },
  {
    id: "nextjs15-react19",
    title: "Building Ultra-Fast Web Apps with Next.js 15 and React 19",
    slug: "nextjs15-react19",
    category: "Web Development",
    author: {
      name: "Ananya Rao",
      role: "VP of Engineering",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
    },
    date: "May 28, 2026",
    readTime: "8 Min Read",
    summary: "An in-depth look at using React Server Components, the React Compiler, and Next.js 15 App Router updates to deliver lightning-fast Core Web Vitals and maximize conversion metrics.",
    content: `React 19 and Next.js 15 represent a landmark shift in how modern web interfaces are designed and deployed. By shifting rendering tasks to the server and automating UI optimization via the new React Compiler, websites can now load instantly, irrespective of device hardware.

### Why Next.js 15 Matters for Conversion Rates
Every millisecond of latency costs revenue. Google's core web vitals directly influence search ranking positions. Next.js 15 delivers out-of-the-box improvements:
- **React Compiler integration**: Automates memoization, removing the need for tedious useMemo and useCallback hooks.
- **Server Actions**: Direct remote procedure calls from the client to the server, simplifying form processing and database writes.
- **Incremental Static Regeneration (ISR)**: Pre-renders pages at build time while dynamically updating them in the background.

With these techniques, you get static site speeds with fully dynamic application logic.`,
    tags: ["React 19", "Next.js 15", "Web Performance", "Coding Practices"],
    comments: []
  },
  {
    id: "seo-strategy-2026",
    title: "Enterprise SEO Frameworks: How We Scaled PropNex to 245% Organic Growth",
    slug: "seo-strategy-2026",
    category: "SEO",
    author: {
      name: "Vikram Desai",
      role: "Director of Performance Marketing",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80"
    },
    date: "April 12, 2026",
    readTime: "5 Min Read",
    summary: "Learn the technical SEO methodology, schema markup templates, and semantic writing pipelines required to rank for competitive commercial keywords.",
    content: `Many agencies treat SEO as a black box of keyword stuffing. At WebGrow, we approach SEO as an engineering discipline. In this case breakdown, we detail the exact framework we used to scale PropNex's organic leads by 245%.

### Step 1: Technical Crawl Budget Optimization
First, we audited the index profile, cleaning up redirect loops, removing render-blocking JavaScript, and ensuring the site scored 100/100 on mobile PageSpeed Insights.

### Step 2: Advanced Semantic Schema
We constructed comprehensive JSON-LD schemas representing their real estate listings, agent profiles, and regional hubs. This allows Google to present rich snippets directly in the search results page.

### Step 3: Content Velocity & Topic Clusters
Instead of writing isolated blog posts, we mapped out topical authority clusters, writing deep guides linking back to high-value service landing pages, passing pagerank internally.`,
    tags: ["SEO", "Case Studies", "Content Marketing", "Organic Traffic"],
    comments: [
      { id: "c3", author: "Arthur Pendelton", date: "April 14, 2026", text: "The topic cluster technique has been a game-changer for our SaaS landing pages." }
    ]
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "startup",
    name: "Startup Scale",
    price: "$4,500",
    period: "/One-Time",
    desc: "Perfect for funded startups needing a rapid, visually stunning marketing launchpad.",
    features: [
      "Custom Next.js 15 Site (Up to 5 Pages)",
      "Fully Responsive Premium Design",
      "Foundational SEO Setup & Schema",
      "Stripe or HubSpot Form Integrations",
      "Self-Serve Content Manager (CMS)",
      "Standard Web Performance Guarantee",
      "30 Days Post-Launch Bug Support"
    ]
  },
  {
    id: "growth",
    name: "Growth Engine",
    price: "$8,500",
    period: "/Project",
    desc: "Our most popular tier. Full-scale site redesign, advanced marketing tools, and AI setups.",
    features: [
      "Complete Site Architecture (Up to 12 Pages)",
      "High-Fidelity Framer Motion Animations",
      "Simulated AI Chatbot / Lead Gen Integration",
      "Advanced Technical SEO Audit & Implementation",
      "Custom E-commerce (Shopify) or Web App MVP",
      "Priority Core Web Vitals Optimization",
      "90 Days Dedicated SLA Support",
      "Interactive Resources & ROI Widgets"
    ],
    isPopular: true
  },
  {
    id: "enterprise",
    name: "Enterprise Custom",
    price: "Custom Quote",
    period: "/Monthly Retainer",
    desc: "For global organizations requiring microservices, absolute security, and dedicated engineering teams.",
    features: [
      "Unlimited Page & Screen Architecture",
      "Bespoke Autonomous AI Agents / Workflows",
      "Microservices & PostgreSQL Database Setup",
      "Dedicated Full-Stack Developer & Designer",
      "24/7 Server SLA & DevOps Infrastructure",
      "Bi-Weekly SEO & Performance Audits",
      "JWT Security & Penetration Audits",
      "Enterprise CRM & ERP Bi-directional Sync"
    ]
  }
];

export const resourcesData: ResourceItem[] = [
  {
    id: "digital-growth-playbook",
    title: "The 2026 Digital Growth Playbook",
    type: "ebook",
    category: "Marketing",
    desc: "A 45-page comprehensive framework detailing how modern B2B startups and enterprises scale traffic, optimize conversion rates, and build RAG AI agents.",
    downloadUrl: "#playbook-download",
    fileSize: "8.4 MB"
  },
  {
    id: "seo-checklist",
    title: "Technical SEO Audit Checklist",
    type: "checklist",
    category: "SEO",
    desc: "A step-by-step technical spreadsheet containing the exact site audits, schema parameters, and indexing criteria WebGrow engineers run before every client launch.",
    downloadUrl: "#seo-checklist-download",
    fileSize: "2.1 MB"
  },
  {
    id: "ai-automation-whitepaper",
    title: "AI Business Automation Whitepaper",
    type: "whitepaper",
    category: "AI",
    desc: "A detailed engineering report demonstrating the operational ROI of deploying autonomous LLM agents inside customer support and dispatch workflows.",
    downloadUrl: "#ai-whitepaper-download",
    fileSize: "14.2 MB"
  }
];

// ─── Team & Company Data ───────────────────────────────────────────────────

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialization: string;
  bio: string;
  photo: string;
  linkedin: string;
}

export const teamData: TeamMember[] = [
  {
    id: "founder",
    name: "Rahul Sharma",
    role: "Founder & CEO",
    experience: "12+ Years",
    specialization: "Business Strategy & Client Relations",
    bio: "Started WebGrow in 2019 from a small office in Pune with a vision to bring enterprise-grade technology to Indian SMEs. Previously led digital transformation projects at Wipro and Infosys.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    linkedin: "https://linkedin.com/in/rahul-sharma-webgrow"
  },
  {
    id: "tech-lead",
    name: "Arjun Mehta",
    role: "Technical Lead",
    experience: "10+ Years",
    specialization: "Full-Stack Architecture & DevOps",
    bio: "IIT Bombay alumnus with deep expertise in Next.js, cloud infrastructure, and scalable backend systems. Has architected platforms handling 2M+ daily requests.",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80",
    linkedin: "https://linkedin.com/in/arjun-mehta-webgrow"
  },
  {
    id: "ux-lead",
    name: "Priya Nair",
    role: "UI/UX Lead",
    experience: "8+ Years",
    specialization: "Product Design & Design Systems",
    bio: "Former design lead at Flipkart. Creates conversion-focused interfaces that balance aesthetics with usability. Passionate about accessible, inclusive design.",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    linkedin: "https://linkedin.com/in/priya-nair-webgrow"
  },
  {
    id: "marketing-director",
    name: "Vikram Desai",
    role: "Marketing Director",
    experience: "9+ Years",
    specialization: "SEO, Performance Marketing & Analytics",
    bio: "Scaled organic traffic for 40+ Indian brands. Expert in technical SEO, Google Ads, and data-driven campaign optimization across B2B and D2C verticals.",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
    linkedin: "https://linkedin.com/in/vikram-desai-webgrow"
  }
];

export interface TrustMetric {
  label: string;
  value: string;
  sub?: string;
}

export const trustMetrics: TrustMetric[] = [
  { label: "Projects Delivered", value: "500+", sub: "Across 12 industries" },
  { label: "Happy Clients", value: "150+", sub: "India, US, UK, UAE" },
  { label: "Success Rate", value: "98%", sub: "On-time delivery" },
  { label: "Years Experience", value: "5+", sub: "Since 2019" },
];

export const clientReviews = [
  {
    text: "WebGrow rebuilt our entire patient booking system. Online appointments jumped 185% in four months. Their Mumbai team understood our compliance needs perfectly.",
    author: "Dr. Ananya Krishnan",
    company: "MediCore Healthcare, Bengaluru",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&auto=format&fit=crop&q=80"
  },
  {
    text: "The Shopify headless store they built loads in under a second. Our conversion rate grew 34% and AOV increased by ₹1,200. Best investment we made this year.",
    author: "Rajesh Kapoor",
    company: "Kapoor Textiles, Delhi",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
  },
  {
    text: "Their SEO team took us from page 5 to page 1 for our core keywords in 8 months. Organic leads increased 245%. Transparent reporting every week.",
    author: "Sneha Reddy",
    company: "PropNex Realty, Hyderabad",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80"
  }
];

export const industriesServed = [
  "Healthcare", "E-commerce", "Real Estate", "Education",
  "Manufacturing", "Logistics", "Finance", "Hospitality",
  "SaaS", "Retail", "Automotive", "Legal"
];

export const awardsAndCerts = [
  { title: "Google Partner", desc: "Certified Google Ads & Analytics partner" },
  { title: "Shopify Expert", desc: "Official Shopify development partner" },
  { title: "ISO 27001", desc: "Information security management certified" },
  { title: "Clutch Top Agency", desc: "Rated 4.9/5 on Clutch.co" },
  { title: "AWS Partner", desc: "Amazon Web Services consulting partner" },
  { title: "Meta Business Partner", desc: "Verified Meta advertising partner" },
];

export const partnerLogos = [
  "Tata Digital", "Reliance Retail", "HDFC Bank", "Infosys",
  "Wipro", "Mahindra", "Aditya Birla Group", "ICICI Bank",
  "L&T Infotech", "Bajaj Finserv"
];

export const companyTimeline = [
  { year: "2019", title: "Founded in Pune", desc: "Rahul Sharma starts WebGrow with 3 developers and a shared office space." },
  { year: "2020", title: "First 50 Clients", desc: "Crossed 50 SME clients across Maharashtra and Karnataka during the pandemic digital shift." },
  { year: "2021", title: "Mumbai HQ Opens", desc: "Moved to Bandra Kurla Complex with a 25-person team. Launched SEO division." },
  { year: "2022", title: "500 Projects Milestone", desc: "Delivered 500th project. Expanded into AI automation and Shopify headless commerce." },
  { year: "2023", title: "International Clients", desc: "Started serving clients in US, UK, and UAE. Team grew to 40+ professionals." },
  { year: "2024", title: "Enterprise Partnerships", desc: "Became certified Google, Shopify, and AWS partner. 150+ active clients." },
];

export interface EnhancedCaseStudy extends CaseStudyItem {
  challenge: string;
  solution: string;
  results: string[];
  image: string;
}

export const enhancedCaseStudies: EnhancedCaseStudy[] = [
  {
    ...caseStudiesData[0],
    challenge: "MediCore's legacy booking portal had 68% mobile drop-off and zero SEO visibility for doctor profiles.",
    solution: "Built a Next.js patient portal with instant schedule sync, schema markup for 200+ doctor profiles, and WhatsApp booking integration.",
    results: ["+250% Online Leads", "+180% Organic Traffic", "+40% Revenue"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80"
  },
  {
    ...caseStudiesData[1],
    challenge: "Velo Logistics spent 160+ hours monthly on manual dispatch routing for 120 delivery vans.",
    solution: "Deployed AI routing agents integrated with Google Maps API and ERP, automating 84% of dispatch decisions.",
    results: ["-84% Manual Hours", "+99.4% On-Time Delivery", "₹1.2Cr Annual Savings"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80"
  },
  {
    ...caseStudiesData[2],
    challenge: "Luxe Thread's WordPress store crashed during flash sales with 4.8s load times and 62% cart abandonment.",
    solution: "Migrated to headless Shopify + Next.js with CDN caching, optimized checkout, and Meta/Google pixel integration.",
    results: ["+280% Traffic", "+190% Revenue", "+34% Conversion Rate"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80"
  }
];

export const homeServices = [
  {
    id: "web-development",
    icon: "code",
    title: "Web Development",
    shortDesc: "High-performance websites built with Next.js and React, optimized for speed, SEO, and conversions.",
    benefits: ["Core Web Vitals optimized", "Custom CMS integration", "Mobile-first responsive design"],
    href: "/services?tab=web-development"
  },
  {
    id: "shopify",
    icon: "shopping",
    title: "Shopify Development",
    shortDesc: "Custom Shopify themes and headless storefronts designed to maximize sales and average order value.",
    benefits: ["Headless architecture", "Checkout optimization", "ERP & inventory sync"],
    href: "/services?tab=shopify-development"
  },
  {
    id: "seo",
    icon: "search",
    title: "SEO",
    shortDesc: "Technical SEO and content strategy to dominate search rankings and drive qualified organic traffic.",
    benefits: ["Keyword research & mapping", "Schema markup", "Monthly ranking reports"],
    href: "/services?tab=seo"
  },
  {
    id: "marketing",
    icon: "megaphone",
    title: "Digital Marketing",
    shortDesc: "Google Ads, Meta campaigns, and analytics-driven marketing that delivers measurable ROI.",
    benefits: ["Campaign management", "Conversion tracking", "A/B testing & optimization"],
    href: "/services?tab=marketing"
  },
  {
    id: "ai",
    icon: "bot",
    title: "AI Automation",
    shortDesc: "Custom AI agents and chatbots that automate workflows, support, and business operations.",
    benefits: ["RAG-based chatbots", "Workflow automation", "CRM & Slack integration"],
    href: "/services?tab=ai-agents"
  },
  {
    id: "mobile",
    icon: "smartphone",
    title: "Mobile Apps",
    shortDesc: "Cross-platform iOS and Android apps with offline support, push notifications, and smooth UX.",
    benefits: ["React Native & Flutter", "App Store submission", "Backend API integration"],
    href: "/services?tab=mobile-app-development"
  }
];
