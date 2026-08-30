import { HeroSlide } from '@/types';

export const initialSlides: HeroSlide[] = [
  {
    id: 'slide-1',
    title: 'Industrial Sheds & Warehouse PEB Fabrication',
    subtitle: 'High-clearance factory sheds, clear-span steel warehouse trusses, and monsoon-proof terrace covers engineered for lifetime durability.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80',
    serviceSlug: 'metal-sheds',
    primaryCtaText: 'Explore Metal Sheds',
    primaryCtaLink: '/services/metal-sheds',
    secondaryCtaText: 'Get Instant Quote',
    secondaryCtaLink: '/contact',
    displayOrder: 1,
    isActive: true
  },
  {
    id: 'slide-2',
    title: 'Modern CNC Laser-Cut Gates & Entrance Automation',
    subtitle: 'Bespoke residential compound gates, motorized sliding entrance barriers, and architectural steel security gates.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80',
    serviceSlug: 'metal-gates',
    primaryCtaText: 'View Metal Gates',
    primaryCtaLink: '/services/metal-gates',
    secondaryCtaText: 'Request Site Visit',
    secondaryCtaLink: '/contact',
    displayOrder: 2,
    isActive: true
  },
  {
    id: 'slide-3',
    title: 'Heavy Structural Fabrication & Mezzanine Floors',
    subtitle: 'Precision industrial steel structures, heavy I-beam columns, overhead crane gantries, and high-load factory mezzanines.',
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=80',
    serviceSlug: 'structural-fabrication',
    primaryCtaText: 'Structural Services',
    primaryCtaLink: '/services/structural-fabrication',
    secondaryCtaText: 'Talk to Engineer',
    secondaryCtaLink: 'tel:+919876543210',
    displayOrder: 3,
    isActive: true
  },
  {
    id: 'slide-4',
    title: 'Designer Terrace Pergolas & Glass Gazebos',
    subtitle: 'Turn rooftop terraces and garden decks into stunning all-weather architectural sanctuaries with rust-proof powder-coated steel.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80',
    serviceSlug: 'garden-pergola',
    primaryCtaText: 'View Pergola Designs',
    primaryCtaLink: '/services/garden-pergola',
    secondaryCtaText: 'Book Consultation',
    secondaryCtaLink: '/contact',
    displayOrder: 4,
    isActive: true
  },
  {
    id: 'slide-5',
    title: 'SS Glass Railings & Modern Metal Staircases',
    subtitle: 'Architect-grade SS 316 balcony balustrades, floating cantilevered staircases, and safety parapet grills.',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1400&q=80',
    serviceSlug: 'metal-railing',
    primaryCtaText: 'View Railings',
    primaryCtaLink: '/services/metal-railing',
    secondaryCtaText: 'WhatsApp Us',
    secondaryCtaLink: 'https://wa.me/919876543210',
    displayOrder: 5,
    isActive: true
  }
];
