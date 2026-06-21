'use client';

import React, { useState } from 'react';
import { Check, HelpCircle, ArrowRight, Sparkles, Sliders, Calculator, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { pricingPlans } from '@/data/siteData';
import confetti from 'canvas-confetti';

export default function PricingPage() {
  const [pages, setPages] = useState(5);
  const [hasAI, setHasAI] = useState(false);
  const [hasSEO, setHasSEO] = useState(false);
  const [hasEcom, setHasEcom] = useState(false);
  const [calculatorSubmitted, setCalculatorSubmitted] = useState(false);

  // Dynamic Custom pricing calculator logic
  const calculateQuote = () => {
    let base = 2500;
    // Add page overheads
    if (pages > 3) {
      base += (pages - 3) * 350;
    }
    if (hasAI) base += 2000;
    if (hasSEO) base += 1500;
    if (hasEcom) base += 2500;
    return base;
  };

  const handleCalculatorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCalculatorSubmitted(true);
    console.log(`[CRM Lead - Pricing Calculator]: Pages: ${pages}, AI Agents: ${hasAI}, SEO: ${hasSEO}, Ecom: ${hasEcom}, Estimated Quote: $${calculateQuote()}`);
    console.log('[Google Analytics Event]: pricing_calculator_used');

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.85 }
    });
  };

  const featuresMatrix = [
    { name: "Custom Page Layouts", startup: "Up to 5 Pages", growth: "Up to 12 Pages", enterprise: "Unlimited" },
    { name: "Framer Motion Animations", startup: "Standard", growth: "Advanced", enterprise: "Custom Systems" },
    { name: "SEO foundational configs", startup: "✓", growth: "✓", enterprise: "✓" },
    { name: "Structured Schema Markup", startup: "Standard", growth: "Deep Semantic", enterprise: "Custom Knowledge Graph" },
    { name: "AI Chatbots & Agents", startup: "—", growth: "Simulated", enterprise: "Fully Custom / RAG Ready" },
    { name: "E-Commerce setups", startup: "—", growth: "Standard Shopify", enterprise: "Headless / Private Apps" },
    { name: "Post-Launch support", startup: "30 Days Support", growth: "90 Days SLA", enterprise: "24/7 Dedicated SLA" },
    { name: "CRM API Integrations", startup: "Form Capture", growth: "HubSpot/Salesforce", enterprise: "Bi-directional Sync" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-24 relative">
      {/* Background Decor */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 bg-brand-blue/10 border border-brand-blue/20 px-3 py-1 rounded-full text-brand-blue text-xs font-semibold">
          <Sparkles className="h-4 w-4" />
          <span>Pricing Packages</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-foreground via-brand-blue to-brand-purple bg-clip-text text-transparent">
          Scalable Investment Plans
        </h1>
        <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
          Select a structured package option below or use our dynamic scope calculator to estimate customized engineering work.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={`glass rounded-2xl p-6 sm:p-8 flex flex-col justify-between border relative shadow-lg ${
              plan.isPopular 
                ? 'border-brand-blue ring-1 ring-brand-blue shadow-brand-blue/10' 
                : 'border-card-border'
            }`}
          >
            {plan.isPopular && (
              <span className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple text-white text-[9px] font-bold uppercase tracking-wider">
                Most Popular
              </span>
            )}
            
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-foreground">{plan.name}</h3>
                <p className="text-xs text-brand-muted mt-1 leading-relaxed min-h-[32px]">{plan.desc}</p>
              </div>

              <div className="flex items-baseline text-foreground border-b border-card-border pb-6">
                <span className="text-3xl font-extrabold tracking-tight">{plan.price}</span>
                <span className="text-[10px] text-brand-muted font-semibold ml-1">{plan.period}</span>
              </div>

              <ul className="space-y-3">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 text-xs text-brand-muted">
                    <Check className="h-4.5 w-4.5 text-brand-blue shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <Link
                href={`/contact?package=${plan.id}`}
                className={`w-full py-2.5 rounded-xl text-xs font-bold text-center block transition-all hover:scale-102 cursor-pointer ${
                  plan.isPopular
                    ? 'bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-md'
                    : 'glass border border-card-border text-foreground hover:bg-card-border'
                }`}
              >
                Choose {plan.name}
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Dynamic Custom Quote Builder Calculator */}
      <section className="glass border border-card-border p-6 sm:p-8 rounded-2xl shadow-xl max-w-4xl mx-auto space-y-8">
        
        <div className="flex items-center space-x-2.5 border-b border-card-border pb-4">
          <Calculator className="h-5.5 w-5.5 text-brand-blue" />
          <div>
            <h2 className="text-sm sm:text-base font-bold text-foreground">Interactive Custom Quote Calculator</h2>
            <p className="text-[10px] text-brand-muted">Tailor scopes to estimate project costs dynamically</p>
          </div>
        </div>

        {calculatorSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="mx-auto h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h3 className="text-base font-bold text-foreground">Estimated Pricing Calculated</h3>
            <div className="text-3xl font-extrabold text-brand-blue mt-2">${calculateQuote().toLocaleString()}</div>
            <p className="text-xs text-brand-muted leading-relaxed max-w-xl mx-auto mt-2">
              Based on your selection of <strong>{pages} pages</strong>, {hasAI ? 'with AI agents' : 'without AI agents'}, {hasSEO ? 'with advanced SEO' : 'without SEO'}, and {hasEcom ? 'with E-commerce capabilities' : 'without E-commerce'}.
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <button
                onClick={() => setCalculatorSubmitted(false)}
                className="px-4 py-2 rounded-lg border border-card-border hover:bg-card-border text-xs text-foreground font-bold transition-all cursor-pointer"
              >
                Adjust Options
              </button>
              <Link
                href={`/contact?pages=${pages}&ai=${hasAI}&seo=${hasSEO}&ecom=${hasEcom}&quote=${calculateQuote()}`}
                className="px-5 py-2 rounded-lg bg-gradient-to-r from-brand-blue to-brand-purple text-white text-xs font-bold shadow hover:scale-102 transition-all cursor-pointer flex items-center space-x-1"
              >
                <span>Book Scoping Consultation</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleCalculatorSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Options Controllers (Left Side) */}
            <div className="md:col-span-7 space-y-6">
              
              {/* Pages slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <label htmlFor="pages-slider" className="text-foreground">Number of Custom Pages: {pages}</label>
                  <span className="text-brand-blue">${(pages > 3 ? (pages - 3) * 350 + 2500 : 2500).toLocaleString()} Base</span>
                </div>
                <input
                  id="pages-slider"
                  type="range"
                  min="1"
                  max="30"
                  value={pages}
                  onChange={(e) => setPages(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-card-border rounded-lg appearance-none cursor-pointer accent-brand-blue"
                />
                <div className="flex justify-between text-[8px] text-brand-muted uppercase font-bold">
                  <span>1 Page</span>
                  <span>15 Pages</span>
                  <span>30 Pages</span>
                </div>
              </div>

              {/* Extras Checkboxes */}
              <div className="space-y-3 pt-2">
                <span className="block text-[10px] uppercase font-bold text-brand-muted tracking-wider">Configure Integrations</span>
                
                <label className="flex items-start space-x-3 p-3 rounded-lg glass border border-card-border hover:border-brand-blue/30 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={hasAI}
                    onChange={(e) => setHasAI(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-card-border text-brand-blue focus:ring-brand-blue"
                  />
                  <div>
                    <div className="text-xs font-bold text-foreground">AI Automation & Chatbots (+$2,000)</div>
                    <p className="text-[10px] text-brand-muted mt-0.5">Build custom autonomous agents or Retrieval-Augmented chatbots synced with your guides.</p>
                  </div>
                </label>

                <label className="flex items-start space-x-3 p-3 rounded-lg glass border border-card-border hover:border-brand-blue/30 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={hasSEO}
                    onChange={(e) => setHasSEO(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-card-border text-brand-blue focus:ring-brand-blue"
                  />
                  <div>
                    <div className="text-xs font-bold text-foreground">Advanced Technical SEO Setup (+$1,500)</div>
                    <p className="text-[10px] text-brand-muted mt-0.5">Custom structured Schema JSON-LD layouts, site reorganization, crawl speed tune-ups, index setup.</p>
                  </div>
                </label>

                <label className="flex items-start space-x-3 p-3 rounded-lg glass border border-card-border hover:border-brand-blue/30 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={hasEcom}
                    onChange={(e) => setHasEcom(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-card-border text-brand-blue focus:ring-brand-blue"
                  />
                  <div>
                    <div className="text-xs font-bold text-foreground">Headless / E-commerce Capabilities (+$2,500)</div>
                    <p className="text-[10px] text-brand-muted mt-0.5">Shopify Storefront API interfaces, Stripe multi-tier billings, WebSocket instant synchronization panels.</p>
                  </div>
                </label>

              </div>

            </div>

            {/* Calculations Summary panel (Right Side) */}
            <div className="md:col-span-5 rounded-xl bg-card-border/30 p-5 border border-card-border flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">Quote Summary Estimate</h3>
                <ul className="space-y-2 text-xs text-brand-muted border-b border-card-border pb-4">
                  <li className="flex justify-between"><span>Base Platform:</span><span>$2,500</span></li>
                  {pages > 3 && <li className="flex justify-between"><span>Extra Pages ({pages - 3}):</span><span>+${((pages - 3) * 350).toLocaleString()}</span></li>}
                  {hasAI && <li className="flex justify-between"><span>AI Agents:</span><span>+$2,000</span></li>}
                  {hasSEO && <li className="flex justify-between"><span>Advanced SEO:</span><span>+$1,500</span></li>}
                  {hasEcom && <li className="flex justify-between"><span>E-Commerce setup:</span><span>+$2,500</span></li>}
                </ul>
                <div className="flex justify-between items-baseline pt-2">
                  <span className="text-xs font-bold text-foreground">Total Estimate:</span>
                  <span className="text-2xl font-extrabold text-brand-blue">${calculateQuote().toLocaleString()}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-gradient-to-r from-brand-blue to-brand-purple text-white text-xs font-bold shadow hover:scale-102 transition-all cursor-pointer"
              >
                Submit Estimated Quote Scope
              </button>
            </div>

          </form>
        )}
      </section>

      {/* Pricing Feature Comparison Matrix */}
      <section className="space-y-8">
        <h3 className="text-center text-lg font-bold text-foreground uppercase tracking-wider">Features Comparison Matrix</h3>
        <div className="overflow-x-auto rounded-2xl glass border border-card-border shadow-lg">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-card-border bg-card-border/30 text-[10px] uppercase font-bold tracking-wider text-brand-blue">
                <th className="p-4">Feature Parameters</th>
                <th className="p-4">Startup Scale</th>
                <th className="p-4">Growth Engine</th>
                <th className="p-4">Enterprise Custom</th>
              </tr>
            </thead>
            <tbody>
              {featuresMatrix.map((row, idx) => (
                <tr key={idx} className="border-b border-card-border hover:bg-brand-blue/5 transition-colors">
                  <td className="p-4 font-bold text-foreground">{row.name}</td>
                  <td className="p-4 text-brand-muted">{row.startup}</td>
                  <td className="p-4 text-brand-muted">{row.growth}</td>
                  <td className="p-4 text-brand-muted font-semibold">{row.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
}
