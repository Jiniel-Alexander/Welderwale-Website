import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Calendar, Layers } from 'lucide-react';
import { getProjects, getCompanySettings } from '@/lib/db';

export const metadata: Metadata = {
  title: 'Our Work & Portfolio | Welderwale Metal Fabrication Projects',
  description: 'Explore completed structural shed fabrication, motorized gates, glass pergolas, and industrial mezzanine projects by Welderwale in Mumbai & Thane.',
  alternates: {
    canonical: '/our-work',
  },
};

export default async function PortfolioPage() {
  const projects = await getProjects();
  const company = await getCompanySettings();

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-900 border-b border-slate-800 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
            Verified Portfolio
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-3 tracking-tight">
            Our Completed Projects & Case Studies
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Take an inside look at our industrial warehouse sheds, motorized architectural gates, luxury glass pergolas, and structural steel installations across Mumbai, Thane & Bhayandar.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/our-work/${project.slug}`}
              className="group flex flex-col bg-slate-900 border border-slate-800 hover:border-brand-500/60 rounded-card overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden">
                <Image
                  src={project.featuredImage}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-btn text-[10px] font-bold uppercase tracking-wider bg-slate-950/80 text-brand-400 border border-slate-700/60 backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
                {project.beforeImage && project.afterImage && (
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2 py-0.5 rounded-btn text-[10px] font-black uppercase bg-emerald-600 text-white shadow-md">
                      Before / After Available
                    </span>
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center space-x-2 text-xs text-slate-400 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-brand-500" />
                    <span>{project.location}</span>
                    {project.completionDate && (
                      <>
                        <span>•</span>
                        <span>{project.completionDate}</span>
                      </>
                    )}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-brand-400 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-brand-400 group-hover:text-brand-300">
                  <span>View Full Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
