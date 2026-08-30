'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Image as ImageIcon, Plus, Trash2, Save, CheckCircle2, X } from 'lucide-react';
import { initialGallery } from '@/data/initialGallery';
import { GalleryItem } from '@/types';
import { AdminHeader } from '@/components/admin/AdminHeader';

export default function AdminGalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([...initialGallery]);
  const [isAdding, setIsAdding] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newImage, setNewImage] = useState('');
  const [newCategory, setNewCategory] = useState<GalleryItem['category']>('Workshop');
  const [newAlt, setNewAlt] = useState('');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newImage.trim()) return;

    const newItem: GalleryItem = {
      id: `gal-${Date.now()}`,
      title: newTitle.trim(),
      image: newImage.trim(),
      category: newCategory,
      altText: newAlt.trim() || newTitle.trim(),
      displayOrder: items.length + 1,
    };

    setItems((prev) => [...prev, newItem]);
    setIsAdding(false);
    setNewTitle('');
    setNewImage('');
    setNewAlt('');
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleDelete = (id: string) => {
    if (confirm('Delete this photo from the media gallery?')) {
      setItems((prev) => prev.filter((item) => item.id !== id));
    }
  };

  return (
    <div>
      <AdminHeader
        title="Gallery & Media Library"
        subtitle="Manage workshop fabrication photographs, on-site erection snapshots, and categorized showcase media."
      />

      <div className="p-6 sm:p-8 space-y-6 max-w-7xl">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-slate-900 border border-slate-800 rounded-card p-4 gap-4">
          <div>
            <div className="text-sm font-bold text-white">
              Total Media Photos: <strong className="text-brand-400">{items.length}</strong>
            </div>
            <div className="text-xs text-slate-400">
              Categorized for public gallery and service detail pages.
            </div>
          </div>

          <button
            onClick={() => setIsAdding(true)}
            className="px-5 py-2.5 rounded-btn bg-brand-500 hover:brightness-110 text-slate-950 font-black text-xs flex items-center space-x-2 shadow-lg transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Upload / Add Photo</span>
          </button>
        </div>

        {savedSuccess && (
          <div className="p-3 rounded-btn bg-emerald-950 border border-emerald-800 text-emerald-200 text-xs flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Media item added successfully!</span>
          </div>
        )}

        {/* Add Modal */}
        {isAdding && (
          <div className="bg-slate-900 border border-brand-500/50 rounded-card p-6 shadow-2xl space-y-4 animate-in fade-in duration-200">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <h2 className="text-sm font-black text-white">Add New Gallery Photo</h2>
              <button
                onClick={() => setIsAdding(false)}
                className="p-1 rounded-btn hover:bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddItem} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-300 mb-1">Photo Title *</label>
                  <input
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="e.g. Laser Cutting 4mm Gate Sheet"
                    className="w-full px-3 py-2 rounded-btn bg-slate-950 border border-slate-700 text-white"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-300 mb-1">Category</label>
                  <select
                    value={newCategory}
                    onChange={(e) =>
                      setNewCategory(e.target.value as GalleryItem['category'])
                    }
                    className="w-full px-3 py-2 rounded-btn bg-slate-950 border border-slate-700 text-white"
                  >
                    <option value="Workshop">Workshop</option>
                    <option value="Fabrication">Fabrication</option>
                    <option value="Installation">Installation</option>
                    <option value="Completed Work">Completed Work</option>
                    <option value="Site Work">Site Work</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-300 mb-1">Image URL *</label>
                <input
                  type="url"
                  required
                  value={newImage}
                  onChange={(e) => setNewImage(e.target.value)}
                  placeholder="https://..."
                  className="w-full px-3 py-2 rounded-btn bg-slate-950 border border-slate-700 text-white"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-300 mb-1">Alt Text (SEO & Accessibility)</label>
                <input
                  type="text"
                  value={newAlt}
                  onChange={(e) => setNewAlt(e.target.value)}
                  placeholder="Describe the image content..."
                  className="w-full px-3 py-2 rounded-btn bg-slate-950 border border-slate-700 text-white"
                />
              </div>

              <div className="flex justify-end space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAdding(false)}
                  className="px-4 py-2 rounded-btn bg-slate-800 text-slate-300 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-btn bg-brand-500 text-slate-950 font-black shadow-md"
                >
                  Add to Gallery
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Gallery Grid View */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square rounded-card overflow-hidden border border-slate-800 bg-slate-900 shadow-md flex flex-col justify-between"
            >
              <Image
                src={item.image}
                alt={item.altText}
                fill
                className="object-cover"
              />
              <div className="absolute top-2 left-2 bg-slate-950/80 px-2 py-0.5 rounded-btn text-[10px] font-bold text-brand-400 uppercase">
                {item.category}
              </div>
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => handleDelete(item.id)}
                  className="p-1.5 rounded-btn bg-red-950 text-red-400 border border-red-800"
                  title="Delete Photo"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-slate-950/90 p-2 text-[11px] font-semibold text-white truncate">
                {item.title}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
