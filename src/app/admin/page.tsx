import Link from 'next/link';
import { getLeads, getServices, getProjects } from '@/lib/db';
import { Users, Wrench, Image as ImageIcon, ArrowUpRight, Phone, MessageSquare, Clock } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function AdminDashboardPage() {
  const leads = await getLeads();
  const services = await getServices();
  const projects = await getProjects();

  const newLeads = leads.filter((l) => l.status === 'New').length;
  const inProgress = leads.filter((l) => ['Contacted', 'Site Visit', 'Quotation'].includes(l.status)).length;
  const won = leads.filter((l) => l.status === 'Won').length;

  return (
    <div className="space-y-6">
      {/* Top Welcome */}
      <div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">
          Admin Operations Dashboard
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Monitor incoming customer enquiries, manage services catalog, and oversee project portfolio.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
            <span>Total Enquiries</span>
            <Users className="w-4 h-4 text-blue-600" />
          </div>
          <p className="text-3xl font-black text-slate-900 font-mono">{leads.length}</p>
          <span className="text-[11px] text-amber-600 font-semibold mt-1 block">
            {newLeads} Action Required (New)
          </span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
            <span>In Discussion / Site Visit</span>
            <Clock className="w-4 h-4 text-amber-600" />
          </div>
          <p className="text-3xl font-black text-slate-900 font-mono">{inProgress}</p>
          <span className="text-[11px] text-slate-400 mt-1 block">Active sales conversations</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
            <span>Jobs Won</span>
            <ArrowUpRight className="w-4 h-4 text-emerald-600" />
          </div>
          <p className="text-3xl font-black text-slate-900 font-mono">{won}</p>
          <span className="text-[11px] text-emerald-600 font-semibold mt-1 block">Converted quotations</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
            <span>Live Services</span>
            <Wrench className="w-4 h-4 text-slate-700" />
          </div>
          <p className="text-3xl font-black text-slate-900 font-mono">{services.length}</p>
          <span className="text-[11px] text-slate-400 mt-1 block">
            {projects.length} verified site projects
          </span>
        </div>
      </div>

      {/* Recent Enquiries Preview */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900">Recent Customer Leads</h2>
            <p className="text-xs text-slate-500">Latest enquiries submitted through 3-step form</p>
          </div>
          <Link
            href="/admin/leads"
            className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
          >
            <span>View All CRM Leads</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {leads.length === 0 ? (
          <div className="p-10 text-center text-slate-400 text-xs">
            No leads recorded yet. Test the 3-step form on the homepage!
          </div>
        ) : (
          <div className="divide-y divide-slate-100 overflow-x-auto">
            {leads.slice(0, 5).map((lead) => (
              <div key={lead.id} className="p-4 flex items-center justify-between hover:bg-slate-50 transition">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 text-sm">{lead.fullName}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-semibold">
                      {lead.service}
                    </span>
                    <span className="text-xs text-slate-500">
                      • {lead.location} {lead.area ? `(${lead.area})` : ''}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-1">{lead.requirement}</p>
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                      lead.status === 'New'
                        ? 'bg-amber-100 text-amber-800'
                        : lead.status === 'Won'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {lead.status}
                  </span>
                  <a
                    href={`tel:${lead.phone}`}
                    className="p-2 rounded-lg bg-slate-100 hover:bg-blue-600 hover:text-white transition"
                    title="Call"
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={`https://wa.me/91${lead.phone.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-100 hover:bg-emerald-600 hover:text-white transition"
                    title="WhatsApp"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
