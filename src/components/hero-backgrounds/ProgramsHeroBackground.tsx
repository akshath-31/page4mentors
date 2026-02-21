const ProgramsHeroBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1440 400"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* === BACKGROUND LAYER === */}

      {/* Distant mountains */}
      <path
        d="M0 280 Q100 200 200 250 Q300 180 400 230 Q500 170 600 220 Q700 160 800 210 Q900 170 1000 220 Q1100 180 1200 230 Q1300 190 1440 240 L1440 400 L0 400Z"
        fill="currentColor"
        className="text-primary-foreground/[0.04]"
      />

      {/* Clouds */}
      <g className="text-primary-foreground/[0.05]" fill="currentColor">
        <ellipse cx="180" cy="55" rx="90" ry="22" />
        <ellipse cx="220" cy="46" rx="55" ry="17" />
        <ellipse cx="145" cy="50" rx="45" ry="15" />
      </g>
      <g className="text-primary-foreground/[0.04]" fill="currentColor">
        <ellipse cx="1250" cy="45" rx="80" ry="20" />
        <ellipse cx="1290" cy="38" rx="50" ry="16" />
        <ellipse cx="1215" cy="42" rx="40" ry="14" />
      </g>
      <g className="text-primary-foreground/[0.03]" fill="currentColor">
        <ellipse cx="650" cy="35" rx="60" ry="14" />
      </g>

      {/* === MIDGROUND LAYER === */}

      {/* Rolling hills */}
      <path
        d="M0 320 Q200 270 400 300 Q600 330 800 290 Q1000 260 1200 300 Q1350 330 1440 310 L1440 400 L0 400Z"
        fill="currentColor"
        className="text-primary-foreground/[0.06]"
      />

      {/* Journey path — winding road */}
      <path
        d="M-20 380 Q100 350 200 360 Q350 375 450 345 Q580 310 700 330 Q830 350 950 320 Q1080 290 1200 310 Q1320 330 1460 310"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        className="text-primary-foreground/[0.08]"
        strokeLinecap="round"
      />
      {/* Path shadow */}
      <path
        d="M-20 385 Q100 355 200 365 Q350 380 450 350 Q580 315 700 335 Q830 355 950 325 Q1080 295 1200 315 Q1320 335 1460 315"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-primary-foreground/[0.04]"
        strokeLinecap="round"
      />

      {/* Milestone markers along path */}
      {[200, 450, 700, 950, 1200].map((x, i) => {
        const y = [360, 345, 330, 320, 310][i];
        return (
          <g key={x}>
            <circle cx={x} cy={y} r={8} fill="currentColor" className="text-primary-foreground/[0.09]" />
            <circle cx={x} cy={y} r={4} fill="currentColor" className="text-primary-foreground/[0.04]" />
          </g>
        );
      })}

      {/* Flag at end of journey */}
      <g className="text-primary-foreground/[0.09]" fill="currentColor">
        <line x1="1200" y1="310" x2="1200" y2="275" stroke="currentColor" strokeWidth="2" />
        <path d="M1200 275 L1225 282 L1200 289Z" />
      </g>

      {/* === FOREGROUND ELEMENTS === */}

      {/* Foreground hill */}
      <path
        d="M0 370 Q200 345 400 365 Q600 385 800 360 Q1000 340 1200 365 Q1350 380 1440 370 L1440 400 L0 400Z"
        fill="currentColor"
        className="text-primary-foreground/[0.08]"
      />

      {/* Left side — Growth stages: seedling → sapling → tree */}
      {/* Seedling */}
      <g className="text-primary-foreground/[0.08]" fill="currentColor">
        <line x1="70" y1="340" x2="70" y2="325" stroke="currentColor" strokeWidth="1.5" />
        <path d="M70 325 Q63 315 70 308 Q77 315 70 325Z" />
      </g>
      {/* Small plant */}
      <g className="text-primary-foreground/[0.09]" fill="currentColor">
        <line x1="120" y1="330" x2="120" y2="300" stroke="currentColor" strokeWidth="2" />
        <path d="M120 310 Q110 298 120 290 Q130 298 120 310Z" />
        <path d="M120 320 Q130 312 136 318" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <path d="M120 315 Q110 308 106 314" stroke="currentColor" strokeWidth="1.2" fill="none" />
      </g>
      {/* Full tree */}
      <g className="text-primary-foreground/[0.10]" fill="currentColor">
        <rect x="177" y="260" width="7" height="55" rx="3" />
        <ellipse cx="180" cy="245" rx="30" ry="35" />
        {/* Branches */}
        <path d="M170 268 Q155 260 148 252" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M190 265 Q205 258 210 250" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </g>

      {/* Book transforming into leaves */}
      <g className="text-primary-foreground/[0.08]" fill="currentColor">
        <path d="M310 340 L310 360 Q325 357 340 360 L340 340 Q325 337 310 340Z" />
        <path d="M340 340 L340 360 Q355 357 370 360 L370 340 Q355 337 340 340Z" />
        <line x1="340" y1="338" x2="340" y2="362" stroke="currentColor" strokeWidth="1" />
      </g>
      {/* Leaves emerging from the book */}
      <path d="M325 335 Q320 320 330 325 Q335 318 325 335Z" fill="currentColor" className="text-primary-foreground/[0.06]" />
      <path d="M345 330 Q350 315 355 325 Q358 316 345 330Z" fill="currentColor" className="text-primary-foreground/[0.06]" />
      <path d="M335 325 Q338 310 342 322" fill="currentColor" className="text-primary-foreground/[0.05]" />

      {/* Right side — Lightbulb (larger, more detailed) */}
      <g className="text-primary-foreground/[0.09]" fill="currentColor">
        <path d="M1350 240 Q1335 210 1350 185 Q1365 170 1380 185 Q1395 210 1380 240 Q1365 248 1350 240Z" />
        <rect x="1355" y="242" width="20" height="8" rx="3" />
        <rect x="1358" y="252" width="14" height="4" rx="2" />
        {/* Rays */}
        <line x1="1365" y1="170" x2="1365" y2="155" stroke="currentColor" strokeWidth="1.5" className="text-primary-foreground/[0.06]" />
        <line x1="1340" y1="180" x2="1328" y2="170" stroke="currentColor" strokeWidth="1.5" className="text-primary-foreground/[0.06]" />
        <line x1="1390" y1="180" x2="1402" y2="170" stroke="currentColor" strokeWidth="1.5" className="text-primary-foreground/[0.06]" />
        <line x1="1330" y1="200" x2="1315" y2="196" stroke="currentColor" strokeWidth="1" className="text-primary-foreground/[0.04]" />
        <line x1="1400" y1="200" x2="1415" y2="196" stroke="currentColor" strokeWidth="1" className="text-primary-foreground/[0.04]" />
      </g>

      {/* Teens sitting — left side, peacefully learning */}
      <g className="text-primary-foreground/[0.08]" fill="currentColor">
        <circle cx="440" cy="330" r="11" />
        <path d="M429 341 Q435 356 440 360 Q445 356 451 341 Q446 345 440 346 Q435 345 429 341Z" />
        <ellipse cx="440" cy="367" rx="15" ry="5" />
        {/* Book in lap */}
        <rect x="433" y="355" width="14" height="10" rx="1.5" className="text-primary-foreground/[0.05]" />
      </g>

      {/* Teen reflecting — right side */}
      <g className="text-primary-foreground/[0.08]" fill="currentColor">
        <circle cx="1120" cy="310" r="12" />
        <path d="M1108 322 Q1114 338 1120 343 Q1126 338 1132 322 Q1126 326 1120 327 Q1114 326 1108 322Z" />
        <ellipse cx="1120" cy="350" rx="16" ry="5" />
      </g>
      {/* Thought bubble from reflecting teen */}
      <circle cx="1105" cy="298" r="4" fill="currentColor" className="text-primary-foreground/[0.05]" />
      <circle cx="1095" cy="285" r="6" fill="currentColor" className="text-primary-foreground/[0.05]" />
      <circle cx="1082" cy="268" r="9" fill="currentColor" className="text-primary-foreground/[0.04]" />

      {/* Scattered leaves */}
      <path d="M500 100 Q515 75 530 100 Q515 88 500 100Z" fill="currentColor" className="text-primary-foreground/[0.05]" />
      <path d="M950 90 Q962 68 975 90 Q962 80 950 90Z" fill="currentColor" className="text-primary-foreground/[0.05]" />
      <path d="M800 110 Q810 92 820 110 Q810 100 800 110Z" fill="currentColor" className="text-primary-foreground/[0.04]" />

      {/* Birds */}
      <path d="M300 80 Q306 72 312 80" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-primary-foreground/[0.05]" strokeLinecap="round" />
      <path d="M318 76 Q323 70 328 76" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary-foreground/[0.04]" strokeLinecap="round" />

      {/* Flowers along path */}
      {[250, 500, 820, 1060].map((x) => (
        <g key={x} className="text-primary-foreground/[0.06]" fill="currentColor">
          <circle cx={x} cy={372} r="3.5" />
          <line x1={x} y1={375} x2={x} y2={388} stroke="currentColor" strokeWidth="1" />
          <path d={`M${x} 382 Q${x + 6} 378 ${x + 8} 382`} stroke="currentColor" strokeWidth="0.8" fill="none" />
        </g>
      ))}
    </svg>
  </div>
);

export default ProgramsHeroBackground;
