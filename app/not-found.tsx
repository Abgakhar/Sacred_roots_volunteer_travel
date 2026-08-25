import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Compass, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fbfbf8] text-[#14261d]">
      <Navbar />

      <main className="flex-1 flex items-center justify-center pt-28 sm:pt-36 pb-20 px-4">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-xl text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
            <Compass className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-900">
              Off the Beaten Trail
            </span>
            <h1 className="font-serif text-3xl font-bold text-[#14261d]">
              Page Not Found
            </h1>
            <p className="text-xs sm:text-sm text-stone-600">
              The page you are looking for might have been moved or does not exist. Let’s guide you back to our Costa Rican journeys.
            </p>
          </div>

          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-[#1a4231] hover:bg-[#122e22] text-white font-bold text-xs shadow transition-colors"
            >
              <span>Return to Sacred Roots Home</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
