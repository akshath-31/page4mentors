const AboutHeroBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1440 400"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* === BACKGROUND LAYER === */}

      {/* Rising sun / warm glow */}
      <circle cx="720" cy="400" r="220" fill="currentColor" className="text-primary-foreground/[0.04]" />
      <circle cx="720" cy="400" r="160" fill="currentColor" className="text-primary-foreground/[0.03]" />
      <circle cx="720" cy="400" r="100" fill="currentColor" className="text-primary-foreground/[0.02]" />

      {/* Sun rays */}
      {[0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180].map((angle) => (
        <line
          key={angle}
          x1="720"
          y1="400"
          x2={720 + Math.cos((angle * Math.PI) / 180) * 300}
          y2={400 - Math.sin((angle * Math.PI) / 180) * 300}
          stroke="currentColor"
          strokeWidth="0.8"
          className="text-primary-foreground/[0.03]"
        />
      ))}

      {/* Distant hills — background */}
      <path
        d="M0 300 Q120 240 240 270 Q360 300 480 260 Q600 220 720 250 Q840 280 960 240 Q1080 200 1200 240 Q1320 280 1440 250 L1440 400 L0 400Z"
        fill="currentColor"
        className="text-primary-foreground/[0.04]"
      />

      {/* Sky clouds — large and layered */}
      <g className="text-primary-foreground/[0.05]" fill="currentColor">
        <ellipse cx="200" cy="60" rx="100" ry="25" />
        <ellipse cx="240" cy="50" rx="70" ry="20" />
        <ellipse cx="170" cy="55" rx="50" ry="18" />
      </g>
      <g className="text-primary-foreground/[0.04]" fill="currentColor">
        <ellipse cx="1200" cy="50" rx="90" ry="22" />
        <ellipse cx="1240" cy="42" rx="60" ry="18" />
        <ellipse cx="1170" cy="48" rx="45" ry="15" />
      </g>
      <g className="text-primary-foreground/[0.03]" fill="currentColor">
        <ellipse cx="700" cy="40" rx="70" ry="16" />
        <ellipse cx="730" cy="35" rx="45" ry="13" />
      </g>

      {/* === MIDGROUND LAYER === */}

      {/* Rolling hills — midground */}
      <path
        d="M0 330 Q180 280 360 310 Q540 340 720 300 Q900 260 1080 300 Q1260 340 1440 310 L1440 400 L0 400Z"
        fill="currentColor"
        className="text-primary-foreground/[0.06]"
      />

      {/* Trees — left cluster */}
      <g className="text-primary-foreground/[0.07]" fill="currentColor">
        {/* Tree 1 */}
        <rect x="55" y="250" width="6" height="40" rx="3" />
        <ellipse cx="58" cy="240" rx="22" ry="28" />
        {/* Tree 2 */}
        <rect x="90" y="240" width="5" height="45" rx="2" />
        <ellipse cx="92" cy="228" rx="18" ry="24" />
        {/* Tree 3 — smaller */}
        <rect x="125" y="260" width="4" height="30" rx="2" />
        <ellipse cx="127" cy="252" rx="14" ry="18" />
      </g>

      {/* Trees — right cluster */}
      <g className="text-primary-foreground/[0.07]" fill="currentColor">
        <rect x="1340" y="235" width="6" height="45" rx="3" />
        <ellipse cx="1343" cy="222" rx="22" ry="28" />
        <rect x="1375" y="245" width="5" height="38" rx="2" />
        <ellipse cx="1377" cy="234" rx="18" ry="22" />
        <rect x="1405" y="255" width="4" height="30" rx="2" />
        <ellipse cx="1407" cy="248" rx="14" ry="17" />
      </g>

      {/* Shared path / walkway — winding across */}
      <path
        d="M80 360 Q200 340 320 350 Q440 360 560 340 Q680 320 800 335 Q920 350 1040 330 Q1160 310 1280 325 Q1360 335 1420 340"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        className="text-primary-foreground/[0.08]"
        strokeLinecap="round"
        strokeDasharray="8 6"
      />

      {/* === FOREGROUND LAYER === */}

      {/* Foreground hills */}
      <path
        d="M0 360 Q150 330 300 350 Q500 370 700 355 Q900 340 1100 360 Q1300 380 1440 360 L1440 400 L0 400Z"
        fill="currentColor"
        className="text-primary-foreground/[0.08]"
      />

      {/* Mentor circle — left side: 3 figures sitting together */}
      {/* Figure 1 — larger mentor */}
      <g className="text-primary-foreground/[0.10]" fill="currentColor">
        <circle cx="160" cy="270" r="16" />
        <path d="M144 286 Q152 310 160 318 Q168 310 176 286 Q168 292 160 293 Q152 292 144 286Z" />
        <ellipse cx="160" cy="326" rx="22" ry="7" />
        {/* Extended arm toward next figure */}
        <path d="M176 296 Q195 290 210 288" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      {/* Figure 2 */}
      <g className="text-primary-foreground/[0.09]" fill="currentColor">
        <circle cx="230" cy="278" r="13" />
        <path d="M217 291 Q224 308 230 314 Q236 308 243 291 Q237 296 230 297 Q224 296 217 291Z" />
        <ellipse cx="230" cy="322" rx="18" ry="6" />
      </g>
      {/* Figure 3 — small/child */}
      <g className="text-primary-foreground/[0.08]" fill="currentColor">
        <circle cx="280" cy="286" r="10" />
        <path d="M270 296 Q275 308 280 312 Q285 308 290 296 Q285 300 280 300 Q275 300 270 296Z" />
        <ellipse cx="280" cy="318" rx="14" ry="5" />
      </g>

      {/* Right side — guiding scene */}
      {/* Tall mentor figure */}
      <g className="text-primary-foreground/[0.10]" fill="currentColor">
        <circle cx="1280" cy="240" r="17" />
        <path d="M1263 257 Q1272 290 1280 305 Q1288 290 1297 257 Q1289 265 1280 267 Q1272 265 1263 257Z" />
        <ellipse cx="1280" cy="314" rx="18" ry="6" />
        {/* Guiding arm */}
        <path d="M1263 270 Q1245 265 1235 258" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </g>
      {/* Teen being guided */}
      <g className="text-primary-foreground/[0.09]" fill="currentColor">
        <circle cx="1230" cy="268" r="12" />
        <path d="M1218 280 Q1224 296 1230 302 Q1236 296 1242 280 Q1236 284 1230 285 Q1224 284 1218 280Z" />
        <ellipse cx="1230" cy="310" rx="16" ry="5" />
      </g>
      {/* Another teen walking */}
      <g className="text-primary-foreground/[0.07]" fill="currentColor">
        <circle cx="1180" cy="278" r="11" />
        <path d="M1169 289 Q1175 304 1180 309 Q1185 304 1191 289 Q1186 293 1180 293 Q1175 293 1169 289Z" />
        <ellipse cx="1180" cy="316" rx="14" ry="5" />
      </g>

      {/* Open hands symbol — center bottom */}
      <g className="text-primary-foreground/[0.06]" fill="currentColor">
        <path d="M690 350 Q705 320 720 335 Q728 340 720 355 Q712 365 690 350Z" />
        <path d="M750 350 Q735 320 720 335 Q712 340 720 355 Q728 365 750 350Z" />
      </g>

      {/* Books scattered on the path */}
      <g className="text-primary-foreground/[0.07]" fill="currentColor">
        <rect x="380" y="348" width="24" height="16" rx="2" transform="rotate(-8 392 356)" />
        <line x1="392" y1="350" x2="392" y2="362" stroke="currentColor" strokeWidth="1" className="text-primary-foreground/[0.04]" />
      </g>
      <g className="text-primary-foreground/[0.06]" fill="currentColor">
        <rect x="1050" y="340" width="20" height="14" rx="2" transform="rotate(5 1060 347)" />
        <line x1="1060" y1="342" x2="1060" y2="352" stroke="currentColor" strokeWidth="1" className="text-primary-foreground/[0.03]" />
      </g>

      {/* Leaves floating */}
      <path d="M50 160 Q70 130 90 160 Q70 145 50 160Z" fill="currentColor" className="text-primary-foreground/[0.06]" />
      <path d="M40 175 Q55 155 65 175 Q52 163 40 175Z" fill="currentColor" className="text-primary-foreground/[0.04]" />
      <path d="M1390 140 Q1410 110 1430 140 Q1410 125 1390 140Z" fill="currentColor" className="text-primary-foreground/[0.06]" />
      <path d="M1360 170 Q1375 148 1385 170 Q1372 158 1360 170Z" fill="currentColor" className="text-primary-foreground/[0.04]" />

      {/* Small hearts */}
      <path d="M330 300 Q330 292 336 292 Q342 292 342 300 Q342 292 348 292 Q354 292 354 300 Q354 310 342 320 Q330 310 330 300Z"
        fill="currentColor" className="text-primary-foreground/[0.06]" />
      <path d="M1120 290 Q1120 284 1124 284 Q1128 284 1128 290 Q1128 284 1132 284 Q1136 284 1136 290 Q1136 296 1128 302 Q1120 296 1120 290Z"
        fill="currentColor" className="text-primary-foreground/[0.05]" />

      {/* Birds — distant */}
      <path d="M400 100 Q406 92 412 100" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-primary-foreground/[0.05]" strokeLinecap="round" />
      <path d="M420 95 Q425 88 430 95" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary-foreground/[0.04]" strokeLinecap="round" />
      <path d="M1000 80 Q1006 72 1012 80" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-primary-foreground/[0.05]" strokeLinecap="round" />
      <path d="M1020 76 Q1025 70 1030 76" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary-foreground/[0.04]" strokeLinecap="round" />

      {/* Small flowers on foreground hill */}
      {[100, 350, 580, 870, 1100, 1350].map((x) => (
        <g key={x} className="text-primary-foreground/[0.06]" fill="currentColor">
          <circle cx={x} cy={365} r="3" />
          <line x1={x} y1={368} x2={x} y2={380} stroke="currentColor" strokeWidth="1" />
        </g>
      ))}
    </svg>
  </div>
);

export default AboutHeroBackground;
