'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Layers,
  Wrench,
  FolderKanban,
  Image as ImageIcon,
  Users,
  Palette,
  Settings,
  Search,
  Globe,
  LogOut,
  Sliders,
  ExternalLink
} from 'lucide-react';

export const AdminSidebar: React.FC = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', href: '/admin', icon: <LayoutDashboard className="w-4 h-4" /> },
    { name: 'Page Builder', href: '/admin/pages', icon: <Sliders className="w-4 h-4" /> },
    { name: 'Services Manager', href: '/admin/services', icon: <Wrench className="w-4 h-4" /> },
    { name: 'Portfolio & Projects', href: '/admin/projects', icon: <FolderKanban className="w-4 h-4" /> },
    { name: 'Gallery & Media', href: '/admin/gallery', icon: <ImageIcon className="w-4 h-4" /> },
    { name: 'Leads & Enquiries', href: '/admin/leads', icon: <Users className="w-4 h-4" /> },
    { name: 'Theme & Tokens', href: '/admin/theme', icon: <Palette className="w-4 h-4" /> },
    { name: 'Company Settings', href: '/admin/settings', icon: <Settings className="w-4 h-4" /> },
    { name: 'SEO & Metadata', href: '/admin/seo', icon: <Search className="w-4 h-4" /> },
  ];

  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between shrink-0 h-screen sticky top-0">
      <div>
        {/* Brand Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <Link href="/admin" className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-btn bg-brand-500 flex items-center justify-center text-slate-950 font-black">
              <Wrench className="w-4 h-4 stroke-[2.5]" />
            </div>
            <div>
              <div className="text-sm font-black text-white uppercase tracking-tight">
                WELDER<span className="text-brand-500">WALE</span>
              </div>
              <div className="text-[10px] font-bold text-brand-400 uppercase tracking-wider">
                Hybrid CMS
              </div>
            </div>
          </Link>
        </div>

        {/* Navigation Items */}
        <nav className="p-3 space-y-1">
          <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500">
            Content & Design Controls
          </div>

          {menuItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-3 px-3.5 py-2.5 rounded-btn text-xs font-semibold transition-colors ${
                  isActive
                    ? 'bg-brand-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer Navigation: Return to Public Site */}
      <div className="p-4 border-t border-slate-800 space-y-2">
        <Link
          href="/"
          target="_blank"
          className="w-full flex items-center justify-between px-3 py-2 rounded-btn bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-300 transition-colors"
        >
          <span className="flex items-center space-x-2">
            <Globe className="w-3.5 h-3.5 text-brand-500" />
            <span>View Live Website</span>
          </span>
          <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
        </Link>
      </div>
    </aside>
  );
};
