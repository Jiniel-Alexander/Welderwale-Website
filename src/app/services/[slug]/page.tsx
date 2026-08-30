import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Layers,
  Wrench,
  HelpCircle,
  MapPin
} from 'lucide-react';
import {
  getServices,
  getServiceBySlug,
  getCompanySettings,
  getProjects
} from '@/lib/db';
import { EnquiryForm } from '@/components/public/EnquiryForm';
import { FaqAccordion } from '@/components/public/FaqAccordion';
import { StructuredData } from '@/components/public/StructuredData';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: service.seoTitle || `${service.name} Fabrication & Installation | Welderwale`,
    description: service.seoDescription || service.shortDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.seoTitle || service.name,
      description: service.shortDescription,
      images: [{ url: service.featuredImage }],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) notFound();

  const allServices = await getServices();
  const company = await getCompanySettings();
  const allProjects = await getProjects();
  const relatedProjects = allProjects.filter((p) => p.serviceSlug === service.slug || service.relatedServices?.includes(p.serviceSlug));

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <StructuredData company={company} service={service} faqs={service.faqs} />

      {/* Breadcrumb Navigation */}
      <div className="bg-slate-900 border-b border-slate-800 py-3 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-2">
          <Link href="/" className="hover:text-brand-400">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <Link href="/services" className="hover:text-brand-400">Services</Link>
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <span className="text-brand-400 font-semibold">{service.name}</span>
        </div>
      </div>

      {/* Service Hero Section */}
      <section className="bg-slate-900 border-b border-slate-800 py-12 md:py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Text & Key CTAs */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-500/20 text-brand-400 border border-brand-500/30 uppercase tracking-wider">
                  {service.category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                  📍 Mumbai, Thane & Bhayandar ~50km
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                {service.name}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {service.shortDescription}
              </p>

              {/* Instant Conversion CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`tel:${company.phone}`}
                  className="px-6 py-3.5 rounded-btn bg-brand-500 text-slate-950 font-black text-sm shadow-xl hover:brightness-110 flex items-center space-x-2 transition-all"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call {company.phoneDisplay}</span>
                </a>
                <a
                  href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
                    `Hi Welderwale, I am interested in ${service.name}. Please share details and pricing.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-btn bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm flex items-center space-x-2 transition-colors shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <div className="flex items-center space-x-4 pt-2 text-xs font-medium text-slate-400">
                <span className="flex items-center space-x-1.5 text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>100% Anti-Rust Guarantee</span>
                </span>
                <span>•</span>
                <span>Free On-Site Laser Measurement</span>
              </div>
            </div>

            {/* Right: Featured Hero Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-card overflow-hidden border border-slate-800 shadow-2xl bg-slate-950">
                <Image
                  src={service.featuredImage}
                  alt={service.name}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-sm p-3 rounded-btn border border-slate-800 text-xs font-semibold text-slate-200">
                  Certified Fabrication & On-Site Installation
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* 1. Full Description */}
            <section className="space-y-4">
              <h2 className="text-2xl font-black text-white tracking-tight border-b border-slate-800 pb-3">
                Overview & Engineering Capability
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {service.fullDescription}
              </p>
            </section>

            {/* 2. Technical Specifications */}
            {service.specifications && service.specifications.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-2xl font-black text-white tracking-tight border-b border-slate-800 pb-3 flex items-center space-x-2">
                  <Layers className="w-5 h-5 text-brand-500" />
                  <span>Technical Specifications & Standards</span>
                </h2>
                <div className="bg-slate-900 border border-slate-800 rounded-card overflow-hidden">
                  <div className="divide-y divide-slate-800">
                    {service.specifications.map((spec, idx) => (
                      <div key={idx} className="grid grid-cols-1 sm:grid-cols-3 p-4 text-xs sm:text-sm">
                        <div className="font-bold text-brand-400 sm:col-span-1">{spec.label}</div>
                        <div className="text-slate-300 sm:col-span-2 mt-1 sm:mt-0">{spec.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* 3. Types & Design Options */}
            {service.options && service.options.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-2xl font-black text-white tracking-tight border-b border-slate-800 pb-3">
                  Available Types & Custom Options
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.options.map((opt, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-card bg-slate-900 border border-slate-800 hover:border-brand-500/50 transition-colors"
                    >
                      <h3 className="text-base font-bold text-white mb-2 flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                        <span>{opt.title}</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {opt.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 4. Engineering & Installation Process */}
            {service.process && service.process.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-2xl font-black text-white tracking-tight border-b border-slate-800 pb-3">
                  Fabrication & Installation Workflow
                </h2>
                <div className="space-y-3">
                  {service.process.map((step) => (
                    <div
                      key={step.step}
                      className="p-4 sm:p-5 rounded-card bg-slate-900 border border-slate-800 flex items-start space-x-4"
                    >
                      <div className="w-10 h-10 rounded-btn bg-brand-500/20 border border-brand-500/40 text-brand-400 flex items-center justify-center font-black shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 5. Service FAQs */}
            {service.faqs && service.faqs.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-2xl font-black text-white tracking-tight border-b border-slate-800 pb-3">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx} className="p-4 rounded-card bg-slate-900 border border-slate-800">
                      <h3 className="text-sm sm:text-base font-bold text-white mb-2 flex items-center space-x-2">
                        <HelpCircle className="w-4 h-4 text-brand-500 shrink-0" />
                        <span>{faq.question}</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-6">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 6. Embedded 3-Step Enquiry Funnel */}
            <section className="pt-6">
              <h2 className="text-2xl font-black text-white tracking-tight mb-4">
                Get an Estimate for {service.name}
              </h2>
              <EnquiryForm
                services={allServices}
                company={company}
                preselectedService={service.name}
              />
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-card p-6 shadow-xl space-y-4">
              <h3 className="text-lg font-black text-white flex items-center space-x-2">
                <Wrench className="w-5 h-5 text-brand-500" />
                <span>Need Instant Assistance?</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Our site engineers provide rapid 24–48 hr measurements and transparent quotes across Mumbai, Thane, and Bhayandar.
              </p>
              <div className="space-y-2.5 pt-2">
                <a
                  href={`tel:${company.phone}`}
                  className="w-full py-3 px-4 rounded-btn bg-brand-500 text-slate-950 font-bold text-xs flex items-center justify-center space-x-2 shadow-md hover:brightness-110"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call: {company.phoneDisplay}</span>
                </a>
                <a
                  href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
                    `Hi Welderwale, I need immediate assistance for ${service.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-btn bg-emerald-600 text-white font-semibold text-xs flex items-center justify-center space-x-2 hover:bg-emerald-500"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Service Areas Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-card p-6 space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-brand-500" />
                <span>Service Coverage (~50 KM)</span>
              </h3>
              <div className="flex flex-wrap gap-1.5 text-[11px] font-medium text-slate-300">
                {['Bhayandar', 'Mira Road', 'Borivali', 'Kandivali', 'Malad', 'Andheri', 'Thane', 'Vasai', 'Kalyan', 'Dombivli'].map((area) => (
                  <span key={area} className="bg-slate-950 px-2.5 py-1 rounded-btn border border-slate-800">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Other Services Navigation */}
            <div className="bg-slate-900 border border-slate-800 rounded-card p-6 space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Other Metal Services
              </h3>
              <div className="space-y-1.5 text-xs">
                {allServices
                  .filter((s) => s.id !== service.id)
                  .map((other) => (
                    <Link
                      key={other.id}
                      href={`/services/${other.slug}`}
                      className="block p-2 rounded-btn hover:bg-slate-800 text-slate-300 hover:text-brand-400 transition-colors"
                    >
                      • {other.name}
                    </Link>
                  ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
