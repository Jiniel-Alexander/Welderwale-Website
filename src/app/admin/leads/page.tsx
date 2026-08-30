'use client';

import React, { useState } from 'react';
import {
  Users,
  Search,
  Phone,
  MessageCircle,
  Download,
  Calendar,
  MapPin,
  Wrench,
  FileText,
  CheckCircle2,
  Clock,
  Filter,
  Save
} from 'lucide-react';
import { Lead, LeadStatus } from '@/types';
import { AdminHeader } from '@/components/admin/AdminHeader';

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([
    {
      id: 'lead-1',
      createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
      name: 'Pradeep Sharma',
      phone: '+919820123456',
      email: 'pradeep.sharma@example.com',
      service: 'Metal Sheds',
      location: 'Vasai',
      area: 'Vasai East Industrial Area',
      requirement: 'Need a 4,000 sq ft industrial PEB shed for our plastic manufacturing unit. Require site visit for level check and quote.',
      source: 'Website 3-Step Funnel',
      status: 'New',
      preferredContact: 'Call',
    },
    {
      id: 'lead-2',
      createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
      name: 'Anjali Deshmukh',
      phone: '+919819876543',
      email: 'anjali.d@example.com',
      service: 'Garden Pergola',
      location: 'Mira Road',
      area: 'Beverly Park',
      requirement: 'Looking for a 14x10 ft black metal pergola with glass roof for terrace duplex.',
      source: 'Website 3-Step Funnel',
      status: 'Site Visit',
      notes: 'Site visit completed on Saturday. Sent preliminary 3D drawing and quote.',
      preferredContact: 'WhatsApp',
    },
    {
      id: 'lead-3',
      createdAt: new Date(Date.now() - 3600000 * 48).toISOString(),
      name: 'Ketan Shah',
      phone: '+919833445566',
      service: 'Metal Gates',
      location: 'Borivali',
      area: 'IC Colony',
      requirement: 'Motorized sliding gate for our society entrance. Opening is 16 feet wide.',
      source: 'Website 3-Step Funnel',
      status: 'Quotation',
      notes: 'Quote sent: ₹1,45,000 for gate + Italian motor kit.',
      preferredContact: 'Call',
    },
    {
      id: 'lead-4',
      createdAt: new Date(Date.now() - 3600000 * 72).toISOString(),
      name: 'Mahesh Patil',
      phone: '+919822110099',
      service: 'Structural Fabrication',
      location: 'Thane',
      area: 'Wagle Industrial Estate',
      requirement: '2,500 sq ft heavy steel mezzanine floor inside warehouse.',
      source: 'Website 3-Step Funnel',
      status: 'Won',
      notes: 'Advance received. Fabrication in progress at Bhayandar workshop.',
      preferredContact: 'Call',
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [activeLead, setActiveLead] = useState<Lead | null>(null);

  const statuses: LeadStatus[] = [
    'New',
    'Contacted',
    'Site Visit',
    'Quotation',
    'Won',
    'Lost',
    'Closed',
  ];

  const handleStatusChange = (id: string, newStatus: LeadStatus) => {
    setLeads((prev) =>
      prev.map((l) => (l.id === id ? { ...l, status: newStatus } : l))
    );
    if (activeLead && activeLead.id === id) {
      setActiveLead((prev) => (prev ? { ...prev, status: newStatus } : null));
    }
  };

  const handleNotesChange = (id: string, notes: string) => {
    setLeads((prev) =>
      prev.map((l) => (l.id === id ? { ...l, notes } : l))
    );
    if (activeLead && activeLead.id === id) {
      setActiveLead((prev) => (prev ? { ...prev, notes } : null));
    }
  };

  const filteredLeads = leads.filter((lead) => {
    const matchesStatus = statusFilter === 'All' || lead.status === statusFilter;
    const matchesSearch =
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.phone.includes(searchQuery) ||
      lead.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.area.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const exportCSV = () => {
    const headers = ['ID,Date,Name,Phone,Email,Service,Location,Area,Status,Requirement,Notes\n'];
    const rows = leads.map((l) =>
      `"${l.id}","${new Date(l.createdAt).toLocaleDateString()}","${l.name}","${l.phone}","${l.email || ''}","${l.service}","${l.location}","${l.area}","${l.status}","${l.requirement.replace(/"/g, '""')}","${(l.notes || '').replace(/"/g, '""')}"\n`
    );
    const blob = new Blob([...headers, ...rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `welderwale-leads-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <AdminHeader
        title="Leads & Customer Inquiries CRM"
        subtitle="Track incoming fabrication requests, update quotation statuses, log site inspection notes, and respond instantly."
      />

      <div className="p-6 sm:p-8 space-y-6 max-w-7xl">
        
        {/* Top Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between bg-slate-900 border border-slate-800 rounded-card p-4 gap-4">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by customer name, phone, service, area..."
              className="w-full pl-10 pr-4 py-2 rounded-btn bg-slate-950 border border-slate-700 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-brand-500"
            />
          </div>

          {/* Status Filter & CSV Export */}
          <div className="flex flex-wrap items-center gap-2.5">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 rounded-btn bg-slate-950 border border-slate-700 text-white text-xs font-semibold"
            >
              <option value="All">All Statuses ({leads.length})</option>
              {statuses.map((st) => (
                <option key={st} value={st}>
                  {st} ({leads.filter((l) => l.status === st).length})
                </option>
              ))}
            </select>

            <button
              onClick={exportCSV}
              className="px-4 py-2 rounded-btn bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold flex items-center space-x-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* Main Split CRM View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Leads Table List */}
          <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-card overflow-hidden shadow-xl">
            <div className="p-4 border-b border-slate-800 text-xs font-bold uppercase tracking-wider text-slate-400">
              Showing {filteredLeads.length} Enquiries
            </div>

            <div className="divide-y divide-slate-800">
              {filteredLeads.map((lead) => {
                const isSelected = activeLead?.id === lead.id;
                return (
                  <div
                    key={lead.id}
                    onClick={() => setActiveLead(lead)}
                    className={`p-4 sm:p-5 cursor-pointer transition-colors ${
                      isSelected ? 'bg-slate-800/80 border-l-4 border-brand-500' : 'hover:bg-slate-850/60'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
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
                                : lead.status === 'Lost'
                                ? 'bg-red-950 text-red-300 border border-red-800'
                                : 'bg-slate-800 text-slate-300'
                            }`}
                          >
                            {lead.status}
                          </span>
                        </div>

                        <div className="text-xs text-slate-400 mt-1 flex flex-wrap items-center gap-3">
                          <span className="flex items-center space-x-1">
                            <MapPin className="w-3 h-3 text-brand-500" />
                            <span>{lead.location} ({lead.area})</span>
                          </span>
                          <span>•</span>
                          <span>📞 {lead.phone}</span>
                          <span>•</span>
                          <span className="text-[11px] text-slate-500">
                            {new Date(lead.createdAt).toLocaleDateString()}
                          </span>
                        </div>

                        <p className="text-xs text-slate-300 line-clamp-1 italic mt-2">
                          &ldquo;{lead.requirement}&rdquo;
                        </p>
                      </div>

                      {/* Quick Action Dialers */}
                      <div className="flex items-center space-x-2 self-end sm:self-center shrink-0">
                        <a
                          href={`tel:${lead.phone}`}
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 rounded-btn bg-slate-950 hover:bg-emerald-950 text-emerald-400 border border-slate-800"
                          title="Call Lead"
                        >
                          <Phone className="w-3.5 h-3.5 fill-current" />
                        </a>
                        <a
                          href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                            `Hi ${lead.name}, this is Welderwale regarding your enquiry for ${lead.service}.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 rounded-btn bg-slate-950 hover:bg-emerald-950 text-emerald-400 border border-slate-800"
                          title="WhatsApp Lead"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Detail & Note Editor Drawer */}
          <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-card p-6 shadow-xl space-y-5">
            {activeLead ? (
              <div className="space-y-4">
                <div className="border-b border-slate-800 pb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-400">
                    Lead Details
                  </span>
                  <h3 className="text-lg font-black text-white mt-0.5">{activeLead.name}</h3>
                  <div className="text-xs text-slate-400">
                    Received: {new Date(activeLead.createdAt).toLocaleString()}
                  </div>
                </div>

                {/* Status Dropdown */}
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-1">
                    Pipeline Status
                  </label>
                  <select
                    value={activeLead.status}
                    onChange={(e) =>
                      handleStatusChange(activeLead.id, e.target.value as LeadStatus)
                    }
                    className="w-full px-3 py-2 rounded-btn bg-slate-950 border border-slate-700 text-white text-xs font-bold"
                  >
                    {statuses.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Contact Actions */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={`tel:${activeLead.phone}`}
                    className="py-2 px-3 rounded-btn bg-brand-500 text-slate-950 font-bold text-xs flex items-center justify-center space-x-1.5 shadow-md"
                  >
                    <Phone className="w-3.5 h-3.5 fill-current" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href={`https://wa.me/${activeLead.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 rounded-btn bg-emerald-600 text-white font-bold text-xs flex items-center justify-center space-x-1.5 shadow-md"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                {/* Requirement Scope */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold uppercase text-slate-400">
                    Work Requirement
                  </label>
                  <div className="p-3 rounded-btn bg-slate-950 text-xs text-slate-200 leading-relaxed border border-slate-800">
                    {activeLead.requirement}
                  </div>
                </div>

                {/* Location & Preferred method */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-btn bg-slate-950 border border-slate-800">
                    <span className="text-slate-500 block text-[10px] uppercase font-bold">Location</span>
                    <span className="font-semibold text-white">{activeLead.location}</span>
                    <span className="text-slate-400 block text-[11px]">{activeLead.area}</span>
                  </div>

                  <div className="p-2.5 rounded-btn bg-slate-950 border border-slate-800">
                    <span className="text-slate-500 block text-[10px] uppercase font-bold">Contact Pref</span>
                    <span className="font-semibold text-brand-400">{activeLead.preferredContact || 'Call'}</span>
                  </div>
                </div>

                {/* Internal Notes Editor */}
                <div className="space-y-1 pt-2">
                  <label className="block text-xs font-bold uppercase text-slate-400">
                    Internal Site Notes / Quotation
                  </label>
                  <textarea
                    rows={4}
                    value={activeLead.notes || ''}
                    onChange={(e) => handleNotesChange(activeLead.id, e.target.value)}
                    placeholder="Log site measurement dimensions, preliminary price quoted, customer follow-up notes..."
                    className="w-full px-3 py-2 rounded-btn bg-slate-950 border border-slate-700 text-white text-xs placeholder-slate-600 focus:outline-none focus:border-brand-500"
                  />
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-slate-500 text-xs">
                Select an enquiry from the list to view complete details, update pipeline status, or record site inspection notes.
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
