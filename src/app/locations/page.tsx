import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, MessageCircle, ShieldCheck } from 'lucide-react';
import { getLocations, getCompanySettings } from '@/lib/db';

export const metadata: Metadata = {
  title: 'Service Locations (~50 KM) | Welderwale Mumbai & Thane',
  description: 'Welderwale delivers rapid on-site metal fabrication and welding services across Mumbai, Thane, Bhayandar, Mira Road, Borivali, Kandivali, Vasai, and Kalyan.',
  alternates: {
    canonical: '/locations',
  },
};

export default async function LocationsPage() {
  const locations = await getLocations();
  const company = await getCompanySettings();

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-900 border-b border-slate-800 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
            Local Service Coverage
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-3 tracking-tight">
            Operating Across a ~50 KM Radius
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            From our primary fabrication workshop in Bhayandar, we deploy on-site engineering teams across Mumbai, Thane, and extended suburban corridors for rapid measurements, quotes, and installations.
          </p>
        </div>
      </section>

      {/* Locations Cards Grid */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc) => (
            <Link
              key={loc.id}
              href={`/locations/${loc.slug}`}
              className="group p-6 rounded-card bg-slate-900 border border-slate-800 hover:border-brand-500/60 transition-all duration-300 hover:shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-brand-500" />
                    <h2 className="text-xl font-bold text-white group-hover:text-brand-400 transition-colors">
                      {loc.name}
                    </h2>
                  </div>
                  <span className="text-[11px] font-semibold bg-slate-950 px-2.5 py-1 rounded-btn text-slate-400 border border-slate-800">
                    {loc.region}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                  {loc.description}
                </p>

                {/* Sub areas preview */}
                <div className="mt-4 pt-3 border-t border-slate-800/80">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    Areas Served:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {loc.areasServed.slice(0, 4).map((area) => (
                      <span
                        key={area}
                        className="text-[10px] bg-slate-950/80 text-slate-300 px-2 py-0.5 rounded-btn border border-slate-800"
                      >
                        {area}
                      </span>
                    ))}
                    {loc.areasServed.length > 4 && (
                      <span className="text-[10px] text-brand-400 px-1 py-0.5">
                        +{loc.areasServed.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between text-xs font-bold text-brand-400 group-hover:text-brand-300">
                <span>View Local Services & Map</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
