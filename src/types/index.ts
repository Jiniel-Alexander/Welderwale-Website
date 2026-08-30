export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceSpec {
  label: string;
  value: string;
}

export interface ServiceOption {
  title: string;
  description: string;
  image?: string;
}

export interface ServiceProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  featuredImage: string;
  gallery: string[];
  category: string;
  isFeatured: boolean;
  displayOrder: number;
  seoTitle: string;
  seoDescription: string;
  ogImage?: string;
  specifications: ServiceSpec[];
  options: ServiceOption[];
  process: ServiceProcessStep[];
  faqs: ServiceFaq[];
  relatedServices?: string[];
  serviceAreas?: string[];
  ctaText?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface LocationArea {
  name: string;
  popularSpots?: string[];
}

export interface LocationItem {
  id: string;
  name: string;
  slug: string;
  region: string;
  isFeatured: boolean;
  displayOrder: number;
  description: string;
  areasServed: string[];
  seoTitle: string;
  seoDescription: string;
  ogImage?: string;
  popularServices?: string[];
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  serviceSlug: string;
  category: string;
  location: string;
  client?: string;
  description: string;
  scope: string[];
  completionDate?: string;
  featuredImage: string;
  gallery: string[];
  beforeImage?: string;
  afterImage?: string;
  isFeatured: boolean;
  displayOrder: number;
  seoTitle: string;
  seoDescription: string;
  createdAt?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  category: 'Workshop' | 'Fabrication' | 'Installation' | 'Completed Work' | 'Machinery' | 'Site Work';
  serviceSlug?: string;
  projectSlug?: string;
  altText: string;
  displayOrder: number;
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  serviceSlug: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  displayOrder: number;
  isActive: boolean;
}

export interface Statistic {
  id: string;
  number: string;
  label: string;
  icon: string;
  displayOrder: number;
  isActive: boolean;
}

export type LeadStatus =
  | 'New'
  | 'Contacted'
  | 'Site Visit'
  | 'Quotation'
  | 'Won'
  | 'Lost'
  | 'Closed';

export interface Lead {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
  email?: string;
  service: string;
  location: string;
  area: string;
  requirement: string;
  attachments?: string[];
  source?: string;
  status: LeadStatus;
  notes?: string;
  preferredContact?: 'Call' | 'WhatsApp' | 'Email';
}

export interface ThemeSettings {
  primaryColor: string;
  primaryHoverColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  surfaceColor: string;
  surfaceDarkColor: string;
  textColor: string;
  textMutedColor: string;
  borderColor: string;
  successColor: string;
  errorColor: string;
  headingFont: string;
  bodyFont: string;
  containerWidth: string;
  radiusBtn: string;
  radiusCard: string;
  shadowIntensity: 'sm' | 'md' | 'lg';
}

export interface CompanySettings {
  companyName: string;
  tagline: string;
  logo: string;
  favicon: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  address: string;
  city: string;
  pincode: string;
  serviceRadiusKm: number;
  googleMapsEmbedUrl: string;
  googleMapsLink: string;
  workingHours: string;
  workingDays: string;
  socialLinks: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
    linkedin?: string;
  };
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company?: string;
  location: string;
  content: string;
  rating: number;
  avatar?: string;
  serviceSlug?: string;
  isFeatured: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  displayOrder: number;
}
