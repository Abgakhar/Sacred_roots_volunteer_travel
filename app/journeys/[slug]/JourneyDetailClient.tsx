'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  MapPin, 
  Users, 
  Check, 
  X, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  Sparkles,
  MessageCircle
} from 'lucide-react';
import { Journey } from '@/data/journeys';

interface JourneyDetailClientProps {
  journey: Journey;
}

export default function JourneyDetailClient({ journey }: JourneyDetailClientProps) {
  const [activeDay, setActiveDay] = useState<number>(1);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="pt-28 sm:pt-36 pb-24">
        
        {/* Top Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <nav className="flex items-center gap-2 text-xs text-stone-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-emerald-800">Home</Link>
            <span>/</span>
            <Link href="/journeys" className="hover:text-emerald-800">Journeys</Link>
            <span>/</span>
            <span className="text-stone-900 font-semibold">{journey.title}</span>
          </nav>
        </div>

        {/* 1. Header & Hero Presentation */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-950 text-white">
                  {journey.category.toUpperCase()} EXPEDITION
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100/90 text-emerald-950">
                  {journey.duration}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-stone-200 text-stone-800">
                  Fitness: {journey.fitnessLevel}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14261d] tracking-tight leading-tight">
                {journey.title}
              </h1>

              <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
                {journey.tagline}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-stone-600 border-t border-stone-200">
                <div className="flex items-center gap-1.5 font-medium">
                  <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{journey.location}</span>
                </div>
                <div className="flex items-center gap-1.5 font-medium">
                  <Users className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{journey.groupSize}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/apply?journey=${journey.slug}`}
                  className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-bold text-white bg-[#1a4231] hover:bg-[#122e22] rounded-xl shadow-md transition-all"
                >
                  <span>Apply for This Experience</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>

                <a
                  href={`https://wa.me/50688880000?text=Hello%20Sacred%20Roots%20team,%20I'm%20interested%20in%20the%20${encodeURIComponent(journey.title)}%20journey.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  <span>Ask a Question on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Hero Main Visual */}
            <div className="lg:col-span-5 relative h-[360px] sm:h-[440px] rounded-3xl overflow-hidden shadow-xl border border-stone-200 bg-stone-900">
              <Image
                src={journey.heroImage}
                alt={journey.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 500px"
                referrerPolicy="no-referrer"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white text-xs">
                <span className="font-semibold text-emerald-300">Impact Focus:</span>
                <p className="font-bold text-sm text-white mt-0.5">{journey.impactCategory}</p>
              </div>
            </div>

          </div>
        </section>

        {/* 2. Overview & Key Highlights */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-stone-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#14261d]">
                Experience Overview
              </h2>
              <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
                {journey.overview}
              </p>

              <div className="space-y-3 pt-2">
                <h3 className="font-serif text-xl font-bold text-[#14261d]">
                  Key Journey Highlights
                </h3>
                <ul className="space-y-2.5">
                  {journey.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-stone-700">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick Summary Card */}
            <div className="lg:col-span-5 bg-white p-7 rounded-3xl border border-stone-200 shadow-sm space-y-5">
              <h3 className="font-serif text-xl font-bold text-[#14261d] pb-3 border-b border-stone-100">
                At a Glance
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <span className="text-stone-600 block">Best For</span>
                  <p className="font-semibold text-stone-900">{journey.bestFor}</p>
                </div>
                <div>
                  <span className="text-stone-600 block">Experience Type</span>
                  <p className="font-semibold text-stone-900">{journey.experienceType}</p>
                </div>
                <div>
                  <span className="text-stone-600 block">Starting Investment</span>
                  <p className="font-bold text-emerald-900 text-base">{journey.investment.startingPrice}</p>
                  <p className="text-[11px] text-stone-600">{journey.investment.priceNote}</p>
                </div>
                <div>
                  <span className="text-stone-600 block">Deposit to Reserve</span>
                  <p className="font-semibold text-stone-900">{journey.investment.depositRequired}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100">
                <Link
                  href={`/apply?journey=${journey.slug}`}
                  className="w-full text-center block py-3 px-4 text-xs font-bold text-white bg-[#1a4231] hover:bg-[#122e22] rounded-xl shadow"
                >
                  Reserve Your Spot Now
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* 3. What You'll Actually Do (Detailed Activities) */}
        <section className="py-16 bg-[#f4f4ef] border-y border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                Hands-On Tasks
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#14261d]">
                What You Will Actually Do in the Field
              </h2>
              <p className="text-sm text-stone-600">
                Direct involvement from Day 1 alongside licensed Costa Rican scientists and community leaders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {journey.actualActivities.map((act, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-2">
                  <h4 className="font-serif text-lg font-bold text-[#14261d]">
                    {act.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {act.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4 & 5. Learning Outcomes & Verified Real Impact */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Learning Outcomes */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                Educational Depth
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#14261d]">
                What You Will Learn
              </h2>
              <ul className="space-y-3">
                {journey.learningOutcomes.map((lo, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700 bg-white p-4 rounded-xl border border-stone-200">
                    <Sparkles className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{lo}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact Contribution */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                Measurable Impact
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#14261d]">
                Your Direct Contribution
              </h2>
              <div className="bg-[#14261d] text-white p-6 sm:p-8 rounded-3xl space-y-6">
                <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
                  {journey.impactContribution.summary}
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-emerald-800">
                  {journey.impactContribution.metrics.map((m, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <span className="font-serif text-2xl font-bold text-emerald-300">{m.value}</span>
                      <p className="text-xs text-stone-300">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 6. Sample Itinerary (Day-by-Day Accordion) */}
        <section className="py-16 bg-[#f4f4ef] border-y border-stone-200" id="itinerary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                Daily Breakdown
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#14261d]">
                Sample Day-by-Day Itinerary
              </h2>
              <p className="text-sm text-stone-600">
                Pacing is designed around deep engagement rather than rushed transit.
              </p>
            </div>

            <div className="space-y-4 max-w-4xl mx-auto">
              {journey.sampleItinerary.map((day) => {
                const isOpen = activeDay === day.day;
                return (
                  <div 
                    key={day.day}
                    className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveDay(isOpen ? 0 : day.day)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-stone-50 transition-colors focus:outline-none"
                    >
                      <div className="flex items-center gap-4">
                        <span className="w-10 h-10 rounded-xl bg-emerald-950 text-white font-bold text-sm flex items-center justify-center shrink-0">
                          D{day.day}
                        </span>
                        <div>
                          <h3 className="font-serif text-lg font-bold text-[#14261d]">
                            Day {day.day}: {day.title}
                          </h3>
                          <p className="text-xs text-emerald-800 font-medium">{day.subtitle}</p>
                        </div>
                      </div>
                      <div className="p-1 rounded-full text-stone-400">
                        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-2 border-t border-stone-100 space-y-4 text-xs sm:text-sm text-stone-700 animate-in fade-in duration-200">
                        <p className="leading-relaxed">
                          {day.description}
                        </p>

                        <div className="space-y-1.5 pt-2">
                          <strong className="text-stone-900 block text-xs uppercase tracking-wider">Scheduled Activities:</strong>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {day.activities.map((act, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-stone-600">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 shrink-0" />
                                <span>{act}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-stone-100 text-xs text-stone-500">
                          <div><strong className="text-stone-800">Meals:</strong> {day.meals}</div>
                          <div><strong className="text-stone-800">Stay:</strong> {day.stay}</div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 7. What's Included & What's Not Included */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <h2 className="font-serif text-3xl font-bold text-[#14261d]">
              Transparent Inclusions
            </h2>
            <p className="text-sm text-stone-600">
              Clear pricing without hidden surprise fees once in Costa Rica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Included */}
            <div className="bg-emerald-50/70 rounded-3xl p-8 border border-emerald-200 space-y-4">
              <div className="flex items-center gap-2 text-emerald-950 font-serif text-xl font-bold">
                <Check className="w-5 h-5 text-emerald-800 stroke-[3]" />
                <span>What’s Included</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-700">
                {journey.included.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Included */}
            <div className="bg-stone-50 rounded-3xl p-8 border border-stone-200 space-y-4">
              <div className="flex items-center gap-2 text-stone-900 font-serif text-xl font-bold">
                <X className="w-5 h-5 text-stone-500" />
                <span>What’s Not Included</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                {journey.notIncluded.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <X className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        {/* 8 & 9. Dates & Availability + Investment */}
        <section className="py-16 bg-[#f4f4ef] border-y border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-lg space-y-8">
              
              <div className="space-y-2 text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                  Join a Cohort
                </span>
                <h2 className="font-serif text-3xl font-bold text-[#14261d]">
                  Upcoming Departure Seasons &amp; Availability
                </h2>
              </div>

              <div className="space-y-3">
                {journey.dates.map((d, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-stone-50 border border-stone-200 gap-3 text-xs sm:text-sm">
                    <div>
                      <strong className="text-stone-900 block text-sm">{d.season}</strong>
                      <span className="text-stone-600">{d.availability}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold self-start sm:self-center ${
                      d.status === 'Open' ? 'bg-emerald-100 text-emerald-900' :
                      d.status === 'Filling Fast' ? 'bg-amber-100 text-amber-900' :
                      'bg-stone-200 text-stone-800'
                    }`}>
                      {d.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Investment Block */}
              <div className="p-6 rounded-2xl bg-emerald-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-emerald-300 font-semibold block">Total Program Investment</span>
                  <span className="font-serif text-3xl font-bold">{journey.investment.startingPrice}</span>
                  <p className="text-xs text-stone-300 mt-1">{journey.investment.priceNote}</p>
                </div>

                <Link
                  href={`/apply?journey=${journey.slug}`}
                  className="px-8 py-3.5 text-sm font-bold text-[#14261d] bg-[#fbfbf8] hover:bg-white rounded-xl shadow transition-colors text-center shrink-0"
                >
                  Apply for This Program
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* 10. Program FAQs */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-10">
            <h2 className="font-serif text-3xl font-bold text-[#14261d]">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Specific details for this Costa Rican experience.
            </p>
          </div>

          <div className="space-y-4">
            {journey.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-stone-50 transition-colors"
                  >
                    <span className="font-serif text-base font-bold text-[#14261d]">
                      {faq.question}
                    </span>
                    <span className="text-stone-400">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 11. Final Program CTA Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <div className="bg-[#14261d] rounded-3xl p-8 sm:p-12 text-white text-center space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              Ready to Join the {journey.title}?
            </h2>
            <p className="text-sm text-stone-300 max-w-2xl mx-auto leading-relaxed">
              Spots in each cohort are limited to 14 participants to protect local biomes and ensure close field mentorship.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href={`/apply?journey=${journey.slug}`}
                className="px-8 py-4 text-sm font-bold text-[#14261d] bg-[#fbfbf8] hover:bg-white rounded-xl shadow-lg transition-colors"
              >
                Submit Journey Application
              </Link>
              <Link
                href="/journeys"
                className="px-8 py-4 text-sm font-semibold text-white bg-emerald-900/60 hover:bg-emerald-800/80 border border-emerald-700/60 rounded-xl transition-colors"
              >
                View Other Experiences
              </Link>
            </div>
          </div>
        </section>
    </div>
  );
}
