import React from 'react';
import Link from 'next/link';
import { 
  Compass, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Luggage, 
  HeartHandshake,
  Calendar,
  Phone
} from 'lucide-react';

export default function HowItWorksPage() {
  const timeline = [
    {
      step: '01',
      timing: 'Initial Discovery',
      title: 'Choose Your Experience',
      description: 'Review our flagship and custom journeys. Filter by activity type, ecosystem (marine, cloud forest, lowland rainforest, or indigenous territory), and target audience.'
    },
    {
      step: '02',
      timing: 'Application & Inquiry',
      title: 'Submit Your Trip Goals',
      description: 'Fill out our 3-minute application form with preferred dates, group size, traveler ages, dietary preferences, and conservation or educational objectives.'
    },
    {
      step: '03',
      timing: 'Within 24–48 Hours',
      title: 'Consultation & Custom Proposal',
      description: 'Our founders Reese or Katya connect with you over video call or WhatsApp to review customized itinerary options, room configurations, and transparent pricing.'
    },
    {
      step: '04',
      timing: '30–60 Days Pre-Trip',
      title: 'Pre-Departure Preparation & Packing',
      description: 'Receive your Sacred Roots Field Guide, packing checklists (red-light headlamps, lightweight quick-dry gear, reef-safe sunscreen), and medical/insurance check.'
    },
    {
      step: '05',
      timing: 'In Costa Rica',
      title: 'Travel, Learn & Serve',
      description: 'VIP airport greeting in San José (SJO) or Liberia (LIR). Private air-conditioned coaches, full-time certified bilingual biologists, chef-prepared meals, and daily service.'
    },
    {
      step: '06',
      timing: 'Post-Trip',
      title: 'Impact Verification & Connection',
      description: 'Receive certified service hour documentation, GPS coordinates of your planted biological corridor trees, and annual project updates from local station leaders.'
    }
  ];

  const packingEssentials = [
    'Lightweight quick-dry hiking pants and breathable shirts',
    'Sturdy broken-in waterproof hiking shoes or trail runners',
    'Headlamp with dedicated RED-LIGHT mode (mandatory for sea turtle patrols)',
    'Biodegradable mineral reef-safe sunscreen & DEET-free insect repellent',
    'Lightweight rain jacket or packable waterproof poncho',
    'Reusable filtered water bottle or hydration pack',
    'Dry bag (10–15L) for river rafting and coastal boat expeditions',
    'Passport valid for at least 6 months past return date'
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-20">
        
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-950 bg-emerald-100/90 px-3.5 py-1 rounded-full">
              Seamless Journey
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#14261d] tracking-tight leading-tight">
              How Traveling With Sacred Roots Works
            </h1>
            <p className="text-base sm:text-xl text-stone-600 leading-relaxed font-normal">
              From your first question to your return flight home, our team provides personalized planning, safety-first logistics, and direct community coordination.
            </p>
          </div>
        </section>

        {/* Detailed Timeline Steps */}
        <section className="py-16 bg-[#f4f4ef] border-y border-stone-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 mb-14">
              <h2 className="font-serif text-3xl font-bold text-[#14261d]">
                The Journey Progression
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                Clear expectations at every milestone of your trip.
              </p>
            </div>

            <div className="space-y-6">
              {timeline.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm flex flex-col sm:flex-row gap-6 items-start"
                >
                  <div className="w-14 h-14 rounded-2xl bg-emerald-950 text-white font-serif text-2xl font-bold flex items-center justify-center shrink-0">
                    {item.step}
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                      {item.timing}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#14261d]">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Packing & Preparation Section */}
        <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-lg space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Luggage className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#14261d]">
                  Field Packing Essentials Checklist
                </h2>
                <p className="text-xs text-stone-500">Every traveler receives our comprehensive 12-page guide upon enrollment.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {packingEssentials.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-700">
                  <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-stone-500">Ready to begin the process?</span>
              <Link
                href="/apply"
                className="px-8 py-3.5 text-sm font-bold text-white bg-[#1a4231] hover:bg-[#122e22] rounded-xl shadow"
              >
                Start Your Journey Plan Now →
              </Link>
            </div>
          </div>
        </section>
    </div>
  );
}
