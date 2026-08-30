import {
  Service,
  LocationItem,
  Project,
  HeroSlide,
  Statistic,
  Lead,
  ThemeSettings,
  CompanySettings,
  Testimonial,
  FaqItem,
  GalleryItem,
} from '@/types';
import { CmsPage, PageSection } from '@/types/cms';
import { initialServices } from '@/data/initialServices';
import { initialLocations } from '@/data/initialLocations';
import { initialProjects } from '@/data/initialProjects';
import { initialSlides } from '@/data/initialSlides';
import { initialStatistics } from '@/data/initialStatistics';
import { initialTheme } from '@/data/initialTheme';
import { initialCompany } from '@/data/initialCompany';
import { initialTestimonials } from '@/data/initialTestimonials';
import { initialFaqs } from '@/data/initialFaqs';
import { initialGallery } from '@/data/initialGallery';
import { initialPages } from '@/data/initialPages';
import { supabase, isSupabaseConfigured } from '@/lib/supabaseClient';

// In-Memory Fallback State (persists during runtime in Node server & is initial seed)
let localServices: Service[] = [...initialServices];
let localLocations: LocationItem[] = [...initialLocations];
let localProjects: Project[] = [...initialProjects];
let localSlides: HeroSlide[] = [...initialSlides];
let localStats: Statistic[] = [...initialStatistics];
let localTheme: ThemeSettings = { ...initialTheme };
let localCompany: CompanySettings = { ...initialCompany };
let localTestimonials: Testimonial[] = [...initialTestimonials];
let localFaqs: FaqItem[] = [...initialFaqs];
let localGallery: GalleryItem[] = [...initialGallery];
let localPages: CmsPage[] = [...initialPages];
let localLeads: Lead[] = [
  {
    id: 'lead-1',
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
    name: 'Pradeep Sharma',
    phone: '+919820123456',
    email: 'pradeep.sharma@example.com',
    service: 'Metal Sheds',
    location: 'Vasai',
    area: 'Vasai East Industrial Area',
    requirement: 'Need a 4,000 sq ft industrial PEB shed for our plastic manufacturing unit. Require site visit for level check and quote.',
    source: 'Website 3-Step Funnel',
    status: 'New',
    preferredContact: 'Call'
  },
  {
    id: 'lead-2',
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
    name: 'Anjali Deshmukh',
    phone: '+919819876543',
    email: 'anjali.d@example.com',
    service: 'Garden Pergola',
    location: 'Mira Road',
    area: 'Beverly Park',
    requirement: 'Looking for a 14x10 ft black metal pergola with glass roof for terrace duplex.',
    source: 'Website 3-Step Funnel',
    status: 'Site Visit',
    notes: 'Site visit completed on Saturday. Sent preliminary 3D drawing and quote.',
    preferredContact: 'WhatsApp'
  }
];

// ==========================================
// SERVICES API
// ==========================================
export async function getServices(): Promise<Service[]> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .order('display_order', { ascending: true });
      if (!error && data && data.length > 0) {
        return data as Service[];
      }
    } catch {
      // Fallback
    }
  }
  return [...localServices].sort((a, b) => a.displayOrder - b.displayOrder);
}

export async function getFeaturedServices(): Promise<Service[]> {
  const all = await getServices();
  const featured = all.filter((s) => s.isFeatured);
  return featured.length >= 4 ? featured.slice(0, 4) : all.slice(0, 4);
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const all = await getServices();
  return all.find((s) => s.slug === slug) || null;
}

export async function saveService(service: Service): Promise<Service> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('services')
        .upsert(service)
        .select()
        .single();
      if (!error && data) return data as Service;
    } catch {
      // Fallback
    }
  }
  const index = localServices.findIndex((s) => s.id === service.id || s.slug === service.slug);
  if (index >= 0) {
    localServices[index] = { ...service, updatedAt: new Date().toISOString() };
  } else {
    localServices.push({ ...service, createdAt: new Date().toISOString() });
  }
  return service;
}

export async function deleteService(id: string): Promise<boolean> {
  if (isSupabaseConfigured && supabase) {
    try {
      await supabase.from('services').delete().eq('id', id);
    } catch {
      // Fallback
    }
  }
  localServices = localServices.filter((s) => s.id !== id);
  return true;
}

// ==========================================
// LOCATIONS API
// ==========================================
export async function getLocations(): Promise<LocationItem[]> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('locations')
        .select('*')
        .order('display_order', { ascending: true });
      if (!error && data && data.length > 0) {
        return data as LocationItem[];
      }
    } catch {
      // Fallback
    }
  }
  return [...localLocations].sort((a, b) => a.displayOrder - b.displayOrder);
}

export async function getLocationBySlug(slug: string): Promise<LocationItem | null> {
  const all = await getLocations();
  return all.find((l) => l.slug === slug) || null;
}

// ==========================================
// PROJECTS API
// ==========================================
export async function getProjects(): Promise<Project[]> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('display_order', { ascending: true });
      if (!error && data && data.length > 0) {
        return data as Project[];
      }
    } catch {
      // Fallback
    }
  }
  return [...localProjects].sort((a, b) => a.displayOrder - b.displayOrder);
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const all = await getProjects();
  const featured = all.filter((p) => p.isFeatured);
  return featured.length > 0 ? featured : all.slice(0, 4);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const all = await getProjects();
  return all.find((p) => p.slug === slug) || null;
}

