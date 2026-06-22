'use client';

import React from 'react';
import { TrendingUp, Users, BarChart3, Smartphone } from 'lucide-react';

export default function HeroMockup() {
  return (
    <div className="relative w-full max-w-[540px] mx-auto lg:mx-0 lg:ml-auto">
      {/* Laptop mockup */}
      <div className="relative animate-float">
        <div className="bg-[#0B1F3A] rounded-t-xl px-3 pt-2 pb-0 shadow-2xl">
          <div className="flex items-center gap-1.5 mb-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
          </div>
          <div className="bg-white rounded-t-lg overflow-hidden aspect-[16/10] relative">
            {/* Simulated dashboard */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F8F9FA] to-white p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="h-2 w-20 bg-[#0B1F3A]/10 rounded" />
                <div className="flex gap-1">
                  <div className="h-2 w-8 bg-[#D4AF37]/30 rounded" />
                  <div className="h-2 w-8 bg-[#153D77]/20 rounded" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-3">
                {[TrendingUp, Users, BarChart3].map((Icon, i) => (
                  <div key={i} className="bg-white rounded-lg p-2 shadow-sm border border-gray-100">
                    <Icon className="h-3 w-3 text-[#153D77] mb-1" />
                    <div className="h-1.5 w-full bg-[#0B1F3A]/8 rounded" />
                    <div className="h-2 w-8 bg-[#D4AF37]/40 rounded mt-1" />
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-lg p-2 shadow-sm border border-gray-100 h-16">
                <div className="flex items-end gap-1 h-full">
                  {[40, 65, 45, 80, 55, 90, 70, 95].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t"
                      style={{
                        height: `${h}%`,
                        background: i === 7 ? '#D4AF37' : '#153D77',
                        opacity: i === 7 ? 1 : 0.3 + i * 0.08,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-3 bg-[#1a2f4a] rounded-b-lg mx-8" />
        <div className="h-1.5 bg-[#0B1F3A] rounded-full mx-16 mt-1" />
      </div>

      {/* Phone mockup */}
      <div className="absolute -right-4 sm:-right-8 bottom-8 sm:bottom-12 w-[100px] sm:w-[120px] animate-float-delayed">
        <div className="bg-[#0B1F3A] rounded-[1.25rem] p-1.5 shadow-xl">
          <div className="bg-white rounded-[1rem] overflow-hidden aspect-[9/16] relative">
            <div className="absolute inset-0 bg-gradient-to-b from-[#153D77] to-[#0B1F3A] p-2">
              <div className="flex items-center gap-1 mb-2">
                <Smartphone className="h-2.5 w-2.5 text-[#D4AF37]" />
                <div className="h-1 w-10 bg-white/30 rounded" />
              </div>
              <div className="space-y-1.5">
                <div className="h-8 bg-white/10 rounded-lg" />
                <div className="h-6 bg-white/10 rounded-lg" />
                <div className="h-6 bg-[#D4AF37]/30 rounded-lg" />
                <div className="h-4 bg-white/10 rounded-lg w-3/4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating analytics card — top left */}
      <div className="absolute -left-2 sm:-left-6 top-8 sm:top-12 bg-white rounded-xl shadow-lg border border-gray-100 px-4 py-3 hidden sm:block">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-[#0B1F3A]/5 flex items-center justify-center">
            <TrendingUp className="h-4 w-4 text-[#D4AF37]" />
          </div>
          <div>
            <div className="text-sm font-bold text-[#0B1F3A]">+250% Leads</div>
            <div className="text-[11px] text-gray-400">MediCore Healthcare</div>
          </div>
        </div>
      </div>

      {/* Floating analytics card — bottom right */}
      <div className="absolute -right-2 sm:right-16 -bottom-2 sm:bottom-0 bg-white rounded-xl shadow-lg border border-gray-100 px-4 py-3 hidden sm:block">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-[#153D77]/10 flex items-center justify-center">
            <BarChart3 className="h-4 w-4 text-[#153D77]" />
          </div>
          <div>
            <div className="text-sm font-bold text-[#0B1F3A]">+180% Traffic</div>
            <div className="text-[11px] text-gray-400">PropNex Realty</div>
          </div>
        </div>
      </div>

      {/* Revenue card */}
      <div className="absolute left-4 sm:left-0 bottom-24 sm:bottom-28 bg-white rounded-xl shadow-lg border border-gray-100 px-3 py-2.5 hidden lg:block">
        <div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Revenue</div>
        <div className="text-lg font-bold text-[#D4AF37]">+40%</div>
      </div>
    </div>
  );
}
