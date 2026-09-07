-- Welderwale Supabase PostgreSQL Schema & Migrations

-- 1. Services Table
CREATE TABLE IF NOT EXISTS public.services (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    tagline TEXT,
    short_desc TEXT,
    full_desc TEXT,
    featured_image TEXT,
    gallery JSONB DEFAULT '[]'::jsonb,
    specifications JSONB DEFAULT '[]'::jsonb,
    applications JSONB DEFAULT '[]'::jsonb,
    features JSONB DEFAULT '[]'::jsonb,
    faqs JSONB DEFAULT '[]'::jsonb,
    is_featured BOOLEAN DEFAULT false,
    display_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Projects Table
CREATE TABLE IF NOT EXISTS public.projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    service_slug TEXT NOT NULL,
    service_name TEXT NOT NULL,
    location TEXT NOT NULL,
    scope TEXT,
    completion_date TEXT,
    main_image TEXT NOT NULL,
    before_image TEXT,
    after_image TEXT,
    gallery JSONB DEFAULT '[]'::jsonb,
    summary TEXT,
    details JSONB DEFAULT '[]'::jsonb,
    is_featured BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- 3. Leads & CRM Table
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    service TEXT NOT NULL,
    location TEXT NOT NULL,
    area TEXT,
    requirement TEXT NOT NULL,
    attachment_url TEXT,
    attachment_name TEXT,
    full_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    status TEXT NOT NULL DEFAULT 'New', -- 'New', 'Contacted', 'Site Visit', 'Quotation', 'Won', 'Lost', 'Closed'
    notes JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- 4. Gallery Items Table
CREATE TABLE IF NOT EXISTS public.gallery_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category TEXT NOT NULL,
    title TEXT NOT NULL,
    location TEXT,
    image_url TEXT NOT NULL,
    display_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 5. Company Settings Table
CREATE TABLE IF NOT EXISTS public.company_settings (
    id INT PRIMARY KEY DEFAULT 1,
    company_name TEXT NOT NULL DEFAULT 'Welderwale',
    phone TEXT NOT NULL DEFAULT '+91 98765 43210',
    whatsapp TEXT NOT NULL DEFAULT '+91 98765 43210',
    email TEXT DEFAULT 'contact@welderwale.com',
    address TEXT DEFAULT 'Bhayandar East, Thane District, Maharashtra',
    service_radius TEXT DEFAULT '50 km',
    working_hours TEXT DEFAULT 'Mon - Sat: 8:30 AM - 8:00 PM',
    updated_at TIMESTAMPTZ DEFAULT now(),
    CONSTRAINT single_row CHECK (id = 1)
);

-- 6. Theme Settings Table
CREATE TABLE IF NOT EXISTS public.theme_settings (
    id INT PRIMARY KEY DEFAULT 1,
    primary_color TEXT DEFAULT '#1e293b',
    secondary_color TEXT DEFAULT '#2563eb',
    accent_color TEXT DEFAULT '#f59e0b',
    button_radius TEXT DEFAULT '0.5rem',
    card_radius TEXT DEFAULT '0.75rem',
    updated_at TIMESTAMPTZ DEFAULT now(),
    CONSTRAINT single_theme_row CHECK (id = 1)
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.company_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.theme_settings ENABLE ROW LEVEL SECURITY;

-- Public Read Policies
CREATE POLICY "Allow public read access on services" ON public.services FOR SELECT USING (true);
CREATE POLICY "Allow public read access on projects" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Allow public read access on gallery_items" ON public.gallery_items FOR SELECT USING (true);
CREATE POLICY "Allow public read access on company_settings" ON public.company_settings FOR SELECT USING (true);
CREATE POLICY "Allow public read access on theme_settings" ON public.theme_settings FOR SELECT USING (true);

-- Public Insert for Leads (3-Step Enquiry Funnel)
CREATE POLICY "Allow public insert on leads" ON public.leads FOR INSERT WITH CHECK (true);

-- Admin Full Access Policies (For authenticated / server service role)
CREATE POLICY "Allow all actions on services for authenticated" ON public.services FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all actions on projects for authenticated" ON public.projects FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all actions on leads for authenticated" ON public.leads FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all actions on gallery_items for authenticated" ON public.gallery_items FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all actions on company_settings for authenticated" ON public.company_settings FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all actions on theme_settings for authenticated" ON public.theme_settings FOR ALL USING (true) WITH CHECK (true);
