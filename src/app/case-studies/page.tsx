'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, CartesianGrid } from 'recharts';
import { TrendingUp, Users, DollarSign, Percent, ShieldAlert, Award, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { caseStudiesData } from '@/data/siteData';

export default function CaseStudiesPage() {
  const [activeCase, setActiveCase] = useState<string>('medicore-case');
  const [mounted, setMounted] = useState(false);

  // Safeguard against SSR hydration mismatch with browser-only Recharts canvas
  useEffect(() => {
    setMounted(true);
  }, []);

  const currentCase = caseStudiesData.find(c => c.id === activeCase) || caseStudiesData[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16 relative">
      {/* Background Decor */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 bg-brand-purple/10 border border-brand-purple/20 px-3 py-1 rounded-full text-brand-purple text-xs font-semibold">
          <Award className="h-4 w-4" />
          <span>Case Studies & ROI Reports</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-foreground via-brand-blue to-brand-purple bg-clip-text text-transparent">
          Enterprise Results Verified
        </h1>
        <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
          Review actual monthly growth metrics spanning organic visitors, inbound SQL leads, and subscription revenues across completed client projects.
        </p>
      </section>

      {/* Case Study Switcher Triggers */}
      <section className="flex flex-wrap justify-center gap-2">
        {caseStudiesData.map((cs) => (
          <button
            key={cs.id}
            onClick={() => setActiveCase(cs.id)}
            className={`px-4.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeCase === cs.id
                ? 'bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-md'
                : 'glass border border-card-border text-foreground hover:bg-card-border'
            }`}
          >
            {cs.client} ({cs.industry})
          </button>
        ))}
      </section>

      {/* Main Panel: KPI Cards and Responsive Recharts Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* KPI Cards (Left Side) */}
        <div className="lg:col-span-4 space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-foreground px-1">
            Growth KPIs: {currentCase.client}
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            
            <div className="p-4 rounded-xl glass border border-card-border flex items-center space-x-3.5 shadow-sm">
              <div className="p-2 bg-brand-blue/10 text-brand-blue rounded">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[10px] text-brand-muted font-semibold uppercase leading-none">Traffic Growth</div>
                <div className="text-lg font-extrabold text-foreground mt-1.5">+{currentCase.metrics.trafficGrowth}%</div>
              </div>
            </div>

            <div className="p-4 rounded-xl glass border border-card-border flex items-center space-x-3.5 shadow-sm">
              <div className="p-2 bg-brand-purple/10 text-brand-purple rounded">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[10px] text-brand-muted font-semibold uppercase leading-none">New Leads</div>
                <div className="text-lg font-extrabold text-foreground mt-1.5">+{currentCase.metrics.leadsGenerated}</div>
              </div>
            </div>

            <div className="p-4 rounded-xl glass border border-card-border flex items-center space-x-3.5 shadow-sm">
              <div className="p-2 bg-emerald-500/10 text-emerald-500 rounded">
                <DollarSign className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[10px] text-brand-muted font-semibold uppercase leading-none">Revenue Growth</div>
                <div className="text-lg font-extrabold text-foreground mt-1.5">+{currentCase.metrics.revenueIncrease}%</div>
              </div>
            </div>

            <div className="p-4 rounded-xl glass border border-card-border flex items-center space-x-3.5 shadow-sm">
              <div className="p-2 bg-cyan-500/10 text-cyan-400 rounded">
                <Percent className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[10px] text-brand-muted font-semibold uppercase leading-none">Conversion Rate</div>
                <div className="text-lg font-extrabold text-foreground mt-1.5">{currentCase.metrics.conversionRate}%</div>
              </div>
            </div>

          </div>

          <div className="p-4.5 rounded-xl bg-brand-blue/5 border border-brand-blue/20 text-center">
            <span className="text-[10px] font-bold text-brand-muted uppercase tracking-wider block">Campaign ROI</span>
            <span className="text-2xl font-extrabold text-brand-blue block mt-1">{currentCase.metrics.marketingRoi}</span>
          </div>
        </div>

        {/* Dynamic Recharts Charts Area (Right Side) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="glass border border-card-border p-6 rounded-2xl shadow-xl space-y-6">
            <div className="flex justify-between items-center border-b border-card-border pb-4">
              <div>
                <h2 className="text-sm font-bold text-foreground">Monthly Growth Trajectory</h2>
                <span className="text-[10px] text-brand-muted">Relative performance values starting at baseline 100</span>
              </div>
            </div>

            {mounted ? (
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={currentCase.chartData}
                    margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                    <XAxis dataKey="name" stroke="#94a3b8" fontSize={9} />
                    <YAxis stroke="#94a3b8" fontSize={9} />
                    <Tooltip 
                      contentStyle={{ 
                        background: 'rgba(15, 23, 42, 0.95)', 
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '12px',
                        color: '#f3f4f6',
                        fontSize: '11px'
                      }} 
                    />
                    <Area type="monotone" dataKey="Traffic" stroke="#3b82f6" fillOpacity={1} fill="url(#colorTraffic)" strokeWidth={2} name="Traffic Volume" />
                    <Area type="monotone" dataKey="Revenue" stroke="#a855f7" fillOpacity={1} fill="url(#colorRevenue)" strokeWidth={2} name="Revenue Trajectory" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="h-80 flex items-center justify-center text-xs text-brand-muted">
                Initialising charting system canvas...
              </div>
            )}
          </div>

          {/* Secondary Lead volume bar chart */}
          <div className="glass border border-card-border p-6 rounded-2xl shadow-xl space-y-6">
            <h3 className="text-sm font-bold text-foreground">Monthly Inbound Lead Generation</h3>
            {mounted ? (
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={currentCase.chartData}
                    margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                    <XAxis dataKey="name" stroke="#94a3b8" fontSize={9} />
                    <YAxis stroke="#94a3b8" fontSize={9} />
                    <Tooltip
                      contentStyle={{ 
                        background: 'rgba(15, 23, 42, 0.95)', 
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '12px',
                        color: '#f3f4f6',
                        fontSize: '11px'
                      }} 
                    />
                    <Bar dataKey="Leads" fill="#06b6d4" radius={[4, 4, 0, 0]} name="SQL Leads Captured" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="h-64 flex items-center justify-center text-xs text-brand-muted">
                Initialising lead generation charts...
              </div>
            )}
          </div>
        </div>

      </section>

      {/* Footer Scoping Link */}
      <section className="text-center bg-card/25 p-8 rounded-2xl border border-card-border max-w-4xl mx-auto space-y-4">
        <h3 className="text-lg font-bold text-foreground">Ready to Get Verified ROI Reports?</h3>
        <p className="text-xs text-brand-muted leading-relaxed">
          Book a strategy session with Ethan Caldwell and our solutions consultants to map out traffic growth objectives and database APIs scoping.
        </p>
        <div className="pt-2">
          <Link
            href="/contact?case=scoping"
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white text-xs font-bold hover:scale-102 transition-all inline-flex items-center space-x-1.5 cursor-pointer"
          >
            <span>Book Strategy Session</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
