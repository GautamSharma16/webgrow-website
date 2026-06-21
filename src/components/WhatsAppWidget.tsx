'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppWidget() {
  const phone = '919162000000'; // Business WhatsApp contact
  const defaultText = "Hi WebGrow Technologies, I would like to scope a project with you.";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(defaultText)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer group"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse Ping Rings */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-60 animate-ping pointer-events-none" />
        
        {/* Icon */}
        <MessageCircle className="h-7 w-7 relative z-10" fill="currentColor" />
        
        {/* Hover Tooltip (Desktop) */}
        <span className="absolute right-16 bg-[#0B1F3A] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl whitespace-nowrap border border-gray-700 pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
