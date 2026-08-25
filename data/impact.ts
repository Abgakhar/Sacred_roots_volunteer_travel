export interface ImpactStat {
  metric: string;
  label: string;
  subtext: string;
  iconName: string;
}

export interface ImpactPillar {
  title: string;
  description: string;
  deliverables: string[];
}

export const IMPACT_METRICS: ImpactStat[] = [
  {
    metric: '14,800+',
    label: 'Conservation & Service Hours',
    subtext: 'Directly logged on nesting beaches, jungle transects, and community builds',
    iconName: 'Clock'
  },
  {
    metric: '8,450+',
    label: 'Native Canopy Trees Planted',
    subtext: 'Endemic hardwood and fruit species monitored across biological corridors',
    iconName: 'TreePine'
  },
  {
    metric: '100%',
    label: 'Direct Community Supply Chain',
    subtext: 'Lodging, guiding, and food funds disbursed directly to local families & stations',
    iconName: 'HeartHandshake'
  },
  {
    metric: '2,600+',
    label: 'Turtle Hatchlings Safeguarded',
    subtext: 'Monitored across protected partner hatcheries in peak Pacific nesting cycles',
    iconName: 'ShieldCheck'
  }
];

export const WHERE_MONEY_GOES = [
  { category: 'Direct Local Community & Field Partner Payments', percentage: 48, description: 'Direct wages for indigenous host families, local naturalists, boat captains, station cooks, and local accommodation.' },
  { category: 'Conservation Equipment, Tree Planting & Science Permits', percentage: 22, description: 'Purchasing saplings, camera trap batteries, tagging equipment, hatchery fencing, and national park research permits.' },
  { category: 'In-Country Safety, Private Eco-Transport & 24/7 Logistics', percentage: 18, description: 'Private licensed drivers, emergency satellite communications, certified medical insurance protocols, and fuel.' },
  { category: 'Program Planning, Staff Support & Educator Training', percentage: 12, description: 'Pre-trip participant orientation, curriculum development, educator logistics, and transparent organization governance.' }
];

export const IMPACT_PILLARS: ImpactPillar[] = [
  {
    title: 'Marine & Shoreline Protection',
    description: 'We safeguard critical Pacific and Caribbean nesting habitats from illegal poaching and coastal development while revitalizing damaged mangrove nurseries.',
    deliverables: [
      'Nightly patrols on high-density nesting beaches during peak reproduction cycles',
      'Hatchery construction and relocation of endangered Olive Ridley and Green turtle clutches',
      'Mangrove reforestation along estuarine nurseries supporting juvenile marine life',
      'Micro-plastic beach audits feeding international ocean conservation databases'
    ]
  },
  {
    title: 'Biological Corridors & Wildlife Habitat',
    description: 'Fragmented rainforest patches isolate wildlife populations. We plant native trees and maintain infrared camera traps to reconnect vital biological stepping stones.',
    deliverables: [
      'Planting keystone hardwood saplings (Almendro, Guayacán, Ceiba) in buffer zones',
      'Deploying GPS-tracked camera traps and bioacoustic monitors for wildlife census',
      'Invasive plant species clearing to support primary forest natural regeneration',
      'Habitat restoration specifically targeting endangered macaws and tapir routes'
    ]
  },
  {
    title: 'Indigenous Sovereignty & Living Culture',
    description: 'We respect ancestral knowledge. Our journeys support indigenous-led initiatives that reinforce territorial autonomy, organic cacao heritage, and native language vitality.',
    deliverables: [
      '100% fair-wage compensation directly paid to indigenous women’s cooperatives',
      'Community infrastructure projects co-designed with traditional councils (Awá and Clan elders)',
      'Ethnobotanical garden preservation cataloging native medicinal plant knowledge',
      'Direct purchase of hand-processed organic cacao and traditional woven crafts'
    ]
  },
  {
    title: 'Youth Science Literacy & School Exchanges',
    description: 'True conservation spans generations. We facilitate collaborative school exchanges between visiting students and rural Costa Rican academies.',
    deliverables: [
      'Shared environmental science workshops, water testing labs, and tree planting days',
      'Donation of bilingual science readers, laboratory glassware, and sports equipment',
      'Accredited service learning hours verifying authentic community contributions',
      'Scholarship travel support enabling local Costa Rican youth to participate as peer leaders'
    ]
  }
];
