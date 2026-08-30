'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  title,
  beforeLabel = 'Before',
  afterLabel = 'After Installation',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-card overflow-hidden select-none border border-slate-800 shadow-2xl bg-slate-950 group">
      {/* After Image (Full Background) */}
      <Image
        src={afterImage}
        alt={`${title} - After`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 800px"
      />
      <div className="absolute top-4 right-4 z-20 bg-emerald-600/90 text-white text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-btn backdrop-blur-sm shadow-md">
        {afterLabel}
      </div>

      {/* Before Image (Clipped with polygon) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <Image
          src={beforeImage}
          alt={`${title} - Before`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 800px"
        />
        <div className="absolute top-4 left-4 z-20 bg-slate-900/90 text-slate-300 text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-btn backdrop-blur-sm border border-slate-700 shadow-md">
          {beforeLabel}
        </div>
      </div>

      {/* Slider Divider Bar */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-brand-500 shadow-lg pointer-events-none z-30"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-brand-500 text-slate-950 flex items-center justify-center font-bold text-xs shadow-xl border-2 border-white">
          ↔
        </div>
      </div>

      {/* Range Input controller */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleSliderChange}
        className="absolute inset-0 opacity-0 cursor-ew-resize z-40 w-full h-full"
        aria-label={`Slide to compare before and after for ${title}`}
      />
    </div>
  );
};
