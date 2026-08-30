'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Phone, ArrowRight, Shield, Award } from 'lucide-react';
import { HeroSlide, CompanySettings } from '@/types';

interface HeroSliderProps {
  slides: HeroSlide[];
  company: CompanySettings;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ slides, company }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (slides.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length, isPaused]);

  if (!slides || slides.length === 0) return null;

  const activeSlide = slides[currentSlide];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section
      className="relative bg-slate-950 text-white overflow-hidden border-b border-slate-800"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Welderwale Featured Services Hero Slider"
    >
      {/* Background industrial grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none" />

      {/* Subtle glowing ambient lighting */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Synchronized Service Copy & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-5 animate-in fade-in duration-500">
            {/* Top badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-500/20 text-brand-400 border border-brand-500/30">
                <Award className="w-3.5 h-3.5" />
                <span>Fabrication & Installation Experts</span>
              </span>
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-800/80 text-slate-300 border border-slate-700">
                <Shield className="w-3 h-3 text-emerald-400" />
                <span>Mumbai & Thane ~50km</span>
              </span>
            </div>

            {/* Slide Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight min-h-[5rem] sm:min-h-[6rem] flex items-center">
              {activeSlide.title}
            </h1>

            {/* Slide Description */}
            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed min-h-[4rem] flex items-center">
              {activeSlide.subtitle}
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              {/* Primary Call / Get Quote Button */}
              <Link
                href={activeSlide.primaryCtaLink || '/services'}
                className="px-6 py-3.5 rounded-btn bg-gradient-to-r from-brand-500 to-amber-600 hover:brightness-110 text-slate-950 font-black text-sm shadow-xl flex items-center space-x-2 transition-all group"
              >
                <span>{activeSlide.primaryCtaText || 'View Service'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Direct Call Primary Conversion */}
              <a
                href={`tel:${company.phone}`}
                className="px-5 py-3.5 rounded-btn bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-sm font-bold flex items-center space-x-2 transition-colors shadow-md"
              >
                <Phone className="w-4 h-4 text-brand-500 fill-brand-500" />
                <span>Call Now: {company.phoneDisplay}</span>
              </a>
            </div>

            {/* Slide Indicators & Quick Switchers */}
            <div className="flex items-center space-x-3 pt-4">
              <div className="flex space-x-1.5">
                {slides.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentSlide ? 'w-8 bg-brand-500' : 'w-2 bg-slate-700 hover:bg-slate-500'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              <span className="text-xs font-semibold text-slate-500">
                0{currentSlide + 1} / 0{slides.length}
              </span>
            </div>
          </div>

          {/* Right Column: Hero Service Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-card overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
              <Image
                key={activeSlide.id}
                src={activeSlide.image}
                alt={activeSlide.title}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
              
              {/* Dark subtle gradient overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Image Tag */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div className="bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-btn border border-slate-700/60 text-xs font-bold text-slate-200">
                  Precision Workshop Fabrication & On-Site Installation
                </div>
              </div>

              {/* Slide Navigation Arrows */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <button
                  onClick={handlePrev}
                  className="w-9 h-9 rounded-full bg-slate-950/80 hover:bg-brand-500 hover:text-slate-950 text-slate-200 backdrop-blur-sm border border-slate-700 flex items-center justify-center transition-colors shadow-lg"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-9 h-9 rounded-full bg-slate-950/80 hover:bg-brand-500 hover:text-slate-950 text-slate-200 backdrop-blur-sm border border-slate-700 flex items-center justify-center transition-colors shadow-lg"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
