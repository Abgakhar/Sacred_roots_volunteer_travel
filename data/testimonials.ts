export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization?: string;
  journeyTitle: string;
  category: 'Student' | 'Educator' | 'Family' | 'Volunteer' | 'Leader';
  quote: string;
  image: string;
  year: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Elena Rostova',
    role: 'AP Environmental Science Teacher',
    organization: 'Oakridge International Academy, Canada',
    journeyTitle: 'Experiential STEM & Environmental Education',
    category: 'Educator',
    quote: 'Taking 22 high school students abroad is inherently daunting, but Sacred Roots set a gold standard for safety, logistics, and academic depth. Our students didn’t just look at slides—they stood in a stream measuring macroinvertebrates and planted 300 trees alongside local kids. It transformed how they view our planet.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    year: '2025 Participant'
  },
  {
    id: 't2',
    name: 'David & Maya Miller',
    role: 'Parents (Traveling with kids aged 11 & 14)',
    organization: 'Family Private Journey',
    journeyTitle: 'Custom Family Conservation Journey',
    category: 'Family',
    quote: 'We wanted our children to experience the world beyond standard all-inclusive resorts. Walking the beach at 11 PM to witness a sea turtle nesting and waking up in an indigenous cacao village gave our family memories that no hotel could ever provide. The pacing was thoughtful, safe, and deeply meaningful.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    year: '2025 Participant'
  },
  {
    id: 't3',
    name: 'Liam Chen',
    role: 'Biology Undergraduate Student',
    organization: 'University Volunteer Expedition',
    journeyTitle: 'Rainforest Biodiversity & Wildlife Corridor',
    category: 'Student',
    quote: 'Checking camera traps in the Osa Peninsula and retrieving footage of an ocelot 200 meters from our biological station was electrifying. Sebastian and Reese provided rigorous scientific context while keeping every moment grounded in local community realities.',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
    year: '2024 Participant'
  },
  {
    id: 't4',
    name: 'Sarah Jenkins',
    role: 'VP of People & Sustainability',
    organization: 'Verdant Tech Group (B-Corp)',
    journeyTitle: 'Purpose-Driven Corporate Retreat',
    category: 'Leader',
    quote: 'Our executive team needed more than trust falls in a generic conference room. Sacred Roots balanced high-speed Starlink for our morning quarterly planning with afternoons planting a dedicated wildlife corridor. We returned with strategic clarity and authentic team cohesion.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80',
    year: '2025 Participant'
  },
  {
    id: 't5',
    name: 'Marcus Vance',
    role: 'Solo Purpose-Driven Traveler',
    organization: 'Independent Volunteer',
    journeyTitle: 'Marine & Sea Turtle Conservation',
    category: 'Volunteer',
    quote: 'As a solo traveler, I was welcomed like family from the minute I landed in San José. Releasing newborn Olive Ridley hatchlings into the Pacific sunrise made all the muddy night patrols completely unforgettable. You leave with genuine purpose.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    year: '2024 Participant'
  }
];
