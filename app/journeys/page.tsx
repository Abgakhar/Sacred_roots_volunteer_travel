'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  MapPin, 
  Clock, 
  Users, 
  ShieldCheck, 
  ArrowRight, 
  ChevronRight,
  Filter,
  Sparkles,
  Calendar
} from 'lucide-react';
import { JOURNEYS } from '@/data/journeys';

export default function JourneysCatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Expeditions' },
    { id: 'marine', label: 'Marine Conservation' },
    { id: 'wildlife', label: 'Wildlife & Corridors' },
    { id: 'cultural', label: 'Indigenous & Cultural' },
    { id: 'education', label: 'Student STEM & Schools' },
    { id: 'custom', label: 'Custom Groups & Families' },
    { id: 'retreat', label: 'Corporate Retreats' },
  ];

  const filtered = JOURNEYS.filter((journey) => {
    const matchesCat = selectedCategory === 'all' || journey.category === selectedCategory;
    const matchesSearch = journey.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      journey.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      journey.overview.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="pt-28 sm:pt-36 pb-20">
        
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-950 bg-emerald-100/90 px-3.5 py-1 rounded-full">
              Explore Costa Rica
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#14261d] tracking-tight">
              Purpose-Driven Journeys
            </h1>
            <p className="text-base sm:text-xl text-stone-600 leading-relaxed font-normal">
              Every Sacred Roots expedition combines active field service with rigorous learning, authentic community hospitality, and accredited environmental impact.
            </p>
          </div>
        </section>

        {/* Filter & Search Bar */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="bg-white p-4 sm:p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Category Filters */}
            <div className="flex items-center flex-wrap gap-2 w-full lg:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
                    selectedCategory === cat.id
                      ? 'bg-[#1a4231] text-white shadow-sm'
                      : 'bg-[#f4f4ef] text-stone-700 hover:bg-[#eaeae3]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="w-full lg:w-72">
              <input
                type="text"
                placeholder="Search location or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 text-xs sm:text-sm rounded-xl border border-stone-300 bg-[#fbfbf8] focus:outline-none focus:ring-2 focus:ring-emerald-800 text-stone-900"
              />
            </div>

          </div>
        </section>

        {/* Journeys List Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-stone-200 max-w-lg mx-auto space-y-4">
              <p className="text-stone-600 font-medium">No journeys found matching your search criteria.</p>
              <button
                type="button"
                onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                className="px-4 py-2 text-xs font-bold text-emerald-900 bg-emerald-100 rounded-lg"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((journey, index) => (
                <div 
                  key={journey.id}
                  className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  {/* Card Image */}
                  <div className="relative h-60 w-full overflow-hidden bg-stone-900">
                    <Image
                      src={journey.heroImage}
                      alt={journey.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 3}
                      referrerPolicy="no-referrer"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent" />
                    
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-3 py-1 text-[11px] font-bold rounded-md bg-stone-900/80 backdrop-blur-sm text-white uppercase tracking-wider">
                        {journey.category}
                      </span>
                      <span className="px-3 py-1 text-[11px] font-semibold rounded-md bg-emerald-800/90 backdrop-blur-sm text-white">
                        {journey.duration}
                      </span>
                    </div>

                    <div className="absolute bottom-3.5 left-4 flex items-center gap-1.5 text-xs text-white font-medium">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{journey.location}</span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <h3 className="font-serif text-xl font-bold text-[#14261d] group-hover:text-emerald-900 transition-colors">
                        <Link href={`/journeys/${journey.slug}`}>
                          {journey.title}
                        </Link>
                      </h3>

                      <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                        {journey.overview}
                      </p>

                      <div className="pt-2 space-y-1 text-xs text-stone-600 border-t border-stone-100">
                        <div>
                          <strong className="text-stone-900">Audience:</strong> {journey.bestFor}
                        </div>
                        <div>
                          <strong className="text-stone-900">Impact:</strong> <span className="text-emerald-800 font-semibold">{journey.impactCategory}</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                      <div>
                        <span className="text-[11px] text-stone-500 uppercase tracking-wider block">Investment</span>
                        <span className="text-sm font-bold text-[#14261d]">{journey.investment.startingPrice}</span>
                      </div>

                      <Link
                        href={`/journeys/${journey.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-white bg-[#1a4231] hover:bg-[#122e22] px-4 py-2.5 rounded-xl shadow-sm transition-all"
                      >
                        <span>View Details</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}
        </section>

        {/* Custom Journey Bottom Callout */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="bg-[#14261d] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                Custom Tailored Travel
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold">
                Need a Custom Route or School Study Program?
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 max-w-xl leading-relaxed">
                We design custom dates, private villas, and specialized STEM or community curricula for school faculties, multi-generational families, and organizations.
              </p>
            </div>

            <Link
              href="/apply?type=custom"
              className="shrink-0 px-8 py-4 text-sm font-bold text-[#14261d] bg-[#fbfbf8] hover:bg-white rounded-xl shadow-lg transition-colors"
            >
              Plan a Custom Journey
            </Link>
          </div>
        </section>
    </div>
  );
}
