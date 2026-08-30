import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone, MessageCircle, Wrench, Shield, CheckCircle } from 'lucide-react';
import {
  getHeroSlides,
  getStatistics,
  getFeaturedServices,
  getFeaturedProjects,
  getTestimonials,
  getFaqs,
  getCompanySettings,
  getServices,
  getGalleryItems,
} from '@/lib/db';
import { HeroSlider } from '@/components/public/HeroSlider';
import { StatsStrip } from '@/components/public/StatsStrip';
import { ServiceCard } from '@/components/public/ServiceCard';
import { BeforeAfterSlider } from '@/components/public/BeforeAfterSlider';
import { ProcessWorkflow } from '@/components/public/ProcessWorkflow';
import { WhyChooseUs } from '@/components/public/WhyChooseUs';
import { Testimonials } from '@/components/public/Testimonials';
import { FaqAccordion } from '@/components/public/FaqAccordion';
import { EnquiryForm } from '@/components/public/EnquiryForm';
import { StructuredData } from '@/components/public/StructuredData';

export default async function HomePage() {
  const slides = await getHeroSlides();
  const stats = await getStatistics();
  const featuredServices = await getFeaturedServices();
  const allServices = await getServices();
  const featuredProjects = await getFeaturedProjects();
  const testimonials = await getTestimonials();
  const faqs = await getFaqs();
  const company = await getCompanySettings();
  const gallery = await getGalleryItems();

  const highlightProject = featuredProjects[0] || null;

  return (
    <>
      <StructuredData company={company} faqs={faqs} />

      {/* 1. Dynamic Hero Slider */}
      <HeroSlider slides={slides} company={company} />

      {/* 2. Live Statistics Strip */}
      <StatsStrip stats={stats} />

      {/* 3. About / Business Introduction */}
      <section className="py-16 md:py-24 bg-slate-900 text-white relative border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Col Image Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-card overflow-hidden border border-slate-800 shadow-2xl bg-slate-950">
                <Image
                  src="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80"
                  alt="Welderwale Metal Fabrication Workshop"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md p-3.5 rounded-btn border border-slate-700/60">
                  <div className="text-xs font-bold text-white flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-brand-500" />
                    <span>State-of-the-Art Workshop in Bhayandar</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    CNC Plasma, TIG/MIG stations, and heavy plate bending machinery
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col Narrative */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
                About Welderwale
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                Industrial Strength Meets Architectural Elegance
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Headquartered in Bhayandar and operating across a 50 km radius covering Mumbai, Thane, Mira Road, Vasai, and Kalyan, <strong>Welderwale</strong> is a premier metal fabrication contractor delivering structural steel solutions, pre-engineered buildings, and bespoke architectural metalcraft.
              </p>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Whether you need a 15,000 sq ft industrial factory shed, an automated laser-cut bungalow gate, SS 316 glass balustrades, or a luxury terrace pergola, our AWS & IS certified engineering teams guarantee 1mm tolerances, anti-rust longevity, and on-time delivery.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="flex items-center space-x-2 text-xs font-semibold text-slate-200">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Certified Welders (AWS/IS)</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-semibold text-slate-200">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>24–48 Hr Site Measurement</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-semibold text-slate-200">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Anti-Rust Coastal Protection</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-semibold text-slate-200">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Transparent Itemized Pricing</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Link
                  href="/about"
                  className="px-5 py-2.5 rounded-btn bg-brand-500 hover:brightness-110 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center space-x-1.5"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href={`tel:${company.phone}`}
                  className="px-4 py-2.5 rounded-btn bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700 transition-colors flex items-center space-x-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-500 fill-brand-500" />
                  <span>Talk with Engineer</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Featured Services (Mobile: STRICTLY 2 cards per row; Desktop: 4 cols) */}
      <section className="py-16 md:py-24 bg-slate-950 text-white relative border-b border-slate-800" aria-label="Featured Services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
                Core Offerings
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mt-3 tracking-tight">
                Featured Metal Fabrication Services
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                Tailored solutions for factories, warehouses, residential complexes, and luxury villas.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center space-x-2 text-sm font-bold text-brand-400 hover:text-brand-300 self-start md:self-auto group"
            >
              <span>View All 13 Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 2-Columns on Mobile, 4-Columns on Desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Bottom link button for mobile */}
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/services"
              className="w-full inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-btn bg-slate-900 border border-slate-800 text-brand-400 font-bold text-xs shadow-md"
            >
              <span>Explore All 13 Services Catalog →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Welderwale */}
      <WhyChooseUs />

      {/* 6. Featured Project & Interactive Before/After Showcase */}
      <section className="py-16 md:py-24 bg-slate-950 text-white relative border-b border-slate-800" aria-label="Featured Project Showcase">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
              Proven Results
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mt-3 tracking-tight">
              Featured Case Studies & Before/After
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
              Real structural transformations delivered on-time and within budget across Mumbai & Thane.
            </p>
          </div>

          {highlightProject && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-slate-900 border border-slate-800 rounded-card p-6 sm:p-8 lg:p-10 shadow-2xl">
              {/* Left Column: Interactive Before / After Slider */}
              <div className="lg:col-span-7">
                {highlightProject.beforeImage && highlightProject.afterImage ? (
                  <BeforeAfterSlider
                    beforeImage={highlightProject.beforeImage}
                    afterImage={highlightProject.afterImage}
                    title={highlightProject.title}
                  />
                ) : (
                  <div className="relative aspect-[16/10] rounded-card overflow-hidden bg-slate-950">
                    <Image
                      src={highlightProject.featuredImage}
                      alt={highlightProject.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="text-center text-xs text-slate-500 mt-2 italic">
                  Drag the slider left and right to inspect the before vs completed installation
                </div>
              </div>

              {/* Right Column: Project Highlights */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-1 rounded-btn text-[11px] font-bold bg-brand-500/20 text-brand-400 border border-brand-500/30 uppercase">
                    {highlightProject.category}
                  </span>
                  <span className="text-xs text-slate-400">📍 {highlightProject.location}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                  {highlightProject.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {highlightProject.description}
                </p>

                <div className="space-y-1.5 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Scope of Work:
                  </div>
                  {highlightProject.scope.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                      <span className="text-brand-500 font-bold">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center space-x-3">
                  <Link
                    href={`/our-work/${highlightProject.slug}`}
                    className="px-5 py-2.5 rounded-btn bg-brand-500 text-slate-950 font-bold text-xs shadow-md hover:brightness-110 transition-all flex items-center space-x-1.5"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/our-work"
                    className="text-xs font-semibold text-slate-400 hover:text-white"
                  >
                    View All Projects →
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 7. How We Work (4-Step Process) */}
      <ProcessWorkflow />

      {/* 8. Gallery Highlights */}
      <section className="py-16 md:py-24 bg-slate-900 text-white relative border-b border-slate-800" aria-label="Workshop & Fabrication Gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
                Visual Showcase
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mt-3 tracking-tight">
                Workshop & On-Site Gallery
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                Inspecting steel preparations, certified TIG/MIG welding, and finished structures.
              </p>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center space-x-2 text-sm font-bold text-brand-400 hover:text-brand-300 self-start md:self-auto group"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4">
            {gallery.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square rounded-card overflow-hidden border border-slate-800 bg-slate-950 hover:border-brand-500/60 transition-all shadow-lg"
              >
                <Image
                  src={item.image}
                  alt={item.altText}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end">
                  <span className="text-[10px] font-bold text-brand-400 uppercase">{item.category}</span>
                  <p className="text-xs font-semibold text-white line-clamp-1">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Verified Testimonials */}
      <Testimonials testimonials={testimonials} />

      {/* 10. Frequently Asked Questions */}
      <FaqAccordion faqs={faqs} />

      {/* 11. Smart 3-Step Multi-Stage Enquiry Funnel */}
      <section id="enquiry-section" className="py-16 md:py-24 bg-slate-950 text-white relative border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
              Quick Estimate
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mt-3 tracking-tight">
              Get an Itemized Quotation in 3 Easy Steps
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
              Select your service, choose your location and area, describe your requirements, and upload photos for an instant accurate estimate.
            </p>
          </div>

          <EnquiryForm services={allServices} company={company} />
        </div>
      </section>

      {/* 12. Final High-Intent Direct Contact CTA Banner */}
      <section className="py-12 bg-gradient-to-r from-amber-600 via-brand-500 to-amber-500 text-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950">
              Prefer to Discuss Directly with an Engineer?
            </h3>
            <p className="text-sm font-semibold text-slate-900 mt-1">
              Call us directly or WhatsApp your drawings for instant feedback and rapid site visit bookings.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <a
              href={`tel:${company.phone}`}
              className="px-6 py-3.5 rounded-btn bg-slate-950 hover:bg-slate-900 text-white font-black text-sm shadow-xl flex items-center space-x-2 transition-transform hover:scale-105"
            >
              <Phone className="w-4 h-4 fill-current text-brand-500" />
              <span>Call Now: {company.phoneDisplay}</span>
            </a>
            <a
              href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hi Welderwale, I need immediate quotation for fabrication.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-btn bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm shadow-lg flex items-center space-x-2 transition-transform hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
