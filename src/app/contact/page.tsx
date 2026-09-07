import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';
import EnquiryForm from '@/components/EnquiryForm';
import { Phone, MessageSquare, Mail, MapPin, Clock } from 'lucide-react';

export const metadata = {
  title: 'Contact Welderwale | Call, WhatsApp or Request Metal Fabrication Quote',
  description: 'Reach Welderwale for metal fabrication inquiries across Mumbai and Thane. Call +91 98765 43210 or message directly on WhatsApp.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow pt-24 pb-16">
        <section className="bg-slate-900 text-white py-12 px-4 sm:px-6 border-b border-slate-800">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
              Contact Welderwale Metal Fabrication
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
              Get in touch directly with our fabrication foreman for site measurements, feasibility assessments, and instant quotations.
            </p>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Direct Call</h3>
              <p className="text-xs text-slate-600 mb-3">Instant consultation with our welding supervisor</p>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 hover:underline"
              >
                +91 98765 43210
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">WhatsApp Chat</h3>
              <p className="text-xs text-slate-600 mb-3">Send photos, drawings or audio notes directly</p>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-bold text-emerald-600 hover:underline"
              >
                Start WhatsApp Chat
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Workshop Location</h3>
              <p className="text-xs text-slate-600 mb-2">Bhayandar East, Thane District, Maharashtra</p>
              <span className="text-xs font-semibold text-slate-700">Mon - Sat: 8:30 AM - 8:00 PM</span>
            </div>
          </div>

          {/* Interactive Enquiry Form */}
          <EnquiryForm />
        </section>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
