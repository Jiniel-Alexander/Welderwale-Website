# Welderwale Website — Master Build Specification

## 1. Project Overview

Build a production-ready, mobile-first website for **Welderwale**, a metal fabrication and installation service business.

Website goals:

1. Showcase Welderwale's services and completed work.
2. Generate qualified leads.
3. Make calling the business the primary conversion.
4. Make WhatsApp the secondary conversion.
5. Provide a short, easy enquiry form.
6. Build strong local and service-based SEO.
7. Provide a simple but capable custom CMS/admin panel.
8. Allow non-technical users to manage website content without changing source code.
9. Maintain a consistent professional design system across the entire website.
10. Make the architecture extensible for future services, locations, projects, blogs and pages.

Reference website:
https://welderwale.com/

Do not blindly copy the existing website. Use it only as a source of business/service context where useful. The new website should have a substantially better information architecture, visual hierarchy, UX, performance, SEO and conversion flow.

---

# 2. Business Context

## Business

Welderwale

## Business Type

Metal fabrication and related installation services.

## Primary Service Area

Approximately **50 km radius from Bhayandar**, covering relevant areas of:

- Mumbai
- Thane
- Kalyan
- Dombivli
- Bhayandar
- Mira Road
- Nearby serviceable areas within the operating radius

Do not create fake location claims. Location pages should only be generated for areas actually served.

## Target Customers

- Residential customers
- Individual customers
- Contractors
- Builders
- Architects
- Industrial companies
- Government organizations
- Other businesses

## Primary Conversion Priority

1. **Call**
2. **WhatsApp**
3. **Enquiry form**

The design should make these actions highly visible without becoming intrusive.

---

# 3. Services

Initial service catalogue:

1. Animal Farm Sheds
2. Custom Metal Frames & Installation
3. Garden Pergola
4. Metal/Steel Furniture
5. Metal Sheds
6. Metal Gates
7. Metal Railing
8. Roofing Sheets
9. Shutter
10. Staircase
11. Unipole Structure
12. Window Grill
13. Structural Fabrication

Services must be database-driven and editable from the CMS.

Each service should support:

- Name
- Slug
- Short description
- Full description
- Featured image
- Gallery
- Service category
- Featured/hidden status
- Display order
- SEO title
- SEO description
- OG image
- FAQs
- Related services
- Service areas
- CTA settings

---

# 4. Recommended Technology Stack

Use a modern production-ready stack.

## Frontend

- Next.js
- React
- TypeScript

Prefer the current stable Next.js architecture with server-side rendering/static generation where appropriate.

## Styling

- Tailwind CSS
- CSS variables/design tokens for global theme configuration

## Backend

- Supabase
- PostgreSQL
- Supabase Auth
- Supabase Storage
- Row Level Security

## CMS

Build a custom lightweight hybrid CMS inside the application.

## Deployment

Architecture should be compatible with common modern hosting such as Vercel for the frontend and Supabase for backend/database/storage.

Do not hardcode deployment-specific assumptions.

---

# 5. Critical CMS Requirement

The CMS must be **simple**, not an unnecessarily complicated website builder.

However, it must provide the following capabilities:

### Required

- Create new pages
- Edit existing pages
- Delete/archive pages
- Publish/unpublish pages
- Add sections/layouts
- Remove sections/layouts
- Hide/show sections
- Reorder sections
- Edit text
- Edit images
- Change buttons and links
- Manage services
- Manage projects
- Manage gallery
- Manage testimonials
- Manage FAQs
- Manage locations
- Manage navigation
- Manage SEO
- Change global colours
- Change global fonts
- Manage company information
- Manage contact information
- Manage media
- Manage enquiries/leads

### Important

The CMS should use **controlled reusable components**, not a completely unrestricted drag-and-drop editor.

The admin should be able to assemble pages from approved components without being able to accidentally break the underlying design system.

---

# 6. Hybrid Page Builder

The page builder should allow:

