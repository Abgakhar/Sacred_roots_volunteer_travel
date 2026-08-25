import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  GraduationCap, 
  ShieldCheck, 
  BookOpen, 
  Award, 
  Check, 
  Users, 
  ArrowRight,
  FileCheck2
} from 'lucide-react';

export default function EducationalTravelPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-20">
        
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-950 bg-emerald-100/90 px-3.5 py-1 rounded-full">
                For Schools, Faculty &amp; Universities
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#14261d] tracking-tight leading-tight">
                Curriculum-Aligned STEM &amp; Environmental Field Travel
              </h1>
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
                Take science out of the textbook. We build turnkey international study trips for middle schools, high schools, and universities combining rigorous field biology, verified service learning, and safety-first risk management.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/apply?type=school"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-bold text-white bg-[#1a4231] hover:bg-[#122e22] rounded-xl shadow transition-all"
                >
                  <span>Plan a Student Journey</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 rounded-xl transition-colors"
                >
                  <span>Request Educator Syllabus Guide</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-xl border border-stone-200 bg-stone-900">
              <Image
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"
                alt="Students studying biodiversity in Costa Rica"
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

        {/* Why Educators Trust Sacred Roots */}
        <section className="py-16 bg-[#f4f4ef] border-y border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
              <h2 className="font-serif text-3xl font-bold text-[#14261d]">
                Why Science Departments &amp; Chaperones Choose Us
              </h2>
              <p className="text-sm text-stone-600">
                Uncompromising safety protocols combined with genuine academic inquiry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#14261d]">1:6 Supervision Ratio &amp; WFR</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Strict student supervision standards. Every field guide is Wilderness First Responder (WFR) certified with 24/7 dedicated hospital evacuation networks.
                </p>
              </div>

              <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#14261d]">NGSS &amp; IB Curriculum Aligned</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Field modules map directly to AP Environmental Science, IB Biology, and Next Generation Science Standards with customized student field workbooks.
                </p>
              </div>

              <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#14261d]">Free Educator Travel Slots</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  We provide 1 complimentary educator/chaperone travel placement for every 8 paying students to ensure smooth administrative approval.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Parent & School Board Peace of Mind Box */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-lg space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#14261d]">
              School Board &amp; Parent Presentation Support
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              We know that proposing an international student trip requires board approval, liability reviews, and parent confidence. Sacred Roots provides:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-stone-700">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-800 shrink-0" />
                <span>Custom PDF Risk Assessment Dossier</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-800 shrink-0" />
                <span>Live Virtual Parent Q&amp;A Night Hosting</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-800 shrink-0" />
                <span>Service Hours Certificate Issuance</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-800 shrink-0" />
                <span>Dietary &amp; Allergy Management Protocols</span>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-4 justify-between items-center">
              <span className="text-xs text-stone-500">Contact our Director of Operations, Reese Maskwa</span>
              <Link
                href="/apply?type=school"
                className="px-6 py-3 text-xs font-bold text-white bg-[#1a4231] hover:bg-[#122e22] rounded-xl shadow"
              >
                Schedule School Presentation →
              </Link>
            </div>
          </div>
        </section>
    </div>
  );
}
