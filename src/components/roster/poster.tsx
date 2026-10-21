import type { PosterId } from "@/content/portfolio";
import type { ReactNode } from "react";

type Point = [number, number];

function Stage({
  patternId,
  children,
}: {
  patternId: string;
  children: ReactNode;
}) {
  return (
    <svg viewBox="0 0 400 520" className="poster" aria-hidden="true">
      <defs>
        <pattern
          id={patternId}
          width="8"
          height="8"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="1.25" fill="var(--ink)" />
        </pattern>
      </defs>
      {children}
    </svg>
  );
}

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
  const cx = 200;
  const cy = 300;
  const outer = 168;
  const inner = 58;
  const start = Math.PI * 1.1;
  const end = Math.PI * 1.9;
  const steps = 8;
  let path = scallopedArc(cx, cy, outer, start, end, steps, 14);
  for (let index = steps; index >= 0; index -= 1) {
    const angle = start + ((end - start) * index) / steps;
    const x = cx + Math.cos(angle) * inner;
    const y = cy + Math.sin(angle) * inner;
    path += ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  return `${path} Z`;
}

function ribLines() {
  const cx = 200;
  const cy = 300;
  const outer = 168;
  const inner = 58;
  const start = Math.PI * 1.1;
  const end = Math.PI * 1.9;
  const steps = 8;
  const lines: ReactNode[] = [];
  for (let index = 0; index <= steps; index += 1) {
    const angle = start + ((end - start) * index) / steps;
    lines.push(
      <line
        key={index}
        x1={cx + Math.cos(angle) * inner}
        y1={cy + Math.sin(angle) * inner}
        x2={cx + Math.cos(angle) * (outer - 6)}
        y2={cy + Math.sin(angle) * (outer - 6)}
        stroke="var(--sheet)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />,
    );
  }
  return lines;
}

const CANOPY = canopyPath();

function LampPoster() {
  return (
    <Stage patternId="ht-lamp">
      <ellipse cx="200" cy="368" rx="148" ry="72" fill="var(--accent)" />
      <ellipse cx="200" cy="368" rx="148" ry="72" fill="url(#ht-lamp)" opacity="0.28" />
      <circle cx="200" cy="268" r="34" fill="var(--accent)" />
      <path d={CANOPY} fill="var(--ink)" />
      {ribLines()}
      <path d="M186 236h28v160h-28z" fill="var(--ink)" />
      <path d="M128 388h144l22 34H106z" fill="var(--ink)" />
      <path d="M96 422h208v20H96z" fill="var(--ink)" />
      <circle cx="200" cy="268" r="10" fill="var(--sheet)" />
    </Stage>
  );
}

function PressPoster() {
  return (
    <Stage patternId="ht-press">
      <path
        d="M138 292h214l22 168H118z"
        fill="var(--accent)"
        transform="rotate(-8 230 370)"
      />
      <path
        d="M138 292h214l22 168H118z"
        fill="url(#ht-press)"
        opacity="0.3"
        transform="rotate(-8 230 370)"
      />
      <circle cx="188" cy="118" r="86" fill="var(--ink)" />
      <circle cx="188" cy="118" r="54" fill="var(--sheet)" />
      <circle cx="188" cy="118" r="16" fill="var(--ink)" />
      {[0, 60, 120].map((angle) => (
        <rect
          key={angle}
          x="184"
          y="68"
          width="8"
          height="100"
          rx="4"
          fill="var(--ink)"
          transform={`rotate(${angle} 188 118)`}
        />
      ))}
      <circle cx="188" cy="118" r="16" fill="var(--ink)" />
      <path d="M108 196h28l10 168h-46z" fill="var(--ink)" />
      <path d="M248 196h30l16 176h-40z" fill="var(--ink)" />
      <path d="M112 188h172v22H112z" fill="var(--ink)" />
      <path d="M176 206h24v64h-24z" fill="var(--ink)" />
      <path d="M92 268h212v26H92z" fill="var(--ink)" />
      <path d="M64 352h276v34H64z" fill="var(--ink)" />
      <path d="M78 386h28v28H78zM300 386h28v28h-28z" fill="var(--ink)" />
      <path
        d="M168 318h132l10 78H156z"
        fill="var(--sheet)"
        stroke="var(--ink)"
        strokeWidth="3"
      />
      <path
        d="M178 342h104M176 362h108M174 382h96"
        stroke="var(--ink)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Stage>
  );
}

const BACK_SHEET =
  "M58 168 L84 104 L134 128 L184 78 L236 122 L286 74 L340 116 L362 92 L378 438 L48 456 Z";
const FRONT_SHEET =
  "M96 138 L118 86 L166 112 L214 70 L262 108 L310 68 L352 104 L366 404 L78 422 Z M124 176h52v132h-52z M190 168h52v146h-52z M256 180h52v124h-52z";