### Add

- Hero
- Hero Slider
- Statistics
- Text + Image
- Services
- Featured Services
- Projects
- Gallery
- Before/After
- Process
- Why Choose Us
- Industries
- Testimonials
- Client Logos
- Certifications
- FAQ
- CTA
- Contact
- Custom content section where appropriate

### Section Controls

Every section should support:

- Edit
- Duplicate
- Hide
- Show
- Delete
- Reorder
- Desktop visibility
- Mobile visibility
- Background
- Spacing
- Alignment
- Section heading
- Optional subtitle

Do not expose excessive styling controls that allow inconsistent layouts.

---

# 7. Global Theme Manager

Create an Admin > Theme section.

## Colours

Allow editing of:

- Primary
- Secondary
- Accent
- Background
- Surface
- Heading text
- Body text
- Muted text
- Border
- Success
- Error

Use CSS variables/design tokens so one change propagates throughout the website.

## Typography

Allow global selection/configuration of:

- Heading font
- Body font
- Button font

And sensible controls for:

- H1
- H2
- H3
- H4
- Body
- Small text
- Buttons

Do not allow arbitrary per-element styling unless necessary.

## Other Global Design Settings

- Container width
- Border radius
- Button radius
- Card radius
- Section spacing
- Global shadow intensity

Changes should preview safely before publishing.

---

# 8. Global Company Settings

Create Admin > Company Settings.

Editable fields:

- Company name
- Logo
- Favicon
- Tagline
- Phone number
- WhatsApp number
- Email
- Address
- Google Maps URL
- Service radius
- Working hours
- Social media links

These values should be reusable throughout the website.

---

# 9. Header

## Desktop

Header should contain:

- Logo
- Home
- Services
- Our Work
- About
- Locations
- Contact
- Call CTA
- WhatsApp CTA

Services and Locations may use dropdown/mega-menu behavior when appropriate.

## Mobile

Use:

- Logo
- Hamburger menu

Mobile navigation should contain:

- Home
- Services
- Our Work
- About
- Locations
- Contact
- Call
- WhatsApp

Also provide a persistent bottom mobile CTA:

**CALL | WHATSAPP**

---

# 10. Hero Section

Use a **full-width hero slider**.

The selected design is:

### Desktop

Left side:

- Service title
- Short description
- Primary CTA
- Secondary CTA

Right side:

- Large service/project image

Example:

SERVICE TITLE

Custom metal fabrication solutions built for your requirements.

[ View Service ] [ Get a Quote ]

Right side: service image

### Slider

Hero slides should be CMS-driven.

Each slide must support:

- Title
- Subtitle/description
- Image
- Related service
- Primary CTA
- Secondary CTA
- Display order
- Active/inactive

The text and image must change together based on the selected service.

Example slides:

- Structural Fabrication
- Metal Gates
- Metal Sheds
- Staircases
- Custom Metal Frames
- Other featured services

### Mobile

Keep the same concept.

Stack:

1. Service title
2. Description
3. CTA
4. Service image
5. Slider indicators

Do not create an unrelated mobile hero design.

---

# 11. Statistics Strip

Immediately below the hero.

Initial content:

- 10+ Years Experience
- 500+ Projects
- 100+ Clients
- 50 KM Service Area

These values must be editable from CMS.

Each statistic should support:

- Number
- Label
- Optional icon
- Display order
- Active/inactive

Do not present unverified statistics as factual if they are not confirmed before launch.

---

# 12. Homepage Structure

Recommended homepage order:

1. Header
2. Hero Slider
3. Statistics
4. About/Business Introduction
5. Featured Services
6. Why Choose Welderwale
7. Our Work / Featured Projects
8. How We Work
9. Industries / Applications
10. Gallery
11. Testimonials
12. FAQ
13. 3-Step Enquiry CTA/Form
14. Contact CTA
15. Footer

The exact sections should be configurable through the CMS.

---

# 13. Featured Services

