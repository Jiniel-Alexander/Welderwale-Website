import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';
import EnquiryForm from '@/components/EnquiryForm';
import { allServices } from '@/data/services';
import { ShieldCheck, CheckCircle2, ArrowLeft, Phone, MessageSquare, ArrowRight } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allServices.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = allServices.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.name} Fabrication & Installation in Mumbai & Thane`,
    description: service.shortDesc,
    openGraph: {
      title: `${service.name} | Welderwale Fabrication`,
      description: service.shortDesc,
      images: [service.featuredImage],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = allServices.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow pt-20">
        {/* Service Hero Banner */}
        <section className="bg-slate-900 text-white py-12 lg:py-16 px-4 sm:px-6 border-b border-slate-800">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-amber-400 transition mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Back to All Services
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" /> {service.category}
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
                  {service.name}
                </h1>
                <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
                  {service.tagline}
                </p>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xl">
                  {service.fullDesc}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    href="#enquiry-form"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg transition"
                  >
                    <span>Request Estimate for {service.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="tel:+919876543210"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition"
                  >
                    <Phone className="w-4 h-4 text-blue-400" /> Call Direct
                  </a>

                  <a
                    href={`https://wa.me/919876543210?text=Hi%20Welderwale%2C%20I%20need%20a%20quote%20for%20${encodeURIComponent(
                      service.name
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition"
                  >
                    <MessageSquare className="w-4 h-4" /> WhatsApp
                  </a>
                </div>
              </div>

              {/* Service Hero Photo */}
              <div className="lg:col-span-5">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border-2 border-slate-700 shadow-2xl bg-slate-800">
                  <img
                    src={service.featuredImage}
                    alt={service.name}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications & Engineering Details */}
        <section className="py-12 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Technical Specifications */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600" /> Technical Specifications
                </h3>
                <div className="divide-y divide-slate-100">
                  {service.specifications.map((spec) => (
                    <div key={spec.key} className="py-2.5 flex flex-col sm:flex-row sm:justify-between text-xs">
                      <span className="font-semibold text-slate-600">{spec.key}</span>
                      <span className="text-slate-900 font-medium sm:text-right mt-0.5 sm:mt-0">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Engineering Features */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500" /> Engineering Advantages
                </h3>
                <ul className="space-y-3">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Typical Applications */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h3 className="text-lg font-bold text-slate-900 mb-6">
              Common Use Cases & Applications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {service.applications.map((app, idx) => (
                <div
                  key={app}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800"
                >
                  <span className="text-amber-500 mr-1.5 font-mono">0{idx + 1}.</span> {app}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="py-12 bg-slate-50 border-b border-slate-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <h3 className="text-lg font-bold text-slate-900 mb-6 text-center">
                Frequently Asked Questions about {service.name}
              </h3>
              <div className="space-y-4">
                {service.faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm"
                  >
                    <h4 className="text-sm font-bold text-slate-900 mb-1.5">
                      {faq.question}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Interactive 3-Step Enquiry Funnel */}
        <EnquiryForm />
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
