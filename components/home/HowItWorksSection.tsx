import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Choose Your Experience',
      description: 'Explore our verified Costa Rican journeys (Marine, Wildlife, Indigenous Cultural, Educational, or Custom Groups).'
    },
    {
      number: '02',
      title: 'Tell Us About Your Trip',
      description: 'Submit your preferred dates, group size, traveler ages, and personal or academic goals through our simple application portal.'
    },
    {
      number: '03',
      title: 'Plan With Our Team',
      description: 'Hop on a personalized 1-on-1 video call or WhatsApp consult with our founders to finalize your custom itinerary details.'
    },
    {
      number: '04',
      title: 'Prepare for Costa Rica',
      description: 'Receive your comprehensive field packing checklist, cultural etiquette guide, health & safety briefing, and flight coordination.'
    },
    {
      number: '05',
      title: 'Travel, Learn & Serve',
      description: 'Land in San José or Liberia. We handle 100% of the in-country logistics so you can fully immerse in nature and hands-on service.'
    },
    {
      number: '06',
      title: 'Stay Connected to Impact',
      description: 'Receive verified GPS coordinates for your planted trees, service hour certificates, and annual field updates from partner stations.'
    }
  ];

  return (
    <section className="py-20 bg-[#f4f4ef] border-t border-stone-200" aria-labelledby="how-it-works-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-950 bg-emerald-100/90 px-3.5 py-1 rounded-full">
            Simple 6-Step Journey
          </span>
          <h2 id="how-it-works-title" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14261d]">
            How It Works
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            From your first inquiry to post-trip impact tracking, our team guides you through every step with transparency and care.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-sm relative flex flex-col justify-between space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-3xl font-bold text-emerald-800">
                  {step.number}
                </span>
                <div className="w-2 h-2 rounded-full bg-emerald-700" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-serif text-lg font-bold text-[#14261d]">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <Link
            href="/apply"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#1a4231] hover:bg-[#122e22] rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <span>Start Planning Your Journey</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

      </div>
    </section>
  );
}
