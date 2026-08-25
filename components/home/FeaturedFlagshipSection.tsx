import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Check, 
  MapPin, 
  Clock, 
  Users, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  Calendar,
  Compass
} from 'lucide-react';
import { JOURNEYS } from '@/data/journeys';

export default function FeaturedFlagshipSection() {
  const marineJourney = JOURNEYS.find(j => j.id === 'marine-conservation') || JOURNEYS[0];

  return (
    <section className="py-20 bg-[#f4f4ef] border-y border-stone-200" aria-labelledby="featured-flagship-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-950 bg-emerald-100/90 px-3.5 py-1 rounded-full">
            Featured Flagship Experience
          </span>
          <h2 id="featured-flagship-title" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14261d]">
            More Than a Trip. A Living Field Experience.
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            See how our flagship marine journey balances hands-on ocean biology with authentic community hospitality and lasting environmental outcomes.
          </p>
        </div>

        {/* Editorial Feature Box */}
        <div className="bg-white rounded-3xl border border-stone-200/90 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Visual Column */}
          <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-[640px] bg-stone-900">
            <Image
              src={marineJourney.heroImage}
              alt="Marine and Sea Turtle Conservation Expedition in Costa Rica"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              referrerPolicy="no-referrer"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/30 to-transparent" />
            
            {/* Overlay Editorial Insights */}
            <div className="absolute bottom-8 left-8 right-8 text-white space-y-4">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold">
                  Pacific Coast &amp; Golfo Dulce
                </span>
                <span className="px-3 py-1 bg-emerald-800/80 backdrop-blur-md rounded-full text-xs font-semibold">
                  7 to 10 Days
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-snug">
                {marineJourney.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
                Work alongside Costa Rican lead biologists: nighttime turtle patrols, biometric data collection, mangrove planting, and coral reef assessment.
              </p>
            </div>
          </div>

          {/* Right Details Column */}
          <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8">
            
            <div className="space-y-6">
              
              {/* Key Quick Facts Grid */}
              <div className="grid grid-cols-2 gap-4 pb-6 border-b border-stone-200">
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-600">Audience</span>
                  <p className="text-sm font-bold text-stone-900">Students, Families &amp; Volunteers</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-600">Cohort Size</span>
                  <p className="text-sm font-bold text-stone-900">8 to 14 Travelers</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-600">Starting Investment</span>
                  <p className="text-sm font-bold text-[#1a4231]">{marineJourney.investment.startingPrice}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-600">Activity Level</span>
                  <p className="text-sm font-bold text-stone-900">Moderate (Night Walks &amp; Boating)</p>
                </div>
              </div>

              {/* Sample Activities */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                  What You Will Actually Do:
                </h4>
                <ul className="space-y-2.5">
                  {marineJourney.highlights.slice(0, 4).map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Included Highlights */}
              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/60 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-900 uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>All-Inclusive Ground Experience</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Includes private eco-transport throughout Costa Rica, 6 nights sustainable field lodging, 3 chef-prepared local meals daily, certified lead biologists, scientific permits, safety gear, and 24/7 support.
                </p>
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href={`/journeys/${marineJourney.slug}`}
                className="flex-1 text-center py-3 px-6 text-sm font-bold text-white bg-[#1a4231] hover:bg-[#122e22] rounded-xl shadow transition-colors"
              >
                View Full Itinerary &amp; Dates
              </Link>
              <Link
                href={`/apply?journey=${marineJourney.slug}`}
                className="py-3 px-6 text-sm font-semibold text-center text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors"
              >
                Apply for This Program
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
