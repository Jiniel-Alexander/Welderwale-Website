export type SectionType =
  | 'HeroSlider'
  | 'StatsStrip'
  | 'FeaturedServices'
  | 'AboutIntroduction'
  | 'WhyChooseUs'
  | 'FeaturedProjects'
  | 'ProcessWorkflow'
  | 'Industries'
  | 'GalleryPreview'
  | 'Testimonials'
  | 'FaqAccordion'
  | 'EnquiryFunnel'
  | 'ContactCta'
  | 'TextAndImage';

export interface PageSection {
  id: string;
  type: SectionType;
  title: string;
  subtitle?: string;
  content?: Record<string, unknown>;
  displayOrder: number;
  isVisible: boolean;
  isMobileVisible: boolean;
  isDesktopVisible: boolean;
  background?: 'default' | 'surface' | 'dark' | 'brand';
  paddingTop?: 'sm' | 'md' | 'lg' | 'none';
  paddingBottom?: 'sm' | 'md' | 'lg' | 'none';
}

export interface CmsPage {
  id: string;
  title: string;
  slug: string;
  status: 'draft' | 'published' | 'archived';
  seoTitle: string;
  seoDescription: string;
  ogImage?: string;
  sections: PageSection[];
  createdAt: string;
  updatedAt: string;
}

export interface RedirectRule {
  id: string;
  sourceUrl: string;
  targetUrl: string;
  statusCode: 301 | 302;
  isActive: boolean;
  createdAt: string;
}
