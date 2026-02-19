const BlogHeroBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1440 400"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Soft ground */}
      <path
        d="M0 355 Q300 320 600 345 T1200 330 T1440 350 L1440 400 L0 400Z"
        fill="currentColor"
        className="text-primary-foreground/[0.05]"
      />

      {/* Person journaling — left side */}
      <g className="text-primary-foreground/[0.07]" fill="currentColor">
        {/* Head */}
        <circle cx="130" cy="250" r="14" />
        {/* Body, slightly leaning forward */}
        <path d="M116 264 Q123 286 130 294 Q137 286 144 264 Q137 270 130 271 Q123 270 116 264Z" />
        {/* Legs */}
        <ellipse cx="130" cy="302" rx="18" ry="6" />
        {/* Arm holding pen */}
        <path d="M144 275 Q155 278 160 284" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        {/* Notebook in lap */}
        <rect x="140" y="282" width="22" height="16" rx="2" className="text-primary-foreground/[0.06]" />
        <line x1="144" y1="288" x2="158" y2="288" stroke="currentColor" strokeWidth="0.8" className="text-primary-foreground/[0.03]" />
        <line x1="144" y1="293" x2="155" y2="293" stroke="currentColor" strokeWidth="0.8" className="text-primary-foreground/[0.03]" />
      </g>

      {/* Notebook / journal — right side */}
      <g className="text-primary-foreground/[0.07]" fill="currentColor">
        <rect x="1300" y="260" width="50" height="65" rx="4" />
        {/* Lines */}
        <line x1="1310" y1="278" x2="1340" y2="278" stroke="currentColor" strokeWidth="1" className="text-primary-foreground/[0.03]" />
        <line x1="1310" y1="288" x2="1338" y2="288" stroke="currentColor" strokeWidth="1" className="text-primary-foreground/[0.03]" />
        <line x1="1310" y1="298" x2="1335" y2="298" stroke="currentColor" strokeWidth="1" className="text-primary-foreground/[0.03]" />
        <line x1="1310" y1="308" x2="1330" y2="308" stroke="currentColor" strokeWidth="1" className="text-primary-foreground/[0.03]" />
        {/* Pen next to it */}
        <line x1="1360" y1="255" x2="1365" y2="330" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-primary-foreground/[0.06]" />
      </g>

      {/* Thought bubbles — rising from the journaling person */}
      <circle cx="170" cy="230" r="5" fill="currentColor" className="text-primary-foreground/[0.05]" />
      <circle cx="185" cy="210" r="8" fill="currentColor" className="text-primary-foreground/[0.05]" />
      <circle cx="205" cy="185" r="12" fill="currentColor" className="text-primary-foreground/[0.04]" />

      {/* Cloud / idea cloud */}
      <g className="text-primary-foreground/[0.04]" fill="currentColor">
        <ellipse cx="240" cy="160" rx="35" ry="18" />
        <ellipse cx="260" cy="152" rx="25" ry="14" />
        <ellipse cx="225" cy="155" rx="20" ry="12" />
      </g>

      {/* Stars — representing ideas */}
      <g className="text-primary-foreground/[0.05]" fill="currentColor">
        <path d="M1100 100 L1103 108 L1112 108 L1105 114 L1108 122 L1100 117 L1092 122 L1095 114 L1088 108 L1097 108Z" />
      </g>
      <g className="text-primary-foreground/[0.04]" fill="currentColor">
        <path d="M1180 80 L1182 86 L1189 86 L1184 90 L1186 96 L1180 92 L1174 96 L1176 90 L1171 86 L1178 86Z" />
      </g>
      <g className="text-primary-foreground/[0.03]" fill="currentColor">
        <path d="M400 90 L402 95 L407 95 L403 98 L404 103 L400 100 L396 103 L397 98 L393 95 L398 95Z" />
      </g>

      {/* Soft light rays from top */}
      <line x1="720" y1="0" x2="700" y2="120" stroke="currentColor" strokeWidth="1" className="text-primary-foreground/[0.03]" />
      <line x1="740" y1="0" x2="750" y2="110" stroke="currentColor" strokeWidth="1" className="text-primary-foreground/[0.03]" />
      <line x1="700" y1="0" x2="680" y2="100" stroke="currentColor" strokeWidth="0.8" className="text-primary-foreground/[0.02]" />

      {/* Clouds */}
      <ellipse cx="550" cy="55" rx="75" ry="18" className="text-primary-foreground/[0.04]" fill="currentColor" />
      <ellipse cx="950" cy="70" rx="65" ry="16" className="text-primary-foreground/[0.03]" fill="currentColor" />
    </svg>
  </div>
);

export default BlogHeroBackground;
