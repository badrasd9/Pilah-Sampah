import React from 'react';
import { StageConfig } from '../data/items';

interface TrashBinProps {
  stage: StageConfig;
  count: number;
  isFull: boolean;
  justCollected: boolean;
}

export const TrashBin: React.FC<TrashBinProps> = ({
  stage,
  count,
  isFull,
  justCollected,
}) => {
  const isYellow = stage.category === 'anorganik';
  const strokeColor = '#1E293B';
  const bodyLight =
    stage.category === 'organik'
      ? '#22C55E'
      : stage.category === 'anorganik'
        ? '#FACC15'
        : '#EF4444';
  const bodyDark = stage.binAccent;

  return (
    <div
      key={stage.stageId}
      className={`animate-bin-enter flex flex-col items-center select-none ${
        justCollected ? 'animate-bin-pop' : ''
      }`}
      role="status"
      aria-live="polite"
      aria-label={`Tong ${stage.binLabel}, terisi ${count} dari ${stage.target}${isFull ? ', penuh' : ''}`}
    >
      {/* Counter Pill / Plate above bin (clear numeric + text status) */}
      <div
        className="mb-1.5 px-3 py-1 rounded-lg border-2 border-slate-900/80 shadow-sm flex items-center gap-2 font-display font-bold text-xs sm:text-sm tracking-tight"
        style={{
          backgroundColor: isFull ? '#0F172A' : '#FFFFFF',
          color: isFull ? '#FFFFFF' : '#0F172A',
        }}
      >
        <span>{isFull ? 'PENUH!' : stage.binLabel}</span>
        <span className="opacity-40" aria-hidden="true">
          ·
        </span>
        <span className="tabular-nums font-extrabold">
          {count}/{stage.target}
        </span>
      </div>

      {/* Bin Illustration (Open vs Full) */}
      <div className="relative w-24 h-28 sm:w-32 sm:h-36 md:w-36 md:h-40">
        <svg viewBox="0 0 160 180" className="w-full h-full drop-shadow-lg overflow-visible">
          {/* Ground Shadow */}
          <ellipse cx="80" cy="168" rx="54" ry="9" fill="rgba(15, 23, 42, 0.25)" />

          {/* Open Lid State (Tilted back & dark bin mouth) */}
          {!isFull && (
            <g>
              {/* Dark interior mouth */}
              <ellipse cx="80" cy="48" rx="48" ry="11" fill="#1E293B" stroke={strokeColor} strokeWidth="3" />
              {/* Tilted Open Lid */}
              <g transform="translate(30, 38) rotate(-32)">
                <rect
                  x="0"
                  y="-14"
                  width="100"
                  height="14"
                  rx="6"
                  fill={bodyDark}
                  stroke={strokeColor}
                  strokeWidth="3"
                />
                <rect
                  x="34"
                  y="-22"
                  width="32"
                  height="8"
                  rx="4"
                  fill={stage.binColor}
                  stroke={strokeColor}
                  strokeWidth="2.5"
                />
              </g>
            </g>
          )}

          {/* Bin Body */}
          <path
            d="M32 50 L128 50 L118 162 Q117 168 110 168 L50 168 Q43 168 42 162 Z"
            fill={stage.binColor}
            stroke={strokeColor}
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Subtle Left Highlight & Right Shading */}
          <path d="M40 56 L50 56 L57 160 L48 160 Z" fill={bodyLight} opacity="0.5" />
          <path d="M110 56 L120 56 L112 160 L103 160 Z" fill={bodyDark} opacity="0.45" />

          {/* Top Rim */}
          <rect
            x="26"
            y="43"
            width="108"
            height="13"
            rx="6"
            fill={bodyLight}
            stroke={strokeColor}
            strokeWidth="3.5"
          />

          {/* Label Plate on Front of Bin */}
          <rect
            x="38"
            y="74"
            width="84"
            height="68"
            rx="10"
            fill="#FFFFFF"
            fillOpacity="0.94"
            stroke={strokeColor}
            strokeWidth="2.5"
          />

          {/* Category Icon (Non-Hue-Only Symbol) */}
          {stage.category === 'organik' && (
            <g transform="translate(80, 96)">
              <path
                d="M-14 8 C-14 -8 4 -16 16 -14 C16 -2 8 14 -8 12 Z"
                fill="#16A34A"
                stroke={strokeColor}
                strokeWidth="2"
              />
              <path d="M-12 10 Q0 0 11 -10" fill="none" stroke="#DCFCE7" strokeWidth="2" strokeLinecap="round" />
            </g>
          )}

          {stage.category === 'anorganik' && (
            <g transform="translate(80, 96)">
              <circle cx="0" cy="0" r="14" fill="#FEF08A" stroke="#CA8A04" strokeWidth="2" />
              <path
                d="M-6 -4 L0 -10 L6 -4 M6 3 L0 9 L-6 3"
                fill="none"
                stroke="#1E293B"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M0 -10 L0 -2 M0 9 L0 2" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
            </g>
          )}

          {stage.category === 'b3' && (
            <g transform="translate(80, 96)">
              <polygon points="0,-15 15,12 -15,12" fill="#FACC15" stroke={strokeColor} strokeWidth="2.2" strokeLinejoin="round" />
              <line x1="0" y1="-6" x2="0" y2="3" stroke={strokeColor} strokeWidth="2.8" strokeLinecap="round" />
              <circle cx="0" cy="7.5" r="1.6" fill={strokeColor} />
            </g>
          )}

          {/* Bin Text Label */}
          <text
            x="80"
            y="130"
            textAnchor="middle"
            fontSize={isYellow ? '11.5' : '13'}
            fontWeight="800"
            fill="#0F172A"
            fontFamily="Bricolage Grotesque, Plus Jakarta Sans, sans-serif"
          >
            {stage.binLabel}
          </text>

          {/* Closed Lid & PENUH Stamp State */}
          {isFull && (
            <g>
              {/* Closed Lid */}
              <rect
                x="24"
                y="32"
                width="112"
                height="15"
                rx="7"
                fill={bodyDark}
                stroke={strokeColor}
                strokeWidth="3.5"
              />
              <rect
                x="62"
                y="22"
                width="36"
                height="10"
                rx="5"
                fill={stage.binColor}
                stroke={strokeColor}
                strokeWidth="3"
              />
              {/* Checkmark Badge */}
              <g transform="translate(122, 46)">
                <circle cx="0" cy="0" r="16" fill="#0F172A" stroke="#FFFFFF" strokeWidth="2.5" />
                <path
                  d="M-6 0 L-2 5 L7 -5"
                  fill="none"
                  stroke="#4ADE80"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g>
          )}
        </svg>
      </div>
    </div>
  );
};
