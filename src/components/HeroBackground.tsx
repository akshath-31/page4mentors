const HeroBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1440 400"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Soft rolling hills */}
      <path
        d="M0 320 Q200 260 400 300 T800 270 T1200 310 T1440 280 L1440 400 L0 400Z"
        fill="currentColor"
        className="text-primary-foreground/[0.06]"
      />
      <path
        d="M0 350 Q300 300 600 340 T1100 310 T1440 340 L1440 400 L0 400Z"
        fill="currentColor"
        className="text-primary-foreground/[0.04]"
      />

      {/* Gentle clouds */}
      <ellipse cx="250" cy="80" rx="120" ry="30" className="text-primary-foreground/[0.05]" fill="currentColor" />
      <ellipse cx="300" cy="70" rx="80" ry="25" className="text-primary-foreground/[0.04]" fill="currentColor" />
      <ellipse cx="1100" cy="100" rx="100" ry="28" className="text-primary-foreground/[0.05]" fill="currentColor" />
      <ellipse cx="1150" cy="90" rx="70" ry="22" className="text-primary-foreground/[0.04]" fill="currentColor" />

      {/* Leaf / branch shapes */}
      <path
        d="M80 180 Q100 140 120 180 Q100 160 80 180Z"
        fill="currentColor"
        className="text-primary-foreground/[0.06]"
      />
      <path
        d="M1350 150 Q1370 110 1390 150 Q1370 130 1350 150Z"
        fill="currentColor"
        className="text-primary-foreground/[0.06]"
      />
      <path
        d="M60 200 Q80 160 100 200 Q80 180 60 200Z"
        fill="currentColor"
        className="text-primary-foreground/[0.05]"
      />
      <path
        d="M1330 170 Q1350 130 1370 170 Q1350 150 1330 170Z"
        fill="currentColor"
        className="text-primary-foreground/[0.05]"
      />

      {/* Subtle circles — lotus / zen dots */}
      <circle cx="700" cy="60" r="8" className="text-primary-foreground/[0.04]" fill="currentColor" />
      <circle cx="730" cy="50" r="5" className="text-primary-foreground/[0.03]" fill="currentColor" />
      <circle cx="680" cy="70" r="4" className="text-primary-foreground/[0.03]" fill="currentColor" />

      {/* Gentle wave line */}
      <path
        d="M0 240 Q180 210 360 240 T720 230 T1080 250 T1440 230"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-primary-foreground/[0.06]"
      />
    </svg>
  </div>
);

export default HeroBackground;
