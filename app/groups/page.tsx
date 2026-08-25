import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Users, 
  Sparkles, 
  ShieldCheck, 
  MapPin, 
  ArrowRight, 
  Check, 
  Compass, 
  HeartHandshake,
  Calendar
} from 'lucide-react';

export default function CustomGroupsPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-20">
        
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-950 bg-emerald-100/90 px-3.5 py-1 rounded-full">
                Custom Tailored Travel
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#14261d] tracking-tight leading-tight">
                Private &amp; Custom Group Journeys in Costa Rica
              </h1>
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
                No two groups are the same. Sacred Roots designs private expeditions configured around your specific goals, multi-generational age ranges, fitness levels, and conservation passions.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/apply?type=custom"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-bold text-white bg-[#1a4231] hover:bg-[#122e22] rounded-xl shadow transition-all"
                >
                  <span>Plan a Custom Group Journey</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 rounded-xl transition-colors"
                >
                  <span>Schedule Consultation Call</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-xl border border-stone-200 bg-stone-900">
              <Image
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
                alt="Family traveling together in Costa Rica"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 500px"
                referrerPolicy="no-referrer"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-stone-950/20" />
            </div>

          </div>
        </section>

        {/* Tailored Pillars */}
        <section className="py-16 bg-[#f4f4ef] border-y border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
              <h2 className="font-serif text-3xl font-bold text-[#14261d]">
                Designed Around Your Group’s Unique Rhythm
              </h2>
              <p className="text-sm text-stone-600">
                Whether traveling with 8-year-old grandchildren or a 30-person university alumni group.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#14261d]">Multi-Generational Pacing</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Gentle wildlife river floats for grandparents and little ones, with optional canopy ziplining or active rainforest hikes for older teens.
                </p>
              </div>

              <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#14261d]">Dedicated Private Guides</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Your group has exclusive use of private air-conditioned transport, professional drivers, and certified bilingual Costa Rican naturalist guides.
                </p>
              </div>

              <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#14261d]">Tailored Service Projects</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Choose the legacy your group leaves behind: planting a family forest parcel, turtle hatchery support, or rural school classroom painting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Group Inquiry Form CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-xl space-y-6 text-center">
            <h2 className="font-serif text-3xl font-bold text-[#14261d]">
              Ready to Design Your Group’s Journey?
            </h2>
            <p className="text-stone-600 text-sm max-w-xl mx-auto leading-relaxed">
              Tell us about your proposed dates, group size, and dream activities. Our founders will respond within 24 business hours with a customized itinerary proposal.
            </p>
            <div className="pt-2 flex justify-center">
              <Link
                href="/apply?type=custom"
                className="px-8 py-4 text-sm font-bold text-white bg-[#1a4231] hover:bg-[#122e22] rounded-xl shadow transition-colors"
              >
                Start Custom Group Inquiry →
              </Link>
            </div>
          </div>
        </section>
    </div>
  );
}
