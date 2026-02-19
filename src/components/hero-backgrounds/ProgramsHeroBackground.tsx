const ProgramsHeroBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1440 400"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Ground path — a journey trail */}
      <path
        d="M-20 370 Q150 340 300 350 Q450 360 550 340 Q700 310 850 330 Q1000 350 1150 320 Q1300 300 1460 320"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        className="text-primary-foreground/[0.07]"
        strokeLinecap="round"
      />
      {/* Path shadow */}
      <path
        d="M-20 375 Q150 345 300 355 Q450 365 550 345 Q700 315 850 335 Q1000 355 1150 325 Q1300 305 1460 325"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-primary-foreground/[0.04]"
        strokeLinecap="round"
      />

      {/* Milestone dots along the path */}
      <circle cx="300" cy="350" r="6" fill="currentColor" className="text-primary-foreground/[0.08]" />
      <circle cx="550" cy="340" r="7" fill="currentColor" className="text-primary-foreground/[0.08]" />
      <circle cx="850" cy="330" r="7" fill="currentColor" className="text-primary-foreground/[0.08]" />
      <circle cx="1150" cy="320" r="6" fill="currentColor" className="text-primary-foreground/[0.08]" />

      {/* Small flag at the end */}
      <g className="text-primary-foreground/[0.07]" fill="currentColor">
        <line x1="1150" y1="320" x2="1150" y2="295" stroke="currentColor" strokeWidth="1.5" />
        <path d="M1150 295 L1168 300 L1150 305Z" />
      </g>

      {/* Left — book (open) */}
      <g className="text-primary-foreground/[0.07]" fill="currentColor">
        <path d="M80 280 L80 310 Q100 305 120 310 L120 280 Q100 275 80 280Z" />
        <path d="M120 280 L120 310 Q140 305 160 310 L160 280 Q140 275 120 280Z" />
        {/* Spine */}
        <line x1="120" y1="278" x2="120" y2="312" stroke="currentColor" strokeWidth="1" />
      </g>

      {/* Left — small leaf growing */}
      <g className="text-primary-foreground/[0.06]" fill="currentColor">
        <line x1="180" y1="340" x2="180" y2="310" stroke="currentColor" strokeWidth="1.5" />
        <path d="M180 310 Q172 298 180 290 Q188 298 180 310Z" />
        <path d="M180 320 Q190 312 196 318" stroke="currentColor" strokeWidth="1" fill="none" />
      </g>

      {/* Right — lightbulb */}
      <g className="text-primary-foreground/[0.07]" fill="currentColor">
        <path d="M1340 260 Q1330 240 1340 220 Q1350 210 1360 220 Q1370 240 1360 260 Q1350 265 1340 260Z" />
        <rect x="1343" y="262" width="14" height="5" rx="2" />
        {/* Rays */}
        <line x1="1350" y1="208" x2="1350" y2="198" stroke="currentColor" strokeWidth="1" className="text-primary-foreground/[0.05]" />
        <line x1="1330" y1="215" x2="1322" y2="208" stroke="currentColor" strokeWidth="1" className="text-primary-foreground/[0.05]" />
        <line x1="1370" y1="215" x2="1378" y2="208" stroke="currentColor" strokeWidth="1" className="text-primary-foreground/[0.05]" />
      </g>

      {/* Seated teen figure — left side */}
      <g className="text-primary-foreground/[0.06]" fill="currentColor">
        <circle cx="260" cy="290" r="10" />
        <path d="M250 300 Q255 316 260 322 Q265 316 270 300 Q265 304 260 305 Q255 304 250 300Z" />
        <ellipse cx="260" cy="330" rx="14" ry="5" />
      </g>

      {/* Another teen — right side, reflecting */}
      <g className="text-primary-foreground/[0.06]" fill="currentColor">
        <circle cx="1240" cy="280" r="11" />
        <path d="M1229 291 Q1234 308 1240 314 Q1246 308 1251 291 Q1246 295 1240 296 Q1234 295 1229 291Z" />
        <ellipse cx="1240" cy="322" rx="15" ry="5" />
      </g>

      {/* Soft clouds */}
      <ellipse cx="400" cy="70" rx="80" ry="20" className="text-primary-foreground/[0.04]" fill="currentColor" />
      <ellipse cx="1050" cy="60" rx="70" ry="18" className="text-primary-foreground/[0.04]" fill="currentColor" />

      {/* Small leaves scattered */}
      <path d="M500 100 Q510 80 520 100 Q510 90 500 100Z" fill="currentColor" className="text-primary-foreground/[0.04]" />
      <path d="M950 110 Q960 90 970 110 Q960 100 950 110Z" fill="currentColor" className="text-primary-foreground/[0.04]" />

      {/* Hills */}
      <path
        d="M0 360 Q200 320 400 350 T800 330 T1200 360 T1440 340 L1440 400 L0 400Z"
        fill="currentColor"
        className="text-primary-foreground/[0.05]"
      />
    </svg>
  </div>
);

export default ProgramsHeroBackground;
