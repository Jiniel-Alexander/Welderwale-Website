import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MessageCircle, Wrench, Shield, CheckCircle } from 'lucide-react';
import { getServices, getCompanySettings } from '@/lib/db';
import { ServiceCard } from '@/components/public/ServiceCard';
import { EnquiryForm } from '@/components/public/EnquiryForm';

export const metadata: Metadata = {
  title: 'Metal Fabrication Services Catalog | Welderwale Mumbai & Thane',
  description: 'Complete catalog of 13+ industrial and architectural metal fabrication services in Mumbai, Thane & Bhayandar. Sheds, gates, railings, stairs, pergolas, and custom frames.',
  alternates: {
    canonical: '/services',
  },
};

export default async function ServicesPage() {
  const services = await getServices();
  const company = await getCompanySettings();

  const categories = Array.from(new Set(services.map((s) => s.category)));

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-900 border-b border-slate-800 py-12 md:py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
            Fabrication Catalogue
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-3 tracking-tight">
            Our Metal Fabrication Services
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            From heavy industrial warehouse sheds and pre-engineered buildings to luxury laser-cut gates, SS 316 glass railings, and custom architectural frames.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-slate-300">
            <span className="flex items-center space-x-1.5 bg-slate-950 px-3 py-1.5 rounded-btn border border-slate-800">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>AWS / IS 800 Certified</span>
            </span>
            <span className="flex items-center space-x-1.5 bg-slate-950 px-3 py-1.5 rounded-btn border border-slate-800">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>1.0 mm Laser Precision</span>
            </span>
            <span className="flex items-center space-x-1.5 bg-slate-950 px-3 py-1.5 rounded-btn border border-slate-800">
              <Wrench className="w-3.5 h-3.5 text-brand-500" />
              <span>50 KM Service Radius</span>
            </span>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Columns on Mobile, 3/4 Columns on Tablet & Desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Embedded 3-Step Enquiry Funnel */}
      <section className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
              Custom Requirements
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-2">
              Have a Custom Metal Project in Mind?
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Fill out our 3-step form to receive a detailed itemized estimate and schedule a site measurement.
            </p>
          </div>

          <EnquiryForm services={services} company={company} />
        </div>
      </section>
    </div>
  );
}