export async function saveProject(project: Project): Promise<Project> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('projects')
        .upsert(project)
        .select()
        .single();
      if (!error && data) return data as Project;
    } catch {
      // Fallback
    }
  }
  const index = localProjects.findIndex((p) => p.id === project.id || p.slug === project.slug);
  if (index >= 0) {
    localProjects[index] = project;
  } else {
    localProjects.push(project);
  }
  return project;
}

// ==========================================
// HERO SLIDES API
// ==========================================
export async function getHeroSlides(): Promise<HeroSlide[]> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('hero_slides')
        .select('*')
        .eq('is_active', true)
        .order('display_order', { ascending: true });
      if (!error && data && data.length > 0) {
        return data as HeroSlide[];
      }
    } catch {
      // Fallback
    }
  }
  return localSlides.filter((s) => s.isActive).sort((a, b) => a.displayOrder - b.displayOrder);
}

export async function getAllHeroSlides(): Promise<HeroSlide[]> {
  return [...localSlides].sort((a, b) => a.displayOrder - b.displayOrder);
}

export async function saveHeroSlides(slides: HeroSlide[]): Promise<HeroSlide[]> {
  localSlides = [...slides];
  return localSlides;
}

// ==========================================
// STATISTICS API
// ==========================================
export async function getStatistics(): Promise<Statistic[]> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('statistics')
        .select('*')
        .eq('is_active', true)
        .order('display_order', { ascending: true });
      if (!error && data && data.length > 0) {
        return data as Statistic[];
      }
    } catch {
      // Fallback
    }
  }
  return localStats.filter((s) => s.isActive).sort((a, b) => a.displayOrder - b.displayOrder);
}

export async function saveStatistics(stats: Statistic[]): Promise<Statistic[]> {
  localStats = [...stats];
  return localStats;
}

// ==========================================
// LEADS & CRM API
// ==========================================
export async function getLeads(): Promise<Lead[]> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });
      if (!error && data && data.length > 0) {
        return data as Lead[];
      }
    } catch {
      // Fallback
    }
  }
  return [...localLeads].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export async function createLead(leadData: Omit<Lead, 'id' | 'createdAt' | 'status'>): Promise<Lead> {
  const newLead: Lead = {
    ...leadData,
    id: 'lead-' + Date.now(),
    createdAt: new Date().toISOString(),
    status: 'New',
  };

  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('leads')
        .insert(newLead)
        .select()
        .single();
      if (!error && data) return data as Lead;
    } catch {
      // Fallback
    }
  }

  localLeads.unshift(newLead);
  return newLead;
}

export async function updateLeadStatus(
  id: string,
  status: Lead['status'],
  notes?: string
): Promise<Lead | null> {
  const index = localLeads.findIndex((l) => l.id === id);
  if (index >= 0) {
    localLeads[index].status = status;
    if (notes !== undefined) {
      localLeads[index].notes = notes;
    }
    return localLeads[index];
  }
  return null;
}

// ==========================================
// THEME SETTINGS API
// ==========================================
export async function getThemeSettings(): Promise<ThemeSettings> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('site_settings')
        .select('value')
        .eq('key', 'theme_settings')
        .single();
      if (!error && data?.value) {
        return data.value as ThemeSettings;
      }
    } catch {
      // Fallback
    }
  }
  return { ...localTheme };
}

export async function saveThemeSettings(theme: ThemeSettings): Promise<ThemeSettings> {
  localTheme = { ...theme };
  if (isSupabaseConfigured && supabase) {
    try {
      await supabase.from('site_settings').upsert({
        key: 'theme_settings',
        value: theme,
        updated_at: new Date().toISOString(),
      });
    } catch {
      // Fallback
    }
  }
  return localTheme;
}

// ==========================================
// COMPANY SETTINGS API
// ==========================================
export async function getCompanySettings(): Promise<CompanySettings> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('site_settings')
        .select('value')
        .eq('key', 'company_settings')
        .single();
      if (!error && data?.value) {
        return data.value as CompanySettings;
      }
    } catch {
      // Fallback
    }
  }
  return { ...localCompany };
}

export async function saveCompanySettings(settings: CompanySettings): Promise<CompanySettings> {
  localCompany = { ...settings };
  if (isSupabaseConfigured && supabase) {
    try {
      await supabase.from('site_settings').upsert({
        key: 'company_settings',
        value: settings,
        updated_at: new Date().toISOString(),
      });
    } catch {
      // Fallback
    }
  }
  return localCompany;
}

// ==========================================
// TESTIMONIALS & FAQS API
// ==========================================
export async function getTestimonials(): Promise<Testimonial[]> {
  return [...localTestimonials];
}

export async function getFaqs(): Promise<FaqItem[]> {
  return [...localFaqs].sort((a, b) => a.displayOrder - b.displayOrder);
}

// ==========================================
// GALLERY API
// ==========================================
export async function getGalleryItems(): Promise<GalleryItem[]> {
  return [...localGallery].sort((a, b) => a.displayOrder - b.displayOrder);
}

// ==========================================
// CMS PAGE BUILDER & SECTIONS API
// ==========================================
export async function getCmsPage(slug: string = 'home'): Promise<CmsPage | null> {
  const page = localPages.find((p) => p.slug === slug);
  if (!page) return null;
  return {
    ...page,
    sections: [...page.sections].sort((a, b) => a.displayOrder - b.displayOrder),
  };
}

export async function saveCmsPageSections(
  slug: string,
  sections: PageSection[]
): Promise<CmsPage | null> {
  const index = localPages.findIndex((p) => p.slug === slug);
  if (index >= 0) {
    localPages[index].sections = sections;
    localPages[index].updatedAt = new Date().toISOString();
    return localPages[index];
  }
  return null;
}
