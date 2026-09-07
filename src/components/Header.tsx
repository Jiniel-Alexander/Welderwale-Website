'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, ChevronDown, Shield, Sparkles } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const servicesList = [
    { name: 'Metal Gates', href: '/services/metal-gates' },
    { name: 'Staircases', href: '/services/staircase' },
    { name: 'Metal Sheds', href: '/services/metal-sheds' },
    { name: 'Window Grills', href: '/services/window-grill' },
    { name: 'Custom Metal Frames', href: '/services/custom-metal-frames' },
    { name: 'Garden Pergola', href: '/services/garden-pergola' },
    { name: 'Structural Fabrication', href: '/services/structural-fabrication' },
    { name: 'Rolling Shutters', href: '/services/shutter' },
    { name: 'Roofing Sheets', href: '/services/roofing-sheets' },
    { name: 'Metal Railing', href: '/services/metal-railing' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-md border-b border-slate-800 py-2.5'
          : 'bg-slate-900 border-b border-slate-800 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo & Tagline */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-slate-950 font-black text-xl shadow-md group-hover:scale-105 transition-transform">
            W
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-wider text-white">
              WELDER<span className="text-amber-400">WALE</span>
            </span>
            <span className="text-[10px] text-slate-400 font-medium tracking-tight -mt-1 hidden sm:block">
              Metal Fabrication & Welding • Mumbai & Thane
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-200">
          <Link href="/" className="hover:text-amber-400 transition-colors">
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-amber-400 py-1 transition-colors">
              <span>Services</span>
              <ChevronDown className="w-4 h-4 opacity-70" />
            </button>

            {servicesOpen && (
              <div className="absolute top-full -left-4 w-64 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="px-3 py-1.5 border-b border-slate-800 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Our Fabrication Services
                </div>
                <div className="max-h-80 overflow-y-auto py-1">
                  {servicesList.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-800 hover:text-amber-400 transition"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="border-t border-slate-800 px-3 py-2 bg-slate-950/50">
                  <Link
                    href="/services"
                    className="text-xs font-semibold text-amber-400 hover:underline block"
                  >
                    View All 13 Services →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/our-work" className="hover:text-amber-400 transition-colors">
            Our Work
          </Link>
          <Link href="/gallery" className="hover:text-amber-400 transition-colors">
            Gallery
          </Link>
          <Link href="/locations" className="hover:text-amber-400 transition-colors">
            Locations
          </Link>
          <Link href="/about" className="hover:text-amber-400 transition-colors">
            About Us
          </Link>
          <Link href="#enquiry-form" className="hover:text-amber-400 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Desktop Quick Actions (Call & WhatsApp Priority) */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href="tel:+919876543210"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition"
          >
            <Phone className="w-3.5 h-3.5 text-blue-400" />
            <span>Call Now</span>
          </a>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          <Link
            href="#enquiry-form"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold transition shadow-sm"
          >
            <span>Get Quote</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-200">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-amber-400"
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-amber-400"
            >
              All Services (13 Types)
            </Link>
            <Link
              href="/our-work"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-amber-400"
            >
              Projects & Portfolio
            </Link>
            <Link
              href="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-amber-400"
            >
              Workshop & Site Gallery
            </Link>
            <Link
              href="/locations"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-amber-400"
            >
              Service Areas (Mumbai & Thane)
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-amber-400"
            >
              About Welderwale
            </Link>
          </nav>

          <div className="pt-3 border-t border-slate-800 grid grid-cols-2 gap-2">
            <a
              href="tel:+919876543210"
              className="flex items-center justify-center gap-1.5 py-2.5 bg-blue-600 text-white rounded-lg text-xs font-semibold"
            >
              <Phone className="w-4 h-4" /> Call Direct
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 bg-emerald-600 text-white rounded-lg text-xs font-semibold"
            >
              <MessageSquare className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
