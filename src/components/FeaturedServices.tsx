import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { allServices } from '@/data/services';

export default function FeaturedServices() {
  const featured = allServices.filter((s) => s.isFeatured);

  return (
    <section className="py-12 md:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-2">
              <ShieldCheck className="w-3.5 h-3.5" /> High Precision Fabrication
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              Featured Metal Services
            </h2>
            <p className="text-sm md:text-base text-slate-600 mt-1 max-w-2xl">
              Engineered with certified structural welding standards for residential, architectural, and industrial sites across Mumbai & Thane.
            </p>
          </div>
          <Link
            href="/services"
            className="hidden md:inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 transition"
          >
            Explore all 13 services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Master Requirement: Exactly 2 cards per row on mobile, 4-column on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {featured.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group relative flex flex-col bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img
                  src={service.featuredImage}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-2 left-2 bg-amber-500 text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase shadow">
                  Featured
                </span>
              </div>

              <div className="p-3 sm:p-4 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-blue-600 transition-colors line-clamp-1">
                    {service.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 hidden sm:block">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:translate-x-0.5 transition-transform">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-center md:hidden">
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-4 bg-white border border-slate-300 text-slate-800 text-xs font-semibold rounded-lg shadow-sm hover:bg-slate-50"
          >
            <span>Other Services (All 13 Categories)</span>
            <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
          </Link>
        </div>
      </div>
    </section>
  );
}
