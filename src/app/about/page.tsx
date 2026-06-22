'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Heart, Award, Building2, Target, Eye, Users, ArrowRight, Linkedin, MapPin, Calendar } from 'lucide-react';
import { teamData, companyTimeline, clientReviews, awardsAndCerts, industriesServed } from '@/data/siteData';
import ScrollReveal from '@/components/ScrollReveal';

export default function AboutPage() {
  const coreValues = [
    { title: 'Client First', desc: 'Every decision starts with what\'s best for our clients\' business growth and long-term success.' },
    { title: 'Engineering Excellence', desc: 'Clean, documented, scalable code — no shortcuts, no template bloat, no technical debt.' },
    { title: 'Transparency', desc: 'Weekly progress updates, shared Jira boards, and honest ROI reporting on every campaign.' },
    { title: 'Innovation', desc: 'We invest 10% of team hours in R&D — testing new frameworks, AI tools, and optimization strategies.' },
    { title: 'Integrity', desc: 'Fixed pricing, clear contracts, NDAs signed before any scoping call. Your IP stays yours.' },
    { title: 'Continuous Growth', desc: 'Bi-weekly retrospectives, client feedback loops, and a culture of learning and improvement.' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="hero-enterprise py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-3xl space-y-6">
            <div className="section-badge"><Building2 className="h-3.5 w-3.5" /> Our Story</div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0B1F3A] font-heading leading-tight">
              Building India&apos;s Most Trusted Technology Partner Since 2019
            </h1>
            <div className="gold-accent-line" />
            <p className="text-[16px] text-[#6b7280] leading-relaxed max-w-2xl">
              WebGrow Technologies started with a simple belief: Indian businesses deserve the same quality of technology and marketing that global enterprises get — at fair, transparent pricing.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-16 lg:py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5] max-w-md mx-auto lg:mx-0">
                <Image
                  src={teamData[0].photo}
                  alt="Rahul Sharma, Founder & CEO"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0B1F3A] to-transparent p-6">
                  <div className="text-white font-bold text-lg">Rahul Sharma</div>
                  <div className="text-[#D4AF37] text-sm font-semibold">Founder & CEO</div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100} className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] font-heading">The Founder Story</h2>
              <div className="space-y-4 text-[15px] text-[#6b7280] leading-relaxed">
                <p>
                  In 2019, Rahul Sharma left his consulting role at Wipro with ₹2 lakh in savings and a rented desk in Pune. He had seen too many Indian SMEs pay premium prices for slow, template-based websites that never ranked on Google.
                </p>
                <p>
                  He teamed up with two developers and a growth marketer to build something different — an agency that combined custom Next.js engineering with technical SEO and conversion optimization, all under one roof.
                </p>
                <p>
                  Within 18 months, WebGrow had 50 clients across Maharashtra and Karnataka. By 2022, the team moved to a 25-person office in Mumbai&apos;s Bandra Kurla Complex. Today, with 40+ professionals, WebGrow serves 150+ clients across India, the US, UK, and UAE.
                </p>
              </div>
              <blockquote className="border-l-4 border-[#D4AF37] pl-5 py-2">
                <p className="text-[15px] text-[#111827] italic leading-relaxed">
                  &ldquo;We measure our success by our clients&apos; revenue growth, not our portfolio size. Every project should pay for itself within the first year.&rdquo;
                </p>
                <footer className="text-sm font-semibold text-[#0B1F3A] mt-2">— Rahul Sharma, Founder</footer>
              </blockquote>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ScrollReveal className="text-center max-w-2xl mx-auto space-y-4">
            <div className="section-badge mx-auto"><Target className="h-3.5 w-3.5" /> Purpose</div>
            <h2 className="text-3xl font-extrabold text-[#0B1F3A] font-heading">Mission, Vision & Values</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Target, title: 'Mission', desc: 'Empower Indian businesses with world-class technology, AI automation, and digital marketing that drives measurable revenue growth and operational efficiency.', color: 'bg-[#0B1F3A]' },
              { icon: Eye, title: 'Vision', desc: 'To be India\'s most trusted digital transformation partner — recognized for engineering rigour, transparent operations, and client-first culture.', color: 'bg-[#153D77]' },
              { icon: Heart, title: 'Values', desc: 'Client success above all. Clean engineering. Transparent pricing. Continuous learning. And a team culture that treats every project like our own business.', color: 'bg-[#D4AF37]' },
            ].map((item, idx) => (
              <ScrollReveal key={item.title} delay={idx * 80}>
                <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className={`h-12 w-12 rounded-xl ${item.color} flex items-center justify-center text-white mb-5`}>
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1F3A] font-heading">{item.title}</h3>
                  <p className="text-[14px] text-[#6b7280] mt-3 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreValues.map((val, idx) => (
              <ScrollReveal key={val.title} delay={idx * 50}>
                <div className="p-5 rounded-xl bg-[#F8F9FA] border border-gray-100 space-y-2">
                  <h3 className="text-sm font-bold text-[#0B1F3A] flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                    {val.title}
                  </h3>
                  <p className="text-[13px] text-[#6b7280] leading-relaxed">{val.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 lg:py-20 bg-[#0B1F3A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ScrollReveal className="text-center max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-[#D4AF37]">
              <Calendar className="h-3.5 w-3.5" /> Our Journey
            </div>
            <h2 className="text-3xl font-extrabold font-heading">Milestones That Define Us</h2>
          </ScrollReveal>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px" />
            <div className="space-y-8">
              {companyTimeline.map((item, idx) => (
                <ScrollReveal key={item.year} delay={idx * 60}>
                  <div className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="hidden md:block md:w-1/2" />
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-[#D4AF37] -translate-x-1.5 md:-translate-x-1.5 mt-1.5 z-10" />
                    <div className={`md:w-1/2 pl-10 md:pl-0 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className="text-[#D4AF37] font-bold text-sm">{item.year}</div>
                      <h3 className="text-lg font-bold mt-1">{item.title}</h3>
                      <p className="text-white/60 text-[14px] mt-2 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture Photo */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal className="space-y-6">
              <div className="section-badge"><Users className="h-3.5 w-3.5" /> Culture</div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] font-heading">Life at WebGrow</h2>
              <p className="text-[15px] text-[#6b7280] leading-relaxed">
                We&apos;re a remote-first team with core hours overlapping IST. Our Mumbai office in BKC is where we host client workshops, team summits, and Friday demo days. We believe great work comes from empowered people, not micromanagement.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'Remote-First', desc: 'Work from anywhere in India with flexible hours.' },
                  { title: 'Learning Budget', desc: '₹1.5L annual stipend for courses and certifications.' },
                  { title: 'Team Summits', desc: 'Bi-annual offsites in Goa, Jaipur, and Lonavala.' },
                  { title: 'Open Culture', desc: 'Direct access to founders. No bureaucracy.' },
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded-xl bg-[#F8F9FA] border border-gray-100">
                    <div className="text-sm font-bold text-[#0B1F3A]">{item.title}</div>
                    <div className="text-[12px] text-[#6b7280] mt-1">{item.desc}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/10]">
                <Image src="/corporate_about.png" alt="WebGrow team culture" fill className="object-cover" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 lg:py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ScrollReveal className="text-center max-w-2xl mx-auto space-y-4">
            <div className="section-badge mx-auto"><Award className="h-3.5 w-3.5" /> Leadership</div>
            <h2 className="text-3xl font-extrabold text-[#0B1F3A] font-heading">Meet the Team</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamData.map((member, idx) => (
              <ScrollReveal key={member.id} delay={idx * 80}>
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={member.photo} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="p-5 space-y-2">
                    <h3 className="text-base font-bold text-[#0B1F3A]">{member.name}</h3>
                    <div className="text-[12px] text-[#D4AF37] font-semibold">{member.role}</div>
                    <div className="text-[11px] text-[#6b7280]">{member.experience} · {member.specialization}</div>
                    <p className="text-[12px] text-[#6b7280] leading-relaxed">{member.bio}</p>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#153D77] hover:text-[#0B1F3A]">
                      <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Trust Us */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ScrollReveal className="text-center max-w-2xl mx-auto space-y-4">
            <div className="section-badge mx-auto"><ShieldCheck className="h-3.5 w-3.5" /> Trust</div>
            <h2 className="text-3xl font-extrabold text-[#0B1F3A] font-heading">Why Clients Trust Us</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clientReviews.map((review, idx) => (
              <ScrollReveal key={idx} delay={idx * 80}>
                <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <p className="text-[14px] text-[#6b7280] leading-relaxed">&ldquo;{review.text}&rdquo;</p>
                  <div className="mt-4 flex items-center gap-3">
                    <Image src={review.avatar} alt={review.author} width={36} height={36} className="rounded-full object-cover" />
                    <div>
                      <div className="text-sm font-bold text-[#0B1F3A]">{review.author}</div>
                      <div className="text-[12px] text-[#6b7280]">{review.company}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
              {awardsAndCerts.map((cert) => (
                <div key={cert.title} className="p-4 rounded-xl bg-[#F8F9FA] border border-gray-100 text-center">
                  <div className="text-[12px] font-bold text-[#0B1F3A]">{cert.title}</div>
                  <div className="text-[10px] text-[#6b7280] mt-1">{cert.desc}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 bg-[#0B1F3A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <ScrollReveal>
            <MapPin className="h-8 w-8 text-[#D4AF37] mx-auto" />
            <h2 className="text-2xl font-extrabold font-heading mt-4">Visit Our Mumbai Office</h2>
            <p className="text-white/60 max-w-lg mx-auto mt-2">
              Bandra Kurla Complex, G Block, Mumbai 400051<br />
              Mon – Sat: 10:00 AM – 7:00 PM IST
            </p>
            <Link href="/contact?scoping=true" className="btn-gold inline-flex mt-6">
              Schedule a Visit <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
