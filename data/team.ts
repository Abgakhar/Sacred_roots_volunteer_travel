export interface TeamMember {
  id: string;
  name: string;
  role: string;
  location: string;
  image: string;
  bio: string;
  expertise: string[];
  quote: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'reese-maskwa',
    name: 'Reese Maskwa',
    role: 'Co-Founder & Director of Operations',
    location: 'Canada & Costa Rica',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    bio: 'Reese co-founded Sacred Roots after transformative years immersed in Central American forest conservation and community development. With a background in expedition logistics, sustainable tourism management, and intercultural leadership, Reese oversees all field operations, traveler safety protocols, and partner accountability systems across Costa Rica.',
    expertise: ['Expedition Operations', 'Risk & Safety Management', 'Community Logistics', 'Curriculum Design'],
    quote: 'True travel isn’t about checking off sights; it is about humility, connection, and ensuring that our presence enriches the land and people who welcome us.'
  },
  {
    id: 'katya-coffey',
    name: 'Katya Coffey',
    role: 'Co-Founder & Director of Community Partnerships',
    location: 'Canada & Costa Rica',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    bio: 'Katya’s passion for social ecology and indigenous rights was born during deep community dialogues in rural Costa Rica. She manages Sacred Roots’ network of indigenous elders, women’s artisan cooperatives, and marine conservation stations, ensuring that every program is co-designed around local priorities and fair-trade principles.',
    expertise: ['Indigenous Relations', 'Ethical Supply Chains', 'Social Ecology', 'Participant Mentorship'],
    quote: 'When we listen first and align our resources with local wisdom, travel becomes a reciprocal act of healing and shared growth.'
  },
  {
    id: 'suyehn-rojas',
    name: 'Suyehn Rojas',
    role: 'Cultural & Community Coordinator',
    location: 'San José & Talamanca, Costa Rica',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    bio: 'Born in San José with deep ancestral ties to rural Costa Rican agricultural communities, Suyehn coordinates our cultural exchanges, language workshops, and rural host family networks. She is a licensed Costa Rican cultural guide and passionate advocate for indigenous language preservation.',
    expertise: ['Bribri & Cabécar Cultural Protocols', 'Cross-Cultural Facilitation', 'Bilingual Education', 'Community Hosting'],
    quote: 'Costa Rica’s deepest richness is not only in our rainforests, but in the warmth, stories, and resilience of our people.'
  },
  {
    id: 'sebastian-vasquez',
    name: 'Sebastian Vasquez',
    role: 'Lead Wildlife Biologist & Field Director',
    location: 'Osa Peninsula & Monteverde, Costa Rica',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    bio: 'Sebastian holds a degree in Tropical Biology from the University of Costa Rica and has spent over a decade conducting camera-trap wildlife surveys, sea turtle nesting research, and cloud forest bioacoustic monitoring. He directs all field science modules, research permitting, and student data collection.',
    expertise: ['Herpetology & Mammalian Ecology', 'Camera Trap Arrays', 'Wilderness First Responder (WFR)', 'Field Biology Instruction'],
    quote: 'Science comes alive when you are standing in a tropical downpour measuring the shell of a nesting sea turtle under the stars.'
  }
];
