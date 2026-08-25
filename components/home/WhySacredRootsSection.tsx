import React from 'react';
import { 
  Users2, 
  Sparkles, 
  ShieldCheck, 
  Footprints, 
  Sliders, 
  HeartHandshake 
} from 'lucide-react';

export default function WhySacredRootsSection() {
  const differentiators = [
    {
      title: 'Local Connection & Direct Ownership',
      description: 'Our journeys are co-designed directly with Costa Rican community cooperatives and licensed naturalists—not brokered through multiple foreign third-party agencies.',
      icon: Users2
    },
    {
      title: 'Hands-On, Immersive Participation',
      description: 'You will never sit on a bus snapping photos through tinted glass. You walk active turtle beaches, collect field science samples, and cook alongside host families.',
      icon: Footprints
    },
    {
      title: 'Small, Intentional Group Cohorts',
      description: 'We strictly cap group sizes at 6 to 14 travelers. This protects fragile ecosystems, minimizes cultural disruption, and ensures deep personal mentorship.',
      icon: Sliders
    },
    {
      title: 'Safety-First Logistics & Medical Protocols',
      description: 'Full-time Wilderness First Responder (WFR) expedition leaders, private sanitized transport, and 24/7 in-country emergency satellite communication protocols.',
      icon: ShieldCheck
    },
    {
      title: 'Curriculum & Customization Options',
      description: 'We adapt schedules, activities, and academic outcomes to match school NGSS/IB rubrics, family age spreads, or corporate ESG reporting standards.',
      icon: Sparkles
    },
    {
      title: 'Genuine Reciprocity & Humility',
      description: 'We enter communities as humble invited guests. Every service task is requested by local leaders to serve long-term village and conservation goals.',
      icon: HeartHandshake
    }
  ];

  return (
    <section className="py-20 bg-[#fbfbf8]" aria-labelledby="why-sacred-roots-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-950 bg-emerald-100/90 px-3.5 py-1 rounded-full">
            Our Key Differences
          </span>
          <h2 id="why-sacred-roots-title" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14261d]">
            Why Choose Sacred Roots?
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            We bridge the gap between soulful, life-changing travel and rigorous, transparent operational excellence.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((diff, idx) => {
            const Icon = diff.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-7 border border-stone-200/80 shadow-sm hover:shadow-md transition-all space-y-3"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#14261d]">
                  {diff.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {diff.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
