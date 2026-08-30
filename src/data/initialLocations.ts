import { LocationItem } from '@/types';

export const initialLocations: LocationItem[] = [
  {
    id: 'loc-1',
    name: 'Bhayandar',
    slug: 'bhayandar',
    region: 'Mira-Bhayandar',
    isFeatured: true,
    displayOrder: 1,
    description: 'Welderwale headquarters and primary fabrication hub located in Bhayandar. We deliver lightning-fast on-site service, custom shed manufacturing, gates, railings, and industrial fabrication across East and West Bhayandar.',
    areasServed: [
      'Bhayandar East',
      'Bhayandar West',
      'Navghar Road',
      'Indralok Phase 1-3',
      'Golden Nest',
      'Maxus Mall Area',
      'Jesal Park',
      'Goddeo',
      'Rai Village',
      'Morva'
    ],
    seoTitle: 'Metal Fabrication, Welding & Sheds in Bhayandar | Welderwale',
    seoDescription: 'Leading welding and metal fabrication in Bhayandar. Industrial sheds, gates, railings, window grills, and custom steel structures with rapid site visits.',
    popularServices: ['metal-sheds', 'metal-gates', 'metal-railing', 'window-grill', 'custom-metal-frames']
  },
  {
    id: 'loc-2',
    name: 'Mira Road',
    slug: 'mira-road',
    region: 'Mira-Bhayandar',
    isFeatured: true,
    displayOrder: 2,
    description: 'Full-service metal fabrication and installation across all sectors of Mira Road. Specialized in society compound gates, terrace pergolas, balcony safety grills, and commercial shop rolling shutters.',
    areasServed: [
      'Shanti Nagar',
      'Shanti Park',
      'Beverly Park',
      'Kanakia Spaces',
      'Poonam Sagar Complex',
      'Naya Nagar',
      'Pleasant Park',
      'Silver Park',
      'Hatkesh Udyog Nagar',
      'Kashimira'
    ],
    seoTitle: 'Metal Fabrication & Welding Services in Mira Road | Welderwale',
    seoDescription: 'Best welding and metal fabrication contractor in Mira Road. Custom gates, railings, safety grills, sheds, and commercial shutters.',
    popularServices: ['garden-pergola', 'metal-gates', 'window-grill', 'rolling-shutters', 'metal-railing']
  },
  {
    id: 'loc-3',
    name: 'Mumbai (Western Suburbs)',
    slug: 'mumbai',
    region: 'Mumbai Metropolitan',
    isFeatured: true,
    displayOrder: 3,
    description: 'Serving residential high-rises, commercial offices, architects, and luxury villas throughout Mumbai Western Suburbs. High-end SS glass railings, custom steel furniture, designer pergolas, and structural mezzanine floors.',
    areasServed: [
      'Borivali',
      'Kandivali',
      'Malad',
      'Goregaon',
      'Jogeshwari',
      'Andheri',
      'Vile Parle',
      'Santacruz',
      'Bandra',
      'Dahisar'
    ],
    seoTitle: 'Architectural Metal Fabrication & Structural Steel in Mumbai | Welderwale',
    seoDescription: 'Premium architectural metal fabrication, SS glass railings, floating stairs, pergolas, and structural steel across Mumbai western suburbs.',
    popularServices: ['custom-metal-frames', 'metal-staircase', 'garden-pergola', 'structural-fabrication', 'metal-railing']
  },
  {
    id: 'loc-4',
    name: 'Borivali',
    slug: 'borivali',
    region: 'Mumbai Western Suburbs',
    isFeatured: true,
    displayOrder: 4,
    description: 'Dedicated on-site fabrication teams in Borivali West and East. Expertise in housing society redevelopment fabrication, balcony safety grills, terrace shed covers, and designer gates.',
    areasServed: [
      'Borivali West',
      'Borivali East',
      'IC Colony',
      'Gorai 1 & 2',
      'Shimpoli',
      'Vazira Naka',
      'Eksar Road',
      'Kasturba Cross Road',
      'National Park Area',
      'Chikuwadi'
    ],
    seoTitle: 'Welding & Metal Fabrication Services in Borivali | Welderwale',
    seoDescription: 'Expert welding contractor in Borivali West and East. Balcony grills, terrace sheds, SS railings, and society entrance gates.',
    popularServices: ['window-grill', 'metal-sheds', 'metal-railing', 'metal-gates']
  },
  {
    id: 'loc-5',
    name: 'Kandivali',
    slug: 'kandivali',
    region: 'Mumbai Western Suburbs',
    isFeatured: true,
    displayOrder: 5,
    description: 'Providing heavy industrial fabrication for Kandivali Industrial Estate alongside premium residential railing and pergolas for Lokhandwala and Mahavir Nagar townships.',
    areasServed: [
      'Mahavir Nagar',
      'Lokhandwala Township',
      'Kandivali Industrial Area (Charkop)',
      'Thakur Complex',
      'Thakur Village',
      'Poisar',
      'Akurli Road',
      'Dahanukar Wadi',
      'Irani Wadi',
      'MG Road'
    ],
    seoTitle: 'Metal Sheds, Industrial & Residential Fabrication in Kandivali | Welderwale',
    seoDescription: 'Top metal fabrication and welding in Kandivali East & West. Industrial factory sheds, society gates, modern grills, and stainless steel railings.',
    popularServices: ['structural-fabrication', 'metal-sheds', 'custom-metal-frames', 'metal-railing']
  },
  {
    id: 'loc-6',
    name: 'Vasai',
    slug: 'vasai',
    region: 'Palghar / Extended Suburbs',
    isFeatured: true,
    displayOrder: 6,
    description: 'Industrial heavy engineering, warehouse PEB sheds, farm sheds, and factory gantry crane girders across the Vasai industrial belt and residential developments.',
    areasServed: [
      'Vasai East Industrial Area',
      'Waliv',
      'Pelhar',
      'Gokhiware',
      'Vasai West',
      'Babhai',
      'Chulna',
      'Evershine City',
      'Manickpur',
      'Giriz'
    ],
    seoTitle: 'Industrial Factory Shed & Metal Fabrication in Vasai | Welderwale',
    seoDescription: 'Industrial warehouse shed fabrication, animal farm sheds, structural engineering, and gates in Vasai East Industrial & Vasai West.',
    popularServices: ['metal-sheds', 'animal-farm-sheds', 'structural-fabrication', 'roofing-sheets', 'unipole-structure']
  },
  {
    id: 'loc-7',
    name: 'Naigaon & Virar',
    slug: 'naigaon-virar',
    region: 'Palghar / Extended Suburbs',
    isFeatured: false,
    displayOrder: 7,
    description: 'Complete metal fabrication services for new residential mega-townships and agricultural properties in Naigaon, Nallasopara, and Virar.',
    areasServed: [
      'Naigaon East (Mittal Park / Sunteck)',
      'Naigaon West',
      'Virar West',
      'Virar East',
      'Bolinj',
      'Arnala',
      'Nallasopara Industrial Area',
      'Achole'
    ],
    seoTitle: 'Welding, Metal Sheds & Grill Fabrication in Naigaon & Virar | Welderwale',
    seoDescription: 'Reliable welding services in Naigaon and Virar for residential township grills, animal farm sheds, terrace covers, and rolling shutters.',
    popularServices: ['window-grill', 'metal-sheds', 'animal-farm-sheds', 'rolling-shutters']
  },
  {
    id: 'loc-8',
    name: 'Thane',
    slug: 'thane',
    region: 'Thane District',
    isFeatured: true,
    displayOrder: 8,
    description: 'Catering to high-rise townships, commercial IT parks, and heavy industrial belts along Ghodbunder Road, Majiwada, and Wagle Estate.',
    areasServed: [
      'Ghodbunder Road',
      'Majiwada',
      'Wagle Industrial Estate',
      'Vartak Nagar',
      'Kapurbawdi',
      'Hiranandani Estate',
      'Panchpakhadi',
      'Naupada',
      'Kasarvadavali',
      'Manpada'
    ],
    seoTitle: 'Heavy Metal Fabrication & Structural Steel in Thane | Welderwale',
    seoDescription: 'Commercial & industrial metal fabrication contractor in Thane. Wagle Estate industrial sheds, mezzanine floors, SS railings, and entrance gates.',
    popularServices: ['structural-fabrication', 'metal-sheds', 'metal-railing', 'custom-metal-frames', 'metal-staircase']
  },
  {
    id: 'loc-9',
    name: 'Kalyan & Dombivli',
    slug: 'kalyan-dombivli',
    region: 'Thane District',
    isFeatured: true,
    displayOrder: 9,
    description: 'Providing industrial MIDC shed fabrication, commercial showroom shutters, residential society gates, and agricultural sheds across Kalyan, Dombivli, and Ulhasnagar.',
    areasServed: [
      'Dombivli MIDC (Phase 1 & 2)',
      'Dombivli East / West',
      'Kalyan West',
      'Kalyan East (Khadakpada)',
      'Chikanghar',
      'Palava City',
      'Manpada Road',
      'Shahad',
      'Mohone'
    ],
    seoTitle: 'Industrial Shed & Metal Fabrication in Kalyan & Dombivli | Welderwale',
    seoDescription: 'MIDC industrial shed builders, mezzanine floors, factory gates, and residential metal fabrication across Kalyan and Dombivli.',
    popularServices: ['metal-sheds', 'structural-fabrication', 'rolling-shutters', 'roofing-sheets', 'animal-farm-sheds']
  }
];

