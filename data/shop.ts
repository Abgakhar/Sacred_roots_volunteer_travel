export interface ShopProduct {
  id: string;
  name: string;
  price: number;
  currency: string;
  category: 'Apparel' | 'Handcrafts' | 'Coffee & Cacao' | 'Conservation Impact';
  image: string;
  shortDescription: string;
  fullDescription: string;
  impactNote: string;
  makerOrOrigin: string;
  details: string[];
}

export const SHOP_PRODUCTS: ShopProduct[] = [
  {
    id: 'bribri-woven-tote',
    name: 'Handwoven Bribri Natural Fiber Chichica Tote',
    price: 48,
    currency: 'USD',
    category: 'Handcrafts',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Traditionally handwoven using wild Pita plant fibers and natural jungle root dyes by the women of Yorkín.',
    fullDescription: 'Each tote is crafted entirely by hand by indigenous women artisans in the sovereign Bribri territory of Talamanca. The raw fibers are sustainably harvested from wild bromeliad plants, spun on wooden spindles, and colored using natural plant barks, leaves, and turmeric.',
    impactNote: '100% of net proceeds go directly back to the ACOMUITA Indigenous Women’s Artisan Fund to support clean water catchment and educational supplies.',
    makerOrOrigin: 'Handcrafted in Yorkín Indigenous Territory, Talamanca',
    details: [
      '100% biodegradable wild pita fiber',
      'Naturally dyed with forest botanicals',
      'Reinforced shoulder strap for daily use',
      'Signed by the artisan maker'
    ]
  },
  {
    id: 'high-altitude-shade-coffee',
    name: 'Sacred Roots Organic Shade-Grown Costa Rican Coffee (12 oz)',
    price: 24,
    currency: 'USD',
    category: 'Coffee & Cacao',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Single-origin, bird-friendly shade-grown Arabica from sustainable smallholder cooperatives in the Central Highlands.',
    fullDescription: 'Grown under diverse native canopy trees at 1,450 meters elevation, this specialty microlot coffee supports migratory songbirds while paying local family farmers 40% above fair-trade baseline prices. Notes of dark cacao, citrus blossom, and cane sugar.',
    impactNote: 'Every bag sold funds the planting of 2 native shade trees on smallholder coffee farms in the biological corridor.',
    makerOrOrigin: 'Tarrazú & San Ramón Cooperatives, Costa Rica',
    details: [
      'Single-origin high-altitude Arabica (Typica & Caturra)',
      '100% organic and bird-friendly certified',
      'Medium-dark artisanal roast',
      'Compostable plant-based packaging'
    ]
  },
  {
    id: 'ancestral-cacao-paste',
    name: 'Artisanal Ceremonial Bribri Cacao Block (8 oz)',
    price: 28,
    currency: 'USD',
    category: 'Coffee & Cacao',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Pure heirloom single-origin cacao roasted over wood fires and ground on volcanic stone by Bribri chocolate stewards.',
    fullDescription: 'Unlike industrial mass-market cocoa, this 100% pure unsweetened ceremonial cacao contains all natural healthy cacao butter and rich heart-opening theobromine. Stone-ground in small batches without additives, emulsifiers, or preservatives.',
    impactNote: 'Directly supports ancestral agroforestry plots protecting the sacred Sixaola river watershed.',
    makerOrOrigin: 'Bribri Clan Cacao Keepers, Talamanca',
    details: [
      '100% Pure Heirloom Criollo/Trinitario Cacao',
      'Stone-ground on traditional volcanic metates',
      'Rich in antioxidants, magnesium, and healthy fats',
      'Perfect for drinking chocolate or baking'
    ]
  },
  {
    id: 'reforestation-tree-dedication',
    name: 'Rainforest Canopy Tree Dedication & GPS Certificate',
    price: 35,
    currency: 'USD',
    category: 'Conservation Impact',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Plant and sponsor the 3-year care of a native keystone hardwood tree in the Osa Peninsula Wildlife Corridor.',
    fullDescription: 'Dedicate a native Almendro, Guayacán, or Ceiba tree in your name or as a meaningful gift for a loved one. You will receive an official digital certificate with the specific GPS coordinates, species name, and photo of the planting parcel in the biological corridor.',
    impactNote: 'Covers the sapling propagation, physical planting, organic mulching, and 3 years of maintenance by local conservation rangers.',
    makerOrOrigin: 'Osa Peninsula Biological Corridor Reforestation Station',
    details: [
      'Digital GPS certificate with exact latitude/longitude',
      'Species profile card detailing ecological benefits',
      'Annual photo update on corridor canopy growth',
      'Tax-deductible contribution to conservation'
    ]
  },
  {
    id: 'field-expedition-journal',
    name: 'Sacred Roots Hardcover Traveler Field Journal & Pen',
    price: 32,
    currency: 'USD',
    category: 'Apparel',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Durable, water-resistant expedition journal crafted with 100% recycled stone paper and tree-free binding.',
    fullDescription: 'Designed specifically for field researchers, volunteers, and mindful travelers. The stone-paper pages are tear-resistant and impervious to tropical moisture, sweat, and rain. Includes Costa Rican wildlife checklists and prompt sections for daily mindfulness.',
    impactNote: '$10 from every journal is dedicated to purchasing laboratory supplies for rural Costa Rican elementary schools.',
    makerOrOrigin: 'Sacred Roots Purpose Gear',
    details: [
      '192 water-resistant stone paper pages',
      'Includes Costa Rica species observation log',
      'Elastic closure band and expandable inner pocket',
      'Includes bamboo archival ink field pen'
    ]
  }
];
