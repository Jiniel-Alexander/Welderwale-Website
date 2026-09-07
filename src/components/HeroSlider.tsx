'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, MessageSquare, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';
import { allServices } from '@/data/services';

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // Take the first 4 services for the hero slider
  const heroSlides = allServices.slice(0, 4);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const slide = heroSlides[current];

  return (
    <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-20 bg-gradient-to-b from-slate-900 via-slate-850 to-slate-900 text-white overflow-hidden">
      {/* Subtle Background Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold w-fit">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>{slide.name} • Welderwale Certified</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              {slide.tagline}
            </h1>

            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
              {slide.shortDesc}
            </p>

            <div className="text-xs text-amber-400/90 font-medium tracking-wide">
              MIG & TIG Precision Welding • Turnkey Installation • Mumbai & Thane
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="#enquiry-form"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all transform hover:-translate-y-0.5"
              >
                <span>Get Instant Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href={`/services/${slide.slug}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition"
              >
                <span>View {slide.name} Details</span>
              </Link>

              <div className="flex items-center gap-2 ml-auto sm:ml-0 pt-2 sm:pt-0">
                <a
                  href="tel:+919876543210"
                  aria-label="Call directly"
                  className="p-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition shadow"
                  title="Direct Call"
                >
                  <Phone className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp directly"
                  className="p-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition shadow"
                  title="Direct WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Slider Dots & Next/Prev Controls */}
            <div className="flex items-center gap-3 pt-4">
              <button
                onClick={() => setCurrent((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1.5">
                {heroSlides.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setCurrent(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      current === idx ? 'w-8 bg-amber-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setCurrent((prev) => (prev + 1) % heroSlides.length)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              <span className="text-xs text-slate-400 ml-2 font-mono">
                0{current + 1} / 0{heroSlides.length}
              </span>
            </div>
          </div>

          {/* Right Large Image Column (Desktop) & Visual Container */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border-2 border-slate-700 shadow-2xl bg-slate-800">
              <img
                src={slide.featuredImage}
                alt={slide.name}
                className="w-full h-full object-cover transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[11px] font-semibold text-amber-300 uppercase tracking-wider block">
                  Service Category: {slide.category}
                </span>
                <span className="text-base font-bold truncate block">{slide.name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
