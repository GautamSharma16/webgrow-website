'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight, Linkedin, Twitter, Mail,
  Code2, ShieldCheck, Lightbulb, Users, Heart, TrendingUp,
  MapPin, Globe, Award, Cpu, GraduationCap, Briefcase,
  CheckCircle2, Star,
} from 'lucide-react';

const stats = [
  { val: '2018', label: 'Founded' },
  { val: '40+',  label: 'Team members' },
  { val: '150+', label: 'Clients globally' },
  { val: '500+', label: 'Projects shipped' },
];

const values = [
  {
    icon: <Code2 className="h-5 w-5" />,
    title: 'Clean Engineering',
    desc: 'We write maintainable, well-documented code. No shortcuts, no legacy debt handed to clients.',
    color: 'bg-indigo-50 text-[#4F46E5]',
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: 'Radical Transparency',
    desc: 'Real-time Jira boards, weekly updates, honest ROI reporting — no hiding behind vanity metrics.',
    color: 'bg-violet-50 text-[#7C3AED]',
  },
  {
    icon: <Lightbulb className="h-5 w-5" />,
    title: 'Innovation-Driven',
    desc: '10% of every sprint is dedicated to R&D, new frameworks, and AI tooling that keeps clients ahead.',
    color: 'bg-orange-50 text-[#F97316]',
  },
  {
    icon: <Heart className="h-5 w-5" />,
    title: 'Client-First Culture',
    desc: 'We measure success by your revenue growth, not just delivered tickets. Your win is our win.',
    color: 'bg-rose-50 text-rose-500',
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: 'Measurable Results',
    desc: 'Every engagement ties deliverables to concrete KPIs — traffic, conversions, and cost savings.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: 'People Over Process',
    desc: 'Async-first, no micro-management. Senior engineers work directly with clients, no middlemen.',
    color: 'bg-sky-50 text-sky-600',
  },
];

const team = [
  {
    name: 'Ethan Caldwell',
    role: 'Founder & CEO',
    exp: '15 yrs · McKinsey Alum',
    bio: 'Former product strategist who guided tech expansions for Fortune 100 logistics and fintech firms.',
    initials: 'EC',
    gradient: 'from-[#4F46E5] to-[#7C3AED]',
  },
  {
    name: 'Dr. Evelyn Vance',
    role: 'Chief Technology Officer',
    exp: '12 yrs · Ex-AWS',
    bio: 'PhD in Distributed Systems. Led engineering squads at AWS, scaled multi-region SaaS platforms.',
    initials: 'EV',
    gradient: 'from-[#7C3AED] to-[#EC4899]',
  },
  {
    name: 'Marcus Thorne',
    role: 'Chief Marketing Officer',
    exp: '11 yrs · $80M Organic Rev',
    bio: 'Growth authority who engineered SEO campaigns yielding over $80M in organic client revenue.',
    initials: 'MT',
    gradient: 'from-[#F97316] to-[#EF4444]',
  },
  {
    name: 'Sophia Patel',
    role: 'Chief Operations Officer',
    exp: '10 yrs · Agile Master',
    bio: 'Scrum master who standardised deployment pipelines across 200+ multi-tenant client platforms.',
    initials: 'SP',
    gradient: 'from-[#10B981] to-[#0EA5E9]',
  },
];

const perks = [
  { icon: <Globe className="h-5 w-5 text-[#4F46E5]" />,         title: 'Remote-First',       desc: 'Async-first collaboration across 8 timezones with flexible working hours.' },
  { icon: <GraduationCap className="h-5 w-5 text-[#7C3AED]" />, title: '$2K Learning Budget', desc: '$2,000 yearly per engineer for certifications, courses, and hardware.' },
  { icon: <Briefcase className="h-5 w-5 text-[#F97316]" />,     title: 'Annual Summits',     desc: 'Team summits twice a year. Past locations: Bali, Lisbon, Dubai.' },
  { icon: <Cpu className="h-5 w-5 text-emerald-600" />,         title: '10% Innovation Time', desc: 'Dedicated R&D sprint time every week — no billable pressure.' },
];

const locations = ['San Francisco, CA', 'Mumbai, India', 'London, UK', 'Singapore'];

