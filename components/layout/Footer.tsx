import React from 'react';
import Link from 'next/link';
import { 
  Leaf, 
  Mail, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  ArrowRight, 
  Heart,
  Globe2,
  TreePine
} from 'lucide-react';
import { JOURNEYS } from '@/data/journeys';

export default function Footer() {
  return (
    <footer className="bg-[#10231b] text-stone-300 border-t border-stone-800" aria-label="Footer">
      
      {/* Top Banner: Radical Transparency & Trust Badges */}
      <div className="border-b border-stone-800/80 bg-[#0c1c15]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-stone-300 text-sm">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-emerald-900/60 border border-emerald-700/50 flex items-center justify-center shrink-0 text-emerald-300">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-white">100% Ethical Local Supply Chain</h4>
                <p className="text-xs text-stone-300 mt-0.5">
                  Direct revenue sharing with indigenous cooperatives, field stations, and Costa Rican naturalists.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-emerald-900/60 border border-emerald-700/50 flex items-center justify-center shrink-0 text-emerald-300">
                <TreePine className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Direct Conservation Contribution</h4>
                <p className="text-xs text-stone-300 mt-0.5">
                  Every participant funds active biological corridors, sea turtle hatcheries, and tree planting.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-emerald-900/60 border border-emerald-700/50 flex items-center justify-center shrink-0 text-emerald-300">
                <Globe2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Safety-First Logistics &amp; WFR Guides</h4>
                <p className="text-xs text-stone-300 mt-0.5">
                  24/7 dedicated in-country emergency network, private transport, and certified medical protocols.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand & Contact */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-lg bg-emerald-800 text-emerald-200 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-emerald-300" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-white tracking-tight">
                  Sacred Roots
                </span>
                <span className="text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                  Volunteer &amp; Travel · Costa Rica
                </span>
              </div>
            </Link>

            <p className="text-sm text-stone-300 leading-relaxed max-w-md">
              Purpose-driven educational and volunteer journeys in Costa Rica. We connect students, families, volunteers, and organizations with nature, culture, conservation, and hands-on service.
            </p>

            <div className="space-y-2 text-xs text-stone-300 pt-2">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-300 shrink-0" />
                <span>San José &amp; Puerto Viejo, Costa Rica · Vancouver, Canada</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-300 shrink-0" />
                <a href="mailto:info@sacredrootsvolunteertravel.com" className="hover:text-emerald-300 transition-colors">
                  info@sacredrootsvolunteertravel.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-300 shrink-0" />
                <a href="https://wa.me/50688880000" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition-colors">
                  WhatsApp Direct Support: +506 8888-0000
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Journeys */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Journeys
            </h3>
            <ul className="space-y-2.5 text-sm">
              {JOURNEYS.map((j) => (
                <li key={j.id}>
                  <Link href={`/journeys/${j.slug}`} className="text-stone-300 hover:text-white transition-colors">
                    {j.title.split('&')[0]}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/journeys" className="text-emerald-300 hover:underline inline-flex items-center gap-1 text-xs font-semibold pt-1">
                  View All Journeys <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: For Groups & Audiences */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Who We Serve
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/groups/educational" className="text-stone-300 hover:text-white transition-colors">
                  Students &amp; Schools (STEM)
                </Link>
              </li>
              <li>
                <Link href="/groups" className="text-stone-300 hover:text-white transition-colors">
                  Families &amp; Private Groups
                </Link>
              </li>
              <li>
                <Link href="/journeys/wildlife-biodiversity" className="text-stone-300 hover:text-white transition-colors">
                  Individual Volunteers
                </Link>
              </li>
              <li>
                <Link href="/groups/retreats" className="text-stone-300 hover:text-white transition-colors">
                  Corporate Retreats &amp; ESG
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-emerald-300 hover:text-white transition-colors font-medium">
                  Shop for Conservation
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Learn & Organization */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Learn &amp; Trust
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-stone-300 hover:text-white transition-colors">
                  Our Story &amp; Team
                </Link>
              </li>
              <li>
                <Link href="/about#partners" className="text-stone-300 hover:text-white transition-colors">
                  Verified Local Partners
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-stone-300 hover:text-white transition-colors">
                  Impact &amp; Fund Allocation
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-stone-300 hover:text-white transition-colors">
                  How It Works &amp; Prep
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-stone-300 hover:text-white transition-colors">
                  FAQ &amp; Safety
                </Link>
              </li>
              <li>
                <Link href="/journal" className="text-stone-300 hover:text-white transition-colors">
                  Journal &amp; Field Stories
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-stone-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-14 pt-8 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-300">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>&copy; {new Date().getFullYear()} Sacred Roots Volunteer &amp; Travel. All rights reserved.</span>
            <span>Costa Rica &amp; Global Operations</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-stone-300">
            <Link href="/privacy" className="hover:text-emerald-300 transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-emerald-300 transition-colors">
              Terms &amp; Conditions
            </Link>
            <span>·</span>
            <Link href="/refund-policy" className="hover:text-emerald-300 transition-colors">
              Refund &amp; Cancellation Policy
            </Link>
            <span>·</span>
            <Link href="/accessibility" className="hover:text-emerald-300 transition-colors">
              Accessibility
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
