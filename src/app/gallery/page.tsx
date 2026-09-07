'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';
import EnquiryForm from '@/components/EnquiryForm';
import { Camera, Image as ImageIcon } from 'lucide-react';

interface GalleryPhoto {
  id: string;
  category: 'Workshop' | 'Gates' | 'Staircases' | 'Sheds' | 'Grills' | 'Structural';
  title: string;
  location: string;
  url: string;
}

const galleryItems: GalleryPhoto[] = [
  {
    id: 'g1',
    category: 'Gates',
    title: 'Custom Laser-Cut Sliding Steel Gate',
    location: 'Bhayandar West',
    url: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'g2',
    category: 'Staircases',
    title: 'Modern Floating Steel Mono-Stringer Staircase',
    location: 'Borivali West',
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'g3',
    category: 'Sheds',
    title: 'Industrial Warehouse Curved Roof Truss',
    location: 'Thane MIDC',
    url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'g4',
    category: 'Grills',
    title: 'Aesthetic Balcony Safety Window Grill',
    location: 'Kandivali East',
    url: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'g5',
    category: 'Workshop',
    title: 'Precision TIG & MIG Welding Setup',
    location: 'Bhayandar Fabrication Workshop',
    url: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'g6',
    category: 'Structural',
    title: 'Heavy Structural Steel Column Framework',
    location: 'Vasai Industrial Zone',
    url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80',
  },
];

export default function GalleryPage() {
  const [selectedCat, setSelectedCat] = useState('All');

  const filtered =
    selectedCat === 'All'
      ? galleryItems
      : galleryItems.filter((g) => g.category === selectedCat);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow pt-24 pb-16">
        <section className="bg-slate-900 text-white py-12 px-4 sm:px-6 border-b border-slate-800">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
              <Camera className="w-4 h-4" /> Visual Showcase & Site Logs
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
              Welderwale Fabrication Gallery
            </h1>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
              Real workshop fabrications, on-site erections, weld seams, and finished installations.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {['All', 'Workshop', 'Gates', 'Staircases', 'Sheds', 'Grills', 'Structural'].map(
                (cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCat(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                      selectedCat === cat
                        ? 'bg-amber-500 text-slate-950'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {cat}
                  </button>
                )
              )}
            </div>
          </div>
        </section>

        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 aspect-[4/3] shadow-sm hover:shadow-xl transition-all"
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-0.5">
                    {item.category} • {item.location}
                  </span>
                  <h3 className="text-sm font-bold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        <EnquiryForm />
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
