export interface JournalPost {
  slug: string;
  title: string;
  excerpt: string;
  category: 'Conservation' | 'Community' | 'Educational Travel' | 'Behind the Journey' | 'Costa Rica Guide';
  readTime: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
  };
  coverImage: string;
  content: string[];
  keyTakeaways: string[];
}

export const JOURNAL_POSTS: JournalPost[] = [
  {
    slug: 'why-night-patrols-matter-sea-turtle-conservation',
    title: 'Under the Pacific Stars: Why Night Beach Patrols Remain the Frontline of Turtle Conservation',
    excerpt: 'On the remote coastlines of Costa Rica, human presence combined with biometric monitoring has shifted local poaching rates by over 80%. Here is how field science meets community protection.',
    category: 'Conservation',
    readTime: '6 min read',
    publishedAt: 'February 12, 2026',
    author: {
      name: 'Sebastian Vasquez',
      role: 'Lead Wildlife Biologist'
    },
    coverImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    keyTakeaways: [
      'Night patrols deter unauthorized egg poaching while gathering crucial biological tracking data.',
      'Controlled beach hatcheries regulate sand temperatures to protect healthy gender ratios among hatchlings.',
      'Community stewardship provides fair-wage alternatives for former poachers, creating sustainable blue economies.'
    ],
    content: [
      'It is 11:30 PM on a Pacific beach in Costa Rica. The only light comes from the bioluminescent crests of the breaking waves and our dim red headlamps. Walking in soft sand for five kilometers in the humid tropical night, you learn to listen for the distinctive scraping sound of an ancient creature ascending the tide line.',
      'When an Olive Ridley or Green turtle drags her hundred-kilogram body out of the ocean, she enters a trance-like state to excavate an egg chamber. Our role is non-intrusive and strictly scientific: we measure carapace dimensions, record the precise GPS waypoint, tag the rear flipper with a national registry number, and carefully relocate clutches laid in high-erosion surf zones into our secure, monitored beach hatchery.',
      'For decades, coastal economics left rural villagers with few options beyond harvesting turtle eggs for cash. Today, through our partner networks, local community members are certified as lead conservation guides and hatchery guardians. By visiting and contributing your hands and program fees, you directly sustain fair wages for full-time rangers who protect thousands of hatchlings each nesting cycle.'
    ]
  },
  {
    slug: 'ancestral-cacao-and-the-bribri-cosmovision',
    title: 'The Sacred Seed: Understanding Bribri Agroforestry and the Cultural Soul of Cacao',
    excerpt: 'To the Bribri people of Talamanca, cacao is not a commercial crop—it is a sacred woman and deity. Discover how traditional polyculture farming preserves both ancient culture and living biodiversity.',
    category: 'Community',
    readTime: '7 min read',
    publishedAt: 'January 28, 2026',
    author: {
      name: 'Katya Coffey & Suyehn Rojas',
      role: 'Community Partnerships & Cultural Lead'
    },
    coverImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80',
    keyTakeaways: [
      'Bribri cacao farming utilizes multi-tier forest canopies that mimic natural jungle layers.',
      'Heirloom cacao (Tsiru) is central to traditional medicine, rituals, and matrilineal property stewardship.',
      'Visiting travelers learn to move from consumer mindset to respectful cultural guest.'
    ],
    content: [
      'In the sovereign Bribri territory of Talamanca, entering an indigenous cacao grove feels nothing like walking into a commercial monoculture plantation. You find yourself beneath towering cedar and laurel canopy trees, surrounded by wild medicinal shrubs, banana palms, and shade-grown cacao trees laden with orange and purple pods.',
      'In Bribri mythology, cacao is Tsiru, a revered spiritual being who gave her form to sustain and heal humanity. Because the Bribri society is matrilineal, cacao trees and land stewardship have historically been passed down through mothers and daughters. Today, cooperatives like ACOMUITA unite indigenous women who harvest, ferment, and craft chocolate using methods unchanged for centuries.',
      'When our participants grind roasted beans on ancient volcanic stone slabs, the conversation naturally shifts from travel to worldview. We learn how indigenous polyculture sequesters carbon, prevents soil erosion, and protects sacred river watersheds without synthetic inputs or deforestation.'
    ]
  },
  {
    slug: 'beyond-the-textbook-experiential-stem-in-the-tropics',
    title: 'Beyond the Textbook: Why Experiential Field Science in Costa Rica Resets Student Learning',
    excerpt: 'When high school and university students transition from classroom desks to active tropical watersheds, science transforms from an abstract concept into an urgent, tangible calling.',
    category: 'Educational Travel',
    readTime: '5 min read',
    publishedAt: 'December 18, 2025',
    author: {
      name: 'Reese Maskwa',
      role: 'Director of Operations'
    },
    coverImage: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80',
    keyTakeaways: [
      'Field inquiry develops critical thinking far faster than memorizing static textbook diagrams.',
      'Supervised international service fosters global empathy and collaborative problem-solving.',
      'Safety-first logistical architecture gives educators and parents complete peace of mind.'
    ],
    content: [
      'How do you teach a student about biodiversity loss? You can show them a graph of declining global species. Or you can hand them a stream net, a magnifying glass, and a titration kit at the base of an active volcano in Costa Rica.',
      'When a student counts benthic macroinvertebrates to determine why one tributary is pristine while another is stressed, science becomes investigative. When they calculate the biomass of a regenerating rainforest plot and physically plant thirty hardwood saplings with their own hands, conservation turns from anxiety into agency.',
      'Our school journeys are built around three non-negotiable pillars: rigorous curriculum integration (NGSS & IB), pristine safety standards with certified wilderness medical protocols, and authentic peer-to-peer connection with rural Costa Rican students.'
    ]
  }
];
