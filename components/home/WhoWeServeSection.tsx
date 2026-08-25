import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  GraduationCap, 
  Users, 
  UserCheck, 
  Building2, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';

export default function WhoWeServeSection() {
  const audiences = [
    {
      title: 'Students & Schools',
      tagline: 'STEM & Experiential Learning',
      description: 'Custom curriculum-aligned programs for middle, high school, and university groups. 1:6 supervision ratios, safety-first logistics, and service hour certification.',
      link: '/groups/educational',
      icon: GraduationCap,
      image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80',
      cta: 'Explore Student Journeys'
    },
    {
      title: 'Multigenerational Families',
      tagline: 'Meaningful Shared Memories',
      description: 'Private journeys tailored so grandparents, parents, and kids can connect deeply with nature, wildlife, and community culture without stressful planning.',
      link: '/groups',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      cta: 'Plan a Family Trip'
    },
    {
      title: 'Individual Volunteers',
      tagline: 'Purpose-Driven Solo Travel',
      description: 'Join open scheduled cohorts on nesting beaches and rainforest corridors. Safe, welcoming, and empowering for solo travelers looking to contribute real hands.',
      link: '/journeys',
      icon: UserCheck,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
      cta: 'Join an Open Cohort'
    },
    {
      title: 'Corporate Teams & B-Corps',
      tagline: 'Leadership & Verified ESG Offsets',
      description: 'Executive retreats combining strategic visioning with team biodiversity insetting and hands-on reforestation in Costa Rican biological corridors.',
      link: '/groups/retreats',
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      cta: 'Plan a Team Retreat'
    }
  ];

  return (
    <section className="py-20 bg-[#fbfbf8]" aria-labelledby="who-we-serve-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-950 bg-emerald-100/90 px-3.5 py-1 rounded-full">
            Tailored Pathways
          </span>
          <h2 id="who-we-serve-title" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14261d]">
            Who We Serve
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            We don’t believe one size fits all. Choose your pathway to explore how we adapt pacing, lodging, and activities specifically for your group.
          </p>
        </div>

        {/* Audience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {audiences.map((aud, idx) => {
            const Icon = aud.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row group"
              >
                {/* Image */}
                <div className="relative h-48 sm:h-auto sm:w-48 shrink-0 bg-stone-900">
                  <Image
                    src={aud.image}
                    alt={aud.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 200px"
                    referrerPolicy="no-referrer"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-stone-950/20" />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-emerald-100 text-emerald-800 flex items-center justify-center">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                        {aud.tagline}
                      </span>
                    </div>
                    
                    <h3 className="font-serif text-xl font-bold text-[#14261d]">
                      {aud.title}
                    </h3>

                    <p className="text-xs text-stone-600 leading-relaxed">
                      {aud.description}
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={aud.link}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-900 hover:text-emerald-950 group-hover:underline"
                    >
                      <span>{aud.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
