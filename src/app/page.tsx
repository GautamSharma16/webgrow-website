'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code, ShoppingBag, Terminal, Search, Megaphone, Bot, Smartphone, Palette,
  CheckCircle2, Star, ArrowRight, Linkedin, Play, MessageSquare, Briefcase,
  HelpCircle, ChevronDown, ChevronUp, Clock, MapPin, Phone, Mail, Globe, Users, Award, ShieldCheck
} from 'lucide-react';
import { servicesData, projectsData, faqData, caseStudiesData, blogData } from '@/data/siteData';

// Custom client-side animated counter component for numerical trust metrics
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500; // 1.5s animation
    const end = value;
    if (start === end) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(animate);
  }, [value]);

  return <span className="font-heading font-extrabold text-3xl sm:text-4xl text-[#4F46E5]">{count}{suffix}</span>;
}

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  // Scoping Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Web Development',
    message: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('[Scoping Form Submitted]:', formData);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', service: 'Web Development', message: '' });
    }, 5000);
  };

  const clientLogos = [
    "Tata Consultancy", "Reliance Digital", "Infosys Limited", "HDFC Bank",
    "ICICI Bank", "Wipro Technologies", "Mahindra Group", "Aditya Birla"
  ];

  const whyChooseUsData = [
    { title: "Dedicated Team", desc: "Expert developers, architects, and marketers working directly in your workspace." },
    { title: "Transparent Pricing", desc: "No hidden costs, clear scope-of-work documentation, and fixed milestones." },
    { title: "Fast Delivery", desc: "Two-week sprints, automated pipeline deployment, and responsive support." },
    { title: "24x7 Support", desc: "Continuous uptime monitoring, regular database backups, and emergency SLAs." },
    { title: "Modern Technologies", desc: "Bespoke code using React, Next.js, and secure backend microservices." },
    { title: "Business-Focused Results", desc: "We track ranking authority, search click-throughs, and online checkout conversions." }
  ];

  const teamMembers = [
    { name: "Ethan Caldwell", role: "Founder & CEO", experience: "McKinsey Strategist", initials: "EC" },
    { name: "Dr. Evelyn Vance", role: "Chief Technology Officer", experience: "Former AWS Architect", initials: "EV" },
    { name: "Marcus Thorne", role: "Chief Marketing Officer", experience: "$80M Organic Lead Gen", initials: "MT" },
    { name: "Sophia Patel", role: "Operations Director", experience: "Agile Scrum Master", initials: "SP" }
  ];

  const testimonials = [
    {
      text: "WebGrow redesigned our patient portal. Our bookings increased by 185% in four months, and checkout dropout rates plummeted. Their technical professionalism is outstanding.",
      author: "Dr. Sarah Henderson",
      company: "MediCore Healthcare, Mumbai",
      rating: 5,
      avatar: "SH"
    },
    {
      text: "The AI automation agents they built for our shipping schedules cut dispatcher tracking work by 160 hours per month. Highly recommend their enterprise team.",
      author: "Robert Vance",
      company: "Velo Logistics, Singapore",
      rating: 5,
      avatar: "RV"
    },
    {
      text: "They migrated our e-commerce store to headless Shopify. Page speeds went from 4.8s to sub-second. Our sales conversion rate grew by 34% immediately.",
      author: "Elena Rostova",
      company: "Luxe Thread Apparel, London",
      rating: 5,
      avatar: "ER"
    }
  ];

  // Filters projects based on selected category
  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase() || (activeCategory === 'SaaS' && p.category === 'saas') || (activeCategory === 'E-commerce' && p.category === 'shopify'));

  return (
    <div className="relative overflow-hidden w-full font-sans bg-white">

      {/* 1. Hero Section */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-white">

        {/* Background */}
        <div className="absolute inset-0 tech-grid opacity-60 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-indigo-100/50 blur-[120px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-violet-100/40 blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-16 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div className="space-y-8 max-w-xl">

              

              <div className="space-y-1">
                <h1 className="text-[2.75rem] sm:text-5xl xl:text-[3.5rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-slate-900 font-heading">
                  We Build Digital
                </h1>
                <h1 className="text-[2.75rem] sm:text-5xl xl:text-[3.5rem] font-extrabold leading-[1.08] tracking-[-0.02em] font-heading">
                  <span className="gradient-text">Experiences That</span>
                </h1>
                <h1 className="text-[2.75rem] sm:text-5xl xl:text-[3.5rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-slate-900 font-heading">
                  Drive Real Growth
                </h1>
              </div>

              <p className="text-[16px] text-slate-500 leading-[1.7] max-w-[440px]">
                Custom websites, software, Shopify stores, AI automation and SEO — all under one roof. Trusted by <strong className="text-slate-700 font-semibold">150+ clients</strong> across India, US, UK and Singapore.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="#consultation"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold text-sm shadow-lg shadow-indigo-300/40 hover:shadow-indigo-400/50 hover:-translate-y-0.5 transition-all duration-200"
                >
                  Start a Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#portfolio"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
                >
                  View Our Work
                </Link>
              </div>

              <div className="flex items-center gap-4 pt-1">
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
                    <span className="font-semibold text-slate-700">4.9/5</span> from 150+ clients
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative lg:pl-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/80 aspect-[4/3] border border-slate-100/80">
                <Image
                  src="/corporate_hero.png"
                  alt="WebGrow team building digital products"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 via-transparent to-transparent" />
              </div>

              <div className="absolute -top-5 -left-2 sm:-left-8 bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3 hidden sm:flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-[#4F46E5]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-800">+185% Bookings</div>
                  <div className="text-[11px] text-slate-400">MediCore Healthcare</div>
                </div>
              </div>

              <div className="absolute -bottom-5 -right-2 sm:-right-8 bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3 hidden sm:flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-violet-50 flex items-center justify-center shrink-0">
                  <Bot className="h-5 w-5 text-[#7C3AED]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-800">160 hrs saved/mo</div>
                  <div className="text-[11px] text-slate-400">AI Automation</div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-2 sm:-right-6 -translate-y-1/2 bg-white rounded-2xl shadow-xl border border-slate-100 px-3 py-2.5 hidden lg:flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[12px] font-semibold text-slate-700">500+ Projects Delivered</span>
              </div>
            </div>

          </div>

          {/* Stat bar */}
          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px bg-slate-100 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
            {[
              { val: '500+', label: 'Projects Delivered', sub: 'Since 2018' },
              { val: '150+', label: 'Global Clients', sub: 'India · US · UK · SG' },
              { val: '98%', label: 'Satisfaction Rate', sub: 'Avg. 4.9 / 5 stars' },
              { val: '5+', label: 'Years Experience', sub: 'Full-service agency' },
            ].map((s) => (
              <div key={s.label} className="bg-white px-6 py-5 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">{s.val}</div>
                <div className="text-[13px] font-semibold text-slate-700 mt-0.5">{s.label}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Trust logos strip */}
      <section className="py-6 bg-white border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-[10px] text-slate-400 uppercase tracking-widest font-semibold mb-5">
            Trusted by leading brands &amp; enterprises
          </p>
          <div className="flex w-full overflow-hidden">
            <div className="flex space-x-14 animate-marquee shrink-0 whitespace-nowrap">
              {[...clientLogos, ...clientLogos].map((brand, idx) => (
                <div key={idx} className="text-sm font-semibold uppercase tracking-widest text-slate-300 flex items-center space-x-3 cursor-default select-none">
                  <div className="h-1.5 w-1.5 rounded-full bg-indigo-300" />

                  <span>{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. About Section */}
      <section id="about" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* About Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden shadow-xl border border-slate-100 aspect-[4/3]">
              <Image
                src="/corporate_about.png"
                alt="Corporate Team Collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>
          {/* About Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full text-[#4F46E5] text-xs font-semibold uppercase tracking-wider">
              <Users className="h-4 w-4" />
              <span>Who We Are</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-heading">
              Engineered for Value, Built to Scale
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              Founded in 2018, WebGrow Technologies is a premium IT service agency with offices in Mumbai and San Francisco. We provide high-fidelity custom software and targeted search marketing frameworks to help business owners achieve structural growth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <h3 className="text-xs font-bold uppercase text-[#4F46E5] font-heading">Our Mission</h3>
                <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">
                  To build secure, fast, and scalable technology infrastructures that directly compound enterprise value.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <h3 className="text-xs font-bold uppercase text-[#4F46E5] font-heading">Our Vision</h3>
                <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">
                  To be the preferred tech consulting firm recognized globally for transparent operations and measurable growth.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <h3 className="text-xs font-bold uppercase text-[#4F46E5] font-heading">Our Values</h3>
                <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">
                  Client first, clean engineering pipelines, transparent pricing contracts, and zero legacy shortcuts.
                </p>
              </div>
            </div>
            <div>
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 text-sm font-semibold text-[#4F46E5] hover:underline"
              >
                <span>Read More About Us</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Services Section */}
      <section id="services" className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full text-[#4F46E5] text-xs font-semibold uppercase tracking-wider">
              <Terminal className="h-4 w-4" />
              <span>Enterprise Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-heading">
              Custom Solutions Aligned With Your Business
            </h2>
            <p className="text-sm text-slate-500">
              We deploy elite tech expertise across 8 key service areas to scale digital pipelines securely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <Code className="h-5 w-5" />, title: "Website Development", desc: "Next.js and React marketing platforms optimized for search, performance, and lead intake.", color: "indigo" },
              { icon: <ShoppingBag className="h-5 w-5" />, title: "Shopify Development", desc: "Headless storefront frameworks designed to maximize average order value and conversions.", color: "violet" },
              { icon: <Terminal className="h-5 w-5" />, title: "Software Development", desc: "Secure backend APIs, microservices, customer portals, and internal workflow tools.", color: "indigo" },
              { icon: <Search className="h-5 w-5" />, title: "SEO Optimization", desc: "Technical SEO, schema markup, and content strategy targeting commercial intent keywords.", color: "violet" },
              { icon: <Megaphone className="h-5 w-5" />, title: "Digital Marketing", desc: "Google search ads, Meta campaigns, and analytical ROI tracking for client acquisition.", color: "orange" },
              { icon: <Bot className="h-5 w-5" />, title: "AI Automation", desc: "LLM agents, RAG workflows, document parsers, and support chatbots to reduce overhead.", color: "indigo" },
              { icon: <Smartphone className="h-5 w-5" />, title: "Mobile Apps", desc: "Cross-platform Flutter/React Native builds with offline-first databases and smooth UX.", color: "violet" },
              { icon: <Palette className="h-5 w-5" />, title: "Branding & UI/UX", desc: "Corporate logos, design systems, and component libraries for consistent brand identity.", color: "orange" },
            ].map((svc, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-white border border-slate-100 shadow-sm hover:border-indigo-200 hover:shadow-md transition-all group">
                <div className={`p-2 w-fit rounded-lg mb-4 ${
                  svc.color === "indigo" ? "bg-indigo-50 text-[#4F46E5]" :
                  svc.color === "violet" ? "bg-violet-50 text-[#7C3AED]" :
                  "bg-orange-50 text-[#F97316]"
                }`}>
                  {svc.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-900 font-heading">{svc.title}</h3>
                <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/services"
              className="px-6 py-2.5 rounded-xl border border-[#4F46E5] hover:bg-[#4F46E5] text-[#4F46E5] hover:text-white font-semibold text-sm transition-all inline-flex items-center space-x-2"
            >
              <span>Explore All Services</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full text-[#4F46E5] text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="h-4 w-4" />
            <span>Why WebGrow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-heading">
            Enterprise Standards, Handcrafted Value
          </h2>
          <p className="text-sm text-slate-500">
            We hold ourselves to strict operational benchmarks with direct communication and certified engineering.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyChooseUsData.map((str, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow space-y-3">
              <div className="h-8 w-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-sm font-heading">
                {idx + 1}
              </div>
              <h3 className="text-sm font-bold text-slate-900 font-heading">{str.title}</h3>
              <p className="text-[12px] text-slate-500 leading-relaxed">{str.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Portfolio */}
      <section id="portfolio" className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full text-[#4F46E5] text-xs font-semibold uppercase tracking-wider">
                <Smartphone className="h-4 w-4" />
                <span>Our Work</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-heading">
                Real Case Studies &amp; Deployments
              </h2>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['All', 'Web', 'E-commerce', 'SaaS', 'AI'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#4F46E5] text-white shadow-sm shadow-indigo-200'
                      : 'bg-white border border-slate-200 text-slate-500 hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((proj) => (
              <div key={proj.id} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-md flex flex-col hover:shadow-lg transition-shadow">
                <div className="relative aspect-[16/10] bg-slate-100 border-b border-slate-100">
                  <Image src={proj.image} alt={proj.title} fill className="object-cover" />
                  <div className="absolute top-3 left-3 bg-slate-900/80 text-white px-2.5 py-1 rounded-lg text-[9px] font-bold uppercase tracking-wider backdrop-blur-sm">
                    {proj.industry}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[#4F46E5] text-white px-2.5 py-1 rounded-lg text-[9px] font-bold uppercase tracking-wider">
                    {proj.roi}
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-base font-bold text-slate-900 font-heading">{proj.title}</h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed"><strong>Problem:</strong> {proj.problem}</p>
                  <p className="text-[11px] text-slate-500 leading-relaxed"><strong>Solution:</strong> {proj.solution}</p>
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-50">
                    {proj.technologies.map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded-md bg-indigo-50 text-[9px] text-[#4F46E5] font-semibold uppercase tracking-wider">{t}</span>
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
            ))}
          </div>
        </div>
      </section>

      {/* 8. Case Studies */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-violet-50 border border-violet-100 px-3 py-1 rounded-full text-[#7C3AED] text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="h-4 w-4" />
            <span>Success Blueprints</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-heading">
            Enterprise Growth Breakdown
          </h2>
          <p className="text-sm text-slate-500">
            Structural metrics across software integrations and organic digital optimizations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudiesData.map((study) => (
            <div key={study.id} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400">{study.industry}</span>
                    <h3 className="text-base font-bold text-slate-900 font-heading mt-1">{study.client}</h3>
                  </div>
                  <div className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-bold">
                    +{study.metrics.trafficGrowth}% Traffic
                  </div>
                </div>
                <div className="space-y-2 pt-3 border-t border-slate-100 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Leads Generated</span>
                    <span className="font-bold text-slate-800">+{study.metrics.leadsGenerated}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Revenue Increase</span>
                    <span className="font-bold text-emerald-600">+{study.metrics.revenueIncrease}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Conversion Rate</span>
                    <span className="font-bold text-[#4F46E5]">{study.metrics.conversionRate}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Marketing ROI</span>
                    <span className="font-bold text-slate-800">{study.metrics.marketingRoi}</span>
                  </div>
                </div>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100">
                <Link href="/case-studies" className="text-xs font-semibold text-[#4F46E5] hover:underline flex items-center gap-1">
                  <span>View Details</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Team Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full text-[#4F46E5] text-xs font-semibold uppercase tracking-wider">
              <Users className="h-4 w-4" />
              <span>Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-heading">
              Meet Our Experts
            </h2>
            <p className="text-sm text-slate-500">
              Experienced architects, designers, and growth managers delivering digital products.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm flex flex-col">
                <div className="p-6 space-y-3 text-center">
                  <div className="h-14 w-14 mx-auto rounded-2xl bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] flex items-center justify-center text-white font-bold text-base font-heading shadow-md shadow-indigo-100">
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 font-heading">{member.name}</h3>
                    <div className="text-[10px] text-[#4F46E5] font-semibold uppercase tracking-wider mt-1">{member.role}</div>
                    <div className="text-[9px] text-slate-400 uppercase tracking-widest mt-0.5">{member.experience}</div>
                  </div>
                </div>
                <div className="p-3 bg-slate-50 border-t border-slate-100 flex justify-center">
                  <a href="#linkedin" className="text-slate-300 hover:text-[#4F46E5] transition-colors" aria-label="LinkedIn">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Testimonials */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full text-[#4F46E5] text-xs font-semibold uppercase tracking-wider">
            <Star className="h-4 w-4" fill="currentColor" />
            <span>Client Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-heading">
            Feedback From Active Clients
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex space-x-0.5 text-amber-400">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  &quot;{test.text}&quot;
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center space-x-3">
                <div className="h-9 w-9 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-bold text-[#4F46E5]">
                  {test.avatar}
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">{test.author}</div>
                  <div className="text-[10px] text-slate-400">{test.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. Careers */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full text-[#4F46E5] text-xs font-semibold uppercase tracking-wider">
                <Briefcase className="h-4 w-4" />
                <span>Careers at WebGrow</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-heading">
                Build the Future of Digital Commerce &amp; AI
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                Join our remote-first team of developers, designers, and marketers. We provide learning budgets, team retreats, and a transparent culture.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium text-slate-700">
                {["Annual Team Retreats (Lisbon, Bali)", "$2,000 Annual Learning Stipend", "Remote-First Async Work", "Global Healthcare & Hardware Budget"].map((perk) => (
                  <div key={perk} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#4F46E5] shrink-0" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
              <Link href="/careers" className="px-5 py-3 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold text-sm inline-flex items-center gap-2 shadow-sm shadow-indigo-100 transition-all">
                <span>Explore Open Positions</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="lg:col-span-5 space-y-3">
              {[
                { title: "Senior React/Next.js Engineer", dept: "Engineering · Remote (Global) · Full-Time" },
                { title: "AI & Business Automation Engineer", dept: "Engineering · Remote (US/Asia) · Full-Time" },
              ].map((role) => (
                <div key={role.title} className="p-5 rounded-xl bg-white border border-slate-100 shadow-sm">
                  <span className="text-[9px] uppercase font-bold text-[#4F46E5]">Open Role</span>
                  <h4 className="text-sm font-bold text-slate-900 mt-1">{role.title}</h4>
                  <p className="text-[10px] text-slate-400 mt-1">{role.dept}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 12. Blog */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full text-[#4F46E5] text-xs font-semibold uppercase tracking-wider">
            <Clock className="h-4 w-4" />
            <span>Tech Journal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-heading">
            Insights &amp; Technical Briefings
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogData.slice(0, 3).map((post) => (
            <article key={post.id} className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex justify-between items-center text-[10px] font-semibold uppercase tracking-wider text-[#4F46E5]">
                  <span>{post.category}</span>
                  <span className="text-slate-400">{post.readTime}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 font-heading hover:text-[#4F46E5] transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-[12px] text-slate-500 leading-relaxed line-clamp-3">{post.summary}</p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="text-slate-400">{post.date}</span>
                <Link href={`/blog/${post.slug}`} className="font-semibold text-[#4F46E5] hover:underline flex items-center gap-1">
                  <span>Read</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 13. Contact / Scoping Form */}
      <section id="consultation" className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-7">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full text-[#4F46E5] text-xs font-semibold uppercase tracking-wider">
                  <Mail className="h-4 w-4" />
                  <span>Get A Quote</span>
                </div>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 font-heading">
                  Schedule A Scoping Workshop
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Arrange a complimentary 30-minute scoping meeting. Our team will map out a clear timeline.
                </p>
              </div>
              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-0.5 text-[#4F46E5] shrink-0" />
                  <span>One Market Plaza, Suite 2200, San Francisco, CA 94105<br /><span className="text-xs text-slate-400">Indian Operations: BKC Business Hub, Mumbai</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-[#4F46E5] shrink-0" />
                  <a href="tel:+14155552690" className="hover:text-[#4F46E5]">+1 (415) 555-2690</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[#4F46E5] shrink-0" />
                  <a href="mailto:solutions@webgrowtech.com" className="hover:text-[#4F46E5]">solutions@webgrowtech.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-4 w-4 text-[#4F46E5] shrink-0" />
                  <span>WhatsApp: +91 91620 00000</span>
                </div>
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
            </div>

            <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-slate-100 shadow-lg">
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
                    <div>
                      <label className="block text-[11px] uppercase font-semibold text-slate-400 mb-1.5">Full Name</label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:border-[#4F46E5] transition-all"
                        placeholder="e.g. Rahul Sharma" />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase font-semibold text-slate-400 mb-1.5">Business Email</label>
                      <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:border-[#4F46E5] transition-all"
                        placeholder="name@company.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase font-semibold text-slate-400 mb-1.5">Phone</label>
                      <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:border-[#4F46E5] transition-all"
                        placeholder="+91 98765 43210" />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase font-semibold text-slate-400 mb-1.5">Company</label>
                      <input type="text" required value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:border-[#4F46E5] transition-all"
                        placeholder="Company name" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase font-semibold text-slate-400 mb-1.5">Service Needed</label>
                    <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:border-[#4F46E5] transition-all">
                      <option>Website Development</option>
                      <option>Shopify Development</option>
                      <option>Software Development</option>
                      <option>SEO Optimization</option>
                      <option>Digital Marketing</option>
                      <option>AI Automation</option>
                      <option>Mobile App Development</option>
                      <option>Corporate Branding</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase font-semibold text-slate-400 mb-1.5">Project Details</label>
                    <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:border-[#4F46E5] transition-all resize-none"
                      placeholder="Describe your project goals..." />
                  </div>
                  <button type="submit"
                    className="w-full py-3 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold text-sm shadow-md shadow-indigo-100 transition-all cursor-pointer">
                    Submit — Get Your Free Quote
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
