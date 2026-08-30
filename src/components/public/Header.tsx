'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  ChevronDown,
  Wrench,
  ShieldCheck,
  MapPin,
  Clock,
  ArrowRight
} from 'lucide-react';
import { CompanySettings, Service, LocationItem } from '@/types';

interface HeaderProps {
  company: CompanySettings;
  services: Service[];
  locations: LocationItem[];
}

export const Header: React.FC<HeaderProps> = ({ company, services, locations }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsLocationsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Work', href: '/our-work' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Utility Bar (Desktop only) */}
      <div className="hidden lg:block bg-slate-950 text-slate-300 text-xs py-2 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-brand-500" />
              <span>Serving Mumbai, Thane, Bhayandar & 50 KM Radius</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Clock className="w-3.5 h-3.5 text-brand-500" />
              <span>{company.workingHours} ({company.workingDays})</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/admin" className="text-slate-400 hover:text-brand-400 transition-colors">
              Admin CMS
            </Link>
            <span className="text-slate-700">|</span>
            <div className="flex items-center space-x-1 text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% Anti-Rust Guarantee Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800'
            : 'bg-slate-900 border-b border-slate-800/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-11 h-11 rounded-btn bg-gradient-to-tr from-amber-600 via-brand-500 to-amber-400 flex items-center justify-center text-slate-950 font-black shadow-md group-hover:scale-105 transition-transform">
                <Wrench className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-white uppercase flex items-center">
                  WELDER<span className="text-brand-500">WALE</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold -mt-1">
                  Metal Fabrication
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1">
              <Link
                href="/"
                className={`px-3.5 py-2 text-sm font-medium rounded-btn transition-colors ${
                  pathname === '/'
                    ? 'text-brand-500 bg-slate-800/60'
                    : 'text-slate-200 hover:text-brand-400 hover:bg-slate-800/40'
                }`}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <Link
                  href="/services"
                  className={`flex items-center space-x-1 px-3.5 py-2 text-sm font-medium rounded-btn transition-colors ${
                    pathname.startsWith('/services')
                      ? 'text-brand-500 bg-slate-800/60'
                      : 'text-slate-200 hover:text-brand-400 hover:bg-slate-800/40'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </Link>

                {isServicesOpen && (
                  <div className="absolute left-0 top-full w-80 bg-slate-900 border border-slate-800 rounded-card shadow-2xl p-3 grid grid-cols-1 gap-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="px-2 py-1 text-xs font-bold uppercase tracking-wider text-brand-500 border-b border-slate-800 mb-1">
                      Our Core Services ({services.length})
                    </div>
                    <div className="max-h-96 overflow-y-auto space-y-1">
                      {services.map((service) => (
                        <Link
                          key={service.id}
                          href={`/services/${service.slug}`}
                          className="flex items-center justify-between p-2 rounded-btn hover:bg-slate-800/80 text-xs text-slate-300 hover:text-white transition-colors group"
                        >
                          <span className="font-medium">{service.name}</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-brand-500 transition-opacity" />
                        </Link>
                      ))}
                    </div>
                    <div className="pt-2 border-t border-slate-800 mt-1">
                      <Link
                        href="/services"
                        className="block text-center py-1.5 text-xs font-semibold text-brand-400 hover:text-brand-300"
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Locations Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsLocationsOpen(true)}
                onMouseLeave={() => setIsLocationsOpen(false)}
              >
                <Link
                  href="/locations"
                  className={`flex items-center space-x-1 px-3.5 py-2 text-sm font-medium rounded-btn transition-colors ${
                    pathname.startsWith('/locations')
                      ? 'text-brand-500 bg-slate-800/60'
                      : 'text-slate-200 hover:text-brand-400 hover:bg-slate-800/40'
                  }`}
                >
                  <span>Locations</span>
                  <ChevronDown className="w-4 h-4" />
                </Link>

                {isLocationsOpen && (
                  <div className="absolute left-0 top-full w-72 bg-slate-900 border border-slate-800 rounded-card shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="px-2 py-1 text-xs font-bold uppercase tracking-wider text-brand-500 border-b border-slate-800 mb-1">
                      Service Hubs (~50 KM)
                    </div>
                    <div className="space-y-1">
                      {locations.map((loc) => (
                        <Link
                          key={loc.id}
                          href={`/locations/${loc.slug}`}
                          className="flex items-center justify-between p-2 rounded-btn hover:bg-slate-800/80 text-xs text-slate-300 hover:text-white transition-colors group"
                        >
                          <span className="font-medium">{loc.name}</span>
                          <span className="text-[10px] text-slate-500">{loc.region}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="pt-2 border-t border-slate-800 mt-1">
                      <Link
                        href="/locations"
                        className="block text-center py-1.5 text-xs font-semibold text-brand-400 hover:text-brand-300"
                      >
                        View All Locations →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-medium rounded-btn transition-colors ${
                    pathname === link.href
                      ? 'text-brand-500 bg-slate-800/60'
                      : 'text-slate-200 hover:text-brand-400 hover:bg-slate-800/40'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop Primary & Secondary CTAs */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* WhatsApp Secondary CTA */}
              <a
                href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hi Welderwale, I need a quotation for metal fabrication.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-3.5 py-2 rounded-btn bg-emerald-950/80 border border-emerald-700/50 text-emerald-300 hover:bg-emerald-900 text-sm font-semibold transition-colors"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              {/* Call Primary CTA */}
              <a
                href={`tel:${company.phone}`}
                className="flex items-center space-x-2 px-4 py-2 rounded-btn bg-gradient-to-r from-brand-500 to-amber-600 text-slate-950 hover:brightness-110 font-bold text-sm shadow-md transition-all"
                title="Call Directly"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>{company.phoneDisplay}</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center space-x-2 lg:hidden">
              <a
                href={`tel:${company.phone}`}
                className="p-2 rounded-btn bg-brand-500 text-slate-950"
                aria-label="Call Now"
              >
                <Phone className="w-5 h-5 fill-current" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-btn bg-slate-800 text-slate-200 hover:text-white"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Off-Canvas Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative ml-auto w-4/5 max-w-sm bg-slate-900 h-full overflow-y-auto p-6 shadow-2xl flex flex-col justify-between border-l border-slate-800 z-10 animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-btn bg-brand-500 flex items-center justify-center text-slate-950 font-black">
                    <Wrench className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <span className="text-lg font-black text-white">
                    WELDER<span className="text-brand-500">WALE</span>
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded-btn bg-slate-800 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Navigation List */}
              <nav className="mt-6 space-y-2">
                <Link
                  href="/"
                  className="block px-3 py-2.5 rounded-btn text-base font-semibold text-slate-100 hover:bg-slate-800 hover:text-brand-400"
                >
                  Home
                </Link>

                {/* Mobile Services Accordion */}
                <div>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="w-full flex justify-between items-center px-3 py-2.5 rounded-btn text-base font-semibold text-slate-100 hover:bg-slate-800"
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isServicesOpen ? 'rotate-180 text-brand-500' : ''
                      }`}
                    />
                  </button>
                  {isServicesOpen && (
                    <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-950/60 rounded-btn my-1">
                      {services.map((srv) => (
                        <Link
                          key={srv.id}
                          href={`/services/${srv.slug}`}
                          className="block py-1.5 px-2 text-xs text-slate-300 hover:text-brand-400 font-medium"
                        >
                          • {srv.name}
                        </Link>
                      ))}
                      <Link
                        href="/services"
                        className="block pt-2 text-xs font-bold text-brand-400 underline"
                      >
                        All Services Catalogue →
                      </Link>
                    </div>
                  )}
                </div>

                {/* Mobile Locations Accordion */}
                <div>
                  <button
                    onClick={() => setIsLocationsOpen(!isLocationsOpen)}
                    className="w-full flex justify-between items-center px-3 py-2.5 rounded-btn text-base font-semibold text-slate-100 hover:bg-slate-800"
                  >
                    <span>Locations</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isLocationsOpen ? 'rotate-180 text-brand-500' : ''
                      }`}
                    />
                  </button>
                  {isLocationsOpen && (
                    <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-950/60 rounded-btn my-1">
                      {locations.map((loc) => (
                        <Link
                          key={loc.id}
                          href={`/locations/${loc.slug}`}
                          className="block py-1.5 px-2 text-xs text-slate-300 hover:text-brand-400 font-medium"
                        >
                          • {loc.name} ({loc.region})
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/our-work"
                  className="block px-3 py-2.5 rounded-btn text-base font-semibold text-slate-100 hover:bg-slate-800 hover:text-brand-400"
                >
                  Our Work & Projects
                </Link>
                <Link
                  href="/gallery"
                  className="block px-3 py-2.5 rounded-btn text-base font-semibold text-slate-100 hover:bg-slate-800 hover:text-brand-400"
                >
                  Gallery
                </Link>
                <Link
                  href="/about"
                  className="block px-3 py-2.5 rounded-btn text-base font-semibold text-slate-100 hover:bg-slate-800 hover:text-brand-400"
                >
                  About Welderwale
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2.5 rounded-btn text-base font-semibold text-slate-100 hover:bg-slate-800 hover:text-brand-400"
                >
                  Contact Us
                </Link>
                <Link
                  href="/admin"
                  className="block px-3 py-2.5 rounded-btn text-sm font-semibold text-slate-400 hover:text-brand-400 border-t border-slate-800/60 mt-3 pt-3"
                >
                  Admin CMS
                </Link>
              </nav>
            </div>

            {/* Mobile Drawer Bottom CTAs */}
            <div className="mt-8 pt-4 border-t border-slate-800 space-y-3 pb-6">
              <a
                href={`tel:${company.phone}`}
                className="w-full flex items-center justify-center space-x-2 py-3 rounded-btn bg-brand-500 text-slate-950 font-bold text-sm shadow-md"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call {company.phoneDisplay}</span>
              </a>
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-btn bg-emerald-600 text-white font-semibold text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
