'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Send, Check, Shield, FileLock2, Globe, Linkedin, Twitter, Github, Facebook } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please provide a valid email address.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please provide a valid email address format.');
      return;
    }

    setError('');
    setSubscribed(true);
    setEmail('');
    
    console.log(`[Google Analytics Event]: newsletter_signup, email: ${email}`);

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.95 }
    });
  };

  return (
    <footer className="relative bg-black text-white border-t border-white/10 pt-16 pb-8 z-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          
          {/* Column 1: Company Profile */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center">
              <div className="relative h-9 w-36">
                <Image
                  src="/my_logo.png"
                  alt="WebGrow Logo"
                  fill
                  className="object-contain object-left brightness-0 invert"
                />
              </div>
            </Link>
            <p className="text-xs text-gray-300 leading-relaxed font-normal">
              WebGrow Technologies is a premium IT consulting and digital growth partner. We build scalable software, custom web platforms, and automated marketing funnels that drive enterprise value.
            </p>
            <div className="flex space-x-3 pt-1">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 transition-all" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 transition-all" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 transition-all" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 transition-all" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Services Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 font-heading">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              <li><Link href="/services?tab=web-development" className="text-xs text-gray-400 hover:text-white transition-colors">Website Development</Link></li>
              <li><Link href="/services?tab=shopify-development" className="text-xs text-gray-400 hover:text-white transition-colors">Shopify Development</Link></li>
              <li><Link href="/services?tab=web-applications" className="text-xs text-gray-400 hover:text-white transition-colors">Software Development</Link></li>
              <li><Link href="/services?tab=seo" className="text-xs text-gray-400 hover:text-white transition-colors">Search Engine Optimization</Link></li>
              <li><Link href="/services?tab=brand-identity" className="text-xs text-gray-400 hover:text-white transition-colors">Branding &amp; UI/UX Design</Link></li>
              <li><Link href="/services?tab=ai-agents" className="text-xs text-gray-400 hover:text-white transition-colors">AI &amp; Operations Automation</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact & Corporate Office */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 font-heading">
              Get In Touch
            </h3>
            <ul className="space-y-3 text-xs text-gray-400">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-indigo-400 shrink-0" />
                <span className="leading-relaxed">
                  One Market Plaza, Suite 2200, San Francisco, CA 94105 <br />
                  <span className="text-[10px] text-gray-500">Hub Office: Bandra Kurla Complex, Mumbai, India</span>
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-indigo-400 shrink-0" />
                <a href="tel:+14155552690" className="hover:text-white transition-colors">+1 (415) 555-2690</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-indigo-400 shrink-0" />
                <a href="mailto:solutions@webgrowtech.com" className="hover:text-white transition-colors">solutions@webgrowtech.com</a>
              </li>
              <li className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-indigo-400 shrink-0" />
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 font-heading">
              Newsletter
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed font-normal">
              Subscribe to get bi-weekly updates on software frameworks, SEO algorithms, and business growth studies.
            </p>
            {subscribed ? (
              <div className="flex items-center space-x-2 text-xs text-emerald-400 bg-emerald-500/10 p-3 rounded-lg border border-emerald-500/20">
                <Check className="h-4 w-4" />
                <span>Subscribed successfully.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError('');
                    }}
                    className="w-full pl-3 pr-10 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:border-indigo-500 focus:outline-none text-xs text-white placeholder-gray-500"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-2.5 rounded bg-[#4F46E5] hover:bg-[#4338CA] text-white flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Subscribe"
                  >
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </div>
                {error && <p className="text-[10px] text-red-400 font-medium pl-1">{error}</p>}
              </form>
            )}
          </div>

        </div>

        {/* Footer Meta & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[11px] text-gray-500 space-y-4 md:space-y-0">
          <div>
            &copy; {new Date().getFullYear()} WebGrow Technologies LLC. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link href="/about" className="hover:text-white flex items-center space-x-1 transition-colors">
              <Shield className="h-3.5 w-3.5 text-indigo-400" />
              <span>Privacy Policy</span>
            </Link>
            <Link href="/about" className="hover:text-white flex items-center space-x-1 transition-colors">
              <FileLock2 className="h-3.5 w-3.5 text-indigo-400" />
              <span>Terms of Service</span>
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
