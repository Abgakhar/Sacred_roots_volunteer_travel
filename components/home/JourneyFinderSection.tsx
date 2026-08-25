'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  MapPin, 
  Clock, 
  Users, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { JOURNEYS, Journey } from '@/data/journeys';

export default function JourneyFinderSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Journeys' },
    { id: 'marine', label: 'Marine Conservation' },
    { id: 'wildlife', label: 'Wildlife & Corridors' },
    { id: 'cultural', label: 'Indigenous & Cultural' },
    { id: 'education', label: 'Educational (Schools)' },
    { id: 'custom', label: 'Custom Groups & Families' },
    { id: 'retreat', label: 'Corporate Retreats' },
  ];

  const filteredJourneys = selectedCategory === 'all'
    ? JOURNEYS
    : JOURNEYS.filter(j => j.category === selectedCategory);

  return (
    <section className="py-20 bg-[#fbfbf8]" id="journeys-section" aria-labelledby="journey-finder-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 text-white text-xs font-semibold uppercase tracking-wider">
            <span>Explore Experiences</span>
          </div>

          <h2 id="journey-finder-title" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14261d] tracking-tight">
            Find the Journey That Fits You
          </h2>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Every journey is purpose-built: clear itineraries, small group sizes, direct conservation work, and verified local community partnerships across Costa Rica.
          </p>
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => {
            const active = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800 ${
                  active
                    ? 'bg-[#1a4231] text-white shadow-sm'
                    : 'bg-[#eeeee7] text-stone-700 hover:bg-[#e4e4dd] hover:text-stone-950'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredJourneys.map((journey) => (
            <div 
              key={journey.id}
              className="bg-white rounded-2xl border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Card Image */}
              <div className="relative h-56 w-full overflow-hidden bg-stone-100">
                <Image
                  src={journey.heroImage}
                  alt={journey.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  referrerPolicy="no-referrer"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/10 to-transparent" />
                
                {/* Top Badge: Category & Status */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                  <span className="px-2.5 py-1 text-[11px] font-bold rounded-md bg-stone-900/80 backdrop-blur-sm text-white uppercase tracking-wider">
                    {journey.category.toUpperCase()}
                  </span>
                  <span className="px-2.5 py-1 text-[11px] font-semibold rounded-md bg-emerald-800/90 backdrop-blur-sm text-white">
                    {journey.duration}
                  </span>
                </div>

                {/* Bottom Location Indicator */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-white/95 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{journey.location.split(',')[0]}</span>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                
                <div className="space-y-2.5">
                  <h3 className="font-serif text-xl font-bold text-[#14261d] group-hover:text-emerald-900 transition-colors leading-snug">
                    {journey.title}
                  </h3>
                  
                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                    {journey.tagline}
                  </p>

                  <div className="pt-2 space-y-1.5 text-xs text-stone-600 border-t border-stone-100">
                    <div className="flex items-start gap-1.5">
                      <span className="font-semibold text-stone-900 shrink-0">Best for:</span>
                      <span className="line-clamp-1">{journey.bestFor}</span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="font-semibold text-stone-900 shrink-0">Impact:</span>
                      <span className="text-emerald-800 font-medium line-clamp-1">{journey.impactCategory}</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer: Pricing & CTA */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-stone-600 uppercase tracking-wider block">Investment</span>
                    <span className="text-sm font-bold text-[#14261d]">{journey.investment.startingPrice}</span>
                  </div>

                  <Link
                    href={`/journeys/${journey.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-white bg-[#1a4231] hover:bg-[#122e22] px-4 py-2.5 rounded-lg shadow-sm group-hover:shadow transition-all"
                  >
                    <span>View Experience</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#14261d] text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif text-xl sm:text-2xl font-bold">
              Looking for a custom date or private cohort?
            </h3>
            <p className="text-sm text-stone-300 max-w-xl">
              We configure tailored dates, specialized curricula, and custom group sizes for families, university programs, and organizations.
            </p>
          </div>

          <Link
            href="/apply?type=custom"
            className="shrink-0 px-6 py-3 text-sm font-semibold text-[#14261d] bg-[#fbfbf8] hover:bg-white rounded-xl shadow transition-colors"
          >
            Plan a Custom Journey →
          </Link>
        </div>

      </div>
    </section>
  );
}
