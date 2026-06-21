'use client';

import React, { use, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { blogData } from '@/data/siteData';
import confetti from 'canvas-confetti';

interface CommentItem {
  id: string;
  author: string;
  date: string;
  text: string;
}

export default function BlogPostDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);

  // Find corresponding post
  const post = blogData.find((p) => p.slug === slug);

  // Client comments state initialized from static data
  const [comments, setComments] = useState<CommentItem[]>(post?.comments || []);
  const [newComment, setNewComment] = useState({ name: '', text: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-xl font-bold text-foreground">Article Not Found</h2>
        <p className="text-xs text-brand-muted">The requested blog post does not exist or has been archived.</p>
        <Link href="/blog" className="text-brand-blue font-bold text-xs hover:underline flex items-center justify-center space-x-1">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Tech Journal</span>
        </Link>
      </div>
    );
  }

  // Suggest related posts (same category or general)
  const relatedPosts = blogData
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.name || !newComment.text) {
      setError('Please provide both your name and comment text.');
      return;
    }

    setError('');
    const addedComment: CommentItem = {
      id: `c-${Date.now()}`,
      author: newComment.name,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      text: newComment.text
    };

    setComments(prev => [...prev, addedComment]);
    setNewComment({ name: '', text: '' });
    setSubmitted(true);

    console.log(`[Blog Comment Submission]: Post: ${post.title}, Author: ${addedComment.author}, Comment: ${addedComment.text}`);

    // Trigger subtle success animation
    confetti({
      particleCount: 20,
      spread: 40,
      origin: { y: 0.9 }
    });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 relative">
      {/* Back to Blog */}
      <div>
        <Link
          href="/blog"
          className="text-xs font-bold text-brand-muted hover:text-brand-blue transition-colors flex items-center space-x-1.5"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Tech Journal</span>
        </Link>
      </div>

      {/* Article Header info */}
      <section className="space-y-6">
        <span className="px-2.5 py-1 rounded bg-brand-blue/10 text-brand-blue text-[10px] font-bold uppercase tracking-wider">
          {post.category}
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-foreground leading-tight tracking-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-[10px] text-brand-muted font-semibold border-b border-card-border pb-6">
          <span className="flex items-center space-x-1">
            <Calendar className="h-4 w-4 text-brand-blue" />
            <span>{post.date}</span>
          </span>
          <span className="flex items-center space-x-1">
            <Clock className="h-4 w-4 text-brand-purple" />
            <span>{post.readTime}</span>
          </span>
          <span className="flex items-center space-x-1">
            <MessageSquare className="h-4 w-4 text-cyan-400" />
            <span>{comments.length} Comments</span>
          </span>
        </div>
      </section>

      {/* Author Bio Panel */}
      <section className="p-4 rounded-xl glass border border-card-border flex items-center space-x-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.author.avatar}
          alt={post.author.name}
          className="h-10 w-10 rounded-full object-cover shrink-0"
        />
        <div>
          <div className="text-xs font-bold text-foreground">{post.author.name}</div>
          <p className="text-[10px] text-brand-muted mt-0.5 leading-relaxed">
            {post.author.role} • Technical Contributor at WebGrow Technologies.
          </p>
        </div>
      </section>

      {/* Article Content Body (simulated Markdown rendering) */}
      <section className="prose prose-sm dark:prose-invert max-w-none text-xs sm:text-sm text-brand-muted leading-relaxed space-y-6 border-b border-card-border pb-12">
        {post.content.split('\n\n').map((para, idx) => {
          if (para.startsWith('###')) {
            return (
              <h3 key={idx} className="text-sm font-bold text-foreground pt-4 flex items-center space-x-1.5 uppercase tracking-wider">
                <span className="h-1 bg-brand-blue w-2 rounded" />
                <span>{para.replace('###', '').trim()}</span>
              </h3>
            );
          }
          if (para.startsWith('1.') || para.startsWith('-')) {
            return (
              <ul key={idx} className="list-disc pl-5 space-y-2">
                {para.split('\n').map((li, idy) => (
                  <li key={idy} className="leading-relaxed">
                    {li.replace(/^[0-9\-.\s]+/, '').trim()}
                  </li>
                ))}
              </ul>
            );
          }
          return (
            <p key={idx} className="leading-relaxed">
              {para}
            </p>
          );
        })}
      </section>

      {/* Comments section board */}
      <section className="space-y-6">
        <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
          Discussion ({comments.length})
        </h3>

        {/* Existing Comments listing */}
        <div className="space-y-4">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment.id} className="p-4 rounded-xl glass border border-card-border space-y-2">
                <div className="flex justify-between items-center text-[10px]">
                  <span className="font-bold text-foreground">{comment.author}</span>
                  <span className="text-brand-muted">{comment.date}</span>
                </div>
                <p className="text-xs text-brand-muted leading-relaxed">
                  {comment.text}
                </p>
              </div>
            ))
          ) : (
            <p className="text-[11px] text-brand-muted italic pl-1">
              No comments have been posted yet. Start the discussion below!
            </p>
          )}
        </div>

        {/* Add Comment form */}
        <div className="p-5 rounded-xl bg-card border border-card-border space-y-4 shadow-sm">
          <h4 className="text-xs font-bold text-foreground">Post a Comment</h4>
          <form onSubmit={handleCommentSubmit} className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Your Name"
                value={newComment.name}
                onChange={(e) => {
                  setNewComment({ ...newComment, name: e.target.value });
                  setError('');
                }}
                className="w-full px-3 py-1.5 rounded-lg glass border border-card-border focus:border-brand-blue focus:outline-none text-[11px]"
              />
            </div>
            <textarea
              rows={3}
              placeholder="Type your reply or question..."
              value={newComment.text}
              onChange={(e) => {
                setNewComment({ ...newComment, text: e.target.value });
                setError('');
              }}
              className="w-full px-3 py-2 rounded-lg glass border border-card-border focus:border-brand-blue focus:outline-none text-[11px] resize-none"
            />
            
            {error && (
              <div className="flex items-center space-x-1.5 text-[10px] text-red-500 font-semibold">
                <AlertCircle className="h-3 w-3" />
                <span>{error}</span>
              </div>
            )}

            {submitted && (
              <div className="flex items-center space-x-1.5 text-[10px] text-emerald-500 font-semibold">
                <CheckCircle className="h-3 w-3" />
                <span>Comment posted successfully!</span>
              </div>
            )}

            <button
              type="submit"
              className="px-4 py-1.5 rounded-lg bg-brand-blue text-white text-[11px] font-semibold hover:bg-brand-blue/90 flex items-center space-x-1 transition-all cursor-pointer"
            >
              <span>Submit Comment</span>
              <Send className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>
      </section>

      {/* Suggest Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-card-border pt-8 space-y-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
            Related Articles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((related) => (
              <div key={related.id} className="glass p-5 rounded-xl border border-card-border flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-bold text-brand-blue uppercase">{related.category}</span>
                  <h4 className="text-xs font-bold text-foreground mt-1 hover:text-brand-purple transition-colors">
                    <Link href={`/blog/${related.slug}`}>{related.title}</Link>
                  </h4>
                  <p className="text-[10px] text-brand-muted mt-2 line-clamp-2">{related.summary}</p>
                </div>
                <Link
                  href={`/blog/${related.slug}`}
                  className="text-[10px] font-bold text-brand-blue hover:text-brand-purple mt-4 block"
                >
                  Read Article &rarr;
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
}
