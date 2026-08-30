'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Wrench,
  Plus,
  Edit2,
  Trash2,
  Check,
  X,
  Star,
  Layers,
  ArrowRight,
  Save,
  CheckCircle2
} from 'lucide-react';
import { initialServices } from '@/data/initialServices';
import { Service } from '@/types';
import { AdminHeader } from '@/components/admin/AdminHeader';

export default function AdminServicesPage() {
  const [services, setServices] = useState<Service[]>([...initialServices]);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleEdit = (service: Service) => {
    setEditingService({ ...service });
    setIsCreating(false);
  };

  const handleCreateNew = () => {
    const newService: Service = {
      id: `srv-${Date.now()}`,
      name: '',
      slug: '',
      shortDescription: '',
      fullDescription: '',
      featuredImage: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80',
      gallery: [],
      category: 'Industrial & Architectural',
      isFeatured: false,
      displayOrder: services.length + 1,
      seoTitle: '',
      seoDescription: '',
      specifications: [
        { label: 'Column Material', value: 'Heavy MS / GI Hollow Sections' },
        { label: 'Welding Type', value: 'TIG / MIG Certified Welding' },
      ],
      options: [
        { title: 'Standard Configuration', description: 'Engineered for durability.' },
      ],
      process: [
        { step: 1, title: 'Measurement', description: 'Laser site visit.' },
        { step: 2, title: 'Fabrication', description: 'In-shop precision.' },
        { step: 3, title: 'Installation', description: 'On-site anchoring.' },
      ],
      faqs: [
        { question: 'What is the turnaround time?', answer: 'Typically 7–14 working days.' },
      ],
    };
    setEditingService(newService);
    setIsCreating(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingService || !editingService.name.trim()) return;

    const slug =
      editingService.slug ||
      editingService.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

    const finalized: Service = {
      ...editingService,
      slug,
      seoTitle: editingService.seoTitle || `${editingService.name} Fabrication & Installation | Welderwale`,
      seoDescription: editingService.seoDescription || editingService.shortDescription,
    };

    if (isCreating) {
      setServices((prev) => [...prev, finalized]);
    } else {
      setServices((prev) =>
        prev.map((s) => (s.id === finalized.id ? finalized : s))
      );
    }

    setEditingService(null);
    setIsCreating(false);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this service?')) {
      setServices((prev) => prev.filter((s) => s.id !== id));
    }
  };

  const toggleFeatured = (id: string) => {
    setServices((prev) =>
      prev.map((s) => (s.id === id ? { ...s, isFeatured: !s.isFeatured } : s))
    );
  };

  return (
    <div>
      <AdminHeader
        title="Services Catalog Manager"
        subtitle="Create, update specifications, edit pricing copy, and configure SEO for all metal fabrication services."
      />

      <div className="p-6 sm:p-8 space-y-6 max-w-7xl">
        
        {/* Top Action Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-slate-900 border border-slate-800 rounded-card p-4 gap-4">
          <div>
            <div className="text-sm font-bold text-white">
              Total Active Services: <strong className="text-brand-400">{services.length}</strong>
            </div>
            <div className="text-xs text-slate-400">
              Featured on Homepage: {services.filter((s) => s.isFeatured).length}
            </div>
          </div>

          <button
            onClick={handleCreateNew}
            className="px-5 py-2.5 rounded-btn bg-brand-500 hover:brightness-110 text-slate-950 font-black text-xs flex items-center space-x-2 shadow-lg transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Service</span>
          </button>
        </div>

        {savedSuccess && (
          <div className="p-3 rounded-btn bg-emerald-950 border border-emerald-800 text-emerald-200 text-xs flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Service changes saved successfully!</span>
          </div>
        )}

        {/* Modal / Inline Editor */}
        {editingService && (
          <div className="bg-slate-900 border border-brand-500/50 rounded-card p-6 shadow-2xl space-y-6 animate-in fade-in duration-200">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h2 className="text-base font-black text-white flex items-center space-x-2">
                <Wrench className="w-4 h-4 text-brand-500" />
                <span>{isCreating ? 'Create New Service' : `Editing: ${editingService.name}`}</span>
              </h2>
              <button
                onClick={() => setEditingService(null)}
                className="p-1 rounded-btn hover:bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold uppercase text-slate-300 mb-1">Service Name *</label>
                  <input
                    type="text"
                    required
                    value={editingService.name}
                    onChange={(e) =>
                      setEditingService({ ...editingService, name: e.target.value })
                    }
                    placeholder="e.g. Rolling Shutters"
                    className="w-full px-3 py-2 rounded-btn bg-slate-950 border border-slate-700 text-white text-sm"
                  />
                </div>

                <div>
                  <label className="block font-bold uppercase text-slate-300 mb-1">URL Slug</label>
                  <input
                    type="text"
                    value={editingService.slug}
                    onChange={(e) =>
                      setEditingService({ ...editingService, slug: e.target.value })
                    }
                    placeholder="e.g. rolling-shutters (auto-generated if empty)"
                    className="w-full px-3 py-2 rounded-btn bg-slate-950 border border-slate-700 text-white text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold uppercase text-slate-300 mb-1">Category</label>
                  <input
                    type="text"
                    value={editingService.category}
                    onChange={(e) =>
                      setEditingService({ ...editingService, category: e.target.value })
                    }
                    placeholder="e.g. Industrial & Commercial"
                    className="w-full px-3 py-2 rounded-btn bg-slate-950 border border-slate-700 text-white text-sm"
                  />
                </div>

                <div>
                  <label className="block font-bold uppercase text-slate-300 mb-1">Featured Image URL</label>
                  <input
                    type="url"
                    value={editingService.featuredImage}
                    onChange={(e) =>
                      setEditingService({ ...editingService, featuredImage: e.target.value })
                    }
                    placeholder="https://images.unsplash.com/..."
                    className="w-full px-3 py-2 rounded-btn bg-slate-950 border border-slate-700 text-white text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold uppercase text-slate-300 mb-1">Short Description (Cards & Previews)</label>
                <textarea
                  rows={2}
                  required
                  value={editingService.shortDescription}
                  onChange={(e) =>
                    setEditingService({ ...editingService, shortDescription: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-btn bg-slate-950 border border-slate-700 text-white text-sm"
                />
              </div>

              <div>
                <label className="block font-bold uppercase text-slate-300 mb-1">Full Technical Description (Service Page)</label>
                <textarea
                  rows={4}
                  required
                  value={editingService.fullDescription}
                  onChange={(e) =>
                    setEditingService({ ...editingService, fullDescription: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-btn bg-slate-950 border border-slate-700 text-white text-sm"
                />
              </div>

              <div className="flex items-center space-x-2 pt-2">
                <input
                  type="checkbox"
                  id="featured-checkbox"
                  checked={editingService.isFeatured}
                  onChange={(e) =>
                    setEditingService({ ...editingService, isFeatured: e.target.checked })
                  }
                  className="w-4 h-4 rounded border-slate-700 text-brand-500 focus:ring-0"
                />
                <label htmlFor="featured-checkbox" className="font-bold text-slate-200 cursor-pointer">
                  Feature on Homepage (Mobile 2-Card Grid)
                </label>
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setEditingService(null)}
                  className="px-4 py-2 rounded-btn bg-slate-800 text-slate-300 hover:bg-slate-700 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-btn bg-brand-500 text-slate-950 font-black flex items-center space-x-1.5 shadow-md hover:brightness-110"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Service</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Services Table List */}
        <div className="bg-slate-900 border border-slate-800 rounded-card overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950 text-slate-400 uppercase font-bold tracking-wider border-b border-slate-800">
                <tr>
                  <th className="p-4">Service</th>
                  <th className="p-4">Category</th>
                  <th className="p-4 text-center">Featured</th>
                  <th className="p-4 text-center">Order</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {services.map((service, index) => (
                  <tr key={service.id} className="hover:bg-slate-850/60 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-btn overflow-hidden relative bg-slate-950 shrink-0 border border-slate-800">
                          <Image
                            src={service.featuredImage}
                            alt={service.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-bold text-white text-sm">{service.name}</div>
                          <div className="text-[11px] text-slate-400">/services/{service.slug}</div>
                        </div>
                      </div>
                    </td>

                    <td className="p-4 text-slate-300 font-medium">
                      {service.category}
                    </td>

                    <td className="p-4 text-center">
                      <button
                        onClick={() => toggleFeatured(service.id)}
                        className={`p-1.5 rounded-btn border transition-colors ${
                          service.isFeatured
                            ? 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                            : 'bg-slate-950 text-slate-600 border-slate-800 hover:text-slate-400'
                        }`}
                        title="Toggle Featured"
                      >
                        <Star className="w-4 h-4 fill-current" />
                      </button>
                    </td>

                    <td className="p-4 text-center font-bold text-slate-300">
                      {index + 1}
                    </td>

                    <td className="p-4 text-right space-x-2">
                      <button
                        onClick={() => handleEdit(service)}
                        className="p-2 rounded-btn bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors"
                        title="Edit Service"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDelete(service.id)}
                        className="p-2 rounded-btn bg-slate-950 hover:bg-red-950 text-slate-400 hover:text-red-400 border border-slate-800 transition-colors"
                        title="Delete Service"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
