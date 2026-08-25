import React from 'react';
import { 
  Sprout, 
  GraduationCap, 
  Compass, 
  HeartHandshake, 
  Hammer, 
  SunMedium 
} from 'lucide-react';

export default function WhatYouWillDoSection() {
  const pillars = [
    {
      title: 'Restore',
      subtitle: 'Active Conservation',
      description: 'Dig, plant, and protect. Propagate mangrove nurseries, plant keystone canopy trees in biological corridors, and protect endangered sea turtle hatcheries from erosion and poachers.',
      icon: Sprout,
      color: 'bg-emerald-100 text-emerald-800'
    },
    {
      title: 'Learn',
      subtitle: 'Field Science & Ancestral Wisdom',
      description: 'Learn directly from Costa Rican marine biologists, certified naturalist guides, and indigenous elders. Master camera-trapping methods, benthic stream bio-assays, and organic cacao agroforestry.',
      icon: GraduationCap,
      color: 'bg-amber-100 text-amber-800'
    },
    {
      title: 'Explore',
      subtitle: 'Untamed Ecosystems',
      description: 'Experience rainforest canopies, misty cloud forest bridges, secluded volcanic thermal springs, and vibrant Pacific coral reefs away from mass commercial tourism lines.',
      icon: Compass,
      color: 'bg-teal-100 text-teal-800'
    },
    {
      title: 'Connect',
      subtitle: 'Human Reciprocity',
      description: 'Form lasting bonds with rural host families, women’s artisan cooperatives, and fellow travelers. Discover Costa Rica’s "Pura Vida" ethos not as a slogan, but as a living communal practice.',
      icon: HeartHandshake,
      color: 'bg-rose-100 text-rose-800'
    },
    {
      title: 'Serve',
      subtitle: 'Hands-On Community Labor',
      description: 'Contribute meaningful sweat equity to verified local projects: repairing rural school footpaths, constructing clean water systems, and cataloging coastal marine debris data.',
      icon: Hammer,
      color: 'bg-indigo-100 text-indigo-800'
    },
    {
      title: 'Reflect',
      subtitle: 'Integration & Perspective',
      description: 'Daily evening reflection circles, guided mindfulness, and structured synthesis. Transform raw international adventure into lasting life purpose, returning home genuinely changed.',
      icon: SunMedium,
      color: 'bg-orange-100 text-orange-800'
    }
  ];

  return (
    <section className="py-20 bg-[#fbfbf8]" aria-labelledby="what-you-will-do-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-950 bg-emerald-100/90 px-3.5 py-1 rounded-full">
            The Six Pillars of Participation
          </span>
          <h2 id="what-you-will-do-title" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14261d]">
            What You’ll Actually Do
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            No vague promises or passive bus tours. Every day blends active physical service, rigorous field learning, and cultural immersion.
          </p>
        </div>

        {/* 6 Action Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-8 border border-stone-200/80 shadow-sm hover:shadow-md hover:border-emerald-700/40 transition-all duration-300 space-y-4"
              >
                <div className={`w-12 h-12 rounded-xl ${pillar.color} flex items-center justify-center`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-900 block">
                    {pillar.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#14261d] mt-0.5">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
