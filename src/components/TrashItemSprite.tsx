import React from 'react';
import { TrashItem } from '../data/items';

interface TrashItemSpriteProps {
  item: TrashItem;
  isWiggling: boolean;
  isFlying: boolean;
  flyOffset: { dx: number; dy: number };
  disabled: boolean;
  onSelect: (itemId: string) => void;
}

function renderItemSvg(itemId: string): React.ReactNode {
  const stroke = '#1E293B';

  switch (itemId) {
    // 1. Kulit pisang
    case 'org-01':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <path d="M29 10 L35 10 L36 18 L28 18 Z" fill="#78350F" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M30 17 C20 26 10 38 14 48 C22 44 27 34 32 24 Z" fill="#FACC15" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M32 17 C31 30 27 42 34 52 C41 44 40 31 35 18 Z" fill="#FDE047" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M34 17 C43 24 52 35 50 45 C42 42 38 32 34 22 Z" fill="#EAB308" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />
        </svg>
      );

    // 2. Daun kering
    case 'org-02':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <path d="M14 46 C14 24 34 12 52 14 C52 32 38 48 18 46 Z" fill="#B45309" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M10 52 L44 20" stroke="#78350F" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M26 36 L26 24 M34 28 L44 28" stroke="#78350F" strokeWidth="2" strokeLinecap="round" />
          <path d="M24 50 C28 38 40 34 52 40 C46 52 34 56 24 50 Z" fill="#D97706" stroke={stroke} strokeWidth="2.3" strokeLinejoin="round" />
        </svg>
      );

    // 3. Sisa nasi
    case 'org-03':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <ellipse cx="32" cy="40" rx="22" ry="12" fill="#E2E8F0" stroke={stroke} strokeWidth="2.5" />
          <path d="M18 38 Q22 24 32 26 Q42 22 46 38 Z" fill="#FFFFFF" stroke={stroke} strokeWidth="2.2" />
          <circle cx="24" cy="34" r="2" fill="#CBD5E1" />
          <circle cx="33" cy="31" r="2" fill="#CBD5E1" />
          <circle cx="40" cy="35" r="2" fill="#CBD5E1" />
          <circle cx="29" cy="38" r="2" fill="#CBD5E1" />
          <path d="M40 28 L49 22" stroke="#F97316" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      );

    // 4. Kulit jeruk
    case 'org-04':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <path d="M14 38 C14 22 30 16 42 22 C48 26 52 36 46 44 C36 52 18 48 14 38 Z" fill="#F97316" stroke={stroke} strokeWidth="2.5" />
          <path d="M20 38 C24 30 36 28 43 35 C38 43 26 44 20 38 Z" fill="#FED7AA" stroke={stroke} strokeWidth="2" />
          <circle cx="22" cy="26" r="1.5" fill="#C2410C" />
          <circle cx="30" cy="23" r="1.5" fill="#C2410C" />
          <circle cx="44" cy="30" r="1.5" fill="#C2410C" />
        </svg>
      );

    // 5. Ranting kecil
    case 'org-05':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <path d="M10 46 L52 18" stroke="#78350F" strokeWidth="6" strokeLinecap="round" />
          <path d="M10 46 L52 18" stroke={stroke} strokeWidth="2" strokeLinecap="round" opacity="0.4" />
          <path d="M28 34 L22 18" stroke="#78350F" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M36 28 L48 34" stroke="#78350F" strokeWidth="4" strokeLinecap="round" />
          <ellipse cx="20" cy="16" rx="6" ry="4" transform="rotate(-25 20 16)" fill="#65A30D" stroke={stroke} strokeWidth="2" />
        </svg>
      );

    // 6. Sisa sayur
    case 'org-06':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <path d="M14 40 C12 24 28 16 38 24 C46 30 40 48 24 48 Z" fill="#4ADE80" stroke={stroke} strokeWidth="2.5" />
          <path d="M24 38 Q30 30 34 24" fill="none" stroke="#15803D" strokeWidth="2" strokeLinecap="round" />
          <polygon points="34,42 52,34 48,48" fill="#FB923C" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M50 36 L55 30 M51 40 L57 38" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    // 7. Bonggol apel
    case 'org-07':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <path d="M32 10 L35 16" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />
          <path d="M18 18 Q32 13 46 18 Q40 24 36 24 L36 40 Q42 42 46 47 Q32 53 18 47 Q24 42 28 40 L28 24 Q24 24 18 18 Z" fill="#FEF3C7" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M18 18 Q32 13 46 18 L43 22 Q32 18 21 22 Z" fill="#EF4444" stroke={stroke} strokeWidth="2" />
          <path d="M18 47 Q32 53 46 47 L43 43 Q32 47 21 43 Z" fill="#EF4444" stroke={stroke} strokeWidth="2" />
          <ellipse cx="30" cy="31" rx="1.6" ry="2.6" fill="#78350F" />
          <ellipse cx="34" cy="34" rx="1.6" ry="2.6" fill="#78350F" />
        </svg>
      );

    // 8. Cangkang telur
    case 'org-08':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <path d="M12 36 C12 48 22 52 32 46 L29 36 L23 39 L18 33 Z" fill="#FEF3C7" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M32 22 C44 16 54 24 52 38 L44 35 L39 41 L34 34 Z" fill="#FDE68A" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />
        </svg>
      );

    // 9. Botol plastik
    case 'anorg-01':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <rect x="26" y="8" width="12" height="7" rx="2" fill="#2563EB" stroke={stroke} strokeWidth="2.3" />
          <path d="M24 15 L40 15 L43 24 L43 52 Q43 56 38 56 L26 56 Q21 56 21 52 L21 24 Z" fill="#BAE6FD" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />
          <rect x="21" y="30" width="22" height="12" fill="#38BDF8" stroke={stroke} strokeWidth="2" />
          <line x1="27" y1="20" x2="27" y2="27" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    // 10. Kaleng minuman
    case 'anorg-02':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <rect x="20" y="14" width="24" height="38" rx="5" fill="#EF4444" stroke={stroke} strokeWidth="2.5" />
          <ellipse cx="32" cy="14" rx="12" ry="4" fill="#CBD5E1" stroke={stroke} strokeWidth="2.3" />
          <rect x="20" y="26" width="24" height="12" fill="#FFFFFF" stroke={stroke} strokeWidth="2" />
          <line x1="26" y1="32" x2="38" y2="32" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    // 11. Kantong plastik
    case 'anorg-03':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <path d="M22 14 C20 14 18 22 20 26 L14 48 Q14 54 22 54 L42 54 Q50 54 50 48 L44 26 C46 22 44 14 42 14 C39 14 38 22 38 24 L26 24 C26 22 25 14 22 14 Z" fill="#E0F2FE" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M24 34 L40 34 M22 42 L42 42" stroke="#7DD3FC" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    // 12. Gelas plastik
    case 'anorg-04':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <path d="M36 10 L34 22" stroke="#F43F5E" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M36 10 L44 8" stroke="#F43F5E" strokeWidth="3.5" strokeLinecap="round" />
          <polygon points="18,22 46,22 41,54 23,54" fill="#E0F2FE" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />
          <rect x="16" y="18" width="32" height="5" rx="2.5" fill="#F8FAFC" stroke={stroke} strokeWidth="2.3" />
          <path d="M24 38 L40 38" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    // 13. Botol kaca
    case 'anorg-05':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <path d="M27 9 L37 9 L37 20 L43 28 L43 52 Q43 56 38 56 L26 56 Q21 56 21 52 L21 28 L27 20 Z" fill="#10B981" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />
          <rect x="26" y="7" width="12" height="4" rx="1.5" fill="#F59E0B" stroke={stroke} strokeWidth="2" />
          <line x1="26" y1="32" x2="26" y2="48" stroke="#A7F3D0" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    // 14. Bungkus snack
    case 'anorg-06':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <polygon points="14,16 50,14 46,22 48,44 50,52 14,50 18,44 16,22" fill="#EC4899" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />
          <rect x="20" y="25" width="24" height="16" rx="4" fill="#FDE047" stroke={stroke} strokeWidth="2" />
          <circle cx="32" cy="33" r="4" fill="#EF4444" />
        </svg>
      );

    // 15. Kardus bekas
    case 'anorg-07':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <polygon points="12,26 32,16 52,26 52,48 32,56 12,48" fill="#D97706" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />
          <polygon points="12,26 32,16 52,26 32,35" fill="#F59E0B" stroke={stroke} strokeWidth="2.3" strokeLinejoin="round" />
          <line x1="32" y1="35" x2="32" y2="56" stroke={stroke} strokeWidth="2.3" />
          <path d="M18 19 L38 29" stroke="#FEF3C7" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    // 16. Styrofoam
    case 'anorg-08':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <polygon points="10,32 24,18 54,22 42,38" fill="#FFFFFF" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />
          <polygon points="10,32 42,38 54,22 50,44 38,52 12,44" fill="#F1F5F9" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />
          <line x1="22" y1="28" x2="38" y2="30" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    // 17. Baterai bekas
    case 'b3-01':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <rect x="26" y="8" width="12" height="5" rx="1.5" fill="#94A3B8" stroke={stroke} strokeWidth="2.2" />
          <rect x="20" y="13" width="24" height="42" rx="4" fill="#1E293B" stroke={stroke} strokeWidth="2.5" />
          <rect x="20" y="13" width="24" height="14" rx="2" fill="#F59E0B" stroke={stroke} strokeWidth="2.2" />
          <path d="M32 33 L28 40 L33 40 L30 48 L37 38 L32 38 Z" fill="#FACC15" />
        </svg>
      );

    // 18. Bohlam bekas
    case 'b3-02':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <path d="M22 36 C16 30 16 14 32 14 C48 14 48 30 42 36 L39 44 L25 44 Z" fill="#FEF08A" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />
          <rect x="25" y="44" width="14" height="9" rx="2" fill="#94A3B8" stroke={stroke} strokeWidth="2.3" />
          <path d="M28 53 L36 53 L34 56 L30 56 Z" fill="#475569" stroke={stroke} strokeWidth="2" />
          <path d="M26 24 L31 30 L27 34" fill="none" stroke="#DC2626" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    // 19. Kaleng cat
    case 'b3-03':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <rect x="16" y="20" width="32" height="34" rx="4" fill="#CBD5E1" stroke={stroke} strokeWidth="2.5" />
          <ellipse cx="32" cy="20" rx="16" ry="5" fill="#94A3B8" stroke={stroke} strokeWidth="2.5" />
          <path d="M22 23 C22 32 27 34 27 25 C27 36 33 38 33 24 Z" fill="#EF4444" stroke={stroke} strokeWidth="1.5" />
          <polygon points="32,33 40,46 24,46" fill="#FACC15" stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
          <line x1="32" y1="37" x2="32" y2="41" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
          <circle cx="32" cy="43.5" r="1" fill={stroke} />
        </svg>
      );

    // 20. Obat kedaluwarsa
    case 'b3-04':
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <rect x="23" y="10" width="18" height="7" rx="2" fill="#F8FAFC" stroke={stroke} strokeWidth="2.3" />
          <rect x="19" y="17" width="26" height="36" rx="5" fill="#B45309" stroke={stroke} strokeWidth="2.5" />
          <rect x="22" y="25" width="20" height="18" rx="3" fill="#FFFFFF" stroke={stroke} strokeWidth="2" />
          <path d="M32 29 L32 39 M27 34 L37 34" stroke="#DC2626" strokeWidth="3.5" strokeLinecap="round" />
          <ellipse cx="49" cy="49" rx="5" ry="3" fill="#F43F5E" stroke={stroke} strokeWidth="2" />
        </svg>
      );

    // 21. Semprot nyamuk
    case 'b3-05':
    default:
      return (
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <rect x="27" y="9" width="10" height="7" rx="2" fill="#F8FAFC" stroke={stroke} strokeWidth="2.2" />
          <circle cx="34" cy="12" r="1.8" fill={stroke} />
          <path d="M22 20 L27 16 L37 16 L42 20 L42 54 L22 54 Z" fill="#DC2626" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" />
          <polygon points="32,27 40,42 24,42" fill="#FACC15" stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
          <line x1="32" y1="32" x2="32" y2="37" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
          <circle cx="32" cy="39.5" r="1" fill={stroke} />
        </svg>
      );
  }
}

