'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Calendar, 
  Users, 
  Compass, 
  Sparkles,
  ShieldCheck,
  Plane,
  Heart
} from 'lucide-react';
import { JOURNEYS } from '@/data/journeys';

function ApplyFormContent() {
  const searchParams = useSearchParams();
  const initialJourneySlug = searchParams.get('journey') || '';
  const initialType = searchParams.get('type') || '';

  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Form State
  const [formData, setFormData] = useState({
    experienceType: initialType ? initialType : (initialJourneySlug ? 'specific' : 'solo'),
    selectedJourney: initialJourneySlug,
    targetSeason: 'dry-2026',
    estimatedGroupSize: initialType === 'school' ? '12-20' : (initialType === 'retreat' ? '8-15' : '1-2'),
    specialFocus: [] as string[],
    fullName: '',
    email: '',
    phone: '',
    country: 'United States',
    dietaryRestrictions: '',
    specialGoalsNotes: ''
  });

  const toggleFocus = (item: string) => {
    if (formData.specialFocus.includes(item)) {
      setFormData({
        ...formData,
        specialFocus: formData.specialFocus.filter((f) => f !== item)
      });
    } else {
      setFormData({
        ...formData,
        specialFocus: [...formData.specialFocus, item]
      });
    }
  };

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-950 bg-emerald-100/90 px-3.5 py-1 rounded-full">
          Begin Your Experience
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14261d] tracking-tight">
          Plan Your Costa Rica Journey
        </h1>
        <p className="text-stone-600 text-sm sm:text-base">
          Submit your preferences in 3 simple steps. Our leadership team will review your application and provide a customized proposal within 24 hours.
        </p>
      </div>

      {/* Multi-step progress bar */}
      {!submitted && (
        <div className="mb-10 max-w-xl mx-auto">
          <div className="flex items-center justify-between text-xs font-bold text-stone-500 mb-2">
            <span className={step >= 1 ? 'text-emerald-900' : ''}>1. Journey &amp; Dates</span>
            <span className={step >= 2 ? 'text-emerald-900' : ''}>2. Traveler Profile</span>
            <span className={step >= 3 ? 'text-emerald-900' : ''}>3. Review &amp; Submit</span>
          </div>
          <div className="w-full h-2 rounded-full bg-stone-200 overflow-hidden">
            <div 
              className="h-full bg-emerald-800 transition-all duration-300 rounded-full"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Main Form Box */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-xl">
        
        {submitted ? (
          <div className="text-center py-10 space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h2 className="font-serif text-3xl font-bold text-[#14261d]">
                Application Submitted Successfully!
              </h2>
              <p className="text-stone-600 text-sm sm:text-base max-w-md mx-auto">
                Thank you, <strong>{formData.fullName}</strong>. Reese and Katya will review your details and email your custom itinerary and next steps to <strong>{formData.email}</strong>.
              </p>
            </div>

            <div className="p-6 bg-emerald-50/70 rounded-2xl border border-emerald-200 text-left max-w-md mx-auto space-y-2 text-xs text-emerald-950">
              <span className="font-bold block uppercase tracking-wider">What happens next:</span>
              <p>1. We verify field station availability for your requested timeframe.</p>
              <p>2. We email your personalized itinerary PDF with transparent investment breakdown.</p>
              <p>3. You can hop on a 20-min video call or WhatsApp chat with our founders to finalize.</p>
            </div>

            <div className="pt-4 flex justify-center gap-4">
              <Link
                href="/journeys"
                className="px-6 py-3 rounded-xl bg-[#1a4231] hover:bg-[#122e22] text-white text-xs font-bold shadow"
              >
                Return to Journeys
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            
            {/* STEP 1: Experience Selection */}
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="border-b border-stone-100 pb-4">
                  <h2 className="font-serif text-2xl font-bold text-[#14261d]">
                    Step 1: Choose Your Experience &amp; Season
                  </h2>
                  <p className="text-xs text-stone-500 mt-1">
                    Select the type of expedition you are interested in joining.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                    What type of traveler or group are you?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: 'solo', label: 'Solo / Open Cohort Volunteer' },
                      { id: 'family', label: 'Private Family Group' },
                      { id: 'school', label: 'School / Student STEM Trip' },
                      { id: 'retreat', label: 'Corporate / Executive Retreat' },
                    ].map((opt) => (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => setFormData({ ...formData, experienceType: opt.id })}
                        className={`p-4 rounded-xl text-left border text-xs sm:text-sm font-semibold transition-all ${
                          formData.experienceType === opt.id
                            ? 'border-emerald-800 bg-emerald-50/80 text-emerald-950 ring-1 ring-emerald-800'
                            : 'border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                    Select Specific Journey (or choose General Custom)
                  </label>
                  <select
                    value={formData.selectedJourney}
                    onChange={(e) => setFormData({ ...formData, selectedJourney: e.target.value })}
                    className="w-full p-3 rounded-xl border border-stone-300 bg-[#fbfbf8] text-xs sm:text-sm focus:ring-2 focus:ring-emerald-800"
                  >
                    <option value="">-- Let Sacred Roots Recommend Based on Goals --</option>
                    {JOURNEYS.map((j) => (
                      <option key={j.slug} value={j.slug}>
                        {j.title} ({j.duration} - {j.location})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                      Preferred Travel Window
                    </label>
                    <select
                      value={formData.targetSeason}
                      onChange={(e) => setFormData({ ...formData, targetSeason: e.target.value })}
                      className="w-full p-3 rounded-xl border border-stone-300 bg-[#fbfbf8] text-xs sm:text-sm focus:ring-2 focus:ring-emerald-800"
                    >
                      <option value="fall-2025">Autumn 2025 (Turtle Peak Season)</option>
                      <option value="dry-2026">Dec 2025 – Apr 2026 (Dry Summer Season)</option>
                      <option value="green-2026">May 2026 – Aug 2026 (Green Rainforest Season)</option>
                      <option value="future">Later 2026 / 2027 Inquiries</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                      Estimated Number of Travelers
                    </label>
                    <select
                      value={formData.estimatedGroupSize}
                      onChange={(e) => setFormData({ ...formData, estimatedGroupSize: e.target.value })}
                      className="w-full p-3 rounded-xl border border-stone-300 bg-[#fbfbf8] text-xs sm:text-sm focus:ring-2 focus:ring-emerald-800"
                    >
                      <option value="1">1 Solo Traveler</option>
                      <option value="2">2 Travelers (Couple or Friends)</option>
                      <option value="3-5">3 to 5 Travelers (Small Family / Friends)</option>
                      <option value="6-10">6 to 10 Travelers (Small Cohort)</option>
                      <option value="11-20">11 to 20 Travelers (School / Retreat Group)</option>
                      <option value="20+">20+ Large Custom Group</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#1a4231] hover:bg-[#122e22] text-white font-bold text-sm shadow transition-colors"
                  >
                    <span>Continue to Traveler Profile</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Contact & Traveler Profile */}
            {step === 2 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="border-b border-stone-100 pb-4">
                  <h2 className="font-serif text-2xl font-bold text-[#14261d]">
                    Step 2: Traveler Contact &amp; Goals
                  </h2>
                  <p className="text-xs text-stone-500 mt-1">
                    Tell us who to send the customized itinerary proposal to.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Lead Traveler Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-[#fbfbf8] text-xs sm:text-sm focus:ring-2 focus:ring-emerald-800"
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
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-[#fbfbf8] text-xs sm:text-sm focus:ring-2 focus:ring-emerald-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-[#fbfbf8] text-xs sm:text-sm focus:ring-2 focus:ring-emerald-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Country of Residence
                    </label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="United States / Canada"
                      className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-[#fbfbf8] text-xs sm:text-sm focus:ring-2 focus:ring-emerald-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                    Primary Interests (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      'Sea Turtle Night Patrols',
                      'Rainforest Tree Planting',
                      'Indigenous Cultural Cooking',
                      'Wildlife Corridor Camera Traps',
                      'Snorkeling & Coral Restoration',
                      'STEM Field Study Credits'
                    ].map((interest) => (
                      <button
                        type="button"
                        key={interest}
                        onClick={() => toggleFocus(interest)}
                        className={`p-2.5 rounded-lg border text-[11px] font-semibold text-left transition-all ${
                          formData.specialFocus.includes(interest)
                            ? 'border-emerald-800 bg-emerald-50 text-emerald-950 font-bold'
                            : 'border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100'
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-between items-center">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex items-center gap-1 text-xs font-bold text-stone-600 hover:text-stone-900"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Step 1</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#1a4231] hover:bg-[#122e22] text-white font-bold text-sm shadow transition-colors"
                  >
                    <span>Proceed to Review</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Review & Final Submission */}
            {step === 3 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="border-b border-stone-100 pb-4">
                  <h2 className="font-serif text-2xl font-bold text-[#14261d]">
                    Step 3: Review &amp; Submit Application
                  </h2>
                  <p className="text-xs text-stone-500 mt-1">
                    Check your summary before submitting. No payment is required today.
                  </p>
                </div>

                {/* Summary Card */}
                <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-3 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <span className="text-stone-500 block">Lead Traveler:</span>
                      <strong className="text-stone-900">{formData.fullName || 'Not provided'}</strong>
                    </div>
                    <div>
                      <span className="text-stone-500 block">Email:</span>
                      <strong className="text-stone-900">{formData.email || 'Not provided'}</strong>
                    </div>
                    <div>
                      <span className="text-stone-500 block">Travel Type:</span>
                      <strong className="text-stone-900 capitalize">{formData.experienceType}</strong>
                    </div>
                    <div>
                      <span className="text-stone-500 block">Estimated Travelers:</span>
                      <strong className="text-stone-900">{formData.estimatedGroupSize}</strong>
                    </div>
                  </div>

                  {formData.specialFocus.length > 0 && (
                    <div className="pt-2 border-t border-stone-200">
                      <span className="text-stone-500 block mb-1">Focus Areas:</span>
                      <div className="flex flex-wrap gap-1">
                        {formData.specialFocus.map((f) => (
                          <span key={f} className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 text-[10px] font-semibold">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Dietary Restrictions, Medical Notes, or Special Requests (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.specialGoalsNotes}
                    onChange={(e) => setFormData({ ...formData, specialGoalsNotes: e.target.value })}
                    placeholder="E.g., Vegetarian meals, gluten allergies, high school biology curriculum requirements..."
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 bg-[#fbfbf8] text-xs sm:text-sm focus:ring-2 focus:ring-emerald-800"
                  />
                </div>

                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
                  <span>
                    <strong>100% No-Obligation Inquiry:</strong> Submitting this form does not lock you into any booking or financial charge. We will send an itinerary proposal for your review first.
                  </span>
                </div>

                <div className="pt-4 flex justify-between items-center">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex items-center gap-1 text-xs font-bold text-stone-600 hover:text-stone-900"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>

                  <button
                    type="submit"
                    className="px-8 py-4 rounded-xl bg-[#1a4231] hover:bg-[#122e22] text-white font-bold text-sm shadow-lg transition-all"
                  >
                    Submit Application &amp; Plan Journey
                  </button>
                </div>
              </div>
            )}

          </form>
        )}

      </div>
    </div>
  );
}

export default function ApplyPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-20">
      <Suspense fallback={<div className="text-center py-20">Loading application...</div>}>
        <ApplyFormContent />
      </Suspense>
    </div>
  );
}
