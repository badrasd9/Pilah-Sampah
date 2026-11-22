import React from 'react';

interface SchoolYardBackgroundProps {
  isClean: boolean;
}

interface BuildingProps {
  clean: boolean;
}

const SchoolBuilding2Story: React.FC<BuildingProps> = ({ clean }) => {
  // Dominant green & dark green palette (weathered in dirty mode, vibrant in clean mode)
  const wallLight = clean ? '#BBF7D0' : '#8BA693';
  const wallMid = clean ? '#86EFAC' : '#738F7B';
  const trimGreen = clean ? '#16A34A' : '#4D7358';
  const darkGreen = clean ? '#14532D' : '#2E4736';
  const roofMain = clean ? '#15803D' : '#3C5945';
  const roofDark = clean ? '#14532D' : '#2A4031';
  const windowGlass = clean ? '#BAE6FD' : '#96A9AE';
  const windowFrame = clean ? '#14532D' : '#3A4F41';
  const doorWood = clean ? '#92400E' : '#6B4F3B';
  const signBg = clean ? '#FEF9C3' : '#DFDAC6';
  const signBorder = clean ? '#14532D' : '#3A4F41';
  const signText = clean ? '#14532D' : '#2C3D31';

  const secondFloorWindows = [258, 344, 430, 792, 878, 964];
  const firstFloorWindows = [268, 376, 846, 954];

  return (
    <g>
      {/* Subtle Building Ground Shadow */}
      <rect x="218" y="294" width="844" height="12" rx="4" fill="rgba(15, 23, 42, 0.16)" />

      {/* Main 2-Story Building Base Structure */}
      <rect
        x="224"
        y="96"
        width="832"
        height="202"
        rx="4"
        fill={wallLight}
        stroke={darkGreen}
        strokeWidth="3"
      />

      {/* Lantai 2 Recessed Balcony Corridor Band */}
      <rect x="226" y="102" width="828" height="92" fill={wallMid} />

      {/* Center Risalit / Main Pavilion (2 Stories Tall) */}
      <rect
        x="500"
        y="86"
        width="280"
        height="212"
        fill={wallLight}
        stroke={darkGreen}
        strokeWidth="3"
      />

      {/* Left & Right Structural Corner Pillars */}
      {[224, 500, 766, 1042].map((px) => (
        <rect
          key={px}
          x={px}
          y="96"
          width="14"
          height="202"
          fill={trimGreen}
          stroke={darkGreen}
          strokeWidth="2"
        />
      ))}

      {/* Floor Divider / Lantai 2 Balcony Slab */}
      <rect
        x="216"
        y="190"
        width="848"
        height="13"
        rx="3"
        fill={trimGreen}
        stroke={darkGreen}
        strokeWidth="2.5"
      />

      {/* Lantai 2 Balcony Railing (Left & Right Wings) */}
      <g stroke={darkGreen} strokeWidth="2.5">
        <line x1="238" y1="173" x2="500" y2="173" />
        <line x1="780" y1="173" x2="1042" y2="173" />
        {[255, 285, 315, 345, 375, 405, 435, 465, 490, 795, 825, 855, 885, 915, 945, 975, 1005, 1030].map(
          (rx) => (
            <line key={rx} x1={rx} y1="173" x2={rx} y2="190" strokeWidth="2" />
          )
        )}
      </g>

      {/* Main Hip Roof (2-Story Wings) */}
      <polygon
        points="196,102 252,58 1028,58 1084,102"
        fill={roofMain}
        stroke={roofDark}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* Roof Tile Horizontal Rib Lines */}
      <g stroke={roofDark} strokeWidth="1.5" opacity="0.45">
        <line x1="216" y1="88" x2="1064" y2="88" />
        <line x1="234" y1="73" x2="1046" y2="73" />
      </g>

      {/* Center Gable Pediment Roof */}
      <polygon
        points="480,96 640,34 800,96"
        fill={roofDark}
        stroke="#0F291A"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <polygon
        points="504,92 640,46 776,92"
        fill={trimGreen}
        stroke={darkGreen}
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* School Clock / Crest on Pediment */}
      <circle cx="640" cy="70" r="13" fill="#FFFFFF" stroke={darkGreen} strokeWidth="2.5" />
      <line x1="640" y1="70" x2="640" y2="62" stroke={darkGreen} strokeWidth="2.2" strokeLinecap="round" />
      <line x1="640" y1="70" x2="646" y2="72" stroke={darkGreen} strokeWidth="2.2" strokeLinecap="round" />

      {/* Center Lantai 2 Windows flanking School Name Signboard */}
      {[526, 710].map((wx) => (
        <g key={wx}>
          <rect
            x={wx}
            y="112"
            width="44"
            height="54"
            rx="4"
            fill={windowGlass}
            stroke={windowFrame}
            strokeWidth="2.5"
          />
          <line x1={wx + 22} y1="112" x2={wx + 22} y2="166" stroke={windowFrame} strokeWidth="2" />
          <line x1={wx} y1="139" x2={wx + 44} y2="139" stroke={windowFrame} strokeWidth="2" />
          {clean && (
            <line
              x1={wx + 7}
              y1="120"
              x2={wx + 15}
              y2="128"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          )}
        </g>
      ))}

      {/* Prominent School Signboard: SDN 9 METRO PUSAT */}
      <rect
        x="512"
        y="174"
        width="256"
        height="34"
        rx="6"
        fill={signBg}
        stroke={signBorder}
        strokeWidth="3"
      />
      <text
        x="640"
        y="196.5"
        textAnchor="middle"
        fontSize="16"
        fontWeight="800"
        letterSpacing="0.5"
        fill={signText}
        fontFamily="Bricolage Grotesque, Plus Jakarta Sans, sans-serif"
      >
        SDN 9 METRO PUSAT
      </text>

      {/* Lantai 2 Wing Windows */}
      {secondFloorWindows.map((wx) => (
        <g key={wx}>
          <rect
            x={wx}
            y="114"
            width="58"
            height="48"
            rx="4"
            fill={windowGlass}
            stroke={windowFrame}
            strokeWidth="2.5"
          />
          <line x1={wx + 29} y1="114" x2={wx + 29} y2="162" stroke={windowFrame} strokeWidth="2" />
          <line x1={wx} y1="138" x2={wx + 58} y2="138" stroke={windowFrame} strokeWidth="2" />
          {clean && (
            <line
              x1={wx + 9}
              y1="122"
              x2={wx + 19}
              y2="132"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          )}
        </g>
      ))}

      {/* Lantai 1 Wing Windows */}
      {firstFloorWindows.map((wx) => (
        <g key={wx}>
          <rect
            x={wx}
            y="218"
            width="66"
            height="52"
            rx="4"
            fill={windowGlass}
            stroke={windowFrame}
            strokeWidth="2.5"
          />
          <line x1={wx + 33} y1="218" x2={wx + 33} y2="270" stroke={windowFrame} strokeWidth="2" />
          <line x1={wx} y1="244" x2={wx + 66} y2="244" stroke={windowFrame} strokeWidth="2" />
          <rect x={wx - 3} y="268" width="72" height="6" rx="2" fill={trimGreen} stroke={darkGreen} strokeWidth="1.5" />
          {clean && (
            <line
              x1={wx + 10}
              y1="226"
              x2={wx + 20}
              y2="236"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          )}
        </g>
      ))}

      {/* Lantai 1 Main Entrance Porch & Double Doors */}
      <g>
        {/* Entrance Canopy */}
        <polygon points="576,222 704,222 714,234 566,234" fill={darkGreen} stroke="#0F291A" strokeWidth="2" />
        {/* Double Doors */}
        <rect
          x="600"
          y="234"
          width="80"
          height="64"
          rx="3"
          fill={doorWood}
          stroke={darkGreen}
          strokeWidth="2.5"
        />
        <line x1="640" y1="234" x2="640" y2="298" stroke="#451A03" strokeWidth="2.5" />
        <circle cx="632" cy="268" r="2.8" fill="#FACC15" />
        <circle cx="648" cy="268" r="2.8" fill="#FACC15" />

        {/* Entrance Stone Steps */}
        <rect x="582" y="294" width="116" height="9" rx="2" fill={clean ? '#E2E8F0' : '#A8A29E'} stroke={darkGreen} strokeWidth="2" />

        {/* Flanking Planter Boxes */}
        {[530, 712].map((bx) => (
          <g key={bx}>
            <rect x={bx} y="276" width="38" height="22" rx="3" fill={trimGreen} stroke={darkGreen} strokeWidth="2" />
            <ellipse
              cx={bx + 19}
              cy="272"
              rx="18"
              ry="10"
              fill={clean ? '#22C55E' : '#738262'}
              stroke={darkGreen}
              strokeWidth="2"
            />
            {clean && (
              <>
                <circle cx={bx + 12} cy="270" r="3" fill="#F43F5E" />
                <circle cx={bx + 25} cy="271" r="3" fill="#FACC15" />
              </>
            )}
          </g>
        ))}
      </g>

      {/* Flagpole */}
      <g>
        <rect x="166" y="106" width="6" height="196" rx="2" fill={clean ? '#F1F5F9' : '#94A3B8'} stroke="#475569" strokeWidth="1.5" />
        <circle cx="169" cy="104" r="5" fill="#FACC15" stroke="#854D0E" strokeWidth="1.5" />
        <rect x="172" y="110" width="48" height="15" fill={clean ? '#EF4444' : '#B85454'} />
        <rect x="172" y="125" width="48" height="15" fill={clean ? '#FFFFFF' : '#E2E2DA'} />
        <rect x="172" y="110" width="48" height="30" fill="none" stroke="#334155" strokeWidth="1" opacity="0.35" />
      </g>
    </g>
  );
};

