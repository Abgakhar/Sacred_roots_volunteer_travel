import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloatingButton from '@/components/layout/WhatsAppFloatingButton';

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fbfbf8] text-[#14261d]">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-36 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-950 bg-emerald-100/90 px-3.5 py-1 rounded-full">
              Agreement
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14261d]">
              Terms of Service &amp; Participant Agreement
            </h1>
            <p className="text-xs text-stone-500">Effective Date: January 1, 2025</p>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm space-y-6 text-sm text-stone-700 leading-relaxed">
            <section className="space-y-2">
              <h2 className="font-serif text-xl font-bold text-[#14261d]">1. Acceptance of Terms</h2>
              <p>
                By enrolling in a Sacred Roots journey, submitting an application, or utilizing this website, you agree to comply with these terms, safety guidelines, and code of conduct.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-xl font-bold text-[#14261d]">2. Code of Ethical Conduct &amp; Respect</h2>
              <p>
                Sacred Roots operates in sensitive indigenous reserves and fragile biological stations. All travelers agree to follow instructions from licensed Costa Rican guides, avoid unauthorized wildlife interaction, respect cultural protocols, and abide by local laws.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-xl font-bold text-[#14261d]">3. Travel Insurance Requirement</h2>
              <p>
                All participants in our Costa Rican expeditions must maintain comprehensive travel medical insurance covering emergency medical treatment, hospital evacuation, and trip interruption.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-xl font-bold text-[#14261d]">4. Inquiries</h2>
              <p>
                For questions regarding contracts, school district memorandums, or group agreements, contact <strong className="text-stone-900">operations@sacredrootstravel.com</strong>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