Homepage should visually emphasize services.

## Mobile requirement

Show **2 service cards per row**.

Show **2 rows** on the homepage.

Therefore:

**4 featured service cards total.**

Example:

[Image] [Image]

Metal Gates | Staircase

[Image] [Image]

Metal Sheds | Window Grill

Then:

**Other Services →**

This links to the full Services page.

The cards should primarily focus on:

- Strong service image
- Service title
- Click/tap interaction

Do not overload the cards with paragraphs.

## Desktop

Use an appropriate 3 or 4-column grid depending on viewport width.

---

# 14. Services Page

Create:

`/services/`

Display all active services.

Use:

- Service category/filter if useful
- Visual service cards
- Search only if the service catalogue becomes large

Every service card links to its dedicated service page.

---

# 15. Service Detail Pages

Every important service should have its own SEO-friendly page.

Example:

`/services/metal-gates/`

Recommended structure:

1. Service hero
2. Service introduction
3. What we provide
4. Types/options
5. Applications
6. Materials/specifications where relevant
7. Process
8. Related projects
9. Gallery
10. Why choose Welderwale
11. FAQ
12. CTA
13. Related services

Content must be CMS-editable.

---

# 16. Projects / Portfolio

Create:

`/our-work/`

Projects must be database-driven.

Each project supports:

- Project name
- Service
- Category
- Location
- Client, if publishable
- Description
- Scope
- Completion date
- Featured image
- Gallery
- Before images
- After images
- Featured status
- SEO metadata

Project cards should be highly visual.

---

# 17. Project Detail Page

Recommended:

1. Project hero
2. Main project image
3. Project overview
4. Client/location/project type
5. Scope of work
6. Project gallery
7. Before/after where available
8. Related service
9. Related projects
10. CTA

---

# 18. Gallery

Create:

`/gallery/`

Gallery should support filtering by:

- Service
- Project
- Category

Potential categories:

- Workshop
- Fabrication
- Installation
- Completed Work
- Machinery
- Site Work
- Team

Images should be optimized automatically.

---

# 19. Image Management

Use Supabase Storage.

Create logical storage areas such as:

- services
- projects
- gallery
- team
- branding
- documents
- enquiry-attachments

The media library should store:

- File
- Alt text
- Caption
- Description
- Category
- Dimensions
- Uploaded date
- Usage

Use responsive image sizes.

Prefer modern formats such as WebP/AVIF where supported.

---

# 20. Enquiry Form

The enquiry form must be a **3-step form**.

Do NOT create a long single-page form.

## Step 1 — Requirement

Fields:

- Service
- Location
- Exact area

The Exact Area field must be dependent on the selected Location.

Example:

Location: Mumbai

Area:

- Borivali
- Kandivali
- Malad
- Goregaon
- etc.

Only display valid serviceable areas.

## Step 2 — Work Details

Fields:

- What exact work needs to be done?
- Attachment

Attachment should accept suitable files such as:

- JPG
- JPEG
- PNG
- WEBP
- PDF

Apply a reasonable file-size limit.

## Step 3 — Contact

Fields:

- Name
- Phone number
- Email

Then:

**Submit Enquiry**

After submission show a clear success state with:

- Call
- WhatsApp

---

# 21. Enquiry Security

Do not trust client-side validation.

Validate uploads server-side.

Implement:

- MIME validation
- File extension validation
- File size limit
- Image dimension validation
- Filename sanitization
- Randomized storage filenames
- Authentication-independent secure upload flow
- Malware/virus scanning
- Rate limiting
- CAPTCHA/Cloudflare Turnstile
- Honeypot
- Server-side input validation
- Database validation
- Protection against executable uploads

Do not allow executable or server-side script files.

Enquiry attachments should not be directly executable.

Prefer private storage and controlled access for sensitive attachments.

---

# 22. Leads Admin

Create Admin > Leads.

Fields:

