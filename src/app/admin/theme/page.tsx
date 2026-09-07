'use client';

import { useState, useEffect } from 'react';
import { Palette, Check, RefreshCw, Save, AlertCircle } from 'lucide-react';

export default function AdminThemePage() {
  const [primary, setPrimary] = useState('#1e293b');
  const [accent, setAccent] = useState('#f59e0b');
  const [btnRadius, setBtnRadius] = useState('0.5rem');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch('/api/theme')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.theme) {
          if (data.theme.primary) setPrimary(data.theme.primary);
          if (data.theme.accent) setAccent(data.theme.accent);
          if (data.theme.btnRadius) setBtnRadius(data.theme.btnRadius);
        }
      })
      .catch(() => {});
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/theme', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ primary, accent, btnRadius }),
      });
      const data = await res.json();
      if (data.success) {
        setSaved(true);
        setTimeout(() => setSaved(false), 2500);
      }
    } catch {
      // Local fallback
    }
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
            Button & Card Corner Radius
          </label>
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Sharp (0.25rem)', value: '0.25rem' },
              { label: 'Medium (0.5rem)', value: '0.5rem' },
              { label: 'Pill / Rounded (1rem)', value: '1rem' },
            ].map((opt) => (
              <button
                type="button"
                key={opt.value}
                onClick={() => setBtnRadius(opt.value)}
                className={`py-2.5 px-3 rounded-xl border text-xs font-semibold text-center transition ${
                  btnRadius === opt.value
                    ? 'border-blue-600 bg-blue-50 text-blue-700'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <div>
            {saved && (
              <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg">
                <Check className="w-3.5 h-3.5" /> Theme tokens saved!
              </span>
            )}
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition shadow"
          >
            <Save className="w-4 h-4" /> Save Theme Tokens
          </button>
        </div>
      </form>
    </div>
  );
}