export const SchoolYardBackground: React.FC<SchoolYardBackgroundProps> = ({ isClean }) => {
  return (
    <div className="absolute inset-0 overflow-hidden select-none pointer-events-none" aria-hidden="true">
      {/* Dirty Schoolyard (Base Layer) */}
      <svg
        viewBox="0 0 1280 720"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <linearGradient id="dirtySky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9FB0A4" />
            <stop offset="100%" stopColor="#D3DDD2" />
          </linearGradient>
          <linearGradient id="dirtyYard" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#BFB599" />
            <stop offset="100%" stopColor="#A59B7F" />
          </linearGradient>
        </defs>

        {/* Overcast Hazy Sky */}
        <rect width="1280" height="340" fill="url(#dirtySky)" />

        {/* Distant Hills */}
        <path d="M0 280 Q240 220 520 265 T1040 245 T1280 275 L1280 340 L0 340 Z" fill="#8B9E8E" opacity="0.55" />

        {/* Dusty Clouds */}
        <g fill="#C8D1C7" opacity="0.9">
          <ellipse cx="160" cy="76" rx="76" ry="26" />
          <ellipse cx="205" cy="66" rx="50" ry="24" />
          <ellipse cx="1060" cy="84" rx="88" ry="28" />
          <ellipse cx="1115" cy="72" rx="52" ry="22" />
        </g>

        {/* Weathered Trees */}
        <g>
          <rect x="74" y="192" width="22" height="114" rx="4" fill="#63513F" />
          <circle cx="85" cy="176" r="56" fill="#6F825E" />
          <circle cx="52" cy="194" r="38" fill="#5E704F" />
          <circle cx="118" cy="192" r="40" fill="#657855" />

          <rect x="1165" y="188" width="24" height="118" rx="4" fill="#63513F" />
          <circle cx="1177" cy="172" r="58" fill="#6F825E" />
          <circle cx="1140" cy="192" r="38" fill="#5E704F" />
          <circle cx="1212" cy="190" r="38" fill="#657855" />
        </g>

        {/* 2-Story Green & Dark Green School Building (Dirty/Weathered State) */}
        <SchoolBuilding2Story clean={false} />

        {/* Wilted Lawn Strip */}
        <rect x="0" y="298" width="1280" height="40" fill="#7D885B" />
        <line x1="0" y1="338" x2="1280" y2="338" stroke="#6B6450" strokeWidth="3" />

        {/* Dirty School Courtyard Ground */}
        <rect x="0" y="338" width="1280" height="382" fill="url(#dirtyYard)" />

        {/* Courtyard Paving Block Pattern */}
        <g stroke="#968C72" strokeWidth="2" opacity="0.55">
          <line x1="0" y1="415" x2="1280" y2="415" />
          <line x1="0" y1="505" x2="1280" y2="505" />
          <line x1="0" y1="605" x2="1280" y2="605" />
          <line x1="220" y1="338" x2="110" y2="720" />
          <line x1="460" y1="338" x2="405" y2="720" />
          <line x1="700" y1="338" x2="720" y2="720" />
          <line x1="940" y1="338" x2="1040" y2="720" />
        </g>

        {/* Muddy Puddles, Stains & Stink Lines */}
        <g opacity="0.68">
          <ellipse cx="305" cy="462" rx="68" ry="20" fill="#85765B" />
          <ellipse cx="775" cy="548" rx="80" ry="24" fill="#827257" />
          <ellipse cx="505" cy="648" rx="62" ry="18" fill="#85765B" />
          <path d="M346 416 Q338 401 348 388 Q356 376 346 364" fill="none" stroke="#62664F" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M736 490 Q728 476 738 463" fill="none" stroke="#62664F" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="364" cy="390" r="2.5" fill="#3F4232" />
          <circle cx="328" cy="402" r="2.5" fill="#3F4232" />
          <circle cx="754" cy="470" r="2.5" fill="#3F4232" />
        </g>

        {/* Bottom Grass Border */}
        <path d="M0 688 Q180 676 360 690 T720 688 T1080 686 T1280 692 L1280 720 L0 720 Z" fill="#6F7A4F" />
      </svg>

      {/* Clean Schoolyard (Cross-fade Layer on Win) */}
      <svg
        viewBox="0 0 1280 720"
        preserveAspectRatio="xMidYMid slice"
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-out ${
          isClean ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <defs>
          <linearGradient id="cleanSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#E0F2FE" />
          </linearGradient>
          <linearGradient id="cleanYard" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FBF6E8" />
            <stop offset="100%" stopColor="#EFE5C9" />
          </linearGradient>
        </defs>

        {/* Bright Clear Sky */}
        <rect width="1280" height="340" fill="url(#cleanSky)" />

        {/* Soft Distant Green Hills */}
        <path d="M0 280 Q240 220 520 265 T1040 245 T1280 275 L1280 340 L0 340 Z" fill="#86EFAC" opacity="0.55" />

        {/* Radiant Sun */}
        <g transform="translate(1130, 74)">
          <circle cx="0" cy="0" r="46" fill="#FDE047" opacity="0.35" />
          <circle cx="0" cy="0" r="30" fill="#FACC15" />
        </g>

        {/* Fluffy Bright Clouds */}
        <g fill="#FFFFFF" opacity="0.96">
          <ellipse cx="160" cy="76" rx="76" ry="26" />
          <ellipse cx="205" cy="66" rx="50" ry="24" />
          <ellipse cx="118" cy="78" rx="40" ry="18" />
          <ellipse cx="975" cy="84" rx="84" ry="28" />
          <ellipse cx="1028" cy="72" rx="50" ry="22" />
        </g>

        {/* Lush Trees */}
        <g>
          <rect x="74" y="192" width="22" height="114" rx="4" fill="#854D27" />
          <circle cx="85" cy="174" r="58" fill="#22C55E" />
          <circle cx="50" cy="192" r="40" fill="#16A34A" />
          <circle cx="118" cy="190" r="42" fill="#4ADE80" />

          <rect x="1165" y="188" width="24" height="118" rx="4" fill="#854D27" />
          <circle cx="1177" cy="170" r="60" fill="#22C55E" />
          <circle cx="1138" cy="190" r="40" fill="#16A34A" />
          <circle cx="1214" cy="189" r="40" fill="#4ADE80" />
        </g>

        {/* 2-Story Green & Dark Green School Building (Clean State) */}
        <SchoolBuilding2Story clean={true} />

        {/* Lush Green Lawn & Blooming Flowers */}
        <rect x="0" y="298" width="1280" height="40" fill="#22C55E" />
        <line x1="0" y1="338" x2="1280" y2="338" stroke="#15803D" strokeWidth="3" />
        {[120, 210, 320, 440, 860, 970, 1080, 1180].map((fx, i) => (
          <g key={fx} transform={`translate(${fx}, 318)`}>
            <circle cx="0" cy="0" r="6" fill={i % 2 === 0 ? '#F43F5E' : '#FACC15'} />
            <circle cx="0" cy="0" r="2.5" fill="#FFFFFF" />
          </g>
        ))}

        {/* Clean Bright Courtyard */}
        <rect x="0" y="338" width="1280" height="382" fill="url(#cleanYard)" />

        <g stroke="#DDD0AE" strokeWidth="2" opacity="0.65">
          <line x1="0" y1="415" x2="1280" y2="415" />
          <line x1="0" y1="505" x2="1280" y2="505" />
          <line x1="0" y1="605" x2="1280" y2="605" />
          <line x1="220" y1="338" x2="110" y2="720" />
          <line x1="460" y1="338" x2="405" y2="720" />
          <line x1="700" y1="338" x2="720" y2="720" />
          <line x1="940" y1="338" x2="1040" y2="720" />
        </g>

        {/* Clean Sparkles */}
        <g fill="#FACC15">
          <path d="M360 440 L364 450 L374 454 L364 458 L360 468 L356 458 L346 454 L356 450 Z" />
          <path d="M880 510 L883 518 L891 521 L883 524 L880 532 L877 524 L869 521 L877 518 Z" />
          <path d="M590 615 L594 624 L603 628 L594 632 L590 641 L586 632 L577 628 L586 624 Z" />
        </g>

        {/* Fresh Green Bottom Lawn */}
        <path d="M0 688 Q180 676 360 690 T720 688 T1080 686 T1280 692 L1280 720 L0 720 Z" fill="#16A34A" />
      </svg>
    </div>
  );
};