export default function AboutPage() {
  return (
    <div className="bg-white font-sans overflow-x-hidden">

      {/* ─── HERO ─── */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-50 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 shadow-sm px-4 py-1.5 rounded-full text-[13px] font-medium text-slate-600">
              <span className="h-2 w-2 rounded-full bg-[#4F46E5]" />
              Our Story
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-extrabold tracking-[-0.02em] leading-[1.1] text-slate-900 font-heading">
              Engineering Digital Growth{' '}
              <span className="gradient-text">Since 2018</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
              We started with a simple belief — Indian businesses deserve the same quality of technology and digital marketing that global enterprises get, at fair and transparent pricing.
            </p>

            {/* Stat row */}
            <div className="flex flex-wrap gap-8 pt-4 border-t border-slate-100">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-extrabold text-slate-900 font-heading">{s.val}</div>
                  <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── STORY ─── */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-3.5 py-1.5 rounded-full text-[13px] font-medium text-slate-600 shadow-sm">
                <Award className="h-4 w-4 text-[#4F46E5]" />
                The Founder Story
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 font-heading leading-tight">
                From a 3-person consultancy to a global IT agency
              </h2>
              <div className="space-y-4 text-[15px] text-slate-500 leading-relaxed">
                <p>
                  In 2018, WebGrow started in San Francisco as a collective of three — two engineers and a growth marketer. We noticed a pattern: design agencies built beautiful-but-slow sites, and software houses ignored SEO and UX.
                </p>
                <p>
                  By unifying custom Next.js engineering with conversion-rate optimisation and technical SEO, we built platforms that ranked on page one and loaded in under a second. Today we're a remote-first team of 40+ serving startups, SMEs, and enterprises worldwide.
                </p>
              </div>

              {/* Quote */}
              <blockquote className="relative pl-5 border-l-2 border-[#4F46E5] italic text-slate-600 text-[15px] leading-relaxed">
                "Code speed and conversion paths directly dictate profitability. We treat every visitor as a pipeline entry — and engineer accordingly."
                <footer className="not-italic mt-3 text-sm font-semibold text-slate-800">
                  Ethan Caldwell — Founder & CEO
                </footer>
              </blockquote>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/contact?scoping=true"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold text-sm shadow-md shadow-indigo-200/50 transition-all"
                >
                  Work With Us <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-all"
                >
                  See Our Work
                </Link>
              </div>
            </div>

            {/* About image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-100 aspect-[4/3]">
                <Image
                  src="/corporate_about.png"
                  alt="WebGrow team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 via-transparent to-transparent" />
              </div>
              {/* Floating offices badge */}
              <div className="absolute -bottom-5 -left-4 bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3 hidden sm:block">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-[#4F46E5]" /> Offices
                </div>
                <div className="space-y-0.5">
                  {locations.map((l) => (
                    <div key={l} className="text-[12px] text-slate-700 font-medium">{l}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 bg-violet-50 border border-violet-100 px-3.5 py-1.5 rounded-full text-[13px] font-medium text-[#7C3AED]">
              <Heart className="h-4 w-4" /> Our Values
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 font-heading">
              The principles guiding our code & campaigns
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className={`h-10 w-10 rounded-xl flex items-center justify-center mb-4 ${v.color}`}>
                  {v.icon}
                </div>
                <h3 className="text-[15px] font-bold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-[13.5px] text-slate-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-3.5 py-1.5 rounded-full text-[13px] font-medium text-[#4F46E5]">
              <Users className="h-4 w-4" /> Leadership
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 font-heading">
              The people behind the work
            </h2>
            <p className="text-slate-500 text-[15px]">
              Senior architects, strategists, and operators who've built and scaled products globally.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                {/* Gradient header */}
                <div className={`h-24 bg-gradient-to-br ${m.gradient} relative flex items-end px-5 pb-0`}>
                  <div className="absolute -bottom-7 left-5 h-14 w-14 rounded-2xl bg-white border-2 border-white shadow-md flex items-center justify-center">
                    <span className={`text-base font-extrabold bg-gradient-to-br ${m.gradient} bg-clip-text text-transparent`}>
                      {m.initials}
                    </span>
                  </div>
                </div>
                <div className="pt-10 px-5 pb-5 flex-1 space-y-2">
                  <div>
                    <div className="text-[15px] font-bold text-slate-900">{m.name}</div>
                    <div className="text-[12px] font-semibold text-[#4F46E5] mt-0.5">{m.role}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{m.exp}</div>
                  </div>
                  <p className="text-[13px] text-slate-500 leading-relaxed">{m.bio}</p>
                </div>
                <div className="px-5 py-3 border-t border-slate-50 flex items-center gap-3">
                  <a href="#" className="text-slate-300 hover:text-[#4F46E5] transition-colors" aria-label="LinkedIn">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href="#" className="text-slate-300 hover:text-[#4F46E5] transition-colors" aria-label="Twitter">
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a href="#" className="text-slate-300 hover:text-[#4F46E5] transition-colors" aria-label="Email">
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PERKS ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 px-3.5 py-1.5 rounded-full text-[13px] font-medium text-[#F97316]">
                <Briefcase className="h-4 w-4" /> Life at WebGrow
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 font-heading leading-tight">
                A culture engineered <br /> for peak performance
              </h2>
              <p className="text-[15px] text-slate-500 leading-relaxed">
                We're remote-first, async-friendly, and deeply invested in every team member's growth. No bureaucracy, no pointless meetings — just great work and the tools to do it.
              </p>
              <div className="space-y-4">
                {['Flexible async hours', 'Senior-only team, no juniors on client projects', 'Direct client access — no account manager middlemen', 'Open-source contributions encouraged'].map((p) => (
                  <div key={p} className="flex items-center gap-3 text-[14px] text-slate-700">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#4F46E5] shrink-0" />
                    {p}
                  </div>
                ))}
              </div>
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold text-sm shadow-md shadow-indigo-200/50 transition-all"
              >
                View Open Roles <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {perks.map((p, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm space-y-3 hover:shadow-md transition-shadow">
                  <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center">
                    {p.icon}
                  </div>
                  <div className="text-[14px] font-bold text-slate-900">{p.title}</div>
                  <p className="text-[13px] text-slate-500 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-[13px] font-medium text-white/80">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            4.9 / 5 average client rating
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Ready to build something great?
          </h2>
          <p className="text-[15px] text-slate-400 leading-relaxed">
            Get a free 30-minute scoping call with our team. No sales pitch — just a clear technical plan for your project.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link
              href="/contact?scoping=true"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold text-sm shadow-lg shadow-indigo-900/40 transition-all"
            >
              Schedule a Free Call <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-all border border-white/10"
            >
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
