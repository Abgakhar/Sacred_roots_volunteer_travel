'use client';

import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {isOpen && (
        <div className="mb-3 bg-white rounded-2xl shadow-2xl border border-stone-200 p-4 w-72 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-start justify-between pb-2 border-b border-stone-100">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-stone-900">Sacred Roots Concierge</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-stone-400 hover:text-stone-700 text-xs p-1"
              aria-label="Close message"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-xs text-stone-600 my-2.5 leading-relaxed">
            Have questions about dates, safety, or custom trips? Chat with our team in Costa Rica on WhatsApp!
          </p>
          <a
            href="https://wa.me/50688880000?text=Hello%20Sacred%20Roots%20team,%20I'm%20exploring%20journeys%20to%20Costa%20Rica%20and%20would%20love%20some%20guidance!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2 px-3 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-lg shadow transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Open WhatsApp Chat</span>
          </a>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-13 h-13 rounded-full bg-[#1a4231] hover:bg-[#122e22] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-800"
        aria-label="Open WhatsApp conversation"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-emerald-300" />
      </button>
    </div>
  );
}
