const TestimonialsHeroBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1440 400"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Soft hills */}
      <path
        d="M0 350 Q250 310 500 340 T1000 320 T1440 350 L1440 400 L0 400Z"
        fill="currentColor"
        className="text-primary-foreground/[0.05]"
      />

      {/* Speech bubble — top left */}
      <g className="text-primary-foreground/[0.06]" fill="currentColor">
        <rect x="60" y="80" width="80" height="45" rx="16" />
        <path d="M90 125 L85 140 L100 125Z" />
        {/* Lines inside */}
        <line x1="76" y1="96" x2="124" y2="96" stroke="currentColor" strokeWidth="1.5" className="text-primary-foreground/[0.03]" />
        <line x1="76" y1="106" x2="114" y2="106" stroke="currentColor" strokeWidth="1.5" className="text-primary-foreground/[0.03]" />
      </g>

      {/* Speech bubble — top right */}
      <g className="text-primary-foreground/[0.06]" fill="currentColor">
        <rect x="1280" y="70" width="90" height="50" rx="18" />
        <path d="M1340 120 L1345 138 L1328 120Z" />
        <line x1="1296" y1="88" x2="1354" y2="88" stroke="currentColor" strokeWidth="1.5" className="text-primary-foreground/[0.03]" />
        <line x1="1296" y1="100" x2="1340" y2="100" stroke="currentColor" strokeWidth="1.5" className="text-primary-foreground/[0.03]" />
      </g>

      {/* Small speech bubble — mid left */}
      <g className="text-primary-foreground/[0.05]" fill="currentColor">
        <rect x="140" y="200" width="55" height="32" rx="12" />
        <path d="M160 232 L156 244 L170 232Z" />
      </g>

      {/* Small speech bubble — mid right */}
      <g className="text-primary-foreground/[0.05]" fill="currentColor">
        <rect x="1240" y="210" width="60" height="35" rx="13" />
        <path d="M1270 245 L1275 258 L1260 245Z" />
      </g>

      {/* Person sitting — left */}
      <g className="text-primary-foreground/[0.07]" fill="currentColor">
        <circle cx="100" cy="280" r="13" />
        <path d="M87 293 Q93 312 100 318 Q107 312 113 293 Q107 298 100 299 Q93 298 87 293Z" />
        <ellipse cx="100" cy="326" rx="18" ry="6" />
      </g>

      {/* Person sitting — right, in conversation */}
      <g className="text-primary-foreground/[0.07]" fill="currentColor">
        <circle cx="1350" cy="275" r="14" />
        <path d="M1336 289 Q1343 310 1350 316 Q1357 310 1364 289 Q1357 294 1350 295 Q1343 294 1336 289Z" />
        <ellipse cx="1350" cy="324" rx="18" ry="6" />
      </g>

      {/* Hearts — floating gently */}
      <path
        d="M300 290 Q300 282 306 282 Q312 282 312 290 Q312 282 318 282 Q324 282 324 290 Q324 300 312 310 Q300 300 300 290Z"
        fill="currentColor"
        className="text-primary-foreground/[0.05]"
      />
      <path
        d="M1130 280 Q1130 274 1134 274 Q1138 274 1138 280 Q1138 274 1142 274 Q1146 274 1146 280 Q1146 287 1138 294 Q1130 287 1130 280Z"
        fill="currentColor"
        className="text-primary-foreground/[0.04]"
      />

      {/* Echo / wave shapes */}
      <path
        d="M680 340 Q700 320 720 340"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-primary-foreground/[0.05]"
        strokeLinecap="round"
      />
      <path
        d="M670 350 Q700 325 730 350"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-primary-foreground/[0.04]"
        strokeLinecap="round"
      />
      <path
        d="M660 358 Q700 330 740 358"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        className="text-primary-foreground/[0.03]"
        strokeLinecap="round"
      />

      {/* Clouds */}
      <ellipse cx="500" cy="60" rx="70" ry="18" className="text-primary-foreground/[0.04]" fill="currentColor" />
      <ellipse cx="900" cy="50" rx="60" ry="16" className="text-primary-foreground/[0.03]" fill="currentColor" />
    </svg>
  </div>
);

export default TestimonialsHeroBackground;
