import { getServices } from '@/lib/db';
import Link from 'next/link';
import { Plus, Edit3, ExternalLink } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function AdminServicesPage() {
  const services = await getServices();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Services & Catalog Manager
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Manage your 13 metal fabrication offerings, descriptions, and imagery without modifying code.
          </p>
        </div>

        <button
          onClick={undefined}
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition shadow"
        >
          <Plus className="w-4 h-4" /> Add Service
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.id}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-[16/9] w-full bg-slate-100">
                <img src={s.featuredImage} alt={s.name} className="w-full h-full object-cover" />
                <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-slate-950/80 text-white text-[10px] font-semibold">
                  {s.category}
                </span>
                {s.isFeatured && (
                  <span className="absolute top-2 right-2 px-2.5 py-0.5 rounded-full bg-amber-500 text-slate-950 text-[10px] font-bold">
                    Homepage Featured
                  </span>
                )}
              </div>

              <div className="p-4">
                <h3 className="font-bold text-slate-900 text-sm">{s.name}</h3>
                <p className="text-xs text-amber-600 font-medium mt-0.5 line-clamp-1">{s.tagline}</p>
                <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">{s.shortDesc}</p>
              </div>
            </div>

            <div className="p-4 pt-0 flex items-center justify-between border-t border-slate-100 mt-2">
              <Link
                href={`/services/${s.slug}`}
                target="_blank"
                className="text-xs font-semibold text-slate-500 hover:text-blue-600 flex items-center gap-1"
              >
                <span>Preview Page</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>

              <button className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1">
                <Edit3 className="w-3.5 h-3.5" /> Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
