'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  GraduationCap, 
  Building2, 
  Phone, 
  Leaf,
  Compass,
  TreePine,
  Waves,
  Heart,
  Globe2,
  Sparkles,
  BookOpen,
  ShoppingBag
} from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [journeysDropdownOpen, setJourneysDropdownOpen] = useState(false);
  const [groupsDropdownOpen, setGroupsDropdownOpen] = useState(false);
  const pathname = usePathname();

  // Close dropdowns on route change
  const prevPathRef = useRef(pathname);
  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      prevPathRef.current = pathname;
      setMobileMenuOpen(false);
      setJourneysDropdownOpen(false);
      setGroupsDropdownOpen(false);
    }
  }, [pathname]);

  // Handle scroll effect
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 15;
          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#fbfbf8]/95 backdrop-blur-md shadow-sm border-b border-stone-200/90 py-3' 
          : 'bg-[#fbfbf8]/90 backdrop-blur-sm border-b border-stone-200/50 py-4 sm:py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Title */}
          <Link 
            href="/" 
            prefetch={true}
            className="flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 rounded-lg p-1 -ml-1 transition-colors"
            aria-label="Sacred Roots Volunteer & Travel Homepage"
          >
            <div className="w-10 h-10 rounded-lg bg-[#1a4231] text-emerald-100 flex items-center justify-center shadow-sm group-hover:bg-[#122e22] transition-colors shrink-0">
              <Leaf className="w-5 h-5 text-emerald-300" />
            </div>
            <div className="flex flex-col justify-center leading-tight">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#14261d] whitespace-nowrap">
                Sacred Roots
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-emerald-800 whitespace-nowrap -mt-0.5">
                Volunteer &amp; Travel
              </span>
            </div>
          </Link>

          {/* Desktop Primary Navigation Hierarchy: Brand -> Explore -> Understand -> Action */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2.5" aria-label="Main Navigation">
            
            {/* GROUP 1: EXPLORE */}

            {/* 1. Journeys Mega Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setJourneysDropdownOpen(true)}
              onMouseLeave={() => setJourneysDropdownOpen(false)}
            >
              <button 
                type="button"
                onClick={() => setJourneysDropdownOpen(!journeysDropdownOpen)}
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 ${
                  pathname.startsWith('/journeys') 
                    ? 'text-emerald-950 bg-emerald-100/70 font-semibold' 
                    : 'text-stone-700 hover:text-emerald-950 hover:bg-stone-100/80'
                }`}
                aria-expanded={journeysDropdownOpen}
              >
                <span>Journeys</span>
                <ChevronDown className={`w-3.5 h-3.5 text-stone-500 transition-transform duration-200 ${journeysDropdownOpen ? 'rotate-180 text-emerald-800' : ''}`} />
              </button>

              {journeysDropdownOpen && (
                <div className="absolute top-full left-0 w-[420px] pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="bg-[#fbfbf8] rounded-2xl shadow-xl border border-stone-200/90 p-3 space-y-1">
                    <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-900 border-b border-stone-200/80 flex items-center justify-between">
                      <span>Costa Rica Field Experiences</span>
                      <span className="text-[10px] font-normal lowercase text-stone-500">6 Options</span>
                    </div>

                    <div className="grid grid-cols-1 gap-1 pt-1">
                      {/* All Journeys */}
                      <Link
                        href="/journeys"
                        prefetch={true}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-emerald-50/80 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-emerald-800 group-hover:text-white transition-colors">
                          <Compass className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-stone-900 group-hover:text-emerald-950 flex items-center justify-between">
                            <span>All Journeys</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-emerald-700" />
                          </div>
                          <div className="text-xs text-stone-500">Explore all 5 Costa Rica field expeditions</div>
                        </div>
                      </Link>

                      {/* Marine Conservation */}
                      <Link
                        href="/journeys/osa-peninsula-sea-turtle-marine-conservation"
                        prefetch={true}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-emerald-50/80 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-teal-800 group-hover:text-white transition-colors">
                          <Waves className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-stone-900 group-hover:text-emerald-950 flex items-center justify-between">
                            <span>Marine Conservation</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-emerald-700" />
                          </div>
                          <div className="text-xs text-stone-500">Osa Peninsula sea turtle &amp; ocean protection</div>
                        </div>
                      </Link>

                      {/* Wildlife & Biodiversity */}
                      <Link
                        href="/journeys/monteverde-cloud-forest-biodiversity"
                        prefetch={true}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-emerald-50/80 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-emerald-800 group-hover:text-white transition-colors">
                          <TreePine className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-stone-900 group-hover:text-emerald-950 flex items-center justify-between">
                            <span>Wildlife &amp; Biodiversity</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-emerald-700" />
                          </div>
                          <div className="text-xs text-stone-500">Monteverde cloud forest &amp; sloth research</div>
                        </div>
                      </Link>

                      {/* Cultural Experiences */}
                      <Link
                        href="/journeys/indigenous-bribri-cultural-immersion"
                        prefetch={true}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-emerald-50/80 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-amber-800 group-hover:text-white transition-colors">
                          <Heart className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-stone-900 group-hover:text-emerald-950 flex items-center justify-between">
                            <span>Cultural Experiences</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-emerald-700" />
                          </div>
                          <div className="text-xs text-stone-500">Indigenous Bribri immersion &amp; cacao forestry</div>
                        </div>
                      </Link>

                      {/* Educational Travel */}
                      <Link
                        href="/groups/educational"
                        prefetch={true}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-emerald-50/80 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-800 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-indigo-800 group-hover:text-white transition-colors">
                          <GraduationCap className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-stone-900 group-hover:text-emerald-950 flex items-center justify-between">
                            <span>Educational Travel</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-emerald-700" />
                          </div>
                          <div className="text-xs text-stone-500">STEM field study &amp; faculty-led school trips</div>
                        </div>
                      </Link>

                      {/* Volunteer Programs */}
                      <Link
                        href="/journeys"
                        prefetch={true}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-emerald-50/80 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-lime-100 text-lime-900 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-lime-800 group-hover:text-white transition-colors">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-stone-900 group-hover:text-emerald-950 flex items-center justify-between">
                            <span>Volunteer Programs</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-emerald-700" />
                          </div>
                          <div className="text-xs text-stone-500">Direct hands-on community service &amp; restoration</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 2. For Groups Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setGroupsDropdownOpen(true)}
              onMouseLeave={() => setGroupsDropdownOpen(false)}
            >
              <button 
                type="button"
                onClick={() => setGroupsDropdownOpen(!groupsDropdownOpen)}
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 ${
                  pathname.startsWith('/groups') 
                    ? 'text-emerald-950 bg-emerald-100/70 font-semibold' 
                    : 'text-stone-700 hover:text-emerald-950 hover:bg-stone-100/80'
                }`}
                aria-expanded={groupsDropdownOpen}
              >
                <span>For Groups</span>
                <ChevronDown className={`w-3.5 h-3.5 text-stone-500 transition-transform duration-200 ${groupsDropdownOpen ? 'rotate-180 text-emerald-800' : ''}`} />
              </button>

              {groupsDropdownOpen && (
                <div className="absolute top-full left-0 w-[380px] pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="bg-[#fbfbf8] rounded-2xl shadow-xl border border-stone-200/90 p-3 space-y-1">
                    <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-900 border-b border-stone-200/80">
                      Cohort &amp; Group Travel
                    </div>

                    <div className="grid grid-cols-1 gap-1 pt-1">
                      {/* Schools & Students */}
                      <Link
                        href="/groups/educational"
                        prefetch={true}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-emerald-50/80 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-emerald-800 group-hover:text-white transition-colors">
                          <GraduationCap className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-stone-900 group-hover:text-emerald-950 flex items-center justify-between">
                            <span>Schools &amp; Students</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-emerald-700" />
                          </div>
                          <div className="text-xs text-stone-500">High school &amp; university STEM programs</div>
                        </div>
                      </Link>

                      {/* Families */}
                      <Link
                        href="/groups"
                        prefetch={true}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-emerald-50/80 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-amber-800 group-hover:text-white transition-colors">
                          <Users className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-stone-900 group-hover:text-emerald-950 flex items-center justify-between">
                            <span>Families</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-emerald-700" />
                          </div>
                          <div className="text-xs text-stone-500">Multi-generational private family expeditions</div>
                        </div>
                      </Link>

                      {/* Organizations */}
                      <Link
                        href="/groups"
                        prefetch={true}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-emerald-50/80 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-sky-800 group-hover:text-white transition-colors">
                          <Globe2 className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-stone-900 group-hover:text-emerald-950 flex items-center justify-between">
                            <span>Organizations</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-emerald-700" />
                          </div>
                          <div className="text-xs text-stone-500">Non-profits, clubs &amp; conservation cohorts</div>
                        </div>
                      </Link>

                      {/* Corporate Retreats */}
                      <Link
                        href="/groups/retreats"
                        prefetch={true}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-emerald-50/80 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-teal-800 group-hover:text-white transition-colors">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-stone-900 group-hover:text-emerald-950 flex items-center justify-between">
                            <span>Corporate Retreats</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-emerald-700" />
                          </div>
                          <div className="text-xs text-stone-500">Purpose offsites &amp; ESG impact retreats</div>
                        </div>
                      </Link>

                      {/* Custom Group Journeys */}
                      <Link
                        href="/groups"
                        prefetch={true}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-emerald-50/80 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-purple-800 group-hover:text-white transition-colors">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-stone-900 group-hover:text-emerald-950 flex items-center justify-between">
                            <span>Custom Group Journeys</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-emerald-700" />
                          </div>
                          <div className="text-xs text-stone-500">Bespoke itineraries tailored for your team</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* GROUP 2: UNDERSTAND */}

            {/* Impact */}
            <Link 
              href="/impact" 
              prefetch={true}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 ${
                pathname === '/impact' 
                  ? 'text-emerald-950 bg-emerald-100/70 font-semibold' 
                  : 'text-stone-700 hover:text-emerald-950 hover:bg-stone-100/80'
              }`}
            >
              Impact
            </Link>

            {/* About */}
            <Link 
              href="/about" 
              prefetch={true}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 ${
                pathname === '/about' 
                  ? 'text-emerald-950 bg-emerald-100/70 font-semibold' 
                  : 'text-stone-700 hover:text-emerald-950 hover:bg-stone-100/80'
              }`}
            >
              About
            </Link>

            {/* How It Works */}
            <Link 
              href="/how-it-works" 
              prefetch={true}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 ${
                pathname === '/how-it-works' 
                  ? 'text-emerald-950 bg-emerald-100/70 font-semibold' 
                  : 'text-stone-700 hover:text-emerald-950 hover:bg-stone-100/80'
              }`}
            >
              How It Works
            </Link>

            {/* FAQ */}
            <Link 
              href="/faq" 
              prefetch={true}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 ${
                pathname === '/faq' 
                  ? 'text-emerald-950 bg-emerald-100/70 font-semibold' 
                  : 'text-stone-700 hover:text-emerald-950 hover:bg-stone-100/80'
              }`}
            >
              FAQ
            </Link>
          </nav>

          {/* GROUP 3: PRIMARY ACTION & MOBILE TOGGLE */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/apply"
              prefetch={true}
              id="nav-plan-journey-cta"
              className="inline-flex items-center justify-center px-4 sm:px-5 py-2.5 text-sm font-semibold text-white bg-[#1a4231] hover:bg-[#122e22] active:bg-[#0c2018] rounded-xl shadow-sm hover:shadow transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-800"
            >
              <span>Plan Your Journey</span>
              <ArrowRight className="w-4 h-4 ml-1.5 hidden sm:inline text-emerald-300" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-stone-700 hover:text-stone-900 hover:bg-stone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-stone-900" /> : <Menu className="w-6 h-6 text-stone-800" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation (Collapsible Hamburger) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] sm:top-[72px] bg-[#fbfbf8] border-b border-stone-200/90 shadow-2xl max-h-[calc(100vh-72px)] overflow-y-auto p-5 space-y-6 animate-in slide-in-from-top-3 duration-200">
          
          {/* Journeys Mobile Section */}
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-900 px-2 flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-emerald-700" />
              <span>Journeys</span>
            </div>
            <div className="grid grid-cols-1 gap-1 pl-2 border-l-2 border-emerald-800/30">
              <Link
                href="/journeys"
                prefetch={true}
                className="px-3 py-2 text-sm font-semibold text-stone-900 hover:bg-emerald-50 rounded-lg flex items-center justify-between"
              >
                <span>All Journeys</span>
                <span className="text-xs text-emerald-800 font-normal">Explore All →</span>
              </Link>
              <Link
                href="/journeys/osa-peninsula-sea-turtle-marine-conservation"
                prefetch={true}
                className="px-3 py-2 text-sm text-stone-700 hover:bg-emerald-50 rounded-lg"
              >
                Marine Conservation
              </Link>
              <Link
                href="/journeys/monteverde-cloud-forest-biodiversity"
                prefetch={true}
                className="px-3 py-2 text-sm text-stone-700 hover:bg-emerald-50 rounded-lg"
              >
                Wildlife &amp; Biodiversity
              </Link>
              <Link
                href="/journeys/indigenous-bribri-cultural-immersion"
                prefetch={true}
                className="px-3 py-2 text-sm text-stone-700 hover:bg-emerald-50 rounded-lg"
              >
                Cultural Experiences
              </Link>
              <Link
                href="/groups/educational"
                prefetch={true}
                className="px-3 py-2 text-sm text-stone-700 hover:bg-emerald-50 rounded-lg"
              >
                Educational Travel
              </Link>
              <Link
                href="/journeys"
                prefetch={true}
                className="px-3 py-2 text-sm text-stone-700 hover:bg-emerald-50 rounded-lg"
              >
                Volunteer Programs
              </Link>
            </div>
          </div>

          {/* For Groups Mobile Section */}
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-900 px-2 flex items-center gap-2">
              <Users className="w-3.5 h-3.5 text-emerald-700" />
              <span>For Groups</span>
            </div>
            <div className="grid grid-cols-1 gap-1 pl-2 border-l-2 border-amber-800/30">
              <Link
                href="/groups/educational"
                prefetch={true}
                className="px-3 py-2 text-sm text-stone-700 hover:bg-emerald-50 rounded-lg"
              >
                Schools &amp; Students
              </Link>
              <Link
                href="/groups"
                prefetch={true}
                className="px-3 py-2 text-sm text-stone-700 hover:bg-emerald-50 rounded-lg"
              >
                Families
              </Link>
              <Link
                href="/groups"
                prefetch={true}
                className="px-3 py-2 text-sm text-stone-700 hover:bg-emerald-50 rounded-lg"
              >
                Organizations
              </Link>
              <Link
                href="/groups/retreats"
                prefetch={true}
                className="px-3 py-2 text-sm text-stone-700 hover:bg-emerald-50 rounded-lg"
              >
                Corporate Retreats
              </Link>
              <Link
                href="/groups"
                prefetch={true}
                className="px-3 py-2 text-sm text-stone-700 hover:bg-emerald-50 rounded-lg"
              >
                Custom Group Journeys
              </Link>
            </div>
          </div>

          {/* About / Understand Section */}
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-900 px-2">
              Understand &amp; Learn
            </div>
            <div className="grid grid-cols-1 gap-1 pl-2 border-l-2 border-stone-300">
              <Link
                href="/impact"
                prefetch={true}
                className="px-3 py-2 text-sm font-medium text-stone-800 hover:bg-emerald-50 rounded-lg"
              >
                Impact &amp; Fund Allocation
              </Link>
              <Link
                href="/about"
                prefetch={true}
                className="px-3 py-2 text-sm font-medium text-stone-800 hover:bg-emerald-50 rounded-lg"
              >
                About Our Story &amp; Team
              </Link>
              <Link
                href="/how-it-works"
                prefetch={true}
                className="px-3 py-2 text-sm font-medium text-stone-800 hover:bg-emerald-50 rounded-lg"
              >
                How It Works &amp; Prep
              </Link>
              <Link
                href="/faq"
                prefetch={true}
                className="px-3 py-2 text-sm font-medium text-stone-800 hover:bg-emerald-50 rounded-lg"
              >
                Frequently Asked Questions
              </Link>
            </div>
          </div>

          {/* Secondary Links for Mobile Convenient Access */}
          <div className="space-y-2 pt-2 border-t border-stone-200">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-500 px-2">
              More Links
            </div>
            <div className="grid grid-cols-3 gap-2">
              <Link
                href="/journal"
                prefetch={true}
                className="flex flex-col items-center justify-center p-2.5 text-xs font-medium text-stone-700 bg-stone-100/70 hover:bg-emerald-50 rounded-xl text-center"
              >
                <BookOpen className="w-4 h-4 mb-1 text-emerald-800" />
                <span>Journal</span>
              </Link>
              <Link
                href="/shop"
                prefetch={true}
                className="flex flex-col items-center justify-center p-2.5 text-xs font-medium text-stone-700 bg-stone-100/70 hover:bg-emerald-50 rounded-xl text-center"
              >
                <ShoppingBag className="w-4 h-4 mb-1 text-emerald-800" />
                <span>Shop</span>
              </Link>
              <Link
                href="/contact"
                prefetch={true}
                className="flex flex-col items-center justify-center p-2.5 text-xs font-medium text-stone-700 bg-stone-100/70 hover:bg-emerald-50 rounded-xl text-center"
              >
                <Phone className="w-4 h-4 mb-1 text-emerald-800" />
                <span>Contact</span>
              </Link>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 space-y-2.5">
            <Link
              href="/apply"
              prefetch={true}
              className="block w-full text-center py-3.5 px-4 text-sm font-semibold text-white bg-[#1a4231] hover:bg-[#122e22] rounded-xl shadow-md"
            >
              Plan Your Journey Now
            </Link>
            <a
              href="https://wa.me/50688880000?text=Hello%20Sacred%20Roots,%20I%20would%20like%20to%20learn%20more%20about%20your%20Costa%20Rica%20journeys."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 text-sm font-semibold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 rounded-xl border border-emerald-200/80"
            >
              <Phone className="w-4 h-4 text-emerald-700" />
              <span>WhatsApp Direct (+506)</span>
            </a>
          </div>

        </div>
      )}
    </header>
  );
}
