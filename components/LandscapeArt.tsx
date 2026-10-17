import { useId } from "react";
import type { ArtKind } from "@/lib/data";

function hash(str: string) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function rng(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const W = 400;
const H = 260;

function jagged(r: () => number, base: number, amp: number) {
  const pts: string[] = [`M0 ${H}`, `L0 ${base}`];
  let x = 0;
  let up = r() > 0.5;
  while (x < W + 30) {
    const y = up ? base - amp * (0.45 + 0.55 * r()) : base - amp * (0.05 + 0.25 * r());
    pts.push(`L${x} ${y.toFixed(1)}`);
    x += 22 + r() * 26;
    up = !up;
  }
  pts.push(`L${W} ${H}`, "Z");
  return pts.join(" ");
}

function rolling(r: () => number, base: number, amp: number) {
  const p1 = r() * Math.PI * 2;
  const p2 = r() * Math.PI * 2;
  const f1 = 0.012 + r() * 0.01;
  const f2 = 0.03 + r() * 0.02;
  const pts: string[] = [`M0 ${H}`];
  for (let x = 0; x <= W; x += 10) {
    const y = base - amp * (0.55 + 0.3 * Math.sin(x * f1 + p1) + 0.15 * Math.sin(x * f2 + p2));
    pts.push(`L${x} ${y.toFixed(1)}`);
  }
  pts.push(`L${W} ${H}`, "Z");
  return pts.join(" ");
}

const palettes = {
  mountain: { sky: ["#BFE3DE", "#FCE6C9"], layers: ["#A6CFC9", "#74B1A9", "#44908A", "#206560", "#0E3B3A"] },
  lake: { sky: ["#C6E6E1", "#FBE0BC"], layers: ["#A6CFC9", "#6FAFA7", "#3C8782", "#18524F"] },
  valley: { sky: ["#D9F0E7", "#F8E9C6"], layers: ["#A5D6BC", "#66BB93", "#2F9A74", "#176E55"] },
  city: { sky: ["#F7D3A8", "#F29A5B"], layers: ["#C98A5C", "#8B5D45", "#0E3B3A"] },
  beach: { sky: ["#FDE7C2", "#F7A66D"], layers: [] as string[] },
  farm: { sky: ["#E4F2E9", "#F8EDC9"], layers: ["#D8DB8E", "#B5CC6C", "#80B65D", "#4A9654"] },
};

export function LandscapeArt({
  seed,
  kind,
  className = "",
}: {
  seed: string;
  kind: ArtKind;
  className?: string;
}) {
  const uid = useId().replace(/:/g, "");
  const r = rng(hash(seed + kind));
  const pal = palettes[kind];
  const sunX = 60 + r() * 280;
  const sunY = 58 + r() * 34;
  const layers: React.ReactNode[] = [];

  if (kind === "mountain" || kind === "lake") {
    const n = pal.layers.length;
    for (let i = 0; i < n; i++) {
      const base = (kind === "lake" ? 128 : 112) + i * (kind === "lake" ? 12 : 26);
      const amp = 78 - i * 10;
      layers.push(<path key={i} d={jagged(r, base, amp)} fill={pal.layers[i]} />);
    }
  } else if (kind === "valley" || kind === "farm") {
    pal.layers.forEach((c, i) => {
      layers.push(<path key={i} d={rolling(r, 120 + i * 30, 60 - i * 6)} fill={c} />);
    });
  }

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`sky${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={pal.sky[0]} />
          <stop offset="1" stopColor={pal.sky[1]} />
        </linearGradient>
        <linearGradient id={`water${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3C8782" />
          <stop offset="1" stopColor="#0F5E5A" />
        </linearGradient>
        <linearGradient id={`sea${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4DB3A5" />
          <stop offset="1" stopColor="#0E6F69" />
        </linearGradient>
      </defs>
      <rect width={W} height={H} fill={`url(#sky${uid})`} />
      <circle cx={sunX} cy={sunY} r={kind === "city" || kind === "beach" ? 34 : 22} fill="#F4A259" opacity={0.92} />

      {layers}

      {kind === "lake" && (
        <>
          <rect x="0" y="176" width={W} height="84" fill={`url(#water${uid})`} />
          <g opacity="0.28" transform={`translate(0 ${176 * 2}) scale(1 -1)`}>
            {layers.slice(-2)}
          </g>
          <rect x="0" y="176" width={W} height="84" fill={`url(#water${uid})`} opacity="0.65" />
          <path d="M40 200h60M150 214h90M270 196h70M90 232h80M250 240h100" stroke="#fff" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round" />
        </>
      )}

      {kind === "city" && (
        <>
          <path d={rolling(r, 150, 30)} fill={pal.layers[0]} />
          <g fill={pal.layers[2]}>
            {Array.from({ length: 11 }).map((_, i) => {
              const bw = 22 + r() * 22;
              const bh = 40 + r() * 70;
              return <rect key={i} x={i * 38 - 6} y={H - bh} width={bw} height={bh} />;
            })}
            <path d="M170 150a30 30 0 0 1 60 0v110h-60z" />
            <rect x="198" y="104" width="4" height="22" />
            <rect x="120" y="120" width="9" height="140" />
            <rect x="272" y="124" width="9" height="136" />
          </g>
        </>
      )}

      {kind === "beach" && (
        <>
          <rect x="0" y="130" width={W} height="80" fill={`url(#sea${uid})`} />
          <path d="M0 156q25-8 50 0t50 0 50 0 50 0 50 0 50 0 50 0 50 0M0 178q25-8 50 0t50 0 50 0 50 0 50 0 50 0 50 0 50 0" stroke="#fff" strokeOpacity="0.35" strokeWidth="2" fill="none" />
          <path d={rolling(r, 232, 26)} fill="#F2D7A6" />
          <path d="M300 236l4-52M304 184q-20-8-34 4M304 184q18-12 36-2M304 184q-8-18-26-18M304 184q10-18 30-14" stroke="#0E3B3A" strokeWidth="4" strokeLinecap="round" fill="none" />
        </>
      )}

      {kind === "farm" && (
        <>
          <g stroke="#2F7B49" strokeOpacity="0.35" strokeWidth="2">
            {Array.from({ length: 8 }).map((_, i) => (
              <path key={i} d={`M${-20 + i * 60} ${H}L${160 + i * 12} 190`} />
            ))}
          </g>
          {Array.from({ length: 5 }).map((_, i) => {
            const x = 30 + r() * 340;
            const y = 170 + r() * 60;
            return (
              <g key={i}>
                <rect x={x - 1.5} y={y} width="3" height="12" fill="#0E3B3A" />
                <circle cx={x} cy={y - 4} r={10 + r() * 6} fill="#17795B" />
              </g>
            );
          })}
        </>
      )}
    </svg>
  );
}
