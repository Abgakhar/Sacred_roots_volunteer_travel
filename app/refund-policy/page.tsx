import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloatingButton from '@/components/layout/WhatsAppFloatingButton';

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fbfbf8] text-[#14261d]">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-36 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-950 bg-emerald-100/90 px-3.5 py-1 rounded-full">
              Booking Policy
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14261d]">
              Cancellation &amp; Refund Policy
            </h1>
            <p className="text-xs text-stone-500">Effective Date: January 1, 2025</p>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm space-y-6 text-sm text-stone-700 leading-relaxed">
            <section className="space-y-2">
              <h2 className="font-serif text-xl font-bold text-[#14261d]">1. Transparent Refund Framework</h2>
              <p>
                Because we commit deposits to local family homestays, private transport drivers, and biological reserves well in advance to support rural livelihoods, our cancellation schedule is as follows:
              </p>
              <ul className="list-disc pl-5 space-y-2 pt-2">
                <li><strong>90+ Days Prior to Departure:</strong> 100% of program balance refunded minus the initial non-refundable administrative deposit ($350).</li>
                <li><strong>60–89 Days Prior to Departure:</strong> 50% of the program fee is refundable, or 100% credit applied toward a future journey within 24 months.</li>
                <li><strong>Less than 60 Days Prior to Departure:</strong> Non-refundable due to pre-committed partner disbursements, but 50% credit transferable to an alternate cohort.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-xl font-bold text-[#14261d]">2. Force Majeure &amp; Weather Contingencies</h2>
              <p>
                If an expedition cannot safely proceed due to extreme weather or official government closures, Sacred Roots will work with travelers to reschedule without penalty or provide credit toward future dates.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-xl font-bold text-[#14261d]">3. Contact Billing Support</h2>
              <p>
                For cancellation requests or cohort transfers, contact <strong className="text-stone-900">billing@sacredrootstravel.com</strong>.
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
