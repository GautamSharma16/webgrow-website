'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, CartesianGrid } from 'recharts';
import { TrendingUp, Users, DollarSign, Percent, Award, ArrowRight, Target, Lightbulb } from 'lucide-react';
import { enhancedCaseStudies } from '@/data/siteData';
import ScrollReveal from '@/components/ScrollReveal';

export default function CaseStudiesPage() {
  const [activeCase, setActiveCase] = useState(enhancedCaseStudies[0].id);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const currentCase = enhancedCaseStudies.find(c => c.id === activeCase) || enhancedCaseStudies[0];

  return (
    <div className="overflow-hidden">
      {/* Header */}
      <section className="hero-enterprise py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <ScrollReveal>
            <div className="section-badge mx-auto"><Award className="h-3.5 w-3.5" /> Case Studies</div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0B1F3A] font-heading">Verified Results for Real Clients</h1>
            <p className="text-[15px] text-[#6b7280] max-w-2xl mx-auto leading-relaxed">
              Detailed breakdowns of how we helped businesses across India achieve measurable growth through technology and marketing.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Case Study Cards */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {enhancedCaseStudies.map((study, idx) => (
            <ScrollReveal key={study.id} delay={idx * 80}>
              <button
                onClick={() => setActiveCase(study.id)}
                className={`w-full text-left rounded-2xl overflow-hidden border transition-all cursor-pointer ${
                  activeCase === study.id
                    ? 'border-[#D4AF37] shadow-lg ring-2 ring-[#D4AF37]/20'
                    : 'border-gray-100 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={study.image} alt={study.client} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[10px] uppercase font-bold text-[#D4AF37] tracking-wider">{study.industry}</span>
                    <h3 className="text-lg font-bold text-white font-heading">{study.client}</h3>
                  </div>
                </div>
                <div className="p-5 space-y-3 bg-white">
                  <div className="flex flex-wrap gap-2">
                    {study.results.map((r) => (
                      <span key={r} className="px-2.5 py-1 rounded-full bg-[#0B1F3A]/5 text-[11px] font-bold text-[#153D77]">{r}</span>
                    ))}
                  </div>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>

        {/* Active Case Detail */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left — Challenge & Solution */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-[#D4AF37]">
                  <Target className="h-4 w-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Challenge</span>
                </div>
                <p className="text-[14px] text-[#6b7280] leading-relaxed">{currentCase.challenge}</p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-[#153D77]">
                  <Lightbulb className="h-4 w-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Solution</span>
                </div>
                <p className="text-[14px] text-[#6b7280] leading-relaxed">{currentCase.solution}</p>
              </div>

              {/* KPI Cards */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: TrendingUp, label: 'Traffic Growth', value: `+${currentCase.metrics.trafficGrowth}%`, color: 'text-[#153D77]' },
                  { icon: Users, label: 'Leads Generated', value: `+${currentCase.metrics.leadsGenerated}`, color: 'text-[#153D77]' },
                  { icon: DollarSign, label: 'Revenue Increase', value: `+${currentCase.metrics.revenueIncrease}%`, color: 'text-emerald-600' },
                  { icon: Percent, label: 'Conversion Rate', value: `${currentCase.metrics.conversionRate}%`, color: 'text-[#D4AF37]' },
                ].map((kpi) => (
                  <div key={kpi.label} className="p-4 rounded-xl bg-[#F8F9FA] border border-gray-100">
                    <kpi.icon className={`h-4 w-4 ${kpi.color} mb-2`} />
                    <div className="text-[10px] text-[#6b7280] font-semibold uppercase">{kpi.label}</div>
                    <div className={`text-lg font-extrabold ${kpi.color} mt-1`}>{kpi.value}</div>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-xl bg-[#0B1F3A] text-center">
                <span className="text-[10px] font-bold text-white/50 uppercase tracking-wider">Campaign ROI</span>
                <div className="text-3xl font-extrabold text-[#D4AF37] mt-1">{currentCase.metrics.marketingRoi}</div>
              </div>
            </div>

            {/* Right — Charts */}
            <div className="lg:col-span-7 space-y-6">
              <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <h3 className="text-sm font-bold text-[#0B1F3A] mb-1">Monthly Growth Trajectory</h3>
                <p className="text-[11px] text-[#6b7280] mb-4">Traffic & revenue indexed from baseline 100</p>
                {mounted ? (
                  <div className="h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={currentCase.chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <defs>
                          <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#153D77" stopOpacity={0.2} />
                            <stop offset="95%" stopColor="#153D77" stopOpacity={0} />
                          </linearGradient>
                          <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.2} />
                            <stop offset="95%" stopColor="#D4AF37" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                        <XAxis dataKey="name" stroke="#94a3b8" fontSize={10} />
                        <YAxis stroke="#94a3b8" fontSize={10} />
                        <Tooltip contentStyle={{ background: '#0B1F3A', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', fontSize: '12px' }} />
                        <Area type="monotone" dataKey="Traffic" stroke="#153D77" fill="url(#colorTraffic)" strokeWidth={2} />
                        <Area type="monotone" dataKey="Revenue" stroke="#D4AF37" fill="url(#colorRevenue)" strokeWidth={2} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                ) : (
                  <div className="h-72 flex items-center justify-center text-sm text-[#6b7280]">Loading chart...</div>
                )}
              </div>

              <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <h3 className="text-sm font-bold text-[#0B1F3A] mb-4">Monthly Lead Generation</h3>
                {mounted ? (
                  <div className="h-56 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={currentCase.chartData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                        <XAxis dataKey="name" stroke="#94a3b8" fontSize={10} />
                        <YAxis stroke="#94a3b8" fontSize={10} />
                        <Tooltip contentStyle={{ background: '#0B1F3A', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', fontSize: '12px' }} />
                        <Bar dataKey="Leads" fill="#153D77" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                ) : (
                  <div className="h-56 flex items-center justify-center text-sm text-[#6b7280]">Loading chart...</div>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
          <div className="text-center p-10 rounded-2xl bg-[#0B1F3A] text-white max-w-3xl mx-auto space-y-4">
            <h3 className="text-xl font-bold font-heading">Ready for Results Like These?</h3>
            <p className="text-white/60 text-[14px] leading-relaxed">
              Book a free consultation with Rahul Sharma and our solutions team to map your growth objectives.
            </p>
            <Link href="/contact?scoping=true" className="btn-gold inline-flex">
              Book Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
