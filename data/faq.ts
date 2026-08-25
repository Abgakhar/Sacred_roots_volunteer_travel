export interface FAQItem {
  id: string;
  category: 'Programs' | 'Costs & Payments' | 'Travel & Logistics' | 'Safety & Health' | 'Impact & Accountability';
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Programs',
    question: 'Who can participate in Sacred Roots journeys?',
    answer: 'Our programs welcome individual volunteers (ages 18+ or 16+ with guardian consent), multigenerational families with children (ages 8+), high school and university student cohorts, nonprofit organizations, and corporate leadership teams. Each journey clearly lists its recommended audience and fitness baseline.'
  },
  {
    id: 'faq-2',
    category: 'Programs',
    question: 'Do I need prior biology, conservation, or Spanish language experience?',
    answer: 'No previous experience is required! All conservation tasks—from sea turtle egg relocation to camera trap setup—include thorough hands-on training by our licensed Costa Rican biologists. Our expedition leaders are fully bilingual (English and Spanish) and facilitate all cultural conversations.'
  },
  {
    id: 'faq-3',
    category: 'Programs',
    question: 'How long are the programs, and can dates be customized?',
    answer: 'Flagship expeditions typically range between 7 and 12 days. For private families, school cohorts, and corporate groups, we design completely custom lengths from 4 to 18 days tailored to your calendar.'
  },
  {
    id: 'faq-4',
    category: 'Costs & Payments',
    question: 'What is included in the program investment?',
    answer: 'Our journey investments are comprehensive ground packages. They include all in-country private transportation, accommodations, 3 meals daily, full-time bilingual expedition leaders and local biologists, all park fees and research permits, safety gear, community service project supplies, and direct financial contributions to local partner stations.'
  },
  {
    id: 'faq-5',
    category: 'Costs & Payments',
    question: 'What is NOT included?',
    answer: 'International airfare to/from San José (SJO) or Liberia (LIR), personal mandatory travel/medical insurance, alcoholic drinks/specialty cafe items, and discretionary personal tips for local host families and drivers.'
  },
  {
    id: 'faq-6',
    category: 'Costs & Payments',
    question: 'How does the deposit and payment schedule work?',
    answer: 'A refundable $300 to $400 USD deposit secures your spot upon application acceptance. The remaining balance is payable in convenient installments with the final payment due 45 days prior to departure. We offer flexible cancellation policies detailed on our refund policy page.'
  },
  {
    id: 'faq-7',
    category: 'Travel & Logistics',
    question: 'Where do participants stay during the journey?',
    answer: 'We avoid generic high-rise commercial chains in favor of authentic, vetted eco-lodges, solar-powered biological field stations, and clean community-run guest bungalows. All properties offer secure perimeters, comfortable beds with mosquito netting, clean private or shared bathrooms, and locally sourced food.'
  },
  {
    id: 'faq-8',
    category: 'Travel & Logistics',
    question: 'How does in-country transportation work?',
    answer: 'All ground travel is handled via private, modern, air-conditioned tour vans or coaches with licensed professional Costa Rican drivers. We do not use public bus transit. For river crossings into indigenous territories, we utilize certified local motorized wooden canoes equipped with safety life vests.'
  },
  {
    id: 'faq-9',
    category: 'Travel & Logistics',
    question: 'What should I pack for tropical rainforest and marine field work?',
    answer: 'Upon enrollment, every traveler receives our detailed Sacred Roots Packing Guide. Key essentials include quick-drying lightweight clothing, sturdy waterproof hiking boots, a headlamp with red-light mode (for turtle patrols), reef-safe mineral sunscreen, insect repellent, a rain poncho, and a reusable water bottle.'
  },
  {
    id: 'faq-10',
    category: 'Safety & Health',
    question: 'Is Costa Rica safe for travelers and student groups?',
    answer: 'Costa Rica is widely recognized as one of the safest and most politically stable nations in Latin America, having abolished its standing military in 1948. Sacred Roots maintains 24/7 in-country emergency response protocols, satellite SOS communications in remote sectors, vetted private transport, and hospital evacuation pathways.'
  },
  {
    id: 'faq-11',
    category: 'Safety & Health',
    question: 'What medical certifications do your staff hold?',
    answer: 'Our field directors and naturalist guides hold Wilderness First Responder (WFR) and CPR certifications. We carry comprehensive field medical kits on every excursion and verify nearest regional clinics and hospital networks prior to every departure.'
  },
  {
    id: 'faq-12',
    category: 'Impact & Accountability',
    question: 'Where does my money actually go?',
    answer: 'We believe in radical transparency: 48% of your program fee goes directly into local Costa Rican hands (indigenous host families, local biologists, park rangers, and local cooks). Another 22% directly purchases trees, camera trap hardware, and hatchery supplies. You can review our full financial breakdown on our Impact page.'
  },
  {
    id: 'faq-13',
    category: 'Impact & Accountability',
    question: 'How do you prevent "voluntourism" harm?',
    answer: 'We never create artificial volunteer work. Every single project—whether planting corridors, auditing micro-plastics, or painting school classrooms—is explicitly requested and led by our vetted local Costa Rican community partners. Travelers serve as humble assistants to local leaders rather than outside "saviors."'
  }
];
