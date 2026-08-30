import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '@/types';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-slate-950 text-white relative border-b border-slate-800" aria-label="Customer Reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
            Verified Reviews
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mt-3 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
            Direct feedback from builders, factory managers, architects, and residential property owners across Mumbai and Thane.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-card bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between relative group"
            >
              <Quote className="w-10 h-10 text-slate-800 group-hover:text-brand-500/20 transition-colors absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-500 text-brand-500" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed italic relative z-10">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="font-bold text-white text-sm sm:text-base">{item.author}</div>
                  <div className="text-xs text-brand-400 font-medium">
                    {item.role} {item.company ? `• ${item.company}` : ''}
                  </div>
                </div>
                <span className="text-xs text-slate-500 font-medium bg-slate-950 px-2.5 py-1 rounded-btn border border-slate-800">
                  📍 {item.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
