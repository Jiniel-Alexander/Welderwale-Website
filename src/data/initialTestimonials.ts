import { Testimonial } from '@/types';

export const initialTestimonials: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Rajesh Mehra',
    role: 'Managing Director',
    company: 'Apex Logistics & Warehousing',
    location: 'Vasai East',
    content: 'Welderwale fabricated our 15,000 sq ft warehouse shed ahead of schedule. The structural column alignment, truss welding quality, and monsoon-proof roofing work was world-class. Zero leaks through two heavy monsoons.',
    rating: 5,
    serviceSlug: 'metal-sheds',
    isFeatured: true
  },
  {
    id: 'test-2',
    author: 'Amitabh & Sneha Kulkarni',
    role: 'Homeowner',
    location: 'IC Colony, Borivali West',
    content: 'We wanted a motorized laser-cut gate for our bungalow with custom geometric floral patterns. Welderwale brought CAD drawings, fabricated the gate in under two weeks, and installed the motorization seamlessly.',
    rating: 5,
    serviceSlug: 'metal-gates',
    isFeatured: true
  },
  {
    id: 'test-3',
    author: 'Vikram Sethi',
    role: 'Principal Architect',
    company: 'Studio Form & Space',
    location: 'Bandra West, Mumbai',
    content: 'As an architect, finding metal fabricators with 1mm tolerance accuracy is rare. Welderwale built our floating cantilevered staircase and slimline glass balustrades with flawless TIG weld finishes.',
    rating: 5,
    serviceSlug: 'custom-metal-frames',
    isFeatured: true
  },
  {
    id: 'test-4',
    author: 'Sunil Patil',
    role: 'Plant Manager',
    company: 'Precision Auto Parts',
    location: 'Wagle Estate, Thane',
    content: 'Built a 3,200 sq ft heavy mezzanine floor in our factory without interrupting our daily assembly line. Highly professional, certified welders, and solid structural integrity.',
    rating: 5,
    serviceSlug: 'structural-fabrication',
    isFeatured: true
  }
];
