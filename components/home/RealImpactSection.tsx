import React from 'react';
import Link from 'next/link';
import { 
  Clock, 
  TreePine, 
  HeartHandshake, 
  ShieldCheck, 
  ArrowRight,
  TrendingUp,
  Percent
} from 'lucide-react';
import { IMPACT_METRICS, WHERE_MONEY_GOES } from '@/data/impact';

export default function RealImpactSection() {
  const iconMap: Record<string, React.ReactNode> = {
    Clock: <Clock className="w-6 h-6 text-emerald-800" />,
    TreePine: <TreePine className="w-6 h-6 text-emerald-800" />,
    HeartHandshake: <HeartHandshake className="w-6 h-6 text-emerald-800" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-800" />,
  };

  return (
    <section className="py-20 bg-[#12241c] text-white" aria-labelledby="real-impact-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 bg-emerald-900/60 border border-emerald-700/50 px-3.5 py-1 rounded-full">
            Transparent Environmental &amp; Social Accounting
          </span>
          <h2 id="real-impact-title" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-snug">
            Your Journey Should Leave Something Behind — Besides Footprints.
          </h2>
          <p className="text-stone-300 text-base sm:text-lg">
            We reject vague claims. Our travelers’ time, physical effort, and financial contributions are tracked directly with verified community and conservation partners in Costa Rica.
          </p>
        </div>

        {/* 4 Stat Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {IMPACT_METRICS.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-[#193227] rounded-2xl p-6 border border-emerald-800/60 flex flex-col justify-between space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-900/80 flex items-center justify-center">
                {iconMap[stat.iconName]}
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight">
                  {stat.metric}
                </span>
                <h4 className="text-sm font-semibold text-emerald-300 mt-1">
                  {stat.label}
                </h4>
                <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                  {stat.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Financial Transparency Box: Where Your Money Goes */}
        <div className="bg-[#172d23] rounded-3xl p-8 sm:p-10 border border-emerald-800/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-300">
                <Percent className="w-4 h-4" />
                <span>Radical Financial Transparency</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Where Every Dollar of Your Program Fee Goes
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                By eliminating non-essential corporate intermediaries, we disburse the vast majority of our program revenue directly to local field researchers, indigenous host families, and conservation supplies.
              </p>
              <div className="pt-2">
                <Link
                  href="/impact"
                  className="inline-flex items-center text-xs font-bold text-emerald-300 hover:text-emerald-200 gap-1.5"
                >
                  <span>Review Our Full Impact Methodology</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {WHERE_MONEY_GOES.map((item, idx) => (
                <div key={idx} className="bg-[#102018] rounded-xl p-4 border border-emerald-900/60 space-y-2">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-semibold text-stone-200">{item.category}</span>
                    <span className="font-bold text-emerald-400 text-base">{item.percentage}%</span>
                  </div>
                  {/* Progress Bar */}
                  <div className="w-full h-2 rounded-full bg-stone-800 overflow-hidden">
                    <div 
                      className="h-full bg-emerald-500 rounded-full" 
                      style={{ width: `${item.percentage}%` }} 
                    />
                  </div>
                  <p className="text-[11px] text-stone-400 leading-normal">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
