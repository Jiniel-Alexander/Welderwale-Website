'use client';

import React, { useState } from 'react';
import { Palette, Save, CheckCircle2, RotateCcw, Sparkles } from 'lucide-react';
import { initialTheme } from '@/data/initialTheme';
import { ThemeSettings } from '@/types';
import { AdminHeader } from '@/components/admin/AdminHeader';

export default function AdminThemePage() {
  const [theme, setTheme] = useState<ThemeSettings>({ ...initialTheme });
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleColorChange = (key: keyof ThemeSettings, val: string) => {
    setTheme((prev) => ({ ...prev, [key]: val }));
  };

  const handleResetDefaults = () => {
    if (confirm('Reset all theme colors and tokens to default industrial palette?')) {
      setTheme({ ...initialTheme });
    }
  };

  const handleSaveTheme = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('/api/theme', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(theme),
      });
    } catch {
      // Optimistic save
    }
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div>
      <AdminHeader
        title="Global Theme & Design Tokens Manager"
        subtitle="Customize brand palette, CSS variables, border radiuses, typography, and container width with real-time preview."
      />

      <form onSubmit={handleSaveTheme} className="p-6 sm:p-8 space-y-8 max-w-6xl">
        
        {/* Top Actions */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-slate-900 border border-slate-800 rounded-card p-4 gap-4">
          <div>
            <div className="text-sm font-bold text-white">Dynamic Design Token Engine</div>
            <div className="text-xs text-slate-400">
              Changes update CSS variables across the entire public website in real-time.
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              type="button"
              onClick={handleResetDefaults}
              className="px-4 py-2 rounded-btn bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs font-semibold flex items-center space-x-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>

            <button
              type="submit"
              className="px-6 py-2 rounded-btn bg-brand-500 hover:brightness-110 text-slate-950 font-black text-xs flex items-center space-x-1.5 shadow-lg transition-all"
            >
              {savedSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-950" />
                  <span>Theme Published!</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Publish Theme Tokens</span>
                </>
              )}
            </button>
          </div>
        </div>

        {savedSuccess && (
          <div className="p-3 rounded-btn bg-emerald-950 border border-emerald-800 text-emerald-200 text-xs flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Design tokens updated! Changes propagate immediately.</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Token Controls */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Color Palette Tokens */}
            <div className="bg-slate-900 border border-slate-800 rounded-card p-6 space-y-4">
              <h2 className="text-sm font-black uppercase tracking-wider text-white border-b border-slate-800 pb-2 flex items-center space-x-2">
                <Palette className="w-4 h-4 text-brand-500" />
                <span>Brand Colors</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-300 mb-1">Primary Color (Brand Gold)</label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="color"
                      value={theme.primaryColor}
                      onChange={(e) => handleColorChange('primaryColor', e.target.value)}
                      className="w-10 h-9 rounded bg-slate-950 border border-slate-700 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={theme.primaryColor}
                      onChange={(e) => handleColorChange('primaryColor', e.target.value)}
                      className="flex-1 px-3 py-1.5 rounded-btn bg-slate-950 border border-slate-700 text-white font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-300 mb-1">Primary Hover Color</label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="color"
                      value={theme.primaryHoverColor}
                      onChange={(e) => handleColorChange('primaryHoverColor', e.target.value)}
                      className="w-10 h-9 rounded bg-slate-950 border border-slate-700 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={theme.primaryHoverColor}
                      onChange={(e) => handleColorChange('primaryHoverColor', e.target.value)}
                      className="flex-1 px-3 py-1.5 rounded-btn bg-slate-950 border border-slate-700 text-white font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-300 mb-1">Secondary (Dark Slate)</label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="color"
                      value={theme.secondaryColor}
                      onChange={(e) => handleColorChange('secondaryColor', e.target.value)}
                      className="w-10 h-9 rounded bg-slate-950 border border-slate-700 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={theme.secondaryColor}
                      onChange={(e) => handleColorChange('secondaryColor', e.target.value)}
                      className="flex-1 px-3 py-1.5 rounded-btn bg-slate-950 border border-slate-700 text-white font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-300 mb-1">Accent (Hot Orange)</label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="color"
                      value={theme.accentColor}
                      onChange={(e) => handleColorChange('accentColor', e.target.value)}
                      className="w-10 h-9 rounded bg-slate-950 border border-slate-700 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={theme.accentColor}
                      onChange={(e) => handleColorChange('accentColor', e.target.value)}
                      className="flex-1 px-3 py-1.5 rounded-btn bg-slate-950 border border-slate-700 text-white font-mono"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Layout & Radiuses */}
            <div className="bg-slate-900 border border-slate-800 rounded-card p-6 space-y-4 text-xs">
              <h2 className="text-sm font-black uppercase tracking-wider text-white border-b border-slate-800 pb-2">
                Radius & Layout Geometry
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-300 mb-1">Button Border Radius</label>
                  <select
                    value={theme.radiusBtn}
                    onChange={(e) => handleColorChange('radiusBtn', e.target.value)}
                    className="w-full px-3 py-2 rounded-btn bg-slate-950 border border-slate-700 text-white font-medium"
                  >
                    <option value="0.25rem">Small (4px)</option>
                    <option value="0.5rem">Medium (8px - Default)</option>
                    <option value="0.75rem">Large (12px)</option>
                    <option value="9999px">Fully Rounded (Pill)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-300 mb-1">Card Border Radius</label>
                  <select
                    value={theme.radiusCard}
                    onChange={(e) => handleColorChange('radiusCard', e.target.value)}
                    className="w-full px-3 py-2 rounded-btn bg-slate-950 border border-slate-700 text-white font-medium"
                  >
                    <option value="0.5rem">Medium (8px)</option>
                    <option value="0.75rem">Large (12px - Default)</option>
                    <option value="1rem">Extra Large (16px)</option>
                  </select>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Live Design System Preview */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-card p-6 shadow-2xl space-y-4 sticky top-24">
              <div className="flex items-center space-x-2 text-sm font-black text-white border-b border-slate-800 pb-2">
                <Sparkles className="w-4 h-4 text-brand-500" />
                <span>Live Component Preview</span>
              </div>

              {/* Sample Card */}
              <div
                className="p-5 border transition-all"
                style={{
                  backgroundColor: theme.secondaryColor,
                  borderRadius: theme.radiusCard,
                  borderColor: theme.borderColor,
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="px-2.5 py-0.5 text-[10px] font-bold uppercase"
                    style={{
                      backgroundColor: `${theme.primaryColor}20`,
                      color: theme.primaryColor,
                      borderRadius: theme.radiusBtn,
                      border: `1px solid ${theme.primaryColor}40`,
                    }}
                  >
                    Featured Metal Sheds
                  </span>
                </div>

                <h3 className="text-base font-black text-white mb-2">
                  High-Clearance Factory Warehouse
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Engineered with heavy built-up columns and 0.50mm pre-painted Galvalume sheets.
                </p>

                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    style={{
                      backgroundColor: theme.primaryColor,
                      borderRadius: theme.radiusBtn,
                    }}
                    className="px-4 py-2 text-slate-950 font-black text-xs shadow-md"
                  >
                    Request Quotation
                  </button>
                  <button
                    type="button"
                    style={{
                      borderRadius: theme.radiusBtn,
                    }}
                    className="px-3 py-2 bg-slate-950 text-slate-300 border border-slate-700 text-xs font-semibold"
                  >
                    View Specs
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </form>
    </div>
  );
}
