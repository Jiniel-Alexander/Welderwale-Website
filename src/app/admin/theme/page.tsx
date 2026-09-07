'use client';

import { useState } from 'react';
import { Palette, Check, RefreshCw } from 'lucide-react';

export default function AdminThemePage() {
  const [primary, setPrimary] = useState('#1e293b');
  const [accent, setAccent] = useState('#f59e0b');
  const [btnRadius, setBtnRadius] = useState('0.5rem');
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">
          Global Theme & Design Tokens
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Adjust brand palette, button radii, and styling variables across the entire public website.
        </p>
      </div>

      <form onSubmit={handleSave} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Primary Brand Color (Header, Footers, Headings)
            </label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={primary}
                onChange={(e) => setPrimary(e.target.value)}
                className="w-10 h-10 rounded-lg border cursor-pointer"
              />
              <input
                type="text"
                value={primary}
                onChange={(e) => setPrimary(e.target.value)}
                className="px-3 py-2 border rounded-lg text-xs font-mono w-32"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Accent Color (CTAs, Badges, Highlights)
            </label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={accent}
                onChange={(e) => setAccent(e.target.value)}
                className="w-10 h-10 rounded-lg border cursor-pointer"
              />
              <input
                type="text"
                value={accent}
                onChange={(e) => setAccent(e.target.value)}
                className="px-3 py-2 border rounded-lg text-xs font-mono w-32"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Button Corner Radius
          </label>
          <div className="flex items-center gap-4">
            {['0rem', '0.25rem', '0.5rem', '0.75rem', '9999px'].map((r) => (
              <button
                type="button"
                key={r}
                onClick={() => setBtnRadius(r)}
                style={{ borderRadius: r }}
                className={`px-4 py-2 border text-xs font-bold transition ${
                  btnRadius === r
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'bg-white text-slate-700 border-slate-200'
                }`}
              >
                {r === '9999px' ? 'Pill' : r}
              </button>
            ))}
          </div>
        </div>

        {/* Live Mini Preview Box */}
        <div className="p-4 rounded-xl border border-slate-100 bg-slate-50">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-3">
            Live Preview of Primary & Accent Tokens
          </span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              style={{ backgroundColor: accent, borderRadius: btnRadius }}
              className="px-5 py-2.5 text-slate-950 font-bold text-xs shadow-sm"
            >
              Get Custom Quote
            </button>
            <button
              type="button"
              style={{ backgroundColor: primary, borderRadius: btnRadius }}
              className="px-5 py-2.5 text-white font-semibold text-xs shadow-sm"
            >
              Explore Services
            </button>
          </div>
        </div>

        <div className="pt-2 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            {saved ? (
              <span className="text-emerald-600 font-bold flex items-center gap-1">
                <Check className="w-4 h-4" /> Theme changes applied!
              </span>
            ) : (
              'Changes update CSS custom properties.'
            )}
          </span>

          <button
            type="submit"
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition shadow"
          >
            Save Theme Tokens
          </button>
        </div>
      </form>
    </div>
  );
}
