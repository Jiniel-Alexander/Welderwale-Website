'use client';

import { useState, useEffect } from 'react';
import { LeadSubmission } from '@/types';
import { Phone, MessageSquare, Search, Filter, CheckCircle2, FileText, ChevronDown } from 'lucide-react';

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<LeadSubmission[]>([]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [loading, setLoading] = useState(true);

  const fetchLeads = async () => {
    try {
      const res = await fetch('/api/enquiries');
      const data = await res.json();
      if (data.success) {
        setLeads(data.leads);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleStatusChange = async (id: string, newStatus: LeadSubmission['status']) => {
    try {
      await fetch('/api/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus }),
      });
      setLeads((prev) =>
        prev.map((l) => (l.id === id ? { ...l, status: newStatus } : l))
      );
    } catch (e) {
      console.error('Failed to update status', e);
    }
  };

  const filtered = leads.filter((lead) => {
    const matchesSearch =
      lead.fullName.toLowerCase().includes(search.toLowerCase()) ||
      lead.phone.includes(search) ||
      lead.service.toLowerCase().includes(search.toLowerCase()) ||
      lead.location.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = statusFilter === 'All' || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Customer Leads & CRM Pipeline
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Track inquiries, update sales progression, and communicate directly via Phone or WhatsApp.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search leads..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-blue-500"
            />
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none"
          >
            <option value="All">All Statuses</option>
            <option value="New">New</option>
            <option value="Contacted">Contacted</option>
            <option value="Site Visit">Site Visit</option>
            <option value="Quotation">Quotation</option>
            <option value="Won">Won</option>
            <option value="Lost">Lost</option>
            <option value="Closed">Closed</option>
          </select>
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-xs text-slate-400">Loading leads...</div>
        ) : filtered.length === 0 ? (
          <div className="p-12 text-center text-xs text-slate-400">
            No customer inquiries found.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/75 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  <th className="p-4">Customer</th>
                  <th className="p-4">Service & Requirement</th>
                  <th className="p-4">Location</th>
                  <th className="p-4">Status & Pipeline</th>
                  <th className="p-4 text-right">Quick Contact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
                {filtered.map((lead) => (
                  <tr key={lead.id} className="hover:bg-slate-50 transition">
                    <td className="p-4">
                      <p className="font-bold text-slate-900">{lead.fullName}</p>
                      <p className="text-slate-500 text-[11px]">{lead.phone}</p>
                      {lead.email && <p className="text-slate-400 text-[11px]">{lead.email}</p>}
                    </td>

                    <td className="p-4 max-w-xs">
                      <span className="inline-block px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold text-[11px] mb-1">
                        {lead.service}
                      </span>
                      <p className="text-slate-600 line-clamp-2 leading-relaxed">
                        {lead.requirement}
                      </p>
                      {lead.attachmentName && (
                        <div className="mt-1 flex items-center gap-1 text-[11px] text-amber-600 font-medium">
                          <FileText className="w-3 h-3" />
                          <span>{lead.attachmentName}</span>
                        </div>
                      )}
                    </td>

                    <td className="p-4">
                      <p className="font-semibold text-slate-800">{lead.location}</p>
                      <p className="text-slate-500 text-[11px]">{lead.area || 'General Area'}</p>
                    </td>

                    <td className="p-4">
                      <select
                        value={lead.status}
                        onChange={(e) =>
                          handleStatusChange(lead.id!, e.target.value as LeadSubmission['status'])
                        }
                        className={`text-xs font-bold px-2.5 py-1 rounded-lg border focus:outline-none ${
                          lead.status === 'New'
                            ? 'bg-amber-50 text-amber-800 border-amber-200'
                            : lead.status === 'Won'
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                            : 'bg-slate-50 text-slate-800 border-slate-200'
                        }`}
                      >
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Site Visit">Site Visit</option>
                        <option value="Quotation">Quotation</option>
                        <option value="Won">Won</option>
                        <option value="Lost">Lost</option>
                        <option value="Closed">Closed</option>
                      </select>
                    </td>

                    <td className="p-4 text-right">
                      <div className="inline-flex items-center gap-2">
                        <a
                          href={`tel:${lead.phone}`}
                          className="p-2 rounded-lg bg-slate-100 hover:bg-blue-600 hover:text-white transition"
                          title="Call Customer"
                        >
                          <Phone className="w-3.5 h-3.5" />
                        </a>
                        <a
                          href={`https://wa.me/91${lead.phone.replace(/\D/g, '')}?text=Hi%20${encodeURIComponent(
                            lead.fullName
                          )}%2C%20this%20is%20Welderwale%20regarding%20your%20${encodeURIComponent(
                            lead.service
                          )}%20inquiry.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-slate-100 hover:bg-emerald-600 hover:text-white transition"
                          title="WhatsApp Customer"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
