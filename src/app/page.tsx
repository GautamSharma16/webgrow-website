'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import {
  Code, ShoppingBag, Terminal, Search, Megaphone, Bot, Smartphone, Palette,
  CheckCircle2, Star, ArrowRight, Linkedin, MessageSquare,
  ChevronDown, Clock, MapPin, Phone, Mail, Globe, Users, ShieldCheck, Zap, TrendingUp,
} from 'lucide-react';
import { projectsData, caseStudiesData, blogData } from '@/data/siteData';

/* ─── Animated Counter ─────────────────────────────────────── */
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    const animate = (ts: number) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / 1500, 1);
      setCount(Math.floor(p * value));
      if (p < 1) requestAnimationFrame(animate);
      else setCount(value);
    };
    requestAnimationFrame(animate);
  }, [value, inView]);
  return <span ref={ref} className="tabular-nums">{count}{suffix}</span>;
}

/* ─── Section fade-up wrapper ───────────────────────────────── */
function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Section pill badge ────────────────────────────────────── */
function Pill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest bg-indigo-50 border border-indigo-100 text-[#4F46E5]">
      {icon}{label}
    </span>
  );
}

const WA = 'https://wa.me/919162000000?text=Hello%20WebGrow,%20I%20am%20interested%20in%20your%20services.';

const clientLogos = [
  "Tata Consultancy", "Reliance Digital", "Infosys Limited", "HDFC Bank",
  "ICICI Bank", "Wipro Technologies", "Mahindra Group", "Aditya Birla",
  "Bajaj Finserv", "Zomato", "PhonePe", "Nykaa",
];

const whyChooseUsData = [
  { icon: <Users className="h-5 w-5" />, title: "Dedicated Team", desc: "Expert developers, architects, and marketers working directly in your workspace.", color: "indigo" },
  { icon: <ShieldCheck className="h-5 w-5" />, title: "Transparent Pricing", desc: "No hidden costs, clear scope-of-work documentation, and fixed milestones.", color: "violet" },
  { icon: <Zap className="h-5 w-5" />, title: "Fast Delivery", desc: "Two-week sprints, automated pipeline deployment, and responsive support.", color: "indigo" },
  { icon: <Clock className="h-5 w-5" />, title: "24×7 Support", desc: "Continuous uptime monitoring, database backups, and emergency SLAs.", color: "violet" },
  { icon: <Code className="h-5 w-5" />, title: "Modern Technologies", desc: "Bespoke code using React, Next.js, and secure backend microservices.", color: "indigo" },
  { icon: <TrendingUp className="h-5 w-5" />, title: "Business-Focused Results", desc: "We track ranking authority, search click-throughs, and checkout conversions.", color: "violet" },
];

const teamMembers = [
  {
    name: "Ethan Caldwell",
    role: "Founder & CEO",
    experience: "McKinsey Strategist",
    initials: "EC",
    bio: "Former McKinsey consultant who pivoted to building tech. Ethan has helped 200+ companies restructure digital operations for measurable growth.",
    tags: ["Strategy", "Growth"],
    gradient: "from-[#4F46E5] to-[#6366f1]",
  },
  {
    name: "Dr. Evelyn Vance",
    role: "Chief Technology Officer",
    experience: "Former AWS Architect",
    initials: "EV",
    bio: "14 years designing secure, cloud-native infrastructure at AWS. Evelyn leads engineering architecture across all enterprise client projects.",
    tags: ["Cloud", "Architecture"],
    gradient: "from-[#7C3AED] to-[#9333ea]",
  },
  {
    name: "Marcus Thorne",
    role: "Chief Marketing Officer",
    experience: "$80M Organic Lead Gen",
    initials: "MT",
    bio: "Ran organic acquisition campaigns generating $80M+ in pipeline. Marcus specialises in technical SEO and performance-led media buying.",
    tags: ["SEO", "Paid Media"],
    gradient: "from-[#4F46E5] to-[#7C3AED]",
  },
  {
    name: "Sophia Patel",
    role: "Operations Director",
    experience: "Agile Scrum Master",
    initials: "SP",
    bio: "Certified Scrum Master coordinating 40+ simultaneous client projects across time zones. Zero missed deadlines in three years running.",
    tags: ["Agile", "Delivery"],
    gradient: "from-[#6d28d9] to-[#4F46E5]",
  },
];

