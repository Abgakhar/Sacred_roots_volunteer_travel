'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, ArrowRight, User } from 'lucide-react';
import { JOURNAL_POSTS } from '@/data/journal';

export default function JournalCatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'Field Dispatches', label: 'Field Dispatches' },
    { id: 'Indigenous Culture', label: 'Indigenous Culture' },
    { id: 'Educational Travel', label: 'Educational Travel' },
  ];

  const filtered = selectedCategory === 'all' 
    ? JOURNAL_POSTS 
    : JOURNAL_POSTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="pt-28 sm:pt-36 pb-20">
        
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-950 bg-emerald-100/90 px-3.5 py-1 rounded-full">
              Field Dispatches &amp; Knowledge
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#14261d] tracking-tight leading-tight">
              The Sacred Roots Journal
            </h1>
            <p className="text-base sm:text-xl text-stone-600 leading-relaxed font-normal">
              Stories of sea turtle conservation, indigenous agroforestry traditions, field science insights, and reflections on regenerative travel.
            </p>
          </div>
        </section>

        {/* Category Filters */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-[#1a4231] text-white shadow-sm'
                    : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* Articles Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post, index) => (
              <article 
                key={post.slug}
                className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group"
              >
                <div className="relative h-56 w-full overflow-hidden bg-stone-100">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={index < 3}
                    referrerPolicy="no-referrer"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 text-[10px] font-bold rounded-md bg-stone-900/80 backdrop-blur-sm text-white uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-xs text-stone-500">
                      <span>{post.publishedAt}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="font-serif text-xl font-bold text-[#14261d] group-hover:text-emerald-900 transition-colors leading-snug">
                      <Link href={`/journal/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                        {post.author.name.charAt(0)}
                      </div>
                      <div className="text-xs">
                        <span className="font-semibold text-stone-900 block">{post.author.name}</span>
                        <span className="text-[10px] text-stone-500">{post.author.role}</span>
                      </div>
                    </div>

                    <Link
                      href={`/journal/${post.slug}`}
                      className="text-xs font-bold text-emerald-900 hover:text-emerald-950 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Read</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
    </div>
  );
}
