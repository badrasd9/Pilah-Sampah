import React from 'react';
import { Maximize2, Minimize2, Volume2, VolumeX } from 'lucide-react';
import { CATEGORY_NAMES, STAGES, StageConfig } from '../data/items';
import { ScreenPhase } from '../game/state';

interface GameHudProps {
  phase: ScreenPhase;
  activeStage: StageConfig;
  currentCount: number;
  isMuted: boolean;
  isFullscreen: boolean;
  canFullscreen: boolean;
  onToggleMute: () => void;
  onToggleFullscreen: () => void;
}

export const GameHud: React.FC<GameHudProps> = ({
  phase,
  activeStage,
  currentCount,
  isMuted,
  isFullscreen,
  canFullscreen,
  onToggleMute,
  onToggleFullscreen,
}) => {
  const isPlaying = phase === 'stage-1' || phase === 'stage-2' || phase === 'stage-3';

  return (
    <header className="relative z-30 flex items-center justify-between gap-3 px-3 py-2 sm:px-4 sm:py-2.5 bg-white/92 backdrop-blur-sm border-b border-slate-900/10">
      {/* Left: Game Identity or Active Stage Progress */}
      <div className="flex items-center gap-2.5 sm:gap-4 min-w-0">
        <span className="font-display font-bold text-sm sm:text-base text-slate-900 whitespace-nowrap shrink-0">
          Pilah Sampah
        </span>

        {isPlaying && (
          <>
            <span className="text-slate-300 select-none" aria-hidden="true">
              /
            </span>
            <div className="flex items-center gap-2 min-w-0 text-xs sm:text-sm font-semibold text-slate-800 whitespace-nowrap">
              <span
                className="inline-block w-3 h-3 rounded-sm border border-slate-900/30 shrink-0"
                style={{ backgroundColor: activeStage.binColor }}
                aria-hidden="true"
              />
              <span className="tabular-nums shrink-0">
                Tahap {activeStage.stageId}/{STAGES.length}
              </span>
              <span className="text-slate-400 hidden sm:inline" aria-hidden="true">
                ·
              </span>
              <span className="hidden sm:inline truncate">
                {CATEGORY_NAMES[activeStage.category]}
              </span>
              <span className="text-slate-400" aria-hidden="true">
                ·
              </span>
              <span className="tabular-nums font-bold text-slate-900 shrink-0">
                {currentCount}/{activeStage.target}
              </span>
            </div>
          </>
        )}
      </div>

      {/* Right: Utility Controls (Mute & Fullscreen) */}
      <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
        <button
          type="button"
          onClick={onToggleMute}
          aria-label={isMuted ? 'Nyalakan suara' : 'Bisukan suara'}
          title={isMuted ? 'Nyalakan suara' : 'Bisukan suara'}
          className="inline-flex items-center justify-center gap-1.5 min-w-[40px] min-h-[36px] px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors text-xs font-semibold whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 shrink-0" aria-hidden="true" />
          ) : (
            <Volume2 className="w-4 h-4 shrink-0" aria-hidden="true" />
          )}
          <span className="hidden md:inline">{isMuted ? 'Suara Mati' : 'Suara Aktif'}</span>
        </button>

        {canFullscreen && (
          <button
            type="button"
            onClick={onToggleFullscreen}
            aria-label={isFullscreen ? 'Keluar layar penuh' : 'Layar penuh'}
            title={isFullscreen ? 'Keluar layar penuh' : 'Layar penuh'}
            className="inline-flex items-center justify-center gap-1.5 min-w-[40px] min-h-[36px] px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors text-xs font-semibold whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
          >
            {isFullscreen ? (
              <Minimize2 className="w-4 h-4 shrink-0" aria-hidden="true" />
            ) : (
              <Maximize2 className="w-4 h-4 shrink-0" aria-hidden="true" />
            )}
            <span className="hidden md:inline">
              {isFullscreen ? 'Perkecil' : 'Layar Penuh'}
            </span>
          </button>
        )}
      </div>
    </header>
  );
};
