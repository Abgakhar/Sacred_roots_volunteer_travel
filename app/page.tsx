import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/home/HeroSection';
import { 
  ArrowRight, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  TreePine, 
  GraduationCap, 
  Users, 
  Building2, 
  Sparkles, 
  Quote, 
  Star,
  BookOpen,
  ChevronRight,
  Compass,
  HeartHandshake
} from 'lucide-react';
import { JOURNEYS } from '@/data/journeys';
import { IMPACT_METRICS } from '@/data/impact';
import { JOURNAL_POSTS } from '@/data/journal';
import { TESTIMONIALS } from '@/data/testimonials';

export const metadata = {
  title: 'Sacred Roots Volunteer & Travel | Purpose-Driven Journeys in Costa Rica',
  description: 'Immersive educational and volunteer journeys in Costa Rica connecting travelers with nature, culture, conservation, and hands-on community service.',
  openGraph: {
    title: 'Sacred Roots Volunteer & Travel | Purpose-Driven Journeys in Costa Rica',
    description: 'Immersive educational and volunteer journeys in Costa Rica connecting travelers with nature, culture, conservation, and hands-on community service.',
    type: 'website',
  }
};

export default function HomePage() {
  const featuredJourneys = JOURNEYS.slice(0, 3);
  const featuredTestimonial = TESTIMONIALS[0];
  const recentArticles = JOURNAL_POSTS.slice(0, 2);

  return (
    <>
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Mission Snapshot (Quick Intro to Sacred Roots) */}
        <section className="py-16 bg-[#f4f4ef] border-y border-stone-200/80" aria-label="About Sacred Roots">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950 text-white text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Our Purpose &amp; Approach</span>
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#14261d] tracking-tight">
                Travel That Regenerates People &amp; Places
              </h2>

              <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
                Sacred Roots connects conscious travelers, students, families, and organizations directly with active conservationists and indigenous stewards across Costa Rica. We replace passive tourism with hands-on service, rigorous field learning, and authentic human connection.
              </p>

              <div className="pt-2 flex flex-wrap justify-center gap-4">
                <Link
                  href="/about"
                  id="home-about-link"
                  className="inline-flex items-center text-sm font-bold text-emerald-900 hover:text-emerald-950 gap-1.5 group underline decoration-emerald-600 underline-offset-4"
                >
                  <span>Read Our Founders’ Story &amp; Ethics</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <span className="text-stone-400">·</span>
                <Link
                  href="/how-it-works"
                  id="home-how-it-works-link"
                  className="inline-flex items-center text-sm font-bold text-stone-700 hover:text-emerald-950 gap-1.5 group"
                >
                  <span>See How It Works</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Featured Journeys Preview (Curated 3 Pathways) */}
        <section className="py-20 bg-[#fbfbf8]" aria-label="Featured Experiences">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="space-y-3 max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-950 bg-emerald-100/90 px-3.5 py-1 rounded-full">
                  Signature Experiences
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#14261d]">
                  Featured Costa Rica Journeys
                </h2>
                <p className="text-stone-600 text-sm sm:text-base">
                  From night turtle patrols in the Osa Peninsula to ancient cacao agroforestry in Talamanca, each journey offers a balance of service, biology, and culture.
                </p>
              </div>

              <Link
                href="/journeys"
                id="home-view-all-journeys"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-[#1a4231] hover:bg-[#122e22] rounded-xl shadow-sm transition-colors shrink-0"
              >
                <span>View All Journeys &amp; Filters</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredJourneys.map((journey) => (
                <div 
                  key={journey.id}
                  className="bg-white rounded-2xl border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-stone-100">
                    <Image
                      src={journey.heroImage}
                      alt={journey.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      referrerPolicy="no-referrer"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/10 to-transparent" />
                    
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                      <span className="px-2.5 py-1 text-[11px] font-bold rounded-md bg-stone-900/80 backdrop-blur-sm text-white uppercase tracking-wider">
                        {journey.category.toUpperCase()}
                      </span>
                      <span className="px-2.5 py-1 text-[11px] font-semibold rounded-md bg-emerald-800/90 backdrop-blur-sm text-white">
                        {journey.duration}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-white/95 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{journey.location.split(',')[0]}</span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-serif text-xl font-bold text-[#14261d] group-hover:text-emerald-900 transition-colors leading-snug">
                        {journey.title}
                      </h3>
                      <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                        {journey.tagline}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                      <div>
                        <span className="text-[11px] text-stone-500 uppercase tracking-wider block">Investment</span>
                        <span className="text-sm font-bold text-[#14261d]">{journey.investment.startingPrice}</span>
                      </div>

                      <Link
                        href={`/journeys/${journey.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-white bg-[#1a4231] hover:bg-[#122e22] px-4 py-2.5 rounded-lg shadow-sm transition-all"
                      >
                        <span>View Details</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Audience Pathways (Who We Serve Grid) */}
        <section className="py-20 bg-[#f4f4ef] border-y border-stone-200" aria-label="Who We Serve">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-950 bg-emerald-100/90 px-3.5 py-1 rounded-full">
                Customized Formats
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#14261d]">
                Who We Serve
              </h2>
              <p className="text-stone-600 text-sm sm:text-base">
                Whether organizing a school study trip, a family adventure, or an executive retreat, we build itineraries tailored to your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <Link 
                href="/groups/educational" 
                id="audience-schools"
                className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md hover:border-emerald-800 transition-all group flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#14261d] group-hover:text-emerald-900 transition-colors">
                    Schools &amp; Universities
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    NGSS &amp; IB curriculum-aligned field science, 1:6 supervision ratios, WFR guides, and service certificates.
                  </p>
                </div>
                <div className="text-xs font-bold text-emerald-900 inline-flex items-center gap-1">
                  <span>Explore School Programs</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Card 2 */}
              <Link 
                href="/groups" 
                id="audience-families"
                className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md hover:border-emerald-800 transition-all group flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#14261d] group-hover:text-emerald-900 transition-colors">
                    Families &amp; Private Groups
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Multigenerational travel blending kid-friendly wildlife encounters, safe private transport, and cultural bonding.
                  </p>
                </div>
                <div className="text-xs font-bold text-emerald-900 inline-flex items-center gap-1">
                  <span>Plan a Family Trip</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Card 3 */}
              <Link 
                href="/journeys" 
                id="audience-volunteers"
                className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md hover:border-emerald-800 transition-all group flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-900 flex items-center justify-center font-bold">
                    <TreePine className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#14261d] group-hover:text-emerald-900 transition-colors">
                    Individual Volunteers
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Join open small cohorts of like-minded travelers contributing real hands on nesting beaches and rainforest stations.
                  </p>
                </div>
                <div className="text-xs font-bold text-emerald-900 inline-flex items-center gap-1">
                  <span>Join Open Cohorts</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Card 4 */}
              <Link 
                href="/groups/retreats" 
                id="audience-corporate"
                className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md hover:border-emerald-800 transition-all group flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-900 flex items-center justify-center font-bold">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#14261d] group-hover:text-emerald-900 transition-colors">
                    Corporate Retreats &amp; ESG
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Executive leadership retreats with Starlink connectivity, team regeneration, and verifiable biodiversity insetting.
                  </p>
                </div>
                <div className="text-xs font-bold text-emerald-900 inline-flex items-center gap-1">
                  <span>Plan Team Retreat</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* 5. Real Impact Highlights (4 Quick Metrics & Link to Dedicated Impact Page) */}
        <section className="py-20 bg-[#12241c] text-white" aria-label="Impact Summary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 bg-emerald-900/60 border border-emerald-700/50 px-3.5 py-1 rounded-full">
                  Measurable Accountability
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Leaving Costa Rica Better Than We Found It
                </h2>
                <p className="text-sm text-stone-300 leading-relaxed">
                  We track and audit our volunteer hours, native trees planted, and economic disbursement directly with Costa Rican community cooperatives.
                </p>
                <div className="pt-2">
                  <Link
                    href="/impact"
                    id="home-impact-page-cta"
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-[#12241c] bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors"
                  >
                    <span>View Financial Transparency &amp; Reports</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-2 gap-4">
                {IMPACT_METRICS.map((stat, idx) => (
                  <div key={idx} className="bg-[#193227] p-5 rounded-2xl border border-emerald-800/60 space-y-2">
                    <span className="text-2xl sm:text-3xl font-serif font-bold text-white block">
                      {stat.metric}
                    </span>
                    <h4 className="text-xs font-semibold text-emerald-300">
                      {stat.label}
                    </h4>
                    <p className="text-[11px] text-stone-400 line-clamp-2">
                      {stat.subtext}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* 6. Featured Testimonial Snapshot */}
        <section className="py-16 bg-[#fbfbf8]" aria-label="Testimonial">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="flex justify-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-500" />
              ))}
            </div>

            <blockquote className="font-serif text-xl sm:text-2xl text-[#14261d] italic leading-relaxed">
              &ldquo;{featuredTestimonial.quote}&rdquo;
            </blockquote>

            <div className="flex items-center justify-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-800 bg-stone-200 shrink-0">
                <Image
                  src={featuredTestimonial.image}
                  alt={featuredTestimonial.name}
                  fill
                  sizes="48px"
                  referrerPolicy="no-referrer"
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <div className="font-bold text-[#14261d] text-sm">{featuredTestimonial.name}</div>
                <div className="text-xs text-stone-600">{featuredTestimonial.role} {featuredTestimonial.organization ? `· ${featuredTestimonial.organization}` : ''}</div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Latest Journal Dispatches */}
        <section className="py-16 bg-[#f4f4ef] border-t border-stone-200" aria-label="Journal Stories">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-950 bg-emerald-100/90 px-3 py-0.5 rounded-full">
                  Field Dispatches
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#14261d] mt-2">
                  Stories From the Field
                </h2>
              </div>
              <Link 
                href="/journal" 
                className="text-xs sm:text-sm font-bold text-emerald-900 hover:text-emerald-950 inline-flex items-center gap-1"
              >
                <span>Read All Articles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentArticles.map((post) => (
                <article 
                  key={post.slug}
                  className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row group"
                >
                  <div className="relative h-44 sm:h-auto sm:w-48 shrink-0 bg-stone-900">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 192px"
                      referrerPolicy="no-referrer"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                        {post.category} · {post.readTime}
                      </span>
                      <h3 className="font-serif text-base font-bold text-[#14261d] group-hover:text-emerald-900 transition-colors mt-1 line-clamp-2">
                        <Link href={`/journal/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-xs text-stone-600 line-clamp-2 mt-1">
                        {post.excerpt}
                      </p>
                    </div>
                    <Link
                      href={`/journal/${post.slug}`}
                      className="text-xs font-bold text-emerald-900 inline-flex items-center gap-1 self-start"
                    >
                      <span>Read Story</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Final Conversion CTA */}
        <section className="py-20 bg-[#14261d] text-white" aria-label="Call to Action">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold">
              Ready to Experience Costa Rica With Purpose?
            </h2>
            <p className="text-stone-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Tell us about your travel dates, cohort size, and goals. We’ll build a fully customized itinerary with transparent pricing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/apply"
                id="home-final-apply-btn"
                className="w-full sm:w-auto px-8 py-3.5 text-sm font-bold text-[#14261d] bg-[#fbfbf8] hover:bg-white rounded-xl shadow-lg transition-colors"
              >
                Plan Your Journey →
              </Link>
              <Link
                href="/contact"
                id="home-final-contact-btn"
                className="w-full sm:w-auto px-8 py-3.5 text-sm font-bold text-white bg-emerald-900/80 hover:bg-emerald-800 border border-emerald-700/60 rounded-xl transition-colors"
              >
                Contact &amp; Schedule Call
              </Link>
            </div>
          </div>
        </section>
    </>
  );
}
