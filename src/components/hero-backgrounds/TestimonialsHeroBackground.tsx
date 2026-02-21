const TestimonialsHeroBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1440 400"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* === BACKGROUND LAYER === */}

      {/* Soft concentric ripples — center bottom */}
      {[180, 140, 100, 60].map((r, i) => (
        <ellipse
          key={r}
          cx="720"
          cy="420"
          rx={r * 2}
          ry={r}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.2 - i * 0.2}
          className={`text-primary-foreground/[0.0${3 + i}]`}
        />
      ))}

      {/* Clouds */}
      <g className="text-primary-foreground/[0.05]" fill="currentColor">
        <ellipse cx="250" cy="50" rx="95" ry="22" />
        <ellipse cx="290" cy="42" rx="60" ry="17" />
        <ellipse cx="210" cy="46" rx="50" ry="15" />
      </g>
      <g className="text-primary-foreground/[0.04]" fill="currentColor">
        <ellipse cx="1150" cy="45" rx="85" ry="20" />
        <ellipse cx="1190" cy="38" rx="55" ry="16" />
        <ellipse cx="1110" cy="42" rx="42" ry="14" />
      </g>

      {/* Distant hills */}
      <path
        d="M0 310 Q200 260 400 290 Q600 320 800 280 Q1000 250 1200 290 Q1350 320 1440 300 L1440 400 L0 400Z"
        fill="currentColor"
        className="text-primary-foreground/[0.04]"
      />

      {/* === MIDGROUND LAYER === */}

      {/* Mid hills */}
      <path
        d="M0 340 Q180 300 360 325 Q540 350 720 315 Q900 280 1080 315 Q1260 350 1440 330 L1440 400 L0 400Z"
        fill="currentColor"
        className="text-primary-foreground/[0.06]"
      />

      {/* Speech bubble — large, top left */}
      <g className="text-primary-foreground/[0.07]" fill="currentColor">
        <rect x="50" y="70" width="110" height="65" rx="20" />
        <path d="M95 135 L85 158 L110 135Z" />
        {/* Heart inside */}
        <path d="M90 92 Q90 86 96 86 Q102 86 102 92 Q102 86 108 86 Q114 86 114 92 Q114 100 102 108 Q90 100 90 92Z" className="text-primary-foreground/[0.04]" />
        {/* Lines */}
        <line x1="72" y1="112" x2="138" y2="112" stroke="currentColor" strokeWidth="1.5" className="text-primary-foreground/[0.03]" />
        <line x1="72" y1="122" x2="125" y2="122" stroke="currentColor" strokeWidth="1.5" className="text-primary-foreground/[0.03]" />
      </g>

      {/* Speech bubble — large, top right */}
      <g className="text-primary-foreground/[0.07]" fill="currentColor">
        <rect x="1270" y="60" width="120" height="70" rx="22" />
        <path d="M1345 130 L1355 155 L1330 130Z" />
        {/* Star inside */}
        <path d="M1330 85 L1333 93 L1342 93 L1335 99 L1338 107 L1330 102 L1322 107 L1325 99 L1318 93 L1327 93Z" className="text-primary-foreground/[0.04]" />
        <line x1="1290" y1="112" x2="1370" y2="112" stroke="currentColor" strokeWidth="1.5" className="text-primary-foreground/[0.03]" />
        <line x1="1290" y1="122" x2="1355" y2="122" stroke="currentColor" strokeWidth="1.5" className="text-primary-foreground/[0.03]" />
      </g>

      {/* Speech bubble — mid left, smaller */}
      <g className="text-primary-foreground/[0.06]" fill="currentColor">
        <rect x="100" y="200" width="75" height="42" rx="14" />
        <path d="M130 242 L124 258 L145 242Z" />
        {/* Leaf inside */}
        <path d="M128 215 Q135 205 142 215 Q135 210 128 215Z" className="text-primary-foreground/[0.03]" />
      </g>

      {/* Speech bubble — mid right, smaller */}
      <g className="text-primary-foreground/[0.06]" fill="currentColor">
        <rect x="1260" y="190" width="80" height="45" rx="15" />
        <path d="M1295 235 L1300 252 L1280 235Z" />
        {/* Heart inside */}
        <path d="M1290 206 Q1290 201 1295 201 Q1300 201 1300 206 Q1300 201 1305 201 Q1310 201 1310 206 Q1310 212 1300 218 Q1290 212 1290 206Z"
          className="text-primary-foreground/[0.03]" />
      </g>

      {/* Floating speech bubbles — scattered small ones */}
      <g className="text-primary-foreground/[0.05]" fill="currentColor">
        <rect x="350" y="120" width="45" height="26" rx="10" />
        <path d="M365 146 L362 155 L375 146Z" />
      </g>
      <g className="text-primary-foreground/[0.04]" fill="currentColor">
        <rect x="1050" y="110" width="50" height="28" rx="11" />
        <path d="M1070 138 L1068 148 L1082 138Z" />
      </g>

      {/* === FOREGROUND LAYER === */}

      {/* Foreground hills */}
      <path
        d="M0 365 Q200 340 400 358 Q600 375 800 355 Q1000 335 1200 360 Q1350 380 1440 365 L1440 400 L0 400Z"
        fill="currentColor"
        className="text-primary-foreground/[0.08]"
      />

      {/* Person group — left side, 3 people in conversation circle */}
      {/* Person 1 */}
      <g className="text-primary-foreground/[0.10]" fill="currentColor">
        <circle cx="130" cy="280" r="14" />
        <path d="M116 294 Q123 312 130 318 Q137 312 144 294 Q137 300 130 301 Q123 300 116 294Z" />
        <ellipse cx="130" cy="326" rx="18" ry="6" />
      </g>
      {/* Person 2 */}
      <g className="text-primary-foreground/[0.09]" fill="currentColor">
        <circle cx="185" cy="275" r="13" />
        <path d="M172 288 Q179 304 185 310 Q191 304 198 288 Q192 292 185 293 Q179 292 172 288Z" />
        <ellipse cx="185" cy="318" rx="17" ry="6" />
      </g>
      {/* Person 3 */}
      <g className="text-primary-foreground/[0.08]" fill="currentColor">
        <circle cx="155" cy="290" r="11" />
        <path d="M144 301 Q150 314 155 318 Q160 314 166 301 Q161 304 155 305 Q150 304 144 301Z" />
        <ellipse cx="155" cy="325" rx="15" ry="5" />
      </g>

      {/* Person group — right side, 2 people talking */}
      <g className="text-primary-foreground/[0.10]" fill="currentColor">
        <circle cx="1310" cy="270" r="15" />
        <path d="M1295 285 Q1303 305 1310 312 Q1317 305 1325 285 Q1318 290 1310 291 Q1303 290 1295 285Z" />
        <ellipse cx="1310" cy="320" rx="19" ry="6" />
      </g>
      <g className="text-primary-foreground/[0.09]" fill="currentColor">
        <circle cx="1365" cy="278" r="13" />
        <path d="M1352 291 Q1359 308 1365 313 Q1371 308 1378 291 Q1372 295 1365 296 Q1359 295 1352 291Z" />
        <ellipse cx="1365" cy="321" rx="17" ry="6" />
      </g>

      {/* Hearts floating */}
      <path d="M300 280 Q300 272 306 272 Q312 272 312 280 Q312 272 318 272 Q324 272 324 280 Q324 290 312 300 Q300 290 300 280Z"
        fill="currentColor" className="text-primary-foreground/[0.06]" />
      <path d="M1130 265 Q1130 258 1135 258 Q1140 258 1140 265 Q1140 258 1145 258 Q1150 258 1150 265 Q1150 273 1140 280 Q1130 273 1130 265Z"
        fill="currentColor" className="text-primary-foreground/[0.05]" />
      <path d="M430 330 Q430 325 433 325 Q436 325 436 330 Q436 325 439 325 Q442 325 442 330 Q442 335 436 340 Q430 335 430 330Z"
        fill="currentColor" className="text-primary-foreground/[0.05]" />
      <path d="M1080 340 Q1080 336 1082 336 Q1084 336 1084 340 Q1084 336 1086 336 Q1088 336 1088 340 Q1088 344 1084 348 Q1080 344 1080 340Z"
        fill="currentColor" className="text-primary-foreground/[0.04]" />

      {/* Echo / ripple shapes — center */}
      <path d="M680 350 Q700 330 720 350" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-primary-foreground/[0.06]" strokeLinecap="round" />
      <path d="M665 360 Q700 332 735 360" fill="none" stroke="currentColor" strokeWidth="1.3" className="text-primary-foreground/[0.05]" strokeLinecap="round" />
      <path d="M650 368 Q700 335 750 368" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary-foreground/[0.04]" strokeLinecap="round" />
      <path d="M635 375 Q700 340 765 375" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-primary-foreground/[0.03]" strokeLinecap="round" />

      {/* Stars */}
      <g className="text-primary-foreground/[0.05]" fill="currentColor">
        <path d="M500 80 L503 88 L512 88 L505 94 L508 102 L500 97 L492 102 L495 94 L488 88 L497 88Z" />
      </g>
      <g className="text-primary-foreground/[0.04]" fill="currentColor">
        <path d="M900 70 L902 76 L909 76 L904 80 L906 86 L900 82 L894 86 L896 80 L891 76 L898 76Z" />
      </g>

      {/* Birds */}
      <path d="M450 60 Q456 52 462 60" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-primary-foreground/[0.05]" strokeLinecap="round" />
      <path d="M468 56 Q473 50 478 56" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary-foreground/[0.04]" strokeLinecap="round" />

      {/* Flowers on foreground */}
      {[200, 480, 760, 1000, 1240].map((x) => (
        <g key={x} className="text-primary-foreground/[0.06]" fill="currentColor">
          <circle cx={x} cy={370} r="3" />
          <line x1={x} y1={373} x2={x} y2={385} stroke="currentColor" strokeWidth="1" />
        </g>
      ))}
    </svg>
  </div>
);

export default TestimonialsHeroBackground;