export const TrashItemSprite: React.FC<TrashItemSpriteProps> = ({
  item,
  isWiggling,
  isFlying,
  flyOffset,
  disabled,
  onSelect,
}) => {
  const style = {
    left: `${item.x}%`,
    top: `${item.y}%`,
    '--fly-x': `${flyOffset.dx}px`,
    '--fly-y': `${flyOffset.dy}px`,
  } as React.CSSProperties;

  return (
    <button
      type="button"
      onClick={() => onSelect(item.itemId)}
      disabled={disabled || isFlying}
      aria-label={item.name}
      style={style}
      className={`group absolute -translate-x-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] w-12 h-12 sm:w-14 sm:h-14 md:w-[68px] md:h-[68px] p-1 rounded-full cursor-pointer transition-transform duration-150 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 ${
        isFlying
          ? 'animate-item-fly z-30'
          : isWiggling
            ? 'animate-item-wiggle z-20'
            : 'hover:scale-110 active:scale-95 z-10 hover:z-20'
      }`}
    >
      {/* Subtle ground shadow */}
      <span
        aria-hidden="true"
        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-10 h-2.5 rounded-full bg-slate-950/25 blur-[1px] pointer-events-none"
      />

      {/* Rotated Cartoon Sprite */}
      <span
        className="relative block w-full h-full drop-shadow-[0_3px_3px_rgba(15,23,42,0.28)]"
        style={{ transform: `rotate(${item.rotation}deg)` }}
      >
        {renderItemSvg(item.itemId)}
      </span>

      {/* Hover / Focus Item Name Label */}
      <span
        aria-hidden="true"
        className="pointer-events-none opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-150 absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded-md bg-slate-900 text-white text-[11px] font-semibold shadow-md"
      >
        {item.name}
      </span>
    </button>
  );
};
