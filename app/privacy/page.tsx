import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloatingButton from '@/components/layout/WhatsAppFloatingButton';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fbfbf8] text-[#14261d]">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-36 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-950 bg-emerald-100/90 px-3.5 py-1 rounded-full">
              Legal &amp; Transparency
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14261d]">
              Privacy Policy
            </h1>
            <p className="text-xs text-stone-500">Effective Date: January 1, 2025 · Last Updated: August 2025</p>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm space-y-6 text-sm text-stone-700 leading-relaxed">
            <section className="space-y-2">
              <h2 className="font-serif text-xl font-bold text-[#14261d]">1. Our Commitment to Your Privacy</h2>
              <p>
                Sacred Roots Volunteer &amp; Travel (&ldquo;Sacred Roots&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your personal information. We collect only the data necessary to arrange international volunteer journeys, coordinate emergency health protocols in Costa Rica, and verify accredited conservation deliverables.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-xl font-bold text-[#14261d]">2. Information We Collect</h2>
              <p>
                When you submit an application, contact inquiry, or complete pre-departure forms, we may collect:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Contact details: Full legal name, email address, phone/WhatsApp number, home address.</li>
                <li>Travel parameters: Passport details (for national park entry permits), flight itineraries.</li>
                <li>Health &amp; Dietary data: Food allergies, medical considerations, emergency contacts.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-xl font-bold text-[#14261d]">3. How We Use &amp; Protect Your Data</h2>
              <p>
                Your information is used strictly to arrange expedition logistics (national park biological permits, private in-country transport, eco-lodge reservations). We never sell or license personal data to commercial advertisers.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-xl font-bold text-[#14261d]">4. Inquiries and Data Requests</h2>
              <p>
                To request access to or deletion of your personal records, please email our privacy team at <strong className="text-stone-900">privacy@sacredrootstravel.com</strong>.
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
