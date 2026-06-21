'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, X } from 'lucide-react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => setVisible(true), 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
    console.log('[Google Analytics Event]: accept_cookies');
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-6 left-6 z-50 max-w-sm w-full p-4 rounded-xl glass border border-card-border shadow-2xl flex flex-col space-y-3"
        >
          <div className="flex items-start justify-between">
            <div className="flex space-x-2.5">
              <div className="mt-0.5 p-1 rounded bg-brand-blue/10 text-brand-blue">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-foreground">Cookie Consent</h4>
                <p className="text-[10px] text-brand-muted mt-1 leading-relaxed">
                  We use cookies to analyze web traffic and optimize your website experience. By clicking &quot;Accept&quot;, you consent to our use of analytics.
                </p>
              </div>
            </div>
            <button
              onClick={() => setVisible(false)}
              className="text-brand-muted hover:text-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              onClick={() => setVisible(false)}
              className="px-3 py-1.5 rounded-lg text-[10px] text-brand-muted hover:bg-card-border transition-all"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-3.5 py-1.5 rounded-lg text-[10px] bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold transition-all cursor-pointer"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
