'use client';

import React, { useState } from 'react';
import { Settings, Save, CheckCircle2, Phone, MessageCircle, Mail, MapPin, Clock, Globe } from 'lucide-react';
import { initialCompany } from '@/data/initialCompany';
import { CompanySettings } from '@/types';
import { AdminHeader } from '@/components/admin/AdminHeader';

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<CompanySettings>({ ...initialCompany });
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleChange = (field: keyof CompanySettings, val: string | number) => {
    setSettings((prev) => ({ ...prev, [field]: val }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div>
      <AdminHeader
        title="Company Profile & Contact Settings"
        subtitle="Manage business contact numbers, WhatsApp triggers, workshop address, operating hours, and Google Maps."
      />

      <form onSubmit={handleSave} className="p-6 sm:p-8 space-y-6 max-w-5xl">
        
        {/* Top Actions */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-slate-900 border border-slate-800 rounded-card p-4 gap-4">
          <div>
            <div className="text-sm font-bold text-white">Centralized Company Profile</div>
            <div className="text-xs text-slate-400">
              Values automatically populate across header, footer, mobile sticky bar, and JSON-LD schema.
            </div>
          </div>

          <button
            type="submit"
            className="px-6 py-2.5 rounded-btn bg-brand-500 hover:brightness-110 text-slate-950 font-black text-xs flex items-center space-x-1.5 shadow-lg transition-all"
          >
            {savedSuccess ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-950" />
                <span>Settings Saved!</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Save Company Profile</span>
              </>
            )}
          </button>
        </div>

        {savedSuccess && (
          <div className="p-3 rounded-btn bg-emerald-950 border border-emerald-800 text-emerald-200 text-xs flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Company profile updated successfully!</span>
          </div>
        )}

        {/* Section 1: Business Identity */}
        <div className="bg-slate-900 border border-slate-800 rounded-card p-6 space-y-4 text-xs">
          <h2 className="text-sm font-black uppercase tracking-wider text-white border-b border-slate-800 pb-2">
            Business Identity
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-slate-300 mb-1">Company Name</label>
              <input
                type="text"
                required
                value={settings.companyName}
                onChange={(e) => handleChange('companyName', e.target.value)}
                className="w-full px-3 py-2 rounded-btn bg-slate-950 border border-slate-700 text-white"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-300 mb-1">Tagline</label>
              <input
                type="text"
                value={settings.tagline}
                onChange={(e) => handleChange('tagline', e.target.value)}
                className="w-full px-3 py-2 rounded-btn bg-slate-950 border border-slate-700 text-white"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Conversion Contact Channels */}
        <div className="bg-slate-900 border border-slate-800 rounded-card p-6 space-y-4 text-xs">
          <h2 className="text-sm font-black uppercase tracking-wider text-white border-b border-slate-800 pb-2 flex items-center space-x-2">
            <Phone className="w-4 h-4 text-brand-500" />
            <span>Primary Phone & WhatsApp Channels</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-slate-300 mb-1">Phone Number (tel: format)</label>
              <input
                type="text"
                required
                value={settings.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                placeholder="+919876543210"
                className="w-full px-3 py-2 rounded-btn bg-slate-950 border border-slate-700 text-white font-mono"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-300 mb-1">Phone Display Text</label>
              <input
                type="text"
                required
                value={settings.phoneDisplay}
                onChange={(e) => handleChange('phoneDisplay', e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full px-3 py-2 rounded-btn bg-slate-950 border border-slate-700 text-white"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-300 mb-1">WhatsApp Number (digits only with country code)</label>
              <input
                type="text"
                required
                value={settings.whatsapp}
                onChange={(e) => handleChange('whatsapp', e.target.value)}
                placeholder="919876543210"
                className="w-full px-3 py-2 rounded-btn bg-slate-950 border border-slate-700 text-white font-mono"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-300 mb-1">Official Email Address</label>
              <input
                type="email"
                required
                value={settings.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full px-3 py-2 rounded-btn bg-slate-950 border border-slate-700 text-white"
              />
            </div>
          </div>
        </div>

        {/* Section 3: Physical Location & Hours */}
        <div className="bg-slate-900 border border-slate-800 rounded-card p-6 space-y-4 text-xs">
          <h2 className="text-sm font-black uppercase tracking-wider text-white border-b border-slate-800 pb-2 flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-brand-500" />
            <span>Workshop Location & Operating Hours</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <label className="block font-bold text-slate-300 mb-1">Workshop Address</label>
              <input
                type="text"
                required
                value={settings.address}
                onChange={(e) => handleChange('address', e.target.value)}
                className="w-full px-3 py-2 rounded-btn bg-slate-950 border border-slate-700 text-white"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-300 mb-1">City / Region</label>
              <input
                type="text"
                required
                value={settings.city}
                onChange={(e) => handleChange('city', e.target.value)}
                className="w-full px-3 py-2 rounded-btn bg-slate-950 border border-slate-700 text-white"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-300 mb-1">Operating Hours</label>
              <input
                type="text"
                value={settings.workingHours}
                onChange={(e) => handleChange('workingHours', e.target.value)}
                className="w-full px-3 py-2 rounded-btn bg-slate-950 border border-slate-700 text-white"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-300 mb-1">Working Days</label>
              <input
                type="text"
                value={settings.workingDays}
                onChange={(e) => handleChange('workingDays', e.target.value)}
                className="w-full px-3 py-2 rounded-btn bg-slate-950 border border-slate-700 text-white"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-300 mb-1">Service Radius (km)</label>
              <input
                type="number"
                value={settings.serviceRadiusKm}
                onChange={(e) => handleChange('serviceRadiusKm', Number(e.target.value))}
                className="w-full px-3 py-2 rounded-btn bg-slate-950 border border-slate-700 text-white font-mono"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold text-slate-300 mb-1">Google Maps Embed URL</label>
            <input
              type="text"
              value={settings.googleMapsEmbedUrl}
              onChange={(e) => handleChange('googleMapsEmbedUrl', e.target.value)}
              className="w-full px-3 py-2 rounded-btn bg-slate-950 border border-slate-700 text-white font-mono text-[11px]"
            />
          </div>
        </div>

      </form>
    </div>
  );
}
