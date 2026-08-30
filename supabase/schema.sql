-- =========================================================
-- WELDERWALE PRODUCTION POSTGRESQL SCHEMA (SUPABASE)
-- =========================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Services Table
CREATE TABLE IF NOT EXISTS services (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  short_description TEXT NOT NULL,
  full_description TEXT NOT NULL,
  featured_image TEXT NOT NULL,
  gallery TEXT[] DEFAULT '{}',
  category TEXT NOT NULL,
  is_featured BOOLEAN DEFAULT false,
  display_order INT DEFAULT 0,
  seo_title TEXT,
  seo_description TEXT,
  og_image TEXT,
  specifications JSONB DEFAULT '[]'::jsonb,
  options JSONB DEFAULT '[]'::jsonb,
  process JSONB DEFAULT '[]'::jsonb,
  faqs JSONB DEFAULT '[]'::jsonb,
  related_services TEXT[] DEFAULT '{}',
  service_areas TEXT[] DEFAULT '{}',
  cta_text TEXT DEFAULT 'Request Quotation',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Locations Table
CREATE TABLE IF NOT EXISTS locations (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  region TEXT NOT NULL,
  is_featured BOOLEAN DEFAULT true,
  display_order INT DEFAULT 0,
  description TEXT NOT NULL,
  areas_served TEXT[] DEFAULT '{}',
  seo_title TEXT,
  seo_description TEXT,
  og_image TEXT,
  popular_services TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Projects Table
CREATE TABLE IF NOT EXISTS projects (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  service_slug TEXT REFERENCES services(slug) ON UPDATE CASCADE ON DELETE SET NULL,
  category TEXT NOT NULL,
  location TEXT NOT NULL,
  client TEXT,
  description TEXT NOT NULL,
  scope TEXT[] DEFAULT '{}',
  completion_date TEXT,
  featured_image TEXT NOT NULL,
  gallery TEXT[] DEFAULT '{}',
  before_image TEXT,
  after_image TEXT,
  is_featured BOOLEAN DEFAULT false,
  display_order INT DEFAULT 0,
  seo_title TEXT,
  seo_description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Gallery Items Table
CREATE TABLE IF NOT EXISTS gallery_items (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  image TEXT NOT NULL,
  category TEXT NOT NULL,
  service_slug TEXT,
  project_slug TEXT,
  alt_text TEXT NOT NULL,
  display_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Hero Slides Table
CREATE TABLE IF NOT EXISTS hero_slides (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  subtitle TEXT NOT NULL,
  image TEXT NOT NULL,
  service_slug TEXT,
  primary_cta_text TEXT NOT NULL,
  primary_cta_link TEXT NOT NULL,
  secondary_cta_text TEXT NOT NULL,
  secondary_cta_link TEXT NOT NULL,
  display_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Statistics Table
CREATE TABLE IF NOT EXISTS statistics (
  id TEXT PRIMARY KEY,
  number TEXT NOT NULL,
  label TEXT NOT NULL,
  icon TEXT NOT NULL,
  display_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT true
);

-- 7. Leads / CRM Enquiries Table
CREATE TABLE IF NOT EXISTS leads (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  service TEXT NOT NULL,
  location TEXT NOT NULL,
  area TEXT NOT NULL,
  requirement TEXT NOT NULL,
  attachments TEXT[] DEFAULT '{}',
  source TEXT DEFAULT 'Website',
  status TEXT DEFAULT 'New',
  notes TEXT,
  preferred_contact TEXT DEFAULT 'Call',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. CMS Pages & Sections Table
CREATE TABLE IF NOT EXISTS cms_pages (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  status TEXT DEFAULT 'published',
  seo_title TEXT,
  seo_description TEXT,
  og_image TEXT,
  sections JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 9. Site Settings (Theme, Company Profile, SEO)
CREATE TABLE IF NOT EXISTS site_settings (
  key TEXT PRIMARY KEY,
  value JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 10. Storage Buckets (Run in Supabase dashboard)
-- INSERT INTO storage.buckets (id, name, public) VALUES ('public-assets', 'public-assets', true);
-- INSERT INTO storage.buckets (id, name, public) VALUES ('enquiry-attachments', 'enquiry-attachments', false);
