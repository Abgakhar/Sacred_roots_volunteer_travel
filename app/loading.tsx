import React from 'react';
import { Leaf } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fbfbf8] text-[#14261d]">
      {/* Skeleton Navbar Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#fbfbf8]/85 backdrop-blur-sm border-b border-stone-200/40 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-lg bg-[#1a4231]/10 flex items-center justify-center">
              <Leaf className="w-5 h-5 text-[#1a4231] animate-pulse" />
            </div>
            <div className="space-y-1">
              <div className="h-4 w-28 bg-stone-200 rounded animate-pulse" />
              <div className="h-3 w-36 bg-stone-100 rounded animate-pulse" />
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <div className="h-4 w-16 bg-stone-200 rounded animate-pulse" />
            <div className="h-4 w-16 bg-stone-200 rounded animate-pulse" />
            <div className="h-4 w-16 bg-stone-200 rounded animate-pulse" />
          </div>
          <div className="h-10 w-36 bg-stone-200 rounded-lg animate-pulse" />
        </div>
      </div>

      {/* Main Loading Stage */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 pt-28 sm:pt-36">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="relative flex items-center justify-center">
            {/* Pulsing Concentric Circles */}
            <div className="absolute w-24 h-24 rounded-full border border-emerald-800/10 animate-ping duration-1000" />
            <div className="absolute w-16 h-16 rounded-full border border-emerald-800/20 animate-pulse duration-1500" />
            
            {/* Core Brand Icon */}
            <div className="relative w-16 h-16 rounded-2xl bg-[#1a4231] text-emerald-100 flex items-center justify-center shadow-lg">
              <Leaf className="w-8 h-8 text-emerald-300 animate-bounce duration-1000" />
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="font-serif text-2xl font-bold text-[#14261d]">
              Sacred Roots
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 max-w-xs mx-auto leading-relaxed animate-pulse">
              Preparing your purpose-driven journey to Costa Rica...
            </p>
          </div>

          {/* Minimalist Progress Indicator */}
          <div className="max-w-[180px] mx-auto h-1 bg-stone-200 rounded-full overflow-hidden">
            <div className="h-full bg-[#1a4231] rounded-full w-2/3 animate-[loading-bar_1.5s_infinite_ease-in-out]" />
          </div>
        </div>
      </main>

      {/* Styled inline keyframes for the progress line since Tailwind 4 is configured strictly */}
      <style>{`
        @keyframes loading-bar {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(50%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
