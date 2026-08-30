import React from 'react';
import { Metadata } from 'next';
import { Phone, MessageCircle, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { getCompanySettings, getServices } from '@/lib/db';
import { EnquiryForm } from '@/components/public/EnquiryForm';

export const metadata: Metadata = {
  title: 'Contact Welderwale | Metal Fabrication Quotes in Mumbai & Thane',
  description: 'Contact Welderwale for rapid site visits, laser measurements, and quotations. Workshop located in Bhayandar East serving Mumbai and Thane (~50 KM radius).',
  alternates: {
    canonical: '/contact',
  },
};

export default async function ContactPage() {
  const company = await getCompanySettings();
  const services = await getServices();

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-900 border-b border-slate-800 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-3 tracking-tight">
            Contact Welderwale Fabrication
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Reach out for quick estimates, site measurements, or technical consultations. We respond promptly via phone, WhatsApp, or our online 3-step enquiry form.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: 3-Step Enquiry Funnel */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="text-2xl font-black text-white">
                Request an Itemized Quotation
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Fill out our simple 3-step form. We’ll calculate preliminary steel & labor costs and schedule a measurement visit.
              </p>
            </div>
            <EnquiryForm services={services} company={company} />
          </div>

          {/* Right Column: Contact Details & Google Maps */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-card p-6 sm:p-8 space-y-5">
              <h3 className="text-lg font-black text-white border-b border-slate-800 pb-3">
                Workshop & Office Details
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Fabrication Workshop:</span>
                    <span className="text-slate-400">{company.address}, {company.city} - {company.pincode}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Direct Phone (Primary Conversion):</span>
                    <a href={`tel:${company.phone}`} className="text-brand-400 font-bold hover:underline">
                      {company.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">WhatsApp Direct Chat:</span>
                    <a
                      href={`https://wa.me/${company.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 font-bold hover:underline"
                    >
                      {company.whatsappDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Email:</span>
                    <a href={`mailto:${company.email}`} className="text-slate-300 hover:text-white">
                      {company.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Operating Hours:</span>
                    <span className="text-slate-400">{company.workingHours} ({company.workingDays})</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="bg-slate-900 border border-slate-800 rounded-card overflow-hidden h-64 relative shadow-xl">
              <iframe
                title="Welderwale Workshop Google Map Location"
                src={company.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-90 contrast-125 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
