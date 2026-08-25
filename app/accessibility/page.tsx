import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloatingButton from '@/components/layout/WhatsAppFloatingButton';

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fbfbf8] text-[#14261d]">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-36 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-950 bg-emerald-100/90 px-3.5 py-1 rounded-full">
              Inclusion
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14261d]">
              Accessibility Statement
            </h1>
            <p className="text-xs text-stone-500">Committed to WCAG 2.1 AA Standards</p>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm space-y-6 text-sm text-stone-700 leading-relaxed">
            <section className="space-y-2">
              <h2 className="font-serif text-xl font-bold text-[#14261d]">1. Digital Accessibility</h2>
              <p>
                Sacred Roots is committed to making our digital platform accessible to all users. We continually test against WCAG 2.1 AA guidelines, ensuring adequate color contrast, screen reader compatibility, keyboard navigation, and clear typographic hierarchy.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-xl font-bold text-[#14261d]">2. Physical Field Accessibility in Costa Rica</h2>
              <p>
                We believe nature should be accessible to everyone. While remote rainforest trails and boat landings have inherent terrain factors, we design customized adaptive routes with accessible eco-lodges, paved canopy walkways, and dedicated vehicle support.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-xl font-bold text-[#14261d]">3. Feedback &amp; Assistance</h2>
              <p>
                If you encounter any digital accessibility barriers or need assistance planning an accessible travel itinerary, please contact our team at <strong className="text-stone-900">accessibility@sacredrootstravel.com</strong>.
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
