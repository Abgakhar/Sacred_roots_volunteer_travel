export interface ItineraryDay {
  day: number;
  title: string;
  subtitle: string;
  description: string;
  activities: string[];
  meals: string;
  stay: string;
}

export interface Journey {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: 'marine' | 'wildlife' | 'cultural' | 'education' | 'custom' | 'retreat';
  location: string;
  duration: string;
  groupSize: string;
  fitnessLevel: 'Easy' | 'Moderate' | 'Active' | 'Customizable';
  bestFor: string;
  experienceType: string;
  impactCategory: string;
  heroImage: string;
  gallery: string[];
  overview: string;
  highlights: string[];
  actualActivities: {
    title: string;
    description: string;
    iconName: string;
  }[];
  learningOutcomes: string[];
  impactContribution: {
    summary: string;
    metrics: { label: string; value: string }[];
  };
  sampleItinerary: ItineraryDay[];
  included: string[];
  notIncluded: string[];
  dates: {
    season: string;
    availability: string;
    status: 'Open' | 'Filling Fast' | 'Custom Dates Available' | 'Applications Opening Soon';
  }[];
  investment: {
    startingPrice: string;
    priceNote: string;
    depositRequired: string;
  };
  faqs: { question: string; answer: string }[];
  featured?: boolean;
}

