# 🏗️ Welderwale Website

Welcome to the official repository for the **Welderwale** website — a production-ready, mobile-first, conversion-focused web platform and lightweight hybrid CMS for professional metal fabrication and installation services.

---

## 📌 Project Overview

**Welderwale** is a metal fabrication and installation business operating across an approximate **50 km radius from Bhayandar**, actively serving residential, commercial, builder, contractor, architect, and industrial clients throughout **Mumbai, Thane, Kalyan, Dombivli, Bhayandar, Mira Road, Vasai, and surrounding areas**.

The website is engineered to serve as a high-converting digital engine:
1. **Showcase Expertise & Services**: High-visual catalog of fabrication services and verified portfolio projects.
2. **Drive High-Intent Conversions**:
   - 📞 **Primary Conversion**: Phone Call (`tel:`)
   - 💬 **Secondary Conversion**: WhatsApp Direct Chat (`wa.me`)
   - 📝 **Tertiary Conversion**: Smart 3-Step Multi-Stage Enquiry Funnel
3. **Empower Content Control via Custom Hybrid CMS**: A secure, non-destructive admin panel allowing non-technical managers to update content, services, projects, SEO, and global themes without breaking design system rules or writing code.
4. **Dominate Local & Service SEO**: Fast SSR/SSG rendering, structured JSON-LD data, dynamic sitemaps, and high-relevance location landing pages.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Frontend Framework** | [Next.js](https://nextjs.org/) (App Router), React, TypeScript |
| **Styling & Design System** | [Tailwind CSS](https://tailwindcss.com/), CSS Variables & Design Tokens |
| **Backend & Database** | [Supabase](https://supabase.com/) (PostgreSQL), Row Level Security (RLS) |
| **Authentication & RBAC** | Supabase Auth (Super Admin, Content Manager, Lead Manager, SEO Manager) |
| **File Storage** | Supabase Storage (Public assets & Private buckets for enquiry attachments) |
| **SEO & Performance** | Next.js Metadata API, Dynamic XML Sitemap, Robots.txt, JSON-LD Structured Data |
| **Security & Bot Protection** | Server-side MIME/file validation, Rate Limiting, Turnstile / Honeypot |

---

## 🚀 Core Features & Architectural Modules

### 1. 📱 Mobile-First Public Experience
- **Persistent Mobile Actions**: Sticky Call and WhatsApp bottom action bar for frictionless mobile conversion.
- **Mobile-Optimized Layouts**: Clean 2-column service cards per row on mobile viewports.
- **Dynamic Full-Width Hero Slider**: CMS-governed slides synchronizing service titles, value propositions, imagery, and dual CTAs (`View Service` / `Get a Quote`).
- **Live Statistics Strip**: Highlight key metrics (e.g., 10+ Years Experience, 500+ Projects, 100+ Clients, 50 KM Service Area).

### 2. ⚙️ Service Catalog & Detail Pages
- Initial support for **13 database-driven core services**:
  - Animal Farm Sheds
  - Custom Metal Frames & Installation
  - Garden Pergolas
  - Metal/Steel Furniture
  - Metal Sheds
  - Metal Gates
  - Metal Railings
  - Roofing Sheets
  - Rolling Shutters
  - Staircases
  - Unipole Structures
  - Window Grills
  - Structural Fabrication
- Dedicated SEO-friendly detail pages (`/services/[slug]`) containing technical specs, options, process workflows, FAQs, related projects, and dynamic CTAs.

### 3. 🖼️ Visual Portfolio & Filterable Gallery
- Dedicated `/our-work/` and `/gallery/` pages with multi-attribute filtering (by service, category, and project).
- Interactive **Before / After** visual comparison components.

### 4. 📋 3-Step Multi-Stage Enquiry Funnel
- **Step 1 (Requirement)**: Service selection with dependent **Location ➔ Area** dropdowns (e.g., Selecting *Mumbai* unlocks *Borivali, Kandivali, Malad, Goregaon, etc.*).
- **Step 2 (Work Details)**: Requirement specifications and secure multi-format file attachment uploads (JPG, PNG, WebP, PDF).
- **Step 3 (Contact Details)**: Lead capture with immediate submission feedback and instant direct Call/WhatsApp fallbacks.

### 5. 🛡️ Custom Lightweight Hybrid CMS & Admin Panel
- **Controlled Component-Driven Page Builder**: Assemble pages from curated, branded layout blocks (Hero Slider, Stats, Services, Projects, Gallery, Process, FAQs, Testimonials, CTAs, Contact) with instant add, reorder, duplicate, and show/hide controls.
- **Lead / CRM Management**: Centralized enquiry inbox with status progression (`New`, `Contacted`, `Site Visit`, `Quotation`, `Won`, `Lost`, `Closed`), internal notes, source tracking, and secure attachment downloads.
- **Global Theme & Design Token Manager**: Live configuration of brand colors (Primary, Accent, Background, Surface), typography, border radiuses, container widths, and shadows with safe preview.
- **Company Profile Settings**: Centralized management of contact numbers, WhatsApp links, operating hours, physical address, and Google Maps embed.
- **Media Library**: Structured media asset management backed by Supabase Storage with automated metadata handling (alt text, dimensions, categories).

### 6. 🔍 Local & Service-Based SEO Engine
- **Granular Meta Management**: Custom SEO titles, meta descriptions, canonical URLs, and OpenGraph tags per page.
- **Structured Data Automation**: Native JSON-LD schemas (`LocalBusiness`, `Service`, `FAQPage`, `BreadcrumbList`, `Organization`).
- **Targeted Location Pages**: Authentic location landing pages (`/locations/[area]`) for verified service areas within the 50 km operating radius.
- **Redirect Engine**: In-app 301/302 URL redirect manager to preserve link equity during slug updates.

---

## 🔒 Security Architecture
- **Row Level Security (RLS)**: Enforced across all PostgreSQL tables to guarantee role-based data isolation.
- **Zero Secrets on Frontend**: Supabase service-role keys and backend credentials strictly isolated to server runtime.
- **Secure File Ingestion**: Multi-tier upload validation (MIME-type check, extension verification, file size limits, filename sanitization, randomized storage paths).
- **Private Attachment Storage**: Enquiry file uploads are protected in access-controlled Supabase storage buckets.

---

## 🗺️ Phased Development Plan

- [ ] **Phase 1 — Foundation**: Next.js App Router, TypeScript, Tailwind CSS, Supabase client initialization, Design Token architecture, and Supabase Auth.
- [ ] **Phase 2 — Database Architecture**: Normalized PostgreSQL schemas, relations, and RLS security policies.
- [ ] **Phase 3 — Hybrid CMS Engine**: Admin dashboard, page builder blocks, service/project management, theme editor, and media manager.
- [ ] **Phase 4 — Public Frontend**: Responsive layout, header/mobile navigation, hero slider, stats strip, service catalog, and portfolio.
- [ ] **Phase 5 — Lead Generation Funnel**: 3-step dynamic enquiry form, secure file upload handler, and admin lead management.
- [ ] **Phase 6 — SEO & Location Architecture**: Dynamic metadata, sitemaps, robots.txt, JSON-LD schemas, and local landing pages.
- [ ] **Phase 7 — Optimization & QA**: Core Web Vitals audit, cross-device responsiveness, accessibility compliance, and end-to-end testing.
- [ ] **Phase 8 — Launch & Deployment**: Production environment configuration, domain connection, and search console indexation.

---

## 💻 Getting Started (Local Development)

### 1. Clone the Repository
```bash
git clone https://github.com/Jiniel-Alexander/Welderwale-Website.git
cd Welderwale-Website
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

### 4. Run the Development Server
```bash
npm run dev
```

---

## 📬 Contact & Maintainer

- **Business**: [Welderwale](https://welderwale.com/)
- **Repository**: [Jiniel-Alexander/Welderwale-Website](https://github.com/Jiniel-Alexander/Welderwale-Website)
- **Maintainer**: Jinil ([Alexanderjiniel@gmail.com](mailto:Alexanderjiniel@gmail.com))
