import React from 'react';
import { Award, CheckCircle2, Users, MapPin } from 'lucide-react';
import { Statistic } from '@/types';

interface StatsStripProps {
  stats: Statistic[];
}

const iconMap: Record<string, React.ReactNode> = {
  Award: <Award className="w-6 h-6 text-brand-500" />,
  CheckCircle2: <CheckCircle2 className="w-6 h-6 text-brand-500" />,
  Users: <Users className="w-6 h-6 text-brand-500" />,
  MapPin: <MapPin className="w-6 h-6 text-brand-500" />,
};

export const StatsStrip: React.FC<StatsStripProps> = ({ stats }) => {
  if (!stats || stats.length === 0) return null;

  return (
    <section className="bg-slate-900 border-b border-slate-800 py-8 relative" aria-label="Key Business Statistics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex items-center space-x-3.5 p-3 rounded-card bg-slate-950/40 border border-slate-800/60 hover:border-slate-700 transition-colors"
            >
              <div className="w-12 h-12 rounded-btn bg-slate-800/90 border border-slate-700 flex items-center justify-center shrink-0">
                {iconMap[stat.icon] || <Award className="w-6 h-6 text-brand-500" />}
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {stat.number}
                </div>
                <div className="text-xs text-slate-400 font-medium leading-tight">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
