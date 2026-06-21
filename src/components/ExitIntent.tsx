'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, AlertCircle, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ExitIntent() {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Check if mouse left from the top boundary of the page
      if (e.clientY <= 10) {
        const shown = sessionStorage.getItem('exit-intent-shown');
        if (!shown) {
          setShow(true);
          sessionStorage.setItem('exit-intent-shown', 'true');
          console.log('[Google Analytics Event]: exit_intent_triggered');
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setError('Please fill in all fields.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Invalid email address.');
      return;
    }

    setError('');
    setSubmitted(true);
    console.log(`[CRM Submission - Lead Capture]: Name: ${formData.name}, Email: ${formData.email}, Source: Exit Intent Audit`);
    console.log(`[Google Analytics Event]: lead_captured, label: exit_intent_audit`);
    console.log(`[Meta Pixel Event]: Lead, label: exit_intent_audit`);

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            className="relative max-w-md w-full glass border border-card-border rounded-2xl shadow-2xl p-6 overflow-hidden z-10"
          >
            {/* Background glowing decorations */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-36 h-36 rounded-full bg-brand-blue/20 blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-36 h-36 rounded-full bg-brand-purple/20 blur-2xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-card-border text-brand-muted hover:text-foreground transition-all cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>

            {submitted ? (
              <div className="text-center py-6 space-y-4">
                <div className="mx-auto h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Audit Claimed!</h3>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Thank you, {formData.name}. Our senior solutions architect will contact you at <strong>{formData.email}</strong> within 24 hours to schedule your strategy review.
                </p>
                <button
                  onClick={handleClose}
                  className="px-6 py-2 rounded-lg bg-brand-blue text-white text-xs font-semibold hover:bg-brand-blue/90 transition-all cursor-pointer"
                >
                  Back to Site
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-brand-purple">
                  <Sparkles className="h-5 w-5 animate-pulse-slow" />
                  <span className="text-xs font-bold uppercase tracking-wider">Exclusive Offer</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground tracking-tight">
                    Wait! Get a Free AI & Tech Audit
                  </h3>
                  <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                    Identify bottlenecks in your engineering pipeline or performance marketing. Get a custom report from our VP of Architecture worth $1,500.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3 pt-2">
                  <div>
                    <label htmlFor="exit-name" className="block text-[10px] uppercase font-semibold text-brand-muted mb-1">
                      Full Name
                    </label>
                    <input
                      id="exit-name"
                      type="text"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg glass border border-card-border focus:border-brand-blue focus:outline-none text-xs"
                    />
                  </div>
                  <div>
                    <label htmlFor="exit-email" className="block text-[10px] uppercase font-semibold text-brand-muted mb-1">
                      Business Email
                    </label>
                    <input
                      id="exit-email"
                      type="email"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg glass border border-card-border focus:border-brand-blue focus:outline-none text-xs"
                    />
                  </div>
                  {error && (
                    <div className="flex items-center space-x-1.5 text-xs text-red-500 font-medium">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>{error}</span>
                    </div>
                  )}
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-lg bg-gradient-to-r from-brand-blue to-brand-purple text-white text-xs font-semibold shadow-md shadow-brand-blue/20 hover:scale-102 transition-all cursor-pointer mt-1"
                  >
                    Claim My Free Audit &rarr;
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
