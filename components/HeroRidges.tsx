const layers = [
  { d: "M0 300 L0 210 L70 150 L120 190 L190 110 L250 180 L330 120 L410 190 L500 140 L580 200 L660 130 L740 190 L820 120 L900 180 L980 140 L1060 200 L1140 150 L1200 190 L1200 300Z", fill: "#2A7D78", cls: "ridge-1" },
  { d: "M0 300 L0 240 L90 190 L160 230 L260 160 L340 230 L440 175 L520 235 L620 170 L720 235 L820 180 L920 240 L1020 185 L1110 235 L1200 200 L1200 300Z", fill: "#16605C", cls: "ridge-2" },
  { d: "M0 300 L0 265 L110 225 L200 262 L310 218 L420 266 L540 228 L650 268 L770 224 L880 266 L990 230 L1100 268 L1200 240 L1200 300Z", fill: "#0E4745", cls: "ridge-3" },
  { d: "M0 300 L0 285 L140 262 L260 288 L400 258 L560 290 L720 262 L880 292 L1040 266 L1200 290 L1200 300Z", fill: "#F5F9F8", cls: "ridge-4" },
];

export function HeroRidges() {
  return (
    <svg
      viewBox="0 0 1200 300"
      preserveAspectRatio="none"
      className="absolute inset-x-0 bottom-0 h-[46%] min-h-[220px] w-full"
      aria-hidden="true"
      focusable="false"
    >
      {layers.map((l) => (
        <path key={l.cls} d={l.d} fill={l.fill} className={`ridge ${l.cls}`} />
      ))}
    </svg>
  );
}
