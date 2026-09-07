import { allServices } from '@/data/services';
import { allProjects } from '@/data/projects';
import { allLocations } from '@/data/locations';
import { ServiceItem, ProjectItem, LeadSubmission } from '@/types';
import { supabase } from './supabaseClient';
import fs from 'fs';
import path from 'path';

// Local disk fallback directory for leads, services, projects, settings, and theme
const DATA_DIR = path.join(process.cwd(), '.data');
const LEADS_FILE = path.join(DATA_DIR, 'leads.json');
const SERVICES_FILE = path.join(DATA_DIR, 'services.json');
const PROJECTS_FILE = path.join(DATA_DIR, 'projects.json');
const SETTINGS_FILE = path.join(DATA_DIR, 'settings.json');
const THEME_FILE = path.join(DATA_DIR, 'theme.json');

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(LEADS_FILE)) {
    fs.writeFileSync(LEADS_FILE, JSON.stringify([], null, 2));
  }
  if (!fs.existsSync(SERVICES_FILE)) {
    fs.writeFileSync(SERVICES_FILE, JSON.stringify(allServices, null, 2));
  }
  if (!fs.existsSync(PROJECTS_FILE)) {
    fs.writeFileSync(PROJECTS_FILE, JSON.stringify(allProjects, null, 2));
  }
  if (!fs.existsSync(SETTINGS_FILE)) {
    const defaultSettings = {
      phone: '+91 98765 43210',
      whatsapp: '+91 98765 43210',
      email: 'contact@welderwale.com',
      address: 'Bhayandar East, Thane District, Maharashtra',
      radius: '50 km',
      hours: 'Mon - Sat: 8:30 AM - 8:00 PM',
    };
    fs.writeFileSync(SETTINGS_FILE, JSON.stringify(defaultSettings, null, 2));
  }
  if (!fs.existsSync(THEME_FILE)) {
    const defaultTheme = {
      primary: '#1e293b',
      secondary: '#2563eb',
      accent: '#f59e0b',
      btnRadius: '0.5rem',
      cardRadius: '0.75rem',
    };
    fs.writeFileSync(THEME_FILE, JSON.stringify(defaultTheme, null, 2));
  }
}

// 1. LEADS OPERATIONS
export async function getLeads(): Promise<LeadSubmission[]> {
  ensureDataDir();
  try {
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (error || !data || data.length === 0) {
      const content = fs.readFileSync(LEADS_FILE, 'utf-8');
      return JSON.parse(content);
    }
    return data;
  } catch {
    const content = fs.readFileSync(LEADS_FILE, 'utf-8');
    return JSON.parse(content);
  }
}

export async function createLead(leadData: Omit<LeadSubmission, 'id' | 'createdAt' | 'status'>): Promise<LeadSubmission> {
  ensureDataDir();
  const newLead: LeadSubmission = {
    id: 'lead_' + Date.now(),
    ...leadData,
    status: 'New',
    createdAt: new Date().toISOString(),
    notes: [],
  };

  try {
    await supabase.from('leads').insert([
      {
        service: newLead.service,
        location: newLead.location,
        area: newLead.area,
        requirement: newLead.requirement,
        full_name: newLead.fullName,
        phone: newLead.phone,
        email: newLead.email,
        status: newLead.status,
      },
    ]);
  } catch {
    // Local fallback persists
  }

  const raw = fs.readFileSync(LEADS_FILE, 'utf-8');
  const existing: LeadSubmission[] = JSON.parse(raw);
  existing.unshift(newLead);
  fs.writeFileSync(LEADS_FILE, JSON.stringify(existing, null, 2));

  return newLead;
}

export async function updateLeadStatus(id: string, status: LeadSubmission['status'], note?: string): Promise<boolean> {
  ensureDataDir();
  try {
    await supabase.from('leads').update({ status }).eq('id', id);
  } catch {
    // Ignore error
  }

  const raw = fs.readFileSync(LEADS_FILE, 'utf-8');
  const existing: LeadSubmission[] = JSON.parse(raw);
  const target = existing.find((l) => l.id === id);
  if (target) {
    target.status = status;
    if (note) {
      target.notes = target.notes || [];
      target.notes.push(`[${new Date().toLocaleDateString()}] ${note}`);
    }
    fs.writeFileSync(LEADS_FILE, JSON.stringify(existing, null, 2));
    return true;
  }
  return false;
}

// 2. SERVICES OPERATIONS
export async function getServices(): Promise<ServiceItem[]> {
  ensureDataDir();
  try {
    const { data, error } = await supabase.from('services').select('*').order('order', { ascending: true });
    if (error || !data || data.length === 0) {
      const content = fs.readFileSync(SERVICES_FILE, 'utf-8');
      return JSON.parse(content);
    }
    return data;
  } catch {
    const content = fs.readFileSync(SERVICES_FILE, 'utf-8');
    return JSON.parse(content);
  }
}

export async function getServiceBySlug(slug: string): Promise<ServiceItem | undefined> {
  const services = await getServices();
  return services.find((s) => s.slug === slug);
}

export async function createService(serviceData: Partial<ServiceItem>): Promise<ServiceItem> {
  ensureDataDir();
  const raw = fs.readFileSync(SERVICES_FILE, 'utf-8');
  const services: ServiceItem[] = JSON.parse(raw);

  const slug = serviceData.slug || serviceData.name?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || `service-${Date.now()}`;

  const newService: ServiceItem = {
    id: 'srv_' + Date.now(),
    slug,
    name: serviceData.name || 'New Service',
    category: serviceData.category || 'General Fabrication',
    tagline: serviceData.tagline || '',
    shortDesc: serviceData.shortDesc || '',
    fullDesc: serviceData.fullDesc || '',
    featuredImage: serviceData.featuredImage || 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&auto=format&fit=crop&q=80',
    gallery: serviceData.gallery || [],
    specifications: serviceData.specifications || [],
    applications: serviceData.applications || [],
    features: serviceData.features || [],
    faqs: serviceData.faqs || [],
    isFeatured: !!serviceData.isFeatured,
    order: serviceData.order ?? services.length + 1,
  };

  services.push(newService);
  fs.writeFileSync(SERVICES_FILE, JSON.stringify(services, null, 2));

  try {
    await supabase.from('services').insert([newService]);
  } catch {
    // Offline fallback saved
  }

  return newService;
}

