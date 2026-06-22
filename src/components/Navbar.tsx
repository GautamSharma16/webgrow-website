'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

const services = [
  { name: 'Website Development',  href: '/services?tab=web-development' },
  { name: 'Shopify Development',  href: '/services?tab=shopify-development' },
  { name: 'Software Development', href: '/services?tab=web-applications' },
  { name: 'SEO Optimization',     href: '/services?tab=seo' },
  { name: 'Digital Marketing',    href: '/services?tab=marketing' },
  { name: 'AI Automation',        href: '/services?tab=ai-agents' },
  { name: 'Mobile Apps',          href: '/services?tab=mobile' },
  { name: 'Branding & UI/UX',     href: '/services?tab=brand-identity' },
];

const WA = 'https://wa.me/919162000000?text=Hello%20WebGrow,%20I%20am%20interested%20in%20your%20services.';

const navLinks = [
  { name: 'Home',         href: '/' },
  { name: 'About',        href: '/about' },
  { name: 'Portfolio',    href: '/portfolio' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog',         href: '/blog' },
  { name: 'Careers',      href: '/careers' },
];

const WhatsAppIcon = () => (
  <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="#25D366">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.436.002 9.851-4.411 9.854-9.847.002-2.634-1.02-5.11-2.881-6.973-1.862-1.863-4.339-2.887-6.978-2.888-5.438 0-9.854 4.413-9.857 9.852-.001 1.516.398 2.996 1.157 4.3l-.973 3.55 3.659-.96z"/>
  </svg>
);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [dropOpen, setDropOpen]     = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 6);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setMobileOpen(false); setDropOpen(false); }, [pathname]);

  const active = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-[0_1px_0_0_#e2e8f0,0_4px_20px_-4px_rgba(0,0,0,0.06)] backdrop-blur-md'
          : 'bg-white/95'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex layout: logo | nav (grows) | actions */}
        <div className="flex items-center h-[68px]">

          {/* LEFT — Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="relative h-9 w-9">
              <Image src="/my_logo_icon.png" alt="" fill className="object-contain" priority />
            </div>
            <div className="relative h-6 w-28">
              <Image src="/my_logo_text.png" alt="WebGrow" fill className="object-contain object-left" priority />
            </div>
          </Link>

          {/* CENTER — Desktop nav links */}
          <nav className="hidden lg:flex items-center justify-center gap-1 flex-1 mx-4">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-[15px] font-medium rounded-lg transition-all duration-200 group whitespace-nowrap ${
                  active(item.href)
                    ? 'text-[#4F46E5]'
                    : 'text-slate-600 hover:text-[#4F46E5] hover:bg-indigo-50/70'
                }`}
              >
                {item.name}
                {/* Animated underline */}
                <span
                  className={`absolute bottom-1 left-4 right-4 h-0.5 rounded-full bg-[#4F46E5] transition-all duration-200 ${
                    active(item.href) ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-60 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}

            {/* Services dropdown */}
            <div
              ref={dropRef}
              className="relative"
              onMouseEnter={() => setDropOpen(true)}
              onMouseLeave={() => setDropOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 text-[15px] font-medium rounded-lg transition-all duration-200 ${
                  active('/services')
                    ? 'text-[#4F46E5]'
                    : 'text-slate-600 hover:text-[#4F46E5] hover:bg-indigo-50/70'
                }`}
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 mt-px transition-transform duration-200 ${dropOpen ? '-rotate-180' : ''}`}
                />
              </button>

              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-52 transition-all duration-150 ${
                  dropOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-1 pointer-events-none'
                }`}
              >
                <div className="bg-white rounded-xl border border-slate-100 shadow-xl shadow-slate-200/60 py-1 overflow-hidden">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="flex items-center px-4 py-2.5 text-[13px] text-slate-600 hover:text-[#4F46E5] hover:bg-indigo-50/60 transition-colors"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* RIGHT — WhatsApp + CTA */}
          <div className="hidden lg:flex items-center justify-end gap-3">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-[15px] font-medium text-slate-600 hover:text-[#25D366] rounded-lg hover:bg-green-50 transition-all duration-200"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
            <Link
              href="/contact?scoping=true"
              className="px-5 py-2.5 rounded-xl text-[15px] font-semibold text-white bg-[#4F46E5] hover:bg-[#4338CA] hover:shadow-lg hover:shadow-indigo-200 hover:-translate-y-px transition-all duration-200 shadow-sm shadow-indigo-200"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="flex lg:hidden ml-auto">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md text-slate-500 hover:bg-slate-100 transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white shadow-lg">
          <nav className="px-3 py-3 space-y-0.5">
            {[...navLinks, { name: 'Services', href: '/services' }, { name: 'Contact', href: '/contact' }].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active(item.href) ? 'bg-indigo-50 text-[#4F46E5]' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 mt-2 border-t border-slate-100 space-y-2">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                <WhatsAppIcon />
                WhatsApp Us
              </a>
              <Link
                href="/contact?scoping=true"
                className="block text-center w-full px-4 py-2.5 rounded-lg bg-[#4F46E5] text-white font-semibold text-sm"
              >
                Get a Free Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}