import React from 'react';
import { Shield, Bell, User } from 'lucide-react';

interface AdminHeaderProps {
  title: string;
  subtitle?: string;
}

export const AdminHeader: React.FC<AdminHeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h1 className="text-xl font-black text-white tracking-tight">{title}</h1>
        {subtitle && <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>}
      </div>

      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2 bg-slate-950 px-3 py-1.5 rounded-btn border border-slate-800 text-xs">
          <Shield className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-slate-300 font-semibold">Super Admin Mode</span>
        </div>
      </div>
    </header>
  );
};