export async function updateService(id: string, updates: Partial<ServiceItem>): Promise<ServiceItem | null> {
  ensureDataDir();
  const raw = fs.readFileSync(SERVICES_FILE, 'utf-8');
  const services: ServiceItem[] = JSON.parse(raw);

  const index = services.findIndex((s) => s.id === id || s.slug === id);
  if (index === -1) return null;

  services[index] = {
    ...services[index],
    ...updates,
  };

  fs.writeFileSync(SERVICES_FILE, JSON.stringify(services, null, 2));

  try {
    await supabase.from('services').update(updates).eq('id', id);
  } catch {
    // Offline fallback saved
  }

  return services[index];
}

export async function deleteService(id: string): Promise<boolean> {
  ensureDataDir();
  const raw = fs.readFileSync(SERVICES_FILE, 'utf-8');
  const services: ServiceItem[] = JSON.parse(raw);

  const filtered = services.filter((s) => s.id !== id && s.slug !== id);
  if (filtered.length === services.length) return false;

  fs.writeFileSync(SERVICES_FILE, JSON.stringify(filtered, null, 2));

  try {
    await supabase.from('services').delete().eq('id', id);
  } catch {
    // Offline fallback saved
  }

  return true;
}

// 3. PROJECTS OPERATIONS
export async function getProjects(): Promise<ProjectItem[]> {
  ensureDataDir();
  try {
    const { data, error } = await supabase.from('projects').select('*');
    if (error || !data || data.length === 0) {
      const content = fs.readFileSync(PROJECTS_FILE, 'utf-8');
      return JSON.parse(content);
    }
    return data;
  } catch {
    const content = fs.readFileSync(PROJECTS_FILE, 'utf-8');
    return JSON.parse(content);
  }
}

export async function createProject(projectData: Partial<ProjectItem>): Promise<ProjectItem> {
  ensureDataDir();
  const raw = fs.readFileSync(PROJECTS_FILE, 'utf-8');
  const projects: ProjectItem[] = JSON.parse(raw);

  const slug = projectData.slug || projectData.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || `proj-${Date.now()}`;

  const newProject: ProjectItem = {
    id: 'proj_' + Date.now(),
    slug,
    title: projectData.title || 'Untitled Project',
    serviceSlug: projectData.serviceSlug || 'structural-fabrication',
    serviceName: projectData.serviceName || 'Structural Fabrication',
    location: projectData.location || 'Mumbai / Thane',
    scope: projectData.scope || '',
    completionDate: projectData.completionDate || new Date().toLocaleString('default', { month: 'long', year: 'numeric' }),
    mainImage: projectData.mainImage || 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&auto=format&fit=crop&q=80',
    beforeImage: projectData.beforeImage || undefined,
    afterImage: projectData.afterImage || undefined,
    gallery: projectData.gallery || [],
    summary: projectData.summary || '',
    details: projectData.details || [],
  };

  projects.unshift(newProject);
  fs.writeFileSync(PROJECTS_FILE, JSON.stringify(projects, null, 2));

  try {
    await supabase.from('projects').insert([newProject]);
  } catch {
    // Offline fallback saved
  }

  return newProject;
}

export async function updateProject(id: string, updates: Partial<ProjectItem>): Promise<ProjectItem | null> {
  ensureDataDir();
  const raw = fs.readFileSync(PROJECTS_FILE, 'utf-8');
  const projects: ProjectItem[] = JSON.parse(raw);

  const index = projects.findIndex((p) => p.id === id || p.slug === id);
  if (index === -1) return null;

  projects[index] = {
    ...projects[index],
    ...updates,
  };

  fs.writeFileSync(PROJECTS_FILE, JSON.stringify(projects, null, 2));

  try {
    await supabase.from('projects').update(updates).eq('id', id);
  } catch {
    // Offline fallback saved
  }

  return projects[index];
}

export async function deleteProject(id: string): Promise<boolean> {
  ensureDataDir();
  const raw = fs.readFileSync(PROJECTS_FILE, 'utf-8');
  const projects: ProjectItem[] = JSON.parse(raw);

  const filtered = projects.filter((p) => p.id !== id && p.slug !== id);
  if (filtered.length === projects.length) return false;

  fs.writeFileSync(PROJECTS_FILE, JSON.stringify(filtered, null, 2));

  try {
    await supabase.from('projects').delete().eq('id', id);
  } catch {
    // Offline fallback saved
  }

  return true;
}

// 4. SETTINGS & THEME OPERATIONS
export async function getSettings() {
  ensureDataDir();
  const content = fs.readFileSync(SETTINGS_FILE, 'utf-8');
  return JSON.parse(content);
}

export async function saveSettings(settings: Record<string, string>) {
  ensureDataDir();
  fs.writeFileSync(SETTINGS_FILE, JSON.stringify(settings, null, 2));
  return settings;
}

export async function getTheme() {
  ensureDataDir();
  const content = fs.readFileSync(THEME_FILE, 'utf-8');
  return JSON.parse(content);
}

export async function saveTheme(theme: Record<string, string>) {
  ensureDataDir();
  fs.writeFileSync(THEME_FILE, JSON.stringify(theme, null, 2));
  return theme;
}
