import React from 'react';
import { ShieldCheck, Crosshair, Clock, Award, Wrench, CheckCircle } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: <Award className="w-6 h-6 text-brand-500" />,
      title: 'AWS & IS Certified Welders',
      desc: 'Our workshop welders are certified in TIG (Argon), MIG (CO2), and SMAW with strict adherence to IS 800 and AWS D1.1 structural standards.',
    },
    {
      icon: <Crosshair className="w-6 h-6 text-brand-500" />,
      title: '1.0 mm Laser Precision Tolerance',
      desc: 'CNC profile cutting, precision miter saws, and customized assembly jigs ensure perfect squareness and zero on-site geometric errors.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-500" />,
      title: 'Marine-Grade Anti-Rust Coatings',
      desc: 'Engineered for high-humidity coastal Mumbai/Thane environments using hot-dip galvanizing, zinc-phosphate epoxy primers, and 200°C baked powder coats.',
    },
    {
      icon: <Clock className="w-6 h-6 text-brand-500" />,
      title: 'Rapid 24–48 Hr Site Visits',
      desc: 'Fast mobilization across Mumbai, Thane, Bhayandar, Mira Road, Vasai, and Kalyan with laser measurement and prompt quote generation.',
    },
    {
      icon: <Wrench className="w-6 h-6 text-brand-500" />,
      title: 'Turnkey Design to Installation',
      desc: 'Complete end-to-end responsibility covering CAD drawings, steel procurement, workshop fabrication, transport, crane lifting, and erection.',
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-brand-500" />,
      title: 'Transparent Itemized Quotations',
      desc: 'Detailed breakdown of steel gauges, alloy grades, welding processes, and hardware with zero hidden extras or surprise cost escalations.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white relative border-b border-slate-800" aria-label="Why Choose Welderwale">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
            Our Advantage
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mt-3 tracking-tight">
            Why Builders, Architects & Homeowners Trust Welderwale
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
            We don’t compromise on steel thickness, weld strength, or finishing quality. Here is what sets our fabrication apart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {points.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-card bg-slate-950/60 border border-slate-800 hover:border-brand-500/40 transition-colors group flex items-start space-x-4"
            >
              <div className="w-12 h-12 rounded-btn bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-brand-500 transition-colors">
                {item.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-brand-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
