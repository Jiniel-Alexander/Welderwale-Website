import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Award, ShieldCheck, Crosshair, Clock, Phone, MessageCircle, Wrench, CheckCircle } from 'lucide-react';
import { getCompanySettings, getStatistics } from '@/lib/db';
import { StatsStrip } from '@/components/public/StatsStrip';

export const metadata: Metadata = {
  title: 'About Us | Welderwale Metal Fabrication Workshop & Engineers',
  description: 'Learn about Welderwale, a leading metal fabrication and structural steel engineering specialist in Bhayandar serving Mumbai, Thane and 50 km radius.',
  alternates: {
    canonical: '/about',
  },
};

export default async function AboutPage() {
  const company = await getCompanySettings();
  const stats = await getStatistics();

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-900 border-b border-slate-800 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
            About Welderwale
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-3 tracking-tight">
            Precision Metal Fabrication & Structural Engineering
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Founded with a commitment to uncompromising steel quality, certified welding, and honest pricing, Welderwale serves residential, commercial, and heavy industrial clients across Mumbai, Thane, and Bhayandar.
          </p>
        </div>
      </section>

      {/* Stats */}
      <StatsStrip stats={stats} />

      {/* Workshop Narrative */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-400">
              Our Workshop & Heritage
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
              10+ Years of Crafting Steel with 1mm Tolerance Accuracy
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Based in our heavy fabrication facility in Bhayandar East, Welderwale operates CNC plasma cutters, high-precision miter saws, heavy hydraulic plate shears, and multi-process TIG/MIG welding rigs.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              We believe that true structural durability requires no shortcuts. Every weld bead is inspected for zero porosity, every truss is checked against STAAD.Pro load calculations, and all exterior steel receives multi-stage anti-corrosion chemical treatments designed for the coastal Mumbai climate.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-btn bg-slate-900 border border-slate-800 text-xs font-semibold flex items-center space-x-2 text-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>AWS D1.1 Certified Welders</span>
              </div>
              <div className="p-3.5 rounded-btn bg-slate-900 border border-slate-800 text-xs font-semibold flex items-center space-x-2 text-slate-200">
                <Crosshair className="w-4 h-4 text-brand-500 shrink-0" />
                <span>1.0 mm Laser Tolerance</span>
              </div>
              <div className="p-3.5 rounded-btn bg-slate-900 border border-slate-800 text-xs font-semibold flex items-center space-x-2 text-slate-200">
                <Award className="w-4 h-4 text-brand-500 shrink-0" />
                <span>500+ Projects Completed</span>
              </div>
              <div className="p-3.5 rounded-btn bg-slate-900 border border-slate-800 text-xs font-semibold flex items-center space-x-2 text-slate-200">
                <Clock className="w-4 h-4 text-brand-500 shrink-0" />
                <span>On-Time Handover Guarantee</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-card overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
              <Image
                src="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80"
                alt="Welderwale Workshop Machinery & Team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
          </div>

        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-12 bg-slate-900 border-t border-slate-800 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl sm:text-2xl font-black text-white">
            Ready to Discuss Your Project with Welderwale?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Schedule a site visit in Mumbai, Thane, or Bhayandar with our senior engineering team.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${company.phone}`}
              className="px-6 py-3 rounded-btn bg-brand-500 hover:brightness-110 text-slate-950 font-bold text-xs shadow-lg transition-all flex items-center space-x-2"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call: {company.phoneDisplay}</span>
            </a>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-btn bg-slate-950 border border-slate-800 hover:bg-slate-800 text-white font-semibold text-xs shadow-md transition-colors"
            >
              Submit Online Enquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
