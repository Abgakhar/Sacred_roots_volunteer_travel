import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, BookOpen, HeartHandshake, Eye } from 'lucide-react';

export default function WhatIsSacredRoots() {
  return (
    <section className="py-16 bg-[#f4f4ef] border-y border-stone-200/70" aria-labelledby="about-intro-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 text-white text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Our Purpose &amp; Approach</span>
          </div>

          <h2 id="about-intro-title" className="font-serif text-3xl sm:text-4xl font-bold text-[#14261d] tracking-tight">
            What is Sacred Roots?
          </h2>

          <p className="text-lg sm:text-xl text-stone-700 leading-relaxed font-normal">
            Sacred Roots creates immersive educational and volunteer journeys where people learn through <strong className="font-semibold text-emerald-950">direct experience with nature, local communities, conservation projects, and Costa Rican culture</strong>.
          </p>

          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            We move beyond passive sightseeing. Whether you are counting turtle clutches under starlit skies, grafting heirloom cacao with indigenous elders, or mapping wildlife corridors in the Osa Peninsula, every journey balances meaningful service with authentic personal growth.
          </p>

          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center text-sm font-semibold text-emerald-800 hover:text-emerald-950 gap-1.5 group"
            >
              <span>Discover Our Story &amp; Founders’ Mission</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
