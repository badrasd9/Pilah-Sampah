import React, { useState } from 'react';
import { Eye, EyeOff, RotateCcw } from 'lucide-react';
import { STAGES } from '../data/items';

interface WinOverlayProps {
  wrongClicks: number;
  onRestart: () => void;
}

export const WinOverlay: React.FC<WinOverlayProps> = ({ wrongClicks, onRestart }) => {
  const [peekingYard, setPeekingYard] = useState(false);

  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center p-3 sm:p-5 pointer-events-none">
      {/* When peeking at the clean yard, show only a compact floating control */}
      {peekingYard ? (
        <div className="pointer-events-auto self-end mb-3 flex items-center gap-2 rounded-xl bg-white/95 border border-slate-200 shadow-xl px-4 py-2.5">
          <button
            type="button"
            onClick={() => setPeekingYard(false)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-semibold cursor-pointer whitespace-nowrap shrink-0"
          >
            <EyeOff className="w-4 h-4" aria-hidden="true" />
            <span>Tampilkan Ringkasan</span>
          </button>
          <button
            type="button"
            onClick={onRestart}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold cursor-pointer whitespace-nowrap shrink-0"
          >
            <RotateCcw className="w-4 h-4" aria-hidden="true" />
            <span>Main Lagi</span>
          </button>
        </div>
      ) : (
        <div className="pointer-events-auto w-full max-w-xl rounded-2xl bg-white/96 backdrop-blur-md border border-slate-200 shadow-2xl p-4 sm:p-6 text-slate-900 max-h-full overflow-y-auto">
          <div className="text-center">
            <h2 className="font-display font-extrabold text-xl sm:text-3xl text-slate-900 text-balance">
              Hebat! Halaman SDN 9 Metro Pusat Bersih
            </h2>
            <div className="mt-1.5 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-slate-600 tabular-nums">
              <span>21 sampah terpilah</span>
              <span aria-hidden="true">·</span>
              <span>Salah klik: {wrongClicks} kali</span>
            </div>
          </div>

          {/* Brief Educational Summary per Category */}
          <div className="mt-4 space-y-2">
            {STAGES.map((stage) => (
              <div
                key={stage.stageId}
                className="rounded-xl border border-slate-200 bg-slate-50/90 p-2.5 sm:p-3 flex items-start gap-3"
              >
                <span
                  className="mt-1 w-3.5 h-3.5 rounded-sm border border-slate-900/20 shrink-0"
                  style={{ backgroundColor: stage.binColor }}
                  aria-hidden="true"
                />
                <div className="min-w-0">
                  <p className="font-display font-bold text-xs sm:text-sm text-slate-900">
                    {stage.binLabel}{' '}
                    <span className="font-normal text-slate-500 tabular-nums">
                      ({stage.target} item)
                    </span>
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-2.5">
            <button
              type="button"
              onClick={() => setPeekingYard(true)}
              className="inline-flex items-center justify-center gap-1.5 min-h-[42px] px-4 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs sm:text-sm transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
            >
              <Eye className="w-4 h-4" aria-hidden="true" />
              <span>Lihat Halaman Bersih</span>
            </button>
            <button
              type="button"
              onClick={onRestart}
              className="inline-flex items-center justify-center gap-2 min-h-[42px] px-6 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-display font-bold text-sm sm:text-base shadow-md transition-all cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
            >
              <RotateCcw className="w-4 h-4" aria-hidden="true" />
              <span>Main Lagi</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
