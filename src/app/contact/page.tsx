'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Mail, Phone, Clock, MapPin, Sparkles, CheckCircle, AlertCircle, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

function ContactPageContent() {
  const searchParams = useSearchParams();

  // Pre-fill fields based on URL query parameters
  const queryService = searchParams.get('service') || '';
  const queryConsult = searchParams.get('consultation') || '';
  const queryCalculatedQuote = searchParams.get('quote') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: queryService || 'web-development',
    budget: '$10k - $25k',
    message: queryCalculatedQuote 
      ? `Hi WebGrow, I calculated a custom quote of $${queryCalculatedQuote} utilizing your online calculator. Let's arrange a scoping call.` 
      : queryConsult 
      ? "Hi WebGrow, I'd like to schedule our free 30-minute digital strategy consultation." 
      : ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (queryService) {
      setFormData(prev => ({ ...prev, service: queryService }));
    }
  }, [queryService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setError('Please provide Name, Email, and Phone number.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please provide a valid email format.');
      return;
    }

    setError('');
    setSubmitted(true);

    console.log(`[CRM Lead Capture - Scoping Form]:
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Company: ${formData.company}
      Service: ${formData.service}
      Budget: ${formData.budget}
      Message: ${formData.message}
    `);
    console.log('[Google Analytics Event]: contact_form_submitted');
    console.log('[Meta Pixel Event]: Lead, label: contact_page_scoping');

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.7 }
    });
  };

  const offices = [
    { city: "San Francisco", address: "One Market Plaza, Suite 2200, CA 94105", tel: "+1 (415) 555-2690" },
    { city: "London", address: "30 St Mary Axe (The Gherkin), EC3A 8BF", tel: "+44 20 7555 0122" },
    { city: "Singapore", address: "Marina Bay Financial Centre, Tower 2, 018983", tel: "+65 6755 0199" },
    { city: "Mumbai", address: "Maker Maxity, Bandra Kurla Complex, 400051", tel: "+91 22 5555 0144" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-20 relative">
      {/* Background Decor */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 bg-brand-blue/10 border border-brand-blue/20 px-3 py-1 rounded-full text-brand-blue text-xs font-semibold">
          <Sparkles className="h-4 w-4" />
          <span>Connect With Our Solutions Team</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-foreground via-brand-blue to-brand-purple bg-clip-text text-transparent">
          Let&apos;s Scope Your Project
        </h1>
        <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
          Book our free strategy audit or request a customized project quote. Our engineers reply within 24 hours.
        </p>
      </section>

      {/* Contact Form and Information Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Contact Info (Left Side) */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-foreground">Global Operations Centers</h2>
            <p className="text-xs text-brand-muted leading-relaxed">
              WebGrow maintains distributed team hubs globally, allowing us to align sprints and scoping calls in your timezone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {offices.map((off, idx) => (
              <div key={idx} className="p-4 rounded-xl glass border border-card-border space-y-2 shadow-sm">
                <h3 className="text-xs font-bold text-foreground flex items-center space-x-1.5">
                  <MapPin className="h-4 w-4 text-brand-blue" />
                  <span>{off.city}</span>
                </h3>
                <p className="text-[10px] text-brand-muted leading-relaxed">{off.address}</p>
                <div className="text-[9px] text-brand-blue font-semibold mt-1">{off.tel}</div>
              </div>
            ))}
          </div>

          {/* Business Hours */}
          <div className="p-4.5 rounded-xl glass border border-card-border space-y-3.5 shadow-sm">
            <h3 className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center space-x-2">
              <Clock className="h-4.5 w-4.5 text-brand-purple" />
              <span>Office Scoping Hours</span>
            </h3>
            <p className="text-[10px] text-brand-muted leading-relaxed">
              We monitor databases and SLAs 24/7. Standard business and consultation meetings are scheduled:
            </p>
            <div className="text-xs font-semibold text-foreground">
              Monday - Friday: 8:00 AM - 6:00 PM PST
            </div>
          </div>
        </div>

        {/* Contact Form (Right Side) */}
        <div className="lg:col-span-7 glass border border-card-border p-6 sm:p-8 rounded-2xl shadow-xl">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="mx-auto h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Consultation Request Filed</h3>
              <p className="text-xs text-brand-muted leading-relaxed max-w-lg mx-auto">
                Thank you, {formData.name}. We have logged your request. A senior solutions architect will contact you at <strong>{formData.email}</strong> to schedule our session.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-[10px] uppercase font-bold text-brand-muted mb-1">Full Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg glass border border-card-border focus:border-brand-blue focus:outline-none text-xs"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-[10px] uppercase font-bold text-brand-muted mb-1">Business Email *</label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg glass border border-card-border focus:border-brand-blue focus:outline-none text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-phone" className="block text-[10px] uppercase font-bold text-brand-muted mb-1">Phone Number *</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    placeholder="+1 (415) 555-0100"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg glass border border-card-border focus:border-brand-blue focus:outline-none text-xs"
                  />
                </div>
                <div>
                  <label htmlFor="contact-company" className="block text-[10px] uppercase font-bold text-brand-muted mb-1">Company / Organization</label>
                  <input
                    id="contact-company"
                    type="text"
                    placeholder="Acme Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg glass border border-card-border focus:border-brand-blue focus:outline-none text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-service" className="block text-[10px] uppercase font-bold text-brand-muted mb-1">Service Required</label>
                  <select
                    id="contact-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg glass border border-card-border focus:border-brand-blue focus:outline-none text-xs text-foreground bg-card"
                  >
                    <option value="web-development">Website Development</option>
                    <option value="mobile-app-development">Mobile App Dev</option>
                    <option value="shopify-development">Shopify Storefront</option>
                    <option value="seo-services">SEO Optimization</option>
                    <option value="ppc-advertising">PPC Advertising</option>
                    <option value="branding-design">Branding & Design</option>
                    <option value="ai-automation">AI & Automation</option>
                    <option value="saas-development">SaaS Development</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-budget" className="block text-[10px] uppercase font-bold text-brand-muted mb-1">Project Budget Target</label>
                  <select
                    id="contact-budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg glass border border-card-border focus:border-brand-blue focus:outline-none text-xs text-foreground bg-card"
                  >
                    <option value="Under $10k">Under $10,000</option>
                    <option value="$10k - $25k">$10,000 - $25,000</option>
                    <option value="$25k - $50k">$25,000 - $50,000</option>
                    <option value="$50k+">$50,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-[10px] uppercase font-bold text-brand-muted mb-1">Project Scope Details</label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Describe your tech stack, marketing objectives, or AI integration ideas..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg glass border border-card-border focus:border-brand-blue focus:outline-none text-xs resize-none"
                />
              </div>

              {error && (
                <div className="flex items-center space-x-1.5 text-xs text-red-500 font-semibold">
                  <AlertCircle className="h-3.5 w-3.5" />
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white text-xs font-bold shadow-md shadow-brand-blue/20 hover:scale-102 transition-all cursor-pointer"
              >
                Submit Consultation Scope Form
              </button>

            </form>
          )}
        </div>

      </section>

      {/* Simulated Interactive Map Section */}
      <section className="space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">Global Operations Map</h3>
        <div className="h-72 w-full glass border border-card-border rounded-2xl relative overflow-hidden flex items-center justify-center shadow-lg bg-slate-950">
          <div className="absolute inset-0 tech-grid opacity-30" />
          <div className="relative text-center space-y-4 p-6 z-10 max-w-md">
            <GlobeIcon className="h-10 w-10 text-brand-blue mx-auto animate-pulse-slow" />
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">San Francisco Operations Hub Focus</h4>
            <p className="text-[10px] text-brand-muted leading-relaxed">
              Map server loading simulated. One Market Plaza, Suite 2200, San Francisco. Zoom in to explore physical office configurations.
            </p>
            <div className="text-[9px] font-bold text-brand-purple uppercase">Latitude: 37.7942° N • Longitude: -122.3956° W</div>
          </div>
        </div>
      </section>

    </div>
  );
}

function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 py-16 text-center text-brand-muted">
        Loading contact form configuration...
      </div>
    }>
      <ContactPageContent />
    </Suspense>
  );
}
