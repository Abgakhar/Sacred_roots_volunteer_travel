import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Compass, ShieldCheck, Phone } from 'lucide-react';

export default function FinalCtaSection() {
  return (
    <section className="relative py-24 bg-[#14261d] text-white overflow-hidden" aria-label="Call to Action">
      
      {/* Background Image with Dark Tint */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1800&q=80"
          alt="Costa Rica coastal rainforest landscape"
          fill
          referrerPolicy="no-referrer"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#102018]/95 via-[#14261d]/90 to-[#102018]/95" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/80 border border-emerald-700/50 text-xs font-semibold text-emerald-300">
          <span>Costa Rica · Purpose-Driven Journeys</span>
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
          Ready to Travel Differently?
        </h2>

        <p className="text-base sm:text-xl text-stone-300 max-w-2xl mx-auto leading-relaxed">
          Explore Costa Rica through nature, culture, conservation, and meaningful human connection. Whether you are an individual, family, school, or team, we will craft your journey with care.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 pt-4">
          <Link
            href="/apply"
            id="final-plan-journey-cta"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#14261d] bg-[#fbfbf8] hover:bg-white active:bg-stone-200 rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            <span>Plan Your Journey</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>

          <Link
            href="/journeys"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-emerald-900/60 hover:bg-emerald-800/80 border border-emerald-700/50 rounded-xl transition-colors"
          >
            <span>Explore Experiences</span>
          </Link>
        </div>

        <div className="pt-8 border-t border-emerald-900/60 flex flex-wrap items-center justify-center gap-8 text-xs text-stone-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>No Obligation Consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-emerald-400" />
            <span>100% Tailored Itineraries</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>Direct WhatsApp Support: +506 8888-0000</span>
          </div>
        </div>

      </div>
    </section>
  );
}
