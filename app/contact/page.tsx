'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  Send
} from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: 'general',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 sm:pt-36 pb-20">
        
        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-950 bg-emerald-100/90 px-3.5 py-1 rounded-full">
              Direct Contact
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#14261d] tracking-tight leading-tight">
              Let’s Connect
            </h1>
            <p className="text-base sm:text-xl text-stone-600 leading-relaxed font-normal">
              Whether you are an individual traveler, parent, educator, or corporate group coordinator, our leadership team is ready to assist you.
            </p>
          </div>
        </section>

        {/* Contact Info & Interactive Form */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Direct Contacts */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm space-y-6">
                <h3 className="font-serif text-2xl font-bold text-[#14261d]">
                  In-Country &amp; International Offices
                </h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-stone-900 block font-semibold">Costa Rica Field Base:</strong>
                      <p className="text-stone-600">San José &amp; Drake Bay (Osa Peninsula), Costa Rica</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-stone-900 block font-semibold">Canada Operations Base:</strong>
                      <p className="text-stone-600">Calgary, Alberta, Canada</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-stone-900 block font-semibold">Email Inquiries:</strong>
                      <p className="text-stone-600">info@sacredrootstravel.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-stone-900 block font-semibold">Direct Phone / WhatsApp:</strong>
                      <p className="text-stone-600">+506 8888-0000 (Costa Rica) / +1 (403) 555-0199 (Canada)</p>
                    </div>
                  </div>
                </div>

                {/* Direct WhatsApp Callout */}
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-emerald-900 block">Fast Response WhatsApp</span>
                    <span className="text-[11px] text-emerald-800">Typically replies within 1–2 hours</span>
                  </div>
                  <a
                    href="https://wa.me/50688880000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold shrink-0 inline-flex items-center gap-1.5 shadow"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Open Chat</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-sm">
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#14261d]">
                      Thank You for Reaching Out!
                    </h3>
                    <p className="text-stone-600 text-sm max-w-md mx-auto">
                      Our founding team has received your message and will get in touch with you at <strong className="text-stone-900">{formData.email}</strong> within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 text-xs font-bold text-emerald-900 bg-emerald-50 rounded-xl"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-1">
                      <h3 className="font-serif text-2xl font-bold text-[#14261d]">
                        Send Us a Direct Message
                      </h3>
                      <p className="text-xs text-stone-500">
                        Fill in your details below and we will get back to you promptly.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-stone-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Jane Doe"
                          className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-[#fbfbf8] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-800"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-stone-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jane@example.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-[#fbfbf8] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-800"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-stone-700 mb-1">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-[#fbfbf8] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-800"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-stone-700 mb-1">
                          Inquiry Type
                        </label>
                        <select
                          value={formData.inquiryType}
                          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-[#fbfbf8] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-800"
                        >
                          <option value="general">General Question</option>
                          <option value="journey">Joining an Open Journey</option>
                          <option value="school">School / Student Group Trip</option>
                          <option value="family">Private Family Group</option>
                          <option value="corporate">Corporate / Executive Retreat</option>
                          <option value="partner">Local Partnership Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        How can we help? *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your proposed dates, group size, or questions..."
                        className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-[#fbfbf8] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-800"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-[#1a4231] hover:bg-[#122e22] text-white font-bold text-sm shadow flex items-center justify-center gap-2 transition-all"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </section>
    </div>
  );
}
