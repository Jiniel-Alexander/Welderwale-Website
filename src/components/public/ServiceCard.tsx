import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
  compact?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, compact = false }) => {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex flex-col bg-slate-900 border border-slate-800 hover:border-brand-500/60 rounded-card overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      {/* Service Image Container */}
      <div className="relative aspect-[4/3] sm:aspect-[16/10] bg-slate-950 overflow-hidden">
        <Image
          src={service.featuredImage}
          alt={service.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        
        {/* Dark subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

        {/* Category Tag (hidden on small compact mobile to keep it super clean) */}
        {!compact && (
          <div className="absolute top-2.5 left-2.5">
            <span className="inline-block px-2 py-0.5 rounded-btn text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-slate-950/80 text-brand-400 border border-slate-700/60 backdrop-blur-sm">
              {service.category.split('&')[0]}
            </span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-3 sm:p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-sm sm:text-base md:text-lg font-bold text-white group-hover:text-brand-400 transition-colors line-clamp-1">
            {service.name}
          </h3>

          {!compact && (
            <p className="hidden sm:block mt-1 text-xs text-slate-400 line-clamp-2 leading-relaxed">
              {service.shortDescription}
            </p>
          )}
        </div>

        {/* Card Footer Link */}
        <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-brand-400">
          <span className="text-[11px] sm:text-xs">View Details</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};
