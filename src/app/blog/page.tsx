'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, BookOpen, Clock, User, TrendingUp, ArrowRight, Mail, Send, Tag } from 'lucide-react';
import { blogData } from '@/data/siteData';
import ScrollReveal from '@/components/ScrollReveal';

const categories = [
  { name: 'All', count: blogData.length },
  { name: 'Technology', count: blogData.filter(p => p.category === 'Technology' || p.category === 'Web Development').length },
  { name: 'AI', count: blogData.filter(p => p.category === 'AI').length },
  { name: 'SEO', count: blogData.filter(p => p.category === 'SEO').length },
  { name: 'Marketing', count: blogData.filter(p => p.category === 'Marketing' || p.category === 'Business Growth').length },
  { name: 'Case Studies', count: blogData.filter(p => p.category === 'Case Studies').length },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [email, setEmail] = useState('');

  const featuredPost = blogData[0];
  const trendingPosts = blogData.slice(0, 3);

  const filteredPosts = blogData.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory =
      activeCategory === 'All' ||
      post.category === activeCategory ||
      (activeCategory === 'Technology' && (post.category === 'Technology' || post.category === 'Web Development')) ||
      (activeCategory === 'Marketing' && (post.category === 'Marketing' || post.category === 'Business Growth'));
    return matchesSearch && matchesCategory && post.id !== featuredPost.id;
  });

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <div className="overflow-hidden">
      {/* Featured Hero Article */}
      <section className="hero-enterprise py-12 lg:py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#0B1F3A] text-white text-[11px] font-bold uppercase tracking-wider">
                    Featured
                  </span>
                  <span className="text-[12px] text-[#6b7280] flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {featuredPost.readTime}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0B1F3A] font-heading leading-tight">
                  <Link href={`/blog/${featuredPost.slug}`} className="hover:text-[#153D77] transition-colors">
                    {featuredPost.title}
                  </Link>
                </h1>
                <p className="text-[15px] text-[#6b7280] leading-relaxed max-w-2xl">{featuredPost.summary}</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Image src={featuredPost.author.avatar} alt={featuredPost.author.name} width={36} height={36} className="rounded-full object-cover" />
                    <div>
                      <div className="text-sm font-semibold text-[#0B1F3A]">{featuredPost.author.name}</div>
                      <div className="text-[11px] text-[#6b7280]">{featuredPost.author.role}</div>
                    </div>
                  </div>
                  <span className="text-[12px] text-[#6b7280]">{featuredPost.date}</span>
                </div>
                <Link href={`/blog/${featuredPost.slug}`} className="btn-primary inline-flex">
                  Read Full Article <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] shadow-xl bg-[#0B1F3A]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#153D77] to-[#0B1F3A] p-8 flex flex-col justify-end">
                    <Tag className="h-5 w-5 text-[#D4AF37] mb-3" />
                    <div className="text-[#D4AF37] text-xs font-bold uppercase tracking-wider">{featuredPost.category}</div>
                    <div className="text-white/80 text-sm mt-2 line-clamp-3">{featuredPost.summary}</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Main Content */}
          <div className="lg:col-span-8 space-y-10">

            {/* Search & Filter */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="relative w-full sm:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6b7280]" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-[#F8F9FA] focus:border-[#153D77] focus:outline-none text-sm"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => setActiveCategory(cat.name)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      activeCategory === cat.name
                        ? 'bg-[#0B1F3A] text-white'
                        : 'bg-white border border-gray-200 text-[#6b7280] hover:border-[#0B1F3A]/30'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Article Grid — Magazine Layout */}
            <div className="space-y-8">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post, idx) => (
                  <ScrollReveal key={post.id} delay={idx * 50}>
                    <article className={`group ${idx === 0 ? '' : ''}`}>
                      <div className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="sm:w-48 shrink-0">
                          <div className="relative rounded-xl overflow-hidden aspect-[16/10] sm:aspect-square bg-gradient-to-br from-[#153D77]/10 to-[#0B1F3A]/10">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <BookOpen className="h-8 w-8 text-[#153D77]/30" />
                            </div>
                          </div>
                        </div>
                        <div className="flex-grow space-y-3">
                          <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-wider">
                            <span className="text-[#153D77]">{post.category}</span>
                            <span className="text-[#6b7280] flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime}</span>
                            <span className="text-[#6b7280]">{post.date}</span>
                          </div>
                          <h2 className="text-lg sm:text-xl font-bold text-[#0B1F3A] font-heading group-hover:text-[#153D77] transition-colors">
                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                          </h2>
                          <p className="text-[14px] text-[#6b7280] leading-relaxed line-clamp-2">{post.summary}</p>
                          <div className="flex items-center justify-between pt-2">
                            <div className="flex items-center gap-2">
                              <Image src={post.author.avatar} alt={post.author.name} width={28} height={28} className="rounded-full object-cover" />
                              <div>
                                <div className="text-[12px] font-semibold text-[#0B1F3A]">{post.author.name}</div>
                                <div className="text-[10px] text-[#6b7280]">{post.author.role}</div>
                              </div>
                            </div>
                            <Link href={`/blog/${post.slug}`} className="text-[13px] font-semibold text-[#153D77] hover:text-[#D4AF37] flex items-center gap-1 transition-colors">
                              Read <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {post.tags.slice(0, 4).map((tag) => (
                              <span key={tag} className="px-2 py-0.5 rounded-md bg-[#F8F9FA] text-[10px] text-[#6b7280] font-medium">#{tag.replace(/\s+/g, '')}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </article>
                  </ScrollReveal>
                ))
              ) : (
                <div className="py-16 text-center text-[#6b7280]">No articles found matching your filters.</div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">

            {/* Trending */}
            <ScrollReveal>
              <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm space-y-5">
                <h3 className="text-sm font-bold text-[#0B1F3A] flex items-center gap-2 uppercase tracking-wider">
                  <TrendingUp className="h-4 w-4 text-[#D4AF37]" /> Trending
                </h3>
                <div className="space-y-4">
                  {trendingPosts.map((post, idx) => (
                    <Link key={post.id} href={`/blog/${post.slug}`} className="flex gap-3 group">
                      <span className="text-2xl font-extrabold text-[#D4AF37]/40 font-heading leading-none">{String(idx + 1).padStart(2, '0')}</span>
                      <div>
                        <div className="text-[13px] font-semibold text-[#0B1F3A] group-hover:text-[#153D77] transition-colors line-clamp-2">{post.title}</div>
                        <div className="text-[11px] text-[#6b7280] mt-1 flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Categories */}
            <ScrollReveal delay={80}>
              <div className="p-6 rounded-2xl bg-[#F8F9FA] border border-gray-100 space-y-4">
                <h3 className="text-sm font-bold text-[#0B1F3A] uppercase tracking-wider">Popular Categories</h3>
                <div className="space-y-2">
                  {categories.filter(c => c.name !== 'All').map((cat) => (
                    <button
                      key={cat.name}
                      onClick={() => setActiveCategory(cat.name)}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm text-[#6b7280] hover:bg-white hover:text-[#0B1F3A] transition-colors cursor-pointer"
                    >
                      <span>{cat.name}</span>
                      <span className="text-[11px] bg-white px-2 py-0.5 rounded-full font-semibold">{cat.count}</span>
                    </button>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Author Spotlight */}
            <ScrollReveal delay={120}>
              <div className="p-6 rounded-2xl bg-[#0B1F3A] text-white space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#D4AF37] flex items-center gap-2">
                  <User className="h-4 w-4" /> Featured Author
                </h3>
                <div className="flex items-center gap-3">
                  <Image src={featuredPost.author.avatar} alt={featuredPost.author.name} width={48} height={48} className="rounded-full object-cover border-2 border-[#D4AF37]/30" />
                  <div>
                    <div className="font-bold">{featuredPost.author.name}</div>
                    <div className="text-[12px] text-white/60">{featuredPost.author.role}</div>
                  </div>
                </div>
                <p className="text-[13px] text-white/60 leading-relaxed">
                  Writing about AI automation, enterprise workflows, and the future of Indian tech businesses.
                </p>
              </div>
            </ScrollReveal>

            {/* Newsletter */}
            <ScrollReveal delay={160}>
              <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm space-y-4">
                <h3 className="text-sm font-bold text-[#0B1F3A] flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#D4AF37]" /> Newsletter
                </h3>
                <p className="text-[13px] text-[#6b7280] leading-relaxed">
                  Bi-weekly insights on web development, SEO, and business growth. Join 2,000+ subscribers.
                </p>
                <form onSubmit={handleNewsletter} className="space-y-2">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-[#F8F9FA] text-sm focus:border-[#153D77] focus:outline-none"
                    required
                  />
                  <button type="submit" className="w-full btn-gold !py-2.5 justify-center text-sm">
                    Subscribe <Send className="h-3.5 w-3.5" />
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </aside>
        </div>
      </div>
    </div>
  );
}
