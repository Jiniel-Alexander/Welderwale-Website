import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  MapPin,
  Phone,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Wrench
} from 'lucide-react';
import { getLocations, getLocationBySlug, getCompanySettings, getServices } from '@/lib/db';
import { ServiceCard } from '@/components/public/ServiceCard';
import { EnquiryForm } from '@/components/public/EnquiryForm';

interface LocationPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const locations = await getLocations();
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const loc = await getLocationBySlug(slug);
  if (!loc) return { title: 'Location Not Found' };

  return {
    title: loc.seoTitle || `Metal Fabrication & Welding in ${loc.name} | Welderwale`,
    description: loc.seoDescription || loc.description,
    alternates: {
      canonical: `/locations/${loc.slug}`,
    },
  };
}

export default async function LocationDetailPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = await getLocationBySlug(slug);
  if (!location) notFound();

  const allServices = await getServices();
  const company = await getCompanySettings();

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-slate-900 border-b border-slate-800 py-3 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-2">
          <Link href="/" className="hover:text-brand-400">Home</Link>
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <Link href="/locations" className="hover:text-brand-400">Locations</Link>
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <span className="text-brand-400 font-semibold">{location.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-slate-900 border-b border-slate-800 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase bg-brand-500/20 text-brand-400 border border-brand-500/30">
              <MapPin className="w-3.5 h-3.5" />
              <span>Local Service Coverage • {location.region}</span>
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Metal Fabrication & Welding in {location.name}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {location.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`tel:${company.phone}`}
                className="px-6 py-3.5 rounded-btn bg-brand-500 text-slate-950 font-black text-sm shadow-xl hover:brightness-110 flex items-center space-x-2 transition-all"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call for Fast Site Visit</span>
              </a>
              <a
                href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
                  `Hi Welderwale, I need metal fabrication services in ${location.name}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-btn bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm flex items-center space-x-2 transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Covered List & Local Context */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-8 space-y-10">
            {/* Sub-areas */}
            <div className="bg-slate-900 border border-slate-800 rounded-card p-6 sm:p-8">
              <h2 className="text-xl font-black text-white mb-4">
                Local Areas & Neighborhoods Served in {location.name}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {location.areasServed.map((area) => (
                  <div
                    key={area}
                    className="p-3 rounded-btn bg-slate-950 border border-slate-800/80 text-xs font-semibold text-slate-300 flex items-center space-x-2"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Services for this Location */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-black text-white">
                  Popular Fabrication Services in {location.name}
                </h2>
                <Link href="/services" className="text-xs font-bold text-brand-400 hover:underline">
                  All Services →
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {allServices.slice(0, 6).map((srv) => (
                  <ServiceCard key={srv.id} service={srv} compact />
                ))}
              </div>
            </div>

            {/* Local 3-Step Enquiry Funnel */}
            <div>
              <h2 className="text-2xl font-black text-white mb-4">
                Schedule a Laser Measurement in {location.name}
              </h2>
              <EnquiryForm services={allServices} company={company} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-card p-6 space-y-4">
              <h3 className="text-base font-black text-white">
                Why Choose Welderwale in {location.name}?
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start space-x-2">
                  <span className="text-brand-500 font-bold">•</span>
                  <span><strong>Rapid Mobilization:</strong> Site inspection within 24 to 48 hours.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-brand-500 font-bold">•</span>
                  <span><strong>Zero Travel Surcharge:</strong> Direct service from our Bhayandar fabrication workshop.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-brand-500 font-bold">•</span>
                  <span><strong>Anti-Corrosive Finishes:</strong> Formulated specifically for the humid coastal climate.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
