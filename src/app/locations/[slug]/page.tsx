import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';
import EnquiryForm from '@/components/EnquiryForm';
import { allLocations } from '@/data/locations';
import { allServices } from '@/data/services';
import { MapPin, ArrowLeft, ShieldCheck, CheckCircle2, Phone, MessageSquare, ArrowRight } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allLocations.map((l) => ({
    slug: l.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const loc = allLocations.find((l) => l.slug === slug);

  if (!loc) {
    return {
      title: 'Location Hub Not Found',
    };
  }

  return {
    title: `Metal Fabrication in ${loc.name} | Welderwale`,
    description: loc.metaDescription,
    openGraph: {
      title: `${loc.headline} | Welderwale`,
      description: loc.metaDescription,
    },
  };
}

export default async function LocationDetailPage({ params }: Props) {
  const { slug } = await params;
  const loc = allLocations.find((l) => l.slug === slug);

  if (!loc) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow pt-20">
        <section className="bg-slate-900 text-white py-12 lg:py-16 px-4 sm:px-6 border-b border-slate-800">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/locations"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-amber-400 transition mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Back to All Service Locations
            </Link>

            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5" /> Direct Fabrication Hub: {loc.region}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
                {loc.headline}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {loc.leadParagraph}
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <Link
                  href="#enquiry-form"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg transition"
                >
                  <span>Book Site Measurement in {loc.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition"
                >
                  <Phone className="w-4 h-4 text-blue-400" /> Call Local Foreman
                </a>
                <a
                  href={`https://wa.me/919876543210?text=Hi%20Welderwale%2C%20I%20need%20a%20site%20visit%20in%20${encodeURIComponent(
                    loc.name
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition"
                >
                  <MessageSquare className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Areas Covered */}
        <section className="py-12 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4">
              Serviceable Neighborhoods in {loc.name}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {loc.areas.map((ar) => (
                <div
                  key={ar}
                  className="p-3 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 flex items-center gap-2"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{ar}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Available Services in this area */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h3 className="text-lg font-bold text-slate-900 mb-6">
              Popular Metal Fabrication Works Provided in {loc.name}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {allServices.slice(0, 4).map((s) => (
                <Link
                  key={s.id}
                  href={`/services/${s.slug}`}
                  className="group p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-blue-500 hover:bg-white transition"
                >
                  <div className="aspect-[4/3] rounded-lg overflow-hidden mb-3 bg-slate-200">
                    <img
                      src={s.featuredImage}
                      alt={s.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors">
                    {s.name}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {s.shortDesc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <EnquiryForm />
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
