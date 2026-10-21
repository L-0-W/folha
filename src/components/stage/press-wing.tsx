import { Halftone } from "@/components/stage/halftone";
import { notch, type Point } from "@/components/stage/path";

const SHOULDER: Point = [206, 292];

const LEFT_WING: Point[] = [
  [206, 258],
  [148, 168],
  [72, 102],
  [22, 148],
  [4, 224],
  [34, 286],
  [2, 356],
  [46, 418],
  [12, 482],
  [92, 518],
  [164, 474],
  [206, 386],
];

const RIGHT_WING: Point[] = [
  [216, 246],
  [276, 142],
  [348, 86],
  [408, 124],
  [432, 196],
  [396, 258],
  [434, 326],
  [382, 386],
  [418, 448],
  [334, 472],
  [268, 418],
  [216, 332],
];

const LEFT_PATH = notch(LEFT_WING, SHOULDER, 0.5);
const RIGHT_PATH = notch(RIGHT_WING, [220, 274], 0.52);

function scallopedArc(
  cx: number,
  cy: number,
  radius: number,
  start: number,
  end: number,
  steps: number,
  bump: number,
) {
  let path = "";
  for (let index = 0; index <= steps; index += 1) {
    const angle = start + ((end - start) * index) / steps;
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    if (index === 0) {
      path += `M ${x.toFixed(1)} ${y.toFixed(1)}`;
      continue;
    }
    const mid = start + ((end - start) * (index - 0.5)) / steps;
    const bx = cx + Math.cos(mid) * (radius + bump);
    const by = cy + Math.sin(mid) * (radius + bump);
    path += ` Q ${bx.toFixed(1)} ${by.toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  return path;
}

function canopyPath() {
  const cx = 214;
  const cy = 262;
  const outer = 154;
  const inner = 48;
  const start = Math.PI * 1.06;
  const end = Math.PI * 1.94;
  const steps = 9;
  let path = scallopedArc(cx, cy, outer, start, end, steps, 18);
  for (let index = steps; index >= 0; index -= 1) {
    const angle = start + ((end - start) * index) / steps;
    const x = cx + Math.cos(angle) * inner;
    const y = cy + Math.sin(angle) * inner;
    path += ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  return `${path} Z`;
}

function canopyRibs() {
  const cx = 214;
  const cy = 262;
  const outer = 148;
  const inner = 48;
  const start = Math.PI * 1.06;
  const end = Math.PI * 1.94;
  const steps = 9;
  const lines = [];
  for (let index = 0; index <= steps; index += 1) {
    const angle = start + ((end - start) * index) / steps;
    lines.push(
      <line
        key={index}
        x1={cx + Math.cos(angle) * inner}
        y1={cy + Math.sin(angle) * inner}
        x2={cx + Math.cos(angle) * outer}
        y2={cy + Math.sin(angle) * outer}
        stroke="var(--sheet)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />,
    );
  }
  return lines;
}

const CANOPY = canopyPath();

function wingRibs(points: readonly Point[], anchor: Point) {
  return points.slice(2, -1).map(([x, y]) => (
    <line
      key={`${x}-${y}`}
      x1={anchor[0]}
      y1={anchor[1]}
      x2={x}
      y2={y}
      stroke="var(--sheet)"
      strokeWidth="1.7"
      strokeLinecap="round"
      opacity="0.72"
    />
  ));
}

export function PressWing() {
  return (
    <svg viewBox="0 0 440 560" className="poster" aria-hidden="true">
      <defs>
        <Halftone id="ht-wing" />
      </defs>
      <path d={RIGHT_PATH} fill="var(--accent)" />
      <path d={RIGHT_PATH} fill="url(#ht-wing)" opacity="0.28" />
      <path d={LEFT_PATH} fill="var(--ink)" />
      {wingRibs(LEFT_WING, SHOULDER)}
      <ellipse cx="214" cy="500" rx="150" ry="22" fill="url(#ht-wing)" opacity="0.35" />
      <path d={CANOPY} fill="var(--ink)" />
      <path d={CANOPY} fill="url(#ht-wing)" opacity="0.16" />
      {canopyRibs()}
      <path d="M200 250h28v158h-28z" fill="var(--ink)" />
      <path d="M136 408h156l26 40H110z" fill="var(--ink)" />
      <path d="M96 448h232v20H96z" fill="var(--ink)" />
      <circle cx="214" cy="236" r="18" fill="var(--sheet)" />
      <circle cx="214" cy="236" r="7" fill="var(--accent)" />
      <path
        d="M58 338l92-16 14 62-90 18z"
        fill="var(--sheet)"
        stroke="var(--ink)"
        strokeWidth="3"
      />
      <path
        d="M76 352h62M74 368h64M72 384h54"
        fill="none"
        stroke="var(--ink)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
