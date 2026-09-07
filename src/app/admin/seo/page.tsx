'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Globe,
  Save,
  Check,
  AlertCircle,
  ExternalLink,
  Activity,
  BarChart3,
  Eye,
  FileText,
  Search,
  Zap,
  ShieldCheck,
  Code
} from 'lucide-react';
import { SeoIntegrations } from '@/types';

export default function AdminSeoPage() {
  const [integrations, setIntegrations] = useState<SeoIntegrations>({
    ga4Enabled: true,
    ga4Id: '',
    clarityEnabled: false,
    clarityId: '',
    gscVerification: '',
    gtmEnabled: false,
    gtmId: '',
    metaPixelEnabled: false,
    metaPixelId: '',
    customHeadScript: '',
  });

  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/integrations')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.integrations) {
          setIntegrations(data.integrations);
        }
      })
      .catch(() => setError('Failed to load integration settings'))
      .finally(() => setLoading(false));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/integrations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(integrations),
      });
      const data = await res.json();
      if (data.success) {
        setSaved(true);
        setError('');
        setTimeout(() => setSaved(false), 3000);
      } else {
        setError('Error saving settings');
      }
    } catch {
      setError('Connection error');
    }
  };

  return (
    <div className="space-y-6 max-w-5xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-1">
            <Globe className="w-3.5 h-3.5" /> Marketing & Visibility Hub
          </div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            SEO, Analytics & Tag Integrations
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Connect Google Analytics 4, Microsoft Clarity heatmaps, Google Search Console, Tag Manager, and Meta Pixel without touching source code.
          </p>
        </div>

        {/* Quick Crawler Verification Hub */}
        <div className="flex items-center gap-2">
          <Link
            href="/sitemap.xml"
            target="_blank"
            className="inline-flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition"
          >
            <FileText className="w-3.5 h-3.5 text-blue-600" />
            <span>Sitemap.xml</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </Link>
          <Link
            href="/robots.txt"
            target="_blank"
            className="inline-flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Robots.txt</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </Link>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Service 1: Google Analytics 4 */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-black text-lg">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  Google Analytics 4 (GA4)
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    integrations.ga4Enabled && integrations.ga4Id
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-slate-100 text-slate-500'
                  }`}>
                    {integrations.ga4Enabled && integrations.ga4Id ? 'Connected' : 'Not Connected'}
                  </span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Tracks visitor sessions, pageviews, location metrics, and enquiry form conversion events.
                </p>
              </div>
            </div>

            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={integrations.ga4Enabled}
                onChange={(e) => setIntegrations({ ...integrations, ga4Enabled: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                GA4 Measurement ID
              </label>
              <input
                type="text"
                value={integrations.ga4Id}
                onChange={(e) => setIntegrations({ ...integrations, ga4Id: e.target.value.trim() })}
                placeholder="e.g., G-XXXXXXXXXX"
                className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-xs font-mono text-slate-900 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="text-[11px] text-slate-400">
              Enter your stream ID from Google Analytics &gt; Admin &gt; Data Streams &gt; Measurement ID.
            </div>
          </div>
        </div>

        {/* Service 2: Microsoft Clarity */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center font-black text-lg">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  Microsoft Clarity (Heatmaps & Session Recordings)
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    integrations.clarityEnabled && integrations.clarityId
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-slate-100 text-slate-500'
                  }`}>
                    {integrations.clarityEnabled && integrations.clarityId ? 'Active' : 'Disabled'}
                  </span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Watch live session replays, click heatmaps, and user scroll depth across mobile and desktop.
                </p>
              </div>
            </div>

            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={integrations.clarityEnabled}
                onChange={(e) => setIntegrations({ ...integrations, clarityEnabled: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Clarity Project ID
              </label>
              <input
                type="text"
                value={integrations.clarityId}
                onChange={(e) => setIntegrations({ ...integrations, clarityId: e.target.value.trim() })}
                placeholder="e.g., k7z9f3m8"
                className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-xs font-mono text-slate-900 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="text-[11px] text-slate-400">
              Obtained from clarity.microsoft.com &gt; Project Settings &gt; Overview.
            </div>
          </div>
        </div>

        {/* Service 3: Google Search Console */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-black text-lg">
                <Search className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  Google Search Console (GSC) Ownership Verification
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    integrations.gscVerification
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-slate-100 text-slate-500'
                  }`}>
                    {integrations.gscVerification ? 'Verified Token Present' : 'Pending Verification'}
                  </span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Verifies site ownership for Google indexation, keyword ranking queries, and sitemap crawling.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                HTML Verification Meta Tag Content Token
              </label>
              <input
                type="text"
                value={integrations.gscVerification}
                onChange={(e) => setIntegrations({ ...integrations, gscVerification: e.target.value.trim() })}
                placeholder="e.g., abc123def456_xyz789 (content of google-site-verification)"
                className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-xs font-mono text-slate-900 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="text-[11px] text-slate-400">
              When adding property in Search Console, choose &quot;HTML tag&quot; method and paste only the content code here.
            </div>
          </div>
        </div>

        {/* Service 4: Google Tag Manager (GTM) */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 flex items-center justify-center font-black text-lg">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  Google Tag Manager (GTM)
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    integrations.gtmEnabled && integrations.gtmId
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-slate-100 text-slate-500'
                  }`}>
                    {integrations.gtmEnabled && integrations.gtmId ? 'Active' : 'Disabled'}
                  </span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Container for multi-tag management, conversion tracking, and advanced ad pixels.
                </p>
              </div>
            </div>

            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={integrations.gtmEnabled}
                onChange={(e) => setIntegrations({ ...integrations, gtmEnabled: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                GTM Container ID
              </label>
              <input
                type="text"
                value={integrations.gtmId}
                onChange={(e) => setIntegrations({ ...integrations, gtmId: e.target.value.trim() })}
                placeholder="e.g., GTM-XXXXXXX"
                className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-xs font-mono text-slate-900 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="text-[11px] text-slate-400">
              Found at the top header of tagmanager.google.com dashboard.
            </div>
          </div>
        </div>

        {/* Service 5: Meta / Facebook Pixel */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center font-black text-lg">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  Meta (Facebook & Instagram) Pixel
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    integrations.metaPixelEnabled && integrations.metaPixelId
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-slate-100 text-slate-500'
                  }`}>
                    {integrations.metaPixelEnabled && integrations.metaPixelId ? 'Active' : 'Disabled'}
                  </span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Remarketing tracking for Meta Ads to retarget visitors searching for metal gates and shed fabrication.
                </p>
              </div>
            </div>

            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={integrations.metaPixelEnabled}
                onChange={(e) => setIntegrations({ ...integrations, metaPixelEnabled: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Meta Pixel ID
              </label>
              <input
                type="text"
                value={integrations.metaPixelId}
                onChange={(e) => setIntegrations({ ...integrations, metaPixelId: e.target.value.trim() })}
                placeholder="e.g., 123456789012345"
                className="w-full rounded-xl border border-slate-300 px-3.5 py-2 text-xs font-mono text-slate-900 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="text-[11px] text-slate-400">
              Found in Meta Business Suite &gt; Events Manager &gt; Data Sources.
            </div>
          </div>
        </div>

        {/* Save Bar */}
        <div className="p-4 bg-white rounded-2xl border border-slate-200 flex items-center justify-between shadow-sm">
          <div>
            {saved && (
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg">
                <Check className="w-4 h-4" /> SEO & Analytics settings saved and active on website!
              </span>
            )}
            {error && (
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 bg-rose-50 px-3 py-1.5 rounded-lg">
                <AlertCircle className="w-4 h-4" /> {error}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition shadow"
          >
            <Save className="w-4 h-4" /> Save Integrations
          </button>
        </div>
      </form>
    </div>
  );
}
