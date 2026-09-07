import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';
import { allServices } from '@/data/services';
import { ShieldCheck, ArrowRight, Phone, MessageSquare } from 'lucide-react';

export const metadata = {
  title: 'All Metal Fabrication Services | Welderwale Mumbai & Thane',
  description: 'Explore Welderwale 13 specialized metal fabrication services including gates, sheds, staircases, grills, pergolas, railings and heavy structural welding.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow pt-24 pb-16">
        {/* Header Banner */}
        <section className="bg-slate-900 text-white py-12 px-4 sm:px-6 border-b border-slate-800">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
              <ShieldCheck className="w-4 h-4" /> 13 Core Fabrication Capabilities
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
              Metal Fabrication & Welding Services
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
              Custom designed, workshop fabricated, and erected with structural certified welders across Mumbai, Thane, and Bhayandar within 50 km.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {allServices.map((service) => (
              <div
                key={service.id}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <img
                    src={service.featuredImage}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-xs text-amber-600 font-semibold mt-0.5">
                      {service.tagline}
                    </p>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition"
                    >
                      <span>Explore Specs & Work</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <div className="flex items-center gap-1.5">
                      <a
                        href="tel:+919876543210"
                        title="Call about this service"
                        className="p-1.5 rounded-lg bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 transition"
                      >
                        <Phone className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={`https://wa.me/919876543210?text=Hi%20Welderwale%2C%20I%20am%20interested%20in%20${encodeURIComponent(
                          service.name
                        )}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="WhatsApp about this service"
                        className="p-1.5 rounded-lg bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-700 transition"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
