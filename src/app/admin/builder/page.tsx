'use client';

import React, { useState } from 'react';
import {
  Sliders,
  Eye,
  EyeOff,
  ArrowUp,
  ArrowDown,
  Copy,
  Trash2,
  Plus,
  Save,
  CheckCircle2,
  Smartphone,
  Monitor,
  Sparkles
} from 'lucide-react';
import { initialPages } from '@/data/initialPages';
import { PageSection, SectionType } from '@/types/cms';
import { AdminHeader } from '@/components/admin/AdminHeader';

export default function AdminPageBuilderPage() {
  const [sections, setSections] = useState<PageSection[]>([
    ...initialPages[0].sections,
  ]);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const moveUp = (index: number) => {
    if (index === 0) return;
    const updated = [...sections];
    const temp = updated[index - 1];
    updated[index - 1] = updated[index];
    updated[index] = temp;
    updated.forEach((sec, idx) => {
      sec.displayOrder = idx + 1;
    });
    setSections(updated);
  };

  const moveDown = (index: number) => {
    if (index === sections.length - 1) return;
    const updated = [...sections];
    const temp = updated[index + 1];
    updated[index + 1] = updated[index];
    updated[index] = temp;
    updated.forEach((sec, idx) => {
      sec.displayOrder = idx + 1;
    });
    setSections(updated);
  };

  const toggleVisibility = (id: string) => {
    setSections((prev) =>
      prev.map((sec) => (sec.id === id ? { ...sec, isVisible: !sec.isVisible } : sec))
    );
  };

  const toggleMobileVisibility = (id: string) => {
    setSections((prev) =>
      prev.map((sec) =>
        sec.id === id ? { ...sec, isMobileVisible: !sec.isMobileVisible } : sec
      )
    );
  };

  const duplicateSection = (index: number) => {
    const target = sections[index];
    const newSection: PageSection = {
      ...target,
      id: `sec-${Date.now()}`,
      title: `${target.title} (Copy)`,
      displayOrder: target.displayOrder + 1,
    };
    const updated = [...sections];
    updated.splice(index + 1, 0, newSection);
    updated.forEach((sec, idx) => {
      sec.displayOrder = idx + 1;
    });
    setSections(updated);
  };

  const deleteSection = (id: string) => {
    const updated = sections.filter((s) => s.id !== id);
    updated.forEach((sec, idx) => {
      sec.displayOrder = idx + 1;
    });
    setSections(updated);
  };

  const handleSave = async () => {
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleAddApprovedSection = (type: SectionType, defaultTitle: string) => {
    const newSection: PageSection = {
      id: `sec-${Date.now()}`,
      type,
      title: defaultTitle,
      subtitle: 'Customized layout section',
      displayOrder: sections.length + 1,
      isVisible: true,
      isMobileVisible: true,
      isDesktopVisible: true,
      background: 'default',
    };
    setSections((prev) => [...prev, newSection]);
  };

  return (
    <div>
      <AdminHeader
        title="Hybrid Page Builder & Section Manager"
        subtitle="Manage, reorder, show/hide, and configure approved components for the Homepage without breaking layout rules."
      />

      <div className="p-6 sm:p-8 space-y-6 max-w-6xl">
        
        {/* Top Controls Banner */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-slate-900 border border-slate-800 rounded-card p-4 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-400">
              Active Page: Homepage (/)
            </span>
            <div className="text-sm font-bold text-white mt-0.5">
              {sections.length} Configured Layout Sections
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleSave}
              className="px-5 py-2.5 rounded-btn bg-brand-500 hover:brightness-110 text-slate-950 font-black text-xs flex items-center space-x-2 shadow-lg transition-all"
            >
              {savedSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-950" />
                  <span>Layout Saved!</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Save Page Layout</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Section List / Builder Canvas */}
        <div className="space-y-3">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className={`p-4 sm:p-5 rounded-card border transition-all ${
                section.isVisible
                  ? 'bg-slate-900 border-slate-800 hover:border-slate-700 shadow-md'
                  : 'bg-slate-950/60 border-slate-900 opacity-60'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                
                {/* Left: Section Info & Type */}
                <div className="flex items-start space-x-3.5 flex-1">
                  <div className="w-8 h-8 rounded-btn bg-slate-950 border border-slate-800 text-brand-400 font-bold text-xs flex items-center justify-center shrink-0">
                    {index + 1}
                  </div>

                  <div className="space-y-1 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-black text-white">{section.title}</span>
                      <span className="px-2 py-0.5 rounded-btn text-[10px] font-bold uppercase bg-slate-950 text-brand-400 border border-slate-800">
                        {section.type}
                      </span>
                      {!section.isVisible && (
                        <span className="px-2 py-0.5 rounded-btn text-[10px] font-bold uppercase bg-red-950 text-red-400 border border-red-800">
                          Hidden
                        </span>
                      )}
                    </div>
                    {section.subtitle && (
                      <p className="text-xs text-slate-400">{section.subtitle}</p>
                    )}
                  </div>
                </div>

                {/* Right: Actions & Reordering */}
                <div className="flex flex-wrap items-center gap-1.5 self-end sm:self-center">
                  {/* Move Up */}
                  <button
                    onClick={() => moveUp(index)}
                    disabled={index === 0}
                    className="p-2 rounded-btn bg-slate-950 hover:bg-slate-800 text-slate-300 disabled:opacity-30 border border-slate-800 transition-colors"
                    title="Move Up"
                  >
                    <ArrowUp className="w-4 h-4" />
                  </button>

                  {/* Move Down */}
                  <button
                    onClick={() => moveDown(index)}
                    disabled={index === sections.length - 1}
                    className="p-2 rounded-btn bg-slate-950 hover:bg-slate-800 text-slate-300 disabled:opacity-30 border border-slate-800 transition-colors"
                    title="Move Down"
                  >
                    <ArrowDown className="w-4 h-4" />
                  </button>

                  {/* Toggle Visibility */}
                  <button
                    onClick={() => toggleVisibility(section.id)}
                    className={`p-2 rounded-btn border transition-colors ${
                      section.isVisible
                        ? 'bg-slate-950 hover:bg-slate-800 text-slate-300 border-slate-800'
                        : 'bg-red-950/60 text-red-400 border-red-800'
                    }`}
                    title={section.isVisible ? 'Hide Section' : 'Show Section'}
                  >
                    {section.isVisible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </button>

                  {/* Mobile Toggle */}
                  <button
                    onClick={() => toggleMobileVisibility(section.id)}
                    className={`p-2 rounded-btn border transition-colors ${
                      section.isMobileVisible
                        ? 'bg-slate-950 hover:bg-slate-800 text-emerald-400 border-slate-800'
                        : 'bg-slate-950 text-slate-600 border-slate-800'
                    }`}
                    title={section.isMobileVisible ? 'Visible on Mobile' : 'Hidden on Mobile'}
                  >
                    <Smartphone className="w-4 h-4" />
                  </button>

                  {/* Duplicate */}
                  <button
                    onClick={() => duplicateSection(index)}
                    className="p-2 rounded-btn bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors"
                    title="Duplicate Section"
                  >
                    <Copy className="w-4 h-4" />
                  </button>

                  {/* Delete */}
                  <button
                    onClick={() => deleteSection(section.id)}
                    className="p-2 rounded-btn bg-slate-950 hover:bg-red-950 text-slate-400 hover:text-red-400 border border-slate-800 transition-colors"
                    title="Delete Section"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Add Section Tray */}
        <div className="bg-slate-900 border border-slate-800 rounded-card p-6 space-y-4">
          <div className="flex items-center space-x-2 text-sm font-black text-white">
            <Plus className="w-4 h-4 text-brand-500" />
            <span>Add Approved Section Block</span>
          </div>
          <p className="text-xs text-slate-400">
            Click any approved component block to add it to your page layout.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
            {[
              { type: 'FeaturedServices', title: 'Services Grid' },
              { type: 'FeaturedProjects', title: 'Projects Showcase' },
              { type: 'WhyChooseUs', title: 'Why Choose Us' },
              { type: 'ProcessWorkflow', title: 'How We Work' },
              { type: 'Testimonials', title: 'Client Reviews' },
              { type: 'FaqAccordion', title: 'FAQ Accordion' },
              { type: 'EnquiryFunnel', title: '3-Step Enquiry' },
              { type: 'ContactCta', title: 'Direct Call CTA' },
            ].map((block) => (
              <button
                key={block.type}
                onClick={() =>
                  handleAddApprovedSection(block.type as SectionType, block.title)
                }
                className="p-3 rounded-btn bg-slate-950 hover:bg-slate-800 border border-slate-800 text-left text-xs font-semibold text-slate-200 hover:text-brand-400 transition-colors flex items-center justify-between group"
              >
                <span>+ {block.title}</span>
                <span className="text-[10px] text-slate-500 uppercase">{block.type}</span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
