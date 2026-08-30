'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  FolderKanban,
  Plus,
  Edit2,
  Trash2,
  Save,
  CheckCircle2,
  X,
  MapPin,
  Calendar,
  Layers
} from 'lucide-react';
import { initialProjects } from '@/data/initialProjects';
import { initialServices } from '@/data/initialServices';
import { Project } from '@/types';
import { AdminHeader } from '@/components/admin/AdminHeader';

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([...initialProjects]);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleCreateNew = () => {
    const newProj: Project = {
      id: `proj-${Date.now()}`,
      title: '',
      slug: '',
      serviceSlug: initialServices[0].slug,
      category: 'Industrial',
      location: 'Bhayandar',
      client: '',
      description: '',
      scope: ['Site leveling and anchor bolt setting', 'Workshop precision fabrication', 'On-site erection'],
      completionDate: '2025',
      featuredImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      gallery: [],
      beforeImage: '',
      afterImage: '',
      isFeatured: false,
      displayOrder: projects.length + 1,
      seoTitle: '',
      seoDescription: '',
    };
    setEditingProject(newProj);
    setIsCreating(true);
  };

  const handleEdit = (project: Project) => {
    setEditingProject({ ...project });
    setIsCreating(false);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject || !editingProject.title.trim()) return;

    const slug =
      editingProject.slug ||
      editingProject.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

    const finalized: Project = {
      ...editingProject,
      slug,
      seoTitle: editingProject.seoTitle || `${editingProject.title} | Welderwale Portfolio`,
      seoDescription: editingProject.seoDescription || editingProject.description,
    };

    if (isCreating) {
      setProjects((prev) => [...prev, finalized]);
    } else {
      setProjects((prev) =>
        prev.map((p) => (p.id === finalized.id ? finalized : p))
      );
    }

    setEditingProject(null);
    setIsCreating(false);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      setProjects((prev) => prev.filter((p) => p.id !== id));
    }
  };

  return (
    <div>
      <AdminHeader
        title="Portfolio & Projects Manager"
        subtitle="Manage case studies, before/after comparison visuals, engineering scopes, and client showcases."
      />

      <div className="p-6 sm:p-8 space-y-6 max-w-7xl">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-slate-900 border border-slate-800 rounded-card p-4 gap-4">
          <div>
            <div className="text-sm font-bold text-white">
              Total Portfolio Case Studies: <strong className="text-brand-400">{projects.length}</strong>
            </div>
            <div className="text-xs text-slate-400">
              Interactive Before/After showcases: {projects.filter((p) => p.beforeImage && p.afterImage).length}
            </div>
          </div>

          <button
            onClick={handleCreateNew}
            className="px-5 py-2.5 rounded-btn bg-brand-500 hover:brightness-110 text-slate-950 font-black text-xs flex items-center space-x-2 shadow-lg transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Case Study</span>
          </button>
        </div>

        {savedSuccess && (
          <div className="p-3 rounded-btn bg-emerald-950 border border-emerald-800 text-emerald-200 text-xs flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Project changes saved successfully!</span>
          </div>
        )}

        {/* Modal Editor */}
        {editingProject && (
          <div className="bg-slate-900 border border-brand-500/50 rounded-card p-6 shadow-2xl space-y-6 animate-in fade-in duration-200">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h2 className="text-base font-black text-white flex items-center space-x-2">
                <FolderKanban className="w-4 h-4 text-brand-500" />
                <span>{isCreating ? 'Create New Project' : `Editing: ${editingProject.title}`}</span>
              </h2>
              <button
                onClick={() => setEditingProject(null)}
                className="p-1 rounded-btn hover:bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold uppercase text-slate-300 mb-1">Project Title *</label>
                  <input
                    type="text"
                    required
                    value={editingProject.title}
                    onChange={(e) =>
                      setEditingProject({ ...editingProject, title: e.target.value })
                    }
                    placeholder="e.g. 10,000 Sq Ft PEB Factory Shed"
                    className="w-full px-3 py-2 rounded-btn bg-slate-950 border border-slate-700 text-white text-sm"
                  />
                </div>

                <div>
                  <label className="block font-bold uppercase text-slate-300 mb-1">Related Service</label>
                  <select
                    value={editingProject.serviceSlug}
                    onChange={(e) =>
                      setEditingProject({ ...editingProject, serviceSlug: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-btn bg-slate-950 border border-slate-700 text-white text-sm"
                  >
                    {initialServices.map((srv) => (
                      <option key={srv.id} value={srv.slug}>
                        {srv.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-bold uppercase text-slate-300 mb-1">Category</label>
                  <input
                    type="text"
                    value={editingProject.category}
                    onChange={(e) =>
                      setEditingProject({ ...editingProject, category: e.target.value })
                    }
                    placeholder="e.g. Industrial"
                    className="w-full px-3 py-2 rounded-btn bg-slate-950 border border-slate-700 text-white text-sm"
                  />
                </div>

                <div>
                  <label className="block font-bold uppercase text-slate-300 mb-1">Location</label>
                  <input
                    type="text"
                    value={editingProject.location}
                    onChange={(e) =>
                      setEditingProject({ ...editingProject, location: e.target.value })
                    }
                    placeholder="e.g. Vasai East"
                    className="w-full px-3 py-2 rounded-btn bg-slate-950 border border-slate-700 text-white text-sm"
                  />
                </div>

                <div>
                  <label className="block font-bold uppercase text-slate-300 mb-1">Client (Optional)</label>
                  <input
                    type="text"
                    value={editingProject.client || ''}
                    onChange={(e) =>
                      setEditingProject({ ...editingProject, client: e.target.value })
                    }
                    placeholder="e.g. Apex Logistics"
                    className="w-full px-3 py-2 rounded-btn bg-slate-950 border border-slate-700 text-white text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold uppercase text-slate-300 mb-1">Featured Image URL *</label>
                <input
                  type="url"
                  required
                  value={editingProject.featuredImage}
                  onChange={(e) =>
                    setEditingProject({ ...editingProject, featuredImage: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-btn bg-slate-950 border border-slate-700 text-white text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold uppercase text-slate-300 mb-1">Before Image URL (Optional for Slider)</label>
                  <input
                    type="url"
                    value={editingProject.beforeImage || ''}
                    onChange={(e) =>
                      setEditingProject({ ...editingProject, beforeImage: e.target.value })
                    }
                    placeholder="https://..."
                    className="w-full px-3 py-2 rounded-btn bg-slate-950 border border-slate-700 text-white text-sm"
                  />
                </div>

                <div>
                  <label className="block font-bold uppercase text-slate-300 mb-1">After Image URL (Optional for Slider)</label>
                  <input
                    type="url"
                    value={editingProject.afterImage || ''}
                    onChange={(e) =>
                      setEditingProject({ ...editingProject, afterImage: e.target.value })
                    }
                    placeholder="https://..."
                    className="w-full px-3 py-2 rounded-btn bg-slate-950 border border-slate-700 text-white text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold uppercase text-slate-300 mb-1">Project Description</label>
                <textarea
                  rows={3}
                  required
                  value={editingProject.description}
                  onChange={(e) =>
                    setEditingProject({ ...editingProject, description: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-btn bg-slate-950 border border-slate-700 text-white text-sm"
                />
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setEditingProject(null)}
                  className="px-4 py-2 rounded-btn bg-slate-800 text-slate-300 hover:bg-slate-700 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-btn bg-brand-500 text-slate-950 font-black flex items-center space-x-1.5 shadow-md hover:brightness-110"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Project</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Projects List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900 border border-slate-800 rounded-card overflow-hidden shadow-lg flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] bg-slate-950">
                <Image
                  src={project.featuredImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 left-2 bg-slate-950/80 px-2 py-0.5 rounded-btn text-[10px] font-bold text-brand-400 uppercase">
                  {project.category}
                </div>
              </div>

              <div className="p-4 space-y-2 flex-grow flex flex-col justify-between">
                <div>
                  <div className="text-[11px] text-slate-400 flex items-center space-x-1.5 mb-1">
                    <MapPin className="w-3 h-3 text-brand-500" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="font-bold text-white text-sm line-clamp-1">{project.title}</h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mt-1">
                    {project.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-brand-400 font-medium">
                    /our-work/{project.slug}
                  </span>
                  <div className="flex items-center space-x-1.5">
                    <button
                      onClick={() => handleEdit(project)}
                      className="p-1.5 rounded-btn bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800"
                      title="Edit"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleDelete(project.id)}
                      className="p-1.5 rounded-btn bg-slate-950 hover:bg-red-950 text-slate-400 hover:text-red-400 border border-slate-800"
                      title="Delete"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
