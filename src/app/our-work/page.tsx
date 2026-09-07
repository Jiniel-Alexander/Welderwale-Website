'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';
import EnquiryForm from '@/components/EnquiryForm';
import { allProjects } from '@/data/projects';
import { ProjectItem } from '@/types';
import { MapPin, Calendar, ArrowRight, Layers } from 'lucide-react';

export default function OurWorkPage() {
  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState<ProjectItem[]>(allProjects);

  useEffect(() => {
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.projects && data.projects.length > 0) {
          setProjects(data.projects);
        }
      })
      .catch(() => {});
  }, []);

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.serviceSlug === filter);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow pt-24 pb-16">
        {/* Banner */}
        <section className="bg-slate-900 text-white py-12 px-4 sm:px-6 border-b border-slate-800">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
              <Layers className="w-4 h-4" /> Real Site Proof & Craftsmanship
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
              Our Completed Metal Projects & Fabrication Work
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
              Inspect our certified metal fabrication installations across Mumbai, Thane, and Bhayandar.
            </p>

            {/* Filter Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  filter === 'all'
                    ? 'bg-amber-500 text-slate-950'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setFilter('metal-gates')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  filter === 'metal-gates'
                    ? 'bg-amber-500 text-slate-950'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Metal Gates
              </button>
              <button
                onClick={() => setFilter('staircase')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  filter === 'staircase'
                    ? 'bg-amber-500 text-slate-950'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Staircases
              </button>
              <button
                onClick={() => setFilter('metal-sheds')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  filter === 'metal-sheds'
                    ? 'bg-amber-500 text-slate-950'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Metal Sheds
              </button>
              <button
                onClick={() => setFilter('window-grill')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  filter === 'window-grill'
                    ? 'bg-amber-500 text-slate-950'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Window Grills
              </button>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <img
                    src={project.mainImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-semibold px-3 py-1 rounded-full flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{project.location}</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                      <span className="font-semibold text-blue-600 uppercase tracking-wide">
                        {project.serviceName}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" /> {project.completionDate}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {project.scope}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <ul className="space-y-1.5">
                        {project.details.map((d) => (
                          <li key={d} className="text-xs text-slate-700 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/services/${project.serviceSlug}`}
                      className="text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
                    >
                      <span>Related Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      href="#enquiry-form"
                      className="text-xs font-bold text-slate-900 bg-slate-100 hover:bg-amber-400 px-3 py-1.5 rounded-lg transition"
                    >
                      Get Similar Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <EnquiryForm />
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
