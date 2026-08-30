import { CmsPage } from '@/types/cms';

export const initialPages: CmsPage[] = [
  {
    id: 'page-home',
    title: 'Homepage',
    slug: 'home',
    status: 'published',
    seoTitle: 'Welderwale | Precision Metal Fabrication & Welding Services in Mumbai & Thane',
    seoDescription: 'Leading metal fabrication contractor serving Mumbai, Thane & Bhayandar. Industrial sheds, gates, railings, pergolas, custom steel frames, and 3-step quick quotes.',
    ogImage: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    sections: [
      {
        id: 'sec-hero',
        type: 'HeroSlider',
        title: 'Hero Slider',
        subtitle: 'Dynamic full-width split hero showcasing core services',
        displayOrder: 1,
        isVisible: true,
        isMobileVisible: true,
        isDesktopVisible: true,
        background: 'dark'
      },
      {
        id: 'sec-stats',
        type: 'StatsStrip',
        title: 'Key Statistics Strip',
        subtitle: 'Live business metrics',
        displayOrder: 2,
        isVisible: true,
        isMobileVisible: true,
        isDesktopVisible: true,
        background: 'surface'
      },
      {
        id: 'sec-about',
        type: 'AboutIntroduction',
        title: 'About Welderwale',
        subtitle: 'Engineering Metal with Precision, Passion & Trust',
        displayOrder: 3,
        isVisible: true,
        isMobileVisible: true,
        isDesktopVisible: true,
        background: 'default'
      },
      {
        id: 'sec-services',
        type: 'FeaturedServices',
        title: 'Our Core Fabrication Services',
        subtitle: 'From heavy industrial sheds to modern residential architectural metalwork',
        displayOrder: 4,
        isVisible: true,
        isMobileVisible: true,
        isDesktopVisible: true,
        background: 'surface'
      },
      {
        id: 'sec-why',
        type: 'WhyChooseUs',
        title: 'Why Choose Welderwale',
        subtitle: 'Certified welders, 1mm tolerances, anti-rust guarantees, and rapid site visits',
        displayOrder: 5,
        isVisible: true,
        isMobileVisible: true,
        isDesktopVisible: true,
        background: 'default'
      },
      {
        id: 'sec-projects',
        type: 'FeaturedProjects',
        title: 'Featured Projects & Case Studies',
        subtitle: 'Proven track record of structural and architectural excellence across Mumbai & Thane',
        displayOrder: 6,
        isVisible: true,
        isMobileVisible: true,
        isDesktopVisible: true,
        background: 'surface'
      },
      {
        id: 'sec-process',
        type: 'ProcessWorkflow',
        title: 'How We Work',
        subtitle: 'Our 4-step streamlined process from blueprint to seamless on-site installation',
        displayOrder: 7,
        isVisible: true,
        isMobileVisible: true,
        isDesktopVisible: true,
        background: 'default'
      },
      {
        id: 'sec-industries',
        type: 'Industries',
        title: 'Industries We Serve',
        subtitle: 'Tailored fabrication solutions for residential, commercial, industrial, and infrastructure clients',
        displayOrder: 8,
        isVisible: true,
        isMobileVisible: true,
        isDesktopVisible: true,
        background: 'surface'
      },
      {
        id: 'sec-gallery',
        type: 'GalleryPreview',
        title: 'Fabrication Gallery',
        subtitle: 'Workshop precision, on-site erections, and completed masterpieces',
        displayOrder: 9,
        isVisible: true,
        isMobileVisible: true,
        isDesktopVisible: true,
        background: 'default'
      },
      {
        id: 'sec-testimonials',
        type: 'Testimonials',
        title: 'What Our Clients Say',
        subtitle: 'Verified feedback from builders, architects, plant managers, and homeowners',
        displayOrder: 10,
        isVisible: true,
        isMobileVisible: true,
        isDesktopVisible: true,
        background: 'surface'
      },
      {
        id: 'sec-faq',
        type: 'FaqAccordion',
        title: 'Frequently Asked Questions',
        subtitle: 'Everything you need to know about our fabrication services, pricing, and timelines',
        displayOrder: 11,
        isVisible: true,
        isMobileVisible: true,
        isDesktopVisible: true,
        background: 'default'
      },
      {
        id: 'sec-enquiry',
        type: 'EnquiryFunnel',
        title: 'Get an Instant Fabrication Estimate',
        subtitle: 'Simple 3-step enquiry with location mapping and attachment upload',
        displayOrder: 12,
        isVisible: true,
        isMobileVisible: true,
        isDesktopVisible: true,
        background: 'surface'
      },
      {
        id: 'sec-cta',
        type: 'ContactCta',
        title: 'Ready to Start Your Metal Project?',
        subtitle: 'Speak directly with our fabrication engineers for expert advice and rapid site visits',
        displayOrder: 13,
        isVisible: true,
        isMobileVisible: true,
        isDesktopVisible: true,
        background: 'dark'
      }
    ]
  }
];
