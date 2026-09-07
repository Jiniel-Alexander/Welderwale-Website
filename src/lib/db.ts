import { allServices } from '@/data/services';
import { allProjects } from '@/data/projects';
import { allLocations } from '@/data/locations';
import { ServiceItem, ProjectItem, LeadSubmission } from '@/types';
import { supabase } from './supabaseClient';
import fs from 'fs';
import path from 'path';

// Local disk fallback directory for leads when working completely offline or developing without Supabase live table creation
const DATA_DIR = path.join(process.cwd(), '.data');
const LEADS_FILE = path.join(DATA_DIR, 'leads.json');

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(LEADS_FILE)) {
    fs.writeFileSync(LEADS_FILE, JSON.stringify([], null, 2));
  }
}

// 1. LEADS OPERATIONS
export async function getLeads(): Promise<LeadSubmission[]> {
  try {
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (error || !data || data.length === 0) {
      ensureDataDir();
      const content = fs.readFileSync(LEADS_FILE, 'utf-8');
      return JSON.parse(content);
    }
    return data;
  } catch (err) {
    ensureDataDir();
    const content = fs.readFileSync(LEADS_FILE, 'utf-8');
    return JSON.parse(content);
  }
}

export async function createLead(leadData: Omit<LeadSubmission, 'id' | 'createdAt' | 'status'>): Promise<LeadSubmission> {
  const newLead: LeadSubmission = {
    id: 'lead_' + Date.now(),
    ...leadData,
    status: 'New',
    createdAt: new Date().toISOString(),
    notes: [],
  };

  try {
    const { data, error } = await supabase.from('leads').insert([
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

    if (error) {
      console.warn('Supabase insert failed, persisting to local disk fallback:', error.message);
    }
  } catch (e) {
    console.warn('Supabase offline or unreachable, fallback to disk storage');
  }

  // Always append to local persistence so admin can view immediately
  ensureDataDir();
  const raw = fs.readFileSync(LEADS_FILE, 'utf-8');
  const existing: LeadSubmission[] = JSON.parse(raw);
  existing.unshift(newLead);
  fs.writeFileSync(LEADS_FILE, JSON.stringify(existing, null, 2));

  return newLead;
}

export async function updateLeadStatus(id: string, status: LeadSubmission['status'], note?: string): Promise<boolean> {
  try {
    await supabase.from('leads').update({ status }).eq('id', id);
  } catch (e) {
    // Ignore error and fall back to local disk
  }

  ensureDataDir();
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
  try {
    const { data, error } = await supabase.from('services').select('*').order('display_order', { ascending: true });
    if (error || !data || data.length === 0) {
      return allServices;
    }
    return data;
  } catch {
    return allServices;
  }
}

// 3. PROJECTS OPERATIONS
export async function getProjects(): Promise<ProjectItem[]> {
  try {
    const { data, error } = await supabase.from('projects').select('*');
    if (error || !data || data.length === 0) {
      return allProjects;
    }
    return data;
  } catch {
    return allProjects;
  }
}
