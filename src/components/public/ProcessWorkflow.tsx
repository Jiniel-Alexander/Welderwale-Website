import React from 'react';
import { Ruler, FileCheck, Hammer, Sparkles } from 'lucide-react';

export const ProcessWorkflow: React.FC = () => {
  const steps = [
    {
      step: '01',
      icon: <Ruler className="w-6 h-6 text-brand-500" />,
      title: 'Consultation & Site Measurement',
      desc: 'Our engineering team visits your site within 24–48 hours for laser measurements, structural feasibility assessment, and design consulting.',
    },
    {
      step: '02',
      icon: <FileCheck className="w-6 h-6 text-brand-500" />,
      title: 'CAD Drafting & Fixed Quote',
      desc: 'We produce detailed 2D/3D CAD shop drawings, material load specifications, and a transparent itemized quotation with zero hidden charges.',
    },
    {
      step: '03',
      icon: <Hammer className="w-6 h-6 text-brand-500" />,
      title: 'Workshop Precision Fabrication',
      desc: 'High-precision cutting, jig fitting, certified TIG/MIG welding, and multi-stage anti-corrosion primer application in our Bhayandar workshop.',
    },
    {
      step: '04',
      icon: <Sparkles className="w-6 h-6 text-brand-500" />,
      title: 'On-Site Erection & Quality QA',
      desc: 'Zero-mess on-site erection, high-tensile anchor fastening, final protective topcoat touchups, and thorough structural load testing before handover.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-950 text-white relative border-b border-slate-800" aria-label="Our 4-Step Process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
            How We Work
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mt-3 tracking-tight">
            Streamlined 4-Step Fabrication Process
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
            From initial site measurement to final bolt tightening, we ensure rigid structural safety, millimeter precision, and timely delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="relative p-6 rounded-card bg-slate-900 border border-slate-800 hover:border-brand-500/50 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-btn bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:border-brand-500 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-3xl font-black text-slate-800 group-hover:text-brand-500/30 transition-colors">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-slate-700 font-bold">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
