import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  TreePine, 
  Clock, 
  HeartHandshake, 
  Percent, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { IMPACT_METRICS, WHERE_MONEY_GOES, IMPACT_PILLARS } from '@/data/impact';

export default function ImpactPage() {
  const iconMap: Record<string, React.ReactNode> = {
    Clock: <Clock className="w-6 h-6 text-emerald-800" />,
    TreePine: <TreePine className="w-6 h-6 text-emerald-800" />,
    HeartHandshake: <HeartHandshake className="w-6 h-6 text-emerald-800" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-800" />,
  };

  return (
    <div className="pt-28 sm:pt-36 pb-20">
        
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-950 bg-emerald-100/90 px-3.5 py-1 rounded-full">
              Radical Accountability
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#14261d] tracking-tight leading-tight">
              Real, Measured Impact in Costa Rica
            </h1>
            <p className="text-base sm:text-xl text-stone-600 leading-relaxed font-normal">
              We track participant volunteer hours, native trees planted, and financial disbursement directly with our verified Costa Rican field stations. No fake metrics, no vanity claims.
            </p>
          </div>
        </section>

        {/* 4 Core Metrics */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {IMPACT_METRICS.map((stat, idx) => (
              <div key={idx} className="bg-white p-7 rounded-3xl border border-stone-200 shadow-sm space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                  {iconMap[stat.iconName]}
                </div>
                <div>
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-[#14261d]">
                    {stat.metric}
                  </span>
                  <h3 className="text-sm font-bold text-emerald-800 mt-1">{stat.label}</h3>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">{stat.subtext}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Financial Disbursement Transparency */}
        <section className="py-16 bg-[#14261d] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-300">
                  <Percent className="w-4 h-4" />
                  <span>Transparent Fund Accounting</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold">
                  Where Your Program Fees Go
                </h2>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  We believe travelers have a right to know how their investment is spent. By managing our operations with low corporate overhead, 48% of all funds flow directly into local Costa Rican salaries, food, and lodging.
                </p>
              </div>

              <div className="lg:col-span-7 space-y-4">
                {WHERE_MONEY_GOES.map((item, idx) => (
                  <div key={idx} className="bg-[#193227] rounded-2xl p-5 border border-emerald-800/80 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-white">{item.category}</span>
                      <span className="font-bold text-emerald-300 text-lg">{item.percentage}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-stone-800 overflow-hidden">
                      <div className="h-full bg-emerald-400 rounded-full" style={{ width: `${item.percentage}%` }} />
                    </div>
                    <p className="text-xs text-stone-300">{item.description}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* 4 Impact Pillars */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#14261d]">
              Our Four Long-Term Conservation Commitments
            </h2>
            <p className="text-stone-600 text-base">
              Every route and volunteer assignment supports one or more of these pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {IMPACT_PILLARS.map((pillar, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm space-y-4">
                <h3 className="font-serif text-2xl font-bold text-[#14261d]">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {pillar.description}
                </p>
                <div className="pt-2 space-y-2 border-t border-stone-100">
                  <strong className="text-xs uppercase tracking-wider text-stone-900 block">Deliverables:</strong>
                  <ul className="space-y-2">
                    {pillar.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs text-stone-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
    </div>
  );
}
