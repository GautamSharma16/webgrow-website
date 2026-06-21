'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Sparkles, BookOpen, User, Calendar, Clock, ChevronRight } from 'lucide-react';
import { blogData } from '@/data/siteData';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Technology', 'Web Development', 'AI', 'Marketing', 'SEO', 'Business Growth'];

  const filteredPosts = blogData.filter((post) => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16 relative">
      {/* Background Decor */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 bg-brand-blue/10 border border-brand-blue/20 px-3 py-1 rounded-full text-brand-blue text-xs font-semibold">
          <BookOpen className="h-4 w-4" />
          <span>Insights & Industry Analysis</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-foreground via-brand-blue to-brand-purple bg-clip-text text-transparent">
          The WebGrow Tech Journal
        </h1>
        <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
          Read articles on React performance benchmarks, deploying autonomous AI agents, enterprise search scaling, and product marketing.
        </p>
      </section>

      {/* Search and Category Filter panel */}
      <section className="flex flex-col md:flex-row gap-4 items-center justify-between border-b border-card-border pb-8">
        
        {/* Category triggers */}
        <div className="flex flex-wrap gap-1.5 order-2 md:order-1">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-brand-blue text-white shadow-sm'
                    : 'glass border border-card-border text-foreground hover:bg-card-border/60'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-72 order-1 md:order-2">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl glass border border-card-border focus:border-brand-blue focus:outline-none text-xs"
          />
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-brand-muted" />
        </div>

      </section>

      {/* Blog Articles Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <article
              key={post.id}
              className="glass rounded-2xl overflow-hidden border border-card-border flex flex-col justify-between shadow-md"
            >
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center text-[10px] text-brand-muted uppercase font-bold tracking-wider">
                  <span className="text-brand-blue">{post.category}</span>
                  <span className="flex items-center space-x-1"><Clock className="h-3 w-3 shrink-0" /><span>{post.readTime}</span></span>
                </div>
                
                <h3 className="text-base font-bold text-foreground hover:text-brand-blue transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-xs text-brand-muted leading-relaxed line-clamp-3">
                  {post.summary}
                </p>

                <div className="flex flex-wrap gap-1">
                  {post.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-card-border text-[9px] text-brand-muted font-medium">
                      #{tag.replace(/\s+/g, '')}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Footer */}
              <div className="p-6 bg-card-border/30 border-t border-card-border flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="h-7 w-7 rounded-full object-cover shrink-0"
                  />
                  <div>
                    <div className="text-[10px] font-bold text-foreground leading-tight">{post.author.name}</div>
                    <div className="text-[8px] text-brand-muted mt-0.5 leading-none">{post.author.role}</div>
                  </div>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="p-1.5 rounded-lg bg-card border border-card-border text-brand-muted hover:text-brand-blue hover:border-brand-blue/30 transition-all"
                  aria-label="Read Full Article"
                >
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>

            </article>
          ))
        ) : (
          <div className="col-span-full py-12 text-center text-xs text-brand-muted">
            No articles found matching your query filters.
          </div>
        )}
      </section>

      {/* Newsletter Magnet Card */}
      <section className="glass border border-card-border p-8 rounded-2xl shadow-xl max-w-3xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-base font-bold text-foreground">Subscribe to Tech & growth Briefings</h3>
          <p className="text-xs text-brand-muted leading-relaxed">
            Get bi-weekly technical blueprints and optimization studies directly in your inbox.
          </p>
        </div>
        <div className="w-full md:w-fit shrink-0">
          <Link
            href="/contact?subscribe=newsletter"
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white text-xs font-bold block text-center hover:scale-102 transition-all cursor-pointer"
          >
            Join Mailing List
          </Link>
        </div>
      </section>

    </div>
  );
}
