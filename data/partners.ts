export interface Partner {
  id: string;
  name: string;
  category: 'Marine Conservation' | 'Wildlife & Corridors' | 'Indigenous Territory' | 'Scientific & Education';
  location: string;
  role: string;
  contribution: string;
  partnershipYears: string;
  badge: string;
}

export const PARTNERS: Partner[] = [
  {
    id: 'asvo-turtles',
    name: 'Red Costarricense de Conservación Marina (Coastal Turtle Network)',
    category: 'Marine Conservation',
    location: 'Pacific Coast & Golfo Dulce',
    role: 'Sea Turtle Hatchery Operations & Beach Patrols',
    contribution: 'Provides scientific supervision for our participants on night patrols, monitors relocated nests, and manages temperature-controlled beach hatcheries.',
    partnershipYears: '6+ Years Working Together',
    badge: 'Verified Conservation Partner'
  },
  {
    id: 'osa-corridor',
    name: 'Osa Peninsula Biological Corridor Alliance',
    category: 'Wildlife & Corridors',
    location: 'Osa Peninsula, South Pacific',
    role: 'Camera Trapping & Reforestation Host',
    contribution: 'Coordinates endemic hardwood planting, maintains wildlife monitoring grids, and integrates camera trap photos into national biodiversity databases.',
    partnershipYears: '5+ Years Working Together',
    badge: 'Field Research Partner'
  },
  {
    id: 'bribri-women',
    name: 'Asociación de Mujeres Indígenas de Talamanca (ACOMUITA)',
    category: 'Indigenous Territory',
    location: 'Bribri Sovereign Territory, Talamanca',
    role: 'Ancestral Cacao & Cultural Homestays',
    contribution: 'Indigenous women-led cooperative hosting our travelers in Yorkín, conducting cacao workshops, sharing traditional medicine, and guiding community service.',
    partnershipYears: '7+ Years Working Together',
    badge: 'Indigenous Partner Cooperative'
  },
  {
    id: 'monteverde-collective',
    name: 'Monteverde Cloud Forest Conservation Collective',
    category: 'Scientific & Education',
    location: 'Monteverde Cloud Forest Reserve',
    role: 'Epiphyte Research & Bird Corridor Stewardship',
    contribution: 'Facilitates high-altitude canopy research, acoustic biodiversity monitoring stations, and Quetzal habitat restoration projects for our educational groups.',
    partnershipYears: '4+ Years Working Together',
    badge: 'Academic Research Partner'
  },
  {
    id: 'san-carlos-agro',
    name: 'Finca Educativa Ecológica San Carlos',
    category: 'Scientific & Education',
    location: 'Arenal & Northern Lowlands',
    role: 'Permaculture & Watershed Science Base',
    contribution: 'Provides hands-on organic farming labs, methane biodigester training, and local rural school collaborative community exchange days.',
    partnershipYears: '5+ Years Working Together',
    badge: 'Agroecology Partner'
  }
];