function SheetPoster() {
  return (
    <Stage patternId="ht-sheet">
      <path d={BACK_SHEET} fill="var(--accent)" transform="rotate(-8 200 270)" />
      <path
        d={BACK_SHEET}
        fill="url(#ht-sheet)"
        opacity="0.34"
        transform="rotate(-8 200 270)"
      />
      <path
        d={FRONT_SHEET}
        fill="var(--ink)"
        fillRule="evenodd"
        transform="rotate(5 214 250)"
      />
    </Stage>
  );
}

function PinPoster() {
  return (
    <Stage patternId="ht-pin">
      <g transform="rotate(14 250 210)">
        <rect x="176" y="156" width="168" height="118" fill="var(--accent)" />
        <rect x="176" y="156" width="168" height="118" fill="url(#ht-pin)" opacity="0.28" />
        <circle cx="214" cy="188" r="9" fill="var(--sheet)" />
      </g>
      <path d="M158 188 292 478 214 168 Z" fill="var(--ink)" />
      <circle cx="128" cy="128" r="84" fill="var(--ink)" />
      <circle cx="128" cy="128" r="52" fill="var(--sheet)" />
      <circle cx="128" cy="128" r="36" fill="var(--ink)" />
      <circle cx="128" cy="128" r="14" fill="var(--sheet)" />
    </Stage>
  );
}

function notch(points: Point[], anchor: Point, pinch: number) {
  const [x0, y0] = points[0];
  let path = `M ${x0.toFixed(1)} ${y0.toFixed(1)}`;
  for (let index = 1; index < points.length; index += 1) {
    const [x1, y1] = points[index - 1];
    const [x2, y2] = points[index];
    const mx = (x1 + x2) / 2;
    const my = (y1 + y2) / 2;
    const cx = mx + (anchor[0] - mx) * pinch;
    const cy = my + (anchor[1] - my) * pinch;
    path += ` Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}`;
  }
  return `${path} Z`;
}

const SPINE: Point = [200, 452];
const LEFT_WING: Point[] = [
  SPINE,
  [156, 404],
  [104, 350],
  [58, 284],
  [24, 210],
  [16, 146],
  [54, 90],
  [112, 52],
  [162, 30],
  [188, 18],
  [200, 12],
];
const RIGHT_WING: Point[] = LEFT_WING.map(([x, y]) => [400 - x, y]);
const LEFT_PATH = notch(LEFT_WING, SPINE, 0.46);
const RIGHT_PATH = notch(RIGHT_WING, SPINE, 0.46);

function pageLines(points: Point[]) {
  return points.slice(1, -1).map(([x, y]) => (
    <line
      key={`${x}-${y}`}
      x1="200"
      y1="430"
      x2={x}
      y2={y}
      stroke="var(--sheet)"
      strokeWidth="1.7"
      strokeLinecap="round"
      opacity="0.8"
    />
  ));
}

function FolioPoster() {
  return (
    <Stage patternId="ht-folio">
      <ellipse cx="200" cy="470" rx="156" ry="26" fill="url(#ht-folio)" opacity="0.45" />
      <path d={RIGHT_PATH} fill="var(--accent)" />
      <path d={RIGHT_PATH} fill="url(#ht-folio)" opacity="0.22" />
      <path d={LEFT_PATH} fill="var(--ink)" />
      {pageLines(LEFT_WING)}
      {pageLines(RIGHT_WING)}
      <path d="M118 392 196 378 196 492 104 474 Z" fill="var(--sheet)" stroke="var(--ink)" strokeWidth="3" />
      <path d="M204 378 282 392 296 474 204 492 Z" fill="var(--sheet)" stroke="var(--ink)" strokeWidth="3" />
      <path d="M196 378v114M204 378v114" stroke="var(--ink)" strokeWidth="2" />
      <path d="M132 418h52M130 438h56M128 458h54" stroke="var(--ink)" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M216 418h54M218 438h56M220 458h52" stroke="var(--ink)" strokeWidth="1.6" strokeLinecap="round" />
    </Stage>
  );
}

const SORT_BLOCK = "M78 86H292l28 28v236l-28 28H78l-28-28V114z";
const SORT_LETTER =
  "M116 132h168v36h-14v18h14v8H230v156h-48V194h-66v-8h14v-18h-14z";

function SortPoster() {
  return (
    <Stage patternId="ht-sort">
      <path d={SORT_BLOCK} fill="var(--accent)" transform="translate(26 30)" />
      <path
        d={SORT_BLOCK}
        fill="url(#ht-sort)"
        opacity="0.35"
        transform="translate(26 30)"
      />
      <path d={`${SORT_BLOCK} ${SORT_LETTER}`} fill="var(--ink)" fillRule="evenodd" />
    </Stage>
  );
}

const posters = {
  lamp: LampPoster,
  press: PressPoster,
  sheet: SheetPoster,
  pin: PinPoster,
  folio: FolioPoster,
  sort: SortPoster,
} satisfies Record<PosterId, () => ReactNode>;

export function Poster({ id }: { id: PosterId }) {
  const Shape = posters[id];
  return (
    <div className="poster-slot">
      <Shape />
    </div>
  );
}
