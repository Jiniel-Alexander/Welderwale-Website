'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Search,
  Globe,
  Save,
  CheckCircle2,
  ExternalLink,
  Plus,
  Trash2,
  FileCode,
  ShieldCheck
} from 'lucide-react';
import { RedirectRule } from '@/types/cms';
import { AdminHeader } from '@/components/admin/AdminHeader';

export default function AdminSeoPage() {
  const [seoTitle, setSeoTitle] = useState(
    'Welderwale | Precision Metal Fabrication & Welding Services in Mumbai & Thane'
  );
  const [seoDescription, setSeoDescription] = useState(
    'Leading metal fabrication contractor serving Mumbai, Thane & Bhayandar. Industrial sheds, gates, railings, pergolas, custom steel frames, and 3-step quick quotes.'
  );
  const [ogImage, setOgImage] = useState(
    'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80'
  );

  const [redirects, setRedirects] = useState<RedirectRule[]>([
    {
      id: 'red-1',
      sourceUrl: '/sheds',
      targetUrl: '/services/metal-sheds',
      statusCode: 301,
      isActive: true,
      createdAt: new Date().toISOString(),
    },
    {
      id: 'red-2',
      sourceUrl: '/gates',
      targetUrl: '/services/metal-gates',
      statusCode: 301,
      isActive: true,
      createdAt: new Date().toISOString(),
    },
  ]);

  const [newSource, setNewSource] = useState('');
  const [newTarget, setNewTarget] = useState('');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleAddRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSource.trim() || !newTarget.trim()) return;

    const newRule: RedirectRule = {
      id: `red-${Date.now()}`,
      sourceUrl: newSource.trim().startsWith('/') ? newSource.trim() : `/${newSource.trim()}`,
      targetUrl: newTarget.trim().startsWith('/') ? newTarget.trim() : `/${newTarget.trim()}`,
      statusCode: 301,
      isActive: true,
      createdAt: new Date().toISOString(),
    };

    setRedirects((prev) => [...prev, newRule]);
    setNewSource('');
    setNewTarget('');
  };

  const handleDeleteRedirect = (id: string) => {
    setRedirects((prev) => prev.filter((r) => r.id !== id));
  };

  const handleSaveSeo = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div>
      <AdminHeader
        title="SEO Engine & URL Redirects Manager"
        subtitle="Manage global metadata, JSON-LD schema integrations, dynamic sitemap validation, and 301/302 URL redirects."
      />

      <div className="p-6 sm:p-8 space-y-8 max-w-5xl">
        
        {/* SEO Health Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-card bg-slate-900 border border-slate-800 flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-slate-400">XML Sitemap</div>
              <div className="text-sm font-black text-emerald-400 mt-0.5">Active & Dynamic</div>
            </div>
            <Link
              href="/sitemap.xml"
              target="_blank"
              className="p-2 rounded-btn bg-slate-950 hover:bg-slate-800 text-brand-400"
            >
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>

          <div className="p-4 rounded-card bg-slate-900 border border-slate-800 flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-slate-400">Robots.txt</div>
              <div className="text-sm font-black text-emerald-400 mt-0.5">Configured</div>
            </div>
            <Link
              href="/robots.txt"
              target="_blank"
              className="p-2 rounded-btn bg-slate-950 hover:bg-slate-800 text-brand-400"
            >
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>

          <div className="p-4 rounded-card bg-slate-900 border border-slate-800 flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-slate-400">JSON-LD Schemas</div>
              <div className="text-sm font-black text-emerald-400 mt-0.5">LocalBusiness + Service</div>
            </div>
            <div className="p-2 rounded-btn bg-slate-950 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>
        </div>

        {savedSuccess && (
          <div className="p-3 rounded-btn bg-emerald-950 border border-emerald-800 text-emerald-200 text-xs flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>SEO metadata saved successfully!</span>
          </div>
        )}

        {/* Global Metadata Form */}
        <form onSubmit={handleSaveSeo} className="bg-slate-900 border border-slate-800 rounded-card p-6 space-y-4 text-xs">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h2 className="text-sm font-black uppercase tracking-wider text-white flex items-center space-x-2">
              <Search className="w-4 h-4 text-brand-500" />
              <span>Homepage & Default Search Engine Metadata</span>
            </h2>
            <button
              type="submit"
              className="px-5 py-2 rounded-btn bg-brand-500 hover:brightness-110 text-slate-950 font-black flex items-center space-x-1.5 shadow-md"
            >
              <Save className="w-4 h-4" />
              <span>Save Meta</span>
            </button>
          </div>

          <div>
            <label className="block font-bold text-slate-300 mb-1">Default Meta Title *</label>
            <input
              type="text"
              required
              value={seoTitle}
              onChange={(e) => setSeoTitle(e.target.value)}
              className="w-full px-3 py-2 rounded-btn bg-slate-950 border border-slate-700 text-white font-medium"
            />
            <div className="text-[11px] text-slate-500 mt-1">Recommended length: 50–60 characters</div>
          </div>

          <div>
            <label className="block font-bold text-slate-300 mb-1">Default Meta Description *</label>
            <textarea
              rows={3}
              required
              value={seoDescription}
              onChange={(e) => setSeoDescription(e.target.value)}
              className="w-full px-3 py-2 rounded-btn bg-slate-950 border border-slate-700 text-white leading-relaxed"
            />
            <div className="text-[11px] text-slate-500 mt-1">Recommended length: 140–160 characters</div>
          </div>

          <div>
            <label className="block font-bold text-slate-300 mb-1">OpenGraph Social Share Image (1200x630)</label>
            <input
              type="url"
              value={ogImage}
              onChange={(e) => setOgImage(e.target.value)}
              className="w-full px-3 py-2 rounded-btn bg-slate-950 border border-slate-700 text-white font-mono text-[11px]"
            />
          </div>
        </form>

        {/* 301/302 Redirect Manager */}
        <div className="bg-slate-900 border border-slate-800 rounded-card p-6 space-y-4 text-xs">
          <h2 className="text-sm font-black uppercase tracking-wider text-white border-b border-slate-800 pb-2">
            301 Permanent URL Redirects
          </h2>
          <p className="text-slate-400">
            Set up automatic 301 redirects to preserve search ranking equity when URLs or service names change.
          </p>

          <form onSubmit={handleAddRedirect} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <input
              type="text"
              required
              value={newSource}
              onChange={(e) => setNewSource(e.target.value)}
              placeholder="From: /old-service-url"
              className="px-3 py-2 rounded-btn bg-slate-950 border border-slate-700 text-white font-mono"
            />
            <input
              type="text"
              required
              value={newTarget}
              onChange={(e) => setNewTarget(e.target.value)}
              placeholder="To: /services/new-service"
              className="px-3 py-2 rounded-btn bg-slate-950 border border-slate-700 text-white font-mono"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-btn bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold flex items-center justify-center space-x-1.5 border border-slate-700"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add 301 Redirect</span>
            </button>
          </form>

          {/* Redirects list */}
          <div className="divide-y divide-slate-800 border border-slate-800 rounded-card overflow-hidden bg-slate-950">
            {redirects.map((rule) => (
              <div key={rule.id} className="p-3 flex items-center justify-between gap-4 font-mono">
                <div className="flex items-center space-x-3 text-slate-300">
                  <span className="px-2 py-0.5 rounded bg-blue-950 text-blue-400 font-bold text-[10px]">
                    {rule.statusCode}
                  </span>
                  <span>{rule.sourceUrl}</span>
                  <span className="text-slate-600">➔</span>
                  <span className="text-brand-400">{rule.targetUrl}</span>
                </div>
                <button
                  onClick={() => handleDeleteRedirect(rule.id)}
                  className="text-slate-500 hover:text-red-400"
                  title="Remove Redirect"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
