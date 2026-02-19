const AboutHeroBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1440 400"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Ground / gentle hills */}
      <path
        d="M0 340 Q200 290 400 320 T800 300 T1200 330 T1440 310 L1440 400 L0 400Z"
        fill="currentColor"
        className="text-primary-foreground/[0.07]"
      />
      <path
        d="M0 360 Q350 320 700 350 T1440 340 L1440 400 L0 400Z"
        fill="currentColor"
        className="text-primary-foreground/[0.05]"
      />

      {/* Left side — mentor figure sitting (simplified) */}
      <g className="text-primary-foreground/[0.08]" fill="currentColor">
        {/* Head */}
        <circle cx="120" cy="240" r="16" />
        {/* Body */}
        <path d="M104 256 Q112 280 120 290 Q128 280 136 256 Q128 262 120 264 Q112 262 104 256Z" />
        {/* Crossed legs */}
        <ellipse cx="120" cy="300" rx="24" ry="8" />
      </g>

      {/* Left side — second figure */}
      <g className="text-primary-foreground/[0.06]" fill="currentColor">
        <circle cx="200" cy="250" r="14" />
        <path d="M186 264 Q193 284 200 292 Q207 284 214 264 Q207 270 200 271 Q193 270 186 264Z" />
        <ellipse cx="200" cy="304" rx="20" ry="7" />
      </g>

      {/* Right side — guiding figure (standing, taller) */}
      <g className="text-primary-foreground/[0.08]" fill="currentColor">
        <circle cx="1320" cy="210" r="18" />
        <path d="M1302 228 Q1311 270 1320 290 Q1329 270 1338 228 Q1329 236 1320 238 Q1311 236 1302 228Z" />
        {/* Outstretched hand */}
        <path d="M1302 245 Q1285 240 1278 235" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <ellipse cx="1320" cy="298" rx="16" ry="6" />
      </g>

      {/* Right side — smaller figure being guided */}
      <g className="text-primary-foreground/[0.06]" fill="currentColor">
        <circle cx="1280" cy="250" r="12" />
        <path d="M1268 262 Q1274 278 1280 286 Q1286 278 1292 262 Q1286 266 1280 267 Q1274 266 1268 262Z" />
        <ellipse cx="1280" cy="296" rx="16" ry="6" />
      </g>

      {/* Open hands symbol — center-left */}
      <g className="text-primary-foreground/[0.05]" fill="currentColor">
        <path d="M340 310 Q350 280 360 290 Q365 295 360 310 Q355 320 340 310Z" />
        <path d="M380 310 Q370 280 360 290 Q355 295 360 310 Q365 320 380 310Z" />
      </g>

      {/* Path / walkway (gentle curved line) */}
      <path
        d="M250 340 Q400 310 600 330 Q800 350 1000 320 Q1200 300 1300 310"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-primary-foreground/[0.06]"
        strokeLinecap="round"
      />

      {/* Soft clouds */}
      <ellipse cx="300" cy="80" rx="90" ry="22" className="text-primary-foreground/[0.04]" fill="currentColor" />
      <ellipse cx="340" cy="72" rx="60" ry="18" className="text-primary-foreground/[0.03]" fill="currentColor" />
      <ellipse cx="1100" cy="90" rx="80" ry="20" className="text-primary-foreground/[0.04]" fill="currentColor" />
      <ellipse cx="1140" cy="82" rx="55" ry="16" className="text-primary-foreground/[0.03]" fill="currentColor" />

      {/* Small heart (togetherness) */}
      <path
        d="M710 320 Q710 312 716 312 Q722 312 722 320 Q722 312 728 312 Q734 312 734 320 Q734 330 722 340 Q710 330 710 320Z"
        fill="currentColor"
        className="text-primary-foreground/[0.06]"
      />

      {/* Gentle leaf — left */}
      <path
        d="M60 180 Q80 150 100 180 Q80 165 60 180Z"
        fill="currentColor"
        className="text-primary-foreground/[0.05]"
      />
      {/* Gentle leaf — right */}
      <path
        d="M1380 160 Q1400 130 1420 160 Q1400 145 1380 160Z"
        fill="currentColor"
        className="text-primary-foreground/[0.05]"
      />
    </svg>
  </div>
);

export default AboutHeroBackground;