// Helper map for dependent location -> area picker in the 3-step funnel
export const locationAreasMap: Record<string, string[]> = {
  Bhayandar: [
    'Bhayandar East',
    'Bhayandar West',
    'Navghar Road',
    'Indralok Phase 1-3',
    'Golden Nest',
    'Maxus Mall Area',
    'Jesal Park',
    'Goddeo',
    'Rai Village',
    'Other Area in Bhayandar'
  ],
  'Mira Road': [
    'Shanti Nagar',
    'Shanti Park',
    'Beverly Park',
    'Kanakia Spaces',
    'Poonam Sagar Complex',
    'Naya Nagar',
    'Pleasant Park',
    'Silver Park',
    'Hatkesh Udyog Nagar',
    'Kashimira',
    'Other Area in Mira Road'
  ],
  Mumbai: [
    'Borivali West / East',
    'Kandivali West / East',
    'Malad West / East',
    'Goregaon West / East',
    'Andheri West / East',
    'Jogeshwari',
    'Dahisar',
    'Vile Parle',
    'Bandra',
    'Other Area in Mumbai'
  ],
  Thane: [
    'Ghodbunder Road',
    'Majiwada',
    'Wagle Industrial Estate',
    'Vartak Nagar',
    'Hiranandani Estate',
    'Kapurbawdi',
    'Panchpakhadi',
    'Naupada',
    'Kasarvadavali',
    'Other Area in Thane'
  ],
  Vasai: [
    'Vasai East Industrial Area',
    'Waliv',
    'Pelhar',
    'Gokhiware',
    'Vasai West',
    'Evershine City',
    'Other Area in Vasai'
  ],
  'Kalyan & Dombivli': [
    'Dombivli MIDC',
    'Dombivli East / West',
    'Kalyan West (Khadakpada)',
    'Kalyan East',
    'Palava City',
    'Other Area in Kalyan/Dombivli'
  ],
  'Naigaon & Virar': [
    'Naigaon East / West',
    'Virar West',
    'Virar East',
    'Nallasopara Industrial Area',
    'Other Area in Naigaon/Virar'
  ]
};
