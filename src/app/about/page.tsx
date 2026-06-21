'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Award, Cpu, Sparkles, Building, Briefcase, GraduationCap, Linkedin, Twitter, Mail } from 'lucide-react';

export default function AboutPage() {
  
  const coreValues = [
    { title: "Innovation", desc: "We continually test new frameworks, AI agent architectures, and optimization strategies to ensure clients stay ahead." },
    { title: "Integrity", desc: "Clear scopes, honest ROI reporting, and clean engineering practices without short-cuts." },
    { title: "Excellence", desc: "Committed to delivering 100/100 Core Web Vitals, bulletproof security, and high conversion ratios." },
    { title: "Transparency", desc: "Direct Slack channel integrations, real-time Jira trackers, and weekly updates." },
    { title: "Customer Success", desc: "We evaluate our deliverables based on your company revenue growth, traffic acquisition, and operational cost savings." },
    { title: "Continuous Improvement", desc: "Refining internal pipelines constantly via Scrum retrospectives and post-deployment logs." }
  ];

  const leadership = [
    {
      name: "Ethan Caldwell",
      role: "Founder & CEO",
      bio: "Former McKinsey product strategist. Guided tech expansions for Fortune 100 logistics and fintech enterprises.",
      experience: "15+ Years Experience",
      avatar: "EC"
    },
    {
      name: "Dr. Evelyn Vance",
      role: "Chief Technology Officer",
      bio: "PhD in Distributed Database Architectures. Led engineering squads at AWS and scaled high-throughput SaaS networks.",
      experience: "12+ Years Experience",
      avatar: "EV"
    },
    {
      name: "Marcus Thorne",
      role: "Chief Marketing Officer",
      bio: "Growth hacking authority. Engineered search ranking increases yielding over $80M in organic client revenue.",
      experience: "11+ Years Experience",
      avatar: "MT"
    },
    {
      name: "Sophia Patel",
      role: "Chief Operations Officer",
      bio: "Agile Scrum master. Standardized deployment configurations across 200+ multi-tenant platforms.",
      experience: "10+ Years Experience",
      avatar: "SP"
    }
  ];

  const cultureBenefits = [
    { icon: <Building className="h-5 w-5 text-brand-blue" />, title: "Remote-First", desc: "Collaborate seamlessly across 8 timezones with flexible, async-centric working rules." },
    { icon: <Sparkles className="h-5 w-5 text-brand-purple" />, title: "Innovation Mindset", desc: "Devote 10% of weekly hours to sandbox research, prototype testing, and open-source contributions." },
    { icon: <GraduationCap className="h-5 w-5 text-cyan-400" />, title: "Learning Budgets", desc: "$2,000 yearly stipend per employee for engineering certifications, tech courses, and hardware." },
    { icon: <Briefcase className="h-5 w-5 text-pink-400" />, title: "Annual Summits", desc: "Get together twice a year for team building, product planning, and fun (past summits: Bali, Lisbon)." }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-8 relative">
      {/* Decorative Blobs */}
      <div className="absolute top-40 right-10 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Section */}
      <section className="text-center space-y-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center space-x-2 bg-brand-blue/10 border border-brand-blue/20 px-3 py-1 rounded-full text-brand-blue text-xs font-semibold">
          <Building className="h-4 w-4" />
          <span>Our Story</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-foreground via-brand-blue to-brand-purple bg-clip-text text-transparent">
          Engineering Digital Growth Since 2018
        </h1>
        <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
          WebGrow Technologies was founded with a single mission: to replace generic agency templates with deep engineering expertise and metrics-backed digital marketing. We bridge the gap between creative visual branding and robust server performance.
        </p>
      </section>

      {/* Company Story Detail */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            From a Small Core Squad to a Global IT Solutions Agency
          </h2>
          <p className="text-xs text-brand-muted leading-relaxed">
            In 2018, WebGrow began in San Francisco as a consulting collective of three software developers and a growth marketer. We noticed that typical design agencies delivered slow, bloated websites, while software houses neglected SEO and user experience.
          </p>
          <p className="text-xs text-brand-muted leading-relaxed">
            By unifying custom Next.js/React engineering with conversion rate optimization and technical SEO crawling configurations, we built platforms that ranked on page one of Google and loads instantly. Today, we are a remote-first team of 40+ professionals serving startup founders, SMEs, and Fortune 500 organizations worldwide.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="p-4 rounded-xl glass border border-card-border">
              <h3 className="text-xs font-bold text-foreground">Our Mission</h3>
              <p className="text-[10px] text-brand-muted mt-2 leading-relaxed">
                To empower companies by deploying secure, high-performance software architecture, automating operational overhead with AI agents, and scaling organic visitor acquisition channels.
              </p>
            </div>
            <div className="p-4 rounded-xl glass border border-card-border">
              <h3 className="text-xs font-bold text-foreground">Our Vision</h3>
              <p className="text-[10px] text-brand-muted mt-2 leading-relaxed">
                To stand as the world&apos;s most trusted technology partner, renowned for combining software engineering rigour with data-driven marketing conversions.
              </p>
            </div>
          </div>
        </div>

        <div className="relative aspect-video rounded-2xl overflow-hidden glass border border-card-border p-8 flex flex-col justify-center space-y-4">
          <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-emerald-400" />
          <h3 className="text-sm font-bold text-brand-blue tracking-wide uppercase">Core Philosophy</h3>
          <p className="text-xs text-foreground leading-relaxed italic">
            &quot;In modern markets, code speed and conversion paths dictate business profitability. We design software architectures that treat visitor traffic as a direct, pipeline funnel.&quot;
          </p>
          <div className="pt-2">
            <div className="text-xs font-bold text-foreground">Ethan Caldwell</div>
            <div className="text-[9px] text-brand-muted mt-0.5">CEO, WebGrow Technologies</div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-purple/10 border border-brand-purple/20 px-3 py-1 rounded-full text-brand-purple text-xs font-semibold">
            <Heart className="h-4 w-4" />
            <span>Core Values</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            The Principles Guiding Our Code and Campaigns
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((val, idx) => (
            <div key={idx} className="p-6 rounded-2xl glass border border-card-border space-y-3">
              <h3 className="text-sm font-bold text-foreground flex items-center space-x-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                <span>{val.title}</span>
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Team */}
      <section className="space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-blue/10 border border-brand-blue/20 px-3 py-1 rounded-full text-brand-blue text-xs font-semibold">
            <Award className="h-4 w-4" />
            <span>Leadership Team</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            Meet the Solutions Architects & Strategists
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadership.map((member, idx) => (
            <div key={idx} className="glass rounded-xl overflow-hidden border border-card-border flex flex-col justify-between">
              <div className="p-5 space-y-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-brand-blue to-brand-purple flex items-center justify-center text-white font-bold text-lg">
                  {member.avatar}
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-foreground">{member.name}</h3>
                  <div className="text-[10px] text-brand-blue font-semibold">{member.role}</div>
                  <div className="text-[9px] text-brand-muted uppercase tracking-wider font-semibold">{member.experience}</div>
                </div>
                <p className="text-xs text-brand-muted leading-relaxed">
                  {member.bio}
                </p>
              </div>
              <div className="p-4 bg-card-border/40 border-t border-card-border flex justify-between items-center">
                <div className="flex space-x-2.5">
                  <a href="#linkedin" className="text-brand-muted hover:text-brand-blue transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href="#twitter" className="text-brand-muted hover:text-brand-blue transition-colors">
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a href="#email" className="text-brand-muted hover:text-brand-blue transition-colors">
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Company Culture */}
      <section className="space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-purple/10 border border-brand-purple/20 px-3 py-1 rounded-full text-brand-purple text-xs font-semibold">
            <Cpu className="h-4 w-4" />
            <span>Culture & Environment</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            A Environment Engineered For Growth
          </h2>
          <p className="text-xs text-brand-muted">
            We foster a remote-first, collaborative community focused on clean code, continuous research, and work-life harmony.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cultureBenefits.map((ben, idx) => (
            <div key={idx} className="p-5 rounded-xl glass border border-card-border space-y-4">
              <div className="p-2 rounded bg-card-border/80 w-fit">
                {ben.icon}
              </div>
              <h3 className="text-xs font-bold text-foreground uppercase tracking-wider">{ben.title}</h3>
              <p className="text-xs text-brand-muted leading-relaxed">{ben.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
