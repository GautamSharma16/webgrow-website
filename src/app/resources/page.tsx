'use client';

import React, { useState } from 'react';
import { Download, Calculator, CheckCircle, AlertCircle, FileText, ArrowRight, ShieldCheck } from 'lucide-react';
import { resourcesData } from '@/data/siteData';
import confetti from 'canvas-confetti';
import Link from 'next/link';

export default function ResourcesPage() {
  // Ebook/Resource download validation state
  const [activeDownloadId, setActiveDownloadId] = useState<string | null>(null);
  const [downloadEmail, setDownloadEmail] = useState('');
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [downloadError, setDownloadError] = useState('');

  // ROI Calculator state
  const [traffic, setTraffic] = useState(25000);
  const [currentCr, setCurrentCr] = useState(1.2);
  const [targetCr, setTargetCr] = useState(2.4);
  const [dealSize, setDealSize] = useState(150);

  // ROI Calculations logic
  const currentSales = traffic * (currentCr / 100);
  const targetSales = traffic * (targetCr / 100);
  const currentRev = currentSales * dealSize;
  const targetRev = targetSales * dealSize;
  const monthlyLift = targetRev - currentRev;
  const annualLift = monthlyLift * 12;

  const handleDownloadTrigger = (id: string) => {
    const unlocked = sessionStorage.getItem('resources-unlocked');
    if (unlocked) {
      triggerFileDownload(id);
    } else {
      setActiveDownloadId(id);
      setDownloadSuccess(false);
      setDownloadError('');
    }
  };

  const handleDownloadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!downloadEmail) {
      setDownloadError('Please provide your email.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(downloadEmail)) {
      setDownloadError('Invalid email format.');
      return;
    }

    setDownloadError('');
    setDownloadSuccess(true);
    sessionStorage.setItem('resources-unlocked', 'true');
    console.log(`[CRM Lead - Resource Download]: Email: ${downloadEmail}, Resource ID: ${activeDownloadId}`);
    console.log(`[Google Analytics Event]: resource_download_unlocked, resource_id: ${activeDownloadId}`);

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.85 }
    });

    setTimeout(() => {
      triggerFileDownload(activeDownloadId!);
      setActiveDownloadId(null);
      setDownloadEmail('');
    }, 2000);
  };

  const triggerFileDownload = (id: string) => {
    console.log(`[File Download Initialized]: Resource ID: ${id}`);
    alert(`Your mock download for "${id}" has been initialized in your browser tab.`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-24 relative">
      {/* Background Decor */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 bg-brand-purple/10 border border-brand-purple/20 px-3 py-1 rounded-full text-brand-purple text-xs font-semibold">
          <FileText className="h-4 w-4" />
          <span>Library & Free Tools</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-foreground via-brand-blue to-brand-purple bg-clip-text text-transparent">
          Library & Digital Growth Tools
        </h1>
        <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
          Download blueprints and spreadsheets to audit internal systems or run calculations mapping marketing campaign performance.
        </p>
      </section>

      {/* Resource Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {resourcesData.map((res) => (
          <div key={res.id} className="glass rounded-2xl p-6 border border-card-border flex flex-col justify-between shadow-lg">
            <div className="space-y-4">
              <div className="flex justify-between items-center text-[10px] text-brand-muted uppercase font-bold tracking-wider">
                <span className="text-brand-purple font-semibold">{res.type}</span>
                <span>{res.fileSize}</span>
              </div>
              <h3 className="text-sm font-bold text-foreground">{res.title}</h3>
              <p className="text-xs text-brand-muted leading-relaxed">{res.desc}</p>
            </div>
            
            <div className="pt-6 border-t border-card-border mt-6">
              <button
                onClick={() => handleDownloadTrigger(res.id)}
                className="w-full py-2.5 rounded-lg bg-card-border/50 hover:bg-brand-blue hover:text-white border border-card-border text-[11px] font-bold text-foreground transition-all cursor-pointer flex items-center justify-center space-x-1.5"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Download PDF Guide</span>
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Email Gate Modal for Downloads */}
      {activeDownloadId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" onClick={() => setActiveDownloadId(null)} />
          
          <div className="relative max-w-sm w-full glass border border-card-border rounded-xl shadow-2xl p-5 overflow-hidden z-10">
            <div className="text-center space-y-4">
              <div className="mx-auto h-10 w-10 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase text-foreground">Confirm Business Email</h3>
                <p className="text-[10px] text-brand-muted mt-1 leading-relaxed">
                  Provide your business email to unlock all downloads in the resource library.
                </p>
              </div>

              {downloadSuccess ? (
                <div className="flex items-center justify-center space-x-1.5 text-xs text-emerald-500 font-bold">
                  <CheckCircle className="h-4 w-4" />
                  <span>Download Initialized!</span>
                </div>
              ) : (
                <form onSubmit={handleDownloadSubmit} className="space-y-3">
                  <input
                    type="email"
                    placeholder="email@company.com"
                    value={downloadEmail}
                    onChange={(e) => setDownloadEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg glass border border-card-border focus:border-brand-blue focus:outline-none text-xs"
                  />
                  {downloadError && (
                    <div className="flex items-center space-x-1 text-[10px] text-red-500 font-semibold justify-center">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>{downloadError}</span>
                    </div>
                  )}
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-lg bg-gradient-to-r from-brand-blue to-brand-purple text-white text-xs font-bold transition-all cursor-pointer"
                  >
                    Unlock Download
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Digital Marketing ROI Calculator Section */}
      <section id="roi-calculator" className="glass border border-card-border p-6 sm:p-8 rounded-2xl shadow-xl max-w-4xl mx-auto space-y-8">
        
        <div className="flex items-center space-x-2.5 border-b border-card-border pb-4">
          <Calculator className="h-5.5 w-5.5 text-brand-purple" />
          <div>
            <h2 className="text-sm sm:text-base font-bold text-foreground">Digital Marketing & Software ROI Calculator</h2>
            <p className="text-[10px] text-brand-muted">Estimate revenue growth from page speed optimizations and conversion rate audits</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Inputs Panel (Left Side) */}
          <div className="md:col-span-7 space-y-6">
            
            {/* Website Traffic */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <label htmlFor="traffic-input" className="text-foreground">Monthly Website Traffic: {traffic.toLocaleString()}</label>
                <span className="text-brand-blue">Visits</span>
              </div>
              <input
                id="traffic-input"
                type="range"
                min="5000"
                max="500000"
                step="5000"
                value={traffic}
                onChange={(e) => setTraffic(parseInt(e.target.value))}
                className="w-full h-1.5 bg-card-border rounded-lg appearance-none cursor-pointer accent-brand-blue"
              />
            </div>

            {/* Conversion Rates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="current-cr-input" className="block text-xs font-bold text-foreground">Current Conv. Rate (%): {currentCr}%</label>
                <input
                  id="current-cr-input"
                  type="number"
                  step="0.1"
                  min="0.1"
                  max="10"
                  value={currentCr}
                  onChange={(e) => setCurrentCr(parseFloat(e.target.value) || 0.1)}
                  className="w-full px-3 py-2 rounded-lg glass border border-card-border focus:border-brand-blue focus:outline-none text-xs"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="target-cr-input" className="block text-xs font-bold text-foreground">Target Conv. Rate (%): {targetCr}%</label>
                <input
                  id="target-cr-input"
                  type="number"
                  step="0.1"
                  min="0.1"
                  max="10"
                  value={targetCr}
                  onChange={(e) => setTargetCr(parseFloat(e.target.value) || 0.1)}
                  className="w-full px-3 py-2 rounded-lg glass border border-card-border focus:border-brand-purple focus:outline-none text-xs"
                />
              </div>
            </div>

            {/* Average Deal Size / Order Value */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <label htmlFor="deal-size-slider" className="text-foreground">Average Order / Deal Value: ${dealSize}</label>
                <span className="text-brand-purple">USD</span>
              </div>
              <input
                id="deal-size-slider"
                type="range"
                min="10"
                max="5000"
                step="10"
                value={dealSize}
                onChange={(e) => setDealSize(parseInt(e.target.value))}
                className="w-full h-1.5 bg-card-border rounded-lg appearance-none cursor-pointer accent-brand-purple"
              />
            </div>

          </div>

          {/* Outputs Summary (Right Side) */}
          <div className="md:col-span-5 rounded-xl bg-card-border/30 p-5 border border-card-border flex flex-col justify-between space-y-6">
            
            <div className="space-y-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">Calculated Incremental Revenue</h3>
              
              <div className="space-y-3.5 border-b border-card-border pb-4">
                <div className="flex justify-between text-xs text-brand-muted">
                  <span>Current Monthly Sales:</span>
                  <span className="font-bold text-foreground">${currentRev.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs text-brand-muted">
                  <span>Target Monthly Sales:</span>
                  <span className="font-bold text-foreground">${targetRev.toLocaleString()}</span>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <span className="text-[10px] font-bold text-brand-blue uppercase tracking-wider">Est. Monthly Revenue Lift</span>
                  <div className="text-2xl font-extrabold text-brand-blue mt-1">${monthlyLift.toLocaleString()}</div>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-brand-purple uppercase tracking-wider">Est. Annual Revenue Lift</span>
                  <div className="text-2xl font-extrabold text-brand-purple mt-1">${annualLift.toLocaleString()}</div>
                </div>
              </div>

            </div>

            <div className="pt-2">
              <Link
                href={`/contact?calculator=true&traffic=${traffic}&current=${currentCr}&target=${targetCr}&deal=${dealSize}&lift=${annualLift}`}
                className="w-full py-2.5 rounded-lg bg-gradient-to-r from-brand-blue to-brand-purple text-white text-xs font-bold shadow hover:scale-102 transition-all cursor-pointer flex items-center justify-center space-x-1.5"
              >
                <span>Unlock Growth Blueprint &rarr;</span>
              </Link>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}
