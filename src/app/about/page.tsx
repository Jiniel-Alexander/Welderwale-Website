import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';
import EnquiryForm from '@/components/EnquiryForm';
import { ShieldCheck, Award, Users, CheckCircle2, Clock, MapPin } from 'lucide-react';

export const metadata = {
  title: 'About Welderwale | Precision Metal Fabrication Mumbai & Thane',
  description: 'Learn about Welderwale: Over 10 years of structural fabrication, certified welders, precision engineering, and turnkey installation across Mumbai, Thane and Bhayandar.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow pt-24 pb-16">
        <section className="bg-slate-900 text-white py-12 px-4 sm:px-6 border-b border-slate-800">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
              <ShieldCheck className="w-4 h-4" /> 10+ Years of Craftsmanship
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
              About Welderwale Metal Fabrication
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
              Engineering strong, durable, and architecturally refined metal structures for residential, commercial, and industrial clients across Mumbai and Thane.
            </p>
          </div>
        </section>

        {/* Narrative */}
        <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6">
          <div className="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
            <p>
              Founded in Bhayandar, <strong>Welderwale</strong> was established with a singular mission: to bring certified engineering rigor, structural welding standards, and transparent customer service to the metal fabrication sector.
            </p>
            <p>
              Whether we are fabricating a sleek motorized sliding driveway gate for an independent bungalow in Borivali, constructing an 8,000 sq ft industrial warehouse shed in Wagle Estate Thane, or fitting out child-safe balcony safety grills for a high-rise housing society in Kandivali, our commitment to weld integrity, anti-rust surface preparation, and millimeter accuracy remains uncompromising.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <Award className="w-8 h-8 text-amber-500 mb-3" />
              <h3 className="font-bold text-slate-900 text-base mb-1">Certified Welders</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Skilled MIG, TIG, and ARC welders with extensive background in structural steel erection and load-tested joints.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <Clock className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-slate-900 text-base mb-1">On-Time Turnkey Delivery</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Most components are prefabricated in our workshop jigs to minimize on-site noise and reduce installation time by up to 60%.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <ShieldCheck className="w-8 h-8 text-emerald-600 mb-3" />
              <h3 className="font-bold text-slate-900 text-base mb-1">Anti-Rust Protection</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dual-stage surface preparation with zinc phosphate or red-oxide primers and UV-resistant PU polyurethane coats built for coastal weather.
              </p>
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
