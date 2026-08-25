import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';
import { JOURNAL_POSTS } from '@/data/journal';

export default function EditorialStoriesSection() {
  return (
    <section className="py-20 bg-[#fbfbf8]" aria-labelledby="journal-stories-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-950 bg-emerald-100/90 px-3.5 py-1 rounded-full">
              Stories From Costa Rica
            </span>
            <h2 id="journal-stories-title" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14261d]">
              The Sacred Roots Journal
            </h2>
            <p className="text-stone-600 text-base sm:text-lg">
              Field dispatches, indigenous agroforestry insights, and practical guides for ethical travelers.
            </p>
          </div>

          <Link
            href="/journal"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-900 hover:text-emerald-950 hover:underline"
          >
            <span>Read All Journal Entries</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {JOURNAL_POSTS.slice(0, 3).map((post) => (
            <article 
              key={post.slug}
              className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group"
            >
              <div className="relative h-52 w-full overflow-hidden bg-stone-100">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  referrerPolicy="no-referrer"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-[11px] font-bold rounded-md bg-stone-900/80 backdrop-blur-sm text-white uppercase tracking-wider">
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

                  <h3 className="font-serif text-lg font-bold text-[#14261d] group-hover:text-emerald-900 transition-colors leading-snug line-clamp-2">
                    <Link href={`/journal/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div className="text-xs">
                    <span className="font-semibold text-stone-900 block">{post.author.name}</span>
                    <span className="text-[11px] text-stone-500">{post.author.role}</span>
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

      </div>
    </section>
  );
}
