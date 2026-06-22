'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BookOpen, Download, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function LeadMagnet() {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const shown = localStorage.getItem('lead-magnet-shown');
    if (!shown) {
      const timer = setTimeout(() => {
        setShow(true);
        localStorage.setItem('lead-magnet-shown', 'true');
        console.log('[Google Analytics Event]: lead_magnet_triggered');
      }, 20000); // 20 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please provide your email.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email address format.');
      return;
    }

    setError('');
    setSubmitted(true);
    console.log(`[CRM Submission - Lead Capture]: Email: ${email}, Source: Playbook Lead Magnet`);
    console.log(`[Google Analytics Event]: lead_captured, label: playbook_lead_magnet`);
    console.log(`[Meta Pixel Event]: Lead, label: playbook_lead_magnet`);

    confetti({
      particleCount: 70,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
    confetti({
      particleCount: 70,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-6 pointer-events-none">
          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, x: 100, y: 0, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.95 }}
            className="pointer-events-auto max-w-sm w-full glass border border-card-border rounded-xl shadow-2xl p-5 overflow-hidden relative"
          >
            {/* Top decorative glow */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#153D77] to-[#D4AF37]" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3.5 right-3.5 p-1 rounded-full hover:bg-card-border text-brand-muted hover:text-foreground transition-all cursor-pointer"
            >
              <X className="h-3.5 w-3.5" />
            </button>

            {submitted ? (
              <div className="text-center py-4 space-y-3">
                <div className="mx-auto h-10 w-10 rounded-full bg-[#0B1F3A]/10 text-[#153D77] flex items-center justify-center">
                  <Download className="h-5 w-5 animate-bounce" />
                </div>
                <h4 className="text-sm font-bold text-foreground">Download Ready!</h4>
                <p className="text-[10px] text-brand-muted leading-relaxed">
                  Thank you! We have sent a direct PDF link of the <strong>2026 Digital Growth Playbook</strong> to <strong>{email}</strong>.
                </p>
                <a
                  href="#download-playbook-pdf"
                  onClick={handleClose}
                  className="inline-block px-4 py-1.5 rounded-lg bg-[#0B1F3A] hover:bg-[#153D77] text-white text-[10px] font-semibold transition-all cursor-pointer"
                >
                  Download Instant Copy
                </a>
              </div>
            ) : (
              <div className="space-y-3.5">
                <div className="flex items-center space-x-2 text-[#153D77]">
                  <BookOpen className="h-4 w-4" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Free Ebook</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground leading-snug">
                    Unlock the 2026 Digital Growth Playbook
                  </h4>
                  <p className="text-[10px] text-brand-muted mt-1 leading-relaxed">
                    Download our blueprint outlining scaling frameworks, AI agent templates, and SEO structures used to scale multi-million dollar startups.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-2">
                  <input
                    type="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg glass border border-card-border focus:border-brand-blue focus:outline-none text-[11px]"
                  />
                  {error && (
                    <div className="flex items-center space-x-1 text-[10px] text-red-500 font-medium">
                      <AlertCircle className="h-3 w-3" />
                      <span>{error}</span>
                    </div>
                  )}
                  <button
                    type="submit"
                    className="w-full py-1.5 rounded-lg bg-[#0B1F3A] hover:bg-[#153D77] text-white text-[10px] font-semibold shadow transition-all cursor-pointer"
                  >
                    Send PDF Blueprint &rarr;
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
