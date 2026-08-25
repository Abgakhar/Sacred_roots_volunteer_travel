'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Quote, Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '@/data/testimonials';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 bg-[#f4f4ef] border-t border-stone-200" aria-labelledby="testimonials-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-950 bg-emerald-100/90 px-3.5 py-1 rounded-full">
            Real Perspectives
          </span>
          <h2 id="testimonials-title" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14261d]">
            Voices From the Field
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Hear from educators, parents, university students, and leaders who have journeyed with Sacred Roots.
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/90 shadow-xl relative">
          
          <div className="flex items-center gap-1 text-amber-500 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-500" />
            ))}
            <span className="text-xs font-bold text-stone-500 ml-2 uppercase tracking-wider">
              {current.category} Participant · {current.year}
            </span>
          </div>

          <blockquote className="font-serif text-lg sm:text-2xl text-[#14261d] leading-relaxed italic mb-8">
            &ldquo;{current.quote}&rdquo;
          </blockquote>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-stone-100">
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden bg-stone-200 border-2 border-emerald-800 shrink-0">
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  sizes="56px"
                  referrerPolicy="no-referrer"
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-[#14261d] text-base">{current.name}</h4>
                <p className="text-xs text-stone-600 font-medium">{current.role}</p>
                {current.organization && (
                  <p className="text-xs text-emerald-800 font-semibold">{current.organization}</p>
                )}
              </div>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-3 self-end sm:self-center">
              <button
                type="button"
                onClick={prev}
                className="w-10 h-10 rounded-full border border-stone-300 hover:bg-stone-100 text-stone-700 flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-semibold text-stone-500">
                {currentIndex + 1} / {TESTIMONIALS.length}
              </span>
              <button
                type="button"
                onClick={next}
                className="w-10 h-10 rounded-full border border-stone-300 hover:bg-stone-100 text-stone-700 flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800"
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
