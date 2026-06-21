'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, Clock, DollarSign, GraduationCap, Users, Heart, Star, CheckCircle, AlertCircle } from 'lucide-react';
import { jobsData } from '@/data/siteData';
import confetti from 'canvas-confetti';

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<string>('react-developer');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    portfolio: '',
    coverLetter: ''
  });
  const [error, setError] = useState('');

  const benefitsList = [
    { title: "Remote Work", desc: "Work from anywhere in the world with flexible hours." },
    { title: "Competitive Salary", desc: "Paid in USD/Euro or your native currency, matched to global benchmarks." },
    { title: "Learning Budget", desc: "$2,000 yearly stipend for books, online courses, and certificates." },
    { title: "Performance Bonus", desc: "Annual bonuses tied to direct team achievements and company metrics." },
    { title: "Health Benefits", desc: "Full medical, dental, and vision insurance policies." },
    { title: "Modern Setup", desc: "High-spec laptop (MacBook Pro/ThinkPad) and workspace accessories stipend." }
  ];

  const positions = [
    { id: 'react-developer', title: 'Senior React Developer', dept: 'Engineering' },
    { id: 'ai-engineer', title: 'AI & Automation Engineer', dept: 'Engineering' },
    { id: 'seo-manager', title: 'Technical SEO Manager', dept: 'Marketing' },
    { id: 'ui-designer', title: 'Senior UI/UX Designer', dept: 'Design' },
    { id: 'project-manager', title: 'Technical Project Manager', dept: 'Management' },
    { id: 'hr-executive', title: 'People & HR Lead', dept: 'HR' }
  ];

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setError('Please fill in Name, Email, and Phone.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Invalid email address format.');
      return;
    }

    setError('');
    setSubmitted(true);
    console.log(`[CRM Recruitment Application]: Position: ${selectedJob}, Candidate: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}, LinkedIn: ${formData.linkedin}, Portfolio: ${formData.portfolio}`);
    console.log('[Google Analytics Event]: job_application_submitted');

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 }
    });
  };

  const activeJobData = jobsData.find(j => j.id === selectedJob) || jobsData[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-24 relative">
      {/* Background Decor */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Section */}
      <section className="text-center space-y-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center space-x-2 bg-brand-purple/10 border border-brand-purple/20 px-3 py-1 rounded-full text-brand-purple text-xs font-semibold">
          <Briefcase className="h-4 w-4" />
          <span>Careers at WebGrow</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-foreground via-brand-blue to-brand-purple bg-clip-text text-transparent">
          Join the Future of Technology
        </h1>
        <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
          Build high-performance web applications, scale enterprise clouds, and construct autonomous AI agent networks with a passionate, global team.
        </p>
      </section>

      {/* Why Work With Us */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground">Why Work With WebGrow?</h2>
          <p className="text-xs text-brand-muted mt-2">
            We prioritize work flexibility, continuous professional growth, and premium compensation packages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitsList.map((ben, idx) => (
            <div key={idx} className="p-5 rounded-xl glass border border-card-border space-y-3">
              <h3 className="text-xs font-bold text-foreground flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                <span>{ben.title}</span>
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed">{ben.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Open Positions & Description */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Positions List */}
        <div className="lg:col-span-4 space-y-2.5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-foreground mb-4 pl-1">
            Open Positions
          </h3>
          <div className="space-y-2">
            {positions.map((pos) => {
              const isActive = pos.id === selectedJob;
              return (
                <button
                  key={pos.id}
                  onClick={() => {
                    setSelectedJob(pos.id);
                    setSubmitted(false);
                  }}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-brand-blue/10 border-brand-blue/30 text-brand-blue'
                      : 'glass border-card-border text-foreground hover:bg-card-border'
                  }`}
                >
                  <div className="text-xs font-bold">{pos.title}</div>
                  <div className="text-[9px] text-brand-muted mt-1 uppercase font-semibold">{pos.dept}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Detailed Position Description */}
        <div className="lg:col-span-8 glass border border-card-border p-6 sm:p-8 rounded-2xl shadow-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeJobData.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <div className="border-b border-card-border pb-5 space-y-2">
                <h2 className="text-xl font-bold text-foreground">{activeJobData.title}</h2>
                <div className="flex flex-wrap gap-4 text-[10px] text-brand-muted font-semibold">
                  <span className="flex items-center space-x-1"><MapPin className="h-3.5 w-3.5 text-brand-blue" /><span>{activeJobData.location}</span></span>
                  <span className="flex items-center space-x-1"><Clock className="h-3.5 w-3.5 text-brand-purple" /><span>{activeJobData.type}</span></span>
                  <span className="flex items-center space-x-1"><GraduationCap className="h-3.5 w-3.5 text-cyan-400" /><span>{activeJobData.experience}</span></span>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase text-foreground">Role Overview</h3>
                <p className="text-xs text-brand-muted leading-relaxed">
                  {activeJobData.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-card-border">
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase text-foreground">Requirements</h3>
                  <ul className="space-y-2">
                    {activeJobData.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs text-brand-muted">
                        <span className="text-brand-blue font-bold mt-0.5">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase text-foreground">Role Benefits</h3>
                  <ul className="space-y-2">
                    {activeJobData.benefits.map((ben, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs text-brand-muted">
                        <span className="text-brand-purple font-bold mt-0.5">✓</span>
                        <span>{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </section>

      {/* Job Application Form */}
      <section id="apply-form" className="max-w-2xl mx-auto glass border border-card-border p-6 sm:p-8 rounded-2xl shadow-xl space-y-6">
        <div className="text-center space-y-2 border-b border-card-border pb-5">
          <h2 className="text-lg font-bold text-foreground">Submit Your Application</h2>
          <p className="text-[10px] text-brand-muted">
            You are applying for the position of <strong>{activeJobData.title}</strong>.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="mx-auto h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
              <CheckCircle className="h-6 w-6" />
            </div>
            <h3 className="text-base font-bold text-foreground">Application Received</h3>
            <p className="text-xs text-brand-muted leading-relaxed">
              Thank you, {formData.name}. We have successfully received your application file. Our recruiter will review your profile and reach out within 3 business days.
            </p>
          </div>
        ) : (
          <form onSubmit={handleApply} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase font-bold text-brand-muted mb-1">Full Name *</label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg glass border border-card-border focus:border-brand-blue focus:outline-none text-xs"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase font-bold text-brand-muted mb-1">Email Address *</label>
                <input
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
                <label className="block text-[10px] uppercase font-bold text-brand-muted mb-1">Phone Number *</label>
                <input
                  type="tel"
                  placeholder="+1 (415) 555-0199"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg glass border border-card-border focus:border-brand-blue focus:outline-none text-xs"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase font-bold text-brand-muted mb-1">LinkedIn Profile URL</label>
                <input
                  type="url"
                  placeholder="https://linkedin.com/in/username"
                  value={formData.linkedin}
                  onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg glass border border-card-border focus:border-brand-blue focus:outline-none text-xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase font-bold text-brand-muted mb-1">Portfolio or GitHub URL</label>
              <input
                type="url"
                placeholder="https://github.com/username"
                value={formData.portfolio}
                onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                className="w-full px-3 py-2 rounded-lg glass border border-card-border focus:border-brand-blue focus:outline-none text-xs"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase font-bold text-brand-muted mb-1">Brief Cover Letter</label>
              <textarea
                rows={4}
                placeholder="Tell us why you are interested in WebGrow..."
                value={formData.coverLetter}
                onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                className="w-full px-3 py-2 rounded-lg glass border border-card-border focus:border-brand-blue focus:outline-none text-xs resize-none"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase font-bold text-brand-muted mb-1">Resume File Upload (Mock)</label>
              <div className="border border-dashed border-card-border hover:border-brand-blue rounded-lg p-4 text-center cursor-pointer transition-all">
                <span className="text-[10px] text-brand-muted">Click or drag PDF resume here to attach</span>
              </div>
            </div>

            {error && (
              <div className="flex items-center space-x-1.5 text-xs text-red-500 font-semibold">
                <AlertCircle className="h-3.5 w-3.5" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-brand-blue to-brand-purple text-white text-xs font-bold shadow hover:scale-102 transition-all cursor-pointer"
            >
              Submit My Application
            </button>
          </form>
        )}
      </section>

    </div>
  );
}