- Lead ID
- Date
- Name
- Phone
- Email
- Service
- Location
- Area
- Requirement
- Attachment
- Source
- Status
- Notes

Statuses:

- New
- Contacted
- Site Visit
- Quotation
- Won
- Lost
- Closed

Allow admin to update status and add notes.

---

# 23. CTA Tracking

Track:

- Call clicks
- WhatsApp clicks
- Enquiry form starts
- Enquiry form step completion
- Enquiry submissions
- Service page views
- Project page views

Capture useful attribution where technically/legal appropriate:

- Page
- Service
- Location
- UTM parameters
- Referrer
- Device category

Do not collect unnecessary personal information.

---

# 24. SEO Architecture

SEO is a primary objective.

The site should support:

### Service SEO

Each service gets a dedicated page.

### Local SEO

Create useful location pages only where there is genuine service coverage and unique content.

### Industry SEO

Where appropriate create industry/application pages.

### Project SEO

Project pages can target project/service/location combinations where legitimate.

### Content SEO

Provide a future blog/resources architecture.

---

# 25. SEO CMS

Every indexable page must support:

- SEO title
- Meta description
- URL slug
- Canonical URL
- OG title
- OG description
- OG image
- Index/noindex
- Follow/nofollow
- Schema configuration where appropriate

Automatically generate:

- XML sitemap
- Robots.txt
- Canonical URLs
- Breadcrumbs

Use structured data where appropriate:

- LocalBusiness
- Service
- BreadcrumbList
- FAQPage
- Article
- Organization

Do not generate misleading structured data.

---

# 26. Location Architecture

Potential structure:

`/locations/`

Examples may include:

- Mumbai
- Thane
- Bhayandar
- Mira Road
- Borivali
- Kandivali
- Vasai
- Naigaon
- Kalyan
- Dombivli

Only publish locations actually served.

Each location page should contain useful local information and relevant services.

Do not create hundreds of thin doorway pages.

---

# 27. Navigation

Recommended:

Home
Services
Our Work
About
Locations
Contact

Header should also provide:

CALL
WHATSAPP

Footer should contain expanded navigation.

---

# 28. Footer

Footer sections:

### Company

- About
- Our Work
- Contact

### Services

Dynamic list of active services.

### Locations

Dynamic list of active service locations.

### Resources

- FAQ
- Blog
- Sitemap

### Contact

- Phone
- WhatsApp
- Email
- Address
- Working hours

### Legal

- Privacy Policy
- Terms
- Cookie information where required

---

# 29. Responsive Design

The website must be **mobile-first**.

Do not build desktop first and merely shrink it.

Every component must define responsive behavior.

## Mobile

- 2-column service cards
- Single-column forms
- Sticky Call/WhatsApp CTA
- Compact navigation
- Stacked hero
- Swipeable carousels where appropriate

## Desktop

- Full navigation
- Split hero
- 3/4-column service grids
- Multi-column forms where useful
- Wider project galleries
- Expanded footer

---

# 30. Performance

Prioritize:

- Server-side rendering/static generation where appropriate
- Image optimization
- Lazy loading
- Responsive images
- WebP/AVIF
- Minimal JavaScript
- Code splitting
- Proper caching
- CDN delivery
- Font optimization
- Avoid excessive animation

Target strong Core Web Vitals.

Do not sacrifice performance for unnecessary visual effects.

---

# 31. Accessibility

Implement:

- Semantic HTML
- Proper heading hierarchy
- Keyboard navigation
- Focus states
- Alt text
- Accessible forms
- Labels
- Error messages
- ARIA only where necessary
- Adequate contrast
- Reduced-motion support

---

# 32. CMS Permissions

Initially support:

### Super Admin

Everything.

### Content Manager

- Pages
- Services
- Projects
- Gallery
- Testimonials
- FAQs
- Media

### Lead Manager

- Leads
- Enquiries
- Notes/status

### SEO Manager

- SEO fields
- Locations
- Pages
- Metadata

