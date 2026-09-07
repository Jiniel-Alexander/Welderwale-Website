export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  category: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  featuredImage: string;
  gallery: string[];
  specifications: { key: string; value: string }[];
  applications: string[];
  features: string[];
  faqs: { question: string; answer: string }[];
  isFeatured: boolean;
  order: number;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  serviceSlug: string;
  serviceName: string;
  location: string;
  scope: string;
  completionDate: string;
  mainImage: string;
  beforeImage?: string;
  afterImage?: string;
  gallery: string[];
  summary: string;
  details: string[];
}

export interface LocationItem {
  slug: string;
  name: string;
  region: string;
  areas: string[];
  metaDescription: string;
  headline: string;
  leadParagraph: string;
}

export interface LeadSubmission {
  id?: string;
  service: string;
  location: string;
  area: string;
  requirement: string;
  attachmentName?: string;
  fullName: string;
  phone: string;
  email?: string;
  createdAt: string;
  status: 'New' | 'Contacted' | 'Site Visit' | 'Quotation' | 'Won' | 'Lost' | 'Closed';
  notes?: string[];
}
