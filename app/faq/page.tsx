'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  Phone, 
  MessageCircle 
} from 'lucide-react';
import { FAQS } from '@/data/faq';

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({ 'faq-1': true, 'faq-4': true });

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'Programs', label: 'Programs' },
    { id: 'Costs & Payments', label: 'Costs & Payments' },
    { id: 'Travel & Logistics', label: 'Travel & Accommodations' },
    { id: 'Safety & Health', label: 'Safety & Medical' },
    { id: 'Impact & Accountability', label: 'Impact & Local Partners' },
  ];

  const filteredFaqs = FAQS.filter((item) => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="pt-28 sm:pt-36 pb-20">
        
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-950 bg-emerald-100/90 px-3.5 py-1 rounded-full">
              Clarity &amp; Answers
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#14261d] tracking-tight leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-xl text-stone-600 leading-relaxed font-normal">
              Find clear, straightforward answers about program requirements, costs, accommodations, travel safety, and verified impact.
            </p>
          </div>
        </section>

        {/* Filter & Search */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="bg-white p-4 sm:p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center flex-wrap gap-2 w-full lg:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
                    selectedCategory === cat.id
                      ? 'bg-[#1a4231] text-white shadow-sm'
                      : 'bg-[#f4f4ef] text-stone-700 hover:bg-[#eaeae3]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="w-full lg:w-72">
              <input
                type="text"
                placeholder="Search FAQ keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 text-xs sm:text-sm rounded-xl border border-stone-300 bg-[#fbfbf8] focus:outline-none focus:ring-2 focus:ring-emerald-800 text-stone-900"
              />
            </div>
          </div>
        </section>

        {/* FAQs Accordion */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-stone-200 space-y-4">
              <p className="text-stone-600 font-medium">No matching questions found.</p>
              <button
                type="button"
                onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                className="px-4 py-2 text-xs font-bold text-emerald-900 bg-emerald-100 rounded-lg"
              >
                Reset Search
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = !!openItems[faq.id];
              return (
                <div 
                  key={faq.id}
                  className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-stone-50 transition-colors"
                  >
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                        {faq.category}
                      </span>
                      <h3 className="font-serif text-base sm:text-lg font-bold text-[#14261d]">
                        {faq.question}
                      </h3>
                    </div>
                    <span className="text-stone-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3 animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </section>

        {/* Still Have Questions Box */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="bg-[#14261d] rounded-3xl p-8 sm:p-10 border border-emerald-800 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="font-serif text-xl font-bold">Have a Specific Question Not Listed?</h3>
              <p className="text-xs sm:text-sm text-stone-300">
                Chat directly with our founders on WhatsApp or send us an email inquiry.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/contact"
                className="px-6 py-3 text-xs font-bold text-[#14261d] bg-[#fbfbf8] hover:bg-white rounded-xl shadow text-center"
              >
                Contact Team
              </Link>
              <a
                href="https://wa.me/50688880000"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-xs font-bold text-emerald-300 bg-emerald-900/60 hover:bg-emerald-800/80 border border-emerald-700/60 rounded-xl text-center"
              >
                WhatsApp (+506)
              </a>
            </div>
          </div>
        </section>
    </div>
  );
}
