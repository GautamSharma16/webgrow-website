'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code, Megaphone, Brain, Palette, CheckCircle2, ChevronRight,
  TrendingUp, Layers, HelpCircle, PhoneCall, Bot, ShoppingBag, Smartphone, CloudLightning
} from 'lucide-react';
import Link from 'next/link';

interface ServiceDetail {
  id: string;
  title: string;
  category: 'tech' | 'marketing' | 'ai' | 'branding';
  icon: React.ReactNode;
  overview: string;
  benefits: string[];
  process: string[];
  deliverables: string[];
  caseStudy: {
    client: string;
    challenge: string;
    result: string;
    roi: string;
  };
  faqs: Array<{ q: string; a: string }>;
}

const servicesList: ServiceDetail[] = [
  {
    id: "web-development",
    title: "Website Development",
    category: "tech",
    icon: <Code className="h-5 w-5" />,
    overview: "We engineer custom, high-fidelity marketing websites, corporate portals, and headless CMS integrations. Using Next.js 15, React, and Tailwind, we optimize for instantaneous loading times and clean crawl paths to maximize page index performance and inbound customer conversion.",
    benefits: [
      "Custom UI layouts aligned with corporate branding specifications.",
      "Optimized Core Web Vitals (LCP, FID, CLS) for top-tier Google crawl scoring.",
      "Self-service backend content management systems (CMS) via Sanity, Strapi, or WordPress.",
      "Continuous build pipelines yielding zero-downtime hot-swappable updates."
    ],
    process: [
      "Discovery & Brand Specification review",
      "Interactive Figma high-fidelity wireframing",
      "Component development & API schema coupling",
      "Thorough automated security & speed testing",
      "Vercel or AWS serverless cloud deployment"
    ],
    deliverables: [
      "Responsive React/Next.js production codebase",
      "CMS integration & administrative console training",
      "Full site Schema JSON-LD metadata mapping",
      "90 days post-launch SLA maintenance agreement"
    ],
    caseStudy: {
      client: "MediCore Care",
      challenge: "Slow patient bookings page causing 40% mobile abandonment rates.",
      result: "Coded a server-side Next.js patient interface synchronized with hospital schedules.",
      roi: "185% increase in online patient bookings within 4 months."
    },
    faqs: [
      { q: "Do you use predefined templates?", a: "No, all websites are custom coded from blank files to ensure absolute performance and security." },
      { q: "Will I be able to update content myself?", a: "Yes, we integrate easy-to-use content management systems (CMS) tailored to your team's workflow." }
    ]
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    category: "tech",
    icon: <Smartphone className="h-5 w-5" />,
    overview: "We construct responsive native (iOS/Swift, Android/Kotlin) and cross-platform (React Native/Flutter) mobile software. We focus on offline data caching, push notifications configurations, and biometrics security integrations.",
    benefits: [
      "Unified codebase deployment scaling costs across iOS and Android.",
      "Offline sync features utilizing local SQLite databases.",
      "Fast bio-authentication configurations (FaceID & Fingerprint).",
      "Sleek micro-animations maintaining high user retention."
    ],
    process: [
      "Scoping mobile UI/UX layouts",
      "Database schemas & offline state planning",
      "Native device API programming",
      "Closed-beta testing via TestFlight & Firebase",
      "App Store & Google Play Store submission reviews"
    ],
    deliverables: [
      "Compiled Swift/Kotlin or React Native bundle packages",
      "App Store compliance assets and listings",
      "API backend controllers source code",
      "Push notification dashboard access"
    ],
    caseStudy: {
      client: "FitLife Tracker",
      challenge: "High memory consumption causing app crashes for 15% of users.",
      result: "Refactored local storage and decoupled heavy API requests.",
      roi: "Scaled to 100k downloads with a 4.8-star App Store rating."
    },
    faqs: [
      { q: "Do you support App Store submission?", a: "Yes, we handle the entire submission process, including metadata assets and compliance audits." },
      { q: "Can the app work without an internet connection?", a: "Yes, we build local offline databases that automatically synchronize once internet connectivity is restored." }
    ]
  },
  {
    id: "shopify-development",
    title: "Shopify Development",
    category: "tech",
    icon: <ShoppingBag className="h-5 w-5" />,
    overview: "We code custom Shopify setups, bespoke Liquid templates, private API apps, and headless Shopify Hydrogen builds. We focus on catalog loading speeds, cart recovery workflows, and check-out customizations.",
    benefits: [
      "Optimized load times under 1 second, reducing cart drop-off.",
      "Bespoke checkout script customisations and product bundling apps.",
      "Syncing with SAP, Salesforce, and shipping networks.",
      "Custom theme coding avoiding heavy third-party app bloat."
    ],
    process: [
      "E-commerce conversion layout review",
      "Liquid theme configuration or React headless setup",
      "Payment gateway & shipping integrations",
      "Data imports & inventory migrations",
      "Launch campaign testing"
    ],
    deliverables: [
      "Optimized Shopify store theme",
      "Private Shopify application builds",
      "Data layer configurations for Google/Meta tracking",
      "Staff operations dashboard onboarding manual"
    ],
    caseStudy: {
      client: "Luxe Thread Apparel",
      challenge: "Slow checkout load times during seasonal flash sales causing high cart abandonment.",
      result: "Decompiled bulky app code, moving scripts to Shopify Functions.",
      roi: "34% sales conversion increase and AOV increased by $14."
    },
    faqs: [
      { q: "Can you migrate our products from WooCommerce?", a: "Yes, we perform complete database migrations, preserving SEO URLs, reviews, and customers." },
      { q: "What is headless commerce?", a: "It detaches your store's frontend (Next.js) from the Shopify backend, yielding ultra-fast speeds and custom layouts." }
    ]
  },
  {
    id: "seo-services",
    title: "SEO Services",
    category: "marketing",
    icon: <TrendingUp className="h-5 w-5" />,
    overview: "We implement advanced SEO strategies to drive high-intent organic search queries. From technical crawl audits and JSON-LD schema layouts to link-building, we focus on driving revenue, not just vanity keywords.",
    benefits: [
      "High search rankings for commercial keywords.",
      "Clean website crawling paths preventing indexing bottlenecks.",
      "Acquiring high-authority backlinks from digital PR channels.",
      "Local map optimizations scaling multi-location organizations."
    ],
    process: [
      "Keyword research & competitor gap analysis",
      "Technical crawl & schema markup audit",
      "Topical cluster content planning",
      "On-page optimization & content generation",
      "Backlink outreach & ranking reporting"
    ],
    deliverables: [
      "Exhaustive keyword opportunity map",
      "Configured Google Search Console & Schema profiles",
      "High-authority editorial backlink placements",
      "Monthly traffic, keyword rank, and organic lead reports"
    ],
    caseStudy: {
      client: "PropNex Properties",
      challenge: "Drop in search visibility due to a messy website reorganization.",
      result: "Cleaned up redirects, implemented custom listing schemas, and built topical clusters.",
      roi: "245% increase in organic leads, scaling traffic to 95k monthly visits."
    },
    faqs: [
      { q: "How long does SEO take?", a: "Standard campaigns yield visible organic traffic and keyword improvements within 3 to 6 months." },
      { q: "Do you guarantee first page rankings?", a: "No agency can guarantee Google rankings, but our technical methods consistently beat competitor averages." }
    ]
  },
  {
    id: "ppc-advertising",
    title: "PPC Advertising",
    category: "marketing",
    icon: <CloudLightning className="h-5 w-5" />,
    overview: "We structure Google Ads, Meta Ads, and LinkedIn campaigns designed to capture immediate demand. We prioritize landing page conversion alignments, multi-touch attribution setups, and cohort testing.",
    benefits: [
      "Immediate inbound lead generation.",
      "Sleek landing page templates optimized for PPC conversion pathways.",
      "Clean retargeting pixel setups matching iOS parameters.",
      "Transparent conversion cost mapping."
    ],
    process: [
      "PPC audit and competitor ad scoping",
      "Ad copy drafting & custom landing page code",
      "Audience cohort mapping & bid rules setup",
      "A/B creative asset tests",
      "Budget scale reviews based on CAC/LTV"
    ],
    deliverables: [
      "Configured Google & Meta Ads manager accounts",
      "Custom landing page codebase",
      "Campaign copy assets & visual creatives",
      "Bi-weekly ROAS and attribution reports"
    ],
    caseStudy: {
      client: "Apex SaaS Solutions",
      challenge: "High cost-per-lead ($180) rendering paid acquisition unprofitable.",
      result: "Designed a clean Next.js landing page and retargeted high-intent cohorts.",
      roi: "Reduced CPL to $54 while scaling monthly sign-ups by 300%."
    },
    faqs: [
      { q: "What advertising budget should we start with?", a: "We recommend a minimum ad spend of $2,000 per month to ensure sufficient data gathering for testing." },
      { q: "Will we own the ad accounts?", a: "Yes, you own all accounts and assets; we simply connect as managers." }
    ]
  },
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    category: "marketing",
    icon: <Megaphone className="h-5 w-5" />,
    overview: "We handle corporate social media presence across LinkedIn, Twitter, and Instagram. We construct content calendars, edit custom videos, and coordinate B2B thought-leadership campaigns to build industry authority.",
    benefits: [
      "Professional corporate brand presentation.",
      "Custom graphics and video shorts optimized for algorithms.",
      "Direct engagement with potential enterprise buyers on LinkedIn.",
      "Building a dedicated community of brand advocates."
    ],
    process: [
      "Social brand guidelines alignment",
      "Monthly content scheduling & calendar draft",
      "Graphic templates & video editing",
      "Community management & outreach",
      "Growth metrics review"
    ],
    deliverables: [
      "Monthly post schedule calendar",
      "Custom high-resolution graphic creatives",
      "Edited video assets (Reels/Shorts/TikToks)",
      "Channel subscriber growth reports"
    ],
    caseStudy: {
      client: "Velo Technologies",
      challenge: "Dormant LinkedIn page yielding zero B2B customer inquiries.",
      result: "Launched CEO thought-leadership scripts and industry research infographics.",
      roi: "Grew followers by 450% and generated 42 qualified enterprise demo calls."
    },
    faqs: [
      { q: "Which social channels do you recommend for B2B?", a: "We heavily focus on LinkedIn and Twitter/X for B2B, and Instagram/YouTube Shorts for B2C." },
      { q: "Do you respond to comments and messages?", a: "Yes, our community managers respond to standard queries using approved brand guidelines." }
    ]
  },
  {
    id: "branding-design",
    title: "Branding & Design",
    category: "branding",
    icon: <Palette className="h-5 w-5" />,
    overview: "We define modern visual corporate identities. From custom vector logos and typographical design systems to complete Figma component kits, we build visuals that communicate trust and authority.",
    benefits: [
      "Memorable visual identities that stand out in global markets.",
      "Comprehensive typography, color guidelines, and asset packages.",
      "Ready-to-code UI design systems in Figma.",
      "Consistent look and feel across print, digital, and slide decks."
    ],
    process: [
      "Brand definition workshop & moodboarding",
      "Logo style drafts & revisions",
      "Color theory & typography pairings",
      "UI design system component structuring",
      "Brand handbook assembly"
    ],
    deliverables: [
      "Corporate Brand Style Guidelines manual",
      "Vector logos (SVG, EPS, PNG layouts)",
      "Interactive Figma Design System file",
      "Pitch deck & business stationery templates"
    ],
    caseStudy: {
      client: "AeroTech Aerospace",
      challenge: "Outdated logo and marketing materials failing to attract institutional investors.",
      result: "Designed a clean, futuristic corporate identity system.",
      roi: "Helped secure a $14M Series A funding round within 3 months."
    },
    faqs: [
      { q: "Will we own the design copyrights?", a: "Yes, upon final payment, complete ownership of all logo and graphic designs is transferred to you." },
      { q: "Do you provide print-ready file formats?", a: "Yes, all design packages include high-res vector files suitable for large-scale print runs." }
    ]
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    category: "ai",
    icon: <Brain className="h-5 w-5" />,
    overview: "We architect autonomous AI agents, smart chatbots, and custom Retrieval-Augmented Generation (RAG) databases. We help enterprises automate support queues, scrape data, and run workflows using LLM orchestration.",
    benefits: [
      "24/7 business operations with zero employee overhead.",
      "RAG integrations querying internal documents securely.",
      "Seamless integrations into Slack, HubSpot, and email pipelines.",
      "Support queues resolved up to 70% without agent intervention."
    ],
    process: [
      "Workflow assessment & pipeline mapping",
      "Vector database setup & document indexing",
      "Agent tool definitions & API coding",
      "Sandbox sandbox trials with human validation",
      "Production deployment & LLM logging"
    ],
    deliverables: [
      "Custom AI agent microservice code",
      "Database vector store config (Pinecone/Postgres)",
      "User feedback & dashboard portal",
      "System auditing logs & latency dashboard"
    ],
    caseStudy: {
      client: "Velo Logistics",
      challenge: "Support staff spending 160 hours monthly routing manual dispatch emails.",
      result: "Built an AI agent reading incoming invoices and auto-updating schedules.",
      roi: "Automated 84% of queries, saving $12,000 monthly in labor overhead."
    },
    faqs: [
      { q: "Is our business data kept private?", a: "Yes, we build secure vector pipelines using enterprise API endpoints where data is not used for public model training." },
      { q: "Can the AI execute actions like charging a credit card?", a: "Yes, we set up strict API call permissions requiring human confirmation for sensitive financial actions." }
    ]
  },
  {
    id: "saas-development",
    title: "SaaS Development",
    category: "tech",
    icon: <Layers className="h-5 w-5" />,
    overview: "We engineer multi-tenant software-as-a-service clouds from scratch. We implement secure database isolation, Stripe recurring billing, API tokens, and real-time usage dashboard reporting.",
    benefits: [
      "Secure multi-tenant databases keeping client data separate.",
      "Dynamic subscription configurations and discount codes.",
      "Usage monitoring to calculate MRR, ARR, and churn rates.",
      "Lightning-fast onboarding wizards for new sign-ups."
    ],
    process: [
      "Product requirement mapping & user flows",
      "Database schema & microservices setup",
      "Stripe billing and webhooks coding",
      "Dashboard components development",
      "Closed-beta staging & audits"
    ],
    deliverables: [
      "Production-ready SaaS application codebase",
      "Administrative system portal",
      "Stripe subscription webhooks setup",
      "Docker/Kubernetes hosting configurations"
    ],
    caseStudy: {
      client: "TaskFlow Inc",
      challenge: "Slow collaborative board updates causing sync issues for remote teams.",
      result: "Built a custom WebSocket server with Redis message caching.",
      roi: "Scaled from 0 to 50k active users with 99.99% system uptime."
    },
    faqs: [
      { q: "Can you implement custom team billing levels?", a: "Yes, we configure flexible Stripe plans supporting per-seat billing, usage meters, or annual discounts." },
      { q: "What database is best for SaaS?", a: "We typically recommend PostgreSQL due to its reliability, scaling, and support for JSON data." }
    ]
  }
];

function ServicesPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Set tab based on URL param or default to first service
  const tabParam = searchParams.get('tab');
  const initialTab = servicesList.some(s => s.id === tabParam) ? (tabParam as string) : 'web-development';
  
  const [activeTab, setActiveTab] = useState(initialTab);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  useEffect(() => {
    if (tabParam && servicesList.some(s => s.id === tabParam)) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    setOpenFaqIdx(null);
    router.push(`/services?tab=${id}`, { scroll: false });
  };

  const currentService = servicesList.find(s => s.id === activeTab) || servicesList[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16 relative">
      {/* Background Decor */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-foreground via-brand-blue to-brand-purple bg-clip-text text-transparent">
          Services We Offer
        </h1>
        <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
          Select a service to view details on features, process methodologies, deliverables, success case studies, and common FAQs.
        </p>
      </section>

      {/* Main Interactive Work Area */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Services List Tabs */}
        <div className="lg:col-span-4 space-y-2">
          <div className="text-[10px] font-bold text-brand-muted uppercase tracking-wider mb-3 px-2">
            Service Menu
          </div>
          <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-4 lg:pb-0 scrollbar-none">
            {servicesList.map((service) => {
              const isActive = service.id === activeTab;
              return (
                <button
                  key={service.id}
                  onClick={() => handleTabChange(service.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl flex items-center space-x-3 transition-all shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-blue/15 to-brand-purple/15 border border-brand-blue/30 text-brand-blue'
                      : 'glass border border-card-border text-foreground hover:bg-card-border/50'
                  }`}
                >
                  <div className={`p-1.5 rounded-lg ${
                    isActive ? 'bg-brand-blue text-white' : 'bg-card-border text-brand-muted'
                  }`}>
                    {service.icon}
                  </div>
                  <span className="text-xs font-bold whitespace-nowrap lg:whitespace-normal">
                    {service.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Tab Details Panel */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentService.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="glass border border-card-border p-6 sm:p-8 rounded-2xl shadow-xl space-y-8"
            >
              {/* Header Info */}
              <div className="border-b border-card-border pb-6 space-y-3">
                <div className="inline-flex items-center px-2.5 py-1 rounded bg-brand-blue/10 text-brand-blue text-[10px] font-bold uppercase tracking-wider">
                  {currentService.category}
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-foreground">
                  {currentService.title}
                </h2>
                <p className="text-xs text-brand-muted leading-relaxed">
                  {currentService.overview}
                </p>
              </div>

              {/* Benefits and Deliverables Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Benefits */}
                <div className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center space-x-2">
                    <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500" />
                    <span>Key Benefits</span>
                  </h3>
                  <ul className="space-y-3">
                    {currentService.benefits.map((ben, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5 text-xs text-brand-muted">
                        <span className="text-brand-blue font-bold mt-0.5">•</span>
                        <span className="leading-relaxed">{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center space-x-2">
                    <Layers className="h-4.5 w-4.5 text-brand-purple" />
                    <span>Project Deliverables</span>
                  </h3>
                  <ul className="space-y-3">
                    {currentService.deliverables.map((del, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5 text-xs text-brand-muted">
                        <span className="text-brand-purple font-bold mt-0.5">✓</span>
                        <span className="leading-relaxed">{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Delivery Timeline / Process */}
              <div className="border-t border-card-border pt-6 space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                  Our Process Methodology
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {currentService.process.map((proc, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-card-border/30 text-center relative border border-card-border/50">
                      <div className="text-[10px] font-bold text-brand-purple">0{idx + 1}</div>
                      <div className="text-[10px] font-bold text-foreground mt-1 whitespace-nowrap overflow-hidden text-ellipsis">
                        {proc.split(' ')[0]}
                      </div>
                      <div className="text-[8px] text-brand-muted mt-1 leading-snug truncate">
                        {proc.substring(proc.indexOf(' ') + 1)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Case Study */}
              <div className="p-5 rounded-xl bg-brand-blue/5 border border-brand-blue/20 space-y-3">
                <div className="flex justify-between items-center text-[10px] text-brand-blue uppercase font-bold tracking-wider">
                  <span>Client Success: {currentService.caseStudy.client}</span>
                  <span className="text-brand-purple font-semibold">{currentService.caseStudy.roi}</span>
                </div>
                <p className="text-xs text-brand-muted leading-relaxed">
                  <strong>Challenge:</strong> {currentService.caseStudy.challenge}
                </p>
                <p className="text-xs text-brand-muted leading-relaxed">
                  <strong>Result:</strong> {currentService.caseStudy.result}
                </p>
              </div>

              {/* Service FAQs */}
              <div className="border-t border-card-border pt-6 space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center space-x-2">
                  <HelpCircle className="h-4.5 w-4.5 text-brand-blue" />
                  <span>Service FAQs</span>
                </h3>
                <div className="space-y-3">
                  {currentService.faqs.map((faq, idx) => (
                    <div key={idx} className="rounded-lg border border-card-border/60 overflow-hidden">
                      <button
                        onClick={() => setOpenFaqIdx(openFaqIdx === idx ? null : idx)}
                        className="w-full text-left px-4 py-2.5 text-xs font-bold text-foreground hover:bg-card-border/40 flex justify-between items-center focus:outline-none"
                      >
                        <span>{faq.q}</span>
                        <span>{openFaqIdx === idx ? '-' : '+'}</span>
                      </button>
                      {openFaqIdx === idx && (
                        <div className="px-4 pb-3 pt-1 text-[11px] text-brand-muted leading-relaxed border-t border-card-border/20 bg-card/25">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-6 border-t border-card-border flex flex-wrap gap-4 items-center justify-between">
                <div className="text-xs text-brand-muted">
                  Ready to map details for <strong>{currentService.title}</strong>?
                </div>
                <div className="flex space-x-3">
                  <Link
                    href={`/pricing`}
                    className="px-4 py-2 rounded-lg border border-card-border hover:bg-card-border text-[11px] font-bold text-foreground transition-all cursor-pointer"
                  >
                    View Packages
                  </Link>
                  <Link
                    href={`/contact?service=${currentService.id}`}
                    className="px-4.5 py-2 rounded-lg bg-gradient-to-r from-brand-blue to-brand-purple text-white text-[11px] font-bold shadow hover:scale-102 transition-all cursor-pointer flex items-center space-x-1.5"
                  >
                    <PhoneCall className="h-3.5 w-3.5" />
                    <span>Schedule Scoping Session</span>
                  </Link>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </section>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 py-16 text-center text-brand-muted">
        Loading services menu...
      </div>
    }>
      <ServicesPageContent />
    </Suspense>
  );
}
