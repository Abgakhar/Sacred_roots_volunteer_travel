import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, ArrowLeft, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { JOURNAL_POSTS } from '@/data/journal';

export async function generateStaticParams() {
  return JOURNAL_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = JOURNAL_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: 'Story Not Found | Sacred Roots' };
  return {
    title: `${post.title} | Sacred Roots Field Journal`,
    description: post.excerpt,
  };
}

export default async function JournalPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = JOURNAL_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-28 sm:pt-36 pb-20">
        
        {/* Breadcrumb & Top Bar */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <Link
            href="/journal"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-emerald-900 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Journal Stories</span>
          </Link>

          <div className="space-y-4">
            <span className="px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 inline-block">
              {post.category}
            </span>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14261d] tracking-tight leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-stone-500 pt-2 border-b border-stone-200 pb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold text-xs">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <strong className="text-stone-900 block">{post.author.name}</strong>
                  <span>{post.author.role}</span>
                </div>
              </div>
              <span>·</span>
              <span>{post.publishedAt}</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="relative h-[360px] sm:h-[480px] rounded-3xl overflow-hidden shadow-md">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              referrerPolicy="no-referrer"
              className="object-cover"
            />
          </div>
        </div>

        {/* Content Body */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Key Takeaways Callout Box */}
          {post.keyTakeaways && post.keyTakeaways.length > 0 && (
            <div className="bg-emerald-50/80 rounded-2xl p-6 border border-emerald-200/80 space-y-3 font-sans">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-950">
                <Sparkles className="w-4 h-4 text-emerald-800" />
                <span>Field Takeaways</span>
              </div>
              <ul className="space-y-2">
                {post.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Paragraphs */}
          <div className="space-y-6 text-stone-800 text-base sm:text-lg leading-relaxed font-serif pt-2">
            {post.content.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Related CTA */}
          <div className="mt-12 not-italic font-sans p-8 rounded-3xl bg-[#14261d] text-white space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-emerald-300">
              Inspired by this field story?
            </span>
            <h3 className="font-serif text-2xl font-bold">
              Join an Upcoming Costa Rica Expedition
            </h3>
            <p className="text-xs sm:text-sm text-stone-300">
              Walk the beaches, support indigenous cooperatives, and witness wildlife firsthand with our field leaders.
            </p>
            <div className="pt-2">
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#fbfbf8] hover:bg-white text-[#14261d] font-bold text-xs shadow transition-colors"
              >
                <span>Plan Your Journey</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </article>
    </div>
  );
}
