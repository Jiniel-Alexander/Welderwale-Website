'use client';

import React from 'react';
import { Phone, MessageCircle, FileText } from 'lucide-react';
import { CompanySettings } from '@/types';

interface MobileStickyBarProps {
  company: CompanySettings;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ company }) => {
  const scrollToEnquiry = () => {
    const formElement = document.getElementById('enquiry-section') || document.getElementById('enquiry-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <aside aria-label="Quick contact mobile bar" className="fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2 md:hidden shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        {/* Call CTA */}
        <a
          href={`tel:${company.phone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-btn bg-emerald-600 active:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition-all"
        >
          <Phone className="w-4 h-4 mb-0.5" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp CTA */}
        <a
          href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hi Welderwale, I am looking for metal fabrication services. Please share details.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-btn bg-green-500 active:bg-green-600 text-white text-xs font-semibold shadow-sm transition-all"
        >
          <MessageCircle className="w-4 h-4 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Quick Enquiry CTA */}
        <button
          onClick={scrollToEnquiry}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-btn bg-brand-500 active:bg-brand-600 text-slate-950 text-xs font-bold shadow-sm transition-all"
        >
          <FileText className="w-4 h-4 mb-0.5" />
          <span>Quick Quote</span>
        </button>
      </div>
    </aside>
  );
};
