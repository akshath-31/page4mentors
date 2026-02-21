const BlogHeroBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1440 400"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* === BACKGROUND LAYER === */}

      {/* Soft light rays from top center */}
      {[-30, -15, 0, 15, 30].map((offset) => (
        <line
          key={offset}
          x1={720 + offset * 2}
          y1="0"
          x2={720 + offset * 6}
          y2="200"
          stroke="currentColor"
          strokeWidth={1.2 - Math.abs(offset) * 0.02}
          className="text-primary-foreground/[0.03]"
        />
      ))}

      {/* Large clouds */}
      <g className="text-primary-foreground/[0.05]" fill="currentColor">
        <ellipse cx="200" cy="55" rx="100" ry="24" />
        <ellipse cx="250" cy="46" rx="65" ry="19" />
        <ellipse cx="165" cy="50" rx="55" ry="16" />
      </g>
      <g className="text-primary-foreground/[0.04]" fill="currentColor">
        <ellipse cx="1200" cy="48" rx="90" ry="22" />
        <ellipse cx="1245" cy="40" rx="58" ry="17" />
        <ellipse cx="1160" cy="44" rx="45" ry="14" />
      </g>
      <g className="text-primary-foreground/[0.03]" fill="currentColor">
        <ellipse cx="700" cy="38" rx="65" ry="15" />
        <ellipse cx="730" cy="32" rx="40" ry="12" />
      </g>

      {/* Distant hills */}
      <path
        d="M0 300 Q180 250 360 280 Q540 310 720 270 Q900 240 1080 275 Q1260 310 1440 280 L1440 400 L0 400Z"
        fill="currentColor"
        className="text-primary-foreground/[0.04]"
      />

      {/* === MIDGROUND LAYER === */}

      {/* Mid hills */}
      <path
        d="M0 335 Q200 295 400 320 Q600 345 800 305 Q1000 270 1200 310 Q1350 340 1440 325 L1440 400 L0 400Z"
        fill="currentColor"
        className="text-primary-foreground/[0.06]"
      />

      {/* Stars — representing ideas, scattered */}
      <g className="text-primary-foreground/[0.06]" fill="currentColor">
        <path d="M1100 90 L1104 100 L1115 100 L1106 108 L1110 118 L1100 112 L1090 118 L1094 108 L1085 100 L1096 100Z" />
      </g>
      <g className="text-primary-foreground/[0.05]" fill="currentColor">
        <path d="M1180 65 L1183 73 L1192 73 L1185 78 L1188 86 L1180 81 L1172 86 L1175 78 L1168 73 L1177 73Z" />
      </g>
      <g className="text-primary-foreground/[0.04]" fill="currentColor">
        <path d="M380 80 L383 87 L390 87 L385 91 L387 98 L380 94 L373 98 L375 91 L370 87 L377 87Z" />
      </g>
      <g className="text-primary-foreground/[0.04]" fill="currentColor">
        <path d="M550 60 L552 66 L558 66 L554 69 L555 75 L550 72 L545 75 L546 69 L542 66 L548 66Z" />
      </g>

      {/* === FOREGROUND ELEMENTS === */}

      {/* Foreground hill */}
      <path
        d="M0 365 Q250 340 500 360 Q700 380 900 355 Q1100 335 1300 362 Q1400 375 1440 368 L1440 400 L0 400Z"
        fill="currentColor"
        className="text-primary-foreground/[0.08]"
      />

      {/* Left side — person journaling (seated, detailed) */}
      <g className="text-primary-foreground/[0.10]" fill="currentColor">
        {/* Head */}
        <circle cx="140" cy="248" r="16" />
        {/* Body, slightly leaning forward */}
        <path d="M124 264 Q132 290 140 300 Q148 290 156 264 Q148 272 140 273 Q132 272 124 264Z" />
        {/* Legs */}
        <ellipse cx="140" cy="310" rx="22" ry="7" />
        {/* Arm holding pen */}
        <path d="M156 278 Q170 282 178 290" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Pen */}
        <line x1="178" y1="290" x2="182" y2="305" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* Notebook in lap — detailed */}
      <g className="text-primary-foreground/[0.08]" fill="currentColor">
        <rect x="155" y="290" width="30" height="22" rx="2.5" />
        <line x1="160" y1="297" x2="180" y2="297" stroke="currentColor" strokeWidth="1" className="text-primary-foreground/[0.04]" />
        <line x1="160" y1="302" x2="178" y2="302" stroke="currentColor" strokeWidth="1" className="text-primary-foreground/[0.04]" />
        <line x1="160" y1="307" x2="175" y2="307" stroke="currentColor" strokeWidth="1" className="text-primary-foreground/[0.04]" />
      </g>

      {/* Thought bubbles rising from person */}
      <circle cx="120" cy="230" r="5" fill="currentColor" className="text-primary-foreground/[0.06]" />
      <circle cx="108" cy="212" r="8" fill="currentColor" className="text-primary-foreground/[0.06]" />
      <circle cx="92" cy="188" r="12" fill="currentColor" className="text-primary-foreground/[0.05]" />

      {/* Idea cloud — above thought bubbles */}
      <g className="text-primary-foreground/[0.05]" fill="currentColor">
        <ellipse cx="75" cy="160" rx="40" ry="22" />
        <ellipse cx="95" cy="152" rx="30" ry="17" />
        <ellipse cx="55" cy="156" rx="25" ry="14" />
        {/* Lightbulb inside the cloud */}
        <path d="M72 152 Q66 142 72 132 Q78 128 84 132 Q90 142 84 152 Q78 155 72 152Z" className="text-primary-foreground/[0.03]" />
      </g>

      {/* Right side — large notebook / journal */}
      <g className="text-primary-foreground/[0.09]" fill="currentColor">
        <rect x="1290" y="235" width="65" height="85" rx="5" />
        {/* Spine */}
        <line x1="1300" y1="235" x2="1300" y2="320" stroke="currentColor" strokeWidth="2" className="text-primary-foreground/[0.05]" />
        {/* Lines */}
        <line x1="1310" y1="255" x2="1345" y2="255" stroke="currentColor" strokeWidth="1.2" className="text-primary-foreground/[0.04]" />
        <line x1="1310" y1="267" x2="1343" y2="267" stroke="currentColor" strokeWidth="1.2" className="text-primary-foreground/[0.04]" />
        <line x1="1310" y1="279" x2="1340" y2="279" stroke="currentColor" strokeWidth="1.2" className="text-primary-foreground/[0.04]" />
        <line x1="1310" y1="291" x2="1338" y2="291" stroke="currentColor" strokeWidth="1.2" className="text-primary-foreground/[0.04]" />
        <line x1="1310" y1="303" x2="1335" y2="303" stroke="currentColor" strokeWidth="1" className="text-primary-foreground/[0.03]" />
      </g>

      {/* Pen next to notebook */}
      <g className="text-primary-foreground/[0.08]" fill="currentColor">
        <line x1="1370" y1="230" x2="1378" y2="325" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        {/* Pen tip */}
        <path d="M1378 325 L1380 335 L1376 335Z" />
      </g>

      {/* Stack of books — right side bottom */}
      <g className="text-primary-foreground/[0.07]" fill="currentColor">
        <rect x="1380" y="340" width="40" height="10" rx="2" />
        <rect x="1375" y="350" width="45" height="10" rx="2" className="text-primary-foreground/[0.06]" />
        <rect x="1378" y="360" width="42" height="10" rx="2" className="text-primary-foreground/[0.05]" />
      </g>

      {/* Left side — stack of books */}
      <g className="text-primary-foreground/[0.07]" fill="currentColor">
        <rect x="40" y="330" width="35" height="10" rx="2" />
        <rect x="35" y="340" width="42" height="10" rx="2" className="text-primary-foreground/[0.06]" />
        <rect x="38" y="350" width="38" height="10" rx="2" className="text-primary-foreground/[0.05]" />
      </g>

      {/* Coffee cup — near the person */}
      <g className="text-primary-foreground/[0.07]" fill="currentColor">
        <rect x="195" y="300" width="14" height="12" rx="2" />
        <path d="M209 303 Q216 306 209 310" stroke="currentColor" strokeWidth="1.2" fill="none" />
        {/* Steam */}
        <path d="M199 296 Q201 290 203 296" stroke="currentColor" strokeWidth="0.8" fill="none" className="text-primary-foreground/[0.04]" />
        <path d="M205 294 Q207 288 209 294" stroke="currentColor" strokeWidth="0.8" fill="none" className="text-primary-foreground/[0.04]" />
      </g>

      {/* Floating leaves */}
      <path d="M50 130 Q65 105 80 130 Q65 118 50 130Z" fill="currentColor" className="text-primary-foreground/[0.05]" />
      <path d="M1400 120 Q1415 98 1430 120 Q1415 108 1400 120Z" fill="currentColor" className="text-primary-foreground/[0.05]" />
      <path d="M1380 155 Q1390 140 1400 155 Q1390 146 1380 155Z" fill="currentColor" className="text-primary-foreground/[0.04]" />
      <path d="M60 160 Q68 148 76 160 Q68 153 60 160Z" fill="currentColor" className="text-primary-foreground/[0.04]" />

      {/* Birds */}
      <path d="M400 90 Q406 82 412 90" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-primary-foreground/[0.05]" strokeLinecap="round" />
      <path d="M418 86 Q423 80 428 86" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary-foreground/[0.04]" strokeLinecap="round" />
      <path d="M1000 72 Q1006 64 1012 72" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-primary-foreground/[0.05]" strokeLinecap="round" />

      {/* Flowers */}
      {[220, 500, 780, 1050, 1260].map((x) => (
        <g key={x} className="text-primary-foreground/[0.06]" fill="currentColor">
          <circle cx={x} cy={372} r="3" />
          <line x1={x} y1={375} x2={x} y2={387} stroke="currentColor" strokeWidth="1" />
        </g>
      ))}
    </svg>
  </div>
);

export default BlogHeroBackground;
