-- =========================================================
-- WELDERWALE ROW LEVEL SECURITY (RLS) POLICIES
-- =========================================================

-- 1. Enable RLS on all tables
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE locations ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE hero_slides ENABLE ROW LEVEL SECURITY;
ALTER TABLE statistics ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE cms_pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

-- 2. Public Read Policies (Allow anyone to read published website content)
CREATE POLICY "Allow public read access to services" ON services FOR SELECT USING (true);
CREATE POLICY "Allow public read access to locations" ON locations FOR SELECT USING (true);
CREATE POLICY "Allow public read access to projects" ON projects FOR SELECT USING (true);
CREATE POLICY "Allow public read access to gallery" ON gallery_items FOR SELECT USING (true);
CREATE POLICY "Allow public read access to hero slides" ON hero_slides FOR SELECT USING (is_active = true);
CREATE POLICY "Allow public read access to statistics" ON statistics FOR SELECT USING (is_active = true);
CREATE POLICY "Allow public read access to published pages" ON cms_pages FOR SELECT USING (status = 'published');
CREATE POLICY "Allow public read access to site settings" ON site_settings FOR SELECT USING (true);

-- 3. Lead Ingestion Policy (Allow public anonymous users to insert new enquiries)
CREATE POLICY "Allow public to submit enquiry leads" ON leads FOR INSERT WITH CHECK (true);

-- 4. Admin Management Policies (Allow authenticated users full CRUD)
CREATE POLICY "Allow authenticated full access to services" ON services FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow authenticated full access to locations" ON locations FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow authenticated full access to projects" ON projects FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow authenticated full access to gallery" ON gallery_items FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow authenticated full access to hero slides" ON hero_slides FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow authenticated full access to statistics" ON statistics FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow authenticated full access to leads" ON leads FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow authenticated full access to pages" ON cms_pages FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow authenticated full access to settings" ON site_settings FOR ALL TO authenticated USING (true) WITH CHECK (true);
