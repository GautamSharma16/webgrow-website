'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowUpRight, TrendingUp, CheckCircle, Code } from 'lucide-react';
import Link from 'next/link';
import { projectsData } from '@/data/siteData';

export default function PortfolioPage() {
  const [filter, setFilter] = useState<'all' | 'web' | 'shopify' | 'mobile' | 'seo' | 'ai' | 'saas'>('all');

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'web', name: 'Web Apps' },
    { id: 'shopify', name: 'Shopify Dev' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ai', name: 'AI & Automation' },
    { id: 'saas', name: 'SaaS Platforms' }
  ] as const;

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(proj => proj.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16 relative">
      {/* Background Decor */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 bg-brand-blue/10 border border-brand-blue/20 px-3 py-1 rounded-full text-brand-blue text-xs font-semibold">
          <Sparkles className="h-4 w-4" />
          <span>Case Studies & Portfolio</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-foreground via-brand-blue to-brand-purple bg-clip-text text-transparent">
          Our Featured Deliverables
        </h1>
        <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
          Explore how we engineer solutions that automate workflow bottlenecks, boost search engine visibility, and grow transaction volumes.
        </p>
      </section>

      {/* Category Filter triggers */}
      <section className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => {
          const isActive = filter === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-md'
                  : 'glass border border-card-border text-foreground hover:bg-card-border'
              }`}
            >
              {cat.name}
            </button>
          );
        })}
      </section>

      {/* Case Studies Grid Layout */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AnimatePresence mode="wait">
          {filteredProjects.map((proj) => (
            <motion.div
              layout
              key={proj.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-2xl overflow-hidden border border-card-border flex flex-col justify-between shadow-lg"
            >
              
              {/* Image & Header Overlay */}
              <div className="relative h-64 overflow-hidden bg-slate-950">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover opacity-75 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div>
                    <span className="px-2.5 py-1 rounded bg-brand-blue/95 text-white text-[9px] font-bold uppercase tracking-wider">
                      {proj.industry}
                    </span>
                    <h2 className="text-lg font-bold text-white mt-2 leading-tight">
                      {proj.title}
                    </h2>
                  </div>
                  <div className="flex items-center space-x-1 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20 backdrop-blur-sm shadow-sm shrink-0">
                    <TrendingUp className="h-4 w-4 shrink-0" />
                    <span>{proj.roi}</span>
                  </div>
                </div>
              </div>

              {/* Problem/Solution Summary details */}
              <div className="p-6 space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold uppercase text-brand-purple tracking-wider">The Challenge</h3>
                    <p className="text-xs text-brand-muted leading-relaxed">
                      {proj.problem}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold uppercase text-brand-blue tracking-wider">Our Solution</h3>
                    <p className="text-xs text-brand-muted leading-relaxed">
                      {proj.solution}
                    </p>
                  </div>
                </div>

                {/* Results checklist */}
                <div className="border-t border-card-border pt-4 space-y-3">
                  <h3 className="text-xs font-bold uppercase text-foreground tracking-wider flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span>Measurable Results</span>
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-1">
                    {proj.results.map((res, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs text-brand-muted">
                        <span className="text-brand-blue font-bold mt-0.5">•</span>
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology list */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {proj.technologies.map((tech, idx) => (
                    <span key={idx} className="px-2.5 py-0.5 rounded bg-card-border text-[9px] text-foreground font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Quote Block */}
              <div className="p-6 bg-card-border/30 border-t border-card-border flex flex-col justify-between">
                <blockquote className="text-[11px] italic text-brand-muted leading-relaxed">
                  &quot;{proj.testimonial.text}&quot;
                </blockquote>
                <div className="mt-3 text-[10px] font-bold text-foreground">
                  - {proj.testimonial.author}, <span className="font-normal text-brand-muted">{proj.testimonial.role}</span>
                </div>
              </div>

            </motion.div>
          ))}
        </AnimatePresence>
      </section>

      {/* Final CTA */}
      <section className="text-center pt-8 max-w-2xl mx-auto space-y-4">
        <h3 className="text-xl font-bold text-foreground">Need Similar Engineering Solutions?</h3>
        <p className="text-xs text-brand-muted leading-relaxed">
          Schedule a technical scoping workshop. Our solutions team will audit your pipeline interfaces and prepare a mock architecture schematic.
        </p>
        <div className="pt-2">
          <Link
            href="/contact?scope=custom"
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white text-xs font-bold shadow-md hover:scale-102 transition-all cursor-pointer inline-flex items-center space-x-1.5"
          >
            <span>Consult With An Engineer</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
