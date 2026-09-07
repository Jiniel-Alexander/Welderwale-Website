import Link from 'next/link';
import { Phone, MessageSquare, Mail, MapPin, ShieldCheck, ChevronRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Metal Gates', href: '/services/metal-gates' },
    { name: 'Staircases', href: '/services/staircase' },
    { name: 'Metal Sheds', href: '/services/metal-sheds' },
    { name: 'Window Grills', href: '/services/window-grill' },
    { name: 'Custom Metal Frames', href: '/services/custom-metal-frames' },
    { name: 'Structural Fabrication', href: '/services/structural-fabrication' },
  ];

  const locations = [
    { name: 'Bhayandar & Mira Road', href: '/locations/bhayandar' },
    { name: 'Borivali & Kandivali', href: '/locations/borivali' },
    { name: 'Thane & Ghodbunder', href: '/locations/thane' },
    { name: 'Vasai & Naigaon', href: '/locations/vasai' },
    { name: 'Kalyan & Dombivli', href: '/locations/kalyan' },
    { name: 'Andheri & Mumbai Suburban', href: '/locations/mumbai' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 pt-12 pb-24 md:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-black text-lg">
                W
              </div>
              <span className="text-lg font-black tracking-wider text-white">
                WELDER<span className="text-amber-400">WALE</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Professional metal fabrication, heavy industrial welding, and bespoke architectural structural installations operating within a ~50 km radius across Mumbai, Thane, and Bhayandar.
            </p>

            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Bhayandar East, Thane District, Maharashtra</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="tel:+919876543210" className="hover:underline">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  WhatsApp Quick Chat
                </a>
              </div>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Core Metal Services
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-amber-400 transition flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-slate-600" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-amber-400 hover:underline font-medium inline-block mt-1">
                  View All 13 Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Genuine Service Areas */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Service Areas (50 km)
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {locations.map((loc) => (
                <li key={loc.name}>
                  <Link href={loc.href} className="hover:text-amber-400 transition flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-slate-600" />
                    <span>{loc.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours & Quick Quote */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Workshop & Site Hours
            </h4>
            <p className="text-xs text-slate-400 mb-2">
              Monday – Saturday: 8:30 AM – 8:00 PM<br />
              Sunday: Site surveys by pre-appointment
            </p>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 mt-4">
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wide block mb-1">
                Emergency or Fast Site Survey?
              </span>
              <p className="text-[11px] text-slate-400 mb-2">
                Talk directly with our fabrication foreman for instant feasibility and timeline advice.
              </p>
              <a
                href="tel:+919876543210"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg transition"
              >
                <Phone className="w-3.5 h-3.5" /> Direct Call
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500">
          <p>© {currentYear} Welderwale. Precision Metal Fabrication. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Serving Mumbai, Thane, Bhayandar & surrounding 50 km zone.</p>
        </div>
      </div>
    </footer>
  );
}
