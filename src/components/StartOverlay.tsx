import React from 'react';
import { Play } from 'lucide-react';
import { STAGES } from '../data/items';

interface StartOverlayProps {
  onStart: () => void;
}

export const StartOverlay: React.FC<StartOverlayProps> = ({ onStart }) => {
  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center p-4 bg-slate-950/35 backdrop-blur-[2px]">
      <div className="w-full max-w-lg rounded-2xl bg-white border border-slate-200 shadow-2xl p-5 sm:p-7 text-slate-900">
        <div className="text-center">
          <p className="text-xs font-semibold text-emerald-700 tracking-wide">
            SDN 9 Metro Pusat · Game Edukasi Lingkungan
          </p>
          <h1 className="font-display font-extrabold text-2xl sm:text-4xl text-slate-900 mt-1 text-balance">
            Pilah Sampah
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
            Halaman SDN 9 Metro Pusat sedang kotor penuh sampah. Bantu bersihkan dengan mengklik sampah sesuai tong yang terbuka secara berurutan.
          </p>
        </div>

        {/* 3 Stage Overview */}
        <div className="mt-4 sm:mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {STAGES.map((stage) => (
            <div
              key={stage.stageId}
              className="rounded-xl border border-slate-200 bg-slate-50/80 p-2.5 sm:p-3 flex sm:flex-col items-center sm:items-start justify-between gap-2"
            >
              <div className="flex items-center gap-2">
                <span
                  className="w-3.5 h-3.5 rounded-sm border border-slate-900/20 shrink-0"
                  style={{ backgroundColor: stage.binColor }}
                  aria-hidden="true"
                />
                <span className="font-display font-bold text-xs sm:text-sm text-slate-900">
                  {stage.stageId}. {stage.binLabel}
                </span>
              </div>
              <span className="text-xs font-medium text-slate-600 tabular-nums whitespace-nowrap">
                {stage.target} item
              </span>
            </div>
          ))}
        </div>

        <div className="mt-5 sm:mt-6 flex justify-center">
          <button
            type="button"
            onClick={onStart}
            className="inline-flex items-center justify-center gap-2 min-h-[44px] px-7 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-display font-bold text-base shadow-md transition-all cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
          >
            <Play className="w-5 h-5 fill-current" aria-hidden="true" />
            <span>Mulai</span>
          </button>
        </div>
      </div>
    </div>
  );
};
