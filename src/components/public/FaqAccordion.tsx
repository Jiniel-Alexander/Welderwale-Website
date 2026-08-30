'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FaqItem } from '@/types';

interface FaqAccordionProps {
  faqs: FaqItem[];
  title?: string;
  subtitle?: string;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({
  faqs,
  title = 'Frequently Asked Questions',
  subtitle = 'Find quick answers about our fabrication processes, site visits, warranties, and pricing.',
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white relative border-b border-slate-800" aria-label="Frequently Asked Questions">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
            FAQ Hub
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mt-3 tracking-tight">
            {title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id || idx}
                className="rounded-card bg-slate-950/80 border border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between space-x-4 hover:bg-slate-900/60 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-slate-100 flex items-center space-x-2.5">
                    <HelpCircle className="w-4 h-4 text-brand-500 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-brand-500' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-900 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
