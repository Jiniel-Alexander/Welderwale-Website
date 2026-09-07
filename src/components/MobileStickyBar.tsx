import Link from 'next/link';
import { Phone, MessageSquare, FileText } from 'lucide-react';

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 border-t border-slate-800 px-3 py-2 md:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.15)] backdrop-blur-lg bg-opacity-95">
      <div className="grid grid-cols-3 gap-2">
        <a
          href="tel:+919876543210"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold tracking-wide transition shadow-sm"
        >
          <Phone className="w-4 h-4" />
          <span>CALL</span>
        </a>

        <a
          href="https://wa.me/919876543210?text=Hi%20Welderwale%2C%20I%20need%20a%20quotation%20for%20metal%20fabrication."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold tracking-wide transition shadow-sm"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WHATSAPP</span>
        </a>

        <Link
          href="#enquiry-form"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-lg text-xs font-bold tracking-wide transition shadow-sm"
        >
          <FileText className="w-4 h-4" />
          <span>QUOTE</span>
        </Link>
      </div>
    </div>
  );
}
