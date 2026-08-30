import { Project } from '@/types';

export const initialProjects: Project[] = [
  {
    id: 'proj-1',
    title: '15,000 Sq Ft Industrial Warehouse Shed',
    slug: 'industrial-warehouse-shed-vasai',
    serviceSlug: 'metal-sheds',
    category: 'Industrial',
    location: 'Vasai East Industrial Zone',
    client: 'Apex Logistics & Warehousing',
    description: 'Turnkey fabrication and erection of a 15,000 sq ft high-clearance pre-engineered steel warehouse shed featuring 30 ft clear center height, 100 ft clear truss span, Tata Bluescope Galvalume roofing, and heavy stormwater box gutters.',
    scope: [
      'Site topographical leveling and anchor bolt positioning',
      'Fabrication of 24 heavy built-up ISMB structural columns',
      'Precision welding of 100 ft clear span tubular trusses',
      'Installation of 0.50mm color-coated roofing sheets and Polycarbonate skylights',
      'Dual-coat marine grade epoxy zinc phosphate anti-corrosive painting'
    ],
    completionDate: 'November 2024',
    featuredImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504307651554-6691fc9d0903?auto=format&fit=crop&w=1200&q=80'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1504307651554-6691fc9d0903?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    isFeatured: true,
    displayOrder: 1,
    seoTitle: '15,000 Sq Ft Industrial Shed Fabrication Case Study | Welderwale',
    seoDescription: 'Case study of a 15,000 sq ft industrial PEB warehouse shed built in Vasai East by Welderwale. High-clearance column-free design.'
  },
  {
    id: 'proj-2',
    title: 'Luxury Villa Motorized CNC Laser-Cut Entrance Gate',
    slug: 'luxury-villa-motorized-gate-borivali',
    serviceSlug: 'metal-gates',
    category: 'Residential & Architectural',
    location: 'IC Colony, Borivali West',
    client: 'Private Residence',
    description: 'Custom designed 18 ft wide motorized sliding entrance gate featuring CNC laser-cut 4mm mild steel geometric screens with matte charcoal powder-coated finish and Italian automated gear-rack drive system.',
    scope: [
      'Architectural 3D pattern design and laser cutting',
      'Heavy box pipe structural perimeter framing with anti-sag stiffeners',
      'Heavy-duty ground track and low-friction sealed bearing steel rollers',
      'Integrated pedestrian pass door with digital smart lock',
      'Motorized automation setup with dual remote controls and safety photocells'
    ],
    completionDate: 'January 2025',
    featuredImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    isFeatured: true,
    displayOrder: 2,
    seoTitle: 'Motorized CNC Laser Gate Installation in Borivali | Welderwale',
    seoDescription: 'Modern automated sliding entrance gate fabrication and motorization for a luxury residence in Borivali West.'
  },
  {
    id: 'proj-3',
    title: 'Modern Terrace Glass Pergola & Louvers',
    slug: 'terrace-glass-pergola-mira-road',
    serviceSlug: 'garden-pergola',
    category: 'Architectural & Outdoor',
    location: 'Beverly Park, Mira Road',
    client: 'Penthouse Residence',
    description: 'Custom rooftop terrace pergola featuring 150x50mm heavy tubular steel rafters, 10mm laminated toughened glass skylight, concealed LED warm ambient lighting, and weather-resistant AkzoNobel exterior powder coating.',
    scope: [
      'Laser leveling of terrace parapet and load anchors',
      'Precision welded tubular steel rafters and purlins',
      'Installation of 10mm heat-reflective laminated glass panels',
      'Weatherproof EPDM rubber gasket and Dow Corning structural silicone sealant',
      'Integrated concealed wiring channels for evening spotlights'
    ],
    completionDate: 'December 2024',
    featuredImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    isFeatured: true,
    displayOrder: 3,
    seoTitle: 'Modern Terrace Glass Pergola Project in Mira Road | Welderwale',
    seoDescription: 'Rooftop terrace metal pergola and laminated glass canopy fabricated by Welderwale in Mira Road.'
  },
  {
    id: 'proj-4',
    title: 'Heavy Mezzanine Floor & Structural Steel Platform',
    slug: 'heavy-mezzanine-floor-thane',
    serviceSlug: 'structural-fabrication',
    category: 'Industrial',
    location: 'Wagle Industrial Estate, Thane',
    client: 'Precision Automotive Components Ltd.',
    description: 'Design and construction of an 800 kg/m² rated structural steel mezzanine floor covering 3,200 sq ft inside an active manufacturing plant, complete with heavy ISMB 250 main beams, steel staircase, and safety handrails.',
    scope: [
      'Structural STAAD.Pro load design validation',
      'Heavy column base plate anchoring into factory RCC slab',
      'Primary ISMB beam and secondary channel joist fabrication',
      'Laying of 5mm anti-skid chequered steel floor decking',
      'Fabrication of heavy industrial staircase with mid-landing and kickplate railings'
    ],
    completionDate: 'February 2025',
    featuredImage: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: true,
    displayOrder: 4,
    seoTitle: 'Heavy Industrial Mezzanine Floor Case Study in Thane | Welderwale',
    seoDescription: 'Structural steel mezzanine floor fabrication in Wagle Estate Thane. 800 kg/m² load capacity steel structure.'
  },
  {
    id: 'proj-5',
    title: 'Minimalist SS 316 Glass Balcony Railings',
    slug: 'ss-316-glass-balcony-railings-kandivali',
    serviceSlug: 'metal-railing',
    category: 'Residential',
    location: 'Lokhandwala Township, Kandivali East',
    client: 'High-Rise Residential Complex',
    description: 'Fabrication and installation of 1,200 running feet of marine-grade SS 316 heavy spigot glass railings with 12mm clear toughened glass for 36 luxury balcony apartments.',
    scope: [
      'Precision core drilling into balcony RCC curb',
      'Chemical anchoring of solid SS 316 floor spigots using Hilti adhesive',
      'Fitting of 12mm PVB laminated toughened safety glass',
      'Slimline 25x15mm SS top protection cap',
      'High-gloss mirror polishing and safety load testing'
    ],
    completionDate: 'October 2024',
    featuredImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: false,
    displayOrder: 5,
    seoTitle: 'SS 316 Glass Balcony Railing Project in Kandivali | Welderwale',
    seoDescription: '1,200 RFT frameless glass railing fabrication in Kandivali East using SS 316 marine-grade spigots.'
  },
  {
    id: 'proj-6',
    title: 'Commercial Showroom Motorized Perforated Shutters',
    slug: 'motorized-perforated-shutters-bhayandar',
    serviceSlug: 'rolling-shutters',
    category: 'Commercial',
    location: 'Maxus Mall Area, Bhayandar West',
    client: 'Fashion Retail Showroom',
    description: 'Installation of three 16 ft wide automated rolling shutters featuring micro-perforated steel slats for nighttime showroom visibility, remote-control operation, and safety sensor reversal.',
    scope: [
      'Precision guide channel anchoring with noise-dampening nylon seals',
      'Heavy 18-gauge cold-rolled perforated steel slats assembly',
      'Integrated central motor with manual chain-override mechanism',
      'Powder-coated pure white finish matching showroom branding'
    ],
    completionDate: 'January 2025',
    featuredImage: 'https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=1200&q=80'
    ],
    isFeatured: false,
    displayOrder: 6,
    seoTitle: 'Showroom Motorized Rolling Shutter Project in Bhayandar | Welderwale',
    seoDescription: 'Perforated automated rolling shutters installed for a retail store in Bhayandar West by Welderwale.'
  }
];
