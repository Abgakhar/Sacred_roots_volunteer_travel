import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Compass, ShieldCheck, TreePine, Users, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      
      {/* Background Subtle Gradient & Organic Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-emerald-100/50 via-amber-50/30 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Positioning & Conversion Focus */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Trust Ticker Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950 text-white text-xs font-semibold tracking-wide shadow-sm border border-emerald-800">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Costa Rica · Educational Travel · Conservation · Cultural Immersion</span>
            </div>

            {/* Main Conversion Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#10231b] leading-[1.15]">
              Travel With Purpose. <br />
              <span className="text-[#1a4231] italic font-normal">Leave With Perspective.</span>
            </h1>

            {/* Clear Customer-Facing Supporting Copy */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
              Sacred Roots creates immersive educational and volunteer journeys across Costa Rica. We connect students, families, volunteers, and groups directly with wildlife conservation, indigenous communities, and hands-on environmental service.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Link
                href="/journeys"
                id="hero-explore-journeys-cta"
                className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-white bg-[#1a4231] hover:bg-[#122e22] active:bg-[#0c2018] rounded-xl shadow-md hover:shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-800"
              >
                <span>Explore Our Journeys</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>

              <Link
                href="/apply?type=custom"
                id="hero-plan-custom-cta"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 active:bg-stone-100 rounded-xl shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-stone-400"
              >
                <span>Plan a Custom Experience</span>
              </Link>
            </div>

            {/* Core Trust Indicators */}
            <div className="pt-6 border-t border-stone-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100/70 text-emerald-800 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-stone-900">100% Local</p>
                  <p className="text-stone-500">Verified community partners</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-100/70 text-emerald-800 flex items-center justify-center shrink-0">
                  <TreePine className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-stone-900">Real Impact</p>
                  <p className="text-stone-500">14,800+ field hours</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="w-8 h-8 rounded-lg bg-emerald-100/70 text-emerald-800 flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-stone-900">Small Cohorts</p>
                  <p className="text-stone-500">6–14 travelers max</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Image Card */}
              <div className="relative h-[440px] sm:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-stone-200/80">
                <Image
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80"
                  alt="Participants working on sea turtle and marine conservation in Costa Rica"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
                  referrerPolicy="no-referrer"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
                
                {/* Overlay Card Details */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-stone-900/85 backdrop-blur-md border border-white/20 text-white">
                  <div className="flex items-center justify-between text-xs text-emerald-300 font-semibold mb-1">
                    <span>FLAGSHIP EXPEDITION</span>
                    <span>7–10 DAYS</span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-white leading-snug">
                    Marine &amp; Sea Turtle Conservation
                  </h3>
                  <p className="text-xs text-stone-300 mt-1 line-clamp-2">
                    Night beach nesting patrols, mangrove propagation &amp; reef health monitoring with local marine biologists.
                  </p>
                </div>
              </div>

              {/* Floating Accent Badge Top Left */}
              <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-stone-200 p-3 hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-800 text-white flex items-center justify-center font-bold text-sm">
                  CR
                </div>
                <div className="text-left pr-2">
                  <p className="text-xs font-bold text-stone-900">Pacific &amp; Osa Peninsula</p>
                  <p className="text-[11px] text-emerald-800 font-medium">Active Season: Open</p>
                </div>
              </div>

              {/* Floating Accent Badge Bottom Right */}
              <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-stone-200 p-3 hidden sm:flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-left pr-1">
                  <p className="text-xs font-bold text-stone-900">100% Verified Field Hours</p>
                  <p className="text-[10px] text-stone-500">Service certificates awarded</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
