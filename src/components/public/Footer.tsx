import React from 'react';
import Link from 'next/link';
import {
  Wrench,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { CompanySettings, Service, LocationItem } from '@/types';

interface FooterProps {
  company: CompanySettings;
  services: Service[];
  locations: LocationItem[];
}

export const Footer: React.FC<FooterProps> = ({ company, services, locations }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-sm">
      {/* Top CTA Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border-b border-slate-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-400">
              Need Reliable Metal Fabrication?
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
              Book a Free Site Inspection & Laser Measurement Today
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Rapid response across Mumbai, Thane, Bhayandar, Mira Road, Vasai & Kalyan (~50 KM)
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${company.phone}`}
              className="px-5 py-3 rounded-btn bg-brand-500 hover:brightness-110 text-slate-950 font-bold text-sm flex items-center space-x-2 shadow-lg transition-all"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call: {company.phoneDisplay}</span>
            </a>
            <a
              href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hi Welderwale, I need a quotation for metal fabrication.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-btn bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm flex items-center space-x-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-2.5">
              <div className="w-10 h-10 rounded-btn bg-brand-500 flex items-center justify-center text-slate-950 font-black shadow-md">
                <Wrench className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white uppercase">
                WELDER<span className="text-brand-500">WALE</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {company.tagline}. We engineer industrial factory sheds, automated laser gates, stainless steel glass railings, modern terrace pergolas, and bespoke architectural framework with certified welders and 1mm tolerances.
            </p>
            <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>AWS & IS 800 Quality Certified Fabrication</span>
            </div>
          </div>

          {/* Col 2: Core Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2 mb-3">
              Fabrication Services
            </h4>
            <ul className="space-y-2 text-xs">
              {services.slice(0, 7).map((srv) => (
                <li key={srv.id}>
                  <Link
                    href={`/services/${srv.slug}`}
                    className="hover:text-brand-400 transition-colors flex items-center space-x-1"
                  >
                    <span>•</span>
                    <span>{srv.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-brand-400 font-semibold hover:underline">
                  All 13 Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Locations */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2 mb-3">
              Locations (~50 KM)
            </h4>
            <ul className="space-y-2 text-xs">
              {locations.slice(0, 7).map((loc) => (
                <li key={loc.id}>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="hover:text-brand-400 transition-colors flex items-center space-x-1"
                  >
                    <span>•</span>
                    <span>{loc.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations" className="text-brand-400 font-semibold hover:underline">
                  All Service Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Workshop */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2 mb-3">
              Workshop & Contact
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                <span>{company.address}, {company.city} - {company.pincode}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-brand-500 shrink-0" />
                <a href={`tel:${company.phone}`} className="hover:text-white font-medium">
                  {company.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white font-medium"
                >
                  WhatsApp: {company.whatsappDisplay}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-brand-500 shrink-0" />
                <a href={`mailto:${company.email}`} className="hover:text-white">
                  {company.email}
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                <span>{company.workingHours} ({company.workingDays})</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p suppressHydrationWarning>© {new Date().getFullYear()} Welderwale. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <Link href="/about" className="hover:text-slate-400">About Us</Link>
            <span>•</span>
            <Link href="/our-work" className="hover:text-slate-400">Portfolio</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-slate-400">Enquiry Form</Link>
            <span>•</span>
            <Link href="/sitemap.xml" className="hover:text-slate-400">Sitemap</Link>
            <span>•</span>
            <Link href="/admin" className="text-slate-400 hover:text-brand-400 font-semibold">Admin CMS</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
