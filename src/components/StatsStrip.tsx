import { Award, CheckCircle, Users, MapPin } from 'lucide-react';

const stats = [
  {
    number: '10+',
    label: 'Years Experience',
    sub: 'Metal & Steel Fabrication',
    icon: Award,
  },
  {
    number: '500+',
    label: 'Projects Delivered',
    sub: 'Residential & Commercial',
    icon: CheckCircle,
  },
  {
    number: '100+',
    label: 'Satisfied Clients',
    sub: 'Contractors, Architects & Owners',
    icon: Users,
  },
  {
    number: '50 km',
    label: 'Service Coverage',
    sub: 'Mumbai, Thane & Bhayandar',
    icon: MapPin,
  },
];

export default function StatsStrip() {
  return (
    <section className="bg-slate-900 border-y border-slate-800 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`flex flex-col items-center sm:items-start text-center sm:text-left ${
                  idx > 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-amber-400 font-mono tracking-tight">
                    {item.number}
                  </span>
                  <Icon className="w-5 h-5 text-slate-500 hidden lg:block" />
                </div>
                <p className="text-xs sm:text-sm font-bold text-white tracking-wide">
                  {item.label}
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5 hidden sm:block">
                  {item.sub}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