const testimonials = [
  { text: "WebGrow redesigned our patient portal. Bookings increased by 185% in four months, and checkout dropout rates plummeted. Their technical professionalism is outstanding.", author: "Dr. Sarah Henderson", company: "MediCore Healthcare, Mumbai", rating: 5, avatar: "SH" },
  { text: "The AI automation agents they built for our shipping schedules cut dispatcher tracking work by 160 hours per month. Highly recommend their enterprise team.", author: "Robert Vance", company: "Velo Logistics, Singapore", rating: 5, avatar: "RV" },
  { text: "They migrated our e-commerce store to headless Shopify. Page speeds went from 4.8s to sub-second. Our sales conversion rate grew by 34% immediately.", author: "Elena Rostova", company: "Luxe Thread Apparel, London", rating: 5, avatar: "ER" },
];

const serviceCards = [
  { icon: <Code className="h-5 w-5" />,        title: "Website Development",  desc: "Next.js & React platforms optimised for search, performance, and lead intake.", color: "indigo" },
  { icon: <ShoppingBag className="h-5 w-5" />, title: "Shopify Development",  desc: "Headless storefronts designed to maximise average order value and conversions.", color: "violet" },
  { icon: <Terminal className="h-5 w-5" />,    title: "Software Development", desc: "Secure APIs, microservices, customer portals, and internal workflow tools.", color: "indigo" },
  { icon: <Search className="h-5 w-5" />,      title: "SEO Optimisation",     desc: "Technical SEO, schema markup, and content strategy for commercial keywords.", color: "violet" },
  { icon: <Megaphone className="h-5 w-5" />,   title: "Digital Marketing",    desc: "Google & Meta campaigns with analytical ROI tracking for client acquisition.", color: "orange" },
  { icon: <Bot className="h-5 w-5" />,         title: "AI Automation",        desc: "LLM agents, RAG workflows, and support chatbots to reduce overhead.", color: "indigo" },
  { icon: <Smartphone className="h-5 w-5" />,  title: "Mobile Apps",          desc: "Cross-platform Flutter/React Native with offline-first databases and smooth UX.", color: "violet" },
  { icon: <Palette className="h-5 w-5" />,     title: "Branding & UI/UX",     desc: "Logos, design systems, and component libraries for consistent brand identity.", color: "orange" },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════════ */
export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', service: 'Web Development', message: '' });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', service: 'Web Development', message: '' });
    }, 5000);
  };

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="relative overflow-hidden w-full font-sans bg-white">

      {/* ═══════════════════════════════════════
          1. HERO
      ═══════════════════════════════════════ */}
      <section className="relative min-h-[94vh] flex items-center overflow-hidden bg-white">

        {/* subtle grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(79,70,229,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.035) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* blobs — kept soft, not overdone */}
        <div className="absolute top-0 right-0 w-[640px] h-[640px] rounded-full bg-indigo-100/40 blur-[110px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[440px] h-[440px] rounded-full bg-violet-100/30 blur-[90px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-20 lg:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* LEFT */}
            <motion.div
              className="space-y-9 max-w-xl"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              {/* Eyebrow — no pill, just a clean inline label */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
                className="flex items-center gap-3"
              >
                <span className="block h-px w-8 bg-[#4F46E5]" />
                <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#4F46E5]">
                  Full-Service Digital Agency
                </span>
              </motion.div>

              {/* Headline — let the type do the work */}
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <h1 className="text-[2.6rem] sm:text-[3.2rem] xl:text-[3.6rem] font-extrabold leading-[1.06] tracking-[-0.025em] text-slate-900 font-heading">
                  We Build Digital<br />
                  <span
                    className="font-heading"
                    style={{
                      background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Experiences That
                  </span>
                  <br />
                  Drive Real Growth
                </h1>
              </motion.div>

              {/* Subtext */}
              <motion.p
                variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
                className="text-[15.5px] text-slate-500 leading-[1.75] max-w-[420px]"
              >
                Custom websites, Shopify stores, software, AI automation and SEO — all under one roof.
                Trusted by{' '}
                <strong className="text-slate-700 font-semibold">150+ clients</strong>{' '}
                across India, US, UK and Singapore.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
                className="flex flex-wrap gap-3"
              >
                <Link
                  href="#consultation"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold text-sm shadow-lg shadow-indigo-300/40 hover:shadow-indigo-400/50 hover:-translate-y-0.5 transition-all duration-200"
                >
                  Start a Project
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="#portfolio"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
                >
                  View Our Work
                </Link>
              </motion.div>

              {/* Social proof row */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                className="flex items-center gap-4 pt-1"
              >
                <div className="flex -space-x-2">
                  {['SH', 'RV', 'ER', 'MT'].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 border-2 border-white flex items-center justify-center text-[9px] font-bold text-white shadow-sm">
                      {i}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />)}
                  </div>
                  <div className="text-[12px] text-slate-500 mt-0.5">
                    <span className="font-semibold text-slate-700">4.9 / 5</span> from 150+ clients
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT — hero image */}
            <motion.div
              className="relative lg:pl-6"
              initial={{ opacity: 0, x: 36 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/80 aspect-[4/3] border border-slate-100/80">
                <Image src="/corporate_hero.png" alt="WebGrow team building digital products" fill priority className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 via-transparent to-transparent" />
              </div>

              {/* Floating result card — top left */}
              <motion.div
                className="absolute -top-5 -left-2 sm:-left-8 bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3 hidden sm:flex items-center gap-3"
                initial={{ opacity: 0, y: -14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="h-9 w-9 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-[#4F46E5]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-800">+185% Bookings</div>
                  <div className="text-[11px] text-slate-400">MediCore Healthcare</div>
                </div>
              </motion.div>

              {/* Floating result card — bottom right */}
              <motion.div
                className="absolute -bottom-5 -right-2 sm:-right-8 bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3 hidden sm:flex items-center gap-3"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="h-9 w-9 rounded-xl bg-violet-50 flex items-center justify-center shrink-0">
                  <Bot className="h-5 w-5 text-[#7C3AED]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-800">160 hrs saved / mo</div>
                  <div className="text-[11px] text-slate-400">AI Automation</div>
                </div>
              </motion.div>

              {/* Live badge */}
              <motion.div
                className="absolute top-1/2 -right-2 sm:-right-6 -translate-y-1/2 bg-white rounded-2xl shadow-xl border border-slate-100 px-3 py-2.5 hidden lg:flex items-center gap-2"
                initial={{ opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[12px] font-semibold text-slate-700">500+ Projects Delivered</span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Scroll</span>
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}>
            <ChevronDown className="h-4 w-4 text-slate-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════
          2. Trust logos
      ═══════════════════════════════════════ */}
      <section className="py-6 bg-white border-y border-slate-100 overflow-hidden">
        <p className="text-center text-[10px] text-slate-400 uppercase tracking-widest font-semibold mb-5">
          Trusted by leading brands &amp; enterprises
        </p>
        <div className="flex w-full overflow-hidden">
          <div className="flex space-x-14 animate-marquee shrink-0 whitespace-nowrap">
            {[...clientLogos, ...clientLogos].map((brand, idx) => (
              <div key={idx} className="text-sm font-semibold uppercase tracking-widest text-slate-300 flex items-center gap-3 select-none">
                <div className="h-1.5 w-1.5 rounded-full bg-indigo-300" />
                <span>{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. About
      ═══════════════════════════════════════ */}
      <section id="about" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <FadeUp className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 aspect-[4/3]">
              <Image src="/corporate_about.png" alt="Corporate Team Collaboration" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/10 via-transparent to-transparent" />
            </div>
          </FadeUp>

          <FadeUp delay={0.15} className="lg:col-span-7 space-y-6 text-left">
            <Pill icon={<Users className="h-3.5 w-3.5" />} label="Who We Are" />
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-heading">
              Engineered for Value,<br />Built to Scale
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              Founded in 2018, WebGrow Technologies is a premium IT service agency with offices in Mumbai and San Francisco. We provide high-fidelity custom software and targeted search marketing frameworks to help business owners achieve structural growth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {[
                { label: "Our Mission", text: "To build secure, fast, and scalable technology infrastructures that directly compound enterprise value." },
                { label: "Our Vision",  text: "To be the preferred tech consulting firm recognised globally for transparent operations and measurable growth." },
                { label: "Our Values",  text: "Client first, clean engineering pipelines, transparent pricing contracts, and zero legacy shortcuts." },
              ].map((v) => (
                <div key={v.label} className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:shadow-sm transition-all">
                  <h3 className="text-xs font-bold uppercase text-[#4F46E5] font-heading">{v.label}</h3>
                  <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">{v.text}</p>
                </div>
              ))}
            </div>
            <Link href="/about" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F46E5] hover:text-[#4338CA] transition-colors group">
              Read More About Us
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. Services
      ═══════════════════════════════════════ */}
      <section id="services" className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <FadeUp className="text-center max-w-3xl mx-auto space-y-4">
            <Pill icon={<Terminal className="h-3.5 w-3.5" />} label="Enterprise Services" />
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-heading">
              Custom Solutions Aligned With Your Business
            </h2>
            <p className="text-sm text-slate-500">
              We deploy elite tech expertise across 8 key service areas to scale digital pipelines securely.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {serviceCards.map((svc, idx) => (
              <FadeUp key={idx} delay={idx * 0.05}>
                <div className="group p-5 rounded-xl bg-white border border-slate-100 shadow-sm hover:border-indigo-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 h-full">
                  <div className={`p-2 w-fit rounded-lg mb-4 ${
                    svc.color === 'indigo' ? 'bg-indigo-50 text-[#4F46E5]' :
                    svc.color === 'violet' ? 'bg-violet-50 text-[#7C3AED]' :
                    'bg-orange-50 text-[#F97316]'
                  }`}>
                    {svc.icon}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 font-heading">{svc.title}</h3>
                  <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">{svc.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp className="text-center pt-4">
            <Link href="/services" className="px-6 py-2.5 rounded-xl border border-[#4F46E5] hover:bg-[#4F46E5] text-[#4F46E5] hover:text-white font-semibold text-sm transition-all inline-flex items-center gap-2 group">
              Explore All Services
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          5. Why Choose Us
      ═══════════════════════════════════════ */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <FadeUp className="text-center max-w-3xl mx-auto space-y-4">
          <Pill icon={<ShieldCheck className="h-3.5 w-3.5" />} label="Why WebGrow" />
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-heading">
            Enterprise Standards, Handcrafted Value
          </h2>
          <p className="text-sm text-slate-500">
            We hold ourselves to strict operational benchmarks with direct communication and certified engineering.
          </p>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyChooseUsData.map((item, idx) => (
            <FadeUp key={idx} delay={idx * 0.07}>
              <div className="group p-6 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:border-indigo-100 hover:-translate-y-0.5 transition-all duration-200 space-y-3 h-full">
                <div className={`p-2.5 w-fit rounded-lg ${item.color === 'indigo' ? 'bg-indigo-50 text-[#4F46E5]' : 'bg-violet-50 text-[#7C3AED]'}`}>
                  {item.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-900 font-heading">{item.title}</h3>
                <p className="text-[12px] text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          6. Portfolio
      ═══════════════════════════════════════ */}
      <section id="portfolio" className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <FadeUp className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="space-y-3 max-w-2xl">
              <Pill icon={<Smartphone className="h-3.5 w-3.5" />} label="Our Work" />
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-heading">
                Real Case Studies &amp; Deployments
              </h2>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['All', 'Web', 'E-commerce', 'SaaS', 'AI'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeCategory === cat
                      ? 'bg-[#4F46E5] text-white shadow-sm shadow-indigo-200'
                      : 'bg-white border border-slate-200 text-slate-500 hover:border-indigo-200 hover:text-[#4F46E5]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((proj, idx) => (
              <FadeUp key={proj.id} delay={idx * 0.08}>
                <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex flex-col">
                  <div className="relative aspect-[16/10] bg-slate-100 border-b border-slate-100">
                    <Image src={proj.image} alt={proj.title} fill className="object-cover" />
                    <div className="absolute top-3 left-3 bg-slate-900/80 text-white px-2.5 py-1 rounded-lg text-[9px] font-bold uppercase tracking-wider backdrop-blur-sm">
                      {proj.industry}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-[#4F46E5] text-white px-2.5 py-1 rounded-lg text-[9px] font-bold uppercase tracking-wider">
                      {proj.roi}
                    </div>
                  </div>
                  <div className="p-6 space-y-3 flex-1">
                    <h3 className="text-base font-bold text-slate-900 font-heading">{proj.title}</h3>
                    <p className="text-[11px] text-slate-500 leading-relaxed"><strong>Problem:</strong> {proj.problem}</p>
                    <p className="text-[11px] text-slate-500 leading-relaxed"><strong>Solution:</strong> {proj.solution}</p>
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-50">
                      {proj.technologies.map((t, i) => (
                        <span key={i} className="px-2 py-0.5 rounded-md bg-indigo-50 text-[9px] text-[#4F46E5] font-semibold uppercase tracking-wider">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="px-6 pb-5 bg-slate-50 border-t border-slate-100">
                    <blockquote className="text-[11px] italic text-slate-500 leading-relaxed pt-4">
                      &quot;{proj.testimonial.text}&quot;
                    </blockquote>
                    <div className="mt-2 text-[10px] font-bold text-slate-700">
                      — {proj.testimonial.author}, <span className="font-normal text-slate-400">{proj.testimonial.role}</span>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          7. Team — Meet Our Experts
      ═══════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <FadeUp className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-5">
              <span className="block h-px w-8 bg-[#4F46E5]" />
              <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#4F46E5]">
                Leadership
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-heading">
              Meet the people behind<br />every project
            </h2>
            <p className="text-sm text-slate-500 mt-4 leading-relaxed max-w-lg">
              Our leadership team brings together deep expertise in engineering, marketing, and operations — people who have done it before at scale.
            </p>
          </FadeUp>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <FadeUp key={idx} delay={idx * 0.09}>
                <div className="group relative bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">

                  {/* Top colour strip */}
                  <div className={`h-1 w-full bg-gradient-to-r ${member.gradient}`} />

                  <div className="p-6 flex flex-col gap-5 flex-1">

                    {/* Avatar + name */}
                    <div className="flex items-center gap-4">
                      <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white font-extrabold text-base font-heading shadow-sm shrink-0`}>
                        {member.initials}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 font-heading leading-snug">{member.name}</h3>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-[#4F46E5] mt-0.5">{member.role}</div>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px w-full bg-slate-100" />

                    {/* Short bio */}
                    <p className="text-[12px] text-slate-500 leading-[1.7] flex-1">
                      {member.bio}
                    </p>

                    {/* Skill tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {member.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-md bg-indigo-50 text-[10px] font-semibold text-[#4F46E5] uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] text-slate-400 font-medium">{member.experience}</span>
                    <a href="#linkedin" className="text-slate-300 hover:text-[#4F46E5] transition-colors">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>

                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          8. Testimonials
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <FadeUp className="text-center max-w-3xl mx-auto space-y-4">
            <Pill icon={<Star className="h-3.5 w-3.5" fill="currentColor" />} label="Client Stories" />
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-heading">
              Feedback From Active Clients
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <FadeUp key={idx} delay={idx * 0.1}>
                <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col h-full">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />)}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed flex-1">"{t.text}"</p>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-bold text-[#4F46E5] shrink-0">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">{t.author}</div>
                      <div className="text-[10px] text-slate-400">{t.company}</div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          9. Blog
      ═══════════════════════════════════════ */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <FadeUp className="text-center max-w-3xl mx-auto space-y-4">
          <Pill icon={<Clock className="h-3.5 w-3.5" />} label="Tech Journal" />
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-heading">
            Insights &amp; Technical Briefings
          </h2>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogData.slice(0, 3).map((post, idx) => (
            <FadeUp key={post.id} delay={idx * 0.08}>
              <article className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col h-full">
                <div className="flex justify-between items-center text-[10px] font-semibold uppercase tracking-wider text-[#4F46E5] mb-3">
                  <span>{post.category}</span>
                  <span className="text-slate-400">{post.readTime}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 font-heading hover:text-[#4F46E5] transition-colors flex-1">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-[12px] text-slate-500 leading-relaxed line-clamp-3 mt-2">{post.summary}</p>
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">{post.date}</span>
                  <Link href={`/blog/${post.slug}`} className="font-semibold text-[#4F46E5] hover:underline flex items-center gap-1 group">
                    Read <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          10. Contact / Scoping Form
      ═══════════════════════════════════════ */}
      <section id="consultation" className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            <FadeUp className="lg:col-span-5 space-y-7">
              <div className="space-y-3">
                <Pill icon={<Mail className="h-3.5 w-3.5" />} label="Get A Quote" />
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 font-heading">
                  Schedule A Scoping Workshop
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Arrange a complimentary 30-minute scoping meeting. Our team will map out a clear timeline.
                </p>
              </div>
              <div className="space-y-3 text-sm text-slate-600">
                {[
                  { icon: <MapPin className="h-4 w-4 text-[#4F46E5] shrink-0 mt-0.5" />, content: <span>One Market Plaza, Suite 2200, San Francisco, CA 94105<br /><span className="text-xs text-slate-400">Indian Operations: BKC Business Hub, Mumbai</span></span> },
                  { icon: <Phone className="h-4 w-4 text-[#4F46E5] shrink-0" />, content: <a href="tel:+14155552690" className="hover:text-[#4F46E5]">+1 (415) 555-2690</a> },
                  { icon: <Mail className="h-4 w-4 text-[#4F46E5] shrink-0" />, content: <a href="mailto:solutions@webgrowtech.com" className="hover:text-[#4F46E5]">solutions@webgrowtech.com</a> },
                  { icon: <Globe className="h-4 w-4 text-[#4F46E5] shrink-0" />, content: <span>WhatsApp: +91 91620 00000</span> },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">{item.icon}{item.content}</div>
                ))}
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-indigo-50 flex items-center justify-center text-[#4F46E5] shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-slate-900">Active Hubs</div>
                  <div className="text-slate-400 text-xs">San Francisco · Mumbai · London · Singapore</div>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.15} className="lg:col-span-7 bg-white p-8 rounded-2xl border border-slate-100 shadow-lg">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="h-12 w-12 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-heading">Thank You!</h3>
                  <p className="text-sm text-slate-500">Our team will reach out within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { label: "Full Name",       key: "name",    type: "text",  placeholder: "e.g. Rahul Sharma" },
                      { label: "Business Email",  key: "email",   type: "email", placeholder: "name@company.com" },
                      { label: "Phone",           key: "phone",   type: "tel",   placeholder: "+91 98765 43210" },
                      { label: "Company",         key: "company", type: "text",  placeholder: "Company name" },
                    ].map((field) => (
                      <div key={field.key}>
                        <label className="block text-[11px] uppercase font-semibold text-slate-400 mb-1.5">{field.label}</label>
                        <input
                          type={field.type}
                          required
                          value={(formData as any)[field.key]}
                          onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                          className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-indigo-100 transition-all"
                          placeholder={field.placeholder}
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase font-semibold text-slate-400 mb-1.5">Service Needed</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-indigo-100 transition-all"
                    >
                      {["Website Development","Shopify Development","Software Development","SEO Optimization","Digital Marketing","AI Automation","Mobile App Development","Corporate Branding"].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase font-semibold text-slate-400 mb-1.5">Project Details</label>
                    <textarea
                      required rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-indigo-100 transition-all resize-none"
                      placeholder="Describe your project goals..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold text-sm shadow-md shadow-indigo-100 hover:-translate-y-0.5 transition-all"
                  >
                    Submit — Get Your Free Quote
                  </button>
                </form>
              )}
            </FadeUp>
          </div>
        </div>
      </section>

    </div>
  );
}