Use Supabase Auth + role-based access.

---

# 33. Database Architecture

Design normalized Supabase/PostgreSQL tables around entities such as:

- users
- roles
- pages
- page_sections
- services
- service_categories
- projects
- project_images
- gallery_images
- testimonials
- faqs
- locations
- industries
- hero_slides
- statistics
- navigation_items
- media
- enquiries
- enquiry_attachments
- site_settings
- theme_settings
- seo_metadata
- redirects
- audit_logs

Use relationships rather than duplicating data.

---

# 34. Publishing Model

CMS content should have:

- Draft
- Published
- Archived

For important changes, support:

- Save draft
- Preview
- Publish

Do not expose draft content publicly.

---

# 35. URL / Slug Rules

Use clean URLs.

Examples:

`/services/metal-gates/`

`/services/structural-fabrication/`

`/our-work/project-name/`

`/locations/thane/`

`/industries/construction/`

Avoid query-heavy URLs for indexable pages.

---

# 36. Redirect Management

Admin should eventually be able to create:

Old URL → New URL

with:

- 301
- 302

This is useful when service names/slugs change.

---

# 37. Error / Utility Pages

Build:

- 404 page
- 500/error state
- Empty search result
- Empty project state
- Form error state
- Form success state
- Upload error state
- Loading states

These should be designed rather than left to browser defaults.

---

# 38. Security

Implement:

- Supabase Row Level Security
- Secure authentication
- Role-based access
- Server-side validation
- Input sanitization
- CSRF-safe patterns where relevant
- Rate limiting
- CAPTCHA
- Secure file uploads
- Private storage for enquiry attachments
- Audit logs for admin changes
- No secrets in frontend code
- Environment variables
- Secure API routes
- Protection against unauthorized CMS modification

Never expose Supabase service-role credentials to the browser.

---

# 39. Admin Navigation

Recommended:

Dashboard

Website
- Pages
- Navigation
- Hero Slides
- Statistics

Services
- All Services
- Categories

Portfolio
- Projects
- Gallery

Content
- Testimonials
- FAQs
- Industries
- Locations

Leads
- Enquiries

SEO
- SEO Manager
- Redirects
- Sitemap settings

Media
- Media Library

Appearance
- Theme
- Fonts
- Colours

Settings
- Company
- Contact
- Social
- Users
- Roles

---

# 40. Design Philosophy

The visual style should communicate:

- Professional
- Industrial
- Reliable
- Strong
- Modern
- Premium
- Trustworthy

Avoid making the website look like:

- A generic construction template
- An old-fashioned fabrication website
- A stock-photo-heavy site
- A cluttered brochure

The actual work should be the visual focus.

Use large project/service imagery wherever possible.

---

# 41. Content Editing Philosophy

Admin should be able to change:

### Text

Yes.

### Images

Yes.

### Buttons

Yes.

### Sections

Add/remove/hide/reorder.

### Pages

Create/edit/archive.

### Services

Create/edit/archive.

### Projects

Create/edit/archive.

### SEO

Yes.

### Global colours

Yes.

### Global fonts

Yes.

### Company information

Yes.

### Navigation

Yes.

The admin should NOT need developer intervention for routine content changes.

---

# 42. What Admin Should NOT Be Able To Break

The CMS should protect:

- Responsive grid system
- Core typography hierarchy
- Button accessibility
- Global spacing rules
- Navigation structure
- Security
- SEO technical implementation
- Database relationships
- Authentication
- File security
- Core conversion tracking

The CMS controls **content and approved layout options**, not the underlying application architecture.

---

# 43. Development Order

Do not build everything simultaneously.

Recommended phases:

## Phase 1 — Foundation

- Project setup
- Next.js
- TypeScript
- Tailwind
- Supabase
- Environment configuration
- Design tokens
- Authentication

## Phase 2 — Database

Build schema and relationships.

## Phase 3 — CMS

Build:

