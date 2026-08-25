import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheck, 
  HeartHandshake, 
  MapPin, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Leaf,
  GraduationCap
} from 'lucide-react';
import { TEAM_MEMBERS } from '@/data/team';
import { PARTNERS } from '@/data/partners';

export default function AboutPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-12">
        
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-950 bg-emerald-100/90 px-3.5 py-1 rounded-full">
              Our Identity &amp; Mission
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#14261d] tracking-tight">
              Rooted in Nature. Driven by Purpose.
            </h1>
            <p className="text-lg sm:text-xl text-stone-600 leading-relaxed font-normal">
              Sacred Roots was born from a fundamental conviction: that international travel should not consume places, but regenerate them. We bridge conscious travelers with authentic Costa Rican conservationists and indigenous stewards.
            </p>
          </div>
        </section>

        {/* Section 1: The Origin Story */}
        <section className="py-16 bg-[#f4f4ef] border-y border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                  How It Began
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#14261d]">
                  Our Story
                </h2>
                <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    The foundation of Sacred Roots grew from long, late-night conversations in rural Costa Rica between founders Reese Maskwa and Katya Coffey. Immersed in community forest restoration and indigenous advocacy, they witnessed firsthand the stark contrast between extractive mass-tourism and the urgent needs of local ecosystems.
                  </p>
                  <p>
                    Costa Rica had pioneered world-renowned national conservation policies, yet small grassroots organizations—turtle hatcheries, women’s cacao cooperatives, and biological corridor associations—often struggled for reliable resources and hands-on assistance.
                  </p>
                  <p>
                    Sacred Roots was founded to create an ethical bridge: designing small-group educational journeys where every participant directly funds and physically assists verified local conservation projects, returning home with lasting life perspective.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6 relative h-[420px] rounded-3xl overflow-hidden shadow-xl border border-stone-200">
                <Image
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
                  alt="Costa Rica rainforest canopy and mountains"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 600px"
                  referrerPolicy="no-referrer"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-stone-950/20" />
                <div className="absolute bottom-6 left-6 right-6 bg-stone-900/90 backdrop-blur-md p-4 rounded-xl text-white border border-white/10 text-xs">
                  <p className="font-bold text-emerald-300">Why Costa Rica?</p>
                  <p className="text-stone-300 mt-1">
                    Holding 5% of the planet’s terrestrial biodiversity, a constitution without a military since 1948, and over 99% renewable power, Costa Rica is the living laboratory for global ecological peace.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 2: What We Believe & Our Approach */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#14261d]">
              Our Guiding Beliefs
            </h2>
            <p className="text-stone-600 text-base">
              Principles that govern every route we plan, every partner we engage, and every participant we host.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-stone-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="font-serif text-xl font-bold text-[#14261d]">Humility Over &ldquo;Saviorism&rdquo;</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                We do not enter communities pretending to &ldquo;fix&rdquo; them. We arrive as humble students, listening to indigenous elders and local biologists, assisting only with projects they have conceived and requested.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-stone-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="font-serif text-xl font-bold text-[#14261d]">Rigorous Field Science</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Conservation work must be scientifically verified. Our student and volunteer data feeds directly into national wildlife registries, IUCN data sets, and peer-reviewed biological corridor tracking.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-stone-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="font-serif text-xl font-bold text-[#14261d]">Economic Reciprocity</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                We disburse revenue directly to local families, boat captains, and field stations. We reject middleman markups so that local communities benefit directly and permanently from eco-travel.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: The Team */}
        <section className="py-20 bg-[#f4f4ef] border-y border-stone-200" id="team">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-950 bg-emerald-100/90 px-3.5 py-1 rounded-full">
                Leadership in the Field
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14261d]">
                Meet Our Team
              </h2>
              <p className="text-stone-600 text-base sm:text-lg">
                Experienced expedition leaders, certified Costa Rican naturalists, community coordinators, and field scientists.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {TEAM_MEMBERS.map((member) => (
                <div 
                  key={member.id}
                  className="bg-white rounded-3xl p-8 border border-stone-200/90 shadow-sm flex flex-col sm:flex-row gap-6"
                >
                  <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden bg-stone-200 shrink-0 border border-stone-200">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="144px"
                      referrerPolicy="no-referrer"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-[#14261d]">{member.name}</h3>
                      <p className="text-xs font-semibold text-emerald-800">{member.role}</p>
                      <p className="text-[11px] text-stone-500 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-emerald-700" />
                        {member.location}
                      </p>
                    </div>

                    <p className="text-xs text-stone-600 leading-relaxed">
                      {member.bio}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {member.expertise.map((exp, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-stone-100 text-stone-700 rounded text-[10px] font-medium">
                          {exp}
                        </span>
                      ))}
                    </div>

                    <blockquote className="pt-2 text-xs italic text-emerald-950 font-serif border-l-2 border-emerald-800 pl-3">
                      &ldquo;{member.quote}&rdquo;
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 4: Verified Local Partners */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="partners">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-950 bg-emerald-100/90 px-3.5 py-1 rounded-full">
              Ground Collaborations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#14261d]">
              Built With Local Knowledge
            </h2>
            <p className="text-stone-600 text-base">
              We partner with verified Costa Rican conservation networks, indigenous councils, and scientific reserves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PARTNERS.map((partner) => (
              <div 
                key={partner.id}
                className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="px-2.5 py-1 bg-emerald-50 text-emerald-800 rounded-md text-[11px] font-bold uppercase tracking-wider inline-block">
                    {partner.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#14261d]">
                    {partner.name}
                  </h3>
                  <p className="text-xs text-stone-500 flex items-center gap-1 font-medium">
                    <MapPin className="w-3 h-3 text-emerald-700" />
                    {partner.location}
                  </p>
                  <p className="text-xs text-stone-600 leading-relaxed pt-1">
                    {partner.contribution}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] font-semibold text-emerald-800">
                  <span>{partner.badge}</span>
                  <span className="text-stone-500 font-normal">{partner.partnershipYears}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Safety & Responsibility */}
        <section className="py-16 bg-[#14261d] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                  Trust &amp; Risk Management
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold">
                  Participant Safety is Our First Commitment
                </h2>
                <p className="text-sm text-stone-300 leading-relaxed">
                  International volunteer travel requires rigorous preparation. Every Sacred Roots expedition operates under comprehensive safety frameworks:
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-stone-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Wilderness First Responder (WFR) &amp; CPR certified field leaders</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Dedicated private transportation with vetted licensed drivers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>24/7 in-country emergency response protocols &amp; hospital evacuation mapping</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Vetted accommodations with perimeter security and clean water standards</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-6 bg-[#193227] rounded-3xl p-8 border border-emerald-800 space-y-4">
                <h3 className="font-serif text-xl font-bold text-white">
                  Have Questions for Our Operations Team?
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Speak directly with Reese or Katya about safety, lodging standards, dietary accommodations, or custom group requirements.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 text-xs font-bold text-[#14261d] bg-[#fbfbf8] hover:bg-white rounded-xl shadow transition-colors"
                  >
                    Contact Operations Team
                  </Link>
                  <a
                    href="https://wa.me/50688880000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 text-xs font-bold text-emerald-300 bg-emerald-900/60 hover:bg-emerald-800/80 border border-emerald-700/60 rounded-xl transition-colors"
                  >
                    WhatsApp In-Country (+506)
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
    </div>
  );
}