export const JOURNEYS: Journey[] = [
  {
    id: 'marine-conservation',
    slug: 'marine-conservation',
    title: 'Marine & Sea Turtle Conservation Expedition',
    tagline: 'Protect Pacific nesting habitats, restore coral nurseries, and study coastal marine biodiversity alongside Costa Rican biologists.',
    category: 'marine',
    location: 'Pacific Coast & Golfo Dulce, Costa Rica',
    duration: '7 to 10 Days',
    groupSize: '8 – 14 Travelers',
    fitnessLevel: 'Moderate',
    bestFor: 'Students, eco-conscious travelers, families (ages 10+), and biology enthusiasts',
    experienceType: 'Hands-on Marine Conservation + Field Science + Coastal Immersion',
    impactCategory: 'Marine Biology & Ecosystem Restoration',
    heroImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Work directly alongside Costa Rican marine biologists and local coastal stewards. This hands-on journey places you on critical nesting beaches and tropical fjord ecosystems. You will participate in nighttime sea turtle patrols, record biometric nesting data, assist in mangrove reforestation to protect marine nurseries, and support coral reef micro-fragmentation restoration.',
    highlights: [
      'Night patrols for nesting Olive Ridley, Green, and Hawksbill turtles',
      'Mangrove estuary kayaking and seedling nursery planting',
      'Coral nursery maintenance and reef health biodiversity surveys',
      'Artisanal sustainable fishing workshop with local ocean community leaders',
      'Snorkeling survey in biologically intense coastal marine reserves'
    ],
    actualActivities: [
      {
        title: 'Sea Turtle Night Patrols',
        description: 'Walk designated beach sectors with red-light headlamps to safely locate nesting females, measure shell biometrics, and relocate vulnerable clutches to protected beach hatcheries.',
        iconName: 'ShieldCheck'
      },
      {
        title: 'Mangrove Mudflat Planting',
        description: 'Propagate red and black mangrove propagules in coastal estuaries, stabilizing shoreline soils and providing vital nursery habitats for juvenile reef fish.',
        iconName: 'Sprout'
      },
      {
        title: 'Marine Debris Data Auditing',
        description: 'Conduct standardized coastal micro-plastic and ocean trash audits, cataloging data for international marine conservation policy databases.',
        iconName: 'Trash2'
      },
      {
        title: 'Reef Ecology Field Sessions',
        description: 'Learn underwater survey techniques while snorkeling vibrant rocky reefs and observing spotted eagle rays, reef sharks, and tropical fish communities.',
        iconName: 'Compass'
      }
    ],
    learningOutcomes: [
      'Understanding of Eastern Pacific marine biodiversity and sea turtle lifecycle dynamics',
      'Field survey methodologies, data recording, and IUCN endangered species protocols',
      'Direct insight into community-led conservation economies versus commercial overfishing',
      'Hands-on coastal ecosystem restoration skills applied in tropical climates'
    ],
    impactContribution: {
      summary: '100% of your volunteer hours go directly into verified local conservation stations. A dedicated conservation stipend from every participant fee funds local ranger salaries and hatchery maintenance.',
      metrics: [
        { label: 'Beach Patrol Miles Covered', value: '45+ km' },
        { label: 'Hatchery Nests Monitored', value: '100% Protected' },
        { label: 'Mangrove Seedlings Planted', value: '25 per traveler' },
        { label: 'Local Guide Wages Generated', value: 'Fair-trade certified' }
      ]
    },
    sampleItinerary: [
      {
        day: 1,
        title: 'Arrival in San José & Transit to Coastal Base',
        subtitle: 'Gateway to the Pacific',
        description: 'Meet the Sacred Roots team at SJO Airport. Travel via private eco-coach through lush mountain passes to our coastal eco-lodge base. Welcome dinner with Costa Rican briefing.',
        activities: ['Airport greeting', 'Scenic mountain descent', 'Team orientation & safety brief', 'Traditional "Casado" dinner'],
        meals: 'Dinner included',
        stay: 'Sustainable Coastal Field Station, Playa Hermosa / Osa Sector'
      },
      {
        day: 2,
        title: 'Marine Ecology Briefing & First Beach Patrol',
        subtitle: 'Orientation with Lead Biologists',
        description: 'Morning workshop on sea turtle anatomy, egg tagging protocols, and conservation history. Afternoon beach preparation and sunset observation. First evening patrol cycle.',
        activities: ['Biological orientation', 'Survey tool calibration', 'Sunset beach reconnaissance', 'Night patrol shift (8 PM – 12 AM)'],
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Coastal Field Station'
      },
      {
        day: 3,
        title: 'Hatchery Duty & Mangrove Nursery Restoration',
        subtitle: 'Restoring Vital Coastal Nurseries',
        description: 'Early morning hatchery check to release morning hatchlings to the surf line. Afternoon kayaking in the estuary to collect and plant red mangrove propagules.',
        activities: ['Hatchling release protocol', 'Estuary kayaking & seedling collection', 'Mudflat planting session', 'Evening biology lecture'],
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Coastal Field Station'
      },
      {
        day: 4,
        title: 'Coral Reef Assessment & Marine Protected Area Survey',
        subtitle: 'Underwater Stewardship',
        description: 'Boat expedition to a nearby marine biological reserve. Snorkel alongside marine researchers conducting fish census and observing coral nursery restoration structures.',
        activities: ['Boat transit & dolphin spotting', 'Guided snorkel transect survey', 'Coral nursery cleaning', 'Community beach clean-up audit'],
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Coastal Field Station'
      },
      {
        day: 5,
        title: 'Community Artisanal Fishermen Exchange',
        subtitle: 'Living the Blue Economy',
        description: 'Meet with local cooperative fishermen who transformed their practices to support sustainable selective hook-and-line fishing and eco-tourism guiding.',
        activities: ['Dialogue with fishing cooperative', 'Local cooking workshop with catch-of-the-day', 'Night patrol shift 2'],
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Coastal Field Station'
      },
      {
        day: 6,
        title: 'Data Synthesis, Forest Waterfall Trek & Celebration',
        subtitle: 'Reflecting on Conservation Impact',
        description: 'Collate patrol data with the research team. Afternoon hike to an inland coastal rainforest waterfall. Evening community celebration and reflection circle.',
        activities: ['Data collation with field scientists', 'Rainforest waterfall hike & swim', 'Farewell community dinner & bonfire'],
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Coastal Field Station'
      },
      {
        day: 7,
        title: 'Return to San José / International Departure',
        subtitle: 'Journey Homeward',
        description: 'Morning transfer back to San José International Airport or continuation on custom extension itineraries.',
        activities: ['Scenic morning transit', 'Souvenir stop at fair-trade craft collective', 'Airport drop-off'],
        meals: 'Breakfast included',
        stay: 'Departure / Optional San José Hotel Extension'
      }
    ],
    included: [
      'All in-country ground transportation via private air-conditioned eco-shuttle',
      '6 nights accommodation at verified sustainable coastal lodge & field station',
      '3 nutritious chef-prepared meals daily featuring local Costa Rican farm-to-table cuisine',
      'Full-time bilingual Sacred Roots expedition leader & certified local marine biologists',
      'All field research permits, safety equipment, red-light headlamps, and snorkel gear',
      'Direct financial contribution to the local community turtle hatchery and ranger fund',
      '24/7 in-country emergency support and emergency medical evacuation insurance protocols'
    ],
    notIncluded: [
      'International airfare to/from San José (SJO)',
      'Personal travel insurance (mandatory, we provide guidance)',
      'Optional staff gratuities and personal artisanal souvenirs',
      'Alcoholic beverages and specialty cafe items'
    ],
    dates: [
      { season: 'July – December (Peak Turtle Nesting)', availability: 'Departures every 2nd Saturday', status: 'Open' },
      { season: 'January – April (Dry Season & Marine Science)', availability: 'Custom & Open Departures', status: 'Filling Fast' },
      { season: 'May – June (Green Season Mangrove Focus)', availability: 'Departures on demand', status: 'Custom Dates Available' }
    ],
    investment: {
      startingPrice: '$1,850 USD',
      priceNote: 'Per participant (all-inclusive ground package, double/triple occupancy). Student/Group discounts available.',
      depositRequired: '$350 USD to secure placement'
    },
    faqs: [
      {
        question: 'Do I need prior marine biology or diving experience?',
        answer: 'No previous experience is required! Our Costa Rican lead biologists conduct comprehensive on-the-ground training covering all turtle handling protocols, survey tools, and safety procedures.'
      },
      {
        question: 'What are the physical demands of night patrols?',
        answer: 'Patrols involve walking 3 to 6 km on soft sand at night in humid tropical conditions. Travelers should be comfortable with moderate physical exertion and short night shifts.'
      },
      {
        question: 'Is this suitable for families or school groups?',
        answer: 'Yes! We adapt patrol hours and provide dedicated educators for family groups and student expeditions with appropriate chaperone ratios.'
      }
    ],
    featured: true
  },
  {
    id: 'wildlife-biodiversity',
    slug: 'wildlife-biodiversity',
    title: 'Rainforest Biodiversity & Wildlife Corridor Initiative',
    tagline: 'Work inside the biological corridors of the Osa Peninsula and Monteverde cloud forests, tracking endemic wildlife and planting native canopy trees.',
    category: 'wildlife',
    location: 'Osa Peninsula & Monteverde Cloud Forest, Costa Rica',
    duration: '8 to 12 Days',
    groupSize: '6 – 12 Travelers',
    fitnessLevel: 'Active',
    bestFor: 'Wildlife photographers, university groups, adventurous volunteers, and nature enthusiasts',
    experienceType: 'Canopy Ecology + Wildlife Camera Trapping + Habitat Connectivity',
    impactCategory: 'Wildlife Conservation & Reforestation',
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Costa Rica holds over 5% of the world’s terrestrial biodiversity on just 0.03% of the earth’s landmass. On this flagship wildlife expedition, you will immerse yourself in primary lowland rainforest and mist-shrouded cloud forests. You will assist field researchers in deploying motion-activated camera traps for tapirs and jaguars, collect bio-acoustic audio loggers, and plant endemic hardwood saplings to reconnect fragmented wildlife corridors.',
    highlights: [
      'Field deployment & data retrieval from infrared wildlife camera traps',
      'Reforestation planting in strategic biological corridor buffer zones',
      'Night hikes for amphibians, glowing bioluminescent fungi, and reptiles',
      'Canopy platform observation of scarlet macaws, toucans, and howler monkeys',
      'Medicinal botanical workshops with senior Costa Rican naturalists'
    ],
    actualActivities: [
      {
        title: 'Camera Trap Deployment',
        description: 'Hike into primary jungle transects to set up motion-sensing research cameras, logging GPS coordinates and analyzing recent feline and mammalian tracks.',
        iconName: 'Camera'
      },
      {
        title: 'Canopy Reforestation',
        description: 'Dig, fertilize, and plant endangered native tree species (such as Almendro de Montaña) that provide critical nesting and food for Great Green Macaws.',
        iconName: 'TreePine'
      },
      {
        title: 'Acoustic Biodiversity Monitoring',
        description: 'Collect bioacoustic recorders used to monitor bird call frequency and amphibian populations across varied forest regeneration stages.',
        iconName: 'Mic'
      },
      {
        title: 'Wildlife Rehabilitation Center Support',
        description: 'Assist certified local rescue teams with enrichment building and habitat maintenance for rescued sloths, monkeys, and raptors undergoing rehabilitation.',
        iconName: 'HeartHandshake'
      }
    ],
    learningOutcomes: [
      'Deep understanding of tropical forest vertical stratification and keystone species',
      'Proficiency in non-invasive wildlife monitoring tools (cameras, acoustic arrays, GPS)',
      'Understanding of biological corridor theory and community agroforestry solutions',
      'Direct identification skills for 50+ bird species, primates, and tropical flora'
    ],
    impactContribution: {
      summary: 'Every participant directly contributes 40 hours of field research data and sponsors the planting and 3-year care monitoring of 20 native canopy trees.',
      metrics: [
        { label: 'Wildlife Corridors Connected', value: '3 Active Hubs' },
        { label: 'Trees Planted & Geo-tagged', value: '20+ per traveler' },
        { label: 'Camera Trap Hours Logged', value: '400+ hrs' },
        { label: 'Species Documented', value: '120+ recorded' }
      ]
    },
    sampleItinerary: [
      {
        day: 1,
        title: 'San José Welcome & Orientation',
        subtitle: 'Journey Into the Green Heartland',
        description: 'Meet in San José, team briefing on expedition ethics, biodiversity baseline, and gear check.',
        activities: ['Orientation briefing', 'Gear check', 'Introductory lecture on Costa Rican biomes'],
        meals: 'Dinner',
        stay: 'San José Eco Hotel'
      },
      {
        day: 2,
        title: 'Journey to the Osa Peninsula Wildlife Corridor',
        subtitle: 'Arriving at the Wild Frontier',
        description: 'Scenic travel by land and riverboat through the Terraba-Sierpe mangroves into the Golfo Dulce biological corridor.',
        activities: ['Mangrove boat journey', 'Arrival at solar-powered biological station', 'Sunset wildlife orientation'],
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Osa Rainforest Research Station'
      },
      {
        day: 3,
        title: 'Camera Traps & Mammalian Transect Surveys',
        subtitle: 'Tracking Apex Predators & Herbivores',
        description: 'Trek into old-growth forest with indigenous trackers and biologists to check camera traps and record tapir footprints.',
        activities: ['GPS grid navigation', 'Camera SD card extraction & battery service', 'Track casting workshop'],
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Osa Rainforest Research Station'
      },
      {
        day: 4,
        title: 'Biological Corridor Tree Planting & Soil Science',
        subtitle: 'Reconnecting Fragmented Lands',
        description: 'Work with local smallholder farmers to plant native hardwood trees that connect isolated forest patches across active farms.',
        activities: ['Sapling transport from nursery', 'Digging & planting 100+ native saplings', 'Agro-ecological farm lunch'],
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Osa Rainforest Research Station'
      },
      {
        day: 5,
        title: 'Bioacoustic Analysis & Night Amphibian Expedition',
        subtitle: 'The Sounds of the Living Forest',
        description: 'Analyze acoustic sensor data in the field lab. At nightfall, explore stream banks for red-eyed tree frogs and glass frogs.',
        activities: ['Field audio analysis workshop', 'Night stream bio-blitz', 'Macro photography workshop'],
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Osa Rainforest Research Station'
      },
      {
        day: 6,
        title: 'Transit to Cloud Forest Altitude',
        subtitle: 'From Lowland Jungle to Mist Canopy',
        description: 'Ascend into the misty cloud forests of Monteverde. Experience dramatic shifts in climate, flora, and bird species.',
        activities: ['Highland scenic transfer', 'Suspension bridge cloud forest walk', 'Epiphyte & hummingbird ecology talk'],
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Monteverde Conservation Lodge'
      },
      {
        day: 7,
        title: 'Quetzal Habitat Restoration & Canopy Stewardship',
        subtitle: 'Protecting the Cloud Forest Crown',
        description: 'Assist local reserve stewards in clearing invasive species and planting wild avocado trees essential for the Resplendent Quetzal.',
        activities: ['Habitat restoration work', 'Canopy walkway bird survey', 'Reflection circle by the fire'],
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Monteverde Conservation Lodge'
      },
      {
        day: 8,
        title: 'Synthesis, Return to San José & Farewell',
        subtitle: 'Bringing Insights Home',
        description: 'Complete data entry for the national wildlife database and return to San José for celebratory farewell dinner.',
        activities: ['Final research report presentation', 'Return transit to San José', 'Farewell dinner'],
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'San José Eco Hotel / Airport Departure'
      }
    ],
    included: [
      'Private transportation throughout all Costa Rican regions',
      '7 nights eco-lodge & field research station accommodations',
      'All meals cooked fresh daily using regional ingredients',
      'Expert bilingual conservation biologists and local indigenous guides',
      'Field equipment, GPS loggers, camera traps, and scientific permit fees',
      'Tree saplings and biological corridor monitoring budget',
      '24/7 dedicated support team and in-country safety network'
    ],
    notIncluded: [
      'International flights to/from Costa Rica',
      'Mandatory comprehensive travel insurance',
      'Personal gear (hiking boots, high-wicking rain gear, camera)',
      'Souvenirs and personal expenses'
    ],
    dates: [
      { season: 'Year-Round Expeditions', availability: 'Monthly scheduled departures', status: 'Open' },
      { season: 'Dry Season (Dec – April)', availability: 'High demand dates', status: 'Filling Fast' },
      { season: 'Green Season (May – Nov)', availability: 'Ideal for amphibian & botany research', status: 'Open' }
    ],
    investment: {
      startingPrice: '$2,150 USD',
      priceNote: 'All-inclusive 8-day in-country expedition. 12-day extended research option available at $2,750 USD.',
      depositRequired: '$400 USD to confirm spot'
    },
    faqs: [
      {
        question: 'How physically demanding is the trekking?',
        answer: 'Expect daily hikes of 4 to 8 kilometers on hilly, muddy rainforest trails. A solid level of physical fitness and agility on uneven terrain is recommended.'
      },
      {
        question: 'Will we see wild jaguars or pumas?',
        answer: 'Big cats are notoriously elusive in dense rainforest. While visual encounters are rare, camera traps routinely capture them on our active survey grids within 24-48 hours of setup!'
      }
    ],
    featured: true
  },
  {
    id: 'indigenous-cultural',
    slug: 'indigenous-cultural',
    title: 'Indigenous Stewardship & Cultural Immersion',
    tagline: 'Live and learn with Bribri and Cabécar communities in Talamanca, discovering ancestral agroforestry, sacred cacao traditions, and indigenous land autonomy.',
    category: 'cultural',
    location: 'Talamanca Mountain Range & Bribri Indigenous Territory, Costa Rica',
    duration: '7 Days',
    groupSize: '6 – 10 Travelers',
    fitnessLevel: 'Moderate',
    bestFor: 'Cultural travelers, anthropologists, students, seekers of authentic community wisdom',
    experienceType: 'Living Cultural Immersion + Ancestral Ecology + Community Service',
    impactCategory: 'Cultural Preservation & Community Autonomy',
    heroImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Travel beyond standard tourist trails into the sovereign indigenous territories of Talamanca. In deep partnership with community elders and women’s cacao cooperatives, this journey offers an authentic bridge into Bribri cosmovision. You will participate in traditional multi-layered agroforestry, learn the sacred ritual significance of heirloom cacao (Tsiru), harvest wild medicinal plants, and assist in building community infrastructure alongside local families.',
    highlights: [
      'Direct hosting by Bribri families and indigenous women’s associations',
      'Sacred ancestral cacao harvesting, fermenting, and ceremonial preparation',
      'Traditional medicinal plant ethnobotanical walks with community elders (Awá)',
      'Community service project: repairing footbridges or community eco-schools',
      'River dugout canoe navigation on the bi-national Sixaola watershed'
    ],
    actualActivities: [
      {
        title: 'Ancestral Cacao Workshop',
        description: 'Harvest organic cacao pods, understand the spiritual role of cacao in Bribri mythology, toast beans over open wood fires, and grind by hand with stone.',
        iconName: 'Coffee'
      },
      {
        title: 'Ethnobotanical Forest Study',
        description: 'Walk through complex indigenous agroforestry plots mimicking natural forest layers, identifying curative herbs, natural dyes, and fiber plants.',
        iconName: 'Leaf'
      },
      {
        title: 'Community Service Collaboration',
        description: 'Work alongside community leaders on verified priority infrastructure—repairing footpaths, water catchment systems, or artisanal community centers.',
        iconName: 'Hammer'
      },
      {
        title: 'Oral History & Cosmovision Circles',
        description: 'Gather inside the sacred circular Usuré conical house to listen to traditional elders share creation stories, Clan law, and conservation ethics.',
        iconName: 'MessageCircle'
      }
    ],
    learningOutcomes: [
      'Comprehensive understanding of indigenous land tenure, autonomy, and cultural resilience',
      'Principles of indigenous polyculture agroforestry versus monoculture agriculture',
      'Appreciation for Bribri matrilineal lineage structures and community governance',
      'Practical traditional skills in natural construction, fiber weaving, and cacao processing'
    ],
    impactContribution: {
      summary: '100% of lodging and tour fees go directly to the indigenous families and women’s artisan cooperatives. We do not use third-party intermediaries.',
      metrics: [
        { label: 'Direct Community Revenue Share', value: '100% Local' },
        { label: 'Women Cacao Growers Supported', value: '24 Artisans' },
        { label: 'Community Infrastructure Built', value: '1 Project per trip' },
        { label: 'Ancestral Story Preservation', value: 'Recorded with permission' }
      ]
    },
    sampleItinerary: [
      {
        day: 1,
        title: 'San José to the Caribbean Foothills of Talamanca',
        subtitle: 'Crossing Into Indigenous Lands',
        description: 'Travel through the Braulio Carrillo cloud mountains down to the Caribbean slopes. Arrive at the edge of the Bribri territory for traditional welcoming dinner.',
        activities: ['Mountain descent transit', 'Introduction to Bribri cultural protocols', 'First community shared meal'],
        meals: 'Lunch, Dinner',
        stay: 'Community-run Eco-Lodge, Bambú Sector'
      },
      {
        day: 2,
        title: 'Dugout Canoe River Crossing & Arrival in Yorkín',
        subtitle: 'Living on the Border of Costa Rica and Panama',
        description: 'Travel by motorized dugout wooden canoe up the Yorkín River to an off-grid indigenous village. Meet our host families and elder council.',
        activities: ['River canoe journey', 'Village welcome ceremony', 'Settling into traditional wooden guest bungalows'],
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Yorkín Women’s Cooperative Stays'
      },
      {
        day: 3,
        title: 'The Sacred Tree of Life: Heirloom Cacao & Agroforestry',
        subtitle: 'From Pod to Sacred Drink',
        description: 'Spend the day in the diverse forest plots. Harvest cacao, learn grafting techniques, toast over iron skillets, and prepare traditional spiced cacao drink.',
        activities: ['Cacao harvest & fermenting tour', 'Stone-grinding masterclass', 'Bribri language introduction'],
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Yorkín Women’s Cooperative Stays'
      },
      {
        day: 4,
        title: 'Community Infrastructure Service Day',
        subtitle: 'Working Shoulder to Shoulder',
        description: 'Engage in collaborative service requested by the community council: repairing rain shelters, harvesting palm leaves for thatch roofs, or trail work.',
        activities: ['Community service block (4-5 hours)', 'Traditional stream swimming break', 'Shared feast prepared on banana leaves'],
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Yorkín Women’s Cooperative Stays'
      },
      {
        day: 5,
        title: 'The Usuré: Cosmovision & Traditional Medicine',
        subtitle: 'Ancient Wisdom Inside the Conical House',
        description: 'Visit the sacred architectural conical structure symbolizing the universe. Learn from a traditional healer (Awá) about jungle medicinal herbs.',
        activities: ['Sacred Usuré visit', 'Ethnobotanical garden walk', 'Traditional bow-and-arrow craft demonstration'],
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Yorkín Women’s Cooperative Stays'
      },
      {
        day: 6,
        title: 'River Return & Caribbean Coastal Reflection',
        subtitle: 'From Forest Roots to Coastal Calm',
        description: 'Canoe back downriver. Transit to the South Caribbean coast of Puerto Viejo for evening ocean reflection and farewell group synthesis.',
        activities: ['Morning river canoe departure', 'South Caribbean coastal transit', 'Group reflection & gratitude circle by the sea'],
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Sustainable Caribbean Coast Lodge'
      },
      {
        day: 7,
        title: 'Return to San José / Departures',
        subtitle: 'Returning With New Perspectives',
        description: 'Travel back across the central cordillera to San José International Airport for departing flights.',
        activities: ['Morning transfer to SJO Airport', 'Artisan collective market stop', 'Farewell hugs'],
        meals: 'Breakfast included',
        stay: 'Departure'
      }
    ],
    included: [
      'All in-country land and riverboat transportation',
      '6 nights accommodation in community eco-lodges and indigenous homestays',
      'All home-cooked meals prepared with organic local ingredients',
      'Direct fair-wage compensation to indigenous guides, elders, and host families',
      'All workshop materials, cacao tastings, and community service supplies',
      'Bilingual Sacred Roots trip leader assisting with cultural bridge and translation',
      'Comprehensive traveler pre-departure cultural etiquette guide and 24/7 safety network'
    ],
    notIncluded: [
      'International airfare',
      'Personal travel & medical insurance',
      'Direct cash tips for host families / artisan craft purchases',
      'Personal snacks and personal toiletries'
    ],
    dates: [
      { season: 'All Year', availability: 'Departures 1st & 3rd Monday of every month', status: 'Open' },
      { season: 'Cacao Harvest Season (Oct – Jan)', availability: 'Special harvest focus dates', status: 'Filling Fast' }
    ],
    investment: {
      startingPrice: '$1,650 USD',
      priceNote: 'Per participant. 100% ethical direct supply chain.',
      depositRequired: '$300 USD deposit'
    },
    faqs: [
      {
        question: 'What are the accommodations like in the indigenous villages?',
        answer: 'Accommodations in Yorkín are clean, simple, and beautifully built from local hardwoods and palm thatch. You will have private rooms with mosquito nets, clean sheets, and shared modern composting/flush toilets with cool mountain water showers.'
      },
      {
        question: 'How do dietary preferences work with traditional host families?',
        answer: 'Bribri host cooks are exceptionally skilled with fresh local ingredients (cassava, plantains, beans, fresh greens, tropical fruits, hearts of palm). Vegetarian, vegan, and gluten-free diets are easily accommodated with advance notice.'
      }
    ],
    featured: true
  },
  {
    id: 'educational-travel',
    slug: 'educational-travel',
    title: 'Experiential STEM & Environmental Education for Schools',
    tagline: 'Custom curriculum-aligned expeditions for middle schools, high schools, and universities combining field biology, climate science, and community engagement.',
    category: 'education',
    location: 'Central Valley, Arenal Volcano & Manuel Antonio Marine Sector, Costa Rica',
    duration: '8 to 14 Days (Customizable)',
    groupSize: '10 – 35 Students + Chaperones',
    fitnessLevel: 'Moderate',
    bestFor: 'High school science departments, IB / AP Biology programs, university study abroad courses',
    experienceType: 'Hands-on Field Science + Global Citizenship + Service Learning',
    impactCategory: 'Youth Environmental Literacy & Community Stewardship',
    heroImage: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Transform textbooks into living reality. Sacred Roots designs custom faculty-led and student group journeys that blend rigorous scientific field inquiry with leadership development, cultural empathy, and safety-first group logistics. Students collect water quality data in volcanic watersheds, calculate carbon sequestration in regenerating pastures, and deliver impactful community service hours.',
    highlights: [
      'Curriculum integration with Next Generation Science Standards (NGSS) & IB diploma guidelines',
      '1:6 staff-to-student supervision ratio with wilderness first-aid certified guides',
      'Service learning credit verification (up to 35 verified community service hours)',
      'Volcanic geothermal energy field study at Arenal Volcano National Park',
      'Organic permaculture farming and renewable energy workshops'
    ],
    actualActivities: [
      {
        title: 'Water Quality Bio-indicators',
        description: 'Collect benthic macroinvertebrates in clean mountain streams, performing chemical titration and index scoring to assess watershed health.',
        iconName: 'Droplets'
      },
      {
        title: 'Forest Carbon Biomass Audits',
        description: 'Measure DBH (diameter at breast height) and canopy heights across varied forest ages to calculate carbon storage metrics.',
        iconName: 'LineChart'
      },
      {
        title: 'School-to-School Cultural Exchange',
        description: 'Spend a day with local rural Costa Rican school students sharing language games, collaborative art murals, and environmental science activities.',
        iconName: 'Users'
      },
      {
        title: 'Geothermal & Renewable Energy Field Study',
        description: 'Explore natural thermal vents and hydro-electric cooperatives demonstrating how Costa Rica produces 99%+ of its electricity from renewable sources.',
        iconName: 'Zap'
      }
    ],
    learningOutcomes: [
      'Mastery of scientific field sampling, hypotheses testing, and data analysis in tropical biomes',
      'Global competence, cross-cultural empathy, and practical conversational Spanish practice',
      'Deep appreciation for circular economic models and national decarbonization policies',
      'Leadership, resilience, and teamwork outside the traditional classroom environment'
    ],
    impactContribution: {
      summary: 'Students participate in verified service projects requested by partner schools and rural municipalities, leaving physical improvements and lasting peer connections.',
      metrics: [
        { label: 'Verified Service Hours', value: '25-35 hrs/student' },
        { label: 'Partner Schools Supported', value: '12 Rural Academies' },
        { label: 'Free Educator Slots', value: '1 Free for every 8 students' },
        { label: 'Safety Record', value: '100% Incident-free' }
      ]
    },
    sampleItinerary: [
      {
        day: 1,
        title: 'San José Welcome & Orientation',
        subtitle: 'Student Orientation & Team Norms',
        description: 'Arrival at SJO, private coach transfer to our education base lodge, welcome dinner, group agreements, and safety briefing.',
        activities: ['Safety briefings', 'Journaling workshop launch', 'Team-building dinner'],
        meals: 'Dinner',
        stay: 'San José Eco-Center'
      },
      {
        day: 2,
        title: 'Organic Permaculture & Zero-Waste Systems',
        subtitle: 'Applied Sustainable Agriculture',
        description: 'Hands-on day at a pioneering family-run permaculture farm. Students plant seasonal crops, harvest their own lunch, and study biodigester energy systems.',
        activities: ['Farm science rotations', 'Biodigester methane demonstration', 'Farm-to-fork lunch prep'],
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'San Carlos Education Lodge'
      },
      {
        day: 3,
        title: 'Arenal Volcano Watershed & Geothermal Science',
        subtitle: 'Plate Tectonics & Clean Energy',
        description: 'Hike the 1968 lava flow fields at Arenal Volcano. Collect volcanic rock samples and learn how thermal activity powers local green grids.',
        activities: ['Volcanology field hike', 'Geothermal water testing', 'Natural hot springs relaxation'],
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Arenal Conservation Base'
      },
      {
        day: 4,
        title: 'Rural School Collaborative Service Day',
        subtitle: 'Peer-to-Peer Global Learning',
        description: 'Partner with a local rural elementary school to paint a communal educational mural, build garden raised beds, and practice dual-language workshops.',
        activities: ['Service project completion', 'Soccer friendly match', 'Shared community afternoon snack'],
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Arenal Conservation Base'
      },
      {
        day: 5,
        title: 'Cloud Forest Canopy Canopy Science & Zipline Physics',
        subtitle: 'Biome Stratification & Aerial Ecology',
        description: 'Explore the high-altitude canopy via suspension bridges. Conduct botanical sampling of bromeliads and orchids before a physics-of-flight canopy zipline tour.',
        activities: ['Canopy canopy transect walk', 'Epiphyte biodiversity sampling', 'Certified aerial canopy zipline'],
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Monteverde Highland Station'
      },
      {
        day: 6,
        title: 'Pacific Marine Reserve & Coastal Ecology',
        subtitle: 'From Mountains to the Sea',
        description: 'Descend to the Pacific coast. Guided educational hike in Manuel Antonio / Ballena National Park studying tidal dynamics, capuchin monkeys, and coastal geology.',
        activities: ['National park guided hike', 'Tide pool marine organism study', 'Sunset beach debrief'],
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Pacific Coastal Eco-Lodge'
      },
      {
        day: 7,
        title: 'Student Final Presentations & Reflection Gala',
        subtitle: 'Synthesizing the Learning',
        description: 'Students synthesize data collected throughout the week into small-group TED-style presentations. Evening celebration and certificate award.',
        activities: ['Data synthesis lab', 'Student presentation showcase', 'Farewell gala dinner with live marimba music'],
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Pacific Coastal Eco-Lodge'
      },
      {
        day: 8,
        title: 'Return to San José / Departures',
        subtitle: 'Carrying the Lessons Forward',
        description: 'Morning coach transfer to SJO Airport with signed service certificates and commemorative field journals in hand.',
        activities: ['Morning transfer', 'Airport check-in assistance', 'Departure for home'],
        meals: 'Breakfast included',
        stay: 'Departure'
      }
    ],
    included: [
      'Comprehensive custom itinerary tailored to your school’s academic curriculum and calendar',
      '1 Free educator/chaperone travel slot for every 8 paying students',
      'Private motorcoach with dedicated professional driver exclusively for your group',
      'Full-time Sacred Roots bilingual educator and certified Costa Rican naturalist guide',
      'All accommodations with 24/7 night security and strict rooming policies',
      'All meals (3 per day) accommodating allergies and dietary requirements',
      'All park entrance fees, field lab equipment, materials, and service project supplies',
      'Service hour verification certificates and parent pre-trip webinar support'
    ],
    notIncluded: [
      'Group international airfare (we coordinate with your preferred booking agent)',
      'Passport fees and personal spending money',
      'Individual travel insurance'
    ],
    dates: [
      { season: 'Spring Break Expeditions (Feb – April)', availability: 'Accepting School Bookings', status: 'Open' },
      { season: 'Summer Field Courses (June – August)', availability: 'Prime university/high school slots', status: 'Filling Fast' },
      { season: 'Winter & Custom Term Programs (Nov – Jan)', availability: 'Custom calendar alignment', status: 'Custom Dates Available' }
    ],
    investment: {
      startingPrice: '$1,750 USD / student',
      priceNote: 'Tiered group rates based on student enrollment. All-inclusive in-country itinerary.',
      depositRequired: '$250 USD per student upon group commitment'
    },
    faqs: [
      {
        question: 'What are your student safety and supervision protocols?',
        answer: 'Safety is our absolute #1 priority. We maintain a minimum 1:6 adult-to-student supervision ratio. All guides hold Wilderness First Aid / CPR certifications, all buses are equipped with GPS tracking, and our lodges are vetted for strict perimeter security and dedicated student room wings.'
      },
      {
        question: 'Can you customize the itinerary to align with our specific syllabus?',
        answer: 'Absolutely. Whether you want to emphasize AP Environmental Science, Spanish language immersion, Marine Biology, or Global Leadership, our curriculum specialists adapt field modules to match your exact learning targets.'
      }
    ],
    featured: false
  },
  {
    id: 'custom-groups',
    slug: 'custom-groups',
    title: 'Tailored Journeys for Families, Nonprofits & Private Groups',
    tagline: 'Design a bespoke Costa Rican expedition configured around your exact group size, multigenerational age ranges, dates, and conservation objectives.',
    category: 'custom',
    location: 'Costa Rica (Custom Multiregional Routes)',
    duration: '6 to 16 Days (Tailored)',
    groupSize: '4 to 40+ Travelers',
    fitnessLevel: 'Customizable',
    bestFor: 'Multigenerational families, alumni groups, environmental nonprofits, friend collectives',
    experienceType: 'Custom Itinerary Design + Private Guiding + Meaningful Impact',
    impactCategory: 'Customized Direct Community Contribution',
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'No two groups share identical dreams or requirements. A multigenerational family with grandparents and eight-year-olds needs different pacing, accommodation, and activities than a photography guild or a university alumni group. Sacred Roots crafts completely custom private journeys from the ground up, pairing private luxury eco-villas or rustic biological stations with personalized conservation projects.',
    highlights: [
      '100% bespoke pacing and itinerary architecture tailored to your group needs',
      'Dedicated private bilingual naturalist guide and private luxury transport',
      'Multigenerational friendly activities: river floats, wildlife safaris, chocolate making, easy nature walks',
      'Curated boutique eco-lodges with private family suites, ocean views, or mountain mist settings',
      'Meaningful hands-on service component designed around your group’s specific passion'
    ],
    actualActivities: [
      {
        title: 'Customized Wildlife Safaris',
        description: 'Slow-paced private river safaris along the Peñas Blancas river observing sloths, river otters, caimans, and colorful toucans from stable rafts.',
        iconName: 'Compass'
      },
      {
        title: 'Private Family Service Projects',
        description: 'Plant fruit trees at a rural school or build a butterfly garden alongside local Costa Rican children—crafted so all ages can contribute.',
        iconName: 'Smile'
      },
      {
        title: 'Culinary & Botanical Masterclasses',
        description: 'Private chef-led cooking classes harvesting hearts of palm, organic yucca, vanilla, and making artisan cheeses with local farming families.',
        iconName: 'Utensils'
      },
      {
        title: 'Secluded Beach & Rainforest Excursions',
        description: 'Access hidden waterfalls, private nature reserves, and pristine uncrowded beaches away from standard tourist buses.',
        iconName: 'Sun'
      }
    ],
    learningOutcomes: [
      'Deeper cross-generational connection through shared discovery and meaningful service',
      'Intimate, unhurried cultural immersion with personal access to local community mentors',
      'Nuanced understanding of Costa Rican conservation policies and biological marvels',
      'Stress-free travel with every logistical detail seamlessly handled by local experts'
    ],
    impactContribution: {
      summary: 'You choose the primary focus of your group’s impact contribution: whether marine protection, indigenous education, or rainforest corridor restoration.',
      metrics: [
        { label: 'Tailored Pacing', value: '100% Customized' },
        { label: 'Private Guides', value: 'Dedicated 24/7' },
        { label: 'Satisfaction Score', value: '99.4% Rated 5/5' },
        { label: 'Direct Impact', value: 'Chosen by your group' }
      ]
    },
    sampleItinerary: [
      {
        day: 1,
        title: 'San José Private Welcome & Valley Transit',
        subtitle: 'Your Private Costa Rican Odyssey Begins',
        description: 'Private VIP airport greeting. Transfer in your dedicated luxury Mercedes Sprinter to a boutique coffee plantation hotel in the Central Valley.',
        activities: ['Private airport meet & greet', 'Welcome tropical fruit tasting', 'Private trip briefing with lead guide'],
        meals: 'Dinner',
        stay: 'Finca Rosa Blanca Boutique Eco-Resort'
      },
      {
        day: 2,
        title: 'Arenal Volcano & Private Peñas Blancas River Safari',
        subtitle: 'Wildlife From the Comfort of Stable Rafts',
        description: 'Travel to the Arenal Valley. Enjoy a peaceful motorized or paddle river float ideal for all ages to spot sloths and tropical birds without strenuous hiking.',
        activities: ['Scenic valley transfer', 'Gentle private river safari', 'Artisanal farm lunch with local family'],
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Arenal Springs Private Luxury Villas'
      },
      {
        day: 3,
        title: 'Canopy Hanging Bridges & Private Family Cacao Workshop',
        subtitle: 'High in the Treetops and Rich in Chocolate',
        description: 'Morning gentle stroll across accessible suspension bridges with personal spotting scopes. Afternoon private chocolate crafting session.',
        activities: ['Hanging bridges walk', 'Private bean-to-bar chocolate crafting', 'Thermal mineral pool soaking'],
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Arenal Springs Private Luxury Villas'
      },
      {
        day: 4,
        title: 'Custom Group Service Project & Rural Community Lunch',
        subtitle: 'Leaving a Living Legacy Together',
        description: 'Spend a meaningful morning planting a native tree grove or building garden boxes at a charming rural elementary school supported by Sacred Roots.',
        activities: ['Tailored service block (suitable for all ages)', 'Community lunch cooked on wood-burning stoves', 'Village stroll'],
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Arenal Springs Private Luxury Villas'
      },
      {
        day: 5,
        title: 'Transit to the Private Pacific Coastline (Manuel Antonio / Uvita)',
        subtitle: 'Where Tropical Rainforest Meets Turquoise Ocean',
        description: 'Scenic descent to the southern Pacific coast. Settle into private ocean-view cliffside eco-villas with toucans flying overhead.',
        activities: ['Scenic coastal drive with fresh coconut water stops', 'Check-in to ocean villas', 'Sunset beach walk'],
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Arenas Del Mar or Boutique Private Ocean Estate'
      },
      {
        day: 6,
        title: 'Private Catamaran & Snorkeling in Ballena Marine Park',
        subtitle: 'Dolphins, Sea Caves & Golden Beaches',
        description: 'Private chartered catamaran cruise along the famous "Whale’s Tail" marine park. Snorkel vibrant reefs and look for humpback whales and spotted dolphins.',
        activities: ['Private catamaran excursion', 'Snorkeling & paddleboarding', 'Fresh ceviche lunch onboard'],
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Private Ocean Estate'
      },
      {
        day: 7,
        title: 'Private Farewell Dinner on the Beach',
        subtitle: 'Reflecting on Shared Memories',
        description: 'Relaxed morning at the beach or spa. In the evening, private barefoot torch-lit dinner on the sand with live acoustic musicians.',
        activities: ['Leisure beach day', 'Optional surfing / paddleboard lessons', 'Private beachfront celebration dinner'],
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Private Ocean Estate'
      },
      {
        day: 8,
        title: 'Private Transfer to San José / Departures',
        subtitle: 'Pura Vida in Your Hearts',
        description: 'Private return transfer to SJO Airport (or optional domestic flight upgrade) for departure home.',
        activities: ['Private return transfer', 'VIP check-in assistance', 'Safe travels home'],
        meals: 'Breakfast included',
        stay: 'Departure'
      }
    ],
    included: [
      'Fully customized itinerary crafted around your specific group objectives, pacing, and dates',
      'Private modern air-conditioned vehicle and professional private driver throughout',
      'Dedicated expert bilingual Sacred Roots private guide 24/7 with your group',
      'Hand-picked boutique luxury eco-lodges, private villas, or specialized field stations',
      'All meals, private chef experiences, tastings, and dietary accommodations',
      'All private tours, private boat charters, park permits, and customized service project materials',
      'Full pre-trip concierge service, luggage handling, and 24/7 dedicated local support'
    ],
    notIncluded: [
      'International flights',
      'Mandatory travel & medical insurance',
      'Premium alcoholic selections and personal purchases'
    ],
    dates: [
      { season: 'Custom Dates Year-Round', availability: 'Choose your exact departure dates', status: 'Custom Dates Available' }
    ],
    investment: {
      startingPrice: 'Custom Quote',
      priceNote: 'Typically ranges from $2,200 to $4,500+ per person depending on lodging tier and group size.',
      depositRequired: 'Customized based on group contract'
    },
    faqs: [
      {
        question: 'How far in advance should we start planning our custom trip?',
        answer: 'We recommend starting the planning process 3 to 9 months in advance, especially if you are traveling during peak seasons (December through April or July/August) to secure the best boutique lodges.'
      },
      {
        question: 'How do you handle diverse ages and activity levels in one family?',
        answer: 'We specialize in multi-generational travel! We design flexible itineraries where active family members can take a steeper hike while grandparents and younger kids enjoy an accessible wildlife garden or boat safari, reuniting for lunch.'
      }
    ],
    featured: false
  },
  {
    id: 'corporate-retreats',
    slug: 'corporate-retreats',
    title: 'Purpose-Driven Corporate Retreats & Leadership Offsites',
    tagline: 'Recharge your leadership team, align your organizational purpose, and create real ESG impact through curated immersion in Costa Rican nature.',
    category: 'retreat',
    location: 'Papagayo Peninsula & Arenal Mountain Sanctuaries, Costa Rica',
    duration: '4 to 7 Days',
    groupSize: '10 to 50 Participants',
    fitnessLevel: 'Moderate',
    bestFor: 'Executive teams, B-Corps, sustainability leaders, creative agencies, forward-thinking enterprises',
    experienceType: 'Executive Facilitation + Team Cohesion + Verified ESG Impact',
    impactCategory: 'Corporate Social Responsibility & Carbon Insetting',
    heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Break out of windowless conference rooms. Sacred Roots creates transformative corporate offsites and leadership retreats where high-level strategic alignment meets direct environmental stewardship. Your team will participate in guided leadership reflection, wellness practices, and tangible sustainability projects that yield verified ESG carbon offsets and lifelong team trust.',
    highlights: [
      'World-class private eco-resorts equipped with high-speed Starlink Wi-Fi and open-air breakout pavilions',
      'Executive leadership facilitators and mindfulness coaches on request',
      'Hands-on group conservation project generating verified corporate ESG impact metrics',
      'Farm-to-table culinary experiences with private sommelier and indigenous tasting menus',
      'Private catamaran sunset charters, thermal mineral pools, and guided canopy hikes'
    ],
    actualActivities: [
      {
        title: 'Strategic Visioning in Open-Air Pavilions',
        description: 'Conduct uninterrupted strategic planning sessions surrounded by tropical bird songs and lush valley vistas with full A/V setup.',
        iconName: 'Target'
      },
      {
        title: 'Team Biodiversity Insetting Challenge',
        description: 'Your company finances and physically plants a permanent branded wildlife corridor parcel, receiving geo-tagged trees and audit reports for ESG filings.',
        iconName: 'Award'
      },
      {
        title: 'Mindfulness & Somatic Grounding',
        description: 'Morning guided breathwork, yoga on oceanfront decks, and sound bath sessions led by certified wellness facilitators.',
        iconName: 'Activity'
      },
      {
        title: 'Ocean Sailing & Team Bonding',
        description: 'Chartered private catamaran cruise with paddleboarding, snorkeling, and relaxed conversations away from workplace hierarchies.',
        iconName: 'Anchor'
      }
    ],
    learningOutcomes: [
      'Deepened cross-functional trust and renewed alignment on company mission and key OKRs',
      'Tangible ESG sustainability metrics and photo assets for corporate impact reporting',
      'Individual stress reduction, nervous system restoration, and creative breakthrough',
      'Shared cultural inspiration from Costa Rica’s world-renowned peace and conservation model'
    ],
    impactContribution: {
      summary: 'Each retreat directly finances long-term community conservation and receives a comprehensive Corporate Impact Dossier with carbon offset calculations.',
      metrics: [
        { label: 'Corporate ESG Dossier', value: 'Fully Certified' },
        { label: 'Branded Forest Parcel', value: 'Geo-tracked' },
        { label: 'Local Micro-business Spend', value: '90%+ of total' },
        { label: 'Team Cohesion Index', value: '+48% Post-retreat' }
      ]
    },
    sampleItinerary: [
      {
        day: 1,
        title: 'Arrival in Liberia / San José & Private Transit to Eco-Sanctuary',
        subtitle: 'Unplugging from the Noise',
        description: 'VIP airport transfer to our secluded wellness eco-resort. Welcome reception with signature tropical botanical cocktails and group opening circle.',
        activities: ['VIP airport greeting', 'Check-in to private luxury bungalows', 'Opening welcome dinner & retreat framing'],
        meals: 'Dinner',
        stay: 'Origins Luxury Eco-Lodge or Kasiiya Papagayo'
      },
      {
        day: 2,
        title: 'Morning Mindfulness, Strategy Session & Thermal Springs',
        subtitle: 'Visioning the Future',
        description: 'Morning sunrise yoga/breathwork. 4-hour facilitated strategic alignment workshop in open-air conference pavilion. Afternoon thermal hot springs soaking.',
        activities: ['Sunrise mindfulness session', 'Executive strategy session block 1', 'Private natural thermal pools soaking'],
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Luxury Eco-Lodge'
      },
      {
        day: 3,
        title: 'Corporate Reforestation & Living Legacy Service',
        subtitle: 'Action Over Rhetoric',
        description: 'Team moves out to the active biological corridor. Plant 300+ native trees as a team, meeting local smallholders and learning about biodiversity insetting.',
        activities: ['Team tree planting initiative', 'GPS mapping of corporate forest plot', 'Rustic celebration lunch with local cooperative'],
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Luxury Eco-Lodge'
      },
      {
        day: 4,
        title: 'Strategic Wrap-up, Private Catamaran & Gala Celebration',
        subtitle: 'Deep Connection on the Ocean',
        description: 'Final morning session synthesizing key executive commitments. Afternoon private sunset sailing charter with fresh local food and celebration.',
        activities: ['Commitments & accountability synthesis', 'Private catamaran ocean cruise', 'Gala 5-course farm-to-table celebration dinner'],
        meals: 'Breakfast, Lunch, Dinner',
        stay: 'Luxury Eco-Lodge'
      },
      {
        day: 5,
        title: 'Farewell & Departure / Optional Extensions',
        subtitle: 'Returning Energized and Aligned',
        description: 'Morning breakfast overlooking the rainforest canopy. Private executive transfer to the international airport for flights home.',
        activities: ['Closing gratitude circle', 'Executive transfer to airport', 'Safe travels home'],
        meals: 'Breakfast included',
        stay: 'Departure'
      }
    ],
    included: [
      'Exclusive private buyout or dedicated wing of top-tier sustainable luxury eco-resorts',
      'Private luxury executive ground transportation with dedicated bilingual drivers',
      'All gourmet chef-prepared meals, coffee bars, and dietary catering',
      'A/V equipped meeting pavilions with Starlink broadband connectivity',
      'Dedicated Sacred Roots retreat director handling all event production logistics',
      'Corporate reforestation project with permanent GPS tagging and verified ESG documentation',
      'All wellness sessions, private catamaran charters, and adventure excursions'
    ],
    notIncluded: [
      'Commercial or private jet airfare to Costa Rica',
      'Travel and executive medical insurance',
      'Personal spa treatments'
    ],
    dates: [
      { season: 'Custom Corporate Booking', availability: 'Bookings accepted 3-12 months in advance', status: 'Custom Dates Available' }
    ],
    investment: {
      startingPrice: 'Custom Corporate Packages',
      priceNote: 'Customized based on executive accommodations, meeting requirements, and group size.',
      depositRequired: 'Custom based on corporate master service agreement'
    },
    faqs: [
      {
        question: 'Do your retreat locations have reliable high-speed internet?',
        answer: 'Yes! All of our handpicked executive retreat properties feature commercial-grade Starlink satellite internet and dedicated meeting spaces suitable for high-definition video conferencing and real-time collaborative work.'
      },
      {
        question: 'Can you provide third-party verification for our corporate sustainability report?',
        answer: 'Yes. We deliver a comprehensive Corporate Impact Dossier detailing exact GPS coordinates of planted trees, species diversity, estimated 20-year carbon sequestration metrics, and local economic wages disbursed.'
      }
    ],
    featured: false
  }
];
