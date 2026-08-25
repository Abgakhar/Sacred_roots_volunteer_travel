import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Building2, 
  Sparkles, 
  TreePine, 
  Wifi, 
  Target, 
  ArrowRight, 
  Award,
  CheckCircle2
} from 'lucide-react';

export default function CorporateRetreatsPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-20">
        
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-950 bg-emerald-100/90 px-3.5 py-1 rounded-full">
                For Executive Teams, B-Corps &amp; Leaders
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#14261d] tracking-tight leading-tight">
                Purpose-Driven Leadership Retreats &amp; ESG Offsites
              </h1>
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
                Align your executive leadership, recharge company culture, and create verifiable ESG biodiversity impact. Experience high-end Costa Rican eco-sanctuaries with Starlink connectivity paired with hands-on rainforest corridor restoration.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/apply?type=retreat"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-bold text-white bg-[#1a4231] hover:bg-[#122e22] rounded-xl shadow transition-all"
                >
                  <span>Plan Your Team Retreat</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 rounded-xl transition-colors"
                >
                  <span>Request Corporate ESG Deck</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-xl border border-stone-200 bg-stone-900">
              <Image
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
                alt="Corporate leadership retreat in Costa Rica"
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

        {/* Executive Pillars */}
        <section className="py-16 bg-[#f4f4ef] border-y border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
              <h2 className="font-serif text-3xl font-bold text-[#14261d]">
                The Future of Company Offsites
              </h2>
              <p className="text-sm text-stone-600">
                Moving past sterile hotel ballrooms into living, restorative ecosystems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  <Wifi className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#14261d]">Executive Starlink Facilities</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Open-air conference pavilions equipped with commercial Starlink internet, wireless AV, and private breakout decks nestled in cloud forest mist.
                </p>
              </div>

              <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  <TreePine className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#14261d]">Verifiable ESG Insetting</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Your team finances and plants a permanent branded wildlife corridor parcel, receiving audited GPS data and carbon metrics for annual impact filings.
                </p>
              </div>

              <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#14261d]">Holistic Team Regeneration</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Guided morning breathwork, thermal volcanic spring soaks, farm-to-table culinary dinners, and chartered sunset catamaran team bonding.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="bg-[#14261d] rounded-3xl p-8 sm:p-12 border border-emerald-800 text-white space-y-6 text-center">
            <h2 className="font-serif text-3xl font-bold">
              Ready to Craft Your Company’s Leadership Retreat?
            </h2>
            <p className="text-stone-300 text-sm max-w-xl mx-auto leading-relaxed">
              We coordinate executive travel dates, private luxury eco-lodges, dietary requirements, and custom impact dossiers.
            </p>
            <div className="pt-2 flex justify-center">
              <Link
                href="/apply?type=retreat"
                className="px-8 py-4 text-sm font-bold text-[#14261d] bg-[#fbfbf8] hover:bg-white rounded-xl shadow-lg transition-colors"
              >
                Inquire for Corporate Offsite →
              </Link>
            </div>
          </div>
        </section>
    </div>
  );
}
