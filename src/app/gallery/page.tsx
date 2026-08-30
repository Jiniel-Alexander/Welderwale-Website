'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Layers, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { initialGallery } from '@/data/initialGallery';
import { initialCompany } from '@/data/initialCompany';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Workshop', 'Fabrication', 'Installation', 'Completed Work', 'Site Work'];

  const filteredItems =
    selectedCategory === 'All'
      ? initialGallery
      : initialGallery.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-900 border-b border-slate-800 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
            Visual Portfolio
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-3 tracking-tight">
            Fabrication & Workshop Gallery
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Browse high-resolution photographs of our workshop manufacturing, certified TIG/MIG welding, structural erections, and completed residential & industrial projects.
          </p>

          {/* Category Filter Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-btn text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand-500 text-slate-950 shadow-md'
                    : 'bg-slate-950 text-slate-300 border border-slate-800 hover:border-slate-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] rounded-card overflow-hidden border border-slate-800 bg-slate-900 hover:border-brand-500/60 transition-all duration-300 shadow-xl"
            >
              <Image
                src={item.image}
                alt={item.altText}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                <span className="text-[10px] font-bold text-brand-400 uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-sm font-bold text-white leading-tight mt-1">
                  {item.title}
                </h3>
                {item.serviceSlug && (
                  <Link
                    href={`/services/${item.serviceSlug}`}
                    className="mt-2 inline-flex items-center space-x-1 text-[11px] font-semibold text-brand-400 hover:underline"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-slate-900 border-t border-slate-800 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl sm:text-2xl font-black text-white">
            Have a Specific Metal Design Requirement?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Share your sketches, photos, or architectural blueprints on WhatsApp for immediate feedback and cost estimates.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/${initialCompany.whatsapp}?text=${encodeURIComponent('Hi Welderwale, I have a photo/drawing of a metal fabrication design I need made.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-btn bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center space-x-2 shadow-lg transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Photo on WhatsApp</span>
            </a>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-btn bg-brand-500 hover:brightness-110 text-slate-950 font-bold text-xs shadow-lg transition-all"
            >
              Submit 3-Step Enquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