- Dashboard
- Pages
- Sections
- Services
- Projects
- Media
- Theme
- Settings

## Phase 4 — Public Website

Build:

- Header
- Hero
- Statistics
- Services
- Projects
- Gallery
- About
- Process
- Testimonials
- FAQ
- CTA
- Footer

## Phase 5 — Lead System

Build:

- 3-step form
- File upload
- Validation
- Security
- Lead dashboard
- Status management

## Phase 6 — SEO

Implement:

- Metadata
- Sitemap
- Robots
- Structured data
- Service pages
- Location architecture
- Canonicals
- Redirects

## Phase 7 — Optimization

- Performance
- Accessibility
- Mobile QA
- Desktop QA
- Security testing
- Form testing
- SEO validation

## Phase 8 — Launch

- Production environment
- Domain
- Analytics
- Search Console
- Sitemap submission
- Final QA

---

# 44. Important Development Rule

Do not start by generating a huge amount of code.

First establish:

1. Database schema
2. Design system
3. Component architecture
4. CMS architecture
5. Routing architecture
6. Page templates
7. Security model

Then implement the website.

This will reduce rework significantly.

---

# 45. First Build Target

The first implementation milestone should be:

### Public

- Header
- Mobile navigation
- Hero slider
- Statistics
- Featured services
- CTA
- Footer

### Admin

- Authentication
- Dashboard shell
- Theme settings
- Company settings
- Hero slide management
- Service management
- Page management

Once these work end-to-end with Supabase, expand into Projects, Gallery, Leads, SEO and other modules.

---

# 46. Acceptance Criteria

The website is not considered complete merely because pages render.

The following must work:

- Admin can log in.
- Admin can create a page.
- Admin can edit page text.
- Admin can hide a section.
- Admin can reorder sections.
- Admin can upload/change images.
- Admin can create/edit a service.
- Service automatically appears in service listings.
- Admin can change global colours.
- Admin can change global fonts.
- Admin can edit hero slides.
- Hero text/image changes dynamically.
- Admin can edit statistics.
- Admin can create projects.
- Admin can manage gallery.
- Admin can manage SEO metadata.
- Admin can receive enquiries.
- Admin can view leads.
- File uploads are securely validated.
- Call CTA works.
- WhatsApp CTA works.
- Website is responsive.
- Mobile shows 2 service cards per row.
- Website has clean URLs.
- Sitemap works.
- Robots.txt works.
- Metadata works.
- No draft CMS content is publicly exposed.
- Admin-only functionality is protected.
- Core pages load quickly.

---

# 47. Final Product Vision

Welderwale should ultimately function as:

**A modern fabrication website + visual portfolio + local SEO engine + lead-generation system + lightweight business CMS.**

The website should not be treated as a static brochure.

The architecture should allow Welderwale to grow from:

13 services

to:

50+ services

and from:

a handful of projects

to:

hundreds of projects

without requiring the frontend architecture to be rebuilt.

---

# 48. Immediate Task for Antigravity

Before writing the full application, create a technical implementation plan covering:

1. Project structure
2. Supabase database schema
3. Supabase storage buckets
4. Authentication and roles
5. CMS data model
6. Page builder data model
7. Design token system
8. Component architecture
9. Public routes
10. Admin routes
11. API/server actions
12. Security model
13. SEO architecture
14. Image optimization strategy
15. Enquiry/file upload architecture

Present that plan for review before making irreversible architectural decisions.

Then begin implementation in phases described above.

---

## Important

The website must be:

**Mobile-first + SEO-first + CMS-driven + conversion-focused + visually driven + secure + scalable.**

Primary CTA:

**CALL**

Secondary:

**WHATSAPP**

Tertiary:

**ENQUIRE**

The CMS must be simple enough for a non-developer to use while providing:

**Create pages + edit text/images + add/remove/hide/reorder layouts + manage services/projects + manage SEO + change global colours/fonts + manage company information.**
