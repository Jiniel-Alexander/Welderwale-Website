import React from 'react';
import Link from 'next/link';
import {
  Users,
  Wrench,
  FolderKanban,
  Sliders,
  Palette,
  Settings,
  ArrowRight,
  Clock,
  Phone,
  MessageCircle,
  ShieldCheck,
  Plus
} from 'lucide-react';
import { getLeads, getServices, getProjects, getHeroSlides } from '@/lib/db';
import { AdminHeader } from '@/components/admin/AdminHeader';
import { isSupabaseConfigured } from '@/lib/supabaseClient';

export default async function AdminDashboardPage() {
  const leads = await getLeads();
  const services = await getServices();
  const projects = await getProjects();
  const slides = await getHeroSlides();

  const newLeadsCount = leads.filter((l) => l.status === 'New').length;

  return (
    <div>
      <AdminHeader
        title="Admin Control Center"
        subtitle="Manage website content, services, portfolio, leads, theme tokens, and SEO"
      />

      <div className="p-6 sm:p-8 space-y-8 max-w-7xl">
        
        {/* System Status Banner */}
        <div className="bg-slate-900 border border-slate-800 rounded-card p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center space-x-2.5">
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                isSupabaseConfigured ? 'bg-emerald-500 animate-pulse' : 'bg-emerald-500'
              }`}
            />
            <span className="font-semibold text-slate-200">
              {isSupabaseConfigured
                ? 'Supabase Cloud Database Connected & Synchronized'
                : 'Local Persistent Data Mode Active (Seed Data Loaded & Functional)'}
            </span>
          </div>
          <div className="text-slate-400">
            Version 1.0.0 • Mobile-First Hybrid Architecture
          </div>
        </div>

        {/* Top KPI Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <Link
            href="/admin/leads"
            className="p-5 rounded-card bg-slate-900 border border-slate-800 hover:border-brand-500/60 transition-all group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Total Enquiries
              </span>
              <div className="w-9 h-9 rounded-btn bg-brand-500/20 text-brand-400 flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-3 flex items-baseline space-x-2">
              <span className="text-3xl font-black text-white">{leads.length}</span>
              {newLeadsCount > 0 && (
                <span className="text-xs font-bold text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded-btn border border-amber-800">
                  {newLeadsCount} New
                </span>
              )}
            </div>
            <div className="mt-3 text-xs font-semibold text-brand-400 flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
              <span>View Leads Inbox</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <Link
            href="/admin/services"
            className="p-5 rounded-card bg-slate-900 border border-slate-800 hover:border-brand-500/60 transition-all group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Active Services
              </span>
              <div className="w-9 h-9 rounded-btn bg-blue-500/20 text-blue-400 flex items-center justify-center">
                <Wrench className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-3">
              <span className="text-3xl font-black text-white">{services.length}</span>
            </div>
            <div className="mt-3 text-xs font-semibold text-brand-400 flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
              <span>Manage Service Catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <Link
            href="/admin/projects"
            className="p-5 rounded-card bg-slate-900 border border-slate-800 hover:border-brand-500/60 transition-all group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Portfolio Projects
              </span>
              <div className="w-9 h-9 rounded-btn bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <FolderKanban className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-3">
              <span className="text-3xl font-black text-white">{projects.length}</span>
            </div>
            <div className="mt-3 text-xs font-semibold text-brand-400 flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
              <span>Manage Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <Link
            href="/admin/builder"
            className="p-5 rounded-card bg-slate-900 border border-slate-800 hover:border-brand-500/60 transition-all group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Page Builder Sections
              </span>
              <div className="w-9 h-9 rounded-btn bg-purple-500/20 text-purple-400 flex items-center justify-center">
                <Sliders className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-3">
              <span className="text-3xl font-black text-white">{slides.length} Slides</span>
            </div>
            <div className="mt-3 text-xs font-semibold text-brand-400 flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
              <span>Reorder & Edit Sections</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

        </div>

        {/* Quick Shortcut Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Recent Leads & Enquiries */}
          <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-card p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h2 className="text-base font-black text-white flex items-center space-x-2">
                <Users className="w-4 h-4 text-brand-500" />
                <span>Recent Customer Enquiries ({leads.length})</span>
              </h2>
              <Link
                href="/admin/leads"
                className="text-xs font-bold text-brand-400 hover:underline"
              >
                View All Leads CRM →
              </Link>
            </div>

            <div className="divide-y divide-slate-800/80">
              {leads.slice(0, 4).map((lead) => (
                <div key={lead.id} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-white text-sm">{lead.name}</span>
                      <span className="px-2 py-0.5 rounded-btn text-[10px] font-bold uppercase bg-brand-500/20 text-brand-400">
                        {lead.service}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded-btn text-[10px] font-bold ${
                          lead.status === 'New'
                            ? 'bg-amber-950 text-amber-300 border border-amber-800'
                            : lead.status === 'Won'
                            ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                            : 'bg-slate-800 text-slate-300'
                        }`}
                      >
                        {lead.status}
                      </span>
                    </div>
                    <div className="text-slate-400">
                      📍 {lead.location} ({lead.area}) • Phone: <strong className="text-slate-200">{lead.phone}</strong>
                    </div>
                    <p className="text-slate-300 line-clamp-1 italic">
                      &ldquo;{lead.requirement}&rdquo;
                    </p>
                  </div>

                  <div className="flex items-center space-x-2 shrink-0">
                    <a
                      href={`tel:${lead.phone}`}
                      className="p-2 rounded-btn bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800"
                      title="Call Lead"
                    >
                      <Phone className="w-3.5 h-3.5 text-brand-500" />
                    </a>
                    <a
                      href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-btn bg-emerald-950 hover:bg-emerald-900 text-emerald-400 border border-emerald-800"
                      title="WhatsApp Lead"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Quick Action Controls */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-slate-900 border border-slate-800 rounded-card p-6 space-y-4">
              <h2 className="text-base font-black text-white border-b border-slate-800 pb-2">
                Quick Actions
              </h2>
              <div className="space-y-2">
                <Link
                  href="/admin/services"
                  className="w-full flex items-center justify-between p-3 rounded-btn bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-200 transition-colors"
                >
                  <span className="flex items-center space-x-2">
                    <Plus className="w-4 h-4 text-brand-500" />
                    <span>Create New Service</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                </Link>

                <Link
                  href="/admin/builder"
                  className="w-full flex items-center justify-between p-3 rounded-btn bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-200 transition-colors"
                >
                  <span className="flex items-center space-x-2">
                    <Sliders className="w-4 h-4 text-purple-400" />
                    <span>Reorder Homepage Layout</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                </Link>

                <Link
                  href="/admin/theme"
                  className="w-full flex items-center justify-between p-3 rounded-btn bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-200 transition-colors"
                >
                  <span className="flex items-center space-x-2">
                    <Palette className="w-4 h-4 text-brand-400" />
                    <span>Customize Theme Colors</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                </Link>

                <Link
                  href="/admin/settings"
                  className="w-full flex items-center justify-between p-3 rounded-btn bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-200 transition-colors"
                >
                  <span className="flex items-center space-x-2">
                    <Settings className="w-4 h-4 text-blue-400" />
                    <span>Edit Phone & Working Hours</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
