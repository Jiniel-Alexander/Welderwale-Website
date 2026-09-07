import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';
import EnquiryForm from '@/components/EnquiryForm';
import { allLocations } from '@/data/locations';
import { MapPin, ArrowRight, ShieldCheck, Phone, MessageSquare } from 'lucide-react';

export const metadata = {
  title: 'Fabrication Service Areas (50 km Radius) | Welderwale',
  description: 'Genuine local metal fabrication services in Bhayandar, Mira Road, Mumbai, Thane, Vasai, Kalyan and Dombivli.',
};

export default function LocationsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow pt-24 pb-16">
        <section className="bg-slate-900 text-white py-12 px-4 sm:px-6 border-b border-slate-800">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
              <MapPin className="w-4 h-4" /> 50 KM Direct Service Radius
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
              Service Locations Across Mumbai & Thane
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
              We operate exclusively within verified, serviceable territories to guarantee prompt site measurements, on-time delivery, and rapid installation.
            </p>
          </div>
        </section>

        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {allLocations.map((loc) => (
              <div
                key={loc.slug}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wide mb-1">
                    <MapPin className="w-4 h-4" /> {loc.region}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {loc.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {loc.leadParagraph}
                  </p>

                  <div className="pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Key Serviceable Areas:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {loc.areas.map((ar) => (
                        <span
                          key={ar}
                          className="px-2.5 py-1 bg-slate-50 border border-slate-200 rounded-md text-[11px] font-medium text-slate-700"
                        >
                          {ar}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
                  >
                    <span>View Location Hub</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <div className="flex items-center gap-1.5">
                    <a
                      href="tel:+919876543210"
                      className="p-1.5 rounded-lg bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 transition"
                      title="Call local supervisor"
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={`https://wa.me/919876543210?text=Hi%20Welderwale%2C%20I%20need%20fabrication%20work%20in%20${encodeURIComponent(
                        loc.name
                      )}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-700 transition"
                      title="WhatsApp local supervisor"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                    </a>
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
